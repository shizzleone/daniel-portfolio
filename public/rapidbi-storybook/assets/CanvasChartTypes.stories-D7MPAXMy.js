import{C}from"./CanvasV2-BaZTxqhz.js";import{i as v,m as y}from"./context-CWY0lBqE.js";import{c as _}from"./registry-uSR7LsGo.js";import"./iframe--_k5KNLb.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-Bd1_-liV.js";import"./Option-CVltArud.js";import"./Switch-XczNmwRq.js";import"./index-C1N_ynMI.js";import"./index-CkoKM40F.js";import"./Assistant-xu0HdMcl.js";import"./FilterEditor-BdfWwR-Z.js";import"./WidgetSettings-cGL58KLx.js";import"./widgets-eJ_THapC.js";import"./Visible-Cx233rT1.js";const{fn:w}=__STORYBOOK_MODULE_TEST__;function s(S){const b=v(),F=_.find(f=>f.id===S).label;return b.name=`${F} chart canvas`,b.pages[0].widgets=[y("chart",{title:`${F}: revenue by region`,chartType:S,dimension:"region",x:0,y:0,w:12,h:12,animation:!1})],b}const K={title:"Screens/Canvas V2/Chart Types",component:C,tags:["autodocs"],args:{embedded:!0,onConfigChanged:w()},parameters:{docs:{description:{component:"All 15 Highcharts types inside Canvas V2. Use the visible Chart type selector to switch the current widget without opening settings. Changes are saved in the canvas snapshot."}}}},r={args:{snapshot:s("column")}},a={args:{snapshot:s("bar")}},e={args:{snapshot:s("line")}},o={args:{snapshot:s("area")}},t={args:{snapshot:s("pie")}},n={args:{snapshot:s("donut")}},p={args:{snapshot:s("treemap")}},c={args:{snapshot:s("bubble")}},m={args:{snapshot:s("scatter")}},i={args:{snapshot:s("heatmap")}},d={args:{snapshot:s("funnel")}},u={args:{snapshot:s("pyramid")}},h={args:{snapshot:s("combo")}},g={args:{snapshot:s("boxplot")}},l={args:{snapshot:s("waterfall")}},M=["Column","Bar","Line","Area","Pie","Donut","Treemap","Bubble","Scatter","Heatmap","Funnel","Pyramid","Combo","BoxPlot","Waterfall"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotFor('column')
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotFor('bar')
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotFor('line')
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotFor('area')
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotFor('pie')
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotFor('donut')
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotFor('treemap')
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotFor('bubble')
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotFor('scatter')
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotFor('heatmap')
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotFor('funnel')
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotFor('pyramid')
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotFor('combo')
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotFor('boxplot')
  }
}`,...g.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotFor('waterfall')
  }
}`,...l.parameters?.docs?.source}}};export{o as Area,a as Bar,g as BoxPlot,c as Bubble,r as Column,h as Combo,n as Donut,d as Funnel,i as Heatmap,e as Line,t as Pie,u as Pyramid,m as Scatter,p as Treemap,l as Waterfall,M as __namedExportsOrder,K as default};
