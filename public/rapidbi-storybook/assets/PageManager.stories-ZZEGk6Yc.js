import{C as p}from"./CanvasV2-zsFKZXTG.js";import{i,m as c,e as m}from"./context-CbzXGQdq.js";import"./iframe-CkprDsVp.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-BuM4Gz1h.js";import"./index-BH2JVck6.js";import"./icons-DsOTsNTC.js";import"./Assistant-CtnlWQDx.js";import"./registry-COFSqyvW.js";import"./FilterEditor-CQ23glwB.js";import"./WidgetSettings-DwclMUEt.js";import"./widgets-CXEz6yC6.js";import"./index-DeFBh-Fs.js";const{fn:g,userEvent:d,within:l,expect:u}=__STORYBOOK_MODULE_TEST__,o=i();o.pages.push({id:"regional-page",name:"Regional detail",filters:m(),widgets:[c("grid",{groupBy:["region"],w:12,h:10})]});const b={title:"Components/Page Manager",component:p,tags:["autodocs"],args:{embedded:!0,snapshot:o,onConfigChanged:g()}},n={},t={play:async({canvasElement:e})=>{const a=l(e);await d.click(a.getByRole("button",{name:"Add page"})),await u(a.getByRole("button",{name:"Page 3"})).toBeInTheDocument()}},r={args:{readOnly:!0}},s={args:{snapshot:{...o,pages:o.pages.map((e,a)=>a?e:{...e,filters:{logic:"AND",entries:[{id:"europe",field:"region",operator:"eq",value:"Europe"}]}})}}},C=["MultiplePages","AddPage","ReadOnly","PageFilters"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
