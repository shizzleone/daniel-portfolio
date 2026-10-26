import{C as r}from"./CanvasV2-BaZTxqhz.js";import{i as c}from"./context-CWY0lBqE.js";import"./iframe--_k5KNLb.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-Bd1_-liV.js";import"./Option-CVltArud.js";import"./Switch-XczNmwRq.js";import"./index-C1N_ynMI.js";import"./index-CkoKM40F.js";import"./Assistant-xu0HdMcl.js";import"./registry-uSR7LsGo.js";import"./FilterEditor-BdfWwR-Z.js";import"./WidgetSettings-cGL58KLx.js";import"./widgets-eJ_THapC.js";import"./Visible-Cx233rT1.js";const{fn:s,userEvent:i,within:o,expect:m}=__STORYBOOK_MODULE_TEST__,_={title:"Components/Persistence",component:r,tags:["autodocs"],args:{snapshot:c(),embedded:!1,onSave:s(),onCopyCanvas:s(),onConfigChanged:s()},parameters:{docs:{description:{component:"Snapshot save/load and browser-local saved views. Open the save dialog, edit its name and save; inspect the host callback in Actions. JSON import is available from Canvas tools."}}}},e={play:async({canvasElement:a})=>{await i.click(o(a).getByRole("button",{name:"Save canvas"})),await m(o(a.ownerDocument.body).getByRole("dialog")).toBeInTheDocument()}},n={play:async({canvasElement:a})=>{await i.click(o(a).getByRole("button",{name:"Saved views"}))}},t={play:async({canvasElement:a})=>{await i.click(o(a).getByRole("button",{name:"Canvas actions"}))}},f=["SaveSnapshot","SavedViews","CopyCanvas"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};export{t as CopyCanvas,e as SaveSnapshot,n as SavedViews,f as __namedExportsOrder,_ as default};
