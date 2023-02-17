import{S as ee,i as te,s as re,x as O,y as R,z as B,f as k,t as M,A as q,k as i,a as T,l as d,m as f,h as l,c as z,b as X,q as A,r as F,n as m,X as pe,p as ce,M as s,$ as Q,Y as ie,Z as W,E as me,_ as he,a0 as _e,C as fe}from"../../chunks/index-d7ccb192.js";import{F as ve,a as ge,b as $e,L as de,E as be}from"../../chunks/Overlay.svelte_svelte_type_style_lang-1a01065c.js";import{L as Ee}from"../../chunks/logo-e9919c70.js";import{b as Ne}from"../../chunks/paths-26fdc0a1.js";function we(c){let e,r,t,o,a,p;return r=new de({props:{id:"hello-user",args:{userName:c[0]}}}),a=new de({props:{id:"shared-photos",args:{userName:c[0],userGender:c[1],photoCount:c[2]}}}),{c(){e=i("strong"),O(r.$$.fragment),t=T(),o=i("p"),O(a.$$.fragment)},l(n){e=d(n,"STRONG",{});var u=f(e);R(r.$$.fragment,u),u.forEach(l),t=z(n),o=d(n,"P",{});var _=f(o);R(a.$$.fragment,_),_.forEach(l)},m(n,u){X(n,e,u),B(r,e,null),X(n,t,u),X(n,o,u),B(a,o,null),p=!0},p(n,u){const _={};u&1&&(_.args={userName:n[0]}),r.$set(_);const g={};u&7&&(g.args={userName:n[0],userGender:n[1],photoCount:n[2]}),a.$set(g)},i(n){p||(k(r.$$.fragment,n),k(a.$$.fragment,n),p=!0)},o(n){M(r.$$.fragment,n),M(a.$$.fragment,n),p=!1},d(n){n&&l(e),q(r),n&&l(t),n&&l(o),q(a)}}}function Ce(c){let e,r;return e=new ve({props:{bundles:[c[3]],$$slots:{default:[we]},$$scope:{ctx:c}}}),{c(){O(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,o){B(e,t,o),r=!0},p(t,[o]){const a={};o&39&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){M(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function Ge(c,e,r){let{userName:t="Anna"}=e,{userGender:o="female"}=e,{photoCount:a=3}=e;const p=`
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
`,n=new ge("en");return n.addResource(new $e(p)),c.$$set=u=>{"userName"in u&&r(0,t=u.userName),"userGender"in u&&r(1,o=u.userGender),"photoCount"in u&&r(2,a=u.photoCount)},[t,o,a,n]}class De extends ee{constructor(e){super(),te(this,e,Ge,Ce,re,{userName:0,userGender:1,photoCount:2})}}const Le=`<script>
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
`;function Ae(c){let e,r,t,o,a,p,n,u,_,g,$,C,G,b,S,D,N,V,I,w,L,P,h,y,x;return{c(){e=i("dl"),r=i("dt"),t=i("label"),o=A("userName"),a=i("dd"),p=i("input"),n=i("dt"),u=i("label"),_=A("userGender"),g=i("dd"),$=i("select"),C=i("option"),G=A("male"),b=i("option"),S=A("female"),D=i("option"),N=A("unspecified"),V=T(),I=i("dt"),w=i("label"),L=A("photoCount"),P=i("dd"),h=i("input"),this.h()},l(v){e=d(v,"DL",{slot:!0});var E=f(e);r=d(E,"DT",{});var Y=f(r);t=d(Y,"LABEL",{for:!0});var Z=f(t);o=F(Z,"userName"),Z.forEach(l),Y.forEach(l),a=d(E,"DD",{});var H=f(a);p=d(H,"INPUT",{id:!0,type:!0}),H.forEach(l),n=d(E,"DT",{});var j=f(n);u=d(j,"LABEL",{for:!0});var J=f(u);_=F(J,"userGender"),J.forEach(l),j.forEach(l),g=d(E,"DD",{});var U=f(g);$=d(U,"SELECT",{id:!0});var K=f($);C=d(K,"OPTION",{});var ne=f(C);G=F(ne,"male"),ne.forEach(l),b=d(K,"OPTION",{});var se=f(b);S=F(se,"female"),se.forEach(l),D=d(K,"OPTION",{});var ae=f(D);N=F(ae,"unspecified"),ae.forEach(l),K.forEach(l),V=z(U),U.forEach(l),I=d(E,"DT",{});var oe=f(I);w=d(oe,"LABEL",{for:!0});var le=f(w);L=F(le,"photoCount"),le.forEach(l),oe.forEach(l),P=d(E,"DD",{});var ue=f(P);h=d(ue,"INPUT",{id:!0,type:!0,min:!0,max:!0}),ue.forEach(l),E.forEach(l),this.h()},h(){m(t,"for","frontpage-username"),m(p,"id","frontpage-username"),m(p,"type","text"),m(u,"for","frontpage-usergender"),C.__value="male",C.value=C.__value,b.__value="female",b.value=b.__value,D.__value="unspecified",D.value=D.__value,m($,"id","frontpage-usergender"),c[0].userGender===void 0&&pe(()=>c[2].call($)),m(w,"for","frontpage-photocount"),m(h,"id","frontpage-photocount"),m(h,"type","range"),m(h,"min","1"),m(h,"max","9"),m(e,"slot","controls"),ce(e,"--space","var(--s-2)")},m(v,E){X(v,e,E),s(e,r),s(r,t),s(t,o),s(e,a),s(a,p),Q(p,c[0].userName),s(e,n),s(n,u),s(u,_),s(e,g),s(g,$),s($,C),s(C,G),s($,b),s(b,S),s($,D),s(D,N),ie($,c[0].userGender),s(g,V),s(e,I),s(I,w),s(w,L),s(e,P),s(P,h),Q(h,c[0].photoCount),y||(x=[W(p,"input",c[1]),W($,"change",c[2]),W(h,"change",c[3]),W(h,"input",c[3])],y=!0)},p(v,E){E&1&&p.value!==v[0].userName&&Q(p,v[0].userName),E&1&&ie($,v[0].userGender),E&1&&Q(h,v[0].photoCount)},d(v){v&&l(e),y=!1,me(x)}}}function Fe(c){let e,r;return e=new be({props:{sources:{"App.svelte":Le},component:De,componentArgs:c[0],$$slots:{controls:[Ae]},$$scope:{ctx:c}}}),{c(){O(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,o){B(e,t,o),r=!0},p(t,[o]){const a={};o&1&&(a.componentArgs=t[0]),o&17&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){M(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function Pe(c,e,r){const t={userName:"Anna",userGender:"female",photoCount:3};function o(){t.userName=this.value,r(0,t)}function a(){t.userGender=he(this),r(0,t)}function p(){t.photoCount=_e(this.value),r(0,t)}return[t,o,a,p]}class ye extends ee{constructor(e){super(),te(this,e,Pe,Fe,re,{})}}function Ie(c){let e,r,t,o,a,p,n,u,_,g,$,C,G,b,S,D,N,V,I,w,L,P;return L=new Ee({}),{c(){e=i("div"),r=i("div"),t=i("div"),o=i("h1"),a=A("svelte-fluent"),p=T(),n=i("p"),u=A("The expressive Svelte localisation library"),_=T(),g=i("p"),$=A("Describe translations with Mozilla's natural-sounding Fluent syntax"),C=T(),G=i("div"),b=i("a"),S=A("Get started"),D=T(),N=i("a"),V=A("View on GitHub"),I=T(),w=i("div"),O(L.$$.fragment),this.h()},l(h){e=d(h,"DIV",{class:!0});var y=f(e);r=d(y,"DIV",{class:!0});var x=f(r);t=d(x,"DIV",{});var v=f(t);o=d(v,"H1",{class:!0});var E=f(o);a=F(E,"svelte-fluent"),E.forEach(l),p=z(v),n=d(v,"P",{class:!0});var Y=f(n);u=F(Y,"The expressive Svelte localisation library"),Y.forEach(l),_=z(v),g=d(v,"P",{class:!0});var Z=f(g);$=F(Z,"Describe translations with Mozilla's natural-sounding Fluent syntax"),Z.forEach(l),v.forEach(l),C=z(x),G=d(x,"DIV",{class:!0});var H=f(G);b=d(H,"A",{class:!0,href:!0});var j=f(b);S=F(j,"Get started"),j.forEach(l),D=z(H),N=d(H,"A",{class:!0,href:!0,target:!0,rel:!0});var J=f(N);V=F(J,"View on GitHub"),J.forEach(l),H.forEach(l),x.forEach(l),I=z(y),w=d(y,"DIV",{class:!0});var U=f(w);R(L.$$.fragment,U),U.forEach(l),y.forEach(l),this.h()},h(){m(o,"class","svelte-tboccm"),m(n,"class","text svelte-tboccm"),m(g,"class","tagline svelte-tboccm"),m(b,"class","button primary"),m(b,"href",Ne+"/docs/getting-started"),m(N,"class","button"),m(N,"href","https://github.com/nubolab-ffwd/svelte-fluent"),m(N,"target","_blank"),m(N,"rel","noopener noreferrer"),m(G,"class","buttons svelte-tboccm"),m(r,"class","stack"),m(w,"class","logo-wrapper svelte-tboccm"),m(e,"class","hero with-sidebar right wrap-reverse svelte-tboccm"),ce(e,"--content-min","50%")},m(h,y){X(h,e,y),s(e,r),s(r,t),s(t,o),s(o,a),s(t,p),s(t,n),s(n,u),s(t,_),s(t,g),s(g,$),s(r,C),s(r,G),s(G,b),s(b,S),s(G,D),s(G,N),s(N,V),s(e,I),s(e,w),B(L,w,null),P=!0},p:fe,i(h){P||(k(L.$$.fragment,h),P=!0)},o(h){M(L.$$.fragment,h),P=!1},d(h){h&&l(e),q(L)}}}class Te extends ee{constructor(e){super(),te(this,e,null,Ie,re,{})}}function ze(c){let e,r,t,o,a,p;return t=new Te({}),a=new ye({}),{c(){e=i("div"),r=i("div"),O(t.$$.fragment),o=T(),O(a.$$.fragment),this.h()},l(n){e=d(n,"DIV",{class:!0});var u=f(e);r=d(u,"DIV",{class:!0});var _=f(r);R(t.$$.fragment,_),o=z(_),R(a.$$.fragment,_),_.forEach(l),u.forEach(l),this.h()},h(){m(r,"class","stack"),m(e,"class","content center with-gutters svelte-39mgo9")},m(n,u){X(n,e,u),s(e,r),B(t,r,null),s(r,o),B(a,r,null),p=!0},p:fe,i(n){p||(k(t.$$.fragment,n),k(a.$$.fragment,n),p=!0)},o(n){M(t.$$.fragment,n),M(a.$$.fragment,n),p=!1},d(n){n&&l(e),q(t),q(a)}}}class Oe extends ee{constructor(e){super(),te(this,e,null,ze,re,{})}}export{Oe as default};
