import{S as re,i as se,s as ie,x as _e,k as T,a as V,q as X,y as de,l as I,m as O,c as Z,r as H,h as v,z as Ve,n as D,$ as me,b as $,J as R,A as ge,G as Ze,a0 as We,v as Ee,d as C,B as pe,f as we,g as x,Q as Ge,P as ae,a1 as qe,K as le,M as oe,N as ue,O as ce,C as Xe,u as fe,Z as je,e as W,_ as Be,t as He,a2 as Je,a3 as Qe,a4 as Ye,a5 as et}from"./index.77053508.js";import{c as G}from"./highlight.f4f71060.js";import{p as tt}from"./stores.82699913.js";import{w as nt,h as Y}from"./singletons.311fc7fe.js";const rt=n=>({}),ve=n=>({});function ye(n,e,t){const s=n.slice();return s[7]=e[t][0],s[8]=e[t][1],s[10]=t,s}function st(n){let e,t=n[7]+"",s;return{c(){e=T("span"),s=X(t),this.h()},l(r){e=I(r,"SPAN",{class:!0});var i=O(e);s=H(i,t),i.forEach(v),this.h()},h(){D(e,"class","filepath")},m(r,i){$(r,e,i),R(e,s)},p(r,i){i&1&&t!==(t=r[7]+"")&&fe(s,t)},d(r){r&&v(e)}}}function it(n){let e,t,s=n[8]+"",r;return{c(){e=T("pre"),t=T("code"),r=X(s),this.h()},l(i){e=I(i,"PRE",{class:!0});var l=O(e);t=I(l,"CODE",{});var f=O(t);r=H(f,s),f.forEach(v),l.forEach(v),this.h()},h(){D(e,"class","box")},m(i,l){$(i,e,l),R(e,t),R(t,r)},p(i,l){l&1&&s!==(s=i[8]+"")&&fe(r,s)},d(i){i&&v(e)}}}function at(n){let e,t=G(n[3].data.highlighter,n[8],"ftl")+"",s;return{c(){e=new je(!1),s=W(),this.h()},l(r){e=Be(r,!1),s=W(),this.h()},h(){e.a=s},m(r,i){e.m(t,r,i),$(r,s,i)},p(r,i){i&9&&t!==(t=G(r[3].data.highlighter,r[8],"ftl")+"")&&e.p(t)},d(r){r&&v(s),r&&e.d()}}}function lt(n){let e,t=G(n[3].data.highlighter,n[8],"svelte")+"",s;return{c(){e=new je(!1),s=W(),this.h()},l(r){e=Be(r,!1),s=W(),this.h()},h(){e.a=s},m(r,i){e.m(t,r,i),$(r,s,i)},p(r,i){i&9&&t!==(t=G(r[3].data.highlighter,r[8],"svelte")+"")&&e.p(t)},d(r){r&&v(s),r&&e.d()}}}function be(n){let e,t,s,r,i=n[10]!==0&&st(n);function l(h,o){return o&1&&(s=null),o&1&&(r=null),s==null&&(s=!!h[7].endsWith(".svelte")),s?lt:(r==null&&(r=!!h[7].endsWith(".ftl")),r?at:it)}let f=l(n,-1),u=f(n);return{c(){e=T("div"),i&&i.c(),t=V(),u.c(),this.h()},l(h){e=I(h,"DIV",{class:!0});var o=O(e);i&&i.l(o),t=Z(o),u.l(o),o.forEach(v),this.h()},h(){D(e,"class","code-block stack")},m(h,o){$(h,e,o),i&&i.m(e,null),R(e,t),u.m(e,null)},p(h,o){h[10]!==0&&i.p(h,o),f===(f=l(h,o))&&u?u.p(h,o):(u.d(1),u=f(h),u&&(u.c(),u.m(e,null)))},d(h){h&&v(e),i&&i.d(),u.d()}}}function Se(n){let e,t;const s=n[6].controls,r=le(s,n,n[5],ve);return{c(){e=T("div"),r&&r.c(),this.h()},l(i){e=I(i,"DIV",{class:!0});var l=O(e);r&&r.l(l),l.forEach(v),this.h()},h(){D(e,"class","controls svelte-zbatgl")},m(i,l){$(i,e,l),r&&r.m(e,null),t=!0},p(i,l){r&&r.p&&(!t||l&32)&&oe(r,s,i,i[5],t?ce(s,i[5],l,rt):ue(i[5]),ve)},i(i){t||(x(r,i),t=!0)},o(i){C(r,i),t=!1},d(i){i&&v(e),r&&r.d(i)}}}function ot(n){let e,t,s,r,i,l,f,u,h,o,b=Object.entries(n[0]),p=[];for(let _=0;_<b.length;_+=1)p[_]=be(ye(n,b,_));const k=[n[2]];var S=n[1];function F(_){let g={};for(let y=0;y<k.length;y+=1)g=Xe(g,k[y]);return{props:g}}S&&(u=_e(S,F()));let m=n[4].controls&&Se(n);return{c(){e=T("div");for(let _=0;_<p.length;_+=1)p[_].c();t=V(),s=T("div"),r=X("Result:"),i=V(),l=T("div"),f=T("div"),u&&de(u.$$.fragment),h=V(),m&&m.c(),this.h()},l(_){e=I(_,"DIV",{class:!0,"aria-label":!0});var g=O(e);for(let L=0;L<p.length;L+=1)p[L].l(g);t=Z(g),s=I(g,"DIV",{});var y=O(s);r=H(y,"Result:"),y.forEach(v),i=Z(g),l=I(g,"DIV",{class:!0});var E=O(l);f=I(E,"DIV",{class:!0});var M=O(f);u&&Ve(u.$$.fragment,M),M.forEach(v),h=Z(E),m&&m.l(E),E.forEach(v),g.forEach(v),this.h()},h(){D(f,"class","box rendered svelte-zbatgl"),D(l,"class","stack"),me(l,"box",n[4].controls),D(e,"class","stack"),D(e,"aria-label","Code example")},m(_,g){$(_,e,g);for(let y=0;y<p.length;y+=1)p[y].m(e,null);R(e,t),R(e,s),R(s,r),R(e,i),R(e,l),R(l,f),u&&ge(u,f,null),R(l,h),m&&m.m(l,null),o=!0},p(_,[g]){if(g&9){b=Object.entries(_[0]);let E;for(E=0;E<b.length;E+=1){const M=ye(_,b,E);p[E]?p[E].p(M,g):(p[E]=be(M),p[E].c(),p[E].m(e,t))}for(;E<p.length;E+=1)p[E].d(1);p.length=b.length}const y=g&4?Ze(k,[We(_[2])]):{};if(S!==(S=_[1])){if(u){Ee();const E=u;C(E.$$.fragment,1,0,()=>{pe(E,1)}),we()}S?(u=_e(S,F()),de(u.$$.fragment),x(u.$$.fragment,1),ge(u,f,null)):u=null}else S&&u.$set(y);_[4].controls?m?(m.p(_,g),g&16&&x(m,1)):(m=Se(_),m.c(),x(m,1),m.m(l,null)):m&&(Ee(),C(m,1,1,()=>{m=null}),we()),(!o||g&16)&&me(l,"box",_[4].controls)},i(_){o||(u&&x(u.$$.fragment,_),x(m),o=!0)},o(_){u&&C(u.$$.fragment,_),C(m),o=!1},d(_){_&&v(e),Ge(p,_),u&&pe(u),m&&m.d()}}}function ut(n,e,t){let s;ae(n,tt,o=>t(3,s=o));let{$$slots:r={},$$scope:i}=e;const l=qe(r);let{sources:f}=e,{component:u}=e,{componentArgs:h={}}=e;return n.$$set=o=>{"sources"in o&&t(0,f=o.sources),"component"in o&&t(1,u=o.component),"componentArgs"in o&&t(2,h=o.componentArgs),"$$scope"in o&&t(5,i=o.$$scope)},[f,u,h,s,l,i,r]}class Xt extends re{constructor(e){super(),se(this,e,ut,ot,ie,{sources:0,component:1,componentArgs:2})}}class J{constructor(e){this.value=e}valueOf(){return this.value}}class w extends J{constructor(e="???"){super(e)}toString(e){return`{${this.value}}`}}class N extends J{constructor(e,t={}){super(e),this.opts=t}toString(e){try{return e.memoizeIntlObject(Intl.NumberFormat,this.opts).format(this.value)}catch(t){return e.reportError(t),this.value.toString(10)}}}class B extends J{constructor(e,t={}){super(e),this.opts=t}toString(e){try{return e.memoizeIntlObject(Intl.DateTimeFormat,this.opts).format(this.value)}catch(t){return e.reportError(t),new Date(this.value).toISOString()}}}const Re=100,ct="⁨",ft="⁩";function ht(n,e,t){if(t===e||t instanceof N&&e instanceof N&&t.value===e.value)return!0;if(e instanceof N&&typeof t=="string"){let s=n.memoizeIntlObject(Intl.PluralRules,e.opts).select(e.value);if(t===s)return!0}return!1}function Ae(n,e,t){return e[t]?U(n,e[t].value):(n.reportError(new RangeError("No default")),new w)}function ne(n,e){const t=[],s=Object.create(null);for(const r of e)r.type==="narg"?s[r.name]=K(n,r.value):t.push(K(n,r));return{positional:t,named:s}}function K(n,e){switch(e.type){case"str":return e.value;case"num":return new N(e.value,{minimumFractionDigits:e.precision});case"var":return _t(n,e);case"mesg":return dt(n,e);case"term":return mt(n,e);case"func":return gt(n,e);case"select":return Et(n,e);default:return new w}}function _t(n,{name:e}){let t;if(n.params)if(Object.prototype.hasOwnProperty.call(n.params,e))t=n.params[e];else return new w(`$${e}`);else if(n.args&&Object.prototype.hasOwnProperty.call(n.args,e))t=n.args[e];else return n.reportError(new ReferenceError(`Unknown variable: $${e}`)),new w(`$${e}`);if(t instanceof J)return t;switch(typeof t){case"string":return t;case"number":return new N(t);case"object":if(t instanceof Date)return new B(t.getTime());default:return n.reportError(new TypeError(`Variable type not supported: $${e}, ${typeof t}`)),new w(`$${e}`)}}function dt(n,{name:e,attr:t}){const s=n.bundle._messages.get(e);if(!s)return n.reportError(new ReferenceError(`Unknown message: ${e}`)),new w(e);if(t){const r=s.attributes[t];return r?U(n,r):(n.reportError(new ReferenceError(`Unknown attribute: ${t}`)),new w(`${e}.${t}`))}return s.value?U(n,s.value):(n.reportError(new ReferenceError(`No value: ${e}`)),new w(e))}function mt(n,{name:e,attr:t,args:s}){const r=`-${e}`,i=n.bundle._terms.get(r);if(!i)return n.reportError(new ReferenceError(`Unknown term: ${r}`)),new w(r);if(t){const f=i.attributes[t];if(f){n.params=ne(n,s).named;const u=U(n,f);return n.params=null,u}return n.reportError(new ReferenceError(`Unknown attribute: ${t}`)),new w(`${r}.${t}`)}n.params=ne(n,s).named;const l=U(n,i.value);return n.params=null,l}function gt(n,{name:e,args:t}){let s=n.bundle._functions[e];if(!s)return n.reportError(new ReferenceError(`Unknown function: ${e}()`)),new w(`${e}()`);if(typeof s!="function")return n.reportError(new TypeError(`Function ${e}() is not callable`)),new w(`${e}()`);try{let r=ne(n,t);return s(r.positional,r.named)}catch(r){return n.reportError(r),new w(`${e}()`)}}function Et(n,{selector:e,variants:t,star:s}){let r=K(n,e);if(r instanceof w)return Ae(n,t,s);for(const i of t){const l=K(n,i.key);if(ht(n,r,l))return U(n,i.value)}return Ae(n,t,s)}function Ke(n,e){if(n.dirty.has(e))return n.reportError(new RangeError("Cyclic reference")),new w;n.dirty.add(e);const t=[],s=n.bundle._useIsolating&&e.length>1;for(const r of e){if(typeof r=="string"){t.push(n.bundle._transform(r));continue}if(n.placeables++,n.placeables>Re)throw n.dirty.delete(e),new RangeError(`Too many placeables expanded: ${n.placeables}, max allowed is ${Re}`);s&&t.push(ct),t.push(K(n,r).toString(n)),s&&t.push(ft)}return n.dirty.delete(e),t.join("")}function U(n,e){return typeof e=="string"?n.bundle._transform(e):Ke(n,e)}class pt{constructor(e,t,s){this.dirty=new WeakSet,this.params=null,this.placeables=0,this.bundle=e,this.errors=t,this.args=s}reportError(e){if(!this.errors||!(e instanceof Error))throw e;this.errors.push(e)}memoizeIntlObject(e,t){let s=this.bundle._intls.get(e);s||(s={},this.bundle._intls.set(e,s));let r=JSON.stringify(t);return s[r]||(s[r]=new e(this.bundle.locales,t)),s[r]}}function q(n,e){const t=Object.create(null);for(const[s,r]of Object.entries(n))e.includes(s)&&(t[s]=r.valueOf());return t}const Te=["unitDisplay","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"];function wt(n,e){let t=n[0];if(t instanceof w)return new w(`NUMBER(${t.valueOf()})`);if(t instanceof N)return new N(t.valueOf(),{...t.opts,...q(e,Te)});if(t instanceof B)return new N(t.valueOf(),{...q(e,Te)});throw new TypeError("Invalid argument to NUMBER")}const Ie=["dateStyle","timeStyle","fractionalSecondDigits","dayPeriod","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName"];function vt(n,e){let t=n[0];if(t instanceof w)return new w(`DATETIME(${t.valueOf()})`);if(t instanceof B)return new B(t.valueOf(),{...t.opts,...q(e,Ie)});if(t instanceof N)return new B(t.valueOf(),{...q(e,Ie)});throw new TypeError("Invalid argument to DATETIME")}const Oe=new Map;function yt(n){const e=Array.isArray(n)?n.join(" "):n;let t=Oe.get(e);return t===void 0&&(t=new Map,Oe.set(e,t)),t}class Ht{constructor(e,{functions:t,useIsolating:s=!0,transform:r=i=>i}={}){this._terms=new Map,this._messages=new Map,this.locales=Array.isArray(e)?e:[e],this._functions={NUMBER:wt,DATETIME:vt,...t},this._useIsolating=s,this._transform=r,this._intls=yt(e)}hasMessage(e){return this._messages.has(e)}getMessage(e){return this._messages.get(e)}addResource(e,{allowOverrides:t=!1}={}){const s=[];for(let r=0;r<e.body.length;r++){let i=e.body[r];if(i.id.startsWith("-")){if(t===!1&&this._terms.has(i.id)){s.push(new Error(`Attempt to override an existing term: "${i.id}"`));continue}this._terms.set(i.id,i)}else{if(t===!1&&this._messages.has(i.id)){s.push(new Error(`Attempt to override an existing message: "${i.id}"`));continue}this._messages.set(i.id,i)}}return s}formatPattern(e,t=null,s=null){if(typeof e=="string")return this._transform(e);let r=new pt(this,s,t);try{return Ke(r,e).toString(r)}catch(i){if(r.errors&&i instanceof Error)return r.errors.push(i),new w().toString(r);throw i}}}const ee=/^(-?[a-zA-Z][\w-]*) *= */gm,Ne=/\.([a-zA-Z][\w-]*) *= */y,bt=/\*?\[/y,te=/(-?[0-9]+(?:\.([0-9]+))?)/y,St=/([a-zA-Z][\w-]*)/y,ke=/([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y,Rt=/^[A-Z][A-Z0-9_-]*$/,z=/([^{}\n\r]+)/y,At=/([^\\"\n\r]*)/y,xe=/\\([\\"])/y,De=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y,Tt=/^\n+/,$e=/ +$/,It=/ *\r?\n/g,Ot=/( *)$/,Nt=/{\s*/y,Me=/\s*}/y,kt=/\[\s*/y,xt=/\s*] */y,Dt=/\s*\(\s*/y,$t=/\s*->\s*/y,Mt=/\s*:\s*/y,Pt=/\s*,?\s*/y,Ct=/\s+/y;class Jt{constructor(e){this.body=[],ee.lastIndex=0;let t=0;for(;;){let a=ee.exec(e);if(a===null)break;t=ee.lastIndex;try{this.body.push(u(a[1]))}catch(c){if(c instanceof SyntaxError)continue;throw c}}function s(a){return a.lastIndex=t,a.test(e)}function r(a,c){if(e[t]===a)return t++,!0;if(c)throw new c(`Expected ${a}`);return!1}function i(a,c){if(s(a))return t=a.lastIndex,!0;if(c)throw new c(`Expected ${a.toString()}`);return!1}function l(a){a.lastIndex=t;let c=a.exec(e);if(c===null)throw new SyntaxError(`Expected ${a.toString()}`);return t=a.lastIndex,c}function f(a){return l(a)[1]}function u(a){let c=o(),d=h();if(c===null&&Object.keys(d).length===0)throw new SyntaxError("Expected message value or attributes");return{id:a,value:c,attributes:d}}function h(){let a=Object.create(null);for(;s(Ne);){let c=f(Ne),d=o();if(d===null)throw new SyntaxError("Expected attribute value");a[c]=d}return a}function o(){let a;if(s(z)&&(a=f(z)),e[t]==="{"||e[t]==="}")return b(a?[a]:[],1/0);let c=L();return c?a?b([a,c],c.length):(c.value=Q(c.value,Tt),b([c],c.length)):a?Q(a,$e):null}function b(a=[],c){for(;;){if(s(z)){a.push(f(z));continue}if(e[t]==="{"){a.push(p());continue}if(e[t]==="}")throw new SyntaxError("Unbalanced closing brace");let A=L();if(A){a.push(A),c=Math.min(c,A.length);continue}break}let d=a.length-1,P=a[d];typeof P=="string"&&(a[d]=Q(P,$e));let j=[];for(let A of a)A instanceof Pe&&(A=A.value.slice(0,A.value.length-c)),A&&j.push(A);return j}function p(){i(Nt,SyntaxError);let a=k();if(i(Me))return a;if(i($t)){let c=m();return i(Me,SyntaxError),{type:"select",selector:a,...c}}throw new SyntaxError("Unclosed placeable")}function k(){if(e[t]==="{")return p();if(s(ke)){let[,a,c,d=null]=l(ke);if(a==="$")return{type:"var",name:c};if(i(Dt)){let P=S();if(a==="-")return{type:"term",name:c,attr:d,args:P};if(Rt.test(c))return{type:"func",name:c,args:P};throw new SyntaxError("Function names must be all upper-case")}return a==="-"?{type:"term",name:c,attr:d,args:[]}:{type:"mesg",name:c,attr:d}}return g()}function S(){let a=[];for(;;){switch(e[t]){case")":return t++,a;case void 0:throw new SyntaxError("Unclosed argument list")}a.push(F()),i(Pt)}}function F(){let a=k();return a.type!=="mesg"?a:i(Mt)?{type:"narg",name:a.name,value:g()}:a}function m(){let a=[],c=0,d;for(;s(bt);){r("*")&&(d=c);let P=_(),j=o();if(j===null)throw new SyntaxError("Expected variant value");a[c++]={key:P,value:j}}if(c===0)return null;if(d===void 0)throw new SyntaxError("Expected default variant");return{variants:a,star:d}}function _(){i(kt,SyntaxError);let a;return s(te)?a=y():a={type:"str",value:f(St)},i(xt,SyntaxError),a}function g(){if(s(te))return y();if(e[t]==='"')return E();throw new SyntaxError("Invalid expression")}function y(){let[,a,c=""]=l(te),d=c.length;return{type:"num",value:parseFloat(a),precision:d}}function E(){r('"',SyntaxError);let a="";for(;;){if(a+=f(At),e[t]==="\\"){a+=M();continue}if(r('"'))return{type:"str",value:a};throw new SyntaxError("Unclosed string literal")}}function M(){if(s(xe))return f(xe);if(s(De)){let[,a,c]=l(De),d=parseInt(a||c,16);return d<=55295||57344<=d?String.fromCodePoint(d):"�"}throw new SyntaxError("Unknown escape sequence")}function L(){let a=t;switch(i(Ct),e[t]){case".":case"[":case"*":case"}":case void 0:return!1;case"{":return he(e.slice(a,t))}return e[t-1]===" "?he(e.slice(a,t)):!1}function Q(a,c){return a.replace(c,"")}function he(a){let c=a.replace(It,`
`),d=Ot.exec(a)[1].length;return new Pe(c,d)}}}class Pe{constructor(e,t){this.value=e,this.length=t}}function Ce(n,e){return Array.isArray(e)?e.map(t=>Fe(n,t)):Fe(n,e)}function Fe(n,e){for(const t of n)if(t.hasMessage(e))return t;return null}class Ft extends Array{static from(e){return e instanceof this?e:new this(e)}}class Le extends Ft{constructor(e){if(super(),Symbol.iterator in Object(e))this.iterator=e[Symbol.iterator]();else throw new TypeError("Argument must implement the iteration protocol.")}[Symbol.iterator](){const e=this;let t=0;return{next(){return e.length<=t&&e.push(e.iterator.next()),e[t++]}}}touchNext(e=1){let t=0;for(;t++<e;){const s=this[this.length-1];if(s&&s.done)break;this.push(this.iterator.next())}return this[this.length-1]}}function Lt(n){let e;const t=n[3].default,s=le(t,n,n[2],null);return{c(){s&&s.c()},l(r){s&&s.l(r)},m(r,i){s&&s.m(r,i),e=!0},p(r,[i]){s&&s.p&&(!e||i&4)&&oe(s,t,r,r[2],e?ce(t,r[2],i,null):ue(r[2]),null)},i(r){e||(x(s,r),e=!0)},o(r){C(s,r),e=!1},d(r){s&&s.d(r)}}}const ze={};function Ut(){const n=et(ze);if(!n)throw new Error("[svelte-fluent] <FluentProvider/> was not found in component hierarchy.");const{bundles:e,dispatch:t}=n,s=Y(e,l=>f=>Ce(l,f)),r=Y(e,l=>(f,u)=>{const h=Ce(l,f);if(h===null)return t("error",`[svelte-fluent] Translation missing: "${f}"`),{value:f,attributes:{}};const o=h.getMessage(f);if(!o)return t("error",`[svelte-fluent] Translation missing: "${f}"`),{value:f,attributes:{}};const b=[],p=o.value?h.formatPattern(o.value,u,b):"",k=Object.fromEntries(Object.entries(o.attributes||{}).map(([S,F])=>[S,h.formatPattern(F,u,b)]));for(const S of b)t("error",`[svelte-fluent] Translation error: ${S}`);return{value:p,attributes:k}}),i=Y(r,l=>(f,u)=>l(f,u).value);return{getBundle:s,getTranslation:r,translate:i}}function jt(n,e,t){let s,{$$slots:r={},$$scope:i}=e,{bundles:l=[]}=e;const f=He(),u=Je(),h=nt(Le.from(l));return ae(n,h,o=>t(4,s=o)),Qe(ze,{bundles:{subscribe:h.subscribe},dispatch:(...o)=>{f.then(()=>u(...o))}}),n.$$set=o=>{"bundles"in o&&t(1,l=o.bundles),"$$scope"in o&&t(2,i=o.$$scope)},n.$$.update=()=>{n.$$.dirty&2&&Ye(h,s=Le.from(l),s)},[h,l,i,r]}class Qt extends re{constructor(e){super(),se(this,e,jt,Lt,ie,{bundles:1})}}const Bt=n=>({text:n&1,attrs:n&1}),Ue=n=>({text:n[0].value,attrs:n[0].attributes});function Kt(n){let e=n[0].value+"",t;return{c(){t=X(e)},l(s){t=H(s,e)},m(s,r){$(s,t,r)},p(s,r){r&1&&e!==(e=s[0].value+"")&&fe(t,e)},d(s){s&&v(t)}}}function zt(n){let e;const t=n[6].default,s=le(t,n,n[5],Ue),r=s||Kt(n);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,l){r&&r.m(i,l),e=!0},p(i,[l]){s?s.p&&(!e||l&33)&&oe(s,t,i,i[5],e?ce(t,i[5],l,Bt):ue(i[5]),Ue):r&&r.p&&(!e||l&1)&&r.p(i,e?l:-1)},i(i){e||(x(r,i),e=!0)},o(i){C(r,i),e=!1},d(i){r&&r.d(i)}}}function Vt(n,e,t){let s,r,{$$slots:i={},$$scope:l}=e,{id:f}=e,{args:u=void 0}=e;const{getTranslation:h}=Ut();return ae(n,h,o=>t(4,r=o)),n.$$set=o=>{"id"in o&&t(2,f=o.id),"args"in o&&t(3,u=o.args),"$$scope"in o&&t(5,l=o.$$scope)},n.$$.update=()=>{n.$$.dirty&28&&t(0,s=r(f,u))},[s,h,f,u,r,l,i]}class Yt extends re{constructor(e){super(),se(this,e,Vt,zt,ie,{id:2,args:3})}}export{Xt as E,Qt as F,Yt as L,Ht as a,Jt as b,N as c,w as d,B as e,Ut as s};
