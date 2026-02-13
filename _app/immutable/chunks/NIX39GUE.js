import{f as A,a as N}from"./CORrgv4F.js";import"./DvVmpcml.js";import{p as $,f as G,c as l,g as n,ae as g,r as o,s as c,a as w,af as B,X as R,ag as E}from"./C7J-w_O5.js";import{a as S,r as _,b as L}from"./0sS_j87q.js";import{b}from"./Dz3oe9qT.js";import{p as f,s as z}from"./DbDerpW9.js";import{F as k,a as H,i as q,c as P,L as x,E as X}from"./BfbjV0F0.js";var j=A("<strong><!></strong> <p><!></p>",1);function I(m,s){$(s,!0);let d=f(s,"userName",3,"Anna"),h=f(s,"userGender",3,"female"),D=f(s,"photoCount",3,3);const a=`
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
`,p=new k("en");p.addResource(new H(a)),q(()=>P([p]));var y=j(),e=G(y),C=l(e);{let r=g(()=>({userName:d()}));x(C,{id:"hello-user",get args(){return n(r)}})}o(e);var t=c(e,2),u=l(t);{let r=g(()=>({userName:d(),userGender:h(),photoCount:D()}));x(u,{id:"shared-photos",get args(){return n(r)}})}o(t),N(m,y),w()}const J=`<pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4" tabindex="0"><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
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
<span class="line"></span></code></pre>`;var K=A('<dl><dt><label for="frontpage-username">userName</label></dt> <dd><input id="frontpage-username" type="text"/></dd> <dt><label for="frontpage-usergender">userGender</label></dt> <dd><select id="frontpage-usergender"><option>male</option><option>female</option><option>unspecified</option></select></dd> <dt><label for="frontpage-photocount">photoCount</label></dt> <dd><input id="frontpage-photocount" type="range" min="1" max="9"/></dd></dl>');function Y(m){const s=B({userName:"Anna",userGender:"female",photoCount:3});{const d=D=>{var a=K();S(a,"",{},{"--space":"var(--s-2)"});var p=c(l(a),2),y=l(p);_(y),o(p);var e=c(p,4),C=l(e),t=l(C);t.value=t.__value="male";var u=c(t);u.value=u.__value="female";var r=c(u);r.value=r.__value="unspecified",o(C),o(e);var F=c(e,4),v=l(F);_(v),o(F),o(a),b(y,()=>n(s).userName,i=>E(s,n(s).userName=i)),L(C,()=>n(s).userGender,i=>E(s,n(s).userGender=i)),b(v,()=>n(s).photoCount,i=>E(s,n(s).photoCount=i)),N(D,a)};let h=R(()=>({"App.svelte":{code:J,html:!0}}));X(m,{get sources(){return n(h)},controls:d,children:(D,a)=>{I(D,z(()=>n(s)))},$$slots:{controls:!0,default:!0}})}}export{Y as F};
