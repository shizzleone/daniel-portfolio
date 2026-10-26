import{C as n}from"./CanvasV2-B0Sv22Kn.js";import{i as s}from"./context-Dth3pz9V.js";import"./iframe-CpFlqu88.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-B0M8lznC.js";import"./index-CekKI8AT.js";import"./icons-D3675qPu.js";import"./Assistant-D0ZWdoOf.js";import"./registry-BVtnL9vE.js";import"./FilterEditor-Cls_olkm.js";import"./WidgetSettings-DFzPaOlP.js";import"./widgets-DtGoydN5.js";import"./index-Cl_WvlI_.js";const{fn:m,userEvent:c,within:r,expect:p}=__STORYBOOK_MODULE_TEST__,v={title:"Components/Exports",component:n,tags:["autodocs"],args:{snapshot:s(),embedded:!0,onAlert:m()},parameters:{docs:{description:{component:"Export the current page as a PDF report, all widget data to Excel, or the complete canvas as JSON. Select a format to download; stories never trigger a download automatically."}}}},t={play:async({canvasElement:a})=>{await c.click(r(a).getByRole("button",{name:"Export canvas"})),await p(r(a.ownerDocument.body).getByRole("menuitem",{name:"Export JSON snapshot"})).toBeInTheDocument()}},e={args:{showExportPdfButton:!1}},o={args:{readOnly:!0}},B=["Formats","WithoutPDF","ReadOnly"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
