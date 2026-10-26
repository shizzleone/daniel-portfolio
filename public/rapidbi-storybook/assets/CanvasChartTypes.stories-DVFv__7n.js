import{C}from"./CanvasV2-DPcN4zPS.js";import{i as v,m as y}from"./context-DliM7wwC.js";import{c as _}from"./registry-BjNJuGfJ.js";import"./iframe-WThfDZJP.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-B342llPO.js";import"./index-Olj-B9WC.js";import"./icons-ynApnUxk.js";import"./Assistant-BL1h7vO5.js";import"./FilterEditor-DiEp39GW.js";import"./WidgetSettings-CsmsF1t8.js";import"./widgets-BTP9KWFE.js";import"./index-jGv1Tsu9.js";const{fn:w}=__STORYBOOK_MODULE_TEST__;function s(S){const b=v(),F=_.find(f=>f.id===S).label;return b.name=`${F} chart canvas`,b.pages[0].widgets=[y("chart",{title:`${F}: revenue by region`,chartType:S,dimension:"region",x:0,y:0,w:12,h:12,animation:!1})],b}const $={title:"Screens/Canvas V2/Chart Types",component:C,tags:["autodocs"],args:{embedded:!0,onConfigChanged:w()},parameters:{docs:{description:{component:"All 15 Highcharts types inside Canvas V2. Use the visible Chart type selector to switch the current widget without opening settings. Changes are saved in the canvas snapshot."}}}},a={args:{snapshot:s("column")}},r={args:{snapshot:s("bar")}},e={args:{snapshot:s("line")}},o={args:{snapshot:s("area")}},t={args:{snapshot:s("pie")}},n={args:{snapshot:s("donut")}},p={args:{snapshot:s("treemap")}},c={args:{snapshot:s("bubble")}},m={args:{snapshot:s("scatter")}},i={args:{snapshot:s("heatmap")}},d={args:{snapshot:s("funnel")}},u={args:{snapshot:s("pyramid")}},h={args:{snapshot:s("combo")}},g={args:{snapshot:s("boxplot")}},l={args:{snapshot:s("waterfall")}},k=["Column","Bar","Line","Area","Pie","Donut","Treemap","Bubble","Scatter","Heatmap","Funnel","Pyramid","Combo","BoxPlot","Waterfall"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotFor('column')
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotFor('bar')
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};export{o as Area,r as Bar,g as BoxPlot,c as Bubble,a as Column,h as Combo,n as Donut,d as Funnel,i as Heatmap,e as Line,t as Pie,u as Pyramid,m as Scatter,p as Treemap,l as Waterfall,k as __namedExportsOrder,$ as default};
