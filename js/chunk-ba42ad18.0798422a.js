(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba42ad18"],{"0ccb":function(e,t,a){},"2cca":function(e,t,a){"use strict";a("ed63")},d061:function(e,t,a){"use strict";a("0ccb")},e261:function(e,t,a){"use strict";a.r(t);var c=a("7a23"),o=Object(c["withScopeId"])("data-v-5aff688e");Object(c["pushScopeId"])("data-v-5aff688e");var s={class:"api-editor-title"},n={key:0,class:"el-icon-arrow-right api-fold-icon"},l={class:"api-status success"},i={class:"attr-source-wp"},d={class:"data-attr-table-container"},u={class:"data-attr-table"},r=Object(c["createVNode"])("thead",{class:"table-head"},[Object(c["createVNode"])("tr",{class:"table-head-row"},[Object(c["createVNode"])("th",{class:"th-item column-item attr-name"}," 字段 "),Object(c["createVNode"])("th",{class:"th-item column-item attr-value"}," 映射 "),Object(c["createVNode"])("th",{class:"th-item column-item attr-status"}," 状态 ")])],-1),p={class:"table-body"},b={class:"column-item attr-name"},j={class:"ellipsis2"},O={class:"column-item attr-value"},f={class:"column-item attr-status"},m={class:"data-source"},v=Object(c["createVNode"])("div",{class:"data-result-title"}," 数据响应结果 ",-1),N={class:"auto-update-config"},g=Object(c["createTextVNode"])(" 自动更新选项 "),V=Object(c["createTextVNode"])(" 秒一次 "),k={class:"data-flow-wp"},S={class:"ds-line"},h={class:"ds-title"},y=Object(c["createVNode"])("span",{class:"ds-title-text"},"数据源",-1),C={class:"ds-type-text"},x=Object(c["createTextVNode"])(" 配置数据源 "),B={class:"ds-line mt5"},w=Object(c["createVNode"])("span",null,"数据响应结果 ( 只读 ) ",-1),T=Object(c["createVNode"])("i",{class:"el-icon-refresh refresh-btn"},null,-1),D={class:"ds-dots"},I=Object(c["createVNode"])("span",{class:"ds-dot"},null,-1),_=Object(c["createVNode"])("span",{class:"ds-dot"},null,-1),U={class:"data-response"};Object(c["popScopeId"])();var A=o((function(e,t,a,A,F,J){var P=Object(c["resolveComponent"])("display-api-status"),z=Object(c["resolveComponent"])("el-tooltip"),L=Object(c["resolveComponent"])("g-input"),q=Object(c["resolveComponent"])("el-checkbox"),E=Object(c["resolveComponent"])("el-button"),G=Object(c["resolveComponent"])("g-monaco-editor");return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:["api-editor",{"--disable-fold":!e.collapse,"--fold":e.collapse&&e.visible}]},[Object(c["createVNode"])("div",s,[Object(c["createVNode"])("div",{class:"api-desc ellipsis2",onClick:t[1]||(t[1]=function(){return e.toggle&&e.toggle.apply(e,arguments)})},[e.collapse?(Object(c["openBlock"])(),Object(c["createBlock"])("i",n)):Object(c["createCommentVNode"])("",!0),Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(e.dataConfig.description||"数据接口"),1)]),Object(c["createVNode"])("div",l,[Object(c["createVNode"])(P,{status:e.totalStatus,"success-text":"配置完成"},null,8,["status"])])]),Object(c["withDirectives"])(Object(c["createVNode"])("div",i,[Object(c["createVNode"])("div",d,[Object(c["createVNode"])("table",u,[r,Object(c["createVNode"])("tbody",p,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.dataConfig.fields,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("tr",{key:t,class:"table-body-row"},[Object(c["createVNode"])("td",b,[Object(c["createVNode"])(z,{content:e.description,placement:"left",effect:"blue"},{default:o((function(){return[Object(c["createVNode"])("span",j,Object(c["toDisplayString"])(t),1)]})),_:2},1032,["content"])]),Object(c["createVNode"])("td",O,[Object(c["createVNode"])(L,{"model-value":e.map,placeholder:"可自定义",class:"attr-input",onChange:function(t){return e.map=t}},null,8,["model-value","onChange"])]),Object(c["createVNode"])("td",f,[Object(c["createVNode"])(P,{status:e.status,optional:e.optional},null,8,["status","optional"])])])})),128))])])]),Object(c["createVNode"])("div",m,[v,Object(c["createVNode"])("div",N,[Object(c["createVNode"])(q,{modelValue:e.dataConfig.useAutoUpdate,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.dataConfig.useAutoUpdate=t}),class:"auto-update-checkbox"},{default:o((function(){return[g]})),_:1},8,["modelValue"]),Object(c["createVNode"])(L,{"model-value":e.dataConfig.autoUpdate,type:"number",disabled:!e.dataConfig.useAutoUpdate,class:"update-interval-input",onChange:t[3]||(t[3]=function(t){return e.dataConfig.autoUpdate=t})},null,8,["model-value","disabled"]),V]),Object(c["createVNode"])("div",k,[Object(c["createVNode"])("div",S,[Object(c["createVNode"])("div",h,[y,Object(c["createVNode"])("span",C,Object(c["toDisplayString"])(e.sourceConfig.type),1)]),Object(c["createVNode"])(E,{size:"mini",class:"ds-action-btn",onClick:e.showDataSource},{default:o((function(){return[x]})),_:1},8,["onClick"])]),Object(c["createVNode"])("div",B,[w,Object(c["createVNode"])(z,{content:"刷新数据",placement:"left",effect:"blue"},{default:o((function(){return[T]})),_:1})]),Object(c["createVNode"])("div",D,[Object(c["createVNode"])("span",{class:["ds-dot",["completed"===e.totalStatus?"active":"error"]]},null,2),I,_])]),Object(c["createVNode"])("div",U,[Object(c["createVNode"])(G,{language:"json","read-only":!0,code:e.sourceConfig.config.data,height:250,"full-screen-title":"数据响应结果"},null,8,["code"])])])],512),[[c["vShow"],e.visible]])],2)})),F=a("c18c"),J=a("bf64"),P=Object(c["withScopeId"])("data-v-70253ba4");Object(c["pushScopeId"])("data-v-70253ba4");var z=Object(c["createVNode"])("i",{class:"status-icon validating"},null,-1),L=Object(c["createVNode"])("i",{class:"status-icon validating"},null,-1),q=Object(c["createVNode"])("i",{class:"status-icon validating"},null,-1),E={key:2,class:"status-icon --success"},G={class:"status-text"};Object(c["popScopeId"])();var H=P((function(e,t,a,o,s,n){return Object(c["openBlock"])(),Object(c["createBlock"])("div",null,[e.status===e.apiStatus.loading?(Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],{key:0},[z,L,q],64)):e.status===e.apiStatus.success||e.status===e.apiStatus.completed?(Object(c["openBlock"])(),Object(c["createBlock"])("i",{key:1,class:["status-icon","--"+e.status]},null,2)):e.optional?(Object(c["openBlock"])(),Object(c["createBlock"])("i",E)):(Object(c["openBlock"])(),Object(c["createBlock"])("i",{key:3,class:["status-icon","--"+e.status]},null,2)),Object(c["createVNode"])("span",G,Object(c["toDisplayString"])(e.statusText),1)])})),K=Object(c["defineComponent"])({name:"DisplayApiStatus",props:{status:{type:String,default:J["a"].incomplete},loadingText:{type:String,default:"匹配中"},successText:{type:String,default:"匹配成功"},failedText:{type:String,default:"匹配失败"},notfoundText:{type:String,default:"未找到字段"},completedText:{type:String,default:"配置完成"},incompleteText:{type:String,default:"配置未完成"},optional:{type:Boolean,default:!1}},setup:function(e){var t=Object(c["computed"])((function(){return e.status===J["a"].loading?e.loadingText:e.status===J["a"].success?e.successText:e.status===J["a"].completed?e.completedText:e.optional?"可选":e.status===J["a"].failed?e.failedText:e.status===J["a"].notfound?e.notfoundText:e.status===J["a"].incomplete?e.incompleteText:e.status}));return{apiStatus:J["a"],statusText:t}}});a("d061");K.render=H,K.__scopeId="data-v-70253ba4";var M=K,Q=Object(c["defineComponent"])({name:"SourcePanel",components:{DisplayApiStatus:M},props:{apiName:String,activeName:String,collapse:Boolean},setup:function(e){var t=Object(c["computed"])((function(){return e.apiName===e.activeName})),a=Object(c["inject"])("com"),o=Object(c["computed"])((function(){return a.value.data[e.apiName]})),s=Object(c["computed"])((function(){return a.value.source[e.apiName]})),n=Object(c["computed"])((function(){var e=Object.values(o.value.fields);return e.some((function(e){return e.status===F["a"].loading}))?J["a"].loading:e.some((function(e){return!e.optional&&(e.status===F["a"].failed||e.status===F["a"].notfound||e.status===F["a"].incomplete)}))?J["a"].incomplete:J["a"].completed})),l=Object(c["inject"])("changePanel"),i=function(){e.collapse&&l(e.apiName)},d=function(){};return{visible:t,com:a,dataConfig:o,sourceConfig:s,totalStatus:n,toggle:i,showDataSource:d}}});a("2cca");Q.render=A,Q.__scopeId="data-v-5aff688e";t["default"]=Q},ed63:function(e,t,a){}}]);
//# sourceMappingURL=chunk-ba42ad18.0798422a.js.map