import{C as r}from"./CanvasV2-4NYRkP0w.js";import{i as c}from"./context-BQyxeM8Z.js";import"./iframe-BxPDHca9.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-DNBEsqbp.js";import"./index-CHmK8nHf.js";import"./icons-O3LJ5nk1.js";import"./Assistant-Bw7qiQOy.js";import"./registry-BSKzlidL.js";import"./FilterEditor-CqzAGPad.js";import"./WidgetSettings-FAu5Vt9D.js";import"./widgets-B6XhE1Ku.js";import"./index-CU_3h48h.js";const{fn:s,userEvent:i,within:o,expect:m}=__STORYBOOK_MODULE_TEST__,B={title:"Components/Persistence",component:r,tags:["autodocs"],args:{snapshot:c(),embedded:!1,onSave:s(),onCopyCanvas:s(),onConfigChanged:s()},parameters:{docs:{description:{component:"Snapshot save/load and browser-local saved views. Open the save dialog, edit its name and save; inspect the host callback in Actions. JSON import is available from Canvas tools."}}}},e={play:async({canvasElement:a})=>{await i.click(o(a).getByRole("button",{name:"Save canvas"})),await m(o(a.ownerDocument.body).getByRole("dialog")).toBeInTheDocument()}},n={play:async({canvasElement:a})=>{await i.click(o(a).getByRole("button",{name:"Saved views"}))}},t={play:async({canvasElement:a})=>{await i.click(o(a).getByRole("button",{name:"Canvas actions"}))}},R=["SaveSnapshot","SavedViews","CopyCanvas"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole('button', {
      name: 'Save canvas'
    }));
    await expect(within(canvasElement.ownerDocument.body).getByRole('dialog')).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole('button', {
      name: 'Saved views'
    }));
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole('button', {
      name: 'Canvas actions'
    }));
  }
}`,...t.parameters?.docs?.source}}};export{t as CopyCanvas,e as SaveSnapshot,n as SavedViews,R as __namedExportsOrder,B as default};
