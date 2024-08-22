import{h as ae}from"../chunks/5.B-CnRC1K.js";import{h as ne}from"../chunks/7.BkPvF_wP.js";import{h as ie}from"../chunks/6.DufzGZWB.js";import{b as T}from"../chunks/paths.CIDLBqR7.js";import{s as B,e as v,c as g,b,f as _,v as h,i as S,Y as oe,a as A,g as I,h as m,t as x,d as M,j as C,n as w,k as Z,S as ee,T as ce,w as ue,V as fe,W as he,X as _e}from"../chunks/scheduler.BMc8JP4_.js";import{S as U,i as X,a as E,g as te,c as se,t as N,b as H,d as O,m as q,e as z}from"../chunks/index.CNWtZWm0.js";import{p as le}from"../chunks/stores.BYmNhoKH.js";import{e as J}from"../chunks/Overlay.svelte_svelte_type_style_lang.CDbq7vPD.js";function W(i,e,t){const s=e.find(l=>l.rank===t);return{text:(s==null?void 0:s.text)??"",href:i,submenu:me(i,e,t+1)}}function me(i,e,t){return e.filter(s=>s.rank===t).map(s=>({text:s.text,href:`${i}#${s.id}`}))}const de=async i=>{var s;const e=[W(T+"/docs/getting-started",ae,1),W(T+"/docs/tutorial",ne,1),W(T+"/docs/reference",ie,1)],t=((s=e.find(l=>l.href&&i.url.pathname.startsWith(l.href)))==null?void 0:s.text)??"Documentation";return{menu:e,seo:{title:t,description:t}}},Te=Object.freeze(Object.defineProperty({__proto__:null,load:de},Symbol.toStringTag,{value:"Module"}));function K(i,e,t){const s=i.slice();return s[1]=e[t].text,s[2]=e[t].href,s[3]=e[t].submenu,s}function pe(i){let e=i[1]+"",t;return{c(){t=x(e)},l(s){t=M(s,e)},m(s,l){S(s,t,l)},p(s,l){l&1&&e!==(e=s[1]+"")&&C(t,e)},d(s){s&&_(t)}}}function ve(i){let e,t=i[1]+"",s,l;return{c(){e=v("a"),s=x(t),this.h()},l(o){e=g(o,"A",{href:!0,class:!0});var a=b(e);s=M(a,t),a.forEach(_),this.h()},h(){h(e,"href",l=i[2]),h(e,"class","svelte-10yuc2m")},m(o,a){S(o,e,a),m(e,s)},p(o,a){a&1&&t!==(t=o[1]+"")&&C(s,t),a&1&&l!==(l=o[2])&&h(e,"href",l)},d(o){o&&_(e)}}}function Q(i){let e,t;return e=new re({props:{items:i[3]}}),{c(){H(e.$$.fragment)},l(s){O(e.$$.fragment,s)},m(s,l){q(e,s,l),t=!0},p(s,l){const o={};l&1&&(o.items=s[3]),e.$set(o)},i(s){t||(E(e.$$.fragment,s),t=!0)},o(s){N(e.$$.fragment,s),t=!1},d(s){z(e,s)}}}function R(i){let e,t,s,l,o;function a(n,f){return n[2]&&!n[3]?ve:pe}let c=a(i),r=c(i),u=i[3]&&Q(i);return{c(){e=v("li"),t=v("span"),r.c(),s=A(),u&&u.c(),l=A(),this.h()},l(n){e=g(n,"LI",{class:!0});var f=b(e);t=g(f,"SPAN",{class:!0});var d=b(t);r.l(d),d.forEach(_),s=I(f),u&&u.l(f),l=I(f),f.forEach(_),this.h()},h(){h(t,"class","item svelte-10yuc2m"),h(e,"class","svelte-10yuc2m")},m(n,f){S(n,e,f),m(e,t),r.m(t,null),m(e,s),u&&u.m(e,null),m(e,l),o=!0},p(n,f){c===(c=a(n))&&r?r.p(n,f):(r.d(1),r=c(n),r&&(r.c(),r.m(t,null))),n[3]?u?(u.p(n,f),f&1&&E(u,1)):(u=Q(n),u.c(),E(u,1),u.m(e,l)):u&&(te(),N(u,1,1,()=>{u=null}),se())},i(n){o||(E(u),o=!0)},o(n){N(u),o=!1},d(n){n&&_(e),r.d(),u&&u.d()}}}function ge(i){let e,t,s=J(i[0]),l=[];for(let a=0;a<s.length;a+=1)l[a]=R(K(i,s,a));const o=a=>N(l[a],1,1,()=>{l[a]=null});return{c(){e=v("ul");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=g(a,"UL",{class:!0});var c=b(e);for(let r=0;r<l.length;r+=1)l[r].l(c);c.forEach(_),this.h()},h(){h(e,"class","svelte-10yuc2m")},m(a,c){S(a,e,c);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(e,null);t=!0},p(a,[c]){if(c&1){s=J(a[0]);let r;for(r=0;r<s.length;r+=1){const u=K(a,s,r);l[r]?(l[r].p(u,c),E(l[r],1)):(l[r]=R(u),l[r].c(),E(l[r],1),l[r].m(e,null))}for(te(),r=s.length;r<l.length;r+=1)o(r);se()}},i(a){if(!t){for(let c=0;c<s.length;c+=1)E(l[c]);t=!0}},o(a){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)N(l[c]);t=!1},d(a){a&&_(e),oe(l,a)}}}function be(i,e,t){let{items:s}=e;return i.$$set=l=>{"items"in l&&t(0,s=l.items)},[s]}class re extends U{constructor(e){super(),X(this,e,be,ge,B,{items:0})}}function $e(i){let e;return{c(){e=v("div"),this.h()},l(t){e=g(t,"DIV",{class:!0}),b(e).forEach(_),this.h()},h(){h(e,"class","svelte-1hhiuyo")},m(t,s){S(t,e,s)},p:w,d(t){t&&_(e)}}}function ke(i){var u;let e,t,s='<strong class="svelte-1hhiuyo">Previous page</strong>',l,o,a=((u=i[1])==null?void 0:u.text)+"",c,r;return{c(){e=v("a"),t=v("span"),t.innerHTML=s,l=A(),o=v("span"),c=x(a),this.h()},l(n){e=g(n,"A",{class:!0,href:!0});var f=b(e);t=g(f,"SPAN",{class:!0,"data-svelte-h":!0}),ee(t)!=="svelte-1riu517"&&(t.innerHTML=s),l=I(f),o=g(f,"SPAN",{class:!0});var d=b(o);c=M(d,a),d.forEach(_),f.forEach(_),this.h()},h(){var n;h(t,"class","desc svelte-1hhiuyo"),h(o,"class","text svelte-1hhiuyo"),h(e,"class","prev svelte-1hhiuyo"),h(e,"href",r=(n=i[1])==null?void 0:n.href)},m(n,f){S(n,e,f),m(e,t),m(e,l),m(e,o),m(o,c)},p(n,f){var d,$;f&2&&a!==(a=((d=n[1])==null?void 0:d.text)+"")&&C(c,a),f&2&&r!==(r=($=n[1])==null?void 0:$.href)&&h(e,"href",r)},d(n){n&&_(e)}}}function ye(i){let e;return{c(){e=v("div"),this.h()},l(t){e=g(t,"DIV",{class:!0}),b(e).forEach(_),this.h()},h(){h(e,"class","svelte-1hhiuyo")},m(t,s){S(t,e,s)},p:w,d(t){t&&_(e)}}}function Ee(i){var u;let e,t,s="Next page",l,o,a=((u=i[0])==null?void 0:u.text)+"",c,r;return{c(){e=v("a"),t=v("span"),t.textContent=s,l=A(),o=v("span"),c=x(a),this.h()},l(n){e=g(n,"A",{class:!0,href:!0});var f=b(e);t=g(f,"SPAN",{class:!0,"data-svelte-h":!0}),ee(t)!=="svelte-o9ev86"&&(t.textContent=s),l=I(f),o=g(f,"SPAN",{class:!0});var d=b(o);c=M(d,a),d.forEach(_),f.forEach(_),this.h()},h(){var n;h(t,"class","desc svelte-1hhiuyo"),h(o,"class","text svelte-1hhiuyo"),h(e,"class","next svelte-1hhiuyo"),h(e,"href",r=(n=i[0])==null?void 0:n.href)},m(n,f){S(n,e,f),m(e,t),m(e,l),m(e,o),m(o,c)},p(n,f){var d,$;f&1&&a!==(a=((d=n[0])==null?void 0:d.text)+"")&&C(c,a),f&1&&r!==(r=($=n[0])==null?void 0:$.href)&&h(e,"href",r)},d(n){n&&_(e)}}}function Se(i){let e,t;function s(u,n){return u[1]?ke:$e}let l=s(i),o=l(i);function a(u,n){return u[0]?Ee:ye}let c=a(i),r=c(i);return{c(){e=v("div"),o.c(),t=A(),r.c(),this.h()},l(u){e=g(u,"DIV",{class:!0});var n=b(e);o.l(n),t=I(n),r.l(n),n.forEach(_),this.h()},h(){h(e,"class","prev-next svelte-1hhiuyo")},m(u,n){S(u,e,n),o.m(e,null),m(e,t),r.m(e,null)},p(u,[n]){l===(l=s(u))&&o?o.p(u,n):(o.d(1),o=l(u),o&&(o.c(),o.m(e,t))),c===(c=a(u))&&r?r.p(u,n):(r.d(1),r=c(u),r&&(r.c(),r.m(e,null)))},i:w,o:w,d(u){u&&_(e),o.d(),r.d()}}}function Ae(i,e,t){let s,l,o,a;Z(i,le,r=>t(4,a=r));let{menu:c}=e;return i.$$set=r=>{"menu"in r&&t(2,c=r.menu)},i.$$.update=()=>{i.$$.dirty&20&&t(3,s=c.findIndex(r=>a.url.pathname.startsWith(r.href))),i.$$.dirty&12&&t(1,l=s>0?c[s-1]:null),i.$$.dirty&12&&t(0,o=c.length>s+1?c[s+1]:null)},[o,l,c,s,a]}class Ie extends U{constructor(e){super(),X(this,e,Ae,Se,B,{menu:2})}}function Ne(i){let e,t,s,l,o,a,c,r,u,n,f,d,$,V;l=new re({props:{items:i[0].data.menu}});const L=i[2].default,k=ce(L,i,i[1],null);return $=new Ie({props:{menu:i[0].data.menu}}),{c(){e=v("div"),t=v("div"),s=v("nav"),H(l.$$.fragment),o=A(),a=v("div"),c=v("div"),r=v("main"),k&&k.c(),u=A(),n=v("hr"),f=A(),d=v("nav"),H($.$$.fragment),this.h()},l(p){e=g(p,"DIV",{class:!0});var y=b(e);t=g(y,"DIV",{class:!0});var j=b(t);s=g(j,"NAV",{"aria-label":!0,class:!0});var P=b(s);O(l.$$.fragment,P),P.forEach(_),j.forEach(_),o=I(y),a=g(y,"DIV",{class:!0});var Y=b(a);c=g(Y,"DIV",{class:!0});var D=b(c);r=g(D,"MAIN",{class:!0});var F=b(r);k&&k.l(F),F.forEach(_),u=I(D),n=g(D,"HR",{class:!0}),f=I(D),d=g(D,"NAV",{class:!0});var G=b(d);O($.$$.fragment,G),G.forEach(_),D.forEach(_),Y.forEach(_),y.forEach(_),this.h()},h(){h(s,"aria-label","Docs"),h(s,"class","svelte-1jxh5k7"),h(t,"class","sidebar svelte-1jxh5k7"),h(r,"class","stack svelte-1jxh5k7"),h(n,"class","svelte-1jxh5k7"),h(d,"class","svelte-1jxh5k7"),h(c,"class","stack center with-gutters"),h(a,"class","content"),h(e,"class","docs with-sidebar wrap-reverse"),ue(e,"--gap","var(--s5) var(--space)")},m(p,y){S(p,e,y),m(e,t),m(t,s),q(l,s,null),m(e,o),m(e,a),m(a,c),m(c,r),k&&k.m(r,null),m(c,u),m(c,n),m(c,f),m(c,d),q($,d,null),V=!0},p(p,[y]){const j={};y&1&&(j.items=p[0].data.menu),l.$set(j),k&&k.p&&(!V||y&2)&&fe(k,L,p,p[1],V?_e(L,p[1],y,null):he(p[1]),null);const P={};y&1&&(P.menu=p[0].data.menu),$.$set(P)},i(p){V||(E(l.$$.fragment,p),E(k,p),E($.$$.fragment,p),V=!0)},o(p){N(l.$$.fragment,p),N(k,p),N($.$$.fragment,p),V=!1},d(p){p&&_(e),z(l),k&&k.d(p),z($)}}}function Ve(i,e,t){let s;Z(i,le,a=>t(0,s=a));let{$$slots:l={},$$scope:o}=e;return i.$$set=a=>{"$$scope"in a&&t(1,o=a.$$scope)},[s,o,l]}class We extends U{constructor(e){super(),X(this,e,Ve,Ne,B,{})}}export{We as component,Te as universal};
