import{T as m,S as A,U as L,P as O,R as g,D as h,C as E,j as Y,y as _,V as j,Q as C,W as H,X as I,Y as S,Z as V,_ as $,v as M,p as W,h as w,$ as k,a as q,b as P}from"./runtime.BjjJ-t6S.js";import{m as Q,r as D,o as U,p as y,j as X,q as Z}from"./disclose-version.CsGTd31q.js";function G(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n==null?"":n+"")}function z(t,e){return N(t,e)}function J(t,e){m(),e.intro=e.intro??!1;const n=e.target,l=w,u=_;try{for(var a=A(n);a&&(a.nodeType!==8||a.data!==L);)a=O(a);if(!a)throw g;h(!0),E(a),Y();const i=N(t,{...e,anchor:a});if(_===null||_.nodeType!==8||_.data!==j)throw C(),g;return h(!1),i}catch(i){if(i===g)return e.recover===!1&&H(),m(),I(n),h(!1),z(t,e);throw i}finally{h(l),E(u),U()}}const o=new Map;function N(t,{target:e,anchor:n,props:l={},events:u,context:a,intro:i=!0}){m();var v=new Set,p=d=>{for(var r=0;r<d.length;r++){var s=d[r];if(!v.has(s)){v.add(s);var f=Z(s);e.addEventListener(s,y,{passive:f});var T=o.get(s);T===void 0?(document.addEventListener(s,y,{passive:f}),o.set(s,1)):o.set(s,T+1)}}};p(S(Q)),D.add(p);var c=void 0,b=V(()=>{var d=n??e.appendChild($());return M(()=>{if(a){W({});var r=P;r.c=a}u&&(l.$$events=u),w&&X(d,null),c=t(d,l)||{},w&&(k.nodes_end=_),a&&q()}),()=>{var f;for(var r of v){e.removeEventListener(r,y);var s=o.get(r);--s===0?(document.removeEventListener(r,y),o.delete(r)):o.set(r,s)}D.delete(p),R.delete(c),d!==n&&((f=d.parentNode)==null||f.removeChild(d))}});return R.set(c,b),c}let R=new WeakMap;function K(t){const e=R.get(t);e&&e()}export{J as h,z as m,G as s,K as u};
