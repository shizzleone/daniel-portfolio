import{r as o,g as m,l as T,m as j,j as a,A as Ft,t as Mt,v as Ht,w as Nt,e as Ot,o as Lt}from"./iframe--_k5KNLb.js";const Dt=new Map,Pt=o.createContext(Dt);function st(e,t){const r=o.useContext(Pt).get(e)??[],l=o.useMemo(()=>r.length?r.flatMap(s=>s.keys.map(b=>t[b])):[],[r,t]),i=o.useMemo(()=>{const{className:s,...b}=t;return r.length?r.map(u=>({entry:u,result:u.fn(b)??null})):[]},[r,l,t]),d=o.useMemo(()=>m(t.className,i.map(s=>s.result).filter(s=>s!=null))||void 0,[t,i]),c=o.useMemo(()=>{const{className:s,...b}=t;if(!r.length)return b;const u={...b};for(const{entry:h,result:g}of i)if(g!=null)for(const f of h.keys)Object.hasOwn(u,f)&&delete u[f];return u},[r,i,t]);return{className:d,props:c}}const R=e=>(...t)=>[e,...t].join("-");function ct({controlled:e,default:t,name:n,state:r="value"}){const{current:l}=o.useRef(e!==void 0),[i,d]=o.useState(t),c=e!==void 0?e:i,{current:s}=o.useRef(t);o.useEffect(()=>{},[r,n,e]),o.useEffect(()=>{},[JSON.stringify(t,Vt)]);const b=o.useCallback(u=>{l||d(u)},[]);return[c,b,l]}function Vt(e,t){return o.isValidElement(t)?null:t}var Et=`/* Style applied to the root element */
.saltIcon {
  --icon-color: currentColor;
  --icon-size-multiplier: var(--saltIcon-size-multiplier, 1);
  --icon-base-size: var(--salt-size-icon, 12px);
  /**
   * Icon size will be the multiplier (an integer from the size prop) * the base size (set by the theme per density)
   * Icons should never be smaller than 12px for readability so we've added a max() to enforce this
   * Consumers can use --saltIcon-size variable to override this rule as an escape hatch
   */
  --icon-size: var(--saltIcon-size, max(calc(var(--icon-base-size) * var(--icon-size-multiplier)), 12px));
}

.saltIcon {
  fill: var(--saltIcon-color, var(--icon-color));
  display: inline-block;
  margin: var(--saltIcon-margin, 0);
  position: relative;
  width: var(--icon-size);
  height: var(--icon-size);
  min-width: var(--icon-size);
  min-height: var(--icon-size);
}

.saltIcon-primary {
  --icon-color: var(--salt-content-primary-foreground);
}

.saltIcon-secondary {
  --icon-color: var(--salt-content-secondary-foreground);
}
`;const qt=e=>(...t)=>[e,...t].join("-"),nt=qt("saltIcon"),$t=1,v=o.forwardRef(function({"aria-hidden":t,"aria-label":n,children:r,className:l,color:i="inherit",size:d=$t,style:c,...s},b){const u=T();j({testId:"salt-icon",css:Et,window:u});const h={...c,"--saltIcon-size-multiplier":`${d}`};return a.jsx("svg",{className:m(nt(),{[nt(i)]:i!=="inherit"},l),style:h,role:t?void 0:"img","aria-label":t?void 0:n,"aria-hidden":t,...s,ref:b,children:a.jsx("g",{"aria-hidden":!0,children:r})})}),Ut=o.forwardRef(function(t,n){return a.jsxs(v,{"data-testid":"BankIcon","aria-label":"bank",viewBox:"0 0 12 12",ref:n,...t,children:[a.jsx("path",{d:"M5.5 4V3h1v1z"}),a.jsx("path",{fillRule:"evenodd",d:"m6 0 6 6h-2v5h2v1H0v-1h2V6H0zM3 6v5h1V6zm2 0v5h2V6zm3 0v5h1V6zM6 1.414 9.586 5H2.414z",clipRule:"evenodd"})]})}),_t=o.forwardRef(function(t,n){return a.jsx(v,{"data-testid":"CalendarIcon","aria-label":"calendar",viewBox:"0 0 12 12",ref:n,...t,children:a.jsx("path",{d:"M4 0v1h4V0h1v1h3v11H0V1h3V0zm7 4H1v7h10zM9 2H8v1h1zM4 2H3v1h1z"})})}),dt=o.forwardRef(function(t,n){return a.jsx(v,{"data-testid":"CheckmarkIcon","aria-label":"checkmark",viewBox:"0 0 12 12",ref:n,...t,children:a.jsx("path",{fillRule:"evenodd",d:"M4.952 9.294 10 3.73 8.9 2.706 4.875 7.163 3.027 5.446 2 6.546z",clipRule:"evenodd"})})}),ut=o.forwardRef(function(t,n){return a.jsx(v,{"data-testid":"CheckmarkSolidIcon","aria-label":"checkmark solid",viewBox:"0 0 12 12",ref:n,...t,children:a.jsx("path",{fillRule:"evenodd",d:"M0 0h12v12H0zm10 3.729L4.952 9.294 2 6.545l1.027-1.1 1.848 1.718L8.9 2.706z",clipRule:"evenodd"})})}),et=o.forwardRef(function(t,n){return a.jsx(v,{"data-testid":"ChevronDownIcon","aria-label":"chevron down",viewBox:"0 0 12 12",ref:n,...t,children:a.jsx("path",{d:"M5.618 8.593 6 9l.382-.407L11 3.661 10.236 3 6 7.524 1.764 3 1 3.66z"})})}),Kt=o.forwardRef(function(t,n){return a.jsx(v,{"data-testid":"ChevronLeftIcon","aria-label":"chevron left",viewBox:"0 0 12 12",ref:n,...t,children:a.jsx("path",{d:"M3.407 5.618 3 6l.407.382L8.339 11 9 10.236 4.476 6 9 1.764 8.34 1z"})})}),Q=o.forwardRef(function(t,n){return a.jsx(v,{"data-testid":"ChevronRightIcon","aria-label":"chevron right",viewBox:"0 0 12 12",ref:n,...t,children:a.jsx("path",{d:"M8.593 5.618 9 6l-.407.382L3.661 11 3 10.236 7.524 6 3 1.764 3.66 1z"})})}),Gt=o.forwardRef(function(t,n){return a.jsx(v,{"data-testid":"ChevronUpIcon","aria-label":"chevron up",viewBox:"0 0 12 12",ref:n,...t,children:a.jsx("path",{d:"M5.618 3.407 6 3l.382.407L11 8.339 10.236 9 6 4.476 1.764 9 1 8.34z"})})}),Qt=o.forwardRef(function(t,n){return a.jsx(v,{"data-testid":"CloseIcon","aria-label":"close",viewBox:"0 0 12 12",ref:n,...t,children:a.jsx("path",{d:"m5.999 5.292 3.89-3.888.707.707L6.707 6l3.889 3.889-.707.708-3.89-3.89-3.889 3.89-.707-.708L5.292 6 1.403 2.111l.707-.708z"})})}),Zt=o.forwardRef(function(t,n){return a.jsxs(v,{"data-testid":"DoubleChevronLeftIcon","aria-label":"double chevron left",viewBox:"0 0 12 12",ref:n,...t,children:[a.jsx("path",{d:"M11.5 10.401 7.192 6 11.5 1.599 10.508.5 5 6l5.508 5.5z"}),a.jsx("path",{d:"M7 10.401 2.692 6 7 1.599 6.008.5.5 6l5.508 5.5z"})]})}),Yt=o.forwardRef(function(t,n){return a.jsxs(v,{"data-testid":"DoubleChevronRightIcon","aria-label":"double chevron right",viewBox:"0 0 12 12",ref:n,...t,children:[a.jsx("path",{d:"M.5 1.599 4.808 6 .5 10.401l.992 1.099L7 6 1.492.5z"}),a.jsx("path",{d:"M5 1.599 9.308 6 5 10.401l.992 1.099L11.5 6 5.992.5z"})]})}),Jt=o.forwardRef(function(t,n){return a.jsx(v,{"data-testid":"ErrorSolidIcon","aria-label":"error solid",viewBox:"0 0 12 12",ref:n,...t,children:a.jsx("path",{fillRule:"evenodd",d:"M9 0H3L0 3v6l3 3h6l3-3V3zM7 2H5v5h2zm-1 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2",clipRule:"evenodd"})})}),Xt=o.forwardRef(function(t,n){return a.jsx(v,{"data-testid":"FavoriteIcon","aria-label":"favorite",viewBox:"0 0 12 12",ref:n,...t,children:a.jsx("path",{d:"M6.448.302a.501.501 0 0 0-.902 0l-1.55 3.214-3.57.684a.5.5 0 0 0-.276.827L2.596 7.71l-.592 3.69a.5.5 0 0 0 .716.526l3.277-1.618 3.35 1.647a.5.5 0 0 0 .647-.555l-.591-3.69 2.446-2.683a.5.5 0 0 0-.276-.827l-3.57-.684zm.872 4.1 3.189.61-2.17 2.382.515 3.208-2.857-1.408L3.145 10.6l.515-3.207-2.17-2.382 3.189-.61 1.32-2.734z"})})}),tn=o.forwardRef(function(t,n){return a.jsx(v,{"data-testid":"FavoriteSolidIcon","aria-label":"favorite solid",viewBox:"0 0 12 12",ref:n,...t,children:a.jsx("path",{d:"M6.448.302a.501.501 0 0 0-.902 0l-1.55 3.214-3.57.684a.5.5 0 0 0-.276.827L2.596 7.71l-.592 3.69a.5.5 0 0 0 .716.526l3.277-1.618 3.35 1.647a.5.5 0 0 0 .647-.555l-.591-3.69 2.446-2.683a.5.5 0 0 0-.276-.827l-3.57-.684z"})})}),nn=o.forwardRef(function(t,n){return a.jsx(v,{"data-testid":"FavoriteStrongIcon","aria-label":"favorite strong",viewBox:"0 0 12 12",ref:n,...t,children:a.jsx("path",{d:"M5.547.303a.5.5 0 0 1 .901 0l1.554 3.213 3.57.684a.5.5 0 0 1 .278.827L9.403 7.71l.591 3.69a.5.5 0 0 1-.582.571l-.064-.016-3.351-1.648-3.276 1.619-.07.028a.5.5 0 0 1-.647-.556l.593-3.688L.15 5.027A.5.5 0 0 1 .426 4.2l3.57-.684zm-.528 4.544-2.557.49 1.73 1.897-.4 2.49 1.54-.76.663-.329 2.21 1.087-.397-2.488 1.728-1.897-2.557-.49-.327-.678-.654-1.352z"})})}),en=o.forwardRef(function(t,n){return a.jsx(v,{"data-testid":"InfoSolidIcon","aria-label":"info solid",viewBox:"0 0 12 12",ref:n,...t,children:a.jsx("path",{fillRule:"evenodd",d:"M0 0h12v12H0zm6 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2m1 3v5H5V5z",clipRule:"evenodd"})})}),an=o.forwardRef(function(t,n){return a.jsxs(v,{"data-testid":"LockedIcon","aria-label":"locked",viewBox:"0 0 12 12",ref:n,...t,children:[a.jsx("path",{d:"M6.5 8.915a1.5 1.5 0 1 0-1 0V10h1z"}),a.jsx("path",{fillRule:"evenodd",d:"M2 4H0v8h12V4h-2V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zm1-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2H3zm-2 9V5h10v6z",clipRule:"evenodd"})]})}),on=o.forwardRef(function(t,n){return a.jsx(v,{"data-testid":"OverflowMenuIcon","aria-label":"overflow menu",viewBox:"0 0 12 12",ref:n,...t,children:a.jsx("path",{d:"M1 5h2v2H1zm4 0h2v2H5zm6 0H9v2h2z"})})}),rn=o.forwardRef(function(t,n){return a.jsx(v,{"data-testid":"ProgressInprogressIcon","aria-label":"progress inprogress",viewBox:"0 0 12 12",ref:n,...t,children:a.jsx("path",{fillRule:"evenodd",d:"M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0M1 6a5 5 0 0 1 5-5v10a5 5 0 0 1-5-5",clipRule:"evenodd"})})}),ln=o.forwardRef(function(t,n){return a.jsx(v,{"data-testid":"StepActiveIcon","aria-label":"step active",viewBox:"0 0 12 12",ref:n,...t,children:a.jsx("path",{fillRule:"evenodd",d:"M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12",clipRule:"evenodd"})})}),sn=o.forwardRef(function(t,n){return a.jsx(v,{"data-testid":"StepDefaultIcon","aria-label":"step default",viewBox:"0 0 12 12",ref:n,...t,children:a.jsx("path",{fillRule:"evenodd",d:"M6 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8m6-4A6 6 0 1 1 0 6a6 6 0 0 1 12 0",clipRule:"evenodd"})})}),at=o.forwardRef(function(t,n){return a.jsx(v,{"data-testid":"SuccessCircleSolidIcon","aria-label":"success circle solid",viewBox:"0 0 12 12",ref:n,...t,children:a.jsx("path",{fillRule:"evenodd",d:"M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12m3.75-7.984L4.952 9.332 2 6.582l1.027-1.098L4.875 7.2l3.772-4.208z",clipRule:"evenodd"})})}),cn=o.forwardRef(function(t,n){return a.jsxs(v,{"data-testid":"TearOutIcon","aria-label":"tear out",viewBox:"0 0 12 12",ref:n,...t,children:[a.jsx("path",{d:"M0 12h12V6h-1v5H1V1h5V0H0z"}),a.jsx("path",{d:"M11.996 4V0h-4v1h2.293L5.996 5.293 6.703 6l4.293-4.293V4z"})]})}),dn=o.forwardRef(function(t,n){return a.jsx(v,{"data-testid":"TriangleDownIcon","aria-label":"triangle down",viewBox:"0 0 12 12",ref:n,...t,children:a.jsx("path",{d:"m6 8.5 5-5H1z"})})}),un=o.forwardRef(function(t,n){return a.jsx(v,{"data-testid":"TriangleUpIcon","aria-label":"triangle up",viewBox:"0 0 12 12",ref:n,...t,children:a.jsx("path",{d:"m6 3.5-5 5h10z"})})}),bn=o.forwardRef(function(t,n){return a.jsx(v,{"data-testid":"UploadIcon","aria-label":"upload",viewBox:"0 0 12 12",ref:n,...t,children:a.jsx("path",{d:"M6.5 9.028h-1V1.914L2.818 4.596l-.707-.707L6 0l3.889 3.89-.707.706L6.5 1.914zM12 11v1H0v-1z"})})}),vn=o.forwardRef(function(t,n){return a.jsx(v,{"data-testid":"UserIcon","aria-label":"user",viewBox:"0 0 12 12",ref:n,...t,children:a.jsx("path",{fillRule:"evenodd",d:"M12 11v.996H6V12H0v-.996q0-.68.41-1.206a1.96 1.96 0 0 1 1.02-.715q.14-.06.328-.117.176-.06.422-.129.059-.012.14-.035.083-.024.223-.07l.2-.047q.082-.035.163-.059.785-.234 1.184-.539.398-.304.492-.785a4.5 4.5 0 0 1-.644-.867 6 6 0 0 1-.493-1.077 8 8 0 0 1-.328-1.172A6.3 6.3 0 0 1 3 3.003q0-.82.234-1.394T3.88.683q.41-.363.95-.515Q5.378.004 6 .004V0q.621 0 1.172.164a2.4 2.4 0 0 1 1.594 1.441Q9 2.179 9 2.999q0 .574-.117 1.183a8 8 0 0 1-.328 1.172 6 6 0 0 1-.492 1.077q-.293.504-.645.867.094.48.492.785.398.304 1.184.54.082.022.164.058l.199.047q.14.046.223.07.081.023.14.035.246.07.422.129.188.059.328.117a1.96 1.96 0 0 1 1.02.715Q12 10.32 12 11M6 1.007v.004q-1.008 0-1.5.469-.504.457-.504 1.523 0 .492.106 1.007a6 6 0 0 0 .68 1.887q.233.42.515.702l.351.364-.082.503q-.14.82-.726 1.312-.586.48-1.64.809a1 1 0 0 0-.177.058 5 5 0 0 1-.21.047q-.177.06-.235.082l-.129.024-.375.117a2 2 0 0 0-.258.094l-.105.035a.97.97 0 0 0-.516.363 1 1 0 0 0-.199.597H6V11h5.004a.98.98 0 0 0-.2-.597.97.97 0 0 0-.515-.363l-.105-.035a2 2 0 0 0-.258-.094l-.375-.117-.13-.024a5 5 0 0 0-.233-.082 5 5 0 0 1-.211-.047 1 1 0 0 0-.176-.058q-1.055-.328-1.64-.809-.587-.492-.727-1.312l-.082-.503.351-.363a3.2 3.2 0 0 0 .516-.703q.234-.41.41-.89t.27-.996q.105-.516.105-1.008 0-1.065-.504-1.523-.492-.469-1.5-.469",clipRule:"evenodd"})})}),hn=o.forwardRef(function(t,n){return a.jsx(v,{"data-testid":"WarningSolidIcon","aria-label":"warning solid",viewBox:"0 0 12 12",ref:n,...t,children:a.jsx("path",{fillRule:"evenodd",d:"m6 0 6 12H0zM5 5h2v3H5zm2 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0",clipRule:"evenodd"})})}),gn=o.forwardRef(function({children:t,className:n,...r},l){return a.jsx("svg",{className:n,...r,role:"img",ref:l,viewBox:"0 0 8 8",children:a.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"})})}),fn=o.forwardRef(function({children:t,className:n,...r},l){return a.jsx("svg",{className:n,...r,role:"img",viewBox:"0 0 10 8",ref:l,children:a.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.92089 5.95735L8.96399 0L10 1.02133L2.92088 8L0 5.1205L1.03602 4.09918L2.92089 5.95735Z"})})}),pn=o.forwardRef(function({children:t,className:n,...r},l){return a.jsx("svg",{className:n,...r,role:"img",viewBox:"0 0 9 8",ref:l,children:a.jsx("path",{d:"M0 8L4.5 0L9 8H0Z"})})}),bt={ActiveIcon:ln,CalendarIcon:_t,CloseIcon:Qt,CollapseGroupIcon:et,CollapseIcon:Gt,CollapseLeftIcon:Zt,CollapseRightIcon:Yt,CompletedIcon:at,DecreaseIcon:dn,EntityIcon:Ut,ErrorIcon:Jt,ErrorStatusAdornment:gn,ExpandGroupIcon:Q,ExpandIcon:et,ExternalIcon:cn,IncreaseIcon:un,InfoIcon:en,InProgressIcon:rn,LockedIcon:an,LevelSeparatorIcon:Q,NextIcon:Q,OverflowIcon:on,PendingIcon:sn,PreviousIcon:Kt,RatingIcon:Xt,RatingSelectedIcon:tn,RatingUnselectingIcon:nn,SuccessIcon:at,SuccessStatusAdornment:fn,UploadIcon:bn,UserIcon:vn,WarningIcon:hn,WarningStatusAdornment:pn},xn=o.createContext(bt),mn=()=>o.useContext(xn)||bt;function yn(e){return e.length>0?e[0].toUpperCase()+e.slice(1):e}function kn(e,t=166,n=!1){let r;const l=function(...d){const c=()=>{e.apply(this,d)};clearTimeout(r),n&&c(),r=window.setTimeout(c,t)};return l.clear=()=>{clearTimeout(r)},l}const Cn=({debounce:e=0}={})=>{const t=o.useContext(Ft),n=o.useCallback((l,i={})=>{const d=typeof i=="number";let c,s={};d?c=i:s=i;const b=t?.announce;function u(){if(s.target){const h=Mt(s.target);if(h){const{target:g,...f}=s;h(l,f);return}}b&&t.announce(l,d?c:s)}c?setTimeout(u,c):u()},[t]),r=o.useMemo(()=>e>0?kn(n,e):n,[n,e]);return o.useMemo(()=>({...t,announce:r}),[t,r])},wn=(e,t)=>{const n=Object.entries(e).sort(([,l],[,i])=>l-i),[r]=n.reduce((l,i)=>{const[,d]=l,[c,s]=i;return s<=t&&s>d?[c,s]:l},n[0]);return r},Vn=()=>{const e=Ht(),t=Nt();return wn(t,e)};function In(e){return typeof e=="object"&&!Array.isArray(e)}function En(e,t){if(e&&In(e)){for(const n of t)if(e[n]!=null)return e[n];return}return e}function ot(e,t){if(typeof e=="function"){const n=e(t);return typeof n=="function"?n:()=>e(null)}if(e){const n=e;return n.current=t,()=>{n.current=null}}}function Sn(e,t){let n;return r=>{if(n?.(),n=void 0,r!=null){const l=ot(e,r),i=ot(t,r);n=()=>{l?.(),i?.()}}}}function qn(e,t){return o.useMemo(()=>e==null&&t==null?null:Sn(e,t),[e,t])}var Bn=`/* Styles applied to the root element */
.saltSpinner {
  position: relative;
}

/* Styles applied to the SVG stop elements */
.saltSpinner-gradientStop {
  stop-color: var(--saltSpinner-gradient-color, var(--salt-sentiment-accent-background));
}

/* Styles applied when \`size="medium"\` */
.saltSpinner-medium {
  --spinner-strokeWidth: var(--salt-size-bar);
  height: var(--salt-size-base);
  width: var(--salt-size-base);
}
.saltSpinner-medium .saltSpinner-arc {
  r: calc((var(--salt-size-base) - var(--spinner-strokeWidth)) / 2);
}

/* Styles applied when \`size="large"\` */
.saltSpinner-large {
  --spinner-strokeWidth: var(--salt-size-bar);
  height: calc(var(--salt-size-base) * 2);
  width: calc(var(--salt-size-base) * 2);
}
.saltSpinner-large .saltSpinner-arc {
  r: calc((var(--salt-size-base) * 2 - var(--spinner-strokeWidth)) / 2);
}

/* Styles applied when \`size="small"\` */
.saltSpinner-small {
  --spinner-strokeWidth: var(--salt-size-fixed-200);
  height: max(var(--salt-size-icon), 12px);
  width: max(var(--salt-size-icon), 12px);
}
.saltSpinner-small .saltSpinner-arc {
  r: calc((max(var(--salt-size-icon), 12px) - var(--spinner-strokeWidth)) / 2);
}

/* Styles applied to the SVG */
.saltSpinner-spinner {
  animation: spinner 0.9s linear infinite;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

@keyframes spinner {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;const q=R("saltSpinner"),zn=({id:e="svg-spinner",...t})=>{const n=`${e}-1`;return a.jsxs("svg",{className:q("spinner"),preserveAspectRatio:"xMidYMid meet",id:e,...t,children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:n,x1:"0",y1:"0",x2:"50%",y2:"0",children:[a.jsx("stop",{className:q("gradientStop"),offset:"15%",stopOpacity:"1"}),a.jsx("stop",{className:q("gradientStop"),offset:"100%",stopOpacity:"0"})]})}),a.jsx("circle",{className:q("arc"),cx:"50%",cy:"50%",fill:"none",stroke:"var(--saltSpinner-gradient-color, var(--salt-sentiment-accent-background))",strokeWidth:"var(--spinner-strokeWidth)",pathLength:"100",strokeDasharray:"50 50",strokeDashoffset:"50"}),a.jsx("circle",{className:q("arc"),cx:"50%",cy:"50%",fill:"none",stroke:`url(#${n})`,strokeWidth:"var(--spinner-strokeWidth)",pathLength:"100",strokeDasharray:"50 50",strokeDashoffset:"75"})]})},Wn=e=>e==="default"?"medium":e,rt=R("saltSpinner"),Tn=o.forwardRef(function({"aria-label":t="loading",announcerInterval:n=5e3,announcerTimeout:r=2e4,completionAnnouncement:l=`finished ${t}`,disableAnnouncer:i,className:d,size:c="medium",id:s,...b},u){const h=Ot(s),g=T();j({testId:"salt-spinner",css:Bn,window:g});const{announce:f}=Cn(),C=Wn(c);return o.useEffect(()=>{if(i)return;f(t);const w=Date.now(),x=n>0&&setInterval(()=>{if(Date.now()-w>r){f(`${t} is still in progress, but will no longer announce.`),x&&clearInterval(x);return}f(t)},n);return()=>{i||(x&&clearInterval(x),l&&f(l))}},[f,n,r,t,l,i]),a.jsx("div",{"aria-label":t,className:m(rt(),rt(C),d),ref:u,role:"img",...b,children:a.jsx(zn,{id:h})})});var jn=`.saltButton {
  --button-borderWidth: var(--salt-size-fixed-100);

  align-items: var(--saltButton-alignItems, center);
  appearance: none;
  background: var(--saltButton-background, var(--button-background));
  border-color: var(--saltButton-borderColor, var(--button-borderColor, transparent));
  border-style: var(--saltButton-borderStyle, solid);
  border-width: var(--saltButton-borderWidth, var(--button-borderWidth));
  border-radius: var(--saltButton-borderRadius, var(--salt-palette-corner-weak, 0));
  color: var(--saltButton-text-color, var(--button-text-color));
  display: inline-flex;
  gap: var(--salt-spacing-50);
  justify-content: var(--saltButton-justifyContent, center);
  font-size: var(--saltButton-fontSize, var(--salt-text-fontSize));
  font-family: var(--saltButton-fontFamily, var(--salt-text-action-fontFamily));
  line-height: var(--saltButton-lineHeight, var(--salt-text-lineHeight));
  letter-spacing: var(--saltButton-letterSpacing, var(--salt-text-action-letterSpacing));
  text-transform: var(--saltButton-textTransform, var(--salt-text-action-textTransform));
  padding: 0 var(--saltButton-padding, calc(var(--salt-spacing-100) - var(--saltButton-borderWidth, var(--button-borderWidth))));
  margin: var(--saltButton-margin, 0);
  height: var(--saltButton-height, var(--salt-size-base));
  min-width: var(--saltButton-minWidth, unset);
  position: relative;
  text-align: var(--saltButton-textAlign, var(--salt-text-action-textAlign));
  text-decoration: none;
  transition: none;
  width: var(--saltButton-width, auto);
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  /* Styles applied to align children*/
  font-weight: var(--saltButton-fontWeight, var(--salt-text-action-fontWeight));
}

