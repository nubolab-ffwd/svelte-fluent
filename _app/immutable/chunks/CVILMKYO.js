import{aq as I,aa as V,k as h,ar as q,z as N,as as z}from"./HSyAO-bR.js";import{g as B,j as E,k as M,m as D,n as G,o as K,p as P}from"./DU7dP48_.js";function w(s){var r,t,i="";if(typeof s=="string"||typeof s=="number")i+=s;else if(typeof s=="object")if(Array.isArray(s)){var u=s.length;for(r=0;r<u;r++)s[r]&&(t=w(s[r]))&&(i&&(i+=" "),i+=t)}else for(t in s)s[t]&&(i&&(i+=" "),i+=t);return i}function R(){for(var s,r,t=0,i="",u=arguments.length;t<u;t++)(s=arguments[t])&&(r=w(s))&&(i&&(i+=" "),i+=r);return i}function S(s){return typeof s=="object"?R(s):s??""}function Q(s){if(h){var r=!1,t=()=>{if(!r){if(r=!0,s.hasAttribute("value")){var i=s.value;n(s,"value",null),s.value=i}if(s.hasAttribute("checked")){var u=s.checked;n(s,"checked",null),s.checked=u}}};s.__on_r=t,z(t),K()}}function Y(s,r){r?s.hasAttribute("selected")||s.setAttribute("selected",""):s.removeAttribute("selected")}function n(s,r,t,i){var u=s.__attributes??(s.__attributes={});h&&(u[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||u[r]!==(u[r]=t)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[I]=t),t==null?s.removeAttribute(r):typeof t!="string"&&L(s).includes(r)?s[r]=t:s.setAttribute(r,t))}function U(s,r,t,i,u=!1,_=!1,F=!1){let y=h&&_;y&&N(!1);var c=r||{},g=s.tagName==="OPTION";for(var p in r)p in t||(t[p]=null);t.class&&(t.class=S(t.class));var O=L(s),T=s.__attributes??(s.__attributes={});for(const a in t){let e=t[a];if(g&&a==="value"&&e==null){s.value=s.__value="",c[a]=e;continue}var A=c[a];if(e!==A){c[a]=e;var k=a[0]+a[1];if(k!=="$$"){if(k==="on"){const o={},v="$$"+a;let f=a.slice(2);var d=P(f);if(B(f)&&(f=f.slice(0,-7),o.capture=!0),!d&&A){if(e!=null)continue;s.removeEventListener(f,c[v],o),c[v]=null}if(e!=null)if(d)s[`__${f}`]=e,M([f]);else{let j=function(C){c[a].call(this,C)};c[v]=E(f,s,j,o)}else d&&(s[`__${f}`]=void 0)}else if(a==="style"&&e!=null)s.style.cssText=e+"";else if(a==="autofocus")D(s,!!e);else if(!_&&(a==="__value"||a==="value"&&e!=null))s.value=s.__value=e;else if(a==="selected"&&g)Y(s,e);else{var l=a;u||(l=G(l));var b=l==="defaultValue"||l==="defaultChecked";if(e==null&&!_&&!b)if(T[a]=null,l==="value"||l==="checked"){let o=s;const v=r===void 0;if(l==="value"){let f=o.defaultValue;o.removeAttribute(l),o.defaultValue=f,o.value=o.__value=v?f:null}else{let f=o.defaultChecked;o.removeAttribute(l),o.defaultChecked=f,o.checked=v?f:!1}}else s.removeAttribute(a);else b||O.includes(l)&&(_||typeof e!="string")?s[l]=e:typeof e!="function"&&n(s,l,e)}a==="style"&&"__styles"in s&&(s.__styles={})}}}return y&&N(!0),c}var $=new Map;function L(s){var r=$.get(s.nodeName);if(r)return r;$.set(s.nodeName,r=[]);for(var t,i=s,u=Element.prototype;u!==i;){t=q(i);for(var _ in t)t[_].set&&r.push(_);i=V(i)}return r}export{U as a,Q as r,n as s};
