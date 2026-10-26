import{r as k,j as e}from"./iframe-dLOVGGP0.js";import{a as w,T as C,X as T,A as h,C as O,b as N}from"./icons-NBmqPU-d.js";import{I as f,B as x}from"./primitives-DY5zTx-Y.js";import{m as A,p as F,h as z,b as q,c as I}from"./context-vOTQpr3y.js";import{c as R}from"./registry-DKf4ZMpU.js";function P(a){if(typeof a=="string"){const s=a.replace(/^```(?:json)?\s*/,"").replace(/\s*```$/,"");a=JSON.parse(s)}if(!a||typeof a!="object")throw Error("Assistant returned invalid JSON");return JSON.parse(JSON.stringify(a),(s,r)=>["__proto__","constructor","prototype"].includes(s)?void 0:r)}function j(a,s){if(!Array.isArray(a)||a.length>12)throw Error("Assistant returned an invalid action list");return a.map(r=>{if(!["create","update","delete"].includes(r.op))throw Error("Unsupported assistant action");if(r.op!=="create"&&!s.pages.flatMap(t=>t.widgets).some(t=>t.id===r.target))throw Error("Assistant target not found");if(r.widget){if(r.widget.type&&!["chart","grid","kpi","commentary"].includes(r.widget.type))throw Error("Unsupported widget type");if(r.widget.measure&&!q.some(t=>t.key===r.widget.measure))throw Error("Unknown measure");if(r.widget.dimension&&!q.some(t=>t.key===r.widget.dimension))throw Error("Unknown dimension");r.widget.chartType&&!R.some(t=>t.id===r.widget.chartType)&&(r.widget.chartType="column")}return r})}async function L(a,s,r=z){if(r.config.aiBaseUrl){const n=await r.request("/classify-intent",{query:a,snapshot:s},r.config.aiBaseUrl),g=P(await r.request("/execute-action",{intent:n,snapshot:s},r.config.aiBaseUrl)),d=j(g.actions||[],s),c=await r.request("/plan-layout",{actions:d,snapshot:s},r.config.aiBaseUrl);return Array.isArray(c.widgets)&&d.forEach(y=>{const p=c.widgets.find(u=>u.id===y.widget?.id);p&&y.widget&&Object.assign(y.widget,{x:p.x,y:p.y,w:p.w,h:p.h})}),{message:String(g.message||"Your changes are ready to review.").slice(0,4e3),actions:d}}const t=a.toLowerCase(),l=s.pages.find(n=>n.id===s.activePage).widgets.find(n=>t.includes(n.title.toLowerCase()));if(/\b(delete|remove)\b/.test(t))return l?{message:`Ready to remove “${l.title}”. Review and apply below.`,actions:[{op:"delete",target:l.id}]}:{message:"Include the exact widget title to remove it, for example “Delete Revenue over time”.",actions:[]};if(/\brename\b/.test(t)&&l){const n=a.split(/\bto\b/i).at(-1)?.trim().replace(/^['"]|['"]$/g,"");return{message:`Ready to rename “${l.title}” to “${n}”.`,actions:[{op:"update",target:l.id,widget:{title:n}}]}}if(/\b(add|create|build|show|make|change|update)\b/.test(t)){const n=q.filter(u=>u.type==="number").find(u=>t.includes(u.key))?.key||"revenue",g=q.filter(u=>u.type!=="number").find(u=>t.includes(`by ${u.key}`))?.key||"month",d=/\b(kpi|metric|number)\b/.test(t)?"kpi":/\b(grid|table)\b/.test(t)?"grid":/\b(note|commentary|text)\b/.test(t)?"commentary":"chart",c=R.find(u=>t.includes(u.id))?.id||"column",y=`${q.find(u=>u.key===n)?.label} ${d==="kpi"?"total":`by ${g}`}`,p=A(d,{title:y,measure:n,dimension:g,chartType:c,content:`<p>${a.replace(/[<>]/g,"")}</p>`,format:{precision:0,abbreviate:!0,prefix:["revenue","cost","profit"].includes(n)?"$":"",suffix:"",align:"right"}});return{message:`I prepared a ${d==="chart"?c+" chart":d} using ${n}${d==="kpi"?"":` grouped by ${g}`}.`,actions:[l&&/\b(change|update)\b/.test(t)?{op:"update",target:l.id,widget:{measure:n,dimension:g,chartType:c}}:{op:"create",widget:p}]}}return{message:"Demo assistant supports creating charts, tables, KPIs and notes, plus renaming or deleting widgets by their exact title. Try “Add a bar chart of profit by region”. Connect your AI gateway for open-ended questions and reasoning.",actions:[]}}function U(a,s){const r=structuredClone(a),t=r.pages.find(o=>o.id===r.activePage);for(const o of j(s,a))if(o.op==="create"){const l=A(o.widget?.type||"chart",o.widget);l.y=Math.max(0,...t.widgets.map(n=>n.y+n.h)),t.widgets.push(l)}else o.op==="delete"?r.pages.forEach(l=>l.widgets=l.widgets.filter(n=>n.id!==o.target)):r.pages.forEach(l=>l.widgets=l.widgets.map(n=>n.id===o.target?{...n,...o.widget,id:n.id}:n));return F(r)}function D(){try{return JSON.parse(localStorage.getItem("rapidbi:chat")||"[]").filter(a=>["user","assistant"].includes(a.role)&&typeof a.text=="string").slice(-30).map(a=>({role:a.role,text:a.text.slice(0,4e3)}))}catch{return[]}}function E({snapshot:a,onApply:s,onClose:r,readOnly:t}){const o=I(),[l,n]=k.useState(D),[g,d]=k.useState(""),[c,y]=k.useState(!1),p=k.useRef(null);k.useEffect(()=>{localStorage.setItem("rapidbi:chat",JSON.stringify(l.slice(-30).map(({role:i,text:v})=>({role:i,text:v})))),p.current?.scrollIntoView({behavior:"smooth",block:"nearest"})},[l]);async function u(i=g){if(!(!i.trim()||c)){d(""),n(v=>[...v,{role:"user",text:i}]),y(!0);try{const v=await L(i,a,o);n(m=>[...m,{role:"assistant",text:v.message,result:v}])}catch(v){n(m=>[...m,{role:"assistant",text:`I couldn’t complete that request: ${v.message}`}])}finally{y(!1)}}}return e.jsxs("aside",{className:"assistant",children:[e.jsxs("div",{className:"assistant-header",children:[e.jsx("span",{className:"assistant-icon",children:e.jsx(w,{size:18})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Rapid assistant"}),e.jsx("small",{children:o.config.aiBaseUrl?"Connected AI gateway":"Demo assistant · local commands"})]}),e.jsx(f,{label:"Clear chat history",onClick:()=>n([]),children:e.jsx(C,{size:15})}),e.jsx(f,{label:"Close assistant",onClick:r,children:e.jsx(T,{size:17})})]}),e.jsxs("div",{className:"messages",children:[!l.length&&e.jsxs("div",{className:"assistant-welcome",children:[e.jsx("div",{className:"large-spark",children:e.jsx(w,{size:26})}),e.jsxs("h3",{children:["A little help.",e.jsx("br",{}),"A lot of clarity."]}),e.jsx("p",{children:"Turn a question into your next view."}),["Add a bar chart of profit by region","Create a KPI for total orders","Show revenue by channel as a donut"].map(i=>e.jsxs("button",{onClick:()=>u(i),children:[i,e.jsx(h,{size:14})]},i))]}),l.map((i,v)=>e.jsxs("div",{className:`message ${i.role}`,children:[e.jsx("small",{children:i.role==="user"?"You":"Rapid assistant"}),e.jsx("p",{children:i.text}),!!i.result?.actions.length&&e.jsxs("div",{className:"ai-plan",children:[i.result.actions.map((m,b)=>e.jsxs("div",{children:[m.op==="create"?"+":m.op==="delete"?"−":"↻"," ",m.widget?.title||m.widget?.chartType||m.target?.slice(0,8)]},b)),e.jsx(x,{disabled:i.applied||t,size:"sm",onClick:()=>{try{s(i.result),n(m=>m.map((b,S)=>S===v?{...b,applied:!0}:b))}catch(m){n(b=>[...b,{role:"assistant",text:m.message}])}},children:i.applied?e.jsxs(e.Fragment,{children:[e.jsx(O,{size:14}),"Applied"]}):"Apply changes"})]})]},v)),c&&e.jsxs("div",{className:"message assistant-message",children:[e.jsx(N,{size:16,className:"spin"})," Preparing your view…"]}),e.jsx("div",{ref:p})]}),e.jsxs("form",{className:"chat-input",onSubmit:i=>{i.preventDefault(),u()},children:[e.jsx("textarea",{"aria-label":"Ask the assistant",placeholder:"What would you like to explore?",value:g,onChange:i=>d(i.target.value),onKeyDown:i=>{i.key==="Enter"&&!i.shiftKey&&(i.preventDefault(),u())},rows:2}),e.jsx(x,{size:"icon","aria-label":"Send message",disabled:c||!g.trim(),children:e.jsx(h,{size:17})}),e.jsx("small",{children:"Changes are previewed before applying."})]})]})}E.__docgenInfo={description:"",methods:[],displayName:"Assistant",props:{snapshot:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| "relative"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"in"'},{name:"literal",value:'"notIn"'},{name:"literal",value:'"contains"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"between"'},{name:"literal",value:'"relative"'}],required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!1}}]}}],raw:"Filter[]",required:!0}}]},required:!0}},{key:"updatedAt",value:{name:"string",required:!0}}]}},description:""},onApply:{required:!0,tsType:{name:"signature",type:"function",raw:"(r: AiResult) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ message: string; actions: AiAction[] }",signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"actions",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  op: "create" | "update" | "delete";
  target?: string;
  widget?: Partial<Widget>;
}`,signature:{properties:[{key:"op",value:{name:"union",raw:'"create" | "update" | "delete"',elements:[{name:"literal",value:'"create"'},{name:"literal",value:'"update"'},{name:"literal",value:'"delete"'}],required:!0}},{key:"target",value:{name:"string",required:!1}},{key:"widget",value:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"left",value:{name:"string",required:!0}},{key:"op",value:{name:"union",raw:'"+" | "-" | "*" | "/"',elements:[{name:"literal",value:'"+"'},{name:"literal",value:'"-"'},{name:"literal",value:'"*"'},{name:"literal",value:'"/"'}],required:!0}},{key:"right",value:{name:"string",required:!0}}]}}],raw:"Computed[]",required:!0}},{key:"content",value:{name:"string",required:!0}},{key:"comments",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!0}},{key:"palette",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"namedColors",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!0}},{key:"showLegend",value:{name:"boolean",required:!0}},{key:"legendPosition",value:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!0}},{key:"legendAlign",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!0}},{key:"showLabels",value:{name:"boolean",required:!0}},{key:"labelMode",value:{name:"union",raw:'"value" | "name" | "percent" | "name-value"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"name"'},{name:"literal",value:'"percent"'},{name:"literal",value:'"name-value"'}],required:!0}},{key:"stacking",value:{name:"union",raw:'"" | "normal" | "percent"',elements:[{name:"literal",value:'""'},{name:"literal",value:'"normal"'},{name:"literal",value:'"percent"'}],required:!0}},{key:"stackBy",value:{name:"string",required:!0}},{key:"drillFields",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"axisTitles",value:{name:"boolean",required:!0}},{key:"gridlines",value:{name:"boolean",required:!0}},{key:"animation",value:{name:"boolean",required:!0}},{key:"lineWidth",value:{name:"number",required:!0}},{key:"dashStyle",value:{name:"string",required:!0}},{key:"markers",value:{name:"boolean",required:!0}},{key:"opacity",value:{name:"number",required:!0}},{key:"barRadius",value:{name:"number",required:!0}},{key:"barPadding",value:{name:"number",required:!0}},{key:"innerSize",value:{name:"number",required:!0}},{key:"showTotal",value:{name:"boolean",required:!0}},{key:"chartOrientation",value:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}],required:!0}},{key:"markerSize",value:{name:"number",required:!0}},{key:"tickLabels",value:{name:"boolean",required:!0}},{key:"sortOrder",value:{name:"union",raw:'"default" | "asc" | "desc"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}],required:!0}},{key:"heatmapY",value:{name:"string",required:!0}},{key:"groupSmallSlices",value:{name:"boolean",required:!0}},{key:"smallSliceThreshold",value:{name:"number",required:!0}},{key:"kpiSubtitle",value:{name:"string",required:!0}},{key:"showKpiSubtitle",value:{name:"boolean",required:!0}},{key:"showKpiTrend",value:{name:"boolean",required:!0}},{key:"kpiTarget",value:{name:"number",required:!0}},{key:"kpiFontSize",value:{name:"number",required:!0}},{key:"axisX",value:{name:"string",required:!0}},{key:"axisY",value:{name:"string",required:!0}},{key:"customOptions",value:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>",required:!1}}]}}],raw:"Partial<Widget>",required:!1}}]}}],raw:"AiAction[]",required:!0}}]}},name:"r"}],return:{name:"void"}}},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};export{E as A,U as a};