/* Pseudo-class applied to the root element on focus */
.saltButton:focus-visible {
  outline-style: var(--salt-focused-outlineStyle);
  outline-width: var(--salt-focused-outlineWidth);
  outline-color: var(--salt-focused-outlineColor);
  outline-offset: var(--salt-focused-outlineOffset);
  background: var(--saltButton-background-hover, var(--button-background-hover));
  color: var(--saltButton-text-color-hover, var(--button-text-color-hover));
  border-color: var(--saltButton-borderColor-hover, var(--button-borderColor-hover));
}

@media (hover: hover) {
  /* Pseudo-class applied to the root element on hover when Button is not active or disabled */
  .saltButton:hover {
    background: var(--saltButton-background-hover, var(--button-background-hover));
    color: var(--saltButton-text-color-hover, var(--button-text-color-hover));
    border-color: var(--saltButton-borderColor-hover, var(--button-borderColor-hover));
    cursor: var(--salt-cursor-hover);
  }
}

/* Pseudo-class applied to the root element when Button is active and not disabled */
.saltButton.saltButton-active:focus-visible,
.saltButton:focus-visible:active,
.saltButton:active,
.saltButton.saltButton-active {
  background: var(--saltButton-background-active, var(--button-background-active));
  color: var(--saltButton-text-color-active, var(--button-text-color-active));
  border-color: var(--saltButton-borderColor-active, var(--button-borderColor-active));
  cursor: var(--salt-cursor-active);
}

