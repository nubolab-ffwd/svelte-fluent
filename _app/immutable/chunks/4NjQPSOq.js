var Bn=Array.isArray,Wt=Array.prototype.indexOf,Un=Array.from,Vn=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,Xt=Object.getOwnPropertyDescriptors,Gn=Object.prototype,Kn=Array.prototype,tn=Object.getPrototypeOf;function $n(t){return typeof t=="function"}const Zn=()=>{};function zn(t){return t()}function mt(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,Tt=4,tt=8,it=16,I=32,P=64,K=128,E=256,$=512,d=1024,D=2048,F=4096,b=8192,nt=16384,nn=32768,At=65536,en=1<<17,rn=1<<19,xt=1<<20,dt=Symbol("$state"),Jn=Symbol("legacy props"),Qn=Symbol("");function It(t){return t===this.v}function an(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Rt(t){return!an(t,this.v)}function ln(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function sn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function un(t){throw new Error("https://svelte.dev/e/effect_orphan")}function on(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Wn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Xn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function te(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ne(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function fn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function _n(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let et=!1;function ee(){et=!0}const re=1,ae=2,le=4,se=8,ue=16,oe=1,fe=2,ie=4,_e=8,ce=16,ve=1,pe=2,cn="[",vn="[!",pn="]",kt={},he=Symbol(),de="http://www.w3.org/1999/xhtml";function Dt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function Ee(){throw new Error("https://svelte.dev/e/invalid_default_snippet")}function hn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let o=null;function Et(t){o=t}function we(t){return St().get(t)}function ye(t,n){return St().set(t,n),n}function ge(t,n=!1,e){var r=o={p:o,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};et&&!n&&(o.l={s:null,u:null,r1:[],r2:_t(!1)}),xn(()=>{r.d=!0})}function me(t){const n=o;if(n!==null){const s=n.e;if(s!==null){var e=f,r=u;n.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];Q(a.effect),J(a.reaction),qt(a.fn)}}finally{Q(e),J(r)}}o=n.p,n.m=!0}return{}}function rt(){return!et||o!==null&&o.l===null}function St(t){return o===null&&hn(),o.c??(o.c=new Map(dn(o)||void 0))}function dn(t){let n=t.p;for(;n!==null;){const e=n.c;if(e!==null)return e;n=n.p}return null}const q=new Map;function _t(t,n){var e={f:0,v:t,reactions:null,equals:It,rv:0,wv:0};return e}function Te(t){return Ot(_t(t))}function En(t,n=!1){var r;const e=_t(t);return n||(e.equals=Rt),et&&o!==null&&o.l!==null&&((r=o.l).s??(r.s=[])).push(e),e}function Ae(t,n=!1){return Ot(En(t,n))}function Ot(t){return u!==null&&!g&&(u.f&w)!==0&&(T===null?Cn([t]):T.push(t)),t}function xe(t,n){return wn(t,vt(()=>Qt(t))),n}function wn(t,n){return u!==null&&!g&&rt()&&(u.f&(w|it))!==0&&(T===null||!T.includes(t))&&_n(),st(t,n)}function st(t,n){if(!t.equals(n)){var e=t.v;B?q.set(t,n):q.set(t,e),t.v=n,t.wv=$t(),Ct(t,D),rt()&&f!==null&&(f.f&d)!==0&&(f.f&(I|P))===0&&(x===null?Nn([t]):x.push(t))}return n}function Ct(t,n){var e=t.reactions;if(e!==null)for(var r=rt(),l=e.length,a=0;a<l;a++){var s=e[a],i=s.f;(i&D)===0&&(!r&&s===f||(A(s,n),(i&(d|E))!==0&&((i&w)!==0?Ct(s,F):lt(s))))}}let k=!1;function Ie(t){k=t}let y;function Y(t){if(t===null)throw Dt(),kt;return y=t}function Re(){return Y(N(y))}function ke(t){if(k){if(N(y)!==null)throw Dt(),kt;y=t}}function De(t){k&&(y=t.content)}function Se(t=1){if(k){for(var n=t,e=y;n--;)e=N(e);y=e}}function Oe(){for(var t=0,n=y;;){if(n.nodeType===8){var e=n.data;if(e===pn){if(t===0)return n;t-=1}else(e===cn||e===vn)&&(t+=1)}var r=N(n);n.remove(),n=r}}var wt,yn,gn,Nt,bt;function Ce(){if(wt===void 0){wt=window,yn=document,gn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;Nt=ht(n,"firstChild").get,bt=ht(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0,Text.prototype.__t=void 0}}function ut(t=""){return document.createTextNode(t)}function ot(t){return Nt.call(t)}function N(t){return bt.call(t)}function Ne(t,n){if(!k)return ot(t);var e=ot(y);if(e===null)e=y.appendChild(ut());else if(n&&e.nodeType!==3){var r=ut();return e==null||e.before(r),Y(r),r}return Y(e),e}function be(t,n){if(!k){var e=ot(t);return e instanceof Comment&&e.data===""?N(e):e}return y}function Pe(t,n=1,e=!1){let r=k?y:t;for(var l;n--;)l=r,r=N(r);if(!k)return r;var a=r==null?void 0:r.nodeType;if(e&&a!==3){var s=ut();return r===null?l==null||l.after(s):r.before(s),Y(s),s}return Y(r),r}function Fe(t){t.textContent=""}function Pt(t){var n=w|D,e=u!==null&&(u.f&w)!==0?u:null;return f===null||e!==null&&(e.f&E)!==0?n|=E:f.f|=xt,{ctx:o,deps:null,effects:null,equals:It,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:e??f}}function Me(t){const n=Pt(t);return n.equals=Rt,n}function Ft(t){var n=t.effects;if(n!==null){t.effects=null;for(var e=0;e<n.length;e+=1)C(n[e])}}function mn(t){for(var n=t.parent;n!==null;){if((n.f&w)===0)return n;n=n.parent}return null}function Tn(t){var n,e=f;Q(mn(t));try{Ft(t),n=zt(t)}finally{Q(e)}return n}function Mt(t){var n=Tn(t),e=(R||(t.f&E)!==0)&&t.deps!==null?F:d;A(t,e),t.equals(n)||(t.v=n,t.wv=$t())}function Lt(t){f===null&&u===null&&un(),u!==null&&(u.f&E)!==0&&f===null&&sn(),B&&ln()}function An(t,n){var e=n.last;e===null?n.last=n.first=t:(e.next=t,t.prev=e,n.last=t)}function M(t,n,e,r=!0){var l=f,a={ctx:o,deps:null,nodes_start:null,nodes_end:null,f:t|D,first:null,fn:n,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(e)try{ct(a),a.f|=nn}catch(_){throw C(a),_}else n!==null&&lt(a);var s=e&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(xt|K))===0;if(!s&&r&&(l!==null&&An(a,l),u!==null&&(u.f&w)!==0)){var i=u;(i.effects??(i.effects=[])).push(a)}return a}function xn(t){const n=M(tt,null,!1);return A(n,d),n.teardown=t,n}function Le(t){Lt();var n=f!==null&&(f.f&I)!==0&&o!==null&&!o.m;if(n){var e=o;(e.e??(e.e=[])).push({fn:t,effect:f,reaction:u})}else{var r=qt(t);return r}}function qe(t){return Lt(),In(t)}function Ye(t){const n=M(P,t,!0);return(e={})=>new Promise(r=>{e.outro?Dn(n,()=>{C(n),r(void 0)}):(C(n),r(void 0))})}function qt(t){return M(Tt,t,!1)}function In(t){return M(tt,t,!0)}function He(t,n=[],e=Pt){const r=n.map(e);return Rn(()=>t(...r.map(Qt)))}function Rn(t,n=0){return M(tt|it|n,t,!0)}function je(t,n=!0){return M(tt|I,t,!0,n)}function Yt(t){var n=t.teardown;if(n!==null){const e=B,r=u;gt(!0),J(null);try{n.call(null)}finally{gt(e),J(r)}}}function Ht(t,n=!1){var e=t.first;for(t.first=t.last=null;e!==null;){var r=e.next;(e.f&P)!==0?e.parent=null:C(e,n),e=r}}function kn(t){for(var n=t.first;n!==null;){var e=n.next;(n.f&I)===0&&C(n),n=e}}function C(t,n=!0){var e=!1;if((n||(t.f&rn)!==0)&&t.nodes_start!==null){for(var r=t.nodes_start,l=t.nodes_end;r!==null;){var a=r===l?null:N(r);r.remove(),r=a}e=!0}Ht(t,n&&!e),X(t,0),A(t,nt);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Yt(t);var i=t.parent;i!==null&&i.first!==null&&jt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function jt(t){var n=t.parent,e=t.prev,r=t.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),n!==null&&(n.first===t&&(n.first=r),n.last===t&&(n.last=e))}function Dn(t,n){var e=[];Bt(t,e,!0),Sn(e,()=>{C(t),n&&n()})}function Sn(t,n){var e=t.length;if(e>0){var r=()=>--e||n();for(var l of t)l.out(r)}else n()}function Bt(t,n,e){if((t.f&b)===0){if(t.f^=b,t.transitions!==null)for(const s of t.transitions)(s.is_global||e)&&n.push(s);for(var r=t.first;r!==null;){var l=r.next,a=(r.f&At)!==0||(r.f&I)!==0;Bt(r,n,a?e:!1),r=l}}}function Be(t){Ut(t,!0)}function Ut(t,n){if((t.f&b)!==0){t.f^=b,(t.f&d)===0&&(t.f^=d),U(t)&&(A(t,D),lt(t));for(var e=t.first;e!==null;){var r=e.next,l=(e.f&At)!==0||(e.f&I)!==0;Ut(e,l?n:!1),e=r}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const On=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let H=[],j=[];function Vt(){var t=H;H=[],mt(t)}function Gt(){var t=j;j=[],mt(t)}function Ue(t){H.length===0&&queueMicrotask(Vt),H.push(t)}function Ve(t){j.length===0&&On(Gt),j.push(t)}function yt(){H.length>0&&Vt(),j.length>0&&Gt()}let G=!1,Z=!1,z=null,O=!1,B=!1;function gt(t){B=t}let L=[];let u=null,g=!1;function J(t){u=t}let f=null;function Q(t){f=t}let T=null;function Cn(t){T=t}let c=null,h=0,x=null;function Nn(t){x=t}let Kt=1,W=0,R=!1,S=null;function $t(){return++Kt}function U(t){var v;var n=t.f;if((n&D)!==0)return!0;if((n&F)!==0){var e=t.deps,r=(n&E)!==0;if(e!==null){var l,a,s=(n&$)!==0,i=r&&f!==null&&!R,_=e.length;if(s||i){var m=t,V=m.parent;for(l=0;l<_;l++)a=e[l],(s||!((v=a==null?void 0:a.reactions)!=null&&v.includes(m)))&&(a.reactions??(a.reactions=[])).push(m);s&&(m.f^=$),i&&V!==null&&(V.f&E)===0&&(m.f^=E)}for(l=0;l<_;l++)if(a=e[l],U(a)&&Mt(a),a.wv>t.wv)return!0}(!r||f!==null&&!R)&&A(t,d)}return!1}function bn(t,n){for(var e=n;e!==null;){if((e.f&K)!==0)try{e.fn(t);return}catch{e.f^=K}e=e.parent}throw G=!1,t}function Pn(t){return(t.f&nt)===0&&(t.parent===null||(t.parent.f&K)===0)}function at(t,n,e,r){if(G){if(e===null&&(G=!1),Pn(n))throw t;return}e!==null&&(G=!0);{bn(t,n);return}}function Zt(t,n,e=!0){var r=t.reactions;if(r!==null)for(var l=0;l<r.length;l++){var a=r[l];(a.f&w)!==0?Zt(a,n,!1):n===a&&(e?A(a,D):(a.f&d)!==0&&A(a,F),lt(a))}}function zt(t){var pt;var n=c,e=h,r=x,l=u,a=R,s=T,i=o,_=g,m=t.f;c=null,h=0,x=null,R=(m&E)!==0&&(g||!O||u===null),u=(m&(I|P))===0?t:null,T=null,Et(t.ctx),g=!1,W++;try{var V=(0,t.fn)(),v=t.deps;if(c!==null){var p;if(X(t,h),v!==null&&h>0)for(v.length=h+c.length,p=0;p<c.length;p++)v[h+p]=c[p];else t.deps=v=c;if(!R)for(p=h;p<v.length;p++)((pt=v[p]).reactions??(pt.reactions=[])).push(t)}else v!==null&&h<v.length&&(X(t,h),v.length=h);if(rt()&&x!==null&&!g&&v!==null&&(t.f&(w|F|D))===0)for(p=0;p<x.length;p++)Zt(x[p],t);return l!==null&&W++,V}finally{c=n,h=e,x=r,u=l,R=a,T=s,Et(i),g=_}}function Fn(t,n){let e=n.reactions;if(e!==null){var r=Wt.call(e,t);if(r!==-1){var l=e.length-1;l===0?e=n.reactions=null:(e[r]=e[l],e.pop())}}e===null&&(n.f&w)!==0&&(c===null||!c.includes(n))&&(A(n,F),(n.f&(E|$))===0&&(n.f^=$),Ft(n),X(n,0))}function X(t,n){var e=t.deps;if(e!==null)for(var r=n;r<e.length;r++)Fn(t,e[r])}function ct(t){var n=t.f;if((n&nt)===0){A(t,d);var e=f,r=o,l=O;f=t,O=!0;try{(n&it)!==0?kn(t):Ht(t),Yt(t);var a=zt(t);t.teardown=typeof a=="function"?a:null,t.wv=Kt;var s=t.deps,i}catch(_){at(_,t,e,r||t.ctx)}finally{O=l,f=e}}}function Mn(){try{on()}catch(t){if(z!==null)at(t,z,null);else throw t}}function Jt(){var t=O;try{var n=0;for(O=!0;L.length>0;){n++>1e3&&Mn();var e=L,r=e.length;L=[];for(var l=0;l<r;l++){var a=qn(e[l]);Ln(a)}}}finally{Z=!1,O=t,z=null,q.clear()}}function Ln(t){var n=t.length;if(n!==0)for(var e=0;e<n;e++){var r=t[e];if((r.f&(nt|b))===0)try{U(r)&&(ct(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?jt(r):r.fn=null))}catch(l){at(l,r,null,r.ctx)}}}function lt(t){Z||(Z=!0,queueMicrotask(Jt));for(var n=z=t;n.parent!==null;){n=n.parent;var e=n.f;if((e&(P|I))!==0){if((e&d)===0)return;n.f^=d}}L.push(n)}function qn(t){for(var n=[],e=t;e!==null;){var r=e.f,l=(r&(I|P))!==0,a=l&&(r&d)!==0;if(!a&&(r&b)===0){if((r&Tt)!==0)n.push(e);else if(l)e.f^=d;else{var s=u;try{u=e,U(e)&&ct(e)}catch(m){at(m,e,null,e.ctx)}finally{u=s}}var i=e.first;if(i!==null){e=i;continue}}var _=e.parent;for(e=e.next;e===null&&_!==null;)e=_.next,_=_.parent}return n}function Yn(t){var n;for(yt();L.length>0;)Z=!0,Jt(),yt();return n}async function Ge(){await Promise.resolve(),Yn()}function Qt(t){var n=t.f,e=(n&w)!==0;if(S!==null&&S.add(t),u!==null&&!g){T!==null&&T.includes(t)&&fn();var r=u.deps;t.rv<W&&(t.rv=W,c===null&&r!==null&&r[h]===t?h++:c===null?c=[t]:(!R||!c.includes(t))&&c.push(t))}else if(e&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&(a.f&E)===0&&(l.f^=E)}return e&&(l=t,U(l)&&Mt(l)),B&&q.has(t)?q.get(t):t.v}function Hn(t){var n=S;S=new Set;var e=S,r;try{if(vt(t),n!==null)for(r of S)n.add(r)}finally{S=n}return e}function Ke(t){var n=Hn(()=>vt(t));for(var e of n)if((e.f&en)!==0)for(const r of e.deps||[])(r.f&w)===0&&st(r,r.v);else st(e,e.v)}function vt(t){var n=g;try{return g=!0,t()}finally{g=n}}const jn=-7169;function A(t,n){t.f=t.f&jn|n}function $e(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(dt in t)ft(t);else if(!Array.isArray(t))for(let n in t){const e=t[n];typeof e=="object"&&e&&dt in e&&ft(e)}}}function ft(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let r in t)try{ft(t[r],n)}catch{}const e=tn(t);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=Xt(e);for(let l in r){const a=r[l].get;if(a)try{a.call(t)}catch{}}}}}export{Qn as $,Oe as A,Y as B,Ie as C,Be as D,At as E,Dn as F,qe as G,cn as H,mt as I,zn as J,$e as K,Pt as L,N as M,Dt as N,kt as O,ot as P,Ce as Q,pn as R,dt as S,Wn as T,he as U,Fe as V,Un as W,Ye as X,ut as Y,f as Z,ee as _,me as a,de as a0,tn as a1,Xt as a2,Ve as a3,Ae as a4,Ke as a5,xe as a6,Gn as a7,Kn as a8,_t as a9,rn as aA,gn as aB,ve as aC,pe as aD,le as aE,b as aF,re as aG,st as aH,ae as aI,se as aJ,Bt as aK,Sn as aL,ue as aM,ye as aN,we as aO,Ee as aP,an as aQ,De as aR,ne as aa,wn as ab,ht as ac,te as ad,$n as ae,Jn as af,Xn as ag,en as ah,Me as ai,ie as aj,Rt as ak,En as al,_e as am,fe as an,oe as ao,ce as ap,S as aq,Se as ar,Yn as as,Vn as at,Te as au,Ge as av,yn as aw,J as ax,Q as ay,u as az,o as b,Ne as c,et as d,vt as e,be as f,Qt as g,qt as h,Bn as i,In as j,rt as k,hn as l,k as m,Rn as n,je as o,ge as p,Ue as q,ke as r,Pe as s,He as t,Le as u,Zn as v,C as w,y as x,Re as y,vn as z};
