!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("React"));else if("function"==typeof define&&define.amd)define(["React"],e);else{var n="object"==typeof exports?e(require("React")):e(t.React);for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(self,(t=>(()=>{"use strict";var e={24:e=>{e.exports=t}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return(()=>{o.r(r);var t=o(24),e=o.n(t),n={eventMonitor:[],addEventMonitor:function(t){var e={name:t.name,event:t.event,env:t.env};return n.eventMonitor.push(e),function(){n.eventMonitor=n.eventMonitor.filter((function(t){return t!==e}))}},triggerEvent:function(t){var e=t.name,o=t.event,r=t.env,i=t.data,a=function(t){n.eventMonitor.forEach((function(n){if(n.name===e&&("function"==typeof n.event&&n.event(t,n.env),"string"==typeof n.event))try{new Function("data","env","(".concat(n.event,")(data, env)"))(t,n.env)}catch(t){console.error(t)}}))};if(o)try{new Function("data","env","resolve","(".concat(o,")(data, env, resolve)"))(i,r,a)}catch(t){console.error(t)}else a(i)}},i=function(t){return isNaN(t)?t:t+"px"},a=function(t){if(t){var e={};return e.className=t.className,void 0!==t.visibility&&(e.visibility=t.visibility),void 0!==t.display&&(e.display=t.display),void 0!==t.overflow&&(e.overflow=t.overflow),void 0!==t.verticalAlign&&(e.verticalAlign=t.verticalAlign),void 0!==t.position&&(e.position=t.position),void 0!==t.zIndex&&(e.zIndex=t.zIndex),void 0!==t.cursor&&(e.cursor=t.cursor),void 0!==t.width&&(e.width=i(t.width)),void 0!==t.height&&(e.height=i(t.height)),void 0!==t.minWidth&&(e.minWidth=i(t.minWidth)),void 0!==t.minHeight&&(e.minHeight=i(t.minHeight)),void 0!==t.maxWidth&&(e.maxWidth=i(t.maxWidth)),void 0!==t.maxHeight&&(e.maxHeight=i(t.maxHeight)),void 0!==t.padding&&(t.padding.includes("")?(t.padding[0]&&(e.paddingTop=i(t.padding[0])),t.padding[1]&&(e.paddingRight=i(t.padding[1])),t.padding[2]&&(e.paddingBottom=i(t.padding[2])),t.padding[3]&&(e.paddingLeft=i(t.padding[3]))):e.padding=t.padding.map((function(t){return i(t)})).join(" ")),void 0!==t.margin&&(t.margin.includes("")?(t.margin[0]&&(e.marginTop=i(t.margin[0])),t.margin[1]&&(e.marginRight=i(t.margin[1])),t.margin[2]&&(e.marginBottom=i(t.margin[2])),t.margin[3]&&(e.marginLeft=i(t.margin[3]))):e.margin=t.margin.map((function(t){return i(t)})).join(" ")),void 0!==t.inset&&(e.top=t.inset[0]?i(t.inset[0]):"auto",e.right=t.inset[1]?i(t.inset[1]):"auto",e.bottom=t.inset[2]?i(t.inset[2]):"auto",e.left=t.inset[3]?i(t.inset[3]):"auto"),t.flex&&(e.flexDirection=t.flex.flexDirection,e.flexWrap=t.flex.flexWrap,e.justifyContent=t.flex.justifyContent,e.alignItems=t.flex.alignItems,e.alignContent=t.flex.alignContent,e.flexGrow=t.flex.flexGrow,e.flexShrink=t.flex.flexShrink,e.flexBasis=t.flex.flexBasis),void 0!==t.transform&&(e.perspective=t.transform.perspective,e.transformStyle=t.transform.transformStyle,e.transformOrigin=t.transform.transformOrigin.map((function(t){return i(t)})).join(" "),e.transform="\n        translateX(".concat(i(t.transform.transformTranslate[0]),")\n        translateY(").concat(i(t.transform.transformTranslate[1]),")\n        translateZ(").concat(i(t.transform.transformTranslate[2]),")\n        rotateX(").concat(t.transform.transformRotate[0],"deg)\n        rotateY(").concat(t.transform.transformRotate[1],"deg)\n        rotateZ(").concat(t.transform.transformRotate[2],"deg)\n        scaleX(").concat(t.transform.transformScale[0],")\n        scaleY(").concat(t.transform.transformScale[1],")\n        scaleZ(").concat(t.transform.transformScale[2],")\n      ")),void 0!==t.transition&&(e.transition="".concat(t.transition.transitionTime,"s all")),void 0!==t.filter&&(e.filter="blur(".concat(t.filter.filterBlur,"px) brightness(").concat(t.filter.filterBrightness,"%) opacity(").concat(t.filter.filterOpacity,"%)")),void 0!==t.border&&(t.border.borderPosition.includes("top")&&Object.assign(e,{borderTop:"".concat(t.border.borderColor," ").concat(t.border.borderStyle," ").concat(t.border.borderWidth,"px")}),t.border.borderPosition.includes("bottom")&&Object.assign(e,{borderBottom:"".concat(t.border.borderColor," ").concat(t.border.borderStyle," ").concat(t.border.borderWidth,"px")}),t.border.borderPosition.includes("left")&&Object.assign(e,{borderLeft:"".concat(t.border.borderColor," ").concat(t.border.borderStyle," ").concat(t.border.borderWidth,"px")}),t.border.borderPosition.includes("right")&&Object.assign(e,{borderRight:"".concat(t.border.borderColor," ").concat(t.border.borderStyle," ").concat(t.border.borderWidth,"px")})),void 0!==t.borderRadius&&Object.assign(e,{borderRadius:"\n        ".concat(i(t.borderRadius[0]),"\n        ").concat(i(t.borderRadius[1]),"\n        ").concat(i(t.borderRadius[2]),"\n        ").concat(i(t.borderRadius[3]),"\n      ")}),void 0!==t.boxShadow&&Object.assign(e,{boxShadow:"".concat(t.boxShadow.boxShadowPosition[0],"px ").concat(t.boxShadow.boxShadowPosition[1],"px ").concat(t.boxShadow.boxShadowSize,"px ").concat(t.boxShadow.boxShadowColor," ").concat(t.boxShadow.boxShadowInset?"inset":"")}),void 0!==t.outline&&Object.assign(e,{outline:"".concat(t.outline.outlineColor," ").concat(t.outline.outlineStyle," ").concat(t.outline.outlineWidth,"px")}),void 0!==t.background&&Object.assign(e,{background:"\n        ".concat(t.background.backgroundColor," \n        ").concat(t.background.backgroundPosition[0]).concat(t.background.backgroundPosition[1],"/").concat(t.background.backgroundSize[0]).concat(t.background.backgroundSize[1]," \n        ").concat(t.background.backgroundRepeat," \n        ").concat(t.background.backgroundAttachment," \n        ").concat(t.background.backgroundImage?"url(".concat(t.background.backgroundImage,")"):"none","\n      ")}),void 0!==t.font&&(t.font.fontSize&&(e.fontSize=t.font.fontSize+"px"),t.font.fontWeight&&(e.fontWeight=t.font.fontWeight),t.font.fontFamily&&(e.fontFamily=t.font.fontFamily)),void 0!==t.text&&(t.text.lineHeight&&(e.lineHeight=t.text.lineHeight),t.text.letterSpacing&&(e.letterSpacing=t.text.letterSpacing+"px"),t.text.textAlign&&(e.textAlign=t.text.textAlign),t.text.whiteSpace&&(e.whiteSpace=t.text.whiteSpace),t.text.color&&(e.color=t.text.color)),void 0!==t.textDecoration&&Object.assign(e,{textDecoration:"".concat(t.textDecoration.textDecorationColor," ").concat(t.textDecoration.textDecorationLine," ").concat(t.textDecoration.textDecorationStyle)}),void 0!==t.textShadow&&Object.assign(e,{textShadow:"".concat(t.textShadow.textShadowPosition[0],"px ").concat(t.textShadow.textShadowPosition[1],"px ").concat(t.textShadow.textShadowSize,"px ").concat(t.textShadow.textShadowColor)}),void 0!==t.textStroke&&Object.assign(e,{textStroke:"".concat(t.textStroke.textStrokeWidth,"px ").concat(t.textStroke.textStrokeColor),webkitTextStroke:"".concat(t.textStroke.textStrokeWidth,"px ").concat(t.textStroke.textStrokeColor)}),e}};function c(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||s(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(i.push(o.value),!e||i.length!==e);a=!0);}catch(t){c=!0,r=t}finally{try{a||null==n.return||n.return()}finally{if(c)throw r}}return i}}(t,e)||s(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){if(t){if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,e):void 0}}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function v(t){var o=window.graphElement,r=t.element,i=r.flow,u=r.license,l=r.id,s=r.use,b=r.property,p=r.style,g=r.children,m=r.monitor,h=r.trigger,x=r.hook,y=e().useMemo((function(){return function(t,e){return e.find((function(e){return e.license.key===t}))||{Render:null,Edit:null,View:null,information:null,license:null}}(u,o)}),[]),S=y.Render;if(!S)return null;var w=f(e().useState(0),2)[1],k=function(){return w((function(t){return t+1}))},j={property:b,style:p,flow:i,update:k},O=e().useMemo((function(){if(h){var t={};return h.forEach((function(e){if(e.key)return t[e.key]?t[e.key].push(e):t[e.key]=[e]})),Object.entries(t).forEach((function(e){t[e[0]]=function(t,o){return e[1].forEach((function(e){n.triggerEvent({name:e.name,event:e.useEval?e.event:null,env:d(d({},j),{},{event:o}),data:t})}))}})),t}}),[b,p,i,h]);j.trigger=O;var M=e().useMemo((function(){if(m){var t={};return m.filter((function(t){return!t.useEval})).forEach((function(e){return e.key&&t[e.key]?t[e.key].push(e):t[e.key]=[e]})),Object.entries(t).forEach((function(e){t[e[0]]=function(t){var o=e[1].map((function(e){return n.addEventMonitor({name:e.name,event:t,env:j})}));return function(){return o.forEach((function(t){return t()}))}}})),t}}),[b,p,i,m]);e().useEffect((function(){if(m){var e=[].concat(c(m.filter((function(t){return t.useEval})).map((function(t){return n.addEventMonitor({name:t.name,event:t.event,env:j})}))),c(m.filter((function(t){return"@setUseTrue"===t.key})).map((function(e){return n.addEventMonitor({name:e.name,event:function(e){t.element.use=!1,k()}})}))),c(m.filter((function(t){return"@setUseFalse"===t.key})).map((function(e){return n.addEventMonitor({name:e.name,event:function(e){t.element.use=!0,k()}})}))));return function(){return e.forEach((function(t){return t()}))}}}),[b,p,i,m]);var E={property:b,style:p,flow:i};if(x.useBeforeRenderHook)try{new Function("env","(".concat(x.beforeRenderHook,")(env)"))(E)}catch(t){console.error(t)}var C=e().useMemo((function(){if(g){var t={};return Object.entries(g).forEach((function(n){t[n[0]]=function(t){return n[1].map((function(n){return e().createElement(v,{key:n.id,flow:t||i,element:n})}))}})),t}}),[g,i]),P={};O["@onClick"]&&(P.onClick=function(t){return O["@onClick"](void 0,t)}),O["@onDoubleClick"]&&(P.onDoubleClick=function(t){return O["@onDoubleClick"](void 0,t)}),O["@onMouseEnter"]&&(P.onMouseEnter=function(t){return O["@onMouseEnter"](void 0,t)}),O["@onMouseLeave"]&&(P.onMouseLeave=function(t){return O["@onMouseLeave"](void 0,t)}),O["@onMouseMove"]&&(P.onMouseMove=function(t){return O["@onMouseMove"](void 0,t)}),O["@onMouseDown"]&&(P.onMouseDown=function(t){return O["@onMouseDown"](void 0,t)}),O["@onMouseUp"]&&(P.onMouseUp=function(t){return O["@onMouseUp"](void 0,t)}),O["@onTouchMove"]&&(P.onTouchMove=function(t){return O["@onTouchMove"](void 0,t)}),O["@onTouchStart"]&&(P.onTouchStart=function(t){return O["@onTouchStart"](void 0,t)}),O["@onTouchEnd"]&&(P.onTouchEnd=function(t){return O["@onTouchEnd"](void 0,t)});var R={style:d(d({},a(p)),{},{boxSizing:"border-box"})};return!1===s?null:e().createElement(S,{event:P,style:R,property:b,monitor:M,trigger:O,children:C,env:"prod",update:k,id:l})}const p=function(){var t=window,n=t.graphContent,o=t.graphConfig,r=f(e().useState(0),2),i=(r[0],r[1]);return o.project.updateId&&(window[o.project.updateId]=function(){return i((function(t){return t+1}))}),n.map((function(t){return e().createElement(v,{key:t.id,element:t})}))};ReactDOM.render(React.createElement(p,null),document.getElementById(window.graphConfig.project.renderId))})(),r})()));