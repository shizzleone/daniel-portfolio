import{d as n,C as c}from"./Workspace-BkOhMbmY.js";import{i as m}from"./context-vOTQpr3y.js";import"./iframe-dLOVGGP0.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-DY5zTx-Y.js";import"./icons-NBmqPU-d.js";import"./CanvasV2-C9Afct2F.js";import"./index-CnZPMxzX.js";import"./Assistant-BRvfRXx3.js";import"./registry-DKf4ZMpU.js";import"./FilterEditor-BlE-POIa.js";import"./WidgetSettings-h0uYs7sJ.js";import"./widgets-BUAy8x5y.js";import"./index-D0rb0-TT.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,O={title:"Screens/Canvas Workspace",component:c,tags:["autodocs"],args:{models:n,status:"ready",initialViews:[],onSave:i(),onRetry:i()}},r={},s={args:{initialViews:[m()]}},e={args:{status:"loading"}},a={args:{status:"error"}},o={args:{models:[]}},t={args:{initialViews:[{version:1,name:"Legacy report",widgets:[]}]}},h=["Default","WithInitialView","ModelsLoading","ModelsError","NoModels","AutoMigrateFromV1"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
