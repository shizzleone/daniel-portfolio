import{C as p}from"./CanvasV2-MlPgMf0m.js";import{i,m as c,e as m}from"./context-C2z6mL_X.js";import"./iframe-BIBoYb_3.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-BV6yJrff.js";import"./index-B1FCJnwq.js";import"./icons-BgjLwcp4.js";import"./Assistant-Bqve2ul6.js";import"./registry-DcJxAdRt.js";import"./FilterEditor-BlgiQbhd.js";import"./WidgetSettings-DlEZj8aF.js";import"./widgets-CLkg4Iz2.js";import"./index-CkT8kT-3.js";const{fn:g,userEvent:d,within:l,expect:u}=__STORYBOOK_MODULE_TEST__,o=i();o.pages.push({id:"regional-page",name:"Regional detail",filters:m(),widgets:[c("grid",{groupBy:["region"],w:12,h:10})]});const b={title:"Components/Page Manager",component:p,tags:["autodocs"],args:{embedded:!0,snapshot:o,onConfigChanged:g()}},n={},t={play:async({canvasElement:e})=>{const a=l(e);await d.click(a.getByRole("button",{name:"Add page"})),await u(a.getByRole("button",{name:"Page 3"})).toBeInTheDocument()}},r={args:{readOnly:!0}},s={args:{snapshot:{...o,pages:o.pages.map((e,a)=>a?e:{...e,filters:{logic:"AND",entries:[{id:"europe",field:"region",operator:"eq",value:"Europe"}]}})}}},C=["MultiplePages","AddPage","ReadOnly","PageFilters"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
