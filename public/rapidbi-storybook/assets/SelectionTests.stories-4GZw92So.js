import{r as c,j as l}from"./iframe-CkprDsVp.js";import{S as m}from"./primitives-BuM4Gz1h.js";import"./preload-helper-PPVm8Dsz.js";const{fn:p,userEvent:s,within:r,expect:i}=__STORYBOOK_MODULE_TEST__;function u({onChange:e}){const[t,a]=c.useState("revenue");return l.jsx(m,{label:"Measure",value:t,options:[{value:"revenue",label:"Revenue"},{value:"profit",label:"Profit"}],onChange:o=>{a(o),e(o)}})}const w={title:"Components/Common/Tests/Selection",component:u,tags:["!dev"],args:{onChange:p()}},n={play:async({canvasElement:e,args:t})=>{const a=r(e);await s.click(a.getByRole("combobox",{name:"Measure"})),await s.click(await r(e.ownerDocument.body).findByRole("option",{name:"Profit"})),await i(t.onChange).toHaveBeenCalledWith("profit"),await i(a.getByRole("combobox",{name:"Measure"})).toHaveTextContent("Profit")}},x=["ChangeSelection"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('combobox', {
      name: 'Measure'
    }));
    await userEvent.click(await within(canvasElement.ownerDocument.body).findByRole('option', {
      name: 'Profit'
    }));
    await expect(args.onChange).toHaveBeenCalledWith('profit');
    await expect(canvas.getByRole('combobox', {
      name: 'Measure'
    })).toHaveTextContent('Profit');
  }
}`,...n.parameters?.docs?.source}}};export{n as ChangeSelection,x as __namedExportsOrder,w as default};
