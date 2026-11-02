// Preview has a finite GPU budget. Export uses its independently selected size.
export const previewPixelLimit=renderer=>{
 try{const gl=renderer.getContext(),info=gl.getExtension('WEBGL_debug_renderer_info');
  if(info&&/swiftshader|llvmpipe|lavapipe|software/i.test(gl.getParameter(info.UNMASKED_RENDERER_WEBGL)))return 960;
 }catch{}
 return 2560;
};
export function previewPixels(cssWidth,pixelRatio=1,viewportScale=1,maxWidth=2560){
 const ratio=Math.max(1,Math.min(Number(pixelRatio)||1,2))*Math.max(1,Math.min(Number(viewportScale)||1,4));
 const limit=Number.isFinite(maxWidth)&&maxWidth>=16?Math.floor(maxWidth/16)*16:2560;
 const width=Math.min(limit,Math.max(16,Math.ceil(Math.max(1,Number(cssWidth)||1)*ratio/16)*16));
 return {width,height:width*9/16,pixelRatio:ratio};
}
