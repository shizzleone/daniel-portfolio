import{j as e}from"./iframe-BQeq8eLT.js";import{K as u}from"./widgets-DcHGr92-.js";import{m as l,a as f}from"./context-dQ0Z3AUU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BYojgdql.js";import"./index-BTtRTZVz.js";import"./icons-Cw1lNTgo.js";import"./registry-BYL4N8qi.js";import"./primitives-wPOARlFc.js";function v({measure:n,aggregation:i,prefix:c,precision:m,abbreviate:p,empty:g}){const d=l("kpi",{measure:n,aggregation:i,format:{prefix:c,precision:m,abbreviate:p,suffix:"",align:"left"}});return e.jsxs("main",{className:"story-stage",children:[e.jsx("h2",{children:"KPI"}),e.jsx("p",{className:"story-description",children:"Governed measure, aggregation, trend and number formatting."}),e.jsx("div",{style:{maxWidth:400,padding:24,border:"1px solid var(--border)"},children:e.jsx(u,{widget:d,rows:g?[]:f})})]})}const I={title:"Components/KPI",component:v,tags:["autodocs"],args:{measure:"revenue",aggregation:"sum",prefix:"$",precision:1,abbreviate:!0,empty:!1},argTypes:{measure:{control:"select",options:["revenue","profit","orders","customers","margin"]},aggregation:{control:"select",options:["sum","avg","count","min","max"]}}},r={},s={args:{measure:"orders",prefix:""}},a={args:{aggregation:"avg",abbreviate:!1,precision:2}},o={args:{abbreviate:!1,precision:2}},t={args:{empty:!0}},O=["Revenue","Orders","Average","FullPrecision","NoData"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    measure: 'orders',
    prefix: ''
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    aggregation: 'avg',
    abbreviate: false,
    precision: 2
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    abbreviate: false,
    precision: 2
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    empty: true
  }
}`,...t.parameters?.docs?.source}}};export{a as Average,o as FullPrecision,t as NoData,s as Orders,r as Revenue,O as __namedExportsOrder,I as default};
