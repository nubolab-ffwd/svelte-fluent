import{S as ee,i as te,s as re,x as O,y as R,z as B,f as k,t as M,A as q,k as i,a as T,l as d,m as f,h as l,c as z,b as X,q as L,r as A,n as h,X as pe,p as ce,M as s,$ as Q,Y as ie,Z as W,E as he,_ as me,a0 as _e,C as fe}from"../../chunks/index-d7ccb192.js";import{F as ve,a as ge,b as $e,L as de,E as be}from"../../chunks/Overlay.svelte_svelte_type_style_lang-1a01065c.js";import{L as Ee}from"../../chunks/logo-e9919c70.js";import{b as Ne}from"../../chunks/paths-26fdc0a1.js";function we(c){let e,r,t,o,a,p;return r=new de({props:{id:"hello-user",args:{userName:c[0]}}}),a=new de({props:{id:"shared-photos",args:{userName:c[0],userGender:c[1],photoCount:c[2]}}}),{c(){e=i("strong"),O(r.$$.fragment),t=T(),o=i("p"),O(a.$$.fragment)},l(n){e=d(n,"STRONG",{});var u=f(e);R(r.$$.fragment,u),u.forEach(l),t=z(n),o=d(n,"P",{});var _=f(o);R(a.$$.fragment,_),_.forEach(l)},m(n,u){X(n,e,u),B(r,e,null),X(n,t,u),X(n,o,u),B(a,o,null),p=!0},p(n,u){const _={};u&1&&(_.args={userName:n[0]}),r.$set(_);const g={};u&7&&(g.args={userName:n[0],userGender:n[1],photoCount:n[2]}),a.$set(g)},i(n){p||(k(r.$$.fragment,n),k(a.$$.fragment,n),p=!0)},o(n){M(r.$$.fragment,n),M(a.$$.fragment,n),p=!1},d(n){n&&l(e),q(r),n&&l(t),n&&l(o),q(a)}}}function Ce(c){let e,r;return e=new ve({props:{bundles:[c[3]],$$slots:{default:[we]},$$scope:{ctx:c}}}),{c(){O(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,o){B(e,t,o),r=!0},p(t,[o]){const a={};o&39&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){M(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function Ge(c,e,r){let{userName:t="Anna"}=e,{userGender:o="female"}=e,{photoCount:a=3}=e;const p=`
# Simple things are simple.
hello-user = Hello, {$userName}!

# Complex things are possible.
shared-photos =
    {$userName} {$photoCount ->
        [one] added a new photo
       *[other] added {$photoCount} new photos
    } to {$userGender ->
        [male] his stream
        [female] her stream
       *[other] their stream
    }.
`,n=new ge("en");return n.addResource(new $e(p)),c.$$set=u=>{"userName"in u&&r(0,t=u.userName),"userGender"in u&&r(1,o=u.userGender),"photoCount"in u&&r(2,a=u.photoCount)},[t,o,a,n]}class De extends ee{constructor(e){super(),te(this,e,Ge,Ce,re,{userName:0,userGender:1,photoCount:2})}}const ye=`<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent';

	export let userName = 'Anna';
	export let userGender = 'female';
	export let photoCount = 3;

	const translations = \`
# Simple things are simple.
hello-user = Hello, {$userName}!

# Complex things are possible.
shared-photos =
    {$userName} {$photoCount ->
        [one] added a new photo
       *[other] added {$photoCount} new photos
    } to {$userGender ->
        [male] his stream
        [female] her stream
       *[other] their stream
    }.
\`;
	const bundle = new FluentBundle('en');
	bundle.addResource(new FluentResource(translations));
<\/script>

<FluentProvider bundles={[bundle]}>
	<strong><Localized id="hello-user" args={{ userName }} /></strong>
	<p>
		<Localized id="shared-photos" args={{ userName, userGender, photoCount }} />
	</p>
</FluentProvider>
`;function Le(c){let e,r,t,o,a,p,n,u,_,g,$,C,G,b,S,D,N,V,I,w,y,F,m,P,x;return{c(){e=i("dl"),r=i("dt"),t=i("label"),o=L("userName"),a=i("dd"),p=i("input"),n=i("dt"),u=i("label"),_=L("userGender"),g=i("dd"),$=i("select"),C=i("option"),G=L("male"),b=i("option"),S=L("female"),D=i("option"),N=L("unspecified"),V=T(),I=i("dt"),w=i("label"),y=L("photoCount"),F=i("dd"),m=i("input"),this.h()},l(v){e=d(v,"DL",{slot:!0});var E=f(e);r=d(E,"DT",{});var Y=f(r);t=d(Y,"LABEL",{for:!0});var Z=f(t);o=A(Z,"userName"),Z.forEach(l),Y.forEach(l),a=d(E,"DD",{});var H=f(a);p=d(H,"INPUT",{id:!0,type:!0}),H.forEach(l),n=d(E,"DT",{});var j=f(n);u=d(j,"LABEL",{for:!0});var J=f(u);_=A(J,"userGender"),J.forEach(l),j.forEach(l),g=d(E,"DD",{});var U=f(g);$=d(U,"SELECT",{id:!0});var K=f($);C=d(K,"OPTION",{});var ne=f(C);G=A(ne,"male"),ne.forEach(l),b=d(K,"OPTION",{});var se=f(b);S=A(se,"female"),se.forEach(l),D=d(K,"OPTION",{});var ae=f(D);N=A(ae,"unspecified"),ae.forEach(l),K.forEach(l),V=z(U),U.forEach(l),I=d(E,"DT",{});var oe=f(I);w=d(oe,"LABEL",{for:!0});var le=f(w);y=A(le,"photoCount"),le.forEach(l),oe.forEach(l),F=d(E,"DD",{});var ue=f(F);m=d(ue,"INPUT",{id:!0,type:!0,min:!0,max:!0}),ue.forEach(l),E.forEach(l),this.h()},h(){h(t,"for","frontpage-username"),h(p,"id","frontpage-username"),h(p,"type","text"),h(u,"for","frontpage-usergender"),C.__value="male",C.value=C.__value,b.__value="female",b.value=b.__value,D.__value="unspecified",D.value=D.__value,h($,"id","frontpage-usergender"),c[0].userGender===void 0&&pe(()=>c[2].call($)),h(w,"for","frontpage-photocount"),h(m,"id","frontpage-photocount"),h(m,"type","range"),h(m,"min","1"),h(m,"max","9"),h(e,"slot","controls"),ce(e,"--space","var(--s-2)")},m(v,E){X(v,e,E),s(e,r),s(r,t),s(t,o),s(e,a),s(a,p),Q(p,c[0].userName),s(e,n),s(n,u),s(u,_),s(e,g),s(g,$),s($,C),s(C,G),s($,b),s(b,S),s($,D),s(D,N),ie($,c[0].userGender),s(g,V),s(e,I),s(I,w),s(w,y),s(e,F),s(F,m),Q(m,c[0].photoCount),P||(x=[W(p,"input",c[1]),W($,"change",c[2]),W(m,"change",c[3]),W(m,"input",c[3])],P=!0)},p(v,E){E&1&&p.value!==v[0].userName&&Q(p,v[0].userName),E&1&&ie($,v[0].userGender),E&1&&Q(m,v[0].photoCount)},d(v){v&&l(e),P=!1,he(x)}}}function Ae(c){let e,r;return e=new be({props:{sources:{"App.svelte":ye},component:De,componentArgs:c[0],$$slots:{controls:[Le]},$$scope:{ctx:c}}}),{c(){O(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,o){B(e,t,o),r=!0},p(t,[o]){const a={};o&1&&(a.componentArgs=t[0]),o&17&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){M(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function Fe(c,e,r){const t={userName:"Anna",userGender:"female",photoCount:3};function o(){t.userName=this.value,r(0,t)}function a(){t.userGender=me(this),r(0,t)}function p(){t.photoCount=_e(this.value),r(0,t)}return[t,o,a,p]}class Pe extends ee{constructor(e){super(),te(this,e,Fe,Ae,re,{})}}function Ie(c){let e,r,t,o,a,p,n,u,_,g,$,C,G,b,S,D,N,V,I,w,y,F;return y=new Ee({}),{c(){e=i("div"),r=i("div"),t=i("div"),o=i("h1"),a=L("svelte-fluent"),p=T(),n=i("p"),u=L("The expressive Svelte localisation library"),_=T(),g=i("p"),$=L("Describe translations with Mozilla's natural-sounding Fluent syntax"),C=T(),G=i("div"),b=i("a"),S=L("Get started"),D=T(),N=i("a"),V=L("View on GitHub"),I=T(),w=i("div"),O(y.$$.fragment),this.h()},l(m){e=d(m,"DIV",{class:!0});var P=f(e);r=d(P,"DIV",{class:!0});var x=f(r);t=d(x,"DIV",{});var v=f(t);o=d(v,"H1",{class:!0});var E=f(o);a=A(E,"svelte-fluent"),E.forEach(l),p=z(v),n=d(v,"P",{class:!0});var Y=f(n);u=A(Y,"The expressive Svelte localisation library"),Y.forEach(l),_=z(v),g=d(v,"P",{class:!0});var Z=f(g);$=A(Z,"Describe translations with Mozilla's natural-sounding Fluent syntax"),Z.forEach(l),v.forEach(l),C=z(x),G=d(x,"DIV",{class:!0});var H=f(G);b=d(H,"A",{class:!0,href:!0});var j=f(b);S=A(j,"Get started"),j.forEach(l),D=z(H),N=d(H,"A",{class:!0,href:!0,target:!0,rel:!0});var J=f(N);V=A(J,"View on GitHub"),J.forEach(l),H.forEach(l),x.forEach(l),I=z(P),w=d(P,"DIV",{class:!0});var U=f(w);R(y.$$.fragment,U),U.forEach(l),P.forEach(l),this.h()},h(){h(o,"class","svelte-1t022y6"),h(n,"class","text svelte-1t022y6"),h(g,"class","tagline svelte-1t022y6"),h(b,"class","button primary"),h(b,"href",Ne+"/docs/getting-started"),h(N,"class","button"),h(N,"href","https://github.com/nubolab-ffwd/svelte-fluent"),h(N,"target","_blank"),h(N,"rel","noopener noreferrer"),h(G,"class","buttons svelte-1t022y6"),h(r,"class","stack"),h(w,"class","logo-wrapper svelte-1t022y6"),h(e,"class","hero with-sidebar right wrap-reverse svelte-1t022y6"),ce(e,"--content-min","50%")},m(m,P){X(m,e,P),s(e,r),s(r,t),s(t,o),s(o,a),s(t,p),s(t,n),s(n,u),s(t,_),s(t,g),s(g,$),s(r,C),s(r,G),s(G,b),s(b,S),s(G,D),s(G,N),s(N,V),s(e,I),s(e,w),B(y,w,null),F=!0},p:fe,i(m){F||(k(y.$$.fragment,m),F=!0)},o(m){M(y.$$.fragment,m),F=!1},d(m){m&&l(e),q(y)}}}class Te extends ee{constructor(e){super(),te(this,e,null,Ie,re,{})}}function ze(c){let e,r,t,o,a,p;return t=new Te({}),a=new Pe({}),{c(){e=i("div"),r=i("div"),O(t.$$.fragment),o=T(),O(a.$$.fragment),this.h()},l(n){e=d(n,"DIV",{class:!0});var u=f(e);r=d(u,"DIV",{class:!0});var _=f(r);R(t.$$.fragment,_),o=z(_),R(a.$$.fragment,_),_.forEach(l),u.forEach(l),this.h()},h(){h(r,"class","stack"),h(e,"class","content center with-gutters svelte-39mgo9")},m(n,u){X(n,e,u),s(e,r),B(t,r,null),s(r,o),B(a,r,null),p=!0},p:fe,i(n){p||(k(t.$$.fragment,n),k(a.$$.fragment,n),p=!0)},o(n){M(t.$$.fragment,n),M(a.$$.fragment,n),p=!1},d(n){n&&l(e),q(t),q(a)}}}class Oe extends ee{constructor(e){super(),te(this,e,null,ze,re,{})}}export{Oe as default};
