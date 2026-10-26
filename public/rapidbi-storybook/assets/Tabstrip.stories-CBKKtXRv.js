import{r as m,j as l}from"./iframe-BtT8v69K.js";import{T as d}from"./Workspace-DeDRvriL.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-DfGi6g6D.js";import"./icons-tp0UIQDv.js";import"./CanvasV2-DYkirlr1.js";import"./context-qZF1p7EC.js";import"./index-B7bJVgLL.js";import"./Assistant-DPA_OQOq.js";import"./registry-CG43jjGR.js";import"./FilterEditor-mt_mEC8b.js";import"./WidgetSettings-D6O1QHxW.js";import"./widgets-9nUldrr4.js";import"./index-DN6EsIPo.js";function g({count:c}){const[p,i]=m.useState(Array.from({length:c},(s,r)=>({id:String(r),name:`Report ${r+1}`}))),[a,n]=m.useState("home");return l.jsx(d,{tabs:p,active:a,onSelect:n,onClose:s=>{i(r=>r.filter(u=>u.id!==s)),a===s&&n("home")}})}const H={title:"Screens/Tabstrip",component:g,tags:["autodocs"],args:{count:3}},t={args:{count:0}},e={},o={args:{count:20}},R=["HomeOnly","MultipleTabs","ManyTabs"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    count: 0
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    count: 20
  }
}`,...o.parameters?.docs?.source}}};export{t as HomeOnly,o as ManyTabs,e as MultipleTabs,R as __namedExportsOrder,H as default};
