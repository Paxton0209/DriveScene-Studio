// Navigation describes geometry. Environment options never select another camera.
export const structures=[
 {key:'road',name:'Road',group:'open',layouts:[['02','Straight'],['09','Two lanes'],['13','Curved']],buildings:true,waterfront:true,trees:true,roadworks:true},
 {key:'elevated',name:'Elevated road',group:'open',layouts:[['03','Elevated']],buildings:true,trees:true},
 {key:'junction',name:'Junction',group:'open',layouts:[['05','Crossroads'],['08','T-junction']],buildings:true,trees:true},
 {key:'ramp',name:'Ramp',group:'open',layouts:[['06','Exit'],['07','Merge']]},
 {key:'parking',name:'Indoor parking',group:'closed',layouts:[['10','Aisle'],['14','Overhead'],['16','Aisle raised']]},
 {key:'outdoor',name:'Outdoor parking',group:'closed',layouts:[['17','Default'],['18','Raised'],['19','Bird’s-eye']],buildings:true,trees:true}
];
export const legacyScenes={'01':'02','04':'09','12':'02','15':'10','11':'09'};