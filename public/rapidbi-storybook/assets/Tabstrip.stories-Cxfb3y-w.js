import{r as m,j as l}from"./iframe-PLjEZGt8.js";import{T as d}from"./Workspace-CatThIQE.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-nbSsO2SR.js";import"./icons-D0V7VBUY.js";import"./CanvasV2-B3oezDbP.js";import"./context-DUVC-CJ9.js";import"./index-iAlirh5j.js";import"./Assistant-CuZJ-Y5u.js";import"./registry-D8nTvL5N.js";import"./FilterEditor-By2_1OHo.js";import"./WidgetSettings-CCyGPQtp.js";import"./widgets-CIUztAan.js";import"./index-DA425f6R.js";function g({count:c}){const[p,i]=m.useState(Array.from({length:c},(s,r)=>({id:String(r),name:`Report ${r+1}`}))),[a,n]=m.useState("home");return l.jsx(d,{tabs:p,active:a,onSelect:n,onClose:s=>{i(r=>r.filter(u=>u.id!==s)),a===s&&n("home")}})}const H={title:"Screens/Tabstrip",component:g,tags:["autodocs"],args:{count:3}},t={args:{count:0}},e={},o={args:{count:20}},R=["HomeOnly","MultipleTabs","ManyTabs"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    count: 0
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    count: 20
  }
}`,...o.parameters?.docs?.source}}};export{t as HomeOnly,o as ManyTabs,e as MultipleTabs,R as __namedExportsOrder,H as default};
