import{d as a,aS as e,aB as s,i as t,j as n,e as c,p as o,C as l,D as m,f as i,o as p,c as r,a as d,F as u,A as v,G as y}from"./index.546ede60.js";import{_ as f}from"./config-title.15353ee1.js";import{_}from"./empty-panel.6b2bfb58.js";var b=a({name:"DataCenterPanel",components:{ConfigTitle:f,EmptyPanel:_,SourcePanel:e((()=>s((()=>import("./source-panel.54e4433d.js")),["/assets/source-panel.54e4433d.js","/assets/source-panel.9f04189f.css","/assets/index.546ede60.js","/assets/index.81ed2710.css","/assets/filter-collapse-panel.a72b4d2f.js"])))},setup(){const a=t("com"),e=n((()=>Object.keys(a.value.apis))),s=c(e.value[0]);return o("changePanel",(a=>{s.value=s.value===a?"":a})),{activeName:s,com:a,dataKeys:e}}});const g=y();l("data-v-44ac5b88");const j={class:"data-center-panel"},P={class:"scroll-container"};m();const k=g(((a,e,s,t,n,c)=>{const o=i("config-title"),l=i("source-panel"),m=i("empty-panel");return p(),r("div",j,[d(o,{"com-name":a.com.name,"com-alias":a.com.alias},null,8,["com-name","com-alias"]),d("div",P,[a.dataKeys.length>0?(p(!0),r(u,{key:0},v(a.dataKeys,(e=>(p(),r(l,{key:e,"api-name":e,"active-name":a.activeName,collapse:a.dataKeys.length>1},null,8,["api-name","active-name","collapse"])))),128)):(p(),r(m,{key:1,content:"该组件不需要配置数据"}))])])}));b.render=k,b.__scopeId="data-v-44ac5b88";export default b;
