import{r as q,e as P,f as O,j as e,g as F,S as L}from"./iframe--_k5KNLb.js";import{C as B}from"./CanvasV2-BaZTxqhz.js";import{d as N,i as D}from"./context-CWY0lBqE.js";import{u as V,a as W,S as M,B as T,b as A,F as E,C as U,T as G,c as _,d as x,e as j}from"./TabTrigger-Cgni7mzk.js";import{B as f,T as p,I as H,a as z,C as Q}from"./Switch-XczNmwRq.js";import{A as X,D as Y}from"./Visible-Cx233rT1.js";import{S as R}from"./StackLayout-CHTwAaRb.js";const $=q.forwardRef(function(u,o){const{"aria-labelledby":d,id:t,onFocus:i,onMouseDown:g,...c}=u,r=P(t),{focused:v,selected:y,tabId:k,registerAction:b,value:w}=V(),{activeTab:h}=W();O(()=>{if(r)return b(r)},[b,r]);const n=()=>{k&&(h.current={id:k,value:w})},a=s=>{i?.(s),n()},l=s=>{g?.(s),n()};return e.jsx(f,{id:r,"aria-labelledby":F(d,k,r),tabIndex:v||y?void 0:-1,appearance:"transparent",sentiment:"neutral",ref:o,onFocus:a,onMouseDown:l,...c})}),C=[{id:"commerce",name:"Commerce",description:"Revenue, orders and regional performance"},{id:"operations",name:"Operations",description:"Service and delivery metrics"}];function S({models:m=C,status:u="ready",error:o="Unable to load models",onOpen:d,onRetry:t}){const[i,g]=q.useState(""),c=m.filter(r=>(r.name+" "+r.description).toLowerCase().includes(i.toLowerCase()));return e.jsxs(R,{padding:3,gap:3,children:[e.jsx(p,{as:"h1",styleAs:"h2",children:"Explore your data"}),e.jsx(p,{color:"secondary",children:"Choose a model to open an analytical canvas."}),e.jsx(H,{value:i,inputProps:{"aria-label":"Search models",onChange:r=>g(r.target.value)},placeholder:"Search models"}),u==="loading"?e.jsx(z,{"aria-label":"Loading models"}):u==="error"?e.jsxs(T,{status:"error",children:[e.jsx(A,{children:o}),t&&e.jsx(f,{onClick:t,children:"Retry"})]}):c.length?e.jsx(E,{children:c.map(r=>e.jsx(U,{style:{width:280,padding:"var(--salt-spacing-200)"},children:e.jsxs(R,{gap:2,children:[e.jsx(Y,{"aria-hidden":!0}),e.jsx(p,{as:"h2",styleAs:"h3",children:r.name}),e.jsx(p,{children:r.description}),e.jsxs(f,{sentiment:"accented",onClick:()=>d(r),children:["Open ",r.name]})]})},r.id))}):e.jsx(p,{role:"status",children:m.length?"No matching models. Try another search.":"No models available."})]})}function I({tabs:m,active:u,onSelect:o,onClose:d}){return e.jsx(G,{value:u,onChange:(t,i)=>o(i),children:e.jsxs(_,{children:[e.jsx(x,{value:"home",children:e.jsx(j,{children:"Home"})}),m.map(t=>e.jsxs(x,{value:t.id,children:[e.jsx(j,{children:t.name}),e.jsx($,{"aria-label":`Close ${t.name}`,onClick:()=>d(t.id),children:e.jsx(Q,{"aria-hidden":!0})})]},t.id))]})})}function J({models:m=C,status:u="ready",initialViews:o=[],dataConfig:d,onSave:t,onRetry:i}){const g=q.useMemo(()=>o.map(n=>N(n)),[o]),[c,r]=q.useState(()=>g.map(n=>n.snapshot)),[v,y]=q.useState("home"),[k,b]=q.useState("");function w(n){const a=D();a.name=n.name,r(l=>[...l,a]),y(a.id)}function h(n){r(a=>a.filter(l=>l.id!==n)),v===n&&y("home")}return e.jsx(L,{children:e.jsxs("div",{className:"workspace",children:[e.jsx(M,{padding:2,startItem:e.jsx(p,{styleAs:"h3",children:"RapidBI workspace"}),endItem:e.jsxs(f,{appearance:"transparent",onClick:()=>y("home"),children:[e.jsx(X,{"aria-hidden":!0}),"Open model"]})}),e.jsx(I,{tabs:c,active:v,onSelect:y,onClose:h}),g.some(n=>n.warnings.length>0)&&e.jsx(T,{status:"warning",children:e.jsx(A,{children:"Legacy snapshots were migrated. Review filters and formatting before saving."})}),k&&e.jsx(p,{role:"status",children:k}),v==="home"?e.jsx(S,{models:m,status:u,onOpen:w,onRetry:i}):c.filter(n=>n.id===v).map(n=>e.jsx(B,{snapshot:n,embedded:!0,dataConfig:d,onConfigChanged:a=>r(l=>l.map(s=>s.id===n.id?a.new:s)),onSave:a=>{r(l=>l.map(s=>s.id===a.id?a:s)),t?.(a),b(`${a.name} saved in this workspace`)}},n.id))]})})}S.__docgenInfo={description:"",methods:[],displayName:"HomePanel",props:{models:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{id:string;name:string;description:string}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}}]}}],raw:"WorkspaceModel[]"},description:"",defaultValue:{value:"[{id:'commerce',name:'Commerce',description:'Revenue, orders and regional performance'},{id:'operations',name:'Operations',description:'Service and delivery metrics'}]",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'ready'|'loading'|'error'",elements:[{name:"literal",value:"'ready'"},{name:"literal",value:"'loading'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'ready'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Unable to load models'",computed:!1}},onOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"(model:WorkspaceModel)=>void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{id:string;name:string;description:string}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}}]}},name:"model"}],return:{name:"void"}}},description:""},onRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"()=>void",signature:{arguments:[],return:{name:"void"}}},description:""}}};I.__docgenInfo={description:"",methods:[],displayName:"Tabstrip",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{id:string;name:string}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:"WorkspaceTab[]"},description:""},active:{required:!0,tsType:{name:"string"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(id:string)=>void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"(id:string)=>void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};J.__docgenInfo={description:"",methods:[],displayName:"CanvasWorkspace",props:{models:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{id:string;name:string;description:string}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}}]}}],raw:"WorkspaceModel[]"},description:"",defaultValue:{value:"[{id:'commerce',name:'Commerce',description:'Revenue, orders and regional performance'},{id:'operations',name:'Operations',description:'Service and delivery metrics'}]",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'ready'|'loading'|'error'",elements:[{name:"literal",value:"'ready'"},{name:"literal",value:"'loading'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'ready'",computed:!1}},initialViews:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"unknown[]"},description:"",defaultValue:{value:"[]",computed:!1}},dataConfig:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| "relative"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"in"'},{name:"literal",value:'"notIn"'},{name:"literal",value:'"contains"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"between"'},{name:"literal",value:'"relative"'}],required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!1}}]}}],raw:"Filter[]",required:!0}}]},required:!0}},{key:"columns",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"groupBy",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"pivotBy",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"sort",value:{name:"Array",elements:[{name:"signature",type:"object",raw:'{ field: string; direction: "asc" | "desc" }',signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"direction",value:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}],required:!0}}]}}],raw:'{ field: string; direction: "asc" | "desc" }[]',required:!0}},{key:"topN",value:{name:"number",required:!0}},{key:"other",value:{name:"boolean",required:!0}},{key:"totals",value:{name:"union",raw:'"none" | "top" | "bottom"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}],required:!0}},{key:"rowLimit",value:{name:"number",required:!0}},{key:"perGroupLimit",value:{name:"number",required:!0}},{key:"groupDisplay",value:{name:"union",raw:'"singleColumn" | "multipleColumns" | "groupRows"',elements:[{name:"literal",value:'"singleColumn"'},{name:"literal",value:'"multipleColumns"'},{name:"literal",value:'"groupRows"'}],required:!0}},{key:"groupsOpen",value:{name:"boolean",required:!0}},{key:"preventLastExpand",value:{name:"boolean",required:!0}},{key:"columnGroupHeaders",value:{name:"boolean",required:!0}},{key:"splitCell",value:{name:"boolean",required:!0}},{key:"delta",value:{name:"boolean",required:!0}},{key:"format",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"left",value:{name:"string",required:!0}},{key:"op",value:{name:"union",raw:'"+" | "-" | "*" | "/"',elements:[{name:"literal",value:'"+"'},{name:"literal",value:'"-"'},{name:"literal",value:'"*"'},{name:"literal",value:'"/"'}],required:!0}},{key:"right",value:{name:"string",required:!0}}]}}],raw:"Computed[]",required:!0}},{key:"content",value:{name:"string",required:!0}},{key:"comments",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!0}},{key:"palette",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"namedColors",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!0}},{key:"showLegend",value:{name:"boolean",required:!0}},{key:"legendPosition",value:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!0}},{key:"legendAlign",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!0}},{key:"showLabels",value:{name:"boolean",required:!0}},{key:"labelMode",value:{name:"union",raw:'"value" | "name" | "percent" | "name-value"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"name"'},{name:"literal",value:'"percent"'},{name:"literal",value:'"name-value"'}],required:!0}},{key:"stacking",value:{name:"union",raw:'"" | "normal" | "percent"',elements:[{name:"literal",value:'""'},{name:"literal",value:'"normal"'},{name:"literal",value:'"percent"'}],required:!0}},{key:"stackBy",value:{name:"string",required:!0}},{key:"drillFields",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"axisTitles",value:{name:"boolean",required:!0}},{key:"gridlines",value:{name:"boolean",required:!0}},{key:"animation",value:{name:"boolean",required:!0}},{key:"lineWidth",value:{name:"number",required:!0}},{key:"dashStyle",value:{name:"string",required:!0}},{key:"markers",value:{name:"boolean",required:!0}},{key:"opacity",value:{name:"number",required:!0}},{key:"barRadius",value:{name:"number",required:!0}},{key:"barPadding",value:{name:"number",required:!0}},{key:"innerSize",value:{name:"number",required:!0}},{key:"showTotal",value:{name:"boolean",required:!0}},{key:"axisX",value:{name:"string",required:!0}},{key:"axisY",value:{name:"string",required:!0}},{key:"customOptions",value:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>",required:!1}}]}}],raw:"Widget[]",required:!0}},{key:"filters",value:{name:"signature",type:"object",raw:'{ logic: "AND" | "OR"; entries: Filter[] }',signature:{properties:[{key:"logic",value:{name:"union",raw:'"AND" | "OR"',elements:[{name:"literal",value:'"AND"'},{name:"literal",value:'"OR"'}],required:!0}},{key:"entries",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| "relative"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"in"'},{name:"literal",value:'"notIn"'},{name:"literal",value:'"contains"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"between"'},{name:"literal",value:'"relative"'}],required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!1}}]}}],raw:"Filter[]",required:!0}}]},required:!0}},{key:"updatedAt",value:{name:"string",required:!0}}]}},name:"snapshot"}],return:{name:"void"}}},description:""},onRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"()=>void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{J as C,S as H,I as T,C as d};
