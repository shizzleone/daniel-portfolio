import{r as m,j as l}from"./iframe-D9kFk9mN.js";import{T as d}from"./Workspace-jcB65B1Z.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-C7sXfPd-.js";import"./icons-B2SzldBZ.js";import"./CanvasV2-BgiEBCoj.js";import"./context-DJg1u6v8.js";import"./index-C36oxPrb.js";import"./Assistant-DrStqlsA.js";import"./registry-jch_rgB7.js";import"./FilterEditor-B1QgZyL3.js";import"./WidgetSettings-3inarM61.js";import"./widgets-BjxNB7su.js";import"./index-CIYw2dcl.js";function g({count:c}){const[p,i]=m.useState(Array.from({length:c},(s,r)=>({id:String(r),name:`Report ${r+1}`}))),[a,n]=m.useState("home");return l.jsx(d,{tabs:p,active:a,onSelect:n,onClose:s=>{i(r=>r.filter(u=>u.id!==s)),a===s&&n("home")}})}const H={title:"Screens/Tabstrip",component:g,tags:["autodocs"],args:{count:3}},t={args:{count:0}},e={},o={args:{count:20}},R=["HomeOnly","MultipleTabs","ManyTabs"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    count: 0
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    count: 20
  }
}`,...o.parameters?.docs?.source}}};export{t as HomeOnly,o as ManyTabs,e as MultipleTabs,R as __namedExportsOrder,H as default};
