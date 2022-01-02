(()=>{"use strict";var e,r,t,n,o,a,i,s,c,u,l,p,d,f,m={151:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(81),o=t.n(n),a=t(645),i=t.n(a)()(o());i.push([e.id,"*,*::before,*::after{margin:0;padding:0;box-sizing:inherit}html,body{font-size:62.5%;box-sizing:border-box}.navbar{display:flex;justify-content:center}.navbar ul #title{background:#cff;display:grid;place-items:center;margin:1rem 0 0 0;height:4rem;width:10rem;border:none;box-shadow:rgba(0,0,0,.12) 0px 1px 3px,rgba(0,0,0,.24) 0px 1px 2px;cursor:pointer;font-size:2rem;font-family:cursive,monospace,sans-serif;list-style:none}.navbar ul #title:hover+.dropmenu li:nth-child(1){animation:dropDown 300ms 100ms ease-in-out forwards}.navbar ul #title:hover+.dropmenu li:nth-child(2){animation:dropDown 300ms 500ms ease-in-out forwards}.navbar ul #title:hover+.dropmenu li:nth-child(3){animation:dropDown 300ms 900ms ease-in-out forwards}.navbar ul #title:hover+.dropmenu li:nth-child(4){animation:dropDown 300ms 1300ms ease-in-out forwards}.navbar ul #title:hover+.dropmenu li:nth-child(5){animation:dropDown 300ms 1700ms ease-in-out forwards}.navbar ul .dropmenu{perspective:1000px}.navbar ul .dropmenu li{pointer-events:none;transform-origin:top center;opacity:0;background:#fcc;display:grid;place-items:center;height:4rem;width:10rem;cursor:pointer;font-size:1.5rem;font-family:cursive,monospace,sans-serif;list-style:none}@keyframes dropDown{0%{opacity:0;transform:rotateX(-90deg)}50%{transform:rotateX(50deg)}100%{opacity:1;transform:rotateX(0deg)}}",""]);const s=i},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],u=n.base?c[0]+n.base:c[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var d=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)r[d].references++,r[d].updater(f);else{var m=o(f,n);n.byIndex=s,r.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);r[s].references--}for(var c=n(e,o),u=0;u<a.length;u++){var l=t(a[u]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=c}}},569:e=>{var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,t)=>{e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,o&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(n,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},v={};function h(e){var r=v[e];if(void 0!==r)return r.exports;var t=v[e]={id:e,exports:{}};return m[e](t,t.exports,h),t.exports}h.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return h.d(r,{a:r}),r},h.d=(e,r)=>{for(var t in r)h.o(r,t)&&!h.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},h.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e=h(379),r=h.n(e),t=h(795),n=h.n(t),o=h(569),a=h.n(o),i=h(565),s=h.n(i),c=h(216),u=h.n(c),l=h(589),p=h.n(l),d=h(151),(f={}).styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=n(),f.insertStyleElement=u(),r()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals})();