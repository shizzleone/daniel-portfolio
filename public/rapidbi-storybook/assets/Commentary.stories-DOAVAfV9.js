import{j as e}from"./iframe-BxPDHca9.js";import{a as d}from"./widgets-B6XhE1Ku.js";import{m as u}from"./context-BQyxeM8Z.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CU_3h48h.js";import"./index-CHmK8nHf.js";import"./icons-O3LJ5nk1.js";import"./registry-BSKzlidL.js";import"./primitives-DNBEsqbp.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,{useArgs:h}=__STORYBOOK_MODULE_PREVIEW_API__;function l({content:c,readOnly:r,onChange:i,onAction:t}){return e.jsxs("main",{className:"story-stage",children:[e.jsx("h2",{children:"Commentary"}),e.jsx("p",{className:"story-description",children:"Tiptap editor · formatting · mentions · host action callback."}),e.jsx("div",{style:{maxWidth:820,minHeight:300},children:e.jsx(d,{widget:u("commentary",{id:"commentary-demo",content:c}),readOnly:r,mentionOptions:["Analytics team","Finance team","Operations"],update:p=>i(p.content||""),onAction:t})})]})}const S={title:"Components/Commentary",component:l,tags:["autodocs"],args:{content:"<h2>Quarterly performance</h2><p>Revenue is growing across our regions. <strong>Focus on retention</strong> and monitor acquisition costs.</p>",readOnly:!1,onChange:m(),onAction:m()},render:function(r){const[,i]=h();return e.jsx(l,{...r,onChange:t=>{r.onChange(t),i({content:t})}})}},o={},s={args:{readOnly:!0}},n={args:{content:""}},a={args:{content:"<h2>Review checklist</h2><ul><li>Validate source freshness</li><li>Compare regional trends</li><li>Share the approved snapshot</li></ul><blockquote>All numbers in this example are synthetic.</blockquote>"}},j=["Default","ReadOnly","Empty","RichContent"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    content: ''
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    content: '<h2>Review checklist</h2><ul><li>Validate source freshness</li><li>Compare regional trends</li><li>Share the approved snapshot</li></ul><blockquote>All numbers in this example are synthetic.</blockquote>'
  }
}`,...a.parameters?.docs?.source}}};export{o as Default,n as Empty,s as ReadOnly,a as RichContent,j as __namedExportsOrder,S as default};
