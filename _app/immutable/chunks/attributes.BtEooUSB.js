import{L as I,h as d,J as M,K as b,M as B,N as E,O as K,P,Q as R,R as q}from"./disclose-version.Glus66My.js";import{g as A,b as z}from"./equality.BKhFfLg7.js";function Q(s){if(d){var r=!1,i=()=>{if(!r){if(r=!0,s.hasAttribute("value")){var _=s.value;n(s,"value",null),s.value=_}if(s.hasAttribute("checked")){var o=s.checked;n(s,"checked",null),s.checked=o}}};s.__on_r=i,P(i),R()}}function n(s,r,i,_){var o=s.__attributes??(s.__attributes={});d&&(o[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||o[r]!==(o[r]=i)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[I]=i),i==null?s.removeAttribute(r):typeof i!="string"&&k(s).includes(r)?s[r]=i:s.setAttribute(r,i))}function S(s,r,i,_,o=!1,l=!1,D=!1){var t=r||{},L=s.tagName==="OPTION";for(var h in r)h in i||(i[h]=null);var O=k(s),$=s.__attributes??(s.__attributes={});for(const a in i){let f=i[a];if(L&&a==="value"&&f==null){s.value=s.__value="",t[a]=f;continue}var y=t[a];if(f!==y){t[a]=f;var g=a[0]+a[1];if(g!=="$$"){if(g==="on"){const e={},v="$$"+a;let c=a.slice(2);var p=q(c);if(M(c)&&(c=c.slice(0,-7),e.capture=!0),!p&&y){if(f!=null)continue;s.removeEventListener(c,t[v],e),t[v]=null}if(f!=null)if(p)s[`__${c}`]=f,B([c]);else{let w=function(T){t[a].call(this,T)};t[v]=b(c,s,w,e)}}else if(a==="style"&&f!=null)s.style.cssText=f+"";else if(a==="autofocus")E(s,!!f);else if(a==="__value"||a==="value"&&f!=null)s.value=s[a]=s.__value=f;else{var u=a;o||(u=K(u)),f==null&&!l?($[a]=null,s.removeAttribute(a)):O.includes(u)&&(l||typeof f!="string")?s[u]=f:typeof f!="function"&&(d&&(u==="src"||u==="href"||u==="srcset")||n(s,u,f))}a==="style"&&"__styles"in s&&(s.__styles={})}}}return t}var N=new Map;function k(s){var r=N.get(s.nodeName);if(r)return r;N.set(s.nodeName,r=[]);for(var i,_=A(s),o=Element.prototype;o!==_;){i=z(_);for(var l in i)i[l].set&&r.push(l);_=A(_)}return r}export{S as a,Q as r,n as s};
