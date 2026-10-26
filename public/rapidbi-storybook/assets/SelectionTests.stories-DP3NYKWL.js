import{r as c,j as l}from"./iframe--_k5KNLb.js";import{S as m}from"./primitives-Bd1_-liV.js";import"./preload-helper-PPVm8Dsz.js";import"./Option-CVltArud.js";import"./Switch-XczNmwRq.js";import"./index-C1N_ynMI.js";import"./index-CkoKM40F.js";const{fn:p,userEvent:r,within:s,expect:i}=__STORYBOOK_MODULE_TEST__;function u({onChange:e}){const[n,t]=c.useState("revenue");return l.jsx(m,{label:"Measure",value:n,options:[{value:"revenue",label:"Revenue"},{value:"profit",label:"Profit"}],onChange:o=>{t(o),e(o)}})}const y={title:"Components/Common/Tests/Selection",component:u,tags:["!dev"],args:{onChange:p()}},a={play:async({canvasElement:e,args:n})=>{const t=s(e);await r.click(t.getByRole("combobox",{name:"Measure"})),await r.click(await s(e.ownerDocument.body).findByRole("option",{name:"Profit"})),await i(n.onChange).toHaveBeenCalledWith("profit"),await i(t.getByRole("combobox",{name:"Measure"})).toHaveTextContent("Profit")}},C=["ChangeSelection"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};export{a as ChangeSelection,C as __namedExportsOrder,y as default};
