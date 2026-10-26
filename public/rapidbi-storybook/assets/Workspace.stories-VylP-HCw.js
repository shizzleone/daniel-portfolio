import{d as n,C as c}from"./Workspace-ByPqEK8D.js";import{i as m}from"./context-BQyxeM8Z.js";import"./iframe-BxPDHca9.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-DNBEsqbp.js";import"./icons-O3LJ5nk1.js";import"./CanvasV2-4NYRkP0w.js";import"./index-CHmK8nHf.js";import"./Assistant-Bw7qiQOy.js";import"./registry-BSKzlidL.js";import"./FilterEditor-CqzAGPad.js";import"./WidgetSettings-FAu5Vt9D.js";import"./widgets-B6XhE1Ku.js";import"./index-CU_3h48h.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,O={title:"Screens/Canvas Workspace",component:c,tags:["autodocs"],args:{models:n,status:"ready",initialViews:[],onSave:i(),onRetry:i()}},r={},s={args:{initialViews:[m()]}},e={args:{status:"loading"}},a={args:{status:"error"}},o={args:{models:[]}},t={args:{initialViews:[{version:1,name:"Legacy report",widgets:[]}]}},h=["Default","WithInitialView","ModelsLoading","ModelsError","NoModels","AutoMigrateFromV1"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    initialViews: [initialSnapshot()]
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'loading'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    models: []
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    initialViews: [{
      version: 1,
      name: 'Legacy report',
      widgets: []
    }]
  }
}`,...t.parameters?.docs?.source}}};export{t as AutoMigrateFromV1,r as Default,a as ModelsError,e as ModelsLoading,o as NoModels,s as WithInitialView,h as __namedExportsOrder,O as default};
