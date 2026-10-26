import{j as e}from"./iframe--_k5KNLb.js";import{u as s,M as i}from"./blocks-aTBwdFw5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C1N_ynMI.js";import"./index-CkoKM40F.js";function a(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Internal/Reference coverage"}),`
`,e.jsx(n.h1,{id:"reference-coverage",children:"Reference coverage"}),`
`,e.jsx(n.p,{children:"The supplied sidebar reference mixes Salt foundations, product components, application screens, legacy examples and private backend fixtures. This build uses the current installed Salt API and keeps working examples under their canonical names."}),`
`,e.jsxs(n.p,{children:[`| Reference area | Current implementation |
| --- | --- |
| Stack / Flex / Flow / Grid / Split / Panel | Foundations / Layout, including FlexItem and GridItem |
| Tokens and semantics | Foundations / Tokens and Token semantics; live theme values |
| Salt icons | Foundations / Icons; application icons use Salt |
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
`,e.jsx(n.p,{children:"Native file, color, range and checkbox inputs remain where existing browser/form contracts require them; shared dropdown and text-input adapters use Salt. Geometry and chart palette values are persisted application data rather than theme tokens."})]})}function p(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{p as default};
