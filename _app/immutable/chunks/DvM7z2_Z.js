import{m as t,h as _,d as c,k as d}from"./C7ybvbG6.js";import{l as m}from"./BLmdulVr.js";function y(e,a,n=a){var o=t();m(e,"input",l=>{var r=l?e.defaultValue:e.value;if(r=v(e)?f(r):r,n(r),o&&r!==(r=a())){var u=e.selectionStart,s=e.selectionEnd;e.value=r??"",s!==null&&(e.selectionStart=u,e.selectionEnd=Math.min(s,e.value.length))}}),(_&&e.defaultValue!==e.value||c(a)==null&&e.value)&&n(v(e)?f(e.value):e.value),d(()=>{var l=a();v(e)&&l===f(e.value)||e.type==="date"&&!l&&!e.value||l!==e.value&&(e.value=l??"")})}function v(e){var a=e.type;return a==="number"||a==="range"}function f(e){return e===""?null:+e}export{y as b};
