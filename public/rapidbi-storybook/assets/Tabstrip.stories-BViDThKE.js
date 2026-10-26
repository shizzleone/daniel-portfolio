import{r as m,j as l}from"./iframe-BQeq8eLT.js";import{T as d}from"./Workspace-C-QTzLYU.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-wPOARlFc.js";import"./icons-Cw1lNTgo.js";import"./CanvasV2-D-xhYM90.js";import"./context-dQ0Z3AUU.js";import"./index-BTtRTZVz.js";import"./Assistant-CuLEfPe_.js";import"./registry-BYL4N8qi.js";import"./FilterEditor-C8l9Ok7n.js";import"./WidgetSettings-CGB4iiR8.js";import"./widgets-DcHGr92-.js";import"./index-BYojgdql.js";function g({count:c}){const[p,i]=m.useState(Array.from({length:c},(s,r)=>({id:String(r),name:`Report ${r+1}`}))),[a,n]=m.useState("home");return l.jsx(d,{tabs:p,active:a,onSelect:n,onClose:s=>{i(r=>r.filter(u=>u.id!==s)),a===s&&n("home")}})}const H={title:"Screens/Tabstrip",component:g,tags:["autodocs"],args:{count:3}},t={args:{count:0}},e={},o={args:{count:20}},R=["HomeOnly","MultipleTabs","ManyTabs"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    count: 0
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    count: 20
  }
}`,...o.parameters?.docs?.source}}};export{t as HomeOnly,o as ManyTabs,e as MultipleTabs,R as __namedExportsOrder,H as default};
