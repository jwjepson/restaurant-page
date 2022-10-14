(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),s=t.n(c),p=new URL(t(88),t.b),d=a()(o()),u=s()(p);d.push([n.id,"body {\n    margin: 0;\n    background: url("+u+") no-repeat center center fixed;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n}\n\nh2 {\n    margin: 0;\n    padding: 0;\n}\n\n\n.title {\n    color: white;\n    font-size: 35px;\n}\n\n.title:hover, .nav-item:hover, .menu-button:hover{\n    cursor: pointer;\n}\n\n.header {\n    background-color: rgba(0,0,0,0.3);\n    width: 100vw;\n    height: 100px;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;\n\n}\n\n.nav {\n    display: flex;\n    gap: 30px;\n    list-style-type: none;\n    justify-content: center;\n    align-items: center;\n    font-size: 20px;\n    color: white;\n}\n\n.description {\n    width: 300px;\n    height: 100px;\n    font-size: 18px;\n    color: white;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    background-color: rgba(0,0,0,0.3);\n    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;\n}\n\n.main-content {\n    display: flex;\n    justify-content: center;\n    margin-top: 150px;\n}\n\n.menu-button {\n    font-size: 15px;\n    border-radius: 1em;\n    padding: 7px;\n    width: 70px;\n    border: none;\n}\n\n.menu-button:hover {\n    background-color:#F0C5A1;\n}\n\n.about {\n    width: 500px;\n    height: 200px;\n    color: white;\n    font-size: 25px;\n}\n\n.menu {\n    color: white;\n    height: 100vh;\n    width: 500px;\n    border-radius: 1em;\n    padding: 20px;\n    text-align: center;\n    font-size: 40px;\n    margin-top: -100px;\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n    background-color: rgba(0,0,0,0.3);\n}\n\n.Pizza-category {\n    font-size: 35px;\n}\n\n.item {\n    display: flex;\n    font-size: 20px;\n    justify-content: space-evenly;\n    align-items: center;\n    margin-top: 20px;\n    color: beige;\n}\n\n.heading {\n    font-size: 35px;\n    color: #F0C5A1;\n}",""]);const l=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],p=r.base?s[0]+r.base:s[0],d=i[p]||0,u="".concat(p," ").concat(d);i[p]=d+1;var l=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),p=0;p<i.length;p++){var d=t(i[p]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},88:(n,e,t)=>{n.exports=t.p+"210a54b737a15b2b3686.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r={};(()=>{function n(){const n=document.querySelector(".main-content"),e=b("div","menu","Menu");n.appendChild(e),["Pizza","Pasta","Subs"].forEach((n=>{const t=b("div",`${n}-category`),r=b("h2","heading",n);t.appendChild(r),e.appendChild(t)}));const t=document.querySelector(".Pizza-category"),r=document.querySelector(".Pasta-category"),o=document.querySelector(".Subs-category"),i={"Cheese Pizza":"$12.50","Pepperoni Pizza":"$13.10"};for(const n in i){const e=b("div","item"),r=b("div","name",n),o=b("div","price",i[n]);e.appendChild(r),e.appendChild(o),t.appendChild(e)}const a={"Chicken Alfredo":"$8.60","Pasta Primavera":"$11.50","Chicken Carbonara":"$12.10"};for(const n in a){const e=b("div","item"),t=b("div","name",n),o=b("div","price",a[n]);e.appendChild(t),e.appendChild(o),r.appendChild(e)}const c={"Buffalo Chicken":"$7.50","Philly Cheese Steak":"$8.90"};for(const n in c){const e=b("div","item"),t=b("div","name",n),r=b("div","price",c[n]);e.appendChild(t),e.appendChild(r),o.appendChild(e)}}function e(){const e=document.querySelector(".main-content"),t=b("div","description","Serving Boston for over 50 years!");e.appendChild(t);const r=b("button","menu-button","Menu");t.appendChild(r),r.addEventListener("click",(()=>{y(),n()}))}t.d(r,{rs:()=>y,kQ:()=>x,NH:()=>b});var o=t(379),i=t.n(o),a=t(795),c=t.n(a),s=t(569),p=t.n(s),d=t(565),u=t.n(d),l=t(216),f=t.n(l),h=t(589),v=t.n(h),m=t(28),g={};g.styleTagTransform=v(),g.setAttributes=u(),g.insert=p().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=f(),i()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;const x=document.querySelector("#content");function b(n,e,t){const r=document.createElement(n);return r.classList.add(e),r.textContent=t,r}function y(){document.querySelector(".main-content").innerHTML=""}!function(){const n=b("div","header"),e=b("div","title","Boston Pizzeria"),t=b("ul","nav");["Home","About","Menu"].forEach((n=>{const e=b("li","nav-item",n);t.appendChild(e)})),x.appendChild(n),n.appendChild(e),n.appendChild(t);const r=b("div","main-content");x.appendChild(r)}(),e(),document.querySelectorAll(".nav-item").forEach((t=>{t.addEventListener("click",(()=>{"About"==t.textContent?(y(),function(){const n=document.querySelector(".main-content"),e=b("div","about","Boston Pizzeria is a family owned business that has been serving the community for over 50 years. We offer an array of pizzas, pastas, and subs");n.appendChild(e)}()):"Menu"==t.textContent?(y(),n()):(y(),e())}))}))})()})();