!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=10)}([function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e,r){var n=r(35),o=r(36),u=r(37),i=r(38);t.exports=function(t){return n(t)||o(t)||u(t)||i()}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.shopCartInfo=e.productCategoryWrapper=e.form=void 0;var n={productName:document.querySelector(".product-name__input"),productUnits:document.querySelector(".units"),productWeight:document.querySelector(".weight"),productCategory:document.querySelectorAll(".product-category-name"),btnSubmit:document.querySelector(".btn-submit")};e.form=n;var o=document.querySelectorAll(".product-category-wrapper");e.productCategoryWrapper=o;var u=document.querySelector(".shop-cart-info");e.shopCartInfo=u},function(t,e,r){"use strict";var n=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r(6)),u=n(r(40));function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var a,c,f=(a=[],c=0,function(t,e){return"object"===(0,u.default)(t)?(a.push(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){(0,o.default)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({id:c},t)),c++):void 0===t?a:"string"==typeof t&&(a=a.filter((function(t){return t.id!==e})))});e.default=f},function(t,e,r){t.exports=r(34)},function(t,e){function r(t,e,r,n,o,u,i){try{var a=t[u](i),c=a.value}catch(t){return void r(t)}a.done?e(c):Promise.resolve(c).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,u){var i=t.apply(e,n);function a(t){r(i,o,u,a,c,"next",t)}function c(t){r(i,o,u,a,c,"throw",t)}a(void 0)}))}}},function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},function(t,e,r){"use strict";var n=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r(3)),u=n(r(9)),i=function(t,e){return function(r){return e(t(r))}}((function(t){var e=parseFloat(t.target.parentNode.parentNode.getAttribute("data-id"));(0,o.default)("remove",e),t.target.parentNode.parentNode.remove(),(0,u.default)()}),(function(){return localStorage.setItem("products",JSON.stringify((0,o.default)()))})),a=function(t){return i(t)};e.default=function(t){return t.addEventListener("click",a)}},function(t,e,r){"use strict";var n=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r(1)),u=r(2),i=function(t){var e=t.lastElementChild.children.length;t.firstElementChild.lastElementChild.textContent="".concat(e,"/").concat(e)},a=function(t,e){return t+e},c=function(t){return parseFloat(t.firstElementChild.lastElementChild.textContent.slice(1,t.firstElementChild.lastElementChild.textContent.length))},f=function(t){return(0,o.default)(t.lastElementChild.children).map(c).reduce(a)},l=function(t){return parseFloat(t.lastElementChild.firstElementChild.textContent.slice(0,t.lastElementChild.firstElementChild.textContent.length-2))},d=function(t){return(0,o.default)(t.lastElementChild.children).map(l).reduce(a)},s=function(t){return(0,o.default)(t.lastElementChild.children).length>0},p=function(t,e){return function(r){return e(r,t(r))}}((function(t){var e=t.productCategoryWrapper;return(0,o.default)(e).map(i)}),(function(t){var e=t.shopCartInfo,r=t.productCategoryWrapper,n=(0,o.default)(r).filter(s),u=(0,o.default)(n).map(f).reduce(a,0),i=(0,o.default)(n).map(d).reduce(a,0);e.firstElementChild.textContent="Sztuk: ".concat(u),e.lastElementChild.textContent="Waga: ".concat(i,"kg")}));e.default=function(){return p({productCategoryWrapper:u.productCategoryWrapper,shopCartInfo:u.shopCartInfo})}},function(t,e,r){"use strict";var n=r(0);n(r(11)),n(r(32))},function(t,e,r){"use strict";var n=r(0);n(r(12)),n(r(29)),n(r(31))},function(t,e,r){"use strict";var n=r(0);n(r(13)),n(r(15)),n(r(17)),n(r(20)),n(r(25))},function(t,e,r){"use strict";r(0)(r(14))},function(t,e,r){},function(t,e,r){"use strict";r(0)(r(16))},function(t,e,r){},function(t,e,r){"use strict";var n=r(0);n(r(18)),n(r(19))},function(t,e,r){},function(t,e,r){},function(t,e,r){"use strict";var n=r(0);n(r(21)),n(r(22)),n(r(23)),n(r(24))},function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){"use strict";var n=r(0);n(r(26)),n(r(27)),n(r(28))},function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){"use strict";r(0)(r(30))},function(t,e,r){},function(t,e,r){},function(t,e,r){"use strict";var n=r(0);n(r(33)),n(r(8))},function(t,e,r){"use strict";var n=r(0),o=n(r(6)),u=n(r(4)),i=n(r(1)),a=n(r(5)),c=r(2),f=n(r(39)),l=n(r(3)),d=n(r(41)),s=n(r(42)),p=n(r(8)),m=n(r(43)),y=n(r(9));function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){(0,o.default)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var g,b,w=(b=g||0,function(){return++b}),x=function(t){return t.checked},O=function(t){return t.value},E=function(){var t=(0,a.default)(u.default.mark((function t(e,r){var n,o,a,c,f,d;return u.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.productName,o=r.productUnits,a=r.productWeight,c=r.productCategory,r.productCategoryWrapper,t.next=3,e;case 3:return t.sent,f=(0,i.default)(c).filter(x),d=w(),t.abrupt("return",(0,i.default)(f).map((function(){return(0,l.default)({productName:n.value,productUnits:o.value,productWeight:a.value,categories:(0,i.default)(c).filter(x).map(O),itemId:d})})));case 8:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),C=function(){var t=(0,a.default)(u.default.mark((function t(e){return u.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e;case 2:return t.sent,localStorage.setItem("products",JSON.stringify((0,l.default)())),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=(0,a.default)(u.default.mark((function t(e,r){var n,o,a,c,f;return u.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.productCategoryWrapper,t.next=3,e;case 3:t.sent,o=(0,i.default)((0,l.default)()).slice(-1)[0].itemId,a=(0,i.default)((0,l.default)()).filter((function(t){return t.itemId===o})),c=(0,i.default)(a[0].categories),f=(0,i.default)(n).filter((function(t){return(0,i.default)(c).find((function(e){return t.getAttribute("data-category")===e}))})),(0,i.default)(f).map((function(t,e){return t.lastElementChild.append((0,d.default)(a[e]))})),(0,y.default)(),(0,i.default)(document.querySelectorAll(".product-item-remove")).map(p.default),(0,i.default)(document.querySelectorAll(".product-category-item")).map(m.default);case 12:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),L=function(t,e,r,n,o,u){return function(i){return function(a){return u(o(n(r(e(t(a)),i)),i),i)}}}((function(t){return t.preventDefault()}),f.default,E,C,j,s.default)(v(v({},c.form),{},{productCategoryWrapper:c.productCategoryWrapper}));c.form.btnSubmit.addEventListener("click",(function(t){return L(t)}))},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",u=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function a(t,e,r,n){var o=e&&e.prototype instanceof l?e:l,u=Object.create(o.prototype),i=new O(n||[]);return u._invoke=function(t,e,r){var n="suspendedStart";return function(o,u){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw u;return C()}for(r.method=o,r.arg=u;;){var i=r.delegate;if(i){var a=b(i,r);if(a){if(a===f)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=c(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),u}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=a;var f={};function l(){}function d(){}function s(){}var p={};p[o]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(E([])));y&&y!==e&&r.call(y,o)&&(p=y);var h=s.prototype=l.prototype=Object.create(p);function v(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var n;this._invoke=function(o,u){function i(){return new e((function(n,i){!function n(o,u,i,a){var f=c(t[o],t,u);if("throw"!==f.type){var l=f.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,a)}),(function(t){n("throw",t,i,a)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,a)}))}a(f.arg)}(o,u,n,i)}))}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=c(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,u=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return u.next=u}}return{next:C}}function C(){return{value:void 0,done:!0}}return d.prototype=h.constructor=s,s.constructor=d,s[i]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,s):(t.__proto__=s,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(h),t},t.awrap=function(t){return{__await:t}},v(g.prototype),g.prototype[u]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,o,u){void 0===u&&(u=Promise);var i=new g(a(e,r,n,o),u);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},v(h),h[i]="Generator",h[o]=function(){return this},h.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var u=this.tryEntries[o],i=u.completion;if("root"===u.tryLoc)return n("end");if(u.tryLoc<=this.prev){var a=r.call(u,"catchLoc"),c=r.call(u,"finallyLoc");if(a&&c){if(this.prev<u.catchLoc)return n(u.catchLoc,!0);if(this.prev<u.finallyLoc)return n(u.finallyLoc)}else if(a){if(this.prev<u.catchLoc)return n(u.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return n(u.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var u=o;break}}u&&("break"===t||"continue"===t)&&u.tryLoc<=e&&e<=u.finallyLoc&&(u=null);var i=u?u.completion:{};return i.type=t,i.arg=e,u?(this.method="next",this.next=u.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e,r){var n=r(7);t.exports=function(t){if(Array.isArray(t))return n(t)}},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,e,r){var n=r(7);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,r){"use strict";var n=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r(4)),u=n(r(1)),i=n(r(5)),a=r(2),c=function(t){return t.checked},f=(0,i.default)(o.default.mark((function t(){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){return a.form.productName.value.length>0&&a.form.productUnits.value.length>0&&a.form.productWeight.value.length>0&&(0,u.default)(a.form.productCategory).filter(c).length>0?(t("Validate success!"),document.querySelector(".product").classList.remove("validate-error")):(e("Validate failed. Try again"),document.querySelector(".product").classList.add("validate-error"))})));case 1:case"end":return t.stop()}}),t)})));e.default=f},function(t,e){function r(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=r=function(t){return typeof t}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}t.exports=r},function(t,e,r){"use strict";var n=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n(r(3));e.default=function(t){var e=document.createElement("div"),r=(e.setAttribute("data-id",t.id),e.classList.add("product-category-item"),document.createElement("div")),n=(r.classList.add("product-category-item__left"),e.append(r),document.createElement("p")),o=(n.classList.add("product-category-text"),document.createTextNode("".concat(t.productName))),u=(n.append(o),r.append(n),document.createElement("span")),i=(u.classList.add("number-product-item"),document.createTextNode("x".concat(t.productUnits))),a=(u.append(i),r.append(u),document.createElement("div")),c=(a.classList.add("product-item-option"),e.append(a),document.createElement("span")),f=(c.classList.add("product-item-weight"),document.createTextNode("".concat(t.productWeight,"kg"))),l=(c.append(f),a.append(c),document.createElement("span")),d=(l.classList.add("product-item-edit"),a.append(l),document.createElement("span"));d.classList.add("product-item-remove"),a.append(d);return e}},function(t,e,r){"use strict";var n=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r(4)),u=n(r(1)),i=n(r(5)),a=(r(2),function(t){return t.value=""}),c=function(t){return t.checked=!1},f=function(){var t=(0,i.default)(o.default.mark((function t(e,r){var n,i,f,l;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.productName,i=r.productUnits,f=r.productWeight,l=r.productCategory,t.next=3,e;case 3:return t.sent,[n,i,f].map(a),t.abrupt("return",(0,u.default)(l).map(c));case 6:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}();e.default=f},function(t,e,r){"use strict";var n=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r(1)),u=n(r(3)),i=function(t,e){return e.id===parseFloat(t.getAttribute("data-id"))},a=function(t){var e=(0,o.default)(document.querySelectorAll(".product-category-item")).find((function(t){return t.classList.contains("product-category-item--active")})),r=(0,u.default)().find(i.bind(null,e));8===t.keyCode&&(0,u.default)().map((function(t){return t.id===r.id&&(t.productName=t.productName.slice(0,t.productName.length-1))})),8!==t.keyCode&&16!==t.keyCode&&13!==t.keyCode&&9!==t.keyCode&&17!==t.keyCode&&20!==t.keyCode&&18!==t.keyCode&&(0,u.default)().map((function(e){return e.id===r.id&&(e.productName+=t.key)})),e.firstElementChild.firstElementChild.textContent=(0,u.default)().find((function(t){return t.id===r.id})).productName,localStorage.setItem("products",JSON.stringify((0,u.default)()))},c=function(t){return t.classList.remove("product-category-item--active")},f=(window.addEventListener("click",(function(t){"product-item-edit"!==t.target.className&&(0,o.default)(document.querySelectorAll(".product-category-item")).map(c);return"product-item-edit"!==t.target.className&&window.removeEventListener("keydown",a)})),function(t,e,r){return function(n){return r(n,e(n,t()))}}((function(){return(0,o.default)(document.querySelectorAll(".product-category-item")).map(c)}),(function(t){return"product-item-edit"===t.target.className&&t.currentTarget.classList.add("product-category-item--active")}),(function(t){return t.currentTarget.classList.contains("product-category-item--active")?window.addEventListener("keydown",a):window.removeEventListener("keydown",a)}))),l=function(t){return f(t)};e.default=function(t){return t.addEventListener("click",l)}}]);