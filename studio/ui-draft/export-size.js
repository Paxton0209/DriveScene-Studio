// All export surfaces consume this contract; preview raster density stays independent.
export function exportSize(format='png',width=3840){
 const chosen=format==='video'?1920:Number(width);
 if(![1920,3840].includes(chosen))throw new RangeError('Choose 1920 × 1080 or 3840 × 2160.');
 return {width:chosen,height:chosen*9/16};
}
export const sizeLabel=({width,height})=>`${width} × ${height}`;
