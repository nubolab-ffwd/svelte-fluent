import{S as I,a2 as Z,a3 as C,a4 as P,a5 as G,g as b,U as v,a6 as y,a7 as S,Z as $,a8 as z,a9 as V,i as F,aa as A,ab as Y,ac as H,ad as J,K as U,ae as Q,af as W,ag as X,ah as k,e as q,ai as ee,d as re,aj as ne,ak as te,al as ie,am as ae}from"./BIlzGHYh.js";function R(e,n=null,u){if(typeof e!="object"||e===null||I in e)return e;const f=V(e);if(f!==Z&&f!==C)return e;var i=new Map,_=F(e),w=P(0);_&&i.set("length",P(e.length));var h;return new Proxy(e,{defineProperty(l,r,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&z();var s=i.get(r);return s===void 0?(s=P(t.value),i.set(r,s)):y(s,R(t.value,h)),!0},deleteProperty(l,r){var t=i.get(r);if(t===void 0)r in l&&i.set(r,P(v));else{if(_&&typeof r=="string"){var s=i.get("length"),a=Number(r);Number.isInteger(a)&&a<s.v&&y(s,a)}y(t,v),B(w)}return!0},get(l,r,t){var c;if(r===I)return e;var s=i.get(r),a=r in l;if(s===void 0&&(!a||(c=S(l,r))!=null&&c.writable)&&(s=P(R(a?l[r]:v,h)),i.set(r,s)),s!==void 0){var d=b(s);return d===v?void 0:d}return Reflect.get(l,r,t)},getOwnPropertyDescriptor(l,r){var t=Reflect.getOwnPropertyDescriptor(l,r);if(t&&"value"in t){var s=i.get(r);s&&(t.value=b(s))}else if(t===void 0){var a=i.get(r),d=a==null?void 0:a.v;if(a!==void 0&&d!==v)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return t},has(l,r){var d;if(r===I)return!0;var t=i.get(r),s=t!==void 0&&t.v!==v||Reflect.has(l,r);if(t!==void 0||$!==null&&(!s||(d=S(l,r))!=null&&d.writable)){t===void 0&&(t=P(s?R(l[r],h):v),i.set(r,t));var a=b(t);if(a===v)return!1}return s},set(l,r,t,s){var m;var a=i.get(r),d=r in l;if(_&&r==="length")for(var c=t;c<a.v;c+=1){var p=i.get(c+"");p!==void 0?y(p,v):c in l&&(p=P(v),i.set(c+"",p))}a===void 0?(!d||(m=S(l,r))!=null&&m.writable)&&(a=P(void 0),y(a,R(t,h)),i.set(r,a)):(d=a.v!==v,y(a,R(t,h)));var g=Reflect.getOwnPropertyDescriptor(l,r);if(g!=null&&g.set&&g.set.call(s,t),!d){if(_&&typeof r=="string"){var x=i.get("length"),D=Number(r);Number.isInteger(D)&&D>=x.v&&y(x,D+1)}B(w)}return!0},ownKeys(l){b(w);var r=Reflect.ownKeys(l).filter(a=>{var d=i.get(a);return d===void 0||d.v!==v});for(var[t,s]of i)s.v!==v&&!(t in l)&&r.push(t);return r},setPrototypeOf(){G()}})}function B(e,n=1){y(e,e.v+n)}function M(e){return e!==null&&typeof e=="object"&&I in e?e[I]:e}function de(e,n){return Object.is(M(e),M(n))}let L=!1;function se(e){var n=L;try{return L=!1,[e(),L]}finally{L=n}}const fe={get(e,n){if(!e.exclude.includes(n))return e.props[n]},set(e,n){return!1},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function oe(e,n,u){return new Proxy({props:e,exclude:n},fe)}const ue={get(e,n){let u=e.props.length;for(;u--;){let f=e.props[u];if(A(f)&&(f=f()),typeof f=="object"&&f!==null&&n in f)return f[n]}},set(e,n,u){let f=e.props.length;for(;f--;){let i=e.props[f];A(i)&&(i=i());const _=S(i,n);if(_&&_.set)return _.set(u),!0}return!1},getOwnPropertyDescriptor(e,n){let u=e.props.length;for(;u--;){let f=e.props[u];if(A(f)&&(f=f()),typeof f=="object"&&f!==null&&n in f){const i=S(f,n);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,n){if(n===I||n===Y)return!1;for(let u of e.props)if(A(u)&&(u=u()),u!=null&&n in u)return!0;return!1},ownKeys(e){const n=[];for(let u of e.props){A(u)&&(u=u());for(const f in u)n.includes(f)||n.push(f)}return n}};function _e(...e){return new Proxy({props:e},ue)}function ve(e,n,u,f){var T;var i=(u&te)!==0,_=!re||(u&ne)!==0,w=(u&ee)!==0,h=(u&ie)!==0,l=!1,r;w?[r,l]=se(()=>e[n]):r=e[n];var t=I in e||Y in e,s=w&&(((T=S(e,n))==null?void 0:T.set)??(t&&n in e&&(o=>e[n]=o)))||void 0,a=f,d=!0,c=!1,p=()=>(c=!0,d&&(d=!1,h?a=q(f):a=f),a);r===void 0&&f!==void 0&&(s&&_&&H(),r=p(),s&&s(r));var g;if(_)g=()=>{var o=e[n];return o===void 0?p():(d=!0,c=!1,o)};else{var x=(i?U:Q)(()=>e[n]);x.f|=J,g=()=>{var o=b(x);return o!==void 0&&(a=void 0),o===void 0?a:o}}if(!(u&W))return g;if(s){var D=e.$$legacy;return function(o,O){return arguments.length>0?((!_||!O||D||l)&&s(O?g():o),o):g()}}var m=!1,j=!1,N=k(r),E=U(()=>{var o=g(),O=b(N);return m?(m=!1,j=!0,O):(j=!1,N.v=o)});return i||(E.equals=X),function(o,O){if(ae!==null&&(m=j,g(),b(N)),arguments.length>0){const K=O?b(E):_&&w?R(o):o;return E.equals(K)||(m=!0,y(N,K),c&&a!==void 0&&(a=K),q(()=>b(E))),o}return b(E)}}export{R as a,de as i,ve as p,oe as r,_e as s};
