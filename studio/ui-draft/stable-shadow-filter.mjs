// Keep the renderer dependency untouched. Uniform-depth texels can produce a
// slightly negative variance after floating-point cancellation; sqrt must stay
// finite while a moving caster crosses those texels.
export function stableShadowFilter(source){
 const from='sqrt( squared_mean - mean * mean )';
 if(!source.includes(from))throw Error('UI draft VSM shader baseline mismatch');
 return source.replace(from,'sqrt( max( squared_mean - mean * mean, 0.0 ) )');
}
