import{C as p}from"./CanvasV2-C9Afct2F.js";import{i,m as c,e as m}from"./context-vOTQpr3y.js";import"./iframe-dLOVGGP0.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-DY5zTx-Y.js";import"./index-CnZPMxzX.js";import"./icons-NBmqPU-d.js";import"./Assistant-BRvfRXx3.js";import"./registry-DKf4ZMpU.js";import"./FilterEditor-BlE-POIa.js";import"./WidgetSettings-h0uYs7sJ.js";import"./widgets-BUAy8x5y.js";import"./index-D0rb0-TT.js";const{fn:g,userEvent:d,within:l,expect:u}=__STORYBOOK_MODULE_TEST__,o=i();o.pages.push({id:"regional-page",name:"Regional detail",filters:m(),widgets:[c("grid",{groupBy:["region"],w:12,h:10})]});const b={title:"Components/Page Manager",component:p,tags:["autodocs"],args:{embedded:!0,snapshot:o,onConfigChanged:g()}},n={},t={play:async({canvasElement:e})=>{const a=l(e);await d.click(a.getByRole("button",{name:"Add page"})),await u(a.getByRole("button",{name:"Page 3"})).toBeInTheDocument()}},r={args:{readOnly:!0}},s={args:{snapshot:{...o,pages:o.pages.map((e,a)=>a?e:{...e,filters:{logic:"AND",entries:[{id:"europe",field:"region",operator:"eq",value:"Europe"}]}})}}},C=["MultiplePages","AddPage","ReadOnly","PageFilters"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};export{t as AddPage,n as MultiplePages,s as PageFilters,r as ReadOnly,C as __namedExportsOrder,b as default};
