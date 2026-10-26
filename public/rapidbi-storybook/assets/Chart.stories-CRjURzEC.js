import{u as R,r as F,j as r}from"./iframe-CkprDsVp.js";import{C as $}from"./widgets-CXEz6yC6.js";import{f as q,a as L,m as K}from"./context-CbzXGQdq.js";import{c as j}from"./registry-COFSqyvW.js";import{B as M}from"./primitives-BuM4Gz1h.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DeFBh-Fs.js";import"./index-BH2JVck6.js";import"./icons-DsOTsNTC.js";const{fn:U}=__STORYBOOK_MODULE_TEST__;function Y({chartType:a,measure:B,dimension:D,stacking:_,stackBy:P,showLegend:v,showLabels:E,empty:N,onDrill:O}){const{mode:A}=R(),[e,C]=F.useState(null),W=N?[]:e?q(L,[{logic:"AND",entries:[{id:"drill",...e,operator:"eq"}]}]):L,H=K("chart",{title:`${B} by ${e?"channel":D}`,chartType:a,measure:B,dimension:e?"channel":D,stacking:_,stackBy:P,showLegend:v,showLabels:E,animation:!1});return r.jsxs("main",{className:"story-stage",children:[r.jsxs("h2",{children:[j.find(s=>s.id===a)?.label," chart"]}),r.jsx("p",{className:"story-description",children:"Highcharts · synthetic commerce data. Select a point to drill into channels; inspect the event in Actions."}),e&&r.jsxs(M,{variant:"outline",onClick:()=>C(null),children:["Back to all ",D]}),r.jsx("div",{style:{height:"max(220px, min(400px, calc(100vh - 115px)))"},children:r.jsx($,{widget:H,rows:W,dark:A==="dark",onDrill:(s,w)=>{O(s,w),C({field:s,value:w})}})})]})}const er={title:"Components/Chart",component:Y,tags:["autodocs"],args:{chartType:"column",measure:"revenue",dimension:"region",stacking:"",stackBy:"channel",showLegend:!0,showLabels:!1,empty:!1,onDrill:U()},argTypes:{chartType:{control:"select",options:j.map(a=>a.id)},measure:{control:"select",options:["revenue","profit","orders","customers"]},dimension:{control:"select",options:["region","product","month","channel"]},stacking:{control:"select",options:["","normal","percent"]}}},t={args:{chartType:"column"}},o={args:{chartType:"bar"}},c={args:{chartType:"line"}},n={args:{chartType:"area"}},p={args:{chartType:"pie"}},m={args:{chartType:"donut"}},i={args:{chartType:"treemap"}},l={args:{chartType:"bubble"}},u={args:{chartType:"scatter"}},d={args:{chartType:"heatmap"}},g={args:{chartType:"funnel"}},h={args:{chartType:"pyramid"}},y={args:{chartType:"combo"}},T={args:{chartType:"boxplot"}},S={args:{chartType:"waterfall"}},b={args:{stacking:"normal"}},f={args:{stacking:"percent"}},x={args:{showLabels:!0}},k={args:{empty:!0}},ar=["Column","Bar","Line","Area","Pie","Donut","Treemap","Bubble","Scatter","Heatmap","Funnel","Pyramid","Combo","Boxplot","Waterfall","Stacked","PercentStacked","DataLabels","NoData"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    chartType: 'column'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    chartType: 'bar'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    chartType: 'line'
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    chartType: 'area'
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    chartType: 'pie'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    chartType: 'donut'
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    chartType: 'treemap'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    chartType: 'bubble'
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    chartType: 'scatter'
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    chartType: 'heatmap'
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    chartType: 'funnel'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    chartType: 'pyramid'
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    chartType: 'combo'
  }
}`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    chartType: 'boxplot'
  }
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    chartType: 'waterfall'
  }
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    stacking: 'normal'
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    stacking: 'percent'
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    showLabels: true
  }
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    empty: true
  }
}`,...k.parameters?.docs?.source}}};export{n as Area,o as Bar,T as Boxplot,l as Bubble,t as Column,y as Combo,x as DataLabels,m as Donut,g as Funnel,d as Heatmap,c as Line,k as NoData,f as PercentStacked,p as Pie,h as Pyramid,u as Scatter,b as Stacked,i as Treemap,S as Waterfall,ar as __namedExportsOrder,er as default};
