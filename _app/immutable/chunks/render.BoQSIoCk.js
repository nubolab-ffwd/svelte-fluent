import{V as m,T as A,W as I,P as L,R as p,I as c,G as E,j as O,D as _,X as Y,Q as H,Y as V,Z as $,_ as j,$ as C,a0 as M,B as P,p as S,h as w,a1 as W,a as k,b as B}from"./runtime.CIss1fFT.js";import{f as G,r as D,g as Q,h,d as X,i as Z}from"./disclose-version.BIrqyZau.js";function J(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r+"")}function q(t,e){return N(t,e)}function K(t,e){m(),e.intro=e.intro??!1;const r=e.target,l=w,u=_;try{for(var a=A(r);a&&(a.nodeType!==8||a.data!==I);)a=L(a);if(!a)throw p;c(!0),E(a),O();const o=N(t,{...e,anchor:a});if(_===null||_.nodeType!==8||_.data!==Y)throw H(),p;return c(!1),o}catch(o){if(o===p)return e.recover===!1&&V(),m(),$(r),c(!1),q(t,e);throw o}finally{c(l),E(u),Q()}}const i=new Map;function N(t,{target:e,anchor:r,props:l={},events:u,context:a,intro:o=!0}){m();var v=new Set,y=d=>{for(var s=0;s<d.length;s++){var n=d[s];if(!v.has(n)){v.add(n);var f=Z(n);e.addEventListener(n,h,{passive:f});var T=i.get(n);T===void 0?(document.addEventListener(n,h,{passive:f}),i.set(n,1)):i.set(n,T+1)}}};y(j(G)),D.add(y);var g=void 0,b=C(()=>{var d=r??e.appendChild(M());return P(()=>{if(a){S({});var s=B;s.c=a}u&&(l.$$events=u),w&&X(d,null),g=t(d,l)||{},w&&(W.nodes_end=_),a&&k()}),()=>{var f;for(var s of v){e.removeEventListener(s,h);var n=i.get(s);--n===0?(document.removeEventListener(s,h),i.delete(s)):i.set(s,n)}D.delete(y),d!==r&&((f=d.parentNode)==null||f.removeChild(d))}});return R.set(g,b),g}let R=new WeakMap;function U(t,e){const r=R.get(t);return r?(R.delete(t),r(e)):Promise.resolve()}export{K as h,q as m,J as s,U as u};
