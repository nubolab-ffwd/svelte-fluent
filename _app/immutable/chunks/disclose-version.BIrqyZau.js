import{q as N,aB as m,ai as y,aC as I,a1 as E,w as V,i as F,a0 as g,A as W,aD as B,h as f,W as j,P as A,I as P,G as w,D as s,T as _,aE as q,aF as G,j as H}from"./runtime.CIss1fFT.js";function ee(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const U=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function te(e){return U.includes(e)}const $={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function re(e){return e=e.toLowerCase(),$[e]??e}const z=["touchstart","touchmove"];function ae(e){return z.includes(e)}function ne(e,t){if(t){const r=document.body;e.autofocus=!0,N(()=>{document.activeElement===r&&e.focus()})}}let L=!1;function Y(){L||(L=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function D(e){var t=I,r=E;m(null),y(null);try{return e()}finally{m(t),y(r)}}function oe(e,t,r,o=r){e.addEventListener(t,()=>D(r));const n=e.__on_r;n?e.__on_r=()=>{n(),o(!0)}:e.__on_r=()=>o(!0),Y()}const J=new Set,K=new Set;function ie(e,t,r,o={}){function n(a){if(o.capture||Q.call(t,a),!a.cancelBubble)return D(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?N(()=>{t.addEventListener(e,n,o)}):t.addEventListener(e,n,o),n}function ue(e){for(var t=0;t<e.length;t++)J.add(e[t]);for(var r of K)r(e)}function Q(e){var S;var t=this,r=t.ownerDocument,o=e.type,n=((S=e.composedPath)==null?void 0:S.call(e))||[],a=n[0]||e.target,u=0,d=e.__root;if(d){var c=n.indexOf(d);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var T=n.indexOf(t);if(T===-1)return;c<=T&&(u=c)}if(a=n[u]||e.target,a!==t){V(e,"currentTarget",{configurable:!0,get(){return a||r}});var M=I,O=E;m(null),y(null);try{for(var p,k=[];a!==null;){var b=a.assignedSlot||a.parentNode||a.host||null;try{var v=a["__"+o];if(v!==void 0&&!a.disabled)if(F(v)){var[x,...R]=v;x.apply(a,[e,...R])}else v.call(a,e)}catch(h){p?k.push(h):p=h}if(e.cancelBubble||b===t||b===null)break;a=b}if(p){for(let h of k)queueMicrotask(()=>{throw h});throw p}}finally{e.__root=t,delete e.currentTarget,m(M),y(O)}}}let i;function se(){i=void 0}function ce(e){let t=null,r=f;var o;if(f){for(t=s,i===void 0&&(i=_(document.head));i!==null&&(i.nodeType!==8||i.data!==j);)i=A(i);i===null?P(!1):i=w(A(i))}f||(o=document.head.appendChild(g()));try{W(()=>e(o),B)}finally{r&&(P(!0),i=s,w(t))}}function C(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function l(e,t){var r=E;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function le(e,t){var r=(t&q)!==0,o=(t&G)!==0,n,a=!e.startsWith("<!>");return()=>{if(f)return l(s,null),s;n===void 0&&(n=C(a?e:"<!>"+e),r||(n=_(n)));var u=o?document.importNode(n,!0):n.cloneNode(!0);if(r){var d=_(u),c=u.lastChild;l(d,c)}else l(u,u);return u}}function fe(e,t,r="svg"){var o=!e.startsWith("<!>"),n=`<${r}>${o?e:"<!>"+e}</${r}>`,a;return()=>{if(f)return l(s,null),s;if(!a){var u=C(n),d=_(u);a=_(d)}var c=a.cloneNode(!0);return l(c,c),c}}function de(e=""){if(!f){var t=g(e+"");return l(t,t),t}var r=s;return r.nodeType!==3&&(r.before(r=g()),w(r)),l(r,r),r}function _e(){if(f)return l(s,null),s;var e=document.createDocumentFragment(),t=document.createComment(""),r=g();return e.append(t,r),l(t,r),e}function pe(e,t){if(f){E.nodes_end=s,H();return}e!==null&&e.before(t)}const X="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(X);export{pe as a,de as b,_e as c,l as d,C as e,J as f,se as g,Q as h,ae as i,Y as j,ee as k,oe as l,ie as m,ue as n,ne as o,re as p,te as q,K as r,fe as s,le as t,ce as u};
