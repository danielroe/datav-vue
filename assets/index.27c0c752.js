import{e as r,U as t,s as u,f as m,r as c,o,m as i,j as f,t as b,n as g,p as v}from"./App.5d51c89e.js";const y=r({name:"GSelect",props:{modelValue:{type:[String,Number],default:0},data:{type:Array,default:()=>[]},label:{type:String,default:""},size:{type:String,default:"small"},inline:{type:[Boolean,String],default:!1},disabled:Boolean},emits:[t],setup(e,l){const s=a=>{l.emit(t,a)};return{opts:u(e.data.map(a=>({label:a.value,value:a.id}))),handleInput:s}}}),S={key:0,class:"g-input__caption"};function _(e,l,s,d,a,z){const p=c("n-select");return o(),i("div",{class:v(["datav-gui g-select",[{"--inline":!!e.inline,"--single":e.inline==="inline-single","--disabled":e.disabled}]])},[f(p,{value:e.modelValue,options:e.opts,size:e.size,disabled:e.disabled,"onUpdate:value":e.handleInput},null,8,["value","options","size","disabled","onUpdate:value"]),e.label?(o(),i("span",S,b(e.label),1)):g("",!0)],2)}const n=m(y,[["render",_]]);n.install=e=>{e.component(n.name,n)};export{n as default};
