var Fn=Array.isArray,Ln=Array.from,Mn=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,Qt=Object.getOwnPropertyDescriptors,Hn=Object.prototype,Yn=Array.prototype,Wt=Object.getPrototypeOf;function jn(t){return typeof t=="function"}const Bn=()=>{};function Un(t){return t()}function ht(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,Et=4,H=8,st=16,w=32,z=64,R=128,V=256,p=512,x=1024,Y=2048,b=4096,j=8192,Xt=16384,yt=32768,tn=65536,nn=1<<18,wt=1<<19,_t=Symbol("$state"),Vn=Symbol("legacy props"),Gn=Symbol("");function mt(t){return t===this.v}function rn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Tt(t){return!rn(t,this.v)}function en(t){throw new Error("effect_in_teardown")}function sn(){throw new Error("effect_in_unowned_derived")}function an(t){throw new Error("effect_orphan")}function ln(){throw new Error("effect_update_depth_exceeded")}function Kn(){throw new Error("hydration_failed")}function $n(t){throw new Error("props_invalid_value")}function Zn(){throw new Error("state_descriptors_fixed")}function zn(){throw new Error("state_prototype_fixed")}function un(){throw new Error("state_unsafe_local_read")}function on(){throw new Error("state_unsafe_mutation")}let J=!1;function Jn(){J=!0}function at(t){return{f:0,v:t,reactions:null,equals:mt,version:0}}function Qn(t){return At(at(t))}function fn(t,n=!1){var e;const r=at(t);return n||(r.equals=Tt),J&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function Wn(t,n=!1){return At(fn(t,n))}function At(t){return o!==null&&o.f&y&&(E===null?kn([t]):E.push(t)),t}function ct(t,n){return _n(t,zt(()=>bn(t))),n}function _n(t,n){return o!==null&&ot()&&o.f&(y|st)&&(E===null||!E.includes(t))&&on(),cn(t,n)}function cn(t,n){return t.equals(n)||(t.v=n,t.version=Ut(),gt(t,x),ot()&&u!==null&&u.f&p&&!(u.f&w)&&(_!==null&&_.includes(t)?(m(u,x),W(u)):g===null?Rn([t]):g.push(t))),n}function gt(t,n){var r=t.reactions;if(r!==null)for(var e=ot(),s=r.length,a=0;a<s;a++){var l=r[a],f=l.f;f&x||!e&&l===u||(m(l,n),f&(p|R)&&(f&y?gt(l,Y):W(l)))}}const Xn=1,tr=2,nr=4,rr=8,er=16,sr=1,ar=2,lr=4,ur=8,or=16,ir=1,fr=2,vn="[",pn="[!",dn="]",xt={},_r=Symbol();function It(t){console.warn("hydration_mismatch")}let k=!1;function cr(t){k=t}let h;function F(t){if(t===null)throw It(),xt;return h=t}function vr(){return F(D(h))}function pr(t){if(k){if(D(h)!==null)throw It(),xt;h=t}}function dr(t=1){if(k){for(var n=t,r=h;n--;)r=D(r);h=r}}function hr(){for(var t=0,n=h;;){if(n.nodeType===8){var r=n.data;if(r===dn){if(t===0)return n;t-=1}else(r===vn||r===pn)&&(t+=1)}var e=D(n);n.remove(),n=e}}var vt,hn,St,kt;function Er(){if(vt===void 0){vt=window,hn=document;var t=Element.prototype,n=Node.prototype;St=ft(n,"firstChild").get,kt=ft(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function X(t=""){return document.createTextNode(t)}function tt(t){return St.call(t)}function D(t){return kt.call(t)}function yr(t,n){if(!k)return tt(t);var r=tt(h);if(r===null)r=h.appendChild(X());else if(n&&r.nodeType!==3){var e=X();return r==null||r.before(e),F(e),e}return F(r),r}function wr(t,n){if(!k){var r=tt(t);return r instanceof Comment&&r.data===""?D(r):r}return h}function mr(t,n=1,r=!1){let e=k?h:t;for(;n--;)e=D(e);if(!k)return e;var s=e.nodeType;if(r&&s!==3){var a=X();return e==null||e.before(a),F(a),a}return F(e),e}function Tr(t){t.textContent=""}function En(t){var n=y|x;u===null?n|=R:u.f|=wt;const r={children:null,ctx:i,deps:null,equals:mt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(o!==null&&o.f&y){var e=o;(e.children??(e.children=[])).push(r)}return r}function Ar(t){const n=En(t);return n.equals=Tt,n}function Rt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?lt(e):P(e)}}}function Dt(t){var n,r=u;Z(t.parent);try{Rt(t),n=Vt(t)}finally{Z(r)}return n}function Ot(t){var n=Dt(t),r=(O||t.f&R)&&t.deps!==null?Y:p;m(t,r),t.equals(n)||(t.v=n,t.version=Ut())}function lt(t){Rt(t),M(t,0),m(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ct(t){u===null&&o===null&&an(),o!==null&&o.f&R&&sn(),ut&&en()}function yn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var s=(t&z)!==0,a=u,l={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var f=C;try{pt(!0),Q(l),l.f|=Xt}catch(c){throw P(l),c}finally{pt(f)}}else n!==null&&W(l);var T=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&wt)===0;if(!T&&!s&&e&&(a!==null&&yn(l,a),o!==null&&o.f&y)){var A=o;(A.children??(A.children=[])).push(l)}return l}function gr(t){const n=q(H,null,!1);return m(n,p),n.teardown=t,n}function xr(t){Ct();var n=u!==null&&(u.f&w)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Nt(t);return e}}function Ir(t){return Ct(),wn(t)}function Sr(t){const n=q(z,t,!0);return()=>{P(n)}}function Nt(t){return q(Et,t,!1)}function wn(t){return q(H,t,!0)}function kr(t){return mn(t)}function mn(t,n=0){return q(H|st|n,t,!0)}function Rr(t,n=!0){return q(H|w,t,!0,n)}function bt(t){var n=t.teardown;if(n!==null){const r=ut,e=o;dt(!0),$(null);try{n.call(null)}finally{dt(r),$(e)}}}function qt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)lt(n[r])}}function Pt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function Tn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&w||P(n),n=r}}function P(t,n=!0){var r=!1;if((n||t.f&nn)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:D(e);e.remove(),e=a}r=!0}Pt(t,n&&!r),qt(t),M(t,0),m(t,j);var l=t.transitions;if(l!==null)for(const T of l)T.stop();bt(t);var f=t.parent;f!==null&&f.first!==null&&Ft(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Ft(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Dr(t,n){var r=[];Lt(t,r,!0),An(r,()=>{P(t),n&&n()})}function An(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Lt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&yt)!==0||(e.f&w)!==0;Lt(e,n,a?r:!1),e=s}}}function Or(t){Mt(t,!0)}function Mt(t,n){if(t.f&b){B(t)&&Q(t),t.f^=b;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&yt)!==0||(r.f&w)!==0;Mt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const gn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let G=!1,K=!1,nt=[],rt=[];function Ht(){G=!1;const t=nt.slice();nt=[],ht(t)}function Yt(){K=!1;const t=rt.slice();rt=[],ht(t)}function Cr(t){G||(G=!0,queueMicrotask(Ht)),nt.push(t)}function Nr(t){K||(K=!0,gn(Yt)),rt.push(t)}function xn(){G&&Ht(),K&&Yt()}function br(){throw new Error("invalid_default_snippet")}function In(t){throw new Error("lifecycle_outside_component")}const jt=0,Sn=1;let U=jt,L=!1,C=!1,ut=!1;function pt(t){C=t}function dt(t){ut=t}let S=[],N=0;let o=null;function $(t){o=t}let u=null;function Z(t){u=t}let E=null;function kn(t){E=t}let _=null,d=0,g=null;function Rn(t){g=t}let Bt=0,O=!1,I=null,i=null;function Ut(){return++Bt}function ot(){return!J||i!==null&&i.l===null}function B(t){var l,f;var n=t.f;if(n&x)return!0;if(n&Y){var r=t.deps,e=(n&R)!==0;if(r!==null){var s;if(n&V){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=V}for(s=0;s<r.length;s++){var a=r[s];if(B(a)&&Ot(a),e&&u!==null&&!O&&!((f=a==null?void 0:a.reactions)!=null&&f.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||m(t,p)}return!1}function Dn(t,n,r){throw t}function Vt(t){var it;var n=_,r=d,e=g,s=o,a=O,l=E,f=i,T=t.f;_=null,d=0,g=null,o=T&(w|z)?null:t,O=!C&&(T&R)!==0,E=null,i=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(M(t,d),c!==null&&d>0)for(c.length=d+_.length,v=0;v<_.length;v++)c[d+v]=_[v];else t.deps=c=_;if(!O)for(v=d;v<c.length;v++)((it=c[v]).reactions??(it.reactions=[])).push(t)}else c!==null&&d<c.length&&(M(t,d),c.length=d);return A}finally{_=n,d=r,g=e,o=s,O=a,E=l,i=f}}function On(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(_===null||!_.includes(n))&&(m(n,Y),n.f&(R|V)||(n.f^=V),M(n,0))}function M(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)On(t,r[e])}function Q(t){var n=t.f;if(!(n&j)){m(t,p);var r=u;u=t;try{n&st?Tn(t):Pt(t),qt(t),bt(t);var e=Vt(t);t.teardown=typeof e=="function"?e:null,t.version=Bt}catch(s){Dn(s)}finally{u=r}}}function Gt(){N>1e3&&(N=0,ln()),N++}function Kt(t){var n=t.length;if(n!==0){Gt();var r=C;C=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];$t(s,a),Cn(a)}}finally{C=r}}}function Cn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|b))&&B(e)&&(Q(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ft(e):e.fn=null))}}function Nn(){if(L=!1,N>1001)return;const t=S;S=[],Kt(t),L||(N=0)}function W(t){U===jt&&(L||(L=!0,queueMicrotask(Nn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(z|w)){if(!(r&p))return;n.f^=p}}S.push(n)}function $t(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&w)!==0,l=a&&(s&p)!==0;if(!l&&!(s&b))if(s&H){a?r.f^=p:B(r)&&Q(r);var f=r.first;if(f!==null){r=f;continue}}else s&Et&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)f=e[c],n.push(f),$t(f,n)}function Zt(t){var n=U,r=S;try{Gt();const s=[];U=Sn,S=s,L=!1,Kt(r);var e=t==null?void 0:t();return xn(),(S.length>0||s.length>0)&&Zt(),N=0,e}finally{U=n,S=r}}async function qr(){await Promise.resolve(),Zt()}function bn(t){var f;var n=t.f,r=(n&y)!==0;if(r&&n&j){var e=Dt(t);return lt(t),e}if(I!==null&&I.add(t),o!==null){E!==null&&E.includes(t)&&un();var s=o.deps;_===null&&s!==null&&s[d]===t?d++:_===null?_=[t]:_.push(t),g!==null&&u!==null&&u.f&p&&!(u.f&w)&&g.includes(t)&&(m(u,x),W(u))}else if(r&&t.deps===null){var a=t,l=a.parent;l!==null&&!((f=l.deriveds)!=null&&f.includes(a))&&(l.deriveds??(l.deriveds=[])).push(a)}return r&&(a=t,B(a)&&Ot(a)),t.v}function Pr(t){var n=I;I=new Set;var r=I,e;try{if(zt(t),n!==null)for(e of I)n.add(e)}finally{I=n}for(e of r)if(e.f&tn)for(const s of e.deps||[])s.f&y||ct(s,null);else ct(e,null)}function zt(t){const n=o;try{return o=null,t()}finally{o=n}}const qn=~(x|Y|p);function m(t,n){t.f=t.f&qn|n}function Fr(t){return Jt().get(t)}function Lr(t,n){return Jt().set(t,n),n}function Jt(t){return i===null&&In(),i.c??(i.c=new Map(Pn(i)||void 0))}function Pn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function Mr(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},J&&!n&&(i.l={s:null,u:null,r1:[],r2:at(!1)})}function Hr(t){const n=i;if(n!==null){const l=n.e;if(l!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];Z(a.effect),$(a.reaction),Nt(a.fn)}}finally{Z(r),$(e)}}i=n.p,n.m=!0}return{}}function Yr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(_t in t)et(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&_t in r&&et(r)}}}function et(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{et(t[e],n)}catch{}const r=Wt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Qt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{u as $,Dr as A,hr as B,F as C,cr as D,yt as E,Ir as F,ht as G,pn as H,Un as I,Yr as J,Wt as K,Nr as L,Qt as M,Gn as N,Cr as O,D as P,It as Q,xt as R,tt as S,Er as T,vn as U,dn as V,Kn as W,Tr as X,Ln as Y,Sr as Z,X as _,Hr as a,Jn as a0,_t as a1,Hn as a2,Yn as a3,at as a4,Zn as a5,_n as a6,_r as a7,ft as a8,zn as a9,$ as aA,o as aB,nn as aC,ir as aD,fr as aE,nr as aF,b as aG,Xn as aH,cn as aI,tr as aJ,Lt as aK,An as aL,rr as aM,er as aN,Lr as aO,Fr as aP,rn as aQ,br as aR,$n as aa,tn as ab,lr as ac,Tt as ad,jn as ae,Vn as af,w as ag,z as ah,Z as ai,sr as aj,ar as ak,ur as al,Ar as am,or as an,fn as ao,I as ap,gr as aq,Wn as ar,Pr as as,ct as at,dr as au,hn as av,Zt as aw,Mn as ax,qr as ay,Qn as az,i as b,yr as c,J as d,zt as e,wr as f,bn as g,k as h,Fn as i,vr as j,ot as k,In as l,wn as m,Nt as n,En as o,Mr as p,mn as q,pr as r,mr as s,kr as t,xr as u,Rr as v,Bn as w,P as x,h as y,Or as z};
