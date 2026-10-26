import{C as r}from"./CanvasV2-zsFKZXTG.js";import{i}from"./context-CbzXGQdq.js";import"./iframe-CkprDsVp.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-BuM4Gz1h.js";import"./index-BH2JVck6.js";import"./icons-DsOTsNTC.js";import"./Assistant-CtnlWQDx.js";import"./registry-COFSqyvW.js";import"./FilterEditor-CQ23glwB.js";import"./WidgetSettings-DwclMUEt.js";import"./widgets-CXEz6yC6.js";import"./index-DeFBh-Fs.js";const{userEvent:n,within:o}=__STORYBOOK_MODULE_TEST__,O={title:"Components/Guided Tours",component:r,tags:["autodocs"],args:{snapshot:i(),embedded:!1},parameters:{docs:{description:{component:"Open help for Canvas overview, Chart settings, Grid settings and KPI settings. Tour topic, next, previous and skip controls are available in the dialog."}}}},e={play:async({canvasElement:t})=>{await n.click(o(t).getByRole("button",{name:"Help and shortcuts"}))}},a={play:async({canvasElement:t})=>{const s=o(t);await n.click(s.getByRole("button",{name:"Canvas tools"})),await n.click(o(t.ownerDocument.body).getByRole("menuitem",{name:"Keyboard shortcuts"}))}},_=["Overview","KeyboardShortcuts"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole('button', {
      name: 'Help and shortcuts'
    }));
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Canvas tools'
    }));
    await userEvent.click(within(canvasElement.ownerDocument.body).getByRole('menuitem', {
      name: 'Keyboard shortcuts'
    }));
  }
}`,...a.parameters?.docs?.source}}};export{a as KeyboardShortcuts,e as Overview,_ as __namedExportsOrder,O as default};
