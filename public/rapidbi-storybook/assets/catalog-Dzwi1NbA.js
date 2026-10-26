import{o as _e,r as n,e as Re,l as G,m as _,j as e,g as k,f as fe,n as ua,O as Bo,q as Vo,u as Lo,y as Ao}from"./iframe--_k5KNLb.js";import{u as ge,m as $,h as l,p as To,q as qo,f as Qa,s as Xa,g as Po,t as No,e as Do,v as Fo,C as Oo,D as Wo,w as Eo,x as Go,E as $o,F as Uo,y as _o,z as Ko,A as Qo,L as Xo,O as Jo,P as Zo,G as Yo,H as en,J as tn,K as an,M as on,N as nn,U as ln,Q as rn,W as sn,R as dn,j as Ye,r as we,b as Ne,V as cn,c as he,o as va,n as Ft,B as be,T as se,i as gt,X as un,k as Ja,d as vn,a as Za,I as Nt,S as hn}from"./Switch-XczNmwRq.js";import{A as bn,r as pn,b as fn,B as gn,h as xn,x as mn,C as In,n as wn,a as yn,D as zn,k as Sn,e as jn,i as Rn,c as Cn,g as kn,f as Hn,u as Mn,E as Bn,F as Vn,p as Ln,G as An,l as Tn,m as qn,H as Pn,K as Nn,L as Dn,q as Fn,w as On,s as Wn,M as En,P as Gn,j as $n,R as Un,d as _n,o as Kn,S as Qn,t as Xn,T as Jn,v as Zn,U as Yn,V as el}from"./Visible-Cx233rT1.js";import{v as St}from"./versions-Cj28jkJq.js";import{p as Je,F as Ze,S as et}from"./StackLayout-CHTwAaRb.js";import{h as tl,a as al,B as ol,b as nl,T as ll,c as rl,d as ja,e as Ra,C as sl,F as il,S as dl}from"./TabTrigger-Cgni7mzk.js";import{S as Ot,w as ha,u as sa,x as ba,y as cl,z as ul,h as Wt,i as Et,k as Gt,A as Ya,j as pa,L as vl,B as hl,C as bl,E as pl,F as fl,o as fa,s as gl,m as ga,H as eo,l as xa,G as to,n as ao,I as oo,J as no,K as lo,N as ro,P as so,Q as xl,R as ml,T as Il,U as wl,d as yl,e as zl,f as Sl,g as jl,M as Rl,a as Cl,b as kl,c as Hl,D as Ml,O as Ca}from"./Option-CVltArud.js";import{a as Bl,C as ka,B as Vl}from"./Checkbox-C6urkOyA.js";var Ll=`.saltAccordion {
  border-top: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) var(--salt-separable-tertiary-borderColor);
}

.saltAccordion-error {
  border-top-color: var(--salt-status-error-borderColor);
}

.saltAccordion-warning {
  border-top-color: var(--salt-status-warning-borderColor);
}

.saltAccordion-success {
  border-top-color: var(--salt-status-success-borderColor);
}

.saltAccordion-disabled {
  border-top-color: var(--salt-separable-tertiary-borderColor);
}
`;const io=_e("AccordionContext",{value:"",expanded:!1,toggle:()=>{},disabled:!1,indicatorSide:"left",headerId:"",setHeaderId:()=>{},panelId:"",setPanelId:()=>{}});function co(){return n.useContext(io)}const _t=$("saltAccordion"),Al=n.forwardRef(function(a,t){const{className:r,defaultExpanded:i,expanded:s,disabled:c,indicatorSide:u="left",id:d,onToggle:v,status:h,value:g,...b}=a,m=Re(d),[f,I]=n.useState(`${m}-header`),[p,z]=n.useState(`${m}-panel`),w=G();_({testId:"salt-accordion",css:Ll,window:w});const[x,y]=ge({controlled:s,default:!!i,name:"Accordion",state:"expanded"}),S=R=>{y(j=>!j),v?.(R)};return e.jsx(io.Provider,{value:{value:g,toggle:S,expanded:x,indicatorSide:u,disabled:!!c,headerId:f,setHeaderId:I,panelId:p,setPanelId:z,status:h},children:e.jsx("div",{ref:t,className:k(_t(),{[_t(h??"")]:h,[_t("disabled")]:c},r),...b})})});var Tl=`.saltAccordionGroup {
  border-bottom: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) var(--salt-separable-tertiary-borderColor);
}
`;const ql=$("saltAccordionGroup"),Pl=n.forwardRef(function(a,t){const{className:r,...i}=a,s=G();return _({testId:"salt-accordion-group",css:Tl,window:s}),e.jsx("div",{className:k(ql(),r),ref:t,...i})}),Nl=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"AccessibleIcon","aria-label":"accessible",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M5 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1",clipRule:"evenodd"}),e.jsx("path",{d:"M3 4.126A4.002 4.002 0 0 0 4 12a4 4 0 0 0 3.595-2.245l-.763-.763A3.001 3.001 0 1 1 3 5.171z"}),e.jsx("path",{d:"M6 6V4H4v4h3.172l2.242 2.243 1.414-1.415L8 6z"})]})}),Dl=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"AccessibleSolidIcon","aria-label":"accessible solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M5 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M4 4h2v2h2l2.828 2.828-1.414 1.415L7.172 8H4z"}),e.jsx("path",{d:"M3 4.126A4.002 4.002 0 0 0 4 12a4 4 0 0 0 3.595-2.245l-.763-.763A3.001 3.001 0 1 1 3 5.171z"})]})}),Fl=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"AddDocumentIcon","aria-label":"add document",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M6 5H5v2H3v1h2v2h1V8h2V7H6z"}),e.jsx("path",{fillRule:"evenodd",d:"M1 12V0h8l2 2v10zm9-1V4H7V1H2v10zm0-8.586V3H8V1h.586z",clipRule:"evenodd"})]})}),Ol=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"AddDocumentSolidIcon","aria-label":"add document solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M1 12V0h8l2 2v10zm4-7h1v2h2v1H6v2H5V8H3V7h2zm3-4H7v3h3V3H8z",clipRule:"evenodd"})})}),Wl=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"AddToGridIcon","aria-label":"add to grid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M5 12H0V7h5zm-4-1h3V8H1z",clipRule:"evenodd"}),e.jsx("path",{d:"M10 7v2h2v1h-2v2H9v-2H7V9h2V7z"}),e.jsx("path",{fillRule:"evenodd",d:"M5 5H0V0h5zM1 4h3V1H1zm11 1H7V0h5zM8 4h3V1H8z",clipRule:"evenodd"})]})}),El=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"AddToGridSolidIcon","aria-label":"add to grid solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M5 12H0V7h5z",clipRule:"evenodd"}),e.jsx("path",{d:"M10 7v2h2v1h-2v2H9v-2H7V9h2V7z"}),e.jsx("path",{fillRule:"evenodd",d:"M5 5H0V0h5zm7 0H7V0h5z",clipRule:"evenodd"})]})}),Gl=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"AddUserIcon","aria-label":"add user",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M6.844 1.983c.094.231.16.56.16 1.016q0 .47-.099.991h1.016q.059-.357.075-.702L8.004 3q0-.82-.234-1.395A2.4 2.4 0 0 0 6.176.164 4 4 0 0 0 5.004 0v.004l-.307.01q-.452.03-.865.154l-.133.041a2.4 2.4 0 0 0-.816.475l-.1.09q-.34.333-.545.834l-.054.148q-.18.529-.18 1.247l.007.289q.021.437.11.895l.065.296q.105.444.263.874.2.575.492 1.079l.15.243q.232.351.495.624-.095.48-.492.784l-.106.075q-.39.259-1.078.464l-.164.059-.2.046a6 6 0 0 1-.222.07l-.14.036q-.246.07-.422.129a4 4 0 0 0-.328.117A2 2 0 0 0 0 9.271V12l6 .004v-1L1 11V9.94l1.196-.356c.576-.172 1.102-.394 1.505-.702l.163-.137c.364-.331.607-.755.703-1.25l.1-.514-.362-.375a3.5 3.5 0 0 1-.5-.673 5 5 0 0 1-.411-.904l-.003-.008-.003-.008-.087-.251a7 7 0 0 1-.143-.51l-.055-.258a5.3 5.3 0 0 1-.1-.991c0-.456.067-.785.161-1.016a1.4 1.4 0 0 1 .37-.545l.006-.004.006-.006c.158-.14.34-.24.558-.302l.013-.004a3 3 0 0 1 .887-.122h.12q.415.014.767.118l.013.004c.218.062.4.162.558.302l.006.006.007.004c.136.117.264.288.369.545"}),e.jsx("path",{d:"M9 6H8v2H6v1h2v2h1V9h2V8H9z"})]})}),$l=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"AnnouncementIcon","aria-label":"announcement",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M9.576 9.228 4.878 8.55l.143 1.53a1.25 1.25 0 0 1-.92 1.326l-.061.015a1.25 1.25 0 0 1-1.553-.98l-.338-1.83-.79.103-.435.056L0 5.32l.403-.168 2.285-.951 3.98-3.134L7.265.6zm-6.433-.744.328 1.777a.25.25 0 0 0 .31.196l.06-.016a.25.25 0 0 0 .185-.266L3.87 8.521a.15.15 0 0 0-.086-.12zm.368-3.658.702 2.62 4.005.576L6.69 2.324zM1.192 5.909l.472 1.76 1.52-.198-.577-2.152z",clipRule:"evenodd"}),e.jsx("path",{d:"m11.616 6.057-.274.962-1.89-.541.137-.482.137-.48zm.359-1.578-2.28.611-.26-.966 2.28-.61zm-1.359-2.152L9.25 3.74l-.358-.348-.36-.348 1.366-1.413z"})]})}),Ul=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ApiIcon","aria-label":"api",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M0 5.99 3 3l.707.705-2.293 2.284 2.293 2.296L3 8.99zm12 .022L9 9l-.708-.704 2.294-2.284-2.294-2.296.707-.704zM6.95 3.011 4.002 8.544l.895.446 2.948-5.533z"})})}),_l=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"AppSwitcherIcon","aria-label":"app switcher",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M3 0H0v3h3zm4.5 0h-3v3h3zM9 3V0h3v3zm0 1.5v3h3v-3zM9 12V9h3v3zM4.5 9v3h3V9zM0 9h3v3H0zm3-4.5H0v3h3zm1.5 0h3v3h-3z"})})}),Kl=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ArrowDownIcon","aria-label":"arrow down",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M6.5 0h-1v10.086L2.354 6.94l-.708.707L6 12.001l4.354-4.354-.708-.707L6.5 10.086z"})})}),Ql=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ArrowRightIcon","aria-label":"arrow right",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M0 5.5v1h10.086L6.94 9.647l.707.707L12.001 6 7.647 1.647l-.707.707L10.086 5.5z"})})}),Xl=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"AttachIcon","aria-label":"attach",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M3 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v7H9V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v8.25c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.5a.5.5 0 0 0-1 0V9H5V3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7.5A1.5 1.5 0 0 1 6.5 12h-2A1.5 1.5 0 0 1 3 10.5z"})})}),Jl=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"BankCheckIcon","aria-label":"bank check",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M12 2H0v8h12zm-1 2H1v5h10z",clipRule:"evenodd"}),e.jsx("path",{d:"M2 7h7v1H2zm0-2h4v1H2zm6 0h2v1H8z"})]})}),Zl=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"BankCheckSolidIcon","aria-label":"bank check solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M0 2h12v2H0z"}),e.jsx("path",{fillRule:"evenodd",d:"M0 5h12v5H0zm2 3h7v1H2zm4-2H2v1h4zm4 0H8v1h2z",clipRule:"evenodd"})]})}),Yl=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"BankSolidIcon","aria-label":"bank solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M12 6 6 0 0 6h2v5H0v1h12v-1h-2V6zM9 6H8v5h1zM6.5 6h-1v5h1zM4 6H3v5h1zm2.5-3v1h-1V3z",clipRule:"evenodd"})})}),er=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"BatteryIcon","aria-label":"battery",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M8 0H4v1H3v11h6V1H8zM4 2v9h4V2z",clipRule:"evenodd"})})}),tr=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"BatterySolidIcon","aria-label":"battery solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M8 0H4v1H3v11h6V1H8zM4 2v1h4V2z",clipRule:"evenodd"})})}),ar=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"BookmarkIcon","aria-label":"bookmark",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"m6 10 4 2V0H2v12zm-3 .234 3-1.4 3 1.4V1H3z",clipRule:"evenodd"})})}),or=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"BookmarkSolidIcon","aria-label":"bookmark solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"m6 10 4 2V0H2v12z",clipRule:"evenodd"})})}),nr=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"BooleanIcon","aria-label":"boolean",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M0 2.75A2.75 2.75 0 0 1 2.75 0h6.5a2.75 2.75 0 1 1 0 5.5h-6.5A2.75 2.75 0 0 1 0 2.75m1 0a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0m4.5 0c0 .665-.236 1.275-.629 1.75H9.25a1.75 1.75 0 1 0 0-3.5H4.871c.393.475.629 1.085.629 1.75M0 9.25A2.75 2.75 0 0 1 2.75 6.5h6.5a2.75 2.75 0 1 1 0 5.5h-6.5A2.75 2.75 0 0 1 0 9.25M9.25 7.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M7.129 11A2.74 2.74 0 0 1 6.5 9.25c0-.665.236-1.275.629-1.75H2.75a1.75 1.75 0 1 0 0 3.5z",clipRule:"evenodd"})})}),lr=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"BooleanSolidIcon","aria-label":"boolean solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M0 2.75A2.75 2.75 0 0 1 2.75 0h6.5a2.75 2.75 0 1 1 0 5.5h-6.5A2.75 2.75 0 0 1 0 2.75m4.5 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0m7.5 6.5A2.75 2.75 0 0 1 9.25 12h-6.5a2.75 2.75 0 1 1 0-5.5h6.5A2.75 2.75 0 0 1 12 9.25m-4.5 0a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0",clipRule:"evenodd"})})}),rr=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"BrowserIcon","aria-label":"browser",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M3 2H2v1h1zm1 0h1v1H4zm3 0H6v1h1z"}),e.jsx("path",{fillRule:"evenodd",d:"M12 0H0v12h12zM1 11V5h10v6zM1 1v3h10V1z",clipRule:"evenodd"})]})}),sr=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"BrowserSolidIcon","aria-label":"browser solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M12 0H0v3h12zM2 1h1v1H2zm3 0H4v1h1zm1 0h1v1H6z",clipRule:"evenodd"}),e.jsx("path",{d:"M12 4H0v8h12z"})]})}),ir=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"BuildingIcon","aria-label":"building",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M0 11h12v1H0z"}),e.jsx("path",{fillRule:"evenodd",d:"M9 1H2v10h7zM1 0v11h9V0z",clipRule:"evenodd"}),e.jsx("path",{fillRule:"evenodd",d:"M6 9H5v2h1zM4 8v3h3V8z",clipRule:"evenodd"}),e.jsx("path",{d:"M3 4h1v1H3zm0-2h1v1H3zm0 4h1v1H3zm2-2h1v1H5zm0-2h1v1H5zm0 4h1v1H5zm2-2h1v1H7zm0-2h1v1H7zm0 4h1v1H7z"})]})}),dr=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"BuildingSolidIcon","aria-label":"building solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M1 11V0h9v11h2v1H0v-1zm3 0h1V9h1v2h1V8H4zm0-9H3v1h1zm0 2H3v1h1zM3 6h1v1H3zm3-2H5v1h1zM5 2h1v1H5zm1 4H5v1h1zm1-2h1v1H7zm1-2H7v1h1zM7 6h1v1H7z",clipRule:"evenodd"})})}),cr=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"BuildingsIcon","aria-label":"buildings",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M0 11h12v1H0z"}),e.jsx("path",{fillRule:"evenodd",d:"M6 2H1v9h5zM0 1v11h7V1zm11 4H9v6h2zM8 4v8h4V4z",clipRule:"evenodd"}),e.jsx("path",{d:"M2 3h1v1H2zm0 2h1v1H2zm0 2h1v1H2zm2-4h1v1H4zm0 2h1v1H4zm0 2h1v1H4zm-1 4V9h1v2z"})]})}),ur=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"BuildingsSolidIcon","aria-label":"buildings solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M0 1h7v10h1V4h4v8H0zm4 8v2H3V9zM3 3H2v1h1zM2 5h1v1H2zm1 2H2v1h1zm2-4H4v1h1zM4 5h1v1H4zm1 2H4v1h1z",clipRule:"evenodd"})})}),vr=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"BuildReportIcon","aria-label":"build report",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M0 3h3V1h6v2h3v9H0zm1 1v2h3V5h4v1h3V4zm0 7V7h3v1h4V7h3v4zm7-9H4v1h4z",clipRule:"evenodd"})})}),hr=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"BuildReportSolidIcon","aria-label":"build report solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M3 1h6v2h3v9H0V3h3zm1 2h4V2H4zm4 2H4v1H1v1h3v1h4V7h3V6H8z",clipRule:"evenodd"})})}),br=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"CalculatorSolidIcon","aria-label":"calculator solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M0 0h12v12H0zm6.5 3.5H8V2h1v1.5h1.5v1H9V6H8V4.5H6.5zm-4.293 3-.707.707 1.06 1.06L1.5 9.329l.707.708 1.06-1.061 1.061 1.06.708-.707-1.061-1.06 1.06-1.06-.707-.708-1.06 1.06zm3.293-3h-4v1h4zm1 5.5h4v1h-4zm4-2h-4v1h4z",clipRule:"evenodd"})})}),pr=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"CalendarSolidIcon","aria-label":"calendar solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M4 1V0H3v1H0v11h12V1H9V0H8v1zM1 2h2v1h1V2h4v1h1V2h2v2H1z",clipRule:"evenodd"})})}),fr=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"CallIcon","aria-label":"call",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M.928 2.367q.022.34.21.914t.54 1.278q.362.703.89 1.464.527.762 1.23 1.465.692.703 1.418 1.324.714.622 1.336 1.09.632.47 1.113.75.48.281.691.317.422.047.562.035l.153-.012q.059.012.351-.117.282-.13.621-.34.34-.222.645-.515t.398-.61q-.374-.176-1.113-.562a27 27 0 0 0-1.101-.563L7.559 9.293l-1.312-.926q-.2-.105-.82-.656a15 15 0 0 1-1.113-1.113 15 15 0 0 1-.961-1.16q-.434-.599-.54-.797l-.257-.516.75-.95-.984-2.144q-.54.199-.984.563-.435.363-.41.773M8.59 12q-.456 0-1.101-.328-.633-.34-1.37-.879-.739-.55-1.524-1.242-.773-.692-1.523-1.406a10 10 0 0 1-1.3-1.512 12 12 0 0 1-.95-1.57 10 10 0 0 1-.586-1.465 6 6 0 0 1-.234-1.149q-.024-.421.246-.832.258-.422.668-.75.422-.34.914-.574T2.767 0L4.42 3.352l-.832.96q.129.211.703.915.575.702 1.149 1.289.573.574 1.195 1.101.632.516.843.633l1.184-.879.375.164q.375.164.878.387.504.21 1.008.445t.762.363l.093.082q.095.083.164.293.06.212.059.305v.082q-.21.902-.879 1.406a7.2 7.2 0 0 1-1.441.856l-.152.059q-.153.058-.399.117-.257.07-.398.07z"})})}),gr=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"CallSolidIcon","aria-label":"call solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M8.59 12q-.456 0-1.101-.328-.633-.34-1.37-.879-.739-.55-1.524-1.242-.773-.692-1.523-1.406a10 10 0 0 1-1.3-1.512 12 12 0 0 1-.95-1.57 10 10 0 0 1-.586-1.465 6 6 0 0 1-.234-1.149q-.024-.421.246-.832.258-.422.668-.75.422-.34.914-.574T2.767 0L4.42 3.352l-.832.96q.129.211.703.915.575.702 1.149 1.289.573.574 1.195 1.101.632.516.843.633l1.184-.879.375.164q.375.164.878.387.504.21 1.008.445t.762.363l.093.082q.095.083.164.293.06.212.059.305v.082q-.21.902-.879 1.406a7.2 7.2 0 0 1-1.441.856l-.152.059q-.153.058-.399.117-.257.07-.398.07z"})})}),xr=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CartIcon","aria-label":"cart",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M1 1h3v1h7l-.715 5H3.711l.144 1h6.29L10 9H2.996l-.289-2h.008L2 2H1zm2.153 2 .429 3h5.836l.429-3z",clipRule:"evenodd"}),e.jsx("path",{d:"M9 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0"})]})}),mr=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"CartSolidIcon","aria-label":"cart solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M4 1H1v1h1l.715 5h-.008l.29 2H10l.145-1h-6.29l-.144-1h6.574L11 2H4zm1 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"})})}),Ir=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ChartAreaIcon","aria-label":"chart area",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M11.5 3.51v7.99H.5V2.837l3.797 1.085L7 .5zM6 9.35 1.5 8.32v2.18h9V8.55L8 6.85zM4.702 5.078 1.5 4.162V5.94l3.667.91L7.5 3.922 10.5 6V4.034L7.24 1.883z",clipRule:"evenodd"})})}),wr=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ChartBarIcon","aria-label":"chart bar",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M11 6.5v1H2v1h3v1H2v1h6v1H1V.5h5v1H2v1h2v1H2v1h5v1H2v1z"})})}),yr=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ChartBoxPlotIcon","aria-label":"chart box plot",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M11 12H8v-1h1v-1H7V4h2V1H8V0h3v1h-1v3h2v6h-2v1h1zM8 9h3V8H8zm0-2h3V5H8zM4 1H3v1h2v6H3v3h1v1H1v-1h1V8H0V2h2V1H1V0h3zM1 7h3V5H1zm0-3h3V3H1z",clipRule:"evenodd"})})}),zr=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ChartBubbleIcon","aria-label":"chart bubble",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M1.75 10.25h9.5v1H.75V.75h1z"}),e.jsx("path",{fillRule:"evenodd",d:"M8.75 5.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-5.137-.156a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m1.771-6.299a2.5 2.5 0 1 1-.001 5.001 2.5 2.5 0 0 1 0-5.001m0 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3",clipRule:"evenodd"})]})}),Sr=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ChartBubbleSolidIcon","aria-label":"chart bubble solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M1.75 10.25h9.5v1H.75V.75h1z"}),e.jsx("path",{d:"M8.75 5.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4m-5.137.844a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m1.771-5.299a2.5 2.5 0 1 1-.001 5.001 2.5 2.5 0 0 1 0-5.001"})]})}),jr=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ChartBulletIcon","aria-label":"chart bullet",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M2 5v2h3v1H2v2h6v1H1V1h6v1H2v2h7v1z"}),e.jsx("path",{d:"M6 8.5v-2h1v2zm2-6v-2h1v2zm1 9v-2h1v2zm1-6v-2h1v2z"})]})}),Rr=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ChartCandlestickIcon","aria-label":"chart candlestick",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M10 5.5h2v3h-2V12H9V8.5H7v-3h2V0h1zm-2 2h3v-1H8zm-5-4h2v5H3V12H2V8.5H0v-5h2V0h1zm-2 4h3v-3H1z",clipRule:"evenodd"})})}),Cr=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ChartCandlestickSolidIcon","aria-label":"chart candlestick solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M3 3.5h2v5H3V12H2V8.5H0v-5h2V0h1zm7 2h2v3h-2V12H9V8.5H7v-3h2V0h1z",clipRule:"evenodd"})})}),kr=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ChartColumnIcon","aria-label":"chart column",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M6.5 1h1v9h1V7h1v3h1V4h1v7H.5V6h1v4h1V8h1v2h1V5h1v5h1z"})})}),Hr=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ChartDonutIcon","aria-label":"chart donut",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M10.622 9.809A5.97 5.97 0 0 1 6 12l-.309-.008a5.97 5.97 0 0 1-4.313-2.184l.877-.51a4.97 4.97 0 0 0 7.488 0zM5 1.016a5.034 5.034 0 0 0-4 4.941c0 .558.09 1.095.256 1.596l-.88.511A6.1 6.1 0 0 1 0 5.957C0 2.963 2.163.479 5 0zM7 0c2.837.48 5 2.963 5 5.957 0 .741-.134 1.451-.377 2.107l-.88-.511A5.1 5.1 0 0 0 11 5.957a5.034 5.034 0 0 0-4-4.941z"})})}),Mr=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ChartLineIcon","aria-label":"chart line",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M10.5 3.5a1.5 1.5 0 1 0-1.018-.399L7.599 7.503a1.5 1.5 0 0 0-.55.066L5.747 5.836a1.5 1.5 0 1 0-2.4.122L1.801 8.53h-.006a1.5 1.5 0 1 0 .857.512l1.54-2.573a1.5 1.5 0 0 0 .75-.036l1.311 1.732a1.5 1.5 0 1 0 2.264-.267L10.4 3.497zM5.25 5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-3 5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m6-1a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m3-7a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0",clipRule:"evenodd"})})}),Br=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ChartLineSolidIcon","aria-label":"chart line solid",viewBox:"0 0 12 13",ref:t,...a,children:e.jsx("path",{d:"M10.5 4a1.5 1.5 0 1 0-1.017-.397l-1.885 4.4a1.5 1.5 0 0 0-.547.065L5.75 6.331a1.5 1.5 0 1 0-2.405.124L1.799 9.03a1.5 1.5 0 1 0 .857.515L4.201 6.97a1.5 1.5 0 0 0 .748-.038L6.25 8.668a1.5 1.5 0 1 0 2.265-.271l1.886-4.4Q10.452 4 10.5 4"})})}),Vr=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ChartPieIcon","aria-label":"chart pie",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M4.5 2.626a4.002 4.002 0 0 0 1 7.874v1a5 5 0 0 1 0-10v5h5a5 5 0 0 1-5 5v-1a4 4 0 0 0 3.874-3H4.5z"}),e.jsx("path",{d:"M6.5.5a5 5 0 0 1 5 5h-5zm1 4h2.874A4.01 4.01 0 0 0 7.5 1.626z"})]})}),Lr=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ChartPieSolidIcon","aria-label":"chart pie solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M5.5 11.5a5 5 0 0 0 5-5h-5v-5a5 5 0 0 0 0 10"}),e.jsx("path",{d:"M11.5 5.5a5 5 0 0 0-5-5v5z"})]})}),Ar=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ChartScatterIcon","aria-label":"chart scatter",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M1.143 10.857H12V12H0V0h1.143z"}),e.jsx("path",{fillRule:"evenodd",d:"M4.571 6.286a1.714 1.714 0 1 1 0 3.428 1.714 1.714 0 0 1 0-3.428m0 1.143a.571.571 0 1 0 0 1.142.571.571 0 0 0 0-1.142m5.715-2.286a1.714 1.714 0 1 1 0 3.428 1.714 1.714 0 0 1 0-3.428m0 1.143a.571.571 0 1 0 0 1.143.571.571 0 0 0 0-1.143M5.714.571a1.714 1.714 0 1 1 0 3.429 1.714 1.714 0 0 1 0-3.429m0 1.143a.571.571 0 1 0 0 1.143.571.571 0 0 0 0-1.143",clipRule:"evenodd"})]})}),Tr=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ChartScatterSolidIcon","aria-label":"chart scatter solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M1.143 10.857H12V12H0V0h1.143z"}),e.jsx("path",{fillRule:"evenodd",d:"M4.571 6.286a1.714 1.714 0 1 1 0 3.428 1.714 1.714 0 0 1 0-3.428m5.715-1.143a1.714 1.714 0 1 1 0 3.428 1.714 1.714 0 0 1 0-3.428M5.714.571a1.714 1.714 0 1 1 0 3.429 1.714 1.714 0 0 1 0-3.429",clipRule:"evenodd"})]})}),qr=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ChartStackedBarIcon","aria-label":"chart stacked bar",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M5.5 1.5H2v1h1.5v1H2v1h5v1H2v1h3v1H2v1h1v1H2v1h6v1H1V.5h4.5zm5.5 10H9v-1h2z"}),e.jsx("path",{d:"M6.5 9.5H4v-1h2.5zm2.5-2H6v-1h3zm1-2H8v-1h2zm-2-2H5v-1h3zm1-2H7v-1h2z"})]})}),Pr=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ChartWaterfallIcon","aria-label":"chart waterfall",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M2 11H1V7.5h1zm9 0h-1V1h1zM5 7.5H4v-3h1zm3-3H7V1h1z"})})}),Nr=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ChatIcon","aria-label":"chat",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M8.567 10.67a5.625 5.625 0 1 1 2.06-2.22L12 12zM.978 5.876a4.647 4.647 0 1 1 8.556 2.513l.41 1.091.28.745-.724-.272-1.041-.394a4.647 4.647 0 0 1-7.48-3.683",clipRule:"evenodd"})})}),Dr=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ChatGroupIcon","aria-label":"chat group",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M6.557 9.452a4.5 4.5 0 0 1-1.974.506 4.47 4.47 0 0 1-2.28-.564l-2.19.552.32-2.542a4.48 4.48 0 0 1 3.948-6.402 4.48 4.48 0 0 1 3.783 1.921 4 4 0 0 0 .368-.01 3.544 3.544 0 0 1 3.124 5.065l.254 2.011-1.734-.436c-.533.297-1.15.46-1.803.446a3.53 3.53 0 0 1-1.816-.547M2.443 8.328l-1.156.29.175-1.38-.127-.265a3.48 3.48 0 0 1 3.068-4.972 3.48 3.48 0 0 1 2.692 1.18A3.546 3.546 0 0 0 5.73 8.729a3.5 3.5 0 0 1-1.17.229 3.47 3.47 0 0 1-1.77-.437zm7.592.159-.346.193a2.545 2.545 0 1 1-1.18-4.767 2.545 2.545 0 0 1 2.243 3.635l-.126.265.107.85z",clipRule:"evenodd"})})}),Fr=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ChatGroupSolidIcon","aria-label":"chat group solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"m.113 9.946.32-2.542a4.48 4.48 0 0 1 3.949-6.402A4.47 4.47 0 0 1 7.356 2.04a4.55 4.55 0 0 0-3.453 4.315A4.54 4.54 0 0 0 5.43 9.859a4.5 4.5 0 0 1-3.127-.465z"}),e.jsx("path",{d:"m11.91 9.99-.253-2.012a3.544 3.544 0 0 0-3.124-5.065 3.544 3.544 0 1 0 1.645 6.64z"})]})}),Or=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ChatSolidIcon","aria-label":"chat solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M5.625.25a5.625 5.625 0 1 0 2.942 10.42L12 12l-1.373-3.55A5.625 5.625 0 0 0 5.625.25"})})}),Wr=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ChattingIcon","aria-label":"chatting",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M5.531 6.933c.555 0 1.006-.46 1.006-1.027S6.087 4.88 5.53 4.88c-.555 0-1.006.46-1.006 1.027s.45 1.027 1.006 1.027M3.771 5.906c0 .567-.45 1.027-1.006 1.027-.555 0-1.005-.46-1.005-1.027S2.21 4.88 2.765 4.88c.556 0 1.006.46 1.006 1.027m4.525 1.026c.556 0 1.006-.46 1.006-1.027S8.852 4.88 8.296 4.88c-.555 0-1.005.46-1.005 1.027s.45 1.027 1.005 1.027"}),e.jsx("path",{fillRule:"evenodd",d:"M5.657 11.555a5.54 5.54 0 0 0 2.958-.852L12 12l-1.313-3.577c.4-.792.626-1.692.626-2.645C11.313 2.587 8.781 0 5.657 0S0 2.587 0 5.778s2.533 5.777 5.657 5.777m0-10.55C3.076 1.005.984 3.142.984 5.778s2.092 4.773 4.673 4.773a4.6 4.6 0 0 0 2.85-.99l1.046.405.729.279L10 9.479l-.412-1.12c.47-.744.742-1.63.742-2.581 0-2.636-2.093-4.773-4.673-4.773",clipRule:"evenodd"})]})}),Er=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ChattingSolidIcon","aria-label":"chatting solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M5.657 0C2.533 0 0 2.587 0 5.778s2.533 5.777 5.657 5.777a5.54 5.54 0 0 0 2.958-.852L12 12l-1.313-3.577c.4-.792.626-1.692.626-2.645C11.313 2.587 8.781 0 5.657 0m.88 5.906c0 .567-.45 1.027-1.006 1.027-.555 0-1.006-.46-1.006-1.027s.45-1.027 1.006-1.027c.555 0 1.006.46 1.006 1.027m2.765 0c0 .567-.45 1.027-1.006 1.027-.555 0-1.005-.46-1.005-1.027S7.74 4.88 8.296 4.88s1.006.46 1.006 1.027m-5.53 0c0 .567-.451 1.027-1.007 1.027S1.76 6.473 1.76 5.906 2.21 4.88 2.765 4.88c.556 0 1.006.46 1.006 1.027",clipRule:"evenodd"})})}),Gr=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ClockIcon","aria-label":"clock",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M6 3v3H3v1h4V3z"}),e.jsx("path",{fillRule:"evenodd",d:"M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0m-1 0A5 5 0 1 1 1 6a5 5 0 0 1 10 0",clipRule:"evenodd"})]})}),$r=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ClockSolidIcon","aria-label":"clock solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0M6 3v3H3v1h4V3z",clipRule:"evenodd"})})}),Ur=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CloneIcon","aria-label":"clone",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M0 3h1V1h3V0H0zm3 2h1V4h7v7H4v-1H3v2h9V3H3zm3-4V0h4v2H9V1z"}),e.jsx("path",{d:"M0 5h1v2h5V5l3 2.5L6 10V8H0z"})]})}),_r=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ClosedcaptionIcon","aria-label":"closedcaption",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M4.306 8q-.555 0-.961-.213a1.43 1.43 0 0 1-.626-.651Q2.5 6.697 2.5 6.02q0-.705.24-1.15.24-.446.665-.658A2.2 2.2 0 0 1 4.383 4q.35 0 .633.07.286.066.484.163l-.247.656a4 4 0 0 0-.442-.147q-.226-.06-.435-.06-.342 0-.572.15a.9.9 0 0 0-.34.447q-.109.296-.109.735a2 2 0 0 0 .113.718.9.9 0 0 0 .336.439 1 1 0 0 0 .548.146q.321 0 .576-.077.255-.076.48-.198v.71a1.8 1.8 0 0 1-.477.185Q4.676 8 4.306 8m4 0q-.555 0-.961-.213a1.43 1.43 0 0 1-.626-.651Q6.5 6.697 6.5 6.02q0-.705.24-1.15.24-.446.665-.658A2.2 2.2 0 0 1 8.383 4q.35 0 .633.07.286.066.484.163l-.247.656a4 4 0 0 0-.442-.147q-.226-.06-.435-.06-.342 0-.572.15a.9.9 0 0 0-.34.447q-.108.296-.109.735a2 2 0 0 0 .113.718.9.9 0 0 0 .336.439 1 1 0 0 0 .548.146q.321 0 .576-.077.255-.076.48-.198v.71a1.8 1.8 0 0 1-.477.185Q8.676 8 8.306 8"}),e.jsx("path",{fillRule:"evenodd",d:"M0 11V1h12v10zm1-9h10v8H1z",clipRule:"evenodd"})]})}),Kr=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ClosedcaptionDisabledIcon","aria-label":"closedcaption disabled",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M3 3.707 3.707 3l5.657 5.657-.707.707zM0 2.121V11h8.879l-1-1H1V3.121zm11 6.758V2H4.121l-1-1H12v8.879z"}),e.jsx("path",{d:"M1.707 1 1 1.707 3.473 4.18q-.035.015-.068.033a1.5 1.5 0 0 0-.665.658q-.24.445-.24 1.15 0 .675.22 1.115.218.44.625.651.405.213.96.213.372 0 .626-.063.255-.059.477-.184v-.711q-.225.122-.48.198t-.576.077a1 1 0 0 1-.548-.146.9.9 0 0 1-.336-.44 2 2 0 0 1-.113-.717q0-.44.11-.735a.9.9 0 0 1 .339-.446 1 1 0 0 1 .22-.102L10.293 11l.707-.707L8.687 7.98a2 2 0 0 0 .721-.227v-.711q-.225.122-.48.198t-.576.077a1.1 1.1 0 0 1-.396-.068l-.467-.467-.02-.05a2 2 0 0 1-.114-.718q0-.44.11-.735a.9.9 0 0 1 .339-.446q.23-.15.572-.15.21 0 .435.06.226.058.442.146l.247-.656a2.3 2.3 0 0 0-.484-.163Q8.732 4 8.383 4q-.55 0-.978.213a1.5 1.5 0 0 0-.665.658q-.201.375-.234.928l-1.16-1.16.154-.406a2.3 2.3 0 0 0-.484-.163 2 2 0 0 0-.29-.052z"})]})}),Qr=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ClosedcaptionDisabledSolidIcon","aria-label":"closedcaption disabled solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M0 11V2.131l2.743 2.736-.003.004q-.24.445-.24 1.15 0 .675.22 1.115.218.44.625.651.405.213.96.213.372 0 .626-.063.255-.059.477-.184v-.227L8.891 11z"}),e.jsx("path",{d:"M3.355 6.014q0-.275.043-.493l1.675 1.67a2 2 0 0 1-.722.125 1 1 0 0 1-.547-.145.9.9 0 0 1-.336-.44 2 2 0 0 1-.113-.717M12 1v8.852L9.408 7.265v-.223a3 3 0 0 1-.15.074L7.453 5.313l.013-.034a.9.9 0 0 1 .339-.446q.23-.15.572-.15.21 0 .435.06.226.058.442.145l.247-.655a2.3 2.3 0 0 0-.484-.163Q8.732 4 8.383 4q-.55 0-.978.213a1.5 1.5 0 0 0-.563.491L3.132 1zm-1.693 10L1 1.716 1.716 1 11 10.267z"})]})}),Xr=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ClosedcaptionSolidIcon","aria-label":"closedcaption solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M12 1H0v10h12zM4.306 8q-.555 0-.961-.213a1.43 1.43 0 0 1-.626-.651Q2.5 6.697 2.5 6.02q0-.705.24-1.15.24-.446.665-.658A2.2 2.2 0 0 1 4.383 4q.35 0 .633.07.286.066.484.163l-.247.656a4 4 0 0 0-.442-.147q-.226-.06-.435-.06-.342 0-.572.15a.9.9 0 0 0-.34.447q-.109.296-.109.735a2 2 0 0 0 .113.718.9.9 0 0 0 .336.439 1 1 0 0 0 .548.146q.321 0 .576-.077.255-.076.48-.198v.71a1.8 1.8 0 0 1-.477.185Q4.676 8 4.306 8m3.039-.213Q7.75 8 8.305 8q.371 0 .626-.063.255-.059.477-.184v-.711q-.225.122-.48.198-.255.078-.576.077a1 1 0 0 1-.548-.146.9.9 0 0 1-.336-.44 2 2 0 0 1-.113-.717q0-.44.11-.735a.9.9 0 0 1 .339-.446q.23-.15.572-.15.21 0 .435.06.226.058.442.145l.247-.655a2.3 2.3 0 0 0-.484-.163Q8.732 4 8.383 4q-.55 0-.978.213a1.5 1.5 0 0 0-.665.658q-.24.445-.24 1.15 0 .675.22 1.115.218.44.625.651",clipRule:"evenodd"})})}),Jr=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"CloseSmallIcon","aria-label":"close small",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"m9.253 9.96.707-.707-3.182-3.182L9.96 2.889l-.707-.707-3.182 3.182L2.89 2.182l-.707.707 3.182 3.182-3.182 3.182.707.707 3.182-3.182z"})})}),Zr=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"CloudIcon","aria-label":"cloud",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"m3.148 4.949-.474.077A2 2 0 0 0 3 9h6.5a1.5 1.5 0 0 0 .23-2.983l-.658-.1-.161-.646a3.002 3.002 0 0 0-5.527-.74zm6.733.08a4.002 4.002 0 0 0-7.368-.99A3 3 0 0 0 3 10h6.5a2.5 2.5 0 0 0 .381-4.971",clipRule:"evenodd"})})}),Yr=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"CloudDisabledIcon","aria-label":"cloud disabled",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M2.033 4.16A3.001 3.001 0 0 0 3 10h4.889L6.886 9H3a2 2 0 0 1-.326-3.974l.196-.032zm8.597 4.325a1.5 1.5 0 0 0-.9-2.468l-.658-.1-.161-.646a3 3 0 0 0-3.677-2.172l-.787-.786a4.002 4.002 0 0 1 5.435 2.716 2.5 2.5 0 0 1 1.458 4.164zM10.307 11 1 1.716 1.716 1 11 10.267z"})})}),e0=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"CloudDisabledSolidIcon","aria-label":"cloud disabled solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M2.033 4.16A3.001 3.001 0 0 0 3 10h4.889zm9.307 5.033a2.5 2.5 0 0 0-1.458-4.164 4.002 4.002 0 0 0-5.435-2.716zM10.307 11 1 1.716 1.716 1 11 10.267z"})})}),t0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CloudDownloadIcon","aria-label":"cloud download",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"m2.674 5.026.474-.077.236-.419a3.002 3.002 0 0 1 5.527.74l.161.647.658.1A1.5 1.5 0 0 1 9.5 9h-.08l-1.002 1H9.5a2.5 2.5 0 0 0 .381-4.971 4.002 4.002 0 0 0-7.368-.99A3 3 0 0 0 3 10h.59L2.531 8.945a2 2 0 0 1 .142-3.919"}),e.jsx("path",{d:"M6.495 9.098V4h-.998v5.083l-1.59-1.587L3.2 8.2 6.004 11 8.8 8.209l-.707-.705z"})]})}),a0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CloudDownloadSolidIcon","aria-label":"cloud download solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M6 2a4 4 0 0 1 3.881 3.029A2.5 2.5 0 0 1 9.5 10h-.077l.793-.79-2.123-2.12-.598.597V5H4.497v2.672l-.59-.59-2.123 2.12.767.765a3 3 0 0 1-.038-5.928A4 4 0 0 1 6 2"}),e.jsx("path",{d:"M6.495 10.098V6h-.998v4.083l-1.59-1.587L3.2 9.2 6.004 12 8.8 9.209l-.707-.705z"})]})}),o0=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"CloudSolidIcon","aria-label":"cloud solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M3 10a3 3 0 0 1-.487-5.96 4.002 4.002 0 0 1 7.369.99A2.5 2.5 0 0 1 9.5 10z"})})}),n0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CloudSuccessIcon","aria-label":"cloud success",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M6 2c.942 0 1.809.326 2.492.871l-.713.713a3 3 0 0 0-4.395.946l-.236.419-.474.077A2 2 0 0 0 3 9h.636l1 1H3a3 3 0 0 1-.487-5.96A4 4 0 0 1 6 2m3.5 7H6.606l-1 1H9.5a2.5 2.5 0 0 0 .928-4.822l-.82.82.122.02A1.5 1.5 0 0 1 9.5 9"}),e.jsx("path",{d:"M10.778 2 5.12 7.657 3.707 6.242 3 6.95l2.121 2.122 6.364-6.364z"})]})}),l0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CloudSuccessSolidIcon","aria-label":"cloud success solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M6 2c.942 0 1.809.326 2.492.871l-3.37 3.371-1.415-1.414L1.586 6.95 4.636 10H3a3 3 0 0 1-.487-5.96A4 4 0 0 1 6 2m3.5 8H5.606l4.822-4.822A2.5 2.5 0 0 1 9.5 10"}),e.jsx("path",{d:"M10.778 2 5.12 7.657 3.707 6.242 3 6.95l2.121 2.122 6.364-6.364z"})]})}),r0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CloudSyncIcon","aria-label":"cloud sync",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"m3.148 4.949-.474.077a2 2 0 0 0-.26 3.887L3.501 10H3a3 3 0 0 1-.487-5.96 4.002 4.002 0 0 1 7.369.99 2.5 2.5 0 0 1 1.343 4.28l-.707-.708a1.5 1.5 0 0 0-.788-2.585l-.658-.1-.161-.646a3.002 3.002 0 0 0-5.527-.74z"}),e.jsx("path",{d:"m4.828 8.536-.707.707L2 7.12 4.121 5l.707.707-.914.914H7v1H3.914zm2.344-.452.707-.707L10 9.5l-2.121 2.12-.707-.707.914-.914H5v-1h3.086z"})]})}),s0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CloudSyncSolidIcon","aria-label":"cloud sync solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M3 10a3 3 0 0 1-.487-5.96 4.002 4.002 0 0 1 7.369.99 2.5 2.5 0 0 1 1.343 4.28L7.537 5.62h-1.38L4.12 3.586.586 7.12 3.464 10z"}),e.jsx("path",{d:"m4.121 9.243.707-.707-.914-.915H7v-1H3.914l.914-.914L4.121 5 2 7.121zm3.758-1.866-.707.707.914.915H5v1h3.086l-.914.914.707.707L10 9.499z"})]})}),i0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CloudUploadIcon","aria-label":"cloud upload",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"m2.674 5.026.474-.077.236-.419a3.002 3.002 0 0 1 5.527.74l.161.647.658.1A1.5 1.5 0 0 1 9.5 9h-2v1h2a2.5 2.5 0 0 0 .381-4.971 4.002 4.002 0 0 0-7.368-.99A3 3 0 0 0 3 10h1.5V9H3a2 2 0 0 1-.326-3.974"}),e.jsx("path",{d:"M6.495 6.902V12h-.998V6.917l-1.59 1.587L3.2 7.8 6.004 5 8.8 7.79l-.707.706z"})]})}),d0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CloudUploadSolidIcon","aria-label":"cloud upload solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M6 2a4 4 0 0 1 3.881 3.029A2.5 2.5 0 0 1 9.5 10h-.496l1.212-1.21-4.212-4.203L1.784 8.8 2.988 10a3 3 0 0 1-.475-5.96A4 4 0 0 1 6 2"}),e.jsx("path",{d:"M6.495 7.902V12h-.998V7.917l-1.59 1.587L3.2 8.8 6.004 6 8.8 8.791l-.707.705z"})]})}),c0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CoffeeIcon","aria-label":"coffee",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M1 10h8v1H1z"}),e.jsx("path",{fillRule:"evenodd",d:"M10 3H9v2h1a1 1 0 1 0 0-2M8 2v4h2a2 2 0 1 0 0-4z",clipRule:"evenodd"}),e.jsx("path",{fillRule:"evenodd",d:"M8 2H2v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1zm1-1v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V1z",clipRule:"evenodd"})]})}),u0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CoffeeSolidIcon","aria-label":"coffee solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M9 1H1v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6h1a2 2 0 1 0 0-4H9zm1 4H9V3h1a1 1 0 1 1 0 2M7.857 2H2.143v2h5.714z",clipRule:"evenodd"}),e.jsx("path",{d:"M9 10H1v1h8z"})]})}),v0=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"CollapseIcon","aria-label":"collapse",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M7 .996v4h4v-1H8.707l2.89-2.889L10.888.4l-2.89 2.89V.995zM4.996 11V7h-4v1H3.29L.4 10.89l.708.706 2.89-2.889V11zm0-6.004h-4v-1H3.29L.399 1.107 1.108.4l2.89 2.89V.995h1zM11 7H7v4h1V8.707l2.889 2.89.707-.708L8.707 8H11z",clipRule:"evenodd"})})}),h0=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"CollapseAllIcon","aria-label":"collapse all",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"m6 6.5-4 4 1 1 3-3 3 3 1-1zm0-1-4-4 1-1 3 3 3-3 1 1z"})})}),b0=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"CollapseAllHorizontalIcon","aria-label":"collapse all horizontal",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"m6.5 6 4 4 1-1-3-3 3-3-1-1zm-1 0-4 4-1-1 3-3-3-3 1-1z"})})}),p0=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ColumnChooserIcon","aria-label":"column chooser",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M0 0h12v12H0zm1 3v1h3v1H1v1h3v1H1v1h3v1H1v2h4V3zm5 0v1h3v1H6v1h3v1H6v1h3v1H6v2h5V3zm5-2H1v1h10z",clipRule:"evenodd"})})}),f0=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ColumnChooserSolidIcon","aria-label":"column chooser solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M0 12V0h12v12zM1 2h10v1H6v1h3v1H6v1h3v1H6v1h3v1H6v2H5V3H1zm0 2h3v1H1zm3 2H1v1h3zm0 2H1v1h3z",clipRule:"evenodd"})})}),g0=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"CommentarySolidIcon","aria-label":"commentary solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M2 0a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2v3l3.443-3H10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm1 2h6v1H3zm0 2h6v1H3zm0 2h4v1H3z",clipRule:"evenodd"})})}),x0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CompareIcon","aria-label":"compare",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"m7.8 1.564-.936.936H10v5.065a1.999 1.999 0 0 1-.5 3.935A2 2 0 0 1 9 7.565V3.5H6.907l.893.893-.707.707-2.121-2.121L7.092.857zM9.5 8.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2",clipRule:"evenodd"}),e.jsx("path",{fillRule:"evenodd",d:"M2.5.5A1.998 1.998 0 0 1 3 4.434V8.5h2.093L4.2 7.607l.707-.707 2.121 2.121-2.12 2.122-.708-.708.936-.935H2V4.434A1.998 1.998 0 0 1 2.5.5m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",clipRule:"evenodd"})]})}),m0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CompareSolidIcon","aria-label":"compare solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"m7.8 1.564-.936.936H10v5.065a1.999 1.999 0 0 1-.5 3.935A2 2 0 0 1 9 7.565V3.5H6.907l.893.893-.707.707-2.121-2.121L7.092.857z",clipRule:"evenodd"}),e.jsx("path",{fillRule:"evenodd",d:"M2.5.5A1.998 1.998 0 0 1 3 4.434V8.5h2.093L4.2 7.607l.707-.707 2.121 2.121-2.12 2.122-.708-.708.936-.935H2V4.434A1.998 1.998 0 0 1 2.5.5",clipRule:"evenodd"})]})}),I0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CompassIcon","aria-label":"compass",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"m4.586 4.586 4.242-1.414-1.414 4.242-4.242 1.414zm.79.79 1.871-.623-.623 1.87-1.871.624z",clipRule:"evenodd"}),e.jsx("path",{fillRule:"evenodd",d:"M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0m-1 0A5 5 0 1 1 1 6a5 5 0 0 1 10 0",clipRule:"evenodd"})]})}),w0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CompassSolidIcon","aria-label":"compass solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"m5.376 5.376 1.871-.623-.623 1.87-1.871.624z"}),e.jsx("path",{fillRule:"evenodd",d:"M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0M4.586 4.586l4.242-1.414-1.414 4.242-4.242 1.414z",clipRule:"evenodd"})]})}),y0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CookieIcon","aria-label":"cookie",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M4 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3.5 2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M5 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"}),e.jsx("path",{fillRule:"evenodd",d:"M5.001.083A6.002 6.002 0 0 0 6 12a6 6 0 0 0 5.917-5.002A1.996 1.996 0 0 1 10 5a3 3 0 0 1-2.989-3.261A2 2 0 0 1 6 0q-.51 0-.999.083m.193.982a5.001 5.001 0 1 0 5.508 6.64A3 3 0 0 1 9.14 5.907a4 4 0 0 1-3.133-3.665 3 3 0 0 1-.813-1.177",clipRule:"evenodd"}),e.jsx("path",{d:"M8.5 2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M11 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m.5-2.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"})]})}),z0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CookieSolidIcon","aria-label":"cookie solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M6 0a6 6 0 1 0 5.917 6.998A2 2 0 0 1 10 5a3 3 0 0 1-2.989-3.261A2 2 0 0 1 6 0M4 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-2 .5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1",clipRule:"evenodd"}),e.jsx("path",{d:"M9 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m2 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1-3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"})]})}),S0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CopySolidIcon","aria-label":"copy solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M8.707 0H4v9h7V2.293zM7 1h1v2h2v1H7z",clipRule:"evenodd"}),e.jsx("path",{d:"M8 10H3V3H1v9h7z"})]})}),j0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CreditCardIcon","aria-label":"credit card",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M5 7H2v1h3zm3 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0"}),e.jsx("path",{fillRule:"evenodd",d:"M0 9V3a1 1 0 0 1 1-1h10c.552 0 1 .446 1 .998v6.003A1 1 0 0 1 11 10H1a1 1 0 0 1-1-1m1-5v-.5a.5.5 0 0 1 .5-.5h9c.276 0 .5.222.5.498V4zm0 1v3.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V5z",clipRule:"evenodd"})]})}),R0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CreditCardSolidIcon","aria-label":"credit card solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M0 4V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1z"}),e.jsx("path",{fillRule:"evenodd",d:"M0 5v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zm1 3h3v1H1zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",clipRule:"evenodd"})]})}),C0=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"CropsIcon","aria-label":"crops",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M7 5.99V11H4V9c0-.336 0-.671-.022-1-.052-.79-.23-1.538-.835-2.143S1.79 5.074 1 5.022C.671 5 .336 5 0 5c0 .336 0 .672.022 1 .052.79.23 1.538.835 2.143S2.21 8.926 3 8.978V11H0v1h12v-1H8V5.986c1.079-.045 2.108-.237 2.929-1.057S11.94 3.079 11.986 2C12 1.67 12 1.335 12 1c-.335 0-.67 0-1 .014-1.079.045-2.108.237-2.929 1.057q-.278.28-.466.59a3.9 3.9 0 0 0-.89-1.375C5.678.25 4.366.049 3 .01 2.669 0 2.334 0 2 0c0 .334 0 .669.01 1 .039 1.367.24 2.68 1.276 3.714C4.32 5.75 5.633 5.951 7 5.99m-.993-3.997c.758.758.939 1.72.98 2.995-1.274-.042-2.236-.223-2.994-.98-.758-.759-.939-1.72-.98-2.996 1.274.042 2.236.223 2.994.98m4.215 2.228c-.554.554-1.248.715-2.204.761.046-.956.207-1.65.76-2.203.554-.554 1.248-.715 2.204-.761-.046.956-.207 1.65-.76 2.203m-7.25 3.75c-.05-.623-.185-1.055-.536-1.407-.352-.351-.784-.486-1.408-.536.05.624.185 1.056.536 1.408s.784.486 1.408.536",clipRule:"evenodd"})})}),k0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CropsSolidIcon","aria-label":"crops solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M7.99 5c.01.331.01.666.01 1v5h4v1H0v-1h3V8.978c-.79-.052-1.538-.23-2.143-.835S.074 6.79.022 6C0 5.672 0 5.336 0 5c.336 0 .671 0 1 .022.79.052 1.538.23 2.143.835S3.926 7.21 3.978 8C4 8.329 4 8.664 4 9v2h3V5.99c-1.367-.039-2.68-.24-3.714-1.276C2.25 3.68 2.049 2.367 2.01 1 2 .669 2 .334 2 0c.334 0 .669 0 1 .01 1.367.039 2.68.24 3.714 1.276C7.75 2.32 7.951 3.633 7.99 5"}),e.jsx("path",{d:"M8.99 4.971c-.029-.997-.14-2.106-.658-3.134.773-.624 1.7-.783 2.668-.823C11.33 1 11.665 1 12 1c0 .335 0 .67-.014 1-.045 1.079-.237 2.108-1.057 2.929-.562.561-1.222.829-1.929.956 0-.297-.001-.606-.01-.914"})]})}),H0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CsvIcon","aria-label":"csv",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M1 0v6h1V1h5v3h3v2h1V2L9 0zm9 3v-.586L8.586 1H8v2z",clipRule:"evenodd"}),e.jsx("path",{d:"M1.893 7.677q.284-.13.643-.13.303 0 .588.09.284.087.543.211l.287-.677a3 3 0 0 0-.677-.236 3.2 3.2 0 0 0-.738-.085q-.57 0-1.015.188-.44.185-.742.53a2.3 2.3 0 0 0-.458.813 3.3 3.3 0 0 0-.157 1.04q0 .776.246 1.353.25.577.752.895.505.318 1.272.318.406 0 .717-.055.312-.054.616-.174v-.697q-.322.105-.623.167a3 3 0 0 1-.618.062q-.513 0-.848-.222a1.34 1.34 0 0 1-.499-.643 2.8 2.8 0 0 1-.164-1.001q0-.435.103-.78.102-.349.297-.59.195-.247.475-.377m5.398 2.882q0 .443-.219.765-.214.321-.622.492-.403.171-.964.171-.273 0-.523-.03a4 4 0 0 1-.471-.09 2.6 2.6 0 0 1-.4-.146v-.773q.305.133.68.243.376.105.766.106.318 0 .526-.082a.66.66 0 0 0 .314-.24.65.65 0 0 0 .103-.365.6.6 0 0 0-.12-.376q-.12-.154-.362-.28a6 6 0 0 0-.602-.277 4 4 0 0 1-.471-.226 2 2 0 0 1-.397-.297 1.3 1.3 0 0 1-.277-.404 1.4 1.4 0 0 1-.099-.553q0-.424.202-.725.205-.3.574-.461.373-.16.868-.161.394 0 .739.082.348.082.683.232l-.26.66a5 5 0 0 0-.598-.202 2.3 2.3 0 0 0-.588-.075q-.26 0-.44.079a.6.6 0 0 0-.277.222.6.6 0 0 0-.093.335q0 .219.106.37.11.146.335.27.23.122.588.273.414.17.7.358.292.188.445.452.154.26.154.652M8.34 6.922H7.5l1.747 4.997h.868l1.746-4.997h-.84l-1.057 3.127a6 6 0 0 0-.102.335q-.055.195-.106.393-.048.198-.075.352a5 5 0 0 0-.079-.352 8 8 0 0 0-.106-.393q-.054-.195-.102-.331z"})]})}),M0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CsvSolidIcon","aria-label":"csv solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M1 0v6h10V2L9 0zm7 1H7v3h3V3H8z",clipRule:"evenodd"}),e.jsx("path",{d:"M1.893 7.677q.284-.13.643-.13.303 0 .588.09.284.087.543.211l.287-.677a3 3 0 0 0-.677-.236 3.2 3.2 0 0 0-.738-.085q-.57 0-1.015.188-.44.185-.742.53a2.3 2.3 0 0 0-.458.813 3.3 3.3 0 0 0-.157 1.04q0 .776.246 1.353.25.577.752.895.505.318 1.272.318.406 0 .717-.055.312-.054.616-.174v-.697q-.322.105-.623.167a3 3 0 0 1-.618.062q-.513 0-.848-.222a1.34 1.34 0 0 1-.499-.643 2.8 2.8 0 0 1-.164-1.001q0-.435.103-.78.102-.349.297-.59.195-.247.475-.377m5.398 2.882q0 .443-.219.765-.214.321-.622.492-.403.171-.964.171-.273 0-.523-.03a4 4 0 0 1-.471-.09 2.6 2.6 0 0 1-.4-.146v-.773q.305.133.68.243.376.105.766.106.318 0 .526-.082a.66.66 0 0 0 .314-.24.65.65 0 0 0 .103-.365.6.6 0 0 0-.12-.376q-.12-.154-.362-.28a6 6 0 0 0-.602-.277 4 4 0 0 1-.471-.226 2 2 0 0 1-.397-.297 1.3 1.3 0 0 1-.277-.404 1.4 1.4 0 0 1-.099-.553q0-.424.202-.725.205-.3.574-.461.373-.16.868-.161.394 0 .739.082.348.082.683.232l-.26.66a5 5 0 0 0-.598-.202 2.3 2.3 0 0 0-.588-.075q-.26 0-.44.079a.6.6 0 0 0-.277.222.6.6 0 0 0-.093.335q0 .219.106.37.11.146.335.27.23.122.588.273.414.17.7.358.292.188.445.452.154.26.154.652M8.34 6.922H7.5l1.747 4.997h.868l1.746-4.997h-.84l-1.057 3.127a6 6 0 0 0-.102.335q-.055.195-.106.393-.048.198-.075.352a5 5 0 0 0-.079-.352 8 8 0 0 0-.106-.393q-.054-.195-.102-.331z"})]})}),B0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CurrencyIcon","aria-label":"currency",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M6.548 3.14c.452.063.86.184 1.113.27l-.32.947c-.357-.12-.947-.282-1.458-.255-.251.012-.442.069-.572.159a.64.64 0 0 0-.253.379l-.022.09c-.033.17-.016.26 0 .306a.27.27 0 0 0 .109.129c.163.118.435.194.856.295.367.088.86.197 1.247.435.205.125.4.296.54.534q.213.362.212.83c0 .527-.217.94-.588 1.208-.256.185-.56.284-.864.334v.895H5.55v-.875A6.2 6.2 0 0 1 4 8.476l.354-.935c.446.17 1.204.338 1.822.297.31-.02.525-.09.651-.182.099-.071.175-.175.175-.397a.6.6 0 0 0-.072-.32.6.6 0 0 0-.202-.192c-.224-.137-.541-.215-.958-.314-.364-.087-.854-.2-1.21-.456a1.27 1.27 0 0 1-.461-.598c-.095-.26-.1-.544-.041-.843l.043-.179c.116-.403.34-.711.646-.921.249-.171.529-.262.803-.305V2.3h.998z"}),e.jsx("path",{fillRule:"evenodd",d:"M6 .5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9",clipRule:"evenodd"})]})}),V0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CurrencyExchangeIcon","aria-label":"currency exchange",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M7.296 1.172A5 5 0 0 0 1 6.002H0a6 6 0 0 1 11.002-3.317V1.5h1v3H9v-1h1.332A5 5 0 0 0 9.12 2.093a5 5 0 0 0-1.825-.92m-2.589 9.658A5 5 0 0 0 11 6.001h1A6 6 0 0 1 1 9.319v1.183H0v-3h3v1H1.67a5 5 0 0 0 1.21 1.41 5 5 0 0 0 1.826.92"}),e.jsx("path",{d:"M6.548 3.142c.452.063.86.183 1.113.269l-.32.948c-.357-.12-.947-.282-1.458-.256-.251.013-.442.07-.572.16a.64.64 0 0 0-.253.378l-.022.091c-.033.17-.016.26 0 .306a.27.27 0 0 0 .109.129c.163.118.435.194.856.295.367.087.86.197 1.247.434.205.126.4.297.54.534.142.24.212.52.212.83 0 .528-.217.94-.588 1.208-.256.186-.56.285-.864.334v.896H5.55v-.875A6 6 0 0 1 4 8.477l.354-.934c.446.17 1.204.337 1.822.297.31-.021.525-.09.651-.182.099-.071.175-.175.175-.398a.6.6 0 0 0-.072-.319.6.6 0 0 0-.202-.192c-.224-.137-.541-.215-.958-.315-.364-.087-.854-.199-1.21-.456a1.27 1.27 0 0 1-.461-.597c-.095-.26-.1-.545-.041-.843l.043-.179c.116-.403.34-.712.646-.922.249-.17.529-.262.803-.304V2.3h.998z"})]})}),L0=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"CurrencySolidIcon","aria-label":"currency solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M6 .5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m-.45 1.8v.83a1.9 1.9 0 0 0-.803.306c-.306.21-.53.518-.646.921l-.043.18a1.55 1.55 0 0 0 .04.842c.097.263.268.457.463.598.355.257.845.369 1.209.456.417.1.734.177.958.314.1.062.162.126.202.192a.6.6 0 0 1 .072.32c0 .222-.076.326-.175.397-.126.092-.342.161-.651.182-.618.04-1.376-.127-1.822-.297L4 8.476c.387.147.962.293 1.55.345v.875h.998v-.895c.303-.05.608-.149.864-.334.37-.269.588-.681.588-1.208q0-.468-.212-.83a1.6 1.6 0 0 0-.54-.534c-.388-.238-.88-.347-1.247-.435-.421-.1-.693-.177-.856-.295a.27.27 0 0 1-.109-.129c-.016-.045-.033-.136 0-.306l.022-.09a.64.64 0 0 1 .253-.38c.13-.089.32-.146.572-.158.51-.027 1.101.135 1.458.255l.32-.948a6.3 6.3 0 0 0-1.113-.268V2.3z",clipRule:"evenodd"})})}),A0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"CutIcon","aria-label":"cut",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"m1.967 0 3.727 4.77-1.116 1.427A290 290 0 0 1 2.012 2.86C1.415 2.04.929.81 1.967 0"}),e.jsx("path",{fillRule:"evenodd",d:"M8.349 11.049c-.271-.349-1.07-1.373-2.013-2.587l1.118-1.44 1.572 2.013a1.584 1.584 0 1 1-.677 2.014m2.275-.65a.823.823 0 1 1-1.646.035.823.823 0 0 1 1.646-.035m-.605-7.539c-.576.792-6.044 7.813-6.417 8.29a1.583 1.583 0 1 1-.607-2.103L10.063 0c1.038.811.552 2.04-.044 2.86m-7.803 8.38a.823.823 0 1 0-.034-1.647.823.823 0 0 0 .034 1.647m3.802-3.93a.634.634 0 1 0 0-1.267.634.634 0 0 0 0 1.267",clipRule:"evenodd"})]})}),T0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"DarkSolidIcon","aria-label":"dark solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M11.186 9.02q-.481.079-.986.08A6 6 0 0 1 5.014.08 6.002 6.002 0 0 0 6 12a6 6 0 0 0 5.186-2.98"}),e.jsx("path",{d:"M6.387 2.899H7.45V3.91H6.387zM9.58.876h1.065v1.011H9.58zm0 4.046h1.065v1.011H9.58z"})]})}),q0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"DashboardSolidIcon","aria-label":"dashboard solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M6 7.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"}),e.jsx("path",{fillRule:"evenodd",d:"M11.197 10A6 6 0 1 0 .802 10zM5.5 2.025v1.51a3.5 3.5 0 0 1 1 0v-1.51a5 5 0 0 0-1 0M2.362 3.57l1.062 1.06c.227-.246.49-.46.779-.634L3.12 2.913a5 5 0 0 0-.758.657M2.5 7H1q0-.514.1-1h1.545A3.5 3.5 0 0 0 2.5 7m8.4-1H9.355A3.5 3.5 0 0 1 9.5 7H11q0-.514-.1-1m-3.4.5q-.002-.281-.096-.53l1.59-1.59-.708-.706-1.53 1.53A1.5 1.5 0 1 0 7.5 6.5",clipRule:"evenodd"})]})}),P0=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"DatabaseSolidIcon","aria-label":"database solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M0 5.5V0h12v5.5zm2-3.25h1v1H2zm2 0h1v1H4zM0 12V6.5h12V12zm2-3.25h1v1H2zm2 0h1v1H4z",clipRule:"evenodd"})})}),N0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"DatasetManagerIcon","aria-label":"dataset manager",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M8.162 3.008q.37.023.706.115.438.115.773.387.333.264.524.694.19.43.191 1.046l-.006.217a4.5 4.5 0 0 1-.09.67l-.052.223q-.086.333-.215.657a4.5 4.5 0 0 1-.4.808l-.122.183q-.188.263-.403.468.077.36.402.589c.217.152 1.421.527 1.554.562.135.036.964.328.976.332V12h-.999v-1.329l-.086-.03-.145-.047a18 18 0 0 1-1.35-.451 2.7 2.7 0 0 1-.526-.261 1.95 1.95 0 0 1-.755-1.013l-.05-.186-.115-.547.405-.385q.188-.176.369-.46l.088-.146q.126-.225.222-.48l.004-.01.003-.01a4.4 4.4 0 0 0 .218-.715 3.3 3.3 0 0 0 .074-.68 1.8 1.8 0 0 0-.065-.53l-.04-.11a.9.9 0 0 0-.17-.261l-.06-.054-.012-.01a1 1 0 0 0-.394-.194l-.012-.003a2.5 2.5 0 0 0-.504-.082L7.913 4q-.388 0-.713.088l-.012.003a1 1 0 0 0-.31.134l-.083.06-.007.005-.006.005a.7.7 0 0 0-.176.209l-.053.106c-.057.127-.106.33-.106.64q-.001.318.074.68l.042.18q.047.18.11.359l.066.177.003.01.004.008.067.167q.107.244.243.46l.091.136q.138.191.278.324l.405.385-.116.547c-.108.508-.4.914-.804 1.199-.352.248-.8.42-1.273.55-.445.123-.828.225-.924.253a2 2 0 0 0-.187.06l-.044.018-.045.012a.6.6 0 0 0-.26.138l-.066.07-.004.004-.004.006a.4.4 0 0 0-.09.175l-.007.06c-.006.105-.006.42-.004.772h-1c-.001-.208-.003-.218-.002-.403l.007-.415q.02-.408.259-.74l.073-.094q.325-.396.83-.536l.268-.088.935-.255q.478-.132.78-.293l.183-.111a.95.95 0 0 0 .401-.59 3 3 0 0 1-.403-.467l-.122-.183a4.5 4.5 0 0 1-.4-.808 6 6 0 0 1-.215-.657l-.052-.222a4.5 4.5 0 0 1-.09-.671l-.006-.217q0-.538.147-.935l.045-.11q.143-.324.366-.553l.157-.142a2 2 0 0 1 .774-.387c.318-.087.647-.123.976-.123z"}),e.jsx("path",{d:"M11 3.25C11 1.731 8.761.5 6 .5S1 1.731 1 3.25v5.5c0 .77.574 1.465 1.5 1.964V9.526C2.105 9.21 2 8.923 2 8.75v-1.1c.721.528 1.78.909 3 1.045V7.688c-.82-.103-1.527-.33-2.054-.62C2.18 6.647 2 6.226 2 6V4.9c.721.528 1.78.909 3 1.045V4.938c-.82-.103-1.527-.33-2.054-.62C2.18 3.897 2 3.476 2 3.25s.18-.647.946-1.068C3.677 1.78 4.755 1.5 6 1.5s2.323.28 3.054.682c.766.421.946.842.946 1.068z"})]})}),D0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"DatasetManagerSolidIcon","aria-label":"dataset manager solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M8.166 3.008q.368.023.706.115.438.114.773.387.334.264.524.694.192.43.192 1.046l-.007.217a4.5 4.5 0 0 1-.089.67l-.053.223q-.085.333-.214.657a4.5 4.5 0 0 1-.4.808l-.124.183q-.188.263-.402.468.076.36.401.589c.217.152 1.422.527 1.556.562.133.035.966.328.976.332V12H3.007l-.006-.403.006-.415q.02-.408.26-.74l.072-.094q.325-.396.831-.536l.268-.088.936-.255q.48-.132.78-.293l.183-.111a.94.94 0 0 0 .402-.59 3.2 3.2 0 0 1-.404-.467l-.122-.183a4.5 4.5 0 0 1-.4-.808 5 5 0 0 1-.216-.657l-.052-.222a4.5 4.5 0 0 1-.09-.671L5.45 5.25q0-.538.146-.935l.045-.11q.143-.324.366-.553l.159-.142q.333-.272.773-.387c.318-.087.648-.123.978-.123z"}),e.jsx("path",{d:"M11 3.25C11 1.731 8.761.5 6 .5S1 1.731 1 3.25v5.5c0 .77.574 1.465 1.5 1.964V9.526C2.105 9.21 2 8.923 2 8.75v-1.1c.721.528 1.78.909 3 1.045V7.688c-.82-.103-1.527-.33-2.054-.62C2.18 6.647 2 6.226 2 6V4.9c.721.528 1.78.909 3 1.045V4.938c-.82-.103-1.527-.33-2.054-.62C2.18 3.897 2 3.476 2 3.25s.18-.647.946-1.068C3.677 1.78 4.755 1.5 6 1.5s2.323.28 3.054.682c.766.421.946.842.946 1.068z"})]})}),F0=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"DeleteSolidIcon","aria-label":"delete solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M3 1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1h3v1h-1v7.25A1.75 1.75 0 0 1 8.25 12H3a2 2 0 0 1-2-2V3H0V2h3zm1 1h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5zM3 4h1v6H3zm2 0h1v6H5zm2 0h1v6H7z",clipRule:"evenodd"})})}),O0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"DevicesIcon","aria-label":"devices",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M0 9h5v2H3v1h4V8H1V1h10v4h1V0H0z"}),e.jsx("path",{fillRule:"evenodd",d:"M8 12V6h4v6zm1-5h2v4H9z",clipRule:"evenodd"})]})}),W0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"DevicesSolidIcon","aria-label":"devices solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M0 9h5v2H3v1h4V5h5V0H0z"}),e.jsx("path",{d:"M12 12H8V6h4z"})]})}),E0=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"DiamondIcon","aria-label":"diamond",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M0 4.031 2 0h8l2 4.031L6 11 0 4.062l.03-.03zm6 4.435L8 4.03H4zM4.944 8.34 1.286 4.03H3zM9 4.03 7.171 8.086l3.503-4.055zm1.382-1.008H8.9l-.4-2.015h.882zM7.5 1.008l.4 2.015H4.1l.4-2.015zM1.618 3.023H3.1l.4-2.015h-.882z",clipRule:"evenodd"})})}),G0=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"DisplayIcon","aria-label":"display",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M0 9h5v2H3v1h6v-1H7V9h5V0H0zm11-8H1v7h10z",clipRule:"evenodd"})})}),$0=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"DisplaySolidIcon","aria-label":"display solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M0 9h5v2H3v1h6v-1H7V9h5V0H0z"})})}),U0=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"DivideIcon","aria-label":"divide",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M7 11H5V9h2zm4-4.5H1v-1h10zM7 3H5V1h2z"})})}),_0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"DocumentDraftIcon","aria-label":"document draft",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M8.156 1H2v10h5V8h3V5h1v5l-2 2H1V0h7.156zM8 11h.586L10 9.586V9H8z",clipRule:"evenodd"}),e.jsx("path",{d:"M6 9H3V8h3zm4.94-6.525-3.89 3.89-2.121.706.707-2.122 3.888-3.888zM4 7H3V6h1zm1-2H3V4h2zM10.232.354a.5.5 0 0 1 .708 0l.707.707a.5.5 0 0 1 0 .707l-.354.353L9.879.707z"})]})}),K0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"DocumentEditIcon","aria-label":"document edit",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M8.156 1H2v10h5V8h3V5h1v5l-2 2H1V0h7.156zM8 11h.586L10 9.586V9H8z",clipRule:"evenodd"}),e.jsx("path",{d:"m10.94 2.475-3.89 3.89-2.121.706.707-2.122 3.888-3.888zM10.232.354a.5.5 0 0 1 .708 0l.707.707a.5.5 0 0 1 0 .707l-.354.353L9.879.707z"})]})}),Q0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"DocumentSearchIcon","aria-label":"document search",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M11 2v3.5h-1V4H7V1H2v10h5v1H1V0h8zM8 3h2v-.586L8.586 1H8z",clipRule:"evenodd"}),e.jsx("path",{fillRule:"evenodd",d:"M8 5.5a2.5 2.5 0 0 1 2.085 3.878l1.768 1.768-.707.707-1.768-1.768A2.5 2.5 0 1 1 8 5.5m0 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3",clipRule:"evenodd"}),e.jsx("path",{d:"M5 9H3V8h2zm0-2H3V6h2zm1-2H3V4h3z"})]})}),X0=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"DocumentSolidIcon","aria-label":"document solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M1 0v12h10V2L9 0zm7 1H7v3h3V3H8z",clipRule:"evenodd"})})}),J0=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"DoesNotEqualIcon","aria-label":"does not equal",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"m7.518 2.26-.465 1.737H10v1.001H6.785L6.25 7.002H10v1.001H5.981L5.447 10l-.966-.26.465-1.737H2V7.002h3.214l.536-2.004H2V3.997h4.018L6.552 2z"})})}),Z0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"DoubleChevronDownIcon","aria-label":"double chevron down",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M10.401.5 6 4.808 1.599.5.5 1.492 6 7l5.5-5.508z"}),e.jsx("path",{d:"M10.401 5 6 9.308 1.599 5 .5 5.992 6 11.5l5.5-5.508z"})]})}),Y0=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"DoubleChevronUpIcon","aria-label":"double chevron up",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M1.599 11.5 6 7.192l4.401 4.308 1.099-.992L6 5 .5 10.508z"}),e.jsx("path",{d:"M1.599 7 6 2.692 10.401 7l1.099-.992L6 .5.5 6.008z"})]})}),es=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"EditSolidIcon","aria-label":"edit solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M8.159.294a1.003 1.003 0 0 1 1.419 0l2.128 2.128a1.003 1.003 0 0 1 0 1.42L10.287 5.26 6.74 1.713zM1.774 6.679l4.221-4.222.239.239L9.578 5.97 5.32 10.226 0 12z"})})}),ts=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"EqualIcon","aria-label":"equal",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M10 8H2V7h8zm0-3H2V4h8z"})})}),as=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ErrorExecuteIcon","aria-label":"error execute",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0M8.607 9.668a4.5 4.5 0 0 1-6.275-6.275zm1.061-1.06L3.393 2.331a4.5 4.5 0 0 1 6.275 6.275",clipRule:"evenodd"})})}),os=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ExpandAllIcon","aria-label":"expand all",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M6 0 2 4l1 1 3-3 3 3 1-1zm0 12L2 8l1-1 3 3 3-3 1 1z"})})}),ns=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ExpandAllHorizontalIcon","aria-label":"expand all horizontal",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"m0 6 4 4 1-1-3-3 3-3-1-1zm12 0-4 4-1-1 3-3-3-3 1-1z"})})}),ls=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ExponentiationIcon","aria-label":"exponentiation",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M9.001 5.512 8.124 6 6.002 2.097 3.875 6 3 5.512 6.005 0z"})})}),rs=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ExportIcon","aria-label":"export",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M5 1H1v10h4v-1H2V2h3z"}),e.jsx("path",{d:"M4 6.5v-1h6.094L7.412 2.82l.707-.707L12.01 6 8.118 9.89l-.707-.707L10.094 6.5z"})]})}),ss=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ExportSolidIcon","aria-label":"export solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M0 0h12v5.993L8.12 2.112l-.708.707L10.094 5.5H4v1h6.094L7.412 9.183l.707.707L12 6.009V12H0zm1 1h4v1H2v8h3v1H1z",clipRule:"evenodd"})})}),is=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"FavoriteHalfIcon","aria-label":"favorite half",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M5.546.303a.502.502 0 0 1 .902 0l1.554 3.213 3.57.684a.5.5 0 0 1 .277.827L9.403 7.71l.591 3.69a.5.5 0 0 1-.647.556l-3.35-1.648-3.277 1.618a.5.5 0 0 1-.716-.527l.592-3.689L.151 5.027A.5.5 0 0 1 .426 4.2l3.57-.684zm.45 8.89 2.858 1.409-.515-3.208 2.17-2.382-3.188-.61-1.323-2.734z",clipRule:"evenodd"})})}),ds=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"FeedbackIcon","aria-label":"feedback",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M8.165 3.008q.37.023.706.115.44.114.774.387.333.263.524.694.19.43.191 1.046l-.006.217a4.5 4.5 0 0 1-.09.67l-.052.223q-.086.333-.215.657a4.5 4.5 0 0 1-.4.808l-.123.183q-.189.263-.403.468.077.36.402.588c.216.153 1.42.527 1.555.563.133.035.956.324.977.332V12h-1v-1.33l-.086-.028-.146-.048a18 18 0 0 1-1.35-.451 2.7 2.7 0 0 1-.527-.261 1.95 1.95 0 0 1-.754-1.013l-.05-.186-.115-.547.405-.385q.188-.176.369-.46l.088-.146q.125-.226.222-.48l.003-.01.004-.01a4.4 4.4 0 0 0 .218-.715q.075-.363.074-.68a1.8 1.8 0 0 0-.065-.53l-.04-.11a.9.9 0 0 0-.17-.261l-.06-.054-.012-.01a1 1 0 0 0-.394-.194l-.013-.003a2.5 2.5 0 0 0-.503-.082L7.916 4q-.389 0-.714.088l-.012.003q-.18.047-.31.134l-.083.06-.007.005-.006.005a.7.7 0 0 0-.176.209l-.053.105c-.057.128-.106.33-.106.641q-.001.317.073.68l.043.18q.048.18.11.359l.066.177.003.01.004.008.067.167q.106.244.243.46l.091.136q.138.191.278.324l.405.385-.116.547c-.108.508-.4.914-.804 1.199-.352.248-.8.42-1.274.55-.445.123-.828.225-.924.253a2 2 0 0 0-.187.06l-.044.018-.045.012a.6.6 0 0 0-.261.138l-.066.07-.004.004-.004.006a.4.4 0 0 0-.09.175l-.007.06c-.006.105-.006.42-.004.772H3.001L3 11.597l.007-.415q.02-.409.259-.74l.073-.094q.325-.396.83-.536l.269-.088.935-.255q.48-.132.781-.293l.183-.112a.94.94 0 0 0 .401-.588 3.3 3.3 0 0 1-.403-.468l-.122-.183a4.5 4.5 0 0 1-.4-.808 6 6 0 0 1-.216-.657l-.052-.222a4.5 4.5 0 0 1-.09-.671L5.45 5.25q0-.538.147-.936l.045-.11q.142-.322.366-.552l.158-.142q.335-.272.773-.387A3.7 3.7 0 0 1 7.917 3z"}),e.jsx("path",{d:"M10 0a2 2 0 0 1 2 2v6.5h-1V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v7.74L3 8h1.5v1h-1L0 11.955V2a2 2 0 0 1 2-2z"}),e.jsx("path",{d:"M4.5 7H2V6h2.5zm0-2H2V4h2.5zm1-1.955L2 3V2h3.5z"})]})}),cs=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"FeedbackSolidIcon","aria-label":"feedback solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M8.165 3.008q.37.023.706.115.44.114.774.387.333.263.524.694.19.43.191 1.046l-.006.217a4.5 4.5 0 0 1-.09.67l-.052.223q-.086.333-.215.657a4.5 4.5 0 0 1-.4.808l-.123.183q-.189.263-.403.468.077.36.402.588c.216.153 1.42.527 1.555.563.133.035.956.324.977.332V12H3v-.403l.007-.415q.02-.409.259-.74l.073-.094q.325-.396.83-.536l.269-.088.935-.255q.48-.132.781-.293l.183-.112a.94.94 0 0 0 .401-.588 3.3 3.3 0 0 1-.403-.468l-.122-.183a4.5 4.5 0 0 1-.4-.808 6 6 0 0 1-.216-.657l-.052-.222a4.5 4.5 0 0 1-.09-.671L5.45 5.25q0-.538.147-.936l.045-.11q.142-.322.366-.552l.158-.142q.335-.272.773-.387A3.7 3.7 0 0 1 7.917 3z"}),e.jsx("path",{d:"M10 0a2 2 0 0 1 2 2v6.5h-1V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v7.74L3 8h1.5v1h-1L0 11.955V2a2 2 0 0 1 2-2z"}),e.jsx("path",{d:"M4.5 7H2V6h2.5zm0-2H2V4h2.5zm1-1.955L2 3V2h3.5z"})]})}),us=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"FigmaIcon","aria-label":"figma",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M4 1a2 2 0 0 0-1.323 3.5A2 2 0 0 0 2 6c0 .597.262 1.134.677 1.5A2 2 0 0 0 4 11h.25A2.25 2.25 0 0 0 6.5 8.75V7.475A1.75 1.75 0 1 0 8.786 4.84 2 2 0 0 0 8 1zm1.5 1H4a1 1 0 0 0 0 2h1.5zm0 5V5H4a1 1 0 0 0 0 2zM4 8a1 1 0 0 0 0 2h.25c.69 0 1.25-.56 1.25-1.25V8zm2.525-3-.025.025V5zM6.5 4H8a1 1 0 1 0 0-2H6.5zm2 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0",clipRule:"evenodd"})})}),vs=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"FilterClearIcon","aria-label":"filter clear",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M6.714 6 8.5 4.214 7.786 3.5 6 5.286 4.214 3.5l-.714.714L5.286 6 3.5 7.786l.714.714L6 6.714 7.786 8.5l.714-.714zM6.5 8.628l1 1V12h-3V9.629l1-1V11h1z"}),e.jsx("path",{d:"m3.872 6-.01.009-.03-.05zm-.683-2.889-.724.724L0 0h12L9.535 3.835 8.81 3.11 10.168 1H1.832zm4.948 2.898.032-.05-.04.041z"})]})}),hs=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"FilterClearSolidIcon","aria-label":"filter clear solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"m6 8.129 1.5 1.5V12h-3V9.629zm2.137-2.12.032-.05-.04.041zM12 0 9.535 3.835l-1.75-1.75L6 3.873 4.214 2.086 2.465 3.835 0 0zM3.872 6l-.04-.04.03.049z"}),e.jsx("path",{d:"M6 6.714 7.786 8.5l.714-.714L6.714 6 8.5 4.214 7.786 3.5 6 5.286 4.214 3.5l-.714.714L5.286 6 3.5 7.786l.714.714z"})]})}),bs=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"FilterSolidIcon","aria-label":"filter solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M7.5 7 12 0H0l4.5 7v5h3z",clipRule:"evenodd"})})}),ps=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"FirstIcon","aria-label":"first",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"m5 6 4.326 4L10 9.231 6.505 6 10 2.769 9.326 2zM3 2H2v8h1z"})})}),fs=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"FlagIcon","aria-label":"flag",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M3.754 0q.714 0 1.394.129.68.117 1.336.258.645.129 1.29.27.656.14 1.359.14.457 0 .867-.047.41-.059.75-.094.188-.023.645-.07Q11.861.525 12 .5v7q-.139.024-.605.094-.457.07-.645.093-.328.035-.727.083a7 7 0 0 1-.843.046q-.75 0-1.453-.117a53 53 0 0 1-1.372-.27 19 19 0 0 1-1.3-.327 4.3 4.3 0 0 0-1.29-.2q-.926 0-1.253.106A4 4 0 0 0 2 7.175V12H1V.55l.14-.093q.048-.034.61-.246Q2.324 0 3.754 0m.012.95q-.915 0-1.254.116-.328.118-.504.188L2 6.25c.203-.062.422-.113.64-.168Q2.98 6 3.767 6q.714 0 1.382.188.68.175 1.336.316l1.23.27q.587.128 1.29.128.445 0 1.055-.047c.406-.039.714-.074.941-.105V1.605l-.871.094q-.54.06-.984.059-.762 0-1.442-.153-.68-.163-1.348-.304a27 27 0 0 0-1.3-.246 8 8 0 0 0-1.29-.106"})})}),gs=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"FlagSolidIcon","aria-label":"flag solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M5.148.129A7.5 7.5 0 0 0 3.754 0Q2.324 0 1.75.21q-.562.213-.61.247L1 .551V12h1V7.184c.117-.055.293-.114.512-.176q.327-.106 1.254-.106.656 0 1.289.2.645.187 1.3.328.669.14 1.372.27.702.116 1.453.116.445 0 .843-.046.399-.048.727-.082.188-.024.645-.094.466-.07.605-.094V.504a19 19 0 0 1-.605.082q-.457.047-.645.07-.34.036-.75.094a8 8 0 0 1-.867.047 6.5 6.5 0 0 1-1.36-.14Q7.13.514 6.484.386 5.83.246 5.148.129"})})}),xs=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"FolderClosedIcon","aria-label":"folder closed",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M12 12V2H6L4 1H0v11zM3.764 2l2 1H11v1H1V2zM1 5v6h10V5z",clipRule:"evenodd"})})}),ms=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"FolderClosedSolidIcon","aria-label":"folder closed solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M12 2v10H0V1h4l2 1zm-1 3V4H1v1z",clipRule:"evenodd"})})}),Is=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"FolderOpenSolidIcon","aria-label":"folder open solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M4.118 1H0v11h12V2H6.118zM11 3H5.882l-2-1H1v8l3-6h7z",clipRule:"evenodd"})})}),ws=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"Forward5Icon","aria-label":"forward 5",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M4.021 2C1.772 2-.039 3.835.001 6.071.04 8.252 1.828 10 4.02 10H8v2l4-2.5L8 7v2H4.021a3.01 3.01 0 0 1-3.015-2.946A3.01 3.01 0 0 1 4.02 3z"}),e.jsx("path",{d:"M8.385 2.126q.482 0 .848.174.369.171.574.506.205.331.205.814 0 .526-.222.909a1.46 1.46 0 0 1-.653.584q-.43.205-1.05.205-.392 0-.734-.068a2 2 0 0 1-.584-.205V4.32q.256.144.615.236.358.09.687.089.348 0 .598-.103a.8.8 0 0 0 .383-.314.97.97 0 0 0 .136-.537q0-.43-.276-.663-.274-.236-.858-.236-.206 0-.438.038a4 4 0 0 0-.383.075l-.352-.208L7.07.253h2.598V.96h-1.89l-.11 1.245q.124-.028.294-.052.172-.027.424-.027"})]})}),ys=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"Forward10Icon","aria-label":"forward 10",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M4.021 2C1.772 2-.039 3.835.001 6.071.04 8.252 1.828 10 4.02 10H8v2l4-2.5L8 7v2H4.021a3.01 3.01 0 0 1-3.015-2.946A3.01 3.01 0 0 1 4.02 3z"}),e.jsx("path",{d:"M7.295 5.25H6.49V2.034q0-.16.003-.322l.007-.314q.007-.154.017-.294-.072.079-.178.17-.101.093-.218.192l-.575.458-.403-.509L6.625.253h.67zm4.528-2.502q0 .605-.096 1.084-.092.474-.293.806-.202.332-.527.506a1.64 1.64 0 0 1-.786.174q-.577 0-.954-.304-.375-.308-.557-.882-.18-.577-.18-1.384t.163-1.38q.168-.579.54-.886.373-.308.988-.308.581 0 .957.308.38.305.56.882.185.574.185 1.384m-2.584 0q0 .633.082 1.056.085.425.28.636.195.208.52.208t.52-.208q.195-.21.28-.632.09-.424.089-1.06 0-.63-.086-1.053t-.28-.635a.67.67 0 0 0-.523-.216.67.67 0 0 0-.523.216q-.191.211-.277.635a5.7 5.7 0 0 0-.082 1.053"})]})}),zs=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"Forward15Icon","aria-label":"forward 15",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M4.021 2C1.772 2-.039 3.835.001 6.071.04 8.252 1.828 10 4.02 10H8v2l4-2.5L8 7v2H4.021a3.01 3.01 0 0 1-3.015-2.946A3.01 3.01 0 0 1 4.02 3z"}),e.jsx("path",{d:"M7.176 5.25H6.37V2.034q0-.16.003-.322l.007-.314q.006-.154.017-.294-.072.079-.178.17-.102.093-.219.192l-.574.458-.403-.509L6.506.253h.67zm2.843-3.124q.482 0 .848.174.369.171.574.506.205.331.205.814 0 .526-.222.909a1.46 1.46 0 0 1-.653.584q-.43.205-1.05.205-.392 0-.734-.068a2 2 0 0 1-.585-.205V4.32q.256.144.616.236.359.09.687.089.348 0 .598-.103a.8.8 0 0 0 .382-.314.97.97 0 0 0 .137-.537q0-.43-.277-.663-.273-.236-.857-.236-.205 0-.438.038a4 4 0 0 0-.383.075l-.352-.208.188-2.444h2.598V.96H9.41L9.3 2.205q.123-.028.294-.052.17-.027.424-.027"})]})}),Ss=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"Forward30Icon","aria-label":"forward 30",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M4.021 2C1.772 2-.039 3.835.001 6.071.04 8.252 1.828 10 4.02 10H8v2l4-2.5L8 7v2H4.021a3.01 3.01 0 0 1-3.015-2.946A3.01 3.01 0 0 1 4.02 3z"}),e.jsx("path",{d:"M7.876 1.395q0 .338-.137.587a1.16 1.16 0 0 1-.376.41q-.236.157-.547.226v.024q.6.076.903.376.307.3.307.796 0 .434-.208.776a1.4 1.4 0 0 1-.64.534q-.43.194-1.107.194-.406 0-.755-.065a2.8 2.8 0 0 1-.656-.208V4.33a3.2 3.2 0 0 0 1.357.328q.625 0 .892-.233.266-.235.266-.65a.67.67 0 0 0-.14-.437q-.136-.17-.427-.256a2.7 2.7 0 0 0-.742-.085h-.44v-.646h.444q.433 0 .697-.103a.77.77 0 0 0 .38-.29.77.77 0 0 0 .119-.431q0-.32-.209-.5-.208-.18-.618-.18-.253 0-.462.058a2 2 0 0 0-.38.147q-.173.089-.33.191L4.68.687q.285-.211.677-.359a2.6 2.6 0 0 1 .916-.147q.77 0 1.186.332.417.327.417.882m3.947 1.353q0 .605-.096 1.084-.092.474-.293.806-.202.332-.527.506a1.64 1.64 0 0 1-.786.174q-.577 0-.954-.304-.375-.308-.557-.882-.18-.577-.18-1.384t.163-1.38q.168-.579.54-.886.373-.308.988-.308.581 0 .957.308.38.305.56.882.185.574.185 1.384m-2.584 0q0 .633.082 1.056.085.425.28.636.195.208.52.208t.52-.208q.195-.21.28-.632.09-.424.089-1.06 0-.63-.086-1.053t-.28-.635a.67.67 0 0 0-.523-.216.67.67 0 0 0-.523.216q-.191.211-.277.635a5.7 5.7 0 0 0-.082 1.053"})]})}),js=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"GithubIcon","aria-label":"github",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M.001 6.133 0 6.267a6.02 6.02 0 0 0 4.09 5.717c.298.06.406-.13.406-.29 0-.048 0-.137-.002-.253-.003-.22-.007-.538-.007-.864-1.664.36-2.011-.719-2.011-.719-.267-.698-.664-.877-.664-.877-.544-.37.04-.37.04-.37.604.04.921.619.921.619.535.918 1.397.658 1.743.499.05-.39.208-.659.377-.808-1.328-.14-2.724-.659-2.724-2.974 0-.658.238-1.197.614-1.616-.06-.15-.267-.768.06-1.597 0 0 .505-.16 1.644.619a5.8 5.8 0 0 1 1.495-.2c.505 0 1.02.07 1.496.2 1.139-.778 1.644-.619 1.644-.619.327.829.118 1.447.06 1.597.385.419.613.958.613 1.616 0 2.315-1.396 2.824-2.733 2.974.218.19.406.548.406 1.117 0 .54-.005 1.009-.008 1.32l-.002.336c0 .16.109.35.406.29a6.02 6.02 0 0 0 4.029-4.848Q11.999 6.583 12 6a6 6 0 1 0-11.999.133"})})}),Rs=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"GlobeIcon","aria-label":"globe",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0m-7.207 4.853c-.7-.92-1.199-1.876-1.488-2.853H1.416a5.01 5.01 0 0 0 3.377 2.853M1.1 7h1.984a7 7 0 0 1-.001-2H1.1a5 5 0 0 0 0 2m.316-3h1.887c.288-.976.786-1.932 1.487-2.853A5.01 5.01 0 0 0 1.416 4m2.936 0h3.262c-.328-.91-.876-1.82-1.655-2.709-.762.89-1.293 1.8-1.607 2.709M8.93 7h1.97a5 5 0 0 0 0-2H8.903a7 7 0 0 1 .026 2m-1.634 3.83A5.01 5.01 0 0 0 10.584 8H8.722c-.272.968-.751 1.917-1.427 2.83M7.677 8H4.355c.325.942.883 1.882 1.686 2.802C6.826 9.882 7.367 8.94 7.677 8m.992-4h1.915A5.01 5.01 0 0 0 7.12 1.126c.725.926 1.244 1.89 1.55 2.874M4.095 5a5.9 5.9 0 0 0 .002 2h3.822a5.9 5.9 0 0 0-.031-2z",clipRule:"evenodd"})})}),Cs=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"GlobeSolidIcon","aria-label":"globe solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M6.04 10.802C6.827 9.882 7.368 8.94 7.678 8H4.355c.325.942.883 1.882 1.686 2.802M7.919 7a5.9 5.9 0 0 0-.031-2H4.095a5.9 5.9 0 0 0 .002 2zm-.305-3c-.328-.91-.876-1.82-1.655-2.709-.762.89-1.293 1.8-1.607 2.709z"}),e.jsx("path",{fillRule:"evenodd",d:"M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0M3.01 6q0-.502.073-1H1.1q.106-.523.316-1h1.887c.288-.976.786-1.932 1.487-2.853a5 5 0 0 1 2.33-.021c.725.926 1.244 1.89 1.55 2.874h1.915q.209.477.316 1H8.903a7 7 0 0 1 .026 2H10.9q-.106.523-.316 1H8.722c-.272.968-.751 1.917-1.427 2.83a5 5 0 0 1-2.502.023c-.7-.92-1.199-1.876-1.488-2.853H1.416A5 5 0 0 1 1.1 7h1.984a7 7 0 0 1-.074-1",clipRule:"evenodd"})]})}),ks=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"GreaterThanIcon","aria-label":"greater than",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"m10 6-7.575 4L2 9.106 7.883 6 2 2.894 2.425 2z"})})}),Hs=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"GreaterThanEqualToIcon","aria-label":"greater than equal to",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M2.425 9 2 8.105 7.883 5 2 1.895 2.425 1 10 5zM2 11v-1h8v1z"})})}),Ms=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"GridSolidIcon","aria-label":"grid solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M0 0h5v5H0zm7 5V0h5v5zm0 2v5h5V7zM0 7h5v5H0z"})})}),Bs=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"GroupIcon","aria-label":"group",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M8 4V2H2v6h2v2h6V4zM7 3H3v4h1V4h3zM5 5v4h4V5z",clipRule:"evenodd"}),e.jsx("path",{fillRule:"evenodd",d:"M0 0v12h12V0zm11 1H1v10h10z",clipRule:"evenodd"})]})}),Vs=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"GroupSolidIcon","aria-label":"group solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M3 3v5H2V2h6v1z"}),e.jsx("path",{d:"M4 10V4h6v6z"}),e.jsx("path",{fillRule:"evenodd",d:"M0 0v12h12V0zm11 1H1v10h10z",clipRule:"evenodd"})]})}),Ls=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"GrowthIcon","aria-label":"growth",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M12 6.5h-1V3.707l-4 4-2-2L.854 9.854l-.708-.708L5 4.293l2 2L10.293 3H7.5V2H12z"})})}),As=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"GuideClosedSolidIcon","aria-label":"guide closed solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M11 1v11H2v-2H1V9h1V8H1V7h1V6H1V5h1V4H1V3h1V1zM5 2H4v9h1zm1 3V4h3v1zm0 1v1h3V6z",clipRule:"evenodd"})})}),Ts=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"GuideOpenIcon","aria-label":"guide open",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M2 3h2.5v1H2zm8 0H7.5v1H10zM7.5 5H10v1H7.5zm-3 0H2v1h2.5zm3 2H10v1H7.5zm-3 0H2v1h2.5z"}),e.jsx("path",{fillRule:"evenodd",d:"M12 1H7c-.423 0-.78.138-1.041.382A1.48 1.48 0 0 0 5 1H0v9.5h5a.5.5 0 0 1 .334.166A.5.5 0 0 1 5.5 11h1a.55.55 0 0 1 .115-.36c.058-.067.165-.14.385-.14h5zM5 2H1v7.5h4c.37 0 .707.162.959.382C6.22 9.638 6.577 9.5 7 9.5h4V2H7c-.22 0-.327.073-.385.14a.55.55 0 0 0-.115.36v6h-1v-6a.5.5 0 0 0-.166-.334A.5.5 0 0 0 5 2",clipRule:"evenodd"})]})}),qs=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"GuideOpenSolidIcon","aria-label":"guide open solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M7 1h5v9.5H7c-.22 0-.327.073-.385.14A.55.55 0 0 0 6.5 11h-1a.5.5 0 0 0-.166-.334A.5.5 0 0 0 5 10.5H0V1h5c.37 0 .707.162.959.382C6.22 1.138 6.577 1 7 1M4.5 3H2v1h2.5zm3 0H10v1H7.5zm0 2H10v1H7.5zM2 5h2.5v1H2zm5.5 2H10v1H7.5zM2 7h2.5v1H2z",clipRule:"evenodd"})})}),Ps=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"HandshakeIcon","aria-label":"handshake",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"m12 5.024-1.396 1.399.428.429a1.39 1.39 0 0 1-.844 2.363 1.38 1.38 0 0 1-1.244 1.246 1.385 1.385 0 0 1-2.284.915l-.002.003-.054-.055-.019-.016-.473-.474-.489.49a1.45 1.45 0 0 1-2.055 0l-.098-.111c-.193-.237-.3-.52-.322-.81a1.45 1.45 0 0 1-.918-.42l-.098-.11a1.45 1.45 0 0 1-.321-.81 1.44 1.44 0 0 1-.918-.42l-.1-.11a1.457 1.457 0 0 1 .1-1.948l.49-.492L0 4.708 4.445.255l1.392 1.393L7.233.25zM5.53 9.36a.44.44 0 0 0-.554-.055l-.068.055-.623.624a.44.44 0 1 0 .622.623l.622-.624.057-.068a.44.44 0 0 0 0-.485zM1.431 4.708l.85.85A1.45 1.45 0 0 1 3.988 6.88a1.45 1.45 0 0 1 1.338 1.34 1.454 1.454 0 0 1 1.32 1.71l.665.669a.37.37 0 0 0 .517-.01.374.374 0 0 0 .006-.522l-.007-.005-.576-.579-.065-.079a.5.5 0 0 1-.073-.178l-.002-.016a.5.5 0 0 1 0-.172l.004-.023.022-.069.007-.02q.013-.028.03-.056l.037-.055q.018-.025.04-.048l.017-.014a.505.505 0 0 1 .7.013l.576.578.006.006a.373.373 0 0 0 .524-.532l-.58-.58a.51.51 0 0 1-.11-.55q.01-.023.024-.046a.5.5 0 0 1 .086-.121l.001-.001a.506.506 0 0 1 .716 0l.577.578.006.006c.146.14.377.139.521-.005a.375.375 0 0 0 0-.53L9.85 7.1l-.016-.018-2.826-2.838-.234.234c-.519.52-1.36.52-1.88 0a1.334 1.334 0 0 1 0-1.884l.226-.228-.675-.677zm2.76 3.31a.44.44 0 0 0-.554-.055l-.069.056-.623.624a.44.44 0 1 0 .623.624l.622-.625.057-.069a.44.44 0 0 0 0-.485zm-1.338-1.34a.44.44 0 0 0-.554-.056l-.069.056-.623.624a.441.441 0 0 0 .622.623l.624-.624.055-.069a.44.44 0 0 0 .001-.485zM5.61 3.31a.32.32 0 0 0 0 .45.317.317 0 0 0 .449 0l.529-.53.094-.077a.59.59 0 0 1 .654 0l.094.076 2.46 2.473.677-.679-3.334-3.34z",clipRule:"evenodd"})})}),Ns=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"HandshakeSolidIcon","aria-label":"handshake solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"m12 5.024-1.396 1.399.428.429a1.39 1.39 0 0 1-.844 2.363 1.38 1.38 0 0 1-1.244 1.246 1.385 1.385 0 0 1-2.284.915l-.002.003-.054-.055-.019-.016-.473-.474-.489.49a1.45 1.45 0 0 1-2.055 0l-.098-.111c-.193-.237-.3-.52-.322-.81a1.45 1.45 0 0 1-.918-.42l-.098-.11a1.45 1.45 0 0 1-.321-.81 1.44 1.44 0 0 1-.918-.42l-.1-.11a1.457 1.457 0 0 1 .1-1.948l.49-.492L0 4.708 4.445.255l1.392 1.393L7.233.25zM5.53 9.36a.44.44 0 0 0-.554-.055l-.066.051-.002.004-.623.624-.004.003a.442.442 0 0 0 .626.62l.622-.624.057-.068a.44.44 0 0 0 0-.485zM4.19 8.02a.44.44 0 0 0-.553-.056l-.069.056-.623.624a.44.44 0 0 0 .62.626l.002-.002.513-.514.11-.111.057-.069a.44.44 0 0 0 0-.485zM2.854 6.678a.44.44 0 0 0-.554-.056l-.069.056-.623.624a.441.441 0 0 0 .622.623l.624-.624.055-.069a.44.44 0 0 0 .001-.485zM5.61 3.31a.32.32 0 0 0 0 .45.317.317 0 0 0 .449 0l.529-.53.094-.077a.59.59 0 0 1 .654 0l.094.076 2.46 2.473.677-.679-3.334-3.34z",clipRule:"evenodd"})})}),Ds=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"HeadphonesIcon","aria-label":"headphones",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M11 6A5 5 0 0 0 1 6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H0V6a6 6 0 1 1 12 0v6h-2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 5V7h-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1zM2 7H1v4h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1",clipRule:"evenodd"})})}),Fs=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"HeadphonesDisabledIcon","aria-label":"headphones disabled",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M6 1a5 5 0 0 1 5 5h-1c-.517 0-.987.196-1.342.517l.71.709A1 1 0 0 1 10 7h1v1.855l1 .999V6A6 6 0 0 0 2.958.827l.736.735A5 5 0 0 1 6 1m3.888 10.997-1.885-1.88a2 2 0 0 0 1.885 1.88"}),e.jsx("path",{fillRule:"evenodd",d:"m1.564 3.691-.736-.734A5.97 5.97 0 0 0 0 6v6h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H1c0-.833.204-1.618.564-2.309M1 7h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1z",clipRule:"evenodd"}),e.jsx("path",{d:"M11.307 12 1 1.716 1.716 1 12 11.267z"})]})}),Os=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"HeadphonesDisabledSolidIcon","aria-label":"headphones disabled solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M6 1a5 5 0 0 1 5 5h-1c-.517 0-.987.196-1.342.517L12 9.854V6A6 6 0 0 0 2.958.827l.736.735A5 5 0 0 1 6 1m3.888 10.997-1.885-1.88a2 2 0 0 0 1.885 1.88M1.564 3.691l-.736-.734A5.97 5.97 0 0 0 0 6v6h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H1c0-.833.204-1.618.564-2.309M11.307 12 1 1.716 1.716 1 12 11.267z"})})}),Ws=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"HeadphonesSolidIcon","aria-label":"headphones solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M11 6A5 5 0 0 0 1 6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H0V6a6 6 0 1 1 12 0v6h-2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"})})}),Es=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"HelpIcon","aria-label":"help",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M6.082 2.25q.222 0 .434.035.21.036.398.094.187.07.352.164.175.094.316.21.141.13.246.282.117.153.2.328.081.188.117.399.046.2.046.445 0 .165-.023.305-.024.14-.07.27a2 2 0 0 1-.106.245q-.058.106-.129.211L7.7 5.45a2 2 0 0 1-.187.188q-.095.105-.2.21-.105.095-.21.2-.07.059-.13.117a1 1 0 0 1-.117.106 1 1 0 0 0-.093.105 1 1 0 0 0-.07.105.5.5 0 0 0-.06.106.6.6 0 0 0-.034.129l-.024.152v.551H5.367v-.75l.024-.176a1 1 0 0 1 .093-.281l.07-.117q.048-.06.106-.117l.106-.13.14-.14.774-.785a.8.8 0 0 0 .187-.281q.06-.164.059-.364a.8.8 0 0 0-.07-.351.9.9 0 0 0-.176-.293.9.9 0 0 0-.293-.176.9.9 0 0 0-.352-.07q-.21 0-.387.082a.8.8 0 0 0-.304.21q-.14.141-.223.317a1.5 1.5 0 0 0-.094.375L3.75 4.277q.035-.246.094-.457.059-.21.152-.398a2.1 2.1 0 0 1 .504-.645q.152-.129.328-.222.176-.105.375-.164a2.4 2.4 0 0 1 .41-.106q.223-.035.469-.035m-.117 5.777q.164 0 .305.059t.257.164a.8.8 0 0 1 .176.258q.07.13.07.281 0 .165-.058.305a.84.84 0 0 1-.445.422.8.8 0 0 1-.305.058q-.07 0-.152-.011l-.153-.047-.14-.07a1 1 0 0 1-.106-.094.7.7 0 0 1-.105-.106.7.7 0 0 1-.07-.129 1 1 0 0 1-.06-.14 1 1 0 0 1-.011-.165.7.7 0 0 1 .059-.292.8.8 0 0 1 .175-.258.8.8 0 0 1 .258-.176.8.8 0 0 1 .305-.059"}),e.jsx("path",{fillRule:"evenodd",d:"M12 12V0H0v12zM.996 1.008h10.008v9.996H.996z",clipRule:"evenodd"})]})}),Gs=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"HelpCircleSolidIcon","aria-label":"help circle solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0m-.005 8.117q-.164 0-.305.059a.8.8 0 0 0-.257.176.8.8 0 0 0-.176.257.7.7 0 0 0-.059.293q0 .083.012.164.024.07.059.141a.7.7 0 0 0 .07.129.7.7 0 0 0 .105.105q.048.048.106.094l.14.07.153.047q.081.012.152.012.165 0 .305-.059a.85.85 0 0 0 .445-.422.8.8 0 0 0 .059-.304.6.6 0 0 0-.07-.281.8.8 0 0 0-.176-.258.9.9 0 0 0-.258-.164.8.8 0 0 0-.305-.059m.117-5.777q-.246 0-.468.035-.212.035-.41.105a1.6 1.6 0 0 0-.376.165 1.9 1.9 0 0 0-.609.515 2.1 2.1 0 0 0-.375.75 4 4 0 0 0-.094.457l1.278.094q.023-.2.093-.375.083-.176.223-.316a.8.8 0 0 1 .305-.211.9.9 0 0 1 .386-.082q.188 0 .352.07.165.059.293.176a.9.9 0 0 1 .176.293q.07.152.07.351 0 .2-.059.363a.8.8 0 0 1-.187.282l-.773.785-.141.14q-.059.07-.106.13a1 1 0 0 0-.105.117l-.07.117a1 1 0 0 0-.094.281l-.024.176v.75h1.207v-.551l.024-.152a.6.6 0 0 1 .035-.13.5.5 0 0 1 .059-.105 1 1 0 0 1 .07-.105q.047-.059.094-.106.059-.046.117-.105.058-.06.129-.117.105-.105.21-.2.107-.105.2-.21.106-.095.187-.188l.165-.21q.07-.107.128-.212.06-.117.106-.246.047-.129.07-.27.024-.14.024-.304 0-.246-.047-.445a1.7 1.7 0 0 0-.117-.399 1.8 1.8 0 0 0-.2-.328 1.7 1.7 0 0 0-.246-.281 2 2 0 0 0-.316-.211 2.4 2.4 0 0 0-.352-.164 3 3 0 0 0-.398-.094 2.6 2.6 0 0 0-.434-.035",clipRule:"evenodd"})})}),$s=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"HelpSolidIcon","aria-label":"help solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M12 0v12H0V0zM6.082 2.25q.222 0 .434.035.21.036.398.094.187.07.352.164.175.094.316.21.141.13.246.282.117.153.2.328.081.188.117.399.046.2.046.445 0 .165-.023.305-.024.14-.07.27a2 2 0 0 1-.106.245q-.058.106-.129.211L7.7 5.45a2 2 0 0 1-.187.188q-.095.105-.2.21-.105.095-.21.2-.07.059-.13.117a1 1 0 0 1-.117.106 1 1 0 0 0-.093.105 1 1 0 0 0-.07.105.5.5 0 0 0-.06.106.6.6 0 0 0-.034.129l-.024.152v.551H5.367v-.75l.024-.176a1 1 0 0 1 .093-.281l.07-.117q.048-.06.106-.117l.106-.13.14-.14.774-.785a.8.8 0 0 0 .187-.281q.06-.164.059-.364a.8.8 0 0 0-.07-.351.9.9 0 0 0-.176-.293.9.9 0 0 0-.293-.176.9.9 0 0 0-.352-.07q-.21 0-.387.082a.8.8 0 0 0-.304.21q-.14.141-.223.317a1.5 1.5 0 0 0-.094.375L3.75 4.277q.035-.246.094-.457.059-.21.152-.398a2.1 2.1 0 0 1 .504-.645q.152-.129.328-.222.176-.105.375-.164a2.4 2.4 0 0 1 .41-.106q.223-.035.469-.035m-.117 5.777q.164 0 .305.059t.257.164a.8.8 0 0 1 .176.258q.07.13.07.281 0 .165-.058.305a.84.84 0 0 1-.445.422.8.8 0 0 1-.305.058q-.07 0-.152-.011l-.153-.047-.14-.07a1 1 0 0 1-.106-.094.7.7 0 0 1-.105-.106.7.7 0 0 1-.07-.129 1 1 0 0 1-.06-.14 1 1 0 0 1-.011-.165.7.7 0 0 1 .059-.292.8.8 0 0 1 .175-.258.8.8 0 0 1 .258-.176.8.8 0 0 1 .305-.059",clipRule:"evenodd"})})}),Us=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"HiddenSolidIcon","aria-label":"hidden solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M1 1.716 10.307 11l.693-.733L1.716 1zM0 5.875c.367-.541.952-1.309 1.73-2.018l1.579 1.575A2.75 2.75 0 0 0 6.575 8.69L7.62 9.732C7.11 9.902 6.568 10 6 10 3 10 .75 7.25 0 5.875"}),e.jsx("path",{d:"M5.583 7.7A1.75 1.75 0 0 1 4.3 6.422zm.861-3.393 1.248 1.245a1.75 1.75 0 0 0-1.248-1.245"}),e.jsx("path",{d:"M8.75 6q-.001.285-.056.553l1.55 1.546C11.07 7.323 11.675 6.47 12 5.875 11.125 4.583 9 2 6 2a5.3 5.3 0 0 0-1.613.253l1.055 1.054q.27-.057.558-.057A2.75 2.75 0 0 1 8.75 6"})]})}),_s=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"HierarchyIcon","aria-label":"hierarchy",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M4.5 4.5H3v1h2.5v-1h6v3h-6v-1H3v3h2.5v-1h6v3h-6v-1H2v-6H.5v-4h4zm2 6h4v-1h-4zm0-4h4v-1h-4zm-5-3h2v-2h-2z",clipRule:"evenodd"})})}),Ks=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"HierarchySolidIcon","aria-label":"hierarchy solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M4.5 4.5H3v1h2.5v-1h6v3h-6v-1H3v3h2.5v-1h6v3h-6v-1H2v-6H.5v-4h4z"})})}),Qs=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"HistoryIcon","aria-label":"history",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M7.294 10.831a5 5 0 1 0-5.624-7.33H4v1H0v-4h1v2.184A6 6 0 0 1 2.256 1.31a6 6 0 1 1 5.296 10.486z"}),e.jsx("path",{d:"M6.001 3.001v3h-3v1h4v-4z"})]})}),Xs=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"HolidayIcon","aria-label":"holiday",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M4.898 7.028c.51-1.694 2.462-2.7 4.36-2.246 1.9.454 3.027 2.196 2.518 3.89l-2.881-.689L8.14 11H12v1H0v-1h7.11l.81-3.249zm4.128-1.273c-.998-.239-1.95.057-2.562.619l4.377 1.047c-.163-.68-.697-1.304-1.554-1.592z",clipRule:"evenodd"}),e.jsx("path",{d:"M4.25 7.25h-1v-1.5h1zM2.69 5.518l-1.061 1.06-.707-.707 1.06-1.06z"}),e.jsx("path",{fillRule:"evenodd",d:"M3.75 2.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",clipRule:"evenodd"}),e.jsx("path",{d:"M1.75 4.25H.25v-1h1.5zm5.5 0h-1.5v-1h1.5zM2.69 1.982l-.708.707-1.06-1.06.707-.708zm3.888-.353-1.06 1.06-.707-.707L5.87.922zM4.25 1.75h-1V.25h1z"})]})}),Js=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"HolidaySolidIcon","aria-label":"holiday solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M4.898 7.028c.51-1.694 2.462-2.7 4.36-2.246 1.9.454 3.027 2.196 2.518 3.89l-2.881-.689L8.14 11H12v1H0v-1h7.11l.81-3.249z",clipRule:"evenodd"}),e.jsx("path",{d:"M4.25 7.25h-1v-1.5h1zM2.69 5.518l-1.061 1.06-.707-.707 1.06-1.06z"}),e.jsx("path",{fillRule:"evenodd",d:"M3.75 2.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3",clipRule:"evenodd"}),e.jsx("path",{d:"M1.75 4.25H.25v-1h1.5zm5.5 0h-1.5v-1h1.5zM2.69 1.982l-.708.707-1.06-1.06.707-.708zm3.888-.353-1.06 1.06-.707-.707L5.87.922zM4.25 1.75h-1V.25h1z"})]})}),Zs=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"HomeIcon","aria-label":"home",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M0 4.875 6 0l6 4.875L11 6l-1-.825V12H7V9H5v3H2V5.095L.875 6zm3-.585V11h1V8h4v3h1V4.35L6 1.875z",clipRule:"evenodd"})})}),Ys=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"HomeSolidIcon","aria-label":"home solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M0 4.875 6 0l6 4.875L11 6l-1-.825V12H7V9H5v3H2V5.095L.875 6z"})})}),ei=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"HospitalIcon","aria-label":"hospital",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M6.5 2v1h1v1h-1v1h-1V4h-1V3h1V2zM5 7V6H4v1zm0 1v1H4V8zm3-1V6H7v1zm0 1v1H7V8z"}),e.jsx("path",{fillRule:"evenodd",d:"M10 11h2v1H0v-1h2V0h8zM3 1h6v10H7v-1H5v1H3z",clipRule:"evenodd"})]})}),ti=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"HospitalSolidIcon","aria-label":"hospital solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M2 0h8v11h2v1H0v-1h2zm3 11h2v-1H5zm1.5-9v1h1v1h-1v1h-1V4h-1V3h1V2zM5 6H4v1h1zM4 8h1v1H4zm4-1V6H7v1zm0 1v1H7V8z",clipRule:"evenodd"})})}),ai=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"IconFigmaIcon","aria-label":"icon figma",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M4 1a2 2 0 0 0-1.323 3.5A2 2 0 0 0 2 6c0 .597.262 1.134.677 1.5A2 2 0 0 0 4 11h.25A2.25 2.25 0 0 0 6.5 8.75V7.475A1.75 1.75 0 1 0 8.786 4.84 2 2 0 0 0 8 1zm1.5 1H4a1 1 0 0 0 0 2h1.5zm0 5V5H4a1 1 0 0 0 0 2zM4 8a1 1 0 0 0 0 2h.25c.69 0 1.25-.56 1.25-1.25V8zm2.525-3-.025.025V5zM6.5 4H8a1 1 0 1 0 0-2H6.5zm2 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0",clipRule:"evenodd"})})}),oi=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ImageIcon","aria-label":"image",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1 1 1v2H3l2-2 1 1z"}),e.jsx("path",{fillRule:"evenodd",d:"M1 0v12h10V2L9 0zm9 4v7H2V1h5v3zm0-1v-.586L8.586 1H8v2z",clipRule:"evenodd"})]})}),ni=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ImageSolidIcon","aria-label":"image solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M1 12V0h8l2 2v10zM7 1h1v2h2v1H7zM5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1 1 1v2H3l2-2 1 1z",clipRule:"evenodd"})})}),li=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ImportIcon","aria-label":"import",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M11 1H7v1h3v8H7v1h4z"}),e.jsx("path",{d:"M0 6.5v-1h6.094L3.412 2.82l.707-.707L8.01 6 4.118 9.89l-.707-.707L6.094 6.5z"})]})}),ri=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ImportSolidIcon","aria-label":"import solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M0 0h12v12H0V6.5h6.094L3.412 9.184l.707.707L8.01 6 4.12 2.112l-.707.707L6.094 5.5H0zm7 1h4v10H7v-1h3V2H7z",clipRule:"evenodd"})})}),si=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"InboxIcon","aria-label":"inbox",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M6.495 0v5.088l1.798-1.795.708.707-2.998 2.992-3.004-2.998.708-.707 1.814 1.811V0z"}),e.jsx("path",{fillRule:"evenodd",d:"M12 12V3h-1v4H8a2 2 0 1 1-4 0H1V3H0v9zM8.83 8H11v3H1V8h2.17a3.001 3.001 0 0 0 5.66 0",clipRule:"evenodd"})]})}),ii=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"InboxSolidIcon","aria-label":"inbox solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M6.495 5.088V0h-.974v5.098l-1.814-1.81-.708.706 3.004 2.998L9.001 4l-.708-.707z"}),e.jsx("path",{d:"M12 12V3h-1v4H8a2 2 0 1 1-4 0H1V3H0v9z"})]})}),di=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"IndentIcon","aria-label":"indent",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M3 2.5h9v1H3zm4 3h5v1H7zm0 3h5v1H7zM5.982 7.475l-2.829 2.829-.707-.707L4.042 8H0V7h4.093L2.446 5.353l.707-.707z"})})}),ci=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"InfiniteIcon","aria-label":"infinite",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M9 3.5c.657.002 1.378.11 2.005.549.63.434 1 1.207.995 1.954.006.746-.366 1.52-.997 1.952-.627.437-1.347.542-2.003.545-1.37-.152-2.263-.89-3.001-1.69-.702.755-1.544 1.46-2.798 1.683A3 3 0 0 1 3 8.5c-.768-.001-1.669-.158-2.326-.82A2.4 2.4 0 0 1 0 6.004c0-.61.23-1.23.67-1.678C1.328 3.66 2.23 3.501 3 3.5c1.368.14 2.265.873 3.005 1.673C6.74 4.376 7.633 3.646 9 3.5m0 1c-.94-.009-1.579.68-2.277 1.493C7.42 6.814 8.06 7.516 9 7.5c1.097.038 2.018-.534 2-1.497.018-.965-.902-1.541-2-1.503M1 6.003c0 .365.14.728.387.976.358.372.975.524 1.613.521q.066 0 .129-.005c.882-.05 1.495-.72 2.157-1.498C4.59 5.177 3.95 4.48 3 4.5c-.64-.003-1.256.15-1.614.524-.247.25-.386.614-.386.979"})})}),ui=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"InfoIcon","aria-label":"info",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M6 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2m1 3v5H5V5z"}),e.jsx("path",{fillRule:"evenodd",d:"M0 0v12h12V0zm11 1H1v10h10z",clipRule:"evenodd"})]})}),vi=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"JigsawIcon","aria-label":"jigsaw",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M1 6h1.5a.5.5 0 0 1 0 1H1v4h4V9.5a.5.5 0 0 1 1 0V11h4V8h.5a1.5 1.5 0 0 0 0-3H10V2H7v-.5a1.5 1.5 0 1 0-3 0V2H1zm5-4.5a.5.5 0 0 0-1 0V3H2v2h.5a1.5 1.5 0 1 1 0 3H2v2h2v-.5a1.5 1.5 0 1 1 3 0v.5h2V7h1.5a.5.5 0 0 0 0-1H9V3H6z",clipRule:"evenodd"})})}),hi=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"JigsawSolidIcon","aria-label":"jigsaw solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M1 6h1.5a.5.5 0 0 1 0 1H1v4h4V9.5a.5.5 0 0 1 1 0V11h4V8h.5a1.5 1.5 0 0 0 0-3H10V2H7v-.5a1.5 1.5 0 1 0-3 0V2H1z",clipRule:"evenodd"})})}),bi=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"KeyIcon","aria-label":"key",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M4.5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"}),e.jsx("path",{fillRule:"evenodd",d:"M7.5 6H10V4h2V0H9L4.387 4.613a3.5 3.5 0 1 0 2.378 2.122zm1.9-5L4.646 5.777a2.5 2.5 0 1 0 .87.743S6.641 5.372 7 5h2V3h2V1z",clipRule:"evenodd"})]})}),pi=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"KeyBackspaceIcon","aria-label":"key backspace",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"m0 6 4-4h7v8H4zm4.414 3H10V3H4.414l-3 3z",clipRule:"evenodd"}),e.jsx("path",{d:"M6.536 6.707 7.95 8.121l.707-.707L7.243 6l1.414-1.414-.707-.707-1.414 1.414L5.12 3.879l-.707.707L5.828 6 4.414 7.414l.707.707z"})]})}),fi=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"KeyCapslockIcon","aria-label":"key capslock",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M9 8H3v3h6zM8 9H4v1h4zm3-3H9v1H3V6H1l5-6zM8.865 5 6 1.562 3.135 5H4v1h4V5z",clipRule:"evenodd"})})}),gi=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"KeyControlIcon","aria-label":"key control",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"m6 1 3.354 3.354-.708.707L6 2.414 3.354 5.061l-.708-.707z",clipRule:"evenodd"})})}),xi=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"KeyEnterIcon","aria-label":"key enter",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M10 3H7V2h4v6H2.914l2.147 2.146-.707.708L1 7.5l3.354-3.354.707.708L2.914 7H10z",clipRule:"evenodd"})})}),mi=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"KeyOptionIcon","aria-label":"key option",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M4.14 2H1V1h3.86l3 9H11v1H7.14zM11 2H7V1h4z",clipRule:"evenodd"})})}),Ii=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"KeyShiftIcon","aria-label":"key shift",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M11 7H9v4H3V7H1l5-7zM9.057 6 6 1.72 2.943 6H4v4h4V6z",clipRule:"evenodd"})})}),wi=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"KeySolidIcon","aria-label":"key solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M10 6H7.5l-.735.735a3.5 3.5 0 1 1-2.378-2.122L9 0h3v4h-2zM3.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2",clipRule:"evenodd"})})}),yi=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"KeyTabIcon","aria-label":"key tab",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M10 7.102V10h1V2h-1v2.898L6.83 2.124l-.66.752 3 2.624H1v1h8.17l-3 2.624.66.752z"})})}),zi=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"LaptopIcon","aria-label":"laptop",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M10 2H2v6h8zM1 1v8h10V1zm11 10H0v-1h12z",clipRule:"evenodd"})})}),Si=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"LaptopSolidIcon","aria-label":"laptop solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M1 1v8h10V1zm11 10H0v-1h12z",clipRule:"evenodd"})})}),ji=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"LastIcon","aria-label":"last",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"m7 6-4.326 4L2 9.231 5.495 6 2 2.769 2.674 2zm2-4h1v8H9z"})})}),Ri=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"LayersIcon","aria-label":"layers",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"m0 4 1.5 1L0 6l1.5 1L0 8l6 4 6-4-1.5-1L12 6l-1.5-1L12 4 6 0zm9.599 3.6L6 10 2.401 7.6l-.598.4L6 10.798 10.197 8zM1.803 6l.598-.4L6 8l3.599-2.4.598.4L6 8.798zm0-2L6 6.798 10.197 4 6 1.202z",clipRule:"evenodd"})})}),Ci=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"LayersSolidIcon","aria-label":"layers solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"m0 4 1.5 1L0 6l1.5 1L0 8l6 4 6-4-1.5-1L12 6l-1.5-1L12 4 6 0zm9.599 3.6L6 10 2.401 7.6l-.598.4L6 10.798 10.197 8zM1.803 6l.598-.4L6 8l3.599-2.4.598.4L6 8.798z",clipRule:"evenodd"})})}),ki=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"LessThanIcon","aria-label":"less than",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"m2 6 7.576-4 .425.894L4.118 6l5.883 3.106-.425.894z"})})}),Hi=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"LessThanEqualToIcon","aria-label":"less than equal to",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M2 11v-1h8v1zm7.576-2L2.001 5l7.575-4 .425.895L4.118 5l5.883 3.105z"})})}),Mi=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"LightbulbIcon","aria-label":"lightbulb",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M7.309 11.455H4.693v-1H7.31zM6 3.705a.5.5 0 0 1 0 1 .75.75 0 0 0-.75.75.5.5 0 0 1-1 0c0-.966.784-1.75 1.75-1.75"}),e.jsx("path",{fillRule:"evenodd",d:"M6.257 2.216a3.126 3.126 0 0 1 2.719 4.068l-.09.242c-.217.526-.542 1.059-.776 1.502-.249.472-.429.898-.473 1.335l-.015.143-.045.45H4.423l-.045-.45-.015-.143C4.32 8.926 4.14 8.5 3.89 8.028c-.176-.332-.403-.715-.597-1.108l-.18-.394A3.126 3.126 0 0 1 6 2.206zm-.432.996a2.127 2.127 0 0 0-1.788 2.932l.158.345c.17.342.37.677.58 1.073.22.417.432.88.535 1.393h1.38c.103-.512.315-.976.536-1.393.278-.528.542-.948.737-1.418l.06-.165A2.126 2.126 0 0 0 6 3.205z",clipRule:"evenodd"}),e.jsx("path",{d:"M2.3 5.75H.8v-1h1.5zm8.9 0H9.7v-1h1.5zm-7.493-3.5L3 2.957l-1.06-1.06.706-.708zm6.353-.354L9 2.957l-.707-.707 1.06-1.06zM6.5 1.55h-1V.05h1z"})]})}),Bi=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"LightbulbSolidIcon","aria-label":"lightbulb solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M7.309 11.455H4.693v-1H7.31z"}),e.jsx("path",{fillRule:"evenodd",d:"M6.257 2.216a3.126 3.126 0 0 1 2.719 4.068l-.09.242c-.217.526-.542 1.059-.776 1.502-.249.472-.429.898-.473 1.335l-.015.143-.045.45H4.423l-.045-.45-.015-.143C4.32 8.926 4.14 8.5 3.89 8.028c-.176-.332-.403-.715-.597-1.108l-.18-.394A3.126 3.126 0 0 1 6 2.206zM6 3.706a1.75 1.75 0 0 0-1.75 1.75.5.5 0 0 0 1 0 .75.75 0 0 1 .75-.75.5.5 0 0 0 0-1",clipRule:"evenodd"}),e.jsx("path",{d:"M2.3 5.75H.8v-1h1.5zm8.9 0H9.7v-1h1.5zm-7.493-3.5L3 2.957l-1.06-1.06.706-.708zm6.353-.354L9 2.957l-.707-.707 1.06-1.06zM6.5 1.55h-1V.05h1z"})]})}),Vi=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"LightSolidIcon","aria-label":"light solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M9 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9-.5h2v1H0zm2.11-4.096 1.415 1.414-.707.707-1.414-1.414zM1.404 9.89l1.414-1.415.707.707-1.414 1.414zM5.5 12v-2h1v2zM10 5.5h2v1h-2zm-.818 2.975 1.414 1.414-.707.707-1.414-1.414zm-.707-5.657 1.414-1.414.707.707-1.414 1.414zM5.5 2V0h1v2z"})})}),Li=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"LikeIcon","aria-label":"like",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M7.842 1.51a3.4 3.4 0 0 0-1.007.253c-.15.056-.358.17-.528.27l-.305.186c-.009-.006-.54-.345-.837-.456a3.1 3.1 0 0 0-2.285-.086 2.73 2.73 0 0 0-1.698 1.625 2.94 2.94 0 0 0-.132 1.556c.072.426.217.835.43 1.211q.336.61.803 1.127.458.543.969 1.036l.015.016.445.433c.189.179.419.389.686.619l.484.4.37.295.57.433.084.047a.4.4 0 0 0 .094.023.4.4 0 0 0 .179-.07l.568-.433.371-.296.483-.4c.268-.23.498-.44.687-.618l.444-.433.016-.016q.51-.493.969-1.036.467-.516.802-1.127a3.7 3.7 0 0 0 .431-1.21 2.94 2.94 0 0 0-.07-1.369l-.062-.188A2.73 2.73 0 0 0 9.266 1.73l-.146-.053a3.1 3.1 0 0 0-1.278-.167m-3.768.996q.27.026.528.112l.171.066.02.007.02.008a6 6 0 0 1 .576.316l.057.036.015.009.003.002.54.344.539-.346.003-.002.014-.01.057-.035a9 9 0 0 1 .424-.244l.145-.07.02-.008.02-.007a2.4 2.4 0 0 1 .7-.178 2.1 2.1 0 0 1 .861.114l.01.003.01.004c.496.164.889.54 1.073 1.021l.04.124c.075.251.097.514.066.774l-.02.13v.008l-.002.007a2.7 2.7 0 0 1-.207.675l-.108.211-.006.01-.146.249q-.153.245-.335.47l-.187.22-.011.013-.011.012q-.32.377-.666.73l-.234.233-.01.008-.016.016-.427.416c-.179.17-.395.368-.647.585-.33.282-.613.504-.818.666L6 9.307l-.134-.102q-.153-.12-.357-.284l-.461-.382a20 20 0 0 1-1.075-1l-.026-.025-.234-.233a13 13 0 0 1-.666-.73l-.011-.012-.01-.013a5 5 0 0 1-.67-.939l-.006-.01-.107-.21a2.7 2.7 0 0 1-.207-.676l-.002-.007v-.008a1.94 1.94 0 0 1 .086-1.028 1.73 1.73 0 0 1 1.073-1.021l.01-.004.01-.003a2.1 2.1 0 0 1 .861-.114"})})}),Ai=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"LikeSolidIcon","aria-label":"like solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M6.835 1.763c-.299.112-.833.456-.833.456s-.538-.344-.837-.456a3.4 3.4 0 0 0-1.007-.253 3.1 3.1 0 0 0-1.278.167 2.73 2.73 0 0 0-1.698 1.625 2.94 2.94 0 0 0-.132 1.556c.071.426.217.835.43 1.212q.336.61.803 1.127.458.54.969 1.035l.016.016c.213.212.595.592 1.13 1.052.351.3.653.535.855.695.226.176.418.323.568.433a.4.4 0 0 0 .179.07.4.4 0 0 0 .18-.07c.149-.11.34-.258.567-.433.202-.16.503-.395.855-.695.534-.46.917-.84 1.13-1.052l.016-.016q.51-.494.97-1.035.466-.518.802-1.127c.213-.377.358-.786.43-1.212a2.94 2.94 0 0 0-.132-1.556A2.73 2.73 0 0 0 9.12 1.677a3.1 3.1 0 0 0-1.278-.167 3.4 3.4 0 0 0-1.007.253"})})}),Ti=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"LineChartIcon","aria-label":"line chart",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M10.5 4a1.5 1.5 0 1 0-1.018-.399L7.599 8.003a1.5 1.5 0 0 0-.55.066L5.747 6.336a1.5 1.5 0 1 0-2.4.122L1.801 9.03h-.006a1.5 1.5 0 1 0 .857.512l1.54-2.573a1.5 1.5 0 0 0 .75-.036l1.311 1.732a1.5 1.5 0 1 0 2.264-.267L10.4 3.997zM5.25 5.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-3 5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m6-1a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m3-7a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0",clipRule:"evenodd"})})}),qi=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"LineChartSolidIcon","aria-label":"line chart solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M10.5 4a1.5 1.5 0 1 0-1.017-.397l-1.885 4.4a1.5 1.5 0 0 0-.547.065L5.75 6.331a1.5 1.5 0 1 0-2.405.124L1.799 9.03a1.5 1.5 0 1 0 .857.515L4.201 6.97a1.5 1.5 0 0 0 .748-.038L6.25 8.668a1.5 1.5 0 1 0 2.265-.271l1.886-4.4Q10.452 4 10.5 4"})})}),Pi=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"LinkedinIcon","aria-label":"linkedin",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M3.307 11H1.21V4.706h2.098zM2.26 3.518c-.7 0-1.259-.56-1.259-1.26A1.253 1.253 0 0 1 2.259 1c.7 0 1.259.56 1.259 1.259 0 .7-.56 1.259-1.26 1.259M11 10.999H8.902V7.293c0-.56-.49-1.049-1.049-1.049-.56 0-1.049.49-1.049 1.049v3.706H4.706V4.705h2.098v.84c.35-.56 1.119-.98 1.748-.98 1.33 0 2.448 1.12 2.448 2.448z",clipRule:"evenodd"})})}),Ni=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"LinkedinSolidIcon","aria-label":"linkedin solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M11 0a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zM1.688 4.836V10.5h1.89V4.836zm6.609-.127c-.566 0-1.259.378-1.573.88v-.754H4.836v5.664h1.888V7.164c0-.503.44-.944.944-.944.503 0 .944.44.944.944V10.5H10.5V6.912c0-1.196-1.007-2.203-2.203-2.203M2.633 1.5c-.63 0-1.133.503-1.133 1.133s.503 1.133 1.133 1.133 1.133-.504 1.133-1.133c0-.63-.504-1.133-1.133-1.133",clipRule:"evenodd"})})}),Di=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"LocationIcon","aria-label":"location",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M3.517 5.68 6.002 10l2.541-4.394.007-.012q.207-.334.324-.744l.002-.01.003-.01Q9 4.437 9 4.009a3 3 0 0 0-.224-1.165 3 3 0 0 0-.648-.944l-.008-.01-.007-.008a3 3 0 0 0-.952-.65A2.9 2.9 0 0 0 6 1c-.425 0-.808.08-1.161.233q-.557.242-.971.658c-.266.266-.48.58-.644.951A3 3 0 0 0 3 4.008q0 .461.13.873.135.428.367.77zM2.305 2.45A4.07 4.07 0 0 1 4.44.315 3.9 3.9 0 0 1 6 0q.832 0 1.56.316.727.316 1.267.868.552.538.868 1.265.305.727.305 1.559 0 .574-.164 1.113-.153.54-.434.996L6 12 2.669 6.21A3.9 3.9 0 0 1 2 4.009q0-.832.305-1.559",clipRule:"evenodd"}),e.jsx("path",{fillRule:"evenodd",d:"M6 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4",clipRule:"evenodd"})]})}),Fi=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"LocationSolidIcon","aria-label":"location solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M7.56.316A3.9 3.9 0 0 0 6 0q-.832 0-1.56.316-.727.316-1.279.868-.54.538-.856 1.265A4 4 0 0 0 2 4.008q0 .61.176 1.172.175.562.493 1.03L6 12l3.402-5.883q.28-.457.434-.996.164-.54.164-1.113 0-.832-.305-1.559a4 4 0 0 0-.868-1.265A4 4 0 0 0 7.56.316M6 6.004a2.001 2.001 0 1 0 .002-4.002A2.001 2.001 0 0 0 6 6.004",clipRule:"evenodd"})})}),Oi=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"LockedSolidIcon","aria-label":"locked solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M2 4H0v8h12V4h-2V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zm1-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2H3zm4.5 5.5a1.5 1.5 0 0 1-1 1.415V10h-1V8.915a1.5 1.5 0 1 1 2-1.415",clipRule:"evenodd"})})}),Wi=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"MaintenanceIcon","aria-label":"maintenance",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M5.938 2.402a2.48 2.48 0 0 0-1.72-.729l1.583 1.583-2.545 2.545L1.673 4.22a2.497 2.497 0 0 0 3.572 2.205l.32-.152 3.909 3.909a.5.5 0 0 0 .707-.707l-3.91-3.91.152-.319a2.5 2.5 0 0 0-.485-2.843m.707-.707a3.49 3.49 0 0 1 .818 3.646l3.425 3.425a1.5 1.5 0 0 1-2.122 2.122L5.341 7.463A3.493 3.493 0 0 1 .87 3.014l.263-.751 2.124 2.124 1.131-1.131-2.124-2.124.751-.262a3.5 3.5 0 0 1 3.631.825"})})}),Ei=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"MaintenanceSolidIcon","aria-label":"maintenance solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M6.645 1.695a3.49 3.49 0 0 1 .818 3.646l3.425 3.425a1.5 1.5 0 0 1-2.122 2.122L5.341 7.463A3.493 3.493 0 0 1 .87 3.014l.263-.751 2.124 2.124 1.131-1.131-2.124-2.124.751-.262a3.5 3.5 0 0 1 3.631.825"})})}),Gi=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ManIcon","aria-label":"man",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M6 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M5 3.5a1 1 0 0 0-1 1V8h.75v4h1V8h.5v4h1V8H8V4.5a1 1 0 0 0-1-1zm0 1V7h2V4.5z",clipRule:"evenodd"})})}),$i=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ManSolidIcon","aria-label":"man solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M6 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M4 4.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V8h-.75v4h-2.5V8H4z"})})}),Ui=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ManWomanIcon","aria-label":"man woman",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M9 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-.25 10V9h.5v3h1V9H12l-1.658-4.56a1.428 1.428 0 0 0-2.684 0L6 9h1.75v3zm.652-7.218L10.572 8H7.428l1.17-3.218a.428.428 0 0 1 .804 0M3 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M2 3.5a1 1 0 0 0-1 1V8h.75v4h1V8h.5v4h1V8H5V4.5a1 1 0 0 0-1-1zm0 1V7h2V4.5z",clipRule:"evenodd"})})}),_i=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ManWomanSolidIcon","aria-label":"man woman solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M3 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 4.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V8h-.75v4h-2.5V8H1zm9.5-3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M10.25 9v3h-2.5V9H6l1.658-4.56a1.428 1.428 0 0 1 2.684 0L12 9z"})})}),Ki=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"MapIcon","aria-label":"map",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"m0 12 3-2 3 2 3-2 3 2V2L9 0 6 2 3 0 0 2zm5.5-1.535V2.869l-2-1.334v7.596zm1 0V2.869l2-1.334v7.596zm4.5-.333-1.5-1V1.534l1.5 1zm-8.5-1-1.5 1V2.535l1.5-1z",clipRule:"evenodd"})})}),Qi=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"MapSolidIcon","aria-label":"map solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"m3 10-3 2V2l3-2 3 2 3-2 3 2v10l-3-2-3 2zm3.5-7.131v7.596l2-1.334V1.535zm-4 6.262V1.535l-1.5 1v7.597z",clipRule:"evenodd"})})}),Xi=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"MarkerIcon","aria-label":"marker",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M5 0h1v2h3.067L11 4 9.067 6H6v6H5V6H1V2h4zm3.666 5 .967-1-.967-1H2v2z",clipRule:"evenodd"})})}),Ji=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"MarkerSolidIcon","aria-label":"marker solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M6 0H5v2H1v4h4v6h1V6h3.067L11 4 9.067 2H6z"})})}),Zi=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"MaximizeIcon","aria-label":"maximize",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M0 0h12v12H0zm11 3H1v8h10z",clipRule:"evenodd"})})}),Yi=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"MaximizeSolidIcon","aria-label":"maximize solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M0 0h12v12H0zm11 1H1v2h10z",clipRule:"evenodd"})})}),e1=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"MedicalKitIcon","aria-label":"medical kit",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M11 2H1v8h10zM0 1v10h12V1z",clipRule:"evenodd"}),e.jsx("path",{d:"M5 7v1h2V7h1V5H7V4H5v1H4v2z"}),e.jsx("path",{fillRule:"evenodd",d:"M2 10V2h1v8zm7 0V2h1v8z",clipRule:"evenodd"})]})}),t1=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"MedicalKitSolidIcon","aria-label":"medical kit solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M9 1H3v10h6zM5 8V7H4V5h1V4h2v1h1v2H7v1z",clipRule:"evenodd"}),e.jsx("path",{d:"M10 1v10h2V1zM0 1h2v10H0z"})]})}),a1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"MenuIcon","aria-label":"menu",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M0 1h12v2H0zm0 4h12v2H0zm12 4H0v2h12z"})})}),o1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"MessageIcon","aria-label":"message",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M12 1H0v10h12zM1 2.504V2h10v.504L6 6.368zm0 1.264V10h10V3.768L6 7.632z",clipRule:"evenodd"})})}),n1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"MessageForwardIcon","aria-label":"message forward",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M2 11H1V9a5 5 0 0 1 5-5h3.086L7.465 2.379l.707-.707L11 4.5 8.172 7.328l-.707-.707L9.085 5H6a4 4 0 0 0-1.53.305l-.18.079a4 4 0 0 0-1.118.788l-.136.142c-.308.34-.555.731-.731 1.156l-.072.182A4 4 0 0 0 2 9z"})})}),l1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"MessageReplyIcon","aria-label":"message reply",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M11 11h-1V9a4 4 0 0 0-.233-1.348l-.072-.182a4 4 0 0 0-.731-1.156l-.136-.142a4 4 0 0 0-1.117-.788l-.18-.08A4 4 0 0 0 6 5H2.914l1.621 1.621-.707.707L1 4.5l2.828-2.828.707.707L2.915 4H6a5 5 0 0 1 5 5z"})})}),r1=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"MessageReplyAllIcon","aria-label":"message reply all",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M11 11h-1V9a4 4 0 0 0-.233-1.348l-.072-.182a4 4 0 0 0-.731-1.156l-.136-.142a4 4 0 0 0-1.117-.788l-.18-.08A4 4 0 0 0 6 5h-.664l1.621 1.621-.707.707L3.422 4.5 6.25 1.672l.707.707L5.336 4H6a5 5 0 0 1 5 5z"}),e.jsx("path",{d:"M4.535 2.379 2.415 4.5l2.12 2.121-.707.707L1 4.5l2.828-2.828z"})]})}),s1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"MessageSolidIcon","aria-label":"message solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M12 1H0v10h12zM2.1 3.354l-.612.792L6 7.632l4.512-3.486-.612-.792L6 6.368z",clipRule:"evenodd"})})}),i1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"MicroMenuIcon","aria-label":"micro menu",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M5 11V9h2v2zm0-4V5h2v2zm0-6v2h2V1z"})})}),d1=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"MicrophoneIcon","aria-label":"microphone",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M6 0a2.5 2.5 0 0 0-2.5 2.5v3a2.5 2.5 0 0 0 5 0v-3A2.5 2.5 0 0 0 6 0m1.5 5.5v-3a1.5 1.5 0 1 0-3 0v3a1.5 1.5 0 1 0 3 0",clipRule:"evenodd"}),e.jsx("path",{d:"M2.5 5.5a3.5 3.5 0 1 0 7 0h1a4.5 4.5 0 0 1-4 4.473V11H9v1H3v-1h2.5V9.973a4.5 4.5 0 0 1-4-4.473z"})]})}),c1=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"MicrophoneDisabledIcon","aria-label":"microphone disabled",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M3.503 5.625a2.5 2.5 0 0 0 2.378 2.372z"}),e.jsx("path",{d:"M6.795 8.91A3.5 3.5 0 0 1 2.5 5.5h-1a4.5 4.5 0 0 0 4 4.473V11H3v1h6v-.891L8.891 11H6.5V9.973q.575-.066 1.096-.264zm3.102-1.158-.74-.738c.22-.458.343-.972.343-1.514h1c0 .82-.22 1.59-.603 2.252m-1.51-1.506L7.5 5.36V2.5a1.5 1.5 0 0 0-2.995-.128l-.82-.819A2.5 2.5 0 0 1 8.5 2.5v3q-.002.391-.113.746M10.307 11 1 1.716 1.716 1 11 10.267z"})]})}),u1=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"MicrophoneDisabledSolidIcon","aria-label":"microphone disabled solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M3.503 5.625a2.5 2.5 0 0 0 2.378 2.372z"}),e.jsx("path",{d:"M6.795 8.91A3.5 3.5 0 0 1 2.5 5.5h-1a4.5 4.5 0 0 0 4 4.473V11H3v1h6v-.891L8.891 11H6.5V9.973q.575-.066 1.096-.264zm3.102-1.158-.74-.738c.22-.458.343-.972.343-1.514h1c0 .82-.22 1.59-.603 2.252m-1.51-1.506L3.686 1.553A2.5 2.5 0 0 1 8.5 2.5v3q-.002.391-.113.746M10.307 11 1 1.716 1.716 1 11 10.267z"})]})}),v1=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"MicrophoneSolidIcon","aria-label":"microphone solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M6 0a2.5 2.5 0 0 0-2.5 2.5v3a2.5 2.5 0 0 0 5 0v-3A2.5 2.5 0 0 0 6 0",clipRule:"evenodd"}),e.jsx("path",{d:"M2.5 5.5a3.5 3.5 0 1 0 7 0h1a4.5 4.5 0 0 1-4 4.473V11H9v1H3v-1h2.5V9.973a4.5 4.5 0 0 1-4-4.473z"})]})}),h1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"MinimizeIcon","aria-label":"minimize",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M0 8h12v2H0z"})})}),b1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"MobileIcon","aria-label":"mobile",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2m6-1H4a1 1 0 0 0-1 1h6a1 1 0 0 0-1-1m1 8V3H3v6zm-6 1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1z",clipRule:"evenodd"})})}),p1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"MobileSolidIcon","aria-label":"mobile solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2m7 8V2H3v8z",clipRule:"evenodd"})})}),f1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"MouseIcon","aria-label":"mouse",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M2 4a4 4 0 1 1 8 0v4a4 4 0 0 1-8 0zm7 4a3 3 0 0 1-6 0V4a3 3 0 0 1 2.5-2.959V2h-1v4h1v1h1V6h1V2h-1v-.959A3 3 0 0 1 9 4zM5.5 3v2h1V3z",clipRule:"evenodd"})})}),g1=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"MouseSolidIcon","aria-label":"mouse solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M5.5.031A4 4 0 0 0 2 4.001v4a4 4 0 1 0 8 0V4A4 4 0 0 0 6.5.03V2h1v4h-1v1h-1V6h-1V2h1z"}),e.jsx("path",{d:"M5.5 3h1v2h-1z"})]})}),x1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"MoveAllIcon","aria-label":"move all",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M5.505 1.905v3.088h.974V1.895L7.94 3.353l.707-.707L5.997 0 3.35 2.643l.707.707zM3.353 4.06l-.707-.707L0 6.003l2.642 2.648.707-.707-1.445-1.448h3.088v-.974H1.894zm-.001 5.295.707-.707 1.462 1.46v-3.1h.974v3.088L7.944 8.65l.707.707L6.003 12zm6.003-.707L12 5.998 9.357 3.35l-.707.707 1.446 1.449H7.008v.974h3.098L8.648 7.94z"})})}),m1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"MoveHorizontalIcon","aria-label":"move horizontal",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M4.992 6.496H1.904l1.795 1.798-.707.708L0 6.004 2.998 3l.706.708-1.81 1.814h3.098zm2.016-.99h3.088L8.301 3.708 9.008 3 12 5.998 9.002 9.002l-.706-.708 1.81-1.814H7.008z"})})}),I1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"MoveVerticalIcon","aria-label":"move vertical",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M5.505 4.993V1.905L3.707 3.699 3 2.993 5.997.001l3.004 2.998-.708.706-1.814-1.81v3.098zm.99 2.016v3.088l1.798-1.795.708.707L6.003 12 3 9.003l.708-.707 1.814 1.811V7.01z"})})}),w1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"MultiplyIcon","aria-label":"multiply",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M6 5.293 9.182 2.11l.707.707L6.707 6l3.182 3.182-.707.707L6 6.707 2.818 9.89l-.707-.707L5.293 6 2.11 2.818l.707-.707z"})})}),y1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"MusicIcon","aria-label":"music",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M5 9.5V1.883l6-.75V6.5a2.5 2.5 0 1 0 1 2V0L4 1v6.5a2.5 2.5 0 1 0 1 2m-1 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m7-1a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0",clipRule:"evenodd"})})}),z1=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"MusicDisabledIcon","aria-label":"music disabled",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M5 9.5V8.125l-1-.996v.37a2.5 2.5 0 1 0 1 2m-1 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0",clipRule:"evenodd"}),e.jsx("path",{d:"M9.5 6c-.655 0-1.25.252-1.697.664l.71.707a1.5 1.5 0 0 1 2.12 2.114l.708.707C11.75 9.747 12 9.152 12 8.5V0L4 1v1.87l1 .997V1.883l6-.75V6.5A2.5 2.5 0 0 0 9.5 6M0 1.752 10.272 12l.728-.77L.752 1z"})]})}),S1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"MusicDisabledSolidIcon","aria-label":"music disabled solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M5 9.5V8.125l-1-.996v.37a2.5 2.5 0 1 0 1 2M9.5 6c-.655 0-1.25.252-1.697.664l3.538 3.528C11.75 9.747 12 9.152 12 8.5V0L4 1v1.87l1 .997V1.883l6-.75V6.5A2.5 2.5 0 0 0 9.5 6M0 1.752 10.272 12l.728-.77L.752 1z"})})}),j1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"MusicSolidIcon","aria-label":"music solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M5 9.5V1.883l6-.75V6.5a2.5 2.5 0 1 0 1 2V0L4 1v6.5a2.5 2.5 0 1 0 1 2",clipRule:"evenodd"})})}),R1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"NotAllowedIcon","aria-label":"not allowed",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0M2.128 2.835A5 5 0 0 0 9.164 9.87zM6 1a4.98 4.98 0 0 0-3.165 1.128l7.036 7.035A5 5 0 0 0 6 1",clipRule:"evenodd"})})}),C1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"NoteIcon","aria-label":"note",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M1 11V1h10v8.207L9.207 11zm6-1H2V2h8v5H7zm3-2v.793L8.793 10H8V8z",clipRule:"evenodd"})})}),k1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"NoteSolidIcon","aria-label":"note solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M9.207 11H1V1h10v8.207zM7 10h1V8h2V7H7z",clipRule:"evenodd"})})}),H1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"NotificationIcon","aria-label":"notification",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M2.004 6V3q0-.62.234-1.16.235-.55.633-.95.41-.41.961-.656A3 3 0 0 1 5.004 0h1.992q.621 0 1.172.234.55.246.95.657.409.398.644.949.234.54.234 1.16v3q.152.855.399 1.36.257.503.609.644H12V9H0v-.996h.996q.351-.141.598-.645.258-.504.41-1.359m7.605 2.004a3.7 3.7 0 0 1-.351-.809 9 9 0 0 1-.246-1.02L9 6V3q0-.82-.586-1.406a1.93 1.93 0 0 0-1.418-.586H5.004q-.832 0-1.418.586T3 3v3l-.012.176q-.105.563-.246 1.02-.14.456-.351.808zM6 12a1.52 1.52 0 0 1-1.066-.41 1.27 1.27 0 0 1-.434-.973v-.609h3v.609q0 .574-.445.973Q6.62 12 6 12"})})}),M1=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"NotificationReadIcon","aria-label":"notification read",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M9.51 1.368a2.8 2.8 0 0 0-.393-.477 3 3 0 0 0-.949-.657A3 3 0 0 0 6.996 0H5.004q-.621 0-1.172.234a3.2 3.2 0 0 0-.96.657 3 3 0 0 0-.634.949q-.234.54-.234 1.16v3q-.153.855-.41 1.36-.246.503-.598.644H0V9h12v-.996h-.996q-.352-.141-.61-.645Q10.15 6.855 9.997 6v-.875l-.988.989.004.062q.105.563.246 1.02.14.456.351.808H2.391q.21-.351.351-.809.141-.456.246-1.02L3 6V3q0-.82.586-1.406.585-.586 1.418-.586h1.992q.832 0 1.418.586.231.23.372.5zM4.934 11.59Q5.379 12 6 12t1.055-.41q.445-.399.445-.973v-.61h-3v.61q0 .574.434.973"}),e.jsx("path",{fillRule:"evenodd",d:"M7.121 5.172 11.293 1l.707.707-4.879 4.879L5 4.464l.707-.707z",clipRule:"evenodd"})]})}),B1=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"NotificationReadSolidIcon","aria-label":"notification read solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M9.51 1.368a2.8 2.8 0 0 0-.393-.477 3 3 0 0 0-.949-.657A3 3 0 0 0 6.996 0H5.004q-.621 0-1.172.234a3.2 3.2 0 0 0-.96.657 3 3 0 0 0-.634.949q-.234.54-.234 1.16v3q-.153.855-.41 1.36-.246.503-.598.644H0V9h12v-.996h-.996q-.328-.14-.574-.574-.235-.446-.387-1.207l-.047-.211v-.887L7.121 8 3.586 4.464l2.121-2.12 1.414 1.413zM4.934 11.59Q5.379 12 6 12t1.055-.41q.445-.399.445-.973v-.61h-3v.61q0 .574.434.973"}),e.jsx("path",{fillRule:"evenodd",d:"M7.121 5.172 11.293 1l.707.707-4.879 4.879L5 4.464l.707-.707z",clipRule:"evenodd"})]})}),V1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"NotificationSolidIcon","aria-label":"notification solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M.996 8.004q.351-.141.598-.645.258-.504.41-1.359V3q0-.62.234-1.16.235-.55.633-.95.41-.41.961-.656A3 3 0 0 1 5.004 0h1.992q.621 0 1.172.234.55.246.95.657.409.398.644.949.234.54.234 1.16v3.012l.047.21q.152.761.387 1.208.246.433.574.574H12V9H0v-.996zM6 12a1.52 1.52 0 0 1-1.066-.41 1.27 1.27 0 0 1-.434-.973v-.609h3v.609q0 .574-.445.973Q6.62 12 6 12"})})}),L1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"OutdentIcon","aria-label":"outdent",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M3 2.5h9v1H3zm4 3h5v1H7zm0 3h5v1H7zM0 7.475l2.83 2.829.706-.707L1.94 8h4.042V7H1.89l1.646-1.647-.707-.707z"})})}),A1=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"PanelCloseBottomIcon","aria-label":"panel close bottom",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M6 7 3.172 4.172l.707-.707L5.5 5.085V2h1v3.086l1.621-1.621.707.707z"}),e.jsx("path",{fillRule:"evenodd",d:"M0 12V0h12v12zM1 1v7h10V1zm0 8v2h10V9z",clipRule:"evenodd"})]})}),T1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"PanelCloseBottomSolidIcon","aria-label":"panel close bottom solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M0 12V0h12v12zm1-4v3h10V8zm7.121-4.535L6.5 5.085V2h-1v3.086L3.879 3.465l-.707.707L6 7l2.828-2.828z",clipRule:"evenodd"})})}),q1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"PanelCloseLeftSolidIcon","aria-label":"panel close left solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M12 12H0V0h12zM1 11h3V1H1zm4-5 2.828 2.828.707-.707L6.915 6.5H10v-1H6.914l1.621-1.621-.707-.707z",clipRule:"evenodd"})})}),P1=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"PanelCloseRightIcon","aria-label":"panel close right",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M7 6 4.172 8.828l-.707-.707L5.085 6.5H2v-1h3.086L3.465 3.879l.707-.707z"}),e.jsx("path",{fillRule:"evenodd",d:"M12 12H0V0h12zM1 11h7V1H1zm8 0h2V1H9z",clipRule:"evenodd"})]})}),N1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"PanelCloseRightSolidIcon","aria-label":"panel close right solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M12 12H0V0h12zm-4-1h3V1H8zM3.465 3.879 5.085 5.5H2v1h3.086L3.465 8.121l.707.707L7 6 4.172 3.172z",clipRule:"evenodd"})})}),D1=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"PanelCloseTopIcon","aria-label":"panel close top",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M8.121 8.535 6.5 6.915V10h-1V6.914L3.879 8.535l-.707-.707L6 5l2.828 2.828z"}),e.jsx("path",{fillRule:"evenodd",d:"M0 12V0h12v12zM1 1v2h10V1zm0 3v7h10V4z",clipRule:"evenodd"})]})}),F1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"PanelCloseTopSolidIcon","aria-label":"panel close top solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M0 12V0h12v12zM1 1v3h10V1zm5 4L3.172 7.828l.707.707L5.5 6.915V10h1V6.914l1.621 1.621.707-.707z",clipRule:"evenodd"})})}),O1=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"PanelOpenBottomIcon","aria-label":"panel open bottom",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M8.121 5.535 6.5 3.915V7h-1V3.914L3.879 5.535l-.707-.707L6 2l2.828 2.828z"}),e.jsx("path",{fillRule:"evenodd",d:"M0 12V0h12v12zM1 1v7h10V1zm0 8v2h10V9z",clipRule:"evenodd"})]})}),W1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"PanelOpenBottomSolidIcon","aria-label":"panel open bottom solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M0 12V0h12v12zm1-4v3h10V8zm5-6L3.172 4.828l.707.707L5.5 3.915V7h1V3.914l1.621 1.621.707-.707z",clipRule:"evenodd"})})}),E1=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"PanelOpenLeftIcon","aria-label":"panel open left",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M10.004 6 7.176 8.828l-.707-.707L8.089 6.5H5.005v-1H8.09L6.469 3.879l.707-.707z"}),e.jsx("path",{fillRule:"evenodd",d:"M12 12H0V0h12zM1 11h2V1H1zm3 0h7V1H4z",clipRule:"evenodd"})]})}),G1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"PanelOpenLeftSolidIcon","aria-label":"panel open left solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M12 12H0V0h12zM1 11h3.004V1H1zm5.469-7.121L8.089 5.5H5.005v1H8.09L6.469 8.121l.707.707L10.004 6 7.176 3.172z",clipRule:"evenodd"})})}),$1=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"PanelOpenRightIcon","aria-label":"panel open right",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M5.535 3.879 3.915 5.5H7v1H3.914l1.621 1.621-.707.707L2 6l2.828-2.828z"}),e.jsx("path",{fillRule:"evenodd",d:"M12 12H0V0h12zM1 11h7V1H1zm8 0h2V1H9z",clipRule:"evenodd"})]})}),U1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"PanelOpenRightSolidIcon","aria-label":"panel open right solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M12 12H0V0h12zm-4-1h3V1H8zM2 6l2.828 2.828.707-.707L3.915 6.5H7v-1H3.914l1.621-1.621-.707-.707z",clipRule:"evenodd"})})}),_1=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"PanelOpenTopIcon","aria-label":"panel open top",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M6 10.004 3.172 7.176l.707-.707L5.5 8.089V5.005h1V8.09l1.621-1.621.707.707z"}),e.jsx("path",{fillRule:"evenodd",d:"M0 12V0h12v12zM1 1v2h10V1zm0 3v7h10V4z",clipRule:"evenodd"})]})}),K1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"PanelOpenTopSolidIcon","aria-label":"panel open top solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M0 12V0h12v12zM1 1v3.004h10V1zm7.121 5.469L6.5 8.089V5.005h-1V8.09L3.879 6.469l-.707.707L6 10.004l2.828-2.828z",clipRule:"evenodd"})})}),Q1=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"PasteIcon","aria-label":"paste",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M3 1v1H2v9h8V2H9V1h2v11H1V1z"}),e.jsx("path",{fillRule:"evenodd",d:"M9 0H3v3h6zM8 1H4v1h4z",clipRule:"evenodd"})]})}),X1=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"PasteSolidIcon","aria-label":"paste solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M9 0v1H8v1H4V1H3V0z"}),e.jsx("path",{d:"M3 1v2h6V1h2v11H1V1z"})]})}),J1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"PauseIcon","aria-label":"pause",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M2 0h3v12H2zm1 1v10h1V1zm4-1h3v12H7zm1 1v10h1V1z"})})}),Z1=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"PauseSolidIcon","aria-label":"pause solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M2 0h3v12H2zm5 0h3v12H7z"})})}),Y1=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"PdfIcon","aria-label":"pdf",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M1 0v6h1V1h5v3h3v2h1V2L9 0zm9 3v-.586L8.586 1H8v2zM2.453 7.003q.966 0 1.411.396.444.397.445 1.111 0 .325-.103.619a1.3 1.3 0 0 1-.328.516 1.6 1.6 0 0 1-.605.352q-.372.13-.92.13H1.82V12H1V7.003zm-.055.68H1.82v1.76h.448q.386 0 .656-.089a.8.8 0 0 0 .41-.29q.14-.198.14-.523 0-.435-.263-.646-.26-.212-.813-.212M8.77 9.454q0 .843-.314 1.411-.315.564-.913.851Q6.944 12 6.101 12H4.713V7.003H6.25q.776 0 1.34.28.564.278.871.824.308.543.308 1.347m-.854.024q0-.615-.195-1.012a1.25 1.25 0 0 0-.568-.588q-.372-.195-.92-.195h-.7v3.63h.581q.906 0 1.354-.461.447-.462.448-1.374",clipRule:"evenodd"}),e.jsx("path",{d:"M9.177 12h.813V9.939h1.88v-.687H9.99V7.693H12v-.69H9.177z"})]})}),ed=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"PdfSolidIcon","aria-label":"pdf solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M2.453 7.003q.966 0 1.411.396.444.397.445 1.111 0 .325-.103.619a1.3 1.3 0 0 1-.328.516 1.6 1.6 0 0 1-.605.352q-.372.13-.92.13H1.82V12H1V7.003zm-.055.68H1.82v1.76h.448q.386 0 .656-.089a.8.8 0 0 0 .41-.29q.14-.198.14-.523 0-.435-.263-.646-.26-.212-.813-.212M8.77 9.454q0 .843-.314 1.411-.315.564-.913.851Q6.944 12 6.101 12H4.713V7.003H6.25q.776 0 1.34.28.564.278.871.824.308.543.308 1.347m-.854.024q0-.615-.195-1.012a1.25 1.25 0 0 0-.568-.588q-.372-.195-.92-.195h-.7v3.63h.581q.906 0 1.354-.461.447-.462.448-1.374",clipRule:"evenodd"}),e.jsx("path",{d:"M9.177 12h.813V9.939h1.88v-.687H9.99V7.693H12v-.69H9.177z"}),e.jsx("path",{fillRule:"evenodd",d:"M1 0v6h10V2L9 0zm7 1H7v3h3V3H8z",clipRule:"evenodd"})]})}),td=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"PercentageIcon","aria-label":"percentage",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M9 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",clipRule:"evenodd"}),e.jsx("path",{d:"M10.597 2.111 2.11 10.597l-.707-.708L9.89 1.404z"}),e.jsx("path",{fillRule:"evenodd",d:"M3 1a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",clipRule:"evenodd"})]})}),ad=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"PiIcon","aria-label":"pi",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M11 1.5a.5.5 0 0 1-.5.5H9v7.52a.5.5 0 0 0 .145.335.503.503 0 0 0 .857-.355H11a1.5 1.5 0 0 1-2.886.574 1.5 1.5 0 0 1-.111-.508H8V2H4v7.586h-.004a1.5 1.5 0 0 1-.435.974 1.5 1.5 0 0 1-.998.437V11H2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .49-.402L3 9.5V2h-.5l-.098.01A.5.5 0 0 0 2 2.5H1a1.5 1.5 0 0 1 1.46-1.499L11 1z"})})}),od=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"PicnicIcon","aria-label":"picnic",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M12 8.5 9.5 0 7 8.5h2V11H5V8h1V7H3v1h1v3H2v-1h1V9H0v1h1v1H0v1h12v-1h-2V8.5zm-2-1h.7l-1.2-4-1.15 4H9v-1h1z",clipRule:"evenodd"})})}),nd=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"PicnicSolidIcon","aria-label":"picnic solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M9.5 0 12 8.5h-2V11h2v1H0v-1h1v-1H0V9h3v1H2v1h2V8H3V7h3v1H5v3h4V8.5H7zM9 7.5h1v-1H9z",clipRule:"evenodd"})})}),ld=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"PieChartIcon","aria-label":"pie chart",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M4.5 2.626a4.002 4.002 0 0 0 1 7.874v1a5 5 0 0 1 0-10v5h5a5 5 0 0 1-5 5v-1a4 4 0 0 0 3.874-3H4.5z"}),e.jsx("path",{d:"M6.5.5a5 5 0 0 1 5 5h-5zm1 4h2.874A4.01 4.01 0 0 0 7.5 1.626z"})]})}),rd=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"PinIcon","aria-label":"pin",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M2.714 4.297a2.017 2.017 0 0 1 2.857 0L7 2.864l-.714-.717L8.429 0 12 3.58 9.857 5.73l-.714-.717-1.429 1.432a2.03 2.03 0 0 1 0 2.865L7 10.026l-2.026-2.03-2.994 3.001L0 12l.99-1.995 2.994-3.002L2 5.013zM7.7 2.148l.729-.73 2.157 2.163-.729.73-.714-.716L6.3 6.445l.707.71a1.023 1.023 0 0 1 0 1.446L7 8.608 3.414 5.013l.007-.007c.399-.4 1.045-.4 1.443 0l.707.709 2.843-2.85z",clipRule:"evenodd"})})}),sd=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"PinSolidIcon","aria-label":"pin solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M2.714 4.286 2 5l1.984 1.984L.99 9.98 0 11.969l1.98-1 2.994-2.995L7 10l.714-.714a2.02 2.02 0 0 0 0-2.857L9.143 5l.714.714L12 3.571 8.429 0 6.286 2.143 7 2.857 5.571 4.286a2.02 2.02 0 0 0-2.857 0"})})}),id=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"PivotIcon","aria-label":"pivot",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M12 0H0v12h12zM1 11V8.5L4 11zm3-2v2h7V1H1v7.5L4 6v2h4V4H6l2.5-3L11 4H9v5z",clipRule:"evenodd"})})}),dd=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"PivotSolidIcon","aria-label":"pivot solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M12 0H0v12h12zM1 8.5 4 11V9h5V4h2L8.5 1 6 4h2v4H4V6z",clipRule:"evenodd"})})}),cd=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"PlaceInIcon","aria-label":"place in",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M0 12h12V6h-1v5H1V1h5V0H0z"}),e.jsx("path",{d:"M6 6V2h1v2.293L11.293 0 12 .707 7.707 5H10v1z"})]})}),ud=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"PlayIcon","aria-label":"play",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"m1 12 11-6L1 0zM2 1.685v8.63L9.912 6z",clipRule:"evenodd"})})}),vd=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"PlaySolidIcon","aria-label":"play solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"m1 0 11 6-11 6z",clipRule:"evenodd"})})}),hd=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"PolicyIcon","aria-label":"policy",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M11 2v2H7V1H2v10h5v1H1V0h8zM8 3h2v-.586L8.586 1H8z",clipRule:"evenodd"}),e.jsx("path",{fillRule:"evenodd",d:"M9.5 4.5A2.5 2.5 0 0 1 12 7c0 .817-.394 1.54-1 1.996V12l-1.5-.5L8 12V8.996A2.5 2.5 0 0 1 7 7a2.5 2.5 0 0 1 2.5-2.5M9 10.612l.184-.06.316-.106.316.106.184.06V9.5H9zM9.5 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3",clipRule:"evenodd"}),e.jsx("path",{d:"M6 9H3V8h3zm0-2H3V6h3zm0-2H3V4h3z"})]})}),bd=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"PotFoodIcon","aria-label":"pot food",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M9 1c0 .62-.297 1.212-.53 1.676l-.023.048C8.183 3.253 8 3.64 8 4H7c0-.62.297-1.212.53-1.676l.023-.048C7.817 1.747 8 1.36 8 1zm2 0c0 .62-.297 1.212-.53 1.676l-.023.048C10.183 3.253 10 3.64 10 4H9c0-.62.297-1.212.53-1.676l.023-.048C9.817 1.747 10 1.36 10 1z"}),e.jsx("path",{fillRule:"evenodd",d:"M4 10.874A4 4 0 0 1 1 7H0V6h1V5h1.5c.456-.607 1.182-1 2-1s1.544.393 2 1H11v1h1v1h-1a4 4 0 0 1-3 3.874V12H4zM2 6h8v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z",clipRule:"evenodd"})]})}),pd=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"PotFoodSolidIcon","aria-label":"pot food solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M9 1c0 .62-.297 1.212-.53 1.676l-.023.048C8.183 3.253 8 3.64 8 4H7c0-.62.297-1.212.53-1.676l.023-.048C7.817 1.747 8 1.36 8 1zm2 0c0 .62-.297 1.212-.53 1.676l-.023.048C10.183 3.253 10 3.64 10 4H9c0-.62.297-1.212.53-1.676l.023-.048C9.817 1.747 10 1.36 10 1zM2.5 5H1v1H0v1h1a4 4 0 0 0 3 3.874V12h4v-1.126c1.725-.444 3-2.01 3-3.874h1V6h-1V5H6.5a2.5 2.5 0 0 0-2-1c-.818 0-1.544.393-2 1"})})}),fd=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"PresentationIcon","aria-label":"presentation",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M9 5H3v1h6zM3 7h6v1H3z"}),e.jsx("path",{fillRule:"evenodd",d:"M0 0v10h4.493L3.25 11.243l.707.707 1.893-1.893 1.893 1.893.707-.707L7.207 10H12V0zm11 1H1v2h10zM1 9V4h10v5z",clipRule:"evenodd"})]})}),gd=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"PresentationSolidIcon","aria-label":"presentation solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M0 4v6h4.493L3.25 11.243l.707.707 1.893-1.893 1.893 1.893.707-.707L7.207 10H12V4zm3 1h6v1H3zm0 2h6v1H3zM0 0v3h12V0z",clipRule:"evenodd"})})}),xd=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"PriceLadderIcon","aria-label":"price ladder",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M3 2V0H2v12h1V9h6v3h1V0H9v2zm6 3V3H3v2zM3 6v2h6V6z",clipRule:"evenodd"})})}),md=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"PrintIcon","aria-label":"print",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M8 9v1H4V9zm0-1V7H4v1z"}),e.jsx("path",{fillRule:"evenodd",d:"M2 0v2H0v6h2v4h8V8h2V2h-2V0zm9 3H1v4h1V5h8v2h1zM9 2V1H3v1zM3 6v5h6V6z",clipRule:"evenodd"})]})}),Id=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"PrintSolidIcon","aria-label":"print solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M2 0v2H0v6h2v4h8V8h2V2h-2V0zm7 2V1H3v1zm1 3H2v2h1V6h6v1h1zm-2 5V9H4v1zm0-3v1H4V7z",clipRule:"evenodd"})})}),wd=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ProgressCancelledIcon","aria-label":"progress cancelled",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12M3.828 3.121 5.95 5.243 8.07 3.12l.707.707-2.12 2.123 2.121 2.12-.707.707-2.121-2.12-2.122 2.121-.707-.707L5.243 5.95 3.12 3.828z",clipRule:"evenodd"})})}),yd=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ProgressClosedIcon","aria-label":"progress closed",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M4 4h4v4H4z"}),e.jsx("path",{fillRule:"evenodd",d:"M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12M3 9V3h6v6z",clipRule:"evenodd"})]})}),zd=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ProgressCompleteIcon","aria-label":"progress complete",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12M3.207 5.621l-.707.707 2.475 2.475L9.57 4.207 8.864 3.5l-3.89 3.89z",clipRule:"evenodd"})})}),Sd=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ProgressDraftIcon","aria-label":"progress draft",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10m0 1A6 6 0 1 0 6 0a6 6 0 0 0 0 12",clipRule:"evenodd"})})}),jd=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ProgressOnholdIcon","aria-label":"progress onhold",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12m-.5-9H4v6h1.5zM8 3H6.5v6H8z",clipRule:"evenodd"})})}),Rd=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ProgressPendingIcon","aria-label":"progress pending",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0M6 3v3H3v1h4V3z",clipRule:"evenodd"})})}),Cd=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ProgressRejectedIcon","aria-label":"progress rejected",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12M3 6.5h6v-1H3z",clipRule:"evenodd"})})}),kd=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ProgressTodoIcon","aria-label":"progress todo",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"m11.683 4.071-.947.323a5 5 0 0 0-.977-1.692l.753-.659a6 6 0 0 1 1.17 2.028M8.654.618l-.441.898a5 5 0 0 0-1.887-.506l.066-.998a6 6 0 0 1 2.262.606m-4.583-.3.323.946a5 5 0 0 0-1.692.977l-.659-.753A6 6 0 0 1 4.071.318M.618 3.345l.898.441a5 5 0 0 0-.506 1.887l-.998-.066a6 6 0 0 1 .606-2.262m-.3 4.583a6 6 0 0 0 1.17 2.028l.753-.659a5 5 0 0 1-.977-1.692zm3.028 3.453.441-.897c.59.29 1.232.461 1.887.505l-.066.998a6 6 0 0 1-2.262-.606m4.583.3-.323-.946a5 5 0 0 0 1.692-.977l.659.753a6 6 0 0 1-2.028 1.17m3.453-3.028-.897-.441c.29-.59.461-1.232.505-1.887l.998.066a6 6 0 0 1-.606 2.262",clipRule:"evenodd"})})}),Hd=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ProtectionIcon","aria-label":"protection",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M6 12C1.188 9.818.5 4.636.5 1.91l.418-.068C2.413 1.603 3.861 1.372 6 0c2.139 1.373 3.587 1.603 5.082 1.842l.418.067C11.5 4.636 10.813 9.82 6 12m-.5-1.398V1.455c-1.578.845-2.82 1.11-3.977 1.302.136 2.48.93 5.95 3.977 7.845m4.977-7.845c-.136 2.48-.93 5.95-3.977 7.845V1.455c1.578.845 2.82 1.11 3.977 1.302",clipRule:"evenodd"})})}),Md=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ProtectionSolidIcon","aria-label":"protection solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M6 12C1.188 9.818.5 4.636.5 1.91l.418-.068C2.413 1.603 3.861 1.372 6 0c2.139 1.373 3.587 1.603 5.082 1.842l.418.067C11.5 4.636 10.813 9.82 6 12m-.5-1.398V1.455c-1.578.845-2.82 1.11-3.977 1.302.136 2.48.93 5.95 3.977 7.845",clipRule:"evenodd"})})}),Bd=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ReceiptIcon","aria-label":"receipt",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M8 3H4v1h4zM4 5h4v1H4zm4 2H4v1h4z"}),e.jsx("path",{fillRule:"evenodd",d:"M1 0v12l3-1.5L6 12l2-1.5 3 1.5V0zm5 10.5L4 9l-2 1V1h8v9L8 9z",clipRule:"evenodd"})]})}),Vd=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ReceiptSolidIcon","aria-label":"receipt solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M4 10.5 1 12V0h10v12l-3-1.5L6 12zM8 3H4v1h4zM4 5h4v1H4zm4 2H4v1h4z",clipRule:"evenodd"})})}),Ld=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"RemoveIcon","aria-label":"remove",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M1 5.5h10v1H1z"})})}),Ad=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"RemoveDocumentIcon","aria-label":"remove document",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M8 7H3v1h5z"}),e.jsx("path",{fillRule:"evenodd",d:"M1 0v12h10V2L9 0zm9 4v7H2V1h5v3zm0-1v-.5L8.5 1H8v2z",clipRule:"evenodd"})]})}),Td=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"RemoveDocumentSolidIcon","aria-label":"remove document solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M1 12V0h8l2 2v10zM7 1h1v2h2v1H7zm1 6H3v1h5z",clipRule:"evenodd"})})}),qd=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"RemoveUserIcon","aria-label":"remove user",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M6.844 1.983c.094.231.16.56.16 1.016q0 .47-.099.991h1.016q.059-.357.075-.702L8.004 3q0-.82-.234-1.395A2.4 2.4 0 0 0 6.176.164 4 4 0 0 0 5.004 0v.004l-.307.01q-.452.03-.865.154l-.133.041a2.4 2.4 0 0 0-.816.475l-.1.09q-.34.333-.545.834l-.054.148q-.18.529-.18 1.247l.007.289q.021.437.11.895l.065.296q.105.444.263.874.2.575.492 1.079l.15.243q.232.351.495.624-.095.48-.492.784l-.106.075q-.39.259-1.078.464l-.164.059-.2.046a6 6 0 0 1-.222.07l-.14.036q-.246.07-.422.129a4 4 0 0 0-.328.117A2 2 0 0 0 0 9.271V12l6 .004v-1L1 11V9.94l1.196-.356c.576-.172 1.102-.394 1.505-.702l.163-.137c.364-.331.607-.755.703-1.25l.1-.514-.362-.375a3.5 3.5 0 0 1-.5-.673 5 5 0 0 1-.411-.904l-.003-.008-.003-.008-.087-.251a7 7 0 0 1-.143-.51l-.055-.258a5.3 5.3 0 0 1-.1-.991c0-.456.067-.785.161-1.016a1.4 1.4 0 0 1 .37-.545l.006-.004.006-.006c.158-.14.34-.24.558-.302l.013-.004a3 3 0 0 1 .887-.122h.12q.415.014.767.118l.013.004c.218.062.4.162.558.302l.006.006.007.004c.136.117.264.288.369.545"}),e.jsx("path",{d:"M6 8v1h5V8z"})]})}),Pd=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"Replay5Icon","aria-label":"replay 5",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M7.979 2c2.249 0 4.06 1.835 4.02 4.071C11.96 8.252 10.172 10 7.98 10H4v2L0 9.5 4 7v2h3.979a3.01 3.01 0 0 0 3.015-2.946A3.01 3.01 0 0 0 7.98 3zm-4.344.126q.482 0 .848.174.369.171.574.506.205.331.205.814 0 .526-.222.909a1.46 1.46 0 0 1-.653.584q-.43.205-1.05.205-.392 0-.734-.068a2 2 0 0 1-.584-.205V4.32q.256.144.615.236.36.09.687.089.348 0 .598-.103a.8.8 0 0 0 .383-.314.97.97 0 0 0 .136-.537q0-.43-.276-.663-.274-.236-.858-.236-.206 0-.438.038a4 4 0 0 0-.383.075l-.352-.208L2.32.253h2.598V.96h-1.89l-.11 1.245q.124-.028.294-.052.172-.027.424-.027"})})}),Nd=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"Replay10Icon","aria-label":"replay 10",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M7.979 2c2.249 0 4.06 1.835 4.02 4.071C11.96 8.252 10.172 10 7.98 10H4v2L0 9.5 4 7v2h3.979a3.01 3.01 0 0 0 3.015-2.946A3.01 3.01 0 0 0 7.98 3zM2.545 5.25H1.74V2.034q0-.16.003-.322l.007-.314q.007-.154.017-.294-.072.079-.178.17-.102.093-.218.192l-.575.458-.403-.509L1.875.253h.67z"}),e.jsx("path",{d:"M7.073 2.748q0 .605-.095 1.084-.093.474-.294.806-.202.332-.527.506a1.64 1.64 0 0 1-.786.174q-.577 0-.954-.304-.375-.308-.557-.882-.18-.577-.18-1.384t.163-1.38q.168-.579.54-.886.373-.308.988-.308.58 0 .957.308.38.305.56.882.185.574.185 1.384m-2.584 0q0 .633.082 1.056.085.425.28.636.196.208.52.208.325 0 .52-.208.195-.21.28-.632.09-.424.089-1.06 0-.63-.086-1.053t-.28-.635a.67.67 0 0 0-.523-.216.67.67 0 0 0-.523.216q-.191.211-.277.635a5.7 5.7 0 0 0-.082 1.053"})]})}),Dd=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"Replay15Icon","aria-label":"replay 15",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M7.979 2c2.249 0 4.06 1.835 4.02 4.071C11.96 8.252 10.172 10 7.98 10H4v2L0 9.5 4 7v2h3.979a3.01 3.01 0 0 0 3.015-2.946A3.01 3.01 0 0 0 7.98 3zM2.426 5.25H1.62V2.034q0-.16.003-.322l.007-.314q.006-.154.017-.294-.072.079-.178.17-.102.093-.219.192l-.574.458-.403-.509L1.756.253h.67z"}),e.jsx("path",{d:"M5.269 2.126q.482 0 .848.174.369.171.574.506.205.331.205.814 0 .526-.222.909a1.46 1.46 0 0 1-.653.584q-.43.205-1.05.205-.392 0-.734-.068a2 2 0 0 1-.585-.205V4.32q.256.144.616.236.359.09.687.089.348 0 .598-.103a.8.8 0 0 0 .383-.314.97.97 0 0 0 .136-.537q0-.43-.277-.663-.273-.236-.857-.236-.206 0-.438.038a4 4 0 0 0-.383.075l-.352-.208.188-2.444h2.598V.96H4.66l-.11 1.245q.123-.028.294-.052.17-.027.424-.027"})]})}),Fd=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"Replay30Icon","aria-label":"replay 30",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M7.979 2c2.249 0 4.06 1.835 4.02 4.071C11.96 8.252 10.172 10 7.98 10H4v2L0 9.5 4 7v2h3.979a3.01 3.01 0 0 0 3.015-2.946A3.01 3.01 0 0 0 7.98 3zm-4.603-.605q0 .338-.137.587a1.16 1.16 0 0 1-.376.41q-.236.157-.547.226v.024q.6.076.903.376.307.3.307.796 0 .434-.208.776a1.4 1.4 0 0 1-.64.534q-.43.194-1.107.194-.406 0-.755-.065a2.8 2.8 0 0 1-.656-.208V4.33a3.2 3.2 0 0 0 1.357.328q.625 0 .892-.233.266-.235.266-.65a.67.67 0 0 0-.14-.437q-.136-.17-.427-.256a2.7 2.7 0 0 0-.742-.085h-.44v-.646h.444q.433 0 .697-.103a.77.77 0 0 0 .38-.29.77.77 0 0 0 .119-.431q0-.32-.209-.5-.208-.18-.618-.18-.254 0-.462.058a2 2 0 0 0-.38.147q-.173.089-.33.191L.18.687Q.464.476.857.328a2.6 2.6 0 0 1 .916-.147q.77 0 1.186.332.417.327.417.882"}),e.jsx("path",{d:"M7.323 2.748q0 .605-.095 1.084-.093.474-.294.806-.202.332-.527.506a1.64 1.64 0 0 1-.786.174q-.577 0-.954-.304-.375-.308-.557-.882-.18-.577-.18-1.384t.163-1.38q.168-.579.54-.886.373-.308.988-.308.58 0 .957.308.38.305.56.882.185.574.185 1.384m-2.584 0q0 .633.082 1.056.085.425.28.636.196.208.52.208.325 0 .52-.208.195-.21.28-.632.09-.424.089-1.06 0-.63-.086-1.053t-.28-.635a.67.67 0 0 0-.523-.216.67.67 0 0 0-.523.216q-.191.211-.277.635a5.7 5.7 0 0 0-.082 1.053"})]})}),Od=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"RestoreIcon","aria-label":"restore",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M12 0H0v6h1V3h10v8H6v1h6z"}),e.jsx("path",{d:"M0 12V8h1v2.293L5.293 6 6 6.707 1.707 11H4v1z"})]})}),Wd=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"RunReportIcon","aria-label":"run report",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"m4 5 4 2.5L4 10z"}),e.jsx("path",{fillRule:"evenodd",d:"M1 0v12h10V2L9 0zm6 4h3v7H2V1h5zm3-1v-.586L8.586 1H8v2z",clipRule:"evenodd"})]})}),Ed=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"RunReportSolidIcon","aria-label":"run report solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M1 12V0h8l2 2v10zM7 1h1v2h2v1H7zM4 5l4 2.5L4 10z",clipRule:"evenodd"})})}),Gd=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"SaltShakerIcon","aria-label":"salt shaker",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M5.346 5.248 6.957 6.86 9.26 5.25z"}),e.jsx("path",{fillRule:"evenodd",d:"M2.512 5.243 5.966.386A1 1 0 0 1 7.462.293L11.71 4.54a1 1 0 0 1-.093 1.496L6.761 9.49a3 3 0 0 1-4.243 0 3.01 3.01 0 0 1-.006-4.247m1.332-.083 3 3 3.67-2.57a.5.5 0 0 0 .068-.763L7.177 1.42a.5.5 0 0 0-.764.067zm-.634.78a2.023 2.023 0 0 0 2.859 2.859z",clipRule:"evenodd"}),e.jsx("path",{d:"M1 8H0v1h1zm-1 2h1v1H0zm3 1H2v1h1z"})]})}),$d=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"SaltShakerSolidIcon","aria-label":"salt shaker solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"m2.518 5.248.01-.013L6.774 9.48l-.013.01a3 3 0 0 1-4.243 0 3 3 0 0 1 0-4.243"}),e.jsx("path",{fillRule:"evenodd",d:"M7.6 8.893 3.115 4.407 5.966.387A1 1 0 0 1 7.462.292L11.71 4.54a1 1 0 0 1-.093 1.496zm2.915-3.303-2.84 1.987-2.329-2.329h5.377a.5.5 0 0 1-.208.342",clipRule:"evenodd"}),e.jsx("path",{d:"M1 8H0v1h1zm0 2H0v1h1zm2 1H2v1h1z"})]})}),Ud=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"SaveSolidIcon","aria-label":"save solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M9 7H3v2h6z"}),e.jsx("path",{fillRule:"evenodd",d:"M3 0H0v12h12V3.293L8.707 0H8v4H3zm7 6H2v4h8z",clipRule:"evenodd"}),e.jsx("path",{d:"M4 0v3h3V0z"})]})}),_d=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ScalesIcon","aria-label":"scales",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M6 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-1a1.5 1.5 0 0 0 .5-2.915V7.5h-1V6.085A1.5 1.5 0 0 0 6 9",clipRule:"evenodd"}),e.jsx("path",{fillRule:"evenodd",d:"M2 2h3.5v1H1l-1 9h12l-1-9H6.5V2H10V1H2zm-.105 2h8.21l.778 7H1.117z",clipRule:"evenodd"})]})}),Kd=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ScalesSolidIcon","aria-label":"scales solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M6 9a1.5 1.5 0 0 0 .5-2.915V7.5h-1V6.085A1.5 1.5 0 0 0 6 9"}),e.jsx("path",{fillRule:"evenodd",d:"M5.5 2H2V1h8v1H6.5v1H11l1 9H0l1-9h4.5zm.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5",clipRule:"evenodd"})]})}),Qd=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ScheduleIcon","aria-label":"schedule",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M10 9h2v1h-2v2H9v-2H7V9h2V7h1z"}),e.jsx("path",{fillRule:"evenodd",d:"M12 6h-1V4H1v7h5v1H0V1h3V0h1v1h4V0h1v1h3zM3 3h1V2H3zm5 0h1V2H8z",clipRule:"evenodd"})]})}),Xd=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ScheduleTimeIcon","aria-label":"schedule time",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M6 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-.25-2.5V6h.5v2h-1.5v-.5z",clipRule:"evenodd"}),e.jsx("path",{fillRule:"evenodd",d:"M1 0v12h10V2L9 0zm6 4h3v7H2V1h5zm3-1v-.586L8.586 1H8v2z",clipRule:"evenodd"})]})}),Jd=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ScheduleTimeSolidIcon","aria-label":"schedule time solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M5.75 6v1.5h-1V8h1.5V6z"}),e.jsx("path",{fillRule:"evenodd",d:"M1 0v12h10V2L9 0zm7 1H7v3h3V3H8zm.5 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0",clipRule:"evenodd"})]})}),Zd=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SchoolIcon","aria-label":"school",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"m6.053 1.014 5.898 3.397a.1.1 0 0 1 .046.112v2.482H10.98V5.154l-.859.506v3.004l-.25.145c-1.199.699-2.6 1.504-3.626 2.056L5.993 11l-.247-.143-.005-.003-.017-.009-.063-.036-.236-.136-.83-.478c-.68-.39-1.57-.903-2.406-1.385l-.252-.145V5.666L.048 4.58a.096.096 0 0 1 .003-.168l5.901-3.399a.1.1 0 0 1 .101.001m-3.1 7.075 2.154 1.24.83.477.07.04c.908-.495 2.058-1.153 3.098-1.757V6.255c-1.05.61-2.183 1.257-3.054 1.727l-.048.013-.047-.013-3.003-1.73zM1.921 4.496l4.093 2.357c1.27-.7 2.914-1.658 4.085-2.347l-4.097-2.36z",clipRule:"evenodd"})})}),Yd=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"SchoolSolidIcon","aria-label":"school solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M2.656 6.934 6.003 8.84l4.117-2.31v2.134l-.25.145-.346.199a212 212 0 0 1-1.254.723 99 99 0 0 1-2.026 1.134L5.993 11l-.248-.143-.004-.003-.017-.009-.063-.036-.236-.136-.83-.478c-.68-.39-1.57-.903-2.406-1.385l-.252-.145V6.519z"}),e.jsx("path",{d:"m6.053 1.013 5.899 3.399c.04.023.054.067.045.107v2.485h-1.016v-1.85C9.673 5.926 7.5 7.2 6.051 7.981a.1.1 0 0 1-.095 0C5.448 7.69.926 5.09.048 4.581a.098.098 0 0 1 .003-.17c2.22-1.277 5.46-3.144 5.9-3.398a.1.1 0 0 1 .102 0"})]})}),ec=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SearchSolidIcon","aria-label":"search solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M5 10a4.98 4.98 0 0 0 3-1l3 3 1-1-3-3a5 5 0 1 0-4 2m0-8a3 3 0 0 1 3 3h1a4 4 0 0 0-4-4z",clipRule:"evenodd"})})}),tc=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"SemanticDissatisfiedIcon","aria-label":"semantic dissatisfied",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M6 8c-.981 0-1.853.471-2.4 1.2a4 4 0 0 1-.723-.7A4 4 0 0 1 6 7c1.263 0 2.39.586 3.123 1.5-.21.262-.454.498-.723.7A3 3 0 0 0 6 8M5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"}),e.jsx("path",{fillRule:"evenodd",d:"M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0m-3 4c-.835.628-1.874 1-3 1a4.98 4.98 0 0 1-3-1l-.04-.03A4.98 4.98 0 0 1 1 6a5 5 0 1 1 8 4",clipRule:"evenodd"})]})}),ac=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SemanticDissatisfiedSolidIcon","aria-label":"semantic dissatisfied solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12M5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1 3c-.982 0-1.853.471-2.4 1.2a4 4 0 0 1-.723-.7A4 4 0 0 1 6 7c1.263 0 2.39.586 3.123 1.5-.21.262-.454.498-.723.7A3 3 0 0 0 6 8m3-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0",clipRule:"evenodd"})})}),oc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SemanticNeutralIcon","aria-label":"semantic neutral",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M11 6A5 5 0 1 1 1 6a5 5 0 0 1 10 0m1 0A6 6 0 1 1 0 6a6 6 0 0 1 12 0M4 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 4V8H3v1z",clipRule:"evenodd"})})}),nc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SemanticNeutralSolidIcon","aria-label":"semantic neutral solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12M4 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 3v1H3V8z",clipRule:"evenodd"})})}),lc=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"SemanticSatisfiedIcon","aria-label":"semantic satisfied",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M5.874 9c.982 0 1.853-.471 2.4-1.2q.406.305.723.7A4 4 0 0 1 5.874 10a4 4 0 0 1-3.123-1.5c.21-.262.454-.498.723-.7a3 3 0 0 0 2.4 1.2M5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"}),e.jsx("path",{fillRule:"evenodd",d:"M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0m-1 0A5 5 0 1 1 1 6a5 5 0 0 1 10 0",clipRule:"evenodd"})]})}),rc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SemanticSatisfiedSolidIcon","aria-label":"semantic satisfied solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12M5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m.874 4c.982 0 1.853-.471 2.4-1.2q.406.305.723.7A4 4 0 0 1 5.874 10a4 4 0 0 1-3.123-1.5c.21-.262.454-.498.723-.7a3 3 0 0 0 2.4 1.2M9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0",clipRule:"evenodd"})})}),sc=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"SemanticVeryDissatisfiedIcon","aria-label":"semantic very dissatisfied",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M5 5a1 1 0 1 1-1.54-.842l-.719-.192L3 3l2.415.647-.259.966-.267-.072A1 1 0 0 1 5 5m3 1a1 1 0 0 0 .54-1.842l.719-.192L9 3l-2.415.647.259.966.267-.072A1 1 0 0 0 8 6M6 8a2 2 0 0 0-1.937 1.5 4 4 0 0 1-.845-.626 3.001 3.001 0 0 1 5.564 0 4 4 0 0 1-.845.626A2 2 0 0 0 6 8"}),e.jsx("path",{fillRule:"evenodd",d:"M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12m0-1a4.98 4.98 0 0 0 3.667-1.6 5 5 0 1 0-6.706.571L3 10c.835.628 1.874 1 3 1",clipRule:"evenodd"})]})}),ic=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SemanticVeryDissatisfiedSolidIcon","aria-label":"semantic very dissatisfied solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12M3 3l2.415.647-.259.966-.267-.072a1 1 0 1 1-1.43-.383l-.718-.192zm5 3a1 1 0 0 0 .54-1.842l.719-.192L9 3l-2.415.647.259.966.267-.072A1 1 0 0 0 8 6M4.063 9.5a2 2 0 0 1 3.874 0c.309-.17.593-.382.845-.626a3.001 3.001 0 0 0-5.564 0q.38.368.845.626",clipRule:"evenodd"})})}),dc=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"SemanticVerySatisfiedIcon","aria-label":"semantic very satisfied",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"}),e.jsx("path",{fillRule:"evenodd",d:"M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0m-1 0A5 5 0 1 1 1 6a5 5 0 0 1 10 0",clipRule:"evenodd"}),e.jsx("path",{fillRule:"evenodd",d:"M6 10a4 4 0 0 1-3.874-3h7.748A4 4 0 0 1 6 10m2.236-2H3.764C4.314 8.614 5.11 9 6 9c.888 0 1.687-.386 2.236-1",clipRule:"evenodd"})]})}),cc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SemanticVerySatisfiedSolidIcon","aria-label":"semantic very satisfied solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12M5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-2 4a4 4 0 0 1-3.874-3h7.748A4 4 0 0 1 6 10",clipRule:"evenodd"})})}),uc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SendIcon","aria-label":"send",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"m0 5 2 2 2 1 1 2 2 2 5-12zm4.981 2.726.84 1.682.83.829 2.987-7.168zm3.95-5.364L1.763 5.35l.83.83 1.681.84z",clipRule:"evenodd"})})}),vc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SendSolidIcon","aria-label":"send solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M2 7 0 5l12-5-5 12-2-2-.762-1.523L9.5 3.2 10 2l-1.195.5-5.283 5.26z"})})}),hc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SettingsSolidIcon","aria-label":"settings solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M6.997.082a1 1 0 0 1-1.994 0 6 6 0 0 0-2.482 1.03A1 1 0 0 1 1.11 2.52 6 6 0 0 0 .082 5.003a1 1 0 0 1 0 1.994 6 6 0 0 0 1.03 2.482 1 1 0 0 1 1.409 1.41 6 6 0 0 0 2.482 1.029 1 1 0 0 1 1.994 0 6 6 0 0 0 2.482-1.03 1 1 0 0 1 1.41-1.409 6 6 0 0 0 1.029-2.482 1 1 0 0 1 0-1.994 6 6 0 0 0-1.03-2.482A1 1 0 0 1 9.48 1.11 6 6 0 0 0 6.997.082M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4",clipRule:"evenodd"})})}),bc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ShareIcon","aria-label":"share",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M10 4a2 2 0 1 0-1.956-1.581L3.508 4.687a2 2 0 1 0 0 2.626l4.536 2.268a2 2 0 1 0 .448-.894L3.956 6.419a2 2 0 0 0 0-.838l4.536-2.268C8.858 3.734 9.398 4 10 4m1 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0M3 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m8-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0",clipRule:"evenodd"})})}),pc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ShareSolidIcon","aria-label":"share solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M12 2a2 2 0 0 1-3.508 1.313L3.956 5.581a2 2 0 0 1 0 .838l4.536 2.268a2 2 0 1 1-.448.894L3.508 7.313a2 2 0 1 1 0-2.626l4.536-2.268A2 2 0 1 1 12 2"})})}),fc=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"SignalIcon","aria-label":"signal",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M8.774 10.16A5 5 0 0 0 11 6a5 5 0 0 0-2.226-4.16l.555-.833A6 6 0 0 1 12 6a6 6 0 0 1-2.671 4.993zm-5.548 0A5 5 0 0 1 1 6c0-1.735.884-3.264 2.226-4.16l-.555-.833A6 6 0 0 0 0 6a6 6 0 0 0 2.671 4.993z"}),e.jsx("path",{d:"M3.781 9.329A4 4 0 0 1 2 6c0-1.388.707-2.611 1.781-3.329l.555.833A3 3 0 0 0 3 6c0 1.041.53 1.958 1.336 2.496zm4.438 0A4 4 0 0 0 10 6a4 4 0 0 0-1.781-3.329l-.555.833A3 3 0 0 1 9 6c0 1.041-.53 1.958-1.336 2.496zM7 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0"})]})}),gc=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"SignatureIcon","aria-label":"signature",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M2.5 11h-1v-1h1zm2 0h-1v-1h1zm2 0h-1v-1h1zm2 0h-1v-1h1zm2 0h-1v-1h1zM4.035 6.207l-1.06 1.06 1.06 1.06-.707.708-1.06-1.06-1.061 1.06L.5 8.328l1.06-1.06L.5 6.206l.707-.707 1.06 1.06L3.329 5.5z"}),e.jsx("path",{fillRule:"evenodd",d:"M7.86.878c.48-.142 1.019-.104 1.49.235.306.22.46.575.534.91.077.347.086.749.041 1.163a6 6 0 0 1-.95 2.61c-.435.651-1.168 1.194-1.88 1.61a.7.7 0 0 0 .187.166l.105.041c.256.075.578.001.946-.211.406-.235.734-.566.83-.69.095-.122.2-.324.289-.525a6 6 0 0 0 .127-.312l.007-.019v-.004l.965.175.007.001v.082a8 8 0 0 0 .045.894q.024.225.062.387.102-.094.2-.218a3 3 0 0 0 .247-.38l.002-.003.444.228.444.23v.002L12 7.253l-.005.01a2 2 0 0 1-.09.155 4 4 0 0 1-.248.365 2.6 2.6 0 0 1-.395.419c-.154.127-.36.258-.606.307a.7.7 0 0 1-.615-.18 1.1 1.1 0 0 1-.254-.393 2 2 0 0 1-.097-.328c-.214.21-.513.461-.857.66-.481.278-1.175.53-1.862.259l-.136-.061c-.243-.122-.456-.335-.636-.588a15 15 0 0 1-1.34.565l-.104.036-.028.01-.008.003h-.002l-.159-.474-.158-.473.001-.001.005-.001.022-.008.091-.032c.08-.03.197-.073.34-.13.238-.093.547-.224.886-.386a5.2 5.2 0 0 1-.27-1.139 5.5 5.5 0 0 1 1.193-4.141l.12-.14c.29-.316.662-.568 1.072-.69m.906 1.047c-.182-.131-.391-.158-.623-.09a1.4 1.4 0 0 0-.618.407l-.076.089a4.5 4.5 0 0 0-.982 3.396c.035.286.097.55.173.785.624-.37 1.192-.805 1.502-1.271a5 5 0 0 0 .79-2.162 2.7 2.7 0 0 0-.024-.84c-.05-.224-.121-.3-.142-.314",clipRule:"evenodd"})]})}),xc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SignpostIcon","aria-label":"signpost",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M5 0h1v1h4.067L12 3l-1.933 2H6v7H5V7H1.933L0 5l1.933-2H5zm1 4h3.666l.967-1-.967-1H6zM5 4H2.334l-.967 1 .967 1H5z",clipRule:"evenodd"})})}),mc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SignpostSolidIcon","aria-label":"signpost solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M5 0h1v1h4.067L12 3l-1.933 2H6v7H5V7H1.933L0 5l1.933-2H5z"})})}),Ic=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SlideIcon","aria-label":"slide",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M4 7a2 2 0 0 1 1.935 1.5H12v1H5.935a1.999 1.999 0 0 1-3.87 0H0v-1h2.065A2 2 0 0 1 4 7m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4-7a2 2 0 0 1 1.935 1.5H12v1H9.935a1.999 1.999 0 0 1-3.87 0H0v-1h6.065A2 2 0 0 1 8 1m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",clipRule:"evenodd"})})}),wc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SlideSolidIcon","aria-label":"slide solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M4 7a2 2 0 0 1 1.935 1.5H12v1H5.935a1.999 1.999 0 0 1-3.87 0H0v-1h2.065A2 2 0 0 1 4 7m4-6a2 2 0 0 1 1.935 1.5H12v1H9.935a1.999 1.999 0 0 1-3.87 0H0v-1h6.065A2 2 0 0 1 8 1"})})}),yc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SortIcon","aria-label":"sort",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M4.035 11H2.977V2.412L1.248 4.043.5 3.337 3.506.5 6.5 3.326l-.748.706-1.717-1.62zm3.93-10h1.058v8.588l1.729-1.631.748.706L8.494 11.5 5.5 8.674l.748-.706 1.717 1.62z"})})}),zc=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"SortAlphaAscendIcon","aria-label":"sort alpha ascend",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M3.753 5.018 3.264 3.63h-1.91l-.49 1.388H0L1.86 0h.909l1.856 5.018zm-.7-2.092-.476-1.367-.078-.25L2.31.69a7 7 0 0 1-.086.315l-.164.554-.478 1.367z",clipRule:"evenodd"}),e.jsx("path",{d:"M4.092 11.997H.5v-.564l2.543-3.736H.579V7h3.445v.56L1.48 11.3h2.611zM9 1v8.105l1.6-1.597.708.706-2.8 2.795L5.7 8.206l.708-.706L8 9.089V1z"})]})}),Sc=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"SortAlphaDescendIcon","aria-label":"sort alpha descend",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M9 1v8.105l1.6-1.597.708.706-2.8 2.795L5.7 8.206l.708-.706L8 9.089V1zM4.092 4.997H.5v-.564L3.043.697H.579V0h3.445v.56L1.48 4.3h2.611z"}),e.jsx("path",{fillRule:"evenodd",d:"m3.753 12-.489-1.373h-1.91L.864 12H0l1.86-5.003h.909L4.625 12zm-.7-2.077-.476-1.367-.078-.25-.188-.618a7 7 0 0 1-.086.314l-.164.554-.478 1.367z",clipRule:"evenodd"})]})}),jc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SortAscendIcon","aria-label":"sort ascend",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M8.008 2.904v8.105h1v-8.09L10.6 4.51l.708-.707L8.5 1 5.7 3.794l.708.707zM0 2.5h2v1H0zm0 3h4v1H0zm0 3h6v1H0z"})})}),Rc=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"SortableAlphaIcon","aria-label":"sortable alpha",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M3.753 5.018 3.264 3.63h-1.91l-.49 1.388H0L1.86 0h.909l1.856 5.018zm-.7-2.092-.476-1.367-.078-.25L2.31.69a7 7 0 0 1-.086.315l-.164.554-.478 1.367z",clipRule:"evenodd"}),e.jsx("path",{d:"M4.092 11.997H.5v-.564l2.543-3.736H.579V7h3.445v.56L1.48 11.3h2.611zM9 7v2.105l1.6-1.597.708.706-2.8 2.795L5.7 8.206l.708-.706L8 9.089V7zm0-1.991V2.904l1.6 1.597.708-.707L8.508 1 5.7 3.802l.708.707L8 2.919v2.09z"})]})}),Cc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SortableNumIcon","aria-label":"sortable num",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M3.22 4.997h-.807V1.781q0-.16.004-.322l.007-.314Q2.43.991 2.44.851q-.072.079-.178.171-.102.092-.219.191l-.574.458-.403-.509L2.55 0h.67zM4.4 9.064q.001.445-.064.872a3.2 3.2 0 0 1-.219.8 2.1 2.1 0 0 1-.427.66q-.27.283-.684.444-.413.16-.998.16-.147 0-.341-.017a2 2 0 0 1-.315-.04v-.67a2.2 2.2 0 0 0 .615.081q.633 0 .985-.236.355-.235.502-.649.15-.414.171-.94h-.041q-.1.165-.25.301-.15.133-.372.215a1.6 1.6 0 0 1-.54.079q-.43 0-.752-.181a1.25 1.25 0 0 1-.496-.527A1.86 1.86 0 0 1 1 8.58q0-.53.202-.913.201-.382.57-.588.37-.208.869-.208.376 0 .693.137.323.133.561.41.24.273.373.687.133.41.133.96m-1.75-1.53a.8.8 0 0 0-.618.255q-.24.254-.239.78 0 .427.205.676t.629.25q.294 0 .506-.12a.9.9 0 0 0 .331-.31.7.7 0 0 0 .12-.383q0-.203-.058-.404a1.2 1.2 0 0 0-.171-.369.9.9 0 0 0-.294-.27.8.8 0 0 0-.41-.106M9 7v2.105l1.6-1.597.708.706-2.8 2.795L5.7 8.206l.708-.706L8 9.089V7zm0-1.991V2.904L10.6 4.5l.708-.707L8.508 1 5.7 3.802l.708.707L8 2.919v2.09z"})})}),kc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SortDescendIcon","aria-label":"sort descend",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M9 9.105V1H8v8.089L6.408 7.5l-.708.706 2.808 2.803 2.8-2.795-.708-.706zM0 9.5h2v-1H0zm0-3h4v-1H0zm0-3h6v-1H0z"})})}),Hc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SortNumAscendIcon","aria-label":"sort num ascend",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M9 9.105V1H8v8.089L6.408 7.5l-.708.706 2.808 2.803 2.8-2.795-.708-.706zM3.22 4.997h-.807V1.781q0-.16.004-.322l.007-.314Q2.43.991 2.44.851q-.072.079-.178.171-.102.092-.219.191l-.574.458-.403-.509L2.55 0h.67zM4.4 9.064q.001.445-.064.872a3.2 3.2 0 0 1-.219.8 2.1 2.1 0 0 1-.427.66q-.27.283-.684.444-.413.16-.998.16-.147 0-.341-.017a2 2 0 0 1-.315-.04v-.67a2.2 2.2 0 0 0 .615.081q.633 0 .985-.236.355-.235.502-.649.15-.414.171-.94h-.041q-.1.165-.25.301-.15.133-.372.215a1.6 1.6 0 0 1-.54.079q-.43 0-.752-.181a1.25 1.25 0 0 1-.496-.527A1.86 1.86 0 0 1 1 8.58q0-.53.202-.913.201-.382.57-.588.37-.208.869-.208.376 0 .693.137.323.133.561.41.24.273.373.687.133.41.133.96m-1.75-1.53a.8.8 0 0 0-.618.255q-.24.254-.239.78 0 .427.205.676t.629.25q.294 0 .506-.12a.9.9 0 0 0 .331-.31.7.7 0 0 0 .12-.383q0-.203-.058-.404a1.2 1.2 0 0 0-.171-.369.9.9 0 0 0-.294-.27.8.8 0 0 0-.41-.106"})})}),Mc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SortNumDescendIcon","aria-label":"sort num descend",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M4.4 2.194q.001.445-.064.872a3.2 3.2 0 0 1-.219.8 2.1 2.1 0 0 1-.427.66q-.27.284-.684.444-.413.16-.998.16-.147 0-.341-.017a2 2 0 0 1-.315-.04v-.67a2.2 2.2 0 0 0 .615.081q.633 0 .985-.235.355-.237.502-.65.15-.414.171-.94h-.041q-.1.165-.25.301-.15.133-.372.215a1.6 1.6 0 0 1-.54.079q-.43 0-.752-.181a1.25 1.25 0 0 1-.496-.527A1.86 1.86 0 0 1 1 1.71q0-.53.202-.913.201-.382.57-.588Q2.142 0 2.641 0q.376 0 .693.137.323.133.561.41.24.273.373.687.133.41.133.96M2.65.664a.8.8 0 0 0-.618.255q-.24.253-.239.78 0 .427.205.676t.629.25q.294 0 .506-.12a.9.9 0 0 0 .331-.31.7.7 0 0 0 .12-.383q0-.203-.058-.404a1.2 1.2 0 0 0-.171-.369.9.9 0 0 0-.294-.27.8.8 0 0 0-.41-.106M9 9.105V1H8v8.089L6.408 7.5l-.708.706 2.808 2.803 2.8-2.795-.708-.706zm-5.78 2.892h-.807V8.781q0-.16.004-.322l.007-.314q.006-.154.017-.294-.072.079-.178.171-.102.092-.219.191l-.574.458-.403-.509L2.55 7h.67z"})})}),Bc=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"SparkleIcon","aria-label":"sparkle",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M8.818 1.818 9.5 0l.682 1.818L12 2.5l-1.818.682L9.5 5l-.682-1.818L7 2.5z"}),e.jsx("path",{fillRule:"evenodd",d:"M5.5 1 7 5l4 1.5L7 8l-1.5 4L4 8 0 6.5 4 5zm.723 4.777 1.929.723-1.929.723L5.5 9.152l-.723-1.929L2.848 6.5l1.929-.723.723-1.929z",clipRule:"evenodd"})]})}),Vc=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"SparkleRefreshIcon","aria-label":"sparkle refresh",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M4.707 10.831a5 5 0 1 1 5.625-7.33h-2.33v1h4v-4h-1v2.184A6 6 0 0 0 9.745 1.31a6 6 0 1 0 2.052 6.244l-.966-.26a5 5 0 0 1-6.124 3.536"}),e.jsx("path",{d:"m7.092 4.91 2.91 1.091-2.91 1.091-1.09 2.91-1.091-2.91L2 6.002l2.91-1.091L6 2zm-1.245.351-.16.426-.426.16-.412.154.412.155.426.16.16.425.154.41.315-.835L7.152 6l-.41-.153-.426-.16-.16-.426L6 4.85z"})]})}),Lc=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"SparkleRefreshSolidIcon","aria-label":"sparkle refresh solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M4.707 10.831a5 5 0 1 1 5.625-7.33h-2.33v1h4v-4h-1v2.184A6 6 0 0 0 9.745 1.31a6 6 0 1 0 2.052 6.244l-.966-.26a5 5 0 0 1-6.124 3.536"}),e.jsx("path",{d:"m4.91 4.866 1.091-2.91 1.091 2.91 2.91 1.09-2.91 1.091-1.09 2.91-1.091-2.91L2 5.957z"})]})}),Ac=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"SparkleSolidIcon","aria-label":"sparkle solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M8.818 1.818 9.5 0l.682 1.818L12 2.5l-1.818.682L9.5 5l-.682-1.818L7 2.5z"}),e.jsx("path",{d:"M5.5 1 4 5 0 6.5 4 8l1.5 4L7 8l4-1.5L7 5z"})]})}),Tc=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"SplitViewIcon","aria-label":"split view",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M4 7H2V6h2zm1-2H2V4h3zm0-2H2V2h3z"}),e.jsx("path",{fillRule:"evenodd",d:"M12 12H0V0h12zm-6-1V1H1v10z",clipRule:"evenodd"})]})}),qc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SquareRootIcon","aria-label":"square root",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M11 1v1H8.763l-4.76 9-3-5.676.885-.467L4.004 8.86 8.159 1z"})})}),Pc=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"StackoverflowIcon","aria-label":"stackoverflow",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M10.453 3.818 5.825 0l-.636.771L9.817 4.59zM1 11V7h1v3h8V7h1v4z"}),e.jsx("path",{d:"M3 8h6v1H3zm.17-2.5 5.91 1.036-.09.985-5.91-1.036zm6.43-.531L4.02 2.767l-.425.947 5.581 2.202z"})]})}),Nc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"StepSuccessIcon","aria-label":"step success",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12m3.75-7.984L4.952 9.332 2 6.582l1.027-1.098L4.875 7.2l3.772-4.208z",clipRule:"evenodd"})})}),Dc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"StethoscopeIcon","aria-label":"stethoscope",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M3.484.5h-1V1H1v3.5a3.5 3.5 0 0 0 3 3.465v1.05A2.99 2.99 0 0 0 7.004 12 2.983 2.983 0 0 0 10 9.016V7.415a1.5 1.5 0 1 0-1 0v1.6A1.983 1.983 0 0 1 7.004 11 1.99 1.99 0 0 1 5 9.016V7.965A3.5 3.5 0 0 0 8 4.5V1H6.5V.5h-1v2h1V2H7v2.5a2.5 2.5 0 0 1-5 0V2h.484v.5h1zm6.016 5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",clipRule:"evenodd"})})}),Fc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"StethoscopeSolidIcon","aria-label":"stethoscope solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M3.484.5h-1V1H1v3.5a3.5 3.5 0 0 0 3 3.465v1.05A2.99 2.99 0 0 0 7.004 12 2.983 2.983 0 0 0 10 9.016V7.415a1.5 1.5 0 1 0-1 0v1.6A1.983 1.983 0 0 1 7.004 11 1.99 1.99 0 0 1 5 9.016V7.965A3.5 3.5 0 0 0 8 4.5V1H6.5V.5h-1v2h1V2H7v2.5a2.5 2.5 0 0 1-5 0V2h.484v.5h1z",clipRule:"evenodd"})})}),Oc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"StopIcon","aria-label":"stop",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M11 1v10H1V1zm-9 9h8V2H2z"})})}),Wc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"StopSolidIcon","aria-label":"stop solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M1 1h10v10H1z"})})}),Ec=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"StorageIcon","aria-label":"storage",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M8 6H4v1h4z"}),e.jsx("path",{fillRule:"evenodd",d:"M0 1v3h1v8h10V4h1V1zm11 1H1v1h10zm-1 3H2v6h8z",clipRule:"evenodd"})]})}),Gc=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"StorageSolidIcon","aria-label":"storage solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M0 1v3h12V1z"}),e.jsx("path",{fillRule:"evenodd",d:"M11 5H1v7h10zM4 6h4v1H4z",clipRule:"evenodd"})]})}),$c=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"StorefrontIcon","aria-label":"storefront",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M.736 5.368q.083.027.173.05c.179.044.378.074.591.074C2.367 5.492 3 5 3 5s.617.492 1.5.492S6 5 6 5s.633.492 1.5.492S9 5 9 5s.648.492 1.5.492a2.4 2.4 0 0 0 .778-.13A2.8 2.8 0 0 0 12 5l-2-4H2L0 5s.285.222.736.368M9.382 2l1.243 2.486a1 1 0 0 1-.125.006 1.6 1.6 0 0 1-.653-.155A2 2 0 0 1 9.6 4.2l-.002-.002-.605-.46-.6.467-.04.027a1.7 1.7 0 0 1-.853.26 1.7 1.7 0 0 1-.893-.287l-.615-.478-.607.484-.037.025a2 2 0 0 1-.189.103 1.6 1.6 0 0 1-.659.153 1.6 1.6 0 0 1-.66-.153 1.6 1.6 0 0 1-.225-.128l-.607-.484-.614.478-.041.027a1.7 1.7 0 0 1-.853.26q-.063 0-.125-.006L2.618 2z",clipRule:"evenodd"}),e.jsx("path",{d:"M3 9V8h3v1z"}),e.jsx("path",{fillRule:"evenodd",d:"M11 11V6H1v5H0v1h12v-1zm-9 0h5V7H2zm6 0h2V7H8z",clipRule:"evenodd"})]})}),Uc=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"StorefrontSolidIcon","aria-label":"storefront solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M10 1H2L0 5c.418.314.937.5 1.5.5S2.582 5.314 3 5c.418.314.937.5 1.5.5S5.582 5.314 6 5c.418.314.937.5 1.5.5S8.582 5.314 9 5c.418.314.937.5 1.5.5s1.082-.186 1.5-.5zM3 8h3v1H3z"}),e.jsx("path",{fillRule:"evenodd",d:"M1 6v5H0v1h12v-1h-1V6zm6 1H2v3h5zm3 0H8v4h2z",clipRule:"evenodd"})]})}),_c=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"StringNumberIcon","aria-label":"string number",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M0 0h12v1H0zm11.713 5.301q.137-.249.137-.588 0-.554-.417-.881-.418-.332-1.186-.332a2.6 2.6 0 0 0-1.593.506l.386.557q.157-.102.332-.191.174-.09.379-.147.209-.059.461-.058.41 0 .62.18.208.179.208.5 0 .246-.12.43a.77.77 0 0 1-.38.29q-.262.104-.697.103H9.4v.646h.44q.456 0 .742.086.291.085.428.256.14.171.14.438 0 .413-.267.65-.266.232-.892.232a3.2 3.2 0 0 1-1.357-.328v.714q.311.143.657.208.348.066.755.065.677 0 1.107-.195a1.4 1.4 0 0 0 .64-.533A1.46 1.46 0 0 0 12 7.133q0-.495-.308-.796-.303-.3-.902-.376v-.024q.311-.068.547-.226.24-.16.376-.41M7.085 8.637H3.701v-.605L4.997 6.72q.376-.382.618-.66a2.3 2.3 0 0 0 .36-.53q.12-.249.119-.543 0-.363-.208-.547-.21-.188-.55-.188-.326 0-.602.13a2.8 2.8 0 0 0-.568.362l-.44-.53q.207-.177.444-.324a2.2 2.2 0 0 1 .533-.233q.294-.089.67-.089.475 0 .82.171a1.24 1.24 0 0 1 .718 1.17q0 .402-.16.744-.161.342-.459.677a13 13 0 0 1-.707.721l-.865.845v.037h2.365zm-4.932 0h-.806V5.421q0-.16.003-.321l.007-.315q.006-.153.017-.294-.072.08-.178.171l-.218.192-.575.458L0 4.802 1.483 3.64h.67zM12 11H0v1h12z"})})}),Kc=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"StringTextIcon","aria-label":"string text",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M0 0h12v1H0zm0 11h12v1H0z"}),e.jsx("path",{fillRule:"evenodd",d:"M2.834 4.78q-.366-.317-1.084-.317a2.9 2.9 0 0 0-1.367.331l.26.568q.252-.12.52-.202a1.9 1.9 0 0 1 .55-.082q.33 0 .512.168.185.167.185.56v.198l-.657.024q-.88.031-1.319.325Q0 6.647 0 7.231q0 .393.154.65.153.255.42.383.267.123.605.123.321 0 .544-.069.225-.064.396-.198t.332-.338h.027l.154.536h.57V5.772q0-.674-.369-.991m-.917 1.747.49-.017v.328q0 .462-.278.701a1.02 1.02 0 0 1-.69.236.7.7 0 0 1-.441-.127q-.167-.13-.167-.41a.6.6 0 0 1 .242-.506q.243-.184.844-.205M5.238 3v1.282a7 7 0 0 1-.014.437 10 10 0 0 1-.02.332h.034q.154-.246.427-.414.277-.17.708-.17.673 0 1.083.495.41.492.41 1.46 0 .642-.188 1.08a1.46 1.46 0 0 1-.53.663 1.4 1.4 0 0 1-.796.222q-.431 0-.697-.158a1.4 1.4 0 0 1-.414-.372h-.058l-.147.461h-.601V3zm.923 2.12q-.343 0-.544.136a.77.77 0 0 0-.287.41q-.09.27-.092.687v.072q0 .632.198.967.201.335.731.335a.73.73 0 0 0 .646-.338q.226-.342.226-.978 0-.642-.226-.967-.222-.325-.652-.325",clipRule:"evenodd"}),e.jsx("path",{d:"M9.915 8.178q.393.21.93.209.358 0 .605-.062.246-.058.461-.181v-.697q-.218.12-.465.195-.246.075-.557.075a.93.93 0 0 1-.53-.144.9.9 0 0 1-.324-.43 2 2 0 0 1-.11-.705q0-.43.106-.72a.9.9 0 0 1 .328-.438 1 1 0 0 1 .554-.147q.202 0 .42.058.22.059.428.143L12 4.692a2.2 2.2 0 0 0-.468-.16 2.5 2.5 0 0 0-.612-.07q-.533 0-.947.21a1.48 1.48 0 0 0-.642.645q-.233.438-.233 1.128 0 .663.212 1.094.212.43.605.64"})]})}),Qc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SuccessIcon","aria-label":"success",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"m3.871 8.033 6.187-6.187 1.06 1.06-7.247 7.248-2.99-2.99 1.06-1.061z",clipRule:"evenodd"})})}),Xc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SuccessSmallIcon","aria-label":"success small",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"m3.879 8.121 5.656-5.656.707.707L3.88 9.535 1.757 7.414l.707-.707z",clipRule:"evenodd"})})}),Jc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SuccessSmallSolidIcon","aria-label":"success small solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M12 0H0v12h12zM9.535 2.465 3.88 8.12 2.465 6.707l-.707.707 2.12 2.121 6.365-6.363z",clipRule:"evenodd"})})}),Zc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SuccessSolidIcon","aria-label":"success solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M12 0H0v12h12zM9.858 1.846 3.672 8.033l-1.93-1.93-1.06 1.06 2.99 2.991 7.247-7.247z",clipRule:"evenodd"})})}),Yc=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SuccessTickIcon","aria-label":"success tick",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"m3.871 8.033 6.187-6.187 1.061 1.06-7.248 7.248-2.99-2.99 1.06-1.061z",clipRule:"evenodd"})})}),e2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SumIcon","aria-label":"sum",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M8 6 6 3h3v1.625h3V0H0l4.125 6L0 12h12V7.5H9V9H6zm2 2.5V10H4.131l2.667-4-2.667-4H10v1.625h1V1H1.901l3.438 5L1.9 11H11V8.5z",clipRule:"evenodd"})})}),t2=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"SummarizeIcon","aria-label":"summarize",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M2 7.5a.5.5 0 0 0 .5.5h6.793L7.646 6.354l.708-.708 2.828 2.829-2.828 2.829-.708-.707L9.242 9H2.5A1.5 1.5 0 0 1 1 7.5V1h1z"}),e.jsx("path",{d:"M7 7H3V6h4zm2-2H3V4h6zm0-2H3V2h6z"})]})}),a2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SumSolidIcon","aria-label":"sum solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"m6 9 2-3-2-3h3v1.625h3V0H0l4.125 6L0 12h12V7.5H9V9z"})})}),o2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SwapIcon","aria-label":"swap",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M1 4.035V2.977h8.588L7.957 1.248 8.663.5 11.5 3.506 8.674 6.5l-.706-.748 1.62-1.717zm10 3.93v1.058H2.412l1.631 1.729-.706.748L.5 8.494 3.326 5.5l.706.748-1.62 1.717z"})})}),n2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SymphonyIcon","aria-label":"symphony",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M9.625 4.383V2.624c0-.36-.2-.699-.522-.883C8.62 1.464 7.576 1 6 1s-2.621.464-3.103.74c-.158.091-.29.22-.38.375a1 1 0 0 0-.142.509v2.64l5.74 1.618V8.06c0 .159-.103.27-.278.354L6 9.309l-1.847-.901c-.165-.078-.268-.19-.268-.35v-.882l-1.51-.441v1.324c0 .726.428 1.345 1.108 1.667L6 11l2.508-1.27c.689-.326 1.117-.945 1.117-1.67V5.852l-5.74-1.618V2.892C4.295 2.7 4.995 2.47 6 2.47s1.704.23 2.114.422v1.05z"})})}),l2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"SyncIcon","aria-label":"sync",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M7.296 1.172A5 5 0 0 0 1 6.002H0a6 6 0 0 1 11.002-3.317V.502h1v4h-4v-1h2.33a5 5 0 0 0-1.211-1.41 5 5 0 0 0-1.825-.92m-2.59 9.659A5 5 0 0 0 11 6.001h1A6 6 0 0 1 1 9.319v2.183H0v-4h4v1H1.67a5 5 0 0 0 1.21 1.41 5 5 0 0 0 1.826.92"})})}),r2=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"TagIcon","aria-label":"tag",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"m7.414 1-6 6L5 10.586l6-6V1zM12 5l-7 7-5-5 7-7h5z",clipRule:"evenodd"}),e.jsx("path",{fillRule:"evenodd",d:"M8 3.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M8.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3",clipRule:"evenodd"})]})}),s2=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"TagClearIcon","aria-label":"tag clear",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"m1.414 7 6-6H11v3.586l-.357.357.707.707L12 5V0H7L0 7l5 5 .685-.685z"}),e.jsx("path",{fillRule:"evenodd",d:"M8 3.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M8.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3",clipRule:"evenodd"}),e.jsx("path",{d:"M10.286 11 8.5 9.214 6.714 11 6 10.286 7.786 8.5 6 6.714 6.714 6 8.5 7.786 10.286 6l.714.714L9.214 8.5 11 10.286z"})]})}),i2=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"TagClearSolidIcon","aria-label":"tag clear solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M8 3.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0"}),e.jsx("path",{fillRule:"evenodd",d:"M12 0H7L0 7l5 5 .65-.65-1.064-1.064L6.372 8.5 4.586 6.714l2.128-2.128L8.5 6.372l1.786-1.786L11.35 5.65 12 5zM8.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3",clipRule:"evenodd"}),e.jsx("path",{d:"M10.286 11 8.5 9.214 6.714 11 6 10.286 7.786 8.5 6 6.714 6.714 6 8.5 7.786 10.286 6l.714.714L9.214 8.5 11 10.286z"})]})}),d2=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"TagSolidIcon","aria-label":"tag solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M8.5 4a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"}),e.jsx("path",{fillRule:"evenodd",d:"M7 0h5v5l-7 7-5-5zm0 3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0",clipRule:"evenodd"})]})}),c2=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"TailsIcon","aria-label":"tails",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M4 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0",clipRule:"evenodd"}),e.jsx("path",{fillRule:"evenodd",d:"M5.5 2S4.316.422 1.248.07A11 11 0 0 0 0 0l2 3-2 5 6 4 6-4-2-5 2-3q-.67.001-1.248.07C7.684.421 6.5 2 6.5 2zm4.492-.79-.008.001-.031.057zm-1.746.658c.41-.234.974-.481 1.717-.652L8 3h.923l1.135 2.837c-.777.345-1.695.856-2.5 1.513-.577.472-1.122 1.041-1.506 1.7-.347-.677-.86-1.261-1.41-1.744a10.2 10.2 0 0 0-2.631-1.64L3.077 3H4L2.037 1.216c.743.17 1.307.418 1.717.652.366.21.618.413.77.554a2 2 0 0 1 .183.187L5 3h2l.293-.391.025-.029q.042-.05.157-.158a4.3 4.3 0 0 1 .771-.554m-6.23-.657-.008-.001.039.058zm8.414 5.555c-.7.314-1.524.775-2.239 1.359-.816.666-1.429 1.442-1.625 2.296l4.204-2.803zm-9.2.852.41-1.023a9.2 9.2 0 0 1 2.342 1.462c.777.683 1.355 1.49 1.489 2.388z",clipRule:"evenodd"})]})}),u2=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"TailsSolidIcon","aria-label":"tails solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M4 5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8.5 5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"}),e.jsx("path",{fillRule:"evenodd",d:"M1.248.07C4.316.421 5.5 2 5.5 2h1S7.684.422 10.752.07Q11.33 0 12 0l-2 3 2 5-6 4-6-4 1.838-4.594.144-.433L0 0q.67.001 1.248.07M1.23 7.617l.41-1.023a9.2 9.2 0 0 1 2.342 1.462c.777.683 1.355 1.49 1.489 2.388zm5.336 2.803 4.204-2.803-.34-.852c-.7.314-1.524.775-2.239 1.359-.816.666-1.429 1.442-1.625 2.296m3.426-9.21-.039.058.031-.057zM8.55 2.5l1.413-1.284a6.3 6.3 0 0 0-1.717.652 4.2 4.2 0 0 0-.852.632zm-4.025-.078.08.078H3.45L2.037 1.216c.743.17 1.307.418 1.717.652.366.21.618.413.77.554m-2.509-1.21.031.056-.039-.058zM4 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0",clipRule:"evenodd"})]})}),v2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"TargetIcon","aria-label":"target",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M5.5 0h1v1.025A5 5 0 0 1 10.975 5.5H12v1h-1.025A5 5 0 0 1 6.5 10.975V12h-1v-1.025A5 5 0 0 1 1.025 6.5H0v-1h1.025A5 5 0 0 1 5.5 1.025zM2.031 6.5H3v-1h-.97A4 4 0 0 1 5.5 2.031V3h1v-.97A4 4 0 0 1 9.969 5.5H9v1h.969A4 4 0 0 1 6.5 9.969V9h-1v.969A4 4 0 0 1 2.031 6.5",clipRule:"evenodd"})})}),h2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"TextAlignCenterIcon","aria-label":"text align center",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M9 9.563H3v-1h6zM11 6.5H1v-1h10zM9 3.437H3v-1h6z"})})}),b2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"TextAlignJustifyIcon","aria-label":"text align justify",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M11 9.563H1v-1h10zM11 6.5H1v-1h10zm0-3.063H1v-1h10z"})})}),p2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"TextAlignLeftIcon","aria-label":"text align left",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M7 9.563H1v-1h6zM11 6.5H1v-1h10zM9 3.437H1v-1h8z"})})}),f2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"TextAlignRightIcon","aria-label":"text align right",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M11 9.563H5v-1h6zM11 6.5H1v-1h10zm0-3.063H3v-1h8z"})})}),g2=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"TextColorIcon","aria-label":"text color",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M12 12H0v-2h12z"}),e.jsx("path",{fillRule:"evenodd",d:"M9.964 9h-1.08L7.782 6.155H4.188L3.091 9H2.037l3.506-9h.938zM5.856 1.588q-.068.245-.134.46-.068.208-.118.355L4.538 5.23h2.93L6.42 2.403l-.122-.361-.166-.521-.14-.436q-.063.252-.136.503",clipRule:"evenodd"})]})}),x2=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"TextHighlightIcon","aria-label":"text highlight",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M12 12H0v-2h12z"}),e.jsx("path",{fillRule:"evenodd",d:"M8.472 1.028a1 1 0 0 1 1.414 0L11.3 2.442a1 1 0 0 1 0 1.414L5.657 9.499l.006.006L0 9.5zm-4.936 6.35L4.95 8.791l5.643-5.643-1.414-1.414z",clipRule:"evenodd"})]})}),m2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"TextOrderedListIcon","aria-label":"text ordered list",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M1.951 7.982q.387 0 .612.156.225.155.226.44a.6.6 0 0 1-.072.298.6.6 0 0 1-.195.207.9.9 0 0 1-.273.118v.01q.3.038.456.185.157.146.157.393a.7.7 0 0 1-.107.39.7.7 0 0 1-.328.273 1.4 1.4 0 0 1-.573.099q-.207 0-.386-.034a1.5 1.5 0 0 1-.335-.101v-.45a1.5 1.5 0 0 0 .665.166q.284 0 .396-.097a.35.35 0 0 0 .115-.277.3.3 0 0 0-.053-.176.34.34 0 0 0-.185-.11 1.4 1.4 0 0 0-.364-.037h-.19V9.03h.194q.23 0 .35-.043.12-.045.164-.12a.34.34 0 0 0 .045-.174.27.27 0 0 0-.083-.209q-.081-.075-.273-.075-.12 0-.219.031a1 1 0 0 0-.175.072 2 2 0 0 0-.14.08l-.243-.363q.147-.107.342-.176.2-.07.472-.07M11 9.562H4v-1h7zM2.025 4.699q.246 0 .422.09.178.088.274.241a.64.64 0 0 1 .095.346.9.9 0 0 1-.082.377 1.4 1.4 0 0 1-.239.339 7 7 0 0 1-.376.37l-.321.303v.024h1.089v.444H1.14v-.367l.627-.635q.19-.194.304-.324.116-.13.167-.239a.5.5 0 0 0 .054-.23q0-.15-.084-.223a.3.3 0 0 0-.22-.075.64.64 0 0 0-.283.066 1.5 1.5 0 0 0-.285.19l-.287-.34q.108-.093.227-.174.122-.082.28-.132.162-.05.385-.05M11 6.5H4v-1h7zM2.372 3.948h-.528V2.502a8 8 0 0 1 .007-.328l.006-.17q-.018.024-.077.078l-.105.096-.287.23-.255-.318.805-.64h.434zM11 3.437H4v-1h7z"})})}),I2=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"TextStrikethroughIcon","aria-label":"text strikethrough",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M2 5.5h8v1H2z"}),e.jsx("path",{d:"M10 6.5H2v-1h8zM8.821 7q.24.465.24 1.14 0 .866-.433 1.478-.426.606-1.197.925t-1.817.32a10 10 0 0 1-1.045-.054 7 7 0 0 1-.904-.153 4 4 0 0 1-.726-.246V9.325q.5.207 1.218.386.719.173 1.504.173.732 0 1.237-.193.505-.2.765-.565.266-.372.267-.892 0-.498-.22-.832A1.6 1.6 0 0 0 7.31 7zM6.173.862q.778 0 1.437.147.666.146 1.218.392l-.353.972a8 8 0 0 0-1.118-.366 5 5 0 0 0-1.21-.147q-.626 0-1.058.187a1.44 1.44 0 0 0-.652.512q-.227.332-.227.792 0 .512.213.851.22.339.692.606.175.094.393.192h-1.9a2.3 2.3 0 0 1-.382-.651 2.9 2.9 0 0 1-.16-1.005q0-.778.392-1.33a2.5 2.5 0 0 1 1.099-.852q.704-.3 1.616-.3"})]})}),w2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"TextUnderlineIcon","aria-label":"text underline",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M10 12H2v-1h8zM3.634 6.751q0 1.13.595 1.743.601.613 1.792.613.813 0 1.33-.292.522-.297.771-.825.255-.535.255-1.233V1h1.026v5.745q0 .941-.382 1.676-.378.735-1.142 1.16-.765.42-1.919.419-1.646 0-2.508-.893-.855-.892-.856-2.386V1h1.038z"})})}),y2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"TextUnorderedListIcon","aria-label":"text unordered list",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M4 2.5h7v1H4zm0 3h7v1H4zm0 3h7v1H4zM3 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0"})})}),z2=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ThumbsDownIcon","aria-label":"thumbs down",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M10 0v7h2V0z"}),e.jsx("path",{fillRule:"evenodd",d:"m7 8.764 1-2V1H2.618L1 4.236V6.5a.5.5 0 0 0 .5.5H6v3.5a.5.5 0 0 0 .5.5H7zM8 12H6.5A1.5 1.5 0 0 1 5 10.5V8H1.5A1.5 1.5 0 0 1 0 6.5V4l2-4h7v7L8 9z",clipRule:"evenodd"})]})}),S2=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ThumbsDownSolidIcon","aria-label":"thumbs down solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M10 0v7h2V0z"}),e.jsx("path",{fillRule:"evenodd",d:"M8 12H6.5A1.5 1.5 0 0 1 5 10.5V8H1.5A1.5 1.5 0 0 1 0 6.5V4l2-4h7v7L8 9z",clipRule:"evenodd"})]})}),j2=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ThumbsUpIcon","aria-label":"thumbs up",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M2 12V5H0v7z"}),e.jsx("path",{fillRule:"evenodd",d:"m5 3.236-1 2V11h5.382L11 7.764V5.5a.5.5 0 0 0-.5-.5H6V1.5a.5.5 0 0 0-.5-.5H5zM4 0h1.5A1.5 1.5 0 0 1 7 1.5V4h3.5A1.5 1.5 0 0 1 12 5.5V8l-2 4H3V5l1-2z",clipRule:"evenodd"})]})}),R2=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ThumbsUpSolidIcon","aria-label":"thumbs up solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M2 12V5H0v7z"}),e.jsx("path",{fillRule:"evenodd",d:"M4 0h1.5A1.5 1.5 0 0 1 7 1.5V4h3.5A1.5 1.5 0 0 1 12 5.5V8l-2 4H3V5l1-2z",clipRule:"evenodd"})]})}),C2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ToteIcon","aria-label":"tote",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M4 4V3a2 2 0 1 1 4 0v1h4v8H0V4zm3-1v1H5V3a1 1 0 0 1 2 0m1 4V5h3v6H1V5h3v2h1V5h2v2z",clipRule:"evenodd"})})}),k2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"ToteSolidIcon","aria-label":"tote solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M4 4V3a2 2 0 1 1 4 0v1h4v8H0V4zm3-1v1H5V3a1 1 0 0 1 2 0m1 3H7v1h1zM4 6h1v1H4z",clipRule:"evenodd"})})}),H2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"TravelIcon","aria-label":"travel",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M4.75 1.999H6v3h.505V3h3.5v1.999h1.994v6H11l-.01.1a.5.5 0 0 1-.49.4H10a.5.5 0 0 1-.49-.4L9.5 11H7l-.01.1a.5.5 0 0 1-.49.4H6a.5.5 0 0 1-.49-.4L5.5 11h-.988v-1H2v.666c0 .184-.224.334-.5.334s-.5-.15-.5-.334V10H0V2h1.25V.001h3.5zm.762 8h5.487v-4H5.512zM1 8.999h3.512v-4H5v-2H1zm6.505-4h1.5V4h-1.5zm-5.255-3h1.5v-.997h-1.5z",clipRule:"evenodd"})})}),M2=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"TravelSolidIcon","aria-label":"travel solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M10.005 4.999h1.994v6H11l-.01.1a.5.5 0 0 1-.49.4H10a.5.5 0 0 1-.49-.4L9.5 11H7l-.01.1a.5.5 0 0 1-.49.4H6a.5.5 0 0 1-.49-.4L5.5 11h-.988V5h1.993V3h3.5zm-2.5 0h1.5V4h-1.5z",clipRule:"evenodd"}),e.jsx("path",{fillRule:"evenodd",d:"M4.75 1.999H6v2H3.519v6H2v.666c0 .184-.224.334-.5.334s-.5-.15-.5-.334v-.666H0v-8h1.25V.001h3.5zm-2.5 0h1.5v-.997h-1.5z",clipRule:"evenodd"})]})}),B2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"TreeIcon","aria-label":"tree",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M4 5h1.5v1H1v2H0v4h4V8H2V7h8v1H8v4h4V8h-1V6H6.5V5H8V1H4zm3-3H5v2h2zm2 7v2h2V9zM1 9v2h2V9z",clipRule:"evenodd"})})}),V2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"TreeSolidIcon","aria-label":"tree solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M4 1v4h1.5v1H1v2H0v4h4V8H2V7h8v1H8v4h4V8h-1V6H6.5V5H8V1z"})})}),L2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"TriangleLeftIcon","aria-label":"triangle left",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"m3.5 6 5 5V1z"})})}),A2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"TriangleRightIcon","aria-label":"triangle right",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"m8.5 6-5-5v10z"})})}),T2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"TriangleRightDownIcon","aria-label":"triangle right down",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M9.5 9.5v-7l-7 7z"})})}),q2=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"TypeIcon","aria-label":"type",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M3 3v2h2v4h2V5h2V3z"}),e.jsx("path",{fillRule:"evenodd",d:"M0 0h3v1h6V0h3v3h-1v6h1v3H9v-1H3v1H0V9h1V3H0zm3 10h6V9h1V3H9V2H3v1H2v6h1zM1 1h1v1H1zm0 9h1v1H1zm10-9h-1v1h1zm-1 9h1v1h-1z",clipRule:"evenodd"})]})}),P2=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"TypeSolidIcon","aria-label":"type solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M3 3v2h2v4h2V5h2V3z"}),e.jsx("path",{fillRule:"evenodd",d:"M0 0h3v1h6V0h3v3h-1v6h1v3H9v-1H3v1H0V9h1V3H0zm3 10h6V9h1V3H9V2H3v1H2v6h1z",clipRule:"evenodd"})]})}),N2=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"UngroupIcon","aria-label":"ungroup",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M0 6V0h6v6zm1-5h4v4H1zm5 5h6v6H6zm1 1h4v4H7z",clipRule:"evenodd"}),e.jsx("path",{d:"M1 7h1v3h3v1H1zm9-2h1V1H7v1h3z"})]})}),D2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"UngroupSolidIcon","aria-label":"ungroup solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M0 0h6v6H0zm6 6h6v6H6zM1 7h1v3h3v1H1zm9-2h1V1H7v1h3z"})})}),F2=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"UniversalAccessIcon","aria-label":"universal access",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M6 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-.764 5.927c.17-.43.415-1.152.577-1.943l.373-.008c.162.794.407 1.52.578 1.951a4 4 0 0 0 .952-.313c-.21-.515-.586-1.64-.677-2.688-.046-.516-.044-.775-.041-1.327v-.161a12 12 0 0 0 2.16-.464l-.316-.948C8.372 4.182 7.128 4.5 6 4.5s-2.371-.318-2.842-.474l-.316.948c.391.13 1.233.355 2.16.464v.176c.004.537.005.788-.04 1.313-.092 1.047-.468 2.171-.678 2.687.299.142.618.249.952.313"}),e.jsx("path",{fillRule:"evenodd",d:"M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0m-1 0A5 5 0 1 1 1 6a5 5 0 0 1 10 0",clipRule:"evenodd"})]})}),O2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"UniversalAccessSolidIcon","aria-label":"universal access solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12m0-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-.764 5.927c.17-.43.415-1.152.577-1.943l.373-.008c.162.794.407 1.52.578 1.951a4 4 0 0 0 .952-.313c-.21-.515-.586-1.64-.677-2.688-.046-.516-.044-.775-.041-1.327v-.161a12 12 0 0 0 2.16-.464l-.316-.948C8.372 4.182 7.128 4.5 6 4.5s-2.371-.318-2.842-.474l-.316.948c.391.13 1.233.355 2.16.464v.176c.004.537.005.788-.04 1.313-.092 1.047-.468 2.171-.678 2.687.299.142.618.249.952.313",clipRule:"evenodd"})})}),W2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"UnlinkedIcon","aria-label":"unlinked",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M4 0v2.5H3V0zm4.443 1.371a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1 0 1.415L7.028 7.028l.707.707L11.271 4.2a2 2 0 0 0 0-2.829l-.707-.707a2 2 0 0 0-2.828 0L5.968 2.432l.707.707zm-4.951 9.193a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 0 1 0-1.415l3.536-3.535L4.2 4.2.664 7.735a2 2 0 0 0 0 2.829l.707.707a2 2 0 0 0 2.828 0l1.769-1.768-.708-.707zM9.5 8H12v1H9.5zm-7-5H0v1h2.5zM9 12V9.5H8V12z"})})}),E2=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"UnlockedIcon","aria-label":"unlocked",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M7.5 7.5a1.5 1.5 0 0 1-1 1.415V10h-1V8.915a1.5 1.5 0 1 1 2-1.415"}),e.jsx("path",{fillRule:"evenodd",d:"M3 2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2H0v8h12V4H3zm-2 9V5h10v6z",clipRule:"evenodd"})]})}),G2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"UnlockedSolidIcon","aria-label":"unlocked solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M4 1a1 1 0 0 0-1 1v2h9v8H0V4h2V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2H9a1 1 0 0 0-1-1zm2.5 7.915a1.5 1.5 0 1 0-1 0V10h1z",clipRule:"evenodd"})})}),$2=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"UrgencyCriticalIcon","aria-label":"urgency critical",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"m6 1 5.3 3.684v3.729L6 4.715.7 8.404v-3.72z"}),e.jsx("path",{d:"M11.3 9.684 6 6 .7 9.684l.575.816L6 7.215l4.725 3.285z"})]})}),U2=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"UrgencyHighIcon","aria-label":"urgency high",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"m6 1 5.3 3.684-.575.816L6 2.215 1.275 5.5.7 4.684z"}),e.jsx("path",{d:"m6 3.5 5.3 3.684-.575.816L6 4.715 1.275 8 .7 7.184z"}),e.jsx("path",{d:"m6 6 5.3 3.684-.575.816L6 7.215 1.275 10.5.7 9.684z"})]})}),_2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"UrgencyLowIcon","aria-label":"urgency low",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"m6 3.5 5.3 3.684-.575.816L6 4.715 1.275 8 .7 7.184z",clipRule:"evenodd"})})}),K2=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"UrgencyMediumIcon","aria-label":"urgency medium",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M11.3 6.184 6 2.5.7 6.184 1.275 7 6 3.715 10.725 7z"}),e.jsx("path",{d:"M11.3 8.684 6 5 .7 8.684l.575.816L6 6.215 10.725 9.5z"})]})}),Q2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"UrgencyNoneIcon","aria-label":"urgency none",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M11 4H1v1h10zm0 3H1v1h10z"})})}),X2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"UrgencyOntimeIcon","aria-label":"urgency ontime",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M11.5 6 6 10 .5 6 6 2zM2.2 6 6 8.764 9.8 6 6 3.235z"})})}),J2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"UserAdminIcon","aria-label":"user admin",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M6 12C1.188 9.818.5 4.636.5 1.91l.418-.068C2.413 1.603 3.861 1.372 6 0c2.139 1.373 3.587 1.603 5.082 1.842l.418.067C11.5 4.636 10.813 9.82 6 12m1.977-2.603A7.5 7.5 0 0 1 6 10.887a7.5 7.5 0 0 1-1.977-1.49c.381-.123.728-.278 1-.487.34-.26.567-.616.65-1.04l.075-.385-.273-.281a2.6 2.6 0 0 1-.373-.506 4 4 0 0 1-.31-.677l-.002-.007-.002-.006a5 5 0 0 1-.214-.763A4 4 0 0 1 4.5 4.5c0-.343.05-.59.12-.762.079-.194.175-.321.277-.409l.005-.004.004-.004c.12-.105.256-.18.42-.226l.004-.002.005-.001Q5.635 3 6 3q.365.001.665.092l.005.001.005.002c.163.046.3.121.419.226l.004.004.005.004c.102.088.198.215.277.409.07.173.12.42.12.762q0 .354-.074.745-.076.389-.214.763l-.002.006-.003.007a4 4 0 0 1-.308.677q-.182.31-.374.506l-.273.281.075.384c.083.425.31.78.65 1.041.272.209.619.364 1 .487m.527-.62-.06-.014a1 1 0 0 0-.124-.044q-.588-.175-.887-.405a.95.95 0 0 1-.37-.588q.264-.273.484-.65.22-.379.369-.81.158-.43.246-.878.088-.457.088-.888 0-.615-.176-1.046A1.8 1.8 0 0 0 6.88 2.373 3 3 0 0 0 6 2.25q-.466 0-.879.123a1.8 1.8 0 0 0-1.195 1.081q-.176.43-.176 1.046 0 .43.088.888.087.448.246.879.15.43.37.808.219.378.483.65a.95.95 0 0 1-.37.59q-.299.228-.887.404a1 1 0 0 0-.123.044l-.06.014C2.072 6.91 1.621 4.568 1.522 2.757 2.8 2.545 4.18 2.244 6 1.174c1.82 1.07 3.201 1.371 4.477 1.583-.1 1.811-.55 4.152-1.973 6.02",clipRule:"evenodd"})})}),Z2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"UserAdminSolidIcon","aria-label":"user admin solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M6 12C1.188 9.818.5 4.636.5 1.91l.418-.068C2.413 1.603 3.861 1.372 6 0c2.139 1.373 3.587 1.603 5.082 1.842l.418.067C11.5 4.636 10.813 9.82 6 12m2.504-3.223A7.5 7.5 0 0 1 6 10.887a7.5 7.5 0 0 1-2.504-2.11l.06-.014q.063-.027.124-.044.588-.175.887-.405a.95.95 0 0 0 .37-.588 3.4 3.4 0 0 1-.484-.65 4.6 4.6 0 0 1-.369-.81 6 6 0 0 1-.246-.878A4.7 4.7 0 0 1 3.75 4.5q0-.615.176-1.046A1.8 1.8 0 0 1 5.12 2.373q.413-.123.88-.123.466 0 .879.123a1.8 1.8 0 0 1 1.195 1.081q.176.43.176 1.046 0 .43-.088.888-.087.448-.246.879-.15.43-.37.808a3.4 3.4 0 0 1-.483.65q.07.36.37.59.299.228.887.404.062.017.123.044z",clipRule:"evenodd"})})}),Y2=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"UserBadgeIcon","aria-label":"user badge",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0M9.45 9.44A4.86 4.86 0 0 1 5.874 11 4.86 4.86 0 0 1 2.34 9.483q.168-.059.396-.122l.272-.077.028-.008.3-.088c.916-.282 1.342-.597 1.408-1.185C4 7.179 3.5 5.731 3.5 4.5 3.5 2.66 4.62 2 6 2s2.5.66 2.5 2.5c0 1.269-.532 2.768-1.315 3.577.093.54.52.841 1.397 1.111.088.028.18.054.3.088l.028.008.272.077q.147.04.266.08",clipRule:"evenodd"})})}),e5=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"UserGroupIcon","aria-label":"user group",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M0 12h12V9.666l-.135-.039a1 1 0 0 1-.105-.026l-.167-.053-.15-.035a1 1 0 0 0-.123-.044q-.588-.175-.887-.405a.95.95 0 0 1-.37-.588q.264-.273.484-.65a4.6 4.6 0 0 0 .369-.81q.158-.43.246-.878.088-.457.088-.888 0-.615-.176-1.046A1.8 1.8 0 0 0 9.88 3.123 3 3 0 0 0 9 3q-.466 0-.879.123a1.8 1.8 0 0 0-1.195 1.081q-.176.43-.176 1.046 0 .43.088.888.087.448.246.879.15.43.37.808.219.378.483.65a1 1 0 0 1-.144.353l.065.026q.336.105.617.298.14-.243.198-.533l.075-.384-.273-.281a2.6 2.6 0 0 1-.373-.506 4 4 0 0 1-.31-.677l-.002-.007-.002-.006a5 5 0 0 1-.214-.763A4 4 0 0 1 7.5 5.25c0-.343.05-.59.12-.762.079-.194.175-.321.277-.409l.005-.004.004-.004c.12-.105.256-.18.42-.226l.004-.002.005-.001q.3-.091.665-.092.365.001.665.092l.005.001.005.002q.243.069.418.226l.005.004.005.004c.102.088.198.215.277.409.07.173.12.42.12.762q0 .354-.074.745-.076.389-.214.763l-.002.006-.003.007a4 4 0 0 1-.309.677q-.181.31-.373.506l-.273.281.075.384c.083.425.31.78.65 1.041.303.232.697.399 1.129.527l.004.002h.004l.034.013.055.024.047.011v1.013H9v-.163q0-.044-.002-.087a1.74 1.74 0 0 0-.374-1.02 1.8 1.8 0 0 0-.935-.655 4 4 0 0 0-.3-.107 10 10 0 0 0-.387-.118 2 2 0 0 1-.129-.033 5 5 0 0 1-.204-.064l-.183-.043q-.075-.033-.15-.054-.72-.215-1.085-.494a1.16 1.16 0 0 1-.451-.72q.323-.333.59-.795.27-.461.452-.988.194-.526.3-1.074.108-.558.108-1.085 0-.751-.215-1.278a2.2 2.2 0 0 0-1.46-1.321Q4.07 1 3.5 1t-1.074.15A2.2 2.2 0 0 0 .965 2.472Q.75 2.998.75 3.75q0 .526.107 1.085.108.547.301 1.074.183.526.451.988.27.462.591.795a1.16 1.16 0 0 1-.451.72q-.365.28-1.085.494-.075.022-.15.054l-.183.043q-.129.043-.204.064T0 9.1zm6.244-2.07.157.038q.11.035.197.06.078.024.16.042.192.056.314.096l.01.003.008.003a3 3 0 0 1 .215.076l.047.02.048.014a.8.8 0 0 1 .426.301l.004.006.005.005a.74.74 0 0 1 .161.406H1V9.85c.513-.157.987-.36 1.356-.644.433-.33.72-.782.826-1.322l.1-.512-.363-.375q-.227-.232-.445-.602-.22-.374-.371-.814L2.1 5.573l-.003-.009q-.166-.45-.258-.92a4.7 4.7 0 0 1-.089-.894c0-.411.06-.701.14-.9.093-.226.203-.37.316-.468l.007-.005.006-.005c.135-.12.29-.206.479-.26l.007-.001.006-.002Q3.065 2.002 3.5 2q.434.001.789.109l.006.002.007.002a1.2 1.2 0 0 1 .48.259l.005.005.007.005c.113.097.223.242.315.468.082.199.141.489.141.9q0 .423-.09.894a6 6 0 0 1-.257.92l-.003.009-.003.008a4.6 4.6 0 0 1-.37.814 3 3 0 0 1-.446.602l-.363.375.1.512c.106.54.393.992.826 1.322.381.292.874.5 1.406.658l.006.002.005.002.031.011.074.032z",clipRule:"evenodd"})})}),t5=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"UserGroupSolidIcon","aria-label":"user group solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M0 12h9v-.913q0-.623-.376-1.107a1.8 1.8 0 0 0-.935-.655 4 4 0 0 0-.3-.107 10 10 0 0 0-.387-.118 2 2 0 0 1-.129-.033 5 5 0 0 1-.204-.064l-.183-.043q-.075-.033-.15-.054-.72-.215-1.085-.494a1.16 1.16 0 0 1-.451-.72q.323-.333.59-.795.27-.461.452-.988.194-.526.3-1.074.108-.558.108-1.085 0-.751-.215-1.278a2.2 2.2 0 0 0-1.46-1.321Q4.07 1 3.5 1t-1.074.15A2.2 2.2 0 0 0 .965 2.472Q.75 2.998.75 3.75q0 .526.107 1.085.108.547.301 1.074.183.526.451.988.27.462.591.795a1.16 1.16 0 0 1-.451.72q-.365.28-1.085.494-.075.022-.15.054l-.183.043q-.129.043-.204.064T0 9.1z"}),e.jsx("path",{d:"M9.5 12H12V9.666l-.135-.039a1 1 0 0 1-.105-.026l-.167-.053-.15-.035a1 1 0 0 0-.123-.044q-.588-.175-.887-.405a.95.95 0 0 1-.37-.588q.264-.273.484-.65a4.6 4.6 0 0 0 .369-.81q.158-.43.246-.878.088-.457.088-.888 0-.615-.176-1.046A1.8 1.8 0 0 0 9.88 3.123 3 3 0 0 0 9 3q-.466 0-.879.123a1.8 1.8 0 0 0-1.195 1.081q-.176.43-.176 1.046 0 .43.088.888.087.448.246.879.15.43.37.808.219.378.483.65a1 1 0 0 1-.144.353l.065.026c.471.148.862.426 1.163.822.319.411.479.888.479 1.41z"})]})}),a5=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"UserSearchIcon","aria-label":"user search",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M5.004 0q.621 0 1.172.164a2.4 2.4 0 0 1 1.594 1.44q.234.574.234 1.395l-.008.29q-.016.344-.075.701H6.905q.1-.52.099-.991c0-.456-.066-.785-.16-1.016a1.4 1.4 0 0 0-.37-.545l-.006-.004-.006-.006c-.158-.14-.34-.24-.558-.302l-.013-.004a3 3 0 0 0-.768-.118h-.12q-.485.001-.886.122l-.013.004c-.218.061-.4.162-.558.302l-.006.006-.007.004a1.4 1.4 0 0 0-.369.545c-.094.231-.16.56-.16 1.016q0 .47.099.991l.055.258q.061.256.143.51l.087.25.003.01.003.007q.169.487.412.904.241.412.499.673l.362.375-.1.513c-.096.496-.34.92-.703 1.251l-.163.137c-.403.308-.93.53-1.505.702L1 9.94V11l5 .004v1L0 12V9.27a2 2 0 0 1 .434-.187q.14-.058.328-.117.176-.059.422-.13l.14-.034q.083-.024.223-.07l.2-.047.163-.059q.688-.205 1.078-.464l.106-.075q.398-.304.492-.784a4 4 0 0 1-.494-.624l-.15-.243a6 6 0 0 1-.493-1.079 8 8 0 0 1-.263-.874l-.065-.296a6.5 6.5 0 0 1-.11-.895l-.007-.29q0-.717.18-1.246l.054-.148q.206-.501.545-.834l.1-.09q.36-.318.816-.475l.133-.041q.413-.124.865-.154l.307-.01z"}),e.jsx("path",{fillRule:"evenodd",d:"M8 5.5a2.5 2.5 0 0 1 2.085 3.878l1.768 1.768-.707.707-1.768-1.768A2.5 2.5 0 1 1 8 5.5m0 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3",clipRule:"evenodd"})]})}),o5=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"UserSolidIcon","aria-label":"user solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M12 12v-.996q0-.68-.41-1.207a1.96 1.96 0 0 0-1.02-.715 4 4 0 0 0-.328-.117q-.176-.059-.422-.13a2 2 0 0 1-.14-.034 6 6 0 0 1-.223-.07l-.2-.047a1.4 1.4 0 0 0-.163-.059q-.785-.234-1.184-.54a1.26 1.26 0 0 1-.492-.784 4.5 4.5 0 0 0 .644-.867q.294-.504.493-1.079.21-.573.328-1.171Q9 3.574 9 3q0-.82-.234-1.395A2.4 2.4 0 0 0 7.172.164 4 4 0 0 0 6 0q-.621 0-1.172.164a2.4 2.4 0 0 0-1.594 1.441Q3 2.18 3 3q0 .574.117 1.184.117.597.328 1.171.2.575.493 1.079t.644.867q-.094.48-.492.785-.399.305-1.184.539-.082.024-.164.059l-.199.046a6 6 0 0 1-.223.07 2 2 0 0 1-.14.036q-.246.07-.422.129a4 4 0 0 0-.328.117 1.96 1.96 0 0 0-1.02.715Q0 10.324 0 11.004V12z"})})}),n5=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"UtensilsIcon","aria-label":"utensils",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M5 0h1v6H4.508v6h-1V6H2V0h1v3h.5V0h1v3H5zM3 4h2v1H3zM9 .17A3 3 0 0 0 7 3v5h2v4h1V0c-.35 0-.687.06-1 .17m0 1.098A2 2 0 0 0 8 3v4h1z",clipRule:"evenodd"})})}),l5=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"UtensilsSolidIcon","aria-label":"utensils solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M5 0h1v6H4.508v6h-1V6H2V0h1v3h.5V0h1v3H5zm2.031 3a3 3 0 0 1 3-3v12h-1V8h-2z"})})}),r5=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"VideoIcon","aria-label":"video",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M9 8.07V10H0V2h9v1.942L12 3v6zM1 3h7v6H1zm8 4.022 2 .62v-3.28L9 4.99z",clipRule:"evenodd"})})}),s5=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"VideoDisabledIcon","aria-label":"video disabled",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M0 3.129V10h6.889L5.886 9H1V4.126z"}),e.jsx("path",{fillRule:"evenodd",d:"M8 6.858V3H4.135L3.133 2H9v1.942L12 3v6l-2.69-.834zm3 .785-2-.62V4.99l2-.628z",clipRule:"evenodd"}),e.jsx("path",{d:"M9.307 11 0 1.716.716 1 10 10.267z"})]})}),i5=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"VideoSolidIcon","aria-label":"video solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M9 2H0v8h9V8.07L12 9V3l-3 .942z"})})}),d5=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"VisibleSolidIcon","aria-label":"visible solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M7.75 6a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0"}),e.jsx("path",{fillRule:"evenodd",d:"M6 10c3 0 5.25-2.75 6-4.125C11.125 4.583 9 2 6 2S.875 4.583 0 5.875C.75 7.25 3 10 6 10m2.75-4a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0",clipRule:"evenodd"})]})}),c5=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"VolumeDownIcon","aria-label":"volume down",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M3 4H0v4h3l3 3V1zm4 4.83a3.001 3.001 0 0 0 0-5.66z"})})}),u5=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"VolumeOffIcon","aria-label":"volume off",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M0 4h3l3-3v10L3 8H0zm11.286 4.5L9.5 6.714 7.714 8.5 7 7.786 8.786 6 7 4.214l.714-.714L9.5 5.286 11.286 3.5l.714.714L10.214 6 12 7.786z"})})}),v5=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"VolumeUpIcon","aria-label":"volume up",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M3 4H0v4h3l3 3V1zm4 4.83a3.001 3.001 0 0 0 0-5.66z"}),e.jsx("path",{fillRule:"evenodd",d:"M7 10.389a4.502 4.502 0 0 0 0-8.777V.083a6.002 6.002 0 0 1 0 11.834z",clipRule:"evenodd"})]})}),h5=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"WarningIcon","aria-label":"warning",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M5 8V5h2v3zm2 1.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"}),e.jsx("path",{fillRule:"evenodd",d:"m6 0 6 12H0zM1.618 11 6 2.236 10.382 11z",clipRule:"evenodd"})]})}),b5=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"WatchIcon","aria-label":"watch",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M5 4h1v2h2v1H5z"}),e.jsx("path",{fillRule:"evenodd",d:"M3 0h6v2h1v8H9v2H3v-2H2V2h1zm6 3H3v6h6z",clipRule:"evenodd"})]})}),p5=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"WatchSolidIcon","aria-label":"watch solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M3 0h6v2h1v8H9v2H3v-2H2V2h1zm3 4H5v3h3V6H6z",clipRule:"evenodd"})})}),f5=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"WaveformIcon","aria-label":"waveform",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M5 1H4v10h1zM3 3H2v6h1zm5 0h1v6H8zM1 4H0v4h1zm5 0h1v4H6zm5 1h-1v2h1z"})})}),g5=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"WeightIcon","aria-label":"weight",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M8 4a2.5 2.5 0 1 0-4 0H2l-2 8h12l-2-8zm-.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M2.78 5l-1.5 6h9.44l-1.5-6z",clipRule:"evenodd"})})}),x5=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"WeightSolidIcon","aria-label":"weight solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M8 4a2.5 2.5 0 1 0-4 0H2l-2 8h12l-2-8zm-.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0",clipRule:"evenodd"})})}),m5=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"WifiIcon","aria-label":"wifi",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{d:"M6 2c2.262 0 4.304.939 5.76 2.447l-.655.764A6.98 6.98 0 0 0 6 3 6.98 6.98 0 0 0 .895 5.21L.24 4.448A7.98 7.98 0 0 1 6 2"}),e.jsx("path",{d:"M6 4c1.765 0 3.352.762 4.45 1.975l-.657.767A4.99 4.99 0 0 0 6 5a4.99 4.99 0 0 0-3.793 1.742l-.657-.767A6 6 0 0 1 6 4"}),e.jsx("path",{d:"M6 6c1.269 0 2.4.59 3.132 1.512l-.667.778A3 3 0 0 0 6 7c-1.021 0-1.924.51-2.465 1.29l-.667-.778A4 4 0 0 1 6 6m1 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0"})]})}),I5=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"WifiDisabledIcon","aria-label":"wifi disabled",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M1 1.716 10.307 11l.693-.733L1.716 1zM.24 4.447a8 8 0 0 1 1.117-.962l.72.717q-.648.44-1.182 1.009zm1.31 1.528A6 6 0 0 1 2.8 4.924l.73.728a5 5 0 0 0-1.323 1.09zm4.588-1.973 1.175 1.172c.979.266 1.838.82 2.48 1.568l.657-.767a5.98 5.98 0 0 0-4.312-1.973M5.039 7.157l-.768-.765a4 4 0 0 0-1.403 1.12l.667.778a3 3 0 0 1 1.504-1.133m-.727-4.979.87.87Q5.585 3 6 3a6.98 6.98 0 0 1 5.105 2.21l.654-.763A7.98 7.98 0 0 0 6 2c-.58 0-1.144.062-1.688.178M7 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0"})})}),w5=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"WomanIcon","aria-label":"woman",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M6 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-.25 10V9h.5v3h1V9H9L7.342 4.44a1.428 1.428 0 0 0-2.684 0L3 9h1.75v3zm.652-7.218L7.572 8H4.428l1.17-3.218a.428.428 0 0 1 .804 0",clipRule:"evenodd"})})}),y5=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"WomanSolidIcon","aria-label":"woman solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{d:"M7.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M7.25 9v3h-2.5V9H3l1.658-4.56a1.428 1.428 0 0 1 2.684 0L9 9z"})})}),z5=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"WoodlandIcon","aria-label":"woodland",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M5.5 9.373A3.5 3.5 0 1 1 2.06 3.31a4.001 4.001 0 0 1 7.88 0A3.5 3.5 0 1 1 6.5 9.372V12h-1zM8.955 3.48l.091.521.483.218a2.5 2.5 0 1 1-2.815 4.03L6.5 8.03V5.828l1.621-1.62-.707-.708-.914.914V3h-1v3.454L4.497 5.45l-.707.707 1.71 1.71v.164l-.214.219a2.5 2.5 0 1 1-2.814-4.03l.482-.218.09-.521a3.001 3.001 0 0 1 5.911 0",clipRule:"evenodd"})})}),S5=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"WoodlandSolidIcon","aria-label":"woodland solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M6 0a4 4 0 0 1 3.94 3.31A3.5 3.5 0 1 1 6.5 9.372V9.35h-.032l.032.023V12h-1V9.373l.032-.023H5.5v.023A3.5 3.5 0 1 1 2.06 3.31 4 4 0 0 1 6 0m-.5 8.35 1-1V5.828l1.621-1.62-.707-.708-.914.914V3h-1v3.454L4.497 5.45l-.707.707 1.71 1.71z",clipRule:"evenodd"})})}),j5=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"WorkflowIcon","aria-label":"workflow",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M2 0a2 2 0 0 1 1.935 1.5H9a2.5 2.5 0 0 1 0 5H7.935a1.999 1.999 0 0 1-3.87 0h-1.19a1.375 1.375 0 0 0 0 2.75h6.668l-.897-.896.708-.708 2.12 2.122-2.12 2.12-.708-.706.932-.932H2.875a2.375 2.375 0 0 1-.243-4.737l.243-.013h1.19a1.999 1.999 0 0 1 3.87 0H9a1.5 1.5 0 1 0 0-3H3.935A1.999 1.999 0 0 1 0 2a2 2 0 0 1 2-2m4 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",clipRule:"evenodd"})})}),R5=n.forwardRef(function(a,t){return e.jsx(l,{"data-testid":"WorkflowSolidIcon","aria-label":"workflow solid",viewBox:"0 0 12 12",ref:t,...a,children:e.jsx("path",{fillRule:"evenodd",d:"M2 0a2 2 0 0 1 1.935 1.5H9a2.5 2.5 0 0 1 0 5H7.935a1.999 1.999 0 0 1-3.87 0h-1.19a1.375 1.375 0 0 0 0 2.75h6.668l-.897-.896.708-.708 2.12 2.122-2.12 2.12-.708-.706.932-.932H2.875a2.375 2.375 0 0 1-.243-4.737l.243-.013h1.19a1.999 1.999 0 0 1 3.87 0H9a1.5 1.5 0 1 0 0-3H3.935A1.999 1.999 0 0 1 0 2a2 2 0 0 1 2-2",clipRule:"evenodd"})})}),C5=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"XlsIcon","aria-label":"xls",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M1 0v6h1V1h5v3h3v2h1V2L9 0zm9 3v-.586L8.586 1H8v2z",clipRule:"evenodd"}),e.jsx("path",{d:"M11.7 10.559q0 .444-.22.765-.214.321-.622.492-.404.171-.963.171-.274 0-.523-.03a4 4 0 0 1-.472-.09 2.6 2.6 0 0 1-.4-.146v-.773q.305.133.68.243.376.105.766.106.318 0 .526-.082a.66.66 0 0 0 .315-.24.65.65 0 0 0 .102-.365.6.6 0 0 0-.12-.376q-.12-.154-.362-.28a6 6 0 0 0-.601-.277 4 4 0 0 1-.472-.226 2 2 0 0 1-.396-.297 1.3 1.3 0 0 1-.277-.404 1.4 1.4 0 0 1-.1-.553q0-.424.202-.725.205-.3.574-.461.373-.16.869-.161.393 0 .738.082.348.082.683.232l-.26.66a5 5 0 0 0-.598-.202 2.3 2.3 0 0 0-.587-.075q-.26 0-.441.079a.6.6 0 0 0-.277.222.6.6 0 0 0-.092.335q0 .219.106.37.108.145.335.27.228.122.587.273.414.17.701.359.291.188.444.45.154.261.154.654M5 6.92v4.997h2.943v-.697H5.82v-4.3zm-1.339 5h.933L2.92 9.353l1.556-2.43h-.879L2.441 8.817 1.279 6.923H.373l1.548 2.406-1.66 2.591h.878l1.264-2.047z"})]})}),k5=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"XlsSolidIcon","aria-label":"xls solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M1 0v6h10V2L9 0zm7 1H7v3h3V3H8z",clipRule:"evenodd"}),e.jsx("path",{d:"M11.7 10.559q0 .444-.22.765-.214.321-.622.492-.404.171-.963.171-.274 0-.523-.03a4 4 0 0 1-.472-.09 2.6 2.6 0 0 1-.4-.146v-.773q.305.133.68.243.376.105.766.106.318 0 .526-.082a.66.66 0 0 0 .315-.24.65.65 0 0 0 .102-.365.6.6 0 0 0-.12-.376q-.12-.154-.362-.28a6 6 0 0 0-.601-.277 4 4 0 0 1-.472-.226 2 2 0 0 1-.396-.297 1.3 1.3 0 0 1-.277-.404 1.4 1.4 0 0 1-.1-.553q0-.424.202-.725.205-.3.574-.461.373-.16.869-.161.393 0 .738.082.348.082.683.232l-.26.66a5 5 0 0 0-.598-.202 2.3 2.3 0 0 0-.587-.075q-.26 0-.441.079a.6.6 0 0 0-.277.222.6.6 0 0 0-.092.335q0 .219.106.37.108.145.335.27.228.122.587.273.414.17.701.359.291.188.444.45.154.261.154.654M5 6.92v4.997h2.943v-.697H5.82v-4.3zm-1.339 5h.933L2.92 9.353l1.556-2.43h-.879L2.441 8.817 1.279 6.923H.373l1.548 2.406-1.66 2.591h.878l1.264-2.047z"})]})}),H5=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ZipIcon","aria-label":"zip",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M1 0v6h1V1h5v3h3v2h1V2L9 0zm9 3v-.586L8.586 1H8v2z",clipRule:"evenodd"}),e.jsx("path",{d:"M4.842 11.997H1.25v-.564l2.543-3.736H1.329V7h3.445v.56L2.23 11.3h2.611zM5.75 7v4.997h.82V7z"}),e.jsx("path",{fillRule:"evenodd",d:"M10.364 7.396Q9.92 7 8.953 7H7.5v4.997h.82v-1.873h.534q.546 0 .919-.13.375-.13.605-.352.23-.225.328-.516.102-.294.103-.619 0-.714-.445-1.11M8.32 7.68h.578q.554 0 .813.212.264.212.264.646 0 .325-.14.523a.8.8 0 0 1-.41.29q-.27.09-.657.09H8.32z",clipRule:"evenodd"})]})}),M5=n.forwardRef(function(a,t){return e.jsxs(l,{"data-testid":"ZipSolidIcon","aria-label":"zip solid",viewBox:"0 0 12 12",ref:t,...a,children:[e.jsx("path",{fillRule:"evenodd",d:"M1 0v6h10V2L9 0zm7 1H7v3h3V3H8z",clipRule:"evenodd"}),e.jsx("path",{d:"M4.842 11.997H1.25v-.564l2.543-3.736H1.329V7h3.445v.56L2.23 11.3h2.611zM5.75 7v4.997h.82V7z"}),e.jsx("path",{fillRule:"evenodd",d:"M10.364 7.396Q9.92 7 8.953 7H7.5v4.997h.82v-1.873h.534q.546 0 .919-.13.375-.13.605-.352.23-.225.328-.516.102-.294.103-.619 0-.714-.445-1.11M8.32 7.68h.578q.554 0 .813.212.264.212.264.646 0 .325-.14.523a.8.8 0 0 1-.41.29q-.27.09-.657.09H8.32z",clipRule:"evenodd"})]})}),uo=Object.freeze(Object.defineProperty({__proto__:null,AccessibleIcon:Nl,AccessibleSolidIcon:Dl,AddDocumentIcon:Fl,AddDocumentSolidIcon:Ol,AddIcon:bn,AddToGridIcon:Wl,AddToGridSolidIcon:El,AddUserIcon:Gl,AnnouncementIcon:$l,ApiIcon:Ul,AppSwitcherIcon:_l,ArrowDownIcon:Kl,ArrowLeftIcon:pn,ArrowRightIcon:Ql,ArrowUpIcon:fn,AttachIcon:Xl,BankCheckIcon:Jl,BankCheckSolidIcon:Zl,BankIcon:To,BankSolidIcon:Yl,BarChartIcon:gn,BatteryIcon:er,BatterySolidIcon:tr,BookmarkIcon:ar,BookmarkSolidIcon:or,BooleanIcon:nr,BooleanSolidIcon:lr,BrowserIcon:rr,BrowserSolidIcon:sr,BuildReportIcon:vr,BuildReportSolidIcon:hr,BuildingIcon:ir,BuildingSolidIcon:dr,BuildingsIcon:cr,BuildingsSolidIcon:ur,CalculatorIcon:xn,CalculatorSolidIcon:br,CalendarIcon:qo,CalendarSolidIcon:pr,CallIcon:fr,CallSolidIcon:gr,CartIcon:xr,CartSolidIcon:mr,ChartAreaIcon:Ir,ChartBarIcon:wr,ChartBoxPlotIcon:yr,ChartBubbleIcon:zr,ChartBubbleSolidIcon:Sr,ChartBulletIcon:jr,ChartCandlestickIcon:Rr,ChartCandlestickSolidIcon:Cr,ChartColumnIcon:kr,ChartDonutIcon:Hr,ChartLineIcon:Mr,ChartLineSolidIcon:Br,ChartPieIcon:Vr,ChartPieSolidIcon:Lr,ChartScatterIcon:Ar,ChartScatterSolidIcon:Tr,ChartStackedBarIcon:qr,ChartWaterfallIcon:Pr,ChatGroupIcon:Dr,ChatGroupSolidIcon:Fr,ChatIcon:Nr,ChatSolidIcon:Or,ChattingIcon:Wr,ChattingSolidIcon:Er,CheckmarkIcon:Qa,CheckmarkSolidIcon:Xa,ChevronDownIcon:Po,ChevronLeftIcon:No,ChevronRightIcon:Do,ChevronUpIcon:Fo,ClockIcon:Gr,ClockSolidIcon:$r,CloneIcon:Ur,CloseIcon:Oo,CloseSmallIcon:Jr,ClosedcaptionDisabledIcon:Kr,ClosedcaptionDisabledSolidIcon:Qr,ClosedcaptionIcon:_r,ClosedcaptionSolidIcon:Xr,CloudDisabledIcon:Yr,CloudDisabledSolidIcon:e0,CloudDownloadIcon:t0,CloudDownloadSolidIcon:a0,CloudIcon:Zr,CloudSolidIcon:o0,CloudSuccessIcon:n0,CloudSuccessSolidIcon:l0,CloudSyncIcon:r0,CloudSyncSolidIcon:s0,CloudUploadIcon:i0,CloudUploadSolidIcon:d0,CoffeeIcon:c0,CoffeeSolidIcon:u0,CollapseAllHorizontalIcon:b0,CollapseAllIcon:h0,CollapseIcon:v0,ColumnChooserIcon:p0,ColumnChooserSolidIcon:f0,CommentaryIcon:mn,CommentarySolidIcon:g0,CompareIcon:x0,CompareSolidIcon:m0,CompassIcon:I0,CompassSolidIcon:w0,CookieIcon:y0,CookieSolidIcon:z0,CopyIcon:In,CopySolidIcon:S0,CreditCardIcon:j0,CreditCardSolidIcon:R0,CropsIcon:C0,CropsSolidIcon:k0,CsvIcon:H0,CsvSolidIcon:M0,CurrencyExchangeIcon:V0,CurrencyIcon:B0,CurrencySolidIcon:L0,CutIcon:A0,DEFAULT_ICON_SIZE:Wo,DarkIcon:wn,DarkSolidIcon:T0,DashboardIcon:yn,DashboardSolidIcon:q0,DatabaseIcon:zn,DatabaseSolidIcon:P0,DatasetIcon:Sn,DatasetManagerIcon:N0,DatasetManagerSolidIcon:D0,DeleteIcon:jn,DeleteSolidIcon:F0,DevicesIcon:O0,DevicesSolidIcon:W0,DiamondIcon:E0,DisplayIcon:G0,DisplaySolidIcon:$0,DivideIcon:U0,DocumentDraftIcon:_0,DocumentEditIcon:K0,DocumentIcon:Rn,DocumentSearchIcon:Q0,DocumentSolidIcon:X0,DoesNotEqualIcon:J0,DoubleChevronDownIcon:Z0,DoubleChevronLeftIcon:Eo,DoubleChevronRightIcon:Go,DoubleChevronUpIcon:Y0,DownloadIcon:Cn,DragRowIcon:kn,EditIcon:Hn,EditSolidIcon:es,EqualIcon:ts,ErrorExecuteIcon:as,ErrorIcon:Mn,ErrorSolidIcon:$o,ExpandAllHorizontalIcon:ns,ExpandAllIcon:os,ExpandIcon:Bn,ExponentiationIcon:ls,ExportIcon:rs,ExportSolidIcon:ss,FavoriteHalfIcon:is,FavoriteIcon:Uo,FavoriteSolidIcon:_o,FavoriteStrongIcon:Ko,FeedbackIcon:ds,FeedbackSolidIcon:cs,FigmaIcon:us,FilterClearIcon:vs,FilterClearSolidIcon:hs,FilterIcon:Vn,FilterSolidIcon:bs,FirstIcon:ps,FlagIcon:fs,FlagSolidIcon:gs,FolderClosedIcon:xs,FolderClosedSolidIcon:ms,FolderOpenIcon:Ln,FolderOpenSolidIcon:Is,Forward10Icon:ys,Forward15Icon:zs,Forward30Icon:Ss,Forward5Icon:ws,GithubIcon:js,GlobeIcon:Rs,GlobeSolidIcon:Cs,GreaterThanEqualToIcon:Hs,GreaterThanIcon:ks,GridIcon:An,GridSolidIcon:Ms,GroupIcon:Bs,GroupSolidIcon:Vs,GrowthIcon:Ls,GuideClosedIcon:Tn,GuideClosedSolidIcon:As,GuideOpenIcon:Ts,GuideOpenSolidIcon:qs,HandshakeIcon:Ps,HandshakeSolidIcon:Ns,HeadphonesDisabledIcon:Fs,HeadphonesDisabledSolidIcon:Os,HeadphonesIcon:Ds,HeadphonesSolidIcon:Ws,HelpCircleIcon:qn,HelpCircleSolidIcon:Gs,HelpIcon:Es,HelpSolidIcon:$s,HiddenIcon:Pn,HiddenSolidIcon:Us,HierarchyIcon:_s,HierarchySolidIcon:Ks,HistoryIcon:Qs,HolidayIcon:Xs,HolidaySolidIcon:Js,HomeIcon:Zs,HomeSolidIcon:Ys,HospitalIcon:ei,HospitalSolidIcon:ti,Icon:l,IconFigmaIcon:ai,ImageIcon:oi,ImageSolidIcon:ni,ImportIcon:li,ImportSolidIcon:ri,InboxIcon:si,InboxSolidIcon:ii,IndentIcon:di,InfiniteIcon:ci,InfoIcon:ui,InfoSolidIcon:Qo,JigsawIcon:vi,JigsawSolidIcon:hi,KeyBackspaceIcon:pi,KeyCapslockIcon:fi,KeyCommandIcon:Nn,KeyControlIcon:gi,KeyEnterIcon:xi,KeyIcon:bi,KeyOptionIcon:mi,KeyShiftIcon:Ii,KeySolidIcon:wi,KeyTabIcon:yi,LaptopIcon:zi,LaptopSolidIcon:Si,LastIcon:ji,LayersIcon:Ri,LayersSolidIcon:Ci,LessThanEqualToIcon:Hi,LessThanIcon:ki,LightIcon:Dn,LightSolidIcon:Vi,LightbulbIcon:Mi,LightbulbSolidIcon:Bi,LikeIcon:Li,LikeSolidIcon:Ai,LineChartIcon:Ti,LineChartSolidIcon:qi,LinkedIcon:Fn,LinkedinIcon:Pi,LinkedinSolidIcon:Ni,ListIcon:On,LoaderIcon:Wn,LocationIcon:Di,LocationSolidIcon:Fi,LockedIcon:Xo,LockedSolidIcon:Oi,MagicWandIcon:En,MaintenanceIcon:Wi,MaintenanceSolidIcon:Ei,ManIcon:Gi,ManSolidIcon:$i,ManWomanIcon:Ui,ManWomanSolidIcon:_i,MapIcon:Ki,MapSolidIcon:Qi,MarkerIcon:Xi,MarkerSolidIcon:Ji,MaximizeIcon:Zi,MaximizeSolidIcon:Yi,MedicalKitIcon:e1,MedicalKitSolidIcon:t1,MenuIcon:a1,MessageForwardIcon:n1,MessageIcon:o1,MessageReplyAllIcon:r1,MessageReplyIcon:l1,MessageSolidIcon:s1,MicroMenuIcon:i1,MicrophoneDisabledIcon:c1,MicrophoneDisabledSolidIcon:u1,MicrophoneIcon:d1,MicrophoneSolidIcon:v1,MinimizeIcon:h1,MobileIcon:b1,MobileSolidIcon:p1,MouseIcon:f1,MouseSolidIcon:g1,MoveAllIcon:x1,MoveHorizontalIcon:m1,MoveVerticalIcon:I1,MultiplyIcon:w1,MusicDisabledIcon:z1,MusicDisabledSolidIcon:S1,MusicIcon:y1,MusicSolidIcon:j1,NotAllowedIcon:R1,NoteIcon:C1,NoteSolidIcon:k1,NotificationIcon:H1,NotificationReadIcon:M1,NotificationReadSolidIcon:B1,NotificationSolidIcon:V1,OutdentIcon:L1,OverflowMenuIcon:Jo,PanelCloseBottomIcon:A1,PanelCloseBottomSolidIcon:T1,PanelCloseLeftIcon:Gn,PanelCloseLeftSolidIcon:q1,PanelCloseRightIcon:P1,PanelCloseRightSolidIcon:N1,PanelCloseTopIcon:D1,PanelCloseTopSolidIcon:F1,PanelOpenBottomIcon:O1,PanelOpenBottomSolidIcon:W1,PanelOpenLeftIcon:E1,PanelOpenLeftSolidIcon:G1,PanelOpenRightIcon:$1,PanelOpenRightSolidIcon:U1,PanelOpenTopIcon:_1,PanelOpenTopSolidIcon:K1,PasteIcon:Q1,PasteSolidIcon:X1,PauseIcon:J1,PauseSolidIcon:Z1,PdfIcon:Y1,PdfSolidIcon:ed,PercentageIcon:td,PiIcon:ad,PicnicIcon:od,PicnicSolidIcon:nd,PieChartIcon:ld,PinIcon:rd,PinSolidIcon:sd,PivotIcon:id,PivotSolidIcon:dd,PlaceInIcon:cd,PlayIcon:ud,PlaySolidIcon:vd,PolicyIcon:hd,PotFoodIcon:bd,PotFoodSolidIcon:pd,PresentationIcon:fd,PresentationSolidIcon:gd,PriceLadderIcon:xd,PrintIcon:md,PrintSolidIcon:Id,ProgressCancelledIcon:wd,ProgressClosedIcon:yd,ProgressCompleteIcon:zd,ProgressDraftIcon:Sd,ProgressInprogressIcon:Zo,ProgressOnholdIcon:jd,ProgressPendingIcon:Rd,ProgressRejectedIcon:Cd,ProgressTodoIcon:kd,ProtectionIcon:Hd,ProtectionSolidIcon:Md,ReceiptIcon:Bd,ReceiptSolidIcon:Vd,RedoIcon:$n,RefreshIcon:Un,RemoveDocumentIcon:Ad,RemoveDocumentSolidIcon:Td,RemoveIcon:Ld,RemoveUserIcon:qd,Replay10Icon:Nd,Replay15Icon:Dd,Replay30Icon:Fd,Replay5Icon:Pd,RestoreIcon:Od,RunReportIcon:Wd,RunReportSolidIcon:Ed,SaltShakerIcon:Gd,SaltShakerSolidIcon:$d,SaveIcon:_n,SaveSolidIcon:Ud,ScalesIcon:_d,ScalesSolidIcon:Kd,ScheduleIcon:Qd,ScheduleTimeIcon:Xd,ScheduleTimeSolidIcon:Jd,SchoolIcon:Zd,SchoolSolidIcon:Yd,SearchIcon:Kn,SearchSolidIcon:ec,SemanticDissatisfiedIcon:tc,SemanticDissatisfiedSolidIcon:ac,SemanticNeutralIcon:oc,SemanticNeutralSolidIcon:nc,SemanticSatisfiedIcon:lc,SemanticSatisfiedSolidIcon:rc,SemanticVeryDissatisfiedIcon:sc,SemanticVeryDissatisfiedSolidIcon:ic,SemanticVerySatisfiedIcon:dc,SemanticVerySatisfiedSolidIcon:cc,SendIcon:uc,SendSolidIcon:vc,SettingsIcon:Qn,SettingsSolidIcon:hc,ShareIcon:bc,ShareSolidIcon:pc,SignalIcon:fc,SignatureIcon:gc,SignpostIcon:xc,SignpostSolidIcon:mc,SlideIcon:Ic,SlideSolidIcon:wc,SortAlphaAscendIcon:zc,SortAlphaDescendIcon:Sc,SortAscendIcon:jc,SortDescendIcon:kc,SortIcon:yc,SortNumAscendIcon:Hc,SortNumDescendIcon:Mc,SortableAlphaIcon:Rc,SortableNumIcon:Cc,SparkleIcon:Bc,SparkleRefreshIcon:Vc,SparkleRefreshSolidIcon:Lc,SparkleSolidIcon:Ac,SplitViewIcon:Tc,SquareRootIcon:qc,StackoverflowIcon:Pc,StepActiveIcon:Yo,StepDefaultIcon:en,StepSuccessIcon:Nc,StethoscopeIcon:Dc,StethoscopeSolidIcon:Fc,StopIcon:Oc,StopSolidIcon:Wc,StorageIcon:Ec,StorageSolidIcon:Gc,StorefrontIcon:$c,StorefrontSolidIcon:Uc,StringNumberIcon:_c,StringTextIcon:Kc,SuccessCircleIcon:Xn,SuccessCircleSolidIcon:tn,SuccessIcon:Qc,SuccessSmallIcon:Xc,SuccessSmallSolidIcon:Jc,SuccessSolidIcon:Zc,SuccessTickIcon:Yc,SumIcon:e2,SumSolidIcon:a2,SummarizeIcon:t2,SwapIcon:o2,SymphonyIcon:n2,SyncIcon:l2,TagClearIcon:s2,TagClearSolidIcon:i2,TagIcon:r2,TagSolidIcon:d2,TailsIcon:c2,TailsSolidIcon:u2,TargetIcon:v2,TearOutIcon:an,TextAlignCenterIcon:h2,TextAlignJustifyIcon:b2,TextAlignLeftIcon:p2,TextAlignRightIcon:f2,TextBoldIcon:Jn,TextColorIcon:g2,TextHighlightIcon:x2,TextItalicsIcon:Zn,TextOrderedListIcon:m2,TextStrikethroughIcon:I2,TextUnderlineIcon:w2,TextUnorderedListIcon:y2,ThumbsDownIcon:z2,ThumbsDownSolidIcon:S2,ThumbsUpIcon:j2,ThumbsUpSolidIcon:R2,ToteIcon:C2,ToteSolidIcon:k2,TravelIcon:H2,TravelSolidIcon:M2,TreeIcon:B2,TreeSolidIcon:V2,TriangleDownIcon:on,TriangleLeftIcon:L2,TriangleRightDownIcon:T2,TriangleRightIcon:A2,TriangleUpIcon:nn,TypeIcon:q2,TypeSolidIcon:P2,UndoIcon:Yn,UngroupIcon:N2,UngroupSolidIcon:D2,UniversalAccessIcon:F2,UniversalAccessSolidIcon:O2,UnlinkedIcon:W2,UnlockedIcon:E2,UnlockedSolidIcon:G2,UploadIcon:ln,UrgencyCriticalIcon:$2,UrgencyHighIcon:U2,UrgencyLowIcon:_2,UrgencyMediumIcon:K2,UrgencyNoneIcon:Q2,UrgencyOntimeIcon:X2,UserAdminIcon:J2,UserAdminSolidIcon:Z2,UserBadgeIcon:Y2,UserGroupIcon:e5,UserGroupSolidIcon:t5,UserIcon:rn,UserSearchIcon:a5,UserSolidIcon:o5,UtensilsIcon:n5,UtensilsSolidIcon:l5,VideoDisabledIcon:s5,VideoIcon:r5,VideoSolidIcon:i5,VisibleIcon:el,VisibleSolidIcon:d5,VolumeDownIcon:c5,VolumeOffIcon:u5,VolumeUpIcon:v5,WarningIcon:h5,WarningSolidIcon:sn,WatchIcon:b5,WatchSolidIcon:p5,WaveformIcon:f5,WeightIcon:g5,WeightSolidIcon:x5,WifiDisabledIcon:I5,WifiIcon:m5,WomanIcon:w5,WomanSolidIcon:y5,WoodlandIcon:z5,WoodlandSolidIcon:S5,WorkflowIcon:j5,WorkflowSolidIcon:R5,XlsIcon:C5,XlsSolidIcon:k5,ZipIcon:H5,ZipSolidIcon:M5,makePrefixer:dn},Symbol.toStringTag,{value:"Module"}));var B5=`.saltAccordionHeader {
  display: flex;
  gap: var(--salt-spacing-100);
  padding: var(--salt-spacing-50) var(--salt-spacing-100);
  border: 0;
  width: 100%;
  min-height: calc(var(--salt-size-base) + var(--salt-spacing-100));
  background: transparent;
  font-size: var(--salt-text-fontSize);
  line-height: var(--salt-text-lineHeight);
  font-family: var(--salt-text-fontFamily);
  color: var(--salt-content-primary-foreground);
  font-weight: var(--salt-text-fontWeight-bolder);
  letter-spacing: var(--salt-text-letterSpacing);
  text-align: left;
  cursor: var(--salt-cursor-hover);
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

.saltAccordionHeader:focus-visible {
  outline: var(--salt-focused-outline);
  outline-offset: calc(-1 * var(--salt-focused-outlineWidth));
}

.saltAccordionHeader-content {
  padding: var(--salt-spacing-75) 0;
  width: 100%;
  box-sizing: border-box;
}

.saltAccordionHeader .saltAccordionHeader-icon {
  height: var(--salt-size-base);
}

.saltAccordionHeader-error {
  background: var(--salt-status-error-background);
}

.saltAccordionHeader-error:focus-visible {
  outline-color: var(--salt-status-error-borderColor);
}

.saltAccordionHeader-warning {
  background: var(--salt-status-warning-background);
}

.saltAccordionHeader-warning:focus-visible {
  outline-color: var(--salt-status-warning-borderColor);
}

.saltAccordionHeader-success {
  background: var(--salt-status-success-background);
}

.saltAccordionHeader-success:focus-visible {
  outline-color: var(--salt-status-success-borderColor);
}

.saltAccordionHeader .saltAccordionHeader-statusIndicator {
  height: var(--salt-size-base);
  margin-left: auto;
}

.saltAccordionHeader:disabled {
  background: transparent;
  opacity: 0.4;
  color: var(--salt-content-primary-foreground);
  cursor: var(--salt-cursor-disabled);
}
`;const ft=$("saltAccordionHeader");function Ha({expanded:o}){const{CollapseIcon:a,ExpandIcon:t}=Ye();return o?e.jsx(a,{"aria-hidden":!0,className:ft("icon")}):e.jsx(t,{"aria-hidden":!0,className:ft("icon")})}const V5=n.forwardRef(function(a,t){const{children:r,className:i,onClick:s,id:c,...u}=a,{value:d,expanded:v,toggle:h,indicatorSide:g,disabled:b,headerId:m,panelId:f,setHeaderId:I,status:p}=co(),z=G();_({testId:"salt-accordion-header",css:B5,window:z});const w=x=>{h(x),s?.(x)};return fe(()=>{c&&I(c)},[c,I]),e.jsxs("button",{ref:t,className:k(ft(),{[ft(p??"")]:p},i),disabled:b,onClick:w,"aria-expanded":v,id:m,"aria-controls":f,value:d,type:"button",...u,children:[g==="left"&&e.jsx(Ha,{expanded:v}),e.jsx("span",{className:ft("content"),children:r}),p&&!b&&e.jsx(Ot,{className:ft("statusIndicator"),status:p}),g==="right"&&e.jsx(Ha,{expanded:v})]})});var L5=`.saltAccordionPanel {
  display: grid;
  transition:
    grid-template-rows var(--salt-duration-perceptible) ease-in-out,
    opacity var(--salt-duration-perceptible) ease-in-out,
    visibility var(--salt-duration-perceptible) ease-in-out;
}

.saltAccordionPanel[aria-hidden="true"] {
  grid-template-rows: 0fr;
  opacity: 0;
  visibility: hidden;
}

.saltAccordionPanel {
  grid-template-rows: 1fr;
  opacity: 1;
  visibility: visible;
}

.saltAccordionPanel-inner {
  overflow: hidden;
}

.saltAccordionPanel-content {
  padding-left: var(--salt-spacing-100);
  padding-right: var(--salt-spacing-100);
  padding-top: var(--salt-spacing-100);
  padding-bottom: var(--salt-spacing-150);
}

.saltAccordionPanel-indentedContent {
  padding-left: calc(var(--salt-spacing-200) + var(--salt-size-icon));
}

@media (prefers-reduced-motion: reduce) {
  .saltAccordionPanel {
    transition: none;
  }
}
`;const Ct=$("saltAccordionPanel"),A5=n.forwardRef(function(a,t){const{children:r,className:i,id:s,...c}=a,u=G();_({testId:"salt-accordion-panel",css:L5,window:u});const{headerId:d,panelId:v,setPanelId:h,expanded:g,indicatorSide:b}=co();return fe(()=>{s&&h(s)},[s,h]),e.jsx("div",{ref:t,className:k(Ct(),i),role:"region",id:v,"aria-labelledby":d,"aria-hidden":g?void 0:"true",hidden:!g,...c,children:e.jsx("div",{className:Ct("inner"),children:e.jsx("div",{className:k(Ct("content"),{[Ct("indentedContent")]:b==="left"}),children:r})})})});function T5(o,a){const{render:t,...r}=a;if(n.isValidElement(t)){const s=t.props;return n.cloneElement(t,ha(r,s))}const i=r;if(typeof t=="function"){const s=t(i);if(n.isValidElement(s))return s;throw new Error("Render function did not return a valid React element")}return e.jsx(o,{...i})}var q5=`.saltBannerActions {
  margin-bottom: auto;
  display: flex;
  gap: var(--salt-spacing-100);
  align-items: center;
  min-height: var(--salt-size-base);
}
`;const P5=$("saltBannerActions"),N5=n.forwardRef(function(a,t){const{className:r,...i}=a,s=G();return _({testId:"salt-banner-actions",css:q5,window:s}),e.jsx("div",{className:k(P5(),r),...i,ref:t})});var D5=`/* Style applied to the root element */
.saltGridItem {
  justify-self: var(--gridItem-justifySelf);
  align-self: var(--gridItem-alignSelf);
  grid-row-start: var(--gridItem-gridRowStart);
  grid-column-start: var(--gridItem-gridColumnStart);
  grid-row-end: var(--gridItem-gridRowEnd);
  grid-column-end: var(--gridItem-gridColumnEnd);
  margin: var(--gridItem-margin);
  padding: var(--gridItem-padding);
}

.saltGridItem-area {
  grid-area: var(--gridItem-gridArea);
}
`;const F5=$("saltGridItem"),O5="auto",W5="auto",E5="auto",G5="auto",$5=n.forwardRef(function({as:a,children:t,className:r,margin:i=0,padding:s=0,colSpan:c="auto",rowSpan:u="auto",horizontalAlignment:d="stretch",verticalAlignment:v="stretch",style:h,...g},b){const m=G();_({testId:"salt-grid-item",css:D5,window:m});const{matchedBreakpoints:f}=ua(),I=a||"div",p=we(c,f),z=we(u,f),w=we(i,f),x=we(s,f),y=p?`span ${p}`:O5,S=p?`span ${p}`:W5,R=z?`span ${z}`:E5,j=z?`span ${z}`:G5,V={"--gridItem-margin":Je(w),"--gridItem-padding":Je(x),...h,"--gridItem-justifySelf":d,"--gridItem-alignSelf":v,"--gridItem-gridRowStart":R,"--gridItem-gridColumnStart":y,"--gridItem-gridRowEnd":j,"--gridItem-gridColumnEnd":S};return e.jsx(I,{className:k(F5(),r),style:V,ref:b,...g,children:t})});var U5=`/* Style applied to the root element */
.saltGridLayout {
  display: grid;
  column-gap: var(--gridLayout-columnGap);
  row-gap: var(--gridLayout-rowGap);
  grid-template-columns: var(--gridLayout-columns);
  grid-template-rows: var(--gridLayout-rows);
  margin: var(--gridLayout-margin);
  padding: var(--gridLayout-padding);
  grid-auto-columns: auto;
  grid-auto-rows: auto;
}

.saltGridLayout-area {
  grid-template: var(--gridLayout-gridTemplate);
  grid-template-columns: var(--gridLayout-areaColumns, min-content 1fr min-content);
  grid-template-rows: var(--gridLayout-areaRows, min-content 1fr min-content);
}
`;const _5=$("saltGridLayout");function Ma(o){return o===void 0||typeof o=="string"?o:`repeat(${o}, 1fr)`}const K5=n.forwardRef(function({as:a,children:t,className:r,columns:i=12,rows:s=1,gap:c=3,margin:u=0,padding:d=0,columnGap:v,rowGap:h,style:g,...b},m){const f=G();_({testId:"salt-grid-layout",css:U5,window:f});const I=a||"div",{matchedBreakpoints:p}=ua(),z=we(i,p),w=we(s,p),x=we(c,p),y=we(v,p),S=we(h,p),R=we(u,p),j=we(d,p),V={"--gridLayout-margin":Je(R),"--gridLayout-padding":Je(j),...g,"--gridLayout-columns":Ma(z),"--gridLayout-rows":Ma(w),"--gridLayout-columnGap":Je(y??x),"--gridLayout-rowGap":Je(S??x)};return e.jsx(I,{className:k(_5(),r),style:V,ref:m,...b,children:t})});var Q5=`/* Styles applied to root component */
.saltCheckboxGroup {
  border: none;
  margin: 0;
  padding: 0;
}

/* Styles applied to root component if \`direction={"horizontal"}\` */
.saltCheckboxGroup-horizontal {
  display: flex;
  gap: var(--salt-spacing-200);
  flex-direction: row;
  flex-wrap: wrap;
}

/* Styles applied to root component if \`direction={"vertical"}\` */
.saltCheckboxGroup-vertical {
  display: flex;
  gap: var(--salt-spacing-100);
  flex-direction: column;
}

.saltCheckboxGroup-noWrap {
  flex-wrap: nowrap;
}

.saltCheckboxGroup-noWrap .saltCheckbox {
  white-space: break-spaces;
}

/* Styles applied when checkbox button group is inside a form field with label left or right */
.saltFormField-labelLeft .saltCheckboxGroup,
.saltFormField-labelRight .saltCheckboxGroup {
  padding-top: var(--salt-spacing-100);
}
`;const Kt=$("saltCheckboxGroup"),X5=n.forwardRef(function({"aria-labelledby":a,"aria-describedby":t,checkedValues:r,defaultCheckedValues:i=[],children:s,className:c,disabled:u,direction:d="vertical",name:v,onChange:h,readOnly:g,wrap:b,validationStatus:m,...f},I){const p=G();_({testId:"salt-checkbox-group",css:Q5,window:p});const{a11yProps:z,disabled:w,readOnly:x,validationStatus:y}=Ne(),S=w||u,R=x||g,j=y??m,[V,M]=ge({controlled:r,default:i,name:"CheckboxGroup",state:"checkedValues"}),B=C=>{const L=C.target.value;M((K=[])=>K.includes(L)?K.filter(T=>T!==L):K.concat(L)),h?.(C)};return e.jsx("fieldset",{"aria-labelledby":k(z?.["aria-labelledby"],a)||void 0,"aria-describedby":k(z?.["aria-describedby"],t)||void 0,className:k(Kt(),Kt(d),{[Kt("noWrap")]:!b},c),ref:I,...f,children:e.jsx(Bl.Provider,{value:{disabled:S,name:v,onChange:B,checkedValues:V,readOnly:R,validationStatus:j},children:s})})});var J5=`/* Styles applied to the root element */
.saltPill {
  --pill-borderWidth: var(--salt-size-fixed-100);

  appearance: none;
  display: inline-flex;
  align-items: center;
  background: var(--saltPill-background, var(--pill-background));
  border-radius: var(--salt-palette-corner-weaker, 0);
  border-style: solid;
  border-width: var(--pill-borderWidth);
  border-color: var(--pill-borderColor);
  height: calc(var(--salt-size-base) - var(--salt-spacing-100));
  min-height: var(--salt-text-minHeight);
  position: relative;
  gap: var(--salt-spacing-50);
  padding: 0 calc(var(--salt-spacing-50) - var(--pill-borderWidth));
  color: var(--saltPill-color, var(--pill-color));
  font-family: var(--salt-text-fontFamily);
  font-size: var(--salt-text-fontSize);
  font-weight: var(--salt-text-fontWeight);
  line-height: var(--salt-text-lineHeight);
  letter-spacing: var(--salt-text-letterSpacing);
  overflow: hidden;
  white-space: nowrap;
}

/* Style applied to Pill if pill is clickable  */
.saltPill-clickable {
  --pill-background: var(--salt-actionable-bold-background);
  --pill-color: var(--salt-actionable-bold-foreground);
  --pill-borderColor: var(--salt-actionable-bold-borderColor);
  cursor: var(--salt-cursor-hover);
}

.saltPill-clickable:hover,
.saltPill-clickable:focus-visible {
  --pill-color: var(--salt-actionable-bold-foreground-hover);
  --pill-background: var(--salt-actionable-bold-background-hover);
  --pill-borderColor: var(--salt-actionable-bold-borderColor-hover);
}

.saltPill-clickable.saltPill-active,
.saltPill-clickable:active {
  --pill-color: var(--salt-actionable-bold-foreground-active);
  --pill-background: var(--salt-actionable-bold-background-active);
  --pill-borderColor: var(--salt-actionable-bold-borderColor-active);
}

/* Style applied to Pill on focus */
.saltPill:focus-visible {
  outline: var(--salt-focused-outline);
}

/* Styles applied when the pill triggers a menu */
.saltPill[aria-expanded="true"][aria-haspopup="menu"] {
  --pill-color: var(--salt-actionable-bold-foreground-active);
  --pill-background: var(--salt-actionable-bold-background-active);
  --pill-borderColor: var(--salt-actionable-bold-borderColor-active);
}

/* Style applied to Pill when disabled */
.saltPill:disabled,
.saltPill:disabled:hover {
  --pill-color: var(--salt-actionable-bold-foreground);
  --pill-background: var(--salt-actionable-bold-background);
  --pill-borderColor: var(--salt-actionable-bold-borderColor);
  cursor: var(--salt-cursor-disabled);

  opacity: 0.4;
}
`,Z5=`.saltPillCheckIcon {
  --checkbox-size: var(--salt-size-selectable);
  width: var(--checkbox-size);
  min-width: var(--checkbox-size);
  height: var(--checkbox-size);
  min-height: var(--checkbox-size);
  border: var(--salt-size-fixed-100) var(--salt-borderStyle-solid);
  border-radius: var(--salt-palette-corner-weaker, 0);
  position: relative;
  --saltIcon-size: 100%;
  display: flex;
  pointer-events: none;
  /* Using overflow:hidden here causes a thin white line */
  clip-path: border-box;
  box-sizing: border-box;
}

.saltPillCheckIcon > svg {
  pointer-events: none;
  position: absolute;
  /* Ensure a gap doesn't appear when device scaling is used */
  transform: scale(1.01);
}
`;const dt=$("saltPillCheckIcon"),Y5=({className:o,checked:a=!1,disabled:t=!1,active:r=!1})=>{const i=G();return _({testId:"salt-pill-check-icon",css:Z5,window:i}),e.jsx("div",{"aria-hidden":"true",className:k(dt(),{[dt("checked")]:a,[dt("disabled")]:t,[dt("active")]:r},o),children:a&&(r?e.jsx(Qa,{className:dt("icon")}):e.jsx(Xa,{className:dt("solidIcon")}))})},eu=_e("PillGroupContext",{selected:[],select:()=>{},selectionVariant:"none"});function tu(){return n.useContext(eu)}const Qt=$("saltPill"),vo=n.forwardRef(function({children:a,className:t,disabled:r,onKeyUp:i,onKeyDown:s,onClick:c,onBlur:u,onPointerDown:d,value:v,...h},g){const[b,m]=n.useState(!1),[f,I]=n.useState(!1),p=tu(),z=G();_({testId:"salt-pill",css:J5,window:z});const w=p.selectionVariant==="multiple",x=P=>{w&&v&&p.select(P,v),c?.(P)},y=P=>{d?.(P),!r&&m(!0)},S=P=>{if(s?.(P),P.key==="Enter"&&w){P.preventDefault();return}P.key===" "&&w&&I(!0)},R=P=>{i?.(P),w&&P.key===" "&&I(!1)};n.useEffect(()=>{if(!z)return;const P=()=>m(!1);return z.addEventListener("pointerup",P),z.addEventListener("pointercancel",P),()=>{z.removeEventListener("pointerup",P),z.removeEventListener("pointercancel",P)}},[z]);const{buttonProps:j,active:V}=cn({disabled:r,onKeyUp:R,onKeyDown:S,onClick:x,onBlur:u}),{tabIndex:M,disabled:B,...C}=j,L=!!v&&w&&p.selected.includes(v),K=p.disabled||B,U=w?b||f:b||V,T=w?{"aria-checked":L,role:"checkbox",value:v}:{};return e.jsxs("button",{"data-testid":"pill",ref:g,className:k(Qt(),Qt("clickable"),{[Qt("active")]:U},t),type:"button",onPointerDown:y,disabled:K,...C,...T,...h,children:[w&&e.jsx(Y5,{checked:L,active:U}),a]})});var au=`/* Style applied to the root element */
.saltPillInput {
  align-items: center;
  background: var(--saltPillInput-background, var(--pillInput-background));
  border-radius: var(--salt-palette-corner-weak, 0);
  color: var(--saltPillInput-color, var(--salt-content-primary-foreground));
  display: inline-flex;
  font-family: var(--salt-text-fontFamily);
  font-size: var(--saltPillInput-fontSize, var(--salt-text-fontSize));
  line-height: var(--saltPillInput-lineHeight, var(--salt-text-lineHeight));
  letter-spacing: var(--salt-text-letterSpacing);
  min-height: var(--saltPillInput-minHeight, var(--salt-size-base));
  min-width: var(--saltPillInput-minWidth, 4em);
  padding-left: var(--saltPillInput-paddingLeft, var(--salt-spacing-100));
  padding-right: var(--saltPillInput-paddingRight, var(--salt-spacing-100));
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.saltPillInput-truncate {
  height: var(--salt-size-base);
}

.saltPillInput-truncate .saltPillInput-inputWrapper {
  flex-wrap: nowrap;
}

.saltPillInput:hover {
  cursor: var(--salt-cursor-text);
}

/* Style applied if \`bordered={true}\` */
.saltPillInput-bordered.saltPillInput {
  --pillInput-borderWidth: var(--salt-size-fixed-100);
  border: var(--pillInput-borderWidth) var(--salt-borderStyle-solid) var(--pillInput-borderColor);
}

.saltPillInput-bordered.saltPillInput:hover {
  border-style: var(--salt-borderStyle-solid);
  border-color: var(--pillInput-borderColor-hover);
}

/* Style applied if focused or active when \`bordered={true}\` */
.saltPillInput-bordered.saltPillInput-focused,
.saltPillInput-bordered.saltPillInput-focused:hover {
  border-style: var(--salt-borderStyle-solid);
  border-color: var(--pillInput-borderColor-active);
}

.saltPillInput-bordered.saltPillInput-readOnly,
.saltPillInput-bordered.saltPillInput-readOnly:hover {
  border-style: var(--salt-borderStyle-solid);
  border-color: var(--salt-editable-borderColor-readonly);
}

.saltPillInput-bordered.saltPillInput-disabled,
.saltPillInput-bordered.saltPillInput-disabled:hover {
  border-style: var(--salt-borderStyle-solid);
  border-color: var(--salt-editable-borderColor-disabled);
}

.saltPillInput-activationIndicator {
  left: 0;
  bottom: 0;
  width: 100%;
  position: absolute;
  border-bottom: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) var(--pillInput-borderColor);
}

.saltPillInput:hover .saltPillInput-activationIndicator {
  border-bottom-style: var(--salt-borderStyle-solid);
  border-bottom-color: var(--pillInput-borderColor-hover);
}

.saltPillInput-focused .saltPillInput-activationIndicator,
.saltPillInput-focused:hover .saltPillInput-activationIndicator {
  border-bottom: var(--salt-size-fixed-200) var(--salt-borderStyle-solid) var(--pillInput-borderColor-active);
}

.saltPillInput-readOnly .saltPillInput-activationIndicator,
.saltPillInput-readOnly:hover .saltPillInput-activationIndicator {
  border-bottom-style: var(--salt-borderStyle-solid);
  border-bottom-color: var(--salt-editable-borderColor-readonly);
}

.saltPillInput-disabled .saltPillInput-activationIndicator,
.saltPillInput-disabled:hover .saltPillInput-activationIndicator {
  border-bottom-style: var(--salt-borderStyle-solid);
  border-bottom-color: var(--salt-editable-borderColor-disabled);
}

.saltPillInput-bordered .saltPillInput-activationIndicator,
.saltPillInput-bordered.saltPillInput-readOnly .saltPillInput-activationIndicator,
.saltPillInput-bordered.saltPillInput-disabled:hover .saltPillInput-activationIndicator {
  border-bottom-width: 0;
}

.saltPillInput-bordered.saltPillInput-focused .saltPillInput-activationIndicator {
  border-bottom-width: calc(var(--salt-size-fixed-200) - var(--pillInput-borderWidth));
}

/* Class applied if \`variant="primary"\` */
.saltPillInput-primary {
  --pillInput-background: var(--salt-editable-primary-background);
  --pillInput-background-disabled: var(--salt-editable-primary-background-disabled);
  --pillInput-background-readonly: var(--salt-editable-background-readonly);
  --pillInput-borderColor: var(--salt-editable-borderColor);
  --pillInput-borderColor-active: var(--salt-editable-borderColor-active);
  --pillInput-borderColor-hover: var(--salt-editable-borderColor-hover);
  --pillInput-outlineColor: var(--salt-focused-outlineColor);
}

/* Class applied if \`variant="secondary"\` */
.saltPillInput-secondary {
  --pillInput-background: var(--salt-editable-secondary-background);
  --pillInput-background-disabled: var(--salt-editable-secondary-background-disabled);
  --pillInput-background-readonly: var(--salt-editable-background-readonly);
  --pillInput-borderColor: var(--salt-editable-borderColor);
  --pillInput-borderColor-active: var(--salt-editable-borderColor-active);
  --pillInput-borderColor-hover: var(--salt-editable-borderColor-hover);
  --pillInput-outlineColor: var(--salt-focused-outlineColor);
}

/* Class applied if \`variant="tertiary"\` */
.saltPillInput-tertiary {
  --pillInput-background: var(--salt-editable-tertiary-background);
  --pillInput-background-readonly: var(--salt-editable-background-readonly);
  --pillInput-borderColor: var(--salt-editable-borderColor);
  --pillInput-borderColor-active: var(--salt-editable-borderColor-active);
  --pillInput-borderColor-hover: var(--salt-editable-borderColor-hover);
  --pillInput-outlineColor: var(--salt-focused-outlineColor);
}

/* Style applied to input if \`validationState="error"\` */
.saltPillInput-error {
  --pillInput-background: var(--salt-status-error-background);
  --pillInput-background-readonly: var(--salt-status-error-background);
  --pillInput-borderColor: var(--salt-status-error-borderColor);
  --pillInput-borderColor-active: var(--salt-status-error-borderColor);
  --pillInput-borderColor-hover: var(--salt-status-error-borderColor);
  --pillInput-outlineColor: var(--salt-status-error-borderColor);
}

/* Style applied to input if \`validationState="warning"\` */
.saltPillInput-warning {
  --pillInput-background: var(--salt-status-warning-background);
  --pillInput-background-readonly: var(--salt-status-warning-background);
  --pillInput-borderColor: var(--salt-status-warning-borderColor);
  --pillInput-borderColor-active: var(--salt-status-warning-borderColor);
  --pillInput-borderColor-hover: var(--salt-status-warning-borderColor);
  --pillInput-outlineColor: var(--salt-status-warning-borderColor);
}

/* Style applied to input if \`validationState="success"\` */
.saltPillInput-success {
  --pillInput-background: var(--salt-status-success-background);
  --pillInput-background-readonly: var(--salt-status-success-background);
  --pillInput-borderColor: var(--salt-status-success-borderColor);
  --pillInput-borderColor-active: var(--salt-status-success-borderColor);
  --pillInput-borderColor-hover: var(--salt-status-success-borderColor);
  --pillInput-outlineColor: var(--salt-status-success-borderColor);
}

/* Styling when focused */
.saltPillInput-focused,
.saltPillInput-focused:hover {
  cursor: var(--salt-cursor-text);
  outline: var(--saltPillInput-outline, var(--salt-focused-outlineWidth) var(--salt-focused-outlineStyle) var(--pillInput-outlineColor));
}

/* Style applied if \`readOnly={true}\` */
.saltPillInput.saltPillInput-readOnly {
  background: var(--pillInput-background-readonly);
  cursor: var(--salt-cursor-readonly);
}

/* Styling when focused if \`disabled={true}\` */
.saltPillInput-disabled,
.saltPillInput-disabled:hover {
  background: var(--pillInput-background-disabled);
  cursor: var(--salt-cursor-disabled);
  color: var(--saltPillInput-color-disabled, var(--salt-content-primary-foreground-disabled));
}

/* Style applied to start adornments */
.saltPillInput-startAdornmentContainer {
  align-items: center;
  display: inline-flex;
  padding-right: var(--salt-spacing-100);
  column-gap: var(--salt-spacing-100);
}

/* Style applied to end adornments */
.saltPillInput-endAdornmentContainer {
  align-items: center;
  display: inline-flex;
  padding-left: var(--salt-spacing-50);
  padding-top: var(--salt-spacing-50);
  column-gap: var(--salt-spacing-100);
  align-self: flex-start;
}

.saltPillInput-statusAdornmentContainer {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  height: var(--salt-size-base);
}

.saltPillInput-readOnly .saltPillInput-startAdornmentContainer {
  margin-left: var(--salt-spacing-50);
}

.saltPillInput-startAdornmentContainer .saltButton ~ .saltButton {
  margin-left: calc(-1 * var(--salt-spacing-50));
}

.saltPillInput-endAdornmentContainer .saltButton ~ .saltButton {
  margin-left: calc(-1 * var(--salt-spacing-50));
}

.saltPillInput-startAdornmentContainer .saltButton:first-child {
  margin-left: calc(var(--salt-spacing-50) * -1);
}

.saltPillInput-endAdornmentContainer .saltButton:last-child {
  margin-right: calc(var(--salt-spacing-50) * -1);
}

.saltPillInput-startAdornmentContainer > .saltButton,
.saltPillInput-endAdornmentContainer > .saltButton {
  --saltButton-padding: calc(var(--salt-spacing-50) - var(--button-borderWidth));
  --saltButton-height: calc(var(--salt-size-base) - var(--salt-spacing-100));
  --saltButton-borderRadius: var(--salt-palette-corner-weaker);
}

.saltPillInput-inputWrapper {
  display: flex;
  gap: var(--salt-spacing-50);
  align-items: center;
  flex: 1;
  padding: var(--salt-spacing-50) 0;
  flex-wrap: wrap;
  max-height: inherit;
  height: inherit;
  overflow-y: auto;
  box-sizing: border-box;
}

.saltPillInput-bordered > .saltPillInput-endAdornmentContainer {
  padding-top: calc(var(--salt-spacing-50) - var(--pillInput-borderWidth));
}

.saltPillInput-bordered > .saltPillInput-inputWrapper {
  padding: calc(var(--salt-spacing-50) - var(--pillInput-borderWidth)) 0;
}

.saltPillInput-pillList {
  display: contents;
}

.saltPillInput-pillList div[role="listitem"] {
  display: inline;
}

.saltPillInput-overflowIndicator {
  width: calc(var(--salt-size-base) - var(--salt-spacing-100));
  height: calc(var(--salt-size-base) - var(--salt-spacing-100));
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Style applied to inner input component */
.saltPillInput-input {
  background: none;
  border: none;
  box-sizing: content-box;
  color: inherit;
  cursor: inherit;
  display: block;
  flex: 1;
  font: inherit;
  height: 100%;
  letter-spacing: var(--saltPillInput-letterSpacing, var(--salt-text-letterSpacing));
  margin: 0;
  min-width: 0;
  overflow: hidden;
  padding: 0;
  text-align: var(--pillInput-textAlign, left);
  width: 100%;
}

/* Reset in the  class */
.saltPillInput-input:focus {
  outline: none;
}

/* Style applied to selected input if \`disabled={true}\` */
.saltPillInput-disabled .saltPillInput-input::selection {
  background: none;
}

/* Style applied to placeholder text */
.saltPillInput-input::placeholder {
  color: var(--salt-content-secondary-foreground);
  font-weight: var(--salt-text-fontWeight-lighter);
}
`;function ou(o){const[a,t]=n.useState(o),r=n.useRef(null),i=sa(()=>{if(!r.current)return;const c=r.current.next();if(c.done){r.current=null;return}a===c.value?i():t(c.value)});fe(()=>{r.current&&i()});const s=sa(c=>{r.current=c(a),i()});return[a,s]}function nu({pills:o,enable:a}){const t=n.useRef(null),[r,i]=ou(o.length),s=G(),c=n.useCallback(()=>{if(!a)return;const u=d=>{const v=t.current;if(v&&s){const h=Array.from(v.querySelectorAll('[role="listitem"]')),g=v.getBoundingClientRect().width,b=Number.parseInt(s.getComputedStyle(v).gap,10),m=v.querySelector("[data-overflowindicator]");let f=0,I=0;if(m){const p=h.pop();if(p){const z=p.getBoundingClientRect().width;f+=z+b}}for(const p of h){const z=p.getBoundingClientRect().width;if(f+=z+b,Math.round(f)<=Math.round(g))I++;else break}return I}return d};i(function*(){yield o.length;const d=u(o.length),v=d<o.length&&d>0;yield d,v&&(yield u(d))})},[o,i,a,s]);return fe(()=>{c()},[c]),ba({ref:t,onResize:c}),{pillListRef:t,visibleCount:r,visiblePills:a?o.slice(0,r):o}}const me=$("saltPillInput");function Ba(o){return o==null||o===""||Array.isArray(o)&&o.length===0}const lu=n.forwardRef(function({"aria-activedescendant":a,"aria-expanded":t,"aria-owns":r,className:i,disabled:s,emptyReadOnlyMarker:c="—",endAdornment:u,hidePillClose:d,id:v,inputProps:h={},inputRef:g,name:b,placeholder:m,pills:f=[],onPillRemove:I,readOnly:p,role:z,startAdornment:w,style:x,textAlign:y="left",value:S,defaultValue:R=S===void 0?"":void 0,validationStatus:j,variant:V="primary",truncate:M,bordered:B=!1,...C},L){const K=G(),{OverflowIcon:U,CloseIcon:T}=Ye();_({testId:"salt-pill-input",css:au,window:K});const{a11yProps:{"aria-describedby":P,"aria-labelledby":Q}={},disabled:Y,readOnly:Z,necessity:ie,validationStatus:ne}=Ne(),ue={"aria-activedescendant":a,"aria-expanded":t,"aria-owns":r},ee=s||Y,le=p||Z,F=ne??j,[H,q]=n.useState(!1),[W,O]=n.useState(-1),A=le&&Ba(S),E=le&&Ba(R),ae=S===void 0?void 0:A?c:S,te=E?c:R,{"aria-describedby":J,"aria-labelledby":de,onBlur:He,onFocus:Ce,onChange:Ke,required:Qe,onKeyDown:ke,...re}=h,We=ie?["required","asterisk"].includes(ie):Qe,[tt,Me]=ge({controlled:ae,default:te,name:"Input",state:"value"}),{visiblePills:Be,pillListRef:at}=nu({pills:f,enable:M&&f.length>0}),ot=Re(v),De=`${ot}-optionsList`,Te=n.useRef([]),Ee=n.useRef(null),ye=he(Ee,g),nt=X=>{const ce=X.target.value;Me(ce),Ke?.(X)},Ge=X=>{var ce;const ze=X.currentTarget;if(ze.selectionStart===0&&ze.selectionEnd===0){const xe=f.length-1,Xe=f[xe];X.key==="Backspace"&&Xe?(X.preventDefault(),I?.(X,xe)):X.key==="ArrowLeft"&&(X.preventDefault(),(ce=Te.current[xe])==null||ce.focus())}ke?.(X)},$e=X=>{var ce,ze,xe,Xe,st,it;const wt=X.currentTarget,Fe=Number(wt.dataset.index);X.key==="ArrowLeft"?(X.preventDefault(),(ce=Te.current[Fe-1])==null||ce.focus()):X.key==="ArrowRight"?(X.preventDefault(),Fe===f.length-1?(ze=Ee?.current)==null||ze.focus():(xe=Te.current[Fe+1])==null||xe.focus()):(X.key==="Delete"||X.key==="Backspace")&&(X.preventDefault(),I?.(X,Fe),f.length===1?(Xe=Ee.current)==null||Xe.focus():Fe===f.length-1?(st=Te.current[f.length-2])==null||st.focus():(it=Te.current[Fe])==null||it.focus())},xt=X=>{var ce;if(!d){const ze=X.currentTarget,xe=Number(ze.dataset.index);I?.(X,xe)}(ce=Ee.current)==null||ce.focus()},mt=X=>{He?.(X),q(!1)},rt=X=>{Ce?.(X),q(!0)},It={"--input-textAlign":y,...x};return e.jsxs("div",{className:k(me(),me(V),{[me("focused")]:!ee&&H,[me("disabled")]:ee,[me("readOnly")]:le,[me("truncate")]:M,[me(F??"")]:F,[me("bordered")]:B},i),ref:L,style:It,...C,children:[w&&e.jsx("div",{className:me("startAdornmentContainer"),children:w}),e.jsxs("div",{className:me("inputWrapper"),ref:at,children:[e.jsxs("div",{role:"list",className:me("pillList"),"aria-labelledby":k(Q,De),"aria-label":"Selected Options",id:De,children:[Be?.map((X,ce)=>e.jsx("div",{role:"listitem",children:e.jsxs(vo,{"data-index":ce,disabled:ee,"aria-label":d?X:`Remove ${X}`,ref:ze=>{ze?Te.current[ce]=ze:Te.current=Te.current.filter(xe=>xe!==ze)},onFocus:()=>O(ce),onKeyDown:$e,onClick:xt,tabIndex:ce===(W>=0&&W<Be.length?W:0)?0:-1,children:[X,!d&&e.jsx(T,{"aria-hidden":!0})]})},X)),Be.length<f.length&&e.jsx("div",{role:"listitem",children:e.jsx("div",{"data-overflowindicator":!0,className:me("overflowIndicator"),children:e.jsx(U,{"aria-hidden":!0})})})]}),e.jsx("input",{"aria-describedby":k(P,J)||void 0,"aria-labelledby":k(Q,de)||void 0,autoComplete:"off",className:k(me("input"),h?.className),disabled:ee,id:ot,name:b,readOnly:le,ref:ye,role:z,tabIndex:ee?-1:0,onBlur:mt,onChange:nt,onFocus:ee?void 0:rt,onKeyDown:Ge,placeholder:m,value:tt,...ue,...re,required:We})]}),!ee&&F&&e.jsx("div",{className:me("statusAdornmentContainer"),children:e.jsx(va,{status:F})}),u&&e.jsx("div",{className:me("endAdornmentContainer"),children:u}),e.jsx("div",{className:me("activationIndicator")})]})});function ru(o){const{open:a,defaultOpen:t,onOpenChange:r,multiselect:i,defaultSelected:s,selected:c,onSelectionChange:u,disabled:d,readOnly:v,valueToString:h,value:g,defaultValue:b}=o,m=cl({open:a,defaultOpen:t,onOpenChange:r,multiselect:i,defaultSelected:s,selected:c,onSelectionChange:u,disabled:d,readOnly:v,valueToString:h}),{selectedState:f,setSelectedState:I,setOpen:p}=m,[z,w]=ge({controlled:g,default:b??(f.length===1&&!i?m.valueToString(f[0]):b),name:"ComboBox",state:"value"}),x=sa((S,R)=>{if(R.disabled||d||v)return;let j=[R.value];i&&(f.includes(R.value)?j=f.filter(V=>V!==R.value):j=f.concat([R.value])),I(j),w(i?"":m.valueToString(R.value)),u?.(S,j),i||p(!1)});return{...m,select:x,valueState:z,setValueState:w,removePill:(S,R)=>{if(!i||d||v)return;let j;f.includes(R)?j=f.filter(V=>V!==R):j=f.concat([R]),I(j),w(""),u?.(S,j)}}}const Xt=$("saltComboBox"),su=n.forwardRef(function(a,t){var r,i;const{className:s,props:c}=Ft("saltComboBox",a),{children:u,disabled:d,endAdornment:v,readOnly:h,multiselect:g,selectOnTab:b=!g,onSelectionChange:m,selected:f,defaultSelected:I,defaultOpen:p,onOpenChange:z,onChange:w,open:x,inputRef:y,inputProps:S,variant:R="primary",onKeyDown:j,onFocus:V,onBlur:M,value:B,defaultValue:C,valueToString:L=ul,truncate:K,bordered:U=!1,OverlayProps:T,...P}=c,{CollapseIcon:Q,ExpandIcon:Y}=Ye(),{a11yProps:{"aria-labelledby":Z}={},disabled:ie,readOnly:ne}=Ne(),ue=!!d||ie,ee=!!h||ne,le=n.useRef(null),F=he(le,y),H=n.useRef(!1),q=ru({open:x,defaultOpen:p,onOpenChange:z,multiselect:g,defaultSelected:I,selected:f,onSelectionChange:m,value:B,defaultValue:C,disabled:ue,readOnly:ee,valueToString:L}),{activeState:W,setActive:O,openState:A,setOpen:E,openKey:ae,getOptionsMatching:te,getFirstOption:J,getLastOption:de,getOptionAfter:He,getOptionBefore:Ce,getOptionPageAbove:Ke,getOptionPageBelow:Qe,selectedState:ke,select:re,clear:We,focusVisibleState:tt,setFocusVisibleState:Me,focusedState:Be,setFocusedState:at,listRef:ot,setListRef:De,valueState:Te,setValueState:Ee,removePill:ye}=q,nt=(D,Le,Pe)=>{var Sa;const Mo=Pe==="focus"&&D;Pe==="focus"&&at(D),Pe==="focus"&&!D&&Me(!1),!(ee||Mo)&&(E(D),D&&((Sa=le.current)==null||Sa.focus()))},Ge=n.Children.toArray(u).filter(Boolean).length>0,{x:$e,y:xt,strategy:mt,elements:rt,floating:It,reference:X,context:ce}=Wt({open:A&&!ee&&Ge,onOpenChange:nt,placement:"bottom-start",strategy:"fixed",middleware:[fa(1),gl({apply({rects:D,elements:Le,availableHeight:Pe}){Le.floating.style.setProperty("--overlay-minWidth",`${D.reference.width}px`),Le.floating.style.setProperty("--overlay-maxHeight",`max(calc((var(--salt-size-base) + var(--salt-spacing-100)) * 5), calc(${Pe}px - var(--salt-spacing-100)))`)}}),ga({fallbackStrategy:"initialPlacement"})]}),{getReferenceProps:ze,getFloatingProps:xe}=Et([Gt(ce),Ya(ce),pa(ce,{keyboardHandlers:!1,toggle:!1})]),Xe=he(X,t),st=D=>{ee||(D.stopPropagation(),Me(!1),E(!A,"manual"))},it=()=>{var D;(D=le.current)==null||D.focus()},wt=D=>{if(j?.(D),D.repeat||(H.current=!1),ee||bl(D))return;if(!A&&(D.key==="ArrowDown"||D.key==="ArrowUp")){E(!0,void 0,D.key);return}if((!A||!Ge)&&pl(D.key))return;const Le=W;(D.key==="PageUp"||D.key==="PageDown")&&D.preventDefault();const Pe=fl(D.key,Le,{getFirstOption:J,getLastOption:de,getOptionAfter:He,getOptionBefore:Ce,getOptionPageAbove:Ke,getOptionPageBelow:Qe});switch(D.key){case"Enter":if(A&&W?.disabled){D.preventDefault();return}if(!A||!W)return;re(D,W),g||D.preventDefault();break;case"Tab":A&&b&&W&&!W?.disabled&&!ke.includes(W?.value)&&re(D,W);break}Pe&&Me(!0),Pe&&Pe.data.id!==W?.id&&(D.preventDefault(),O(Pe.data))},Fe=D=>{D.currentTarget===le.current?at(!0):O(void 0),V?.(D)},qe=D=>{D.persist(),(!ot.current||!ot.current.contains(D.relatedTarget))&&(M?.(D),H.current=!1)},jt=D=>{const Le=D.target.value;A||E(!0,"input"),Le===""&&!g&&We(D),Ee(Le),Le===""?O(void 0):H.current=!0,w?.(D)},Rt=(D,Le)=>{D.stopPropagation();const Pe=ke[Le];ye(D,Pe)},N=()=>{Me(!1)},oe=()=>{O(void 0)},Se=()=>{var D;(D=le.current)==null||D.focus()};fe(()=>{B&&(H.current=!0)},[B]),n.useEffect(()=>{A&&B&&queueMicrotask(()=>{const D=J();D&&H.current&&O(D.data)})},[B,O,A,J]),n.useEffect(()=>{let D;if(!A){O(void 0);return}ke.length>0&&(D=te(Le=>Le.value===ke[0]).pop()),D||(ae.current==="ArrowDown"?(D=J(),Me(!0)):ae.current==="ArrowUp"&&(D=de(),Me(!0))),D&&O(D?.data)},[A]);const pe=Re(),Ve=Re(),Co=he(De,It),ko=e.jsx(be,{"aria-labelledby":k(pe,Z),"aria-label":"Show options","aria-expanded":A,"aria-controls":A?Ve:void 0,"aria-haspopup":"listbox",disabled:ue,appearance:"transparent",onClick:st,onFocus:it,tabIndex:-1,children:A?e.jsx(Q,{"aria-hidden":!0}):e.jsx(Y,{"aria-hidden":!0})}),Ho=!ee&&Ge?e.jsxs(e.Fragment,{children:[v,ko]}):v;return e.jsxs(vl,{value:q,children:[e.jsx(lu,{tabIndex:ue?void 0:-1,className:k(Xt(),{[Xt("focused")]:Be,[Xt("focusVisible")]:tt},s),endAdornment:Ho,onChange:jt,role:ee?"textbox":"combobox",disabled:ue,readOnly:ee,inputProps:{"aria-readonly":ee?"true":void 0,"aria-expanded":ee?void 0:A,"aria-controls":A&&!ee?Ve:void 0,onKeyDown:wt,...S},"aria-activedescendant":W?.id,variant:R,inputRef:F,value:Te,ref:Xe,bordered:U,...ze({onBlur:qe,onFocus:Fe,...P}),pills:g?ke.map(D=>L(D)):[],truncate:K&&!Be&&!A,onPillRemove:Rt,hidePillClose:!Be||ee,emptyReadOnlyMarker:ee&&ke.length>0?"":void 0}),e.jsx(hl,{"aria-multiselectable":g,open:(A||Be)&&!ee&&Ge,collapsed:!A,ref:Co,id:Ve,tabIndex:-1,...xe({onMouseOver:N,onFocus:Se,onClick:Se,onMouseLeave:oe,...T}),left:$e??0,top:xt??0,position:mt,width:(r=rt.floating)==null?void 0:r.offsetWidth,height:(i=rt.floating)==null?void 0:i.offsetHeight,children:u})]})});var iu=`.saltDialogActions {
  padding: var(--salt-spacing-300);
  padding-bottom: 0;
  display: flex;
  justify-content: flex-end;
  gap: var(--salt-spacing-100);
}
`;const du=$("saltDialogActions"),cu=n.forwardRef(function(a,t){const{children:r,className:i,...s}=a,c=G();return _({testId:"salt-dialog-actions",css:iu,window:c}),e.jsx("div",{className:k(du(),i),...s,ref:t,children:r})}),uu=n.forwardRef(function({children:a,...t},r){return e.jsx(se,{as:"label",ref:r,...t,children:a})});var vu=`.saltDivider-primary {
  --divider-background: var(--salt-separable-primary-borderColor);
}

.saltDivider-secondary {
  --divider-background: var(--salt-separable-secondary-borderColor);
}

.saltDivider-tertiary {
  --divider-background: var(--salt-separable-tertiary-borderColor);
}

.saltDivider {
  background: var(--divider-background);
  align-self: stretch;
  margin: 0;
  border: none;
}

.saltDivider-horizontal {
  height: var(--salt-size-fixed-100);
}

.saltDivider-vertical {
  width: var(--salt-size-fixed-100);
  height: auto;
}
`;const Jt=$("saltDivider"),hu=n.forwardRef(function(a,t){const{className:r,orientation:i="horizontal",variant:s="primary",...c}=a,u=G();return _({testId:"salt-divider",css:vu,window:u}),e.jsx("div",{className:k(Jt(),Jt(i),Jt(s),r),"aria-orientation":i,role:"separator",ref:t,...c})});var bu=`/* Styles applied to Drawer component */
.saltDrawer {
  background: var(--drawer-background);
  display: flex;
  flex-direction: column;
  max-height: 100%;
  max-width: 100%;
  overflow: auto;
  /* Legacy padding for unsectioned drawers only. */
  padding: var(--salt-spacing-300);
  box-shadow: var(--salt-overlayable-shadow-modal);
  z-index: var(--salt-zIndex-drawer);
  position: fixed;
  top: 0;
  box-sizing: border-box;
}

.saltDrawer.saltDrawer-sectioned {
  padding: 0;
}

@supports selector(:has(*)) {
  .saltDrawer:has(> .saltDrawerHeader, > .saltDrawerContent, > .saltDrawerFooter) {
    padding: 0;
  }
}

/* Styles applied when variant = "primary" */
.saltDrawer-primary {
  --drawer-background: var(--salt-container-primary-background);
}

/* Styles applied when variant = "secondary" */
.saltDrawer-secondary {
  --drawer-background: var(--salt-container-secondary-background);
}

/* Styles applied when variant = "tertiary" */
.saltDrawer-tertiary {
  --drawer-background: var(--salt-container-tertiary-background);
}

/* Styles applied when position = "top" */
.saltDrawer-top {
  left: 0;
  right: 0;
  bottom: auto;
}

/* Styles applied when position = "top" and the component mounts */
.saltDrawer-top.saltDrawer-enterAnimation {
  animation: var(--salt-animation-slide-in-bottom);
}

/* Styles applied when position = "top" and the component unmounts */
.saltDrawer-top.saltDrawer-exitAnimation {
  animation: var(--salt-animation-slide-out-bottom);
}

/* Styles applied when position = "right" */
.saltDrawer-right {
  left: auto;
  right: 0;
  height: 100%;
}

/* Styles applied when position = "right" and the component mounts */
.saltDrawer-right.saltDrawer-enterAnimation {
  animation: var(--salt-animation-slide-in-right);
}

/* Styles applied when position = "right" and the component unmounts */
.saltDrawer-right.saltDrawer-exitAnimation {
  animation: var(--salt-animation-slide-out-right);
}

/* Styles applied when position = "left" */
.saltDrawer-left {
  left: 0;
  right: auto;
  height: 100%;
}

/* Styles applied when position = "left" and the component mounts */
.saltDrawer-left.saltDrawer-enterAnimation {
  animation: var(--salt-animation-slide-in-left);
}

/* Styles applied when position = "left" and the component unmounts */
.saltDrawer-left.saltDrawer-exitAnimation {
  animation: var(--salt-animation-slide-out-left);
}

/* Styles applied when position = "bottom" */
.saltDrawer-bottom {
  left: 0;
  right: 0;
  bottom: 0;
  top: auto;
}

/* Styles applied when position = "bottom" and the component mounts */
.saltDrawer-bottom.saltDrawer-enterAnimation {
  animation: var(--salt-animation-slide-in-top);
}

/* Styles applied when position = "bottom" and the component unmounts */
.saltDrawer-bottom.saltDrawer-exitAnimation {
  animation: var(--salt-animation-slide-out-top);
}
`;const ho=_e("DrawerContext",{drawerId:void 0,headerId:void 0,setHeaderId:()=>{},descriptionId:void 0,setDescriptionId:()=>{}}),bo=()=>n.useContext(ho);var pu=`.saltDrawerContent {
  color: var(--salt-content-primary-foreground);
  padding: 0 var(--salt-spacing-300);
  flex: 1 1 auto;
  min-height: var(--salt-text-lineHeight);
  display: flex;
  box-sizing: border-box;
}

.saltDrawerContent:first-child {
  padding-top: var(--salt-spacing-300);
}

.saltDrawerContent:last-child {
  padding-bottom: var(--salt-spacing-300);
}

.saltDrawerContent-inner {
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  border-top: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) transparent;
  border-bottom: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) transparent;
  box-sizing: border-box;
}

.saltDrawerContent-inner:focus-visible {
  outline: var(--salt-focused-outline);
  outline-offset: calc(-1 * var(--salt-focused-outlineWidth));
}

.saltDrawerContent-inner.saltDrawerContent-scrollTop {
  border-top-color: var(--salt-separable-tertiary-borderColor);
}

.saltDrawerContent-inner.saltDrawerContent-scrollBottom {
  border-bottom-color: var(--salt-separable-tertiary-borderColor);
}
`;const kt=$("saltDrawerContent"),fu=n.forwardRef(function(a,t){const{children:r,className:i,onScroll:s,onScrollCapture:c,...u}=a,d=G();_({testId:"salt-drawer-content",css:pu,window:d});const{drawerId:v,headerId:h}=bo(),g=n.useRef(null),[b,m]=n.useState(!1),[f,I]=n.useState(!1),[p,z]=n.useState(!1),w=n.useCallback(()=>{const y=g.current;if(!y)return;const S=y.scrollHeight>y.clientHeight;m(S||y.scrollWidth>y.clientWidth),I(S&&y.scrollTop>0),z(S&&y.scrollHeight-y.scrollTop-y.clientHeight>1)},[]),x=y=>{d?.requestAnimationFrame(w),c?.(y)};return ba({ref:g,onResize:w}),fe(()=>{w()},[w]),e.jsx("div",{ref:t,className:k(kt(),i),...u,children:e.jsx("div",{ref:g,className:k(kt("inner"),{[kt("scrollTop")]:f,[kt("scrollBottom")]:p}),onScroll:s,onScrollCapture:x,...b&&{tabIndex:0,role:"region","aria-labelledby":h??v},children:r})})});var gu=`.saltDrawerFooter {
  padding: var(--salt-spacing-300);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--salt-spacing-100);
  flex-shrink: 0;
  box-sizing: border-box;
}
`;const xu=$("saltDrawerFooter"),mu=n.forwardRef(function(a,t){const{className:r,...i}=a,s=G();return _({testId:"salt-drawer-footer",css:gu,window:s}),e.jsx("div",{className:k(xu(),r),ref:t,...i})});var Iu=`.saltDrawerHeader {
  padding: var(--salt-spacing-300);
  display: flex;
  gap: var(--salt-spacing-100);
  flex-shrink: 0;
  box-sizing: border-box;
}

.saltDrawerHeader-header {
  margin: 0;
}

.saltDrawerHeader-container {
  flex-grow: 1;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--salt-spacing-50);
  padding-top: calc((var(--salt-size-base) - var(--salt-text-h2-lineHeight)) / 2);
  align-items: flex-start;
  min-width: 0;
  word-break: break-word;
}

.saltDrawerHeader-header > .saltText {
  display: block;
  margin: 0;
}

.saltDrawerHeader-actionsContainer {
  align-self: flex-start;
  display: flex;
}

.saltDrawerHeader-withAccent {
  position: relative;
}

.saltDrawerHeader-withAccent::before {
  content: "";
  position: absolute;
  top: var(--salt-spacing-300);
  bottom: var(--salt-spacing-300);
  left: 0;
  width: var(--salt-size-bar);
  background: var(--salt-sentiment-accent-background);
}
`;const ct=$("saltDrawerHeader"),wu=n.forwardRef(function(a,t){const{actions:r,className:i,description:s,disableAccent:c,header:u,preheader:d,...v}=a,h=G();_({testId:"salt-drawer-header",css:Iu,window:h});const{setHeaderId:g,setDescriptionId:b}=bo(),m=Re(),f=Re(),I=!!(u||d),p=!!s;return fe(()=>(g?.(I?m:void 0),()=>{g?.(void 0)}),[I,m,g]),fe(()=>(b?.(p?f:void 0),()=>{b?.(void 0)}),[p,f,b]),e.jsxs("div",{className:k(ct(),{[ct("withAccent")]:!c},i),ref:t,...v,children:[e.jsxs("div",{className:ct("container"),children:[I&&e.jsxs(eo,{id:m,className:ct("header"),children:[d&&e.jsx(se,{as:"span",color:"primary",children:d}),u]}),s&&e.jsx(se,{id:f,color:"secondary",className:ct("description"),children:s})]}),r&&e.jsx("div",{className:ct("actionsContainer"),children:r})]})}),yu=[wu,fu,mu];function po(o){return n.Children.toArray(o).some(a=>n.isValidElement(a)?a.type===n.Fragment?po(a.props.children):yu.some(t=>a.type===t):!1)}const zu=({condition:o,children:a})=>o?e.jsxs(to,{fixed:!0,children:[" ",a," "]}):e.jsxs(e.Fragment,{children:[a," "]}),ut=$("saltDrawer"),Su=n.forwardRef(function(a,t){var r,i;const{children:s,className:c,position:u="left",open:d=!1,onOpenChange:v,variant:h="primary",disableDismiss:g,disableScrim:b,initialFocus:m,id:f,"aria-labelledby":I,"aria-describedby":p,...z}=a,w=G();_({testId:"salt-drawer",css:bu,window:w});const x=Re(f),y=po(s),[S,R]=n.useState(!1),[j,V]=n.useState(void 0),[M,B]=n.useState(void 0),{Component:C}=xa(),{context:L,floating:K,elements:U}=Wt({open:S,onOpenChange:v}),{getFloatingProps:T}=Et([pa(L),Gt(L,{outsidePress:!g})]),P=he(K,t);n.useEffect(()=>{if(d&&!S&&R(!0),!d&&S){const Y=setTimeout(()=>{R(!1)},300);return()=>clearTimeout(Y)}},[d,S]);const Q=n.useMemo(()=>({drawerId:x,headerId:j,setHeaderId:V,descriptionId:M,setDescriptionId:B}),[x,j,M]);return e.jsx(ho.Provider,{value:Q,children:e.jsx(zu,{condition:S&&!b,children:e.jsx(C,{id:x,open:S,ref:P,role:"dialog",width:(r=U.floating)==null?void 0:r.offsetWidth,height:(i=U.floating)==null?void 0:i.offsetHeight,"aria-modal":"true","aria-labelledby":k(I,j)||void 0,"aria-describedby":k(p,M)||void 0,focusManagerProps:{context:L,initialFocus:m,outsideElementsInert:!0},className:k(ut(),ut(u),{[ut("enterAnimation")]:d,[ut("exitAnimation")]:!d,[ut(h)]:h,[ut("sectioned")]:y},c),...T(),...z,children:s})})})});var ju=`/* Default variables applied to the root element */
.saltFlexItem {
  --saltFlexItem-alignment: auto;
  --saltFlexItem-shrink: 1;
  --saltFlexItem-grow: 0;
  --saltFlexItem-basis: auto;
}

/* Style applied to the root element */
.saltFlexItem {
  position: relative;
  margin: var(--flexItem-margin);
  padding: var(--flexItem-padding);
  align-self: var(--saltFlexItem-alignment);
  flex-grow: var(--saltFlexItem-grow);
  flex-shrink: var(--saltFlexItem-shrink);
  flex-basis: var(--saltFlexItem-basis);
}

.saltFlexItem-stacked {
  flex-grow: 2;
}
`;const Ru=$("saltFlexItem"),Va=n.forwardRef(function({as:a,align:t,children:r,className:i,margin:s=0,padding:c=0,shrink:u,grow:d,basis:v,style:h,...g},b){const m=G();_({testId:"salt-flex-item",css:ju,window:m});const{matchedBreakpoints:f}=ua(),I=a||"div",p=we(u,f),z=we(d,f),w=we(v,f),x=we(s,f),y=we(c,f),S={"--flexItem-margin":Je(x),"--flexItem-padding":Je(y),"--saltFlexItem-alignment":t,"--saltFlexItem-shrink":p,"--saltFlexItem-grow":z,"--saltFlexItem-basis":w,...h};return e.jsx(I,{className:k(Ru(),i),ref:b,style:S,...g,children:r})});var Cu=`.saltFormField {
  display: inline-grid;
  position: relative;
  gap: var(--salt-spacing-100);
  text-align: left;
  width: var(--saltFormField-width, 100%);

  font-family: var(--salt-text-fontFamily);
  font-size: var(--salt-text-fontSize);
  font-weight: var(--salt-text-fontWeight);
  line-height: var(--salt-text-lineHeight);
  letter-spacing: var(--salt-text-letterSpacing);
}

.saltFormField-labelTop {
  gap: var(--salt-spacing-75);
  grid-auto-rows: min-content;
  grid-template-areas:
    "label"
    "controls";
}

.saltFormField-labelTop.saltFormField-hasControls {
  align-content: start;
  grid-template-rows: min-content minmax(var(--salt-size-base), auto);
}

.saltFormField-labelTop .saltFormFieldHelperText {
  grid-area: 3 / 1;
}

.saltFormField-labelLeft {
  grid-template-columns: var(--saltFormField-label-width, var(--formField-label-width, 40%)) 1fr;
  grid-template-areas: "label controls";
}

.saltFormField-labelLeft.saltFormField-hasControls {
  grid-template-rows: minmax(var(--salt-size-base), auto);
}

.saltFormField-labelRight {
  grid-template-columns: var(--saltFormField-label-width, var(--formField-label-width, 40%)) 1fr;
  grid-template-areas: "label controls";
}

.saltFormField-labelRight.saltFormField-hasControls {
  grid-template-rows: minmax(var(--salt-size-base), auto);
}

.saltFormField-labelLeft .saltFormFieldHelperText,
.saltFormField-labelRight .saltFormFieldHelperText {
  grid-area: 2 / 2;
}

.saltFormField-labelRight .saltFormFieldLabel,
.saltFormField-labelLeft .saltFormFieldLabel {
  padding-top: var(--salt-spacing-100);
}

.saltFormField-labelRight .saltFormFieldLabel {
  text-align: right;
}

.saltFormFieldLabel {
  grid-area: label;
}

.saltFormFieldHelperText {
  grid-area: helperText;
}

.saltFormField-labelTop > :not(.saltFormFieldLabel):not(.saltFormFieldHelperText) {
  align-self: center;
}

.saltFormField-disabled {
  --saltInput-outline: none;
  --saltCheckbox-outline: none;
  --saltRadioButton-outline: none;
}

@supports selector(:has(*)) {
  .saltFormField:not(:has(.saltFormFieldLabel)) {
    grid-template-areas: "controls";
  }

  .saltFormField-hasControls:not(:has(.saltFormFieldLabel)) {
    grid-template-rows: minmax(var(--salt-size-base), auto);
  }
}
`,ku=`.saltFormFieldHelperText {
  cursor: default;
  display: flex;
  flex-direction: row;
  width: 100%;
}

.saltFormFieldHelperText .saltText {
  font-style: var(--saltFormField-helperText-fontStyle, var(--salt-typography-fontStyle-italic, italic));
}

.saltFormFieldHelperText-withValidation {
  column-gap: var(--salt-spacing-75);
}

.saltFormFieldHelperText .saltFormFieldHelperText-statusIndicator {
  margin-top: calc((var(--salt-text-label-lineHeight) - max(var(--salt-size-icon), 12px)) / 2);
}
`;const Zt=$("saltFormFieldHelperText"),ia=({className:o,children:a,...t})=>{const r=G();_({testId:"salt-form-field-helper-text",css:ku,window:r});const{a11yProps:i,disabled:s,readOnly:c,validationStatus:u}=Ne();return e.jsxs("div",{className:k(Zt(),{[Zt("withValidation")]:u},o),children:[!s&&!c&&u&&e.jsx(Ot,{className:Zt("statusIndicator"),status:u}),e.jsx(se,{disabled:s,id:i?.["aria-describedby"],styleAs:"label",color:u??"secondary",...t,children:a})]})};var Hu=`.saltFormFieldLabel.saltText {
  font-size: var(--formFieldLabel-fontSize);
  line-height: var(--formFieldLabel-lineHeight);
  font-weight: var(--saltFormField-label-fontWeight, var(--formFieldLabel-fontWeight));
  width: 100%;
}

.saltFormField-labelLeft .saltFormFieldLabel.saltText {
  align-self: baseline;
  padding-top: var(--salt-spacing-100);
}

.saltFormField-labelTop .saltFormFieldLabel.saltText {
  width: fit-content;
}

.saltFormFieldLabel-label {
  --formFieldLabel-fontSize: var(--salt-text-label-fontSize);
  --formFieldLabel-lineHeight: var(--salt-text-label-lineHeight);
  --formFieldLabel-fontWeight: var(--salt-text-label-fontWeight-bolder);
  --formFieldLabel-necessity-fontWeight: var(--salt-text-label-fontWeight);
}

.saltFormFieldLabel-sentence {
  --formFieldLabel-fontSize: var(--salt-text-fontSize);
  --formFieldLabel-lineHeight: var(--salt-text-lineHeight);
  --formFieldLabel-fontWeight: var(--salt-text-fontWeight-bolder);
  --formFieldLabel-necessity-fontWeight: var(--salt-text-fontWeight);
}

.saltFormFieldLabel-necessityLabel {
  font-style: var(--salt-typography-fontStyle-italic, italic);
  font-weight: var(--formFieldLabel-necessity-fontWeight);
}
`;const Yt=$("saltFormFieldLabel"),da=({className:o,children:a,intent:t="label",onClick:r,...i})=>{const{a11yProps:s,disabled:c,necessity:u,formFieldRef:d}=Ne(),v=G();_({testId:"salt-form-field-label",css:Hu,window:v});const h=s?.["aria-labelledby"],g=m=>{if(d?.current){const f=d.current.querySelector(`[aria-labelledby*="${h}"]`);f?.focus(),f?.click()}r?.(m)},b=u?u==="asterisk"?" *":` (${gt(u)})`:void 0;return e.jsxs(uu,{className:k(Yt(),Yt(t),o),id:h,disabled:c,color:t==="sentence"?"primary":"secondary",onClick:g,...i,children:[a,b&&e.jsx("span",{className:Yt("necessityLabel"),children:b})]})},Ht=$("saltFormField");function fo(o){return n.Children.toArray(o).some(a=>n.isValidElement(a)?a.type===n.Fragment?fo(a.props.children):a.type!==da&&a.type!==ia:!0)}const La=n.forwardRef(function({children:a,className:t,disabled:r=!1,id:i,labelPlacement:s="top",necessity:c,readOnly:u=!1,validationStatus:d,...v},h){const g=G();_({testId:"salt-form-field",css:Cu,window:g});const b=n.useRef(null),m=he(h,b),f=Re(i),I=fo(a),p=f?`label-${f}`:void 0,z=f?`helperText-${f}`:void 0;return e.jsx("div",{ref:m,className:k(Ht(),{[Ht("disabled")]:r,[Ht("hasControls")]:I,[Ht(`label${gt(s)}`)]:s},t),...v,children:e.jsx(un.Provider,{value:{a11yProps:{"aria-labelledby":p,"aria-describedby":z},disabled:r,necessity:c,readOnly:u,validationStatus:d,formFieldRef:b},children:a})})});var Mu=`/* Styles applied to InteractableCard */
.saltInteractableCard {
  border-width: var(--saltInteractableCard-borderWidth, var(--salt-size-fixed-100));
  border-style: var(--saltInteractableCard-borderStyle, var(--salt-borderStyle-solid));
  border-color: var(--saltInteractableCard-borderColor, var(--interactableCard-borderColor));
  border-radius: var(--saltInteractableCard-borderRadius, var(--salt-palette-corner, 0));
  display: block;
  padding: var(--saltInteractableCard-padding, var(--card-padding));
  position: relative;
  text-align: start;
  transition: box-shadow var(--salt-duration-instant) ease-in-out;
  overflow: hidden;
  --card-accent-color: var(--salt-sentiment-accent-background);
  --interactableCard-borderColor: var(--salt-container-borderColor);
  --card-padding: var(--salt-spacing-200);
}

.saltInteractableCard.saltInteractableCard-sectioned {
  padding: 0;
  display: flex;
  flex-direction: column;
}

@supports selector(:has(*)) {
  .saltInteractableCard:has(> .saltCardHeader, > .saltCardContent, > .saltCardFooter) {
    padding: 0;
    display: flex;
    flex-direction: column;
  }
}

/* Styles applied to InteractableCard when variant="primary" */
.saltInteractableCard-primary {
  background: var(--saltInteractableCard-background, var(--salt-container-primary-background));
}

/* Styles applied to InteractableCard when variant="secondary" */
.saltInteractableCard-secondary {
  background: var(--saltInteractableCard-background, var(--salt-container-secondary-background));
}

/* Styles applied to InteractableCard when variant="tertiary" */
.saltInteractableCard-tertiary {
  background: var(--saltInteractableCard-background, var(--salt-container-tertiary-background));
}

/* Styles applied when elevation="flat" */
.saltInteractableCard-flat {
  box-shadow: var(--saltInteractableCard-boxShadow-flat, none);
}

/* Styles applied when elevation="raised" */
.saltInteractableCard-raised {
  box-shadow: var(--saltInteractableCard-boxShadow, var(--salt-overlayable-shadow));
}

/* Styles applied when borderColor="strong" */
.saltInteractableCard-borderColorStrong {
  --interactableCard-borderColor: var(--salt-container-bold-borderColor);
}

/* Styles applied when borderColor="subtle" */
.saltInteractableCard-borderColorSubtle {
  --interactableCard-borderColor: var(--salt-container-subtle-borderColor);
}

/* Styles applied when borderColor="none" */
.saltInteractableCard-borderColorNone {
  --interactableCard-borderColor: transparent;
}

/* Styles applied to create accent */
.saltInteractableCard-accent::after {
  content: "";
  position: absolute;
  background-color: var(--saltInteractableCard-accent-color, var(--card-accent-color));
}

/* Styles applied to InteractableCard if \`accent="bottom"\` */
.saltInteractableCard-accentBottom::after {
  left: calc(-1 * var(--salt-size-fixed-100));
  bottom: calc(-1 * var(--salt-size-fixed-100));
  height: var(--salt-size-bar);
  width: calc(100% + var(--salt-size-fixed-200));
}

/* Styles applied to InteractableCard if \`accent="left"\` */
.saltInteractableCard-accentLeft::after {
  left: calc(-1 * var(--salt-size-fixed-100));
  top: calc(-1 * var(--salt-size-fixed-100));
  height: calc(100% + var(--salt-size-fixed-200));
  width: var(--salt-size-bar);
}

/* Styles applied to InteractableCard if \`accent="top"\` */
.saltInteractableCard-accentTop::after {
  left: calc(-1 * var(--salt-size-fixed-100));
  top: calc(-1 * var(--salt-size-fixed-100));
  height: var(--salt-size-bar);
  width: calc(100% + var(--salt-size-fixed-200));
}

/* Styles applied to InteractableCard if \`accent="right"\` */
.saltInteractableCard-accentRight::after {
  right: calc(-1 * var(--salt-size-fixed-100));
  top: calc(-1 * var(--salt-size-fixed-100));
  height: calc(100% + var(--salt-size-fixed-200));
  width: var(--salt-size-bar);
}

/* Styles applied to InteractableCard on focus */
.saltInteractableCard:focus-visible {
  cursor: var(--salt-cursor-hover);
  box-shadow: var(--salt-overlayable-shadow-hover);
  color: var(--saltInteractableCard-color-focus, var(--salt-content-primary-foreground));
  outline-color: var(--salt-focused-outlineColor);
  outline-style: var(--salt-focused-outlineStyle);
  outline-width: var(--salt-focused-outlineWidth);
  outline-offset: var(--salt-focused-outlineOffset);
}

/* Styles applied on hover state to InteractableCard */
@media (hover: hover) {
  .saltInteractableCard:hover {
    cursor: var(--salt-cursor-hover);
    box-shadow: var(--salt-overlayable-shadow-hover);
    border-color: var(--salt-actionable-accented-borderColor-hover);
  }
}

/* Styles applied on active state to InteractableCard and if \`selected={true}\` */
.saltInteractableCard-selected,
.saltInteractableCard:active,
.saltInteractableCard-active {
  cursor: var(--salt-cursor-hover);
  box-shadow: var(--salt-overlayable-shadow);
  border-color: var(--salt-actionable-accented-borderColor-active);
}

/* Styles applied to InteractableCard if \`disabled={true}\` */
.saltInteractableCard-disabled,
.saltInteractableCard-disabled:hover,
.saltInteractableCard-disabled:active {
  border-color: var(--saltInteractableCard-borderColor, var(--interactableCard-borderColor));
  box-shadow: none;
  cursor: var(--salt-cursor-disabled);
  opacity: 0.4;
}

/* Preserve selection while suppressing disabled hover and pressed styles. */
.saltInteractableCard-disabled.saltInteractableCard-selected,
.saltInteractableCard-disabled.saltInteractableCard-selected:hover,
.saltInteractableCard-disabled.saltInteractableCard-selected:active {
  border-color: var(--salt-actionable-accented-borderColor-active);
}

/* Styles applied to nested divs in InteractableCard if \`disabled={true}\` */
.saltInteractableCard-disabled div {
  pointer-events: none;
}
`;const Bu=_e("InteractableCardGroupContext",void 0);function Vu(){return n.useContext(Bu)}const Lu=({disabled:o,onKeyUp:a,onKeyDown:t,onClick:r,onBlur:i})=>{const[s,c]=n.useState(""),[u,d]=n.useState(!1),v="Enter",h=" ";return n.useEffect(()=>{const p=setTimeout(()=>{s!==v&&s!==h&&u&&d(!1)},0);return()=>{clearTimeout(p)}},[u,s]),{active:u,cardProps:{"aria-disabled":o?!0:void 0,tabIndex:o?void 0:0,onBlur:p=>{d(!1),i?.(p)},onClick:o?void 0:p=>{d(!0),r?.(p)},onKeyDown:p=>{!o&&(p.key===v||p.key===h)&&(c(p.key),p.preventDefault(),d(!0),r?.(p)),t?.(p)},onKeyUp:p=>{c(""),d(!1),a?.(p)}}}},Oe=$("saltInteractableCard"),Au=n.forwardRef(function(a,t){const{accent:r,accentPlacement:i,borderColor:s,children:c,className:u,disabled:d,elevation:v="raised",variant:h="primary",value:g,onBlur:b,onChange:m,onClick:f,onKeyUp:I,onKeyDown:p,...z}=a,w=G();_({testId:"salt-interactable-card",css:Mu,window:w});const x=Vu(),y=x?.isSelected(g),S=x?.disabled||d,[R,j]=ge({controlled:y,default:!1,name:"InteractableCard",state:"selected"}),V=x?x.multiSelect?"checkbox":"radio":"button",M=x?.multiSelect,B=x?.isFirstChild(g),C=V==="radio"||V==="checkbox"?R:void 0,L=r||i,K=ne=>{S||(x&&(x.select(ne,g),j(!R)),m?.(ne),f?.(ne))};let U;S?U=void 0:x?M?U=0:(U=R?0:-1,!(x.hasEnabledSelection??!!x.value)&&B&&(U=0)):U=0;const T=n.useRef(null),P=he(t,T),Q=x?.registerCard;fe(()=>{if(!S&&T.current&&Q)return Q(g,T.current)},[S,Q,g]);const{active:Y,cardProps:Z}=Lu({disabled:S,onKeyUp:I,onKeyDown:p,onBlur:b,onClick:f}),ie=tl(c);return e.jsx("div",{...Z,role:V,"aria-checked":C,"aria-disabled":S,"data-value":g,className:k(Oe(),Oe(h),s&&Oe(`borderColor${gt(s)}`),{[Oe("accent")]:L,[Oe(`accent${gt(L??"")}`)]:L,[Oe(v||"")]:v,[Oe("active")]:V==="button"&&Y,[Oe("disabled")]:S,[Oe("selected")]:R,[Oe("sectioned")]:ie},u),...z,onClick:K,ref:P,tabIndex:U,children:c})});var Tu=`.saltLink {
  --link-color: "inherit";
  --link-color-hover: "inherit";
  --link-color-active: "inherit";
  --link-color-visited: var(--salt-content-foreground-visited, var(--link-color));
  --link-color-focus: "inherit";
  --link-focus-outlineColor: currentColor;

  --link-fontFamily: var(--salt-text-fontFamily);
}

.saltLink-underlineDefault {
  --link-textDecoration: var(--salt-typography-textDecoration-underline);
  --link-textDecoration-hover: var(--salt-typography-textDecoration-none);
  /* Active takes default */
  --link-textDecoration-active: var(--link-textDecoration);
  /* Focus takes hover */
  --link-textDecoration-focus: var(--link-textDecoration-hover);
  /* Visited takes default */
  --link-textDecoration-visited: var(--link-textDecoration);
}

.saltLink-underlineNever {
  --link-textDecoration: var(--salt-typography-textDecoration-none);
  --link-textDecoration-hover: var(--salt-typography-textDecoration-none);
}

/* Main css class */
.saltLink.saltText {
  color: var(--link-color);
  letter-spacing: var(--salt-text-letterSpacing);
  text-decoration: var(--link-textDecoration);
  font-family: var(--link-fontFamily);
}

/* Primary variant */
.saltLink-primary {
  --link-color: var(--salt-content-primary-foreground);
  --link-color-hover: var(--salt-content-primary-foreground);
  --link-color-active: var(--salt-content-primary-foreground);
  --link-color-focus: var(--salt-content-primary-foreground);
  --link-focus-outlineColor: var(--salt-focused-outlineColor);
  --link-color-visited: var(--salt-content-foreground-visited, var(--link-color));
}

/* Secondary variant */
.saltLink-secondary {
  --link-color: var(--salt-content-secondary-foreground);
  --link-color-hover: var(--salt-content-secondary-foreground);
  --link-color-active: var(--salt-content-secondary-foreground);
  --link-color-focus: var(--salt-content-secondary-foreground);
  --link-focus-outlineColor: var(--salt-focused-outlineColor);
  --link-color-visited: var(--salt-content-foreground-visited, var(--link-color));
}

.saltLink-accent {
  --link-color: var(--salt-content-accent-foreground);
  --link-color-hover: var(--salt-content-accent-foreground);
  --link-color-active: var(--salt-content-accent-foreground);
  --link-color-focus: var(--salt-content-accent-foreground);
  --link-focus-outlineColor: var(--salt-focused-outlineColor);
  --link-color-visited: var(--salt-content-foreground-visited, var(--link-color));
}

/* External link's icon */
.saltLink .saltLink-icon {
  margin-left: var(--salt-spacing-75);
  margin-bottom: -2px;
}

/* Set color for visited link */
.saltLink:visited {
  color: var(--saltLink-color-visited, var(--link-color-visited));
  text-decoration: var(--link-textDecoration-visited);
}

/* Set color for hovered link */
.saltLink:hover {
  color: var(--saltLink-color-hover, var(--link-color-hover));
  text-decoration: var(--link-textDecoration-hover);
}

/* Set color for active link */
.saltLink:active {
  color: var(--saltLink-color-active, var(--link-color-active));
  text-decoration: var(--link-textDecoration-active);
}

/* Set color for focused link */
.saltLink:focus {
  color: var(--saltLink-color-focus, var(--link-color-focus));
  outline: var(--salt-focused-outline);
  outline-color: var(--link-focus-outlineColor);
  text-decoration: var(--link-textDecoration-focus);
}

/* Class for ADA content - visually hidden but accessible to screen readers.
   Uses clip-path and prevents user selection so the text isn't included
   when users copy the link's visible content. */
.saltLink-externalLinkADA {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
}
`;const qu=n.forwardRef(function({externalLinkContent:a,...t},r){const i=T5("a",{...t,ref:r}),s=i.props;return s.target!=="_blank"||!a?i:n.cloneElement(i,void 0,e.jsxs(e.Fragment,{children:[s.children,a]}))}),yt=$("saltLink"),Pu=n.forwardRef(function({IconComponent:a,href:t,className:r,children:i,color:s,variant:c,target:u="_self",underline:d="default",...v},h){const g=G();_({testId:"salt-link",css:Tu,window:g});const{ExternalIcon:b}=Ye(),m=c??s??"primary",f=a===void 0?b:a;return e.jsx(se,{as:qu,className:k(yt(),yt(`underline${gt(d)}`),{[yt(m)]:m!=="inherit"},r),href:t,ref:h,target:u,color:"inherit",externalLinkContent:e.jsxs(e.Fragment,{children:[f&&e.jsx(f,{className:yt("icon"),"aria-hidden":!0}),e.jsx("span",{className:yt("externalLinkADA"),children:"Opens in a new tab"})]}),...v,children:i})});var Nu=`/* Style applied to the root element */
.saltMultilineInput {
  display: inline-grid;
  grid-template-areas: "start-adornment textarea end-adornment";
  grid-template-columns: min-content 1fr min-content;
  grid-template-rows: 1fr;
  background: var(--multilineInput-background);
  border-radius: var(--salt-palette-corner-weak, 0);
  color: var(--salt-content-primary-foreground);
  font-family: var(--salt-text-fontFamily);
  font-size: var(--salt-text-fontSize);
  line-height: var(--salt-text-lineHeight);
  letter-spacing: var(--salt-text-letterSpacing);
  min-height: var(--salt-size-base);
  min-width: 4em;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  padding: 0 var(--salt-spacing-100);
}

.saltMultilineInput-wrapper {
  grid-area: textarea;
  overflow: hidden;
  margin: var(--salt-spacing-75) 0;
  display: flex;
}

/* Style applied on hover */
.saltMultilineInput:hover {
  cursor: var(--salt-cursor-text);
}

/* Style applied if \`bordered={true}\` */
.saltMultilineInput-bordered.saltMultilineInput {
  border: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) var(--multilineInput-borderColor);
}

.saltMultilineInput-bordered.saltMultilineInput:hover {
  border-style: var(--salt-borderStyle-solid);
  border-color: var(--multilineInput-borderColor-hover);
}

/* Style applied if focused or active when \`bordered={true}\` */
.saltMultilineInput-bordered.saltMultilineInput-focused,
.saltMultilineInput-bordered.saltMultilineInput-focused:hover {
  border-style: var(--salt-borderStyle-solid);
  border-color: var(--multilineInput-borderColor-active);
}

/* Styling when focused if \`disabled={true}\` or \`readOnly={true}\` when \`bordered={true}\` */
.saltMultilineInput-bordered.saltMultilineInput-readOnly,
.saltMultilineInput-bordered.saltMultilineInput-readOnly:hover {
  border-style: var(--salt-borderStyle-solid);
  border-color: var(--salt-editable-borderColor-readonly);
}

.saltMultilineInput-bordered.saltMultilineInput-disabled,
.saltMultilineInput-bordered.saltMultilineInput-disabled:hover {
  border-style: var(--salt-borderStyle-solid);
  border-color: var(--salt-editable-borderColor-disabled);
}

/* Style for activation indicator */
.saltMultilineInput-activationIndicator {
  left: 0;
  bottom: 0;
  width: 100%;
  position: absolute;
  border-bottom: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) var(--multilineInput-borderColor);
}

.saltMultilineInput:hover .saltMultilineInput-activationIndicator {
  border-bottom-style: var(--salt-borderStyle-solid);
  border-bottom-color: var(--multilineInput-borderColor-hover);
}

.saltMultilineInput-focused .saltMultilineInput-activationIndicator,
.saltMultilineInput-focused:hover .saltMultilineInput-activationIndicator {
  border-bottom: var(--salt-size-fixed-200) var(--salt-borderStyle-solid) var(--multilineInput-borderColor-active);
}

.saltMultilineInput-readOnly .saltMultilineInput-activationIndicator,
.saltMultilineInput-readOnly:hover .saltMultilineInput-activationIndicator {
  border-bottom-style: var(--salt-borderStyle-solid);
  border-bottom-color: var(--salt-editable-borderColor-readonly);
}

.saltMultilineInput-disabled .saltMultilineInput-activationIndicator,
.saltMultilineInput-disabled:hover .saltMultilineInput-activationIndicator {
  border-bottom-style: var(--salt-borderStyle-solid);
  border-bottom-color: var(--salt-editable-borderColor-disabled);
}

.saltMultilineInput-bordered .saltMultilineInput-activationIndicator,
.saltMultilineInput-bordered.saltMultilineInput-readOnly .saltMultilineInput-activationIndicator,
.saltMultilineInput-bordered.saltMultilineInput-disabled:hover .saltMultilineInput-activationIndicator {
  border-bottom-width: 0;
}

.saltMultilineInput-bordered.saltMultilineInput-focused .saltMultilineInput-activationIndicator {
  /* Activation indicator width minus the border from the input. */
  border-bottom-width: var(--salt-size-fixed-100);
}

/* Class applied if \`variant="primary"\` */
.saltMultilineInput-primary {
  --multilineInput-background: var(--salt-editable-primary-background);
  --multilineInput-background-disabled: var(--salt-editable-primary-background-disabled);
  --multilineInput-background-readonly: var(--salt-editable-background-readonly);
  --multilineInput-borderColor: var(--salt-editable-borderColor);
  --multilineInput-borderColor-active: var(--salt-editable-borderColor-active);
  --multilineInput-borderColor-hover: var(--salt-editable-borderColor-hover);
  --multilineInput-outlineColor: var(--salt-focused-outlineColor);
}

/* Class applied if \`variant="secondary"\` */
.saltMultilineInput-secondary {
  --multilineInput-background: var(--salt-editable-secondary-background);
  --multilineInput-background-disabled: var(--salt-editable-secondary-background-disabled);
  --multilineInput-background-readonly: var(--salt-editable-background-readonly);
  --multilineInput-borderColor: var(--salt-editable-borderColor);
  --multilineInput-borderColor-active: var(--salt-editable-borderColor-active);
  --multilineInput-borderColor-hover: var(--salt-editable-borderColor-hover);
  --multilineInput-outlineColor: var(--salt-focused-outlineColor);
}

/* Class applied if \`variant="tertiary"\` */
.saltMultilineInput-tertiary {
  --multilineInput-background: var(--salt-editable-tertiary-background);
  --multilineInput-background-disabled: var(--salt-editable-tertiary-background-disabled);
  --multilineInput-background-readonly: var(--salt-editable-background-readonly);
  --multilineInput-borderColor: var(--salt-editable-borderColor);
  --multilineInput-borderColor-active: var(--salt-editable-borderColor-active);
  --multilineInput-borderColor-hover: var(--salt-editable-borderColor-hover);
  --multilineInput-outlineColor: var(--salt-focused-outlineColor);
}

/* Style applied to input if \`validationState="error"\` */
.saltMultilineInput-error {
  --multilineInput-background: var(--salt-status-error-background);
  --multilineInput-background-readonly: var(--salt-status-error-background);
  --multilineInput-borderColor: var(--salt-status-error-borderColor);
  --multilineInput-borderColor-active: var(--salt-status-error-borderColor);
  --multilineInput-borderColor-hover: var(--salt-status-error-borderColor);
  --multilineInput-outlineColor: var(--salt-status-error-borderColor);
}

/* Style applied to input if \`validationState="warning"\` */
.saltMultilineInput-warning {
  --multilineInput-background: var(--salt-status-warning-background);
  --multilineInput-background-readonly: var(--salt-status-warning-background);
  --multilineInput-borderColor: var(--salt-status-warning-borderColor);
  --multilineInput-borderColor-active: var(--salt-status-warning-borderColor);
  --multilineInput-borderColor-hover: var(--salt-status-warning-borderColor);
  --multilineInput-outlineColor: var(--salt-status-warning-borderColor);
}

/* Style applied to input if \`validationState="success"\` */
.saltMultilineInput-success {
  --multilineInput-background: var(--salt-status-success-background);
  --multilineInput-background-readonly: var(--salt-status-success-background);
  --multilineInput-borderColor: var(--salt-status-success-borderColor);
  --multilineInput-borderColor-active: var(--salt-status-success-borderColor);
  --multilineInput-borderColor-hover: var(--salt-status-success-borderColor);
  --multilineInput-outlineColor: var(--salt-status-success-borderColor);
}

/* Styling when focused */
.saltMultilineInput-focused,
.saltMultilineInput-focused:hover {
  cursor: var(--salt-cursor-text);
  outline: var(--salt-focused-outlineWidth) var(--salt-focused-outlineStyle) var(--multilineInput-outlineColor);
}

/* Style applied if \`readOnly={true}\` */
.saltMultilineInput.saltMultilineInput-readOnly {
  background: var(--multilineInput-background-readonly);
  cursor: var(--salt-cursor-readonly);
}

/* Style applied to input if \`disabled={true}\` */
.saltMultilineInput.saltMultilineInput-disabled,
.saltMultilineInput.saltMultilineInput-disabled:hover {
  background: var(--input-background-disabled);
  cursor: var(--salt-cursor-disabled);
  color: var(--salt-content-primary-foreground-disabled);
}

.saltMultilineInput-disabled .saltMultilineInput-textarea {
  cursor: var(--salt-cursor-disabled);
}

.saltMultilineInput.saltMultilineInput-withAdornmentRow {
  grid-template-areas: "start-adornment textarea" "end-adornment end-adornment";
  grid-template-columns: min-content 1fr;
  grid-template-rows: 1fr auto;
}

/* Style applied to adornment containers */
.saltMultilineInput-endAdornmentContainer,
.saltMultilineInput-startAdornmentContainer {
  align-items: center;
  display: inline-flex;
  min-height: var(--salt-size-base);
  column-gap: var(--salt-spacing-100);
}

/* Style applied to start adornment container */
.saltMultilineInput-startAdornmentContainer {
  align-self: self-start;
  padding-right: var(--salt-spacing-100);
  grid-area: start-adornment;
}

/* Style applied to suffix adornment container */
.saltMultilineInput-suffixAdornments {
  align-self: self-end;
  grid-area: end-adornment;
}

/* Style applied to suffix adornment container when end adornments are provided */
.saltMultilineInput-withAdornmentRow .saltMultilineInput-suffixAdornments {
  display: inline-flex;
  flex-basis: 100%;
  justify-content: flex-end;
}

/* Style applied to end adornment container */
.saltMultilineInput-endAdornmentContainer {
  padding-left: var(--salt-spacing-100);
}

/* Style applied to status adornment container */
.saltMultilineInput-statusAdornmentContainer {
  align-self: self-end;
  display: inline-flex;
  min-height: var(--salt-size-base);
}

/* Style applied to button start adornment if first child */
.saltMultilineInput-startAdornmentContainer .saltButton:first-child {
  margin-left: calc(var(--salt-spacing-50) * -1);
}

/* Style applied to button end adornment if last child */
.saltMultilineInput-endAdornmentContainer .saltButton:last-child {
  margin-right: calc(var(--salt-spacing-50) * -1);
}

/* Style applied to button end adornment if last child */
.saltMultilineInput-readOnly .saltMultilineInput-endAdornmentContainer .saltButton:last-child {
  margin-right: 0;
}

/* Styles for button adornment */
.saltMultilineInput-startAdornmentContainer > .saltButton,
.saltMultilineInput-endAdornmentContainer > .saltButton {
  --saltButton-padding: calc(var(--salt-spacing-50) - var(--button-borderWidth));
  --saltButton-height: calc(var(--salt-size-base) - var(--salt-spacing-100));
  --saltButton-borderRadius: var(--salt-palette-corner-weaker);
}

/* Style applied to inner textarea element */
.saltMultilineInput-textarea {
  appearance: none;
  background: none;
  border: 0;
  color: inherit;
  font: inherit;
  resize: vertical;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  min-height: 0;
  min-width: 0;
  max-height: 100%;
  overflow: auto;
}

/* Style applied to placeholder */
.saltMultilineInput-textarea::placeholder {
  font-weight: var(--salt-text-fontWeight-lighter);
}

/* Reset in the  class */
.saltMultilineInput-textarea:focus {
  outline: none;
}

/* Style applied to selected text if \`disabled={true}\` */
.saltMultilineInput-disabled .saltMultilineInput-textarea::selection {
  background: none;
}
`;const je=$("saltMultilineInput"),Du=n.forwardRef(function({"aria-activedescendant":a,"aria-expanded":t,"aria-owns":r,bordered:i=!1,className:s,disabled:c,endAdornment:u,id:d,name:v,placeholder:h,readOnly:g,role:b,rows:m=3,startAdornment:f,style:I,textAreaProps:p={},textAreaRef:z,value:w,defaultValue:x=w===void 0?"":void 0,validationStatus:y,variant:S="primary",...R},j){const[V,M]=n.useState(null),B=n.useCallback(re=>{M(re)},[]),C=he(B,z),L=G();_({testId:"salt-multiline-input",css:Nu,window:L});const K={"aria-activedescendant":a,"aria-expanded":t,"aria-owns":r},[U,T]=n.useState(!1),{"aria-describedby":P,"aria-labelledby":Q,onBlur:Y,onChange:Z,onFocus:ie,required:ne,...ue}=p,{a11yProps:{"aria-describedby":ee,"aria-labelledby":le}={},disabled:F,readOnly:H,necessity:q,validationStatus:W}=Ne(),O=c||F,A=g||H,E=W??y,ae=q?["required","asterisk"].includes(q):ne,[te,J]=ge({controlled:w,default:x,name:"MultilineInput",state:"value"}),de=n.useRef(void 0),He=n.useCallback(()=>{const re=V;if(!re)return;if(!(de.current!==void 0&&re.style.height!==de.current)){const tt=re.style.overflow;re.style.overflow="hidden",re.style.height="auto";const Me=`${re.scrollHeight+(re.offsetHeight-re.clientHeight)}px`;re.style.height=Me,de.current=Me,re.style.overflow=tt}},[V]),Ce=re=>{const We=re.target.value;J(We),Z?.(re),He()};fe(()=>{He()},[te,He]);const Ke=re=>{Y?.(re),T(!1)},Qe=re=>{ie?.(re),T(!0)},ke={"--saltMultilineInput-rows":m,...I};return e.jsxs("div",{className:k(je(),je(S),{[je("withAdornmentRow")]:u,[je("bordered")]:i,[je("focused")]:!O&&U,[je("disabled")]:O,[je("readOnly")]:A,[je(E??"")]:E},s),ref:j,style:ke,...R,children:[f&&e.jsx("div",{className:je("startAdornmentContainer"),children:f}),e.jsx("div",{className:je("wrapper"),children:e.jsx("textarea",{"aria-describedby":k(ee,P)||void 0,"aria-labelledby":k(le,Q)||void 0,className:k(je("textarea"),p?.className),disabled:O,id:d,name:v,readOnly:A,ref:C,required:ae,role:b,rows:m,tabIndex:O?-1:0,onBlur:Ke,onChange:Ce,onFocus:O?void 0:Qe,placeholder:h,value:te,...K,...ue})}),e.jsxs("div",{className:je("suffixAdornments"),children:[!O&&E&&e.jsx("div",{className:je("statusAdornmentContainer"),children:e.jsx(va,{status:E})}),u&&e.jsx("div",{className:je("endAdornmentContainer"),children:u})]}),e.jsx("div",{className:je("activationIndicator")})]})});function Fu(o,a){const t=n.useRef(null);n.useEffect(()=>{t.current=o}),n.useEffect(()=>{function r(){t.current!==null&&t.current()}if(a!==null){const i=setInterval(r,a);return()=>clearInterval(i)}},[a])}const ea=500,Ou=100;function Aa(o,a){const[t,r]=n.useState(!1),[i,s]=n.useState(ea),c=n.useCallback(()=>{r(!1),s(ea)},[]);n.useEffect(()=>{a&&c()},[a,c]);const u=G();n.useEffect(()=>(u&&(u.addEventListener("pointerup",c),u.addEventListener("pointercancel",c),u.addEventListener("blur",c),u.addEventListener("contextmenu",c)),()=>{u&&(u.removeEventListener("pointerup",c),u.removeEventListener("pointercancel",c),u.removeEventListener("blur",c),u.removeEventListener("contextmenu",c))}),[c,u]);const d=n.useCallback(v=>{(v.pointerType==="mouse"&&v.button===0||v.pointerType==="touch"||v.pointerType==="pen")&&(o(v),r(!0))},[o]);return Fu(()=>{t&&(o(),i===ea&&s(Ou))},t?i:null),d}var Wu=`/* Styles applied to number container */
.saltNumberInput {
  --numberInput-border: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) var(--numberInput-borderColor);
  --numberInput-borderColor: var(--salt-editable-borderColor);
  --numberInput-borderStyle: var(--salt-borderStyle-solid);
  --numberInput-outlineColor: var(--salt-focused-outlineColor);
  --numberInput-borderWidth: var(--salt-size-fixed-100);
  --numberInput-outline: none;

  align-items: center;
  background: var(--numberInput-background);
  border-radius: var(--salt-palette-corner-weak, 0);
  box-sizing: border-box;
  color: var(--salt-content-primary-foreground);
  display: inline-flex;
  font-family: var(--salt-text-fontFamily);
  font-size: var(--salt-text-fontSize);
  gap: var(--salt-spacing-50);
  height: var(--salt-size-base);
  min-height: var(--salt-size-base);
  min-width: 4em;
  overflow: hidden;
  outline: var(--numberInput-outline);
  padding-left: var(--salt-spacing-100);
  padding-right: var(--salt-spacing-50);
  padding-top: var(--salt-spacing-50);
  padding-bottom: var(--salt-spacing-50);
  position: relative;
  width: 100%;
}

.saltNumberInput:hover {
  --numberInput-borderStyle: var(--salt-borderStyle-solid);
  --numberInput-borderColor: var(--salt-editable-borderColor-hover);

  cursor: var(--salt-cursor-text);
}

.saltNumberInput:active {
  --numberInput-borderColor: var(--salt-editable-borderColor-active);
  --numberInput-borderStyle: var(--salt-borderStyle-solid);
  --numberInput-borderWidth: var(--salt-size-fixed-200);

  background: var(--numberInput-background-active);
}

/* Class applied if \`variant="primary"\` */
.saltNumberInput-primary {
  --numberInput-background: var(--salt-editable-primary-background);
  --numberInput-background-disabled: var(--salt-editable-primary-background-disabled);
  --numberInput-background-readonly: var(--salt-editable-background-readonly);
}

/* Class applied if \`variant="secondary"\` */
.saltNumberInput-secondary {
  --numberInput-background: var(--salt-editable-secondary-background);
  --numberInput-background-disabled: var(--salt-editable-secondary-background-disabled);
  --numberInput-background-readonly: var(--salt-editable-background-readonly);
}

/* Class applied if \`variant="tertiary"\` */
.saltNumberInput-tertiary {
  --numberInput-background: var(--salt-editable-tertiary-background);
  --numberInput-background-disabled: var(--salt-editable-tertiary-background-disabled);
  --numberInput-background-readonly: var(--salt-editable-background-readonly);
}

/* Style applied to input if \`validationState="error"\` */
.saltNumberInput-error,
.saltNumberInput-error:hover {
  --numberInput-background: var(--salt-status-error-background);
  --numberInput-borderColor: var(--salt-status-error-borderColor);
  --numberInput-outlineColor: var(--salt-status-error-borderColor);
  --numberInput-background-readonly: var(--salt-status-error-background);
}

/* Style applied to input if \`validationState="warning"\` */
.saltNumberInput-warning,
.saltNumberInput-warning:hover {
  --numberInput-background: var(--salt-status-warning-background);
  --numberInput-borderColor: var(--salt-status-warning-borderColor);
  --numberInput-outlineColor: var(--salt-status-warning-borderColor);
  --numberInput-background-readonly: var(--salt-status-warning-background);
}

/* Style applied to input if \`validationState="success"\` */
.saltNumberInput-success,
.saltNumberInput-success:hover {
  --numberInput-background: var(--salt-status-success-background);
  --numberInput-borderColor: var(--salt-status-success-borderColor);
  --numberInput-outlineColor: var(--salt-status-success-borderColor);
  --numberInput-background-readonly: var(--salt-status-success-background);
}

/* Style applied to inner input component */
.saltNumberInput-input {
  background: none;
  border: none;
  box-sizing: content-box;
  color: inherit;
  cursor: inherit;
  display: block;
  flex: 1;
  font: inherit;
  letter-spacing: var(--salt-text-letterSpacing);
  line-height: var(--salt-text-lineHeight);
  margin: 0;
  min-width: 0;
  padding: 0;
  text-align: var(--numberInput-textAlign);
  width: 100%;
}

.saltNumberInput-input:focus {
  outline: none;
}

/* Style applied to placeholder text */
.saltNumberInput-input::placeholder {
  color: var(--salt-content-secondary-foreground);
  font-weight: var(--salt-text-fontWeight-lighter);
}

/* Styling when focused */
.saltNumberInput-focused {
  --numberInput-borderColor: var(--numberInput-outlineColor);
  --numberInput-borderWidth: var(--salt-size-fixed-200);

  outline: var(--saltNumberInput-outline, var(--salt-focused-outlineWidth) var(--salt-focused-outlineStyle) var(--numberInput-outlineColor));
}

/* Style applied if \`bordered={true}\` */
.saltNumberInput-bordered {
  --numberInput-border: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) var(--numberInput-borderColor);
  --numberInput-borderWidth: 0;

  border: var(--numberInput-border);
}

/* Style applied if focused or active when \`bordered={true}\` */
.saltNumberInput-bordered.saltNumberInput-focused,
.saltNumberInput-bordered:active {
  --numberInput-borderWidth: var(--salt-size-fixed-200);
}

/* Styling when focused if \`disabled={true}\` or \`readOnly={true}\` when \`bordered={true}\` */
.saltNumberInput-bordered.saltNumberInput-readOnly,
.saltNumberInput-bordered.saltNumberInput-disabled:hover {
  --numberInput-borderWidth: 0;
}

/* Styling when focused and hovered when \`bordered={true}\` */
.saltNumberInput-bordered.saltNumberInput-focused:hover {
  --numberInput-borderColor: var(--salt-editable-borderColor-active);
}

/* Style applied if \`readOnly={true}\` */
.saltNumberInput-readOnly,
.saltNumberInput-bordered.saltNumberInput-readOnly {
  --numberInput-borderColor: var(--salt-editable-borderColor-readonly);
  --numberInput-borderStyle: var(--salt-borderStyle-solid);
  --numberInput-borderWidth: var(--salt-size-fixed-100);

  background: var(--numberInput-background-readonly);
  cursor: var(--salt-cursor-readonly);
}

/* Styling when focused if \`disabled={true}\` */
.saltNumberInput-focused.saltNumberInput-disabled {
  --numberInput-borderWidth: var(--salt-size-fixed-100);
  outline: none;
}

/* Styling when focused if \`readOnly={true}\` */
.saltNumberInput-focused.saltNumberInput-readOnly {
  --numberInput-borderWidth: var(--salt-size-fixed-100);
}

.saltNumberInput:hover.saltNumberInput-readOnly {
  --numberInput-borderColor: var(--salt-editable-borderColor-readonly);
}

/* Style applied to selected input if \`disabled={true}\` */
.saltNumberInput-disabled .saltNumberInput-input::selection {
  background: none;
}

/* Style applied to input if \`disabled={true}\` */
.saltNumberInput-disabled,
.saltNumberInput-disabled:hover,
.saltNumberInput-disabled:active {
  --numberInput-borderColor: var(--salt-editable-borderColor-disabled);
  --numberInput-borderStyle: var(--salt-borderStyle-solid);
  --numberInput-borderWidth: var(--salt-size-fixed-100);

  background: var(--numberInput-background-disabled);
  cursor: var(--salt-cursor-disabled);
  color: var(--saltNumberInput-color-disabled, var(--salt-content-primary-foreground-disabled));
}

/* Style applied to start adornments */
.saltNumberInput-startAdornmentContainer {
  align-items: center;
  display: inline-flex;
  padding-right: var(--salt-spacing-100);
  column-gap: var(--salt-spacing-100);
}

/* Style applied to end adornments */
.saltNumberInput-endAdornmentContainer {
  align-items: center;
  display: inline-flex;
  padding-left: var(--salt-spacing-100);
  column-gap: var(--salt-spacing-100);
}

.saltNumberInput-startAdornmentContainer {
  margin-left: calc(var(--salt-spacing-50) * -1);
}

.saltNumberInput-startAdornmentContainer > .saltButton,
.saltNumberInput-endAdornmentContainer > .saltButton {
  --saltButton-padding: calc(var(--salt-spacing-50) - var(--button-borderWidth));
  --saltButton-height: calc(var(--salt-size-base) - var(--salt-spacing-100));
  --saltButton-borderRadius: var(--salt-palette-corner-weaker);
}

.saltNumberInput-inputTextAlignLeft {
  --numberInput-textAlign: left;
}

.saltNumberInput-inputTextAlignCenter {
  --numberInput-textAlign: center;
}

.saltNumberInput-inputTextAlignRight {
  --numberInput-textAlign: right;
}

/* --- Buttons --- */

/* Styles applied to number buttons container */
.saltNumberInput-buttonContainer {
  --numberInput-buttonGap: var(--salt-spacing-fixed-200);
  display: flex;
  flex-direction: column;
  gap: var(--numberInput-buttonGap);
  justify-content: center;
}

.saltNumberInput-hiddenButtons .saltNumberInput-buttonContainer {
  display: none;
}

.saltNumberInput-activationIndicator {
  left: 0;
  bottom: 0;
  width: 100%;
  position: absolute;
  border-bottom: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) var(--numberInput-borderColor);
}

.saltNumberInput-focused .saltNumberInput-activationIndicator {
  border-bottom: var(--salt-size-fixed-200) var(--salt-borderStyle-solid) var(--salt-editable-borderColor-active);
}

.saltNumberInput-bordered.saltNumberInput-focused .saltNumberInput-activationIndicator {
  /* Activation indicator width minus the border from the number input. */
  border-bottom-width: var(--salt-size-fixed-100);
}

.saltNumberInput-bordered .saltNumberInput-activationIndicator,
.saltNumberInput-readOnly.saltNumberInput-focused .saltNumberInput-activationIndicator {
  border-bottom-width: 0;
}

.saltNumberInput-increment {
  --saltButton-borderRadius: var(--salt-palette-corner-weaker, 0) var(--salt-palette-corner-weaker, 0) 0 0;
}

.saltNumberInput-decrement {
  --saltButton-borderRadius: 0 0 var(--salt-palette-corner-weaker, 0) var(--salt-palette-corner-weaker, 0);
}

/* Styles applied to number buttons */
.saltNumberInput-increment,
.saltNumberInput-decrement {
  --saltButton-height: calc((var(--salt-size-base) - (var(--salt-spacing-50) * 2) - var(--salt-size-fixed-200)) / 2);
  --saltButton-padding: calc(var(--salt-spacing-50) - var(--button-borderWidth));
}
`;const Ie=$("saltNumberInput"),Eu=(o,a,t)=>{if(typeof o=="string"&&!o.length)return!0;const r=typeof o=="string"?Number.parseFloat(o):o;return Number.isNaN(r)||r>t||r<a};function Ta(o){const a=String(o);if(a.includes("e")||a.includes("E")){const[t,r]=a.split(/[eE]/),s=(t.split(".")[1]||"").length-Number.parseInt(r,10);return Math.max(0,s)}return a.includes(".")?a.split(".")[1].length:0}const Gu=o=>/^[+-]?(\d+(\.\d*)?|\.\d*)?$/.test(o),$u=(o,a,t,r)=>{const i=r(o)??0,s=a*t;return String(i-s)},Uu=(o,a,t,r)=>{const i=r(o)??0,s=a*t;return String(i+s)},_u=(o,a)=>{const t=o.trim();if(!t.length)return"";const r=Number.parseFloat(t),i=Number.isNaN(r)?t:r.toFixed(a);return String(i)},Ku=(o,a)=>{const t=o.trim();if(!t.length)return null;if(t==="."||t==="+"||t==="-")return 0;const r=Number.parseFloat(o).toFixed(a);return Number.parseFloat(r)},Qu=n.forwardRef(function(a,t){const{className:r,props:i}=Ft("saltNumberInput",a),{"aria-valuetext":s,bordered:c,clamp:u,step:d=1,stepMultiplier:v=2,value:h,defaultValue:g,decimalScale:b=Math.max(Ta(h??g??0),Ta(d)),disabled:m,emptyReadOnlyMarker:f="—",endAdornment:I,format:p=N=>_u(N,b),hideButtons:z,id:w,pattern:x=Gu,inputProps:y={},inputRef:S,max:R=Number.MAX_SAFE_INTEGER,min:j=Number.MIN_SAFE_INTEGER,name:V,onBlur:M,onChange:B,onMouseUp:C,onNumberChange:L,parse:K=N=>Ku(N,b),placeholder:U,readOnly:T,startAdornment:P,decrement:Q=(N,oe,Se)=>$u(N,oe,Se,K),increment:Y=(N,oe,Se)=>Uu(N,oe,Se,K),textAlign:Z="left",validationStatus:ie,variant:ne="primary",...ue}=i,ee=G();_({testId:"salt-number-input",css:Wu,window:ee});const{a11yProps:{"aria-describedby":le,"aria-labelledby":F}={},disabled:H,readOnly:q,necessity:W,validationStatus:O}=Ne(),A=m||H,E=T||q,ae=O??ie,te=Re(w),J=n.useRef(null),de=he(S,J),{"aria-describedby":He,"aria-labelledby":Ce,className:Ke,onBlur:Qe,onFocus:ke,required:re,onKeyDown:We,...tt}=y,Me=W?["required","asterisk"].includes(W):re,[Be,at]=n.useState(!1),[ot,De]=n.useState(!1),{DecreaseIcon:Te,IncreaseIcon:Ee}=Ye(),[ye,nt]=ge({controlled:h!==void 0?String(h):void 0,default:String(g??""),name:"NumberInput",state:"value"}),Ge=n.useRef(ye),$e=(N,oe,Se)=>{let pe=oe;pe!==null&&!Number.isNaN(pe)?(pe=Math.max(Number.MIN_SAFE_INTEGER,Math.min(Number.MAX_SAFE_INTEGER,pe)),u&&(pe=Math.max(j,Math.min(R,pe)))):pe=null;const Ve=pe!==null?p(String(pe)):Se;Ve!==ye&&(nt(Ve),B?.(N,Ve)),Ge.current!==Ve&&(L?.(N,pe),Ge.current=Ve)},xt=N=>{at(!1),M?.(N)},mt=N=>{De(!1),Qe?.(N);const oe=K(ye);$e(N,oe,ye)},rt=N=>{De(!1),ke?.(N)},It=N=>{const oe=N.currentTarget.value;if(!oe.length){nt(""),B?.(N,"");return}(x?x(oe):!0)?(De(!0),B?.(N,N.target.value),nt(oe)):N.preventDefault()};let X=K(ye)??0;X=Math.max(Number.MIN_SAFE_INTEGER,Math.min(Number.MAX_SAFE_INTEGER,X)),u&&(X=Math.max(j,Math.min(R,X)));const ce=(N,oe)=>{const Se=K(ye)??0;if(Number.isNaN(Se))return;const pe=Q(String(Se),d,oe?v:1),Ve=K(pe);$e(N??null,Ve,pe)},ze=Aa(ce,X<=j),xe=(N,oe)=>{const Se=K(ye)??0;if(Number.isNaN(Se))return;const pe=Y(String(Se),d,oe?v:1),Ve=K(pe);$e(N??null,Ve,pe)},Xe=Aa(xe,X>=R);n.useEffect(()=>{var N;Be&&((N=J.current)==null||N.focus())},[Be]);const st=N=>{switch(N.key){case"ArrowUp":{N.preventDefault();const oe=N.shiftKey;xe(N,oe);break}case"ArrowDown":{N.preventDefault();const oe=N.shiftKey;ce(N,oe);break}case"Home":{N.preventDefault();const oe=String(j);$e(N,j,oe);break}case"End":{N.preventDefault();const oe=String(R);$e(N,R,oe);break}case"PageUp":{N.preventDefault(),xe(N,!0);break}case"PageDown":{N.preventDefault(),ce(N,!0);break}}We?.(N)},it=(N,oe)=>{N.preventDefault(),oe?J.current&&J.current.select():(De(!1),Xe(N))},wt=(N,oe)=>{N.preventDefault(),oe?J.current&&J.current.select():(De(!1),ze(N))},Fe=N=>{at(!0),C?.(N)};let qe;ot?qe=ye:ye?.length?qe=p(Number.isNaN(X)?ye:String(X)):qe="";const jt=A||X-d<j,Rt=A||X+d>R;return e.jsxs("div",{className:k(Ie(),Ie(ne),{[Ie("focused")]:Be,[Ie("disabled")]:A,[Ie("readOnly")]:E,[Ie("hiddenButtons")]:z,[Ie(ae||"")]:ae,[Ie("bordered")]:c},r),onBlur:xt,onMouseUp:Fe,...ue,ref:t,children:[P&&e.jsx("div",{className:Ie("startAdornmentContainer"),children:P}),e.jsx("input",{"aria-describedby":k(le,He)||void 0,"aria-labelledby":k(F,Ce)||void 0,"aria-invalid":!E&&qe.length?Eu(X,j,R)||ae==="error":void 0,className:k(Ie("input"),Ie(`inputTextAlign${gt(Z)}`),Ke),disabled:A,name:V,onBlur:mt,onChange:It,onFocus:rt,onKeyDown:E?void 0:st,placeholder:U,readOnly:E,"aria-readonly":E?"true":void 0,ref:de,required:Me,"aria-valuemax":!E&&qe.length?R:void 0,"aria-valuemin":!E&&qe.length?j:void 0,"aria-valuenow":E?void 0:X,"aria-valuetext":E?void 0:qe.length?s??qe:"Empty",role:E?"textbox":"spinbutton",tabIndex:A?-1:0,value:E&&qe.length===0?f:qe,...tt}),e.jsx("div",{className:Ie("activationIndicator")}),!A&&ae&&e.jsx(va,{status:ae,id:te}),I&&e.jsx("div",{className:Ie("endAdornmentContainer"),children:I}),!E&&e.jsxs("div",{className:k(Ie("buttonContainer")),children:[e.jsx(be,{"aria-hidden":!0,appearance:"transparent",tabIndex:-1,disabled:Rt,className:Ie("increment"),onPointerDown:N=>it(N,Rt),children:e.jsx(Ee,{"aria-hidden":!0})}),e.jsx(be,{"aria-hidden":!0,appearance:"transparent",tabIndex:-1,disabled:jt,className:Ie("decrement"),onPointerDown:N=>wt(N,jt),children:e.jsx(Te,{"aria-hidden":!0})})]})]})});var Xu=`.saltOptionGroup-label {
  background: var(--salt-container-primary-background);
  color: var(--salt-content-secondary-foreground);
  font-size: var(--salt-text-label-fontSize);
  font-weight: var(--salt-text-label-fontWeight-bolder);
  font-family: var(--salt-text-fontFamily);
  line-height: var(--salt-text-label-lineHeight);
  letter-spacing: var(--salt-text-letterSpacing);
  min-height: calc(var(--salt-size-base) + var(--salt-spacing-100));
  padding: calc(var(--salt-spacing-100) + var(--salt-spacing-25)) var(--salt-spacing-100);
  display: flex;
  box-sizing: border-box;
}

.saltOptionGroup {
  border-top: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) var(--salt-separable-tertiary-borderColor);
}

.saltOptionGroup:first-of-type {
  border-top: 0;
}
`;const qa=$("saltOptionGroup"),Ju=n.forwardRef(function(a,t){const{className:r,children:i,label:s,...c}=a,u=G();_({testId:"salt-option-group",css:Xu,window:u});const d=Re();return e.jsxs("div",{"aria-labelledby":d,className:k(qa(),r),role:"group",ref:t,...c,children:[e.jsx("div",{"aria-hidden":!0,className:qa("label"),id:d,children:s}),i]})}),go=_e("OverlayContext",{openState:!1,floatingStyles:{top:0,left:0,position:""},context:{},arrowProps:{},hideArrow:!1,reference:{},floating:{},getFloatingProps(){return{}},getReferenceProps(){return{}},headerId:void 0,setHeaderId:()=>{},descriptionId:void 0,setDescriptionId:()=>{}});function ma(){return n.useContext(go)}const Zu=({children:o,open:a,onOpenChange:t,placement:r="top",hideArrow:i=!1})=>{const s=n.useRef(null),[c,u]=n.useState(void 0),[d,v]=n.useState(void 0),[h,g]=ge({controlled:a,default:!1,name:"Overlay",state:"open"}),b=B=>{g(B),t?.(B)},m=n.useMemo(()=>[fa(8),ga(),ao({limiter:lo()}),oo({element:s})],[]),{x:f,y:I,strategy:p,context:z,elements:w,floating:x,reference:y}=Wt({open:h,onOpenChange:b,placement:r,middleware:m}),{getReferenceProps:S,getFloatingProps:R}=Et([no(z,{role:"dialog"}),pa(z),Gt(z)]),j=n.useMemo(()=>{const B=w.floating;return{top:I??0,left:f??0,position:p,width:B?.offsetWidth,height:B?.offsetHeight}},[w.floating,p,f,I]),V=n.useMemo(()=>({ref:s,context:z}),[z]),M=n.useMemo(()=>({openState:h,floatingStyles:j,context:z,arrowProps:V,hideArrow:i,floating:x,reference:y,getFloatingProps:R,getReferenceProps:S,headerId:c,setHeaderId:u,descriptionId:d,setDescriptionId:v}),[h,j,z,V,i,x,y,R,S,c,d]);return e.jsx(go.Provider,{value:M,children:o})};var Yu=`.saltOverlayFooter {
  padding: var(--saltOverlay-footer-padding, var(--salt-spacing-100));
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--salt-spacing-100);
  flex-shrink: 0;
  box-sizing: border-box;
}
`;const e4=$("saltOverlayFooter"),t4=n.forwardRef(function(a,t){const{className:r,...i}=a,s=G();return _({testId:"salt-overlay-footer",css:Yu,window:s}),e.jsx("div",{ref:t,className:k(e4(),r),...i})});var a4=`.saltOverlayHeader {
  padding: var(--saltOverlay-header-padding, var(--salt-spacing-100));
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  gap: var(--salt-spacing-100);
  flex-shrink: 0;
  box-sizing: border-box;
}

.saltOverlayHeader-container {
  flex-grow: 1;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--salt-spacing-50);
  align-items: flex-start;
}

.saltOverlayHeader-withActions .saltOverlayHeader-container {
  padding-top: calc((var(--salt-size-base) - var(--salt-text-h4-lineHeight)) / 2);
}

.saltOverlayHeader-header {
  margin: 0;
}

.saltOverlayHeader-actionsContainer {
  align-self: flex-start;
}
`;const vt=$("saltOverlayHeader"),xo=n.forwardRef(function(a,t){const r=G();_({testId:"salt-overlay-header",css:a4,window:r});const{className:i,description:s,header:c,actions:u,preheader:d,...v}=a,{setHeaderId:h,setDescriptionId:g}=ma(),b=Re(),m=Re(),f=!!(c||d),I=!!s,p=!!u;return fe(()=>(h?.(f?b:void 0),()=>{h?.(void 0)}),[f,b,h]),fe(()=>(g?.(I?m:void 0),()=>{g?.(void 0)}),[I,m,g]),e.jsxs("div",{className:k(vt(),{[vt("withActions")]:p},i),...v,ref:t,children:[e.jsxs("div",{className:vt("container"),children:[f&&e.jsxs(eo,{id:b,styleAs:"h4",className:vt("header"),children:[d&&e.jsx(se,{color:"primary",children:d}),c]}),s&&e.jsx(se,{id:m,color:"secondary",className:vt("description"),children:s})]}),p&&e.jsx("div",{className:vt("actionsContainer"),children:u})]})});var o4=`.saltOverlayPanelContent {
  animation: var(--salt-animation-fade-in-center);
  position: relative;
  overflow: hidden;
  padding: var(--saltOverlay-content-padding, var(--salt-spacing-100));
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
}

.saltOverlayHeader ~ .saltOverlayPanelContent {
  padding-top: 0;
}

.saltOverlayPanelContent:not(:last-child) {
  padding-bottom: 0;
}

.saltOverlayPanelContent-container {
  flex: 1;
  min-width: 0;
}

.saltOverlayPanelContent-overflow {
  padding-right: var(--salt-spacing-100);
  border-top: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) transparent;
  border-bottom: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) transparent;
  overflow-y: auto;
}
.saltOverlayPanelContent-overflow.saltOverlayPanelContent-scroll-top {
  border-top-color: var(--salt-separable-tertiary-borderColor);
}

.saltOverlayPanelContent-overflow.saltOverlayPanelContent-scroll-bottom {
  border-bottom-color: var(--salt-separable-tertiary-borderColor);
}
`;const zt=$("saltOverlayPanelContent"),mo=n.forwardRef(function(a,t){const r=G();_({testId:"salt-overlay-panel-content",css:o4,window:r});const{children:i,className:s,...c}=a,[u,d]=n.useState(!1),[v,h]=n.useState(!0),[g,b]=n.useState(!1),m=n.useRef(null),f=he(m,t),I=n.useCallback(()=>{const z=m.current;if(!z)return;const w=z.scrollHeight-z.scrollTop-z.clientHeight;b(z.scrollHeight>z.offsetHeight+1),d(z.scrollTop>0),h(w>1)},[]),p=()=>{r?.requestAnimationFrame(I)};return ba({ref:m,onResize:I}),fe(()=>{I()},[I]),e.jsx("div",{className:k(zt(),s),children:e.jsx("div",{className:k(zt("container"),{[zt("overflow")]:g,[zt("scroll-top")]:g&&u,[zt("scroll-bottom")]:g&&v}),onScrollCapture:p,...c,ref:f,children:i})})}),n4=[xo,mo,t4];function Io(o){return n.Children.toArray(o).some(a=>n.isValidElement(a)?a.type===n.Fragment?Io(a.props.children):n4.some(t=>a.type===t):!1)}var l4=`.saltOverlayPanel {
  --overlay-borderColor: var(--saltOverlay-borderColor, var(--salt-container-bold-borderColor));
  --overlay-background: var(--saltOverlay-background, var(--salt-container-primary-background));
  font-family: var(--salt-text-fontFamily);
  font-size: var(--saltOverlay-fontSize, var(--salt-text-fontSize));
  font-weight: var(--saltOverlay-fontWeight, var(--salt-text-fontWeight));
  line-height: var(--saltOverlay-lineHeight, var(--salt-text-lineHeight));
  letter-spacing: var(--salt-text-letterSpacing);

  border-color: var(--overlay-borderColor);
  border-style: var(--saltOverlay-borderStyle, var(--salt-borderStyle-solid));
  border-width: var(--saltOverlay-borderWidth, var(--salt-size-fixed-100));
  border-radius: var(--saltOverlay-borderRadius, var(--salt-palette-corner, 0));

  background: var(--overlay-background);
  box-shadow: var(--saltOverlay-boxShadow, var(--salt-overlayable-shadow-popout));

  color: var(--saltOverlay-text-color, var(--salt-content-primary-foreground));
  z-index: var(--saltOverlay-zIndex, var(--salt-zIndex-flyover));
  width: max-content;
  max-width: 100vw;
  max-height: 100vh;
  box-sizing: border-box;
}

.saltOverlayPanel-content {
  max-width: inherit;
  max-height: inherit;
  overflow-y: auto;
  box-sizing: border-box;
}

.saltOverlayPanel-content.saltOverlayPanel-sectioned {
  display: flex;
  flex-direction: column;
}

@supports selector(:has(*)) {
  .saltOverlayPanel-content:has(> .saltOverlayHeader, > .saltOverlayPanelContent, > .saltOverlayFooter) {
    display: flex;
    flex-direction: column;
  }
}
`;const Mt=$("saltOverlayPanel"),r4=n.forwardRef(function(a,t){const{className:r,"aria-label":i,"aria-labelledby":s,"aria-describedby":c,children:u,...d}=a,v=G();_({testId:"salt-overlay-panel",css:l4,window:v});const{Component:h}=xa(),{openState:g,floatingStyles:b,context:m,getFloatingProps:f,floating:I,arrowProps:p,hideArrow:z,headerId:w,descriptionId:x}=ma(),y=he(I,t),S=Io(u),{top:R,left:j,width:V,height:M,position:B}=b;return e.jsxs(h,{open:g,className:k(Mt(),r),"aria-modal":"true",...f(),ref:y,width:V,height:M,top:R,left:j,position:B,focusManagerProps:{context:m,outsideElementsInert:!0},"aria-label":i,"aria-labelledby":k(s,w)||void 0,"aria-describedby":k(c,x)||void 0,children:[e.jsx("div",{className:k(Mt("content"),{[Mt("sectioned")]:S}),...d,children:u}),!z&&e.jsx(ro,{...p,className:Mt("arrow"),strokeWidth:1,fill:"var(--overlay-background)",stroke:"var(--overlay-borderColor)",height:6,width:12})]})});var s4=`.saltOverlayPanelCloseButton {
  position: absolute;
  right: 0;
  z-index: 1;
}

.saltOverlayPanelCloseButton-button.saltButton-secondary {
  position: sticky;
  right: 0;
  top: 0;
}
.saltOverlayPanelCloseButton ~ .saltOverlayPanelContent {
  padding-right: var(--salt-spacing-400);
}
`;const Pa=$("saltOverlayPanelCloseButton"),i4=n.forwardRef(function({className:a,...t},r){const i=G();_({testId:"salt-overlay-panel-close-button",css:s4,window:i});const{CloseIcon:s}=Ye();return e.jsx("div",{className:k(Pa(),a),children:e.jsx(be,{ref:r,"aria-label":"Close overlay",appearance:"transparent",className:Pa("button"),...t,children:e.jsx(s,{"aria-hidden":!0})})})}),d4=n.forwardRef(function(a,t){const{children:r,...i}=a,{reference:s,getReferenceProps:c}=ma(),u=he(so(r),s),d=he(u,t);return!r||!n.isValidElement(r)?e.jsx(e.Fragment,{children:r}):e.jsx(e.Fragment,{children:n.cloneElement(r,{...ha(c(i),r.props),ref:d})})}),wo=n.createContext({page:0,count:0,onPageChange:()=>{}}),Ia=()=>n.useContext(wo);var c4=`.saltPageButton {
  min-width: var(--salt-size-base);
  font-weight: var(--salt-text-fontWeight);
  height: var(--salt-size-base);
  color: var(--salt-content-primary-foreground);
  background: var(--salt-selectable-background);
  appearance: none;
  box-sizing: border-box;
  padding: 0 var(--salt-spacing-100);
  border: none;
  font-size: var(--salt-text-fontSize);
  font-family: var(--salt-text-fontFamily);
  line-height: var(--salt-text-lineHeight);
  letter-spacing: var(--salt-text-letterSpacing);
  cursor: var(--salt-cursor-hover);
  border-radius: var(--salt-palette-corner-weak);
}

.saltPageButton:hover,
.saltPageButton:focus-visible {
  background: var(--salt-selectable-background-hover);
}

.saltPageButton:active {
  background: var(--salt-selectable-background-selected);
}

.saltPageButton:focus-visible {
  outline: var(--salt-focused-outline);
  position: relative;
  z-index: var(--salt-zIndex-default);
}

.saltPageButton:disabled {
  color: var(--salt-content-secondary-foreground);
  background: var(--salt-selectable-background);
  cursor: var(--salt-cursor-readonly);
}

.saltPageButton[aria-current="page"] {
  border: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) var(--salt-selectable-borderColor-selected);
  background: var(--salt-selectable-background-selected);
}

.saltPageButton-fixed {
  padding: 0;
}
`;const ta=$("saltPageButton"),u4=n.forwardRef(function({page:a,selected:t,disabled:r},i){const s=G();_({testId:"salt-page-button",css:c4,window:s});const{count:c,onPageChange:u}=Ia(),d=v=>{u(v,a)};return e.jsx("button",{"aria-label":`Page ${a} of ${c}`,"aria-current":t?"page":void 0,className:k(ta(),{[ta("selected")]:t,[ta("fixed")]:a<100}),onClick:d,disabled:r,ref:i,type:"button",children:a})});var v4=`.saltPagination {
  display: flex;
  flex-direction: row;
  align-items: center;
}
`;const h4=$("saltPagination"),{Provider:b4}=wo,p4=n.forwardRef(function({className:a,count:t,children:r,defaultPage:i=1,page:s,onPageChange:c,...u},d){const v=G();_({testId:"salt-pagination",css:v4,window:v});const[h,g]=ge({controlled:s,default:i,name:"Pagination",state:"page"}),b=n.useCallback((p,z)=>{g(z),c?.(p,z)},[c]),m=n.useMemo(()=>({page:h,count:t,onPageChange:b}),[h,t,b]),{announce:f}=Ja(),I=n.useRef(!1);return n.useEffect(()=>{I.current?f(`Page ${h}`):I.current=!0},[f,h]),t<2?null:e.jsx(b4,{value:m,children:e.jsx("nav",{className:k(h4(),a),ref:d,...u,children:r})})});var f4=`.saltPageRanges-ellipsis {
  display: inline-flex;
  width: var(--salt-size-base);
  height: var(--salt-size-base);
  line-height: var(--salt-size-base);
  justify-content: center;
}
`;function g4(o,a,t,r){const s=2*(t+r)+3>=a,c=!s&&o-t-r>2,u=!s&&o+t+r+1<a,d=c?[1,t]:void 0,v=u?[a-t+1,a]:void 0;let h;return c?u?h=[o-r,o+r]:h=[a-t-1-2*r,a]:h=[1,u?t+2+2*r:a],[d,h,v]}const x4=$("saltPageRanges"),Na=()=>e.jsx("div",{className:x4("ellipsis"),children:"…"}),m4=(o,a)=>{const t=[];for(let r=o[0];r<=o[1];++r)t.push(a(r));return t};function I4({siblingCount:o=2,boundaryCount:a=1}){const t=G();_({testId:"salt-page-ranges",css:f4,window:t});const{count:r,page:i}=Ia(),s=n.useCallback(v=>m4(v,h=>e.jsx(u4,{page:h,selected:i===h},h)),[i]),[c,u,d]=g4(i,r,Math.max(1,a),o);return e.jsxs(e.Fragment,{children:[c&&e.jsxs(e.Fragment,{children:[s(c),e.jsx(Na,{})]}),u&&s(u),d&&e.jsxs(e.Fragment,{children:[e.jsx(Na,{}),s(d)]})]})}var w4=`.saltPaginator {
  display: flex;
  flex-wrap: nowrap;
}

.saltPaginator-arrowButton-previous.saltButton {
  margin: 0 var(--salt-spacing-100) 0 0;
}

.saltPaginator-arrowButton-next.saltButton {
  margin: 0 0 0 var(--salt-spacing-100);
}
`;const aa=$("saltPaginator"),y4=n.forwardRef(function({className:a,boundaryCount:t,siblingCount:r,...i},s){const c=G();_({testId:"salt-paginator",css:w4,window:c});const{count:u,page:d,onPageChange:v}=Ia(),{NextIcon:h,PreviousIcon:g}=Ye(),b=p=>{v(p,Math.max(1,d-1))},m=p=>{v(p,Math.min(d+1,u))},f=d===1,I=d===u;return e.jsxs("div",{className:k(aa(),a),...i,ref:s,children:[e.jsx(be,{appearance:"transparent","aria-label":"Previous Page",onClick:b,disabled:f,className:aa("arrowButton-previous"),children:e.jsx(g,{"aria-hidden":!0})}),e.jsx(I4,{siblingCount:r,boundaryCount:t}),e.jsx(be,{appearance:"transparent","aria-label":"Next Page",onClick:m,disabled:I,className:aa("arrowButton-next"),children:e.jsx(h,{"aria-hidden":!0})})]})});var z4=`/* Styles applied to the root element when variant="primary" */
.saltPanel-primary.saltPanel {
  --panel-background: var(--salt-container-primary-background);
}

/* Styles applied to the root element when variant="secondary" */
.saltPanel-secondary.saltPanel {
  --panel-background: var(--salt-container-secondary-background);
}

/* Styles applied to the root element when variant="tertiary" */
.saltPanel-tertiary.saltPanel {
  --panel-background: var(--salt-container-tertiary-background);
}

/* Styles applied to the root element */
.saltPanel {
  background: var(--saltPanel-background, var(--panel-background));
  color: var(--saltPanel-color, inherit);
  height: var(--saltPanel-height, 100%);
  overflow: auto;
  padding: var(--saltPanel-padding, var(--salt-spacing-300));
  width: var(--saltPanel-width, 100%);
  box-sizing: border-box;
}

/* Styles applied when elevation="raised" */
.saltPanel-raised {
  border-radius: var(--saltPanel-borderRadius, var(--salt-palette-corner, 0));
  box-shadow: var(--saltPanel-boxShadow, var(--salt-overlayable-shadow));
}
`;const oa=$("saltPanel"),$t=n.forwardRef(function({elevation:a="flat",className:t,children:r,variant:i="primary",...s},c){const u=G();return _({testId:"salt-panel",css:z4,window:u}),e.jsx("div",{className:k(oa(),oa(i),a&&oa(a),t),ref:c,...s,children:r})}),yo=_e("RadioGroupContext",void 0);function S4(){return n.useContext(yo)}var j4=`/* Styles applied to RadioButton container */
.saltRadioButton {
  display: inline-flex;
  width: fit-content;
  gap: var(--salt-spacing-100);
  cursor: var(--salt-cursor-hover);
  position: relative;

  font-size: var(--salt-text-fontSize);
  line-height: var(--salt-text-lineHeight);
  font-family: var(--salt-text-fontFamily);
  font-weight: var(--salt-text-fontWeight);
  letter-spacing: var(--salt-text-letterSpacing);

  --radioButton-icon-margin: calc((var(--salt-text-lineHeight) - var(--salt-size-selectable)) / 2);
}

/* Styles applied when RadioButton is disabled */
.saltRadioButton-disabled {
  color: var(--salt-content-primary-foreground);

  cursor: var(--salt-cursor-disabled);
  opacity: 0.4;
}

/* Styles applied to root component if \`readOnly={true}\` */
.saltRadioButton-readOnly {
  color: var(--salt-content-primary-foreground);
  cursor: var(--salt-cursor-readonly);
}

/* Styles applied to input component */
.saltRadioButton-input {
  cursor: inherit;
  position: absolute;
  height: var(--salt-size-selectable);
  opacity: 0;
  padding: 0;
  width: var(--salt-size-selectable);
  z-index: var(--salt-zIndex-default);
}

.saltRadioButton-input,
.saltRadioButtonIcon {
  margin: var(--radioButton-icon-margin) 0;
  box-sizing: border-box;
}

/* Styles applied to icon when :focus-visible */
.saltRadioButton-input:focus-visible + .saltRadioButtonIcon {
  outline: var(--saltRadioButton-outline, var(--salt-focused-outline));
  outline-offset: var(--salt-spacing-fixed-100);
  border-color: var(--salt-selectable-borderColor-hover);
  color: var(--salt-selectable-foreground-hover);
  clip-path: unset;
}

.saltRadioButton-input:focus-visible + .saltRadioButtonIcon-checked {
  border-color: var(--salt-selectable-borderColor-selected);
  color: var(--salt-selectable-foreground-selected);
}

.saltRadioButton-error .saltRadioButton-input:focus-visible + .saltRadioButtonIcon {
  outline-color: var(--salt-status-error-foreground-decorative);
  border-color: var(--salt-status-error-borderColor);
  color: var(--salt-status-error-foreground-decorative);
}

.saltRadioButton-warning .saltRadioButton-input:focus-visible + .saltRadioButtonIcon {
  outline-color: var(--salt-status-warning-foreground-decorative);
  border-color: var(--salt-status-warning-borderColor);
  color: var(--salt-status-warning-foreground-decorative);
}
`,R4=`/* Styles applied to radio button icon */
.saltRadioButtonIcon {
  --radioButton-size: var(--salt-size-selectable);
  width: var(--radioButton-size);
  height: var(--radioButton-size);
  min-width: var(--radioButton-size);
  min-height: var(--radioButton-size);
  border-radius: 50%;
  position: relative;
  border: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) var(--salt-selectable-borderColor);
  color: var(--salt-selectable-foreground);
  background: var(--salt-container-primary-background);
  --saltIcon-size: 100%;
  display: flex;
  /* Using overflow:hidden here causes a thin white line */
  clip-path: border-box;
  box-sizing: border-box;
}

.saltRadioButton:hover .saltRadioButtonIcon {
  border-color: var(--salt-selectable-borderColor-hover);
  color: var(--salt-selectable-foreground-hover);
}

.saltRadioButton-disabled:hover .saltRadioButtonIcon {
  border-color: var(--salt-selectable-borderColor);
  color: var(--salt-selectable-foreground);
}

.saltRadioButtonIcon-checked,
.saltRadioButton:hover .saltRadioButtonIcon-checked {
  border-color: var(--salt-selectable-borderColor-selected);
  color: var(--salt-selectable-foreground-selected);
}

.saltRadioButtonIcon-disabled,
.saltRadioButton:hover .saltRadioButtonIcon-disabled {
  opacity: 0.4;

  border-color: var(--salt-selectable-borderColor);
  background: var(--salt-container-primary-background);
  color: var(--salt-selectable-foreground);
}

.saltRadioButtonIcon-checked.saltRadioButtonIcon-disabled,
.saltRadioButton:hover .saltRadioButtonIcon-checked.saltRadioButtonIcon-disabled {
  border-color: var(--salt-selectable-borderColor-selected);
  color: var(--salt-selectable-foreground-selected);
}

.saltRadioButtonIcon-error,
.saltRadioButton:hover .saltRadioButtonIcon-error {
  color: var(--salt-status-error-foreground-decorative);
  border-color: var(--salt-status-error-borderColor);
  outline-color: var(--salt-status-error-foreground-decorative);
}

.saltRadioButtonIcon-warning,
.saltRadioButton:hover .saltRadioButtonIcon-warning {
  color: var(--salt-status-warning-foreground-decorative);
  border-color: var(--salt-status-warning-borderColor);
  outline-color: var(--salt-status-warning-foreground-decorative);
}

.saltRadioButtonIcon-readOnly,
.saltRadioButton:hover .saltRadioButtonIcon-readOnly,
.saltRadioButton-input:focus-visible + .saltRadioButtonIcon-readOnly {
  border-color: var(--salt-selectable-borderColor-readonly);
  border-style: var(--salt-borderStyle-dashed);
  color: var(--salt-content-primary-foreground);
}

.saltRadioButtonIcon > svg {
  position: absolute;
  /* Ensure a gap doesn't appear when device scaling is used */
  transform: scale(1.01);
}
`;const ht=$("saltRadioButtonIcon"),C4=({checked:o,className:a,error:t,disabled:r,validationStatus:i,readOnly:s,...c})=>{const u=G();return _({testId:"salt-radio-button-icon",css:R4,window:u}),e.jsxs("div",{"aria-hidden":"true",className:k(ht(),{[ht("checked")]:o,[ht("error")]:t,[ht("disabled")]:r,[ht(i||"")]:i,[ht("readOnly")]:s},a),...c,children:[o&&!s&&e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6Zm6 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z",clipRule:"evenodd"})}),o&&s&&e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 12 12",children:e.jsx("path",{d:"M9.5 6a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"})})]})},bt=$("saltRadioButton"),Da=n.forwardRef(function(a,t){const{checked:r,className:i,disabled:s,error:c,inputProps:u={},inputRef:d,label:v,name:h,onFocus:g,onBlur:b,onChange:m,readOnly:f,value:I,validationStatus:p,...z}=a,w=G();_({testId:"salt-radio-button",css:j4,window:w});const{a11yProps:x,disabled:y,readOnly:S,validationStatus:R}=Ne(),j=S4(),{"aria-describedby":V,"aria-labelledby":M,className:B,onChange:C,...L}=u,K=j?.disabled||y||s,U=j?.readOnly||S||f,T=K?void 0:j?.validationStatus??R??p,P=r??(j&&I?j.value===I:r),Q=h??j?.name,[Y,Z]=ge({controlled:P,default:!!r,name:"RadioBase",state:"checked"}),ie=ne=>{var ue;if(U)return;const ee=ne.target.checked;Z(ee),m?.(ne),C?.(ne),(ue=j?.onChange)==null||ue.call(j,ne)};return e.jsxs("label",{className:k(bt(),{[bt("disabled")]:K,[bt("readOnly")]:U,[bt("error")]:c,[bt(T||"")]:T},i),ref:t,...z,children:[e.jsx("input",{"aria-describedby":k(j===void 0?x?.["aria-describedby"]:void 0,V)||void 0,"aria-labelledby":k(j===void 0?x?.["aria-labelledby"]:void 0,M)||void 0,className:k(bt("input"),B),checked:Y,disabled:K,readOnly:U,name:Q,value:I,onBlur:b,onChange:ie,onFocus:g,type:"radio",ref:d,...L}),e.jsx(C4,{checked:Y,readOnly:U,validationStatus:T,error:c}),v]})});var k4=`/* Styles applied to root element */
.saltRadioButtonGroup {
  border: none;
  margin: 0;
  padding: 0;
}

/* Styles applied when direction is vertical */
.saltRadioButtonGroup-vertical {
  display: flex;
  gap: var(--salt-spacing-100);
  flex-direction: column;
}

/* Styles applied when direction is horizontal */
.saltRadioButtonGroup-horizontal {
  display: flex;
  gap: var(--salt-spacing-200);
  flex-direction: row;
  flex-wrap: wrap;
}

.saltRadioButtonGroup-noWrap {
  flex-wrap: nowrap;
}
.saltRadioButtonGroup-noWrap .saltRadioButton {
  white-space: break-spaces;
}

/* Styles applied when radio button group is inside a form field with label left or right */
.saltFormField-labelLeft .saltRadioButtonGroup,
.saltFormField-labelRight .saltRadioButtonGroup {
  padding-top: var(--salt-spacing-100);
}
`;const na=$("saltRadioButtonGroup"),H4=n.forwardRef(function(a,t){const{"aria-labelledby":r,"aria-describedby":i,children:s,className:c,defaultValue:u,direction:d="vertical",disabled:v,wrap:h=!0,name:g,onChange:b,readOnly:m,value:f,validationStatus:I,...p}=a,z=G();_({testId:"salt-radio-button-group",css:k4,window:z});const{a11yProps:w,disabled:x,readOnly:y,validationStatus:S}=Ne(),R=x||v,j=y||m,V=S??I,[M,B]=ge({controlled:f,default:u,state:"value",name:"RadioButtonGroup"}),C=K=>{B(K.target.value),b?.(K)},L=Re(g);return e.jsx("fieldset",{role:"radiogroup","aria-readonly":j,"aria-labelledby":k(w?.["aria-labelledby"],r)||void 0,"aria-describedby":k(w?.["aria-describedby"],i)||void 0,className:k(na(),na(d),{[na("noWrap")]:!h},c),"data-testid":"radio-button-group",ref:t,...p,children:e.jsx(yo.Provider,{value:{disabled:R,name:L,onChange:C,readOnly:j,validationStatus:V,value:M},children:s})})});var M4=`.saltSliderThumb {
  align-items: center;
  background: var(--salt-sentiment-accent-borderColor);
  cursor: var(--salt-cursor-grab);
  display: flex;
  height: var(--salt-size-selectable);
  outline: none;
  position: absolute;
  top: calc(((var(--salt-size-selectable) - var(--salt-size-bar)) / 2) * -1);
  transform: translateX(-50%);
  width: var(--salt-size-fixed-200);
  touch-action: none;
}

.saltSliderThumb-disabled {
  cursor: var(--salt-cursor-disabled);
  pointer-events: none;
}

.saltSliderThumb-focusVisible {
  outline-style: var(--salt-focused-outlineStyle);
  outline-width: var(--salt-focused-outlineWidth);
  outline-offset: var(--salt-focused-outlineOffset);
  outline-color: var(--salt-focused-outlineColor);
}

.saltSliderThumb:active,
.saltSliderThumb-dragging {
  cursor: var(--salt-cursor-grab-active);
}

.saltSliderThumb-input {
  border: 0;
  appearance: none;
  cursor: var(--salt-cursor-grab);
  height: var(--salt-size-base);
  left: var(--slider-progressPercentage);
  margin: 0;
  opacity: 0.0001;
  overflow: hidden;
  -webkit-appearance: none;
  pointer-events: none;
  width: var(--salt-size-base);
  padding: 0;
  position: absolute;
  transform: translateX(-50%);
}

.saltSliderThumb-secondThumb {
  /* The second thumb needs to sit on top the first thumb */
  z-index: 2;
}

/* Visually hide accessible text. Can not
  use visibility: hidden as we need the screen
  reader to announce it */
.saltSliderThumb-accessibleText {
  position: absolute;
  height: 1px;
  width: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
`,B4=`.saltSliderTooltip {
  background: var(--salt-container-primary-background);
  border-color: var(--salt-container-bold-borderColor);
  border-style: var(--saltTooltip-borderStyle, var(--salt-borderStyle-solid));
  border-width: var(--saltTooltip-borderWidth, var(--salt-size-fixed-100));
  border-radius: var(--saltTooltip-borderRadius, var(--salt-palette-corner-weak, 0));
  box-shadow: var(--saltTooltip-shadow, var(--salt-overlayable-shadow-popout));
  bottom: 50%;
  left: 50%;
  padding: var(--salt-spacing-50) var(--salt-spacing-100);
  position: absolute;
  transform: translate(-50%, -50%);
  text-align: var(--saltTooltip-textAlign, left);
  user-select: none;
  visibility: hidden;
  z-index: var(--saltTooltip-zIndex, var(--salt-zIndex-flyover));
}

.saltSliderTooltip-visible,
.saltSliderTooltip:hover {
  visibility: visible;
}

.saltSliderTooltip-arrow {
  fill: var(--salt-container-primary-background);
  height: var(--salt-size-icon);
  left: 50%;
  position: absolute;
  pointer-events: none;
  top: 100%;
  transform: translateX(-50%);
  stroke: var(--salt-container-bold-borderColor);
  stroke-width: var(--salt-size-fixed-100);
  width: var(--salt-size-icon);
}

.saltSliderTooltip-text {
  white-space: nowrap;
}
`;const Bt=$("saltSliderTooltip"),V4=({value:o,open:a})=>{const t=G();return _({testId:"salt-slider-tooltip",css:B4,window:t}),e.jsxs("div",{"aria-hidden":!0,className:k(Bt(),{[Bt("visible")]:a}),"data-testid":"sliderTooltip",children:[e.jsxs("svg",{className:Bt("arrow"),"aria-hidden":"true",viewBox:"0 1 14 14",children:[e.jsx("path",{d:"M0,0 H14 L7,7 Q7,7 7,7 Z",stroke:" var(--salt-container-primary-background)"}),e.jsx("path",{d:"M0,0 H14 L7,7 Q7,7 7,7 Z",stroke:"var(--salt-container-bold-borderColor)"})]}),e.jsx(se,{className:Bt("text"),children:o})]})},lt=$("saltSliderThumb"),L4=({"aria-label":o,"aria-valuetext":a,"aria-labelledby":t,accessibleMaxText:r,accessibleMinText:i,disabled:s,format:c,handleInputChange:u,handleKeydownOnThumb:d,handlePointerDown:v,index:h=0,inputRef:g,isFocusVisible:b,max:m,maxLabel:f,min:I,minLabel:p,offsetPercentage:z,restrictToMarks:w,showTooltip:x,sliderValue:y,step:S,stepMultiplier:R,trackDragging:j,...V})=>{{const M=G();_({testId:"salt-slider-thumb",css:M4,window:M});const[B,C]=n.useState(!1),K=`saltSlider-${Re()}-${h}`,U=Array.isArray(y)?y[h]:y,T=c?c(U):U,P=n.useCallback(Z=>{Z.key==="Escape"&&C(!1)},[]);n.useEffect(()=>(x&&B&&M?.addEventListener("keydown",P),()=>M?.removeEventListener("keydown",P)),[P,B,x,M]);const Q=()=>C(!0),Y=()=>{setTimeout(()=>{C(!1)},300)};return e.jsxs("div",{className:k(lt(),{[lt("focusVisible")]:b,[lt("disabled")]:s,[lt("dragging")]:j,[lt("secondThumb")]:h===1}),"data-testid":"sliderThumb",onPointerDown:v,style:{left:z},...x&&{onPointerEnter:Q,onPointerLeave:Y},children:[x&&e.jsx(V4,{value:T,open:(B||j||b)&&!s}),e.jsx("input",{disabled:s,type:"range",ref:g,className:lt("input"),value:U,onChange:u,onKeyDown:d,"aria-labelledby":t,"aria-valuenow":U,"aria-valuetext":a||c?.(U).toString(),"aria-label":o,"aria-describedby":K,min:I,max:m,step:S,...V}),e.jsxs("span",{"aria-hidden":"true",id:K,className:lt("accessibleText"),children:[Array.isArray(y)&&`${h===0?"leading":"trailing"}, ${c?.(y[0])||y[0]} to ${c?.(y[1])||y[1]}, `,"range"," ",i?`${i} ${I}, `:`minimum ${c?.(I)||I}, `,r?`${r} ${m} `:`maximum ${c?.(m)||m}`,w?", custom increments":S!==1&&`, increments of ${S}`]})]})}};var A4=`.saltSliderTrack {
  --slider-track-background: var(--salt-sentiment-neutral-track);
  --slider-track-fill: var(--salt-sentiment-accent-borderColor);
  --slider-progressPercentage: 0%;
  --slider-tick-height: calc((var(--salt-size-selectable) - var(--salt-size-bar)) / 2);
  /* For range */
  --slider-progressPercentageStart: 0%;
  --slider-progressPercentageEnd: 0%;

  display: flex;
  touch-action: none;
  width: 100%;
}

.saltSliderTrack.saltSliderTrack-withMarks {
  /* To wrap the marks within the boundary box */
  margin-bottom: calc(var(--salt-size-base) / 2);
}

.saltSliderTrack-disabled {
  opacity: 0.4;
}

.saltSliderTrack-container {
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: var(--salt-spacing-100);
  width: 100%;
}

.saltSliderTrack-wrapper {
  align-items: center;
  cursor: var(--salt-cursor-hover);
  display: flex;
  flex: 1;
  height: var(--salt-size-selectable);
  position: relative;
  width: 100%;
}

.saltSliderTrack-disabled,
.saltSliderTrack-disabled .saltSliderTrack-wrapper {
  cursor: var(--salt-cursor-disabled);
}

.saltSliderTrack-disabled .saltSliderTrack-wrapper {
  pointer-events: none;
}

.saltSliderTrack-rail {
  display: flex;
  flex: 100%;
  height: var(--salt-size-bar);
  justify-content: space-between;
  position: relative;
}

.saltSliderTrack-rail::before,
.saltSliderTrack-rail::after {
  content: "";
  display: block;
  height: 100%;
}

.saltSliderTrack-rail::before {
  background: var(--slider-track-fill);
  border-top-left-radius: var(--salt-palette-corner-weaker);
  border-bottom-left-radius: var(--salt-palette-corner-weaker);
  width: calc(var(--slider-progressPercentage) - var(--salt-spacing-fixed-300));
}

.saltSliderTrack-hasMinTick.saltSliderTrack-rail::before {
  border-bottom-left-radius: unset;
}

.saltSliderTrack-rail::after {
  background: var(--slider-track-background);
  border-top-right-radius: var(--salt-palette-corner-weaker);
  border-bottom-right-radius: var(--salt-palette-corner-weaker);
  width: calc(100% - var(--slider-progressPercentage) - var(--salt-spacing-fixed-300));
}

.saltSliderTrack-hasMaxTick.saltSliderTrack-rail::after {
  border-bottom-right-radius: unset;
}

.saltSliderTrack-range .saltSliderTrack-rail::before {
  background: var(--slider-track-background);
  width: calc(var(--slider-progressPercentageStart) - var(--salt-spacing-fixed-300));
}

.saltSliderTrack-range .saltSliderTrack-rail::after {
  background: var(--slider-track-background);
  width: calc(100% - var(--slider-progressPercentageEnd) - var(--salt-spacing-fixed-300));
}

.saltSliderTrack-range .saltSliderTrack-rail .saltSliderTrack-fill {
  background: var(--slider-track-fill);
  height: 100%;
  left: calc(var(--slider-progressPercentageStart) + var(--salt-spacing-fixed-300));
  position: absolute;
  width: calc(var(--slider-progressPercentageEnd) - var(--slider-progressPercentageStart) - var(--salt-size-fixed-600));
}

.saltSliderTrack-minLabel,
.saltSliderTrack-maxLabel {
  user-select: none;
}

.saltSliderTrack-dragging,
.saltSliderTrack-dragging .saltSliderTrack-wrapper {
  cursor: var(--salt-cursor-grab-active);
}

.saltSliderTrack-ticks {
  top: calc(var(--salt-size-bar) + var(--slider-tick-height));
  position: absolute;
  width: 100%;
}

.saltSliderTrack-tick {
  background: var(--slider-track-background);
  height: var(--slider-tick-height);
  position: absolute;
  transform: translate(-50%);
  width: var(--salt-size-fixed-200);
}

.saltSliderTrack-withTicks .saltSliderTrack-tickHidden {
  visibility: hidden;
}

.saltSliderTrack-tickSelected {
  background: var(--slider-track-fill);
}

.saltSliderTrack-tick:first-of-type {
  transform: unset;
}

.saltSliderTrack-tick:last-of-type {
  transform: translateX(-100%);
}

.saltSliderTrack-marks {
  position: absolute;
  user-select: none;
  width: 100%;
}

.saltSliderTrack-markLabel {
  color: var(--salt-content-secondary-foreground);
  font-family: var(--salt-text-fontFamily);
  font-weight: var(--salt-text-label-fontWeight);
  font-size: var(--salt-text-label-fontSize);
  line-height: var(--salt-text-label-lineHeight);
  letter-spacing: var(--salt-text-letterSpacing);
  overflow: hidden;
  position: absolute;
  text-overflow: ellipsis;
  transform: translateX(-50%);
  top: calc(var(--slider-tick-height) + var(--salt-spacing-50));
  white-space: nowrap;
}

.saltSliderTrack-constrainLabelPosition .saltSliderTrack-markLabel:first-of-type {
  transform: translateX(0%);
}

.saltSliderTrack-constrainLabelPosition .saltSliderTrack-markLabel:last-of-type {
  transform: translateX(-100%);
}

/* Styles applied when slider and range slider are inside a form field */

.saltFormField .saltSliderTrack.saltSliderTrack-withMark {
  margin-bottom: 0;
}

.saltFormField .saltSliderTrack-container {
  --saltFormField-label-width: 10%;

  height: var(--salt-size-base);
}

.saltFormField .saltSliderTrack-markLabel {
  top: calc((var(--salt-size-base) - var(--salt-size-bar)) / 2);
}
`;const Dt=o=>typeof o=="string"?Number.parseFloat(o):o,Fa=(o,a,t)=>{if(t===a)return 0;const i=((Number.isNaN(Dt(o))?t:Math.min(Math.max(Dt(o),t),a))-t)/(a-t)*100;return Math.round(i*100)/100},ca=(o,a,t)=>(o-t)/(a-t)*100,zo=(o,a,t,r,i,s,c)=>{if(Number.isNaN(o))return t;const u=Math.min(Math.max(o,t),a);if(c&&s){let v=s[0].value,h=Math.abs(u-v);for(let g=1;g<s.length;g++){const b=Math.abs(u-s[g].value);b<h&&(h=b,v=s[g].value)}return v}let d=Math.round(u/r)*r;return d>a?d=a:d<t&&(d=t),Number.parseFloat(d.toFixed(i))},Oa=(o,a,t,r,i,s,c,u)=>{if(!o.current)return;const d=o.current.getBoundingClientRect(),v=(a-d.left)/d.width*(t-r)+r,h=Math.round(v/i)*i;return zo(h,t,r,i,s,c,u)},T4=(o,a,t,r,i,s,c,u)=>{let d=a;if(c&&u&&u.length>=1){const v=u.findIndex(h=>h.value===a);switch(o.key){case"ArrowUp":case"ArrowRight":case"PageUp":v<u.length-1&&(d=u[v+1].value);break;case"ArrowDown":case"ArrowLeft":case"PageDown":v>0&&(d=u[v-1].value);break;default:return d}}else switch(o.key){case"ArrowUp":case"ArrowRight":d=Math.min(a+t,i);break;case"ArrowDown":case"ArrowLeft":d=Math.max(a-t,s);break;case"Home":d=s;break;case"End":d=i;break;case"PageUp":d=Math.min(a+t*r,i);break;case"PageDown":d=Math.max(a-t*r,s);break;default:return d}return o.preventDefault(),d},ve=$("saltSliderTrack"),q4=n.forwardRef(function({children:a,className:t,constrainLabelPosition:r=!1,disabled:i,showTicks:s,format:c,handlePointerDown:u,isDragging:d,isRange:v=!1,marks:h,max:g,maxLabel:b,min:m,minLabel:f,progressPercentage:I=0,progressPercentageRange:p=[0,0],sliderRef:z,...w},x){const y=G();_({testId:"salt-slider-track",css:A4,window:y});const S=M=>{const B=ca(M,g,m);return v?B>p[0]&&B<p[1]:B<I},R=M=>{const B=ca(M,g,m);return v?B===p[0]||B===p[1]:B===I},j=()=>h?.some(M=>M.value===m)||!1,V=()=>h?.some(M=>M.value===g)||!1;return e.jsx("div",{className:k(ve(),t,{[ve("disabled")]:i,[ve("dragging")]:d,[ve("range")]:v,[ve("withMarks")]:h,[ve("constrainLabelPosition")]:r,[ve("withTicks")]:s}),"data-testid":"sliderTrack",ref:x,...w,children:e.jsxs("div",{className:k(ve("container")),children:[f&&e.jsx(se,{"aria-hidden":!0,className:ve("minLabel"),color:"secondary",styleAs:"label",children:f||c?.(m)}),e.jsxs("div",{onPointerDown:u,className:ve("wrapper"),children:[e.jsxs("div",{className:k(ve("rail"),{[ve("hasMinTick")]:j()&&s,[ve("hasMaxTick")]:V()&&s}),ref:z,style:{...I!==void 0&&{"--slider-progressPercentage":`${I}%`},...p?.[0]!==void 0&&{"--slider-progressPercentageStart":`${p[0]}%`},...p?.[1]!==void 0&&{"--slider-progressPercentageEnd":`${p[1]}%`}},children:[v&&e.jsx("div",{className:k(ve("fill"))}),a]}),h&&s&&e.jsx("div",{className:ve("ticks"),children:h.map(({value:M})=>e.jsx("span",{style:{left:`${Fa(M,g,m)}%`},className:k(ve("tick"),{[ve("tickSelected")]:S(M)},{[ve("tickHidden")]:R(M)})},`${M}-tick`))}),h&&e.jsx("div",{className:ve("marks"),children:h.map(({label:M,value:B})=>e.jsx("span",{"data-testid":"mark",className:ve("markLabel"),style:{left:`${Fa(B,g,m)}%`},children:M},`${B}-mark`))})]}),b&&e.jsx(se,{"aria-hidden":!0,className:ve("maxLabel"),color:"secondary",styleAs:"label",children:b||c?.(g)})]})})}),P4=({decimalPlaces:o,handleInputChange:a,inputRef:t,marks:r,min:i=0,max:s=10,step:c=1,onChange:u,onChangeEnd:d,restrictToMarks:v,setValue:h,stepMultiplier:g,value:b})=>{const[m,f]=n.useState(!1),[I,p]=n.useState(!1),z=n.useRef(b),w=n.useRef(null),x=G(),y=n.useCallback(C=>{if(!w.current)return;const L=Oa(w,C.clientX,s,i,c,o,r,v);L===void 0||z.current===L||(z.current=L,h(L),u?.(C,L))},[o,r,s,i,u,h,v,c]),S=n.useCallback(C=>{f(!1),p(!1),d?.(C,z.current)},[d]);n.useEffect(()=>(m?(x?.addEventListener("pointermove",y),x?.addEventListener("pointerup",S),x?.addEventListener("pointercancel",S),x?.addEventListener("blur",S),x?.addEventListener("contextmenu",S)):(x?.removeEventListener("pointermove",y),x?.removeEventListener("pointerup",S),x?.removeEventListener("pointercancel",S),x?.removeEventListener("blur",S),x?.removeEventListener("contextmenu",S)),()=>{x?.removeEventListener("pointermove",y),x?.removeEventListener("pointerup",S),x?.removeEventListener("pointercancel",S),x?.removeEventListener("blur",S),x?.removeEventListener("contextmenu",S)}),[m,x,y,S]);const R=n.useCallback(C=>{C.preventDefault(),C.stopPropagation(),t.current&&t.current.focus(),f(!0),p(!1)},[t]),j=n.useCallback(C=>{C.preventDefault(),t.current&&t.current.focus(),f(!0),p(!1);const L=Oa(w,C.clientX,s,i,c,o,r,v);L===void 0||z.current===L||(z.current=L,h(L),u?.(C.nativeEvent,L))},[o,t,r,s,i,u,v,h,c]),V=n.useCallback(C=>{const L=T4(C,b,c,g,s,i,v,r);L===void 0||z.current===L||(p(!0),z.current=L,a({target:{value:L.toString()}}))},[b,c,g,s,i,v,r,a]);return{handleBlur:()=>p(!1),handleFocus:()=>p(!0),handleKeydownOnThumb:V,handlePointerDownOnThumb:R,handlePointerDownOnTrack:j,isDragging:m,isFocusVisible:I,sliderRef:w}},N4=n.forwardRef(function({"aria-label":a,"aria-labelledby":t,"aria-valuetext":r,accessibleMaxText:i,accessibleMinText:s,decimalPlaces:c=2,disabled:u=!1,format:d,marks:v,min:h=0,minLabel:g,max:b=100,maxLabel:m,name:f,onChange:I,onChangeEnd:p,restrictToMarks:z=!1,showTooltip:w=!0,step:x=1,stepMultiplier:y=2,value:S,defaultValue:R=h+(b-h)/2,...j},V){const[M,B]=ge({controlled:S,default:R,name:"Slider",state:"value"}),{a11yProps:{"aria-labelledby":C}={},disabled:L}=Ne(),K=L||u,U=n.useRef(null),T=zo(M,b,h,x,c,v,z),P=ca(Dt(T),b,h),Q=n.useRef(T),Y=q=>{const W=Dt(q.target.value);W!==Q.current&&(B(W),I?.(q.nativeEvent,W),p?.(q.nativeEvent,W),Q.current=W)},{handleBlur:Z,handleFocus:ie,handleKeydownOnThumb:ne,handlePointerDownOnThumb:ue,handlePointerDownOnTrack:ee,isDragging:le,isFocusVisible:F,sliderRef:H}=P4({decimalPlaces:c,handleInputChange:Y,inputRef:U,marks:v,min:h,max:b,step:x,value:T,onChange:I,onChangeEnd:p,restrictToMarks:z,setValue:B,stepMultiplier:y});return e.jsx(q4,{disabled:K,format:d,handlePointerDown:ee,isDragging:le,min:h,minLabel:g,max:b,maxLabel:m,marks:v,progressPercentage:P,ref:V,sliderRef:H,...j,children:e.jsx(L4,{"aria-label":a,"aria-labelledby":k(C,t)||void 0,"aria-valuemax":b,"aria-valuemin":h,"aria-valuetext":r,accessibleMaxText:i,accessibleMinText:s,disabled:K,format:d,onBlur:Z,onFocus:ie,handleInputChange:Y,handlePointerDown:ue,handleKeydownOnThumb:ne,inputRef:U,isFocusVisible:F,min:h,minLabel:g,max:b,maxLabel:m,name:f,offsetPercentage:`${P}%`,restrictToMarks:z,sliderValue:T,showTooltip:w,step:x,stepMultiplier:y,trackDragging:le})})});var D4=`.saltTabPanel {
  height: 100%;
  width: 100%;
}

.saltTabPanel[hidden] {
  display: none;
}

.saltTabPanel:focus-visible {
  outline: var(--salt-focused-outline);
}
`;const F4=$("saltTabPanel"),Wa=n.forwardRef(function(a,t){const{className:r,children:i,id:s,value:c,...u}=a,d=G();_({testId:"salt-tab-panel",css:D4,window:d});const v=Re(s),{registerPanel:h,getTabId:g,selected:b}=al(),m=b!==c,f=n.useRef(null),I=he(f,t);fe(()=>{if(v)return h(v,c)},[c,v,h]);const[p,z]=n.useState(!1);n.useEffect(()=>{const x=f.current,y=d?.MutationObserver;if(!x||m)return;let S=null;const R=()=>{S=null;const B=xl(x).length>0;z(C=>C===B?C:B)},j=()=>{if(S!=null&&d&&d.cancelAnimationFrame(S),!d?.requestAnimationFrame){R();return}S=d.requestAnimationFrame(R)},V=y?new y(()=>{j()}):null;return j(),V?.observe(x,{childList:!0,subtree:!0,attributes:!0}),()=>{V?.disconnect(),S!=null&&d&&d.cancelAnimationFrame(S)}},[m,d]);const w=g(c);return e.jsx("div",{id:v,ref:I,role:"tabpanel","aria-labelledby":w,className:k(F4(),r),hidden:m||void 0,tabIndex:m||p?void 0:0,...u,children:i})});var O4=`.saltTag {
  height: calc(var(--salt-size-base) - var(--salt-spacing-100));
  min-height: var(--salt-text-minHeight);
  display: flex;
  column-gap: var(--salt-spacing-50);
  align-items: center;
  padding: var(--salt-spacing-25) var(--salt-spacing-100);
  font-family: var(--salt-text-fontFamily);
  font-size: var(--salt-text-fontSize);
  font-weight: var(--salt-text-fontWeight);
  line-height: var(--salt-text-lineHeight);
  letter-spacing: var(--salt-text-letterSpacing);
  overflow: hidden;
  border-radius: var(--saltTag-borderRadius, var(--salt-palette-corner-strongest, 9999px));
  width: fit-content;
  min-width: max-content;
  box-sizing: border-box;
}
.saltTag-primary {
  background: var(--tag-primary-background, var(--salt-category-1-background));
  color: var(--tag-primary-foreground, var(--salt-category-1-foreground));
  border: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) transparent;
}
.saltTag-bordered {
  border: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) var(--tag-primary-borderColor, var(--salt-category-1-borderColor));
}
.saltTag-secondary {
  background: var(--tag-secondary-background, var(--salt-category-1-bold-background));
  color: var(--salt-content-bold-foreground);
  border: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) transparent;
}

.saltTag-category-1 {
  --tag-primary-background: var(--salt-category-1-background);
  --tag-primary-foreground: var(--salt-category-1-foreground);
  --tag-primary-borderColor: var(--salt-category-1-borderColor);
  --tag-secondary-background: var(--salt-category-1-bold-background);
}
.saltTag-category-2 {
  --tag-primary-background: var(--salt-category-2-background);
  --tag-primary-foreground: var(--salt-category-2-foreground);
  --tag-primary-borderColor: var(--salt-category-2-borderColor);
  --tag-secondary-background: var(--salt-category-2-bold-background);
}

.saltTag-category-3 {
  --tag-primary-background: var(--salt-category-3-background);
  --tag-primary-foreground: var(--salt-category-3-foreground);
  --tag-primary-borderColor: var(--salt-category-3-borderColor);
  --tag-secondary-background: var(--salt-category-3-bold-background);
}

.saltTag-category-4 {
  --tag-primary-background: var(--salt-category-4-background);
  --tag-primary-foreground: var(--salt-category-4-foreground);
  --tag-primary-borderColor: var(--salt-category-4-borderColor);
  --tag-secondary-background: var(--salt-category-4-bold-background);
}

.saltTag-category-5 {
  --tag-primary-background: var(--salt-category-5-background);
  --tag-primary-foreground: var(--salt-category-5-foreground);
  --tag-primary-borderColor: var(--salt-category-5-borderColor);
  --tag-secondary-background: var(--salt-category-5-bold-background);
}

.saltTag-category-6 {
  --tag-primary-background: var(--salt-category-6-background);
  --tag-primary-foreground: var(--salt-category-6-foreground);
  --tag-primary-borderColor: var(--salt-category-6-borderColor);
  --tag-secondary-background: var(--salt-category-6-bold-background);
}

.saltTag-category-7 {
  --tag-primary-background: var(--salt-category-7-background);
  --tag-primary-foreground: var(--salt-category-7-foreground);
  --tag-primary-borderColor: var(--salt-category-7-borderColor);
  --tag-secondary-background: var(--salt-category-7-bold-background);
}

.saltTag-category-8 {
  --tag-primary-background: var(--salt-category-8-background);
  --tag-primary-foreground: var(--salt-category-8-foreground);
  --tag-primary-borderColor: var(--salt-category-8-borderColor);
  --tag-secondary-background: var(--salt-category-8-bold-background);
}

.saltTag-category-9 {
  --tag-primary-background: var(--salt-category-9-background);
  --tag-primary-foreground: var(--salt-category-9-foreground);
  --tag-primary-borderColor: var(--salt-category-9-borderColor);
  --tag-secondary-background: var(--salt-category-9-bold-background);
}

.saltTag-category-10 {
  --tag-primary-background: var(--salt-category-10-background);
  --tag-primary-foreground: var(--salt-category-10-foreground);
  --tag-primary-borderColor: var(--salt-category-10-borderColor);
  --tag-secondary-background: var(--salt-category-10-bold-background);
}
.saltTag-category-11 {
  --tag-primary-background: var(--salt-category-11-background);
  --tag-primary-foreground: var(--salt-category-11-foreground);
  --tag-primary-borderColor: var(--salt-category-11-borderColor);
  --tag-secondary-background: var(--salt-category-11-bold-background);
}
.saltTag-category-12 {
  --tag-primary-background: var(--salt-category-12-background);
  --tag-primary-foreground: var(--salt-category-12-foreground);
  --tag-primary-borderColor: var(--salt-category-12-borderColor);
  --tag-secondary-background: var(--salt-category-12-bold-background);
}
.saltTag-category-13 {
  --tag-primary-background: var(--salt-category-13-background);
  --tag-primary-foreground: var(--salt-category-13-foreground);
  --tag-primary-borderColor: var(--salt-category-13-borderColor);
  --tag-secondary-background: var(--salt-category-13-bold-background);
}
.saltTag-category-14 {
  --tag-primary-background: var(--salt-category-14-background);
  --tag-primary-foreground: var(--salt-category-14-foreground);
  --tag-primary-borderColor: var(--salt-category-14-borderColor);
  --tag-secondary-background: var(--salt-category-14-bold-background);
}
.saltTag-category-15 {
  --tag-primary-background: var(--salt-category-15-background);
  --tag-primary-foreground: var(--salt-category-15-foreground);
  --tag-primary-borderColor: var(--salt-category-15-borderColor);
  --tag-secondary-background: var(--salt-category-15-bold-background);
}
.saltTag-category-16 {
  --tag-primary-background: var(--salt-category-16-background);
  --tag-primary-foreground: var(--salt-category-16-foreground);
  --tag-primary-borderColor: var(--salt-category-16-borderColor);
  --tag-secondary-background: var(--salt-category-16-bold-background);
}
.saltTag-category-17 {
  --tag-primary-background: var(--salt-category-17-background);
  --tag-primary-foreground: var(--salt-category-17-foreground);
  --tag-primary-borderColor: var(--salt-category-17-borderColor);
  --tag-secondary-background: var(--salt-category-17-bold-background);
}
.saltTag-category-18 {
  --tag-primary-background: var(--salt-category-18-background);
  --tag-primary-foreground: var(--salt-category-18-foreground);
  --tag-primary-borderColor: var(--salt-category-18-borderColor);
  --tag-secondary-background: var(--salt-category-18-bold-background);
}
.saltTag-category-19 {
  --tag-primary-background: var(--salt-category-19-background);
  --tag-primary-foreground: var(--salt-category-19-foreground);
  --tag-primary-borderColor: var(--salt-category-19-borderColor);
  --tag-secondary-background: var(--salt-category-19-bold-background);
}
.saltTag-category-20 {
  --tag-primary-background: var(--salt-category-20-background);
  --tag-primary-foreground: var(--salt-category-20-foreground);
  --tag-primary-borderColor: var(--salt-category-20-borderColor);
  --tag-secondary-background: var(--salt-category-20-bold-background);
}
`;const Vt=$("saltTag"),W4=n.forwardRef(function({children:a,className:t,variant:r="primary",category:i=1,bordered:s,...c},u){const d=G();return _({testId:"salt-tag",css:O4,window:d}),e.jsx("div",{ref:u,className:k(Vt(),Vt(`category-${i}`),Vt(r),{[Vt("bordered")]:s},t),...c,children:a})});var E4=`.saltToggleButtonGroup {
  --toggleButtonGroup-borderWidth: var(--salt-size-fixed-100);

  display: flex;
  background: var(--salt-container-primary-background);
  border: var(--toggleButtonGroup-borderWidth) var(--salt-borderStyle-solid) var(--salt-container-bold-borderColor);
  border-radius: var(--salt-palette-corner-weak, 0);
  width: fit-content;
  gap: var(--salt-spacing-50);
  padding: calc(var(--salt-spacing-50) - var(--toggleButtonGroup-borderWidth));
  flex-direction: row;
}

.saltToggleButtonGroup-disabled {
  background: var(--salt-container-primary-background-disabled);
  border-color: var(--salt-container-bold-borderColor-disabled);
  cursor: var(--salt-cursor-disabled);
}

.saltToggleButtonGroup-readOnly {
  background: var(--salt-container-primary-background);
  border-color: var(--salt-container-bold-borderColor);
  cursor: var(--salt-cursor-disabled);
}

.saltToggleButtonGroup .saltToggleButton {
  border-radius: var(--salt-palette-corner-weaker, 0);
}

.saltToggleButtonGroup-horizontal .saltToggleButton {
  height: calc(var(--salt-size-base) - var(--salt-spacing-100));
}

.saltToggleButtonGroup-vertical {
  flex-direction: column;
}

.saltToggleButtonGroup-vertical .saltToggleButton {
  justify-content: start;
}
`;const So=_e("ToggleButtonGroupContext",void 0);function G4(){return n.useContext(So)}const Lt=$("saltToggleButtonGroup");function At(o,a){return Array.isArray(o)&&Array.isArray(a)?o.length===a.length&&o.every((t,r)=>t===a[r]):o===a}const Ea=o=>[...o].sort((a,t)=>{const r=a.element.compareDocumentPosition(t.element);return r&Node.DOCUMENT_POSITION_FOLLOWING?-1:r&Node.DOCUMENT_POSITION_PRECEDING?1:0}),$4=(o,a)=>o.length===a.length&&o.every((t,r)=>t===a[r]),U4=n.forwardRef(function(a,t){const{appearance:r,children:i,className:s,value:c,defaultValue:u,disabled:d,onChange:v,onKeyDown:h,orientation:g="horizontal",readOnly:b,sentiment:m,...f}=a,I=G();_({testId:"salt-toggle-button-group",css:E4,window:I});const p=n.useRef(null),z=he(t,p),[w,x]=ge({default:u,controlled:c,name:"ToggleButtonGroup",state:"value"}),[y,S]=n.useState(w),[R,j]=n.useState([]),V=n.useCallback((T,P)=>{const Q={element:P,value:T};return j(Y=>Ea([...Y.filter(Z=>Z.element!==P),Q])),()=>{j(Y=>Y.includes(Q)?Y.filter(Z=>Z!==Q):Y)}},[]);fe(()=>{j(T=>{const P=Ea(T);return $4(T,P)?T:P})},[i]);const M=n.useCallback((T,...P)=>{const Q=P.length===0?T.currentTarget.value:P[0];x(Q),At(w,Q)||v?.(T)},[v,w]),B=n.useCallback(T=>At(w,T),[w]),C=n.useCallback(T=>{S(T)},[]),L=n.useCallback(T=>{if(R.length===0)return y===T||y===void 0||y==="";const P=R.some(Q=>At(Q.value,y));return At(P?y:R[0].value,T)},[y,R]),K=n.useMemo(()=>({appearance:r,disabled:d,focus:C,isFocused:L,isSelected:B,orientation:g,readOnly:b,registerButton:V,select:M,sentiment:m}),[r,d,C,L,B,g,b,V,M,m]),U=T=>{var P,Q,Y;if(T.altKey||T.ctrlKey||T.metaKey){h?.(T);return}const Z=Array.from(((P=p.current)==null?void 0:P.querySelectorAll("button:not([disabled])"))??[]),ie=ml(p.current),ne=Z.indexOf(ie.activeElement);switch(T.key){case"ArrowDown":case"ArrowRight":Z.length>0&&(T.preventDefault(),(Q=Z[(ne+1)%Z.length])==null||Q.focus());break;case"ArrowUp":case"ArrowLeft":Z.length>0&&(T.preventDefault(),(Y=Z[(ne-1+Z.length)%Z.length])==null||Y.focus());break}h?.(T)};return e.jsx(So.Provider,{value:K,children:e.jsx("div",{"aria-disabled":d,"aria-readonly":b,className:k(Lt(),Lt(g),d&&Lt("disabled"),b&&Lt("readOnly"),s),role:"radiogroup",ref:z,onKeyDown:U,...f,children:i})})});var _4=`.saltToggleButton {
  --toggleButton-borderWidth: var(--salt-size-fixed-100);

  align-items: center;
  appearance: none;
  background: var(--toggleButton-background);
  border-color: var(--toggleButton-borderColor, transparent);
  border-style: solid;
  border-width: var(--toggleButton-borderWidth);
  border-radius: var(--salt-palette-corner-weak, 0);
  box-sizing: border-box;
  color: var(--toggleButton-text-color);
  cursor: var(--salt-cursor-hover);
  display: inline-flex;
  gap: var(--salt-spacing-50);
  height: var(--salt-size-base);
  justify-content: center;
  line-height: var(--salt-text-lineHeight);
  font-size: var(--salt-text-fontSize);
  font-weight: var(--salt-text-action-fontWeight);
  font-family: var(--salt-text-action-fontFamily);
  letter-spacing: var(--salt-text-action-letterSpacing);
  text-transform: var(--salt-text-action-textTransform);
  padding: 0 calc(var(--salt-spacing-100) - var(--toggleButton-borderWidth));
  margin: 0;
  min-width: unset;
  position: relative;
  text-align: var(--salt-text-action-textAlign);
  text-decoration: none;
  transition: none;
  width: auto;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
}

.saltToggleButton:focus-visible {
  outline-style: var(--salt-focused-outlineStyle);
  outline-width: var(--salt-focused-outlineWidth);
  outline-color: var(--salt-focused-outlineColor);
  outline-offset: var(--salt-focused-outlineOffset);
  background: var(--toggleButton-background-hover);
  color: var(--toggleButton-text-color-hover);
  border-color: var(--toggleButton-borderColor-hover);
}

@media (hover: hover) {
  .saltToggleButton:hover {
    background: var(--toggleButton-background-hover);
    color: var(--toggleButton-text-color-hover);
    border-color: var(--toggleButton-borderColor-hover);
  }
}

.saltToggleButton:active {
  background: var(--toggleButton-background-active);
  color: var(--toggleButton-text-color-active);
  border-color: var(--toggleButton-borderColor-active);
}

.saltToggleButton[aria-checked="true"],
.saltToggleButton[aria-pressed="true"] {
  background: var(--toggleButton-background-selected);
  color: var(--toggleButton-text-color-selected);
  cursor: var(--salt-cursor-active);
  border-color: var(--toggleButton-borderColor-selected);
}

.saltToggleButton[aria-checked="true"]:hover {
  cursor: unset;
}

.saltToggleButton[aria-pressed="true"]:hover {
  background: var(--toggleButton-background-selectedHover);
  border-color: var(--toggleButton-borderColor-selectedHover);
}

.saltToggleButton[aria-disabled="true"] {
  background: var(--toggleButton-background);
  color: var(--toggleButton-text-color);
  cursor: var(--salt-cursor-disabled);
  border-color: var(--toggleButton-borderColor);

  opacity: 0.4;
}

.saltToggleButton[aria-checked="true"].saltToggleButton[aria-disabled="true"],
.saltToggleButton[aria-pressed="true"].saltToggleButton[aria-disabled="true"] {
  background: var(--toggleButton-background-selected);
  color: var(--toggleButton-text-color-selected);
  border-color: var(--toggleButton-borderColor-selected);
}

.saltToggleButton.saltToggleButton-readOnly {
  background: var(--toggleButton-background);
  color: var(--toggleButton-text-color);
  cursor: var(--salt-cursor-disabled);
  border-color: var(--toggleButton-borderColor);

  opacity: 0.4;
}

.saltToggleButton[aria-checked="true"].saltToggleButton-readOnly,
.saltToggleButton[aria-pressed="true"].saltToggleButton-readOnly {
  background: var(--toggleButton-background-selected);
  color: var(--toggleButton-text-color-selected);
  border-color: var(--toggleButton-borderColor-selected);

  opacity: unset;
}

.saltToggleButton-neutral.saltToggleButton-solid {
  --toggleButton-text-color: var(--salt-actionable-subtle-foreground);
  --toggleButton-text-color-hover: var(--salt-actionable-subtle-foreground-hover);
  --toggleButton-text-color-active: var(--salt-actionable-subtle-foreground-active);
  --toggleButton-text-color-selected: var(--salt-actionable-foreground-selected);
  --toggleButton-background: var(--salt-actionable-subtle-background);
  --toggleButton-background-hover: var(--salt-actionable-subtle-background-hover);
  --toggleButton-background-active: var(--salt-actionable-subtle-background-active);
  --toggleButton-background-selected: var(--salt-actionable-background-selected);
  --toggleButton-borderColor: var(--salt-actionable-subtle-borderColor);
  --toggleButton-borderColor-hover: var(--salt-actionable-subtle-borderColor-hover);
  --toggleButton-borderColor-active: var(--salt-actionable-subtle-borderColor-active);
  --toggleButton-borderColor-selected: var(--salt-actionable-borderColor-selected);
  --toggleButton-borderColor-selectedHover: var(--salt-actionable-bold-borderColor-hover);
  --toggleButton-background-selectedHover: var(--salt-actionable-bold-background-hover);
}

.saltToggleButton-accented.saltToggleButton-solid {
  --toggleButton-text-color: var(--salt-actionable-accented-subtle-foreground);
  --toggleButton-text-color-hover: var(--salt-actionable-accented-subtle-foreground-hover);
  --toggleButton-text-color-active: var(--salt-actionable-accented-subtle-foreground-active);
  --toggleButton-text-color-selected: var(--salt-actionable-accented-foreground-selected);
  --toggleButton-background: var(--salt-actionable-accented-subtle-background);
  --toggleButton-background-hover: var(--salt-actionable-accented-subtle-background-hover);
  --toggleButton-background-active: var(--salt-actionable-accented-subtle-background-active);
  --toggleButton-background-selected: var(--salt-actionable-accented-background-selected);
  --toggleButton-borderColor: var(--salt-actionable-accented-subtle-borderColor);
  --toggleButton-borderColor-hover: var(--salt-actionable-accented-subtle-borderColor-hover);
  --toggleButton-borderColor-active: var(--salt-actionable-accented-subtle-borderColor-active);
  --toggleButton-borderColor-selected: var(--salt-actionable-accented-borderColor-selected);
  --toggleButton-borderColor-selectedHover: var(--salt-actionable-accented-bold-borderColor-hover);
  --toggleButton-background-selectedHover: var(--salt-actionable-accented-bold-background-hover);
}

.saltToggleButton-positive.saltToggleButton-solid {
  --toggleButton-text-color: var(--salt-actionable-positive-subtle-foreground);
  --toggleButton-text-color-hover: var(--salt-actionable-positive-subtle-foreground-hover);
  --toggleButton-text-color-active: var(--salt-actionable-positive-subtle-foreground-active);
  --toggleButton-text-color-selected: var(--salt-actionable-positive-foreground-selected);
  --toggleButton-background: var(--salt-actionable-positive-subtle-background);
  --toggleButton-background-hover: var(--salt-actionable-positive-subtle-background-hover);
  --toggleButton-background-active: var(--salt-actionable-positive-subtle-background-active);
  --toggleButton-background-selected: var(--salt-actionable-positive-background-selected);
  --toggleButton-borderColor: var(--salt-actionable-positive-subtle-borderColor);
  --toggleButton-borderColor-hover: var(--salt-actionable-positive-subtle-borderColor-hover);
  --toggleButton-borderColor-active: var(--salt-actionable-positive-subtle-borderColor-active);
  --toggleButton-borderColor-selected: var(--salt-actionable-positive-borderColor-selected);
  --toggleButton-borderColor-selectedHover: var(--salt-actionable-positive-bold-borderColor-hover);
  --toggleButton-background-selectedHover: var(--salt-actionable-accented-bold-background-hover);
}

.saltToggleButton-negative.saltToggleButton-solid {
  --toggleButton-text-color: var(--salt-actionable-negative-subtle-foreground);
  --toggleButton-text-color-hover: var(--salt-actionable-negative-subtle-foreground-hover);
  --toggleButton-text-color-active: var(--salt-actionable-negative-subtle-foreground-active);
  --toggleButton-text-color-selected: var(--salt-actionable-negative-foreground-selected);
  --toggleButton-background: var(--salt-actionable-negative-subtle-background);
  --toggleButton-background-hover: var(--salt-actionable-negative-subtle-background-hover);
  --toggleButton-background-active: var(--salt-actionable-negative-subtle-background-active);
  --toggleButton-background-selected: var(--salt-actionable-negative-background-selected);
  --toggleButton-borderColor: var(--salt-actionable-negative-subtle-borderColor);
  --toggleButton-borderColor-hover: var(--salt-actionable-negative-subtle-borderColor-hover);
  --toggleButton-borderColor-active: var(--salt-actionable-negative-subtle-borderColor-active);
  --toggleButton-borderColor-selected: var(--salt-actionable-negative-borderColor-selected);
  --toggleButton-borderColor-selectedHover: var(--salt-actionable-negative-bold-borderColor-hover);
  --toggleButton-background-selectedHover: var(--salt-actionable-negative-bold-background-hover);
}

.saltToggleButton-caution.saltToggleButton-solid {
  --toggleButton-text-color: var(--salt-actionable-caution-subtle-foreground);
  --toggleButton-text-color-hover: var(--salt-actionable-caution-subtle-foreground-hover);
  --toggleButton-text-color-active: var(--salt-actionable-caution-subtle-foreground-active);
  --toggleButton-text-color-selected: var(--salt-actionable-caution-foreground-selected);
  --toggleButton-background: var(--salt-actionable-caution-subtle-background);
  --toggleButton-background-hover: var(--salt-actionable-caution-subtle-background-hover);
  --toggleButton-background-active: var(--salt-actionable-caution-subtle-background-active);
  --toggleButton-background-selected: var(--salt-actionable-caution-background-selected);
  --toggleButton-borderColor: var(--salt-actionable-caution-subtle-borderColor);
  --toggleButton-borderColor-hover: var(--salt-actionable-caution-subtle-borderColor-hover);
  --toggleButton-borderColor-active: var(--salt-actionable-caution-subtle-borderColor-active);
  --toggleButton-borderColor-selected: var(--salt-actionable-caution-borderColor-selected);
  --toggleButton-borderColor-selectedHover: var(--salt-actionable-caution-bold-borderColor-hover);
  --toggleButton-background-selectedHover: var(--salt-actionable-caution-bold-background-hover);
}

.saltToggleButton-neutral.saltToggleButton-bordered {
  --toggleButton-text-color: var(--salt-actionable-foreground);
  --toggleButton-text-color-hover: var(--salt-actionable-foreground-hover);
  --toggleButton-text-color-active: var(--salt-actionable-foreground);
  --toggleButton-text-color-selected: var(--salt-actionable-foreground-selected);
  --toggleButton-background: var(--salt-actionable-background);
  --toggleButton-background-hover: var(--salt-actionable-background-hover);
  --toggleButton-background-active: var(--salt-actionable-background);
  --toggleButton-background-selected: var(--salt-actionable-background-selected);
  --toggleButton-borderColor: var(--salt-actionable-borderColor);
  --toggleButton-borderColor-hover: var(--salt-actionable-borderColor);
  --toggleButton-borderColor-active: var(--salt-actionable-borderColor);
  --toggleButton-borderColor-selected: var(--salt-actionable-borderColor-selected);
  --toggleButton-borderColor-selectedHover: var(--salt-actionable-bold-borderColor-hover);
  --toggleButton-background-selectedHover: var(--salt-actionable-bold-background-hover);
}

.saltToggleButton-accented.saltToggleButton-bordered {
  --toggleButton-text-color: var(--salt-actionable-accented-foreground);
  --toggleButton-text-color-hover: var(--salt-actionable-accented-foreground-hover);
  --toggleButton-text-color-active: var(--salt-actionable-accented-foreground);
  --toggleButton-text-color-selected: var(--salt-actionable-accented-foreground-selected);
  --toggleButton-background: var(--salt-actionable-accented-background);
  --toggleButton-background-hover: var(--salt-actionable-accented-background-hover);
  --toggleButton-background-active: var(--salt-actionable-accented-background);
  --toggleButton-background-selected: var(--salt-actionable-accented-background-selected);
  --toggleButton-borderColor: var(--salt-actionable-accented-borderColor);
  --toggleButton-borderColor-hover: var(--salt-actionable-accented-borderColor);
  --toggleButton-borderColor-active: var(--salt-actionable-accented-borderColor);
  --toggleButton-borderColor-selected: var(--salt-actionable-accented-borderColor-selected);
  --toggleButton-borderColor-selectedHover: var(--salt-actionable-accented-bold-borderColor-hover);
  --toggleButton-background-selectedHover: var(--salt-actionable-accented-bold-background-hover);
}

.saltToggleButton-positive.saltToggleButton-bordered {
  --toggleButton-text-color: var(--salt-actionable-positive-foreground);
  --toggleButton-text-color-hover: var(--salt-actionable-positive-foreground-hover);
  --toggleButton-text-color-active: var(--salt-actionable-positive-foreground);
  --toggleButton-text-color-selected: var(--salt-actionable-positive-foreground-selected);
  --toggleButton-background: var(--salt-actionable-positive-background);
  --toggleButton-background-hover: var(--salt-actionable-positive-background-hover);
  --toggleButton-background-active: var(--salt-actionable-positive-background);
  --toggleButton-background-selected: var(--salt-actionable-positive-background-selected);
  --toggleButton-borderColor: var(--salt-actionable-positive-borderColor);
  --toggleButton-borderColor-hover: var(--salt-actionable-positive-borderColor);
  --toggleButton-borderColor-active: var(--salt-actionable-positive-borderColor);
  --toggleButton-borderColor-selected: var(--salt-actionable-positive-borderColor-selected);
  --toggleButton-borderColor-selectedHover: var(--salt-actionable-positive-bold-borderColor-hover);
  --toggleButton-background-selectedHover: var(--salt-actionable-positive-bold-background-hover);
}

.saltToggleButton-negative.saltToggleButton-bordered {
  --toggleButton-text-color: var(--salt-actionable-negative-foreground);
  --toggleButton-text-color-hover: var(--salt-actionable-negative-foreground-hover);
  --toggleButton-text-color-active: var(--salt-actionable-negative-foreground);
  --toggleButton-text-color-selected: var(--salt-actionable-negative-foreground-selected);
  --toggleButton-background: var(--salt-actionable-negative-background);
  --toggleButton-background-hover: var(--salt-actionable-negative-background-hover);
  --toggleButton-background-active: var(--salt-actionable-negative-background);
  --toggleButton-background-selected: var(--salt-actionable-negative-background-selected);
  --toggleButton-borderColor: var(--salt-actionable-negative-borderColor);
  --toggleButton-borderColor-hover: var(--salt-actionable-negative-borderColor);
  --toggleButton-borderColor-active: var(--salt-actionable-negative-borderColor);
  --toggleButton-borderColor-selected: var(--salt-actionable-negative-borderColor-selected);
  --toggleButton-borderColor-selectedHover: var(--salt-actionable-negative-bold-borderColor-hover);
  --toggleButton-background-selectedHover: var(--salt-actionable-negative-bold-background-hover);
}

.saltToggleButton-caution.saltToggleButton-bordered {
  --toggleButton-text-color: var(--salt-actionable-caution-foreground);
  --toggleButton-text-color-hover: var(--salt-actionable-caution-foreground-hover);
  --toggleButton-text-color-active: var(--salt-actionable-caution-foreground);
  --toggleButton-text-color-selected: var(--salt-actionable-caution-foreground-selected);
  --toggleButton-background: var(--salt-actionable-caution-background);
  --toggleButton-background-hover: var(--salt-actionable-caution-background-hover);
  --toggleButton-background-active: var(--salt-actionable-caution-background);
  --toggleButton-background-selected: var(--salt-actionable-caution-background-selected);
  --toggleButton-borderColor: var(--salt-actionable-caution-borderColor);
  --toggleButton-borderColor-hover: var(--salt-actionable-caution-borderColor);
  --toggleButton-borderColor-active: var(--salt-actionable-caution-borderColor);
  --toggleButton-borderColor-selected: var(--salt-actionable-caution-borderColor-selected);
  --toggleButton-borderColor-selectedHover: var(--salt-actionable-caution-bold-borderColor-hover);
  --toggleButton-background-selectedHover: var(--salt-actionable-caution-bold-background-hover);
}
`;const Tt=$("saltToggleButton"),Ga=n.forwardRef(function(a,t){const{className:r,props:i}=Ft("saltToggleButton",a),{appearance:s,children:c,disabled:u,value:d,onClick:v,onFocus:h,onChange:g,readOnly:b,selected:m,defaultSelected:f,sentiment:I,...p}=i,z=G();_({testId:"salt-toggle-button",css:_4,window:z});const w=n.useRef(null),x=he(t,w),y=G4(),S=y?y.isSelected(d):m,R=y?y?.isFocused(d):!0,j=I||y?.sentiment||"neutral",V=s||y?.appearance||"solid",M=y?.disabled||u,B=y?.readOnly||b,C=y?.registerButton;fe(()=>{if(!M&&w.current&&C)return C(d,w.current)},[M,C,d]);const[L,K]=ge({controlled:S,default:!!f,name:"ToggleButton",state:"selected"}),U=Q=>{M||B||(y?.select(Q,d),K(!L),g?.(Q),v?.(Q))},T=Q=>{y?.focus(d),h?.(Q)},P={"aria-readonly":b,"aria-pressed":y?void 0:L,"aria-checked":y?L:void 0,"aria-disabled":M,role:y?"radio":void 0,className:k(Tt(),Tt(j),Tt(V),B&&Tt("readOnly"),r),onClick:U,onFocus:T,tabIndex:R?0:-1,value:d,type:"button",disabled:M,...p};return e.jsx("button",{ref:x,...P,children:c})});var K4=`/* Styles applied to root component */
.saltTooltip {
  --tooltip-background: var(--saltTooltip-background, var(--salt-container-primary-background));
  --tooltip-zIndex: var(--saltTooltip-zIndex, var(--salt-zIndex-flyover));
  /* apply icon margin based on the text line height so it's aligned on all densities */
  --tooltip-icon-marginTop: calc((var(--salt-text-lineHeight) - max(var(--salt-size-icon), 12px)) / 2);
  --tooltip-status-borderColor: var(--salt-container-bold-borderColor);
  /* Single line height should be size-base */
  --tooltip-borderWidth: var(--salt-size-fixed-100);
  --tooltip-padding: calc(var(--salt-spacing-75) - var(--tooltip-borderWidth)) var(--salt-spacing-100);
}

.saltTooltip {
  box-sizing: border-box;
  background: var(--tooltip-background);
  border-color: var(--saltTooltip-borderColor, var(--tooltip-status-borderColor));
  border-style: var(--saltTooltip-borderStyle, var(--salt-borderStyle-solid));
  border-width: var(--saltTooltip-borderWidth, var(--tooltip-borderWidth));
  border-radius: var(--saltTooltip-borderRadius, var(--salt-palette-corner-weak, 0));
  box-shadow: var(--saltTooltip-shadow, var(--salt-overlayable-shadow-popout));
  color: var(--saltTooltip-text-color, var(--salt-content-primary-foreground));
  font-family: var(--salt-text-fontFamily);
  font-size: var(--saltTooltip-fontSize, var(--salt-text-fontSize));
  font-weight: var(--saltTooltip-fontWeight, var(--salt-text-fontWeight));
  line-height: var(--saltTooltip-lineHeight, var(--salt-text-lineHeight));
  letter-spacing: var(--salt-text-letterSpacing);
  max-width: var(--saltTooltip-maxWidth, 60ch);
  padding: var(--saltTooltip-padding, var(--tooltip-padding));
  position: relative;
  text-align: var(--saltTooltip-textAlign, left);
  z-index: var(--tooltip-zIndex);
}

/* Styles applied to container */
.saltTooltip-container {
  display: flex;
  align-items: baseline;
  position: relative;
}

/* Styles applied to content */
.saltTooltip-content {
  overflow: hidden;
}

/* Styles applied to status indicator */
.saltTooltip-icon {
  --saltIcon-margin: var(--tooltip-icon-marginTop) var(--salt-spacing-75) 0 0;
  vertical-align: top;
  align-self: flex-start;
}

/* Styles applied when status = "info" */
.saltTooltip-info {
  --tooltip-status-borderColor: var(--salt-status-info-borderColor);
}

/* Styles applied when status = "error" */
.saltTooltip-error {
  --tooltip-status-borderColor: var(--salt-status-error-borderColor);
}

/* Styles applied when status = "warning" */
.saltTooltip-warning {
  --tooltip-status-borderColor: var(--salt-status-warning-borderColor);
}

/* Styles applied when status = "success" */
.saltTooltip-success {
  --tooltip-status-borderColor: var(--salt-status-success-borderColor);
}
`;const qt=$("saltTooltip"),Q4=o=>{const a=G();_({testId:"salt-tooltip",css:K4,window:a});const{a11yProps:t}=Ne(),{arrowProps:r,content:i,hideArrow:s,hideIcon:c,status:u}=o;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:qt("container"),children:[!c&&u&&e.jsx(Ot,{status:u,size:1,className:qt("icon")}),e.jsx("span",{id:t?.["aria-describedby"],className:qt("content"),children:i})]}),!s&&e.jsx(ro,{...r,className:qt("arrow"),strokeWidth:1,fill:"var(--salt-container-primary-background)",stroke:"var(--tooltip-status-borderColor)",height:6,width:12})]})};function X4(o){return o?.ownerDocument??document}function J4(o){return X4(o).defaultView??window}function Z4(o){return o?o instanceof J4(o).Element:!1}function Y4(o,a,t){return t&&t!=="mouse"?0:typeof o=="number"?o:o?.[a]}const e3=(o,{delay:a=0})=>{const{open:t,dataRef:r,refs:i}=o,s=n.useRef(void 0),c=n.useRef(void 0),u=n.useRef(!0),{announce:d}=Ja();fe(()=>{t||(s.current=void 0)}),n.useEffect(()=>{const h=i.reference.current;function g(){var m;const f=(m=i.floating.current)==null?void 0:m.innerText;f&&d(f)}function b(m){clearTimeout(c.current),!t&&(u.current=!1,r.current.openEvent=m,a?c.current=window.setTimeout(()=>{g()},Y4(a,"open",s.current)):g())}if(Z4(h))return h.addEventListener("mouseenter",b),()=>{h.removeEventListener("mouseenter",b)}},[r,a,t,i.reference,i.floating,d]);function v(h){s.current=h.pointerType}return{reference:{onPointerDown:v,onPointerEnter:v},floating:{onMouseEnter(){clearTimeout(c.current)}}}};function t3(o){const{enterDelay:a,disabled:t,leaveDelay:r,open:i,onOpenChange:s,placement:c,disableHoverListener:u,disableFocusListener:d}=o??{},v=n.useRef(null),[h,g]=ge({controlled:i,default:!1,name:"Tooltip",state:"open"}),b=C=>{g(C),s?.(C)},{floating:m,reference:f,x:I,y:p,strategy:z,placement:w,context:x,elements:y}=Wt({open:t?!1:h,onOpenChange:b,placement:c,middleware:[fa(8),ao({limiter:lo()}),ga({fallbackAxisSideDirection:"end",fallbackStrategy:"initialPlacement"}),oo({element:v})]}),{getReferenceProps:S,getFloatingProps:R}=Et([Il(x,{delay:{open:a,close:r},enabled:!(u||t),handleClose:wl()}),Ya(x,{enabled:!(d||t)}),no(x,{role:"tooltip"}),Gt(x,{enabled:!t}),e3(x,{delay:{open:a,close:r}})]);return{arrowProps:{ref:v,context:x},open:h,floating:m,reference:f,getTooltipProps:()=>{const{tabIndex:C,...L}=R({"data-placement":w,ref:m});return L},getTriggerProps:()=>S({ref:f}),getTooltipPosition:()=>{var C,L;return{top:p??0,left:I??0,position:z,width:(C=y.floating)==null?void 0:C.offsetWidth,height:(L=y.floating)==null?void 0:L.offsetHeight}}}}const $a=$("saltTooltip"),a3=n.forwardRef(function(a,t){const{className:r,props:i}=Ft("saltTooltip",a),{children:s,disabled:c=!1,hideArrow:u=!1,hideIcon:d=!1,open:v,content:h,status:g,placement:b="right",enterDelay:m=300,leaveDelay:f=0,...I}=i,{disabled:p,validationStatus:z}=Ne(),w=c||p,x=g??(z||void 0),{Component:y}=xa(),S={open:v,disabled:w,placement:b,enterDelay:m,leaveDelay:f,...I},{arrowProps:R,open:j,floating:V,reference:M,getTriggerProps:B,getTooltipProps:C,getTooltipPosition:L}=t3(S),K=he(so(s),M),U=he(V,t),T=h!=null&&h!=="";return e.jsxs(e.Fragment,{children:[n.isValidElement(s)&&n.cloneElement(s,{...ha(B(),s.props),ref:K}),e.jsx(y,{className:k($a(),{[$a(x??"")]:x},r),open:j&&!w&&T,...C(),ref:U,...L(),children:e.jsx(Q4,{hideIcon:d,status:x,content:h,hideArrow:u,arrowProps:R})})]})});var o3=`.saltTree {
  display: flex;
  flex-direction: column;
  gap: var(--salt-spacing-fixed-100);
  list-style: none;
  margin: 0;
  padding: 0;
  outline: none;
  width: 100%;
  box-sizing: border-box;
}

.saltTree-disabled {
  cursor: var(--salt-cursor-disabled);
}
`;const jo=_e("Tree Context",void 0),n3=jo.Provider;function wa(){const o=n.useContext(jo);if(!o)throw new Error("useTreeContext must be used within a TreeProvider");return o}const Ro=_e("TreeNodeContext",void 0),l3=Ro.Provider;function ya(){return n.useContext(Ro)}function r3(o){return n.isValidElement(o)&&o.type===n.Fragment}function za(o){return n.isValidElement(o)&&typeof o.props.value=="string"}function Ut(o){const a=[];return n.Children.forEach(o,t=>{r3(t)?a.push(...Ut(t.props.children)):t!=null&&typeof t!="boolean"&&a.push(t)}),a}function Ua(o){return Ut(o).filter(za)}function s3(o){const a=new Map,t=[],r=new Map;function i(s,c,u=!1){const d=Ua(s),v=[];for(const h of d){const g=h.props.value,m=Ua(h.props.children).length>0,f=u||!!h.props.disabled;a.set(g,{value:g,parentValue:c,hasChildren:m,disabled:f}),v.push(g),m&&i(h.props.children,g,f)}c!==void 0?r.set(c,v):t.push(...v)}return i(o),{nodes:a,rootValues:t,childrenOf:r}}function i3(o,a){return o.length!==a.length?!1:o.every((t,r)=>t===a[r])}function _a(o,a,t){const r=new Set(o);function i(s){const c=a.childrenOf.get(s)??[];for(const u of c)t.has(u)||(r.add(u),i(u))}for(const s of o)i(s);return Array.from(r)}function Ka(o,a,t){const r=new Set(o);for(const[i,s]of a.nodes)if(s.hasChildren&&!r.has(i)&&!t.has(i)){const u=(a.childrenOf.get(i)??[]).filter(d=>!t.has(d));u.length>0&&u.every(d=>r.has(d))&&r.add(i)}return Array.from(r)}function d3(o){const{defaultExpanded:a=[],expanded:t,onExpandedChange:r,defaultSelected:i=[],selected:s,onSelectionChange:c,multiselect:u=!1,disabled:d=!1,children:v}=o,h=u?i:i.slice(0,1),g=s&&!u?s.slice(0,1):s,b=n.useMemo(()=>s3(v),[v]),m=n.useRef(new Map),f=n.useRef(!1),I=n.useMemo(()=>{const H=new Set;for(const[q,W]of b.nodes)W.disabled&&H.add(q);return H},[b]),[p,z]=ge({controlled:t,default:a,name:"Tree",state:"expanded"}),w=n.useMemo(()=>new Set(p),[p]),x=n.useMemo(()=>{if(!u||h.length===0)return h;let H=_a(h,b,I);return H=Ka(H,b,I),H},[h,b,I,u]),[y,S,R]=ge({controlled:g,default:x,name:"Tree",state:"selected"}),j=n.useCallback(H=>{f.current=!0,S(H)},[]),V=n.useMemo(()=>new Set(y),[y]),[M,B]=n.useState(void 0),C=n.useCallback((H,q)=>(m.current.set(H,q),()=>{m.current.get(H)===q&&m.current.delete(H)}),[]),L=n.useCallback(H=>m.current.get(H),[]),K=n.useCallback(H=>b.nodes.get(H),[b]),U=n.useCallback(H=>{var q;return(q=b.nodes.get(H))==null?void 0:q.parentValue},[b]),T=n.useCallback(H=>b.childrenOf.get(H)??[],[b]),P=n.useCallback(H=>{const q=[];function W(O){const A=b.childrenOf.get(O)??[];for(const E of A)I.has(E)||(q.push(E),W(E))}return W(H),q},[b,I]),Q=n.useCallback(H=>{var q,W;const O=[];let A=(q=b.nodes.get(H))==null?void 0:q.parentValue;for(;A;)O.push(A),A=(W=b.nodes.get(A))==null?void 0:W.parentValue;return O},[b]),Y=n.useCallback((H,q)=>{const O=!w.has(q)?[...p,q]:p.filter(A=>A!==q);z(O),r?.(H,O)},[p,w,r]),Z=n.useCallback(H=>{const q=new Set,W=new Set(H);for(const O of H){let A=U(O);for(;A;){const ae=T(A).filter(Ce=>!I.has(Ce));if(ae.length===0){A=U(A);continue}const te=ae.filter(Ce=>W.has(Ce)),J=te.length===ae.length,de=te.length>0;(ae.some(Ce=>q.has(Ce))||de&&!J)&&q.add(A),A=U(A)}}return q},[U,T,I]),ie=n.useMemo(()=>u?Z(y):new Set,[u,y,Z]);n.useEffect(()=>{if(f.current){f.current=!1;return}if(R||!u||y.length===0)return;let H=_a(y,b,I);H=Ka(H,b,I),i3(y,H)||S(H)},[R,u,y,b,I]);const ne=(H,q)=>{const W=Q(q);for(const O of W){const E=(b.childrenOf.get(O)??[]).filter(te=>!I.has(te));if(E.length===0)continue;E.every(te=>H.has(te))?H.add(O):H.delete(O)}return Array.from(H)},ue=H=>{const q=new Set(y),W=P(H);if(q.has(H)){q.delete(H);const O=new Set(W);for(const A of O)q.delete(A)}else{q.add(H);for(const O of W)q.has(O)||q.add(O)}return ne(q,H)},ee=n.useCallback((H,q)=>{if(d||I.has(q))return;let W;u?W=ue(q):W=V.has(q)?[]:[q],S(W),c?.(H,W)},[d,I,u,y,c]),le=n.useMemo(()=>{const H=[];function q(W){for(const O of W){H.push(O);const A=b.nodes.get(O);if(A?.hasChildren&&w.has(O)){const E=b.childrenOf.get(O)??[];q(E)}}}return q(b.rootValues),H},[b,w]),F=n.useMemo(()=>{if(M)return M;const H=le.find(q=>V.has(q));return H!==void 0?H:le[0]},[M,V,le]);return{expandedArray:p,setExpandedArray:z,expandedState:w,toggleExpanded:Y,selectedState:y,selectedSet:V,setSelectedState:S,setVisibleSelectionState:j,select:ee,multiselect:u,disabled:d,disabledIdsSet:I,treeModel:b,getNodeMeta:K,getParent:U,getChildren:T,getDescendants:P,getAncestors:Q,visibleNodes:le,tabbableNodeId:F,registerElement:C,getElement:L,activeNode:M,setActiveNode:B,indeterminateState:ie}}const la=$("saltTree"),c3=n.forwardRef(function(a,t){const{children:r,className:i,defaultExpanded:s,expanded:c,onExpandedChange:u,defaultSelected:d,selected:v,onSelectionChange:h,multiselect:g=!1,disabled:b=!1,onKeyDown:m,onBlur:f,...I}=a,p=G();_({testId:"salt-tree",css:o3,window:p});const z=d3({defaultExpanded:s,expanded:c,onExpandedChange:u,defaultSelected:d,selected:v,onSelectionChange:h,multiselect:g,disabled:b,children:r}),{activeNode:w,setActiveNode:x,expandedArray:y,setExpandedArray:S,expandedState:R,toggleExpanded:j,select:V,selectedSet:M,setVisibleSelectionState:B,visibleNodes:C,getNodeMeta:L,getElement:K,getParent:U,getChildren:T,treeModel:P,disabledIdsSet:Q}=z,Y=n.useRef(""),Z=n.useRef(null),ie=n.useRef(null);n.useEffect(()=>()=>{Z.current&&clearTimeout(Z.current)},[]);const ne=F=>{var H;f?.(F);const q=F.relatedTarget;(H=ie.current)!=null&&H.contains(q)||x(void 0)},ue=F=>{const H=K(F);return H?p?.document.activeElement===H?"already-focused":(H.focus(),H.scrollIntoView({block:"nearest",inline:"nearest"}),"focused"):"missing"},ee=F=>{var H,q;if(m?.(F),b||C.length===0)return;const W=w?C.indexOf(w):-1;let O,A=!1;switch(F.key){case"ArrowDown":{A=!0;const E=W+1;E<C.length&&(O=C[E]);break}case"ArrowUp":{A=!0;const E=W-1;E>=0&&(O=C[E]);break}case"ArrowRight":{if(A=!0,w){const E=L(w),ae=Q.has(w),te=!!E?.hasChildren,J=R.has(w);if(!ae&&te)if(!J)j(F,w);else{const de=C.find(He=>U(He)===w);de&&(O=de)}}break}case"ArrowLeft":{if(A=!0,w&&!Q.has(w))if(R.has(w))j(F,w);else{const te=U(w);te&&(O=te)}break}case"Home":{A=!0,O=C[0];break}case"End":{A=!0,O=C[C.length-1];break}case"Enter":{A=!0,w&&V(F,w);break}case" ":{A=!0,w&&V(F,w);break}case"*":{if(A=!0,w){const E=U(w),te=(E?T(E):P.rootValues).filter(J=>{const de=L(J);return de?.hasChildren&&!R.has(J)&&!Q.has(J)});if(te.length>0){const J=[...y,...te];S(J),u?.(F,J)}}break}default:{if(F.key.length===1&&!F.ctrlKey&&!F.metaKey&&!F.altKey){A=!0,Z.current&&clearTimeout(Z.current),Y.current+=F.key.toLowerCase();const E=Y.current;Z.current=setTimeout(()=>{Y.current=""},500);const ae=w?C.indexOf(w):-1;let te=!1;for(let J=ae+1;J<C.length;J++){const de=K(C[J]);if((H=de?.textContent)!=null&&H.toLowerCase().startsWith(E)){O=C[J],te=!0;break}}if(!te)for(let J=0;J<=ae;J++){const de=K(C[J]);if((q=de?.textContent)!=null&&q.toLowerCase().startsWith(E)){O=C[J];break}}}break}}if((F.ctrlKey||F.metaKey)&&F.key==="a"&&g){A=!0,F.preventDefault();const E=C.filter(J=>!Q.has(J)),te=E.every(J=>M.has(J))?[]:E;B(te),h?.(F,te);return}if(F.shiftKey&&(F.key==="ArrowUp"||F.key==="ArrowDown")&&g){A=!0;const E=F.key==="ArrowDown",ae=w?C.indexOf(w):-1,te=E?ae+1:ae-1;if(te>=0&&te<C.length){const J=C[te];Q.has(J)||(V(F,J),O=J)}}A&&(F.preventDefault(),F.stopPropagation()),O!==void 0&&ue(O)!=="focused"&&x(O)},le=he(ie,t);return e.jsx(n3,{value:z,children:e.jsx("ul",{ref:le,role:"tree","aria-multiselectable":g?!0:void 0,"aria-disabled":b||void 0,className:k(la(),{[la("disabled")]:b,[la("multiselect")]:g},i),onKeyDown:ee,onBlur:ne,...I,children:r})})});var u3=`.saltTreeNode {
  list-style: none;
  position: relative;
  cursor: var(--salt-cursor-hover);
}

.saltTreeNode:focus {
  outline: none;
}

/* Focus visible styles - applied when keyboard navigation is used */
.saltTreeNode:focus-visible > .saltTreeNodeTrigger,
.saltTreeNode-focusVisible > .saltTreeNodeTrigger {
  outline: var(--salt-focused-outline);
  outline-offset: calc(var(--salt-size-fixed-100) * -2);
  position: relative;
  z-index: calc(var(--salt-zIndex-default) + 1);
}

/* Selected + focus visible */
.saltTreeNode-selected:focus-visible > .saltTreeNodeTrigger,
.saltTreeNode-selected.saltTreeNode-focusVisible > .saltTreeNodeTrigger {
  outline: var(--salt-focused-outline);
  outline-offset: calc(var(--salt-size-fixed-100) * -2);
  z-index: calc(var(--salt-zIndex-default) + 1);
}

.saltTreeNode-group {
  display: flex;
  flex-direction: column;
  gap: var(--salt-spacing-fixed-100);
  list-style: none;
  margin: 0;
  padding: 0;
  padding-top: var(--salt-spacing-fixed-100);
}

.saltTreeNode-checkbox {
  flex-shrink: 0;
  height: var(--salt-size-selectable);
}

.saltTreeNode-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--saltTreeNodeTrigger-iconSize);
  min-width: var(--saltTreeNodeTrigger-iconSize);
  height: var(--saltTreeNodeTrigger-iconSize);
  flex-shrink: 0;
}

.saltTreeNode-icon > * {
  color: var(--salt-content-primary-foreground);
}
`,v3=`.saltTreeNodeLabel {
  flex: 1;
  font-family: var(--salt-text-fontFamily);
  font-size: var(--salt-text-fontSize);
  font-weight: var(--salt-text-fontWeight);
  line-height: var(--salt-text-lineHeight);
  letter-spacing: var(--salt-text-letterSpacing);
  word-break: break-word;
}
`;const h3=$("saltTreeNodeLabel"),b3=n.forwardRef(function(a,t){const{children:r,className:i,...s}=a,c=G();return _({testId:"salt-tree-node-label",css:v3,window:c}),e.jsx("span",{ref:t,className:k(h3(),i),...s,children:r})});var p3=`.saltTreeNodeExpansionIcon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--saltTreeNodeTrigger-iconSize);
  min-width: var(--saltTreeNodeTrigger-iconSize);
  height: var(--saltTreeNodeTrigger-iconSize);
  flex-shrink: 0;
  position: relative;
}

.saltTreeNodeExpansionIcon-icon {
  color: var(--salt-content-primary-foreground);
}

.saltTreeNodeExpansionIcon::before {
  content: "";
  display: block;
  position: absolute;
  width: var(--salt-size-base);
  height: var(--salt-size-base);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
`;const Pt=$("saltTreeNodeExpansionIcon"),f3=n.forwardRef(function(a,t){const{className:r,onClick:i,...s}=a,c=G();_({testId:"salt-tree-node-expansion-icon",css:p3,window:c});const u=ya();if(!u)throw new Error("TreeNodeExpansionIcon must be used within a TreeNode");const{value:d,hasChildren:v,expanded:h,disabled:g}=u,{toggleExpanded:b}=wa(),{ExpandGroupIcon:m,CollapseGroupIcon:f}=Ye(),I=z=>{i?.(z),!(g||!v)&&b(z,d)};if(!v)return e.jsx("span",{ref:t,className:k(Pt(),Pt("placeholder"),r),"aria-hidden":!0,...s});const p=h?f:m;return e.jsx("span",{ref:t,className:k(Pt(),r),onClick:I,"aria-hidden":!0,...s,children:e.jsx(p,{className:Pt("icon")})})});var g3=`.saltTreeNodeTrigger {
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  gap: var(--salt-spacing-100);
  width: 100%;

  padding-top: calc(var(--salt-spacing-75) + var(--salt-spacing-50));
  padding-bottom: calc(var(--salt-spacing-75) + var(--salt-spacing-50));
  padding-right: var(--salt-spacing-100);
  /* Keep a fixed spacing-100 outer left padding for all nodes, then add one
   indent step per additional level. Each indent step = (icon column width +
   inter-item gap).
   Level-1 nodes get no extra indent; level-2 gets 1 step, level-3 gets 2, etc.
   */
  --saltTreeNodeTrigger-iconSize: max(var(--salt-size-icon), 12px);
  --saltTreeNodeTrigger-indentStep: calc(var(--saltTreeNodeTrigger-iconSize) + var(--salt-spacing-100));
  --saltTreeNodeTrigger-iconOffsetY: calc((var(--salt-text-lineHeight) - var(--saltTreeNodeTrigger-iconSize)) / 2);
  --saltTreeNodeTrigger-checkboxOffsetY: calc((var(--salt-text-lineHeight) - var(--salt-size-selectable)) / 2);
  padding-left: calc(var(--salt-spacing-100) + (var(--saltTreeNodeTrigger-indentStep) * (var(--saltTreeNode-level, 1) - 1)));
  background: var(--salt-selectable-background);
  color: var(--salt-content-primary-foreground);
}

/* Account for selectable and icon token size differences */
.saltTree-multiselect .saltTreeNodeTrigger {
  --saltTreeNodeTrigger-indentStep: calc(((var(--saltTreeNodeTrigger-iconSize) + var(--salt-size-selectable)) / 2) + var(--salt-spacing-100));
}

.saltTreeNodeTrigger:hover {
  background: var(--salt-selectable-background-hover);
}

.saltTreeNode:focus-visible > .saltTreeNodeTrigger,
.saltTreeNode-focusVisible > .saltTreeNodeTrigger {
  background: var(--salt-selectable-background-hover);
}

.saltTreeNode-selected > .saltTreeNodeTrigger {
  background: var(--salt-selectable-background-selected);
  box-shadow:
    0 calc(var(--salt-size-fixed-100) * -1) 0 0 var(--salt-selectable-borderColor-selected),
    0 var(--salt-size-fixed-100) 0 0 var(--salt-selectable-borderColor-selected);
  position: relative;
  z-index: var(--salt-zIndex-default);
}

.saltTreeNode-selected:focus-visible > .saltTreeNodeTrigger,
.saltTreeNode-selected.saltTreeNode-focusVisible > .saltTreeNodeTrigger {
  background: var(--salt-selectable-background-selected);
}

.saltTreeNode-disabled > .saltTreeNodeTrigger,
.saltTreeNode-disabled:hover > .saltTreeNodeTrigger {
  opacity: 0.4;
  cursor: var(--salt-cursor-disabled);

  background: var(--salt-selectable-background);
  color: var(--salt-content-primary-foreground);
}

.saltTreeNodeTrigger > .saltTreeNode-checkbox {
  margin-top: var(--saltTreeNodeTrigger-checkboxOffsetY);
  margin-bottom: 0;
}

.saltTreeNodeTrigger > .saltTreeNodeExpansionIcon,
.saltTreeNodeTrigger > .saltTreeNode-icon {
  margin-top: var(--saltTreeNodeTrigger-iconOffsetY);
}

.saltTreeNodeTrigger > .saltIcon {
  margin-top: var(--saltTreeNodeTrigger-iconOffsetY);
  flex-shrink: 0;
  color: var(--salt-content-primary-foreground);
}
`;const x3=$("saltTreeNodeTrigger"),Ue=$("saltTreeNode"),m3=n.forwardRef(function(a,t){const{className:r,children:i,style:s,onClick:c,onFocus:u,onBlur:d,onMouseDown:v,onKeyDown:h,...g}=a,b=G();_({testId:"salt-tree-node-trigger",css:g3,window:b});const m=ya();if(!m)throw new Error("TreeNodeTrigger must be used within a TreeNode");const{value:f,level:I,hasChildren:p,expanded:z,disabled:w,id:x,nodeRef:y,setNodeRef:S,selected:R,indeterminate:j,nodeChildren:V}=m,{multiselect:M,activeNode:B,setActiveNode:C,select:L,tabbableNodeId:K,registerElement:U}=wa(),T=he(n.useRef(null),t),P=n.useRef(!1),[Q,Y]=n.useState(!1),Z=B===f,ie=K===f;n.useEffect(()=>{if(y.current)return U(f,y.current)},[f,U,y]);const ne=F=>{if(c?.(F),w)return;const H=F.target;if(H.closest(".saltTreeNodeExpansionIcon"))return;const q=H.closest('[role="treeitem"]');q&&q!==y.current||(C(f),L(F,f))},ue=F=>{F.target===F.currentTarget&&(u?.(F),P.current||Y(!0),P.current=!1,C(f))},ee=F=>{F.target===F.currentTarget&&(d?.(F),Y(!1))},le=F=>{P.current=!0,v?.(F)};return e.jsxs("li",{ref:S,id:x,role:"treeitem","aria-expanded":p?z:void 0,"aria-selected":M?void 0:R,"aria-checked":M?j?"mixed":R:void 0,"aria-level":I,"aria-disabled":w||void 0,tabIndex:ie?0:-1,className:k(Ue(),{[Ue("expanded")]:z,[Ue("selected")]:R&&!M,[Ue("active")]:Z,[Ue("disabled")]:w,[Ue("hasChildren")]:p,[Ue("focusVisible")]:Q},r),style:{"--saltTreeNode-level":I,...s},onClick:ne,onFocus:ue,onBlur:ee,onMouseDown:le,onKeyDown:h,...g,children:[e.jsxs("span",{ref:T,className:x3(),children:[e.jsx(f3,{}),M&&e.jsx(vn,{checked:R,indeterminate:j,disabled:w,className:Ue("checkbox")}),i]}),p&&z&&e.jsx("ul",{role:"group",className:Ue("group"),children:V})]})}),I3=$("saltTreeNode");function w3(o){const a=[],t=[];for(const r of Ut(o))za(r)?t.push(r):a.push(r);return{contentChildren:a,nodeChildren:t}}const ra=n.forwardRef(function(a,t){const{value:r,label:i,icon:s,disabled:c,children:u}=a,d=G();_({testId:"salt-tree-node",css:u3,window:d});const v=Bo(),{expandedState:h,selectedSet:g,disabled:b,disabledIdsSet:m,indeterminateState:f}=wa(),I=ya(),p=(I?.level??0)+1,z=b||I?.disabled||c||m.has(r),w=h.has(r),x=g.has(r),y=f.has(r),S=i!==void 0,{contentChildren:R,nodeChildren:j}=n.useMemo(()=>S?{contentChildren:[],nodeChildren:Ut(u)}:w3(u),[u,S]),V=j.some(za),M=n.useRef(null),B=he(M,t),C=n.useMemo(()=>({value:r,level:p,hasChildren:V,expanded:w,disabled:z,id:v,nodeRef:M,setNodeRef:B,selected:x,indeterminate:y,nodeChildren:j}),[r,p,V,w,z,v,B,x,y,j]),L=S?e.jsxs(m3,{children:[s?e.jsx("span",{className:I3("icon"),children:e.jsx(s,{"aria-hidden":!0})}):null,e.jsx(b3,{children:i})]}):null;return e.jsx(l3,{value:C,children:S?L:R})}),y3=["--salt-spacing-25","--salt-spacing-50","--salt-spacing-75","--salt-spacing-100","--salt-spacing-150","--salt-spacing-200","--salt-spacing-250","--salt-spacing-300","--salt-spacing-350","--salt-spacing-400","--salt-spacing-450","--salt-spacing-500","--salt-spacing-550","--salt-spacing-600","--salt-spacing-650","--salt-spacing-700","--salt-spacing-750","--salt-spacing-800","--salt-spacing-850","--salt-spacing-900","--salt-spacing-950","--salt-spacing-fixed-100","--salt-spacing-fixed-200","--salt-spacing-fixed-300","--salt-spacing-fixed-400","--salt-spacing-fixed-500","--salt-spacing-fixed-600","--salt-spacing-fixed-700","--salt-spacing-fixed-800","--salt-spacing-fixed-900","--salt-spacing-fixed-1000","--salt-spacing-fixed-1100","--salt-spacing-fixed-1200"],z3=["--salt-size-accent","--salt-size-adornment","--salt-size-adornmentGap","--salt-size-bar","--salt-size-bar-small","--salt-size-bar-strong","--salt-size-base","--salt-size-basis-unit","--salt-size-border","--salt-size-border-strong","--salt-size-brandBar","--salt-size-compact","--salt-size-container-spacing","--salt-size-detail","--salt-size-divider-height","--salt-size-divider-strokeWidth","--salt-size-fixed-100","--salt-size-fixed-200","--salt-size-fixed-300","--salt-size-fixed-400","--salt-size-fixed-500","--salt-size-fixed-600","--salt-size-fixed-700","--salt-size-fixed-800","--salt-size-fixed-900","--salt-size-graphic-large","--salt-size-graphic-medium","--salt-size-graphic-small","--salt-size-icon","--salt-size-icon-base","--salt-size-indicator","--salt-size-selectable","--salt-size-selection","--salt-size-separator-height","--salt-size-separator-strokeWidth","--salt-size-sharktooth-height","--salt-size-sharktooth-width","--salt-size-stackable","--salt-size-unit"],S3=["--salt-text-action-fontFamily","--salt-text-action-fontWeight","--salt-text-action-fontWeight-bolder","--salt-text-action-fontWeight-lighter","--salt-text-action-fontWeight-small","--salt-text-action-fontWeight-strong","--salt-text-action-letterSpacing","--salt-text-action-textAlign","--salt-text-action-textTransform","--salt-text-body2-fontSize","--salt-text-body2-lineHeight","--salt-text-code-fontFamily","--salt-text-code-fontWeight","--salt-text-display-fontFamily","--salt-text-display-fontStyle","--salt-text-display-fontWeight","--salt-text-display-fontWeight-bolder","--salt-text-display-fontWeight-lighter","--salt-text-display-fontWeight-small","--salt-text-display-fontWeight-strong","--salt-text-display-letterSpacing","--salt-text-display-textTransform","--salt-text-display1-fontFamily","--salt-text-display1-fontSize","--salt-text-display1-fontWeight","--salt-text-display1-fontWeight-small","--salt-text-display1-fontWeight-strong","--salt-text-display1-lineHeight","--salt-text-display2-fontFamily","--salt-text-display2-fontSize","--salt-text-display2-fontWeight","--salt-text-display2-fontWeight-small","--salt-text-display2-fontWeight-strong","--salt-text-display2-lineHeight","--salt-text-display3-fontFamily","--salt-text-display3-fontSize","--salt-text-display3-fontWeight","--salt-text-display3-fontWeight-small","--salt-text-display3-fontWeight-strong","--salt-text-display3-lineHeight","--salt-text-display4-fontFamily","--salt-text-display4-fontSize","--salt-text-display4-fontWeight","--salt-text-display4-fontWeight-small","--salt-text-display4-fontWeight-strong","--salt-text-display4-lineHeight","--salt-text-editorial-fontFamily","--salt-text-editorial-fontStyle","--salt-text-editorial-fontWeight","--salt-text-editorial-fontWeight-bolder","--salt-text-editorial-fontWeight-lighter","--salt-text-editorial-letterSpacing","--salt-text-editorial-textTransform","--salt-text-editorial1-fontSize","--salt-text-editorial1-lineHeight","--salt-text-editorial2-fontSize","--salt-text-editorial2-lineHeight","--salt-text-editorial3-fontSize","--salt-text-editorial3-lineHeight","--salt-text-editorial4-fontSize","--salt-text-editorial4-lineHeight","--salt-text-editorial5-fontSize","--salt-text-editorial5-lineHeight","--salt-text-editorial6-fontSize","--salt-text-editorial6-lineHeight","--salt-text-eyebrow-fontFamily","--salt-text-eyebrow-fontSize","--salt-text-eyebrow-fontStyle","--salt-text-eyebrow-fontWeight","--salt-text-eyebrow-fontWeight-bolder","--salt-text-eyebrow-fontWeight-lighter","--salt-text-eyebrow-letterSpacing","--salt-text-eyebrow-lineHeight","--salt-text-eyebrow-textTransform","--salt-text-fontFamily","--salt-text-fontSize","--salt-text-fontWeight","--salt-text-fontWeight-bolder","--salt-text-fontWeight-lighter","--salt-text-fontWeight-small","--salt-text-fontWeight-strong","--salt-text-h1-fontFamily","--salt-text-h1-fontSize","--salt-text-h1-fontWeight","--salt-text-h1-fontWeight-small","--salt-text-h1-fontWeight-strong","--salt-text-h1-lineHeight","--salt-text-h2-fontFamily","--salt-text-h2-fontSize","--salt-text-h2-fontWeight","--salt-text-h2-fontWeight-small","--salt-text-h2-fontWeight-strong","--salt-text-h2-lineHeight","--salt-text-h3-fontFamily","--salt-text-h3-fontSize","--salt-text-h3-fontWeight","--salt-text-h3-fontWeight-small","--salt-text-h3-fontWeight-strong","--salt-text-h3-lineHeight","--salt-text-h4-fontFamily","--salt-text-h4-fontSize","--salt-text-h4-fontWeight","--salt-text-h4-fontWeight-small","--salt-text-h4-fontWeight-strong","--salt-text-h4-lineHeight","--salt-text-heading-fontFamily","--salt-text-heading-fontWeight","--salt-text-heading-fontWeight-bolder","--salt-text-heading-fontWeight-lighter","--salt-text-heading-fontWeight-small","--salt-text-heading-fontWeight-strong","--salt-text-label-fontFamily","--salt-text-label-fontSize","--salt-text-label-fontWeight","--salt-text-label-fontWeight-bolder","--salt-text-label-fontWeight-lighter","--salt-text-label-fontWeight-small","--salt-text-label-fontWeight-strong","--salt-text-label-lineHeight","--salt-text-label2-fontSize","--salt-text-label2-lineHeight","--salt-text-letterSpacing","--salt-text-lineHeight","--salt-text-link-textDecoration","--salt-text-link-textDecoration-hover","--salt-text-link-textDecoration-selected","--salt-text-minHeight","--salt-text-notation-fontFamily","--salt-text-notation-fontSize","--salt-text-notation-fontWeight","--salt-text-notation-fontWeight-bolder","--salt-text-notation-fontWeight-lighter","--salt-text-notation-fontWeight-small","--salt-text-notation-fontWeight-strong","--salt-text-notation-lineHeight","--salt-text-textAlign","--salt-text-textAlign-embedded","--salt-text-textDecoration","--salt-text-textTransform"],j3=["--salt-curve-0","--salt-curve-50","--salt-curve-100","--salt-curve-150","--salt-curve-200","--salt-curve-250","--salt-curve-300","--salt-curve-999","--salt-palette-corner","--salt-palette-corner-strong","--salt-palette-corner-stronger","--salt-palette-corner-strongest","--salt-palette-corner-weak","--salt-palette-corner-weaker"],R3=["--salt-container-bold-borderColor","--salt-container-bold-borderColor-disabled","--salt-container-borderColor","--salt-container-borderStyle","--salt-container-ghost-background","--salt-container-ghost-bold-borderColor","--salt-container-ghost-borderColor","--salt-container-ghost-subtle-borderColor","--salt-container-primary-background","--salt-container-primary-background-disabled","--salt-container-primary-borderColor","--salt-container-primary-borderColor-disabled","--salt-container-secondary-background","--salt-container-secondary-background-disabled","--salt-container-secondary-borderColor","--salt-container-secondary-borderColor-disabled","--salt-container-subtle-borderColor","--salt-container-tertiary-background","--salt-container-tertiary-background-disabled","--salt-container-tertiary-borderColor","--salt-container-tertiary-borderColor-disabled","--salt-content-accent-foreground","--salt-content-attention-foreground","--salt-content-bold-foreground","--salt-content-bold-foreground-disabled","--salt-content-brand-foreground","--salt-content-foreground-active","--salt-content-foreground-highlight","--salt-content-foreground-hover","--salt-content-foreground-visited","--salt-content-primary-foreground","--salt-content-primary-foreground-disabled","--salt-content-secondary-foreground","--salt-content-secondary-foreground-disabled"],C3=["--salt-accent-background","--salt-accent-background-disabled","--salt-accent-borderColor","--salt-accent-borderColor-disabled","--salt-accent-fontSize","--salt-accent-fontWeight","--salt-accent-foreground","--salt-accent-lineHeight"],k3=JSON.parse('["--salt-actionable-accented-background","--salt-actionable-accented-background-active","--salt-actionable-accented-background-disabled","--salt-actionable-accented-background-hover","--salt-actionable-accented-background-selected","--salt-actionable-accented-bold-background","--salt-actionable-accented-bold-background-active","--salt-actionable-accented-bold-background-disabled","--salt-actionable-accented-bold-background-hover","--salt-actionable-accented-bold-borderColor","--salt-actionable-accented-bold-borderColor-active","--salt-actionable-accented-bold-borderColor-disabled","--salt-actionable-accented-bold-borderColor-hover","--salt-actionable-accented-bold-foreground","--salt-actionable-accented-bold-foreground-active","--salt-actionable-accented-bold-foreground-disabled","--salt-actionable-accented-bold-foreground-hover","--salt-actionable-accented-borderColor","--salt-actionable-accented-borderColor-active","--salt-actionable-accented-borderColor-disabled","--salt-actionable-accented-borderColor-hover","--salt-actionable-accented-borderColor-selected","--salt-actionable-accented-foreground","--salt-actionable-accented-foreground-active","--salt-actionable-accented-foreground-disabled","--salt-actionable-accented-foreground-hover","--salt-actionable-accented-foreground-selected","--salt-actionable-accented-subtle-background","--salt-actionable-accented-subtle-background-active","--salt-actionable-accented-subtle-background-disabled","--salt-actionable-accented-subtle-background-hover","--salt-actionable-accented-subtle-borderColor","--salt-actionable-accented-subtle-borderColor-active","--salt-actionable-accented-subtle-borderColor-disabled","--salt-actionable-accented-subtle-borderColor-hover","--salt-actionable-accented-subtle-foreground","--salt-actionable-accented-subtle-foreground-active","--salt-actionable-accented-subtle-foreground-disabled","--salt-actionable-accented-subtle-foreground-hover","--salt-actionable-background","--salt-actionable-background-active","--salt-actionable-background-disabled","--salt-actionable-background-hover","--salt-actionable-background-selected","--salt-actionable-bold-background","--salt-actionable-bold-background-active","--salt-actionable-bold-background-disabled","--salt-actionable-bold-background-hover","--salt-actionable-bold-borderColor","--salt-actionable-bold-borderColor-active","--salt-actionable-bold-borderColor-disabled","--salt-actionable-bold-borderColor-hover","--salt-actionable-bold-foreground","--salt-actionable-bold-foreground-active","--salt-actionable-bold-foreground-disabled","--salt-actionable-bold-foreground-hover","--salt-actionable-borderColor","--salt-actionable-borderColor-active","--salt-actionable-borderColor-disabled","--salt-actionable-borderColor-hover","--salt-actionable-borderColor-selected","--salt-actionable-caution-background","--salt-actionable-caution-background-active","--salt-actionable-caution-background-disabled","--salt-actionable-caution-background-hover","--salt-actionable-caution-background-selected","--salt-actionable-caution-bold-background","--salt-actionable-caution-bold-background-active","--salt-actionable-caution-bold-background-disabled","--salt-actionable-caution-bold-background-hover","--salt-actionable-caution-bold-borderColor","--salt-actionable-caution-bold-borderColor-active","--salt-actionable-caution-bold-borderColor-disabled","--salt-actionable-caution-bold-borderColor-hover","--salt-actionable-caution-bold-foreground","--salt-actionable-caution-bold-foreground-active","--salt-actionable-caution-bold-foreground-disabled","--salt-actionable-caution-bold-foreground-hover","--salt-actionable-caution-borderColor","--salt-actionable-caution-borderColor-active","--salt-actionable-caution-borderColor-disabled","--salt-actionable-caution-borderColor-hover","--salt-actionable-caution-borderColor-selected","--salt-actionable-caution-foreground","--salt-actionable-caution-foreground-active","--salt-actionable-caution-foreground-disabled","--salt-actionable-caution-foreground-hover","--salt-actionable-caution-foreground-selected","--salt-actionable-caution-subtle-background","--salt-actionable-caution-subtle-background-active","--salt-actionable-caution-subtle-background-disabled","--salt-actionable-caution-subtle-background-hover","--salt-actionable-caution-subtle-borderColor","--salt-actionable-caution-subtle-borderColor-active","--salt-actionable-caution-subtle-borderColor-disabled","--salt-actionable-caution-subtle-borderColor-hover","--salt-actionable-caution-subtle-foreground","--salt-actionable-caution-subtle-foreground-active","--salt-actionable-caution-subtle-foreground-disabled","--salt-actionable-caution-subtle-foreground-hover","--salt-actionable-cta-fontWeight","--salt-actionable-cursor-active","--salt-actionable-cursor-disabled","--salt-actionable-cursor-hover","--salt-actionable-foreground","--salt-actionable-foreground-active","--salt-actionable-foreground-disabled","--salt-actionable-foreground-hover","--salt-actionable-foreground-selected","--salt-actionable-letterSpacing","--salt-actionable-negative-background","--salt-actionable-negative-background-active","--salt-actionable-negative-background-disabled","--salt-actionable-negative-background-hover","--salt-actionable-negative-background-selected","--salt-actionable-negative-bold-background","--salt-actionable-negative-bold-background-active","--salt-actionable-negative-bold-background-disabled","--salt-actionable-negative-bold-background-hover","--salt-actionable-negative-bold-borderColor","--salt-actionable-negative-bold-borderColor-active","--salt-actionable-negative-bold-borderColor-disabled","--salt-actionable-negative-bold-borderColor-hover","--salt-actionable-negative-bold-foreground","--salt-actionable-negative-bold-foreground-active","--salt-actionable-negative-bold-foreground-disabled","--salt-actionable-negative-bold-foreground-hover","--salt-actionable-negative-borderColor","--salt-actionable-negative-borderColor-active","--salt-actionable-negative-borderColor-disabled","--salt-actionable-negative-borderColor-hover","--salt-actionable-negative-borderColor-selected","--salt-actionable-negative-foreground","--salt-actionable-negative-foreground-active","--salt-actionable-negative-foreground-disabled","--salt-actionable-negative-foreground-hover","--salt-actionable-negative-foreground-selected","--salt-actionable-negative-subtle-background","--salt-actionable-negative-subtle-background-active","--salt-actionable-negative-subtle-background-disabled","--salt-actionable-negative-subtle-background-hover","--salt-actionable-negative-subtle-borderColor","--salt-actionable-negative-subtle-borderColor-active","--salt-actionable-negative-subtle-borderColor-disabled","--salt-actionable-negative-subtle-borderColor-hover","--salt-actionable-negative-subtle-foreground","--salt-actionable-negative-subtle-foreground-active","--salt-actionable-negative-subtle-foreground-disabled","--salt-actionable-negative-subtle-foreground-hover","--salt-actionable-onSolid-subtle-background","--salt-actionable-onSolid-subtle-background-active","--salt-actionable-onSolid-subtle-background-hover","--salt-actionable-onSolid-subtle-borderColor","--salt-actionable-onSolid-subtle-borderColor-active","--salt-actionable-onSolid-subtle-borderColor-hover","--salt-actionable-onSolid-subtle-foreground","--salt-actionable-onSolid-subtle-foreground-active","--salt-actionable-onSolid-subtle-foreground-hover","--salt-actionable-positive-background","--salt-actionable-positive-background-active","--salt-actionable-positive-background-disabled","--salt-actionable-positive-background-hover","--salt-actionable-positive-background-selected","--salt-actionable-positive-bold-background","--salt-actionable-positive-bold-background-active","--salt-actionable-positive-bold-background-disabled","--salt-actionable-positive-bold-background-hover","--salt-actionable-positive-bold-borderColor","--salt-actionable-positive-bold-borderColor-active","--salt-actionable-positive-bold-borderColor-disabled","--salt-actionable-positive-bold-borderColor-hover","--salt-actionable-positive-bold-foreground","--salt-actionable-positive-bold-foreground-active","--salt-actionable-positive-bold-foreground-disabled","--salt-actionable-positive-bold-foreground-hover","--salt-actionable-positive-borderColor","--salt-actionable-positive-borderColor-active","--salt-actionable-positive-borderColor-disabled","--salt-actionable-positive-borderColor-hover","--salt-actionable-positive-borderColor-selected","--salt-actionable-positive-foreground","--salt-actionable-positive-foreground-active","--salt-actionable-positive-foreground-disabled","--salt-actionable-positive-foreground-hover","--salt-actionable-positive-foreground-selected","--salt-actionable-positive-subtle-background","--salt-actionable-positive-subtle-background-active","--salt-actionable-positive-subtle-background-disabled","--salt-actionable-positive-subtle-background-hover","--salt-actionable-positive-subtle-borderColor","--salt-actionable-positive-subtle-borderColor-active","--salt-actionable-positive-subtle-borderColor-disabled","--salt-actionable-positive-subtle-borderColor-hover","--salt-actionable-positive-subtle-foreground","--salt-actionable-positive-subtle-foreground-active","--salt-actionable-positive-subtle-foreground-disabled","--salt-actionable-positive-subtle-foreground-hover","--salt-actionable-primary-fontWeight","--salt-actionable-secondary-fontWeight","--salt-actionable-subtle-background","--salt-actionable-subtle-background-active","--salt-actionable-subtle-background-disabled","--salt-actionable-subtle-background-hover","--salt-actionable-subtle-borderColor","--salt-actionable-subtle-borderColor-active","--salt-actionable-subtle-borderColor-disabled","--salt-actionable-subtle-borderColor-hover","--salt-actionable-subtle-foreground","--salt-actionable-subtle-foreground-active","--salt-actionable-subtle-foreground-disabled","--salt-actionable-subtle-foreground-hover","--salt-actionable-textAlign","--salt-actionable-textTransform"]'),H3=["--salt-navigable-accent-background-active","--salt-navigable-accent-borderColor-active","--salt-navigable-accent-indicator-active","--salt-navigable-background-hover","--salt-navigable-cursor-active","--salt-navigable-cursor-disabled","--salt-navigable-cursor-edit","--salt-navigable-cursor-hover","--salt-navigable-fontWeight","--salt-navigable-fontWeight-active","--salt-navigable-fontWeight-edit","--salt-navigable-fontWeight-hover","--salt-navigable-indicator-active","--salt-navigable-indicator-hover","--salt-navigable-textDecoration","--salt-navigable-textDecoration-hover","--salt-navigable-textDecoration-selected","--salt-selectable-background","--salt-selectable-background-blurSelected","--salt-selectable-background-disabled","--salt-selectable-background-hover","--salt-selectable-background-selected","--salt-selectable-background-selectedDisabled","--salt-selectable-borderColor","--salt-selectable-borderColor-disabled","--salt-selectable-borderColor-hover","--salt-selectable-borderColor-readonly","--salt-selectable-borderColor-selected","--salt-selectable-borderColor-selectedDisabled","--salt-selectable-borderStyle","--salt-selectable-borderStyle-blurSelected","--salt-selectable-borderStyle-hover","--salt-selectable-borderStyle-selected","--salt-selectable-cursor-blurSelected","--salt-selectable-cursor-disabled","--salt-selectable-cursor-hover","--salt-selectable-cursor-readonly","--salt-selectable-cursor-selected","--salt-selectable-foreground","--salt-selectable-foreground-disabled","--salt-selectable-foreground-hover","--salt-selectable-foreground-selected","--salt-selectable-foreground-selectedDisabled"],M3=["--salt-borderStyle-dashed","--salt-borderStyle-dotted","--salt-borderStyle-solid","--salt-editable-background-readonly","--salt-editable-borderColor","--salt-editable-borderColor-active","--salt-editable-borderColor-disabled","--salt-editable-borderColor-hover","--salt-editable-borderColor-readonly","--salt-editable-borderStyle","--salt-editable-borderStyle-active","--salt-editable-borderStyle-disabled","--salt-editable-borderStyle-hover","--salt-editable-borderStyle-readonly","--salt-editable-borderWidth-active","--salt-editable-cursor-active","--salt-editable-cursor-disabled","--salt-editable-cursor-hover","--salt-editable-cursor-readonly","--salt-editable-help-fontStyle","--salt-editable-primary-background","--salt-editable-primary-background-active","--salt-editable-primary-background-disabled","--salt-editable-primary-background-hover","--salt-editable-primary-background-readonly","--salt-editable-secondary-background","--salt-editable-secondary-background-active","--salt-editable-secondary-background-disabled","--salt-editable-secondary-background-hover","--salt-editable-secondary-background-readonly","--salt-editable-tertiary-background","--salt-editable-tertiary-background-disabled","--salt-separable-background","--salt-separable-background-active","--salt-separable-background-hover","--salt-separable-borderStyle","--salt-separable-foreground","--salt-separable-foreground-active","--salt-separable-foreground-hover","--salt-separable-primary-borderColor","--salt-separable-secondary-borderColor","--salt-separable-tertiary-borderColor","--salt-track-borderColor","--salt-track-borderColor-disabled","--salt-track-borderStyle","--salt-track-borderStyle-active","--salt-track-borderStyle-complete","--salt-track-borderStyle-incomplete","--salt-track-borderWidth","--salt-track-borderWidth-active","--salt-track-borderWidth-complete","--salt-track-borderWidth-incomplete","--salt-track-fontWeight","--salt-track-textAlign"],B3=["--salt-focused-onSolid-outlineColor","--salt-focused-outline","--salt-focused-outlineColor","--salt-focused-outlineInset","--salt-focused-outlineOffset","--salt-focused-outlineStyle","--salt-focused-outlineWidth"],V3=["--salt-status-error-background","--salt-status-error-background-selected","--salt-status-error-bold-background","--salt-status-error-borderColor","--salt-status-error-foreground-decorative","--salt-status-error-foreground-informative","--salt-status-info-background","--salt-status-info-bold-background","--salt-status-info-borderColor","--salt-status-info-foreground-decorative","--salt-status-info-foreground-informative","--salt-status-negative-foreground","--salt-status-positive-foreground","--salt-status-static-foreground","--salt-status-success-background","--salt-status-success-background-selected","--salt-status-success-bold-background","--salt-status-success-borderColor","--salt-status-success-foreground-decorative","--salt-status-success-foreground-informative","--salt-status-warning-background","--salt-status-warning-background-selected","--salt-status-warning-bold-background","--salt-status-warning-borderColor","--salt-status-warning-foreground-decorative","--salt-status-warning-foreground-informative"],L3=["--salt-overlayable-background","--salt-overlayable-background-highlight","--salt-overlayable-background-hover","--salt-overlayable-background-rangeSelection","--salt-overlayable-shadow","--salt-overlayable-shadow-borderRegion","--salt-overlayable-shadow-drag","--salt-overlayable-shadow-hover","--salt-overlayable-shadow-modal","--salt-overlayable-shadow-popout","--salt-overlayable-shadow-region","--salt-overlayable-shadow-scroll","--salt-overlayable-shadow-scroll-color","--salt-shadow-0","--salt-shadow-1","--salt-shadow-1-color","--salt-shadow-2","--salt-shadow-2-color","--salt-shadow-3","--salt-shadow-3-color","--salt-shadow-4","--salt-shadow-4-color","--salt-shadow-5","--salt-shadow-5-color","--salt-shadow-100","--salt-shadow-100-color","--salt-shadow-200","--salt-shadow-200-color","--salt-shadow-300","--salt-shadow-300-color","--salt-shadow-400","--salt-shadow-400-color","--salt-shadow-500","--salt-shadow-500-color","--salt-shadow-low","--salt-shadow-lower","--salt-shadow-lowest","--salt-shadow-medium","--salt-shadow-mediumLow","--salt-zIndex-appHeader","--salt-zIndex-contextMenu","--salt-zIndex-default","--salt-zIndex-docked","--salt-zIndex-dragObject","--salt-zIndex-drawer","--salt-zIndex-flyover","--salt-zIndex-modal","--salt-zIndex-notification","--salt-zIndex-popout"],A3=JSON.parse('["--salt-category-1-background","--salt-category-1-bold-background","--salt-category-1-bold-foreground","--salt-category-1-borderColor","--salt-category-1-dataviz","--salt-category-1-foreground","--salt-category-1-subtle-background","--salt-category-1-subtle-borderColor","--salt-category-1-subtle-foreground","--salt-category-2-background","--salt-category-2-bold-background","--salt-category-2-bold-foreground","--salt-category-2-borderColor","--salt-category-2-dataviz","--salt-category-2-foreground","--salt-category-2-subtle-background","--salt-category-2-subtle-borderColor","--salt-category-2-subtle-foreground","--salt-category-3-background","--salt-category-3-bold-background","--salt-category-3-bold-foreground","--salt-category-3-borderColor","--salt-category-3-dataviz","--salt-category-3-foreground","--salt-category-3-subtle-background","--salt-category-3-subtle-borderColor","--salt-category-3-subtle-foreground","--salt-category-4-background","--salt-category-4-bold-background","--salt-category-4-bold-foreground","--salt-category-4-borderColor","--salt-category-4-dataviz","--salt-category-4-foreground","--salt-category-4-subtle-background","--salt-category-4-subtle-borderColor","--salt-category-4-subtle-foreground","--salt-category-5-background","--salt-category-5-bold-background","--salt-category-5-bold-foreground","--salt-category-5-borderColor","--salt-category-5-dataviz","--salt-category-5-foreground","--salt-category-5-subtle-background","--salt-category-5-subtle-borderColor","--salt-category-5-subtle-foreground","--salt-category-6-background","--salt-category-6-bold-background","--salt-category-6-bold-foreground","--salt-category-6-borderColor","--salt-category-6-dataviz","--salt-category-6-foreground","--salt-category-6-subtle-background","--salt-category-6-subtle-borderColor","--salt-category-6-subtle-foreground","--salt-category-7-background","--salt-category-7-bold-background","--salt-category-7-bold-foreground","--salt-category-7-borderColor","--salt-category-7-dataviz","--salt-category-7-foreground","--salt-category-7-subtle-background","--salt-category-7-subtle-borderColor","--salt-category-7-subtle-foreground","--salt-category-8-background","--salt-category-8-bold-background","--salt-category-8-bold-foreground","--salt-category-8-borderColor","--salt-category-8-dataviz","--salt-category-8-foreground","--salt-category-8-subtle-background","--salt-category-8-subtle-borderColor","--salt-category-8-subtle-foreground","--salt-category-9-background","--salt-category-9-bold-background","--salt-category-9-bold-foreground","--salt-category-9-borderColor","--salt-category-9-dataviz","--salt-category-9-foreground","--salt-category-9-subtle-background","--salt-category-9-subtle-borderColor","--salt-category-9-subtle-foreground","--salt-category-10-background","--salt-category-10-bold-background","--salt-category-10-bold-foreground","--salt-category-10-borderColor","--salt-category-10-dataviz","--salt-category-10-foreground","--salt-category-10-subtle-background","--salt-category-10-subtle-borderColor","--salt-category-10-subtle-foreground","--salt-category-11-background","--salt-category-11-bold-background","--salt-category-11-bold-foreground","--salt-category-11-borderColor","--salt-category-11-dataviz","--salt-category-11-foreground","--salt-category-11-subtle-background","--salt-category-11-subtle-borderColor","--salt-category-11-subtle-foreground","--salt-category-12-background","--salt-category-12-bold-background","--salt-category-12-bold-foreground","--salt-category-12-borderColor","--salt-category-12-dataviz","--salt-category-12-foreground","--salt-category-12-subtle-background","--salt-category-12-subtle-borderColor","--salt-category-12-subtle-foreground","--salt-category-13-background","--salt-category-13-bold-background","--salt-category-13-bold-foreground","--salt-category-13-borderColor","--salt-category-13-dataviz","--salt-category-13-foreground","--salt-category-13-subtle-background","--salt-category-13-subtle-borderColor","--salt-category-13-subtle-foreground","--salt-category-14-background","--salt-category-14-bold-background","--salt-category-14-bold-foreground","--salt-category-14-borderColor","--salt-category-14-dataviz","--salt-category-14-foreground","--salt-category-14-subtle-background","--salt-category-14-subtle-borderColor","--salt-category-14-subtle-foreground","--salt-category-15-background","--salt-category-15-bold-background","--salt-category-15-bold-foreground","--salt-category-15-borderColor","--salt-category-15-dataviz","--salt-category-15-foreground","--salt-category-15-subtle-background","--salt-category-15-subtle-borderColor","--salt-category-15-subtle-foreground","--salt-category-16-background","--salt-category-16-bold-background","--salt-category-16-bold-foreground","--salt-category-16-borderColor","--salt-category-16-dataviz","--salt-category-16-foreground","--salt-category-16-subtle-background","--salt-category-16-subtle-borderColor","--salt-category-16-subtle-foreground","--salt-category-17-background","--salt-category-17-bold-background","--salt-category-17-bold-foreground","--salt-category-17-borderColor","--salt-category-17-dataviz","--salt-category-17-foreground","--salt-category-17-subtle-background","--salt-category-17-subtle-borderColor","--salt-category-17-subtle-foreground","--salt-category-18-background","--salt-category-18-bold-background","--salt-category-18-bold-foreground","--salt-category-18-borderColor","--salt-category-18-dataviz","--salt-category-18-foreground","--salt-category-18-subtle-background","--salt-category-18-subtle-borderColor","--salt-category-18-subtle-foreground","--salt-category-19-background","--salt-category-19-bold-background","--salt-category-19-bold-foreground","--salt-category-19-borderColor","--salt-category-19-dataviz","--salt-category-19-foreground","--salt-category-19-subtle-background","--salt-category-19-subtle-borderColor","--salt-category-19-subtle-foreground","--salt-category-20-background","--salt-category-20-bold-background","--salt-category-20-bold-foreground","--salt-category-20-borderColor","--salt-category-20-dataviz","--salt-category-20-foreground","--salt-category-20-subtle-background","--salt-category-20-subtle-borderColor","--salt-category-20-subtle-foreground","--salt-color-aqua-100","--salt-color-aqua-200","--salt-color-aqua-300","--salt-color-aqua-400","--salt-color-aqua-500","--salt-color-aqua-600","--salt-color-aqua-700","--salt-color-aqua-800","--salt-color-aqua-900","--salt-color-autumn-100","--salt-color-autumn-200","--salt-color-autumn-300","--salt-color-autumn-400","--salt-color-autumn-500","--salt-color-autumn-600","--salt-color-autumn-700","--salt-color-autumn-800","--salt-color-autumn-900","--salt-color-background-gradientlight","--salt-color-background-gradientlight-rgb","--salt-color-background-granite","--salt-color-background-granite-40a","--salt-color-background-granite-rgb","--salt-color-background-jet","--salt-color-background-jet-40a","--salt-color-background-jet-rgb","--salt-color-background-leather","--salt-color-background-leather-40a","--salt-color-background-leather-rgb","--salt-color-background-limestone","--salt-color-background-limestone-40a","--salt-color-background-limestone-rgb","--salt-color-background-marble","--salt-color-background-marble-40a","--salt-color-background-marble-rgb","--salt-color-background-snow","--salt-color-background-snow-40a","--salt-color-background-snow-rgb","--salt-color-background-titanium","--salt-color-background-titanium-rgb","--salt-color-black","--salt-color-black-5a","--salt-color-black-10a","--salt-color-black-15a","--salt-color-black-20a","--salt-color-black-30a","--salt-color-black-40a","--salt-color-black-45a","--salt-color-black-50a","--salt-color-black-60a","--salt-color-black-65a","--salt-color-black-70a","--salt-color-black-80a","--salt-color-black-90a","--salt-color-black-rgb","--salt-color-blue-100","--salt-color-blue-100-rgb","--salt-color-blue-200","--salt-color-blue-200-40a","--salt-color-blue-200-rgb","--salt-color-blue-300","--salt-color-blue-300-40a","--salt-color-blue-300-rgb","--salt-color-blue-400","--salt-color-blue-400-40a","--salt-color-blue-400-rgb","--salt-color-blue-500","--salt-color-blue-500-40a","--salt-color-blue-500-rgb","--salt-color-blue-600","--salt-color-blue-600-40a","--salt-color-blue-600-rgb","--salt-color-blue-700","--salt-color-blue-700-40a","--salt-color-blue-700-rgb","--salt-color-blue-800","--salt-color-blue-800-40a","--salt-color-blue-800-rgb","--salt-color-blue-900","--salt-color-blue-900-rgb","--salt-color-brown-100","--salt-color-brown-100-rgb","--salt-color-brown-200","--salt-color-brown-200-rgb","--salt-color-brown-300","--salt-color-brown-300-rgb","--salt-color-brown-400","--salt-color-brown-400-rgb","--salt-color-brown-500","--salt-color-brown-500-rgb","--salt-color-brown-600","--salt-color-brown-600-rgb","--salt-color-brown-700","--salt-color-brown-700-rgb","--salt-color-brown-800","--salt-color-brown-800-rgb","--salt-color-brown-900","--salt-color-brown-900-rgb","--salt-color-cider-100","--salt-color-cider-200","--salt-color-cider-300","--salt-color-cider-400","--salt-color-cider-500","--salt-color-cider-600","--salt-color-cider-700","--salt-color-cider-800","--salt-color-cider-900","--salt-color-citrine-100","--salt-color-citrine-200","--salt-color-citrine-300","--salt-color-citrine-400","--salt-color-citrine-500","--salt-color-citrine-600","--salt-color-citrine-700","--salt-color-citrine-800","--salt-color-citrine-900","--salt-color-cobalt-100","--salt-color-cobalt-200","--salt-color-cobalt-300","--salt-color-cobalt-400","--salt-color-cobalt-500","--salt-color-cobalt-600","--salt-color-cobalt-700","--salt-color-cobalt-800","--salt-color-cobalt-900","--salt-color-forest-100","--salt-color-forest-200","--salt-color-forest-300","--salt-color-forest-400","--salt-color-forest-500","--salt-color-forest-600","--salt-color-forest-700","--salt-color-forest-800","--salt-color-forest-900","--salt-color-fuchsia-100","--salt-color-fuchsia-200","--salt-color-fuchsia-300","--salt-color-fuchsia-400","--salt-color-fuchsia-500","--salt-color-fuchsia-600","--salt-color-fuchsia-700","--salt-color-fuchsia-800","--salt-color-fuchsia-900","--salt-color-fur-100","--salt-color-fur-200","--salt-color-fur-300","--salt-color-fur-400","--salt-color-fur-500","--salt-color-fur-600","--salt-color-fur-700","--salt-color-fur-800","--salt-color-fur-900","--salt-color-gray-100","--salt-color-gray-100-rgb","--salt-color-gray-200","--salt-color-gray-200-rgb","--salt-color-gray-300","--salt-color-gray-300-10a","--salt-color-gray-300-40a","--salt-color-gray-300-rgb","--salt-color-gray-400","--salt-color-gray-400-40a","--salt-color-gray-400-rgb","--salt-color-gray-500","--salt-color-gray-500-10a","--salt-color-gray-500-40a","--salt-color-gray-500-rgb","--salt-color-gray-600","--salt-color-gray-600-40a","--salt-color-gray-600-rgb","--salt-color-gray-700","--salt-color-gray-700-10a","--salt-color-gray-700-40a","--salt-color-gray-700-rgb","--salt-color-gray-800","--salt-color-gray-800-rgb","--salt-color-gray-900","--salt-color-gray-900-rgb","--salt-color-green-100","--salt-color-green-100-rgb","--salt-color-green-200","--salt-color-green-200-rgb","--salt-color-green-300","--salt-color-green-300-rgb","--salt-color-green-400","--salt-color-green-400-40a","--salt-color-green-400-rgb","--salt-color-green-500","--salt-color-green-500-40a","--salt-color-green-500-rgb","--salt-color-green-600","--salt-color-green-600-40a","--salt-color-green-600-rgb","--salt-color-green-700","--salt-color-green-700-rgb","--salt-color-green-800","--salt-color-green-800-rgb","--salt-color-green-900","--salt-color-green-900-rgb","--salt-color-indigo-100","--salt-color-indigo-200","--salt-color-indigo-300","--salt-color-indigo-400","--salt-color-indigo-500","--salt-color-indigo-600","--salt-color-indigo-700","--salt-color-indigo-800","--salt-color-indigo-900","--salt-color-jade-100","--salt-color-jade-200","--salt-color-jade-300","--salt-color-jade-400","--salt-color-jade-500","--salt-color-jade-600","--salt-color-jade-700","--salt-color-jade-800","--salt-color-jade-900","--salt-color-jpmBrown","--salt-color-jpmBrown-rgb","--salt-color-lavender-100","--salt-color-lavender-200","--salt-color-lavender-300","--salt-color-lavender-400","--salt-color-lavender-500","--salt-color-lavender-600","--salt-color-lavender-700","--salt-color-lavender-800","--salt-color-lavender-900","--salt-color-lime-100","--salt-color-lime-200","--salt-color-lime-300","--salt-color-lime-400","--salt-color-lime-500","--salt-color-lime-600","--salt-color-lime-700","--salt-color-lime-800","--salt-color-lime-900","--salt-color-logo-brown","--salt-color-logo-brown-rgb","--salt-color-ocean-100","--salt-color-ocean-200","--salt-color-ocean-300","--salt-color-ocean-400","--salt-color-ocean-500","--salt-color-ocean-600","--salt-color-ocean-700","--salt-color-ocean-800","--salt-color-ocean-900","--salt-color-olive-100","--salt-color-olive-200","--salt-color-olive-300","--salt-color-olive-400","--salt-color-olive-500","--salt-color-olive-600","--salt-color-olive-700","--salt-color-olive-800","--salt-color-olive-900","--salt-color-orange-100","--salt-color-orange-100-rgb","--salt-color-orange-200","--salt-color-orange-200-rgb","--salt-color-orange-300","--salt-color-orange-300-rgb","--salt-color-orange-400","--salt-color-orange-400-40a","--salt-color-orange-400-rgb","--salt-color-orange-500","--salt-color-orange-500-40a","--salt-color-orange-500-rgb","--salt-color-orange-600","--salt-color-orange-600-40a","--salt-color-orange-600-rgb","--salt-color-orange-700","--salt-color-orange-700-rgb","--salt-color-orange-800","--salt-color-orange-800-rgb","--salt-color-orange-900","--salt-color-orange-900-rgb","--salt-color-plum-100","--salt-color-plum-200","--salt-color-plum-300","--salt-color-plum-400","--salt-color-plum-500","--salt-color-plum-600","--salt-color-plum-700","--salt-color-plum-800","--salt-color-plum-900","--salt-color-purple-100","--salt-color-purple-100-rgb","--salt-color-purple-200","--salt-color-purple-200-rgb","--salt-color-purple-300","--salt-color-purple-300-rgb","--salt-color-purple-400","--salt-color-purple-400-rgb","--salt-color-purple-500","--salt-color-purple-500-rgb","--salt-color-purple-600","--salt-color-purple-600-rgb","--salt-color-purple-700","--salt-color-purple-700-rgb","--salt-color-purple-800","--salt-color-purple-800-rgb","--salt-color-purple-900","--salt-color-purple-900-rgb","--salt-color-red-100","--salt-color-red-100-rgb","--salt-color-red-200","--salt-color-red-200-rgb","--salt-color-red-300","--salt-color-red-300-rgb","--salt-color-red-400","--salt-color-red-400-40a","--salt-color-red-400-rgb","--salt-color-red-500","--salt-color-red-500-40a","--salt-color-red-500-rgb","--salt-color-red-600","--salt-color-red-600-40a","--salt-color-red-600-rgb","--salt-color-red-700","--salt-color-red-700-rgb","--salt-color-red-800","--salt-color-red-800-rgb","--salt-color-red-900","--salt-color-red-900-rgb","--salt-color-rose-100","--salt-color-rose-200","--salt-color-rose-300","--salt-color-rose-400","--salt-color-rose-500","--salt-color-rose-600","--salt-color-rose-700","--salt-color-rose-800","--salt-color-rose-900","--salt-color-salmon-100","--salt-color-salmon-200","--salt-color-salmon-300","--salt-color-salmon-400","--salt-color-salmon-500","--salt-color-salmon-600","--salt-color-salmon-700","--salt-color-salmon-800","--salt-color-salmon-900","--salt-color-slate-100","--salt-color-slate-200","--salt-color-slate-300","--salt-color-slate-400","--salt-color-slate-500","--salt-color-slate-600","--salt-color-slate-700","--salt-color-slate-800","--salt-color-slate-900","--salt-color-smoke-100","--salt-color-smoke-200","--salt-color-smoke-300","--salt-color-smoke-400","--salt-color-smoke-500","--salt-color-smoke-600","--salt-color-smoke-700","--salt-color-smoke-800","--salt-color-smoke-900","--salt-color-teal-100","--salt-color-teal-100-rgb","--salt-color-teal-200","--salt-color-teal-200-40a","--salt-color-teal-200-rgb","--salt-color-teal-300","--salt-color-teal-300-40a","--salt-color-teal-300-rgb","--salt-color-teal-400","--salt-color-teal-400-40a","--salt-color-teal-400-rgb","--salt-color-teal-500","--salt-color-teal-500-40a","--salt-color-teal-500-rgb","--salt-color-teal-600","--salt-color-teal-600-40a","--salt-color-teal-600-rgb","--salt-color-teal-700","--salt-color-teal-700-40a","--salt-color-teal-700-rgb","--salt-color-teal-800","--salt-color-teal-800-40a","--salt-color-teal-800-rgb","--salt-color-teal-900","--salt-color-teal-900-rgb","--salt-color-transparent","--salt-color-violet-100","--salt-color-violet-200","--salt-color-violet-300","--salt-color-violet-400","--salt-color-violet-500","--salt-color-violet-600","--salt-color-violet-700","--salt-color-violet-800","--salt-color-violet-900","--salt-color-white","--salt-color-white-5a","--salt-color-white-10a","--salt-color-white-15a","--salt-color-white-20a","--salt-color-white-30a","--salt-color-white-40a","--salt-color-white-45a","--salt-color-white-50a","--salt-color-white-60a","--salt-color-white-65a","--salt-color-white-70a","--salt-color-white-80a","--salt-color-white-90a","--salt-color-white-rgb","--salt-palette-accent","--salt-palette-accent-action-active","--salt-palette-accent-action-hover","--salt-palette-accent-disabled","--salt-palette-accent-strong","--salt-palette-accent-strong-disabled","--salt-palette-accent-stronger","--salt-palette-accent-stronger-disabled","--salt-palette-accent-strongest","--salt-palette-accent-weak","--salt-palette-accent-weaker","--salt-palette-accent-weaker-disabled","--salt-palette-accent-weakest","--salt-palette-alpha-contrast-high","--salt-palette-alpha-contrast-higher","--salt-palette-alpha-contrast-highest","--salt-palette-alpha-contrast-low","--salt-palette-alpha-contrast-lower","--salt-palette-alpha-contrast-lowest","--salt-palette-alpha-contrast-medium","--salt-palette-alpha-contrast-mediumHigh","--salt-palette-alpha-contrast-mediumLow","--salt-palette-alpha-dark-high","--salt-palette-alpha-dark-higher","--salt-palette-alpha-dark-highest","--salt-palette-alpha-dark-low","--salt-palette-alpha-dark-lower","--salt-palette-alpha-dark-lowest","--salt-palette-alpha-dark-medium","--salt-palette-alpha-dark-mediumHigh","--salt-palette-alpha-dark-mediumLow","--salt-palette-alpha-high","--salt-palette-alpha-higher","--salt-palette-alpha-highest","--salt-palette-alpha-light-high","--salt-palette-alpha-light-higher","--salt-palette-alpha-light-highest","--salt-palette-alpha-light-low","--salt-palette-alpha-light-lower","--salt-palette-alpha-light-lowest","--salt-palette-alpha-light-medium","--salt-palette-alpha-light-mediumHigh","--salt-palette-alpha-light-mediumLow","--salt-palette-alpha-low","--salt-palette-alpha-lower","--salt-palette-alpha-lowest","--salt-palette-alpha-medium","--salt-palette-alpha-mediumHigh","--salt-palette-alpha-mediumLow","--salt-palette-alpha-none","--salt-palette-background-primary","--salt-palette-background-primary-disabled","--salt-palette-background-secondary","--salt-palette-background-secondary-disabled","--salt-palette-background-tertiary","--salt-palette-background-tertiary-disabled","--salt-palette-brand-strong","--salt-palette-categorical-1","--salt-palette-categorical-1-strong","--salt-palette-categorical-1-weakest","--salt-palette-categorical-2","--salt-palette-categorical-2-strong","--salt-palette-categorical-2-weakest","--salt-palette-categorical-3","--salt-palette-categorical-3-strong","--salt-palette-categorical-3-weakest","--salt-palette-categorical-4","--salt-palette-categorical-4-strong","--salt-palette-categorical-4-weakest","--salt-palette-categorical-5","--salt-palette-categorical-5-strong","--salt-palette-categorical-5-weakest","--salt-palette-categorical-6","--salt-palette-categorical-6-strong","--salt-palette-categorical-6-weakest","--salt-palette-categorical-7","--salt-palette-categorical-7-strong","--salt-palette-categorical-7-weakest","--salt-palette-categorical-8","--salt-palette-categorical-8-strong","--salt-palette-categorical-8-weakest","--salt-palette-categorical-9","--salt-palette-categorical-9-strong","--salt-palette-categorical-9-weakest","--salt-palette-categorical-10","--salt-palette-categorical-10-strong","--salt-palette-categorical-10-weakest","--salt-palette-categorical-11","--salt-palette-categorical-11-strong","--salt-palette-categorical-11-weakest","--salt-palette-categorical-12","--salt-palette-categorical-12-strong","--salt-palette-categorical-12-weakest","--salt-palette-categorical-13","--salt-palette-categorical-13-strong","--salt-palette-categorical-13-weakest","--salt-palette-categorical-14","--salt-palette-categorical-14-strong","--salt-palette-categorical-14-weakest","--salt-palette-categorical-15","--salt-palette-categorical-15-strong","--salt-palette-categorical-15-weakest","--salt-palette-categorical-16","--salt-palette-categorical-16-strong","--salt-palette-categorical-16-weakest","--salt-palette-categorical-17","--salt-palette-categorical-17-strong","--salt-palette-categorical-17-weakest","--salt-palette-categorical-18","--salt-palette-categorical-18-strong","--salt-palette-categorical-18-weakest","--salt-palette-categorical-19","--salt-palette-categorical-19-strong","--salt-palette-categorical-19-weakest","--salt-palette-categorical-20","--salt-palette-categorical-20-strong","--salt-palette-categorical-20-weakest","--salt-palette-corner","--salt-palette-corner-strong","--salt-palette-corner-stronger","--salt-palette-corner-strongest","--salt-palette-corner-weak","--salt-palette-corner-weaker","--salt-palette-foreground-active","--salt-palette-foreground-hover","--salt-palette-foreground-primary","--salt-palette-foreground-primary-alt","--salt-palette-foreground-primary-alt-disabled","--salt-palette-foreground-primary-disabled","--salt-palette-foreground-secondary","--salt-palette-foreground-secondary-disabled","--salt-palette-foreground-visited","--salt-palette-info","--salt-palette-info-strong","--salt-palette-info-weak","--salt-palette-info-weakest","--salt-palette-negative","--salt-palette-negative-action-active","--salt-palette-negative-action-hover","--salt-palette-negative-disabled","--salt-palette-negative-strong","--salt-palette-negative-strong-disabled","--salt-palette-negative-stronger","--salt-palette-negative-weak","--salt-palette-negative-weaker","--salt-palette-negative-weakest","--salt-palette-neutral","--salt-palette-neutral-action-active","--salt-palette-neutral-action-hover","--salt-palette-neutral-disabled","--salt-palette-neutral-readonly","--salt-palette-neutral-strong","--salt-palette-neutral-strong-disabled","--salt-palette-neutral-stronger","--salt-palette-neutral-strongest","--salt-palette-neutral-weak","--salt-palette-neutral-weak-disabled","--salt-palette-neutral-weaker","--salt-palette-neutral-weaker-disabled","--salt-palette-neutral-weaker-readonly","--salt-palette-neutral-weakest","--salt-palette-positive","--salt-palette-positive-action-active","--salt-palette-positive-action-hover","--salt-palette-positive-disabled","--salt-palette-positive-strong","--salt-palette-positive-strong-disabled","--salt-palette-positive-stronger","--salt-palette-positive-weak","--salt-palette-positive-weaker","--salt-palette-positive-weakest","--salt-palette-text-action-fontWeight","--salt-palette-text-body-fontWeight","--salt-palette-text-body-fontWeight-small","--salt-palette-text-body-fontWeight-strong","--salt-palette-text-display-fontWeight","--salt-palette-text-display-fontWeight-small","--salt-palette-text-display-fontWeight-strong","--salt-palette-text-fontFamily-action","--salt-palette-text-fontFamily-heading","--salt-palette-text-heading-fontWeight","--salt-palette-text-heading-fontWeight-small","--salt-palette-text-heading-fontWeight-strong","--salt-palette-text-notation-fontWeight","--salt-palette-text-notation-fontWeight-small","--salt-palette-text-notation-fontWeight-strong","--salt-palette-warning","--salt-palette-warning-action-active","--salt-palette-warning-action-hover","--salt-palette-warning-disabled","--salt-palette-warning-strong","--salt-palette-warning-strong-disabled","--salt-palette-warning-stronger","--salt-palette-warning-weak","--salt-palette-warning-weaker","--salt-palette-warning-weakest"]'),T3={Spacing:y3,Sizing:z3,Typography:S3,Corners:j3,Surfaces:R3,Accent:C3,Actions:k3,Selection:H3,Borders:M3,Focus:B3,Status:V3,Elevation:L3,Palette:A3};function Ae({title:o,description:a,children:t}){return e.jsxs("main",{className:"ds-stage",children:[e.jsx(se,{as:"h1",styleAs:"h2",children:o}),e.jsx(se,{color:"secondary",children:a||"Live Salt components. Use the toolbar to change mode and density."}),e.jsx("div",{className:"ds-demo",children:t})]})}function pt({children:o}){return e.jsx($t,{className:"ds-tile",variant:"secondary",children:o})}function q3({kind:o,gap:a=2,columns:t=3}){const r=["Revenue","Profit","Orders","Customers"].map(i=>e.jsx(pt,{children:i},i));return e.jsx(Ae,{title:o,description:"Responsive composition using Salt layout primitives and density-aware spacing.",children:o==="StackLayout"?e.jsx(et,{gap:a,children:r}):o==="FlexLayout"?e.jsx(Ze,{gap:a,wrap:!0,children:r}):o==="FlexItem"?e.jsxs(Ze,{gap:a,children:[e.jsx(Va,{grow:1,children:e.jsx(pt,{children:"Flexible content"})}),e.jsx(Va,{children:e.jsx(pt,{children:"Actions"})})]}):o==="FlowLayout"?e.jsx(il,{gap:a,children:r}):o==="GridLayout"||o==="GridItem"?e.jsxs(K5,{columns:{xs:1,sm:t},gap:a,children:[o==="GridItem"?e.jsx($5,{colSpan:{xs:1,sm:t},children:e.jsx(pt,{children:"Spanning header"})}):null,r]}):o==="SplitLayout"?e.jsx(dl,{direction:{xs:"column",sm:"row"},gap:a,startItem:e.jsx(pt,{children:"Navigation / filters"}),endItem:e.jsx(pt,{children:"Analytical content"})}):e.jsx($t,{elevation:"raised",className:"ds-tile",children:"A raised Salt panel"})})}function P3({category:o="Spacing"}){const a=n.useRef(null),t=Lo(),r=Ao(),[i,s]=n.useState(""),[c,u]=n.useState({}),d=T3[o]||[];return n.useEffect(()=>{if(!a.current)return;const v=getComputedStyle(a.current);u(Object.fromEntries(d.map(h=>[h,v.getPropertyValue(h).trim()])))},[o,t.mode,r,t.accent,t.corner]),e.jsx(Ae,{title:`${o} tokens`,description:`Resolved from the installed Salt theme · core ${St.core} · theme ${St.theme}. Values update with mode and density.`,children:e.jsxs("div",{ref:a,children:[e.jsx(Nt,{value:i,onChange:v=>s(v.target.value),inputProps:{"aria-label":"Search tokens"},placeholder:"Search token names"}),e.jsx("div",{className:"ds-token-list",children:d.filter(v=>v.toLowerCase().includes(i.toLowerCase())).map(v=>e.jsxs("div",{className:"ds-token",children:[e.jsx("code",{children:v}),e.jsx("span",{children:c[v]||"Not defined in this theme"}),e.jsx("div",{"aria-hidden":"true",className:"ds-sample",style:o==="Spacing"||o==="Sizing"?{width:`var(${v})`,background:"var(--salt-accent-background)"}:o==="Corners"?{borderRadius:`var(${v})`,background:"var(--salt-accent-background)"}:o==="Typography"?{fontSize:v.includes("fontSize")?`var(${v})`:void 0}:{background:`var(${v})`},children:o==="Typography"?"Aa":null})]},v))})]})})}const N3=Object.keys(uo).filter(o=>o.endsWith("Icon")&&o!=="Icon").sort();function D3(){const[o,a]=n.useState("");return e.jsxs(Ae,{title:"Salt icons",description:"Search the installed @salt-ds/icons library. Icons use Salt sizing and inherit the text color.",children:[e.jsx(Nt,{value:o,onChange:t=>a(t.target.value),inputProps:{"aria-label":"Search icons"},placeholder:"Search icons"}),e.jsx("div",{className:"ds-icon-grid",children:N3.filter(t=>t.toLowerCase().includes(o.toLowerCase())).map(t=>{const r=uo[t];return e.jsxs($t,{className:"ds-icon-card",children:[e.jsx(r,{"aria-hidden":!0}),e.jsx("code",{children:t})]},t)})})]})}function F3(){return e.jsx(Ae,{title:"Typography",children:e.jsxs(et,{gap:2,children:[["h1","h2","h3","h4"].map(o=>e.jsxs(se,{as:o,styleAs:o,children:[o.toUpperCase()," · Analytical clarity"]},o)),e.jsx(se,{children:"Body text for analytical workflows."}),e.jsx(se,{styleAs:"label",children:"Label · Reporting period"}),e.jsx(se,{styleAs:"notation",children:"Notation · Updated just now"}),e.jsx(Pu,{href:"https://www.saltdesignsystem.com",target:"_blank",children:"Salt documentation"})]})})}function O3(){return e.jsx(Ae,{title:"Buttons and toggles",children:e.jsxs(et,{gap:3,children:[e.jsxs(Ze,{wrap:!0,children:[["accented","neutral","positive","negative","caution"].map(o=>e.jsx(be,{sentiment:o,children:o},o)),e.jsx(be,{disabled:!0,children:"Disabled"})]}),e.jsxs(Ze,{children:[e.jsx(be,{appearance:"bordered",children:"Bordered"}),e.jsx(be,{appearance:"transparent",children:"Transparent"})]}),e.jsxs(U4,{defaultValue:"table",children:[e.jsx(Ga,{value:"table",children:"Table"}),e.jsx(Ga,{value:"chart",children:"Chart"})]}),e.jsxs(Ze,{children:[e.jsx(vo,{children:"Region: Europe"}),e.jsx(W4,{children:"Draft"}),e.jsx(Vl,{value:3})]})]})})}function W3(){return e.jsx(Ae,{title:"Inputs and forms",children:e.jsxs(et,{gap:3,children:[e.jsxs(La,{children:[e.jsx(da,{children:"Report name"}),e.jsx(Nt,{defaultValue:"Regional revenue"}),e.jsx(ia,{children:"Use a descriptive name."})]}),e.jsxs(La,{validationStatus:"error",children:[e.jsx(da,{children:"Required field"}),e.jsx(Nt,{}),e.jsx(ia,{children:"A value is required."})]}),e.jsx(Du,{textAreaProps:{"aria-label":"Commentary"},placeholder:"Add commentary"}),e.jsx(Qu,{defaultValue:25,min:1,max:100,inputProps:{"aria-label":"Row limit"}}),e.jsxs(X5,{"aria-label":"Columns",children:[e.jsx(ka,{label:"Revenue",defaultChecked:!0}),e.jsx(ka,{label:"Profit"})]}),e.jsxs(H4,{name:"aggregation",defaultValue:"sum",children:[e.jsx(Da,{value:"sum",label:"Sum"}),e.jsx(Da,{value:"avg",label:"Average"})]}),e.jsx(hn,{label:"Show totals",defaultChecked:!0}),e.jsx(N4,{"aria-label":"Opacity",min:0,max:100,defaultValue:75})]})})}function E3(){return e.jsx(Ae,{title:"Selection",children:e.jsxs(et,{gap:3,children:[e.jsx(Ml,{"aria-label":"Region",defaultSelected:["Europe"],children:e.jsx(Ju,{label:"Regions",children:["Europe","Americas","Asia Pacific"].map(o=>e.jsx(Ca,{value:o,children:o},o))})}),e.jsx(su,{"aria-label":"Find a measure",placeholder:"Find a measure",children:["Revenue","Profit","Orders"].map(o=>e.jsx(Ca,{value:o,children:o},o))})]})})}function G3(){const[o,a]=n.useState("No action selected");return e.jsxs(Ae,{title:"Menus",children:[e.jsxs(Rl,{children:[e.jsx(Cl,{children:e.jsx(be,{children:"Canvas actions"})}),e.jsx(kl,{children:["Duplicate","Rename","Export"].map(t=>e.jsx(Hl,{onClick:()=>a(t),children:t},t))})]}),e.jsx(se,{role:"status",children:o})]})}function $3({kind:o="Dialog"}){const[a,t]=n.useState(!1);return e.jsx(Ae,{title:o,children:o==="Scrim"?e.jsxs("div",{style:{position:"relative",height:180},children:[e.jsx(se,{children:"Underlying content"}),e.jsx(to,{open:!0,children:e.jsx(Za,{"aria-label":"Loading overlay"})})]}):o==="Tooltip"?e.jsx(a3,{content:"Refresh the dataset",children:e.jsx(be,{children:"Hover or focus for help"})}):o==="Overlay"?e.jsxs(Zu,{children:[e.jsx(d4,{children:e.jsx(be,{children:"Show details"})}),e.jsxs(r4,{children:[e.jsx(xo,{header:"Dataset details"}),e.jsx(i4,{}),e.jsx(mo,{children:"Synthetic commerce · 1,440 records"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(be,{onClick:()=>t(!0),children:["Open ",o.toLowerCase()]}),o==="Drawer"?e.jsx(Su,{open:a,onOpenChange:t,position:"right","aria-label":"Data source drawer",children:e.jsxs(et,{padding:3,children:[e.jsx(se,{as:"h2",children:"Data source"}),e.jsx(se,{children:"Configure the model and explore."}),e.jsx(be,{onClick:()=>t(!1),children:"Close drawer"})]})}):e.jsxs(yl,{open:a,onOpenChange:t,children:[e.jsx(zl,{header:"Save changes?",description:"Review your changes before continuing."}),e.jsx(Sl,{}),e.jsx(jl,{children:"Your canvas configuration will be saved."}),e.jsxs(cu,{children:[e.jsx(be,{appearance:"bordered",onClick:()=>t(!1),children:"Cancel"}),e.jsx(be,{sentiment:"accented",onClick:()=>t(!1),children:"Save"})]})]})]})})}function U3(){const[o,a]=n.useState(!1);return e.jsx(Ae,{title:"Navigation and structure",children:e.jsxs(et,{gap:3,children:[e.jsxs(ll,{defaultValue:"overview",children:[e.jsxs(rl,{children:[e.jsx(ja,{value:"overview",children:e.jsx(Ra,{children:"Overview"})}),e.jsx(ja,{value:"details",children:e.jsx(Ra,{children:"Details"})})]}),e.jsx(Wa,{value:"overview",children:"Overview content"}),e.jsx(Wa,{value:"details",children:"Details content"})]}),e.jsx(Pl,{children:e.jsxs(Al,{value:"filters",children:[e.jsx(V5,{children:"Filter options"}),e.jsx(A5,{children:"Configure region and date conditions."})]})}),e.jsx(hu,{}),e.jsxs(Ze,{children:[e.jsx(sl,{children:e.jsx(se,{children:"Static report card"})}),e.jsx(Au,{onClick:()=>a(t=>!t),"aria-checked":o,children:e.jsx(se,{children:o?"Report selected":"Select report"})})]}),e.jsx(c3,{"aria-label":"Dataset fields",children:e.jsxs(ra,{value:"measures",label:"Measures",children:[e.jsx(ra,{value:"revenue",label:"Revenue"}),e.jsx(ra,{value:"profit",label:"Profit"})]})})]})})}function _3(){return e.jsx(Ae,{title:"Feedback and status",children:e.jsxs(et,{gap:3,children:[["info","success","warning","error"].map(o=>e.jsxs(ol,{status:o,children:[e.jsxs(nl,{children:[o,": Dataset validation message"]}),e.jsx(N5,{children:e.jsx(be,{appearance:"transparent",children:"Details"})})]},o)),e.jsxs(Ze,{children:[e.jsx(Ot,{status:"success"}),e.jsx(Za,{"aria-label":"Loading data"})]}),e.jsx(p4,{count:10,children:e.jsx(y4,{})})]})})}function K3(){return e.jsxs(Ae,{title:"Provider and utilities",children:[e.jsxs(se,{children:["Salt core ",St.core," · theme ",St.theme," · icons ",St.icons]}),e.jsx(se,{children:"All examples inherit SaltProviderNext. Mode and density are controlled in the Storybook toolbar. ValidationStatus and ButtonSentiment are TypeScript types, demonstrated in Feedback and Actions."}),e.jsx(Ze,{wrap:!0,children:["high","medium","low","touch"].map(o=>e.jsx(Vo,{density:o,accent:"teal",children:e.jsxs($t,{className:"ds-tile",children:[e.jsx(se,{children:o}),e.jsx(be,{children:"Action"})]})},o))})]})}Ae.__docgenInfo={description:"",methods:[],displayName:"Stage",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};q3.__docgenInfo={description:"",methods:[],displayName:"LayoutExample",props:{kind:{required:!0,tsType:{name:"string"},description:""},gap:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},columns:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}}}};P3.__docgenInfo={description:"",methods:[],displayName:"TokenExplorer",props:{category:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Spacing'",computed:!1}}}};D3.__docgenInfo={description:"",methods:[],displayName:"IconGallery"};F3.__docgenInfo={description:"",methods:[],displayName:"Typography"};O3.__docgenInfo={description:"",methods:[],displayName:"Actions"};W3.__docgenInfo={description:"",methods:[],displayName:"Forms"};E3.__docgenInfo={description:"",methods:[],displayName:"Selection"};G3.__docgenInfo={description:"",methods:[],displayName:"Menus"};$3.__docgenInfo={description:"",methods:[],displayName:"Overlays",props:{kind:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Dialog'",computed:!1}}}};U3.__docgenInfo={description:"",methods:[],displayName:"Navigation"};_3.__docgenInfo={description:"",methods:[],displayName:"Feedback"};K3.__docgenInfo={description:"",methods:[],displayName:"Provider"};export{O3 as A,W3 as F,D3 as I,q3 as L,G3 as M,U3 as N,$3 as O,K3 as P,E3 as S,P3 as T,F3 as a,_3 as b,$t as c,Ae as d};
