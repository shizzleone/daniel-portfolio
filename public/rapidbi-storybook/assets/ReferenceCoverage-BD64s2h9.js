import{j as e}from"./iframe-dLOVGGP0.js";import{u as s,M as i}from"./blocks-OzVn6f_O.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D0rb0-TT.js";import"./index-CnZPMxzX.js";function t(a){const n={code:"code",h1:"h1",h2:"h2",p:"p",...s(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Internal/Reference coverage"}),`
`,e.jsx(n.h1,{id:"reference-coverage",children:"Reference coverage"}),`
`,e.jsx(n.p,{children:"The supplied sidebar reference mixes Signal UI foundations, product components, application screens, legacy examples and private backend fixtures. This build uses the local Signal UI system and keeps working examples under their canonical names."}),`
`,e.jsxs(n.p,{children:[`| Reference area | Current implementation |
| --- | --- |
| Stack / Flex / Flow / Grid / Split / Panel | Foundations / Layout, including FlexItem and GridItem |
| Tokens and semantics | Foundations / Tokens and Token semantics; live theme values |
| Signal icons | Foundations / Icons; application icons use Signal UI |
| Typography and controls | Foundations typography, buttons, forms, selection, menus, overlays, navigation, feedback and provider galleries |
| Fancy Charts | Components / Chart, with all 15 types, stacking and drill interactions |
| GridSettingsModal | Components / Widget Settings / Grid |
| RapidBiGrid | Components / Advanced Grid |
| Canvas and Canvas V2 | Screens / Canvas V2 (dedicated variants), Components / Canvas, plus page, save, export and tour examples |
| Home Panel / Tabstrip / Canvas Workspace | Screens, with model search, loading/error/empty states, open/close tabs and migration |
| Common DualList | Components / Common / Dual List |
| Custom widgets | Components / Custom Widgets and the SDK registration API |
| Legacy migration | Screens / Canvas Workspace / Auto Migrate From V1; `,e.jsx(n.code,{children:"migrateV1ToV2"})," in the SDK |"]}),`
`,e.jsx(n.h2,{id:"boundaries",children:"Boundaries"}),`
`,e.jsx(n.p,{children:"Private credit-risk/PRM datasets, MDX-specific queries, public sharing permissions and release-email delivery are not reproduced as dummy integrations. The local examples use commerce fixtures. Live models and save callbacks are supplied by the host application. A production sharing service needs its own authorization and backend contract."}),`
`,e.jsx(n.p,{children:"Some legacy story names refer to functionality not equivalent to the current engine: split-cell currently means wrapped/auto-height content rather than nested inline subgrids. Multi-measure and pivot behavior is demonstrated in Advanced Grid; a screenshot does not supply proprietary MDX semantics. Those differences remain explicit instead of presenting duplicate stories as feature parity."}),`
`,e.jsx(n.p,{children:"Native file, color, range and checkbox inputs remain where existing browser/form contracts require them; shared dropdown and text-input adapters use Signal UI. Geometry and chart palette values are persisted application data rather than theme tokens."})]})}function p(a={}){const{wrapper:n}={...s(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(t,{...a})}):t(a)}export{p as default};
