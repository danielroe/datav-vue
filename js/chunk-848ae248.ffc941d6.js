(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-848ae248"],{"32c7":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=Object(c["gb"])("data-v-59b60d4a");Object(c["H"])("data-v-59b60d4a");var l={class:"setting-panel"},o=Object(c["m"])("i",{class:"el-icon-search search-icon"},null,-1),i=Object(c["m"])("span",null,"搜索配置",-1),u={class:"setting-panel-content"},r={class:"scroll-container"};Object(c["F"])();var b=a((function(e,t,n,b,m,d){var s=Object(c["N"])("config-title"),f=Object(c["N"])("basic-setting");return Object(c["E"])(),Object(c["i"])("div",l,[Object(c["m"])(s,{"com-name":e.com.name,"com-alias":e.com.alias},{default:a((function(){return[Object(c["m"])("div",{class:"search-config",onClick:t[1]||(t[1]=function(){return e.toSearch&&e.toSearch.apply(e,arguments)})},[o,i])]})),_:1},8,["com-name","com-alias"]),Object(c["m"])("div",u,[Object(c["m"])("div",r,[Object(c["m"])(f,{key:e.com.id+"'_basic-setting",attr:e.com.attr},null,8,["attr"])])])])})),m=n("99c2"),d=Object(c["gb"])("data-v-33b33a6e");Object(c["H"])("data-v-33b33a6e");var s={class:"com-title-wp"},f={class:"com-title"},j={class:"title-name"},O={class:"alias-name"},p=Object(c["m"])("i",{class:"el-icon-document com-doc-icon"},null,-1),v={class:"version-tag"};Object(c["F"])();var g=d((function(e,t,n,a,l,o){var i=Object(c["N"])("el-tooltip");return Object(c["E"])(),Object(c["i"])("div",s,[Object(c["m"])("div",f,[Object(c["m"])("div",j,[Object(c["m"])("span",O,Object(c["R"])(e.comAlias),1),Object(c["m"])(i,{placement:"right",effect:"blue",content:e.comTitle+"文档"},{default:d((function(){return[p]})),_:1},8,["content"])]),Object(c["m"])("div",v,[Object(c["m"])("span",null,Object(c["R"])(e.comTitle),1)])]),Object(c["M"])(e.$slots,"default")])})),h=n("ca11"),V=Object(c["o"])({name:"SettingPanel",props:{comName:{type:String,required:!0},comAlias:{type:String,required:!0}},setup:function(e){var t=Object(c["g"])((function(){var t=Object(h["b"])(e.comName);return null==t?void 0:t.com.name}));return{comTitle:t}}});n("d61b");V.render=g,V.__scopeId="data-v-33b33a6e";var _=V,w=Object(c["gb"])("data-v-578a1653");Object(c["H"])("data-v-578a1653");var N={class:"basic-setting-wp"},y=Object(c["m"])("i",{class:"v-icon-flip-v"},null,-1),S=Object(c["m"])("i",{class:"v-icon-flip-h"},null,-1);Object(c["F"])();var x=w((function(e,t,n,a,l,o){var i=Object(c["N"])("g-input-number"),u=Object(c["N"])("g-field"),r=Object(c["N"])("el-checkbox-button"),b=Object(c["N"])("el-tooltip"),m=Object(c["N"])("el-checkbox-group"),d=Object(c["N"])("el-slider");return Object(c["E"])(),Object(c["i"])("div",N,[Object(c["m"])(u,{label:"图表尺寸"},{default:w((function(){return[Object(c["m"])(i,{modelValue:e.attr.w,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.attr.w=t}),min:0,max:8888},null,8,["modelValue"]),Object(c["m"])(i,{modelValue:e.attr.h,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.attr.h=t}),min:0,max:8888},null,8,["modelValue"])]})),_:1}),Object(c["m"])(u,{label:"图表位置"},{default:w((function(){return[Object(c["m"])(i,{modelValue:e.attr.x,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.attr.x=t})},null,8,["modelValue"]),Object(c["m"])(i,{modelValue:e.attr.y,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.attr.y=t})},null,8,["modelValue"])]})),_:1}),Object(c["m"])(u,{label:"旋转角度"},{default:w((function(){return[Object(c["m"])(i,{modelValue:e.attr.deg,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.attr.deg=t}),min:0,max:360,step:1},null,8,["modelValue"]),Object(c["m"])(m,{modelValue:e.filps,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.filps=t}),size:"mini",onChange:e.onFilpChange},{default:w((function(){return[Object(c["m"])(b,{effect:"blue",content:"垂直翻转",enterable:!1},{default:w((function(){return[Object(c["m"])(r,{label:"v"},{default:w((function(){return[y]})),_:1})]})),_:1}),Object(c["m"])(b,{effect:"blue",content:"水平翻转",enterable:!1},{default:w((function(){return[Object(c["m"])(r,{label:"h"},{default:w((function(){return[S]})),_:1})]})),_:1})]})),_:1},8,["modelValue","onChange"])]})),_:1}),Object(c["m"])(u,{label:"透明度"},{default:w((function(){return[Object(c["m"])(d,{modelValue:e.attr.opacity,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.attr.opacity=t}),min:0,max:1,step:.05,"show-tooltip":!1,"show-input":"","input-size":"mini",class:"g-slider"},null,8,["modelValue","step"])]})),_:1})])})),k=Object(c["o"])({name:"BasicSetting",props:{attr:{type:Object,required:!0}},setup:function(e){var t=Object(c["J"])([]),n=function(n){t.value=[].concat(n),e.attr.filpV=n.includes("v"),e.attr.filpH=n.includes("h")};return Object(c["B"])((function(){e.attr.filpV&&t.value.push("v"),e.attr.filpH&&t.value.push("h")})),{filps:t,onFilpChange:n}}});n("a743");k.render=x,k.__scopeId="data-v-578a1653";var U=k,C=Object(c["o"])({name:"SettingPanel",components:{ConfigTitle:_,BasicSetting:U},props:{com:{type:Object,required:!0}},setup:function(){var e=function(){m["b"].warning("正在开发中。。。")};return{toSearch:e}}});n("dadb");C.render=b,C.__scopeId="data-v-59b60d4a";t["default"]=C},"359e":function(e,t,n){},4127:function(e,t,n){},"47fd":function(e,t,n){},a743:function(e,t,n){"use strict";n("47fd")},d61b:function(e,t,n){"use strict";n("359e")},dadb:function(e,t,n){"use strict";n("4127")}}]);
//# sourceMappingURL=chunk-848ae248.ffc941d6.js.map