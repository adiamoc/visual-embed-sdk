/*! For license information please see component---docs-src-pages-index-js-7b57e4f9f4fe6309ca39.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0aO1":function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=n("3FYs"),c=n("X03y"),u=n("owmD");n("WVLT");e.default=function(t){var e=Object(r.useState)({}),n=e[0],l=e[1],s=Object(r.useState)(""),f=s[0],d=s[1],h=Object(r.useState)(""),g=h[0],v=h[1];Object(r.useEffect)((function(){l(Object(c.a)(t.location.search))}),[]),Object(r.useEffect)((function(){d(m[0].node.document.title||m[0].node.document.main),v(Object(u.a)(m[0].node.html,n))}),[n]);var m=Object(o.useStaticQuery)("830650768").allAsciidoc.edges;return a.a.createElement("div",null,a.a.createElement("header",{className:"header"},a.a.createElement("img",{src:"",alt:"logo",className:"logo"}),a.a.createElement("input",{type:"text",title:"search",className:"searchBox"})),a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"leftSidebar"},Object(i.a)("HOME_LEFT_NAVIGATION")),a.a.createElement("div",{className:"contentArea"},a.a.createElement("span",{dangerouslySetInnerHTML:{__html:"<b>Title:</b> "+f}}),a.a.createElement("b",null,"Document Content:"),a.a.createElement("div",{className:"docContentArea",dangerouslySetInnerHTML:{__html:g}})),a.a.createElement("div",{className:"rightSidebar"},Object(i.a)("HOME_RIGHT_NAVIGATION"))))}},"3FYs":function(t,e,n){"use strict";var r=n("kCIJ");e.a=function(t){return Object(r.useIntl)().formatMessage({id:t})}},GCtb:function(t,e,n){"use strict";var r=n("TqRt");e.__esModule=!0,e.changeLocale=e.navigate=e.default=void 0;var a=r(n("pVnL")),o=r(n("8OQS")),i=r(n("q1tI")),c=r(n("17x9")),u=n("Wbzz"),l=n("n83N"),s=function(t){var e=t.to,n=t.language,r=t.children,c=t.onClick,s=(0,o.default)(t,["to","language","children","onClick"]);return i.default.createElement(l.IntlContextConsumer,null,(function(t){var o=n||t.language,l=t.routed||n?"/"+o+e:""+e;return i.default.createElement(u.Link,(0,a.default)({},s,{to:l,onClick:function(t){n&&localStorage.setItem("gatsby-intl-language",n),c&&c(t)}}),r)}))};s.propTypes={children:c.default.node.isRequired,to:c.default.string,language:c.default.string},s.defaultProps={to:""};var f=s;e.default=f;e.navigate=function(t,e){if("undefined"!=typeof window){var n=window.___gatsbyIntl,r=n.language,a=n.routed?"/"+r+t:""+t;(0,u.navigate)(a,e)}};e.changeLocale=function(t,e){if("undefined"!=typeof window){var n=window.___gatsbyIntl.routed,r="/"+t+(e||function(t){if(!n)return t;var e=t.indexOf("/",1);return t.substring(e)}(function(t){var e="/embed-sdk";return 0===t.indexOf(e)&&(t=t.slice(e.length)),t}(window.location.pathname)))+window.location.search;localStorage.setItem("gatsby-intl-language",t),(0,u.navigate)(r)}}},WVLT:function(t,e,n){},X03y:function(t,e,n){"use strict";n("dasq");function r(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e.a=function(t){var e={};if(!t)return e;for(var n,a=r(new URLSearchParams(t).entries());!(n=a()).done;){var o=n.value,i=o[0],c=o[1];e[i]=c}return e}},dasq:function(t,e,n){(function(t){!function(t){"use strict";var e,n=function(){try{if(t.URLSearchParams&&"bar"===new t.URLSearchParams("foo=bar").get("foo"))return t.URLSearchParams}catch(e){}return null}(),r=n&&"a=1"===new n({a:1}).toString(),a=n&&"+"===new n("s=%2B").get("s"),o=!n||((e=new n).append("s"," &"),"s=+%26"===e.toString()),i=s.prototype,c=!(!t.Symbol||!t.Symbol.iterator);if(!(n&&r&&a&&o)){i.append=function(t,e){v(this.__URLSearchParams__,t,e)},i.delete=function(t){delete this.__URLSearchParams__[t]},i.get=function(t){var e=this.__URLSearchParams__;return this.has(t)?e[t][0]:null},i.getAll=function(t){var e=this.__URLSearchParams__;return this.has(t)?e[t].slice(0):[]},i.has=function(t){return p(this.__URLSearchParams__,t)},i.set=function(t,e){this.__URLSearchParams__[t]=[""+e]},i.toString=function(){var t,e,n,r,a=this.__URLSearchParams__,o=[];for(e in a)for(n=f(e),t=0,r=a[e];t<r.length;t++)o.push(n+"="+f(r[t]));return o.join("&")};var u=!!a&&n&&!r&&t.Proxy;Object.defineProperty(t,"URLSearchParams",{value:u?new Proxy(n,{construct:function(t,e){return new t(new s(e[0]).toString())}}):s});var l=t.URLSearchParams.prototype;l.polyfill=!0,l.forEach=l.forEach||function(t,e){var n=g(this.toString());Object.getOwnPropertyNames(n).forEach((function(r){n[r].forEach((function(n){t.call(e,n,r,this)}),this)}),this)},l.sort=l.sort||function(){var t,e,n,r=g(this.toString()),a=[];for(t in r)a.push(t);for(a.sort(),e=0;e<a.length;e++)this.delete(a[e]);for(e=0;e<a.length;e++){var o=a[e],i=r[o];for(n=0;n<i.length;n++)this.append(o,i[n])}},l.keys=l.keys||function(){var t=[];return this.forEach((function(e,n){t.push(n)})),h(t)},l.values=l.values||function(){var t=[];return this.forEach((function(e){t.push(e)})),h(t)},l.entries=l.entries||function(){var t=[];return this.forEach((function(e,n){t.push([n,e])})),h(t)},c&&(l[t.Symbol.iterator]=l[t.Symbol.iterator]||l.entries)}function s(t){((t=t||"")instanceof URLSearchParams||t instanceof s)&&(t=t.toString()),this.__URLSearchParams__=g(t)}function f(t){var e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'\(\)~]|%20|%00/g,(function(t){return e[t]}))}function d(t){return t.replace(/[ +]/g,"%20").replace(/(%[a-f0-9]{2})+/gi,(function(t){return decodeURIComponent(t)}))}function h(e){var n={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return c&&(n[t.Symbol.iterator]=function(){return n}),n}function g(t){var e={};if("object"==typeof t)if(m(t))for(var n=0;n<t.length;n++){var r=t[n];if(!m(r)||2!==r.length)throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements");v(e,r[0],r[1])}else for(var a in t)t.hasOwnProperty(a)&&v(e,a,t[a]);else{0===t.indexOf("?")&&(t=t.slice(1));for(var o=t.split("&"),i=0;i<o.length;i++){var c=o[i],u=c.indexOf("=");-1<u?v(e,d(c.slice(0,u)),d(c.slice(u+1))):c&&v(e,d(c),"")}}return e}function v(t,e,n){var r="string"==typeof n?n:null!=n&&"function"==typeof n.toString?n.toString():JSON.stringify(n);p(t,e)?t[e].push(r):t[e]=[r]}function m(t){return!!t&&"[object Array]"===Object.prototype.toString.call(t)}function p(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(void 0!==t?t:"undefined"!=typeof window?window:this)}).call(this,n("yLpj"))},e2gX:function(t,e,n){"use strict";var r=n("TqRt");e.__esModule=!0,e.default=void 0;var a=r(n("q1tI")),o=n("7++0");e.default=function(t){return function(e){return console.warn("withIntl is deprecated. Please use injectIntl instead."),a.default.createElement((0,o.injectIntl)(t),e)}}},kCIJ:function(t,e,n){"use strict";var r=n("TqRt"),a=n("284h");e.__esModule=!0;var o={Link:!0,withIntl:!0,navigate:!0,changeLocale:!0,IntlContextProvider:!0,IntlContextConsumer:!0};e.IntlContextConsumer=e.IntlContextProvider=e.changeLocale=e.navigate=e.withIntl=e.Link=void 0;var i=n("7++0");Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(o,t)||(e[t]=i[t]))}));var c=a(n("GCtb"));e.Link=c.default,e.navigate=c.navigate,e.changeLocale=c.changeLocale;var u=r(n("e2gX"));e.withIntl=u.default;var l=n("n83N");e.IntlContextProvider=l.IntlContextProvider,e.IntlContextConsumer=l.IntlContextConsumer},owmD:function(t,e,n){"use strict";e.a=function(t,e){var n=t,r=Object.keys(e);if(!t&&0===r.length)return n;return r.map((function(t){n=n.replace(new RegExp("{{"+t+"}}","g"),e[t]||"")})),n}}}]);
//# sourceMappingURL=component---docs-src-pages-index-js-7b57e4f9f4fe6309ca39.js.map