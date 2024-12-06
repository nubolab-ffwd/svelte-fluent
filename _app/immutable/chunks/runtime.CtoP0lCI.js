var Ut=Array.isArray,Vt=Array.from,Gt=Object.defineProperty,dn=Object.getOwnPropertyDescriptor,rt=Object.getOwnPropertyDescriptors,Kt=Object.prototype,$t=Array.prototype,et=Object.getPrototypeOf;function Zt(n){return typeof n=="function"}const zt=()=>{};function Jt(n){return n()}function gn(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,An=4,j=8,on=16,T=32,Q=64,rn=128,R=256,K=512,h=1024,x=2048,B=4096,b=8192,q=16384,lt=32768,xn=65536,at=1<<17,st=1<<19,Sn=1<<20,En=Symbol("$state"),Qt=Symbol("legacy props"),Wt=Symbol("");function kn(n){return n===this.v}function ut(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function In(n){return!ut(n,this.v)}function ot(n){throw new Error("effect_in_teardown")}function it(){throw new Error("effect_in_unowned_derived")}function ft(n){throw new Error("effect_orphan")}function _t(){throw new Error("effect_update_depth_exceeded")}function Xt(){throw new Error("hydration_failed")}function nr(n){throw new Error("props_invalid_value")}function tr(){throw new Error("state_descriptors_fixed")}function rr(){throw new Error("state_prototype_fixed")}function ct(){throw new Error("state_unsafe_local_read")}function vt(){throw new Error("state_unsafe_mutation")}let W=!1;function er(){W=!0}function fn(n){return{f:0,v:n,reactions:null,equals:kn,version:0}}function lr(n){return Rn(fn(n))}function pt(n,t=!1){var e;const r=fn(n);return t||(r.equals=In),W&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function ar(n,t=!1){return Rn(pt(n,t))}function Rn(n){return o!==null&&o.f&y&&(m===null?Nt([n]):m.push(n)),n}function yn(n,t){return ht(n,pn(()=>Ht(n))),t}function ht(n,t){return o!==null&&vn()&&o.f&(y|on)&&(m===null||!m.includes(n))&&vt(),dt(n,t)}function dt(n,t){return n.equals(t)||(n.v=t,n.version=zn(),Dn(n,x),vn()&&u!==null&&u.f&h&&!(u.f&T)&&(v!==null&&v.includes(n)?(g(u,x),tn(u)):A===null?bt([n]):A.push(n))),t}function Dn(n,t){var r=n.reactions;if(r!==null)for(var e=vn(),l=r.length,a=0;a<l;a++){var s=r[a],f=s.f;f&x||!e&&s===u||(g(s,t),f&(h|R)&&(f&y?Dn(s,B):tn(s)))}}function On(n){console.warn("hydration_mismatch")}const sr=1,ur=2,or=4,ir=8,fr=16,_r=1,cr=2,vr=4,pr=8,hr=16,dr=1,Er=2,Et="[",yt="[!",wt="]",Cn={},yr=Symbol();let S=!1;function wr(n){S=n}let w;function L(n){if(n===null)throw On(),Cn;return w=n}function mr(){return L(D(w))}function Tr(n){if(S){if(D(w)!==null)throw On(),Cn;w=n}}function gr(n){S&&(w=n.content)}function Ar(n=1){if(S){for(var t=n,r=w;t--;)r=D(r);w=r}}function xr(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===wt){if(n===0)return t;n-=1}else(r===Et||r===yt)&&(n+=1)}var e=D(t);t.remove(),t=e}}var wn,mt,Nn,bn;function Sr(){if(wn===void 0){wn=window,mt=document;var n=Element.prototype,t=Node.prototype;Nn=dn(t,"firstChild").get,bn=dn(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function en(n=""){return document.createTextNode(n)}function ln(n){return Nn.call(n)}function D(n){return bn.call(n)}function kr(n,t){if(!S)return ln(n);var r=ln(w);if(r===null)r=w.appendChild(en());else if(t&&r.nodeType!==3){var e=en();return r==null||r.before(e),L(e),e}return L(r),r}function Ir(n,t){if(!S){var r=ln(n);return r instanceof Comment&&r.data===""?D(r):r}return w}function Rr(n,t=1,r=!1){let e=S?w:n;for(var l;t--;)l=e,e=D(e);if(!S)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var s=en();return e===null?l==null||l.after(s):e.before(s),L(s),s}return L(e),e}function Dr(n){n.textContent=""}function Tt(n){var t=y|x;u===null?t|=R:u.f|=Sn;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:i,deps:null,equals:kn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function Or(n){const t=Tt(n);return t.equals=In,t}function qn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?_n(e):F(e)}}}function gt(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function Pn(n){var t,r=u;J(gt(n));try{qn(n),t=Jn(n)}finally{J(r)}return t}function Fn(n){var t=Pn(n),r=(O||n.f&R)&&n.deps!==null?B:h;g(n,r),n.equals(t)||(n.v=t,n.version=zn())}function _n(n){qn(n),Y(n,0),g(n,q),n.v=n.children=n.deps=n.ctx=n.reactions=null}function Ln(n){u===null&&o===null&&ft(),o!==null&&o.f&R&&it(),cn&&ot()}function At(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function P(n,t,r,e=!0){var l=(n&Q)!==0,a=u,s={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|x,first:null,fn:t,last:null,next:null,parent:l?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var f=C;try{mn(!0),nn(s),s.f|=lt}catch(_){throw F(s),_}finally{mn(f)}}else t!==null&&tn(s);var p=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&Sn)===0;if(!p&&!l&&e&&(a!==null&&At(s,a),o!==null&&o.f&y)){var d=o;(d.children??(d.children=[])).push(s)}return s}function Cr(n){const t=P(j,null,!1);return g(t,h),t.teardown=n,t}function Nr(n){Ln();var t=u!==null&&(u.f&T)!==0&&i!==null&&!i.m;if(t){var r=i;(r.e??(r.e=[])).push({fn:n,effect:u,reaction:o})}else{var e=Mn(n);return e}}function br(n){return Ln(),xt(n)}function qr(n){const t=P(Q,n,!0);return()=>{F(t)}}function Mn(n){return P(An,n,!1)}function xt(n){return P(j,n,!0)}function Pr(n){return St(n)}function St(n,t=0){return P(j|on|t,n,!0)}function Fr(n,t=!0){return P(j|T,n,!0,t)}function Hn(n){var t=n.teardown;if(t!==null){const r=cn,e=o;Tn(!0),z(null);try{t.call(null)}finally{Tn(r),z(e)}}}function Yn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)_n(t[r])}}function jn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;F(r,t),r=e}}function kt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&T||F(t),t=r}}function F(n,t=!0){var r=!1;if((t||n.f&st)&&n.nodes_start!==null){for(var e=n.nodes_start,l=n.nodes_end;e!==null;){var a=e===l?null:D(e);e.remove(),e=a}r=!0}jn(n,t&&!r),Yn(n),Y(n,0),g(n,q);var s=n.transitions;if(s!==null)for(const p of s)p.stop();Hn(n);var f=n.parent;f!==null&&f.first!==null&&Bn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Bn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function Lr(n,t){var r=[];Un(n,r,!0),It(r,()=>{F(n),t&&t()})}function It(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var l of n)l.out(e)}else t()}function Un(n,t,r){if(!(n.f&b)){if(n.f^=b,n.transitions!==null)for(const s of n.transitions)(s.is_global||r)&&t.push(s);for(var e=n.first;e!==null;){var l=e.next,a=(e.f&xn)!==0||(e.f&T)!==0;Un(e,t,a?r:!1),e=l}}}function Mr(n){Vn(n,!0)}function Vn(n,t){if(n.f&b){U(n)&&nn(n),n.f^=b;for(var r=n.first;r!==null;){var e=r.next,l=(r.f&xn)!==0||(r.f&T)!==0;Vn(r,l?t:!1),r=e}if(n.transitions!==null)for(const a of n.transitions)(a.is_global||t)&&a.in()}}const Rt=typeof requestIdleCallback>"u"?n=>setTimeout(n,1):requestIdleCallback;let $=!1,Z=!1,an=[],sn=[];function Gn(){$=!1;const n=an.slice();an=[],gn(n)}function Kn(){Z=!1;const n=sn.slice();sn=[],gn(n)}function Hr(n){$||($=!0,queueMicrotask(Gn)),an.push(n)}function Yr(n){Z||(Z=!0,Rt(Kn)),sn.push(n)}function Dt(){$&&Gn(),Z&&Kn()}function jr(){throw new Error("invalid_default_snippet")}function Ot(n){throw new Error("lifecycle_outside_component")}const $n=0,Ct=1;let V=!1,G=$n,M=!1,H=null,C=!1,cn=!1;function mn(n){C=n}function Tn(n){cn=n}let I=[],N=0;let o=null;function z(n){o=n}let u=null;function J(n){u=n}let m=null;function Nt(n){m=n}let v=null,E=0,A=null;function bt(n){A=n}let Zn=0,O=!1,k=null,i=null;function zn(){return++Zn}function vn(){return!W||i!==null&&i.l===null}function U(n){var s,f;var t=n.f;if(t&x)return!0;if(t&B){var r=n.deps,e=(t&R)!==0;if(r!==null){var l;if(t&K){for(l=0;l<r.length;l++)((s=r[l]).reactions??(s.reactions=[])).push(n);n.f^=K}for(l=0;l<r.length;l++){var a=r[l];if(U(a)&&Fn(a),e&&u!==null&&!O&&!((f=a==null?void 0:a.reactions)!=null&&f.includes(n))&&(a.reactions??(a.reactions=[])).push(n),a.version>n.version)return!0}}e||g(n,h)}return!1}function qt(n,t){for(var r=t;r!==null;){if(r.f&rn)try{r.fn(n);return}catch{r.f^=rn}r=r.parent}throw V=!1,n}function Pt(n){return(n.f&q)===0&&(n.parent===null||(n.parent.f&rn)===0)}function X(n,t,r,e){if(V){if(r===null&&(V=!1),Pt(t))throw n;return}r!==null&&(V=!0);{qt(n,t);return}}function Jn(n){var hn;var t=v,r=E,e=A,l=o,a=O,s=m,f=i,p=n.f;v=null,E=0,A=null,o=p&(T|Q)?null:n,O=!C&&(p&R)!==0,m=null,i=n.ctx;try{var d=(0,n.fn)(),_=n.deps;if(v!==null){var c;if(Y(n,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else n.deps=_=v;if(!O)for(c=E;c<_.length;c++)((hn=_[c]).reactions??(hn.reactions=[])).push(n)}else _!==null&&E<_.length&&(Y(n,E),_.length=E);return d}finally{v=t,E=r,A=e,o=l,O=a,m=s,i=f}}function Ft(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var l=r.length-1;l===0?r=t.reactions=null:(r[e]=r[l],r.pop())}}r===null&&t.f&y&&(v===null||!v.includes(t))&&(g(t,B),t.f&(R|K)||(t.f^=K),Y(t,0))}function Y(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)Ft(n,r[e])}function nn(n){var t=n.f;if(!(t&q)){g(n,h);var r=u,e=i;u=n;try{t&on?kt(n):jn(n),Yn(n),Hn(n);var l=Jn(n);n.teardown=typeof l=="function"?l:null,n.version=Zn}catch(a){X(a,n,r,e||n.ctx)}finally{u=r}}}function Qn(){if(N>1e3){N=0;try{_t()}catch(n){if(H!==null)X(n,H,null);else throw n}}N++}function Wn(n){var t=n.length;if(t!==0){Qn();var r=C;C=!0;try{for(var e=0;e<t;e++){var l=n[e];l.f&h||(l.f^=h);var a=[];Xn(l,a),Lt(a)}}finally{C=r}}}function Lt(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];if(!(e.f&(q|b)))try{U(e)&&(nn(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Bn(e):e.fn=null))}catch(l){X(l,e,null,e.ctx)}}}function Mt(){if(M=!1,N>1001)return;const n=I;I=[],Wn(n),M||(N=0,H=null)}function tn(n){G===$n&&(M||(M=!0,queueMicrotask(Mt))),H=n;for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(Q|T)){if(!(r&h))return;t.f^=h}}I.push(t)}function Xn(n,t){var r=n.first,e=[];n:for(;r!==null;){var l=r.f,a=(l&T)!==0,s=a&&(l&h)!==0,f=r.next;if(!s&&!(l&b))if(l&j){if(a)r.f^=h;else try{U(r)&&nn(r)}catch(c){X(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else l&An&&e.push(r);if(f===null){let c=r.parent;for(;c!==null;){if(n===c)break n;var d=c.next;if(d!==null){r=d;continue n}c=c.parent}}r=f}for(var _=0;_<e.length;_++)p=e[_],t.push(p),Xn(p,t)}function nt(n){var t=G,r=I;try{Qn();const l=[];G=Ct,I=l,M=!1,Wn(r);var e=n==null?void 0:n();return Dt(),(I.length>0||l.length>0)&&nt(),N=0,H=null,e}finally{G=t,I=r}}async function Br(){await Promise.resolve(),nt()}function Ht(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&q){var e=Pn(n);return _n(n),e}if(k!==null&&k.add(n),o!==null){m!==null&&m.includes(n)&&ct();var l=o.deps;v===null&&l!==null&&l[E]===n?E++:v===null?v=[n]:v.push(n),A!==null&&u!==null&&u.f&h&&!(u.f&T)&&A.includes(n)&&(g(u,x),tn(u))}else if(r&&n.deps===null)for(var a=n,s=a.parent,f=a;s!==null;)if(s.f&y){var p=s;f=p,s=p.parent}else{var d=s;(_=d.deriveds)!=null&&_.includes(f)||(d.deriveds??(d.deriveds=[])).push(f);break}return r&&(a=n,U(a)&&Fn(a)),n.v}function Yt(n){var t=k;k=new Set;var r=k,e;try{if(pn(n),t!==null)for(e of k)t.add(e)}finally{k=t}return r}function Ur(n){var t=Yt(()=>pn(n));for(var r of t)if(r.f&at)for(const e of r.deps||[])e.f&y||yn(e,null);else yn(r,null)}function pn(n){const t=o;try{return o=null,n()}finally{o=t}}const jt=~(x|B|h);function g(n,t){n.f=n.f&jt|t}function Vr(n){return tt().get(n)}function Gr(n,t){return tt().set(n,t),t}function tt(n){return i===null&&Ot(),i.c??(i.c=new Map(Bt(i)||void 0))}function Bt(n){let t=n.p;for(;t!==null;){const r=t.c;if(r!==null)return r;t=t.p}return null}function Kr(n,t=!1,r){i={p:i,c:null,e:null,m:!1,s:n,x:null,l:null},W&&!t&&(i.l={s:null,u:null,r1:[],r2:fn(!1)})}function $r(n){const t=i;if(t!==null){const s=t.e;if(s!==null){var r=u,e=o;t.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];J(a.effect),z(a.reaction),Mn(a.fn)}}finally{J(r),z(e)}}i=t.p,t.m=!0}return{}}function Zr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(En in n)un(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&En in r&&un(r)}}}function un(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{un(n[e],t)}catch{}const r=et(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=rt(r);for(let l in e){const a=e[l].get;if(a)try{a.call(n)}catch{}}}}}export{en as $,xr as A,L as B,wr as C,Mr as D,xn as E,Lr as F,br as G,yt as H,gn as I,Jt as J,Zr as K,Wt as L,et as M,rt as N,Yr as O,D as P,On as Q,Cn as R,En as S,ln as T,Sr as U,Et as V,wt as W,Xt as X,Dr as Y,Vt as Z,qr as _,$r as a,u as a0,er as a1,Kt as a2,$t as a3,fn as a4,tr as a5,ht as a6,yr as a7,dn as a8,rr as a9,z as aA,o as aB,st as aC,dr as aD,Er as aE,or as aF,b as aG,sr as aH,dt as aI,ur as aJ,Un as aK,It as aL,ir as aM,fr as aN,Gr as aO,Vr as aP,ut as aQ,jr as aR,gr as aS,nr as aa,at as ab,vr as ac,In as ad,Zt as ae,Qt as af,T as ag,Q as ah,J as ai,_r as aj,cr as ak,pr as al,Or as am,hr as an,pt as ao,k as ap,Cr as aq,ar,Ur as as,yn as at,Ar as au,nt as av,Gt as aw,Br as ax,lr as ay,mt as az,i as b,kr as c,W as d,pn as e,Ir as f,Ht as g,S as h,Ut as i,mr as j,Mn as k,Ot as l,xt as m,vn as n,Tt as o,Kr as p,Hr as q,Tr as r,Rr as s,Pr as t,Nr as u,St as v,Fr as w,zt as x,F as y,w as z};
