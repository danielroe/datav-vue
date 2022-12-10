import{l as D,f as v,a as B}from"./select-options.c137f5b6.js";import{e as w,am as H,r as d,o as m,m as y,j as t,w as a,a$ as l,P as b,Q as C,l as E,t as S,h as r,n as f}from"./App.5d51c89e.js";import"./echarts-animation.c54de7ad.js";const T={class:"setting-panel-gui"},R=w({__name:"config",props:{com:null},setup(x){const u=H(x.com,"config");return(W,o)=>{const i=d("g-color-picker"),n=d("g-field"),V=d("g-slider"),s=d("g-select"),F=d("g-field-collapse"),p=d("g-input-number"),k=d("n-switch"),U=d("n-radio"),g=d("n-radio-group"),A=d("n-radio-button");return m(),y("div",T,[t(F,{label:"\u533A\u57DF\u6837\u5F0F"},{default:a(()=>[t(n,{level:2,label:"\u586B\u5145\u989C\u8272","is-flat":!0},{default:a(()=>[t(i,{modelValue:l(u).defaultStyle.fill.minFillColor,"onUpdate:modelValue":o[0]||(o[0]=e=>l(u).defaultStyle.fill.minFillColor=e),inline:"inline-single",label:"\u6700\u5C0F\u503C"},null,8,["modelValue"]),t(i,{modelValue:l(u).defaultStyle.fill.maxFillColor,"onUpdate:modelValue":o[1]||(o[1]=e=>l(u).defaultStyle.fill.maxFillColor=e),inline:"inline-single",label:"\u6700\u5927\u503C"},null,8,["modelValue"]),t(i,{modelValue:l(u).defaultStyle.fill.fillColor,"onUpdate:modelValue":o[2]||(o[2]=e=>l(u).defaultStyle.fill.fillColor=e),inline:"inline-single",label:"\u65E0\u6570\u636E"},null,8,["modelValue"])]),_:1}),t(n,{level:2,label:"\u8FB9\u7EBF\u6837\u5F0F","is-flat":!0},{default:a(()=>[t(i,{modelValue:l(u).defaultStyle.stroke.color,"onUpdate:modelValue":o[3]||(o[3]=e=>l(u).defaultStyle.stroke.color=e),inline:"inline-single",label:"\u989C\u8272"},null,8,["modelValue"]),t(V,{modelValue:l(u).defaultStyle.stroke.weight,"onUpdate:modelValue":o[4]||(o[4]=e=>l(u).defaultStyle.stroke.weight=e),min:0,max:20,step:1,suffix:"px",inline:"inline-single",label:"\u7C97\u7EC6 [0, 20]"},null,8,["modelValue"]),t(s,{modelValue:l(u).defaultStyle.stroke.dashArray,"onUpdate:modelValue":o[5]||(o[5]=e=>l(u).defaultStyle.stroke.dashArray=e),data:l(D),inline:"inline-single",label:"\u7EBF\u7C7B\u578B"},null,8,["modelValue","data"])]),_:1})]),_:1}),t(F,{modelValue:l(u).labelStyle.show,"onUpdate:modelValue":o[11]||(o[11]=e=>l(u).labelStyle.show=e),toggle:!0,label:"\u6807\u6CE8"},{default:a(()=>[t(n,{level:2,tooltip:"\u8BF7\u9009\u62E9\u60A8\u7CFB\u7EDF\u6709\u7684\u5B57\u4F53\uFF0C\u5982\u679C\u60A8\u7CFB\u7EDF\u65E0\u6B64\u5B57\u4F53\uFF0C\u6807\u9898\u5C06\u4F1A\u663E\u793A\u9ED8\u8BA4\u5B57\u4F53",label:"\u5B57\u4F53"},{default:a(()=>[t(s,{modelValue:l(u).labelStyle.fontFamily,"onUpdate:modelValue":o[6]||(o[6]=e=>l(u).labelStyle.fontFamily=e),data:l(v)},null,8,["modelValue","data"])]),_:1}),t(n,{level:2,label:"\u6587\u5B57\u7C97\u7EC6"},{default:a(()=>[t(s,{modelValue:l(u).labelStyle.fontWeight,"onUpdate:modelValue":o[7]||(o[7]=e=>l(u).labelStyle.fontWeight=e),data:l(B)},null,8,["modelValue","data"])]),_:1}),t(n,{level:2,label:"\u5B57\u53F7"},{default:a(()=>[t(p,{modelValue:l(u).labelStyle.fontSize,"onUpdate:modelValue":o[8]||(o[8]=e=>l(u).labelStyle.fontSize=e),min:0,max:100,step:1,suffix:"px"},null,8,["modelValue"])]),_:1}),t(n,{level:2,label:"\u989C\u8272"},{default:a(()=>[t(i,{modelValue:l(u).labelStyle.color,"onUpdate:modelValue":o[9]||(o[9]=e=>l(u).labelStyle.color=e)},null,8,["modelValue"])]),_:1}),t(n,{level:2,label:"\u9634\u5F71\u8272"},{default:a(()=>[t(i,{modelValue:l(u).labelStyle.shadowColor,"onUpdate:modelValue":o[10]||(o[10]=e=>l(u).labelStyle.shadowColor=e)},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),t(F,{modelValue:l(u).tooltip.show,"onUpdate:modelValue":o[26]||(o[26]=e=>l(u).tooltip.show=e),toggle:!0,label:"\u5F39\u6846"},{default:a(()=>[t(n,{level:2,tooltip:"\u8BF7\u8BBE\u7F6Einfo\u5B57\u6BB5\u4F5C\u4E3A\u5F39\u7A97\u5185\u5BB9\uFF0Cinfo\u652F\u6301\u914D\u7F6Ehtml\u6807\u7B7E\uFF1B\u5982\u4E0D\u9009\uFF0C\u5219\u517C\u5BB9name\u548Cvalue\u4F5C\u4E3A\u5F39\u7A97\u5185\u5BB9",label:"info\u5B57\u6BB5"},{default:a(()=>[t(k,{value:l(u).tooltip.infoField,"onUpdate:value":o[12]||(o[12]=e=>l(u).tooltip.infoField=e)},null,8,["value"])]),_:1}),t(n,{level:2,label:"\u4E8B\u4EF6\u7C7B\u578B"},{default:a(()=>[t(g,{value:l(u).tooltip.eventType,"onUpdate:value":o[13]||(o[13]=e=>l(u).tooltip.eventType=e),size:"small"},{default:a(()=>[(m(),y(b,null,C([{key:"click",value:"\u70B9\u51FB\u533A\u57DF"},{key:"mousemove",value:"\u9F20\u6807\u79FB\u5165\u65F6"}],e=>t(U,{key:e.key,value:e.key},{default:a(()=>[E(S(e.value),1)]),_:2},1032,["value"])),64))]),_:1},8,["value"])]),_:1}),t(n,{level:2,label:"\u914D\u7F6E\u9009\u9879"},{default:a(()=>[t(g,{value:l(u).tooltip.styleType,"onUpdate:value":o[14]||(o[14]=e=>l(u).tooltip.styleType=e),size:"small"},{default:a(()=>[(m(),y(b,null,C([{key:"parent",value:"\u7236\u5BB9\u5668\u9ED8\u8BA4"},{key:"custom",value:"\u81EA\u5B9A\u4E49\u914D\u7F6E"}],e=>t(A,{key:e.key,value:e.key},{default:a(()=>[E(S(e.value),1)]),_:2},1032,["value"])),64))]),_:1},8,["value"])]),_:1}),l(u).tooltip.styleType==="custom"?(m(),r(n,{key:0,level:2,label:"\u6587\u672C\u6837\u5F0F","is-flat":!0},{default:a(()=>[t(s,{modelValue:l(u).tooltip.textStyle.fontFamily,"onUpdate:modelValue":o[15]||(o[15]=e=>l(u).tooltip.textStyle.fontFamily=e),data:l(v),inline:"inline",label:"\u5B57\u4F53"},null,8,["modelValue","data"]),t(s,{modelValue:l(u).tooltip.textStyle.fontWeight,"onUpdate:modelValue":o[16]||(o[16]=e=>l(u).tooltip.textStyle.fontWeight=e),data:l(B),inline:"inline",label:"\u6587\u5B57\u7C97\u7EC6"},null,8,["modelValue","data"]),t(p,{modelValue:l(u).tooltip.textStyle.fontSize,"onUpdate:modelValue":o[17]||(o[17]=e=>l(u).tooltip.textStyle.fontSize=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"\u5B57\u53F7"},null,8,["modelValue"]),t(i,{modelValue:l(u).tooltip.textStyle.color,"onUpdate:modelValue":o[18]||(o[18]=e=>l(u).tooltip.textStyle.color=e),inline:"inline",label:"\u989C\u8272"},null,8,["modelValue"])]),_:1})):f("",!0),l(u).tooltip.styleType==="custom"?(m(),r(n,{key:1,level:2,label:"\u884C\u9AD8\u6BD4\u4F8B"},{default:a(()=>[t(V,{modelValue:l(u).tooltip.lineHeight,"onUpdate:modelValue":o[19]||(o[19]=e=>l(u).tooltip.lineHeight=e),min:.5,max:5,step:1},null,8,["modelValue","min"])]),_:1})):f("",!0),l(u).tooltip.styleType==="custom"?(m(),r(n,{key:2,level:2,label:"\u5706\u89D2\u534A\u5F84"},{default:a(()=>[t(V,{modelValue:l(u).tooltip.borderRadius,"onUpdate:modelValue":o[20]||(o[20]=e=>l(u).tooltip.borderRadius=e),min:0,max:20,step:1,suffix:"px"},null,8,["modelValue"])]),_:1})):f("",!0),l(u).tooltip.styleType==="custom"?(m(),r(n,{key:3,level:2,label:"\u5916\u8FB9\u8DDD","is-flat":!0},{default:a(()=>[t(p,{modelValue:l(u).tooltip.padding.top,"onUpdate:modelValue":o[21]||(o[21]=e=>l(u).tooltip.padding.top=e),min:0,max:100,step:1,inline:"inline",label:"\u4E0A"},null,8,["modelValue"]),t(p,{modelValue:l(u).tooltip.padding.bottom,"onUpdate:modelValue":o[22]||(o[22]=e=>l(u).tooltip.padding.bottom=e),min:0,max:100,step:1,inline:"inline",label:"\u4E0B"},null,8,["modelValue"]),t(p,{modelValue:l(u).tooltip.padding.left,"onUpdate:modelValue":o[23]||(o[23]=e=>l(u).tooltip.padding.left=e),min:0,max:100,step:1,inline:"inline",label:"\u5DE6"},null,8,["modelValue"]),t(p,{modelValue:l(u).tooltip.padding.right,"onUpdate:modelValue":o[24]||(o[24]=e=>l(u).tooltip.padding.right=e),min:0,max:100,step:1,inline:"inline",label:"\u53F3"},null,8,["modelValue"])]),_:1})):f("",!0),l(u).tooltip.styleType==="custom"?(m(),r(n,{key:4,level:2,label:"\u80CC\u666F\u8272"},{default:a(()=>[t(i,{modelValue:l(u).tooltip.bgColor,"onUpdate:modelValue":o[25]||(o[25]=e=>l(u).tooltip.bgColor=e)},null,8,["modelValue"])]),_:1})):f("",!0)]),_:1},8,["modelValue"]),t(F,{label:"\u4EA4\u4E92\u914D\u7F6E"},{default:a(()=>[t(n,{modelValue:l(u).interactive.isHover.show,"onUpdate:modelValue":o[30]||(o[30]=e=>l(u).interactive.isHover.show=e),toggle:!0,level:2,label:"\u60AC\u505C\u6837\u5F0F","is-flat":!0},{default:a(()=>[t(i,{modelValue:l(u).interactive.isHover.fillColor,"onUpdate:modelValue":o[27]||(o[27]=e=>l(u).interactive.isHover.fillColor=e),inline:"inline-single",label:"\u586B\u5145\u989C\u8272"},null,8,["modelValue"]),t(i,{modelValue:l(u).interactive.isHover.strokeColor,"onUpdate:modelValue":o[28]||(o[28]=e=>l(u).interactive.isHover.strokeColor=e),inline:"inline-single",label:"\u8FB9\u7EBF\u989C\u8272"},null,8,["modelValue"]),t(p,{modelValue:l(u).interactive.isHover.weight,"onUpdate:modelValue":o[29]||(o[29]=e=>l(u).interactive.isHover.weight=e),min:0,max:20,step:1,suffix:"px",inline:"inline-single",label:"\u8FB9\u7EBF\u7C97\u7EC6 [0, 20]"},null,8,["modelValue"])]),_:1},8,["modelValue"]),t(n,{modelValue:l(u).interactive.clickZoom.show,"onUpdate:modelValue":o[32]||(o[32]=e=>l(u).interactive.clickZoom.show=e),toggle:!0,level:2,label:"\u70B9\u51FB\u805A\u7126","is-flat":!0},{default:a(()=>[t(V,{modelValue:l(u).interactive.clickZoom.zoomPad,"onUpdate:modelValue":o[31]||(o[31]=e=>l(u).interactive.clickZoom.zoomPad=e),min:0,max:100,step:1,inline:"inline-single",label:"\u805A\u7126\u8303\u56F4\u6BD4 [1, 3]"},null,8,["modelValue"])]),_:1},8,["modelValue"])]),_:1})])}}});export{R as default};
