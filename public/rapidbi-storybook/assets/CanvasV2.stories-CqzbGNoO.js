import{j as S}from"./iframe--_k5KNLb.js";import{C as R}from"./CanvasV2-BaZTxqhz.js";import{d as x,i as f,m as w,e as E}from"./context-CWY0lBqE.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-Bd1_-liV.js";import"./Option-CVltArud.js";import"./Switch-XczNmwRq.js";import"./index-C1N_ynMI.js";import"./index-CkoKM40F.js";import"./Assistant-xu0HdMcl.js";import"./registry-uSR7LsGo.js";import"./FilterEditor-BdfWwR-Z.js";import"./WidgetSettings-cGL58KLx.js";import"./widgets-eJ_THapC.js";import"./Visible-Cx233rT1.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,s=(...B)=>{const y=f();return y.pages[0].widgets=B.map((M,k)=>w(M,{x:0,y:k*10,w:12,h:10})),y},U={title:"Screens/Canvas V2",component:R,tags:["autodocs"],args:{snapshot:f(),embedded:!0,onSave:a(),onConfigChanged:a(),onCommentaryAction:a(),onAlert:a()},parameters:{docs:{description:{component:"The second-generation canvas: configurable widgets, multiple pages, scoped filters, saved snapshots and host callbacks. These examples use synthetic commerce data."}}}},e={},r={args:{snapshot:s()}},t={args:{snapshot:s("grid")}},W=s("grid");W.pages[0].widgets[0]=w("grid",{title:"Regional revenue by channel",groupBy:["region"],pivotBy:["channel"],totals:"bottom",w:12,h:10});const o={args:{snapshot:W}},n={args:{snapshot:s("kpi")}},i={args:{snapshot:s("chart")}},p={args:{snapshot:s("grid","grid")}},O=f();O.pages.push({id:"regional-detail",name:"Regional detail",filters:E(),widgets:W.pages[0].widgets});const c={args:{snapshot:O}},d={args:{customHeader:S.jsxs("div",{style:{padding:"var(--salt-spacing-200)"},children:[S.jsx("strong",{children:"Portfolio analytics"})," · Internal reporting workspace"]})}},m={args:{snapshot:s("commentary"),mentionOptions:["Revenue team","Operations","Finance"]}},b=f();b.filters={logic:"AND",entries:[{id:"region-filter",field:"region",operator:"eq",value:"Europe"}]};const g={args:{snapshot:b}},l={args:{snapshot:s("commentary")}},u={args:{readOnly:!0,embedded:!0}},h={args:{readOnly:!0,embedded:!1}},v={args:{showSaveButton:!1,showAddWidgetButton:!1,showWidgetSettings:!1,showCanvasFilterButton:!1}},C={args:{snapshot:x({version:1,name:"Migrated report",widgets:[]}).snapshot}},Y=["Default","BlankCanvas","CanvasWithGrid","CanvasWithConfiguredGrid","CanvasWithKpi","CanvasWithChart","CanvasWithMultipleGrids","MultiPageCanvas","CanvasWithHeaderComponent","CanvasWithMentionOptions","WithGlobalFilters","WithCommentaryCallbacks","EmbeddedReadOnly","ReadOnlyCanvas","HiddenEditingControls","MigratedFromV1"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotWith()
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotWith('grid')
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: configured
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotWith('kpi')
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotWith('chart')
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotWith('grid', 'grid')
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: multiple
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    customHeader: <div style={{
      padding: 'var(--salt-spacing-200)'
    }}><strong>Portfolio analytics</strong> · Internal reporting workspace</div>
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotWith('commentary'),
    mentionOptions: ['Revenue team', 'Operations', 'Finance']
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: filtered
  }
}`,...g.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotWith('commentary')
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    embedded: true
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    embedded: false
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    showSaveButton: false,
    showAddWidgetButton: false,
    showWidgetSettings: false,
    showCanvasFilterButton: false
  }
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: migrateV1ToV2({
      version: 1,
      name: 'Migrated report',
      widgets: []
    }).snapshot
  }
}`,...C.parameters?.docs?.source}}};export{r as BlankCanvas,i as CanvasWithChart,o as CanvasWithConfiguredGrid,t as CanvasWithGrid,d as CanvasWithHeaderComponent,n as CanvasWithKpi,m as CanvasWithMentionOptions,p as CanvasWithMultipleGrids,e as Default,u as EmbeddedReadOnly,v as HiddenEditingControls,C as MigratedFromV1,c as MultiPageCanvas,h as ReadOnlyCanvas,l as WithCommentaryCallbacks,g as WithGlobalFilters,Y as __namedExportsOrder,U as default};
