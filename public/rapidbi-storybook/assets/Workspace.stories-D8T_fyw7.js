import{d as n,C as c}from"./Workspace-CVezbyPk.js";import{i as m}from"./context-Dth3pz9V.js";import"./iframe-CpFlqu88.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-B0M8lznC.js";import"./icons-D3675qPu.js";import"./CanvasV2-B0Sv22Kn.js";import"./index-CekKI8AT.js";import"./Assistant-D0ZWdoOf.js";import"./registry-BVtnL9vE.js";import"./FilterEditor-Cls_olkm.js";import"./WidgetSettings-DFzPaOlP.js";import"./widgets-DtGoydN5.js";import"./index-Cl_WvlI_.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,O={title:"Screens/Canvas Workspace",component:c,tags:["autodocs"],args:{models:n,status:"ready",initialViews:[],onSave:i(),onRetry:i()}},r={},s={args:{initialViews:[m()]}},e={args:{status:"loading"}},a={args:{status:"error"}},o={args:{models:[]}},t={args:{initialViews:[{version:1,name:"Legacy report",widgets:[]}]}},h=["Default","WithInitialView","ModelsLoading","ModelsError","NoModels","AutoMigrateFromV1"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
