import{f as A,a as N}from"./CZhPJN7P.js";import"./fmIzKGyH.js";import{p as $,f as G,c as l,g as n,aj as g,r as o,s as c,a as w,ak as B,aa as R,t as S,al as L,am as E}from"./2vs6DXrE.js";import{a as k,r as _,b as z}from"./BEXohVfh.js";import{b}from"./c1NpXhft.js";import{p as f,s as H}from"./tWdpedPK.js";import{F as j,a as q,i as P,c as I,L as x,E as J}from"./agI0I6vi.js";var K=A("<strong><!></strong> <p><!></p>",1);function M(m,s){$(s,!0);let d=f(s,"userName",3,"Anna"),h=f(s,"userGender",3,"female"),D=f(s,"photoCount",3,3);const a=`
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
`,p=new j("en");p.addResource(new q(a)),P(()=>I([p]));var y=K(),e=G(y),C=l(e);{let r=g(()=>({userName:d()}));x(C,{id:"hello-user",get args(){return n(r)}})}o(e);var t=c(e,2),i=l(t);{let r=g(()=>({userName:d(),userGender:h(),photoCount:D()}));x(i,{id:"shared-photos",get args(){return n(r)}})}o(t),N(m,y),w()}const O=`<pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4" tabindex="0"><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
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
<span class="line"></span></code></pre>`;var Q=A('<dl><dt><label for="frontpage-username">userName</label></dt> <dd><input id="frontpage-username" type="text"/></dd> <dt><label for="frontpage-usergender">userGender</label></dt> <dd><select id="frontpage-usergender"><option>male</option><option>female</option><option>unspecified</option></select></dd> <dt><label for="frontpage-photocount">photoCount</label></dt> <dd><input id="frontpage-photocount" type="range" min="1" max="9"/></dd></dl>');function ss(m){const s=B({userName:"Anna",userGender:"female",photoCount:3});{const d=D=>{var a=Q();k(a,"",{},{"--space":"var(--s-2)"});var p=c(l(a),2),y=l(p);_(y),o(p);var e=c(p,4),C=l(e);S(()=>{n(s),L(()=>{})});var t=l(C);t.value=t.__value="male";var i=c(t);i.value=i.__value="female";var r=c(i);r.value=r.__value="unspecified",o(C),o(e);var F=c(e,4),v=l(F);_(v),o(F),o(a),b(y,()=>n(s).userName,u=>E(s,n(s).userName=u)),z(C,()=>n(s).userGender,u=>E(s,n(s).userGender=u)),b(v,()=>n(s).photoCount,u=>E(s,n(s).photoCount=u)),N(D,a)};let h=R(()=>({"App.svelte":{code:O,html:!0}}));J(m,{get sources(){return n(h)},controls:d,children:(D,a)=>{M(D,H(()=>n(s)))},$$slots:{controls:!0,default:!0}})}}export{ss as F};
