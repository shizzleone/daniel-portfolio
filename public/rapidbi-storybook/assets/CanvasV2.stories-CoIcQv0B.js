import{j as S}from"./iframe-DyAVkdgV.js";import{C as R}from"./CanvasV2-l5-cwF1J.js";import{i as a,d as M,m as e,e as E}from"./context-BimX_QIN.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-lfyimW_X.js";import"./index-JsZjLEFD.js";import"./icons-D98REG39.js";import"./Assistant-DuPXa-IU.js";import"./registry-BHuuQw2I.js";import"./FilterEditor-CxG-627k.js";import"./WidgetSettings-lxy5Lk0w.js";import"./widgets-t3lla1I3.js";import"./index-BXXmrc0Z.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,s=(...T)=>{const W=a();return W.pages[0].widgets=T.map((k,B)=>e(k,{x:0,y:B*10,w:12,h:10})),W},q={title:"Screens/Canvas V2",component:R,tags:["autodocs"],args:{snapshot:a(),embedded:!0,onSave:r(),onConfigChanged:r(),onCommentaryAction:r(),onAlert:r()},parameters:{docs:{description:{component:"The second-generation canvas: configurable widgets, multiple pages, scoped filters, saved snapshots and host callbacks. These examples use synthetic commerce data."}}}},t={},n={args:{snapshot:s()}},o={args:{snapshot:s("grid")}},w=s("grid");w.pages[0].widgets[0]=e("grid",{title:"Regional revenue by channel",groupBy:["region"],pivotBy:["channel"],totals:"bottom",w:12,h:10});const i={args:{snapshot:w}},d={args:{snapshot:s("kpi")}},c={args:{snapshot:s("chart")}},b=a();b.pages[0].widgets=[e("chart",{title:"Revenue by region",chartType:"donut",dimension:"region",x:0,y:0,w:6,h:8,showLegend:!0,showTotal:!0}),e("kpi",{title:"Total revenue",x:6,y:0,w:3,h:3}),e("kpi",{title:"Total orders",measure:"orders",format:{precision:0,abbreviate:!0,prefix:"",suffix:"",align:"right"},x:9,y:0,w:3,h:3}),e("chart",{title:"Revenue by month",chartType:"line",dimension:"month",x:6,y:3,w:6,h:5}),e("grid",{title:"Top products",columns:["product","revenue","profit","orders"],sort:[{field:"revenue",direction:"desc"}],rowLimit:8,x:0,y:8,w:12,h:7})];const p={args:{snapshot:b},parameters:{docs:{description:{story:"A mixed canvas with Highcharts donut and line visualizations, KPI cards, and one detail grid. This demonstrates how analytical widgets can share a canvas without turning every panel into a table."}}}},x=a();x.pages.push({id:"regional-detail",name:"Regional detail",filters:E(),widgets:w.pages[0].widgets});const m={args:{snapshot:x}},l={args:{customHeader:S.jsxs("div",{style:{padding:"var(--signal-space-200)"},children:[S.jsx("strong",{children:"Portfolio analytics"})," · Internal reporting workspace"]})}},g={args:{snapshot:s("commentary"),mentionOptions:["Revenue team","Operations","Finance"]}},O=a();O.filters={logic:"AND",entries:[{id:"region-filter",field:"region",operator:"eq",value:"Europe"}]};const h={args:{snapshot:O}},u={args:{snapshot:s("commentary")}},v={args:{readOnly:!0,embedded:!0}},y={args:{readOnly:!0,embedded:!1}},C={args:{showSaveButton:!1,showAddWidgetButton:!1,showWidgetSettings:!1,showCanvasFilterButton:!1}},f={args:{snapshot:M({version:1,name:"Migrated report",widgets:[]}).snapshot}},N=["Default","BlankCanvas","CanvasWithGrid","CanvasWithConfiguredGrid","CanvasWithKpi","CanvasWithChart","CanvasWithMultipleGrids","MultiPageCanvas","CanvasWithHeaderComponent","CanvasWithMentionOptions","WithGlobalFilters","WithCommentaryCallbacks","EmbeddedReadOnly","ReadOnlyCanvas","HiddenEditingControls","MigratedFromV1"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotWith()
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotWith('grid')
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: configured
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotWith('kpi')
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotWith('chart')
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: mixedWidgets
  },
  parameters: {
    docs: {
      description: {
        story: 'A mixed canvas with Highcharts donut and line visualizations, KPI cards, and one detail grid. This demonstrates how analytical widgets can share a canvas without turning every panel into a table.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: multiple
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    customHeader: <div style={{
      padding: 'var(--signal-space-200)'
    }}><strong>Portfolio analytics</strong> · Internal reporting workspace</div>
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotWith('commentary'),
    mentionOptions: ['Revenue team', 'Operations', 'Finance']
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: filtered
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: snapshotWith('commentary')
  }
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    embedded: true
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    embedded: false
  }
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    showSaveButton: false,
    showAddWidgetButton: false,
    showWidgetSettings: false,
    showCanvasFilterButton: false
  }
}`,...C.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: migrateV1ToV2({
      version: 1,
      name: 'Migrated report',
      widgets: []
    }).snapshot
  }
}`,...f.parameters?.docs?.source}}};export{n as BlankCanvas,c as CanvasWithChart,i as CanvasWithConfiguredGrid,o as CanvasWithGrid,l as CanvasWithHeaderComponent,d as CanvasWithKpi,g as CanvasWithMentionOptions,p as CanvasWithMultipleGrids,t as Default,v as EmbeddedReadOnly,C as HiddenEditingControls,f as MigratedFromV1,m as MultiPageCanvas,y as ReadOnlyCanvas,u as WithCommentaryCallbacks,h as WithGlobalFilters,N as __namedExportsOrder,q as default};
