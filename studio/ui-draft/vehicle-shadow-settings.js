// Fixed endpoints from the user's three approved screenshots. Light parking is calibrated separately.
const presets={
 road:{light:{ego:2,traffic:1.2},dark:{ego:2.54,traffic:1.36}},
 parking:{light:{ego:2,traffic:1.2,environment:1},dark:{ego:2.7,traffic:1.27,environment:1.07}}
};
export function vehicleShadowPreset(family,theme){return {...presets[family==='parking'?'parking':'road'][theme==='dark'?'dark':'light']};}
