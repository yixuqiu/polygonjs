(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{998:function(t,e,r){"use strict";r.r(e),r.d(e,"SVGLoader",(function(){return S}));var a,o,n,i,c,s,u,l,y,p,h,f,b,v,x,d,g,m=r(6),k=r(30),w=r(4),A=r(18),M=r(25),T=r(73),V=r(87),C=r(3),P=r(1),S=function(t){A.a.call(this,t),this.defaultDPI=90,this.defaultUnit="px"};S.prototype=Object.assign(Object.create(A.a.prototype),{constructor:S,load:function(t,e,r,a){var o=this,n=new k.a(o.manager);n.setPath(o.path),n.load(t,(function(t){e(o.parse(t))}),r,a)},parse:function(t){var e=this;function r(t,e,r,o,n,i,c,s){o=o*Math.PI/180,e=Math.abs(e),r=Math.abs(r);var u=(c.x-s.x)/2,l=(c.y-s.y)/2,y=Math.cos(o)*u+Math.sin(o)*l,p=-Math.sin(o)*u+Math.cos(o)*l,h=e*e,f=r*r,b=y*y,v=p*p,x=b/h+v/f;if(x>1){var d=Math.sqrt(x);h=(e*=d)*e,f=(r*=d)*r}var g=h*v+f*b,m=(h*f-g)/g,k=Math.sqrt(Math.max(0,m));n===i&&(k=-k);var w=k*e*p/r,A=-k*r*y/e,M=Math.cos(o)*w-Math.sin(o)*A+(c.x+s.x)/2,T=Math.sin(o)*w+Math.cos(o)*A+(c.y+s.y)/2,V=a(1,0,(y-w)/e,(p-A)/r),C=a((y-w)/e,(p-A)/r,(-y-w)/e,(-p-A)/r)%(2*Math.PI);t.currentPath.absellipse(M,T,e,r,V,V+C,0===i,o)}function a(t,e,r,a){var o=t*r+e*a,n=Math.sqrt(t*t+e*e)*Math.sqrt(r*r+a*a),i=Math.acos(Math.max(-1,Math.min(1,o/n)));return t*a-e*r<0&&(i=-i),i}function o(t,e){function r(r,a,o){void 0===o&&(o=function(t){return t}),t.hasAttribute(r)&&(e[a]=o(t.getAttribute(r))),t.style&&""!==t.style[r]&&(e[a]=o(t.style[r]))}function a(t){return Math.max(0,Math.min(1,u(t)))}function o(t){return Math.max(0,u(t))}return e=Object.assign({},e),r("fill","fill"),r("fill-opacity","fillOpacity",a),r("stroke","stroke"),r("stroke-opacity","strokeOpacity",a),r("stroke-width","strokeWidth",o),r("stroke-linejoin","strokeLineJoin"),r("stroke-linecap","strokeLineCap"),r("stroke-miterlimit","strokeMiterLimit",o),e}function n(t,e){return t-(e-t)}function i(t){for(var e=t.split(/[\s,]+|(?=\s?[+\-])/),r=0;r<e.length;r++){var a=e[r];if(a.indexOf(".")!==a.lastIndexOf("."))for(var o=a.split("."),n=2;n<o.length;n++)e.splice(r+n-1,0,"0."+o[n]);e[r]=u(a)}return e}var c=["mm","cm","in","pt","pc","px"],s={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:12,pc:1,px:-1},px:{px:1}};function u(t){var r="px";if("string"==typeof t||t instanceof String)for(var a=0,o=c.length;a<o;a++){var n=c[a];if(t.endsWith(n)){r=n,t=t.substring(0,t.length-n.length);break}}var i=void 0;return"px"===r&&"px"!==e.defaultUnit?i=s.in[e.defaultUnit]/e.defaultDPI:(i=s[r][e.defaultUnit])<0&&(i=s[r].in*e.defaultDPI),i*parseFloat(t)}function l(t){var e=t.elements;return Math.sqrt(e[0]*e[0]+e[1]*e[1])}function y(t){var e=t.elements;return Math.sqrt(e[3]*e[3]+e[4]*e[4])}var p=[],h=[],f=new M.a,b=new M.a,v=new M.a,x=new M.a,d=new C.Vector2,g=new P.Vector3,m=new M.a,k=(new DOMParser).parseFromString(t,"image/svg+xml");return function t(e,a){if(1===e.nodeType){var c=function(t){if(!t.hasAttribute("transform"))return null;var e=function(t){for(var e=new M.a,r=f,a=t.getAttribute("transform").split(")"),o=a.length-1;o>=0;o--){var n=a[o].trim();if(""!==n){var c=n.indexOf("("),s=n.length;if(c>0&&c<s){var u=n.substr(0,c),l=i(n.substr(c+1,s-c-1));switch(r.identity(),u){case"translate":if(l.length>=1){var y=l[0],p=y;l.length>=2&&(p=l[1]),r.translate(y,p)}break;case"rotate":if(l.length>=1){var h,d=0,g=0;h=-l[0]*Math.PI/180,l.length>=3&&(d=l[1],g=l[2]),b.identity().translate(-d,-g),v.identity().rotate(h),x.multiplyMatrices(v,b),b.identity().translate(d,g),r.multiplyMatrices(b,x)}break;case"scale":if(l.length>=1){var m=l[0],k=m;l.length>=2&&(k=l[1]),r.scale(m,k)}break;case"skewX":1===l.length&&r.set(1,Math.tan(l[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":1===l.length&&r.set(1,0,0,Math.tan(l[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":6===l.length&&r.set(l[0],l[2],l[4],l[1],l[3],l[5],0,0,1)}}e.premultiply(r)}}return e}(t);h.length>0&&e.premultiply(h[h.length-1]);return m.copy(e),h.push(e),e}(e),s=null;switch(e.nodeName){case"svg":break;case"g":a=o(e,a);break;case"path":a=o(e,a),e.hasAttribute("d")&&(s=function(t){for(var e=new V.a,a=new C.Vector2,o=new C.Vector2,c=new C.Vector2,s=!0,u=!1,l=t.getAttribute("d").match(/[a-df-z][^a-df-z]*/gi),y=0,p=l.length;y<p;y++){var h=l[y],f=h.charAt(0),b=h.substr(1).trim();switch(!0===s&&(u=!0,s=!1),f){case"M":for(var v=i(b),x=0,d=v.length;x<d;x+=2)a.x=v[x+0],a.y=v[x+1],o.x=a.x,o.y=a.y,0===x?e.moveTo(a.x,a.y):e.lineTo(a.x,a.y),0===x&&!0===u&&c.copy(a);break;case"H":for(v=i(b),x=0,d=v.length;x<d;x++)a.x=v[x],o.x=a.x,o.y=a.y,e.lineTo(a.x,a.y),0===x&&!0===u&&c.copy(a);break;case"V":for(v=i(b),x=0,d=v.length;x<d;x++)a.y=v[x],o.x=a.x,o.y=a.y,e.lineTo(a.x,a.y),0===x&&!0===u&&c.copy(a);break;case"L":for(v=i(b),x=0,d=v.length;x<d;x+=2)a.x=v[x+0],a.y=v[x+1],o.x=a.x,o.y=a.y,e.lineTo(a.x,a.y),0===x&&!0===u&&c.copy(a);break;case"C":for(v=i(b),x=0,d=v.length;x<d;x+=6)e.bezierCurveTo(v[x+0],v[x+1],v[x+2],v[x+3],v[x+4],v[x+5]),o.x=v[x+2],o.y=v[x+3],a.x=v[x+4],a.y=v[x+5],0===x&&!0===u&&c.copy(a);break;case"S":for(v=i(b),x=0,d=v.length;x<d;x+=4)e.bezierCurveTo(n(a.x,o.x),n(a.y,o.y),v[x+0],v[x+1],v[x+2],v[x+3]),o.x=v[x+0],o.y=v[x+1],a.x=v[x+2],a.y=v[x+3],0===x&&!0===u&&c.copy(a);break;case"Q":for(v=i(b),x=0,d=v.length;x<d;x+=4)e.quadraticCurveTo(v[x+0],v[x+1],v[x+2],v[x+3]),o.x=v[x+0],o.y=v[x+1],a.x=v[x+2],a.y=v[x+3],0===x&&!0===u&&c.copy(a);break;case"T":for(v=i(b),x=0,d=v.length;x<d;x+=2){var g=n(a.x,o.x),m=n(a.y,o.y);e.quadraticCurveTo(g,m,v[x+0],v[x+1]),o.x=g,o.y=m,a.x=v[x+0],a.y=v[x+1],0===x&&!0===u&&c.copy(a)}break;case"A":for(v=i(b),x=0,d=v.length;x<d;x+=7){var k=a.clone();a.x=v[x+5],a.y=v[x+6],o.x=a.x,o.y=a.y,r(e,v[x],v[x+1],v[x+2],v[x+3],v[x+4],k,a),0===x&&!0===u&&c.copy(a)}break;case"m":for(v=i(b),x=0,d=v.length;x<d;x+=2)a.x+=v[x+0],a.y+=v[x+1],o.x=a.x,o.y=a.y,0===x?e.moveTo(a.x,a.y):e.lineTo(a.x,a.y),0===x&&!0===u&&c.copy(a);break;case"h":for(v=i(b),x=0,d=v.length;x<d;x++)a.x+=v[x],o.x=a.x,o.y=a.y,e.lineTo(a.x,a.y),0===x&&!0===u&&c.copy(a);break;case"v":for(v=i(b),x=0,d=v.length;x<d;x++)a.y+=v[x],o.x=a.x,o.y=a.y,e.lineTo(a.x,a.y),0===x&&!0===u&&c.copy(a);break;case"l":for(v=i(b),x=0,d=v.length;x<d;x+=2)a.x+=v[x+0],a.y+=v[x+1],o.x=a.x,o.y=a.y,e.lineTo(a.x,a.y),0===x&&!0===u&&c.copy(a);break;case"c":for(v=i(b),x=0,d=v.length;x<d;x+=6)e.bezierCurveTo(a.x+v[x+0],a.y+v[x+1],a.x+v[x+2],a.y+v[x+3],a.x+v[x+4],a.y+v[x+5]),o.x=a.x+v[x+2],o.y=a.y+v[x+3],a.x+=v[x+4],a.y+=v[x+5],0===x&&!0===u&&c.copy(a);break;case"s":for(v=i(b),x=0,d=v.length;x<d;x+=4)e.bezierCurveTo(n(a.x,o.x),n(a.y,o.y),a.x+v[x+0],a.y+v[x+1],a.x+v[x+2],a.y+v[x+3]),o.x=a.x+v[x+0],o.y=a.y+v[x+1],a.x+=v[x+2],a.y+=v[x+3],0===x&&!0===u&&c.copy(a);break;case"q":for(v=i(b),x=0,d=v.length;x<d;x+=4)e.quadraticCurveTo(a.x+v[x+0],a.y+v[x+1],a.x+v[x+2],a.y+v[x+3]),o.x=a.x+v[x+0],o.y=a.y+v[x+1],a.x+=v[x+2],a.y+=v[x+3],0===x&&!0===u&&c.copy(a);break;case"t":for(v=i(b),x=0,d=v.length;x<d;x+=2){g=n(a.x,o.x),m=n(a.y,o.y);e.quadraticCurveTo(g,m,a.x+v[x+0],a.y+v[x+1]),o.x=g,o.y=m,a.x=a.x+v[x+0],a.y=a.y+v[x+1],0===x&&!0===u&&c.copy(a)}break;case"a":for(v=i(b),x=0,d=v.length;x<d;x+=7){k=a.clone();a.x+=v[x+5],a.y+=v[x+6],o.x=a.x,o.y=a.y,r(e,v[x],v[x+1],v[x+2],v[x+3],v[x+4],k,a),0===x&&!0===u&&c.copy(a)}break;case"Z":case"z":e.currentPath.autoClose=!0,e.currentPath.curves.length>0&&(a.copy(c),e.currentPath.currentPoint.copy(a),s=!0);break;default:console.warn(h)}u=!1}return e}(e));break;case"rect":a=o(e,a),s=function(t){var e=u(t.getAttribute("x")||0),r=u(t.getAttribute("y")||0),a=u(t.getAttribute("rx")||0),o=u(t.getAttribute("ry")||0),n=u(t.getAttribute("width")),i=u(t.getAttribute("height")),c=new V.a;c.moveTo(e+2*a,r),c.lineTo(e+n-2*a,r),(0!==a||0!==o)&&c.bezierCurveTo(e+n,r,e+n,r,e+n,r+2*o);c.lineTo(e+n,r+i-2*o),(0!==a||0!==o)&&c.bezierCurveTo(e+n,r+i,e+n,r+i,e+n-2*a,r+i);c.lineTo(e+2*a,r+i),(0!==a||0!==o)&&c.bezierCurveTo(e,r+i,e,r+i,e,r+i-2*o);c.lineTo(e,r+2*o),(0!==a||0!==o)&&c.bezierCurveTo(e,r,e,r,e+2*a,r);return c}(e);break;case"polygon":a=o(e,a),s=function(t){function e(t,e,o){var n=u(e),i=u(o);0===a?r.moveTo(n,i):r.lineTo(n,i),a++}var r=new V.a,a=0;return t.getAttribute("points").replace(/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,e),r.currentPath.autoClose=!0,r}(e);break;case"polyline":a=o(e,a),s=function(t){function e(t,e,o){var n=u(e),i=u(o);0===a?r.moveTo(n,i):r.lineTo(n,i),a++}var r=new V.a,a=0;return t.getAttribute("points").replace(/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,e),r.currentPath.autoClose=!1,r}(e);break;case"circle":a=o(e,a),s=function(t){var e=u(t.getAttribute("cx")),r=u(t.getAttribute("cy")),a=u(t.getAttribute("r")),o=new T.a;o.absarc(e,r,a,0,2*Math.PI);var n=new V.a;return n.subPaths.push(o),n}(e);break;case"ellipse":a=o(e,a),s=function(t){var e=u(t.getAttribute("cx")),r=u(t.getAttribute("cy")),a=u(t.getAttribute("rx")),o=u(t.getAttribute("ry")),n=new T.a;n.absellipse(e,r,a,o,0,2*Math.PI);var i=new V.a;return i.subPaths.push(n),i}(e);break;case"line":a=o(e,a),s=function(t){var e=u(t.getAttribute("x1")),r=u(t.getAttribute("y1")),a=u(t.getAttribute("x2")),o=u(t.getAttribute("y2")),n=new V.a;return n.moveTo(e,r),n.lineTo(a,o),n.currentPath.autoClose=!1,n}(e);break;default:console.log(e)}s&&(void 0!==a.fill&&"none"!==a.fill&&s.color.setStyle(a.fill),function(t,e){function r(t){g.set(t.x,t.y,1).applyMatrix3(e),t.set(g.x,g.y)}for(var a=function(t){return 0!==t.elements[1]||0!==t.elements[3]}(e),o=t.subPaths,n=0,i=o.length;n<i;n++)for(var c=o[n].curves,s=0;s<c.length;s++){var u=c[s];u.isLineCurve?(r(u.v1),r(u.v2)):u.isCubicBezierCurve?(r(u.v0),r(u.v1),r(u.v2),r(u.v3)):u.isQuadraticBezierCurve?(r(u.v0),r(u.v1),r(u.v2)):u.isEllipseCurve&&(a&&console.warn("SVGLoader: Elliptic arc or ellipse rotation or skewing is not implemented."),d.set(u.aX,u.aY),r(d),u.aX=d.x,u.aY=d.y,u.xRadius*=l(e),u.yRadius*=y(e))}}(s,m),p.push(s),s.userData={node:e,style:a});for(var k=e.childNodes,w=0;w<k.length;w++)t(k[w],a);c&&(h.pop(),h.length>0?m.copy(h[h.length-1]):m.identity())}}(k.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:p,xml:k.documentElement}}}),S.getStrokeStyle=function(t,e,r,a,o){return{strokeColor:e=void 0!==e?e:"#000",strokeWidth:t=void 0!==t?t:1,strokeLineJoin:r=void 0!==r?r:"miter",strokeLineCap:a=void 0!==a?a:"butt",strokeMiterLimit:o=void 0!==o?o:4}},S.pointsToStroke=function(t,e,r,a){var o=[],n=[],i=[];if(0===S.pointsToStrokeWithBuffers(t,e,r,a,o,n,i))return null;var c=new m.BufferGeometry;return c.setAttribute("position",new w.Float32BufferAttribute(o,3)),c.setAttribute("normal",new w.Float32BufferAttribute(n,3)),c.setAttribute("uv",new w.Float32BufferAttribute(i,2)),c},S.pointsToStrokeWithBuffers=(a=new C.Vector2,o=new C.Vector2,n=new C.Vector2,i=new C.Vector2,c=new C.Vector2,s=new C.Vector2,u=new C.Vector2,l=new C.Vector2,y=new C.Vector2,p=new C.Vector2,h=new C.Vector2,f=new C.Vector2,b=new C.Vector2,v=new C.Vector2,x=new C.Vector2,d=new C.Vector2,g=new C.Vector2,function(t,e,r,m,k,w,A,M){r=void 0!==r?r:12,m=void 0!==m?m:.001,M=void 0!==M?M:0;var T=(t=function(t){for(var e=!1,r=1,a=t.length-1;r<a;r++)if(t[r].distanceTo(t[r+1])<m){e=!0;break}if(!e)return t;var o=[];for(o.push(t[0]),r=1,a=t.length-1;r<a;r++)t[r].distanceTo(t[r+1])>=m&&o.push(t[r]);return o.push(t[t.length-1]),o}(t)).length;if(T<2)return 0;var V,C,P,S,L,z=t[0].equals(t[T-1]),q=t[0],I=e.strokeWidth/2,O=1/(T-1),B=0,J=!1,W=0,D=3*M,F=2*M;K(t[0],t[1],a).multiplyScalar(I),l.copy(t[0]).sub(a),y.copy(t[0]).add(a),p.copy(l),h.copy(y);for(var j=1;j<T;j++){V=t[j],C=j===T-1?z?t[1]:void 0:t[j+1];var E=a;K(q,V,E),n.copy(E).multiplyScalar(I),f.copy(V).sub(n),b.copy(V).add(n);var U=B+O;if(P=!1,void 0!==C){K(V,C,o),n.copy(o).multiplyScalar(I),v.copy(V).sub(n),x.copy(V).add(n),S=!0,n.subVectors(C,q),E.dot(n)<0&&(S=!1),1===j&&(J=S),n.subVectors(C,V),n.normalize();var G=Math.abs(E.dot(n));if(0!==G){var X=I/G;n.multiplyScalar(-X),i.subVectors(V,q),c.copy(i).setLength(X).add(n),d.copy(c).negate();var Y=c.length(),N=i.length();i.divideScalar(N),s.subVectors(C,V);var Q=s.length();switch(s.divideScalar(Q),i.dot(d)<N&&s.dot(d)<Q&&(P=!0),g.copy(c).add(V),d.add(V),L=!1,P?S?(x.copy(d),b.copy(d)):(v.copy(d),f.copy(d)):tt(),e.strokeLineJoin){case"bevel":et(S,P,U);break;case"round":rt(S,P),S?_(V,f,v,U,0):_(V,x,b,U,1);break;case"miter":case"miter-clip":default:var R=I*e.strokeMiterLimit/Y;if(R<1){if("miter-clip"!==e.strokeLineJoin){et(S,P,U);break}rt(S,P),S?(s.subVectors(g,f).multiplyScalar(R).add(f),u.subVectors(g,v).multiplyScalar(R).add(v),$(f,U,0),$(s,U,0),$(V,U,.5),$(V,U,.5),$(s,U,0),$(u,U,0),$(V,U,.5),$(u,U,0),$(v,U,0)):(s.subVectors(g,b).multiplyScalar(R).add(b),u.subVectors(g,x).multiplyScalar(R).add(x),$(b,U,1),$(s,U,1),$(V,U,.5),$(V,U,.5),$(s,U,1),$(u,U,1),$(V,U,.5),$(u,U,1),$(x,U,1))}else P?(S?($(y,B,1),$(l,B,0),$(g,U,0),$(y,B,1),$(g,U,0),$(d,U,1)):($(y,B,1),$(l,B,0),$(g,U,1),$(l,B,0),$(d,U,0),$(g,U,1)),S?v.copy(g):x.copy(g)):S?($(f,U,0),$(g,U,0),$(V,U,.5),$(V,U,.5),$(g,U,0),$(v,U,0)):($(b,U,1),$(g,U,1),$(V,U,.5),$(V,U,.5),$(g,U,1),$(x,U,1)),L=!0}}else tt()}else tt();z||j!==T-1||at(t[0],p,h,S,!0,B),B=U,q=V,l.copy(v),y.copy(x)}if(z){if(P&&k){var H=g,Z=d;J!==S&&(H=d,Z=g),S?(L||J)&&(Z.toArray(k,0),Z.toArray(k,9),L&&H.toArray(k,3)):!L&&J||(Z.toArray(k,3),Z.toArray(k,9),L&&H.toArray(k,0))}}else at(V,f,b,S,!1,U);return W;function K(t,e,r){return r.subVectors(e,t),r.set(-r.y,r.x).normalize()}function $(t,e,r){k&&(k[D]=t.x,k[D+1]=t.y,k[D+2]=0,w&&(w[D]=0,w[D+1]=0,w[D+2]=1),D+=3,A&&(A[F]=e,A[F+1]=r,F+=2)),W+=3}function _(t,e,c,s,u){a.copy(e).sub(t).normalize(),o.copy(c).sub(t).normalize();var l=Math.PI,y=a.dot(o);Math.abs(y)<1&&(l=Math.abs(Math.acos(y))),l/=r,n.copy(e);for(var p=0,h=r-1;p<h;p++)i.copy(n).rotateAround(t,l),$(n,s,u),$(i,s,u),$(t,s,.5),n.copy(i);$(i,s,u),$(c,s,u),$(t,s,.5)}function tt(){$(y,B,1),$(l,B,0),$(f,U,0),$(y,B,1),$(f,U,1),$(b,U,0)}function et(t,e,r){e?t?($(y,B,1),$(l,B,0),$(f,U,0),$(y,B,1),$(f,U,0),$(d,U,1),$(f,r,0),$(v,r,0),$(d,r,.5)):($(y,B,1),$(l,B,0),$(b,U,1),$(l,B,0),$(d,U,0),$(b,U,1),$(b,r,1),$(x,r,0),$(d,r,.5)):t?($(f,r,0),$(v,r,0),$(V,r,.5)):($(b,r,1),$(x,r,0),$(V,r,.5))}function rt(t,e){e&&(t?($(y,B,1),$(l,B,0),$(f,U,0),$(y,B,1),$(f,U,0),$(d,U,1),$(f,B,0),$(V,U,.5),$(d,U,1),$(V,U,.5),$(v,B,0),$(d,U,1)):($(y,B,1),$(l,B,0),$(b,U,1),$(l,B,0),$(d,U,0),$(b,U,1),$(b,B,1),$(d,U,0),$(V,U,.5),$(V,U,.5),$(d,U,0),$(x,B,1)))}function at(t,r,c,s,u,l){switch(e.strokeLineCap){case"round":u?_(t,c,r,l,.5):_(t,r,c,l,.5);break;case"square":if(u)a.subVectors(r,t),o.set(a.y,-a.x),n.addVectors(a,o).add(t),i.subVectors(o,a).add(t),s?(n.toArray(k,3),i.toArray(k,0),i.toArray(k,9)):(n.toArray(k,3),n.toArray(k,9),i.toArray(k,0));else{a.subVectors(c,t),o.set(a.y,-a.x),n.addVectors(a,o).add(t),i.subVectors(o,a).add(t);var y=k.length;s?(n.toArray(k,y-3),i.toArray(k,y-6),i.toArray(k,y-12)):(n.toArray(k,y-6),i.toArray(k,y-3),i.toArray(k,y-12))}}}})}}]);
//# sourceMappingURL=modules_three-polygonjs-engine-SVGLoader.js.js.map