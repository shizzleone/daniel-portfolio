import{j as e}from"./iframe--_k5KNLb.js";import{u as s,M as r}from"./blocks-aTBwdFw5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C1N_ynMI.js";import"./index-CkoKM40F.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Foundations/Token semantics"}),`
`,e.jsx(t.h1,{id:"token-semantics",children:"Token semantics"}),`
`,e.jsx(t.p,{children:"Prefer the most specific semantic token: component or characteristic first, foundation for spacing and sizing, raw palette only when a semantic role is unavailable."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`.canvas-panel {
  color: var(--salt-content-primary-foreground, #242424);
  background: var(--salt-container-primary-background, #fff);
  padding: var(--salt-spacing-200, 16px);
  border: var(--salt-size-border, 1px) solid var(--salt-separable-tertiary-borderColor, #ccc);
  border-radius: var(--salt-palette-corner, 2px);
}
`})}),`
`,e.jsx(t.h2,{id:"explore-the-installed-theme",children:"Explore the installed theme"}),`
`,e.jsx(t.p,{children:"Tokens contains searchable spacing, sizing, typography, corners, surfaces, accent, action, selection, border, focus, status, elevation and palette tables. Each table reads its values from the active preview provider. Use the toolbar to switch mode and density. Undefined tokens are labelled explicitly, never invented."}),`
`,e.jsxs(t.p,{children:["The catalog is generated from the installed package CSS by ",e.jsx(t.code,{children:"npm run tokens"})," and refreshed before every production build. The reference contains legacy names; use the installed catalog to check availability. Preserve literal fallbacks for CSS used outside the provider. Sizes that encode canvas geometry, chart layout or responsive breakpoints remain explicit application values."]}),`
`,e.jsx(t.h2,{id:"theme-integration",children:"Theme integration"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"SaltTheme"})," wraps ",e.jsx(t.code,{children:"SaltProviderNext"})," with the J.P. Morgan theme, teal accent, rounded corners and self-hosted Open Sans/PT Mono. The application icon adapter uses the actual Salt icon library. AG Grid uses the official Salt CSS theme with AG Grid 34's legacy-theme compatibility option. Highcharts uses the official ",e.jsx(t.code,{children:"useChart"})," hook; saved chart colors and display settings remain user overrides."]}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(t.p,{children:"Focus, status and text use semantic Salt tokens. Salt supplies interactive controls, menus and modal focus management. Color alone should not communicate status. Run the Accessibility panel for each story and manually check keyboard and screen-reader behavior. Automated scans are not certification."})]})}function h(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{h as default};