/* Styles applied when the button triggers a dialog or menu */
.saltButton[aria-expanded="true"][aria-haspopup="menu"],
.saltButton[aria-expanded="true"][aria-haspopup="dialog"] {
  background: var(--saltButton-background-active, var(--button-background-active));
  color: var(--saltButton-text-color-active, var(--button-text-color-active));
  border-color: var(--saltButton-borderColor-active, var(--button-borderColor-active));
}

/* Pseudo-class applied to the root element if disabled={true} */
.saltButton:disabled,
.saltButton.saltButton-disabled,
.saltButton.saltButton-disabled:active,
.saltButton.saltButton-disabled:focus-visible,
.saltButton.saltButton-disabled:focus-visible:active,
.saltButton.saltButton-disabled:hover {
  background: var(--saltButton-background-disabled, var(--button-background));
  color: var(--saltButton-text-color-disabled, var(--button-text-color));
  cursor: var(--saltButton-cursor-disabled, var(--salt-cursor-disabled));
  border-color: var(--saltButton-borderColor-disabled, var(--button-borderColor));

  opacity: 0.4;
}

.saltButton-accented.saltButton-solid {
  --button-text-color: var(--salt-actionable-accented-bold-foreground);
  --button-text-color-hover: var(--salt-actionable-accented-bold-foreground-hover);
  --button-text-color-active: var(--salt-actionable-accented-bold-foreground-active);
  --button-background: var(--salt-actionable-accented-bold-background);
  --button-background-active: var(--salt-actionable-accented-bold-background-active);
  --button-background-hover: var(--salt-actionable-accented-bold-background-hover);
  --button-borderColor: var(--salt-actionable-accented-bold-borderColor);
  --button-borderColor-hover: var(--salt-actionable-accented-bold-borderColor-hover);
  --button-borderColor-active: var(--salt-actionable-accented-bold-borderColor-active);
}

.saltButton-accented.saltButton-bordered {
  --button-text-color: var(--salt-actionable-accented-foreground);
  --button-text-color-hover: var(--salt-actionable-accented-foreground-hover);
  --button-text-color-active: var(--salt-actionable-accented-foreground-active);
  --button-background: var(--salt-actionable-accented-background);
  --button-background-hover: var(--salt-actionable-accented-background-hover);
  --button-background-active: var(--salt-actionable-accented-background-active);
  --button-borderColor: var(--salt-actionable-accented-borderColor);
  --button-borderColor-hover: var(--salt-actionable-accented-borderColor-hover);
  --button-borderColor-active: var(--salt-actionable-accented-borderColor-active);
}

.saltButton-accented.saltButton-transparent {
  --button-text-color: var(--salt-actionable-accented-subtle-foreground);
  --button-text-color-hover: var(--salt-actionable-accented-subtle-foreground-hover);
  --button-text-color-active: var(--salt-actionable-accented-subtle-foreground-active);
  --button-background: var(--salt-actionable-accented-subtle-background);
  --button-background-hover: var(--salt-actionable-accented-subtle-background-hover);
  --button-background-active: var(--salt-actionable-accented-subtle-background-active);
  --button-borderColor: var(--salt-actionable-accented-subtle-borderColor);
  --button-borderColor-hover: var(--salt-actionable-accented-subtle-borderColor-hover);
  --button-borderColor-active: var(--salt-actionable-accented-subtle-borderColor-active);
}

.saltButton-accented.saltButton-loading {
  --button-text-color: var(--salt-actionable-accented-background);
  --button-text-color-hover: var(--salt-actionable-accented-background);
  --button-text-color-active: var(--salt-actionable-accented-background);
  --button-background: var(--salt-actionable-accented-background);
  --button-background-hover: var(--salt-actionable-accented-background);
  --button-background-active: var(--salt-actionable-accented-background);
  --button-borderColor: var(--salt-actionable-accented-borderColor);
  --button-borderColor-hover: var(--salt-actionable-accented-borderColor);
  --button-borderColor-active: var(--salt-actionable-accented-borderColor);
  cursor: var(--salt-cursor-pending);
}

.saltButton-neutral.saltButton-solid {
  --button-text-color: var(--salt-actionable-bold-foreground);
  --button-text-color-hover: var(--salt-actionable-bold-foreground-hover);
  --button-text-color-active: var(--salt-actionable-bold-foreground-active);
  --button-background: var(--salt-actionable-bold-background);
  --button-background-hover: var(--salt-actionable-bold-background-hover);
  --button-background-active: var(--salt-actionable-bold-background-active);
  --button-borderColor: var(--salt-actionable-bold-borderColor);
  --button-borderColor-hover: var(--salt-actionable-bold-borderColor-hover);
  --button-borderColor-active: var(--salt-actionable-bold-borderColor-active);
}

.saltButton-neutral.saltButton-bordered {
  --button-text-color: var(--salt-actionable-foreground);
  --button-text-color-hover: var(--salt-actionable-foreground-hover);
  --button-text-color-active: var(--salt-actionable-foreground-active);
  --button-background: var(--salt-actionable-background);
  --button-background-hover: var(--salt-actionable-background-hover);
  --button-background-active: var(--salt-actionable-background-active);
  --button-borderColor: var(--salt-actionable-borderColor);
  --button-borderColor-hover: var(--salt-actionable-borderColor-hover);
  --button-borderColor-active: var(--salt-actionable-borderColor-active);
}

