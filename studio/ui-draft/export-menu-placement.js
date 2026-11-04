// Export controls share a direction even when their option counts differ.
export function exportMenuPlacement({items, index, viewportHeight, exportTop, gap=4, edge=8}) {
  const above=items.every(({top,height})=>top-gap-height>=edge);
  const item=items[index],direction=above?'up':'down';
  const available=above?item.top-gap-edge:Math.min(viewportHeight-edge,exportTop-gap)-(item.bottom+gap);
  // In short windows the whole group flips, and the list scrolls before Export.
  const height=Math.min(item.height,Math.max(0,available));
  return {direction,height,top:above?item.top-gap-height:item.bottom+gap};
}
