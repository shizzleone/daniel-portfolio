import{r as m,j as l}from"./iframe-dLOVGGP0.js";import{T as d}from"./Workspace-BkOhMbmY.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-DY5zTx-Y.js";import"./icons-NBmqPU-d.js";import"./CanvasV2-C9Afct2F.js";import"./context-vOTQpr3y.js";import"./index-CnZPMxzX.js";import"./Assistant-BRvfRXx3.js";import"./registry-DKf4ZMpU.js";import"./FilterEditor-BlE-POIa.js";import"./WidgetSettings-h0uYs7sJ.js";import"./widgets-BUAy8x5y.js";import"./index-D0rb0-TT.js";function g({count:c}){const[p,i]=m.useState(Array.from({length:c},(s,r)=>({id:String(r),name:`Report ${r+1}`}))),[a,n]=m.useState("home");return l.jsx(d,{tabs:p,active:a,onSelect:n,onClose:s=>{i(r=>r.filter(u=>u.id!==s)),a===s&&n("home")}})}const H={title:"Screens/Tabstrip",component:g,tags:["autodocs"],args:{count:3}},t={args:{count:0}},e={},o={args:{count:20}},R=["HomeOnly","MultipleTabs","ManyTabs"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    count: 0
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    count: 20
  }
}`,...o.parameters?.docs?.source}}};export{t as HomeOnly,o as ManyTabs,e as MultipleTabs,R as __namedExportsOrder,H as default};
