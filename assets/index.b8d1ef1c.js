import{e as p,U as l,f as r,r as u,o as t,m as i,j as m,t as c,n as f,p as h}from"./App.5d51c89e.js";const b=p({name:"GSwitch",props:{modelValue:{type:Boolean,default:!1},label:{type:String,default:""},size:{type:String,default:"medium"},inline:{type:[Boolean,String],default:!1},disabled:Boolean},emits:[l],setup(e,a){return{handleInput:s=>{a.emit(l,s)}}}}),g={key:0,class:"g-input__caption"};function _(e,a,o,s,v,y){const d=u("n-switch");return t(),i("div",{class:h(["datav-gui g-switch",[{"--inline":!!e.inline,"--single":e.inline==="inline-single","--disabled":e.disabled}]])},[m(d,{value:e.modelValue,size:e.size,disabled:e.disabled,"onUpdate:value":e.handleInput},null,8,["value","size","disabled","onUpdate:value"]),e.label?(t(),i("span",g,c(e.label),1)):f("",!0)],2)}const n=r(b,[["render",_]]);n.install=e=>{e.component(n.name,n)};export{n as default};
