import{j as n,r as m}from"./iframe-BxPDHca9.js";import{S as o,B as h,T as v,I as k}from"./primitives-DNBEsqbp.js";import{P as q,T as x}from"./icons-O3LJ5nk1.js";import{b as g,u as f,c as j}from"./context-BQyxeM8Z.js";const w=[{value:"eq",label:"is"},{value:"neq",label:"is not"},{value:"in",label:"is one of"},{value:"notIn",label:"is not one of"},{value:"contains",label:"contains"},{value:"gt",label:"greater than"},{value:"lt",label:"less than"},{value:"between",label:"between"},{value:"relative",label:"relative date"}];function N({filter:e,onChange:r,onDelete:u,source:s,fieldOptions:t=g}){const l=j(),[i,y]=m.useState([]),[c,p]=m.useState("");return m.useEffect(()=>{let a=!0;const b=setTimeout(()=>l.autocomplete(e.field,e.value,s).then(d=>{a&&(y(d),p(""))}).catch(d=>a&&p(d.message)),250);return()=>{a=!1,clearTimeout(b)}},[e.field,e.value,s]),n.jsxs("div",{className:"filter-rule",children:[n.jsx(o,{label:"Filter field",value:e.field,onChange:a=>r({field:a,value:""}),options:t.map(a=>({value:a.key,label:a.label}))}),n.jsx(o,{label:"Filter operator",value:e.operator,onChange:a=>r({operator:a}),options:w}),e.operator==="relative"?n.jsx(o,{label:"Relative date",value:e.value,onChange:a=>r({value:a}),options:["yesterday","last week","last month"]}):n.jsxs(n.Fragment,{children:[n.jsx(v,{className:"text-input",type:e.operator==="between"?"date":"text",list:`values-${e.id}`,placeholder:e.operator==="in"?"Values, separated by commas":"Value",value:e.value,onChange:a=>r({value:a.target.value}),"aria-label":"Filter value"}),n.jsx("datalist",{id:`values-${e.id}`,children:i.map(a=>n.jsx("option",{children:a},a))}),e.operator==="between"&&n.jsx(v,{className:"text-input",type:"date",value:e.end||"",onChange:a=>r({end:a.target.value}),"aria-label":"End date"})]}),n.jsx(k,{label:"Remove filter",onClick:u,children:n.jsx(x,{size:15})}),c&&n.jsxs("small",{className:"error-text",children:["Could not load suggestions: ",c]})]})}function F({value:e,onChange:r,source:u="synthetic",fieldOptions:s=g}){return n.jsxs("div",{className:"filter-editor",children:[n.jsxs("div",{className:"filter-heading",children:[n.jsx("span",{children:"Match"}),n.jsx(o,{label:"Filter logic",value:e.logic,onChange:t=>r({...e,logic:t}),options:[{value:"AND",label:"all conditions (AND)"},{value:"OR",label:"any condition (OR)"}]})]}),e.entries.map(t=>n.jsx(N,{filter:t,source:u,fieldOptions:s,onChange:l=>r({...e,entries:e.entries.map(i=>i.id===t.id?{...i,...l}:i)}),onDelete:()=>r({...e,entries:e.entries.filter(l=>l.id!==t.id)})},t.id)),!e.entries.length&&n.jsx("div",{className:"empty-small",children:"No filters. All available data is included."}),n.jsxs(h,{variant:"outline",onClick:()=>r({...e,entries:[...e.entries,{id:f(),field:"region",operator:"eq",value:""}]}),children:[n.jsx(q,{size:15})," Add condition"]}),n.jsx("p",{className:"muted text-xs",children:"Widget filters override page filters, which override canvas filters on the same field."})]})}F.__docgenInfo={description:"",methods:[],displayName:"FilterEditor",props:{value:{required:!0,tsType:{name:"signature",type:"object",raw:'{ logic: "AND" | "OR"; entries: Filter[] }',signature:{properties:[{key:"logic",value:{name:"union",raw:'"AND" | "OR"',elements:[{name:"literal",value:'"AND"'},{name:"literal",value:'"OR"'}],required:!0}},{key:"entries",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| "relative"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"in"'},{name:"literal",value:'"notIn"'},{name:"literal",value:'"contains"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"between"'},{name:"literal",value:'"relative"'}],required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!1}}]}}],raw:"Filter[]",required:!0}}]}},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(v: FilterGroup) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:'{ logic: "AND" | "OR"; entries: Filter[] }',signature:{properties:[{key:"logic",value:{name:"union",raw:'"AND" | "OR"',elements:[{name:"literal",value:'"AND"'},{name:"literal",value:'"OR"'}],required:!0}},{key:"entries",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| "relative"`,elements:[{name:"literal",value:'"eq"'},{name:"literal",value:'"neq"'},{name:"literal",value:'"in"'},{name:"literal",value:'"notIn"'},{name:"literal",value:'"contains"'},{name:"literal",value:'"gt"'},{name:"literal",value:'"lt"'},{name:"literal",value:'"between"'},{name:"literal",value:'"relative"'}],required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!1}}]}}],raw:"Filter[]",required:!0}}]}},name:"v"}],return:{name:"void"}}},description:""},source:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"synthetic"',computed:!1}},fieldOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ key: string; label: string }",signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"{ key: string; label: string }[]"},description:"",defaultValue:{value:`[
  {
    id: "commerce:rapidbi:orders:date",
    key: "date",
    label: "Order date",
    type: "date",
  },
  {
    id: "commerce:rapidbi:orders:month",
    key: "month",
    label: "Month",
    type: "string",
  },
  {
    id: "commerce:rapidbi:orders:region",
    key: "region",
    label: "Region",
    type: "string",
  },
  {
    id: "commerce:rapidbi:orders:channel",
    key: "channel",
    label: "Channel",
    type: "string",
  },
  {
    id: "commerce:rapidbi:orders:product",
    key: "product",
    label: "Product",
    type: "string",
  },
  {
    id: "commerce:rapidbi:orders:segment",
    key: "segment",
    label: "Segment",
    type: "string",
  },
  {
    id: "commerce:rapidbi:orders:revenue",
    key: "revenue",
    label: "Revenue",
    type: "number",
  },
  {
    id: "commerce:rapidbi:orders:cost",
    key: "cost",
    label: "Cost",
    type: "number",
  },
  {
    id: "commerce:rapidbi:orders:profit",
    key: "profit",
    label: "Profit",
    type: "number",
  },
  {
    id: "commerce:rapidbi:orders:orders",
    key: "orders",
    label: "Orders",
    type: "number",
  },
  {
    id: "commerce:rapidbi:orders:customers",
    key: "customers",
    label: "Customers",
    type: "number",
  },
  {
    id: "commerce:rapidbi:orders:margin",
    key: "margin",
    label: "Margin",
    type: "number",
  },
]`,computed:!1}}}};export{F};
