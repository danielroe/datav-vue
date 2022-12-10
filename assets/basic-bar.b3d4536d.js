var s=Object.defineProperty;var n=(a,e,t)=>e in a?s(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var o=(a,e,t)=>(n(a,typeof e!="symbol"?e+"":e,t),t);import{b6 as l,b7 as d,b8 as i,b9 as h,ba as c,bb as u}from"./App.5d51c89e.js";import{E as g}from"./echarts-animation.c54de7ad.js";class f extends l{constructor(t){super("bar",t);o(this,"color",{type:"solid",value:"#00baff",from:"#fff",to:"#000"})}}class y extends d{constructor(){super("BasicBar",{w:500,h:300});o(this,"config",{global:{fontFamily:"Microsoft Yahei",margin:{top:40,bottom:50,left:50,right:10},innerPadding:20,outerPadding:30,barWidth:"auto",background:{show:!0,color:"rgba(255, 255, 255, 0.1)"}},label:{show:!1,position:"top",textStyle:{fontSize:12,color:"rgba(255, 255, 255, 0.6)",fontWeight:"normal"},offsetX:0,offsetY:0},xAxis:{show:!0,type:"category",boundaryGap:!0,title:{show:!0,name:"X\u8F74",location:"center",display:{rotate:0,offset:20},textStyle:{fontSize:12,color:"#90a0ae",fontWeight:"normal"}},axisLine:{show:!0,type:"solid",width:1,color:"rgba(255, 255, 255, 0.5)"},axisTick:{show:!0,type:"solid",width:1,color:"rgba(255, 255, 255, 0.5)"},axisLabel:{show:!0,valueFormat:"d",timeFormat:"MM/DD",interval:"auto",display:{rotate:0,margin:10},align:"center",textStyle:{fontSize:12,color:"rgba(255, 255, 255, 0.6)",fontWeight:"normal"}},grid:{show:!0,line:{type:"dashed",width:1,color:"rgba(233, 228, 228, 0.1)",dashedLength:4,dashedSpace:4}}},yAxis:{show:!0,extent:{min:"auto",max:"auto"},splitNumber:0,title:{show:!1,name:"Y\u8F74",location:"center",display:{rotate:90,offset:20},textStyle:{fontSize:12,color:"#90a0ae",fontWeight:"normal"}},axisLine:{show:!0,type:"solid",width:1,color:"rgba(255, 255, 255, 0.5)"},axisTick:{show:!0,type:"solid",width:1,color:"rgba(255, 255, 255, 0.5)"},axisLabel:{show:!0,valueFormat:"auto",boundaryGap:0,display:{rotate:0,margin:8},align:"right",textStyle:{fontSize:12,color:"rgba(255, 255, 255, 0.6)",fontWeight:"normal"}},grid:{show:!0,line:{type:"dashed",width:1,color:"rgba(233, 228, 228, 0.1)",dashedLength:4,dashedSpace:4}}},tooltip:{show:!0,textStyle:{fontSize:14,color:"#fff",fontWeight:"normal"},background:{padding:{h:5,v:5},color:"rgba(0, 0, 0, 0.65)"},pointer:{show:!0,line:{type:"dashed",width:1,color:"#f5dc69",dashedLength:4,dashedSpace:4}}},legend:{show:!0,position:"top-center",orient:"horizontal",textStyle:{fontSize:12,color:"#90a0ae",fontWeight:"normal"},symbol:{show:!0,icon:"auto",width:25,height:14,gap:10},page:{enabled:!1,size:{width:100,height:100},button:{size:15,color:"#000",inactiveColor:"#000"},pageNumColor:"#90a0ae"}},series:[new f("\u7CFB\u52171")],animation:{enabled:!0,duration:1e3,easing:g.cubicOut,delay:0}});o(this,"apis");o(this,"apiData");o(this,"events");o(this,"actions");this.initData()}initData(){const t=[i("x",{description:"\u7C7B\u76EE"}),i("y",{description:"\u503C"})];return h(this,{fields:Object.assign({},...t),description:"\u57FA\u672C\u67F1\u72B6\u56FE\u63A5\u53E3"}),c(this),this.events={click:{description:"\u5F53\u70B9\u51FB\u6570\u636E\u9879\u65F6",fields:Object.assign({},...t)}},this.actions={},this}async loadData(){try{const t="bar/basic-bar",r=await u(this.id,t);this.apiData.source.config.data=JSON.stringify(r.data)}catch(t){throw t}}}export{y as BasicBar,f as BasicBarSeries,y as default};
