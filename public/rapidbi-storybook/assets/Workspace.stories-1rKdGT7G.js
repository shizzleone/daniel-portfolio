import{d as n,C as c}from"./Workspace-Ds65Qgtf.js";import{i as m}from"./context-C2z6mL_X.js";import"./iframe-BIBoYb_3.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-BV6yJrff.js";import"./icons-BgjLwcp4.js";import"./CanvasV2-MlPgMf0m.js";import"./index-B1FCJnwq.js";import"./Assistant-Bqve2ul6.js";import"./registry-DcJxAdRt.js";import"./FilterEditor-BlgiQbhd.js";import"./WidgetSettings-DlEZj8aF.js";import"./widgets-CLkg4Iz2.js";import"./index-CkT8kT-3.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,O={title:"Screens/Canvas Workspace",component:c,tags:["autodocs"],args:{models:n,status:"ready",initialViews:[],onSave:i(),onRetry:i()}},r={},s={args:{initialViews:[m()]}},e={args:{status:"loading"}},a={args:{status:"error"}},o={args:{models:[]}},t={args:{initialViews:[{version:1,name:"Legacy report",widgets:[]}]}},h=["Default","WithInitialView","ModelsLoading","ModelsError","NoModels","AutoMigrateFromV1"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
