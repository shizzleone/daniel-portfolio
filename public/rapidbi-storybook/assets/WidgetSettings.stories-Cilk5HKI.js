import{r as c,j as e}from"./iframe-BIBoYb_3.js";import{W as l}from"./WidgetSettings-DlEZj8aF.js";import{B as u}from"./primitives-BV6yJrff.js";import{m as y}from"./context-C2z6mL_X.js";import"./preload-helper-PPVm8Dsz.js";import"./icons-BgjLwcp4.js";import"./registry-DcJxAdRt.js";import"./FilterEditor-BlgiQbhd.js";import"./widgets-CLkg4Iz2.js";import"./index-CkT8kT-3.js";import"./index-B1FCJnwq.js";const{fn:f}=__STORYBOOK_MODULE_TEST__;function h({type:n,onSave:m}){const[i,d]=c.useState(()=>y(n)),[g,a]=c.useState(!1);return e.jsxs("main",{className:"story-stage",children:[e.jsx("h2",{children:"Widget settings"}),e.jsx("p",{className:"story-description",children:"Configure data, properties, and a live preview side by side. Apply your changes when ready."}),e.jsxs(u,{onClick:()=>a(!0),children:["Configure ",n]}),e.jsx("pre",{style:{marginTop:24,maxHeight:300,overflow:"auto"},children:JSON.stringify(i,null,2)}),e.jsx(l,{widget:g?i:null,onClose:()=>a(!1),onSave:p=>{d(p),a(!1),m(p)}})]})}const T={title:"Components/Widget Settings",component:h,tags:["autodocs"],args:{type:"grid",onSave:f()},argTypes:{type:{control:"select",options:["grid","chart","kpi","commentary"]}}},r={},t={args:{type:"chart"}},s={args:{type:"kpi"}},o={args:{type:"commentary"}},B=["Grid","Chart","KPI","Commentary"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};export{t as Chart,o as Commentary,r as Grid,s as KPI,B as __namedExportsOrder,T as default};
