import{a as x,t as A}from"./disclose-version.BIrqyZau.js";import"./legacy.DFkHwvgZ.js";import{p as N,f as G,g as n,s as t,a as w,c as l,r as o,o as v,t as $,aq as B,ar as f,as as R}from"./runtime.CIss1fFT.js";import{r as g}from"./attributes.DZglw02Y.js";import{s as S}from"./style.PwPRnE0L.js";import{b as _}from"./input.jtt30IpZ.js";import{b as L}from"./select.BSi8PyNM.js";import{p as F,s as z}from"./props.CXijni-r.js";import{F as k,a as H,b as q,c as P,E as j}from"./fluent.0q8MA7Xo.js";import{L as b}from"./Localized.Bnguoexj.js";var I=A("<strong><!></strong> <p><!></p>",1);function J(h,s){N(s,!0);let E=F(s,"userName",3,"Anna"),r=F(s,"userGender",3,"female"),a=F(s,"photoCount",3,3);const c=`
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
`,D=new k("en");D.addResource(new H(c)),q(()=>P([D]));var p=I(),e=G(p),y=l(e);const C=v(()=>({userName:E()}));b(y,{id:"hello-user",get args(){return n(C)}}),o(e);var i=t(e,2),d=l(i);const m=v(()=>({userName:E(),userGender:r(),photoCount:a()}));b(d,{id:"shared-photos",get args(){return n(m)}}),o(i),x(h,p),w()}const K=`<pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4" tabindex="0"><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
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
<span class="line"></span></code></pre>`;var M=A('<dl><dt><label for="frontpage-username">userName</label></dt> <dd><input id="frontpage-username" type="text"></dd> <dt><label for="frontpage-usergender">userGender</label></dt> <dd><select id="frontpage-usergender"><option>male</option><option>female</option><option>unspecified</option></select></dd> <dt><label for="frontpage-photocount">photoCount</label></dt> <dd><input id="frontpage-photocount" type="range" min="1" max="9"></dd></dl>');function ns(h){const s=B({userName:"Anna",userGender:"female",photoCount:3});j(h,{sources:{"App.svelte":{code:K,html:!0}},controls:r=>{var a=M();S(a,"--space","var(--s-2)");var c=t(l(a),2),D=l(c);g(D),o(c);var p=t(c,4),e=l(p);$(()=>{n(s),R(()=>{})});var y=l(e);y.value=(y.__value="male")==null?"":"male";var C=t(y);C.value=(C.__value="female")==null?"":"female";var i=t(C);i.value=(i.__value="unspecified")==null?"":"unspecified",o(e),o(p);var d=t(p,4),m=l(d);g(m),o(d),o(a),_(D,()=>n(s).userName,u=>f(s,n(s).userName=u)),L(e,()=>n(s).userGender,u=>f(s,n(s).userGender=u)),_(m,()=>n(s).photoCount,u=>f(s,n(s).photoCount=u)),x(r,a)},children:(r,a)=>{J(r,z(()=>n(s)))},$$slots:{controls:!0,default:!0}})}export{ns as E};
