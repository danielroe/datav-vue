import{U as e}from"./constants.0fbfcb4e.js";import{d as a,e as o,k as l,l as n,M as r,f as t,n as i,o as s,c as u,a as d,q as p,w as c}from"./index.3e4447e7.js";import{u as m,p as g,v as f,g as v}from"./qiniu.a3f0abd8.js";var y=a({name:"GUploadImage",props:{modelValue:{type:String,required:!0},allowType:{type:String,default:"gif|jpeg|jpg|png"},size:{type:Number,default:2},action:{type:String,default:m},previewHost:{type:String,default:g}},emits:[e],setup(a,t){const i=o(!1),s=o({key:"",token:""}),u=o(!1);return l((()=>a.modelValue),(()=>{const e=new Image;e.src=a.modelValue,e.onload=()=>{u.value=!1},e.onerror=()=>{u.value=!0,a.modelValue&&r.error("图片加载失败")}})),{loading:i,form:s,iserr:u,beforeUpload:async e=>{if(!f(e,{allowType:a.allowType,allowSize:a.size}))return!1;try{return i.value=!0,s.value.token=await v(),s.value.key=`upload/${n()}_${e.name}`,!0}catch(o){i.value=!1,r.error(o.toString())}return!1},onSuccess:o=>{i.value=!1,t.emit(e,`${a.previewHost}/${o.key}`)},onError:e=>{i.value=!1,r.error(e.toString())},handleInput:a=>{t.emit(e,a)}}}});const b={class:"g-upload"},k={key:1,class:"g-upload-tip"},w=d("i",{class:"v-icon-img"},null,-1),S=d("div",null,"点击或拖拽文件到这里更换",-1);y.render=function(e,a,o,l,n,r){const m=t("el-input"),g=t("el-upload"),f=i("loading");return s(),u("div",b,[d(m,{"model-value":e.modelValue,placeholder:"请输入图片地址","prefix-icon":"v-icon-link",size:"mini",clearable:"","onUpdate:modelValue":e.handleInput},null,8,["model-value","onUpdate:modelValue"]),p(d(g,{"element-loading-text":"正在上传...","element-loading-spinner":"v-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.7)",drag:"",accept:"image/*",action:e.action,multiple:!1,"show-file-list":!1,"before-upload":e.beforeUpload,"on-success":e.onSuccess,"on-error":e.onError,data:e.form},{default:c((()=>[e.modelValue&&!e.iserr?(s(),u("img",{key:0,src:e.modelValue},null,8,["src"])):(s(),u("div",k,[w,S]))])),_:1},8,["action","before-upload","on-success","on-error","data"]),[[f,e.loading]])])},y.install=e=>{e.component(y.name,y)};export default y;