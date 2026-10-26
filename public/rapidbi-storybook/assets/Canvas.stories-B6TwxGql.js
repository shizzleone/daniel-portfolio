import{C as b}from"./CanvasV2-MlPgMf0m.js";import{i as r,m as y}from"./context-C2z6mL_X.js";import"./iframe-BIBoYb_3.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-BV6yJrff.js";import"./index-B1FCJnwq.js";import"./icons-BgjLwcp4.js";import"./Assistant-Bqve2ul6.js";import"./registry-DcJxAdRt.js";import"./FilterEditor-BlgiQbhd.js";import"./WidgetSettings-DlEZj8aF.js";import"./widgets-CLkg4Iz2.js";import"./index-CkT8kT-3.js";const I={title:"Components/Canvas",tags:["autodocs"],args:{embedded:!0},component:b},s={args:{snapshot:r()}},e={args:{snapshot:r(),readOnly:!0}},a={args:{snapshot:r(),embedded:!0}},C=r();C.pages[0].widgets=[];const o={args:{snapshot:C}},S=r();S.filters={logic:"AND",entries:[{id:"none",field:"region",operator:"eq",value:"No such region"}]};const t={args:{snapshot:S}},u=r();u.pages[0].widgets=[y("chart",{source:"looker",y:0,w:12})];const n={args:{snapshot:u}};for(const l of["grid","chart","kpi","commentary"]);const h=l=>{const f=r();return f.pages[0].widgets=[y(l,{y:0,w:12,h:10})],f},c={args:{snapshot:h("grid")}},p={args:{snapshot:h("chart")}},i={args:{snapshot:h("kpi")}},m={args:{snapshot:h("commentary")}},d={args:{snapshot:u,dataConfig:{baseUrl:"https://fixture.invalid",fetcher:()=>new Promise(()=>{})}}},g={args:{snapshot:u,dataConfig:{baseUrl:"https://fixture.invalid",fetcher:async()=>new Response('{"error":"Access denied"}',{status:403})}}},K=["Commerce","ReadOnly","Embedded","Empty","NoData","ConnectionError","Grid","Chart","KPI","Commentary","Loading","NoPermission"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: initialSnapshot()
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: initialSnapshot(),
    readOnly: true
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: initialSnapshot(),
    embedded: true
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: empty
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: noData
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: error
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: single("grid")
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: single("chart")
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: single("kpi")
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: single("commentary")
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: error,
    dataConfig: {
      baseUrl: 'https://fixture.invalid',
      fetcher: () => new Promise(() => {})
    }
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot: error,
    dataConfig: {
      baseUrl: 'https://fixture.invalid',
      fetcher: async () => new Response('{"error":"Access denied"}', {
        status: 403
      })
    }
  }
}`,...g.parameters?.docs?.source}}};export{p as Chart,m as Commentary,s as Commerce,n as ConnectionError,a as Embedded,o as Empty,c as Grid,i as KPI,d as Loading,t as NoData,g as NoPermission,e as ReadOnly,K as __namedExportsOrder,I as default};