.saltButton-neutral.saltButton-transparent {
  --button-text-color: var(--salt-actionable-subtle-foreground);
  --button-text-color-hover: var(--salt-actionable-subtle-foreground-hover);
  --button-text-color-active: var(--salt-actionable-subtle-foreground-active);
  --button-background: var(--salt-actionable-subtle-background);
  --button-background-hover: var(--salt-actionable-subtle-background-hover);
  --button-background-active: var(--salt-actionable-subtle-background-active);
  --button-borderColor: var(--salt-actionable-subtle-borderColor);
  --button-borderColor-hover: var(--salt-actionable-subtle-borderColor-hover);
  --button-borderColor-active: var(--salt-actionable-subtle-borderColor-active);
}

.saltButton-neutral.saltButton-loading {
  --button-text-color: var(--salt-actionable-background);
  --button-text-color-hover: var(--salt-actionable-background);
  --button-text-color-active: var(--salt-actionable-background);
  --button-background: var(--salt-actionable-background);
  --button-background-hover: var(--salt-actionable-background);
  --button-background-active: var(--salt-actionable-background);
  --button-borderColor: var(--salt-actionable-borderColor);
  --button-borderColor-hover: var(--salt-actionable-borderColor);
  --button-borderColor-active: var(--salt-actionable-borderColor);
  cursor: var(--salt-cursor-pending);
}

.saltButton-negative.saltButton-solid {
  --button-text-color: var(--salt-actionable-negative-bold-foreground);
  --button-text-color-hover: var(--salt-actionable-negative-bold-foreground-hover);
  --button-text-color-active: var(--salt-actionable-negative-bold-foreground-active);
  --button-background: var(--salt-actionable-negative-bold-background);
  --button-background-hover: var(--salt-actionable-negative-bold-background-hover);
  --button-background-active: var(--salt-actionable-negative-bold-background-active);
  --button-borderColor: var(--salt-actionable-negative-bold-borderColor);
  --button-borderColor-hover: var(--salt-actionable-negative-bold-borderColor-hover);
  --button-borderColor-active: var(--salt-actionable-negative-bold-borderColor-active);
}

.saltButton-negative.saltButton-bordered {
  --button-text-color: var(--salt-actionable-negative-foreground);
  --button-text-color-hover: var(--salt-actionable-negative-foreground-hover);
  --button-text-color-active: var(--salt-actionable-negative-foreground-active);
  --button-background: var(--salt-actionable-negative-background);
  --button-background-hover: var(--salt-actionable-negative-background-hover);
  --button-background-active: var(--salt-actionable-negative-background-active);
  --button-borderColor: var(--salt-actionable-negative-borderColor);
  --button-borderColor-hover: var(--salt-actionable-negative-borderColor-hover);
  --button-borderColor-active: var(--salt-actionable-negative-borderColor-active);
}

.saltButton-negative.saltButton-transparent {
  --button-text-color: var(--salt-actionable-negative-subtle-foreground);
  --button-text-color-hover: var(--salt-actionable-negative-subtle-foreground-hover);
  --button-text-color-active: var(--salt-actionable-negative-subtle-foreground-active);
  --button-background: var(--salt-actionable-negative-subtle-background);
  --button-background-hover: var(--salt-actionable-negative-subtle-background-hover);
  --button-background-active: var(--salt-actionable-negative-subtle-background-active);
  --button-borderColor: var(--salt-actionable-negative-subtle-borderColor);
  --button-borderColor-hover: var(--salt-actionable-negative-subtle-borderColor-hover);
  --button-borderColor-active: var(--salt-actionable-negative-subtle-borderColor-active);
}

.saltButton-negative.saltButton-loading {
  --button-text-color: var(--salt-actionable-negative-background);
  --button-text-color-hover: var(--salt-actionable-negative-background);
  --button-text-color-active: var(--salt-actionable-negative-background);
  --button-background: var(--salt-actionable-negative-background);
  --button-background-hover: var(--salt-actionable-negative-background);
  --button-background-active: var(--salt-actionable-negative-background);
  --button-borderColor: var(--salt-actionable-negative-borderColor);
  --button-borderColor-hover: var(--salt-actionable-negative-borderColor);
  --button-borderColor-active: var(--salt-actionable-negative-borderColor);
  cursor: var(--salt-cursor-pending);
}

.saltButton-positive.saltButton-solid {
  --button-text-color: var(--salt-actionable-positive-bold-foreground);
  --button-text-color-hover: var(--salt-actionable-positive-bold-foreground-hover);
  --button-text-color-active: var(--salt-actionable-positive-bold-foreground-active);
  --button-background: var(--salt-actionable-positive-bold-background);
  --button-background-hover: var(--salt-actionable-positive-bold-background-hover);
  --button-background-active: var(--salt-actionable-positive-bold-background-active);
  --button-borderColor: var(--salt-actionable-positive-bold-borderColor);
  --button-borderColor-hover: var(--salt-actionable-positive-bold-borderColor-hover);
  --button-borderColor-active: var(--salt-actionable-positive-bold-borderColor-active);
}

.saltButton-positive.saltButton-bordered {
  --button-text-color: var(--salt-actionable-positive-foreground);
  --button-text-color-hover: var(--salt-actionable-positive-foreground-hover);
  --button-text-color-active: var(--salt-actionable-positive-foreground-active);
  --button-background: var(--salt-actionable-positive-background);
  --button-background-hover: var(--salt-actionable-positive-background-hover);
  --button-background-active: var(--salt-actionable-positive-background-active);
  --button-borderColor: var(--salt-actionable-positive-borderColor);
  --button-borderColor-hover: var(--salt-actionable-positive-borderColor-hover);
  --button-borderColor-active: var(--salt-actionable-positive-borderColor-active);
}

.saltButton-positive.saltButton-transparent {
  --button-text-color: var(--salt-actionable-positive-subtle-foreground);
  --button-text-color-hover: var(--salt-actionable-positive-subtle-foreground-hover);
  --button-text-color-active: var(--salt-actionable-positive-subtle-foreground-active);
  --button-background: var(--salt-actionable-positive-subtle-background);
  --button-background-hover: var(--salt-actionable-positive-subtle-background-hover);
  --button-background-active: var(--salt-actionable-positive-subtle-background-active);
  --button-borderColor: var(--salt-actionable-positive-subtle-borderColor);
  --button-borderColor-hover: var(--salt-actionable-positive-subtle-borderColor-hover);
  --button-borderColor-active: var(--salt-actionable-positive-subtle-borderColor-active);
}

.saltButton-positive.saltButton-loading {
  --button-text-color: var(--salt-actionable-positive-background);
  --button-text-color-hover: var(--salt-actionable-positive-background);
  --button-text-color-active: var(--salt-actionable-positive-background);
  --button-background: var(--salt-actionable-positive-background);
  --button-background-hover: var(--salt-actionable-positive-background);
  --button-background-active: var(--salt-actionable-positive-background);
  --button-borderColor: var(--salt-actionable-positive-borderColor);
  --button-borderColor-hover: var(--salt-actionable-positive-borderColor);
  --button-borderColor-active: var(--salt-actionable-positive-borderColor);
  cursor: var(--salt-cursor-pending);
}

.saltButton-caution.saltButton-solid {
  --button-text-color: var(--salt-actionable-caution-bold-foreground);
  --button-text-color-hover: var(--salt-actionable-caution-bold-foreground-hover);
  --button-text-color-active: var(--salt-actionable-caution-bold-foreground-active);
  --button-background: var(--salt-actionable-caution-bold-background);
  --button-background-hover: var(--salt-actionable-caution-bold-background-hover);
  --button-background-active: var(--salt-actionable-caution-bold-background-active);
  --button-borderColor: var(--salt-actionable-caution-bold-borderColor);
  --button-borderColor-hover: var(--salt-actionable-caution-bold-borderColor-hover);
  --button-borderColor-active: var(--salt-actionable-caution-bold-borderColor-active);
}

.saltButton-caution.saltButton-bordered {
  --button-text-color: var(--salt-actionable-caution-foreground);
  --button-text-color-hover: var(--salt-actionable-caution-foreground-hover);
  --button-text-color-active: var(--salt-actionable-caution-foreground-active);
  --button-background: var(--salt-actionable-caution-background);
  --button-background-hover: var(--salt-actionable-caution-background-hover);
  --button-background-active: var(--salt-actionable-caution-background-active);
  --button-borderColor: var(--salt-actionable-caution-borderColor);
  --button-borderColor-hover: var(--salt-actionable-caution-borderColor-hover);
  --button-borderColor-active: var(--salt-actionable-caution-borderColor-active);
}

.saltButton-caution.saltButton-transparent {
  --button-text-color: var(--salt-actionable-caution-subtle-foreground);
  --button-text-color-hover: var(--salt-actionable-caution-subtle-foreground-hover);
  --button-text-color-active: var(--salt-actionable-caution-subtle-foreground-active);
  --button-background: var(--salt-actionable-caution-subtle-background);
  --button-background-hover: var(--salt-actionable-caution-subtle-background-hover);
  --button-background-active: var(--salt-actionable-caution-subtle-background-active);
  --button-borderColor: var(--salt-actionable-caution-subtle-borderColor);
  --button-borderColor-hover: var(--salt-actionable-caution-subtle-borderColor-hover);
  --button-borderColor-active: var(--salt-actionable-caution-subtle-borderColor-active);
}

.saltButton-caution.saltButton-loading {
  --button-text-color: var(--salt-actionable-caution-background);
  --button-text-color-hover: var(--salt-actionable-caution-background);
  --button-text-color-active: var(--salt-actionable-caution-background);
  --button-background: var(--salt-actionable-caution-background);
  --button-background-hover: var(--salt-actionable-caution-background);
  --button-background-active: var(--salt-actionable-caution-background);
  --button-borderColor: var(--salt-actionable-caution-borderColor);
  --button-borderColor-hover: var(--salt-actionable-caution-borderColor);
  --button-borderColor-active: var(--salt-actionable-caution-borderColor);
  cursor: var(--salt-cursor-pending);
}

/* Lets a nested Text with styleAs="inherit" use the action weights */
.saltButton {
  --text-fontWeight-bolder: var(--salt-text-action-fontWeight-bolder);
  --text-fontWeight-lighter: var(--salt-text-action-fontWeight-lighter);
}

.saltButton strong,
.saltButton b {
  font-weight: var(--salt-text-action-fontWeight-bolder);
}

/* Deprecated, use a nested Text with styleAs="inherit" and fontWeight="lighter" instead */
.saltButton small {
  font-size: inherit;
  font-weight: var(--salt-text-action-fontWeight-lighter);
}

