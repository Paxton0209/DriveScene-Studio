import {zipFiles} from '../engine/export-files.js';

const variants = [];
for (const lanes of [2, 4, 6]) for (const camera of ['low', 'high']) variants.push({name: `Road-${lanes}lanes-${camera}`, label: `道路 · ${lanes} 车道 · ${camera === 'low' ? '低' : '高'}机位`, scene: '02', lanes, camera});
for (const camera of ['low', 'high']) variants.push({name: `Elevated-${camera}`, label: `高架 · ${camera === 'low' ? '低' : '高'}机位`, scene: '03', camera});
for (const [scene, type, label] of [['06', 'Exit', '驶出'], ['07', 'Merge', '汇入']]) for (const camera of ['low', 'high']) variants.push({name: `Ramp-${type}-${camera}`, label: `匝道 · ${label} · ${camera === 'low' ? '低' : '高'}机位`, scene, camera});
for (const [scene, type, label] of [['05', 'Crossroads', '十字路口'], ['08', 'T-junction', 'T 字路口']]) variants.push({name: `Junction-${type}`, label: `路口 · ${label} · 事件起始机位`, scene, camera: 'low'});
for (const [family, title, scenes] of [['Indoor', '室内泊车', ['10', '16', '14']], ['Outdoor', '室外泊车', ['17', '18', '19']]]) {
  ['default', 'raised', 'bev'].forEach((camera, index) => variants.push({name: `${family}-${camera}`, label: `${title} · ${{default:'默认',raised:'抬高',bev:'俯视'}[camera]}机位`, scene: scenes[index], camera}));
}
const preview = document.getElementById('preview');
const status = document.getElementById('status');
const report = {version: 'ui-draft current worktree',createdAt: new Date().toISOString(),subjective: '待用户及客户评审，非终稿',resolution: [1920,1080],settings: {model:'model-3',weather:'default',traffic:false,buildings:true,trees:true,coast:false,seed:110},entries: [],errors: []};
const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
async function ready() {
  const started = performance.now();
  while (performance.now() - started < 60000) {
    const api = preview.contentWindow?.layoutEngine;
    if (api?.draft?.get().ready && api.get().ready && !api.get().busy) return api;
    await sleep(100);
  }
  throw Error('场景加载超时');
}
function gallery() {
  return `<!doctype html><html lang="zh-CN"><meta charset="utf-8"><title>DriveScene SR 场景评审</title><style>body{margin:32px auto;max-width:1500px;padding:0 24px;font:15px/1.6 -apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif;color:#242428;background:#f5f5f7}h1{font-size:26px}section{margin:32px 0}h2{font-size:17px}aside{display:grid;grid-template-columns:1fr 1fr;gap:16px}figure{margin:0}img{display:block;width:100%;height:auto}a{color:inherit}figcaption{color:#666;padding-top:6px}@media(max-width:800px){aside{grid-template-columns:1fr}}</style><h1>DriveScene SR 场景评审</h1><p>2026-10-20 · 当前草稿 · 20 组同机位深浅对照 · 40 张 1920×1080 PNG · 待评审，非终稿。</p><p>统一 Tesla Model 3、晴天，关闭他车，保留可用的建筑与树木；道路、高架与匝道显示智驾线静态完成态。点击图片查看原尺寸。本包用于评审构图、色彩与光影，不用于验收动效与性能。</p>${variants.map((variant,index)=>`<section><h2>${String(index+1).padStart(2,'0')} · ${variant.label}</h2><aside>${['light','dark'].map(theme=>{const file=`${theme}/${String(index+1).padStart(2,'0')}-${variant.name}-${theme}.png`;return `<figure><a href="${file}"><img loading="lazy" src="${file}" alt="${variant.label} ${theme}"></a><figcaption>${theme==='light'?'浅色':'深色'} · ${variant.label}</figcaption></figure>`}).join('')}</aside></section>`).join('')}</html>`;
}
document.getElementById('start').onclick = async () => {
  document.getElementById('start').disabled = true;
  const files = [];
  try {
    for (const [index, variant] of variants.entries()) {
      const query = new URLSearchParams({qa:'client-review',review:'ui-draft',quality:'sr50',scene:variant.scene,mode:'light',lanes:String(variant.lanes||6),view:variant.camera,model:'model-3',buildings:'1',trees:'1',waterfront:'0',roadworks:'0',vehicle:'1',weather:'default',path:'0',seed:'110',paused:'1'});
      status.textContent = `${index + 1} / ${variants.length} · ${variant.label}`;
      await new Promise(resolve => {preview.onload=resolve;preview.src=`./engine.html?${query}`});
      const api = await ready();
      const bridge = api.draft;
      bridge.setPlaying(false);
      bridge.param('traffic', false);
      bridge.param('path', ['02','03','06','07'].includes(variant.scene));
      await bridge.export({format:'camera'});
      const cameraPose = bridge.capture().pose;
      const entry = {variant, captures: []};
      for (const theme of ['light','dark']) {
        if (api.get().mode !== theme) await bridge.theme(theme);
        const result = await bridge.export({format:'png',cameraPose});
        const metadata = JSON.parse(await (await bridge.export({format:'camera',cameraPose})).blob.text());
        const filename = `${theme}/${String(index+1).padStart(2,'0')}-${variant.name}-${theme}.png`;
        files.push([filename,new Blob([await result.blob.arrayBuffer()],{type:'image/png'})]);
        entry.captures.push({filename,theme,bytes:result.blob.size,camera:metadata.camera,runtime:bridge.get(),state:api.get().state});
      }
      const flatten = value => typeof value === 'number' ? [value] : value && typeof value === 'object' ? Object.values(value).flatMap(flatten) : [];
      const first = flatten(entry.captures[0].camera), second = flatten(entry.captures[1].camera);
      entry.cameraMaximumDifference = Math.max(...first.map((value, offset) => Math.abs(value - second[offset])));
      entry.sameCamera = first.length === second.length && entry.cameraMaximumDifference < 1e-7;
      report.entries.push(entry);
      document.body.dataset.report = JSON.stringify(report);
      if (!entry.sameCamera) throw Error(`${variant.name} 深浅机位不一致 (${entry.cameraMaximumDifference})`);
      document.getElementById('result').textContent = `已完成 ${report.entries.length * 2} 张；深浅机位一致。`;
    }
    status.textContent = '40 张已生成，正在打包…';
    files.push(['index.html',gallery()],['capture-manifest.json',JSON.stringify(report,null,2)]);
    const link = document.getElementById('download');
    link.href = URL.createObjectURL(await zipFiles(files));
    link.download = 'DriveScene-SR-review-2026-10-20.zip';
    link.hidden = false;
    status.textContent = '40 张渲染图导出完成，可下载评审包。';
  } catch (error) {
    report.errors.push(error.message);
    document.body.dataset.report = JSON.stringify(report);
    status.textContent = `导出停止：${error.message}`;
  }
};
