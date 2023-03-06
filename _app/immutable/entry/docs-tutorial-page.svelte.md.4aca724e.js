import{S,i as R,s as C,y as F,z as y,A as L,g as k,d as A,B as D,H as I,k as f,q as u,a as w,l as c,m as d,r as i,h as o,c as _,n as v,R as Sr,b as h,J as l,U as Er,V as Rr,X as Cr}from"../chunks/index.01f00b63.js";import{F as Ke,a as Ne,b as pe,L as me,E as Me,c as Lr,d as Fr,e as Wn}from"../chunks/Overlay.svelte_svelte_type_style_lang.e09a7bc0.js";function Tr(s){let e,r;return e=new me({props:{id:"hello"}}),{c(){F(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){L(e,t,a),r=!0},p:I,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function Wr(s){let e,r;return e=new Ke({props:{bundles:[s[0]],$$slots:{default:[Tr]},$$scope:{ctx:s}}}),{c(){F(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){L(e,t,a),r=!0},p(t,[a]){const p={};a&2&&(p.$$scope={dirty:a,ctx:t}),e.$set(p)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}const Yr="hello = Hello, world!";function Br(s){const e=new Ne("en");return e.addResource(new pe(Yr)),[e]}let jr=class extends S{constructor(e){super(),R(this,e,Br,Wr,C,{})}};const Ir=`<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent';

	const translations = 'hello = Hello, world!';
	const bundle = new FluentBundle('en');
	bundle.addResource(new FluentResource(translations));
<\/script>

<FluentProvider bundles={[bundle]}>
	<Localized id="hello" />
</FluentProvider>
`;function Hr(s){let e,r;return e=new Me({props:{sources:{"App.svelte":Ir},component:jr}}),{c(){F(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){L(e,t,a),r=!0},p:I,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}let Kr=class extends S{constructor(e){super(),R(this,e,null,Hr,C,{})}};const kr=`hello = Hello, world!
`;function Nr(s){let e,r;return e=new me({props:{id:"hello"}}),{c(){F(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){L(e,t,a),r=!0},p:I,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function Mr(s){let e,r;return e=new Ke({props:{bundles:[s[0]],$$slots:{default:[Nr]},$$scope:{ctx:s}}}),{c(){F(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){L(e,t,a),r=!0},p(t,[a]){const p={};a&4&&(p.$$scope={dirty:a,ctx:t}),e.$set(p)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function Ur(s){const e=new pe(kr),r=new Ne("en");return r.addResource(e),[r]}let qr=class extends S{constructor(e){super(),R(this,e,Ur,Mr,C,{})}};const Vr=`<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent';
	import translationsEn from './en.ftl?raw';

	const resource = new FluentResource(translationsEn);
	const bundle = new FluentBundle('en');
	bundle.addResource(resource);
<\/script>

<FluentProvider bundles={[bundle]}>
	<Localized id="hello" />
</FluentProvider>
`;function Jr(s){let e,r;return e=new Me({props:{sources:{"App.svelte":Vr,"en.ftl":kr},component:qr}}),{c(){F(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){L(e,t,a),r=!0},p:I,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}let Qr=class extends S{constructor(e){super(),R(this,e,null,Jr,C,{})}};const Xr="([a-z]{2,3}|\\*)",Gr="(?:-([a-z]{4}|\\*))",Zr="(?:-([a-z]{2}|\\*))",el="(?:-(([0-9][a-z0-9]{3}|[a-z0-9]{5,8})|\\*))",tl=new RegExp(`^${Xr}${Gr}?${Zr}?${el}?$`,"i");class rt{constructor(e){const r=tl.exec(e.replace(/_/g,"-"));if(!r){this.isWellFormed=!1;return}let[,t,a,p,x]=r;t&&(this.language=t.toLowerCase()),a&&(this.script=a[0].toUpperCase()+a.slice(1)),p&&(this.region=p.toUpperCase()),this.variant=x,this.isWellFormed=!0}isEqual(e){return this.language===e.language&&this.script===e.script&&this.region===e.region&&this.variant===e.variant}matches(e,r=!1,t=!1){return(this.language===e.language||r&&this.language===void 0||t&&e.language===void 0)&&(this.script===e.script||r&&this.script===void 0||t&&e.script===void 0)&&(this.region===e.region||r&&this.region===void 0||t&&e.region===void 0)&&(this.variant===e.variant||r&&this.variant===void 0||t&&e.variant===void 0)}toString(){return[this.language,this.script,this.region,this.variant].filter(e=>e!==void 0).join("-")}clearVariants(){this.variant=void 0}clearRegion(){this.region=void 0}addLikelySubtags(){const e=rl(this.toString().toLowerCase());return e?(this.language=e.language,this.script=e.script,this.region=e.region,this.variant=e.variant,!0):!1}}const yr={ar:"ar-arab-eg","az-arab":"az-arab-ir","az-ir":"az-arab-ir",be:"be-cyrl-by",da:"da-latn-dk",el:"el-grek-gr",en:"en-latn-us",fa:"fa-arab-ir",ja:"ja-jpan-jp",ko:"ko-kore-kr",pt:"pt-latn-br",sr:"sr-cyrl-rs","sr-ru":"sr-latn-ru",sv:"sv-latn-se",ta:"ta-taml-in",uk:"uk-cyrl-ua",zh:"zh-hans-cn","zh-hant":"zh-hant-tw","zh-hk":"zh-hant-hk","zh-mo":"zh-hant-mo","zh-tw":"zh-hant-tw","zh-gb":"zh-hant-gb","zh-us":"zh-hant-us"},nl=["az","bg","cs","de","es","fi","fr","hu","it","lt","lv","nl","pl","ro","ru"];function rl(s){if(Object.prototype.hasOwnProperty.call(yr,s))return new rt(yr[s]);const e=new rt(s);return e.language&&nl.includes(e.language)?(e.region=e.language.toUpperCase(),e):null}function ll(s,e,r){const t=new Set,a=new Map;for(let p of e)new rt(p).isWellFormed&&a.set(p,new rt(p));e:for(const p of s){const x=p.toLowerCase(),g=new rt(x);if(g.language!==void 0){for(const m of a.keys())if(x===m.toLowerCase()){if(t.add(m),a.delete(m),r==="lookup")return Array.from(t);if(r==="filtering")continue;continue e}for(const[m,E]of a.entries())if(E.matches(g,!0,!1)){if(t.add(m),a.delete(m),r==="lookup")return Array.from(t);if(r==="filtering")continue;continue e}if(g.addLikelySubtags()){for(const[m,E]of a.entries())if(E.matches(g,!0,!1)){if(t.add(m),a.delete(m),r==="lookup")return Array.from(t);if(r==="filtering")continue;continue e}}g.clearVariants();for(const[m,E]of a.entries())if(E.matches(g,!0,!0)){if(t.add(m),a.delete(m),r==="lookup")return Array.from(t);if(r==="filtering")continue;continue e}if(g.clearRegion(),g.addLikelySubtags()){for(const[m,E]of a.entries())if(E.matches(g,!0,!1)){if(t.add(m),a.delete(m),r==="lookup")return Array.from(t);if(r==="filtering")continue;continue e}}g.clearRegion();for(const[m,E]of a.entries())if(E.matches(g,!0,!0)){if(t.add(m),a.delete(m),r==="lookup")return Array.from(t);if(r==="filtering")continue;continue e}}}return Array.from(t)}function ol(s,e,{strategy:r="filtering",defaultLocale:t}={}){const a=ll(Array.from(s??[]).map(String),Array.from(e??[]).map(String),r);if(r==="lookup"){if(t===void 0)throw new Error("defaultLocale cannot be undefined for strategy `lookup`");a.length===0&&a.push(t)}else t&&!a.includes(t)&&a.push(t);return a}const Ar=`hello = Hello, world!
`,Dr=`hello = Hallo Welt!
`,xr=`hello = Salut le monde !
`;function al(s){let e,r;return e=new me({props:{id:"hello"}}),{c(){F(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){L(e,t,a),r=!0},p:I,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function sl(s){let e,r;return e=new Ke({props:{bundles:s[1](s[0]?[s[0]]:navigator.languages),$$slots:{default:[al]},$$scope:{ctx:s}}}),{c(){F(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){L(e,t,a),r=!0},p(t,[a]){const p={};a&1&&(p.bundles=t[1](t[0]?[t[0]]:navigator.languages)),a&16&&(p.$$scope={dirty:a,ctx:t}),e.$set(p)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}const ul="en";function il(s,e,r){let{selectedLocale:t=""}=e;const a={en:new pe(Ar),fr:new pe(xr),de:new pe(Dr)},p=Object.keys(a);function x(g){return ol(g,p,{defaultLocale:ul,strategy:"lookup"}).map(E=>{const b=new Ne(E);return b.addResource(a[E]),b})}return s.$$set=g=>{"selectedLocale"in g&&r(0,t=g.selectedLocale)},[t,x]}let fl=class extends S{constructor(e){super(),R(this,e,il,sl,C,{selectedLocale:0})}};const cl=`<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent';
	import { negotiateLanguages } from '@fluent/langneg';
	import translationsEn from './en.ftl?raw';
	import translationsDe from './de.ftl?raw';
	import translationsFr from './fr.ftl?raw';

	// this could be stored in a user profile or browser localStorage
	export let selectedLocale = '';

	const defaultLocale = 'en';
	const resources = {
		en: new FluentResource(translationsEn),
		fr: new FluentResource(translationsFr),
		de: new FluentResource(translationsDe)
	};
	const supportedLocales = Object.keys(resources);

	function generateBundles(userLocales) {
		// Choose locales that are best for the user.
		const selectedLocales = negotiateLanguages(userLocales, supportedLocales, {
			defaultLocale,
			strategy: 'lookup'
		});
		// prepare fluent bundles
		return selectedLocales.map((locale) => {
			const bundle = new FluentBundle(locale);
			bundle.addResource(resources[locale]);
			return bundle;
		});
	}
<\/script>

<FluentProvider bundles={generateBundles(selectedLocale ? [selectedLocale] : navigator.languages)}>
	<Localized id="hello" />
</FluentProvider>
`;function dl(s){let e,r,t,a,p,x,g,m,E,b,z,O,T,W,$e,G,V;return{c(){e=f("dl"),r=f("dt"),t=f("label"),a=u("selectedLocale"),p=w(),x=f("dd"),g=f("select"),m=f("option"),E=u("auto"),b=f("option"),z=u("de"),O=f("option"),T=u("en"),W=f("option"),$e=u("fr"),this.h()},l(H){e=c(H,"DL",{slot:!0,class:!0});var Y=d(e);r=c(Y,"DT",{});var K=d(r);t=c(K,"LABEL",{for:!0});var ge=d(t);a=i(ge,"selectedLocale"),ge.forEach(o),p=_(K),K.forEach(o),x=c(Y,"DD",{});var M=d(x);g=c(M,"SELECT",{id:!0});var B=d(g);m=c(B,"OPTION",{});var ze=d(m);E=i(ze,"auto"),ze.forEach(o),b=c(B,"OPTION",{});var he=d(b);z=i(he,"de"),he.forEach(o),O=c(B,"OPTION",{});var N=d(O);T=i(N,"en"),N.forEach(o),W=c(B,"OPTION",{});var Oe=d(W);$e=i(Oe,"fr"),Oe.forEach(o),B.forEach(o),M.forEach(o),Y.forEach(o),this.h()},h(){v(t,"for","selected-locale"),m.__value="",m.value=m.__value,b.__value="de",b.value=b.__value,O.__value="en",O.value=O.__value,W.__value="fr",W.value=W.__value,v(g,"id","selected-locale"),s[0].selectedLocale===void 0&&Sr(()=>s[1].call(g)),v(e,"slot","controls"),v(e,"class","svelte-74ye1h")},m(H,Y){h(H,e,Y),l(e,r),l(r,t),l(t,a),l(r,p),l(e,x),l(x,g),l(g,m),l(m,E),l(g,b),l(b,z),l(g,O),l(O,T),l(g,W),l(W,$e),Er(g,s[0].selectedLocale),G||(V=Rr(g,"change",s[1]),G=!0)},p(H,Y){Y&1&&Er(g,H[0].selectedLocale)},d(H){H&&o(e),G=!1,V()}}}function pl(s){let e,r;return e=new Me({props:{sources:{"App.svelte":cl,"en.ftl":Ar,"fr.ftl":xr,"de.ftl":Dr},component:fl,componentArgs:s[0],$$slots:{controls:[dl]},$$scope:{ctx:s}}}),{c(){F(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){L(e,t,a),r=!0},p(t,[a]){const p={};a&1&&(p.componentArgs=t[0]),a&5&&(p.$$scope={dirty:a,ctx:t}),e.$set(p)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function ml(s,e,r){const t={selectedLocale:""};function a(){t.selectedLocale=Cr(this),r(0,t)}return[t,a]}let $l=class extends S{constructor(e){super(),R(this,e,ml,pl,C,{})}};const zr=`hello = Hello, { $name }!
`;function gl(s){let e,r;return e=new me({props:{id:"hello",args:{name:"everyone"}}}),{c(){F(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){L(e,t,a),r=!0},p:I,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function hl(s){let e,r;return e=new Ke({props:{bundles:[s[0]],$$slots:{default:[gl]},$$scope:{ctx:s}}}),{c(){F(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){L(e,t,a),r=!0},p(t,[a]){const p={};a&4&&(p.$$scope={dirty:a,ctx:t}),e.$set(p)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function vl(s){const e=new pe(zr),r=new Ne("en");return r.addResource(e),[r]}let bl=class extends S{constructor(e){super(),R(this,e,vl,hl,C,{})}};const wl=`<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent';
	import translationsEn from './en.ftl?raw';

	const resource = new FluentResource(translationsEn);
	const bundle = new FluentBundle('en');
	bundle.addResource(resource);
<\/script>

<FluentProvider bundles={[bundle]}>
	<Localized id="hello" args={{ name: 'everyone' }} />
</FluentProvider>
`;function _l(s){let e,r;return e=new Me({props:{sources:{"App.svelte":wl,"en.ftl":zr},component:bl}}),{c(){F(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){L(e,t,a),r=!0},p:I,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}let El=class extends S{constructor(e){super(),R(this,e,null,_l,C,{})}};const Or=`dpi-ratio = Your DPI ratio is { NUMBER($ratio, minimumFractionDigits: 2) }
balance = Your account balance is { $balance }
today-is = Today is { DATETIME($date, month: "long", year: "numeric", day: "numeric") }
`;function Fl(s){let e,r,t,a,p,x,g,m,E;return r=new me({props:{id:"dpi-ratio",args:{ratio:16/9}}}),p=new me({props:{id:"balance",args:{balance:new Lr(1234.56,{style:"currency",currency:"USD"})}}}),m=new me({props:{id:"today-is",args:{date:new Date}}}),{c(){e=f("div"),F(r.$$.fragment),t=w(),a=f("div"),F(p.$$.fragment),x=w(),g=f("div"),F(m.$$.fragment)},l(b){e=c(b,"DIV",{});var z=d(e);y(r.$$.fragment,z),z.forEach(o),t=_(b),a=c(b,"DIV",{});var O=d(a);y(p.$$.fragment,O),O.forEach(o),x=_(b),g=c(b,"DIV",{});var T=d(g);y(m.$$.fragment,T),T.forEach(o)},m(b,z){h(b,e,z),L(r,e,null),h(b,t,z),h(b,a,z),L(p,a,null),h(b,x,z),h(b,g,z),L(m,g,null),E=!0},p:I,i(b){E||(k(r.$$.fragment,b),k(p.$$.fragment,b),k(m.$$.fragment,b),E=!0)},o(b){A(r.$$.fragment,b),A(p.$$.fragment,b),A(m.$$.fragment,b),E=!1},d(b){b&&o(e),D(r),b&&o(t),b&&o(a),D(p),b&&o(x),b&&o(g),D(m)}}}function yl(s){let e,r;return e=new Ke({props:{bundles:[s[0]],$$slots:{default:[Fl]},$$scope:{ctx:s}}}),{c(){F(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){L(e,t,a),r=!0},p(t,[a]){const p={};a&4&&(p.$$scope={dirty:a,ctx:t}),e.$set(p)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function Ll(s){const e=new pe(Or),r=new Ne("en");return r.addResource(e),[r]}let kl=class extends S{constructor(e){super(),R(this,e,Ll,yl,C,{})}};const Al=`<script>
	import { FluentBundle, FluentNumber, FluentResource } from '@fluent/bundle';
	import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent';
	import translationsEn from './en.ftl?raw';

	const resource = new FluentResource(translationsEn);
	const bundle = new FluentBundle('en');
	bundle.addResource(resource);
<\/script>

<FluentProvider bundles={[bundle]}>
	<div><Localized id="dpi-ratio" args={{ ratio: 16 / 9 }} /></div>
	<div>
		<Localized
			id="balance"
			args={{ balance: new FluentNumber(1234.56, { style: 'currency', currency: 'USD' }) }}
		/>
	</div>
	<div><Localized id="today-is" args={{ date: new Date() }} /></div>
</FluentProvider>
`;function Dl(s){let e,r;return e=new Me({props:{sources:{"App.svelte":Al,"en.ftl":Or},component:kl}}),{c(){F(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){L(e,t,a),r=!0},p:I,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}let xl=class extends S{constructor(e){super(),R(this,e,null,Dl,C,{})}};const Pr=`weekday-is = Weekday { $weekday } is { WEEKDAY($weekday) }
`;function zl(s){let e,r;return e=new me({props:{id:"weekday-is",args:{weekday:2}}}),{c(){F(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){L(e,t,a),r=!0},p:I,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function Ol(s){let e,r;return e=new Ke({props:{bundles:[s[0]],$$slots:{default:[zl]},$$scope:{ctx:s}}}),{c(){F(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){L(e,t,a),r=!0},p(t,[a]){const p={};a&16&&(p.$$scope={dirty:a,ctx:t}),e.$set(p)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function Yn(s,e){const r=Object.create(null);for(const[t,a]of Object.entries(s))e.includes(t)&&(r[t]=a.valueOf());return r}function Pl(s){const e=["weekday"];function r(p,x){const g=p[0];if(g instanceof Fr)return new Fr(`WEEKDAY(${g.valueOf()})`);if(g instanceof Wn)return new Wn(g.valueOf(),{...Yn(g.opts,e),...Yn(x,e)});if(g instanceof Lr){const m=new Date(Date.now()),E=g.valueOf()-m.getDay();return m.setDate(m.getDate()+E),new Wn(m.valueOf(),{weekday:"long",...Yn(x,e)})}throw new TypeError("Invalid argument to WEEKDAY")}const t=new pe(Pr),a=new Ne("en",{functions:{WEEKDAY:r}});return a.addResource(t),[a]}class Sl extends S{constructor(e){super(),R(this,e,Pl,Ol,C,{})}}const Rl=`<script>
	import {
		FluentBundle,
		FluentDateTime,
		FluentNone,
		FluentNumber,
		FluentResource
	} from '@fluent/bundle';
	import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent';
	import translationsEn from './en.ftl?raw';

	function values(opts, allowed) {
		const unwrapped = Object.create(null);
		for (const [name, opt] of Object.entries(opts)) {
			if (allowed.includes(name)) {
				unwrapped[name] = opt.valueOf();
			}
		}
		return unwrapped;
	}

	const WEEKDAY_ALLOWED = ['weekday'];

	function WEEKDAY(args, opts) {
		const arg = args[0];

		if (arg instanceof FluentNone) {
			return new FluentNone(\`WEEKDAY(\${arg.valueOf()})\`);
		}

		if (arg instanceof FluentDateTime) {
			return new FluentDateTime(arg.valueOf(), {
				...values(arg.opts, WEEKDAY_ALLOWED),
				...values(opts, WEEKDAY_ALLOWED)
			});
		}

		if (arg instanceof FluentNumber) {
			const date = new Date(Date.now());
			const offset = arg.valueOf() - date.getDay();
			date.setDate(date.getDate() + offset);
			return new FluentDateTime(date.valueOf(), {
				weekday: 'long',
				...values(opts, WEEKDAY_ALLOWED)
			});
		}

		throw new TypeError('Invalid argument to WEEKDAY');
	}

	const resource = new FluentResource(translationsEn);
	const bundle = new FluentBundle('en', { functions: { WEEKDAY } });
	bundle.addResource(resource);
<\/script>

<FluentProvider bundles={[bundle]}>
	<Localized id="weekday-is" args={{ weekday: 2 }} />
</FluentProvider>
`;function Cl(s){let e,r;return e=new Me({props:{sources:{"App.svelte":Rl,"en.ftl":Pr},component:Sl}}),{c(){F(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){L(e,t,a),r=!0},p:I,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}class Tl extends S{constructor(e){super(),R(this,e,null,Cl,C,{})}}function Wl(s){let e,r,t,a,p,x,g,m,E,b,z,O,T,W,$e,G,V,H,Y,K,ge,M,B,ze,he,N,Oe,Ue,Ot,Pt,lt,Z,ve,St,qe,Rt,Ct,Tt,be,J,Wt,ee,Yt,Bt,Ve,jt,It,Ht,Q,Kt,te,Nt,Mt,ne,Ut,qt,ot,we,at,_e,Pe,Vt,st,Se,Jt,ut,re,Ee,Qt,Je,Xt,Gt,Zt,X,en,le,tn,nn,Qe,rn,ln,it,Fe,ft,ye,Re,on,ct,P,an,oe,sn,un,Xe,fn,cn,Ge,dn,pn,Ze,mn,$n,dt,Le,pt,ke,Ce,gn,mt,ae,hn,se,vn,bn,$t,U,wn,ue,_n,En,et,Fn,yn,gt,Te,Ln,ht,Ae,vt,De,We,kn,bt,j,An,ie,Dn,xn,tt,zn,On,nt,Pn,Sn,wt,fe,Rn,ce,Cn,Tn,_t,xe,Et;return K=new Kr({}),we=new Qr({}),Fe=new $l({}),Le=new El({}),Ae=new xl({}),xe=new Tl({}),{c(){e=f("h1"),r=u("Tutorial"),t=w(),a=f("h2"),p=f("a"),x=u("First steps"),g=w(),m=f("p"),E=u("You need to provide your translations to "),b=f("code"),z=u("svelte-fluent"),O=u(" by adding the "),T=f("code"),W=u("FluentProvider"),$e=u(" component in your component hierarchy."),G=w(),V=f("p"),H=u("In the most basic setup those translations can be defined directly in the code like this:"),Y=w(),F(K.$$.fragment),ge=w(),M=f("h2"),B=f("a"),ze=u("Load translations from files"),he=w(),N=f("p"),Oe=u(`Managing translations directly in the code can get messy.
A better way is to load translations from `),Ue=f("code"),Ot=u(".ftl"),Pt=u(" files."),lt=w(),Z=f("blockquote"),ve=f("p"),St=u("The bundler must support importing "),qe=f("code"),Rt=u(".ftl"),Ct=u(" files as strings:"),Tt=w(),be=f("ul"),J=f("li"),Wt=u("For "),ee=f("a"),Yt=u("Vite"),Bt=u(" you can add "),Ve=f("code"),jt=u("?raw"),It=u(" to your import like in the example below."),Ht=w(),Q=f("li"),Kt=u("For "),te=f("a"),Nt=u("Rollup"),Mt=u(" you can add "),ne=f("a"),Ut=u("rollup-plugin-string"),qt=u(`
to your configuration.`),ot=w(),F(we.$$.fragment),at=w(),_e=f("h2"),Pe=f("a"),Vt=u("Multiple languages"),st=w(),Se=f("p"),Jt=u(`With the basics in place we can now extend this to multiple languages.
This example shows selection of the desired language and provides a fallback to
the auto-detected language from the browser.`),ut=w(),re=f("blockquote"),Ee=f("p"),Qt=u(`This example will fail when used with server-side rendering (SSR) because during
SSR the component cannot use browser-only globals like `),Je=f("code"),Xt=u("navigator.languages"),Gt=u("."),Zt=w(),X=f("p"),en=u(`As an alternative that works in SSR you can parse the
`),le=f("a"),tn=u("HTTP Accept-Language header"),nn=u(`
and replace `),Qe=f("code"),rn=u("navigator.languages"),ln=u(" with the resulting list of locale identifiers."),it=w(),F(Fe.$$.fragment),ft=w(),ye=f("h2"),Re=f("a"),on=u("Interpolation"),ct=w(),P=f("p"),an=u(`You can insert variables into your translated text by using
`),oe=f("a"),sn=u("Fluent Placeables"),un=u(`.
Values for those variables are provided via the `),Xe=f("code"),fn=u("args"),cn=u(" prop of the "),Ge=f("code"),dn=u("Localized"),pn=u(" and "),Ze=f("code"),mn=u("Overlay"),$n=u(" components."),dt=w(),F(Le.$$.fragment),pt=w(),ke=f("h2"),Ce=f("a"),gn=u("Interpolation formatting"),mt=w(),ae=f("p"),hn=u(`Fluent outputs interpolations in a human readable format appropriate to the currently used locale.
You can customize the formatting by using `),se=f("a"),vn=u("Fluent Functions"),bn=u("."),$t=w(),U=f("p"),wn=u(`Formatting parameters listed in “Parameters” in the
`),ue=f("a"),_n=u("Fluent Functions"),En=u(" documentation can be set both in the "),et=f("code"),Fn=u(".ftl"),yn=u(`
files or in the JS source.`),gt=w(),Te=f("p"),Ln=u("Parameters listed in “Developer parameters” can only be set in JS code."),ht=w(),F(Ae.$$.fragment),vt=w(),De=f("h2"),We=f("a"),kn=u("Custom functions"),bt=w(),j=f("p"),An=u("You can extend the default "),ie=f("a"),Dn=u("Fluent Functions"),xn=u(`
with custom formatting functions by adding them to the `),tt=f("code"),zn=u("functions"),On=u(" option of "),nt=f("code"),Pn=u("FluentBundle"),Sn=u("."),wt=w(),fe=f("p"),Rn=u(`You can also check out the
`),ce=f("a"),Cn=u("code of the built-in Fluent Functions"),Tn=u(`
for more examples.`),_t=w(),F(xe.$$.fragment),this.h()},l(n){e=c(n,"H1",{id:!0});var $=d(e);r=i($,"Tutorial"),$.forEach(o),t=_(n),a=c(n,"H2",{id:!0});var Bn=d(a);p=c(Bn,"A",{href:!0});var jn=d(p);x=i(jn,"First steps"),jn.forEach(o),Bn.forEach(o),g=_(n),m=c(n,"P",{});var Ye=d(m);E=i(Ye,"You need to provide your translations to "),b=c(Ye,"CODE",{});var In=d(b);z=i(In,"svelte-fluent"),In.forEach(o),O=i(Ye," by adding the "),T=c(Ye,"CODE",{});var Hn=d(T);W=i(Hn,"FluentProvider"),Hn.forEach(o),$e=i(Ye," component in your component hierarchy."),Ye.forEach(o),G=_(n),V=c(n,"P",{});var Kn=d(V);H=i(Kn,"In the most basic setup those translations can be defined directly in the code like this:"),Kn.forEach(o),Y=_(n),y(K.$$.fragment,n),ge=_(n),M=c(n,"H2",{id:!0});var Nn=d(M);B=c(Nn,"A",{href:!0});var Mn=d(B);ze=i(Mn,"Load translations from files"),Mn.forEach(o),Nn.forEach(o),he=_(n),N=c(n,"P",{});var Ft=d(N);Oe=i(Ft,`Managing translations directly in the code can get messy.
A better way is to load translations from `),Ue=c(Ft,"CODE",{});var Un=d(Ue);Ot=i(Un,".ftl"),Un.forEach(o),Pt=i(Ft," files."),Ft.forEach(o),lt=_(n),Z=c(n,"BLOCKQUOTE",{});var yt=d(Z);ve=c(yt,"P",{});var Lt=d(ve);St=i(Lt,"The bundler must support importing "),qe=c(Lt,"CODE",{});var qn=d(qe);Rt=i(qn,".ftl"),qn.forEach(o),Ct=i(Lt," files as strings:"),Lt.forEach(o),Tt=_(yt),be=c(yt,"UL",{});var kt=d(be);J=c(kt,"LI",{});var Be=d(J);Wt=i(Be,"For "),ee=c(Be,"A",{href:!0,rel:!0,target:!0});var Vn=d(ee);Yt=i(Vn,"Vite"),Vn.forEach(o),Bt=i(Be," you can add "),Ve=c(Be,"CODE",{});var Jn=d(Ve);jt=i(Jn,"?raw"),Jn.forEach(o),It=i(Be," to your import like in the example below."),Be.forEach(o),Ht=_(kt),Q=c(kt,"LI",{});var je=d(Q);Kt=i(je,"For "),te=c(je,"A",{href:!0,rel:!0,target:!0});var Qn=d(te);Nt=i(Qn,"Rollup"),Qn.forEach(o),Mt=i(je," you can add "),ne=c(je,"A",{href:!0,rel:!0,target:!0});var Xn=d(ne);Ut=i(Xn,"rollup-plugin-string"),Xn.forEach(o),qt=i(je,`
to your configuration.`),je.forEach(o),kt.forEach(o),yt.forEach(o),ot=_(n),y(we.$$.fragment,n),at=_(n),_e=c(n,"H2",{id:!0});var Gn=d(_e);Pe=c(Gn,"A",{href:!0});var Zn=d(Pe);Vt=i(Zn,"Multiple languages"),Zn.forEach(o),Gn.forEach(o),st=_(n),Se=c(n,"P",{});var er=d(Se);Jt=i(er,`With the basics in place we can now extend this to multiple languages.
This example shows selection of the desired language and provides a fallback to
the auto-detected language from the browser.`),er.forEach(o),ut=_(n),re=c(n,"BLOCKQUOTE",{});var At=d(re);Ee=c(At,"P",{});var Dt=d(Ee);Qt=i(Dt,`This example will fail when used with server-side rendering (SSR) because during
SSR the component cannot use browser-only globals like `),Je=c(Dt,"CODE",{});var tr=d(Je);Xt=i(tr,"navigator.languages"),tr.forEach(o),Gt=i(Dt,"."),Dt.forEach(o),Zt=_(At),X=c(At,"P",{});var Ie=d(X);en=i(Ie,`As an alternative that works in SSR you can parse the
`),le=c(Ie,"A",{href:!0,rel:!0,target:!0});var nr=d(le);tn=i(nr,"HTTP Accept-Language header"),nr.forEach(o),nn=i(Ie,`
and replace `),Qe=c(Ie,"CODE",{});var rr=d(Qe);rn=i(rr,"navigator.languages"),rr.forEach(o),ln=i(Ie," with the resulting list of locale identifiers."),Ie.forEach(o),At.forEach(o),it=_(n),y(Fe.$$.fragment,n),ft=_(n),ye=c(n,"H2",{id:!0});var lr=d(ye);Re=c(lr,"A",{href:!0});var or=d(Re);on=i(or,"Interpolation"),or.forEach(o),lr.forEach(o),ct=_(n),P=c(n,"P",{});var q=d(P);an=i(q,`You can insert variables into your translated text by using
`),oe=c(q,"A",{href:!0,rel:!0,target:!0});var ar=d(oe);sn=i(ar,"Fluent Placeables"),ar.forEach(o),un=i(q,`.
Values for those variables are provided via the `),Xe=c(q,"CODE",{});var sr=d(Xe);fn=i(sr,"args"),sr.forEach(o),cn=i(q," prop of the "),Ge=c(q,"CODE",{});var ur=d(Ge);dn=i(ur,"Localized"),ur.forEach(o),pn=i(q," and "),Ze=c(q,"CODE",{});var ir=d(Ze);mn=i(ir,"Overlay"),ir.forEach(o),$n=i(q," components."),q.forEach(o),dt=_(n),y(Le.$$.fragment,n),pt=_(n),ke=c(n,"H2",{id:!0});var fr=d(ke);Ce=c(fr,"A",{href:!0});var cr=d(Ce);gn=i(cr,"Interpolation formatting"),cr.forEach(o),fr.forEach(o),mt=_(n),ae=c(n,"P",{});var xt=d(ae);hn=i(xt,`Fluent outputs interpolations in a human readable format appropriate to the currently used locale.
You can customize the formatting by using `),se=c(xt,"A",{href:!0,rel:!0,target:!0});var dr=d(se);vn=i(dr,"Fluent Functions"),dr.forEach(o),bn=i(xt,"."),xt.forEach(o),$t=_(n),U=c(n,"P",{});var He=d(U);wn=i(He,`Formatting parameters listed in “Parameters” in the
`),ue=c(He,"A",{href:!0,rel:!0,target:!0});var pr=d(ue);_n=i(pr,"Fluent Functions"),pr.forEach(o),En=i(He," documentation can be set both in the "),et=c(He,"CODE",{});var mr=d(et);Fn=i(mr,".ftl"),mr.forEach(o),yn=i(He,`
files or in the JS source.`),He.forEach(o),gt=_(n),Te=c(n,"P",{});var $r=d(Te);Ln=i($r,"Parameters listed in “Developer parameters” can only be set in JS code."),$r.forEach(o),ht=_(n),y(Ae.$$.fragment,n),vt=_(n),De=c(n,"H2",{id:!0});var gr=d(De);We=c(gr,"A",{href:!0});var hr=d(We);kn=i(hr,"Custom functions"),hr.forEach(o),gr.forEach(o),bt=_(n),j=c(n,"P",{});var de=d(j);An=i(de,"You can extend the default "),ie=c(de,"A",{href:!0,rel:!0,target:!0});var vr=d(ie);Dn=i(vr,"Fluent Functions"),vr.forEach(o),xn=i(de,`
with custom formatting functions by adding them to the `),tt=c(de,"CODE",{});var br=d(tt);zn=i(br,"functions"),br.forEach(o),On=i(de," option of "),nt=c(de,"CODE",{});var wr=d(nt);Pn=i(wr,"FluentBundle"),wr.forEach(o),Sn=i(de,"."),de.forEach(o),wt=_(n),fe=c(n,"P",{});var zt=d(fe);Rn=i(zt,`You can also check out the
`),ce=c(zt,"A",{href:!0,rel:!0,target:!0});var _r=d(ce);Cn=i(_r,"code of the built-in Fluent Functions"),_r.forEach(o),Tn=i(zt,`
for more examples.`),zt.forEach(o),_t=_(n),y(xe.$$.fragment,n),this.h()},h(){v(e,"id","tutorial"),v(p,"href","#first-steps"),v(a,"id","first-steps"),v(B,"href","#load-translations-from-files"),v(M,"id","load-translations-from-files"),v(ee,"href","https://vitejs.dev/"),v(ee,"rel","noopener noreferrer"),v(ee,"target","_blank"),v(te,"href","https://rollupjs.org/"),v(te,"rel","noopener noreferrer"),v(te,"target","_blank"),v(ne,"href","https://www.npmjs.com/package/rollup-plugin-string"),v(ne,"rel","noopener noreferrer"),v(ne,"target","_blank"),v(Pe,"href","#multiple-languages"),v(_e,"id","multiple-languages"),v(le,"href","https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language"),v(le,"rel","noopener noreferrer"),v(le,"target","_blank"),v(Re,"href","#interpolation"),v(ye,"id","interpolation"),v(oe,"href","https://projectfluent.org/fluent/guide/placeables.html"),v(oe,"rel","noopener noreferrer"),v(oe,"target","_blank"),v(Ce,"href","#interpolation-formatting"),v(ke,"id","interpolation-formatting"),v(se,"href","https://projectfluent.org/fluent/guide/functions.html"),v(se,"rel","noopener noreferrer"),v(se,"target","_blank"),v(ue,"href","https://projectfluent.org/fluent/guide/functions.html"),v(ue,"rel","noopener noreferrer"),v(ue,"target","_blank"),v(We,"href","#custom-functions"),v(De,"id","custom-functions"),v(ie,"href","https://projectfluent.org/fluent/guide/functions.html"),v(ie,"rel","noopener noreferrer"),v(ie,"target","_blank"),v(ce,"href","https://github.com/projectfluent/fluent.js/blob/master/fluent-bundle/src/builtins.ts"),v(ce,"rel","noopener noreferrer"),v(ce,"target","_blank")},m(n,$){h(n,e,$),l(e,r),h(n,t,$),h(n,a,$),l(a,p),l(p,x),h(n,g,$),h(n,m,$),l(m,E),l(m,b),l(b,z),l(m,O),l(m,T),l(T,W),l(m,$e),h(n,G,$),h(n,V,$),l(V,H),h(n,Y,$),L(K,n,$),h(n,ge,$),h(n,M,$),l(M,B),l(B,ze),h(n,he,$),h(n,N,$),l(N,Oe),l(N,Ue),l(Ue,Ot),l(N,Pt),h(n,lt,$),h(n,Z,$),l(Z,ve),l(ve,St),l(ve,qe),l(qe,Rt),l(ve,Ct),l(Z,Tt),l(Z,be),l(be,J),l(J,Wt),l(J,ee),l(ee,Yt),l(J,Bt),l(J,Ve),l(Ve,jt),l(J,It),l(be,Ht),l(be,Q),l(Q,Kt),l(Q,te),l(te,Nt),l(Q,Mt),l(Q,ne),l(ne,Ut),l(Q,qt),h(n,ot,$),L(we,n,$),h(n,at,$),h(n,_e,$),l(_e,Pe),l(Pe,Vt),h(n,st,$),h(n,Se,$),l(Se,Jt),h(n,ut,$),h(n,re,$),l(re,Ee),l(Ee,Qt),l(Ee,Je),l(Je,Xt),l(Ee,Gt),l(re,Zt),l(re,X),l(X,en),l(X,le),l(le,tn),l(X,nn),l(X,Qe),l(Qe,rn),l(X,ln),h(n,it,$),L(Fe,n,$),h(n,ft,$),h(n,ye,$),l(ye,Re),l(Re,on),h(n,ct,$),h(n,P,$),l(P,an),l(P,oe),l(oe,sn),l(P,un),l(P,Xe),l(Xe,fn),l(P,cn),l(P,Ge),l(Ge,dn),l(P,pn),l(P,Ze),l(Ze,mn),l(P,$n),h(n,dt,$),L(Le,n,$),h(n,pt,$),h(n,ke,$),l(ke,Ce),l(Ce,gn),h(n,mt,$),h(n,ae,$),l(ae,hn),l(ae,se),l(se,vn),l(ae,bn),h(n,$t,$),h(n,U,$),l(U,wn),l(U,ue),l(ue,_n),l(U,En),l(U,et),l(et,Fn),l(U,yn),h(n,gt,$),h(n,Te,$),l(Te,Ln),h(n,ht,$),L(Ae,n,$),h(n,vt,$),h(n,De,$),l(De,We),l(We,kn),h(n,bt,$),h(n,j,$),l(j,An),l(j,ie),l(ie,Dn),l(j,xn),l(j,tt),l(tt,zn),l(j,On),l(j,nt),l(nt,Pn),l(j,Sn),h(n,wt,$),h(n,fe,$),l(fe,Rn),l(fe,ce),l(ce,Cn),l(fe,Tn),h(n,_t,$),L(xe,n,$),Et=!0},p:I,i(n){Et||(k(K.$$.fragment,n),k(we.$$.fragment,n),k(Fe.$$.fragment,n),k(Le.$$.fragment,n),k(Ae.$$.fragment,n),k(xe.$$.fragment,n),Et=!0)},o(n){A(K.$$.fragment,n),A(we.$$.fragment,n),A(Fe.$$.fragment,n),A(Le.$$.fragment,n),A(Ae.$$.fragment,n),A(xe.$$.fragment,n),Et=!1},d(n){n&&o(e),n&&o(t),n&&o(a),n&&o(g),n&&o(m),n&&o(G),n&&o(V),n&&o(Y),D(K,n),n&&o(ge),n&&o(M),n&&o(he),n&&o(N),n&&o(lt),n&&o(Z),n&&o(ot),D(we,n),n&&o(at),n&&o(_e),n&&o(st),n&&o(Se),n&&o(ut),n&&o(re),n&&o(it),D(Fe,n),n&&o(ft),n&&o(ye),n&&o(ct),n&&o(P),n&&o(dt),D(Le,n),n&&o(pt),n&&o(ke),n&&o(mt),n&&o(ae),n&&o($t),n&&o(U),n&&o(gt),n&&o(Te),n&&o(ht),D(Ae,n),n&&o(vt),n&&o(De),n&&o(bt),n&&o(j),n&&o(wt),n&&o(fe),n&&o(_t),D(xe,n)}}}const Ql=[{rank:1,text:"Tutorial",id:"tutorial"},{rank:2,text:"First steps",id:"first-steps"},{rank:2,text:"Load translations from files",id:"load-translations-from-files"},{rank:2,text:"Multiple languages",id:"multiple-languages"},{rank:2,text:"Interpolation",id:"interpolation"},{rank:2,text:"Interpolation formatting",id:"interpolation-formatting"},{rank:2,text:"Custom functions",id:"custom-functions"}];class Xl extends S{constructor(e){super(),R(this,e,null,Wl,C,{})}}export{Xl as default,Ql as headings};
