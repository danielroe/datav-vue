import{d as a,ae as t,k as o,l as n,m as e,p as s}from"./index.5063c078.js";var r=a({name:"DsStaticEditor",setup(){const a=t("apiDataConfig");return{apiDataConfig:a,updateData:t=>{a.value.config.data=t.value}}}});const i={class:"ds-wrapper ds-static"};r.render=function(a,t,r,d,u,c){const p=o("g-monaco-editor");return n(),e("div",i,[s(p,{language:"json","auto-format":!0,code:a.apiDataConfig.config.data,onBlur:a.updateData},null,8,["code","onBlur"])])};export default r;