import{r as g,j as e,S as T}from"./iframe-BxPDHca9.js";import{B as q,T as C}from"./primitives-DNBEsqbp.js";import{P as S,D as A,X as N}from"./icons-O3LJ5nk1.js";import{C as O}from"./CanvasV2-4NYRkP0w.js";import{d as P,i as F}from"./context-BQyxeM8Z.js";const w=[{id:"commerce",name:"Commerce",description:"Revenue, orders and regional performance"},{id:"operations",name:"Operations",description:"Service and delivery metrics"}];function h({models:s=w,status:i="ready",error:l="Unable to load models",onOpen:o,onRetry:a}){const[c,k]=g.useState(""),m=s.filter(n=>(n.name+" "+n.description).toLowerCase().includes(c.toLowerCase()));return e.jsxs("main",{className:"workspace-home",children:[e.jsx("h1",{children:"Explore your data"}),e.jsx("p",{children:"Choose a model to open an analytical canvas."}),e.jsx(C,{value:c,"aria-label":"Search models",onChange:n=>k(n.target.value),placeholder:"Search models"}),i==="loading"?e.jsx("div",{className:"signal-spinner","aria-label":"Loading models"}):i==="error"?e.jsxs("div",{className:"signal-banner error",role:"alert",children:[l,a&&e.jsx(q,{onClick:a,children:"Retry"})]}):m.length?e.jsx("div",{className:"workspace-models",children:m.map(n=>e.jsxs("article",{className:"workspace-model-card",children:[e.jsx(A,{"aria-hidden":!0}),e.jsx("h2",{children:n.name}),e.jsx("p",{children:n.description}),e.jsxs(q,{onClick:()=>o(n),children:["Open ",n.name]})]},n.id))}):e.jsx("p",{role:"status",children:s.length?"No matching models. Try another search.":"No models available."})]})}function f({tabs:s,active:i,onSelect:l,onClose:o}){return e.jsxs("div",{className:"workspace-tabs",role:"tablist",children:[e.jsx("button",{role:"tab","aria-selected":i==="home",className:i==="home"?"active":"",onClick:()=>l("home"),children:"Home"}),s.map(a=>e.jsxs("div",{className:`workspace-tab ${i===a.id?"active":""}`,children:[e.jsx("button",{role:"tab","aria-selected":i===a.id,onClick:()=>l(a.id),children:a.name}),e.jsx("button",{className:"workspace-tab-close","aria-label":`Close ${a.name}`,onClick:()=>o(a.id),children:e.jsx(N,{"aria-hidden":!0})})]},a.id))]})}function L({models:s=w,status:i="ready",initialViews:l=[],dataConfig:o,onSave:a,onRetry:c}){const{accent:k}=useTheme(),m=g.useMemo(()=>l.map(r=>P(r)),[l]),[n,v]=g.useState(()=>m.map(r=>r.snapshot)),[p,y]=g.useState("home"),[b,x]=g.useState("");function R(r){const t=F();t.name=r.name,v(u=>[...u,t]),y(t.id)}function j(r){v(t=>t.filter(u=>u.id!==r)),p===r&&y("home")}return e.jsx(T,{accent:k,children:e.jsxs("div",{className:"workspace",children:[e.jsxs("div",{className:"workspace-toolbar",children:[e.jsx("strong",{children:"Signal BI workspace"}),e.jsxs(q,{variant:"ghost",onClick:()=>y("home"),children:[e.jsx(S,{"aria-hidden":!0}),"Open model"]})]}),e.jsx(f,{tabs:n,active:p,onSelect:y,onClose:j}),m.some(r=>r.warnings.length>0)&&e.jsx("div",{className:"signal-banner warning",children:"Legacy snapshots were migrated. Review filters and formatting before saving."}),b&&e.jsx("p",{role:"status",children:b}),p==="home"?e.jsx(h,{models:s,status:i,onOpen:R,onRetry:c}):n.filter(r=>r.id===p).map(r=>e.jsx(O,{snapshot:r,embedded:!0,dataConfig:o,onConfigChanged:t=>v(u=>u.map(d=>d.id===r.id?t.new:d)),onSave:t=>{v(u=>u.map(d=>d.id===t.id?t:d)),a?.(t),x(`${t.name} saved in this workspace`)}},r.id))]})})}h.__docgenInfo={description:"",methods:[],displayName:"HomePanel",props:{models:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{id:string;name:string;description:string}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}}]}}],raw:"WorkspaceModel[]"},description:"",defaultValue:{value:"[{id:'commerce',name:'Commerce',description:'Revenue, orders and regional performance'},{id:'operations',name:'Operations',description:'Service and delivery metrics'}]",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'ready'|'loading'|'error'",elements:[{name:"literal",value:"'ready'"},{name:"literal",value:"'loading'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'ready'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Unable to load models'",computed:!1}},onOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"(model:WorkspaceModel)=>void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{id:string;name:string;description:string}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}}]}},name:"model"}],return:{name:"void"}}},description:""},onRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"()=>void",signature:{arguments:[],return:{name:"void"}}},description:""}}};f.__docgenInfo={description:"",methods:[],displayName:"Tabstrip",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{id:string;name:string}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:"WorkspaceTab[]"},description:""},active:{required:!0,tsType:{name:"string"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(id:string)=>void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"(id:string)=>void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};L.__docgenInfo={description:"",methods:[],displayName:"CanvasWorkspace",props:{models:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{id:string;name:string;description:string}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}}]}}],raw:"WorkspaceModel[]"},description:"",defaultValue:{value:"[{id:'commerce',name:'Commerce',description:'Revenue, orders and regional performance'},{id:'operations',name:'Operations',description:'Service and delivery metrics'}]",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'ready'|'loading'|'error'",elements:[{name:"literal",value:"'ready'"},{name:"literal",value:"'loading'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'ready'",computed:!1}},initialViews:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"unknown[]"},description:"",defaultValue:{value:"[]",computed:!1}},dataConfig:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  baseUrl?: string;
  aiBaseUrl?: string;
  dataVistaBaseUrl?: string;
  headers?: Record<string, string>;
  fetcher?: typeof fetch;
  enrichQuery?: (
    query: Record<string, unknown>,
  ) => Promise<Record<string, unknown>>;
  resolveExpression?: (expression: string) => Promise<string>;
  sqlExpressions?: Record<string, string>;
}`,signature:{properties:[{key:"baseUrl",value:{name:"string",required:!1}},{key:"aiBaseUrl",value:{name:"string",required:!1}},{key:"dataVistaBaseUrl",value:{name:"string",required:!1}},{key:"headers",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!1}},{key:"fetcher",value:{name:"fetch",required:!1}},{key:"enrichQuery",value:{name:"signature",type:"function",raw:`(
  query: Record<string, unknown>,
) => Promise<Record<string, unknown>>`,signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"query"}],return:{name:"Promise",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}],raw:"Promise<Record<string, unknown>>"}},required:!1}},{key:"resolveExpression",value:{name:"signature",type:"function",raw:"(expression: string) => Promise<string>",signature:{arguments:[{type:{name:"string"},name:"expression"}],return:{name:"Promise",elements:[{name:"string"}],raw:"Promise<string>"}},required:!1}},{key:"sqlExpressions",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!1}}]}},description:""},onSave:{required:!1,tsType:{name:"signature",type:"function",raw:"(snapshot:Snapshot)=>void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  version: 2;
  id: string;
  name: string;
  description: string;
  pages: Page[];
  activePage: string;
  filters: FilterGroup;
  updatedAt: string;
}`,signature:{properties:[{key:"version",value:{name:"literal",value:"2",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"pages",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  name: string;
  widgets: Widget[];
  filters: FilterGroup;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"widgets",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  type: string;
  title: string;
  x: number;
  y: number;
  w: number;
  h: number;
  source: "synthetic" | "looker" | "elastic";
  model: string;
  explore: string;
  measure: string;
  dimension: string;
  aggregation: string;
  weight: string;
  chartType: string;
  filters: FilterGroup;
  columns: string[];
  groupBy: string[];
  pivotBy: string[];
  pivotTableEnabled: boolean;
  sort: { field: string; direction: "asc" | "desc" }[];
  topN: number;
  other: boolean;
  totals: "none" | "top" | "bottom";
  rowLimit: number;
  perGroupLimit: number;
  groupDisplay: "singleColumn" | "multipleColumns" | "groupRows";
  groupsOpen: boolean;
  preventLastExpand: boolean;
  columnGroupHeaders: boolean;
  splitCell: boolean;
  delta: boolean;
  columnAggregations: Record<string, string>;
  format: Format;
  columnFormats: Record<string, Partial<Format>>;
  columnWidths: Record<string, number>;
  rules: Rule[];
  computed: Computed[];
  content: string;
  comments: Record<string, string>;
  palette: string[];
  namedColors: Record<string, string>;
  showLegend: boolean;
  legendPosition: "top" | "bottom" | "left" | "right";
  legendAlign: "left" | "center" | "right";
  showLabels: boolean;
  labelMode: "value" | "name" | "percent" | "name-value";
  stacking: "" | "normal" | "percent";
  stackBy: string;
  drillFields: string[];
  axisTitles: boolean;
  gridlines: boolean;
  animation: boolean;
  lineWidth: number;
  dashStyle: string;
  markers: boolean;
  opacity: number;
  barRadius: number;
  barPadding: number;
  innerSize: number;
  showTotal: boolean;
  chartOrientation: "vertical" | "horizontal";
  markerSize: number;
  tickLabels: boolean;
  sortOrder: "default" | "asc" | "desc";
  heatmapY: string;
  groupSmallSlices: boolean;
  smallSliceThreshold: number;
  kpiSubtitle: string;
  showKpiSubtitle: boolean;
  showKpiTrend: boolean;
  kpiTarget: number;
  kpiFontSize: number;
  axisX: string;
  axisY: string;
  customOptions?: Record<string, unknown>;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}},{key:"w",value:{name:"number",required:!0}},{key:"h",value:{name:"number",required:!0}},{key:"source",value:{name:"union",raw:'"synthetic" | "looker" | "elastic"',elements:[{name:"literal",value:'"synthetic"'},{name:"literal",value:'"looker"'},{name:"literal",value:'"elastic"'}],required:!0}},{key:"model",value:{name:"string",required:!0}},{key:"explore",value:{name:"string",required:!0}},{key:"measure",value:{name:"string",required:!0}},{key:"dimension",value:{name:"string",required:!0}},{key:"aggregation",value:{name:"string",required:!0}},{key:"weight",value:{name:"string",required:!0}},{key:"chartType",value:{name:"string",required:!0}},{key:"filters",value:{name:"signature",type:"object",raw:'{ logic: "AND" | "OR"; entries: Filter[] }',signature:{properties:[{key:"logic",value:{name:"union",raw:'"AND" | "OR"',elements:[{name:"literal",value:'"AND"'},{name:"literal",value:'"OR"'}],required:!0}},{key:"entries",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  field: string;
  operator: Operator;
  value: string;
  end?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"field",value:{name:"string",required:!0}},{key:"operator",value:{name:"union",raw:`| "eq"
| "neq"
| "in"
| "notIn"
| "contains"
| "gt"
| "lt"
| "between"
| "relative"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"in"'},{name:"literal",value:'"notIn"'},{name:"literal",value:'"contains"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"between"'},{name:"literal",value:'"relative"'}],required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!1}}]}}],raw:"Filter[]",required:!0}}]},required:!0}},{key:"columns",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"groupBy",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"pivotBy",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"pivotTableEnabled",value:{name:"boolean",required:!0}},{key:"sort",value:{name:"Array",elements:[{name:"signature",type:"object",raw:'{ field: string; direction: "asc" | "desc" }',signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"direction",value:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}],required:!0}}]}}],raw:'{ field: string; direction: "asc" | "desc" }[]',required:!0}},{key:"topN",value:{name:"number",required:!0}},{key:"other",value:{name:"boolean",required:!0}},{key:"totals",value:{name:"union",raw:'"none" | "top" | "bottom"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}],required:!0}},{key:"rowLimit",value:{name:"number",required:!0}},{key:"perGroupLimit",value:{name:"number",required:!0}},{key:"groupDisplay",value:{name:"union",raw:'"singleColumn" | "multipleColumns" | "groupRows"',elements:[{name:"literal",value:'"singleColumn"'},{name:"literal",value:'"multipleColumns"'},{name:"literal",value:'"groupRows"'}],required:!0}},{key:"groupsOpen",value:{name:"boolean",required:!0}},{key:"preventLastExpand",value:{name:"boolean",required:!0}},{key:"columnGroupHeaders",value:{name:"boolean",required:!0}},{key:"splitCell",value:{name:"boolean",required:!0}},{key:"delta",value:{name:"boolean",required:!0}},{key:"columnAggregations",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!0}},{key:"format",value:{name:"signature",type:"object",raw:`{
  precision: number;
  abbreviate: boolean;
  prefix: string;
  suffix: string;
  align: "left" | "right" | "center";
}`,signature:{properties:[{key:"precision",value:{name:"number",required:!0}},{key:"abbreviate",value:{name:"boolean",required:!0}},{key:"prefix",value:{name:"string",required:!0}},{key:"suffix",value:{name:"string",required:!0}},{key:"align",value:{name:"union",raw:'"left" | "right" | "center"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"center"'}],required:!0}}]},required:!0}},{key:"columnFormats",value:{name:"Record",elements:[{name:"string"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  precision: number;
  abbreviate: boolean;
  prefix: string;
  suffix: string;
  align: "left" | "right" | "center";
}`,signature:{properties:[{key:"precision",value:{name:"number",required:!0}},{key:"abbreviate",value:{name:"boolean",required:!0}},{key:"prefix",value:{name:"string",required:!0}},{key:"suffix",value:{name:"string",required:!0}},{key:"align",value:{name:"union",raw:'"left" | "right" | "center"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"center"'}],required:!0}}]},required:!0}],raw:"Partial<Format>"}],raw:"Record<string, Partial<Format>>",required:!0}},{key:"columnWidths",value:{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>",required:!0}},{key:"rules",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  field: string;
  operator: "gt" | "lt" | "in" | "notIn";
  value: string;
  color: string;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"operator",value:{name:"union",raw:'"gt" | "lt" | "in" | "notIn"',elements:[{name:"literal",value:'"gt"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"in"'},{name:"literal",value:'"notIn"'}],required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"color",value:{name:"string",required:!0}}]}}],raw:"Rule[]",required:!0}},{key:"computed",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  left: string;
  op: "+" | "-" | "*" | "/";
  right: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"left",value:{name:"string",required:!0}},{key:"op",value:{name:"union",raw:'"+" | "-" | "*" | "/"',elements:[{name:"literal",value:'"+"'},{name:"literal",value:'"-"'},{name:"literal",value:'"*"'},{name:"literal",value:'"/"'}],required:!0}},{key:"right",value:{name:"string",required:!0}}]}}],raw:"Computed[]",required:!0}},{key:"content",value:{name:"string",required:!0}},{key:"comments",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!0}},{key:"palette",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"namedColors",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!0}},{key:"showLegend",value:{name:"boolean",required:!0}},{key:"legendPosition",value:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!0}},{key:"legendAlign",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!0}},{key:"showLabels",value:{name:"boolean",required:!0}},{key:"labelMode",value:{name:"union",raw:'"value" | "name" | "percent" | "name-value"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"name"'},{name:"literal",value:'"percent"'},{name:"literal",value:'"name-value"'}],required:!0}},{key:"stacking",value:{name:"union",raw:'"" | "normal" | "percent"',elements:[{name:"literal",value:'""'},{name:"literal",value:'"normal"'},{name:"literal",value:'"percent"'}],required:!0}},{key:"stackBy",value:{name:"string",required:!0}},{key:"drillFields",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"axisTitles",value:{name:"boolean",required:!0}},{key:"gridlines",value:{name:"boolean",required:!0}},{key:"animation",value:{name:"boolean",required:!0}},{key:"lineWidth",value:{name:"number",required:!0}},{key:"dashStyle",value:{name:"string",required:!0}},{key:"markers",value:{name:"boolean",required:!0}},{key:"opacity",value:{name:"number",required:!0}},{key:"barRadius",value:{name:"number",required:!0}},{key:"barPadding",value:{name:"number",required:!0}},{key:"innerSize",value:{name:"number",required:!0}},{key:"showTotal",value:{name:"boolean",required:!0}},{key:"chartOrientation",value:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}],required:!0}},{key:"markerSize",value:{name:"number",required:!0}},{key:"tickLabels",value:{name:"boolean",required:!0}},{key:"sortOrder",value:{name:"union",raw:'"default" | "asc" | "desc"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}],required:!0}},{key:"heatmapY",value:{name:"string",required:!0}},{key:"groupSmallSlices",value:{name:"boolean",required:!0}},{key:"smallSliceThreshold",value:{name:"number",required:!0}},{key:"kpiSubtitle",value:{name:"string",required:!0}},{key:"showKpiSubtitle",value:{name:"boolean",required:!0}},{key:"showKpiTrend",value:{name:"boolean",required:!0}},{key:"kpiTarget",value:{name:"number",required:!0}},{key:"kpiFontSize",value:{name:"number",required:!0}},{key:"axisX",value:{name:"string",required:!0}},{key:"axisY",value:{name:"string",required:!0}},{key:"customOptions",value:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>",required:!1}}]}}],raw:"Widget[]",required:!0}},{key:"filters",value:{name:"signature",type:"object",raw:'{ logic: "AND" | "OR"; entries: Filter[] }',signature:{properties:[{key:"logic",value:{name:"union",raw:'"AND" | "OR"',elements:[{name:"literal",value:'"AND"'},{name:"literal",value:'"OR"'}],required:!0}},{key:"entries",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  field: string;
  operator: Operator;
  value: string;
  end?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"field",value:{name:"string",required:!0}},{key:"operator",value:{name:"union",raw:`| "eq"
| "neq"
| "in"
| "notIn"
| "contains"
| "gt"
| "lt"
| "between"
| "relative"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"in"'},{name:"literal",value:'"notIn"'},{name:"literal",value:'"contains"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"between"'},{name:"literal",value:'"relative"'}],required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!1}}]}}],raw:"Filter[]",required:!0}}]},required:!0}}]}}],raw:"Page[]",required:!0}},{key:"activePage",value:{name:"string",required:!0}},{key:"filters",value:{name:"signature",type:"object",raw:'{ logic: "AND" | "OR"; entries: Filter[] }',signature:{properties:[{key:"logic",value:{name:"union",raw:'"AND" | "OR"',elements:[{name:"literal",value:'"AND"'},{name:"literal",value:'"OR"'}],required:!0}},{key:"entries",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  field: string;
  operator: Operator;
  value: string;
  end?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"field",value:{name:"string",required:!0}},{key:"operator",value:{name:"union",raw:`| "eq"
| "neq"
| "in"
| "notIn"
| "contains"
| "gt"
| "lt"
| "between"
| "relative"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"in"'},{name:"literal",value:'"notIn"'},{name:"literal",value:'"contains"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"between"'},{name:"literal",value:'"relative"'}],required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!1}}]}}],raw:"Filter[]",required:!0}}]},required:!0}},{key:"updatedAt",value:{name:"string",required:!0}}]}},name:"snapshot"}],return:{name:"void"}}},description:""},onRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"()=>void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{L as C,h as H,f as T,w as d};
