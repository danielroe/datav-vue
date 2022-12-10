import{f as w,s as D,e as k,a as z,c as W,t as T,l as N,v as Y,d as I,h as $,g as G,o as M,k as X,m as j,n as H}from"./select-options.c137f5b6.js";import{BasicBarSeries as q}from"./basic-bar.b3d4536d.js";import{e as O,am as Q,f as R,r as p,o as s,m as F,j as i,w as o,P as C,Q as U,h as f,l as B,t as v,n as V}from"./App.5d51c89e.js";import"./echarts-animation.c54de7ad.js";const J=O({name:"VBasicBarProp",props:{com:{type:Object,required:!0}},setup(l){const u=Q(l.com,"config");return{config:u,handleAddSeriesItem:()=>new q(`\u7CFB\u5217${u.value.series.length+1}`),fontFamilys:w,selectSuggests:D,echartsLablePositions:k,fontWeights:z,axisTypes:W,titleLocations:T,lineStyles:N,valueFormats:Y,timeFormats:I,hAligns:$,legendLocations:G,orients:M,echartIcons:X,fillTypes:j,animationEasings:H}}}),K={class:"setting-panel-gui"};function Z(l,u,E,P,h,c){const d=p("g-select"),a=p("g-field"),n=p("g-input-number"),r=p("g-slider"),b=p("g-select-suggest"),m=p("g-color-picker"),t=p("g-field-collapse"),y=p("n-radio-button"),A=p("n-radio-group"),S=p("n-switch"),x=p("g-input"),L=p("g-select-shape");return s(),F("div",K,[i(t,{label:"\u5168\u5C40"},{default:o(()=>[i(a,{level:2,tooltip:"\u8BF7\u9009\u62E9\u60A8\u7CFB\u7EDF\u6709\u7684\u5B57\u4F53\uFF0C\u5982\u679C\u60A8\u7CFB\u7EDF\u65E0\u6B64\u5B57\u4F53\uFF0C\u6807\u9898\u5C06\u4F1A\u663E\u793A\u9ED8\u8BA4\u5B57\u4F53",label:"\u5B57\u4F53"},{default:o(()=>[i(d,{modelValue:l.config.global.fontFamily,"onUpdate:modelValue":u[0]||(u[0]=e=>l.config.global.fontFamily=e),data:l.fontFamilys},null,8,["modelValue","data"])]),_:1}),i(a,{level:2,label:"\u8FB9\u8DDD","is-flat":!0},{default:o(()=>[i(n,{modelValue:l.config.global.margin.top,"onUpdate:modelValue":u[1]||(u[1]=e=>l.config.global.margin.top=e),min:-1e3,max:1e3,step:1,suffix:"px",inline:"inline",label:"\u9876\u90E8"},null,8,["modelValue"]),i(n,{modelValue:l.config.global.margin.bottom,"onUpdate:modelValue":u[2]||(u[2]=e=>l.config.global.margin.bottom=e),min:-1e3,max:1e3,step:1,suffix:"px",inline:"inline",label:"\u5E95\u90E8"},null,8,["modelValue"]),i(n,{modelValue:l.config.global.margin.left,"onUpdate:modelValue":u[3]||(u[3]=e=>l.config.global.margin.left=e),min:-1e3,max:1e3,step:1,suffix:"px",inline:"inline",label:"\u5DE6\u4FA7"},null,8,["modelValue"]),i(n,{modelValue:l.config.global.margin.right,"onUpdate:modelValue":u[4]||(u[4]=e=>l.config.global.margin.right=e),min:-1e3,max:1e3,step:1,suffix:"px",inline:"inline",label:"\u53F3\u4FA7"},null,8,["modelValue"])]),_:1}),i(a,{level:2,label:"\u7EC4\u5185\u95F4\u8DDD"},{default:o(()=>[i(r,{modelValue:l.config.global.innerPadding,"onUpdate:modelValue":u[5]||(u[5]=e=>l.config.global.innerPadding=e),min:-1e3,max:1e3,step:1,suffix:"px"},null,8,["modelValue"])]),_:1}),i(a,{level:2,label:"\u7EC4\u95F4\u95F4\u8DDD"},{default:o(()=>[i(r,{modelValue:l.config.global.outerPadding,"onUpdate:modelValue":u[6]||(u[6]=e=>l.config.global.outerPadding=e),min:-1e3,max:1e3,step:1,suffix:"px"},null,8,["modelValue"])]),_:1}),i(a,{level:2,tooltip:"\u4E0D\u8BBE\u65F6\u81EA\u9002\u5E94\uFF0C\u53EF\u4EE5\u662F\u7EDD\u5BF9\u503C\u4F8B\u5982 40 \u6216\u8005\u767E\u5206\u6570\u4F8B\u5982 60%\u3002",label:"\u67F1\u5B50\u5BBD\u5EA6"},{default:o(()=>[i(b,{modelValue:l.config.global.barWidth,"onUpdate:modelValue":u[7]||(u[7]=e=>l.config.global.barWidth=e),data:l.selectSuggests,filters:["auto"]},null,8,["modelValue","data"])]),_:1}),i(t,{modelValue:l.config.global.background.show,"onUpdate:modelValue":u[9]||(u[9]=e=>l.config.global.background.show=e),toggle:!0,label:"\u80CC\u666F\u8272"},{default:o(()=>[i(a,{level:2,label:"\u989C\u8272"},{default:o(()=>[i(m,{modelValue:l.config.global.background.color,"onUpdate:modelValue":u[8]||(u[8]=e=>l.config.global.background.color=e)},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])]),_:1}),i(t,{modelValue:l.config.label.show,"onUpdate:modelValue":u[16]||(u[16]=e=>l.config.label.show=e),toggle:!0,label:"\u67F1\u5B50\u6807\u6CE8"},{default:o(()=>[i(a,{level:2,label:"\u4F4D\u7F6E"},{default:o(()=>[i(d,{modelValue:l.config.label.position,"onUpdate:modelValue":u[10]||(u[10]=e=>l.config.label.position=e),data:l.echartsLablePositions},null,8,["modelValue","data"])]),_:1}),i(a,{level:2,label:"\u6587\u672C\u6837\u5F0F","is-flat":!0},{default:o(()=>[i(n,{modelValue:l.config.label.textStyle.fontSize,"onUpdate:modelValue":u[11]||(u[11]=e=>l.config.label.textStyle.fontSize=e),min:12,max:100,step:1,suffix:"px",inline:"inline",label:"\u5B57\u53F7"},null,8,["modelValue"]),i(m,{modelValue:l.config.label.textStyle.color,"onUpdate:modelValue":u[12]||(u[12]=e=>l.config.label.textStyle.color=e),inline:"inline",label:"\u989C\u8272"},null,8,["modelValue"]),i(d,{modelValue:l.config.label.textStyle.fontWeight,"onUpdate:modelValue":u[13]||(u[13]=e=>l.config.label.textStyle.fontWeight=e),data:l.fontWeights,inline:"inline",label:"\u5B57\u4F53\u7C97\u7EC6"},null,8,["modelValue","data"])]),_:1}),i(a,{level:2,label:"\u6C34\u5E73\u504F\u79FB"},{default:o(()=>[i(r,{modelValue:l.config.label.offsetX,"onUpdate:modelValue":u[14]||(u[14]=e=>l.config.label.offsetX=e),min:-1e3,max:1e3,step:1},null,8,["modelValue"])]),_:1}),i(a,{level:2,label:"\u5782\u76F4\u504F\u79FB"},{default:o(()=>[i(r,{modelValue:l.config.label.offsetY,"onUpdate:modelValue":u[15]||(u[15]=e=>l.config.label.offsetY=e),min:-1e3,max:1e3,step:1},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),i(t,{modelValue:l.config.xAxis.show,"onUpdate:modelValue":u[51]||(u[51]=e=>l.config.xAxis.show=e),toggle:!0,label:"X\u8F74"},{default:o(()=>[i(a,{level:2,label:"\u7C7B\u578B"},{default:o(()=>[i(A,{value:l.config.xAxis.type,"onUpdate:value":u[17]||(u[17]=e=>l.config.xAxis.type=e),size:"small"},{default:o(()=>[(s(!0),F(C,null,U(l.axisTypes,e=>(s(),f(y,{key:e.id,value:e.id},{default:o(()=>[B(v(e.value),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),i(a,{level:2,label:"\u4E24\u7AEF\u7559\u767D"},{default:o(()=>[i(S,{value:l.config.xAxis.boundaryGap,"onUpdate:value":u[18]||(u[18]=e=>l.config.xAxis.boundaryGap=e)},null,8,["value"])]),_:1}),i(t,{modelValue:l.config.xAxis.title.show,"onUpdate:modelValue":u[26]||(u[26]=e=>l.config.xAxis.title.show=e),toggle:!0,label:"\u8F74\u6807\u9898"},{default:o(()=>[i(a,{level:2,label:"\u6807\u9898\u663E\u793A"},{default:o(()=>[i(x,{modelValue:l.config.xAxis.title.name,"onUpdate:modelValue":u[19]||(u[19]=e=>l.config.xAxis.title.name=e)},null,8,["modelValue"])]),_:1}),i(a,{level:2,label:"\u4F4D\u7F6E"},{default:o(()=>[i(d,{modelValue:l.config.xAxis.title.location,"onUpdate:modelValue":u[20]||(u[20]=e=>l.config.xAxis.title.location=e),data:l.titleLocations},null,8,["modelValue","data"])]),_:1}),i(a,{level:2,label:"\u5C55\u793A\u65B9\u5F0F","is-flat":!0},{default:o(()=>[i(n,{modelValue:l.config.xAxis.title.display.rotate,"onUpdate:modelValue":u[21]||(u[21]=e=>l.config.xAxis.title.display.rotate=e),min:0,max:360,step:1,suffix:"\u5EA6",inline:"inline",label:"\u65CB\u8F6C"},null,8,["modelValue"]),i(n,{modelValue:l.config.xAxis.title.display.offset,"onUpdate:modelValue":u[22]||(u[22]=e=>l.config.xAxis.title.display.offset=e),min:-1e3,max:1e3,step:1,suffix:"px",inline:"inline",label:"\u504F\u79FB"},null,8,["modelValue"])]),_:1}),i(a,{level:2,label:"\u6587\u672C\u6837\u5F0F","is-flat":!0},{default:o(()=>[i(n,{modelValue:l.config.xAxis.title.textStyle.fontSize,"onUpdate:modelValue":u[23]||(u[23]=e=>l.config.xAxis.title.textStyle.fontSize=e),min:12,max:100,step:1,suffix:"px",inline:"inline",label:"\u5B57\u53F7"},null,8,["modelValue"]),i(m,{modelValue:l.config.xAxis.title.textStyle.color,"onUpdate:modelValue":u[24]||(u[24]=e=>l.config.xAxis.title.textStyle.color=e),inline:"inline",label:"\u989C\u8272"},null,8,["modelValue"]),i(d,{modelValue:l.config.xAxis.title.textStyle.fontWeight,"onUpdate:modelValue":u[25]||(u[25]=e=>l.config.xAxis.title.textStyle.fontWeight=e),data:l.fontWeights,inline:"inline",label:"\u5B57\u4F53\u7C97\u7EC6"},null,8,["modelValue","data"])]),_:1})]),_:1},8,["modelValue"]),i(t,{modelValue:l.config.xAxis.axisLine.show,"onUpdate:modelValue":u[30]||(u[30]=e=>l.config.xAxis.axisLine.show=e),toggle:!0,label:"\u8F74\u7EBF"},{default:o(()=>[i(a,{level:2,label:"\u7C7B\u578B"},{default:o(()=>[i(d,{modelValue:l.config.xAxis.axisLine.type,"onUpdate:modelValue":u[27]||(u[27]=e=>l.config.xAxis.axisLine.type=e),data:l.lineStyles},null,8,["modelValue","data"])]),_:1}),i(a,{level:2,label:"\u7C97\u7EC6"},{default:o(()=>[i(n,{modelValue:l.config.xAxis.axisLine.width,"onUpdate:modelValue":u[28]||(u[28]=e=>l.config.xAxis.axisLine.width=e),min:0,max:100,step:1,suffix:"px"},null,8,["modelValue"])]),_:1}),i(a,{level:2,label:"\u989C\u8272"},{default:o(()=>[i(m,{modelValue:l.config.xAxis.axisLine.color,"onUpdate:modelValue":u[29]||(u[29]=e=>l.config.xAxis.axisLine.color=e)},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),i(t,{modelValue:l.config.xAxis.axisTick.show,"onUpdate:modelValue":u[34]||(u[34]=e=>l.config.xAxis.axisTick.show=e),toggle:!0,label:"\u8F74\u523B\u5EA6"},{default:o(()=>[i(a,{level:2,label:"\u7C7B\u578B"},{default:o(()=>[i(d,{modelValue:l.config.xAxis.axisTick.type,"onUpdate:modelValue":u[31]||(u[31]=e=>l.config.xAxis.axisTick.type=e),data:l.lineStyles},null,8,["modelValue","data"])]),_:1}),i(a,{level:2,label:"\u7C97\u7EC6"},{default:o(()=>[i(n,{modelValue:l.config.xAxis.axisTick.width,"onUpdate:modelValue":u[32]||(u[32]=e=>l.config.xAxis.axisTick.width=e),min:0,max:100,step:1,suffix:"px"},null,8,["modelValue"])]),_:1}),i(a,{level:2,label:"\u989C\u8272"},{default:o(()=>[i(m,{modelValue:l.config.xAxis.axisTick.color,"onUpdate:modelValue":u[33]||(u[33]=e=>l.config.xAxis.axisTick.color=e)},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),i(t,{modelValue:l.config.xAxis.axisLabel.show,"onUpdate:modelValue":u[44]||(u[44]=e=>l.config.xAxis.axisLabel.show=e),toggle:!0,label:"\u8F74\u6807\u7B7E"},{default:o(()=>[l.config.xAxis.type==="value"?(s(),f(a,{key:0,level:2,tooltip:"\u6574\u6570\u53C2\u7167 d, \u6D6E\u70B9\u53C2\u7167 .1f",label:"\u663E\u793A\u683C\u5F0F"},{default:o(()=>[i(d,{modelValue:l.config.xAxis.axisLabel.valueFormat,"onUpdate:modelValue":u[35]||(u[35]=e=>l.config.xAxis.axisLabel.valueFormat=e),data:l.valueFormats},null,8,["modelValue","data"])]),_:1})):V("",!0),l.config.xAxis.type==="time"?(s(),f(a,{key:1,level:2,tooltip:"\u65F6\u95F4\u8BF7\u53C2\u7167 YYYY/MM/DD HH:mm:ss",label:"\u663E\u793A\u683C\u5F0F"},{default:o(()=>[i(d,{modelValue:l.config.xAxis.axisLabel.timeFormat,"onUpdate:modelValue":u[36]||(u[36]=e=>l.config.xAxis.axisLabel.timeFormat=e),data:l.timeFormats},null,8,["modelValue","data"])]),_:1})):V("",!0),i(a,{level:2,tooltip:"\u9ED8\u8BA4\u4F1A\u91C7\u7528\u6807\u7B7E\u4E0D\u91CD\u53E0\u7684\u7B56\u7565\u95F4\u9694\u663E\u793A\u6807\u7B7E\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u6210 0 \u5F3A\u5236\u663E\u793A\u6240\u6709\u6807\u7B7E\u3002",label:"\u95F4\u9694"},{default:o(()=>[i(b,{modelValue:l.config.xAxis.axisLabel.interval,"onUpdate:modelValue":u[37]||(u[37]=e=>l.config.xAxis.axisLabel.interval=e),data:l.selectSuggests,filters:["auto","0","1","2"]},null,8,["modelValue","data"])]),_:1}),i(a,{level:2,label:"\u5C55\u793A\u65B9\u5F0F","is-flat":!0},{default:o(()=>[i(n,{modelValue:l.config.xAxis.axisLabel.display.rotate,"onUpdate:modelValue":u[38]||(u[38]=e=>l.config.xAxis.axisLabel.display.rotate=e),min:0,max:100,step:1,suffix:"\u5EA6",inline:"inline",label:"\u65CB\u8F6C"},null,8,["modelValue"]),i(n,{modelValue:l.config.xAxis.axisLabel.display.margin,"onUpdate:modelValue":u[39]||(u[39]=e=>l.config.xAxis.axisLabel.display.margin=e),min:-1e3,max:1e3,step:1,suffix:"px",inline:"inline",label:"\u504F\u79FB"},null,8,["modelValue"])]),_:1}),i(a,{level:2,label:"\u5BF9\u9F50\u65B9\u5F0F"},{default:o(()=>[i(d,{modelValue:l.config.xAxis.axisLabel.align,"onUpdate:modelValue":u[40]||(u[40]=e=>l.config.xAxis.axisLabel.align=e),data:l.hAligns},null,8,["modelValue","data"])]),_:1}),i(a,{level:2,label:"\u6587\u672C\u6837\u5F0F","is-flat":!0},{default:o(()=>[i(n,{modelValue:l.config.xAxis.axisLabel.textStyle.fontSize,"onUpdate:modelValue":u[41]||(u[41]=e=>l.config.xAxis.axisLabel.textStyle.fontSize=e),min:12,max:100,step:1,suffix:"px",inline:"inline",label:"\u5B57\u53F7"},null,8,["modelValue"]),i(m,{modelValue:l.config.xAxis.axisLabel.textStyle.color,"onUpdate:modelValue":u[42]||(u[42]=e=>l.config.xAxis.axisLabel.textStyle.color=e),inline:"inline",label:"\u989C\u8272"},null,8,["modelValue"]),i(d,{modelValue:l.config.xAxis.axisLabel.textStyle.fontWeight,"onUpdate:modelValue":u[43]||(u[43]=e=>l.config.xAxis.axisLabel.textStyle.fontWeight=e),data:l.fontWeights,inline:"inline",label:"\u5B57\u4F53\u7C97\u7EC6"},null,8,["modelValue","data"])]),_:1})]),_:1},8,["modelValue"]),i(t,{modelValue:l.config.xAxis.grid.show,"onUpdate:modelValue":u[50]||(u[50]=e=>l.config.xAxis.grid.show=e),toggle:!0,label:"\u7F51\u683C\u7EBF"},{default:o(()=>[i(a,{level:2,label:"\u7EBF\u578B\u6837\u5F0F","is-flat":!0},{default:o(()=>[i(d,{modelValue:l.config.xAxis.grid.line.type,"onUpdate:modelValue":u[45]||(u[45]=e=>l.config.xAxis.grid.line.type=e),data:l.lineStyles,inline:"inline",label:"\u7C7B\u578B"},null,8,["modelValue","data"]),i(n,{modelValue:l.config.xAxis.grid.line.width,"onUpdate:modelValue":u[46]||(u[46]=e=>l.config.xAxis.grid.line.width=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"\u7C97\u7EC6"},null,8,["modelValue"]),i(m,{modelValue:l.config.xAxis.grid.line.color,"onUpdate:modelValue":u[47]||(u[47]=e=>l.config.xAxis.grid.line.color=e),inline:"inline-single",label:"\u989C\u8272"},null,8,["modelValue"]),l.config.xAxis.grid.line.type==="dashed"?(s(),f(n,{key:0,modelValue:l.config.xAxis.grid.line.dashedLength,"onUpdate:modelValue":u[48]||(u[48]=e=>l.config.xAxis.grid.line.dashedLength=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"\u957F\u5EA6"},null,8,["modelValue"])):V("",!0),l.config.xAxis.grid.line.type==="dashed"?(s(),f(n,{key:1,modelValue:l.config.xAxis.grid.line.dashedSpace,"onUpdate:modelValue":u[49]||(u[49]=e=>l.config.xAxis.grid.line.dashedSpace=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"\u95F4\u8DDD"},null,8,["modelValue"])):V("",!0)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),i(t,{modelValue:l.config.yAxis.show,"onUpdate:modelValue":u[86]||(u[86]=e=>l.config.yAxis.show=e),toggle:!0,label:"Y\u8F74"},{default:o(()=>[i(a,{level:2,label:"\u663E\u793A\u8303\u56F4","is-flat":!0},{default:o(()=>[i(b,{modelValue:l.config.yAxis.extent.min,"onUpdate:modelValue":u[52]||(u[52]=e=>l.config.yAxis.extent.min=e),data:l.selectSuggests,filters:["auto","dataMin"],inline:"inline",label:"\u6700\u5C0F\u503C"},null,8,["modelValue","data"]),i(b,{modelValue:l.config.yAxis.extent.max,"onUpdate:modelValue":u[53]||(u[53]=e=>l.config.yAxis.extent.max=e),data:l.selectSuggests,filters:["auto","dataMax"],inline:"inline",label:"\u6700\u5927\u503C"},null,8,["modelValue","data"])]),_:1}),i(a,{level:2,tooltip:"\u8FD9\u662F\u4E2A\u9884\u4F30\u503C\uFF0C\u5B9E\u9645\u663E\u793A\u4F1A\u505A\u8C03\u6574\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u6210 0 \u5F3A\u5236\u663E\u793A\u6240\u6709\u6807\u7B7E\u3002",label:"\u6807\u7B7E\u6570\u91CF"},{default:o(()=>[i(n,{modelValue:l.config.yAxis.splitNumber,"onUpdate:modelValue":u[54]||(u[54]=e=>l.config.yAxis.splitNumber=e),min:0,max:100,step:1},null,8,["modelValue"])]),_:1}),i(t,{modelValue:l.config.yAxis.title.show,"onUpdate:modelValue":u[62]||(u[62]=e=>l.config.yAxis.title.show=e),toggle:!0,label:"\u8F74\u6807\u9898"},{default:o(()=>[i(a,{level:2,label:"\u6807\u9898\u663E\u793A"},{default:o(()=>[i(x,{modelValue:l.config.yAxis.title.name,"onUpdate:modelValue":u[55]||(u[55]=e=>l.config.yAxis.title.name=e)},null,8,["modelValue"])]),_:1}),i(a,{level:2,label:"\u4F4D\u7F6E"},{default:o(()=>[i(d,{modelValue:l.config.yAxis.title.location,"onUpdate:modelValue":u[56]||(u[56]=e=>l.config.yAxis.title.location=e),data:l.titleLocations},null,8,["modelValue","data"])]),_:1}),i(a,{level:2,label:"\u5C55\u793A\u65B9\u5F0F","is-flat":!0},{default:o(()=>[i(n,{modelValue:l.config.yAxis.title.display.rotate,"onUpdate:modelValue":u[57]||(u[57]=e=>l.config.yAxis.title.display.rotate=e),min:0,max:360,step:1,suffix:"\u5EA6",inline:"inline",label:"\u65CB\u8F6C"},null,8,["modelValue"]),i(n,{modelValue:l.config.yAxis.title.display.offset,"onUpdate:modelValue":u[58]||(u[58]=e=>l.config.yAxis.title.display.offset=e),min:-1e3,max:1e3,step:1,suffix:"px",inline:"inline",label:"\u504F\u79FB"},null,8,["modelValue"])]),_:1}),i(a,{level:2,label:"\u6587\u672C\u6837\u5F0F","is-flat":!0},{default:o(()=>[i(n,{modelValue:l.config.yAxis.title.textStyle.fontSize,"onUpdate:modelValue":u[59]||(u[59]=e=>l.config.yAxis.title.textStyle.fontSize=e),min:12,max:100,step:1,suffix:"px",inline:"inline",label:"\u5B57\u53F7"},null,8,["modelValue"]),i(m,{modelValue:l.config.yAxis.title.textStyle.color,"onUpdate:modelValue":u[60]||(u[60]=e=>l.config.yAxis.title.textStyle.color=e),inline:"inline",label:"\u989C\u8272"},null,8,["modelValue"]),i(d,{modelValue:l.config.yAxis.title.textStyle.fontWeight,"onUpdate:modelValue":u[61]||(u[61]=e=>l.config.yAxis.title.textStyle.fontWeight=e),data:l.fontWeights,inline:"inline",label:"\u5B57\u4F53\u7C97\u7EC6"},null,8,["modelValue","data"])]),_:1})]),_:1},8,["modelValue"]),i(t,{modelValue:l.config.yAxis.axisLine.show,"onUpdate:modelValue":u[66]||(u[66]=e=>l.config.yAxis.axisLine.show=e),toggle:!0,label:"\u8F74\u7EBF"},{default:o(()=>[i(a,{level:2,label:"\u7C7B\u578B"},{default:o(()=>[i(d,{modelValue:l.config.yAxis.axisLine.type,"onUpdate:modelValue":u[63]||(u[63]=e=>l.config.yAxis.axisLine.type=e),data:l.lineStyles},null,8,["modelValue","data"])]),_:1}),i(a,{level:2,label:"\u7C97\u7EC6"},{default:o(()=>[i(n,{modelValue:l.config.yAxis.axisLine.width,"onUpdate:modelValue":u[64]||(u[64]=e=>l.config.yAxis.axisLine.width=e),min:0,max:100,step:1,suffix:"px"},null,8,["modelValue"])]),_:1}),i(a,{level:2,label:"\u989C\u8272"},{default:o(()=>[i(m,{modelValue:l.config.yAxis.axisLine.color,"onUpdate:modelValue":u[65]||(u[65]=e=>l.config.yAxis.axisLine.color=e)},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),i(t,{modelValue:l.config.yAxis.axisTick.show,"onUpdate:modelValue":u[70]||(u[70]=e=>l.config.yAxis.axisTick.show=e),toggle:!0,label:"\u8F74\u523B\u5EA6"},{default:o(()=>[i(a,{level:2,label:"\u7C7B\u578B"},{default:o(()=>[i(d,{modelValue:l.config.yAxis.axisTick.type,"onUpdate:modelValue":u[67]||(u[67]=e=>l.config.yAxis.axisTick.type=e),data:l.lineStyles},null,8,["modelValue","data"])]),_:1}),i(a,{level:2,label:"\u7C97\u7EC6"},{default:o(()=>[i(n,{modelValue:l.config.yAxis.axisTick.width,"onUpdate:modelValue":u[68]||(u[68]=e=>l.config.yAxis.axisTick.width=e),min:0,max:100,step:1,suffix:"px"},null,8,["modelValue"])]),_:1}),i(a,{level:2,label:"\u989C\u8272"},{default:o(()=>[i(m,{modelValue:l.config.yAxis.axisTick.color,"onUpdate:modelValue":u[69]||(u[69]=e=>l.config.yAxis.axisTick.color=e)},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),i(t,{modelValue:l.config.yAxis.axisLabel.show,"onUpdate:modelValue":u[79]||(u[79]=e=>l.config.yAxis.axisLabel.show=e),toggle:!0,label:"\u8F74\u6807\u7B7E"},{default:o(()=>[i(a,{level:2,tooltip:"\u6574\u6570\u53C2\u7167 d, \u6D6E\u70B9\u53C2\u7167 .1f",label:"\u663E\u793A\u683C\u5F0F"},{default:o(()=>[i(d,{modelValue:l.config.yAxis.axisLabel.valueFormat,"onUpdate:modelValue":u[71]||(u[71]=e=>l.config.yAxis.axisLabel.valueFormat=e),data:l.valueFormats},null,8,["modelValue","data"])]),_:1}),i(a,{level:2,label:"\u4E24\u7AEF\u95F4\u8DDD"},{default:o(()=>[i(n,{modelValue:l.config.yAxis.axisLabel.boundaryGap,"onUpdate:modelValue":u[72]||(u[72]=e=>l.config.yAxis.axisLabel.boundaryGap=e),min:0,max:100,step:1,suffix:"%"},null,8,["modelValue"])]),_:1}),i(a,{level:2,label:"\u5C55\u793A\u65B9\u5F0F","is-flat":!0},{default:o(()=>[i(n,{modelValue:l.config.yAxis.axisLabel.display.rotate,"onUpdate:modelValue":u[73]||(u[73]=e=>l.config.yAxis.axisLabel.display.rotate=e),min:0,max:360,step:1,suffix:"\u5EA6",inline:"inline",label:"\u65CB\u8F6C"},null,8,["modelValue"]),i(n,{modelValue:l.config.yAxis.axisLabel.display.margin,"onUpdate:modelValue":u[74]||(u[74]=e=>l.config.yAxis.axisLabel.display.margin=e),min:-1e3,max:1e3,step:1,suffix:"px",inline:"inline",label:"\u504F\u79FB"},null,8,["modelValue"])]),_:1}),i(a,{level:2,label:"\u5BF9\u9F50\u65B9\u5F0F"},{default:o(()=>[i(d,{modelValue:l.config.yAxis.axisLabel.align,"onUpdate:modelValue":u[75]||(u[75]=e=>l.config.yAxis.axisLabel.align=e),data:l.hAligns},null,8,["modelValue","data"])]),_:1}),i(a,{level:2,label:"\u6587\u672C\u6837\u5F0F","is-flat":!0},{default:o(()=>[i(n,{modelValue:l.config.yAxis.axisLabel.textStyle.fontSize,"onUpdate:modelValue":u[76]||(u[76]=e=>l.config.yAxis.axisLabel.textStyle.fontSize=e),min:12,max:100,step:1,suffix:"px",inline:"inline",label:"\u5B57\u53F7"},null,8,["modelValue"]),i(m,{modelValue:l.config.yAxis.axisLabel.textStyle.color,"onUpdate:modelValue":u[77]||(u[77]=e=>l.config.yAxis.axisLabel.textStyle.color=e),inline:"inline",label:"\u989C\u8272"},null,8,["modelValue"]),i(d,{modelValue:l.config.yAxis.axisLabel.textStyle.fontWeight,"onUpdate:modelValue":u[78]||(u[78]=e=>l.config.yAxis.axisLabel.textStyle.fontWeight=e),data:l.fontWeights,inline:"inline",label:"\u5B57\u4F53\u7C97\u7EC6"},null,8,["modelValue","data"])]),_:1})]),_:1},8,["modelValue"]),i(t,{modelValue:l.config.yAxis.grid.show,"onUpdate:modelValue":u[85]||(u[85]=e=>l.config.yAxis.grid.show=e),toggle:!0,label:"\u7F51\u683C\u7EBF"},{default:o(()=>[i(a,{level:2,label:"\u7EBF\u578B\u6837\u5F0F","is-flat":!0},{default:o(()=>[i(d,{modelValue:l.config.yAxis.grid.line.type,"onUpdate:modelValue":u[80]||(u[80]=e=>l.config.yAxis.grid.line.type=e),data:l.lineStyles,inline:"inline",label:"\u7C7B\u578B"},null,8,["modelValue","data"]),i(n,{modelValue:l.config.yAxis.grid.line.width,"onUpdate:modelValue":u[81]||(u[81]=e=>l.config.yAxis.grid.line.width=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"\u7C97\u7EC6"},null,8,["modelValue"]),i(m,{modelValue:l.config.yAxis.grid.line.color,"onUpdate:modelValue":u[82]||(u[82]=e=>l.config.yAxis.grid.line.color=e),inline:"inline-single",label:"\u989C\u8272"},null,8,["modelValue"]),l.config.yAxis.grid.line.type==="dashed"?(s(),f(n,{key:0,modelValue:l.config.yAxis.grid.line.dashedLength,"onUpdate:modelValue":u[83]||(u[83]=e=>l.config.yAxis.grid.line.dashedLength=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"\u957F\u5EA6"},null,8,["modelValue"])):V("",!0),l.config.yAxis.grid.line.type==="dashed"?(s(),f(n,{key:1,modelValue:l.config.yAxis.grid.line.dashedSpace,"onUpdate:modelValue":u[84]||(u[84]=e=>l.config.yAxis.grid.line.dashedSpace=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"\u95F4\u8DDD"},null,8,["modelValue"])):V("",!0)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),i(t,{modelValue:l.config.tooltip.show,"onUpdate:modelValue":u[99]||(u[99]=e=>l.config.tooltip.show=e),toggle:!0,label:"\u63D0\u793A\u6846"},{default:o(()=>[i(t,{label:"\u6587\u672C\u6837\u5F0F"},{default:o(()=>[i(a,{level:2,label:"\u5B57\u53F7"},{default:o(()=>[i(n,{modelValue:l.config.tooltip.textStyle.fontSize,"onUpdate:modelValue":u[87]||(u[87]=e=>l.config.tooltip.textStyle.fontSize=e),min:12,max:100,step:1,suffix:"px"},null,8,["modelValue"])]),_:1}),i(a,{level:2,label:"\u989C\u8272"},{default:o(()=>[i(m,{modelValue:l.config.tooltip.textStyle.color,"onUpdate:modelValue":u[88]||(u[88]=e=>l.config.tooltip.textStyle.color=e)},null,8,["modelValue"])]),_:1}),i(a,{level:2,label:"\u5B57\u4F53\u7C97\u7EC6"},{default:o(()=>[i(d,{modelValue:l.config.tooltip.textStyle.fontWeight,"onUpdate:modelValue":u[89]||(u[89]=e=>l.config.tooltip.textStyle.fontWeight=e),data:l.fontWeights},null,8,["modelValue","data"])]),_:1})]),_:1}),i(t,{label:"\u5F39\u6846\u80CC\u666F"},{default:o(()=>[i(a,{level:2,label:"\u80CC\u666F\u8FB9\u8DDD","is-flat":!0},{default:o(()=>[i(n,{modelValue:l.config.tooltip.background.padding.h,"onUpdate:modelValue":u[90]||(u[90]=e=>l.config.tooltip.background.padding.h=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"\u6C34\u5E73"},null,8,["modelValue"]),i(n,{modelValue:l.config.tooltip.background.padding.v,"onUpdate:modelValue":u[91]||(u[91]=e=>l.config.tooltip.background.padding.v=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"\u5782\u76F4"},null,8,["modelValue"])]),_:1}),i(a,{level:2,label:"\u80CC\u666F\u8272"},{default:o(()=>[i(m,{modelValue:l.config.tooltip.background.color,"onUpdate:modelValue":u[92]||(u[92]=e=>l.config.tooltip.background.color=e)},null,8,["modelValue"])]),_:1})]),_:1}),i(t,{modelValue:l.config.tooltip.pointer.show,"onUpdate:modelValue":u[98]||(u[98]=e=>l.config.tooltip.pointer.show=e),toggle:!0,label:"\u8F74\u6307\u793A\u5668"},{default:o(()=>[i(a,{level:2,label:"\u7EBF\u578B\u6837\u5F0F","is-flat":!0},{default:o(()=>[i(d,{modelValue:l.config.tooltip.pointer.line.type,"onUpdate:modelValue":u[93]||(u[93]=e=>l.config.tooltip.pointer.line.type=e),data:l.lineStyles,inline:"inline",label:"\u7C7B\u578B"},null,8,["modelValue","data"]),i(n,{modelValue:l.config.tooltip.pointer.line.width,"onUpdate:modelValue":u[94]||(u[94]=e=>l.config.tooltip.pointer.line.width=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"\u7C97\u7EC6"},null,8,["modelValue"]),i(m,{modelValue:l.config.tooltip.pointer.line.color,"onUpdate:modelValue":u[95]||(u[95]=e=>l.config.tooltip.pointer.line.color=e),inline:"inline-single",label:"\u989C\u8272"},null,8,["modelValue"]),l.config.tooltip.pointer.line.type==="dashed"?(s(),f(n,{key:0,modelValue:l.config.tooltip.pointer.line.dashedLength,"onUpdate:modelValue":u[96]||(u[96]=e=>l.config.tooltip.pointer.line.dashedLength=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"\u957F\u5EA6"},null,8,["modelValue"])):V("",!0),l.config.tooltip.pointer.line.type==="dashed"?(s(),f(n,{key:1,modelValue:l.config.tooltip.pointer.line.dashedSpace,"onUpdate:modelValue":u[97]||(u[97]=e=>l.config.tooltip.pointer.line.dashedSpace=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"\u95F4\u8DDD"},null,8,["modelValue"])):V("",!0)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),i(t,{modelValue:l.config.legend.show,"onUpdate:modelValue":u[117]||(u[117]=e=>l.config.legend.show=e),toggle:!0,label:"\u56FE\u4F8B"},{default:o(()=>[i(a,{level:2,label:"\u4F4D\u7F6E"},{default:o(()=>[i(d,{modelValue:l.config.legend.position,"onUpdate:modelValue":u[100]||(u[100]=e=>l.config.legend.position=e),data:l.legendLocations},null,8,["modelValue","data"])]),_:1}),i(a,{level:2,label:"\u5E03\u5C40\u65B9\u5F0F"},{default:o(()=>[i(A,{value:l.config.legend.orient,"onUpdate:value":u[101]||(u[101]=e=>l.config.legend.orient=e),size:"small"},{default:o(()=>[(s(!0),F(C,null,U(l.orients,e=>(s(),f(y,{key:e.id,value:e.id},{default:o(()=>[B(v(e.value),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),i(a,{level:2,label:"\u6587\u672C\u6837\u5F0F","is-flat":!0},{default:o(()=>[i(n,{modelValue:l.config.legend.textStyle.fontSize,"onUpdate:modelValue":u[102]||(u[102]=e=>l.config.legend.textStyle.fontSize=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"\u5B57\u53F7"},null,8,["modelValue"]),i(m,{modelValue:l.config.legend.textStyle.color,"onUpdate:modelValue":u[103]||(u[103]=e=>l.config.legend.textStyle.color=e),inline:"inline",label:"\u989C\u8272"},null,8,["modelValue"]),i(d,{modelValue:l.config.legend.textStyle.fontWeight,"onUpdate:modelValue":u[104]||(u[104]=e=>l.config.legend.textStyle.fontWeight=e),data:l.fontWeights,inline:"inline-single",label:"\u5B57\u4F53\u7C97\u7EC6"},null,8,["modelValue","data"])]),_:1}),i(t,{modelValue:l.config.legend.symbol.show,"onUpdate:modelValue":u[109]||(u[109]=e=>l.config.legend.symbol.show=e),toggle:!0,label:"\u56FE\u4F8B\u56FE\u6807"},{default:o(()=>[i(a,{level:2,label:"\u56FE\u6807"},{default:o(()=>[i(L,{modelValue:l.config.legend.symbol.icon,"onUpdate:modelValue":u[105]||(u[105]=e=>l.config.legend.symbol.icon=e),shapes:l.echartIcons},null,8,["modelValue","shapes"])]),_:1}),i(a,{level:2,label:"\u5BBD\u5EA6"},{default:o(()=>[i(n,{modelValue:l.config.legend.symbol.width,"onUpdate:modelValue":u[106]||(u[106]=e=>l.config.legend.symbol.width=e),min:0,max:100,step:1,suffix:"px"},null,8,["modelValue"])]),_:1}),i(a,{level:2,label:"\u9AD8\u5EA6"},{default:o(()=>[i(n,{modelValue:l.config.legend.symbol.height,"onUpdate:modelValue":u[107]||(u[107]=e=>l.config.legend.symbol.height=e),min:0,max:100,step:1,suffix:"px"},null,8,["modelValue"])]),_:1}),i(a,{level:2,label:"\u95F4\u9694"},{default:o(()=>[i(n,{modelValue:l.config.legend.symbol.gap,"onUpdate:modelValue":u[108]||(u[108]=e=>l.config.legend.symbol.gap=e),min:-1e3,max:1e3,step:1,suffix:"px"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),i(t,{modelValue:l.config.legend.page.enabled,"onUpdate:modelValue":u[116]||(u[116]=e=>l.config.legend.page.enabled=e),toggle:!0,label:"\u7FFB\u9875\u529F\u80FD"},{default:o(()=>[i(a,{level:2,label:"\u5BB9\u5668\u5C3A\u5BF8","is-flat":!0},{default:o(()=>[i(n,{modelValue:l.config.legend.page.size.width,"onUpdate:modelValue":u[110]||(u[110]=e=>l.config.legend.page.size.width=e),min:0,max:1e3,step:1,suffix:"px",inline:"inline",label:"\u5BBD\u5EA6"},null,8,["modelValue"]),i(n,{modelValue:l.config.legend.page.size.height,"onUpdate:modelValue":u[111]||(u[111]=e=>l.config.legend.page.size.height=e),min:0,max:1e3,step:1,suffix:"px",inline:"inline",label:"\u9AD8\u5EA6"},null,8,["modelValue"])]),_:1}),i(a,{level:2,label:"\u7FFB\u9875\u6309\u94AE","is-flat":!0},{default:o(()=>[i(n,{modelValue:l.config.legend.page.button.size,"onUpdate:modelValue":u[112]||(u[112]=e=>l.config.legend.page.button.size=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"\u5C3A\u5BF8"},null,8,["modelValue"]),i(m,{modelValue:l.config.legend.page.button.color,"onUpdate:modelValue":u[113]||(u[113]=e=>l.config.legend.page.button.color=e),inline:"inline",label:"\u989C\u8272"},null,8,["modelValue"]),i(m,{modelValue:l.config.legend.page.button.inactiveColor,"onUpdate:modelValue":u[114]||(u[114]=e=>l.config.legend.page.button.inactiveColor=e),inline:"inline-single",label:"\u7981\u7528\u989C\u8272"},null,8,["modelValue"])]),_:1}),i(a,{level:2,label:"\u9875\u7801\u989C\u8272"},{default:o(()=>[i(m,{modelValue:l.config.legend.page.pageNumColor,"onUpdate:modelValue":u[115]||(u[115]=e=>l.config.legend.page.pageNumColor=e)},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),i(t,{label:"\u7CFB\u5217",mode:"layout","default-layout":"horizontal",features:["vertical","horizontal","copy","add","remove"],list:l.config.series,min:1,max:5,tab:"\u7CFB\u5217","add-item":l.handleAddSeriesItem},{default:o(e=>[i(a,{level:2,label:"\u7CFB\u5217\u540D\u79F0"},{default:o(()=>[i(x,{modelValue:e.item.name,"onUpdate:modelValue":g=>e.item.name=g},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),i(t,{label:"\u989C\u8272\u914D\u7F6E"},{default:o(()=>[i(a,{level:2,label:"\u586B\u5145\u7C7B\u578B"},{default:o(()=>[i(A,{value:e.item.color.type,"onUpdate:value":g=>e.item.color.type=g,size:"small"},{default:o(()=>[(s(!0),F(C,null,U(l.fillTypes,g=>(s(),f(y,{key:g.id,value:g.id},{default:o(()=>[B(v(g.value),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value"])]),_:2},1024),e.item.color.type==="solid"?(s(),f(a,{key:0,level:2,label:"\u989C\u8272"},{default:o(()=>[i(m,{modelValue:e.item.color.value,"onUpdate:modelValue":g=>e.item.color.value=g},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):V("",!0),e.item.color.type==="gradient"?(s(),f(a,{key:1,level:2,label:"\u5F00\u59CB\u989C\u8272"},{default:o(()=>[i(m,{modelValue:e.item.color.from,"onUpdate:modelValue":g=>e.item.color.from=g},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):V("",!0),e.item.color.type==="gradient"?(s(),f(a,{key:2,level:2,label:"\u7ED3\u675F\u989C\u8272"},{default:o(()=>[i(m,{modelValue:e.item.color.to,"onUpdate:modelValue":g=>e.item.color.to=g},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):V("",!0)]),_:2},1024)]),_:1},8,["list","add-item"]),i(t,{modelValue:l.config.animation.enabled,"onUpdate:modelValue":u[121]||(u[121]=e=>l.config.animation.enabled=e),toggle:!0,label:"\u52A8\u753B"},{default:o(()=>[i(a,{level:2,label:"\u6301\u7EED\u65F6\u95F4"},{default:o(()=>[i(n,{modelValue:l.config.animation.duration,"onUpdate:modelValue":u[118]||(u[118]=e=>l.config.animation.duration=e),min:0,step:100,suffix:"ms"},null,8,["modelValue"])]),_:1}),i(a,{level:2,label:"\u7F13\u52A8\u6548\u679C"},{default:o(()=>[i(d,{modelValue:l.config.animation.easing,"onUpdate:modelValue":u[119]||(u[119]=e=>l.config.animation.easing=e),data:l.animationEasings},null,8,["modelValue","data"])]),_:1}),i(a,{level:2,label:"\u5EF6\u8FDF"},{default:o(()=>[i(n,{modelValue:l.config.animation.delay,"onUpdate:modelValue":u[120]||(u[120]=e=>l.config.animation.delay=e),min:0,step:100,suffix:"ms"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])])}const il=R(J,[["render",Z]]);export{il as default};
