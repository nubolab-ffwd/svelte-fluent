import{headings as a}from"../entry/docs-getting-started-page.svelte.md.1311b021.js";import{headings as u}from"../entry/docs-tutorial-page.svelte.md.ab0592c2.js";import{headings as d}from"../entry/docs-components-page.svelte.md.26510ca4.js";import{b as i}from"./paths.fb815ff2.js";function s(o,e,n){const t=e.find(r=>r.rank===n);return{text:(t==null?void 0:t.text)??"",href:o,submenu:c(o,e,n+1)}}function c(o,e,n){return e.filter(t=>t.rank===n).map(t=>({text:t.text,href:`${o}#${t.id}`}))}const m=async o=>{var t;const e=[s(i+"/docs/getting-started",a,1),s(i+"/docs/tutorial",u,1),s(i+"/docs/components",d,1)],n=((t=e.find(r=>r.href&&o.url.pathname.startsWith(r.href)))==null?void 0:t.text)??"Documentation";return{menu:e,seo:{title:n,description:n}}},b=Object.freeze(Object.defineProperty({__proto__:null,load:m},Symbol.toStringTag,{value:"Module"}));export{b as _,m as l};
