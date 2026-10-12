var $n,Bi;function Lu(s){try{let e=window.AudioContext||window.webkitAudioContext;if(!e)return;$n??=new e,$n.state!=="running"&&$n.resume();let t=$n.currentTime;if(Bi){Bi.gain.gain.cancelScheduledValues(t),Bi.gain.gain.setTargetAtTime(1e-4,t,.008);try{Bi.osc.stop(t+.04)}catch{}}let n=$n.createOscillator(),i=$n.createGain(),r=$n.createBiquadFilter(),a=new Float32Array([0,1,s?.14:.24,.045]);n.setPeriodicWave($n.createPeriodicWave(new Float32Array(4),a)),n.frequency.setValueAtTime(s?620:280,t),n.frequency.exponentialRampToValueAtTime(s?300:690,t+.17),n.frequency.exponentialRampToValueAtTime(s?260:640,t+.25),r.type="lowpass",r.Q.value=.65,r.frequency.setValueAtTime(s?1850:1e3,t),r.frequency.exponentialRampToValueAtTime(s?900:2400,t+.21),i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.075,t+.018),i.gain.exponentialRampToValueAtTime(.038,t+.095),i.gain.exponentialRampToValueAtTime(1e-4,t+.27),n.connect(r),r.connect(i),i.connect($n.destination),n.start(t),n.stop(t+.29);let o=Bi={osc:n,gain:i};n.onended=()=>{n.disconnect(),r.disconnect(),i.disconnect(),Bi===o&&(Bi=null)}}catch{}}var yd=0,Zl=1,Md=2;var Jl=1,Sd=2,wn=3,Un=0,Ht=1,Ot=2,Pt=0,qi=1,ha=2,$l=3,Ql=4,ko=5,pn=100,wd=101,Ed=102,Td=103,Ad=104,ss=200,Rd=201,Cd=202,Pd=203,po=204,mo=205,ua=206,Id=207,da=208,Dd=209,Ld=210,Ud=211,Fd=212,Nd=213,Od=214,Bo=0,zo=1,Ho=2,Xi=3,Vo=4,Go=5,Wo=6,qo=7,eh=0,kd=1,Bd=2,fi=0,Xo=1,jo=2,Yo=3,$s=4,Ko=5,Zo=6,Jo=7,Nl="attached",zd="detached",th=300,rs=301,as=302,$o=303,Qo=304,fa=306,nn=1e3,zn=1001,Fs=1002,Ct=1003,ec=1004;var os=1005;var Qt=1006,Qs=1007;var On=1008;var gn=1009,nh=1010,ih=1011,er=1012,tc=1013,Ci=1014,En=1015,Vt=1016,nc=1017,ic=1018,Pi=1020,sh=35902,rh=35899,ah=1021,oh=1022,en=1023,Ns=1026,Ii=1027,sc=1028,rc=1029,ch=1030,ac=1031;var oc=1033,pa=33776,ma=33777,ga=33778,ba=33779,cc=35840,lc=35841,hc=35842,uc=35843,dc=36196,fc=37492,pc=37496,mc=37808,gc=37809,bc=37810,vc=37811,xc=37812,_c=37813,yc=37814,Mc=37815,Sc=37816,wc=37817,Ec=37818,Tc=37819,Ac=37820,Rc=37821,Cc=36492,Pc=36494,Ic=36495,Dc=36283,Lc=36284,Uc=36285,Fc=36286;var ji=2300,Yi=2301,fo=2302,Ol=2400,kl=2401,Bl=2402,Hd=2500;var lh=0,va=1,tr=2,Vd=3200,Gd=3201;var Nc=0,Wd=1,pi="",wt="srgb",kt="srgb-linear",Er="linear",rt="srgb";var Wi=7680;var zl=519,qd=512,Xd=513,jd=514,hh=515,Yd=516,Kd=517,Zd=518,Jd=519,go=35044;var uh="300 es",Ln=2e3,Tr=2001;var ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uu=1234567,yr=Math.PI/180,Ki=180/Math.PI;function Sn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[s&255]+Gt[s>>8&255]+Gt[s>>16&255]+Gt[s>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function qe(s,e,t){return Math.max(e,Math.min(t,s))}function dh(s,e){return(s%e+e)%e}function Ep(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Tp(s,e,t){return s!==e?(t-s)/(e-s):0}function Mr(s,e,t){return(1-t)*s+t*e}function Ap(s,e,t,n){return Mr(s,e,1-Math.exp(-t*n))}function Rp(s,e=1){return e-Math.abs(dh(s,e*2)-e)}function Cp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Pp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Ip(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Dp(s,e){return s+Math.random()*(e-s)}function Lp(s){return s*(.5-Math.random())}function Up(s){s!==void 0&&(Uu=s);let e=Uu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fp(s){return s*yr}function Np(s){return s*Ki}function Op(s){return(s&s-1)===0&&s!==0}function kp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Bp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function zp(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Dn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ot(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var bn={DEG2RAD:yr,RAD2DEG:Ki,generateUUID:Sn,clamp:qe,euclideanModulo:dh,mapLinear:Ep,inverseLerp:Tp,lerp:Mr,damp:Ap,pingpong:Rp,smoothstep:Cp,smootherstep:Pp,randInt:Ip,randFloat:Dp,randFloatSpread:Lp,seededRandom:Up,degToRad:Fp,radToDeg:Np,isPowerOfTwo:Op,ceilPowerOfTwo:kp,floorPowerOfTwo:Bp,setQuaternionFromProperEuler:zp,normalize:ot,denormalize:Dn},re=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},sn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],p=r[a+1],m=r[a+2],b=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=m,e[t+3]=b;return}if(u!==b||l!==d||c!==p||h!==m){let g=1-o,f=l*d+c*p+h*m+u*b,_=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let w=Math.sqrt(x),T=Math.atan2(w,f*_);g=Math.sin(g*T)/w,o=Math.sin(o*T)/w}let v=o*_;if(l=l*g+d*v,c=c*g+p*v,h=h*g+m*v,u=u*g+b*v,g===1-o){let w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*p-c*d,e[t+1]=l*m+h*d+c*u-o*p,e[t+2]=c*m+h*p+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),p=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return al.copy(this).projectOnVector(e),this.sub(al)}reflect(e){return this.sub(al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},al=new R,Fu=new sn,We=class s{constructor(e,t,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],b=i[0],g=i[3],f=i[6],_=i[1],x=i[4],v=i[7],w=i[2],T=i[5],C=i[8];return r[0]=a*b+o*_+l*w,r[3]=a*g+o*x+l*T,r[6]=a*f+o*v+l*C,r[1]=c*b+h*_+u*w,r[4]=c*g+h*x+u*T,r[7]=c*f+h*v+u*C,r[2]=d*b+p*_+m*w,r[5]=d*g+p*x+m*T,r[8]=d*f+p*v+m*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,m=t*u+n*d+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=u*b,e[1]=(i*c-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=d*b,e[4]=(h*t-i*l)*b,e[5]=(i*r-o*t)*b,e[6]=p*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ol.makeScale(e,t)),this}rotate(e){return this.premultiply(ol.makeRotation(-e)),this}translate(e,t){return this.premultiply(ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ol=new We;function fh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Os(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $d(){let s=Os("canvas");return s.style.display="block",s}var Nu={};function ks(s){s in Nu||(Nu[s]=!0,console.warn(s))}function Qd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Ou=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ku=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hp(){let s={enabled:!0,workingColorSpace:kt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rt&&(i.r=ri(i.r),i.g=ri(i.g),i.b=ri(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(i.r=Ls(i.r),i.g=Ls(i.g),i.b=Ls(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===pi?Er:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ks("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ks("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[kt]:{primaries:e,whitePoint:n,transfer:Er,toXYZ:Ou,fromXYZ:ku,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:Ou,fromXYZ:ku,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}}),s}var Ze=Hp();function ri(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ls(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var xs,bo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xs===void 0&&(xs=Os("canvas")),xs.width=e.width,xs.height=e.height;let i=xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=xs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Os("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ri(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vp=0,Bs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Sn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(cl(i[a].image)):r.push(cl(i[a]))}else r=cl(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function cl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?bo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Gp=0,ll=new R,Nt=class s extends ai{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=zn,i=zn,r=Qt,a=On,o=en,l=gn,c=s.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Sn(),this.name="",this.source=new Bs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ll).x}get height(){return this.source.getSize(ll).y}get depth(){return this.source.getSize(ll).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==th)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nn:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case Fs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nn:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case Fs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=th;Nt.DEFAULT_ANISOTROPY=1;var Ye=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],b=l[2],g=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,v=(p+1)/2,w=(f+1)/2,T=(h+d)/4,C=(u+b)/4,A=(m+g)/4;return x>v&&x>w?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=C/n):v>w?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=A/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=C/r,i=A/r),this.set(n,i,r,t),this}let _=Math.sqrt((g-m)*(g-m)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-b)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vo=class extends ai{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new Nt(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Bs(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tt=class extends vo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ar=class extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xo=class extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bt=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(r,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ba.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ba.copy(n.boundingBox)),Ba.applyMatrix4(e.matrixWorld),this.union(Ba)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),za.subVectors(this.max,dr),_s.subVectors(e.a,dr),ys.subVectors(e.b,dr),Ms.subVectors(e.c,dr),xi.subVectors(ys,_s),_i.subVectors(Ms,ys),zi.subVectors(_s,Ms);let t=[0,-xi.z,xi.y,0,-_i.z,_i.y,0,-zi.z,zi.y,xi.z,0,-xi.x,_i.z,0,-_i.x,zi.z,0,-zi.x,-xi.y,xi.x,0,-_i.y,_i.x,0,-zi.y,zi.x,0];return!hl(t,_s,ys,Ms,za)||(t=[1,0,0,0,1,0,0,0,1],!hl(t,_s,ys,Ms,za))?!1:(Ha.crossVectors(xi,_i),t=[Ha.x,Ha.y,Ha.z],hl(t,_s,ys,Ms,za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Qn=[new R,new R,new R,new R,new R,new R,new R,new R],Cn=new R,Ba=new Bt,_s=new R,ys=new R,Ms=new R,xi=new R,_i=new R,zi=new R,dr=new R,za=new R,Ha=new R,Hi=new R;function hl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Hi.fromArray(s,r);let o=i.x*Math.abs(Hi.x)+i.y*Math.abs(Hi.y)+i.z*Math.abs(Hi.z),l=e.dot(Hi),c=t.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Wp=new Bt,fr=new R,ul=new R,rn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Wp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);let t=fr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(fr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(ul)),this.expandByPoint(fr.copy(e.center).sub(ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ei=new R,dl=new R,Va=new R,yi=new R,fl=new R,Ga=new R,pl=new R,Zi=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){dl.copy(e).add(t).multiplyScalar(.5),Va.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(dl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Va),o=yi.dot(this.direction),l=-yi.dot(Va),c=yi.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let b=1/h;u*=b,d*=b,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(dl).addScaledVector(Va,d),p}intersectSphere(e,t){ei.subVectors(e.center,this.origin);let n=ei.dot(this.direction),i=ei.dot(ei)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,i,r){fl.subVectors(t,e),Ga.subVectors(n,e),pl.crossVectors(fl,Ga);let a=this.direction.dot(pl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yi.subVectors(this.origin,e);let l=o*this.direction.dot(Ga.crossVectors(yi,Ga));if(l<0)return null;let c=o*this.direction.dot(fl.cross(yi));if(c<0||l+c>a)return null;let h=-o*yi.dot(pl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Re=class s{constructor(e,t,n,i,r,a,o,l,c,h,u,d,p,m,b,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,p,m,b,g)}set(e,t,n,i,r,a,o,l,c,h,u,d,p,m,b,g){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=b,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Ss.setFromMatrixColumn(e,0).length(),r=1/Ss.setFromMatrixColumn(e,1).length(),a=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*u,m=o*h,b=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+m*c,t[5]=d-b*c,t[9]=-o*l,t[2]=b-d*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,m=c*h,b=c*u;t[0]=d+b*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=b+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,m=c*h,b=c*u;t[0]=d-b*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,m=o*h,b=o*u;t[0]=l*h,t[4]=m*c-p,t[8]=d*c+b,t[1]=l*u,t[5]=b*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,m=o*l,b=o*c;t[0]=l*h,t[4]=b-d*u,t[8]=m*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+m,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*l,p=a*c,m=o*l,b=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+b,t[5]=a*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qp,e,Xp)}lookAt(e,t,n){let i=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Mi.crossVectors(n,dn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Mi.crossVectors(n,dn)),Mi.normalize(),Wa.crossVectors(dn,Mi),i[0]=Mi.x,i[4]=Wa.x,i[8]=dn.x,i[1]=Mi.y,i[5]=Wa.y,i[9]=dn.y,i[2]=Mi.z,i[6]=Wa.z,i[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],b=n[6],g=n[10],f=n[14],_=n[3],x=n[7],v=n[11],w=n[15],T=i[0],C=i[4],A=i[8],M=i[12],y=i[1],I=i[5],L=i[9],U=i[13],B=i[2],W=i[6],V=i[10],K=i[14],z=i[3],$=i[7],oe=i[11],ue=i[15];return r[0]=a*T+o*y+l*B+c*z,r[4]=a*C+o*I+l*W+c*$,r[8]=a*A+o*L+l*V+c*oe,r[12]=a*M+o*U+l*K+c*ue,r[1]=h*T+u*y+d*B+p*z,r[5]=h*C+u*I+d*W+p*$,r[9]=h*A+u*L+d*V+p*oe,r[13]=h*M+u*U+d*K+p*ue,r[2]=m*T+b*y+g*B+f*z,r[6]=m*C+b*I+g*W+f*$,r[10]=m*A+b*L+g*V+f*oe,r[14]=m*M+b*U+g*K+f*ue,r[3]=_*T+x*y+v*B+w*z,r[7]=_*C+x*I+v*W+w*$,r[11]=_*A+x*L+v*V+w*oe,r[15]=_*M+x*U+v*K+w*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],m=e[3],b=e[7],g=e[11],f=e[15];return m*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*p-n*l*p)+b*(+t*l*p-t*c*d+r*a*d-i*a*p+i*c*h-r*l*h)+g*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],b=e[13],g=e[14],f=e[15],_=u*g*c-b*d*c+b*l*p-o*g*p-u*l*f+o*d*f,x=m*d*c-h*g*c-m*l*p+a*g*p+h*l*f-a*d*f,v=h*b*c-m*u*c+m*o*p-a*b*p-h*o*f+a*u*f,w=m*u*l-h*b*l-m*o*d+a*b*d+h*o*g-a*u*g,T=t*_+n*x+i*v+r*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return e[0]=_*C,e[1]=(b*d*r-u*g*r-b*i*p+n*g*p+u*i*f-n*d*f)*C,e[2]=(o*g*r-b*l*r+b*i*c-n*g*c-o*i*f+n*l*f)*C,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*p-n*l*p)*C,e[4]=x*C,e[5]=(h*g*r-m*d*r+m*i*p-t*g*p-h*i*f+t*d*f)*C,e[6]=(m*l*r-a*g*r-m*i*c+t*g*c+a*i*f-t*l*f)*C,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*p+t*l*p)*C,e[8]=v*C,e[9]=(m*u*r-h*b*r-m*n*p+t*b*p+h*n*f-t*u*f)*C,e[10]=(a*b*r-m*o*r+m*n*c-t*b*c-a*n*f+t*o*f)*C,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*p-t*o*p)*C,e[12]=w*C,e[13]=(h*b*i-m*u*i+m*n*d-t*b*d-h*n*g+t*u*g)*C,e[14]=(m*o*i-a*b*i-m*n*l+t*b*l+a*n*g-t*o*g)*C,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*C,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,m=r*u,b=a*h,g=a*u,f=o*u,_=l*c,x=l*h,v=l*u,w=n.x,T=n.y,C=n.z;return i[0]=(1-(b+f))*w,i[1]=(p+v)*w,i[2]=(m-x)*w,i[3]=0,i[4]=(p-v)*T,i[5]=(1-(d+f))*T,i[6]=(g+_)*T,i[7]=0,i[8]=(m+x)*C,i[9]=(g-_)*C,i[10]=(1-(d+b))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Ss.set(i[0],i[1],i[2]).length(),a=Ss.set(i[4],i[5],i[6]).length(),o=Ss.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Pn.copy(this);let c=1/r,h=1/a,u=1/o;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,t.setFromRotationMatrix(Pn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Ln,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),p=(n+i)/(n-i),m,b;if(l)m=r/(a-r),b=a*r/(a-r);else if(o===Ln)m=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Tr)m=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Ln,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),p=-(n+i)/(n-i),m,b;if(l)m=1/(a-r),b=a/(a-r);else if(o===Ln)m=-2/(a-r),b=-(a+r)/(a-r);else if(o===Tr)m=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ss=new R,Pn=new Re,qp=new R(0,0,0),Xp=new R(1,1,1),Mi=new R,Wa=new R,dn=new R,Bu=new Re,zu=new sn,Fn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zu.setFromEuler(this),this.setFromQuaternion(zu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fn.DEFAULT_ORDER="XYZ";var Rr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},jp=0,Hu=new R,ws=new sn,ti=new Re,qa=new R,pr=new R,Yp=new R,Kp=new sn,Vu=new R(1,0,0),Gu=new R(0,1,0),Wu=new R(0,0,1),qu={type:"added"},Zp={type:"removed"},Es={type:"childadded",child:null},ml={type:"childremoved",child:null},bt=class s extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new R,t=new Fn,n=new sn,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new We}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Vu,e)}rotateY(e){return this.rotateOnAxis(Gu,e)}rotateZ(e){return this.rotateOnAxis(Wu,e)}translateOnAxis(e,t){return Hu.copy(e).applyQuaternion(this.quaternion),this.position.add(Hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vu,e)}translateY(e){return this.translateOnAxis(Gu,e)}translateZ(e){return this.translateOnAxis(Wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qa.copy(e):qa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(pr,qa,this.up):ti.lookAt(qa,pr,this.up),this.quaternion.setFromRotationMatrix(ti),i&&(ti.extractRotation(i.matrixWorld),ws.setFromRotationMatrix(ti),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qu),Es.child=e,this.dispatchEvent(Es),Es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zp),ml.child=e,this.dispatchEvent(ml),ml.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qu),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,e,Yp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,Kp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};bt.DEFAULT_UP=new R(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=new R,ni=new R,gl=new R,ii=new R,Ts=new R,As=new R,Xu=new R,bl=new R,vl=new R,xl=new R,_l=new Ye,yl=new Ye,Ml=new Ye,Ei=class s{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),In.subVectors(e,t),i.cross(In);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){In.subVectors(i,t),ni.subVectors(n,t),gl.subVectors(e,t);let a=In.dot(In),o=In.dot(ni),l=In.dot(gl),c=ni.dot(ni),h=ni.dot(gl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-p-m,m,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return _l.setScalar(0),yl.setScalar(0),Ml.setScalar(0),_l.fromBufferAttribute(e,t),yl.fromBufferAttribute(e,n),Ml.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(_l,r.x),a.addScaledVector(yl,r.y),a.addScaledVector(Ml,r.z),a}static isFrontFacing(e,t,n,i){return In.subVectors(n,t),ni.subVectors(e,t),In.cross(ni).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),In.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Ts.subVectors(i,n),As.subVectors(r,n),bl.subVectors(e,n);let l=Ts.dot(bl),c=As.dot(bl);if(l<=0&&c<=0)return t.copy(n);vl.subVectors(e,i);let h=Ts.dot(vl),u=As.dot(vl);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ts,a);xl.subVectors(e,r);let p=Ts.dot(xl),m=As.dot(xl);if(m>=0&&p<=m)return t.copy(r);let b=p*c-l*m;if(b<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(As,o);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return Xu.subVectors(r,i),o=(u-h)/(u-h+(p-m)),t.copy(i).addScaledVector(Xu,o);let f=1/(g+b+d);return a=b*f,o=d*f,t.copy(n).addScaledVector(Ts,a).addScaledVector(As,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Sl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=dh(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Sl(a,r,e+1/3),this.g=Sl(a,r,e),this.b=Sl(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,i),this}setStyle(e,t=wt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){let n=ef[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return Ze.workingToColorSpace(Wt.copy(this),e),Math.round(qe(Wt.r*255,0,255))*65536+Math.round(qe(Wt.g*255,0,255))*256+Math.round(qe(Wt.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Wt.copy(this),t);let n=Wt.r,i=Wt.g,r=Wt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=wt){Ze.workingToColorSpace(Wt.copy(this),e);let t=Wt.r,n=Wt.g,i=Wt.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(Xa);let n=Mr(Si.h,Xa.h,t),i=Mr(Si.s,Xa.s,t),r=Mr(Si.l,Xa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new me;me.NAMES=ef;var Jp=0,qt=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=qi,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=po,this.blendDst=mo,this.blendEquation=pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==po&&(n.blendSrc=this.blendSrc),this.blendDst!==mo&&(n.blendDst=this.blendDst),this.blendEquation!==pn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Xt=class extends qt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Rt=new R,ja=new re,$p=0,Et=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$p++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=go,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ja.fromBufferAttribute(this,t),ja.applyMatrix3(e),this.setXY(t,ja.x,ja.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==go&&(e.usage=this.usage),e}};var Cr=class extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Pr=class extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ke=class extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}},Qp=0,Mn=new Re,wl=new bt,Rs=new R,fn=new Bt,mr=new Bt,Ft=new R,mt=class s extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fh(e)?Pr:Cr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return wl.lookAt(e),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ke(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];mr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(fn.min,mr.min),fn.expandByPoint(Ft),Ft.addVectors(fn.max,mr.max),fn.expandByPoint(Ft)):(fn.expandByPoint(mr.min),fn.expandByPoint(mr.max))}fn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ft.fromBufferAttribute(o,c),l&&(Rs.fromBufferAttribute(e,c),Ft.add(Rs)),i=Math.max(i,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<n.count;A++)o[A]=new R,l[A]=new R;let c=new R,h=new R,u=new R,d=new re,p=new re,m=new re,b=new R,g=new R;function f(A,M,y){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,M),m.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(d),m.sub(d);let I=1/(p.x*m.y-m.x*p.y);isFinite(I)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(I),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(I),o[A].add(b),o[M].add(b),o[y].add(b),l[A].add(g),l[M].add(g),l[y].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let A=0,M=_.length;A<M;++A){let y=_[A],I=y.start,L=y.count;for(let U=I,B=I+L;U<B;U+=3)f(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let x=new R,v=new R,w=new R,T=new R;function C(A){w.fromBufferAttribute(i,A),T.copy(w);let M=o[A];x.copy(M),x.sub(w.multiplyScalar(w.dot(M))).normalize(),v.crossVectors(T,M);let I=v.dot(l[A])<0?-1:1;a.setXYZW(A,x.x,x.y,x.z,I)}for(let A=0,M=_.length;A<M;++A){let y=_[A],I=y.start,L=y.count;for(let U=I,B=I+L;U<B;U+=3)C(e.getX(U+0)),C(e.getX(U+1)),C(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,m=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*h;for(let f=0;f<h;f++)d[m++]=c[p++]}return new Et(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ju=new Re,Vi=new Zi,Ya=new rn,Yu=new R,Ka=new R,Za=new R,Ja=new R,El=new R,$a=new R,Ku=new R,Qa=new R,Ie=class extends bt{constructor(e=new mt,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){$a.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(El.fromBufferAttribute(u,e),a?$a.addScaledVector(El,h):$a.addScaledVector(El.sub(t),h))}t.add($a)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(r),Vi.copy(e.ray).recast(e.near),!(Ya.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Ya,Yu)===null||Vi.origin.distanceToSquared(Yu)>(e.far-e.near)**2))&&(ju.copy(r).invert(),Vi.copy(e.ray).applyMatrix4(ju),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vi)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],f=a[g.materialIndex],_=Math.max(g.start,p.start),x=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let v=_,w=x;v<w;v+=3){let T=o.getX(v),C=o.getX(v+1),A=o.getX(v+2);i=eo(this,f,e,n,c,h,u,T,C,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let g=m,f=b;g<f;g+=3){let _=o.getX(g),x=o.getX(g+1),v=o.getX(g+2);i=eo(this,a,e,n,c,h,u,_,x,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],f=a[g.materialIndex],_=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let v=_,w=x;v<w;v+=3){let T=v,C=v+1,A=v+2;i=eo(this,f,e,n,c,h,u,T,C,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let g=m,f=b;g<f;g+=3){let _=g,x=g+1,v=g+2;i=eo(this,a,e,n,c,h,u,_,x,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function em(s,e,t,n,i,r,a,o){let l;if(e.side===Ht?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Un,o),l===null)return null;Qa.copy(o),Qa.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Qa);return c<t.near||c>t.far?null:{distance:c,point:Qa.clone(),object:s}}function eo(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Ka),s.getVertexPosition(l,Za),s.getVertexPosition(c,Ja);let h=em(s,e,t,n,Ka,Za,Ja,Ku);if(h){let u=new R;Ei.getBarycoord(Ku,Ka,Za,Ja,u),i&&(h.uv=Ei.getInterpolatedAttribute(i,o,l,c,u,new re)),r&&(h.uv1=Ei.getInterpolatedAttribute(r,o,l,c,u,new re)),a&&(h.normal=Ei.getInterpolatedAttribute(a,o,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new R,materialIndex:0};Ei.getNormal(Ka,Za,Ja,d.normal),h.face=d,h.barycoord=u}return h}var an=class s extends mt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function m(b,g,f,_,x,v,w,T,C,A,M){let y=v/C,I=w/A,L=v/2,U=w/2,B=T/2,W=C+1,V=A+1,K=0,z=0,$=new R;for(let oe=0;oe<V;oe++){let ue=oe*I-U;for(let Ee=0;Ee<W;Ee++){let Oe=Ee*y-L;$[b]=Oe*_,$[g]=ue*x,$[f]=B,c.push($.x,$.y,$.z),$[b]=0,$[g]=0,$[f]=T>0?1:-1,h.push($.x,$.y,$.z),u.push(Ee/C),u.push(1-oe/A),K+=1}}for(let oe=0;oe<A;oe++)for(let ue=0;ue<C;ue++){let Ee=d+ue+W*oe,Oe=d+ue+W*(oe+1),tt=d+(ue+1)+W*(oe+1),ke=d+(ue+1)+W*oe;l.push(Ee,Oe,ke),l.push(Oe,tt,ke),z+=6}o.addGroup(p,z,M),p+=z,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function cs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Yt(s){let e={};for(let t=0;t<s.length;t++){let n=cs(s[t]);for(let i in n)e[i]=n[i]}return e}function tm(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ph(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var cn={clone:cs,merge:Yt},nm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,im=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$e=class extends qt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nm,this.fragmentShader=im,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=tm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ir=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wi=new R,Zu=new re,Ju=new re,St=class extends Ir{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ki*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,Zu,Ju),t.subVectors(Ju,Zu)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Cs=-90,Ps=1,_o=class extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new St(Cs,Ps,e,t);i.layers=this.layers,this.add(i);let r=new St(Cs,Ps,e,t);r.layers=this.layers,this.add(r);let a=new St(Cs,Ps,e,t);a.layers=this.layers,this.add(a);let o=new St(Cs,Ps,e,t);o.layers=this.layers,this.add(o);let l=new St(Cs,Ps,e,t);l.layers=this.layers,this.add(l);let c=new St(Cs,Ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Dr=class extends Nt{constructor(e=[],t=rs,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yo=class extends Tt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Dr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new an(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Pt});r.uniforms.tEquirect.value=t;let a=new Ie(i,r),o=t.minFilter;return t.minFilter===On&&(t.minFilter=Qt),new _o(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},It=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},sm={type:"move"},zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),f=this._getHandJoint(c,b);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new It;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Lr=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new me(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Hs=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=go,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Jt=new R,Gs=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var $u=new R,Qu=new Ye,ed=new Ye,rm=new R,td=new Re,to=new R,Tl=new rn,nd=new Re,Al=new Zi,Ur=class extends Ie{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nl,this.bindMatrix=new Re,this.bindMatrixInverse=new Re,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,to),this.boundingBox.expandByPoint(to)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new rn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,to),this.boundingSphere.expandByPoint(to)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tl.copy(this.boundingSphere),Tl.applyMatrix4(i),e.ray.intersectsSphere(Tl)!==!1&&(nd.copy(i).invert(),Al.copy(e.ray).applyMatrix4(nd),!(this.boundingBox!==null&&Al.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Al)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ye,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Nl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Qu.fromBufferAttribute(i.attributes.skinIndex,e),ed.fromBufferAttribute(i.attributes.skinWeight,e),$u.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=ed.getComponent(r);if(a!==0){let o=Qu.getComponent(r);td.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(rm.copy($u).applyMatrix4(td),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ws=class extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Nn=class extends Nt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Ct,h=Ct,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},id=new Re,am=new Re,Fr=class s{constructor(e=[],t=[]){this.uuid=Sn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Re)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Re;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:am;id.multiplyMatrices(o,t[r]),id.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Nn(t,e,e,en,En);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Ws),this.bones.push(a),this.boneInverses.push(new Re().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Ti=class extends Et{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Is=new Re,sd=new Re,no=[],rd=new Bt,om=new Re,gr=new Ie,br=new rn,Nr=class extends Ie{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ti(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,om)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),rd.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(rd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),br.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),e.ray.intersectsSphere(br)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Is),sd.multiplyMatrices(n,Is),gr.matrixWorld=sd,gr.raycast(e,no);for(let a=0,o=no.length;a<o;a++){let l=no[a];l.instanceId=r,l.object=this,t.push(l)}no.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ti(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nn(new Float32Array(i*this.count),i,this.count,sc,En));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Rl=new R,cm=new R,lm=new We,$t=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Rl.subVectors(n,t).cross(cm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Rl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||lm.getNormalMatrix(e),i=this.coplanarPoint(Rl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gi=new rn,hm=new re(.5,.5),io=new R,qs=class{constructor(e=new $t,t=new $t,n=new $t,i=new $t,r=new $t,a=new $t){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],m=r[8],b=r[9],g=r[10],f=r[11],_=r[12],x=r[13],v=r[14],w=r[15];if(i[0].setComponents(c-a,p-h,f-m,w-_).normalize(),i[1].setComponents(c+a,p+h,f+m,w+_).normalize(),i[2].setComponents(c+o,p+u,f+b,w+x).normalize(),i[3].setComponents(c-o,p-u,f-b,w-x).normalize(),n)i[4].setComponents(l,d,g,v).normalize(),i[5].setComponents(c-l,p-d,f-g,w-v).normalize();else if(i[4].setComponents(c-l,p-d,f-g,w-v).normalize(),t===Ln)i[5].setComponents(c+l,p+d,f+g,w+v).normalize();else if(t===Tr)i[5].setComponents(l,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){Gi.center.set(0,0,0);let t=hm.distanceTo(e.center);return Gi.radius=.7071067811865476+t,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(io.x=i.normal.x>0?e.max.x:e.min.x,io.y=i.normal.y>0?e.max.y:e.min.y,io.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(io)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xs=class extends qt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Mo=new R,So=new R,ad=new Re,vr=new Zi,so=new rn,Cl=new R,od=new R,Ji=class extends bt{constructor(e=new mt,t=new Xs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Mo.fromBufferAttribute(t,i-1),So.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Mo.distanceTo(So);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(i),so.radius+=r,e.ray.intersectsSphere(so)===!1)return;ad.copy(i).invert(),vr.copy(e.ray).applyMatrix4(ad);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let b=p,g=m-1;b<g;b+=c){let f=h.getX(b),_=h.getX(b+1),x=ro(this,e,vr,l,f,_,b);x&&t.push(x)}if(this.isLineLoop){let b=h.getX(m-1),g=h.getX(p),f=ro(this,e,vr,l,b,g,m-1);f&&t.push(f)}}else{let p=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let b=p,g=m-1;b<g;b+=c){let f=ro(this,e,vr,l,b,b+1,b);f&&t.push(f)}if(this.isLineLoop){let b=ro(this,e,vr,l,m-1,p,m-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ro(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(Mo.fromBufferAttribute(o,i),So.fromBufferAttribute(o,r),t.distanceSqToSegment(Mo,So,Cl,od)>n)return;Cl.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Cl);if(!(c<e.near||c>e.far))return{distance:c,point:od.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var cd=new R,ld=new R,Or=class extends Ji{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)cd.fromBufferAttribute(t,i),ld.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+cd.distanceTo(ld);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},kr=class extends Ji{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},js=class extends qt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hd=new Re,Hl=new Zi,ao=new rn,oo=new R,Br=class extends bt{constructor(e=new mt,t=new js){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(i),ao.radius+=r,e.ray.intersectsSphere(ao)===!1)return;hd.copy(i).invert(),Hl.copy(e.ray).applyMatrix4(hd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let m=d,b=p;m<b;m++){let g=c.getX(m);oo.fromBufferAttribute(u,g),ud(oo,g,l,i,e,t,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let m=d,b=p;m<b;m++)oo.fromBufferAttribute(u,m),ud(oo,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ud(s,e,t,n,i,r,a){let o=Hl.distanceSqToPoint(s);if(o<t){let l=new R;Hl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var $i=class extends Nt{constructor(e,t,n=Ci,i,r,a,o=Ct,l=Ct,c,h=Ns,u=1){if(h!==Ns&&h!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},zr=class extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var oi=class s extends mt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],p=[],m=0,b=[],g=n/2,f=0;_(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(d,3)),this.setAttribute("uv",new Ke(p,2));function _(){let v=new R,w=new R,T=0,C=(t-e)/n;for(let A=0;A<=r;A++){let M=[],y=A/r,I=y*(t-e)+e;for(let L=0;L<=i;L++){let U=L/i,B=U*l+o,W=Math.sin(B),V=Math.cos(B);w.x=I*W,w.y=-y*n+g,w.z=I*V,u.push(w.x,w.y,w.z),v.set(W,C,V).normalize(),d.push(v.x,v.y,v.z),p.push(U,1-y),M.push(m++)}b.push(M)}for(let A=0;A<i;A++)for(let M=0;M<r;M++){let y=b[M][A],I=b[M+1][A],L=b[M+1][A+1],U=b[M][A+1];(e>0||M!==0)&&(h.push(y,I,U),T+=3),(t>0||M!==r-1)&&(h.push(I,L,U),T+=3)}c.addGroup(f,T,0),f+=T}function x(v){let w=m,T=new re,C=new R,A=0,M=v===!0?e:t,y=v===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,g*y,0),d.push(0,y,0),p.push(.5,.5),m++;let I=m;for(let L=0;L<=i;L++){let B=L/i*l+o,W=Math.cos(B),V=Math.sin(B);C.x=M*V,C.y=g*y,C.z=M*W,u.push(C.x,C.y,C.z),d.push(0,y,0),T.x=W*.5+.5,T.y=V*.5*y+.5,p.push(T.x,T.y),m++}for(let L=0;L<i;L++){let U=w+L,B=I+L;v===!0?h.push(B,B+1,U):h.push(B+1,B,U),A+=3}c.addGroup(f,A,v===!0?1:2),f+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Hr=class s extends oi{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},wo=class s extends mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(r.slice(),3)),this.setAttribute("uv",new Ke(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let x=new R,v=new R,w=new R;for(let T=0;T<t.length;T+=3)p(t[T+0],x),p(t[T+1],v),p(t[T+2],w),l(x,v,w,_)}function l(_,x,v,w){let T=w+1,C=[];for(let A=0;A<=T;A++){C[A]=[];let M=_.clone().lerp(v,A/T),y=x.clone().lerp(v,A/T),I=T-A;for(let L=0;L<=I;L++)L===0&&A===T?C[A][L]=M:C[A][L]=M.clone().lerp(y,L/I)}for(let A=0;A<T;A++)for(let M=0;M<2*(T-A)-1;M++){let y=Math.floor(M/2);M%2===0?(d(C[A][y+1]),d(C[A+1][y]),d(C[A][y])):(d(C[A][y+1]),d(C[A+1][y+1]),d(C[A+1][y]))}}function c(_){let x=new R;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(_),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){let _=new R;for(let x=0;x<r.length;x+=3){_.x=r[x+0],_.y=r[x+1],_.z=r[x+2];let v=g(_)/2/Math.PI+.5,w=f(_)/Math.PI+.5;a.push(v,1-w)}m(),u()}function u(){for(let _=0;_<a.length;_+=6){let x=a[_+0],v=a[_+2],w=a[_+4],T=Math.max(x,v,w),C=Math.min(x,v,w);T>.9&&C<.1&&(x<.2&&(a[_+0]+=1),v<.2&&(a[_+2]+=1),w<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function p(_,x){let v=_*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function m(){let _=new R,x=new R,v=new R,w=new R,T=new re,C=new re,A=new re;for(let M=0,y=0;M<r.length;M+=9,y+=6){_.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),T.set(a[y+0],a[y+1]),C.set(a[y+2],a[y+3]),A.set(a[y+4],a[y+5]),w.copy(_).add(x).add(v).divideScalar(3);let I=g(w);b(T,y+0,_,I),b(C,y+2,x,I),b(A,y+4,v,I)}}function b(_,x,v,w){w<0&&_.x===1&&(a[x]=_.x-1),v.x===0&&v.z===0&&(a[x]=w/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,p=(a-h)/d;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new re:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,i=[],r=[],a=[],o=new R,l=new Re;for(let p=0;p<=e;p++){let m=p/e;i[p]=this.getTangentAt(m,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(qe(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(qe(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],p*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ys=class extends mn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new re){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Eo=class extends Ys{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function mh(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var co=new R,Pl=new mh,Il=new mh,Dl=new mh,Qi=class extends mn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(co.subVectors(i[0],i[1]).add(i[0]),c=co);let u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(co.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=co),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),p),b=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);b<1e-4&&(b=1),m<1e-4&&(m=b),g<1e-4&&(g=b),Pl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,b,g),Il.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,b,g),Dl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,b,g)}else this.curveType==="catmullrom"&&(Pl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Il.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Dl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Pl.calc(l),Il.calc(l),Dl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function dd(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function um(s,e){let t=1-s;return t*t*e}function dm(s,e){return 2*(1-s)*s*e}function fm(s,e){return s*s*e}function Sr(s,e,t,n){return um(s,e)+dm(s,t)+fm(s,n)}function pm(s,e){let t=1-s;return t*t*t*e}function mm(s,e){let t=1-s;return 3*t*t*s*e}function gm(s,e){return 3*(1-s)*s*s*e}function bm(s,e){return s*s*s*e}function wr(s,e,t,n,i){return pm(s,e)+mm(s,t)+gm(s,n)+bm(s,i)}var Vr=class extends mn{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wr(e,i.x,r.x,a.x,o.x),wr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ks=class extends mn{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wr(e,i.x,r.x,a.x,o.x),wr(e,i.y,r.y,a.y,o.y),wr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gr=class extends mn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},To=class extends mn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wr=class extends mn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Sr(e,i.x,r.x,a.x),Sr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ao=class extends mn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Sr(e,i.x,r.x,a.x),Sr(e,i.y,r.y,a.y),Sr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qr=class extends mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(dd(o,l.x,c.x,h.x,u.x),dd(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new re().fromArray(i))}return this}},fd=Object.freeze({__proto__:null,ArcCurve:Eo,CatmullRomCurve3:Qi,CubicBezierCurve:Vr,CubicBezierCurve3:Ks,EllipseCurve:Ys,LineCurve:Gr,LineCurve3:To,QuadraticBezierCurve:Wr,QuadraticBezierCurve3:Ao,SplineCurve:qr}),Ro=class extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fd[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new fd[i.type]().fromJSON(i))}return this}},Xr=class extends Ro{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Gr(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Wr(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new Vr(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new qr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){let c=new Ys(e,t,n,i,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ai=class extends Xr{constructor(e){super(e),this.uuid=Sn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Xr().fromJSON(i))}return this}};function vm(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=tf(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Sm(s,e,r,t)),s.length>80*t){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<i;d+=t){let p=s[d],m=s[d+1];p<o&&(o=p),m<l&&(l=m),p>h&&(h=p),m>u&&(u=m)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return jr(r,a,t,o,l,c,0),a}function tf(s,e,t,n,i){let r;if(i===Um(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=pd(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=pd(a/n|0,s[a],s[a+1],r);return r&&Zs(r,r.next)&&(Kr(r),r=r.next),r}function es(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Zs(t,t.next)||_t(t.prev,t,t.next)===0)){if(Kr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function jr(s,e,t,n,i,r,a){if(!s)return;!a&&r&&Rm(s,n,i,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?_m(s,n,i,r):xm(s)){e.push(l.i,s.i,c.i),Kr(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=ym(es(s),e),jr(s,e,t,n,i,r,2)):a===2&&Mm(s,e,t,n,i,r):jr(es(s),e,t,n,i,r,1);break}}}function xm(s){let e=s.prev,t=s,n=s.next;if(_t(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,r,a),u=Math.min(o,l,c),d=Math.max(i,r,a),p=Math.max(o,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&_r(i,o,r,l,a,c,m.x,m.y)&&_t(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function _m(s,e,t,n){let i=s.prev,r=s,a=s.next;if(_t(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,p=Math.min(o,l,c),m=Math.min(h,u,d),b=Math.max(o,l,c),g=Math.max(h,u,d),f=Vl(p,m,e,t,n),_=Vl(b,g,e,t,n),x=s.prevZ,v=s.nextZ;for(;x&&x.z>=f&&v&&v.z<=_;){if(x.x>=p&&x.x<=b&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&_r(o,h,l,u,c,d,x.x,x.y)&&_t(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=p&&v.x<=b&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&_r(o,h,l,u,c,d,v.x,v.y)&&_t(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=b&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&_r(o,h,l,u,c,d,x.x,x.y)&&_t(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=_;){if(v.x>=p&&v.x<=b&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&_r(o,h,l,u,c,d,v.x,v.y)&&_t(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function ym(s,e){let t=s;do{let n=t.prev,i=t.next.next;!Zs(n,i)&&sf(n,t,t.next,i)&&Yr(n,i)&&Yr(i,n)&&(e.push(n.i,t.i,i.i),Kr(t),Kr(t.next),t=s=i),t=t.next}while(t!==s);return es(t)}function Mm(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Im(a,o)){let l=rf(a,o);a=es(a,a.next),l=es(l,l.next),jr(a,e,t,n,i,r,0),jr(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Sm(s,e,t,n){let i=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=tf(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Pm(c))}i.sort(wm);for(let r=0;r<i.length;r++)t=Em(i[r],t);return t}function wm(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Em(s,e){let t=Tm(s,e);if(!t)return e;let n=rf(t,s);return es(n,n.next),es(t,t.next)}function Tm(s,e){let t=e,n=s.x,i=s.y,r=-1/0,a;if(Zs(s,t))return t;do{if(Zs(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&nf(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);Yr(t,s)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Am(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Am(s,e){return _t(s.prev,s,e.prev)<0&&_t(e.next,s,s.next)<0}function Rm(s,e,t,n){let i=s;do i.z===0&&(i.z=Vl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Cm(i)}function Cm(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function Vl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Pm(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function nf(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function _r(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&nf(s,e,t,n,i,r,a,o)}function Im(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Dm(s,e)&&(Yr(s,e)&&Yr(e,s)&&Lm(s,e)&&(_t(s.prev,s,e.prev)||_t(s,e.prev,e))||Zs(s,e)&&_t(s.prev,s,s.next)>0&&_t(e.prev,e,e.next)>0)}function _t(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Zs(s,e){return s.x===e.x&&s.y===e.y}function sf(s,e,t,n){let i=ho(_t(s,e,t)),r=ho(_t(s,e,n)),a=ho(_t(t,n,s)),o=ho(_t(t,n,e));return!!(i!==r&&a!==o||i===0&&lo(s,t,e)||r===0&&lo(s,n,e)||a===0&&lo(t,s,n)||o===0&&lo(t,e,n))}function lo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ho(s){return s>0?1:s<0?-1:0}function Dm(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&sf(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Yr(s,e){return _t(s.prev,s,s.next)<0?_t(s,e,s.next)>=0&&_t(s,s.prev,e)>=0:_t(s,e,s.prev)<0||_t(s,s.next,e)<0}function Lm(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function rf(s,e){let t=Gl(s.i,s.x,s.y),n=Gl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function pd(s,e,t,n){let i=Gl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Kr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Gl(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Um(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Wl=class{static triangulate(e,t,n=2){return vm(e,t,n)}},Us=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];md(e),gd(n,e);let a=e.length;t.forEach(md);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,gd(n,t[l]);let o=Wl.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function md(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function gd(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Zr=class s extends wo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var At=class s extends mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],m=[],b=[],g=[];for(let f=0;f<h;f++){let _=f*d-a;for(let x=0;x<c;x++){let v=x*u-r;m.push(v,-_,0),b.push(0,0,1),g.push(x/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){let x=_+c*f,v=_+c*(f+1),w=_+1+c*(f+1),T=_+1+c*f;p.push(x,v,T),p.push(v,w,T)}this.setIndex(p),this.setAttribute("position",new Ke(m,3)),this.setAttribute("normal",new Ke(b,3)),this.setAttribute("uv",new Ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Jr=class s extends mt{constructor(e=new Ai([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ke(i,3)),this.setAttribute("normal",new Ke(r,3)),this.setAttribute("uv",new Ke(a,2));function c(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,m=d.holes;Us.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,f=m.length;g<f;g++){let _=m[g];Us.isClockWise(_)===!0&&(m[g]=_.reverse())}let b=Us.triangulateShape(p,m);for(let g=0,f=m.length;g<f;g++){let _=m[g];p=p.concat(_)}for(let g=0,f=p.length;g<f;g++){let _=p[g];i.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let g=0,f=b.length;g<f;g++){let _=b[g],x=_[0]+u,v=_[1]+u,w=_[2]+u;n.push(x,v,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Fm(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let a=t[e.shapes[i]];n.push(a)}return new s(n,e.curveSegments)}};function Fm(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var $r=class s extends mt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new R,d=new R,p=[],m=[],b=[],g=[];for(let f=0;f<=n;f++){let _=[],x=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&l===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){let T=w/t;u.x=-e*Math.cos(i+T*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+T*r)*Math.sin(a+x*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),g.push(T+v,1-x),_.push(c++)}h.push(_)}for(let f=0;f<n;f++)for(let _=0;_<t;_++){let x=h[f][_+1],v=h[f][_],w=h[f+1][_],T=h[f+1][_+1];(f!==0||a>0)&&p.push(x,v,T),(f!==n-1||l<Math.PI)&&p.push(v,w,T)}this.setIndex(p),this.setAttribute("position",new Ke(m,3)),this.setAttribute("normal",new Ke(b,3)),this.setAttribute("uv",new Ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ts=class extends qt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new me(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Qr=class extends $e{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},jt=class extends qt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nc,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zt=class extends jt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ea=class extends qt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nc,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Co=class extends qt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Po=class extends qt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function uo(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Nm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Om(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function bd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function af(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var ci=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Io=class extends ci{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ol,endingEnd:Ol}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case kl:r=e,o=2*t-n;break;case Bl:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case kl:a=e,l=2*n-t;break;case Bl:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-t)/(i-t),b=m*m,g=b*m,f=-d*g+2*d*b-d*m,_=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*m+1,x=(-1-p)*g+(1.5+p)*b+.5*m,v=p*g-p*b;for(let w=0;w!==o;++w)r[w]=f*a[h+w]+_*a[c+w]+x*a[l+w]+v*a[u+w];return r}},Do=class extends ci{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Lo=class extends ci{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},on=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=uo(t,this.TimeBufferType),this.values=uo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:uo(e.times,Array),values:uo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Do(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Io(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ji:t=this.InterpolantFactoryMethodDiscrete;break;case Yi:t=this.InterpolantFactoryMethodLinear;break;case fo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ji;case this.InterpolantFactoryMethodLinear:return Yi;case this.InterpolantFactoryMethodSmooth:return fo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Nm(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===fo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let m=0;m!==n;++m){let b=t[u+m];if(b!==t[d+m]||b!==t[p+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};on.prototype.ValueTypeName="";on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=Yi;var li=class extends on{constructor(e,t,n){super(e,t,n)}};li.prototype.ValueTypeName="bool";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=ji;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends on{constructor(e,t,n,i){super(e,t,n,i)}};ta.prototype.ValueTypeName="color";var Vn=class extends on{constructor(e,t,n,i){super(e,t,n,i)}};Vn.prototype.ValueTypeName="number";var Uo=class extends ci{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)sn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Gn=class extends on{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Uo(this.times,this.values,this.getValueSize(),e)}};Gn.prototype.ValueTypeName="quaternion";Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends on{constructor(e,t,n){super(e,t,n)}};hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=ji;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wn=class extends on{constructor(e,t,n,i){super(e,t,n,i)}};Wn.prototype.ValueTypeName="vector";var na=class{constructor(e="",t=-1,n=[],i=Hd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Sn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Bm(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(on.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Om(l);l=bd(l,1,h),c=bd(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Vn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,p,m,b){if(p.length!==0){let g=[],f=[];af(p,g,f,m),g.length!==0&&b.push(new u(d,g,f))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let b=0;b<d[m].morphTargets.length;b++)p[d[m].morphTargets[b]]=-1;for(let b in p){let g=[],f=[];for(let _=0;_!==d[m].morphTargets.length;++_){let x=d[m];g.push(x.time),f.push(x.morphTarget===b?1:0)}i.push(new Vn(".morphTargetInfluence["+b+"]",g,f))}l=p.length*a}else{let p=".bones["+t[u].name+"]";n(Wn,p+".position",d,"pos",i),n(Gn,p+".quaternion",d,"rot",i),n(Wn,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function km(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vn;case"vector":case"vector2":case"vector3":case"vector4":return Wn;case"color":return ta;case"quaternion":return Gn;case"bool":case"boolean":return li;case"string":return hi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Bm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=km(s.type);if(s.times===void 0){let t=[],n=[];af(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Hn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Fo=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},of=new Fo,qn=class{constructor(e){this.manager=e!==void 0?e:of,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};qn.DEFAULT_MATERIAL_NAME="__DEFAULT";var si={},ql=class extends Error{constructor(e,t){super(e),this.response=t}},Js=class extends qn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Hn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(si[e]!==void 0){si[e].push({onLoad:t,onProgress:n,onError:i});return}si[e]=[],si[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=si[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,m=p!==0,b=0,g=new ReadableStream({start(f){_();function _(){u.read().then(({done:x,value:v})=>{if(x)f.close();else{b+=v.byteLength;let w=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:p});for(let T=0,C=h.length;T<C;T++){let A=h[T];A.onProgress&&A.onProgress(w)}f.enqueue(v),_()}},x=>{f.error(x)})}}});return new Response(g)}else throw new ql(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(m=>p.decode(m))}}}).then(c=>{Hn.add(`file:${e}`,c);let h=si[e];delete si[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=si[e];if(h===void 0)throw this.manager.itemError(e),c;delete si[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ds=new WeakMap,No=class extends qn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Hn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Ds.get(a);u===void 0&&(u=[],Ds.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=Os("img");function l(){h(),t&&t(this);let u=Ds.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}Ds.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),Hn.remove(`image:${e}`);let d=Ds.get(this)||[];for(let p=0;p<d.length;p++){let m=d[p];m.onError&&m.onError(u)}Ds.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Hn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var ia=class extends qn{constructor(e){super(e)}load(e,t,n,i){let r=new Nt,a=new No(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},ns=class extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},sa=class extends ns{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ll=new Re,vd=new R,xd=new R,ra=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;vd.setFromMatrixPosition(e.matrixWorld),t.position.copy(vd),xd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xd),t.updateMatrixWorld(),Ll.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ll)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xl=class extends ra{constructor(){super(new St(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ki*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},aa=class extends ns{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Xl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},_d=new Re,xr=new R,Ul=new R,jl=class extends ra{constructor(){super(new St(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),xr.setFromMatrixPosition(e.matrixWorld),n.position.copy(xr),Ul.copy(n.position),Ul.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ul),n.updateMatrixWorld(),i.makeTranslation(-xr.x,-xr.y,-xr.z),_d.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_d,n.coordinateSystem,n.reversedDepth)}},oa=class extends ns{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ui=class extends Ir{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yl=class extends ra{constructor(){super(new ui(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ri=class extends ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Yl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var di=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Fl=new WeakMap,ca=class extends qn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Hn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(Fl.has(a)===!0)i&&i(Fl.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Hn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Fl.set(l,c),Hn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Hn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Oo=class extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},la=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var gh="\\[\\]\\.:\\/",zm=new RegExp("["+gh+"]","g"),bh="[^"+gh+"]",Hm="[^"+gh.replace("\\.","")+"]",Vm=/((?:WC+[\/:])*)/.source.replace("WC",bh),Gm=/(WCOD+)?/.source.replace("WCOD",Hm),Wm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bh),qm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bh),Xm=new RegExp("^"+Vm+Gm+Wm+qm+"$"),jm=["material","materials","bones","map"],Kl=class{constructor(e,t,n){let i=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zm,"")}static parseTrackName(e){let t=Xm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);jm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=Kl;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $x=new Float32Array(1);var is=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};function vh(s,e,t,n){let i=Ym(n);switch(t){case ah:return s*e;case sc:return s*e/i.components*i.byteLength;case rc:return s*e/i.components*i.byteLength;case ch:return s*e*2/i.components*i.byteLength;case ac:return s*e*2/i.components*i.byteLength;case oh:return s*e*3/i.components*i.byteLength;case en:return s*e*4/i.components*i.byteLength;case oc:return s*e*4/i.components*i.byteLength;case pa:case ma:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ga:case ba:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lc:case uc:return Math.max(s,16)*Math.max(e,8)/4;case cc:case hc:return Math.max(s,8)*Math.max(e,8)/2;case dc:case fc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case pc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case bc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case xc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case _c:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case yc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case wc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Tc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Cc:case Pc:case Ic:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Dc:case Lc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Uc:case Fc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ym(s){switch(s){case gn:case nh:return{byteLength:1,components:1};case er:case ih:case Vt:return{byteLength:2,components:1};case nc:case ic:return{byteLength:2,components:4};case Ci:case tc:case En:return{byteLength:4,components:1};case sh:case rh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function If(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Zm(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<u.length;p++){let m=u[d],b=u[p];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++d,u[d]=b)}u.length=d+1;for(let p=0,m=u.length;p<m;p++){let b=u[p];s.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$m=`#ifdef USE_ALPHAHASH
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
#endif`,Qm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ng=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ig=`#ifdef USE_AOMAP
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
#endif`,sg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rg=`#ifdef USE_BATCHING
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
#endif`,ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,og=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hg=`#ifdef USE_IRIDESCENCE
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
#endif`,ug=`#ifdef USE_BUMPMAP
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
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_g=`#define PI 3.141592653589793
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
} // validated`,yg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mg=`vec3 transformedNormal = objectNormal;
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
#endif`,Sg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ag="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Pg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Dg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lg=`#ifdef USE_ENVMAP
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
#endif`,Ug=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Og=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kg=`#ifdef USE_GRADIENTMAP
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
}`,Bg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vg=`uniform bool receiveShadow;
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
#endif`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Wg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yg=`PhysicalMaterial material;
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
#endif`,Kg=`struct PhysicalMaterial {
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
}`,Zg=`
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
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
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
#endif`,$g=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a0=`#if defined( USE_POINTS_UV )
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
#endif`,o0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
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
#endif`,f0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,m0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,x0=`#ifdef USE_NORMALMAP
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
#endif`,_0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,y0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,T0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,F0=`float getShadowMask() {
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
}`,N0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O0=`#ifdef USE_SKINNING
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
#endif`,k0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B0=`#ifdef USE_SKINNING
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
#endif`,z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W0=`#ifdef USE_TRANSMISSION
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
#endif`,q0=`#ifdef USE_TRANSMISSION
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Z0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J0=`uniform sampler2D t2D;
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
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nb=`#include <common>
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
}`,ib=`#if DEPTH_PACKING == 3200
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
}`,sb=`#define DISTANCE
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
}`,rb=`#define DISTANCE
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
}`,ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ob=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cb=`uniform float scale;
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
}`,lb=`uniform vec3 diffuse;
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
}`,hb=`#include <common>
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
}`,ub=`uniform vec3 diffuse;
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
}`,db=`#define LAMBERT
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
}`,fb=`#define LAMBERT
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
}`,pb=`#define MATCAP
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
}`,mb=`#define MATCAP
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
}`,gb=`#define NORMAL
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
}`,bb=`#define NORMAL
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
}`,vb=`#define PHONG
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
}`,xb=`#define PHONG
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
}`,_b=`#define STANDARD
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
}`,yb=`#define STANDARD
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
}`,Mb=`#define TOON
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
}`,Sb=`#define TOON
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
}`,wb=`uniform float size;
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
}`,Eb=`uniform vec3 diffuse;
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
}`,Tb=`#include <common>
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
}`,Ab=`uniform vec3 color;
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
}`,Rb=`uniform float rotation;
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
}`,Cb=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Jm,alphahash_pars_fragment:$m,alphamap_fragment:Qm,alphamap_pars_fragment:eg,alphatest_fragment:tg,alphatest_pars_fragment:ng,aomap_fragment:ig,aomap_pars_fragment:sg,batching_pars_vertex:rg,batching_vertex:ag,begin_vertex:og,beginnormal_vertex:cg,bsdfs:lg,iridescence_fragment:hg,bumpmap_pars_fragment:ug,clipping_planes_fragment:dg,clipping_planes_pars_fragment:fg,clipping_planes_pars_vertex:pg,clipping_planes_vertex:mg,color_fragment:gg,color_pars_fragment:bg,color_pars_vertex:vg,color_vertex:xg,common:_g,cube_uv_reflection_fragment:yg,defaultnormal_vertex:Mg,displacementmap_pars_vertex:Sg,displacementmap_vertex:wg,emissivemap_fragment:Eg,emissivemap_pars_fragment:Tg,colorspace_fragment:Ag,colorspace_pars_fragment:Rg,envmap_fragment:Cg,envmap_common_pars_fragment:Pg,envmap_pars_fragment:Ig,envmap_pars_vertex:Dg,envmap_physical_pars_fragment:Gg,envmap_vertex:Lg,fog_vertex:Ug,fog_pars_vertex:Fg,fog_fragment:Ng,fog_pars_fragment:Og,gradientmap_pars_fragment:kg,lightmap_pars_fragment:Bg,lights_lambert_fragment:zg,lights_lambert_pars_fragment:Hg,lights_pars_begin:Vg,lights_toon_fragment:Wg,lights_toon_pars_fragment:qg,lights_phong_fragment:Xg,lights_phong_pars_fragment:jg,lights_physical_fragment:Yg,lights_physical_pars_fragment:Kg,lights_fragment_begin:Zg,lights_fragment_maps:Jg,lights_fragment_end:$g,logdepthbuf_fragment:Qg,logdepthbuf_pars_fragment:e0,logdepthbuf_pars_vertex:t0,logdepthbuf_vertex:n0,map_fragment:i0,map_pars_fragment:s0,map_particle_fragment:r0,map_particle_pars_fragment:a0,metalnessmap_fragment:o0,metalnessmap_pars_fragment:c0,morphinstance_vertex:l0,morphcolor_vertex:h0,morphnormal_vertex:u0,morphtarget_pars_vertex:d0,morphtarget_vertex:f0,normal_fragment_begin:p0,normal_fragment_maps:m0,normal_pars_fragment:g0,normal_pars_vertex:b0,normal_vertex:v0,normalmap_pars_fragment:x0,clearcoat_normal_fragment_begin:_0,clearcoat_normal_fragment_maps:y0,clearcoat_pars_fragment:M0,iridescence_pars_fragment:S0,opaque_fragment:w0,packing:E0,premultiplied_alpha_fragment:T0,project_vertex:A0,dithering_fragment:R0,dithering_pars_fragment:C0,roughnessmap_fragment:P0,roughnessmap_pars_fragment:I0,shadowmap_pars_fragment:D0,shadowmap_pars_vertex:L0,shadowmap_vertex:U0,shadowmask_pars_fragment:F0,skinbase_vertex:N0,skinning_pars_vertex:O0,skinning_vertex:k0,skinnormal_vertex:B0,specularmap_fragment:z0,specularmap_pars_fragment:H0,tonemapping_fragment:V0,tonemapping_pars_fragment:G0,transmission_fragment:W0,transmission_pars_fragment:q0,uv_pars_fragment:X0,uv_pars_vertex:j0,uv_vertex:Y0,worldpos_vertex:K0,background_vert:Z0,background_frag:J0,backgroundCube_vert:$0,backgroundCube_frag:Q0,cube_vert:eb,cube_frag:tb,depth_vert:nb,depth_frag:ib,distanceRGBA_vert:sb,distanceRGBA_frag:rb,equirect_vert:ab,equirect_frag:ob,linedashed_vert:cb,linedashed_frag:lb,meshbasic_vert:hb,meshbasic_frag:ub,meshlambert_vert:db,meshlambert_frag:fb,meshmatcap_vert:pb,meshmatcap_frag:mb,meshnormal_vert:gb,meshnormal_frag:bb,meshphong_vert:vb,meshphong_frag:xb,meshphysical_vert:_b,meshphysical_frag:yb,meshtoon_vert:Mb,meshtoon_frag:Sb,points_vert:wb,points_frag:Eb,shadow_vert:Tb,shadow_frag:Ab,sprite_vert:Rb,sprite_frag:Cb},he={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Xn={basic:{uniforms:Yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new me(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Yt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Yt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new me(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Yt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Yt([he.points,he.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Yt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Yt([he.common,he.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Yt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Yt([he.sprite,he.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Yt([he.common,he.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Yt([he.lights,he.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Xn.physical={uniforms:Yt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var Oc={r:0,b:0,g:0},ls=new Fn,Pb=new Re;function Ib(s,e,t,n,i,r,a){let o=new me(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function m(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function b(x){let v=!1,w=m(x);w===null?f(o,l):w&&w.isColor&&(f(w,1),v=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(x,v){let w=m(v);w&&(w.isCubeTexture||w.mapping===fa)?(h===void 0&&(h=new Ie(new an(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:cs(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ls.copy(v.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pb.makeRotationFromEuler(ls)),h.material.toneMapped=Ze.getTransfer(w.colorSpace)!==rt,(u!==w||d!==w.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,p=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Ie(new At(2,2),new $e({name:"BackgroundMaterial",uniforms:cs(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(w.colorSpace)!==rt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,p=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,v){x.getRGB(Oc,ph(s)),n.buffers.color.setClear(Oc.r,Oc.g,Oc.b,v,a)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(o,l)},render:b,addToRenderList:g,dispose:_}}function Db(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(y,I,L,U,B){let W=!1,V=u(U,L,I);r!==V&&(r=V,c(r.object)),W=p(y,U,L,B),W&&m(y,U,L,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,v(y,I,L,U),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,I,L){let U=L.wireframe===!0,B=n[y.id];B===void 0&&(B={},n[y.id]=B);let W=B[I.id];W===void 0&&(W={},B[I.id]=W);let V=W[U];return V===void 0&&(V=d(l()),W[U]=V),V}function d(y){let I=[],L=[],U=[];for(let B=0;B<t;B++)I[B]=0,L[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:L,attributeDivisors:U,object:y,attributes:{},index:null}}function p(y,I,L,U){let B=r.attributes,W=I.attributes,V=0,K=L.getAttributes();for(let z in K)if(K[z].location>=0){let oe=B[z],ue=W[z];if(ue===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor)),oe===void 0||oe.attribute!==ue||ue&&oe.data!==ue.data)return!0;V++}return r.attributesNum!==V||r.index!==U}function m(y,I,L,U){let B={},W=I.attributes,V=0,K=L.getAttributes();for(let z in K)if(K[z].location>=0){let oe=W[z];oe===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor));let ue={};ue.attribute=oe,oe&&oe.data&&(ue.data=oe.data),B[z]=ue,V++}r.attributes=B,r.attributesNum=V,r.index=U}function b(){let y=r.newAttributes;for(let I=0,L=y.length;I<L;I++)y[I]=0}function g(y){f(y,0)}function f(y,I){let L=r.newAttributes,U=r.enabledAttributes,B=r.attributeDivisors;L[y]=1,U[y]===0&&(s.enableVertexAttribArray(y),U[y]=1),B[y]!==I&&(s.vertexAttribDivisor(y,I),B[y]=I)}function _(){let y=r.newAttributes,I=r.enabledAttributes;for(let L=0,U=I.length;L<U;L++)I[L]!==y[L]&&(s.disableVertexAttribArray(L),I[L]=0)}function x(y,I,L,U,B,W,V){V===!0?s.vertexAttribIPointer(y,I,L,B,W):s.vertexAttribPointer(y,I,L,U,B,W)}function v(y,I,L,U){b();let B=U.attributes,W=L.getAttributes(),V=I.defaultAttributeValues;for(let K in W){let z=W[K];if(z.location>=0){let $=B[K];if($===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&($=y.instanceColor)),$!==void 0){let oe=$.normalized,ue=$.itemSize,Ee=e.get($);if(Ee===void 0)continue;let Oe=Ee.buffer,tt=Ee.type,ke=Ee.bytesPerElement,j=tt===s.INT||tt===s.UNSIGNED_INT||$.gpuType===tc;if($.isInterleavedBufferAttribute){let Y=$.data,le=Y.stride,Se=$.offset;if(Y.isInstancedInterleavedBuffer){for(let pe=0;pe<z.locationSize;pe++)f(z.location+pe,Y.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let pe=0;pe<z.locationSize;pe++)g(z.location+pe);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let pe=0;pe<z.locationSize;pe++)x(z.location+pe,ue/z.locationSize,tt,oe,le*ke,(Se+ue/z.locationSize*pe)*ke,j)}else{if($.isInstancedBufferAttribute){for(let Y=0;Y<z.locationSize;Y++)f(z.location+Y,$.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Y=0;Y<z.locationSize;Y++)g(z.location+Y);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let Y=0;Y<z.locationSize;Y++)x(z.location+Y,ue/z.locationSize,tt,oe,ue*ke,ue/z.locationSize*Y*ke,j)}}else if(V!==void 0){let oe=V[K];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(z.location,oe);break;case 3:s.vertexAttrib3fv(z.location,oe);break;case 4:s.vertexAttrib4fv(z.location,oe);break;default:s.vertexAttrib1fv(z.location,oe)}}}}_()}function w(){A();for(let y in n){let I=n[y];for(let L in I){let U=I[L];for(let B in U)h(U[B].object),delete U[B];delete I[L]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;let I=n[y.id];for(let L in I){let U=I[L];for(let B in U)h(U[B].object),delete U[B];delete I[L]}delete n[y.id]}function C(y){for(let I in n){let L=n[I];if(L[y.id]===void 0)continue;let U=L[y.id];for(let B in U)h(U[B].object),delete U[B];delete L[y.id]}}function A(){M(),a=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:g,disableUnusedAttributes:_}}function Lb(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let b=0;b<u;b++)m+=h[b]*d[b];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ub(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==en&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let A=C===Vt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==gn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==En&&!A)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:w,maxSamples:T}}function Fb(s){let e=this,t=null,n=0,i=!1,r=!1,a=new $t,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let m=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,f=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{let _=r?0:n,x=_*4,v=f.clippingState||null;l.value=v,v=h(m,d,x,p);for(let w=0;w!==x;++w)v[w]=t[w];f.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,m){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=l.value,m!==!0||g===null){let f=p+b*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<f)&&(g=new Float32Array(f));for(let x=0,v=p;x!==b;++x,v+=4)a.copy(u[x]).applyMatrix4(_,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}function Nb(s){let e=new WeakMap;function t(a,o){return o===$o?a.mapping=rs:o===Qo&&(a.mapping=as),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===$o||o===Qo)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new yo(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ir=4,cf=[.125,.215,.35,.446,.526,.582],ds=20,xh=new ui,lf=new me,_h=null,yh=0,Mh=0,Sh=!1,us=(1+Math.sqrt(5))/2,nr=1/us,hf=[new R(-us,nr,0),new R(us,nr,0),new R(-nr,0,us),new R(nr,0,us),new R(0,us,-nr),new R(0,us,nr),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Ob=new R,rr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=Ob}=r;_h=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_h,yh,Mh),this._renderer.xr.enabled=Sh,e.scissorTest=!1,kc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_h=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Vt,format:en,colorSpace:kt,depthBuffer:!1},i=uf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kb(r)),this._blurMaterial=Bb(r,e,t)}return i}_compileMaterial(e){let t=new Ie(this._lodPlanes[0],e);this._renderer.compile(t,xh)}_sceneToCubeUV(e,t,n,i,r){let l=new St(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(lf),u.toneMapping=fi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));let b=new Xt({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new Ie(new an,b),f=!1,_=e.background;_?_.isColor&&(b.color.copy(_),e.background=null,f=!0):(b.color.copy(lf),f=!0);for(let x=0;x<6;x++){let v=x%3;v===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[x],r.y,r.z)):v===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[x]));let w=this._cubeSize;kc(i,v*w,x>2?w:0,w,w),u.setRenderTarget(i),f&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===rs||e.mapping===as;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=df());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Ie(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;kc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,xh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=hf[(i-r-1)%hf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ie(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ds-1),b=r/m,g=isFinite(r)?1+Math.floor(h*b):ds;g>ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ds}`);let f=[],_=0;for(let C=0;C<ds;++C){let A=C/b,M=Math.exp(-A*A/2);f.push(M),C===0?_+=M:C<g&&(_+=2*M)}for(let C=0;C<f.length;C++)f[C]=f[C]/_;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;let v=this._sizeLods[i],w=3*v*(i>x-ir?i-x+ir:0),T=4*(this._cubeSize-v);kc(t,w,T,3*v,2*v),l.setRenderTarget(t),l.render(u,xh)}};function kb(s){let e=[],t=[],n=[],i=s,r=s-ir+1+cf.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-ir?l=cf[a-s+ir-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,b=3,g=2,f=1,_=new Float32Array(b*m*p),x=new Float32Array(g*m*p),v=new Float32Array(f*m*p);for(let T=0;T<p;T++){let C=T%3*2/3-1,A=T>2?0:-1,M=[C,A,0,C+2/3,A,0,C+2/3,A+1,0,C,A,0,C+2/3,A+1,0,C,A+1,0];_.set(M,b*m*T),x.set(d,g*m*T);let y=[T,T,T,T,T,T];v.set(y,f*m*T)}let w=new mt;w.setAttribute("position",new Et(_,b)),w.setAttribute("uv",new Et(x,g)),w.setAttribute("faceIndex",new Et(v,f)),e.push(w),i>ir&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uf(s,e,t){let n=new Tt(s,e,t);return n.texture.mapping=fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function kc(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Bb(s,e,t){let n=new Float32Array(ds),i=new R(0,1,0);return new $e({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function df(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function ff(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function Lh(){return`

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
	`}function zb(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===$o||l===Qo,h=l===rs||l===as;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new rr(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new rr(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Hb(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ks("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vb(s,e,t,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete i[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)e.update(d[p],s.ARRAY_BUFFER)}function c(u){let d=[],p=u.index,m=u.attributes.position,b=0;if(p!==null){let _=p.array;b=p.version;for(let x=0,v=_.length;x<v;x+=3){let w=_[x+0],T=_[x+1],C=_[x+2];d.push(w,T,T,C,C,w)}}else if(m!==void 0){let _=m.array;b=m.version;for(let x=0,v=_.length/3-1;x<v;x+=3){let w=x+0,T=x+1,C=x+2;d.push(w,T,T,C,C,w)}}else return;let g=new(fh(d)?Pr:Cr)(d,1);g.version=b;let f=r.get(u);f&&e.remove(f),r.set(u,g)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Gb(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*a),t.update(p,n,1)}function c(d,p,m){m!==0&&(s.drawElementsInstanced(n,p,r,d*a,m),t.update(p,n,m))}function h(d,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];t.update(g,n,1)}function u(d,p,m,b){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],b[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,b,0,m);let f=0;for(let _=0;_<m;_++)f+=p[_]*b[_];t.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Wb(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function qb(s,e,t){let n=new WeakMap,i=new Ye;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let M=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],x=0;p===!0&&(x=1),m===!0&&(x=2),b===!0&&(x=3);let v=o.attributes.position.count*x,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*w*4*u),C=new Ar(T,v,w,u);C.type=En,C.needsUpdate=!0;let A=x*4;for(let y=0;y<u;y++){let I=g[y],L=f[y],U=_[y],B=v*w*4*y;for(let W=0;W<I.count;W++){let V=W*A;p===!0&&(i.fromBufferAttribute(I,W),T[B+V+0]=i.x,T[B+V+1]=i.y,T[B+V+2]=i.z,T[B+V+3]=0),m===!0&&(i.fromBufferAttribute(L,W),T[B+V+4]=i.x,T[B+V+5]=i.y,T[B+V+6]=i.z,T[B+V+7]=0),b===!0&&(i.fromBufferAttribute(U,W),T[B+V+8]=i.x,T[B+V+9]=i.y,T[B+V+10]=i.z,T[B+V+11]=U.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new re(v,w)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let b=0;b<c.length;b++)p+=c[b];let m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Xb(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Df=new Nt,pf=new $i(1,1),Lf=new Ar,Uf=new xo,Ff=new Dr,mf=[],gf=[],bf=new Float32Array(16),vf=new Float32Array(9),xf=new Float32Array(4);function ar(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=mf[i];if(r===void 0&&(r=new Float32Array(i),mf[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Lt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Hc(s,e){let t=gf[e];t===void 0&&(t=new Int32Array(e),gf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function jb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Yb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2fv(this.addr,e),Lt(t,e)}}function Kb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;s.uniform3fv(this.addr,e),Lt(t,e)}}function Zb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4fv(this.addr,e),Lt(t,e)}}function Jb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;xf.set(n),s.uniformMatrix2fv(this.addr,!1,xf),Lt(t,n)}}function $b(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;vf.set(n),s.uniformMatrix3fv(this.addr,!1,vf),Lt(t,n)}}function Qb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;bf.set(n),s.uniformMatrix4fv(this.addr,!1,bf),Lt(t,n)}}function ev(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function tv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2iv(this.addr,e),Lt(t,e)}}function nv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3iv(this.addr,e),Lt(t,e)}}function iv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4iv(this.addr,e),Lt(t,e)}}function sv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function rv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2uiv(this.addr,e),Lt(t,e)}}function av(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3uiv(this.addr,e),Lt(t,e)}}function ov(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4uiv(this.addr,e),Lt(t,e)}}function cv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(pf.compareFunction=hh,r=pf):r=Df,t.setTexture2D(e||r,i)}function lv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Uf,i)}function hv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ff,i)}function uv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Lf,i)}function dv(s){switch(s){case 5126:return jb;case 35664:return Yb;case 35665:return Kb;case 35666:return Zb;case 35674:return Jb;case 35675:return $b;case 35676:return Qb;case 5124:case 35670:return ev;case 35667:case 35671:return tv;case 35668:case 35672:return nv;case 35669:case 35673:return iv;case 5125:return sv;case 36294:return rv;case 36295:return av;case 36296:return ov;case 35678:case 36198:case 36298:case 36306:case 35682:return cv;case 35679:case 36299:case 36307:return lv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return uv}}function fv(s,e){s.uniform1fv(this.addr,e)}function pv(s,e){let t=ar(e,this.size,2);s.uniform2fv(this.addr,t)}function mv(s,e){let t=ar(e,this.size,3);s.uniform3fv(this.addr,t)}function gv(s,e){let t=ar(e,this.size,4);s.uniform4fv(this.addr,t)}function bv(s,e){let t=ar(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function vv(s,e){let t=ar(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function xv(s,e){let t=ar(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function _v(s,e){s.uniform1iv(this.addr,e)}function yv(s,e){s.uniform2iv(this.addr,e)}function Mv(s,e){s.uniform3iv(this.addr,e)}function Sv(s,e){s.uniform4iv(this.addr,e)}function wv(s,e){s.uniform1uiv(this.addr,e)}function Ev(s,e){s.uniform2uiv(this.addr,e)}function Tv(s,e){s.uniform3uiv(this.addr,e)}function Av(s,e){s.uniform4uiv(this.addr,e)}function Rv(s,e,t){let n=this.cache,i=e.length,r=Hc(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Df,r[a])}function Cv(s,e,t){let n=this.cache,i=e.length,r=Hc(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Uf,r[a])}function Pv(s,e,t){let n=this.cache,i=e.length,r=Hc(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Ff,r[a])}function Iv(s,e,t){let n=this.cache,i=e.length,r=Hc(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Lf,r[a])}function Dv(s){switch(s){case 5126:return fv;case 35664:return pv;case 35665:return mv;case 35666:return gv;case 35674:return bv;case 35675:return vv;case 35676:return xv;case 5124:case 35670:return _v;case 35667:case 35671:return yv;case 35668:case 35672:return Mv;case 35669:case 35673:return Sv;case 5125:return wv;case 36294:return Ev;case 36295:return Tv;case 36296:return Av;case 35678:case 36198:case 36298:case 36306:case 35682:return Rv;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Pv;case 36289:case 36303:case 36311:case 36292:return Iv}}var Eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dv(t.type)}},Th=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dv(t.type)}},Ah=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},wh=/(\w+)(\])?(\[|\.)?/g;function _f(s,e){s.seq.push(e),s.map[e.id]=e}function Lv(s,e,t){let n=s.name,i=n.length;for(wh.lastIndex=0;;){let r=wh.exec(n),a=wh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){_f(t,c===void 0?new Eh(o,s,e):new Th(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Ah(o),_f(t,u)),t=u}}}var sr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Lv(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function yf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Uv=37297,Fv=0;function Nv(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Mf=new We;function Ov(s){Ze._getMatrix(Mf,Ze.workingColorSpace,s);let e=`mat3( ${Mf.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(s)){case Er:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Sf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Nv(s.getShaderSource(e),o)}else return r}function kv(s,e){let t=Ov(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Bv(s,e){let t;switch(e){case Xo:t="Linear";break;case jo:t="Reinhard";break;case Yo:t="Cineon";break;case $s:t="ACESFilmic";break;case Zo:t="AgX";break;case Jo:t="Neutral";break;case Ko:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Bc=new R;function zv(){Ze.getLuminanceCoefficients(Bc);let s=Bc.x.toFixed(4),e=Bc.y.toFixed(4),t=Bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function Vv(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gv(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function xa(s){return s!==""}function wf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ef(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(s){return s.replace(Wv,Xv)}var qv=new Map;function Xv(s,e){let t=Xe[e];if(t===void 0){let n=qv.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rh(t)}var jv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tf(s){return s.replace(jv,Yv)}function Yv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Af(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function Kv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Jl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Sd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function Zv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case rs:case as:e="ENVMAP_TYPE_CUBE";break;case fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case as:e="ENVMAP_MODE_REFRACTION";break}return e}function $v(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case eh:e="ENVMAP_BLENDING_MULTIPLY";break;case kd:e="ENVMAP_BLENDING_MIX";break;case Bd:e="ENVMAP_BLENDING_ADD";break}return e}function Qv(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ex(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Kv(t),c=Zv(t),h=Jv(t),u=$v(t),d=Qv(t),p=Hv(t),m=Vv(r),b=i.createProgram(),g,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(xa).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(xa).join(`
`),f.length>0&&(f+=`
`)):(g=[Af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),f=[Af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==fi?Bv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,kv("linearToOutputTexel",t.outputColorSpace),zv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xa).join(`
`)),a=Rh(a),a=wf(a,t),a=Ef(a,t),o=Rh(o),o=wf(o,t),o=Ef(o,t),a=Tf(a),o=Tf(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let x=_+g+a,v=_+f+o,w=yf(i,i.VERTEX_SHADER,x),T=yf(i,i.FRAGMENT_SHADER,v);i.attachShader(b,w),i.attachShader(b,T),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function C(I){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(b)||"",U=i.getShaderInfoLog(w)||"",B=i.getShaderInfoLog(T)||"",W=L.trim(),V=U.trim(),K=B.trim(),z=!0,$=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,b,w,T);else{let oe=Sf(i,w,"vertex"),ue=Sf(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+oe+`
`+ue)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(V===""||K==="")&&($=!1);$&&(I.diagnostics={runnable:z,programLog:W,vertexShader:{log:V,prefix:g},fragmentShader:{log:K,prefix:f}})}i.deleteShader(w),i.deleteShader(T),A=new sr(i,b),M=Gv(i,b)}let A;this.getUniforms=function(){return A===void 0&&C(this),A};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(b,Uv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fv++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=w,this.fragmentShader=T,this}var tx=0,Ch=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ph(e),t.set(e,n)),n}},Ph=class{constructor(e){this.id=tx++,this.code=e,this.usedTimes=0}};function nx(s,e,t,n,i,r,a){let o=new Rr,l=new Ch,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,y,I,L,U){let B=L.fog,W=U.geometry,V=M.isMeshStandardMaterial?L.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),z=K&&K.mapping===fa?K.image.height:null,$=m[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let oe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ue=oe!==void 0?oe.length:0,Ee=0;W.morphAttributes.position!==void 0&&(Ee=1),W.morphAttributes.normal!==void 0&&(Ee=2),W.morphAttributes.color!==void 0&&(Ee=3);let Oe,tt,ke,j;if($){let at=Xn[$];Oe=at.vertexShader,tt=at.fragmentShader}else Oe=M.vertexShader,tt=M.fragmentShader,l.update(M),ke=l.getVertexShaderID(M),j=l.getFragmentShaderID(M);let Y=s.getRenderTarget(),le=s.state.buffers.depth.getReversed(),Se=U.isInstancedMesh===!0,pe=U.isBatchedMesh===!0,Ge=!!M.map,yt=!!M.matcap,D=!!K,Je=!!M.aoMap,Ue=!!M.lightMap,Ce=!!M.bumpMap,ge=!!M.normalMap,it=!!M.displacementMap,be=!!M.emissiveMap,Ne=!!M.metalnessMap,lt=!!M.roughnessMap,st=M.anisotropy>0,P=M.clearcoat>0,S=M.dispersion>0,k=M.iridescence>0,X=M.sheen>0,J=M.transmission>0,q=st&&!!M.anisotropyMap,ye=P&&!!M.clearcoatMap,ie=P&&!!M.clearcoatNormalMap,xe=P&&!!M.clearcoatRoughnessMap,Te=k&&!!M.iridescenceMap,te=k&&!!M.iridescenceThicknessMap,de=X&&!!M.sheenColorMap,Le=X&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,ce=!!M.specularColorMap,Be=!!M.specularIntensityMap,F=J&&!!M.transmissionMap,Q=J&&!!M.thicknessMap,se=!!M.gradientMap,_e=!!M.alphaMap,ee=M.alphaTest>0,Z=!!M.alphaHash,we=!!M.extensions,Ve=fi;M.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ve=s.toneMapping);let dt={shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:Oe,fragmentShader:tt,defines:M.defines,customVertexShaderID:ke,customFragmentShaderID:j,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:pe,batchingColor:pe&&U._colorsTexture!==null,instancing:Se,instancingColor:Se&&U.instanceColor!==null,instancingMorph:Se&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Y===null?s.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:kt,alphaToCoverage:!!M.alphaToCoverage,map:Ge,matcap:yt,envMap:D,envMapMode:D&&K.mapping,envMapCubeUVHeight:z,aoMap:Je,lightMap:Ue,bumpMap:Ce,normalMap:ge,displacementMap:d&&it,emissiveMap:be,normalMapObjectSpace:ge&&M.normalMapType===Wd,normalMapTangentSpace:ge&&M.normalMapType===Nc,metalnessMap:Ne,roughnessMap:lt,anisotropy:st,anisotropyMap:q,clearcoat:P,clearcoatMap:ye,clearcoatNormalMap:ie,clearcoatRoughnessMap:xe,dispersion:S,iridescence:k,iridescenceMap:Te,iridescenceThicknessMap:te,sheen:X,sheenColorMap:de,sheenRoughnessMap:Le,specularMap:Ae,specularColorMap:ce,specularIntensityMap:Be,transmission:J,transmissionMap:F,thicknessMap:Q,gradientMap:se,opaque:M.transparent===!1&&M.blending===qi&&M.alphaToCoverage===!1,alphaMap:_e,alphaTest:ee,alphaHash:Z,combine:M.combine,mapUv:Ge&&b(M.map.channel),aoMapUv:Je&&b(M.aoMap.channel),lightMapUv:Ue&&b(M.lightMap.channel),bumpMapUv:Ce&&b(M.bumpMap.channel),normalMapUv:ge&&b(M.normalMap.channel),displacementMapUv:it&&b(M.displacementMap.channel),emissiveMapUv:be&&b(M.emissiveMap.channel),metalnessMapUv:Ne&&b(M.metalnessMap.channel),roughnessMapUv:lt&&b(M.roughnessMap.channel),anisotropyMapUv:q&&b(M.anisotropyMap.channel),clearcoatMapUv:ye&&b(M.clearcoatMap.channel),clearcoatNormalMapUv:ie&&b(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&b(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&b(M.iridescenceMap.channel),iridescenceThicknessMapUv:te&&b(M.iridescenceThicknessMap.channel),sheenColorMapUv:de&&b(M.sheenColorMap.channel),sheenRoughnessMapUv:Le&&b(M.sheenRoughnessMap.channel),specularMapUv:Ae&&b(M.specularMap.channel),specularColorMapUv:ce&&b(M.specularColorMap.channel),specularIntensityMapUv:Be&&b(M.specularIntensityMap.channel),transmissionMapUv:F&&b(M.transmissionMap.channel),thicknessMapUv:Q&&b(M.thicknessMap.channel),alphaMapUv:_e&&b(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ge||st),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!W.attributes.uv&&(Ge||_e),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:le,skinning:U.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ee,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Ge&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===rt,decodeVideoTextureEmissive:be&&M.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(M.emissiveMap.colorSpace)===rt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ot,flipSided:M.side===Ht,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:we&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&M.extensions.multiDraw===!0||pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function f(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)y.push(I),y.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(_(y,M),x(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function _(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function x(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){let y=m[M.type],I;if(y){let L=Xn[y];I=cn.clone(L.uniforms)}else I=M.uniforms;return I}function w(M,y){let I;for(let L=0,U=h.length;L<U;L++){let B=h[L];if(B.cacheKey===y){I=B,++I.usedTimes;break}}return I===void 0&&(I=new ex(s,y,M,r),h.push(I)),I}function T(M){if(--M.usedTimes===0){let y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function C(M){l.remove(M)}function A(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:v,acquireProgram:w,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:A}}function ix(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function sx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Rf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Cf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,p,m,b,g){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:m,renderOrder:u.renderOrder,z:b,group:g},s[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=b,f.group=g),e++,f}function o(u,d,p,m,b,g){let f=a(u,d,p,m,b,g);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(u,d,p,m,b,g){let f=a(u,d,p,m,b,g);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||sx),n.length>1&&n.sort(d||Rf),i.length>1&&i.sort(d||Rf)}function h(){for(let u=e,d=s.length;u<d;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function rx(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Cf,s.set(n,[a])):i>=r.length?(a=new Cf,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function ax(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new me};break;case"SpotLight":t={position:new R,direction:new R,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function ox(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var cx=0;function lx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function hx(s){let e=new ax,t=ox(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let i=new R,r=new Re,a=new Re;function o(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,m=0,b=0,g=0,f=0,_=0,x=0,v=0,w=0,T=0,C=0;c.sort(lx);for(let M=0,y=c.length;M<y;M++){let I=c[M],L=I.color,U=I.intensity,B=I.distance,W=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=L.r*U,u+=L.g*U,d+=L.b*U;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],U);C++}else if(I.isDirectionalLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,z=t.get(I);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=I.shadow.matrix,_++}n.directional[p]=V,p++}else if(I.isSpotLight){let V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(L).multiplyScalar(U),V.distance=B,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[b]=V;let K=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,K.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[b]=K.matrix,I.castShadow){let z=t.get(I);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,n.spotShadow[b]=z,n.spotShadowMap[b]=W,v++}b++}else if(I.isRectAreaLight){let V=e.get(I);V.color.copy(L).multiplyScalar(U),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=V,g++}else if(I.isPointLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){let K=I.shadow,z=t.get(I);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,z.shadowCameraNear=K.camera.near,z.shadowCameraFar=K.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=W,n.pointShadowMatrix[m]=I.shadow.matrix,x++}n.point[m]=V,m++}else if(I.isHemisphereLight){let V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(U),V.groundColor.copy(I.groundColor).multiplyScalar(U),n.hemi[f]=V,f++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let A=n.hash;(A.directionalLength!==p||A.pointLength!==m||A.spotLength!==b||A.rectAreaLength!==g||A.hemiLength!==f||A.numDirectionalShadows!==_||A.numPointShadows!==x||A.numSpotShadows!==v||A.numSpotMaps!==w||A.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=b,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,A.directionalLength=p,A.pointLength=m,A.spotLength=b,A.rectAreaLength=g,A.hemiLength=f,A.numDirectionalShadows=_,A.numPointShadows=x,A.numSpotShadows=v,A.numSpotMaps=w,A.numLightProbes=C,n.version=cx++)}function l(c,h){let u=0,d=0,p=0,m=0,b=0,g=h.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){let x=c[f];if(x.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),u++}else if(x.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),p++}else if(x.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){let v=n.hemi[b];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(g),b++}}}return{setup:o,setupView:l,state:n}}function Pf(s){let e=new hx(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ux(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new Pf(s),e.set(i,[o])):r>=a.length?(o=new Pf(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fx=`uniform sampler2D shadow_pass;
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
}`;function px(s,e,t){let n=new qs,i=new re,r=new re,a=new Ye,o=new Co({depthPacking:Gd}),l=new Po,c={},h=t.maxTextureSize,u={[Un]:Ht,[Ht]:Un,[Ot]:Ot},d=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:dx,fragmentShader:fx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new mt;m.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ie(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jl;let f=this.type;this.render=function(T,C,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let M=s.getRenderTarget(),y=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Pt),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let U=f!==wn&&this.type===wn,B=f===wn&&this.type!==wn;for(let W=0,V=T.length;W<V;W++){let K=T[W],z=K.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let $=z.getFrameExtents();if(i.multiply($),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/$.x),i.x=r.x*$.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/$.y),i.y=r.y*$.y,z.mapSize.y=r.y)),z.map===null||U===!0||B===!0){let ue=this.type!==wn?{minFilter:Ct,magFilter:Ct}:{};z.map!==null&&z.map.dispose(),z.map=new Tt(i.x,i.y,ue),z.map.texture.name=K.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();let oe=z.getViewportCount();for(let ue=0;ue<oe;ue++){let Ee=z.getViewport(ue);a.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),L.viewport(a),z.updateMatrices(K,ue),n=z.getFrustum(),v(C,A,z.camera,K,this.type)}z.isPointLightShadow!==!0&&this.type===wn&&_(z,A),z.needsUpdate=!1}f=this.type,g.needsUpdate=!1,s.setRenderTarget(M,y,I)};function _(T,C){let A=e.update(b);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Tt(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(C,null,A,d,b,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(C,null,A,p,b,null)}function x(T,C,A,M){let y=null,I=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)y=I;else if(y=A.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let L=y.uuid,U=C.uuid,B=c[L];B===void 0&&(B={},c[L]=B);let W=B[U];W===void 0&&(W=y.clone(),B[U]=W,C.addEventListener("dispose",w)),y=W}if(y.visible=C.visible,y.wireframe=C.wireframe,M===wn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let L=s.properties.get(y);L.light=A}return y}function v(T,C,A,M,y){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===wn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);let U=e.update(T),B=T.material;if(Array.isArray(B)){let W=U.groups;for(let V=0,K=W.length;V<K;V++){let z=W[V],$=B[z.materialIndex];if($&&$.visible){let oe=x(T,$,M,y);T.onBeforeShadow(s,T,C,A,U,oe,z),s.renderBufferDirect(A,null,U,oe,T,z),T.onAfterShadow(s,T,C,A,U,oe,z)}}}else if(B.visible){let W=x(T,B,M,y);T.onBeforeShadow(s,T,C,A,U,W,null),s.renderBufferDirect(A,null,U,W,T,null),T.onAfterShadow(s,T,C,A,U,W,null)}}let L=T.children;for(let U=0,B=L.length;U<B;U++)v(L[U],C,A,M,y)}function w(T){T.target.removeEventListener("dispose",w);for(let A in c){let M=c[A],y=T.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var mx={[Bo]:zo,[Ho]:Wo,[Vo]:qo,[Xi]:Go,[zo]:Bo,[Wo]:Ho,[qo]:Vo,[Go]:Xi};function gx(s,e){function t(){let F=!1,Q=new Ye,se=null,_e=new Ye(0,0,0,0);return{setMask:function(ee){se!==ee&&!F&&(s.colorMask(ee,ee,ee,ee),se=ee)},setLocked:function(ee){F=ee},setClear:function(ee,Z,we,Ve,dt){dt===!0&&(ee*=Ve,Z*=Ve,we*=Ve),Q.set(ee,Z,we,Ve),_e.equals(Q)===!1&&(s.clearColor(ee,Z,we,Ve),_e.copy(Q))},reset:function(){F=!1,se=null,_e.set(-1,0,0,0)}}}function n(){let F=!1,Q=!1,se=null,_e=null,ee=null;return{setReversed:function(Z){if(Q!==Z){let we=e.get("EXT_clip_control");Z?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),Q=Z;let Ve=ee;ee=null,this.setClear(Ve)}},getReversed:function(){return Q},setTest:function(Z){Z?Y(s.DEPTH_TEST):le(s.DEPTH_TEST)},setMask:function(Z){se!==Z&&!F&&(s.depthMask(Z),se=Z)},setFunc:function(Z){if(Q&&(Z=mx[Z]),_e!==Z){switch(Z){case Bo:s.depthFunc(s.NEVER);break;case zo:s.depthFunc(s.ALWAYS);break;case Ho:s.depthFunc(s.LESS);break;case Xi:s.depthFunc(s.LEQUAL);break;case Vo:s.depthFunc(s.EQUAL);break;case Go:s.depthFunc(s.GEQUAL);break;case Wo:s.depthFunc(s.GREATER);break;case qo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_e=Z}},setLocked:function(Z){F=Z},setClear:function(Z){ee!==Z&&(Q&&(Z=1-Z),s.clearDepth(Z),ee=Z)},reset:function(){F=!1,se=null,_e=null,ee=null,Q=!1}}}function i(){let F=!1,Q=null,se=null,_e=null,ee=null,Z=null,we=null,Ve=null,dt=null;return{setTest:function(at){F||(at?Y(s.STENCIL_TEST):le(s.STENCIL_TEST))},setMask:function(at){Q!==at&&!F&&(s.stencilMask(at),Q=at)},setFunc:function(at,Jn,Bn){(se!==at||_e!==Jn||ee!==Bn)&&(s.stencilFunc(at,Jn,Bn),se=at,_e=Jn,ee=Bn)},setOp:function(at,Jn,Bn){(Z!==at||we!==Jn||Ve!==Bn)&&(s.stencilOp(at,Jn,Bn),Z=at,we=Jn,Ve=Bn)},setLocked:function(at){F=at},setClear:function(at){dt!==at&&(s.clearStencil(at),dt=at)},reset:function(){F=!1,Q=null,se=null,_e=null,ee=null,Z=null,we=null,Ve=null,dt=null}}}let r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],m=null,b=!1,g=null,f=null,_=null,x=null,v=null,w=null,T=null,C=new me(0,0,0),A=0,M=!1,y=null,I=null,L=null,U=null,B=null,W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,K=0,z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(z)[1]),V=K>=1):z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),V=K>=2);let $=null,oe={},ue=s.getParameter(s.SCISSOR_BOX),Ee=s.getParameter(s.VIEWPORT),Oe=new Ye().fromArray(ue),tt=new Ye().fromArray(Ee);function ke(F,Q,se,_e){let ee=new Uint8Array(4),Z=s.createTexture();s.bindTexture(F,Z),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let we=0;we<se;we++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(Q,0,s.RGBA,1,1,_e,0,s.RGBA,s.UNSIGNED_BYTE,ee):s.texImage2D(Q+we,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ee);return Z}let j={};j[s.TEXTURE_2D]=ke(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=ke(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=ke(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=ke(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(s.DEPTH_TEST),a.setFunc(Xi),Ce(!1),ge(Zl),Y(s.CULL_FACE),Je(Pt);function Y(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function le(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Se(F,Q){return u[F]!==Q?(s.bindFramebuffer(F,Q),u[F]=Q,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Q),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Q),!0):!1}function pe(F,Q){let se=p,_e=!1;if(F){se=d.get(Q),se===void 0&&(se=[],d.set(Q,se));let ee=F.textures;if(se.length!==ee.length||se[0]!==s.COLOR_ATTACHMENT0){for(let Z=0,we=ee.length;Z<we;Z++)se[Z]=s.COLOR_ATTACHMENT0+Z;se.length=ee.length,_e=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,_e=!0);_e&&s.drawBuffers(se)}function Ge(F){return m!==F?(s.useProgram(F),m=F,!0):!1}let yt={[pn]:s.FUNC_ADD,[wd]:s.FUNC_SUBTRACT,[Ed]:s.FUNC_REVERSE_SUBTRACT};yt[Td]=s.MIN,yt[Ad]=s.MAX;let D={[ss]:s.ZERO,[Rd]:s.ONE,[Cd]:s.SRC_COLOR,[po]:s.SRC_ALPHA,[Ld]:s.SRC_ALPHA_SATURATE,[da]:s.DST_COLOR,[ua]:s.DST_ALPHA,[Pd]:s.ONE_MINUS_SRC_COLOR,[mo]:s.ONE_MINUS_SRC_ALPHA,[Dd]:s.ONE_MINUS_DST_COLOR,[Id]:s.ONE_MINUS_DST_ALPHA,[Ud]:s.CONSTANT_COLOR,[Fd]:s.ONE_MINUS_CONSTANT_COLOR,[Nd]:s.CONSTANT_ALPHA,[Od]:s.ONE_MINUS_CONSTANT_ALPHA};function Je(F,Q,se,_e,ee,Z,we,Ve,dt,at){if(F===Pt){b===!0&&(le(s.BLEND),b=!1);return}if(b===!1&&(Y(s.BLEND),b=!0),F!==ko){if(F!==g||at!==M){if((f!==pn||v!==pn)&&(s.blendEquation(s.FUNC_ADD),f=pn,v=pn),at)switch(F){case qi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ha:s.blendFunc(s.ONE,s.ONE);break;case $l:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ql:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case qi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ha:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case $l:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ql:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}_=null,x=null,w=null,T=null,C.set(0,0,0),A=0,g=F,M=at}return}ee=ee||Q,Z=Z||se,we=we||_e,(Q!==f||ee!==v)&&(s.blendEquationSeparate(yt[Q],yt[ee]),f=Q,v=ee),(se!==_||_e!==x||Z!==w||we!==T)&&(s.blendFuncSeparate(D[se],D[_e],D[Z],D[we]),_=se,x=_e,w=Z,T=we),(Ve.equals(C)===!1||dt!==A)&&(s.blendColor(Ve.r,Ve.g,Ve.b,dt),C.copy(Ve),A=dt),g=F,M=!1}function Ue(F,Q){F.side===Ot?le(s.CULL_FACE):Y(s.CULL_FACE);let se=F.side===Ht;Q&&(se=!se),Ce(se),F.blending===qi&&F.transparent===!1?Je(Pt):Je(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let _e=F.stencilWrite;o.setTest(_e),_e&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),be(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Y(s.SAMPLE_ALPHA_TO_COVERAGE):le(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(F){y!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),y=F)}function ge(F){F!==yd?(Y(s.CULL_FACE),F!==I&&(F===Zl?s.cullFace(s.BACK):F===Md?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):le(s.CULL_FACE),I=F}function it(F){F!==L&&(V&&s.lineWidth(F),L=F)}function be(F,Q,se){F?(Y(s.POLYGON_OFFSET_FILL),(U!==Q||B!==se)&&(s.polygonOffset(Q,se),U=Q,B=se)):le(s.POLYGON_OFFSET_FILL)}function Ne(F){F?Y(s.SCISSOR_TEST):le(s.SCISSOR_TEST)}function lt(F){F===void 0&&(F=s.TEXTURE0+W-1),$!==F&&(s.activeTexture(F),$=F)}function st(F,Q,se){se===void 0&&($===null?se=s.TEXTURE0+W-1:se=$);let _e=oe[se];_e===void 0&&(_e={type:void 0,texture:void 0},oe[se]=_e),(_e.type!==F||_e.texture!==Q)&&($!==se&&(s.activeTexture(se),$=se),s.bindTexture(F,Q||j[F]),_e.type=F,_e.texture=Q)}function P(){let F=oe[$];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function S(){try{s.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function k(){try{s.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{s.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{s.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{s.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{s.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{s.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{s.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{s.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(F){Oe.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Oe.copy(F))}function Le(F){tt.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),tt.copy(F))}function Ae(F,Q){let se=c.get(Q);se===void 0&&(se=new WeakMap,c.set(Q,se));let _e=se.get(F);_e===void 0&&(_e=s.getUniformBlockIndex(Q,F.name),se.set(F,_e))}function ce(F,Q){let _e=c.get(Q).get(F);l.get(Q)!==_e&&(s.uniformBlockBinding(Q,_e,F.__bindingPointIndex),l.set(Q,_e))}function Be(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},$=null,oe={},u={},d=new WeakMap,p=[],m=null,b=!1,g=null,f=null,_=null,x=null,v=null,w=null,T=null,C=new me(0,0,0),A=0,M=!1,y=null,I=null,L=null,U=null,B=null,Oe.set(0,0,s.canvas.width,s.canvas.height),tt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Y,disable:le,bindFramebuffer:Se,drawBuffers:pe,useProgram:Ge,setBlending:Je,setMaterial:Ue,setFlipSided:Ce,setCullFace:ge,setLineWidth:it,setPolygonOffset:be,setScissorTest:Ne,activeTexture:lt,bindTexture:st,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:k,texImage2D:Te,texImage3D:te,updateUBOMapping:Ae,uniformBlockBinding:ce,texStorage2D:ie,texStorage3D:xe,texSubImage2D:X,texSubImage3D:J,compressedTexSubImage2D:q,compressedTexSubImage3D:ye,scissor:de,viewport:Le,reset:Be}}function bx(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,S){return p?new OffscreenCanvas(P,S):Os("canvas")}function b(P,S,k){let X=1,J=st(P);if((J.width>k||J.height>k)&&(X=k/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let q=Math.floor(X*J.width),ye=Math.floor(X*J.height);u===void 0&&(u=m(q,ye));let ie=S?m(q,ye):u;return ie.width=q,ie.height=ye,ie.getContext("2d").drawImage(P,0,0,q,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+ye+")."),ie}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function g(P){return P.generateMipmaps}function f(P){s.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(P,S,k,X,J=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let q=S;if(S===s.RED&&(k===s.FLOAT&&(q=s.R32F),k===s.HALF_FLOAT&&(q=s.R16F),k===s.UNSIGNED_BYTE&&(q=s.R8)),S===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.R8UI),k===s.UNSIGNED_SHORT&&(q=s.R16UI),k===s.UNSIGNED_INT&&(q=s.R32UI),k===s.BYTE&&(q=s.R8I),k===s.SHORT&&(q=s.R16I),k===s.INT&&(q=s.R32I)),S===s.RG&&(k===s.FLOAT&&(q=s.RG32F),k===s.HALF_FLOAT&&(q=s.RG16F),k===s.UNSIGNED_BYTE&&(q=s.RG8)),S===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.RG8UI),k===s.UNSIGNED_SHORT&&(q=s.RG16UI),k===s.UNSIGNED_INT&&(q=s.RG32UI),k===s.BYTE&&(q=s.RG8I),k===s.SHORT&&(q=s.RG16I),k===s.INT&&(q=s.RG32I)),S===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.RGB8UI),k===s.UNSIGNED_SHORT&&(q=s.RGB16UI),k===s.UNSIGNED_INT&&(q=s.RGB32UI),k===s.BYTE&&(q=s.RGB8I),k===s.SHORT&&(q=s.RGB16I),k===s.INT&&(q=s.RGB32I)),S===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),k===s.UNSIGNED_INT&&(q=s.RGBA32UI),k===s.BYTE&&(q=s.RGBA8I),k===s.SHORT&&(q=s.RGBA16I),k===s.INT&&(q=s.RGBA32I)),S===s.RGB&&(k===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),S===s.RGBA){let ye=J?Er:Ze.getTransfer(X);k===s.FLOAT&&(q=s.RGBA32F),k===s.HALF_FLOAT&&(q=s.RGBA16F),k===s.UNSIGNED_BYTE&&(q=ye===rt?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(P,S){let k;return P?S===null||S===Ci||S===Pi?k=s.DEPTH24_STENCIL8:S===En?k=s.DEPTH32F_STENCIL8:S===er&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ci||S===Pi?k=s.DEPTH_COMPONENT24:S===En?k=s.DEPTH_COMPONENT32F:S===er&&(k=s.DEPTH_COMPONENT16),k}function w(P,S){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ct&&P.minFilter!==Qt?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function T(P){let S=P.target;S.removeEventListener("dispose",T),A(S),S.isVideoTexture&&h.delete(S)}function C(P){let S=P.target;S.removeEventListener("dispose",C),y(S)}function A(P){let S=n.get(P);if(S.__webglInit===void 0)return;let k=P.source,X=d.get(k);if(X){let J=X[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(P),Object.keys(X).length===0&&d.delete(k)}n.remove(P)}function M(P){let S=n.get(P);s.deleteTexture(S.__webglTexture);let k=P.source,X=d.get(k);delete X[S.__cacheKey],a.memory.textures--}function y(P){let S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(S.__webglFramebuffer[X]))for(let J=0;J<S.__webglFramebuffer[X].length;J++)s.deleteFramebuffer(S.__webglFramebuffer[X][J]);else s.deleteFramebuffer(S.__webglFramebuffer[X]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[X])}else{if(Array.isArray(S.__webglFramebuffer))for(let X=0;X<S.__webglFramebuffer.length;X++)s.deleteFramebuffer(S.__webglFramebuffer[X]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let X=0;X<S.__webglColorRenderbuffer.length;X++)S.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[X]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let k=P.textures;for(let X=0,J=k.length;X<J;X++){let q=n.get(k[X]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(k[X])}n.remove(P)}let I=0;function L(){I=0}function U(){let P=I;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),I+=1,P}function B(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function W(P,S){let k=n.get(P);if(P.isVideoTexture&&Ne(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){let X=P.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,P,S);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+S)}function V(P,S){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){j(k,P,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+S)}function K(P,S){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){j(k,P,S);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+S)}function z(P,S){let k=n.get(P);if(P.version>0&&k.__version!==P.version){Y(k,P,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+S)}let $={[nn]:s.REPEAT,[zn]:s.CLAMP_TO_EDGE,[Fs]:s.MIRRORED_REPEAT},oe={[Ct]:s.NEAREST,[ec]:s.NEAREST_MIPMAP_NEAREST,[os]:s.NEAREST_MIPMAP_LINEAR,[Qt]:s.LINEAR,[Qs]:s.LINEAR_MIPMAP_NEAREST,[On]:s.LINEAR_MIPMAP_LINEAR},ue={[qd]:s.NEVER,[Jd]:s.ALWAYS,[Xd]:s.LESS,[hh]:s.LEQUAL,[jd]:s.EQUAL,[Zd]:s.GEQUAL,[Yd]:s.GREATER,[Kd]:s.NOTEQUAL};function Ee(P,S){if(S.type===En&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Qt||S.magFilter===Qs||S.magFilter===os||S.magFilter===On||S.minFilter===Qt||S.minFilter===Qs||S.minFilter===os||S.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,$[S.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,$[S.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,$[S.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,oe[S.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,oe[S.minFilter]),S.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ue[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ct||S.minFilter!==os&&S.minFilter!==On||S.type===En&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Oe(P,S){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",T));let X=S.source,J=d.get(X);J===void 0&&(J={},d.set(X,J));let q=B(S);if(q!==P.__cacheKey){J[q]===void 0&&(J[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[q].usedTimes++;let ye=J[P.__cacheKey];ye!==void 0&&(J[P.__cacheKey].usedTimes--,ye.usedTimes===0&&M(S)),P.__cacheKey=q,P.__webglTexture=J[q].texture}return k}function tt(P,S,k){return Math.floor(Math.floor(P/k)/S)}function ke(P,S,k,X){let q=P.updateRanges;if(q.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,k,X,S.data);else{q.sort((te,de)=>te.start-de.start);let ye=0;for(let te=1;te<q.length;te++){let de=q[ye],Le=q[te],Ae=de.start+de.count,ce=tt(Le.start,S.width,4),Be=tt(de.start,S.width,4);Le.start<=Ae+1&&ce===Be&&tt(Le.start+Le.count-1,S.width,4)===ce?de.count=Math.max(de.count,Le.start+Le.count-de.start):(++ye,q[ye]=Le)}q.length=ye+1;let ie=s.getParameter(s.UNPACK_ROW_LENGTH),xe=s.getParameter(s.UNPACK_SKIP_PIXELS),Te=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let te=0,de=q.length;te<de;te++){let Le=q[te],Ae=Math.floor(Le.start/4),ce=Math.ceil(Le.count/4),Be=Ae%S.width,F=Math.floor(Ae/S.width),Q=ce,se=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Be),s.pixelStorei(s.UNPACK_SKIP_ROWS,F),t.texSubImage2D(s.TEXTURE_2D,0,Be,F,Q,se,k,X,S.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ie),s.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),s.pixelStorei(s.UNPACK_SKIP_ROWS,Te)}}function j(P,S,k){let X=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(X=s.TEXTURE_3D);let J=Oe(P,S),q=S.source;t.bindTexture(X,P.__webglTexture,s.TEXTURE0+k);let ye=n.get(q);if(q.version!==ye.__version||J===!0){t.activeTexture(s.TEXTURE0+k);let ie=Ze.getPrimaries(Ze.workingColorSpace),xe=S.colorSpace===pi?null:Ze.getPrimaries(S.colorSpace),Te=S.colorSpace===pi||ie===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let te=b(S.image,!1,i.maxTextureSize);te=lt(S,te);let de=r.convert(S.format,S.colorSpace),Le=r.convert(S.type),Ae=x(S.internalFormat,de,Le,S.colorSpace,S.isVideoTexture);Ee(X,S);let ce,Be=S.mipmaps,F=S.isVideoTexture!==!0,Q=ye.__version===void 0||J===!0,se=q.dataReady,_e=w(S,te);if(S.isDepthTexture)Ae=v(S.format===Ii,S.type),Q&&(F?t.texStorage2D(s.TEXTURE_2D,1,Ae,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,Ae,te.width,te.height,0,de,Le,null));else if(S.isDataTexture)if(Be.length>0){F&&Q&&t.texStorage2D(s.TEXTURE_2D,_e,Ae,Be[0].width,Be[0].height);for(let ee=0,Z=Be.length;ee<Z;ee++)ce=Be[ee],F?se&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ce.width,ce.height,de,Le,ce.data):t.texImage2D(s.TEXTURE_2D,ee,Ae,ce.width,ce.height,0,de,Le,ce.data);S.generateMipmaps=!1}else F?(Q&&t.texStorage2D(s.TEXTURE_2D,_e,Ae,te.width,te.height),se&&ke(S,te,de,Le)):t.texImage2D(s.TEXTURE_2D,0,Ae,te.width,te.height,0,de,Le,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){F&&Q&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Ae,Be[0].width,Be[0].height,te.depth);for(let ee=0,Z=Be.length;ee<Z;ee++)if(ce=Be[ee],S.format!==en)if(de!==null)if(F){if(se)if(S.layerUpdates.size>0){let we=vh(ce.width,ce.height,S.format,S.type);for(let Ve of S.layerUpdates){let dt=ce.data.subarray(Ve*we/ce.data.BYTES_PER_ELEMENT,(Ve+1)*we/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,Ve,ce.width,ce.height,1,de,dt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,te.depth,de,ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,Ae,ce.width,ce.height,te.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?se&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,te.depth,de,Le,ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,Ae,ce.width,ce.height,te.depth,0,de,Le,ce.data)}else{F&&Q&&t.texStorage2D(s.TEXTURE_2D,_e,Ae,Be[0].width,Be[0].height);for(let ee=0,Z=Be.length;ee<Z;ee++)ce=Be[ee],S.format!==en?de!==null?F?se&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,ce.width,ce.height,de,ce.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,Ae,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?se&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ce.width,ce.height,de,Le,ce.data):t.texImage2D(s.TEXTURE_2D,ee,Ae,ce.width,ce.height,0,de,Le,ce.data)}else if(S.isDataArrayTexture)if(F){if(Q&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Ae,te.width,te.height,te.depth),se)if(S.layerUpdates.size>0){let ee=vh(te.width,te.height,S.format,S.type);for(let Z of S.layerUpdates){let we=te.data.subarray(Z*ee/te.data.BYTES_PER_ELEMENT,(Z+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,te.width,te.height,1,de,Le,we)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,de,Le,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ae,te.width,te.height,te.depth,0,de,Le,te.data);else if(S.isData3DTexture)F?(Q&&t.texStorage3D(s.TEXTURE_3D,_e,Ae,te.width,te.height,te.depth),se&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,de,Le,te.data)):t.texImage3D(s.TEXTURE_3D,0,Ae,te.width,te.height,te.depth,0,de,Le,te.data);else if(S.isFramebufferTexture){if(Q)if(F)t.texStorage2D(s.TEXTURE_2D,_e,Ae,te.width,te.height);else{let ee=te.width,Z=te.height;for(let we=0;we<_e;we++)t.texImage2D(s.TEXTURE_2D,we,Ae,ee,Z,0,de,Le,null),ee>>=1,Z>>=1}}else if(Be.length>0){if(F&&Q){let ee=st(Be[0]);t.texStorage2D(s.TEXTURE_2D,_e,Ae,ee.width,ee.height)}for(let ee=0,Z=Be.length;ee<Z;ee++)ce=Be[ee],F?se&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,de,Le,ce):t.texImage2D(s.TEXTURE_2D,ee,Ae,de,Le,ce);S.generateMipmaps=!1}else if(F){if(Q){let ee=st(te);t.texStorage2D(s.TEXTURE_2D,_e,Ae,ee.width,ee.height)}se&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,de,Le,te)}else t.texImage2D(s.TEXTURE_2D,0,Ae,de,Le,te);g(S)&&f(X),ye.__version=q.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Y(P,S,k){if(S.image.length!==6)return;let X=Oe(P,S),J=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+k);let q=n.get(J);if(J.version!==q.__version||X===!0){t.activeTexture(s.TEXTURE0+k);let ye=Ze.getPrimaries(Ze.workingColorSpace),ie=S.colorSpace===pi?null:Ze.getPrimaries(S.colorSpace),xe=S.colorSpace===pi||ye===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Te=S.isCompressedTexture||S.image[0].isCompressedTexture,te=S.image[0]&&S.image[0].isDataTexture,de=[];for(let Z=0;Z<6;Z++)!Te&&!te?de[Z]=b(S.image[Z],!0,i.maxCubemapSize):de[Z]=te?S.image[Z].image:S.image[Z],de[Z]=lt(S,de[Z]);let Le=de[0],Ae=r.convert(S.format,S.colorSpace),ce=r.convert(S.type),Be=x(S.internalFormat,Ae,ce,S.colorSpace),F=S.isVideoTexture!==!0,Q=q.__version===void 0||X===!0,se=J.dataReady,_e=w(S,Le);Ee(s.TEXTURE_CUBE_MAP,S);let ee;if(Te){F&&Q&&t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,Be,Le.width,Le.height);for(let Z=0;Z<6;Z++){ee=de[Z].mipmaps;for(let we=0;we<ee.length;we++){let Ve=ee[we];S.format!==en?Ae!==null?F?se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we,0,0,Ve.width,Ve.height,Ae,Ve.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we,Be,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we,0,0,Ve.width,Ve.height,Ae,ce,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we,Be,Ve.width,Ve.height,0,Ae,ce,Ve.data)}}}else{if(ee=S.mipmaps,F&&Q){ee.length>0&&_e++;let Z=st(de[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,Be,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(te){F?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,de[Z].width,de[Z].height,Ae,ce,de[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,de[Z].width,de[Z].height,0,Ae,ce,de[Z].data);for(let we=0;we<ee.length;we++){let dt=ee[we].image[Z].image;F?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we+1,0,0,dt.width,dt.height,Ae,ce,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we+1,Be,dt.width,dt.height,0,Ae,ce,dt.data)}}else{F?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ae,ce,de[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,Ae,ce,de[Z]);for(let we=0;we<ee.length;we++){let Ve=ee[we];F?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we+1,0,0,Ae,ce,Ve.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we+1,Be,Ae,ce,Ve.image[Z])}}}g(S)&&f(s.TEXTURE_CUBE_MAP),q.__version=J.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function le(P,S,k,X,J,q){let ye=r.convert(k.format,k.colorSpace),ie=r.convert(k.type),xe=x(k.internalFormat,ye,ie,k.colorSpace),Te=n.get(S),te=n.get(k);if(te.__renderTarget=S,!Te.__hasExternalTextures){let de=Math.max(1,S.width>>q),Le=Math.max(1,S.height>>q);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,q,xe,de,Le,S.depth,0,ye,ie,null):t.texImage2D(J,q,xe,de,Le,0,ye,ie,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),be(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,J,te.__webglTexture,0,it(S)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,J,te.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Se(P,S,k){if(s.bindRenderbuffer(s.RENDERBUFFER,P),S.depthBuffer){let X=S.depthTexture,J=X&&X.isDepthTexture?X.type:null,q=v(S.stencilBuffer,J),ye=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=it(S);be(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,q,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,q,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,q,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,P)}else{let X=S.textures;for(let J=0;J<X.length;J++){let q=X[J],ye=r.convert(q.format,q.colorSpace),ie=r.convert(q.type),xe=x(q.internalFormat,ye,ie,q.colorSpace),Te=it(S);k&&be(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,xe,S.width,S.height):be(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te,xe,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,xe,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pe(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=n.get(S.depthTexture);X.__renderTarget=S,(!X.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);let J=X.__webglTexture,q=it(S);if(S.depthTexture.format===Ns)be(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(S.depthTexture.format===Ii)be(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ge(P){let S=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){let X=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),X){let J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=X}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");let X=P.texture.mipmaps;X&&X.length>0?pe(S.__webglFramebuffer[0],P):pe(S.__webglFramebuffer,P)}else if(k){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]===void 0)S.__webglDepthbuffer[X]=s.createRenderbuffer(),Se(S.__webglDepthbuffer[X],P,!1);else{let J=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,q)}}else{let X=P.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Se(S.__webglDepthbuffer,P,!1);else{let J=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function yt(P,S,k){let X=n.get(P);S!==void 0&&le(X.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Ge(P)}function D(P){let S=P.texture,k=n.get(P),X=n.get(S);P.addEventListener("dispose",C);let J=P.textures,q=P.isWebGLCubeRenderTarget===!0,ye=J.length>1;if(ye||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=S.version,a.memory.textures++),q){k.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ie]=[];for(let xe=0;xe<S.mipmaps.length;xe++)k.__webglFramebuffer[ie][xe]=s.createFramebuffer()}else k.__webglFramebuffer[ie]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ie=0;ie<S.mipmaps.length;ie++)k.__webglFramebuffer[ie]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(ye)for(let ie=0,xe=J.length;ie<xe;ie++){let Te=n.get(J[ie]);Te.__webglTexture===void 0&&(Te.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&be(P)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ie=0;ie<J.length;ie++){let xe=J[ie];k.__webglColorRenderbuffer[ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ie]);let Te=r.convert(xe.format,xe.colorSpace),te=r.convert(xe.type),de=x(xe.internalFormat,Te,te,xe.colorSpace,P.isXRRenderTarget===!0),Le=it(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,de,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.RENDERBUFFER,k.__webglColorRenderbuffer[ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Se(k.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),Ee(s.TEXTURE_CUBE_MAP,S);for(let ie=0;ie<6;ie++)if(S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)le(k.__webglFramebuffer[ie][xe],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe);else le(k.__webglFramebuffer[ie],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);g(S)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ie=0,xe=J.length;ie<xe;ie++){let Te=J[ie],te=n.get(Te),de=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,te.__webglTexture),Ee(de,Te),le(k.__webglFramebuffer,P,Te,s.COLOR_ATTACHMENT0+ie,de,0),g(Te)&&f(de)}t.unbindTexture()}else{let ie=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ie=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,X.__webglTexture),Ee(ie,S),S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)le(k.__webglFramebuffer[xe],P,S,s.COLOR_ATTACHMENT0,ie,xe);else le(k.__webglFramebuffer,P,S,s.COLOR_ATTACHMENT0,ie,0);g(S)&&f(ie),t.unbindTexture()}P.depthBuffer&&Ge(P)}function Je(P){let S=P.textures;for(let k=0,X=S.length;k<X;k++){let J=S[k];if(g(J)){let q=_(P),ye=n.get(J).__webglTexture;t.bindTexture(q,ye),f(q),t.unbindTexture()}}}let Ue=[],Ce=[];function ge(P){if(P.samples>0){if(be(P)===!1){let S=P.textures,k=P.width,X=P.height,J=s.COLOR_BUFFER_BIT,q=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=n.get(P),ie=S.length>1;if(ie)for(let Te=0;Te<S.length;Te++)t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);let xe=P.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Te=0;Te<S.length;Te++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ye.__webglColorRenderbuffer[Te]);let te=n.get(S[Te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,k,X,0,0,k,X,J,s.NEAREST),l===!0&&(Ue.length=0,Ce.length=0,Ue.push(s.COLOR_ATTACHMENT0+Te),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ue.push(q),Ce.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ce)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ie)for(let Te=0;Te<S.length;Te++){t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,ye.__webglColorRenderbuffer[Te]);let te=n.get(S[Te]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,te,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let S=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function it(P){return Math.min(i.maxSamples,P.samples)}function be(P){let S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ne(P){let S=a.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function lt(P,S){let k=P.colorSpace,X=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==kt&&k!==pi&&(Ze.getTransfer(k)===rt?(X!==en||J!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function st(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=K,this.setTextureCube=z,this.rebindTextures=yt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=le,this.useMultisampledRTT=be}function vx(s,e){function t(n,i=pi){let r,a=Ze.getTransfer(i);if(n===gn)return s.UNSIGNED_BYTE;if(n===nc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ic)return s.UNSIGNED_SHORT_5_5_5_1;if(n===sh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===rh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===nh)return s.BYTE;if(n===ih)return s.SHORT;if(n===er)return s.UNSIGNED_SHORT;if(n===tc)return s.INT;if(n===Ci)return s.UNSIGNED_INT;if(n===En)return s.FLOAT;if(n===Vt)return s.HALF_FLOAT;if(n===ah)return s.ALPHA;if(n===oh)return s.RGB;if(n===en)return s.RGBA;if(n===Ns)return s.DEPTH_COMPONENT;if(n===Ii)return s.DEPTH_STENCIL;if(n===sc)return s.RED;if(n===rc)return s.RED_INTEGER;if(n===ch)return s.RG;if(n===ac)return s.RG_INTEGER;if(n===oc)return s.RGBA_INTEGER;if(n===pa||n===ma||n===ga||n===ba)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cc||n===lc||n===hc||n===uc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dc||n===fc||n===pc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dc||n===fc)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mc||n===gc||n===bc||n===vc||n===xc||n===_c||n===yc||n===Mc||n===Sc||n===wc||n===Ec||n===Tc||n===Ac||n===Rc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_c)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ec)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ac)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cc||n===Pc||n===Ic)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Cc)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dc||n===Lc||n===Uc||n===Fc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Dc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var xx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_x=`
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

}`,Ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new zr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new $e({vertexShader:xx,fragmentShader:_x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ie(new At(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dh=class extends ai{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null,b=typeof XRWebGLBinding<"u",g=new Ih,f={},_=t.getContextAttributes(),x=null,v=null,w=[],T=[],C=new re,A=null,M=new St;M.viewport=new Ye;let y=new St;y.viewport=new Ye;let I=[M,y],L=new Oo,U=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Y=w[j];return Y===void 0&&(Y=new zs,w[j]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(j){let Y=w[j];return Y===void 0&&(Y=new zs,w[j]=Y),Y.getGripSpace()},this.getHand=function(j){let Y=w[j];return Y===void 0&&(Y=new zs,w[j]=Y),Y.getHandSpace()};function W(j){let Y=T.indexOf(j.inputSource);if(Y===-1)return;let le=w[Y];le!==void 0&&(le.update(j.inputSource,j.frame,c||a),le.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",K);for(let j=0;j<w.length;j++){let Y=T[j];Y!==null&&(T[j]=null,w[j].disconnect(Y))}U=null,B=null,g.reset();for(let j in f)delete f[j];e.setRenderTarget(x),p=null,d=null,u=null,i=null,v=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",V),i.addEventListener("inputsourceschange",K),_.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Se=null,pe=null;_.depth&&(pe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=_.stencil?Ii:Ns,Se=_.stencil?Pi:Ci);let Ge={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ge),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Tt(d.textureWidth,d.textureHeight,{format:en,type:gn,depthTexture:new $i(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let le={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Tt(p.framebufferWidth,p.framebufferHeight,{format:en,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ke.setContext(i),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(j){for(let Y=0;Y<j.removed.length;Y++){let le=j.removed[Y],Se=T.indexOf(le);Se>=0&&(T[Se]=null,w[Se].disconnect(le))}for(let Y=0;Y<j.added.length;Y++){let le=j.added[Y],Se=T.indexOf(le);if(Se===-1){for(let Ge=0;Ge<w.length;Ge++)if(Ge>=T.length){T.push(le),Se=Ge;break}else if(T[Ge]===null){T[Ge]=le,Se=Ge;break}if(Se===-1)break}let pe=w[Se];pe&&pe.connect(le)}}let z=new R,$=new R;function oe(j,Y,le){z.setFromMatrixPosition(Y.matrixWorld),$.setFromMatrixPosition(le.matrixWorld);let Se=z.distanceTo($),pe=Y.projectionMatrix.elements,Ge=le.projectionMatrix.elements,yt=pe[14]/(pe[10]-1),D=pe[14]/(pe[10]+1),Je=(pe[9]+1)/pe[5],Ue=(pe[9]-1)/pe[5],Ce=(pe[8]-1)/pe[0],ge=(Ge[8]+1)/Ge[0],it=yt*Ce,be=yt*ge,Ne=Se/(-Ce+ge),lt=Ne*-Ce;if(Y.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(lt),j.translateZ(Ne),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),pe[10]===-1)j.projectionMatrix.copy(Y.projectionMatrix),j.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let st=yt+Ne,P=D+Ne,S=it-lt,k=be+(Se-lt),X=Je*D/P*st,J=Ue*D/P*st;j.projectionMatrix.makePerspective(S,k,X,J,st,P),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ue(j,Y){Y===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Y.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let Y=j.near,le=j.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(le=g.depthFar)),L.near=y.near=M.near=Y,L.far=y.far=M.far=le,(U!==L.near||B!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),U=L.near,B=L.far),L.layers.mask=j.layers.mask|6,M.layers.mask=L.layers.mask&3,y.layers.mask=L.layers.mask&5;let Se=j.parent,pe=L.cameras;ue(L,Se);for(let Ge=0;Ge<pe.length;Ge++)ue(pe[Ge],Se);pe.length===2?oe(L,M,y):L.projectionMatrix.copy(M.projectionMatrix),Ee(j,L,Se)};function Ee(j,Y,le){le===null?j.matrix.copy(Y.matrixWorld):(j.matrix.copy(le.matrixWorld),j.matrix.invert(),j.matrix.multiply(Y.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Y.projectionMatrix),j.projectionMatrixInverse.copy(Y.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ki*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(j){return f[j]};let Oe=null;function tt(j,Y){if(h=Y.getViewerPose(c||a),m=Y,h!==null){let le=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Se=!1;le.length!==L.cameras.length&&(L.cameras.length=0,Se=!0);for(let D=0;D<le.length;D++){let Je=le[D],Ue=null;if(p!==null)Ue=p.getViewport(Je);else{let ge=u.getViewSubImage(d,Je);Ue=ge.viewport,D===0&&(e.setRenderTargetTextures(v,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(v))}let Ce=I[D];Ce===void 0&&(Ce=new St,Ce.layers.enable(D),Ce.viewport=new Ye,I[D]=Ce),Ce.matrix.fromArray(Je.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Je.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),D===0&&(L.matrix.copy(Ce.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Se===!0&&L.cameras.push(Ce)}let pe=i.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let D=u.getDepthInformation(le[0]);D&&D.isValid&&D.texture&&g.init(D,i.renderState)}if(pe&&pe.includes("camera-access")&&b){e.state.unbindTexture(),u=n.getBinding();for(let D=0;D<le.length;D++){let Je=le[D].camera;if(Je){let Ue=f[Je];Ue||(Ue=new zr,f[Je]=Ue);let Ce=u.getCameraImage(Je);Ue.sourceTexture=Ce}}}}for(let le=0;le<w.length;le++){let Se=T[le],pe=w[le];Se!==null&&pe!==void 0&&pe.update(Se,Y,c||a)}Oe&&Oe(j,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),m=null}let ke=new If;ke.setAnimationLoop(tt),this.setAnimationLoop=function(j){Oe=j},this.dispose=function(){}}},hs=new Fn,yx=new Re;function Mx(s,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,ph(s)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function i(g,f,_,x,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,v)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),b(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,_,x):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Ht&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Ht&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let _=e.get(f),x=_.envMap,v=_.envMapRotation;x&&(g.envMap.value=x,hs.copy(v),hs.x*=-1,hs.y*=-1,hs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),g.envMapRotation.value.setFromMatrix4(yx.makeRotationFromEuler(hs)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,_,x){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*_,g.scale.value=x*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,_){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ht&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function b(g,f){let _=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Sx(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){let v=x.program;n.uniformBlockBinding(_,v)}function c(_,x){let v=i[_.id];v===void 0&&(m(_),v=h(_),i[_.id]=v,_.addEventListener("dispose",g));let w=x.program;n.updateUBOMapping(_,w);let T=e.render.frame;r[_.id]!==T&&(d(_),r[_.id]=T)}function h(_){let x=u();_.__bindingPointIndex=x;let v=s.createBuffer(),w=_.__size,T=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,w,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let x=i[_.id],v=_.uniforms,w=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,C=v.length;T<C;T++){let A=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,y=A.length;M<y;M++){let I=A[M];if(p(I,T,M,w)===!0){let L=I.__offset,U=Array.isArray(I.value)?I.value:[I.value],B=0;for(let W=0;W<U.length;W++){let V=U[W],K=b(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,L+B,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,B),B+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(_,x,v,w){let T=_.value,C=x+"_"+v;if(w[C]===void 0)return typeof T=="number"||typeof T=="boolean"?w[C]=T:w[C]=T.clone(),!0;{let A=w[C];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return w[C]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function m(_){let x=_.uniforms,v=0,w=16;for(let C=0,A=x.length;C<A;C++){let M=Array.isArray(x[C])?x[C]:[x[C]];for(let y=0,I=M.length;y<I;y++){let L=M[y],U=Array.isArray(L.value)?L.value:[L.value];for(let B=0,W=U.length;B<W;B++){let V=U[B],K=b(V),z=v%w,$=z%K.boundary,oe=z+$;v+=$,oe!==0&&w-oe<K.storage&&(v+=w-oe),L.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=K.storage}}}let T=v%w;return T>0&&(v+=w-T),_.__size=v,_.__cache={},this}function b(_){let x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function g(_){let x=_.target;x.removeEventListener("dispose",g);let v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function f(){for(let _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}var zc=class{constructor(e={}){let{canvas:t=$d(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),b=new Int32Array(4),g=null,f=null,_=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,w=!1;this._outputColorSpace=wt;let T=0,C=0,A=null,M=-1,y=null,I=new Ye,L=new Ye,U=null,B=new me(0),W=0,V=t.width,K=t.height,z=1,$=null,oe=null,ue=new Ye(0,0,V,K),Ee=new Ye(0,0,V,K),Oe=!1,tt=new qs,ke=!1,j=!1,Y=new Re,le=new R,Se=new Ye,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function yt(){return A===null?z:1}let D=n;function Je(E,N){return t.getContext(E,N)}try{let E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ee,!1),D===null){let N="webgl2";if(D=Je(N,E),D===null)throw Je(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ue,Ce,ge,it,be,Ne,lt,st,P,S,k,X,J,q,ye,ie,xe,Te,te,de,Le,Ae,ce,Be;function F(){Ue=new Hb(D),Ue.init(),Ae=new vx(D,Ue),Ce=new Ub(D,Ue,e,Ae),ge=new gx(D,Ue),Ce.reversedDepthBuffer&&d&&ge.buffers.depth.setReversed(!0),it=new Wb(D),be=new ix,Ne=new bx(D,Ue,ge,be,Ce,Ae,it),lt=new Nb(v),st=new zb(v),P=new Zm(D),ce=new Db(D,P),S=new Vb(D,P,it,ce),k=new Xb(D,S,P,it),te=new qb(D,Ce,Ne),ie=new Fb(be),X=new nx(v,lt,st,Ue,Ce,ce,ie),J=new Mx(v,be),q=new rx,ye=new ux(Ue),Te=new Ib(v,lt,st,ge,k,p,l),xe=new px(v,k,Ce),Be=new Sx(D,it,Ce,ge),de=new Lb(D,Ue,it),Le=new Gb(D,Ue,it),it.programs=X.programs,v.capabilities=Ce,v.extensions=Ue,v.properties=be,v.renderLists=q,v.shadowMap=xe,v.state=ge,v.info=it}F();let Q=new Dh(v,D);this.xr=Q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let E=Ue.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ue.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(E){E!==void 0&&(z=E,this.setSize(V,K,!1))},this.getSize=function(E){return E.set(V,K)},this.setSize=function(E,N,H=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,K=N,t.width=Math.floor(E*z),t.height=Math.floor(N*z),H===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(V*z,K*z).floor()},this.setDrawingBufferSize=function(E,N,H){V=E,K=N,z=H,t.width=Math.floor(E*H),t.height=Math.floor(N*H),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(ue)},this.setViewport=function(E,N,H,G){E.isVector4?ue.set(E.x,E.y,E.z,E.w):ue.set(E,N,H,G),ge.viewport(I.copy(ue).multiplyScalar(z).round())},this.getScissor=function(E){return E.copy(Ee)},this.setScissor=function(E,N,H,G){E.isVector4?Ee.set(E.x,E.y,E.z,E.w):Ee.set(E,N,H,G),ge.scissor(L.copy(Ee).multiplyScalar(z).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(E){ge.setScissorTest(Oe=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){oe=E},this.getClearColor=function(E){return E.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,H=!0){let G=0;if(E){let O=!1;if(A!==null){let ne=A.texture.format;O=ne===oc||ne===ac||ne===rc}if(O){let ne=A.texture.type,fe=ne===gn||ne===Ci||ne===er||ne===Pi||ne===nc||ne===ic,Me=Te.getClearColor(),ve=Te.getClearAlpha(),Fe=Me.r,ze=Me.g,Pe=Me.b;fe?(m[0]=Fe,m[1]=ze,m[2]=Pe,m[3]=ve,D.clearBufferuiv(D.COLOR,0,m)):(b[0]=Fe,b[1]=ze,b[2]=Pe,b[3]=ve,D.clearBufferiv(D.COLOR,0,b))}else G|=D.COLOR_BUFFER_BIT}N&&(G|=D.DEPTH_BUFFER_BIT),H&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),Te.dispose(),q.dispose(),ye.dispose(),be.dispose(),lt.dispose(),st.dispose(),k.dispose(),ce.dispose(),Be.dispose(),X.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Bn),Q.removeEventListener("sessionend",Au),Oi.stop()};function se(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let E=it.autoReset,N=xe.enabled,H=xe.autoUpdate,G=xe.needsUpdate,O=xe.type;F(),it.autoReset=E,xe.enabled=N,xe.autoUpdate=H,xe.needsUpdate=G,xe.type=O}function ee(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Z(E){let N=E.target;N.removeEventListener("dispose",Z),we(N)}function we(E){Ve(E),be.remove(E)}function Ve(E){let N=be.get(E).programs;N!==void 0&&(N.forEach(function(H){X.releaseProgram(H)}),E.isShaderMaterial&&X.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,H,G,O,ne){N===null&&(N=pe);let fe=O.isMesh&&O.matrixWorld.determinant()<0,Me=xp(E,N,H,G,O);ge.setMaterial(G,fe);let ve=H.index,Fe=1;if(G.wireframe===!0){if(ve=S.getWireframeAttribute(H),ve===void 0)return;Fe=2}let ze=H.drawRange,Pe=H.attributes.position,et=ze.start*Fe,ct=(ze.start+ze.count)*Fe;ne!==null&&(et=Math.max(et,ne.start*Fe),ct=Math.min(ct,(ne.start+ne.count)*Fe)),ve!==null?(et=Math.max(et,0),ct=Math.min(ct,ve.count)):Pe!=null&&(et=Math.max(et,0),ct=Math.min(ct,Pe.count));let Mt=ct-et;if(Mt<0||Mt===1/0)return;ce.setup(O,G,Me,H,ve);let pt,ht=de;if(ve!==null&&(pt=P.get(ve),ht=Le,ht.setIndex(pt)),O.isMesh)G.wireframe===!0?(ge.setLineWidth(G.wireframeLinewidth*yt()),ht.setMode(D.LINES)):ht.setMode(D.TRIANGLES);else if(O.isLine){let De=G.linewidth;De===void 0&&(De=1),ge.setLineWidth(De*yt()),O.isLineSegments?ht.setMode(D.LINES):O.isLineLoop?ht.setMode(D.LINE_LOOP):ht.setMode(D.LINE_STRIP)}else O.isPoints?ht.setMode(D.POINTS):O.isSprite&&ht.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ks("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))ht.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let De=O._multiDrawStarts,vt=O._multiDrawCounts,nt=O._multiDrawCount,hn=ve?P.get(ve).bytesPerElement:1,vs=be.get(G).currentProgram.getUniforms();for(let un=0;un<nt;un++)vs.setValue(D,"_gl_DrawID",un),ht.render(De[un]/hn,vt[un])}else if(O.isInstancedMesh)ht.renderInstances(et,Mt,O.count);else if(H.isInstancedBufferGeometry){let De=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,vt=Math.min(H.instanceCount,De);ht.renderInstances(et,Mt,vt)}else ht.render(et,Mt)};function dt(E,N,H){E.transparent===!0&&E.side===Ot&&E.forceSinglePass===!1?(E.side=Ht,E.needsUpdate=!0,ka(E,N,H),E.side=Un,E.needsUpdate=!0,ka(E,N,H),E.side=Ot):ka(E,N,H)}this.compile=function(E,N,H=null){H===null&&(H=E),f=ye.get(H),f.init(N),x.push(f),H.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),E!==H&&E.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();let G=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ne=O.material;if(ne)if(Array.isArray(ne))for(let fe=0;fe<ne.length;fe++){let Me=ne[fe];dt(Me,H,O),G.add(Me)}else dt(ne,H,O),G.add(ne)}),f=x.pop(),G},this.compileAsync=function(E,N,H=null){let G=this.compile(E,N,H);return new Promise(O=>{function ne(){if(G.forEach(function(fe){be.get(fe).currentProgram.isReady()&&G.delete(fe)}),G.size===0){O(E);return}setTimeout(ne,10)}Ue.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let at=null;function Jn(E){at&&at(E)}function Bn(){Oi.stop()}function Au(){Oi.start()}let Oi=new If;Oi.setAnimationLoop(Jn),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(E){at=E,Q.setAnimationLoop(E),E===null?Oi.stop():Oi.start()},Q.addEventListener("sessionstart",Bn),Q.addEventListener("sessionend",Au),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(N),N=Q.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,N,A),f=ye.get(E,x.length),f.init(N),x.push(f),Y.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),tt.setFromProjectionMatrix(Y,Ln,N.reversedDepth),j=this.localClippingEnabled,ke=ie.init(this.clippingPlanes,j),g=q.get(E,_.length),g.init(),_.push(g),Q.enabled===!0&&Q.isPresenting===!0){let ne=v.xr.getDepthSensingMesh();ne!==null&&sl(ne,N,-1/0,v.sortObjects)}sl(E,N,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort($,oe),Ge=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Ge&&Te.addToRenderList(g,E),this.info.render.frame++,ke===!0&&ie.beginShadows();let H=f.state.shadowsArray;xe.render(H,E,N),ke===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=g.opaque,O=g.transmissive;if(f.setupLights(),N.isArrayCamera){let ne=N.cameras;if(O.length>0)for(let fe=0,Me=ne.length;fe<Me;fe++){let ve=ne[fe];Cu(G,O,E,ve)}Ge&&Te.render(E);for(let fe=0,Me=ne.length;fe<Me;fe++){let ve=ne[fe];Ru(g,E,ve,ve.viewport)}}else O.length>0&&Cu(G,O,E,N),Ge&&Te.render(E),Ru(g,E,N);A!==null&&C===0&&(Ne.updateMultisampleRenderTarget(A),Ne.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(v,E,N),ce.resetDefaultState(),M=-1,y=null,x.pop(),x.length>0?(f=x[x.length-1],ke===!0&&ie.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function sl(E,N,H,G){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||tt.intersectsSprite(E)){G&&Se.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Y);let fe=k.update(E),Me=E.material;Me.visible&&g.push(E,fe,Me,H,Se.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||tt.intersectsObject(E))){let fe=k.update(E),Me=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Se.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Se.copy(fe.boundingSphere.center)),Se.applyMatrix4(E.matrixWorld).applyMatrix4(Y)),Array.isArray(Me)){let ve=fe.groups;for(let Fe=0,ze=ve.length;Fe<ze;Fe++){let Pe=ve[Fe],et=Me[Pe.materialIndex];et&&et.visible&&g.push(E,fe,et,H,Se.z,Pe)}}else Me.visible&&g.push(E,fe,Me,H,Se.z,null)}}let ne=E.children;for(let fe=0,Me=ne.length;fe<Me;fe++)sl(ne[fe],N,H,G)}function Ru(E,N,H,G){let O=E.opaque,ne=E.transmissive,fe=E.transparent;f.setupLightsView(H),ke===!0&&ie.setGlobalState(v.clippingPlanes,H),G&&ge.viewport(I.copy(G)),O.length>0&&Oa(O,N,H),ne.length>0&&Oa(ne,N,H),fe.length>0&&Oa(fe,N,H),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Cu(E,N,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new Tt(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?Vt:gn,minFilter:On,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let ne=f.state.transmissionRenderTarget[G.id],fe=G.viewport||I;ne.setSize(fe.z*v.transmissionResolutionScale,fe.w*v.transmissionResolutionScale);let Me=v.getRenderTarget(),ve=v.getActiveCubeFace(),Fe=v.getActiveMipmapLevel();v.setRenderTarget(ne),v.getClearColor(B),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),Ge&&Te.render(H);let ze=v.toneMapping;v.toneMapping=fi;let Pe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),ke===!0&&ie.setGlobalState(v.clippingPlanes,G),Oa(E,H,G),Ne.updateMultisampleRenderTarget(ne),Ne.updateRenderTargetMipmap(ne),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let ct=0,Mt=N.length;ct<Mt;ct++){let pt=N[ct],ht=pt.object,De=pt.geometry,vt=pt.material,nt=pt.group;if(vt.side===Ot&&ht.layers.test(G.layers)){let hn=vt.side;vt.side=Ht,vt.needsUpdate=!0,Pu(ht,H,G,De,vt,nt),vt.side=hn,vt.needsUpdate=!0,et=!0}}et===!0&&(Ne.updateMultisampleRenderTarget(ne),Ne.updateRenderTargetMipmap(ne))}v.setRenderTarget(Me,ve,Fe),v.setClearColor(B,W),Pe!==void 0&&(G.viewport=Pe),v.toneMapping=ze}function Oa(E,N,H){let G=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ne=E.length;O<ne;O++){let fe=E[O],Me=fe.object,ve=fe.geometry,Fe=fe.group,ze=fe.material;ze.allowOverride===!0&&G!==null&&(ze=G),Me.layers.test(H.layers)&&Pu(Me,N,H,ve,ze,Fe)}}function Pu(E,N,H,G,O,ne){E.onBeforeRender(v,N,H,G,O,ne),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(v,N,H,G,E,ne),O.transparent===!0&&O.side===Ot&&O.forceSinglePass===!1?(O.side=Ht,O.needsUpdate=!0,v.renderBufferDirect(H,N,G,O,E,ne),O.side=Un,O.needsUpdate=!0,v.renderBufferDirect(H,N,G,O,E,ne),O.side=Ot):v.renderBufferDirect(H,N,G,O,E,ne),E.onAfterRender(v,N,H,G,O,ne)}function ka(E,N,H){N.isScene!==!0&&(N=pe);let G=be.get(E),O=f.state.lights,ne=f.state.shadowsArray,fe=O.state.version,Me=X.getParameters(E,O.state,ne,N,H),ve=X.getProgramCacheKey(Me),Fe=G.programs;G.environment=E.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(E.isMeshStandardMaterial?st:lt).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Fe===void 0&&(E.addEventListener("dispose",Z),Fe=new Map,G.programs=Fe);let ze=Fe.get(ve);if(ze!==void 0){if(G.currentProgram===ze&&G.lightsStateVersion===fe)return Du(E,Me),ze}else Me.uniforms=X.getUniforms(E),E.onBeforeCompile(Me,v),ze=X.acquireProgram(Me,ve),Fe.set(ve,ze),G.uniforms=Me.uniforms;let Pe=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=ie.uniform),Du(E,Me),G.needsLights=yp(E),G.lightsStateVersion=fe,G.needsLights&&(Pe.ambientLightColor.value=O.state.ambient,Pe.lightProbe.value=O.state.probe,Pe.directionalLights.value=O.state.directional,Pe.directionalLightShadows.value=O.state.directionalShadow,Pe.spotLights.value=O.state.spot,Pe.spotLightShadows.value=O.state.spotShadow,Pe.rectAreaLights.value=O.state.rectArea,Pe.ltc_1.value=O.state.rectAreaLTC1,Pe.ltc_2.value=O.state.rectAreaLTC2,Pe.pointLights.value=O.state.point,Pe.pointLightShadows.value=O.state.pointShadow,Pe.hemisphereLights.value=O.state.hemi,Pe.directionalShadowMap.value=O.state.directionalShadowMap,Pe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Pe.spotShadowMap.value=O.state.spotShadowMap,Pe.spotLightMatrix.value=O.state.spotLightMatrix,Pe.spotLightMap.value=O.state.spotLightMap,Pe.pointShadowMap.value=O.state.pointShadowMap,Pe.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=ze,G.uniformsList=null,ze}function Iu(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=sr.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Du(E,N){let H=be.get(E);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function xp(E,N,H,G,O){N.isScene!==!0&&(N=pe),Ne.resetTextureUnits();let ne=N.fog,fe=G.isMeshStandardMaterial?N.environment:null,Me=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:kt,ve=(G.isMeshStandardMaterial?st:lt).get(G.envMap||fe),Fe=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ze=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pe=!!H.morphAttributes.position,et=!!H.morphAttributes.normal,ct=!!H.morphAttributes.color,Mt=fi;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Mt=v.toneMapping);let pt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ht=pt!==void 0?pt.length:0,De=be.get(G),vt=f.state.lights;if(ke===!0&&(j===!0||E!==y)){let Zt=E===y&&G.id===M;ie.setState(G,E,Zt)}let nt=!1;G.version===De.__version?(De.needsLights&&De.lightsStateVersion!==vt.state.version||De.outputColorSpace!==Me||O.isBatchedMesh&&De.batching===!1||!O.isBatchedMesh&&De.batching===!0||O.isBatchedMesh&&De.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&De.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&De.instancing===!1||!O.isInstancedMesh&&De.instancing===!0||O.isSkinnedMesh&&De.skinning===!1||!O.isSkinnedMesh&&De.skinning===!0||O.isInstancedMesh&&De.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&De.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&De.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&De.instancingMorph===!1&&O.morphTexture!==null||De.envMap!==ve||G.fog===!0&&De.fog!==ne||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ie.numPlanes||De.numIntersection!==ie.numIntersection)||De.vertexAlphas!==Fe||De.vertexTangents!==ze||De.morphTargets!==Pe||De.morphNormals!==et||De.morphColors!==ct||De.toneMapping!==Mt||De.morphTargetsCount!==ht)&&(nt=!0):(nt=!0,De.__version=G.version);let hn=De.currentProgram;nt===!0&&(hn=ka(G,N,O));let vs=!1,un=!1,ur=!1,xt=hn.getUniforms(),_n=De.uniforms;if(ge.useProgram(hn.program)&&(vs=!0,un=!0,ur=!0),G.id!==M&&(M=G.id,un=!0),vs||y!==E){ge.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),xt.setValue(D,"projectionMatrix",E.projectionMatrix),xt.setValue(D,"viewMatrix",E.matrixWorldInverse);let tn=xt.map.cameraPosition;tn!==void 0&&tn.setValue(D,le.setFromMatrixPosition(E.matrixWorld)),Ce.logarithmicDepthBuffer&&xt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,un=!0,ur=!0)}if(O.isSkinnedMesh){xt.setOptional(D,O,"bindMatrix"),xt.setOptional(D,O,"bindMatrixInverse");let Zt=O.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),xt.setValue(D,"boneTexture",Zt.boneTexture,Ne))}O.isBatchedMesh&&(xt.setOptional(D,O,"batchingTexture"),xt.setValue(D,"batchingTexture",O._matricesTexture,Ne),xt.setOptional(D,O,"batchingIdTexture"),xt.setValue(D,"batchingIdTexture",O._indirectTexture,Ne),xt.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&xt.setValue(D,"batchingColorTexture",O._colorsTexture,Ne));let yn=H.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&te.update(O,H,hn),(un||De.receiveShadow!==O.receiveShadow)&&(De.receiveShadow=O.receiveShadow,xt.setValue(D,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(_n.envMap.value=ve,_n.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(_n.envMapIntensity.value=N.environmentIntensity),un&&(xt.setValue(D,"toneMappingExposure",v.toneMappingExposure),De.needsLights&&_p(_n,ur),ne&&G.fog===!0&&J.refreshFogUniforms(_n,ne),J.refreshMaterialUniforms(_n,G,z,K,f.state.transmissionRenderTarget[E.id]),sr.upload(D,Iu(De),_n,Ne)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(sr.upload(D,Iu(De),_n,Ne),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xt.setValue(D,"center",O.center),xt.setValue(D,"modelViewMatrix",O.modelViewMatrix),xt.setValue(D,"normalMatrix",O.normalMatrix),xt.setValue(D,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Zt=G.uniformsGroups;for(let tn=0,rl=Zt.length;tn<rl;tn++){let ki=Zt[tn];Be.update(ki,hn),Be.bind(ki,hn)}}return hn}function _p(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function yp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,N,H){let G=be.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),be.get(E.texture).__webglTexture=N,be.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){let H=be.get(E);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};let Mp=D.createFramebuffer();this.setRenderTarget=function(E,N=0,H=0){A=E,T=N,C=H;let G=!0,O=null,ne=!1,fe=!1;if(E){let ve=be.get(E);if(ve.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(ve.__webglFramebuffer===void 0)Ne.setupRenderTarget(E);else if(ve.__hasExternalTextures)Ne.rebindTextures(E,be.get(E.texture).__webglTexture,be.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Pe=E.depthTexture;if(ve.__boundDepthTexture!==Pe){if(Pe!==null&&be.has(Pe)&&(E.width!==Pe.image.width||E.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(E)}}let Fe=E.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(fe=!0);let ze=be.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ze[N])?O=ze[N][H]:O=ze[N],ne=!0):E.samples>0&&Ne.useMultisampledRTT(E)===!1?O=be.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?O=ze[H]:O=ze,I.copy(E.viewport),L.copy(E.scissor),U=E.scissorTest}else I.copy(ue).multiplyScalar(z).floor(),L.copy(Ee).multiplyScalar(z).floor(),U=Oe;if(H!==0&&(O=Mp),ge.bindFramebuffer(D.FRAMEBUFFER,O)&&G&&ge.drawBuffers(E,O),ge.viewport(I),ge.scissor(L),ge.setScissorTest(U),ne){let ve=be.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,ve.__webglTexture,H)}else if(fe){let ve=N;for(let Fe=0;Fe<E.textures.length;Fe++){let ze=be.get(E.textures[Fe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Fe,ze.__webglTexture,H,ve)}}else if(E!==null&&H!==0){let ve=be.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ve.__webglTexture,H)}M=-1},this.readRenderTargetPixels=function(E,N,H,G,O,ne,fe,Me=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){ge.bindFramebuffer(D.FRAMEBUFFER,ve);try{let Fe=E.textures[Me],ze=Fe.format,Pe=Fe.type;if(!Ce.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-G&&H>=0&&H<=E.height-O&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Me),D.readPixels(N,H,G,O,Ae.convert(ze),Ae.convert(Pe),ne))}finally{let Fe=A!==null?be.get(A).__webglFramebuffer:null;ge.bindFramebuffer(D.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(E,N,H,G,O,ne,fe,Me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve)if(N>=0&&N<=E.width-G&&H>=0&&H<=E.height-O){ge.bindFramebuffer(D.FRAMEBUFFER,ve);let Fe=E.textures[Me],ze=Fe.format,Pe=Fe.type;if(!Ce.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let et=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.bufferData(D.PIXEL_PACK_BUFFER,ne.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Me),D.readPixels(N,H,G,O,Ae.convert(ze),Ae.convert(Pe),0);let ct=A!==null?be.get(A).__webglFramebuffer:null;ge.bindFramebuffer(D.FRAMEBUFFER,ct);let Mt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Qd(D,Mt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ne),D.deleteBuffer(et),D.deleteSync(Mt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,H=0){let G=Math.pow(2,-H),O=Math.floor(E.image.width*G),ne=Math.floor(E.image.height*G),fe=N!==null?N.x:0,Me=N!==null?N.y:0;Ne.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,fe,Me,O,ne),ge.unbindTexture()};let Sp=D.createFramebuffer(),wp=D.createFramebuffer();this.copyTextureToTexture=function(E,N,H=null,G=null,O=0,ne=null){ne===null&&(O!==0?(ks("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=O,O=0):ne=0);let fe,Me,ve,Fe,ze,Pe,et,ct,Mt,pt=E.isCompressedTexture?E.mipmaps[ne]:E.image;if(H!==null)fe=H.max.x-H.min.x,Me=H.max.y-H.min.y,ve=H.isBox3?H.max.z-H.min.z:1,Fe=H.min.x,ze=H.min.y,Pe=H.isBox3?H.min.z:0;else{let yn=Math.pow(2,-O);fe=Math.floor(pt.width*yn),Me=Math.floor(pt.height*yn),E.isDataArrayTexture?ve=pt.depth:E.isData3DTexture?ve=Math.floor(pt.depth*yn):ve=1,Fe=0,ze=0,Pe=0}G!==null?(et=G.x,ct=G.y,Mt=G.z):(et=0,ct=0,Mt=0);let ht=Ae.convert(N.format),De=Ae.convert(N.type),vt;N.isData3DTexture?(Ne.setTexture3D(N,0),vt=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ne.setTexture2DArray(N,0),vt=D.TEXTURE_2D_ARRAY):(Ne.setTexture2D(N,0),vt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);let nt=D.getParameter(D.UNPACK_ROW_LENGTH),hn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),vs=D.getParameter(D.UNPACK_SKIP_PIXELS),un=D.getParameter(D.UNPACK_SKIP_ROWS),ur=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,pt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Fe),D.pixelStorei(D.UNPACK_SKIP_ROWS,ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pe);let xt=E.isDataArrayTexture||E.isData3DTexture,_n=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){let yn=be.get(E),Zt=be.get(N),tn=be.get(yn.__renderTarget),rl=be.get(Zt.__renderTarget);ge.bindFramebuffer(D.READ_FRAMEBUFFER,tn.__webglFramebuffer),ge.bindFramebuffer(D.DRAW_FRAMEBUFFER,rl.__webglFramebuffer);for(let ki=0;ki<ve;ki++)xt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.get(E).__webglTexture,O,Pe+ki),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.get(N).__webglTexture,ne,Mt+ki)),D.blitFramebuffer(Fe,ze,fe,Me,et,ct,fe,Me,D.DEPTH_BUFFER_BIT,D.NEAREST);ge.bindFramebuffer(D.READ_FRAMEBUFFER,null),ge.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||be.has(E)){let yn=be.get(E),Zt=be.get(N);ge.bindFramebuffer(D.READ_FRAMEBUFFER,Sp),ge.bindFramebuffer(D.DRAW_FRAMEBUFFER,wp);for(let tn=0;tn<ve;tn++)xt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yn.__webglTexture,O,Pe+tn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yn.__webglTexture,O),_n?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Zt.__webglTexture,ne,Mt+tn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Zt.__webglTexture,ne),O!==0?D.blitFramebuffer(Fe,ze,fe,Me,et,ct,fe,Me,D.COLOR_BUFFER_BIT,D.NEAREST):_n?D.copyTexSubImage3D(vt,ne,et,ct,Mt+tn,Fe,ze,fe,Me):D.copyTexSubImage2D(vt,ne,et,ct,Fe,ze,fe,Me);ge.bindFramebuffer(D.READ_FRAMEBUFFER,null),ge.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else _n?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(vt,ne,et,ct,Mt,fe,Me,ve,ht,De,pt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(vt,ne,et,ct,Mt,fe,Me,ve,ht,pt.data):D.texSubImage3D(vt,ne,et,ct,Mt,fe,Me,ve,ht,De,pt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ne,et,ct,fe,Me,ht,De,pt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ne,et,ct,pt.width,pt.height,ht,pt.data):D.texSubImage2D(D.TEXTURE_2D,ne,et,ct,fe,Me,ht,De,pt);D.pixelStorei(D.UNPACK_ROW_LENGTH,nt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,hn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,vs),D.pixelStorei(D.UNPACK_SKIP_ROWS,un),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ur),ne===0&&N.generateMipmaps&&D.generateMipmap(vt),ge.unbindTexture()},this.initRenderTarget=function(E){be.get(E).__webglFramebuffer===void 0&&Ne.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ne.setTextureCube(E,0):E.isData3DTexture?Ne.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ne.setTexture2DArray(E,0):Ne.setTexture2D(E,0),ge.unbindTexture()},this.resetState=function(){T=0,C=0,A=null,ge.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};function Uh(s,e,t=!1){let n=s.onBeforeCompile;s.onBeforeCompile=i=>{n.call(s,i),Object.assign(i.uniforms,{reflectionMatrix:e.reflectionMatrix,reflectionTexture:e.reflectionTexture,reflectionSharp:e.reflectionSharp,buildingFootprints:e.buildingFootprints,buildingCount:e.buildingCount,reflectionTone:e.environmentTone,reflectionStrength:e.reflectionStrength??={value:1}}),i.vertexShader=`uniform mat4 reflectionMatrix; varying vec4 vGroundReflection; varying vec3 vGroundWorld;
`+i.vertexShader,t?i.vertexShader=i.vertexShader.replace("gl_Position=","vGroundWorld=p;vGroundReflection=reflectionMatrix*vec4(p,1.);gl_Position="):i.vertexShader=i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vGroundWorld=(modelMatrix*vec4(transformed,1.)).xyz;vGroundReflection=reflectionMatrix*vec4(vGroundWorld,1.);`),i.fragmentShader=`uniform float reflectionTone;uniform float reflectionStrength;uniform sampler2D reflectionTexture;uniform sampler2D reflectionSharp;uniform vec4 buildingFootprints[32];uniform int buildingCount;varying vec4 vGroundReflection;varying vec3 vGroundWorld;
`+i.fragmentShader;let r="float distanceToBuilding=1000.;for(int i=0;i<32;i++){if(i>=buildingCount)break;vec4 b=buildingFootprints[i];vec2 outside=max(abs(vGroundWorld.xz-b.xy)-b.zw,0.);distanceToBuilding=min(distanceToBuilding,length(outside));}float proximity=1.-smoothstep(.15,18.,distanceToBuilding);vec2 reflectionUV=vGroundReflection.xy/vGroundReflection.w;float valid=(1.-smoothstep(.2,1.,abs(vGroundWorld.y)))*step(0.,reflectionUV.x)*step(reflectionUV.x,1.)*step(0.,reflectionUV.y)*step(reflectionUV.y,1.);vec4 reflectedSample=mix(texture2D(reflectionSharp,reflectionUV),texture2D(reflectionTexture,reflectionUV),smoothstep(0.,2.8,distanceToBuilding));vec3 softReflection=reflectedSample.rgb/max(reflectedSample.a,.001);valid*=reflectedSample.a;";t?i.fragmentShader=i.fragmentShader.replace("gl_FragColor=vec4(surface,1.);",r+"surface=mix(surface,clamp(softReflection,surface*mix(.32,.65,reflectionTone),surface*mix(1.04,1.95,reflectionTone)),mix(.38,.34,reflectionTone)*proximity*valid*reflectionStrength);gl_FragColor=vec4(surface,1.);"):i.fragmentShader=i.fragmentShader.replace("#include <opaque_fragment>",r+`outgoingLight=mix(outgoingLight,clamp(softReflection,outgoingLight*mix(.32,.65,reflectionTone),outgoingLight*mix(1.04,1.95,reflectionTone)),mix(.38,.34,reflectionTone)*proximity*valid*reflectionStrength);
#include <opaque_fragment>`)},s.customProgramCacheKey=()=>"localized-building-reflection-r18-"+t}function Vc(s,e,t=!1){let n={balanced:[[.37,.435,.52],[.37,.435,.52],[.54,.62,.72]],current:[[.48,.59,.77],[.26,.35,.48],[.66,.94,1.45]],cool:[[.59,.61,.64],[.43,.46,.5],[.72,.74,.77]],neutral:[[.61,.62,.63],[.46,.47,.48],[.72,.73,.74]],warm:[[.64,.62,.59],[.49,.47,.44],[.75,.73,.69]],soft:[[.67,.68,.69],[.53,.54,.55],[.77,.78,.79]]},i=n[s.palette]||n.current,r=new $e({uniforms:{tone:e,outdoor:{value:t?1:0},horizon:s.sky.material.uniforms.bottom,base:{value:new R(...i[0])},centerTone:{value:new R(...i[1])},farTone:{value:new R(...i[2])}},toneMapped:!1,depthWrite:!0,vertexShader:"varying vec3 p;void main(){p=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}",fragmentShader:`uniform float tone;uniform float outdoor;uniform vec3 horizon;uniform vec3 base;uniform vec3 centerTone;uniform vec3 farTone;varying vec3 p;
float grain(vec2 q){return fract(sin(dot(q,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 q){vec2 i=floor(q),f=fract(q);f=f*f*(3.-2.*f);return mix(mix(grain(i),grain(i+vec2(1.,0.)),f.x),mix(grain(i+vec2(0.,1.)),grain(i+vec2(1.)),f.x),f.y);}
void main(){
 float radius=length(p.xz*vec2(.055,.038));float pool=exp(-radius*radius*.8);
 vec3 dark=mix(vec3(.022),vec3(.027),pool);
 dark*=mix(vec3(1.),vec3(.94,1.,1.09),outdoor);
 float center=exp(-dot(vec2(p.x*.10,(p.z+3.)*.08),vec2(p.x*.10,(p.z+3.)*.08))*1.2);
 vec3 light=mix(base,centerTone,center*.68);
 // Broad overhead illumination, with subdued, stable concrete variation.
 vec2 lightOffset=(p.xz-vec2(-4.,-6.))/vec2(7.,13.);
 float overhead=exp(-dot(lightOffset,lightOffset));
 float sideShade=smoothstep(5.,15.,abs(p.x));
 float microVariation=(noise(p.xz*22.)-.5)*.0015+(noise(p.xz*.65)-.5)*.002;
 light*=.975+.035*overhead-.015*sideShade;
 light+=vec3(microVariation);
 float distanceFade=smoothstep(24.,95.,-p.z);
 light=mix(light,farTone,distanceFade);
 vec3 surface=mix(light,dark,tone);float courtyardDistance=max(0.,-p.z);float aerial=1.-exp(-courtyardDistance/32.);surface=mix(surface,horizon,outdoor*aerial);gl_FragColor=vec4(surface,1.);
#include <colorspace_fragment>}`});return Uh(r,s,!0),r}function Nf(){let s=new $e({transparent:!0,depthWrite:!1,depthTest:!0,blending:ha,uniforms:{opacity:{value:.32},roughness:{value:.72}},vertexShader:`varying vec3 ground;varying vec3 viewer;varying vec2 edgeUV;
   void main(){edgeUV=uv;ground=vec3(position.x,0.,2.85-position.y);
    viewer=(inverse(modelMatrix)*vec4(cameraPosition,1.)).xyz;
    viewer=vec3(viewer.x,viewer.z,2.85-viewer.y);
    gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec3 ground;varying vec3 viewer;varying vec2 edgeUV;
   uniform float opacity;uniform float roughness;
   float bounce(vec3 lamp){
    vec3 delta=lamp-ground;float d2=dot(delta,delta);vec3 L=normalize(delta),V=normalize(viewer-ground),N=vec3(0.,1.,0.);
    float nl=max(L.y,0.),nv=max(V.y,.001);
    // Rear-facing lamps cannot illuminate the ground ahead of the bumper.
    float beam=smoothstep(2.05,2.5,ground.z);
    vec3 H=normalize(L+V);float nh=max(H.y,0.),vh=max(dot(V,H),0.);
    float a2=pow(roughness,4.);float den=nh*nh*(a2-1.)+1.;
    float D=a2/(3.14159265*den*den);
    float k=pow(roughness+1.,2.)/8.;
    float G=(nl/(nl*(1.-k)+k))*(nv/(nv*(1.-k)+k));
    float F=.04+.96*pow(1.-vh,5.);
    float spec=D*G*F/max(4.*nl*nv,.001);
    return beam*nl/(d2+.16)*(.24/3.14159265+spec*.2);
   }
   void main(){
    // Two short area sources instead of two point-like circular spots.
    float light=0.;for(int i=0;i<3;i++){float spread=(float(i)-1.)*.13;
     light+=bounce(vec3(-.72+spread,.82,2.3))/3.;light+=bounce(vec3(.72+spread,.82,2.3))/3.;}
    float edge=smoothstep(0.,.12,edgeUV.x)*smoothstep(0.,.12,1.-edgeUV.x)*smoothstep(0.,.12,edgeUV.y)*smoothstep(0.,.12,1.-edgeUV.y);
    gl_FragColor=vec4(vec3(1.,.012,.006)*light*opacity*edge*exp(-ground.x*ground.x*.9)*exp(-max(ground.z-2.5,0.)*1.5),1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
   }`}),e=new Ie(new At(3.8,2),s);return e.rotation.x=-Math.PI/2,e}function Of(s,e,t,n=!1){s.position.set(e.position.x,e.position.y-.002,e.position.z+2.85),s.material.uniforms.opacity.value=t?.46:.045,s.material.uniforms.roughness.value=n?.86:.9}var wx={low:.785,high:.69};function kf(s,e){s.updateMatrixWorld(!0),e.updateMatrixWorld(!0);let t=new Re().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n=new Re,i=new R,r=1/0,a=-1/0,o=1/0,l=-1/0;return s.traverse(c=>{if(!c.isMesh)return;let h=c.geometry.getAttribute("position");if(h){n.multiplyMatrices(t,c.matrixWorld);for(let u=0;u<h.count;u++){i.fromBufferAttribute(h,u).applyMatrix4(n);let d=(i.x+1)/2,p=(1-i.y)/2;r=Math.min(r,d),a=Math.max(a,d),o=Math.min(o,p),l=Math.max(l,p)}}}),{left:r,top:o,width:a-r,height:l-o,bottom:l,bottomMargin:1-l}}function Bf(s,e,t){let n=wx[t],i=kf(s,e),r=e.view,a=r?.enabled?r.offsetX:0,o=r?.enabled?r.offsetY:0;return e.setViewOffset(1920,1080,a,o+(i.bottom-n)*1080,1920,1080),e.updateMatrixWorld(!0),{group:t,targetBottom:n,viewOffset:{x:e.view.offsetX,y:e.view.offsetY},vehicleFrame:kf(s,e)}}function zf(s){let e={value:s.state?.mode==="dark"?1:0};s.parkingTone=e,s.parkingShadow=null,s.parkingGhostMaterials=[],s.parkedVehicles=[],s.plane(2e4,2e4,0,-1e3,-.14,"ground");let t=s.plane(2e4,2e4,0,-1e3,.015,"parkingFloor");t.material=Vc(s,e,!0),t.userData.reflectiveSurface=!0;let n=new Ie(new At(2e3,2e3,64,64),new ts({color:1581355,opacity:.24,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));n.rotation.x=-Math.PI/2,n.position.set(0,.018,-60),n.receiveShadow=!0,n.userData.reflectiveSurface=!0,s.root.add(n),s.parkingShadow=n;let i=new $e({polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8,uniforms:{tone:e,study:{value:s.palette==="current"?0:1}},transparent:!0,depthWrite:!1,vertexShader:"varying vec3 p;varying vec2 v;void main(){v=uv;p=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}",fragmentShader:`uniform float tone;uniform float study;varying vec3 p;varying vec2 v;void main(){if(study<.5){gl_FragColor=vec4(vec3(tone),mix(.17,.025,tone));return;}float distanceFade=exp(-dot(p.xz*vec2(.035,.04),p.xz*vec2(.035,.04)));float sheen=.91+.09*v.y;vec3 dark=vec3(1.);vec3 light=vec3(0.);vec2 q=abs(v-.5)-vec2(.475,.455);float sd=length(max(q,0.))+min(max(q.x,q.y),0.)-.018;float mask=1.-smoothstep(-.002,.003,sd);float edge=1.-smoothstep(0.,.009,abs(sd));float alpha=(mix(.23,.025,tone)*(.72+.28*distanceFade))*mask;float original=mix(.17,.025,tone)*(.72+.28*distanceFade);gl_FragColor=vec4(mix(light,dark,tone),mix(original,alpha,study));
#include <tonemapping_fragment>
#include <colorspace_fragment>}`});s.parkingBays=[],s.parkingColumns=[],s.pedestrianPassages=[{x:-9.4,z:-1,width:1.5,depth:42,clearWidth:1.5},{x:9.4,z:-1,width:1.5,depth:42,clearWidth:1.5}];for(let o of[-1,1])for(let l of Array.from({length:11},(c,h)=>11-h*3.3)){let c=o*6,h=4.7,u=2.8,d=new Ie(new At(h,u),i);d.rotation.x=-Math.PI/2,d.position.set(c,.028,l),s.root.add(d),s.parkingBays.push({x:c,z:l,width:h,depth:u,angle:0});let p=s.box(.16,.1,1.65,o*8.02,.07,l,"curb",.035);p.material=new jt({color:"#4a4b49",roughness:.85}),p.castShadow=!1;for(let m of[-.48,.48]){let b=s.box(.17,.012,.25,o*8.02,.128,l+m,"yellow",.01);b.castShadow=!1}}for(let o of[-1,1])for(let[l,c]of[12,-3,-18].entries())s.building(o*(15.15+(l===1?1.2:0)),c,10,11.5,[8.6,11.2,7.4][l]);for(let[o,l,c,h,u]of[[-15,-42,12,9,5.2],[9,-48,13,9,5.8]])s.building(o,l,c,h,u);let r=s.box(16.7,.18,3,0,.09,-25.8,"pavement",.1);r.castShadow=!1;let a=s.box(16.3,.32,2.6,0,.32,-25.8,"grass",.16);a.castShadow=!1;for(let o of[-1,1]){let l=o*10.8,c=-10.5,h=s.plane(3.2,3.2,l,c,.03,"grass");s.lawns.push(h),s.tree(l,c,o<0?1.32:1.4);let u=s.vegetation.children.at(-1);u.scale.x*=.82,u.scale.z*=.82}s.parkingReplica={method:"ground-level residential parking; bays 1.5m from building faces; no road junction",occupiedBays:0,noNavigationGraphics:!0,buildingBayGap:1.8,headGap:.3,planterBounds:{left:-8.35,right:8.35,center:0},wheelStops:22,wheelStopFromBayEnd:.33,roadBranches:0}}function Hf(s,e){let{root:t}=s,n={value:s.state?.mode==="dark"?1:0};s.parkingTone=n;let i=Vc(s,n),r=new Ie(new At(1e3,1e3),i);r.rotation.x=-Math.PI/2,r.position.y=.014,t.add(r),r.userData.reflectiveSurface=!0;let a=new Ie(new At(1e3,1e3),new ts({color:2371645,opacity:s.state?.mode==="dark"?0:.24}));a.rotation.x=-Math.PI/2,a.position.y=.018,a.receiveShadow=!0,t.add(a),s.parkingShadow=a;let o=new $e({polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8,uniforms:{tone:n,study:{value:s.palette==="current"?0:1}},transparent:!0,depthWrite:!1,vertexShader:"varying vec3 p;varying vec2 v;void main(){v=uv;p=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}",fragmentShader:`uniform float tone;uniform float study;varying vec3 p;varying vec2 v;void main(){float distanceFade=exp(-dot(p.xz*vec2(.035,.04),p.xz*vec2(.035,.04)));float sheen=.91+.09*v.y;vec3 dark=vec3(1.);vec3 light=vec3(0.);vec2 q=abs(v-.5)-vec2(.475,.455);float sd=length(max(q,0.))+min(max(q.x,q.y),0.)-.018;float mask=1.-smoothstep(-.002,.003,sd);float edge=1.-smoothstep(0.,.009,abs(sd));float alpha=(mix(.23,.025,tone)*(.72+.28*distanceFade))*mask;float original=mix(.17,.025,tone)*(.72+.28*distanceFade);gl_FragColor=vec4(mix(light,dark,tone),mix(original,alpha,study));
#include <tonemapping_fragment>
#include <colorspace_fragment>}`});s.parkingBays=[],s.parkingColumns=[],s.pedestrianPassages=[],s.parkedVehicles=[];let l=[10.8,7.2,3.6,0,-3.6,-7.2,-10.8,-14.4,-18],c=4.9,h=2.8,u=5.9;for(let p of[-1,1])for(let m of l){let b=new Ie(new At(c,h),o);b.rotation.x=-Math.PI/2,b.position.set(p*u,.028,m),t.add(b),s.parkingBays.push({x:p*u,z:m,width:c,depth:h,angle:0})}for(let p of[-1,1])for(let m of l){let b=s.box(.16,.1,1.65,p*8.02,.07,m,"curb",.035);b.material=new jt({color:"#4a4b49",roughness:.85}),b.castShadow=!1;for(let g of[-.48,.48]){let f=s.box(.17,.012,.25,p*8.02,.128,m+g,"yellow",.01);f.castShadow=!1}}s.parkingGhostMaterials=[];let d=new $e({uniforms:{tone:n},transparent:!0,depthWrite:!1,vertexShader:"varying vec3 p;varying vec3 n;void main(){p=(modelMatrix*vec4(position,1.)).xyz;n=normal;gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}",fragmentShader:`uniform float tone;varying vec3 p;varying vec3 n;void main(){float top=1.-smoothstep(2.5,3.2,p.y);float far=1.-smoothstep(14.,35.,-p.z);float face=.84+.16*max(n.x,0.);vec3 c=mix(vec3(.27,.29,.31),vec3(.10),tone)*face;gl_FragColor=vec4(c,top*far*.8);
#include <colorspace_fragment>
}`});for(let p of[-1,1])for(let m of[-1.8,-12.6]){let b=new Ie(new an(.68,3.2,.68),d);b.position.set(p*7.45,1.6,m),t.add(b),s.parkingColumns.push(b)}s.parkingReplica={references:["6b769787","892a70a1","f0d98605"],method:"one shared aisle environment for all camera views",occupiedBays:0,bayPitch:3.6,bayGap:.8,columnSection:.68,columnHeight:3.2,wheelStopFromBayEnd:.33,columnSetbackFromAisle:4,noNavigationGraphics:!0}}function Fh(s){let e=new Set,t=new Set,n=new Set;s.traverse(i=>{i.geometry&&e.add(i.geometry);for(let r of Array.isArray(i.material)?i.material:i.material?[i.material]:[]){t.add(r);for(let a of Object.values(r))a?.isTexture&&n.add(a)}});for(let i of n)i.dispose();for(let i of t)i.dispose();for(let i of e)i.dispose()}function Nh(s){let e=new It,t=(n,i,r,a,o,l=0)=>{let c=new $e({transparent:!0,depthWrite:!1,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4,uniforms:{opacity:{value:o},body:{value:l}},vertexShader:"varying vec2 v;void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 v;uniform float opacity;uniform float body;void main(){vec2 p=(v-.5)*2.;float r=pow(pow(abs(p.x),4.)+pow(abs(p.y),4.),.25);float a=mix(exp(-dot(p,p)*3.8),1.-smoothstep(.5,1.,r),body)*opacity;gl_FragColor=vec4(.008,.010,.014,a);}"}),h=new Ie(new At(r,a),c);h.rotation.x=-Math.PI/2,h.position.set(n,.035,i),e.add(h)};t(0,0,2.5,5.1,.52,1);for(let n of s.userData.vehicleSpec.wheels){let i=(n.min[0]+n.max[0])/2,r=(n.min[2]+n.max[2])/2;t(i,r,.56,.8,.88)}return e}var or={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var vn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ex=new ui(-1,1,1,-1,0,1),Oh=class extends mt{constructor(){super(),this.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ke([0,2,0,0,2,0],2))}},Tx=new Oh,jn=class{constructor(e){this._mesh=new Ie(Tx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ex)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Di=class extends vn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof $e?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=cn.clone(e.uniforms),this.material=new $e({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new jn(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var _a=class extends vn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Gc=class extends vn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Wc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new re);this._width=n.width,this._height=n.height,t=new Tt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Vt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Di(or),this.copyPass.material.blending=Pt,this.clock=new la}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}_a!==void 0&&(a instanceof _a?n=!0:a instanceof Gc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var qc=class extends vn{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new me}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var ya={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new re},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Re},cameraProjectionMatrixInverse:{value:new Re},cameraWorldMatrix:{value:new Re},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new R(-1,-1,-1)},sceneBoxMax:{value:new R(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ma={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Xc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Vf(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=Ax(e),n=t.length,i=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new R(Math.cos(l),Math.sin(l),0).normalize();i[a*4]=(c.x*.5+.5)*255,i[a*4+1]=(c.y*.5+.5)*255,i[a*4+2]=127,i[a*4+3]=255}let r=new Nn(i,e,e);return r.wrapS=nn,r.wrapT=nn,r.needsUpdate=!0,r}function Ax(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=a++;r++,i--}return n}var Sa={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:kh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new re},cameraProjectionMatrixInverse:{value:new Re},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function kh(s,e,t){let n=Rx(s,e,t),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let a=n[r];i+=`vec3(${a.x}, ${a.y}, ${a.z})${r<s-1?",":")"}`}return i}function Rx(s,e,t){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*e*i/s,a=Math.pow(i/(s-1),t);n.push(new R(Math.cos(r),Math.sin(r),a))}return n}var jc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,p=c-u,m=e-d,b=t-p,g,f;m>b?(g=1,f=0):(g=0,f=1);let _=m-g+h,x=b-f+h,v=m-1+2*h,w=b-1+2*h,T=l&255,C=c&255,A=this.perm[T+this.perm[C]]%12,M=this.perm[T+g+this.perm[C+f]]%12,y=this.perm[T+1+this.perm[C+1]]%12,I=.5-m*m-b*b;I<0?n=0:(I*=I,n=I*I*this._dot(this.grad3[A],m,b));let L=.5-_*_-x*x;L<0?i=0:(L*=L,i=L*L*this._dot(this.grad3[M],_,x));let U=.5-v*v-w*w;return U<0?r=0:(U*=U,r=U*U*this._dot(this.grad3[y],v,w)),70*(n+i+r)}noise3d(e,t,n){let i,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),d=Math.floor(n+c),p=1/6,m=(h+u+d)*p,b=h-m,g=u-m,f=d-m,_=e-b,x=t-g,v=n-f,w,T,C,A,M,y;_>=x?x>=v?(w=1,T=0,C=0,A=1,M=1,y=0):_>=v?(w=1,T=0,C=0,A=1,M=0,y=1):(w=0,T=0,C=1,A=1,M=0,y=1):x<v?(w=0,T=0,C=1,A=0,M=1,y=1):_<v?(w=0,T=1,C=0,A=0,M=1,y=1):(w=0,T=1,C=0,A=1,M=1,y=0);let I=_-w+p,L=x-T+p,U=v-C+p,B=_-A+2*p,W=x-M+2*p,V=v-y+2*p,K=_-1+3*p,z=x-1+3*p,$=v-1+3*p,oe=h&255,ue=u&255,Ee=d&255,Oe=this.perm[oe+this.perm[ue+this.perm[Ee]]]%12,tt=this.perm[oe+w+this.perm[ue+T+this.perm[Ee+C]]]%12,ke=this.perm[oe+A+this.perm[ue+M+this.perm[Ee+y]]]%12,j=this.perm[oe+1+this.perm[ue+1+this.perm[Ee+1]]]%12,Y=.6-_*_-x*x-v*v;Y<0?i=0:(Y*=Y,i=Y*Y*this._dot3(this.grad3[Oe],_,x,v));let le=.6-I*I-L*L-U*U;le<0?r=0:(le*=le,r=le*le*this._dot3(this.grad3[tt],I,L,U));let Se=.6-B*B-W*W-V*V;Se<0?a=0:(Se*=Se,a=Se*Se*this._dot3(this.grad3[ke],B,W,V));let pe=.6-K*K-z*z-$*$;return pe<0?o=0:(pe*=pe,o=pe*pe*this._dot3(this.grad3[j],K,z,$)),32*(i+r+a+o)}noise4d(e,t,n,i){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,d,p,m,b=(e+t+n+i)*l,g=Math.floor(e+b),f=Math.floor(t+b),_=Math.floor(n+b),x=Math.floor(i+b),v=(g+f+_+x)*c,w=g-v,T=f-v,C=_-v,A=x-v,M=e-w,y=t-T,I=n-C,L=i-A,U=M>y?32:0,B=M>I?16:0,W=y>I?8:0,V=M>L?4:0,K=y>L?2:0,z=I>L?1:0,$=U+B+W+V+K+z,oe=a[$][0]>=3?1:0,ue=a[$][1]>=3?1:0,Ee=a[$][2]>=3?1:0,Oe=a[$][3]>=3?1:0,tt=a[$][0]>=2?1:0,ke=a[$][1]>=2?1:0,j=a[$][2]>=2?1:0,Y=a[$][3]>=2?1:0,le=a[$][0]>=1?1:0,Se=a[$][1]>=1?1:0,pe=a[$][2]>=1?1:0,Ge=a[$][3]>=1?1:0,yt=M-oe+c,D=y-ue+c,Je=I-Ee+c,Ue=L-Oe+c,Ce=M-tt+2*c,ge=y-ke+2*c,it=I-j+2*c,be=L-Y+2*c,Ne=M-le+3*c,lt=y-Se+3*c,st=I-pe+3*c,P=L-Ge+3*c,S=M-1+4*c,k=y-1+4*c,X=I-1+4*c,J=L-1+4*c,q=g&255,ye=f&255,ie=_&255,xe=x&255,Te=o[q+o[ye+o[ie+o[xe]]]]%32,te=o[q+oe+o[ye+ue+o[ie+Ee+o[xe+Oe]]]]%32,de=o[q+tt+o[ye+ke+o[ie+j+o[xe+Y]]]]%32,Le=o[q+le+o[ye+Se+o[ie+pe+o[xe+Ge]]]]%32,Ae=o[q+1+o[ye+1+o[ie+1+o[xe+1]]]]%32,ce=.6-M*M-y*y-I*I-L*L;ce<0?h=0:(ce*=ce,h=ce*ce*this._dot4(r[Te],M,y,I,L));let Be=.6-yt*yt-D*D-Je*Je-Ue*Ue;Be<0?u=0:(Be*=Be,u=Be*Be*this._dot4(r[te],yt,D,Je,Ue));let F=.6-Ce*Ce-ge*ge-it*it-be*be;F<0?d=0:(F*=F,d=F*F*this._dot4(r[de],Ce,ge,it,be));let Q=.6-Ne*Ne-lt*lt-st*st-P*P;Q<0?p=0:(Q*=Q,p=Q*Q*this._dot4(r[Le],Ne,lt,st,P));let se=.6-S*S-k*k-X*X-J*J;return se<0?m=0:(se*=se,m=se*se*this._dot4(r[Ae],S,k,X,J)),27*(h+u+d+p+m)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}};var wa=class s extends vn{constructor(e,t,n=512,i=512,r,a,o){super(),this.width=n,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Vf(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Tt(this.width,this.height,{type:Vt}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new $e({defines:Object.assign({},ya.defines),uniforms:cn.clone(ya.uniforms),vertexShader:ya.vertexShader,fragmentShader:ya.fragmentShader,blending:Pt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ea,this.normalMaterial.blending=Pt,this.pdMaterial=new $e({defines:Object.assign({},Sa.defines),uniforms:cn.clone(Sa.uniforms),vertexShader:Sa.vertexShader,fragmentShader:Sa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new $e({defines:Object.assign({},Ma.defines),uniforms:cn.clone(Ma.uniforms),vertexShader:Ma.vertexShader,fragmentShader:Ma.fragmentShader,blending:Pt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new $e({uniforms:cn.clone(or.uniforms),vertexShader:or.vertexShader,fragmentShader:or.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:da,blendDst:ss,blendEquation:pn,blendSrcAlpha:ua,blendDstAlpha:ss,blendEquationAlpha:pn}),this.blendMaterial=new $e({uniforms:cn.clone(Xc.uniforms),vertexShader:Xc.vertexShader,fragmentShader:Xc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ko,blendSrc:da,blendDst:ss,blendEquation:pn,blendSrcAlpha:ua,blendDstAlpha:ss,blendEquationAlpha:pn}),this._fsQuad=new jn(null),this._originalClearColor=new me,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new $i,this.depthTexture.format=Ii,this.depthTexture.type=Pi,this.normalRenderTarget=new Tt(this.width,this.height,{minFilter:Ct,magFilter:Ct,type:Vt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=kh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Pt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Pt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Pt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Pt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Pt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,i,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,i,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new jc,n=e*e*4,i=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;i[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,i[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Nn(i,e,e,en,gn);return r.wrapS=nn,r.wrapT=nn,r.needsUpdate=!0,r}};wa.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Ea={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Yc=class extends vn{constructor(){super(),this.uniforms=cn.clone(Ea.uniforms),this.material=new Qr({name:Ea.name,uniforms:this.uniforms,vertexShader:Ea.vertexShader,fragmentShader:Ea.fragmentShader}),this._fsQuad=new jn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Xo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Yo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===$s?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Zo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Jo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ko&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Gf={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new re(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`};var Kc=class extends Di{constructor(){super(Gf)}setSize(e,t){this.material.uniforms.resolution.value.set(1/e,1/t)}};var Ta=class s extends Ie{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new St;let n=this,i=t.color!==void 0?new me(t.color):new me(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,l=t.shader||s.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new $t,u=new R,d=new R,p=new R,m=new Re,b=new R(0,0,-1),g=new Ye,f=new R,_=new R,x=new Ye,v=new Re,w=this.camera,T=new Tt(r,a,{samples:c,type:Vt}),C=new $e({name:l.name!==void 0?l.name:"unspecified",uniforms:cn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});C.uniforms.tDiffuse.value=T.texture,C.uniforms.color.value=i,C.uniforms.textureMatrix.value=v,this.material=C,this.onBeforeRender=function(A,M,y){if(d.setFromMatrixPosition(n.matrixWorld),p.setFromMatrixPosition(y.matrixWorld),m.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(m),f.subVectors(d,p),f.dot(u)>0===!0&&this.forceUpdate===!1)return;f.reflect(u).negate(),f.add(d),m.extractRotation(y.matrixWorld),b.set(0,0,-1),b.applyMatrix4(m),b.add(p),_.subVectors(d,b),_.reflect(u).negate(),_.add(d),w.position.copy(f),w.up.set(0,1,0),w.up.applyMatrix4(m),w.up.reflect(u),w.lookAt(_),w.far=y.far,w.updateMatrixWorld(),w.projectionMatrix.copy(y.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(w.projectionMatrix),v.multiply(w.matrixWorldInverse),v.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,d),h.applyMatrix4(w.matrixWorldInverse),g.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let L=w.projectionMatrix;x.x=(Math.sign(g.x)+L.elements[8])/L.elements[0],x.y=(Math.sign(g.y)+L.elements[9])/L.elements[5],x.z=-1,x.w=(1+L.elements[10])/L.elements[14],g.multiplyScalar(2/g.dot(x)),L.elements[2]=g.x,L.elements[6]=g.y,L.elements[10]=g.z+1-o,L.elements[14]=g.w,n.visible=!1;let U=A.getRenderTarget(),B=A.xr.enabled,W=A.shadowMap.autoUpdate;A.xr.enabled=!1,A.shadowMap.autoUpdate=!1,A.setRenderTarget(T),A.state.buffers.depth.setMask(!0),A.autoClear===!1&&A.clear(),A.render(M,w),A.xr.enabled=B,A.shadowMap.autoUpdate=W,A.setRenderTarget(U);let V=y.viewport;V!==void 0&&A.state.viewport(V),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return T},this.dispose=function(){T.dispose(),n.material.dispose()}}};Ta.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function qf(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new mt,c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let d=0;d<s.length;++d){let p=s[d].index;for(let m=0;m<p.count;++m)u.push(p.getX(m)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Wf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let b=0;b<a[h].length;++b)p.push(a[h][b][d]);let m=Wf(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Wf(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Et(a,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,p=h.count;d<p;d++)for(let m=0;m<t;m++){let b=h.getComponent(d,m);o.setComponent(d+u,m,b)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Bh(s,e){if(e===lh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===tr||e===va){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===tr)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Aa=new R;function Tn(s,e,t,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;Aa.copy(e),Aa[n]=0,Aa.normalize();let c=.5*a/(a+o),h=1-Aa.angleTo(s)/l;return Math.sign(Aa[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Ra=class s extends an{constructor(e=1,t=1,n=1,i=2,r=.1){let a=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new R,c=new R,h=new R(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,m=u.length/6,b=new R,g=.5/a;for(let f=0,_=0;f<u.length;f+=3,_+=2)switch(l.fromArray(u,f),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[f+0]=h.x*Math.sign(l.x)+c.x*r,u[f+1]=h.y*Math.sign(l.y)+c.y*r,u[f+2]=h.z*Math.sign(l.z)+c.z*r,d[f+0]=c.x,d[f+1]=c.y,d[f+2]=c.z,Math.floor(f/m)){case 0:b.set(1,0,0),p[_+0]=Tn(b,c,"z","y",r,n),p[_+1]=1-Tn(b,c,"y","z",r,t);break;case 1:b.set(-1,0,0),p[_+0]=1-Tn(b,c,"z","y",r,n),p[_+1]=1-Tn(b,c,"y","z",r,t);break;case 2:b.set(0,1,0),p[_+0]=1-Tn(b,c,"x","z",r,e),p[_+1]=Tn(b,c,"z","x",r,n);break;case 3:b.set(0,-1,0),p[_+0]=1-Tn(b,c,"x","z",r,e),p[_+1]=1-Tn(b,c,"z","x",r,n);break;case 4:b.set(0,0,1),p[_+0]=1-Tn(b,c,"x","y",r,e),p[_+1]=1-Tn(b,c,"y","x",r,t);break;case 5:b.set(0,0,-1),p[_+0]=Tn(b,c,"x","y",r,e),p[_+1]=1-Tn(b,c,"y","x",r,t);break}}static fromJSON(e){return new s(e.width,e.height,e.depth,e.segments,e.radius)}};function Xf(){let s=new Di({name:"Vehicle detail",uniforms:{tDiffuse:{value:null},bounds:{value:new Ye},amount:{value:.34},texel:{value:new re(.0005208333333333333,.000925925925925926)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform vec4 bounds;uniform vec2 texel;uniform float amount;varying vec2 vUv;
 void main(){vec4 base=texture2D(tDiffuse,vUv);vec3 a=texture2D(tDiffuse,vUv+vec2(texel.x,0.)).rgb,b=texture2D(tDiffuse,vUv-vec2(texel.x,0.)).rgb,c=texture2D(tDiffuse,vUv+vec2(0.,texel.y)).rgb,d=texture2D(tDiffuse,vUv-vec2(0.,texel.y)).rgb;
 vec2 p=vec2(vUv.x,1.-vUv.y);vec2 edge=min(p-bounds.xy,bounds.zw-p);float mask=smoothstep(0.,.003,min(edge.x,edge.y));vec3 lo=min(base.rgb,min(min(a,b),min(c,d))),hi=max(base.rgb,max(max(a,b),max(c,d)));vec3 detail=clamp(base.rgb+(base.rgb-(a+b+c+d)*.25)*amount,lo,hi);gl_FragColor=vec4(mix(base.rgb,detail,mask),base.a);}`});return s.setVehicleFrame=(e,t)=>{s.enabled=t,s.uniforms.bounds.value.set(e.left,e.top,e.left+e.width,e.bottom)},s}var Cx=[["01","Highway",!1],["02","City avenue",!0],["03","Elevated road",!0],["04","Local street",!0],["05","Crossroads",!0],["06","Exit ramp",!1],["07","Merge ramp",!1],["08","T-junction",!0],["09","Residential road",!0],["12","Lane closure",!0],["13","Waterfront road",!0],["10","Parking aisle",!1],["14","Overhead parking",!1],["15","Angled parking",!1],["17","Outdoor parking",!0],["18","Outdoor raised",!0],["19","Outdoor overhead",!0],["16","Parallel parking",!1],["11","Covered passage",!0]].map(([s,e,t])=>({id:s,name:e,trees:t,group:["10","14","15","16","11"].includes(s)?"closed":"open"})),fs=["10","14","15","16","17","18","19"],zh=8.5,Zc=class{constructor(e,t,{palette:n="balanced",alpha:i=!1,width:r=1920,height:a=1080}={}){this.palette=n,this.width=r,this.height=a,this.sceneCache=new Map,this.environmentGrowth={buildings:{value:1,velocity:0},trees:{value:0,velocity:0}},this.renderer=new zc({canvas:e,antialias:!0,preserveDrawingBuffer:!0,alpha:i}),this.renderer.setPixelRatio(1),this.renderer.setSize(r,a,!1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=wn,this.renderer.shadowMap.autoUpdate=!1,this.renderer.outputColorSpace=wt,this.renderer.toneMapping=$s,this.renderer.toneMappingExposure=1,this.scene=new Hs,this.camera=new St(38,16/9,1,2e3),this.mat={},this.colors={road:["#545e6d","#303031"],ground:["#b4c3d6","#373a3e"],pavement:["#d1dbee","#3c4045"],curb:["#d6e1ef","#5a6068"],building:["#d3d7dd","#817d7d"],glass:["#a6bed0","#606a72"],white:["#d6e0e9","#a7adb2"],yellow:["#bbaa6f","#99864e"],grass:["#809c68","#3e4d3d"],leaf:["#6f914f","#4a593e"],leaf2:["#84a25c","#526047"],trunk:["#776956","#4b463e"],cone:["#ff5109","#ff590c"],water:["#7695ae","#304146"],parkingFloor:["#7c8b9e","#17181b"],parkingBay:["#aebdce","#393c41"],parkingEdge:["#98a9bc","#34383e"]};for(let[m,b]of Object.entries(this.colors))this.mat[m]=new jt({color:b[0],roughness:m==="glass"?.35:.86,metalness:m==="glass"?.1:0});for(let m of["leaf","leaf2","trunk"])this.mat[m].flatShading=!0;this.mat.road.roughness=.54,this.mat.road.metalness=.08,this.mat.building.roughness=.36,this.mat.glass.dispose(),this.mat.glass=new zt({color:this.colors.glass[0],roughness:.3,metalness:0,clearcoat:.72,clearcoatRoughness:.25,envMapIntensity:.8}),this.mat.glass.onBeforeCompile=m=>{m.vertexShader=`varying vec3 vAcrylicPosition;
`+m.vertexShader,m.vertexShader=m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vAcrylicPosition=position;`),m.fragmentShader=`varying vec3 vAcrylicPosition;
`+m.fragmentShader,m.fragmentShader=m.fragmentShader.replace("#include <opaque_fragment>",`float sheen=smoothstep(-.8,.8,vAcrylicPosition.y);outgoingLight*=.86+.18*sheen;
#include <opaque_fragment>`)},this.mat.building.dispose(),this.mat.building=new zt({color:this.colors.building[0],roughness:.62,metalness:0,clearcoat:.025,clearcoatRoughness:.6,envMapIntensity:.55,specularIntensity:.24}),this.buildingTint={value:1},this.mat.building.onBeforeCompile=m=>{m.uniforms.buildingTint=this.buildingTint,m.vertexShader=`varying float vBuildingHeight;varying vec3 vBuildingNormal;
`+m.vertexShader,m.vertexShader=m.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vBuildingHeight=(modelMatrix*vec4(transformed,1.0)).y;vBuildingNormal=normalize(mat3(modelMatrix)*normal);`),m.fragmentShader=`uniform float buildingTint;varying float vBuildingHeight;varying vec3 vBuildingNormal;
`+m.fragmentShader,m.fragmentShader=m.fragmentShader.replace("#include <opaque_fragment>",`float shaded=1.-smoothstep(-.3,.7,dot(normalize(vBuildingNormal),normalize(vec3(-38.,55.,48.))));vec3 lightFace=mix(vec3(.94,.97,1.0),vec3(.90,.93,.98),shaded);vec3 darkFace=mix(vec3(.78,.85,.92),vec3(.67,.72,.77),shaded);outgoingLight*=mix(darkFace,lightFace,buildingTint);outgoingLight*=.90+.10*(1.-exp(-max(0.,vBuildingHeight)/4.));
#include <opaque_fragment>`)},this.mat.white.polygonOffset=!0,this.mat.white.polygonOffsetFactor=-2,this.mat.white.polygonOffsetUnits=-2,this.mat.yellow.polygonOffset=!0,this.mat.yellow.polygonOffsetFactor=-2,this.mat.yellow.polygonOffsetUnits=-2,this.mat.grass.transparent=!0,this.mat.grass.depthWrite=!1,this.renderer.localClippingEnabled=!0,this.buildingRevealPlane=new $t(new R(0,1,0),.14),this.treeRevealPlane=new $t(new R(0,1,0),.14);for(let m of["leaf","leaf2","trunk"])this.mat[m].clippingPlanes=[this.treeRevealPlane],this.mat[m].clipShadows=!0;this.hemi=new sa("#d9eaff","#8b959d",2.15),this.scene.add(this.hemi),this.sun=new Ri("#fff5e8",3.2),this.sun.position.set(-38,55,48),this.sun.castShadow=!0,Object.assign(this.sun.shadow.camera,{left:-48,right:48,top:48,bottom:-48,near:1,far:180}),this.sun.shadow.mapSize.set(r<1920?2048:4096,r<1920?2048:4096),this.sun.shadow.bias=4e-5,this.sun.shadow.normalBias=.015,this.sun.shadow.radius=3,this.sun.shadow.intensity=.42,this.sun.shadow.blurSamples=16,this.sun.target.position.set(0,0,-14),this.scene.add(this.sun,this.sun.target),this.fill=new Ri("#aacded",.7),this.fill.position.set(24,16,-12),this.scene.add(this.fill);let o=new Hs;o.background=new me("#8297aa");let l=(m,b,g,f,_,x,v)=>{let w=new Ie(new At(g,f),new Xt({color:new me(m).multiplyScalar(b),side:Ot}));w.position.set(_,x,v),w.lookAt(0,0,0),o.add(w)};l("#ffffff",3,30,20,-18,22,8),l("#d6e5f1",1.8,30,12,20,13,-5),l("#ffffff",2,24,16,0,30,0);let c=new rr(this.renderer);this.env=c.fromScene(o,.02).texture,this.scene.environment=this.env,this.scene.environmentIntensity=.38,c.dispose(),this.mat.parkingFloor.roughness=.32,this.mat.parkingFloor.metalness=.08,this.mat.parkingBay.roughness=.46,this.mat.parkingBay.metalness=.08,this.mat.parkingBay.polygonOffset=!0,this.mat.parkingBay.polygonOffsetFactor=-4,this.mat.parkingBay.polygonOffsetUnits=-4,this.mat.parkingFloor.onBeforeCompile=m=>{m.vertexShader=`varying vec3 parkingPosition;
`+m.vertexShader,m.vertexShader=m.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
parkingPosition=(modelMatrix*vec4(transformed,1.0)).xyz;`),m.fragmentShader=`varying vec3 parkingPosition;
`+m.fragmentShader,m.fragmentShader=m.fragmentShader.replace("#include <opaque_fragment>",`float edge=smoothstep(16.,58.,length(parkingPosition.xz*vec2(1.0,.72)));outgoingLight*=mix(1.08,.32,edge);outgoingLight+=vec3(.014,.018,.025)*exp(-dot(parkingPosition.xz*vec2(.12,.08),parkingPosition.xz*vec2(.12,.08)));
#include <opaque_fragment>`)},this.sky=new Ie(new $r(1e3,32,16),new $e({side:Ht,depthWrite:!1,uniforms:{range:{value:.12},top:{value:new me("#72afe0")},bottom:{value:new me("#c4ddec")}},vertexShader:"varying vec3 v;void main(){v=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 v;uniform vec3 top;uniform vec3 bottom;uniform float range;void main(){float t=smoothstep(0.,range,normalize(v).y);gl_FragColor=vec4(mix(bottom,top,t),1.0);#include <colorspace_fragment> }".replace(";#include",`;
#include`).replace("fragment> }",`fragment>
}`)})),this.tailReflection=Nf(),this.scene.add(this.tailReflection),this.scene.add(this.sky),this.scene.fog=new Lr("#c9dbea",85,280),this.car=t,this.scene.add(this.car),this.egoContact=Nh(this.car),this.scene.add(this.egoContact),this.current=null;let h=new Tt(r,a,{type:Vt,samples:4});this.composer=new Wc(this.renderer,h),this.composer.addPass(new qc(this.scene,this.camera)),this.ao=new wa(this.scene,this.camera,r,a,{},{radius:1.2,thickness:1.5,distanceExponent:1,scale:.85,samples:16,screenSpaceRadius:!1},{radius:5,lumaPhi:8,depthPhi:2,normalPhi:3}),this.ao.blendIntensity=.8,this.composer.addPass(this.ao),this.composer.addPass(new Yc),this.edgeAA=new Kc,this.edgeAA.setSize(r,a),this.composer.addPass(this.edgeAA),this.vehicleDetail=Xf(),this.vehicleDetail.uniforms.amount.value=0,this.vehicleDetail.uniforms.texel.value.set(1/r,1/a),this.composer.addPass(this.vehicleDetail),this.mirror=new Ta(new At(1,1),{textureWidth:r,textureHeight:a,multisample:2}),this.mirror.rotation.x=-Math.PI/2,this.reflectionSharp={value:this.mirror.getRenderTarget().texture},this.reflectionMatrix={value:new Re},this.waterReflectionMatrix={value:new Re},this.buildingFootprints={value:Array.from({length:32},()=>new Ye)},this.buildingCount={value:0},this.blurTargets=[0,1].map(()=>new Tt(r,a,{type:Vt})),this.blurMaterial=new $e({depthTest:!1,depthWrite:!1,uniforms:{source:{value:null},direction:{value:new re}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"uniform sampler2D source;uniform vec2 direction;varying vec2 vUv;void main(){vec4 c=texture2D(source,vUv)*.227027; c+=(texture2D(source,vUv+direction*1.384615)+texture2D(source,vUv-direction*1.384615))*.316216;c+=(texture2D(source,vUv+direction*3.230769)+texture2D(source,vUv-direction*3.230769))*.070270;gl_FragColor=c;}"}),this.blurQuad=new jn(this.blurMaterial),this.reflectionTexture={value:this.blurTargets[1].texture},this.waterReflectionTarget=new Tt(r,a,{type:Vt}),this.waterReflectionTexture={value:this.waterReflectionTarget.texture};for(let m of["water"]){let b=this.mat[m],g=m==="water"?.43:.025,f=b.onBeforeCompile;b.onBeforeCompile=_=>{f.call(b,_),_.uniforms.reflectionMatrix=this.waterReflectionMatrix,_.uniforms.reflectionTexture=this.waterReflectionTexture,_.vertexShader=`uniform mat4 reflectionMatrix;varying vec4 vReflection;
`+_.vertexShader,_.vertexShader=_.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vReflection=reflectionMatrix*modelMatrix*vec4(transformed,1.0);`),_.fragmentShader=`uniform sampler2D reflectionTexture;varying vec4 vReflection;
`+_.fragmentShader,_.fragmentShader=_.fragmentShader.replace("#include <opaque_fragment>",`vec2 ru=vReflection.xy/vReflection.w;vec3 reflected=texture2D(reflectionTexture,ru).rgb;outgoingLight=mix(outgoingLight,reflected,${g.toFixed(3)});
#include <opaque_fragment>`)},b.customProgramCacheKey=()=>m+"-reflection"}this.environmentTone={value:0},this.darkAerialPerspective={value:0},this.mat.ground.onBeforeCompile=m=>{m.uniforms.environmentTone=this.environmentTone,m.vertexShader=`varying vec3 ambientGroundPosition;
`+m.vertexShader,m.vertexShader=m.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
ambientGroundPosition=(modelMatrix*vec4(transformed,1.)).xyz;`),m.fragmentShader=`uniform float environmentTone;varying vec3 ambientGroundPosition;
`+m.fragmentShader,m.fragmentShader=m.fragmentShader.replace("#include <opaque_fragment>",`vec2 ambientOffset=(ambientGroundPosition.xz-vec2(-18.,-22.))/vec2(40.,65.);float ambientPool=exp(-dot(ambientOffset,ambientOffset));outgoingLight*=.86+.20*ambientPool;float groundLuma=dot(outgoingLight,vec3(.2126,.7152,.0722));outgoingLight=mix(outgoingLight,groundLuma*vec3(.94,1.,1.09),environmentTone);
#include <opaque_fragment>`)};for(let m of["road","ground","pavement","parkingFloor"])Uh(this.mat[m],this),this.mat[m].customProgramCacheKey=()=>m+"-localized-reflection-r15";for(let m of Object.values(this.mat)){let b=m.onBeforeCompile;m.onBeforeCompile=g=>{b.call(m,g),g.uniforms.darkAerialPerspective=this.darkAerialPerspective,g.fragmentShader=`uniform float darkAerialPerspective;
`+g.fragmentShader,g.fragmentShader=g.fragmentShader.replace("#include <fog_fragment>",`#ifdef USE_FOG
    float t=clamp((vFogDepth-${m===this.mat.ground?"45.":m===this.mat.water?"65.":"105."})/${m===this.mat.ground?"180.":m===this.mat.water?"125.":"140."},0.,1.);
    // In dark scenes a shared distance curve joins sky and ground gradually.
    if(darkAerialPerspective>.5)t=clamp((vFogDepth-65.)/235.,0.,1.);
    float aerial=t*t*t*(t*(t*6.-15.)+10.);
    float fogFactor=fogNear>10000.?0.:aerial;
    gl_FragColor.rgb=mix(gl_FragColor.rgb,fogColor,fogFactor);
    #endif`)}}let u=this.mat.building;this.mat.environmentBuilding=u.clone(),this.mat.environmentBuilding.onBeforeCompile=u.onBeforeCompile,this.mat.environmentBuilding.clippingPlanes=[this.buildingRevealPlane];for(let m of["white","yellow"]){let b=this.mat[m],g=b.clone();g.onBeforeCompile=f=>{b.onBeforeCompile(f),f.vertexShader=`attribute vec4 paintSize;varying vec2 vPaintLocal;varying vec2 vPaintSize;
`+f.vertexShader,f.vertexShader=f.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vPaintLocal=(uv-.5)*paintSize.zw;vPaintSize=paintSize.xy;`),f.fragmentShader=`varying vec2 vPaintLocal;varying vec2 vPaintSize;
`+f.fragmentShader,f.fragmentShader=f.fragmentShader.replace("#include <alphatest_fragment>",`vec2 paintPixel=max(fwidth(vPaintLocal)*1.5,vec2(.00001));vec2 paintA=max(vPaintLocal-paintPixel*.5,-vPaintSize*.5);vec2 paintB=min(vPaintLocal+paintPixel*.5,vPaintSize*.5);vec2 paintCoverage=clamp((paintB-paintA)/paintPixel,0.,1.);diffuseColor.a*=paintCoverage.x*paintCoverage.y;
    #include <alphatest_fragment>`)},g.transparent=!0,g.depthWrite=!1,g.alphaTest=0,g.alphaToCoverage=!1,g.customProgramCacheKey=()=>m+"-integrated-paint-3",this.mat[m+"Paint"]=g}let d=this.mat.white,p=d.clone();p.onBeforeCompile=m=>{d.onBeforeCompile(m),m.vertexShader=`attribute vec4 paintSize;varying vec2 vCrosswalkLocal;varying vec2 vCrosswalkSize;
`+m.vertexShader,m.vertexShader=m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vCrosswalkLocal=(uv-.5)*paintSize.zw;vCrosswalkSize=paintSize.xy;`),m.fragmentShader=`varying vec2 vCrosswalkLocal;varying vec2 vCrosswalkSize;
float stripeIntegral(float x){return floor(x)*(.62/1.5)+clamp(fract(x)-(1.-.62/1.5)*.5,0.,.62/1.5); }
`+m.fragmentShader,m.fragmentShader=m.fragmentShader.replace("#include <alphatest_fragment>",`vec2 stripeFootprint=max(fwidth(vCrosswalkLocal)*1.5,vec2(.00001));float stripeX=(vCrosswalkLocal.x+vCrosswalkSize.x*.5)/1.5;float stripePixel=stripeFootprint.x/1.5;float stripeCoverage=clamp((stripeIntegral(stripeX+stripePixel*.5)-stripeIntegral(stripeX-stripePixel*.5))/stripePixel,0.,1.);vec2 edgeA=max(vCrosswalkLocal-stripeFootprint*.5,-vCrosswalkSize*.5),edgeB=min(vCrosswalkLocal+stripeFootprint*.5,vCrosswalkSize*.5);vec2 edgeCoverage=clamp((edgeB-edgeA)/stripeFootprint,0.,1.);diffuseColor.a*=stripeCoverage*edgeCoverage.x*edgeCoverage.y;
   #include <alphatest_fragment>`)},p.transparent=!0,p.depthWrite=!1,p.alphaTest=0,p.alphaToCoverage=!1,p.customProgramCacheKey=()=>"integrated-crosswalk-3",this.mat.crosswalk=p}box(e,t,n,i,r,a,o="building",l=0){let c=l?new Ra(e,t,n,2,l):new an(e,t,n),h=new Ie(c,this.mat[o]);return h.position.set(i,r,a),h.castShadow=!0,h.receiveShadow=!0,this.root.add(h),h}plane(e,t,n,i,r,a){let o=["white","yellow","crosswalk"].includes(a),l=o?e+.8:e,c=o?t+.8:t,h=new At(l,c,Math.max(l,c)>=1e3?64:1,Math.max(l,c)>=1e3?64:1);o&&h.setAttribute("paintSize",new Ke(Array.from({length:4},()=>[e,t,l,c]).flat(),4));let u=new Ie(h,this.mat[o&&a!=="crosswalk"?a+"Paint":a]);return u.rotation.x=-Math.PI/2,u.position.set(n,r,i),u.receiveShadow=!0,this.root.add(u),u}road(e,t,n,i,r=0){return this.plane(t,Math.abs(i-n),e,(n+i)/2,r+.015,"road")}line(e,t,n,i=0,r="white",a=.13){this.plane(a,Math.abs(n-t),e,(t+n)/2,i+.028,r)}dashed(e,t,n,i=0){for(let r=t;r>n;r-=10){let a=Math.max(r-3.8,n);this.line(e,r,a,i),this.root.children.at(-1).userData.laneDash=!0}}marks(e,t,n,i,r=0,a=!1,o=!0){o&&(this.line(-e/2+.25,n,i,r),this.line(e/2-.25,n,i,r));let l=Math.round(e/t);for(let c=1;c<l;c++){let h=-e/2+c*t;a&&c===l/2?(this.line(h-.105,n,i,r,"yellow",.095),this.line(h+.105,n,i,r,"yellow",.095)):this.dashed(h,n,Math.max(i,-650),r)}}curbs(e,t,n,i=0){for(let r of[-1,1])this.box(1.6,.18,t-n,r*(e/2+.8),i-.02,(t+n)/2,"pavement"),this.box(.2,.2,t-n,r*(e/2+.1),i,(t+n)/2,"curb")}building(e,t,n,i,r,a){let o=new Set(this.root.children),l=(a??this.buildingPlacements.length)%3;this.buildingPlacements.push({x:e,z:t,width:n,depth:i,variant:["solid-cap","solid-wing","solid-terrace"][l]}),l===0?(this.box(n,r,i,e,r/2-.1,t,"building",.065),this.box(n*.76,.3,i*.73,e+n*.04,r+.03,t-i*.05,"building",.03)):l===1?(this.box(n*.57,r,i*.88,e-n*.215,r/2-.1,t-i*.06,"building",.065),this.box(n*.43,r*.72,i,e+n*.285,r*.36-.1,t,"building",.065)):(this.box(n,r*.5,i,e,r*.25-.1,t,"building",.065),this.box(n*.69,r*.5,i*.7,e+n*.08,r*.75-.1,t-i*.15,"building",.065));for(let c of this.root.children)if(!o.has(c)){c.userData.buildingOwned=!0,c.userData.growthHeight=r+.5,c.material=this.mat.environmentBuilding,c.geometry.computeBoundingBox();let h=c.geometry.boundingBox;if(c.position.y+h.min.y<0){let u=h.max.y-h.min.y;c.scale.y=(u+.3)/u,c.position.y-=.15}}}contact(e,t,n,i,r=.22){if(!this.contactMap){let l=new Uint8Array(16384);for(let c=0;c<64;c++)for(let h=0;h<64;h++){let u=Math.abs((h+.5)/64*2-1),d=Math.abs((c+.5)/64*2-1),p=Math.pow(Math.max(0,1-Math.pow(Math.max(u,d),3)),2),m=(c*64+h)*4;l[m]=l[m+1]=l[m+2]=0,l[m+3]=Math.round(p*255)}this.contactMap=new Nn(l,64,64),this.contactMap.needsUpdate=!0}let a=new Ie(new At(n,i),new Xt({map:this.contactMap,transparent:!0,opacity:r,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));a.rotation.x=-Math.PI/2,a.position.set(e,.022,t),this.root.add(a)}tree(e,t,n=1){let i=new It,r=new Ie(new oi(.1,.17,1.6,7),this.mat.trunk);r.position.y=.8,i.add(r);for(let[a,o,l,c,h]of[[0,2.7,0,1.05,"leaf"],[-.65,2.03,.05,.74,"leaf2"],[.6,2.25,.02,.83,"leaf"],[.13,2.18,.6,.71,"leaf2"]]){let u=new Ie(new Zr(c,1),this.mat[h]);u.position.set(a,o,l),u.scale.y=1.16,u.castShadow=!0,i.add(u)}i.position.set(e,0,t),i.scale.setScalar(n),i.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),this.vegetation.add(i)}environment(e,{small:t=!1,cross:n=!1,tee:i=!1,elevated:r=!1,residential:a=!1,centerX:o=0}={}){let l=[[-1,6,9,13,t?5:23],[1,-9,13,11,t?4.5:12],[-1,-31,13,17,t?6:14],[1,-54,8,12,t?5.3:21],[-1,-83,11,13,t?4:10],[1,-107,14,15,t?6:13],[-1,-144,9,14,t?5:16],[1,-180,11,14,t?4:9]],c=0;for(let[h,u,d,p,m]of l.map(b=>a?[b[0],b[1]-8,b[2]*.82,b[3]*.8,3.8]:b)){if(r&&h===-1&&u>0||this.options.waterfront&&h===1||n&&Math.abs(u+40)<24||i&&u<-35)continue;let b=o+h*(e/2+(r?10:a?5.8:8)+d/2),g=c++;h===-1&&u>0&&["02","09","05","08"].includes(this.current)||this.building(b,u,d,p,r?m*.58:m,g);let f=o+h*(e/2+(r?6.8:a?3.8:4.5)),_=p+5,x=this.plane(r?2.4:a?3.6:5,_,f,u,.025,"grass");this.lawns.push(x),this.tree(f,u+_*.22,r?1.25:t?.8:1.05),u>-90&&this.tree(f,u-_*.24,r?1.1:t?.73:.83)}if(i)for(let h of[-21,16,33]){this.building(h,-66,10,11,6);let u=this.plane(13,7,h,-57,.025,"grass");this.lawns.push(u),this.tree(h,-57,.95)}}curveStrip(e,t,n,i="road"){let r=new Qi(e.map(([h,u])=>new R(h,n+.015,u)),!1,"centripetal"),a=[],o=[];for(let h=0;h<=180;h++){let u=h/180,d=r.getPoint(u),p=r.getTangent(u),m=new R(-p.z,0,p.x).normalize();for(let b of[-1,1])a.push(d.x+m.x*t*.5*b,d.y,d.z+m.z*t*.5*b);if(h<180){let b=h*2;o.push(b,b+1,b+2,b+1,b+3,b+2)}}let l=new mt;l.setAttribute("position",new Ke(a,3)),l.setIndex(o),l.computeVertexNormals();let c=new Ie(l,this.mat[i]);return c.material.side=Ot,c.receiveShadow=!0,this.root.add(c),r}curveLine(e,t,n,i,r=!1,a="white",o=-1/0){let l=["white","yellow"].includes(a),c=n+(l?.8:0),h=[],u=[],d=[];for(let m=0;m<=600;m++){let b=m/600,g=e.getPoint(b),f=e.getTangent(b),_=new R(-f.z,0,f.x).normalize();for(let x of[-1,1])d.push((x+1)/2,.5),h.push(g.x+_.x*(t+c*.5*x),i+.033,g.z+_.z*(t+c*.5*x));if(m<600&&g.x+_.x*t>o&&(!r||Math.floor(b*e.getLength()/5)%2===0)){let x=m*2;u.push(x,x+1,x+2,x+1,x+3,x+2)}}let p=new mt;p.setAttribute("position",new Ke(h,3)),p.setIndex(u),p.setAttribute("uv",new Ke(d,2)),l&&p.setAttribute("paintSize",new Ke(Array.from({length:h.length/3},()=>[n,1e5,c,1e5]).flat(),4)),p.computeVertexNormals(),this.root.add(new Ie(p,this.mat[l?a+"Paint":a]))}flatShape(e,t,n){let i=new Jr(e,24);i.rotateX(Math.PI/2);let r=Array.from(i.index.array);for(let o=0;o<r.length;o+=3)[r[o+1],r[o+2]]=[r[o+2],r[o+1]];i.setIndex(r),i.computeVertexNormals();let a=new Ie(i,this.mat[n]);return a.position.y=t,a.material.side=Ot,a.receiveShadow=!0,this.root.add(a),a}pathRibbon(e,t,n,i){let r=["white","yellow"].includes(i),a=t+(r?.8:0),o=[],l=[],c=[];for(let d=0;d<e.length;d++){let p=e[Math.max(0,d-1)],m=e[Math.min(e.length-1,d+1)],b=m[0]-p[0],g=m[1]-p[1],f=Math.hypot(b,g),_=-g/f,x=b/f;for(let v of[-1,1])c.push((v+1)/2,.5),o.push(e[d][0]+_*a/2*v,n,e[d][1]+x*a/2*v);if(d<e.length-1){let v=d*2;l.push(v,v+1,v+2,v+1,v+3,v+2)}}let h=new mt;h.setAttribute("position",new Ke(o,3)),h.setIndex(l),h.setAttribute("uv",new Ke(c,2)),r&&h.setAttribute("paintSize",new Ke(Array.from({length:o.length/3},()=>[t,1e5,a,1e5]).flat(),4)),h.computeVertexNormals();let u=new Ie(h,this.mat[r?i+"Paint":i]);return u.material.side=Ot,this.root.add(u),u}junction(e,t){let n=t/2,i=-40+n,r=-40-n,a=2.4,o=e==="05";this.road(0,t,70,i),o&&this.road(0,t,r,-260),this.plane(300,t,0,-40,.015,"road"),this.marks(t,3.7,70,-22.55,0,!0,!1),o&&this.marks(t,3.7,-57.45,-260,0,!0,!1);for(let p of[-1,1]){this.line(p*(n-.25),70,i+a),o&&this.line(p*(n-.25),r-a,-260);for(let m of[-1,1]){let b=-40+m*n,g=n+(m===1||o?a:0);if(this.box(150-g,.18,1.6,p*(150+g)/2,-.02,b+m*.8,"pavement"),this.box(150-g,.2,.2,p*(150+g)/2,0,b+m*.1,"curb"),this.plane(150-g,.13,p*(150+g)/2,b-m*.25,.028,"white"),m===-1&&!o)continue;let f=p*n,_=b,x=[],v=[];for(let M=0;M<=48;M++){let y=M/48,I=Math.hypot(y,1-y),L=f+p*a*(1-y)**2,U=_+m*a*y*y;x.push([L,U]),v.push([L+p*y/I*1.6,U+m*(1-y)/I*1.6])}let w=new Ai;w.moveTo(f,_);for(let[M,y]of x)w.lineTo(M,y);w.closePath(),this.flatShape(w,.015,"road");let T=new Ai;T.moveTo(...x[0]);for(let M of x.slice(1))T.lineTo(...M);for(let M of v.reverse())T.lineTo(...M);T.closePath(),this.flatShape(T,.07,"pavement");let C=x.map(([M,y],I)=>{let L=I/48,U=Math.hypot(L,1-L);return[M+p*L/U*.1,y+m*(1-L)/U*.1]});this.pathRibbon(C,.2,.1,"curb");let A=x.map(([M,y],I)=>{let L=I/48,U=Math.hypot(L,1-L);return[M-p*L/U*.25,y-m*(1-L)/U*.25]});this.pathRibbon(A,.13,.028,"white")}}for(let p=-140;p<140;p+=10)if(!(Math.abs(p)<19)){for(let m of[-7.4,-3.7,3.7,7.4])this.plane(3.8,.13,p,-40+m,.03,"white");for(let m of[-.105,.105])this.plane(5,.1,p,-40+m,.031,"yellow")}let l=14,c=1.5,h=.62,u=2.5,d=Array.from({length:l},(p,m)=>(m-(l-1)/2)*c);for(let p of o?[-27,-53]:[-27])this.plane(l*c,u,0,p,.035,"crosswalk");for(let p of[-12.8,12.8])this.plane(l*c,u,p,-40,.035,"crosswalk").rotation.z=Math.PI/2;this.curbs(t,70,i+a),o?this.curbs(t,r-a,-260):(this.box(t,.18,1.6,0,-.02,r-.8,"pavement"),this.box(t,.2,.2,0,0,r-.1,"curb"),this.plane(t,.13,0,r+.25,.028,"white")),this.junctionDimensions={crosswalkCount:l,crosswalkSpacing:c,crosswalkLength:u,crosswalkStripeWidth:h,stripeOffsets:d,camera:"high-angle",roadSurface:"disjoint shared boundaries",cornerRadius:a,corners:o?4:2,edgePaint:"continuous shared curve endpoints",nearCrosswalk:-27,markingEnd:-22.55,stopLineVisible:!1,stopLineCount:0}}dividedCarriageway(e,t){let i=-(e+1.6),r=this.root.children.length;this.road(0,e,70,-260,t),this.marks(e,3.7,70,-260,t,!1,!1),this.line(-e/2+.25,70,-260,t),this.line(e/2-.25,70,-260,t);for(let o of this.root.children.slice(r))o.position.x+=i;let a=-(e+1.6)/2;this.plane(1.6,330,a,-95,t+.025,"pavement"),this.box(.68,.62,330,a,t+.31,-95,"curb",.05),this.dividedRoad={lanesPerDirection:3,medianWidth:1.6,oppositeCenter:i,egoCenter:0,directions:2}}ramp(e,t){let n=e==="06",i=t/2,r=3.7,a=n?1:-1,o=U=>n?-U-8:U+60,l=U=>n?-U-8:U-60,c=U=>{let B=Math.max(0,U),W=Math.min(B,60),V=1.85+.009*W*W+Math.max(0,B-60)*1.08,K=.018*W,z=r*Math.sqrt(1+K*K);return{x:V,l:V-z,r:V+z}},h=Math.min(o(70),o(-260)),u=Math.max(o(70),o(-260)),d=0;for(;c(d).l<i+2.4;)d+=.01;let p=d+2.5,m=4.5,b=.001,g=(c(p+b).l-c(p-b).l)/(2*b),f=new Ks(new R(i,0,l(d)),new R(i,0,l(d-m)),new R(c(p).l-g*m,0,l(p-m)),new R(c(p).l,0,l(p))),_=[];for(let U=u;U>d;U-=.1)_.push([i,l(U)]);for(let U=0;U<=96;U++){let B=f.getPoint(U/96);_.push([B.x,B.z])}for(let U=p+.1;U<u;U+=.1)_.push([c(U).l,l(U)]);_.push([c(u).l,l(u)]);let x=[];for(let U=u;U>h;U-=.1)x.push([Math.max(i,c(U).r),l(U)]);x.push([i,l(h)]);let v=[[-i,l(h)],[-i,l(u)],..._,...x],w=new Ai;v.forEach(([U,B],W)=>W?w.lineTo(U,B):w.moveTo(U,B)),w.closePath(),this.flatShape(w,.015,"road");let T=(U,B)=>U.map(([W,V],K)=>{let z=U[Math.max(0,K-1)],$=U[Math.min(U.length-1,K+1)],oe=$[0]-z[0],ue=$[1]-z[1],Ee=Math.hypot(oe,ue);return[W-ue/Ee*B*a,V+oe/Ee*B*a]});this.pathRibbon(T(_,.25),.13,.033,"white"),this.pathRibbon(T(x,.25),.13,.033,"white"),this.line(-i+.25,70,-260),this.dashed(-1.85,70,-260),this.dashed(1.85,70,-260);let C=0,A=null,M=[];for(let U=h;U<=u;U+=.1){let B=c(U).x,W=l(U);A&&(C+=Math.hypot(B-A[0],W-A[1])),B>i+.3&&C%9<3.8?M.push([B,W]):M.length&&(M.length>1&&this.pathRibbon(M,.13,.033,"white"),M.length=0),A=[B,W]}M.length>1&&this.pathRibbon(M,.13,.033,"white");let y=f.getTangent(0),I=f.getTangent(1),L=new R(g,0,n?-1:1).normalize();this.rampDimensions={lanes:2,laneWidth:3.7,width:7.4,surface:"single triangulated perimeter",nose:"tangent-continuous cubic",paintInset:.25,startTangentDot:y.dot(new R(0,0,a)),endTangentDot:I.dot(L)}}parking(e){["17","18","19"].includes(e)?zf(this):Hf(this,e)}roadworks(e){let t=this.root.children.length,n=e/2-3.38,i=e/2-.32,r=e<10;this.roadworkZone={side:"right roadside lane",left:n,right:i,roadHalfWidth:e/2,taperStart:i,taperEnd:n,front:-10,back:-48,blocksEgoLane:r,bypass:r?"opposing lane":"adjacent lane",truck:{localX:e/2-1.85,x:e/2-1.85,z:-34,width:2.35,length:7}};for(let u=0;u<14;u++){let d=-10-u*2.9,p=Math.min(u/4,1),m=i-p*(i-n);this.box(.48,.065,.48,m,.05,d,"cone",.025);let b=new Ie(new Hr(.23,.78,20),this.mat.cone);b.position.set(m,.47,d),b.castShadow=!0,this.root.add(b);let g=new Ie(new oi(.085,.14,.18,20),this.mat.white);g.position.set(m,.48,d),g.castShadow=!0,this.root.add(g)}let a=e/2-1.85,o=-34,l=new jt({color:"#202329",roughness:.87}),c=new jt({color:"#7f8993",metalness:.5,roughness:.35}),h=(u,d,p,m,b,g,f,_=.04)=>this.box(u,d,p,a+m,b,o+g,f,_);h(2.25,.36,6.6,0,.78,0,"building"),h(2.35,1.9,2.1,0,1.74,-2.25,"cone",.14),h(2.12,.72,.06,0,2.12,-3.32,"glass");for(let u of[-1,1])h(.055,.7,1.4,u*1.19,2.14,-2.35,"glass");h(2.32,.24,4.35,0,1.08,1.1,"building");for(let u of[-1,1])h(.14,.95,4.35,u*1.1,1.62,1.1,"cone");h(2.3,.95,.14,0,1.62,3.27,"cone");for(let u of[-1,1])for(let d of[-2.3,1.6,2.65]){let p=new Ie(new oi(.48,.48,.28,24),l);p.rotation.z=Math.PI/2,p.position.set(a+u*1.08,.5,o+d),p.castShadow=!0,this.root.add(p);let m=new Ie(new oi(.23,.23,.29,20),c);m.rotation.z=Math.PI/2,m.position.copy(p.position),this.root.add(m)}for(let u of[-1,1])h(.4,.19,.05,u*.7,1.05,3.36,"cone");this.contact(a,o,2.6,7.4,.26);for(let u of this.root.children.slice(t))u.userData.construction=!0;if(this.current==="13"){let u=d=>d>=-30?0:18*(1-Math.exp(-Math.pow((-d-30)/95,3)));for(let d of this.root.children.slice(t)){let p=d.position.z;d.position.x+=u(p),d.rotation.y+=Math.atan2(u(p+.05)-u(p-.05),.1)}this.roadworkZone.followsCurve=!0,this.roadworkZone.truck.x+=u(o)}}roundedWater(e){let t=[];for(let o=90;o>=-290;o-=4){let l=this.current==="13"&&o<-30?18*(1-Math.exp(-Math.pow((-o-30)/95,3))):0;t.push(new R(l,0,o))}let n=new Qi(t),i=e/2+3.2,r=62,a=(o,l,c,h)=>{let u=[],d=[];for(let b=0;b<=600;b++){let g=b/600,f=n.getPoint(g),_=n.getTangent(g),x=new R(-_.z,0,_.x).normalize();for(let v of[o,o+l])u.push(f.x+x.x*v,c,f.z+x.z*v);if(b<600){let v=b*2;d.push(v,v+1,v+2,v+1,v+3,v+2)}}let p=new mt;p.setAttribute("position",new Ke(u,3)),p.setIndex(d),p.computeVertexNormals();let m=new Ie(p,this.mat[h]);return m.material.side=Ot,m.receiveShadow=!0,this.root.add(m),m};a(e/2,3.2,.018,"pavement"),a(i,r,-.1,"water"),a(i-.12,.24,.07,"curb"),this.waterBounds={back:-290,front:90,bankOffset:i,waterWidth:r,parallelToRoad:!0,constantNormalOffset:3.2,reflectionPolicy:"shoreline objects only; distant buildings excluded"}}build(e,t={}){this.camera.clearViewOffset(),this.options={buildings:!0,waterfront:e==="13",roadworks:e==="12",...t},this.root&&this.scene.remove(this.root);let n=["10","14","16"].includes(e)?"10":["17","18","19"].includes(e)?"17":e,i=JSON.stringify([n,t.waterfront,t.roadworks,t.laneCount,t.palette]),r=this.sceneCache.get(i);if(r){Object.assign(this,r.fields),this.current=e,this.scene.add(this.root),this.car.position.copy(r.carPosition),this.car.rotation.copy(r.carRotation),this.sun.target.position.copy(r.sunTarget),this.configureCamera(e,t),this.sceneCache.delete(i),this.sceneCache.set(i,r);return}this.dividedRoad=null,this.root=new It,this.scene.add(this.root),this.vegetation=new It,this.root.add(this.vegetation),this.lawns=[],this.current=e,this.parkingBays=[],this.parkingColumns=[],this.buildingPlacements=[],this.waterBounds=null,this.rampDimensions=null,this.roadworkZone=null,this.pedestrianPassages=[],this.junctionDimensions=null,this.parkingReplica=null;let a=["02","05","08","09","13"].includes(e),o=["02","09","13"].includes(e)&&t.laneCount?t.laneCount*3.7:["04","09"].includes(e)?7.4:a?22.2:11.1,l=e==="03"?zh:0;fs.includes(e)||this.plane(2e4,2e4,0,-1e3,-.14,"ground");let c=a||e==="04"?1.85:0,h=0,u=-260;if((e==="08"||e==="05")&&(u=-40,h=e==="05"?-17.5:-10),e==="10"&&(u=-150),e==="03"){let g=o*2+1.6,f=-(o+1.6)/2;this.box(g+.6,.95,330,f,l-.48,-95,"curb").castShadow=!1;for(let _ of[-1,1]){let x=this.box(.24,.28,330,f+_*(g/2+.12),l+.12,-95,"curb",.025);x.castShadow=!1}for(let _ of[8,-20,-65,-110]){this.box(g-2,.8,2.6,f,l-1.3,_,"building",.08).castShadow=!1;for(let x of[-1,1])this.box(1.65,l-1.7,1.9,f+x*6,(l-1.7)/2,_,"building",.06).castShadow=!1}}if(!["13","06","07","05","08"].includes(e)&&!fs.includes(e)&&this.road(0,o,70,u,l),fs.includes(e))this.parking(e);else if(e==="13"){let b=[];for(let f=70;f>=-260;f-=5){let _=f>=-30?0:18*(1-Math.exp(-Math.pow((-f-30)/95,3)));b.push([_,f])}let g=this.curveStrip(b,o,0);for(let f of[-1,1])this.curveLine(g,f*(o/2+.8),1.6,.037,!1,"pavement"),this.curveLine(g,f*(o/2+.1),.2,.067,!1,"curb");for(let f of[-o/2+.25,o/2-.25])this.curveLine(g,f,.13,0);for(let f=1;f<Math.round(o/3.7);f++){let _=-o/2+f*3.7;Math.abs(_)>.01&&this.curveLine(g,_,.13,0,!0)}this.curveLine(g,-.1,.095,0,!1,"yellow"),this.curveLine(g,.1,.095,0,!1,"yellow");for(let[f,_,x,v,w]of[[-23,-66,14,13,8],[28,-19,17,13,8],[32,-70,13,11,11],[-18,-113,11,12,9],[42,-133,16,13,10]])this.options.waterfront&&f>0||(this.building(f,_,x,v,w),this.lawns.push(this.plane(x+3,5,f,_+v/2+3,.01,"grass")),this.tree(f-3,_+v/2+3,.85),this.tree(f+4,_+v/2+3,.95))}else if(e==="05"||e==="08")this.junction(e,o),this.environment(o,{cross:!0,tee:e==="08"});else if(e==="06"||e==="07")this.ramp(e,o);else if(this.marks(o,3.7,70,-260,l,e==="02"||e==="04"||e==="09",e!=="03"),e==="03"&&(this.line(o/2-.25,70,-260,l),this.line(-o/2+.25,70,-260,l)),e!=="03"&&this.curbs(o,70,-260,l),["01"].includes(e)||this.environment(e==="03"?o*2+1.6:o,{small:["04","11","12"].includes(e),elevated:e==="03",residential:!1,centerX:e==="03"?-(o+1.6)/2:0}),e==="11"){for(let b of[-o/2-1.2,o/2+1.2])this.box(1.2,5.3,7,b,2.56,-35,"building",.06);this.box(o+3.6,1,7,0,5.6,-35,"building",.05)}if(["03","06","07"].includes(e)&&this.dividedCarriageway(o,l),["02","09","13","12"].includes(e)&&this.options.roadworks&&this.roadworks(o),["02","09","13"].includes(e)&&this.options.waterfront&&(this.mat.water.roughness=.28,this.mat.water.metalness=.32,this.roundedWater(o)),!["08",...fs].includes(e)){let b=e==="13"?18:0;this.road(b,120,-256,-268,l)}this.car.position.set(c,l+.02,h),this.car.rotation.set(0,0,0),this.configureCamera(e,t),this.root.updateMatrixWorld(!0),this.root.traverse(b=>{if(!b.userData.laneDash)return;let g=b.geometry.getAttribute("position"),f=[];for(let v=0;v<g.count;v++)f.push(new R().fromBufferAttribute(g,v).applyMatrix4(b.matrixWorld).project(this.camera).y);let _=Math.min(...f),x=Math.max(...f);_<-1&&x>-1&&x<-.966&&(b.visible=!1)}),this.sun.position.set(-38,55+l,48),this.sun.target.position.set(0,l,-14),this.root.traverse(b=>{b.userData.buildingOwned&&b.traverse(g=>{g.castShadow=!1,g.receiveShadow=!1})}),this.scene.updateMatrixWorld(!0);let d=2166136261,p=b=>{d=Math.imul(d^Math.round(b*1e5),16777619)>>>0};this.root.traverse(b=>{if(b.matrixWorld.elements.forEach(p),b.geometry){let g=b.geometry.getAttribute("position").array;for(let f of g)p(f)}}),this.environmentSignature=d.toString(16),this.camera.projectionMatrix.elements.forEach(p),this.camera.matrixWorld.elements.forEach(p),this.car.matrixWorld.elements.forEach(p),this.geometrySignature=d.toString(16),this.batchRoadMarkings();let m={};for(let b of["root","vegetation","lawns","current","parkingBays","parkingColumns","buildingPlacements","waterBounds","rampDimensions","roadworkZone","pedestrianPassages","junctionDimensions","parkingReplica","parkedVehicles","parkingTone","parkingShadow","parkingGhostMaterials","environmentSignature","geometrySignature","dividedRoad"])m[b]=this[b];if(this.sceneCache.set(i,{fields:m,carPosition:this.car.position.clone(),carRotation:this.car.rotation.clone(),sunTarget:this.sun.target.position.clone()}),this.sceneCache.size>8){let b=this.sceneCache.keys().next().value;this.disposeSceneRoot(this.sceneCache.get(b).fields.root),this.sceneCache.delete(b)}}disposeSceneRoot(e){let t=new Set(Object.values(this.mat)),n=new Set,i=new Set;e.traverse(r=>{if(r.geometry&&!r.userData.sharedVehicleGeometry&&n.add(r.geometry),r.material)for(let a of Array.isArray(r.material)?r.material:[r.material])!t.has(a)&&!r.userData.sharedVehicleGeometry&&i.add(a)}),n.forEach(r=>r.dispose()),i.forEach(r=>r.dispose()),e.removeFromParent()}batchRoadMarkings(){for(let e of[this.mat.white,this.mat.yellow,this.mat.whitePaint,this.mat.yellowPaint]){let t=this.root.children.filter(a=>a.isMesh&&a.visible&&a.material===e&&!a.userData.buildingOwned&&a.geometry.index&&a.geometry.hasAttribute("uv")&&!a.castShadow);if(t.length<2)continue;let n=t.map(a=>a.geometry.clone().applyMatrix4(a.matrix)),i=qf(n,!1);if(n.forEach(a=>a.dispose()),!i)continue;let r=new Ie(i,e);r.receiveShadow=!0,this.root.add(r);for(let a of t)a.removeFromParent(),a.geometry.dispose()}}configureCamera(e,t){this.camera.clearViewOffset();let n=this.car.position.x,i=this.car.position.z,r=e==="03"?zh:0,a=(h,u,d)=>{this.cameraAim=new R(h,u,d),this.camera.lookAt(this.cameraAim)},o=e==="01",l=o?18:23,c=o?6.8:8.5;if(this.camera.position.set(n,c+r,l),a(n,r,o?-20:-24),this.camera.updateMatrixWorld(),this.camera.updateProjectionMatrix(),fs.includes(e)){let u={10:[0,11,22,0,0,-5],14:[0,34,.1,0,0,0],15:[18,33,26,0,0,-3],16:[0,26,22,0,0,-5],17:[0,11,22,0,0,-5],18:[0,26,22,0,0,-5],19:[0,34,.1,0,0,0]}[e];this.camera.position.set(...u.slice(0,3)),a(...u.slice(3))}else if(["05","08"].includes(e)){let h=t.cameraView==="high";this.car.position.z=t.junctionPosition==="approaching"?14:-20.5;let u=this.car.position.z;this.camera.position.set(n,h?32:8.5,u+(h?40:23)),a(n,0,u-24),this.junctionDimensions&&(this.junctionDimensions.camera=h?"high-angle":"low-approach")}["02","09","13","06","07"].includes(e)&&t.cameraView==="high"&&(this.camera.position.set(n,26,32),a(n,0,-16)),e==="03"&&t.cameraView==="high"&&(this.camera.position.set(n,r+26,32),a(n,r,-16)),this.camera.updateMatrixWorld(),this.camera.updateProjectionMatrix(),this.framing=Bf(this.car,this.camera,["14","16","18","19"].includes(e)||t.cameraView==="high"?"high":"low")}update({id:e,mode:t,trees:n,vehicle:i,buildings:r=!0,waterfront:a=e==="13",roadworks:o=e==="12",laneCount:l,cameraView:c="low",junctionPosition:h="near"},{cameraMotion:u=!1,environmentMotion:d=!1,deferRender:p=!1}={}){["05","08"].includes(e)&&(c=h==="near"?"high":"low");let m=u&&this.state?this.captureCamera():null;this.stopCameraMotion(),this.stopEnvironmentMotion();let b={buildings:r,waterfront:a,roadworks:o,laneCount:l,cameraView:c,junctionPosition:h,palette:this.palette},g=e!==this.current||!this.options||["waterfront","roadworks","laneCount","palette"].some(A=>b[A]!==this.options[A]);g?this.build(e,b):(c!==this.options.cameraView||h!==this.options.junctionPosition)&&(this.options=b,this.configureCamera(e,b));let f=t==="dark",_=f?1:0,x=fs.includes(e),v=["10","14","15","16"].includes(e),w=n&&Cx.find(A=>A.id===e).trees;for(let[A,M]of Object.entries(this.colors))if(this.mat[A].color.set(M[_]),!f){let y=this.mat[A].color,I=.2126*y.r+.7152*y.g+.0722*y.b;y.lerp(new me(I,I,I),.025)}let T={balanced:{road:"#59616c",ground:"#c4cfdd",pavement:"#d3dce4",building:"#d3d7dd"},cool:{road:"#626974",ground:"#c1c9d3",pavement:"#d4d9e0",building:"#d3d7dd"},neutral:{road:"#68696b",ground:"#cccdce",pavement:"#d9dadb",building:"#dcdddd"},warm:{road:"#6c6965",ground:"#d1cec8",pavement:"#dfdbd4",building:"#e2dfd9"},soft:{road:"#7d7f82",ground:"#d5d7da",pavement:"#e0e2e5",building:"#e1e3e6"}};if(!f&&T[this.palette])for(let[A,M]of Object.entries(T[this.palette]))this.mat[A].color.set(M);this.mat.environmentBuilding.color.copy(this.mat.building.color),this.mat.whitePaint.color.copy(this.mat.white.color),this.mat.yellowPaint.color.copy(this.mat.yellow.color),this.mat.crosswalk.color.copy(this.mat.white.color);for(let A of this.lawns)A.material=this.mat.grass;this.ao.enabled=!1,this.buildingTint.value=f?0:1,this.mat.building.roughness=f?.5:.62,this.mat.building.clearcoat=f?.04:.025,this.mat.building.clearcoatRoughness=f?.56:.6,this.mat.building.specularIntensity=f?.36:.24,this.mat.building.envMapIntensity=f?1.5:.55;for(let A of["roughness","clearcoat","clearcoatRoughness","specularIntensity","envMapIntensity"])this.mat.environmentBuilding[A]=this.mat.building[A];if(this.mat.glass.roughness=f?.46:.3,this.mat.glass.clearcoat=f?.22:.72,this.mat.glass.envMapIntensity=f?.35:.8,this.parkingTone&&(this.parkingTone.value=f?1:0),x&&this.parkingShadow&&(this.parkingShadow.material.opacity=f?.2:.3),v)for(let A of this.parkingGhostMaterials){let M=A.userData.ghostPart;A.color.set(M==="body"?f?"#424243":"#939aa3":M==="glass"?f?"#2e2e30":"#5b626b":f?"#272729":"#575c63")}this.car.visible=i,this.hemi.color.set(f?"#d5d5d5":"#a6c8f2"),this.hemi.groundColor.set(f?"#717171":"#8b959d"),this.hemi.intensity=f?.95:1.05,this.sun.color.set(f?"#ebebeb":"#fff5e8"),this.sun.intensity=f?1.65:3,this.fill.color.set(f?"#cacaca":"#aacded"),this.fill.intensity=f?.45:.5,this.scene.environmentIntensity=x?f?.28:.42:f?.42:.52,x&&(this.hemi.color.set(f?"#e5e5e5":"#d9e2eb"),this.hemi.groundColor.set(f?"#717171":"#91969e"),this.hemi.intensity=f?.65:.85,this.sun.color.set(f?"#eeeeee":"#fff5e8"),this.sun.intensity=f?1.4:2.6,this.fill.color.set(f?"#cccccc":"#d7e2eb"),this.fill.intensity=.35),this.sun.position.set(-38,55+(e==="03"?zh:0),48);let C=this.egoContact.children[0];if(C.scale.y=1,C.position.z=0,C.material.uniforms.opacity.value=f?.42:.52,this.environmentTone.value=f?1:0,this.darkAerialPerspective.value=f?1:0,this.sky.material.uniforms.range.value=f?.32:.2,this.sky.material.uniforms.top.value.set(f?"#2d2e30":"#96bde0"),this.sky.material.uniforms.bottom.value.set(f?"#48494b":"#dce5ee"),this.scene.fog.color.set(f?"#48494b":"#dce5ee"),this.scene.fog.near=v?1e5:55,this.scene.fog.far=v?12e4:210,this.sky.visible=!v,this.scene.background=v?new me().setRGB(f?.022:.66,f?.022:.94,f?.022:1.45):null,f&&(this.sky.material.uniforms.range.value=.2,this.sky.material.uniforms.top.value.set("#202225"),this.sky.material.uniforms.bottom.value.set("#373a3e"),this.scene.fog.color.copy(this.sky.material.uniforms.bottom.value)),!f&&this.palette!=="current"){let A=this.palette==="warm";if(this.hemi.color.set(this.palette==="balanced"?"#cedded":A?"#ece8e2":"#e2e5e8"),this.fill.color.set(this.palette==="balanced"?"#cbdde9":A?"#e8e4df":"#dfe3e8"),v){let M=this.palette==="balanced"?[.54,.62,.72]:this.palette==="cool"?[.72,.74,.77]:this.palette==="warm"?[.75,.73,.69]:this.palette==="soft"?[.77,.78,.79]:[.72,.73,.74];this.scene.background=new me().setRGB(...M)}}if(this.state={id:e,mode:t,trees:w,vehicle:i,buildings:r,waterfront:a,roadworks:o,laneCount:l,cameraView:c,junctionPosition:h},this.environmentTargets={buildings:r?1:0,trees:w?1:0},!d||g)for(let A of["buildings","trees"])Object.assign(this.environmentGrowth[A],{value:this.environmentTargets[A],velocity:0});return this.applyEnvironmentGrowth(),d&&!g&&this.startEnvironmentMotion(),m?this.startCameraMotion(m):p||this.renderFrame(),m||this.onCameraFrame?.(!1),this.audit()}applyEnvironmentGrowth(){let e=this.environmentGrowth.buildings.value,t=this.environmentGrowth.trees.value;this.root.traverse(i=>{if(!i.userData.buildingOwned)return;let r=i.userData.growthBaseY??(i.userData.growthBaseY=i.position.y);i.visible=e>5e-4,i.position.y=r-i.userData.growthHeight*(1-e)}),this.vegetation.visible=t>5e-4;for(let i of this.vegetation.children){if(i.userData.growthHeight===void 0){let r=1;for(let a of i.children)a.geometry.computeBoundingBox(),r=Math.max(r,(a.position.y+a.geometry.boundingBox.max.y*a.scale.y)*i.scale.y);i.userData.growthHeight=r+.3,i.userData.growthBaseY=i.position.y}i.position.y=i.userData.growthBaseY-i.userData.growthHeight*(1-t)}let n=bn.smoothstep(t,0,.65);for(let i of this.lawns)i.visible=n>5e-4;this.mat.grass.opacity=n}stopEnvironmentMotion(){let e=!!this.environmentMotion;e&&cancelAnimationFrame(this.environmentMotion.frame),this.environmentMotion=null,e&&this.onEnvironmentFrame?.(!1)}finishEnvironmentMotion(){if(this.stopEnvironmentMotion(),!!this.environmentTargets){for(let e of["buildings","trees"])Object.assign(this.environmentGrowth[e],{value:this.environmentTargets[e],velocity:0});this.applyEnvironmentGrowth(),this.renderFrame(),this.onEnvironmentFrame?.(!1)}}startEnvironmentMotion(){let e={frame:0,last:0,elapsed:0,exits:{}};this.environmentMotion=e,this.onEnvironmentFrame?.(!0);let t=n=>{if(this.environmentMotion!==e)return;let i=e.last?Math.min(.048,(n-e.last)/1e3):0;e.last=n,e.elapsed+=i;let r=!0;for(let a of["buildings","trees"]){let o=this.environmentGrowth[a],l=this.environmentTargets[a];if(l){let h=o.value-l,u=o.velocity+12*h,d=Math.exp(-12*i);o.value=bn.clamp(l+(h+u*i)*d,0,1),o.velocity=(o.velocity-12*u*i)*d}else{let c=e.exits[a]??={value:o.value,velocity:Math.min(0,o.velocity),duration:a==="buildings"?.34:.3},h=Math.min(1,e.elapsed/c.duration);o.value=Math.max(0,c.value*(1-h*h*h)+(h*h*h-2*h*h+h)*c.velocity*c.duration),o.velocity=h===1?0:-3*c.value*h*h/c.duration+(3*h*h-4*h+1)*c.velocity}(Math.abs(o.value-l)>.001||Math.abs(o.velocity)>.01)&&(r=!1)}if(this.applyEnvironmentGrowth(),this.cameraMotion||this.renderFrame(),this.onEnvironmentFrame?.(!0),r){this.finishEnvironmentMotion();return}e.frame=requestAnimationFrame(t)};e.frame=requestAnimationFrame(t)}renderFrame(e=!1){let{id:t,mode:n,vehicle:i}=this.state,r=n==="dark",a=fs.includes(t),o=JSON.stringify([this.car.position.toArray(),this.car.rotation.toArray(),i,this.environmentGrowth.trees.value,n]),l=this.shadowSceneRoot!==this.root||this.shadowKey!==o||this.renderer.shadowMap.needsUpdate,c=[...this.buildingPlacements,...this.parkingColumns.map(f=>({x:f.position.x,z:f.position.z,width:.68,depth:.68}))];this.buildingCount.value=Math.min(32,c.length),c.slice(0,32).forEach((f,_)=>this.buildingFootprints.value[_].set(f.x,f.z,f.width/2,f.depth/2)),this.scene.updateMatrixWorld(!0),this.mirror.position.y=0,this.mirror.updateMatrixWorld(!0);let h=[];this.root.traverse(f=>{f.isMesh&&(f.userData.reflectiveSurface||["road","ground","pavement","water","parkingFloor","parkingBay"].some(_=>f.material===this.mat[_]))&&(h.push([f,f.visible]),f.visible=!1)});for(let f of this.parkingColumns)f.userData.glow&&(f.userData.glow.visible=!1);if(this.egoContact.visible=!1,this.tailReflection.visible=!1,this.car.visible=!1,this.renderer.shadowMap.needsUpdate=!1,this.options.waterfront){let f=[];this.root.traverse(x=>{x.userData.buildingOwned&&(f.push([x,x.visible]),x.visible=!1)}),this.mirror.onBeforeRender(this.renderer,this.scene,this.camera),this.waterReflectionMatrix.value.copy(this.mirror.material.uniforms.textureMatrix.value).multiply(new Re().copy(this.mirror.matrixWorld).invert());let _=this.renderer.getRenderTarget();this.blurMaterial.uniforms.source.value=this.mirror.getRenderTarget().texture,this.blurMaterial.uniforms.direction.value.set(7/this.width,7/this.height),this.renderer.setRenderTarget(this.waterReflectionTarget),this.blurQuad.render(this.renderer),this.renderer.setRenderTarget(_);for(let[x,v]of f)x.visible=v}this.mirror.position.y=a?0:-.14,this.mirror.updateMatrixWorld(!0);let u=this.scene.background,d=this.sky.visible,p=this.renderer.getClearAlpha(),m=this.renderer.getClearColor(new me);this.scene.background=null,this.sky.visible=!1,this.renderer.setClearColor(0,0);let b=[];this.root.traverse(f=>{f.isMesh&&!f.userData.buildingOwned&&!this.parkingColumns.includes(f)&&(b.push([f,f.visible]),f.visible=!1)}),this.groundReflectionAudit={trees:0,buildings:0},this.root.traverse(f=>{!f.isMesh||!f.visible||(f.userData.buildingOwned&&this.groundReflectionAudit.buildings++,[this.mat.leaf,this.mat.leaf2,this.mat.trunk].includes(f.material)&&this.groundReflectionAudit.trees++)}),this.mirror.onBeforeRender(this.renderer,this.scene,this.camera);for(let[f,_]of b)f.visible=_;this.scene.background=u,this.sky.visible=d,this.renderer.setClearColor(m,p);let g=this.renderer.getRenderTarget();this.blurMaterial.uniforms.source.value=this.mirror.getRenderTarget().texture,this.blurMaterial.uniforms.direction.value.set(4/this.width,0),this.renderer.setRenderTarget(this.blurTargets[0]),this.blurQuad.render(this.renderer),this.blurMaterial.uniforms.source.value=this.blurTargets[0].texture,this.blurMaterial.uniforms.direction.value.set(0,4/this.height),this.renderer.setRenderTarget(this.blurTargets[1]),this.blurQuad.render(this.renderer),this.renderer.setRenderTarget(g),this.reflectionMatrix.value.copy(this.mirror.material.uniforms.textureMatrix.value).multiply(new Re().copy(this.mirror.matrixWorld).invert());for(let[f,_]of h)f.visible=_;for(let f of this.parkingColumns)f.userData.glow&&(f.userData.glow.visible=!0);this.car.visible=i,this.tailReflection.visible=i,Of(this.tailReflection,this.car,r,a),this.renderer.shadowMap.needsUpdate=l,this.egoContact.visible=i,this.egoContact.position.set(this.car.position.x,this.car.position.y-.02,this.car.position.z),this.vehicleDetail.setVehicleFrame(this.framing.vehicleFrame,i),this.composer.render(),this.shadowSceneRoot=this.root,this.shadowKey=o,this.shadowVehiclePosition=this.car.position.clone(),this.shadowFrameAudit={updated:l,car:this.shadowVehiclePosition.toArray(),contact:this.egoContact.position.toArray()}}captureCamera(){let e=this.car.position.clone().add(new R(0,.85,0)),t=e.clone().project(this.camera);return{position:this.camera.position.clone(),carPosition:this.car.position.clone(),quaternion:this.camera.quaternion.clone(),aim:this.cameraAim.clone(),offset:new re(this.camera.view?.offsetX||0,this.camera.view?.offsetY||0),anchor:new re((t.x+1)/2,(1-t.y)/2),velocity:this.cameraMotion?.velocity.clone()||new R,carVelocity:this.cameraMotion?.carVelocity?.clone()||new R,framing:this.framing}}applyCamera(e){e.carPosition&&this.car.position.copy(e.carPosition),this.camera.position.copy(e.position),this.cameraAim.copy(e.aim),e.quaternion?this.camera.quaternion.copy(e.quaternion):this.camera.lookAt(this.cameraAim),this.camera.setViewOffset(1920,1080,e.offset.x,e.offset.y,1920,1080),this.camera.updateMatrixWorld(!0)}stopCameraMotion(){let e=this.cameraMotion;e&&(cancelAnimationFrame(e.frame),this.cameraMotion=null,this.applyCamera(e.to),this.framing=e.to.framing,this.setResolution(...e.resolution))}finishCameraMotion(){let e=this.cameraMotion;e&&(this.applyCamera(e.to),this.framing=e.to.framing,this.stopCameraMotion(),this.renderFrame(),this.onCameraFrame?.(!1))}startCameraMotion(e){let t=this.captureCamera();if(e.position.distanceTo(t.position)<1e-5&&e.aim.distanceTo(t.aim)<1e-5&&e.offset.distanceTo(t.offset)<1e-5){this.renderFrame(),this.onCameraFrame?.(!1);return}let n={from:e,to:t,resolution:[this.width,this.height],frame:0,elapsed:0,last:0,velocity:e.velocity.clone(),carVelocity:e.carVelocity.clone()};this.cameraMotion=n;let i=e.carPosition.clone().add(new R(0,.85,0)),r=t.carPosition.clone().add(new R(0,.85,0)),a=i.clone(),o=new is().setFromVector3(e.position.clone().sub(i)),l=new is().setFromVector3(t.position.clone().sub(r));l.theta=o.theta+Math.atan2(Math.sin(l.theta-o.theta),Math.cos(l.theta-o.theta));let c=t.carPosition.clone().sub(e.carPosition),h=c.length(),u=["05","08"].includes(this.current)&&h>.01,d=c.z<0,p=10,m=Math.min(2,2*h/p),b=Math.max(0,(h-p*m/2)/p),g=u&&d?b+m:Math.max(.65,Math.min(2.6,h/15)),f=Math.max(0,b+m*.4-.8/.969),_=g-f,x=.45/.969,v=Math.max(0,f-x)*.95*.93*.97*.95*.93*.93*.9+x,w=u&&d?(f+_*1.05)*1.02:g,T=w-v,C=(f+_*.42)*.95*.9*.9,A=Math.min(1.6,C*.5),M=C-A,y=h/Math.max(.001,M+A*.5),I=ue=>{let Ee=x,Oe=.07,tt=v-Ee;if(ue<v){let ke=bn.clamp((ue-tt)/Ee,0,1);return Oe*ke*ke}else{let ke=bn.clamp((ue-v)/T,0,1),j=9.5/T,Y=ke*T,le=1-Oe,Se=2*Oe/Ee,pe=j*le-Se,Ge=(le+pe*T)*Math.exp(-j*T);return 1-(le+pe*Y)*Math.exp(-j*Y)+Ge*ke*ke*(3-2*ke)}},L=I(C),U=Math.max(0,Math.min(2,e.carVelocity.dot(c)/Math.max(.001,h*h)*w)),B=t.position.clone().sub(e.position),W=Math.max(0,Math.min(8,e.velocity.dot(B)/Math.max(.001,B.lengthSq()))),V=13.8,K={position:new R,carPosition:new R,quaternion:new sn,aim:new R,offset:new re},z=new Bt().setFromObject(this.car),$=[];for(let ue of[z.min.x,z.max.x])for(let Ee of[z.min.y,z.max.y])for(let Oe of[z.min.z,z.max.z])$.push(new R(ue,Ee,Oe).sub(t.carPosition));this.applyCamera(e),this.framing=e.framing,this.renderFrame(),this.onCameraFrame?.(!0);let oe=ue=>{if(this.cameraMotion!==n)return;let Ee=n.last?Math.min(48,ue-n.last):0;n.elapsed+=Ee,n.last=ue;let Oe=n.elapsed/1e3/(u&&d?.969:1),tt=Math.exp(-V*Oe),ke=Math.min(1,Math.max(0,1+(-1+(W-V)*Oe)*tt)),Y=Math.min(1,Oe/(u&&d?C:w));n.progress=Y;let le=Math.max(0,Oe-b),Se=bn.clamp(Oe-M,0,A),pe=Oe>=C?h:Oe<M?y*Oe:y*M+y*Se-.5*y/A*Se*Se,Ge=u?d?Math.min(1,pe/Math.max(.001,h)):Y*Y*(3-2*Y)+(Y*Y*Y-2*Y*Y+Y)*U:ke;if(u?Y>=1:1-ke<8e-4){this.finishCameraMotion();return}let yt=this.camera.position.clone(),D=this.car.position.clone();K.carPosition.lerpVectors(e.carPosition,t.carPosition,Ge),a.copy(K.carPosition).add(new R(0,.85,0));let Je=ke;u&&d?Je=bn.smootherstep(I(Oe),0,L):u&&(Je=Ge),K.aim.lerpVectors(e.aim,t.aim,Je),K.offset.lerpVectors(e.offset,t.offset,Je),K.quaternion.slerpQuaternions(e.quaternion,t.quaternion,Je);let Ue=Je;K.position.setFromSpherical(new is(bn.lerp(o.radius,l.radius,Ue),bn.lerp(o.phi,l.phi,Je),bn.lerp(o.theta,l.theta,Je))).add(a),this.applyCamera(K);let Ce=Ue,ge=a.clone().project(this.camera),it=e.anchor.clone().lerp(t.anchor,Ce);K.offset.x+=((ge.x+1)/2-it.x)*1920,K.offset.y+=((1-ge.y)/2-it.y)*1080,this.camera.setViewOffset(1920,1080,K.offset.x,K.offset.y,1920,1080),this.camera.updateMatrixWorld(!0),Ee&&(n.velocity.copy(this.camera.position).sub(yt).multiplyScalar(1e3/Ee),n.carVelocity.copy(this.car.position).sub(D).multiplyScalar(1e3/Ee));let be=$.map(st=>st.clone().add(K.carPosition).project(this.camera)),Ne=be.map(st=>(st.x+1)/2),lt=be.map(st=>(1-st.y)/2);this.framing={...t.framing,vehicleFrame:{left:Math.min(...Ne),top:Math.min(...lt),width:Math.max(...Ne)-Math.min(...Ne),height:Math.max(...lt)-Math.min(...lt),bottom:Math.max(...lt)}},this.renderFrame(!0),this.onCameraFrame?.(!0),n.frame=requestAnimationFrame(oe)};n.frame=requestAnimationFrame(oe)}setVehicle(e){this.finishEnvironmentMotion(),this.stopCameraMotion();for(let t of this.sceneCache.values())this.disposeSceneRoot(t.fields.root);this.sceneCache.clear(),this.car.removeFromParent(),this.egoContact.removeFromParent(),Fh(this.car),Fh(this.egoContact),this.car=e,this.scene.add(e),this.egoContact=Nh(e),this.scene.add(this.egoContact),this.current=null}setResolution(e,t){if(this.width===e&&this.height===t)return;this.width=e,this.height=t;let n=e<1920?2048:4096;this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.map?.dispose(),this.sun.shadow.mapPass?.dispose(),this.sun.shadow.map=null,this.sun.shadow.mapPass=null,this.sun.shadow.mapSize.set(n,n),this.renderer.shadowMap.needsUpdate=!0),this.renderer.setSize(e,t,!1),this.composer.setSize(e,t),this.mirror.getRenderTarget().setSize(e,t),this.blurTargets.forEach(i=>i.setSize(e,t)),this.waterReflectionTarget.setSize(e,t),this.vehicleDetail.uniforms.texel.value.set(1/e,1/t)}audit(){let e=this.car.position.clone().add(new R(0,.9,0)).project(this.camera),t=new Bt().setFromObject(this.car),n=[];for(let d of[t.min.x,t.max.x])for(let p of[t.min.y,t.max.y])for(let m of[t.min.z,t.max.z])n.push(new R(d,p,m).project(this.camera));let i=this.vegetation.children.map(d=>{let p=d.position,m=this.lawns.find(b=>{let g=b.geometry.parameters;return Math.abs(p.x-b.position.x)<g.width/2-1&&Math.abs(p.z-b.position.z)<g.height/2-1});return{x:p.x,z:p.z,insideLawn:!!m}}),r=Math.min(...n.map(d=>d.x)),a=Math.max(...n.map(d=>d.x)),o=Math.min(...n.map(d=>d.y)),l=Math.max(...n.map(d=>d.y)),c=[],h=0;this.car.traverse(d=>{if(d.isMesh){d.name==="Object_39"&&h++;for(let p of Array.isArray(d.material)?d.material:[d.material])p.name==="glass"&&c.push({opacity:p.opacity,transparent:p.transparent,transmission:p.transmission||0,roughness:p.roughness,envMapIntensity:p.envMapIntensity})}});let u=["05","08"].includes(this.current)?[-1,1].flatMap(d=>[-28.9,-51.1].map(p=>{let m=new R(d*11.1,0,p).project(this.camera);return{x:(m.x+1)/2,y:(1-m.y)/2}})):null;return{...this.state,dividedRoad:this.dividedRoad,groundReflection:this.groundReflectionAudit,shadow:this.shadowFrameAudit,environmentGrowth:{buildings:this.environmentGrowth.buildings.value,trees:this.environmentGrowth.trees.value},palette:this.palette,roadColor:this.mat.road.color.getHexString(),groundColor:this.mat.ground.color.getHexString(),lightIntensity:[this.hemi.intensity,this.sun.intensity,this.fill.intensity],framing:this.framing,environmentSignature:this.environmentSignature,glass:c,exhaustCount:h,contactPatches:this.egoContact.children.length,junctionFrame:u,vehicleSpec:this.car.userData.vehicleSpec,junctionDimensions:this.junctionDimensions,parkingReplica:this.parkingReplica,parkedVehicles:this.parkedVehicles||[],buildingOwnedCount:this.root.children.filter(d=>d.userData.buildingOwned).length,buildingShadowCasters:this.root.children.filter(d=>d.userData.buildingOwned&&d.castShadow).length,buildingVSMParticipants:this.root.children.filter(d=>d.userData.buildingOwned&&(d.castShadow||d.receiveShadow)).length,roadworkZone:this.roadworkZone,pedestrianPassages:this.pedestrianPassages,rampDimensions:this.rampDimensions,vehicleDimensions:t.getSize(new R).toArray(),vehicleBounds:{left:(r+1)/2,top:(1-l)/2,width:(a-r)/2,height:(l-o)/2,bottom:(1-o)/2},center:{x:(e.x+1)/2,y:(1-e.y)/2},roadElevation:this.car.position.y-.02,roadSlope:0,horizon:this.environmentTone.value?"shared smootherstep from 65m to 300m":"original material-specific smootherstep",treePlacements:i,buildingsPlaced:this.buildingPlacements,waterBounds:this.waterBounds,parkingBays:this.parkingBays,parkingColumns:this.parkingColumns.map(d=>d.position.toArray()),vehiclePhysicalLength:this.car.userData.vehicleSpec.length||4.85,geometry:this.current,geometrySignature:this.geometrySignature,camera:this.camera.position.toArray(),car:this.car.position.toArray()}}};var cr=[{key:"road",name:"Road",group:"open",layouts:[["02","Straight"],["09","Two lanes"],["13","Curved"]],buildings:!0,waterfront:!0,trees:!0,roadworks:!0},{key:"elevated",name:"Elevated road",group:"open",layouts:[["03","Elevated"]],buildings:!0,trees:!0},{key:"junction",name:"Junction",group:"open",layouts:[["05","Crossroads"],["08","T-junction"]],buildings:!0,trees:!0},{key:"ramp",name:"Ramp",group:"open",layouts:[["06","Exit"],["07","Merge"]]},{key:"parking",name:"Indoor parking",group:"closed",layouts:[["10","Aisle"],["14","Overhead"],["16","Aisle raised"]]},{key:"outdoor",name:"Outdoor parking",group:"closed",layouts:[["17","Default"],["18","Raised"],["19","Bird\u2019s-eye"]],buildings:!0,trees:!0}],jf={"01":"02","04":"09",12:"02",15:"10",11:"09"};var Yf=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(f){r=f.instance,r.exports.__wasm_call_ctors()});function o(f){for(var _=new Uint8Array(f.length),x=0;x<f.length;++x){var v=f.charCodeAt(x);_[x]=v>96?v-97:v>64?v-39:v+4}for(var w=0,x=0;x<f.length;++x)_[w++]=_[x]<60?n[_[x]]:(_[x]-60)*64+_[++x];return _.buffer.slice(0,w)}function l(f,_,x,v,w,T,C){var A=f.exports.sbrk,M=v+3&-4,y=A(M*w),I=A(T.length),L=new Uint8Array(f.exports.memory.buffer);L.set(T,I);var U=_(y,v,w,I,T.length);if(U==0&&C&&C(y,M,w),x.set(L.subarray(y,y+v*w)),A(y-A(0)),U!=0)throw new Error("Malformed buffer data: "+U)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function p(f){var _={object:new Worker(f),pending:0,requests:{}};return _.object.onmessage=function(x){var v=x.data;_.pending-=v.count,_.requests[v.id][v.action](v.value),delete _.requests[v.id]},_}function m(f){for(var _="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+l.toString()+g.toString(),x=new Blob([_],{type:"text/javascript"}),v=URL.createObjectURL(x),w=u.length;w<f;++w)u[w]=p(v);for(var w=f;w<u.length;++w)u[w].object.postMessage({});u.length=f,URL.revokeObjectURL(v)}function b(f,_,x,v,w){for(var T=u[0],C=1;C<u.length;++C)u[C].pending<T.pending&&(T=u[C]);return new Promise(function(A,M){var y=new Uint8Array(x),I=++d;T.pending+=f,T.requests[I]={resolve:A,reject:M},T.object.postMessage({id:I,count:f,size:_,source:y,mode:v,filter:w},[y.buffer])})}function g(f){var _=f.data;if(!_.id)return self.close();self.ready.then(function(x){try{var v=new Uint8Array(_.count*_.size);l(x,x.exports[_.mode],v,_.count,_.size,_.source,x.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:v},[v.buffer])}catch(w){self.postMessage({id:_.id,count:_.count,action:"reject",value:w})}})}return{ready:a,supported:!0,useWorkers:function(f){m(f)},decodeVertexBuffer:function(f,_,x,v,w){l(r,r.exports.meshopt_decodeVertexBuffer,f,_,x,v,r.exports[c[w]])},decodeIndexBuffer:function(f,_,x,v){l(r,r.exports.meshopt_decodeIndexBuffer,f,_,x,v)},decodeIndexSequence:function(f,_,x,v){l(r,r.exports.meshopt_decodeIndexSequence,f,_,x,v)},decodeGltfBuffer:function(f,_,x,v,w,T){l(r,r.exports[h[w]],f,_,x,v,r.exports[c[T]])},decodeGltfBufferAsync:function(f,_,x,v,w){return u.length>0?b(f,_,x,h[v],c[w]):a.then(function(){var T=new Uint8Array(f*_);return l(r,r.exports[h[v]],T,f,_,x,r.exports[c[w]]),T})}}})();var Jc=class extends qn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new jh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new ou(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=di.extractUrlBase(e);a=di.resolveURL(c,this.path)}else a=di.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Js(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Qf){try{a[Qe.KHR_BINARY_GLTF]=new cu(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new mu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Qe.KHR_MATERIALS_UNLIT:a[u]=new qh;break;case Qe.KHR_DRACO_MESH_COMPRESSION:a[u]=new lu(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:a[u]=new hu;break;case Qe.KHR_MESH_QUANTIZATION:a[u]=new uu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Px(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Wh=class{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new me(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],kt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ri(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new oa(h),c.distance=u;break;case"spot":c=new aa(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Yn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},qh=class{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Xt}extendParams(e,t,n){let i=[];e.color=new me(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],kt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,wt))}return Promise.all(i)}},Xh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},jh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(o,o)}return Promise.all(r)}},Yh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Kh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Zh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new me(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],kt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,wt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Jh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},$h=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new me().setRGB(o[0],o[1],o[2],kt),Promise.all(r)}},Qh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},eu=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new me().setRGB(o[0],o[1],o[2],kt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,wt)),Promise.all(r)}},tu=class{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},nu=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},iu=class{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},su=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},ru=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},au=class{constructor(e){this.name=Qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}},ou=class{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==An.TRIANGLES&&c.mode!==An.TRIANGLE_STRIP&&c.mode!==An.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(let m of u){let b=new Re,g=new R,f=new sn,_=new R(1,1,1),x=new Nr(m.geometry,m.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,v),l.SCALE&&_.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,b.compose(g,f,_));for(let v in l)if(v==="_COLOR_0"){let w=l[v];x.instanceColor=new Ti(w.array,w.itemSize,w.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&m.geometry.setAttribute(v,l[v]);bt.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),p.push(x)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},Qf="glTF",Ca=12,Kf={JSON:1313821514,BIN:5130562},cu=class{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ca),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Qf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ca,r=new DataView(e,Ca),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Kf.JSON){let c=new Uint8Array(e,Ca+a,o);this.content=n.decode(c)}else if(l===Kf.BIN){let c=Ca+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},lu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=fu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=fu[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],p=lr[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(let m in p.attributes){let b=p.attributes[m],g=l[m];g!==void 0&&(b.normalized=g)}u(p)},o,c,kt,d)})})}},hu=class{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},uu=class{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}},$c=class extends ci{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,m=e*c,b=m-c,g=-2*p+3*d,f=p-d,_=1-g,x=f-d+u;for(let v=0;v!==o;v++){let w=a[b+v+o],T=a[b+v+l]*h,C=a[m+v+o],A=a[m+v]*h;r[v]=_*w+x*T+g*C+f*A}return r}},Ix=new sn,du=class extends $c{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Ix.fromArray(r).normalize().toArray(r),r}},An={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},lr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zf={9728:Ct,9729:Qt,9984:ec,9985:Qs,9986:os,9987:On},Jf={33071:zn,33648:Fs,10497:nn},Hh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Li={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Dx={CUBICSPLINE:void 0,LINEAR:Yi,STEP:ji},Vh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Lx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new jt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Un})),s.DefaultMaterial}function ps(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Yn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ux(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Fx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Nx(s){let e,t=s.extensions&&s.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Gh(t.attributes):e=s.indices+":"+Gh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Gh(s.targets[n]);return e}function Gh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function pu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ox(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var kx=new Re,mu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Px,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new ia(this.options.manager):this.textureLoader=new ca(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Js(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ps(r,o,i),Yn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(di.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Hh[i.type],o=lr[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Et(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Hh[i.type],c=lr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,b,g;if(p&&p!==u){let f=Math.floor(d/p),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count,x=t.cache.get(_);x||(b=new c(o,f*p,i.count*p/h),x=new Vs(b,p/h),t.cache.add(_,x)),g=new Gs(x,l,d%p/h,m)}else o===null?b=new c(i.count*l):b=new c(o,d,i.count*l),g=new Et(b,l,m);if(i.sparse!==void 0){let f=Hh.SCALAR,_=lr[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,w=new _(a[1],x,i.sparse.count*f),T=new c(a[2],v,i.sparse.count*l);o!==null&&(g=new Et(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let C=0,A=w.length;C<A;C++){let M=w[C];if(g.setX(M,T[C*l]),l>=2&&g.setY(M,T[C*l+1]),l>=3&&g.setZ(M,T[C*l+2]),l>=4&&g.setW(M,T[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Zf[d.magFilter]||Qt,h.minFilter=Zf[d.minFilter]||On,h.wrapS=Jf[d.wrapS]||nn,h.wrapT=Jf[d.wrapT]||nn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ct&&h.minFilter!==Qt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let m=d;t.isImageBitmapLoader===!0&&(m=function(b){let g=new Nt(b);g.needsUpdate=!0,d(g)}),t.load(di.resolveURL(u,r.path),m,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Yn(u,a),u.userData.mimeType=a.mimeType||Ox(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new js,qt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Xs,qt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return jt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Qe.KHR_MATERIALS_UNLIT]){let u=i[Qe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new me(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],kt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,wt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ot);let h=r.alphaMode||Vh.OPAQUE;if(h===Vh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Vh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Xt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Xt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Xt){let u=r.emissiveFactor;o.emissive=new me().setRGB(u[0],u[1],u[2],kt)}return r.emissiveTexture!==void 0&&a!==Xt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,wt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Yn(u,r),t.associations.set(u,{materials:e}),r.extensions&&ps(i,u,r),u})}createUniqueName(e){let t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return $f(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Nx(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=$f(new mt,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?Lx(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,m=h.length;p<m;p++){let b=h[p],g=a[p],f,_=c[p];if(g.mode===An.TRIANGLES||g.mode===An.TRIANGLE_STRIP||g.mode===An.TRIANGLE_FAN||g.mode===void 0)f=r.isSkinnedMesh===!0?new Ur(b,_):new Ie(b,_),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),g.mode===An.TRIANGLE_STRIP?f.geometry=Bh(f.geometry,va):g.mode===An.TRIANGLE_FAN&&(f.geometry=Bh(f.geometry,tr));else if(g.mode===An.LINES)f=new Or(b,_);else if(g.mode===An.LINE_STRIP)f=new Ji(b,_);else if(g.mode===An.LINE_LOOP)f=new kr(b,_);else if(g.mode===An.POINTS)f=new Br(b,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(f.geometry.morphAttributes).length>0&&Fx(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Yn(f,r),g.extensions&&ps(i,f,g),t.assignFinalMaterial(f),u.push(f)}for(let p=0,m=u.length;p<m;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&ps(i,u[0],r),u[0];let d=new It;r.extensions&&ps(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,m=u.length;p<m;p++)d.add(u[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new St(bn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ui(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Yn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Re;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Fr(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let p=i.channels[u],m=i.samplers[p.sampler],b=p.target,g=b.node,f=i.parameters!==void 0?i.parameters[m.input]:m.input,_=i.parameters!==void 0?i.parameters[m.output]:m.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",_)),c.push(m),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],m=u[2],b=u[3],g=u[4],f=[];for(let x=0,v=d.length;x<v;x++){let w=d[x],T=p[x],C=m[x],A=b[x],M=g[x];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let y=n._createAnimationTracks(w,T,C,A,M);if(y)for(let I=0;I<y.length;I++)f.push(y[I])}let _=new na(r,void 0,f);return Yn(_,i),_})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,kx)});for(let p=0,m=u.length;p<m;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Ws:c.length>1?h=new It:c.length===1?h=c[0]:h=new bt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Yn(h,r),r.extensions&&ps(n,h,r),r.matrix!==void 0){let u=new Re;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new It;n.name&&(r.name=i.createUniqueName(n.name)),Yn(r,n),n.extensions&&ps(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,p]of i.associations)(d instanceof qt||d instanceof Nt)&&u.set(d,p);return h.traverse(d=>{let p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];Li[r.path]===Li.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Li[r.path]){case Li.weights:c=Vn;break;case Li.rotation:c=Gn;break;case Li.translation:case Li.scale:c=Wn;break;default:switch(n.itemSize){case 1:c=Vn;break;case 2:case 3:default:c=Wn;break}break}let h=i.interpolation!==void 0?Dx[i.interpolation]:Yi,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let m=new c(l[d]+"."+Li[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=pu(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Gn?du:$c;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Bx(s,e,t){let n=e.attributes,i=new Bt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),o.normalized){let h=pu(lr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new R,l=new R;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,m=d.max;if(p!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(m[2]))),d.normalized){let b=pu(lr[d.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new rn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function $f(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=fu[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ze.workingColorSpace!==kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Yn(s,e),Bx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ux(s,e.targets,t):s})}async function gu({startup:s=!1}={}){let e;if(!s&&globalThis.__fullVehicleRequest)e=await globalThis.__fullVehicleRequest,delete globalThis.__fullVehicleRequest;else if(s&&globalThis.__startupVehicleRequest)e=await globalThis.__startupVehicleRequest,delete globalThis.__startupVehicleRequest;else{let r=await fetch(new URL(s?"./ego-vehicle-startup.glb.gz?v=17.9":"./ego-vehicle-ready.glb.gz",import.meta.url),{priority:s?"high":"low"});if(!r.ok)throw Error("Vehicle asset failed to load");e=await r.arrayBuffer()}let t=await new Response(new Blob([e]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer(),i=(await new Jc().setMeshoptDecoder(Yf).parseAsync(t,"")).scene.children[0];return i.name="Ego vehicle",i.traverse(r=>{if(r.isMesh){r.castShadow=!0,r.receiveShadow=!1;for(let a of Array.isArray(r.material)?r.material:[r.material])a.name==="body"&&(a.roughness=Math.max(a.roughness,.24),a.clearcoatRoughness=Math.max(a.clearcoatRoughness,.22)),a.name==="lights"&&(a.onBeforeCompile=o=>{o.vertexShader=`varying float vTail;
`+o.vertexShader,o.vertexShader=o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vTail=step(color.g*2.0,color.r);`),o.fragmentShader=`varying float vTail;
`+o.fragmentShader,o.fragmentShader=o.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance*=vTail;`)},a.needsUpdate=!0)}}),i}function ep(){let s=new It,e=new Ie(new an(2,1.7,4.85),new Xt);return e.position.y=.85,e.visible=!1,s.add(e),s.userData.vehicleSpec={wheels:[]},s}var ae=s=>document.getElementById(s),Ut=ae("preview"),gs=document.querySelector("header");gs.classList.toggle("is-scrolled",scrollY>1);var zx=new IntersectionObserver(([s])=>gs.classList.toggle("is-scrolled",!s.isIntersecting));zx.observe(ae("header-sentinel"));var Qc=document.querySelector("main");function rp(){if(Qc.hidden)return;let s=gs.getBoundingClientRect(),e=document.querySelector(".workspace").getBoundingClientRect();gs.style.setProperty("--workspace-left",`${Math.max(0,e.left-s.left)}px`),Qc.style.setProperty("--sidebar-top",`${s.height+parseFloat(getComputedStyle(Qc).paddingTop)}px`)}var ap=new ResizeObserver(rp);ap.observe(Qc);ap.observe(gs);rp();var Kt=new URLSearchParams(location.search),tl=Kt.get("scene"),ms=jf[tl]||tl,ln=cr.find(s=>s.layouts.some(([e])=>e===ms))||cr[0],ft=new Map(cr.map(s=>[s.key,{id:s.layouts[0][0],buildings:!!s.buildings,waterfront:s.key==="road"&&ms==="13",trees:!1,vehicle:!0,roadworks:!1}]));ft.get(ln.key).id=ms&&ln.layouts.some(([s])=>s===ms)?ms:ln.layouts[0][0];Object.assign(ft.get("road"),{shape:ms==="13"?"curved":"straight",laneCount:ms==="09"?2:6,cameraView:ln.key==="road"&&Kt.get("view")==="high"?"high":"low"});ft.get("junction").cameraView=ln.key==="junction"&&Kt.get("view")==="low"?"low":"high";ft.get("junction").junctionPosition=Kt.get("position")==="approaching"||ln.key==="junction"&&Kt.get("view")==="low"&&!Kt.has("position")?"approaching":"near";ft.get("junction").cameraView=ft.get("junction").junctionPosition==="near"?"high":"low";ft.get("elevated").cameraView=ln.key==="elevated"&&Kt.get("view")==="high"?"high":"low";ft.get("ramp").cameraView=ln.key==="ramp"&&Kt.get("view")==="high"?"high":"low";["2","4","6"].includes(Kt.get("lanes"))&&(ft.get("road").laneCount=Number(Kt.get("lanes")));tl==="01"&&(ft.get(ln.key).buildings=!1);tl==="12"&&(ft.get(ln.key).roadworks=!0);var op;try{op=localStorage.getItem("sr-theme")}catch{}var Hx=Kt.get("mode")||op||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),je=ln.key,gt=Hx==="dark"?"dark":"light",Vx=!1,Su=!1,Fi=Su&&["1","2","3"].includes(Kt.get("nav"))?Kt.get("nav"):"1",nl=["buildings","waterfront","trees","vehicle","roadworks"],gi=!1,Ia=!1,Da=!1;function _u(){let s=matchMedia("(max-width:760px)").matches,e=Math.min(s?1280:1920,Math.max(640,Math.ceil(Ut.clientWidth*Math.min(devicePixelRatio||1,2)/16)*16));return[e,Math.round(e*9/16)]}requestAnimationFrame(()=>requestAnimationFrame(()=>{document.documentElement.dataset.uiReady="true"}));var Gx=gu(),He=new Zc(ae("scene-canvas"),ep(),{width:_u()[0],height:_u()[1]});He.onCameraFrame=s=>{je==="junction"&&(s&&(Da=!1),Eu()),Ut.dataset.cameraMoving=String(s),Ut.dataset.cameraPose=JSON.stringify({position:He.camera.position.toArray(),aim:He.cameraAim.toArray(),offset:He.camera.view.offsetY,car:He.car.position.toArray(),anchor:He.captureCamera().anchor.toArray()}),s||(Ut.dataset.audit=JSON.stringify(He.audit()))};He.onEnvironmentFrame=s=>{Ut.dataset.environmentMoving=String(s),Ut.dataset.audit=JSON.stringify(He.audit())};document.addEventListener("visibilitychange",()=>{document.hidden&&(He.finishCameraMotion(),He.finishEnvironmentMotion())});matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",s=>{s.matches&&(He.finishCameraMotion(),He.finishEnvironmentMotion())});var tp=null,el=!0;function cp(){return ae("scene-canvas")}function Ni(){return cr.find(s=>s.key===je)}function Zn(){let s={...ft.get(je),mode:gt};for(let e of["buildings","waterfront","trees","roadworks"])s[e]=!!Ni()[e]&&!!s[e];return je==="road"&&(s.id=s.shape==="curved"?"13":s.laneCount===2?"09":"02"),s}function wu(){let s=new URLSearchParams;s.set("scene",je==="reference"?"reference":Zn().id),s.set("mode",gt),je==="road"&&s.set("lanes",Zn().laneCount),["road","ramp","junction","elevated"].includes(je)&&s.set("view",Zn().cameraView),je==="junction"&&s.set("position",Zn().junctionPosition),Su&&(s.set("study","1"),s.set("nav",Fi)),Kt.has("motion")&&s.set("motion",Kt.get("motion")),document.getElementById("credits-view")&&!document.getElementById("credits-view").hidden&&s.set("page","credits"),history.replaceState(null,"",`?${s}`)}var Ua=new Map,lp=new Map,hp=new Map,up=new Map([["open",ln.group==="open"?je:"road"],["closed",ln.group==="closed"?je:"parking"]]),dp='<svg class="folder-icon" width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M2.5 6V4.75A1.5 1.5 0 0 1 4 3.25h3.1c.4 0 .78.16 1.06.44l1.62 1.62a.75.75 0 0 0 .53.22H16A1.5 1.5 0 0 1 17.5 7.03v8.22A1.5 1.5 0 0 1 16 16.75H4a1.5 1.5 0 0 1-1.5-1.5V6Z" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round"/></svg>',Fa=document.createElement("div");Fa.className="nav-category-switch";Fa.setAttribute("role","group");Fa.setAttribute("aria-label","Scene category");for(let[s,e]of[["open","Driving"],["closed","Parking"]]){let t=document.createElement("button");t.type="button",t.innerHTML=dp,t.append(document.createTextNode(e)),t.setAttribute("aria-pressed",String(ln.group===s)),t.addEventListener("click",()=>{je=up.get(s),xn()}),hp.set(s,t),Fa.append(t)}ae("scenes").append(Fa);for(let[s,e]of[["open","Driving scenes"],["closed","Parking scenes"]]){let t=document.createElement("section"),n=document.createElement("h2"),i=document.createElement("div");t.className="scene-group",n.className="structure-heading",n.innerHTML=dp,n.append(document.createTextNode(e)),i.className="structure-items",i.id=`group-${s}`;for(let r of cr.filter(a=>a.group===s)){let a=document.createElement("button"),o=document.createElement("img"),l=document.createElement("span");a.type="button",a.className="scene",a.dataset.structure=r.key,o.className="scene-thumbnail",o.alt="",o.width=240,o.height=135,o.decoding="async",l.className="scene-label",l.textContent=r.name,a.append(o,l),a.addEventListener("click",()=>{je!==r.key&&(je=r.key,xn())}),i.append(a),Ua.set(r.key,a)}t.append(n,i),lp.set(s,t),ae("scenes").append(t)}var Rn=document.createElement("span");Rn.className="nav-pill";Rn.hidden=!0;Rn.setAttribute("aria-hidden","true");ae("scenes").prepend(Rn);var fp=new Map;if(Su){let s=document.createElement("div"),e=document.createElement("span"),t=document.createElement("div");s.className="nav-study",e.className="nav-study-label",e.textContent="\u5BFC\u822A\u65B9\u6848",t.className="nav-study-options",t.setAttribute("role","group"),t.setAttribute("aria-label","Navigation design");for(let[n,i]of[["1","01 \u5206\u7EC4"],["2","02 \u6A21\u5F0F"],["3","03 \u7F29\u7565\u56FE"]]){let r=document.createElement("button");r.type="button",r.textContent=i,r.setAttribute("aria-pressed",String(n===Fi)),r.addEventListener("click",()=>{Fi=n,bs(),wu()}),t.append(r),fp.set(n,r)}s.append(e,t),document.querySelector("header").after(s)}function pp(){document.documentElement.dataset.navDesign=Fi,up.set(Ni().group,je);for(let[s,e]of lp)e.hidden=Fi==="2"&&s!==Ni().group;for(let[s,e]of hp)e.setAttribute("aria-pressed",String(s===Ni().group));for(let[s,e]of fp)e.setAttribute("aria-pressed",String(s===Fi));for(let[s,e]of Ua){e.setAttribute("aria-current",String(s===je));let t=e.querySelector("img");if(Fi==="3"){let n=`assets/nav/${s}-${gt}.webp`;t.getAttribute("src")!==n&&(t.src=n)}}}pp();var kn=ae("scene-picker"),vi=ae("mobile-scene-menu"),Wx=ae("scenes"),qx=document.querySelector("aside"),Xx=ae("mobile-scene-nav"),La=matchMedia("(max-width:760px)"),yu=document.querySelector(".credits"),jx=document.querySelector(".appearance-control");function il(){vi.contains(document.activeElement)&&La.matches&&kn.focus({preventScroll:!0}),vi.classList.remove("is-open"),vi.inert=!0,vi.setAttribute("aria-hidden","true"),kn.setAttribute("aria-expanded","false"),kn.setAttribute("aria-label","Choose a scene")}function mp(){il(),(La.matches?Xx:qx).append(Wx),La.matches?ae("mobile-menu-footer").append(yu):jx.prepend(yu),requestAnimationFrame(bs)}kn.addEventListener("click",()=>{let s=kn.getAttribute("aria-expanded")!=="true";vi.classList.toggle("is-open",s),vi.inert=!s,vi.setAttribute("aria-hidden",String(!s)),kn.setAttribute("aria-expanded",String(s)),kn.setAttribute("aria-label",s?"Close scene menu":"Choose a scene"),s&&requestAnimationFrame(()=>{bs(),vi.getBoundingClientRect().top<gs.getBoundingClientRect().bottom&&window.scrollTo({top:0,behavior:"instant"})})});vi.addEventListener("keydown",s=>{s.key==="Escape"&&(il(),kn.focus({preventScroll:!0}))});kn.addEventListener("keydown",s=>{s.key==="Escape"&&il()});La.addEventListener("change",mp);mp();var bu=0,hr=null,vu=0,Mu=0;function bs(){pp();let s=Ua.get(je),e=ae("scenes");if(Fi!=="1"||!s?.getClientRects().length){Rn.hidden=!0,Rn.dataset.ready="false";return}let t=s.getBoundingClientRect(),n=e.getBoundingClientRect();Rn.style.width=t.width+"px",Rn.style.height=t.height+"px",Rn.style.transform=`translate3d(${t.left-n.left}px,${t.top-n.top}px,0)`,Rn.hidden=!1,Rn.dataset.ready!=="true"&&requestAnimationFrame(()=>{Rn.dataset.ready="true"})}document.addEventListener("pointerdown",()=>{document.documentElement.dataset.choiceInput="pointer"},!0);document.addEventListener("keydown",s=>{["Enter"," ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(s.key)&&(document.documentElement.dataset.choiceInput="keyboard")},!0);function Eu(){let s=ft.get("junction").junctionPosition==="near",e=je==="junction"&&!!He.cameraMotion,t=e||Da,n=e?He.cameraMotion.progress||0:Da?0:s?1:0;ae("junction-play").dataset.motionState=t?"playing":s?"replay":"ready",ae("junction-play").disabled=t,ae("junction-play-label").textContent=t?"Playing":s?"Replay":"Play",ae("junction-play-icon").setAttribute("d",s&&!t?"M3 8a7 7 0 1 1 1.5 7M3 3v5h5":"m7 4 8 6-8 6V4Z"),ae("junction-play").setAttribute("aria-label",t?"Approach animation playing":s?"Replay approach animation":"Play approach animation");let i=ae("junction-progress");i.style.setProperty("--progress",String(n)),i.setAttribute("aria-valuenow",String(Math.round(n*100))),i.setAttribute("aria-valuetext",t?"Approaching junction":s?"Stopped at junction":"Ready to approach")}function Yx(){let s=je==="reference"?null:Zn();if(s){for(let e of ae("road-controls").querySelectorAll("button"))e.setAttribute("aria-pressed",String(s[e.dataset.road])===e.dataset.value);for(let e of ae("parking-views").querySelectorAll("button"))e.setAttribute("aria-pressed",e.dataset.view===(je==="outdoor"?{17:"10",18:"16",19:"14"}[s.id]:s.id));for(let e of ae("layout-options").querySelectorAll("button"))e.setAttribute("aria-pressed",e.dataset.layout===s.id);for(let e of ae("junction-views").querySelectorAll("button"))e.setAttribute("aria-pressed",je==="junction"&&e.dataset.junctionView===s.cameraView);for(let e of ae("ramp-views").querySelectorAll("button"))e.setAttribute("aria-pressed",["ramp","elevated"].includes(je)&&e.dataset.rampView===s.cameraView);Eu(),Tu()}}function gp(){let s=Ni()?.group;if(!s)return;let e=ae("group-"+s);e.hidden=!1}document.querySelector(".wordmark").addEventListener("click",s=>{s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.button!==0||(s.preventDefault(),je="road",window.scrollTo({top:0,behavior:"instant"}),xn())});function xn(s="scene"){++Mu,ae("current-scene-name")&&(ae("current-scene-name").textContent=Ni().name),cancelAnimationFrame(vu),gp();for(let[e,t]of Ua)t.setAttribute("aria-current",e===je);bs(),Yx(),vu=requestAnimationFrame(()=>{vu=requestAnimationFrame(()=>{let e=performance.now();bi(!0,!1,s),Ut.dataset.renderMs=(performance.now()-e).toFixed(1)})})}function bi(s=!1,e=!1,t="scene"){let n=++Mu;ae("current-scene-name")&&(ae("current-scene-name").textContent=Ni().name),cancelAnimationFrame(bu);let i,r,a=matchMedia("(prefers-reduced-motion: reduce)").matches,o=s&&t==="growth"&&gi&&!a&&document.documentElement.dataset.choiceInput!=="keyboard",l=s&&t==="camera"&&gi&&!a&&document.documentElement.dataset.choiceInput!=="keyboard";if(s&&gi&&!a&&!l&&!o&&document.documentElement.dataset.choiceInput!=="keyboard"){let x=cp();i=document.createElement("canvas"),i.width=x.width,i.height=x.height;let v=i.getContext("2d");v.drawImage(x,0,0),hr&&(v.globalAlpha=Number(getComputedStyle(hr).opacity),v.drawImage(hr,0,0,i.width,i.height),v.globalAlpha=1),i.className="frame-cover",e&&(r=document.createElement("canvas"),r.width=1920,r.height=1080,r.getContext("2d").drawImage(i,0,0,1920,1080),i.width=1920,i.height=1080,v.drawImage(r,0,0))}document.querySelectorAll(".frame-cover").forEach(x=>x.remove()),hr=i||null,i&&Ut.append(i);let c=je==="reference",h=Ni(),u=c?null:Zn(),d=s&&!l&&!o&&!c&&gi;Ut.dataset.renderPending=String(d),c?tp.render(gt,el):(gi||!u.vehicle)&&He.update({...u,vehicle:gi&&u.vehicle},{cameraMotion:l,environmentMotion:o,deferRender:d}),ae("scene-canvas").hidden=!1,ae("reference-image").hidden=!0,Vx=c,ae("reference").setAttribute("aria-current",c),ae("scene-title").textContent=c?"Visual key":h.name,ae("scene-canvas").setAttribute("aria-label",c?`Visual key, ${gt}, BMW vehicle`:`${h.name}, ${gt}, ${nl.filter(x=>u[x]).join(", ")}`),document.documentElement.dataset.theme=gt;try{localStorage.setItem("sr-theme",gt)}catch{}document.querySelector(".credits").href=`credits.html?mode=${gt}&scene=${encodeURIComponent(c?"reference":u.id)}`;let p=ae("theme-toggle");p.setAttribute("aria-pressed",gt==="dark"),p.setAttribute("aria-label",`Switch to ${gt==="dark"?"light":"dark"} theme`),p.title=p.getAttribute("aria-label");for(let x of nl){let v=x==="vehicle"||!c&&!!h[x];ae(x).closest("label").hidden=!v,ae(x).disabled=!v,ae(x).checked=c?x==="vehicle"&&el:v&&u[x]}let m=!c&&h.group==="closed",b=!c&&!m&&h.key!=="road"&&h.layouts.length>1;if(ae("layout-control").hidden=!b,b){ae("layout-label").textContent=h.key==="junction"?"Junction type":"Ramp type",ae("layout").replaceChildren(...h.layouts.map(([x,v])=>new Option(v,x))),ae("layout").value=u.id,ae("layout-options").dataset.structure!==h.key&&(ae("layout-options").replaceChildren(...h.layouts.map(([x,v])=>{let w=document.createElement("button");return w.type="button",w.textContent=v.replace("High-angle ","").replace("crossroads","Crossroads"),w.dataset.layout=x,w.addEventListener("click",()=>{ft.get(je).id=x,xn("layout")}),w})),ae("layout-options").dataset.structure=h.key);for(let x of ae("layout-options").querySelectorAll("button"))x.setAttribute("aria-pressed",x.dataset.layout===u.id)}ae("parking-views").hidden=!m,ae("parking-control").hidden=!m,ae("road-controls").hidden=c||h.key!=="road";let g=!c&&h.key==="junction";ae("junction-camera-control").hidden=!0,ae("junction-position-control").hidden=!g,Eu();for(let x of ae("junction-views").querySelectorAll("button"))x.disabled=!g,x.setAttribute("aria-pressed",g&&x.dataset.junctionView===u.cameraView);let f=!c&&["ramp","elevated"].includes(h.key);ae("ramp-camera-control").hidden=!f;for(let x of ae("ramp-views").querySelectorAll("button"))x.disabled=!f,x.setAttribute("aria-pressed",f&&x.dataset.rampView===u.cameraView);for(let x of ae("road-controls").querySelectorAll("button"))x.setAttribute("aria-pressed",!c&&String(u[x.dataset.road])===x.dataset.value);ae("camera-control").hidden=!(m||b||f),document.querySelector(".toolbar").hidden=!(m||b||f);for(let x of ae("parking-views").querySelectorAll("button"))x.setAttribute("aria-pressed",m&&x.dataset.view===(h.key==="outdoor"?{17:"10",18:"16",19:"14"}[u.id]:u.id));for(let[x,v]of Ua)v.setAttribute("aria-current",x===je);Ut.dataset.mode=gt,Ut.setAttribute("aria-busy",String(!gi&&(c?el:u.vehicle))),!d&&(c||He.state)&&(Ut.dataset.audit=JSON.stringify(c?tp.audit():He.audit())),ae("download").disabled=!Ia||d,ae("download").title=Ia?"Download PNG":"Preparing full-quality PNG",wu(),document.querySelector(".wordmark").href=`./?scene=02&mode=${gt}&lanes=6&view=low`,gp(),Tu(),bs();let _=()=>{if(n===Mu&&(d&&(He.renderFrame(),Ut.dataset.audit=JSON.stringify(He.audit()),Ut.dataset.renderPending="false",ae("download").disabled=!Ia),i)){let x=()=>{i.remove(),hr===i&&(hr=null)};if(e){let v=i.getContext("2d"),w=performance.now(),T=gt==="dark",C=600,A=M=>{let y=Math.min(1,(M-w)/480),I=y*y*(3-2*y),L=T?1920+C-(1920+2*C)*I:-C+(1920+2*C)*I;v.clearRect(0,0,1920,1080),v.globalCompositeOperation="source-over",v.drawImage(r,0,0),v.globalCompositeOperation="destination-in";let U=v.createLinearGradient(L-C/2,0,L+C/2,0);U.addColorStop(0,T?"#000":"#0000"),U.addColorStop(1,T?"#0000":"#000"),v.fillStyle=U,v.fillRect(0,0,1920,1080),v.globalCompositeOperation="source-over",y<1?bu=requestAnimationFrame(A):x()};bu=requestAnimationFrame(A)}else{let v=i.animate([{opacity:1},{opacity:0}],{duration:t==="element"?240:t==="layout"?300:220,easing:"cubic-bezier(.22,.8,.25,1)"});v.onfinish=x}}};d?He.renderer.compileAsync(He.scene,He.camera).then(_).catch(x=>{console.error(x),_()}):_()}function Tu(){for(let s of document.querySelectorAll(".view-segments")){if(s.hidden||s.closest("[hidden]"))continue;let e=s.querySelector("[aria-pressed=true]");e&&(s.style.setProperty("--selection-x",e.offsetLeft+"px"),s.style.setProperty("--selection-width",e.offsetWidth+"px"))}}window.addEventListener("resize",()=>{He.finishCameraMotion(),He.finishEnvironmentMotion(),Tu(),bs();let[s,e]=_u();(He.width!==s||He.height!==e)&&(He.setResolution(s,e),xn())});new ResizeObserver(()=>{bs()}).observe(ae("scenes"));for(let s of ae("road-controls").querySelectorAll("button"))s.addEventListener("click",()=>{let e=s.dataset.road,t=e==="laneCount"?Number(s.dataset.value):s.dataset.value;ft.get("road")[e]!==t&&(ft.get("road")[e]=t,xn(e==="cameraView"?"camera":"layout"))});for(let s of ae("ramp-views").querySelectorAll("button"))s.addEventListener("click",()=>{ft.get(je).cameraView!==s.dataset.rampView&&(ft.get(je).cameraView=s.dataset.rampView,xn("camera"))});for(let s of ae("junction-views").querySelectorAll("button"))s.addEventListener("click",()=>{ft.get("junction").cameraView!==s.dataset.junctionView&&(ft.get("junction").cameraView=s.dataset.junctionView,xn("camera"))});ae("junction-play").addEventListener("click",()=>{if(Da||He.cameraMotion)return;let s=ft.get("junction");s.junctionPosition==="near"&&(s.junctionPosition="approaching",s.cameraView="low",He.update(Zn())),Da=!0,s.junctionPosition="near",s.cameraView="high",xn("camera")});var Pa=null,Kn=gt,Ui=null,xu=null;function Kx(s){if(Kn===s)return;Kn=s;let e=matchMedia("(prefers-reduced-motion: reduce)").matches;if(e||Lu(s==="dark"),Pa){Ui&&(Ui.updatePlaybackRate(s===xu?1:-1),Ui.play());return}let t=()=>{gt=s,bi(!1)};if(!document.startViewTransition||e){gt=s,bi(!e,!0);return}let n=ae("theme-toggle").getBoundingClientRect(),i=n.left+n.width/2,r=n.top+n.height/2,a=140,o=Math.hypot(Math.max(i,innerWidth-i),Math.max(r,innerHeight-r))+a,l=document.getElementById("theme-wipe-style")||document.head.appendChild(Object.assign(document.createElement("style"),{id:"theme-wipe-style"}));l.textContent=`::view-transition-old(root){z-index:1;mask:none}::view-transition-new(root){z-index:2;mask-image:radial-gradient(circle at ${i}px ${r}px,#000 max(0px,calc(var(--theme-radius) - ${a}px)),transparent max(1px,var(--theme-radius)));mask-repeat:no-repeat}`,document.documentElement.classList.add("theme-changing"),xu=s;let c=document.startViewTransition(t);Pa=c,c.ready.then(()=>{Ui=document.documentElement.animate([{"--theme-radius":"0px"},{"--theme-radius":`${o}px`}],{duration:400,easing:"cubic-bezier(.65,0,.35,1)",fill:"both",pseudoElement:"::view-transition-new(root)"}),Kn!==xu&&(Ui.currentTime=0,Ui.reverse()),Ui.onfinish=()=>{Pa===c&&gt!==Kn&&(gt=Kn,bi(!1))}}).catch(()=>{gt!==Kn&&(gt=Kn,bi(!1))}),c.finished.catch(()=>{}).finally(()=>{Pa===c&&(Pa=null,Ui=null,document.documentElement.classList.remove("theme-changing"),gt!==Kn&&(gt=Kn,bi(!1)))})}ae("theme-toggle").addEventListener("click",()=>Kx(Kn==="dark"?"light":"dark"));var np=document.querySelector("main"),ip=ae("credits-view"),sp=0;function Na(s,e=!1){s&&(sp=scrollY,il()),np.hidden=s,ip.hidden=!s,gs.classList.toggle("credits-open",s),kn.hidden=s,document.querySelector(".site-signature").hidden=s,document.title=s?"Credits \xB7 DriveScene Studio":"DriveScene Studio";let t=s?ip:np;if(matchMedia("(prefers-reduced-motion: reduce)").matches||t.animate([{opacity:0,transform:"translateY(4px)"},{opacity:1,transform:"translateY(0)"}],{duration:180,easing:"cubic-bezier(.22,1,.36,1)"}),e){let n=new URLSearchParams(location.search);n.set("page","credits"),history.pushState({srCredits:!0},"",`?${n}`)}scrollTo({top:s?0:sp,behavior:"instant"}),s?ae("credits-title").focus({preventScroll:!0}):(La.matches?kn:yu).focus({preventScroll:!0})}document.querySelector(".credits").addEventListener("click",s=>{s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||(s.preventDefault(),Na(!0,!0))});ae("credits-back").addEventListener("click",s=>{s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||(s.preventDefault(),history.state?.srCredits?history.back():(Na(!1),wu()))});document.querySelector(".wordmark").addEventListener("click",s=>{s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||(s.preventDefault(),Na(!1),je="road",Object.assign(ft.get("road"),{id:"02",shape:"straight",laneCount:6,cameraView:"low"}),xn())});window.addEventListener("popstate",()=>Na(new URLSearchParams(location.search).get("page")==="credits"));for(let s of nl)ae(s).addEventListener("change",()=>{je==="reference"?el=ae("vehicle").checked:ft.get(je)[s]=ae(s).checked,xn(["buildings","trees"].includes(s)?"growth":"element")});for(let s of ae("parking-views").querySelectorAll("button"))s.addEventListener("click",()=>{let e=je==="outdoor"?{10:"17",16:"18",14:"19"}[s.dataset.view]:s.dataset.view;ft.get(je).id!==e&&(ft.get(je).id=e,xn("camera"))});ae("layout").addEventListener("change",()=>{ft.get(je).id=ae("layout").value,xn("layout")});function Zx(){if(je==="reference")return`waterfront-study-${gt}-1920x1080`;let s=Zn();return`${je}-${s.id}${je==="road"?"-"+s.laneCount+"lanes-"+s.cameraView:je==="junction"?"-"+s.junctionPosition+"-"+s.cameraView:["ramp","elevated"].includes(je)?"-"+s.cameraView:""}-${gt}-${nl.map(e=>`${e}-${s[e]?"on":"off"}`).join("-")}`}ae("download").addEventListener("click",()=>{if(!Ia)return;He.finishCameraMotion(),He.finishEnvironmentMotion();let s=Zx(),[e,t]=[He.width,He.height];ae("download").disabled=!0;try{He.setResolution(1920,1080),He.update(Zn()),cp().toBlob(n=>{if(n){let i=document.createElement("a");i.href=URL.createObjectURL(n),i.download=s+".png",i.click(),setTimeout(()=>URL.revokeObjectURL(i.href),5e3)}})}finally{He.setResolution(e,t),bi(!1)}});try{bi()}catch(s){throw ae("status").textContent="This preview requires WebGL. Please reopen in a modern browser.",s}if(Kt.get("page")==="credits"){Na(!0);let s=new URLSearchParams(location.search);s.set("page","credits"),history.replaceState(null,"",`?${s}`)}async function bp(s,e=!1,t=!1){delete Ut.dataset.loadError,He.setVehicle(s),He.update({...Zn(),vehicle:!0},{deferRender:!0}),await He.renderer.compileAsync(He.scene,He.camera),He.renderFrame(),await new Promise(requestAnimationFrame),He.renderFrame(),gi=!0,Ia=e,ae("status").replaceChildren(),bi(t,!1,"element"),Ut.dataset.vehicleReady="true",Ut.dataset.vehicleQuality=e?"full":"startup"}function vp(s){Ut.dataset.loadError="true",console.error(s),ae("status").textContent=gi?"Full-quality export is unavailable. ":"Vehicle could not load. ";let e=document.createElement("button");e.type="button",e.textContent="Retry",e.addEventListener("click",()=>{e.disabled=!0,delete Ut.dataset.loadError,gu().then(t=>bp(t,!0)).catch(vp)}),ae("status").append(e)}Gx.then(s=>bp(s,!0)).catch(vp);
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
