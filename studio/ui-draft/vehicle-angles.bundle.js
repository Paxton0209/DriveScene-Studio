var nh=0,$o=1,ih=2;var Qo=1,aa=2,vn=3,an=0,Ot=1,Ht=2,kn=0,hi=1,ec=2,tc=3,nc=4,sh=5,Kn=100,rh=101,ah=102,oh=103,ch=104,lh=200,hh=201,uh=202,dh=203,Hr=204,Gr=205,fh=206,ph=207,mh=208,gh=209,bh=210,_h=211,xh=212,yh=213,vh=214,oa=0,ca=1,la=2,ui=3,ha=4,ua=5,da=6,fa=7,ic=0,Mh=1,Sh=2,zn=0,Th=1,Eh=2,wh=3,pa=4,Ah=5,Rh=6,Ch=7,Ho="attached",Ih="detached",sc=300,vi=301,Mi=302,ls=303,ma=304,Si=306,Jn=1e3,pn=1001,Ji=1002,Tt=1003,ga=1004;var Ti=1005;var Et=1006,hs=1007;var hn=1008;var un=1009,rc=1010,ac=1011,us=1012,ba=1013,$n=1014,Gt=1015,Qn=1016,_a=1017,xa=1018,ds=1020,oc=35902,cc=35899,lc=1021,hc=1022,wt=1023,Zi=1026,fs=1027,ya=1028,va=1029,uc=1030,Ma=1031;var Sa=1033,ar=33776,or=33777,cr=33778,lr=33779,Ta=35840,Ea=35841,wa=35842,Aa=35843,Ra=36196,Ca=37492,Ia=37496,Pa=37808,La=37809,Da=37810,Ua=37811,Na=37812,Fa=37813,Oa=37814,Ba=37815,ka=37816,za=37817,Ha=37818,Ga=37819,Va=37820,Wa=37821,Xa=36492,qa=36494,ja=36495,Ya=36283,Ka=36284,Ja=36285,Za=36286;var di=2300,fi=2301,zr=2302,Go=2400,Vo=2401,Wo=2402,Ph=2500;var dc=0,hr=1,ps=2,Lh=3200,Dh=3201;var fc=0,Uh=1,Hn="",ft="srgb",pt="srgb-linear",Us="linear",Je="srgb";var li=7680;var Xo=519,Nh=512,Fh=513,Oh=514,pc=515,Bh=516,kh=517,zh=518,Hh=519,Vr=35044;var mc="300 es",sn=2e3,Ns=2001;var Ln=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yl=1234567,Ls=Math.PI/180,pi=180/Math.PI;function rn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[s&255]+Rt[s>>8&255]+Rt[s>>16&255]+Rt[s>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function ke(s,e,t){return Math.max(e,Math.min(t,s))}function gc(s,e){return(s%e+e)%e}function Ku(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Ju(s,e,t){return s!==e?(t-s)/(e-s):0}function Ds(s,e,t){return(1-t)*s+t*e}function Zu(s,e,t,n){return Ds(s,e,1-Math.exp(-t*n))}function $u(s,e=1){return e-Math.abs(gc(s,e*2)-e)}function Qu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ed(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function td(s,e){return s+Math.floor(Math.random()*(e-s+1))}function nd(s,e){return s+Math.random()*(e-s)}function id(s){return s*(.5-Math.random())}function sd(s){s!==void 0&&(yl=s);let e=yl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rd(s){return s*Ls}function ad(s){return s*pi}function od(s){return(s&s-1)===0&&s!==0}function cd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ld(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hd(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),b=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*h,l*d,o*c);break;case"YZY":s.set(l*d,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*d,o*u,o*c);break;case"XZX":s.set(o*u,l*b,l*p,o*c);break;case"YXY":s.set(l*p,o*u,l*b,o*c);break;case"ZYZ":s.set(l*b,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function nn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ke(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ei={DEG2RAD:Ls,RAD2DEG:pi,generateUUID:rn,clamp:ke,euclideanModulo:gc,mapLinear:Ku,inverseLerp:Ju,lerp:Ds,damp:Zu,pingpong:$u,smoothstep:Qu,smootherstep:ed,randInt:td,randFloat:nd,randFloatSpread:id,seededRandom:sd,degToRad:rd,radToDeg:ad,isPowerOfTwo:od,ceilPowerOfTwo:cd,floorPowerOfTwo:ld,setQuaternionFromProperEuler:hd,normalize:Ke,denormalize:nn},ze=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=r[a+0],p=r[a+1],b=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=b,e[t+3]=g;return}if(h!==g||l!==d||c!==p||u!==b){let m=1-o,f=l*d+c*p+u*b+h*g,y=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){let A=Math.sqrt(M),E=Math.atan2(A,f*y);m=Math.sin(m*E)/A,o=Math.sin(o*E)/A}let _=o*y;if(l=l*m+d*_,c=c*m+p*_,u=u*m+b*_,h=h*m+g*_,m===1-o){let A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],d=r[a+1],p=r[a+2],b=r[a+3];return e[t]=o*b+u*h+l*p-c*d,e[t+1]=l*b+u*d+c*h-o*p,e[t+2]=c*b+u*p+o*d-l*h,e[t+3]=u*b-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),d=l(n/2),p=l(i/2),b=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*p*b,this._y=c*p*h-d*u*b,this._z=c*u*b+d*p*h,this._w=c*u*h-d*p*b;break;case"YXZ":this._x=d*u*h+c*p*b,this._y=c*p*h-d*u*b,this._z=c*u*b-d*p*h,this._w=c*u*h+d*p*b;break;case"ZXY":this._x=d*u*h-c*p*b,this._y=c*p*h+d*u*b,this._z=c*u*b+d*p*h,this._w=c*u*h-d*p*b;break;case"ZYX":this._x=d*u*h-c*p*b,this._y=c*p*h+d*u*b,this._z=c*u*b-d*p*h,this._w=c*u*h+d*p*b;break;case"YZX":this._x=d*u*h+c*p*b,this._y=c*p*h+d*u*b,this._z=c*u*b-d*p*h,this._w=c*u*h-d*p*b;break;case"XZY":this._x=d*u*h-c*p*b,this._y=c*p*h-d*u*b,this._z=c*u*b+d*p*h,this._w=c*u*h+d*p*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=i+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return po.copy(this).projectOnVector(e),this.sub(po)}reflect(e){return this.sub(po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},po=new I,vl=new Zt,Le=class s{constructor(e,t,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],b=n[8],g=i[0],m=i[3],f=i[6],y=i[1],M=i[4],_=i[7],A=i[2],E=i[5],R=i[8];return r[0]=a*g+o*y+l*A,r[3]=a*m+o*M+l*E,r[6]=a*f+o*_+l*R,r[1]=c*g+u*y+h*A,r[4]=c*m+u*M+h*E,r[7]=c*f+u*_+h*R,r[2]=d*g+p*y+b*A,r[5]=d*m+p*M+b*E,r[8]=d*f+p*_+b*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,p=c*r-a*l,b=t*h+n*d+i*p;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/b;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(mo.makeScale(e,t)),this}rotate(e){return this.premultiply(mo.makeRotation(-e)),this}translate(e,t){return this.premultiply(mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},mo=new Le;function bc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function $i(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Gh(){let s=$i("canvas");return s.style.display="block",s}var Ml={};function Qi(s){s in Ml||(Ml[s]=!0,console.warn(s))}function Vh(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Sl=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tl=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ud(){let s={enabled:!0,workingColorSpace:pt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Je&&(i.r=Pn(i.r),i.g=Pn(i.g),i.b=Pn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hn?Us:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Qi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Qi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[pt]:{primaries:e,whitePoint:n,transfer:Us,toXYZ:Sl,fromXYZ:Tl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ft},outputColorSpaceConfig:{drawingBufferColorSpace:ft}},[ft]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:Sl,fromXYZ:Tl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ft}}}),s}var Ve=ud();function Pn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ki(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ni,Wr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ni===void 0&&(Ni=$i("canvas")),Ni.width=e.width,Ni.height=e.height;let i=Ni.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$i("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Pn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pn(t[n]/255)*255):t[n]=Pn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},dd=0,es=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=rn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(go(i[a].image)):r.push(go(i[a]))}else r=go(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function go(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Wr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var fd=0,bo=new I,Mt=class s extends Ln{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=pn,i=pn,r=Et,a=hn,o=wt,l=un,c=s.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=rn(),this.name="",this.source=new es(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bo).x}get height(){return this.source.getSize(bo).y}get depth(){return this.source.getSize(bo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jn:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case Ji:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jn:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case Ji:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=sc;Mt.DEFAULT_ANISOTROPY=1;var qe=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],b=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(b-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(b+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,_=(p+1)/2,A=(f+1)/2,E=(u+d)/4,R=(h+g)/4,D=(b+m)/4;return M>_&&M>A?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=E/n,r=R/n):_>A?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=E/i,r=D/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=R/r,i=D/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-b)*(m-b)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-b)/y,this.y=(h-g)/y,this.z=(d-u)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xr=class extends Ln{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new Mt(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new es(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends Xr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Fs=class extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var qr=class extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bt=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qt):Qt.fromBufferAttribute(r,a),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(e.matrixWorld),this.union(gr)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),br.subVectors(this.max,Ts),Fi.subVectors(e.a,Ts),Oi.subVectors(e.b,Ts),Bi.subVectors(e.c,Ts),Gn.subVectors(Oi,Fi),Vn.subVectors(Bi,Oi),ri.subVectors(Fi,Bi);let t=[0,-Gn.z,Gn.y,0,-Vn.z,Vn.y,0,-ri.z,ri.y,Gn.z,0,-Gn.x,Vn.z,0,-Vn.x,ri.z,0,-ri.x,-Gn.y,Gn.x,0,-Vn.y,Vn.x,0,-ri.y,ri.x,0];return!_o(t,Fi,Oi,Bi,br)||(t=[1,0,0,0,1,0,0,0,1],!_o(t,Fi,Oi,Bi,br))?!1:(_r.crossVectors(Gn,Vn),t=[_r.x,_r.y,_r.z],_o(t,Fi,Oi,Bi,br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},En=[new I,new I,new I,new I,new I,new I,new I,new I],Qt=new I,gr=new bt,Fi=new I,Oi=new I,Bi=new I,Gn=new I,Vn=new I,ri=new I,Ts=new I,br=new I,_r=new I,ai=new I;function _o(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ai.fromArray(s,r);let o=i.x*Math.abs(ai.x)+i.y*Math.abs(ai.y)+i.z*Math.abs(ai.z),l=e.dot(ai),c=t.dot(ai),u=n.dot(ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var pd=new bt,Es=new I,xo=new I,kt=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):pd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Es.subVectors(e,this.center);let t=Es.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Es,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Es.copy(e.center).add(xo)),this.expandByPoint(Es.copy(e.center).sub(xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wn=new I,yo=new I,xr=new I,Wn=new I,vo=new I,yr=new I,Mo=new I,mi=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){yo.copy(e).add(t).multiplyScalar(.5),xr.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(yo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(xr),o=Wn.dot(this.direction),l=-Wn.dot(xr),c=Wn.lengthSq(),u=Math.abs(1-a*a),h,d,p,b;if(u>0)if(h=a*l-o,d=a*o-l,b=r*u,h>=0)if(d>=-b)if(d<=b){let g=1/u;h*=g,d*=g,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-b?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=b?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(yo).addScaledVector(xr,d),p}intersectSphere(e,t){wn.subVectors(e.center,this.origin);let n=wn.dot(this.direction),i=wn.dot(wn)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,i,r){vo.subVectors(t,e),yr.subVectors(n,e),Mo.crossVectors(vo,yr);let a=this.direction.dot(Mo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wn.subVectors(this.origin,e);let l=o*this.direction.dot(yr.crossVectors(Wn,yr));if(l<0)return null;let c=o*this.direction.dot(vo.cross(Wn));if(c<0||l+c>a)return null;let u=-o*Wn.dot(Mo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pe=class s{constructor(e,t,n,i,r,a,o,l,c,u,h,d,p,b,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,h,d,p,b,g,m)}set(e,t,n,i,r,a,o,l,c,u,h,d,p,b,g,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=b,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/ki.setFromMatrixColumn(e,0).length(),r=1/ki.setFromMatrixColumn(e,1).length(),a=1/ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,p=a*h,b=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+b*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=b+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,p=l*h,b=c*u,g=c*h;t[0]=d+g*o,t[4]=b*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-b,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,p=l*h,b=c*u,g=c*h;t[0]=d-g*o,t[4]=-a*h,t[8]=b+p*o,t[1]=p+b*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,p=a*h,b=o*u,g=o*h;t[0]=l*u,t[4]=b*c-p,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=p*c-b,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,b=o*l,g=o*c;t[0]=l*u,t[4]=g-d*h,t[8]=b*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+b,t[10]=d-g*h}else if(e.order==="XZY"){let d=a*l,p=a*c,b=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=a*u,t[9]=p*h-b,t[2]=b*h-p,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(md,e,gd)}lookAt(e,t,n){let i=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Xn.crossVectors(n,Xt),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Xn.crossVectors(n,Xt)),Xn.normalize(),vr.crossVectors(Xt,Xn),i[0]=Xn.x,i[4]=vr.x,i[8]=Xt.x,i[1]=Xn.y,i[5]=vr.y,i[9]=Xt.y,i[2]=Xn.z,i[6]=vr.z,i[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],b=n[2],g=n[6],m=n[10],f=n[14],y=n[3],M=n[7],_=n[11],A=n[15],E=i[0],R=i[4],D=i[8],T=i[12],S=i[1],P=i[5],O=i[9],z=i[13],V=i[2],j=i[6],X=i[10],te=i[14],H=i[3],re=i[7],le=i[11],Me=i[15];return r[0]=a*E+o*S+l*V+c*H,r[4]=a*R+o*P+l*j+c*re,r[8]=a*D+o*O+l*X+c*le,r[12]=a*T+o*z+l*te+c*Me,r[1]=u*E+h*S+d*V+p*H,r[5]=u*R+h*P+d*j+p*re,r[9]=u*D+h*O+d*X+p*le,r[13]=u*T+h*z+d*te+p*Me,r[2]=b*E+g*S+m*V+f*H,r[6]=b*R+g*P+m*j+f*re,r[10]=b*D+g*O+m*X+f*le,r[14]=b*T+g*z+m*te+f*Me,r[3]=y*E+M*S+_*V+A*H,r[7]=y*R+M*P+_*j+A*re,r[11]=y*D+M*O+_*X+A*le,r[15]=y*T+M*z+_*te+A*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],b=e[3],g=e[7],m=e[11],f=e[15];return b*(+r*l*h-i*c*h-r*o*d+n*c*d+i*o*p-n*l*p)+g*(+t*l*p-t*c*d+r*a*d-i*a*p+i*c*u-r*l*u)+m*(+t*c*h-t*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+f*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],b=e[12],g=e[13],m=e[14],f=e[15],y=h*m*c-g*d*c+g*l*p-o*m*p-h*l*f+o*d*f,M=b*d*c-u*m*c-b*l*p+a*m*p+u*l*f-a*d*f,_=u*g*c-b*h*c+b*o*p-a*g*p-u*o*f+a*h*f,A=b*h*l-u*g*l-b*o*d+a*g*d+u*o*m-a*h*m,E=t*y+n*M+i*_+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return e[0]=y*R,e[1]=(g*d*r-h*m*r-g*i*p+n*m*p+h*i*f-n*d*f)*R,e[2]=(o*m*r-g*l*r+g*i*c-n*m*c-o*i*f+n*l*f)*R,e[3]=(h*l*r-o*d*r-h*i*c+n*d*c+o*i*p-n*l*p)*R,e[4]=M*R,e[5]=(u*m*r-b*d*r+b*i*p-t*m*p-u*i*f+t*d*f)*R,e[6]=(b*l*r-a*m*r-b*i*c+t*m*c+a*i*f-t*l*f)*R,e[7]=(a*d*r-u*l*r+u*i*c-t*d*c-a*i*p+t*l*p)*R,e[8]=_*R,e[9]=(b*h*r-u*g*r-b*n*p+t*g*p+u*n*f-t*h*f)*R,e[10]=(a*g*r-b*o*r+b*n*c-t*g*c-a*n*f+t*o*f)*R,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*p-t*o*p)*R,e[12]=A*R,e[13]=(u*g*i-b*h*i+b*n*d-t*g*d-u*n*m+t*h*m)*R,e[14]=(b*o*i-a*g*i-b*n*l+t*g*l+a*n*m-t*o*m)*R,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*R,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,p=r*u,b=r*h,g=a*u,m=a*h,f=o*h,y=l*c,M=l*u,_=l*h,A=n.x,E=n.y,R=n.z;return i[0]=(1-(g+f))*A,i[1]=(p+_)*A,i[2]=(b-M)*A,i[3]=0,i[4]=(p-_)*E,i[5]=(1-(d+f))*E,i[6]=(m+y)*E,i[7]=0,i[8]=(b+M)*R,i[9]=(m-y)*R,i[10]=(1-(d+g))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=ki.set(i[0],i[1],i[2]).length(),a=ki.set(i[4],i[5],i[6]).length(),o=ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],en.copy(this);let c=1/r,u=1/a,h=1/o;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=h,en.elements[9]*=h,en.elements[10]*=h,t.setFromRotationMatrix(en),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=sn,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),p=(n+i)/(n-i),b,g;if(l)b=r/(a-r),g=a*r/(a-r);else if(o===sn)b=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ns)b=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=b,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=sn,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),p=-(n+i)/(n-i),b,g;if(l)b=1/(a-r),g=a/(a-r);else if(o===sn)b=-2/(a-r),g=-(a+r)/(a-r);else if(o===Ns)b=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=b,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ki=new I,en=new Pe,md=new I(0,0,0),gd=new I(1,1,1),Xn=new I,vr=new I,Xt=new I,El=new Pe,wl=new Zt,Ut=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return El.makeRotationFromQuaternion(e),this.setFromRotationMatrix(El,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wl.setFromEuler(this),this.setFromQuaternion(wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ut.DEFAULT_ORDER="XYZ";var Os=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bd=0,Al=new I,zi=new Zt,An=new Pe,Mr=new I,ws=new I,_d=new I,xd=new Zt,Rl=new I(1,0,0),Cl=new I(0,1,0),Il=new I(0,0,1),Pl={type:"added"},yd={type:"removed"},Hi={type:"childadded",child:null},So={type:"childremoved",child:null},ot=class s extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new I,t=new Ut,n=new Zt,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Le}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(Rl,e)}rotateY(e){return this.rotateOnAxis(Cl,e)}rotateZ(e){return this.rotateOnAxis(Il,e)}translateOnAxis(e,t){return Al.copy(e).applyQuaternion(this.quaternion),this.position.add(Al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rl,e)}translateY(e){return this.translateOnAxis(Cl,e)}translateZ(e){return this.translateOnAxis(Il,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mr.copy(e):Mr.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(ws,Mr,this.up):An.lookAt(Mr,ws,this.up),this.quaternion.setFromRotationMatrix(An),i&&(An.extractRotation(i.matrixWorld),zi.setFromRotationMatrix(An),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pl),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yd),So.child=e,this.dispatchEvent(So),So.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pl),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,e,_d),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,xd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),b=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),b.length>0&&(n.nodes=b)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};ot.DEFAULT_UP=new I(0,1,0);ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=new I,Rn=new I,To=new I,Cn=new I,Gi=new I,Vi=new I,Ll=new I,Eo=new I,wo=new I,Ao=new I,Ro=new qe,Co=new qe,Io=new qe,Yn=class s{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),tn.subVectors(e,t),i.cross(tn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){tn.subVectors(i,t),Rn.subVectors(n,t),To.subVectors(e,t);let a=tn.dot(tn),o=tn.dot(Rn),l=tn.dot(To),c=Rn.dot(Rn),u=Rn.dot(To),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,p=(c*l-o*u)*d,b=(a*u-o*l)*d;return r.set(1-p-b,b,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Ro.setScalar(0),Co.setScalar(0),Io.setScalar(0),Ro.fromBufferAttribute(e,t),Co.fromBufferAttribute(e,n),Io.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ro,r.x),a.addScaledVector(Co,r.y),a.addScaledVector(Io,r.z),a}static isFrontFacing(e,t,n,i){return tn.subVectors(n,t),Rn.subVectors(e,t),tn.cross(Rn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),tn.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Gi.subVectors(i,n),Vi.subVectors(r,n),Eo.subVectors(e,n);let l=Gi.dot(Eo),c=Vi.dot(Eo);if(l<=0&&c<=0)return t.copy(n);wo.subVectors(e,i);let u=Gi.dot(wo),h=Vi.dot(wo);if(u>=0&&h<=u)return t.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Gi,a);Ao.subVectors(e,r);let p=Gi.dot(Ao),b=Vi.dot(Ao);if(b>=0&&p<=b)return t.copy(r);let g=p*c-l*b;if(g<=0&&c>=0&&b<=0)return o=c/(c-b),t.copy(n).addScaledVector(Vi,o);let m=u*b-p*h;if(m<=0&&h-u>=0&&p-b>=0)return Ll.subVectors(r,i),o=(h-u)/(h-u+(p-b)),t.copy(i).addScaledVector(Ll,o);let f=1/(m+g+d);return a=g*f,o=d*f,t.copy(n).addScaledVector(Gi,a).addScaledVector(Vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Po(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var we=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ve.workingColorSpace){if(e=gc(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Po(a,r,e+1/3),this.g=Po(a,r,e),this.b=Po(a,r,e-1/3)}return Ve.colorSpaceToWorking(this,i),this}setStyle(e,t=ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){let n=Wh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return Ve.workingToColorSpace(Ct.copy(this),e),Math.round(ke(Ct.r*255,0,255))*65536+Math.round(ke(Ct.g*255,0,255))*256+Math.round(ke(Ct.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.workingToColorSpace(Ct.copy(this),t);let n=Ct.r,i=Ct.g,r=Ct.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ve.workingColorSpace){return Ve.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=ft){Ve.workingToColorSpace(Ct.copy(this),e);let t=Ct.r,n=Ct.g,i=Ct.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(Sr);let n=Ds(qn.h,Sr.h,t),i=Ds(qn.s,Sr.s,t),r=Ds(qn.l,Sr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ct=new we;we.NAMES=Wh;var vd=0,Nt=class extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=rn(),this.name="",this.type="Material",this.blending=hi,this.side=an,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hr,this.blendDst=Gr,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==an&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hr&&(n.blendSrc=this.blendSrc),this.blendDst!==Gr&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},on=class extends Nt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ut,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var mt=new I,Tr=new ze,Md=0,at=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Md++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vr,this.updateRanges=[],this.gpuType=Gt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tr.fromBufferAttribute(this,t),Tr.applyMatrix3(e),this.setXY(t,Tr.x,Tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),r=Ke(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vr&&(e.usage=this.usage),e}};var Bs=class extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ks=class extends at{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var St=class extends at{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sd=0,Jt=new Pe,Lo=new ot,Wi=new I,qt=new bt,As=new bt,vt=new I,Ft=class s extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bc(e)?ks:Bs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Le().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Lo.lookAt(e),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new St(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];As.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(qt.min,As.min),qt.expandByPoint(vt),vt.addVectors(qt.max,As.max),qt.expandByPoint(vt)):(qt.expandByPoint(As.min),qt.expandByPoint(As.max))}qt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)vt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(vt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)vt.fromBufferAttribute(o,c),l&&(Wi.fromBufferAttribute(e,c),vt.add(Wi)),i=Math.max(i,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new at(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new I,l[D]=new I;let c=new I,u=new I,h=new I,d=new ze,p=new ze,b=new ze,g=new I,m=new I;function f(D,T,S){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,S),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,T),b.fromBufferAttribute(r,S),u.sub(c),h.sub(c),p.sub(d),b.sub(d);let P=1/(p.x*b.y-b.x*p.y);isFinite(P)&&(g.copy(u).multiplyScalar(b.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-b.x).multiplyScalar(P),o[D].add(g),o[T].add(g),o[S].add(g),l[D].add(m),l[T].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,T=y.length;D<T;++D){let S=y[D],P=S.start,O=S.count;for(let z=P,V=P+O;z<V;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let M=new I,_=new I,A=new I,E=new I;function R(D){A.fromBufferAttribute(i,D),E.copy(A);let T=o[D];M.copy(T),M.sub(A.multiplyScalar(A.dot(T))).normalize(),_.crossVectors(E,T);let P=_.dot(l[D])<0?-1:1;a.setXYZW(D,M.x,M.y,M.z,P)}for(let D=0,T=y.length;D<T;++D){let S=y[D],P=S.start,O=S.count;for(let z=P,V=P+O;z<V;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new at(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){let b=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,b),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,b),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(b,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),p=0,b=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*u;for(let f=0;f<u;f++)d[b++]=c[p++]}return new at(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dl=new Pe,oi=new mi,Er=new kt,Ul=new I,wr=new I,Ar=new I,Rr=new I,Do=new I,Cr=new I,Nl=new I,Ir=new I,ht=class extends ot{constructor(e=new Ft,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(Do.fromBufferAttribute(h,e),a?Cr.addScaledVector(Do,u):Cr.addScaledVector(Do.sub(t),u))}t.add(Cr)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(r),oi.copy(e.ray).recast(e.near),!(Er.containsPoint(oi.origin)===!1&&(oi.intersectSphere(Er,Ul)===null||oi.origin.distanceToSquared(Ul)>(e.far-e.near)**2))&&(Dl.copy(r).invert(),oi.copy(e.ray).applyMatrix4(Dl),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,oi)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let b=0,g=d.length;b<g;b++){let m=d[b],f=a[m.materialIndex],y=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,A=M;_<A;_+=3){let E=o.getX(_),R=o.getX(_+1),D=o.getX(_+2);i=Pr(this,f,e,n,c,u,h,E,R,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let b=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=b,f=g;m<f;m+=3){let y=o.getX(m),M=o.getX(m+1),_=o.getX(m+2);i=Pr(this,a,e,n,c,u,h,y,M,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let b=0,g=d.length;b<g;b++){let m=d[b],f=a[m.materialIndex],y=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,A=M;_<A;_+=3){let E=_,R=_+1,D=_+2;i=Pr(this,f,e,n,c,u,h,E,R,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let b=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=b,f=g;m<f;m+=3){let y=m,M=m+1,_=m+2;i=Pr(this,a,e,n,c,u,h,y,M,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Td(s,e,t,n,i,r,a,o){let l;if(e.side===Ot?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===an,o),l===null)return null;Ir.copy(o),Ir.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Ir);return c<t.near||c>t.far?null:{distance:c,point:Ir.clone(),object:s}}function Pr(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,wr),s.getVertexPosition(l,Ar),s.getVertexPosition(c,Rr);let u=Td(s,e,t,n,wr,Ar,Rr,Nl);if(u){let h=new I;Yn.getBarycoord(Nl,wr,Ar,Rr,h),i&&(u.uv=Yn.getInterpolatedAttribute(i,o,l,c,h,new ze)),r&&(u.uv1=Yn.getInterpolatedAttribute(r,o,l,c,h,new ze)),a&&(u.normal=Yn.getInterpolatedAttribute(a,o,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new I,materialIndex:0};Yn.getNormal(wr,Ar,Rr,d.normal),u.face=d,u.barycoord=h}return u}var gi=class s extends Ft{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,p=0;b("z","y","x",-1,-1,n,t,e,a,r,0),b("z","y","x",1,-1,n,t,-e,a,r,1),b("x","z","y",1,1,e,n,t,i,a,2),b("x","z","y",1,-1,e,n,-t,i,a,3),b("x","y","z",1,-1,e,t,n,i,r,4),b("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(h,2));function b(g,m,f,y,M,_,A,E,R,D,T){let S=_/R,P=A/D,O=_/2,z=A/2,V=E/2,j=R+1,X=D+1,te=0,H=0,re=new I;for(let le=0;le<X;le++){let Me=le*P-z;for(let Be=0;Be<j;Be++){let et=Be*S-O;re[g]=et*y,re[m]=Me*M,re[f]=V,c.push(re.x,re.y,re.z),re[g]=0,re[m]=0,re[f]=E>0?1:-1,u.push(re.x,re.y,re.z),h.push(Be/R),h.push(1-le/D),te+=1}}for(let le=0;le<D;le++)for(let Me=0;Me<R;Me++){let Be=d+Me+j*le,et=d+Me+j*(le+1),it=d+(Me+1)+j*(le+1),je=d+(Me+1)+j*le;l.push(Be,et,je),l.push(et,it,je),H+=6}o.addGroup(p,H,T),p+=H,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ei(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Pt(s){let e={};for(let t=0;t<s.length;t++){let n=Ei(s[t]);for(let i in n)e[i]=n[i]}return e}function Ed(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function _c(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}var Xh={clone:Ei,merge:Pt},wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends Nt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=Ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ei(e.uniforms),this.uniformsGroups=Ed(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},zs=class extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},jn=new I,Fl=new ze,Ol=new ze,gt=class extends zs{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=pi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pi*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jn.x,jn.y).multiplyScalar(-e/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-e/jn.z)}getViewSize(e,t){return this.getViewBounds(e,Fl,Ol),t.subVectors(Ol,Fl)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xi=-90,qi=1,jr=class extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new gt(Xi,qi,e,t);i.layers=this.layers,this.add(i);let r=new gt(Xi,qi,e,t);r.layers=this.layers,this.add(r);let a=new gt(Xi,qi,e,t);a.layers=this.layers,this.add(a);let o=new gt(Xi,qi,e,t);o.layers=this.layers,this.add(o);let l=new gt(Xi,qi,e,t);l.layers=this.layers,this.add(l);let c=new gt(Xi,qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===sn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}},Hs=class extends Mt{constructor(e=[],t=vi,n,i,r,a,o,l,c,u){super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yr=class extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Hs(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new gi(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:kn});r.uniforms.tEquirect.value=t;let a=new ht(i,r),o=t.minFilter;return t.minFilter===hn&&(t.minFilter=Et),new jr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},jt=class extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rd={type:"move"},ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,b=.005;c.inputState.pinching&&d>p+b?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-b&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rd)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Gs=class extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ut,this.environmentIntensity=1,this.environmentRotation=new Ut,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ns=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vr,this.updateRanges=[],this.version=0,this.uuid=rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Dt=new I,is=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),r=Ke(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new at(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Bl=new I,kl=new qe,zl=new qe,Cd=new I,Hl=new Pe,Lr=new I,Uo=new kt,Gl=new Pe,No=new mi,Vs=class extends ht{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ho,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lr),this.boundingBox.expandByPoint(Lr)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new kt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lr),this.boundingSphere.expandByPoint(Lr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uo.copy(this.boundingSphere),Uo.applyMatrix4(i),e.ray.intersectsSphere(Uo)!==!1&&(Gl.copy(i).invert(),No.copy(e.ray).applyMatrix4(Gl),!(this.boundingBox!==null&&No.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,No)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ho?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ih?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;kl.fromBufferAttribute(i.attributes.skinIndex,e),zl.fromBufferAttribute(i.attributes.skinWeight,e),Bl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=zl.getComponent(r);if(a!==0){let o=kl.getComponent(r);Hl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Cd.copy(Bl).applyMatrix4(Hl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},ss=class extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}},Dn=class extends Mt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Tt,u=Tt,h,d){super(null,a,o,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Vl=new Pe,Id=new Pe,Ws=class s{constructor(e=[],t=[]){this.uuid=rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Id;Vl.multiplyMatrices(o,t[r]),Vl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Dn(t,e,e,wt,Gt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ss),this.bones.push(a),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Un=class extends at{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ji=new Pe,Wl=new Pe,Dr=[],Xl=new bt,Pd=new Pe,Rs=new ht,Cs=new kt,Xs=class extends ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Un(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Pd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),Xl.copy(e.boundingBox).applyMatrix4(ji),this.boundingBox.union(Xl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new kt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),Cs.copy(e.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(Cs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cs.copy(this.boundingSphere),Cs.applyMatrix4(n),e.ray.intersectsSphere(Cs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ji),Wl.multiplyMatrices(n,ji),Rs.matrixWorld=Wl,Rs.raycast(e,Dr);for(let a=0,o=Dr.length;a<o;a++){let l=Dr[a];l.instanceId=r,l.object=this,t.push(l)}Dr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Un(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Dn(new Float32Array(i*this.count),i,this.count,ya,Gt));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Fo=new I,Ld=new I,Dd=new Le,fn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Fo.subVectors(n,t).cross(Ld.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Fo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Dd.getNormalMatrix(e),i=this.coplanarPoint(Fo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ci=new kt,Ud=new ze(.5,.5),Ur=new I,rs=class{constructor(e=new fn,t=new fn,n=new fn,i=new fn,r=new fn,a=new fn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sn,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],p=r[7],b=r[8],g=r[9],m=r[10],f=r[11],y=r[12],M=r[13],_=r[14],A=r[15];if(i[0].setComponents(c-a,p-u,f-b,A-y).normalize(),i[1].setComponents(c+a,p+u,f+b,A+y).normalize(),i[2].setComponents(c+o,p+h,f+g,A+M).normalize(),i[3].setComponents(c-o,p-h,f-g,A-M).normalize(),n)i[4].setComponents(l,d,m,_).normalize(),i[5].setComponents(c-l,p-d,f-m,A-_).normalize();else if(i[4].setComponents(c-l,p-d,f-m,A-_).normalize(),t===sn)i[5].setComponents(c+l,p+d,f+m,A+_).normalize();else if(t===Ns)i[5].setComponents(l,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){ci.center.set(0,0,0);let t=Ud.distanceTo(e.center);return ci.radius=.7071067811865476+t,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ur.x=i.normal.x>0?e.max.x:e.min.x,Ur.y=i.normal.y>0?e.max.y:e.min.y,Ur.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var as=class extends Nt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Kr=new I,Jr=new I,ql=new Pe,Is=new mi,Nr=new kt,Oo=new I,jl=new I,bi=class extends ot{constructor(e=new Ft,t=new as){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Kr.fromBufferAttribute(t,i-1),Jr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Kr.distanceTo(Jr);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(i),Nr.radius+=r,e.ray.intersectsSphere(Nr)===!1)return;ql.copy(i).invert(),Is.copy(e.ray).applyMatrix4(ql);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),b=Math.min(u.count,a.start+a.count);for(let g=p,m=b-1;g<m;g+=c){let f=u.getX(g),y=u.getX(g+1),M=Fr(this,e,Is,l,f,y,g);M&&t.push(M)}if(this.isLineLoop){let g=u.getX(b-1),m=u.getX(p),f=Fr(this,e,Is,l,g,m,b-1);f&&t.push(f)}}else{let p=Math.max(0,a.start),b=Math.min(d.count,a.start+a.count);for(let g=p,m=b-1;g<m;g+=c){let f=Fr(this,e,Is,l,g,g+1,g);f&&t.push(f)}if(this.isLineLoop){let g=Fr(this,e,Is,l,b-1,p,b-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Fr(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(Kr.fromBufferAttribute(o,i),Jr.fromBufferAttribute(o,r),t.distanceSqToSegment(Kr,Jr,Oo,jl)>n)return;Oo.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Oo);if(!(c<e.near||c>e.far))return{distance:c,point:jl.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Yl=new I,Kl=new I,qs=class extends bi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Yl.fromBufferAttribute(t,i),Kl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Yl.distanceTo(Kl);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},js=class extends bi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},os=class extends Nt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Jl=new Pe,qo=new mi,Or=new kt,Br=new I,Ys=class extends ot{constructor(e=new Ft,t=new os){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(i),Or.radius+=r,e.ray.intersectsSphere(Or)===!1)return;Jl.copy(i).invert(),qo.copy(e.ray).applyMatrix4(Jl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let b=d,g=p;b<g;b++){let m=c.getX(b);Br.fromBufferAttribute(h,m),Zl(Br,m,l,i,e,t,this)}}else{let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let b=d,g=p;b<g;b++)Br.fromBufferAttribute(h,b),Zl(Br,b,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zl(s,e,t,n,i,r,a){let o=qo.distanceSqToPoint(s);if(o<t){let l=new I;qo.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ks=class extends Mt{constructor(e,t,n=$n,i,r,a,o=Tt,l=Tt,c,u=Zi,h=1){if(u!==Zi&&u!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new es(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Js=class extends Mt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var _i=class s extends Ft{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,p=[],b=[],g=[],m=[];for(let f=0;f<u;f++){let y=f*d-a;for(let M=0;M<c;M++){let _=M*h-r;b.push(_,-y,0),g.push(0,0,1),m.push(M/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){let M=y+c*f,_=y+c*(f+1),A=y+1+c*(f+1),E=y+1+c*f;p.push(M,_,E),p.push(_,A,E)}this.setIndex(p),this.setAttribute("position",new St(b,3)),this.setAttribute("normal",new St(g,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Zs=class extends Nt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new we(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var ln=class extends Nt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ut,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},It=class extends ln{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Zr=class extends Nt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$r=class extends Nt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function kr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Nd(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Fd(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function $l(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function qh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var Nn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Qr=class extends Nn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Go,endingEnd:Go}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vo:r=e,o=2*t-n;break;case Wo:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vo:a=e,l=2*n-t;break;case Wo:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,b=(n-t)/(i-t),g=b*b,m=g*b,f=-d*m+2*d*g-d*b,y=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*b+1,M=(-1-p)*m+(1.5+p)*g+.5*b,_=p*m-p*g;for(let A=0;A!==o;++A)r[A]=f*a[u+A]+y*a[c+A]+M*a[l+A]+_*a[h+A];return r}},ea=class extends Nn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},ta=class extends Nn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},zt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=kr(t,this.TimeBufferType),this.values=kr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:kr(e.times,Array),values:kr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case di:t=this.InterpolantFactoryMethodDiscrete;break;case fi:t=this.InterpolantFactoryMethodLinear;break;case zr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return di;case this.InterpolantFactoryMethodLinear:return fi;case this.InterpolantFactoryMethodSmooth:return zr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Nd(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===zr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,d=h-n,p=h+n;for(let b=0;b!==n;++b){let g=t[h+b];if(g!==t[d+b]||g!==t[p+b]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};zt.prototype.ValueTypeName="";zt.prototype.TimeBufferType=Float32Array;zt.prototype.ValueBufferType=Float32Array;zt.prototype.DefaultInterpolation=fi;var Fn=class extends zt{constructor(e,t,n){super(e,t,n)}};Fn.prototype.ValueTypeName="bool";Fn.prototype.ValueBufferType=Array;Fn.prototype.DefaultInterpolation=di;Fn.prototype.InterpolantFactoryMethodLinear=void 0;Fn.prototype.InterpolantFactoryMethodSmooth=void 0;var $s=class extends zt{constructor(e,t,n,i){super(e,t,n,i)}};$s.prototype.ValueTypeName="color";var bn=class extends zt{constructor(e,t,n,i){super(e,t,n,i)}};bn.prototype.ValueTypeName="number";var na=class extends Nn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let u=c+o;c!==u;c+=4)Zt.slerpFlat(r,0,a,c-o,a,c,l);return r}},_n=class extends zt{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new na(this.times,this.values,this.getValueSize(),e)}};_n.prototype.ValueTypeName="quaternion";_n.prototype.InterpolantFactoryMethodSmooth=void 0;var On=class extends zt{constructor(e,t,n){super(e,t,n)}};On.prototype.ValueTypeName="string";On.prototype.ValueBufferType=Array;On.prototype.DefaultInterpolation=di;On.prototype.InterpolantFactoryMethodLinear=void 0;On.prototype.InterpolantFactoryMethodSmooth=void 0;var xn=class extends zt{constructor(e,t,n,i){super(e,t,n,i)}};xn.prototype.ValueTypeName="vector";var Qs=class{constructor(e="",t=-1,n=[],i=Ph){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=rn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Bd(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(zt.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=Fd(l);l=$l(l,1,u),c=$l(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new bn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,p,b,g){if(p.length!==0){let m=[],f=[];qh(p,m,f,b),m.length!==0&&g.push(new h(d,m,f))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},b;for(b=0;b<d.length;b++)if(d[b].morphTargets)for(let g=0;g<d[b].morphTargets.length;g++)p[d[b].morphTargets[g]]=-1;for(let g in p){let m=[],f=[];for(let y=0;y!==d[b].morphTargets.length;++y){let M=d[b];m.push(M.time),f.push(M.morphTarget===g?1:0)}i.push(new bn(".morphTargetInfluence["+g+"]",m,f))}l=p.length*a}else{let p=".bones["+t[h].name+"]";n(xn,p+".position",d,"pos",i),n(_n,p+".quaternion",d,"rot",i),n(xn,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Od(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bn;case"vector":case"vector2":case"vector3":case"vector4":return xn;case"color":return $s;case"quaternion":return _n;case"bool":case"boolean":return Fn;case"string":return On}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Bd(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Od(s.type);if(s.times===void 0){let t=[],n=[];qh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var mn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},ia=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let p=c[h],b=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return b}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},jh=new ia,yn=class{constructor(e){this.manager=e!==void 0?e:jh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};yn.DEFAULT_MATERIAL_NAME="__DEFAULT";var In={},jo=class extends Error{constructor(e,t){super(e),this.response=t}},cs=class extends yn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=mn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(In[e]!==void 0){In[e].push({onLoad:t,onProgress:n,onError:i});return}In[e]=[],In[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=In[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,b=p!==0,g=0,m=new ReadableStream({start(f){y();function y(){h.read().then(({done:M,value:_})=>{if(M)f.close();else{g+=_.byteLength;let A=new ProgressEvent("progress",{lengthComputable:b,loaded:g,total:p});for(let E=0,R=u.length;E<R;E++){let D=u[E];D.onProgress&&D.onProgress(A)}f.enqueue(_),y()}},M=>{f.error(M)})}}});return new Response(m)}else throw new jo(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(b=>p.decode(b))}}}).then(c=>{mn.add(`file:${e}`,c);let u=In[e];delete In[e];for(let h=0,d=u.length;h<d;h++){let p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=In[e];if(u===void 0)throw this.manager.itemError(e),c;delete In[e];for(let h=0,d=u.length;h<d;h++){let p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Yi=new WeakMap,sa=class extends yn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=mn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Yi.get(a);h===void 0&&(h=[],Yi.set(a,h)),h.push({onLoad:t,onError:i})}return a}let o=$i("img");function l(){u(),t&&t(this);let h=Yi.get(this)||[];for(let d=0;d<h.length;d++){let p=h[d];p.onLoad&&p.onLoad(this)}Yi.delete(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),mn.remove(`image:${e}`);let d=Yi.get(this)||[];for(let p=0;p<d.length;p++){let b=d[p];b.onError&&b.onError(h)}Yi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),mn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var er=class extends yn{constructor(e){super(e)}load(e,t,n,i){let r=new Mt,a=new sa(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},xi=class extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},tr=class extends xi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Bo=new Pe,Ql=new I,eh=new I,nr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rs,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ql.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ql),eh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eh),t.updateMatrixWorld(),Bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Yo=class extends nr{constructor(){super(new gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=pi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ir=class extends xi{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Yo}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},th=new Pe,Ps=new I,ko=new I,Ko=class extends nr{constructor(){super(new gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ps.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ps),ko.copy(n.position),ko.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ko),n.updateMatrixWorld(),i.makeTranslation(-Ps.x,-Ps.y,-Ps.z),th.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(th,n.coordinateSystem,n.reversedDepth)}},sr=class extends xi{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ko}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},yi=class extends zs{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Jo=class extends nr{constructor(){super(new yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zn=class extends xi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.shadow=new Jo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Bn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var zo=new WeakMap,rr=class extends yn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=mn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(zo.has(a)===!0)i&&i(zo.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return mn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),zo.set(l,c),mn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});mn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ra=class extends gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var xc="\\[\\]\\.:\\/",kd=new RegExp("["+xc+"]","g"),yc="[^"+xc+"]",zd="[^"+xc.replace("\\.","")+"]",Hd=/((?:WC+[\/:])*)/.source.replace("WC",yc),Gd=/(WCOD+)?/.source.replace("WCOD",zd),Vd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yc),Wd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yc),Xd=new RegExp("^"+Hd+Gd+Vd+Wd+"$"),qd=["material","materials","bones","map"],Zo=class{constructor(e,t,n){let i=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Qe=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kd,"")}static parseTrackName(e){let t=Xd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);qd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qe.Composite=Zo;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var G0=new Float32Array(1);function vc(s,e,t,n){let i=jd(n);switch(t){case lc:return s*e;case ya:return s*e/i.components*i.byteLength;case va:return s*e/i.components*i.byteLength;case uc:return s*e*2/i.components*i.byteLength;case Ma:return s*e*2/i.components*i.byteLength;case hc:return s*e*3/i.components*i.byteLength;case wt:return s*e*4/i.components*i.byteLength;case Sa:return s*e*4/i.components*i.byteLength;case ar:case or:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case cr:case lr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ea:case Aa:return Math.max(s,16)*Math.max(e,8)/4;case Ta:case wa:return Math.max(s,8)*Math.max(e,8)/2;case Ra:case Ca:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ia:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case La:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Da:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Na:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Fa:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ka:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case za:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ga:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Va:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Wa:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Xa:case qa:case ja:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ya:case Ka:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ja:case Za:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jd(s){switch(s){case un:case rc:return{byteLength:1,components:1};case us:case ac:case Qn:return{byteLength:2,components:1};case _a:case xa:return{byteLength:2,components:4};case $n:case ba:case Gt:return{byteLength:4,components:1};case oc:case cc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function bu(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Kd(s){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((p,b)=>p.start-b.start);let d=0;for(let p=1;p<h.length;p++){let b=h[d],g=h[p];g.start<=b.start+b.count+1?b.count=Math.max(b.count,g.start+g.count-b.start):(++d,h[d]=g)}h.length=d+1;for(let p=0,b=h.length;p<b;p++){let g=h[p];s.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ef=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,af=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Af="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ff=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Of=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Vf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$f=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,a1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,f1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,m1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,g1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,x1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,y1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,w1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,D1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,U1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,N1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,F1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,B1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,z1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,W1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,X1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,j1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,K1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,J1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ip=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,up=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_p=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ep=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:Jd,alphahash_pars_fragment:Zd,alphamap_fragment:$d,alphamap_pars_fragment:Qd,alphatest_fragment:ef,alphatest_pars_fragment:tf,aomap_fragment:nf,aomap_pars_fragment:sf,batching_pars_vertex:rf,batching_vertex:af,begin_vertex:of,beginnormal_vertex:cf,bsdfs:lf,iridescence_fragment:hf,bumpmap_pars_fragment:uf,clipping_planes_fragment:df,clipping_planes_pars_fragment:ff,clipping_planes_pars_vertex:pf,clipping_planes_vertex:mf,color_fragment:gf,color_pars_fragment:bf,color_pars_vertex:_f,color_vertex:xf,common:yf,cube_uv_reflection_fragment:vf,defaultnormal_vertex:Mf,displacementmap_pars_vertex:Sf,displacementmap_vertex:Tf,emissivemap_fragment:Ef,emissivemap_pars_fragment:wf,colorspace_fragment:Af,colorspace_pars_fragment:Rf,envmap_fragment:Cf,envmap_common_pars_fragment:If,envmap_pars_fragment:Pf,envmap_pars_vertex:Lf,envmap_physical_pars_fragment:Vf,envmap_vertex:Df,fog_vertex:Uf,fog_pars_vertex:Nf,fog_fragment:Ff,fog_pars_fragment:Of,gradientmap_pars_fragment:Bf,lightmap_pars_fragment:kf,lights_lambert_fragment:zf,lights_lambert_pars_fragment:Hf,lights_pars_begin:Gf,lights_toon_fragment:Wf,lights_toon_pars_fragment:Xf,lights_phong_fragment:qf,lights_phong_pars_fragment:jf,lights_physical_fragment:Yf,lights_physical_pars_fragment:Kf,lights_fragment_begin:Jf,lights_fragment_maps:Zf,lights_fragment_end:$f,logdepthbuf_fragment:Qf,logdepthbuf_pars_fragment:e1,logdepthbuf_pars_vertex:t1,logdepthbuf_vertex:n1,map_fragment:i1,map_pars_fragment:s1,map_particle_fragment:r1,map_particle_pars_fragment:a1,metalnessmap_fragment:o1,metalnessmap_pars_fragment:c1,morphinstance_vertex:l1,morphcolor_vertex:h1,morphnormal_vertex:u1,morphtarget_pars_vertex:d1,morphtarget_vertex:f1,normal_fragment_begin:p1,normal_fragment_maps:m1,normal_pars_fragment:g1,normal_pars_vertex:b1,normal_vertex:_1,normalmap_pars_fragment:x1,clearcoat_normal_fragment_begin:y1,clearcoat_normal_fragment_maps:v1,clearcoat_pars_fragment:M1,iridescence_pars_fragment:S1,opaque_fragment:T1,packing:E1,premultiplied_alpha_fragment:w1,project_vertex:A1,dithering_fragment:R1,dithering_pars_fragment:C1,roughnessmap_fragment:I1,roughnessmap_pars_fragment:P1,shadowmap_pars_fragment:L1,shadowmap_pars_vertex:D1,shadowmap_vertex:U1,shadowmask_pars_fragment:N1,skinbase_vertex:F1,skinning_pars_vertex:O1,skinning_vertex:B1,skinnormal_vertex:k1,specularmap_fragment:z1,specularmap_pars_fragment:H1,tonemapping_fragment:G1,tonemapping_pars_fragment:V1,transmission_fragment:W1,transmission_pars_fragment:X1,uv_pars_fragment:q1,uv_pars_vertex:j1,uv_vertex:Y1,worldpos_vertex:K1,background_vert:J1,background_frag:Z1,backgroundCube_vert:$1,backgroundCube_frag:Q1,cube_vert:ep,cube_frag:tp,depth_vert:np,depth_frag:ip,distanceRGBA_vert:sp,distanceRGBA_frag:rp,equirect_vert:ap,equirect_frag:op,linedashed_vert:cp,linedashed_frag:lp,meshbasic_vert:hp,meshbasic_frag:up,meshlambert_vert:dp,meshlambert_frag:fp,meshmatcap_vert:pp,meshmatcap_frag:mp,meshnormal_vert:gp,meshnormal_frag:bp,meshphong_vert:_p,meshphong_frag:xp,meshphysical_vert:yp,meshphysical_frag:vp,meshtoon_vert:Mp,meshtoon_frag:Sp,points_vert:Tp,points_frag:Ep,shadow_vert:wp,shadow_frag:Ap,sprite_vert:Rp,sprite_frag:Cp},se={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},Mn={basic:{uniforms:Pt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Pt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new we(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Pt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Pt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Pt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new we(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Pt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Pt([se.points,se.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Pt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Pt([se.common,se.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Pt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Pt([se.sprite,se.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Pt([se.common,se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Pt([se.lights,se.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Mn.physical={uniforms:Pt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var $a={r:0,b:0,g:0},wi=new Ut,Ip=new Pe;function Pp(s,e,t,n,i,r,a){let o=new we(0),l=r===!0?0:1,c,u,h=null,d=0,p=null;function b(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?t:e).get(_)),_}function g(M){let _=!1,A=b(M);A===null?f(o,l):A&&A.isColor&&(f(A,1),_=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,_){let A=b(_);A&&(A.isCubeTexture||A.mapping===Si)?(u===void 0&&(u=new ht(new gi(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Ei(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),wi.copy(_.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ip.makeRotationFromEuler(wi)),u.material.toneMapped=Ve.getTransfer(A.colorSpace)!==Je,(h!==A||d!==A.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,p=s.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new ht(new _i(2,2),new cn({name:"BackgroundMaterial",uniforms:Ei(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(A.colorSpace)!==Je,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,h=A,d=A.version,p=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,_){M.getRGB($a,_c(s)),n.buffers.color.setClear($a.r,$a.g,$a.b,_,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,_=1){o.set(M),l=_,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(o,l)},render:g,addToRenderList:m,dispose:y}}function Lp(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(S,P,O,z,V){let j=!1,X=h(z,O,P);r!==X&&(r=X,c(r.object)),j=p(S,z,O,V),j&&b(S,z,O,V),V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,_(S,P,O,z),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function u(S){return s.deleteVertexArray(S)}function h(S,P,O){let z=O.wireframe===!0,V=n[S.id];V===void 0&&(V={},n[S.id]=V);let j=V[P.id];j===void 0&&(j={},V[P.id]=j);let X=j[z];return X===void 0&&(X=d(l()),j[z]=X),X}function d(S){let P=[],O=[],z=[];for(let V=0;V<t;V++)P[V]=0,O[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,P,O,z){let V=r.attributes,j=P.attributes,X=0,te=O.getAttributes();for(let H in te)if(te[H].location>=0){let le=V[H],Me=j[H];if(Me===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(Me=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(Me=S.instanceColor)),le===void 0||le.attribute!==Me||Me&&le.data!==Me.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function b(S,P,O,z){let V={},j=P.attributes,X=0,te=O.getAttributes();for(let H in te)if(te[H].location>=0){let le=j[H];le===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(le=S.instanceColor));let Me={};Me.attribute=le,le&&le.data&&(Me.data=le.data),V[H]=Me,X++}r.attributes=V,r.attributesNum=X,r.index=z}function g(){let S=r.newAttributes;for(let P=0,O=S.length;P<O;P++)S[P]=0}function m(S){f(S,0)}function f(S,P){let O=r.newAttributes,z=r.enabledAttributes,V=r.attributeDivisors;O[S]=1,z[S]===0&&(s.enableVertexAttribArray(S),z[S]=1),V[S]!==P&&(s.vertexAttribDivisor(S,P),V[S]=P)}function y(){let S=r.newAttributes,P=r.enabledAttributes;for(let O=0,z=P.length;O<z;O++)P[O]!==S[O]&&(s.disableVertexAttribArray(O),P[O]=0)}function M(S,P,O,z,V,j,X){X===!0?s.vertexAttribIPointer(S,P,O,V,j):s.vertexAttribPointer(S,P,O,z,V,j)}function _(S,P,O,z){g();let V=z.attributes,j=O.getAttributes(),X=P.defaultAttributeValues;for(let te in j){let H=j[te];if(H.location>=0){let re=V[te];if(re===void 0&&(te==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),te==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),re!==void 0){let le=re.normalized,Me=re.itemSize,Be=e.get(re);if(Be===void 0)continue;let et=Be.buffer,it=Be.type,je=Be.bytesPerElement,q=it===s.INT||it===s.UNSIGNED_INT||re.gpuType===ba;if(re.isInterleavedBufferAttribute){let J=re.data,de=J.stride,Ie=re.offset;if(J.isInstancedInterleavedBuffer){for(let ve=0;ve<H.locationSize;ve++)f(H.location+ve,J.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ve=0;ve<H.locationSize;ve++)m(H.location+ve);s.bindBuffer(s.ARRAY_BUFFER,et);for(let ve=0;ve<H.locationSize;ve++)M(H.location+ve,Me/H.locationSize,it,le,de*je,(Ie+Me/H.locationSize*ve)*je,q)}else{if(re.isInstancedBufferAttribute){for(let J=0;J<H.locationSize;J++)f(H.location+J,re.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let J=0;J<H.locationSize;J++)m(H.location+J);s.bindBuffer(s.ARRAY_BUFFER,et);for(let J=0;J<H.locationSize;J++)M(H.location+J,Me/H.locationSize,it,le,Me*je,Me/H.locationSize*J*je,q)}}else if(X!==void 0){let le=X[te];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(H.location,le);break;case 3:s.vertexAttrib3fv(H.location,le);break;case 4:s.vertexAttrib4fv(H.location,le);break;default:s.vertexAttrib1fv(H.location,le)}}}}y()}function A(){D();for(let S in n){let P=n[S];for(let O in P){let z=P[O];for(let V in z)u(z[V].object),delete z[V];delete P[O]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;let P=n[S.id];for(let O in P){let z=P[O];for(let V in z)u(z[V].object),delete z[V];delete P[O]}delete n[S.id]}function R(S){for(let P in n){let O=n[P];if(O[S.id]===void 0)continue;let z=O[S.id];for(let V in z)u(z[V].object),delete z[V];delete O[S.id]}}function D(){T(),a=!0,r!==i&&(r=i,c(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function Dp(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let b=0;b<h;b++)p+=u[b];t.update(p,n,1)}function l(c,u,h,d){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let b=0;b<c.length;b++)a(c[b],u[b],d[b]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let b=0;for(let g=0;g<h;g++)b+=u[g]*d[g];t.update(b,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Up(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==wt&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let D=R===Qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==un&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Gt&&!D)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=b>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:b,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:A,maxSamples:E}}function Np(s){let e=this,t=null,n=0,i=!1,r=!1,a=new fn,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||n!==0||i;return i=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){let b=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,f=s.get(h);if(!i||b===null||b.length===0||r&&!m)r?u(null):c();else{let y=r?0:n,M=y*4,_=f.clippingState||null;l.value=_,_=u(b,d,M,p);for(let A=0;A!==M;++A)_[A]=t[A];f.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,b){let g=h!==null?h.length:0,m=null;if(g!==0){if(m=l.value,b!==!0||m===null){let f=p+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,_=p;M!==g;++M,_+=4)a.copy(h[M]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Fp(s){let e=new WeakMap;function t(a,o){return o===ls?a.mapping=vi:o===ma&&(a.mapping=Mi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ls||o===ma)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Yr(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var gs=4,Yh=[.125,.215,.35,.446,.526,.582],Ci=20,Mc=new yi,Kh=new we,Sc=null,Tc=0,Ec=0,wc=!1,Ri=(1+Math.sqrt(5))/2,ms=1/Ri,Jh=[new I(-Ri,ms,0),new I(Ri,ms,0),new I(-ms,0,Ri),new I(ms,0,Ri),new I(0,Ri,-ms),new I(0,Ri,ms),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Op=new I,to=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=Op}=r;Sc=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sc,Tc,Ec),this._renderer.xr.enabled=wc,e.scissorTest=!1,Qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vi||e.mapping===Mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sc=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Qn,format:wt,colorSpace:pt,depthBuffer:!1},i=Zh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bp(r)),this._blurMaterial=kp(r,e,t)}return i}_compileMaterial(e){let t=new ht(this._lodPlanes[0],e);this._renderer.compile(t,Mc)}_sceneToCubeUV(e,t,n,i,r){let l=new gt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Kh),h.toneMapping=zn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));let g=new on({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),m=new ht(new gi,g),f=!1,y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,f=!0):(g.color.copy(Kh),f=!0);for(let M=0;M<6;M++){let _=M%3;_===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):_===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));let A=this._cubeSize;Qa(i,_*A,M>2?A:0,A,A),h.setRenderTarget(i),f&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===vi||e.mapping===Mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$h());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new ht(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Qa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Mc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Jh[(i-r-1)%Jh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ht(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,b=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ci-1),g=r/b,m=isFinite(r)?1+Math.floor(u*g):Ci;m>Ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ci}`);let f=[],y=0;for(let R=0;R<Ci;++R){let D=R/g,T=Math.exp(-D*D/2);f.push(T),R===0?y+=T:R<m&&(y+=2*T)}for(let R=0;R<f.length;R++)f[R]=f[R]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:M}=this;d.dTheta.value=b,d.mipInt.value=M-n;let _=this._sizeLods[i],A=3*_*(i>M-gs?i-M+gs:0),E=4*(this._cubeSize-_);Qa(t,A,E,3*_,2*_),l.setRenderTarget(t),l.render(h,Mc)}};function Bp(s){let e=[],t=[],n=[],i=s,r=s-gs+1+Yh.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-gs?l=Yh[a-s+gs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,b=6,g=3,m=2,f=1,y=new Float32Array(g*b*p),M=new Float32Array(m*b*p),_=new Float32Array(f*b*p);for(let E=0;E<p;E++){let R=E%3*2/3-1,D=E>2?0:-1,T=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];y.set(T,g*b*E),M.set(d,m*b*E);let S=[E,E,E,E,E,E];_.set(S,f*b*E)}let A=new Ft;A.setAttribute("position",new at(y,g)),A.setAttribute("uv",new at(M,m)),A.setAttribute("faceIndex",new at(_,f)),e.push(A),i>gs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zh(s,e,t){let n=new gn(s,e,t);return n.texture.mapping=Si,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function kp(s,e,t){let n=new Float32Array(Ci),i=new I(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function $h(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Qh(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Fc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zp(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ls||l===ma,u=l===vi||l===Mi;if(c||u){let h=e.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new to(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new to(s)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Hp(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Qi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Gp(s,e,t,n){let i={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let b in d.attributes)e.remove(d.attributes[b]);d.removeEventListener("dispose",a),delete i[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let p in d)e.update(d[p],s.ARRAY_BUFFER)}function c(h){let d=[],p=h.index,b=h.attributes.position,g=0;if(p!==null){let y=p.array;g=p.version;for(let M=0,_=y.length;M<_;M+=3){let A=y[M+0],E=y[M+1],R=y[M+2];d.push(A,E,E,R,R,A)}}else if(b!==void 0){let y=b.array;g=b.version;for(let M=0,_=y.length/3-1;M<_;M+=3){let A=M+0,E=M+1,R=M+2;d.push(A,E,E,R,R,A)}}else return;let m=new(bc(d)?ks:Bs)(d,1);m.version=g;let f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){let d=r.get(h);if(d){let p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Vp(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*a),t.update(p,n,1)}function c(d,p,b){b!==0&&(s.drawElementsInstanced(n,p,r,d*a,b),t.update(p,n,b))}function u(d,p,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,b);let m=0;for(let f=0;f<b;f++)m+=p[f];t.update(m,n,1)}function h(d,p,b,g){if(b===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,g,0,b);let f=0;for(let y=0;y<b;y++)f+=p[y]*g[y];t.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Wp(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Xp(s,e,t){let n=new WeakMap,i=new qe;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],M=0;p===!0&&(M=1),b===!0&&(M=2),g===!0&&(M=3);let _=o.attributes.position.count*M,A=1;_>e.maxTextureSize&&(A=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*A*4*h),R=new Fs(E,_,A,h);R.type=Gt,R.needsUpdate=!0;let D=M*4;for(let S=0;S<h;S++){let P=m[S],O=f[S],z=y[S],V=_*A*4*S;for(let j=0;j<P.count;j++){let X=j*D;p===!0&&(i.fromBufferAttribute(P,j),E[V+X+0]=i.x,E[V+X+1]=i.y,E[V+X+2]=i.z,E[V+X+3]=0),b===!0&&(i.fromBufferAttribute(O,j),E[V+X+4]=i.x,E[V+X+5]=i.y,E[V+X+6]=i.z,E[V+X+7]=0),g===!0&&(i.fromBufferAttribute(z,j),E[V+X+8]=i.x,E[V+X+9]=i.y,E[V+X+10]=i.z,E[V+X+11]=z.itemSize===4?i.w:1)}}d={count:h,texture:R,size:new ze(_,A)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];let b=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",b),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function qp(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var _u=new Mt,eu=new Ks(1,1),xu=new Fs,yu=new qr,vu=new Hs,tu=[],nu=[],iu=new Float32Array(16),su=new Float32Array(9),ru=new Float32Array(4);function _s(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=tu[i];if(r===void 0&&(r=new Float32Array(i),tu[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function _t(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function xt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function io(s,e){let t=nu[e];t===void 0&&(t=new Int32Array(e),nu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function jp(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Yp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;s.uniform2fv(this.addr,e),xt(t,e)}}function Kp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;s.uniform3fv(this.addr,e),xt(t,e)}}function Jp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;s.uniform4fv(this.addr,e),xt(t,e)}}function Zp(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;ru.set(n),s.uniformMatrix2fv(this.addr,!1,ru),xt(t,n)}}function $p(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;su.set(n),s.uniformMatrix3fv(this.addr,!1,su),xt(t,n)}}function Qp(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;iu.set(n),s.uniformMatrix4fv(this.addr,!1,iu),xt(t,n)}}function e2(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function t2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;s.uniform2iv(this.addr,e),xt(t,e)}}function n2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;s.uniform3iv(this.addr,e),xt(t,e)}}function i2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;s.uniform4iv(this.addr,e),xt(t,e)}}function s2(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function r2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;s.uniform2uiv(this.addr,e),xt(t,e)}}function a2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;s.uniform3uiv(this.addr,e),xt(t,e)}}function o2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;s.uniform4uiv(this.addr,e),xt(t,e)}}function c2(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(eu.compareFunction=pc,r=eu):r=_u,t.setTexture2D(e||r,i)}function l2(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||yu,i)}function h2(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||vu,i)}function u2(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||xu,i)}function d2(s){switch(s){case 5126:return jp;case 35664:return Yp;case 35665:return Kp;case 35666:return Jp;case 35674:return Zp;case 35675:return $p;case 35676:return Qp;case 5124:case 35670:return e2;case 35667:case 35671:return t2;case 35668:case 35672:return n2;case 35669:case 35673:return i2;case 5125:return s2;case 36294:return r2;case 36295:return a2;case 36296:return o2;case 35678:case 36198:case 36298:case 36306:case 35682:return c2;case 35679:case 36299:case 36307:return l2;case 35680:case 36300:case 36308:case 36293:return h2;case 36289:case 36303:case 36311:case 36292:return u2}}function f2(s,e){s.uniform1fv(this.addr,e)}function p2(s,e){let t=_s(e,this.size,2);s.uniform2fv(this.addr,t)}function m2(s,e){let t=_s(e,this.size,3);s.uniform3fv(this.addr,t)}function g2(s,e){let t=_s(e,this.size,4);s.uniform4fv(this.addr,t)}function b2(s,e){let t=_s(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function _2(s,e){let t=_s(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function x2(s,e){let t=_s(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function y2(s,e){s.uniform1iv(this.addr,e)}function v2(s,e){s.uniform2iv(this.addr,e)}function M2(s,e){s.uniform3iv(this.addr,e)}function S2(s,e){s.uniform4iv(this.addr,e)}function T2(s,e){s.uniform1uiv(this.addr,e)}function E2(s,e){s.uniform2uiv(this.addr,e)}function w2(s,e){s.uniform3uiv(this.addr,e)}function A2(s,e){s.uniform4uiv(this.addr,e)}function R2(s,e,t){let n=this.cache,i=e.length,r=io(t,i);_t(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||_u,r[a])}function C2(s,e,t){let n=this.cache,i=e.length,r=io(t,i);_t(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||yu,r[a])}function I2(s,e,t){let n=this.cache,i=e.length,r=io(t,i);_t(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||vu,r[a])}function P2(s,e,t){let n=this.cache,i=e.length,r=io(t,i);_t(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||xu,r[a])}function L2(s){switch(s){case 5126:return f2;case 35664:return p2;case 35665:return m2;case 35666:return g2;case 35674:return b2;case 35675:return _2;case 35676:return x2;case 5124:case 35670:return y2;case 35667:case 35671:return v2;case 35668:case 35672:return M2;case 35669:case 35673:return S2;case 5125:return T2;case 36294:return E2;case 36295:return w2;case 36296:return A2;case 35678:case 36198:case 36298:case 36306:case 35682:return R2;case 35679:case 36299:case 36307:return C2;case 35680:case 36300:case 36308:case 36293:return I2;case 36289:case 36303:case 36311:case 36292:return P2}}var Rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=d2(t.type)}},Cc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=L2(t.type)}},Ic=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Ac=/(\w+)(\])?(\[|\.)?/g;function au(s,e){s.seq.push(e),s.map[e.id]=e}function D2(s,e,t){let n=s.name,i=n.length;for(Ac.lastIndex=0;;){let r=Ac.exec(n),a=Ac.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){au(t,c===void 0?new Rc(o,s,e):new Cc(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Ic(o),au(t,h)),t=h}}}var bs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);D2(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function ou(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var U2=37297,N2=0;function F2(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var cu=new Le;function O2(s){Ve._getMatrix(cu,Ve.workingColorSpace,s);let e=`mat3( ${cu.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(s)){case Us:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function lu(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+F2(s.getShaderSource(e),o)}else return r}function B2(s,e){let t=O2(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function k2(s,e){let t;switch(e){case Th:t="Linear";break;case Eh:t="Reinhard";break;case wh:t="Cineon";break;case pa:t="ACESFilmic";break;case Rh:t="AgX";break;case Ch:t="Neutral";break;case Ah:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var eo=new I;function z2(){Ve.getLuminanceCoefficients(eo);let s=eo.x.toFixed(4),e=eo.y.toFixed(4),t=eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H2(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function G2(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function V2(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ur(s){return s!==""}function hu(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var W2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(s){return s.replace(W2,q2)}var X2=new Map;function q2(s,e){let t=Oe[e];if(t===void 0){let n=X2.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Pc(t)}var j2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function du(s){return s.replace(j2,Y2)}function Y2(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function fu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function K2(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Qo?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===aa?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===vn&&(e="SHADOWMAP_TYPE_VSM"),e}function J2(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case vi:case Mi:e="ENVMAP_TYPE_CUBE";break;case Si:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Z2(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Mi:e="ENVMAP_MODE_REFRACTION";break}return e}function $2(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ic:e="ENVMAP_BLENDING_MULTIPLY";break;case Mh:e="ENVMAP_BLENDING_MIX";break;case Sh:e="ENVMAP_BLENDING_ADD";break}return e}function Q2(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function e0(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=K2(t),c=J2(t),u=Z2(t),h=$2(t),d=Q2(t),p=H2(t),b=G2(r),g=i.createProgram(),m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(ur).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(ur).join(`
`),f.length>0&&(f+=`
`)):(m=[fu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),f=[fu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==zn?k2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,B2("linearToOutputTexel",t.outputColorSpace),z2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),a=Pc(a),a=hu(a,t),a=uu(a,t),o=Pc(o),o=hu(o,t),o=uu(o,t),a=du(a),o=du(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=y+m+a,_=y+f+o,A=ou(i,i.VERTEX_SHADER,M),E=ou(i,i.FRAGMENT_SHADER,_);i.attachShader(g,A),i.attachShader(g,E),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function R(P){if(s.debug.checkShaderErrors){let O=i.getProgramInfoLog(g)||"",z=i.getShaderInfoLog(A)||"",V=i.getShaderInfoLog(E)||"",j=O.trim(),X=z.trim(),te=V.trim(),H=!0,re=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,A,E);else{let le=lu(i,A,"vertex"),Me=lu(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+j+`
`+le+`
`+Me)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(X===""||te==="")&&(re=!1);re&&(P.diagnostics={runnable:H,programLog:j,vertexShader:{log:X,prefix:m},fragmentShader:{log:te,prefix:f}})}i.deleteShader(A),i.deleteShader(E),D=new bs(i,g),T=V2(i,g)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(g,U2)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=N2++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=E,this}var t0=0,Lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Dc(e),t.set(e,n)),n}},Dc=class{constructor(e){this.id=t0++,this.code=e,this.usedTimes=0}};function n0(s,e,t,n,i,r,a){let o=new Os,l=new Lc,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,S,P,O,z){let V=O.fog,j=z.geometry,X=T.isMeshStandardMaterial?O.environment:null,te=(T.isMeshStandardMaterial?t:e).get(T.envMap||X),H=te&&te.mapping===Si?te.image.height:null,re=b[T.type];T.precision!==null&&(p=i.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));let le=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Me=le!==void 0?le.length:0,Be=0;j.morphAttributes.position!==void 0&&(Be=1),j.morphAttributes.normal!==void 0&&(Be=2),j.morphAttributes.color!==void 0&&(Be=3);let et,it,je,q;if(re){let Ye=Mn[re];et=Ye.vertexShader,it=Ye.fragmentShader}else et=T.vertexShader,it=T.fragmentShader,l.update(T),je=l.getVertexShaderID(T),q=l.getFragmentShaderID(T);let J=s.getRenderTarget(),de=s.state.buffers.depth.getReversed(),Ie=z.isInstancedMesh===!0,ve=z.isBatchedMesh===!0,We=!!T.map,At=!!T.matcap,C=!!te,st=!!T.aoMap,Ue=!!T.lightMap,Re=!!T.bumpMap,me=!!T.normalMap,rt=!!T.displacementMap,ge=!!T.emissiveMap,Fe=!!T.metalnessMap,yt=!!T.roughnessMap,dt=T.anisotropy>0,w=T.clearcoat>0,x=T.dispersion>0,F=T.iridescence>0,W=T.sheen>0,K=T.transmission>0,G=dt&&!!T.anisotropyMap,ye=w&&!!T.clearcoatMap,ne=w&&!!T.clearcoatNormalMap,be=w&&!!T.clearcoatRoughnessMap,_e=F&&!!T.iridescenceMap,Q=F&&!!T.iridescenceThicknessMap,ce=W&&!!T.sheenColorMap,Ae=W&&!!T.sheenRoughnessMap,xe=!!T.specularMap,ae=!!T.specularColorMap,Ne=!!T.specularIntensityMap,L=K&&!!T.transmissionMap,ee=K&&!!T.thicknessMap,ie=!!T.gradientMap,ue=!!T.alphaMap,Z=T.alphaTest>0,Y=!!T.alphaHash,pe=!!T.extensions,De=zn;T.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(De=s.toneMapping);let tt={shaderID:re,shaderType:T.type,shaderName:T.name,vertexShader:et,fragmentShader:it,defines:T.defines,customVertexShaderID:je,customFragmentShaderID:q,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:ve,batchingColor:ve&&z._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&z.instanceColor!==null,instancingMorph:Ie&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?s.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:pt,alphaToCoverage:!!T.alphaToCoverage,map:We,matcap:At,envMap:C,envMapMode:C&&te.mapping,envMapCubeUVHeight:H,aoMap:st,lightMap:Ue,bumpMap:Re,normalMap:me,displacementMap:d&&rt,emissiveMap:ge,normalMapObjectSpace:me&&T.normalMapType===Uh,normalMapTangentSpace:me&&T.normalMapType===fc,metalnessMap:Fe,roughnessMap:yt,anisotropy:dt,anisotropyMap:G,clearcoat:w,clearcoatMap:ye,clearcoatNormalMap:ne,clearcoatRoughnessMap:be,dispersion:x,iridescence:F,iridescenceMap:_e,iridescenceThicknessMap:Q,sheen:W,sheenColorMap:ce,sheenRoughnessMap:Ae,specularMap:xe,specularColorMap:ae,specularIntensityMap:Ne,transmission:K,transmissionMap:L,thicknessMap:ee,gradientMap:ie,opaque:T.transparent===!1&&T.blending===hi&&T.alphaToCoverage===!1,alphaMap:ue,alphaTest:Z,alphaHash:Y,combine:T.combine,mapUv:We&&g(T.map.channel),aoMapUv:st&&g(T.aoMap.channel),lightMapUv:Ue&&g(T.lightMap.channel),bumpMapUv:Re&&g(T.bumpMap.channel),normalMapUv:me&&g(T.normalMap.channel),displacementMapUv:rt&&g(T.displacementMap.channel),emissiveMapUv:ge&&g(T.emissiveMap.channel),metalnessMapUv:Fe&&g(T.metalnessMap.channel),roughnessMapUv:yt&&g(T.roughnessMap.channel),anisotropyMapUv:G&&g(T.anisotropyMap.channel),clearcoatMapUv:ye&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:ne&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(T.sheenRoughnessMap.channel),specularMapUv:xe&&g(T.specularMap.channel),specularColorMapUv:ae&&g(T.specularColorMap.channel),specularIntensityMapUv:Ne&&g(T.specularIntensityMap.channel),transmissionMapUv:L&&g(T.transmissionMap.channel),thicknessMapUv:ee&&g(T.thicknessMap.channel),alphaMapUv:ue&&g(T.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(me||dt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(We||ue),fog:!!V,useFog:T.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:de,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Be,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:De,decodeVideoTexture:We&&T.map.isVideoTexture===!0&&Ve.getTransfer(T.map.colorSpace)===Je,decodeVideoTextureEmissive:ge&&T.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(T.emissiveMap.colorSpace)===Je,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ht,flipSided:T.side===Ot,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:pe&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&T.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function f(T){let S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(let P in T.defines)S.push(P),S.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(y(S,T),M(S,T),S.push(s.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function y(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function M(T,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),T.push(o.mask)}function _(T){let S=b[T.type],P;if(S){let O=Mn[S];P=Xh.clone(O.uniforms)}else P=T.uniforms;return P}function A(T,S){let P;for(let O=0,z=u.length;O<z;O++){let V=u[O];if(V.cacheKey===S){P=V,++P.usedTimes;break}}return P===void 0&&(P=new e0(s,S,T,r),u.push(P)),P}function E(T){if(--T.usedTimes===0){let S=u.indexOf(T);u[S]=u[u.length-1],u.pop(),T.destroy()}}function R(T){l.remove(T)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:A,releaseProgram:E,releaseShaderCache:R,programs:u,dispose:D}}function i0(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function s0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function pu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function mu(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,p,b,g,m){let f=s[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:b,renderOrder:h.renderOrder,z:g,group:m},s[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=b,f.renderOrder=h.renderOrder,f.z=g,f.group=m),e++,f}function o(h,d,p,b,g,m){let f=a(h,d,p,b,g,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(h,d,p,b,g,m){let f=a(h,d,p,b,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||s0),n.length>1&&n.sort(d||pu),i.length>1&&i.sort(d||pu)}function u(){for(let h=e,d=s.length;h<d;h++){let p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function r0(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new mu,s.set(n,[a])):i>=r.length?(a=new mu,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function a0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new we};break;case"SpotLight":t={position:new I,direction:new I,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function o0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var c0=0;function l0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function h0(s){let e=new a0,t=o0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let i=new I,r=new Pe,a=new Pe;function o(c){let u=0,h=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,b=0,g=0,m=0,f=0,y=0,M=0,_=0,A=0,E=0,R=0;c.sort(l0);for(let T=0,S=c.length;T<S;T++){let P=c[T],O=P.color,z=P.intensity,V=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=O.r*z,h+=O.g*z,d+=O.b*z;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],z);R++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let te=P.shadow,H=t.get(P);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=P.shadow.matrix,y++}n.directional[p]=X,p++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(O).multiplyScalar(z),X.distance=V,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[g]=X;let te=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,te.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[g]=te.matrix,P.castShadow){let H=t.get(P);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=j,_++}g++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(O).multiplyScalar(z),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let te=P.shadow,H=t.get(P);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,H.shadowCameraNear=te.camera.near,H.shadowCameraFar=te.camera.far,n.pointShadow[b]=H,n.pointShadowMap[b]=j,n.pointShadowMatrix[b]=P.shadow.matrix,M++}n.point[b]=X,b++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(z),X.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[f]=X,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let D=n.hash;(D.directionalLength!==p||D.pointLength!==b||D.spotLength!==g||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==y||D.numPointShadows!==M||D.numSpotShadows!==_||D.numSpotMaps!==A||D.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=b,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,D.directionalLength=p,D.pointLength=b,D.spotLength=g,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=y,D.numPointShadows=M,D.numSpotShadows=_,D.numSpotMaps=A,D.numLightProbes=R,n.version=c0++)}function l(c,u){let h=0,d=0,p=0,b=0,g=0,m=u.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){let M=c[f];if(M.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),h++}else if(M.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let _=n.rectArea[b];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),b++}else if(M.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let _=n.hemi[g];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function gu(s){let e=new h0(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function u0(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new gu(s),e.set(i,[o])):r>=a.length?(o=new gu(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var d0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function p0(s,e,t){let n=new rs,i=new ze,r=new ze,a=new qe,o=new Zr({depthPacking:Dh}),l=new $r,c={},u=t.maxTextureSize,h={[an]:Ot,[Ot]:an,[Ht]:Ht},d=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:d0,fragmentShader:f0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let b=new Ft;b.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new ht(b,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qo;let f=this.type;this.render=function(E,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let T=s.getRenderTarget(),S=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),O=s.state;O.setBlending(kn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let z=f!==vn&&this.type===vn,V=f===vn&&this.type!==vn;for(let j=0,X=E.length;j<X;j++){let te=E[j],H=te.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let re=H.getFrameExtents();if(i.multiply(re),r.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/re.x),i.x=r.x*re.x,H.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/re.y),i.y=r.y*re.y,H.mapSize.y=r.y)),H.map===null||z===!0||V===!0){let Me=this.type!==vn?{minFilter:Tt,magFilter:Tt}:{};H.map!==null&&H.map.dispose(),H.map=new gn(i.x,i.y,Me),H.map.texture.name=te.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();let le=H.getViewportCount();for(let Me=0;Me<le;Me++){let Be=H.getViewport(Me);a.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),O.viewport(a),H.updateMatrices(te,Me),n=H.getFrustum(),_(R,D,H.camera,te,this.type)}H.isPointLightShadow!==!0&&this.type===vn&&y(H,D),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(T,S,P)};function y(E,R){let D=e.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new gn(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(R,null,D,d,g,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(R,null,D,p,g,null)}function M(E,R,D,T){let S=null,P=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)S=P;else if(S=D.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let O=S.uuid,z=R.uuid,V=c[O];V===void 0&&(V={},c[O]=V);let j=V[z];j===void 0&&(j=S.clone(),V[z]=j,R.addEventListener("dispose",A)),S=j}if(S.visible=R.visible,S.wireframe=R.wireframe,T===vn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let O=s.properties.get(S);O.light=D}return S}function _(E,R,D,T,S){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===vn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);let z=e.update(E),V=E.material;if(Array.isArray(V)){let j=z.groups;for(let X=0,te=j.length;X<te;X++){let H=j[X],re=V[H.materialIndex];if(re&&re.visible){let le=M(E,re,T,S);E.onBeforeShadow(s,E,R,D,z,le,H),s.renderBufferDirect(D,null,z,le,E,H),E.onAfterShadow(s,E,R,D,z,le,H)}}}else if(V.visible){let j=M(E,V,T,S);E.onBeforeShadow(s,E,R,D,z,j,null),s.renderBufferDirect(D,null,z,j,E,null),E.onAfterShadow(s,E,R,D,z,j,null)}}let O=E.children;for(let z=0,V=O.length;z<V;z++)_(O[z],R,D,T,S)}function A(E){E.target.removeEventListener("dispose",A);for(let D in c){let T=c[D],S=E.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}var m0={[oa]:ca,[la]:da,[ha]:fa,[ui]:ua,[ca]:oa,[da]:la,[fa]:ha,[ua]:ui};function g0(s,e){function t(){let L=!1,ee=new qe,ie=null,ue=new qe(0,0,0,0);return{setMask:function(Z){ie!==Z&&!L&&(s.colorMask(Z,Z,Z,Z),ie=Z)},setLocked:function(Z){L=Z},setClear:function(Z,Y,pe,De,tt){tt===!0&&(Z*=De,Y*=De,pe*=De),ee.set(Z,Y,pe,De),ue.equals(ee)===!1&&(s.clearColor(Z,Y,pe,De),ue.copy(ee))},reset:function(){L=!1,ie=null,ue.set(-1,0,0,0)}}}function n(){let L=!1,ee=!1,ie=null,ue=null,Z=null;return{setReversed:function(Y){if(ee!==Y){let pe=e.get("EXT_clip_control");Y?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),ee=Y;let De=Z;Z=null,this.setClear(De)}},getReversed:function(){return ee},setTest:function(Y){Y?J(s.DEPTH_TEST):de(s.DEPTH_TEST)},setMask:function(Y){ie!==Y&&!L&&(s.depthMask(Y),ie=Y)},setFunc:function(Y){if(ee&&(Y=m0[Y]),ue!==Y){switch(Y){case oa:s.depthFunc(s.NEVER);break;case ca:s.depthFunc(s.ALWAYS);break;case la:s.depthFunc(s.LESS);break;case ui:s.depthFunc(s.LEQUAL);break;case ha:s.depthFunc(s.EQUAL);break;case ua:s.depthFunc(s.GEQUAL);break;case da:s.depthFunc(s.GREATER);break;case fa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ue=Y}},setLocked:function(Y){L=Y},setClear:function(Y){Z!==Y&&(ee&&(Y=1-Y),s.clearDepth(Y),Z=Y)},reset:function(){L=!1,ie=null,ue=null,Z=null,ee=!1}}}function i(){let L=!1,ee=null,ie=null,ue=null,Z=null,Y=null,pe=null,De=null,tt=null;return{setTest:function(Ye){L||(Ye?J(s.STENCIL_TEST):de(s.STENCIL_TEST))},setMask:function(Ye){ee!==Ye&&!L&&(s.stencilMask(Ye),ee=Ye)},setFunc:function(Ye,Tn,dn){(ie!==Ye||ue!==Tn||Z!==dn)&&(s.stencilFunc(Ye,Tn,dn),ie=Ye,ue=Tn,Z=dn)},setOp:function(Ye,Tn,dn){(Y!==Ye||pe!==Tn||De!==dn)&&(s.stencilOp(Ye,Tn,dn),Y=Ye,pe=Tn,De=dn)},setLocked:function(Ye){L=Ye},setClear:function(Ye){tt!==Ye&&(s.clearStencil(Ye),tt=Ye)},reset:function(){L=!1,ee=null,ie=null,ue=null,Z=null,Y=null,pe=null,De=null,tt=null}}}let r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,p=[],b=null,g=!1,m=null,f=null,y=null,M=null,_=null,A=null,E=null,R=new we(0,0,0),D=0,T=!1,S=null,P=null,O=null,z=null,V=null,j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,te=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=te>=1):H.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=te>=2);let re=null,le={},Me=s.getParameter(s.SCISSOR_BOX),Be=s.getParameter(s.VIEWPORT),et=new qe().fromArray(Me),it=new qe().fromArray(Be);function je(L,ee,ie,ue){let Z=new Uint8Array(4),Y=s.createTexture();s.bindTexture(L,Y),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pe=0;pe<ie;pe++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(ee,0,s.RGBA,1,1,ue,0,s.RGBA,s.UNSIGNED_BYTE,Z):s.texImage2D(ee+pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Z);return Y}let q={};q[s.TEXTURE_2D]=je(s.TEXTURE_2D,s.TEXTURE_2D,1),q[s.TEXTURE_CUBE_MAP]=je(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[s.TEXTURE_2D_ARRAY]=je(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),q[s.TEXTURE_3D]=je(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(s.DEPTH_TEST),a.setFunc(ui),Re(!1),me($o),J(s.CULL_FACE),st(kn);function J(L){u[L]!==!0&&(s.enable(L),u[L]=!0)}function de(L){u[L]!==!1&&(s.disable(L),u[L]=!1)}function Ie(L,ee){return h[L]!==ee?(s.bindFramebuffer(L,ee),h[L]=ee,L===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ee),L===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ee),!0):!1}function ve(L,ee){let ie=p,ue=!1;if(L){ie=d.get(ee),ie===void 0&&(ie=[],d.set(ee,ie));let Z=L.textures;if(ie.length!==Z.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let Y=0,pe=Z.length;Y<pe;Y++)ie[Y]=s.COLOR_ATTACHMENT0+Y;ie.length=Z.length,ue=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,ue=!0);ue&&s.drawBuffers(ie)}function We(L){return b!==L?(s.useProgram(L),b=L,!0):!1}let At={[Kn]:s.FUNC_ADD,[rh]:s.FUNC_SUBTRACT,[ah]:s.FUNC_REVERSE_SUBTRACT};At[oh]=s.MIN,At[ch]=s.MAX;let C={[lh]:s.ZERO,[hh]:s.ONE,[uh]:s.SRC_COLOR,[Hr]:s.SRC_ALPHA,[bh]:s.SRC_ALPHA_SATURATE,[mh]:s.DST_COLOR,[fh]:s.DST_ALPHA,[dh]:s.ONE_MINUS_SRC_COLOR,[Gr]:s.ONE_MINUS_SRC_ALPHA,[gh]:s.ONE_MINUS_DST_COLOR,[ph]:s.ONE_MINUS_DST_ALPHA,[_h]:s.CONSTANT_COLOR,[xh]:s.ONE_MINUS_CONSTANT_COLOR,[yh]:s.CONSTANT_ALPHA,[vh]:s.ONE_MINUS_CONSTANT_ALPHA};function st(L,ee,ie,ue,Z,Y,pe,De,tt,Ye){if(L===kn){g===!0&&(de(s.BLEND),g=!1);return}if(g===!1&&(J(s.BLEND),g=!0),L!==sh){if(L!==m||Ye!==T){if((f!==Kn||_!==Kn)&&(s.blendEquation(s.FUNC_ADD),f=Kn,_=Kn),Ye)switch(L){case hi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ec:s.blendFunc(s.ONE,s.ONE);break;case tc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case hi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ec:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case tc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,M=null,A=null,E=null,R.set(0,0,0),D=0,m=L,T=Ye}return}Z=Z||ee,Y=Y||ie,pe=pe||ue,(ee!==f||Z!==_)&&(s.blendEquationSeparate(At[ee],At[Z]),f=ee,_=Z),(ie!==y||ue!==M||Y!==A||pe!==E)&&(s.blendFuncSeparate(C[ie],C[ue],C[Y],C[pe]),y=ie,M=ue,A=Y,E=pe),(De.equals(R)===!1||tt!==D)&&(s.blendColor(De.r,De.g,De.b,tt),R.copy(De),D=tt),m=L,T=!1}function Ue(L,ee){L.side===Ht?de(s.CULL_FACE):J(s.CULL_FACE);let ie=L.side===Ot;ee&&(ie=!ie),Re(ie),L.blending===hi&&L.transparent===!1?st(kn):st(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let ue=L.stencilWrite;o.setTest(ue),ue&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ge(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?J(s.SAMPLE_ALPHA_TO_COVERAGE):de(s.SAMPLE_ALPHA_TO_COVERAGE)}function Re(L){S!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),S=L)}function me(L){L!==nh?(J(s.CULL_FACE),L!==P&&(L===$o?s.cullFace(s.BACK):L===ih?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):de(s.CULL_FACE),P=L}function rt(L){L!==O&&(X&&s.lineWidth(L),O=L)}function ge(L,ee,ie){L?(J(s.POLYGON_OFFSET_FILL),(z!==ee||V!==ie)&&(s.polygonOffset(ee,ie),z=ee,V=ie)):de(s.POLYGON_OFFSET_FILL)}function Fe(L){L?J(s.SCISSOR_TEST):de(s.SCISSOR_TEST)}function yt(L){L===void 0&&(L=s.TEXTURE0+j-1),re!==L&&(s.activeTexture(L),re=L)}function dt(L,ee,ie){ie===void 0&&(re===null?ie=s.TEXTURE0+j-1:ie=re);let ue=le[ie];ue===void 0&&(ue={type:void 0,texture:void 0},le[ie]=ue),(ue.type!==L||ue.texture!==ee)&&(re!==ie&&(s.activeTexture(ie),re=ie),s.bindTexture(L,ee||q[L]),ue.type=L,ue.texture=ee)}function w(){let L=le[re];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{s.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{s.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{s.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{s.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{s.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{s.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{s.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{s.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{s.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{s.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(L){et.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),et.copy(L))}function Ae(L){it.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),it.copy(L))}function xe(L,ee){let ie=c.get(ee);ie===void 0&&(ie=new WeakMap,c.set(ee,ie));let ue=ie.get(L);ue===void 0&&(ue=s.getUniformBlockIndex(ee,L.name),ie.set(L,ue))}function ae(L,ee){let ue=c.get(ee).get(L);l.get(ee)!==ue&&(s.uniformBlockBinding(ee,ue,L.__bindingPointIndex),l.set(ee,ue))}function Ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},re=null,le={},h={},d=new WeakMap,p=[],b=null,g=!1,m=null,f=null,y=null,M=null,_=null,A=null,E=null,R=new we(0,0,0),D=0,T=!1,S=null,P=null,O=null,z=null,V=null,et.set(0,0,s.canvas.width,s.canvas.height),it.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:de,bindFramebuffer:Ie,drawBuffers:ve,useProgram:We,setBlending:st,setMaterial:Ue,setFlipSided:Re,setCullFace:me,setLineWidth:rt,setPolygonOffset:ge,setScissorTest:Fe,activeTexture:yt,bindTexture:dt,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:_e,texImage3D:Q,updateUBOMapping:xe,uniformBlockBinding:ae,texStorage2D:ne,texStorage3D:be,texSubImage2D:W,texSubImage3D:K,compressedTexSubImage2D:G,compressedTexSubImage3D:ye,scissor:ce,viewport:Ae,reset:Ne}}function b0(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,u=new WeakMap,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,x){return p?new OffscreenCanvas(w,x):$i("canvas")}function g(w,x,F){let W=1,K=dt(w);if((K.width>F||K.height>F)&&(W=F/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let G=Math.floor(W*K.width),ye=Math.floor(W*K.height);h===void 0&&(h=b(G,ye));let ne=x?b(G,ye):h;return ne.width=G,ne.height=ye,ne.getContext("2d").drawImage(w,0,0,G,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+G+"x"+ye+")."),ne}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){s.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(w,x,F,W,K=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let G=x;if(x===s.RED&&(F===s.FLOAT&&(G=s.R32F),F===s.HALF_FLOAT&&(G=s.R16F),F===s.UNSIGNED_BYTE&&(G=s.R8)),x===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(G=s.R8UI),F===s.UNSIGNED_SHORT&&(G=s.R16UI),F===s.UNSIGNED_INT&&(G=s.R32UI),F===s.BYTE&&(G=s.R8I),F===s.SHORT&&(G=s.R16I),F===s.INT&&(G=s.R32I)),x===s.RG&&(F===s.FLOAT&&(G=s.RG32F),F===s.HALF_FLOAT&&(G=s.RG16F),F===s.UNSIGNED_BYTE&&(G=s.RG8)),x===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(G=s.RG8UI),F===s.UNSIGNED_SHORT&&(G=s.RG16UI),F===s.UNSIGNED_INT&&(G=s.RG32UI),F===s.BYTE&&(G=s.RG8I),F===s.SHORT&&(G=s.RG16I),F===s.INT&&(G=s.RG32I)),x===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(G=s.RGB8UI),F===s.UNSIGNED_SHORT&&(G=s.RGB16UI),F===s.UNSIGNED_INT&&(G=s.RGB32UI),F===s.BYTE&&(G=s.RGB8I),F===s.SHORT&&(G=s.RGB16I),F===s.INT&&(G=s.RGB32I)),x===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(G=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(G=s.RGBA16UI),F===s.UNSIGNED_INT&&(G=s.RGBA32UI),F===s.BYTE&&(G=s.RGBA8I),F===s.SHORT&&(G=s.RGBA16I),F===s.INT&&(G=s.RGBA32I)),x===s.RGB&&(F===s.UNSIGNED_INT_5_9_9_9_REV&&(G=s.RGB9_E5),F===s.UNSIGNED_INT_10F_11F_11F_REV&&(G=s.R11F_G11F_B10F)),x===s.RGBA){let ye=K?Us:Ve.getTransfer(W);F===s.FLOAT&&(G=s.RGBA32F),F===s.HALF_FLOAT&&(G=s.RGBA16F),F===s.UNSIGNED_BYTE&&(G=ye===Je?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(G=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(G=s.RGB5_A1)}return(G===s.R16F||G===s.R32F||G===s.RG16F||G===s.RG32F||G===s.RGBA16F||G===s.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function _(w,x){let F;return w?x===null||x===$n||x===ds?F=s.DEPTH24_STENCIL8:x===Gt?F=s.DEPTH32F_STENCIL8:x===us&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===$n||x===ds?F=s.DEPTH_COMPONENT24:x===Gt?F=s.DEPTH_COMPONENT32F:x===us&&(F=s.DEPTH_COMPONENT16),F}function A(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Tt&&w.minFilter!==Et?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function E(w){let x=w.target;x.removeEventListener("dispose",E),D(x),x.isVideoTexture&&u.delete(x)}function R(w){let x=w.target;x.removeEventListener("dispose",R),S(x)}function D(w){let x=n.get(w);if(x.__webglInit===void 0)return;let F=w.source,W=d.get(F);if(W){let K=W[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&T(w),Object.keys(W).length===0&&d.delete(F)}n.remove(w)}function T(w){let x=n.get(w);s.deleteTexture(x.__webglTexture);let F=w.source,W=d.get(F);delete W[x.__cacheKey],a.memory.textures--}function S(w){let x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let K=0;K<x.__webglFramebuffer[W].length;K++)s.deleteFramebuffer(x.__webglFramebuffer[W][K]);else s.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)s.deleteFramebuffer(x.__webglFramebuffer[W]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let F=w.textures;for(let W=0,K=F.length;W<K;W++){let G=n.get(F[W]);G.__webglTexture&&(s.deleteTexture(G.__webglTexture),a.memory.textures--),n.remove(F[W])}n.remove(w)}let P=0;function O(){P=0}function z(){let w=P;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),P+=1,w}function V(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function j(w,x){let F=n.get(w);if(w.isVideoTexture&&Fe(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){let W=w.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,w,x);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+x)}function X(w,x){let F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){q(F,w,x);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+x)}function te(w,x){let F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){q(F,w,x);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+x)}function H(w,x){let F=n.get(w);if(w.version>0&&F.__version!==w.version){J(F,w,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+x)}let re={[Jn]:s.REPEAT,[pn]:s.CLAMP_TO_EDGE,[Ji]:s.MIRRORED_REPEAT},le={[Tt]:s.NEAREST,[ga]:s.NEAREST_MIPMAP_NEAREST,[Ti]:s.NEAREST_MIPMAP_LINEAR,[Et]:s.LINEAR,[hs]:s.LINEAR_MIPMAP_NEAREST,[hn]:s.LINEAR_MIPMAP_LINEAR},Me={[Nh]:s.NEVER,[Hh]:s.ALWAYS,[Fh]:s.LESS,[pc]:s.LEQUAL,[Oh]:s.EQUAL,[zh]:s.GEQUAL,[Bh]:s.GREATER,[kh]:s.NOTEQUAL};function Be(w,x){if(x.type===Gt&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Et||x.magFilter===hs||x.magFilter===Ti||x.magFilter===hn||x.minFilter===Et||x.minFilter===hs||x.minFilter===Ti||x.minFilter===hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,re[x.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,re[x.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,re[x.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,le[x.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,le[x.minFilter]),x.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,Me[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Tt||x.minFilter!==Ti&&x.minFilter!==hn||x.type===Gt&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function et(w,x){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",E));let W=x.source,K=d.get(W);K===void 0&&(K={},d.set(W,K));let G=V(x);if(G!==w.__cacheKey){K[G]===void 0&&(K[G]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),K[G].usedTimes++;let ye=K[w.__cacheKey];ye!==void 0&&(K[w.__cacheKey].usedTimes--,ye.usedTimes===0&&T(x)),w.__cacheKey=G,w.__webglTexture=K[G].texture}return F}function it(w,x,F){return Math.floor(Math.floor(w/F)/x)}function je(w,x,F,W){let G=w.updateRanges;if(G.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,F,W,x.data);else{G.sort((Q,ce)=>Q.start-ce.start);let ye=0;for(let Q=1;Q<G.length;Q++){let ce=G[ye],Ae=G[Q],xe=ce.start+ce.count,ae=it(Ae.start,x.width,4),Ne=it(ce.start,x.width,4);Ae.start<=xe+1&&ae===Ne&&it(Ae.start+Ae.count-1,x.width,4)===ae?ce.count=Math.max(ce.count,Ae.start+Ae.count-ce.start):(++ye,G[ye]=Ae)}G.length=ye+1;let ne=s.getParameter(s.UNPACK_ROW_LENGTH),be=s.getParameter(s.UNPACK_SKIP_PIXELS),_e=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let Q=0,ce=G.length;Q<ce;Q++){let Ae=G[Q],xe=Math.floor(Ae.start/4),ae=Math.ceil(Ae.count/4),Ne=xe%x.width,L=Math.floor(xe/x.width),ee=ae,ie=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ne),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),t.texSubImage2D(s.TEXTURE_2D,0,Ne,L,ee,ie,F,W,x.data)}w.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ne),s.pixelStorei(s.UNPACK_SKIP_PIXELS,be),s.pixelStorei(s.UNPACK_SKIP_ROWS,_e)}}function q(w,x,F){let W=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=s.TEXTURE_3D);let K=et(w,x),G=x.source;t.bindTexture(W,w.__webglTexture,s.TEXTURE0+F);let ye=n.get(G);if(G.version!==ye.__version||K===!0){t.activeTexture(s.TEXTURE0+F);let ne=Ve.getPrimaries(Ve.workingColorSpace),be=x.colorSpace===Hn?null:Ve.getPrimaries(x.colorSpace),_e=x.colorSpace===Hn||ne===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Q=g(x.image,!1,i.maxTextureSize);Q=yt(x,Q);let ce=r.convert(x.format,x.colorSpace),Ae=r.convert(x.type),xe=M(x.internalFormat,ce,Ae,x.colorSpace,x.isVideoTexture);Be(W,x);let ae,Ne=x.mipmaps,L=x.isVideoTexture!==!0,ee=ye.__version===void 0||K===!0,ie=G.dataReady,ue=A(x,Q);if(x.isDepthTexture)xe=_(x.format===fs,x.type),ee&&(L?t.texStorage2D(s.TEXTURE_2D,1,xe,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,xe,Q.width,Q.height,0,ce,Ae,null));else if(x.isDataTexture)if(Ne.length>0){L&&ee&&t.texStorage2D(s.TEXTURE_2D,ue,xe,Ne[0].width,Ne[0].height);for(let Z=0,Y=Ne.length;Z<Y;Z++)ae=Ne[Z],L?ie&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,ae.width,ae.height,ce,Ae,ae.data):t.texImage2D(s.TEXTURE_2D,Z,xe,ae.width,ae.height,0,ce,Ae,ae.data);x.generateMipmaps=!1}else L?(ee&&t.texStorage2D(s.TEXTURE_2D,ue,xe,Q.width,Q.height),ie&&je(x,Q,ce,Ae)):t.texImage2D(s.TEXTURE_2D,0,xe,Q.width,Q.height,0,ce,Ae,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&ee&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,xe,Ne[0].width,Ne[0].height,Q.depth);for(let Z=0,Y=Ne.length;Z<Y;Z++)if(ae=Ne[Z],x.format!==wt)if(ce!==null)if(L){if(ie)if(x.layerUpdates.size>0){let pe=vc(ae.width,ae.height,x.format,x.type);for(let De of x.layerUpdates){let tt=ae.data.subarray(De*pe/ae.data.BYTES_PER_ELEMENT,(De+1)*pe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,De,ae.width,ae.height,1,ce,tt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,Q.depth,ce,ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,xe,ae.width,ae.height,Q.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ie&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,Q.depth,ce,Ae,ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Z,xe,ae.width,ae.height,Q.depth,0,ce,Ae,ae.data)}else{L&&ee&&t.texStorage2D(s.TEXTURE_2D,ue,xe,Ne[0].width,Ne[0].height);for(let Z=0,Y=Ne.length;Z<Y;Z++)ae=Ne[Z],x.format!==wt?ce!==null?L?ie&&t.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,ae.width,ae.height,ce,ae.data):t.compressedTexImage2D(s.TEXTURE_2D,Z,xe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ie&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,ae.width,ae.height,ce,Ae,ae.data):t.texImage2D(s.TEXTURE_2D,Z,xe,ae.width,ae.height,0,ce,Ae,ae.data)}else if(x.isDataArrayTexture)if(L){if(ee&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,xe,Q.width,Q.height,Q.depth),ie)if(x.layerUpdates.size>0){let Z=vc(Q.width,Q.height,x.format,x.type);for(let Y of x.layerUpdates){let pe=Q.data.subarray(Y*Z/Q.data.BYTES_PER_ELEMENT,(Y+1)*Z/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Y,Q.width,Q.height,1,ce,Ae,pe)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ce,Ae,Q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,xe,Q.width,Q.height,Q.depth,0,ce,Ae,Q.data);else if(x.isData3DTexture)L?(ee&&t.texStorage3D(s.TEXTURE_3D,ue,xe,Q.width,Q.height,Q.depth),ie&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ce,Ae,Q.data)):t.texImage3D(s.TEXTURE_3D,0,xe,Q.width,Q.height,Q.depth,0,ce,Ae,Q.data);else if(x.isFramebufferTexture){if(ee)if(L)t.texStorage2D(s.TEXTURE_2D,ue,xe,Q.width,Q.height);else{let Z=Q.width,Y=Q.height;for(let pe=0;pe<ue;pe++)t.texImage2D(s.TEXTURE_2D,pe,xe,Z,Y,0,ce,Ae,null),Z>>=1,Y>>=1}}else if(Ne.length>0){if(L&&ee){let Z=dt(Ne[0]);t.texStorage2D(s.TEXTURE_2D,ue,xe,Z.width,Z.height)}for(let Z=0,Y=Ne.length;Z<Y;Z++)ae=Ne[Z],L?ie&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,ce,Ae,ae):t.texImage2D(s.TEXTURE_2D,Z,xe,ce,Ae,ae);x.generateMipmaps=!1}else if(L){if(ee){let Z=dt(Q);t.texStorage2D(s.TEXTURE_2D,ue,xe,Z.width,Z.height)}ie&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ce,Ae,Q)}else t.texImage2D(s.TEXTURE_2D,0,xe,ce,Ae,Q);m(x)&&f(W),ye.__version=G.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function J(w,x,F){if(x.image.length!==6)return;let W=et(w,x),K=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+F);let G=n.get(K);if(K.version!==G.__version||W===!0){t.activeTexture(s.TEXTURE0+F);let ye=Ve.getPrimaries(Ve.workingColorSpace),ne=x.colorSpace===Hn?null:Ve.getPrimaries(x.colorSpace),be=x.colorSpace===Hn||ye===ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let _e=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,ce=[];for(let Y=0;Y<6;Y++)!_e&&!Q?ce[Y]=g(x.image[Y],!0,i.maxCubemapSize):ce[Y]=Q?x.image[Y].image:x.image[Y],ce[Y]=yt(x,ce[Y]);let Ae=ce[0],xe=r.convert(x.format,x.colorSpace),ae=r.convert(x.type),Ne=M(x.internalFormat,xe,ae,x.colorSpace),L=x.isVideoTexture!==!0,ee=G.__version===void 0||W===!0,ie=K.dataReady,ue=A(x,Ae);Be(s.TEXTURE_CUBE_MAP,x);let Z;if(_e){L&&ee&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Ne,Ae.width,Ae.height);for(let Y=0;Y<6;Y++){Z=ce[Y].mipmaps;for(let pe=0;pe<Z.length;pe++){let De=Z[pe];x.format!==wt?xe!==null?L?ie&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,0,0,De.width,De.height,xe,De.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,Ne,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,0,0,De.width,De.height,xe,ae,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,Ne,De.width,De.height,0,xe,ae,De.data)}}}else{if(Z=x.mipmaps,L&&ee){Z.length>0&&ue++;let Y=dt(ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Ne,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Q){L?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ce[Y].width,ce[Y].height,xe,ae,ce[Y].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ne,ce[Y].width,ce[Y].height,0,xe,ae,ce[Y].data);for(let pe=0;pe<Z.length;pe++){let tt=Z[pe].image[Y].image;L?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,0,0,tt.width,tt.height,xe,ae,tt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,Ne,tt.width,tt.height,0,xe,ae,tt.data)}}else{L?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,xe,ae,ce[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ne,xe,ae,ce[Y]);for(let pe=0;pe<Z.length;pe++){let De=Z[pe];L?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,0,0,xe,ae,De.image[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,Ne,xe,ae,De.image[Y])}}}m(x)&&f(s.TEXTURE_CUBE_MAP),G.__version=K.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function de(w,x,F,W,K,G){let ye=r.convert(F.format,F.colorSpace),ne=r.convert(F.type),be=M(F.internalFormat,ye,ne,F.colorSpace),_e=n.get(x),Q=n.get(F);if(Q.__renderTarget=x,!_e.__hasExternalTextures){let ce=Math.max(1,x.width>>G),Ae=Math.max(1,x.height>>G);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?t.texImage3D(K,G,be,ce,Ae,x.depth,0,ye,ne,null):t.texImage2D(K,G,be,ce,Ae,0,ye,ne,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),ge(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,W,K,Q.__webglTexture,0,rt(x)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,W,K,Q.__webglTexture,G),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ie(w,x,F){if(s.bindRenderbuffer(s.RENDERBUFFER,w),x.depthBuffer){let W=x.depthTexture,K=W&&W.isDepthTexture?W.type:null,G=_(x.stencilBuffer,K),ye=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ne=rt(x);ge(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,G,x.width,x.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,G,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,G,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,w)}else{let W=x.textures;for(let K=0;K<W.length;K++){let G=W[K],ye=r.convert(G.format,G.colorSpace),ne=r.convert(G.type),be=M(G.internalFormat,ye,ne,G.colorSpace),_e=rt(x);F&&ge(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,be,x.width,x.height):ge(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,be,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,be,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ve(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=n.get(x.depthTexture);W.__renderTarget=x,(!W.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j(x.depthTexture,0);let K=W.__webglTexture,G=rt(x);if(x.depthTexture.format===Zi)ge(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(x.depthTexture.format===fs)ge(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function We(w){let x=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let W=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=W}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let W=w.texture.mipmaps;W&&W.length>0?ve(x.__webglFramebuffer[0],w):ve(x.__webglFramebuffer,w)}else if(F){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=s.createRenderbuffer(),Ie(x.__webglDepthbuffer[W],w,!1);else{let K=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=x.__webglDepthbuffer[W];s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,G)}}else{let W=w.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Ie(x.__webglDepthbuffer,w,!1);else{let K=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,G)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function At(w,x,F){let W=n.get(w);x!==void 0&&de(W.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&We(w)}function C(w){let x=w.texture,F=n.get(w),W=n.get(x);w.addEventListener("dispose",R);let K=w.textures,G=w.isWebGLCubeRenderTarget===!0,ye=K.length>1;if(ye||(W.__webglTexture===void 0&&(W.__webglTexture=s.createTexture()),W.__version=x.version,a.memory.textures++),G){F.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ne]=[];for(let be=0;be<x.mipmaps.length;be++)F.__webglFramebuffer[ne][be]=s.createFramebuffer()}else F.__webglFramebuffer[ne]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ne=0;ne<x.mipmaps.length;ne++)F.__webglFramebuffer[ne]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(ye)for(let ne=0,be=K.length;ne<be;ne++){let _e=n.get(K[ne]);_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture(),a.memory.textures++)}if(w.samples>0&&ge(w)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ne=0;ne<K.length;ne++){let be=K[ne];F.__webglColorRenderbuffer[ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[ne]);let _e=r.convert(be.format,be.colorSpace),Q=r.convert(be.type),ce=M(be.internalFormat,_e,Q,be.colorSpace,w.isXRRenderTarget===!0),Ae=rt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,ce,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,F.__webglColorRenderbuffer[ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Ie(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(G){t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),Be(s.TEXTURE_CUBE_MAP,x);for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)de(F.__webglFramebuffer[ne][be],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be);else de(F.__webglFramebuffer[ne],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(x)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ne=0,be=K.length;ne<be;ne++){let _e=K[ne],Q=n.get(_e),ce=s.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ce=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,Q.__webglTexture),Be(ce,_e),de(F.__webglFramebuffer,w,_e,s.COLOR_ATTACHMENT0+ne,ce,0),m(_e)&&f(ce)}t.unbindTexture()}else{let ne=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ne=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ne,W.__webglTexture),Be(ne,x),x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)de(F.__webglFramebuffer[be],w,x,s.COLOR_ATTACHMENT0,ne,be);else de(F.__webglFramebuffer,w,x,s.COLOR_ATTACHMENT0,ne,0);m(x)&&f(ne),t.unbindTexture()}w.depthBuffer&&We(w)}function st(w){let x=w.textures;for(let F=0,W=x.length;F<W;F++){let K=x[F];if(m(K)){let G=y(w),ye=n.get(K).__webglTexture;t.bindTexture(G,ye),f(G),t.unbindTexture()}}}let Ue=[],Re=[];function me(w){if(w.samples>0){if(ge(w)===!1){let x=w.textures,F=w.width,W=w.height,K=s.COLOR_BUFFER_BIT,G=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=n.get(w),ne=x.length>1;if(ne)for(let _e=0;_e<x.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);let be=w.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let _e=0;_e<x.length;_e++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ye.__webglColorRenderbuffer[_e]);let Q=n.get(x[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,F,W,0,0,F,W,K,s.NEAREST),l===!0&&(Ue.length=0,Re.length=0,Ue.push(s.COLOR_ATTACHMENT0+_e),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ue.push(G),Re.push(G),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Re)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ne)for(let _e=0;_e<x.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,ye.__webglColorRenderbuffer[_e]);let Q=n.get(x[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,Q,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let x=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function rt(w){return Math.min(i.maxSamples,w.samples)}function ge(w){let x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Fe(w){let x=a.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function yt(w,x){let F=w.colorSpace,W=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==pt&&F!==Hn&&(Ve.getTransfer(F)===Je?(W!==wt||K!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function dt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=te,this.setTextureCube=H,this.rebindTextures=At,this.setupRenderTarget=C,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ge}function _0(s,e){function t(n,i=Hn){let r,a=Ve.getTransfer(i);if(n===un)return s.UNSIGNED_BYTE;if(n===_a)return s.UNSIGNED_SHORT_4_4_4_4;if(n===xa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===oc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===cc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===rc)return s.BYTE;if(n===ac)return s.SHORT;if(n===us)return s.UNSIGNED_SHORT;if(n===ba)return s.INT;if(n===$n)return s.UNSIGNED_INT;if(n===Gt)return s.FLOAT;if(n===Qn)return s.HALF_FLOAT;if(n===lc)return s.ALPHA;if(n===hc)return s.RGB;if(n===wt)return s.RGBA;if(n===Zi)return s.DEPTH_COMPONENT;if(n===fs)return s.DEPTH_STENCIL;if(n===ya)return s.RED;if(n===va)return s.RED_INTEGER;if(n===uc)return s.RG;if(n===Ma)return s.RG_INTEGER;if(n===Sa)return s.RGBA_INTEGER;if(n===ar||n===or||n===cr||n===lr)if(a===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ta||n===Ea||n===wa||n===Aa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ta)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ra||n===Ca||n===Ia)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ra||n===Ca)return a===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ia)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pa||n===La||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===ka||n===za||n===Ha||n===Ga||n===Va||n===Wa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===La)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Da)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ua)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Na)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ba)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ka)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===za)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ga)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Va)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xa||n===qa||n===ja)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xa)return a===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ya||n===Ka||n===Ja||n===Za)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ya)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var x0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Uc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Js(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new cn({vertexShader:x0,fragmentShader:y0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new _i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nc=class extends Ln{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,b=null,g=typeof XRWebGLBinding<"u",m=new Uc,f={},y=t.getContextAttributes(),M=null,_=null,A=[],E=[],R=new ze,D=null,T=new gt;T.viewport=new qe;let S=new gt;S.viewport=new qe;let P=[T,S],O=new ra,z=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=A[q];return J===void 0&&(J=new ts,A[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=A[q];return J===void 0&&(J=new ts,A[q]=J),J.getGripSpace()},this.getHand=function(q){let J=A[q];return J===void 0&&(J=new ts,A[q]=J),J.getHandSpace()};function j(q){let J=E.indexOf(q.inputSource);if(J===-1)return;let de=A[J];de!==void 0&&(de.update(q.inputSource,q.frame,c||a),de.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",te);for(let q=0;q<A.length;q++){let J=E[q];J!==null&&(E[q]=null,A[q].disconnect(J))}z=null,V=null,m.reset();for(let q in f)delete f[q];e.setRenderTarget(M),p=null,d=null,h=null,i=null,_=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return b},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",X),i.addEventListener("inputsourceschange",te),y.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(R),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ie=null,ve=null;y.depth&&(ve=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=y.stencil?fs:Zi,Ie=y.stencil?ds:$n);let We={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(We),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new gn(d.textureWidth,d.textureHeight,{format:wt,type:un,depthTexture:new Ks(d.textureWidth,d.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let de={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new gn(p.framebufferWidth,p.framebufferHeight,{format:wt,type:un,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),je.setContext(i),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(q){for(let J=0;J<q.removed.length;J++){let de=q.removed[J],Ie=E.indexOf(de);Ie>=0&&(E[Ie]=null,A[Ie].disconnect(de))}for(let J=0;J<q.added.length;J++){let de=q.added[J],Ie=E.indexOf(de);if(Ie===-1){for(let We=0;We<A.length;We++)if(We>=E.length){E.push(de),Ie=We;break}else if(E[We]===null){E[We]=de,Ie=We;break}if(Ie===-1)break}let ve=A[Ie];ve&&ve.connect(de)}}let H=new I,re=new I;function le(q,J,de){H.setFromMatrixPosition(J.matrixWorld),re.setFromMatrixPosition(de.matrixWorld);let Ie=H.distanceTo(re),ve=J.projectionMatrix.elements,We=de.projectionMatrix.elements,At=ve[14]/(ve[10]-1),C=ve[14]/(ve[10]+1),st=(ve[9]+1)/ve[5],Ue=(ve[9]-1)/ve[5],Re=(ve[8]-1)/ve[0],me=(We[8]+1)/We[0],rt=At*Re,ge=At*me,Fe=Ie/(-Re+me),yt=Fe*-Re;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(yt),q.translateZ(Fe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ve[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let dt=At+Fe,w=C+Fe,x=rt-yt,F=ge+(Ie-yt),W=st*C/w*dt,K=Ue*C/w*dt;q.projectionMatrix.makePerspective(x,F,W,K,dt,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Me(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let J=q.near,de=q.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(de=m.depthFar)),O.near=S.near=T.near=J,O.far=S.far=T.far=de,(z!==O.near||V!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),z=O.near,V=O.far),O.layers.mask=q.layers.mask|6,T.layers.mask=O.layers.mask&3,S.layers.mask=O.layers.mask&5;let Ie=q.parent,ve=O.cameras;Me(O,Ie);for(let We=0;We<ve.length;We++)Me(ve[We],Ie);ve.length===2?le(O,T,S):O.projectionMatrix.copy(T.projectionMatrix),Be(q,O,Ie)};function Be(q,J,de){de===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(de.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=pi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(q){return f[q]};let et=null;function it(q,J){if(u=J.getViewerPose(c||a),b=J,u!==null){let de=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let Ie=!1;de.length!==O.cameras.length&&(O.cameras.length=0,Ie=!0);for(let C=0;C<de.length;C++){let st=de[C],Ue=null;if(p!==null)Ue=p.getViewport(st);else{let me=h.getViewSubImage(d,st);Ue=me.viewport,C===0&&(e.setRenderTargetTextures(_,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(_))}let Re=P[C];Re===void 0&&(Re=new gt,Re.layers.enable(C),Re.viewport=new qe,P[C]=Re),Re.matrix.fromArray(st.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(st.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),C===0&&(O.matrix.copy(Re.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ie===!0&&O.cameras.push(Re)}let ve=i.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){h=n.getBinding();let C=h.getDepthInformation(de[0]);C&&C.isValid&&C.texture&&m.init(C,i.renderState)}if(ve&&ve.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let C=0;C<de.length;C++){let st=de[C].camera;if(st){let Ue=f[st];Ue||(Ue=new Js,f[st]=Ue);let Re=h.getCameraImage(st);Ue.sourceTexture=Re}}}}for(let de=0;de<A.length;de++){let Ie=E[de],ve=A[de];Ie!==null&&ve!==void 0&&ve.update(Ie,J,c||a)}et&&et(q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),b=null}let je=new bu;je.setAnimationLoop(it),this.setAnimationLoop=function(q){et=q},this.dispose=function(){}}},Ai=new Ut,v0=new Pe;function M0(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,_c(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,y,M,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),b(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ot&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ot&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=e.get(f),M=y.envMap,_=y.envMapRotation;M&&(m.envMap.value=M,Ai.copy(_),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),m.envMapRotation.value.setFromMatrix4(v0.makeRotationFromEuler(Ai)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=M*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ot&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function b(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){let y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function S0(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let _=M.program;n.uniformBlockBinding(y,_)}function c(y,M){let _=i[y.id];_===void 0&&(b(y),_=u(y),i[y.id]=_,y.addEventListener("dispose",m));let A=M.program;n.updateUBOMapping(y,A);let E=e.render.frame;r[y.id]!==E&&(d(y),r[y.id]=E)}function u(y){let M=h();y.__bindingPointIndex=M;let _=s.createBuffer(),A=y.__size,E=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,A,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,_),_}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let M=i[y.id],_=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let E=0,R=_.length;E<R;E++){let D=Array.isArray(_[E])?_[E]:[_[E]];for(let T=0,S=D.length;T<S;T++){let P=D[T];if(p(P,E,T,A)===!0){let O=P.__offset,z=Array.isArray(P.value)?P.value:[P.value],V=0;for(let j=0;j<z.length;j++){let X=z[j],te=g(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,O+V,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,V),V+=te.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(y,M,_,A){let E=y.value,R=M+"_"+_;if(A[R]===void 0)return typeof E=="number"||typeof E=="boolean"?A[R]=E:A[R]=E.clone(),!0;{let D=A[R];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return A[R]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function b(y){let M=y.uniforms,_=0,A=16;for(let R=0,D=M.length;R<D;R++){let T=Array.isArray(M[R])?M[R]:[M[R]];for(let S=0,P=T.length;S<P;S++){let O=T[S],z=Array.isArray(O.value)?O.value:[O.value];for(let V=0,j=z.length;V<j;V++){let X=z[V],te=g(X),H=_%A,re=H%te.boundary,le=H+re;_+=re,le!==0&&A-le<te.storage&&(_+=A-le),O.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=te.storage}}}let E=_%A;return E>0&&(_+=A-E),y.__size=_,y.__cache={},this}function g(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){let M=y.target;M.removeEventListener("dispose",m);let _=a.indexOf(M.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function f(){for(let y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}var no=class{constructor(e={}){let{canvas:t=Gh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let b=new Uint32Array(4),g=new Int32Array(4),m=null,f=null,y=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,A=!1;this._outputColorSpace=ft;let E=0,R=0,D=null,T=-1,S=null,P=new qe,O=new qe,z=null,V=new we(0),j=0,X=t.width,te=t.height,H=1,re=null,le=null,Me=new qe(0,0,X,te),Be=new qe(0,0,X,te),et=!1,it=new rs,je=!1,q=!1,J=new Pe,de=new I,Ie=new qe,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function At(){return D===null?H:1}let C=n;function st(v,U){return t.getContext(v,U)}try{let v={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",Z,!1),C===null){let U="webgl2";if(C=st(U,v),C===null)throw st(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Ue,Re,me,rt,ge,Fe,yt,dt,w,x,F,W,K,G,ye,ne,be,_e,Q,ce,Ae,xe,ae,Ne;function L(){Ue=new Hp(C),Ue.init(),xe=new _0(C,Ue),Re=new Up(C,Ue,e,xe),me=new g0(C,Ue),Re.reversedDepthBuffer&&d&&me.buffers.depth.setReversed(!0),rt=new Wp(C),ge=new i0,Fe=new b0(C,Ue,me,ge,Re,xe,rt),yt=new Fp(_),dt=new zp(_),w=new Kd(C),ae=new Lp(C,w),x=new Gp(C,w,rt,ae),F=new qp(C,x,w,rt),Q=new Xp(C,Re,Fe),ne=new Np(ge),W=new n0(_,yt,dt,Ue,Re,ae,ne),K=new M0(_,ge),G=new r0,ye=new u0(Ue),_e=new Pp(_,yt,dt,me,F,p,l),be=new p0(_,F,Re),Ne=new S0(C,rt,Re,me),ce=new Dp(C,Ue,rt),Ae=new Vp(C,Ue,rt),rt.programs=W.programs,_.capabilities=Re,_.extensions=Ue,_.properties=ge,_.renderLists=G,_.shadowMap=be,_.state=me,_.info=rt}L();let ee=new Nc(_,C);this.xr=ee,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let v=Ue.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Ue.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(v){v!==void 0&&(H=v,this.setSize(X,te,!1))},this.getSize=function(v){return v.set(X,te)},this.setSize=function(v,U,B=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=v,te=U,t.width=Math.floor(v*H),t.height=Math.floor(U*H),B===!0&&(t.style.width=v+"px",t.style.height=U+"px"),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(X*H,te*H).floor()},this.setDrawingBufferSize=function(v,U,B){X=v,te=U,H=B,t.width=Math.floor(v*B),t.height=Math.floor(U*B),this.setViewport(0,0,v,U)},this.getCurrentViewport=function(v){return v.copy(P)},this.getViewport=function(v){return v.copy(Me)},this.setViewport=function(v,U,B,k){v.isVector4?Me.set(v.x,v.y,v.z,v.w):Me.set(v,U,B,k),me.viewport(P.copy(Me).multiplyScalar(H).round())},this.getScissor=function(v){return v.copy(Be)},this.setScissor=function(v,U,B,k){v.isVector4?Be.set(v.x,v.y,v.z,v.w):Be.set(v,U,B,k),me.scissor(O.copy(Be).multiplyScalar(H).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(v){me.setScissorTest(et=v)},this.setOpaqueSort=function(v){re=v},this.setTransparentSort=function(v){le=v},this.getClearColor=function(v){return v.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,B=!0){let k=0;if(v){let N=!1;if(D!==null){let $=D.texture.format;N=$===Sa||$===Ma||$===va}if(N){let $=D.texture.type,oe=$===un||$===$n||$===us||$===ds||$===_a||$===xa,fe=_e.getClearColor(),he=_e.getClearAlpha(),Ee=fe.r,Ce=fe.g,Se=fe.b;oe?(b[0]=Ee,b[1]=Ce,b[2]=Se,b[3]=he,C.clearBufferuiv(C.COLOR,0,b)):(g[0]=Ee,g[1]=Ce,g[2]=Se,g[3]=he,C.clearBufferiv(C.COLOR,0,g))}else k|=C.COLOR_BUFFER_BIT}U&&(k|=C.DEPTH_BUFFER_BIT),B&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),_e.dispose(),G.dispose(),ye.dispose(),ge.dispose(),yt.dispose(),dt.dispose(),F.dispose(),ae.dispose(),Ne.dispose(),W.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",dn),ee.removeEventListener("sessionend",pl),ii.stop()};function ie(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let v=rt.autoReset,U=be.enabled,B=be.autoUpdate,k=be.needsUpdate,N=be.type;L(),rt.autoReset=v,be.enabled=U,be.autoUpdate=B,be.needsUpdate=k,be.type=N}function Z(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Y(v){let U=v.target;U.removeEventListener("dispose",Y),pe(U)}function pe(v){De(v),ge.remove(v)}function De(v){let U=ge.get(v).programs;U!==void 0&&(U.forEach(function(B){W.releaseProgram(B)}),v.isShaderMaterial&&W.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,B,k,N,$){U===null&&(U=ve);let oe=N.isMesh&&N.matrixWorld.determinant()<0,fe=Vu(v,U,B,k,N);me.setMaterial(k,oe);let he=B.index,Ee=1;if(k.wireframe===!0){if(he=x.getWireframeAttribute(B),he===void 0)return;Ee=2}let Ce=B.drawRange,Se=B.attributes.position,Ge=Ce.start*Ee,Ze=(Ce.start+Ce.count)*Ee;$!==null&&(Ge=Math.max(Ge,$.start*Ee),Ze=Math.min(Ze,($.start+$.count)*Ee)),he!==null?(Ge=Math.max(Ge,0),Ze=Math.min(Ze,he.count)):Se!=null&&(Ge=Math.max(Ge,0),Ze=Math.min(Ze,Se.count));let ut=Ze-Ge;if(ut<0||ut===1/0)return;ae.setup(N,k,fe,B,he);let nt,$e=ce;if(he!==null&&(nt=w.get(he),$e=Ae,$e.setIndex(nt)),N.isMesh)k.wireframe===!0?(me.setLineWidth(k.wireframeLinewidth*At()),$e.setMode(C.LINES)):$e.setMode(C.TRIANGLES);else if(N.isLine){let Te=k.linewidth;Te===void 0&&(Te=1),me.setLineWidth(Te*At()),N.isLineSegments?$e.setMode(C.LINES):N.isLineLoop?$e.setMode(C.LINE_LOOP):$e.setMode(C.LINE_STRIP)}else N.isPoints?$e.setMode(C.POINTS):N.isSprite&&$e.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Qi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))$e.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Te=N._multiDrawStarts,ct=N._multiDrawCounts,Xe=N._multiDrawCount,Vt=he?w.get(he).bytesPerElement:1,Ui=ge.get(k).currentProgram.getUniforms();for(let Wt=0;Wt<Xe;Wt++)Ui.setValue(C,"_gl_DrawID",Wt),$e.render(Te[Wt]/Vt,ct[Wt])}else if(N.isInstancedMesh)$e.renderInstances(Ge,ut,N.count);else if(B.isInstancedBufferGeometry){let Te=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ct=Math.min(B.instanceCount,Te);$e.renderInstances(Ge,ut,ct)}else $e.render(Ge,ut)};function tt(v,U,B){v.transparent===!0&&v.side===Ht&&v.forceSinglePass===!1?(v.side=Ot,v.needsUpdate=!0,mr(v,U,B),v.side=an,v.needsUpdate=!0,mr(v,U,B),v.side=Ht):mr(v,U,B)}this.compile=function(v,U,B=null){B===null&&(B=v),f=ye.get(B),f.init(U),M.push(f),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),v!==B&&v.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let k=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let $=N.material;if($)if(Array.isArray($))for(let oe=0;oe<$.length;oe++){let fe=$[oe];tt(fe,B,N),k.add(fe)}else tt($,B,N),k.add($)}),f=M.pop(),k},this.compileAsync=function(v,U,B=null){let k=this.compile(v,U,B);return new Promise(N=>{function $(){if(k.forEach(function(oe){ge.get(oe).currentProgram.isReady()&&k.delete(oe)}),k.size===0){N(v);return}setTimeout($,10)}Ue.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let Ye=null;function Tn(v){Ye&&Ye(v)}function dn(){ii.stop()}function pl(){ii.start()}let ii=new bu;ii.setAnimationLoop(Tn),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(v){Ye=v,ee.setAnimationLoop(v),v===null?ii.stop():ii.start()},ee.addEventListener("sessionstart",dn),ee.addEventListener("sessionend",pl),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(U),U=ee.getCamera()),v.isScene===!0&&v.onBeforeRender(_,v,U,D),f=ye.get(v,M.length),f.init(U),M.push(f),J.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),it.setFromProjectionMatrix(J,sn,U.reversedDepth),q=this.localClippingEnabled,je=ne.init(this.clippingPlanes,q),m=G.get(v,y.length),m.init(),y.push(m),ee.enabled===!0&&ee.isPresenting===!0){let $=_.xr.getDepthSensingMesh();$!==null&&uo($,U,-1/0,_.sortObjects)}uo(v,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(re,le),We=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,We&&_e.addToRenderList(m,v),this.info.render.frame++,je===!0&&ne.beginShadows();let B=f.state.shadowsArray;be.render(B,v,U),je===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){let $=U.cameras;if(N.length>0)for(let oe=0,fe=$.length;oe<fe;oe++){let he=$[oe];gl(k,N,v,he)}We&&_e.render(v);for(let oe=0,fe=$.length;oe<fe;oe++){let he=$[oe];ml(m,v,he,he.viewport)}}else N.length>0&&gl(k,N,v,U),We&&_e.render(v),ml(m,v,U);D!==null&&R===0&&(Fe.updateMultisampleRenderTarget(D),Fe.updateRenderTargetMipmap(D)),v.isScene===!0&&v.onAfterRender(_,v,U),ae.resetDefaultState(),T=-1,S=null,M.pop(),M.length>0?(f=M[M.length-1],je===!0&&ne.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function uo(v,U,B,k){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||it.intersectsSprite(v)){k&&Ie.setFromMatrixPosition(v.matrixWorld).applyMatrix4(J);let oe=F.update(v),fe=v.material;fe.visible&&m.push(v,oe,fe,B,Ie.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||it.intersectsObject(v))){let oe=F.update(v),fe=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ie.copy(v.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Ie.copy(oe.boundingSphere.center)),Ie.applyMatrix4(v.matrixWorld).applyMatrix4(J)),Array.isArray(fe)){let he=oe.groups;for(let Ee=0,Ce=he.length;Ee<Ce;Ee++){let Se=he[Ee],Ge=fe[Se.materialIndex];Ge&&Ge.visible&&m.push(v,oe,Ge,B,Ie.z,Se)}}else fe.visible&&m.push(v,oe,fe,B,Ie.z,null)}}let $=v.children;for(let oe=0,fe=$.length;oe<fe;oe++)uo($[oe],U,B,k)}function ml(v,U,B,k){let N=v.opaque,$=v.transmissive,oe=v.transparent;f.setupLightsView(B),je===!0&&ne.setGlobalState(_.clippingPlanes,B),k&&me.viewport(P.copy(k)),N.length>0&&pr(N,U,B),$.length>0&&pr($,U,B),oe.length>0&&pr(oe,U,B),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function gl(v,U,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new gn(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?Qn:un,minFilter:hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));let $=f.state.transmissionRenderTarget[k.id],oe=k.viewport||P;$.setSize(oe.z*_.transmissionResolutionScale,oe.w*_.transmissionResolutionScale);let fe=_.getRenderTarget(),he=_.getActiveCubeFace(),Ee=_.getActiveMipmapLevel();_.setRenderTarget($),_.getClearColor(V),j=_.getClearAlpha(),j<1&&_.setClearColor(16777215,.5),_.clear(),We&&_e.render(B);let Ce=_.toneMapping;_.toneMapping=zn;let Se=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),je===!0&&ne.setGlobalState(_.clippingPlanes,k),pr(v,B,k),Fe.updateMultisampleRenderTarget($),Fe.updateRenderTargetMipmap($),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ze=0,ut=U.length;Ze<ut;Ze++){let nt=U[Ze],$e=nt.object,Te=nt.geometry,ct=nt.material,Xe=nt.group;if(ct.side===Ht&&$e.layers.test(k.layers)){let Vt=ct.side;ct.side=Ot,ct.needsUpdate=!0,bl($e,B,k,Te,ct,Xe),ct.side=Vt,ct.needsUpdate=!0,Ge=!0}}Ge===!0&&(Fe.updateMultisampleRenderTarget($),Fe.updateRenderTargetMipmap($))}_.setRenderTarget(fe,he,Ee),_.setClearColor(V,j),Se!==void 0&&(k.viewport=Se),_.toneMapping=Ce}function pr(v,U,B){let k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,$=v.length;N<$;N++){let oe=v[N],fe=oe.object,he=oe.geometry,Ee=oe.group,Ce=oe.material;Ce.allowOverride===!0&&k!==null&&(Ce=k),fe.layers.test(B.layers)&&bl(fe,U,B,he,Ce,Ee)}}function bl(v,U,B,k,N,$){v.onBeforeRender(_,U,B,k,N,$),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(_,U,B,k,v,$),N.transparent===!0&&N.side===Ht&&N.forceSinglePass===!1?(N.side=Ot,N.needsUpdate=!0,_.renderBufferDirect(B,U,k,N,v,$),N.side=an,N.needsUpdate=!0,_.renderBufferDirect(B,U,k,N,v,$),N.side=Ht):_.renderBufferDirect(B,U,k,N,v,$),v.onAfterRender(_,U,B,k,N,$)}function mr(v,U,B){U.isScene!==!0&&(U=ve);let k=ge.get(v),N=f.state.lights,$=f.state.shadowsArray,oe=N.state.version,fe=W.getParameters(v,N.state,$,U,B),he=W.getProgramCacheKey(fe),Ee=k.programs;k.environment=v.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(v.isMeshStandardMaterial?dt:yt).get(v.envMap||k.environment),k.envMapRotation=k.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Ee===void 0&&(v.addEventListener("dispose",Y),Ee=new Map,k.programs=Ee);let Ce=Ee.get(he);if(Ce!==void 0){if(k.currentProgram===Ce&&k.lightsStateVersion===oe)return xl(v,fe),Ce}else fe.uniforms=W.getUniforms(v),v.onBeforeCompile(fe,_),Ce=W.acquireProgram(fe,he),Ee.set(he,Ce),k.uniforms=fe.uniforms;let Se=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Se.clippingPlanes=ne.uniform),xl(v,fe),k.needsLights=Xu(v),k.lightsStateVersion=oe,k.needsLights&&(Se.ambientLightColor.value=N.state.ambient,Se.lightProbe.value=N.state.probe,Se.directionalLights.value=N.state.directional,Se.directionalLightShadows.value=N.state.directionalShadow,Se.spotLights.value=N.state.spot,Se.spotLightShadows.value=N.state.spotShadow,Se.rectAreaLights.value=N.state.rectArea,Se.ltc_1.value=N.state.rectAreaLTC1,Se.ltc_2.value=N.state.rectAreaLTC2,Se.pointLights.value=N.state.point,Se.pointLightShadows.value=N.state.pointShadow,Se.hemisphereLights.value=N.state.hemi,Se.directionalShadowMap.value=N.state.directionalShadowMap,Se.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Se.spotShadowMap.value=N.state.spotShadowMap,Se.spotLightMatrix.value=N.state.spotLightMatrix,Se.spotLightMap.value=N.state.spotLightMap,Se.pointShadowMap.value=N.state.pointShadowMap,Se.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Ce,k.uniformsList=null,Ce}function _l(v){if(v.uniformsList===null){let U=v.currentProgram.getUniforms();v.uniformsList=bs.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function xl(v,U){let B=ge.get(v);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Vu(v,U,B,k,N){U.isScene!==!0&&(U=ve),Fe.resetTextureUnits();let $=U.fog,oe=k.isMeshStandardMaterial?U.environment:null,fe=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:pt,he=(k.isMeshStandardMaterial?dt:yt).get(k.envMap||oe),Ee=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ce=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Se=!!B.morphAttributes.position,Ge=!!B.morphAttributes.normal,Ze=!!B.morphAttributes.color,ut=zn;k.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ut=_.toneMapping);let nt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,$e=nt!==void 0?nt.length:0,Te=ge.get(k),ct=f.state.lights;if(je===!0&&(q===!0||v!==S)){let Lt=v===S&&k.id===T;ne.setState(k,v,Lt)}let Xe=!1;k.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==ct.state.version||Te.outputColorSpace!==fe||N.isBatchedMesh&&Te.batching===!1||!N.isBatchedMesh&&Te.batching===!0||N.isBatchedMesh&&Te.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Te.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Te.instancing===!1||!N.isInstancedMesh&&Te.instancing===!0||N.isSkinnedMesh&&Te.skinning===!1||!N.isSkinnedMesh&&Te.skinning===!0||N.isInstancedMesh&&Te.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Te.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Te.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Te.instancingMorph===!1&&N.morphTexture!==null||Te.envMap!==he||k.fog===!0&&Te.fog!==$||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ne.numPlanes||Te.numIntersection!==ne.numIntersection)||Te.vertexAlphas!==Ee||Te.vertexTangents!==Ce||Te.morphTargets!==Se||Te.morphNormals!==Ge||Te.morphColors!==Ze||Te.toneMapping!==ut||Te.morphTargetsCount!==$e)&&(Xe=!0):(Xe=!0,Te.__version=k.version);let Vt=Te.currentProgram;Xe===!0&&(Vt=mr(k,U,N));let Ui=!1,Wt=!1,Ss=!1,lt=Vt.getUniforms(),Yt=Te.uniforms;if(me.useProgram(Vt.program)&&(Ui=!0,Wt=!0,Ss=!0),k.id!==T&&(T=k.id,Wt=!0),Ui||S!==v){me.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),lt.setValue(C,"projectionMatrix",v.projectionMatrix),lt.setValue(C,"viewMatrix",v.matrixWorldInverse);let Bt=lt.map.cameraPosition;Bt!==void 0&&Bt.setValue(C,de.setFromMatrixPosition(v.matrixWorld)),Re.logarithmicDepthBuffer&&lt.setValue(C,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&lt.setValue(C,"isOrthographic",v.isOrthographicCamera===!0),S!==v&&(S=v,Wt=!0,Ss=!0)}if(N.isSkinnedMesh){lt.setOptional(C,N,"bindMatrix"),lt.setOptional(C,N,"bindMatrixInverse");let Lt=N.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),lt.setValue(C,"boneTexture",Lt.boneTexture,Fe))}N.isBatchedMesh&&(lt.setOptional(C,N,"batchingTexture"),lt.setValue(C,"batchingTexture",N._matricesTexture,Fe),lt.setOptional(C,N,"batchingIdTexture"),lt.setValue(C,"batchingIdTexture",N._indirectTexture,Fe),lt.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&lt.setValue(C,"batchingColorTexture",N._colorsTexture,Fe));let Kt=B.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&Q.update(N,B,Vt),(Wt||Te.receiveShadow!==N.receiveShadow)&&(Te.receiveShadow=N.receiveShadow,lt.setValue(C,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Yt.envMap.value=he,Yt.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(Yt.envMapIntensity.value=U.environmentIntensity),Wt&&(lt.setValue(C,"toneMappingExposure",_.toneMappingExposure),Te.needsLights&&Wu(Yt,Ss),$&&k.fog===!0&&K.refreshFogUniforms(Yt,$),K.refreshMaterialUniforms(Yt,k,H,te,f.state.transmissionRenderTarget[v.id]),bs.upload(C,_l(Te),Yt,Fe)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(bs.upload(C,_l(Te),Yt,Fe),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&lt.setValue(C,"center",N.center),lt.setValue(C,"modelViewMatrix",N.modelViewMatrix),lt.setValue(C,"normalMatrix",N.normalMatrix),lt.setValue(C,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Lt=k.uniformsGroups;for(let Bt=0,fo=Lt.length;Bt<fo;Bt++){let si=Lt[Bt];Ne.update(si,Vt),Ne.bind(si,Vt)}}return Vt}function Wu(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function Xu(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(v,U,B){let k=ge.get(v);k.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),ge.get(v.texture).__webglTexture=U,ge.get(v.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:B,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){let B=ge.get(v);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};let qu=C.createFramebuffer();this.setRenderTarget=function(v,U=0,B=0){D=v,E=U,R=B;let k=!0,N=null,$=!1,oe=!1;if(v){let he=ge.get(v);if(he.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(C.FRAMEBUFFER,null),k=!1;else if(he.__webglFramebuffer===void 0)Fe.setupRenderTarget(v);else if(he.__hasExternalTextures)Fe.rebindTextures(v,ge.get(v.texture).__webglTexture,ge.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Se=v.depthTexture;if(he.__boundDepthTexture!==Se){if(Se!==null&&ge.has(Se)&&(v.width!==Se.image.width||v.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(v)}}let Ee=v.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(oe=!0);let Ce=ge.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ce[U])?N=Ce[U][B]:N=Ce[U],$=!0):v.samples>0&&Fe.useMultisampledRTT(v)===!1?N=ge.get(v).__webglMultisampledFramebuffer:Array.isArray(Ce)?N=Ce[B]:N=Ce,P.copy(v.viewport),O.copy(v.scissor),z=v.scissorTest}else P.copy(Me).multiplyScalar(H).floor(),O.copy(Be).multiplyScalar(H).floor(),z=et;if(B!==0&&(N=qu),me.bindFramebuffer(C.FRAMEBUFFER,N)&&k&&me.drawBuffers(v,N),me.viewport(P),me.scissor(O),me.setScissorTest(z),$){let he=ge.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,B)}else if(oe){let he=U;for(let Ee=0;Ee<v.textures.length;Ee++){let Ce=ge.get(v.textures[Ee]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ee,Ce.__webglTexture,B,he)}}else if(v!==null&&B!==0){let he=ge.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,he.__webglTexture,B)}T=-1},this.readRenderTargetPixels=function(v,U,B,k,N,$,oe,fe=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=ge.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&oe!==void 0&&(he=he[oe]),he){me.bindFramebuffer(C.FRAMEBUFFER,he);try{let Ee=v.textures[fe],Ce=Ee.format,Se=Ee.type;if(!Re.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-k&&B>=0&&B<=v.height-N&&(v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+fe),C.readPixels(U,B,k,N,xe.convert(Ce),xe.convert(Se),$))}finally{let Ee=D!==null?ge.get(D).__webglFramebuffer:null;me.bindFramebuffer(C.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(v,U,B,k,N,$,oe,fe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=ge.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&oe!==void 0&&(he=he[oe]),he)if(U>=0&&U<=v.width-k&&B>=0&&B<=v.height-N){me.bindFramebuffer(C.FRAMEBUFFER,he);let Ee=v.textures[fe],Ce=Ee.format,Se=Ee.type;if(!Re.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ge=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ge),C.bufferData(C.PIXEL_PACK_BUFFER,$.byteLength,C.STREAM_READ),v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+fe),C.readPixels(U,B,k,N,xe.convert(Ce),xe.convert(Se),0);let Ze=D!==null?ge.get(D).__webglFramebuffer:null;me.bindFramebuffer(C.FRAMEBUFFER,Ze);let ut=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Vh(C,ut,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ge),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,$),C.deleteBuffer(Ge),C.deleteSync(ut),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,B=0){let k=Math.pow(2,-B),N=Math.floor(v.image.width*k),$=Math.floor(v.image.height*k),oe=U!==null?U.x:0,fe=U!==null?U.y:0;Fe.setTexture2D(v,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,oe,fe,N,$),me.unbindTexture()};let ju=C.createFramebuffer(),Yu=C.createFramebuffer();this.copyTextureToTexture=function(v,U,B=null,k=null,N=0,$=null){$===null&&(N!==0?(Qi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),$=N,N=0):$=0);let oe,fe,he,Ee,Ce,Se,Ge,Ze,ut,nt=v.isCompressedTexture?v.mipmaps[$]:v.image;if(B!==null)oe=B.max.x-B.min.x,fe=B.max.y-B.min.y,he=B.isBox3?B.max.z-B.min.z:1,Ee=B.min.x,Ce=B.min.y,Se=B.isBox3?B.min.z:0;else{let Kt=Math.pow(2,-N);oe=Math.floor(nt.width*Kt),fe=Math.floor(nt.height*Kt),v.isDataArrayTexture?he=nt.depth:v.isData3DTexture?he=Math.floor(nt.depth*Kt):he=1,Ee=0,Ce=0,Se=0}k!==null?(Ge=k.x,Ze=k.y,ut=k.z):(Ge=0,Ze=0,ut=0);let $e=xe.convert(U.format),Te=xe.convert(U.type),ct;U.isData3DTexture?(Fe.setTexture3D(U,0),ct=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Fe.setTexture2DArray(U,0),ct=C.TEXTURE_2D_ARRAY):(Fe.setTexture2D(U,0),ct=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);let Xe=C.getParameter(C.UNPACK_ROW_LENGTH),Vt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ui=C.getParameter(C.UNPACK_SKIP_PIXELS),Wt=C.getParameter(C.UNPACK_SKIP_ROWS),Ss=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,nt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,nt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ee),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ce),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Se);let lt=v.isDataArrayTexture||v.isData3DTexture,Yt=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){let Kt=ge.get(v),Lt=ge.get(U),Bt=ge.get(Kt.__renderTarget),fo=ge.get(Lt.__renderTarget);me.bindFramebuffer(C.READ_FRAMEBUFFER,Bt.__webglFramebuffer),me.bindFramebuffer(C.DRAW_FRAMEBUFFER,fo.__webglFramebuffer);for(let si=0;si<he;si++)lt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ge.get(v).__webglTexture,N,Se+si),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ge.get(U).__webglTexture,$,ut+si)),C.blitFramebuffer(Ee,Ce,oe,fe,Ge,Ze,oe,fe,C.DEPTH_BUFFER_BIT,C.NEAREST);me.bindFramebuffer(C.READ_FRAMEBUFFER,null),me.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||v.isRenderTargetTexture||ge.has(v)){let Kt=ge.get(v),Lt=ge.get(U);me.bindFramebuffer(C.READ_FRAMEBUFFER,ju),me.bindFramebuffer(C.DRAW_FRAMEBUFFER,Yu);for(let Bt=0;Bt<he;Bt++)lt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Kt.__webglTexture,N,Se+Bt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Kt.__webglTexture,N),Yt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Lt.__webglTexture,$,ut+Bt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Lt.__webglTexture,$),N!==0?C.blitFramebuffer(Ee,Ce,oe,fe,Ge,Ze,oe,fe,C.COLOR_BUFFER_BIT,C.NEAREST):Yt?C.copyTexSubImage3D(ct,$,Ge,Ze,ut+Bt,Ee,Ce,oe,fe):C.copyTexSubImage2D(ct,$,Ge,Ze,Ee,Ce,oe,fe);me.bindFramebuffer(C.READ_FRAMEBUFFER,null),me.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Yt?v.isDataTexture||v.isData3DTexture?C.texSubImage3D(ct,$,Ge,Ze,ut,oe,fe,he,$e,Te,nt.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(ct,$,Ge,Ze,ut,oe,fe,he,$e,nt.data):C.texSubImage3D(ct,$,Ge,Ze,ut,oe,fe,he,$e,Te,nt):v.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,$,Ge,Ze,oe,fe,$e,Te,nt.data):v.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,$,Ge,Ze,nt.width,nt.height,$e,nt.data):C.texSubImage2D(C.TEXTURE_2D,$,Ge,Ze,oe,fe,$e,Te,nt);C.pixelStorei(C.UNPACK_ROW_LENGTH,Xe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Vt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ui),C.pixelStorei(C.UNPACK_SKIP_ROWS,Wt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ss),$===0&&U.generateMipmaps&&C.generateMipmap(ct),me.unbindTexture()},this.initRenderTarget=function(v){ge.get(v).__webglFramebuffer===void 0&&Fe.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Fe.setTextureCube(v,0):v.isData3DTexture?Fe.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Fe.setTexture2DArray(v,0):Fe.setTexture2D(v,0),me.unbindTexture()},this.resetState=function(){E=0,R=0,D=null,me.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}};function Mu(s){let e=s.data.array.constructor,t=s.count,n=s.itemSize,i=s.normalized,r=new e(t*n),a;s.isInstancedInterleavedBufferAttribute?a=new Un(r,n,i,s.meshPerAttribute):a=new at(r,n,i);for(let o=0;o<t;o++)a.setX(o,s.getX(o)),n>=2&&a.setY(o,s.getY(o)),n>=3&&a.setZ(o,s.getZ(o)),n>=4&&a.setW(o,s.getW(o));return a}function Su(s){let e=s.attributes,t=s.morphTargets,n=new Map;for(let i in e){let r=e[i];r.isInterleavedBufferAttribute&&(n.has(r)||n.set(r,Mu(r)),e[i]=n.get(r))}for(let i in t){let r=t[i];r.isInterleavedBufferAttribute&&(n.has(r)||n.set(r,Mu(r)),t[i]=n.get(r))}}function Oc(s,e){if(e===dc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ps||e===hr){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===ps)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Tu(s,e=Math.PI/3){let t=Math.cos(e),n=(1+1e-10)*100,i=[new I,new I,new I],r=new I,a=new I,o=new I,l=new I;function c(g){let m=~~(g.x*n),f=~~(g.y*n),y=~~(g.z*n);return`${m},${f},${y}`}let u=s.index?s.toNonIndexed():s,h=u.attributes.position,d={};for(let g=0,m=h.count/3;g<m;g++){let f=3*g,y=i[0].fromBufferAttribute(h,f+0),M=i[1].fromBufferAttribute(h,f+1),_=i[2].fromBufferAttribute(h,f+2);r.subVectors(_,M),a.subVectors(y,M);let A=new I().crossVectors(r,a).normalize();for(let E=0;E<3;E++){let R=i[E],D=c(R);D in d||(d[D]=[]),d[D].push(A)}}let p=new Float32Array(h.count*3),b=new at(p,3,!1);for(let g=0,m=h.count/3;g<m;g++){let f=3*g,y=i[0].fromBufferAttribute(h,f+0),M=i[1].fromBufferAttribute(h,f+1),_=i[2].fromBufferAttribute(h,f+2);r.subVectors(_,M),a.subVectors(y,M),o.crossVectors(r,a).normalize();for(let A=0;A<3;A++){let E=i[A],R=c(E),D=d[R];l.set(0,0,0);for(let T=0,S=D.length;T<S;T++){let P=D[T];o.dot(P)>t&&l.add(P)}l.normalize(),b.setXYZ(f+A,l.x,l.y,l.z)}}return u.setAttribute("normal",b),u}var ys=class extends yn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Wc(t)}),this.register(function(t){return new Xc(t)}),this.register(function(t){return new el(t)}),this.register(function(t){return new tl(t)}),this.register(function(t){return new nl(t)}),this.register(function(t){return new jc(t)}),this.register(function(t){return new Yc(t)}),this.register(function(t){return new Kc(t)}),this.register(function(t){return new Jc(t)}),this.register(function(t){return new Vc(t)}),this.register(function(t){return new Zc(t)}),this.register(function(t){return new qc(t)}),this.register(function(t){return new Qc(t)}),this.register(function(t){return new $c(t)}),this.register(function(t){return new Hc(t)}),this.register(function(t){return new il(t)}),this.register(function(t){return new sl(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Bn.extractUrlBase(e);a=Bn.resolveURL(c,this.path)}else a=Bn.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new cs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Cu){try{a[He.KHR_BINARY_GLTF]=new rl(e)}catch(h){i&&i(h);return}r=JSON.parse(a[He.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new dl(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case He.KHR_MATERIALS_UNLIT:a[h]=new Gc;break;case He.KHR_DRACO_MESH_COMPRESSION:a[h]=new al(r,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:a[h]=new ol;break;case He.KHR_MESH_QUANTIZATION:a[h]=new cl;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function T0(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Hc=class{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new we(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],pt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Zn(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new sr(u),c.distance=h;break;case"spot":c=new ir(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Sn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Gc=class{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return on}extendParams(e,t,n){let i=[];e.color=new we(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],pt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,ft))}return Promise.all(i)}},Vc=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Wc=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ze(o,o)}return Promise.all(r)}},Xc=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},qc=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},jc=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],pt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,ft)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Yc=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Kc=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(o[0],o[1],o[2],pt),Promise.all(r)}},Jc=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Zc=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(o[0],o[1],o[2],pt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,ft)),Promise.all(r)}},$c=class{constructor(e){this.parser=e,this.name=He.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Qc=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},el=class{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},tl=class{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},nl=class{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},il=class{constructor(e){this.name=He.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,d,i.mode,i.filter),p})})}else return null}},sl=class{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==$t.TRIANGLES&&c.mode!==$t.TRIANGLE_STRIP&&c.mode!==$t.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(let b of h){let g=new Pe,m=new I,f=new Zt,y=new I(1,1,1),M=new Xs(b.geometry,b.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,_),l.SCALE&&y.fromBufferAttribute(l.SCALE,_),M.setMatrixAt(_,g.compose(m,f,y));for(let _ in l)if(_==="_COLOR_0"){let A=l[_];M.instanceColor=new Un(A.array,A.itemSize,A.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&b.geometry.setAttribute(_,l[_]);ot.prototype.copy.call(M,b),this.parser.assignFinalMaterial(M),p.push(M)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},Cu="glTF",dr=12,Eu={JSON:1313821514,BIN:5130562},rl=class{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,dr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Cu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-dr,r=new DataView(e,dr),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Eu.JSON){let c=new Uint8Array(e,dr+a,o);this.content=n.decode(c)}else if(l===Eu.BIN){let c=dr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},al=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=hl[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=hl[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],p=xs[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(p){for(let b in p.attributes){let g=p.attributes[b],m=l[b];m!==void 0&&(g.normalized=m)}h(p)},o,c,pt,d)})})}},ol=class{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},cl=class{constructor(){this.name=He.KHR_MESH_QUANTIZATION}},so=class extends Nn{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,d=h*h,p=d*h,b=e*c,g=b-c,m=-2*p+3*d,f=p-d,y=1-m,M=f-d+h;for(let _=0;_!==o;_++){let A=a[g+_+o],E=a[g+_+l]*u,R=a[b+_+o],D=a[b+_]*u;r[_]=y*A+M*E+m*R+f*D}return r}},E0=new Zt,ll=class extends so{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return E0.fromArray(r).normalize().toArray(r),r}},$t={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},xs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wu={9728:Tt,9729:Et,9984:ga,9985:hs,9986:Ti,9987:hn},Au={33071:pn,33648:Ji,10497:Jn},Bc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ti={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},w0={CUBICSPLINE:void 0,LINEAR:fi,STEP:di},kc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function A0(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ln({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:an})),s.DefaultMaterial}function Pi(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Sn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function R0(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(d)}if(i){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function C0(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function I0(s){let e,t=s.extensions&&s.extensions[He.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+zc(t.attributes):e=s.indices+":"+zc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+zc(s.targets[n]);return e}function zc(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ul(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function P0(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var L0=new Pe,dl=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new T0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new er(this.options.manager):this.textureLoader=new rr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new cs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Pi(r,o,i),Sn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(Bn.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Bc[i.type],o=xs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new at(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Bc[i.type],c=xs[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,b=i.normalized===!0,g,m;if(p&&p!==h){let f=Math.floor(d/p),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count,M=t.cache.get(y);M||(g=new c(o,f*p,i.count*p/u),M=new ns(g,p/u),t.cache.add(y,M)),m=new is(M,l,d%p/u,b)}else o===null?g=new c(i.count*l):g=new c(o,d,i.count*l),m=new at(g,l,b);if(i.sparse!==void 0){let f=Bc.SCALAR,y=xs[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,A=new y(a[1],M,i.sparse.count*f),E=new c(a[2],_,i.sparse.count*l);o!==null&&(m=new at(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,D=A.length;R<D;R++){let T=A[R];if(m.setX(T,E[R*l]),l>=2&&m.setY(T,E[R*l+1]),l>=3&&m.setZ(T,E[R*l+2]),l>=4&&m.setW(T,E[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=b}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=wu[d.magFilter]||Et,u.minFilter=wu[d.minFilter]||hn,u.wrapS=Au[d.wrapS]||Jn,u.wrapT=Au[d.wrapT]||Jn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Tt&&u.minFilter!==Et,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let b=d;t.isImageBitmapLoader===!0&&(b=function(g){let m=new Mt(g);m.needsUpdate=!0,d(m)}),t.load(Bn.resolveURL(h,r.path),b,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),Sn(h,a),h.userData.mimeType=a.mimeType||P0(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[He.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new os,Nt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new as,Nt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ln}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[He.KHR_MATERIALS_UNLIT]){let h=i[He.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new we(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],pt),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,ft)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ht);let u=r.alphaMode||kc.OPAQUE;if(u===kc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===kc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==on&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ze(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==on&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==on){let h=r.emissiveFactor;o.emissive=new we().setRGB(h[0],h[1],h[2],pt)}return r.emissiveTexture!==void 0&&a!==on&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,ft)),Promise.all(c).then(function(){let h=new a(o);return r.name&&(h.name=r.name),Sn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Pi(i,h,r),h})}createUniqueName(e){let t=Qe.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Ru(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=I0(c),h=i[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[He.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Ru(new Ft,c,t),i[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?A0(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,b=u.length;p<b;p++){let g=u[p],m=a[p],f,y=c[p];if(m.mode===$t.TRIANGLES||m.mode===$t.TRIANGLE_STRIP||m.mode===$t.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new Vs(g,y):new ht(g,y),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===$t.TRIANGLE_STRIP?f.geometry=Oc(f.geometry,hr):m.mode===$t.TRIANGLE_FAN&&(f.geometry=Oc(f.geometry,ps));else if(m.mode===$t.LINES)f=new qs(g,y);else if(m.mode===$t.LINE_STRIP)f=new bi(g,y);else if(m.mode===$t.LINE_LOOP)f=new js(g,y);else if(m.mode===$t.POINTS)f=new Ys(g,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&C0(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Sn(f,r),m.extensions&&Pi(i,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,b=h.length;p<b;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&Pi(i,h[0],r),h[0];let d=new jt;r.extensions&&Pi(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,b=h.length;p<b;p++)d.add(h[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new gt(ei.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new yi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Sn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let d=new Pe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ws(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){let p=i.channels[h],b=i.samplers[p.sampler],g=p.target,m=g.node,f=i.parameters!==void 0?i.parameters[b.input]:b.input,y=i.parameters!==void 0?i.parameters[b.output]:b.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",y)),c.push(b),u.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],p=h[1],b=h[2],g=h[3],m=h[4],f=[];for(let M=0,_=d.length;M<_;M++){let A=d[M],E=p[M],R=b[M],D=g[M],T=m[M];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();let S=n._createAnimationTracks(A,E,R,D,T);if(S)for(let P=0;P<S.length;P++)f.push(S[P])}let y=new Qs(r,void 0,f);return Sn(y,i),y})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,L0)});for(let p=0,b=h.length;p<b;p++)u.add(h[p]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new ss:c.length>1?u=new jt:c.length===1?u=c[0]:u=new ot,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Sn(u,r),r.extensions&&Pi(n,u,r),r.matrix!==void 0){let h=new Pe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new jt;n.name&&(r.name=i.createUniqueName(n.name)),Sn(r,n),n.extensions&&Pi(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,p]of i.associations)(d instanceof Nt||d instanceof Mt)&&h.set(d,p);return u.traverse(d=>{let p=i.associations.get(d);p!=null&&h.set(d,p)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];ti[r.path]===ti.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(ti[r.path]){case ti.weights:c=bn;break;case ti.rotation:c=_n;break;case ti.translation:case ti.scale:c=xn;break;default:switch(n.itemSize){case 1:c=bn;break;case 2:case 3:default:c=xn;break}break}let u=i.interpolation!==void 0?w0[i.interpolation]:fi,h=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let b=new c(l[d]+"."+ti[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ul(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof _n?ll:so;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function D0(s,e,t){let n=e.attributes,i=new bt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){let u=ul(xs[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new I,l=new I;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],p=d.min,b=d.max;if(p!==void 0&&b!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(b[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(b[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(b[2]))),d.normalized){let g=ul(xs[d.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new kt;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Ru(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=hl[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ve.workingColorSpace!==pt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ve.workingColorSpace}" not supported.`),Sn(s,e),D0(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?R0(s,e.targets,t):s})}var vs=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(f){r=f.instance,r.exports.__wasm_call_ctors()});function o(f){for(var y=new Uint8Array(f.length),M=0;M<f.length;++M){var _=f.charCodeAt(M);y[M]=_>96?_-97:_>64?_-39:_+4}for(var A=0,M=0;M<f.length;++M)y[A++]=y[M]<60?n[y[M]]:(y[M]-60)*64+y[++M];return y.buffer.slice(0,A)}function l(f,y,M,_,A,E,R){var D=f.exports.sbrk,T=_+3&-4,S=D(T*A),P=D(E.length),O=new Uint8Array(f.exports.memory.buffer);O.set(E,P);var z=y(S,_,A,P,E.length);if(z==0&&R&&R(S,T,A),M.set(O.subarray(S,S+_*A)),D(S-D(0)),z!=0)throw new Error("Malformed buffer data: "+z)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],d=0;function p(f){var y={object:new Worker(f),pending:0,requests:{}};return y.object.onmessage=function(M){var _=M.data;y.pending-=_.count,y.requests[_.id][_.action](_.value),delete y.requests[_.id]},y}function b(f){for(var y="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+l.toString()+m.toString(),M=new Blob([y],{type:"text/javascript"}),_=URL.createObjectURL(M),A=h.length;A<f;++A)h[A]=p(_);for(var A=f;A<h.length;++A)h[A].object.postMessage({});h.length=f,URL.revokeObjectURL(_)}function g(f,y,M,_,A){for(var E=h[0],R=1;R<h.length;++R)h[R].pending<E.pending&&(E=h[R]);return new Promise(function(D,T){var S=new Uint8Array(M),P=++d;E.pending+=f,E.requests[P]={resolve:D,reject:T},E.object.postMessage({id:P,count:f,size:y,source:S,mode:_,filter:A},[S.buffer])})}function m(f){var y=f.data;if(!y.id)return self.close();self.ready.then(function(M){try{var _=new Uint8Array(y.count*y.size);l(M,M.exports[y.mode],_,y.count,y.size,y.source,M.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:_},[_.buffer])}catch(A){self.postMessage({id:y.id,count:y.count,action:"reject",value:A})}})}return{ready:a,supported:!0,useWorkers:function(f){b(f)},decodeVertexBuffer:function(f,y,M,_,A){l(r,r.exports.meshopt_decodeVertexBuffer,f,y,M,_,r.exports[c[A]])},decodeIndexBuffer:function(f,y,M,_){l(r,r.exports.meshopt_decodeIndexBuffer,f,y,M,_)},decodeIndexSequence:function(f,y,M,_){l(r,r.exports.meshopt_decodeIndexSequence,f,y,M,_)},decodeGltfBuffer:function(f,y,M,_,A,E){l(r,r.exports[u[A]],f,y,M,_,r.exports[c[E]])},decodeGltfBufferAsync:function(f,y,M,_,A){return h.length>0?g(f,y,M,u[_],c[A]):a.then(function(){var E=new Uint8Array(f*y);return l(r,r.exports[u[_]],E,f,y,M,r.exports[c[A]]),E})}}})();function Iu(s){if(s.userData.glazingHighlightFixed)return;let e=s.onBeforeCompile,t=s.customProgramCacheKey();s.onBeforeCompile=function(n,i){e.call(this,n,i),n.fragmentShader=n.fragmentShader.replace("#include <opaque_fragment>",`
   float glazingLuma=dot(outgoingLight,vec3(.2126,.7152,.0722));
   float glazingSoft=.028+.027*(1.-exp(-max(0.,glazingLuma-.028)/.027));
   outgoingLight*=min(1.,glazingSoft/max(glazingLuma,.0001));
   #include <opaque_fragment>`)},s.customProgramCacheKey=()=>t+"-xc90-glazing-rolloff-1",s.userData.glazingHighlightFixed=!0}var ro;function Li(){if(ro)return ro.userData.vehicleOwners++,ro;let s=512,e=256,t=new Float32Array(s*e*4),n=(a,o,l)=>{let c=ei.clamp((l-a)/(o-a),0,1);return c*c*(3-2*c)},i=(a,o,l,c,u,h)=>{let d=Math.abs(Math.atan2(Math.sin(a-l),Math.cos(a-l)));return(1-n(u*.85,u,d))*(1-n(h*.65,h,Math.abs(o-c)))};for(let a=0;a<e;a++)for(let o=0;o<s;o++){let l=(o/s-.5)*Math.PI*2,c=(a/e-.5)*Math.PI,h=.07+.15*n(-.12,.6,c)+2.8*i(l,c,-1.2,.36,.78,.14)+1.8*i(l,c,1.7,.58,.65,.28)+1.5*n(.9,1.45,c),d=(a*s+o)*4;t[d]=h*.97,t[d+1]=h*.99,t[d+2]=h,t[d+3]=1}let r=new Dn(t,s,e,wt,Gt);return r.mapping=ls,r.colorSpace=pt,r.needsUpdate=!0,r.userData.vehicleOwners=1,ro=r,r}var ao=class extends Ft{constructor(e=new ht,t=new I,n=new Ut,i=new I(1,1,1)){super();let r=[],a=[],o=[],l=new I,c=new Le().getNormalMatrix(e.matrixWorld),u=new Pe;u.makeRotationFromEuler(n),u.setPosition(t);let h=new Pe;h.copy(u).invert(),d(),this.setAttribute("position",new St(r,3)),this.setAttribute("uv",new St(o,2)),a.length>0&&this.setAttribute("normal",new St(a,3));function d(){let m=[],f=new I,y=new I,M=e.geometry,_=M.attributes.position,A=M.attributes.normal;if(M.index!==null){let E=M.index;for(let R=0;R<E.count;R++)f.fromBufferAttribute(_,E.getX(R)),A?(y.fromBufferAttribute(A,E.getX(R)),p(m,f,y)):p(m,f)}else{if(_===void 0)return;for(let E=0;E<_.count;E++)f.fromBufferAttribute(_,E),A?(y.fromBufferAttribute(A,E),p(m,f,y)):p(m,f)}m=b(m,l.set(1,0,0)),m=b(m,l.set(-1,0,0)),m=b(m,l.set(0,1,0)),m=b(m,l.set(0,-1,0)),m=b(m,l.set(0,0,1)),m=b(m,l.set(0,0,-1));for(let E=0;E<m.length;E++){let R=m[E];o.push(.5+R.position.x/i.x,.5+R.position.y/i.y),R.position.applyMatrix4(u),r.push(R.position.x,R.position.y,R.position.z),R.normal!==null&&a.push(R.normal.x,R.normal.y,R.normal.z)}}function p(m,f,y=null){f.applyMatrix4(e.matrixWorld),f.applyMatrix4(h),y?(y.applyNormalMatrix(c),m.push(new fr(f.clone(),y.clone()))):m.push(new fr(f.clone()))}function b(m,f){let y=[],M=.5*Math.abs(i.dot(f));for(let _=0;_<m.length;_+=3){let A=0,E,R,D,T,S=m[_+0].position.dot(f)-M,P=m[_+1].position.dot(f)-M,O=m[_+2].position.dot(f)-M,z=S>0,V=P>0,j=O>0;switch(A=(z?1:0)+(V?1:0)+(j?1:0),A){case 0:{y.push(m[_]),y.push(m[_+1]),y.push(m[_+2]);break}case 1:{if(z&&(E=m[_+1],R=m[_+2],D=g(m[_],E,f,M),T=g(m[_],R,f,M)),V){E=m[_],R=m[_+2],D=g(m[_+1],E,f,M),T=g(m[_+1],R,f,M),y.push(D),y.push(R.clone()),y.push(E.clone()),y.push(R.clone()),y.push(D.clone()),y.push(T);break}j&&(E=m[_],R=m[_+1],D=g(m[_+2],E,f,M),T=g(m[_+2],R,f,M)),y.push(E.clone()),y.push(R.clone()),y.push(D),y.push(T),y.push(D.clone()),y.push(R.clone());break}case 2:{z||(E=m[_].clone(),R=g(E,m[_+1],f,M),D=g(E,m[_+2],f,M),y.push(E),y.push(R),y.push(D)),V||(E=m[_+1].clone(),R=g(E,m[_+2],f,M),D=g(E,m[_],f,M),y.push(E),y.push(R),y.push(D)),j||(E=m[_+2].clone(),R=g(E,m[_],f,M),D=g(E,m[_+1],f,M),y.push(E),y.push(R),y.push(D));break}case 3:break}}return y}function g(m,f,y,M){let _=m.position.dot(y)-M,A=f.position.dot(y)-M,E=_/(_-A),R=new I(m.position.x+E*(f.position.x-m.position.x),m.position.y+E*(f.position.y-m.position.y),m.position.z+E*(f.position.z-m.position.z)),D=null;return m.normal!==null&&f.normal!==null&&(D=new I(m.normal.x+E*(f.normal.x-m.normal.x),m.normal.y+E*(f.normal.y-m.normal.y),m.normal.z+E*(f.normal.z-m.normal.z))),new fr(R,D)}}},fr=class{constructor(e,t=null){this.position=e,this.normal=t}clone(){let e=this.position.clone(),t=this.normal!==null?this.normal.clone():null;return new this.constructor(e,t)}};function Ms(s){return s.color.set("#30343a"),s.map=null,s.normalMap=null,s.bumpMap=null,s.aoMap=null,s.emissiveMap=null,s.metalnessMap=null,s.roughnessMap=null,s.vertexColors=!1,s.emissive?.set(0),s.metalness=0,s.roughness=.82,s.transparent=!1,s.opacity=1,s.depthWrite=!0,s.alphaTest=0,s.userData.surfaceRole="plate",s.needsUpdate=!0,s}function Pu(s){let e=s.getObjectByName("Object_11");if(!e?.isMesh||s.getObjectByName("Neutral rear plate"))return;s.updateMatrixWorld(!0);let t=new ao(e,new I(0,.735,2.258),new Ut(-.273,0,0),new I(.46,.145,.05));if(!t.attributes.position.count){t.dispose();return}t.applyMatrix4(s.matrixWorld.clone().invert());let n=Ms(new ln);n.polygonOffset=!0,n.polygonOffsetFactor=-2,n.polygonOffsetUnits=-4;let i=new ht(t,n);i.name="Neutral rear plate",i.receiveShadow=!0,s.add(i)}function fl(s,e){return s.color.set(e==="grille-frame"?"#a2aab3":e==="grille-slat"?"#7a8590":e==="grille-pattern"?"#78838f":"#454e59"),s.metalness=e==="grille-frame"?.8:e==="grille-slat"?.65:e==="grille-pattern"?.35:.15,s.roughness=e==="grille-frame"?.25:.3,s.envMap=Li(),s.envMapIntensity=e==="grille-panel"?.5:.8,s.emissive.set(0),s.transparent=!1,s.opacity=1,s.depthWrite=!0,s.userData.surfaceRole=e,s.needsUpdate=!0,s}function Lu(s,e,t){let n=s.geometry,i=n.getAttribute("position"),r=n.index,a=r?r.count:i.count,o=[],l=[],c=new I;for(let d=0;d<a;d+=3){let p=[0,1,2].map(g=>r?r.getX(d+g):d+g);(p.every(g=>e(c.fromBufferAttribute(i,g).applyMatrix4(s.matrixWorld)))?l:o).push(...p)}if(!l.length)return!1;let u=s.material,h=u.clone();return h.map=null,h.metalnessMap=null,h.roughnessMap=null,fl(h,t),h.name="Graphite grille",s.geometry=n.clone(),s.geometry.setIndex([...o,...l]),s.geometry.clearGroups(),o.length&&s.geometry.addGroup(0,o.length,0),s.geometry.addGroup(o.length,l.length,1),s.material=[u,h],!0}function oo(s,e){s.updateMatrixWorld(!0),s.traverse(t=>{!t.isMesh||Array.isArray(t.material)||(e==="x6"&&t.name==="Object_5"&&Lu(t,n=>n.z<-2.1&&n.y>.28&&n.y<1.03,"grille-slat"),e==="ix"&&["Object_26","Object_32"].includes(t.name)&&Lu(t,n=>n.z<-2.3&&n.y>.48&&n.y<1.1&&Math.abs(n.x)<.7,t.name==="Object_26"?"grille-panel":"grille-pattern"))})}function U0(s,e,t){let n=t.name;if(s==="xc90"){if(/_(007|069)_Material_#2125664755_/.test(e.name))return"grille-frame";if(/_048_Material_#2125664765_/.test(e.name))return"grille-slat";let i=Number(e.name.match(/Material_#(\d+)/)?.[1]);return i===2125664766?"paint":[2125664769,2125664772].includes(i)?"glass":i===2125664770?"rubber":[2125664758,2125664761].includes(i)?"tail":i===2125664767?"tail-lens":i===2125664764?"headlamp":i===2125664763?"head-lens":[2125664754,2125664755,2125664757,2125664765,2125664771].includes(i)?"chrome":i===2125664774?"plate":i===2125664773?"trim":i===2125664760?"rim":"trim"}if(s==="ix")return n==="Vnehka0061Mtl"?"trim":n==="Vnehka0101Mtl"?"plate":n==="Kapot11Mtl"?"paint":n==="Rpbsw0031Mtl"?"chrome":["Wind1Mtl","Rl31Mtl","Fr20041Mtl"].includes(n)?"glass":["Fr20071Mtl","Seat0051Mtl","Symb0011Mtl"].includes(n)?"trim":n==="Wheel1Mtl"?"rubber":n==="Wheel0011Mtl"?"rim-textured":n==="Trunkwind0011Mtl"?"tail":n==="Opttrans0011Mtl"?"headlamp":n==="Optglass0011Mtl"?"head-lens":"original";if(s==="model-3"){if(n==="Geohoodsub00021Mtl")return"paint";if(n==="Georimblurlfsub01Mtl"||n==="Geodoorl2sub11Mtl")return"trim";if(n==="Georimblurlfsub021Mtl")return"rim";if(/extwindow|Geodoorl2sub31|Geodoorr2sub31/i.test(n))return"glass";if(n==="Ln12Mtl")return"tail"}if(s==="taycan"){if(n==="corpus1")return"paint";if(n==="red_headlight")return"tail";if(n==="headlight_white_color")return"headlamp";if(n==="MIRROR")return"chrome"}return/tire|tyre|rubber/i.test(n)?"rubber":/window|glass/i.test(n)?/lamp|light/i.test(n)?"head-lens":"glass":"original"}function Du(s,e,t){let n=new Map,i=new Map,r=new bt;s.updateMatrixWorld(!0),s.traverse(c=>{if(!c.isMesh)return;c.castShadow=!0,c.receiveShadow=!0;let h=(Array.isArray(c.material)?c.material:[c.material]).map(d=>{let p=U0(e,c,d),b=d.uuid+":"+p;if(!n.has(b)){let g=d.clone();p==="paint"?(g=new It,ln.prototype.copy.call(g,d),g.defines={STANDARD:"",PHYSICAL:""},g.name="Pearl white paint",g.map=null,g.metalnessMap=null,g.roughnessMap=null,g.color.set("#edf0f3"),g.metalness=.38,g.roughness=.28,g.clearcoat=.85,g.clearcoatRoughness=.2,g.envMapIntensity=1.1,g.transparent=!1,g.opacity=1,g.depthWrite=!0,g.emissive.set(0)):p!=="original"&&p!=="rim-textured"&&(g.map=null,g.metalnessMap=null,g.roughnessMap=null,g.transparent=!1,g.opacity=1,g.depthWrite=!0,g.emissive.set(0),p==="glass"&&(g.color.set("#25313c"),g.metalness=.12,g.roughness=.34,g.envMapIntensity=.75,g.side=Ht),p==="rubber"&&(g.color.set("#303238"),g.metalness=0,g.roughness=.94),(p==="rim"||p==="chrome")&&(g.color.set(p==="rim"?"#737a83":"#9198a0"),g.metalness=p==="chrome"?.55:.78,g.roughness=p==="chrome"?.4:.28,g.envMapIntensity=p==="chrome"?.65:1),(p==="trim"||p==="detail")&&(g.color.set(p==="trim"?"#292d33":"#555d65"),g.metalness=p==="trim"?.05:.3,g.roughness=p==="trim"?.65:.4),p==="plate"&&Ms(g),(p==="tail"||p==="tail-lens")&&(g.color.set("#a71724"),g.metalness=.15,g.roughness=.26,g.emissive.set("#ff1729"),g.emissiveIntensity=p==="tail"?1.1:.12,p==="tail-lens"&&(g.color.set("#5b101b"),g.transparent=!0,g.opacity=.48,g.depthWrite=!1)),(p==="headlamp"||p==="head-lens")&&(g.color.set(p==="headlamp"?"#d7e1ec":"#758391"),g.metalness=.2,g.roughness=.22,p==="headlamp"?(g.emissive.set("#dce7f2"),g.emissiveIntensity=.2):(g.transparent=!0,g.opacity=.3,g.depthWrite=!1))),e==="model-3"&&(p==="paint"&&(g.color.set("#edf0f4"),g.metalness=.42,g.roughness=.24,g.clearcoat=1,g.clearcoatRoughness=.22,g.envMap=Li(),g.envMapIntensity=.8),p==="trim"&&(g.color.set("#24282d"),g.metalness=.08,g.roughness=.58),p==="glass"&&(g.color.set("#202b35"),g.metalness=0,g.roughness=.4,g.envMapIntensity=.5),p==="original"&&/cockpit/i.test(d.name)&&(g.emissive.set(0),g.emissiveIntensity=0)),e==="xc90"&&p==="glass"&&(g.normalMap=null,g.bumpMap=null,g.flatShading=!1,Iu(g)),["ix","xc90"].includes(e)&&(p==="paint"&&(g.color.set("#e3e7ed"),g.metalness=.46,g.roughness=.22,g.clearcoat=1,g.clearcoatRoughness=.19,g.envMap=Li(),g.envMapIntensity=1.05,g.normalMap=null,g.bumpMap=null),p==="glass"&&(g.color.set("#17232f"),g.metalness=.05,g.roughness=.3,g.envMapIntensity=.65),p==="chrome"&&(g.color.set("#7f8994"),g.metalness=.8,g.roughness=.25,g.envMapIntensity=.9),p==="rim-textured"&&(g.transparent=!1,g.opacity=1,g.depthWrite=!0,g.alphaTest=0,g.color.set("#c0c7cf"),g.metalness=.65,g.roughness=.32,g.emissive.set(0),g.emissiveMap=null,g.envMapIntensity=.9)),(p==="grille-frame"||p==="grille-slat")&&fl(g,p),g.userData.surfaceRole=p,g.needsUpdate=!0,n.set(b,g)}if(p==="rubber"){let g=c.geometry.getAttribute("position"),m=new I;for(let f=0;f<g.count;f++){m.fromBufferAttribute(g,f).applyMatrix4(c.matrixWorld);let y=(m.x<0?"left":"right")+"-"+(m.z<0?"front":"rear");i.has(y)||i.set(y,new bt),i.get(y).expandByPoint(m)}}if(p==="tail"||p==="tail-lens"){let g=new bt().setFromObject(c);g.getCenter(new I).z>t*.38&&r.union(g)}return n.get(b)});if(e==="xc90"&&h.some(d=>["paint","glass"].includes(d.userData.surfaceRole))){let d=c.geometry.clone();Su(d);let p=d.getAttribute("position"),b=new Float32Array(p.count*3);for(let g=0;g<p.count;g++)b[g*3]=p.getX(g)*100,b[g*3+1]=p.getY(g)*100,b[g*3+2]=p.getZ(g)*100;d.setAttribute("position",new at(b,3)),c.geometry=Tu(d,Math.PI/6),c.geometry.scale(.01,.01,.01)}if(c.material=Array.isArray(c.material)?h:h[0],e==="ix"&&["Object_36","Object_45"].includes(c.name)){let d=c.geometry,p=d.attributes.position,b=d.index,g=[],m=[],f=new I;for(let y=0;y<b.count;y+=3){let M=[b.getX(y),b.getX(y+1),b.getX(y+2)];(M.every(A=>(f.fromBufferAttribute(p,A).applyMatrix4(c.matrixWorld),f.z>2.1&&f.y<.46))?m:g).push(...M)}if(m.length){c.geometry=d.clone(),c.geometry.setIndex([...g,...m]),c.geometry.clearGroups(),c.geometry.addGroup(0,g.length,0),c.geometry.addGroup(g.length,m.length,1);let y=Ms(h[0].clone());y.name="Neutral rear trim",y.color.set("#292d33"),y.metalness=.05,y.roughness=.65,y.envMap=null,y.envMapIntensity=.3,y.userData.surfaceRole="trim",c.material=[h[0],y]}}}),oo(s,e),e==="model-3"&&Pu(s);let a=[...i].map(([c,u])=>({position:c,min:u.min.toArray(),max:u.max.toArray(),size:u.getSize(new I).toArray()})),o=r.isEmpty()?new I(0,.85,t*.47):r.getCenter(new I),l={rearZ:o.z,height:o.y,halfWidth:r.isEmpty()?.72:Math.min(.83,r.getSize(new I).x*.42),continuous:e==="taycan"};return{wheels:a,lamps:l}}var N0=Object.freeze({ix:{name:"BMW iX",length:4.95},xc90:{name:"Volvo XC90",length:4.95},"model-3":{name:"Tesla Model 3 (2024)",length:4.72},taycan:{name:"Porsche Taycan",length:4.96}});async function Uu(s,{url:e=new URL(`../prepared/${s}/model.glb.gz`,new URL("../engine/vehicle-library/three/load-prepared.js",import.meta.url).href),signal:t}={}){let n={},i=performance.now(),r=f=>{let y=performance.now();n[f]=y-i,i=y},a=N0[s];if(!a)throw Error(`No prepared vehicle: ${s}`);let o=await fetch(e,{signal:t});if(!o.ok)throw Error(`Vehicle download failed (${o.status})`);let l=await o.arrayBuffer(),c=new Uint8Array(l,0,Math.min(2,l.byteLength));r("download"),c[0]===31&&c[1]===139&&(l=await new Response(new Blob([l]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()),r("decompress");let u=await new ys().setMeshoptDecoder(vs).parseAsync(l,"");r("parse");let h=u.scene;h.updateMatrixWorld(!0);let d=new bt().setFromObject(h).getSize(new I);h.rotation.y+=s==="model-3"||d.x>d.z?Math.PI/2:Math.PI,["ix","xc90"].includes(s)&&(h.rotation.y+=Math.PI),h.scale.multiplyScalar(a.length/Math.max(d.x,d.z)),h.updateMatrixWorld(!0);let p=new bt().setFromObject(h),b=p.getCenter(new I);h.position.sub(new I(b.x,p.min.y,b.z)),h.updateMatrixWorld(!0),r("normalize"),await new Promise(f=>setTimeout(f,0));let g=Du(h,s,a.length);r("materials");let m=new jt;return m.name=a.name,m.add(h),m.userData.loadTimings=n,m.userData.vehicleSpec={...g,id:s,length:a.length},m}function Nu(s){if(s.userData.materialStudy)return s;let e=new Set,t={paint:0,glass:0,trim:0};return s.traverse(n=>{if(n.isMesh)for(let i of Array.isArray(n.material)?n.material:[n.material]){if(!i||e.has(i))continue;e.add(i);let r=i.userData.surfaceRole||{body:"paint",glass:"glass",tires:"rubber",rim1:"rim",rim2:"rim"}[i.name];if(r==="paint"){i.color.set("#d9dbdd"),i.metalness=.22,i.roughness=.25,i.isMeshPhysicalMaterial&&(i.clearcoat=1,i.clearcoatRoughness=.14,i.specularIntensity=1),i.envMap||(i.envMap=Li()),i.envMapIntensity=1.35;let a=i.onBeforeCompile,o=i.customProgramCacheKey();i.onBeforeCompile=l=>{a.call(i,l),l.fragmentShader=l.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
      vec3 srVehicleNormal=inverseTransformDirection(normal,viewMatrix);
      float srVehiclePlanes=.72+.28*smoothstep(-.5,.85,dot(srVehicleNormal,normalize(vec3(-.6,1.,.6))));
      reflectedLight.indirectDiffuse*=srVehiclePlanes;
      reflectedLight.directDiffuse*=.86;
     `)},i.customProgramCacheKey=()=>o+"-sr-paint-structure-1",t.paint++}else if(r==="glass"){i.color.set("#232a30"),i.metalness=0,i.roughness=.38,i.envMapIntensity=.24;let a=i.onBeforeCompile,o=i.customProgramCacheKey();i.onBeforeCompile=l=>{a.call(i,l),l.fragmentShader=l.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
      reflectedLight.directSpecular*=.22;
      reflectedLight.indirectSpecular*=.70;
     `)},i.customProgramCacheKey=()=>o+"-sr-glass-soft-highlight-1",i.transparent=!1,i.opacity=1,i.depthWrite=!0,t.glass++}else(r==="chrome"||r==="rim")&&(i.metalness=.72,i.roughness=.28,i.envMapIntensity=.85,t.trim++);i.needsUpdate=!0}}),s.userData.materialStudy={version:4,...t,paintRoughness:.25,coatRoughness:.14,glassRoughness:.38},s}async function co(s,{priority:e="high",timeoutMs:t=3e4}={}){let n=new AbortController,i,r=()=>{clearTimeout(i),i=setTimeout(()=>n.abort(),t)};r();try{let a=await fetch(s,{priority:e,signal:n.signal});if(!a.ok)throw new Error(`Asset request failed (${a.status})`);let o=a.body?.getReader();if(!o)return await a.arrayBuffer();let l=[],c=0;try{for(;;){let{done:d,value:p}=await o.read();if(d)break;p.byteLength&&(r(),l.push(p),c+=p.byteLength)}}finally{o.releaseLock()}let u=new Uint8Array(c),h=0;for(let d of l)u.set(d,h),h+=d.byteLength;return u.buffer}catch(a){throw Object.assign(new Error("Scene asset could not load",{cause:a}),{code:"asset"})}finally{clearTimeout(i)}}function lo(s,e,t=globalThis){let n=t[s];return delete t[s],n?Promise.resolve(n).catch(()=>e()):e()}var F0=lo("__studioEnvironmentRequest",()=>co(new URL("./assets/studio-environment.bin.gz?v=1",new URL("../engine/studio-environment.js",import.meta.url).href))),O0=await F0,Fu=await new Response(new Blob([O0]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer(),Ou=new DataView(Fu),B0=Ou.getUint32(0,!0),k0=Ou.getUint32(4,!0),z0=new Uint16Array(Fu,8);function Bu(){let s=new Dn(z0,B0,k0,wt,Qn);return s.mapping=Si,s.minFilter=s.magFilter=Et,s.generateMipmaps=!1,s.flipY=!1,s.colorSpace=pt,s.needsUpdate=!0,s}var ku=[{name:"Object_4",count:61334,indices:[32173,61087,61088,32171,32167,234,677,222,659,346,40384,40273,19239,40367,31784,31787,15721,31783,31781,2550,418,31775,2551,16010,16019,31750,31743,38798,38800,38814,12278,60139,12298,11941,11988,11943,12230,48956,31603,31601,61080,31868,32179,30543,32182,30325,30332,34325,30281,30319,17315,20838,17317,19241,19238,19163,19162,19246,31774,31520,31611,31609,658,236,296,408,348,661,660,413,414,1395,43766,40431,40419,40420,44068,44069,44067,42359,60759,42344,17187,19006,19010,60620,60639,38892,2597,2581,412,19673,19671,19515,19489,19516,19247,19503,19505,31786,31788,15717,15746,15743,15947,31865,31863,31870,31867,16012,31742,31764,31605,31608,31606,19717,19712,31528,31531,31524,31792,31821,16005,11972,11966,38589,38577,38574,38578,11924,11949,11958,38815,38672,49182,38603,38714,47265,12279,50961,47372,51034,47377,13044,13021,60280,9633,10032,9732,49021,12277,51033,12276,27113,30971,27114,17319,20864,24452,27281,24464,24462,24564,24807,23662,24523,24522,24921,33295,32361,30510,32323,32321,61091,32371,61081,31820,61092,31798,32372,29977,32412,32380,19664,19669,18688,61083,31600,31607,32201,32094,32164,32140,20841,30544,30550,30549,30548,30557,18694,18697,18691,18695,18696,18977,19483,19487,18715,18714,18965,19264,19257,734,19260,20078,727,19256,19243,19083,19084,19089,19236,19155,19165,19166,19090,292,417,416,294,293,31773,31772,31862,31864,31519,31518,31869,31521,31517,235,221,295,409,714,1692,1694,39545,39530,39546,40400,40359,40358,44060,44062,44059,44058,44092,43769,44169,43758,43779,43780,44071,43778,44072,44061,39528,60758,60777,42345,60761,18713,19008,19491,19492,17131,60778,60757,42429,42356,42427,42358,42349,42348,60720,60845,60648,60739,60727,16606,1394,1393,1021,1400,1369,1372,1370,1373,15739,15742,31361,31677,31668,31678,19667,33681,31586,31587,19497,19498,19785,19691,19679,19698,19767,31612,19763,19500,19499,19508,19502,19501,19504,19161,19159,15723,15731,15558,15726,2599,2600,31782,31759,31752,31760,31763,31604,31498,20051,31859,31790,31857,31858,31780,31762,31789,31855,31791,31823,15716,15732,15981,46087,46088,46401,49328,51878,49269,38593,49036,11967,11948,38604,49285,42578,38824,42585,7023,7885,7536,60303,60298,60306,60289,15954,15764,15965,11960,11950,11956,49019,49020,12233,12270,12234,12271,23156,47396,51037,12273,22832,22840,23616,22821,22824,22823,12236,12240,12594,12241,12580,12579,23043,23042,12576,27388,27389,27390,27287,29678,29674,27336,30962,27306,24475,24477,24476,24317,24319,27136,24316,30977,30410,30420,30430,30409,21028,17323,17321,21858,20414,24579,24578,24465,24580,27164,27160,24276,24472,27166,24468,27279,24469,24586,24470,27167,24463,24525,25144,21362,25247,21356,21360,24364,24410,25238,24488,25236,25240,25227,24479,24492,24366,24358,24361,27391,23408,24623,23407,31695,31696,31671,61085,31971,31994,31953,29752,31095,29733,27457,27459,29758,27460,29760,27499,31104,29761,29943,32366,30003,29971,29970,29969,14215,14201,31599,31595,31575,31800,19676,34309,32193,32134,19840,20769,20772,20771,20776,17942,20913,20914,30545,30542,30313,30407,30329,30334,30331,19688,18682,18699,18679,18698,18711,18966,17274,676,675,698,20048,20105,20055,19242,19237,19244,19255,19073,19072,19074,19088,19092,19081,19158,19082,415,1392,2207,2205,2525,1386,1389,31866,31860,31872,31511,31516,31871,31522,343,342,347,40399,40398,40422,40362,710,712,40372,40369,40364,40383,40370,40421,40459,40396,40460,40462,44066,44056,44064,44515,44063,43798,44042,43799,43796,44041,44044,57751,44040,44079,44070,44076,43771,43777,43773,39490,39491,39622,39615,39617,18974,18973,18969,18968,18712,18978,19007,17199,17198,17190,17184,17191,17189,18983,19168,19153,19235,19231,39623,39667,19230,36690,36355,19078,19075,36356,36261,36264,17085,16927,60779,16901,42399,60780,43759,43687,43661,43686,42354,42613,42468,42357,20478,20171,60729,60738,60737,60721,20202,2596,2595,1363,410,1397,1004,1003,1396,2576,2577,2583,15906,9629,15968,15740,15752,15295,15725,15678,15691,31667,15559,15557,15563,15561,15560,15556,15555,15375,29982,15036,13913,13693,13670,13655,14003,14005,14252,13656,13668,13657,33683,19496,18980,19488,19686,19690,19771,31613,31610,19495,19494,19715,15744,15948,15736,31861,31777,31776,31778,1387,1385,31751,31602,19705,19510,19735,19509,31512,31514,31499,31500,31525,31526,31854,31761,31793,15708,31794,15710,31795,15705,45903,38584,38590,49275,51920,49277,51918,51916,43943,55257,44248,44263,57598,52020,52019,52017,52022,52031,46560,50068,46561,46582,46581,52025,52030,38797,38794,38823,38822,38816,38579,23040,6924,13081,7539,46895,46882,7458,46915,46916,46909,51044,60295,13064,13055,60116,23138,22024,22089,16336,16288,16287,46919,13553,13568,15959,4518,15962,4512,4514,15760,15258,15251,15289,15749,15750,15933,15963,15925,15927,49018,49016,48964,48966,47411,49029,49102,11945,11955,11953,47397,12272,23539,23744,23543,22758,22759,22825,22833,22768,22700,22699,22723,22698,12269,12564,12238,12592,12582,12810,23044,17061,17135,17057,17182,17177,17183,17170,20739,20738,17169,20737,20684,20674,20675,20683,27692,27656,27552,27657,29755,27379,27378,27293,29734,30445,30449,30454,27119,27118,27120,24320,24318,27156,27157,30494,30539,30493,30429,30421,30427,30553,29670,30432,27109,27116,27089,24284,27124,27117,27087,29660,27085,30422,20910,20388,20734,20386,30248,30247,20420,24743,24413,24515,24919,24517,24581,24583,24512,24466,24467,24450,24524,24526,24502,24933,24505,24501,24507,20429,20428,21354,20418,20419,24329,24327,24326,21357,24876,21009,25256,29654,21008,29653,24489,24322,24323,24315,24399,24408,25254,24388,24394,25078,24511,24493,25223,24485,25219,25217,24380,24370,24379,24385,24373,24367,24621,24620,24805,24619,24797,23404,24563,24565,24616,24632,27405,27393,24630,24527,24534,24541,24536,24533,22841,29889,23745,23922,23923,23904,23918,27548,27503,23383,23394,23395,24422,23671,23316,23361,23356,23357,31669,61084,31589,31588,33679,31593,31700,31675,31672,31699,32370,32377,32404,15521,31959,15512,31952,27458,30008,30009,29949,29950,29948,29939,30016,30015,30006,30007,29957,29823,29825,29866,29899,29898,29900,29972,14199,29908,29893,29848,29851,29886,31152,29867,29873,29872,29874,29876,29877,31594,31797,31799,31701,31819,19814,32120,32105,19795,32080,19797,32082,30270,30241,30631,30242,17333,17335,32121,32093,20555,20673,20554,20543,20165,20322,20506,20527,60713,25745,17146,20768,20409,20889,20888,20886,20865,20863,17034,20895,30541,30540,30406,30405,30408,30311,30327,30315,30328,17176,17174,19682,19484,17405,17402,17403,18702,18701,18700,18708,18678,19796,18710,18687,17313,17311,17149,17385,17367,17384,17368,17362,17369,17371,17378,17377,18487,671,711,700,697,696,19258,19254,19252,19167,19164,19080,19154,19157,19079,1375,1374,1367,2544,2206,1388,1390,1368,1365,1366,2511,2513,2512,31515,31513,31873,1145,668,667,40360,708,707,40363,40373,40376,39531,39534,39539,40453,40371,40368,40457,39535,40430,43791,43786,43794,43797,43793,44093,44095,44096,44514,44527,44526,44528,44114,59458,44511,57682,44065,44057,44043,44039,43789,42696,43788,44078,44077,44080,44075,44168,44074,44073,40402,43781,50127,46580,50128,50126,50069,50066,46064,46065,50070,50072,50125,39488,39525,39550,39526,43775,43774,43677,43768,42410,42362,42407,39527,39547,39597,39598,39596,39610,39549,39594,39624,42413,39666,18975,18976,17208,17209,17219,17220,19009,17188,18716,17276,17275,17297,19234,39614,19085,19086,19087,19049,19048,19052,19094,19150,19169,16894,39656,16924,16923,16925,17185,60630,60734,60631,60782,60781,16922,42574,42573,42611,39495,39493,43719,43662,43776,43760,39551,42426,39593,39552,60736,20638,60745,20559,20585,20676,20473,20166,20504,20544,54301,54300,46301,3954,2827,15902,2828,15905,2593,2835,2594,2603,2604,2836,2745,3800,3801,3794,3795,3787,15928,1017,1018,2582,15252,15751,15755,15754,15294,15296,15669,15696,15688,15697,31673,16364,15228,15227,16333,15570,15568,15684,15728,15700,15727,15972,15299,15300,13022,16281,13589,16285,14178,14185,14195,14205,14184,31970,32638,31967,31963,13717,13731,13715,15333,14171,14182,14167,14168,14172,15365,14202,22921,22679,14254,13666,13669,13672,13677,13678,13712,13692,13711,13723,14103,13714,13707,13667,13652,13593,13653,33680,19490,20094,19248,19493,19160,15718,15753,31856,2196,2195,2624,2726,2611,19513,19706,19700,31503,31502,31523,15984,31822,1371,1362,2137,47880,47927,1916,46077,1913,1921,45897,45898,1926,46086,46632,46089,46204,46397,52003,46417,52002,46293,46365,46288,51922,51928,51933,51927,51936,51942,51932,51930,51977,51975,51935,51761,2053,48115,48116,48096,51762,49459,45237,50310,49347,49363,38580,38586,49271,51883,51915,44375,44371,44374,44373,44370,44399,44372,44389,49209,44383,44396,44414,44397,44401,44413,44393,44394,44377,44009,44010,38818,55266,43951,43938,44344,44345,44313,57697,44240,44249,44352,51978,51979,52010,52016,50067,52027,52026,51912,51910,51867,50374,51894,49456,49457,50353,50373,44461,59470,44479,44478,44272,44458,44253,44270,44252,44239,44489,44700,44490,44699,44021,44020,43908,44361,44362,44343,44314,44315,44701,44718,44285,44309,44293,44294,44291,44363,44398,44409,44403,44408,44297,44298,44299,38817,43994,43995,43985,43993,43948,43986,43950,43952,43959,43942,43987,7607,7608,7621,7620,7610,7616,7636,7658,4546,6916,60496,60085,7022,7524,46906,46904,7424,7408,7427,7426,7388,7395,7391,47408,47407,47402,47395,13012,13036,13039,13038,13e3,13019,13651,22602,22646,13063,13563,60274,22101,22104,22023,22035,13059,13587,13042,13586,16337,16335,16373,16334,16372,13060,13061,13584,16341,16343,47888,47625,47626,13083,13554,13562,15924,3803,15290,15291,15758,15748,15937,16698,15936,15932,15964,48967,47410,49028,11947,11957,47379,23663,23166,23618,23619,22315,22311,22628,23544,23541,23547,23558,22829,22770,22725,12561,12243,12245,23155,22086,17060,17136,17047,17168,17167,17180,17173,17164,17148,17171,17166,17172,20668,20672,20686,20556,20538,20558,20537,20539,20588,20586,20699,20700,20697,20733,29769,29932,29937,30468,30464,27387,27383,27381,27382,27386,27392,24574,24575,24552,27376,27380,30455,30485,30452,30955,30456,30954,29730,30448,30489,30490,30561,30488,30554,30552,30535,30499,30501,27359,27304,27121,27305,24478,24321,24282,24281,27123,27155,27154,30965,29675,30982,30431,30551,29662,27091,29663,27115,30419,20909,17356,18672,18483,17355,30680,20392,24521,24513,24570,24613,24549,24576,24585,24584,27301,27300,27299,24504,24471,24588,24589,24473,25242,24483,24481,24510,24508,21353,21011,29600,21019,20430,55809,24351,24342,24352,24343,25193,27077,27084,27076,24288,24287,24290,27088,27065,27063,24294,24312,24330,24311,24324,24314,25205,25197,21349,24297,21361,24350,24345,24299,21344,24292,24875,21005,21004,29652,27069,27070,29651,27086,24325,24309,24307,24310,24503,25244,24500,24480,24382,24371,24372,24377,23406,24614,24615,24528,24530,24535,24538,24908,23749,29861,23548,23400,23386,23409,27553,27456,23412,23336,23339,23347,23351,23314,23335,23359,27708,27707,27690,27709,31676,31674,15539,15533,15366,29947,30472,30011,29951,29935,30004,30005,29958,23925,29964,29925,29927,29929,29818,29871,15501,31992,15507,15656,15377,31147,29910,29907,29904,29894,31090,29864,19811,19812,18674,18675,32133,30257,30269,30632,17359,30252,30268,30282,30267,30261,30250,30244,32166,60740,20321,20201,60942,38699,38697,38936,25742,38935,20298,20169,20295,20170,20287,20290,17143,20736,20775,20887,30404,30326,30314,17334,17360,17363,17218,17175,17163,17162,17160,18671,18707,17408,18683,18709,17365,17366,670,701,672,19251,19245,19151,19156,19091,2543,2625,2530,1325,1024,1364,1344,1343,1323,2495,2502,2501,2610,378,407,662,340,338,339,1142,1131,1130,666,351,337,664,350,1123,1128,1122,1118,1117,40374,40361,40375,40379,40458,39541,39529,40447,42694,43751,43792,43787,44512,44113,44116,57773,44046,44510,44037,43795,42748,44150,44167,43772,1135,1442,44133,43755,43722,43756,43782,45971,46042,44579,50456,46038,50457,50433,50452,50451,50453,46040,50450,46593,50459,46589,46588,46587,46069,46563,50073,46072,50071,46071,39487,39492,43761,43765,43679,42412,42408,39548,39595,39647,39657,18967,17221,18979,17223,17222,17300,17418,17397,17398,17399,17417,19233,19232,19077,19053,19051,19050,19093,19170,19172,19152,16926,17132,17181,17186,17067,60783,60735,60756,17086,17087,17088,16930,17066,16929,42612,43647,43663,43648,43644,43650,39522,43649,39524,43675,43718,43717,43720,43721,43664,43685,43660,60622,20552,20545,20551,20678,20505,20553,20477,46312,46313,46317,54314,54303,2830,2748,3929,2584,2741,3930,3931,2732,2607,2729,2602,3932,3793,3792,3785,3786,15926,1315,1316,1016,1015,1014,1006,47881,2124,47879,2134,47936,47875,47878,47876,3784,3788,3868,3940,3944,47617,3883,47614,1675,47886,47892,3899,47624,3933,3909,9628,16376,16370,15562,15578,15554,15553,15304,15305,15552,15326,15323,15230,15293,15257,15297,15255,15256,15535,15666,15701,31702,16374,15301,15677,15682,15567,15730,15733,15565,15298,13595,13596,13674,13675,14194,14196,14186,14180,14176,31955,31993,32405,15655,31969,13790,15336,14110,15332,14206,14183,14165,15368,15363,15362,15355,15367,15351,15350,14257,14259,14209,14666,13998,14018,14247,13694,13671,13654,13594,13691,13696,13709,16327,13689,13690,13697,13679,16293,13698,13695,13662,31583,19693,31580,31527,19741,15999,31779,1384,1381,2614,2613,2622,2623,2601,2612,19697,19775,19729,19708,31501,2102,2136,2172,2173,2174,2176,1988,1983,1984,1985,1289,1910,1911,45902,47935,48094,51729,51750,46316,46314,46320,45904,45905,46093,46635,46633,46429,50124,52004,52007,52009,52008,46432,46412,46431,46415,51716,51726,51728,46382,46395,51833,51837,53238,51925,51923,51929,51931,51937,51974,51934,51976,51708,46209,46210,51707,51753,51701,2029,51698,55214,49254,49313,49462,49453,44497,44714,44712,44476,44747,44735,44737,44740,44745,44659,44660,44529,45221,49230,49229,44333,44732,49225,49223,49358,49353,49350,49211,44387,49241,49284,38575,49194,38581,51913,51909,51919,52024,52023,44018,44369,44395,44391,44342,49207,44415,43935,44261,44259,44264,44267,44266,44257,44250,44251,44258,44355,44356,44354,44353,44245,57771,51903,51902,51901,46626,51885,51906,51908,51907,51884,49455,44669,44743,44505,59441,57680,44457,44463,44483,44477,44664,44471,44278,44466,44493,44487,44468,44023,43907,44024,44022,44705,44706,44287,44310,44311,44280,44279,44289,44268,44312,44368,44295,44410,44339,44365,44366,43947,43983,43971,42607,42604,23157,7643,7586,7644,7642,7641,7609,7592,7509,7543,4517,6970,6923,60314,6918,60315,60304,60090,7538,7525,7026,7540,7075,7548,7590,47268,47371,47381,47374,47375,47275,47363,7422,46902,7447,7453,7448,7455,7434,7595,7508,7485,7484,47893,47622,46910,46908,46907,46911,46893,47420,22567,13029,13037,13013,13590,13592,13016,12989,13018,22451,22473,22510,22511,22697,22645,13056,60154,60279,60126,60123,60121,13043,13588,16340,13058,16371,46971,46962,46970,7634,46972,47664,47668,47666,47665,4486,4497,5867,4483,4504,4499,3802,15761,15762,15757,15763,15941,15929,15940,15944,15952,15759,48962,47416,47384,47376,23591,23612,23613,25277,25366,25369,23603,23273,25515,25514,56146,23605,25379,23611,25377,25373,23651,25358,25359,23614,23679,23546,23673,23676,23560,22772,22771,25287,25105,22290,22289,22288,22291,25296,22253,22321,22319,25278,25276,25286,25356,25363,25285,25280,25364,25362,12235,12574,12589,12571,12244,12588,12800,20595,20598,20599,20645,17051,17056,17055,17058,17002,17007,17048,17059,17157,17970,17165,17951,17155,17145,17179,20665,20698,20590,20541,20557,20687,20701,20358,20385,20677,20682,20691,20685,31073,29768,30470,31105,27375,27384,27373,27291,24577,27352,27351,27346,27347,27353,27345,27344,30486,30487,30444,30441,30500,30498,30497,30556,30558,30536,30953,29683,27370,27369,27368,29687,29684,27158,27337,27303,27122,30496,30969,30538,29661,30424,27090,30310,30308,20923,17373,20462,26174,24414,21366,26074,26076,24395,20415,55817,56288,24518,24519,24568,24560,24907,24542,24572,24573,24612,24460,24548,24550,24582,27341,27340,27297,27296,27343,27280,27282,27295,24587,24590,24474,25245,21342,21346,29587,30598,21018,30597,56292,24355,25142,24344,27078,24313,24300,24331,24302,24328,25203,24346,24332,21003,21258,24873,24874,21345,21350,24347,21347,21348,27074,25221,24285,24286,24308,24306,24625,24626,31084,23751,23747,23748,23402,23387,23385,23411,27500,27555,27406,27502,23318,23319,23313,23333,23342,23343,23360,27659,27691,15546,15545,15550,15354,15538,29942,30010,30012,30013,29931,29936,29934,30014,23924,29903,29919,29902,29896,29920,29901,29897,29822,29926,29878,29868,32406,29993,14233,29879,29895,29881,29890,29906,29978,29917,31088,31796,19813,32132,30238,30259,30318,30317,30418,29658,30414,30266,30265,30245,20690,20692,20531,20533,20323,20307,38691,20303,20294,20299,20280,20283,20735,20774,20894,30316,30303,30304,30330,30307,17211,17214,17305,17407,17400,18680,17386,17387,17380,17381,17382,17406,17383,17364,17394,17388,17391,17396,17307,17389,17302,669,709,674,19249,1872,1324,1342,1321,2132,2155,2493,2496,2503,2504,1346,1348,1347,304,308,379,310,377,375,381,372,373,383,663,349,1144,1146,40401,1158,352,665,1129,40397,39489,39533,40452,43754,43784,42692,42695,42693,42690,44115,44520,44112,44038,44244,44035,42642,42634,42635,44034,43800,43861,42698,43802,42746,42699,44132,44081,43723,43783,1176,1170,50444,50458,50454,46039,50434,50418,39616,18981,18982,39611,19175,19174,19076,19149,16903,16906,16937,17133,17062,17053,17052,60746,60625,17089,16935,16931,42636,42705,42710,42628,42616,42617,42631,42626,42625,42622,42706,43646,39500,39501,43764,43681,43682,43668,43666,39498,39523,43757,43684,43688,42432,42646,42462,42460,42464,42759,42769,20528,20503,20502,46308,51799,51787,46291,2829,15908,15930,3975,4151,4163,3796,3797,4162,3952,2609,2608,2605,4498,4501,1313,1314,47669,47675,47670,47695,47696,47694,5248,3869,3845,46785,46795,3950,3953,3853,3864,3948,3949,3945,3936,3879,3880,47906,47891,47887,13585,15325,15292,15253,15971,15699,15694,16328,15302,16326,16294,13687,15675,15672,15685,15974,15229,13591,16289,16394,31028,29913,14197,14200,29914,14108,14109,13730,14162,14163,14161,14262,14263,14270,13996,14204,14208,14164,14158,15335,14157,14156,13718,13729,22724,14246,14007,14008,14021,13673,13685,13680,13710,13708,13720,13722,13721,13727,31579,31581,31582,34588,2619,2524,2620,19696,31577,31574,2170,2088,2171,1349,2087,2177,1990,1991,1993,1379,1378,1377,1376,46076,50076,50075,1909,46289,46321,46319,46085,46107,46422,46425,46421,46420,46419,50077,50078,46634,46106,50123,50074,46074,52013,46083,46082,1917,46081,46398,46396,46411,46410,46315,51727,51751,46206,51984,51970,46403,46407,52012,52014,51924,51973,51940,51938,51943,51944,51981,46367,51705,51706,2056,2055,51754,51700,1940,55208,55209,43968,44008,44379,43998,43976,55212,43974,43966,49193,49266,49258,49260,49255,49248,49331,50318,50337,50419,50317,50308,50319,50336,49461,49376,49375,44744,44741,44727,44326,44325,45222,50324,45226,45220,49232,49239,49238,49341,49339,49237,49235,50302,50323,44433,44434,44337,44418,44417,49357,49332,49360,38582,49295,38576,51911,51917,52015,51921,44011,44017,44013,43991,44390,44380,42586,55255,44262,44346,44025,44347,44351,44349,44350,44265,44260,46627,51900,52028,51904,52029,46424,46631,46620,46583,46584,46559,46585,50420,46614,46615,46623,51862,49454,51905,51895,44670,44668,44662,44504,57594,44665,44464,44255,44269,44475,44491,44492,44469,43890,43909,42601,43989,43988,43920,42603,44014,44015,43910,44494,44704,44715,44275,44292,44306,44307,44364,44405,44301,44404,44400,44402,44340,43955,43957,43962,42609,22080,7612,7594,7690,4547,4549,6919,6973,7585,7384,7042,7474,7482,7473,7587,47261,47257,47369,47247,47246,47213,47212,53239,48831,46300,7421,7423,7445,7435,7469,7486,7471,7472,46891,46886,46885,46887,46873,46884,46903,46892,46894,13015,13014,22495,22457,16282,22512,22566,12999,22455,22458,22459,22467,22619,22623,22618,22603,22604,22605,22607,22620,22606,22622,22515,22476,22475,22514,22472,22474,13658,13062,22516,22563,60240,60243,22477,22517,60277,60291,60271,22470,60276,25310,22272,25307,25299,25298,13057,46914,46913,46923,46938,7635,46888,47697,47698,47667,47632,47630,47629,47628,54470,54469,54461,47709,47687,47678,47686,47638,47637,47086,47672,47662,46815,46862,46813,46860,7035,46864,46790,46793,46812,47621,47620,47612,4487,4488,4496,4491,4506,4503,4502,15943,15756,15907,15938,15939,15945,4495,46818,7044,7043,47362,47383,23592,25380,25273,25267,25266,23170,25511,25087,23661,23240,23172,23269,23554,25270,55997,55992,55991,23650,22643,25378,25353,56153,56142,25289,25291,25283,25281,25365,25375,12247,20594,20593,20653,20657,21570,17e3,17001,17006,17017,17154,17153,17178,20664,20667,20591,20592,20669,20671,20589,20732,20731,20696,20693,20694,20689,20702,29765,27372,27374,27292,27348,27377,30484,30442,30474,30480,30479,30476,30459,30477,30478,30482,30555,29681,29689,27357,27356,27159,27338,27302,27283,27284,27165,27298,30491,30537,30434,30495,30312,30309,30413,17370,17357,20389,20390,20384,24407,56089,21364,20436,55887,55815,30305,30286,30262,30287,30295,29655,30605,30289,24537,24558,24569,24911,24545,24547,27286,27285,27294,24482,24498,21355,29601,21025,55811,24341,27068,24301,24305,25211,25209,24333,24338,24298,24624,23750,23403,23384,27554,23410,23393,24793,23391,23329,23332,23320,23322,23321,23307,24781,23345,23355,27689,27683,23341,23346,27687,15674,15572,15574,15579,15576,15551,15364,15352,31069,30509,30508,30506,30527,30528,29930,29956,29924,29922,29955,29954,29967,29966,29965,29963,29870,29992,29991,31093,29880,29979,29980,29911,29905,30256,30255,30300,30251,30285,20316,20680,20343,20712,20681,60843,20530,38808,38801,20371,25138,20373,20374,25093,38695,20206,20279,20261,20237,17210,17303,17216,17401,17395,17299,17390,17393,17298,17301,17309,693,695,1868,1019,2117,2121,2156,2133,2123,2494,2131,3910,2497,2499,2027,1954,1361,1360,1969,2094,2058,1971,50432,354,355,353,411,987,380,374,382,1152,1132,1126,356,42539,42538,42455,43785,42770,42686,42684,44521,44097,44111,43860,44036,43801,44084,44083,44134,44129,44087,44085,44086,44131,44082,44098,1127,1115,45322,46045,50404,50405,50455,46621,46625,45960,45961,46066,46067,46068,19173,16938,16928,17063,17134,17054,16934,42651,42652,42663,42682,42683,42700,42615,42645,42727,42726,42707,43645,43763,42526,42764,42465,42528,42463,42458,42655,42653,42533,42459,51800,46330,46299,46328,51790,51820,51816,51822,54313,54312,54311,48516,48588,48391,48513,48514,47874,47871,54335,3959,3799,2606,3946,3907,3935,3934,4500,5746,47676,47693,47671,47700,47890,3783,3789,46796,46809,46807,46810,3951,3844,3843,3850,3863,3884,46865,46875,46868,15324,15306,15303,15724,15254,15703,16329,29981,14107,14106,14242,14241,14260,14256,14203,14207,15334,14155,14240,14239,14248,14105,13719,22760,13676,16290,13713,31578,2526,2480,31576,2489,2490,2160,2162,2158,2157,2050,2100,2101,2135,2179,2169,1992,2080,1383,1308,1307,46073,46075,45901,46290,46427,46430,52006,46095,46084,46096,46402,46413,52e3,51704,51832,46391,46390,51827,46392,51926,52011,51983,51988,46383,51722,51752,46384,51763,49179,49203,49250,49188,44378,49187,49171,49168,49169,43972,49173,49184,49200,49252,50309,50304,49343,49344,44716,44720,44742,44724,44722,44723,45224,44731,49231,49227,49342,44332,44334,49224,44427,44423,44421,49215,49354,49333,49247,49222,49243,49219,44426,49218,49336,49335,44411,44420,44425,44435,44412,38583,51914,44012,44019,43990,45090,44026,44360,44348,51898,46630,46617,50315,50421,50314,50312,51896,51872,51879,51882,44667,44666,44663,44522,59474,44502,44256,44488,44474,42720,43911,43937,55275,43926,42590,42608,44016,44702,44276,44308,44341,44288,44300,43944,43956,43969,7657,7611,6975,6971,7019,7018,7555,7383,7432,7041,7040,7078,7028,7589,7531,7534,47368,47355,47280,47279,47214,47245,47271,47274,47248,47365,47276,47281,47356,49098,49081,49099,49012,48995,48987,48914,48880,48833,54304,51840,46292,7468,46874,13028,22490,22491,22492,22509,22507,22513,22615,22614,22610,22621,22565,22644,22486,22562,22484,22478,22407,22479,60246,22609,22561,22409,22410,22471,25301,25316,22270,22267,22269,22287,22285,46922,46980,46979,46978,46986,46981,46918,46921,46994,59772,46961,7678,47255,7906,7557,47250,47249,7584,7559,7652,46983,46984,47634,46890,47636,47631,46889,47627,46872,46870,54454,54453,47867,47688,47720,47721,47661,47674,47635,47673,47681,46817,46789,46816,46788,46787,46794,47619,4513,15953,15942,15931,15946,4490,5747,7045,7066,7065,47413,48949,48948,48947,48946,47391,47388,47360,47358,47382,47278,25372,23607,23589,25097,25079,23241,23173,25513,25271,25354,22298,25351,56333,23309,23303,23308,23301,23666,23300,56182,56138,23567,23298,56345,56144,23555,23559,25361,12590,20639,20603,20640,20641,17005,17003,20744,20670,20710,20705,20349,20340,20331,20348,20351,20356,21512,20688,20695,20703,27354,30437,30473,30505,30460,30463,30483,30559,27355,27358,30435,30492,30411,30412,17361,17358,20444,20383,20445,20448,55838,56478,56091,30264,30288,30263,24561,24559,24554,24567,24544,24546,24296,23399,23389,23388,23344,27501,23325,24780,24789,23334,23326,23311,23338,15665,15671,15673,15577,15353,30565,30566,30567,30563,29771,29959,29952,29953,29921,29968,30232,30235,30236,30254,30673,30302,30299,30260,30284,30306,20330,20344,20717,25128,20292,20311,20313,20679,38689,25106,25137,20370,20378,20381,20360,24416,24417,38803,38679,38802,25831,25741,25724,20217,25728,25765,20258,17392,673,2175,2192,2193,2477,2194,2476,2191,1865,2154,2514,2125,2724,2057,1902,1201,1300,1930,1945,1306,1896,2086,1345,1355,1354,1350,1358,2065,2093,2166,2163,2164,994,996,995,1010,997,990,336,1245,1064,1259,44107,44105,44126,50470,50486,50335,1120,1121,1119,321,323,341,369,370,306,307,1002,1001,1140,357,42536,43753,42660,42697,44102,44089,44100,44099,44117,42742,43790,44130,44090,1125,1111,44612,44573,1088,1089,1169,45970,45638,50416,50435,50403,46622,16932,17065,17064,42649,42662,42701,42679,42671,42680,43863,43683,43762,42527,42765,42766,42467,42431,42535,42444,42767,42530,42761,42760,42532,54265,54254,54266,54253,51807,46333,46331,54302,46298,46303,46389,46307,46334,51817,51821,46336,46335,54324,54325,48511,54308,48839,48849,48844,47704,47868,47703,47873,54451,54452,47937,47872,3882,3947,1037,1032,1045,47677,47699,47701,3790,3791,47613,46811,3900,46880,7692,46863,46866,46876,46877,15307,16325,29990,14261,14210,14166,14243,14245,13728,2479,2198,2182,2159,2097,2099,2141,2051,2153,2081,2082,1986,2178,2185,2079,2090,1353,1265,1076,976,1258,1257,1198,1197,1933,1907,1906,1296,1189,1191,1281,45899,45900,46428,46416,46094,46099,46098,46100,46101,46080,46097,46105,46409,51980,46205,51691,51841,51823,51835,51990,46394,51982,51996,46406,51998,51999,51723,51725,51721,51724,46385,2054,49206,44002,49166,44392,49189,49170,49175,49185,49249,50288,49346,44108,50321,50305,50322,49348,44726,44431,49214,49244,49245,49359,49334,49221,44419,43992,46618,46616,50493,50422,50427,50372,50311,50285,46594,46613,50414,50415,51873,51886,50423,50424,44525,44506,42718,43925,43918,42588,44273,44367,44316,43954,7677,7691,7379,7068,6974,7556,7689,7036,7021,47203,47176,47211,47175,7680,7579,47204,47367,47273,47282,47242,49064,49063,47354,47159,49014,49005,49004,48972,48843,48505,48808,46883,22489,22494,22508,22564,22551,22611,22624,22408,22559,22617,22608,22326,22324,22325,60244,22281,22209,22221,22274,22220,22219,60230,60157,60245,60252,22019,22037,22069,22051,22072,22071,22265,23024,25300,25312,22223,22279,22250,46977,46975,46976,46995,59398,46996,59152,46973,7659,7653,47272,47210,7645,46982,46917,46985,47889,47633,47705,47691,54471,47685,47682,47658,47659,47683,47655,47656,47737,47730,47652,47739,48322,48323,59819,47663,4493,7033,7017,7046,48963,47417,47386,47361,47380,23590,25099,25090,26172,25096,20451,25084,23248,23272,23271,23270,26071,26072,23277,56003,56008,22293,56148,23562,23287,23289,23292,23294,23279,23297,23281,23664,23280,56141,55982,23564,22252,20604,20644,20643,20601,20662,20663,20642,20745,20711,20362,20336,20352,20704,30475,30481,30503,30502,30533,27342,27371,27339,20391,20395,20396,56276,26171,55832,56479,56447,56449,55889,56503,20463,20453,30290,24571,24566,24553,24555,24551,24303,23401,23390,23397,24787,15544,30564,30560,29960,29923,29962,29961,30635,20335,25135,20363,20315,20317,20326,20319,20713,20345,20312,25130,20308,20550,20546,38683,38805,38807,38809,38806,25136,20382,20375,20376,38706,38947,38694,20208,25797,20210,20224,20259,25740,20220,1382,1341,1340,1870,1869,1022,2510,2505,2509,2506,2492,2491,2126,2129,2721,1901,1932,1898,1897,1935,1951,1950,1937,1949,1302,1253,1305,1254,2083,1057,1309,1058,1252,1059,1311,1357,2140,2147,2146,2089,2165,2180,384,404,403,399,991,982,983,992,993,981,1065,1063,332,330,335,363,334,1167,1194,50320,361,359,358,1086,1098,1100,1085,365,327,367,371,385,311,312,313,326,325,324,331,309,1034,1027,1007,1012,1005,406,988,985,1e3,1143,1099,42457,44530,44532,44118,44110,44103,44091,1134,1124,1294,46063,45965,45645,44567,44574,1087,50417,50402,16933,42732,42735,42673,42644,43665,42762,42763,42461,54252,46332,51805,51801,54264,46302,46306,48882,54449,54334,47869,1053,1891,1050,1042,47689,47679,47702,46792,46791,3908,46861,46869,46871,14244,14100,2199,2152,2143,2052,2149,2161,2150,2138,2151,1987,2186,1972,1351,1196,1193,1904,1899,51702,54262,51991,51989,51995,46200,46366,44381,49167,44001,49190,44119,49246,46586,50368,50360,50342,50343,50355,50361,50383,50316,50384,50386,44524,44661,43921,43917,44290,7654,7380,47243,47244,47216,47215,47283,49065,49066,47343,48932,47314,47327,47239,47240,47285,47145,47105,47103,47116,59273,7679,46968,48321,48325,47741,47736,48366,48365,48357,49008,49083,48978,48977,48986,48983,48856,48854,48837,48830,22493,22612,22633,22630,22613,22555,22629,22616,22518,22558,22282,22523,22329,22197,22336,22184,22258,22280,22106,60163,60218,22264,22065,22262,22068,23026,25304,22224,46920,46974,59150,59764,7580,7569,47209,7648,47706,47680,47684,48586,48396,48381,48393,48326,48329,47732,47743,47725,47657,47660,47654,47653,7034,7030,48973,47359,47351,47277,25102,20449,25095,23243,25505,23276,23282,22295,24428,23286,23304,23295,56364,55989,20666,20366,20357,30504,30568,30531,30529,20443,20455,55852,56506,20458,30291,23398,23396,30534,20332,20341,21453,20723,20346,38686,25109,20204,20276,25743,20288,25120,25115,25118,25122,1380,1867,1864,2508,2487,2515,2485,2486,2507,2488,2122,2725,1895,1952,1946,1953,1928,1304,1303,1255,2085,2084,2144,2168,2092,2091,2145,2181,402,401,979,978,1069,1249,1247,1250,1246,1062,388,387,1168,1081,1082,1165,972,386,398,333,329,368,1033,1013,1885,1009,1011,1029,405,989,986,1008,44088,44106,44101,44109,44104,1116,45651,45646,45652,1293,45647,46558,45962,45964,46046,45968,45640,45639,44566,44580,44572,42744,42734,42731,42672,42669,46329,48881,48850,54450,1312,1887,1044,47692,3901,46814,2183,2189,2095,2148,2139,1359,2187,2190,1989,2066,1310,1056,1077,1192,1900,51834,46208,51703,49192,49186,50365,50366,50389,50388,50369,50364,50313,44523,7378,47241,49068,47324,47322,47323,47344,47352,47353,49067,47318,47223,47286,47237,47226,47220,47329,47330,47336,48871,47071,47069,47070,47072,46999,47126,47125,47146,47124,47111,47108,47107,47110,47099,47115,48304,59816,47117,47121,47118,47114,47122,46967,47102,47097,47100,47098,47074,48307,48308,47738,47219,47217,47177,47147,47157,47148,48364,47287,47337,47191,47192,47193,47154,47183,47149,47150,49007,49002,49e3,48975,48934,48933,48931,48980,48997,48927,48981,48998,48878,48861,48855,48835,22369,22626,22560,22519,22480,22283,22271,22337,22183,22181,22180,22527,22631,22554,22105,22052,22025,22335,22266,22268,59369,59301,59313,59401,59288,59317,59320,59321,47208,48383,48380,48379,48377,47733,59776,59266,7032,25103,20446,56366,56361,20359,30532,30507,56454,25133,20709,20714,20715,20716,25744,25111,25767,25129,25126,2478,2481,2523,2615,2517,1948,1030,1060,1061,1251,2167,400,397,396,980,1066,1067,977,395,362,390,394,1083,391,360,392,1080,364,366,328,1028,984,998,999,46062,45963,45969,45641,45642,45644,45643,44128,42745,48851,1055,1040,1041,47690,46867,2184,2188,2077,1078,973,50367,50391,50371,50393,50411,47284,47346,47389,47340,47325,47224,47335,47339,47113,47101,48309,47186,46998,47195,47218,47198,47202,47201,47178,47158,47200,47180,47331,48327,48328,48317,48346,48345,48360,47155,47179,47182,47153,47184,48359,47190,49009,49001,48941,49082,48923,48876,48875,22372,22179,22627,22625,22520,22375,22376,22522,22521,22338,22526,22552,22553,22261,22201,22632,22103,22027,59309,48376,48369,48371,48382,48384,48378,59270,7031,30530,25132,25134,25113,20724,25124,2483,2516,1938,1031,975,389,1084,1079,44127,44139,1043,50392,50410,50413,50385,47348,47341,47342,47338,47320,47123,47109,47112,48349,48314,46997,47194,47199,47234,48350,48320,48344,47156,47197,47189,48356,47188,48976,48945,47313,48929,48872,48930,48928,48388,48859,48860,48866,48858,60247,22374,22371,22062,22557,22525,22273,22205,22339,22370,48370,48374,59267,2482,2484,1038,974,393,44140,50412,50394,47328,49069,47321,48936,47151,47120,47073,46969,48869,48867,47300,48868,47233,47304,48319,48351,47196,47185,48353,48926,48982,48387,48863,22373,22056,22055,60491,22053,22556,22524,22340,22334,48372,1039,48870,47306,48318,47302,47301]},{name:"Object_5",count:63975,indices:[36570,37896,32392,36792,33522,21476,35838,35566,36916,33867,36687,36682,36787,36789,36681,36937,21369,36588,33700,33625,36579,33664,33667,34455,36756,36833,36661,36657,35839,33992,35581,38499,38507,38517,38516,21367,38519,37895,33629,33627,36838,33640,33624,33665,36562,36879,36490,36553,57895,36934,63359,63356,63475,63347,63821,63490,35561,35682,35193,21471,36659,38496,35567,38508,38510,33525,33441,37924,32821,37893,36737,36736,33651,33642,33633,33646,36764,36905,36580,36645,33621,33684,36650,33663,34066,36075,33782,36482,36920,21372,63828,36227,63355,35687,35688,36228,35560,35249,36819,62569,35192,35248,35247,35206,45235,45233,45215,34297,34303,34321,34320,34078,36722,34315,34313,34316,34317,34740,34137,34312,38660,37965,33766,33917,38489,38483,33868,35681,39200,39185,38649,39202,38497,38656,19886,19897,19882,39151,32810,32813,33509,33510,37930,32887,32882,37891,37729,37627,37878,34284,34282,33654,33650,33630,33622,34127,33658,33652,34804,33680,33669,33675,33673,33688,36612,33689,33998,36479,33752,33671,33779,33783,33775,33790,33772,36282,36073,36281,36074,36082,36280,36299,36487,36086,36239,36085,36284,36246,57280,57331,60771,36935,36929,19874,21174,21375,21376,21377,63332,36238,36231,36286,36237,36232,36229,36240,63822,45225,20140,20592,21683,20473,48063,45259,42418,44268,45244,44978,45246,21482,35255,62636,62732,35185,36821,36828,36827,54746,44956,45216,45253,43872,34344,38476,38495,38484,33750,33753,33914,35690,33996,37945,37946,38511,37724,38279,37894,37880,37881,37976,19877,19871,19889,19879,19880,19875,42454,42415,21434,21436,21395,21364,21438,32900,32954,32897,32818,32974,32933,39179,38801,36793,32871,32873,37892,37938,37720,37879,37905,37704,37683,37689,33644,33645,33649,34298,33653,33657,33777,33691,33765,33786,33789,33776,57958,36087,36068,36084,36070,57277,57830,57275,57330,19876,21381,21370,21384,36921,21177,19890,36283,36285,36241,63343,63329,45198,44947,45231,45263,21474,21871,21877,54778,62624,62600,62641,62587,34726,35191,36825,45241,60779,45249,45255,54832,62630,62629,62627,62639,62662,20601,20141,20144,43833,43794,43835,43623,34277,32436,34179,34283,34281,34157,34160,34306,34229,38595,37942,37944,37725,37722,37626,37596,37721,37726,38280,32811,32812,19873,19887,44270,19870,19956,19957,19999,20605,20607,20164,21444,21362,21393,19959,19958,19949,43727,20606,19960,20115,19955,32956,32932,32931,32905,33519,33518,33513,39183,32814,32819,32895,32896,32917,36718,38291,38286,38282,37931,37719,37703,37653,37993,37964,37702,33693,33690,33697,33788,33797,33804,33749,33771,33769,33763,33762,63365,63368,63367,60697,60692,57274,47875,47872,47878,48093,48094,48086,48083,48091,36083,36072,36069,36071,57282,57954,57953,63370,63371,63407,63373,63444,61304,60188,60190,60181,60189,21382,21371,60272,63748,60282,61419,19865,19872,60403,60404,63322,63316,63315,63451,63324,45048,45286,48066,48069,45087,48065,45275,44937,45168,44934,54150,45194,44943,53647,53670,53646,53675,54115,54112,20019,20023,35256,34738,34734,54742,53618,54740,45093,57370,57369,57371,57372,54829,62565,20147,20148,20645,20149,20113,20591,43622,43726,42379,20644,32391,34280,34275,34276,34322,34135,38596,37995,38013,38592,37723,37620,37947,37939,37950,37952,19878,20001,20165,20114,20111,20116,21383,21387,19903,19900,19901,21391,21388,21394,21389,21386,21385,21363,21365,21361,21437,21439,21443,20002,32941,32903,32912,32916,38807,32920,32445,32928,32441,32800,32801,32799,32881,32955,37927,34044,33794,33767,33761,33764,63380,63398,63377,63441,63313,63426,63423,63428,63430,63437,63438,57400,57836,57272,57276,57833,60700,60400,60398,60402,47887,48084,57281,57908,57283,57328,57327,57289,63369,63436,63366,61285,60221,60223,60224,60332,60579,60334,60289,61610,63421,61413,60667,60664,57266,60674,60341,57263,60656,60193,19867,47883,63325,63327,63328,20594,44944,45085,45208,45166,45202,45196,21477,21480,21485,21491,20011,21487,21481,46924,46934,46920,46925,46932,53818,46916,46913,53804,53671,55082,53648,20074,20080,46831,53802,53810,53809,54124,54121,53808,53812,53676,54109,54063,21489,21868,34736,34733,54744,45258,57970,57325,57985,57975,58019,57365,57368,57317,57312,57311,58028,57719,57723,57725,62726,62659,62663,62657,62652,62723,54805,59226,53865,53623,53842,54097,63943,54068,54067,54066,54848,62698,55064,20646,20590,34279,34274,34292,34311,37994,38e3,38591,37623,37940,37727,37728,38599,19888,20005,20109,20007,20004,19997,19884,19899,19951,19953,21470,20008,21479,20010,20009,20107,20012,20108,21478,21442,21473,21495,39149,39177,32919,33504,38776,32809,32435,32804,32929,32890,36720,33492,63397,63381,63417,63418,63314,63310,63361,63419,60655,60633,57894,57271,57902,57838,57892,57835,60401,60397,57284,57952,57974,57279,57831,57955,63422,60179,61284,61282,61291,61289,60185,60335,60631,60270,60297,60286,60248,61336,59395,60247,61338,61341,19860,60657,63717,57849,57886,19864,19858,60192,60325,60303,60326,60342,47884,47881,45281,45192,18103,23926,24288,23923,46921,46928,53803,53672,20026,53625,53651,54771,53602,53600,54745,54748,54747,54769,46832,53683,53807,53806,53825,53729,53823,53811,53641,54062,53629,53642,53627,53612,53628,21490,34771,34770,34764,34769,34828,34829,34830,34762,34732,54743,54741,62782,63084,63971,57967,57915,57917,57914,57290,57326,57364,57324,57366,57309,57367,57321,58002,57316,62725,57404,58099,36543,58105,62718,63041,63045,57409,63046,63044,53594,53605,54754,54756,53863,54804,53858,59292,59302,62714,62713,62740,62672,62647,62704,63936,34278,38002,37951,20110,19950,21392,20006,32909,32930,33503,32798,32925,38773,32926,32892,33063,33065,32535,32443,62736,36547,34898,63400,63442,63375,63413,63280,63267,63272,63273,63269,63443,63440,63449,63434,63742,63731,63729,57889,57270,57900,57893,60686,57957,57956,60347,60346,60399,57959,57903,57909,57911,57972,61283,60245,60222,60186,60239,60237,61288,61290,60336,60339,60184,61372,61417,60288,60283,59332,59320,60298,61333,19862,63392,63385,63388,57261,57881,57887,60220,60235,45176,23963,46929,53805,53816,53817,53815,53686,53643,53608,53604,53609,53607,53597,53599,53610,53645,53644,53611,46838,46953,53731,53630,20075,20022,20020,20106,25179,20079,20076,24289,21872,20015,34812,34772,34821,34827,34838,34735,34763,53595,62787,62789,54831,53973,54833,57288,57292,57919,57293,57982,57977,57323,57298,57318,57306,57307,57305,57320,57304,57987,57926,57925,58024,54140,57393,57394,57937,57935,57373,57315,57445,36602,58111,63905,62743,62742,53622,59228,63931,62642,62621,62645,62705,62766,62756,62757,53976,62694,62693,62697,53871,53872,62696,62710,62753,62751,62771,34289,34308,34271,25180,25182,21441,32906,33494,32390,32936,33066,33490,33482,33481,63023,63395,63765,63409,63415,63439,57396,57890,57891,57842,57341,57839,57267,57901,60319,60320,60343,60344,60345,57964,58060,57287,59319,60238,60328,60302,60187,60340,61416,61340,60287,59328,59323,60331,19863,57846,63390,63755,60304,45002,23357,23962,45012,46954,46951,53814,53685,53613,53624,53603,20025,20077,20099,20098,20017,20016,34823,34822,34824,34831,34825,34826,34832,34761,62781,63938,59278,53866,59218,57913,57295,57921,57948,57980,57302,57319,57994,57934,57932,58026,58015,58013,58021,58016,57380,57379,57726,57727,57377,57392,57730,57728,58062,58056,58048,57381,58037,58034,58005,57313,57446,58097,58100,58101,34808,57406,62748,53615,59290,63934,62669,62646,62619,62651,62711,62699,62673,62709,63939,55065,62691,62773,34290,34294,32908,33062,33489,62729,58092,63766,57398,58085,58084,58076,58082,58078,57269,57340,60309,60318,60348,60306,60307,60321,57910,60243,59317,60327,60330,60182,60240,60301,60300,59601,59385,19869,60236,63384,63362,57843,45186,45178,24264,45170,45172,25108,23317,46950,53813,53684,53626,54061,53614,20078,34839,59536,53867,57294,57297,57922,57927,57924,57301,57991,57931,57996,57308,57374,58012,57376,57383,58031,57389,58052,58057,58010,58081,58088,58089,57403,58079,58077,57402,57405,58087,58096,58107,58098,54065,57410,53606,53616,62720,62668,62715,62671,62765,62776,57395,58072,60323,60305,59411,60337,60329,60178,59596,59576,59593,59594,63469,57264,45007,24319,53730,53674,59534,59541,59276,53870,57296,57299,57322,58860,57929,57999,57724,58038,57385,58036,58045,57388,58064,58065,58011,57314,58091,58095,59300,62649,62707,60322,60324,60242,59598,45181,53673,59532,59542,59539,58039,58046,57386,57390,58083,58075,58069,58074,58071,60299,57387,58068,60241]},{name:"Object_6",count:8,indices:[2,5,0,1,7,4]},{name:"Object_7",count:42653,indices:[2174,37585,42347,21846,21829,3133,21845,31794,31517,32189,31516,31369,6924,15898,6925,6927,41496,41819,32357,31998,3496,32012,31877,31881,31979,31883,42354,5689,25168,22275,2252,19383,15258,19379,5702,42349,5722,42320,2163,21844,18197,18216,18674,21801,32141,34989,34985,32128,32127,22179,38457,35162,33260,42081,31524,32022,32045,17644,32048,31927,31925,31984,31376,31993,6947,3454,41545,3458,3449,6942,12362,5759,12363,42139,37589,5715,2168,12366,42127,42292,42291,32008,32009,9395,9396,38042,17861,38024,18249,18238,18237,42357,42352,5685,22280,37770,22282,19915,15282,41374,41373,16007,16008,41381,1449,16018,41400,16017,15846,41519,15845,16006,42351,2176,5708,2180,42328,42329,4093,2173,42340,42341,41366,5330,5289,41361,5387,1316,41340,26696,22207,22203,22204,42549,21843,18214,25424,21828,31856,31866,41943,17671,41287,17669,17670,41557,17691,41259,41257,4816,41504,35399,35092,32102,38458,42082,31732,31910,32041,31329,32110,32113,41900,41922,31634,32063,31632,41920,31630,1433,1431,31831,32032,3452,41536,7520,7574,7519,23758,23765,42135,37586,42121,41817,41941,42289,42295,42132,42119,5720,5735,42301,42299,42316,2155,42315,4188,42286,547,25812,26868,25817,23080,9307,9273,25842,18218,19040,18425,18294,18774,18339,2245,15250,42293,15968,15948,19727,19714,19726,41397,41398,41353,41399,1322,5376,1437,1457,16001,15916,16e3,41219,811,41355,41348,1332,41357,15946,15947,15941,15940,15951,16221,15996,16016,16015,15936,15932,1976,41406,16019,4009,41411,296,4087,3745,2033,17735,17732,17731,5684,42343,42342,3741,41382,1335,1312,5392,1428,41338,41261,1002,1004,5204,5202,5253,294,291,17733,35287,33259,35160,35083,35082,35080,22228,34991,42561,42564,22331,22285,22289,22319,21808,21809,42411,42412,30283,42540,42403,21818,22182,21822,21826,21803,26905,22270,22266,25175,22175,42383,42630,22166,22167,26888,35076,31893,31838,41947,41999,31996,17662,17660,41586,17808,17807,17681,17686,17683,17810,17809,17673,17658,41255,1091,785,41505,41502,41507,35140,33257,31331,32039,41904,41964,41961,41925,41960,41962,41924,31663,32161,31633,32068,32152,32069,7809,7534,7818,31931,31880,41247,4829,4827,16186,5263,802,4830,5267,4818,794,19777,12196,12194,15811,7541,7521,26734,31218,23082,26729,42136,42110,42138,41929,42107,41932,41926,41832,41934,41958,41938,2136,2141,5746,2153,2156,5727,42314,2161,42319,1983,4183,19238,19240,19719,19372,19378,19371,25823,9506,9308,9306,9305,9272,25833,18416,18957,17820,18974,18120,17774,19036,18975,18972,18342,18340,16050,16047,16049,16025,1970,42298,5739,16059,15987,15264,16052,16024,1968,16020,15991,15988,15967,15970,15977,15980,5269,1469,5273,1441,5286,1470,805,41370,5276,41389,41345,41343,1321,41341,41405,41686,41403,15927,25742,15926,15924,15999,15923,15920,4843,4844,41220,41221,12188,15852,12190,41390,19885,19884,19728,15939,15953,15961,15954,15960,481,4129,445,41418,4133,442,42317,4181,534,533,1981,4185,4007,4109,42322,348,41334,41332,4085,41428,41424,17734,2250,19042,19041,17411,42348,17469,17730,17420,41383,41364,41313,1295,1296,41448,41452,5397,5429,41432,17756,17757,1430,41336,41684,41685,41415,41308,5176,41310,41453,1285,41311,1291,41286,41263,41275,41279,5175,3742,3744,17755,17867,18148,17859,40194,41297,41473,35289,35307,35091,35079,35075,18962,18947,18948,18825,38046,35088,18226,18227,18220,18225,34990,32138,34992,22201,22328,22304,25172,42552,42554,42397,22158,18193,26894,22180,22168,26885,31839,31867,31889,41950,41998,42008,41946,42030,42005,42031,31830,17856,17858,17804,17805,41290,17806,41281,17651,17672,5252,35308,42092,42091,31829,32154,33268,33269,32037,41899,31631,41905,41956,41953,41979,41963,33271,17613,17624,17620,17616,17615,17605,38461,33291,31654,32124,31656,7559,7637,31953,31956,7641,7558,7656,15887,15886,16206,15896,7523,7524,823,41224,821,820,817,41249,41225,41222,41223,41230,41520,41487,15844,41521,15868,1436,1438,4825,1089,19883,15821,15820,15817,12192,19729,19767,12198,15804,12225,12893,9512,9304,25835,9333,19928,19930,19759,9337,9334,25808,26738,26726,23769,23745,42109,42117,42103,42118,41930,42099,42094,41937,5755,2138,2144,5737,4352,19267,19970,19718,19369,19712,19367,19713,19255,23393,23391,19218,19214,19219,25821,29197,23318,25722,25723,25724,19233,25832,38055,17609,38052,35268,17799,38049,17685,17689,17773,19029,18417,18418,18976,18348,19189,19188,15245,15241,15248,1971,15251,15259,15240,15257,15233,15990,15974,15976,15985,16023,15972,15993,15966,15950,15964,1444,1453,804,41359,1325,41404,41352,41402,41407,15956,15958,15919,15860,41226,41485,15861,41483,41484,15921,15862,15827,15831,15834,15833,41391,15994,15995,15963,15997,15952,15998,15929,512,518,4013,41413,41419,41422,41683,4029,4024,447,4144,4180,524,1975,4123,4124,41426,311,4088,19035,17413,19031,17419,17738,17172,17274,17416,17276,17269,41316,17761,41459,17760,17763,17762,17811,17845,17841,17812,41472,41444,41327,41330,1302,5394,41441,41440,41464,1269,41508,17655,1016,41272,17837,17828,17833,17759,17758,41458,17829,17766,41320,17854,17883,17855,17878,17870,17871,17802,17869,18826,18219,18231,21031,21027,34984,31650,26701,18201,22321,22302,22317,21805,25174,30275,42547,26897,18189,18934,25429,21811,22256,22334,22257,26895,22169,22164,26883,22161,26893,26892,31895,31892,31968,31887,31886,42006,42029,31835,42039,41288,41282,17690,17848,17842,20988,17844,17838,17847,17853,17887,17657,17638,17639,41501,41499,41503,1090,784,4792,783,1226,5249,35145,33258,42093,31373,42041,31986,31822,32066,33531,33533,33365,32074,32103,32077,31659,33261,32186,31613,32185,41897,42084,42090,41957,41935,33247,33270,33276,33294,33292,33290,38459,17618,17640,33384,31978,9326,7518,31969,31966,7825,7643,7536,7646,7557,7570,15882,15881,7540,7572,7537,15879,15876,41494,41491,41242,41523,16187,41251,15875,15874,15829,15806,15808,5222,15814,19772,19880,19882,19760,10492,9513,15809,12894,12788,13153,19936,19228,19751,9332,25733,19934,25735,9518,26728,42426,42593,42441,23215,23214,29209,12009,23426,23390,19968,19212,19209,42133,42104,41959,41927,42120,41945,2132,19715,15982,19710,19730,19257,19946,19959,19942,23222,19634,23221,42452,25820,23356,25814,25841,19232,35180,36104,17684,17611,17608,17612,17680,17860,18973,18959,18949,18823,18960,19030,15246,15242,15989,16021,5277,5298,5281,5359,15931,15917,41518,41486,41233,41241,41204,15858,15857,15847,15848,15850,15851,15826,15828,4025,4027,4012,4131,355,312,2036,4122,17412,17414,17418,17736,17737,17403,17729,17742,17173,41321,41322,41318,17813,4935,999,41298,41427,1301,1307,41434,41443,41323,5205,5178,1273,41277,41280,17835,17819,17817,17830,17827,17768,17816,17850,17879,17876,38019,18335,18796,18945,18821,18822,18828,18213,18217,18776,18780,18781,19175,18786,18778,18816,18824,21030,34988,22170,21825,22281,26914,26911,22213,18199,18212,18210,22206,25430,22332,26891,22154,42002,42040,42026,42028,41284,17846,17852,17646,17674,17675,17678,17676,42024,31911,42025,33363,32121,41916,41915,41909,41898,42083,41906,33293,33219,33218,33216,33373,33518,17622,33295,17617,17619,31900,15884,7522,7542,41495,41490,41244,41500,41253,15805,15816,15835,15840,15869,15870,15837,19766,19761,19763,19768,9515,19739,19740,25731,19736,19735,19749,9312,31219,23767,42622,23424,23105,19211,19215,19210,42134,42102,41940,15265,19224,19225,19217,23225,19202,23281,23223,23387,42607,23355,23386,25813,25846,25847,29185,25729,38374,17801,18961,18419,15235,1445,1329,15955,15957,19775,12186,15855,530,4138,351,17798,17794,17777,17778,18126,17753,17771,17772,17417,17782,17790,17780,17750,782,4807,4808,41465,41299,41442,41429,1270,5182,1277,17764,17814,17826,17767,17818,17765,18338,18963,18800,18820,18802,18803,18958,18221,18788,21023,18207,18233,18794,18818,18790,18805,18782,18793,21032,35150,18813,22162,18938,18198,22152,22155,26882,42027,42032,41265,41285,41283,17851,17679,17682,17677,42020,33368,33528,33369,33372,33374,41914,41908,41917,41881,41907,33367,33272,33371,33378,33222,31882,31981,31967,15872,7539,15905,15904,15901,16188,41498,12900,15839,15842,15838,15843,19765,19762,19756,19738,23104,19206,19197,19205,19203,19208,19746,19733,19368,19258,19366,19966,19231,23227,23226,42457,23357,25824,23317,29187,16044,15243,435,350,17752,17784,17747,41303,1276,5199,5179,18819,18954,18953,18222,26681,21022,21024,18777,18804,18784,35147,41975,41965,41918,41966,15900,15903,15807,15871,15841,15818,19764,9315,9325,9546,19237,19949,18768,19703,19702,19254,19709,19707,19732,25727,42619,23280,29186,42421,23316,432,4125,4111,17781,1275,18831,18950,18952,26691,21026,18795,18812,15902,9327,19234,25716,25712,25714,19742,19737,19743,19706,19731,25831,23292,23291,42617,4137,25708,25705,23297,19741,19734,19252,23265,23279,23382,23294,23368,42433,23302,433,23380,23315,23365,23381,29184,23378,23377]},{name:"Object_8",count:27283,indices:[8477,8481,4746,22191,4213,8584,17219,8563,8642,4184,701,1575,1384,1573,19706,24386,1583,23742,1579,4974,14059,1474,4934,1570,5996,1567,1530,3980,20166,3910,18828,8489,22181,8488,8465,8612,8722,8625,9235,1018,9232,8367,8659,927,871,8653,8474,8343,762,8344,6118,6600,6602,1476,1478,14014,13186,12137,13417,11474,5125,5080,6271,6276,4955,15264,11704,2541,3357,4984,3823,3978,2859,18862,24393,8487,21607,1590,16046,8621,8719,8648,8495,9403,9404,8941,8781,8485,8498,8651,8348,8350,8472,9711,884,8346,8483,733,880,700,676,9210,9218,9294,8947,5217,6246,4914,708,711,738,716,804,726,6126,806,807,5483,6091,5616,4268,800,1475,14715,11253,12786,11165,4851,4891,6615,6344,6336,6329,6340,4180,4323,3278,3774,4462,3285,3119,13220,14357,13221,3345,4641,2664,3868,4645,3867,8826,8756,653,8910,8746,8606,659,1563,1562,2341,2335,1186,1189,1183,1566,19814,23710,8491,8497,8646,2487,17232,20072,3851,8592,8617,8616,8618,8620,8619,8494,8721,8782,8780,672,8640,8691,7375,735,8820,8806,904,857,863,710,838,840,9231,6270,754,755,846,707,714,743,724,719,717,747,728,4972,885,5634,5269,4733,6289,6293,6372,6370,1473,1472,11256,11264,11222,13644,11158,12197,1244,13284,13652,11296,11078,12539,6156,6286,6445,6343,5991,1488,6608,1521,1484,1486,2390,3358,3282,5028,11700,16129,14354,4380,4526,4578,4195,4577,8588,2506,3845,2683,3301,3862,4048,4185,8604,658,8762,8908,8598,8600,1482,1480,1227,1471,14707,1577,2005,1124,2178,1574,2329,2161,2060,19267,8496,13692,12531,13680,14867,17217,21609,2478,3445,2671,4595,4596,1869,1875,1880,2475,8586,8614,9260,9256,932,9216,9093,8783,8786,8909,956,8692,9441,8694,8695,737,712,8759,9765,9269,9071,9280,429,412,8788,406,9254,9117,8724,8723,9012,4900,6462,4962,6409,751,702,721,722,746,749,803,6244,5755,4814,4792,4906,4803,4795,6471,5209,14504,11232,11161,12169,13132,14750,13576,13100,6158,6610,1487,4970,15241,14403,4340,4136,4216,2923,2514,2697,2702,4592,4181,8603,432,657,954,9443,952,1491,1192,1477,1196,1492,1494,1279,1200,586,579,1704,1701,12051,11321,13080,12775,2177,1571,2153,2053,2216,2213,1789,1762,2180,2002,2164,2143,1133,2160,1767,19732,12617,13434,14879,12426,14858,12191,12194,17221,2562,3306,1582,1396,2106,1770,2127,1988,2526,8718,9460,8712,8716,9165,9283,9281,9222,9239,9100,8990,9241,9228,705,869,713,8737,9161,8888,9394,8886,9392,8892,9046,9104,9229,5219,6296,742,744,853,752,5702,4925,6260,6262,1498,13159,11111,11211,11294,14842,14289,14960,11637,11604,4975,14886,4235,4153,3356,3286,4617,8863,8844,9312,662,8595,8597,9314,8701,9445,1485,1495,1499,2219,1797,584,580,1792,2313,1240,1506,1508,2376,1503,1206,1502,1505,1208,1801,1202,1799,2228,1619,1622,2297,2303,1884,2116,13356,14731,2174,1939,1973,1764,2255,1659,2114,1896,2159,494,1634,1644,1783,1787,12459,12123,14864,11531,15472,12543,12556,12332,2527,4538,2471,3089,2465,1156,2080,1888,2501,2684,8985,9290,9044,9072,8978,9401,9234,867,873,8822,9135,9113,745,4930,1501,1514,1513,11227,11511,14973,15319,14522,15901,6049,427,951,8906,9378,660,8596,8704,9388,8766,9456,8698,1497,1493,1793,2381,553,1210,12610,2295,2292,548,1803,13706,13701,2238,2026,1856,1587,1839,533,1812,1617,532,2248,1820,2301,1798,2113,2146,2175,1765,499,497,1654,1773,1686,2157,495,2321,2322,1741,588,2162,1785,1788,1641,13863,14920,12692,2570,2598,2462,3837,3087,1164,2130,2120,1585,1580,9274,8776,9132,9285,9284,940,852,13299,11429,14941,15528,15171,15147,15313,15339,15399,14944,14103,16076,16057,16081,11577,11566,5031,948,9310,9303,9305,9300,9287,9386,8591,8615,8593,8708,1481,2382,587,1719,2230,1809,2138,1929,549,1815,1814,2284,529,2283,2249,1257,1626,1796,1632,507,1689,510,1633,1638,14898,15051,16084,15154,14288,12730,3457,4536,4005,2477,1945,1841,1584,2121,9265,14974,14965,15625,15975,16049,15307,16092,14096,11418,16037,6175,8902,946,944,9452,8703,942,8707,2236,1807,2351,1964,1858,1912,1857,2246,530,1598,1749,1597,531,1606,1731,1615,1648,1697,1775,2079,2275,514,15073,15228,15210,15294,14279,15582,2437,2349,1840,2119,2118,15865,14940,8901,8589,2141,2139,1818,1608,1613,1733,1629,1745,2191,1777,1776,598,620,1780,1695,604,15263,15133,15592,14983,1958,9307,1616,1611,619,2271,606,602,15184,15540,8899,1725,614,15460,1825]},{name:"Object_10",count:39839,indices:[15693,15692,15282,11616,15290,15498,15286,15283,15574,28012,27456,28017,39168,39067,39061,39135,39269,39578,15434,26678,26684,27197,27187,27152,16380,16378,16415,39184,39406,3388,39309,39333,11499,12418,3057,6148,2403,8982,7679,7680,15273,15497,15288,15285,28015,39066,39638,3311,39668,3375,2952,39753,3357,39718,39516,39644,16681,17303,8952,39074,8996,39329,2970,9115,8858,8862,8851,6593,6179,8076,2336,7778,2153,9132,9126,39190,8950,39201,39077,39076,39345,39208,39359,8850,2946,8847,8864,7659,7711,2275,11446,2270,11464,11421,11466,7698,11450,11453,15274,15492,15450,15571,15570,39213,15828,39062,39072,39624,39586,39588,39707,39620,15549,15696,12827,12825,15910,16386,8972,8973,8968,8951,8960,39277,39212,39350,12433,12760,12757,11479,3333,12420,2979,3063,3316,12424,12429,12431,8846,8170,11495,2955,8822,3006,3393,2944,8836,8875,8828,8989,6193,6196,9136,8860,6044,6192,15775,9027,9111,9034,9053,9062,9058,9044,9054,9048,9046,15382,15292,15289,8966,9133,8958,39078,28028,39348,8863,8866,7714,11492,7725,8094,8084,8082,8042,7696,7692,11417,11461,11458,15551,11430,11428,15591,11427,39308,39293,27158,39517,39615,39519,39511,12479,39610,15694,12458,12468,12460,17300,17297,17555,17295,16595,27143,27361,26919,6597,39290,39210,12428,12436,13361,11777,3345,3228,2993,2988,2976,12427,7754,8142,7757,7758,7729,3358,3359,2963,2965,2950,2938,3395,8994,8854,8859,6185,9379,9174,2509,2407,9088,9277,2581,2517,9172,2582,2508,2507,8877,9385,9161,9382,15323,9159,15280,15435,9025,9051,9554,15773,15386,15389,9085,9559,7741,8080,7750,8155,7753,15279,15305,15375,7850,7662,9253,9140,8967,8855,39203,8865,8867,11498,11522,11521,11519,2225,11576,11801,7737,7661,11473,7651,7685,11454,11472,15493,12953,13163,15582,15686,15588,15605,15589,15569,15573,15575,11676,12141,11680,11432,11642,11404,11438,11426,11440,11441,2273,2271,11425,15501,28021,28013,27995,29773,27997,39515,17309,17226,17229,39503,39585,39636,16416,16423,12942,9831,9863,12799,12469,12478,2702,12831,9962,2911,13246,2759,12772,17304,16425,27150,16371,6099,12425,11480,11494,3350,3340,2977,3227,3317,3e3,12763,12440,12437,8839,8842,8872,8838,8936,8946,8948,8145,8801,7752,8568,2583,2592,8141,2536,8798,8834,3363,2960,2930,2966,2937,9096,8645,2411,8944,2412,2423,15329,15321,8924,8931,15331,2580,2593,2397,9036,15384,15750,9065,9071,9076,9080,7728,7746,7745,2313,2312,7813,7775,7774,7675,7672,2314,15276,15767,15376,8359,7842,9402,9504,15306,8964,28030,8868,11524,11526,11917,11915,11512,11813,11520,11516,11514,11530,11531,12712,11535,11537,12370,12371,11799,12142,7688,8460,7690,7683,11415,11455,2870,12648,2823,13146,2822,2879,2824,2825,12377,13031,13171,13002,12958,2789,2793,15577,15604,15550,11646,11397,2269,13011,13062,12330,12355,11407,11444,26599,26603,26604,26605,28022,28023,28019,39592,39671,15832,39739,39597,15830,15849,16018,39669,15843,18804,17095,18805,16321,15929,17050,29575,26594,27798,28004,28002,29482,28009,28313,26997,27449,28245,26983,26939,26940,26948,26878,16106,16107,27290,26902,16127,16129,16114,26891,27998,28039,12806,12816,17310,17311,39582,17316,17264,17251,16020,15835,18810,18809,17248,17289,17286,17329,39508,39520,16148,17550,12459,12456,12943,12803,12829,9933,12835,12838,12442,2802,2765,2763,2758,13158,12782,15916,16109,16227,16160,2980,3335,2974,12457,12441,12778,8869,8566,7762,8134,8711,9453,7766,2574,8879,8825,8908,2956,2437,2414,8874,8646,2586,15802,15377,9576,9078,15392,7731,7764,8562,8068,8393,2311,7638,7666,7671,7645,7937,7859,7665,7635,7844,15278,15299,15275,7834,9399,9404,9405,7845,15320,15354,15355,15373,27979,27978,28032,28034,8843,12733,12750,2819,11517,11817,11506,11528,12367,12380,11918,12408,12374,7691,2871,2821,2873,12704,12715,12287,12325,12323,12643,2848,2828,12386,12316,2792,2826,15603,15689,12096,12354,11395,13177,12083,26762,26763,27967,27992,27968,26757,27951,27953,26621,26614,26610,29588,28001,27945,27942,28026,28020,38641,38634,38642,18931,39594,39690,39607,39641,38635,16218,38640,38639,17097,16320,18930,16989,16328,27098,16326,16318,16319,18798,15928,15820,29568,29564,38947,29701,29820,28008,28265,38951,26989,28308,26916,26895,28041,27991,12819,12813,12808,9952,9947,12823,17314,17327,17285,17283,17267,17221,19012,17230,17228,17292,15819,26591,18553,17302,17290,16212,16166,16206,16162,16146,16152,16209,17512,16217,16222,9861,10017,12804,2757,13008,2910,12854,13292,12859,13098,12833,12840,12826,12903,9948,2767,13247,12448,12447,12776,12455,12451,12767,12452,12770,12463,17305,26986,16105,16111,16112,12462,12443,8786,7761,8563,9454,2561,9455,2577,2575,2535,2560,2534,2569,8719,8913,8915,8823,8917,8795,8909,8896,2959,3381,2422,2410,15372,2515,2518,8887,8890,15381,9063,15390,15395,15398,15396,7738,8066,8326,7636,15322,8356,15374,28037,12744,11913,11820,11496,11513,11805,11534,12376,12416,12415,2874,12710,12384,12647,2851,12321,11574,2827,15607,15680,15667,15594,13007,15682,15552,15554,15669,15668,11649,12082,11543,12307,27959,27980,27962,26759,26612,27943,27949,26753,29476,29584,26731,27934,28040,39672,39745,17029,27100,15958,16449,26880,16100,26879,27084,38942,27003,38948,26979,16990,16091,16317,18934,15817,39001,29569,27827,26819,29489,26904,26899,16124,26932,12898,17328,17326,17325,17320,17280,17279,17262,17277,17318,17322,17224,18562,17261,17252,17296,17301,18937,17066,15833,16e3,17074,16210,38633,16200,16202,16594,16154,16151,2820,2798,13289,12849,2701,12785,15655,12765,12454,12784,17552,28255,16108,2998,8835,8789,8567,8791,7760,8565,9451,8559,8558,8569,2568,9444,7810,9448,15353,15379,8583,15378,15399,15394,7805,15298,28038,27975,27989,12745,11503,12373,12719,2850,11575,15684,15672,15652,12862,15555,15557,15567,12311,27964,27981,27957,26735,27946,29585,26590,17026,16506,27277,16096,26881,27847,27081,27085,26830,27753,26977,16288,16077,15999,38950,29700,27935,16539,26937,26875,26874,17273,17227,18812,18816,17220,17231,19004,17246,16163,16155,12861,12868,12873,12876,13269,13096,27195,27188,28261,26987,9462,8555,9464,7812,8332,8392,7809,15356,15400,15393,15380,27970,12700,2791,11540,15683,15676,15671,15670,13295,12845,12855,15654,15653,15649,12866,15559,15558,15561,12844,26732,16085,15960,26869,26595,27087,26824,26865,26826,29492,26848,26592,27323,26928,26889,26931,17268,17222,16015,16012,15842,17241,17253,7769,8709,15371,12318,15679,15562,15566,15556,27932,16286,26832,27004,27654,27844,26859,27090,26929,26876,15723,15565,15564]},{name:"Object_11",count:338,indices:[93,91,89,68,66,64,20,96,100,78,79,76,260,72,71,70,102,288,290,177,98,85,86,87,80,82,69,31,32,34,254,215,255,117,146,128,335,239,241,240,314,43,42,46,39,157,158,48,257,63,209,50,307,51,110,55,53,302,289,287,94,83,283,90,259,62,60,22,25,18,17,243,12,10,264,74,75,77,238,8,9,232,6,27,28,2,26,330,150,119,5,327,35,316,137,326,36,320,318,47,227,49,44,37,333,334,336,103,104,286,275,194,84,188,183,58,251,249,21,149,147,247,14,73,268,208,206,131,112,337,0,226,321,136,319,41,294,171,109,270,193,282,281,174,54,161,306,303,164,23,16,266,198,328,120,121,325,99,173,298,106,277,159,234,293,169,166]},{name:"mesh_7",count:9599,indices:[2127,1964,2317,1733,1021,1735,3148,6568,3156,3824,3942,3940,7816,2237,7815,8142,8139,1936,1076,1894,1056,253,656,277,657,255,257,2012,1955,646,1585,1583,1782,7805,2363,2471,4560,4540,106,3146,1675,1017,129,128,1180,1117,559,549,545,5911,788,791,2085,3104,3102,7889,8039,8121,3106,8122,1055,1129,1130,1125,1023,1024,1729,1089,2500,1739,1015,1657,701,561,563,659,1002,1005,1001,7790,7789,7767,3122,2371,7721,7794,1781,1779,1806,2385,1424,1431,1430,1423,2451,4520,4522,4385,8375,8394,8238,8321,8251,8310,4563,4565,98,361,3905,4863,4276,4273,4272,4248,8252,8254,8247,6569,8244,8373,8242,7677,1490,7657,3155,3154,3147,1642,1004,1006,700,569,548,773,4040,4031,3626,2038,1873,2039,2018,2048,2047,2050,2049,2009,2036,2149,2030,2033,2032,2098,2101,2055,2052,1962,439,2040,2143,3270,3271,3272,3274,3240,3241,2225,2224,2210,2226,3283,3282,3268,3286,3190,254,259,1126,1934,1927,1090,1054,1790,1777,1784,1789,2492,2494,1761,1726,2448,1749,1751,1737,1728,1760,1766,1767,1753,1926,1928,1923,1075,1046,539,9261,455,601,602,509,647,424,422,649,648,1896,658,4024,4025,4026,2019,2021,2187,2372,2373,1817,1815,2170,7806,1778,2466,1610,970,972,946,971,1003,1437,1466,1436,996,998,973,969,999,993,992,975,1428,1429,3837,3835,2628,2684,2658,2791,2627,2611,2609,3467,3459,3458,3453,2607,2606,3461,4083,4085,4084,4352,4349,4580,4577,4576,4279,4564,3996,3999,4e3,3928,3991,3927,3926,4871,4878,97,4864,4867,2591,2582,2584,2594,2578,4277,3158,2538,8274,4297,8263,3162,8260,3167,3165,8269,8322,4331,8250,8249,8241,947,974,7655,7688,7690,1427,7699,7662,1465,1417,3287,3361,3362,3348,3347,1008,242,41,47,44,39,7891,2279,2220,8968,8967,3093,6299,6298,560,546,571,6313,6311,3541,6314,771,606,607,4032,4033,4060,4059,4052,4089,4053,2207,2151,2229,2147,2208,2209,1872,2132,2046,2017,2027,2016,2013,1868,1867,1844,2028,1861,2051,2045,2102,2103,2023,2022,1958,2057,2043,2054,2089,2138,2041,2053,2140,2080,2660,2681,2665,2659,9198,2702,6186,2671,2653,2654,3281,3315,3316,3325,3331,3308,3309,3246,3244,3245,3242,3243,2223,3110,3115,3116,3105,8129,7928,7890,3095,3284,3317,3269,3266,3189,3153,256,1699,1708,1707,1925,1723,1686,1719,1718,1886,1883,1045,1047,1053,1127,1792,1800,1793,1741,1765,1764,1725,1731,1776,1759,1758,1721,445,446,557,558,550,9318,9290,9257,512,511,510,405,499,505,409,403,490,651,661,407,423,420,427,1950,1998,1880,655,1992,1995,4028,4029,4017,4018,4063,4023,4003,4004,2026,1854,1701,1702,1705,2364,2374,2191,2172,1816,1819,1783,1785,1786,1787,1788,2181,1805,1801,1802,1832,2232,2206,1822,1820,2165,2192,2169,2164,2162,2470,994,1426,3842,3843,3440,3447,3442,3741,3785,3740,2630,2626,2624,2792,6323,3470,3472,2614,2615,3491,2618,2685,4056,4054,4057,4013,4014,4015,4016,2635,3477,3464,3675,3465,3474,3483,4082,4074,4075,3719,3720,4073,3721,3717,3730,3722,3715,3716,3697,3714,3687,4532,4531,4530,4525,4523,4521,4383,4384,8389,8312,4369,4561,4535,4344,4534,4573,4574,4588,4599,3939,3936,3938,3931,99,4235,288,95,100,103,105,4242,4240,4233,4868,2873,2855,2856,2874,3220,3335,3334,2589,2600,2598,2851,2843,2853,2587,3437,2643,2646,2645,2595,2570,2545,4287,3353,3352,3354,3340,3341,3301,3356,3355,3195,3304,3303,3160,2535,2537,8256,3163,8265,3169,8240,1227,1112,904,982,908,948,941,943,938,933,989,7642,7610,3138,6687,3140,7566,7674,3130,7686,3134,1467,1468,3145,7567,1095,1016,1507,1499,1621,132,134,135,133,344,343,392,396,339,338,350,178,73,29,249,247,40,37,8961,8962,8959,2277,2276,8970,8965,9186,3097,9185,6309,6305,570,6315,5906,5896,5521,5508,584,6245,6292,6284,6295,6294,6293,6243,6244,6168,6260,6283,8952,9181,8950,8948,568,567,594,578,826,705,770,761,760,3582,3584,3579,3580,4199,4198,4200,4048,4050,4035,4036,4030,4061,4038,4039,4197,4207,4184,4186,4051,4183,4055,2150,2230,2146,2034,2008,1858,1870,1845,1862,1863,1842,1838,1839,2204,2205,2090,2092,1961,2056,2025,2100,2081,2071,2066,2297,2215,2145,2083,2682,8975,6228,6226,6225,2690,6304,2696,2699,2697,2794,2796,2797,2799,2701,2703,3236,3235,3248,2662,2668,2674,2664,2678,2677,2666,2652,2844,2651,2672,2673,2845,2648,2637,2640,2647,3349,3330,3275,3276,3239,2680,3280,3247,3273,2144,2222,3113,8128,3265,3258,3319,3285,3320,3298,3191,3299,3343,3297,1696,1683,1700,1041,1795,1773,1794,1799,1791,1775,1780,1762,1768,1722,1750,565,566,555,532,533,531,525,447,600,514,603,599,598,528,523,521,453,452,441,534,460,556,551,9263,9292,9322,9238,513,507,506,625,502,418,417,419,623,644,1948,1857,1879,1999,660,4027,4065,4022,4001,4002,3998,4019,3811,4007,3735,4008,3733,1855,1695,1803,1831,2179,1837,1876,1847,1836,1834,1821,1828,1825,2160,2166,2376,2168,3924,3922,325,3902,3761,3762,3751,3765,3763,3750,3777,3778,3775,3844,3780,3774,3779,3776,3385,3417,3367,3374,3421,3744,3771,3770,3772,3709,3710,3769,3768,3773,3745,2657,2655,2629,2631,2790,765,5912,3496,3497,2613,2622,4058,4086,4087,4091,4092,4093,4066,4072,4071,3739,3702,3700,3701,3449,2601,3406,3395,3397,2634,3479,3674,3678,4081,4096,4080,4095,3725,3712,3691,3688,3689,3696,3698,3692,3400,3399,3695,3718,116,113,1308,1158,117,109,8598,8383,8573,4381,4533,4539,4320,8318,8315,4562,4537,4536,4583,4290,4338,4292,4302,4590,4575,4281,4283,3806,3804,3805,3820,3821,3932,3956,3933,3934,3948,3930,149,150,4246,4270,2896,3307,2852,2849,2846,2847,2848,3877,2585,3878,2644,2575,2580,2579,3336,3339,3357,3358,3194,3183,3157,3300,2534,2974,3197,3181,1226,1109,939,881,879,915,980,965,963,1476,1478,1475,906,1477,968,967,964,942,987,7675,1439,1440,1438,7698,3126,3136,1418,1443,1461,3296,3141,3295,3294,3344,3359,3360,3152,1098,1026,1010,1022,932,936,931,1193,1313,1219,1253,1238,1248,1247,1184,1182,1143,1179,1246,1252,1249,1176,1114,1627,1224,1622,130,244,200,195,199,167,164,168,207,62,45,61,87,86,393,85,83,60,58,348,389,345,328,329,332,401,50,48,334,398,136,144,209,158,210,246,38,6236,6240,6297,6402,2060,2077,6301,6296,9361,9359,9536,9374,9372,8945,8943,577,596,597,529,5893,581,582,5507,5501,769,4044,4187,4188,4192,4191,4173,4146,3650,3648,3637,3624,4174,4175,3647,3565,4145,4049,4046,4047,4045,4034,4193,4205,4206,4202,4090,4201,4185,4069,4088,2231,1856,1853,1852,1865,1859,2234,2156,1843,2099,2078,2072,2474,2486,2683,8978,3021,8976,8974,8973,9195,9200,6242,6229,6215,6219,6230,6210,6213,2795,2700,2808,2782,2705,3019,3089,3250,3230,3237,3263,3262,2656,2661,2840,2679,2801,2803,2669,2650,2604,2639,2641,3351,3227,3078,3079,3226,3279,3278,3313,3311,2854,2841,2842,2889,2857,2211,2212,3121,3123,3267,3112,3259,3260,3261,3109,3098,3096,3099,3125,3324,3323,3346,3318,1710,1687,1711,1698,2002,1717,1716,1712,1715,1714,1771,1770,1043,867,1110,1774,1694,1703,1850,1704,1864,1874,1877,1772,1796,1833,1797,1754,517,495,518,526,436,435,448,604,614,530,515,516,464,451,465,442,552,553,457,554,538,6290,6287,6291,6415,6285,8941,6160,9221,6162,9533,8937,8996,9364,9324,9242,9365,9319,421,411,412,415,694,414,622,653,472,432,479,488,487,498,1993,1997,4062,3729,3731,3723,4021,4020,4010,4009,1947,2174,2189,2188,2182,2183,1810,1846,1824,2193,3849,3430,3874,3882,3428,3755,3915,3895,3757,3758,3921,3856,3918,340,3752,3847,3857,3858,3859,3863,3971,3967,3766,3764,3767,3840,3952,3839,3791,3797,3786,3787,3796,3802,3822,3803,3827,3828,3795,3826,3830,3829,3439,3389,3699,3694,3379,3705,3371,3373,3376,3377,3384,3366,3419,3364,3707,3708,3706,3372,3365,3420,3375,3378,3784,3783,3788,3747,3746,2625,2632,2793,827,612,841,774,4203,4195,4196,4194,4097,3468,4101,3488,2619,2621,2686,4107,4068,4012,4067,3732,3798,3711,3704,3445,3408,3457,3456,3390,3396,3393,3398,3404,4076,4077,3734,3724,3726,3737,3713,3690,3686,3683,3684,3680,3682,155,208,4358,146,151,148,8707,8725,8704,8703,4343,4538,4335,4321,4340,4584,4289,4578,4286,4285,4579,4282,3813,3809,3808,3814,3816,3815,3817,3818,3950,3836,3838,3949,4244,147,2898,2895,2877,2919,2548,2549,2850,2563,2642,3875,2593,3306,3305,3212,3302,3193,3342,3166,3168,2899,2560,3210,2903,3185,2550,2554,8267,8305,8300,8276,3171,3196,1641,1230,1322,1258,1173,955,950,958,962,979,984,981,899,976,949,951,953,977,6683,6650,6682,6567,3133,3289,3128,3345,1441,1462,1470,1473,983,1416,3293,3292,3151,3142,3150,3144,3139,1028,1030,929,1031,928,1681,945,921,925,926,934,930,1032,858,1104,927,8236,8234,8235,1315,1223,1144,122,1197,1244,1245,1196,1215,1175,1199,1201,1505,1303,1178,1241,1240,1208,1619,1221,166,165,201,53,42,64,43,63,55,52,84,89,93,92,279,57,326,330,397,335,214,74,213,219,204,211,174,218,172,173,159,153,115,205,203,189,190,202,182,276,31,7,30,25,248,32,3,187,75,33,34,66,76,36,6239,6221,6220,2693,6231,2217,6170,6171,9210,8958,2064,2067,9180,9215,9212,574,595,579,5504,762,759,772,3618,4043,4182,4042,4181,4180,4179,4190,4176,3636,3625,3641,3644,3640,3642,3646,3628,4177,3645,3581,3652,3633,3577,3615,4144,3651,4037,4172,4070,1875,2202,2201,2157,1827,2155,2093,3086,3085,9199,6185,6196,6248,6227,6241,6224,6199,2694,2692,2783,2798,2698,3080,3229,3039,2811,2809,2810,3232,3082,3083,2706,3013,3016,3035,2761,3087,3231,3234,3228,3238,3251,3249,2675,2838,2667,2839,2858,2837,2833,2836,2859,2663,2676,2802,2805,2670,2649,2597,3329,3328,3332,3333,3326,3314,3051,3050,3041,3277,3310,3312,2872,2868,2870,2893,2871,3119,3118,3117,3264,3255,3257,3100,3094,3124,3321,3290,1684,1884,1720,1713,1756,922,920,918,868,866,852,1851,1860,1706,1849,1835,1830,1798,1757,519,494,496,527,493,454,537,458,6164,6279,6282,6286,9050,9534,8942,9176,8939,540,9235,9531,9299,9369,9370,9296,9302,6159,9366,9323,413,624,471,489,4064,4006,1994,2190,1809,2175,2176,3850,3845,3416,3873,3884,3891,3748,3423,3749,3424,3913,3892,3888,3867,3760,3427,3425,3848,3917,3953,3988,3841,3833,3794,3831,3825,3438,3392,3693,3370,3382,3369,3876,3383,3363,3743,3782,2633,2689,2688,2691,2785,2789,605,615,608,781,4170,4102,4099,3486,3672,3469,3677,4078,4079,3493,4162,4161,4163,3499,3501,3504,4166,4165,4111,4159,4158,4112,4160,4094,4109,4011,3728,3800,3799,3703,3450,3388,3391,3394,3736,3685,3401,3681,8606,8681,8462,4356,8378,4353,8376,157,171,142,152,8712,8726,8727,8577,8721,8593,8729,8748,8705,8753,4327,4339,3823,3812,3819,3807,3951,2897,2574,2568,2571,2572,2557,2546,2565,2567,2561,2590,2577,3219,3338,3211,3198,3192,3184,2533,8266,8275,8258,4318,1206,1242,878,954,916,917,902,901,1480,985,966,3127,3288,3129,1464,1469,1037,919,923,944,924,1033,1233,1229,1626,1262,1265,1237,1188,1195,1157,120,1156,1251,1200,1523,1218,1302,1220,1217,1198,191,194,197,206,49,54,94,90,91,193,192,82,327,331,127,137,217,145,79,188,160,251,35,27,26,70,67,65,2695,8955,9184,2065,9227,9177,8947,9219,575,576,5503,763,3557,776,4041,4189,4178,3635,3643,3578,2152,9190,6257,6176,6198,6216,2780,2800,3084,2779,3037,2778,3034,3090,3081,2638,3350,3327,2834,2832,2826,2804,3053,3077,2830,3040,3225,2875,3223,3103,3256,3108,3322,952,940,853,849,1044,865,1769,1755,524,520,497,466,476,6280,6264,6262,6281,8998,9035,9373,8940,6288,6420,9532,9234,9362,449,689,431,473,4005,2178,3422,3906,3981,3886,3866,3860,3969,3753,3418,3846,3916,3834,3790,3793,3789,3380,3413,3412,3368,3742,3781,2784,2787,616,613,843,609,766,767,779,835,4169,4168,4164,4151,4104,4157,3516,4117,4100,3489,3517,3510,4119,3523,3506,4123,4122,4121,3519,4106,4108,4204,3727,3738,3801,3381,3679,3402,8604,8237,8459,8231,8439,8680,8437,8232,8686,4386,8708,8690,8691,8689,8695,141,140,154,8384,8600,8730,8571,8747,4326,4325,4382,4346,3810,2564,2566,2541,2573,2540,2542,2543,2562,3337,2917,2918,2900,2553,2536,2529,8270,8277,871,872,1204,1203,961,960,910,909,896,1299,1536,891,1543,897,957,1471,978,1463,1035,851,1194,1192,1250,1239,1172,875,1500,1501,1504,1243,80,198,196,46,123,138,175,108,212,77,16,13,11,181,17,180,186,2,179,4,6197,8946,9226,787,768,3550,838,3649,3614,3560,4147,4148,4142,4149,2203,6253,6246,6247,6256,9204,6204,6174,2807,2764,2707,2765,2812,2813,3038,2806,3052,2829,2864,3101,3291,880,861,864,857,491,492,478,477,450,6277,9300,430,429,470,3911,3974,3861,3862,3759,3754,3426,3832,3792,617,4138,4139,4131,4140,4130,4150,4167,4113,4098,4105,4115,4118,4155,4154,4153,3492,3509,4110,8692,4376,8696,4524,2539,2901,2558,2556,2559,2569,2544,2905,1519,1301,959,914,1300,1210,888,1542,1489,1487,850,1185,1170,883,1526,1533,1538,1530,1529,81,126,139,78,12,0,18,9298,585,3549,3555,780,834,3634,4143,3558,3613,3562,3563,4171,6258,2711,2704,2777,3131,3908,593,619,828,833,4137,4133,4152,4114,4116,4156,4136,3661,3660,8685,2902,2555,882,870,873,876,884,890,889,1205,1214,900,1546,1540,1541,1544,1537,1532,1527,14,712,3605,3542,3552,3571,3553,4141,3653,3593,4128,4132,4126,3659,3658,3609,2815,580,618,836,824,4103,3670,4120,4135,4134,3610,8684,913,911,886,887,1539,1531,1520,1502,1535,3598,3596,3606,3599,3534,3547,3533,3654,3612,3655,4129,4124,782,912,1488,1528,1534,3607,3543,3657,3656,4125,1503,4127]},{name:"mesh_7_1",count:6641,indices:[15,153,3260,369,5252,6541,6424,6562,6608,6569,5250,6590,155,174,3504,6580,3396,6495,3398,6559,6557,6558,6532,6555,6563,6486,6564,157,159,156,6451,6597,6613,6622,6619,6617,6614,4343,1447,4346,4392,1415,4071,3872,4067,3871,1232,1034,4228,4847,6497,6553,6552,6550,6549,6566,6492,6560,160,158,373,6591,6593,6626,6448,6612,266,253,434,4729,4731,4555,4551,4727,3270,3364,1361,1395,4203,1355,1576,1419,4399,1439,1398,4403,4402,4023,1413,5243,5238,4434,4349,5244,5548,5547,3228,4070,3963,3984,3986,1357,3987,1585,4229,3983,3978,3979,4200,6586,6583,6498,6508,6548,6568,6485,6476,6490,6491,6493,6489,591,562,590,370,169,6444,6447,6445,505,1897,504,507,508,753,354,506,523,394,393,395,454,463,398,413,416,835,402,6423,6430,6609,6449,6634,6446,6440,6631,6620,445,280,269,438,364,259,265,264,4728,3402,3399,4845,3571,3536,3557,3592,3593,5307,5329,5306,3265,3259,3262,3264,3433,3434,3606,3610,3611,1362,1458,1443,1459,1392,1363,1404,3908,3916,4215,4210,3907,4199,4207,4118,4111,4081,4075,4076,5245,5246,5247,3729,5601,3640,3250,3307,3299,5610,5549,5253,5254,5249,1622,751,1727,1725,735,519,517,736,520,1748,1740,1127,1193,1138,3914,3855,4280,4275,4218,4273,4271,4725,3874,3875,3889,3902,3904,3856,4037,4041,3974,3939,3975,4676,4754,4268,1581,1356,1291,1586,3988,1290,3981,6454,6456,6461,6462,2127,933,1046,911,1202,1204,1203,1749,6582,6465,6467,5098,6474,6472,1850,3563,3558,6516,6544,6540,6567,6481,6571,6576,6482,4642,4709,4710,4639,4537,4532,4711,6488,75,80,39,52,26,1486,376,387,388,161,163,385,386,449,371,380,368,415,199,175,176,171,1887,500,447,537,534,535,2340,839,410,399,390,418,205,586,404,585,551,2350,2154,1720,1718,1613,6610,6442,6621,268,271,263,436,439,831,435,442,381,251,255,250,261,256,260,249,258,257,244,245,248,4721,4320,5374,4732,4835,3527,3572,3529,3591,5310,5308,5134,3715,3560,3544,3549,3293,3286,3294,3258,3215,3269,5579,3312,3313,3325,3314,3311,3297,3582,3585,3579,3727,5524,3607,1350,958,959,1111,928,1064,1117,961,929,956,912,1373,1372,1390,1389,1460,1396,1442,4018,4019,4205,3938,3920,4209,4021,4472,4473,4431,4432,4430,5177,5188,5190,4344,4345,4408,4423,4428,4086,5300,5356,5290,5303,5301,4513,4512,4525,5265,5264,3576,3323,3316,3327,3330,5567,5604,3304,3221,3302,3218,5611,3340,3329,5256,3232,3220,5561,5248,1780,1730,708,1732,1764,757,737,532,530,666,667,766,672,705,1744,1180,634,1154,1751,661,677,660,613,4788,4787,4277,4764,4765,3910,4281,3915,4783,4766,4762,4772,4686,4219,4724,4291,4301,4302,4283,3873,4290,4288,4284,3901,4303,4306,4515,4044,4040,4030,4028,4032,4406,4059,5653,5647,3972,4698,4756,4758,4755,4201,3991,1032,1231,1261,1258,1022,1688,6594,6453,1716,1609,1715,1048,1055,1054,1053,953,1044,1051,1065,1062,1059,6584,6577,4657,6469,6478,3566,3446,3447,6535,6575,4650,4641,593,2146,596,698,76,38,78,141,148,2311,34,33,40,36,37,1512,65,70,190,2158,378,162,375,379,372,382,184,186,168,490,1910,498,528,270,273,277,830,456,471,452,391,384,842,2353,547,2342,401,411,377,2348,2173,2174,2330,2172,2310,2170,17,208,592,2153,2163,2168,1726,1724,6639,6439,6638,254,247,287,4335,4333,4341,5330,5331,5369,5366,4804,5373,4800,5371,4556,4802,4884,4881,4815,4877,4860,3575,5140,5152,5150,5497,5500,5499,3723,3714,3713,3667,3615,3628,3663,3653,3664,3666,3650,3665,5305,5179,5153,5298,3458,3457,3472,3547,3263,3266,3288,3298,3261,3502,3507,3496,3273,3272,3280,3268,3284,3287,3514,3754,3512,3431,3432,3295,3590,3636,5502,5509,3635,3600,3598,3601,3631,3632,3630,3649,3612,3605,3633,3609,3608,4875,4876,893,942,2436,1118,1119,907,908,1366,1365,1381,1110,1399,1451,1471,1534,1536,1526,1405,2439,1530,1470,1385,2447,1401,1463,1391,1445,4204,4221,4208,5233,5232,5234,5231,5220,5207,5216,5154,5155,5173,4440,4439,4438,4436,4468,4469,4470,4433,4435,5230,4421,4425,4429,4426,3894,3885,3896,3898,4084,4519,4503,4078,4467,4460,4466,4511,4510,5240,5241,5271,5269,5518,5171,5266,5262,5533,3583,3216,3301,3339,3341,3333,3310,5259,3227,1625,668,1754,1753,723,725,739,738,518,774,687,600,2139,602,599,767,1743,1742,1721,1141,1072,1124,1752,1199,1200,1201,1069,1066,607,610,658,1537,1532,1538,1523,1507,1128,1139,1553,4712,4793,4789,4305,4798,4796,4716,3911,4785,4767,4768,4771,4773,3919,4220,4311,4723,4720,4307,4310,3876,4289,4285,4295,3888,3891,4286,3897,4304,4282,5646,4496,4499,4514,4508,4509,4407,4492,4031,4042,4043,4026,4029,4027,5656,4036,3973,4695,1830,1810,1828,1846,1222,1250,1255,1221,1224,1035,1037,1687,1705,1211,1708,1604,1711,1713,1606,6589,6459,6458,1050,954,1206,1215,1719,1058,1061,1063,4643,5102,4659,6470,6479,6517,4644,779,102,104,103,100,77,2308,2147,138,47,49,27,1508,1509,1504,1521,1525,1506,1479,1478,1480,1482,22,24,142,1556,1555,1546,614,611,1570,1565,1566,1510,68,83,1488,1487,1503,1490,57,2334,0,3,1,2313,193,194,209,164,374,165,383,181,276,477,298,1904,1899,1901,499,543,561,546,262,828,461,468,450,844,548,407,392,166,417,2155,2312,210,589,1723,246,274,4339,5368,3660,3659,5372,4832,4824,3658,4738,4818,5135,5145,5142,5288,5167,3647,3616,3625,3626,3662,3627,3654,3661,5289,5182,5148,4520,4518,5576,4087,5196,5186,5195,5199,4461,5194,4456,3487,3477,3546,3461,3460,3470,3468,3478,3548,3484,3528,3535,3526,3522,3525,3445,3451,3562,3474,3282,3289,3291,3300,3290,3271,3283,3511,3495,3494,3462,3505,3509,3296,3594,3599,3613,3603,3596,3724,4841,1354,1114,1120,1382,1450,21,1527,1473,1466,1113,1400,1446,1453,1457,5239,5222,5229,5178,5172,5275,5169,4471,4437,4424,3893,4506,4507,4082,5276,5170,5516,5280,5520,5508,3326,5526,5532,5530,3245,3242,5596,5260,5258,5257,3244,3226,3234,750,742,598,699,700,769,704,703,673,683,675,662,544,776,652,651,659,646,1794,1797,1195,1792,1789,1759,1184,637,1192,1194,1074,1750,1071,604,605,606,608,1542,1524,1535,1545,1547,4715,4714,4717,4795,4792,4778,3905,4757,4784,3883,3884,3899,4319,4493,4418,4490,4417,4416,4405,4410,4476,4475,4474,4038,4411,5657,3977,1832,1856,1251,1851,1260,1808,944,1036,1209,1831,1045,1605,1213,1217,1212,1056,1042,1223,4655,6579,4654,2142,121,109,112,99,110,81,2149,140,143,137,14,35,31,29,1522,1505,1483,1485,1484,1481,25,72,1166,2338,1156,2337,1571,85,1517,188,192,272,293,1905,361,545,470,460,283,462,459,167,1722,4116,5363,5335,5334,4325,5539,3648,3656,3655,5332,5333,5181,5180,5001,5575,5574,5184,5203,4462,5187,5191,5200,5192,3476,3486,3493,3488,3459,3483,3479,3450,3449,3267,3292,3281,3430,3464,3463,3513,3595,3589,4823,931,909,937,895,1125,1456,1474,1477,1476,1472,1465,1529,1386,1112,1441,5274,5272,4504,4517,5507,5523,5603,3580,5564,3241,756,777,597,125,685,684,773,105,118,701,676,531,650,635,639,641,665,2256,1783,1788,1784,1785,1196,1800,1073,2184,678,2186,1543,1533,4718,4790,4722,4786,3900,4488,4479,4491,4494,4414,4409,4415,4419,4480,4701,4266,3976,1834,1849,1252,1226,941,949,943,1057,1216,952,951,1041,129,2192,97,82,19,2164,13,2332,6,7,32,609,2190,618,1557,62,93,98,66,88,191,286,297,487,1907,522,541,529,533,455,4114,5361,5311,5157,3718,5506,3720,5197,5013,4465,5004,4527,3475,3469,3467,3519,3753,3499,3491,3480,3597,940,939,1454,5237,5273,4502,4524,5534,3235,3240,674,664,644,1786,1795,1539,1548,4542,4779,4489,4478,4495,935,1040,95,9,11,20,144,135,12,8,185,2051,91,1558,1520,1511,87,86,488,289,542,521,5358,5156,5496,5505,5008,4464,3471,3466,3757,3752,3489,3523,938,894,3243,5527,5563,663,1544,182,2049,1561,1519,84,288,284,5162,647,1559,486,5161]},{name:"Object_13",count:341,indices:[125,221,200,214,218,212,211,213,223,224,308,280,193,195,74,131,328,331,80,85,321,204,210,207,217,219,216,215,197,199,189,250,162,253,165,257,256,167,169,160,163,337,142,64,333,70,332,138,139,309,95,99,306,192,186,42,182,273,225,312,319,123,124,229,88,132,130,134,128,126,327,239,323,203,289,209,305,104,303,291,247,248,246,155,6,8,242,19,21,16,164,168,170,158,161,135,65,26,140,136,274,278,279,283,285,115,260,172,318,227,122,314,84,129,287,206,114,153,154,249,33,264,176,37,156,150,144,236,24,235,340,334,66,143,44,190,173,175,185,180,181,269,179,296,282,13,41,228,94,78,294,152,151,149,262,31,146,48,106,111,59,55,281,241,148,36,46,298,286]},{name:"Object_14",count:2246,indices:[1680,2179,166,2113,2100,1452,18,491,493,1005,415,1841,2018,1843,2017,2015,350,500,498,20,528,996,998,526,488,854,1002,489,436,431,1836,1128,1126,1712,1711,1710,1871,1304,2114,2171,1298,1269,1332,1297,1287,1333,1330,1530,1007,1211,1192,1181,1212,860,858,853,842,497,423,194,1829,1830,21,1875,1675,1753,1813,1864,1321,1318,1122,1205,1230,1204,1210,994,348,186,445,446,413,451,2187,447,218,178,210,201,1928,2180,1789,1812,2016,1320,2030,1894,1893,1878,691,683,715,1193,1538,1611,1619,1623,219,417,183,246,189,190,427,1679,1689,1708,1676,2172,1933,1865,1852,1096,699,920,922,1150,1156,1157,671,665,664,1026,1472,1473,1509,444,169,167,211,426,2029,1531,695,928,950,1155,1151,1275,675,954,949,943,694,936,1539,688,921,952,716,931,704,1066,932,951]},{name:"Object_16",count:112,indices:[3,12,87,55,7,30,20,16,78,90,93,50,91,23,99,24,107,106,100,33,6,43,96,29,110,41,52,39]},{name:"Object_22",count:8,indices:[3,1,0,2]},{name:"Object_23",count:35,indices:[25,2,3,33,21,19,18,4,34,31,13,24,30,15,23,26,20,1,0,32,16,17]},{name:"Object_24",count:372,indices:[32,344,340,256,352,258,260,45,370,71,349,346,280,282,310,371,308,328,137,129,120,334,50,158,306,48,47,74,54,51,205,252,235,259,289,365,292,369,302,166,165,319,323,138,152,115,119,44,43,35,46,55,56,72,326,213,357,227,257,237,230,236,281,273,151,130,132,139,99,199,198,294,107,113,33,49,58,191,278,285,218,149,116,143,146,168,368,93,131,23,73,207,210,211,274,342,150,102,109,104,112,34,192,202,214,228,229,103,108,206,217]},{name:"Object_28",count:15080,indices:[15061,10660,10827,15077,12746,15075,15059,15058,15062,11448,11445,11442,14985,12420,12382,15056,10435,13845,15064,15078,10643,10695,12188,15042,12187,10839,12734,15069,11094,5678,11269,11586,11585,14899,12117,12150,11875,11323,12540,12541,15004,12552,12623,3650,2088,13161,126,82,11503,14918,11662,12114,12112,11562,12275,15043,12273,12060,12267,12268,3509,12272,6684,5988,896,14613,12413,12407,12422,12522,598,619,14788,4233,4283,4282,123,2090,3814,11633,15033,11628,11500,11629,11598,11221,11272,11384,12296,12184,12304,12300,12308,12248,12144,11267,11268,5681,1614,6699,10202,11968,11902,12266,11965,12258,12535,15052,4284,4343,4101,3803,9221,9205,3790,11635,11603,11590,11587,11627,11600,11602,11059,15028,10993,11299,10996,11300,11573,11440,12345,12299,12245,11555,12386,14988,12395,11266,11126,12397,14989,10249,7322,10241,14511,13325,1008,12795,897,1011,13897,11732,12527,14673,14148,13160,9218,5576,9266,4999,9210,1615,3804,3817,11597,11289,11057,11092,14905,11567,12255,12254,12249,11982,5680,14162,5914,4783,5933,5986,5959,7324,13851,5926,6695,6265,6263,1012,14169,79,9613,11975,11794,11796,11962,11961,11830,11825,14939,76,3427,3426,11960,3418,4217,4223,4288,4245,1062,141,2102,10,7,9209,9240,9223,5674,13850,5666,7661,3786,3744,3781,3811,3743,11730,11090,11095,11097,4846,4876,5099,13565,5879,6296,6685,11981,11680,15035,11709,11673,11952,3507,433,436,614,444,14600,4207,13251,157,4240,4342,148,150,1064,134,62,75,66,64,10240,10245,5676,9208,7646,7794,3784,34,15019,13998,5897,11827,11950,15055,4239,4243,3177,3568,3502,3176,3565,3419,3577,446,473,4210,152,4200,35,36,4365,4361,77,143,4844,7720,7786,5673,6094,7792,4777,5668,11121,11278,11274,11275,13856,12534,11803,11801,11798,11799,4366,4242,13136,3491,3503,440,472,13274,95,1054,147,12759,7672,10259,13997,4373,3487,3578,117,60,59,63,7783,6092,13414,13861,3490,37,58,12760,7699,6044,13871,12929,7788]},{name:"Object_33",count:529,indices:[66,88,87,65,164,157,165,524,513,70,522,210,525,209,213,527,68,260,152,320,89,182,63,350,483,194,319,387,280,381,394,261,430,515,64,90,93,37,404,493,503,504,228,486,528,243,188,284,222,193,205,203,306,197,41,238,488,510,295,39,472]},{name:"Object_36",count:4904,indices:[3788,2601,3794,4232,2021,4892,76,19,408,4069,1915,325,449,471,4456,4749,4877,4887,447,108,3809,3808,3803,3796,2031,202,4114,4116,4173,4873,4745,3917,3994,4462,4003,3987,4465,4867,4354,4747,3720,112,92,459,534,505,488,421,3807,3797,4410,4167,497,4870,4866,4875,3789,3915,3817,391,3719,198,74,509,388,333,4488,78,229,226,377,4090,4164,4023,3879,3916,3956,4063,4217,4193,21,73,101,99,326,4417,228,359,4199,496,3911,3868,4065,4184,177,185,201,95,4473,367,4169,3893,3894,4476]},{name:"Object_37",count:90,indices:[11,63,85,64,59,68,81,86,79,58,75,88,77,67,60,61]},{name:"Object_38",count:50,indices:[16,14,15,20,45,30,25,32,22,47,6,34,9,27,29,26,19,2,0,43,13,49,41,46,3,4,12,7,36,35,48,5,38,33]},{name:"Object_40",count:64,indices:[52,13,17,40,37,1,63,38,25,24,31,22,34,61,0,8,5,6,20,14,56,23,35,4,19,51,9,12,33,55,11,10,60]},{name:"Object_41",count:212,indices:[24,168,13,5,6,4,161,166,79,80,50,73,53,52,41,194,207,204,189,30,32,31,184,98,54,130,8,142,78,39,37,190,29,72,68,67,69,70,81,56,96,106,104,105,66,60,11,102,25,182,27,211,191,74,35,36,55,57,95,62,127,124,71,193,58,61,65,9,59]},{name:"Object_44",count:40,indices:[13,32,12,9,27,7,29,14,18,15,1,21,33,24,19,17,30,10,35,6,16,28,2,26,4]},{name:"Object_47",count:668,indices:[510,338,4,176,501,167,12,346,38,177,339,446,577,2,341,342,3,340,0,345,13,14,344,15,63,504,505,182,506,603,507,180,169,23,22,509,178,508,652,600,53,445,433,77,87,343,662,179,312,181,332,331,333,307,219,206,651,653,655,163,55,254,645,553,477,476,489,18,20,279,293,412,410,484,517,242,221,305,218,207,650,612,39,166,565,555,400,409,397,65,75,267,330,663,315,313,230,658,659,161,486,488,576,479,543,541,637,667,519,318,278,281,326,291,187,257,624,245,422,647,531,528,320,625]},{name:"Object_48",count:3520,indices:[456,1162,472,2459,726,1392,2192,459,2229,2189,2882,1121,1122,281,267,283,2419,284,2881,469,2219,2191,2378,728,2434,753,2405,2432,742,294,2351,335,2,315,0,316,1296,1258,1256,3286,3340,1204,3369,2894,3396,3394,1201,1242,470,378,2271,2273,2272,2300,2297,2287,2270,2210,2214,1784,2236,2216,2257,2217,2243,2237,1187,1150,2475,2481,2478,3197,254,770,2446,769,1407,743,916,1414,1439,750,1365,1363,3218,1411,1412,269,285,3326,3285,3342,3339,3352,1231,1255,1271,1275,1245,3314,3312,1229,2922,2898,2896,2883,3410,1214,3367,1252,973,972,1244,1217,3177,1336,1350,3231,3206,324,321,2324,2327,322,2337,351,342,312,340,313,348,336,337,415,2244,405,2246,442,446,432,2338,2208,2260,2259,2235,400,399,396,394,422,1870,1869,2456,3199,1822,3200,2213,2718,2716,3204,3220,3260,3258,1284,2748,2747,2682,2749,2721,2759,2731,2750,240,80,119,291,1409,1408,1381,1406,1380,1379,1382,1354,1384,1282,1309,3328,3330,3331,3302,3333,3334,1241,3354,1269,3315,3368,3366,3363,3364,2757,2698,2712,2901,2904,2929,2880,2899,1191,1192,1176,1144,26,956,962,888,1249,1278,1199,1224,1195,1198,1163,1165,1166,1138,1169,958,1228,1247,1219,1243,1220,3191,3272,1378,1338,1352,343,323,388,310,429,443,477,2314,2315,2316,2365,2343,2205,2284,2286,2241,2263,2262,2233,2232,2261,398,397,425,417,402,418,416,1326,2746,2744,2449,1820,2453,2482,3301,3304,3276,3303,2730,1854,1853,2762,3417,2723,2758,2722,2422,2424,2421,286,72,117,116,258,289,259,986,985,1441,82,747,1390,1413,1361,3393,3414,3416,3391,3355,3380,3389,2706,2760,3358,3362,1193,971,960,970,961,967,968,1147,1197,1168,999,998,93,1222,3192,2684,3274,3277,3249,3248,3279,3282,3281,3280,1355,445,448,449,475,476,454,2313,2455,1814,2366,2396,2353,2367,2340,2371,2206,2289,89,88,426,375,389,365,419,421,20,22,91,450,1325,2736,2735,2733,2266,2264,1790,1859,1794,2320,1855,2737,1792,1857,2674,2743,2742,2745,2741,2448,2451,2480,2678,3194,3193,3195,2751,2754,2755,3335,2694,3300,2728,2727,2761,2720,2452,288,772,773,776,282,987,345,8,85,745,1386,1360,983,982,3409,2900,3412,3383,3387,3382,3359,3357,3385,1188,969,984,1277,1172,1001,1226,886,3247,3223,3251,3229,3226,2686,3307,1357,479,963,2454,2395,2426,2394,2317,2319,2291,364,395,367,369,372,90,990,991,391,423,451,2739,2734,1786,1858,1856,2268,3227,3198,2752,2756,76,264,118,260,751,256,994,995,92,81,979,980,4,988,1387,981,2902,3384,3381,3361,1174,1189,1298,1274,1273,1276,1002,3250,3246,3225,3308,3306,1866,1865,1867,1868,2393,2318,2322,1800,2321,1860,1861,1802,338,339,346,2740,3196,261,774,997,992,894,974,978,977,976,989,86,83,1177,1190,1272,3252,2753,1328,1300,904,2403,2399,2397,2398,2376,2370,2372,1806,1804,1863,2373,2345,1862,262,70,993,1280,975,87,84,1324,1327,1306,1332,1333,1330,2428,1810,1808,1864,1301,1358,1305,1303,1331]},{name:"Object_49",count:1376,indices:[1364,686,1029,1027,238,711,710,1064,1066,1162,1062,690,545,366,435,344,230,1024,345,1365,776,778,26,716,367,80,88,241,134,712,714,820,715,246,822,1158,689,431,434,232,233,234,236,687,483,132,130,244,1057,195,824,1112,1111,1156,557,555,475,239,235,86,242,1059,1058,547,250,1061,548,556,554,534,171,432,240,243,549,249,166,537,167,551,550,164,248,553]},{name:"Object_50",count:2640,indices:[46,1966,646,1038,785,1122,1361,2541,1040,2589,2585,42,1306,1302,1308,1968,1259,955,1045,1363,1358,1356,2197,1034,1313,1311,794,131,129,1204,1208,1698,51,1700,48,1971,1703,2021,602,2018,2016,2358,2399,2360,1449,1445,2109,2012,1780,1782,1826,2441,2432,2438,1257,136,550,1262,1819,1821,1043,2534,1120,2277,1125,2487,2490,1155,791,1213,874,1973,297,2594,1787,2105,2481,2114,2111,2492,2188,2397,2365,2363,2404,1824,555,553,1776,212,219,593,957,960,291,300,962,134,1785,548,2530,2194,2280,2275,1164,1127,789,872,2485,1159,2116,2436,2023,1705,217,597,208,604,295,302,544,1815,2199,2192,2282,2539,2536,2271,1161,1166,214,599,1694,642,1352,1116]},{name:"Object_51",count:22684,indices:[19191,13440,2098,19193,7766,19197,16454,19246,5112,7824,13439,2153,7744,7852,19219,7905,7888,7914,7912,7917,7769,7768,7925,2229,13418,2122,2120,2220,2217,19237,7832,19241,19357,5114,2150,2148,7823,7885,7879,2195,7841,19232,19230,7837,2115,2111,13426,2243,2126,13523,2128,13424,2219,2225,2193,7921,2149,2151,19287,19243,7735,7948,6995,7830,7835,19235,7764,18687,18686,19215,19204,7755,19208,7890,7891,7876,7866,2196,7420,7903,13438,13437,2097,2100,7247,7927,7251,2256,2238,2232,2239,1612,2108,2242,2106,2109,2117,1976,2212,2211,2002,2207,2208,2129,2131,7902,1908,2198,13495,13415,7732,19356,19190,19349,19221,7747,19213,7749,19210,19199,7760,19335,7758,2201,7864,7867,7845,7844,7846,7843,19226,7952,13597,19348,13431,2104,1594,1577,1747,2222,2241,2262,1828,2233,2252,2251,2244,2230,2226,1985,2205,2213,2139,2142,1896,1904,13508,13497,19294,13494,13519,13517,13420,13416,7836,6917,6918,7740,6996,7833,7831,7829,7926,19355,19327,19328,19322,19338,19334,19234,19303,19320,19088,19298,19310,19313,19223,7848,7099,7746,7858,7853,7753,19211,18832,19202,19209,7854,7950,7951,7164,7957,7954,13598,13435,13429,2221,2240,1746,2247,1576,1829,2237,2231,2133,2137,13514,2209,2140,2215,2200,13512,13501,13538,19289,13546,13530,13533,13525,13529,13417,13524,19372,19373,19370,13405,19277,13620,13627,13621,13619,13528,7875,7013,1325,7734,7349,7930,7924,7345,7330,7765,19222,19220,18839,19324,19325,18907,19336,19157,18521,19337,19315,18863,19299,19300,19309,19305,19068,19302,19001,7959,7857,19224,7938,7939,7936,7754,7756,19317,19330,19201,7202,6986,6988,13436,2245,1814,5116,13506,12585,16450,19156,19154,12685,12768,13613,13425,13607,13427,13609,12757,13403,19280,13622,13628,13526,19361,13513,19360,12659,18771,12842,12835,12868,7826,7018,7757,7947,7945,19312,18831,19339,19293,19292,19078,19301,18417,13544,7197,18915,13595,13020,13015,2234,2144,16452,13503,13406,13534,13612,13408,13502,19276,13626,19346,13610,19288,19286,19290,19291,18988,7097,7745,7862,7859,7861,19344,19329,13016,13617,13615,12589,13505,19281,12667,13404,7863,7942,13007,13616,12656,13412,19283,12684]},{name:"Continuous_rear_valance",count:6084,indices:[3472,3466,3624,430,432,424,502,2608,2694,2610,2680,2766,2616,2458,2532,3550,3474,3396,3390,1444,1522,1450,1446,1438,2604,2380,2542,2548,2550,3618,3690,3532,3792,3694,3718,3238,3388,4540,4468,4542,436,514,520,360,354,1483,1405,5616,1561,3802,3796,3838,3880,2758,2602,2526,2598,2448,348,480,394,558,2454,2554,2640,2482,2700,2464,3540,3688,3762,3616,3684,3556,3804,3312,3240,4474,4470,1452,2496,1054,2574,438,444,522,366,276,220,306,228,150,2183,64,76,2250,2178,2112,1014,1516,1432,1680,466,1488,3760,3588,1992,1906,700,5849,3886,3564,3642,894,820,822,580,732,658,588,672,2994,2920,2922,2844,2670,2592,2664,2674,4464,1374,1368,1132,1126,1210,346,112,198,2998,4170,3004,2242,2328,2386,2290,2206,2280,2472,2314,2568,32,38,2706,2784,2476,2698,564,498,5037,3074,3076,3702,3606,3528,3600,3454,3456,3442,3436,3370,3634,3174,3100,3098,1686,3154,3228,3304,3214,3300,3216,3150,3510,1996,4534,4530,4608,4482,4560,4408,4324,1362,2364,2514,528,612,534,40,204,282,130,5226,136,58,142,214,74,2122,2256,2116,1908,1980,1674,1752,1426,1348,1422,1504,292,378,304,538,540,1642,1720,1728,934,6005,5928,1798,3766,3832,3756,5694,850,772,924,928,1717,3970,3892,3888,990,916,832,846,768,840,918,3490,3654,3496,3478,574,730,804,978,984,744,828,670,666,754,906,2836,2830,2770,2662,2748,2746,2596,4318,4306,4300,4458,1216,1140,2718,342,4572,4650,4498,4420,4564,2320,2326,2308,2316,2404,2490,642,490,412,340,256,4596,4438,4512,4590,4594,391,4506,4954,4956,4950,3086,3082,4966,4972,3594,3438,3708,3324,1608,1614,1758,1540,1624,1546,1692,3462,3306,3378,5016,4944,4938,4930,4792,4948,3052,3138,3222,3068,3062,4932,4924,4780,4558,4782,4708,4536,4770,4768,4776,4684,4762,4330,4332,4246,4174,1122,1200,1360,1284,2442,2586,606,604,2332,2417,44,132,288,232,1171,1022,1104,1110,1188,1272,1194,388,2244,2274,2422,1822,1824,1896,1666,1588,1740,450,690,756,598,1420,1486,1492,1338,1260,1254,1570,1806,1734,1884,1656,1873,6082,1732,1738,3598,3592,1960,3906,3828,1966,1968,1962,5850,3904,1012,1006,3977,922,3814,988,3738,3816,3648,3646,3104,4978,576,816,982,3810,3640,4086,4084,2772,2820,2814,2898,2904,2752,2812,4476,4312,4314,1380,4524,1066,1064,1144,1152,1138,2652,2658,2736,396,2632,114,26,2566,4360,4486,4494,4584,4582,4656,4668,4746,2398,556,486,334,4354,552,3246,5040,4882,4888,3092,3364,3286,3400,1684,1836,1618,4606,4680,1710,1788,4758,3292,3208,1998,1924,1840,3354,3210,4840,4914,5007,3144,4942,4846,4866,4714,4774,4716,4552,4692,4168,4242,4320,1048,1116,2340,1278,1434,1350,1344,2520,2339,126,1028,2268,2106,1018,2110,1182,1266,1252,462,5459,1330,5537,2352,1040,2500,3666,3744,1974,1510,456,694,762,1578,1336,1644,1582,1876,3834,3670,1810,3899,5064,4906,4900,868,870,942,808,972,3582,3652,4080,2862,2868,2946,2860,2896,4228,4374,4296,1396,1474,1632,252,168,166,2716,2794,2800,2722,2710,2878,3041,2963,22,180,186,96,108,2807,184,2644,4198,4120,4192,4445,318,4350,4356,4264,4422,4672,547,4835,4660,4818,4744,726,718,640,712,708,703,706,330,781,469,550,3088,4720,4732,4890,4816,4642,4648,3406,4894,1750,1834,1842,1792,3360,3124,1702,5013,4704,1356,2261,2254,5225,1176,5382,2428,2278,2350,616,1414,1954,3110,874,946,882,966,964,3431,970,3660,2902,4236,2776,2872,3030,4194,3006,2890,2808,1150,1158,1302,1308,1536,1548,1306,1464,1312,1234,4302,4224,4138,4452,1324,1558,178,174,14,270,4126,3034,4133,4211,4,3036,4284,79,313,157,240,4416,4428,4830,4902,568,634,244,784,5069,4878,4654,3348,3190,3418,3492,3252,3258,3250,1866,1780,1864,3282,1938,1932,2016,1696,4618,4546,4630,5303,2346,2356,3186,3264,3197,876,960,976,2988,4158,2934,4122,4180,4182,4096,2964,4056,2968,4230,4146,1320,1156,1458,1390,1542,4140,1402,90,162,4282,4908,408,322,4884,3353,3424,3340,3402,2014,3120,4992,1770,2344,3112,937,4074,2928,2932,2944,4266,4338,3010,3016,2886,4152,1246,1318,4134,4806,3342,3408,3426,2010,3126,4995,4998,1942,1848,2974,4116,2938,4108,4212,1164,3256,3276,3044,1846,1774,1242,3334]}];var xg=new I;var zu=!1;async function Hu({startup:s=!1}={}){if(!zu&&typeof Worker<"u"){zu=!0;try{vs.useWorkers(Math.min(2,Math.max(1,(navigator.hardwareConcurrency||2)-1)))}catch{vs.useWorkers(0)}}let e=await lo(s?"__startupVehicleRequest":"__fullVehicleRequest",()=>co(new URL(s?"./ego-vehicle-startup.glb.gz?v=17.9":"./ego-vehicle-ready.glb.gz?v=17.9",new URL("../engine/vehicle.js",import.meta.url).href))),t=await new Response(new Blob([e]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer(),i=(await new ys().setMeshoptDecoder(vs).parseAsync(t,"")).scene.children[0];i.name="Ego vehicle";let r=0;return i.traverse(a=>{if(!a.isMesh)return;let o=ku[r++];!s&&o?.name===a.name&&o.count===a.geometry.attributes.position.count&&o.indices?.length&&(a.geometry.userData.frameIndices=o.indices),a.castShadow=!0,a.receiveShadow=!1;for(let l of Array.isArray(a.material)?a.material:[a.material])l.name==="license"&&Ms(l),l.name==="body"&&(l.roughness=Math.max(l.roughness,.24),l.clearcoatRoughness=Math.max(l.clearcoatRoughness,.22)),l.name==="lights"&&(l.onBeforeCompile=c=>{c.vertexShader=`varying float vTail;
`+c.vertexShader,c.vertexShader=c.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vTail=step(color.g*2.0,color.r);`),c.fragmentShader=`varying float vTail;
`+c.fragmentShader,c.fragmentShader=c.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance*=vTail;`)},l.needsUpdate=!0)}),oo(i,"x6"),i}var ho=new URLSearchParams(location.search).get("export")==="4x"?4:1,ni=400*ho,Di=176*ho,Gu=s=>new Promise((e,t)=>s.toBlob(n=>n?e(n):t(Error("PNG encoding failed")),"image/png"));async function H0(){let s=new no({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});s.setSize(ni,Di),s.setPixelRatio(1),s.setClearColor(0,0),s.outputColorSpace=ft,s.toneMapping=pa,s.shadowMap.enabled=!0,s.shadowMap.type=aa;let e=new Gs;e.environment=Bu(),e.environmentIntensity=.38,e.add(new tr("#ffffff","#c9cbd0",2));let t=new Zn("#ffffff",2.8);t.position.set(-6,9,-5),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),Object.assign(t.shadow.camera,{left:-5,right:5,top:5,bottom:-5,near:1,far:30}),t.shadow.normalBias=.015,t.shadow.radius=4,e.add(t,t.target);let n=new Zn("#ffffff",.7);n.position.set(6,3,3),e.add(n);let i=new URLSearchParams(location.search),r=["x6","ix","xc90"].includes(i.get("model"))?i.get("model"):"model-3",a={"model-3":"Tesla Model 3",x6:"BMW X6",ix:"BMW iX",xc90:"Volvo XC90"}[r],o=Nu(await(r==="x6"?Hu():Uu(r)));o.traverse(m=>{m.isMesh&&(m.castShadow=!0,m.receiveShadow=!1)}),e.add(o);let l=new ht(new _i(18,18),new Zs({opacity:.055}));l.rotation.x=-Math.PI/2,l.position.y=-.005,l.receiveShadow=!0,e.add(l);let c=new gt(20,ni/Di,.1,80),u=8.8,h=new I(0,.75,0),d=document.createElement("canvas");d.width=1248,d.height=240;let p=d.getContext("2d");p.fillStyle="#fbfbfc",p.fillRect(0,0,1248,240),p.font="500 14px -apple-system, BlinkMacSystemFont, sans-serif";let b=[];for(let[m,f]of(i.get("angle")==="40"?[40]:[30,40,50]).entries()){let y=ei.degToRad(f);c.position.set(-u*Math.sin(y),h.y+u*Math.tan(ei.degToRad(14)),-u*Math.cos(y)),c.lookAt(h),s.render(e,c);let M=document.createElement("canvas");M.width=ni,M.height=Di;let _=M.getContext("2d");_.drawImage(s.domElement,0,0);let A=_.getImageData(0,0,ni,Di).data,E=0;for(let z=0;z<Di;z++)for(let V=0;V<ni;V++)A[(z*ni+V)*4+3]>100&&(E=Math.max(E,z));_.clearRect(0,0,ni,Di),_.drawImage(s.domElement,0,166*ho-E);let R=await Gu(M),D=URL.createObjectURL(R),T=document.createElement("figure"),S=new Image,P=document.createElement("figcaption"),O=document.createElement("a");S.src=D,S.alt=`${a} \xB7 \u6C34\u5E73\u65B9\u4F4D${f}\xB0`,O.href=D,O.download=`${r}-${f}.png`,O.textContent="PNG",P.append(`${f}\xB0 \xB7 ${a}`,O),T.append(S,P),document.getElementById("angles").append(T),p.fillStyle="#ecedef",p.fillRect(m*416,0,400,176),p.drawImage(M,m*416,0,400,176),p.fillStyle="#18181b",p.fillText(`${f}\xB0 \xB7 ${a}`,m*416+12,208),b.push({angle:f,elevation:14,fov:20,width:ni,height:Di,distance:u,bottomOpaquePixel:166*ho,model:r})}let g=document.getElementById("comparison");g.href=URL.createObjectURL(await Gu(d)),g.download="vehicle-angles-30-40-50.png",g.hidden=!1,document.body.dataset.audit=JSON.stringify(b),document.getElementById("status").textContent="\u4E09\u6863\u5DF2\u6E32\u67D3\u3002\u9009\u5B9A\u89D2\u5EA6\u540E\u518D\u5236\u4F5C\u5168\u90E8\u8F66\u578B\uFF0C\u5F53\u524D\u5747\u5F85\u7528\u6237\u9A8C\u6536\u3002",s.dispose()}H0().catch(s=>{document.getElementById("status").textContent=s.message,console.error(s)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