.saltButton-spinner {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.saltButton-sr-only {
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-100%, -100%);
}
`;const Rn=({loading:e,disabled:t,focusableWhenDisabled:n,onKeyUp:r,onKeyDown:l,onClick:i,onBlur:d})=>{const[c,s]=o.useState(""),[b,u]=o.useState(!1),h="Enter",g=" ";return o.useEffect(()=>{const p=setTimeout(()=>{c!==h&&c!==g&&u(!1)},0);return()=>{clearTimeout(p)}},[b,c]),{active:b,buttonProps:{"aria-disabled":t&&n?!0:void 0,"data-loading":e,disabled:t&&!n,tabIndex:t&&!n?-1:0,onBlur:p=>{u(!1),d?.(p)},onClick:!e&&!t?p=>{u(!0),i?.(p)}:void 0,onKeyDown:p=>{(p.key===h||p.key===g)&&(s(p.key),u(!0)),l?.(p)},onKeyUp:p=>{s(""),u(!1),r?.(p)}}}},B=R("saltButton");function An(e){switch(e){case"primary":return{appearance:"solid",sentiment:"neutral"};case"secondary":return{appearance:"transparent",sentiment:"neutral"};case"cta":return{appearance:"solid",sentiment:"accented"}}}const $n=o.forwardRef(function(t,n){const{className:r,props:l}=st("saltButton",t),{children:i,disabled:d,focusableWhenDisabled:c,onKeyUp:s,onKeyDown:b,onBlur:u,onClick:h,loading:g,loadingAnnouncement:f,appearance:C,sentiment:w,type:x="button",variant:A="primary",...p}=l,{active:V,buttonProps:M}=Rn({loading:g,disabled:d,focusableWhenDisabled:c,onKeyUp:s,onKeyDown:b,onBlur:u,onClick:h}),W=T();j({testId:"salt-button",css:jn,window:W});const y=An(A),H=C??y?.appearance??"solid",S=w??y?.sentiment??"neutral",{tabIndex:$,...E}=M,N=x==="submit"&&g?"button":x;return a.jsxs("button",{...E,className:m(B(),B(A),{[B("loading")]:g,[B("disabled")]:d,[B("active")]:V,[B(H)]:H,[B(S)]:S},r),...p,ref:n,type:N,children:[g&&a.jsx("div",{className:B("spinner"),"aria-hidden":!0,children:a.jsx(Tn,{size:"small","aria-hidden":!0,disableAnnouncer:!0})}),typeof f=="string"&&a.jsx("span",{role:"status",className:B("sr-only"),children:f}),i]})}),Fn=Lt("FormFieldContext",{});function vt(){return o.useContext(Fn)||{}}var Mn=`.saltCheckboxIcon {
  --checkbox-size: var(--salt-size-selectable);
  width: var(--checkbox-size);
  min-width: var(--checkbox-size);
  height: var(--checkbox-size);
  min-height: var(--checkbox-size);
  border: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) var(--salt-selectable-borderColor);
  border-radius: var(--salt-palette-corner-weaker, 0);
  color: var(--salt-selectable-foreground);
  background: var(--salt-container-primary-background);
  position: relative;
  --saltIcon-size: 100%;
  display: flex;
  /* Using overflow:hidden here causes a thin white line */
  clip-path: border-box;
  box-sizing: border-box;
}

.saltCheckboxIcon-checked,
.saltCheckbox:hover .saltCheckboxIcon-checked {
  border-color: var(--salt-selectable-borderColor-selected);
  color: var(--salt-selectable-foreground-selected);
}

.saltCheckbox:hover .saltCheckboxIcon,
.saltCheckbox:hover .saltCheckboxIcon-indeterminate {
  border-color: var(--salt-selectable-borderColor-hover);
  color: var(--salt-selectable-foreground-hover);
}

.saltCheckboxIcon-checked.saltCheckboxIcon-indeterminate {
  border-color: var(--salt-selectable-borderColor);
  color: var(--salt-selectable-foreground);
}

.saltCheckbox-disabled:hover .saltCheckboxIcon,
.saltCheckbox-disabled:hover .saltCheckboxIcon-indeterminate {
  border-color: var(--salt-selectable-borderColor);
  color: var(--salt-selectable-foreground);
}

.saltCheckbox-disabled:hover .saltCheckboxIcon-checked {
  border-color: var(--salt-selectable-borderColor-selected);
  color: var(--salt-selectable-foreground-selected);
}

.saltCheckbox-disabled:hover .saltCheckboxIcon-checked.saltCheckboxIcon-indeterminate {
  border-color: var(--salt-selectable-borderColor);
  color: var(--salt-selectable-foreground);
}

.saltCheckboxIcon-disabled,
.saltCheckbox:hover .saltCheckboxIcon-disabled,
.saltCheckboxIcon-disabled.saltCheckboxIcon-indeterminate,
.saltCheckbox:hover .saltCheckboxIcon-disabled.saltCheckboxIcon-indeterminate {
  opacity: 0.4;

  border-color: var(--salt-selectable-borderColor);
  background: var(--salt-container-primary-background);
  color: var(--salt-selectable-foreground);
}

.saltCheckboxIcon-checked.saltCheckboxIcon-disabled,
.saltCheckbox:hover .saltCheckboxIcon-checked.saltCheckboxIcon-disabled {
  border-color: var(--salt-selectable-borderColor-selected);
  color: var(--salt-selectable-foreground-selected);
}

.saltCheckboxIcon-indeterminate::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(var(--checkbox-size) - 6px);
  height: 2px;
  background: currentColor;
  transform: translate(-50%, -50%);
}

.saltCheckboxIcon-error,
.saltCheckbox:hover .saltCheckboxIcon-error {
  color: var(--salt-status-error-foreground-decorative);
  border-color: var(--salt-status-error-borderColor);
  outline-color: var(--salt-status-error-foreground-decorative);
}

.saltCheckboxIcon-warning,
.saltCheckbox:hover .saltCheckboxIcon-warning {
  color: var(--salt-status-warning-foreground-decorative);
  border-color: var(--salt-status-warning-borderColor);
  outline-color: var(--salt-status-warning-foreground-decorative);
}

.saltCheckboxIcon-readOnly,
.saltCheckbox:hover .saltCheckboxIcon-readOnly,
.saltCheckbox-input:focus-visible + .saltCheckboxIcon-readOnly {
  border-color: var(--salt-selectable-borderColor-readonly);
  border-style: var(--salt-borderStyle-dashed);
  color: var(--salt-content-primary-foreground);
}

.saltCheckboxIcon > svg {
  position: absolute;
  /* Ensure a gap doesn't appear when device scaling is used */
  transform: scale(1.01);
}
`;const z=R("saltCheckboxIcon"),Un=({checked:e=!1,className:t,disabled:n,error:r,indeterminate:l,validationStatus:i,readOnly:d})=>{const c=T();return j({testId:"salt-checkbox-icon",css:Mn,window:c}),a.jsxs("div",{"aria-hidden":"true",className:m(z(),{[z("checked")]:e,[z("disabled")]:n,[z("error")]:r,[z(i||"")]:i,[z("indeterminate")]:l,[z("readOnly")]:d},t),children:[e&&!l&&!d&&a.jsx(ut,{className:z("icon")}),e&&!l&&d&&a.jsx(dt,{className:z("icon")})]})};var Hn=`.saltStatusAdornment {
  align-self: center;
  display: inline-block;
  fill: var(--saltStatusAdornment-color, var(--statusAdornment-color));
  height: var(--salt-size-adornment);
  min-height: var(--salt-size-adornment);
  padding-left: var(--salt-spacing-100);
  position: relative;
}

.saltStatusAdornment-error {
  --statusAdornment-color: var(--salt-status-error-foreground-decorative);
}

.saltStatusAdornment-warning {
  --statusAdornment-color: var(--salt-status-warning-foreground-decorative);
}

.saltStatusAdornment-success {
  --statusAdornment-color: var(--salt-status-success-foreground-decorative);
}
`;const lt=R("saltStatusAdornment"),Nn=o.forwardRef(function({className:t,status:n,...r},l){const i=mn(),c=`${yn(n)}StatusAdornment`,s=i[c],b=n,u=T();return j({testId:"salt-status-adornment",css:Hn,window:u}),s===void 0?null:a.jsx(s,{className:m(lt(),lt(n),t),"aria-label":b,...r,ref:l})});var On=`.saltText {
  --text-color: currentColor;
}

/* Main css class. Style for body text */
.saltText {
  color: var(--saltText-color, var(--text-color));
  font-family: var(--saltText-fontFamily, var(--salt-text-fontFamily));
  font-size: var(--saltText-fontSize, var(--salt-text-fontSize));
  line-height: var(--saltText-lineHeight, var(--salt-text-lineHeight));
  font-weight: var(--saltText-fontWeight, var(--salt-text-fontWeight));
  letter-spacing: var(--salt-text-letterSpacing);
  --text-fontWeight-bolder: var(--salt-text-fontWeight-bolder);
  --text-fontWeight-lighter: var(--salt-text-fontWeight-lighter);
}

/* Allows truncation */
.saltText-lineClamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--text-max-rows, 0);
  overflow: hidden;
  word-break: break-word;
}

/* Primary variant */
.saltText-primary {
  --text-color: var(--salt-content-primary-foreground);
}

/* Disabled primary variant */
.saltText-primary.saltText-disabled {
  --text-color: var(--salt-content-primary-foreground-disabled);
}

/* Secondary variant */
.saltText-secondary {
  --text-color: var(--salt-content-secondary-foreground);
}

/* Disabled secondary variant */
.saltText-secondary.saltText-disabled {
  --text-color: var(--salt-content-secondary-foreground-disabled);
}

/* Info color */
.saltText-info {
  --text-color: var(--salt-status-info-foreground-informative);
}

/* Error color */
.saltText-error {
  --text-color: var(--salt-status-error-foreground-informative);
}

/* Warning color */
.saltText-warning {
  --text-color: var(--salt-status-warning-foreground-informative);
}

/* Success color */
.saltText-success {
  --text-color: var(--salt-status-success-foreground-informative);
}

/* Notation */
.saltText-notation.saltText {
  font-family: var(--salt-text-fontFamily);
  font-size: var(--salt-text-notation-fontSize);
  line-height: var(--salt-text-notation-lineHeight);
  font-weight: var(--salt-text-notation-fontWeight);
  --text-fontWeight-bolder: var(--salt-text-notation-fontWeight-bolder);
  --text-fontWeight-lighter: var(--salt-text-notation-fontWeight-lighter);
}

/* Action */
.saltText-action.saltText {
  font-family: var(--salt-text-action-fontFamily);
  letter-spacing: var(--salt-text-action-letterSpacing);
  text-transform: var(--salt-text-action-textTransform);
  text-align: var(--salt-text-action-textAlign);
  font-weight: var(--salt-text-action-fontWeight);
  --text-fontWeight-bolder: var(--salt-text-action-fontWeight-bolder);
  --text-fontWeight-lighter: var(--salt-text-action-fontWeight-lighter);
}

