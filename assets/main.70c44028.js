import{c as s,a as p,g as n,u as _,_ as t,b as m,i as c,N as l,G as E,D as d,d as h,A as v}from"./App.6555cd13.js";const A=[{path:"/",name:"Home",redirect:"/project",component:()=>t(()=>import("./index.ac7e0582.js"),["assets/index.ac7e0582.js","assets/App.6555cd13.js","assets/App.4717e360.css","assets/arrow-down.3bba0f64.js","assets/document.2929a580.js","assets/tutorial.8680f092.js","assets/my-com.76ca6d99.js","assets/my-data.3b6fd0e5.js","assets/layer.6d2c5e93.js","assets/index.1819be48.css"]),children:[{path:"project",name:"MyProject",component:()=>t(()=>import("./index.f627fa08.js"),["assets/index.f627fa08.js","assets/App.6555cd13.js","assets/App.4717e360.css","assets/project.14f90fe3.js","assets/templates.d735a5d3.js","assets/dom.554d1048.js","assets/warning.088cc602.js","assets/plus.f2c510ea.js","assets/edit.0fe63215.js","assets/delete.fc942bdb.js","assets/arrow-down.3bba0f64.js","assets/search.109ea5b5.js","assets/copy.0eb06a46.js","assets/publish-screen.6e3e0086.js","assets/publish-screen.075bc684.css","assets/release.c66c1a9d.js","assets/sortBy.f1ffd3f5.js","assets/index.4728d400.css"]),meta:{title:"\u6211\u7684\u53EF\u89C6\u5316"}},{path:"data",name:"MyData",component:()=>t(()=>import("./index.adcad6d8.js"),["assets/index.adcad6d8.js","assets/my-data.3b6fd0e5.js","assets/App.6555cd13.js","assets/App.4717e360.css"]),meta:{title:"\u6211\u7684\u6570\u636E"}},{path:"com",name:"MyCom",component:()=>t(()=>import("./index.7b3b966f.js"),["assets/index.7b3b966f.js","assets/my-com.76ca6d99.js","assets/App.6555cd13.js","assets/App.4717e360.css"]),meta:{title:"\u6211\u7684\u7EC4\u4EF6"}},{path:"case",name:"MyCase",component:()=>t(()=>import("./index.e7403247.js"),["assets/index.e7403247.js","assets/tutorial.8680f092.js","assets/App.6555cd13.js","assets/App.4717e360.css"]),meta:{title:"\u6559\u7A0B"}}]}],I=[{path:"/login",name:"Login",component:()=>t(()=>import("./index.98645471.js"),["assets/index.98645471.js","assets/App.6555cd13.js","assets/App.4717e360.css","assets/index.8696754d.css"]),meta:{title:"\u767B\u5F55"}},...A,{path:"/create-screen",name:"CreateScreen",component:()=>t(()=>import("./create-screen.f05215d5.js"),["assets/create-screen.f05215d5.js","assets/App.6555cd13.js","assets/App.4717e360.css","assets/project.14f90fe3.js","assets/templates.d735a5d3.js","assets/arrow-left.fa493f0e.js","assets/arrow-right.9a80f4d5.js","assets/plus.f2c510ea.js","assets/back.6a7d4f6b.js","assets/create-screen.27d3efec.css"]),meta:{title:"\u521B\u5EFA"}},{path:"/admin/screen/:projectId",name:"ScreenEditor",props:!0,component:()=>t(()=>import("./index.8fbef3df.js").then(e=>e.i),["assets/index.8fbef3df.js","assets/App.6555cd13.js","assets/App.4717e360.css","assets/templates.d735a5d3.js","assets/index.b90a9a8a.css"]),meta:{title:"\u7F16\u8F91\u5668"}},{path:"/screen/preview/:screenId",name:"Preview",props:!0,component:()=>t(()=>import("./index.ff140a00.js"),["assets/index.ff140a00.js","assets/App.6555cd13.js","assets/App.4717e360.css","assets/dom.554d1048.js","assets/screen.f3513934.js","assets/index.b4972611.css"])},{path:"/:catchAll(.*)*",name:"NotFound",component:()=>t(()=>import("./index.842b2ba3.js"),["assets/index.842b2ba3.js","assets/App.6555cd13.js","assets/App.4717e360.css","assets/index.9fbc8cb5.css"]),meta:{title:"\u627E\u4E0D\u5230\u9875\u9762"}}],u=s({history:p(),routes:I}),D=["/login","/auth-redirect","/dev"];u.beforeEach(async(e,P,o)=>{e.meta&&e.meta.title?document.title=`${e.meta.title} | ${n.title}`:document.title=n.title;const r=_();if(r.isLogin())if(e.path==="/login")o({path:"/"});else if(r.role>0)o();else try{await r.getUserInfo(),o({...e,replace:!0})}catch{r.resetToken(),o(`/login?redirect=${e.path}`)}else D.some(i=>e.path.startsWith(i))?o():o(`/login?redirect=${e.path}`)});const a=m(v);a.use(c);a.use(l);a.use(E);a.use(d);a.use(h());a.use(u);a.mount("#app");
