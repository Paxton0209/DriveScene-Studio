import test from 'node:test';
import assert from 'node:assert/strict';
import {inflateSync} from 'node:zlib';
import * as THREE from 'three';
import {depthPng,zipFiles} from '../export-files.js';
import {cameraMetadata,perspectiveSvg,renderDepth} from '../export-scene.js';

test('16-bit depth PNG preserves samples and flips GPU rows to top-left origin',async()=>{
 const pixels=new Uint8Array([0x12,0x34,0,255,0xff,0xff,0,255,0,1,0,255,0x80,0,0,255]);
 const bytes=Buffer.from(await (await depthPng(pixels,2,2)).arrayBuffer());
 assert.deepEqual([...bytes.subarray(0,8)],[137,80,78,71,13,10,26,10]);
 assert.equal(bytes.readUInt32BE(16),2);assert.equal(bytes.readUInt32BE(20),2);assert.equal(bytes[24],16);assert.equal(bytes[25],0);
 const compressed=[];
 for(let offset=8;offset<bytes.length;){const length=bytes.readUInt32BE(offset);if(bytes.toString('ascii',offset+4,offset+8)==='IDAT')compressed.push(bytes.subarray(offset+8,offset+8+length));offset+=length+12;}
 assert.deepEqual([...inflateSync(Buffer.concat(compressed))],[0,0,1,0x80,0,0,0x12,0x34,0xff,0xff]);
});

test('ZIP contains matching UTF-8 names, binary payloads and central-directory offsets',async()=>{
 const bytes=Buffer.from(await (await zipFiles([['camera.json','{"scene":"road"}'],['深度.png',new Blob([new Uint8Array([0,128,255])])]])).arrayBuffer());
 const end=bytes.length-22;assert.equal(bytes.readUInt32LE(end),0x06054b50);assert.equal(bytes.readUInt16LE(end+10),2);
 let central=bytes.readUInt32LE(end+16);const extracted=[];
 for(let index=0;index<2;index++){
  assert.equal(bytes.readUInt32LE(central),0x02014b50);
  const offset=bytes.readUInt32LE(central+42),size=bytes.readUInt32LE(central+24),nameLength=bytes.readUInt16LE(central+28),name=bytes.toString('utf8',central+46,central+46+nameLength);
  assert.equal(bytes.readUInt32LE(offset),0x04034b50);assert.equal(bytes.readUInt16LE(offset+6),0x800);assert.equal(bytes.readUInt32LE(offset+14),bytes.readUInt32LE(central+16));
  const dataOffset=offset+30+bytes.readUInt16LE(offset+26);extracted.push([name,[...bytes.subarray(dataOffset,dataOffset+size)]]);central+=46+nameLength;
 }
 assert.deepEqual(extracted,[['camera.json',[...new TextEncoder().encode('{"scene":"road"}')]],['深度.png',[0,128,255]]]);
 assert.equal(central,end);
});

function fixture(){
 const camera=new THREE.PerspectiveCamera(38,16/9,1,2000),car=new THREE.Object3D();car.position.set(1.85,.02,0);
 camera.position.set(1.85,8.5,23);camera.lookAt(1.85,0,-24);camera.setViewOffset(1920,1080,13,27,1920,1080);camera.updateMatrixWorld(true);
 return {camera,car,cameraAim:new THREE.Vector3(1.85,0,-24),state:{id:'02',mode:'light',laneCount:6},scene:new THREE.Scene(),mat:{}};
}

test('camera JSON reconstructs image pixels with the full off-center projection',()=>{
 const world=fixture(),metadata=cameraMetadata(world,{sceneName:'road',sourceUrl:'https://example.test/?scene=02'});
 assert.equal(metadata.camera.viewOffset.offsetY,27);assert.equal(metadata.camera.viewOffset.offsetX,13);
 const projection=new THREE.Matrix4().fromArray(metadata.camera.projectionMatrix),view=new THREE.Matrix4().fromArray(metadata.camera.viewMatrix);
 for(const anchor of metadata.anchors){
  const point=new THREE.Vector4(...anchor.world,1).applyMatrix4(view).applyMatrix4(projection);
  assert.ok(Math.abs((point.x/point.w+1)*960-anchor.pixel[0])<1e-9);
  assert.ok(Math.abs((1-point.y/point.w)*540-anchor.pixel[1])<1e-9);
 }
 assert.equal(metadata.referencePlane.point[1],0);assert.equal(metadata.depth.format,'16-bit grayscale PNG');
});

test('SVG clips the same reference plane for low, high and bird-eye cameras',()=>{
 for(const position of [[1.85,8.5,23],[0,26,32],[0,34,.1]]){
  const world=fixture();world.camera.position.set(...position);world.camera.lookAt(0,0,0);world.camera.updateMatrixWorld(true);
  const svg=perspectiveSvg(world);assert.ok(svg.includes('viewBox="0 0 1920 1080"'));assert.ok(svg.includes('id="reference-arrow"'));assert.ok(!/NaN|Infinity/.test(svg));
  for(const match of svg.matchAll(/d="M([\d.-]+) ([\d.-]+)L([\d.-]+) ([\d.-]+)"/g)){
   const coordinates=match.slice(1).map(Number);assert.ok(coordinates.every((value,index)=>value>=-.001&&value<=(index%2?1080:1920)+.001));
  }
 }
});

test('failed depth render restores scene visibility, materials and renderer state',()=>{
 const world=fixture(),originalMaterial=new THREE.MeshBasicMaterial(),mesh=new THREE.Mesh(new THREE.BoxGeometry(),originalMaterial);world.scene.add(mesh);
 world.sky=new THREE.Object3D();world.scene.add(world.sky);world.egoContact=new THREE.Object3D();world.tailReflection=new THREE.Object3D();
 const target={},viewport=new THREE.Vector4(2,3,100,80),scissor=new THREE.Vector4(5,6,70,60),clear=new THREE.Color('#123456');let activeTarget=target,currentViewport=viewport.clone(),currentScissor=scissor.clone(),scissorTest=true,currentClear=clear.clone(),clearAlpha=.4;
 world.renderer={autoClear:false,shadowMap:{autoUpdate:true,needsUpdate:true},getRenderTarget:()=>activeTarget,getViewport:output=>output.copy(currentViewport),getScissor:output=>output.copy(currentScissor),getScissorTest:()=>scissorTest,getClearColor:output=>output.copy(currentClear),getClearAlpha:()=>clearAlpha,setRenderTarget:value=>{activeTarget=value;},setViewport:(...values)=>{currentViewport=values[0]?.isVector4?values[0].clone():new THREE.Vector4(...values);},setScissor:value=>{currentScissor=value.clone();},setScissorTest:value=>{scissorTest=value;},setClearColor:(value,alpha)=>{currentClear=new THREE.Color(value);clearAlpha=alpha;},render(){throw new Error('GPU unavailable');}};
 assert.throws(()=>renderDepth(world),/GPU unavailable/);assert.equal(mesh.material,originalMaterial);assert.equal(world.sky.visible,true);assert.equal(world.egoContact.visible,true);assert.equal(world.tailReflection.visible,true);assert.equal(activeTarget,target);assert.deepEqual(currentViewport,viewport);assert.deepEqual(currentScissor,scissor);assert.equal(scissorTest,true);assert.equal(clearAlpha,.4);assert.ok(currentClear.equals(clear));assert.equal(world.renderer.autoClear,false);assert.deepEqual(world.renderer.shadowMap,{autoUpdate:true,needsUpdate:true});
});