/* Code */
code.saltText,
.saltText-code.saltText {
  font-family: var(--salt-text-code-fontFamily);
  font-weight: var(--salt-text-code-fontWeight);
  /* Code has a single weight, so lighter and bolder match the default */
  --text-fontWeight-bolder: var(--salt-text-code-fontWeight);
  --text-fontWeight-lighter: var(--salt-text-code-fontWeight);
}

/* Display 1 */
.saltText-display1.saltText {
  font-family: var(--salt-text-display-fontFamily);
  font-size: var(--salt-text-display1-fontSize);
  font-style: var(--salt-text-display-fontStyle, normal);
  font-weight: var(--salt-text-display-fontWeight);
  letter-spacing: var(--salt-text-display-letterSpacing, var(--salt-text-letterSpacing));
  line-height: var(--salt-text-display1-lineHeight);
  text-transform: var(--salt-text-display-textTransform, none);
  --text-fontWeight-bolder: var(--salt-text-display-fontWeight-bolder);
  --text-fontWeight-lighter: var(--salt-text-display-fontWeight-lighter);
}

/* Display 2 */
.saltText-display2.saltText {
  font-family: var(--salt-text-display-fontFamily);
  font-size: var(--salt-text-display2-fontSize);
  font-style: var(--salt-text-display-fontStyle, normal);
  font-weight: var(--salt-text-display-fontWeight);
  letter-spacing: var(--salt-text-display-letterSpacing, var(--salt-text-letterSpacing));
  line-height: var(--salt-text-display2-lineHeight);
  text-transform: var(--salt-text-display-textTransform, none);
  --text-fontWeight-bolder: var(--salt-text-display-fontWeight-bolder);
  --text-fontWeight-lighter: var(--salt-text-display-fontWeight-lighter);
}

/* Display 3 */
.saltText-display3.saltText {
  font-family: var(--salt-text-display-fontFamily);
  font-size: var(--salt-text-display3-fontSize);
  font-style: var(--salt-text-display-fontStyle, normal);
  font-weight: var(--salt-text-display-fontWeight);
  letter-spacing: var(--salt-text-display-letterSpacing, var(--salt-text-letterSpacing));
  line-height: var(--salt-text-display3-lineHeight);
  text-transform: var(--salt-text-display-textTransform, none);
  --text-fontWeight-bolder: var(--salt-text-display-fontWeight-bolder);
  --text-fontWeight-lighter: var(--salt-text-display-fontWeight-lighter);
}

/* Display 4 */
.saltText-display4.saltText {
  font-family: var(--salt-text-display-fontFamily);
  font-size: var(--salt-text-display4-fontSize);
  font-style: var(--salt-text-display-fontStyle, normal);
  font-weight: var(--salt-text-display-fontWeight);
  letter-spacing: var(--salt-text-display-letterSpacing, var(--salt-text-letterSpacing));
  line-height: var(--salt-text-display4-lineHeight);
  text-transform: var(--salt-text-display-textTransform, none);
  --text-fontWeight-bolder: var(--salt-text-display-fontWeight-bolder);
  --text-fontWeight-lighter: var(--salt-text-display-fontWeight-lighter);
}

/* Editorial 1 */
.saltText-editorial1.saltText {
  font-family: var(--salt-text-editorial-fontFamily);
  font-size: var(--salt-text-editorial1-fontSize);
  font-style: var(--salt-text-editorial-fontStyle, normal);
  font-weight: var(--salt-text-editorial-fontWeight);
  letter-spacing: var(--salt-text-editorial-letterSpacing);
  line-height: var(--salt-text-editorial1-lineHeight);
  text-transform: var(--salt-text-editorial-textTransform, none);
  --text-fontWeight-bolder: var(--salt-text-editorial-fontWeight-bolder);
  --text-fontWeight-lighter: var(--salt-text-editorial-fontWeight-lighter);
}

/* Editorial 2 */
.saltText-editorial2.saltText {
  font-family: var(--salt-text-editorial-fontFamily);
  font-size: var(--salt-text-editorial2-fontSize);
  font-style: var(--salt-text-editorial-fontStyle, normal);
  font-weight: var(--salt-text-editorial-fontWeight);
  letter-spacing: var(--salt-text-editorial-letterSpacing);
  line-height: var(--salt-text-editorial2-lineHeight);
  text-transform: var(--salt-text-editorial-textTransform, none);
  --text-fontWeight-bolder: var(--salt-text-editorial-fontWeight-bolder);
  --text-fontWeight-lighter: var(--salt-text-editorial-fontWeight-lighter);
}

/* Editorial 3 */
.saltText-editorial3.saltText {
  font-family: var(--salt-text-editorial-fontFamily);
  font-size: var(--salt-text-editorial3-fontSize);
  font-style: var(--salt-text-editorial-fontStyle, normal);
  font-weight: var(--salt-text-editorial-fontWeight);
  letter-spacing: var(--salt-text-editorial-letterSpacing);
  line-height: var(--salt-text-editorial3-lineHeight);
  text-transform: var(--salt-text-editorial-textTransform, none);
  --text-fontWeight-bolder: var(--salt-text-editorial-fontWeight-bolder);
  --text-fontWeight-lighter: var(--salt-text-editorial-fontWeight-lighter);
}

/* Editorial 4 */
.saltText-editorial4.saltText {
  font-family: var(--salt-text-editorial-fontFamily);
  font-size: var(--salt-text-editorial4-fontSize);
  font-style: var(--salt-text-editorial-fontStyle, normal);
  font-weight: var(--salt-text-editorial-fontWeight);
  letter-spacing: var(--salt-text-editorial-letterSpacing);
  line-height: var(--salt-text-editorial4-lineHeight);
  text-transform: var(--salt-text-editorial-textTransform, none);
  --text-fontWeight-bolder: var(--salt-text-editorial-fontWeight-bolder);
  --text-fontWeight-lighter: var(--salt-text-editorial-fontWeight-lighter);
}

/* Editorial 5 */
.saltText-editorial5.saltText {
  font-family: var(--salt-text-editorial-fontFamily);
  font-size: var(--salt-text-editorial5-fontSize);
  font-style: var(--salt-text-editorial-fontStyle, normal);
  font-weight: var(--salt-text-editorial-fontWeight);
  letter-spacing: var(--salt-text-editorial-letterSpacing);
  line-height: var(--salt-text-editorial5-lineHeight);
  text-transform: var(--salt-text-editorial-textTransform, none);
  --text-fontWeight-bolder: var(--salt-text-editorial-fontWeight-bolder);
  --text-fontWeight-lighter: var(--salt-text-editorial-fontWeight-lighter);
}

/* Editorial 6 */
.saltText-editorial6.saltText {
  font-family: var(--salt-text-editorial-fontFamily);
  font-size: var(--salt-text-editorial6-fontSize);
  font-style: var(--salt-text-editorial-fontStyle, normal);
  font-weight: var(--salt-text-editorial-fontWeight);
  letter-spacing: var(--salt-text-editorial-letterSpacing);
  line-height: var(--salt-text-editorial6-lineHeight);
  text-transform: var(--salt-text-editorial-textTransform, none);
  --text-fontWeight-bolder: var(--salt-text-editorial-fontWeight-bolder);
  --text-fontWeight-lighter: var(--salt-text-editorial-fontWeight-lighter);
}

/* Heading 1 */
h1.saltText,
.saltText-h1.saltText {
  font-family: var(--salt-text-heading-fontFamily);
  font-size: var(--salt-text-h1-fontSize);
  font-weight: var(--salt-text-heading-fontWeight);
  line-height: var(--salt-text-h1-lineHeight);
  --text-fontWeight-bolder: var(--salt-text-heading-fontWeight-bolder);
  --text-fontWeight-lighter: var(--salt-text-heading-fontWeight-lighter);
}

/* Heading 2 */
h2.saltText,
.saltText-h2.saltText {
  font-family: var(--salt-text-heading-fontFamily);
  font-size: var(--salt-text-h2-fontSize);
  font-weight: var(--salt-text-heading-fontWeight);
  line-height: var(--salt-text-h2-lineHeight);
  --text-fontWeight-bolder: var(--salt-text-heading-fontWeight-bolder);
  --text-fontWeight-lighter: var(--salt-text-heading-fontWeight-lighter);
}

/* Heading 3 */
h3.saltText,
.saltText-h3.saltText {
  font-family: var(--salt-text-heading-fontFamily);
  font-size: var(--salt-text-h3-fontSize);
  font-weight: var(--salt-text-heading-fontWeight);
  line-height: var(--salt-text-h3-lineHeight);
  --text-fontWeight-bolder: var(--salt-text-heading-fontWeight-bolder);
  --text-fontWeight-lighter: var(--salt-text-heading-fontWeight-lighter);
}

/* Heading 4 */
h4.saltText,
.saltText-h4.saltText {
  font-family: var(--salt-text-heading-fontFamily);
  font-size: var(--salt-text-h4-fontSize);
  font-weight: var(--salt-text-heading-fontWeight);
  line-height: var(--salt-text-h4-lineHeight);
  --text-fontWeight-bolder: var(--salt-text-heading-fontWeight-bolder);
  --text-fontWeight-lighter: var(--salt-text-heading-fontWeight-lighter);
}

/* Label */
label.saltText,
.saltText-label.saltText {
  font-family: var(--salt-text-fontFamily);
  font-size: var(--salt-text-label-fontSize);
  line-height: var(--salt-text-label-lineHeight);
  font-weight: var(--salt-text-label-fontWeight);
  --text-fontWeight-bolder: var(--salt-text-label-fontWeight-bolder);
  --text-fontWeight-lighter: var(--salt-text-label-fontWeight-lighter);
}

/* Label 2 */
.saltText-label2.saltText {
  font-family: var(--salt-text-fontFamily);
  font-size: var(--salt-text-label2-fontSize);
  line-height: var(--salt-text-label2-lineHeight);
  font-weight: var(--salt-text-label-fontWeight);
  --text-fontWeight-bolder: var(--salt-text-label-fontWeight-bolder);
  --text-fontWeight-lighter: var(--salt-text-label-fontWeight-lighter);
}

/* Body 2 */
.saltText-body2.saltText {
  font-family: var(--salt-text-fontFamily);
  font-size: var(--salt-text-body2-fontSize);
  line-height: var(--salt-text-body2-lineHeight);
  font-weight: var(--salt-text-fontWeight);
  --text-fontWeight-bolder: var(--salt-text-fontWeight-bolder);
  --text-fontWeight-lighter: var(--salt-text-fontWeight-lighter);
}

/* Eyebrow */
.saltText-eyebrow.saltText {
  font-family: var(--salt-text-eyebrow-fontFamily);
  font-size: var(--salt-text-eyebrow-fontSize);
  font-style: var(--salt-text-eyebrow-fontStyle, normal);
  font-weight: var(--salt-text-eyebrow-fontWeight);
  letter-spacing: var(--salt-text-eyebrow-letterSpacing);
  line-height: var(--salt-text-eyebrow-lineHeight);
  text-transform: var(--salt-text-eyebrow-textTransform, none);
  --text-fontWeight-bolder: var(--salt-text-eyebrow-fontWeight-bolder);
  --text-fontWeight-lighter: var(--salt-text-eyebrow-fontWeight-lighter);
}

