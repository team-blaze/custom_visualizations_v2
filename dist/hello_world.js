!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.hello_world=t():e.hello_world=t()}(window,(function(){return function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=844)}({844:function(e,t){looker.plugins.visualizations.add({id:"hello_world",label:"Hello World",options:{font_size:{type:"string",label:"Font Size",values:[{Large:"large"},{Small:"small"}],display:"radio",default:"large"}},create:function(e,t){e.innerHTML="\n      <style>\n        .hello-world-vis {\n          /* Vertical centering */\n          height: 100%;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          text-align: center;\n        }\n        .hello-world-text-large {\n          font-size: 72px;\n        }\n        .hello-world-text-small {\n          font-size: 18px;\n        }\n      </style>\n    ";var n=e.appendChild(document.createElement("div"));n.className="hello-world-vis",this._textElement=n.appendChild(document.createElement("div"))},updateAsync:function(e,t,n,l,o,r){if(this.clearErrors(),0!=l.fields.dimensions.length){var i=e[0][l.fields.dimensions[0].name];this._textElement.innerHTML=LookerCharts.Utils.htmlForCell(i),"small"==n.font_size?this._textElement.className="hello-world-text-small":this._textElement.className="hello-world-text-large",r()}else this.addError({title:"No Dimensions",message:"This chart requires dimensions."})}})}})}));