import{d as j,N as D,ab as O,s as d,v as T,h as F,o as a,c as l,F as U,r as c,e as t,j as _,a6 as P,ac as E,M as I,k as M,b as v,a0 as q,ad as G,n as H,R as J}from"./framework.Cl0F8C7r.js";import{_ as h}from"./Icon.vue_vue_type_script_setup_true_lang.iVjQ8fzI.js";const ae=Symbol("FormContextKey"),L=Symbol("FormItemContextKey"),Q={key:0,class:"sk-input__prepend"},W={class:"sk-input__wrapper"},X={key:0,class:"sk-input__prefix"},Y=["type","disabled","readonly","autocomplete","placeholder","autofocus","form"],Z={key:1,class:"sk-input__append"},x=["disabled","readonly","autocomplete","placeholder","autofocus","form"],oe=j({name:"SkInput",inheritAttrs:!1,__name:"Input",props:{type:{default:"text"},modelValue:{},size:{},disabled:{type:Boolean},clearable:{type:Boolean},showPassword:{type:Boolean},placeholder:{},readonly:{type:Boolean},autocomplete:{default:"off"},autofocus:{type:Boolean},form:{}},emits:["update:modelValue","input","change","focus","blur","clear"],setup(z,{expose:K,emit:N}){const f=D(L);function m(e){f==null||f.validate(e).catch(u=>{console.error(u.errors)})}const n=z,o=N,b=O(),s=d(n.modelValue);T(()=>n.modelValue,e=>{s.value=e});const p=d(!1),r=d(!1),i=d(),w=F(()=>n.clearable&&!n.disabled&&!!s.value&&p.value),y=F(()=>n.showPassword&&!n.disabled&&!!s.value),$=()=>{r.value=!r.value},R=()=>{},S=async()=>{await J(),i.value.focus()},C=()=>{o("update:modelValue",s.value),o("input",s.value),m("input")},V=()=>{o("change",s.value),m("change")},B=e=>{p.value=!0,o("focus",e)},g=e=>{p.value=!1,o("blur",e),m("blur")},A=()=>{s.value="",o("update:modelValue",""),o("clear"),o("input",""),o("change","")};return K({ref:i}),(e,u)=>(a(),l("div",{class:H(["sk-input",{[`sk-input--${e.type}`]:e.type,[`sk-input--${e.size}`]:e.size,"is-disabled":e.disabled,"is-prepend":e.$slots.prepend,"is-append":e.$slots.append,"is-prefix":e.$slots.prefix,"is-suffix":e.$slots.suffix,"is-focus":p.value}])},[e.type!=="textarea"?(a(),l(U,{key:0},[e.$slots.prepend?(a(),l("div",Q,[c(e.$slots,"prepend")])):t("",!0),_("div",W,[e.$slots.prefix?(a(),l("span",X,[c(e.$slots,"prefix")])):t("",!0),P(_("input",I({class:"sk-input__inner",type:e.showPassword?r.value?"text":"password":e.type,ref_key:"inputRef",ref:i},M(b),{disabled:e.disabled,readonly:e.readonly,autocomplete:e.autocomplete,placeholder:e.placeholder,autofocus:e.autofocus,form:e.form,"onUpdate:modelValue":u[0]||(u[0]=k=>s.value=k),onInput:C,onChange:V,onFocus:B,onBlur:g}),null,16,Y),[[E,s.value]]),e.$slots.suffix||w.value||y.value?(a(),l("span",{key:1,class:"sk-input__suffix",onClick:S},[c(e.$slots,"suffix"),w.value?(a(),v(h,{key:0,icon:"circle-xmark",class:"sk-input__clear",onClick:A,onMousedown:q(R,["prevent"])})):t("",!0),y.value&&r.value?(a(),v(h,{key:1,icon:"eye",class:"sk-input__password",onClick:$})):t("",!0),y.value&&!r.value?(a(),v(h,{key:2,icon:"eye-slash",class:"sk-input__password",onClick:$})):t("",!0)])):t("",!0)]),e.$slots.append?(a(),l("div",Z,[c(e.$slots,"append")])):t("",!0)],64)):P((a(),l("textarea",I({key:1,class:"sk-textarea__wrapper"},M(b),{ref_key:"inputRef",ref:i,disabled:e.disabled,readonly:e.readonly,autocomplete:e.autocomplete,placeholder:e.placeholder,autofocus:e.autofocus,form:e.form,"onUpdate:modelValue":u[1]||(u[1]=k=>s.value=k),onInput:C,onChange:V,onFocus:B,onBlur:g}),null,16,x)),[[G,s.value]])],2))}});export{oe as _,L as a,ae as f};
