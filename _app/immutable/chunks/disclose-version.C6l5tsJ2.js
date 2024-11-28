import{av as D,aA as m,ah as y,aB as O,_ as E,ax as B,i as V,Z as g,q as W,aC as j,h as f,T as q,O as L,D as N,C as w,y as u,R as _,aD as F,aE as H,j as U}from"./runtime.Bvcusis5.js";function ee(e,t){if(t){const r=document.body;e.autofocus=!0,D(()=>{document.activeElement===r&&e.focus()})}}let k=!1;function $(){k||(k=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function x(e){var t=O,r=E;m(null),y(null);try{return e()}finally{m(t),y(r)}}function te(e,t,r,o=r){e.addEventListener(t,()=>x(r));const n=e.__on_r;n?e.__on_r=()=>{n(),o()}:e.__on_r=o,$()}const G=new Set,z=new Set;function re(e,t,r,o){function n(a){if(o.capture||Y.call(t,a),!a.cancelBubble)return x(()=>r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?D(()=>{t.addEventListener(e,n,o)}):t.addEventListener(e,n,o),n}function ae(e){for(var t=0;t<e.length;t++)G.add(e[t]);for(var r of z)r(e)}function Y(e){var A;var t=this,r=t.ownerDocument,o=e.type,n=((A=e.composedPath)==null?void 0:A.call(e))||[],a=n[0]||e.target,s=0,d=e.__root;if(d){var c=n.indexOf(d);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var b=n.indexOf(t);if(b===-1)return;c<=b&&(s=c)}if(a=n[s]||e.target,a!==t){B(e,"currentTarget",{configurable:!0,get(){return a||r}});var I=O,M=E;m(null),y(null);try{for(var p,S=[];a!==null;){var T=a.assignedSlot||a.parentNode||a.host||null;try{var v=a["__"+o];if(v!==void 0&&!a.disabled)if(V(v)){var[P,...R]=v;P.apply(a,[e,...R])}else v.call(a,e)}catch(h){p?S.push(h):p=h}if(e.cancelBubble||T===t||T===null)break;a=T}if(p){for(let h of S)queueMicrotask(()=>{throw h});throw p}}finally{e.__root=t,delete e.currentTarget,m(I),y(M)}}}let i;function ne(){i=void 0}function oe(e){let t=null,r=f;var o;if(f){for(t=u,i===void 0&&(i=_(document.head));i!==null&&(i.nodeType!==8||i.data!==q);)i=L(i);i===null?N(!1):i=w(L(i))}f||(o=document.head.appendChild(g()));try{W(()=>e(o),j)}finally{r&&(N(!0),i=u,w(t))}}function C(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function l(e,t){var r=E;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function ie(e,t){var r=(t&F)!==0,o=(t&H)!==0,n,a=!e.startsWith("<!>");return()=>{if(f)return l(u,null),u;n===void 0&&(n=C(a?e:"<!>"+e),r||(n=_(n)));var s=o?document.importNode(n,!0):n.cloneNode(!0);if(r){var d=_(s),c=s.lastChild;l(d,c)}else l(s,s);return s}}function se(e,t,r="svg"){var o=!e.startsWith("<!>"),n=`<${r}>${o?e:"<!>"+e}</${r}>`,a;return()=>{if(f)return l(u,null),u;if(!a){var s=C(n),d=_(s);a=_(d)}var c=a.cloneNode(!0);return l(c,c),c}}function ue(e=""){if(!f){var t=g(e+"");return l(t,t),t}var r=u;return r.nodeType!==3&&(r.before(r=g()),w(r)),l(r,r),r}function ce(){if(f)return l(u,null),u;var e=document.createDocumentFragment(),t=document.createComment(""),r=g();return e.append(t,r),l(t,r),e}function le(e,t){if(f){E.nodes_end=u,U();return}e!==null&&e.before(t)}function fe(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Z=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function de(e){return Z.includes(e)}const J={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",srcobject:"srcObject"};function _e(e){return e=e.toLowerCase(),J[e]??e}const K=["touchstart","touchmove"];function pe(e){return K.includes(e)}const Q="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Q);export{le as a,ue as b,ce as c,$ as d,re as e,ae as f,ee as g,de as h,fe as i,l as j,C as k,te as l,G as m,_e as n,ne as o,Y as p,pe as q,z as r,se as s,ie as t,oe as u};
