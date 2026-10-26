import{r as m,j as l}from"./iframe-WThfDZJP.js";import{T as d}from"./Workspace-BE8civ_p.js";import"./preload-helper-PPVm8Dsz.js";import"./primitives-B342llPO.js";import"./icons-ynApnUxk.js";import"./CanvasV2-DPcN4zPS.js";import"./context-DliM7wwC.js";import"./index-Olj-B9WC.js";import"./Assistant-BL1h7vO5.js";import"./registry-BjNJuGfJ.js";import"./FilterEditor-DiEp39GW.js";import"./WidgetSettings-CsmsF1t8.js";import"./widgets-BTP9KWFE.js";import"./index-jGv1Tsu9.js";function g({count:c}){const[p,i]=m.useState(Array.from({length:c},(s,r)=>({id:String(r),name:`Report ${r+1}`}))),[a,n]=m.useState("home");return l.jsx(d,{tabs:p,active:a,onSelect:n,onClose:s=>{i(r=>r.filter(u=>u.id!==s)),a===s&&n("home")}})}const H={title:"Screens/Tabstrip",component:g,tags:["autodocs"],args:{count:3}},t={args:{count:0}},e={},o={args:{count:20}},R=["HomeOnly","MultipleTabs","ManyTabs"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    count: 0
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    count: 20
  }
}`,...o.parameters?.docs?.source}}};export{t as HomeOnly,o as ManyTabs,e as MultipleTabs,R as __namedExportsOrder,H as default};
