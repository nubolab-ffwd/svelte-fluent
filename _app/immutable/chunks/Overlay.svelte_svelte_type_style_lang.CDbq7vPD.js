var Ze=Object.defineProperty;var Ge=(n,e,t)=>e in n?Ze(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ue=(n,e,t)=>(Ge(n,typeof e!="symbol"?e+"":e,t),t);import{s as Y,y as ce,e as T,a as K,c as O,b as $,g as V,S as Xe,f as y,v as D,a2 as fe,i as C,h as I,Y as qe,a3 as He,T as J,V as Q,W as ee,X as te,N as he,t as ne,d as re,j as se,H as Ye,l as de,m as Je,a4 as Qe,a5 as et,z as tt,a6 as nt,k as Be,a7 as rt}from"./scheduler.BMc8JP4_.js";import{S as ie,i as ae,b as me,d as st,m as ge,g as _e,t as L,e as Ee,c as pe,a as x}from"./index.CNWtZWm0.js";import{g as we,a as be}from"./spread.CgU5AtxT.js";import{d as ve,w as it}from"./index.BW80JnTU.js";function ye(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}const at=n=>({}),Se=n=>({});function Ae(n,e,t){const r=n.slice();return r[7]=e[t][0],r[8]=e[t][1],r[10]=t,r}function lt(n){let e,t=n[7]+"",r;return{c(){e=T("span"),r=ne(t),this.h()},l(s){e=O(s,"SPAN",{class:!0});var i=$(e);r=re(i,t),i.forEach(y),this.h()},h(){D(e,"class","filepath")},m(s,i){C(s,e,i),I(e,r)},p(s,i){i&4&&t!==(t=s[7]+"")&&se(r,t)},d(s){s&&y(e)}}}function ot(n){let e,t,r=n[8].code+"",s;return{c(){e=T("pre"),t=T("code"),s=ne(r),this.h()},l(i){e=O(i,"PRE",{class:!0});var l=$(e);t=O(l,"CODE",{});var u=$(t);s=re(u,r),u.forEach(y),l.forEach(y),this.h()},h(){D(e,"class","box")},m(i,l){C(i,e,l),I(e,t),I(t,s)},p(i,l){l&4&&r!==(r=i[8].code+"")&&se(s,r)},d(i){i&&y(e)}}}function ut(n){let e,t=n[8].code+"",r;return{c(){e=new Ye(!1),r=de(),this.h()},l(s){e=Je(s,!1),r=de(),this.h()},h(){e.a=r},m(s,i){e.m(t,s,i),C(s,r,i)},p(s,i){i&4&&t!==(t=s[8].code+"")&&e.p(t)},d(s){s&&(y(r),e.d())}}}function Re(n){let e,t,r=n[10]!==0&&lt(n);function s(u,o){return u[8].html?ut:ot}let i=s(n),l=i(n);return{c(){e=T("div"),r&&r.c(),t=K(),l.c(),this.h()},l(u){e=O(u,"DIV",{class:!0});var o=$(e);r&&r.l(o),t=V(o),l.l(o),o.forEach(y),this.h()},h(){D(e,"class","code-block stack")},m(u,o){C(u,e,o),r&&r.m(e,null),I(e,t),l.m(e,null)},p(u,o){u[10]!==0&&r.p(u,o),i===(i=s(u))&&l?l.p(u,o):(l.d(1),l=i(u),l&&(l.c(),l.m(e,null)))},d(u){u&&y(e),r&&r.d(),l.d()}}}function Ie(n){let e,t;const r=n[6].controls,s=J(r,n,n[5],Se);return{c(){e=T("div"),s&&s.c(),this.h()},l(i){e=O(i,"DIV",{class:!0});var l=$(e);s&&s.l(l),l.forEach(y),this.h()},h(){D(e,"class","controls svelte-17jcsbz")},m(i,l){C(i,e,l),s&&s.m(e,null),t=!0},p(i,l){s&&s.p&&(!t||l&32)&&Q(s,r,i,i[5],t?te(r,i[5],l,at):ee(i[5]),Se)},i(i){t||(x(s,i),t=!0)},o(i){L(s,i),t=!1},d(i){i&&y(e),s&&s.d(i)}}}function ct(n){let e,t,r,s="Result:",i,l,u,o,g,m,_=ye(Object.entries(n[2])),h=[];for(let d=0;d<_.length;d+=1)h[d]=Re(Ae(n,_,d));const v=[n[1]];var S=n[0];function P(d,p){let f={};for(let A=0;A<v.length;A+=1)f=he(f,v[A]);return p!==void 0&&p&2&&(f=he(f,we(v,[be(d[1])]))),{props:f}}S&&(o=ce(S,P(n)));let w=n[3].controls&&Ie(n);return{c(){e=T("div");for(let d=0;d<h.length;d+=1)h[d].c();t=K(),r=T("div"),r.textContent=s,i=K(),l=T("div"),u=T("div"),o&&me(o.$$.fragment),g=K(),w&&w.c(),this.h()},l(d){e=O(d,"DIV",{class:!0,"aria-label":!0});var p=$(e);for(let M=0;M<h.length;M+=1)h[M].l(p);t=V(p),r=O(p,"DIV",{"data-svelte-h":!0}),Xe(r)!=="svelte-1v9238f"&&(r.textContent=s),i=V(p),l=O(p,"DIV",{class:!0});var f=$(l);u=O(f,"DIV",{class:!0});var A=$(u);o&&st(o.$$.fragment,A),A.forEach(y),g=V(f),w&&w.l(f),f.forEach(y),p.forEach(y),this.h()},h(){D(u,"class","box rendered svelte-17jcsbz"),D(l,"class","stack"),fe(l,"box",n[3].controls),D(e,"class","stack"),D(e,"aria-label","Code example")},m(d,p){C(d,e,p);for(let f=0;f<h.length;f+=1)h[f]&&h[f].m(e,null);I(e,t),I(e,r),I(e,i),I(e,l),I(l,u),o&&ge(o,u,null),I(l,g),w&&w.m(l,null),m=!0},p(d,[p]){if(p&4){_=ye(Object.entries(d[2]));let f;for(f=0;f<_.length;f+=1){const A=Ae(d,_,f);h[f]?h[f].p(A,p):(h[f]=Re(A),h[f].c(),h[f].m(e,t))}for(;f<h.length;f+=1)h[f].d(1);h.length=_.length}if(p&1&&S!==(S=d[0])){if(o){_e();const f=o;L(f.$$.fragment,1,0,()=>{Ee(f,1)}),pe()}S?(o=ce(S,P(d,p)),me(o.$$.fragment),x(o.$$.fragment,1),ge(o,u,null)):o=null}else if(S){const f=p&2?we(v,[be(d[1])]):{};o.$set(f)}d[3].controls?w?(w.p(d,p),p&8&&x(w,1)):(w=Ie(d),w.c(),x(w,1),w.m(l,null)):w&&(_e(),L(w,1,1,()=>{w=null}),pe()),(!m||p&8)&&fe(l,"box",d[3].controls)},i(d){m||(o&&x(o.$$.fragment,d),x(w),m=!0)},o(d){o&&L(o.$$.fragment,d),L(w),m=!1},d(d){d&&y(e),qe(h,d),o&&Ee(o),w&&w.d()}}}function ft(n,e,t){let r,{$$slots:s={},$$scope:i}=e;const l=He(s);let{sources:u}=e,{component:o}=e,{componentArgs:g={}}=e;return n.$$set=m=>{"sources"in m&&t(4,u=m.sources),"component"in m&&t(0,o=m.component),"componentArgs"in m&&t(1,g=m.componentArgs),"$$scope"in m&&t(5,i=m.$$scope)},n.$$.update=()=>{n.$$.dirty&16&&t(2,r=Object.fromEntries(Object.entries(u).map(([m,_])=>[m,typeof _=="string"?{code:_,html:!1}:_])??[]))},[o,g,r,l,u,i,s]}class en extends ie{constructor(e){super(),ae(this,e,ft,ct,Y,{sources:4,component:0,componentArgs:1})}}class Z{constructor(e){this.value=e}valueOf(){return this.value}}class b extends Z{constructor(e="???"){super(e)}toString(e){return`{${this.value}}`}}class N extends Z{constructor(e,t={}){super(e),this.opts=t}toString(e){try{return e.memoizeIntlObject(Intl.NumberFormat,this.opts).format(this.value)}catch(t){return e.reportError(t),this.value.toString(10)}}}class F extends Z{constructor(e,t={}){super(e),this.opts=t}toString(e){try{return e.memoizeIntlObject(Intl.DateTimeFormat,this.opts).format(this.value)}catch(t){return e.reportError(t),new Date(this.value).toISOString()}}}const Te=100,ht="⁨",dt="⁩";function mt(n,e,t){if(t===e||t instanceof N&&e instanceof N&&t.value===e.value)return!0;if(e instanceof N&&typeof t=="string"){let r=n.memoizeIntlObject(Intl.PluralRules,e.opts).select(e.value);if(t===r)return!0}return!1}function Oe(n,e,t){return e[t]?z(n,e[t].value):(n.reportError(new RangeError("No default")),new b)}function H(n,e){const t=[],r=Object.create(null);for(const s of e)s.type==="narg"?r[s.name]=U(n,s.value):t.push(U(n,s));return{positional:t,named:r}}function U(n,e){switch(e.type){case"str":return e.value;case"num":return new N(e.value,{minimumFractionDigits:e.precision});case"var":return gt(n,e);case"mesg":return _t(n,e);case"term":return Et(n,e);case"func":return pt(n,e);case"select":return wt(n,e);default:return new b}}function gt(n,{name:e}){let t;if(n.params)if(Object.prototype.hasOwnProperty.call(n.params,e))t=n.params[e];else return new b(`$${e}`);else if(n.args&&Object.prototype.hasOwnProperty.call(n.args,e))t=n.args[e];else return n.reportError(new ReferenceError(`Unknown variable: $${e}`)),new b(`$${e}`);if(t instanceof Z)return t;switch(typeof t){case"string":return t;case"number":return new N(t);case"object":if(t instanceof Date)return new F(t.getTime());default:return n.reportError(new TypeError(`Variable type not supported: $${e}, ${typeof t}`)),new b(`$${e}`)}}function _t(n,{name:e,attr:t}){const r=n.bundle._messages.get(e);if(!r)return n.reportError(new ReferenceError(`Unknown message: ${e}`)),new b(e);if(t){const s=r.attributes[t];return s?z(n,s):(n.reportError(new ReferenceError(`Unknown attribute: ${t}`)),new b(`${e}.${t}`))}return r.value?z(n,r.value):(n.reportError(new ReferenceError(`No value: ${e}`)),new b(e))}function Et(n,{name:e,attr:t,args:r}){const s=`-${e}`,i=n.bundle._terms.get(s);if(!i)return n.reportError(new ReferenceError(`Unknown term: ${s}`)),new b(s);if(t){const u=i.attributes[t];if(u){n.params=H(n,r).named;const o=z(n,u);return n.params=null,o}return n.reportError(new ReferenceError(`Unknown attribute: ${t}`)),new b(`${s}.${t}`)}n.params=H(n,r).named;const l=z(n,i.value);return n.params=null,l}function pt(n,{name:e,args:t}){let r=n.bundle._functions[e];if(!r)return n.reportError(new ReferenceError(`Unknown function: ${e}()`)),new b(`${e}()`);if(typeof r!="function")return n.reportError(new TypeError(`Function ${e}() is not callable`)),new b(`${e}()`);try{let s=H(n,t);return r(s.positional,s.named)}catch(s){return n.reportError(s),new b(`${e}()`)}}function wt(n,{selector:e,variants:t,star:r}){let s=U(n,e);if(s instanceof b)return Oe(n,t,r);for(const i of t){const l=U(n,i.key);if(mt(n,s,l))return z(n,i.value)}return Oe(n,t,r)}function Ke(n,e){if(n.dirty.has(e))return n.reportError(new RangeError("Cyclic reference")),new b;n.dirty.add(e);const t=[],r=n.bundle._useIsolating&&e.length>1;for(const s of e){if(typeof s=="string"){t.push(n.bundle._transform(s));continue}if(n.placeables++,n.placeables>Te)throw n.dirty.delete(e),new RangeError(`Too many placeables expanded: ${n.placeables}, max allowed is ${Te}`);r&&t.push(ht),t.push(U(n,s).toString(n)),r&&t.push(dt)}return n.dirty.delete(e),t.join("")}function z(n,e){return typeof e=="string"?n.bundle._transform(e):Ke(n,e)}class bt{constructor(e,t,r){this.dirty=new WeakSet,this.params=null,this.placeables=0,this.bundle=e,this.errors=t,this.args=r}reportError(e){if(!this.errors||!(e instanceof Error))throw e;this.errors.push(e)}memoizeIntlObject(e,t){let r=this.bundle._intls.get(e);r||(r={},this.bundle._intls.set(e,r));let s=JSON.stringify(t);return r[s]||(r[s]=new e(this.bundle.locales,t)),r[s]}}function W(n,e){const t=Object.create(null);for(const[r,s]of Object.entries(n))e.includes(r)&&(t[r]=s.valueOf());return t}const Ne=["unitDisplay","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"];function vt(n,e){let t=n[0];if(t instanceof b)return new b(`NUMBER(${t.valueOf()})`);if(t instanceof N)return new N(t.valueOf(),{...t.opts,...W(e,Ne)});if(t instanceof F)return new N(t.valueOf(),{...W(e,Ne)});throw new TypeError("Invalid argument to NUMBER")}const xe=["dateStyle","timeStyle","fractionalSecondDigits","dayPeriod","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName"];function yt(n,e){let t=n[0];if(t instanceof b)return new b(`DATETIME(${t.valueOf()})`);if(t instanceof F)return new F(t.valueOf(),{...t.opts,...W(e,xe)});if(t instanceof N)return new F(t.valueOf(),{...W(e,xe)});throw new TypeError("Invalid argument to DATETIME")}const De=new Map;function St(n){const e=Array.isArray(n)?n.join(" "):n;let t=De.get(e);return t===void 0&&(t=new Map,De.set(e,t)),t}class tn{constructor(e,{functions:t,useIsolating:r=!0,transform:s=i=>i}={}){this._terms=new Map,this._messages=new Map,this.locales=Array.isArray(e)?e:[e],this._functions={NUMBER:vt,DATETIME:yt,...t},this._useIsolating=r,this._transform=s,this._intls=St(e)}hasMessage(e){return this._messages.has(e)}getMessage(e){return this._messages.get(e)}addResource(e,{allowOverrides:t=!1}={}){const r=[];for(let s=0;s<e.body.length;s++){let i=e.body[s];if(i.id.startsWith("-")){if(t===!1&&this._terms.has(i.id)){r.push(new Error(`Attempt to override an existing term: "${i.id}"`));continue}this._terms.set(i.id,i)}else{if(t===!1&&this._messages.has(i.id)){r.push(new Error(`Attempt to override an existing message: "${i.id}"`));continue}this._messages.set(i.id,i)}}return r}formatPattern(e,t=null,r=null){if(typeof e=="string")return this._transform(e);let s=new bt(this,r,t);try{return Ke(s,e).toString(s)}catch(i){if(s.errors&&i instanceof Error)return s.errors.push(i),new b().toString(s);throw i}}}const X=/^(-?[a-zA-Z][\w-]*) *= */gm,$e=/\.([a-zA-Z][\w-]*) *= */y,At=/\*?\[/y,q=/(-?[0-9]+(?:\.([0-9]+))?)/y,Rt=/([a-zA-Z][\w-]*)/y,ke=/([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y,It=/^[A-Z][A-Z0-9_-]*$/,B=/([^{}\n\r]+)/y,Tt=/([^\\"\n\r]*)/y,Le=/\\([\\"])/y,Ce=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y,Ot=/^\n+/,Pe=/ +$/,Nt=/ *\r?\n/g,xt=/( *)$/,Dt=/{\s*/y,ze=/\s*}/y,$t=/\[\s*/y,kt=/\s*] */y,Lt=/\s*\(\s*/y,Ct=/\s*->\s*/y,Pt=/\s*:\s*/y,zt=/\s*,?\s*/y,Mt=/\s+/y;class nn{constructor(e){this.body=[],X.lastIndex=0;let t=0;for(;;){let a=X.exec(e);if(a===null)break;t=X.lastIndex;try{this.body.push(o(a[1]))}catch(c){if(c instanceof SyntaxError)continue;throw c}}function r(a){return a.lastIndex=t,a.test(e)}function s(a,c){if(e[t]===a)return t++,!0;if(c)throw new c(`Expected ${a}`);return!1}function i(a,c){if(r(a))return t=a.lastIndex,!0;if(c)throw new c(`Expected ${a.toString()}`);return!1}function l(a){a.lastIndex=t;let c=a.exec(e);if(c===null)throw new SyntaxError(`Expected ${a.toString()}`);return t=a.lastIndex,c}function u(a){return l(a)[1]}function o(a){let c=m(),E=g();if(c===null&&Object.keys(E).length===0)throw new SyntaxError("Expected message value or attributes");return{id:a,value:c,attributes:E}}function g(){let a=Object.create(null);for(;r($e);){let c=u($e),E=m();if(E===null)throw new SyntaxError("Expected attribute value");a[c]=E}return a}function m(){let a;if(r(B)&&(a=u(B)),e[t]==="{"||e[t]==="}")return _(a?[a]:[],1/0);let c=le();return c?a?_([a,c],c.length):(c.value=G(c.value,Ot),_([c],c.length)):a?G(a,Pe):null}function _(a=[],c){for(;;){if(r(B)){a.push(u(B));continue}if(e[t]==="{"){a.push(h());continue}if(e[t]==="}")throw new SyntaxError("Unbalanced closing brace");let R=le();if(R){a.push(R),c=Math.min(c,R.length);continue}break}let E=a.length-1,k=a[E];typeof k=="string"&&(a[E]=G(k,Pe));let j=[];for(let R of a)R instanceof Me&&(R=R.value.slice(0,R.value.length-c)),R&&j.push(R);return j}function h(){i(Dt,SyntaxError);let a=v();if(i(ze))return a;if(i(Ct)){let c=w();return i(ze,SyntaxError),{type:"select",selector:a,...c}}throw new SyntaxError("Unclosed placeable")}function v(){if(e[t]==="{")return h();if(r(ke)){let[,a,c,E=null]=l(ke);if(a==="$")return{type:"var",name:c};if(i(Lt)){let k=S();if(a==="-")return{type:"term",name:c,attr:E,args:k};if(It.test(c))return{type:"func",name:c,args:k};throw new SyntaxError("Function names must be all upper-case")}return a==="-"?{type:"term",name:c,attr:E,args:[]}:{type:"mesg",name:c,attr:E}}return p()}function S(){let a=[];for(;;){switch(e[t]){case")":return t++,a;case void 0:throw new SyntaxError("Unclosed argument list")}a.push(P()),i(zt)}}function P(){let a=v();return a.type!=="mesg"?a:i(Pt)?{type:"narg",name:a.name,value:p()}:a}function w(){let a=[],c=0,E;for(;r(At);){s("*")&&(E=c);let k=d(),j=m();if(j===null)throw new SyntaxError("Expected variant value");a[c++]={key:k,value:j}}if(c===0)return null;if(E===void 0)throw new SyntaxError("Expected default variant");return{variants:a,star:E}}function d(){i($t,SyntaxError);let a;return r(q)?a=f():a={type:"str",value:u(Rt)},i(kt,SyntaxError),a}function p(){if(r(q))return f();if(e[t]==='"')return A();throw new SyntaxError("Invalid expression")}function f(){let[,a,c=""]=l(q),E=c.length;return{type:"num",value:parseFloat(a),precision:E}}function A(){s('"',SyntaxError);let a="";for(;;){if(a+=u(Tt),e[t]==="\\"){a+=M();continue}if(s('"'))return{type:"str",value:a};throw new SyntaxError("Unclosed string literal")}}function M(){if(r(Le))return u(Le);if(r(Ce)){let[,a,c]=l(Ce),E=parseInt(a||c,16);return E<=55295||57344<=E?String.fromCodePoint(E):"�"}throw new SyntaxError("Unknown escape sequence")}function le(){let a=t;switch(i(Mt),e[t]){case".":case"[":case"*":case"}":case void 0:return!1;case"{":return oe(e.slice(a,t))}return e[t-1]===" "?oe(e.slice(a,t)):!1}function G(a,c){return a.replace(c,"")}function oe(a){let c=a.replace(Nt,`
`),E=xt.exec(a)[1].length;return new Me(c,E)}}}class Me{constructor(e,t){this.value=e,this.length=t}}class jt extends Array{static from(e){return e instanceof this?e:new this(e)}}class Ft extends jt{constructor(e){if(super(),Symbol.iterator in Object(e))this.iterator=e[Symbol.iterator]();else throw new TypeError("Argument must implement the iteration protocol.")}[Symbol.iterator](){const e=this;let t=0;return{next(){return e.length<=t&&e.push(e.iterator.next()),e[t++]}}}touchNext(e=1){let t=0;for(;t++<e;){const r=this[this.length-1];if(r&&r.done)break;this.push(this.iterator.next())}return this[this.length-1]}}function je(n,e){return Array.isArray(e)?e.map(t=>Fe(n,t)):Fe(n,e)}function Fe(n,e){for(const t of n)if(t.hasMessage(e))return t;return null}const Ve={};function Ut(n,e){const t=ve(n,i=>(l,u)=>{const o=je(i,l);if(o===null)return e(`[svelte-fluent] Localization missing: "${l}"`),{value:l,attributes:{}};const g=o.getMessage(l);if(!g)return e(`[svelte-fluent] Localization missing: "${l}"`),{value:l,attributes:{}};const m=[],_=g.value?o.formatPattern(g.value,u,m):"",h=Object.fromEntries(Object.entries(g.attributes||{}).map(([v,S])=>[v,o.formatPattern(S,u,m)]));for(const v of m)e(`[svelte-fluent] Localization error: ${v}`);return{value:_,attributes:h}}),r=ve(n,i=>(l,u)=>{const[o,g]=l.split(".",2),m=je(i,o);if(m===null)return e(`[svelte-fluent] Localization missing: "${l}"`),l;const _=m.getMessage(o);if(!_)return e(`[svelte-fluent] Localization missing: "${l}"`),l;const h=g?_.attributes[g]:_.value;if(h===null)return e(`[svelte-fluent] Localization missing: "${l}"`),l;const v=[],S=m.formatPattern(h,u,v);for(const P of v)e(`[svelte-fluent] Localization error: ${P}`);return S});return Qe(Ve,{getTranslation:t,localize:r})}function We(){const n=et(Ve);if(!n)throw new Error("[svelte-fluent] <FluentProvider/> was not found in component hierarchy.");return n}const Bt={subscribe(n){return We().getTranslation.subscribe(n)}},rn={subscribe(n){return We().localize.subscribe(n)}};function Kt(n){let e;const t=n[4].default,r=J(t,n,n[3],null);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,i){r&&r.m(s,i),e=!0},p(s,[i]){r&&r.p&&(!e||i&8)&&Q(r,t,s,s[3],e?te(t,s[3],i,null):ee(s[3]),null)},i(s){e||(x(r,s),e=!0)},o(s){L(r,s),e=!1},d(s){r&&r.d(s)}}}function Vt(n,e,t){let r,s,{$$slots:i={},$$scope:l}=e;class u{constructor(v){ue(this,"iterable");Object.defineProperty(this,"iterable",{value:v,enumerable:!1})}[Symbol.iterator](){return this.iterable[Symbol.iterator]()}}let{bundles:o=[]}=e;const g=tt(),m=nt(),_=it(r);return Be(n,_,h=>t(5,s=h)),Ut(_,async h=>{await g,m("error",h)}),n.$$set=h=>{"bundles"in h&&t(1,o=h.bundles),"$$scope"in h&&t(3,l=h.$$scope)},n.$$.update=()=>{n.$$.dirty&2&&t(2,r=new u(Ft.from(o))),n.$$.dirty&4&&rt(_,s=r,s)},[_,o,r,l,i]}class sn extends ie{constructor(e){super(),ae(this,e,Vt,Kt,Y,{bundles:1})}}const Wt=n=>({text:n&1,attrs:n&1}),Ue=n=>({text:n[0].value,attrs:n[0].attributes});function Zt(n){let e=n[0].value+"",t;return{c(){t=ne(e)},l(r){t=re(r,e)},m(r,s){C(r,t,s)},p(r,s){s&1&&e!==(e=r[0].value+"")&&se(t,e)},d(r){r&&y(t)}}}function Gt(n){let e;const t=n[5].default,r=J(t,n,n[4],Ue),s=r||Zt(n);return{c(){s&&s.c()},l(i){s&&s.l(i)},m(i,l){s&&s.m(i,l),e=!0},p(i,[l]){r?r.p&&(!e||l&17)&&Q(r,t,i,i[4],e?te(t,i[4],l,Wt):ee(i[4]),Ue):s&&s.p&&(!e||l&1)&&s.p(i,e?l:-1)},i(i){e||(x(s,i),e=!0)},o(i){L(s,i),e=!1},d(i){s&&s.d(i)}}}function Xt(n,e,t){let r,s;Be(n,Bt,g=>t(3,s=g));let{$$slots:i={},$$scope:l}=e,{id:u}=e,{args:o=void 0}=e;return n.$$set=g=>{"id"in g&&t(1,u=g.id),"args"in g&&t(2,o=g.args),"$$scope"in g&&t(4,l=g.$$scope)},n.$$.update=()=>{n.$$.dirty&14&&t(0,r=s(u,o))},[r,u,o,s,l,i]}class an extends ie{constructor(e){super(),ae(this,e,Xt,Gt,Y,{id:1,args:2})}}export{en as E,sn as F,an as L,tn as a,nn as b,N as c,b as d,ye as e,F as f,Bt as g,rn as l};