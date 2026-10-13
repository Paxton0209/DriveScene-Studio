var Jn,ki;function Eu(s){try{let e=window.AudioContext||window.webkitAudioContext;if(!e)return;Jn??=new e,Jn.state!=="running"&&Jn.resume();let t=Jn.currentTime;if(ki){ki.gain.gain.cancelScheduledValues(t),ki.gain.gain.setTargetAtTime(1e-4,t,.008);try{ki.osc.stop(t+.04)}catch{}}let n=Jn.createOscillator(),i=Jn.createGain(),r=Jn.createBiquadFilter(),a=new Float32Array([0,1,s?.14:.24,.045]);n.setPeriodicWave(Jn.createPeriodicWave(new Float32Array(4),a)),n.frequency.setValueAtTime(s?620:280,t),n.frequency.exponentialRampToValueAtTime(s?300:690,t+.17),n.frequency.exponentialRampToValueAtTime(s?260:640,t+.25),r.type="lowpass",r.Q.value=.65,r.frequency.setValueAtTime(s?1850:1e3,t),r.frequency.exponentialRampToValueAtTime(s?900:2400,t+.21),i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.075,t+.018),i.gain.exponentialRampToValueAtTime(.038,t+.095),i.gain.exponentialRampToValueAtTime(1e-4,t+.27),n.connect(r),r.connect(i),i.connect(Jn.destination),n.start(t),n.stop(t+.29);let o=ki={osc:n,gain:i};n.onended=()=>{n.disconnect(),r.disconnect(),i.disconnect(),ki===o&&(ki=null)}}catch{}}var Au=Object.freeze({"6-4":.38,"4-2":.35,"6-2":.31}),Tu=Object.freeze({liftDelay:.41,stopTime:1.87});function Ru(s){let t=Math.min(2,2*s/10),n=Math.max(0,(s-10*t/2)/10),i=n+t,r=Math.max(0,n+t*.4-.8/.969),a=i-r,o=.45/.969,c=Tu.liftDelay/.969+o;return{brakeDuration:t,cruiseDuration:n,baseDuration:i,referenceLiftStart:r,baseLiftDuration:a,leadDuration:o,defaultLiftStart:c,duration:(r+a*1.05)*1.02,vehicleStopTime:Tu.stopTime/.969}}var Ua=Object.freeze({branchPaintStart:.07,laneSpeed:1.35,coastDuration:.7});var gd=0,Hl=1,bd=2;var Vl=1,vd=2,xn=3,Cn=0,Vt=1,Xt=2,In=0,Wi=1,la=2,Gl=3,Wl=4,xd=5,wi=100,yd=101,_d=102,Md=103,Sd=104,wd=200,Ed=201,Td=202,Ad=203,ho=204,uo=205,Rd=206,Cd=207,Pd=208,Id=209,Dd=210,Ld=211,Fd=212,Ud=213,Nd=214,Fo=0,Uo=1,No=2,qi=3,Oo=4,ko=5,Bo=6,zo=7,ql=0,Od=1,kd=2,di=0,Ho=1,Vo=2,Go=3,Ks=4,Wo=5,qo=6,Xo=7,Al="attached",Bd="detached",Xl=300,is=301,ss=302,jo=303,Yo=304,rs=306,Ei=1e3,Bn=1001,Ds=1002,kt=1003,Ko=1004;var as=1005;var Bt=1006,Js=1007;var Dn=1008;var Ln=1009,jl=1010,Yl=1011,Zs=1012,Jo=1013,Ci=1014,yn=1015,jt=1016,Zo=1017,$o=1018,$s=1020,Kl=35902,Jl=35899,Zl=1021,$l=1022,tn=1023,Ls=1026,Qs=1027,Qo=1028,ec=1029,Ql=1030,tc=1031;var nc=1033,ha=33776,ua=33777,da=33778,fa=33779,ic=35840,sc=35841,rc=35842,ac=35843,oc=36196,cc=37492,lc=37496,hc=37808,uc=37809,dc=37810,fc=37811,pc=37812,mc=37813,gc=37814,bc=37815,vc=37816,xc=37817,yc=37818,_c=37819,Mc=37820,Sc=37821,wc=36492,Ec=36494,Tc=36495,Ac=36283,Rc=36284,Cc=36285,Pc=36286;var Xi=2300,ji=2301,lo=2302,Rl=2400,Cl=2401,Pl=2402,zd=2500;var eh=0,pa=1,er=2,Hd=3200,ma=3201;var th=0,Vd=1,fi="",Tt="srgb",It="srgb-linear",wr="linear",et="srgb";var Gi=7680;var Il=519,Gd=512,Wd=513,qd=514,nh=515,Xd=516,jd=517,Yd=518,Kd=519,fo=35044;var ih="300 es",Rn=2e3,Er=2001;var si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cu=1234567,yr=Math.PI/180,Yi=180/Math.PI;function vn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[s&255]+Gt[s>>8&255]+Gt[s>>16&255]+Gt[s>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function We(s,e,t){return Math.max(e,Math.min(t,s))}function sh(s,e){return(s%e+e)%e}function Cp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Pp(s,e,t){return s!==e?(t-s)/(e-s):0}function _r(s,e,t){return(1-t)*s+t*e}function Ip(s,e,t,n){return _r(s,e,1-Math.exp(-t*n))}function Dp(s,e=1){return e-Math.abs(sh(s,e*2)-e)}function Lp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Fp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Up(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Np(s,e){return s+Math.random()*(e-s)}function Op(s){return s*(.5-Math.random())}function kp(s){s!==void 0&&(Cu=s);let e=Cu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bp(s){return s*yr}function zp(s){return s*Yi}function Hp(s){return(s&s-1)===0&&s!==0}function Vp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Gp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Wp(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*m,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*m,o*l);break;case"ZYZ":s.set(c*m,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function An(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function st(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var rt={DEG2RAD:yr,RAD2DEG:Yi,generateUUID:vn,clamp:We,euclideanModulo:sh,mapLinear:Cp,inverseLerp:Pp,lerp:_r,damp:Ip,pingpong:Dp,smoothstep:Lp,smootherstep:Fp,randInt:Up,randFloat:Np,randFloatSpread:Op,seededRandom:kp,degToRad:Bp,radToDeg:zp,isPowerOfTwo:Hp,ceilPowerOfTwo:Vp,floorPowerOfTwo:Gp,setQuaternionFromProperEuler:Wp,normalize:st,denormalize:An},ae=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},sn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],m=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=b;return}if(u!==b||c!==d||l!==f||h!==m){let g=1-o,p=c*d+l*f+h*m+u*b,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let _=Math.sqrt(y),E=Math.atan2(_,p*x);g=Math.sin(g*E)/_,o=Math.sin(o*E)/_}let v=o*x;if(c=c*g+d*v,l=l*g+f*v,h=h*g+m*v,u=u*g+b*v,g===1-o){let _=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=_,l*=_,h*=_,u*=_}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-o*f,e[t+2]=l*m+h*f+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zc.copy(this).projectOnVector(e),this.sub(Zc)}reflect(e){return this.sub(Zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zc=new C,Pu=new sn,He=class s{constructor(e,t,n,i,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],b=i[0],g=i[3],p=i[6],x=i[1],y=i[4],v=i[7],_=i[2],E=i[5],R=i[8];return r[0]=a*b+o*x+c*_,r[3]=a*g+o*y+c*E,r[6]=a*p+o*v+c*R,r[1]=l*b+h*x+u*_,r[4]=l*g+h*y+u*E,r[7]=l*p+h*v+u*R,r[2]=d*b+f*x+m*_,r[5]=d*g+f*y+m*E,r[8]=d*p+f*v+m*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=u*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=d*b,e[4]=(h*t-i*c)*b,e[5]=(i*r-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply($c.makeScale(e,t)),this}rotate(e){return this.premultiply($c.makeRotation(-e)),this}translate(e,t){return this.premultiply($c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},$c=new He;function rh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Fs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Jd(){let s=Fs("canvas");return s.style.display="block",s}var Iu={};function Us(s){s in Iu||(Iu[s]=!0,console.warn(s))}function Zd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Du=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lu=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qp(){let s={enabled:!0,workingColorSpace:It,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(i.r=ii(i.r),i.g=ii(i.g),i.b=ii(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(i.r=Ps(i.r),i.g=Ps(i.g),i.b=Ps(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?wr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Us("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Us("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[It]:{primaries:e,whitePoint:n,transfer:wr,toXYZ:Du,fromXYZ:Lu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:et,toXYZ:Du,fromXYZ:Lu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),s}var Xe=qp();function ii(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var gs,po=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=Fs("canvas")),gs.width=e.width,gs.height=e.height;let i=gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=gs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ii(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ii(t[n]/255)*255):t[n]=ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xp=0,Ns=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=vn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Qc(i[a].image)):r.push(Qc(i[a]))}else r=Qc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Qc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?po.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jp=0,el=new C,Nt=class s extends si{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Bn,i=Bn,r=Bt,a=Dn,o=tn,c=Ln,l=s.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=vn(),this.name="",this.source=new Ns(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(el).x}get height(){return this.source.getSize(el).y}get depth(){return this.source.getSize(el).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ei:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Ds:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ei:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Ds:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Xl;Nt.DEFAULT_ANISOTROPY=1;var ze=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],b=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,v=(f+1)/2,_=(p+1)/2,E=(h+d)/4,R=(u+b)/4,A=(m+g)/4;return y>v&&y>_?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=E/n,r=R/n):v>_?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=A/i):_<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(_),n=R/r,i=A/r),this.set(n,i,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-b)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mo=class extends si{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ze(0,0,e,t),this.scissorTest=!1,this.viewport=new ze(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new Nt(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ns(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ct=class extends mo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Tr=class extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var go=class extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zt=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wn):wn.fromBufferAttribute(r,a),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Na.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Na.copy(n.boundingBox)),Na.applyMatrix4(e.matrixWorld),this.union(Na)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),Oa.subVectors(this.max,ur),bs.subVectors(e.a,ur),vs.subVectors(e.b,ur),xs.subVectors(e.c,ur),bi.subVectors(vs,bs),vi.subVectors(xs,vs),Bi.subVectors(bs,xs);let t=[0,-bi.z,bi.y,0,-vi.z,vi.y,0,-Bi.z,Bi.y,bi.z,0,-bi.x,vi.z,0,-vi.x,Bi.z,0,-Bi.x,-bi.y,bi.x,0,-vi.y,vi.x,0,-Bi.y,Bi.x,0];return!tl(t,bs,vs,xs,Oa)||(t=[1,0,0,0,1,0,0,0,1],!tl(t,bs,vs,xs,Oa))?!1:(ka.crossVectors(bi,vi),t=[ka.x,ka.y,ka.z],tl(t,bs,vs,xs,Oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zn=[new C,new C,new C,new C,new C,new C,new C,new C],wn=new C,Na=new zt,bs=new C,vs=new C,xs=new C,bi=new C,vi=new C,Bi=new C,ur=new C,Oa=new C,ka=new C,zi=new C;function tl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){zi.fromArray(s,r);let o=i.x*Math.abs(zi.x)+i.y*Math.abs(zi.y)+i.z*Math.abs(zi.z),c=e.dot(zi),l=t.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Yp=new zt,dr=new C,nl=new C,rn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Yp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);let t=dr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(dr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(nl)),this.expandByPoint(dr.copy(e.center).sub(nl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},$n=new C,il=new C,Ba=new C,xi=new C,sl=new C,za=new C,rl=new C,Ki=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){il.copy(e).add(t).multiplyScalar(.5),Ba.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(il);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ba),o=xi.dot(this.direction),c=-xi.dot(Ba),l=xi.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(il).addScaledVector(Ba,d),f}intersectSphere(e,t){$n.subVectors(e.center,this.origin);let n=$n.dot(this.direction),i=$n.dot($n)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,i,r){sl.subVectors(t,e),za.subVectors(n,e),rl.crossVectors(sl,za);let a=this.direction.dot(rl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xi.subVectors(this.origin,e);let c=o*this.direction.dot(za.crossVectors(xi,za));if(c<0)return null;let l=o*this.direction.dot(sl.cross(xi));if(l<0||c+l>a)return null;let h=-o*xi.dot(rl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class s{constructor(e,t,n,i,r,a,o,c,l,h,u,d,f,m,b,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,d,f,m,b,g)}set(e,t,n,i,r,a,o,c,l,h,u,d,f,m,b,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/ys.setFromMatrixColumn(e,0).length(),r=1/ys.setFromMatrixColumn(e,1).length(),a=1/ys.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,m=l*h,b=l*u;t[0]=d+b*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,m=l*h,b=l*u;t[0]=d-b*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,b=o*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,m=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*c,f=a*l,m=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kp,e,Jp)}lookAt(e,t,n){let i=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),yi.crossVectors(n,hn),yi.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),yi.crossVectors(n,hn)),yi.normalize(),Ha.crossVectors(hn,yi),i[0]=yi.x,i[4]=Ha.x,i[8]=hn.x,i[1]=yi.y,i[5]=Ha.y,i[9]=hn.y,i[2]=yi.z,i[6]=Ha.z,i[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],b=n[6],g=n[10],p=n[14],x=n[3],y=n[7],v=n[11],_=n[15],E=i[0],R=i[4],A=i[8],S=i[12],M=i[1],I=i[5],L=i[9],F=i[13],z=i[2],N=i[6],H=i[10],J=i[14],G=i[3],se=i[7],re=i[11],de=i[15];return r[0]=a*E+o*M+c*z+l*G,r[4]=a*R+o*I+c*N+l*se,r[8]=a*A+o*L+c*H+l*re,r[12]=a*S+o*F+c*J+l*de,r[1]=h*E+u*M+d*z+f*G,r[5]=h*R+u*I+d*N+f*se,r[9]=h*A+u*L+d*H+f*re,r[13]=h*S+u*F+d*J+f*de,r[2]=m*E+b*M+g*z+p*G,r[6]=m*R+b*I+g*N+p*se,r[10]=m*A+b*L+g*H+p*re,r[14]=m*S+b*F+g*J+p*de,r[3]=x*E+y*M+v*z+_*G,r[7]=x*R+y*I+v*N+_*se,r[11]=x*A+y*L+v*H+_*re,r[15]=x*S+y*F+v*J+_*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],b=e[7],g=e[11],p=e[15];return m*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*f-n*c*f)+b*(+t*c*f-t*l*d+r*a*d-i*a*f+i*l*h-r*c*h)+g*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],b=e[13],g=e[14],p=e[15],x=u*g*l-b*d*l+b*c*f-o*g*f-u*c*p+o*d*p,y=m*d*l-h*g*l-m*c*f+a*g*f+h*c*p-a*d*p,v=h*b*l-m*u*l+m*o*f-a*b*f-h*o*p+a*u*p,_=m*u*c-h*b*c-m*o*d+a*b*d+h*o*g-a*u*g,E=t*x+n*y+i*v+r*_;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return e[0]=x*R,e[1]=(b*d*r-u*g*r-b*i*f+n*g*f+u*i*p-n*d*p)*R,e[2]=(o*g*r-b*c*r+b*i*l-n*g*l-o*i*p+n*c*p)*R,e[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*f-n*c*f)*R,e[4]=y*R,e[5]=(h*g*r-m*d*r+m*i*f-t*g*f-h*i*p+t*d*p)*R,e[6]=(m*c*r-a*g*r-m*i*l+t*g*l+a*i*p-t*c*p)*R,e[7]=(a*d*r-h*c*r+h*i*l-t*d*l-a*i*f+t*c*f)*R,e[8]=v*R,e[9]=(m*u*r-h*b*r-m*n*f+t*b*f+h*n*p-t*u*p)*R,e[10]=(a*b*r-m*o*r+m*n*l-t*b*l-a*n*p+t*o*p)*R,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*R,e[12]=_*R,e[13]=(h*b*i-m*u*i+m*n*d-t*b*d-h*n*g+t*u*g)*R,e[14]=(m*o*i-a*b*i-m*n*c+t*b*c+a*n*g-t*o*g)*R,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*R,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,b=a*h,g=a*u,p=o*u,x=c*l,y=c*h,v=c*u,_=n.x,E=n.y,R=n.z;return i[0]=(1-(b+p))*_,i[1]=(f+v)*_,i[2]=(m-y)*_,i[3]=0,i[4]=(f-v)*E,i[5]=(1-(d+p))*E,i[6]=(g+x)*E,i[7]=0,i[8]=(m+y)*R,i[9]=(g-x)*R,i[10]=(1-(d+b))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=ys.set(i[0],i[1],i[2]).length(),a=ys.set(i[4],i[5],i[6]).length(),o=ys.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],En.copy(this);let l=1/r,h=1/a,u=1/o;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Rn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),m,b;if(c)m=r/(a-r),b=a*r/(a-r);else if(o===Rn)m=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Er)m=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Rn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),m,b;if(c)m=1/(a-r),b=a/(a-r);else if(o===Rn)m=-2/(a-r),b=-(a+r)/(a-r);else if(o===Er)m=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ys=new C,En=new Ce,Kp=new C(0,0,0),Jp=new C(1,1,1),yi=new C,Ha=new C,hn=new C,Fu=new Ce,Uu=new sn,Pn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uu.setFromEuler(this),this.setFromQuaternion(Uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";var Ar=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Zp=0,Nu=new C,_s=new sn,Qn=new Ce,Va=new C,fr=new C,$p=new C,Qp=new sn,Ou=new C(1,0,0),ku=new C(0,1,0),Bu=new C(0,0,1),zu={type:"added"},e1={type:"removed"},Ms={type:"childadded",child:null},al={type:"childremoved",child:null},bt=class s extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new C,t=new Pn,n=new sn,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new He}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(Ou,e)}rotateY(e){return this.rotateOnAxis(ku,e)}rotateZ(e){return this.rotateOnAxis(Bu,e)}translateOnAxis(e,t){return Nu.copy(e).applyQuaternion(this.quaternion),this.position.add(Nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ou,e)}translateY(e){return this.translateOnAxis(ku,e)}translateZ(e){return this.translateOnAxis(Bu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Va.copy(e):Va.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(fr,Va,this.up):Qn.lookAt(Va,fr,this.up),this.quaternion.setFromRotationMatrix(Qn),i&&(Qn.extractRotation(i.matrixWorld),_s.setFromRotationMatrix(Qn),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zu),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(e1),al.child=e,this.dispatchEvent(al),al.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zu),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,$p),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Qp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};bt.DEFAULT_UP=new C(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=new C,ei=new C,ol=new C,ti=new C,Ss=new C,ws=new C,Hu=new C,cl=new C,ll=new C,hl=new C,ul=new ze,dl=new ze,fl=new ze,Si=class s{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Tn.subVectors(e,t),i.cross(Tn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Tn.subVectors(i,t),ei.subVectors(n,t),ol.subVectors(e,t);let a=Tn.dot(Tn),o=Tn.dot(ei),c=Tn.dot(ol),l=ei.dot(ei),h=ei.dot(ol),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ti.x),c.addScaledVector(a,ti.y),c.addScaledVector(o,ti.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return ul.setScalar(0),dl.setScalar(0),fl.setScalar(0),ul.fromBufferAttribute(e,t),dl.fromBufferAttribute(e,n),fl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ul,r.x),a.addScaledVector(dl,r.y),a.addScaledVector(fl,r.z),a}static isFrontFacing(e,t,n,i){return Tn.subVectors(n,t),ei.subVectors(e,t),Tn.cross(ei).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Tn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Ss.subVectors(i,n),ws.subVectors(r,n),cl.subVectors(e,n);let c=Ss.dot(cl),l=ws.dot(cl);if(c<=0&&l<=0)return t.copy(n);ll.subVectors(e,i);let h=Ss.dot(ll),u=ws.dot(ll);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ss,a);hl.subVectors(e,r);let f=Ss.dot(hl),m=ws.dot(hl);if(m>=0&&f<=m)return t.copy(r);let b=f*l-c*m;if(b<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(ws,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Hu.subVectors(r,i),o=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(Hu,o);let p=1/(g+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(Ss,a).addScaledVector(ws,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Ga={h:0,s:0,l:0};function pl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=sh(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=pl(a,r,e+1/3),this.g=pl(a,r,e),this.b=pl(a,r,e-1/3)}return Xe.colorSpaceToWorking(this,i),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=$d[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Xe.workingToColorSpace(Wt.copy(this),e),Math.round(We(Wt.r*255,0,255))*65536+Math.round(We(Wt.g*255,0,255))*256+Math.round(We(Wt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Wt.copy(this),t);let n=Wt.r,i=Wt.g,r=Wt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Tt){Xe.workingToColorSpace(Wt.copy(this),e);let t=Wt.r,n=Wt.g,i=Wt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(Ga);let n=_r(_i.h,Ga.h,t),i=_r(_i.s,Ga.s,t),r=_r(_i.l,Ga.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new xe;xe.NAMES=$d;var t1=0,Qt=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=vn(),this.name="",this.type="Material",this.blending=Wi,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ho,this.blendDst=uo,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ho&&(n.blendSrc=this.blendSrc),this.blendDst!==uo&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Il&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},en=class extends Qt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var At=new C,Wa=new ae,n1=0,ft=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:n1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fo,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wa.fromBufferAttribute(this,t),Wa.applyMatrix3(e),this.setXY(t,Wa.x,Wa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fo&&(e.usage=this.usage),e}};var Rr=class extends ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Cr=class extends ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var je=class extends ft{constructor(e,t,n){super(new Float32Array(e),t,n)}},i1=0,bn=new Ce,ml=new bt,Es=new C,un=new zt,pr=new zt,Ut=new C,vt=class s extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rh(e)?Cr:Rr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return ml.lookAt(e),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new je(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(un.min,pr.min),un.expandByPoint(Ut),Ut.addVectors(un.max,pr.max),un.expandByPoint(Ut)):(un.expandByPoint(pr.min),un.expandByPoint(pr.max))}un.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ut.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ut));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ut.fromBufferAttribute(o,l),c&&(Es.fromBufferAttribute(e,l),Ut.add(Es)),i=Math.max(i,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ft(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let A=0;A<n.count;A++)o[A]=new C,c[A]=new C;let l=new C,h=new C,u=new C,d=new ae,f=new ae,m=new ae,b=new C,g=new C;function p(A,S,M){l.fromBufferAttribute(n,A),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(I),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(I),o[A].add(b),o[S].add(b),o[M].add(b),c[A].add(g),c[S].add(g),c[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let A=0,S=x.length;A<S;++A){let M=x[A],I=M.start,L=M.count;for(let F=I,z=I+L;F<z;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let y=new C,v=new C,_=new C,E=new C;function R(A){_.fromBufferAttribute(i,A),E.copy(_);let S=o[A];y.copy(S),y.sub(_.multiplyScalar(_.dot(S))).normalize(),v.crossVectors(E,S);let I=v.dot(c[A])<0?-1:1;a.setXYZW(A,y.x,y.y,y.z,I)}for(let A=0,S=x.length;A<S;++A){let M=x[A],I=M.start,L=M.count;for(let F=I,z=I+L;F<z;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new C,r=new C,a=new C,o=new C,c=new C,l=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let b=0,g=c.length;b<g;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new ft(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vu=new Ce,Hi=new Ki,qa=new rn,Gu=new C,Xa=new C,ja=new C,Ya=new C,gl=new C,Ka=new C,Wu=new C,Ja=new C,Ie=class extends bt{constructor(e=new vt,t=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Ka.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(gl.fromBufferAttribute(u,e),a?Ka.addScaledVector(gl,h):Ka.addScaledVector(gl.sub(t),h))}t.add(Ka)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(r),Hi.copy(e.ray).recast(e.near),!(qa.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(qa,Gu)===null||Hi.origin.distanceToSquared(Gu)>(e.far-e.near)**2))&&(Vu.copy(r).invert(),Hi.copy(e.ray).applyMatrix4(Vu),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,_=y;v<_;v+=3){let E=o.getX(v),R=o.getX(v+1),A=o.getX(v+2);i=Za(this,p,e,n,l,h,u,E,R,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let x=o.getX(g),y=o.getX(g+1),v=o.getX(g+2);i=Za(this,a,e,n,l,h,u,x,y,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,_=y;v<_;v+=3){let E=v,R=v+1,A=v+2;i=Za(this,p,e,n,l,h,u,E,R,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let x=g,y=g+1,v=g+2;i=Za(this,a,e,n,l,h,u,x,y,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function s1(s,e,t,n,i,r,a,o){let c;if(e.side===Vt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Cn,o),c===null)return null;Ja.copy(o),Ja.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Ja);return l<t.near||l>t.far?null:{distance:l,point:Ja.clone(),object:s}}function Za(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,Xa),s.getVertexPosition(c,ja),s.getVertexPosition(l,Ya);let h=s1(s,e,t,n,Xa,ja,Ya,Wu);if(h){let u=new C;Si.getBarycoord(Wu,Xa,ja,Ya,u),i&&(h.uv=Si.getInterpolatedAttribute(i,o,c,l,u,new ae)),r&&(h.uv1=Si.getInterpolatedAttribute(r,o,c,l,u,new ae)),a&&(h.normal=Si.getInterpolatedAttribute(a,o,c,l,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new C,materialIndex:0};Si.getNormal(Xa,ja,Ya,d.normal),h.face=d,h.barycoord=u}return h}var an=class s extends vt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(u,2));function m(b,g,p,x,y,v,_,E,R,A,S){let M=v/R,I=_/A,L=v/2,F=_/2,z=E/2,N=R+1,H=A+1,J=0,G=0,se=new C;for(let re=0;re<H;re++){let de=re*I-F;for(let Te=0;Te<N;Te++){let nt=Te*M-L;se[b]=nt*x,se[g]=de*y,se[p]=z,l.push(se.x,se.y,se.z),se[b]=0,se[g]=0,se[p]=E>0?1:-1,h.push(se.x,se.y,se.z),u.push(Te/R),u.push(1-re/A),J+=1}}for(let re=0;re<A;re++)for(let de=0;de<R;de++){let Te=d+de+N*re,nt=d+de+N*(re+1),Ke=d+(de+1)+N*(re+1),$e=d+(de+1)+N*re;c.push(Te,nt,$e),c.push(nt,Ke,$e),G+=6}o.addGroup(f,G,S),f+=G,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function os(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Yt(s){let e={};for(let t=0;t<s.length;t++){let n=os(s[t]);for(let i in n)e[i]=n[i]}return e}function r1(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ah(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}var qn={clone:os,merge:Yt},a1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tt=class extends Qt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a1,this.fragmentShader=o1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=r1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Pr=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Mi=new C,qu=new ae,Xu=new ae,St=class extends Pr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Yi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yi*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,qu,Xu),t.subVectors(Xu,qu)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ts=-90,As=1,bo=class extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new St(Ts,As,e,t);i.layers=this.layers,this.add(i);let r=new St(Ts,As,e,t);r.layers=this.layers,this.add(r);let a=new St(Ts,As,e,t);a.layers=this.layers,this.add(a);let o=new St(Ts,As,e,t);o.layers=this.layers,this.add(o);let c=new St(Ts,As,e,t);c.layers=this.layers,this.add(c);let l=new St(Ts,As,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Er)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ir=class extends Nt{constructor(e=[],t=is,n,i,r,a,o,c,l,h){super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vo=class extends Ct{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ir(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new an(5,5,5),r=new tt({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:In});r.uniforms.tEquirect.value=t;let a=new Ie(i,r),o=t.minFilter;return t.minFilter===Dn&&(t.minFilter=Bt),new bo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},Rt=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},c1={type:"move"},Os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),p=this._getHandJoint(l,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(c1)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Dr=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xe(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ji=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ks=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fo,this.updateRanges=[],this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Zt=new C,Bs=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var ju=new C,Yu=new ze,Ku=new ze,l1=new C,Ju=new Ce,$a=new C,bl=new rn,Zu=new Ce,vl=new Ki,Lr=class extends Ie{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Al,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new zt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$a),this.boundingBox.expandByPoint($a)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new rn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$a),this.boundingSphere.expandByPoint($a)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bl.copy(this.boundingSphere),bl.applyMatrix4(i),e.ray.intersectsSphere(bl)!==!1&&(Zu.copy(i).invert(),vl.copy(e.ray).applyMatrix4(Zu),!(this.boundingBox!==null&&vl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,vl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ze,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Al?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Bd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Yu.fromBufferAttribute(i.attributes.skinIndex,e),Ku.fromBufferAttribute(i.attributes.skinWeight,e),ju.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Ku.getComponent(r);if(a!==0){let o=Yu.getComponent(r);Ju.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(l1.copy(ju).applyMatrix4(Ju),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},zs=class extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ri=class extends Nt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=kt,h=kt,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$u=new Ce,h1=new Ce,Fr=class s{constructor(e=[],t=[]){this.uuid=vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ce;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:h1;$u.multiplyMatrices(o,t[r]),$u.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ri(t,e,e,tn,yn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new zs),this.bones.push(a),this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Ti=class extends ft{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Rs=new Ce,Qu=new Ce,Qa=[],ed=new zt,u1=new Ce,mr=new Ie,gr=new rn,Ur=class extends Ie{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ti(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,u1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),ed.copy(e.boundingBox).applyMatrix4(Rs),this.boundingBox.union(ed)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),gr.copy(e.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(n),e.ray.intersectsSphere(gr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Rs),Qu.multiplyMatrices(n,Rs),mr.matrixWorld=Qu,mr.raycast(e,Qa);for(let a=0,o=Qa.length;a<o;a++){let c=Qa[a];c.instanceId=r,c.object=this,t.push(c)}Qa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ti(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ri(new Float32Array(i*this.count),i,this.count,Qo,yn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xl=new C,d1=new C,f1=new He,$t=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=xl.subVectors(n,t).cross(d1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(xl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||f1.getNormalMatrix(e),i=this.coplanarPoint(xl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vi=new rn,p1=new ae(.5,.5),eo=new C,Hs=class{constructor(e=new $t,t=new $t,n=new $t,i=new $t,r=new $t,a=new $t){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],b=r[9],g=r[10],p=r[11],x=r[12],y=r[13],v=r[14],_=r[15];if(i[0].setComponents(l-a,f-h,p-m,_-x).normalize(),i[1].setComponents(l+a,f+h,p+m,_+x).normalize(),i[2].setComponents(l+o,f+u,p+b,_+y).normalize(),i[3].setComponents(l-o,f-u,p-b,_-y).normalize(),n)i[4].setComponents(c,d,g,v).normalize(),i[5].setComponents(l-c,f-d,p-g,_-v).normalize();else if(i[4].setComponents(l-c,f-d,p-g,_-v).normalize(),t===Rn)i[5].setComponents(l+c,f+d,p+g,_+v).normalize();else if(t===Er)i[5].setComponents(c,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){Vi.center.set(0,0,0);let t=p1.distanceTo(e.center);return Vi.radius=.7071067811865476+t,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(eo.x=i.normal.x>0?e.max.x:e.min.x,eo.y=i.normal.y>0?e.max.y:e.min.y,eo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(eo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Vs=class extends Qt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xo=new C,yo=new C,td=new Ce,br=new Ki,to=new rn,yl=new C,nd=new C,Zi=class extends bt{constructor(e=new vt,t=new Vs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)xo.fromBufferAttribute(t,i-1),yo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xo.distanceTo(yo);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(i),to.radius+=r,e.ray.intersectsSphere(to)===!1)return;td.copy(i).invert(),br.copy(e.ray).applyMatrix4(td);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let b=f,g=m-1;b<g;b+=l){let p=h.getX(b),x=h.getX(b+1),y=no(this,e,br,c,p,x,b);y&&t.push(y)}if(this.isLineLoop){let b=h.getX(m-1),g=h.getX(f),p=no(this,e,br,c,b,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let b=f,g=m-1;b<g;b+=l){let p=no(this,e,br,c,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){let b=no(this,e,br,c,m-1,f,m-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function no(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(xo.fromBufferAttribute(o,i),yo.fromBufferAttribute(o,r),t.distanceSqToSegment(xo,yo,yl,nd)>n)return;yl.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(yl);if(!(l<e.near||l>e.far))return{distance:l,point:nd.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var id=new C,sd=new C,Nr=class extends Zi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)id.fromBufferAttribute(t,i),sd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+id.distanceTo(sd);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Or=class extends Zi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Gs=class extends Qt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},rd=new Ce,Dl=new Ki,io=new rn,so=new C,kr=class extends bt{constructor(e=new vt,t=new Gs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(i),io.radius+=r,e.ray.intersectsSphere(io)===!1)return;rd.copy(i).invert(),Dl.copy(e.ray).applyMatrix4(rd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,b=f;m<b;m++){let g=l.getX(m);so.fromBufferAttribute(u,g),ad(so,g,c,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,b=f;m<b;m++)so.fromBufferAttribute(u,m),ad(so,m,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ad(s,e,t,n,i,r,a){let o=Dl.distanceSqToPoint(s);if(o<t){let c=new C;Dl.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Br=class extends Nt{constructor(e,t,n=Ci,i,r,a,o=kt,c=kt,l,h=Ls,u=1){if(h!==Ls&&h!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ns(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},zr=class extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var ai=class s extends vt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,b=[],g=n/2,p=0;x(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(d,3)),this.setAttribute("uv",new je(f,2));function x(){let v=new C,_=new C,E=0,R=(t-e)/n;for(let A=0;A<=r;A++){let S=[],M=A/r,I=M*(t-e)+e;for(let L=0;L<=i;L++){let F=L/i,z=F*c+o,N=Math.sin(z),H=Math.cos(z);_.x=I*N,_.y=-M*n+g,_.z=I*H,u.push(_.x,_.y,_.z),v.set(N,R,H).normalize(),d.push(v.x,v.y,v.z),f.push(F,1-M),S.push(m++)}b.push(S)}for(let A=0;A<i;A++)for(let S=0;S<r;S++){let M=b[S][A],I=b[S+1][A],L=b[S+1][A+1],F=b[S][A+1];(e>0||S!==0)&&(h.push(M,I,F),E+=3),(t>0||S!==r-1)&&(h.push(I,L,F),E+=3)}l.addGroup(p,E,0),p+=E}function y(v){let _=m,E=new ae,R=new C,A=0,S=v===!0?e:t,M=v===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),m++;let I=m;for(let L=0;L<=i;L++){let z=L/i*c+o,N=Math.cos(z),H=Math.sin(z);R.x=S*H,R.y=g*M,R.z=S*N,u.push(R.x,R.y,R.z),d.push(0,M,0),E.x=N*.5+.5,E.y=H*.5*M+.5,f.push(E.x,E.y),m++}for(let L=0;L<i;L++){let F=_+L,z=I+L;v===!0?h.push(z,z+1,F):h.push(z+1,z,F),A+=3}l.addGroup(p,A,v===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Hr=class s extends ai{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_o=class s extends vt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new je(r,3)),this.setAttribute("normal",new je(r.slice(),3)),this.setAttribute("uv",new je(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let y=new C,v=new C,_=new C;for(let E=0;E<t.length;E+=3)f(t[E+0],y),f(t[E+1],v),f(t[E+2],_),c(y,v,_,x)}function c(x,y,v,_){let E=_+1,R=[];for(let A=0;A<=E;A++){R[A]=[];let S=x.clone().lerp(v,A/E),M=y.clone().lerp(v,A/E),I=E-A;for(let L=0;L<=I;L++)L===0&&A===E?R[A][L]=S:R[A][L]=S.clone().lerp(M,L/I)}for(let A=0;A<E;A++)for(let S=0;S<2*(E-A)-1;S++){let M=Math.floor(S/2);S%2===0?(d(R[A][M+1]),d(R[A+1][M]),d(R[A][M])):(d(R[A][M+1]),d(R[A+1][M+1]),d(R[A+1][M]))}}function l(x){let y=new C;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(x),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){let x=new C;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];let v=g(x)/2/Math.PI+.5,_=p(x)/Math.PI+.5;a.push(v,1-_)}m(),u()}function u(){for(let x=0;x<a.length;x+=6){let y=a[x+0],v=a[x+2],_=a[x+4],E=Math.max(y,v,_),R=Math.min(y,v,_);E>.9&&R<.1&&(y<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),_<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,y){let v=x*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function m(){let x=new C,y=new C,v=new C,_=new C,E=new ae,R=new ae,A=new ae;for(let S=0,M=0;S<r.length;S+=9,M+=6){x.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),E.set(a[M+0],a[M+1]),R.set(a[M+2],a[M+3]),A.set(a[M+4],a[M+5]),_.copy(x).add(y).add(v).divideScalar(3);let I=g(_);b(E,M+0,x,I),b(R,M+2,y,I),b(A,M+4,v,I)}}function b(x,y,v,_){_<0&&x.x===1&&(a[y]=x.x-1),v.x===0&&v.z===0&&(a[y]=_/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new ae:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new C,i=[],r=[],a=[],o=new C,c=new Ce;for(let f=0;f<=e;f++){let m=f/e;i[f]=this.getTangentAt(m,new C)}r[0]=new C,a[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(We(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(We(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ws=class extends dn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ae){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Mo=class extends Ws{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function oh(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var ro=new C,_l=new oh,Ml=new oh,Sl=new oh,qs=class extends dn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(ro.subVectors(i[0],i[1]).add(i[0]),l=ro);let u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(ro.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ro),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),b=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);b<1e-4&&(b=1),m<1e-4&&(m=b),g<1e-4&&(g=b),_l.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,b,g),Ml.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,b,g),Sl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,b,g)}else this.curveType==="catmullrom"&&(_l.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ml.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Sl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(_l.calc(c),Ml.calc(c),Sl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function od(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function m1(s,e){let t=1-s;return t*t*e}function g1(s,e){return 2*(1-s)*s*e}function b1(s,e){return s*s*e}function Mr(s,e,t,n){return m1(s,e)+g1(s,t)+b1(s,n)}function v1(s,e){let t=1-s;return t*t*t*e}function x1(s,e){let t=1-s;return 3*t*t*s*e}function y1(s,e){return 3*(1-s)*s*s*e}function _1(s,e){return s*s*s*e}function Sr(s,e,t,n,i){return v1(s,e)+x1(s,t)+y1(s,n)+_1(s,i)}var Vr=class extends dn{constructor(e=new ae,t=new ae,n=new ae,i=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ae){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Sr(e,i.x,r.x,a.x,o.x),Sr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xs=class extends dn{constructor(e=new C,t=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new C){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Sr(e,i.x,r.x,a.x,o.x),Sr(e,i.y,r.y,a.y,o.y),Sr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gr=class extends dn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},So=class extends dn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wr=class extends dn{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Mr(e,i.x,r.x,a.x),Mr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wo=class extends dn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Mr(e,i.x,r.x,a.x),Mr(e,i.y,r.y,a.y),Mr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qr=class extends dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(od(o,c.x,l.x,h.x,u.x),od(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ae().fromArray(i))}return this}},cd=Object.freeze({__proto__:null,ArcCurve:Mo,CatmullRomCurve3:qs,CubicBezierCurve:Vr,CubicBezierCurve3:Xs,EllipseCurve:Ws,LineCurve:Gr,LineCurve3:So,QuadraticBezierCurve:Wr,QuadraticBezierCurve3:wo,SplineCurve:qr}),Eo=class extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cd[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new cd[i.type]().fromJSON(i))}return this}},Xr=class extends Eo{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Gr(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Wr(this.currentPoint.clone(),new ae(e,t),new ae(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new Vr(this.currentPoint.clone(),new ae(e,t),new ae(n,i),new ae(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new qr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,a,o,c),this}absellipse(e,t,n,i,r,a,o,c){let l=new Ws(e,t,n,i,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ai=class extends Xr{constructor(e){super(e),this.uuid=vn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Xr().fromJSON(i))}return this}};function M1(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Qd(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=A1(s,e,r,t)),s.length>80*t){o=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=t;d<i;d+=t){let f=s[d],m=s[d+1];f<o&&(o=f),m<c&&(c=m),f>h&&(h=f),m>u&&(u=m)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return jr(r,a,t,o,c,l,0),a}function Qd(s,e,t,n,i){let r;if(i===k1(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=ld(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=ld(a/n|0,s[a],s[a+1],r);return r&&js(r,r.next)&&(Kr(r),r=r.next),r}function $i(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(js(t,t.next)||_t(t.prev,t,t.next)===0)){if(Kr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function jr(s,e,t,n,i,r,a){if(!s)return;!a&&r&&D1(s,n,i,r);let o=s;for(;s.prev!==s.next;){let c=s.prev,l=s.next;if(r?w1(s,n,i,r):S1(s)){e.push(c.i,s.i,l.i),Kr(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=E1($i(s),e),jr(s,e,t,n,i,r,2)):a===2&&T1(s,e,t,n,i,r):jr($i(s),e,t,n,i,r,1);break}}}function S1(s){let e=s.prev,t=s,n=s.next;if(_t(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(i,r,a),u=Math.min(o,c,l),d=Math.max(i,r,a),f=Math.max(o,c,l),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&xr(i,o,r,c,a,l,m.x,m.y)&&_t(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function w1(s,e,t,n){let i=s.prev,r=s,a=s.next;if(_t(i,r,a)>=0)return!1;let o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,d=a.y,f=Math.min(o,c,l),m=Math.min(h,u,d),b=Math.max(o,c,l),g=Math.max(h,u,d),p=Ll(f,m,e,t,n),x=Ll(b,g,e,t,n),y=s.prevZ,v=s.nextZ;for(;y&&y.z>=p&&v&&v.z<=x;){if(y.x>=f&&y.x<=b&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&xr(o,h,c,u,l,d,y.x,y.y)&&_t(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=b&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&xr(o,h,c,u,l,d,v.x,v.y)&&_t(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=b&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&xr(o,h,c,u,l,d,y.x,y.y)&&_t(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=b&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&xr(o,h,c,u,l,d,v.x,v.y)&&_t(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function E1(s,e){let t=s;do{let n=t.prev,i=t.next.next;!js(n,i)&&tf(n,t,t.next,i)&&Yr(n,i)&&Yr(i,n)&&(e.push(n.i,t.i,i.i),Kr(t),Kr(t.next),t=s=i),t=t.next}while(t!==s);return $i(t)}function T1(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&U1(a,o)){let c=nf(a,o);a=$i(a,a.next),c=$i(c,c.next),jr(a,e,t,n,i,r,0),jr(c,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function A1(s,e,t,n){let i=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,l=Qd(s,o,c,n,!1);l===l.next&&(l.steiner=!0),i.push(F1(l))}i.sort(R1);for(let r=0;r<i.length;r++)t=C1(i[r],t);return t}function R1(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function C1(s,e){let t=P1(s,e);if(!t)return e;let n=nf(t,s);return $i(n,n.next),$i(t,t.next)}function P1(s,e){let t=e,n=s.x,i=s.y,r=-1/0,a;if(js(s,t))return t;do{if(js(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&ef(i<l?n:r,i,c,l,i<l?r:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);Yr(t,s)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&I1(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function I1(s,e){return _t(s.prev,s,e.prev)<0&&_t(e.next,s,s.next)<0}function D1(s,e,t,n){let i=s;do i.z===0&&(i.z=Ll(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,L1(i)}function L1(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function Ll(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function F1(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ef(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function xr(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&ef(s,e,t,n,i,r,a,o)}function U1(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!N1(s,e)&&(Yr(s,e)&&Yr(e,s)&&O1(s,e)&&(_t(s.prev,s,e.prev)||_t(s,e.prev,e))||js(s,e)&&_t(s.prev,s,s.next)>0&&_t(e.prev,e,e.next)>0)}function _t(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function js(s,e){return s.x===e.x&&s.y===e.y}function tf(s,e,t,n){let i=oo(_t(s,e,t)),r=oo(_t(s,e,n)),a=oo(_t(t,n,s)),o=oo(_t(t,n,e));return!!(i!==r&&a!==o||i===0&&ao(s,t,e)||r===0&&ao(s,n,e)||a===0&&ao(t,s,n)||o===0&&ao(t,e,n))}function ao(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function oo(s){return s>0?1:s<0?-1:0}function N1(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&tf(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Yr(s,e){return _t(s.prev,s,s.next)<0?_t(s,e,s.next)>=0&&_t(s,s.prev,e)>=0:_t(s,e,s.prev)<0||_t(s,s.next,e)<0}function O1(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function nf(s,e){let t=Fl(s.i,s.x,s.y),n=Fl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ld(s,e,t,n){let i=Fl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Kr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Fl(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function k1(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Ul=class{static triangulate(e,t,n=2){return M1(e,t,n)}},Is=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];hd(e),ud(n,e);let a=e.length;t.forEach(hd);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,ud(n,t[c]);let o=Ul.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function hd(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function ud(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Jr=class s extends _o{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Pt=class s extends vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],m=[],b=[],g=[];for(let p=0;p<h;p++){let x=p*d-a;for(let y=0;y<l;y++){let v=y*u-r;m.push(v,-x,0),b.push(0,0,1),g.push(y/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){let y=x+l*p,v=x+l*(p+1),_=x+1+l*(p+1),E=x+1+l*p;f.push(y,v,E),f.push(v,_,E)}this.setIndex(f),this.setAttribute("position",new je(m,3)),this.setAttribute("normal",new je(b,3)),this.setAttribute("uv",new je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Zr=class s extends vt{constructor(e=new Ai([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new je(i,3)),this.setAttribute("normal",new je(r,3)),this.setAttribute("uv",new je(a,2));function l(h){let u=i.length/3,d=h.extractPoints(t),f=d.shape,m=d.holes;Is.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let x=m[g];Is.isClockWise(x)===!0&&(m[g]=x.reverse())}let b=Is.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let x=m[g];f=f.concat(x)}for(let g=0,p=f.length;g<p;g++){let x=f[g];i.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let g=0,p=b.length;g<p;g++){let x=b[g],y=x[0]+u,v=x[1]+u,_=x[2]+u;n.push(y,v,_),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return B1(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let a=t[e.shapes[i]];n.push(a)}return new s(n,e.curveSegments)}};function B1(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var $r=class s extends vt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new C,d=new C,f=[],m=[],b=[],g=[];for(let p=0;p<=n;p++){let x=[],y=p/n,v=0;p===0&&a===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let _=0;_<=t;_++){let E=_/t;u.x=-e*Math.cos(i+E*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(i+E*r)*Math.sin(a+y*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),g.push(E+v,1-y),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){let y=h[p][x+1],v=h[p][x],_=h[p+1][x],E=h[p+1][x+1];(p!==0||a>0)&&f.push(y,v,E),(p!==n-1||c<Math.PI)&&f.push(v,_,E)}this.setIndex(f),this.setAttribute("position",new je(m,3)),this.setAttribute("normal",new je(b,3)),this.setAttribute("uv",new je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Qi=class extends Qt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new xe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Qr=class extends tt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qt=class extends Qt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=th,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ht=class extends qt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var es=class extends Qt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},To=class extends Qt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function co(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function z1(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function H1(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function dd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function sf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var oi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ao=class extends oi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rl,endingEnd:Rl}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Cl:r=e,o=2*t-n;break;case Pl:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Cl:a=e,c=2*n-t;break;case Pl:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),b=m*m,g=b*m,p=-d*g+2*d*b-d*m,x=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*b+.5*m,v=f*g-f*b;for(let _=0;_!==o;++_)r[_]=p*a[h+_]+x*a[l+_]+y*a[c+_]+v*a[u+_];return r}},Ro=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Co=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},on=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=co(t,this.TimeBufferType),this.values=co(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:co(e.times,Array),values:co(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ao(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xi:t=this.InterpolantFactoryMethodDiscrete;break;case ji:t=this.InterpolantFactoryMethodLinear;break;case lo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xi;case this.InterpolantFactoryMethodLinear:return ji;case this.InterpolantFactoryMethodSmooth:return lo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&z1(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===lo,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let b=t[u+m];if(b!==t[d+m]||b!==t[f+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};on.prototype.ValueTypeName="";on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=ji;var ci=class extends on{constructor(e,t,n){super(e,t,n)}};ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Xi;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ea=class extends on{constructor(e,t,n,i){super(e,t,n,i)}};ea.prototype.ValueTypeName="color";var Hn=class extends on{constructor(e,t,n,i){super(e,t,n,i)}};Hn.prototype.ValueTypeName="number";var Po=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)sn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Vn=class extends on{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Po(this.times,this.values,this.getValueSize(),e)}};Vn.prototype.ValueTypeName="quaternion";Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends on{constructor(e,t,n){super(e,t,n)}};li.prototype.ValueTypeName="string";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Xi;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var Gn=class extends on{constructor(e,t,n,i){super(e,t,n,i)}};Gn.prototype.ValueTypeName="vector";var ta=class{constructor(e="",t=-1,n=[],i=zd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=vn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(G1(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(on.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=H1(c);c=dd(c,1,h),l=dd(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Hn(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,b){if(f.length!==0){let g=[],p=[];sf(f,g,p,m),g.length!==0&&b.push(new u(d,g,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let b=0;b<d[m].morphTargets.length;b++)f[d[m].morphTargets[b]]=-1;for(let b in f){let g=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){let y=d[m];g.push(y.time),p.push(y.morphTarget===b?1:0)}i.push(new Hn(".morphTargetInfluence["+b+"]",g,p))}c=f.length*a}else{let f=".bones["+t[u].name+"]";n(Gn,f+".position",d,"pos",i),n(Vn,f+".quaternion",d,"rot",i),n(Gn,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function V1(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hn;case"vector":case"vector2":case"vector3":case"vector4":return Gn;case"color":return ea;case"quaternion":return Vn;case"bool":case"boolean":return ci;case"string":return li}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function G1(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=V1(s.type);if(s.times===void 0){let t=[],n=[];sf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var zn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Io=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},rf=new Io,Wn=class{constructor(e){this.manager=e!==void 0?e:rf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Wn.DEFAULT_MATERIAL_NAME="__DEFAULT";var ni={},Nl=class extends Error{constructor(e,t){super(e),this.response=t}},Ys=class extends Wn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=zn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ni[e]!==void 0){ni[e].push({onLoad:t,onProgress:n,onError:i});return}ni[e]=[],ni[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ni[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,b=0,g=new ReadableStream({start(p){x();function x(){u.read().then(({done:y,value:v})=>{if(y)p.close();else{b+=v.byteLength;let _=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:f});for(let E=0,R=h.length;E<R;E++){let A=h[E];A.onProgress&&A.onProgress(_)}p.enqueue(v),x()}},y=>{p.error(y)})}}});return new Response(g)}else throw new Nl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{zn.add(`file:${e}`,l);let h=ni[e];delete ni[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=ni[e];if(h===void 0)throw this.manager.itemError(e),l;delete ni[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Cs=new WeakMap,Do=class extends Wn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=zn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Cs.get(a);u===void 0&&(u=[],Cs.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=Fs("img");function c(){h(),t&&t(this);let u=Cs.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Cs.delete(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),zn.remove(`image:${e}`);let d=Cs.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}Cs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),zn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var na=class extends Wn{constructor(e){super(e)}load(e,t,n,i){let r=new Nt,a=new Do(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},ts=class extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ia=class extends ts{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},wl=new Ce,fd=new C,pd=new C,sa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hs,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;fd.setFromMatrixPosition(e.matrixWorld),t.position.copy(fd),pd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pd),t.updateMatrixWorld(),wl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ol=class extends sa{constructor(){super(new St(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Yi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ra=class extends ts{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ol}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},md=new Ce,vr=new C,El=new C,kl=class extends sa{constructor(){super(new St(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new ze(2,1,1,1),new ze(0,1,1,1),new ze(3,1,1,1),new ze(1,1,1,1),new ze(3,0,1,1),new ze(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),vr.setFromMatrixPosition(e.matrixWorld),n.position.copy(vr),El.copy(n.position),El.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(El),n.updateMatrixWorld(),i.makeTranslation(-vr.x,-vr.y,-vr.z),md.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(md,n.coordinateSystem,n.reversedDepth)}},aa=class extends ts{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new kl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},hi=class extends Pr{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bl=class extends sa{constructor(){super(new hi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ri=class extends ts{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Bl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ui=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Tl=new WeakMap,oa=class extends Wn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=zn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(Tl.has(a)===!0)i&&i(Tl.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return zn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Tl.set(c,l),zn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});zn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Lo=class extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ca=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var ch="\\[\\]\\.:\\/",W1=new RegExp("["+ch+"]","g"),lh="[^"+ch+"]",q1="[^"+ch.replace("\\.","")+"]",X1=/((?:WC+[\/:])*)/.source.replace("WC",lh),j1=/(WCOD+)?/.source.replace("WCOD",q1),Y1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),K1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),J1=new RegExp("^"+X1+j1+Y1+K1+"$"),Z1=["material","materials","bones","map"],zl=class{constructor(e,t,n){let i=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(W1,"")}static parseTrackName(e){let t=J1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Z1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=zl;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var og=new Float32Array(1);var ns=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};function hh(s,e,t,n){let i=$1(n);switch(t){case Zl:return s*e;case Qo:return s*e/i.components*i.byteLength;case ec:return s*e/i.components*i.byteLength;case Ql:return s*e*2/i.components*i.byteLength;case tc:return s*e*2/i.components*i.byteLength;case $l:return s*e*3/i.components*i.byteLength;case tn:return s*e*4/i.components*i.byteLength;case nc:return s*e*4/i.components*i.byteLength;case ha:case ua:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case da:case fa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sc:case ac:return Math.max(s,16)*Math.max(e,8)/4;case ic:case rc:return Math.max(s,8)*Math.max(e,8)/2;case oc:case cc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case dc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case fc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case pc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case mc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case gc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case bc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case vc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case xc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case yc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case _c:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case wc:case Ec:case Tc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ac:case Rc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Cc:case Pc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $1(s){switch(s){case Ln:case jl:return{byteLength:1,components:1};case Zs:case Yl:case jt:return{byteLength:2,components:1};case Zo:case $o:return{byteLength:2,components:4};case Ci:case Jo:case yn:return{byteLength:4,components:1};case Kl:case Jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Cf(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function e2(s){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],b=u[f];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let b=u[f];s.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var t2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n2=`#ifdef USE_ALPHAHASH
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
#endif`,i2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,s2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o2=`#ifdef USE_AOMAP
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
#endif`,c2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,l2=`#ifdef USE_BATCHING
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
#endif`,h2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,f2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,p2=`#ifdef USE_IRIDESCENCE
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
#endif`,m2=`#ifdef USE_BUMPMAP
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
#endif`,g2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,b2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,M2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,S2=`#if defined( USE_COLOR_ALPHA )
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
#endif`,w2=`#define PI 3.141592653589793
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
} // validated`,E2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,T2=`vec3 transformedNormal = objectNormal;
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
#endif`,A2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,R2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I2="gl_FragColor = linearToOutputTexel( gl_FragColor );",D2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L2=`#ifdef USE_ENVMAP
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
#endif`,F2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,U2=`#ifdef USE_ENVMAP
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
#endif`,N2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,O2=`#ifdef USE_ENVMAP
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
#endif`,k2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V2=`#ifdef USE_GRADIENTMAP
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
}`,G2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X2=`uniform bool receiveShadow;
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
#endif`,j2=`#ifdef USE_ENVMAP
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
#endif`,Y2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$2=`PhysicalMaterial material;
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
#endif`,Q2=`struct PhysicalMaterial {
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
}`,e0=`
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
#endif`,t0=`#if defined( RE_IndirectDiffuse )
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
#endif`,n0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,o0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,h0=`#if defined( USE_POINTS_UV )
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
#endif`,u0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g0=`#ifdef USE_MORPHTARGETS
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
#endif`,b0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S0=`#ifdef USE_NORMALMAP
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
#endif`,w0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,P0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,B0=`float getShadowMask() {
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
}`,z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H0=`#ifdef USE_SKINNING
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
#endif`,V0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G0=`#ifdef USE_SKINNING
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
#endif`,W0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y0=`#ifdef USE_TRANSMISSION
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
#endif`,K0=`#ifdef USE_TRANSMISSION
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tm=`uniform sampler2D t2D;
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
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`#include <common>
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
}`,om=`#if DEPTH_PACKING == 3200
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
}`,cm=`#define DISTANCE
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
}`,lm=`#define DISTANCE
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
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`uniform float scale;
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
}`,fm=`uniform vec3 diffuse;
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
}`,pm=`#include <common>
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
}`,mm=`uniform vec3 diffuse;
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
}`,gm=`#define LAMBERT
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
}`,bm=`#define LAMBERT
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
}`,vm=`#define MATCAP
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
}`,xm=`#define MATCAP
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
}`,ym=`#define NORMAL
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
}`,_m=`#define NORMAL
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
}`,Mm=`#define PHONG
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
}`,Sm=`#define PHONG
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
}`,wm=`#define STANDARD
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
}`,Em=`#define STANDARD
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
}`,Tm=`#define TOON
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
}`,Am=`#define TOON
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
}`,Rm=`uniform float size;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Pm=`#include <common>
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
}`,Im=`uniform vec3 color;
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
}`,Dm=`uniform float rotation;
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
}`,Lm=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:t2,alphahash_pars_fragment:n2,alphamap_fragment:i2,alphamap_pars_fragment:s2,alphatest_fragment:r2,alphatest_pars_fragment:a2,aomap_fragment:o2,aomap_pars_fragment:c2,batching_pars_vertex:l2,batching_vertex:h2,begin_vertex:u2,beginnormal_vertex:d2,bsdfs:f2,iridescence_fragment:p2,bumpmap_pars_fragment:m2,clipping_planes_fragment:g2,clipping_planes_pars_fragment:b2,clipping_planes_pars_vertex:v2,clipping_planes_vertex:x2,color_fragment:y2,color_pars_fragment:_2,color_pars_vertex:M2,color_vertex:S2,common:w2,cube_uv_reflection_fragment:E2,defaultnormal_vertex:T2,displacementmap_pars_vertex:A2,displacementmap_vertex:R2,emissivemap_fragment:C2,emissivemap_pars_fragment:P2,colorspace_fragment:I2,colorspace_pars_fragment:D2,envmap_fragment:L2,envmap_common_pars_fragment:F2,envmap_pars_fragment:U2,envmap_pars_vertex:N2,envmap_physical_pars_fragment:j2,envmap_vertex:O2,fog_vertex:k2,fog_pars_vertex:B2,fog_fragment:z2,fog_pars_fragment:H2,gradientmap_pars_fragment:V2,lightmap_pars_fragment:G2,lights_lambert_fragment:W2,lights_lambert_pars_fragment:q2,lights_pars_begin:X2,lights_toon_fragment:Y2,lights_toon_pars_fragment:K2,lights_phong_fragment:J2,lights_phong_pars_fragment:Z2,lights_physical_fragment:$2,lights_physical_pars_fragment:Q2,lights_fragment_begin:e0,lights_fragment_maps:t0,lights_fragment_end:n0,logdepthbuf_fragment:i0,logdepthbuf_pars_fragment:s0,logdepthbuf_pars_vertex:r0,logdepthbuf_vertex:a0,map_fragment:o0,map_pars_fragment:c0,map_particle_fragment:l0,map_particle_pars_fragment:h0,metalnessmap_fragment:u0,metalnessmap_pars_fragment:d0,morphinstance_vertex:f0,morphcolor_vertex:p0,morphnormal_vertex:m0,morphtarget_pars_vertex:g0,morphtarget_vertex:b0,normal_fragment_begin:v0,normal_fragment_maps:x0,normal_pars_fragment:y0,normal_pars_vertex:_0,normal_vertex:M0,normalmap_pars_fragment:S0,clearcoat_normal_fragment_begin:w0,clearcoat_normal_fragment_maps:E0,clearcoat_pars_fragment:T0,iridescence_pars_fragment:A0,opaque_fragment:R0,packing:C0,premultiplied_alpha_fragment:P0,project_vertex:I0,dithering_fragment:D0,dithering_pars_fragment:L0,roughnessmap_fragment:F0,roughnessmap_pars_fragment:U0,shadowmap_pars_fragment:N0,shadowmap_pars_vertex:O0,shadowmap_vertex:k0,shadowmask_pars_fragment:B0,skinbase_vertex:z0,skinning_pars_vertex:H0,skinning_vertex:V0,skinnormal_vertex:G0,specularmap_fragment:W0,specularmap_pars_fragment:q0,tonemapping_fragment:X0,tonemapping_pars_fragment:j0,transmission_fragment:Y0,transmission_pars_fragment:K0,uv_pars_fragment:J0,uv_pars_vertex:Z0,uv_vertex:$0,worldpos_vertex:Q0,background_vert:em,background_frag:tm,backgroundCube_vert:nm,backgroundCube_frag:im,cube_vert:sm,cube_frag:rm,depth_vert:am,depth_frag:om,distanceRGBA_vert:cm,distanceRGBA_frag:lm,equirect_vert:hm,equirect_frag:um,linedashed_vert:dm,linedashed_frag:fm,meshbasic_vert:pm,meshbasic_frag:mm,meshlambert_vert:gm,meshlambert_frag:bm,meshmatcap_vert:vm,meshmatcap_frag:xm,meshnormal_vert:ym,meshnormal_frag:_m,meshphong_vert:Mm,meshphong_frag:Sm,meshphysical_vert:wm,meshphysical_frag:Em,meshtoon_vert:Tm,meshtoon_frag:Am,points_vert:Rm,points_frag:Cm,shadow_vert:Pm,shadow_frag:Im,sprite_vert:Dm,sprite_frag:Lm},ce={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Xn={basic:{uniforms:Yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new xe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Yt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Yt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new xe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Yt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Yt([ce.points,ce.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Yt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Yt([ce.common,ce.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Yt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Yt([ce.sprite,ce.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Yt([ce.common,ce.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Yt([ce.lights,ce.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Xn.physical={uniforms:Yt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var Ic={r:0,b:0,g:0},cs=new Pn,Fm=new Ce;function Um(s,e,t,n,i,r,a){let o=new xe(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function b(y){let v=!1,_=m(y);_===null?p(o,c):_&&_.isColor&&(p(_,1),v=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(y,v){let _=m(v);_&&(_.isCubeTexture||_.mapping===rs)?(h===void 0&&(h=new Ie(new an(1,1,1),new tt({name:"BackgroundCubeMaterial",uniforms:os(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),cs.copy(v.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Fm.makeRotationFromEuler(cs)),h.material.toneMapped=Xe.getTransfer(_.colorSpace)!==et,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ie(new Pt(2,2),new tt({name:"BackgroundMaterial",uniforms:os(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(_.colorSpace)!==et,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,v){y.getRGB(Ic,ah(s)),n.buffers.color.setClear(Ic.r,Ic.g,Ic.b,v,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:b,addToRenderList:g,dispose:x}}function Nm(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(M,I,L,F,z){let N=!1,H=u(F,L,I);r!==H&&(r=H,l(r.object)),N=f(M,F,L,z),N&&m(M,F,L,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,v(M,I,L,F),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,I,L){let F=L.wireframe===!0,z=n[M.id];z===void 0&&(z={},n[M.id]=z);let N=z[I.id];N===void 0&&(N={},z[I.id]=N);let H=N[F];return H===void 0&&(H=d(c()),N[F]=H),H}function d(M){let I=[],L=[],F=[];for(let z=0;z<t;z++)I[z]=0,L[z]=0,F[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:L,attributeDivisors:F,object:M,attributes:{},index:null}}function f(M,I,L,F){let z=r.attributes,N=I.attributes,H=0,J=L.getAttributes();for(let G in J)if(J[G].location>=0){let re=z[G],de=N[G];if(de===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),re===void 0||re.attribute!==de||de&&re.data!==de.data)return!0;H++}return r.attributesNum!==H||r.index!==F}function m(M,I,L,F){let z={},N=I.attributes,H=0,J=L.getAttributes();for(let G in J)if(J[G].location>=0){let re=N[G];re===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(re=M.instanceColor));let de={};de.attribute=re,re&&re.data&&(de.data=re.data),z[G]=de,H++}r.attributes=z,r.attributesNum=H,r.index=F}function b(){let M=r.newAttributes;for(let I=0,L=M.length;I<L;I++)M[I]=0}function g(M){p(M,0)}function p(M,I){let L=r.newAttributes,F=r.enabledAttributes,z=r.attributeDivisors;L[M]=1,F[M]===0&&(s.enableVertexAttribArray(M),F[M]=1),z[M]!==I&&(s.vertexAttribDivisor(M,I),z[M]=I)}function x(){let M=r.newAttributes,I=r.enabledAttributes;for(let L=0,F=I.length;L<F;L++)I[L]!==M[L]&&(s.disableVertexAttribArray(L),I[L]=0)}function y(M,I,L,F,z,N,H){H===!0?s.vertexAttribIPointer(M,I,L,z,N):s.vertexAttribPointer(M,I,L,F,z,N)}function v(M,I,L,F){b();let z=F.attributes,N=L.getAttributes(),H=I.defaultAttributeValues;for(let J in N){let G=N[J];if(G.location>=0){let se=z[J];if(se===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),se!==void 0){let re=se.normalized,de=se.itemSize,Te=e.get(se);if(Te===void 0)continue;let nt=Te.buffer,Ke=Te.type,$e=Te.bytesPerElement,q=Ke===s.INT||Ke===s.UNSIGNED_INT||se.gpuType===Jo;if(se.isInterleavedBufferAttribute){let K=se.data,fe=K.stride,De=se.offset;if(K.isInstancedInterleavedBuffer){for(let _e=0;_e<G.locationSize;_e++)p(G.location+_e,K.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let _e=0;_e<G.locationSize;_e++)g(G.location+_e);s.bindBuffer(s.ARRAY_BUFFER,nt);for(let _e=0;_e<G.locationSize;_e++)y(G.location+_e,de/G.locationSize,Ke,re,fe*$e,(De+de/G.locationSize*_e)*$e,q)}else{if(se.isInstancedBufferAttribute){for(let K=0;K<G.locationSize;K++)p(G.location+K,se.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let K=0;K<G.locationSize;K++)g(G.location+K);s.bindBuffer(s.ARRAY_BUFFER,nt);for(let K=0;K<G.locationSize;K++)y(G.location+K,de/G.locationSize,Ke,re,de*$e,de/G.locationSize*K*$e,q)}}else if(H!==void 0){let re=H[J];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(G.location,re);break;case 3:s.vertexAttrib3fv(G.location,re);break;case 4:s.vertexAttrib4fv(G.location,re);break;default:s.vertexAttrib1fv(G.location,re)}}}}x()}function _(){A();for(let M in n){let I=n[M];for(let L in I){let F=I[L];for(let z in F)h(F[z].object),delete F[z];delete I[L]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;let I=n[M.id];for(let L in I){let F=I[L];for(let z in F)h(F[z].object),delete F[z];delete I[L]}delete n[M.id]}function R(M){for(let I in n){let L=n[I];if(L[M.id]===void 0)continue;let F=L[M.id];for(let z in F)h(F[z].object),delete F[z];delete L[M.id]}}function A(){S(),a=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:S,dispose:_,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:g,disableUnusedAttributes:x}}function Om(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let b=0;b<u;b++)m+=h[b]*d[b];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function km(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==tn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let A=R===jt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ln&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==yn&&!A)}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=m>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:_,maxSamples:E}}function Bm(s){let e=this,t=null,n=0,i=!1,r=!1,a=new $t,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{let x=r?0:n,y=x*4,v=p.clippingState||null;c.value=v,v=h(m,d,y,f);for(let _=0;_!==y;++_)v[_]=t[_];p.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=c.value,m!==!0||g===null){let p=f+b*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=f;y!==b;++y,v+=4)a.copy(u[y]).applyMatrix4(x,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}function zm(s){let e=new WeakMap;function t(a,o){return o===jo?a.mapping=is:o===Yo&&(a.mapping=ss),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===jo||o===Yo)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new vo(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var nr=4,af=[.125,.215,.35,.446,.526,.582],us=20,uh=new hi,of=new xe,dh=null,fh=0,ph=0,mh=!1,hs=(1+Math.sqrt(5))/2,tr=1/hs,cf=[new C(-hs,tr,0),new C(hs,tr,0),new C(-tr,0,hs),new C(tr,0,hs),new C(0,hs,-tr),new C(0,hs,tr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Hm=new C,Fc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=Hm}=r;dh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dh,fh,ph),this._renderer.xr.enabled=mh,e.scissorTest=!1,Dc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:jt,format:tn,colorSpace:It,depthBuffer:!1},i=lf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vm(r)),this._blurMaterial=Gm(r,e,t)}return i}_compileMaterial(e){let t=new Ie(this._lodPlanes[0],e);this._renderer.compile(t,uh)}_sceneToCubeUV(e,t,n,i,r){let c=new St(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(of),u.toneMapping=di,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));let b=new en({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),g=new Ie(new an,b),p=!1,x=e.background;x?x.isColor&&(b.color.copy(x),e.background=null,p=!0):(b.color.copy(of),p=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):v===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));let _=this._cubeSize;Dc(i,v*_,y>2?_:0,_,_),u.setRenderTarget(i),p&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===is||e.mapping===ss;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hf());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Ie(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Dc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,uh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=cf[(i-r-1)%cf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ie(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*us-1),b=r/m,g=isFinite(r)?1+Math.floor(h*b):us;g>us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${us}`);let p=[],x=0;for(let R=0;R<us;++R){let A=R/b,S=Math.exp(-A*A/2);p.push(S),R===0?x+=S:R<g&&(x+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;let v=this._sizeLods[i],_=3*v*(i>y-nr?i-y+nr:0),E=4*(this._cubeSize-v);Dc(t,_,E,3*v,2*v),c.setRenderTarget(t),c.render(u,uh)}};function Vm(s){let e=[],t=[],n=[],i=s,r=s-nr+1+af.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>s-nr?c=af[a-s+nr-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,b=3,g=2,p=1,x=new Float32Array(b*m*f),y=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let E=0;E<f;E++){let R=E%3*2/3-1,A=E>2?0:-1,S=[R,A,0,R+2/3,A,0,R+2/3,A+1,0,R,A,0,R+2/3,A+1,0,R,A+1,0];x.set(S,b*m*E),y.set(d,g*m*E);let M=[E,E,E,E,E,E];v.set(M,p*m*E)}let _=new vt;_.setAttribute("position",new ft(x,b)),_.setAttribute("uv",new ft(y,g)),_.setAttribute("faceIndex",new ft(v,p)),e.push(_),i>nr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lf(s,e,t){let n=new Ct(s,e,t);return n.texture.mapping=rs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dc(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Gm(s,e,t){let n=new Float32Array(us),i=new C(0,1,0);return new tt({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Eh(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function hf(){return new tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eh(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function uf(){return new tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Eh(){return`

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
	`}function Wm(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===jo||c===Yo,h=c===is||c===ss;if(l||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Fc(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Fc(s)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function qm(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Us("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Xm(s,e,t,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,m=u.attributes.position,b=0;if(f!==null){let x=f.array;b=f.version;for(let y=0,v=x.length;y<v;y+=3){let _=x[y+0],E=x[y+1],R=x[y+2];d.push(_,E,E,R,R,_)}}else if(m!==void 0){let x=m.array;b=m.version;for(let y=0,v=x.length/3-1;y<v;y+=3){let _=y+0,E=y+1,R=y+2;d.push(_,E,E,R,R,_)}}else return;let g=new(rh(d)?Cr:Rr)(d,1);g.version=b;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function jm(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*a,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,b){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],b[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,b,0,m);let p=0;for(let x=0;x<m;x++)p+=f[x]*b[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ym(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Km(s,e,t){let n=new WeakMap,i=new ze;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let S=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],y=0;f===!0&&(y=1),m===!0&&(y=2),b===!0&&(y=3);let v=o.attributes.position.count*y,_=1;v>e.maxTextureSize&&(_=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*_*4*u),R=new Tr(E,v,_,u);R.type=yn,R.needsUpdate=!0;let A=y*4;for(let M=0;M<u;M++){let I=g[M],L=p[M],F=x[M],z=v*_*4*M;for(let N=0;N<I.count;N++){let H=N*A;f===!0&&(i.fromBufferAttribute(I,N),E[z+H+0]=i.x,E[z+H+1]=i.y,E[z+H+2]=i.z,E[z+H+3]=0),m===!0&&(i.fromBufferAttribute(L,N),E[z+H+4]=i.x,E[z+H+5]=i.y,E[z+H+6]=i.z,E[z+H+7]=0),b===!0&&(i.fromBufferAttribute(F,N),E[z+H+8]=i.x,E[z+H+9]=i.y,E[z+H+10]=i.z,E[z+H+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new ae(v,_)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Jm(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var Pf=new Nt,df=new Br(1,1),If=new Tr,Df=new go,Lf=new Ir,ff=[],pf=[],mf=new Float32Array(16),gf=new Float32Array(9),bf=new Float32Array(4);function sr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=ff[i];if(r===void 0&&(r=new Float32Array(i),ff[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Lt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Uc(s,e){let t=pf[e];t===void 0&&(t=new Int32Array(e),pf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Zm(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $m(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2fv(this.addr,e),Lt(t,e)}}function Qm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;s.uniform3fv(this.addr,e),Lt(t,e)}}function e3(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4fv(this.addr,e),Lt(t,e)}}function t3(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;bf.set(n),s.uniformMatrix2fv(this.addr,!1,bf),Lt(t,n)}}function n3(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;gf.set(n),s.uniformMatrix3fv(this.addr,!1,gf),Lt(t,n)}}function i3(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;mf.set(n),s.uniformMatrix4fv(this.addr,!1,mf),Lt(t,n)}}function s3(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function r3(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2iv(this.addr,e),Lt(t,e)}}function a3(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3iv(this.addr,e),Lt(t,e)}}function o3(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4iv(this.addr,e),Lt(t,e)}}function c3(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function l3(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2uiv(this.addr,e),Lt(t,e)}}function h3(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3uiv(this.addr,e),Lt(t,e)}}function u3(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4uiv(this.addr,e),Lt(t,e)}}function d3(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(df.compareFunction=nh,r=df):r=Pf,t.setTexture2D(e||r,i)}function f3(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Df,i)}function p3(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Lf,i)}function m3(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||If,i)}function g3(s){switch(s){case 5126:return Zm;case 35664:return $m;case 35665:return Qm;case 35666:return e3;case 35674:return t3;case 35675:return n3;case 35676:return i3;case 5124:case 35670:return s3;case 35667:case 35671:return r3;case 35668:case 35672:return a3;case 35669:case 35673:return o3;case 5125:return c3;case 36294:return l3;case 36295:return h3;case 36296:return u3;case 35678:case 36198:case 36298:case 36306:case 35682:return d3;case 35679:case 36299:case 36307:return f3;case 35680:case 36300:case 36308:case 36293:return p3;case 36289:case 36303:case 36311:case 36292:return m3}}function b3(s,e){s.uniform1fv(this.addr,e)}function v3(s,e){let t=sr(e,this.size,2);s.uniform2fv(this.addr,t)}function x3(s,e){let t=sr(e,this.size,3);s.uniform3fv(this.addr,t)}function y3(s,e){let t=sr(e,this.size,4);s.uniform4fv(this.addr,t)}function _3(s,e){let t=sr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function M3(s,e){let t=sr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function S3(s,e){let t=sr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function w3(s,e){s.uniform1iv(this.addr,e)}function E3(s,e){s.uniform2iv(this.addr,e)}function T3(s,e){s.uniform3iv(this.addr,e)}function A3(s,e){s.uniform4iv(this.addr,e)}function R3(s,e){s.uniform1uiv(this.addr,e)}function C3(s,e){s.uniform2uiv(this.addr,e)}function P3(s,e){s.uniform3uiv(this.addr,e)}function I3(s,e){s.uniform4uiv(this.addr,e)}function D3(s,e,t){let n=this.cache,i=e.length,r=Uc(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Pf,r[a])}function L3(s,e,t){let n=this.cache,i=e.length,r=Uc(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Df,r[a])}function F3(s,e,t){let n=this.cache,i=e.length,r=Uc(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Lf,r[a])}function U3(s,e,t){let n=this.cache,i=e.length,r=Uc(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||If,r[a])}function N3(s){switch(s){case 5126:return b3;case 35664:return v3;case 35665:return x3;case 35666:return y3;case 35674:return _3;case 35675:return M3;case 35676:return S3;case 5124:case 35670:return w3;case 35667:case 35671:return E3;case 35668:case 35672:return T3;case 35669:case 35673:return A3;case 5125:return R3;case 36294:return C3;case 36295:return P3;case 36296:return I3;case 35678:case 36198:case 36298:case 36306:case 35682:return D3;case 35679:case 36299:case 36307:return L3;case 35680:case 36300:case 36308:case 36293:return F3;case 36289:case 36303:case 36311:case 36292:return U3}}var bh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=g3(t.type)}},vh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=N3(t.type)}},xh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},gh=/(\w+)(\])?(\[|\.)?/g;function vf(s,e){s.seq.push(e),s.map[e.id]=e}function O3(s,e,t){let n=s.name,i=n.length;for(gh.lastIndex=0;;){let r=gh.exec(n),a=gh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){vf(t,l===void 0?new bh(o,s,e):new vh(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new xh(o),vf(t,u)),t=u}}}var ir=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);O3(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function xf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var k3=37297,B3=0;function z3(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var yf=new He;function H3(s){Xe._getMatrix(yf,Xe.workingColorSpace,s);let e=`mat3( ${yf.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(s)){case wr:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function _f(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+z3(s.getShaderSource(e),o)}else return r}function V3(s,e){let t=H3(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function G3(s,e){let t;switch(e){case Ho:t="Linear";break;case Vo:t="Reinhard";break;case Go:t="Cineon";break;case Ks:t="ACESFilmic";break;case qo:t="AgX";break;case Xo:t="Neutral";break;case Wo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Lc=new C;function W3(){Xe.getLuminanceCoefficients(Lc);let s=Lc.x.toFixed(4),e=Lc.y.toFixed(4),t=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function q3(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function X3(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function j3(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ga(s){return s!==""}function Mf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Y3=/^[ \t]*#include +<([\w\d./]+)>/gm;function yh(s){return s.replace(Y3,J3)}var K3=new Map;function J3(s,e){let t=qe[e];if(t===void 0){let n=K3.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yh(t)}var Z3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wf(s){return s.replace(Z3,$3)}function $3(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ef(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function Q3(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Vl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===vd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===xn&&(e="SHADOWMAP_TYPE_VSM"),e}function e4(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case is:case ss:e="ENVMAP_TYPE_CUBE";break;case rs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function t4(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ss:e="ENVMAP_MODE_REFRACTION";break}return e}function n4(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ql:e="ENVMAP_BLENDING_MULTIPLY";break;case Od:e="ENVMAP_BLENDING_MIX";break;case kd:e="ENVMAP_BLENDING_ADD";break}return e}function i4(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function s4(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Q3(t),l=e4(t),h=t4(t),u=n4(t),d=i4(t),f=q3(t),m=X3(r),b=i.createProgram(),g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ga).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ga).join(`
`),p.length>0&&(p+=`
`)):(g=[Ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),p=[Ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?qe.tonemapping_pars_fragment:"",t.toneMapping!==di?G3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,V3("linearToOutputTexel",t.outputColorSpace),W3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ga).join(`
`)),a=yh(a),a=Mf(a,t),a=Sf(a,t),o=yh(o),o=Mf(o,t),o=Sf(o,t),a=wf(a),o=wf(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=x+g+a,v=x+p+o,_=xf(i,i.VERTEX_SHADER,y),E=xf(i,i.FRAGMENT_SHADER,v);i.attachShader(b,_),i.attachShader(b,E),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function R(I){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(b)||"",F=i.getShaderInfoLog(_)||"",z=i.getShaderInfoLog(E)||"",N=L.trim(),H=F.trim(),J=z.trim(),G=!0,se=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,b,_,E);else{let re=_f(i,_,"vertex"),de=_f(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+re+`
`+de)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(H===""||J==="")&&(se=!1);se&&(I.diagnostics={runnable:G,programLog:N,vertexShader:{log:H,prefix:g},fragmentShader:{log:J,prefix:p}})}i.deleteShader(_),i.deleteShader(E),A=new ir(i,b),S=j3(i,b)}let A;this.getUniforms=function(){return A===void 0&&R(this),A};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(b,k3)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=B3++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=_,this.fragmentShader=E,this}var r4=0,_h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Mh(e),t.set(e,n)),n}},Mh=class{constructor(e){this.id=r4++,this.code=e,this.usedTimes=0}};function a4(s,e,t,n,i,r,a){let o=new Ar,c=new _h,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,M,I,L,F){let z=L.fog,N=F.geometry,H=S.isMeshStandardMaterial?L.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),G=J&&J.mapping===rs?J.image.height:null,se=m[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let re=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,de=re!==void 0?re.length:0,Te=0;N.morphAttributes.position!==void 0&&(Te=1),N.morphAttributes.normal!==void 0&&(Te=2),N.morphAttributes.color!==void 0&&(Te=3);let nt,Ke,$e,q;if(se){let it=Xn[se];nt=it.vertexShader,Ke=it.fragmentShader}else nt=S.vertexShader,Ke=S.fragmentShader,c.update(S),$e=c.getVertexShaderID(S),q=c.getFragmentShaderID(S);let K=s.getRenderTarget(),fe=s.state.buffers.depth.getReversed(),De=F.isInstancedMesh===!0,_e=F.isBatchedMesh===!0,Je=!!S.map,Ft=!!S.matcap,D=!!J,ct=!!S.aoMap,ke=!!S.lightMap,Le=!!S.bumpMap,ve=!!S.normalMap,lt=!!S.displacementMap,me=!!S.emissiveMap,Oe=!!S.metalnessMap,gt=!!S.roughnessMap,Et=S.anisotropy>0,P=S.clearcoat>0,w=S.dispersion>0,B=S.iridescence>0,j=S.sheen>0,Z=S.transmission>0,X=Et&&!!S.anisotropyMap,Ae=P&&!!S.clearcoatMap,ie=P&&!!S.clearcoatNormalMap,Se=P&&!!S.clearcoatRoughnessMap,we=B&&!!S.iridescenceMap,ee=B&&!!S.iridescenceThicknessMap,ue=j&&!!S.sheenColorMap,Ue=j&&!!S.sheenRoughnessMap,Ee=!!S.specularMap,le=!!S.specularColorMap,Ge=!!S.specularIntensityMap,U=Z&&!!S.transmissionMap,te=Z&&!!S.thicknessMap,oe=!!S.gradientMap,ge=!!S.alphaMap,$=S.alphaTest>0,Y=!!S.alphaHash,Me=!!S.extensions,Be=di;S.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Be=s.toneMapping);let dt={shaderID:se,shaderType:S.type,shaderName:S.name,vertexShader:nt,fragmentShader:Ke,defines:S.defines,customVertexShaderID:$e,customFragmentShaderID:q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:_e,batchingColor:_e&&F._colorsTexture!==null,instancing:De,instancingColor:De&&F.instanceColor!==null,instancingMorph:De&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:It,alphaToCoverage:!!S.alphaToCoverage,map:Je,matcap:Ft,envMap:D,envMapMode:D&&J.mapping,envMapCubeUVHeight:G,aoMap:ct,lightMap:ke,bumpMap:Le,normalMap:ve,displacementMap:d&&lt,emissiveMap:me,normalMapObjectSpace:ve&&S.normalMapType===Vd,normalMapTangentSpace:ve&&S.normalMapType===th,metalnessMap:Oe,roughnessMap:gt,anisotropy:Et,anisotropyMap:X,clearcoat:P,clearcoatMap:Ae,clearcoatNormalMap:ie,clearcoatRoughnessMap:Se,dispersion:w,iridescence:B,iridescenceMap:we,iridescenceThicknessMap:ee,sheen:j,sheenColorMap:ue,sheenRoughnessMap:Ue,specularMap:Ee,specularColorMap:le,specularIntensityMap:Ge,transmission:Z,transmissionMap:U,thicknessMap:te,gradientMap:oe,opaque:S.transparent===!1&&S.blending===Wi&&S.alphaToCoverage===!1,alphaMap:ge,alphaTest:$,alphaHash:Y,combine:S.combine,mapUv:Je&&b(S.map.channel),aoMapUv:ct&&b(S.aoMap.channel),lightMapUv:ke&&b(S.lightMap.channel),bumpMapUv:Le&&b(S.bumpMap.channel),normalMapUv:ve&&b(S.normalMap.channel),displacementMapUv:lt&&b(S.displacementMap.channel),emissiveMapUv:me&&b(S.emissiveMap.channel),metalnessMapUv:Oe&&b(S.metalnessMap.channel),roughnessMapUv:gt&&b(S.roughnessMap.channel),anisotropyMapUv:X&&b(S.anisotropyMap.channel),clearcoatMapUv:Ae&&b(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&b(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&b(S.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&b(S.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&b(S.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&b(S.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&b(S.sheenRoughnessMap.channel),specularMapUv:Ee&&b(S.specularMap.channel),specularColorMapUv:le&&b(S.specularColorMap.channel),specularIntensityMapUv:Ge&&b(S.specularIntensityMap.channel),transmissionMapUv:U&&b(S.transmissionMap.channel),thicknessMapUv:te&&b(S.thicknessMap.channel),alphaMapUv:ge&&b(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ve||Et),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(Je||ge),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:fe,skinning:F.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Te,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Be,decodeVideoTexture:Je&&S.map.isVideoTexture===!0&&Xe.getTransfer(S.map.colorSpace)===et,decodeVideoTextureEmissive:me&&S.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(S.emissiveMap.colorSpace)===et,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Xt,flipSided:S.side===Vt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Me&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&S.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function p(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)M.push(I),M.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(x(M,S),y(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){let M=m[S.type],I;if(M){let L=Xn[M];I=qn.clone(L.uniforms)}else I=S.uniforms;return I}function _(S,M){let I;for(let L=0,F=h.length;L<F;L++){let z=h[L];if(z.cacheKey===M){I=z,++I.usedTimes;break}}return I===void 0&&(I=new s4(s,M,S,r),h.push(I)),I}function E(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function R(S){c.remove(S)}function A(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:_,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:A}}function o4(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function c4(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Tf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Af(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,m,b,g){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:b,group:g},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=b,p.group=g),e++,p}function o(u,d,f,m,b,g){let p=a(u,d,f,m,b,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,m,b,g){let p=a(u,d,f,m,b,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||c4),n.length>1&&n.sort(d||Tf),i.length>1&&i.sort(d||Tf)}function h(){for(let u=e,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function l4(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Af,s.set(n,[a])):i>=r.length?(a=new Af,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function h4(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new xe};break;case"SpotLight":t={position:new C,direction:new C,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function u4(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var d4=0;function f4(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function p4(s){let e=new h4,t=u4(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);let i=new C,r=new Ce,a=new Ce;function o(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,b=0,g=0,p=0,x=0,y=0,v=0,_=0,E=0,R=0;l.sort(f4);for(let S=0,M=l.length;S<M;S++){let I=l[S],L=I.color,F=I.intensity,z=I.distance,N=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=L.r*F,u+=L.g*F,d+=L.b*F;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],F);R++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,G=t.get(I);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=I.shadow.matrix,x++}n.directional[f]=H,f++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(L).multiplyScalar(F),H.distance=z,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[b]=H;let J=I.shadow;if(I.map&&(n.spotLightMap[_]=I.map,_++,J.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[b]=J.matrix,I.castShadow){let G=t.get(I);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.spotShadow[b]=G,n.spotShadowMap[b]=N,v++}b++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(L).multiplyScalar(F),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=H,g++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let J=I.shadow,G=t.get(I);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=N,n.pointShadowMatrix[m]=I.shadow.matrix,y++}n.point[m]=H,m++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(F),H.groundColor.copy(I.groundColor).multiplyScalar(F),n.hemi[p]=H,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let A=n.hash;(A.directionalLength!==f||A.pointLength!==m||A.spotLength!==b||A.rectAreaLength!==g||A.hemiLength!==p||A.numDirectionalShadows!==x||A.numPointShadows!==y||A.numSpotShadows!==v||A.numSpotMaps!==_||A.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,A.directionalLength=f,A.pointLength=m,A.spotLength=b,A.rectAreaLength=g,A.hemiLength=p,A.numDirectionalShadows=x,A.numPointShadows=y,A.numSpotShadows=v,A.numSpotMaps=_,A.numLightProbes=R,n.version=d4++)}function c(l,h){let u=0,d=0,f=0,m=0,b=0,g=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){let y=l[p];if(y.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),u++}else if(y.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let v=n.hemi[b];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),b++}}}return{setup:o,setupView:c,state:n}}function Rf(s){let e=new p4(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function m4(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new Rf(s),e.set(i,[o])):r>=a.length?(o=new Rf(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var g4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b4=`uniform sampler2D shadow_pass;
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
}`;function v4(s,e,t){let n=new Hs,i=new ae,r=new ae,a=new ze,o=new es({depthPacking:ma}),c=new To,l={},h=t.maxTextureSize,u={[Cn]:Vt,[Vt]:Cn,[Xt]:Xt},d=new tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:g4,fragmentShader:b4}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new vt;m.setAttribute("position",new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ie(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl;let p=this.type;this.render=function(E,R,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let S=s.getRenderTarget(),M=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),L=s.state;L.setBlending(In),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let F=p!==xn&&this.type===xn,z=p===xn&&this.type!==xn;for(let N=0,H=E.length;N<H;N++){let J=E[N],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let se=G.getFrameExtents();if(i.multiply(se),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/se.x),i.x=r.x*se.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/se.y),i.y=r.y*se.y,G.mapSize.y=r.y)),G.map===null||F===!0||z===!0){let de=this.type!==xn?{minFilter:kt,magFilter:kt}:{};G.map!==null&&G.map.dispose(),G.map=new Ct(i.x,i.y,de),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();let re=G.getViewportCount();for(let de=0;de<re;de++){let Te=G.getViewport(de);a.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),L.viewport(a),G.updateMatrices(J,de),n=G.getFrustum(),v(R,A,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===xn&&x(G,A),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(S,M,I)};function x(E,R){let A=e.update(b);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ct(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(R,null,A,d,b,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(R,null,A,f,b,null)}function y(E,R,A,S){let M=null,I=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)M=I;else if(M=A.isPointLight===!0?c:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let L=M.uuid,F=R.uuid,z=l[L];z===void 0&&(z={},l[L]=z);let N=z[F];N===void 0&&(N=M.clone(),z[F]=N,R.addEventListener("dispose",_)),M=N}if(M.visible=R.visible,M.wireframe=R.wireframe,S===xn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let L=s.properties.get(M);L.light=A}return M}function v(E,R,A,S,M){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===xn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);let F=e.update(E),z=E.material;if(Array.isArray(z)){let N=F.groups;for(let H=0,J=N.length;H<J;H++){let G=N[H],se=z[G.materialIndex];if(se&&se.visible){let re=y(E,se,S,M);E.onBeforeShadow(s,E,R,A,F,re,G),s.renderBufferDirect(A,null,F,re,E,G),E.onAfterShadow(s,E,R,A,F,re,G)}}}else if(z.visible){let N=y(E,z,S,M);E.onBeforeShadow(s,E,R,A,F,N,null),s.renderBufferDirect(A,null,F,N,E,null),E.onAfterShadow(s,E,R,A,F,N,null)}}let L=E.children;for(let F=0,z=L.length;F<z;F++)v(L[F],R,A,S,M)}function _(E){E.target.removeEventListener("dispose",_);for(let A in l){let S=l[A],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var x4={[Fo]:Uo,[No]:Bo,[Oo]:zo,[qi]:ko,[Uo]:Fo,[Bo]:No,[zo]:Oo,[ko]:qi};function y4(s,e){function t(){let U=!1,te=new ze,oe=null,ge=new ze(0,0,0,0);return{setMask:function($){oe!==$&&!U&&(s.colorMask($,$,$,$),oe=$)},setLocked:function($){U=$},setClear:function($,Y,Me,Be,dt){dt===!0&&($*=Be,Y*=Be,Me*=Be),te.set($,Y,Me,Be),ge.equals(te)===!1&&(s.clearColor($,Y,Me,Be),ge.copy(te))},reset:function(){U=!1,oe=null,ge.set(-1,0,0,0)}}}function n(){let U=!1,te=!1,oe=null,ge=null,$=null;return{setReversed:function(Y){if(te!==Y){let Me=e.get("EXT_clip_control");Y?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),te=Y;let Be=$;$=null,this.setClear(Be)}},getReversed:function(){return te},setTest:function(Y){Y?K(s.DEPTH_TEST):fe(s.DEPTH_TEST)},setMask:function(Y){oe!==Y&&!U&&(s.depthMask(Y),oe=Y)},setFunc:function(Y){if(te&&(Y=x4[Y]),ge!==Y){switch(Y){case Fo:s.depthFunc(s.NEVER);break;case Uo:s.depthFunc(s.ALWAYS);break;case No:s.depthFunc(s.LESS);break;case qi:s.depthFunc(s.LEQUAL);break;case Oo:s.depthFunc(s.EQUAL);break;case ko:s.depthFunc(s.GEQUAL);break;case Bo:s.depthFunc(s.GREATER);break;case zo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=Y}},setLocked:function(Y){U=Y},setClear:function(Y){$!==Y&&(te&&(Y=1-Y),s.clearDepth(Y),$=Y)},reset:function(){U=!1,oe=null,ge=null,$=null,te=!1}}}function i(){let U=!1,te=null,oe=null,ge=null,$=null,Y=null,Me=null,Be=null,dt=null;return{setTest:function(it){U||(it?K(s.STENCIL_TEST):fe(s.STENCIL_TEST))},setMask:function(it){te!==it&&!U&&(s.stencilMask(it),te=it)},setFunc:function(it,Kn,kn){(oe!==it||ge!==Kn||$!==kn)&&(s.stencilFunc(it,Kn,kn),oe=it,ge=Kn,$=kn)},setOp:function(it,Kn,kn){(Y!==it||Me!==Kn||Be!==kn)&&(s.stencilOp(it,Kn,kn),Y=it,Me=Kn,Be=kn)},setLocked:function(it){U=it},setClear:function(it){dt!==it&&(s.clearStencil(it),dt=it)},reset:function(){U=!1,te=null,oe=null,ge=null,$=null,Y=null,Me=null,Be=null,dt=null}}}let r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,b=!1,g=null,p=null,x=null,y=null,v=null,_=null,E=null,R=new xe(0,0,0),A=0,S=!1,M=null,I=null,L=null,F=null,z=null,N=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,J=0,G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=J>=2);let se=null,re={},de=s.getParameter(s.SCISSOR_BOX),Te=s.getParameter(s.VIEWPORT),nt=new ze().fromArray(de),Ke=new ze().fromArray(Te);function $e(U,te,oe,ge){let $=new Uint8Array(4),Y=s.createTexture();s.bindTexture(U,Y),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Me=0;Me<oe;Me++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(te,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,$):s.texImage2D(te+Me,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,$);return Y}let q={};q[s.TEXTURE_2D]=$e(s.TEXTURE_2D,s.TEXTURE_2D,1),q[s.TEXTURE_CUBE_MAP]=$e(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[s.TEXTURE_2D_ARRAY]=$e(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),q[s.TEXTURE_3D]=$e(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(s.DEPTH_TEST),a.setFunc(qi),Le(!1),ve(Hl),K(s.CULL_FACE),ct(In);function K(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function fe(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function De(U,te){return u[U]!==te?(s.bindFramebuffer(U,te),u[U]=te,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=te),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=te),!0):!1}function _e(U,te){let oe=f,ge=!1;if(U){oe=d.get(te),oe===void 0&&(oe=[],d.set(te,oe));let $=U.textures;if(oe.length!==$.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let Y=0,Me=$.length;Y<Me;Y++)oe[Y]=s.COLOR_ATTACHMENT0+Y;oe.length=$.length,ge=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,ge=!0);ge&&s.drawBuffers(oe)}function Je(U){return m!==U?(s.useProgram(U),m=U,!0):!1}let Ft={[wi]:s.FUNC_ADD,[yd]:s.FUNC_SUBTRACT,[_d]:s.FUNC_REVERSE_SUBTRACT};Ft[Md]=s.MIN,Ft[Sd]=s.MAX;let D={[wd]:s.ZERO,[Ed]:s.ONE,[Td]:s.SRC_COLOR,[ho]:s.SRC_ALPHA,[Dd]:s.SRC_ALPHA_SATURATE,[Pd]:s.DST_COLOR,[Rd]:s.DST_ALPHA,[Ad]:s.ONE_MINUS_SRC_COLOR,[uo]:s.ONE_MINUS_SRC_ALPHA,[Id]:s.ONE_MINUS_DST_COLOR,[Cd]:s.ONE_MINUS_DST_ALPHA,[Ld]:s.CONSTANT_COLOR,[Fd]:s.ONE_MINUS_CONSTANT_COLOR,[Ud]:s.CONSTANT_ALPHA,[Nd]:s.ONE_MINUS_CONSTANT_ALPHA};function ct(U,te,oe,ge,$,Y,Me,Be,dt,it){if(U===In){b===!0&&(fe(s.BLEND),b=!1);return}if(b===!1&&(K(s.BLEND),b=!0),U!==xd){if(U!==g||it!==S){if((p!==wi||v!==wi)&&(s.blendEquation(s.FUNC_ADD),p=wi,v=wi),it)switch(U){case Wi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case la:s.blendFunc(s.ONE,s.ONE);break;case Gl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Wi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case la:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Gl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,y=null,_=null,E=null,R.set(0,0,0),A=0,g=U,S=it}return}$=$||te,Y=Y||oe,Me=Me||ge,(te!==p||$!==v)&&(s.blendEquationSeparate(Ft[te],Ft[$]),p=te,v=$),(oe!==x||ge!==y||Y!==_||Me!==E)&&(s.blendFuncSeparate(D[oe],D[ge],D[Y],D[Me]),x=oe,y=ge,_=Y,E=Me),(Be.equals(R)===!1||dt!==A)&&(s.blendColor(Be.r,Be.g,Be.b,dt),R.copy(Be),A=dt),g=U,S=!1}function ke(U,te){U.side===Xt?fe(s.CULL_FACE):K(s.CULL_FACE);let oe=U.side===Vt;te&&(oe=!oe),Le(oe),U.blending===Wi&&U.transparent===!1?ct(In):ct(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let ge=U.stencilWrite;o.setTest(ge),ge&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),me(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Le(U){M!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),M=U)}function ve(U){U!==gd?(K(s.CULL_FACE),U!==I&&(U===Hl?s.cullFace(s.BACK):U===bd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):fe(s.CULL_FACE),I=U}function lt(U){U!==L&&(H&&s.lineWidth(U),L=U)}function me(U,te,oe){U?(K(s.POLYGON_OFFSET_FILL),(F!==te||z!==oe)&&(s.polygonOffset(te,oe),F=te,z=oe)):fe(s.POLYGON_OFFSET_FILL)}function Oe(U){U?K(s.SCISSOR_TEST):fe(s.SCISSOR_TEST)}function gt(U){U===void 0&&(U=s.TEXTURE0+N-1),se!==U&&(s.activeTexture(U),se=U)}function Et(U,te,oe){oe===void 0&&(se===null?oe=s.TEXTURE0+N-1:oe=se);let ge=re[oe];ge===void 0&&(ge={type:void 0,texture:void 0},re[oe]=ge),(ge.type!==U||ge.texture!==te)&&(se!==oe&&(s.activeTexture(oe),se=oe),s.bindTexture(U,te||q[U]),ge.type=U,ge.texture=te)}function P(){let U=re[se];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function B(){try{s.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{s.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{s.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{s.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{s.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{s.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{s.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{s.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(U){nt.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),nt.copy(U))}function Ue(U){Ke.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Ke.copy(U))}function Ee(U,te){let oe=l.get(te);oe===void 0&&(oe=new WeakMap,l.set(te,oe));let ge=oe.get(U);ge===void 0&&(ge=s.getUniformBlockIndex(te,U.name),oe.set(U,ge))}function le(U,te){let ge=l.get(te).get(U);c.get(te)!==ge&&(s.uniformBlockBinding(te,ge,U.__bindingPointIndex),c.set(te,ge))}function Ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},se=null,re={},u={},d=new WeakMap,f=[],m=null,b=!1,g=null,p=null,x=null,y=null,v=null,_=null,E=null,R=new xe(0,0,0),A=0,S=!1,M=null,I=null,L=null,F=null,z=null,nt.set(0,0,s.canvas.width,s.canvas.height),Ke.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:fe,bindFramebuffer:De,drawBuffers:_e,useProgram:Je,setBlending:ct,setMaterial:ke,setFlipSided:Le,setCullFace:ve,setLineWidth:lt,setPolygonOffset:me,setScissorTest:Oe,activeTexture:gt,bindTexture:Et,unbindTexture:P,compressedTexImage2D:w,compressedTexImage3D:B,texImage2D:we,texImage3D:ee,updateUBOMapping:Ee,uniformBlockBinding:le,texStorage2D:ie,texStorage3D:Se,texSubImage2D:j,texSubImage3D:Z,compressedTexSubImage2D:X,compressedTexSubImage3D:Ae,scissor:ue,viewport:Ue,reset:Ge}}function _4(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ae,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,w){return f?new OffscreenCanvas(P,w):Fs("canvas")}function b(P,w,B){let j=1,Z=Et(P);if((Z.width>B||Z.height>B)&&(j=B/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let X=Math.floor(j*Z.width),Ae=Math.floor(j*Z.height);u===void 0&&(u=m(X,Ae));let ie=w?m(X,Ae):u;return ie.width=X,ie.height=Ae,ie.getContext("2d").drawImage(P,0,0,X,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+Ae+")."),ie}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){s.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(P,w,B,j,Z=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let X=w;if(w===s.RED&&(B===s.FLOAT&&(X=s.R32F),B===s.HALF_FLOAT&&(X=s.R16F),B===s.UNSIGNED_BYTE&&(X=s.R8)),w===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(X=s.R8UI),B===s.UNSIGNED_SHORT&&(X=s.R16UI),B===s.UNSIGNED_INT&&(X=s.R32UI),B===s.BYTE&&(X=s.R8I),B===s.SHORT&&(X=s.R16I),B===s.INT&&(X=s.R32I)),w===s.RG&&(B===s.FLOAT&&(X=s.RG32F),B===s.HALF_FLOAT&&(X=s.RG16F),B===s.UNSIGNED_BYTE&&(X=s.RG8)),w===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(X=s.RG8UI),B===s.UNSIGNED_SHORT&&(X=s.RG16UI),B===s.UNSIGNED_INT&&(X=s.RG32UI),B===s.BYTE&&(X=s.RG8I),B===s.SHORT&&(X=s.RG16I),B===s.INT&&(X=s.RG32I)),w===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(X=s.RGB8UI),B===s.UNSIGNED_SHORT&&(X=s.RGB16UI),B===s.UNSIGNED_INT&&(X=s.RGB32UI),B===s.BYTE&&(X=s.RGB8I),B===s.SHORT&&(X=s.RGB16I),B===s.INT&&(X=s.RGB32I)),w===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),B===s.UNSIGNED_INT&&(X=s.RGBA32UI),B===s.BYTE&&(X=s.RGBA8I),B===s.SHORT&&(X=s.RGBA16I),B===s.INT&&(X=s.RGBA32I)),w===s.RGB&&(B===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),w===s.RGBA){let Ae=Z?wr:Xe.getTransfer(j);B===s.FLOAT&&(X=s.RGBA32F),B===s.HALF_FLOAT&&(X=s.RGBA16F),B===s.UNSIGNED_BYTE&&(X=Ae===et?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function v(P,w){let B;return P?w===null||w===Ci||w===$s?B=s.DEPTH24_STENCIL8:w===yn?B=s.DEPTH32F_STENCIL8:w===Zs&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ci||w===$s?B=s.DEPTH_COMPONENT24:w===yn?B=s.DEPTH_COMPONENT32F:w===Zs&&(B=s.DEPTH_COMPONENT16),B}function _(P,w){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==kt&&P.minFilter!==Bt?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function E(P){let w=P.target;w.removeEventListener("dispose",E),A(w),w.isVideoTexture&&h.delete(w)}function R(P){let w=P.target;w.removeEventListener("dispose",R),M(w)}function A(P){let w=n.get(P);if(w.__webglInit===void 0)return;let B=P.source,j=d.get(B);if(j){let Z=j[w.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(P),Object.keys(j).length===0&&d.delete(B)}n.remove(P)}function S(P){let w=n.get(P);s.deleteTexture(w.__webglTexture);let B=P.source,j=d.get(B);delete j[w.__cacheKey],a.memory.textures--}function M(P){let w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(w.__webglFramebuffer[j]))for(let Z=0;Z<w.__webglFramebuffer[j].length;Z++)s.deleteFramebuffer(w.__webglFramebuffer[j][Z]);else s.deleteFramebuffer(w.__webglFramebuffer[j]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[j])}else{if(Array.isArray(w.__webglFramebuffer))for(let j=0;j<w.__webglFramebuffer.length;j++)s.deleteFramebuffer(w.__webglFramebuffer[j]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let j=0;j<w.__webglColorRenderbuffer.length;j++)w.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[j]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let B=P.textures;for(let j=0,Z=B.length;j<Z;j++){let X=n.get(B[j]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(B[j])}n.remove(P)}let I=0;function L(){I=0}function F(){let P=I;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),I+=1,P}function z(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function N(P,w){let B=n.get(P);if(P.isVideoTexture&&Oe(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&B.__version!==P.version){let j=P.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,P,w);return}}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+w)}function H(P,w){let B=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){q(B,P,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+w)}function J(P,w){let B=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){q(B,P,w);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+w)}function G(P,w){let B=n.get(P);if(P.version>0&&B.__version!==P.version){K(B,P,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+w)}let se={[Ei]:s.REPEAT,[Bn]:s.CLAMP_TO_EDGE,[Ds]:s.MIRRORED_REPEAT},re={[kt]:s.NEAREST,[Ko]:s.NEAREST_MIPMAP_NEAREST,[as]:s.NEAREST_MIPMAP_LINEAR,[Bt]:s.LINEAR,[Js]:s.LINEAR_MIPMAP_NEAREST,[Dn]:s.LINEAR_MIPMAP_LINEAR},de={[Gd]:s.NEVER,[Kd]:s.ALWAYS,[Wd]:s.LESS,[nh]:s.LEQUAL,[qd]:s.EQUAL,[Yd]:s.GEQUAL,[Xd]:s.GREATER,[jd]:s.NOTEQUAL};function Te(P,w){if(w.type===yn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Bt||w.magFilter===Js||w.magFilter===as||w.magFilter===Dn||w.minFilter===Bt||w.minFilter===Js||w.minFilter===as||w.minFilter===Dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,se[w.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,se[w.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,se[w.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,re[w.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,re[w.minFilter]),w.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,de[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===kt||w.minFilter!==as&&w.minFilter!==Dn||w.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function nt(P,w){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",E));let j=w.source,Z=d.get(j);Z===void 0&&(Z={},d.set(j,Z));let X=z(w);if(X!==P.__cacheKey){Z[X]===void 0&&(Z[X]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[X].usedTimes++;let Ae=Z[P.__cacheKey];Ae!==void 0&&(Z[P.__cacheKey].usedTimes--,Ae.usedTimes===0&&S(w)),P.__cacheKey=X,P.__webglTexture=Z[X].texture}return B}function Ke(P,w,B){return Math.floor(Math.floor(P/B)/w)}function $e(P,w,B,j){let X=P.updateRanges;if(X.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,B,j,w.data);else{X.sort((ee,ue)=>ee.start-ue.start);let Ae=0;for(let ee=1;ee<X.length;ee++){let ue=X[Ae],Ue=X[ee],Ee=ue.start+ue.count,le=Ke(Ue.start,w.width,4),Ge=Ke(ue.start,w.width,4);Ue.start<=Ee+1&&le===Ge&&Ke(Ue.start+Ue.count-1,w.width,4)===le?ue.count=Math.max(ue.count,Ue.start+Ue.count-ue.start):(++Ae,X[Ae]=Ue)}X.length=Ae+1;let ie=s.getParameter(s.UNPACK_ROW_LENGTH),Se=s.getParameter(s.UNPACK_SKIP_PIXELS),we=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let ee=0,ue=X.length;ee<ue;ee++){let Ue=X[ee],Ee=Math.floor(Ue.start/4),le=Math.ceil(Ue.count/4),Ge=Ee%w.width,U=Math.floor(Ee/w.width),te=le,oe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ge),s.pixelStorei(s.UNPACK_SKIP_ROWS,U),t.texSubImage2D(s.TEXTURE_2D,0,Ge,U,te,oe,B,j,w.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ie),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Se),s.pixelStorei(s.UNPACK_SKIP_ROWS,we)}}function q(P,w,B){let j=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(j=s.TEXTURE_3D);let Z=nt(P,w),X=w.source;t.bindTexture(j,P.__webglTexture,s.TEXTURE0+B);let Ae=n.get(X);if(X.version!==Ae.__version||Z===!0){t.activeTexture(s.TEXTURE0+B);let ie=Xe.getPrimaries(Xe.workingColorSpace),Se=w.colorSpace===fi?null:Xe.getPrimaries(w.colorSpace),we=w.colorSpace===fi||ie===Se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ee=b(w.image,!1,i.maxTextureSize);ee=gt(w,ee);let ue=r.convert(w.format,w.colorSpace),Ue=r.convert(w.type),Ee=y(w.internalFormat,ue,Ue,w.colorSpace,w.isVideoTexture);Te(j,w);let le,Ge=w.mipmaps,U=w.isVideoTexture!==!0,te=Ae.__version===void 0||Z===!0,oe=X.dataReady,ge=_(w,ee);if(w.isDepthTexture)Ee=v(w.format===Qs,w.type),te&&(U?t.texStorage2D(s.TEXTURE_2D,1,Ee,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,Ee,ee.width,ee.height,0,ue,Ue,null));else if(w.isDataTexture)if(Ge.length>0){U&&te&&t.texStorage2D(s.TEXTURE_2D,ge,Ee,Ge[0].width,Ge[0].height);for(let $=0,Y=Ge.length;$<Y;$++)le=Ge[$],U?oe&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,le.width,le.height,ue,Ue,le.data):t.texImage2D(s.TEXTURE_2D,$,Ee,le.width,le.height,0,ue,Ue,le.data);w.generateMipmaps=!1}else U?(te&&t.texStorage2D(s.TEXTURE_2D,ge,Ee,ee.width,ee.height),oe&&$e(w,ee,ue,Ue)):t.texImage2D(s.TEXTURE_2D,0,Ee,ee.width,ee.height,0,ue,Ue,ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){U&&te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,Ee,Ge[0].width,Ge[0].height,ee.depth);for(let $=0,Y=Ge.length;$<Y;$++)if(le=Ge[$],w.format!==tn)if(ue!==null)if(U){if(oe)if(w.layerUpdates.size>0){let Me=hh(le.width,le.height,w.format,w.type);for(let Be of w.layerUpdates){let dt=le.data.subarray(Be*Me/le.data.BYTES_PER_ELEMENT,(Be+1)*Me/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,Be,le.width,le.height,1,ue,dt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,le.width,le.height,ee.depth,ue,le.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,Ee,le.width,le.height,ee.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?oe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,le.width,le.height,ee.depth,ue,Ue,le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,$,Ee,le.width,le.height,ee.depth,0,ue,Ue,le.data)}else{U&&te&&t.texStorage2D(s.TEXTURE_2D,ge,Ee,Ge[0].width,Ge[0].height);for(let $=0,Y=Ge.length;$<Y;$++)le=Ge[$],w.format!==tn?ue!==null?U?oe&&t.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,le.width,le.height,ue,le.data):t.compressedTexImage2D(s.TEXTURE_2D,$,Ee,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?oe&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,le.width,le.height,ue,Ue,le.data):t.texImage2D(s.TEXTURE_2D,$,Ee,le.width,le.height,0,ue,Ue,le.data)}else if(w.isDataArrayTexture)if(U){if(te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,Ee,ee.width,ee.height,ee.depth),oe)if(w.layerUpdates.size>0){let $=hh(ee.width,ee.height,w.format,w.type);for(let Y of w.layerUpdates){let Me=ee.data.subarray(Y*$/ee.data.BYTES_PER_ELEMENT,(Y+1)*$/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Y,ee.width,ee.height,1,ue,Ue,Me)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ue,Ue,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ee,ee.width,ee.height,ee.depth,0,ue,Ue,ee.data);else if(w.isData3DTexture)U?(te&&t.texStorage3D(s.TEXTURE_3D,ge,Ee,ee.width,ee.height,ee.depth),oe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ue,Ue,ee.data)):t.texImage3D(s.TEXTURE_3D,0,Ee,ee.width,ee.height,ee.depth,0,ue,Ue,ee.data);else if(w.isFramebufferTexture){if(te)if(U)t.texStorage2D(s.TEXTURE_2D,ge,Ee,ee.width,ee.height);else{let $=ee.width,Y=ee.height;for(let Me=0;Me<ge;Me++)t.texImage2D(s.TEXTURE_2D,Me,Ee,$,Y,0,ue,Ue,null),$>>=1,Y>>=1}}else if(Ge.length>0){if(U&&te){let $=Et(Ge[0]);t.texStorage2D(s.TEXTURE_2D,ge,Ee,$.width,$.height)}for(let $=0,Y=Ge.length;$<Y;$++)le=Ge[$],U?oe&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,ue,Ue,le):t.texImage2D(s.TEXTURE_2D,$,Ee,ue,Ue,le);w.generateMipmaps=!1}else if(U){if(te){let $=Et(ee);t.texStorage2D(s.TEXTURE_2D,ge,Ee,$.width,$.height)}oe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ue,Ue,ee)}else t.texImage2D(s.TEXTURE_2D,0,Ee,ue,Ue,ee);g(w)&&p(j),Ae.__version=X.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function K(P,w,B){if(w.image.length!==6)return;let j=nt(P,w),Z=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+B);let X=n.get(Z);if(Z.version!==X.__version||j===!0){t.activeTexture(s.TEXTURE0+B);let Ae=Xe.getPrimaries(Xe.workingColorSpace),ie=w.colorSpace===fi?null:Xe.getPrimaries(w.colorSpace),Se=w.colorSpace===fi||Ae===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let we=w.isCompressedTexture||w.image[0].isCompressedTexture,ee=w.image[0]&&w.image[0].isDataTexture,ue=[];for(let Y=0;Y<6;Y++)!we&&!ee?ue[Y]=b(w.image[Y],!0,i.maxCubemapSize):ue[Y]=ee?w.image[Y].image:w.image[Y],ue[Y]=gt(w,ue[Y]);let Ue=ue[0],Ee=r.convert(w.format,w.colorSpace),le=r.convert(w.type),Ge=y(w.internalFormat,Ee,le,w.colorSpace),U=w.isVideoTexture!==!0,te=X.__version===void 0||j===!0,oe=Z.dataReady,ge=_(w,Ue);Te(s.TEXTURE_CUBE_MAP,w);let $;if(we){U&&te&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Ge,Ue.width,Ue.height);for(let Y=0;Y<6;Y++){$=ue[Y].mipmaps;for(let Me=0;Me<$.length;Me++){let Be=$[Me];w.format!==tn?Ee!==null?U?oe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me,0,0,Be.width,Be.height,Ee,Be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me,Ge,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me,0,0,Be.width,Be.height,Ee,le,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me,Ge,Be.width,Be.height,0,Ee,le,Be.data)}}}else{if($=w.mipmaps,U&&te){$.length>0&&ge++;let Y=Et(ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Ge,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ee){U?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ue[Y].width,ue[Y].height,Ee,le,ue[Y].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ge,ue[Y].width,ue[Y].height,0,Ee,le,ue[Y].data);for(let Me=0;Me<$.length;Me++){let dt=$[Me].image[Y].image;U?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me+1,0,0,dt.width,dt.height,Ee,le,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me+1,Ge,dt.width,dt.height,0,Ee,le,dt.data)}}else{U?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ee,le,ue[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ge,Ee,le,ue[Y]);for(let Me=0;Me<$.length;Me++){let Be=$[Me];U?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me+1,0,0,Ee,le,Be.image[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me+1,Ge,Ee,le,Be.image[Y])}}}g(w)&&p(s.TEXTURE_CUBE_MAP),X.__version=Z.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function fe(P,w,B,j,Z,X){let Ae=r.convert(B.format,B.colorSpace),ie=r.convert(B.type),Se=y(B.internalFormat,Ae,ie,B.colorSpace),we=n.get(w),ee=n.get(B);if(ee.__renderTarget=w,!we.__hasExternalTextures){let ue=Math.max(1,w.width>>X),Ue=Math.max(1,w.height>>X);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,X,Se,ue,Ue,w.depth,0,Ae,ie,null):t.texImage2D(Z,X,Se,ue,Ue,0,Ae,ie,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),me(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,Z,ee.__webglTexture,0,lt(w)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,Z,ee.__webglTexture,X),t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(P,w,B){if(s.bindRenderbuffer(s.RENDERBUFFER,P),w.depthBuffer){let j=w.depthTexture,Z=j&&j.isDepthTexture?j.type:null,X=v(w.stencilBuffer,Z),Ae=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=lt(w);me(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,X,w.width,w.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,X,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,X,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,P)}else{let j=w.textures;for(let Z=0;Z<j.length;Z++){let X=j[Z],Ae=r.convert(X.format,X.colorSpace),ie=r.convert(X.type),Se=y(X.internalFormat,Ae,ie,X.colorSpace),we=lt(w);B&&me(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,Se,w.width,w.height):me(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,Se,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Se,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _e(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(w.depthTexture);j.__renderTarget=w,(!j.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),N(w.depthTexture,0);let Z=j.__webglTexture,X=lt(w);if(w.depthTexture.format===Ls)me(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(w.depthTexture.format===Qs)me(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Je(P){let w=n.get(P),B=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let j=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),j){let Z=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),w.__depthDisposeCallback=Z}w.__boundDepthTexture=j}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");let j=P.texture.mipmaps;j&&j.length>0?_e(w.__webglFramebuffer[0],P):_e(w.__webglFramebuffer,P)}else if(B){w.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[j]),w.__webglDepthbuffer[j]===void 0)w.__webglDepthbuffer[j]=s.createRenderbuffer(),De(w.__webglDepthbuffer[j],P,!1);else{let Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=w.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,X)}}else{let j=P.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),De(w.__webglDepthbuffer,P,!1);else{let Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,X)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(P,w,B){let j=n.get(P);w!==void 0&&fe(j.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Je(P)}function D(P){let w=P.texture,B=n.get(P),j=n.get(w);P.addEventListener("dispose",R);let Z=P.textures,X=P.isWebGLCubeRenderTarget===!0,Ae=Z.length>1;if(Ae||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=w.version,a.memory.textures++),X){B.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer[ie]=[];for(let Se=0;Se<w.mipmaps.length;Se++)B.__webglFramebuffer[ie][Se]=s.createFramebuffer()}else B.__webglFramebuffer[ie]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer=[];for(let ie=0;ie<w.mipmaps.length;ie++)B.__webglFramebuffer[ie]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(Ae)for(let ie=0,Se=Z.length;ie<Se;ie++){let we=n.get(Z[ie]);we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&me(P)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ie=0;ie<Z.length;ie++){let Se=Z[ie];B.__webglColorRenderbuffer[ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[ie]);let we=r.convert(Se.format,Se.colorSpace),ee=r.convert(Se.type),ue=y(Se.internalFormat,we,ee,Se.colorSpace,P.isXRRenderTarget===!0),Ue=lt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,ue,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.RENDERBUFFER,B.__webglColorRenderbuffer[ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),De(B.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Te(s.TEXTURE_CUBE_MAP,w);for(let ie=0;ie<6;ie++)if(w.mipmaps&&w.mipmaps.length>0)for(let Se=0;Se<w.mipmaps.length;Se++)fe(B.__webglFramebuffer[ie][Se],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se);else fe(B.__webglFramebuffer[ie],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);g(w)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ie=0,Se=Z.length;ie<Se;ie++){let we=Z[ie],ee=n.get(we),ue=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ue=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,ee.__webglTexture),Te(ue,we),fe(B.__webglFramebuffer,P,we,s.COLOR_ATTACHMENT0+ie,ue,0),g(we)&&p(ue)}t.unbindTexture()}else{let ie=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ie=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,j.__webglTexture),Te(ie,w),w.mipmaps&&w.mipmaps.length>0)for(let Se=0;Se<w.mipmaps.length;Se++)fe(B.__webglFramebuffer[Se],P,w,s.COLOR_ATTACHMENT0,ie,Se);else fe(B.__webglFramebuffer,P,w,s.COLOR_ATTACHMENT0,ie,0);g(w)&&p(ie),t.unbindTexture()}P.depthBuffer&&Je(P)}function ct(P){let w=P.textures;for(let B=0,j=w.length;B<j;B++){let Z=w[B];if(g(Z)){let X=x(P),Ae=n.get(Z).__webglTexture;t.bindTexture(X,Ae),p(X),t.unbindTexture()}}}let ke=[],Le=[];function ve(P){if(P.samples>0){if(me(P)===!1){let w=P.textures,B=P.width,j=P.height,Z=s.COLOR_BUFFER_BIT,X=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=n.get(P),ie=w.length>1;if(ie)for(let we=0;we<w.length;we++)t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);let Se=P.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let we=0;we<w.length;we++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);let ee=n.get(w[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,B,j,0,0,B,j,Z,s.NEAREST),c===!0&&(ke.length=0,Le.length=0,ke.push(s.COLOR_ATTACHMENT0+we),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ke.push(X),Le.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Le)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ie)for(let we=0;we<w.length;we++){t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);let ee=n.get(w[we]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let w=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function lt(P){return Math.min(i.maxSamples,P.samples)}function me(P){let w=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Oe(P){let w=a.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function gt(P,w){let B=P.colorSpace,j=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||B!==It&&B!==fi&&(Xe.getTransfer(B)===et?(j!==tn||Z!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),w}function Et(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=N,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=G,this.rebindTextures=Ft,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=me}function M4(s,e){function t(n,i=fi){let r,a=Xe.getTransfer(i);if(n===Ln)return s.UNSIGNED_BYTE;if(n===Zo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===$o)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Kl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Jl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===jl)return s.BYTE;if(n===Yl)return s.SHORT;if(n===Zs)return s.UNSIGNED_SHORT;if(n===Jo)return s.INT;if(n===Ci)return s.UNSIGNED_INT;if(n===yn)return s.FLOAT;if(n===jt)return s.HALF_FLOAT;if(n===Zl)return s.ALPHA;if(n===$l)return s.RGB;if(n===tn)return s.RGBA;if(n===Ls)return s.DEPTH_COMPONENT;if(n===Qs)return s.DEPTH_STENCIL;if(n===Qo)return s.RED;if(n===ec)return s.RED_INTEGER;if(n===Ql)return s.RG;if(n===tc)return s.RG_INTEGER;if(n===nc)return s.RGBA_INTEGER;if(n===ha||n===ua||n===da||n===fa)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ic||n===sc||n===rc||n===ac)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oc||n===cc||n===lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oc||n===cc)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lc)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===bc||n===vc||n===xc||n===yc||n===_c||n===Mc||n===Sc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hc)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uc)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dc)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fc)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pc)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mc)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gc)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bc)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vc)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xc)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yc)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_c)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mc)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sc)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wc||n===Ec||n===Tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===wc)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ac||n===Rc||n===Cc||n===Pc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ac)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$s?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var S4=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w4=`
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

}`,Sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new zr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new tt({vertexShader:S4,fragmentShader:w4,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ie(new Pt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wh=class extends si{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,b=typeof XRWebGLBinding<"u",g=new Sh,p={},x=t.getContextAttributes(),y=null,v=null,_=[],E=[],R=new ae,A=null,S=new St;S.viewport=new ze;let M=new St;M.viewport=new ze;let I=[S,M],L=new Lo,F=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=_[q];return K===void 0&&(K=new Os,_[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=_[q];return K===void 0&&(K=new Os,_[q]=K),K.getGripSpace()},this.getHand=function(q){let K=_[q];return K===void 0&&(K=new Os,_[q]=K),K.getHandSpace()};function N(q){let K=E.indexOf(q.inputSource);if(K===-1)return;let fe=_[K];fe!==void 0&&(fe.update(q.inputSource,q.frame,l||a),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",J);for(let q=0;q<_.length;q++){let K=E[q];K!==null&&(E[q]=null,_[q].disconnect(K))}F=null,z=null,g.reset();for(let q in p)delete p[q];e.setRenderTarget(y),f=null,d=null,u=null,i=null,v=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",H),i.addEventListener("inputsourceschange",J),x.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,De=null,_e=null;x.depth&&(_e=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=x.stencil?Qs:Ls,De=x.stencil?$s:Ci);let Je={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Je),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Ct(d.textureWidth,d.textureHeight,{format:tn,type:Ln,depthTexture:new Br(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let fe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ct(f.framebufferWidth,f.framebufferHeight,{format:tn,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),$e.setContext(i),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(q){for(let K=0;K<q.removed.length;K++){let fe=q.removed[K],De=E.indexOf(fe);De>=0&&(E[De]=null,_[De].disconnect(fe))}for(let K=0;K<q.added.length;K++){let fe=q.added[K],De=E.indexOf(fe);if(De===-1){for(let Je=0;Je<_.length;Je++)if(Je>=E.length){E.push(fe),De=Je;break}else if(E[Je]===null){E[Je]=fe,De=Je;break}if(De===-1)break}let _e=_[De];_e&&_e.connect(fe)}}let G=new C,se=new C;function re(q,K,fe){G.setFromMatrixPosition(K.matrixWorld),se.setFromMatrixPosition(fe.matrixWorld);let De=G.distanceTo(se),_e=K.projectionMatrix.elements,Je=fe.projectionMatrix.elements,Ft=_e[14]/(_e[10]-1),D=_e[14]/(_e[10]+1),ct=(_e[9]+1)/_e[5],ke=(_e[9]-1)/_e[5],Le=(_e[8]-1)/_e[0],ve=(Je[8]+1)/Je[0],lt=Ft*Le,me=Ft*ve,Oe=De/(-Le+ve),gt=Oe*-Le;if(K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(gt),q.translateZ(Oe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),_e[10]===-1)q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Et=Ft+Oe,P=D+Oe,w=lt-gt,B=me+(De-gt),j=ct*D/P*Et,Z=ke*D/P*Et;q.projectionMatrix.makePerspective(w,B,j,Z,Et,P),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function de(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let K=q.near,fe=q.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&(fe=g.depthFar)),L.near=M.near=S.near=K,L.far=M.far=S.far=fe,(F!==L.near||z!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),F=L.near,z=L.far),L.layers.mask=q.layers.mask|6,S.layers.mask=L.layers.mask&3,M.layers.mask=L.layers.mask&5;let De=q.parent,_e=L.cameras;de(L,De);for(let Je=0;Je<_e.length;Je++)de(_e[Je],De);_e.length===2?re(L,S,M):L.projectionMatrix.copy(S.projectionMatrix),Te(q,L,De)};function Te(q,K,fe){fe===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Yi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(q){return p[q]};let nt=null;function Ke(q,K){if(h=K.getViewerPose(l||a),m=K,h!==null){let fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let De=!1;fe.length!==L.cameras.length&&(L.cameras.length=0,De=!0);for(let D=0;D<fe.length;D++){let ct=fe[D],ke=null;if(f!==null)ke=f.getViewport(ct);else{let ve=u.getViewSubImage(d,ct);ke=ve.viewport,D===0&&(e.setRenderTargetTextures(v,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(v))}let Le=I[D];Le===void 0&&(Le=new St,Le.layers.enable(D),Le.viewport=new ze,I[D]=Le),Le.matrix.fromArray(ct.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(ct.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(ke.x,ke.y,ke.width,ke.height),D===0&&(L.matrix.copy(Le.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),De===!0&&L.cameras.push(Le)}let _e=i.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let D=u.getDepthInformation(fe[0]);D&&D.isValid&&D.texture&&g.init(D,i.renderState)}if(_e&&_e.includes("camera-access")&&b){e.state.unbindTexture(),u=n.getBinding();for(let D=0;D<fe.length;D++){let ct=fe[D].camera;if(ct){let ke=p[ct];ke||(ke=new zr,p[ct]=ke);let Le=u.getCameraImage(ct);ke.sourceTexture=Le}}}}for(let fe=0;fe<_.length;fe++){let De=E[fe],_e=_[fe];De!==null&&_e!==void 0&&_e.update(De,K,l||a)}nt&&nt(q,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),m=null}let $e=new Cf;$e.setAnimationLoop(Ke),this.setAnimationLoop=function(q){nt=q},this.dispose=function(){}}},ls=new Pn,E4=new Ce;function T4(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ah(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),b(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,x,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Vt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Vt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x=e.get(p),y=x.envMap,v=x.envMapRotation;y&&(g.envMap.value=y,ls.copy(v),ls.x*=-1,ls.y*=-1,ls.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),g.envMapRotation.value.setFromMatrix4(E4.makeRotationFromEuler(ls)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function A4(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){let v=y.program;n.uniformBlockBinding(x,v)}function l(x,y){let v=i[x.id];v===void 0&&(m(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",g));let _=y.program;n.updateUBOMapping(x,_);let E=e.render.frame;r[x.id]!==E&&(d(x),r[x.id]=E)}function h(x){let y=u();x.__bindingPointIndex=y;let v=s.createBuffer(),_=x.__size,E=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,_,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let y=i[x.id],v=x.uniforms,_=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let E=0,R=v.length;E<R;E++){let A=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,M=A.length;S<M;S++){let I=A[S];if(f(I,E,S,_)===!0){let L=I.__offset,F=Array.isArray(I.value)?I.value:[I.value],z=0;for(let N=0;N<F.length;N++){let H=F[N],J=b(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,L+z,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,z),z+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,y,v,_){let E=x.value,R=y+"_"+v;if(_[R]===void 0)return typeof E=="number"||typeof E=="boolean"?_[R]=E:_[R]=E.clone(),!0;{let A=_[R];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return _[R]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function m(x){let y=x.uniforms,v=0,_=16;for(let R=0,A=y.length;R<A;R++){let S=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,I=S.length;M<I;M++){let L=S[M],F=Array.isArray(L.value)?L.value:[L.value];for(let z=0,N=F.length;z<N;z++){let H=F[z],J=b(H),G=v%_,se=G%J.boundary,re=G+se;v+=se,re!==0&&_-re<J.storage&&(v+=_-re),L.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=J.storage}}}let E=v%_;return E>0&&(v+=_-E),x.__size=v,x.__cache={},this}function b(x){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){let y=x.target;y.removeEventListener("dispose",g);let v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(let x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}var ba=class{constructor(e={}){let{canvas:t=Jd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let m=new Uint32Array(4),b=new Int32Array(4),g=null,p=null,x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,_=!1;this._outputColorSpace=Tt;let E=0,R=0,A=null,S=-1,M=null,I=new ze,L=new ze,F=null,z=new xe(0),N=0,H=t.width,J=t.height,G=1,se=null,re=null,de=new ze(0,0,H,J),Te=new ze(0,0,H,J),nt=!1,Ke=new Hs,$e=!1,q=!1,K=new Ce,fe=new C,De=new ze,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Je=!1;function Ft(){return A===null?G:1}let D=n;function ct(T,O){return t.getContext(T,O)}try{let T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",$,!1),D===null){let O="webgl2";if(D=ct(O,T),D===null)throw ct(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ke,Le,ve,lt,me,Oe,gt,Et,P,w,B,j,Z,X,Ae,ie,Se,we,ee,ue,Ue,Ee,le,Ge;function U(){ke=new qm(D),ke.init(),Ee=new M4(D,ke),Le=new km(D,ke,e,Ee),ve=new y4(D,ke),Le.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),lt=new Ym(D),me=new o4,Oe=new _4(D,ke,ve,me,Le,Ee,lt),gt=new zm(v),Et=new Wm(v),P=new e2(D),le=new Nm(D,P),w=new Xm(D,P,lt,le),B=new Jm(D,w,P,lt),ee=new Km(D,Le,Oe),ie=new Bm(me),j=new a4(v,gt,Et,ke,Le,le,ie),Z=new T4(v,me),X=new l4,Ae=new m4(ke),we=new Um(v,gt,Et,ve,B,f,c),Se=new v4(v,B,Le),Ge=new A4(D,lt,Le,ve),ue=new Om(D,ke,lt),Ue=new jm(D,ke,lt),lt.programs=j.programs,v.capabilities=Le,v.extensions=ke,v.properties=me,v.renderLists=X,v.shadowMap=Se,v.state=ve,v.info=lt}U();let te=new wh(v,D);this.xr=te,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=ke.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ke.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(H,J,!1))},this.getSize=function(T){return T.set(H,J)},this.setSize=function(T,O,V=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,J=O,t.width=Math.floor(T*G),t.height=Math.floor(O*G),V===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(H*G,J*G).floor()},this.setDrawingBufferSize=function(T,O,V){H=T,J=O,G=V,t.width=Math.floor(T*V),t.height=Math.floor(O*V),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(de)},this.setViewport=function(T,O,V,W){T.isVector4?de.set(T.x,T.y,T.z,T.w):de.set(T,O,V,W),ve.viewport(I.copy(de).multiplyScalar(G).round())},this.getScissor=function(T){return T.copy(Te)},this.setScissor=function(T,O,V,W){T.isVector4?Te.set(T.x,T.y,T.z,T.w):Te.set(T,O,V,W),ve.scissor(L.copy(Te).multiplyScalar(G).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(T){ve.setScissorTest(nt=T)},this.setOpaqueSort=function(T){se=T},this.setTransparentSort=function(T){re=T},this.getClearColor=function(T){return T.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,V=!0){let W=0;if(T){let k=!1;if(A!==null){let Q=A.texture.format;k=Q===nc||Q===tc||Q===ec}if(k){let Q=A.texture.type,he=Q===Ln||Q===Ci||Q===Zs||Q===$s||Q===Zo||Q===$o,ye=we.getClearColor(),pe=we.getClearAlpha(),Fe=ye.r,Ne=ye.g,Re=ye.b;he?(m[0]=Fe,m[1]=Ne,m[2]=Re,m[3]=pe,D.clearBufferuiv(D.COLOR,0,m)):(b[0]=Fe,b[1]=Ne,b[2]=Re,b[3]=pe,D.clearBufferiv(D.COLOR,0,b))}else W|=D.COLOR_BUFFER_BIT}O&&(W|=D.DEPTH_BUFFER_BIT),V&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",$,!1),we.dispose(),X.dispose(),Ae.dispose(),me.dispose(),gt.dispose(),Et.dispose(),B.dispose(),le.dispose(),Ge.dispose(),j.dispose(),te.dispose(),te.removeEventListener("sessionstart",kn),te.removeEventListener("sessionend",xu),Ni.stop()};function oe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let T=lt.autoReset,O=Se.enabled,V=Se.autoUpdate,W=Se.needsUpdate,k=Se.type;U(),lt.autoReset=T,Se.enabled=O,Se.autoUpdate=V,Se.needsUpdate=W,Se.type=k}function $(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Y(T){let O=T.target;O.removeEventListener("dispose",Y),Me(O)}function Me(T){Be(T),me.remove(T)}function Be(T){let O=me.get(T).programs;O!==void 0&&(O.forEach(function(V){j.releaseProgram(V)}),T.isShaderMaterial&&j.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,V,W,k,Q){O===null&&(O=_e);let he=k.isMesh&&k.matrixWorld.determinant()<0,ye=Sp(T,O,V,W,k);ve.setMaterial(W,he);let pe=V.index,Fe=1;if(W.wireframe===!0){if(pe=w.getWireframeAttribute(V),pe===void 0)return;Fe=2}let Ne=V.drawRange,Re=V.attributes.position,Ze=Ne.start*Fe,ot=(Ne.start+Ne.count)*Fe;Q!==null&&(Ze=Math.max(Ze,Q.start*Fe),ot=Math.min(ot,(Q.start+Q.count)*Fe)),pe!==null?(Ze=Math.max(Ze,0),ot=Math.min(ot,pe.count)):Re!=null&&(Ze=Math.max(Ze,0),ot=Math.min(ot,Re.count));let Mt=ot-Ze;if(Mt<0||Mt===1/0)return;le.setup(k,W,ye,V,pe);let pt,ht=ue;if(pe!==null&&(pt=P.get(pe),ht=Ue,ht.setIndex(pt)),k.isMesh)W.wireframe===!0?(ve.setLineWidth(W.wireframeLinewidth*Ft()),ht.setMode(D.LINES)):ht.setMode(D.TRIANGLES);else if(k.isLine){let Pe=W.linewidth;Pe===void 0&&(Pe=1),ve.setLineWidth(Pe*Ft()),k.isLineSegments?ht.setMode(D.LINES):k.isLineLoop?ht.setMode(D.LINE_LOOP):ht.setMode(D.LINE_STRIP)}else k.isPoints?ht.setMode(D.POINTS):k.isSprite&&ht.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Us("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))ht.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Pe=k._multiDrawStarts,xt=k._multiDrawCounts,Qe=k._multiDrawCount,cn=pe?P.get(pe).bytesPerElement:1,ms=me.get(W).currentProgram.getUniforms();for(let ln=0;ln<Qe;ln++)ms.setValue(D,"_gl_DrawID",ln),ht.render(Pe[ln]/cn,xt[ln])}else if(k.isInstancedMesh)ht.renderInstances(Ze,Mt,k.count);else if(V.isInstancedBufferGeometry){let Pe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,xt=Math.min(V.instanceCount,Pe);ht.renderInstances(Ze,Mt,xt)}else ht.render(Ze,Mt)};function dt(T,O,V){T.transparent===!0&&T.side===Xt&&T.forceSinglePass===!1?(T.side=Vt,T.needsUpdate=!0,Fa(T,O,V),T.side=Cn,T.needsUpdate=!0,Fa(T,O,V),T.side=Xt):Fa(T,O,V)}this.compile=function(T,O,V=null){V===null&&(V=T),p=Ae.get(V),p.init(O),y.push(p),V.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==V&&T.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let W=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let Q=k.material;if(Q)if(Array.isArray(Q))for(let he=0;he<Q.length;he++){let ye=Q[he];dt(ye,V,k),W.add(ye)}else dt(Q,V,k),W.add(Q)}),p=y.pop(),W},this.compileAsync=function(T,O,V=null){let W=this.compile(T,O,V);return new Promise(k=>{function Q(){if(W.forEach(function(he){me.get(he).currentProgram.isReady()&&W.delete(he)}),W.size===0){k(T);return}setTimeout(Q,10)}ke.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let it=null;function Kn(T){it&&it(T)}function kn(){Ni.stop()}function xu(){Ni.start()}let Ni=new Cf;Ni.setAnimationLoop(Kn),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(T){it=T,te.setAnimationLoop(T),T===null?Ni.stop():Ni.start()},te.addEventListener("sessionstart",kn),te.addEventListener("sessionend",xu),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(O),O=te.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,O,A),p=Ae.get(T,y.length),p.init(O),y.push(p),K.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ke.setFromProjectionMatrix(K,Rn,O.reversedDepth),q=this.localClippingEnabled,$e=ie.init(this.clippingPlanes,q),g=X.get(T,x.length),g.init(),x.push(g),te.enabled===!0&&te.isPresenting===!0){let Q=v.xr.getDepthSensingMesh();Q!==null&&Kc(Q,O,-1/0,v.sortObjects)}Kc(T,O,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(se,re),Je=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Je&&we.addToRenderList(g,T),this.info.render.frame++,$e===!0&&ie.beginShadows();let V=p.state.shadowsArray;Se.render(V,T,O),$e===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=g.opaque,k=g.transmissive;if(p.setupLights(),O.isArrayCamera){let Q=O.cameras;if(k.length>0)for(let he=0,ye=Q.length;he<ye;he++){let pe=Q[he];_u(W,k,T,pe)}Je&&we.render(T);for(let he=0,ye=Q.length;he<ye;he++){let pe=Q[he];yu(g,T,pe,pe.viewport)}}else k.length>0&&_u(W,k,T,O),Je&&we.render(T),yu(g,T,O);A!==null&&R===0&&(Oe.updateMultisampleRenderTarget(A),Oe.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(v,T,O),le.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],$e===!0&&ie.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Kc(T,O,V,W){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ke.intersectsSprite(T)){W&&De.setFromMatrixPosition(T.matrixWorld).applyMatrix4(K);let he=B.update(T),ye=T.material;ye.visible&&g.push(T,he,ye,V,De.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ke.intersectsObject(T))){let he=B.update(T),ye=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),De.copy(T.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),De.copy(he.boundingSphere.center)),De.applyMatrix4(T.matrixWorld).applyMatrix4(K)),Array.isArray(ye)){let pe=he.groups;for(let Fe=0,Ne=pe.length;Fe<Ne;Fe++){let Re=pe[Fe],Ze=ye[Re.materialIndex];Ze&&Ze.visible&&g.push(T,he,Ze,V,De.z,Re)}}else ye.visible&&g.push(T,he,ye,V,De.z,null)}}let Q=T.children;for(let he=0,ye=Q.length;he<ye;he++)Kc(Q[he],O,V,W)}function yu(T,O,V,W){let k=T.opaque,Q=T.transmissive,he=T.transparent;p.setupLightsView(V),$e===!0&&ie.setGlobalState(v.clippingPlanes,V),W&&ve.viewport(I.copy(W)),k.length>0&&La(k,O,V),Q.length>0&&La(Q,O,V),he.length>0&&La(he,O,V),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function _u(T,O,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Ct(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?jt:Ln,minFilter:Dn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));let Q=p.state.transmissionRenderTarget[W.id],he=W.viewport||I;Q.setSize(he.z*v.transmissionResolutionScale,he.w*v.transmissionResolutionScale);let ye=v.getRenderTarget(),pe=v.getActiveCubeFace(),Fe=v.getActiveMipmapLevel();v.setRenderTarget(Q),v.getClearColor(z),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear(),Je&&we.render(V);let Ne=v.toneMapping;v.toneMapping=di;let Re=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),$e===!0&&ie.setGlobalState(v.clippingPlanes,W),La(T,V,W),Oe.updateMultisampleRenderTarget(Q),Oe.updateRenderTargetMipmap(Q),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let ot=0,Mt=O.length;ot<Mt;ot++){let pt=O[ot],ht=pt.object,Pe=pt.geometry,xt=pt.material,Qe=pt.group;if(xt.side===Xt&&ht.layers.test(W.layers)){let cn=xt.side;xt.side=Vt,xt.needsUpdate=!0,Mu(ht,V,W,Pe,xt,Qe),xt.side=cn,xt.needsUpdate=!0,Ze=!0}}Ze===!0&&(Oe.updateMultisampleRenderTarget(Q),Oe.updateRenderTargetMipmap(Q))}v.setRenderTarget(ye,pe,Fe),v.setClearColor(z,N),Re!==void 0&&(W.viewport=Re),v.toneMapping=Ne}function La(T,O,V){let W=O.isScene===!0?O.overrideMaterial:null;for(let k=0,Q=T.length;k<Q;k++){let he=T[k],ye=he.object,pe=he.geometry,Fe=he.group,Ne=he.material;Ne.allowOverride===!0&&W!==null&&(Ne=W),ye.layers.test(V.layers)&&Mu(ye,O,V,pe,Ne,Fe)}}function Mu(T,O,V,W,k,Q){T.onBeforeRender(v,O,V,W,k,Q),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(v,O,V,W,T,Q),k.transparent===!0&&k.side===Xt&&k.forceSinglePass===!1?(k.side=Vt,k.needsUpdate=!0,v.renderBufferDirect(V,O,W,k,T,Q),k.side=Cn,k.needsUpdate=!0,v.renderBufferDirect(V,O,W,k,T,Q),k.side=Xt):v.renderBufferDirect(V,O,W,k,T,Q),T.onAfterRender(v,O,V,W,k,Q)}function Fa(T,O,V){O.isScene!==!0&&(O=_e);let W=me.get(T),k=p.state.lights,Q=p.state.shadowsArray,he=k.state.version,ye=j.getParameters(T,k.state,Q,O,V),pe=j.getProgramCacheKey(ye),Fe=W.programs;W.environment=T.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(T.isMeshStandardMaterial?Et:gt).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Fe===void 0&&(T.addEventListener("dispose",Y),Fe=new Map,W.programs=Fe);let Ne=Fe.get(pe);if(Ne!==void 0){if(W.currentProgram===Ne&&W.lightsStateVersion===he)return wu(T,ye),Ne}else ye.uniforms=j.getUniforms(T),T.onBeforeCompile(ye,v),Ne=j.acquireProgram(ye,pe),Fe.set(pe,Ne),W.uniforms=ye.uniforms;let Re=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Re.clippingPlanes=ie.uniform),wu(T,ye),W.needsLights=Ep(T),W.lightsStateVersion=he,W.needsLights&&(Re.ambientLightColor.value=k.state.ambient,Re.lightProbe.value=k.state.probe,Re.directionalLights.value=k.state.directional,Re.directionalLightShadows.value=k.state.directionalShadow,Re.spotLights.value=k.state.spot,Re.spotLightShadows.value=k.state.spotShadow,Re.rectAreaLights.value=k.state.rectArea,Re.ltc_1.value=k.state.rectAreaLTC1,Re.ltc_2.value=k.state.rectAreaLTC2,Re.pointLights.value=k.state.point,Re.pointLightShadows.value=k.state.pointShadow,Re.hemisphereLights.value=k.state.hemi,Re.directionalShadowMap.value=k.state.directionalShadowMap,Re.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Re.spotShadowMap.value=k.state.spotShadowMap,Re.spotLightMatrix.value=k.state.spotLightMatrix,Re.spotLightMap.value=k.state.spotLightMap,Re.pointShadowMap.value=k.state.pointShadowMap,Re.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Ne,W.uniformsList=null,Ne}function Su(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=ir.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function wu(T,O){let V=me.get(T);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Sp(T,O,V,W,k){O.isScene!==!0&&(O=_e),Oe.resetTextureUnits();let Q=O.fog,he=W.isMeshStandardMaterial?O.environment:null,ye=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:It,pe=(W.isMeshStandardMaterial?Et:gt).get(W.envMap||he),Fe=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ne=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Re=!!V.morphAttributes.position,Ze=!!V.morphAttributes.normal,ot=!!V.morphAttributes.color,Mt=di;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Mt=v.toneMapping);let pt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ht=pt!==void 0?pt.length:0,Pe=me.get(W),xt=p.state.lights;if($e===!0&&(q===!0||T!==M)){let Jt=T===M&&W.id===S;ie.setState(W,T,Jt)}let Qe=!1;W.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==xt.state.version||Pe.outputColorSpace!==ye||k.isBatchedMesh&&Pe.batching===!1||!k.isBatchedMesh&&Pe.batching===!0||k.isBatchedMesh&&Pe.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Pe.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Pe.instancing===!1||!k.isInstancedMesh&&Pe.instancing===!0||k.isSkinnedMesh&&Pe.skinning===!1||!k.isSkinnedMesh&&Pe.skinning===!0||k.isInstancedMesh&&Pe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Pe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Pe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Pe.instancingMorph===!1&&k.morphTexture!==null||Pe.envMap!==pe||W.fog===!0&&Pe.fog!==Q||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ie.numPlanes||Pe.numIntersection!==ie.numIntersection)||Pe.vertexAlphas!==Fe||Pe.vertexTangents!==Ne||Pe.morphTargets!==Re||Pe.morphNormals!==Ze||Pe.morphColors!==ot||Pe.toneMapping!==Mt||Pe.morphTargetsCount!==ht)&&(Qe=!0):(Qe=!0,Pe.__version=W.version);let cn=Pe.currentProgram;Qe===!0&&(cn=Fa(W,O,k));let ms=!1,ln=!1,hr=!1,yt=cn.getUniforms(),mn=Pe.uniforms;if(ve.useProgram(cn.program)&&(ms=!0,ln=!0,hr=!0),W.id!==S&&(S=W.id,ln=!0),ms||M!==T){ve.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),yt.setValue(D,"projectionMatrix",T.projectionMatrix),yt.setValue(D,"viewMatrix",T.matrixWorldInverse);let nn=yt.map.cameraPosition;nn!==void 0&&nn.setValue(D,fe.setFromMatrixPosition(T.matrixWorld)),Le.logarithmicDepthBuffer&&yt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&yt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,ln=!0,hr=!0)}if(k.isSkinnedMesh){yt.setOptional(D,k,"bindMatrix"),yt.setOptional(D,k,"bindMatrixInverse");let Jt=k.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),yt.setValue(D,"boneTexture",Jt.boneTexture,Oe))}k.isBatchedMesh&&(yt.setOptional(D,k,"batchingTexture"),yt.setValue(D,"batchingTexture",k._matricesTexture,Oe),yt.setOptional(D,k,"batchingIdTexture"),yt.setValue(D,"batchingIdTexture",k._indirectTexture,Oe),yt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&yt.setValue(D,"batchingColorTexture",k._colorsTexture,Oe));let gn=V.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&ee.update(k,V,cn),(ln||Pe.receiveShadow!==k.receiveShadow)&&(Pe.receiveShadow=k.receiveShadow,yt.setValue(D,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(mn.envMap.value=pe,mn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(mn.envMapIntensity.value=O.environmentIntensity),ln&&(yt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Pe.needsLights&&wp(mn,hr),Q&&W.fog===!0&&Z.refreshFogUniforms(mn,Q),Z.refreshMaterialUniforms(mn,W,G,J,p.state.transmissionRenderTarget[T.id]),ir.upload(D,Su(Pe),mn,Oe)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ir.upload(D,Su(Pe),mn,Oe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&yt.setValue(D,"center",k.center),yt.setValue(D,"modelViewMatrix",k.modelViewMatrix),yt.setValue(D,"normalMatrix",k.normalMatrix),yt.setValue(D,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Jt=W.uniformsGroups;for(let nn=0,Jc=Jt.length;nn<Jc;nn++){let Oi=Jt[nn];Ge.update(Oi,cn),Ge.bind(Oi,cn)}}return cn}function wp(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Ep(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,O,V){let W=me.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),me.get(T.texture).__webglTexture=O,me.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:V,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){let V=me.get(T);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0};let Tp=D.createFramebuffer();this.setRenderTarget=function(T,O=0,V=0){A=T,E=O,R=V;let W=!0,k=null,Q=!1,he=!1;if(T){let pe=me.get(T);if(pe.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(pe.__webglFramebuffer===void 0)Oe.setupRenderTarget(T);else if(pe.__hasExternalTextures)Oe.rebindTextures(T,me.get(T.texture).__webglTexture,me.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Re=T.depthTexture;if(pe.__boundDepthTexture!==Re){if(Re!==null&&me.has(Re)&&(T.width!==Re.image.width||T.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(T)}}let Fe=T.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(he=!0);let Ne=me.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ne[O])?k=Ne[O][V]:k=Ne[O],Q=!0):T.samples>0&&Oe.useMultisampledRTT(T)===!1?k=me.get(T).__webglMultisampledFramebuffer:Array.isArray(Ne)?k=Ne[V]:k=Ne,I.copy(T.viewport),L.copy(T.scissor),F=T.scissorTest}else I.copy(de).multiplyScalar(G).floor(),L.copy(Te).multiplyScalar(G).floor(),F=nt;if(V!==0&&(k=Tp),ve.bindFramebuffer(D.FRAMEBUFFER,k)&&W&&ve.drawBuffers(T,k),ve.viewport(I),ve.scissor(L),ve.setScissorTest(F),Q){let pe=me.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,pe.__webglTexture,V)}else if(he){let pe=O;for(let Fe=0;Fe<T.textures.length;Fe++){let Ne=me.get(T.textures[Fe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Fe,Ne.__webglTexture,V,pe)}}else if(T!==null&&V!==0){let pe=me.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pe.__webglTexture,V)}S=-1},this.readRenderTargetPixels=function(T,O,V,W,k,Q,he,ye=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe){ve.bindFramebuffer(D.FRAMEBUFFER,pe);try{let Fe=T.textures[ye],Ne=Fe.format,Re=Fe.type;if(!Le.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-W&&V>=0&&V<=T.height-k&&(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ye),D.readPixels(O,V,W,k,Ee.convert(Ne),Ee.convert(Re),Q))}finally{let Fe=A!==null?me.get(A).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(T,O,V,W,k,Q,he,ye=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe)if(O>=0&&O<=T.width-W&&V>=0&&V<=T.height-k){ve.bindFramebuffer(D.FRAMEBUFFER,pe);let Fe=T.textures[ye],Ne=Fe.format,Re=Fe.type;if(!Le.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.bufferData(D.PIXEL_PACK_BUFFER,Q.byteLength,D.STREAM_READ),T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ye),D.readPixels(O,V,W,k,Ee.convert(Ne),Ee.convert(Re),0);let ot=A!==null?me.get(A).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,ot);let Mt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Zd(D,Mt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Q),D.deleteBuffer(Ze),D.deleteSync(Mt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,V=0){let W=Math.pow(2,-V),k=Math.floor(T.image.width*W),Q=Math.floor(T.image.height*W),he=O!==null?O.x:0,ye=O!==null?O.y:0;Oe.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,he,ye,k,Q),ve.unbindTexture()};let Ap=D.createFramebuffer(),Rp=D.createFramebuffer();this.copyTextureToTexture=function(T,O,V=null,W=null,k=0,Q=null){Q===null&&(k!==0?(Us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=k,k=0):Q=0);let he,ye,pe,Fe,Ne,Re,Ze,ot,Mt,pt=T.isCompressedTexture?T.mipmaps[Q]:T.image;if(V!==null)he=V.max.x-V.min.x,ye=V.max.y-V.min.y,pe=V.isBox3?V.max.z-V.min.z:1,Fe=V.min.x,Ne=V.min.y,Re=V.isBox3?V.min.z:0;else{let gn=Math.pow(2,-k);he=Math.floor(pt.width*gn),ye=Math.floor(pt.height*gn),T.isDataArrayTexture?pe=pt.depth:T.isData3DTexture?pe=Math.floor(pt.depth*gn):pe=1,Fe=0,Ne=0,Re=0}W!==null?(Ze=W.x,ot=W.y,Mt=W.z):(Ze=0,ot=0,Mt=0);let ht=Ee.convert(O.format),Pe=Ee.convert(O.type),xt;O.isData3DTexture?(Oe.setTexture3D(O,0),xt=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Oe.setTexture2DArray(O,0),xt=D.TEXTURE_2D_ARRAY):(Oe.setTexture2D(O,0),xt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);let Qe=D.getParameter(D.UNPACK_ROW_LENGTH),cn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ms=D.getParameter(D.UNPACK_SKIP_PIXELS),ln=D.getParameter(D.UNPACK_SKIP_ROWS),hr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,pt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Fe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ne),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Re);let yt=T.isDataArrayTexture||T.isData3DTexture,mn=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){let gn=me.get(T),Jt=me.get(O),nn=me.get(gn.__renderTarget),Jc=me.get(Jt.__renderTarget);ve.bindFramebuffer(D.READ_FRAMEBUFFER,nn.__webglFramebuffer),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,Jc.__webglFramebuffer);for(let Oi=0;Oi<pe;Oi++)yt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,me.get(T).__webglTexture,k,Re+Oi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,me.get(O).__webglTexture,Q,Mt+Oi)),D.blitFramebuffer(Fe,Ne,he,ye,Ze,ot,he,ye,D.DEPTH_BUFFER_BIT,D.NEAREST);ve.bindFramebuffer(D.READ_FRAMEBUFFER,null),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||T.isRenderTargetTexture||me.has(T)){let gn=me.get(T),Jt=me.get(O);ve.bindFramebuffer(D.READ_FRAMEBUFFER,Ap),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,Rp);for(let nn=0;nn<pe;nn++)yt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,gn.__webglTexture,k,Re+nn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,gn.__webglTexture,k),mn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Jt.__webglTexture,Q,Mt+nn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Jt.__webglTexture,Q),k!==0?D.blitFramebuffer(Fe,Ne,he,ye,Ze,ot,he,ye,D.COLOR_BUFFER_BIT,D.NEAREST):mn?D.copyTexSubImage3D(xt,Q,Ze,ot,Mt+nn,Fe,Ne,he,ye):D.copyTexSubImage2D(xt,Q,Ze,ot,Fe,Ne,he,ye);ve.bindFramebuffer(D.READ_FRAMEBUFFER,null),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else mn?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(xt,Q,Ze,ot,Mt,he,ye,pe,ht,Pe,pt.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(xt,Q,Ze,ot,Mt,he,ye,pe,ht,pt.data):D.texSubImage3D(xt,Q,Ze,ot,Mt,he,ye,pe,ht,Pe,pt):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Q,Ze,ot,he,ye,ht,Pe,pt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Q,Ze,ot,pt.width,pt.height,ht,pt.data):D.texSubImage2D(D.TEXTURE_2D,Q,Ze,ot,he,ye,ht,Pe,pt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Qe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,cn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ms),D.pixelStorei(D.UNPACK_SKIP_ROWS,ln),D.pixelStorei(D.UNPACK_SKIP_IMAGES,hr),Q===0&&O.generateMipmaps&&D.generateMipmap(xt),ve.unbindTexture()},this.initRenderTarget=function(T){me.get(T).__webglFramebuffer===void 0&&Oe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Oe.setTextureCube(T,0):T.isData3DTexture?Oe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Oe.setTexture2DArray(T,0):Oe.setTexture2D(T,0),ve.unbindTexture()},this.resetState=function(){E=0,R=0,A=null,ve.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}};var R4=globalThis.__studioEnvironmentRequest||fetch(new URL("./assets/studio-environment.bin.gz?v=1",import.meta.url)).then(s=>{if(!s.ok)throw Error("Environment asset failed to load");return s.arrayBuffer()}),C4=await R4,Ff=await new Response(new Blob([C4]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer(),Uf=new DataView(Ff),P4=Uf.getUint32(0,!0),I4=Uf.getUint32(4,!0),D4=new Uint16Array(Ff,8);function Nf(){let s=new ri(D4,P4,I4,tn,jt);return s.mapping=rs,s.minFilter=s.magFilter=Bt,s.generateMipmaps=!1,s.flipY=!1,s.colorSpace=It,s.needsUpdate=!0,s}function Nc(s,e,t=!1){let n=s.onBeforeCompile;s.onBeforeCompile=i=>{n.call(s,i),Object.assign(i.uniforms,{reflectionMatrix:e.reflectionMatrix,reflectionTexture:e.reflectionTexture,reflectionSharp:e.reflectionSharp,buildingFootprints:e.buildingFootprints,buildingCount:e.buildingCount,reflectionTone:e.environmentTone,reflectionStrength:e.reflectionStrength??={value:1}}),i.vertexShader=`uniform mat4 reflectionMatrix; varying vec4 vGroundReflection; varying vec3 vGroundWorld;
`+i.vertexShader,t?i.vertexShader=i.vertexShader.replace("gl_Position=","vGroundWorld=p;vGroundReflection=reflectionMatrix*vec4(p,1.);gl_Position="):i.vertexShader=i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vGroundWorld=(modelMatrix*vec4(transformed,1.)).xyz;vGroundReflection=reflectionMatrix*vec4(vGroundWorld,1.);`),i.fragmentShader=`uniform float reflectionTone;uniform float reflectionStrength;uniform sampler2D reflectionTexture;uniform sampler2D reflectionSharp;uniform vec4 buildingFootprints[32];uniform int buildingCount;varying vec4 vGroundReflection;varying vec3 vGroundWorld;
`+i.fragmentShader;let r="float distanceToBuilding=1000.;for(int i=0;i<32;i++){if(i>=buildingCount)break;vec4 b=buildingFootprints[i];vec2 outside=max(abs(vGroundWorld.xz-b.xy)-b.zw,0.);distanceToBuilding=min(distanceToBuilding,length(outside));}float proximity=1.-smoothstep(.15,18.,distanceToBuilding);vec2 reflectionUV=vGroundReflection.xy/vGroundReflection.w;float valid=(1.-smoothstep(.2,1.,abs(vGroundWorld.y)))*step(0.,reflectionUV.x)*step(reflectionUV.x,1.)*step(0.,reflectionUV.y)*step(reflectionUV.y,1.);vec4 reflectedSample=mix(texture2D(reflectionSharp,reflectionUV),texture2D(reflectionTexture,reflectionUV),smoothstep(0.,2.8,distanceToBuilding));vec3 softReflection=reflectedSample.rgb/max(reflectedSample.a,.001);valid*=reflectedSample.a;";t?i.fragmentShader=i.fragmentShader.replace("gl_FragColor=vec4(surface,1.);",r+"surface=mix(surface,clamp(softReflection,surface*mix(.32,.65,reflectionTone),surface*mix(1.04,1.95,reflectionTone)),mix(.38,.34,reflectionTone)*proximity*valid*reflectionStrength);gl_FragColor=vec4(surface,1.);"):i.fragmentShader=i.fragmentShader.replace("#include <opaque_fragment>",r+`outgoingLight=mix(outgoingLight,clamp(softReflection,outgoingLight*mix(.32,.65,reflectionTone),outgoingLight*mix(1.04,1.95,reflectionTone)),mix(.38,.34,reflectionTone)*proximity*valid*reflectionStrength);
#include <opaque_fragment>`)},s.customProgramCacheKey=()=>"localized-building-reflection-r18-"+t}function Oc(s,e,t=!1){let n={balanced:[[.37,.435,.52],[.37,.435,.52],[.54,.62,.72]],current:[[.48,.59,.77],[.26,.35,.48],[.66,.94,1.45]],cool:[[.59,.61,.64],[.43,.46,.5],[.72,.74,.77]],neutral:[[.61,.62,.63],[.46,.47,.48],[.72,.73,.74]],warm:[[.64,.62,.59],[.49,.47,.44],[.75,.73,.69]],soft:[[.67,.68,.69],[.53,.54,.55],[.77,.78,.79]]},i=n[s.palette]||n.current,r=new tt({uniforms:{tone:e,outdoor:{value:t?1:0},horizon:s.sky.material.uniforms.bottom,base:{value:new C(...i[0])},centerTone:{value:new C(...i[1])},farTone:{value:new C(...i[2])}},toneMapped:!1,depthWrite:!0,vertexShader:"varying vec3 p;void main(){p=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}",fragmentShader:`uniform float tone;uniform float outdoor;uniform vec3 horizon;uniform vec3 base;uniform vec3 centerTone;uniform vec3 farTone;varying vec3 p;
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
#include <colorspace_fragment>}`});return Nc(r,s,!0),r}function Of(){let s=new tt({transparent:!0,depthWrite:!1,depthTest:!0,blending:la,uniforms:{opacity:{value:.32},roughness:{value:.72}},vertexShader:`varying vec3 ground;varying vec3 viewer;varying vec2 edgeUV;
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
   }`}),e=new Ie(new Pt(3.8,2),s);return e.rotation.x=-Math.PI/2,e}function kf(s,e,t,n=!1){s.position.set(e.position.x,e.position.y-.002,e.position.z+2.85),s.material.uniforms.opacity.value=t?.46:.045,s.material.uniforms.roughness.value=n?.86:.9}var L4={low:.785,high:.69};function F4(s,e,t=!1){s.updateMatrixWorld(!0),e.updateMatrixWorld(!0);let n=new Ce().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i=new Ce,r=new C,a=1/0,o=-1/0,c=1/0,l=-1/0;return s.traverse(h=>{if(!h.isMesh)return;let u=h.geometry.getAttribute("position");if(!u)return;i.multiplyMatrices(n,h.matrixWorld);let d=t?null:h.geometry.userData.frameIndices;for(let f=0;f<(d?.length??u.count);f++){let m=d?d[f]:f;r.fromBufferAttribute(u,m).applyMatrix4(i);let b=(r.x+1)/2,g=(1-r.y)/2;a=Math.min(a,b),o=Math.max(o,b),c=Math.min(c,g),l=Math.max(l,g)}}),{left:a,top:c,width:o-a,height:l-c,bottom:l,bottomMargin:1-l}}function Bf(s,e,t){let n=L4[t],i=F4(s,e),r=e.view,a=r?.enabled?r.offsetX:0,o=r?.enabled?r.offsetY:0;return e.setViewOffset(1920,1080,a,o+(i.bottom-n)*1080,1920,1080),e.updateMatrixWorld(!0),{group:t,targetBottom:n,viewOffset:{x:e.view.offsetX,y:e.view.offsetY},vehicleFrame:{...i,top:i.top-(i.bottom-n),bottom:n,bottomMargin:1-n}}}function zf(s){let e={value:s.state?.mode==="dark"?1:0};s.parkingTone=e,s.parkingShadow=null,s.parkingGhostMaterials=[],s.parkedVehicles=[],s.plane(2e4,2e4,0,-1e3,-.14,"ground");let t=s.plane(2e4,2e4,0,-1e3,.015,"parkingFloor");t.material=Oc(s,e,!0),t.userData.reflectiveSurface=!0;let n=new Ie(new Pt(2e3,2e3,64,64),new Qi({color:1581355,opacity:.24,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));n.rotation.x=-Math.PI/2,n.position.set(0,.018,-60),n.receiveShadow=!0,n.userData.reflectiveSurface=!0,s.root.add(n),s.parkingShadow=n;let i=new tt({polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8,uniforms:{tone:e,study:{value:s.palette==="current"?0:1}},transparent:!0,depthWrite:!1,vertexShader:"varying vec3 p;varying vec2 v;void main(){v=uv;p=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}",fragmentShader:`uniform float tone;uniform float study;varying vec3 p;varying vec2 v;void main(){if(study<.5){gl_FragColor=vec4(vec3(tone),mix(.17,.025,tone));return;}float distanceFade=exp(-dot(p.xz*vec2(.035,.04),p.xz*vec2(.035,.04)));float sheen=.91+.09*v.y;vec3 dark=vec3(1.);vec3 light=vec3(0.);vec2 q=abs(v-.5)-vec2(.475,.455);float sd=length(max(q,0.))+min(max(q.x,q.y),0.)-.018;float mask=1.-smoothstep(-.002,.003,sd);float edge=1.-smoothstep(0.,.009,abs(sd));float alpha=(mix(.23,.025,tone)*(.72+.28*distanceFade))*mask;float original=mix(.17,.025,tone)*(.72+.28*distanceFade);gl_FragColor=vec4(mix(light,dark,tone),mix(original,alpha,study));
#include <tonemapping_fragment>
#include <colorspace_fragment>}`});s.parkingBays=[],s.parkingColumns=[],s.pedestrianPassages=[{x:-9.4,z:-1,width:1.5,depth:42,clearWidth:1.5},{x:9.4,z:-1,width:1.5,depth:42,clearWidth:1.5}];for(let o of[-1,1])for(let c of Array.from({length:11},(l,h)=>11-h*3.3)){let l=o*6,h=4.7,u=2.8,d=new Ie(new Pt(h,u),i);d.rotation.x=-Math.PI/2,d.position.set(l,.028,c),s.root.add(d),s.parkingBays.push({x:l,z:c,width:h,depth:u,angle:0});let f=s.box(.16,.1,1.65,o*8.02,.07,c,"curb",.035);f.material=new qt({color:"#4a4b49",roughness:.85}),f.castShadow=!1;for(let m of[-.48,.48]){let b=s.box(.17,.012,.25,o*8.02,.128,c+m,"yellow",.01);b.castShadow=!1}}for(let o of[-1,1])for(let[c,l]of[12,-3,-18].entries())s.building(o*(15.15+(c===1?1.2:0)),l,10,11.5,[8.6,11.2,7.4][c]);for(let[o,c,l,h,u]of[[-15,-42,12,9,5.2],[9,-48,13,9,5.8]])s.building(o,c,l,h,u);let r=s.box(16.7,.18,3,0,.09,-25.8,"pavement",.1);r.castShadow=!1;let a=s.box(16.3,.32,2.6,0,.32,-25.8,"grass",.16);a.castShadow=!1;for(let o of[-1,1]){let c=o*10.8,l=-10.5,h=s.plane(3.2,3.2,c,l,.03,"grass");s.lawns.push(h),s.tree(c,l,o<0?1.32:1.4);let u=s.vegetation.children.at(-1);u.scale.x*=.82,u.scale.z*=.82}s.parkingReplica={method:"ground-level residential parking; bays 1.5m from building faces; no road junction",occupiedBays:0,noNavigationGraphics:!0,buildingBayGap:1.8,headGap:.3,planterBounds:{left:-8.35,right:8.35,center:0},wheelStops:22,wheelStopFromBayEnd:.33,roadBranches:0}}function Hf(s,e){let{root:t}=s,n={value:s.state?.mode==="dark"?1:0};s.parkingTone=n;let i=Oc(s,n,!0),r=new Ie(new Pt(1e3,1e3),i);r.rotation.x=-Math.PI/2,r.position.y=.014,t.add(r),r.userData.reflectiveSurface=!0;let a=new Ie(new Pt(1e3,1e3),new Qi({color:2371645,opacity:s.state?.mode==="dark"?0:.24}));a.rotation.x=-Math.PI/2,a.position.y=.018,a.receiveShadow=!0,t.add(a),s.parkingShadow=a;let o=new tt({polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8,uniforms:{tone:n,study:{value:s.palette==="current"?0:1}},transparent:!0,depthWrite:!1,vertexShader:"varying vec3 p;varying vec2 v;void main(){v=uv;p=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}",fragmentShader:`uniform float tone;uniform float study;varying vec3 p;varying vec2 v;void main(){float distanceFade=exp(-dot(p.xz*vec2(.035,.04),p.xz*vec2(.035,.04)));float sheen=.91+.09*v.y;vec3 dark=vec3(1.);vec3 light=vec3(0.);vec2 q=abs(v-.5)-vec2(.475,.455);float sd=length(max(q,0.))+min(max(q.x,q.y),0.)-.018;float mask=1.-smoothstep(-.002,.003,sd);float edge=1.-smoothstep(0.,.009,abs(sd));float alpha=(mix(.23,.025,tone)*(.72+.28*distanceFade))*mask;float original=mix(.17,.025,tone)*(.72+.28*distanceFade);gl_FragColor=vec4(mix(light,dark,tone),mix(original,alpha,study));
#include <tonemapping_fragment>
#include <colorspace_fragment>}`});s.parkingBays=[],s.parkingColumns=[],s.pedestrianPassages=[],s.parkedVehicles=[];let c=[10.8,7.2,3.6,0,-3.6,-7.2,-10.8,-14.4,-18],l=4.9,h=2.8,u=5.9;for(let f of[-1,1])for(let m of c){let b=new Ie(new Pt(l,h),o);b.rotation.x=-Math.PI/2,b.position.set(f*u,.028,m),t.add(b),s.parkingBays.push({x:f*u,z:m,width:l,depth:h,angle:0})}for(let f of[-1,1])for(let m of c){let b=s.box(.16,.1,1.65,f*8.02,.07,m,"curb",.035);b.material=new qt({color:"#4a4b49",roughness:.85}),b.castShadow=!1;for(let g of[-.48,.48]){let p=s.box(.17,.012,.25,f*8.02,.128,m+g,"yellow",.01);p.castShadow=!1}}s.parkingGhostMaterials=[];let d=new tt({uniforms:{tone:n},transparent:!0,depthWrite:!1,vertexShader:"varying vec3 p;varying vec3 n;void main(){p=(modelMatrix*vec4(position,1.)).xyz;n=normal;gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}",fragmentShader:`uniform float tone;varying vec3 p;varying vec3 n;void main(){float top=1.-smoothstep(2.5,3.2,p.y);float far=1.-smoothstep(14.,35.,-p.z);float face=.84+.16*max(n.x,0.);vec3 c=mix(vec3(.27,.29,.31),vec3(.10),tone)*face;gl_FragColor=vec4(c,top*far*.8);
#include <colorspace_fragment>
}`});for(let f of[-1,1])for(let m of[-1.8,-12.6]){let b=new Ie(new an(.68,3.2,.68),d);b.position.set(f*7.45,1.6,m),t.add(b),s.parkingColumns.push(b)}s.parkingReplica={references:["6b769787","892a70a1","f0d98605"],method:"one shared aisle environment for all camera views",occupiedBays:0,bayPitch:3.6,bayGap:.8,columnSection:.68,columnHeight:3.2,wheelStopFromBayEnd:.33,columnSetbackFromAisle:4,noNavigationGraphics:!0}}function Th(s){let e=new Set,t=new Set,n=new Set;s.traverse(i=>{i.geometry&&e.add(i.geometry);for(let r of Array.isArray(i.material)?i.material:i.material?[i.material]:[]){t.add(r);for(let a of Object.values(r))a?.isTexture&&n.add(a)}});for(let i of n)i.dispose();for(let i of t)i.dispose();for(let i of e)i.dispose()}function Ah(s){let e=new Rt,t=(n,i,r,a,o,c=0)=>{let l=new tt({transparent:!0,depthWrite:!1,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4,uniforms:{opacity:{value:o},body:{value:c}},vertexShader:"varying vec2 v;void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 v;uniform float opacity;uniform float body;void main(){vec2 p=(v-.5)*2.;float r=pow(pow(abs(p.x),4.)+pow(abs(p.y),4.),.25);float a=mix(exp(-dot(p,p)*3.8),1.-smoothstep(.5,1.,r),body)*opacity;gl_FragColor=vec4(.008,.010,.014,a);}"}),h=new Ie(new Pt(r,a),l);h.rotation.x=-Math.PI/2,h.position.set(n,.035,i),e.add(h)};t(0,0,2.5,5.1,.52,1);for(let n of s.userData.vehicleSpec.wheels){let i=(n.min[0]+n.max[0])/2,r=(n.min[2]+n.max[2])/2;t(i,r,.56,.8,.88)}return e}var Vf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Un=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},U4=new hi(-1,1,1,-1,0,1),Rh=class extends vt{constructor(){super(),this.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new je([0,2,0,0,2,0],2))}},N4=new Rh,Pi=class{constructor(e){this._mesh=new Ie(N4,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,U4)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ii=class extends Un{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof tt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qn.clone(e.uniforms),this.material=new tt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Pi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var va=class extends Un{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},kc=class extends Un{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Bc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ae);this._width=n.width,this._height=n.height,t=new Ct(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ii(Vf),this.copyPass.material.blending=In,this.clock=new ca}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}va!==void 0&&(a instanceof va?n=!0:a instanceof kc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var zc=class extends Un{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xe}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var xa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Hc=class extends Un{constructor(){super(),this.uniforms=qn.clone(xa.uniforms),this.material=new Qr({name:xa.name,uniforms:this.uniforms,vertexShader:xa.vertexShader,fragmentShader:xa.fragmentShader}),this._fsQuad=new Pi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Xe.getTransfer(this._outputColorSpace)===et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ho?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Go?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ks?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===qo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Xo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Wo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Gf={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new ae(1/1024,1/512)}},vertexShader:`

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

		}`};var Vc=class extends Ii{constructor(){super(Gf)}setSize(e,t){this.material.uniforms.resolution.value.set(1/e,1/t)}};var ya=class s extends Ie{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new St;let n=this,i=t.color!==void 0?new xe(t.color):new xe(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||s.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,h=new $t,u=new C,d=new C,f=new C,m=new Ce,b=new C(0,0,-1),g=new ze,p=new C,x=new C,y=new ze,v=new Ce,_=this.camera,E=new Ct(r,a,{samples:l,type:jt}),R=new tt({name:c.name!==void 0?c.name:"unspecified",uniforms:qn.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});R.uniforms.tDiffuse.value=E.texture,R.uniforms.color.value=i,R.uniforms.textureMatrix.value=v,this.material=R,this.onBeforeRender=function(A,S,M){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(M.matrixWorld),m.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(m),p.subVectors(d,f),p.dot(u)>0===!0&&this.forceUpdate===!1)return;p.reflect(u).negate(),p.add(d),m.extractRotation(M.matrixWorld),b.set(0,0,-1),b.applyMatrix4(m),b.add(f),x.subVectors(d,b),x.reflect(u).negate(),x.add(d),_.position.copy(p),_.up.set(0,1,0),_.up.applyMatrix4(m),_.up.reflect(u),_.lookAt(x),_.far=M.far,_.updateMatrixWorld(),_.projectionMatrix.copy(M.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(_.projectionMatrix),v.multiply(_.matrixWorldInverse),v.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,d),h.applyMatrix4(_.matrixWorldInverse),g.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let L=_.projectionMatrix;y.x=(Math.sign(g.x)+L.elements[8])/L.elements[0],y.y=(Math.sign(g.y)+L.elements[9])/L.elements[5],y.z=-1,y.w=(1+L.elements[10])/L.elements[14],g.multiplyScalar(2/g.dot(y)),L.elements[2]=g.x,L.elements[6]=g.y,L.elements[10]=g.z+1-o,L.elements[14]=g.w,n.visible=!1;let F=A.getRenderTarget(),z=A.xr.enabled,N=A.shadowMap.autoUpdate;A.xr.enabled=!1,A.shadowMap.autoUpdate=!1,A.setRenderTarget(E),A.state.buffers.depth.setMask(!0),A.autoClear===!1&&A.clear(),A.render(S,_),A.xr.enabled=z,A.shadowMap.autoUpdate=N,A.setRenderTarget(F);let H=M.viewport;H!==void 0&&A.state.viewport(H),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),n.material.dispose()}}};ya.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};function qf(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new vt,l=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Wf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let b=0;b<a[h].length;++b)f.push(a[h][b][d]);let m=Wf(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Wf(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new ft(a,t,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){let b=h.getComponent(d,m);o.setComponent(d+u,m,b)}}else a.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Ch(s,e){if(e===eh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===er||e===pa){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===er)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var _a=new C;function _n(s,e,t,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),c=Math.PI/4;_a.copy(e),_a[n]=0,_a.normalize();let l=.5*a/(a+o),h=1-_a.angleTo(s)/c;return Math.sign(_a[t])===1?h*l:o/(a+o)+l+l*(1-h)}var Ma=class s extends an{constructor(e=1,t=1,n=1,i=2,r=.1){let a=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new C,l=new C,h=new C(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,m=u.length/6,b=new C,g=.5/a;for(let p=0,x=0;p<u.length;p+=3,x+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*r,u[p+1]=h.y*Math.sign(c.y)+l.y*r,u[p+2]=h.z*Math.sign(c.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/m)){case 0:b.set(1,0,0),f[x+0]=_n(b,l,"z","y",r,n),f[x+1]=1-_n(b,l,"y","z",r,t);break;case 1:b.set(-1,0,0),f[x+0]=1-_n(b,l,"z","y",r,n),f[x+1]=1-_n(b,l,"y","z",r,t);break;case 2:b.set(0,1,0),f[x+0]=1-_n(b,l,"x","z",r,e),f[x+1]=_n(b,l,"z","x",r,n);break;case 3:b.set(0,-1,0),f[x+0]=1-_n(b,l,"x","z",r,e),f[x+1]=1-_n(b,l,"z","x",r,n);break;case 4:b.set(0,0,1),f[x+0]=1-_n(b,l,"x","y",r,e),f[x+1]=1-_n(b,l,"y","x",r,t);break;case 5:b.set(0,0,-1),f[x+0]=_n(b,l,"x","y",r,e),f[x+1]=1-_n(b,l,"y","x",r,t);break}}static fromJSON(e){return new s(e.width,e.height,e.depth,e.segments,e.radius)}};function Xf(){let s=new Ii({name:"Vehicle detail",uniforms:{tDiffuse:{value:null},bounds:{value:new ze},amount:{value:.34},texel:{value:new ae(.0005208333333333333,.000925925925925926)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform vec4 bounds;uniform vec2 texel;uniform float amount;varying vec2 vUv;
 void main(){vec4 base=texture2D(tDiffuse,vUv);vec3 a=texture2D(tDiffuse,vUv+vec2(texel.x,0.)).rgb,b=texture2D(tDiffuse,vUv-vec2(texel.x,0.)).rgb,c=texture2D(tDiffuse,vUv+vec2(0.,texel.y)).rgb,d=texture2D(tDiffuse,vUv-vec2(0.,texel.y)).rgb;
 vec2 p=vec2(vUv.x,1.-vUv.y);vec2 edge=min(p-bounds.xy,bounds.zw-p);float mask=smoothstep(0.,.003,min(edge.x,edge.y));vec3 lo=min(base.rgb,min(min(a,b),min(c,d))),hi=max(base.rgb,max(max(a,b),max(c,d)));vec3 detail=clamp(base.rgb+(base.rgb-(a+b+c+d)*.25)*amount,lo,hi);gl_FragColor=vec4(mix(base.rgb,detail,mask),base.a);}`});return s.setVehicleFrame=(e,t)=>{s.enabled=t,s.uniforms.bounds.value.set(e.left,e.top,e.left+e.width,e.bottom)},s}var Ph=()=>new Promise(s=>setTimeout(s,0));async function jf(s){let{renderer:e,scene:t}=s,n=[],i=new Set,r=[],a=new Map,o=new Map;t.traverse(h=>{h.visible||(r.push(h),h.visible=!0)});let c=e.renderBufferDirect;e.renderBufferDirect=(h,u,d,f,m)=>{let b=e.getRenderTarget(),g=JSON.stringify([f.uuid,f.side,f.defines,f.clippingPlanes?.length||0,f.clipIntersection,!!m.receiveShadow,!!m.isInstancedMesh,!!m.isSkinnedMesh,Object.keys(d.attributes),u?.uuid,b?.texture.type,b?.texture.colorSpace,b===null]);if(i.has(g))return;i.add(g);let p;if(f.isShaderMaterial){let v=f.uniforms;f.uniforms={};try{p=f.clone()}finally{f.uniforms=v}let _=Object.entries(v).filter(([,E])=>E.value?.isTexture);p.uniforms=qn.clone(Object.fromEntries(Object.entries(v).filter(([,E])=>!E.value?.isTexture)));for(let[E,R]of _)p.uniforms[E]={...R}}else p=f.clone();p.onBeforeCompile=f.onBeforeCompile,p.customProgramCacheKey=f.customProgramCacheKey;let x=m.clone(!1);if(x.geometry=d,x.material=p,x.visible=!0,x.frustumCulled=!1,!a.has(u)){let v=u?u.clone(!1):new Ji;t.traverseVisible(_=>{_.isLight&&v.add(_.clone())}),a.set(u,v)}let y=null;if(b){let v=JSON.stringify([b.texture.type,b.texture.colorSpace,b.samples]);if(!o.has(v)){let _=new Ct(1,1,{type:b.texture.type,samples:b.samples});_.texture.colorSpace=b.texture.colorSpace,o.set(v,_)}y=o.get(v)}n.push({camera:h,scene:a.get(u),target:y,proxy:x,material:p})};try{s.renderFrame()}finally{e.renderBufferDirect=c;for(let h of r)h.visible=!1;e.shadowMap.needsUpdate=!0}await Ph(),s.preparedMaterials=n.map(h=>h.material);let l=performance.now();try{let h=[];for(let u of n){u.scene.add(u.proxy);let d=e.getRenderTarget();e.setRenderTarget(u.target);try{h.push(e.compileAsync(u.scene,u.camera))}finally{u.proxy.removeFromParent(),e.setRenderTarget(d)}performance.now()-l>6&&(await Ph(),l=performance.now())}await Promise.all(h),l=performance.now();for(let u of n){u.scene.add(u.proxy);let d=e.getRenderTarget(),f=e.getViewport(new ze);e.setRenderTarget(u.target),e.setViewport(0,0,1,1),e.shadowMap.needsUpdate=!1;try{e.render(u.scene,u.camera)}finally{u.proxy.removeFromParent(),e.setRenderTarget(d),e.setViewport(f),e.shadowMap.needsUpdate=!0}performance.now()-l>6&&(await Ph(),l=performance.now())}}finally{for(let h of o.values())h.dispose()}}var O4=[["01","Highway",!1],["02","City avenue",!0],["03","Elevated road",!0],["04","Local street",!0],["05","Crossroads",!0],["06","Exit ramp",!1],["07","Merge ramp",!1],["08","T-junction",!0],["09","Residential road",!0],["12","Lane closure",!0],["10","Parking aisle",!1],["14","Overhead parking",!1],["15","Angled parking",!1],["17","Outdoor parking",!0],["18","Outdoor raised",!0],["19","Outdoor overhead",!0],["16","Parallel parking",!1],["11","Covered passage",!0]].map(([s,e,t])=>({id:s,name:e,trees:t,group:["10","14","15","16","11"].includes(s)?"closed":"open"})),pi=["10","14","15","16","17","18","19"],Ih=8.5,Gc=class s{static async create(e,t,n={}){let i=new ba({canvas:e,antialias:!0,preserveDrawingBuffer:!0,alpha:n.alpha||!1});return await new Promise(r=>setTimeout(r,0)),new s(e,t,{...n,renderer:i})}constructor(e,t,{palette:n="balanced",alpha:i=!1,width:r=1920,height:a=1080,renderer:o}={}){this.palette=n,this.width=r,this.height=a,this.sceneCache=new Map,this.preparedRoots=new WeakSet,this.geometryTemplates=new Map,this.laneMaterials=new Map,this.environmentGrowth={buildings:{value:1,velocity:0},trees:{value:0,velocity:0},waterfront:{value:0,velocity:0},roadworks:{value:0,velocity:0}},this.layoutBlend={value:1},this.structurePaintOpacity={value:1},this.waterMix={value:0},this.shoreArea={value:new ze},this.shoreEnabled={value:0},this.roadCameraCache=new Map,this.renderer=o||new ba({canvas:e,antialias:!0,preserveDrawingBuffer:!0,alpha:i}),this.renderer.setPixelRatio(1),this.renderer.setSize(r,a,!1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=xn,this.renderer.shadowMap.autoUpdate=!1,this.renderer.outputColorSpace=Tt,this.renderer.toneMapping=Ks,this.renderer.toneMappingExposure=1,this.scene=new Ji,this.camera=new St(38,16/9,1,2e3),this.mat={},this.colors={road:["#545e6d","#303031"],ground:["#b4c3d6","#373a3e"],pavement:["#d1dbee","#3c4045"],curb:["#d6e1ef","#5a6068"],building:["#d3d7dd","#817d7d"],glass:["#a6bed0","#606a72"],white:["#d6e0e9","#a7adb2"],yellow:["#bbaa6f","#99864e"],grass:["#809c68","#3e4d3d"],leaf:["#6f914f","#4a593e"],leaf2:["#84a25c","#526047"],trunk:["#776956","#4b463e"],cone:["#ff5109","#ff590c"],water:["#7695ae","#304146"],parkingFloor:["#7c8b9e","#17181b"],parkingBay:["#aebdce","#393c41"],parkingEdge:["#98a9bc","#34383e"]};for(let[m,b]of Object.entries(this.colors))this.mat[m]=new qt({color:b[0],roughness:m==="glass"?.35:.86,metalness:m==="glass"?.1:0});for(let m of["leaf","leaf2","trunk"])this.mat[m].flatShading=!0;this.mat.road.roughness=.54,this.mat.road.metalness=.08,this.mat.building.roughness=.36,this.mat.glass.dispose(),this.mat.glass=new Ht({color:this.colors.glass[0],roughness:.3,metalness:0,clearcoat:.72,clearcoatRoughness:.25,envMapIntensity:.8}),this.mat.glass.onBeforeCompile=m=>{m.vertexShader=`varying vec3 vAcrylicPosition;
`+m.vertexShader,m.vertexShader=m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vAcrylicPosition=position;`),m.fragmentShader=`varying vec3 vAcrylicPosition;
`+m.fragmentShader,m.fragmentShader=m.fragmentShader.replace("#include <opaque_fragment>",`float sheen=smoothstep(-.8,.8,vAcrylicPosition.y);outgoingLight*=.86+.18*sheen;
#include <opaque_fragment>`)},this.mat.building.dispose(),this.mat.building=new Ht({color:this.colors.building[0],roughness:.62,metalness:0,clearcoat:.025,clearcoatRoughness:.6,envMapIntensity:.55,specularIntensity:.24}),this.buildingTint={value:1},this.mat.building.onBeforeCompile=m=>{m.uniforms.buildingTint=this.buildingTint,m.vertexShader=`varying float vBuildingHeight;varying vec3 vBuildingNormal;
`+m.vertexShader,m.vertexShader=m.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vBuildingHeight=(modelMatrix*vec4(transformed,1.0)).y;vBuildingNormal=normalize(mat3(modelMatrix)*normal);`),m.fragmentShader=`uniform float buildingTint;varying float vBuildingHeight;varying vec3 vBuildingNormal;
`+m.fragmentShader,m.fragmentShader=m.fragmentShader.replace("#include <opaque_fragment>",`float shaded=1.-smoothstep(-.3,.7,dot(normalize(vBuildingNormal),normalize(vec3(-38.,55.,48.))));vec3 lightFace=mix(vec3(.94,.97,1.0),vec3(.90,.93,.98),shaded);vec3 darkFace=mix(vec3(.78,.85,.92),vec3(.67,.72,.77),shaded);outgoingLight*=mix(darkFace,lightFace,buildingTint);outgoingLight*=.90+.10*(1.-exp(-max(0.,vBuildingHeight)/4.));
#include <opaque_fragment>`)},this.mat.white.polygonOffset=!0,this.mat.white.polygonOffsetFactor=-2,this.mat.white.polygonOffsetUnits=-2,this.mat.yellow.polygonOffset=!0,this.mat.yellow.polygonOffsetFactor=-2,this.mat.yellow.polygonOffsetUnits=-2,this.mat.grass.transparent=!0,this.mat.grass.depthWrite=!1,this.renderer.localClippingEnabled=!0,this.buildingRevealPlane=new $t(new C(0,1,0),.14),this.treeRevealPlane=new $t(new C(0,1,0),.14);for(let m of["leaf","leaf2","trunk"])this.mat[m].clippingPlanes=[this.treeRevealPlane],this.mat[m].clipShadows=!0;this.hemi=new ia("#d9eaff","#8b959d",2.15),this.scene.add(this.hemi),this.sun=new Ri("#fff5e8",3.2),this.sun.position.set(-38,55,48),this.sun.castShadow=!0,Object.assign(this.sun.shadow.camera,{left:-48,right:48,top:48,bottom:-48,near:1,far:180}),this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=4e-5,this.sun.shadow.normalBias=.015,this.sun.shadow.radius=3,this.sun.shadow.intensity=.28,this.sun.shadow.blurSamples=16,this.sun.target.position.set(0,0,-14),this.scene.add(this.sun,this.sun.target),this.fill=new Ri("#aacded",.7),this.fill.position.set(24,16,-12),this.scene.add(this.fill),this.env=Nf(),this.scene.environment=this.env,this.scene.environmentIntensity=.38,this.mat.parkingFloor.roughness=.32,this.mat.parkingFloor.metalness=.08,this.mat.parkingBay.roughness=.46,this.mat.parkingBay.metalness=.08,this.mat.parkingBay.polygonOffset=!0,this.mat.parkingBay.polygonOffsetFactor=-4,this.mat.parkingBay.polygonOffsetUnits=-4,this.mat.parkingFloor.onBeforeCompile=m=>{m.vertexShader=`varying vec3 parkingPosition;
`+m.vertexShader,m.vertexShader=m.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
parkingPosition=(modelMatrix*vec4(transformed,1.0)).xyz;`),m.fragmentShader=`varying vec3 parkingPosition;
`+m.fragmentShader,m.fragmentShader=m.fragmentShader.replace("#include <opaque_fragment>",`float edge=smoothstep(16.,58.,length(parkingPosition.xz*vec2(1.0,.72)));outgoingLight*=mix(1.08,.32,edge);outgoingLight+=vec3(.014,.018,.025)*exp(-dot(parkingPosition.xz*vec2(.12,.08),parkingPosition.xz*vec2(.12,.08)));
#include <opaque_fragment>`)},this.sky=new Ie(new $r(1e3,32,16),new tt({side:Vt,depthWrite:!1,uniforms:{range:{value:.12},top:{value:new xe("#72afe0")},bottom:{value:new xe("#c4ddec")}},vertexShader:"varying vec3 v;void main(){v=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 v;uniform vec3 top;uniform vec3 bottom;uniform float range;void main(){float t=smoothstep(0.,range,normalize(v).y);gl_FragColor=vec4(mix(bottom,top,t),1.0);#include <colorspace_fragment> }".replace(";#include",`;
#include`).replace("fragment> }",`fragment>
}`)})),this.tailReflection=Of(),this.scene.add(this.tailReflection),this.scene.add(this.sky),this.scene.fog=new Dr("#c9dbea",85,280),this.car=t,this.scene.add(this.car),this.egoContact=Ah(this.car),this.scene.add(this.egoContact),this.current=null;let c=new Ct(r,a,{type:jt,samples:4});this.composer=new Bc(this.renderer,c),this.composer.addPass(new zc(this.scene,this.camera)),this.composer.addPass(new Hc),this.edgeAA=new Vc,this.edgeAA.setSize(r,a),this.composer.addPass(this.edgeAA),this.vehicleDetail=Xf(),this.vehicleDetail.uniforms.amount.value=0,this.vehicleDetail.uniforms.texel.value.set(1/r,1/a),this.vehicleDetail.enabled=!1,this.composer.addPass(this.vehicleDetail),this.mirror=new ya(new Pt(1,1),{textureWidth:Math.ceil(r/2),textureHeight:Math.ceil(a/2),multisample:0}),this.mirror.rotation.x=-Math.PI/2,this.reflectionSharp={value:this.mirror.getRenderTarget().texture},this.reflectionMatrix={value:new Ce},this.waterReflectionMatrix={value:new Ce},this.buildingFootprints={value:Array.from({length:32},()=>new ze)},this.buildingCount={value:0},this.blurTargets=[0,1].map(()=>new Ct(Math.ceil(r/2),Math.ceil(a/2),{type:jt})),this.blurMaterial=new tt({depthTest:!1,depthWrite:!1,uniforms:{source:{value:null},direction:{value:new ae}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"uniform sampler2D source;uniform vec2 direction;varying vec2 vUv;void main(){vec4 c=texture2D(source,vUv)*.227027; c+=(texture2D(source,vUv+direction*1.384615)+texture2D(source,vUv-direction*1.384615))*.316216;c+=(texture2D(source,vUv+direction*3.230769)+texture2D(source,vUv-direction*3.230769))*.070270;gl_FragColor=c;}"}),this.blurQuad=new Pi(this.blurMaterial),this.reflectionTexture={value:this.blurTargets[1].texture},this.waterReflectionTarget=new Ct(Math.ceil(r/2),Math.ceil(a/2),{type:jt}),this.waterReflectionTexture={value:this.waterReflectionTarget.texture};for(let m of["water"]){let b=this.mat[m],g=m==="water"?.43:.025,p=b.onBeforeCompile;b.onBeforeCompile=x=>{p.call(b,x),x.uniforms.waterMix=this.waterMix,x.uniforms.coastReflectionMatrix=this.waterReflectionMatrix,x.uniforms.coastReflectionTexture=this.waterReflectionTexture,x.vertexShader=`uniform mat4 coastReflectionMatrix;varying vec4 vReflection;
`+x.vertexShader,x.vertexShader=x.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vReflection=coastReflectionMatrix*modelMatrix*vec4(transformed,1.0);`),x.fragmentShader=`uniform float waterMix;uniform sampler2D coastReflectionTexture;varying vec4 vReflection;
`+x.fragmentShader,x.fragmentShader=x.fragmentShader.replace("#include <opaque_fragment>",`vec2 ru=vReflection.xy/vReflection.w;vec3 reflected=texture2D(coastReflectionTexture,ru).rgb;outgoingLight=mix(outgoingLight,reflected,${g.toFixed(3)}*waterMix);
#include <opaque_fragment>`)},b.customProgramCacheKey=()=>m+"-reflection"}this.environmentTone={value:0},this.darkAerialPerspective={value:0},this.mat.ground.onBeforeCompile=m=>{m.uniforms.environmentTone=this.environmentTone,m.uniforms.shoreArea=this.shoreArea,m.uniforms.shoreEnabled=this.shoreEnabled,m.vertexShader=`varying vec3 ambientGroundPosition;
`+m.vertexShader,m.vertexShader=m.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
ambientGroundPosition=(modelMatrix*vec4(transformed,1.)).xyz;`),m.fragmentShader=`uniform vec4 shoreArea;uniform float shoreEnabled;uniform float environmentTone;varying vec3 ambientGroundPosition;
`+m.fragmentShader,m.fragmentShader=m.fragmentShader.replace("#include <opaque_fragment>",`if(shoreEnabled>.5&&ambientGroundPosition.x>shoreArea.x&&ambientGroundPosition.x<shoreArea.y&&ambientGroundPosition.z>shoreArea.z&&ambientGroundPosition.z<shoreArea.w)discard;vec2 ambientOffset=(ambientGroundPosition.xz-vec2(-18.,-22.))/vec2(40.,65.);float ambientPool=exp(-dot(ambientOffset,ambientOffset));outgoingLight*=.86+.20*ambientPool;float groundLuma=dot(outgoingLight,vec3(.2126,.7152,.0722));outgoingLight=mix(outgoingLight,groundLuma*vec3(.94,1.,1.09),environmentTone);
#include <opaque_fragment>`)};let l=this.mat.water.onBeforeCompile;this.mat.water.onBeforeCompile=m=>{l.call(this.mat.water,m),m.uniforms.environmentTone=this.environmentTone,m.vertexShader=`varying vec3 ambientGroundPosition;
`+m.vertexShader,m.vertexShader=m.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
ambientGroundPosition=(modelMatrix*vec4(transformed,1.)).xyz;`),m.fragmentShader=`uniform float environmentTone;varying vec3 ambientGroundPosition;
`+m.fragmentShader,m.fragmentShader=m.fragmentShader.replace("#include <opaque_fragment>",`vec2 ambientOffset=(ambientGroundPosition.xz-vec2(-18.,-22.))/vec2(40.,65.);float ambientPool=exp(-dot(ambientOffset,ambientOffset));vec3 dryLight=outgoingLight*(.86+.20*ambientPool);float groundLuma=dot(dryLight,vec3(.2126,.7152,.0722));dryLight=mix(dryLight,groundLuma*vec3(.94,1.,1.09),environmentTone);outgoingLight=mix(dryLight,outgoingLight,waterMix);
#include <opaque_fragment>`)},Nc(this.mat.water,this);let h=this.mat.water.onBeforeCompile;this.mat.water.onBeforeCompile=m=>{h.call(this.mat.water,m),m.fragmentShader=m.fragmentShader.replace("proximity*valid*reflectionStrength","proximity*valid*reflectionStrength*(1.-waterMix)")};for(let m of["road","ground","pavement","parkingFloor"])Nc(this.mat[m],this),this.mat[m].customProgramCacheKey=()=>m+"-localized-reflection-r15";for(let m of Object.values(this.mat)){let b=m.onBeforeCompile;m.onBeforeCompile=g=>{b.call(m,g),g.uniforms.darkAerialPerspective=this.darkAerialPerspective,g.fragmentShader=`uniform float darkAerialPerspective;
`+g.fragmentShader,g.fragmentShader=g.fragmentShader.replace("#include <fog_fragment>",`#ifdef USE_FOG
    float t=clamp((vFogDepth-${m===this.mat.ground?"45.":m===this.mat.water?"65.":"105."})/${m===this.mat.ground?"180.":m===this.mat.water?"125.":"140."},0.,1.);
    // In dark scenes a shared distance curve joins sky and ground gradually.
    ${m===this.mat.water?"t=mix(clamp((vFogDepth-45.)/180.,0.,1.),t,waterMix);":""}
    if(darkAerialPerspective>.5)t=clamp((vFogDepth-65.)/235.,0.,1.);
    float aerial=t*t*t*(t*(t*6.-15.)+10.);
    float fogFactor=fogNear>10000.?0.:aerial;
    gl_FragColor.rgb=mix(gl_FragColor.rgb,fogColor,fogFactor);
    #endif`)}}let u=this.mat.building;this.mat.environmentBuilding=u.clone(),this.mat.environmentBuilding.onBeforeCompile=u.onBeforeCompile,this.mat.environmentBuilding.clippingPlanes=[this.buildingRevealPlane];for(let m of["white","yellow"]){let b=this.mat[m],g=b.clone();g.onBeforeCompile=p=>{b.onBeforeCompile(p),p.vertexShader=`attribute vec4 paintSize;varying vec2 vPaintLocal;varying vec2 vPaintSize;
`+p.vertexShader,p.vertexShader=p.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vPaintLocal=(uv-.5)*paintSize.zw;vPaintSize=paintSize.xy;`),p.fragmentShader=`varying vec2 vPaintLocal;varying vec2 vPaintSize;
`+p.fragmentShader,p.fragmentShader=p.fragmentShader.replace("#include <alphatest_fragment>",`vec2 paintPixel=max(fwidth(vPaintLocal)*1.5,vec2(.00001));vec2 paintA=max(vPaintLocal-paintPixel*.5,-vPaintSize*.5);vec2 paintB=min(vPaintLocal+paintPixel*.5,vPaintSize*.5);vec2 paintCoverage=clamp((paintB-paintA)/paintPixel,0.,1.);diffuseColor.a*=paintCoverage.x*paintCoverage.y;
    #include <alphatest_fragment>`)},g.transparent=!0,g.depthWrite=!1,g.alphaTest=0,g.alphaToCoverage=!1,g.customProgramCacheKey=()=>m+"-integrated-paint-3",this.mat[m+"Paint"]=g}let d=this.mat.white,f=d.clone();f.onBeforeCompile=m=>{d.onBeforeCompile(m),m.vertexShader=`attribute vec4 paintSize;varying vec2 vCrosswalkLocal;varying vec2 vCrosswalkSize;
`+m.vertexShader,m.vertexShader=m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vCrosswalkLocal=(uv-.5)*paintSize.zw;vCrosswalkSize=paintSize.xy;`),m.fragmentShader=`varying vec2 vCrosswalkLocal;varying vec2 vCrosswalkSize;
float stripeIntegral(float x){return floor(x)*(.62/1.5)+clamp(fract(x)-(1.-.62/1.5)*.5,0.,.62/1.5); }
`+m.fragmentShader,m.fragmentShader=m.fragmentShader.replace("#include <alphatest_fragment>",`vec2 stripeFootprint=max(fwidth(vCrosswalkLocal)*1.5,vec2(.00001));float stripeX=(vCrosswalkLocal.x+vCrosswalkSize.x*.5)/1.5;float stripePixel=stripeFootprint.x/1.5;float stripeCoverage=clamp((stripeIntegral(stripeX+stripePixel*.5)-stripeIntegral(stripeX-stripePixel*.5))/stripePixel,0.,1.);vec2 edgeA=max(vCrosswalkLocal-stripeFootprint*.5,-vCrosswalkSize*.5),edgeB=min(vCrosswalkLocal+stripeFootprint*.5,vCrosswalkSize*.5);vec2 edgeCoverage=clamp((edgeB-edgeA)/stripeFootprint,0.,1.);diffuseColor.a*=stripeCoverage*edgeCoverage.x*edgeCoverage.y;
   #include <alphatest_fragment>`)},f.transparent=!0,f.depthWrite=!1,f.alphaTest=0,f.alphaToCoverage=!1,f.customProgramCacheKey=()=>"integrated-crosswalk-3",this.mat.crosswalk=f,this.mat.lanePaint=this.mat.whitePaint.clone(),this.mat.lanePaint.onBeforeCompile=this.mat.whitePaint.onBeforeCompile,this.mat.lanePaint.customProgramCacheKey=this.mat.whitePaint.customProgramCacheKey;for(let m of[this.mat.whitePaint,this.mat.yellowPaint,this.mat.lanePaint,this.mat.crosswalk]){let b=m.onBeforeCompile,g=m.customProgramCacheKey();m.defaultAttributeValues={...m.defaultAttributeValues,structurePaintMask:[0]},m.onBeforeCompile=p=>{b.call(m,p),p.uniforms.structurePaintOpacity=this.structurePaintOpacity,p.vertexShader=`attribute float structurePaintMask;varying float vStructurePaintMask;
`+p.vertexShader,p.vertexShader=p.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vStructurePaintMask=structurePaintMask;`),p.fragmentShader=`uniform float structurePaintOpacity;varying float vStructurePaintMask;
`+p.fragmentShader,p.fragmentShader=p.fragmentShader.replace("#include <alphatest_fragment>",`diffuseColor.a*=mix(1.,structurePaintOpacity,vStructurePaintMask);
#include <alphatest_fragment>`)},m.customProgramCacheKey=()=>g+"-branch-coverage-1"}for(let m of Object.values(this.mat)){let b=m.onBeforeCompile,g=m.customProgramCacheKey();m.defaultAttributeValues={...m.defaultAttributeValues,layoutOffset:[0,0,0]},m.onBeforeCompile=p=>{b.call(m,p),!p.uniforms.layoutBlend&&(p.uniforms.layoutBlend=this.layoutBlend,p.vertexShader=`attribute vec3 layoutOffset;uniform float layoutBlend;
`+p.vertexShader,p.vertexShader=p.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed+=layoutOffset*(1.-layoutBlend);`))},m.customProgramCacheKey=()=>g+"-layout-morph-1"}this.layoutDepth=new es({depthPacking:ma}),this.layoutDepth.defaultAttributeValues={...this.layoutDepth.defaultAttributeValues,layoutOffset:[0,0,0]},this.layoutDepth.onBeforeCompile=m=>{m.uniforms.layoutBlend=this.layoutBlend,m.vertexShader=`attribute vec3 layoutOffset;uniform float layoutBlend;
`+m.vertexShader,m.vertexShader=m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed+=layoutOffset*(1.-layoutBlend);`)},this.layoutDepth.customProgramCacheKey=()=>"layout-depth-1",this.receiverDepth=new es({depthPacking:ma}),this.receiverDepth.onBeforeCompile=m=>{m.fragmentShader=m.fragmentShader.replace("void main() {","void main() { discard;")},this.receiverDepth.customProgramCacheKey=()=>"receiver-only-depth",this.mat.water.transparent=!1,this.mat.water.depthWrite=!0,this.mat.junctionGrass=this.mat.grass.clone(),this.mat.junctionGrass.onBeforeCompile=this.mat.grass.onBeforeCompile,this.mat.junctionGrass.customProgramCacheKey=this.mat.grass.customProgramCacheKey,this.mat.junctionGrass.defaultAttributeValues=this.mat.grass.defaultAttributeValues,this.mat.shoreGrass=this.mat.grass.clone(),this.mat.shoreGrass.onBeforeCompile=this.mat.grass.onBeforeCompile,this.mat.shoreGrass.customProgramCacheKey=this.mat.grass.customProgramCacheKey;for(let m of["pavement","curb"]){let b=this.mat[m],g=b.clone();g.onBeforeCompile=b.onBeforeCompile,g.customProgramCacheKey=b.customProgramCacheKey,g.defaultAttributeValues=b.defaultAttributeValues,g.transparent=!0,g.depthWrite=!1,g.opacity=0,this.mat["coast"+m[0].toUpperCase()+m.slice(1)]=g}}laneMaterial(e){let t=e.toFixed(3);if(!this.laneMaterials.has(t)){let n=this.mat.lanePaint.clone();n.onBeforeCompile=this.mat.lanePaint.onBeforeCompile,n.customProgramCacheKey=this.mat.lanePaint.customProgramCacheKey,n.defaultAttributeValues=this.mat.lanePaint.defaultAttributeValues,this.laneMaterials.set(t,n)}return this.laneMaterials.get(t)}box(e,t,n,i,r,a,o="building",c=0){let l=JSON.stringify([e,t,n,c]);this.geometryTemplates.has(l)||this.geometryTemplates.set(l,c?new Ma(e,t,n,2,c):new an(e,t,n,1,1,n>100?96:1));let h=this.geometryTemplates.get(l).clone(),u=new Ie(h,this.mat[o]);return u.position.set(i,r,a),u.castShadow=!0,u.receiveShadow=!0,this.root.add(u),u}plane(e,t,n,i,r,a){let o=["white","yellow","crosswalk"].includes(a),c=o?e+.8:e,l=o?t+.8:t,h=new Pt(c,l,1,Math.max(c,l)>=1e3?1:l>100?96:1);o&&h.setAttribute("paintSize",new je(Array.from({length:h.attributes.position.count},()=>[e,t,c,l]).flat(),4));let u=new Ie(h,this.mat[o&&a!=="crosswalk"?a+"Paint":a]);return u.rotation.x=-Math.PI/2,u.position.set(n,r,i),u.receiveShadow=!o,this.root.add(u),u}road(e,t,n,i,r=0){return this.plane(t,Math.abs(i-n),e,(n+i)/2,r+.015,"road")}line(e,t,n,i=0,r="white",a=.13){this.plane(a,Math.abs(n-t),e,(t+n)/2,i+.028,r)}dashed(e,t,n,i=0){for(let r=t;r>n;r-=10){let a=Math.max(r-3.8,n);this.line(e,r,a,i),this.root.children.at(-1).userData.laneDash=!0,this.root.children.at(-1).userData.laneOffset=e,this.root.children.at(-1).material=this.laneMaterial(e)}}marks(e,t,n,i,r=0,a=!1,o=!0){if(o)for(let l of[-1,1])this.line(l*(e/2-.25),n,i,r),this.root.children.at(-1).userData.roadEdge=!0;let c=Math.round(e/t);for(let l=1;l<c;l++){let h=-e/2+l*t;a&&l===c/2?(this.line(h-.105,n,i,r,"yellow",.095),this.line(h+.105,n,i,r,"yellow",.095)):this.dashed(h,n,Math.max(i,-650),r)}}curbs(e,t,n,i=0){for(let r of[-1,1])this.box(1.6,.18,t-n,r*(e/2+.8),i-.02,(t+n)/2,"pavement"),this.box(.2,.2,t-n,r*(e/2+.1),i,(t+n)/2,"curb")}building(e,t,n,i,r,a){let o=new Set(this.root.children),c=(a??this.buildingPlacements.length)%3;this.buildingPlacements.push({x:e,z:t,width:n,depth:i,variant:["solid-cap","solid-wing","solid-terrace"][c]}),c===0?(this.box(n,r,i,e,r/2-.1,t,"building",.065),this.box(n*.76,.3,i*.73,e+n*.04,r+.03,t-i*.05,"building",.03)):c===1?(this.box(n*.57,r,i*.88,e-n*.215,r/2-.1,t-i*.06,"building",.065),this.box(n*.43,r*.72,i,e+n*.285,r*.36-.1,t,"building",.065)):(this.box(n,r*.5,i,e,r*.25-.1,t,"building",.065),this.box(n*.69,r*.5,i*.7,e+n*.08,r*.75-.1,t-i*.15,"building",.065));for(let l of this.root.children)if(!o.has(l)){l.userData.buildingOwned=!0,l.userData.growthHeight=r+.5,l.material=this.mat.environmentBuilding,l.geometry.computeBoundingBox();let h=l.geometry.boundingBox;if(l.position.y+h.min.y<0){let u=h.max.y-h.min.y;l.scale.y=(u+.3)/u,l.position.y-=.15}}}contact(e,t,n,i,r=.22){if(!this.contactMap){let c=new Uint8Array(16384);for(let l=0;l<64;l++)for(let h=0;h<64;h++){let u=Math.abs((h+.5)/64*2-1),d=Math.abs((l+.5)/64*2-1),f=Math.pow(Math.max(0,1-Math.pow(Math.max(u,d),3)),2),m=(l*64+h)*4;c[m]=c[m+1]=c[m+2]=0,c[m+3]=Math.round(f*255)}this.contactMap=new ri(c,64,64),this.contactMap.needsUpdate=!0}let a=new Ie(new Pt(n,i),new en({map:this.contactMap,transparent:!0,opacity:r,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));a.rotation.x=-Math.PI/2,a.position.set(e,.022,t),this.root.add(a)}tree(e,t,n=1){let i=new Rt,r=new Ie(new ai(.1,.17,1.6,7),this.mat.trunk);r.position.y=.8,i.add(r);for(let[a,o,c,l,h]of[[0,2.7,0,1.05,"leaf"],[-.65,2.03,.05,.74,"leaf2"],[.6,2.25,.02,.83,"leaf"],[.13,2.18,.6,.71,"leaf2"]]){let u=new Ie(new Jr(l,1),this.mat[h]);u.position.set(a,o,c),u.scale.y=1.16,u.castShadow=!0,i.add(u)}i.position.set(e,0,t),i.scale.setScalar(n),i.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),this.vegetation.add(i)}environmentPlan(e,{small:t=!1,cross:n=!1,tee:i=!1,elevated:r=!1,residential:a=!1,centerX:o=0}={},c=this.current){let l=[[-1,6,9,13,t?5:23],[1,-9,13,11,t?4.5:12],[-1,-31,13,17,t?6:14],[1,-54,8,12,t?5.3:21],[-1,-83,11,13,t?4:10],[1,-107,14,15,t?6:13],[-1,-144,9,14,t?5:16],[1,-180,11,14,t?4:9]],h=[],u=(b,...g)=>h.push({kind:b,args:g,key:JSON.stringify([b,...g])}),d=0,f=0,m=(b,g,p,x,y,v=f%3)=>{u("building",b,g,p,x,y,v%3),f++};for(let[b,g,p,x,y]of l.map(v=>a?[v[0],v[1]-8,v[2]*.82,v[3]*.8,3.8]:v)){if(r&&b===-1&&g>0||n&&Math.abs(g+40)<24||i&&g<-35)continue;let v=o+b*(e/2+(r?10:a?5.8:8)+p/2),_=d++;b===-1&&g>0&&["02","09","05","08"].includes(c)||m(v,g,p,x,r?y*.58:y,_);let E=o+b*(e/2+(r?6.8:a?3.8:4.5)),R=x+5;u("lawn",r?2.4:a?3.6:5,R,E,g),u("tree",E,g+R*.22,r?1.25:t?.8:1.05),g>-90&&u("tree",E,g-R*.24,r?1.1:t?.73:.83)}if(i)for(let b of[-21,16,33])m(b,-66,10,11,6),u("lawn",13,7,b,-57),u("tree",b,-57,.95);return h}environment(e,t={}){for(let n of this.environmentSteps(e,t));}*environmentSteps(e,t={}){let n=["05","08"].includes(this.current),i=this.current==="05"?"08":"05",r=n?new Set(this.environmentPlan(e,{cross:!0,tee:i==="08"},i).map(a=>a.key)):null;for(let{kind:a,args:o,key:c}of this.environmentPlan(e,t)){let l;if(a==="building"){let h=this.root.children.length;this.building(...o),l=this.root.children.slice(h)}else if(a==="lawn"){let h=this.plane(...o,.025,"grass");this.lawns.push(h),l=[h]}else this.tree(...o),l=[this.vegetation.children.at(-1)];for(let h of l)h.userData.environmentKey=c,h.userData.junctionPersistent=!!r?.has(c);yield}}curveStrip(e,t,n,i="road"){let r=new qs(e.map(([h,u])=>new C(h,n+.015,u)),!1,"centripetal"),a=[],o=[];for(let h=0;h<=180;h++){let u=h/180,d=r.getPoint(u),f=r.getTangent(u),m=new C(-f.z,0,f.x).normalize();for(let b of[-1,1])a.push(d.x+m.x*t*.5*b,d.y,d.z+m.z*t*.5*b);if(h<180){let b=h*2;o.push(b,b+1,b+2,b+1,b+3,b+2)}}let c=new vt;c.setAttribute("position",new je(a,3)),c.setIndex(o),c.computeVertexNormals();let l=new Ie(c,this.mat[i]);return l.material.side=Xt,l.receiveShadow=!0,this.root.add(l),r}curveLine(e,t,n,i,r=!1,a="white",o=-1/0){let c=["white","yellow"].includes(a),l=n+(c?.8:0),h=[],u=[],d=[];for(let b=0;b<=600;b++){let g=b/600,p=e.getPoint(g),x=e.getTangent(g),y=new C(-x.z,0,x.x).normalize();for(let v of[-1,1])d.push((v+1)/2,.5),h.push(p.x+y.x*(t+l*.5*v),i+.033,p.z+y.z*(t+l*.5*v));if(b<600&&p.x+y.x*t>o&&(!r||Math.floor(g*e.getLength()/5)%2===0)){let v=b*2;u.push(v,v+1,v+2,v+1,v+3,v+2)}}let f=new vt;f.setAttribute("position",new je(h,3)),f.setIndex(u),f.setAttribute("uv",new je(d,2)),c&&f.setAttribute("paintSize",new je(Array.from({length:h.length/3},()=>[n,1e5,l,1e5]).flat(),4)),f.computeVertexNormals();let m=new Ie(f,r&&c?this.mat.lanePaint:this.mat[c?a+"Paint":a]);m.userData.laneDash=r,this.root.add(m)}flatShape(e,t,n){let i=new Zr(e,24);i.rotateX(Math.PI/2);let r=Array.from(i.index.array);for(let o=0;o<r.length;o+=3)[r[o+1],r[o+2]]=[r[o+2],r[o+1]];i.setIndex(r),i.computeVertexNormals();let a=new Ie(i,this.mat[n]);return a.position.y=t,a.material.side=Xt,a.receiveShadow=!0,this.root.add(a),a}pathRibbon(e,t,n,i){let r=["white","yellow"].includes(i),a=t+(r?.8:0),o=[],c=[],l=[];for(let d=0;d<e.length;d++){let f=e[Math.max(0,d-1)],m=e[Math.min(e.length-1,d+1)],b=m[0]-f[0],g=m[1]-f[1],p=Math.hypot(b,g),x=-g/p,y=b/p;for(let v of[-1,1])l.push((v+1)/2,.5),o.push(e[d][0]+x*a/2*v,n,e[d][1]+y*a/2*v);if(d<e.length-1){let v=d*2;c.push(v,v+1,v+2,v+1,v+3,v+2)}}let h=new vt;h.setAttribute("position",new je(o,3)),h.setIndex(c),h.setAttribute("uv",new je(l,2)),r&&h.setAttribute("paintSize",new je(Array.from({length:o.length/3},()=>[t,1e5,a,1e5]).flat(),4)),h.computeVertexNormals();let u=new Ie(h,this.mat[r?i+"Paint":i]);return u.material.side=Xt,this.root.add(u),u}junction(e,t){let n=t/2,i=-40+n,r=-40-n,a=2.4,o=e==="05";this.road(0,t,70,i),o&&this.road(0,t,r,-260),this.plane(300,t,0,-40,.015,"road"),this.marks(t,3.7,70,-22.55,0,!0,!1),o&&this.marks(t,3.7,-57.45,-260,0,!0,!1);for(let f of[-1,1]){this.line(f*(n-.25),70,i+a),o&&this.line(f*(n-.25),r-a,-260);for(let m of[-1,1]){let b=-40+m*n,g=n+(m===1||o?a:0);if(this.box(150-g,.18,1.6,f*(150+g)/2,-.02,b+m*.8,"pavement"),this.box(150-g,.2,.2,f*(150+g)/2,0,b+m*.1,"curb"),this.plane(150-g,.13,f*(150+g)/2,b-m*.25,.028,"white"),m===-1&&!o)continue;let p=f*n,x=b,y=[],v=[];for(let S=0;S<=48;S++){let M=S/48,I=Math.hypot(M,1-M),L=p+f*a*(1-M)**2,F=x+m*a*M*M;y.push([L,F]),v.push([L+f*M/I*1.6,F+m*(1-M)/I*1.6])}let _=new Ai;_.moveTo(p,x);for(let[S,M]of y)_.lineTo(S,M);_.closePath(),this.flatShape(_,.015,"road");let E=new Ai;E.moveTo(...y[0]);for(let S of y.slice(1))E.lineTo(...S);for(let S of v.reverse())E.lineTo(...S);E.closePath(),this.flatShape(E,.07,"pavement");let R=y.map(([S,M],I)=>{let L=I/48,F=Math.hypot(L,1-L);return[S+f*L/F*.1,M+m*(1-L)/F*.1]});this.pathRibbon(R,.2,.1,"curb");let A=y.map(([S,M],I)=>{let L=I/48,F=Math.hypot(L,1-L);return[S-f*L/F*.25,M-m*(1-L)/F*.25]});this.pathRibbon(A,.13,.028,"white")}}for(let f=-140;f<140;f+=10)if(!(Math.abs(f)<19)){for(let m of[-7.4,-3.7,3.7,7.4])this.plane(3.8,.13,f,-40+m,.03,"white");for(let m of[-.105,.105])this.plane(5,.1,f,-40+m,.031,"yellow")}let c=14,l=1.5,h=.62,u=2.5,d=Array.from({length:c},(f,m)=>(m-(c-1)/2)*l);for(let f of o?[-27,-53]:[-27])this.plane(c*l,u,0,f,.035,"crosswalk");for(let f of[-12.8,12.8])this.plane(c*l,u,f,-40,.035,"crosswalk").rotation.z=Math.PI/2;this.curbs(t,70,i+a),o?this.curbs(t,r-a,-260):(this.box(t,.18,1.6,0,-.02,r-.8,"pavement"),this.box(t,.2,.2,0,0,r-.1,"curb"),this.plane(t,.13,0,r+.25,.028,"white")),this.prepareStructurePaint("junction"),this.junctionDimensions={crosswalkCount:c,crosswalkSpacing:l,crosswalkLength:u,crosswalkStripeWidth:h,stripeOffsets:d,camera:"high-angle",roadSurface:"disjoint shared boundaries",cornerRadius:a,corners:o?4:2,edgePaint:"continuous shared curve endpoints",nearCrosswalk:-27,markingEnd:-22.55,stopLineVisible:!1,stopLineCount:0}}dividedCarriageway(e,t){let i=-(e+1.6),r=this.root.children.length;this.road(0,e,70,-260,t),this.marks(e,3.7,70,-260,t,!1,!1),this.line(-e/2+.25,70,-260,t),this.line(e/2-.25,70,-260,t);for(let o of this.root.children.slice(r))o.position.x+=i;let a=-(e+1.6)/2;this.plane(1.6,330,a,-95,t+.025,"pavement"),this.box(.68,.62,330,a,t+.31,-95,"curb",.05),this.dividedRoad={lanesPerDirection:3,medianWidth:1.6,oppositeCenter:i,egoCenter:0,directions:2}}ramp(e,t){let n=e==="06",i=t/2,r=3.7,a=n?1:-1,o=F=>n?-F-8:F+60,c=F=>n?-F-8:F-60,l=F=>{let z=Math.max(0,F),N=Math.min(z,60),H=1.85+.009*N*N+Math.max(0,z-60)*1.08,J=.018*N,G=r*Math.sqrt(1+J*J);return{x:H,l:H-G,r:H+G}},h=Math.min(o(70),o(-260)),u=Math.max(o(70),o(-260)),d=0;for(;l(d).l<i+2.4;)d+=.01;let f=d+2.5,m=4.5,b=.001,g=(l(f+b).l-l(f-b).l)/(2*b),p=new Xs(new C(i,0,c(d)),new C(i,0,c(d-m)),new C(l(f).l-g*m,0,c(f-m)),new C(l(f).l,0,c(f))),x=[];for(let F=u;F>d;F-=.1)x.push([i,c(F)]);for(let F=0;F<=96;F++){let z=p.getPoint(F/96);x.push([z.x,z.z])}for(let F=f+.1;F<u;F+=.1)x.push([l(F).l,c(F)]);x.push([l(u).l,c(u)]);let y=[];for(let F=u;F>h;F-=.1)y.push([Math.max(i,l(F).r),c(F)]);y.push([i,c(h)]);let v=[[-i,c(h)],[-i,c(u)],...x,...y],_=new Ai;v.forEach(([F,z],N)=>N?_.lineTo(F,z):_.moveTo(F,z)),_.closePath(),this.flatShape(_,.015,"road");let E=(F,z)=>F.map(([N,H],J)=>{let G=F[Math.max(0,J-1)],se=F[Math.min(F.length-1,J+1)],re=se[0]-G[0],de=se[1]-G[1],Te=Math.hypot(re,de);return[N-de/Te*z*a,H+re/Te*z*a]});this.pathRibbon(E(x,.25),.13,.033,"white"),this.pathRibbon(E(y,.25),.13,.033,"white"),this.line(-i+.25,70,-260),this.dashed(-1.85,70,-260),this.dashed(1.85,70,-260);let R=0,A=null,S=[];for(let F=h;F<=u;F+=.1){let z=l(F).x,N=c(F);A&&(R+=Math.hypot(z-A[0],N-A[1])),z>i+.3&&R%9<3.8?S.push([z,N]):S.length&&(S.length>1&&this.pathRibbon(S,.13,.033,"white"),S.length=0),A=[z,N]}S.length>1&&this.pathRibbon(S,.13,.033,"white");let M=p.getTangent(0),I=p.getTangent(1),L=new C(g,0,n?-1:1).normalize();this.prepareStructurePaint("ramp"),this.rampDimensions={lanes:2,laneWidth:3.7,width:7.4,surface:"single triangulated perimeter",nose:"tangent-continuous cubic",paintInset:.25,startTangentDot:M.dot(new C(0,0,a)),endTangentDot:I.dot(L)}}parking(e){["17","18","19"].includes(e)?zf(this):Hf(this,e)}roadworks(e){let t=this.root.children.length,n=e/2-3.38,i=e/2-.32,r=e<10;this.roadworkZone={side:"right roadside lane",left:n,right:i,roadHalfWidth:e/2,taperStart:i,taperEnd:n,front:-10,back:-48,blocksEgoLane:r,bypass:r?"opposing lane":"adjacent lane",truck:{localX:e/2-1.85,x:e/2-1.85,z:-34,width:2.35,length:7}};for(let d=0;d<14;d++){let f=-10-d*2.9,m=Math.min(d/4,1),b=i-m*(i-n);this.box(.48,.065,.48,b,.05,f,"cone",.025);let g=new Ie(new Hr(.23,.78,20),this.mat.cone);g.position.set(b,.47,f),g.castShadow=!0,this.root.add(g);let p=new Ie(new ai(.085,.14,.18,20),this.mat.white);p.position.set(b,.48,f),p.castShadow=!0,this.root.add(p)}let a=e/2-1.85,o=-34,c=new qt({color:"#202329",roughness:.87}),l=new qt({color:"#7f8993",metalness:.5,roughness:.35}),h=(d,f,m,b,g,p,x,y=.04)=>this.box(d,f,m,a+b,g,o+p,x,y);h(2.25,.36,6.6,0,.78,0,"building"),h(2.35,1.9,2.1,0,1.74,-2.25,"cone",.14),h(2.12,.72,.06,0,2.12,-3.32,"glass");for(let d of[-1,1])h(.055,.7,1.4,d*1.19,2.14,-2.35,"glass");h(2.32,.24,4.35,0,1.08,1.1,"building");for(let d of[-1,1])h(.14,.95,4.35,d*1.1,1.62,1.1,"cone");h(2.3,.95,.14,0,1.62,3.27,"cone");for(let d of[-1,1])for(let f of[-2.3,1.6,2.65]){let m=new Ie(new ai(.48,.48,.28,24),c);m.rotation.z=Math.PI/2,m.position.set(a+d*1.08,.5,o+f),m.castShadow=!0,this.root.add(m);let b=new Ie(new ai(.23,.23,.29,20),l);b.rotation.z=Math.PI/2,b.position.copy(m.position),this.root.add(b)}for(let d of[-1,1])h(.4,.19,.05,d*.7,1.05,3.36,"cone");this.contact(a,o,2.6,7.4,.26);for(let d of this.root.children.slice(t))d.userData.construction=!0;if(this.current==="13"){let d=f=>f>=-30?0:18*(1-Math.exp(-Math.pow((-f-30)/95,3)));for(let f of this.root.children.slice(t)){let m=f.position.z;f.position.x+=d(m),f.rotation.y+=Math.atan2(d(m+.05)-d(m-.05),.1)}this.roadworkZone.followsCurve=!0,this.roadworkZone.truck.x+=d(o)}let u=new Rt;u.userData.constructionAssembly=!0;for(let d of this.root.children.slice(t))d.material?.transparent?(d.userData.constructionContact=!0,d.userData.baseOpacity=d.material.opacity):u.add(d);this.root.add(u)}roundedWater(e){let t=this.root.children.length,n=e/2+3.2,i=62,r=(a,o,c,l)=>this.plane(o,380,a+o/2,-100,c,l);r(e/2+1.6,1.6,.018,"coastPavement"),this.root.children.at(-1).userData.reflectiveSurface=!0,r(n,i,-.1,"water"),r(n-.12,.24,.07,"coastCurb");for(let a of this.root.children.slice(t))a.userData.waterOwned=!0,a.userData.baseY=a.position.y,a.material!==this.mat.water&&(a.castShadow=!1,a.receiveShadow=!1);this.waterBounds={back:-290,front:90,bankOffset:n,waterWidth:i,parallelToRoad:!0,constantNormalOffset:3.2,reflectionPolicy:"shoreline objects only; distant buildings excluded"}}build(e,t={}){for(let n of this.buildSteps(e,t));}async prepareInitialScene(e){let t=e.id==="13"?e.laneCount===2?"09":"02":e.id;for(let n of this.buildSteps(t,{...e,palette:this.palette}))await new Promise(i=>setTimeout(i,0))}*buildSteps(e,t={}){this.camera.clearViewOffset(),this.options={buildings:!0,waterfront:e==="13",roadworks:e==="12",...t},this.root&&this.scene.remove(this.root);let n=["10","14","16"].includes(e)?"10":["17","18","19"].includes(e)?"17":e,i=JSON.stringify([n,t.laneCount,t.palette]),r=this.sceneCache.get(i);if(r){Object.assign(this,r.fields),this.current=e,this.scene.add(this.root),this.car.position.copy(r.carPosition),this.car.rotation.copy(r.carRotation),this.sun.target.position.copy(r.sunTarget),this.configureCamera(e,t),this.sceneCache.delete(i),this.sceneCache.set(i,r);return}this.dividedRoad=null,this.root=new Rt,this.scene.add(this.root),this.vegetation=new Rt,this.root.add(this.vegetation),this.lawns=[],this.current=e,this.parkingBays=[],this.parkingColumns=[],this.buildingPlacements=[],this.waterBounds=null,this.rampDimensions=null,this.roadworkZone=null,this.pedestrianPassages=[],this.junctionDimensions=null,this.parkingReplica=null;let a=["02","05","08","09","13"].includes(e),o=["02","09","13"].includes(e)&&t.laneCount?t.laneCount*3.7:["04","09"].includes(e)?7.4:a?22.2:11.1,c=e==="03"?Ih:0;pi.includes(e)||this.plane(2e4,2e4,0,-1e3,-.14,"ground");let l=a||e==="04"?1.85:0,h=0,u=-260;if((e==="08"||e==="05")&&(u=-40,h=e==="05"?-17.5:-10),e==="10"&&(u=-150),e==="03"){let g=o*2+1.6,p=-(o+1.6)/2;this.box(g+.6,.95,330,p,c-.48,-95,"curb").castShadow=!1;for(let x of[-1,1]){let y=this.box(.24,.28,330,p+x*(g/2+.12),c+.12,-95,"curb",.025);y.castShadow=!1}for(let x of[8,-20,-65,-110]){this.box(g-2,.8,2.6,p,c-1.3,x,"building",.08).castShadow=!1;for(let y of[-1,1])this.box(1.65,c-1.7,1.9,p+y*6,(c-1.7)/2,x,"building",.06).castShadow=!1}}if(!["13","06","07","05","08"].includes(e)&&!pi.includes(e)&&this.road(0,o,70,u,c),yield,pi.includes(e))this.parking(e);else if(e==="05"||e==="08")this.junction(e,o),yield,yield*this.environmentSteps(o,{cross:!0,tee:e==="08"});else if(e==="06"||e==="07")this.ramp(e,o);else if(this.marks(o,3.7,70,-260,c,e==="02"||e==="04"||e==="09",e!=="03"),e==="03"&&(this.line(o/2-.25,70,-260,c),this.line(-o/2+.25,70,-260,c)),e!=="03"&&this.curbs(o,70,-260,c),yield,["01"].includes(e)||(yield*this.environmentSteps(e==="03"?o*2+1.6:o,{small:["04","11","12"].includes(e),elevated:e==="03",residential:!1,centerX:e==="03"?-(o+1.6)/2:0})),e==="11"){for(let b of[-o/2-1.2,o/2+1.2])this.box(1.2,5.3,7,b,2.56,-35,"building",.06);this.box(o+3.6,1,7,0,5.6,-35,"building",.05)}if(["03","06","07"].includes(e)&&this.dividedCarriageway(o,c),yield,["02","09","13","12"].includes(e)&&this.roadworks(o),yield,["02","09","13"].includes(e)&&(this.mat.water.roughness=.28,this.mat.water.metalness=.32,this.roundedWater(o)),!["05","08",...pi].includes(e)){let b=e==="13"?18:0;this.road(b,120,-256,-268,c)}this.car.position.set(l,c+.02,h),this.car.rotation.set(0,0,0),this.configureCamera(e,t),yield,this.root.updateMatrixWorld(!0),this.root.traverse(b=>{if(!b.userData.laneDash)return;let g=b.geometry.getAttribute("position"),p=[];for(let v=0;v<g.count;v++)p.push(new C().fromBufferAttribute(g,v).applyMatrix4(b.matrixWorld).project(this.camera).y);let x=Math.min(...p),y=Math.max(...p);x<-1&&y>-1&&y<-.966&&(b.visible=!1)}),this.sun.position.set(-38,55+c,48),this.sun.target.position.set(0,c,-14),this.root.traverse(b=>{b.userData.buildingOwned&&b.traverse(g=>{g.castShadow=!1,g.receiveShadow=!1})}),this.scene.updateMatrixWorld(!0);let d=2166136261,f=b=>{d=Math.imul(d^Math.round(b*1e5),16777619)>>>0};this.root.traverse(b=>{if(b.matrixWorld.elements.forEach(f),b.geometry){let g=b.geometry.getAttribute("position").array;for(let p of g)f(p)}}),this.environmentSignature=d.toString(16),this.camera.projectionMatrix.elements.forEach(f),this.camera.matrixWorld.elements.forEach(f),this.car.matrixWorld.elements.forEach(f),this.geometrySignature=d.toString(16),yield,this.batchRoadMarkings(),this.root.traverse(b=>{b.isMesh&&!b.userData.sharedVehicleGeometry&&(b.customDepthMaterial=e==="03"&&!b.userData.buildingOwned&&[this.mat.road,this.mat.curb,this.mat.pavement,this.mat.building].includes(b.material)?this.receiverDepth:this.layoutDepth),(b.userData.laneDash||[this.mat.whitePaint,this.mat.lanePaint,this.mat.yellowPaint,this.mat.crosswalk].includes(b.material))&&(b.castShadow=!1,b.receiveShadow=!1)});let m={};for(let b of["root","vegetation","lawns","current","parkingBays","parkingColumns","buildingPlacements","waterBounds","rampDimensions","roadworkZone","pedestrianPassages","junctionDimensions","parkingReplica","parkedVehicles","parkingTone","parkingShadow","parkingGhostMaterials","environmentSignature","geometrySignature","dividedRoad"])m[b]=this[b];if(this.sceneCache.set(i,{fields:m,carPosition:this.car.position.clone(),carRotation:this.car.rotation.clone(),sunTarget:this.sun.target.position.clone()}),this.sceneCache.size>8){let b=this.sceneCache.keys().next().value;this.disposeSceneRoot(this.sceneCache.get(b).fields.root),this.sceneCache.delete(b)}}disposeSceneRoot(e){let t=new Set([...Object.values(this.mat),...this.laneMaterials.values()]),n=new Set,i=new Set;e.traverse(r=>{if(r.geometry&&!r.userData.sharedVehicleGeometry&&n.add(r.geometry),r.material)for(let a of Array.isArray(r.material)?r.material:[r.material])!t.has(a)&&!r.userData.sharedVehicleGeometry&&i.add(a)}),n.forEach(r=>r.dispose()),i.forEach(r=>r.dispose()),e.removeFromParent()}batchRoadMarkings(){for(let e of[this.mat.white,this.mat.yellow,this.mat.whitePaint,this.mat.lanePaint,this.mat.yellowPaint,...this.laneMaterials.values()]){let t=this.root.children.filter(a=>a.isMesh&&a.visible&&a.material===e&&!a.userData.buildingOwned&&!a.userData.construction&&a.geometry.index&&a.geometry.hasAttribute("uv")&&!a.castShadow);if(t.length<2)continue;if(t.some(a=>a.geometry.hasAttribute("structurePaintMask")))for(let a of t)a.geometry.hasAttribute("structurePaintMask")||a.geometry.setAttribute("structurePaintMask",new ft(new Float32Array(a.geometry.attributes.position.count),1));let n=t.map(a=>a.geometry.clone().applyMatrix4(a.matrix)),i=qf(n,!1);if(n.forEach(a=>a.dispose()),!i)continue;let r=new Ie(i,e);r.userData.roadEdge=t.every(a=>a.userData.roadEdge),t[0].userData.laneOffset!==void 0&&(r.userData.laneOffset=t[0].userData.laneOffset,r.userData.laneDash=!0),r.receiveShadow=![this.mat.whitePaint,this.mat.lanePaint,this.mat.yellowPaint,this.mat.crosswalk].includes(e),r.userData.laneDash&&(r.receiveShadow=!1),this.root.add(r);for(let a of t)a.removeFromParent(),a.geometry.dispose()}}configureCamera(e,t){let n=["02","09","13"].includes(e),i=JSON.stringify([t.cameraView,this.car.position.toArray(),this.car.rotation.toArray()]),r=n&&this.roadCameraCache.get(i);if(r){this.applyCamera(r),this.framing=r.framing;return}this.camera.clearViewOffset();let a=this.car.position.x,o=this.car.position.z,c=e==="03"?Ih:0,l=(f,m,b)=>{this.cameraAim=new C(f,m,b),this.camera.lookAt(this.cameraAim)},h=e==="01",u=h?18:23,d=h?6.8:8.5;if(this.camera.position.set(a,d+c,u),l(a,c,h?-20:-24),this.camera.updateMatrixWorld(),this.camera.updateProjectionMatrix(),pi.includes(e)){let m={10:[0,11,22,0,0,-5],14:[0,34,.1,0,0,0],15:[18,33,26,0,0,-3],16:[0,26,22,0,0,-5],17:[0,11,22,0,0,-5],18:[0,26,22,0,0,-5],19:[0,34,.1,0,0,0]}[e];this.camera.position.set(...m.slice(0,3)),l(...m.slice(3))}else if(["05","08"].includes(e)){let f=t.cameraView==="high";this.car.position.z=t.junctionPosition==="approaching"?14:-20.5;let m=this.car.position.z;this.camera.position.set(a,f?32:8.5,m+(f?40:23)),l(a,0,m-24),this.junctionDimensions&&(this.junctionDimensions.camera=f?"high-angle":"low-approach")}["02","09","13","06","07"].includes(e)&&t.cameraView==="high"&&(this.camera.position.set(a,26,32),l(a,0,-16)),e==="03"&&t.cameraView==="high"&&(this.camera.position.set(a,c+26,32),l(a,c,-16)),this.camera.updateMatrixWorld(),this.camera.updateProjectionMatrix(),this.framing=Bf(this.car,this.camera,["14","16","18","19"].includes(e)||t.cameraView==="high"?"high":"low"),n&&this.roadCameraCache.set(i,this.captureCamera())}update({id:e,mode:t,trees:n,vehicle:i,buildings:r=!0,waterfront:a=e==="13",roadworks:o=e==="12",laneCount:c,cameraView:l="low",junctionPosition:h="near"},{cameraMotion:u=!1,environmentMotion:d=!1,layoutMotion:f=!1,structureMotion:m=!1,layoutPhase:b=!1,deferRender:g=!1}={}){e==="13"&&(e=c===2?"09":"02"),["05","08"].includes(e)&&(l=h==="near"?"high":"low");let p={id:e,mode:t,trees:n,vehicle:i,buildings:r,waterfront:a,roadworks:o,laneCount:c,cameraView:l,junctionPosition:h},x=N=>["05","08"].includes(N)?"junction":null;if(!b&&this.layoutTransition?.kind==="structure"&&x(e)===this.layoutTransition.family){let N=this.layoutTransition;return N.phase==="enter"&&e!==this.current?this.beginStructureTransition(p):N.target=p,this.audit()}if(!b&&m&&this.current!==e&&x(e)&&x(this.current)===x(e))return this.beginStructureTransition(p),this.audit();let y=["02","09","13"].includes(this.current)&&["02","09","13"].includes(e);if(!b&&y&&this.layoutTransition){let N=this.layoutTransition,H=p.id===N.target.id&&p.laneCount===N.target.laneCount;return N.target=p,H?N.phase==="road"&&(this.environmentTargets={buildings:r?1:0,trees:n?1:0,waterfront:a?1:0,roadworks:o?1:0},Object.assign(this.state,{buildings:r,trees:n,waterfront:a,roadworks:o,vehicle:i}),this.car.visible=i,this.stopEnvironmentMotion(),this.startEnvironmentMotion()):N.phase!=="prepare"&&this.beginLaneTransition(p),this.audit()}if(!b&&y&&f&&c!==this.state?.laneCount)return this.beginLaneTransition(p),this.audit();!b&&!y&&this.clearLayoutTransition();let v=u&&this.state?this.captureCamera():null,_=f&&["02","09","13"].includes(this.current)&&["02","09","13"].includes(e)?{...this.layoutVisual||this.roadLayout(this.state)}:null;if(this.stopLayoutMotion(),!b)for(let N of this.laneMaterials.values())N.opacity=1;this.stopCameraMotion(),this.stopEnvironmentMotion();let E={buildings:r,waterfront:a,roadworks:o,laneCount:c,cameraView:l,junctionPosition:h,palette:this.palette},R=e!==this.current||!this.options||["laneCount","palette"].some(N=>E[N]!==this.options[N]);R?this.build(e,E):(this.vehicleNeedsFraming||l!==this.options.cameraView||h!==this.options.junctionPosition)&&(this.options=E,this.configureCamera(e,E)),this.vehicleNeedsFraming=!1,this.options=E;let A=t==="dark",S=A?1:0,M=pi.includes(e),I=["10","14","15","16"].includes(e),L=n&&O4.find(N=>N.id===e).trees;for(let[N,H]of Object.entries(this.colors))if(this.mat[N].color.set(H[S]),!A){let J=this.mat[N].color,G=.2126*J.r+.7152*J.g+.0722*J.b;J.lerp(new xe(G,G,G),.025)}let F={balanced:{road:"#59616c",ground:"#c4cfdd",pavement:"#d3dce4",building:"#d3d7dd"},cool:{road:"#626974",ground:"#c1c9d3",pavement:"#d4d9e0",building:"#d3d7dd"},neutral:{road:"#68696b",ground:"#cccdce",pavement:"#d9dadb",building:"#dcdddd"},warm:{road:"#6c6965",ground:"#d1cec8",pavement:"#dfdbd4",building:"#e2dfd9"},soft:{road:"#7d7f82",ground:"#d5d7da",pavement:"#e0e2e5",building:"#e1e3e6"}};if(!A&&F[this.palette])for(let[N,H]of Object.entries(F[this.palette]))this.mat[N].color.set(H);this.mat.environmentBuilding.color.copy(this.mat.building.color),this.mat.shoreGrass.color.copy(this.mat.grass.color),this.mat.junctionGrass.color.copy(this.mat.grass.color),this.mat.whitePaint.color.copy(this.mat.white.color),this.mat.yellowPaint.color.copy(this.mat.yellow.color),this.mat.crosswalk.color.copy(this.mat.white.color),this.mat.lanePaint.color.copy(this.mat.white.color);for(let N of this.laneMaterials.values())N.color.copy(this.mat.white.color);for(let N of this.lawns)N.material=N.userData.junctionPersistent?this.mat.junctionGrass:this.waterBounds&&N.position.x>0?this.mat.shoreGrass:this.mat.grass,N.receiveShadow=!1;this.buildingTint.value=A?0:1,this.mat.building.roughness=A?.5:.62,this.mat.building.clearcoat=A?.04:.025,this.mat.building.clearcoatRoughness=A?.56:.6,this.mat.building.specularIntensity=A?.36:.24,this.mat.building.envMapIntensity=A?1.5:.55;for(let N of["roughness","clearcoat","clearcoatRoughness","specularIntensity","envMapIntensity"])this.mat.environmentBuilding[N]=this.mat.building[N];if(this.mat.glass.roughness=A?.46:.3,this.mat.glass.clearcoat=A?.22:.72,this.mat.glass.envMapIntensity=A?.35:.8,this.parkingTone&&(this.parkingTone.value=A?1:0),M&&this.parkingShadow&&(this.parkingShadow.material.opacity=A?.16:.22),I)for(let N of this.parkingGhostMaterials){let H=N.userData.ghostPart;N.color.set(H==="body"?A?"#424243":"#939aa3":H==="glass"?A?"#2e2e30":"#5b626b":A?"#272729":"#575c63")}this.car.visible=i,this.hemi.color.set(A?"#d5d5d5":"#a6c8f2"),this.hemi.groundColor.set(A?"#717171":"#8b959d"),this.hemi.intensity=A?.95:1.05,this.sun.color.set(A?"#ebebeb":"#fff5e8"),this.sun.intensity=A?1.65:3,this.fill.color.set(A?"#cacaca":"#aacded"),this.fill.intensity=A?.45:.5,this.scene.environmentIntensity=M?A?.28:.42:A?.3:.38,M&&(this.hemi.color.set(A?"#e5e5e5":"#d9e2eb"),this.hemi.groundColor.set(A?"#717171":"#91969e"),this.hemi.intensity=A?.65:.85,this.sun.color.set(A?"#eeeeee":"#fff5e8"),this.sun.intensity=A?1.4:2.6,this.fill.color.set(A?"#cccccc":"#d7e2eb"),this.fill.intensity=.35),this.sun.position.set(-38,55+(e==="03"?Ih:0),48),this.sun.shadow.intensity=A?.22:.28;let z=this.egoContact.children[0];if(z.scale.y=1,z.position.z=0,z.material.uniforms.opacity.value=A?.3:.38,this.environmentTone.value=A?1:0,this.darkAerialPerspective.value=A?1:0,this.sky.material.uniforms.range.value=A?.32:.2,this.sky.material.uniforms.top.value.set(A?"#2d2e30":"#96bde0"),this.sky.material.uniforms.bottom.value.set(A?"#48494b":"#dce5ee"),this.scene.fog.color.set(A?"#48494b":"#dce5ee"),this.scene.fog.near=I?1e5:55,this.scene.fog.far=I?12e4:210,this.sky.visible=!0,this.scene.background=null,A&&(this.sky.material.uniforms.range.value=.2,this.sky.material.uniforms.top.value.set("#202225"),this.sky.material.uniforms.bottom.value.set("#373a3e"),this.scene.fog.color.copy(this.sky.material.uniforms.bottom.value)),!A&&this.palette!=="current"){let N=this.palette==="warm";this.hemi.color.set(this.palette==="balanced"?"#cedded":N?"#ece8e2":"#e2e5e8"),this.fill.color.set(this.palette==="balanced"?"#cbdde9":N?"#e8e4df":"#dfe3e8")}if(this.state={id:e,mode:t,trees:L,vehicle:i,buildings:r,waterfront:a,roadworks:o,laneCount:c,cameraView:l,junctionPosition:h},this.environmentTargets={buildings:r?1:0,trees:L?1:0,waterfront:a&&this.waterBounds?1:0,roadworks:o&&this.roadworkZone?1:0},!d||R)for(let N of Object.keys(this.environmentGrowth))b||Object.assign(this.environmentGrowth[N],{value:b?0:this.environmentTargets[N],velocity:0});if(this.applyEnvironmentGrowth(),(d&&!R||b&&this.layoutTransition?.kind==="lanes")&&this.startEnvironmentMotion(),_){for(let N of this.layoutTransition?.departingLines||[])this.root.add(N);this.startLayoutMotion(_,this.roadLayout(this.state))}else this.layoutVisual=this.roadLayout(this.state);return v?this.startCameraMotion(v):g||this.renderFrame(),v||this.onCameraFrame?.(!1),this.audit()}async prepareScene(){await jf(this)}renderPreparedFrame(){let e=[];this.root.traverse(t=>{e.push([t,t.visible,t.frustumCulled]),t.visible=!0,t.frustumCulled=!1});try{this.renderFrame()}finally{for(let[t,n,i]of e)t.visible=n,t.frustumCulled=i;this.renderer.shadowMap.needsUpdate=!0,this.preparedRoots.add(this.root);for(let t of this.preparedMaterials||[])t.dispose();this.preparedMaterials=[]}}completeLayoutTransition(e){if(this.layoutTransition!==e)return;let t=e.target;this.clearLayoutTransition(),this.onLayoutFrame?.(!1),JSON.stringify(t)!==JSON.stringify(this.state)&&this.update(t,{environmentMotion:!0,cameraMotion:t.cameraView!==this.state.cameraView})}clearLayoutTransition(){let e=this.layoutTransition;e?.frame&&cancelAnimationFrame(e.frame);for(let t of e?.departingLines||[])t.removeFromParent(),t.geometry.dispose();this.layoutTransition=null,this.structureMotion=null,this.structurePaintOpacity.value=1}prepareStructurePaint(e){this.root.updateMatrixWorld(!0),this.root.traverse(t=>{if(!t.geometry?.hasAttribute("paintSize"))return;let n=t.geometry.attributes.position,i=new Float32Array(n.count);if(e==="junction"){t.geometry.computeBoundingBox();let r=t.geometry.boundingBox.getCenter(new C).applyMatrix4(t.matrixWorld);Math.abs(r.x)<15.1&&r.z<-50&&i.fill(1)}else if(t.geometry.type==="BufferGeometry")for(let r=0;r<n.count;r+=2)(n.getX(r)+n.getX(r+1))/2>5.56&&(i[r]=i[r+1]=1);t.geometry.setAttribute("structurePaintMask",new ft(i,1))})}prepareStructureOffsets(e){this.root.updateMatrixWorld(!0),this.root.traverse(t=>{if(!t.isMesh||!t.geometry||t.userData.buildingOwned||t.userData.sharedVehicleGeometry||this.vegetation.children.includes(t.parent)||this.lawns.includes(t)||t.material===this.mat.ground)return;let n=t.geometry.attributes.position,i=t.matrixWorld.elements,r=t.matrixWorld.clone().invert().elements,a=new Float32Array(n.count*3),o=t.geometry.hasAttribute("structurePaintMask");for(let c=0;c<n.count;c++){let l=n.getX(c),h=n.getY(c),u=n.getZ(c),d=i[0]*l+i[4]*h+i[8]*u+i[12],f=i[2]*l+i[6]*h+i[10]*u+i[14],m=!o&&e==="ramp"?-Math.max(0,d-5.55):0,b=!o&&e==="junction"&&Math.abs(d)<=15.1?Math.max(0,-51.1-f):0;a[c*3]=r[0]*m+r[8]*b,a[c*3+1]=r[1]*m+r[9]*b,a[c*3+2]=r[2]*m+r[10]*b}t.geometry.setAttribute("layoutOffset",new ft(a,3))})}beginStructureTransition(e){let t=this.layoutTransition,n=t?.kind==="structure"?this.layoutBlend.value:1,i=t?.kind==="structure"?this.structurePaintOpacity.value:1;this.clearLayoutTransition(),this.stopLayoutMotion(!1),this.stopCameraMotion(),this.stopEnvironmentMotion();let r=["05","08"].includes(e.id)?"junction":"ramp",a={kind:"structure",family:r,target:e,phase:"exit",frame:0,start:0,blend:n,environmentReveal:t?.environmentReveal??1},o=a.environmentReveal,c=Ua.branchPaintStart;this.layoutTransition=a,this.structureMotion=a,this.prepareStructureOffsets(r),this.structurePaintOpacity.value=i,this.environmentTargets=r==="junction"?{buildings:e.buildings?1:0,trees:e.trees?1:0,waterfront:0,roadworks:0}:{buildings:0,trees:0,waterfront:0,roadworks:0},this.startEnvironmentMotion(),this.onLayoutFrame?.(!0);let l=h=>{if(this.layoutTransition===a){if(a.start||=h,a.phase==="exit"){let u=h-a.start,d=Math.min(1,u/340),f=rt.clamp((u-90)/250,0,1),m=f*f*(3-2*f),b=Math.min(1,u/130);if(this.structurePaintOpacity.value=i*(1-b*b*(3-2*b)),this.layoutBlend.value=n*(1-m),r==="junction"){let g=Math.min(1,(h-a.start)/220);a.environmentReveal=o*(1-g*g*g)}if(d>=.97){if(this.stopEnvironmentMotion(),a.phase="enter",a.start=h,this.update(a.target,{layoutPhase:!0,deferRender:!0}),this.prepareStructureOffsets(r),this.layoutBlend.value=0,this.structurePaintOpacity.value=0,r==="junction")a.environmentReveal=0,this.startEnvironmentMotion();else for(let g of Object.values(this.environmentGrowth))Object.assign(g,{value:0,velocity:0});this.applyEnvironmentGrowth()}}else{let u=Math.min(1,(h-a.start)/620),d=6,f=(1+d)*Math.exp(-d);this.layoutBlend.value=1-(1+d*u)*Math.exp(-d*u)+f*u*u*(3-2*u);let m=rt.clamp((u-c)/(1-c),0,1);if(this.structurePaintOpacity.value=m*m*m*(m*(m*6-15)+10),r==="junction"){let b=rt.clamp((u-.55)/.45,0,1),g=16*.62*.45,p=(1+g)*Math.exp(-g);a.environmentReveal=1-(1+g*b)*Math.exp(-g*b)+p*b*b*(3-2*b)}else u>=.55&&!a.environmentStarted&&(a.environmentStarted=!0,this.startEnvironmentMotion());if(u===1){this.layoutBlend.value=1,this.structurePaintOpacity.value=1,r==="junction"&&this.applyEnvironmentGrowth(),this.renderFrame(!0),this.completeLayoutTransition(a);return}}r==="junction"&&this.applyEnvironmentGrowth(),this.renderFrame(!0),this.onLayoutFrame?.(!0),a.frame=requestAnimationFrame(l)}};a.frame=requestAnimationFrame(l)}beginLaneTransition(e){let t={...this.layoutVisual||this.roadLayout(this.state)},n=new Map,i=[];this.root.traverse(a=>{if(a.userData.laneOffset!==void 0&&(n.set(a.userData.laneOffset.toFixed(3),a.material.opacity),a.material.opacity>.001&&Math.abs(a.userData.laneOffset)>=e.laneCount*3.7/2-.1)){let o=a.clone();o.geometry=a.geometry.clone(),o.userData.departingLane=!0,i.push(o)}}),this.clearLayoutTransition(),this.stopLayoutMotion(!1),this.stopEnvironmentMotion(),this.stopCameraMotion();let r={target:e,from:t,lineAlphas:n,departingLines:i,kind:"lanes",phase:"prepare",frame:0,start:0};this.layoutTransition=r,this.onLayoutFrame?.(!0),this.advanceLayoutToRoad(r)}advanceLayoutToRoad(e){this.layoutTransition!==e||e.phase!=="prepare"||(this.stopEnvironmentMotion(),e.frame=0,e.phase="road",this.mat.lanePaint.opacity=0,this.update(e.target,{layoutMotion:!0,layoutPhase:!0}),this.layoutMotion||(this.mat.lanePaint.opacity=1,this.completeLayoutTransition(e)))}finishLayoutTransition(){let e=this.layoutTransition;e&&(this.clearLayoutTransition(),this.stopLayoutMotion(),this.stopEnvironmentMotion(),this.mat.lanePaint.opacity=1,this.update(e.target),this.onLayoutFrame?.(!1))}roadLayout(e){return{width:(e?.laneCount||6)*3.7,curve:0}}stopLayoutMotion(e=!0){this.layoutMotion&&cancelAnimationFrame(this.layoutMotion.frame),this.layoutMotion=null,e&&(this.layoutBlend.value=1,this.mat.lanePaint.opacity=1)}finishLayoutMotion(){if(!this.layoutMotion)return;this.layoutVisual=this.layoutMotion.to,this.stopLayoutMotion(),this.renderFrame();let e=this.layoutTransition;e?this.completeLayoutTransition(e):this.onLayoutFrame?.(!1)}startLayoutMotion(e,t){if(Math.abs(e.width-t.width)<.001&&Math.abs(e.curve-t.curve)<.001){this.layoutVisual=t;return}let n=(f,m)=>f>=-30?0:m*18*(1-Math.exp(-Math.pow((-f-30)/95,3)));this.root.updateMatrixWorld(!0),this.root.traverse(f=>{if(!f.isMesh||!f.geometry||f.userData.sharedVehicleGeometry)return;let m=f.geometry.attributes.position,b=new Float32Array(m.count*3),g=f.matrixWorld.elements,p=f.matrixWorld.clone().invert().elements,x=f.userData.buildingOwned||this.vegetation.children.includes(f.parent),y=f.userData.laneOffset!==void 0||[this.mat.yellow,this.mat.yellowPaint].includes(f.material),v=t.width/2;for(let _=0;_<m.count;_++){let E=m.getX(_),R=m.getY(_),A=m.getZ(_),S=g[0]*E+g[4]*R+g[8]*A+g[12],M=g[2]*E+g[6]*R+g[10]*A+g[14],I=S-n(M,t.curve),F=(f.userData.roadEdge?I+(e.width-t.width)*Math.sign(I)*.5:x?I+(e.width-t.width)*Math.sign(g[12])*.5:y||Math.abs(I)<=.35?I:Math.abs(I)<=v?Math.sign(I)*(.35+(Math.abs(I)-.35)*(e.width/2-.35)/(v-.35)):Math.sign(I)*(Math.abs(I)-v+e.width/2))+n(M,e.curve)-S;b[_*3]=p[0]*F,b[_*3+1]=p[1]*F,b[_*3+2]=p[2]*F}(f.userData.construction||f.userData.constructionContact)&&b.fill(0),f.geometry.setAttribute("layoutOffset",new ft(b,3))}),this.layoutBlend.value=0,this.mat.lanePaint.opacity=0,this.layoutVisual=e;let i=[];for(let f of this.root.children)if(f.userData.constructionAssembly||f.userData.constructionContact){let m=f.userData.layoutBaseX??(f.userData.layoutBaseX=f.position.x);i.push({o:f,x:m}),f.position.x=m+(e.width-t.width)/2}this.root.traverse(f=>{f.userData.laneOffset!==void 0&&(f.material.opacity=this.layoutTransition?.lineAlphas.get(f.userData.laneOffset.toFixed(3))||0)});let r=[...this.root.children].some(f=>f.userData.laneOffset!==void 0&&!f.userData.departingLane&&(this.layoutTransition?.lineAlphas.get(f.userData.laneOffset.toFixed(3))||0)<.999),a=Ua.laneSpeed,o=448/a,c=58.96/a,l=439.57/a,h={from:e,to:t,frame:0,start:0,addingLines:r,duration:o,elapsed:0,paused:!1};this.layoutMotion=h,this.onLayoutFrame?.(!0);let u=f=>{h.elapsed=f;let m=Math.min(1,f/o),b=6,g=(1+b)*Math.exp(-b),p=1-(1+b*m)*Math.exp(-b*m)+g*m*m*(3-2*m);for(let{o:_,x:E}of i)_.position.x=E+(e.width-t.width)/2*(1-p);if(this.layoutBlend.value=p,this.layoutVisual={width:rt.lerp(e.width,t.width,p),curve:rt.lerp(e.curve,t.curve,p)},this.waterBounds){let _=this.layoutVisual.width/2+3.2;this.shoreArea.value.x=_,this.shoreArea.value.y=_+this.waterBounds.waterWidth}let x=rt.clamp((f-c)/l,0,1);this.mat.lanePaint.opacity=x*x*(3-2*x);let y=this.layoutVisual.width/2-.25,v=Au[`${Math.round(e.width/3.7)}-${Math.round(t.width/3.7)}`];return this.root.traverse(_=>{if(_.userData.laneOffset!==void 0){let E=this.layoutTransition?.lineAlphas.get(_.userData.laneOffset.toFixed(3))||0,R=Number.isFinite(v)?m>=v:y<=Math.abs(_.userData.laneOffset)+.065;_.material.opacity=_.userData.departingLane?R?0:E:E+(1-E)*this.mat.lanePaint.opacity}}),this.renderFrame(!0),this.onLayoutFrame?.(!0),this.onLaneMotionProgress?.({from:Math.round(e.width/3.7),to:Math.round(t.width/3.7),progress:m,duration:o,paused:h.paused}),m>=1&&(!r||x>=1)};h.sample=u;let d=f=>{if(this.layoutMotion!==h||h.paused)return;if(h.start||=f,u(f-h.start+(h.resumeOffset||0))){this.finishLayoutMotion();return}h.frame=requestAnimationFrame(d)};h.tick=d,h.frame=requestAnimationFrame(d)}seekLaneMotion(e){let t=this.layoutMotion;return t?(cancelAnimationFrame(t.frame),t.paused=!0,t.sample(rt.clamp(e,0,1)*t.duration),!0):!1}resumeLaneMotion(){let e=this.layoutMotion;return!e||!e.paused?!1:(e.paused=!1,e.resumeOffset=e.elapsed,e.start=0,e.frame=requestAnimationFrame(e.tick),!0)}applyEnvironmentGrowth(){let e=this.environmentGrowth.buildings.value,t=this.environmentGrowth.trees.value,n=this.environmentGrowth.waterfront.value,i=this.environmentGrowth.roadworks.value,r=this.structureMotion?.family==="junction"?this.structureMotion.environmentReveal:1,a=d=>d.userData.junctionPersistent?1:r,o=d=>this.waterBounds&&d.position.x>0?1-rt.smoothstep(n,0,.72):1,c=rt.smoothstep(n,.6,1);this.root.traverse(d=>{if(!d.userData.buildingOwned)return;let f=d.userData.growthBaseY??(d.userData.growthBaseY=d.position.y),m=e*o(d)*a(d);d.visible=m>5e-4,d.position.y=f-d.userData.growthHeight*(1-m)}),this.vegetation.visible=t>5e-4;for(let d of this.vegetation.children){if(d.userData.growthHeight===void 0){let m=1;for(let b of d.children)b.geometry.computeBoundingBox(),m=Math.max(m,(b.position.y+b.geometry.boundingBox.max.y*b.scale.y)*d.scale.y);d.userData.growthHeight=m+.3,d.userData.growthBaseY=d.position.y}let f=t*o(d)*a(d);d.visible=f>5e-4,d.position.y=d.userData.growthBaseY-d.userData.growthHeight*(1-f)}let l=rt.smoothstep(t,0,.65);for(let d of this.lawns)d.visible=l*a(d)>5e-4&&o(d)>.01;this.mat.junctionGrass.opacity=l,this.mat.grass.opacity=l*rt.smoothstep(r,0,.65),this.mat.shoreGrass.opacity=l*(1-rt.smoothstep(n,0,.72));let h=rt.smootherstep(n,0,.72);for(let d of["pavement","curb"]){let f=this.mat["coast"+d[0].toUpperCase()+d.slice(1)];f.color.copy(this.mat[d].color),f.opacity=h}this.waterMix.value=c,this.shoreEnabled.value=this.waterBounds&&c>0?1:0,this.waterBounds&&this.shoreArea.value.set(this.waterBounds.bankOffset,this.waterBounds.bankOffset+this.waterBounds.waterWidth,this.waterBounds.back,this.waterBounds.front);let u=new xe(this.colors.water[this.state.mode==="dark"?1:0]);this.mat.water.color.copy(this.mat.ground.color).lerp(u,c),this.mat.water.roughness=rt.lerp(this.mat.ground.roughness,.28,c),this.mat.water.metalness=rt.lerp(this.mat.ground.metalness,.32,c);for(let d of this.root.children)d.userData.waterOwned&&(d.material===this.mat.water?(d.visible=c>0,d.position.y=-.14-.45*c):(d.visible=h>0,d.position.y=d.userData.baseY)),d.userData.constructionAssembly&&(d.visible=i>5e-4,d.scale.y=Math.max(.001,i),d.position.y=.025*(1-i)),d.userData.constructionContact&&(d.visible=i>5e-4,d.material.opacity=d.userData.baseOpacity*rt.smoothstep(i,0,.8))}stopEnvironmentMotion(){let e=!!this.environmentMotion;e&&cancelAnimationFrame(this.environmentMotion.frame),this.environmentMotion=null,e&&this.onEnvironmentFrame?.(!1)}finishEnvironmentMotion(){let e=this.environmentMotion?.onfinish;if(this.stopEnvironmentMotion(),!!this.environmentTargets){for(let t of Object.keys(this.environmentGrowth))Object.assign(this.environmentGrowth[t],{value:this.environmentTargets[t],velocity:0});this.applyEnvironmentGrowth(),this.renderFrame(),this.onEnvironmentFrame?.(!1),e?.()}}startEnvironmentMotion({onfinish:e}={}){let t={frame:0,last:0,elapsed:0,exits:{},onfinish:e};this.environmentMotion=t,this.onEnvironmentFrame?.(!0);let n=i=>{if(this.environmentMotion!==t)return;let r=t.last?Math.min(.048,(i-t.last)/1e3):0;t.last=i,t.elapsed+=r;let a=!0;for(let o of Object.keys(this.environmentGrowth)){let c=this.environmentGrowth[o],l=this.environmentTargets[o];if(o==="waterfront"){let h=t.coast??={value:c.value,velocity:c.velocity,duration:Ua.coastDuration},u=Math.min(1,t.elapsed/h.duration),d=u*u*u*(u*(u*6-15)+10),f=u*(1-u)**3;c.value=rt.clamp(h.value+(l-h.value)*d+h.velocity*h.duration*f,0,1),c.velocity=u===1?0:(l-h.value)*30*u*u*(1-u)**2/h.duration+h.velocity*(1-u)**2*(1-4*u)}else if(l){let h=this.layoutTransition?.phase==="enter"?16:12,u=c.value-l,d=c.velocity+h*u,f=Math.exp(-h*r);c.value=rt.clamp(l+(u+d*r)*f,0,1),c.velocity=(c.velocity-h*d*r)*f}else{let h=t.exits[o]??={value:c.value,velocity:Math.min(0,c.velocity),duration:this.layoutTransition?.phase==="exit"?.22:["buildings","waterfront"].includes(o)?.34:.3},u=Math.min(1,t.elapsed/h.duration);c.value=Math.max(0,h.value*(1-u*u*u)+(u*u*u-2*u*u+u)*h.velocity*h.duration),c.velocity=u===1?0:-3*h.value*u*u/h.duration+(3*u*u-4*u+1)*h.velocity}(Math.abs(c.value-l)>.001||Math.abs(c.velocity)>.01)&&(a=!1)}if(this.applyEnvironmentGrowth(),!this.cameraMotion&&!this.layoutMotion&&!this.structureMotion&&this.renderFrame(),this.onEnvironmentFrame?.(!0),a){this.finishEnvironmentMotion();return}t.frame=requestAnimationFrame(n)};t.frame=requestAnimationFrame(n)}renderFrame(e=!1){let{id:t,mode:n,vehicle:i}=this.state,r=n==="dark",a=pi.includes(t),o=JSON.stringify([this.car.position.toArray(),this.car.rotation.toArray(),i,this.environmentGrowth.trees.value,this.environmentGrowth.roadworks.value,this.environmentGrowth.waterfront.value,this.layoutBlend.value,n]),c=this.shadowSceneRoot!==this.root||this.shadowKey!==o||this.renderer.shadowMap.needsUpdate,l=[...this.buildingPlacements,...this.parkingColumns.map(p=>({x:p.position.x,z:p.position.z,width:.68,depth:.68}))];this.buildingCount.value=Math.min(32,l.length),l.slice(0,32).forEach((p,x)=>this.buildingFootprints.value[x].set(p.x,p.z,p.width/2,p.depth/2)),this.scene.updateMatrixWorld(!0),this.mirror.position.y=-.14-.45*this.waterMix.value,this.mirror.updateMatrixWorld(!0);let h=[];this.root.traverse(p=>{p.isMesh&&(p.userData.reflectiveSurface||["road","ground","pavement","water","parkingFloor","parkingBay"].some(x=>p.material===this.mat[x]))&&(h.push([p,p.visible]),p.visible=!1)});for(let p of this.parkingColumns)p.userData.glow&&(p.userData.glow.visible=!1);if(this.egoContact.visible=!1,this.tailReflection.visible=!1,this.car.visible=!1,this.renderer.shadowMap.needsUpdate=!1,this.environmentGrowth.waterfront.value>5e-4){let p=[];this.root.traverse(y=>{y.userData.buildingOwned&&(p.push([y,y.visible]),y.visible=!1)}),this.mirror.onBeforeRender(this.renderer,this.scene,this.camera),this.waterReflectionMatrix.value.copy(this.mirror.material.uniforms.textureMatrix.value).multiply(new Ce().copy(this.mirror.matrixWorld).invert());let x=this.renderer.getRenderTarget();this.blurMaterial.uniforms.source.value=this.mirror.getRenderTarget().texture,this.blurMaterial.uniforms.direction.value.set(7/this.width,7/this.height),this.renderer.setRenderTarget(this.waterReflectionTarget),this.blurQuad.render(this.renderer),this.renderer.setRenderTarget(x);for(let[y,v]of p)y.visible=v}this.mirror.position.y=a?0:-.14,this.mirror.updateMatrixWorld(!0);let u=this.scene.background,d=this.sky.visible,f=this.renderer.getClearAlpha(),m=this.renderer.getClearColor(new xe);this.scene.background=null,this.sky.visible=!1,this.renderer.setClearColor(0,0);let b=[];this.root.traverse(p=>{p.isMesh&&!p.userData.buildingOwned&&!this.parkingColumns.includes(p)&&(b.push([p,p.visible]),p.visible=!1)}),this.groundReflectionAudit={trees:0,buildings:0},this.root.traverse(p=>{!p.isMesh||!p.visible||(p.userData.buildingOwned&&this.groundReflectionAudit.buildings++,[this.mat.leaf,this.mat.leaf2,this.mat.trunk].includes(p.material)&&this.groundReflectionAudit.trees++)}),this.mirror.onBeforeRender(this.renderer,this.scene,this.camera);for(let[p,x]of b)p.visible=x;this.scene.background=u,this.sky.visible=d,this.renderer.setClearColor(m,f);let g=this.renderer.getRenderTarget();this.blurMaterial.uniforms.source.value=this.mirror.getRenderTarget().texture,this.blurMaterial.uniforms.direction.value.set(4/this.width,0),this.renderer.setRenderTarget(this.blurTargets[0]),this.blurQuad.render(this.renderer),this.blurMaterial.uniforms.source.value=this.blurTargets[0].texture,this.blurMaterial.uniforms.direction.value.set(0,4/this.height),this.renderer.setRenderTarget(this.blurTargets[1]),this.blurQuad.render(this.renderer),this.renderer.setRenderTarget(g),this.reflectionMatrix.value.copy(this.mirror.material.uniforms.textureMatrix.value).multiply(new Ce().copy(this.mirror.matrixWorld).invert());for(let[p,x]of h)p.visible=x;for(let p of this.parkingColumns)p.userData.glow&&(p.userData.glow.visible=!0);this.car.visible=i,this.tailReflection.visible=i,kf(this.tailReflection,this.car,r,a),this.renderer.shadowMap.needsUpdate=c,this.egoContact.visible=i,this.egoContact.position.set(this.car.position.x,this.car.position.y-.02,this.car.position.z),this.vehicleDetail.setVehicleFrame(this.framing.vehicleFrame,i),this.composer.render(),this.shadowSceneRoot=this.root,this.shadowKey=o,this.shadowVehiclePosition=this.car.position.clone(),this.shadowFrameAudit={updated:c,car:this.shadowVehiclePosition.toArray(),contact:this.egoContact.position.toArray()}}captureCamera(){let e=this.car.position.clone().add(new C(0,.85,0)),t=e.clone().project(this.camera);return{position:this.camera.position.clone(),carPosition:this.car.position.clone(),quaternion:this.camera.quaternion.clone(),aim:this.cameraAim.clone(),offset:new ae(this.camera.view?.offsetX||0,this.camera.view?.offsetY||0),anchor:new ae((t.x+1)/2,(1-t.y)/2),velocity:this.cameraMotion?.velocity.clone()||new C,carVelocity:this.cameraMotion?.carVelocity?.clone()||new C,framing:this.framing}}applyCamera(e){e.carPosition&&this.car.position.copy(e.carPosition),this.camera.position.copy(e.position),this.cameraAim.copy(e.aim),e.quaternion?this.camera.quaternion.copy(e.quaternion):this.camera.lookAt(this.cameraAim),this.camera.setViewOffset(1920,1080,e.offset.x,e.offset.y,1920,1080),this.camera.updateMatrixWorld(!0)}stopCameraMotion(){let e=this.cameraMotion;e&&(cancelAnimationFrame(e.frame),this.cameraMotion=null,this.applyCamera(e.to),this.framing=e.to.framing,this.setResolution(...e.resolution))}finishCameraMotion(){let e=this.cameraMotion;e&&(this.applyCamera(e.to),this.framing=e.to.framing,this.stopCameraMotion(),this.renderFrame(),this.onCameraFrame?.(!1))}startCameraMotion(e){let t=this.captureCamera();if(e.position.distanceTo(t.position)<1e-5&&e.aim.distanceTo(t.aim)<1e-5&&e.offset.distanceTo(t.offset)<1e-5){this.renderFrame(),this.onCameraFrame?.(!1);return}let n={from:e,to:t,resolution:[this.width,this.height],frame:0,elapsed:0,last:0,velocity:e.velocity.clone(),carVelocity:e.carVelocity.clone()};this.cameraMotion=n;let i=e.carPosition.clone().add(new C(0,.85,0)),r=t.carPosition.clone().add(new C(0,.85,0)),a=i.clone(),o=new ns().setFromVector3(e.position.clone().sub(i)),c=new ns().setFromVector3(t.position.clone().sub(r));c.theta=o.theta+Math.atan2(Math.sin(c.theta-o.theta),Math.cos(c.theta-o.theta));let l=t.carPosition.clone().sub(e.carPosition),h=l.length(),u=["05","08"].includes(this.current)&&h>.01,d=l.z<0,f=Ru(h),{cruiseDuration:m,leadDuration:b,defaultLiftStart:g}=f,p=f.vehicleStopTime,x=u&&d?f.baseDuration:Math.max(.65,Math.min(2.6,h/15)),y=g,v=u&&d?f.duration:x,_=v-y,E=Math.min(1.6,p*.5),R=p-E,A=h/Math.max(.001,R+E*.5),S=re=>{let de=b,Te=.07,nt=y-de;if(re<y){let Ke=rt.clamp((re-nt)/de,0,1);return Te*Ke*Ke}else{let Ke=rt.clamp((re-y)/_,0,1),$e=9.5/_,q=Ke*_,K=1-Te,fe=2*Te/de,De=$e*K-fe,_e=(K+De*_)*Math.exp(-$e*_);return 1-(K+De*q)*Math.exp(-$e*q)+_e*Ke*Ke*(3-2*Ke)}},M=S(p);n.isJunctionApproach=u&&d,n.duration=(u&&d?p*.969:v)*1e3,n.liftDelay=(y-b)*.969,n.paused=!1;let I=Math.max(0,Math.min(2,e.carVelocity.dot(l)/Math.max(.001,h*h)*v)),L=t.position.clone().sub(e.position),F=Math.max(0,Math.min(8,e.velocity.dot(L)/Math.max(.001,L.lengthSq()))),z=13.8,N={position:new C,carPosition:new C,quaternion:new sn,aim:new C,offset:new ae},H=new zt().setFromObject(this.car),J=[];for(let re of[H.min.x,H.max.x])for(let de of[H.min.y,H.max.y])for(let Te of[H.min.z,H.max.z])J.push(new C(re,de,Te).sub(t.carPosition));this.applyCamera(e),this.framing=e.framing,this.renderFrame(),this.onCameraFrame?.(!0);let G=(re,de=0)=>{n.elapsed=re;let Te=n.elapsed/1e3/(u&&d?.969:1),nt=Math.exp(-z*Te),Ke=Math.min(1,Math.max(0,1+(-1+(F-z)*Te)*nt)),q=Math.min(1,Te/(u&&d?p:v));n.progress=q;let K=Math.max(0,Te-m),fe=rt.clamp(Te-R,0,E),De=Te>=p?h:Te<R?A*Te:A*R+A*fe-.5*A/E*fe*fe,_e=u?d?Math.min(1,De/Math.max(.001,h)):q*q*(3-2*q)+(q*q*q-2*q*q+q)*I:Ke;if(u?q>=1:1-Ke<8e-4)return this.applyCamera(t),this.framing=t.framing,this.renderFrame(!0),this.onCameraFrame?.(!0),!0;let Je=this.camera.position.clone(),Ft=this.car.position.clone();N.carPosition.lerpVectors(e.carPosition,t.carPosition,_e),a.copy(N.carPosition).add(new C(0,.85,0));let D=Ke;u&&d?D=rt.smootherstep(S(Te),0,M):u&&(D=_e),N.aim.lerpVectors(e.aim,t.aim,D),N.offset.lerpVectors(e.offset,t.offset,D),N.quaternion.slerpQuaternions(e.quaternion,t.quaternion,D);let ct=D;N.position.setFromSpherical(new ns(rt.lerp(o.radius,c.radius,ct),rt.lerp(o.phi,c.phi,D),rt.lerp(o.theta,c.theta,D))).add(a),this.applyCamera(N);let ke=ct,Le=a.clone().project(this.camera),ve=e.anchor.clone().lerp(t.anchor,ke);N.offset.x+=((Le.x+1)/2-ve.x)*1920,N.offset.y+=((1-Le.y)/2-ve.y)*1080,this.camera.setViewOffset(1920,1080,N.offset.x,N.offset.y,1920,1080),this.camera.updateMatrixWorld(!0),de&&(n.velocity.copy(this.camera.position).sub(Je).multiplyScalar(1e3/de),n.carVelocity.copy(this.car.position).sub(Ft).multiplyScalar(1e3/de));let lt=J.map(gt=>gt.clone().add(N.carPosition).project(this.camera)),me=lt.map(gt=>(gt.x+1)/2),Oe=lt.map(gt=>(1-gt.y)/2);return this.framing={...t.framing,vehicleFrame:{left:Math.min(...me),top:Math.min(...Oe),width:Math.max(...me)-Math.min(...me),height:Math.max(...Oe)-Math.min(...Oe),bottom:Math.max(...Oe)}},this.renderFrame(!0),this.onCameraFrame?.(!0),!1},se=re=>{if(this.cameraMotion!==n||n.paused)return;let de=n.last?Math.min(48,re-n.last):0;if(n.last=re,G(n.elapsed+de,de)){this.finishCameraMotion();return}n.frame=requestAnimationFrame(se)};n.sample=G,n.tick=se,n.frame=requestAnimationFrame(se)}setVehicle(e){this.roadCameraCache.clear(),this.finishLayoutMotion(),this.finishEnvironmentMotion(),this.stopCameraMotion();let t=this.car;e.position.copy(t.position),e.rotation.copy(t.rotation),t.removeFromParent(),this.egoContact.removeFromParent(),Th(t),Th(this.egoContact),this.car=e,this.scene.add(e),this.egoContact=Ah(e),this.scene.add(this.egoContact),this.vehicleNeedsFraming=!0;for(let[n,i]of this.sceneCache)pi.includes(i.fields.current)&&(this.disposeSceneRoot(i.fields.root),this.sceneCache.delete(n));pi.includes(this.current)&&(this.current=null)}setResolution(e,t){if(this.width===e&&this.height===t)return;this.width=e,this.height=t;let n=2048;this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.map?.dispose(),this.sun.shadow.mapPass?.dispose(),this.sun.shadow.map=null,this.sun.shadow.mapPass=null,this.sun.shadow.mapSize.set(n,n),this.renderer.shadowMap.needsUpdate=!0),this.renderer.setSize(e,t,!1),this.composer.setSize(e,t),this.mirror.getRenderTarget().setSize(Math.ceil(e/2),Math.ceil(t/2)),this.blurTargets.forEach(i=>i.setSize(Math.ceil(e/2),Math.ceil(t/2))),this.waterReflectionTarget.setSize(Math.ceil(e/2),Math.ceil(t/2)),this.vehicleDetail.uniforms.texel.value.set(1/e,1/t)}audit(){let e=this.car.position.clone().add(new C(0,.9,0)).project(this.camera),t=new zt().setFromObject(this.car),n=[];for(let d of[t.min.x,t.max.x])for(let f of[t.min.y,t.max.y])for(let m of[t.min.z,t.max.z])n.push(new C(d,f,m).project(this.camera));let i=this.vegetation.children.map(d=>{let f=d.position,m=this.lawns.find(b=>{let g=b.geometry.parameters;return Math.abs(f.x-b.position.x)<g.width/2-1&&Math.abs(f.z-b.position.z)<g.height/2-1});return{x:f.x,z:f.z,insideLawn:!!m}}),r=Math.min(...n.map(d=>d.x)),a=Math.max(...n.map(d=>d.x)),o=Math.min(...n.map(d=>d.y)),c=Math.max(...n.map(d=>d.y)),l=[],h=0;this.car.traverse(d=>{if(d.isMesh){d.name==="Object_39"&&h++;for(let f of Array.isArray(d.material)?d.material:[d.material])f.name==="glass"&&l.push({opacity:f.opacity,transparent:f.transparent,transmission:f.transmission||0,roughness:f.roughness,envMapIntensity:f.envMapIntensity})}});let u=["05","08"].includes(this.current)?[-1,1].flatMap(d=>[-28.9,-51.1].map(f=>{let m=new C(d*11.1,0,f).project(this.camera);return{x:(m.x+1)/2,y:(1-m.y)/2}})):null;return{...this.state,dividedRoad:this.dividedRoad,groundReflection:this.groundReflectionAudit,shadow:this.shadowFrameAudit,environmentGrowth:Object.fromEntries(Object.entries(this.environmentGrowth).map(([d,f])=>[d,f.value])),palette:this.palette,roadColor:this.mat.road.color.getHexString(),groundColor:this.mat.ground.color.getHexString(),lightIntensity:[this.hemi.intensity,this.sun.intensity,this.fill.intensity],framing:this.framing,environmentSignature:this.environmentSignature,glass:l,exhaustCount:h,contactPatches:this.egoContact.children.length,junctionFrame:u,vehicleSpec:this.car.userData.vehicleSpec,junctionDimensions:this.junctionDimensions,parkingReplica:this.parkingReplica,parkedVehicles:this.parkedVehicles||[],buildingOwnedCount:this.root.children.filter(d=>d.userData.buildingOwned).length,buildingShadowCasters:this.root.children.filter(d=>d.userData.buildingOwned&&d.castShadow).length,buildingVSMParticipants:this.root.children.filter(d=>d.userData.buildingOwned&&(d.castShadow||d.receiveShadow)).length,roadworkZone:this.roadworkZone,pedestrianPassages:this.pedestrianPassages,rampDimensions:this.rampDimensions,vehicleDimensions:t.getSize(new C).toArray(),vehicleBounds:{left:(r+1)/2,top:(1-c)/2,width:(a-r)/2,height:(c-o)/2,bottom:(1-o)/2},center:{x:(e.x+1)/2,y:(1-e.y)/2},roadElevation:this.car.position.y-.02,roadSlope:0,horizon:this.environmentTone.value?"shared smootherstep from 65m to 300m":"original material-specific smootherstep",treePlacements:i,buildingsPlaced:this.buildingPlacements,waterBounds:this.waterBounds,parkingBays:this.parkingBays,parkingColumns:this.parkingColumns.map(d=>d.position.toArray()),vehiclePhysicalLength:this.car.userData.vehicleSpec.length||4.85,geometry:this.current,geometrySignature:this.geometrySignature,camera:this.camera.position.toArray(),car:this.car.position.toArray()}}};var rr=[{key:"road",name:"Road",group:"open",layouts:[["02","Straight"],["09","Two lanes"]],buildings:!0,waterfront:!0,trees:!0,roadworks:!0},{key:"elevated",name:"Elevated road",group:"open",layouts:[["03","Elevated"]],buildings:!0,trees:!0},{key:"junction",name:"Junction",group:"open",layouts:[["05","Crossroads"],["08","T-junction"]],buildings:!0,trees:!0},{key:"ramp",name:"Ramp",group:"open",layouts:[["06","Exit"],["07","Merge"]]},{key:"parking",name:"Indoor parking",group:"closed",layouts:[["10","Aisle"],["14","Overhead"],["16","Aisle raised"]]},{key:"outdoor",name:"Outdoor parking",group:"closed",layouts:[["17","Default"],["18","Raised"],["19","Bird\u2019s-eye"]],buildings:!0,trees:!0}],Yf={"01":"02","04":"09",12:"02",13:"02",15:"10",11:"09"};var Kf=[{name:"Object_4",count:61334,indices:[32173,61087,61088,32171,32167,234,677,222,659,346,40384,40273,19239,40367,31784,31787,15721,31783,31781,2550,418,31775,2551,16010,16019,31750,31743,38798,38800,38814,12278,60139,12298,11941,11988,11943,12230,48956,31603,31601,61080,31868,32179,30543,32182,30325,30332,34325,30281,30319,17315,20838,17317,19241,19238,19163,19162,19246,31774,31520,31611,31609,658,236,296,408,348,661,660,413,414,1395,43766,40431,40419,40420,44068,44069,44067,42359,60759,42344,17187,19006,19010,60620,60639,38892,2597,2581,412,19673,19671,19515,19489,19516,19247,19503,19505,31786,31788,15717,15746,15743,15947,31865,31863,31870,31867,16012,31742,31764,31605,31608,31606,19717,19712,31528,31531,31524,31792,31821,16005,11972,11966,38589,38577,38574,38578,11924,11949,11958,38815,38672,49182,38603,38714,47265,12279,50961,47372,51034,47377,13044,13021,60280,9633,10032,9732,49021,12277,51033,12276,27113,30971,27114,17319,20864,24452,27281,24464,24462,24564,24807,23662,24523,24522,24921,33295,32361,30510,32323,32321,61091,32371,61081,31820,61092,31798,32372,29977,32412,32380,19664,19669,18688,61083,31600,31607,32201,32094,32164,32140,20841,30544,30550,30549,30548,30557,18694,18697,18691,18695,18696,18977,19483,19487,18715,18714,18965,19264,19257,734,19260,20078,727,19256,19243,19083,19084,19089,19236,19155,19165,19166,19090,292,417,416,294,293,31773,31772,31862,31864,31519,31518,31869,31521,31517,235,221,295,409,714,1692,1694,39545,39530,39546,40400,40359,40358,44060,44062,44059,44058,44092,43769,44169,43758,43779,43780,44071,43778,44072,44061,39528,60758,60777,42345,60761,18713,19008,19491,19492,17131,60778,60757,42429,42356,42427,42358,42349,42348,60720,60845,60648,60739,60727,16606,1394,1393,1021,1400,1369,1372,1370,1373,15739,15742,31361,31677,31668,31678,19667,33681,31586,31587,19497,19498,19785,19691,19679,19698,19767,31612,19763,19500,19499,19508,19502,19501,19504,19161,19159,15723,15731,15558,15726,2599,2600,31782,31759,31752,31760,31763,31604,31498,20051,31859,31790,31857,31858,31780,31762,31789,31855,31791,31823,15716,15732,15981,46087,46088,46401,49328,51878,49269,38593,49036,11967,11948,38604,49285,42578,38824,42585,7023,7885,7536,60303,60298,60306,60289,15954,15764,15965,11960,11950,11956,49019,49020,12233,12270,12234,12271,23156,47396,51037,12273,22832,22840,23616,22821,22824,22823,12236,12240,12594,12241,12580,12579,23043,23042,12576,27388,27389,27390,27287,29678,29674,27336,30962,27306,24475,24477,24476,24317,24319,27136,24316,30977,30410,30420,30430,30409,21028,17323,17321,21858,20414,24579,24578,24465,24580,27164,27160,24276,24472,27166,24468,27279,24469,24586,24470,27167,24463,24525,25144,21362,25247,21356,21360,24364,24410,25238,24488,25236,25240,25227,24479,24492,24366,24358,24361,27391,23408,24623,23407,31695,31696,31671,61085,31971,31994,31953,29752,31095,29733,27457,27459,29758,27460,29760,27499,31104,29761,29943,32366,30003,29971,29970,29969,14215,14201,31599,31595,31575,31800,19676,34309,32193,32134,19840,20769,20772,20771,20776,17942,20913,20914,30545,30542,30313,30407,30329,30334,30331,19688,18682,18699,18679,18698,18711,18966,17274,676,675,698,20048,20105,20055,19242,19237,19244,19255,19073,19072,19074,19088,19092,19081,19158,19082,415,1392,2207,2205,2525,1386,1389,31866,31860,31872,31511,31516,31871,31522,343,342,347,40399,40398,40422,40362,710,712,40372,40369,40364,40383,40370,40421,40459,40396,40460,40462,44066,44056,44064,44515,44063,43798,44042,43799,43796,44041,44044,57751,44040,44079,44070,44076,43771,43777,43773,39490,39491,39622,39615,39617,18974,18973,18969,18968,18712,18978,19007,17199,17198,17190,17184,17191,17189,18983,19168,19153,19235,19231,39623,39667,19230,36690,36355,19078,19075,36356,36261,36264,17085,16927,60779,16901,42399,60780,43759,43687,43661,43686,42354,42613,42468,42357,20478,20171,60729,60738,60737,60721,20202,2596,2595,1363,410,1397,1004,1003,1396,2576,2577,2583,15906,9629,15968,15740,15752,15295,15725,15678,15691,31667,15559,15557,15563,15561,15560,15556,15555,15375,29982,15036,13913,13693,13670,13655,14003,14005,14252,13656,13668,13657,33683,19496,18980,19488,19686,19690,19771,31613,31610,19495,19494,19715,15744,15948,15736,31861,31777,31776,31778,1387,1385,31751,31602,19705,19510,19735,19509,31512,31514,31499,31500,31525,31526,31854,31761,31793,15708,31794,15710,31795,15705,45903,38584,38590,49275,51920,49277,51918,51916,43943,55257,44248,44263,57598,52020,52019,52017,52022,52031,46560,50068,46561,46582,46581,52025,52030,38797,38794,38823,38822,38816,38579,23040,6924,13081,7539,46895,46882,7458,46915,46916,46909,51044,60295,13064,13055,60116,23138,22024,22089,16336,16288,16287,46919,13553,13568,15959,4518,15962,4512,4514,15760,15258,15251,15289,15749,15750,15933,15963,15925,15927,49018,49016,48964,48966,47411,49029,49102,11945,11955,11953,47397,12272,23539,23744,23543,22758,22759,22825,22833,22768,22700,22699,22723,22698,12269,12564,12238,12592,12582,12810,23044,17061,17135,17057,17182,17177,17183,17170,20739,20738,17169,20737,20684,20674,20675,20683,27692,27656,27552,27657,29755,27379,27378,27293,29734,30445,30449,30454,27119,27118,27120,24320,24318,27156,27157,30494,30539,30493,30429,30421,30427,30553,29670,30432,27109,27116,27089,24284,27124,27117,27087,29660,27085,30422,20910,20388,20734,20386,30248,30247,20420,24743,24413,24515,24919,24517,24581,24583,24512,24466,24467,24450,24524,24526,24502,24933,24505,24501,24507,20429,20428,21354,20418,20419,24329,24327,24326,21357,24876,21009,25256,29654,21008,29653,24489,24322,24323,24315,24399,24408,25254,24388,24394,25078,24511,24493,25223,24485,25219,25217,24380,24370,24379,24385,24373,24367,24621,24620,24805,24619,24797,23404,24563,24565,24616,24632,27405,27393,24630,24527,24534,24541,24536,24533,22841,29889,23745,23922,23923,23904,23918,27548,27503,23383,23394,23395,24422,23671,23316,23361,23356,23357,31669,61084,31589,31588,33679,31593,31700,31675,31672,31699,32370,32377,32404,15521,31959,15512,31952,27458,30008,30009,29949,29950,29948,29939,30016,30015,30006,30007,29957,29823,29825,29866,29899,29898,29900,29972,14199,29908,29893,29848,29851,29886,31152,29867,29873,29872,29874,29876,29877,31594,31797,31799,31701,31819,19814,32120,32105,19795,32080,19797,32082,30270,30241,30631,30242,17333,17335,32121,32093,20555,20673,20554,20543,20165,20322,20506,20527,60713,25745,17146,20768,20409,20889,20888,20886,20865,20863,17034,20895,30541,30540,30406,30405,30408,30311,30327,30315,30328,17176,17174,19682,19484,17405,17402,17403,18702,18701,18700,18708,18678,19796,18710,18687,17313,17311,17149,17385,17367,17384,17368,17362,17369,17371,17378,17377,18487,671,711,700,697,696,19258,19254,19252,19167,19164,19080,19154,19157,19079,1375,1374,1367,2544,2206,1388,1390,1368,1365,1366,2511,2513,2512,31515,31513,31873,1145,668,667,40360,708,707,40363,40373,40376,39531,39534,39539,40453,40371,40368,40457,39535,40430,43791,43786,43794,43797,43793,44093,44095,44096,44514,44527,44526,44528,44114,59458,44511,57682,44065,44057,44043,44039,43789,42696,43788,44078,44077,44080,44075,44168,44074,44073,40402,43781,50127,46580,50128,50126,50069,50066,46064,46065,50070,50072,50125,39488,39525,39550,39526,43775,43774,43677,43768,42410,42362,42407,39527,39547,39597,39598,39596,39610,39549,39594,39624,42413,39666,18975,18976,17208,17209,17219,17220,19009,17188,18716,17276,17275,17297,19234,39614,19085,19086,19087,19049,19048,19052,19094,19150,19169,16894,39656,16924,16923,16925,17185,60630,60734,60631,60782,60781,16922,42574,42573,42611,39495,39493,43719,43662,43776,43760,39551,42426,39593,39552,60736,20638,60745,20559,20585,20676,20473,20166,20504,20544,54301,54300,46301,3954,2827,15902,2828,15905,2593,2835,2594,2603,2604,2836,2745,3800,3801,3794,3795,3787,15928,1017,1018,2582,15252,15751,15755,15754,15294,15296,15669,15696,15688,15697,31673,16364,15228,15227,16333,15570,15568,15684,15728,15700,15727,15972,15299,15300,13022,16281,13589,16285,14178,14185,14195,14205,14184,31970,32638,31967,31963,13717,13731,13715,15333,14171,14182,14167,14168,14172,15365,14202,22921,22679,14254,13666,13669,13672,13677,13678,13712,13692,13711,13723,14103,13714,13707,13667,13652,13593,13653,33680,19490,20094,19248,19493,19160,15718,15753,31856,2196,2195,2624,2726,2611,19513,19706,19700,31503,31502,31523,15984,31822,1371,1362,2137,47880,47927,1916,46077,1913,1921,45897,45898,1926,46086,46632,46089,46204,46397,52003,46417,52002,46293,46365,46288,51922,51928,51933,51927,51936,51942,51932,51930,51977,51975,51935,51761,2053,48115,48116,48096,51762,49459,45237,50310,49347,49363,38580,38586,49271,51883,51915,44375,44371,44374,44373,44370,44399,44372,44389,49209,44383,44396,44414,44397,44401,44413,44393,44394,44377,44009,44010,38818,55266,43951,43938,44344,44345,44313,57697,44240,44249,44352,51978,51979,52010,52016,50067,52027,52026,51912,51910,51867,50374,51894,49456,49457,50353,50373,44461,59470,44479,44478,44272,44458,44253,44270,44252,44239,44489,44700,44490,44699,44021,44020,43908,44361,44362,44343,44314,44315,44701,44718,44285,44309,44293,44294,44291,44363,44398,44409,44403,44408,44297,44298,44299,38817,43994,43995,43985,43993,43948,43986,43950,43952,43959,43942,43987,7607,7608,7621,7620,7610,7616,7636,7658,4546,6916,60496,60085,7022,7524,46906,46904,7424,7408,7427,7426,7388,7395,7391,47408,47407,47402,47395,13012,13036,13039,13038,13e3,13019,13651,22602,22646,13063,13563,60274,22101,22104,22023,22035,13059,13587,13042,13586,16337,16335,16373,16334,16372,13060,13061,13584,16341,16343,47888,47625,47626,13083,13554,13562,15924,3803,15290,15291,15758,15748,15937,16698,15936,15932,15964,48967,47410,49028,11947,11957,47379,23663,23166,23618,23619,22315,22311,22628,23544,23541,23547,23558,22829,22770,22725,12561,12243,12245,23155,22086,17060,17136,17047,17168,17167,17180,17173,17164,17148,17171,17166,17172,20668,20672,20686,20556,20538,20558,20537,20539,20588,20586,20699,20700,20697,20733,29769,29932,29937,30468,30464,27387,27383,27381,27382,27386,27392,24574,24575,24552,27376,27380,30455,30485,30452,30955,30456,30954,29730,30448,30489,30490,30561,30488,30554,30552,30535,30499,30501,27359,27304,27121,27305,24478,24321,24282,24281,27123,27155,27154,30965,29675,30982,30431,30551,29662,27091,29663,27115,30419,20909,17356,18672,18483,17355,30680,20392,24521,24513,24570,24613,24549,24576,24585,24584,27301,27300,27299,24504,24471,24588,24589,24473,25242,24483,24481,24510,24508,21353,21011,29600,21019,20430,55809,24351,24342,24352,24343,25193,27077,27084,27076,24288,24287,24290,27088,27065,27063,24294,24312,24330,24311,24324,24314,25205,25197,21349,24297,21361,24350,24345,24299,21344,24292,24875,21005,21004,29652,27069,27070,29651,27086,24325,24309,24307,24310,24503,25244,24500,24480,24382,24371,24372,24377,23406,24614,24615,24528,24530,24535,24538,24908,23749,29861,23548,23400,23386,23409,27553,27456,23412,23336,23339,23347,23351,23314,23335,23359,27708,27707,27690,27709,31676,31674,15539,15533,15366,29947,30472,30011,29951,29935,30004,30005,29958,23925,29964,29925,29927,29929,29818,29871,15501,31992,15507,15656,15377,31147,29910,29907,29904,29894,31090,29864,19811,19812,18674,18675,32133,30257,30269,30632,17359,30252,30268,30282,30267,30261,30250,30244,32166,60740,20321,20201,60942,38699,38697,38936,25742,38935,20298,20169,20295,20170,20287,20290,17143,20736,20775,20887,30404,30326,30314,17334,17360,17363,17218,17175,17163,17162,17160,18671,18707,17408,18683,18709,17365,17366,670,701,672,19251,19245,19151,19156,19091,2543,2625,2530,1325,1024,1364,1344,1343,1323,2495,2502,2501,2610,378,407,662,340,338,339,1142,1131,1130,666,351,337,664,350,1123,1128,1122,1118,1117,40374,40361,40375,40379,40458,39541,39529,40447,42694,43751,43792,43787,44512,44113,44116,57773,44046,44510,44037,43795,42748,44150,44167,43772,1135,1442,44133,43755,43722,43756,43782,45971,46042,44579,50456,46038,50457,50433,50452,50451,50453,46040,50450,46593,50459,46589,46588,46587,46069,46563,50073,46072,50071,46071,39487,39492,43761,43765,43679,42412,42408,39548,39595,39647,39657,18967,17221,18979,17223,17222,17300,17418,17397,17398,17399,17417,19233,19232,19077,19053,19051,19050,19093,19170,19172,19152,16926,17132,17181,17186,17067,60783,60735,60756,17086,17087,17088,16930,17066,16929,42612,43647,43663,43648,43644,43650,39522,43649,39524,43675,43718,43717,43720,43721,43664,43685,43660,60622,20552,20545,20551,20678,20505,20553,20477,46312,46313,46317,54314,54303,2830,2748,3929,2584,2741,3930,3931,2732,2607,2729,2602,3932,3793,3792,3785,3786,15926,1315,1316,1016,1015,1014,1006,47881,2124,47879,2134,47936,47875,47878,47876,3784,3788,3868,3940,3944,47617,3883,47614,1675,47886,47892,3899,47624,3933,3909,9628,16376,16370,15562,15578,15554,15553,15304,15305,15552,15326,15323,15230,15293,15257,15297,15255,15256,15535,15666,15701,31702,16374,15301,15677,15682,15567,15730,15733,15565,15298,13595,13596,13674,13675,14194,14196,14186,14180,14176,31955,31993,32405,15655,31969,13790,15336,14110,15332,14206,14183,14165,15368,15363,15362,15355,15367,15351,15350,14257,14259,14209,14666,13998,14018,14247,13694,13671,13654,13594,13691,13696,13709,16327,13689,13690,13697,13679,16293,13698,13695,13662,31583,19693,31580,31527,19741,15999,31779,1384,1381,2614,2613,2622,2623,2601,2612,19697,19775,19729,19708,31501,2102,2136,2172,2173,2174,2176,1988,1983,1984,1985,1289,1910,1911,45902,47935,48094,51729,51750,46316,46314,46320,45904,45905,46093,46635,46633,46429,50124,52004,52007,52009,52008,46432,46412,46431,46415,51716,51726,51728,46382,46395,51833,51837,53238,51925,51923,51929,51931,51937,51974,51934,51976,51708,46209,46210,51707,51753,51701,2029,51698,55214,49254,49313,49462,49453,44497,44714,44712,44476,44747,44735,44737,44740,44745,44659,44660,44529,45221,49230,49229,44333,44732,49225,49223,49358,49353,49350,49211,44387,49241,49284,38575,49194,38581,51913,51909,51919,52024,52023,44018,44369,44395,44391,44342,49207,44415,43935,44261,44259,44264,44267,44266,44257,44250,44251,44258,44355,44356,44354,44353,44245,57771,51903,51902,51901,46626,51885,51906,51908,51907,51884,49455,44669,44743,44505,59441,57680,44457,44463,44483,44477,44664,44471,44278,44466,44493,44487,44468,44023,43907,44024,44022,44705,44706,44287,44310,44311,44280,44279,44289,44268,44312,44368,44295,44410,44339,44365,44366,43947,43983,43971,42607,42604,23157,7643,7586,7644,7642,7641,7609,7592,7509,7543,4517,6970,6923,60314,6918,60315,60304,60090,7538,7525,7026,7540,7075,7548,7590,47268,47371,47381,47374,47375,47275,47363,7422,46902,7447,7453,7448,7455,7434,7595,7508,7485,7484,47893,47622,46910,46908,46907,46911,46893,47420,22567,13029,13037,13013,13590,13592,13016,12989,13018,22451,22473,22510,22511,22697,22645,13056,60154,60279,60126,60123,60121,13043,13588,16340,13058,16371,46971,46962,46970,7634,46972,47664,47668,47666,47665,4486,4497,5867,4483,4504,4499,3802,15761,15762,15757,15763,15941,15929,15940,15944,15952,15759,48962,47416,47384,47376,23591,23612,23613,25277,25366,25369,23603,23273,25515,25514,56146,23605,25379,23611,25377,25373,23651,25358,25359,23614,23679,23546,23673,23676,23560,22772,22771,25287,25105,22290,22289,22288,22291,25296,22253,22321,22319,25278,25276,25286,25356,25363,25285,25280,25364,25362,12235,12574,12589,12571,12244,12588,12800,20595,20598,20599,20645,17051,17056,17055,17058,17002,17007,17048,17059,17157,17970,17165,17951,17155,17145,17179,20665,20698,20590,20541,20557,20687,20701,20358,20385,20677,20682,20691,20685,31073,29768,30470,31105,27375,27384,27373,27291,24577,27352,27351,27346,27347,27353,27345,27344,30486,30487,30444,30441,30500,30498,30497,30556,30558,30536,30953,29683,27370,27369,27368,29687,29684,27158,27337,27303,27122,30496,30969,30538,29661,30424,27090,30310,30308,20923,17373,20462,26174,24414,21366,26074,26076,24395,20415,55817,56288,24518,24519,24568,24560,24907,24542,24572,24573,24612,24460,24548,24550,24582,27341,27340,27297,27296,27343,27280,27282,27295,24587,24590,24474,25245,21342,21346,29587,30598,21018,30597,56292,24355,25142,24344,27078,24313,24300,24331,24302,24328,25203,24346,24332,21003,21258,24873,24874,21345,21350,24347,21347,21348,27074,25221,24285,24286,24308,24306,24625,24626,31084,23751,23747,23748,23402,23387,23385,23411,27500,27555,27406,27502,23318,23319,23313,23333,23342,23343,23360,27659,27691,15546,15545,15550,15354,15538,29942,30010,30012,30013,29931,29936,29934,30014,23924,29903,29919,29902,29896,29920,29901,29897,29822,29926,29878,29868,32406,29993,14233,29879,29895,29881,29890,29906,29978,29917,31088,31796,19813,32132,30238,30259,30318,30317,30418,29658,30414,30266,30265,30245,20690,20692,20531,20533,20323,20307,38691,20303,20294,20299,20280,20283,20735,20774,20894,30316,30303,30304,30330,30307,17211,17214,17305,17407,17400,18680,17386,17387,17380,17381,17382,17406,17383,17364,17394,17388,17391,17396,17307,17389,17302,669,709,674,19249,1872,1324,1342,1321,2132,2155,2493,2496,2503,2504,1346,1348,1347,304,308,379,310,377,375,381,372,373,383,663,349,1144,1146,40401,1158,352,665,1129,40397,39489,39533,40452,43754,43784,42692,42695,42693,42690,44115,44520,44112,44038,44244,44035,42642,42634,42635,44034,43800,43861,42698,43802,42746,42699,44132,44081,43723,43783,1176,1170,50444,50458,50454,46039,50434,50418,39616,18981,18982,39611,19175,19174,19076,19149,16903,16906,16937,17133,17062,17053,17052,60746,60625,17089,16935,16931,42636,42705,42710,42628,42616,42617,42631,42626,42625,42622,42706,43646,39500,39501,43764,43681,43682,43668,43666,39498,39523,43757,43684,43688,42432,42646,42462,42460,42464,42759,42769,20528,20503,20502,46308,51799,51787,46291,2829,15908,15930,3975,4151,4163,3796,3797,4162,3952,2609,2608,2605,4498,4501,1313,1314,47669,47675,47670,47695,47696,47694,5248,3869,3845,46785,46795,3950,3953,3853,3864,3948,3949,3945,3936,3879,3880,47906,47891,47887,13585,15325,15292,15253,15971,15699,15694,16328,15302,16326,16294,13687,15675,15672,15685,15974,15229,13591,16289,16394,31028,29913,14197,14200,29914,14108,14109,13730,14162,14163,14161,14262,14263,14270,13996,14204,14208,14164,14158,15335,14157,14156,13718,13729,22724,14246,14007,14008,14021,13673,13685,13680,13710,13708,13720,13722,13721,13727,31579,31581,31582,34588,2619,2524,2620,19696,31577,31574,2170,2088,2171,1349,2087,2177,1990,1991,1993,1379,1378,1377,1376,46076,50076,50075,1909,46289,46321,46319,46085,46107,46422,46425,46421,46420,46419,50077,50078,46634,46106,50123,50074,46074,52013,46083,46082,1917,46081,46398,46396,46411,46410,46315,51727,51751,46206,51984,51970,46403,46407,52012,52014,51924,51973,51940,51938,51943,51944,51981,46367,51705,51706,2056,2055,51754,51700,1940,55208,55209,43968,44008,44379,43998,43976,55212,43974,43966,49193,49266,49258,49260,49255,49248,49331,50318,50337,50419,50317,50308,50319,50336,49461,49376,49375,44744,44741,44727,44326,44325,45222,50324,45226,45220,49232,49239,49238,49341,49339,49237,49235,50302,50323,44433,44434,44337,44418,44417,49357,49332,49360,38582,49295,38576,51911,51917,52015,51921,44011,44017,44013,43991,44390,44380,42586,55255,44262,44346,44025,44347,44351,44349,44350,44265,44260,46627,51900,52028,51904,52029,46424,46631,46620,46583,46584,46559,46585,50420,46614,46615,46623,51862,49454,51905,51895,44670,44668,44662,44504,57594,44665,44464,44255,44269,44475,44491,44492,44469,43890,43909,42601,43989,43988,43920,42603,44014,44015,43910,44494,44704,44715,44275,44292,44306,44307,44364,44405,44301,44404,44400,44402,44340,43955,43957,43962,42609,22080,7612,7594,7690,4547,4549,6919,6973,7585,7384,7042,7474,7482,7473,7587,47261,47257,47369,47247,47246,47213,47212,53239,48831,46300,7421,7423,7445,7435,7469,7486,7471,7472,46891,46886,46885,46887,46873,46884,46903,46892,46894,13015,13014,22495,22457,16282,22512,22566,12999,22455,22458,22459,22467,22619,22623,22618,22603,22604,22605,22607,22620,22606,22622,22515,22476,22475,22514,22472,22474,13658,13062,22516,22563,60240,60243,22477,22517,60277,60291,60271,22470,60276,25310,22272,25307,25299,25298,13057,46914,46913,46923,46938,7635,46888,47697,47698,47667,47632,47630,47629,47628,54470,54469,54461,47709,47687,47678,47686,47638,47637,47086,47672,47662,46815,46862,46813,46860,7035,46864,46790,46793,46812,47621,47620,47612,4487,4488,4496,4491,4506,4503,4502,15943,15756,15907,15938,15939,15945,4495,46818,7044,7043,47362,47383,23592,25380,25273,25267,25266,23170,25511,25087,23661,23240,23172,23269,23554,25270,55997,55992,55991,23650,22643,25378,25353,56153,56142,25289,25291,25283,25281,25365,25375,12247,20594,20593,20653,20657,21570,17e3,17001,17006,17017,17154,17153,17178,20664,20667,20591,20592,20669,20671,20589,20732,20731,20696,20693,20694,20689,20702,29765,27372,27374,27292,27348,27377,30484,30442,30474,30480,30479,30476,30459,30477,30478,30482,30555,29681,29689,27357,27356,27159,27338,27302,27283,27284,27165,27298,30491,30537,30434,30495,30312,30309,30413,17370,17357,20389,20390,20384,24407,56089,21364,20436,55887,55815,30305,30286,30262,30287,30295,29655,30605,30289,24537,24558,24569,24911,24545,24547,27286,27285,27294,24482,24498,21355,29601,21025,55811,24341,27068,24301,24305,25211,25209,24333,24338,24298,24624,23750,23403,23384,27554,23410,23393,24793,23391,23329,23332,23320,23322,23321,23307,24781,23345,23355,27689,27683,23341,23346,27687,15674,15572,15574,15579,15576,15551,15364,15352,31069,30509,30508,30506,30527,30528,29930,29956,29924,29922,29955,29954,29967,29966,29965,29963,29870,29992,29991,31093,29880,29979,29980,29911,29905,30256,30255,30300,30251,30285,20316,20680,20343,20712,20681,60843,20530,38808,38801,20371,25138,20373,20374,25093,38695,20206,20279,20261,20237,17210,17303,17216,17401,17395,17299,17390,17393,17298,17301,17309,693,695,1868,1019,2117,2121,2156,2133,2123,2494,2131,3910,2497,2499,2027,1954,1361,1360,1969,2094,2058,1971,50432,354,355,353,411,987,380,374,382,1152,1132,1126,356,42539,42538,42455,43785,42770,42686,42684,44521,44097,44111,43860,44036,43801,44084,44083,44134,44129,44087,44085,44086,44131,44082,44098,1127,1115,45322,46045,50404,50405,50455,46621,46625,45960,45961,46066,46067,46068,19173,16938,16928,17063,17134,17054,16934,42651,42652,42663,42682,42683,42700,42615,42645,42727,42726,42707,43645,43763,42526,42764,42465,42528,42463,42458,42655,42653,42533,42459,51800,46330,46299,46328,51790,51820,51816,51822,54313,54312,54311,48516,48588,48391,48513,48514,47874,47871,54335,3959,3799,2606,3946,3907,3935,3934,4500,5746,47676,47693,47671,47700,47890,3783,3789,46796,46809,46807,46810,3951,3844,3843,3850,3863,3884,46865,46875,46868,15324,15306,15303,15724,15254,15703,16329,29981,14107,14106,14242,14241,14260,14256,14203,14207,15334,14155,14240,14239,14248,14105,13719,22760,13676,16290,13713,31578,2526,2480,31576,2489,2490,2160,2162,2158,2157,2050,2100,2101,2135,2179,2169,1992,2080,1383,1308,1307,46073,46075,45901,46290,46427,46430,52006,46095,46084,46096,46402,46413,52e3,51704,51832,46391,46390,51827,46392,51926,52011,51983,51988,46383,51722,51752,46384,51763,49179,49203,49250,49188,44378,49187,49171,49168,49169,43972,49173,49184,49200,49252,50309,50304,49343,49344,44716,44720,44742,44724,44722,44723,45224,44731,49231,49227,49342,44332,44334,49224,44427,44423,44421,49215,49354,49333,49247,49222,49243,49219,44426,49218,49336,49335,44411,44420,44425,44435,44412,38583,51914,44012,44019,43990,45090,44026,44360,44348,51898,46630,46617,50315,50421,50314,50312,51896,51872,51879,51882,44667,44666,44663,44522,59474,44502,44256,44488,44474,42720,43911,43937,55275,43926,42590,42608,44016,44702,44276,44308,44341,44288,44300,43944,43956,43969,7657,7611,6975,6971,7019,7018,7555,7383,7432,7041,7040,7078,7028,7589,7531,7534,47368,47355,47280,47279,47214,47245,47271,47274,47248,47365,47276,47281,47356,49098,49081,49099,49012,48995,48987,48914,48880,48833,54304,51840,46292,7468,46874,13028,22490,22491,22492,22509,22507,22513,22615,22614,22610,22621,22565,22644,22486,22562,22484,22478,22407,22479,60246,22609,22561,22409,22410,22471,25301,25316,22270,22267,22269,22287,22285,46922,46980,46979,46978,46986,46981,46918,46921,46994,59772,46961,7678,47255,7906,7557,47250,47249,7584,7559,7652,46983,46984,47634,46890,47636,47631,46889,47627,46872,46870,54454,54453,47867,47688,47720,47721,47661,47674,47635,47673,47681,46817,46789,46816,46788,46787,46794,47619,4513,15953,15942,15931,15946,4490,5747,7045,7066,7065,47413,48949,48948,48947,48946,47391,47388,47360,47358,47382,47278,25372,23607,23589,25097,25079,23241,23173,25513,25271,25354,22298,25351,56333,23309,23303,23308,23301,23666,23300,56182,56138,23567,23298,56345,56144,23555,23559,25361,12590,20639,20603,20640,20641,17005,17003,20744,20670,20710,20705,20349,20340,20331,20348,20351,20356,21512,20688,20695,20703,27354,30437,30473,30505,30460,30463,30483,30559,27355,27358,30435,30492,30411,30412,17361,17358,20444,20383,20445,20448,55838,56478,56091,30264,30288,30263,24561,24559,24554,24567,24544,24546,24296,23399,23389,23388,23344,27501,23325,24780,24789,23334,23326,23311,23338,15665,15671,15673,15577,15353,30565,30566,30567,30563,29771,29959,29952,29953,29921,29968,30232,30235,30236,30254,30673,30302,30299,30260,30284,30306,20330,20344,20717,25128,20292,20311,20313,20679,38689,25106,25137,20370,20378,20381,20360,24416,24417,38803,38679,38802,25831,25741,25724,20217,25728,25765,20258,17392,673,2175,2192,2193,2477,2194,2476,2191,1865,2154,2514,2125,2724,2057,1902,1201,1300,1930,1945,1306,1896,2086,1345,1355,1354,1350,1358,2065,2093,2166,2163,2164,994,996,995,1010,997,990,336,1245,1064,1259,44107,44105,44126,50470,50486,50335,1120,1121,1119,321,323,341,369,370,306,307,1002,1001,1140,357,42536,43753,42660,42697,44102,44089,44100,44099,44117,42742,43790,44130,44090,1125,1111,44612,44573,1088,1089,1169,45970,45638,50416,50435,50403,46622,16932,17065,17064,42649,42662,42701,42679,42671,42680,43863,43683,43762,42527,42765,42766,42467,42431,42535,42444,42767,42530,42761,42760,42532,54265,54254,54266,54253,51807,46333,46331,54302,46298,46303,46389,46307,46334,51817,51821,46336,46335,54324,54325,48511,54308,48839,48849,48844,47704,47868,47703,47873,54451,54452,47937,47872,3882,3947,1037,1032,1045,47677,47699,47701,3790,3791,47613,46811,3900,46880,7692,46863,46866,46876,46877,15307,16325,29990,14261,14210,14166,14243,14245,13728,2479,2198,2182,2159,2097,2099,2141,2051,2153,2081,2082,1986,2178,2185,2079,2090,1353,1265,1076,976,1258,1257,1198,1197,1933,1907,1906,1296,1189,1191,1281,45899,45900,46428,46416,46094,46099,46098,46100,46101,46080,46097,46105,46409,51980,46205,51691,51841,51823,51835,51990,46394,51982,51996,46406,51998,51999,51723,51725,51721,51724,46385,2054,49206,44002,49166,44392,49189,49170,49175,49185,49249,50288,49346,44108,50321,50305,50322,49348,44726,44431,49214,49244,49245,49359,49334,49221,44419,43992,46618,46616,50493,50422,50427,50372,50311,50285,46594,46613,50414,50415,51873,51886,50423,50424,44525,44506,42718,43925,43918,42588,44273,44367,44316,43954,7677,7691,7379,7068,6974,7556,7689,7036,7021,47203,47176,47211,47175,7680,7579,47204,47367,47273,47282,47242,49064,49063,47354,47159,49014,49005,49004,48972,48843,48505,48808,46883,22489,22494,22508,22564,22551,22611,22624,22408,22559,22617,22608,22326,22324,22325,60244,22281,22209,22221,22274,22220,22219,60230,60157,60245,60252,22019,22037,22069,22051,22072,22071,22265,23024,25300,25312,22223,22279,22250,46977,46975,46976,46995,59398,46996,59152,46973,7659,7653,47272,47210,7645,46982,46917,46985,47889,47633,47705,47691,54471,47685,47682,47658,47659,47683,47655,47656,47737,47730,47652,47739,48322,48323,59819,47663,4493,7033,7017,7046,48963,47417,47386,47361,47380,23590,25099,25090,26172,25096,20451,25084,23248,23272,23271,23270,26071,26072,23277,56003,56008,22293,56148,23562,23287,23289,23292,23294,23279,23297,23281,23664,23280,56141,55982,23564,22252,20604,20644,20643,20601,20662,20663,20642,20745,20711,20362,20336,20352,20704,30475,30481,30503,30502,30533,27342,27371,27339,20391,20395,20396,56276,26171,55832,56479,56447,56449,55889,56503,20463,20453,30290,24571,24566,24553,24555,24551,24303,23401,23390,23397,24787,15544,30564,30560,29960,29923,29962,29961,30635,20335,25135,20363,20315,20317,20326,20319,20713,20345,20312,25130,20308,20550,20546,38683,38805,38807,38809,38806,25136,20382,20375,20376,38706,38947,38694,20208,25797,20210,20224,20259,25740,20220,1382,1341,1340,1870,1869,1022,2510,2505,2509,2506,2492,2491,2126,2129,2721,1901,1932,1898,1897,1935,1951,1950,1937,1949,1302,1253,1305,1254,2083,1057,1309,1058,1252,1059,1311,1357,2140,2147,2146,2089,2165,2180,384,404,403,399,991,982,983,992,993,981,1065,1063,332,330,335,363,334,1167,1194,50320,361,359,358,1086,1098,1100,1085,365,327,367,371,385,311,312,313,326,325,324,331,309,1034,1027,1007,1012,1005,406,988,985,1e3,1143,1099,42457,44530,44532,44118,44110,44103,44091,1134,1124,1294,46063,45965,45645,44567,44574,1087,50417,50402,16933,42732,42735,42673,42644,43665,42762,42763,42461,54252,46332,51805,51801,54264,46302,46306,48882,54449,54334,47869,1053,1891,1050,1042,47689,47679,47702,46792,46791,3908,46861,46869,46871,14244,14100,2199,2152,2143,2052,2149,2161,2150,2138,2151,1987,2186,1972,1351,1196,1193,1904,1899,51702,54262,51991,51989,51995,46200,46366,44381,49167,44001,49190,44119,49246,46586,50368,50360,50342,50343,50355,50361,50383,50316,50384,50386,44524,44661,43921,43917,44290,7654,7380,47243,47244,47216,47215,47283,49065,49066,47343,48932,47314,47327,47239,47240,47285,47145,47105,47103,47116,59273,7679,46968,48321,48325,47741,47736,48366,48365,48357,49008,49083,48978,48977,48986,48983,48856,48854,48837,48830,22493,22612,22633,22630,22613,22555,22629,22616,22518,22558,22282,22523,22329,22197,22336,22184,22258,22280,22106,60163,60218,22264,22065,22262,22068,23026,25304,22224,46920,46974,59150,59764,7580,7569,47209,7648,47706,47680,47684,48586,48396,48381,48393,48326,48329,47732,47743,47725,47657,47660,47654,47653,7034,7030,48973,47359,47351,47277,25102,20449,25095,23243,25505,23276,23282,22295,24428,23286,23304,23295,56364,55989,20666,20366,20357,30504,30568,30531,30529,20443,20455,55852,56506,20458,30291,23398,23396,30534,20332,20341,21453,20723,20346,38686,25109,20204,20276,25743,20288,25120,25115,25118,25122,1380,1867,1864,2508,2487,2515,2485,2486,2507,2488,2122,2725,1895,1952,1946,1953,1928,1304,1303,1255,2085,2084,2144,2168,2092,2091,2145,2181,402,401,979,978,1069,1249,1247,1250,1246,1062,388,387,1168,1081,1082,1165,972,386,398,333,329,368,1033,1013,1885,1009,1011,1029,405,989,986,1008,44088,44106,44101,44109,44104,1116,45651,45646,45652,1293,45647,46558,45962,45964,46046,45968,45640,45639,44566,44580,44572,42744,42734,42731,42672,42669,46329,48881,48850,54450,1312,1887,1044,47692,3901,46814,2183,2189,2095,2148,2139,1359,2187,2190,1989,2066,1310,1056,1077,1192,1900,51834,46208,51703,49192,49186,50365,50366,50389,50388,50369,50364,50313,44523,7378,47241,49068,47324,47322,47323,47344,47352,47353,49067,47318,47223,47286,47237,47226,47220,47329,47330,47336,48871,47071,47069,47070,47072,46999,47126,47125,47146,47124,47111,47108,47107,47110,47099,47115,48304,59816,47117,47121,47118,47114,47122,46967,47102,47097,47100,47098,47074,48307,48308,47738,47219,47217,47177,47147,47157,47148,48364,47287,47337,47191,47192,47193,47154,47183,47149,47150,49007,49002,49e3,48975,48934,48933,48931,48980,48997,48927,48981,48998,48878,48861,48855,48835,22369,22626,22560,22519,22480,22283,22271,22337,22183,22181,22180,22527,22631,22554,22105,22052,22025,22335,22266,22268,59369,59301,59313,59401,59288,59317,59320,59321,47208,48383,48380,48379,48377,47733,59776,59266,7032,25103,20446,56366,56361,20359,30532,30507,56454,25133,20709,20714,20715,20716,25744,25111,25767,25129,25126,2478,2481,2523,2615,2517,1948,1030,1060,1061,1251,2167,400,397,396,980,1066,1067,977,395,362,390,394,1083,391,360,392,1080,364,366,328,1028,984,998,999,46062,45963,45969,45641,45642,45644,45643,44128,42745,48851,1055,1040,1041,47690,46867,2184,2188,2077,1078,973,50367,50391,50371,50393,50411,47284,47346,47389,47340,47325,47224,47335,47339,47113,47101,48309,47186,46998,47195,47218,47198,47202,47201,47178,47158,47200,47180,47331,48327,48328,48317,48346,48345,48360,47155,47179,47182,47153,47184,48359,47190,49009,49001,48941,49082,48923,48876,48875,22372,22179,22627,22625,22520,22375,22376,22522,22521,22338,22526,22552,22553,22261,22201,22632,22103,22027,59309,48376,48369,48371,48382,48384,48378,59270,7031,30530,25132,25134,25113,20724,25124,2483,2516,1938,1031,975,389,1084,1079,44127,44139,1043,50392,50410,50413,50385,47348,47341,47342,47338,47320,47123,47109,47112,48349,48314,46997,47194,47199,47234,48350,48320,48344,47156,47197,47189,48356,47188,48976,48945,47313,48929,48872,48930,48928,48388,48859,48860,48866,48858,60247,22374,22371,22062,22557,22525,22273,22205,22339,22370,48370,48374,59267,2482,2484,1038,974,393,44140,50412,50394,47328,49069,47321,48936,47151,47120,47073,46969,48869,48867,47300,48868,47233,47304,48319,48351,47196,47185,48353,48926,48982,48387,48863,22373,22056,22055,60491,22053,22556,22524,22340,22334,48372,1039,48870,47306,48318,47302,47301]},{name:"Object_5",count:63975,indices:[36570,37896,32392,36792,33522,21476,35838,35566,36916,33867,36687,36682,36787,36789,36681,36937,21369,36588,33700,33625,36579,33664,33667,34455,36756,36833,36661,36657,35839,33992,35581,38499,38507,38517,38516,21367,38519,37895,33629,33627,36838,33640,33624,33665,36562,36879,36490,36553,57895,36934,63359,63356,63475,63347,63821,63490,35561,35682,35193,21471,36659,38496,35567,38508,38510,33525,33441,37924,32821,37893,36737,36736,33651,33642,33633,33646,36764,36905,36580,36645,33621,33684,36650,33663,34066,36075,33782,36482,36920,21372,63828,36227,63355,35687,35688,36228,35560,35249,36819,62569,35192,35248,35247,35206,45235,45233,45215,34297,34303,34321,34320,34078,36722,34315,34313,34316,34317,34740,34137,34312,38660,37965,33766,33917,38489,38483,33868,35681,39200,39185,38649,39202,38497,38656,19886,19897,19882,39151,32810,32813,33509,33510,37930,32887,32882,37891,37729,37627,37878,34284,34282,33654,33650,33630,33622,34127,33658,33652,34804,33680,33669,33675,33673,33688,36612,33689,33998,36479,33752,33671,33779,33783,33775,33790,33772,36282,36073,36281,36074,36082,36280,36299,36487,36086,36239,36085,36284,36246,57280,57331,60771,36935,36929,19874,21174,21375,21376,21377,63332,36238,36231,36286,36237,36232,36229,36240,63822,45225,20140,20592,21683,20473,48063,45259,42418,44268,45244,44978,45246,21482,35255,62636,62732,35185,36821,36828,36827,54746,44956,45216,45253,43872,34344,38476,38495,38484,33750,33753,33914,35690,33996,37945,37946,38511,37724,38279,37894,37880,37881,37976,19877,19871,19889,19879,19880,19875,42454,42415,21434,21436,21395,21364,21438,32900,32954,32897,32818,32974,32933,39179,38801,36793,32871,32873,37892,37938,37720,37879,37905,37704,37683,37689,33644,33645,33649,34298,33653,33657,33777,33691,33765,33786,33789,33776,57958,36087,36068,36084,36070,57277,57830,57275,57330,19876,21381,21370,21384,36921,21177,19890,36283,36285,36241,63343,63329,45198,44947,45231,45263,21474,21871,21877,54778,62624,62600,62641,62587,34726,35191,36825,45241,60779,45249,45255,54832,62630,62629,62627,62639,62662,20601,20141,20144,43833,43794,43835,43623,34277,32436,34179,34283,34281,34157,34160,34306,34229,38595,37942,37944,37725,37722,37626,37596,37721,37726,38280,32811,32812,19873,19887,44270,19870,19956,19957,19999,20605,20607,20164,21444,21362,21393,19959,19958,19949,43727,20606,19960,20115,19955,32956,32932,32931,32905,33519,33518,33513,39183,32814,32819,32895,32896,32917,36718,38291,38286,38282,37931,37719,37703,37653,37993,37964,37702,33693,33690,33697,33788,33797,33804,33749,33771,33769,33763,33762,63365,63368,63367,60697,60692,57274,47875,47872,47878,48093,48094,48086,48083,48091,36083,36072,36069,36071,57282,57954,57953,63370,63371,63407,63373,63444,61304,60188,60190,60181,60189,21382,21371,60272,63748,60282,61419,19865,19872,60403,60404,63322,63316,63315,63451,63324,45048,45286,48066,48069,45087,48065,45275,44937,45168,44934,54150,45194,44943,53647,53670,53646,53675,54115,54112,20019,20023,35256,34738,34734,54742,53618,54740,45093,57370,57369,57371,57372,54829,62565,20147,20148,20645,20149,20113,20591,43622,43726,42379,20644,32391,34280,34275,34276,34322,34135,38596,37995,38013,38592,37723,37620,37947,37939,37950,37952,19878,20001,20165,20114,20111,20116,21383,21387,19903,19900,19901,21391,21388,21394,21389,21386,21385,21363,21365,21361,21437,21439,21443,20002,32941,32903,32912,32916,38807,32920,32445,32928,32441,32800,32801,32799,32881,32955,37927,34044,33794,33767,33761,33764,63380,63398,63377,63441,63313,63426,63423,63428,63430,63437,63438,57400,57836,57272,57276,57833,60700,60400,60398,60402,47887,48084,57281,57908,57283,57328,57327,57289,63369,63436,63366,61285,60221,60223,60224,60332,60579,60334,60289,61610,63421,61413,60667,60664,57266,60674,60341,57263,60656,60193,19867,47883,63325,63327,63328,20594,44944,45085,45208,45166,45202,45196,21477,21480,21485,21491,20011,21487,21481,46924,46934,46920,46925,46932,53818,46916,46913,53804,53671,55082,53648,20074,20080,46831,53802,53810,53809,54124,54121,53808,53812,53676,54109,54063,21489,21868,34736,34733,54744,45258,57970,57325,57985,57975,58019,57365,57368,57317,57312,57311,58028,57719,57723,57725,62726,62659,62663,62657,62652,62723,54805,59226,53865,53623,53842,54097,63943,54068,54067,54066,54848,62698,55064,20646,20590,34279,34274,34292,34311,37994,38e3,38591,37623,37940,37727,37728,38599,19888,20005,20109,20007,20004,19997,19884,19899,19951,19953,21470,20008,21479,20010,20009,20107,20012,20108,21478,21442,21473,21495,39149,39177,32919,33504,38776,32809,32435,32804,32929,32890,36720,33492,63397,63381,63417,63418,63314,63310,63361,63419,60655,60633,57894,57271,57902,57838,57892,57835,60401,60397,57284,57952,57974,57279,57831,57955,63422,60179,61284,61282,61291,61289,60185,60335,60631,60270,60297,60286,60248,61336,59395,60247,61338,61341,19860,60657,63717,57849,57886,19864,19858,60192,60325,60303,60326,60342,47884,47881,45281,45192,18103,23926,24288,23923,46921,46928,53803,53672,20026,53625,53651,54771,53602,53600,54745,54748,54747,54769,46832,53683,53807,53806,53825,53729,53823,53811,53641,54062,53629,53642,53627,53612,53628,21490,34771,34770,34764,34769,34828,34829,34830,34762,34732,54743,54741,62782,63084,63971,57967,57915,57917,57914,57290,57326,57364,57324,57366,57309,57367,57321,58002,57316,62725,57404,58099,36543,58105,62718,63041,63045,57409,63046,63044,53594,53605,54754,54756,53863,54804,53858,59292,59302,62714,62713,62740,62672,62647,62704,63936,34278,38002,37951,20110,19950,21392,20006,32909,32930,33503,32798,32925,38773,32926,32892,33063,33065,32535,32443,62736,36547,34898,63400,63442,63375,63413,63280,63267,63272,63273,63269,63443,63440,63449,63434,63742,63731,63729,57889,57270,57900,57893,60686,57957,57956,60347,60346,60399,57959,57903,57909,57911,57972,61283,60245,60222,60186,60239,60237,61288,61290,60336,60339,60184,61372,61417,60288,60283,59332,59320,60298,61333,19862,63392,63385,63388,57261,57881,57887,60220,60235,45176,23963,46929,53805,53816,53817,53815,53686,53643,53608,53604,53609,53607,53597,53599,53610,53645,53644,53611,46838,46953,53731,53630,20075,20022,20020,20106,25179,20079,20076,24289,21872,20015,34812,34772,34821,34827,34838,34735,34763,53595,62787,62789,54831,53973,54833,57288,57292,57919,57293,57982,57977,57323,57298,57318,57306,57307,57305,57320,57304,57987,57926,57925,58024,54140,57393,57394,57937,57935,57373,57315,57445,36602,58111,63905,62743,62742,53622,59228,63931,62642,62621,62645,62705,62766,62756,62757,53976,62694,62693,62697,53871,53872,62696,62710,62753,62751,62771,34289,34308,34271,25180,25182,21441,32906,33494,32390,32936,33066,33490,33482,33481,63023,63395,63765,63409,63415,63439,57396,57890,57891,57842,57341,57839,57267,57901,60319,60320,60343,60344,60345,57964,58060,57287,59319,60238,60328,60302,60187,60340,61416,61340,60287,59328,59323,60331,19863,57846,63390,63755,60304,45002,23357,23962,45012,46954,46951,53814,53685,53613,53624,53603,20025,20077,20099,20098,20017,20016,34823,34822,34824,34831,34825,34826,34832,34761,62781,63938,59278,53866,59218,57913,57295,57921,57948,57980,57302,57319,57994,57934,57932,58026,58015,58013,58021,58016,57380,57379,57726,57727,57377,57392,57730,57728,58062,58056,58048,57381,58037,58034,58005,57313,57446,58097,58100,58101,34808,57406,62748,53615,59290,63934,62669,62646,62619,62651,62711,62699,62673,62709,63939,55065,62691,62773,34290,34294,32908,33062,33489,62729,58092,63766,57398,58085,58084,58076,58082,58078,57269,57340,60309,60318,60348,60306,60307,60321,57910,60243,59317,60327,60330,60182,60240,60301,60300,59601,59385,19869,60236,63384,63362,57843,45186,45178,24264,45170,45172,25108,23317,46950,53813,53684,53626,54061,53614,20078,34839,59536,53867,57294,57297,57922,57927,57924,57301,57991,57931,57996,57308,57374,58012,57376,57383,58031,57389,58052,58057,58010,58081,58088,58089,57403,58079,58077,57402,57405,58087,58096,58107,58098,54065,57410,53606,53616,62720,62668,62715,62671,62765,62776,57395,58072,60323,60305,59411,60337,60329,60178,59596,59576,59593,59594,63469,57264,45007,24319,53730,53674,59534,59541,59276,53870,57296,57299,57322,58860,57929,57999,57724,58038,57385,58036,58045,57388,58064,58065,58011,57314,58091,58095,59300,62649,62707,60322,60324,60242,59598,45181,53673,59532,59542,59539,58039,58046,57386,57390,58083,58075,58069,58074,58071,60299,57387,58068,60241]},{name:"Object_6",count:8,indices:[2,5,0,1,7,4]},{name:"Object_7",count:42653,indices:[2174,37585,42347,21846,21829,3133,21845,31794,31517,32189,31516,31369,6924,15898,6925,6927,41496,41819,32357,31998,3496,32012,31877,31881,31979,31883,42354,5689,25168,22275,2252,19383,15258,19379,5702,42349,5722,42320,2163,21844,18197,18216,18674,21801,32141,34989,34985,32128,32127,22179,38457,35162,33260,42081,31524,32022,32045,17644,32048,31927,31925,31984,31376,31993,6947,3454,41545,3458,3449,6942,12362,5759,12363,42139,37589,5715,2168,12366,42127,42292,42291,32008,32009,9395,9396,38042,17861,38024,18249,18238,18237,42357,42352,5685,22280,37770,22282,19915,15282,41374,41373,16007,16008,41381,1449,16018,41400,16017,15846,41519,15845,16006,42351,2176,5708,2180,42328,42329,4093,2173,42340,42341,41366,5330,5289,41361,5387,1316,41340,26696,22207,22203,22204,42549,21843,18214,25424,21828,31856,31866,41943,17671,41287,17669,17670,41557,17691,41259,41257,4816,41504,35399,35092,32102,38458,42082,31732,31910,32041,31329,32110,32113,41900,41922,31634,32063,31632,41920,31630,1433,1431,31831,32032,3452,41536,7520,7574,7519,23758,23765,42135,37586,42121,41817,41941,42289,42295,42132,42119,5720,5735,42301,42299,42316,2155,42315,4188,42286,547,25812,26868,25817,23080,9307,9273,25842,18218,19040,18425,18294,18774,18339,2245,15250,42293,15968,15948,19727,19714,19726,41397,41398,41353,41399,1322,5376,1437,1457,16001,15916,16e3,41219,811,41355,41348,1332,41357,15946,15947,15941,15940,15951,16221,15996,16016,16015,15936,15932,1976,41406,16019,4009,41411,296,4087,3745,2033,17735,17732,17731,5684,42343,42342,3741,41382,1335,1312,5392,1428,41338,41261,1002,1004,5204,5202,5253,294,291,17733,35287,33259,35160,35083,35082,35080,22228,34991,42561,42564,22331,22285,22289,22319,21808,21809,42411,42412,30283,42540,42403,21818,22182,21822,21826,21803,26905,22270,22266,25175,22175,42383,42630,22166,22167,26888,35076,31893,31838,41947,41999,31996,17662,17660,41586,17808,17807,17681,17686,17683,17810,17809,17673,17658,41255,1091,785,41505,41502,41507,35140,33257,31331,32039,41904,41964,41961,41925,41960,41962,41924,31663,32161,31633,32068,32152,32069,7809,7534,7818,31931,31880,41247,4829,4827,16186,5263,802,4830,5267,4818,794,19777,12196,12194,15811,7541,7521,26734,31218,23082,26729,42136,42110,42138,41929,42107,41932,41926,41832,41934,41958,41938,2136,2141,5746,2153,2156,5727,42314,2161,42319,1983,4183,19238,19240,19719,19372,19378,19371,25823,9506,9308,9306,9305,9272,25833,18416,18957,17820,18974,18120,17774,19036,18975,18972,18342,18340,16050,16047,16049,16025,1970,42298,5739,16059,15987,15264,16052,16024,1968,16020,15991,15988,15967,15970,15977,15980,5269,1469,5273,1441,5286,1470,805,41370,5276,41389,41345,41343,1321,41341,41405,41686,41403,15927,25742,15926,15924,15999,15923,15920,4843,4844,41220,41221,12188,15852,12190,41390,19885,19884,19728,15939,15953,15961,15954,15960,481,4129,445,41418,4133,442,42317,4181,534,533,1981,4185,4007,4109,42322,348,41334,41332,4085,41428,41424,17734,2250,19042,19041,17411,42348,17469,17730,17420,41383,41364,41313,1295,1296,41448,41452,5397,5429,41432,17756,17757,1430,41336,41684,41685,41415,41308,5176,41310,41453,1285,41311,1291,41286,41263,41275,41279,5175,3742,3744,17755,17867,18148,17859,40194,41297,41473,35289,35307,35091,35079,35075,18962,18947,18948,18825,38046,35088,18226,18227,18220,18225,34990,32138,34992,22201,22328,22304,25172,42552,42554,42397,22158,18193,26894,22180,22168,26885,31839,31867,31889,41950,41998,42008,41946,42030,42005,42031,31830,17856,17858,17804,17805,41290,17806,41281,17651,17672,5252,35308,42092,42091,31829,32154,33268,33269,32037,41899,31631,41905,41956,41953,41979,41963,33271,17613,17624,17620,17616,17615,17605,38461,33291,31654,32124,31656,7559,7637,31953,31956,7641,7558,7656,15887,15886,16206,15896,7523,7524,823,41224,821,820,817,41249,41225,41222,41223,41230,41520,41487,15844,41521,15868,1436,1438,4825,1089,19883,15821,15820,15817,12192,19729,19767,12198,15804,12225,12893,9512,9304,25835,9333,19928,19930,19759,9337,9334,25808,26738,26726,23769,23745,42109,42117,42103,42118,41930,42099,42094,41937,5755,2138,2144,5737,4352,19267,19970,19718,19369,19712,19367,19713,19255,23393,23391,19218,19214,19219,25821,29197,23318,25722,25723,25724,19233,25832,38055,17609,38052,35268,17799,38049,17685,17689,17773,19029,18417,18418,18976,18348,19189,19188,15245,15241,15248,1971,15251,15259,15240,15257,15233,15990,15974,15976,15985,16023,15972,15993,15966,15950,15964,1444,1453,804,41359,1325,41404,41352,41402,41407,15956,15958,15919,15860,41226,41485,15861,41483,41484,15921,15862,15827,15831,15834,15833,41391,15994,15995,15963,15997,15952,15998,15929,512,518,4013,41413,41419,41422,41683,4029,4024,447,4144,4180,524,1975,4123,4124,41426,311,4088,19035,17413,19031,17419,17738,17172,17274,17416,17276,17269,41316,17761,41459,17760,17763,17762,17811,17845,17841,17812,41472,41444,41327,41330,1302,5394,41441,41440,41464,1269,41508,17655,1016,41272,17837,17828,17833,17759,17758,41458,17829,17766,41320,17854,17883,17855,17878,17870,17871,17802,17869,18826,18219,18231,21031,21027,34984,31650,26701,18201,22321,22302,22317,21805,25174,30275,42547,26897,18189,18934,25429,21811,22256,22334,22257,26895,22169,22164,26883,22161,26893,26892,31895,31892,31968,31887,31886,42006,42029,31835,42039,41288,41282,17690,17848,17842,20988,17844,17838,17847,17853,17887,17657,17638,17639,41501,41499,41503,1090,784,4792,783,1226,5249,35145,33258,42093,31373,42041,31986,31822,32066,33531,33533,33365,32074,32103,32077,31659,33261,32186,31613,32185,41897,42084,42090,41957,41935,33247,33270,33276,33294,33292,33290,38459,17618,17640,33384,31978,9326,7518,31969,31966,7825,7643,7536,7646,7557,7570,15882,15881,7540,7572,7537,15879,15876,41494,41491,41242,41523,16187,41251,15875,15874,15829,15806,15808,5222,15814,19772,19880,19882,19760,10492,9513,15809,12894,12788,13153,19936,19228,19751,9332,25733,19934,25735,9518,26728,42426,42593,42441,23215,23214,29209,12009,23426,23390,19968,19212,19209,42133,42104,41959,41927,42120,41945,2132,19715,15982,19710,19730,19257,19946,19959,19942,23222,19634,23221,42452,25820,23356,25814,25841,19232,35180,36104,17684,17611,17608,17612,17680,17860,18973,18959,18949,18823,18960,19030,15246,15242,15989,16021,5277,5298,5281,5359,15931,15917,41518,41486,41233,41241,41204,15858,15857,15847,15848,15850,15851,15826,15828,4025,4027,4012,4131,355,312,2036,4122,17412,17414,17418,17736,17737,17403,17729,17742,17173,41321,41322,41318,17813,4935,999,41298,41427,1301,1307,41434,41443,41323,5205,5178,1273,41277,41280,17835,17819,17817,17830,17827,17768,17816,17850,17879,17876,38019,18335,18796,18945,18821,18822,18828,18213,18217,18776,18780,18781,19175,18786,18778,18816,18824,21030,34988,22170,21825,22281,26914,26911,22213,18199,18212,18210,22206,25430,22332,26891,22154,42002,42040,42026,42028,41284,17846,17852,17646,17674,17675,17678,17676,42024,31911,42025,33363,32121,41916,41915,41909,41898,42083,41906,33293,33219,33218,33216,33373,33518,17622,33295,17617,17619,31900,15884,7522,7542,41495,41490,41244,41500,41253,15805,15816,15835,15840,15869,15870,15837,19766,19761,19763,19768,9515,19739,19740,25731,19736,19735,19749,9312,31219,23767,42622,23424,23105,19211,19215,19210,42134,42102,41940,15265,19224,19225,19217,23225,19202,23281,23223,23387,42607,23355,23386,25813,25846,25847,29185,25729,38374,17801,18961,18419,15235,1445,1329,15955,15957,19775,12186,15855,530,4138,351,17798,17794,17777,17778,18126,17753,17771,17772,17417,17782,17790,17780,17750,782,4807,4808,41465,41299,41442,41429,1270,5182,1277,17764,17814,17826,17767,17818,17765,18338,18963,18800,18820,18802,18803,18958,18221,18788,21023,18207,18233,18794,18818,18790,18805,18782,18793,21032,35150,18813,22162,18938,18198,22152,22155,26882,42027,42032,41265,41285,41283,17851,17679,17682,17677,42020,33368,33528,33369,33372,33374,41914,41908,41917,41881,41907,33367,33272,33371,33378,33222,31882,31981,31967,15872,7539,15905,15904,15901,16188,41498,12900,15839,15842,15838,15843,19765,19762,19756,19738,23104,19206,19197,19205,19203,19208,19746,19733,19368,19258,19366,19966,19231,23227,23226,42457,23357,25824,23317,29187,16044,15243,435,350,17752,17784,17747,41303,1276,5199,5179,18819,18954,18953,18222,26681,21022,21024,18777,18804,18784,35147,41975,41965,41918,41966,15900,15903,15807,15871,15841,15818,19764,9315,9325,9546,19237,19949,18768,19703,19702,19254,19709,19707,19732,25727,42619,23280,29186,42421,23316,432,4125,4111,17781,1275,18831,18950,18952,26691,21026,18795,18812,15902,9327,19234,25716,25712,25714,19742,19737,19743,19706,19731,25831,23292,23291,42617,4137,25708,25705,23297,19741,19734,19252,23265,23279,23382,23294,23368,42433,23302,433,23380,23315,23365,23381,29184,23378,23377]},{name:"Object_8",count:27283,indices:[8477,8481,4746,22191,4213,8584,17219,8563,8642,4184,701,1575,1384,1573,19706,24386,1583,23742,1579,4974,14059,1474,4934,1570,5996,1567,1530,3980,20166,3910,18828,8489,22181,8488,8465,8612,8722,8625,9235,1018,9232,8367,8659,927,871,8653,8474,8343,762,8344,6118,6600,6602,1476,1478,14014,13186,12137,13417,11474,5125,5080,6271,6276,4955,15264,11704,2541,3357,4984,3823,3978,2859,18862,24393,8487,21607,1590,16046,8621,8719,8648,8495,9403,9404,8941,8781,8485,8498,8651,8348,8350,8472,9711,884,8346,8483,733,880,700,676,9210,9218,9294,8947,5217,6246,4914,708,711,738,716,804,726,6126,806,807,5483,6091,5616,4268,800,1475,14715,11253,12786,11165,4851,4891,6615,6344,6336,6329,6340,4180,4323,3278,3774,4462,3285,3119,13220,14357,13221,3345,4641,2664,3868,4645,3867,8826,8756,653,8910,8746,8606,659,1563,1562,2341,2335,1186,1189,1183,1566,19814,23710,8491,8497,8646,2487,17232,20072,3851,8592,8617,8616,8618,8620,8619,8494,8721,8782,8780,672,8640,8691,7375,735,8820,8806,904,857,863,710,838,840,9231,6270,754,755,846,707,714,743,724,719,717,747,728,4972,885,5634,5269,4733,6289,6293,6372,6370,1473,1472,11256,11264,11222,13644,11158,12197,1244,13284,13652,11296,11078,12539,6156,6286,6445,6343,5991,1488,6608,1521,1484,1486,2390,3358,3282,5028,11700,16129,14354,4380,4526,4578,4195,4577,8588,2506,3845,2683,3301,3862,4048,4185,8604,658,8762,8908,8598,8600,1482,1480,1227,1471,14707,1577,2005,1124,2178,1574,2329,2161,2060,19267,8496,13692,12531,13680,14867,17217,21609,2478,3445,2671,4595,4596,1869,1875,1880,2475,8586,8614,9260,9256,932,9216,9093,8783,8786,8909,956,8692,9441,8694,8695,737,712,8759,9765,9269,9071,9280,429,412,8788,406,9254,9117,8724,8723,9012,4900,6462,4962,6409,751,702,721,722,746,749,803,6244,5755,4814,4792,4906,4803,4795,6471,5209,14504,11232,11161,12169,13132,14750,13576,13100,6158,6610,1487,4970,15241,14403,4340,4136,4216,2923,2514,2697,2702,4592,4181,8603,432,657,954,9443,952,1491,1192,1477,1196,1492,1494,1279,1200,586,579,1704,1701,12051,11321,13080,12775,2177,1571,2153,2053,2216,2213,1789,1762,2180,2002,2164,2143,1133,2160,1767,19732,12617,13434,14879,12426,14858,12191,12194,17221,2562,3306,1582,1396,2106,1770,2127,1988,2526,8718,9460,8712,8716,9165,9283,9281,9222,9239,9100,8990,9241,9228,705,869,713,8737,9161,8888,9394,8886,9392,8892,9046,9104,9229,5219,6296,742,744,853,752,5702,4925,6260,6262,1498,13159,11111,11211,11294,14842,14289,14960,11637,11604,4975,14886,4235,4153,3356,3286,4617,8863,8844,9312,662,8595,8597,9314,8701,9445,1485,1495,1499,2219,1797,584,580,1792,2313,1240,1506,1508,2376,1503,1206,1502,1505,1208,1801,1202,1799,2228,1619,1622,2297,2303,1884,2116,13356,14731,2174,1939,1973,1764,2255,1659,2114,1896,2159,494,1634,1644,1783,1787,12459,12123,14864,11531,15472,12543,12556,12332,2527,4538,2471,3089,2465,1156,2080,1888,2501,2684,8985,9290,9044,9072,8978,9401,9234,867,873,8822,9135,9113,745,4930,1501,1514,1513,11227,11511,14973,15319,14522,15901,6049,427,951,8906,9378,660,8596,8704,9388,8766,9456,8698,1497,1493,1793,2381,553,1210,12610,2295,2292,548,1803,13706,13701,2238,2026,1856,1587,1839,533,1812,1617,532,2248,1820,2301,1798,2113,2146,2175,1765,499,497,1654,1773,1686,2157,495,2321,2322,1741,588,2162,1785,1788,1641,13863,14920,12692,2570,2598,2462,3837,3087,1164,2130,2120,1585,1580,9274,8776,9132,9285,9284,940,852,13299,11429,14941,15528,15171,15147,15313,15339,15399,14944,14103,16076,16057,16081,11577,11566,5031,948,9310,9303,9305,9300,9287,9386,8591,8615,8593,8708,1481,2382,587,1719,2230,1809,2138,1929,549,1815,1814,2284,529,2283,2249,1257,1626,1796,1632,507,1689,510,1633,1638,14898,15051,16084,15154,14288,12730,3457,4536,4005,2477,1945,1841,1584,2121,9265,14974,14965,15625,15975,16049,15307,16092,14096,11418,16037,6175,8902,946,944,9452,8703,942,8707,2236,1807,2351,1964,1858,1912,1857,2246,530,1598,1749,1597,531,1606,1731,1615,1648,1697,1775,2079,2275,514,15073,15228,15210,15294,14279,15582,2437,2349,1840,2119,2118,15865,14940,8901,8589,2141,2139,1818,1608,1613,1733,1629,1745,2191,1777,1776,598,620,1780,1695,604,15263,15133,15592,14983,1958,9307,1616,1611,619,2271,606,602,15184,15540,8899,1725,614,15460,1825]},{name:"Object_10",count:39839,indices:[15693,15692,15282,11616,15290,15498,15286,15283,15574,28012,27456,28017,39168,39067,39061,39135,39269,39578,15434,26678,26684,27197,27187,27152,16380,16378,16415,39184,39406,3388,39309,39333,11499,12418,3057,6148,2403,8982,7679,7680,15273,15497,15288,15285,28015,39066,39638,3311,39668,3375,2952,39753,3357,39718,39516,39644,16681,17303,8952,39074,8996,39329,2970,9115,8858,8862,8851,6593,6179,8076,2336,7778,2153,9132,9126,39190,8950,39201,39077,39076,39345,39208,39359,8850,2946,8847,8864,7659,7711,2275,11446,2270,11464,11421,11466,7698,11450,11453,15274,15492,15450,15571,15570,39213,15828,39062,39072,39624,39586,39588,39707,39620,15549,15696,12827,12825,15910,16386,8972,8973,8968,8951,8960,39277,39212,39350,12433,12760,12757,11479,3333,12420,2979,3063,3316,12424,12429,12431,8846,8170,11495,2955,8822,3006,3393,2944,8836,8875,8828,8989,6193,6196,9136,8860,6044,6192,15775,9027,9111,9034,9053,9062,9058,9044,9054,9048,9046,15382,15292,15289,8966,9133,8958,39078,28028,39348,8863,8866,7714,11492,7725,8094,8084,8082,8042,7696,7692,11417,11461,11458,15551,11430,11428,15591,11427,39308,39293,27158,39517,39615,39519,39511,12479,39610,15694,12458,12468,12460,17300,17297,17555,17295,16595,27143,27361,26919,6597,39290,39210,12428,12436,13361,11777,3345,3228,2993,2988,2976,12427,7754,8142,7757,7758,7729,3358,3359,2963,2965,2950,2938,3395,8994,8854,8859,6185,9379,9174,2509,2407,9088,9277,2581,2517,9172,2582,2508,2507,8877,9385,9161,9382,15323,9159,15280,15435,9025,9051,9554,15773,15386,15389,9085,9559,7741,8080,7750,8155,7753,15279,15305,15375,7850,7662,9253,9140,8967,8855,39203,8865,8867,11498,11522,11521,11519,2225,11576,11801,7737,7661,11473,7651,7685,11454,11472,15493,12953,13163,15582,15686,15588,15605,15589,15569,15573,15575,11676,12141,11680,11432,11642,11404,11438,11426,11440,11441,2273,2271,11425,15501,28021,28013,27995,29773,27997,39515,17309,17226,17229,39503,39585,39636,16416,16423,12942,9831,9863,12799,12469,12478,2702,12831,9962,2911,13246,2759,12772,17304,16425,27150,16371,6099,12425,11480,11494,3350,3340,2977,3227,3317,3e3,12763,12440,12437,8839,8842,8872,8838,8936,8946,8948,8145,8801,7752,8568,2583,2592,8141,2536,8798,8834,3363,2960,2930,2966,2937,9096,8645,2411,8944,2412,2423,15329,15321,8924,8931,15331,2580,2593,2397,9036,15384,15750,9065,9071,9076,9080,7728,7746,7745,2313,2312,7813,7775,7774,7675,7672,2314,15276,15767,15376,8359,7842,9402,9504,15306,8964,28030,8868,11524,11526,11917,11915,11512,11813,11520,11516,11514,11530,11531,12712,11535,11537,12370,12371,11799,12142,7688,8460,7690,7683,11415,11455,2870,12648,2823,13146,2822,2879,2824,2825,12377,13031,13171,13002,12958,2789,2793,15577,15604,15550,11646,11397,2269,13011,13062,12330,12355,11407,11444,26599,26603,26604,26605,28022,28023,28019,39592,39671,15832,39739,39597,15830,15849,16018,39669,15843,18804,17095,18805,16321,15929,17050,29575,26594,27798,28004,28002,29482,28009,28313,26997,27449,28245,26983,26939,26940,26948,26878,16106,16107,27290,26902,16127,16129,16114,26891,27998,28039,12806,12816,17310,17311,39582,17316,17264,17251,16020,15835,18810,18809,17248,17289,17286,17329,39508,39520,16148,17550,12459,12456,12943,12803,12829,9933,12835,12838,12442,2802,2765,2763,2758,13158,12782,15916,16109,16227,16160,2980,3335,2974,12457,12441,12778,8869,8566,7762,8134,8711,9453,7766,2574,8879,8825,8908,2956,2437,2414,8874,8646,2586,15802,15377,9576,9078,15392,7731,7764,8562,8068,8393,2311,7638,7666,7671,7645,7937,7859,7665,7635,7844,15278,15299,15275,7834,9399,9404,9405,7845,15320,15354,15355,15373,27979,27978,28032,28034,8843,12733,12750,2819,11517,11817,11506,11528,12367,12380,11918,12408,12374,7691,2871,2821,2873,12704,12715,12287,12325,12323,12643,2848,2828,12386,12316,2792,2826,15603,15689,12096,12354,11395,13177,12083,26762,26763,27967,27992,27968,26757,27951,27953,26621,26614,26610,29588,28001,27945,27942,28026,28020,38641,38634,38642,18931,39594,39690,39607,39641,38635,16218,38640,38639,17097,16320,18930,16989,16328,27098,16326,16318,16319,18798,15928,15820,29568,29564,38947,29701,29820,28008,28265,38951,26989,28308,26916,26895,28041,27991,12819,12813,12808,9952,9947,12823,17314,17327,17285,17283,17267,17221,19012,17230,17228,17292,15819,26591,18553,17302,17290,16212,16166,16206,16162,16146,16152,16209,17512,16217,16222,9861,10017,12804,2757,13008,2910,12854,13292,12859,13098,12833,12840,12826,12903,9948,2767,13247,12448,12447,12776,12455,12451,12767,12452,12770,12463,17305,26986,16105,16111,16112,12462,12443,8786,7761,8563,9454,2561,9455,2577,2575,2535,2560,2534,2569,8719,8913,8915,8823,8917,8795,8909,8896,2959,3381,2422,2410,15372,2515,2518,8887,8890,15381,9063,15390,15395,15398,15396,7738,8066,8326,7636,15322,8356,15374,28037,12744,11913,11820,11496,11513,11805,11534,12376,12416,12415,2874,12710,12384,12647,2851,12321,11574,2827,15607,15680,15667,15594,13007,15682,15552,15554,15669,15668,11649,12082,11543,12307,27959,27980,27962,26759,26612,27943,27949,26753,29476,29584,26731,27934,28040,39672,39745,17029,27100,15958,16449,26880,16100,26879,27084,38942,27003,38948,26979,16990,16091,16317,18934,15817,39001,29569,27827,26819,29489,26904,26899,16124,26932,12898,17328,17326,17325,17320,17280,17279,17262,17277,17318,17322,17224,18562,17261,17252,17296,17301,18937,17066,15833,16e3,17074,16210,38633,16200,16202,16594,16154,16151,2820,2798,13289,12849,2701,12785,15655,12765,12454,12784,17552,28255,16108,2998,8835,8789,8567,8791,7760,8565,9451,8559,8558,8569,2568,9444,7810,9448,15353,15379,8583,15378,15399,15394,7805,15298,28038,27975,27989,12745,11503,12373,12719,2850,11575,15684,15672,15652,12862,15555,15557,15567,12311,27964,27981,27957,26735,27946,29585,26590,17026,16506,27277,16096,26881,27847,27081,27085,26830,27753,26977,16288,16077,15999,38950,29700,27935,16539,26937,26875,26874,17273,17227,18812,18816,17220,17231,19004,17246,16163,16155,12861,12868,12873,12876,13269,13096,27195,27188,28261,26987,9462,8555,9464,7812,8332,8392,7809,15356,15400,15393,15380,27970,12700,2791,11540,15683,15676,15671,15670,13295,12845,12855,15654,15653,15649,12866,15559,15558,15561,12844,26732,16085,15960,26869,26595,27087,26824,26865,26826,29492,26848,26592,27323,26928,26889,26931,17268,17222,16015,16012,15842,17241,17253,7769,8709,15371,12318,15679,15562,15566,15556,27932,16286,26832,27004,27654,27844,26859,27090,26929,26876,15723,15565,15564]},{name:"Object_11",count:338,indices:[93,91,89,68,66,64,20,96,100,78,79,76,260,72,71,70,102,288,290,177,98,85,86,87,80,82,69,31,32,34,254,215,255,117,146,128,335,239,241,240,314,43,42,46,39,157,158,48,257,63,209,50,307,51,110,55,53,302,289,287,94,83,283,90,259,62,60,22,25,18,17,243,12,10,264,74,75,77,238,8,9,232,6,27,28,2,26,330,150,119,5,327,35,316,137,326,36,320,318,47,227,49,44,37,333,334,336,103,104,286,275,194,84,188,183,58,251,249,21,149,147,247,14,73,268,208,206,131,112,337,0,226,321,136,319,41,294,171,109,270,193,282,281,174,54,161,306,303,164,23,16,266,198,328,120,121,325,99,173,298,106,277,159,234,293,169,166]},{name:"mesh_7",count:9599,indices:[2127,1964,2317,1733,1021,1735,3148,6568,3156,3824,3942,3940,7816,2237,7815,8142,8139,1936,1076,1894,1056,253,656,277,657,255,257,2012,1955,646,1585,1583,1782,7805,2363,2471,4560,4540,106,3146,1675,1017,129,128,1180,1117,559,549,545,5911,788,791,2085,3104,3102,7889,8039,8121,3106,8122,1055,1129,1130,1125,1023,1024,1729,1089,2500,1739,1015,1657,701,561,563,659,1002,1005,1001,7790,7789,7767,3122,2371,7721,7794,1781,1779,1806,2385,1424,1431,1430,1423,2451,4520,4522,4385,8375,8394,8238,8321,8251,8310,4563,4565,98,361,3905,4863,4276,4273,4272,4248,8252,8254,8247,6569,8244,8373,8242,7677,1490,7657,3155,3154,3147,1642,1004,1006,700,569,548,773,4040,4031,3626,2038,1873,2039,2018,2048,2047,2050,2049,2009,2036,2149,2030,2033,2032,2098,2101,2055,2052,1962,439,2040,2143,3270,3271,3272,3274,3240,3241,2225,2224,2210,2226,3283,3282,3268,3286,3190,254,259,1126,1934,1927,1090,1054,1790,1777,1784,1789,2492,2494,1761,1726,2448,1749,1751,1737,1728,1760,1766,1767,1753,1926,1928,1923,1075,1046,539,9261,455,601,602,509,647,424,422,649,648,1896,658,4024,4025,4026,2019,2021,2187,2372,2373,1817,1815,2170,7806,1778,2466,1610,970,972,946,971,1003,1437,1466,1436,996,998,973,969,999,993,992,975,1428,1429,3837,3835,2628,2684,2658,2791,2627,2611,2609,3467,3459,3458,3453,2607,2606,3461,4083,4085,4084,4352,4349,4580,4577,4576,4279,4564,3996,3999,4e3,3928,3991,3927,3926,4871,4878,97,4864,4867,2591,2582,2584,2594,2578,4277,3158,2538,8274,4297,8263,3162,8260,3167,3165,8269,8322,4331,8250,8249,8241,947,974,7655,7688,7690,1427,7699,7662,1465,1417,3287,3361,3362,3348,3347,1008,242,41,47,44,39,7891,2279,2220,8968,8967,3093,6299,6298,560,546,571,6313,6311,3541,6314,771,606,607,4032,4033,4060,4059,4052,4089,4053,2207,2151,2229,2147,2208,2209,1872,2132,2046,2017,2027,2016,2013,1868,1867,1844,2028,1861,2051,2045,2102,2103,2023,2022,1958,2057,2043,2054,2089,2138,2041,2053,2140,2080,2660,2681,2665,2659,9198,2702,6186,2671,2653,2654,3281,3315,3316,3325,3331,3308,3309,3246,3244,3245,3242,3243,2223,3110,3115,3116,3105,8129,7928,7890,3095,3284,3317,3269,3266,3189,3153,256,1699,1708,1707,1925,1723,1686,1719,1718,1886,1883,1045,1047,1053,1127,1792,1800,1793,1741,1765,1764,1725,1731,1776,1759,1758,1721,445,446,557,558,550,9318,9290,9257,512,511,510,405,499,505,409,403,490,651,661,407,423,420,427,1950,1998,1880,655,1992,1995,4028,4029,4017,4018,4063,4023,4003,4004,2026,1854,1701,1702,1705,2364,2374,2191,2172,1816,1819,1783,1785,1786,1787,1788,2181,1805,1801,1802,1832,2232,2206,1822,1820,2165,2192,2169,2164,2162,2470,994,1426,3842,3843,3440,3447,3442,3741,3785,3740,2630,2626,2624,2792,6323,3470,3472,2614,2615,3491,2618,2685,4056,4054,4057,4013,4014,4015,4016,2635,3477,3464,3675,3465,3474,3483,4082,4074,4075,3719,3720,4073,3721,3717,3730,3722,3715,3716,3697,3714,3687,4532,4531,4530,4525,4523,4521,4383,4384,8389,8312,4369,4561,4535,4344,4534,4573,4574,4588,4599,3939,3936,3938,3931,99,4235,288,95,100,103,105,4242,4240,4233,4868,2873,2855,2856,2874,3220,3335,3334,2589,2600,2598,2851,2843,2853,2587,3437,2643,2646,2645,2595,2570,2545,4287,3353,3352,3354,3340,3341,3301,3356,3355,3195,3304,3303,3160,2535,2537,8256,3163,8265,3169,8240,1227,1112,904,982,908,948,941,943,938,933,989,7642,7610,3138,6687,3140,7566,7674,3130,7686,3134,1467,1468,3145,7567,1095,1016,1507,1499,1621,132,134,135,133,344,343,392,396,339,338,350,178,73,29,249,247,40,37,8961,8962,8959,2277,2276,8970,8965,9186,3097,9185,6309,6305,570,6315,5906,5896,5521,5508,584,6245,6292,6284,6295,6294,6293,6243,6244,6168,6260,6283,8952,9181,8950,8948,568,567,594,578,826,705,770,761,760,3582,3584,3579,3580,4199,4198,4200,4048,4050,4035,4036,4030,4061,4038,4039,4197,4207,4184,4186,4051,4183,4055,2150,2230,2146,2034,2008,1858,1870,1845,1862,1863,1842,1838,1839,2204,2205,2090,2092,1961,2056,2025,2100,2081,2071,2066,2297,2215,2145,2083,2682,8975,6228,6226,6225,2690,6304,2696,2699,2697,2794,2796,2797,2799,2701,2703,3236,3235,3248,2662,2668,2674,2664,2678,2677,2666,2652,2844,2651,2672,2673,2845,2648,2637,2640,2647,3349,3330,3275,3276,3239,2680,3280,3247,3273,2144,2222,3113,8128,3265,3258,3319,3285,3320,3298,3191,3299,3343,3297,1696,1683,1700,1041,1795,1773,1794,1799,1791,1775,1780,1762,1768,1722,1750,565,566,555,532,533,531,525,447,600,514,603,599,598,528,523,521,453,452,441,534,460,556,551,9263,9292,9322,9238,513,507,506,625,502,418,417,419,623,644,1948,1857,1879,1999,660,4027,4065,4022,4001,4002,3998,4019,3811,4007,3735,4008,3733,1855,1695,1803,1831,2179,1837,1876,1847,1836,1834,1821,1828,1825,2160,2166,2376,2168,3924,3922,325,3902,3761,3762,3751,3765,3763,3750,3777,3778,3775,3844,3780,3774,3779,3776,3385,3417,3367,3374,3421,3744,3771,3770,3772,3709,3710,3769,3768,3773,3745,2657,2655,2629,2631,2790,765,5912,3496,3497,2613,2622,4058,4086,4087,4091,4092,4093,4066,4072,4071,3739,3702,3700,3701,3449,2601,3406,3395,3397,2634,3479,3674,3678,4081,4096,4080,4095,3725,3712,3691,3688,3689,3696,3698,3692,3400,3399,3695,3718,116,113,1308,1158,117,109,8598,8383,8573,4381,4533,4539,4320,8318,8315,4562,4537,4536,4583,4290,4338,4292,4302,4590,4575,4281,4283,3806,3804,3805,3820,3821,3932,3956,3933,3934,3948,3930,149,150,4246,4270,2896,3307,2852,2849,2846,2847,2848,3877,2585,3878,2644,2575,2580,2579,3336,3339,3357,3358,3194,3183,3157,3300,2534,2974,3197,3181,1226,1109,939,881,879,915,980,965,963,1476,1478,1475,906,1477,968,967,964,942,987,7675,1439,1440,1438,7698,3126,3136,1418,1443,1461,3296,3141,3295,3294,3344,3359,3360,3152,1098,1026,1010,1022,932,936,931,1193,1313,1219,1253,1238,1248,1247,1184,1182,1143,1179,1246,1252,1249,1176,1114,1627,1224,1622,130,244,200,195,199,167,164,168,207,62,45,61,87,86,393,85,83,60,58,348,389,345,328,329,332,401,50,48,334,398,136,144,209,158,210,246,38,6236,6240,6297,6402,2060,2077,6301,6296,9361,9359,9536,9374,9372,8945,8943,577,596,597,529,5893,581,582,5507,5501,769,4044,4187,4188,4192,4191,4173,4146,3650,3648,3637,3624,4174,4175,3647,3565,4145,4049,4046,4047,4045,4034,4193,4205,4206,4202,4090,4201,4185,4069,4088,2231,1856,1853,1852,1865,1859,2234,2156,1843,2099,2078,2072,2474,2486,2683,8978,3021,8976,8974,8973,9195,9200,6242,6229,6215,6219,6230,6210,6213,2795,2700,2808,2782,2705,3019,3089,3250,3230,3237,3263,3262,2656,2661,2840,2679,2801,2803,2669,2650,2604,2639,2641,3351,3227,3078,3079,3226,3279,3278,3313,3311,2854,2841,2842,2889,2857,2211,2212,3121,3123,3267,3112,3259,3260,3261,3109,3098,3096,3099,3125,3324,3323,3346,3318,1710,1687,1711,1698,2002,1717,1716,1712,1715,1714,1771,1770,1043,867,1110,1774,1694,1703,1850,1704,1864,1874,1877,1772,1796,1833,1797,1754,517,495,518,526,436,435,448,604,614,530,515,516,464,451,465,442,552,553,457,554,538,6290,6287,6291,6415,6285,8941,6160,9221,6162,9533,8937,8996,9364,9324,9242,9365,9319,421,411,412,415,694,414,622,653,472,432,479,488,487,498,1993,1997,4062,3729,3731,3723,4021,4020,4010,4009,1947,2174,2189,2188,2182,2183,1810,1846,1824,2193,3849,3430,3874,3882,3428,3755,3915,3895,3757,3758,3921,3856,3918,340,3752,3847,3857,3858,3859,3863,3971,3967,3766,3764,3767,3840,3952,3839,3791,3797,3786,3787,3796,3802,3822,3803,3827,3828,3795,3826,3830,3829,3439,3389,3699,3694,3379,3705,3371,3373,3376,3377,3384,3366,3419,3364,3707,3708,3706,3372,3365,3420,3375,3378,3784,3783,3788,3747,3746,2625,2632,2793,827,612,841,774,4203,4195,4196,4194,4097,3468,4101,3488,2619,2621,2686,4107,4068,4012,4067,3732,3798,3711,3704,3445,3408,3457,3456,3390,3396,3393,3398,3404,4076,4077,3734,3724,3726,3737,3713,3690,3686,3683,3684,3680,3682,155,208,4358,146,151,148,8707,8725,8704,8703,4343,4538,4335,4321,4340,4584,4289,4578,4286,4285,4579,4282,3813,3809,3808,3814,3816,3815,3817,3818,3950,3836,3838,3949,4244,147,2898,2895,2877,2919,2548,2549,2850,2563,2642,3875,2593,3306,3305,3212,3302,3193,3342,3166,3168,2899,2560,3210,2903,3185,2550,2554,8267,8305,8300,8276,3171,3196,1641,1230,1322,1258,1173,955,950,958,962,979,984,981,899,976,949,951,953,977,6683,6650,6682,6567,3133,3289,3128,3345,1441,1462,1470,1473,983,1416,3293,3292,3151,3142,3150,3144,3139,1028,1030,929,1031,928,1681,945,921,925,926,934,930,1032,858,1104,927,8236,8234,8235,1315,1223,1144,122,1197,1244,1245,1196,1215,1175,1199,1201,1505,1303,1178,1241,1240,1208,1619,1221,166,165,201,53,42,64,43,63,55,52,84,89,93,92,279,57,326,330,397,335,214,74,213,219,204,211,174,218,172,173,159,153,115,205,203,189,190,202,182,276,31,7,30,25,248,32,3,187,75,33,34,66,76,36,6239,6221,6220,2693,6231,2217,6170,6171,9210,8958,2064,2067,9180,9215,9212,574,595,579,5504,762,759,772,3618,4043,4182,4042,4181,4180,4179,4190,4176,3636,3625,3641,3644,3640,3642,3646,3628,4177,3645,3581,3652,3633,3577,3615,4144,3651,4037,4172,4070,1875,2202,2201,2157,1827,2155,2093,3086,3085,9199,6185,6196,6248,6227,6241,6224,6199,2694,2692,2783,2798,2698,3080,3229,3039,2811,2809,2810,3232,3082,3083,2706,3013,3016,3035,2761,3087,3231,3234,3228,3238,3251,3249,2675,2838,2667,2839,2858,2837,2833,2836,2859,2663,2676,2802,2805,2670,2649,2597,3329,3328,3332,3333,3326,3314,3051,3050,3041,3277,3310,3312,2872,2868,2870,2893,2871,3119,3118,3117,3264,3255,3257,3100,3094,3124,3321,3290,1684,1884,1720,1713,1756,922,920,918,868,866,852,1851,1860,1706,1849,1835,1830,1798,1757,519,494,496,527,493,454,537,458,6164,6279,6282,6286,9050,9534,8942,9176,8939,540,9235,9531,9299,9369,9370,9296,9302,6159,9366,9323,413,624,471,489,4064,4006,1994,2190,1809,2175,2176,3850,3845,3416,3873,3884,3891,3748,3423,3749,3424,3913,3892,3888,3867,3760,3427,3425,3848,3917,3953,3988,3841,3833,3794,3831,3825,3438,3392,3693,3370,3382,3369,3876,3383,3363,3743,3782,2633,2689,2688,2691,2785,2789,605,615,608,781,4170,4102,4099,3486,3672,3469,3677,4078,4079,3493,4162,4161,4163,3499,3501,3504,4166,4165,4111,4159,4158,4112,4160,4094,4109,4011,3728,3800,3799,3703,3450,3388,3391,3394,3736,3685,3401,3681,8606,8681,8462,4356,8378,4353,8376,157,171,142,152,8712,8726,8727,8577,8721,8593,8729,8748,8705,8753,4327,4339,3823,3812,3819,3807,3951,2897,2574,2568,2571,2572,2557,2546,2565,2567,2561,2590,2577,3219,3338,3211,3198,3192,3184,2533,8266,8275,8258,4318,1206,1242,878,954,916,917,902,901,1480,985,966,3127,3288,3129,1464,1469,1037,919,923,944,924,1033,1233,1229,1626,1262,1265,1237,1188,1195,1157,120,1156,1251,1200,1523,1218,1302,1220,1217,1198,191,194,197,206,49,54,94,90,91,193,192,82,327,331,127,137,217,145,79,188,160,251,35,27,26,70,67,65,2695,8955,9184,2065,9227,9177,8947,9219,575,576,5503,763,3557,776,4041,4189,4178,3635,3643,3578,2152,9190,6257,6176,6198,6216,2780,2800,3084,2779,3037,2778,3034,3090,3081,2638,3350,3327,2834,2832,2826,2804,3053,3077,2830,3040,3225,2875,3223,3103,3256,3108,3322,952,940,853,849,1044,865,1769,1755,524,520,497,466,476,6280,6264,6262,6281,8998,9035,9373,8940,6288,6420,9532,9234,9362,449,689,431,473,4005,2178,3422,3906,3981,3886,3866,3860,3969,3753,3418,3846,3916,3834,3790,3793,3789,3380,3413,3412,3368,3742,3781,2784,2787,616,613,843,609,766,767,779,835,4169,4168,4164,4151,4104,4157,3516,4117,4100,3489,3517,3510,4119,3523,3506,4123,4122,4121,3519,4106,4108,4204,3727,3738,3801,3381,3679,3402,8604,8237,8459,8231,8439,8680,8437,8232,8686,4386,8708,8690,8691,8689,8695,141,140,154,8384,8600,8730,8571,8747,4326,4325,4382,4346,3810,2564,2566,2541,2573,2540,2542,2543,2562,3337,2917,2918,2900,2553,2536,2529,8270,8277,871,872,1204,1203,961,960,910,909,896,1299,1536,891,1543,897,957,1471,978,1463,1035,851,1194,1192,1250,1239,1172,875,1500,1501,1504,1243,80,198,196,46,123,138,175,108,212,77,16,13,11,181,17,180,186,2,179,4,6197,8946,9226,787,768,3550,838,3649,3614,3560,4147,4148,4142,4149,2203,6253,6246,6247,6256,9204,6204,6174,2807,2764,2707,2765,2812,2813,3038,2806,3052,2829,2864,3101,3291,880,861,864,857,491,492,478,477,450,6277,9300,430,429,470,3911,3974,3861,3862,3759,3754,3426,3832,3792,617,4138,4139,4131,4140,4130,4150,4167,4113,4098,4105,4115,4118,4155,4154,4153,3492,3509,4110,8692,4376,8696,4524,2539,2901,2558,2556,2559,2569,2544,2905,1519,1301,959,914,1300,1210,888,1542,1489,1487,850,1185,1170,883,1526,1533,1538,1530,1529,81,126,139,78,12,0,18,9298,585,3549,3555,780,834,3634,4143,3558,3613,3562,3563,4171,6258,2711,2704,2777,3131,3908,593,619,828,833,4137,4133,4152,4114,4116,4156,4136,3661,3660,8685,2902,2555,882,870,873,876,884,890,889,1205,1214,900,1546,1540,1541,1544,1537,1532,1527,14,712,3605,3542,3552,3571,3553,4141,3653,3593,4128,4132,4126,3659,3658,3609,2815,580,618,836,824,4103,3670,4120,4135,4134,3610,8684,913,911,886,887,1539,1531,1520,1502,1535,3598,3596,3606,3599,3534,3547,3533,3654,3612,3655,4129,4124,782,912,1488,1528,1534,3607,3543,3657,3656,4125,1503,4127]},{name:"mesh_7_1",count:6641,indices:[15,153,3260,369,5252,6541,6424,6562,6608,6569,5250,6590,155,174,3504,6580,3396,6495,3398,6559,6557,6558,6532,6555,6563,6486,6564,157,159,156,6451,6597,6613,6622,6619,6617,6614,4343,1447,4346,4392,1415,4071,3872,4067,3871,1232,1034,4228,4847,6497,6553,6552,6550,6549,6566,6492,6560,160,158,373,6591,6593,6626,6448,6612,266,253,434,4729,4731,4555,4551,4727,3270,3364,1361,1395,4203,1355,1576,1419,4399,1439,1398,4403,4402,4023,1413,5243,5238,4434,4349,5244,5548,5547,3228,4070,3963,3984,3986,1357,3987,1585,4229,3983,3978,3979,4200,6586,6583,6498,6508,6548,6568,6485,6476,6490,6491,6493,6489,591,562,590,370,169,6444,6447,6445,505,1897,504,507,508,753,354,506,523,394,393,395,454,463,398,413,416,835,402,6423,6430,6609,6449,6634,6446,6440,6631,6620,445,280,269,438,364,259,265,264,4728,3402,3399,4845,3571,3536,3557,3592,3593,5307,5329,5306,3265,3259,3262,3264,3433,3434,3606,3610,3611,1362,1458,1443,1459,1392,1363,1404,3908,3916,4215,4210,3907,4199,4207,4118,4111,4081,4075,4076,5245,5246,5247,3729,5601,3640,3250,3307,3299,5610,5549,5253,5254,5249,1622,751,1727,1725,735,519,517,736,520,1748,1740,1127,1193,1138,3914,3855,4280,4275,4218,4273,4271,4725,3874,3875,3889,3902,3904,3856,4037,4041,3974,3939,3975,4676,4754,4268,1581,1356,1291,1586,3988,1290,3981,6454,6456,6461,6462,2127,933,1046,911,1202,1204,1203,1749,6582,6465,6467,5098,6474,6472,1850,3563,3558,6516,6544,6540,6567,6481,6571,6576,6482,4642,4709,4710,4639,4537,4532,4711,6488,75,80,39,52,26,1486,376,387,388,161,163,385,386,449,371,380,368,415,199,175,176,171,1887,500,447,537,534,535,2340,839,410,399,390,418,205,586,404,585,551,2350,2154,1720,1718,1613,6610,6442,6621,268,271,263,436,439,831,435,442,381,251,255,250,261,256,260,249,258,257,244,245,248,4721,4320,5374,4732,4835,3527,3572,3529,3591,5310,5308,5134,3715,3560,3544,3549,3293,3286,3294,3258,3215,3269,5579,3312,3313,3325,3314,3311,3297,3582,3585,3579,3727,5524,3607,1350,958,959,1111,928,1064,1117,961,929,956,912,1373,1372,1390,1389,1460,1396,1442,4018,4019,4205,3938,3920,4209,4021,4472,4473,4431,4432,4430,5177,5188,5190,4344,4345,4408,4423,4428,4086,5300,5356,5290,5303,5301,4513,4512,4525,5265,5264,3576,3323,3316,3327,3330,5567,5604,3304,3221,3302,3218,5611,3340,3329,5256,3232,3220,5561,5248,1780,1730,708,1732,1764,757,737,532,530,666,667,766,672,705,1744,1180,634,1154,1751,661,677,660,613,4788,4787,4277,4764,4765,3910,4281,3915,4783,4766,4762,4772,4686,4219,4724,4291,4301,4302,4283,3873,4290,4288,4284,3901,4303,4306,4515,4044,4040,4030,4028,4032,4406,4059,5653,5647,3972,4698,4756,4758,4755,4201,3991,1032,1231,1261,1258,1022,1688,6594,6453,1716,1609,1715,1048,1055,1054,1053,953,1044,1051,1065,1062,1059,6584,6577,4657,6469,6478,3566,3446,3447,6535,6575,4650,4641,593,2146,596,698,76,38,78,141,148,2311,34,33,40,36,37,1512,65,70,190,2158,378,162,375,379,372,382,184,186,168,490,1910,498,528,270,273,277,830,456,471,452,391,384,842,2353,547,2342,401,411,377,2348,2173,2174,2330,2172,2310,2170,17,208,592,2153,2163,2168,1726,1724,6639,6439,6638,254,247,287,4335,4333,4341,5330,5331,5369,5366,4804,5373,4800,5371,4556,4802,4884,4881,4815,4877,4860,3575,5140,5152,5150,5497,5500,5499,3723,3714,3713,3667,3615,3628,3663,3653,3664,3666,3650,3665,5305,5179,5153,5298,3458,3457,3472,3547,3263,3266,3288,3298,3261,3502,3507,3496,3273,3272,3280,3268,3284,3287,3514,3754,3512,3431,3432,3295,3590,3636,5502,5509,3635,3600,3598,3601,3631,3632,3630,3649,3612,3605,3633,3609,3608,4875,4876,893,942,2436,1118,1119,907,908,1366,1365,1381,1110,1399,1451,1471,1534,1536,1526,1405,2439,1530,1470,1385,2447,1401,1463,1391,1445,4204,4221,4208,5233,5232,5234,5231,5220,5207,5216,5154,5155,5173,4440,4439,4438,4436,4468,4469,4470,4433,4435,5230,4421,4425,4429,4426,3894,3885,3896,3898,4084,4519,4503,4078,4467,4460,4466,4511,4510,5240,5241,5271,5269,5518,5171,5266,5262,5533,3583,3216,3301,3339,3341,3333,3310,5259,3227,1625,668,1754,1753,723,725,739,738,518,774,687,600,2139,602,599,767,1743,1742,1721,1141,1072,1124,1752,1199,1200,1201,1069,1066,607,610,658,1537,1532,1538,1523,1507,1128,1139,1553,4712,4793,4789,4305,4798,4796,4716,3911,4785,4767,4768,4771,4773,3919,4220,4311,4723,4720,4307,4310,3876,4289,4285,4295,3888,3891,4286,3897,4304,4282,5646,4496,4499,4514,4508,4509,4407,4492,4031,4042,4043,4026,4029,4027,5656,4036,3973,4695,1830,1810,1828,1846,1222,1250,1255,1221,1224,1035,1037,1687,1705,1211,1708,1604,1711,1713,1606,6589,6459,6458,1050,954,1206,1215,1719,1058,1061,1063,4643,5102,4659,6470,6479,6517,4644,779,102,104,103,100,77,2308,2147,138,47,49,27,1508,1509,1504,1521,1525,1506,1479,1478,1480,1482,22,24,142,1556,1555,1546,614,611,1570,1565,1566,1510,68,83,1488,1487,1503,1490,57,2334,0,3,1,2313,193,194,209,164,374,165,383,181,276,477,298,1904,1899,1901,499,543,561,546,262,828,461,468,450,844,548,407,392,166,417,2155,2312,210,589,1723,246,274,4339,5368,3660,3659,5372,4832,4824,3658,4738,4818,5135,5145,5142,5288,5167,3647,3616,3625,3626,3662,3627,3654,3661,5289,5182,5148,4520,4518,5576,4087,5196,5186,5195,5199,4461,5194,4456,3487,3477,3546,3461,3460,3470,3468,3478,3548,3484,3528,3535,3526,3522,3525,3445,3451,3562,3474,3282,3289,3291,3300,3290,3271,3283,3511,3495,3494,3462,3505,3509,3296,3594,3599,3613,3603,3596,3724,4841,1354,1114,1120,1382,1450,21,1527,1473,1466,1113,1400,1446,1453,1457,5239,5222,5229,5178,5172,5275,5169,4471,4437,4424,3893,4506,4507,4082,5276,5170,5516,5280,5520,5508,3326,5526,5532,5530,3245,3242,5596,5260,5258,5257,3244,3226,3234,750,742,598,699,700,769,704,703,673,683,675,662,544,776,652,651,659,646,1794,1797,1195,1792,1789,1759,1184,637,1192,1194,1074,1750,1071,604,605,606,608,1542,1524,1535,1545,1547,4715,4714,4717,4795,4792,4778,3905,4757,4784,3883,3884,3899,4319,4493,4418,4490,4417,4416,4405,4410,4476,4475,4474,4038,4411,5657,3977,1832,1856,1251,1851,1260,1808,944,1036,1209,1831,1045,1605,1213,1217,1212,1056,1042,1223,4655,6579,4654,2142,121,109,112,99,110,81,2149,140,143,137,14,35,31,29,1522,1505,1483,1485,1484,1481,25,72,1166,2338,1156,2337,1571,85,1517,188,192,272,293,1905,361,545,470,460,283,462,459,167,1722,4116,5363,5335,5334,4325,5539,3648,3656,3655,5332,5333,5181,5180,5001,5575,5574,5184,5203,4462,5187,5191,5200,5192,3476,3486,3493,3488,3459,3483,3479,3450,3449,3267,3292,3281,3430,3464,3463,3513,3595,3589,4823,931,909,937,895,1125,1456,1474,1477,1476,1472,1465,1529,1386,1112,1441,5274,5272,4504,4517,5507,5523,5603,3580,5564,3241,756,777,597,125,685,684,773,105,118,701,676,531,650,635,639,641,665,2256,1783,1788,1784,1785,1196,1800,1073,2184,678,2186,1543,1533,4718,4790,4722,4786,3900,4488,4479,4491,4494,4414,4409,4415,4419,4480,4701,4266,3976,1834,1849,1252,1226,941,949,943,1057,1216,952,951,1041,129,2192,97,82,19,2164,13,2332,6,7,32,609,2190,618,1557,62,93,98,66,88,191,286,297,487,1907,522,541,529,533,455,4114,5361,5311,5157,3718,5506,3720,5197,5013,4465,5004,4527,3475,3469,3467,3519,3753,3499,3491,3480,3597,940,939,1454,5237,5273,4502,4524,5534,3235,3240,674,664,644,1786,1795,1539,1548,4542,4779,4489,4478,4495,935,1040,95,9,11,20,144,135,12,8,185,2051,91,1558,1520,1511,87,86,488,289,542,521,5358,5156,5496,5505,5008,4464,3471,3466,3757,3752,3489,3523,938,894,3243,5527,5563,663,1544,182,2049,1561,1519,84,288,284,5162,647,1559,486,5161]},{name:"Object_13",count:341,indices:[125,221,200,214,218,212,211,213,223,224,308,280,193,195,74,131,328,331,80,85,321,204,210,207,217,219,216,215,197,199,189,250,162,253,165,257,256,167,169,160,163,337,142,64,333,70,332,138,139,309,95,99,306,192,186,42,182,273,225,312,319,123,124,229,88,132,130,134,128,126,327,239,323,203,289,209,305,104,303,291,247,248,246,155,6,8,242,19,21,16,164,168,170,158,161,135,65,26,140,136,274,278,279,283,285,115,260,172,318,227,122,314,84,129,287,206,114,153,154,249,33,264,176,37,156,150,144,236,24,235,340,334,66,143,44,190,173,175,185,180,181,269,179,296,282,13,41,228,94,78,294,152,151,149,262,31,146,48,106,111,59,55,281,241,148,36,46,298,286]},{name:"Object_14",count:2246,indices:[1680,2179,166,2113,2100,1452,18,491,493,1005,415,1841,2018,1843,2017,2015,350,500,498,20,528,996,998,526,488,854,1002,489,436,431,1836,1128,1126,1712,1711,1710,1871,1304,2114,2171,1298,1269,1332,1297,1287,1333,1330,1530,1007,1211,1192,1181,1212,860,858,853,842,497,423,194,1829,1830,21,1875,1675,1753,1813,1864,1321,1318,1122,1205,1230,1204,1210,994,348,186,445,446,413,451,2187,447,218,178,210,201,1928,2180,1789,1812,2016,1320,2030,1894,1893,1878,691,683,715,1193,1538,1611,1619,1623,219,417,183,246,189,190,427,1679,1689,1708,1676,2172,1933,1865,1852,1096,699,920,922,1150,1156,1157,671,665,664,1026,1472,1473,1509,444,169,167,211,426,2029,1531,695,928,950,1155,1151,1275,675,954,949,943,694,936,1539,688,921,952,716,931,704,1066,932,951]},{name:"Object_16",count:112,indices:[3,12,87,55,7,30,20,16,78,90,93,50,91,23,99,24,107,106,100,33,6,43,96,29,110,41,52,39]},{name:"Object_22",count:8,indices:[3,1,0,2]},{name:"Object_23",count:35,indices:[25,2,3,33,21,19,18,4,34,31,13,24,30,15,23,26,20,1,0,32,16,17]},{name:"Object_24",count:372,indices:[32,344,340,256,352,258,260,45,370,71,349,346,280,282,310,371,308,328,137,129,120,334,50,158,306,48,47,74,54,51,205,252,235,259,289,365,292,369,302,166,165,319,323,138,152,115,119,44,43,35,46,55,56,72,326,213,357,227,257,237,230,236,281,273,151,130,132,139,99,199,198,294,107,113,33,49,58,191,278,285,218,149,116,143,146,168,368,93,131,23,73,207,210,211,274,342,150,102,109,104,112,34,192,202,214,228,229,103,108,206,217]},{name:"Object_28",count:15080,indices:[15061,10660,10827,15077,12746,15075,15059,15058,15062,11448,11445,11442,14985,12420,12382,15056,10435,13845,15064,15078,10643,10695,12188,15042,12187,10839,12734,15069,11094,5678,11269,11586,11585,14899,12117,12150,11875,11323,12540,12541,15004,12552,12623,3650,2088,13161,126,82,11503,14918,11662,12114,12112,11562,12275,15043,12273,12060,12267,12268,3509,12272,6684,5988,896,14613,12413,12407,12422,12522,598,619,14788,4233,4283,4282,123,2090,3814,11633,15033,11628,11500,11629,11598,11221,11272,11384,12296,12184,12304,12300,12308,12248,12144,11267,11268,5681,1614,6699,10202,11968,11902,12266,11965,12258,12535,15052,4284,4343,4101,3803,9221,9205,3790,11635,11603,11590,11587,11627,11600,11602,11059,15028,10993,11299,10996,11300,11573,11440,12345,12299,12245,11555,12386,14988,12395,11266,11126,12397,14989,10249,7322,10241,14511,13325,1008,12795,897,1011,13897,11732,12527,14673,14148,13160,9218,5576,9266,4999,9210,1615,3804,3817,11597,11289,11057,11092,14905,11567,12255,12254,12249,11982,5680,14162,5914,4783,5933,5986,5959,7324,13851,5926,6695,6265,6263,1012,14169,79,9613,11975,11794,11796,11962,11961,11830,11825,14939,76,3427,3426,11960,3418,4217,4223,4288,4245,1062,141,2102,10,7,9209,9240,9223,5674,13850,5666,7661,3786,3744,3781,3811,3743,11730,11090,11095,11097,4846,4876,5099,13565,5879,6296,6685,11981,11680,15035,11709,11673,11952,3507,433,436,614,444,14600,4207,13251,157,4240,4342,148,150,1064,134,62,75,66,64,10240,10245,5676,9208,7646,7794,3784,34,15019,13998,5897,11827,11950,15055,4239,4243,3177,3568,3502,3176,3565,3419,3577,446,473,4210,152,4200,35,36,4365,4361,77,143,4844,7720,7786,5673,6094,7792,4777,5668,11121,11278,11274,11275,13856,12534,11803,11801,11798,11799,4366,4242,13136,3491,3503,440,472,13274,95,1054,147,12759,7672,10259,13997,4373,3487,3578,117,60,59,63,7783,6092,13414,13861,3490,37,58,12760,7699,6044,13871,12929,7788]},{name:"Object_33",count:529,indices:[66,88,87,65,164,157,165,524,513,70,522,210,525,209,213,527,68,260,152,320,89,182,63,350,483,194,319,387,280,381,394,261,430,515,64,90,93,37,404,493,503,504,228,486,528,243,188,284,222,193,205,203,306,197,41,238,488,510,295,39,472]},{name:"Object_36",count:4904,indices:[3788,2601,3794,4232,2021,4892,76,19,408,4069,1915,325,449,471,4456,4749,4877,4887,447,108,3809,3808,3803,3796,2031,202,4114,4116,4173,4873,4745,3917,3994,4462,4003,3987,4465,4867,4354,4747,3720,112,92,459,534,505,488,421,3807,3797,4410,4167,497,4870,4866,4875,3789,3915,3817,391,3719,198,74,509,388,333,4488,78,229,226,377,4090,4164,4023,3879,3916,3956,4063,4217,4193,21,73,101,99,326,4417,228,359,4199,496,3911,3868,4065,4184,177,185,201,95,4473,367,4169,3893,3894,4476]},{name:"Object_37",count:90,indices:[11,63,85,64,59,68,81,86,79,58,75,88,77,67,60,61]},{name:"Object_38",count:50,indices:[16,14,15,20,45,30,25,32,22,47,6,34,9,27,29,26,19,2,0,43,13,49,41,46,3,4,12,7,36,35,48,5,38,33]},{name:"Object_40",count:64,indices:[52,13,17,40,37,1,63,38,25,24,31,22,34,61,0,8,5,6,20,14,56,23,35,4,19,51,9,12,33,55,11,10,60]},{name:"Object_41",count:212,indices:[24,168,13,5,6,4,161,166,79,80,50,73,53,52,41,194,207,204,189,30,32,31,184,98,54,130,8,142,78,39,37,190,29,72,68,67,69,70,81,56,96,106,104,105,66,60,11,102,25,182,27,211,191,74,35,36,55,57,95,62,127,124,71,193,58,61,65,9,59]},{name:"Object_44",count:40,indices:[13,32,12,9,27,7,29,14,18,15,1,21,33,24,19,17,30,10,35,6,16,28,2,26,4]},{name:"Object_47",count:668,indices:[510,338,4,176,501,167,12,346,38,177,339,446,577,2,341,342,3,340,0,345,13,14,344,15,63,504,505,182,506,603,507,180,169,23,22,509,178,508,652,600,53,445,433,77,87,343,662,179,312,181,332,331,333,307,219,206,651,653,655,163,55,254,645,553,477,476,489,18,20,279,293,412,410,484,517,242,221,305,218,207,650,612,39,166,565,555,400,409,397,65,75,267,330,663,315,313,230,658,659,161,486,488,576,479,543,541,637,667,519,318,278,281,326,291,187,257,624,245,422,647,531,528,320,625]},{name:"Object_48",count:3520,indices:[456,1162,472,2459,726,1392,2192,459,2229,2189,2882,1121,1122,281,267,283,2419,284,2881,469,2219,2191,2378,728,2434,753,2405,2432,742,294,2351,335,2,315,0,316,1296,1258,1256,3286,3340,1204,3369,2894,3396,3394,1201,1242,470,378,2271,2273,2272,2300,2297,2287,2270,2210,2214,1784,2236,2216,2257,2217,2243,2237,1187,1150,2475,2481,2478,3197,254,770,2446,769,1407,743,916,1414,1439,750,1365,1363,3218,1411,1412,269,285,3326,3285,3342,3339,3352,1231,1255,1271,1275,1245,3314,3312,1229,2922,2898,2896,2883,3410,1214,3367,1252,973,972,1244,1217,3177,1336,1350,3231,3206,324,321,2324,2327,322,2337,351,342,312,340,313,348,336,337,415,2244,405,2246,442,446,432,2338,2208,2260,2259,2235,400,399,396,394,422,1870,1869,2456,3199,1822,3200,2213,2718,2716,3204,3220,3260,3258,1284,2748,2747,2682,2749,2721,2759,2731,2750,240,80,119,291,1409,1408,1381,1406,1380,1379,1382,1354,1384,1282,1309,3328,3330,3331,3302,3333,3334,1241,3354,1269,3315,3368,3366,3363,3364,2757,2698,2712,2901,2904,2929,2880,2899,1191,1192,1176,1144,26,956,962,888,1249,1278,1199,1224,1195,1198,1163,1165,1166,1138,1169,958,1228,1247,1219,1243,1220,3191,3272,1378,1338,1352,343,323,388,310,429,443,477,2314,2315,2316,2365,2343,2205,2284,2286,2241,2263,2262,2233,2232,2261,398,397,425,417,402,418,416,1326,2746,2744,2449,1820,2453,2482,3301,3304,3276,3303,2730,1854,1853,2762,3417,2723,2758,2722,2422,2424,2421,286,72,117,116,258,289,259,986,985,1441,82,747,1390,1413,1361,3393,3414,3416,3391,3355,3380,3389,2706,2760,3358,3362,1193,971,960,970,961,967,968,1147,1197,1168,999,998,93,1222,3192,2684,3274,3277,3249,3248,3279,3282,3281,3280,1355,445,448,449,475,476,454,2313,2455,1814,2366,2396,2353,2367,2340,2371,2206,2289,89,88,426,375,389,365,419,421,20,22,91,450,1325,2736,2735,2733,2266,2264,1790,1859,1794,2320,1855,2737,1792,1857,2674,2743,2742,2745,2741,2448,2451,2480,2678,3194,3193,3195,2751,2754,2755,3335,2694,3300,2728,2727,2761,2720,2452,288,772,773,776,282,987,345,8,85,745,1386,1360,983,982,3409,2900,3412,3383,3387,3382,3359,3357,3385,1188,969,984,1277,1172,1001,1226,886,3247,3223,3251,3229,3226,2686,3307,1357,479,963,2454,2395,2426,2394,2317,2319,2291,364,395,367,369,372,90,990,991,391,423,451,2739,2734,1786,1858,1856,2268,3227,3198,2752,2756,76,264,118,260,751,256,994,995,92,81,979,980,4,988,1387,981,2902,3384,3381,3361,1174,1189,1298,1274,1273,1276,1002,3250,3246,3225,3308,3306,1866,1865,1867,1868,2393,2318,2322,1800,2321,1860,1861,1802,338,339,346,2740,3196,261,774,997,992,894,974,978,977,976,989,86,83,1177,1190,1272,3252,2753,1328,1300,904,2403,2399,2397,2398,2376,2370,2372,1806,1804,1863,2373,2345,1862,262,70,993,1280,975,87,84,1324,1327,1306,1332,1333,1330,2428,1810,1808,1864,1301,1358,1305,1303,1331]},{name:"Object_49",count:1376,indices:[1364,686,1029,1027,238,711,710,1064,1066,1162,1062,690,545,366,435,344,230,1024,345,1365,776,778,26,716,367,80,88,241,134,712,714,820,715,246,822,1158,689,431,434,232,233,234,236,687,483,132,130,244,1057,195,824,1112,1111,1156,557,555,475,239,235,86,242,1059,1058,547,250,1061,548,556,554,534,171,432,240,243,549,249,166,537,167,551,550,164,248,553]},{name:"Object_50",count:2640,indices:[46,1966,646,1038,785,1122,1361,2541,1040,2589,2585,42,1306,1302,1308,1968,1259,955,1045,1363,1358,1356,2197,1034,1313,1311,794,131,129,1204,1208,1698,51,1700,48,1971,1703,2021,602,2018,2016,2358,2399,2360,1449,1445,2109,2012,1780,1782,1826,2441,2432,2438,1257,136,550,1262,1819,1821,1043,2534,1120,2277,1125,2487,2490,1155,791,1213,874,1973,297,2594,1787,2105,2481,2114,2111,2492,2188,2397,2365,2363,2404,1824,555,553,1776,212,219,593,957,960,291,300,962,134,1785,548,2530,2194,2280,2275,1164,1127,789,872,2485,1159,2116,2436,2023,1705,217,597,208,604,295,302,544,1815,2199,2192,2282,2539,2536,2271,1161,1166,214,599,1694,642,1352,1116]},{name:"Object_51",count:22684,indices:[19191,13440,2098,19193,7766,19197,16454,19246,5112,7824,13439,2153,7744,7852,19219,7905,7888,7914,7912,7917,7769,7768,7925,2229,13418,2122,2120,2220,2217,19237,7832,19241,19357,5114,2150,2148,7823,7885,7879,2195,7841,19232,19230,7837,2115,2111,13426,2243,2126,13523,2128,13424,2219,2225,2193,7921,2149,2151,19287,19243,7735,7948,6995,7830,7835,19235,7764,18687,18686,19215,19204,7755,19208,7890,7891,7876,7866,2196,7420,7903,13438,13437,2097,2100,7247,7927,7251,2256,2238,2232,2239,1612,2108,2242,2106,2109,2117,1976,2212,2211,2002,2207,2208,2129,2131,7902,1908,2198,13495,13415,7732,19356,19190,19349,19221,7747,19213,7749,19210,19199,7760,19335,7758,2201,7864,7867,7845,7844,7846,7843,19226,7952,13597,19348,13431,2104,1594,1577,1747,2222,2241,2262,1828,2233,2252,2251,2244,2230,2226,1985,2205,2213,2139,2142,1896,1904,13508,13497,19294,13494,13519,13517,13420,13416,7836,6917,6918,7740,6996,7833,7831,7829,7926,19355,19327,19328,19322,19338,19334,19234,19303,19320,19088,19298,19310,19313,19223,7848,7099,7746,7858,7853,7753,19211,18832,19202,19209,7854,7950,7951,7164,7957,7954,13598,13435,13429,2221,2240,1746,2247,1576,1829,2237,2231,2133,2137,13514,2209,2140,2215,2200,13512,13501,13538,19289,13546,13530,13533,13525,13529,13417,13524,19372,19373,19370,13405,19277,13620,13627,13621,13619,13528,7875,7013,1325,7734,7349,7930,7924,7345,7330,7765,19222,19220,18839,19324,19325,18907,19336,19157,18521,19337,19315,18863,19299,19300,19309,19305,19068,19302,19001,7959,7857,19224,7938,7939,7936,7754,7756,19317,19330,19201,7202,6986,6988,13436,2245,1814,5116,13506,12585,16450,19156,19154,12685,12768,13613,13425,13607,13427,13609,12757,13403,19280,13622,13628,13526,19361,13513,19360,12659,18771,12842,12835,12868,7826,7018,7757,7947,7945,19312,18831,19339,19293,19292,19078,19301,18417,13544,7197,18915,13595,13020,13015,2234,2144,16452,13503,13406,13534,13612,13408,13502,19276,13626,19346,13610,19288,19286,19290,19291,18988,7097,7745,7862,7859,7861,19344,19329,13016,13617,13615,12589,13505,19281,12667,13404,7863,7942,13007,13616,12656,13412,19283,12684]},{name:"Continuous_rear_valance",count:6084,indices:[3472,3466,3624,430,432,424,502,2608,2694,2610,2680,2766,2616,2458,2532,3550,3474,3396,3390,1444,1522,1450,1446,1438,2604,2380,2542,2548,2550,3618,3690,3532,3792,3694,3718,3238,3388,4540,4468,4542,436,514,520,360,354,1483,1405,5616,1561,3802,3796,3838,3880,2758,2602,2526,2598,2448,348,480,394,558,2454,2554,2640,2482,2700,2464,3540,3688,3762,3616,3684,3556,3804,3312,3240,4474,4470,1452,2496,1054,2574,438,444,522,366,276,220,306,228,150,2183,64,76,2250,2178,2112,1014,1516,1432,1680,466,1488,3760,3588,1992,1906,700,5849,3886,3564,3642,894,820,822,580,732,658,588,672,2994,2920,2922,2844,2670,2592,2664,2674,4464,1374,1368,1132,1126,1210,346,112,198,2998,4170,3004,2242,2328,2386,2290,2206,2280,2472,2314,2568,32,38,2706,2784,2476,2698,564,498,5037,3074,3076,3702,3606,3528,3600,3454,3456,3442,3436,3370,3634,3174,3100,3098,1686,3154,3228,3304,3214,3300,3216,3150,3510,1996,4534,4530,4608,4482,4560,4408,4324,1362,2364,2514,528,612,534,40,204,282,130,5226,136,58,142,214,74,2122,2256,2116,1908,1980,1674,1752,1426,1348,1422,1504,292,378,304,538,540,1642,1720,1728,934,6005,5928,1798,3766,3832,3756,5694,850,772,924,928,1717,3970,3892,3888,990,916,832,846,768,840,918,3490,3654,3496,3478,574,730,804,978,984,744,828,670,666,754,906,2836,2830,2770,2662,2748,2746,2596,4318,4306,4300,4458,1216,1140,2718,342,4572,4650,4498,4420,4564,2320,2326,2308,2316,2404,2490,642,490,412,340,256,4596,4438,4512,4590,4594,391,4506,4954,4956,4950,3086,3082,4966,4972,3594,3438,3708,3324,1608,1614,1758,1540,1624,1546,1692,3462,3306,3378,5016,4944,4938,4930,4792,4948,3052,3138,3222,3068,3062,4932,4924,4780,4558,4782,4708,4536,4770,4768,4776,4684,4762,4330,4332,4246,4174,1122,1200,1360,1284,2442,2586,606,604,2332,2417,44,132,288,232,1171,1022,1104,1110,1188,1272,1194,388,2244,2274,2422,1822,1824,1896,1666,1588,1740,450,690,756,598,1420,1486,1492,1338,1260,1254,1570,1806,1734,1884,1656,1873,6082,1732,1738,3598,3592,1960,3906,3828,1966,1968,1962,5850,3904,1012,1006,3977,922,3814,988,3738,3816,3648,3646,3104,4978,576,816,982,3810,3640,4086,4084,2772,2820,2814,2898,2904,2752,2812,4476,4312,4314,1380,4524,1066,1064,1144,1152,1138,2652,2658,2736,396,2632,114,26,2566,4360,4486,4494,4584,4582,4656,4668,4746,2398,556,486,334,4354,552,3246,5040,4882,4888,3092,3364,3286,3400,1684,1836,1618,4606,4680,1710,1788,4758,3292,3208,1998,1924,1840,3354,3210,4840,4914,5007,3144,4942,4846,4866,4714,4774,4716,4552,4692,4168,4242,4320,1048,1116,2340,1278,1434,1350,1344,2520,2339,126,1028,2268,2106,1018,2110,1182,1266,1252,462,5459,1330,5537,2352,1040,2500,3666,3744,1974,1510,456,694,762,1578,1336,1644,1582,1876,3834,3670,1810,3899,5064,4906,4900,868,870,942,808,972,3582,3652,4080,2862,2868,2946,2860,2896,4228,4374,4296,1396,1474,1632,252,168,166,2716,2794,2800,2722,2710,2878,3041,2963,22,180,186,96,108,2807,184,2644,4198,4120,4192,4445,318,4350,4356,4264,4422,4672,547,4835,4660,4818,4744,726,718,640,712,708,703,706,330,781,469,550,3088,4720,4732,4890,4816,4642,4648,3406,4894,1750,1834,1842,1792,3360,3124,1702,5013,4704,1356,2261,2254,5225,1176,5382,2428,2278,2350,616,1414,1954,3110,874,946,882,966,964,3431,970,3660,2902,4236,2776,2872,3030,4194,3006,2890,2808,1150,1158,1302,1308,1536,1548,1306,1464,1312,1234,4302,4224,4138,4452,1324,1558,178,174,14,270,4126,3034,4133,4211,4,3036,4284,79,313,157,240,4416,4428,4830,4902,568,634,244,784,5069,4878,4654,3348,3190,3418,3492,3252,3258,3250,1866,1780,1864,3282,1938,1932,2016,1696,4618,4546,4630,5303,2346,2356,3186,3264,3197,876,960,976,2988,4158,2934,4122,4180,4182,4096,2964,4056,2968,4230,4146,1320,1156,1458,1390,1542,4140,1402,90,162,4282,4908,408,322,4884,3353,3424,3340,3402,2014,3120,4992,1770,2344,3112,937,4074,2928,2932,2944,4266,4338,3010,3016,2886,4152,1246,1318,4134,4806,3342,3408,3426,2010,3126,4995,4998,1942,1848,2974,4116,2938,4108,4212,1164,3256,3276,3044,1846,1774,1242,3334]}];var Dh=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),y=0;y<p.length;++y){var v=p.charCodeAt(y);x[y]=v>96?v-97:v>64?v-39:v+4}for(var _=0,y=0;y<p.length;++y)x[_++]=x[y]<60?n[x[y]]:(x[y]-60)*64+x[++y];return x.buffer.slice(0,_)}function c(p,x,y,v,_,E,R){var A=p.exports.sbrk,S=v+3&-4,M=A(S*_),I=A(E.length),L=new Uint8Array(p.exports.memory.buffer);L.set(E,I);var F=x(M,v,_,I,E.length);if(F==0&&R&&R(M,S,_),y.set(L.subarray(M,M+v*_)),A(M-A(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(y){var v=y.data;x.pending-=v.count,x.requests[v.id][v.action](v.value),delete x.requests[v.id]},x}function m(p){for(var x="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+c.toString()+g.toString(),y=new Blob([x],{type:"text/javascript"}),v=URL.createObjectURL(y),_=u.length;_<p;++_)u[_]=f(v);for(var _=p;_<u.length;++_)u[_].object.postMessage({});u.length=p,URL.revokeObjectURL(v)}function b(p,x,y,v,_){for(var E=u[0],R=1;R<u.length;++R)u[R].pending<E.pending&&(E=u[R]);return new Promise(function(A,S){var M=new Uint8Array(y),I=++d;E.pending+=p,E.requests[I]={resolve:A,reject:S},E.object.postMessage({id:I,count:p,size:x,source:M,mode:v,filter:_},[M.buffer])})}function g(p){var x=p.data;if(!x.id)return self.close();self.ready.then(function(y){try{var v=new Uint8Array(x.count*x.size);c(y,y.exports[x.mode],v,x.count,x.size,x.source,y.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:v},[v.buffer])}catch(_){self.postMessage({id:x.id,count:x.count,action:"reject",value:_})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,x,y,v,_){c(r,r.exports.meshopt_decodeVertexBuffer,p,x,y,v,r.exports[l[_]])},decodeIndexBuffer:function(p,x,y,v){c(r,r.exports.meshopt_decodeIndexBuffer,p,x,y,v)},decodeIndexSequence:function(p,x,y,v){c(r,r.exports.meshopt_decodeIndexSequence,p,x,y,v)},decodeGltfBuffer:function(p,x,y,v,_,E){c(r,r.exports[h[_]],p,x,y,v,r.exports[l[E]])},decodeGltfBufferAsync:function(p,x,y,v,_){return u.length>0?b(p,x,y,h[v],l[_]):a.then(function(){var E=new Uint8Array(p*x);return c(r,r.exports[h[v]],E,p,x,y,r.exports[l[_]]),E})}}})();var Wc=class extends Wn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Bh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Qh(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=ui.extractUrlBase(e);a=ui.resolveURL(l,this.path)}else a=ui.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ys(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===ep){try{a[Ye.KHR_BINARY_GLTF]=new eu(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Ye.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new ou(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ye.KHR_MATERIALS_UNLIT:a[u]=new Oh;break;case Ye.KHR_DRACO_MESH_COMPRESSION:a[u]=new tu(r,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:a[u]=new nu;break;case Ye.KHR_MESH_QUANTIZATION:a[u]=new iu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function k4(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Nh=class{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new xe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],It);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ri(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new aa(h),l.distance=u;break;case"spot":l=new ra(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),jn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Oh=class{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return en}extendParams(e,t,n){let i=[];e.color=new xe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],It),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Tt))}return Promise.all(i)}},kh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Bh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(o,o)}return Promise.all(r)}},zh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Hh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Vh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new xe(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],It)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Tt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Gh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Wh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new xe().setRGB(o[0],o[1],o[2],It),Promise.all(r)}},qh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Xh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new xe().setRGB(o[0],o[1],o[2],It),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Tt)),Promise.all(r)}},jh=class{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Yh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Kh=class{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Jh=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Zh=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},$h=class{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Qh=class{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Mn.TRIANGLES&&l.mode!==Mn.TRIANGLE_STRIP&&l.mode!==Mn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let m of u){let b=new Ce,g=new C,p=new sn,x=new C(1,1,1),y=new Ur(m.geometry,m.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&x.fromBufferAttribute(c.SCALE,v),y.setMatrixAt(v,b.compose(g,p,x));for(let v in c)if(v==="_COLOR_0"){let _=c[v];y.instanceColor=new Ti(_.array,_.itemSize,_.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&m.geometry.setAttribute(v,c[v]);bt.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},ep="glTF",Sa=12,Jf={JSON:1313821514,BIN:5130562},eu=class{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Sa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ep)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Sa,r=new DataView(e,Sa),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Jf.JSON){let l=new Uint8Array(e,Sa+a,o);this.content=n.decode(l)}else if(c===Jf.BIN){let l=Sa+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},tu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=ru[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=ru[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=ar[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let m in f.attributes){let b=f.attributes[m],g=c[m];g!==void 0&&(b.normalized=g)}u(f)},o,l,It,d)})})}},nu=class{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},iu=class{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}},qc=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*l,b=m-l,g=-2*f+3*d,p=f-d,x=1-g,y=p-d+u;for(let v=0;v!==o;v++){let _=a[b+v+o],E=a[b+v+c]*h,R=a[m+v+o],A=a[m+v]*h;r[v]=x*_+y*E+g*R+p*A}return r}},B4=new sn,su=class extends qc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return B4.fromArray(r).normalize().toArray(r),r}},Mn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ar={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zf={9728:kt,9729:Bt,9984:Ko,9985:Js,9986:as,9987:Dn},$f={33071:Bn,33648:Ds,10497:Ei},Lh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ru={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},z4={CUBICSPLINE:void 0,LINEAR:ji,STEP:Xi},Fh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function H4(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new qt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Cn})),s.DefaultMaterial}function ds(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function jn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function V4(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function G4(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function W4(s){let e,t=s.extensions&&s.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Uh(t.attributes):e=s.indices+":"+Uh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Uh(s.targets[n]);return e}function Uh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function au(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function q4(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var X4=new Ce,ou=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new k4,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new na(this.options.manager):this.textureLoader=new oa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ys(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ds(r,o,i),jn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(ui.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Lh[i.type],o=ar[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new ft(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Lh[i.type],l=ar[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,b,g;if(f&&f!==u){let p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,y=t.cache.get(x);y||(b=new l(o,p*f,i.count*f/h),y=new ks(b,f/h),t.cache.add(x,y)),g=new Bs(y,c,d%f/h,m)}else o===null?b=new l(i.count*c):b=new l(o,d,i.count*c),g=new ft(b,c,m);if(i.sparse!==void 0){let p=Lh.SCALAR,x=ar[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,_=new x(a[1],y,i.sparse.count*p),E=new l(a[2],v,i.sparse.count*c);o!==null&&(g=new ft(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,A=_.length;R<A;R++){let S=_[R];if(g.setX(S,E[R*c]),c>=2&&g.setY(S,E[R*c+1]),c>=3&&g.setZ(S,E[R*c+2]),c>=4&&g.setW(S,E[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Zf[d.magFilter]||Bt,h.minFilter=Zf[d.minFilter]||Dn,h.wrapS=$f[d.wrapS]||Ei,h.wrapT=$f[d.wrapT]||Ei,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==kt&&h.minFilter!==Bt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(b){let g=new Nt(b);g.needsUpdate=!0,d(g)}),t.load(ui.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),jn(u,a),u.userData.mimeType=a.mimeType||q4(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ye.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Gs,Qt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Vs,Qt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return qt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[Ye.KHR_MATERIALS_UNLIT]){let u=i[Ye.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new xe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],It),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Tt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Xt);let h=r.alphaMode||Fh.OPAQUE;if(h===Fh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Fh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==en&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ae(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==en&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==en){let u=r.emissiveFactor;o.emissive=new xe().setRGB(u[0],u[1],u[2],It)}return r.emissiveTexture!==void 0&&a!==en&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Tt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),jn(u,r),t.associations.set(u,{materials:e}),r.extensions&&ds(i,u,r),u})}createUniqueName(e){let t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Qf(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=W4(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Qf(new vt,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?H4(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let b=h[f],g=a[f],p,x=l[f];if(g.mode===Mn.TRIANGLES||g.mode===Mn.TRIANGLE_STRIP||g.mode===Mn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Lr(b,x):new Ie(b,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Mn.TRIANGLE_STRIP?p.geometry=Ch(p.geometry,pa):g.mode===Mn.TRIANGLE_FAN&&(p.geometry=Ch(p.geometry,er));else if(g.mode===Mn.LINES)p=new Nr(b,x);else if(g.mode===Mn.LINE_STRIP)p=new Zi(b,x);else if(g.mode===Mn.LINE_LOOP)p=new Or(b,x);else if(g.mode===Mn.POINTS)p=new kr(b,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&G4(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),jn(p,r),g.extensions&&ds(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ds(i,u[0],r),u[0];let d=new Rt;r.extensions&&ds(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new St(rt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new hi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),jn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Ce;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Fr(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],m=i.samplers[f.sampler],b=f.target,g=b.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(m),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],b=u[3],g=u[4],p=[];for(let y=0,v=d.length;y<v;y++){let _=d[y],E=f[y],R=m[y],A=b[y],S=g[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let M=n._createAnimationTracks(_,E,R,A,S);if(M)for(let I=0;I<M.length;I++)p.push(M[I])}let x=new ta(r,void 0,p);return jn(x,i),x})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,X4)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new zs:l.length>1?h=new Rt:l.length===1?h=l[0]:h=new bt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),jn(h,r),r.extensions&&ds(n,h,r),r.matrix!==void 0){let u=new Ce;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Rt;n.name&&(r.name=i.createUniqueName(n.name)),jn(r,n),n.extensions&&ds(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof Qt||d instanceof Nt)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];Di[r.path]===Di.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Di[r.path]){case Di.weights:l=Hn;break;case Di.rotation:l=Vn;break;case Di.translation:case Di.scale:l=Gn;break;default:switch(n.itemSize){case 1:l=Hn;break;case 2:case 3:default:l=Gn;break}break}let h=i.interpolation!==void 0?z4[i.interpolation]:ji,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let m=new l(c[d]+"."+Di[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=au(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Vn?su:qc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function j4(s,e,t){let n=e.attributes,i=new zt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),o.normalized){let h=au(ar[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new C,c=new C;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let b=au(ar[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new rn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Qf(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=ru[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Xe.workingColorSpace!==It&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),jn(s,e),j4(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?V4(s,e.targets,t):s})}var tp=!1;async function cu({startup:s=!1}={}){!tp&&typeof Worker<"u"&&/Chrome|Chromium|Edg/.test(navigator.userAgent)&&(Dh.useWorkers(Math.min(2,Math.max(1,(navigator.hardwareConcurrency||2)-1))),tp=!0);let e;if(!s&&globalThis.__fullVehicleRequest)e=await globalThis.__fullVehicleRequest,delete globalThis.__fullVehicleRequest;else if(s&&globalThis.__startupVehicleRequest)e=await globalThis.__startupVehicleRequest,delete globalThis.__startupVehicleRequest;else{let a=await fetch(new URL(s?"./ego-vehicle-startup.glb.gz?v=17.9":"./ego-vehicle-ready.glb.gz",import.meta.url),{priority:s?"high":"low"});if(!a.ok)throw Error("Vehicle asset failed to load");e=await a.arrayBuffer()}let t=await new Response(new Blob([e]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer(),i=(await new Wc().setMeshoptDecoder(Dh).parseAsync(t,"")).scene.children[0];i.name="Ego vehicle";let r=0;return i.traverse(a=>{if(!a.isMesh)return;let o=Kf[r++];!s&&o?.name===a.name&&o.count===a.geometry.attributes.position.count&&o.indices?.length&&(a.geometry.userData.frameIndices=o.indices),a.castShadow=!0,a.receiveShadow=!1;for(let c of Array.isArray(a.material)?a.material:[a.material])c.name==="body"&&(c.roughness=Math.max(c.roughness,.24),c.clearcoatRoughness=Math.max(c.clearcoatRoughness,.22)),c.name==="lights"&&(c.onBeforeCompile=l=>{l.vertexShader=`varying float vTail;
`+l.vertexShader,l.vertexShader=l.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vTail=step(color.g*2.0,color.r);`),l.fragmentShader=`varying float vTail;
`+l.fragmentShader,l.fragmentShader=l.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance*=vTail;`)},c.needsUpdate=!0)}),i}function np(){let s=new Rt,e=new Ie(new an(2,1.7,4.85),new en);return e.position.y=.85,e.visible=!1,s.add(e),s.userData.vehicleSpec={wheels:[]},s}var ne=s=>document.getElementById(s),wt=ne("preview"),fs=document.querySelector("header");fs.classList.toggle("is-scrolled",scrollY>1);var Y4=new IntersectionObserver(([s])=>fs.classList.toggle("is-scrolled",!s.isIntersecting));Y4.observe(ne("header-sentinel"));var Xc=document.querySelector("main");function lp(){if(Xc.hidden)return;let s=fs.getBoundingClientRect(),e=document.querySelector(".workspace").getBoundingClientRect();fs.style.setProperty("--workspace-left",`${Math.max(0,e.left-s.left)}px`),Xc.style.setProperty("--sidebar-top",`${s.height+parseFloat(getComputedStyle(Xc).paddingTop)}px`)}var hp=new ResizeObserver(lp);hp.observe(Xc);hp.observe(fs);lp();var Ot=new URLSearchParams(location.search),Ta=Ot.get("scene"),Ea=Yf[Ta]||Ta,Kt=rr.find(s=>s.layouts.some(([e])=>e===Ea))||rr[0],at=new Map(rr.map(s=>[s.key,{id:s.layouts[0][0],buildings:!!s.buildings,waterfront:s.key==="road"&&Ta==="13",trees:!1,vehicle:!0,roadworks:!1}]));at.get(Kt.key).id=Ea&&Kt.layouts.some(([s])=>s===Ea)?Ea:Kt.layouts[0][0];Object.assign(at.get("road"),{laneCount:Ea==="09"?2:6,cameraView:Kt.key==="road"&&Ot.get("view")==="high"?"high":"low"});at.get("junction").cameraView=Kt.key==="junction"&&Ot.get("view")==="low"?"low":"high";at.get("junction").junctionPosition=Ot.get("position")==="approaching"||Kt.key==="junction"&&Ot.get("view")==="low"&&!Ot.has("position")?"approaching":"near";at.get("junction").cameraView=at.get("junction").junctionPosition==="near"?"high":"low";at.get("elevated").cameraView=Kt.key==="elevated"&&Ot.get("view")==="high"?"high":"low";at.get("ramp").cameraView=Kt.key==="ramp"&&Ot.get("view")==="high"?"high":"low";["2","4","6"].includes(Ot.get("lanes"))&&(at.get("road").laneCount=Number(Ot.get("lanes")));Ta==="01"&&(at.get(Kt.key).buildings=!1);Ta==="12"&&(at.get(Kt.key).roadworks=!0);for(let s of["buildings","waterfront","trees","vehicle","roadworks"])Ot.has(s)&&(at.get(Kt.key)[s]=Ot.get(s)==="1");for(let s of at.values())for(let e of["buildings","waterfront","trees","vehicle","roadworks"])s[e]=at.get(Kt.key)[e];var up;try{up=localStorage.getItem("sr-theme")}catch{}var K4=Ot.get("mode")||up||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),Ve=Kt.key,mt=K4==="dark"?"dark":"light",J4=!1,mu=!1,Fi=mu&&["1","2","3"].includes(Ot.get("nav"))?Ot.get("nav"):"1",Aa=["buildings","waterfront","trees","vehicle","roadworks"],Nn=!1,cr=!1,Ra=!1;function du(){let s=matchMedia("(max-width:760px)").matches,e=Math.min(s?1280:1440,Math.max(640,Math.ceil(wt.clientWidth*Math.min(devicePixelRatio||1,2)/16)*16));return[e,Math.round(e*9/16)]}requestAnimationFrame(()=>requestAnimationFrame(()=>{document.documentElement.dataset.uiReady="true"}));var Z4=cu();await new Promise(s=>setTimeout(s,0));performance.mark("studio-renderer-start");var be=await Gc.create(ne("scene-canvas"),np(),{width:du()[0],height:du()[1]});be.initializingScene=!0;performance.measure("studio-renderer","studio-renderer-start");await new Promise(s=>setTimeout(s,0));var ip=0,sp=0;function lr(){clearTimeout(ip);let s=++sp;ip=setTimeout(()=>{if(!cr||be.cameraMotion||be.layoutMotion||be.layoutTransition||be.environmentMotion||wt.dataset.renderPending==="true")return;let e=location.search;ne("scene-canvas").toBlob(t=>{if(!t)return;let n=new FileReader;n.onload=()=>{if(!(s!==sp||e!==location.search))try{sessionStorage.setItem("sr-frame-112",JSON.stringify({search:e,frame:n.result}))}catch{}},n.readAsDataURL(t)},"image/png")},80)}be.onCameraFrame=s=>{Ve==="junction"&&(s&&(Ra=!1),bu()),wt.dataset.cameraMoving=String(s),wt.dataset.cameraPose=JSON.stringify({position:be.camera.position.toArray(),aim:be.cameraAim.toArray(),offset:be.camera.view.offsetY,car:be.car.position.toArray(),anchor:be.captureCamera().anchor.toArray()}),s||(wt.dataset.audit=JSON.stringify(be.audit()),lr())};be.onEnvironmentFrame=s=>{wt.dataset.environmentMoving=String(s),s||(wt.dataset.audit=JSON.stringify(be.audit()),lr())};be.onLayoutFrame=s=>{wt.dataset.layoutMoving=String(s),s||(wt.dataset.audit=JSON.stringify(be.audit()),lr())};document.addEventListener("visibilitychange",()=>{document.hidden&&(be.finishLayoutTransition(),be.finishCameraMotion(),be.finishEnvironmentMotion(),be.finishLayoutMotion())});matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",s=>{s.matches&&(be.finishLayoutTransition(),be.finishCameraMotion(),be.finishEnvironmentMotion(),be.finishLayoutMotion())});var rp=null,jc=!0;function dp(){return ne("scene-canvas")}function Ui(){return rr.find(s=>s.key===Ve)}function fn(){let s={...at.get(Ve),mode:mt};for(let e of["buildings","waterfront","trees","roadworks"])s[e]=!!Ui()[e]&&!!s[e];return Ve==="road"&&(s.id=s.laneCount===2?"09":"02"),s}function gu(){let s=new URLSearchParams;s.set("scene",Ve==="reference"?"reference":fn().id),s.set("mode",mt),Ve==="road"&&s.set("lanes",fn().laneCount),["road","ramp","junction","elevated"].includes(Ve)&&s.set("view",fn().cameraView),Ve==="junction"&&s.set("position",fn().junctionPosition);for(let e of Aa)s.set(e,fn()[e]?"1":"0");mu&&(s.set("study","1"),s.set("nav",Fi)),Ot.has("motion")&&s.set("motion",Ot.get("motion")),document.getElementById("credits-view")&&!document.getElementById("credits-view").hidden&&s.set("page","credits"),history.replaceState(null,"",`?${s}`)}var Pa=new Map,fp=new Map,pp=new Map,mp=new Map([["open",Kt.group==="open"?Ve:"road"],["closed",Kt.group==="closed"?Ve:"parking"]]),gp='<svg class="folder-icon" width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M2.5 6V4.75A1.5 1.5 0 0 1 4 3.25h3.1c.4 0 .78.16 1.06.44l1.62 1.62a.75.75 0 0 0 .53.22H16A1.5 1.5 0 0 1 17.5 7.03v8.22A1.5 1.5 0 0 1 16 16.75H4a1.5 1.5 0 0 1-1.5-1.5V6Z" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round"/></svg>',Ia=document.createElement("div");Ia.className="nav-category-switch";Ia.setAttribute("role","group");Ia.setAttribute("aria-label","Scene category");for(let[s,e]of[["open","Driving"],["closed","Parking"]]){let t=document.createElement("button");t.type="button",t.innerHTML=gp,t.append(document.createTextNode(e)),t.setAttribute("aria-pressed",String(Kt.group===s)),t.addEventListener("click",()=>{Ve=mp.get(s),pn()}),pp.set(s,t),Ia.append(t)}ne("scenes").append(Ia);for(let[s,e]of[["open","Driving scenes"],["closed","Parking scenes"]]){let t=document.createElement("section"),n=document.createElement("h2"),i=document.createElement("div");t.className="scene-group",n.className="structure-heading",n.innerHTML=gp,n.append(document.createTextNode(e)),i.className="structure-items",i.id=`group-${s}`;for(let r of rr.filter(a=>a.group===s)){let a=document.createElement("button"),o=document.createElement("img"),c=document.createElement("span");a.type="button",a.className="scene",a.dataset.structure=r.key,o.className="scene-thumbnail",o.alt="",o.width=240,o.height=135,o.decoding="async",c.className="scene-label",c.textContent=r.name,a.append(o,c),a.addEventListener("click",()=>{Ve!==r.key&&(Ve=r.key,pn())}),i.append(a),Pa.set(r.key,a)}t.append(n,i),fp.set(s,t),ne("scenes").append(t)}var Sn=document.createElement("span");Sn.className="nav-pill";Sn.hidden=!0;Sn.setAttribute("aria-hidden","true");ne("scenes").prepend(Sn);var bp=new Map;if(mu){let s=document.createElement("div"),e=document.createElement("span"),t=document.createElement("div");s.className="nav-study",e.className="nav-study-label",e.textContent="\u5BFC\u822A\u65B9\u6848",t.className="nav-study-options",t.setAttribute("role","group"),t.setAttribute("aria-label","Navigation design");for(let[n,i]of[["1","01 \u5206\u7EC4"],["2","02 \u6A21\u5F0F"],["3","03 \u7F29\u7565\u56FE"]]){let r=document.createElement("button");r.type="button",r.textContent=i,r.setAttribute("aria-pressed",String(n===Fi)),r.addEventListener("click",()=>{Fi=n,ps(),gu()}),t.append(r),bp.set(n,r)}s.append(e,t),document.querySelector("header").after(s)}function vp(){document.documentElement.dataset.navDesign=Fi,mp.set(Ui().group,Ve);for(let[s,e]of fp)e.hidden=Fi==="2"&&s!==Ui().group;for(let[s,e]of pp)e.setAttribute("aria-pressed",String(s===Ui().group));for(let[s,e]of bp)e.setAttribute("aria-pressed",String(s===Fi));for(let[s,e]of Pa){e.setAttribute("aria-current",String(s===Ve));let t=e.querySelector("img");if(Fi==="3"){let n=`assets/nav/${s}-${mt}.webp`;t.getAttribute("src")!==n&&(t.src=n)}}}vp();var On=ne("scene-picker"),gi=ne("mobile-scene-menu"),$4=ne("scenes"),Q4=document.querySelector("aside"),eg=ne("mobile-scene-nav"),Ca=matchMedia("(max-width:760px)"),fu=document.querySelector(".credits"),tg=document.querySelector(".appearance-control");function Yc(){gi.contains(document.activeElement)&&Ca.matches&&On.focus({preventScroll:!0}),gi.classList.remove("is-open"),gi.inert=!0,gi.setAttribute("aria-hidden","true"),On.setAttribute("aria-expanded","false"),On.setAttribute("aria-label","Choose a scene")}function xp(){Yc(),(Ca.matches?eg:Q4).append($4),Ca.matches?ne("mobile-menu-footer").append(fu):tg.prepend(fu),requestAnimationFrame(ps)}On.addEventListener("click",()=>{let s=On.getAttribute("aria-expanded")!=="true";gi.classList.toggle("is-open",s),gi.inert=!s,gi.setAttribute("aria-hidden",String(!s)),On.setAttribute("aria-expanded",String(s)),On.setAttribute("aria-label",s?"Close scene menu":"Choose a scene"),s&&requestAnimationFrame(()=>{ps(),gi.getBoundingClientRect().top<fs.getBoundingClientRect().bottom&&window.scrollTo({top:0,behavior:"instant"})})});gi.addEventListener("keydown",s=>{s.key==="Escape"&&(Yc(),On.focus({preventScroll:!0}))});On.addEventListener("keydown",s=>{s.key==="Escape"&&Yc()});Ca.addEventListener("change",xp);xp();var lu=0,or=null,hu=0,pu=0;function ps(){vp();let s=Pa.get(Ve),e=ne("scenes");if(Fi!=="1"||!s?.getClientRects().length){Sn.hidden=!0,Sn.dataset.ready="false";return}let t=s.getBoundingClientRect(),n=e.getBoundingClientRect();Sn.style.width=t.width+"px",Sn.style.height=t.height+"px",Sn.style.transform=`translate3d(${t.left-n.left}px,${t.top-n.top}px,0)`,Sn.hidden=!1,Sn.dataset.ready!=="true"&&requestAnimationFrame(()=>{Sn.dataset.ready="true"})}document.addEventListener("pointerdown",()=>{document.documentElement.dataset.choiceInput="pointer"},!0);document.addEventListener("keydown",s=>{["Enter"," ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(s.key)&&(document.documentElement.dataset.choiceInput="keyboard")},!0);function bu(){let s=at.get("junction").junctionPosition==="near",e=Ve==="junction"&&!!be.cameraMotion,t=e||Ra,n=e?be.cameraMotion.progress||0:Ra?0:s?1:0;ne("junction-play").dataset.motionState=t?"playing":s?"replay":"ready",ne("junction-play").disabled=t,ne("junction-play-label").textContent=t?"Playing":s?"Replay":"Play",ne("junction-play-icon").setAttribute("d",s&&!t?"M3 8a7 7 0 1 1 1.5 7M3 3v5h5":"m7 4 8 6-8 6V4Z"),ne("junction-play").setAttribute("aria-label",t?"Approach animation playing":s?"Replay approach animation":"Play approach animation");let i=ne("junction-progress");i.style.setProperty("--progress",String(n)),i.setAttribute("aria-valuenow",String(Math.round(n*100))),i.setAttribute("aria-valuetext",t?"Approaching junction":s?"Stopped at junction":"Ready to approach")}function ng(){let s=Ve==="reference"?null:fn();if(s){for(let e of ne("road-controls").querySelectorAll("button"))e.setAttribute("aria-pressed",String(s[e.dataset.road])===e.dataset.value);for(let e of ne("parking-views").querySelectorAll("button"))e.setAttribute("aria-pressed",e.dataset.view===(Ve==="outdoor"?{17:"10",18:"16",19:"14"}[s.id]:s.id));for(let e of ne("layout-options").querySelectorAll("button"))e.setAttribute("aria-pressed",e.dataset.layout===s.id);for(let e of ne("junction-views").querySelectorAll("button"))e.setAttribute("aria-pressed",Ve==="junction"&&e.dataset.junctionView===s.cameraView);for(let e of ne("ramp-views").querySelectorAll("button"))e.setAttribute("aria-pressed",["ramp","elevated"].includes(Ve)&&e.dataset.rampView===s.cameraView);bu(),vu()}}function yp(){let s=Ui()?.group;if(!s)return;let e=ne("group-"+s);e.hidden=!1}document.querySelector(".wordmark").addEventListener("click",s=>{s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.button!==0||(s.preventDefault(),Ve="road",window.scrollTo({top:0,behavior:"instant"}),pn())});function pn(s="scene"){++pu,ne("current-scene-name")&&(ne("current-scene-name").textContent=Ui().name),cancelAnimationFrame(hu),yp();for(let[e,t]of Pa)t.setAttribute("aria-current",e===Ve);ps(),ng(),hu=requestAnimationFrame(()=>{hu=requestAnimationFrame(()=>{let e=performance.now();mi(!0,!1,s),wt.dataset.renderMs=(performance.now()-e).toFixed(1)})})}function mi(s=!1,e=!1,t="scene"){let n=++pu;ne("current-scene-name")&&(ne("current-scene-name").textContent=Ui().name),cancelAnimationFrame(lu);let i,r,a=matchMedia("(prefers-reduced-motion: reduce)").matches,o=s&&t==="growth"&&Nn&&!a&&document.documentElement.dataset.choiceInput!=="keyboard",c=s&&t==="layout"&&Ve==="junction"&&Nn&&!a&&document.documentElement.dataset.choiceInput!=="keyboard",l=s&&t==="layout"&&Ve==="road"&&Nn&&!a&&document.documentElement.dataset.choiceInput!=="keyboard",h=s&&t==="camera"&&Nn&&!a&&document.documentElement.dataset.choiceInput!=="keyboard";if(s&&Nn&&!a&&!h&&!o&&!l&&!c&&document.documentElement.dataset.choiceInput!=="keyboard"){let _=dp();i=document.createElement("canvas"),i.width=_.width,i.height=_.height;let E=i.getContext("2d");E.drawImage(_,0,0),or&&(E.globalAlpha=Number(getComputedStyle(or).opacity),E.drawImage(or,0,0,i.width,i.height),E.globalAlpha=1),i.className="frame-cover",e&&(r=document.createElement("canvas"),r.width=1920,r.height=1080,r.getContext("2d").drawImage(i,0,0,1920,1080),i.width=1920,i.height=1080,E.drawImage(r,0,0))}document.querySelectorAll(".frame-cover").forEach(_=>_.remove()),or=i||null,i&&wt.append(i);let u=Ve==="reference",d=Ui(),f=u?null:fn(),m=s&&!h&&!o&&!l&&!c&&!u&&Nn;wt.dataset.renderPending=String(m),u?rp.render(mt,jc):!be.initializingScene&&(Nn||!f.vehicle)&&be.update({...f,vehicle:Nn&&f.vehicle},{cameraMotion:h,environmentMotion:o,layoutMotion:l,structureMotion:c,deferRender:m}),ne("scene-canvas").hidden=!1,ne("reference-image").hidden=!0,J4=u,ne("reference").setAttribute("aria-current",u),ne("scene-title").textContent=u?"Visual key":d.name,ne("scene-canvas").setAttribute("aria-label",u?`Visual key, ${mt}, BMW vehicle`:`${d.name}, ${mt}, ${Aa.filter(_=>f[_]).join(", ")}`),document.documentElement.dataset.theme=mt;try{localStorage.setItem("sr-theme",mt)}catch{}document.querySelector(".credits").href=`credits.html?mode=${mt}&scene=${encodeURIComponent(u?"reference":f.id)}`;let b=ne("theme-toggle");b.setAttribute("aria-pressed",mt==="dark"),b.setAttribute("aria-label",`Switch to ${mt==="dark"?"light":"dark"} theme`),b.title=b.getAttribute("aria-label");for(let _ of Aa){let E=_==="vehicle"||!u&&!!d[_];ne(_).closest("label").hidden=!E,ne(_).disabled=!E,ne(_).checked=u?_==="vehicle"&&jc:f[_]}let g=!u&&d.group==="closed",p=!u&&!g&&d.key!=="road"&&d.layouts.length>1;if(ne("layout-control").hidden=!p,p){ne("layout-label").textContent=d.key==="junction"?"Junction type":"Ramp type",ne("layout").replaceChildren(...d.layouts.map(([_,E])=>new Option(E,_))),ne("layout").value=f.id,ne("layout-options").dataset.structure!==d.key&&(ne("layout-options").replaceChildren(...d.layouts.map(([_,E])=>{let R=document.createElement("button");return R.type="button",R.textContent=E.replace("High-angle ","").replace("crossroads","Crossroads"),R.dataset.layout=_,R.addEventListener("click",()=>{at.get(Ve).id=_,pn("layout")}),R})),ne("layout-options").dataset.structure=d.key);for(let _ of ne("layout-options").querySelectorAll("button"))_.setAttribute("aria-pressed",_.dataset.layout===f.id)}ne("parking-views").hidden=!g,ne("parking-control").hidden=!g,ne("road-controls").hidden=u||d.key!=="road";let x=!u&&d.key==="junction";ne("junction-camera-control").hidden=!0,ne("junction-position-control").hidden=!x,bu();for(let _ of ne("junction-views").querySelectorAll("button"))_.disabled=!x,_.setAttribute("aria-pressed",x&&_.dataset.junctionView===f.cameraView);let y=!u&&["ramp","elevated"].includes(d.key);ne("ramp-camera-control").hidden=!y;for(let _ of ne("ramp-views").querySelectorAll("button"))_.disabled=!y,_.setAttribute("aria-pressed",y&&_.dataset.rampView===f.cameraView);for(let _ of ne("road-controls").querySelectorAll("button"))_.setAttribute("aria-pressed",!u&&String(f[_.dataset.road])===_.dataset.value);ne("camera-control").hidden=!(g||p||y),document.querySelector(".toolbar").hidden=!(g||p||y);for(let _ of ne("parking-views").querySelectorAll("button"))_.setAttribute("aria-pressed",g&&_.dataset.view===(d.key==="outdoor"?{17:"10",18:"16",19:"14"}[f.id]:f.id));for(let[_,E]of Pa)E.setAttribute("aria-current",_===Ve);wt.dataset.mode=mt,wt.setAttribute("aria-busy",String(be.initializingScene||!Nn&&(u?jc:f.vehicle))),!m&&(u||be.state)&&(wt.dataset.audit=JSON.stringify(u?rp.audit():be.audit())),ne("download").disabled=!cr||m,ne("download").title=cr?"Download PNG":"Preparing full-quality PNG",gu(),document.querySelector(".wordmark").href=`./?scene=02&mode=${mt}&lanes=6&view=low`,yp(),vu(),ps();let v=()=>{if(n===pu&&(m&&(be.preparedRoots.has(be.root)||be.renderPreparedFrame(),be.renderFrame(),wt.dataset.audit=JSON.stringify(be.audit()),wt.dataset.renderPending="false",lr(),ne("download").disabled=!cr),i)){let _=()=>{i.remove(),or===i&&(or=null)};if(e){let E=i.getContext("2d"),R=performance.now(),A=mt==="dark",S=600,M=I=>{let L=Math.min(1,(I-R)/480),F=L*L*(3-2*L),z=A?1920+S-(1920+2*S)*F:-S+(1920+2*S)*F;E.clearRect(0,0,1920,1080),E.globalCompositeOperation="source-over",E.drawImage(r,0,0),E.globalCompositeOperation="destination-in";let N=E.createLinearGradient(z-S/2,0,z+S/2,0);N.addColorStop(0,A?"#000":"#0000"),N.addColorStop(1,A?"#0000":"#000"),E.fillStyle=N,E.fillRect(0,0,1920,1080),E.globalCompositeOperation="source-over",L<1?lu=requestAnimationFrame(M):_()};lu=requestAnimationFrame(M)}else{let E=i.animate([{opacity:1},{opacity:0}],{duration:l?160:t==="element"?240:t==="layout"?500:220,easing:t==="layout"&&Ve==="ramp"?"cubic-bezier(.4,0,.2,1)":"cubic-bezier(.33,0,.2,1)"});E.onfinish=_}}};lr(),m?be.prepareScene().then(v).catch(_=>{console.error(_),v()}):v()}function vu(){for(let s of document.querySelectorAll(".view-segments")){if(s.hidden||s.closest("[hidden]"))continue;let e=s.querySelector("[aria-pressed=true]");e&&(s.style.setProperty("--selection-x",e.offsetLeft+"px"),s.style.setProperty("--selection-width",e.offsetWidth+"px"))}}window.addEventListener("resize",()=>{be.finishLayoutTransition(),be.finishCameraMotion(),be.finishEnvironmentMotion(),be.finishLayoutMotion(),vu(),ps();let[s,e]=du();(be.width!==s||be.height!==e)&&(be.setResolution(s,e),pn())});new ResizeObserver(()=>{ps()}).observe(ne("scenes"));for(let s of ne("road-controls").querySelectorAll("button"))s.addEventListener("click",()=>{let e=s.dataset.road,t=e==="laneCount"?Number(s.dataset.value):s.dataset.value;at.get("road")[e]!==t&&(at.get("road")[e]=t,pn(e==="cameraView"?"camera":"layout"))});for(let s of ne("ramp-views").querySelectorAll("button"))s.addEventListener("click",()=>{at.get(Ve).cameraView!==s.dataset.rampView&&(at.get(Ve).cameraView=s.dataset.rampView,pn("camera"))});for(let s of ne("junction-views").querySelectorAll("button"))s.addEventListener("click",()=>{at.get("junction").cameraView!==s.dataset.junctionView&&(at.get("junction").cameraView=s.dataset.junctionView,pn("camera"))});ne("junction-play").addEventListener("click",()=>{if(Ra||be.cameraMotion)return;let s=at.get("junction");s.junctionPosition==="near"&&(s.junctionPosition="approaching",s.cameraView="low",be.update(fn())),Ra=!0,s.junctionPosition="near",s.cameraView="high",pn("camera")});var wa=null,Yn=mt,Li=null,uu=null;function ig(s){if(Yn===s)return;Yn=s;let e=matchMedia("(prefers-reduced-motion: reduce)").matches;if(e||Eu(s==="dark"),wa){Li&&(Li.updatePlaybackRate(s===uu?1:-1),Li.play());return}let t=()=>{mt=s,mi(!1)};if(!document.startViewTransition||e){mt=s,mi(!e,!0);return}let n=ne("theme-toggle").getBoundingClientRect(),i=n.left+n.width/2,r=n.top+n.height/2,a=140,o=Math.hypot(Math.max(i,innerWidth-i),Math.max(r,innerHeight-r))+a,c=document.getElementById("theme-wipe-style")||document.head.appendChild(Object.assign(document.createElement("style"),{id:"theme-wipe-style"}));c.textContent=`::view-transition-old(root){z-index:1;mask:none}::view-transition-new(root){z-index:2;mask-image:radial-gradient(circle at ${i}px ${r}px,#000 max(0px,calc(var(--theme-radius) - ${a}px)),transparent max(1px,var(--theme-radius)));mask-repeat:no-repeat}`,document.documentElement.classList.add("theme-changing"),uu=s;let l=document.startViewTransition(t);wa=l,l.ready.then(()=>{Li=document.documentElement.animate([{"--theme-radius":"0px"},{"--theme-radius":`${o}px`}],{duration:400,easing:"cubic-bezier(.65,0,.35,1)",fill:"both",pseudoElement:"::view-transition-new(root)"}),Yn!==uu&&(Li.currentTime=0,Li.reverse()),Li.onfinish=()=>{wa===l&&mt!==Yn&&(mt=Yn,mi(!1))}}).catch(()=>{mt!==Yn&&(mt=Yn,mi(!1))}),l.finished.catch(()=>{}).finally(()=>{wa===l&&(wa=null,Li=null,document.documentElement.classList.remove("theme-changing"),mt!==Yn&&(mt=Yn,mi(!1)))})}ne("theme-toggle").addEventListener("click",()=>ig(Yn==="dark"?"light":"dark"));var ap=document.querySelector("main"),op=ne("credits-view"),cp=0;function Da(s,e=!1){s&&(cp=scrollY,Yc()),ap.hidden=s,op.hidden=!s,fs.classList.toggle("credits-open",s),On.hidden=s,document.querySelector(".site-signature").hidden=s,document.title=s?"Credits \xB7 DriveScene Studio":"DriveScene Studio";let t=s?op:ap;if(matchMedia("(prefers-reduced-motion: reduce)").matches||t.animate([{opacity:0,transform:"translateY(4px)"},{opacity:1,transform:"translateY(0)"}],{duration:180,easing:"cubic-bezier(.22,1,.36,1)"}),e){let n=new URLSearchParams(location.search);n.set("page","credits"),history.pushState({srCredits:!0},"",`?${n}`)}scrollTo({top:s?0:cp,behavior:"instant"}),s?ne("credits-title").focus({preventScroll:!0}):(Ca.matches?On:fu).focus({preventScroll:!0})}document.querySelector(".credits").addEventListener("click",s=>{s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||(s.preventDefault(),Da(!0,!0))});ne("credits-back").addEventListener("click",s=>{s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||(s.preventDefault(),history.state?.srCredits?history.back():(Da(!1),gu()))});document.querySelector(".wordmark").addEventListener("click",s=>{s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||(s.preventDefault(),Da(!1),Ve="road",Object.assign(at.get("road"),{id:"02",laneCount:6,cameraView:"low"}),pn())});window.addEventListener("popstate",()=>Da(new URLSearchParams(location.search).get("page")==="credits"));for(let s of Aa)ne(s).addEventListener("change",()=>{if(Ve==="reference")jc=ne("vehicle").checked;else for(let e of at.values())e[s]=ne(s).checked;pn(["buildings","trees","waterfront","roadworks"].includes(s)?"growth":"element")});for(let s of ne("parking-views").querySelectorAll("button"))s.addEventListener("click",()=>{let e=Ve==="outdoor"?{10:"17",16:"18",14:"19"}[s.dataset.view]:s.dataset.view;at.get(Ve).id!==e&&(at.get(Ve).id=e,pn("camera"))});ne("layout").addEventListener("change",()=>{at.get(Ve).id=ne("layout").value,pn("layout")});function sg(){if(Ve==="reference")return`waterfront-study-${mt}-1920x1080`;let s=fn();return`${Ve}-${s.id}${Ve==="road"?"-"+s.laneCount+"lanes-"+s.cameraView:Ve==="junction"?"-"+s.junctionPosition+"-"+s.cameraView:["ramp","elevated"].includes(Ve)?"-"+s.cameraView:""}-${mt}-${Aa.map(e=>`${e}-${s[e]?"on":"off"}`).join("-")}`}ne("download").addEventListener("click",()=>{if(!cr)return;be.finishLayoutTransition(),be.finishCameraMotion(),be.finishEnvironmentMotion(),be.finishLayoutMotion();let s=sg(),[e,t]=[be.width,be.height];ne("download").disabled=!0;try{be.setResolution(1920,1080),be.update(fn()),dp().toBlob(n=>{if(n){let i=document.createElement("a");i.href=URL.createObjectURL(n),i.download=s+".png",i.click(),setTimeout(()=>URL.revokeObjectURL(i.href),5e3)}})}finally{be.setResolution(e,t),mi(!1)}});try{mi()}catch(s){throw ne("status").textContent="This preview requires WebGL. Please reopen in a modern browser.",s}if(Ot.get("page")==="credits"){Da(!0);let s=new URLSearchParams(location.search);s.set("page","credits"),history.replaceState(null,"",`?${s}`)}async function _p(s,e=!1,t=!1){performance.mark("studio-scene-start"),delete wt.dataset.loadError,be.setVehicle(s),be.initializingScene=!0;try{let n;do n=fn(),await be.prepareInitialScene(n),be.update({...n,vehicle:!0},{deferRender:!0}),performance.measure("studio-scene","studio-scene-start"),await new Promise(i=>setTimeout(i,0)),performance.mark("studio-warm-start"),await be.prepareScene(),be.renderPreparedFrame(),performance.measure("studio-warm","studio-warm-start"),await new Promise(requestAnimationFrame),be.renderFrame();while(n.id!==fn().id||n.laneCount!==fn().laneCount)}finally{be.initializingScene=!1}Nn=!0,cr=e,ne("status").replaceChildren(),mi(t,!1,"element"),wt.dataset.vehicleReady="true",wt.dataset.vehicleQuality=e?"full":"startup",lr()}function Mp(s){wt.dataset.loadError="true",console.error(s),ne("status").textContent=Nn?"Full-quality export is unavailable. ":"Vehicle could not load. ";let e=document.createElement("button");e.type="button",e.textContent="Retry",e.addEventListener("click",()=>{e.disabled=!0,delete wt.dataset.loadError,cu().then(t=>_p(t,!0)).catch(Mp)}),ne("status").append(e)}Z4.then(s=>_p(s,!0)).catch(Mp);
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
