!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("React"),require("MaterialUI"));else if("function"==typeof define&&define.amd)define(["React","MaterialUI"],t);else{var r="object"==typeof exports?t(require("React"),require("MaterialUI")):t(e.React,e.MaterialUI);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,((e,t)=>(()=>{"use strict";var r={864:e=>{e.exports=t},24:t=>{t.exports=e}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return r[e](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{o.r(a);var e=o(24),t=o.n(e),r=o(864);function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i,l={Render:function(e){e.event,e.style;var n=e.property,o=e.monitor,a=e.trigger,i=e.children,l=e.env,p=e.update;t().useEffect((function(){if(o&&o.setOpenTrue){var e=o.setOpenTrue((function(e){n.open=!0,p()}));return function(){e()}}}),[]),t().useEffect((function(){if(o&&o.setOpenFalse){var e=o.setOpenFalse((function(e){n.open=!1,p()}));return function(){e()}}}),[]);var u=i&&i.main?i.main():null;return"prod"===l?t().createElement(r.Tooltip,{PopperProps:{"& .MuiTooltip-tooltip":{backgroundColor:"white",padding:0}},open:n.open,enenterDelay:n.enterDelay,leaveDelay:n.leaveDelay,title:i&&i.float?i.float():null,placement:n.placementPosition+("center"===n.placementAlign?"":"-"+n.placementAlign),arrow:n.arrow,onOpen:function(e){n.open=!0,p(),a&&a.onOpen&&a.onOpen(n.open,e)},onClose:function(e){n.open=!1,p(),a&&a.onClose&&a.onClose(n.open,e)}},u):"dev"===l?u:void 0},license:{key:"Material-Tooltip",dependencies:["MaterialUI"]}};window.graphElement=window.graphElement?[].concat(function(e){if(Array.isArray(e))return n(e)}(i=window.graphElement)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(i)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[l]):[l]})(),a})()));