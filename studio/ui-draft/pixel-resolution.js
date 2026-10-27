export function previewPixels(cssWidth,pixelRatio=1,viewportScale=1){
 // Pinch zoom magnifies the compositor surface without changing CSS width.
 // Render its real display footprint; bound oversized buffers at 4K.
 const ratio=Math.max(2,Math.min(Number(pixelRatio)||1,2))*Math.max(1,Math.min(Number(viewportScale)||1,4)),width=Math.min(4096,Math.max(16,Math.ceil(Math.max(1,Number(cssWidth)||1)*ratio/16)*16));
 return {width,height:width*9/16,pixelRatio:ratio};
}