/* Inherit the parent's text style, including its bolder and lighter weights */
.saltText-inheritStyle.saltText {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  --text-fontWeight-bolder: inherit;
  --text-fontWeight-lighter: inherit;
}

/* Emphasis strong */
.saltText strong,
.saltText b {
  font-weight: var(--text-fontWeight-bolder, var(--salt-text-fontWeight-bolder));
}

/* Emphasis small. Deprecated, use the fontWeight prop instead */
.saltText small {
  font-size: inherit;
  font-weight: var(--text-fontWeight-lighter, var(--salt-text-fontWeight-lighter));
}

/* Font weight prop. Must follow the text styles so it overrides their weights */
.saltText.saltText-bolder {
  font-weight: var(--text-fontWeight-bolder, var(--salt-text-fontWeight-bolder));
}

.saltText.saltText-lighter {
  font-weight: var(--text-fontWeight-lighter, var(--salt-text-fontWeight-lighter));
}
`;const P=R("saltText"),_n=o.forwardRef(function({as:t,children:n,className:r,disabled:l=!1,fontWeight:i,maxRows:d,style:c,styleAs:s,variant:b,color:u,...h},g){const f=T();j({testId:"salt-text",css:On,window:f});const C=t??"div",w={"--text-max-rows":d,...c},x=b??u??(s==="inherit"?"inherit":"primary");return a.jsx(C,{className:m(P(),{[P("disabled")]:l,[P("lineClamp")]:d,[P(s==="inherit"?"inheritStyle":s)]:s,[P(i)]:i,[P(x)]:x!=="inherit"},r),...h,ref:g,style:w,children:n})});var Ln=`/* Style applied to the root element */
.saltInput {
  align-items: center;
  background: var(--saltInput-background, var(--input-background));
  border-radius: var(--salt-palette-corner-weak, 0);
  color: var(--saltInput-color, var(--salt-content-primary-foreground));
  display: inline-flex;
  font-family: var(--salt-text-fontFamily);
  font-size: var(--saltInput-fontSize, var(--salt-text-fontSize));
  line-height: var(--saltInput-lineHeight, var(--salt-text-lineHeight));
  letter-spacing: var(--salt-text-letterSpacing);
  height: var(--saltInput-height, var(--salt-size-base));
  min-height: var(--saltInput-minHeight, var(--salt-size-base));
  min-width: var(--saltInput-minWidth, 4em);
  padding-left: var(--saltInput-paddingLeft, var(--salt-spacing-100));
  padding-right: var(--saltInput-paddingRight, var(--salt-spacing-100));
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.saltInput:hover {
  cursor: var(--salt-cursor-text);
}

/* Style applied if \`bordered={true}\` */
.saltInput-bordered.saltInput {
  border: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) var(--input-borderColor);
}

.saltInput-bordered.saltInput:hover {
  border-style: var(--salt-borderStyle-solid);
  border-color: var(--input-borderColor-hover);
}

.saltInput-bordered.saltInput-focused,
.saltInput-bordered.saltInput-focused:hover {
  border-style: var(--salt-borderStyle-solid);
  border-color: var(--input-borderColor-active);
}

.saltInput-bordered.saltInput-readOnly,
.saltInput-bordered.saltInput-readOnly:hover {
  border-style: var(--salt-borderStyle-solid);
  border-color: var(--salt-editable-borderColor-readonly);
}

.saltInput-bordered.saltInput-disabled,
.saltInput-bordered.saltInput-disabled:hover {
  border-style: var(--salt-borderStyle-solid);
  border-color: var(--salt-editable-borderColor-disabled);
}

.saltInput-activationIndicator {
  left: 0;
  bottom: 0;
  width: 100%;
  position: absolute;
  border-bottom: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) var(--input-borderColor);
}

.saltInput:hover .saltInput-activationIndicator {
  border-bottom-style: var(--salt-borderStyle-solid);
  border-bottom-color: var(--input-borderColor-hover);
}

.saltInput-focused .saltInput-activationIndicator,
.saltInput-focused:hover .saltInput-activationIndicator {
  border-bottom: var(--salt-size-fixed-200) var(--salt-borderStyle-solid) var(--input-borderColor-active);
}

.saltInput-readOnly .saltInput-activationIndicator,
.saltInput-readOnly:hover .saltInput-activationIndicator {
  border-bottom-style: var(--salt-borderStyle-solid);
  border-bottom-color: var(--salt-editable-borderColor-readonly);
}

.saltInput-disabled .saltInput-activationIndicator,
.saltInput-disabled:hover .saltInput-activationIndicator {
  border-bottom-style: var(--salt-borderStyle-solid);
  border-bottom-color: var(--salt-editable-borderColor-disabled);
}

.saltInput-bordered .saltInput-activationIndicator,
.saltInput-bordered.saltInput-readOnly .saltInput-activationIndicator,
.saltInput-bordered.saltInput-disabled:hover .saltInput-activationIndicator {
  border-bottom-width: 0;
}

.saltInput-bordered.saltInput-focused .saltInput-activationIndicator {
  /* Activation indicator width minus the border from the input. */
  border-bottom-width: var(--salt-size-fixed-100);
}

/* Class applied if \`variant="primary"\` */
.saltInput-primary {
  --input-background: var(--salt-editable-primary-background);
  --input-background-disabled: var(--salt-editable-primary-background-disabled);
  --input-background-readonly: var(--salt-editable-background-readonly);
  --input-borderColor: var(--salt-editable-borderColor);
  --input-borderColor-active: var(--salt-editable-borderColor-active);
  --input-borderColor-hover: var(--salt-editable-borderColor-hover);
  --input-outlineColor: var(--salt-focused-outlineColor);
}

/* Class applied if \`variant="secondary"\` */
.saltInput-secondary {
  --input-background: var(--salt-editable-secondary-background);
  --input-background-disabled: var(--salt-editable-secondary-background-disabled);
  --input-background-readonly: var(--salt-editable-background-readonly);
  --input-borderColor: var(--salt-editable-borderColor);
  --input-borderColor-active: var(--salt-editable-borderColor-active);
  --input-borderColor-hover: var(--salt-editable-borderColor-hover);
  --input-outlineColor: var(--salt-focused-outlineColor);
}

/* Class applied if \`variant="tertiary"\` */
.saltInput-tertiary {
  --input-background: var(--salt-editable-tertiary-background);
  --input-background-disabled: var(--salt-editable-tertiary-background-disabled);
  --input-background-readonly: var(--salt-editable-background-readonly);
  --input-borderColor: var(--salt-editable-borderColor);
  --input-borderColor-active: var(--salt-editable-borderColor-active);
  --input-borderColor-hover: var(--salt-editable-borderColor-hover);
  --input-outlineColor: var(--salt-focused-outlineColor);
}

/* Style applied to input if \`validationState="error"\` */
.saltInput-error {
  --input-background: var(--salt-status-error-background);
  --input-background-readonly: var(--salt-status-error-background);
  --input-borderColor: var(--salt-status-error-borderColor);
  --input-borderColor-active: var(--salt-status-error-borderColor);
  --input-borderColor-hover: var(--salt-status-error-borderColor);
  --input-outlineColor: var(--salt-status-error-borderColor);
}

/* Style applied to input if \`validationState="warning"\` */
.saltInput-warning {
  --input-background: var(--salt-status-warning-background);
  --input-background-readonly: var(--salt-status-warning-background);
  --input-borderColor: var(--salt-status-warning-borderColor);
  --input-borderColor-active: var(--salt-status-warning-borderColor);
  --input-borderColor-hover: var(--salt-status-warning-borderColor);
  --input-outlineColor: var(--salt-status-warning-borderColor);
}

/* Style applied to input if \`validationState="success"\` */
.saltInput-success {
  --input-background: var(--salt-status-success-background);
  --input-background-readonly: var(--salt-status-success-background);
  --input-borderColor: var(--salt-status-success-borderColor);
  --input-borderColor-active: var(--salt-status-success-borderColor);
  --input-borderColor-hover: var(--salt-status-success-borderColor);
  --input-outlineColor: var(--salt-status-success-borderColor);
}

/* Styling when focused */
.saltInput-focused,
.saltInput-focused:hover {
  cursor: var(--salt-cursor-text);
  outline: var(--saltInput-outline, var(--salt-focused-outlineWidth) var(--salt-focused-outlineStyle) var(--input-outlineColor));
}

/* Style applied if \`readOnly={true}\` */
.saltInput.saltInput-readOnly {
  background: var(--input-background-readonly);
  cursor: var(--salt-cursor-readonly);
}

/* Style applied to input if \`disabled={true}\` */
.saltInput.saltInput-disabled,
.saltInput.saltInput-disabled:hover {
  background: var(--input-background-disabled);
  cursor: var(--salt-cursor-disabled);
  color: var(--saltInput-color-disabled, var(--salt-content-primary-foreground-disabled));
}

/* Style applied to start adornments */
.saltInput-startAdornmentContainer {
  align-items: center;
  display: inline-flex;
  padding-right: var(--salt-spacing-100);
  column-gap: var(--salt-spacing-100);
}

/* Style applied to end adornments */
.saltInput-endAdornmentContainer {
  align-items: center;
  display: inline-flex;
  padding-left: var(--salt-spacing-100);
  column-gap: var(--salt-spacing-100);
}

.saltInput-readOnly .saltInput-startAdornmentContainer {
  margin-left: var(--salt-spacing-50);
}

.saltInput-startAdornmentContainer .saltButton ~ .saltButton {
  margin-left: calc(-1 * var(--salt-spacing-50));
}

.saltInput-endAdornmentContainer .saltButton ~ .saltButton {
  margin-left: calc(-1 * var(--salt-spacing-50));
}

.saltInput-startAdornmentContainer .saltButton:first-child {
  margin-left: calc(var(--salt-spacing-50) * -1);
}

.saltInput-endAdornmentContainer .saltButton:last-child {
  margin-right: calc(var(--salt-spacing-50) * -1);
}

.saltInput-startAdornmentContainer > .saltButton,
.saltInput-endAdornmentContainer > .saltButton {
  --saltButton-padding: calc(var(--salt-spacing-50) - var(--button-borderWidth));
  --saltButton-height: calc(var(--salt-size-base) - var(--salt-spacing-100));
  --saltButton-borderRadius: var(--salt-palette-corner-weaker);
}

/* Style applied to inner input component */
.saltInput-input {
  background: none;
  border: none;
  box-sizing: content-box;
  color: inherit;
  cursor: inherit;
  display: block;
  flex: 1;
  font: inherit;
  height: 100%;
  letter-spacing: var(--saltInput-letterSpacing, var(--salt-text-letterSpacing));
  margin: 0;
  min-width: 0;
  overflow: hidden;
  padding: 0;
  text-align: var(--input-textAlign, left);
  width: 100%;
}

/* Reset in the  class */
.saltInput-input:focus {
  outline: none;
}

/* Style applied to placeholder text */
.saltInput-input::placeholder {
  color: var(--salt-content-secondary-foreground);
  font-weight: var(--salt-text-fontWeight-lighter);
}

