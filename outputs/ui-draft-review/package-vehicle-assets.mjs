import {readFile,writeFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';

const root='/Users/peixin/Desktop/DriveScene-车模透明素材-2026-10-20';
const models=['Tesla-Model-3','BMW-X6','BMW-iX','Volvo-XC90'];
const cards=[];
const records=[];
for(const model of models){
 for(const angle of [30,40,50]){
  const name=`${model}_azimuth-${angle}_alpha.png`;
  const bytes=await readFile(`${root}/01-透明PNG/${name}`);
  records.push({file:`01-透明PNG/${name}`,model,azimuthDegrees:angle,elevationDegrees:14,fovDegrees:20,width:1600,height:704,alpha:true,previouslySelected:angle===40,sha256:createHash('sha256').update(bytes).digest('hex')});
  cards.push(`<figure><div class="image"><img src="data:image/png;base64,${bytes.toString('base64')}" alt="${model} ${angle}°"></div><figcaption>${model.replaceAll('-',' ')}<span>${angle}°${angle===40?' · 已选角度':''}</span></figcaption></figure>`);
 }
}
const html=`<!doctype html><html lang="zh-CN"><meta charset="utf-8"><title>DriveScene · 车模角度总览</title><style>*{box-sizing:border-box}body{margin:0;padding:28px;background:#f5f5f7;color:#202126;font:14px -apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif}h1{font-size:22px;margin:0 0 8px}p{color:#646671;margin:0 0 20px}main{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}figure{margin:0;border:1px solid #dedee3;border-radius:10px;overflow:hidden;background:white}.image{background-color:#eeeef1;background-image:conic-gradient(#e4e4e9 25%,transparent 0 50%,#e4e4e9 0 75%,transparent 0);background-size:20px 20px}.image img{width:100%;height:auto;display:block}figcaption{display:flex;justify-content:space-between;padding:11px 14px;font-weight:500}span{color:#69707d;font-size:12px}</style><h1>DriveScene · 车模角度总览</h1><p>4 款车型 × 3 个角度 · 透明 PNG 1600 × 704 · 棋盘格仅为预览背景，不在素材中</p><main>${cards.join('')}</main></html>`;
const compactHtml=html.replace('height:auto;display:block','height:100px;object-fit:contain;display:block');
await writeFile(`${root}/00-车模角度总览.html`,compactHtml);
await writeFile(new URL('./vehicle-assets-overview.html',import.meta.url),compactHtml);
await writeFile(`${root}/素材清单.json`,JSON.stringify(records,null,2));
await writeFile(`${root}/README-给Claude.md`,`# DriveScene 车模透明素材

本素材用于右侧车型检查器与车型选择弹层的布局挑选。当前界面使用的四款车型为 Tesla Model 3、BMW X6、BMW iX、Volvo XC90。这里提供每款车的水平相机方位角 30°、40°、50°，统一俯角 14°、FOV 20°。此前用户选定 40°；其余两档供对照，不代表已改选。

## 文件

- \`01-透明PNG/\`：12 张 1600×704 RGBA PNG，由现有真实 3D 模型重新渲染，非小图放大。保留抗锯齿半透明边缘及极轻接触阴影，背景 Alpha 为 0。
- \`02-当前UI原尺寸/\`：4 张当前界面使用的 400×176 PNG 原文件，未修改。文件名 model-3 / x6 / ix / xc90 对应上面的四车型，均为此前选定的 40°。
- \`00-车模角度总览.html\`：可离线双击打开的总览，内嵌全部图片。棋盘格仅用于检查透明底。
- \`素材清单.json\`：高清文件名、车型、相机参数、尺寸及 SHA-256。

## 布局使用

PNG 已有统一画布及车身底部对齐，建议先使用 contain 等比适配，保持图片外框一致，再安排车名与箭头。图片的透明留白属于画布；评估车与文字间距时应看车身可见轮廓，而不能只看图片外框。1600×704 可按 200×88 或 100×44 等比例使用，避免拉伸和重复缩放造成模糊。

车身保持模型真实比例，因此不同车型的可见尺寸会略有差异。这里的角度是现有渲染器约定的水平方位角，全部为同一侧的前侧视角，未镜像。图片保留当前模型材质和统一棚拍光，不包含场景背景，也不提供可在 Figma 内旋转的 3D 模型。

请仅在独立 UI 草稿中做布局，不覆盖正式工作台。用户此轮要求是整理素材供挑选，未授权提交、推送或部署。
`);
console.log(JSON.stringify({root,highResolution:records.length,originals:(await readdir(`${root}/02-当前UI原尺寸`)).length}));
