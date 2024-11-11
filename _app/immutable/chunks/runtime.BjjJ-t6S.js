var Mn=Array.isArray,Ln=Array.from,Hn=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,Wt=Object.getOwnPropertyDescriptors,Yn=Object.prototype,jn=Array.prototype,Xt=Object.getPrototypeOf;function Bn(t){return typeof t=="function"}const Un=()=>{};function Vn(t){return t()}function Et(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,yt=4,Y=8,at=16,w=32,J=64,S=128,G=256,p=512,x=1024,j=2048,b=4096,B=8192,tn=16384,wt=32768,nn=65536,rn=1<<18,mt=1<<19,ct=Symbol("$state"),Gn=Symbol("");function Tt(t){return t===this.v}function en(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!en(t,this.v)}function sn(t){throw new Error("effect_in_teardown")}function an(){throw new Error("effect_in_unowned_derived")}function ln(t){throw new Error("effect_orphan")}function un(){throw new Error("effect_update_depth_exceeded")}function Kn(){throw new Error("hydration_failed")}function $n(t){throw new Error("props_invalid_value")}function Zn(){throw new Error("state_descriptors_fixed")}function zn(){throw new Error("state_prototype_fixed")}function on(){throw new Error("state_unsafe_local_read")}function fn(){throw new Error("state_unsafe_mutation")}let Q=!1;function Jn(){Q=!0}function lt(t){return{f:0,v:t,reactions:null,equals:Tt,version:0}}function Qn(t){return gt(lt(t))}function _n(t,n=!1){var e;const r=lt(t);return n||(r.equals=At),Q&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function Wn(t,n=!1){return gt(_n(t,n))}function gt(t){return o!==null&&o.f&y&&(E===null?Dn([t]):E.push(t)),t}function vt(t,n){return cn(t,Jt(()=>qn(t))),n}function cn(t,n){return o!==null&&it()&&o.f&(y|at)&&(E===null||!E.includes(t))&&fn(),vn(t,n)}function vn(t,n){return t.equals(n)||(t.v=n,t.version=Vt(),xt(t,x),it()&&u!==null&&u.f&p&&!(u.f&w)&&(_!==null&&_.includes(t)?(m(u,x),X(u)):g===null?Rn([t]):g.push(t))),n}function xt(t,n){var r=t.reactions;if(r!==null)for(var e=it(),s=r.length,a=0;a<s;a++){var l=r[a],f=l.f;f&x||!e&&l===u||(m(l,n),f&(p|S)&&(f&y?xt(l,j):X(l)))}}const Xn=1,tr=2,nr=4,rr=8,er=16,sr=1,ar=2,lr=4,ur=8,or=16,ir=1,fr=2,pn="[",dn="[!",hn="]",It={},_r=Symbol();function kt(t){console.warn("hydration_mismatch")}let k=!1;function cr(t){k=t}let h;function M(t){if(t===null)throw kt(),It;return h=t}function vr(){return M(D(h))}function pr(t){if(k){if(D(h)!==null)throw kt(),It;h=t}}function dr(t=1){if(k){for(var n=t,r=h;n--;)r=D(r);h=r}}function hr(){for(var t=0,n=h;;){if(n.nodeType===8){var r=n.data;if(r===hn){if(t===0)return n;t-=1}else(r===pn||r===dn)&&(t+=1)}var e=D(n);n.remove(),n=e}}var pt,En,St,Dt;function Er(){if(pt===void 0){pt=window,En=document;var t=Element.prototype,n=Node.prototype;St=_t(n,"firstChild").get,Dt=_t(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function tt(t=""){return document.createTextNode(t)}function nt(t){return St.call(t)}function D(t){return Dt.call(t)}function yr(t,n){if(!k)return nt(t);var r=nt(h);if(r===null)r=h.appendChild(tt());else if(n&&r.nodeType!==3){var e=tt();return r==null||r.before(e),M(e),e}return M(r),r}function wr(t,n){if(!k){var r=nt(t);return r instanceof Comment&&r.data===""?D(r):r}return h}function mr(t,n=1,r=!1){let e=k?h:t;for(;n--;)e=D(e);if(!k)return e;var s=e.nodeType;if(r&&s!==3){var a=tt();return e==null||e.before(a),M(a),a}return M(e),e}function Tr(t){t.textContent=""}function yn(t){var n=y|x;u===null?n|=S:u.f|=mt;const r={children:null,ctx:i,deps:null,equals:Tt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(o!==null&&o.f&y){var e=o;(e.children??(e.children=[])).push(r)}return r}function Ar(t){const n=yn(t);return n.equals=At,n}function Rt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ut(e):P(e)}}}function Ot(t){var n,r=u;z(t.parent);try{Rt(t),n=Gt(t)}finally{z(r)}return n}function Ct(t){var n=Ot(t),r=(O||t.f&S)&&t.deps!==null?j:p;m(t,r),t.equals(n)||(t.v=n,t.version=Vt())}function ut(t){Rt(t),H(t,0),m(t,B),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Nt(t){u===null&&o===null&&ln(),o!==null&&o.f&S&&an(),ot&&sn()}function wn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var s=(t&J)!==0,a=u,l={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var f=C;try{dt(!0),W(l),l.f|=tn}catch(c){throw P(l),c}finally{dt(f)}}else n!==null&&X(l);var T=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&mt)===0;if(!T&&!s&&e&&(a!==null&&wn(l,a),o!==null&&o.f&y)){var A=o;(A.children??(A.children=[])).push(l)}return l}function gr(t){const n=q(Y,null,!1);return m(n,p),n.teardown=t,n}function xr(t){Nt();var n=u!==null&&(u.f&w)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=bt(t);return e}}function Ir(t){return Nt(),mn(t)}function kr(t){const n=q(J,t,!0);return()=>{P(n)}}function bt(t){return q(yt,t,!1)}function mn(t){return q(Y,t,!0)}function Sr(t){return Tn(t)}function Tn(t,n=0){return q(Y|at|n,t,!0)}function Dr(t,n=!0){return q(Y|w,t,!0,n)}function qt(t){var n=t.teardown;if(n!==null){const r=ot,e=o;ht(!0),Z(null);try{n.call(null)}finally{ht(r),Z(e)}}}function Pt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ut(n[r])}}function Ft(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function An(t){for(var n=t.first;n!==null;){var r=n.next;n.f&w||P(n),n=r}}function P(t,n=!0){var r=!1;if((n||t.f&rn)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:D(e);e.remove(),e=a}r=!0}Ft(t,n&&!r),Pt(t),H(t,0),m(t,B);var l=t.transitions;if(l!==null)for(const T of l)T.stop();qt(t);var f=t.parent;f!==null&&f.first!==null&&Mt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Mt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Rr(t,n){var r=[];Lt(t,r,!0),gn(r,()=>{P(t),n&&n()})}function gn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Lt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&wt)!==0||(e.f&w)!==0;Lt(e,n,a?r:!1),e=s}}}function Or(t){Ht(t,!0)}function Ht(t,n){if(t.f&b){U(t)&&W(t),t.f^=b;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&wt)!==0||(r.f&w)!==0;Ht(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const xn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let K=!1,$=!1,rt=[],et=[];function Yt(){K=!1;const t=rt.slice();rt=[],Et(t)}function jt(){$=!1;const t=et.slice();et=[],Et(t)}function Cr(t){K||(K=!0,queueMicrotask(Yt)),rt.push(t)}function Nr(t){$||($=!0,xn(jt)),et.push(t)}function In(){K&&Yt(),$&&jt()}function br(){throw new Error("invalid_default_snippet")}function kn(t){throw new Error("lifecycle_outside_component")}const Bt=0,Sn=1;let V=Bt,L=!1,C=!1,ot=!1;function dt(t){C=t}function ht(t){ot=t}let I=[],N=0;let o=null;function Z(t){o=t}let u=null;function z(t){u=t}let E=null;function Dn(t){E=t}let _=null,d=0,g=null;function Rn(t){g=t}let Ut=0,O=!1,F=!1,R=new Set,i=null;function Vt(){return++Ut}function it(){return!Q||i!==null&&i.l===null}function U(t){var l,f;var n=t.f;if(n&x)return!0;if(n&j){var r=t.deps,e=(n&S)!==0;if(r!==null){var s;if(n&G){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=G}for(s=0;s<r.length;s++){var a=r[s];if(U(a)&&Ct(a),e&&u!==null&&!O&&!((f=a==null?void 0:a.reactions)!=null&&f.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||m(t,p)}return!1}function On(t,n,r){throw t}function Gt(t){var ft;var n=_,r=d,e=g,s=o,a=O,l=E,f=i,T=t.f;_=null,d=0,g=null,o=T&(w|J)?null:t,O=!C&&(T&S)!==0,E=null,i=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(H(t,d),c!==null&&d>0)for(c.length=d+_.length,v=0;v<_.length;v++)c[d+v]=_[v];else t.deps=c=_;if(!O)for(v=d;v<c.length;v++)((ft=c[v]).reactions??(ft.reactions=[])).push(t)}else c!==null&&d<c.length&&(H(t,d),c.length=d);return A}finally{_=n,d=r,g=e,o=s,O=a,E=l,i=f}}function Cn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(_===null||!_.includes(n))&&(m(n,j),n.f&(S|G)||(n.f^=G),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Cn(t,r[e])}function W(t){var n=t.f;if(!(n&B)){m(t,p);var r=u;u=t;try{n&at?An(t):Ft(t),Pt(t),qt(t);var e=Gt(t);t.teardown=typeof e=="function"?e:null,t.version=Ut}catch(s){On(s)}finally{u=r}}}function Kt(){N>1e3&&(N=0,un()),N++}function $t(t){var n=t.length;if(n!==0){Kt();var r=C;C=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Zt(s,a),Nn(a)}}finally{C=r}}}function Nn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(B|b))&&U(e)&&(W(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mt(e):e.fn=null))}}function bn(){if(L=!1,N>1001)return;const t=I;I=[],$t(t),L||(N=0)}function X(t){V===Bt&&(L||(L=!0,queueMicrotask(bn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(J|w)){if(!(r&p))return;n.f^=p}}I.push(n)}function Zt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&w)!==0,l=a&&(s&p)!==0;if(!l&&!(s&b))if(s&Y){a?r.f^=p:U(r)&&W(r);var f=r.first;if(f!==null){r=f;continue}}else s&yt&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)f=e[c],n.push(f),Zt(f,n)}function zt(t){var n=V,r=I;try{Kt();const s=[];V=Sn,I=s,L=!1,$t(r);var e=t==null?void 0:t();return In(),(I.length>0||s.length>0)&&zt(),N=0,e}finally{V=n,I=r}}async function qr(){await Promise.resolve(),zt()}function qn(t){var f;var n=t.f,r=(n&y)!==0;if(r&&n&B){var e=Ot(t);return ut(t),e}if(F&&R.add(t),o!==null){E!==null&&E.includes(t)&&on();var s=o.deps;_===null&&s!==null&&s[d]===t?d++:_===null?_=[t]:_.push(t),g!==null&&u!==null&&u.f&p&&!(u.f&w)&&g.includes(t)&&(m(u,x),X(u))}else if(r&&t.deps===null){var a=t,l=a.parent;l!==null&&!((f=l.deriveds)!=null&&f.includes(a))&&(l.deriveds??(l.deriveds=[])).push(a)}return r&&(a=t,U(a)&&Ct(a)),t.v}function Pr(t){var n=F,r=R;F=!0,R=new Set;var e=R,s;try{Jt(t)}finally{if(F=n,F)for(s of R)r.add(s);R=r}for(s of e)if(s.f&nn)for(const a of s.deps||[])a.f&y||vt(a,null);else vt(s,null)}function Jt(t){const n=o;try{return o=null,t()}finally{o=n}}const Pn=~(x|j|p);function m(t,n){t.f=t.f&Pn|n}function Fr(t){return Qt().get(t)}function Mr(t,n){return Qt().set(t,n),n}function Qt(t){return i===null&&kn(),i.c??(i.c=new Map(Fn(i)||void 0))}function Fn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function Lr(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},Q&&!n&&(i.l={s:null,u:null,r1:[],r2:lt(!1)})}function Hr(t){const n=i;if(n!==null){const l=n.e;if(l!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];z(a.effect),Z(a.reaction),bt(a.fn)}}finally{z(r),Z(e)}}i=n.p,n.m=!0}return{}}function Yr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)st(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ct in r&&st(r)}}}function st(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{st(t[e],n)}catch{}const r=Xt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Wt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{u as $,Rr as A,hr as B,M as C,cr as D,wt as E,Ir as F,Et as G,dn as H,Vn as I,Yr as J,Xt as K,Gn as L,Wt as M,Nr as N,Cr as O,D as P,kt as Q,It as R,nt as S,Er as T,pn as U,hn as V,Kn as W,Tr as X,Ln as Y,kr as Z,tt as _,Hr as a,Jn as a0,ct as a1,Yn as a2,jn as a3,lt as a4,Zn as a5,cn as a6,_r as a7,_t as a8,zn as a9,o as aA,rn as aB,ir as aC,fr as aD,nr as aE,b as aF,Xn as aG,vn as aH,tr as aI,Lt as aJ,gn as aK,rr as aL,er as aM,Mr as aN,Fr as aO,en as aP,br as aQ,$n as aa,nn as ab,lr as ac,At as ad,Bn as ae,w as af,J as ag,z as ah,sr as ai,ar as aj,ur as ak,Ar as al,or as am,_n as an,F as ao,gr as ap,Wn as aq,Pr as ar,vt as as,dr as at,En as au,zt as av,Hn as aw,qr as ax,Qn as ay,Z as az,i as b,yr as c,Q as d,Jt as e,wr as f,qn as g,k as h,Mn as i,vr as j,it as k,kn as l,mn as m,bt as n,yn as o,Lr as p,Tn as q,pr as r,mr as s,Sr as t,xr as u,Dr as v,Un as w,P as x,h as y,Or as z};
