(window.webpackJsonp=window.webpackJsonp||[]).push([["video"],{"007b":function(t,e,r){"use strict";r.r(e);var n=r("a34a"),i=r.n(n),o=r("70d5"),a=r.n(o),c=r("365c"),s={components:{CardBorder:a.a},data:function(){return{keyWord:"",selectedId:[],selectedArray:[],replaceFields:{title:"name",children:"children",key:"id"},treeData:[],autoExpandParent:!0}},created:function(){this.init()},methods:{init:function(){var t=this;Object(c.a)().then((function(e){200===e.status&&(t.setScoped(e.data),t.treeData=e.data,t.selectedId=[],t.selectedArray=[],t.handleSelect(t.treeData[0].children),t.$emit("on-search",t.selectedArray))}))},setScoped:function(t){for(var e=0;e<t.length;e++){var r=t[e];t[e].scopedSlots={title:"custom"},r.children&&this.setScoped(r.children)}},handleSelect:function(t){var e=this;t.forEach((function(r,n){var i=t.length;if(i>=9)r.children&&r.children.length&&(e.selectedId.push(r.id),r.children.forEach((function(t,n){0===n?(e.selectedArray.push({name:t.name,id:t.id}),t.selected=!0):t.selected=!1,r.children.splice(n,1,t)})));else{var o=9-i+1;r.children&&r.children.length&&(e.selectedId.push(r.id),r.children.forEach((function(t,i){0===n?i<o?(e.selectedArray.push({name:t.name,id:t.id}),t.selected=!0):t.selected=!1:0===i?(e.selectedArray.push({name:t.name,id:t.id}),e.selectedId.push(t.id),t.selected=!0):t.selected=!1,r.children.splice(i,1,t)})))}}))},handleClick:function(t){t.children||(t.selected=!t.selected,this.$emit("on-clcik",t),this.clickOption(t,this.treeData))},clickOption:function(t,e){for(var r=0;r<e.length;r++)if(e[r].id===t.id)e.splice(r,1,t);else{if(!(e[r].children&&e[r].children.length>0))continue;this.clickOption(t,e[r].children)}},onExpand:function(t){this.selectedId=t,this.autoExpandParent=!1},onChange:function(t){this.selectedId=[],this.selectedArray=[],this.filterTree(this.treeData),this.$emit("on-search",this.selectedArray)},filterTreeLastNode:function(t){for(var e=0;e<t.length;e++)t[e].children&&t[e].children.length>0?this.filterTreeLastNode(t[e].children):(this.selectedArray.push({name:t[e].name,id:t[e].id}),this.selectedId.push(t[e].id))},filterTree:function(t,e){for(var r=0;r<t.length;r++)this.keyWord&&t[r].name.indexOf(this.keyWord)>-1?(t[r].selected=!0,t[r].children&&t[r].children.length>0?this.filterTree(t[r].children,t[r].id):(this.selectedArray.push({name:t[r].name,id:t[r].id}),this.selectedId.push(e))):t[r].selected=!1,t.splice(r,1,t[r]),t[r].children&&t[r].children.length>0&&this.filterTree(t[r].children,t[r].id)}}},l=(r("d055"),r("2877")),u=Object(l.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Card",{staticClass:"tree-card"},[r("div",{staticClass:"tree-search",attrs:{slot:"title"},slot:"title"},[r("a-input",{attrs:{placeholder:"请输入单位名称"},on:{change:t.onChange},model:{value:t.keyWord,callback:function(e){t.keyWord=e},expression:"keyWord"}},[r("a-icon",{attrs:{slot:"prefix",type:"search"},slot:"prefix"})],1)],1),r("CardBorder",{staticStyle:{width:"100%"}}),r("div",{staticClass:"tree-box"},[r("a-tree",{staticClass:"tree",attrs:{defaultExpandAll:"","expanded-keys":t.selectedId,autoExpandParent:!0,selectable:!1,"tree-data":t.treeData,replaceFields:t.replaceFields},on:{expand:t.onExpand},scopedSlots:t._u([{key:"custom",fn:function(e){return[r("span",{style:e.selected?"color: #5BE6F1;font-weight: 500;":"",on:{click:function(r){return t.handleClick(e)}}},[t._v(t._s(e.name))])]}}])},[r("a-icon",{attrs:{slot:"switcherIcon",type:"caret-down"},slot:"switcherIcon"})],1)],1)],1)}),[],!1,null,"087d078e",null).exports,d={props:{list:Array},data:function(){return{}},created:function(){},methods:{forList:function(){var t=this;this.$nextTick((function(){t.list.forEach((function(t,e){new EZuikit.EZUIPlayer("myPlayer".concat(e))}))}))}}};r("7341");function h(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function p(t,e,r,n,i,o,a){try{var c=t[o](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,i)}var v={components:{TreeList:u,VideoList:Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-row",{attrs:{type:"flex",gutter:[16,16]}},t._l(t.list,(function(e,n){return r("a-col",{key:n,attrs:{span:8}},[r("Card",{staticClass:"video-list"},[r("video",{attrs:{id:"myPlayer"+n,controls:"",playsinline:"","webkit-playsinline":"",autoplay:""}},[r("source",{attrs:{src:e.src,type:"rtmp/flv"}})]),r("div",{staticClass:"name"},[t._v(t._s(e.name))])])],1)})),1)}),[],!1,null,"63062b5c",null).exports},data:function(){return{videoList:[]}},created:function(){},methods:{getVideoList:function(){var t,e=this;return(t=i.a.mark((function t(){var r,n,o,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.videoList,n=0;case 2:if(!(n<r.length)){t.next=12;break}if((o=r[n]).src){t.next=9;break}return t.next=7,Object(c.b)("?cameraIndexCode=".concat(o.id));case 7:200===(a=t.sent).status&&(o.src=a.data,e.videoList.splice(n,1,o));case 9:n++,t.next=2;break;case 12:e.$refs.video.forList();case 13:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){p(o,n,i,a,c,"next",t)}function c(t){p(o,n,i,a,c,"throw",t)}a(void 0)}))})()},treeSearch:function(t){this.videoList=[].concat(h(t),h(this.videoList)).splice(0,9),this.getVideoList()},treeClick:function(t){var e=this;t.selected?(this.videoList.unshift({name:t.name,id:t.id}),this.getVideoList()):this.videoList.forEach((function(r,n){r.id===t.id&&e.videoList.splice(n,1)}))}}},y=(r("2139"),Object(l.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"video"},[e("a-row",{attrs:{type:"flex",gutter:[16,16]}},[e("a-col",{attrs:{span:4}},[e("TreeList",{on:{"on-clcik":this.treeClick,"on-search":this.treeSearch}})],1),e("a-col",{attrs:{span:20}},[e("VideoList",{ref:"video",attrs:{list:this.videoList}})],1)],1)],1)}),[],!1,null,"07e3d18b",null));e.default=y.exports},2139:function(t,e,r){"use strict";var n=r("563f");r.n(n).a},"365c":function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return o}));var n=r("6b6c"),i=function(t){return Object(n.b)({url:"/hikserver/tvHikvision/getCamerasTree",method:"get"})},o=function(t){return Object(n.b)({url:"/hikserver/tvHikvision/getPreviewURLs".concat(t),method:"get"})}},"563f":function(t,e,r){},7341:function(t,e,r){"use strict";var n=r("926a");r.n(n).a},"926a":function(t,e,r){},"98b8":function(t,e,r){(function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r=function(t){"use strict";var r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,r,n){var i=e&&e.prototype instanceof d?e:d,o=Object.create(i.prototype),a=new k(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return S()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var c=b(a,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var u={};function d(){}function h(){}function f(){}var p={};p[o]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(E([])));y&&y!==r&&n.call(y,o)&&(p=y);var m=f.prototype=d.prototype=Object.create(p);function g(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function w(t,r){var i;this._invoke=function(o,a){function c(){return new r((function(i,c){!function i(o,a,c,s){var u=l(t[o],t,a);if("throw"!==u.type){var d=u.arg,h=d.value;return h&&"object"===e(h)&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){i("next",t,c,s)}),(function(t){i("throw",t,c,s)})):r.resolve(h).then((function(t){d.value=t,c(d)}),(function(t){return i("throw",t,c,s)}))}s(u.arg)}(o,a,i,c)}))}return i=i?i.then(c,c):c()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=m.constructor=f,f.constructor=h,f[c]=h.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(w.prototype),w.prototype[a]=function(){return this},t.AsyncIterator=w,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new w(s(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(m),m[c]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}("object"===e(t)?t.exports:{});try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}).call(this,r("62e4")(t))},"9f4c":function(t,e,r){},a34a:function(t,e,r){t.exports=r("98b8")},d055:function(t,e,r){"use strict";var n=r("9f4c");r.n(n).a}}]);