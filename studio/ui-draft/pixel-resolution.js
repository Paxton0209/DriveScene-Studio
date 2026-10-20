export function previewPixels(cssWidth,pixelRatio=1){
 const ratio=Math.max(1,Math.min(Number(pixelRatio)||1,2)),width=Math.max(16,Math.ceil(Math.max(1,Number(cssWidth)||1)*ratio/16)*16);
 return {width,height:width*9/16,pixelRatio:ratio};
}
