import{e as v,b6 as y,_ as f,aE as E,x as g,I as h,aI as C,r as k,aq as o,o as a,f as r,j as i,h as I,L as p,O as K,s as m}from"./App.c8de2d3d.js";import{c as P,a as j}from"./config.3c16c364.js";import{C as B,a as b}from"./children-manager.f82d592c.js";import{E as D}from"./empty-panel.0805bfee.js";import"./document.8e3f3044.js";import"./back.866f357a.js";import"./warning.feae0676.js";import"./plus.a9d8f7d9.js";import"./edit.4ad17d44.js";import"./delete.bcfacf57.js";import"./copy.3a9ecbda.js";import"./show.917774b2.js";import"./hide.a6b121d0.js";import"./drag.9aba45a6.js";import"./index.931d7417.js";import"./templates.1a41ce2a.js";const $=v({name:"DataCenterPanel",components:{ConfigTitle:B,EmptyPanel:D,ChildrenManager:b,SourcePanel:y(()=>f(()=>import("./source-panel.811f88ba.js"),["assets/source-panel.811f88ba.js","assets/App.c8de2d3d.js","assets/App.4717e360.css","assets/arrow-right.d715366d.js","assets/search.ec21aede.js","assets/config.3c16c364.js","assets/source-panel.4e0ae3ce.css"]))},setup(){const e=E(P),n=g(()=>Object.keys(e.value.apis)),t=h(n.value[0]);return C(j,s=>{t.value=t.value===s?"":s}),{activeName:t,com:e,dataKeys:n}}});const x={class:"data-center-panel"},F={class:"scroll-container"};function L(e,n,t,s,N,O){const l=o("config-title"),_=o("children-manager"),u=o("source-panel"),d=o("empty-panel");return a(),r("div",x,[i(l),I("div",F,[e.dataKeys.length>0?(a(),r(p,{key:0},[i(_),(a(!0),r(p,null,K(e.dataKeys,c=>(a(),m(u,{key:c,"api-name":c,"active-name":e.activeName,collapse:e.dataKeys.length>1},null,8,["api-name","active-name","collapse"]))),128))],64)):(a(),m(d,{key:1,content:"\u8BE5\u7EC4\u4EF6\u4E0D\u9700\u8981\u914D\u7F6E\u6570\u636E"}))])])}const Y=k($,[["render",L],["__scopeId","data-v-ee5a4b47"]]);export{Y as default};