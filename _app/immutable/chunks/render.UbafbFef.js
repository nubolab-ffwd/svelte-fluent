import{N as m,M as b,O as A,J as D,L as p,I as h,G as E,e as I,B as _,P as H,K as M,Q as S,R as V,S as Y,T as C,U as $,y as j,p as k,h as w,V as B,a as G,b as J}from"./runtime.DtK2zpN_.js";import{f as K,r as N,g as P,h as y,d as Q,i as U}from"./disclose-version._CMtWdZU.js";function F(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n==null?"":n+"")}function W(t,e){return L(t,e)}function X(t,e){m(),e.intro=e.intro??!1;const n=e.target,l=w,u=_;try{for(var a=b(n);a&&(a.nodeType!==8||a.data!==A);)a=D(a);if(!a)throw p;h(!0),E(a),I();const o=L(t,{...e,anchor:a});if(_===null||_.nodeType!==8||_.data!==H)throw M(),p;return h(!1),o}catch(o){if(o===p)return e.recover===!1&&S(),m(),V(n),h(!1),W(t,e);throw o}finally{h(l),E(u),P()}}const i=new Map;function L(t,{target:e,anchor:n,props:l={},events:u,context:a,intro:o=!0}){m();var g=new Set,v=d=>{for(var r=0;r<d.length;r++){var s=d[r];if(!g.has(s)){g.add(s);var f=U(s);e.addEventListener(s,y,{passive:f});var T=i.get(s);T===void 0?(document.addEventListener(s,y,{passive:f}),i.set(s,1)):i.set(s,T+1)}}};v(Y(K)),N.add(v);var c=void 0,O=C(()=>{var d=n??e.appendChild($());return j(()=>{if(a){k({});var r=J;r.c=a}u&&(l.$$events=u),w&&Q(d,null),c=t(d,l)||{},w&&(B.nodes_end=_),a&&G()}),()=>{var f;for(var r of g){e.removeEventListener(r,y);var s=i.get(r);--s===0?(document.removeEventListener(r,y),i.delete(r)):i.set(r,s)}N.delete(v),R.delete(c),d!==n&&((f=d.parentNode)==null||f.removeChild(d))}});return R.set(c,O),c}let R=new WeakMap;function Z(t){const e=R.get(t);e&&e()}export{X as h,W as m,F as s,Z as u};
