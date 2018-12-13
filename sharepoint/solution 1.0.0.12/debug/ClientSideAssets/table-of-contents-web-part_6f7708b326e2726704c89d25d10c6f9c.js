define("3b4fda2d-a2a2-434f-a9b4-f87ed33e7f61_0.0.1",["react","TableOfContentsWebPartStrings","react-dom","@microsoft/sp-core-library","@microsoft/sp-webpart-base"],function(e,t,o,n,r){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(t,o){t.exports=e},function(e,o){e.exports=t},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(0),r=o(3),i=o(4),a=o(5),s=o(1);o(6);var c={tableOfContents:"tableOfContents_2a16e846",container:"container_2a16e846",fixedContainer:"fixedContainer_2a16e846",row:"row_2a16e846",column:"column_2a16e846","ms-Grid":"ms-Grid_2a16e846",title:"title_2a16e846",subTitle:"subTitle_2a16e846",description:"description_2a16e846",tocItem:"tocItem_2a16e846",tocIcon:"tocIcon_2a16e846",tocItemText:"tocItemText_2a16e846",tocInEditModeDescription:"tocInEditModeDescription_2a16e846",tocItemBackToPreviousPage:"tocItemBackToPreviousPage_2a16e846",textItemBackToTop:"textItemBackToTop_2a16e846"},l=c,p=function(){function e(){}return Object.defineProperty(e,"randomKey",{get:function(){return"L"+Math.random().toString(36).substr(2,9).toUpperCase()},enumerable:!0,configurable:!0}),Object.defineProperty(e,"pageDisplayMode",{get:function(){var e=this.getQueryStringParam(window.location.href,"Mode");return e&&""!==e&&"edit"===e.toLowerCase()?"edit":"read"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"isPageInEditMode",{get:function(){return"edit"===this.pageDisplayMode},enumerable:!0,configurable:!0}),e.getQueryStringParam=function(e,t){t=t.replace(/[\[\]]/g,"\\$&");var o=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)"),n=o.exec(e);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},e}(),u=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),d=function(e){function t(t){var o=e.call(this,t)||this;return o._renderTOC=function(){return n.createElement("div",null,o._renderTitle(),p.isPageInEditMode?o._renderTOCItemsInEditMode():o._renderTOCItems(),o._renderBackToPreviousPage())},o._renderTOCItems=function(){var e=document.querySelectorAll(o.props.baseTag+" "+o._getTagToGenerateTOCFrom());if(e&&e.length>0){for(var t=[],r=0;r<e.length;r++){var i=p.randomKey;0===r&&(i="TOCTop"),e[r].innerHTML='<a style="text-decoration:none; color: inherit;" id="'+i+'">'+e[r].innerText+"</a>",r>0&&o.props.showBackToTop&&(e[r].outerHTML='\n            <div style="border-bottom: 1px solid #f1f1f1; padding-bottom: 10px; text-align: right; font-size: small;">\n              <a href="#TOCTop" style="text-decoration: none; cursor: pointer;">\n                '+o.props.backToTopText+"\n              </a>\n            </div>\n            "+e[r].outerHTML+"\n            "),t.push(o._renderTOCItem({text:e[r].innerText,icon:o.props.iconTOCItem,anchorID:i}))}return o.props.showBackToTop,n.createElement("div",null,t.map(function(e,t){return e}))}return null},o._renderTOCItemsInEditMode=function(){return n.createElement("div",null,n.createElement("div",{className:l.tocInEditModeDescription},s.pageInEditMode),o._renderTOCItem({text:"Sample Item",icon:o.props.iconTOCItem}),o._renderTOCItem({text:"Sample Item",icon:o.props.iconTOCItem}),o._renderTOCItem({text:"Sample Item",icon:o.props.iconTOCItem}))},o._renderTOCItem=function(e){return n.createElement("div",{className:l.tocItem+" "+(e.isBackToPreviousPage?l.tocItemBackToPreviousPage:""),onClick:e.onClickAction},n.createElement("span",{className:l.tocIcon},n.createElement("i",{className:"ms-Icon ms-Icon--"+e.icon,"aria-hidden":"true"})),e.anchorID?n.createElement("span",{className:l.tocItemText},n.createElement("a",{href:"#"+e.anchorID},e.text)):n.createElement("span",{className:l.tocItemText},e.text))},o._renderTitle=function(){return o.props.showTOCHeading?n.createElement("div",{className:l.title},o.props.headingText):null},o._renderBackToPreviousPage=function(){return o.props.showBackToPreviousPage?o._renderTOCItem({text:o.props.backToPreviousText,icon:o.props.iconPreviousPage,onClickAction:o._onClickBackToPreviousPage,isBackToPreviousPage:!0}):null},o._getTagToGenerateTOCFrom=function(){switch(o.props.htmlTag.toLowerCase()){case"heading 1":return"h2";case"heading 2":return"h3";case"heading 3":return"h4"}},o._onClickBackToPreviousPage=function(){p.isPageInEditMode||window.history.back()},o.state={isTextPresent:!1},o}return u(t,e),t.prototype.render=function(){var e={backgroundColor:""===this.props.tocBackgroundColor?"Transparent":this.props.tocBackgroundColor,borderRadius:"3px"};return this.state.isTextPresent?n.createElement("div",{className:l.tableOfContents},n.createElement("div",{className:"ms-fadeIn400 "+l.container+" "+(this.props.floatTOC&&!p.isPageInEditMode?l.fixedContainer:""),style:e},n.createElement("div",{className:l.row},n.createElement("div",{className:l.column},this._renderTOC())))):null},t.prototype.componentDidMount=function(){var e=this;this.state.isTextPresent||window.setTimeout(function(){e.setState({isTextPresent:!0})},1e3)},t}(n.Component),f=d,g=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._onClickCopySettings=function(){var e=JSON.stringify(t.properties);window.localStorage.setItem("TOCSettings",e)},t._onClickPasteSettings=function(){var e=window.localStorage.getItem("TOCSettings");if(""!==e){var o=JSON.parse(e);null!==o&&Object.keys(o).forEach(function(e){t.properties[e]=o[e]})}},t._checkToggleField=function(e){return""===e?s.errorToggleFieldEmpty:""},t._checkIconField=function(e){return""===e?s.errorFieldCannotBeEmpty:""},t}return g(t,e),t.prototype.render=function(){var e=n.createElement(f,{baseTag:this.properties.baseTag,htmlTag:this.properties.htmlTag,showBackToTop:this.properties.showBackToTop,backToTopText:this.properties.backToTopText,showTOCHeading:this.properties.showTOCHeading,headingText:this.properties.headingText,showBackToPreviousPage:this.properties.showBackToPreviousPage,backToPreviousText:this.properties.backToPreviousText,floatTOC:this.properties.floatTOC,iconTOCItem:this.properties.iconTOCItem,iconPreviousPage:this.properties.iconPreviousPage,tocBackgroundColor:this.properties.tocBackgroundColor});r.render(e,this.domElement)},t.prototype.onDispose=function(){r.unmountComponentAtNode(this.domElement)},Object.defineProperty(t.prototype,"dataVersion",{get:function(){return i.Version.parse("1.0")},enumerable:!0,configurable:!0}),t.prototype.getPropertyPaneConfiguration=function(){return{pages:[{header:{description:s.PropertyPaneDescription},groups:[{groupName:s.BasicGroupName,isCollapsed:!1,groupFields:[Object(a.PropertyPaneDropdown)("htmlTag",{label:s.htmlTag,options:[{key:"Heading 1",text:"Heading 1"},{key:"Heading 2",text:"Heading 2"},{key:"Heading 3",text:"Heading 3"}]}),Object(a.PropertyPaneToggle)("showTOCHeading",{label:s.showTOCHeading}),Object(a.PropertyPaneTextField)("headingText",{label:s.headingText,disabled:!this.properties.showTOCHeading,onGetErrorMessage:this._checkToggleField}),Object(a.PropertyPaneToggle)("showBackToPreviousPage",{label:s.showBackToPreviousPage}),Object(a.PropertyPaneTextField)("backToPreviousText",{label:s.backToPreviousText,description:s.backToPreviousFieldDescription,disabled:!this.properties.showBackToPreviousPage,onGetErrorMessage:this._checkToggleField})]},{groupName:s.backToTopGroupName,isCollapsed:!1,groupFields:[Object(a.PropertyPaneToggle)("showBackToTop",{label:s.showBackToTop}),Object(a.PropertyPaneTextField)("backToTopText",{label:s.backToTopText,description:s.backToTopFieldDescription,disabled:!this.properties.showBackToTop,onGetErrorMessage:this._checkToggleField})]}]},{header:{description:s.PropertyPaneDescription},groups:[{groupName:s.iconGroup,isCollapsed:!1,groupFields:[Object(a.PropertyPaneTextField)("iconTOCItem",{label:s.iconTOCItem,description:s.iconDescription,onGetErrorMessage:this._checkIconField}),Object(a.PropertyPaneTextField)("iconPreviousPage",{label:s.iconPreviousPage,description:s.iconDescription,onGetErrorMessage:this._checkIconField}),Object(a.PropertyPaneTextField)("tocBackgroundColor",{label:s.tocBackgroundColor,description:s.tocBackgroundColorDescription})]},{groupName:s.pinGroup,isCollapsed:!1,groupFields:[Object(a.PropertyPaneToggle)("floatTOC",{label:s.floatTOC})]},{groupName:s.copyGroup,isCollapsed:!1,groupFields:[Object(a.PropertyPaneButton)("buttonCopySettings",{text:s.buttonCopySettingsLabel,icon:"Copy",onClick:this._onClickCopySettings}),Object(a.PropertyPaneButton)("buttonPasteSettings",{text:s.buttonPasteSettingsLabel,icon:"Paste",onClick:this._onClickPasteSettings})]}]}]}},t}(a.BaseClientSideWebPart);t.default=m},function(e,t){e.exports=o},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t,o){var n=o(7),r=o(9);"string"==typeof n&&(n=[[e.i,n]]);for(var i=0;i<n.length;i++)r.loadStyles(n[i][1],!0);n.locals&&(e.exports=n.locals)},function(e,t,o){t=e.exports=o(8)(!1),t.push([e.i,'.tableOfContents_2a16e846 .container_2a16e846{width:350px;z-index:99}.tableOfContents_2a16e846 .fixedContainer_2a16e846{position:fixed;background-color:#fff;border:1px solid #f1f1f1}.tableOfContents_2a16e846 .row_2a16e846{margin:0 -8px;box-sizing:border-box;padding:0}.tableOfContents_2a16e846 .row_2a16e846:after,.tableOfContents_2a16e846 .row_2a16e846:before{display:table;content:"";line-height:0}.tableOfContents_2a16e846 .row_2a16e846:after{clear:both}.tableOfContents_2a16e846 .column_2a16e846{position:relative;min-height:1px;padding-left:8px;padding-right:8px;box-sizing:border-box}[dir=ltr] .tableOfContents_2a16e846 .column_2a16e846{float:left}[dir=rtl] .tableOfContents_2a16e846 .column_2a16e846{float:right}.tableOfContents_2a16e846 .column_2a16e846 .ms-Grid_2a16e846{padding:0}@media (min-width:640px){.tableOfContents_2a16e846 .column_2a16e846{width:83.33333333333334%}}@media (min-width:1024px){.tableOfContents_2a16e846 .column_2a16e846{width:66.66666666666666%}}@media (min-width:1024px){[dir=ltr] .tableOfContents_2a16e846 .column_2a16e846{left:16.66667%}[dir=rtl] .tableOfContents_2a16e846 .column_2a16e846{right:16.66667%}}@media (min-width:640px){[dir=ltr] .tableOfContents_2a16e846 .column_2a16e846{left:8.33333%}[dir=rtl] .tableOfContents_2a16e846 .column_2a16e846{right:8.33333%}}.tableOfContents_2a16e846 .title_2a16e846{font-size:21px;font-weight:100;padding-top:5px;padding-bottom:10px}.tableOfContents_2a16e846 .description_2a16e846,.tableOfContents_2a16e846 .subTitle_2a16e846{font-size:17px;font-weight:300}.tableOfContents_2a16e846 .tocItem_2a16e846{font-size:14px;font-weight:400;padding-bottom:10px;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tableOfContents_2a16e846 .tocItem_2a16e846 .tocIcon_2a16e846{position:relative;top:2px;padding-right:10px}.tableOfContents_2a16e846 .tocItem_2a16e846 .tocItemText_2a16e846{margin:0}.tableOfContents_2a16e846 .tocItem_2a16e846 a{text-decoration:none;color:inherit}.tableOfContents_2a16e846 .tocInEditModeDescription_2a16e846{font-size:12px;font-weight:400;padding-bottom:10px}.tableOfContents_2a16e846 .tocItemBackToPreviousPage_2a16e846{border-top:1px solid #f1f1f1;padding-top:10px}.tableOfContents_2a16e846 .textItemBackToTop_2a16e846{border-bottom:1px solid #f1f1f1;padding-bottom:10px;text-align:right;font-size:small}',""])},function(e,t){function o(e,t){var o=e[1]||"",r=e[3];if(!r)return o;if(t&&"function"==typeof btoa){var i=n(r);return[o].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[o].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=o(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&n[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),t.push(a))}},t}},function(e,t,o){"use strict";(function(e){function o(e){var t=O();e();var o=O();C.perf.duration+=o-t}function n(e,t){void 0===t&&(t=!1),o(function(){var o=Array.isArray(e)?e:m(e);void 0===_&&(_=b());var n=C.runState,r=n.mode,i=n.buffer,a=n.flushTimer;t||1===r?(i.push(o),a||(C.runState.flushTimer=s())):c(o)})}function r(e){C.loadStyles=e}function i(e){C.runState.mode=e}function a(){o(function(){var e=C.runState.buffer.slice();C.runState.buffer=[];var t=[].concat.apply([],e);t.length>0&&c(t)})}function s(){return setTimeout(function(){C.runState.flushTimer=0,a()},0)}function c(e,t){C.loadStyles?C.loadStyles(g(e).styleString,e):_?T(e,t):h(e)}function l(e){C.theme=e,d()}function p(e){void 0===e&&(e=3),3!==e&&2!==e||(u(C.registeredStyles),C.registeredStyles=[]),3!==e&&1!==e||(u(C.registeredThemableStyles),C.registeredThemableStyles=[])}function u(e){e.forEach(function(e){var t=e&&e.styleElement;t&&t.parentElement&&t.parentElement.removeChild(t)})}function d(){if(C.theme){for(var e=[],t=0,o=C.registeredThemableStyles;t<o.length;t++){var n=o[t];e.push(n.themableStyle)}e.length>0&&(p(1),c([].concat.apply([],e)))}}function f(e){return e&&(e=g(m(e)).styleString),e}function g(e){var t=C.theme,o=!1;return{styleString:(e||[]).map(function(e){var n=e.theme;if(n){o=!0;var r=t?t[n]:void 0,i=e.defaultValue||"inherit";return t&&!r&&console,r||i}return e.rawString}).join(""),themable:o}}function m(e){var t=[];if(e){for(var o=0,n=void 0;n=v.exec(e);){var r=n.index;r>o&&t.push({rawString:e.substring(o,r)}),t.push({theme:n[1],defaultValue:n[2]}),o=v.lastIndex}t.push({rawString:e.substring(o)})}return t}function h(e){var t=document.getElementsByTagName("head")[0],o=document.createElement("style"),n=g(e),r=n.styleString,i=n.themable;o.type="text/css",o.appendChild(document.createTextNode(r)),C.perf.count++,t.appendChild(o);var a={styleElement:o,themableStyle:e};i?C.registeredThemableStyles.push(a):C.registeredStyles.push(a)}function T(e,t){var o=document.getElementsByTagName("head")[0],n=C.registeredStyles,r=C.lastStyleElement,i=r?r.styleSheet:void 0,a=i?i.cssText:"",s=n[n.length-1],c=g(e).styleString;(!r||a.length+c.length>P)&&(r=document.createElement("style"),r.type="text/css",t?(o.replaceChild(r,t.styleElement),t.styleElement=r):o.appendChild(r),t||(s={styleElement:r,themableStyle:e},n.push(s))),r.styleSheet.cssText+=f(c),Array.prototype.push.apply(s.themableStyle,e),C.lastStyleElement=r}function b(){var e=!1;if("undefined"!=typeof document){var t=document.createElement("style");t.type="text/css",e=!!t.styleSheet}return e}var y=this&&this.__assign||Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++){t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var _,x="undefined"==typeof window?e:window,C=function(){var e=x.__themeState__||{theme:void 0,lastStyleElement:void 0,registeredStyles:[]};return e.runState||(e=y({},e,{perf:{count:0,duration:0},runState:{flushTimer:0,mode:0,buffer:[]}})),e.registeredThemableStyles||(e=y({},e,{registeredThemableStyles:[]})),x.__themeState__=e,e}(),v=/[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,P=1e4,O=function(){return"undefined"!=typeof performance&&performance.now?performance.now():Date.now()};t.loadStyles=n,t.configureLoadStyles=r,t.configureRunMode=i,t.flush=a,t.loadTheme=l,t.clearStyles=p,t.detokenize=f,t.splitStyles=m}).call(t,o(10))},function(e,t){var o;o=function(){return this}();try{o=o||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(o=window)}e.exports=o}])});