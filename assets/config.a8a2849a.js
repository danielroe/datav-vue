import{brushTypes as S,bubbleTypes as B}from"./index.dfeb990b.js";import{e as F,aH as U,aq as d,o as i,f,j as l,w as o,k as u,L as E,O as x,K as T,t as k}from"./App.c8de2d3d.js";const A={class:"setting-panel-gui"},w=F({__name:"config",props:{com:null},setup(r){const t=U(r.com,"config"),_=()=>({bubbleType:"1",bubbleKey:"circle",fillColor:"rgba(198, 236, 238, 1)"});return(D,a)=>{const b=d("n-radio"),y=d("n-radio-group"),n=d("g-field"),g=d("g-slider-range"),s=d("g-slider"),V=d("g-select-image"),p=d("g-field-collapse"),c=d("g-input"),C=d("g-select-shape"),v=d("g-color-picker");return i(),f("div",A,[l(p,{label:"\u9ED8\u8BA4\u6837\u5F0F"},{default:o(()=>[l(n,{level:2,label:"\u52A8\u753B\u6548\u679C"},{default:o(()=>[l(y,{value:u(t).defaultStyle.effectType,"onUpdate:value":a[0]||(a[0]=e=>u(t).defaultStyle.effectType=e),size:"small"},{default:o(()=>[(i(),f(E,null,x([{key:"ripple",value:"\u6D9F\u6F2A\u52A8\u6548"}],e=>l(b,{key:e.key,value:e.key},{default:o(()=>[T(k(e.value),1)]),_:2},1032,["value"])),64))]),_:1},8,["value"])]),_:1}),l(n,{level:2,label:"\u6C14\u6CE1\u5927\u5C0F"},{default:o(()=>[l(g,{modelValue:u(t).defaultStyle.sizeRange,"onUpdate:modelValue":a[1]||(a[1]=e=>u(t).defaultStyle.sizeRange=e),min:0,max:100,step:1},null,8,["modelValue"])]),_:1}),l(n,{level:2,label:"\u547C\u5438\u8303\u56F4"},{default:o(()=>[l(s,{modelValue:u(t).defaultStyle.offset,"onUpdate:modelValue":a[2]||(a[2]=e=>u(t).defaultStyle.offset=e),min:0,max:20,step:1},null,8,["modelValue"])]),_:1}),l(n,{level:2,label:"\u900F\u660E\u5EA6"},{default:o(()=>[l(s,{modelValue:u(t).defaultStyle.opacity,"onUpdate:modelValue":a[3]||(a[3]=e=>u(t).defaultStyle.opacity=e),min:0,max:1,step:.1},null,8,["modelValue","step"])]),_:1}),l(n,{level:2,label:"\u52A8\u753B\u65F6\u957F"},{default:o(()=>[l(s,{modelValue:u(t).defaultStyle.period,"onUpdate:modelValue":a[4]||(a[4]=e=>u(t).defaultStyle.period=e),min:.1,max:10,step:.1,suffix:"s"},null,8,["modelValue","min","step"])]),_:1}),l(n,{level:2,label:"\u6CE2\u7EB9\u6570\u91CF"},{default:o(()=>[l(s,{modelValue:u(t).defaultStyle.number,"onUpdate:modelValue":a[5]||(a[5]=e=>u(t).defaultStyle.number=e),min:1,max:10,step:1},null,8,["modelValue"])]),_:1}),l(n,{level:2,label:"\u7ED8\u5236\u65B9\u5F0F"},{default:o(()=>[l(V,{modelValue:u(t).defaultStyle.brushType,"onUpdate:modelValue":a[6]||(a[6]=e=>u(t).defaultStyle.brushType=e),images:u(S)},null,8,["modelValue","images"])]),_:1})]),_:1}),l(p,{label:"\u6C14\u6CE1\u7C7B\u578B",mode:"layout","default-layout":"horizontal",features:["vertical","horizontal","copy","add","remove"],list:u(t).typeSeries,min:1,max:10,tab:"\u7C7B\u578B","add-item":_},{default:o(e=>[l(n,{level:2,label:"\u7C7B\u578B\u8FC7\u6EE4\u503C"},{default:o(()=>[l(c,{modelValue:e.item.bubbleType,"onUpdate:modelValue":m=>e.item.bubbleType=m},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(n,{level:2,label:"\u6C14\u6CE1\u7C7B\u578B"},{default:o(()=>[l(C,{modelValue:e.item.bubbleKey,"onUpdate:modelValue":m=>e.item.bubbleKey=m,shapes:u(B)},null,8,["modelValue","onUpdate:modelValue","shapes"])]),_:2},1024),l(n,{level:2,label:"\u586B\u5145\u989C\u8272"},{default:o(()=>[l(v,{modelValue:e.item.fillColor,"onUpdate:modelValue":m=>e.item.fillColor=m},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1},8,["list"])])}}});export{w as default};