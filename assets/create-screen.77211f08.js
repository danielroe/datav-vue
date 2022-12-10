import{e as V,C as $,s as _,a4 as O,v as z,a0 as R,aa as U,a1 as q,aN as M,f as Y,m as g,j as l,w as i,P as D,r as f,o as h,x as s,l as C,Q as B,t as L,p as G,n as Q,a7 as W,a8 as X}from"./App.5d51c89e.js";import{P as H}from"./project.14f90fe3.js";import{a as J}from"./templates.2d00e6e8.js";import{I as K}from"./arrow-left.2cbc4d76.js";import{I as Z}from"./arrow-right.e64e6b97.js";import{I as x}from"./plus.c251cc4b.js";import{I as ee}from"./back.def058e9.js";const j=window.requestAnimationFrame||(e=>setTimeout(e,16));function se(e,o,c,u){const r=c-o;return e/=u/2,e<1?r/2*e*e*e+o:r/2*((e-=2)*e*e+2)+o}function te(e,o){if(typeof window>"u")return 0;const c=o?"pageYOffset":"pageXOffset",u=o?"scrollTop":"scrollLeft",r=e===window;let d=r?e[c]:e[u];return r&&typeof d!="number"&&(d=window.document.documentElement[u]),d}function oe(e,o={}){const{getContainer:c=()=>window,callback:u,duration:r=450}=o,d=c(),m=te(d,!1),v=Date.now(),k=()=>{const p=Date.now()-v,F=se(p>r?r:p,m,e,r);d===window?window.scrollTo(F,window.pageYOffset):d.scrollLeft=F,p<r?j(k):typeof u=="function"&&u()};j(k)}const ne=V({name:"CreateScreen",components:{IconArrowLeft:K,IconArrowRight:Z,IconBack:ee,IconPlus:x},setup(){const e=$(),o=_(!0),c=_([]),u=_(!1),r=_(!1),d=_(""),m=_({}),v=_(0),k=_([new H(0,"\u672A\u5206\u7EC4")]),I=_(!1),p=O(),F=_(null),E=z(()=>k.value.map(n=>({value:n.id,label:n.name})));R(async()=>{const n=await J();o.value=!1,c.value=n.data,U().then(({data:a})=>{a.code===0&&k.value.push(...a.data.map(({id:w,name:N})=>({id:w,name:N})))})});const P=n=>{m.value=n!=null?n:{},u.value=!0},A=(n,a)=>{m.value=n,r.value=!0,q(()=>{y(n,a)})},y=(n,a)=>{m.value=n,oe(149*a-350,{getContainer:()=>F.value})};return{loading:o,templates:c,visibleCreateDialog:u,visiblePreviewDialog:r,projectName:d,template:m,groupId:v,groups:k,groupOpts:E,saveLoading:I,scrollRef:F,confirmCreate:P,previewTemplate:A,togglePreviewTemplate:y,prevPreviewTemplate:()=>{const n=c.value.findIndex(a=>a.id===m.value.id);if(n>0){const a=n-1,w=c.value[a];y(w,a)}},nextPreviewTemplate:()=>{const n=c.value.findIndex(a=>a.id===m.value.id);if(n<c.value.length-1){const a=n+1,w=c.value[a];y(w,a)}},doCreate:async()=>{var n;try{if(!d.value){e.error("\u8BF7\u8F93\u5165\u5927\u5C4F\u540D\u79F0");return}I.value=!0;const a=(n=m.value)==null?void 0:n.id,w=await M({name:d.value,groupId:v.value,templateId:a!=null?a:0});if(w.data.code===0)u.value=!1,r.value=!1,p.push({name:"ScreenEditor",params:{projectId:w.data.data},query:{tpl:a}});else throw Error(w.data.message)}catch(a){e.error(a.message)}finally{I.value=!1}}}}});const b=e=>(W("data-v-437fbc42"),e=e(),X(),e),ae={class:"create-screen"},le={class:"top-bar"},ie=b(()=>s("div",{class:"right-bar"},null,-1)),re=b(()=>s("div",{class:"left-bar"},null,-1)),ce={class:"return-text"},ue={class:"creator-wp"},de={class:"template-list"},pe={class:"template-item --blank"},me={class:"template-image"},fe=b(()=>s("div",{class:"template-info"}," \u7A7A\u767D\u753B\u677F ",-1)),ve={class:"template-image"},_e=["src"],we={class:"template-mask"},ge={class:"template-info"},he={class:"template-name"},Ce={class:"template-size"},ke={class:"create-dialog"},be=b(()=>s("p",{class:"name-title"},[s("span",{class:"required"},"*"),C("\u6570\u636E\u5927\u5C4F\u540D\u79F0 ")],-1)),Fe=b(()=>s("p",{class:"name-title"},"\u5927\u5C4F\u5206\u7EC4",-1)),Ie={class:"preview-dialog"},ye={class:"preview-list"},De=b(()=>s("p",{class:"template-list-title"},"\u6A21\u677F\u5217\u8868",-1)),Ee={class:"blur-wp"},Pe={ref:"scrollRef",class:"scroll-wp"},Ae=["onClick"],Te=["src"],Be={class:"preview-screen-name"},Le={class:"preview-gif"},Se={class:"gif-wp"},je=["src"],Ne={class:"preview-create"},Ve={class:"create-dialog"},$e={key:0,class:"template-desc"},Oe=b(()=>s("p",{class:"name-title"},[s("span",{class:"required"},"*"),C("\u6570\u636E\u5927\u5C4F\u540D\u79F0 ")],-1)),ze=b(()=>s("p",{class:"name-title"},"\u5927\u5C4F\u5206\u7EC4",-1));function Re(e,o,c,u,r,d){const m=f("IconBack"),v=f("n-icon"),k=f("router-link"),I=f("IconPlus"),p=f("n-button"),F=f("g-loading"),E=f("new-input"),P=f("n-select"),A=f("n-modal"),y=f("IconArrowLeft"),S=f("IconArrowRight");return h(),g(D,null,[l(F,{type:"square",spinning:e.loading},{default:i(()=>[s("div",ae,[s("div",le,[ie,re,l(k,{to:"/",class:"return-btn"},{default:i(()=>[s("span",ce,[l(v,{class:"return-icon"},{default:i(()=>[l(m)]),_:1}),C(" \u53D6\u6D88\u521B\u5EFA ")])]),_:1})]),s("div",ue,[s("div",de,[s("div",pe,[s("div",me,[l(p,{type:"primary",focusable:!1,onClick:o[0]||(o[0]=t=>e.confirmCreate(null))},{icon:i(()=>[l(v,null,{default:i(()=>[l(I)]),_:1})]),default:i(()=>[C(" \u521B\u5EFA\u9879\u76EE ")]),_:1})]),fe]),(h(!0),g(D,null,B(e.templates,(t,T)=>(h(),g("div",{key:t.id,class:"template-item"},[s("div",ve,[s("img",{src:t.thumbnail,alt:"",class:"preview-image"},null,8,_e),s("div",we,[l(p,{type:"primary",focusable:!1,class:"create-btn",onClick:n=>e.confirmCreate(t)},{default:i(()=>[C(" \u521B\u5EFA\u9879\u76EE ")]),_:2},1032,["onClick"]),l(p,{class:"preview-btn",focusable:!1,onClick:n=>e.previewTemplate(t,T)},{default:i(()=>[C(" \u9884\u89C8 ")]),_:2},1032,["onClick"])])]),s("div",ge,[s("div",he,L(t.name),1),s("div",Ce,[(h(!0),g(D,null,B(t.size,(n,a)=>(h(),g("p",{key:a},L(n),1))),128))])])]))),128)),(h(),g(D,null,B(3,t=>s("div",{key:t,class:"template-item-placehoder"})),64))])])])]),_:1},8,["spinning"]),l(A,{show:e.visibleCreateDialog,"onUpdate:show":o[4]||(o[4]=t=>e.visibleCreateDialog=t),preset:"dialog","show-icon":!1,title:"\u521B\u5EFA\u6570\u636E\u5927\u5C4F",style:{width:"400px"}},{action:i(()=>[l(p,{focusable:!1,onClick:o[3]||(o[3]=t=>e.visibleCreateDialog=!1)},{default:i(()=>[C(" \u53D6\u6D88 ")]),_:1}),l(p,{type:"primary",focusable:!1,loading:e.saveLoading,onClick:e.doCreate},{default:i(()=>[C(" \u521B\u5EFA ")]),_:1},8,["loading","onClick"])]),default:i(()=>[s("div",ke,[be,l(E,{modelValue:e.projectName,"onUpdate:modelValue":o[1]||(o[1]=t=>e.projectName=t),placeholder:"\u8BF7\u8F93\u5165\u5927\u5C4F\u540D\u79F0",spellcheck:"false",class:"name-input"},null,8,["modelValue"]),Fe,l(P,{value:e.groupId,"onUpdate:value":o[2]||(o[2]=t=>e.groupId=t),options:e.groupOpts,size:"small"},null,8,["value","options"])])]),_:1},8,["show"]),l(A,{show:e.visiblePreviewDialog,"onUpdate:show":o[7]||(o[7]=t=>e.visiblePreviewDialog=t),preset:"dialog","show-icon":!1,title:"\u9884\u89C8",style:{width:"895px","padding-bottom":"0"}},{default:i(()=>[s("div",Ie,[s("div",ye,[De,s("div",Ee,[s("div",Pe,[(h(!0),g(D,null,B(e.templates,(t,T)=>(h(),g("div",{key:t.id,class:G(["preview-wp",{selected:t.id===e.template.id}]),onClick:n=>e.togglePreviewTemplate(t,T)},[s("img",{src:t.thumbnail,class:"preview-small-img"},null,8,Te),s("div",Be,L(t.name),1)],10,Ae))),128))],512)])]),s("div",Le,[s("div",Se,[s("img",{class:"snapshot-gif",src:e.template.snapshot},null,8,je),l(v,{class:"prev-icon",onClick:e.prevPreviewTemplate},{default:i(()=>[l(y)]),_:1},8,["onClick"]),l(v,{class:"next-icon",onClick:e.nextPreviewTemplate},{default:i(()=>[l(S)]),_:1},8,["onClick"])]),s("div",Ne,[s("div",Ve,[e.template.description?(h(),g("p",$e,L(e.template.description),1)):Q("",!0),Oe,l(E,{modelValue:e.projectName,"onUpdate:modelValue":o[5]||(o[5]=t=>e.projectName=t),placeholder:"\u8BF7\u8F93\u5165\u5927\u5C4F\u540D\u79F0",spellcheck:"false",class:"name-input"},null,8,["modelValue"]),ze,l(P,{value:e.groupId,"onUpdate:value":o[6]||(o[6]=t=>e.groupId=t),options:e.groupOpts,size:"small"},null,8,["value","options"])]),l(p,{type:"primary",size:"tiny",focusable:!1,"icon-placement":"right",loading:e.saveLoading,class:"preview-create-btn",onClick:e.doCreate},{icon:i(()=>[l(v,{class:"next-icon"},{default:i(()=>[l(S)]),_:1})]),default:i(()=>[C(" \u521B\u5EFA\u5927\u5C4F ")]),_:1},8,["loading","onClick"])])])])]),_:1},8,["show"])],64)}const Xe=Y(ne,[["render",Re],["__scopeId","data-v-437fbc42"]]);export{Xe as default};
