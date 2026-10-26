import{C as p}from"./CanvasV2-BaZTxqhz.js";import{i,m as c,e as m}from"./context-CWY0lBqE.js";import"./iframe--_k5KNLb.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-Bd1_-liV.js";import"./Option-CVltArud.js";import"./Switch-XczNmwRq.js";import"./index-C1N_ynMI.js";import"./index-CkoKM40F.js";import"./Assistant-xu0HdMcl.js";import"./registry-uSR7LsGo.js";import"./FilterEditor-BdfWwR-Z.js";import"./WidgetSettings-cGL58KLx.js";import"./widgets-eJ_THapC.js";import"./Visible-Cx233rT1.js";const{fn:g,userEvent:d,within:l,expect:u}=__STORYBOOK_MODULE_TEST__,s=i();s.pages.push({id:"regional-page",name:"Regional detail",filters:m(),widgets:[c("grid",{groupBy:["region"],w:12,h:10})]});const D={title:"Components/Page Manager",component:p,tags:["autodocs"],args:{embedded:!0,snapshot:s,onConfigChanged:g()}},t={},n={play:async({canvasElement:e})=>{const a=l(e);await d.click(a.getByRole("button",{name:"Add page"})),await u(a.getByRole("button",{name:"Page 3"})).toBeInTheDocument()}},r={args:{readOnly:!0}},o={args:{snapshot:{...s,pages:s.pages.map((e,a)=>a?e:{...e,filters:{logic:"AND",entries:[{id:"europe",field:"region",operator:"eq",value:"Europe"}]}})}}},T=["MultiplePages","AddPage","ReadOnly","PageFilters"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Add page'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Page 3'
    })).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: {
      ...snapshot,
      pages: snapshot.pages.map((p, i) => i ? p : {
        ...p,
        filters: {
          logic: 'AND',
          entries: [{
            id: 'europe',
            field: 'region',
            operator: 'eq',
            value: 'Europe'
          }]
        }
      })
    }
  }
}`,...o.parameters?.docs?.source}}};export{n as AddPage,t as MultiplePages,o as PageFilters,r as ReadOnly,T as __namedExportsOrder,D as default};
