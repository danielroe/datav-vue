import{f as g,o as C,m as T,x as a,e as k,U as B,C as A,s as n,v as $,ax as U,E as D,ay as I,a1 as V,a3 as P,az as M,r as l,h as S,w as i,j as r,l as b,t as F,a7 as j,a8 as N}from"./App.49df06d9.js";const z={},q={t:"1640067016334",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4028",width:"64",height:"64"},L=a("path",{d:"M897.00000031 92H126.99999969A34.99999969 34.99999969 0 0 0 92 126.99999969V711.99999969a34.99999969 34.99999969 0 0 0 34.99999969 35.00000062h350.00000062v114.99999938h-194.80000031a34.99999969 34.99999969 0 1 0 0 70.00000031h460.00000031a34.99999969 34.99999969 0 1 0 0-70.00000031h-195.20000062v-114.79999969h350.00000062A34.99999969 34.99999969 0 0 0 932 711.99999969V126.99999969A34.99999969 34.99999969 0 0 0 897.00000031 92zM861.99999969 677.19999969h-699.99999938V162.00000031h699.99999938z","p-id":"4029"},null,-1),H=a("path",{d:"M315.2 519.00000031a34.2 34.2 0 0 0 21.19999969-7.00000031l106.40000062-81.6L531.99999969 505.20000031a34.99999969 34.99999969 0 0 0 44.4 0l155.00000062-123.20000062a34.99999969 34.99999969 0 0 0-43.60000031-54.79999969l-132.40000031 105.40000031-87.99999938-74.80000031a34.99999969 34.99999969 0 0 0-44.00000062-1.00000031l-128.79999938 98.80000031a34.99999969 34.99999969 0 0 0 21.39999938 62.80000031z","p-id":"4030"},null,-1),O=[L,H];function G(s,o){return C(),T("svg",q,O)}const u9=g(z,[["render",G]]),J=k({name:"PublishScreen",props:{projectId:{type:Number,required:!0},modelValue:{type:Boolean,required:!0}},emits:[B],setup(s,o){const d=A(),p=n(!1),u=n(!1),m=n(!1),c=n(""),w=n("password"),t=n(!0),h=$(()=>u.value?U(s.projectId):""),_=()=>{u.value&&V(()=>{P(h.value).then(()=>{d.success("\u590D\u5236\u6210\u529F")})})},v=()=>{p.value=!1,o.emit(B,!1)};return D(()=>s.modelValue,e=>{e?p.value=!0:p.value=!1}),D(()=>s.projectId,async()=>{try{const e=await I(s.projectId);if(e.data.code===0){const{data:f}=e.data;t.value=!1,u.value=!!f.share,c.value=f.password}}catch{d.error("\u8BFB\u53D6\u5927\u5C4F\u53D1\u5E03\u4FE1\u606F\u5931\u8D25")}}),{visible:p,isPublish:u,shareUrl:h,showTooltip:m,password:c,copyUrl:_,closeDialog:v,loading:t,passwordType:w,publish:async()=>{try{t.value=!0;const e={share:h.value,password:c.value};(await M(s.projectId,e)).data.code===0&&(t.value=!1,v(),d.success(u.value?"\u53D1\u5E03\u6210\u529F":"\u4FDD\u5B58\u6210\u529F"))}catch{d.error("\u53D1\u5E03\u5931\u8D25")}finally{t.value=!1}}}}});const E=s=>(j("data-v-3e59597b"),s=s(),N(),s),K={class:"share-header"},Q={class:"header-wp"},R=E(()=>a("label",{class:"label-color"},"\u53D1\u5E03\u5206\u4EAB\uFF1A",-1)),W={class:"share-switch"},X={class:"share-tutorial"},Y={class:"share-verify"},Z=E(()=>a("div",{class:"label-color"},"\u5206\u4EAB\u94FE\u63A5",-1)),x={class:"link-content"},s9=["value"],e9=E(()=>a("div",{class:"label-color"},"\u8BBF\u95EE\u5BC6\u7801",-1)),o9={class:"share-pwd"},a9={class:"initial-dialog"};function t9(s,o,d,p,u,m){const c=l("n-switch"),w=l("router-link"),t=l("n-tooltip"),h=l("new-input"),_=l("n-button"),v=l("n-spin"),y=l("n-modal");return C(),S(y,{show:s.visible,"onUpdate:show":o[8]||(o[8]=e=>s.visible=e),preset:"dialog","show-icon":!1,title:"\u53D1\u5E03",style:{width:"435px"},onClose:s.closeDialog},{default:i(()=>[r(v,{show:s.loading,class:"share-setting"},{default:i(()=>[a("div",K,[a("div",Q,[R,a("div",W,[r(c,{value:s.isPublish,"onUpdate:value":o[0]||(o[0]=e=>s.isPublish=e)},null,8,["value"])])]),a("div",X,[r(w,{to:{name:"MyCase"},class:"share-tutorial-url",target:"_blank"},{default:i(()=>[b(" \u67E5\u770B\u6559\u7A0B ")]),_:1})])]),a("div",Y,[Z,a("div",x,[r(t,{show:s.showTooltip,trigger:"manual",disabled:!s.isPublish},{trigger:i(()=>[a("textarea",{value:s.shareUrl,class:"new-input share-input",readonly:"",placeholder:"\u5F00\u542F\u53D1\u5E03\u5206\u4EAB\u540E\u53EF\u83B7\u53D6\u8BBF\u95EE\u94FE\u63A5",onClick:o[1]||(o[1]=(...e)=>s.copyUrl&&s.copyUrl(...e)),onMouseenter:o[2]||(o[2]=e=>s.showTooltip=!0),onMouseleave:o[3]||(o[3]=e=>s.showTooltip=!1)},null,40,s9)]),default:i(()=>[b(" \u70B9\u51FB\u590D\u5236 ")]),_:1},8,["show","disabled"]),a("div",{class:"func-btn",onClick:o[4]||(o[4]=(...e)=>s.copyUrl&&s.copyUrl(...e))},"\u590D\u5236")]),e9,a("div",o9,[r(h,{modelValue:s.password,"onUpdate:modelValue":o[5]||(o[5]=e=>s.password=e),type:s.passwordType,placeholder:"\u8BBE\u7F6E\u8BBF\u95EE\u5BC6\u7801",class:"pwd-input"},null,8,["modelValue","type"]),a("div",{class:"func-btn",onClick:o[6]||(o[6]=e=>s.passwordType?s.passwordType="":s.passwordType="password")},F(s.passwordType?"\u67E5\u770B":"\u9690\u85CF"),1),a("div",{class:"func-btn",onClick:o[7]||(o[7]=e=>s.password="")}," \u6E05\u7A7A ")])]),a("div",a9,[r(_,{type:"primary",focusable:!1,class:"publish-btn",onClick:s.publish},{default:i(()=>[b(F(s.isPublish?"\u53D1\u5E03\u5927\u5C4F":"\u4FDD\u5B58"),1)]),_:1},8,["onClick"])])]),_:1},8,["show"])]),_:1},8,["show","onClose"])}const n9=g(J,[["render",t9],["__scopeId","data-v-3e59597b"]]);export{u9 as I,n9 as P};