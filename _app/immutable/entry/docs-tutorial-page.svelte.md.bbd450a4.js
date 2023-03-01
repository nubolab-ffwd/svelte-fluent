import{S,b as R,s as C,C as F,D as L,E as y,j as k,g as A,F as D,n as I,m as f,w as u,c as w,p as c,q as d,x as i,k as o,d as _,u as v,X as Sr,f as h,M as l,Y as Er,Z as Rr,_ as Cr}from"../chunks/index.2dafc823.js";import{F as Ke,a as Me,b as pe,L as me,E as Ne,c as yr,d as Fr,e as Wn}from"../chunks/Overlay.svelte_svelte_type_style_lang.154f69c4.js";function Tr(s){let e,r;return e=new me({props:{id:"hello"}}),{c(){F(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){y(e,t,a),r=!0},p:I,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function Wr(s){let e,r;return e=new Ke({props:{bundles:[s[0]],$$slots:{default:[Tr]},$$scope:{ctx:s}}}),{c(){F(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){y(e,t,a),r=!0},p(t,[a]){const p={};a&2&&(p.$$scope={dirty:a,ctx:t}),e.$set(p)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}const Yr="hello = Hello, world!";function jr(s){const e=new Me("en");return e.addResource(new pe(Yr)),[e]}let Br=class extends S{constructor(e){super(),R(this,e,jr,Wr,C,{})}};const Ir=`<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent';

	const translations = 'hello = Hello, world!';
	const bundle = new FluentBundle('en');
	bundle.addResource(new FluentResource(translations));
<\/script>

<FluentProvider bundles={[bundle]}>
	<Localized id="hello" />
</FluentProvider>
`;function Hr(s){let e,r;return e=new Ne({props:{sources:{"App.svelte":Ir},component:Br}}),{c(){F(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){y(e,t,a),r=!0},p:I,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}let Kr=class extends S{constructor(e){super(),R(this,e,null,Hr,C,{})}};const kr=`hello = Hello, world!
`;function Mr(s){let e,r;return e=new me({props:{id:"hello"}}),{c(){F(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){y(e,t,a),r=!0},p:I,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function Nr(s){let e,r;return e=new Ke({props:{bundles:[s[0]],$$slots:{default:[Mr]},$$scope:{ctx:s}}}),{c(){F(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){y(e,t,a),r=!0},p(t,[a]){const p={};a&4&&(p.$$scope={dirty:a,ctx:t}),e.$set(p)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function qr(s){const e=new pe(kr),r=new Me("en");return r.addResource(e),[r]}let Ur=class extends S{constructor(e){super(),R(this,e,qr,Nr,C,{})}};const Vr=`<script>
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
`;function Jr(s){let e,r;return e=new Ne({props:{sources:{"App.svelte":Vr,"en.ftl":kr},component:Ur}}),{c(){F(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){y(e,t,a),r=!0},p:I,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}let Qr=class extends S{constructor(e){super(),R(this,e,null,Jr,C,{})}};const Xr="([a-z]{2,3}|\\*)",Zr="(?:-([a-z]{4}|\\*))",Gr="(?:-([a-z]{2}|\\*))",el="(?:-(([0-9][a-z0-9]{3}|[a-z0-9]{5,8})|\\*))",tl=new RegExp(`^${Xr}${Zr}?${Gr}?${el}?$`,"i");class rt{constructor(e){const r=tl.exec(e.replace(/_/g,"-"));if(!r){this.isWellFormed=!1;return}let[,t,a,p,x]=r;t&&(this.language=t.toLowerCase()),a&&(this.script=a[0].toUpperCase()+a.slice(1)),p&&(this.region=p.toUpperCase()),this.variant=x,this.isWellFormed=!0}isEqual(e){return this.language===e.language&&this.script===e.script&&this.region===e.region&&this.variant===e.variant}matches(e,r=!1,t=!1){return(this.language===e.language||r&&this.language===void 0||t&&e.language===void 0)&&(this.script===e.script||r&&this.script===void 0||t&&e.script===void 0)&&(this.region===e.region||r&&this.region===void 0||t&&e.region===void 0)&&(this.variant===e.variant||r&&this.variant===void 0||t&&e.variant===void 0)}toString(){return[this.language,this.script,this.region,this.variant].filter(e=>e!==void 0).join("-")}clearVariants(){this.variant=void 0}clearRegion(){this.region=void 0}addLikelySubtags(){const e=rl(this.toString().toLowerCase());return e?(this.language=e.language,this.script=e.script,this.region=e.region,this.variant=e.variant,!0):!1}}const Lr={ar:"ar-arab-eg","az-arab":"az-arab-ir","az-ir":"az-arab-ir",be:"be-cyrl-by",da:"da-latn-dk",el:"el-grek-gr",en:"en-latn-us",fa:"fa-arab-ir",ja:"ja-jpan-jp",ko:"ko-kore-kr",pt:"pt-latn-br",sr:"sr-cyrl-rs","sr-ru":"sr-latn-ru",sv:"sv-latn-se",ta:"ta-taml-in",uk:"uk-cyrl-ua",zh:"zh-hans-cn","zh-hant":"zh-hant-tw","zh-hk":"zh-hant-hk","zh-mo":"zh-hant-mo","zh-tw":"zh-hant-tw","zh-gb":"zh-hant-gb","zh-us":"zh-hant-us"},nl=["az","bg","cs","de","es","fi","fr","hu","it","lt","lv","nl","pl","ro","ru"];function rl(s){if(Object.prototype.hasOwnProperty.call(Lr,s))return new rt(Lr[s]);const e=new rt(s);return e.language&&nl.includes(e.language)?(e.region=e.language.toUpperCase(),e):null}function ll(s,e,r){const t=new Set,a=new Map;for(let p of e)new rt(p).isWellFormed&&a.set(p,new rt(p));e:for(const p of s){const x=p.toLowerCase(),g=new rt(x);if(g.language!==void 0){for(const m of a.keys())if(x===m.toLowerCase()){if(t.add(m),a.delete(m),r==="lookup")return Array.from(t);if(r==="filtering")continue;continue e}for(const[m,E]of a.entries())if(E.matches(g,!0,!1)){if(t.add(m),a.delete(m),r==="lookup")return Array.from(t);if(r==="filtering")continue;continue e}if(g.addLikelySubtags()){for(const[m,E]of a.entries())if(E.matches(g,!0,!1)){if(t.add(m),a.delete(m),r==="lookup")return Array.from(t);if(r==="filtering")continue;continue e}}g.clearVariants();for(const[m,E]of a.entries())if(E.matches(g,!0,!0)){if(t.add(m),a.delete(m),r==="lookup")return Array.from(t);if(r==="filtering")continue;continue e}if(g.clearRegion(),g.addLikelySubtags()){for(const[m,E]of a.entries())if(E.matches(g,!0,!1)){if(t.add(m),a.delete(m),r==="lookup")return Array.from(t);if(r==="filtering")continue;continue e}}g.clearRegion();for(const[m,E]of a.entries())if(E.matches(g,!0,!0)){if(t.add(m),a.delete(m),r==="lookup")return Array.from(t);if(r==="filtering")continue;continue e}}}return Array.from(t)}function ol(s,e,{strategy:r="filtering",defaultLocale:t}={}){const a=ll(Array.from(s??[]).map(String),Array.from(e??[]).map(String),r);if(r==="lookup"){if(t===void 0)throw new Error("defaultLocale cannot be undefined for strategy `lookup`");a.length===0&&a.push(t)}else t&&!a.includes(t)&&a.push(t);return a}const Ar=`hello = Hello, world!
`,Dr=`hello = Hallo Welt!
`,xr=`hello = Salut le monde !
`;function al(s){let e,r;return e=new me({props:{id:"hello"}}),{c(){F(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){y(e,t,a),r=!0},p:I,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function sl(s){let e,r;return e=new Ke({props:{bundles:s[1](s[0]?[s[0]]:navigator.languages),$$slots:{default:[al]},$$scope:{ctx:s}}}),{c(){F(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){y(e,t,a),r=!0},p(t,[a]){const p={};a&1&&(p.bundles=t[1](t[0]?[t[0]]:navigator.languages)),a&16&&(p.$$scope={dirty:a,ctx:t}),e.$set(p)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}const ul="en";function il(s,e,r){let{selectedLocale:t=""}=e;const a={en:new pe(Ar),fr:new pe(xr),de:new pe(Dr)},p=Object.keys(a);function x(g){return ol(g,p,{defaultLocale:ul,strategy:"lookup"}).map(E=>{const b=new Me(E);return b.addResource(a[E]),b})}return s.$$set=g=>{"selectedLocale"in g&&r(0,t=g.selectedLocale)},[t,x]}let fl=class extends S{constructor(e){super(),R(this,e,il,sl,C,{selectedLocale:0})}};const cl=`<script>
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
`;function dl(s){let e,r,t,a,p,x,g,m,E,b,z,O,T,W,$e,Z,V;return{c(){e=f("dl"),r=f("dt"),t=f("label"),a=u("selectedLocale"),p=w(),x=f("dd"),g=f("select"),m=f("option"),E=u("auto"),b=f("option"),z=u("de"),O=f("option"),T=u("en"),W=f("option"),$e=u("fr"),this.h()},l(H){e=c(H,"DL",{slot:!0,class:!0});var Y=d(e);r=c(Y,"DT",{});var K=d(r);t=c(K,"LABEL",{for:!0});var ge=d(t);a=i(ge,"selectedLocale"),ge.forEach(o),p=_(K),K.forEach(o),x=c(Y,"DD",{});var N=d(x);g=c(N,"SELECT",{id:!0});var j=d(g);m=c(j,"OPTION",{});var ze=d(m);E=i(ze,"auto"),ze.forEach(o),b=c(j,"OPTION",{});var he=d(b);z=i(he,"de"),he.forEach(o),O=c(j,"OPTION",{});var M=d(O);T=i(M,"en"),M.forEach(o),W=c(j,"OPTION",{});var Oe=d(W);$e=i(Oe,"fr"),Oe.forEach(o),j.forEach(o),N.forEach(o),Y.forEach(o),this.h()},h(){v(t,"for","selected-locale"),m.__value="",m.value=m.__value,b.__value="de",b.value=b.__value,O.__value="en",O.value=O.__value,W.__value="fr",W.value=W.__value,v(g,"id","selected-locale"),s[0].selectedLocale===void 0&&Sr(()=>s[1].call(g)),v(e,"slot","controls"),v(e,"class","svelte-74ye1h")},m(H,Y){h(H,e,Y),l(e,r),l(r,t),l(t,a),l(r,p),l(e,x),l(x,g),l(g,m),l(m,E),l(g,b),l(b,z),l(g,O),l(O,T),l(g,W),l(W,$e),Er(g,s[0].selectedLocale),Z||(V=Rr(g,"change",s[1]),Z=!0)},p(H,Y){Y&1&&Er(g,H[0].selectedLocale)},d(H){H&&o(e),Z=!1,V()}}}function pl(s){let e,r;return e=new Ne({props:{sources:{"App.svelte":cl,"en.ftl":Ar,"fr.ftl":xr,"de.ftl":Dr},component:fl,componentArgs:s[0],$$slots:{controls:[dl]},$$scope:{ctx:s}}}),{c(){F(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){y(e,t,a),r=!0},p(t,[a]){const p={};a&1&&(p.componentArgs=t[0]),a&5&&(p.$$scope={dirty:a,ctx:t}),e.$set(p)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function ml(s,e,r){const t={selectedLocale:""};function a(){t.selectedLocale=Cr(this),r(0,t)}return[t,a]}let $l=class extends S{constructor(e){super(),R(this,e,ml,pl,C,{})}};const zr=`hello = Hello, { $name }!
`;function gl(s){let e,r;return e=new me({props:{id:"hello",args:{name:"everyone"}}}),{c(){F(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){y(e,t,a),r=!0},p:I,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function hl(s){let e,r;return e=new Ke({props:{bundles:[s[0]],$$slots:{default:[gl]},$$scope:{ctx:s}}}),{c(){F(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){y(e,t,a),r=!0},p(t,[a]){const p={};a&4&&(p.$$scope={dirty:a,ctx:t}),e.$set(p)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function vl(s){const e=new pe(zr),r=new Me("en");return r.addResource(e),[r]}let bl=class extends S{constructor(e){super(),R(this,e,vl,hl,C,{})}};const wl=`<script>
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
`;function _l(s){let e,r;return e=new Ne({props:{sources:{"App.svelte":wl,"en.ftl":zr},component:bl}}),{c(){F(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){y(e,t,a),r=!0},p:I,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}let El=class extends S{constructor(e){super(),R(this,e,null,_l,C,{})}};const Or=`dpi-ratio = Your DPI ratio is { NUMBER($ratio, minimumFractionDigits: 2) }
balance = Your account balance is { $balance }
today-is = Today is { DATETIME($date, month: "long", year: "numeric", day: "numeric") }
`;function Fl(s){let e,r,t,a,p,x,g,m,E;return r=new me({props:{id:"dpi-ratio",args:{ratio:16/9}}}),p=new me({props:{id:"balance",args:{balance:new yr(1234.56,{style:"currency",currency:"USD"})}}}),m=new me({props:{id:"today-is",args:{date:new Date}}}),{c(){e=f("div"),F(r.$$.fragment),t=w(),a=f("div"),F(p.$$.fragment),x=w(),g=f("div"),F(m.$$.fragment)},l(b){e=c(b,"DIV",{});var z=d(e);L(r.$$.fragment,z),z.forEach(o),t=_(b),a=c(b,"DIV",{});var O=d(a);L(p.$$.fragment,O),O.forEach(o),x=_(b),g=c(b,"DIV",{});var T=d(g);L(m.$$.fragment,T),T.forEach(o)},m(b,z){h(b,e,z),y(r,e,null),h(b,t,z),h(b,a,z),y(p,a,null),h(b,x,z),h(b,g,z),y(m,g,null),E=!0},p:I,i(b){E||(k(r.$$.fragment,b),k(p.$$.fragment,b),k(m.$$.fragment,b),E=!0)},o(b){A(r.$$.fragment,b),A(p.$$.fragment,b),A(m.$$.fragment,b),E=!1},d(b){b&&o(e),D(r),b&&o(t),b&&o(a),D(p),b&&o(x),b&&o(g),D(m)}}}function Ll(s){let e,r;return e=new Ke({props:{bundles:[s[0]],$$slots:{default:[Fl]},$$scope:{ctx:s}}}),{c(){F(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){y(e,t,a),r=!0},p(t,[a]){const p={};a&4&&(p.$$scope={dirty:a,ctx:t}),e.$set(p)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function yl(s){const e=new pe(Or),r=new Me("en");return r.addResource(e),[r]}let kl=class extends S{constructor(e){super(),R(this,e,yl,Ll,C,{})}};const Al=`<script>
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
`;function Dl(s){let e,r;return e=new Ne({props:{sources:{"App.svelte":Al,"en.ftl":Or},component:kl}}),{c(){F(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){y(e,t,a),r=!0},p:I,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}let xl=class extends S{constructor(e){super(),R(this,e,null,Dl,C,{})}};const Pr=`weekday-is = Weekday { $weekday } is { WEEKDAY($weekday) }
`;function zl(s){let e,r;return e=new me({props:{id:"weekday-is",args:{weekday:2}}}),{c(){F(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){y(e,t,a),r=!0},p:I,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function Ol(s){let e,r;return e=new Ke({props:{bundles:[s[0]],$$slots:{default:[zl]},$$scope:{ctx:s}}}),{c(){F(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){y(e,t,a),r=!0},p(t,[a]){const p={};a&16&&(p.$$scope={dirty:a,ctx:t}),e.$set(p)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function Yn(s,e){const r=Object.create(null);for(const[t,a]of Object.entries(s))e.includes(t)&&(r[t]=a.valueOf());return r}function Pl(s){const e=["weekday"];function r(p,x){const g=p[0];if(g instanceof Fr)return new Fr(`WEEKDAY(${g.valueOf()})`);if(g instanceof Wn)return new Wn(g.valueOf(),{...Yn(g.opts,e),...Yn(x,e)});if(g instanceof yr){const m=new Date(Date.now()),E=g.valueOf()-m.getDay();return m.setDate(m.getDate()+E),new Wn(m.valueOf(),{weekday:"long",...Yn(x,e)})}throw new TypeError("Invalid argument to WEEKDAY")}const t=new pe(Pr),a=new Me("en",{functions:{WEEKDAY:r}});return a.addResource(t),[a]}class Sl extends S{constructor(e){super(),R(this,e,Pl,Ol,C,{})}}const Rl=`<script>
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
`;function Cl(s){let e,r;return e=new Ne({props:{sources:{"App.svelte":Rl,"en.ftl":Pr},component:Sl}}),{c(){F(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){y(e,t,a),r=!0},p:I,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}class Tl extends S{constructor(e){super(),R(this,e,null,Cl,C,{})}}function Wl(s){let e,r,t,a,p,x,g,m,E,b,z,O,T,W,$e,Z,V,H,Y,K,ge,N,j,ze,he,M,Oe,qe,Ot,Pt,lt,G,ve,St,Ue,Rt,Ct,Tt,be,J,Wt,ee,Yt,jt,Ve,Bt,It,Ht,Q,Kt,te,Mt,Nt,ne,qt,Ut,ot,we,at,_e,Pe,Vt,st,Se,Jt,ut,re,Ee,Qt,Je,Xt,Zt,Gt,X,en,le,tn,nn,Qe,rn,ln,it,Fe,ft,Le,Re,on,ct,P,an,oe,sn,un,Xe,fn,cn,Ze,dn,pn,Ge,mn,$n,dt,ye,pt,ke,Ce,gn,mt,ae,hn,se,vn,bn,$t,q,wn,ue,_n,En,et,Fn,Ln,gt,Te,yn,ht,Ae,vt,De,We,kn,bt,B,An,ie,Dn,xn,tt,zn,On,nt,Pn,Sn,wt,fe,Rn,ce,Cn,Tn,_t,xe,Et;return K=new Kr({}),we=new Qr({}),Fe=new $l({}),ye=new El({}),Ae=new xl({}),xe=new Tl({}),{c(){e=f("h1"),r=u("Tutorial"),t=w(),a=f("h2"),p=f("a"),x=u("First steps"),g=w(),m=f("p"),E=u("You need to provide your translations to "),b=f("code"),z=u("svelte-fluent"),O=u(" by adding the "),T=f("code"),W=u("FluentProvider"),$e=u(" component in your component hierarchy."),Z=w(),V=f("p"),H=u("In the most basic setup those translations can be defined directly in the code like this:"),Y=w(),F(K.$$.fragment),ge=w(),N=f("h2"),j=f("a"),ze=u("Load translations from files"),he=w(),M=f("p"),Oe=u(`Managing translations directly in the code can get messy.
A better way is to load translations from `),qe=f("code"),Ot=u(".ftl"),Pt=u(" files."),lt=w(),G=f("blockquote"),ve=f("p"),St=u("The bundler must support importing "),Ue=f("code"),Rt=u(".ftl"),Ct=u(" files as strings:"),Tt=w(),be=f("ul"),J=f("li"),Wt=u("For "),ee=f("a"),Yt=u("Vite"),jt=u(" you can add "),Ve=f("code"),Bt=u("?raw"),It=u(" to your import like in the example below."),Ht=w(),Q=f("li"),Kt=u("For "),te=f("a"),Mt=u("Rollup"),Nt=u(" you can add "),ne=f("a"),qt=u("rollup-plugin-string"),Ut=u(`
to your configuration.`),ot=w(),F(we.$$.fragment),at=w(),_e=f("h2"),Pe=f("a"),Vt=u("Multiple languages"),st=w(),Se=f("p"),Jt=u(`With the basics in place we can now extend this to multiple languages.
This example shows selection of the desired language and provides a fallback to
the auto-detected language from the browser.`),ut=w(),re=f("blockquote"),Ee=f("p"),Qt=u(`This example will fail when used with server-side rendering (SSR) because during
SSR the component cannot use browser-only globals like `),Je=f("code"),Xt=u("navigator.languages"),Zt=u("."),Gt=w(),X=f("p"),en=u(`As an alternative that works in SSR you can parse the
`),le=f("a"),tn=u("HTTP Accept-Language header"),nn=u(`
and replace `),Qe=f("code"),rn=u("navigator.languages"),ln=u(" with the resulting list of locale identifiers."),it=w(),F(Fe.$$.fragment),ft=w(),Le=f("h2"),Re=f("a"),on=u("Interpolation"),ct=w(),P=f("p"),an=u(`You can insert variables into your translated text by using
`),oe=f("a"),sn=u("Fluent Placeables"),un=u(`.
Values for those variables are provided via the `),Xe=f("code"),fn=u("args"),cn=u(" prop of the "),Ze=f("code"),dn=u("Localized"),pn=u(" and "),Ge=f("code"),mn=u("Overlay"),$n=u(" components."),dt=w(),F(ye.$$.fragment),pt=w(),ke=f("h2"),Ce=f("a"),gn=u("Interpolation formatting"),mt=w(),ae=f("p"),hn=u(`Fluent outputs interpolations in a human readable format appropriate to the currently used locale.
You can customize the formatting by using `),se=f("a"),vn=u("Fluent Functions"),bn=u("."),$t=w(),q=f("p"),wn=u(`Formatting parameters listed in “Parameters” in the
`),ue=f("a"),_n=u("Fluent Functions"),En=u(" documentation can be set both in the "),et=f("code"),Fn=u(".ftl"),Ln=u(`
files or in the JS source.`),gt=w(),Te=f("p"),yn=u("Parameters listed in “Developer parameters” can only be set in JS code."),ht=w(),F(Ae.$$.fragment),vt=w(),De=f("h2"),We=f("a"),kn=u("Custom functions"),bt=w(),B=f("p"),An=u("You can extend the default "),ie=f("a"),Dn=u("Fluent Functions"),xn=u(`
with custom formatting functions by adding them to the `),tt=f("code"),zn=u("functions"),On=u(" option of "),nt=f("code"),Pn=u("FluentBundle"),Sn=u("."),wt=w(),fe=f("p"),Rn=u(`You can also check out the
`),ce=f("a"),Cn=u("code of the built-in Fluent Functions"),Tn=u(`
for more examples.`),_t=w(),F(xe.$$.fragment),this.h()},l(n){e=c(n,"H1",{id:!0});var $=d(e);r=i($,"Tutorial"),$.forEach(o),t=_(n),a=c(n,"H2",{id:!0});var jn=d(a);p=c(jn,"A",{href:!0});var Bn=d(p);x=i(Bn,"First steps"),Bn.forEach(o),jn.forEach(o),g=_(n),m=c(n,"P",{});var Ye=d(m);E=i(Ye,"You need to provide your translations to "),b=c(Ye,"CODE",{});var In=d(b);z=i(In,"svelte-fluent"),In.forEach(o),O=i(Ye," by adding the "),T=c(Ye,"CODE",{});var Hn=d(T);W=i(Hn,"FluentProvider"),Hn.forEach(o),$e=i(Ye," component in your component hierarchy."),Ye.forEach(o),Z=_(n),V=c(n,"P",{});var Kn=d(V);H=i(Kn,"In the most basic setup those translations can be defined directly in the code like this:"),Kn.forEach(o),Y=_(n),L(K.$$.fragment,n),ge=_(n),N=c(n,"H2",{id:!0});var Mn=d(N);j=c(Mn,"A",{href:!0});var Nn=d(j);ze=i(Nn,"Load translations from files"),Nn.forEach(o),Mn.forEach(o),he=_(n),M=c(n,"P",{});var Ft=d(M);Oe=i(Ft,`Managing translations directly in the code can get messy.
A better way is to load translations from `),qe=c(Ft,"CODE",{});var qn=d(qe);Ot=i(qn,".ftl"),qn.forEach(o),Pt=i(Ft," files."),Ft.forEach(o),lt=_(n),G=c(n,"BLOCKQUOTE",{});var Lt=d(G);ve=c(Lt,"P",{});var yt=d(ve);St=i(yt,"The bundler must support importing "),Ue=c(yt,"CODE",{});var Un=d(Ue);Rt=i(Un,".ftl"),Un.forEach(o),Ct=i(yt," files as strings:"),yt.forEach(o),Tt=_(Lt),be=c(Lt,"UL",{});var kt=d(be);J=c(kt,"LI",{});var je=d(J);Wt=i(je,"For "),ee=c(je,"A",{href:!0,rel:!0,target:!0});var Vn=d(ee);Yt=i(Vn,"Vite"),Vn.forEach(o),jt=i(je," you can add "),Ve=c(je,"CODE",{});var Jn=d(Ve);Bt=i(Jn,"?raw"),Jn.forEach(o),It=i(je," to your import like in the example below."),je.forEach(o),Ht=_(kt),Q=c(kt,"LI",{});var Be=d(Q);Kt=i(Be,"For "),te=c(Be,"A",{href:!0,rel:!0,target:!0});var Qn=d(te);Mt=i(Qn,"Rollup"),Qn.forEach(o),Nt=i(Be," you can add "),ne=c(Be,"A",{href:!0,rel:!0,target:!0});var Xn=d(ne);qt=i(Xn,"rollup-plugin-string"),Xn.forEach(o),Ut=i(Be,`
to your configuration.`),Be.forEach(o),kt.forEach(o),Lt.forEach(o),ot=_(n),L(we.$$.fragment,n),at=_(n),_e=c(n,"H2",{id:!0});var Zn=d(_e);Pe=c(Zn,"A",{href:!0});var Gn=d(Pe);Vt=i(Gn,"Multiple languages"),Gn.forEach(o),Zn.forEach(o),st=_(n),Se=c(n,"P",{});var er=d(Se);Jt=i(er,`With the basics in place we can now extend this to multiple languages.
This example shows selection of the desired language and provides a fallback to
the auto-detected language from the browser.`),er.forEach(o),ut=_(n),re=c(n,"BLOCKQUOTE",{});var At=d(re);Ee=c(At,"P",{});var Dt=d(Ee);Qt=i(Dt,`This example will fail when used with server-side rendering (SSR) because during
SSR the component cannot use browser-only globals like `),Je=c(Dt,"CODE",{});var tr=d(Je);Xt=i(tr,"navigator.languages"),tr.forEach(o),Zt=i(Dt,"."),Dt.forEach(o),Gt=_(At),X=c(At,"P",{});var Ie=d(X);en=i(Ie,`As an alternative that works in SSR you can parse the
`),le=c(Ie,"A",{href:!0,rel:!0,target:!0});var nr=d(le);tn=i(nr,"HTTP Accept-Language header"),nr.forEach(o),nn=i(Ie,`
and replace `),Qe=c(Ie,"CODE",{});var rr=d(Qe);rn=i(rr,"navigator.languages"),rr.forEach(o),ln=i(Ie," with the resulting list of locale identifiers."),Ie.forEach(o),At.forEach(o),it=_(n),L(Fe.$$.fragment,n),ft=_(n),Le=c(n,"H2",{id:!0});var lr=d(Le);Re=c(lr,"A",{href:!0});var or=d(Re);on=i(or,"Interpolation"),or.forEach(o),lr.forEach(o),ct=_(n),P=c(n,"P",{});var U=d(P);an=i(U,`You can insert variables into your translated text by using
`),oe=c(U,"A",{href:!0,rel:!0,target:!0});var ar=d(oe);sn=i(ar,"Fluent Placeables"),ar.forEach(o),un=i(U,`.
Values for those variables are provided via the `),Xe=c(U,"CODE",{});var sr=d(Xe);fn=i(sr,"args"),sr.forEach(o),cn=i(U," prop of the "),Ze=c(U,"CODE",{});var ur=d(Ze);dn=i(ur,"Localized"),ur.forEach(o),pn=i(U," and "),Ge=c(U,"CODE",{});var ir=d(Ge);mn=i(ir,"Overlay"),ir.forEach(o),$n=i(U," components."),U.forEach(o),dt=_(n),L(ye.$$.fragment,n),pt=_(n),ke=c(n,"H2",{id:!0});var fr=d(ke);Ce=c(fr,"A",{href:!0});var cr=d(Ce);gn=i(cr,"Interpolation formatting"),cr.forEach(o),fr.forEach(o),mt=_(n),ae=c(n,"P",{});var xt=d(ae);hn=i(xt,`Fluent outputs interpolations in a human readable format appropriate to the currently used locale.
You can customize the formatting by using `),se=c(xt,"A",{href:!0,rel:!0,target:!0});var dr=d(se);vn=i(dr,"Fluent Functions"),dr.forEach(o),bn=i(xt,"."),xt.forEach(o),$t=_(n),q=c(n,"P",{});var He=d(q);wn=i(He,`Formatting parameters listed in “Parameters” in the
`),ue=c(He,"A",{href:!0,rel:!0,target:!0});var pr=d(ue);_n=i(pr,"Fluent Functions"),pr.forEach(o),En=i(He," documentation can be set both in the "),et=c(He,"CODE",{});var mr=d(et);Fn=i(mr,".ftl"),mr.forEach(o),Ln=i(He,`
files or in the JS source.`),He.forEach(o),gt=_(n),Te=c(n,"P",{});var $r=d(Te);yn=i($r,"Parameters listed in “Developer parameters” can only be set in JS code."),$r.forEach(o),ht=_(n),L(Ae.$$.fragment,n),vt=_(n),De=c(n,"H2",{id:!0});var gr=d(De);We=c(gr,"A",{href:!0});var hr=d(We);kn=i(hr,"Custom functions"),hr.forEach(o),gr.forEach(o),bt=_(n),B=c(n,"P",{});var de=d(B);An=i(de,"You can extend the default "),ie=c(de,"A",{href:!0,rel:!0,target:!0});var vr=d(ie);Dn=i(vr,"Fluent Functions"),vr.forEach(o),xn=i(de,`
with custom formatting functions by adding them to the `),tt=c(de,"CODE",{});var br=d(tt);zn=i(br,"functions"),br.forEach(o),On=i(de," option of "),nt=c(de,"CODE",{});var wr=d(nt);Pn=i(wr,"FluentBundle"),wr.forEach(o),Sn=i(de,"."),de.forEach(o),wt=_(n),fe=c(n,"P",{});var zt=d(fe);Rn=i(zt,`You can also check out the
`),ce=c(zt,"A",{href:!0,rel:!0,target:!0});var _r=d(ce);Cn=i(_r,"code of the built-in Fluent Functions"),_r.forEach(o),Tn=i(zt,`
for more examples.`),zt.forEach(o),_t=_(n),L(xe.$$.fragment,n),this.h()},h(){v(e,"id","tutorial"),v(p,"href","#first-steps"),v(a,"id","first-steps"),v(j,"href","#load-translations-from-files"),v(N,"id","load-translations-from-files"),v(ee,"href","https://vitejs.dev/"),v(ee,"rel","noopener noreferrer"),v(ee,"target","_blank"),v(te,"href","https://rollupjs.org/"),v(te,"rel","noopener noreferrer"),v(te,"target","_blank"),v(ne,"href","https://www.npmjs.com/package/rollup-plugin-string"),v(ne,"rel","noopener noreferrer"),v(ne,"target","_blank"),v(Pe,"href","#multiple-languages"),v(_e,"id","multiple-languages"),v(le,"href","https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language"),v(le,"rel","noopener noreferrer"),v(le,"target","_blank"),v(Re,"href","#interpolation"),v(Le,"id","interpolation"),v(oe,"href","https://projectfluent.org/fluent/guide/placeables.html"),v(oe,"rel","noopener noreferrer"),v(oe,"target","_blank"),v(Ce,"href","#interpolation-formatting"),v(ke,"id","interpolation-formatting"),v(se,"href","https://projectfluent.org/fluent/guide/functions.html"),v(se,"rel","noopener noreferrer"),v(se,"target","_blank"),v(ue,"href","https://projectfluent.org/fluent/guide/functions.html"),v(ue,"rel","noopener noreferrer"),v(ue,"target","_blank"),v(We,"href","#custom-functions"),v(De,"id","custom-functions"),v(ie,"href","https://projectfluent.org/fluent/guide/functions.html"),v(ie,"rel","noopener noreferrer"),v(ie,"target","_blank"),v(ce,"href","https://github.com/projectfluent/fluent.js/blob/master/fluent-bundle/src/builtins.ts"),v(ce,"rel","noopener noreferrer"),v(ce,"target","_blank")},m(n,$){h(n,e,$),l(e,r),h(n,t,$),h(n,a,$),l(a,p),l(p,x),h(n,g,$),h(n,m,$),l(m,E),l(m,b),l(b,z),l(m,O),l(m,T),l(T,W),l(m,$e),h(n,Z,$),h(n,V,$),l(V,H),h(n,Y,$),y(K,n,$),h(n,ge,$),h(n,N,$),l(N,j),l(j,ze),h(n,he,$),h(n,M,$),l(M,Oe),l(M,qe),l(qe,Ot),l(M,Pt),h(n,lt,$),h(n,G,$),l(G,ve),l(ve,St),l(ve,Ue),l(Ue,Rt),l(ve,Ct),l(G,Tt),l(G,be),l(be,J),l(J,Wt),l(J,ee),l(ee,Yt),l(J,jt),l(J,Ve),l(Ve,Bt),l(J,It),l(be,Ht),l(be,Q),l(Q,Kt),l(Q,te),l(te,Mt),l(Q,Nt),l(Q,ne),l(ne,qt),l(Q,Ut),h(n,ot,$),y(we,n,$),h(n,at,$),h(n,_e,$),l(_e,Pe),l(Pe,Vt),h(n,st,$),h(n,Se,$),l(Se,Jt),h(n,ut,$),h(n,re,$),l(re,Ee),l(Ee,Qt),l(Ee,Je),l(Je,Xt),l(Ee,Zt),l(re,Gt),l(re,X),l(X,en),l(X,le),l(le,tn),l(X,nn),l(X,Qe),l(Qe,rn),l(X,ln),h(n,it,$),y(Fe,n,$),h(n,ft,$),h(n,Le,$),l(Le,Re),l(Re,on),h(n,ct,$),h(n,P,$),l(P,an),l(P,oe),l(oe,sn),l(P,un),l(P,Xe),l(Xe,fn),l(P,cn),l(P,Ze),l(Ze,dn),l(P,pn),l(P,Ge),l(Ge,mn),l(P,$n),h(n,dt,$),y(ye,n,$),h(n,pt,$),h(n,ke,$),l(ke,Ce),l(Ce,gn),h(n,mt,$),h(n,ae,$),l(ae,hn),l(ae,se),l(se,vn),l(ae,bn),h(n,$t,$),h(n,q,$),l(q,wn),l(q,ue),l(ue,_n),l(q,En),l(q,et),l(et,Fn),l(q,Ln),h(n,gt,$),h(n,Te,$),l(Te,yn),h(n,ht,$),y(Ae,n,$),h(n,vt,$),h(n,De,$),l(De,We),l(We,kn),h(n,bt,$),h(n,B,$),l(B,An),l(B,ie),l(ie,Dn),l(B,xn),l(B,tt),l(tt,zn),l(B,On),l(B,nt),l(nt,Pn),l(B,Sn),h(n,wt,$),h(n,fe,$),l(fe,Rn),l(fe,ce),l(ce,Cn),l(fe,Tn),h(n,_t,$),y(xe,n,$),Et=!0},p:I,i(n){Et||(k(K.$$.fragment,n),k(we.$$.fragment,n),k(Fe.$$.fragment,n),k(ye.$$.fragment,n),k(Ae.$$.fragment,n),k(xe.$$.fragment,n),Et=!0)},o(n){A(K.$$.fragment,n),A(we.$$.fragment,n),A(Fe.$$.fragment,n),A(ye.$$.fragment,n),A(Ae.$$.fragment,n),A(xe.$$.fragment,n),Et=!1},d(n){n&&o(e),n&&o(t),n&&o(a),n&&o(g),n&&o(m),n&&o(Z),n&&o(V),n&&o(Y),D(K,n),n&&o(ge),n&&o(N),n&&o(he),n&&o(M),n&&o(lt),n&&o(G),n&&o(ot),D(we,n),n&&o(at),n&&o(_e),n&&o(st),n&&o(Se),n&&o(ut),n&&o(re),n&&o(it),D(Fe,n),n&&o(ft),n&&o(Le),n&&o(ct),n&&o(P),n&&o(dt),D(ye,n),n&&o(pt),n&&o(ke),n&&o(mt),n&&o(ae),n&&o($t),n&&o(q),n&&o(gt),n&&o(Te),n&&o(ht),D(Ae,n),n&&o(vt),n&&o(De),n&&o(bt),n&&o(B),n&&o(wt),n&&o(fe),n&&o(_t),D(xe,n)}}}const Ql=[{rank:1,text:"Tutorial",id:"tutorial"},{rank:2,text:"First steps",id:"first-steps"},{rank:2,text:"Load translations from files",id:"load-translations-from-files"},{rank:2,text:"Multiple languages",id:"multiple-languages"},{rank:2,text:"Interpolation",id:"interpolation"},{rank:2,text:"Interpolation formatting",id:"interpolation-formatting"},{rank:2,text:"Custom functions",id:"custom-functions"}];class Xl extends S{constructor(e){super(),R(this,e,null,Wl,C,{})}}export{Xl as default,Ql as headings};
