import{c as E,a as f,b as _,l as k,t as v}from"./disclose-version._CMtWdZU.js";import{f as h,t as b,aP as F,s as c,c as r,r as i,g as m,af as g,p as L,a as z,at as w}from"./runtime.DtK2zpN_.js";import{h as A}from"./html.DMHn2RRG.js";import{R}from"./ReferenceLink.z58z6SZU.js";import{a as B,F as S,b as T,c as P,E as O}from"./Overlay.svelte_svelte_type_style_lang.CYeBO3us.js";import{i as N}from"./lifecycle.BvuTErMT.js";import{s as C}from"./render.UbafbFef.js";import{s as q}from"./slot.CDOK7MfQ.js";import{L as K}from"./Localized.Bjp9mzQ9.js";const U=`confirm = Please confirm the action.
  .ok     = Ok
  .cancel = Cancel
`,V=new B(U);function j(n,s){K(n,{get id(){return s.id},get args(){return s.args},children:(e,t)=>{let l=()=>t==null?void 0:t().text,o=()=>t==null?void 0:t().attrs;var d=E(),y=h(d);q(y,s,"default",{get text(){return l()},get attrs(){return o()}},p=>{var D=_();b(()=>C(D,l())),f(p,D)}),f(e,d)},$$slots:{default:!0}})}var G=()=>alert("OK clicked"),H=()=>alert("Cancel clicked"),I=v("<div> </div> <div><button> </button> <button> </button></div>",1);function J(n){j(n,{id:"confirm",children:F,$$slots:{default:(s,a)=>{const e=g(()=>a.text),t=g(()=>a.attrs);var l=I(),o=h(l),d=r(o,!0);i(o);var y=c(o,2),p=r(y);p.__click=[G];var D=r(p,!0);i(p);var u=c(p,2);u.__click=[H];var x=r(u,!0);i(u),i(y),b(()=>{C(d,m(e)),C(D,m(t).ok),C(x,m(t).cancel)}),f(s,l)}}})}k(["click"]);function M(n,s){L(s,!1);const a=new S("en");a.addResource(V),T(()=>P([a])),N(),J(n),z()}const Q=`<pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4" tabindex="0"><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#C586C0">	import</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">Localized</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#CE9178"> '@nubolab-ffwd/svelte-fluent/legacy'</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#4EC9B0">Localized</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"confirm"</span><span style="color:#569CD6"> let</span><span style="color:#D4D4D4">:</span><span style="color:#9CDCFE">text</span><span style="color:#569CD6"> let</span><span style="color:#D4D4D4">:</span><span style="color:#9CDCFE">attrs</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">	&#x3C;</span><span style="color:#569CD6">div</span><span style="color:#808080">></span><span style="color:#569CD6">{</span><span style="color:#9CDCFE">text</span><span style="color:#569CD6">}</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">	&#x3C;</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">		&#x3C;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> onclick</span><span style="color:#D4D4D4">=</span><span style="color:#569CD6">{</span><span style="color:#D4D4D4">() </span><span style="color:#569CD6">=></span><span style="color:#DCDCAA"> alert</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">'OK clicked'</span><span style="color:#D4D4D4">)</span><span style="color:#569CD6">}</span><span style="color:#808080">></span><span style="color:#569CD6">{</span><span style="color:#9CDCFE">attrs</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">ok</span><span style="color:#569CD6">}</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">button</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">		&#x3C;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> onclick</span><span style="color:#D4D4D4">=</span><span style="color:#569CD6">{</span><span style="color:#D4D4D4">() </span><span style="color:#569CD6">=></span><span style="color:#DCDCAA"> alert</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">'Cancel clicked'</span><span style="color:#D4D4D4">)</span><span style="color:#569CD6">}</span><span style="color:#808080">></span><span style="color:#569CD6">{</span><span style="color:#9CDCFE">attrs</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">cancel</span><span style="color:#569CD6">}</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">button</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">	&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#4EC9B0">Localized</span><span style="color:#808080">></span></span>
<span class="line"></span></code></pre>`,W=`<pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4" tabindex="0"><code><span class="line"><span style="color:#4EC9B0">confirm = </span><span style="color:#CE9178">Please confirm the action.</span></span>
<span class="line"><span style="color:#4EC9B0">  .ok     = </span><span style="color:#CE9178">Ok</span></span>
<span class="line"><span style="color:#4EC9B0">  .cancel = </span><span style="color:#CE9178">Cancel</span></span>
<span class="line"></span></code></pre>`;function X(n){O(n,{sources:{"Component.svelte":{code:Q,html:!0},"en.ftl":{code:W,html:!0}},children:(s,a)=>{M(s,{})},$$slots:{default:!0}})}const Y={title:"Localized (legacy)",menuTitle:"Localized"},{title:Z,menuTitle:rs}=Y;var $=v(`<h1 id="title"></h1> <p>The <code>Localized</code> component exported from <code>@nubolab-ffwd/svelte-fluent/legacy</code> is a wrapper around the
regular <!> component that allows you to use slots instead of snippets.</p> <!> <h2 id="props"><a href="#props">Props</a></h2> <div class="responsive-table"><table><thead><tr><th align="left">Name</th><th align="left">Type</th><th align="left">Default</th><th align="left">Description</th></tr></thead><tbody><tr><td align="left"><code>id</code></td><td align="left"><code>string</code></td><td align="left"><code>undefined</code></td><td align="left">Unique identifier for the translation</td></tr><tr><td align="left"><code>args</code></td><td align="left"><code>Record&lt;string, FluentVariable&gt;</code></td><td align="left"><code>undefined</code></td><td align="left">Arguments for interpolation</td></tr></tbody></table></div> <h2 id="slots--slot-props"><a href="#slots--slot-props">Slots & Slot props</a></h2> <p>Slots are provided for backwards compatibility. New code should opt to use snippets.</p> <div class="responsive-table"><table><thead><tr><th align="left">Name</th><th align="left">Prop</th><th align="left">Type</th><th align="left">Description</th></tr></thead><tbody><tr><td align="left"><code>default</code></td><td align="left"><code>text</code></td><td align="left"><code>string</code></td><td align="left">Translated message</td></tr><tr><td align="left"><code>default</code></td><td align="left"><code>attrs</code></td><td align="left"><code>Record&lt;string, string&gt;</code></td><td align="left">Attributes of the translation</td></tr></tbody></table></div> <h2 id="example"><a href="#example">Example</a></h2> <!>`,1);function is(n){var s=$(),a=h(s);a.textContent=Z;var e=c(a,2),t=c(r(e),5);R(t,{name:"Localized"}),w(),i(e);var l=c(e,2);A(l,()=>`<pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4" tabindex="0"><code><span class="line"><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> &#123; </span><span style="color:#9CDCFE">Localized</span><span style="color:#D4D4D4"> &#125; </span><span style="color:#C586C0">from</span><span style="color:#CE9178"> '@nubolab-ffwd/svelte-fluent/legacy'</span><span style="color:#D4D4D4">;</span></span></code></pre>`);var o=c(l,14);X(o),f(n,s)}export{is as _,Y as m};
