import{c as u,a as n,g as i,u as l,_ as o,b as p,i as m,N as h,G as _,D as d,d as f,A as g}from"./App.5d51c89e.js";const E=[{path:"/screen/:screenId",name:"Screen",props:!0,component:()=>o(()=>import("./index.f2eb7869.js"),["assets/index.f2eb7869.js","assets/App.5d51c89e.js","assets/App.83a8713a.css","assets/dom.d6ebfc79.js","assets/screen.ce294341.js","assets/index.b4972611.css"])},{path:"/:catchAll(.*)*",name:"NotFound",component:()=>o(()=>import("./index.addd4172.js"),["assets/index.addd4172.js","assets/App.5d51c89e.js","assets/App.83a8713a.css","assets/index.9fbc8cb5.css"]),meta:{title:"\u627E\u4E0D\u5230\u9875\u9762"}}],c=u({history:n(),routes:E}),v=["/login","/auth-redirect","/dev"];c.beforeEach(async(e,A,a)=>{e.meta&&e.meta.title?document.title=`${e.meta.title} | ${i.title}`:document.title=i.title;const s=l();if(s.isLogin())if(e.path==="/login")a({path:"/"});else if(s.role>0)a();else try{await s.getUserInfo(),a({...e,replace:!0})}catch{s.resetToken(),a(`/login?redirect=${e.path}`)}else v.some(r=>e.path.startsWith(r))?a():a(`/login?redirect=${e.path}`)});const t=p(g);t.use(m);t.use(h);t.use(_);t.use(d);t.use(f());t.use(c);t.mount("#app");
