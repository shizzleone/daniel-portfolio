import{j as a}from"./iframe--_k5KNLb.js";import{F as p}from"./FilterEditor-BdfWwR-Z.js";import{e as m}from"./context-CWY0lBqE.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-Bd1_-liV.js";import"./Option-CVltArud.js";import"./Switch-XczNmwRq.js";import"./index-C1N_ynMI.js";import"./index-CkoKM40F.js";import"./Visible-Cx233rT1.js";const{useArgs:g}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:v,expect:u,userEvent:f,within:A}=__STORYBOOK_MODULE_TEST__,O={title:"Components/Advanced Filters",component:p,tags:["autodocs"],args:{value:m(),onChange:v()},render:function(e){const[,n]=g();return a.jsxs("div",{className:"story-stage",children:[a.jsx("h2",{children:"Advanced Filters"}),a.jsx("p",{className:"story-description",children:"Compose scoped conditions. Changes are reflected in Controls and the Actions panel."}),a.jsx(p,{...e,onChange:d=>{n({value:d}),e.onChange(d)}})]})}},r={play:async({canvasElement:l,args:e})=>{const n=A(l);await f.click(n.getByRole("button",{name:"Add condition"})),await u(e.onChange).toHaveBeenCalled(),await u(await n.findByRole("button",{name:"Remove filter"})).toBeInTheDocument()}},t={args:{value:{logic:"AND",entries:[{id:"region",field:"region",operator:"eq",value:"Europe"},{id:"revenue",field:"revenue",operator:"gt",value:"1000"}]}}},o={args:{value:{logic:"AND",entries:[{id:"date",field:"date",operator:"between",value:"2026-08-01",end:"2026-10-31"}]}}},s={args:{value:{logic:"AND",entries:[{id:"relative",field:"date",operator:"relative",value:"last week"}]}}},i={args:{value:{logic:"OR",entries:[{id:"regions",field:"region",operator:"in",value:"Europe,Asia Pacific"}]}}},c={args:{value:{logic:"AND",entries:[{id:"search",field:"product",operator:"contains",value:"Analytics"}]}}},B=["Default","MultipleConditions","DateRange","RelativeDate","MultiSelect","TextSearch"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Add condition'
    }));
    await expect(args.onChange).toHaveBeenCalled();
    await expect(await canvas.findByRole('button', {
      name: 'Remove filter'
    })).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: {
      logic: 'AND',
      entries: [{
        id: 'region',
        field: 'region',
        operator: 'eq',
        value: 'Europe'
      }, {
        id: 'revenue',
        field: 'revenue',
        operator: 'gt',
        value: '1000'
      }]
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: {
      logic: 'AND',
      entries: [{
        id: 'date',
        field: 'date',
        operator: 'between',
        value: '2026-08-01',
        end: '2026-10-31'
      }]
    }
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: {
      logic: 'AND',
      entries: [{
        id: 'relative',
        field: 'date',
        operator: 'relative',
        value: 'last week'
      }]
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: {
      logic: 'OR',
      entries: [{
        id: 'regions',
        field: 'region',
        operator: 'in',
        value: 'Europe,Asia Pacific'
      }]
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: {
      logic: 'AND',
      entries: [{
        id: 'search',
        field: 'product',
        operator: 'contains',
        value: 'Analytics'
      }]
    }
  }
}`,...c.parameters?.docs?.source}}};export{o as DateRange,r as Default,i as MultiSelect,t as MultipleConditions,s as RelativeDate,c as TextSearch,B as __namedExportsOrder,O as default};
