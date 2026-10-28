import test from 'node:test';import assert from 'node:assert/strict';import * as T from 'three';import {roadSurfaceMorph}from'../engine/road-surface-morph.js';import{prepareRoadLayout}from'../engine/road-layout-morph.js';
for(const [from,to]of [[2,4],[2,6],[4,2],[4,6],[6,2],[6,4]])test(`road and rigid shoulders remain joined throughout ${from} → ${to}`,()=>{
 const mat={road:new T.MeshStandardMaterial(),curb:new T.MeshStandardMaterial(),pavement:new T.MeshStandardMaterial()},root=new T.Group(),road=new T.Mesh(new T.PlaneGeometry(to*3.7,300),mat.road);root.add(road);
 const shoulders=[];for(const side of[-1,1]){const mesh=new T.Mesh(new T.BoxGeometry(1.6,.18,300),mat.pavement);mesh.position.x=side*(to*3.7/2+.8);root.add(mesh);shoulders.push(mesh);}
 prepareRoadLayout(root,new T.Group(),mat);assert.equal(road.geometry.attributes.roadLayoutRole.getX(0),0);
 const morph=roadSurfaceMorph(root,mat,to*3.7);
 for(let step=0;step<=20;step++){const width=(from+(to-from)*step/20)*3.7;morph.apply(width);assert.ok(Math.abs(road.geometry.parameters.width*road.scale.x-width)<1e-8);for(const mesh of shoulders){assert.equal(mesh.scale.x,1);assert.ok(Math.abs(Math.abs(mesh.position.x)-.8-width/2)<1e-8);}}
 morph.reset();assert.equal(road.scale.x,1);
});
