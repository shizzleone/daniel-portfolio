import{r as m,j as l}from"./iframe-BIBoYb_3.js";import{T as d}from"./Workspace-Ds65Qgtf.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-BV6yJrff.js";import"./icons-BgjLwcp4.js";import"./CanvasV2-MlPgMf0m.js";import"./context-C2z6mL_X.js";import"./index-B1FCJnwq.js";import"./Assistant-Bqve2ul6.js";import"./registry-DcJxAdRt.js";import"./FilterEditor-BlgiQbhd.js";import"./WidgetSettings-DlEZj8aF.js";import"./widgets-CLkg4Iz2.js";import"./index-CkT8kT-3.js";function g({count:c}){const[p,i]=m.useState(Array.from({length:c},(s,r)=>({id:String(r),name:`Report ${r+1}`}))),[a,n]=m.useState("home");return l.jsx(d,{tabs:p,active:a,onSelect:n,onClose:s=>{i(r=>r.filter(u=>u.id!==s)),a===s&&n("home")}})}const H={title:"Screens/Tabstrip",component:g,tags:["autodocs"],args:{count:3}},t={args:{count:0}},e={},o={args:{count:20}},R=["HomeOnly","MultipleTabs","ManyTabs"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    count: 0
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    count: 20
  }
}`,...o.parameters?.docs?.source}}};export{t as HomeOnly,o as ManyTabs,e as MultipleTabs,R as __namedExportsOrder,H as default};
