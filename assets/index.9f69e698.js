import{f as u,o,m as a,x as s,e as y,U as p,s as S,v as b,r as c,h as I,w as r,t as d,j as _,n as k,p as $,Q as A,P as B,B as C}from"./App.49df06d9.js";const E={},V={t:"1632580932028",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4229",width:"64",height:"64"},z=s("path",{d:"M512.3 201.8L719.72 392 812 307.4 512.3 32 212 307.4 304.94 392 512.3 201.8z m-0.6 620.4L304.28 632 212 716.6 511.7 992 812 716.6 719.06 632 511.7 822.2z","p-id":"4230"},null,-1),L=[z];function N(e,n){return o(),a("svg",V,L)}const D=u(E,[["render",N]]),U=y({name:"GSelectImage",components:{IconSelectArrow:D},props:{modelValue:{type:String,default:""},images:{type:Array,default:()=>[]},label:{type:String,default:""},inline:{type:[Boolean,String],default:!1},placement:{type:String,default:"left"}},emits:[p],setup(e,n){const i=S(!1),g=b(()=>e.images.find(l=>l.id===e.modelValue)||{id:"img-12138",name:"img-12138",src:"https://files.pengxiaotian.com/datav/custom-bg-border.png",border:{slice:"32 37 fill",width:"32px 37px",outset:"0",repeat:"no-repeat"}});return{visible:i,selectedImg:g,onSelectImg:l=>{i.value=!1,n.emit(p,l.id)}}}}),M={class:"datav-gui g-select-image"},P={class:"g-select-image-selection"},T={class:"g-select-image-selection__inner"},j={class:"g-select-image-selected-wrap"},F=["src"],G={class:"g-select-image-arrow"},O={key:0,class:"g-input__caption"},Q={class:"g-select-image-dropdown-menu-wrap"},q={class:"g-select-image-dropdown-menu"},H=["onClick"],J=["src"],K={key:1,class:"g-select-image-dropdown-menu-item --empty"},R=s("span",null,"\u5217\u8868\u4E3A\u7A7A",-1),W=[R];function X(e,n,i,g,h,l){const v=c("IconSelectArrow"),f=c("n-icon"),w=c("n-popover");return o(),I(w,{show:e.visible,"onUpdate:show":n[0]||(n[0]=t=>e.visible=t),placement:e.placement,trigger:"click",width:188,"show-arrow":!1,class:"g-select-image-popover",style:C({"--n-color":"var(--datav-gui-bgcolor-back)"})},{trigger:r(()=>[s("div",{class:$(["datav-gui g-select-image-wrap",[{"--inline --single":!!e.inline}]])},[s("div",M,[s("div",P,[s("div",T,[s("div",j,[s("img",{src:e.selectedImg.preview||e.selectedImg.src,class:"g-select-image-img"},null,8,F),s("span",null,d(e.selectedImg.name),1)])]),s("span",G,[_(f,{color:"var(--datav-gui-font-color-base)"},{default:r(()=>[_(v)]),_:1})])])]),e.label?(o(),a("span",O,d(e.label),1)):k("",!0)],2)]),default:r(()=>[s("div",Q,[s("ul",q,[e.images&&e.images.length>0?(o(!0),a(B,{key:0},A(e.images,t=>(o(),a("li",{key:t.id,class:"g-select-image-dropdown-menu-item",onClick:Y=>e.onSelectImg(t)},[s("img",{src:t.preview||t.src,class:"g-select-image-img"},null,8,J),s("span",null,d(t.name),1)],8,H))),128)):(o(),a("li",K,W))])])]),_:1},8,["show","placement","style"])}const m=u(U,[["render",X]]);m.install=e=>{e.component(m.name,m)};export{m as default};