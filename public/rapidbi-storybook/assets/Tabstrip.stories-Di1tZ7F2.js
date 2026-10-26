import{r as m,j as l}from"./iframe-DyAVkdgV.js";import{T as d}from"./Workspace-D4zXUkGH.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-lfyimW_X.js";import"./icons-D98REG39.js";import"./CanvasV2-l5-cwF1J.js";import"./context-BimX_QIN.js";import"./index-JsZjLEFD.js";import"./Assistant-DuPXa-IU.js";import"./registry-BHuuQw2I.js";import"./FilterEditor-CxG-627k.js";import"./WidgetSettings-lxy5Lk0w.js";import"./widgets-t3lla1I3.js";import"./index-BXXmrc0Z.js";function g({count:c}){const[p,i]=m.useState(Array.from({length:c},(s,r)=>({id:String(r),name:`Report ${r+1}`}))),[a,n]=m.useState("home");return l.jsx(d,{tabs:p,active:a,onSelect:n,onClose:s=>{i(r=>r.filter(u=>u.id!==s)),a===s&&n("home")}})}const H={title:"Screens/Tabstrip",component:g,tags:["autodocs"],args:{count:3}},t={args:{count:0}},e={},o={args:{count:20}},R=["HomeOnly","MultipleTabs","ManyTabs"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    count: 0
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    count: 20
  }
}`,...o.parameters?.docs?.source}}};export{t as HomeOnly,o as ManyTabs,e as MultipleTabs,R as __namedExportsOrder,H as default};
