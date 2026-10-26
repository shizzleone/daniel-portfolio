import{r as p,j as e}from"./iframe--_k5KNLb.js";import{W as l}from"./WidgetSettings-cGL58KLx.js";import{B as u}from"./primitives-Bd1_-liV.js";import{m as y}from"./context-CWY0lBqE.js";import"./preload-helper-PPVm8Dsz.js";import"./registry-uSR7LsGo.js";import"./FilterEditor-BdfWwR-Z.js";import"./Option-CVltArud.js";import"./Switch-XczNmwRq.js";import"./index-C1N_ynMI.js";import"./index-CkoKM40F.js";import"./Visible-Cx233rT1.js";const{fn:f}=__STORYBOOK_MODULE_TEST__;function h({type:a,onSave:m}){const[i,d]=p.useState(()=>y(a)),[g,n]=p.useState(!1);return e.jsxs("main",{className:"story-stage",children:[e.jsx("h2",{children:"Widget settings"}),e.jsx("p",{className:"story-description",children:"Data, Display, Filters and Advanced. Apply changes to inspect the saved configuration below and in Actions."}),e.jsxs(u,{onClick:()=>n(!0),children:["Configure ",a]}),e.jsx("pre",{style:{marginTop:24,maxHeight:300,overflow:"auto"},children:JSON.stringify(i,null,2)}),e.jsx(l,{widget:g?{...i,type:a}:null,onClose:()=>n(!1),onSave:c=>{d(c),n(!1),m(c)}})]})}const A={title:"Components/Widget Settings",component:h,tags:["autodocs"],args:{type:"grid",onSave:f()},argTypes:{type:{control:"select",options:["grid","chart","kpi","commentary"]}}},r={},t={args:{type:"chart"}},s={args:{type:"kpi"}},o={args:{type:"commentary"}},B=["Grid","Chart","KPI","Commentary"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'chart'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'kpi'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'commentary'
  }
}`,...o.parameters?.docs?.source}}};export{t as Chart,o as Commentary,r as Grid,s as KPI,B as __namedExportsOrder,A as default};
