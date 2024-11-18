import{a as c,t as i,c as S}from"./disclose-version.-a0Zl78y.js";import"./legacy.D0ooBJ0f.js";import{e as L}from"./escaping.CsChSfdw.js";import{n as R,e as M,m as P,J as B,aQ as j,p as C,a as b,c as m,f as w,r as y,g as d,o as U,s as h,ar as z,at as I,au as q}from"./runtime.29gPcexE.js";import{g as H,a as E,F as k,b as N,c as O,E as A}from"./Overlay.svelte_svelte_type_style_lang.QxTejIs_.js";import{i as V}from"./lifecycle.vAh_PPwF.js";import{i as X}from"./if.1rXs_DPP.js";import{s as Y}from"./snippet.CVTLhLTf.js";import{r as J}from"./attributes.CfvU-2ip.js";import{b as Q}from"./input.BOVVVhD8.js";import{p as $,s as W}from"./props.DzI5-uLN.js";function Z(t,e,n){R(()=>{var a=M(()=>e(t,n==null?void 0:n())||{});if(n&&(a!=null&&a.update)){var o=!1,r={};P(()=>{var s=n();B(s),o&&j(r,s)&&(r=s,a.update(s))}),o=!0}if(a!=null&&a.destroy)return()=>a.destroy()})}const G=/<|&#?\w+;/,K={"http://www.w3.org/1999/xhtml":["em","strong","small","s","cite","q","dfn","abbr","data","time","code","var","samp","kbd","sub","sup","i","b","u","mark","bdi","bdo","span","br","wbr"]},ee={"http://www.w3.org/1999/xhtml":{global:["title","aria-label","aria-valuetext"],a:["download"],area:["download","alt"],input:["alt","placeholder"],menuitem:["label"],menu:["label"],optgroup:["label"],option:["label"],track:["label"],img:["alt"],textarea:["placeholder"],th:["abbr"]},"http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul":{global:["accesskey","aria-label","aria-valuetext","label","title","tooltiptext"],description:["value"],key:["key","keycode"],label:["value"],textbox:["placeholder","value"]}};function te(t,e){const{value:n}=e;if(typeof n=="string")if(t.localName==="title"&&t.namespaceURI==="http://www.w3.org/1999/xhtml")t.textContent=n;else if(!G.test(n))t.textContent=n;else{const a=t.ownerDocument.createElementNS("http://www.w3.org/1999/xhtml","template");a.innerHTML=n,ae(a.content,t)}_(e,t)}function ae(t,e){for(const n of t.childNodes)if(n.nodeType!==n.TEXT_NODE){if(n.hasAttribute("data-l10n-name")){const a=se(e,n);t.replaceChild(a,n);continue}if(le(n)){const a=oe(n);t.replaceChild(a,n);continue}console.warn(`An element of forbidden type "${n.localName}" was found in the translation. Only safe text-level elements and elements with data-l10n-name are allowed.`),t.replaceChild(D(n),n)}e.textContent="",e.appendChild(t)}function ne(t,e){if(!t)return!1;for(let n of t)if(n.name===e)return!0;return!1}function _(t,e){const n=e.hasAttribute("data-l10n-attrs")?e.getAttribute("data-l10n-attrs").split(",").map(a=>a.trim()):null;for(const a of Array.from(e.attributes))g(a.name,e,n)&&!ne(t.attributes,a.name)&&e.removeAttribute(a.name);if(t.attributes)for(const a of Array.from(t.attributes))g(a.name,e,n)&&e.getAttribute(a.name)!==a.value&&e.setAttribute(a.name,a.value)}function se(t,e){const n=e.getAttribute("data-l10n-name"),a=t.querySelector(`[data-l10n-name="${n}"]`);if(!a)return console.warn(`An element named "${n}" wasn't found in the source.`),D(e);if(a.localName!==e.localName)return console.warn(`An element named "${n}" was found in the translation but its type ${e.localName} didn't match the element found in the source (${a.localName}).`),D(e);t.removeChild(a);const o=a.cloneNode(!1);return T(e,o)}function oe(t){const e=t.ownerDocument.createElement(t.localName);return T(t,e)}function D(t){return t.ownerDocument.createTextNode(t.textContent)}function le(t){const e=K[t.namespaceURI];return e&&e.includes(t.localName)}function g(t,e,n=null){if(n&&n.includes(t))return!0;const a=ee[e.namespaceURI];if(!a)return!1;const o=t.toLowerCase(),r=e.localName;if(a.global.includes(o))return!0;if(!a[r])return!1;if(a[r].includes(o))return!0;if(e.namespaceURI==="http://www.w3.org/1999/xhtml"&&r==="input"&&o==="value"){const s=e.type.toLowerCase();if(s==="submit"||s==="button"||s==="reset")return!0}return!1}function T(t,e){return e.textContent=t.textContent,_(t,e),e}var re=i('<div class="svelte-1igvztv"><!></div>');function F(t,e){C(e,!0);const{getTranslation:n}=H(),a=(s,p)=>{let l=s;function u(x){if(x){const f=s.cloneNode(!0);te(f,x),l!=null&&l.parentNode&&l.parentNode.replaceChild(f,l),l=f}}u(p);const v=new MutationObserver(()=>{u(p)});return v.observe(s,{attributes:!0,characterData:!0,childList:!0,subtree:!0}),{update:u,destroy:()=>{v.disconnect(),s&&(l!=null&&l.parentNode)&&l.parentNode.replaceChild(s,l)}}};var o=re(),r=m(o);X(r,()=>e.children,s=>{var p=S(),l=w(p);Y(l,()=>e.children),c(s,p)}),y(o),Z(o,(s,p)=>a(s,p),()=>n(e.id,e.args,!0)),c(t,o),b()}const pe=`info = Read the <a data-l10n-name="link">documentation</a> for more information.
`,ce=new E(pe);var ie=i('<a data-l10n-name="link" href="https://example.com/"></a>');function de(t){F(t,{id:"info",children:(e,n)=>{var a=ie();c(e,a)},$$slots:{default:!0}})}function ue(t,e){C(e,!1);const n=new k("en");n.addResource(ce),N(()=>O([n])),V(),de(t),b()}const fe=`<pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4" tabindex="0"><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#C586C0">	import</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">Overlay</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#CE9178"> '@nubolab-ffwd/svelte-fluent'</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#4EC9B0">Overlay</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"info"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">	&#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> data-l10n-name</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"link"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://example.com/"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">		&#x3C;!-- text from FTL file gets inserted here --></span></span>
<span class="line"><span style="color:#808080">	&#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#4EC9B0">Overlay</span><span style="color:#808080">></span></span>
<span class="line"></span></code></pre>`,me=`<pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4" tabindex="0"><code><span class="line"><span style="color:#4EC9B0">info = </span><span style="color:#CE9178">Read the &#x3C;a data-l10n-name="link">documentation&#x3C;/a> for more information.</span></span>
<span class="line"></span></code></pre>`;function ye(t){A(t,{sources:{"Component.svelte":{code:fe,html:!0},"en.ftl":{code:me,html:!0}},children:(e,n)=>{ue(e,{})},$$slots:{default:!0}})}const he=`info =
  You can download "{ $productName }" by clicking
  on the <strong>Download</strong> button or read
  the <a data-l10n-name='release-notes'>release notes</a> to learn more.
