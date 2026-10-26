import{C as n}from"./CanvasV2-MlPgMf0m.js";import{i as s}from"./context-C2z6mL_X.js";import"./iframe-BIBoYb_3.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-BV6yJrff.js";import"./index-B1FCJnwq.js";import"./icons-BgjLwcp4.js";import"./Assistant-Bqve2ul6.js";import"./registry-DcJxAdRt.js";import"./FilterEditor-BlgiQbhd.js";import"./WidgetSettings-DlEZj8aF.js";import"./widgets-CLkg4Iz2.js";import"./index-CkT8kT-3.js";const{fn:m,userEvent:c,within:r,expect:p}=__STORYBOOK_MODULE_TEST__,v={title:"Components/Exports",component:n,tags:["autodocs"],args:{snapshot:s(),embedded:!0,onAlert:m()},parameters:{docs:{description:{component:"Export the current page as a PDF report, all widget data to Excel, or the complete canvas as JSON. Select a format to download; stories never trigger a download automatically."}}}},t={play:async({canvasElement:a})=>{await c.click(r(a).getByRole("button",{name:"Export canvas"})),await p(r(a.ownerDocument.body).getByRole("menuitem",{name:"Export JSON snapshot"})).toBeInTheDocument()}},e={args:{showExportPdfButton:!1}},o={args:{readOnly:!0}},B=["Formats","WithoutPDF","ReadOnly"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
