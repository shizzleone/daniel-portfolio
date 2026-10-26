import{r as s,l as re,m as ae,j as _,g as ne,o as ke,e as Ee,f as G}from"./iframe--_k5KNLb.js";import{S as st,u as ot,h as lt,i as it,j as ut,k as ct,l as dt,o as ft,s as bt,m as vt,n as pt,p as he}from"./Option-CVltArud.js";import{m as se,i as Re,c as ge,j as mt,B as ht,k as gt,u as Ct}from"./Switch-XczNmwRq.js";import{F as Ve}from"./StackLayout-CHTwAaRb.js";import{r as wt}from"./index-C1N_ynMI.js";var yt=`/* Styles applied to root component */
.saltBanner {
  --banner-background: var(--salt-container-primary-background);

  background: var(--saltBanner-background, var(--banner-background));
  border-color: var(--saltBanner-borderColor, var(--banner-borderColor));
  border-width: var(--saltBanner-borderWidth, var(--salt-size-fixed-100));
  border-style: var(--saltBanner-borderStyle, var(--salt-borderStyle-solid));
  border-radius: var(--saltBanner-borderRadius, var(--salt-palette-corner, 0));
  box-sizing: border-box;
  display: inline-flex;
  gap: var(--salt-spacing-75);
  padding: var(--saltBanner-padding, var(--salt-spacing-50) var(--salt-spacing-100));
  width: 100%;
  min-height: calc(var(--salt-size-base) + var(--salt-spacing-100));

  font-family: var(--salt-text-fontFamily);
  font-size: var(--salt-text-fontSize);
  font-weight: var(--salt-text-fontWeight);
  line-height: var(--salt-text-lineHeight);
  letter-spacing: var(--salt-text-letterSpacing);
  color: var(--salt-content-primary-foreground);
}

/* Styles applied to icon */
.saltBanner-icon.saltIcon {
  min-height: var(--salt-size-base);
}

/* Styles applied when state = "info" */
.saltBanner-info {
  --banner-borderColor: var(--salt-status-info-borderColor);
}

/* Styles applied when state = "error" */
.saltBanner-error {
  --banner-borderColor: var(--salt-status-error-borderColor);
}

/* Styles applied when state = "warning" */
.saltBanner-warning {
  --banner-borderColor: var(--salt-status-warning-borderColor);
}

/* Styles applied when state = "success" */
.saltBanner-success {
  --banner-borderColor: var(--salt-status-success-borderColor);
}

.saltBanner-secondary.saltBanner-info {
  --banner-background: var(--salt-status-info-background);
}

.saltBanner-secondary.saltBanner-error {
  --banner-background: var(--salt-status-error-background);
}

.saltBanner-secondary.saltBanner-warning {
  --banner-background: var(--salt-status-warning-background);
}

.saltBanner-secondary.saltBanner-success {
  --banner-background: var(--salt-status-success-background);
}
`;const xe=se("saltBanner"),Cr=s.forwardRef(function({children:t,className:n,variant:r="primary",status:o="info",...d},l){const f=re();return ae({testId:"salt-banner",css:yt,window:f}),_.jsxs("div",{className:ne(xe(),xe(o),xe(r),n),ref:l,...d,children:[_.jsx(st,{"aria-hidden":!0,status:o,className:xe("icon")}),t]})});var xt=`/* Styles applied to BannerContent */
.saltBannerContent {
  flex: 1 0;
  margin: var(--salt-spacing-75) 0;
}
`;const Tt=se("saltBannerContent"),wr=s.forwardRef(function(t,n){const{className:r,...o}=t,d=re();return ae({testId:"salt-banner-content",css:xt,window:d}),_.jsx("div",{className:ne(Tt(),r),...o,ref:n})});var St=`/* Styles applied to the root element */
.saltCard {
  border-width: var(--saltCard-borderWidth, var(--salt-size-fixed-100));
  border-style: var(--salt-borderStyle-solid);
  border-color: var(--saltCard-borderColor, var(--card-borderColor));
  padding: var(--saltCard-padding, var(--card-padding));
  position: relative;
  transition: box-shadow var(--salt-duration-instant) ease-in-out;
  box-sizing: border-box;
  border-radius: var(--saltCard-borderRadius, var(--salt-palette-corner, 0));
  overflow: hidden;
  --card-accent-color: var(--salt-sentiment-accent-background);
  --card-borderColor: var(--salt-container-borderColor);
  --card-borderColor-strong: var(--salt-container-bold-borderColor);
  --card-borderColor-subtle: var(--salt-container-subtle-borderColor);
  --card-padding: var(--salt-spacing-200);
}

.saltCard.saltCard-sectioned {
  padding: 0;
  display: flex;
  flex-direction: column;
}

@supports selector(:has(*)) {
  .saltCard:has(> .saltCardHeader, > .saltCardContent, > .saltCardFooter) {
    padding: 0;
    display: flex;
    flex-direction: column;
  }
}

.saltCard-primary {
  background: var(--saltCard-background, var(--salt-container-primary-background));
}

.saltCard-secondary {
  background: var(--saltCard-background, var(--salt-container-secondary-background));
}

.saltCard-tertiary {
  background: var(--saltCard-background, var(--salt-container-tertiary-background));
}

.saltCard-ghost {
  background: var(--saltCard-background, var(--salt-container-ghost-background));
  --card-borderColor: var(--salt-container-ghost-borderColor);
  --card-borderColor-strong: var(--salt-container-ghost-bold-borderColor);
  --card-borderColor-subtle: var(--salt-container-ghost-subtle-borderColor);
}

/* Styles applied when elevation="flat" */
.saltCard-flat {
  box-shadow: var(--saltCard-boxShadow-flat, none);
}

/* Styles applied when elevation="raised" */
.saltCard-raised {
  box-shadow: var(--saltCard-boxShadow, var(--salt-overlayable-shadow));
}

/* Styles applied when borderColor="strong" */
.saltCard-borderColorStrong {
  --card-borderColor: var(--card-borderColor-strong);
}

/* Styles applied when borderColor="subtle" */
.saltCard-borderColorSubtle {
  --card-borderColor: var(--card-borderColor-subtle);
}

/* Styles applied when borderColor="none" */
.saltCard-borderColorNone {
  --card-borderColor: transparent;
}

/* Styles applied to create accent */
.saltCard-accent::after {
  content: "";
  position: absolute;
  background-color: var(--saltCard-accent-color, var(--card-accent-color));
}

/* Styles applied to Card if \`accent="bottom"\` */
.saltCard-accentBottom::after {
  left: calc(-1 * var(--salt-size-fixed-100));
  bottom: calc(-1 * var(--salt-size-fixed-100));
  height: var(--salt-size-bar);
  width: calc(100% + var(--salt-size-fixed-200));
}

/* Styles applied to Card if \`accent="left"\` */
.saltCard-accentLeft::after {
  left: calc(-1 * var(--salt-size-fixed-100));
  top: calc(-1 * var(--salt-size-fixed-100));
  height: calc(100% + var(--salt-size-fixed-200));
  width: var(--salt-size-bar);
}

/* Styles applied to Card if \`accent="top"\` */
.saltCard-accentTop::after {
  left: calc(-1 * var(--salt-size-fixed-100));
  top: calc(-1 * var(--salt-size-fixed-100));
  height: var(--salt-size-bar);
  width: calc(100% + var(--salt-size-fixed-200));
}

/* Styles applied to Card if \`accent="right"\` */
.saltCard-accentRight::after {
  right: calc(-1 * var(--salt-size-fixed-100));
  top: calc(-1 * var(--salt-size-fixed-100));
  height: calc(100% + var(--salt-size-fixed-200));
  width: var(--salt-size-bar);
}

/* Deprecated interactable styles. Use InteractableCard instead. */

/* Styles applied if \`interactable={true}\` */
.saltCard-interactable {
  display: block;
  transition: none;
}

/* Styles applied on hover if \`interactable={true}\` */
a:focus .saltCard-interactable,
.saltCard-interactable:hover {
  box-shadow: var(--saltCard-boxShadow-hover, var(--salt-overlayable-shadow-hover));
  cursor: var(--saltCard-cursor-hover, var(--salt-cursor-hover));
  border-color: var(--salt-actionable-accented-borderColor-hover);
}

/* Deprecated hoverable styles retained for backward compatibility. */
@media (hover: hover) {
  .saltCard-hoverable:not(.saltCard-disabled):hover {
    box-shadow: var(--saltCard-boxShadow-hover, var(--salt-overlayable-shadow-hover));
    border-color: var(--salt-actionable-accented-borderColor-hover);
  }
}

/* Styles applied on active state if \`interactable={true}\` */
.saltCard-interactable:active {
  border-color: var(--salt-actionable-accented-borderColor-active);
  box-shadow: var(--saltCard-boxShadow-active, var(--salt-overlayable-shadow-hover));
  outline: var(--salt-focused-outline);
  outline-offset: var(--salt-focused-outlineOffset);
}

/* Styles applied to disabled interactable states */
a:focus .saltCard-interactable.saltCard-disabled,
.saltCard-interactable.saltCard-disabled:hover,
.saltCard-interactable.saltCard-disabled:active {
  box-shadow: var(--saltCard-boxShadow-disabled, var(--salt-overlayable-shadow));
}

/* Styles applied if \`disabled={true}\` */
.saltCard-disabled,
.saltCard-disabled.saltCard-interactable,
a:focus .saltCard-interactable.saltCard-disabled {
  border-color: var(--salt-container-bold-borderColor-disabled);
  color: var(--saltCard-color-disabled, var(--salt-content-primary-foreground-disabled));
  cursor: var(--saltCard-cursor-disabled, var(--salt-cursor-disabled));
  outline: none;
}

/* Styles applied to nested divs if \`disabled={true}\` */
.saltCard-disabled div {
  pointer-events: none;
}
`,kt=`.saltCardContent {
  padding: var(--saltCardContent-padding, var(--salt-spacing-200));
  box-sizing: border-box;
}

/* Collapse vertical padding when rendered as a closed CollapsiblePanel */
.saltCardContent.saltCollapsiblePanel[aria-hidden="true"] {
  padding-top: 0;
  padding-bottom: 0;
}

.saltCard-sectioned > .saltCardHeader + .saltCardContent,
.saltCard-sectioned > .saltCardContent + .saltCardContent,
.saltLinkCard-sectioned > .saltCardHeader + .saltCardContent,
.saltLinkCard-sectioned > .saltCardContent + .saltCardContent,
.saltInteractableCard-sectioned > .saltCardHeader + .saltCardContent,
.saltInteractableCard-sectioned > .saltCardContent + .saltCardContent {
  padding-top: 0;
}

.saltCard-sectioned > .saltCardContent,
.saltLinkCard-sectioned > .saltCardContent,
.saltInteractableCard-sectioned > .saltCardContent {
  flex: 1 1 auto;
}

@supports selector(:has(*)) {
  .saltCard > .saltCardHeader + .saltCardContent,
  .saltCard > .saltCardContent + .saltCardContent,
  .saltLinkCard > .saltCardHeader + .saltCardContent,
  .saltLinkCard > .saltCardContent + .saltCardContent,
  .saltInteractableCard > .saltCardHeader + .saltCardContent,
  .saltInteractableCard > .saltCardContent + .saltCardContent {
    padding-top: 0;
  }

  .saltCard > .saltCardContent,
  .saltLinkCard > .saltCardContent,
  .saltInteractableCard > .saltCardContent {
    flex: 1 1 auto;
  }
}
`;const It=se("saltCardContent"),Lt=s.forwardRef(function(t,n){const{className:r,...o}=t,d=re();return ae({testId:"salt-card-content",css:kt,window:d}),_.jsx("div",{ref:n,className:ne(It(),r),...o})});var Et=`.saltCardFooter {
  padding: var(--saltCardFooter-padding, var(--salt-spacing-200));
  display: flex;
  align-items: center;
  gap: var(--salt-spacing-100);
  box-sizing: border-box;
}

.saltCard-sectioned > .saltCardHeader + .saltCardFooter,
.saltCard-sectioned > .saltCardContent + .saltCardFooter,
.saltLinkCard-sectioned > .saltCardHeader + .saltCardFooter,
.saltLinkCard-sectioned > .saltCardContent + .saltCardFooter,
.saltInteractableCard-sectioned > .saltCardHeader + .saltCardFooter,
.saltInteractableCard-sectioned > .saltCardContent + .saltCardFooter {
  padding-top: 0;
}

.saltCard-sectioned > .saltCardFooter,
.saltLinkCard-sectioned > .saltCardFooter,
.saltInteractableCard-sectioned > .saltCardFooter {
  flex-shrink: 0;
  margin-top: auto;
}

@supports selector(:has(*)) {
  .saltCard > .saltCardHeader + .saltCardFooter,
  .saltCard > .saltCardContent + .saltCardFooter,
  .saltLinkCard > .saltCardHeader + .saltCardFooter,
  .saltLinkCard > .saltCardContent + .saltCardFooter,
  .saltInteractableCard > .saltCardHeader + .saltCardFooter,
  .saltInteractableCard > .saltCardContent + .saltCardFooter {
    padding-top: 0;
  }

  .saltCard > .saltCardFooter,
  .saltLinkCard > .saltCardFooter,
  .saltInteractableCard > .saltCardFooter {
    flex-shrink: 0;
    margin-top: auto;
  }
}
`;const Rt=se("saltCardFooter"),Ft=s.forwardRef(function(t,n){const{className:r,...o}=t,d=re();return ae({testId:"salt-card-footer",css:Et,window:d}),_.jsx("div",{ref:n,className:ne(Rt(),r),...o})});var Ot=`.saltCardHeader {
  padding: var(--saltCardHeader-padding, var(--salt-spacing-200));
  box-sizing: border-box;
}

.saltCard-sectioned > .saltCardHeader,
.saltLinkCard-sectioned > .saltCardHeader,
.saltInteractableCard-sectioned > .saltCardHeader {
  flex-shrink: 0;
}

@supports selector(:has(*)) {
  .saltCard > .saltCardHeader,
  .saltLinkCard > .saltCardHeader,
  .saltInteractableCard > .saltCardHeader {
    flex-shrink: 0;
  }
}
`;const Mt=se("saltCardHeader"),At=s.forwardRef(function(t,n){const{className:r,...o}=t,d=re();return ae({testId:"salt-card-header",css:Ot,window:d}),_.jsx("div",{ref:n,className:ne(Mt(),r),...o})}),Nt=[At,Lt,Ft];function zt(e){if(!s.isValidElement(e))return!1;const t=e.props.render,n=s.isValidElement(t)?t:e;return Nt.some(r=>n.type===r)}function _t(e){return s.Children.toArray(e).some(zt)}const le=se("saltCard"),yr=s.forwardRef(function(t,n){const{accent:r,borderColor:o,children:d,className:l,disabled:f,elevation:b="raised",interactable:i,hoverable:u,variant:h="primary",...x}=t,T=re();ae({testId:"salt-card",css:St,window:T});const I=_t(d);return _.jsx("div",{className:ne(le(),le(h),o&&le(`borderColor${Re(o)}`),{[le("accent")]:r,[le(`accent${Re(r||"")}`)]:r,[le(b||"")]:b,[le("hoverable")]:u,[le("disabled")]:f,[le("interactable")]:i,[le("sectioned")]:I},l),ref:n,...x,children:d})}),xr=s.forwardRef(function({as:t,children:n,...r},o){return _.jsx(Ve,{as:t,direction:"row",ref:o,wrap:!0,...r,children:n})});function $e(e,t=[],n){const r=s.useRef(n);return s.useEffect(()=>{r.current=e},t),r.current}var Bt=`.saltSplitLayout {
  flex-grow: 1;
}
`;const Pt=se("saltSplitLayout"),Tr=s.forwardRef(function({as:t,endItem:n,startItem:r,className:o,...d},l){const f=re();ae({testId:"salt-split-layout",css:Bt,window:f});const b=n&&!r?"end":"space-between";return _.jsxs(Ve,{as:t,className:ne(Pt(),o),ref:l,justify:b,...d,children:[r,n]})}),qe=ke("TabContext",{focused:!1,selected:!1,disabled:!1,value:"",actions:[],registerAction:()=>()=>{}});function jt(){return s.useContext(qe)}const Ke=ke("TabsContext",{getFirst:()=>null,getLast:()=>null,getNext:()=>null,getPrevious:()=>null,item:()=>null,getIndex:()=>-1,itemAt:()=>null,sortItems:()=>{},renderMode:"inline",registerBootstrapTab:()=>()=>{},setBootstrapTabReady:()=>{},setBootstrapOverflowReady:()=>{},selected:void 0,registerTab:()=>()=>{},updateTab:()=>{},registerRenderedTab:()=>()=>{},updateRenderedTab:()=>{},getRenderedTab:()=>{},getRenderedTabOrder:()=>-1,renderedTabs:[],registerPanel:()=>()=>{},getPanelId:()=>{},getTabId:()=>{},setSelected:()=>{},activeTab:{current:void 0},selectionFromOverflowValueRef:{current:null},menuOpen:!1,setMenuOpen:()=>{},removalVersion:0,getRemovedItems:()=>new Map});function Ie(){return s.useContext(Ke)}const Ht=.5;function ue(e){return e&&(e.getBoundingClientRect().width||e.clientWidth)||0}function Fe(e){if(!e)return 0;const t=e.offsetWidth-e.clientWidth;return Math.max(ue(e),e.scrollWidth+t)}function Ge(e){return Number.parseFloat(e.columnGap||e.gap||"0")||0}function Ue(e){const t=new Map;for(const n of e)t.set(n,ue(n));return t}function We(e,t,n,r=Ht){const o=e.get(t);return e.set(t,n),o===void 0?!1:Math.abs(o-n)>r}const Dt=.5;function Vt(e){return e.closest(".saltTabOverflowList-list")||e.closest(".saltTabList-measureContainer")}function $t({hostElement:e,renderMode:t,tabRootRef:n,targetWindow:r,updateRenderedTab:o,value:d}){s.useEffect(()=>{if(!e)return;const l=n.current,f=r?.ResizeObserver,b=r?.MutationObserver;if(!l||!f)return;const i=(I=!1)=>{if(!l.isConnected||!I&&Vt(l))return;const p=Fe(l);p<=Dt||o(d,{width:p})};let u=null;const h=(I=!1)=>{if(!r?.requestAnimationFrame){i(I);return}u!=null&&r.cancelAnimationFrame(u),u=r.requestAnimationFrame(()=>{u=null,i(I)})};t==="portal"?h(!0):i(!0);const x=new f(()=>{i()});x.observe(l);const T=b?new b(()=>{h()}):null;return T?.observe(l,{childList:!0,characterData:!0,subtree:!0}),()=>{u!=null&&r&&r.cancelAnimationFrame(u),T?.disconnect(),x.disconnect()}},[e,t,n,r,o,d])}var qt=`/* Class applied to root Tab element */
.saltTab {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  -webkit-appearance: none;
  gap: var(--salt-spacing-100);
  border: none;
  border-left: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) transparent;
  border-right: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) transparent;
  white-space: pre;
  min-height: calc(var(--salt-size-base) + var(--salt-spacing-100));
  min-width: 4em;
  padding: var(--salt-spacing-50) var(--salt-spacing-100);
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  overflow: hidden;

  cursor: var(--salt-cursor-hover);
  color: var(--salt-content-primary-foreground);
  font-weight: var(--salt-text-fontWeight);
  font-family: var(--salt-text-fontFamily);
  text-align: var(--salt-text-textAlign);
  letter-spacing: var(--salt-text-letterSpacing);
  line-height: var(--salt-text-lineHeight);
  font-size: var(--salt-text-fontSize);
  max-width: 100%;
}

@supports selector(:has(*)) {
  .saltTabList:has([data-overflowbutton]) .saltTab {
    /* 100% of the tab list but reserving space for the overflow button */
    max-width: calc(100% - var(--salt-spacing-100) - var(--salt-size-base));
  }
}

.saltTab::after {
  content: "";
  position: absolute;
  left: calc(var(--salt-size-fixed-100) * -1);
  right: calc(var(--salt-size-fixed-100) * -1);
  height: var(--salt-size-indicator);
}

.saltTabList-bordered .saltTab::after {
  top: 0;
}

.saltTabList-transparent .saltTab::after {
  bottom: 0;
}

.saltTab:hover::after,
.saltTab-focusVisible::after {
  background: var(--salt-navigable-indicator-hover);
}

.saltTab-disabled:hover::after,
.saltTab-disabled.saltTab-focusVisible::after {
  background: none;
}

.saltTab-focusVisible {
  outline: var(--salt-focused-outline);
}

.saltTabList-bordered .saltTab.saltTab-selected {
  background: var(--saltTabList-activeColor);
  border-left: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) var(--salt-separable-secondary-borderColor);
  border-right: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) var(--salt-separable-secondary-borderColor);
}

.saltTab.saltTab-selected::after {
  background: var(--salt-navigable-accent-indicator-active);
}

.saltTab.saltTab-disabled {
  cursor: var(--salt-cursor-disabled);
  color: var(--salt-content-primary-foreground-disabled);
}
`;const Te=se("saltTab"),Sr=s.forwardRef(function(t,n){const{children:r,className:o,disabled:d,onBlur:l,onMouseDown:f,onFocus:b,onFocusCapture:i,value:u,id:h,...x}=t,T=re();ae({testId:"salt-tab",css:qt,window:T});const{selected:I,activeTab:p,renderMode:g,registerBootstrapTab:S,setBootstrapTabReady:R,registerRenderedTab:a,updateRenderedTab:c}=Ie(),v=!!d,C=Ee(h),w=s.useRef(!1),[E,j]=s.useState(!1),[H,k]=s.useState(!1),[m,y]=s.useState(null),F=s.useRef(null),O=s.useRef(null),D=z=>{i?.(z),C&&(p.current={value:u,id:C})},$=z=>{b?.(z),k(!0),!w.current&&z.target.getAttribute("role")==="tab"&&j(!0),w.current=!1},N=z=>{l?.(z),k(!1),j(!1)},B=z=>{f?.(z),C&&(p.current={value:u,id:C}),w.current=!0},[P,M]=s.useState(()=>new Set),A=s.useCallback(z=>(M(V=>{if(V.has(z))return V;const Y=new Set(V);return Y.add(z),Y}),()=>{M(V=>{if(!V.has(z))return V;const Y=new Set(V);return Y.delete(z),Y})}),[]),U=s.useMemo(()=>Array.from(P),[P]),W=s.useMemo(()=>({tabId:C,selected:I===u,focused:H,value:u,disabled:v,actions:U,registerAction:A}),[C,I,u,H,v,U,A]);G(()=>{const z=T?.document;if(!z)return;const V=z.createElement("div");return V.dataset.tabHost=u,V.role="presentation",V.style.display="contents",y(V),()=>{V.remove()}},[T,u]),G(()=>{if(g==="inline")return S(u)},[S,g,u]),G(()=>(R(u,m!=null),()=>{R(u,!1)}),[m,R,u]),G(()=>{if(!(!m||!C))return a({host:m,id:C,marker:F.current,root:O.current,trigger:null,value:u,width:Fe(O.current)})},[m,C,a,u]),G(()=>{const z={marker:F.current,root:O.current};g==="inline"&&(z.width=Fe(O.current)),c(u,z)},[g,c,u]),$t({hostElement:m,renderMode:g,tabRootRef:O,targetWindow:T,updateRenderedTab:c,value:u});const Z=ge(O,n),ee=_.jsx(qe.Provider,{value:W,children:_.jsx("div",{className:ne(Te(),{[Te("selected")]:I===u,[Te("disabled")]:v,[Te("focusVisible")]:E},o),"data-overflowitem":"true","data-value":u,ref:Z,onMouseDown:B,onFocusCapture:D,onFocus:$,onBlur:N,role:"presentation",...x,children:r})});return _.jsxs(_.Fragment,{children:[_.jsx("span",{role:"presentation","data-tab-marker":"",hidden:!0,ref:F}),g==="inline"?ee:m?wt.createPortal(ee,m):null]})}),Xe=ke("TabListLayoutContext",null);function Kt(){return s.useContext(Xe)}const Qe=ke("TabSlotRegistryContext",null);function Gt(){return s.useContext(Qe)}function Ut({maxAttempts:e=120,targetWindow:t}){const n=s.useRef(null),r=s.useCallback(()=>{n.current!=null&&t&&(t.cancelAnimationFrame(n.current),n.current=null)},[t]),o=s.useCallback(d=>{var l;const f=t?.document;if(!f){(l=d())==null||l.focus({preventScroll:!0});return}r();let b=0;const i=()=>{const u=d();if(!u?.isConnected){if(b>=e||!t?.requestAnimationFrame)return;b+=1,n.current=t.requestAnimationFrame(i);return}if(u.focus({preventScroll:!0}),f.activeElement===u||b>=e){n.current=null;return}b+=1,t?.requestAnimationFrame?n.current=t.requestAnimationFrame(i):queueMicrotask(i)};i()},[r,e,t]);return s.useEffect(()=>()=>{r()},[r]),{cancelScheduledFocus:r,focusElementWithRetry:o}}function be(e){if(!e||typeof e!="object")return!1;const t=e.ownerDocument,n=t?.defaultView;return!!n&&e instanceof n.HTMLElement}function Wt({removalVersion:e,targetWindow:t,tabstripRef:n,overflowListRef:r,handleTabRemoval:o,pendingRemovalRecoveryRef:d,pendingRemovalRecoveryRetriesRef:l}){s.useEffect(()=>{if(e<1)return;d.current=!0,l.current=0;const f=t?.requestAnimationFrame(()=>{o()});return()=>{f!=null&&t?.cancelAnimationFrame(f)}},[o,d,l,e,t]),s.useEffect(()=>{const f=i=>{var u,h;return i?(((u=n.current)==null?void 0:u.contains(i))??!1)||(((h=r.current)==null?void 0:h.contains(i))??!1):!1},b=i=>{if(!d.current)return;const u=be(i.target)&&f(i.target),h=be(i.relatedTarget)&&f(i.relatedTarget);u&&!h&&(t?.requestAnimationFrame?t.requestAnimationFrame(()=>o()):queueMicrotask(()=>o()))};return t?.document.addEventListener("focusout",b,!0),()=>{t?.document.removeEventListener("focusout",b,!0)}},[o,r,d,n,t])}function Xt(e){const t=e.activeElement;return!t||t===e.body||t===e.documentElement||!t.isConnected}function Qt(e,t){if(!e)return null;const n=e.querySelectorAll(':scope > [data-tabslot] [role="tab"][aria-selected="true"]');return Array.from(n).find(r=>t&&r.id===t?!1:r.isConnected)??null}function Yt({activeTab:e,focusElementWithRetry:t,getFirst:n,getIndex:r,getLast:o,getRemovedItems:d,getRenderedTab:l,getSelectedTabElement:f,item:b,itemAt:i,maxRetryAttempts:u,menuOpen:h,overflowButtonRef:x,overflowListRef:T,pendingRemovalRecoveryRef:I,pendingRemovalRecoveryRetriesRef:p,removalRecoveryRafRef:g,selected:S,setSelected:R,tabstripRef:a,targetWindow:c}){const v=s.useCallback(()=>{I.current=!1,p.current=0},[I,p]),C=ot(()=>{var w;const E=c?.document;if(!E)return;const j=((w=e.current)==null?void 0:w.value)===S,H=()=>{var $,N;if(Xt(E))return!0;const B=E.activeElement;return be(B)?h?B===x.current?!0:(N=T.current)!=null&&N.contains(B)?B.getAttribute("role")!=="tab":!1:B===x.current?j:(($=a.current)==null?void 0:$.contains(B))&&B.getAttribute("role")!=="tab":!1};if(!H()){if(I.current&&g.current==null)if(p.current<u){if(p.current+=1,!c?.requestAnimationFrame){C();return}g.current=c.requestAnimationFrame(()=>{g.current=null,C()})}else v();return}if(!e.current){v();return}const m=d().get(e.current.id);if(!m){v();return}v();const y=m.value===S,F=m.staleIndex??-1,O=m.id,D=()=>{var $;const N=b(O),B=l(m.value),P=E.activeElement===x.current;if(($=N?.element)!=null&&$.isConnected&&B?.trigger===N.element&&!(y&&P)){H()&&t(()=>{var A;return(A=b(O))==null?void 0:A.element});return}if(!H())return;let M=(F>=0?i(F):null)??(F>0?i(F-1):null)??o()??n();if(M?.element===x.current){const A=r(M.id);M=(A>0?i(A-1):null)??(F>0?i(F-1):null)??n()}M?.element&&(y&&!h&&!Qt(a.current,O)&&(e.current={id:M.id,value:M.value},R(null,M.value)),t(()=>y?f()??M?.element:M?.element))};if(!c?.requestAnimationFrame){D();return}c.requestAnimationFrame(()=>{c.requestAnimationFrame(()=>{D()})})});return s.useEffect(()=>()=>{g.current!=null&&c&&c.cancelAnimationFrame(g.current)},[g,c]),C}var Jt=Object.prototype.toString;function Zt(e){return typeof e=="function"||Jt.call(e)==="[object Function]"}function en(e){var t=Number(e);return isNaN(t)?0:t===0||!isFinite(t)?t:(t>0?1:-1)*Math.floor(Math.abs(t))}var tn=Math.pow(2,53)-1;function nn(e){var t=en(e);return Math.min(Math.max(t,0),tn)}function oe(e,t){var n=Array,r=Object(e);if(e==null)throw new TypeError("Array.from requires an array-like object - not null or undefined");for(var o=nn(r.length),d=Zt(n)?Object(new n(o)):new Array(o),l=0,f;l<o;)f=r[l],d[l]=f,l+=1;return d.length=o,d}function ye(e){"@babel/helpers - typeof";return ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ye(e)}function rn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function an(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ye(r.key),r)}}function sn(e,t,n){return t&&an(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function on(e,t,n){return t=Ye(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ye(e){var t=ln(e,"string");return ye(t)=="symbol"?t:t+""}function ln(e,t){if(ye(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ye(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var un=(function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];rn(this,e),on(this,"items",void 0),this.items=t}return sn(e,[{key:"add",value:function(n){return this.has(n)===!1&&this.items.push(n),this}},{key:"clear",value:function(){this.items=[]}},{key:"delete",value:function(n){var r=this.items.length;return this.items=this.items.filter(function(o){return o!==n}),r!==this.items.length}},{key:"forEach",value:function(n){var r=this;this.items.forEach(function(o){n(o,o,r)})}},{key:"has",value:function(n){return this.items.indexOf(n)!==-1}},{key:"size",get:function(){return this.items.length}}])})();const cn=typeof Set>"u"?Set:un;function J(e){var t;return(t=e.localName)!==null&&t!==void 0?t:e.tagName.toLowerCase()}var dn={article:"article",aside:"complementary",button:"button",datalist:"listbox",dd:"definition",details:"group",dialog:"dialog",dt:"term",fieldset:"group",figure:"figure",form:"form",footer:"contentinfo",h1:"heading",h2:"heading",h3:"heading",h4:"heading",h5:"heading",h6:"heading",header:"banner",hr:"separator",html:"document",legend:"legend",li:"listitem",math:"math",main:"main",menu:"list",nav:"navigation",ol:"list",optgroup:"group",option:"option",output:"status",progress:"progressbar",section:"region",summary:"button",table:"table",tbody:"rowgroup",textarea:"textbox",tfoot:"rowgroup",td:"cell",th:"columnheader",thead:"rowgroup",tr:"row",ul:"list"},fn={caption:new Set(["aria-label","aria-labelledby"]),code:new Set(["aria-label","aria-labelledby"]),deletion:new Set(["aria-label","aria-labelledby"]),emphasis:new Set(["aria-label","aria-labelledby"]),generic:new Set(["aria-label","aria-labelledby","aria-roledescription"]),insertion:new Set(["aria-label","aria-labelledby"]),none:new Set(["aria-label","aria-labelledby"]),paragraph:new Set(["aria-label","aria-labelledby"]),presentation:new Set(["aria-label","aria-labelledby"]),strong:new Set(["aria-label","aria-labelledby"]),subscript:new Set(["aria-label","aria-labelledby"]),superscript:new Set(["aria-label","aria-labelledby"])};function bn(e,t){return["aria-atomic","aria-busy","aria-controls","aria-current","aria-description","aria-describedby","aria-details","aria-dropeffect","aria-flowto","aria-grabbed","aria-hidden","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"].some(function(n){var r;return e.hasAttribute(n)&&!((r=fn[t])!==null&&r!==void 0&&r.has(n))})}function Je(e,t){return bn(e,t)}function vn(e){var t=mn(e);if(t===null||Oe.indexOf(t)!==-1){var n=pn(e);if(Oe.indexOf(t||"")===-1||Je(e,n||""))return n}return t}function pn(e){var t=dn[J(e)];if(t!==void 0)return t;switch(J(e)){case"a":case"area":case"link":if(e.hasAttribute("href"))return"link";break;case"img":return e.getAttribute("alt")===""&&!Je(e,"img")?"presentation":"img";case"input":{var n=e,r=n.type;switch(r){case"button":case"image":case"reset":case"submit":return"button";case"checkbox":case"radio":return r;case"range":return"slider";case"email":case"tel":case"text":case"url":return e.hasAttribute("list")?"combobox":"textbox";case"search":return e.hasAttribute("list")?"combobox":"searchbox";case"number":return"spinbutton";default:return null}}case"select":return e.hasAttribute("multiple")||e.size>1?"listbox":"combobox"}return null}function mn(e){var t=e.getAttribute("role");if(t!==null){var n=t.trim().split(" ")[0];if(n.length>0)return n}return null}var Oe=["presentation","none"];function K(e){return e!==null&&e.nodeType===e.ELEMENT_NODE}function Ze(e){return K(e)&&J(e)==="caption"}function Se(e){return K(e)&&J(e)==="input"}function hn(e){return K(e)&&J(e)==="optgroup"}function gn(e){return K(e)&&J(e)==="select"}function Cn(e){return K(e)&&J(e)==="table"}function wn(e){return K(e)&&J(e)==="textarea"}function yn(e){var t=e.ownerDocument===null?e:e.ownerDocument,n=t.defaultView;if(n===null)throw new TypeError("no window available");return n}function xn(e){return K(e)&&J(e)==="fieldset"}function Tn(e){return K(e)&&J(e)==="legend"}function Sn(e){return K(e)&&J(e)==="slot"}function kn(e){return K(e)&&e.ownerSVGElement!==void 0}function In(e){return K(e)&&J(e)==="svg"}function Ln(e){return kn(e)&&J(e)==="title"}function Me(e,t){if(K(e)&&e.hasAttribute(t)){var n=e.getAttribute(t).split(" "),r=e.getRootNode?e.getRootNode():e.ownerDocument;return n.map(function(o){return r.getElementById(o)}).filter(function(o){return o!==null})}return[]}function ie(e,t){return K(e)?t.indexOf(vn(e))!==-1:!1}function En(e){return e.trim().replace(/\s\s+/g," ")}function Rn(e,t){if(!K(e))return!1;if(e.hasAttribute("hidden")||e.getAttribute("aria-hidden")==="true")return!0;var n=t(e);return n.getPropertyValue("display")==="none"||n.getPropertyValue("visibility")==="hidden"}function Fn(e){return ie(e,["button","combobox","listbox","textbox"])||et(e,"range")}function et(e,t){if(!K(e))return!1;if(t==="range")return ie(e,["meter","progressbar","scrollbar","slider","spinbutton"]);throw new TypeError("No knowledge about abstract role '".concat(t,"'. This is likely a bug :("))}function _e(e,t){var n=oe(e.querySelectorAll(t));return Me(e,"aria-owns").forEach(function(r){n.push.apply(n,oe(r.querySelectorAll(t)))}),n}function On(e){return gn(e)?e.selectedOptions||_e(e,"[selected]"):_e(e,'[aria-selected="true"]')}function Mn(e){return ie(e,Oe)}function An(e){return Ze(e)}function Nn(e){return ie(e,["button","cell","checkbox","columnheader","gridcell","heading","label","legend","link","menuitem","menuitemcheckbox","menuitemradio","option","radio","row","rowheader","switch","tab","tooltip","treeitem"])}function zn(e){return!1}function _n(e){return Se(e)||wn(e)?e.value:e.textContent||""}function Be(e){var t=e.getPropertyValue("content");return/^["'].*["']$/.test(t)?t.slice(1,-1):""}function tt(e){var t=J(e);return t==="button"||t==="input"&&e.getAttribute("type")!=="hidden"||t==="meter"||t==="output"||t==="progress"||t==="select"||t==="textarea"}function nt(e){if(tt(e))return e;var t=null;return e.childNodes.forEach(function(n){if(t===null&&K(n)){var r=nt(n);r!==null&&(t=r)}}),t}function Bn(e){if(e.control!==void 0)return e.control;var t=e.getAttribute("for");return t!==null?e.ownerDocument.getElementById(t):nt(e)}function Pn(e){var t=e.labels;if(t===null)return t;if(t!==void 0)return oe(t);if(!tt(e))return null;var n=e.ownerDocument;return oe(n.querySelectorAll("label")).filter(function(r){return Bn(r)===e})}function jn(e){var t=e.assignedNodes();return t.length===0?oe(e.childNodes):t}function Hn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=new cn,r=typeof Map>"u"?void 0:new Map,o=yn(e),d=t.compute,l=d===void 0?"name":d,f=t.computedStyleSupportsPseudoElements,b=f===void 0?t.getComputedStyle!==void 0:f,i=t.getComputedStyle,u=i===void 0?o.getComputedStyle.bind(o):i,h=t.hidden,x=h===void 0?!1:h,T=function(c,v){if(v!==void 0)throw new Error("use uncachedGetComputedStyle directly for pseudo elements");if(r===void 0)return u(c);var C=r.get(c);if(C)return C;var w=u(c,v);return r.set(c,w),w};function I(a,c){var v="";if(K(a)&&b){var C=u(a,"::before"),w=Be(C);v="".concat(w," ").concat(v)}var E=Sn(a)?jn(a):oe(a.childNodes).concat(Me(a,"aria-owns"));if(E.forEach(function(k){var m=R(k,{isEmbeddedInLabel:c.isEmbeddedInLabel,isReferenced:!1,recursion:!0}),y=K(k)?T(k).getPropertyValue("display"):"inline",F=y!=="inline"?" ":"";v+="".concat(F).concat(m).concat(F)}),K(a)&&b){var j=u(a,"::after"),H=Be(j);v="".concat(v," ").concat(H)}return v.trim()}function p(a,c){var v=a.getAttributeNode(c);return v!==null&&!n.has(v)&&v.value.trim()!==""?(n.add(v),v.value):null}function g(a){return K(a)?p(a,"title"):null}function S(a){if(!K(a))return null;if(xn(a)){n.add(a);for(var c=oe(a.childNodes),v=0;v<c.length;v+=1){var C=c[v];if(Tn(C))return R(C,{isEmbeddedInLabel:!1,isReferenced:!1,recursion:!1})}}else if(Cn(a)){n.add(a);for(var w=oe(a.childNodes),E=0;E<w.length;E+=1){var j=w[E];if(Ze(j))return R(j,{isEmbeddedInLabel:!1,isReferenced:!1,recursion:!1})}}else if(In(a)){n.add(a);for(var H=oe(a.childNodes),k=0;k<H.length;k+=1){var m=H[k];if(Ln(m))return m.textContent}return null}else if(J(a)==="img"||J(a)==="area"){var y=p(a,"alt");if(y!==null)return y}else if(hn(a)){var F=p(a,"label");if(F!==null)return F}if(Se(a)&&(a.type==="button"||a.type==="submit"||a.type==="reset")){var O=p(a,"value");if(O!==null)return O;if(a.type==="submit")return"Submit";if(a.type==="reset")return"Reset"}var D=Pn(a);if(D!==null&&D.length!==0)return n.add(a),oe(D).map(function(P){return R(P,{isEmbeddedInLabel:!0,isReferenced:!1,recursion:!0})}).filter(function(P){return P.length>0}).join(" ");if(Se(a)&&a.type==="image"){var $=p(a,"alt");if($!==null)return $;var N=p(a,"title");return N!==null?N:"Submit Query"}if(ie(a,["button"])){var B=I(a,{isEmbeddedInLabel:!1});if(B!=="")return B}return null}function R(a,c){if(n.has(a))return"";if(!x&&Rn(a,T)&&!c.isReferenced)return n.add(a),"";var v=K(a)?a.getAttributeNode("aria-labelledby"):null,C=v!==null&&!n.has(v)?Me(a,"aria-labelledby"):[];if(l==="name"&&!c.isReferenced&&C.length>0)return n.add(v),C.map(function(y){return R(y,{isEmbeddedInLabel:c.isEmbeddedInLabel,isReferenced:!0,recursion:!1})}).join(" ");var w=c.recursion&&Fn(a)&&l==="name";if(!w){var E=(K(a)&&a.getAttribute("aria-label")||"").trim();if(E!==""&&l==="name")return n.add(a),E;if(!Mn(a)){var j=S(a);if(j!==null)return n.add(a),j}}if(ie(a,["menu"]))return n.add(a),"";if(w||c.isEmbeddedInLabel||c.isReferenced){if(ie(a,["combobox","listbox"])){n.add(a);var H=On(a);return H.length===0?Se(a)?a.value:"":oe(H).map(function(y){return R(y,{isEmbeddedInLabel:c.isEmbeddedInLabel,isReferenced:!1,recursion:!0})}).join(" ")}if(et(a,"range"))return n.add(a),a.hasAttribute("aria-valuetext")?a.getAttribute("aria-valuetext"):a.hasAttribute("aria-valuenow")?a.getAttribute("aria-valuenow"):a.getAttribute("value")||"";if(ie(a,["textbox"]))return n.add(a),_n(a)}if(Nn(a)||K(a)&&c.isReferenced||An(a)||zn()){var k=I(a,{isEmbeddedInLabel:c.isEmbeddedInLabel});if(k!=="")return n.add(a),k}if(a.nodeType===a.TEXT_NODE)return n.add(a),a.textContent||"";if(c.recursion)return n.add(a),I(a,{isEmbeddedInLabel:c.isEmbeddedInLabel});var m=g(a);return m!==null?(n.add(a),m):(n.add(a),"")}return En(R(e,{isEmbeddedInLabel:!1,isReferenced:l==="description",recursion:!1}))}function Dn(e){return ie(e,["caption","code","deletion","emphasis","generic","insertion","none","paragraph","presentation","strong","subscript","superscript"])}function Vn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Dn(e)?"":Hn(e,t)}function $n(e){const t=e.activeElement;return!t||t===e.body||t===e.documentElement||!t.isConnected}function qn(e){return Vn(e).trim()}function Kn({announce:e,focusElementWithRetry:t,getRenderedTab:n,getSelectedTabElement:r,menuOpen:o,resolvedOverflowActiveValue:d,selected:l,selectionFromOverflowValueRef:f,targetWindow:b}){const i=$e(l,[l]),u=s.useCallback(()=>{t(r)},[t,r]);G(()=>{!o||!d||t(()=>{var h;return(h=n(d))==null?void 0:h.trigger})},[t,n,o,d]),G(()=>{const h=b?.document;!h||l===void 0||i===void 0||l===i||$n(h)&&u()},[u,i,l,b]),G(()=>{const h=f.current;if(h==null||l===void 0||l===i)return;if(l!==h){f.current=null;return}u();const x=r(),T=x&&qn(x)||l;e(`${T} moved to main tab list`,100),f.current=null},[e,r,i,u,l,f])}var Gn=`.saltTabOverflowList {
  position: relative;
}

.saltTabOverflowList-list {
  background: var(--salt-container-primary-background);
  border: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) var(--salt-selectable-borderColor-selected);
  overflow: hidden;
  overflow-y: auto;
  position: absolute;
  box-shadow: var(--salt-overlayable-shadow-popout);
  box-sizing: border-box;
  border-radius: var(--salt-palette-corner, 0);
  z-index: var(--salt-zIndex-flyover);
}

.saltTabOverflowList-listContainer {
  display: flex;
  flex-direction: column;
  gap: var(--salt-spacing-fixed-100);
  max-height: inherit;
  min-height: inherit;
}

.saltTabOverflowList-list .saltTab {
  color: var(--salt-content-primary-foreground);
  background: var(--salt-selectable-background);
  font-size: var(--salt-text-fontSize);
  font-weight: var(--salt-text-fontWeight);
  min-height: calc(var(--salt-size-base) + var(--salt-spacing-100));
  padding-left: var(--salt-spacing-100);
  padding-right: var(--salt-spacing-100);
  display: flex;
  gap: var(--salt-spacing-100);
  position: relative;
  align-items: center;
  cursor: var(--salt-cursor-hover);
  box-sizing: border-box;
  flex-shrink: 0;
  justify-content: flex-start;
}

@supports selector(:has(*)) {
  .saltTabList:has([data-overflowbutton]) .saltTabOverflowList-list .saltTab {
    max-width: unset;
  }
}

.saltTabOverflowList-list .saltTab .saltTabTrigger {
  justify-content: start;
}

.saltTabOverflowList-list .saltTab::after {
  display: none;
}

.saltTabOverflowList-list .saltTab-focusVisible {
  outline: var(--salt-focused-outline);
  outline-offset: calc(var(--salt-size-fixed-100) * -2);
}

.saltTabOverflowList-list .saltTab:hover {
  background: var(--salt-selectable-background-hover);
}

.saltTabOverflowList-list .saltTab-disabled {
  color: var(--salt-content-primary-foreground-disabled);
  cursor: var(--salt-cursor-disabled);
}

.saltTabOverflowList-list .saltTab-disabled:hover,
.saltTabOverflowList-list .saltTab-disabled:active {
  background: var(--salt-selectable-background);
  box-shadow: none;
}

.saltTabOverflowList-list .saltTab:active {
  background: var(--salt-selectable-background-selected);
  box-shadow:
    0 calc(var(--salt-size-fixed-100) * -1) 0 0 var(--salt-selectable-borderColor-selected),
    0 var(--salt-size-fixed-100) 0 0 var(--salt-selectable-borderColor-selected);
}
`;function Ae({slotId:e,value:t,...n}){const r=Gt(),o=s.useCallback(d=>{r?.registerSlot(e,d)},[e,r]);return _.jsx("div",{role:"presentation","data-tabslot":"","data-slotid":e,"data-value":t,ref:o,style:{display:"contents"},...n})}const Le=se("saltTabOverflowList"),Un=s.forwardRef(function(t,n){var r,o;const{buttonRef:d,className:l,hiddenValues:f,order:b,open:i,setOpen:u,...h}=t,x=re();ae({testId:"salt-tab-overflow-list",css:Gn,window:x});const T=s.useRef(null),I=s.useRef(!1),{OverflowIcon:p}=mt(),{registerTab:g,updateTab:S,activeTab:R}=Ie(),{refs:a,x:c,y:v,strategy:C,context:w,elements:E}=lt({open:i,onOpenChange(A,U,W){var Z;u(A),W==="escape-key"&&((Z=T.current)==null||Z.focus())},placement:"bottom-start",middleware:[ft(1),bt({apply({elements:A,availableHeight:U}){Object.assign(A.floating.style,{maxHeight:`max(calc((var(--salt-size-base) + var(--salt-spacing-100)) * 5), calc(${U}px - var(--salt-spacing-100)))`})}}),vt(),pt({padding:8})]}),{getFloatingProps:j,getReferenceProps:H}=it([ut(w),ct(w)]),k=ge(n,a.setFloating),m=ge(d,a.setReference),y=ge(m,T),{Component:F}=dt(),O=Ee(),D=Ee(),$=()=>{O&&(R.current={value:O,id:O})},N=A=>{if(A.key==="Tab"&&A.shiftKey){A.preventDefault(),u(!1);const U=x?.requestAnimationFrame;if(U){U(()=>{var W;return(W=T.current)==null?void 0:W.focus({preventScroll:!0})});return}queueMicrotask(()=>{var W;return(W=T.current)==null?void 0:W.focus({preventScroll:!0})});return}},P=f.length>0,M=s.useRef(b);return s.useEffect(()=>{var A;const U=(A=T.current)==null?void 0:A.parentElement,W=x?.ResizeObserver;if(!i||!U||!W)return;const Z=[U,U.parentElement].filter(V=>V!=null),ee=Ue(Z),z=new W(V=>{for(const Y of V){if(!be(Y.target))continue;const ce=Y.contentRect.width||ue(Y.target);if(We(ee,Y.target,ce)){u(!1);return}}});for(const V of Z)z.observe(V);return()=>{z.disconnect()}},[i,u,x]),G(()=>{i&&!P&&u(!1)},[P,i,u]),G(()=>{P&&!I.current&&u(!1),I.current=P},[P,u]),G(()=>{if(O&&T.current&&P){const A={id:O,value:O,element:T.current,location:"main",order:M.current};return g(A)}},[P,O,g]),G(()=>{!O||!P||S(O,{element:T.current,location:"main",order:b})},[P,b,O,S]),P?_.jsxs(_.Fragment,{children:[_.jsx(ht,{className:ne(Le(),l),"data-overflowbutton":!0,appearance:"transparent",sentiment:"neutral",...H({onFocus:$}),ref:y,"aria-label":"Overflow","aria-expanded":i,"aria-controls":D,role:"tab",tabIndex:-1,...h,children:_.jsx(p,{"aria-hidden":!0})}),_.jsx(F,{ref:k,...j({id:D,onKeyDown:N}),focusManagerProps:w?{context:w,initialFocus:0,returnFocus:!1,modal:!1,closeOnFocusOut:!0}:void 0,className:Le("list"),open:i,left:c??0,top:v??0,position:C,width:(r=E.floating)==null?void 0:r.offsetWidth,height:(o=E.floating)==null?void 0:o.offsetHeight,children:_.jsx("div",{role:"tablist","aria-orientation":"vertical",className:Le("listContainer"),"aria-label":"Overflow tab options",children:f.map(A=>_.jsx(Ae,{slotId:`overflow:${A}`,value:A},A))})})]}):null}),rt=.5;function Wn({gap:e,maxWidth:t,overflowWidth:n,pinnedValue:r,tabs:o}){let d=t,l=0,f=0;const b=[];for(;f<o.length;){const h=o[f];if(!h)break;if(h.width==null)return null;const x=h.width+e;if(l+x>d)break;l+=x,b.push(h),f+=1}if(f>=o.length)return f;for(d-=n;l>d;){const h=b.pop();if(!h)break;if(h.width==null)return null;l-=h.width+e,f-=1}const u=r==null?null:o.find(h=>h.value===r)??null;if(u&&!b.includes(u)){if(u.width==null)return null;const h=u.width+e;for(;l+h>d;){const x=b.pop();if(!x)break;if(x.width==null)return null;l-=x.width+e,f-=1}}return Math.max(0,f)}function Xn(e,t,n){let r=e.slice(0,t),o=e.slice(t);const d=n!=null?o.indexOf(n):-1;if(d!==-1){const l=o[d];o=o.filter((f,b)=>b!==d),l!==void 0&&(r=[...r,l])}return{visibleValues:r,hiddenValues:o}}function Qn(e){const t=e.width||ue(e.root);return t>rt?t:null}function Yn(e){const t=e.parentElement;if(!t)return ue(e);const n=ue(t),r=he(t).getComputedStyle(t),o=Ge(r),d=Array.from(t.children).filter(i=>!be(i)||i===e?!1:he(i).getComputedStyle(i).display!=="none"),l=d.reduce((i,u)=>i+ue(u),0),f=d.length>0?d.length:0;return Math.max(0,n-l-f*o)}function Jn(e,t){return e!==void 0&&t.includes(e)}function Pe(e,t,n){return t?e:n.current}function Zn({container:e,overflowButton:t,tabs:n,selected:r,menuOpen:o}){const d=s.useMemo(()=>n.map(m=>m.value),[n]),l=s.useMemo(()=>n.map(m=>`${m.value}:${m.width.toFixed(2)}`).join("\0"),[n]),[f,b]=s.useState(0),[i,u]=s.useState(!0),[h,x]=s.useState(0),T=s.useRef(r),I=s.useRef(0),p=s.useRef(l),g=s.useRef(o),S=s.useRef(null),R=s.useRef(0),a=d.slice(f),c=Jn(r,a),v=Pe(r,c,T),C=s.useCallback(()=>Pe(r,c,T),[r,c]),w=s.useCallback(()=>{u(!0)},[]),E=s.useCallback(m=>{const y=e.current;if(!y)return null;const F=Yn(y),O=he(y).getComputedStyle(y),D=Ge(O),$=t.current?t.current.offsetWidth+D:0,N=n.map(B=>({value:B.value,width:Qn(B)}));return Wn({gap:D,maxWidth:F,overflowWidth:$,pinnedValue:m,tabs:N})},[e,t,n]),j=s.useCallback(()=>{const m=e.current,y=S.current;m&&y!=null&&he(m).cancelAnimationFrame(y),S.current=null,R.current=0},[e]);s.useEffect(()=>j,[j]),G(()=>{if(r!==void 0&&c){T.current=r;const m=E(r);if(m==null){w();return}m!==f&&b(m),i&&u(!1)}},[i,w,E,r,c,f]),s.useEffect(()=>{const m=e.current;if(!m||o||i)return;const y=[m],F=m.parentElement;if(F){y.push(F);for(const N of Array.from(F.children))be(N)&&N!==m&&y.push(N)}const O=Ue(y),D=he(m).ResizeObserver;if(!D)return;const $=new D(N=>{for(const B of N){if(!be(B.target))continue;const P=B.contentRect.width;if(We(O,B.target,P)){const M=E(C());if(M!=null&&M===f)continue;w();return}}});for(const N of y)$.observe(N);return()=>{$.disconnect()}},[e,C,i,w,E,o,f]),G(()=>{g.current&&!o&&w(),g.current=o},[w,o]),G(()=>{var m;const y=((m=t.current)==null?void 0:m.offsetWidth)??0;I.current!==y&&(I.current=y,f<n.length&&w())}),G(()=>{p.current!==l&&(p.current=l,w())},[w,l]),G(()=>{if(!i||o)return;const m=E(C());if(m==null){if(S.current!=null)return;const y=e.current;if(!y||ue(y)<=rt){R.current=0;return}if(R.current>=5)return;R.current+=1,S.current=he(y).requestAnimationFrame(()=>{S.current=null,x(F=>F+1)});return}j(),b(m),u(!1)},[j,e.current,C,i,h,E,o]);const{visibleValues:H,hiddenValues:k}=Xn(d,f,v);return[H,k,i]}function er(e,t,n){const r=e.indexOf(t),o=n!=null?e.indexOf(n):0;return r>=0?r:Math.max(0,o)}function tr({hiddenValues:e,menuOpen:t,overflowMenuOpen:n,visibleValues:r}){const[o,d]=s.useState(null);s.useEffect(()=>{n||d(null)},[n]);const l=s.useMemo(()=>n?o&&e.includes(o)?o:e[0]??null:null,[e,n,o]),f=s.useMemo(()=>new Set(e),[e]),b=s.useMemo(()=>new Set(r),[r]),i=s.useCallback(x=>b.has(x)?"main":t&&f.has(x)?"overflow":"hidden",[f,t,b]),u=s.useCallback((x,T)=>{if(e.length<1)return!1;const I=er(e,T,l),p=e.length-1;let g=I;switch(x){case"ArrowDown":g=I>=p?0:I+1;break;case"ArrowUp":g=I<=0?p:I-1;break;case"Home":g=0;break;case"End":g=p;break}const S=e[g];return S?(d(S),!0):!1},[e,l]),h=s.useMemo(()=>({getLocation:i,overflowActiveValue:l,setOverflowActiveValue:d,moveOverflowFocus:u}),[i,u,l]);return{resolvedOverflowActiveValue:l,tabListLayoutContext:h}}var nr=`/* Component class applied to the root element */
.saltTabList {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  background: transparent;
  min-height: calc(var(--salt-size-base) + var(--salt-spacing-100));
  gap: var(--salt-spacing-100);
  max-width: 100%;
  min-width: 0;
  flex: 0 1 auto;
}

.saltTabList-center {
  justify-content: center;
}

.saltTabList-right {
  justify-content: flex-end;
}

.saltTabList-activeColorPrimary {
  --saltTabList-activeColor: var(--salt-container-primary-background);
}

.saltTabList-activeColorSecondary {
  --saltTabList-activeColor: var(--salt-container-secondary-background);
}

.saltTabList-activeColorTertiary {
  --saltTabList-activeColor: var(--salt-container-tertiary-background);
}

.saltTabList-measureContainer {
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  overflow: hidden;
  pointer-events: none;
  visibility: hidden;
  white-space: nowrap;
}
`;const we=se("saltTabList"),je=120,kr=s.forwardRef(function(t,n){const{appearance:r="bordered",activeColor:o="primary",children:d,className:l,onKeyDown:f,...b}=t,i=re();ae({testId:"salt-tab-list",css:nr,window:i});const{renderMode:u,selected:h,setSelected:x,setBootstrapOverflowReady:T,getNext:I,getPrevious:p,getFirst:g,getLast:S,getIndex:R,item:a,itemAt:c,activeTab:v,selectionFromOverflowValueRef:C,menuOpen:w,setMenuOpen:E,sortItems:j,getRemovedItems:H,getRenderedTab:k,renderedTabs:m,removalVersion:y}=Ie(),F=s.useRef(null),O=s.useRef(null),D=s.useRef(new Map),$=s.useRef(null),N=s.useRef(!1),B=s.useRef(0),[P,M]=s.useState(0),A=ge(F,n),U=s.useRef(null),{announce:W}=gt(),Z=u==="portal"?w:!1,[ee,z,V]=Zn({container:F,menuOpen:Z,selected:h,tabs:m,overflowButton:U});s.useEffect(()=>{T(u==="inline"&&m.length>0&&!V)},[V,u,m.length,T]);const{resolvedOverflowActiveValue:Y,tabListLayoutContext:ce}=tr({hiddenValues:z,menuOpen:w,overflowMenuOpen:Z,visibleValues:ee}),ve=s.useCallback((q,Q)=>{(D.current.get(q)??null)!==Q&&(Q?D.current.set(q,Q):D.current.delete(q),M(pe=>pe+1))},[]),X=s.useMemo(()=>({registerSlot:ve}),[ve]),L=s.useMemo(()=>{const q=new Map;for(const Q of ee)q.set(Q,`main:${Q}`);for(const Q of z)q.set(Q,w?`overflow:${Q}`:`measure:${Q}`);return{map:q,version:P}},[z,w,P,ee]);G(()=>{var q;if(u==="portal")for(const[Q,de]of L.map){const pe=(q=k(Q))==null?void 0:q.host,me=D.current.get(de);pe&&me&&pe.parentElement!==me&&me.appendChild(pe)}},[k,u,L]);const te=q=>{var Q,de;if(f?.(q),w)return;const me={ArrowRight:I,ArrowLeft:p,Home:g,End:S}[q.key];if(me){q.preventDefault(),j();const Ne=(Q=v.current)==null?void 0:Q.id;if(!Ne)return;const ze=me(Ne);ze&&((de=ze.element)==null||de.focus({preventScroll:!0}))}},fe=s.useCallback(()=>{var q,Q,de;return((q=F.current)==null?void 0:q.querySelector('[role="tab"][aria-selected="true"]'))??((de=a((Q=v.current)==null?void 0:Q.id))==null?void 0:de.element)},[a,v]),{focusElementWithRetry:Ce}=Ut({maxAttempts:je,targetWindow:i});Kn({announce:W,focusElementWithRetry:Ce,getRenderedTab:k,getSelectedTabElement:fe,menuOpen:w,resolvedOverflowActiveValue:Y,selected:h,selectionFromOverflowValueRef:C,targetWindow:i});const at=Yt({activeTab:v,focusElementWithRetry:Ce,getFirst:g,getIndex:R,getLast:S,getRemovedItems:H,getRenderedTab:k,getSelectedTabElement:fe,item:a,itemAt:c,maxRetryAttempts:je,menuOpen:w,overflowButtonRef:U,overflowListRef:O,pendingRemovalRecoveryRef:N,pendingRemovalRecoveryRetriesRef:B,removalRecoveryRafRef:$,selected:h,setSelected:x,tabstripRef:F,targetWindow:i});return Wt({removalVersion:y,targetWindow:i,tabstripRef:F,overflowListRef:O,handleTabRemoval:at,pendingRemovalRecoveryRef:N,pendingRemovalRecoveryRetriesRef:B}),_.jsx("div",{role:"tablist",className:ne(we(),we(r),we("horizontal"),we(`activeColor${Re(o)}`),l),"data-ismeasuring":u==="portal"&&V?!0:void 0,ref:A,onKeyDown:te,...b,children:u==="inline"?d:_.jsx(Qe.Provider,{value:X,children:_.jsxs(Xe.Provider,{value:ce,children:[d,ee.map(q=>_.jsx(Ae,{slotId:`main:${q}`,value:q},q)),!w&&z.length>0?_.jsx("div",{"aria-hidden":"true",role:"presentation",className:we("measureContainer"),children:z.map(q=>_.jsx(Ae,{slotId:`measure:${q}`,value:q},`measure-${q}`))}):null,_.jsx(Un,{buttonRef:U,hiddenValues:z,open:w,order:m.length,setOpen:E,ref:O})]})})})});function rr({commitSelection:e,menuOpen:t,selected:n,setMenuOpen:r}){const o=$e(n,[n]),d=s.useRef(null),l=s.useRef(null),f=s.useCallback((b,i,u="main")=>{const h=u==="overflow";if(d.current=h?i:null,h){b?.persist(),l.current={event:b,value:i},r(!1);return}l.current=null,r(!1),e(b,i)},[e,r]);return G(()=>{if(t)return;const b=l.current;b&&(l.current=null,e(b.event,b.value))},[e,t]),s.useEffect(()=>{if(t)return;const b=d.current;if(b==null||l.current||n===b&&n!==o)return;const i=setTimeout(()=>{d.current===b&&(d.current=null)});return()=>clearTimeout(i)},[t,o,n]),{selectionFromOverflowValueRef:d,setSelected:f}}function ar(e){const t=e.map((r,o)=>[o,r]);let n=!1;return t.sort(([r,o],[d,l])=>{if(o.order!=null&&o.order>=0&&l.order!=null&&l.order>=0&&o.order!==l.order)return(o.order<l.order&&r>d||o.order>l.order&&r<d)&&(n=!0),o.order-l.order;const f=o.element,b=l.element;if(f===b||!f||!b)return 0;const i=f.compareDocumentPosition(b);return i&Node.DOCUMENT_POSITION_DISCONNECTED?0:i&Node.DOCUMENT_POSITION_FOLLOWING?(r>d&&(n=!0),-1):(r<d&&(n=!0),1)}),n?t.map(([r,o])=>o):e}function sr({wrap:e,targetWindow:t}){const n=s.useRef([]),r=s.useRef(new Map),o=s.useRef(new Map),[d,l]=s.useState(0),f=s.useCallback(()=>ar(Array.from(r.current.values())),[]),b=s.useCallback(()=>f().filter(p=>p.location==="hidden"?!1:!!p.element),[f]),i=s.useCallback(()=>{n.current=f()},[f]),u=s.useCallback(()=>{const p=new Map(o.current);return o.current.clear(),p},[]),h=s.useRef(null),x=s.useCallback(()=>{if(!t?.requestAnimationFrame){i();return}h.current!=null&&t.cancelAnimationFrame(h.current),h.current=t.requestAnimationFrame(()=>{h.current=null,i()})},[i,t]),T=s.useCallback(p=>(r.current.set(p.id,p),o.current.delete(p.id),x(),()=>{const g=f(),S=r.current.get(p.id)??p,R=g.findIndex(({id:a})=>a===p.id);o.current.set(p.id,{...S,staleIndex:R}),n.current=g.filter(({id:a})=>a!==p.id),r.current.delete(p.id),l(a=>a+1)}),[f,x]),I=s.useCallback((p,g)=>{const S=r.current.get(p);if(!S)return;let R=!1;const a={...S};for(const[c,v]of Object.entries(g)){const C=c;a[C]!==v&&(R=!0,a[C]=v)}R&&(r.current.set(p,a),n.current=n.current.map(c=>c.id!==p?c:a),x())},[x]);return s.useEffect(()=>()=>{h.current!=null&&t&&t.cancelAnimationFrame(h.current)},[t]),{registerItem:T,item:s.useCallback(p=>{if(!p)return null;let g=r.current.get(p);return g||(g=n.current.find(S=>S.id===p),g&&r.current.set(g.id,g)),g??null},[]),getNext:s.useCallback(p=>{const g=b();if(g.length===0)return null;const S=g.findIndex(({id:a})=>a===p);if(S===-1)return g[0];const R=(S+1)%g.length;return g[R]??null},[b,e]),getPrevious:s.useCallback(p=>{const g=b();if(g.length===0)return null;const S=g.findIndex(({id:a})=>a===p);if(S===-1)return g[g.length-1];const R=(S-1+g.length)%g.length;return g[R]??null},[b,e]),getFirst:s.useCallback(()=>b()[0]??null,[b]),getLast:s.useCallback(()=>{const p=b();return p[p.length-1]??null},[b]),getIndex:s.useCallback(p=>b().findIndex(({id:g})=>g===p),[b]),itemAt:s.useCallback(p=>b()[p]??null,[b]),updateItem:I,getRemovedItems:u,removalVersion:d,sortItems:i}}function or(e){return[...e].sort((t,n)=>{if(t.marker===n.marker||!t.marker||!n.marker)return 0;const r=t.marker.compareDocumentPosition(n.marker);return r&Node.DOCUMENT_POSITION_FOLLOWING?-1:r&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function lr(){const[e,t]=s.useState(()=>new Map),[n,r]=s.useState("inline"),[o,d]=s.useState(()=>new Set),[l,f]=s.useState(()=>new Set),[b,i]=s.useState(!1),u=s.useCallback(a=>(d(c=>{if(c.has(a))return c;const v=new Set(c);return v.add(a),v}),()=>{d(c=>{if(!c.has(a))return c;const v=new Set(c);return v.delete(a),v}),f(c=>{if(!c.has(a))return c;const v=new Set(c);return v.delete(a),v})}),[]),h=s.useCallback((a,c)=>{f(v=>{const C=v.has(a);if(c===C)return v;const w=new Set(v);return c?w.add(a):w.delete(a),w})},[]),x=s.useCallback(a=>{i(c=>c===a?c:a)},[]);G(()=>{if(!(n==="portal"||o.size<1)&&b){for(const a of o){if(!l.has(a))return;const c=e.get(a);if(!c||ue(c.root)<=0)return}r("portal")}},[b,o,l,n,e]);const T=s.useCallback(a=>(t(c=>{if(c.get(a.value)===a)return c;const C=new Map(c);return C.set(a.value,a),C}),()=>{t(c=>{const v=c.get(a.value);if(!v||v.id!==a.id)return c;const C=new Map(c);return C.delete(a.value),C})}),[]),I=s.useCallback((a,c)=>{t(v=>{const C=v.get(a);if(!C)return v;let w=!1;const E={...C};for(const[H,k]of Object.entries(c)){const m=H;E[m]!==k&&(w=!0,E[m]=k)}if(!w)return v;const j=new Map(v);return j.set(a,E),j})},[]),p=s.useCallback(a=>e.get(a),[e]),g=s.useMemo(()=>or(Array.from(e.values())),[e]),S=s.useMemo(()=>new Map(g.map((a,c)=>[a.value,c])),[g]),R=s.useCallback(a=>S.get(a)??-1,[S]);return{renderMode:n,registerBootstrapTab:u,setBootstrapTabReady:h,setBootstrapOverflowReady:x,registerRenderedTab:T,updateRenderedTab:I,getRenderedTab:p,getRenderedTabOrder:R,renderedTabs:g}}var ir=`.saltTabs {
  min-width: 0;
}
`;const ur=se("saltTabs");function He(e,t,n){if(e.get(t)===n)return e;const r=new Map(e);return r.set(t,n),r}function De(e,t,n){if(e.get(t)!==n)return e;const r=new Map(e);return r.delete(t),r}const Ir=s.forwardRef(function(t,n){const{className:r,children:o,value:d,defaultValue:l,onChange:f,...b}=t,i=re();ae({testId:"salt-tabs",css:ir,window:i});const[u,h]=s.useState(()=>new Map),[x,T]=s.useState(()=>new Map),{renderMode:I,registerBootstrapTab:p,setBootstrapTabReady:g,setBootstrapOverflowReady:S,registerRenderedTab:R,updateRenderedTab:a,getRenderedTab:c,getRenderedTabOrder:v,renderedTabs:C}=lr(),{registerItem:w,updateItem:E,item:j,getNext:H,getPrevious:k,getFirst:m,getLast:y,itemAt:F,getIndex:O,sortItems:D,removalVersion:$,getRemovedItems:N}=sr({targetWindow:i,wrap:!0}),B=s.useRef(void 0),[P,M]=s.useState(!1),[A,U]=Ct({controlled:d,default:l,name:"Tabs",state:"selected"}),W=s.useCallback((X,L)=>{U(L),A!==L&&f?.(X,L)},[f,A]),{selectionFromOverflowValueRef:Z,setSelected:ee}=rr({commitSelection:W,menuOpen:P,selected:A,setMenuOpen:M}),z=s.useCallback(X=>{const L=w(X);return h(te=>He(te,X.value,X.id)),()=>{L(),h(te=>De(te,X.value,X.id))}},[w]),V=s.useCallback((X,L)=>(T(te=>He(te,L,X)),()=>{T(te=>De(te,L,X))}),[]),Y=s.useCallback(X=>x.get(X),[x]),ce=s.useCallback(X=>u.get(X),[u]),ve=s.useMemo(()=>({renderMode:I,registerBootstrapTab:p,setBootstrapTabReady:g,setBootstrapOverflowReady:S,registerTab:z,updateTab:E,registerRenderedTab:R,updateRenderedTab:a,getRenderedTab:c,getRenderedTabOrder:v,renderedTabs:C,registerPanel:V,getPanelId:Y,getTabId:ce,selected:A,setSelected:ee,item:j,getNext:H,getPrevious:k,getFirst:m,getLast:y,activeTab:B,selectionFromOverflowValueRef:Z,menuOpen:P,setMenuOpen:M,itemAt:F,getIndex:O,sortItems:D,removalVersion:$,getRemovedItems:N}),[I,p,g,S,V,z,E,R,a,c,v,C,Y,ce,A,ee,j,H,k,m,y,P,F,O,D,$,N,Z]);return _.jsx(Ke.Provider,{value:ve,children:_.jsx("div",{className:ne(ur(),r),ref:n,...b,children:o})})});var cr=`.saltTabTrigger {
  all: unset;
  display: flex;
  gap: var(--salt-spacing-100);
  align-items: center;
  justify-content: center;
  flex: 1;
  overflow: hidden;
}

/* The action should be triggered by clicking anywhere on the tab. */
.saltTabTrigger::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.saltTabTrigger:focus-visible {
  outline: none;
}
`;const dr=se("saltTabTrigger");function fr(e){if(!(e<1))return e===1?"1 action available":`${e} actions available`}const br=typeof HTMLElement<"u"&&"ariaActions"in HTMLElement.prototype,Lr=s.forwardRef(function(t,n){const{children:r,className:o,onClick:d,onKeyDown:l,onFocus:f,...b}=t,i=re();ae({testId:"salt-tab-trigger",css:cr,window:i});const{setSelected:u,registerTab:h,updateTab:x,updateRenderedTab:T,getRenderedTabOrder:I,getPanelId:p,getTabId:g,selected:S,activeTab:R,menuOpen:a,setMenuOpen:c}=Ie(),{selected:v,value:C,focused:w,disabled:E,tabId:j,actions:H}=jt(),k=Kt(),m=s.useRef(null),y=k?.getLocation(C)??"main",F=y==="overflow"?"overflow":"main",O=y==="hidden",D=y==="overflow"&&a,$=I(C),N=$>=0?$:void 0,B=s.useRef(y),P=s.useRef(N),M=j;G(()=>{if(M&&m.current){const L={id:M,value:C,element:m.current,location:B.current,order:P.current};return h(L)}},[M,h,C]),G(()=>{M&&x(M,{element:m.current,location:y,order:N})},[M,y,N,x]),G(()=>{T(C,{trigger:m.current})},[T,C]),G(()=>{var L;!D||k?.overflowActiveValue!==C||(L=m.current)==null||L.focus({preventScroll:!0})},[D,k?.overflowActiveValue,C]);const A=L=>{d?.(L),u(L,C,F)},U=L=>{if(l?.(L),y==="overflow"&&L.key==="Tab"&&L.shiftKey){L.preventDefault(),c(!1);const fe=L.currentTarget.ownerDocument.querySelector("[data-overflowbutton]"),Ce=i?.requestAnimationFrame;Ce?Ce(()=>fe?.focus({preventScroll:!0})):queueMicrotask(()=>fe?.focus({preventScroll:!0}));return}if(y==="overflow"&&k&&(L.key==="ArrowDown"||L.key==="ArrowUp"||L.key==="Home"||L.key==="End")&&k.moveOverflowFocus(L.key,C)){L.preventDefault();return}if(E){(L.key==="Enter"||L.key===" ")&&L.preventDefault();return}(L.key==="Enter"||L.key===" ")&&(L.preventDefault(),u(L,C,F))},W=L=>{var te;f?.(L),M&&(R.current={value:C,id:M}),y==="overflow"&&k?.setOverflowActiveValue(C),(te=L.currentTarget.parentElement)==null||te.scrollIntoView({block:"nearest",inline:"nearest"})},Z=ge(m,n),ee=p(C),z=br?{"aria-actions":ne(H)||void 0}:{},V=y==="overflow"&&k?.overflowActiveValue===C,ce=!(S!==void 0&&g(S)!=null)&&y==="main"&&N===0,ve=!O&&(w||v||V||ce),X=y==="overflow"||!E;return _.jsx("button",{"aria-selected":v,"aria-disabled":E,"aria-controls":ee,...z,"aria-description":fr(H.length),tabIndex:ve?0:-1,role:"tab",type:"button",onClick:E?void 0:A,onKeyDown:X?U:void 0,onFocus:W,className:ne(dr(),o),id:M,ref:Z,"data-value":C,...b,children:r})});export{Cr as B,yr as C,xr as F,Tr as S,Ir as T,Ie as a,wr as b,kr as c,Sr as d,Lr as e,_t as h,jt as u};
