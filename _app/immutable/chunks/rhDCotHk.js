var pn=Array.isArray,dn=Array.prototype.indexOf,ae=Array.from,le=Object.defineProperty,$=Object.getOwnPropertyDescriptor,hn=Object.getOwnPropertyDescriptors,wn=Object.prototype,yn=Array.prototype,Lt=Object.getPrototypeOf,kt=Object.isExtensible;function se(t){return typeof t=="function"}const ue=()=>{};function fe(t){return t()}function qt(t){for(var n=0;n<t.length;n++)t[n]()}const b=2,jt=4,_t=8,xt=16,O=32,V=64,at=128,x=256,lt=512,m=1024,P=2048,G=4096,B=8192,ct=16384,En=32768,Yt=65536,gn=1<<17,mn=1<<19,Ht=1<<20,yt=1<<21,M=Symbol("$state"),ie=Symbol("legacy props"),oe=Symbol("");function Bt(t){return t===this.v}function Tn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Ut(t){return!Tn(t,this.v)}function xn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function An(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function bn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function In(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function _e(){throw new Error("https://svelte.dev/e/hydration_failed")}function ce(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Rn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Dn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function On(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let vt=!1;function ve(){vt=!0}const pe=1,de=2,he=4,we=8,ye=16,Ee=1,ge=2,me=4,Te=8,xe=16,Ae=1,be=2,kn="[",Sn="[!",Nn="]",Vt={},E=Symbol(),Ie="http://www.w3.org/1999/xhtml";function Gt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function Re(){throw new Error("https://svelte.dev/e/invalid_default_snippet")}function Cn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let p=null;function St(t){p=t}function De(t){return Kt().get(t)}function Oe(t,n){return Kt().set(t,n),n}function ke(t,n=!1,e){var r=p={p,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};vt&&!n&&(p.l={s:null,u:null,r1:[],r2:At(!1)}),Yn(()=>{r.d=!0})}function Se(t){const n=p;if(n!==null){const _=n.e;if(_!==null){var e=d,r=v;n.e=null;try{for(var l=0;l<_.length;l++){var a=_[l];ft(a.effect),U(a.reaction),Qt(a.fn)}}finally{ft(e),U(r)}}p=n.p,n.m=!0}return{}}function pt(){return!vt||p!==null&&p.l===null}function Kt(t){return p===null&&Cn(),p.c??(p.c=new Map(Pn(p)||void 0))}function Pn(t){let n=t.p;for(;n!==null;){const e=n.c;if(e!==null)return e;n=n.p}return null}function Y(t,n){if(typeof t!="object"||t===null||M in t)return t;const e=Lt(t);if(e!==wn&&e!==yn)return t;var r=new Map,l=pn(t),a=S(0),_=v,c=f=>{var s=v;U(_);var u;return u=f(),U(s),u};return l&&r.set("length",S(t.length)),new Proxy(t,{defineProperty(f,s,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Rn();var i=r.get(s);return i===void 0?(i=c(()=>S(u.value)),r.set(s,i)):D(i,c(()=>Y(u.value))),!0},deleteProperty(f,s){var u=r.get(s);if(u===void 0)s in f&&r.set(s,c(()=>S(E)));else{if(l&&typeof s=="string"){var i=r.get("length"),o=Number(s);Number.isInteger(o)&&o<i.v&&D(i,o)}D(u,E),Nt(a)}return!0},get(f,s,u){var k;if(s===M)return t;var i=r.get(s),o=s in f;if(i===void 0&&(!o||(k=$(f,s))!=null&&k.writable)&&(i=c(()=>S(Y(o?f[s]:E))),r.set(s,i)),i!==void 0){var h=H(i);return h===E?void 0:h}return Reflect.get(f,s,u)},getOwnPropertyDescriptor(f,s){var u=Reflect.getOwnPropertyDescriptor(f,s);if(u&&"value"in u){var i=r.get(s);i&&(u.value=H(i))}else if(u===void 0){var o=r.get(s),h=o==null?void 0:o.v;if(o!==void 0&&h!==E)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return u},has(f,s){var h;if(s===M)return!0;var u=r.get(s),i=u!==void 0&&u.v!==E||Reflect.has(f,s);if(u!==void 0||d!==null&&(!i||(h=$(f,s))!=null&&h.writable)){u===void 0&&(u=c(()=>S(i?Y(f[s]):E)),r.set(s,u));var o=H(u);if(o===E)return!1}return i},set(f,s,u,i){var Ot;var o=r.get(s),h=s in f;if(l&&s==="length")for(var k=u;k<o.v;k+=1){var nt=r.get(k+"");nt!==void 0?D(nt,E):k in f&&(nt=c(()=>S(E)),r.set(k+"",nt))}o===void 0?(!h||(Ot=$(f,s))!=null&&Ot.writable)&&(o=c(()=>S(void 0)),D(o,c(()=>Y(u))),r.set(s,o)):(h=o.v!==E,D(o,c(()=>Y(u))));var et=Reflect.getOwnPropertyDescriptor(f,s);if(et!=null&&et.set&&et.set.call(i,u),!h){if(l&&typeof s=="string"){var Dt=r.get("length"),wt=Number(s);Number.isInteger(wt)&&wt>=Dt.v&&D(Dt,wt+1)}Nt(a)}return!0},ownKeys(f){H(a);var s=Reflect.ownKeys(f).filter(o=>{var h=r.get(o);return h===void 0||h.v!==E});for(var[u,i]of r)i.v!==E&&!(u in f)&&s.push(u);return s},setPrototypeOf(){Dn()}})}function Nt(t,n=1){D(t,t.v+n)}function Ct(t){try{if(t!==null&&typeof t=="object"&&M in t)return t[M]}catch{}return t}function Ne(t,n){return Object.is(Ct(t),Ct(n))}const z=new Map;function At(t,n){var e={f:0,v:t,reactions:null,equals:Bt,rv:0,wv:0};return e}function S(t,n){const e=At(t);return un(e),e}function Ce(t,n=!1){var r;const e=At(t);return n||(e.equals=Ut),vt&&p!==null&&p.l!==null&&((r=p.l).s??(r.s=[])).push(e),e}function Pe(t,n){return D(t,Rt(()=>H(t))),n}function D(t,n,e=!1){v!==null&&!I&&pt()&&(v.f&(b|xt))!==0&&!(y!=null&&y.includes(t))&&On();let r=e?Y(n):n;return Et(t,r)}function Et(t,n){if(!t.equals(n)){var e=t.v;Q?z.set(t,n):z.set(t,e),t.v=n,t.wv=on(),$t(t,P),pt()&&d!==null&&(d.f&m)!==0&&(d.f&(O|V))===0&&(T===null?Zn([t]):T.push(t))}return n}function $t(t,n){var e=t.reactions;if(e!==null)for(var r=pt(),l=e.length,a=0;a<l;a++){var _=e[a],c=_.f;(c&P)===0&&(!r&&_===d||(R(_,n),(c&(m|x))!==0&&((c&b)!==0?$t(_,G):ht(_))))}}let C=!1;function Fe(t){C=t}let A;function J(t){if(t===null)throw Gt(),Vt;return A=t}function Me(){return J(j(A))}function Le(t){if(C){if(j(A)!==null)throw Gt(),Vt;A=t}}function qe(t){C&&(A=t.content)}function je(t=1){if(C){for(var n=t,e=A;n--;)e=j(e);A=e}}function Ye(){for(var t=0,n=A;;){if(n.nodeType===8){var e=n.data;if(e===Nn){if(t===0)return n;t-=1}else(e===kn||e===Sn)&&(t+=1)}var r=j(n);n.remove(),n=r}}var Pt,Fn,Mn,Zt,zt;function He(){if(Pt===void 0){Pt=window,Fn=document,Mn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype,e=Text.prototype;Zt=$(n,"firstChild").get,zt=$(n,"nextSibling").get,kt(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),kt(e)&&(e.__t=void 0)}}function gt(t=""){return document.createTextNode(t)}function mt(t){return Zt.call(t)}function j(t){return zt.call(t)}function Be(t,n){if(!C)return mt(t);var e=mt(A);if(e===null)e=A.appendChild(gt());else if(n&&e.nodeType!==3){var r=gt();return e==null||e.before(r),J(r),r}return J(e),e}function Ue(t,n){if(!C){var e=mt(t);return e instanceof Comment&&e.data===""?j(e):e}return A}function Ve(t,n=1,e=!1){let r=C?A:t;for(var l;n--;)l=r,r=j(r);if(!C)return r;var a=r==null?void 0:r.nodeType;if(e&&a!==3){var _=gt();return r===null?l==null||l.after(_):r.before(_),J(_),_}return J(r),r}function Ge(t){t.textContent=""}function bt(t){var n=b|P,e=v!==null&&(v.f&b)!==0?v:null;return d===null||e!==null&&(e.f&x)!==0?n|=x:d.f|=Ht,{ctx:p,deps:null,effects:null,equals:Bt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:e??d}}function Ke(t){const n=bt(t);return un(n),n}function $e(t){const n=bt(t);return n.equals=Ut,n}function Jt(t){var n=t.effects;if(n!==null){t.effects=null;for(var e=0;e<n.length;e+=1)q(n[e])}}function Ln(t){for(var n=t.parent;n!==null;){if((n.f&b)===0)return n;n=n.parent}return null}function qn(t){var n,e=d;ft(Ln(t));try{Jt(t),n=cn(t)}finally{ft(e)}return n}function Wt(t){var n=qn(t),e=(N||(t.f&x)!==0)&&t.deps!==null?G:m;R(t,e),t.equals(n)||(t.v=n,t.wv=on())}function Xt(t){d===null&&v===null&&bn(),v!==null&&(v.f&x)!==0&&d===null&&An(),Q&&xn()}function jn(t,n){var e=n.last;e===null?n.last=n.first=t:(e.next=t,t.prev=e,n.last=t)}function K(t,n,e,r=!0){var l=d,a={ctx:p,deps:null,nodes_start:null,nodes_end:null,f:t|P,first:null,fn:n,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(e)try{It(a),a.f|=En}catch(f){throw q(a),f}else n!==null&&ht(a);var _=e&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(Ht|at))===0;if(!_&&r&&(l!==null&&jn(a,l),v!==null&&(v.f&b)!==0)){var c=v;(c.effects??(c.effects=[])).push(a)}return a}function Yn(t){const n=K(_t,null,!1);return R(n,m),n.teardown=t,n}function Ze(t){Xt();var n=d!==null&&(d.f&O)!==0&&p!==null&&!p.m;if(n){var e=p;(e.e??(e.e=[])).push({fn:t,effect:d,reaction:v})}else{var r=Qt(t);return r}}function ze(t){return Xt(),Hn(t)}function Je(t){const n=K(V,t,!0);return(e={})=>new Promise(r=>{e.outro?Vn(n,()=>{q(n),r(void 0)}):(q(n),r(void 0))})}function Qt(t){return K(jt,t,!1)}function Hn(t){return K(_t,t,!0)}function We(t,n=[],e=bt){const r=n.map(e);return Bn(()=>t(...r.map(H)))}function Bn(t,n=0){return K(_t|xt|n,t,!0)}function Xe(t,n=!0){return K(_t|O,t,!0,n)}function tn(t){var n=t.teardown;if(n!==null){const e=Q,r=v;Mt(!0),U(null);try{n.call(null)}finally{Mt(e),U(r)}}}function nn(t,n=!1){var e=t.first;for(t.first=t.last=null;e!==null;){var r=e.next;(e.f&V)!==0?e.parent=null:q(e,n),e=r}}function Un(t){for(var n=t.first;n!==null;){var e=n.next;(n.f&O)===0&&q(n),n=e}}function q(t,n=!0){var e=!1;if((n||(t.f&mn)!==0)&&t.nodes_start!==null){for(var r=t.nodes_start,l=t.nodes_end;r!==null;){var a=r===l?null:j(r);r.remove(),r=a}e=!0}nn(t,n&&!e),ot(t,0),R(t,ct);var _=t.transitions;if(_!==null)for(const f of _)f.stop();tn(t);var c=t.parent;c!==null&&c.first!==null&&en(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function en(t){var n=t.parent,e=t.prev,r=t.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),n!==null&&(n.first===t&&(n.first=r),n.last===t&&(n.last=e))}function Vn(t,n){var e=[];rn(t,e,!0),Gn(e,()=>{q(t),n&&n()})}function Gn(t,n){var e=t.length;if(e>0){var r=()=>--e||n();for(var l of t)l.out(r)}else n()}function rn(t,n,e){if((t.f&B)===0){if(t.f^=B,t.transitions!==null)for(const _ of t.transitions)(_.is_global||e)&&n.push(_);for(var r=t.first;r!==null;){var l=r.next,a=(r.f&Yt)!==0||(r.f&O)!==0;rn(r,n,a?e:!1),r=l}}}function Qe(t){an(t,!0)}function an(t,n){if((t.f&B)!==0){t.f^=B,(t.f&m)===0&&(t.f^=m),tt(t)&&(R(t,P),ht(t));for(var e=t.first;e!==null;){var r=e.next,l=(e.f&Yt)!==0||(e.f&O)!==0;an(e,l?n:!1),e=r}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const Kn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let W=[],X=[];function ln(){var t=W;W=[],qt(t)}function sn(){var t=X;X=[],qt(t)}function tr(t){W.length===0&&queueMicrotask(ln),W.push(t)}function nr(t){X.length===0&&Kn(sn),X.push(t)}function Ft(){W.length>0&&ln(),X.length>0&&sn()}let rt=!1,st=!1,ut=null,L=!1,Q=!1;function Mt(t){Q=t}let Z=[];let v=null,I=!1;function U(t){v=t}let d=null;function ft(t){d=t}let y=null;function $n(t){y=t}function un(t){v!==null&&v.f&yt&&(y===null?$n([t]):y.push(t))}let w=null,g=0,T=null;function Zn(t){T=t}let fn=1,it=0,N=!1,F=null;function on(){return++fn}function tt(t){var i;var n=t.f;if((n&P)!==0)return!0;if((n&G)!==0){var e=t.deps,r=(n&x)!==0;if(e!==null){var l,a,_=(n&lt)!==0,c=r&&d!==null&&!N,f=e.length;if(_||c){var s=t,u=s.parent;for(l=0;l<f;l++)a=e[l],(_||!((i=a==null?void 0:a.reactions)!=null&&i.includes(s)))&&(a.reactions??(a.reactions=[])).push(s);_&&(s.f^=lt),c&&u!==null&&(u.f&x)===0&&(s.f^=x)}for(l=0;l<f;l++)if(a=e[l],tt(a)&&Wt(a),a.wv>t.wv)return!0}(!r||d!==null&&!N)&&R(t,m)}return!1}function zn(t,n){for(var e=n;e!==null;){if((e.f&at)!==0)try{e.fn(t);return}catch{e.f^=at}e=e.parent}throw rt=!1,t}function Jn(t){return(t.f&ct)===0&&(t.parent===null||(t.parent.f&at)===0)}function dt(t,n,e,r){if(rt){if(e===null&&(rt=!1),Jn(n))throw t;return}e!==null&&(rt=!0);{zn(t,n);return}}function _n(t,n,e=!0){var r=t.reactions;if(r!==null)for(var l=0;l<r.length;l++){var a=r[l];y!=null&&y.includes(t)||((a.f&b)!==0?_n(a,n,!1):n===a&&(e?R(a,P):(a.f&m)!==0&&R(a,G),ht(a)))}}function cn(t){var h;var n=w,e=g,r=T,l=v,a=N,_=y,c=p,f=I,s=t.f;w=null,g=0,T=null,N=(s&x)!==0&&(I||!L||v===null),v=(s&(O|V))===0?t:null,y=null,St(t.ctx),I=!1,it++,t.f|=yt;try{var u=(0,t.fn)(),i=t.deps;if(w!==null){var o;if(ot(t,g),i!==null&&g>0)for(i.length=g+w.length,o=0;o<w.length;o++)i[g+o]=w[o];else t.deps=i=w;if(!N)for(o=g;o<i.length;o++)((h=i[o]).reactions??(h.reactions=[])).push(t)}else i!==null&&g<i.length&&(ot(t,g),i.length=g);if(pt()&&T!==null&&!I&&i!==null&&(t.f&(b|G|P))===0)for(o=0;o<T.length;o++)_n(T[o],t);return l!==null&&(it++,T!==null&&(r===null?r=T:r.push(...T))),u}finally{w=n,g=e,T=r,v=l,N=a,y=_,St(c),I=f,t.f^=yt}}function Wn(t,n){let e=n.reactions;if(e!==null){var r=dn.call(e,t);if(r!==-1){var l=e.length-1;l===0?e=n.reactions=null:(e[r]=e[l],e.pop())}}e===null&&(n.f&b)!==0&&(w===null||!w.includes(n))&&(R(n,G),(n.f&(x|lt))===0&&(n.f^=lt),Jt(n),ot(n,0))}function ot(t,n){var e=t.deps;if(e!==null)for(var r=n;r<e.length;r++)Wn(t,e[r])}function It(t){var n=t.f;if((n&ct)===0){R(t,m);var e=d,r=p,l=L;d=t,L=!0;try{(n&xt)!==0?Un(t):nn(t),tn(t);var a=cn(t);t.teardown=typeof a=="function"?a:null,t.wv=fn;var _=t.deps,c}catch(f){dt(f,t,e,r||t.ctx)}finally{L=l,d=e}}}function Xn(){try{In()}catch(t){if(ut!==null)dt(t,ut,null);else throw t}}function vn(){var t=L;try{var n=0;for(L=!0;Z.length>0;){n++>1e3&&Xn();var e=Z,r=e.length;Z=[];for(var l=0;l<r;l++){var a=te(e[l]);Qn(a)}}}finally{st=!1,L=t,ut=null,z.clear()}}function Qn(t){var n=t.length;if(n!==0)for(var e=0;e<n;e++){var r=t[e];if((r.f&(ct|B))===0)try{tt(r)&&(It(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?en(r):r.fn=null))}catch(l){dt(l,r,null,r.ctx)}}}function ht(t){st||(st=!0,queueMicrotask(vn));for(var n=ut=t;n.parent!==null;){n=n.parent;var e=n.f;if((e&(V|O))!==0){if((e&m)===0)return;n.f^=m}}Z.push(n)}function te(t){for(var n=[],e=t;e!==null;){var r=e.f,l=(r&(O|V))!==0,a=l&&(r&m)!==0;if(!a&&(r&B)===0){if((r&jt)!==0)n.push(e);else if(l)e.f^=m;else{var _=v;try{v=e,tt(e)&&It(e)}catch(s){dt(s,e,null,e.ctx)}finally{v=_}}var c=e.first;if(c!==null){e=c;continue}}var f=e.parent;for(e=e.next;e===null&&f!==null;)e=f.next,f=f.parent}return n}function ne(t){var n;for(Ft();Z.length>0;)st=!0,vn(),Ft();return n}async function er(){await Promise.resolve(),ne()}function H(t){var n=t.f,e=(n&b)!==0;if(F!==null&&F.add(t),v!==null&&!I){if(!(y!=null&&y.includes(t))){var r=v.deps;t.rv<it&&(t.rv=it,w===null&&r!==null&&r[g]===t?g++:w===null?w=[t]:(!N||!w.includes(t))&&w.push(t))}}else if(e&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&(a.f&x)===0&&(l.f^=x)}return e&&(l=t,tt(l)&&Wt(l)),Q&&z.has(t)?z.get(t):t.v}function ee(t){var n=F;F=new Set;var e=F,r;try{if(Rt(t),n!==null)for(r of F)n.add(r)}finally{F=n}return e}function rr(t){var n=ee(()=>Rt(t));for(var e of n)if((e.f&gn)!==0)for(const r of e.deps||[])(r.f&b)===0&&Et(r,r.v);else Et(e,e.v)}function Rt(t){var n=I;try{return I=!0,t()}finally{I=n}}const re=-7169;function R(t,n){t.f=t.f&re|n}function ar(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(M in t)Tt(t);else if(!Array.isArray(t))for(let n in t){const e=t[n];typeof e=="object"&&e&&M in e&&Tt(e)}}}function Tt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let r in t)try{Tt(t[r],n)}catch{}const e=Lt(t);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=hn(e);for(let l in r){const a=r[l].get;if(a)try{a.call(t)}catch{}}}}}export{ve as $,Sn as A,Ye as B,J as C,Fe as D,Yt as E,Qe as F,Vn as G,kn as H,ze as I,qt as J,fe as K,ar as L,bt as M,j as N,Gt as O,Vt as P,mt as Q,He as R,M as S,Nn as T,E as U,_e as V,Ge as W,ae as X,Je as Y,gt as Z,d as _,Se as a,se as a0,ie as a1,$ as a2,ce as a3,gn as a4,$e as a5,me as a6,Ut as a7,Y as a8,D as a9,be as aA,he as aB,B as aC,pe as aD,Et as aE,de as aF,At as aG,we as aH,rn as aI,Gn as aJ,ye as aK,Oe as aL,De as aM,Re as aN,Tn as aO,qe as aP,Ce as aa,Te as ab,ge as ac,Ee as ad,xe as ae,F as af,oe as ag,Ie as ah,Lt as ai,hn as aj,nr as ak,Ke as al,rr as am,Pe as an,je as ao,ne as ap,le as aq,S as ar,er as as,Fn as at,U as au,ft as av,v as aw,mn as ax,Mn as ay,Ae as az,p as b,Be as c,vt as d,Rt as e,Ue as f,H as g,Qt as h,pn as i,Hn as j,pt as k,Cn as l,C as m,Ne as n,Bn as o,ke as p,tr as q,Le as r,Ve as s,We as t,Ze as u,Xe as v,ue as w,q as x,A as y,Me as z};
