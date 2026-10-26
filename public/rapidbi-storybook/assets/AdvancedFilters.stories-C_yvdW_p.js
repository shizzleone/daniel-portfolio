import{j as a}from"./iframe-BQeq8eLT.js";import{F as u}from"./FilterEditor-C8l9Ok7n.js";import{e as g}from"./context-dQ0Z3AUU.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-wPOARlFc.js";import"./icons-Cw1lNTgo.js";const{useArgs:m}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:v,expect:p,userEvent:f,within:A}=__STORYBOOK_MODULE_TEST__,x={title:"Components/Advanced Filters",component:u,tags:["autodocs"],args:{value:g(),onChange:v()},render:function(e){const[,n]=m();return a.jsxs("div",{className:"story-stage",children:[a.jsx("h2",{children:"Advanced Filters"}),a.jsx("p",{className:"story-description",children:"Compose scoped conditions. Changes are reflected in Controls and the Actions panel."}),a.jsx(u,{...e,onChange:d=>{n({value:d}),e.onChange(d)}})]})}},r={play:async({canvasElement:l,args:e})=>{const n=A(l);await f.click(n.getByRole("button",{name:"Add condition"})),await p(e.onChange).toHaveBeenCalled(),await p(await n.findByRole("button",{name:"Remove filter"})).toBeInTheDocument()}},t={args:{value:{logic:"AND",entries:[{id:"region",field:"region",operator:"eq",value:"Europe"},{id:"revenue",field:"revenue",operator:"gt",value:"1000"}]}}},o={args:{value:{logic:"AND",entries:[{id:"date",field:"date",operator:"between",value:"2026-08-01",end:"2026-10-31"}]}}},s={args:{value:{logic:"AND",entries:[{id:"relative",field:"date",operator:"relative",value:"last week"}]}}},i={args:{value:{logic:"OR",entries:[{id:"regions",field:"region",operator:"in",value:"Europe,Asia Pacific"}]}}},c={args:{value:{logic:"AND",entries:[{id:"search",field:"product",operator:"contains",value:"Analytics"}]}}},y=["Default","MultipleConditions","DateRange","RelativeDate","MultiSelect","TextSearch"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};export{o as DateRange,r as Default,i as MultiSelect,t as MultipleConditions,s as RelativeDate,c as TextSearch,y as __namedExportsOrder,x as default};
