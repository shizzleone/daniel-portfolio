import{r as m,j as l}from"./iframe-CkprDsVp.js";import{T as d}from"./Workspace-BN-ERL_E.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-BuM4Gz1h.js";import"./icons-DsOTsNTC.js";import"./CanvasV2-zsFKZXTG.js";import"./context-CbzXGQdq.js";import"./index-BH2JVck6.js";import"./Assistant-CtnlWQDx.js";import"./registry-COFSqyvW.js";import"./FilterEditor-CQ23glwB.js";import"./WidgetSettings-DwclMUEt.js";import"./widgets-CXEz6yC6.js";import"./index-DeFBh-Fs.js";function g({count:c}){const[p,i]=m.useState(Array.from({length:c},(s,r)=>({id:String(r),name:`Report ${r+1}`}))),[a,n]=m.useState("home");return l.jsx(d,{tabs:p,active:a,onSelect:n,onClose:s=>{i(r=>r.filter(u=>u.id!==s)),a===s&&n("home")}})}const H={title:"Screens/Tabstrip",component:g,tags:["autodocs"],args:{count:3}},t={args:{count:0}},e={},o={args:{count:20}},R=["HomeOnly","MultipleTabs","ManyTabs"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    count: 0
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    count: 20
  }
}`,...o.parameters?.docs?.source}}};export{t as HomeOnly,o as ManyTabs,e as MultipleTabs,R as __namedExportsOrder,H as default};
