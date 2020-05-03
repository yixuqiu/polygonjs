/*! For license information please see 3.bundle.js.LICENSE.txt */
(window.webpackJsonpPOLY=window.webpackJsonpPOLY||[]).push([[3],{500:function(e,r,t){"use strict";t.d(r,"a",(function(){return s}));var n=t(0),i=t(68),a=t(46),o=t(25);function s(e){o.a.call(this,e)}s.prototype=Object.assign(Object.create(o.a.prototype),{constructor:s,load:function(e,r,t,o){var s=this,f=new a.a,h=new i.a(this.manager);return h.setResponseType("arraybuffer"),h.setPath(this.path),h.load(e,(function(e){var t=s.parse(e);t&&(void 0!==t.image?f.image=t.image:void 0!==t.data&&(f.image.width=t.width,f.image.height=t.height,f.image.data=t.data),f.wrapS=void 0!==t.wrapS?t.wrapS:n.n,f.wrapT=void 0!==t.wrapT?t.wrapT:n.n,f.magFilter=void 0!==t.magFilter?t.magFilter:n.T,f.minFilter=void 0!==t.minFilter?t.minFilter:n.T,f.anisotropy=void 0!==t.anisotropy?t.anisotropy:1,void 0!==t.format&&(f.format=t.format),void 0!==t.type&&(f.type=t.type),void 0!==t.mipmaps&&(f.mipmaps=t.mipmaps,f.minFilter=n.W),1===t.mipmapCount&&(f.minFilter=n.T),f.needsUpdate=!0,r&&r(f,t))}),t,o),f}})},501:function(e,r,t){"use strict";t.d(r,"a",(function(){return Z}));var n={},i=void 0,a=n;function o(e,r){var t,n=e.split("."),o=a;!(n[0]in o)&&o.execScript&&o.execScript("var "+n[0]);for(;n.length&&(t=n.shift());)n.length||r===i?o=o[t]?o[t]:o[t]={}:o[t]=r}var s="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array&&"undefined"!=typeof DataView;function f(e){var r,t,n,i,a,o,f,h,l,u,c=e.length,v=0,p=Number.POSITIVE_INFINITY;for(h=0;h<c;++h)e[h]>v&&(v=e[h]),e[h]<p&&(p=e[h]);for(r=1<<v,t=new(s?Uint32Array:Array)(r),n=1,i=0,a=2;n<=v;){for(h=0;h<c;++h)if(e[h]===n){for(o=0,f=i,l=0;l<n;++l)o=o<<1|1&f,f>>=1;for(u=n<<16|h,l=o;l<r;l+=a)t[l]=u;++i}++n,i<<=1,a<<=1}return[t,v,p]}function h(e,r){switch(this.g=[],this.h=32768,this.d=this.f=this.a=this.l=0,this.input=s?new Uint8Array(e):e,this.m=!1,this.i=u,this.r=!1,!r&&(r={})||(r.index&&(this.a=r.index),r.bufferSize&&(this.h=r.bufferSize),r.bufferType&&(this.i=r.bufferType),r.resize&&(this.r=r.resize)),this.i){case l:this.b=32768,this.c=new(s?Uint8Array:Array)(32768+this.h+258);break;case u:this.b=0,this.c=new(s?Uint8Array:Array)(this.h),this.e=this.z,this.n=this.v,this.j=this.w;break;default:throw Error("invalid inflate mode")}}var l=0,u=1,c={t:l,s:u};h.prototype.k=function(){for(;!this.m;){var e=z(this,3);switch(1&e&&(this.m=!0),e>>>=1){case 0:var r=this.input,t=this.a,n=this.c,a=this.b,o=r.length,h=i,c=n.length,v=i;if(this.d=this.f=0,t+1>=o)throw Error("invalid uncompressed block header: LEN");if(h=r[t++]|r[t++]<<8,t+1>=o)throw Error("invalid uncompressed block header: NLEN");if(h===~(r[t++]|r[t++]<<8))throw Error("invalid uncompressed block header: length verify");if(t+h>r.length)throw Error("input buffer is broken");switch(this.i){case l:for(;a+h>n.length;){if(h-=v=c-a,s)n.set(r.subarray(t,t+v),a),a+=v,t+=v;else for(;v--;)n[a++]=r[t++];this.b=a,n=this.e(),a=this.b}break;case u:for(;a+h>n.length;)n=this.e({p:2});break;default:throw Error("invalid inflate mode")}if(s)n.set(r.subarray(t,t+h),a),a+=h,t+=h;else for(;h--;)n[a++]=r[t++];this.a=t,this.b=a,this.c=n;break;case 1:this.j(k,x);break;case 2:var p,w,y,b,g=z(this,5)+257,m=z(this,5)+1,A=z(this,4)+4,U=new(s?Uint8Array:Array)(d.length),S=i,E=i,M=i,I=i,O=i;for(O=0;O<A;++O)U[d[O]]=z(this,3);if(!s)for(O=A,A=U.length;O<A;++O)U[d[O]]=0;for(p=f(U),S=new(s?Uint8Array:Array)(g+m),O=0,b=g+m;O<b;)switch(E=R(this,p),E){case 16:for(I=3+z(this,2);I--;)S[O++]=M;break;case 17:for(I=3+z(this,3);I--;)S[O++]=0;M=0;break;case 18:for(I=11+z(this,7);I--;)S[O++]=0;M=0;break;default:M=S[O++]=E}w=f(s?S.subarray(0,g):S.slice(0,g)),y=f(s?S.subarray(g):S.slice(g)),this.j(w,y);break;default:throw Error("unknown BTYPE: "+e)}}return this.n()};var v,p,w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],d=s?new Uint16Array(w):w,y=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258],b=s?new Uint16Array(y):y,g=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],m=s?new Uint8Array(g):g,A=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],U=s?new Uint16Array(A):A,S=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],E=s?new Uint8Array(S):S,M=new(s?Uint8Array:Array)(288);for(v=0,p=M.length;v<p;++v)M[v]=143>=v?8:255>=v?9:279>=v?7:8;var I,O,k=f(M),C=new(s?Uint8Array:Array)(30);for(I=0,O=C.length;I<O;++I)C[I]=5;var x=f(C);function z(e,r){for(var t,n=e.f,i=e.d,a=e.input,o=e.a,s=a.length;i<r;){if(o>=s)throw Error("input buffer is broken");n|=a[o++]<<i,i+=8}return t=n&(1<<r)-1,e.f=n>>>r,e.d=i-r,e.a=o,t}function R(e,r){for(var t,n,i=e.f,a=e.d,o=e.input,s=e.a,f=o.length,h=r[0],l=r[1];a<l&&!(s>=f);)i|=o[s++]<<a,a+=8;if((n=(t=h[i&(1<<l)-1])>>>16)>a)throw Error("invalid code length: "+n);return e.f=i>>n,e.d=a-n,e.a=s,65535&t}function P(e,r){var t,n;switch(this.input=e,this.a=0,!r&&(r={})||(r.index&&(this.a=r.index),r.verify&&(this.A=r.verify)),t=e[this.a++],n=e[this.a++],15&t){case N:this.method=N;break;default:throw Error("unsupported compression method")}if(0!=((t<<8)+n)%31)throw Error("invalid fcheck flag:"+((t<<8)+n)%31);if(32&n)throw Error("fdict flag is not supported");this.q=new h(e,{index:this.a,bufferSize:r.bufferSize,bufferType:r.bufferType,resize:r.resize})}h.prototype.j=function(e,r){var t=this.c,n=this.b;this.o=e;for(var i,a,o,s,f=t.length-258;256!==(i=R(this,e));)if(256>i)n>=f&&(this.b=n,t=this.e(),n=this.b),t[n++]=i;else for(s=b[a=i-257],0<m[a]&&(s+=z(this,m[a])),i=R(this,r),o=U[i],0<E[i]&&(o+=z(this,E[i])),n>=f&&(this.b=n,t=this.e(),n=this.b);s--;)t[n]=t[n++-o];for(;8<=this.d;)this.d-=8,this.a--;this.b=n},h.prototype.w=function(e,r){var t=this.c,n=this.b;this.o=e;for(var i,a,o,s,f=t.length;256!==(i=R(this,e));)if(256>i)n>=f&&(f=(t=this.e()).length),t[n++]=i;else for(s=b[a=i-257],0<m[a]&&(s+=z(this,m[a])),i=R(this,r),o=U[i],0<E[i]&&(o+=z(this,E[i])),n+s>f&&(f=(t=this.e()).length);s--;)t[n]=t[n++-o];for(;8<=this.d;)this.d-=8,this.a--;this.b=n},h.prototype.e=function(){var e,r,t=new(s?Uint8Array:Array)(this.b-32768),n=this.b-32768,i=this.c;if(s)t.set(i.subarray(32768,t.length));else for(e=0,r=t.length;e<r;++e)t[e]=i[e+32768];if(this.g.push(t),this.l+=t.length,s)i.set(i.subarray(n,n+32768));else for(e=0;32768>e;++e)i[e]=i[n+e];return this.b=32768,i},h.prototype.z=function(e){var r,t,n,i=this.input.length/this.a+1|0,a=this.input,o=this.c;return e&&("number"==typeof e.p&&(i=e.p),"number"==typeof e.u&&(i+=e.u)),2>i?t=(n=(a.length-this.a)/this.o[2]/2*258|0)<o.length?o.length+n:o.length<<1:t=o.length*i,s?(r=new Uint8Array(t)).set(o):r=o,this.c=r},h.prototype.n=function(){var e,r,t,n,i,a=0,o=this.c,f=this.g,h=new(s?Uint8Array:Array)(this.l+(this.b-32768));if(0===f.length)return s?this.c.subarray(32768,this.b):this.c.slice(32768,this.b);for(r=0,t=f.length;r<t;++r)for(n=0,i=(e=f[r]).length;n<i;++n)h[a++]=e[n];for(r=32768,t=this.b;r<t;++r)h[a++]=o[r];return this.g=[],this.buffer=h},h.prototype.v=function(){var e,r=this.b;return s?this.r?(e=new Uint8Array(r)).set(this.c.subarray(0,r)):e=this.c.subarray(0,r):(this.c.length>r&&(this.c.length=r),e=this.c),this.buffer=e},P.prototype.k=function(){var e,r,t=this.input;if(e=this.q.k(),this.a=this.q.a,this.A){r=(t[this.a++]<<24|t[this.a++]<<16|t[this.a++]<<8|t[this.a++])>>>0;var n=e;if("string"==typeof n){var i,a,o=n.split("");for(i=0,a=o.length;i<a;i++)o[i]=(255&o[i].charCodeAt(0))>>>0;n=o}for(var s,f=1,h=0,l=n.length,u=0;0<l;){l-=s=1024<l?1024:l;do{h+=f+=n[u++]}while(--s);f%=65521,h%=65521}if(r!==(h<<16|f)>>>0)throw Error("invalid adler-32 checksum")}return e};var N=8;o("Zlib.Inflate",P),o("Zlib.Inflate.prototype.decompress",P.prototype.k);var T,F,D,_,L={ADAPTIVE:c.s,BLOCK:c.t};if(Object.keys)T=Object.keys(L);else for(F in T=[],D=0,L)T[D++]=F;for(D=0,_=T.length;D<_;++D)o("Zlib.Inflate.BufferType."+(F=T[D]),L[F]);var Z=n.Zlib},506:function(e,r,t){"use strict";t.r(r),t.d(r,"EXRLoader",(function(){return o}));var n=t(500),i=t(0),a=t(501),o=function(e){n.a.call(this,e),this.type=i.F};o.prototype=Object.assign(Object.create(n.a.prototype),{constructor:o,parse:function(e){const r=Math.pow(2.7182818,2.2);var t=new DataView(new ArrayBuffer(8));function n(e){if(0===e)return[e,0];t.setFloat64(0,e);var r=t.getUint32(0)>>>20&2047;0===r&&(t.setFloat64(0,e*Math.pow(2,64)),r=(t.getUint32(0)>>>20&2047)-64);var n=r-1022;return[function(e,r){for(var t=Math.min(3,Math.ceil(Math.abs(r)/1023)),n=e,i=0;i<t;i++)n*=Math.pow(2,Math.floor((r+i)/t));return n}(e,-n),n]}const o={l:0,c:0,lc:0};function s(e,r,t,n,i){for(;t<e;)r=r<<8|F(n,i),t+=8;t-=e,o.l=r>>t&(1<<e)-1,o.c=r,o.lc=t}const f=new Array(59);function h(e,r,t,n,i,a,h){for(var l=t,u=0,c=0;i<=a;i++){if(l.value-t.value>n)return!1;s(6,u,c,e,l);var v=o.l;if(u=o.c,c=o.lc,h[i]=v,63==v){if(l.value-t.value>n)throw"Something wrong with hufUnpackEncTable";s(8,u,c,e,l);var p=o.l+6;if(u=o.c,c=o.lc,i+p>a+1)throw"Something wrong with hufUnpackEncTable";for(;p--;)h[i++]=0;i--}else if(v>=59){if(i+(p=v-59+2)>a+1)throw"Something wrong with hufUnpackEncTable";for(;p--;)h[i++]=0;i--}}!function(e){for(var r=0;r<=58;++r)f[r]=0;for(r=0;r<65537;++r)f[e[r]]+=1;var t=0;for(r=58;r>0;--r){var n=t+f[r]>>1;f[r]=t,t=n}for(r=0;r<65537;++r){var i=e[r];i>0&&(e[r]=i|f[i]++<<6)}}(h)}function l(e){return 63&e}function u(e){return e>>6}const c={c:0,lc:0};function v(e,r,t,n){e=e<<8|F(t,n),r+=8,c.c=e,c.lc=r}const p={c:0,lc:0};function w(e,r,t,n,i,a,o,s,f,h){if(e==r){n<8&&(v(t,n,i,o),t=c.c,n=c.lc);var l=t>>(n-=8);l=new Uint8Array([l])[0];if(f.value+l>h)return!1;for(var u=s[f.value-1];l-- >0;)s[f.value++]=u}else{if(!(f.value<h))return!1;s[f.value++]=e}p.c=t,p.lc=n}function d(e){var r=function(e){return 65535&e}(e);return r>32767?r-65536:r}const y={a:0,b:0};function b(e,r){var t=d(e),n=d(r),i=t+(1&n)+(n>>1),a=i,o=i-n;y.a=a,y.b=o}function g(e,r,t,n,i,a){for(var o,s=t>i?i:t,f=1;f<=s;)f<<=1;for(o=f>>=1,f>>=1;f>=1;){for(var h,l,u,c,v=0,p=v+a*(i-o),w=a*f,d=a*o,g=n*f,m=n*o;v<=p;v+=d){for(var A=v,U=v+n*(t-o);A<=U;A+=m){var S=A+g,E=(M=A+w)+g;b(e[A+r],e[M+r]),h=y.a,u=y.b,b(e[S+r],e[E+r]),l=y.a,c=y.b,b(h,l),e[A+r]=y.a,e[S+r]=y.b,b(u,c),e[M+r]=y.a,e[E+r]=y.b}if(t&f){var M=A+w;b(e[A+r],e[M+r]),h=y.a,e[M+r]=y.b,e[A+r]=h}}if(i&f)for(A=v,U=v+n*(t-o);A<=U;A+=m){S=A+g;b(e[A+r],e[S+r]),h=y.a,e[S+r]=y.b,e[A+r]=h}o=f,f>>=1}return v}function m(e,r,t,n,i,a){var o=t.value,s=T(r,t),f=T(r,t);t.value+=4;var d=T(r,t);if(t.value+=4,s<0||s>=65537||f<0||f>=65537)throw"Something wrong with HUF_ENCSIZE";var y=new Array(65537),b=new Array(16384);if(function(e){for(var r=0;r<16384;r++)e[r]={},e[r].len=0,e[r].lit=0,e[r].p=null}(b),h(e,0,t,n-(t.value-o),s,f,y),d>8*(n-(t.value-o)))throw"Something wrong with hufUncompress";!function(e,r,t,n){for(;r<=t;r++){var i=u(e[r]),a=l(e[r]);if(i>>a)throw"Invalid table entry";if(a>14){if((h=n[i>>a-14]).len)throw"Invalid table entry";if(h.lit++,h.p){var o=h.p;h.p=new Array(h.lit);for(var s=0;s<h.lit-1;++s)h.p[s]=o[s]}else h.p=new Array(1);h.p[h.lit-1]=r}else if(a){var f=0;for(s=1<<14-a;s>0;s--){var h;if((h=n[(i<<14-a)+f]).len||h.p)throw"Invalid table entry";h.len=a,h.lit=r,f++}}}}(y,s,f,b),function(e,r,t,n,i,a,o,s,f,h){for(var d=0,y=0,b=s,g=Math.trunc(i.value+(a+7)/8);i.value<g;)for(v(d,y,t,i),d=c.c,y=c.lc;y>=14;){if((S=r[d>>y-14&16383]).len)y-=S.len,w(S.lit,o,d,y,t,0,i,f,h,b),d=p.c,y=p.lc;else{if(!S.p)throw"hufDecode issues";var m;for(m=0;m<S.lit;m++){for(var A=l(e[S.p[m]]);y<A&&i.value<g;)v(d,y,t,i),d=c.c,y=c.lc;if(y>=A&&u(e[S.p[m]])==(d>>y-A&(1<<A)-1)){y-=A,w(S.p[m],o,d,y,t,0,i,f,h,b),d=p.c,y=p.lc;break}}if(m==S.lit)throw"hufDecode issues"}}var U=8-a&7;for(d>>=U,y-=U;y>0;){var S;if(!(S=r[d<<14-y&16383]).len)throw"hufDecode issues";y-=S.len,w(S.lit,o,d,y,t,0,i,f,h,b),d=p.c,y=p.lc}}(y,b,e,0,t,d,f,a,i,{value:0})}function A(e){for(var r=1;r<e.length;r++){var t=e[r-1]+e[r]-128;e[r]=t}}function U(e,r){for(var t=0,n=Math.floor((e.length+1)/2),i=0,a=e.length-1;!(i>a||(r[i++]=e[t++],i>a));)r[i++]=e[n++]}function S(e){for(var r=e.byteLength,t=new Array,n=0,i=new DataView(e);r>0;){var a=i.getInt8(n++);if(a<0){r-=(s=-a)+1;for(var o=0;o<s;o++)t.push(i.getUint8(n++))}else{var s=a;r-=2;var f=i.getUint8(n++);for(o=0;o<s+1;o++)t.push(f)}}return t}function E(e,r,t){for(var n,i=1;i<64;)65280==(n=r[e.value])?i=64:n>>8==255?i+=255&n:(t[i]=n,i++),e.value++}function M(e,r){r[0]=Z(e[0]),r[1]=Z(e[1]),r[2]=Z(e[5]),r[3]=Z(e[6]),r[4]=Z(e[14]),r[5]=Z(e[15]),r[6]=Z(e[27]),r[7]=Z(e[28]),r[8]=Z(e[2]),r[9]=Z(e[4]),r[10]=Z(e[7]),r[11]=Z(e[13]),r[12]=Z(e[16]),r[13]=Z(e[26]),r[14]=Z(e[29]),r[15]=Z(e[42]),r[16]=Z(e[3]),r[17]=Z(e[8]),r[18]=Z(e[12]),r[19]=Z(e[17]),r[20]=Z(e[25]),r[21]=Z(e[30]),r[22]=Z(e[41]),r[23]=Z(e[43]),r[24]=Z(e[9]),r[25]=Z(e[11]),r[26]=Z(e[18]),r[27]=Z(e[24]),r[28]=Z(e[31]),r[29]=Z(e[40]),r[30]=Z(e[44]),r[31]=Z(e[53]),r[32]=Z(e[10]),r[33]=Z(e[19]),r[34]=Z(e[23]),r[35]=Z(e[32]),r[36]=Z(e[39]),r[37]=Z(e[45]),r[38]=Z(e[52]),r[39]=Z(e[54]),r[40]=Z(e[20]),r[41]=Z(e[22]),r[42]=Z(e[33]),r[43]=Z(e[38]),r[44]=Z(e[46]),r[45]=Z(e[51]),r[46]=Z(e[55]),r[47]=Z(e[60]),r[48]=Z(e[21]),r[49]=Z(e[34]),r[50]=Z(e[37]),r[51]=Z(e[47]),r[52]=Z(e[50]),r[53]=Z(e[56]),r[54]=Z(e[59]),r[55]=Z(e[61]),r[56]=Z(e[35]),r[57]=Z(e[36]),r[58]=Z(e[48]),r[59]=Z(e[49]),r[60]=Z(e[57]),r[61]=Z(e[58]),r[62]=Z(e[62]),r[63]=Z(e[63])}function I(e){const r=.5*Math.cos(.7853975),t=.5*Math.cos(3.14159/16),n=.5*Math.cos(3.14159/8),i=.5*Math.cos(3*3.14159/16),a=.5*Math.cos(.981746875),o=.5*Math.cos(3*3.14159/8),s=.5*Math.cos(1.374445625);for(var f=new Array(4),h=new Array(4),l=new Array(4),u=new Array(4),c=0;c<8;++c){var v=8*c;f[0]=n*e[v+2],f[1]=o*e[v+2],f[2]=n*e[v+6],f[3]=o*e[v+6],h[0]=t*e[v+1]+i*e[v+3]+a*e[v+5]+s*e[v+7],h[1]=i*e[v+1]-s*e[v+3]-t*e[v+5]-a*e[v+7],h[2]=a*e[v+1]-t*e[v+3]+s*e[v+5]+i*e[v+7],h[3]=s*e[v+1]-a*e[v+3]+i*e[v+5]-t*e[v+7],l[0]=r*(e[v+0]+e[v+4]),l[3]=r*(e[v+0]-e[v+4]),l[1]=f[0]+f[3],l[2]=f[1]-f[2],u[0]=l[0]+l[1],u[1]=l[3]+l[2],u[2]=l[3]-l[2],u[3]=l[0]-l[1],e[v+0]=u[0]+h[0],e[v+1]=u[1]+h[1],e[v+2]=u[2]+h[2],e[v+3]=u[3]+h[3],e[v+4]=u[3]-h[3],e[v+5]=u[2]-h[2],e[v+6]=u[1]-h[1],e[v+7]=u[0]-h[0]}for(var p=0;p<8;++p)f[0]=n*e[16+p],f[1]=o*e[16+p],f[2]=n*e[48+p],f[3]=o*e[48+p],h[0]=t*e[8+p]+i*e[24+p]+a*e[40+p]+s*e[56+p],h[1]=i*e[8+p]-s*e[24+p]-t*e[40+p]-a*e[56+p],h[2]=a*e[8+p]-t*e[24+p]+s*e[40+p]+i*e[56+p],h[3]=s*e[8+p]-a*e[24+p]+i*e[40+p]-t*e[56+p],l[0]=r*(e[p]+e[32+p]),l[3]=r*(e[p]-e[32+p]),l[1]=f[0]+f[3],l[2]=f[1]-f[2],u[0]=l[0]+l[1],u[1]=l[3]+l[2],u[2]=l[3]-l[2],u[3]=l[0]-l[1],e[0+p]=u[0]+h[0],e[8+p]=u[1]+h[1],e[16+p]=u[2]+h[2],e[24+p]=u[3]+h[3],e[32+p]=u[3]-h[3],e[40+p]=u[2]-h[2],e[48+p]=u[1]-h[1],e[56+p]=u[0]-h[0]}function O(e){for(var r=0;r<64;++r){var t=e[0][r],n=e[1][r],i=e[2][r];e[0][r]=t+1.5747*i,e[1][r]=t-.1873*n-.4682*i,e[2][r]=t+1.8556*n}}function k(e,r,t){for(var n=0;n<64;++n)r[t+n]=V(C(e[n]))}function C(e){return e<=1?Math.sign(e)*Math.pow(Math.abs(e),2.2):Math.sign(e)*Math.pow(r,Math.abs(e)-1)}function x(e){var r=e.array.slice(e.offset.value,e.offset.value+e.size);void 0===a.a&&console.error("THREE.EXRLoader: External library Inflate.min.js required, obtain or import from https://github.com/imaya/zlib.js");var t=new a.a.Inflate(r,{resize:!0,verify:!0}),n=new Uint8Array(t.decompress().buffer),i=new Uint8Array(n.length);return A(n),U(n,i),new DataView(i.buffer)}function z(e){var r=e.viewer,t={value:e.offset.value},n=new Uint8Array(e.width*e.lines*(W.channels.length*e.type*2)),i={version:_(r,t),unknownUncompressedSize:_(r,t),unknownCompressedSize:_(r,t),acCompressedSize:_(r,t),dcCompressedSize:_(r,t),rleCompressedSize:_(r,t),rleUncompressedSize:_(r,t),rleRawSize:_(r,t),totalAcUncompressedCount:_(r,t),totalDcUncompressedCount:_(r,t),acCompression:_(r,t)};if(i.version<2)throw"EXRLoader.parse: "+W.compression+" version "+i.version+" is unsupported";for(var o=new Array,s=j(r,t)-2;s>0;){var f=R(r.buffer,t),h=D(r,t),l=h>>2&3,u=new Int8Array([(h>>4)-1])[0],c=D(r,t);o.push({name:f,index:u,type:c,compression:l}),s-=f.length+3}for(var v=W.channels,p=new Array(e.channels),w=0;w<e.channels;++w){var d=p[w]={},y=v[w];d.name=y.name,d.compression=0,d.decoded=!1,d.type=y.pixelType,d.pLinear=y.pLinear,d.width=e.width,d.height=e.lines}for(var b={idx:new Array(3)},g=0;g<e.channels;++g)for(d=p[g],w=0;w<o.length;++w){var A=o[w];d.name==A.name&&(d.compression=A.compression,A.index>=0&&(b.idx[A.index]=g),d.offset=g)}if(i.acCompressedSize>0)switch(i.acCompression){case 0:var U=new Uint16Array(i.totalAcUncompressedCount);m(e.array,r,t,i.acCompressedSize,U,i.totalAcUncompressedCount);break;case 1:var C=e.array.slice(t.value,t.value+i.totalAcUncompressedCount),z=new a.a.Inflate(C,{resize:!0,verify:!0});U=new Uint16Array(z.decompress().buffer);t.value+=i.totalAcUncompressedCount}if(i.dcCompressedSize>0){var P={array:e.array,offset:t,size:i.dcCompressedSize},N=new Uint16Array(x(P).buffer);t.value+=i.dcCompressedSize}if(i.rleRawSize>0){C=e.array.slice(t.value,t.value+i.rleCompressedSize);var T=S((z=new a.a.Inflate(C,{resize:!0,verify:!0})).decompress().buffer);t.value+=i.rleCompressedSize}var F=0,L=new Array(p.length);for(w=0;w<L.length;++w)L[w]=new Array;for(var V=0;V<e.lines;++V)for(var X=0;X<p.length;++X)L[X].push(F),F+=p[X].width*e.type*2;!function(e,r,t,n,i,a){var o=new DataView(a.buffer),s=t[e.idx[0]].width,f=t[e.idx[0]].height,h=Math.floor(s/8),l=Math.ceil(s/8),u=Math.ceil(f/8),c=s-8*(l-1),v=f-8*(u-1),p={value:0},w=new Array(3),d=new Array(3),y=new Array(3),b=new Array(3),g=new Array(3);for(let t=0;t<3;++t)g[t]=r[e.idx[t]],w[t]=t<1?0:w[t-1]+l*u,d[t]=new Float32Array(64),y[t]=new Uint16Array(64),b[t]=new Uint16Array(64*l);for(let r=0;r<u;++r){var m=8;r==u-1&&(m=v);var A=8;for(let e=0;e<l;++e){e==l-1&&(A=c);for(let e=0;e<3;++e)y[e].fill(0),y[e][0]=i[w[e]++],E(p,n,y[e]),M(y[e],d[e]),I(d[e]);O(d);for(let r=0;r<3;++r)k(d[r],b[r],64*e)}let a=0;for(let n=0;n<3;++n){let i=t[e.idx[n]].type;for(let e=8*r;e<8*r+m;++e){a=g[n][e];for(let r=0;r<h;++r){let t=64*r+8*(7&e);o.setUint16(a+0*i,b[n][t+0],!0),o.setUint16(a+2*i,b[n][t+1],!0),o.setUint16(a+4*i,b[n][t+2],!0),o.setUint16(a+6*i,b[n][t+3],!0),o.setUint16(a+8*i,b[n][t+4],!0),o.setUint16(a+10*i,b[n][t+5],!0),o.setUint16(a+12*i,b[n][t+6],!0),o.setUint16(a+14*i,b[n][t+7],!0),a+=16*i}}if(h!=l)for(let e=8*r;e<8*r+m;++e){let r=g[n][e]+8*h*2*i,t=64*h+8*(7&e);for(let e=0;e<A;++e)o.setUint16(r+2*e*i,b[n][t+e],!0)}}}for(var U=new Uint16Array(s),S=(o=new DataView(a.buffer),0);S<3;++S){t[e.idx[S]].decoded=!0;var C=t[e.idx[S]].type;if(2==t[S].type)for(var x=0;x<f;++x){let e=g[S][x];for(var z=0;z<s;++z)U[z]=o.getUint16(e+2*z*C,!0);for(z=0;z<s;++z)o.setFloat32(e+2*z*C,Z(U[z]),!0)}}}(b,L,p,U,N,n);for(w=0;w<p.length;++w){if(!(d=p[w]).decoded)switch(d.compression){case 2:var B=0,Y=0;for(V=0;V<e.lines;++V){for(var K=L[w][B],q=0;q<d.width;++q){for(var G=0;G<2*d.type;++G)n[K++]=T[Y+G*d.width*d.height];Y++}B++}break;case 1:default:throw"EXRLoader.parse: unsupported channel compression"}}return new DataView(n.buffer)}function R(e,r){for(var t=new Uint8Array(e),n=0;0!=t[r.value+n];)n+=1;var i=(new TextDecoder).decode(t.slice(r.value,r.value+n));return r.value=r.value+n+1,i}function P(e,r){var t=e.getUint32(0,!0);return r.value=r.value+8,t}function N(e,r){var t=e.getInt32(r.value,!0);return r.value=r.value+4,t}function T(e,r){var t=e.getUint32(r.value,!0);return r.value=r.value+4,t}function F(e,r){var t=e[r.value];return r.value=r.value+1,t}function D(e,r){var t=e.getUint8(r.value);return r.value=r.value+1,t}function _(e,r){var t=Number(e.getBigInt64(r.value,!0));return r.value+=8,t}function L(e,r){var t=e.getFloat32(r.value,!0);return r.value+=4,t}function Z(e){var r=(31744&e)>>10,t=1023&e;return(e>>15?-1:1)*(r?31===r?t?NaN:1/0:Math.pow(2,r-15)*(1+t/1024):t/1024*6103515625e-14)}function V(e){t.setFloat32(0,e);var r=t.getInt32(0),n=r>>16&32768,i=r>>12&2047,a=r>>23&255;return a<103?n:a>142?(n|=31744,n|=(255==a?0:1)&&8388607&r):a<113?n|=((i|=2048)>>114-a)+(i>>113-a&1):(n|=a-112<<10|i>>1,n+=1&i)}function j(e,r){var t=e.getUint16(r.value,!0);return r.value+=2,t}function X(e,r,t,n,i){if("string"===n||"stringvector"===n||"iccProfile"===n)return function(e,r,t){var n=(new TextDecoder).decode(new Uint8Array(e).slice(r.value,r.value+t));return r.value=r.value+t,n}(r,t,i);if("chlist"===n)return function(e,r,t,n){for(var i=t.value,a=[];t.value<i+n-1;){var o=R(r,t),s=N(e,t),f=D(e,t);t.value+=3;var h=N(e,t),l=N(e,t);a.push({name:o,pixelType:s,pLinear:f,xSampling:h,ySampling:l})}return t.value+=1,a}(e,r,t,i);if("chromaticities"===n)return function(e,r){return{redX:L(e,r),redY:L(e,r),greenX:L(e,r),greenY:L(e,r),blueX:L(e,r),blueY:L(e,r),whiteX:L(e,r),whiteY:L(e,r)}}(e,t);if("compression"===n)return function(e,r){return["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"][D(e,r)]}(e,t);if("box2i"===n)return function(e,r){return{xMin:T(e,r),yMin:T(e,r),xMax:T(e,r),yMax:T(e,r)}}(e,t);if("lineOrder"===n)return function(e,r){return["INCREASING_Y"][D(e,r)]}(e,t);if("float"===n)return L(e,t);if("v2f"===n)return function(e,r){return[L(e,r),L(e,r)]}(e,t);if("int"===n)return N(e,t);if("rational"===n)return function(e,r){return[N(e,r),T(e,r)]}(e,t);if("timecode"===n)return function(e,r){return[T(e,r),T(e,r)]}(e,t);throw"Cannot parse value for unsupported type: "+n}var B=new DataView(e),Y=new Uint8Array(e),W={};B.getUint32(0,!0),B.getUint8(4,!0),B.getUint8(5,!0);for(var K={value:8},q=!0;q;){var G=R(e,K);if(0==G)q=!1;else{var H=X(B,e,K,R(e,K),T(B,K));W[G]=H}}var J,Q,$,ee,re=W.dataWindow.yMax+1;switch(W.compression){case"NO_COMPRESSION":Q=1,J=function(e){return new DataView(e.array.buffer,e.offset.value,e.size)};break;case"RLE_COMPRESSION":Q=1,J=function(e){var r=e.viewer.buffer.slice(e.offset.value,e.offset.value+e.size),t=new Uint8Array(S(r)),n=new Uint8Array(t.length);return A(t),U(t,n),new DataView(n.buffer)};break;case"ZIPS_COMPRESSION":Q=1,J=x;break;case"ZIP_COMPRESSION":Q=16,J=x;break;case"PIZ_COMPRESSION":Q=32,J=function(e){for(var r=e.viewer,t={value:e.offset.value},n=e.width*Q*(W.channels.length*e.type),i=new Uint16Array(n),a=new Uint8Array(8192),o=0,s=new Array(e.channels),f=0;f<e.channels;f++)s[f]={},s[f].start=o,s[f].end=s[f].start,s[f].nx=e.width,s[f].ny=e.lines,s[f].size=e.type,o+=s[f].nx*s[f].ny*s[f].size;var h=j(r,t),l=j(r,t);if(l>=8192)throw"Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";if(h<=l)for(f=0;f<l-h+1;f++)a[f+h]=D(r,t);var u=new Uint16Array(65536);!function(e,r){for(var t=0,n=0;n<65536;++n)(0==n||e[n>>3]&1<<(7&n))&&(r[t++]=n);for(var i=t-1;t<65536;)r[t++]=0}(a,u);var c=T(r,t);for(m(e.array,r,t,c,i,o),f=0;f<e.channels;++f)for(var v=s[f],p=0;p<s[f].size;++p)g(i,v.start+p,v.nx,v.size,v.ny,v.nx*v.size);!function(e,r,t){for(var n=0;n<t;++n)r[n]=e[r[n]]}(u,i,o);for(var w=0,d=new Uint8Array(i.buffer.byteLength),y=0;y<e.lines;y++)for(var b=0;b<e.channels;b++){var A=(v=s[b]).nx*v.size,U=new Uint8Array(i.buffer,2*v.end,2*A);d.set(U,w),w+=2*A,v.end+=A}return new DataView(d.buffer)};break;case"DWAA_COMPRESSION":Q=32,J=z;break;case"DWAB_COMPRESSION":Q=256,J=z;break;default:throw"EXRLoader.parse: "+W.compression+" is unsupported"}var te=W.channels[0].pixelType;if(1===te)switch(this.type){case i.Zc:case i.F:ee=function(e,r){return Z(j(e,r))},$=2;break;case i.K:ee=j,$=2}else{if(2!==te)throw"EXRLoader.parse: unsupported pixelType "+te+" for "+W.compression+".";switch(this.type){case i.Zc:case i.F:ee=L,$=4;break;case i.K:ee=function(e,r){return V(L(e,r))},$=4}}for(var ne=re/Q,ie=0;ie<ne;ie++)P(B,K);var ae=W.dataWindow.xMax-W.dataWindow.xMin+1,oe=W.dataWindow.yMax-W.dataWindow.yMin+1,se=ae*oe*4;switch(this.type){case i.Zc:case i.F:var fe=new Float32Array(se);W.channels.length<4&&fe.fill(1,0,se);break;case i.K:fe=new Uint16Array(se);W.channels.length<4&&fe.fill(15360,0,se);break;default:console.error("THREE.EXRLoader: unsupported type: ",this.type)}for(var he,le,ue={R:0,G:1,B:2,A:3},ce={size:0,width:ae,lines:Q,offset:K,array:Y,viewer:B,type:te,channels:W.channels.length},ve={value:0},pe=0;pe<oe/Q;pe++){he=T(B,K),se=T(B,K),ce.lines=he+Q>oe?oe-he:Q,ce.offset=K,ce.size=se,le=J(ce),K.value+=se;for(var we=0;we<Q;we++){var de=we+pe*Q;if(de>=oe)break;for(var ye=0;ye<W.channels.length;ye++)for(var be=ue[W.channels[ye].name],ge=0;ge<ae;ge++){var me=we*(W.channels.length*ae)+ye*ae+ge;ve.value=me*$;var Ae=ee(le,ve);fe[4*ae*(oe-1-de)+4*ge+be]=Ae}}}if(this.type===i.Zc){let e,r,t;const i=fe.length,a=new Uint8Array(i);for(let i=0;i<oe;++i)for(let o=0;o<ae;++o){r=i*ae*4+4*o,t=(oe-1-i)*ae*4+4*o;const s=fe[t],f=fe[t+1],h=fe[t+2];if(e=s>f?s:f,e=h>e?h:e,e<1e-32)a[r]=a[r+1]=a[r+2]=a[r+3]=0;else{const t=n(e);e=256*t[0]/e,a[r]=s*e,a[r+1]=f*e,a[r+2]=h*e,a[r+3]=t[1]+128}}fe=a}let Ue=this.type===i.Zc?i.fc:i.Gb;return{header:W,width:ae,height:oe,data:fe,format:Ue,type:this.type}},setDataType:function(e){return this.type=e,this},load:function(e,r,t,a){return n.a.prototype.load.call(this,e,(function(e,t){switch(e.type){case i.Zc:e.encoding=i.ec,e.minFilter=i.mb,e.magFilter=i.mb,e.generateMipmaps=!1,e.flipY=!0;break;case i.F:case i.K:e.encoding=i.S,e.minFilter=i.T,e.magFilter=i.T,e.generateMipmaps=!1,e.flipY=!1}r&&r(e,t)}),t,a)}})}}]);
//# sourceMappingURL=3.bundle.js.map