/* Style applied to selected input if \`disabled={true}\` */
.saltInput-disabled .saltInput-input::selection {
  background: none;
}
`;const k=R("saltInput");function it(e){return e==null||e===""||Array.isArray(e)&&e.length===0}const Kn=o.forwardRef(function(t,n){const{className:r,props:l}=st("saltInput",t),{"aria-activedescendant":i,"aria-expanded":d,"aria-owns":c,disabled:s,emptyReadOnlyMarker:b="—",endAdornment:u,id:h,inputProps:g={},inputRef:f,name:C,placeholder:w,readOnly:x,role:A,startAdornment:p,style:V,textAlign:M="left",value:W,defaultValue:y=W===void 0?"":void 0,validationStatus:H,variant:S="primary",bordered:$=!1,...E}=l,N=T();j({testId:"salt-input",css:Ln,window:N});const{a11yProps:{"aria-describedby":F,"aria-labelledby":K}={},disabled:O,readOnly:G,necessity:Z,validationStatus:ht}=vt(),gt={"aria-activedescendant":i,"aria-expanded":d,"aria-owns":c},L=s||O,U=x||G,_=ht??H,[ft,Y]=o.useState(!1),pt=U&&it(W),xt=U&&it(y),mt=W===void 0?void 0:pt?b:W,yt=xt?b:y,{"aria-describedby":kt,"aria-labelledby":Ct,onBlur:J,onChange:X,onFocus:tt,required:wt,...It}=g,St=Z?["required","asterisk"].includes(Z):wt,[Bt,zt]=ct({controlled:mt,default:yt,name:"Input",state:"value"}),Wt=D=>{const At=D.target.value;zt(At),X?.(D)},Tt=D=>{J?.(D),Y(!1)},jt=D=>{tt?.(D),Y(!0)},Rt={"--input-textAlign":M,...V};return a.jsxs("div",{className:m(k(),k(S),{[k("focused")]:!L&&ft,[k("disabled")]:L,[k("readOnly")]:U,[k(_||"")]:_,[k("bordered")]:$},r),ref:n,style:Rt,...E,children:[p&&a.jsx("div",{className:k("startAdornmentContainer"),children:p}),a.jsx("input",{"aria-describedby":m(F,kt)||void 0,"aria-labelledby":m(K,Ct)||void 0,className:m(k("input"),g?.className),disabled:L,id:h,name:C,readOnly:U,ref:f,role:A,tabIndex:L?-1:0,onBlur:Tt,onChange:Wt,onFocus:L?void 0:jt,placeholder:w,value:Bt,...gt,...It,required:St}),!L&&_&&a.jsx(Nn,{status:_}),u&&a.jsx("div",{className:k("endAdornmentContainer"),children:u}),a.jsx("div",{className:k("activationIndicator")})]})});var Dn=`.saltSwitch {
  display: flex;
  width: fit-content;
  gap: var(--salt-spacing-100);
  position: relative;
  cursor: var(--salt-cursor-hover);
  color: var(--salt-content-primary-foreground);

  font-family: var(--salt-text-fontFamily);
  font-size: var(--salt-text-fontSize);
  font-weight: var(--salt-text-fontWeight);
  line-height: var(--salt-text-lineHeight);
  letter-spacing: var(--salt-text-letterSpacing);
}

.saltSwitch-disabled {
  color: var(--salt-content-primary-foreground);

  cursor: var(--salt-cursor-disabled);
  opacity: 0.4;
}

.saltSwitch-track {
  border: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) var(--salt-selectable-borderColor);
  --saltIcon-size: 100%;
  border-radius: var(--salt-palette-corner-weak, 0);
  display: flex;
  flex-shrink: 0;
  height: calc(var(--salt-size-base) - var(--salt-spacing-100));
  width: calc((var(--salt-size-selectable) + var(--salt-spacing-25) + var(--salt-size-fixed-100)) * 2);
  align-items: center;
  color: var(--salt-selectable-foreground);
  background: var(--salt-container-primary-background);
  box-sizing: border-box;
}

.saltSwitch-label {
  padding-top: var(--salt-spacing-25);
}

/* Styles applied to the icon component if focused */
.saltSwitch-input:focus-visible + .saltSwitch-track {
  outline-offset: var(--salt-focused-outlineOffset);
  outline: var(--salt-focused-outline);
  border-color: var(--salt-selectable-borderColor-hover);
  color: var(--salt-selectable-foreground-hover);
}

.saltSwitch:hover .saltSwitch-track {
  border-color: var(--salt-selectable-borderColor-hover);
  color: var(--salt-selectable-foreground-hover);
}

.saltSwitch-checked .saltSwitch-track,
.saltSwitch-checked:hover .saltSwitch-track {
  border-color: var(--salt-selectable-borderColor-selected);
  color: var(--salt-selectable-foreground-selected);
}

.saltSwitch-disabled .saltSwitch-track,
.saltSwitch-disabled:hover .saltSwitch-track {
  border-color: var(--salt-selectable-borderColor);
  color: var(--salt-selectable-foreground);
  background: var(--salt-container-primary-background);
}

.saltSwitch-checked.saltSwitch-disabled .saltSwitch-track,
.saltSwitch-checked.saltSwitch-disabled:hover .saltSwitch-track {
  border-color: var(--salt-selectable-borderColor-selected);
  color: var(--salt-selectable-foreground-selected);
}

.saltSwitch-thumb {
  display: flex;
  aspect-ratio: 1;
  height: var(--salt-size-selectable);
  background: currentColor;
  margin: var(--salt-spacing-25);
  border: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) var(--salt-selectable-borderColor);
  box-sizing: border-box;
  border-radius: var(--salt-palette-corner-weaker, 0);
}

.saltSwitch-input:focus-visible + .saltSwitch-track .saltSwitch-thumb,
.saltSwitch:hover .saltSwitch-thumb {
  border-color: var(--salt-selectable-borderColor-hover);
  transition: transform var(--salt-duration-perceptible) ease-in-out;
}

.saltSwitch-checked .saltSwitch-thumb,
.saltSwitch-checked:hover .saltSwitch-thumb {
  background: transparent;
  border-color: var(--salt-selectable-borderColor-selected);
  transform: translateX(100%);
}

.saltSwitch-disabled .saltSwitch-thumb,
.saltSwitch-disabled:hover .saltSwitch-thumb {
  border: 0;
}

/* Styles applied to input element */
.saltSwitch-input {
  cursor: inherit;
  left: 0;
  margin: 0;
  opacity: 0;
  padding: 0;
  position: absolute;
  top: 0;
  z-index: var(--salt-zIndex-default);
  height: calc(var(--salt-size-base) - var(--salt-spacing-100));
  width: calc((var(--salt-size-selectable) + var(--salt-spacing-25) + var(--salt-size-fixed-100)) * 2);
}

.saltSwitch-readOnly {
  cursor: var(--salt-cursor-text);
}

.saltSwitch-readOnly .saltSwitch-track,
.saltSwitch-readOnly:hover .saltSwitch-track {
  border-color: var(--salt-selectable-borderColor-readonly);
  color: var(--salt-content-primary-foreground);
}

.saltSwitch-readOnly:hover .saltSwitch-thumb {
  border-color: var(--salt-selectable-borderColor-readonly);
}

.saltSwitch-readOnly .saltSwitch-thumb,
.saltSwitch-readOnly.saltSwitch-checked .saltSwitch-thumb {
  background: var(--salt-container-primary-background);
  border: var(--salt-size-fixed-100) var(--salt-borderStyle-dashed) var(--salt-selectable-borderColor-readonly);
}

.saltSwitch-readOnly .saltSwitch-input:focus-visible + .saltSwitch-track,
.saltSwitch-readOnly .saltSwitch-input:focus-visible + .saltSwitch-track .saltSwitch-thumb {
  border-color: var(--salt-selectable-borderColor-readonly);
  color: var(--salt-content-primary-foreground);
}

@media (prefers-reduced-motion) {
  .saltSwitch-input:focus-visible + .saltSwitch-track .saltSwitch-thumb,
  .saltSwitch:hover .saltSwitch-thumb {
    transition: none;
  }
}

.salt-density-high .saltSwitch-thumb {
  border: 0;
}

.salt-density-high .saltSwitch-readOnly .saltSwitch-thumb {
  border: var(--salt-size-fixed-100) var(--salt-borderStyle-dashed) var(--salt-selectable-borderColor-readonly);
}

/* Styles applied when switch is inside a form field with label left or right, ensuring alignment with base / input height */
.saltFormField-labelRight .saltSwitch,
.saltFormField-labelLeft .saltSwitch {
  padding-top: var(--salt-spacing-50);
  padding-bottom: var(--salt-spacing-50);
}
`;const I=R("saltSwitch"),Gn=o.forwardRef(function(t,n){const{checked:r,className:l,defaultChecked:i,disabled:d,inputProps:c={},label:s,name:b,onBlur:u,onChange:h,onFocus:g,value:f,readOnly:C,...w}=t,x=T();j({testId:"salt-switch",css:Dn,window:x});const{"aria-describedby":A,"aria-labelledby":p,className:V,onChange:M,...W}=c,[y,H]=ct({controlled:r,default:!!i,name:"Switch",state:"checked"}),{a11yProps:S,disabled:$,readOnly:E}=vt(),N=$||d,F=E||C,K=O=>{if(O.nativeEvent.defaultPrevented||F)return;const G=O.target.checked;H(G),h?.(O),M?.(O)};return a.jsxs("label",{className:m(I(),{[I("disabled")]:N,[I("checked")]:y,[I("readOnly")]:F},l),ref:n,...w,children:[a.jsx("input",{"aria-readonly":F||void 0,"aria-describedby":m(S?.["aria-describedby"],A)||void 0,"aria-labelledby":m(S?.["aria-labelledby"],p)||void 0,name:b,value:f,checked:y,className:m(I("input"),V),defaultChecked:i,disabled:N,onBlur:u,onChange:K,onFocus:g,type:"checkbox",role:"switch",...W}),a.jsx("span",{className:I("track"),children:a.jsxs("span",{className:I("thumb"),children:[y&&!F&&a.jsx(ut,{"aria-hidden":!0,className:I("icon")}),y&&F&&a.jsx(dt,{"aria-hidden":!0,className:I("icon")})]})}),s&&a.jsx("span",{className:I("label"),children:s})]})});export{en as A,$n as B,Qt as C,$t as D,Jt as E,Xt as F,ln as G,sn as H,Kn as I,at as J,cn as K,an as L,dn as M,un as N,on as O,rn as P,vn as Q,qt as R,Gn as S,_n as T,bn as U,Rn as V,hn as W,Fn as X,Tn as a,vt as b,qn as c,Un as d,Q as e,dt as f,et as g,v as h,yn as i,mn as j,Cn as k,Vn as l,R as m,st as n,Nn as o,Ut as p,_t as q,En as r,ut as s,Kt as t,ct as u,Gt as v,Zt as w,Yt as x,tn as y,nn as z};
