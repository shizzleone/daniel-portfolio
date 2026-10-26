import{u as A,r as W,j as e}from"./iframe-D9kFk9mN.js";import{G as b}from"./widgets-BjxNB7su.js";import{f as j,a as u,m as w}from"./context-DJg1u6v8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CIYw2dcl.js";import"./index-C36oxPrb.js";import"./icons-B2SzldBZ.js";import"./registry-jch_rgB7.js";import"./primitives-C7sXfPd-.js";function C({groupBy:g=[],pivotBy:v=[],delta:y=!1,empty:h=!1,recordLimit:f=100,totals:B=!0,sort:D=[],dateFrom:l=""}){const{mode:S}=A(),[x,G]=W.useState({}),m=l?j(u,[{logic:"AND",entries:[{id:"date",field:"date",operator:"between",value:l,end:"9999-12-31"}]}]):u,P=w("grid",{title:"Revenue by product",sort:D,groupBy:g,pivotBy:v,delta:y,rowLimit:f,totals:B?"bottom":"none",...x});return e.jsxs("div",{className:"story-stage",children:[e.jsx("h2",{children:"Advanced Grid"}),e.jsxs("p",{className:"story-description",children:["Server-side row model · synthetic commerce data · ",m.length.toLocaleString()," records. Expand groups to explore detail."]}),e.jsx("div",{className:"story-grid",children:e.jsx(b,{widget:P,rows:h?[]:m,dark:S==="dark",readOnly:!1,update:G,filters:[]})})]})}const _={title:"Components/Advanced Grid",component:C,tags:["autodocs"],args:{groupBy:["product"],pivotBy:[],delta:!1,empty:!1,recordLimit:100,totals:!0,sort:[],dateFrom:""},argTypes:{groupBy:{control:"object"},pivotBy:{control:"object"},recordLimit:{control:{type:"range",min:10,max:1e3,step:10}}},parameters:{docs:{description:{component:"AG Grid Enterprise powered grid with grouping, pivoting, delta calculations, sorting and server-side pagination. Enterprise features require a production AG Grid license."}}}},r={},t={args:{empty:!0,groupBy:[]}},o={args:{empty:!0}},s={args:{pivotBy:["month"]}},a={args:{pivotBy:["month"],delta:!0,sort:[{field:"delta",direction:"desc"}]}},n={args:{pivotBy:["month","channel"]}},i={args:{groupBy:["region","product"],pivotBy:["month","channel"]}},c={args:{groupBy:["region","channel"],sort:[{field:"region",direction:"asc"},{field:"revenue",direction:"desc"}]}},d={args:{pivotBy:["channel"],totals:!0}},p={args:{dateFrom:"2026-08-01"}},q=["Default","Empty","NoResults","DatePivot","DatePivotWithDeltaSort","MultipleDatePivotColumns","MultipleColumnsWithGroupbyAndDifferentDatesWithAdditionalPivot","MultipleSortedColumns","MixedPivotWithPivotTotalColumns","GlobalDateFilter"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    empty: true,
    groupBy: []
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    empty: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    pivotBy: ['month']
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    pivotBy: ['month'],
    delta: true,
    sort: [{
      field: 'delta',
      direction: 'desc'
    }]
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    pivotBy: ['month', 'channel']
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    groupBy: ['region', 'product'],
    pivotBy: ['month', 'channel']
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    groupBy: ['region', 'channel'],
    sort: [{
      field: 'region',
      direction: 'asc'
    }, {
      field: 'revenue',
      direction: 'desc'
    }]
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    pivotBy: ['channel'],
    totals: true
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    dateFrom: '2026-08-01'
  }
}`,...p.parameters?.docs?.source}}};export{s as DatePivot,a as DatePivotWithDeltaSort,r as Default,t as Empty,p as GlobalDateFilter,d as MixedPivotWithPivotTotalColumns,i as MultipleColumnsWithGroupbyAndDifferentDatesWithAdditionalPivot,n as MultipleDatePivotColumns,c as MultipleSortedColumns,o as NoResults,q as __namedExportsOrder,_ as default};
