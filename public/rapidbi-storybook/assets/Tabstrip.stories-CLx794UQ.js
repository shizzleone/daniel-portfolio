import{r as p,j as l}from"./iframe--_k5KNLb.js";import{T as d}from"./Workspace-DFcu4pJW.js";import"./preload-helper-PPVm8Dsz.js";import"./CanvasV2-BaZTxqhz.js";import"./primitives-Bd1_-liV.js";import"./Option-CVltArud.js";import"./Switch-XczNmwRq.js";import"./index-C1N_ynMI.js";import"./index-CkoKM40F.js";import"./context-CWY0lBqE.js";import"./Visible-Cx233rT1.js";import"./Assistant-xu0HdMcl.js";import"./registry-uSR7LsGo.js";import"./FilterEditor-BdfWwR-Z.js";import"./WidgetSettings-cGL58KLx.js";import"./widgets-eJ_THapC.js";import"./TabTrigger-Cgni7mzk.js";import"./StackLayout-CHTwAaRb.js";function g({count:n}){const[c,i]=p.useState(Array.from({length:n},(s,r)=>({id:String(r),name:`Report ${r+1}`}))),[a,m]=p.useState("home");return l.jsx(d,{tabs:c,active:a,onSelect:m,onClose:s=>{i(r=>r.filter(u=>u.id!==s)),a===s&&m("home")}})}const k={title:"Screens/Tabstrip",component:g,tags:["autodocs"],args:{count:3}},t={args:{count:0}},o={},e={args:{count:20}},q=["HomeOnly","MultipleTabs","ManyTabs"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    count: 0
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    count: 20
  }
}`,...e.parameters?.docs?.source}}};export{t as HomeOnly,e as ManyTabs,o as MultipleTabs,q as __namedExportsOrder,k as default};
