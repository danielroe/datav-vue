import{d as a,aS as e,aB as s,i as t,j as n,e as c,p as o,C as l,D as m,f as i,o as p,c as r,a as d,F as u,A as v,G as y}from"./index.c6050961.js";import{_}from"./config-title.9a61b693.js";import{_ as f}from"./empty-panel.37c91bc5.js";var g=a({name:"DataCenterPanel",components:{ConfigTitle:_,EmptyPanel:f,SourcePanel:e((()=>s((()=>import("./source-panel.5201d0ac.js")),["/assets/source-panel.5201d0ac.js","/assets/source-panel.9f04189f.css","/assets/index.c6050961.js","/assets/index.81ed2710.css","/assets/filter-collapse-panel.5a9d4038.js"])))},setup(){const a=t("com"),e=n((()=>Object.keys(a.value.apis))),s=c(e.value[0]);return o("changePanel",(a=>{s.value=s.value===a?"":a})),{activeName:s,com:a,dataKeys:e}}});const j=y();l("data-v-44ac5b88");const b={class:"data-center-panel"},P={class:"scroll-container"};m();const k=j(((a,e,s,t,n,c)=>{const o=i("config-title"),l=i("source-panel"),m=i("empty-panel");return p(),r("div",b,[d(o,{"com-name":a.com.name,"com-alias":a.com.alias},null,8,["com-name","com-alias"]),d("div",P,[a.dataKeys.length>0?(p(!0),r(u,{key:0},v(a.dataKeys,(e=>(p(),r(l,{key:e,"api-name":e,"active-name":a.activeName,collapse:a.dataKeys.length>1},null,8,["api-name","active-name","collapse"])))),128)):(p(),r(m,{key:1,content:"该组件不需要配置数据"}))])])}));g.render=k,g.__scopeId="data-v-44ac5b88";export default g;