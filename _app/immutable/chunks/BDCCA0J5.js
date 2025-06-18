import{f as A,a as N}from"./_FrICFHI.js";import"./05FzgfEL.js";import{p as G,f as w,c as o,g as n,ah as g,r as l,s as r,a as $,ab as B,a6 as R,t as S,ai as L,aj as E}from"./Nwy7US0f.js";import{a as z,r as _,b as k}from"./UjuiqGJ-.js";import{b}from"./DVuV8nYE.js";import{p as f,s as H}from"./S62Zl4GQ.js";import{F as j,a as q,i as P,c as I,L as x,E as J}from"./C329lRJq.js";var K=A("<strong><!></strong> <p><!></p>",1);function M(h,s){G(s,!0);let u=f(s,"userName",3,"Anna"),F=f(s,"userGender",3,"female"),c=f(s,"photoCount",3,3);const a=`
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
`,p=new j("en");p.addResource(new q(a)),P(()=>I([p]));var D=K(),e=w(D),y=o(e);const C=g(()=>({userName:u()}));x(y,{id:"hello-user",get args(){return n(C)}}),l(e);var t=r(e,2),d=o(t);const m=g(()=>({userName:u(),userGender:F(),photoCount:c()}));x(d,{id:"shared-photos",get args(){return n(m)}}),l(t),N(h,D),$()}const O=`<pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4" tabindex="0"><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#C586C0">	import</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">FluentBundle</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">FluentResource</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#CE9178"> '@fluent/bundle'</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#C586C0">	import</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">createSvelteFluent</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">initFluentContext</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">Localized</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#CE9178"> '@nubolab-ffwd/svelte-fluent'</span><span style="color:#D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6">	let</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">userName</span><span style="color:#D4D4D4"> = </span><span style="color:#CE9178">'Anna'</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">userGender</span><span style="color:#D4D4D4"> = </span><span style="color:#CE9178">'female'</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">photoCount</span><span style="color:#D4D4D4"> = </span><span style="color:#B5CEA8">3</span><span style="color:#D4D4D4"> } = $</span><span style="color:#DCDCAA">props</span><span style="color:#D4D4D4">();</span></span>
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
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA">	initFluentContext</span><span style="color:#D4D4D4">(() </span><span style="color:#569CD6">=></span><span style="color:#DCDCAA"> createSvelteFluent</span><span style="color:#D4D4D4">([</span><span style="color:#9CDCFE">bundle</span><span style="color:#D4D4D4">]));</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">strong</span><span style="color:#808080">>&#x3C;</span><span style="color:#4EC9B0">Localized</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"hello-user"</span><span style="color:#9CDCFE"> args</span><span style="color:#D4D4D4">=</span><span style="color:#569CD6">{</span><span style="color:#D4D4D4">{ </span><span style="color:#9CDCFE">userName</span><span style="color:#D4D4D4"> }</span><span style="color:#569CD6">}</span><span style="color:#808080"> />&#x3C;/</span><span style="color:#569CD6">strong</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">	&#x3C;</span><span style="color:#4EC9B0">Localized</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"shared-photos"</span><span style="color:#9CDCFE"> args</span><span style="color:#D4D4D4">=</span><span style="color:#569CD6">{</span><span style="color:#D4D4D4">{ </span><span style="color:#9CDCFE">userName</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">userGender</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">photoCount</span><span style="color:#D4D4D4"> }</span><span style="color:#569CD6">}</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"></span></code></pre>`;var Q=A('<dl><dt><label for="frontpage-username">userName</label></dt> <dd><input id="frontpage-username" type="text"/></dd> <dt><label for="frontpage-usergender">userGender</label></dt> <dd><select id="frontpage-usergender"><option>male</option><option>female</option><option>unspecified</option></select></dd> <dt><label for="frontpage-photocount">photoCount</label></dt> <dd><input id="frontpage-photocount" type="range" min="1" max="9"/></dd></dl>');function ss(h){const s=B({userName:"Anna",userGender:"female",photoCount:3}),u=R(()=>({"App.svelte":{code:O,html:!0}}));J(h,{get sources(){return n(u)},controls:c=>{var a=Q();z(a,"",{},{"--space":"var(--s-2)"});var p=r(o(a),2),D=o(p);_(D),l(p);var e=r(p,4),y=o(e);S(()=>{n(s),L(()=>{})});var C=o(y);C.value=C.__value="male";var t=r(C);t.value=t.__value="female";var d=r(t);d.value=d.__value="unspecified",l(y),l(e);var m=r(e,4),v=o(m);_(v),l(m),l(a),b(D,()=>n(s).userName,i=>E(s,n(s).userName=i)),k(y,()=>n(s).userGender,i=>E(s,n(s).userGender=i)),b(v,()=>n(s).photoCount,i=>E(s,n(s).photoCount=i)),N(c,a)},children:(c,a)=>{M(c,H(()=>n(s)))},$$slots:{controls:!0,default:!0}})}export{ss as F};
