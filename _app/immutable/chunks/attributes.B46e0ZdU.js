import{L as I,K as A,h as d,M,N as B}from"./runtime.Bvcusis5.js";import{d as E,i as K,e as b,f as q,g as z,n as D,h as G}from"./disclose-version.C6l5tsJ2.js";function Y(s){if(d){var r=!1,a=()=>{if(!r){if(r=!0,s.hasAttribute("value")){var _=s.value;n(s,"value",null),s.value=_}if(s.hasAttribute("checked")){var o=s.checked;n(s,"checked",null),s.checked=o}}};s.__on_r=a,B(a),E()}}function n(s,r,a,_){var o=s.__attributes??(s.__attributes={});d&&(o[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||o[r]!==(o[r]=a)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[I]=a),a==null?s.removeAttribute(r):typeof a!="string"&&k(s).includes(r)?s[r]=a:s.setAttribute(r,a))}function j(s,r,a,_,o=!1,e=!1,P=!1){var t=r||{},L=s.tagName==="OPTION";for(var h in r)h in a||(a[h]=null);var $=k(s),w=s.__attributes??(s.__attributes={});for(const i in a){let f=a[i];if(L&&i==="value"&&f==null){s.value=s.__value="",t[i]=f;continue}var y=t[i];if(f!==y){t[i]=f;var g=i[0]+i[1];if(g!=="$$"){if(g==="on"){const l={},v="$$"+i;let c=i.slice(2);var p=G(c);if(K(c)&&(c=c.slice(0,-7),l.capture=!0),!p&&y){if(f!=null)continue;s.removeEventListener(c,t[v],l),t[v]=null}if(f!=null)if(p)s[`__${c}`]=f,q([c]);else{let O=function(T){t[i].call(this,T)};t[v]=b(c,s,O,l)}}else if(i==="style"&&f!=null)s.style.cssText=f+"";else if(i==="autofocus")z(s,!!f);else if(i==="__value"||i==="value"&&f!=null)s.value=s[i]=s.__value=f;else{var u=i;o||(u=D(u)),f==null&&!e?(w[i]=null,s.removeAttribute(i)):$.includes(u)&&(e||typeof f!="string")?s[u]=f:typeof f!="function"&&(d&&(u==="src"||u==="href"||u==="srcset")||n(s,u,f))}i==="style"&&"__styles"in s&&(s.__styles={})}}}return t}var N=new Map;function k(s){var r=N.get(s.nodeName);if(r)return r;N.set(s.nodeName,r=[]);for(var a,_=A(s),o=Element.prototype;o!==_;){a=M(_);for(var e in a)a[e].set&&r.push(e);_=A(_)}return r}export{j as a,Y as r,n as s};
