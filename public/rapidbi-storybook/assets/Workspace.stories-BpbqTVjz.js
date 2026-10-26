import{d as n,C as c}from"./Workspace-D4zXUkGH.js";import{i as m}from"./context-BimX_QIN.js";import"./iframe-DyAVkdgV.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-lfyimW_X.js";import"./icons-D98REG39.js";import"./CanvasV2-l5-cwF1J.js";import"./index-JsZjLEFD.js";import"./Assistant-DuPXa-IU.js";import"./registry-BHuuQw2I.js";import"./FilterEditor-CxG-627k.js";import"./WidgetSettings-lxy5Lk0w.js";import"./widgets-t3lla1I3.js";import"./index-BXXmrc0Z.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,O={title:"Screens/Canvas Workspace",component:c,tags:["autodocs"],args:{models:n,status:"ready",initialViews:[],onSave:i(),onRetry:i()}},r={},s={args:{initialViews:[m()]}},e={args:{status:"loading"}},a={args:{status:"error"}},o={args:{models:[]}},t={args:{initialViews:[{version:1,name:"Legacy report",widgets:[]}]}},h=["Default","WithInitialView","ModelsLoading","ModelsError","NoModels","AutoMigrateFromV1"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
