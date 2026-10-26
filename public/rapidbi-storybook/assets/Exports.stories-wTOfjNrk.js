import{C as n}from"./CanvasV2-C9Afct2F.js";import{i as s}from"./context-vOTQpr3y.js";import"./iframe-dLOVGGP0.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-DY5zTx-Y.js";import"./index-CnZPMxzX.js";import"./icons-NBmqPU-d.js";import"./Assistant-BRvfRXx3.js";import"./registry-DKf4ZMpU.js";import"./FilterEditor-BlE-POIa.js";import"./WidgetSettings-h0uYs7sJ.js";import"./widgets-BUAy8x5y.js";import"./index-D0rb0-TT.js";const{fn:m,userEvent:c,within:r,expect:p}=__STORYBOOK_MODULE_TEST__,v={title:"Components/Exports",component:n,tags:["autodocs"],args:{snapshot:s(),embedded:!0,onAlert:m()},parameters:{docs:{description:{component:"Export the current page as a PDF report, all widget data to Excel, or the complete canvas as JSON. Select a format to download; stories never trigger a download automatically."}}}},t={play:async({canvasElement:a})=>{await c.click(r(a).getByRole("button",{name:"Export canvas"})),await p(r(a.ownerDocument.body).getByRole("menuitem",{name:"Export JSON snapshot"})).toBeInTheDocument()}},e={args:{showExportPdfButton:!1}},o={args:{readOnly:!0}},B=["Formats","WithoutPDF","ReadOnly"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole('button', {
      name: 'Export canvas'
    }));
    await expect(within(canvasElement.ownerDocument.body).getByRole('menuitem', {
      name: 'Export JSON snapshot'
    })).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    showExportPdfButton: false
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true
  }
}`,...o.parameters?.docs?.source}}};export{t as Formats,o as ReadOnly,e as WithoutPDF,B as __namedExportsOrder,v as default};
