import{S as j,i as q,s as P,C as x,D as X,E as Y,m as p,h as _,F as K,b as E,G as ee,H as C,I as O,k as g,y as M,q as R,a as H,l as $,z as T,r as Z,c as k,n as f,p as te,J as h,A as G,g as B,d as I,B as N,K as se,e as Q,L as ae,M as le,N as re,O as ne,P as ie}from"../chunks/index.77053508.js";import{b as U}from"../chunks/paths.86c0f759.js";import{L as oe}from"../chunks/logo.4a03fccf.js";import{p as ce}from"../chunks/stores.82699913.js";function ue(o){let e,s='<path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>',l=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},o[0]],a={};for(let r=0;r<l.length;r+=1)a=x(a,l[r]);return{c(){e=X("svg"),this.h()},l(r){e=Y(r,"svg",{viewBox:!0,width:!0,height:!0});var c=p(e);c.forEach(_),this.h()},h(){K(e,a)},m(r,c){E(r,e,c),e.innerHTML=s},p(r,[c]){K(e,a=ee(l,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},c&1&&r[0]]))},i:C,o:C,d(r){r&&_(e)}}}function fe(o,e,s){return o.$$set=l=>{s(0,e=x(x({},e),O(l)))},e=O(e),[e]}class _e extends j{constructor(e){super(),q(this,e,fe,ue,P,{})}}function de(o){let e,s,l,a,r,c,u,n,m,d,t,i,b,w,y;return r=new oe({}),w=new _e({}),{c(){e=g("header"),s=g("nav"),l=g("div"),a=g("a"),M(r.$$.fragment),c=R(" svelte-fluent"),u=H(),n=g("div"),m=g("a"),d=R("Docs"),t=H(),i=g("a"),b=g("div"),M(w.$$.fragment),this.h()},l(v){e=$(v,"HEADER",{class:!0});var A=p(e);s=$(A,"NAV",{"aria-label":!0,class:!0});var D=p(s);l=$(D,"DIV",{class:!0});var S=p(l);a=$(S,"A",{class:!0,href:!0});var L=p(a);T(r.$$.fragment,L),c=Z(L," svelte-fluent"),L.forEach(_),S.forEach(_),u=k(D),n=$(D,"DIV",{class:!0});var V=p(n);m=$(V,"A",{href:!0,class:!0});var z=p(m);d=Z(z,"Docs"),z.forEach(_),t=k(V),i=$(V,"A",{href:!0,target:!0,rel:!0,title:!0,class:!0});var F=p(i);b=$(F,"DIV",{class:!0});var J=p(b);T(w.$$.fragment,J),J.forEach(_),F.forEach(_),V.forEach(_),D.forEach(_),A.forEach(_),this.h()},h(){f(a,"class","logo svelte-2ptxw5"),f(a,"href",U+"/"),f(l,"class","cluster"),f(m,"href",U+"/docs"),f(m,"class","svelte-2ptxw5"),f(b,"class","icon svelte-2ptxw5"),f(i,"href","https://github.com/nubolab-ffwd/svelte-fluent"),f(i,"target","_blank"),f(i,"rel","noreferrer noopener"),f(i,"title","View on GitHub"),f(i,"class","svelte-2ptxw5"),f(n,"class","cluster"),f(s,"aria-label","Primary"),f(s,"class","cluster"),te(s,"--justify","space-between"),f(e,"class","svelte-2ptxw5")},m(v,A){E(v,e,A),h(e,s),h(s,l),h(l,a),G(r,a,null),h(a,c),h(s,u),h(s,n),h(n,m),h(m,d),h(n,t),h(n,i),h(i,b),G(w,b,null),y=!0},p:C,i(v){y||(B(r.$$.fragment,v),B(w.$$.fragment,v),y=!0)},o(v){I(r.$$.fragment,v),I(w.$$.fragment,v),y=!1},d(v){v&&_(e),N(r),N(w)}}}class he extends j{constructor(e){super(),q(this,e,null,de,P,{})}}function W(o){let e,s;return{c(){e=g("meta"),this.h()},l(l){e=$(l,"META",{name:!0,content:!0}),this.h()},h(){f(e,"name","description"),f(e,"content",s=o[0].description)},m(l,a){E(l,e,a)},p(l,a){a&1&&s!==(s=l[0].description)&&f(e,"content",s)},d(l){l&&_(e)}}}function me(o){let e,s,l,a,r,c,u;document.title=e=o[0].title;let n=o[0].description&&W(o);a=new he({});const m=o[3].default,d=se(m,o,o[2],null);return{c(){n&&n.c(),s=Q(),l=H(),M(a.$$.fragment),r=H(),c=g("div"),d&&d.c(),this.h()},l(t){const i=ae("svelte-98thyt",document.head);n&&n.l(i),s=Q(),i.forEach(_),l=k(t),T(a.$$.fragment,t),r=k(t),c=$(t,"DIV",{class:!0});var b=p(c);d&&d.l(b),b.forEach(_),this.h()},h(){f(c,"class","content svelte-na9ceh")},m(t,i){n&&n.m(document.head,null),h(document.head,s),E(t,l,i),G(a,t,i),E(t,r,i),E(t,c,i),d&&d.m(c,null),u=!0},p(t,[i]){(!u||i&1)&&e!==(e=t[0].title)&&(document.title=e),t[0].description?n?n.p(t,i):(n=W(t),n.c(),n.m(s.parentNode,s)):n&&(n.d(1),n=null),d&&d.p&&(!u||i&4)&&le(d,m,t,t[2],u?ne(m,t[2],i,null):re(t[2]),null)},i(t){u||(B(a.$$.fragment,t),B(d,t),u=!0)},o(t){I(a.$$.fragment,t),I(d,t),u=!1},d(t){n&&n.d(t),_(s),t&&_(l),N(a,t),t&&_(r),t&&_(c),d&&d.d(t)}}}"navigator"in globalThis||(globalThis.navigator={languages:[]});function ve(o,e,s){let l,a;ie(o,ce,u=>s(1,a=u));let{$$slots:r={},$$scope:c}=e;return o.$$set=u=>{"$$scope"in u&&s(2,c=u.$$scope)},o.$$.update=()=>{var u;o.$$.dirty&2&&s(0,l={...a.data.seo,title:[(u=a.data.seo)==null?void 0:u.title,"svelte-fluent"].filter(Boolean).join(" | ")})},[l,a,c,r]}class we extends j{constructor(e){super(),q(this,e,ve,me,P,{})}}export{we as default};
