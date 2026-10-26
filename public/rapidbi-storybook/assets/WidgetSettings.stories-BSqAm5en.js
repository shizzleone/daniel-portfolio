import{r as c,j as e}from"./iframe-BxPDHca9.js";import{W as l}from"./WidgetSettings-FAu5Vt9D.js";import{B as u}from"./primitives-DNBEsqbp.js";import{m as y}from"./context-BQyxeM8Z.js";import"./preload-helper-PPVm8Dsz.js";import"./icons-O3LJ5nk1.js";import"./registry-BSKzlidL.js";import"./FilterEditor-CqzAGPad.js";import"./widgets-B6XhE1Ku.js";import"./index-CU_3h48h.js";import"./index-CHmK8nHf.js";const{fn:f}=__STORYBOOK_MODULE_TEST__;function h({type:n,onSave:m}){const[i,d]=c.useState(()=>y(n)),[g,a]=c.useState(!1);return e.jsxs("main",{className:"story-stage",children:[e.jsx("h2",{children:"Widget settings"}),e.jsx("p",{className:"story-description",children:"Configure data, properties, and a live preview side by side. Apply your changes when ready."}),e.jsxs(u,{onClick:()=>a(!0),children:["Configure ",n]}),e.jsx("pre",{style:{marginTop:24,maxHeight:300,overflow:"auto"},children:JSON.stringify(i,null,2)}),e.jsx(l,{widget:g?i:null,onClose:()=>a(!1),onSave:p=>{d(p),a(!1),m(p)}})]})}const T={title:"Components/Widget Settings",component:h,tags:["autodocs"],args:{type:"grid",onSave:f()},argTypes:{type:{control:"select",options:["grid","chart","kpi","commentary"]}}},r={},t={args:{type:"chart"}},s={args:{type:"kpi"}},o={args:{type:"commentary"}},B=["Grid","Chart","KPI","Commentary"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
