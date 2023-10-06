/*! For license information please see 60.07e88e3e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[60],{934:function(t,n,r){r.d(n,{Df:function(){return a},M1:function(){return p},Wf:function(){return u},tx:function(){return d},vq:function(){return f}});var e=r(861),o=r(243);function i(){i=function(){return n};var t,n={},r=Object.prototype,e=r.hasOwnProperty,o=Object.defineProperty||function(t,n,r){t[n]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{f({},"")}catch(t){f=function(t,n,r){return t[n]=r}}function l(t,n,r,e){var i=n&&n.prototype instanceof g?n:g,a=Object.create(i.prototype),c=new I(e||[]);return o(a,"_invoke",{value:E(t,r,c)}),a}function p(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=l;var h="suspendedStart",d="executing",x="completed",y={};function g(){}function v(){}function m(){}var w={};f(w,c,(function(){return this}));var b=Object.getPrototypeOf,Z=b&&b(b(G([])));Z&&Z!==r&&e.call(Z,c)&&(w=Z);var j=m.prototype=g.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(n){f(t,n,(function(t){return this._invoke(n,t)}))}))}function k(t,n){function r(o,i,a,c){var u=p(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&e.call(f,"__await")?n.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):n.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}})}function E(n,r,e){var o=h;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===x){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=_(c,e);if(u){if(u===y)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===h)throw o=x,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=d;var s=p(n,r,e);if("normal"===s.type){if(o=e.done?x:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(o=x,e.method="throw",e.arg=s.arg)}}}function _(n,r){var e=r.method,o=n.iterator[e];if(o===t)return r.delegate=null,"throw"===e&&n.iterator.return&&(r.method="return",r.arg=t,_(n,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),y;var i=p(o,n.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[n.resultName]=a.value,r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function N(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function O(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function G(n){if(n||""===n){var r=n[c];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function r(){for(;++o<n.length;)if(e.call(n,o))return r.value=n[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof n+" is not iterable")}return v.prototype=m,o(j,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:v,configurable:!0}),v.displayName=f(m,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===v||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,f(t,s,"GeneratorFunction")),t.prototype=Object.create(j),t},n.awrap=function(t){return{__await:t}},L(k.prototype),f(k.prototype,u,(function(){return this})),n.AsyncIterator=k,n.async=function(t,r,e,o,i){void 0===i&&(i=Promise);var a=new k(l(t,r,e,o),i);return n.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(j),f(j,s,"Generator"),f(j,c,(function(){return this})),f(j,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),r=[];for(var e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},n.values=G,I.prototype={constructor:I,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!n)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function o(e,o){return c.type="throw",c.arg=n,r.next=e,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),y},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),y}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,r,e){return this.delegate={iterator:G(n),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=t),y}},n}function a(){return c.apply(this,arguments)}function c(){return(c=(0,e.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Z)("trending/movie/day");case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(t){return s.apply(this,arguments)}function s(){return(s=(0,e.Z)(i().mark((function t(n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Z)("search/movie",{params:{query:n}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(i().mark((function t(n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Z)("movie/".concat(n));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(i().mark((function t(n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Z)("movie/".concat(n,"/credits"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t,n){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(i().mark((function t(n,r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Z)("movie/".concat(n,"/reviews"),{params:{language:r}});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/3/",o.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGVjNGU1OWY0OTlhZGQ5NjVkN2NmNjk5YTZkOGRlNyIsInN1YiI6IjY1MWM1M2Y1MDcyMTY2MDBmZjM3NDk0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.91Kw-tRHX8oTVWhdZCyNNS7crQr_H5V8KLPU4Fy9m1g",o.Z.defaults.params={language:"uk-UA"}},139:function(t,n,r){r.d(n,{$t:function(){return m},B5:function(){return v},B7:function(){return w},II:function(){return x},UK:function(){return g},j0:function(){return b},mn:function(){return Z},uj:function(){return y},x3:function(){return j}});var e,o,i,a,c,u,s,f,l,p=r(168),h=r(87),d=r(867),x=(0,d.default)(h.rU)(e||(e=(0,p.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 5px;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  border: 1px solid #000;\n  border-radius: 5px;\n  margin-bottom: 10px;\n\n  &:hover {\n    color: #fff;\n    background-color: #500;\n  }\n"]))),y=d.default.div(o||(o=(0,p.Z)(["\n  width: 300px;\n"]))),g=d.default.div(i||(i=(0,p.Z)(["\n  display: flex;\n  gap: 20px;\n\n  & h3 {\n    margin-bottom: 5px;\n  }\n\n  & p {\n    max-width: 700px;\n    margin-bottom: 10px;\n  }\n"]))),v=d.default.p(a||(a=(0,p.Z)(["\n  color: grey;\n  opacity: 0.8;\n  margin-bottom: 10px;\n"]))),m=d.default.div(c||(c=(0,p.Z)(["\n  display: flex;\n  gap: 4px;\n\n  & > p {\n    opacity: 0.7;\n    font-size: 0.7rem;\n  }\n"]))),w=d.default.p(u||(u=(0,p.Z)(["\n  font-weight: 500;\n  font-size: 1.2rem;\n  margin-bottom: 10px;\n"]))),b=d.default.div(s||(s=(0,p.Z)(["\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  & > p {\n    font-weight: 500;\n    font-size: 1.5rem;\n    margin-bottom: 10px;\n  }\n  & > ul {\n    display: flex;\n    gap: 20px;\n  }\n"]))),Z=(0,d.default)(h.OL)(f||(f=(0,p.Z)(["\n  padding: 4px 8px;\n  text-decoration: none;\n  border-radius: 4px;\n  color: #000;\n  font-weight: 500;\n  border: 1px solid #000;\n\n  &.active {\n    background-color: #000;\n    color: #fff;\n  }\n"]))),j=d.default.h3(l||(l=(0,p.Z)(["\n  text-align: center;\n  margin-bottom: 5px;\n"])))},592:function(t,n,r){r.d(n,{CK:function(){return f},O3:function(){return h},_V:function(){return l},up:function(){return p}});var e,o,i,a,c=r(168),u=r(87),s=r(867).default,f=s.ul(e||(e=(0,c.Z)(["\n  padding-top: 10px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px 10px;\n"]))),l=s.div(o||(o=(0,c.Z)(["\n  width: 200px;\n  min-height: 40px;\n  padding: 5px;\n  border: 1px solid #e7e9fc;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  & > p {\n    color: #000;\n    text-align: center;\n    font-weight: 500;\n  }\n"]))),p=s(u.rU)(i||(i=(0,c.Z)(["\n  display: block;\n  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:is(:hover, :focus) {\n    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),\n      0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);\n  }\n\n  &:is(:hover, :focus) "," {\n    border: 1px solid #f4f4fd;\n  }\n"])),l),h=s.div(a||(a=(0,c.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fffdfc;\n"])))},60:function(t,n,r){r.r(n),r.d(n,{default:function(){return x}});var e,o=r(439),i=r(934),a=r(139),c=r(791),u=r(689),s=r(168),f=r(867).default.div(e||(e=(0,s.Z)(["\n  width: 900px;\n  border-radius: 5px;\n  padding: 5px 10px;\n  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),\n    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);\n\n  & .author {\n    font-weight: 600;\n    font-size: 1.2rem;\n    margin-bottom: 5px;\n  }\n\n  & .overview {\n    font-size: 1rem;\n    margin-bottom: 10px;\n  }\n\n  & .created_at {\n    font-size: 0.6rem;\n    opacity: 0.8;\n  }\n"]))),l=r(592),p=r(85),h=r(290),d=(r(462),r(184)),x=function(){var t=(0,u.UO)().movieID,n=(0,c.useState)([]),r=(0,o.Z)(n,2),e=r[0],s=r[1],x=(0,c.useState)(!1),y=(0,o.Z)(x,2),g=y[0],v=y[1];return(0,c.useEffect)((function(){0===e.length&&(v(!0),(0,i.tx)(t,"uk-UA").then((function(t){t.results.length>0&&s(t.results)})).catch((function(t){return console.log(t)})).finally((function(){return v(!1)}))),0===e.length&&(v(!0),(0,i.tx)(t,"en-US").then((function(t){t.results.length>0&&(s(t.results),p.Am.info("\u041d\u0430\u0436\u0430\u043b\u044c, \u043f\u043e\u043a\u0438 \u043d\u0456\u0445\u0442\u043e \u043d\u0435 \u0437\u0430\u043b\u0438\u0448\u0438\u0432 \u0443\u043a\u0440\u0430\u0457\u043d\u043e\u043c\u043e\u0432\u043d\u0456 \u0432\u0456\u0433\u0443\u043a\u0438, \u0430\u043b\u0435 \u043e\u0441\u044c \u0430\u043d\u0433\u043b\u043e\u043c\u043e\u0432\u043d\u0456\n          \u0432\u0456\u0434\u0433\u0443\u043a\u0438"))})).catch((function(t){return console.log(t)})).finally((function(){return v(!1)})))}),[t,e]),(0,d.jsxs)("div",{children:[(0,d.jsx)(a.x3,{children:"\u041e\u0433\u043b\u044f\u0434\u0438"}),g&&(0,d.jsx)(h.Z,{count:5}),0===e.length&&(0,d.jsx)("p",{children:"\u041f\u043e\u043a\u0438 \u043d\u0456\u0445\u0442\u043e \u043d\u0435 \u0434\u043e\u0434\u0430\u0432 \u0432\u0456\u0434\u0433\u0443\u043a\u0456\u0432 \u043f\u0440\u043e \u0446\u0435\u0439 \u0444\u0456\u043b\u044c\u043c"}),e.length>0&&(0,d.jsx)(l.CK,{children:e.map((function(t){var n=t.author,r=t.content,e=t.created_at,o=t.id;return(0,d.jsx)("li",{children:(0,d.jsxs)(f,{children:[(0,d.jsx)("p",{className:"author",children:n}),(0,d.jsx)("p",{className:"overview",children:r}),(0,d.jsxs)("p",{className:"created_at",children:["\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043e: ",Date(e)]})]})},o)}))}),(0,d.jsx)(p.Ix,{})]})}}}]);
//# sourceMappingURL=60.07e88e3e.chunk.js.map