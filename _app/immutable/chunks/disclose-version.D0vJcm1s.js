import{q as C,aA as m,ai as y,aB as P,a1 as E,aw as R,i as V,a0 as g,v as W,aC as j,h as f,W as q,P as k,C as L,B as w,z as s,T as _,aD as F,aE as H,j as U}from"./runtime.DLYvOHFX.js";function ee(e,t){if(t){const r=document.body;e.autofocus=!0,C(()=>{document.activeElement===r&&e.focus()})}}let N=!1;function $(){N||(N=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function D(e){var t=P,r=E;m(null),y(null);try{return e()}finally{m(t),y(r)}}function te(e,t,r,o=r){e.addEventListener(t,()=>D(r));const n=e.__on_r;n?e.__on_r=()=>{n(),o(!0)}:e.__on_r=()=>o(!0),$()}const z=new Set,G=new Set;function re(e,t,r,o){function n(a){if(o.capture||Y.call(t,a),!a.cancelBubble)return D(()=>r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?C(()=>{t.addEventListener(e,n,o)}):t.addEventListener(e,n,o),n}function ae(e){for(var t=0;t<e.length;t++)z.add(e[t]);for(var r of G)r(e)}function Y(e){var A;var t=this,r=t.ownerDocument,o=e.type,n=((A=e.composedPath)==null?void 0:A.call(e))||[],a=n[0]||e.target,u=0,d=e.__root;if(d){var c=n.indexOf(d);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var b=n.indexOf(t);if(b===-1)return;c<=b&&(u=c)}if(a=n[u]||e.target,a!==t){R(e,"currentTarget",{configurable:!0,get(){return a||r}});var M=P,O=E;m(null),y(null);try{for(var v,S=[];a!==null;){var T=a.assignedSlot||a.parentNode||a.host||null;try{var p=a["__"+o];if(p!==void 0&&!a.disabled)if(V(p)){var[x,...B]=p;x.apply(a,[e,...B])}else p.call(a,e)}catch(h){v?S.push(h):v=h}if(e.cancelBubble||T===t||T===null)break;a=T}if(v){for(let h of S)queueMicrotask(()=>{throw h});throw v}}finally{e.__root=t,delete e.currentTarget,m(M),y(O)}}}let i;function ne(){i=void 0}function oe(e){let t=null,r=f;var o;if(f){for(t=s,i===void 0&&(i=_(document.head));i!==null&&(i.nodeType!==8||i.data!==q);)i=k(i);i===null?L(!1):i=w(k(i))}f||(o=document.head.appendChild(g()));try{W(()=>e(o),j)}finally{r&&(L(!0),i=s,w(t))}}function I(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function l(e,t){var r=E;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function ie(e,t){var r=(t&F)!==0,o=(t&H)!==0,n,a=!e.startsWith("<!>");return()=>{if(f)return l(s,null),s;n===void 0&&(n=I(a?e:"<!>"+e),r||(n=_(n)));var u=o?document.importNode(n,!0):n.cloneNode(!0);if(r){var d=_(u),c=u.lastChild;l(d,c)}else l(u,u);return u}}function ue(e,t,r="svg"){var o=!e.startsWith("<!>"),n=`<${r}>${o?e:"<!>"+e}</${r}>`,a;return()=>{if(f)return l(s,null),s;if(!a){var u=I(n),d=_(u);a=_(d)}var c=a.cloneNode(!0);return l(c,c),c}}function se(e=""){if(!f){var t=g(e+"");return l(t,t),t}var r=s;return r.nodeType!==3&&(r.before(r=g()),w(r)),l(r,r),r}function ce(){if(f)return l(s,null),s;var e=document.createDocumentFragment(),t=document.createComment(""),r=g();return e.append(t,r),l(t,r),e}function le(e,t){if(f){E.nodes_end=s,U();return}e!==null&&e.before(t)}function fe(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const J=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function de(e){return J.includes(e)}const K={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function _e(e){return e=e.toLowerCase(),K[e]??e}const Q=["touchstart","touchmove"];function ve(e){return Q.includes(e)}const X="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(X);export{le as a,se as b,ce as c,$ as d,re as e,ae as f,ee as g,de as h,fe as i,l as j,I as k,te as l,z as m,_e as n,ne as o,Y as p,ve as q,G as r,ue as s,ie as t,oe as u};
