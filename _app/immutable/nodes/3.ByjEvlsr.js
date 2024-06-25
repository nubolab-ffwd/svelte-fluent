import{s as R,e as u,a as T,c as d,b as E,f,g as z,i as k,S as x,v as g,Z as N,D as ee,w as X,h as i,_ as K,$ as B,r as se,a0 as ne,a1 as te,n as Y}from"../chunks/scheduler.BMc8JP4_.js";import{S as V,i as j,b as L,d as G,m as P,a as A,t as H,e as M}from"../chunks/index.CNWtZWm0.js";import{F as ae,a as le,b as oe,L as Q,E as re}from"../chunks/Overlay.svelte_svelte_type_style_lang.CjScpKtc.js";import{L as pe}from"../chunks/logo.B5LvHz18.js";import{b as ce}from"../chunks/paths.DtiyW7Ht.js";const ie=async()=>({seo:{title:"The expressive Svelte localization library",description:"The expressive Svelte localization library"}}),Ne=Object.freeze(Object.defineProperty({__proto__:null,load:ie},Symbol.toStringTag,{value:"Module"}));function ue(r){let e,s,n,l,t,c;return s=new Q({props:{id:"hello-user",args:{userName:r[0]}}}),t=new Q({props:{id:"shared-photos",args:{userName:r[0],userGender:r[1],photoCount:r[2]}}}),{c(){e=u("strong"),L(s.$$.fragment),n=T(),l=u("p"),L(t.$$.fragment)},l(o){e=d(o,"STRONG",{});var a=E(e);G(s.$$.fragment,a),a.forEach(f),n=z(o),l=d(o,"P",{});var p=E(l);G(t.$$.fragment,p),p.forEach(f)},m(o,a){k(o,e,a),P(s,e,null),k(o,n,a),k(o,l,a),P(t,l,null),c=!0},p(o,a){const p={};a&1&&(p.args={userName:o[0]}),s.$set(p);const D={};a&7&&(D.args={userName:o[0],userGender:o[1],photoCount:o[2]}),t.$set(D)},i(o){c||(A(s.$$.fragment,o),A(t.$$.fragment,o),c=!0)},o(o){H(s.$$.fragment,o),H(t.$$.fragment,o),c=!1},d(o){o&&(f(e),f(n),f(l)),M(s),M(t)}}}function de(r){let e,s;return e=new ae({props:{bundles:[r[3]],$$slots:{default:[ue]},$$scope:{ctx:r}}}),{c(){L(e.$$.fragment)},l(n){G(e.$$.fragment,n)},m(n,l){P(e,n,l),s=!0},p(n,[l]){const t={};l&39&&(t.$$scope={dirty:l,ctx:n}),e.$set(t)},i(n){s||(A(e.$$.fragment,n),s=!0)},o(n){H(e.$$.fragment,n),s=!1},d(n){M(e,n)}}}function De(r,e,s){let{userName:n="Anna"}=e,{userGender:l="female"}=e,{photoCount:t=3}=e;const c=`
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
`,o=new le("en");return o.addResource(new oe(c)),r.$$set=a=>{"userName"in a&&s(0,n=a.userName),"userGender"in a&&s(1,l=a.userGender),"photoCount"in a&&s(2,t=a.photoCount)},[n,l,t,o]}class Ce extends V{constructor(e){super(),j(this,e,De,de,R,{userName:0,userGender:1,photoCount:2})}}const fe=`<pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4" tabindex="0"><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#C586C0">	import</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">FluentBundle</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">FluentResource</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#CE9178"> '@fluent/bundle'</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#C586C0">	import</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">FluentProvider</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">Localized</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#CE9178"> '@nubolab-ffwd/svelte-fluent'</span><span style="color:#D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0">	export</span><span style="color:#569CD6"> let</span><span style="color:#9CDCFE"> userName</span><span style="color:#D4D4D4"> = </span><span style="color:#CE9178">'Anna'</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#C586C0">	export</span><span style="color:#569CD6"> let</span><span style="color:#9CDCFE"> userGender</span><span style="color:#D4D4D4"> = </span><span style="color:#CE9178">'female'</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#C586C0">	export</span><span style="color:#569CD6"> let</span><span style="color:#9CDCFE"> photoCount</span><span style="color:#D4D4D4"> = </span><span style="color:#B5CEA8">3</span><span style="color:#D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6">	const</span><span style="color:#4FC1FF"> translations</span><span style="color:#D4D4D4"> = </span><span style="color:#CE9178">\`</span></span>
<span class="line"><span style="color:#CE9178"># Simple things are simple.</span></span>
<span class="line"><span style="color:#CE9178">hello-user = Hello, {$userName}!</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178"># Complex things are possible.</span></span>
<span class="line"><span style="color:#CE9178">shared-photos =</span></span>
<span class="line"><span style="color:#CE9178">    {$userName} {$photoCount -></span></span>
<span class="line"><span style="color:#CE9178">        [one] added a new photo</span></span>
<span class="line"><span style="color:#CE9178">       *[other] added {$photoCount} new photos</span></span>
<span class="line"><span style="color:#CE9178">    } to {$userGender -></span></span>
<span class="line"><span style="color:#CE9178">        [male] his stream</span></span>
<span class="line"><span style="color:#CE9178">        [female] her stream</span></span>
<span class="line"><span style="color:#CE9178">       *[other] their stream</span></span>
<span class="line"><span style="color:#CE9178">    }.</span></span>
<span class="line"><span style="color:#CE9178">\`</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#569CD6">	const</span><span style="color:#4FC1FF"> bundle</span><span style="color:#D4D4D4"> = </span><span style="color:#569CD6">new</span><span style="color:#DCDCAA"> FluentBundle</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">'en'</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#9CDCFE">	bundle</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">addResource</span><span style="color:#D4D4D4">(</span><span style="color:#569CD6">new</span><span style="color:#DCDCAA"> FluentResource</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">translations</span><span style="color:#D4D4D4">));</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#4EC9B0">FluentProvider</span><span style="color:#9CDCFE"> bundles</span><span style="color:#D4D4D4">=</span><span style="color:#569CD6">{</span><span style="color:#D4D4D4">[</span><span style="color:#9CDCFE">bundle</span><span style="color:#D4D4D4">]</span><span style="color:#569CD6">}</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">	&#x3C;</span><span style="color:#569CD6">strong</span><span style="color:#808080">>&#x3C;</span><span style="color:#4EC9B0">Localized</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"hello-user"</span><span style="color:#9CDCFE"> args</span><span style="color:#D4D4D4">=</span><span style="color:#569CD6">{</span><span style="color:#D4D4D4">{ </span><span style="color:#9CDCFE">userName</span><span style="color:#D4D4D4"> }</span><span style="color:#569CD6">}</span><span style="color:#808080"> />&#x3C;/</span><span style="color:#569CD6">strong</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">	&#x3C;</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">		&#x3C;</span><span style="color:#4EC9B0">Localized</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"shared-photos"</span><span style="color:#9CDCFE"> args</span><span style="color:#D4D4D4">=</span><span style="color:#569CD6">{</span><span style="color:#D4D4D4">{ </span><span style="color:#9CDCFE">userName</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">userGender</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">photoCount</span><span style="color:#D4D4D4"> }</span><span style="color:#569CD6">}</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">	&#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#4EC9B0">FluentProvider</span><span style="color:#808080">></span></span>
<span class="line"></span></code></pre>`;function ye(r){let e,s,n='<label for="frontpage-username">userName</label>',l,t,c,o='<label for="frontpage-usergender">userGender</label>',a,p,D,F="male",v,S="female",C,w="unspecified",y,_,m='<label for="frontpage-photocount">photoCount</label>',I,$,q,W;return{c(){e=u("dl"),s=u("dt"),s.innerHTML=n,l=u("dd"),t=u("input"),c=u("dt"),c.innerHTML=o,a=u("dd"),p=u("select"),D=u("option"),D.textContent=F,v=u("option"),v.textContent=S,C=u("option"),C.textContent=w,y=T(),_=u("dt"),_.innerHTML=m,I=u("dd"),$=u("input"),this.h()},l(b){e=d(b,"DL",{slot:!0});var h=E(e);s=d(h,"DT",{"data-svelte-h":!0}),x(s)!=="svelte-1t6332q"&&(s.innerHTML=n),l=d(h,"DD",{});var Z=E(l);t=d(Z,"INPUT",{id:!0,type:!0}),Z.forEach(f),c=d(h,"DT",{"data-svelte-h":!0}),x(c)!=="svelte-v02afu"&&(c.innerHTML=o),a=d(h,"DD",{});var U=E(a);p=d(U,"SELECT",{id:!0});var O=E(p);D=d(O,"OPTION",{"data-svelte-h":!0}),x(D)!=="svelte-tijyma"&&(D.textContent=F),v=d(O,"OPTION",{"data-svelte-h":!0}),x(v)!=="svelte-manpx2"&&(v.textContent=S),C=d(O,"OPTION",{"data-svelte-h":!0}),x(C)!=="svelte-1jgizdc"&&(C.textContent=w),O.forEach(f),y=z(U),U.forEach(f),_=d(h,"DT",{"data-svelte-h":!0}),x(_)!=="svelte-wowr2a"&&(_.innerHTML=m),I=d(h,"DD",{});var J=E(I);$=d(J,"INPUT",{id:!0,type:!0,min:!0,max:!0}),J.forEach(f),h.forEach(f),this.h()},h(){g(t,"id","frontpage-username"),g(t,"type","text"),D.__value="male",N(D,D.__value),v.__value="female",N(v,v.__value),C.__value="unspecified",N(C,C.__value),g(p,"id","frontpage-usergender"),r[0].userGender===void 0&&ee(()=>r[2].call(p)),g($,"id","frontpage-photocount"),g($,"type","range"),g($,"min","1"),g($,"max","9"),g(e,"slot","controls"),X(e,"--space","var(--s-2)")},m(b,h){k(b,e,h),i(e,s),i(e,l),i(l,t),N(t,r[0].userName),i(e,c),i(e,a),i(a,p),i(p,D),i(p,v),i(p,C),K(p,r[0].userGender,!0),i(a,y),i(e,_),i(e,I),i(I,$),N($,r[0].photoCount),q||(W=[B(t,"input",r[1]),B(p,"change",r[2]),B($,"change",r[3]),B($,"input",r[3])],q=!0)},p(b,h){h&1&&t.value!==b[0].userName&&N(t,b[0].userName),h&1&&K(p,b[0].userGender),h&1&&N($,b[0].photoCount)},d(b){b&&f(e),q=!1,se(W)}}}function me(r){let e,s;return e=new re({props:{sources:{"App.svelte":{code:fe,html:!0}},component:Ce,componentArgs:r[0],$$slots:{controls:[ye]},$$scope:{ctx:r}}}),{c(){L(e.$$.fragment)},l(n){G(e.$$.fragment,n)},m(n,l){P(e,n,l),s=!0},p(n,[l]){const t={};l&1&&(t.componentArgs=n[0]),l&17&&(t.$$scope={dirty:l,ctx:n}),e.$set(t)},i(n){s||(A(e.$$.fragment,n),s=!0)},o(n){H(e.$$.fragment,n),s=!1},d(n){M(e,n)}}}function he(r,e,s){const n={userName:"Anna",userGender:"female",photoCount:3};function l(){n.userName=this.value,s(0,n)}function t(){n.userGender=ne(this),s(0,n)}function c(){n.photoCount=te(this.value),s(0,n)}return[n,l,t,c]}class ge extends V{constructor(e){super(),j(this,e,he,me,R,{})}}function ve(r){let e,s,n=`<div><h1 class="svelte-5co0od">svelte-fluent</h1> <p class="text svelte-5co0od">The expressive Svelte localization library</p> <p class="tagline svelte-5co0od">Describe translations with Mozilla&#39;s natural-sounding Fluent syntax</p></div> <div class="buttons svelte-5co0od"><a class="button primary" href="${ce}/docs/getting-started">Get started</a> <a class="button" href="https://github.com/nubolab-ffwd/svelte-fluent" target="_blank" rel="noopener noreferrer">View on GitHub</a></div>`,l,t,c,o;return c=new pe({}),{c(){e=u("div"),s=u("div"),s.innerHTML=n,l=T(),t=u("div"),L(c.$$.fragment),this.h()},l(a){e=d(a,"DIV",{class:!0});var p=E(e);s=d(p,"DIV",{class:!0,"data-svelte-h":!0}),x(s)!=="svelte-2h8omc"&&(s.innerHTML=n),l=z(p),t=d(p,"DIV",{class:!0});var D=E(t);G(c.$$.fragment,D),D.forEach(f),p.forEach(f),this.h()},h(){g(s,"class","stack"),g(t,"class","logo-wrapper svelte-5co0od"),g(e,"class","hero with-sidebar right wrap-reverse svelte-5co0od"),X(e,"--content-min","50%")},m(a,p){k(a,e,p),i(e,s),i(e,l),i(e,t),P(c,t,null),o=!0},p:Y,i(a){o||(A(c.$$.fragment,a),o=!0)},o(a){H(c.$$.fragment,a),o=!1},d(a){a&&f(e),M(c)}}}class _e extends V{constructor(e){super(),j(this,e,null,ve,R,{})}}function $e(r){let e,s,n,l,t,c=`With svelte-fluent, developers can focus on building the core functionality of their
			application while not standing in the way of translating it into multiple languages.`,o,a,p=`Fluent is a <a href="https://projectfluent.org/" target="_blank" rel="noopener noreferrer">localization system developed by Mozilla</a> to address the limitations of traditional localization systems. They designed it to make it easier
			to create translations of software interfaces and content and to support more complex language
			structures than traditional localization systems can handle.`,D,F,v=`The example below shows how you can use svelte-fluent and FTL, the format for describing
			translation resources used by Fluent, to represent complex natural language concepts such as
			gender, plurals, and others that are important to many languages but difficult to handle with
			traditional localization systems.`,S,C,w;return n=new _e({}),C=new ge({}),{c(){e=u("div"),s=u("div"),L(n.$$.fragment),l=T(),t=u("p"),t.textContent=c,o=T(),a=u("p"),a.innerHTML=p,D=T(),F=u("p"),F.textContent=v,S=T(),L(C.$$.fragment),this.h()},l(y){e=d(y,"DIV",{class:!0});var _=E(e);s=d(_,"DIV",{class:!0});var m=E(s);G(n.$$.fragment,m),l=z(m),t=d(m,"P",{"data-svelte-h":!0}),x(t)!=="svelte-1rkc3b7"&&(t.textContent=c),o=z(m),a=d(m,"P",{"data-svelte-h":!0}),x(a)!=="svelte-15tk"&&(a.innerHTML=p),D=z(m),F=d(m,"P",{"data-svelte-h":!0}),x(F)!=="svelte-80qzw0"&&(F.textContent=v),S=z(m),G(C.$$.fragment,m),m.forEach(f),_.forEach(f),this.h()},h(){g(s,"class","stack"),g(e,"class","content center with-gutters svelte-39mgo9")},m(y,_){k(y,e,_),i(e,s),P(n,s,null),i(s,l),i(s,t),i(s,o),i(s,a),i(s,D),i(s,F),i(s,S),P(C,s,null),w=!0},p:Y,i(y){w||(A(n.$$.fragment,y),A(C.$$.fragment,y),w=!0)},o(y){H(n.$$.fragment,y),H(C.$$.fragment,y),w=!1},d(y){y&&f(e),M(n),M(C)}}}class Te extends V{constructor(e){super(),j(this,e,null,$e,R,{})}}export{Te as component,Ne as universal};