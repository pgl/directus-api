parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({253:[function(require,module,exports) {
module.exports={props:{name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},newItem:{type:Boolean,default:!1},relationship:{type:Object,default:null}}};
},{}],13:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../../mixins/interface"),t=i(e);function i(e){return e&&e.__esModule?e:{default:e}}exports.default={mixins:[t.default],computed:{choices:function(){var e=this.options.choices;return e?("string"==typeof this.options.choices&&(e=JSON.parse(this.options.choices)),e):{}},width:function(){if(!this.choices)return"medium";var e="";Object.values(this.choices).forEach(function(t){t.length>e.length&&(e=t)});var t=e.length;return t<=7?"x-small":t>7&&t<=25?"small":"medium"}}};
(function(){var e=exports.default||module.exports;"function"==typeof e&&(e=e.options),Object.assign(e,{render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-select",{class:e.width,attrs:{value:e.value,disabled:e.readonly,id:e.name,options:e.choices,placeholder:e.options.placeholder},on:{input:function(t){e.$emit("input",t)}}})},staticRenderFns:[],_compiled:!0,_scopeId:"data-v-b043b3",functional:void 0});})();
},{"../../../mixins/interface":253}]},{},[13], "__DirectusExtension__")