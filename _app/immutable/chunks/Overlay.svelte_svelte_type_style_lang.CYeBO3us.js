import{a as F,t as K,c as ke}from"./disclose-version._CMtWdZU.js";import{U as Ue,x as Pe,aD as Te,h as D,G as V,e as ze,i as Be,S as Ne,H as je,F as oe,I as W,B as P,C as Oe,y as Ce,D as Ke,aE as X,am as He,V as le,aF as ne,aG as fe,aH as ae,aI as Ze,aj as Ge,Z as ce,aJ as Ve,R as We,aK as Xe,A as qe,M as Je,P as Ye,aL as Qe,J as et,p as tt,t as q,a as rt,s as J,c as C,g as z,r as L,n as Le,f as nt,aM as at,aN as it}from"./runtime.DtK2zpN_.js";import{s as de}from"./render.UbafbFef.js";import{i as Y}from"./if.DQa5rJGM.js";import{h as st}from"./html.DMHn2RRG.js";import{s as ve}from"./snippet.BJwAomHM.js";let Q=null;function ut(r,e){return e}function ot(r,e,t,n){for(var i=[],s=e.length,l=0;l<s;l++)Ve(e[l].e,i,!0);var h=s>0&&i.length===0&&t!==null;if(h){var w=t.parentNode;We(w),w.append(t),n.clear(),M(r,e[0].prev,e[s-1].next)}Xe(i,()=>{for(var _=0;_<s;_++){var d=e[_];h||(n.delete(d.k),M(r,d.prev,d.next)),qe(d.e,!h)}})}function lt(r,e,t,n,i,s=null){var l=r,h={flags:e,items:new Map,first:null},w=(e&Te)!==0;if(w){var _=r;l=D?V(Je(_)):_.appendChild(Ue())}D&&ze();var d=null,f=!1;Pe(()=>{var p=t(),c=Be(p)?p:p==null?[]:Ne(p),E=c.length;if(f&&E===0)return;f=E===0;let y=!1;if(D){var S=l.data===je;S!==(E===0)&&(l=oe(),V(l),W(!1),y=!0)}if(D){for(var b=null,g,o=0;o<E;o++){if(P.nodeType===8&&P.data===Ye){l=P,y=!0,W(!1);break}var v=c[o],N=n(v,o);g=Me(P,h,b,null,v,N,o,i,e),h.items.set(N,g),b=g}E>0&&V(oe())}D||ft(c,h,l,i,e,n),s!==null&&(E===0?d?Oe(d):d=Ce(()=>s(l)):d!==null&&Ke(d,()=>{d=null})),y&&W(!0),t()}),D&&(l=P)}function ft(r,e,t,n,i,s){var O,R,ie,se;var l=(i&Qe)!==0,h=(i&(ne|ae))!==0,w=r.length,_=e.items,d=e.first,f=d,p,c=null,E,y=[],S=[],b,g,o,v;if(l)for(v=0;v<w;v+=1)b=r[v],g=s(b,v),o=_.get(g),o!==void 0&&((O=o.a)==null||O.measure(),(E??(E=new Set)).add(o));for(v=0;v<w;v+=1){if(b=r[v],g=s(b,v),o=_.get(g),o===void 0){var N=f?f.e.nodes_start:t;c=Me(N,e,c,c===null?e.first:c.next,b,g,v,n,i),_.set(g,c),y=[],S=[],f=c.next;continue}if(h&&ct(o,b,v,i),o.e.f&X&&(Oe(o.e),l&&((R=o.a)==null||R.unfix(),(E??(E=new Set)).delete(o))),o!==f){if(p!==void 0&&p.has(o)){if(y.length<S.length){var $=S[0],A;c=$.prev;var U=y[0],a=y[y.length-1];for(A=0;A<y.length;A+=1)Ee(y[A],$,t);for(A=0;A<S.length;A+=1)p.delete(S[A]);M(e,U.prev,a.next),M(e,c,U),M(e,a,$),f=$,c=a,v-=1,y=[],S=[]}else p.delete(o),Ee(o,f,t),M(e,o.prev,o.next),M(e,o,c===null?e.first:c.next),M(e,c,o),c=o;continue}for(y=[],S=[];f!==null&&f.k!==g;)f.e.f&X||(p??(p=new Set)).add(f),S.push(f),f=f.next;if(f===null)continue;o=f}y.push(o),c=o,f=o.next}if(f!==null||p!==void 0){for(var u=p===void 0?[]:Ne(p);f!==null;)f.e.f&X||u.push(f),f=f.next;var m=u.length;if(m>0){var I=i&Te&&w===0?t:null;if(l){for(v=0;v<m;v+=1)(ie=u[v].a)==null||ie.measure();for(v=0;v<m;v+=1)(se=u[v].a)==null||se.fix()}ot(e,u,I,_)}}l&&He(()=>{var ue;if(E!==void 0)for(o of E)(ue=o.a)==null||ue.apply()}),le.first=e.first&&e.first.e,le.last=c&&c.e}function ct(r,e,t,n){n&ne&&fe(r.v,e),n&ae?fe(r.i,t):r.i=t}function Me(r,e,t,n,i,s,l,h,w){var _=Q;try{var d=(w&ne)!==0,f=(w&Ze)===0,p=d?f?Ge(i):ce(i):i,c=w&ae?ce(l):l,E={i:c,v:p,k:s,a:null,e:null,prev:t,next:n};return Q=E,E.e=Ce(()=>h(r,p,c),D),E.e.prev=t&&t.e,E.e.next=n&&n.e,t===null?e.first=E:(t.next=E,t.e.next=E.e),n!==null&&(n.prev=E,n.e.prev=E.e),E}finally{Q=_}}function Ee(r,e,t){for(var n=r.next?r.next.e.nodes_start:t,i=e?e.e.nodes_start:t,s=r.e.nodes_start;s!==n;){var l=et(s);i.before(s),s=l}}function M(r,e,t){e===null?r.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function dt(r,e,t){if(t){if(r.classList.contains(e))return;r.classList.add(e)}else{if(!r.classList.contains(e))return;r.classList.remove(e)}}var vt=K('<span class="filepath"> </span>'),Et=K('<pre class="box"><code> </code></pre>'),ht=K('<div class="code-block stack"><!> <!></div>'),gt=K('<div class="controls svelte-17jcsbz"><!></div>'),mt=K('<div class="stack" aria-label="Code example"><!> <div>Result:</div> <div class="stack"><div class="box rendered svelte-17jcsbz"><!></div> <!></div></div>');function Qt(r,e){tt(e,!0);let t=Le(()=>Object.fromEntries(Object.entries(e.sources).map(([_,d])=>[_,typeof d=="string"?{code:d,html:!1}:d])??[]));var n=mt(),i=C(n);lt(i,17,()=>Object.entries(z(t)),ut,(_,d,f)=>{let p=()=>z(d)[0],c=()=>z(d)[1];var E=ht(),y=C(E);Y(y,()=>f!==0,b=>{var g=vt(),o=C(g,!0);L(g),q(()=>de(o,p())),F(b,g)});var S=J(y,2);Y(S,()=>c().html,b=>{var g=ke(),o=nt(g);st(o,()=>c().code),F(b,g)},b=>{var g=Et(),o=C(g),v=C(o,!0);L(o),L(g),q(()=>de(v,c().code)),F(b,g)}),L(E),F(_,E)});var s=J(i,4),l=C(s),h=C(l);ve(h,()=>e.children),L(l);var w=J(l,2);Y(w,()=>e.controls,_=>{var d=gt(),f=C(d);ve(f,()=>e.controls),L(d),F(_,d)}),L(s),L(n),q(()=>dt(s,"box",!!e.controls)),F(r,n),rt()}class G{constructor(e){this.value=e}valueOf(){return this.value}}class x extends G{constructor(e="???"){super(e)}toString(e){return`{${this.value}}`}}class T extends G{constructor(e,t={}){super(e),this.opts=t}toString(e){try{return e.memoizeIntlObject(Intl.NumberFormat,this.opts).format(this.value)}catch(t){return e.reportError(t),this.value.toString(10)}}}class B extends G{constructor(e,t={}){super(e),this.opts=t}toString(e){try{return e.memoizeIntlObject(Intl.DateTimeFormat,this.opts).format(this.value)}catch(t){return e.reportError(t),new Date(this.value).toISOString()}}}const he=100,_t="⁨",pt="⁩";function wt(r,e,t){if(t===e||t instanceof T&&e instanceof T&&t.value===e.value)return!0;if(e instanceof T&&typeof t=="string"){let n=r.memoizeIntlObject(Intl.PluralRules,e.opts).select(e.value);if(t===n)return!0}return!1}function ge(r,e,t){return e[t]?k(r,e[t].value):(r.reportError(new RangeError("No default")),new x)}function re(r,e){const t=[],n=Object.create(null);for(const i of e)i.type==="narg"?n[i.name]=j(r,i.value):t.push(j(r,i));return{positional:t,named:n}}function j(r,e){switch(e.type){case"str":return e.value;case"num":return new T(e.value,{minimumFractionDigits:e.precision});case"var":return yt(r,e);case"mesg":return bt(r,e);case"term":return xt(r,e);case"func":return St(r,e);case"select":return Rt(r,e);default:return new x}}function yt(r,{name:e}){let t;if(r.params)if(Object.prototype.hasOwnProperty.call(r.params,e))t=r.params[e];else return new x(`$${e}`);else if(r.args&&Object.prototype.hasOwnProperty.call(r.args,e))t=r.args[e];else return r.reportError(new ReferenceError(`Unknown variable: $${e}`)),new x(`$${e}`);if(t instanceof G)return t;switch(typeof t){case"string":return t;case"number":return new T(t);case"object":if(t instanceof Date)return new B(t.getTime());default:return r.reportError(new TypeError(`Variable type not supported: $${e}, ${typeof t}`)),new x(`$${e}`)}}function bt(r,{name:e,attr:t}){const n=r.bundle._messages.get(e);if(!n)return r.reportError(new ReferenceError(`Unknown message: ${e}`)),new x(e);if(t){const i=n.attributes[t];return i?k(r,i):(r.reportError(new ReferenceError(`Unknown attribute: ${t}`)),new x(`${e}.${t}`))}return n.value?k(r,n.value):(r.reportError(new ReferenceError(`No value: ${e}`)),new x(e))}function xt(r,{name:e,attr:t,args:n}){const i=`-${e}`,s=r.bundle._terms.get(i);if(!s)return r.reportError(new ReferenceError(`Unknown term: ${i}`)),new x(i);if(t){const h=s.attributes[t];if(h){r.params=re(r,n).named;const w=k(r,h);return r.params=null,w}return r.reportError(new ReferenceError(`Unknown attribute: ${t}`)),new x(`${i}.${t}`)}r.params=re(r,n).named;const l=k(r,s.value);return r.params=null,l}function St(r,{name:e,args:t}){let n=r.bundle._functions[e];if(!n)return r.reportError(new ReferenceError(`Unknown function: ${e}()`)),new x(`${e}()`);if(typeof n!="function")return r.reportError(new TypeError(`Function ${e}() is not callable`)),new x(`${e}()`);try{let i=re(r,t);return n(i.positional,i.named)}catch(i){return r.reportError(i),new x(`${e}()`)}}function Rt(r,{selector:e,variants:t,star:n}){let i=j(r,e);if(i instanceof x)return ge(r,t,n);for(const s of t){const l=j(r,s.key);if(wt(r,i,l))return k(r,s.value)}return ge(r,t,n)}function $e(r,e){if(r.dirty.has(e))return r.reportError(new RangeError("Cyclic reference")),new x;r.dirty.add(e);const t=[],n=r.bundle._useIsolating&&e.length>1;for(const i of e){if(typeof i=="string"){t.push(r.bundle._transform(i));continue}if(r.placeables++,r.placeables>he)throw r.dirty.delete(e),new RangeError(`Too many placeables expanded: ${r.placeables}, max allowed is ${he}`);n&&t.push(_t),t.push(j(r,i).toString(r)),n&&t.push(pt)}return r.dirty.delete(e),t.join("")}function k(r,e){return typeof e=="string"?r.bundle._transform(e):$e(r,e)}class At{constructor(e,t,n){this.dirty=new WeakSet,this.params=null,this.placeables=0,this.bundle=e,this.errors=t,this.args=n}reportError(e){if(!this.errors||!(e instanceof Error))throw e;this.errors.push(e)}memoizeIntlObject(e,t){let n=this.bundle._intls.get(e);n||(n={},this.bundle._intls.set(e,n));let i=JSON.stringify(t);return n[i]||(n[i]=new e(this.bundle.locales,t)),n[i]}}function Z(r,e){const t=Object.create(null);for(const[n,i]of Object.entries(r))e.includes(n)&&(t[n]=i.valueOf());return t}const me=["unitDisplay","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"];function It(r,e){let t=r[0];if(t instanceof x)return new x(`NUMBER(${t.valueOf()})`);if(t instanceof T)return new T(t.valueOf(),{...t.opts,...Z(e,me)});if(t instanceof B)return new T(t.valueOf(),{...Z(e,me)});throw new TypeError("Invalid argument to NUMBER")}const _e=["dateStyle","timeStyle","fractionalSecondDigits","dayPeriod","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName"];function Tt(r,e){let t=r[0];if(t instanceof x)return new x(`DATETIME(${t.valueOf()})`);if(t instanceof B)return new B(t.valueOf(),{...t.opts,...Z(e,_e)});if(t instanceof T)return new B(t.valueOf(),{...Z(e,_e)});throw new TypeError("Invalid argument to DATETIME")}const pe=new Map;function Nt(r){const e=Array.isArray(r)?r.join(" "):r;let t=pe.get(e);return t===void 0&&(t=new Map,pe.set(e,t)),t}class er{constructor(e,{functions:t,useIsolating:n=!0,transform:i=s=>s}={}){this._terms=new Map,this._messages=new Map,this.locales=Array.isArray(e)?e:[e],this._functions={NUMBER:It,DATETIME:Tt,...t},this._useIsolating=n,this._transform=i,this._intls=Nt(e)}hasMessage(e){return this._messages.has(e)}getMessage(e){return this._messages.get(e)}addResource(e,{allowOverrides:t=!1}={}){const n=[];for(let i=0;i<e.body.length;i++){let s=e.body[i];if(s.id.startsWith("-")){if(t===!1&&this._terms.has(s.id)){n.push(new Error(`Attempt to override an existing term: "${s.id}"`));continue}this._terms.set(s.id,s)}else{if(t===!1&&this._messages.has(s.id)){n.push(new Error(`Attempt to override an existing message: "${s.id}"`));continue}this._messages.set(s.id,s)}}return n}formatPattern(e,t=null,n=null){if(typeof e=="string")return this._transform(e);let i=new At(this,n,t);try{return $e(i,e).toString(i)}catch(s){if(i.errors&&s instanceof Error)return i.errors.push(s),new x().toString(i);throw s}}}const ee=/^(-?[a-zA-Z][\w-]*) *= */gm,we=/\.([a-zA-Z][\w-]*) *= */y,Ot=/\*?\[/y,te=/(-?[0-9]+(?:\.([0-9]+))?)/y,Ct=/([a-zA-Z][\w-]*)/y,ye=/([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y,Lt=/^[A-Z][A-Z0-9_-]*$/,H=/([^{}\n\r]+)/y,Mt=/([^\\"\n\r]*)/y,be=/\\([\\"])/y,xe=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y,$t=/^\n+/,Se=/ +$/,Dt=/ *\r?\n/g,Ft=/( *)$/,kt=/{\s*/y,Re=/\s*}/y,Ut=/\[\s*/y,Pt=/\s*] */y,zt=/\s*\(\s*/y,Bt=/\s*->\s*/y,jt=/\s*:\s*/y,Kt=/\s*,?\s*/y,Ht=/\s+/y;class tr{constructor(e){this.body=[],ee.lastIndex=0;let t=0;for(;;){let a=ee.exec(e);if(a===null)break;t=ee.lastIndex;try{this.body.push(w(a[1]))}catch(u){if(u instanceof SyntaxError)continue;throw u}}function n(a){return a.lastIndex=t,a.test(e)}function i(a,u){if(e[t]===a)return t++,!0;if(u)throw new u(`Expected ${a}`);return!1}function s(a,u){if(n(a))return t=a.lastIndex,!0;if(u)throw new u(`Expected ${a.toString()}`);return!1}function l(a){a.lastIndex=t;let u=a.exec(e);if(u===null)throw new SyntaxError(`Expected ${a.toString()}`);return t=a.lastIndex,u}function h(a){return l(a)[1]}function w(a){let u=d(),m=_();if(u===null&&Object.keys(m).length===0)throw new SyntaxError("Expected message value or attributes");return{id:a,value:u,attributes:m}}function _(){let a=Object.create(null);for(;n(we);){let u=h(we),m=d();if(m===null)throw new SyntaxError("Expected attribute value");a[u]=m}return a}function d(){let a;if(n(H)&&(a=h(H)),e[t]==="{"||e[t]==="}")return f(a?[a]:[],1/0);let u=$();return u?a?f([a,u],u.length):(u.value=A(u.value,$t),f([u],u.length)):a?A(a,Se):null}function f(a=[],u){for(;;){if(n(H)){a.push(h(H));continue}if(e[t]==="{"){a.push(p());continue}if(e[t]==="}")throw new SyntaxError("Unbalanced closing brace");let R=$();if(R){a.push(R),u=Math.min(u,R.length);continue}break}let m=a.length-1,I=a[m];typeof I=="string"&&(a[m]=A(I,Se));let O=[];for(let R of a)R instanceof Ae&&(R=R.value.slice(0,R.value.length-u)),R&&O.push(R);return O}function p(){s(kt,SyntaxError);let a=c();if(s(Re))return a;if(s(Bt)){let u=S();return s(Re,SyntaxError),{type:"select",selector:a,...u}}throw new SyntaxError("Unclosed placeable")}function c(){if(e[t]==="{")return p();if(n(ye)){let[,a,u,m=null]=l(ye);if(a==="$")return{type:"var",name:u};if(s(zt)){let I=E();if(a==="-")return{type:"term",name:u,attr:m,args:I};if(Lt.test(u))return{type:"func",name:u,args:I};throw new SyntaxError("Function names must be all upper-case")}return a==="-"?{type:"term",name:u,attr:m,args:[]}:{type:"mesg",name:u,attr:m}}return g()}function E(){let a=[];for(;;){switch(e[t]){case")":return t++,a;case void 0:throw new SyntaxError("Unclosed argument list")}a.push(y()),s(Kt)}}function y(){let a=c();return a.type!=="mesg"?a:s(jt)?{type:"narg",name:a.name,value:g()}:a}function S(){let a=[],u=0,m;for(;n(Ot);){i("*")&&(m=u);let I=b(),O=d();if(O===null)throw new SyntaxError("Expected variant value");a[u++]={key:I,value:O}}if(u===0)return null;if(m===void 0)throw new SyntaxError("Expected default variant");return{variants:a,star:m}}function b(){s(Ut,SyntaxError);let a;return n(te)?a=o():a={type:"str",value:h(Ct)},s(Pt,SyntaxError),a}function g(){if(n(te))return o();if(e[t]==='"')return v();throw new SyntaxError("Invalid expression")}function o(){let[,a,u=""]=l(te),m=u.length;return{type:"num",value:parseFloat(a),precision:m}}function v(){i('"',SyntaxError);let a="";for(;;){if(a+=h(Mt),e[t]==="\\"){a+=N();continue}if(i('"'))return{type:"str",value:a};throw new SyntaxError("Unclosed string literal")}}function N(){if(n(be))return h(be);if(n(xe)){let[,a,u]=l(xe),m=parseInt(a||u,16);return m<=55295||57344<=m?String.fromCodePoint(m):"�"}throw new SyntaxError("Unknown escape sequence")}function $(){let a=t;switch(s(Ht),e[t]){case".":case"[":case"*":case"}":case void 0:return!1;case"{":return U(e.slice(a,t))}return e[t-1]===" "?U(e.slice(a,t)):!1}function A(a,u){return a.replace(u,"")}function U(a){let u=a.replace(Dt,`
`),m=Ft.exec(a)[1].length;return new Ae(u,m)}}}class Ae{constructor(e,t){this.value=e,this.length=t}}function Zt(r,e){return Array.isArray(e)?e.map(t=>Ie(r,t)):Ie(r,e)}function Ie(r,e){for(const t of r)if(t.hasMessage(e))return t;return null}function De(r,e,t,n=!0){var p,c,E,y,S,b,g,o;const[i,s]=e.split(".",2),l=Zt(r.bundles,i);if(l===null)return(c=(p=r.options).onError)==null||c.call(p,`Localization missing: "${e}"`),{value:e,attributes:{}};const h=l.getMessage(i);if(!h)return(y=(E=r.options).onError)==null||y.call(E,`Localization missing: "${e}"`),{value:e,attributes:{}};const w=s?h.attributes[s]:h.value;if(s&&w===null)return(b=(S=r.options).onError)==null||b.call(S,`Localization missing: "${e}"`),{value:e,attributes:{}};const _=[],d=w?l.formatPattern(w,t,_):"",f=n&&!s?Object.fromEntries(Object.entries(h.attributes||{}).map(([v,N])=>[v,l.formatPattern(N,t,_)])):{};for(const v of _)(o=(g=r.options).onError)==null||o.call(g,`Localization error in "${e}": ${v}`);return{value:d,attributes:f}}const Fe=Symbol("svelte-fluent");function rr(r){const e=Le(r);return at(Fe,{getTranslation:(...n)=>De(z(e),...n),public:{localize:(...n)=>z(e).localize(...n)}}).public}function Gt(){const r=it(Fe);if(!r)throw new Error("[svelte-fluent] FluentContext was not initialized");return r}function nr(){return Gt().public}function ar(r,e={}){return{bundles:r,options:e,localize(t,n){return De(this,t,n,!1).value}}}export{Qt as E,er as F,tr as a,rr as b,ar as c,nr as d,lt as e,T as f,Gt as g,x as h,ut as i,B as j,dt as t};
