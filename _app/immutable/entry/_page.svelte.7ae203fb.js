import{S as ee,i as te,s as re,y as x,z as B,A as O,g as k,d as U,B as q,k as i,a as I,l as d,m as f,h as l,c as z,b as J,q as L,r as A,n as h,R as pe,p as ce,J as s,T as Q,U as ie,V as Z,W as he,X as me,Y as _e,H as fe}from"../chunks/index.77053508.js";import{F as ve,a as ge,b as $e,L as de,E as be}from"../chunks/Overlay.svelte_svelte_type_style_lang.6e75d531.js";import{L as Ee}from"../chunks/logo.4a03fccf.js";import{b as Ne}from"../chunks/paths.e6e7cb25.js";function we(c){let e,r,t,o,a,p;return r=new de({props:{id:"hello-user",args:{userName:c[0]}}}),a=new de({props:{id:"shared-photos",args:{userName:c[0],userGender:c[1],photoCount:c[2]}}}),{c(){e=i("strong"),x(r.$$.fragment),t=I(),o=i("p"),x(a.$$.fragment)},l(n){e=d(n,"STRONG",{});var u=f(e);B(r.$$.fragment,u),u.forEach(l),t=z(n),o=d(n,"P",{});var _=f(o);B(a.$$.fragment,_),_.forEach(l)},m(n,u){J(n,e,u),O(r,e,null),J(n,t,u),J(n,o,u),O(a,o,null),p=!0},p(n,u){const _={};u&1&&(_.args={userName:n[0]}),r.$set(_);const g={};u&7&&(g.args={userName:n[0],userGender:n[1],photoCount:n[2]}),a.$set(g)},i(n){p||(k(r.$$.fragment,n),k(a.$$.fragment,n),p=!0)},o(n){U(r.$$.fragment,n),U(a.$$.fragment,n),p=!1},d(n){n&&l(e),q(r),n&&l(t),n&&l(o),q(a)}}}function Ce(c){let e,r;return e=new ve({props:{bundles:[c[3]],$$slots:{default:[we]},$$scope:{ctx:c}}}),{c(){x(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,o){O(e,t,o),r=!0},p(t,[o]){const a={};o&39&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){U(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function Ge(c,e,r){let{userName:t="Anna"}=e,{userGender:o="female"}=e,{photoCount:a=3}=e;const p=`
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
`;function Le(c){let e,r,t,o,a,p,n,u,_,g,$,C,G,b,V,D,N,S,T,w,y,F,m,P,H;return{c(){e=i("dl"),r=i("dt"),t=i("label"),o=L("userName"),a=i("dd"),p=i("input"),n=i("dt"),u=i("label"),_=L("userGender"),g=i("dd"),$=i("select"),C=i("option"),G=L("male"),b=i("option"),V=L("female"),D=i("option"),N=L("unspecified"),S=I(),T=i("dt"),w=i("label"),y=L("photoCount"),F=i("dd"),m=i("input"),this.h()},l(v){e=d(v,"DL",{slot:!0});var E=f(e);r=d(E,"DT",{});var W=f(r);t=d(W,"LABEL",{for:!0});var X=f(t);o=A(X,"userName"),X.forEach(l),W.forEach(l),a=d(E,"DD",{});var R=f(a);p=d(R,"INPUT",{id:!0,type:!0}),R.forEach(l),n=d(E,"DT",{});var Y=f(n);u=d(Y,"LABEL",{for:!0});var j=f(u);_=A(j,"userGender"),j.forEach(l),Y.forEach(l),g=d(E,"DD",{});var M=f(g);$=d(M,"SELECT",{id:!0});var K=f($);C=d(K,"OPTION",{});var ne=f(C);G=A(ne,"male"),ne.forEach(l),b=d(K,"OPTION",{});var se=f(b);V=A(se,"female"),se.forEach(l),D=d(K,"OPTION",{});var ae=f(D);N=A(ae,"unspecified"),ae.forEach(l),K.forEach(l),S=z(M),M.forEach(l),T=d(E,"DT",{});var oe=f(T);w=d(oe,"LABEL",{for:!0});var le=f(w);y=A(le,"photoCount"),le.forEach(l),oe.forEach(l),F=d(E,"DD",{});var ue=f(F);m=d(ue,"INPUT",{id:!0,type:!0,min:!0,max:!0}),ue.forEach(l),E.forEach(l),this.h()},h(){h(t,"for","frontpage-username"),h(p,"id","frontpage-username"),h(p,"type","text"),h(u,"for","frontpage-usergender"),C.__value="male",C.value=C.__value,b.__value="female",b.value=b.__value,D.__value="unspecified",D.value=D.__value,h($,"id","frontpage-usergender"),c[0].userGender===void 0&&pe(()=>c[2].call($)),h(w,"for","frontpage-photocount"),h(m,"id","frontpage-photocount"),h(m,"type","range"),h(m,"min","1"),h(m,"max","9"),h(e,"slot","controls"),ce(e,"--space","var(--s-2)")},m(v,E){J(v,e,E),s(e,r),s(r,t),s(t,o),s(e,a),s(a,p),Q(p,c[0].userName),s(e,n),s(n,u),s(u,_),s(e,g),s(g,$),s($,C),s(C,G),s($,b),s(b,V),s($,D),s(D,N),ie($,c[0].userGender),s(g,S),s(e,T),s(T,w),s(w,y),s(e,F),s(F,m),Q(m,c[0].photoCount),P||(H=[Z(p,"input",c[1]),Z($,"change",c[2]),Z(m,"change",c[3]),Z(m,"input",c[3])],P=!0)},p(v,E){E&1&&p.value!==v[0].userName&&Q(p,v[0].userName),E&1&&ie($,v[0].userGender),E&1&&Q(m,v[0].photoCount)},d(v){v&&l(e),P=!1,he(H)}}}function Ae(c){let e,r;return e=new be({props:{sources:{"App.svelte":ye},component:De,componentArgs:c[0],$$slots:{controls:[Le]},$$scope:{ctx:c}}}),{c(){x(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,o){O(e,t,o),r=!0},p(t,[o]){const a={};o&1&&(a.componentArgs=t[0]),o&17&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){U(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function Fe(c,e,r){const t={userName:"Anna",userGender:"female",photoCount:3};function o(){t.userName=this.value,r(0,t)}function a(){t.userGender=me(this),r(0,t)}function p(){t.photoCount=_e(this.value),r(0,t)}return[t,o,a,p]}class Pe extends ee{constructor(e){super(),te(this,e,Fe,Ae,re,{})}}function Te(c){let e,r,t,o,a,p,n,u,_,g,$,C,G,b,V,D,N,S,T,w,y,F;return y=new Ee({}),{c(){e=i("div"),r=i("div"),t=i("div"),o=i("h1"),a=L("svelte-fluent"),p=I(),n=i("p"),u=L("The expressive Svelte localisation library"),_=I(),g=i("p"),$=L("Describe translations with Mozilla's natural-sounding Fluent syntax"),C=I(),G=i("div"),b=i("a"),V=L("Get started"),D=I(),N=i("a"),S=L("View on GitHub"),T=I(),w=i("div"),x(y.$$.fragment),this.h()},l(m){e=d(m,"DIV",{class:!0});var P=f(e);r=d(P,"DIV",{class:!0});var H=f(r);t=d(H,"DIV",{});var v=f(t);o=d(v,"H1",{class:!0});var E=f(o);a=A(E,"svelte-fluent"),E.forEach(l),p=z(v),n=d(v,"P",{class:!0});var W=f(n);u=A(W,"The expressive Svelte localisation library"),W.forEach(l),_=z(v),g=d(v,"P",{class:!0});var X=f(g);$=A(X,"Describe translations with Mozilla's natural-sounding Fluent syntax"),X.forEach(l),v.forEach(l),C=z(H),G=d(H,"DIV",{class:!0});var R=f(G);b=d(R,"A",{class:!0,href:!0});var Y=f(b);V=A(Y,"Get started"),Y.forEach(l),D=z(R),N=d(R,"A",{class:!0,href:!0,target:!0,rel:!0});var j=f(N);S=A(j,"View on GitHub"),j.forEach(l),R.forEach(l),H.forEach(l),T=z(P),w=d(P,"DIV",{class:!0});var M=f(w);B(y.$$.fragment,M),M.forEach(l),P.forEach(l),this.h()},h(){h(o,"class","svelte-1t022y6"),h(n,"class","text svelte-1t022y6"),h(g,"class","tagline svelte-1t022y6"),h(b,"class","button primary"),h(b,"href",Ne+"/docs/getting-started"),h(N,"class","button"),h(N,"href","https://github.com/nubolab-ffwd/svelte-fluent"),h(N,"target","_blank"),h(N,"rel","noopener noreferrer"),h(G,"class","buttons svelte-1t022y6"),h(r,"class","stack"),h(w,"class","logo-wrapper svelte-1t022y6"),h(e,"class","hero with-sidebar right wrap-reverse svelte-1t022y6"),ce(e,"--content-min","50%")},m(m,P){J(m,e,P),s(e,r),s(r,t),s(t,o),s(o,a),s(t,p),s(t,n),s(n,u),s(t,_),s(t,g),s(g,$),s(r,C),s(r,G),s(G,b),s(b,V),s(G,D),s(G,N),s(N,S),s(e,T),s(e,w),O(y,w,null),F=!0},p:fe,i(m){F||(k(y.$$.fragment,m),F=!0)},o(m){U(y.$$.fragment,m),F=!1},d(m){m&&l(e),q(y)}}}class Ie extends ee{constructor(e){super(),te(this,e,null,Te,re,{})}}function ze(c){let e,r,t,o,a,p;return t=new Ie({}),a=new Pe({}),{c(){e=i("div"),r=i("div"),x(t.$$.fragment),o=I(),x(a.$$.fragment),this.h()},l(n){e=d(n,"DIV",{class:!0});var u=f(e);r=d(u,"DIV",{class:!0});var _=f(r);B(t.$$.fragment,_),o=z(_),B(a.$$.fragment,_),_.forEach(l),u.forEach(l),this.h()},h(){h(r,"class","stack"),h(e,"class","content center with-gutters svelte-39mgo9")},m(n,u){J(n,e,u),s(e,r),O(t,r,null),s(r,o),O(a,r,null),p=!0},p:fe,i(n){p||(k(t.$$.fragment,n),k(a.$$.fragment,n),p=!0)},o(n){U(t.$$.fragment,n),U(a.$$.fragment,n),p=!1},d(n){n&&l(e),q(t),q(a)}}}class xe extends ee{constructor(e){super(),te(this,e,null,ze,re,{})}}export{xe as default};
