parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({253:[function(require,module,exports) {
module.exports={props:{name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},newItem:{type:Boolean,default:!1},relationship:{type:Object,default:null}}};
},{}],316:[function(require,module,exports) {
"use strict";function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,B=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=B?1e3:1024;if(!1===Boolean(e))return"--";if(Math.abs(e)<i)return e+" B";var t=B?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],r=-1,o=e;do{o/=i,r+=1}while(Math.abs(o)>=i&&r<t.length-1);return o.toFixed(1)+" "+t[r]}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],18:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../../mixins/interface"),t=u(e),r=require("./format-size"),i=u(r);function u(e){return e&&e.__esModule?e:{default:e}}exports.default={mixins:[t.default],methods:{formatSize:i.default}};
(function(){var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.options.format?o("div",{staticClass:"no-wrap"},[t._v(t._s(t.formatSize(t.value,t.options.decimal)))]):o("div",{staticClass:"no-wrap"},[t._v(t._s(t.value))])},staticRenderFns:[],_compiled:!0,_scopeId:null,functional:void 0});})();
},{"../../../mixins/interface":253,"./format-size":316}]},{},[18], "__DirectusExtension__")