`,De=new E(he);var Ce=i('<a data-l10n-name="release-notes" href="https://example.com/" target="_blank" rel="noreferrer"></a>');function be(t,e){let n=$(e,"productName",3,"Example Product");var a=U(()=>({productName:n()}));F(t,{id:"info",get args(){return d(a)},children:(o,r)=>{var s=Ce();c(o,s)},$$slots:{default:!0}})}function ve(t,e){C(e,!0);let n=$(e,"productName",3,"Example Product");const a=new k("en");a.addResource(De),N(()=>O([a])),be(t,{get productName(){return n()}}),b()}const xe=`<pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4" tabindex="0"><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#C586C0">	import</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">Overlay</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#CE9178"> '@nubolab-ffwd/svelte-fluent'</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#569CD6">	let</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">productName</span><span style="color:#D4D4D4"> = </span><span style="color:#CE9178">'Example Product'</span><span style="color:#D4D4D4"> } = $</span><span style="color:#DCDCAA">props</span><span style="color:#D4D4D4">();</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#4EC9B0">Overlay</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"info"</span><span style="color:#9CDCFE"> args</span><span style="color:#D4D4D4">=</span><span style="color:#569CD6">{</span><span style="color:#D4D4D4">{ </span><span style="color:#9CDCFE">productName</span><span style="color:#D4D4D4"> }</span><span style="color:#569CD6">}</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">	&#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> data-l10n-name</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"release-notes"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"https://example.com/"</span><span style="color:#9CDCFE"> target</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"_blank"</span><span style="color:#9CDCFE"> rel</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"noreferrer"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">		&#x3C;!-- text from FTL file gets inserted here --></span></span>
<span class="line"><span style="color:#808080">	&#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#4EC9B0">Overlay</span><span style="color:#808080">></span></span>
<span class="line"></span></code></pre>`,ge=`<pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4" tabindex="0"><code><span class="line"><span style="color:#4EC9B0">info =</span></span>
<span class="line"><span style="color:#CE9178">  You can download "</span><span style="color:#569CD6">{</span><span style="color:#9CDCFE"> $productName </span><span style="color:#569CD6">}</span><span style="color:#CE9178">" by clicking</span></span>
<span class="line"><span style="color:#CE9178">  on the &#x3C;strong>Download&#x3C;/strong> button or read</span></span>
<span class="line"><span style="color:#CE9178">  the &#x3C;a data-l10n-name='release-notes'>release notes&#x3C;/a> to learn more.</span></span>
<span class="line"></span></code></pre>`;var we=i('<dl><dt><label for="overlay-dynamic-text-product-name">productName</label></dt> <dd><input id="overlay-dynamic-text-product-name"></dd></dl>');function Ee(t){const e=z({productName:"Example Product"});A(t,{sources:{"Component.svelte":{code:xe,html:!0},"en.ftl":{code:ge,html:!0}},controls:a=>{var o=we(),r=h(m(o),2),s=m(r);J(s),y(r),y(o),Q(s,()=>d(e).productName,p=>I(e,d(e).productName=p)),c(a,o)},children:(a,o)=>{ve(a,W(()=>d(e)))},$$slots:{controls:!0,default:!0}})}const ke={title:"Overlay (experimental)",menuTitle:"Overlay"},{title:Ne,menuTitle:je}=ke;var Oe=i(`<h1 id="title">${L(Ne)}</h1> <p>The experimental Overlay component uses <a href="https://github.com/projectfluent/fluent.js/wiki/DOM-Overlays" rel="noopener noreferrer" target="_blank">fluent.js DOM Overlays</a> to render translation messages that contain HTML markup.</p> <p>DOM overlays provide a safe mechanism for translators to use text-level markup.
They also allow developers to provide functional elements that can be used in translations.</p> <p>Please check the <a href="https://github.com/projectfluent/fluent.js/wiki/DOM-Overlays" rel="noopener noreferrer" target="_blank">fluent.js documentation for DOM Overlays</a> if you want to learn more.</p> <p>Due to the way DOM Overlays are currently implemented in <code>svelte-fluent</code> there are some additional limitations
to the <a href="https://github.com/projectfluent/fluent.js/wiki/DOM-Overlays#limitations" rel="noopener noreferrer" target="_blank">limitations listed in the @fluent/dom wiki</a>:</p> <ul><li>Updates to <code>&lt;Overlay/></code> component props and children cause a high overhead and should be minimized</li> <li>Svelte actions (<code>&lt;tag use:someaction/></code>) won’t work correctly for children of the <code>&lt;Overlay/></code> component</li> <li>Svelte transitions/animations (<code>&lt;tag transition:fade /></code>) won’t work correctly for children of the <code>&lt;Overlay/></code> component</li> <li>Svelte bindings (<code>&lt;tag bind:clientWidth={something} /></code>) won’t work correctly for children of the <code>&lt;Overlay/></code> component</li> <li>Event handlers (<code>&lt;tag onclick={handleClick} /></code>) bound on children of the <code>&lt;Overlay/></code> component will not fire</li></ul> <h2 id="snippets"><a href="#snippets">Snippets</a></h2> <div class="responsive-table"><table><thead><tr><th align="left">Name</th><th align="left">Type</th><th align="left">Description</th></tr></thead><tbody><tr><td align="left"><code>children</code></td><td align="left"><code>Snippet</code></td><td align="left">Defines the markup the Overlay is applied upon</td></tr></tbody></table></div> <h2 id="static-text-example"><a href="#static-text-example">Static text example</a></h2> <!> <h2 id="dynamic-text-with-variables-example"><a href="#dynamic-text-with-variables-example">Dynamic text with variables example</a></h2> <!> <h2 id="props"><a href="#props">Props</a></h2> <div class="responsive-table"><table><thead><tr><th align="left">Name</th><th align="left">Type</th><th align="left">Default</th><th align="left">Description</th></tr></thead><tbody><tr><td align="left"><code>id</code></td><td align="left"><code>string</code></td><td align="left"><code>undefined</code></td><td align="left">Unique identifier for the translation</td></tr><tr><td align="left"><code>args</code></td><td align="left"><code>Record&lt;string, FluentVariable></code></td><td align="left"><code>undefined</code></td><td align="left">Arguments for interpolation</td></tr></tbody></table></div>`,1);function Ue(t){var e=Oe(),n=w(e),a=h(n,18);ye(a);var o=h(a,4);Ee(o),q(4),c(t,e)}export{Ue as _,ke as m};
