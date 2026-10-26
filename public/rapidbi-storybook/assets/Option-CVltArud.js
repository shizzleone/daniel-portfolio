import{r as c,p as bo,j as A,f as tt,u as Ts,q as As,s as Ps,l as _e,m as Be,g as be,o as Mt,e as xn}from"./iframe--_k5KNLb.js";import{j as yn,i as Ms,D as Ls,m as Pe,c as je,u as er,l as Fs,B as Ns,T as At,n as _s,b as Bs,o as Ws,d as $s}from"./Switch-XczNmwRq.js";import{r as wo,s as zs}from"./index-C1N_ynMI.js";function Rn(){return typeof window<"u"}function lt(e){return dr(e)?(e.nodeName||"").toLowerCase():"#document"}function Oe(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function qe(e){var t;return(t=(dr(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function dr(e){return Rn()?e instanceof Node||e instanceof Oe(e).Node:!1}function ue(e){return Rn()?e instanceof Element||e instanceof Oe(e).Element:!1}function he(e){return Rn()?e instanceof HTMLElement||e instanceof Oe(e).HTMLElement:!1}function Vt(e){return!Rn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Oe(e).ShadowRoot}function Cn(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Ae(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&o!=="inline"&&o!=="contents"}function js(e){return/^(table|td|th)$/.test(lt(e))}function Sn(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}const Hs=/transform|translate|scale|rotate|perspective|filter/,Vs=/paint|layout|strict|content/,ft=e=>!!e&&e!=="none";let Nn;function fr(e){const t=ue(e)?Ae(e):e;return ft(t.transform)||ft(t.translate)||ft(t.scale)||ft(t.rotate)||ft(t.perspective)||!In()&&(ft(t.backdropFilter)||ft(t.filter))||Hs.test(t.willChange||"")||Vs.test(t.contain||"")}function Ks(e){let t=ot(e);for(;he(t)&&!nt(t);){if(fr(t))return t;if(Sn(t))return null;t=ot(t)}return null}function In(){return Nn==null&&(Nn=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Nn}function nt(e){return/^(html|body|#document)$/.test(lt(e))}function Ae(e){return Oe(e).getComputedStyle(e)}function En(e){return ue(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ot(e){if(lt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Vt(e)&&e.host||qe(e);return Vt(t)?t.host:t}function xo(e){const t=ot(e);return nt(t)?(e.ownerDocument||e).body:he(t)&&Cn(t)?t:xo(t)}function rt(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=xo(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),s=Oe(o);if(i){const a=tr(s);return t.concat(s,s.visualViewport||[],Cn(o)?o:[],a&&n?rt(a):[])}else return t.concat(o,rt(o,[],n))}function tr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}const st=Math.min,Ke=Math.max,cn=Math.round,Ot=Math.floor,Ue=e=>({x:e,y:e}),Us={left:"right",right:"left",bottom:"top",top:"bottom"};function yo(e,t,n){return Ke(e,st(t,n))}function it(e,t){return typeof e=="function"?e(t):e}function at(e){return e.split("-")[0]}function Lt(e){return e.split("-")[1]}function gr(e){return e==="x"?"y":"x"}function pr(e){return e==="y"?"height":"width"}function ze(e){const t=e[0];return t==="t"||t==="b"?"y":"x"}function mr(e){return gr(ze(e))}function qs(e,t,n){n===void 0&&(n=!1);const r=Lt(e),o=mr(e),i=pr(o);let s=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=un(s)),[s,un(s)]}function Ys(e){const t=un(e);return[nr(e),t,nr(t)]}function nr(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}const Mr=["left","right"],Lr=["right","left"],Gs=["top","bottom"],Xs=["bottom","top"];function Zs(e,t,n){switch(e){case"top":case"bottom":return n?t?Lr:Mr:t?Mr:Lr;case"left":case"right":return t?Gs:Xs;default:return[]}}function Js(e,t,n,r){const o=Lt(e);let i=Zs(at(e),n==="start",r);return o&&(i=i.map(s=>s+"-"+o),t&&(i=i.concat(i.map(nr)))),i}function un(e){const t=at(e);return Us[t]+e.slice(t.length)}function Qs(e){var t,n,r,o;return{top:(t=e.top)!=null?t:0,right:(n=e.right)!=null?n:0,bottom:(r=e.bottom)!=null?r:0,left:(o=e.left)!=null?o:0}}function Ro(e){return typeof e!="number"?Qs(e):{top:e,right:e,bottom:e,left:e}}function dn(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}var ei=["input:not([inert]):not([inert] *)","select:not([inert]):not([inert] *)","textarea:not([inert]):not([inert] *)","a[href]:not([inert]):not([inert] *)","area[href]:not([inert]):not([inert] *)","button:not([inert]):not([inert] *)","[tabindex]:not(slot):not([inert]):not([inert] *)","audio[controls]:not([inert]):not([inert] *)","video[controls]:not([inert]):not([inert] *)",'[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)',"details>summary:first-of-type:not([inert]):not([inert] *)","details:not([inert]):not([inert] *)"],fn=ei.join(","),Co=typeof Element>"u",Pt=Co?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,gn=!Co&&Element.prototype.getRootNode?function(e){return e==null||e.getRootNode==null?void 0:e.getRootNode()}:function(e){return e?.ownerDocument},pn=function(t,n){n===void 0&&(n=!0);var r=t==null||t.getAttribute==null?void 0:t.getAttribute("inert"),o=r===""||r==="true",i=o||n&&t&&(typeof t.closest=="function"?t.closest("[inert]"):pn(t.parentNode));return i},ti=function(t){var n,r=t==null||t.getAttribute==null||(n=t.getAttribute("contenteditable"))==null?void 0:n.toLowerCase();return r===""||r==="true"||r==="plaintext-only"},So=function(t,n,r){if(pn(t))return[];var o=Array.prototype.slice.apply(t.querySelectorAll(fn));return n&&Pt.call(t,fn)&&o.unshift(t),o=o.filter(r),o},mn=function(t,n,r){for(var o=[],i=Array.from(t);i.length;){var s=i.shift();if(!pn(s,!1))if(s.tagName==="SLOT"){var a=s.assignedElements(),f=a.length?a:s.children,l=mn(f,!0,r);r.flatten?o.push.apply(o,l):o.push({scopeParent:s,candidates:l})}else{var d=Pt.call(s,fn);d&&r.filter(s)&&(n||!t.includes(s))&&o.push(s);var p=s.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(s),u=!pn(p,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(s));if(p&&u){var g=mn(p===!0?s.children:p.children,!0,r);r.flatten?o.push.apply(o,g):o.push({scopeParent:s,candidates:g})}else i.unshift.apply(i,s.children)}}return o},Io=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},Eo=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||ti(t))&&!Io(t)?0:t.tabIndex},ni=function(t,n){var r=Eo(t);return r<0&&n&&!Io(t)?0:r},ri=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},Oo=function(t){return t.tagName==="INPUT"},oi=function(t){return Oo(t)&&t.type==="hidden"},si=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(r){return r.tagName==="SUMMARY"});return n},ii=function(t,n){for(var r=0;r<t.length;r++)if(t[r].checked&&t[r].form===n)return t[r]},ai=function(t){if(!t.name)return!0;var n=t.form||gn(t),r=function(a){return n.querySelectorAll('input[type="radio"][name="'+a+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=r(window.CSS.escape(t.name));else try{o=r(t.name)}catch(s){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",s.message),!1}var i=ii(o,t.form);return!i||i===t},li=function(t){return Oo(t)&&t.type==="radio"},ci=function(t){return li(t)&&!ai(t)},ui=function(t){var n,r=t&&gn(t),o=(n=r)==null?void 0:n.host,i=!1;if(r&&r!==t){var s,a;for(i=!!((s=o)!=null&&(s=s.ownerDocument)!=null&&s.contains(o)||t!=null&&(a=t.ownerDocument)!=null&&a.contains(t));!i&&o;){var f,l;r=gn(o),o=(f=r)==null?void 0:f.host,i=!!((l=o)!=null&&(l=l.ownerDocument)!=null&&l.contains(o))}}return i},Fr=function(t){var n=t.getBoundingClientRect(),r=n.width,o=n.height;return r===0&&o===0},di=function(t,n){var r=n.displayCheck,o=n.getShadowRoot;if(r==="full-native"&&"checkVisibility"in t){var i=t.checkVisibility({checkOpacity:!1,opacityProperty:!1,contentVisibilityAuto:!0,visibilityProperty:!0,checkVisibilityCSS:!0});return!i}var s=getComputedStyle(t),a=s.visibility;if(a==="hidden"||a==="collapse")return!0;var f=Pt.call(t,"details>summary:first-of-type"),l=f?t.parentElement:t;if(Pt.call(l,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="full-native"||r==="legacy-full"){if(typeof o=="function"){for(var d=t;t;){var p=t.parentElement,u=gn(t);if(p&&!p.shadowRoot&&o(p)===!0)return Fr(t);t.assignedSlot?t=t.assignedSlot:!p&&u!==t.ownerDocument?t=u.host:t=p}t=d}if(ui(t))return!t.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return Fr(t);return!1},fi=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var o=n.children.item(r);if(o.tagName==="LEGEND")return Pt.call(n,"fieldset[disabled] *")?!0:!o.contains(t)}return!0}n=n.parentElement}return!1},rr=function(t,n){return!(n.disabled||oi(n)||di(n,t)||si(n)||fi(n))},or=function(t,n){return!(ci(n)||Eo(n)<0||!rr(t,n))},gi=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},Do=function(t){var n=[],r=[];return t.forEach(function(o,i){var s=!!o.scopeParent,a=s?o.scopeParent:o,f=ni(a,s),l=s?Do(o.candidates):a;f===0?s?n.push.apply(n,l):n.push(a):r.push({documentOrder:i,tabIndex:f,item:o,isScope:s,content:l})}),r.sort(ri).reduce(function(o,i){return i.isScope?o.push.apply(o,i.content):o.push(i.content),o},[]).concat(n)},On=function(t,n){n=n||{};var r;return n.getShadowRoot?r=mn([t],n.includeContainer,{filter:or.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:gi}):r=So(t,n.includeContainer,or.bind(null,n)),Do(r)},pi=function(t,n){n=n||{};var r;return n.getShadowRoot?r=mn([t],n.includeContainer,{filter:rr.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):r=So(t,n.includeContainer,rr.bind(null,n)),r},ko=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return Pt.call(t,fn)===!1?!1:or(n,t)};function To(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function Ao(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:n,version:r}=t;return n+"/"+r}).join(" "):navigator.userAgent}function Po(){return/apple/i.test(navigator.vendor)}function sr(){const e=/android/i;return e.test(To())||e.test(Ao())}function mi(){return To().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function Mo(){return Ao().includes("jsdom/")}const Nr="data-floating-ui-focusable",hi="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])",_n="ArrowLeft",Bn="ArrowRight",vi="ArrowUp",bi="ArrowDown";function We(e){let t=e.activeElement;for(;((n=t)==null||(n=n.shadowRoot)==null?void 0:n.activeElement)!=null;){var n;t=t.shadowRoot.activeElement}return t}function we(e,t){if(!e||!t)return!1;const n=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&Vt(n)){let r=t;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function Ve(e){return"composedPath"in e?e.composedPath()[0]:e.target}function Wn(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}function wi(e){return e.matches("html,body")}function xe(e){return e?.ownerDocument||document}function hr(e){return he(e)&&e.matches(hi)}function ir(e){return e?e.getAttribute("role")==="combobox"&&hr(e):!1}function xi(e){if(!e||Mo())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function hn(e){return e?e.hasAttribute(Nr)?e:e.querySelector("["+Nr+"]")||e:null}function bt(e,t,n){return n===void 0&&(n=!0),e.filter(o=>{var i;return o.parentId===t&&(!n||((i=o.context)==null?void 0:i.open))}).flatMap(o=>[o,...bt(e,o.id,n)])}function yi(e,t){let n,r=-1;function o(i,s){s>r&&(n=i,r=s),bt(e,i).forEach(f=>{o(f.id,s+1)})}return o(t,0),e.find(i=>i.id===n)}function _r(e,t){var n;let r=[],o=(n=e.find(i=>i.id===t))==null?void 0:n.parentId;for(;o;){const i=e.find(s=>s.id===o);o=i?.parentId,i&&(r=r.concat(i))}return r}function Ee(e){e.preventDefault(),e.stopPropagation()}function Ri(e){return"nativeEvent"in e}function Lo(e){return e.mozInputSource===0&&e.isTrusted?!0:sr()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function Fo(e){return Mo()?!1:!sr()&&e.width===0&&e.height===0||sr()&&e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0&&e.pointerType==="touch"}function Kt(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}var Ci=typeof document<"u",Si=function(){},ce=Ci?c.useLayoutEffect:Si;const Ii={...bo};function Te(e){const t=c.useRef(e);return ce(()=>{t.current=e}),t}const Ei=Ii.useInsertionEffect,Oi=Ei||(e=>e());function ye(e){const t=c.useRef(()=>{});return Oi(()=>{t.current=e}),c.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current==null?void 0:t.current(...r)},[])}function en(e,t,n){return Math.floor(e/t)!==n}function jt(e,t){return t<0||t>=e.current.length}function $n(e,t){return Re(e,{disabledIndices:t})}function Br(e,t){return Re(e,{decrement:!0,startingIndex:e.current.length,disabledIndices:t})}function Re(e,t){let{startingIndex:n=-1,decrement:r=!1,disabledIndices:o,amount:i=1}=t===void 0?{}:t,s=n;do s+=r?-i:i;while(s>=0&&s<=e.current.length-1&&an(e,s,o));return s}function Di(e,t){let{event:n,orientation:r,loop:o,rtl:i,cols:s,disabledIndices:a,minIndex:f,maxIndex:l,prevIndex:d,stopEvent:p=!1}=t,u=d;if(n.key===vi){if(p&&Ee(n),d===-1)u=l;else if(u=Re(e,{startingIndex:u,amount:s,decrement:!0,disabledIndices:a}),o&&(d-s<f||u<0)){const g=d%s,h=l%s,m=l-(h-g);h===g?u=l:u=h>g?m:m-s}jt(e,u)&&(u=d)}if(n.key===bi&&(p&&Ee(n),d===-1?u=f:(u=Re(e,{startingIndex:d,amount:s,disabledIndices:a}),o&&d+s>l&&(u=Re(e,{startingIndex:d%s-s,amount:s,disabledIndices:a}))),jt(e,u)&&(u=d)),r==="both"){const g=Ot(d/s);n.key===(i?_n:Bn)&&(p&&Ee(n),d%s!==s-1?(u=Re(e,{startingIndex:d,disabledIndices:a}),o&&en(u,s,g)&&(u=Re(e,{startingIndex:d-d%s-1,disabledIndices:a}))):o&&(u=Re(e,{startingIndex:d-d%s-1,disabledIndices:a})),en(u,s,g)&&(u=d)),n.key===(i?Bn:_n)&&(p&&Ee(n),d%s!==0?(u=Re(e,{startingIndex:d,decrement:!0,disabledIndices:a}),o&&en(u,s,g)&&(u=Re(e,{startingIndex:d+(s-d%s),decrement:!0,disabledIndices:a}))):o&&(u=Re(e,{startingIndex:d+(s-d%s),decrement:!0,disabledIndices:a})),en(u,s,g)&&(u=d));const h=Ot(l/s)===g;jt(e,u)&&(o&&h?u=n.key===(i?Bn:_n)?l:Re(e,{startingIndex:d-d%s-1,disabledIndices:a}):u=d)}return u}function ki(e,t,n){const r=[];let o=0;return e.forEach((i,s)=>{let{width:a,height:f}=i,l=!1;for(n&&(o=0);!l;){const d=[];for(let p=0;p<a;p++)for(let u=0;u<f;u++)d.push(o+p+u*t);o%t+a<=t&&d.every(p=>r[p]==null)?(d.forEach(p=>{r[p]=s}),l=!0):o++}}),[...r]}function Ti(e,t,n,r,o){if(e===-1)return-1;const i=n.indexOf(e),s=t[e];switch(o){case"tl":return i;case"tr":return s?i+s.width-1:i;case"bl":return s?i+(s.height-1)*r:i;case"br":return n.lastIndexOf(e)}}function Ai(e,t){return t.flatMap((n,r)=>e.includes(n)?[r]:[])}function an(e,t,n){if(typeof n=="function")return n(t);if(n)return n.includes(t);const r=e.current[t];return r==null||r.hasAttribute("disabled")||r.getAttribute("aria-disabled")==="true"}const Ut=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function No(e,t){const n=On(e,Ut()),r=n.length;if(r===0)return;const o=We(xe(e)),i=n.indexOf(o),s=i===-1?t===1?0:r-1:i+t;return n[s]}function _o(e){return No(xe(e).body,1)||e}function Bo(e){return No(xe(e).body,-1)||e}function Ht(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!we(n,r)}function Pi(e){On(e,Ut()).forEach(n=>{n.dataset.tabindex=n.getAttribute("tabindex")||"",n.setAttribute("tabindex","-1")})}function Wr(e){e.querySelectorAll("[data-tabindex]").forEach(n=>{const r=n.dataset.tabindex;delete n.dataset.tabindex,r?n.setAttribute("tabindex",r):n.removeAttribute("tabindex")})}function $r(e,t,n){let{reference:r,floating:o}=e;const i=ze(t),s=mr(t),a=pr(s),f=at(t),l=i==="y",d=r.x+r.width/2-o.width/2,p=r.y+r.height/2-o.height/2,u=r[a]/2-o[a]/2;let g;switch(f){case"top":g={x:d,y:r.y-o.height};break;case"bottom":g={x:d,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:p};break;case"left":g={x:r.x-o.width,y:p};break;default:g={x:r.x,y:r.y}}const h=Lt(t);return h&&(g[s]+=u*(h==="end"?1:-1)*(n&&l?-1:1)),g}async function Mi(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:i,rects:s,elements:a,strategy:f}=e,{boundary:l="clippingAncestors",rootBoundary:d="viewport",elementContext:p="floating",altBoundary:u=!1,padding:g=0}=it(t,e),h=Ro(g),w=a[u?p==="floating"?"reference":"floating":p],x=dn(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(w)))==null||n?w:w.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:l,rootBoundary:d,strategy:f})),y=p==="floating"?{x:r,y:o,width:s.floating.width,height:s.floating.height}:s.reference,S=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),C=await(i.isElement==null?void 0:i.isElement(S))&&await(i.getScale==null?void 0:i.getScale(S))||{x:1,y:1},E=dn(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:y,offsetParent:S,strategy:f}):y);return{top:(x.top-E.top+h.top)/C.y,bottom:(E.bottom-x.bottom+h.bottom)/C.y,left:(x.left-E.left+h.left)/C.x,right:(E.right-x.right+h.right)/C.x}}const Li=50,Fi=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:s}=n,a=s.detectOverflow?s:{...s,detectOverflow:Mi},f=await(s.isRTL==null?void 0:s.isRTL(t));let l=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:d,y:p}=$r(l,r,f),u=r,g=0;const h={};for(let m=0;m<i.length;m++){const w=i[m];if(!w)continue;const{name:x,fn:y}=w,{x:S,y:C,data:E,reset:I}=await y({x:d,y:p,initialPlacement:r,placement:u,strategy:o,middlewareData:h,rects:l,platform:a,elements:{reference:e,floating:t}});d=S??d,p=C??p,h[x]={...h[x],...E},I&&g<Li&&(g++,typeof I=="object"&&(I.placement&&(u=I.placement),I.rects&&(l=I.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):I.rects),{x:d,y:p}=$r(l,u,f)),m=-1)}return{x:d,y:p,placement:u,strategy:o,middlewareData:h}},Ni=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:i,platform:s,elements:a,middlewareData:f}=t,{element:l,padding:d=0}=it(e,t)||{};if(l==null)return{};const p=Ro(d),u={x:n,y:r},g=mr(o),h=pr(g),m=await s.getDimensions(l),w=g==="y",x=w?"top":"left",y=w?"bottom":"right",S=w?"clientHeight":"clientWidth",C=i.reference[h]+i.reference[g]-u[g]-i.floating[h],E=u[g]-i.reference[g],I=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let O=I?I[S]:0;(!O||!await(s.isElement==null?void 0:s.isElement(I)))&&(O=a.floating[S]||i.floating[h]);const P=C/2-E/2,q=O/2-m[h]/2-1,N=st(p[x],q),z=st(p[y],q),Y=O-m[h]-z,M=O/2-m[h]/2+P,v=yo(N,M,Y),R=!f.arrow&&Lt(o)!=null&&M!==v&&i.reference[h]/2-(M<N?N:z)-m[h]/2<0,k=R?M<N?M-N:M-Y:0;return{[g]:u[g]+k,data:{[g]:v,centerOffset:M-v-k,...R&&{alignmentOffset:k}},reset:R}}}),_i=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:s,initialPlacement:a,platform:f,elements:l}=t,{mainAxis:d=!0,crossAxis:p=!0,fallbackPlacements:u,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:m=!0,...w}=it(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const x=at(o),y=ze(a),S=at(a)===a,C=await(f.isRTL==null?void 0:f.isRTL(l.floating)),E=u||(S||!m?[un(a)]:Ys(a)),I=h!=="none";!u&&I&&E.push(...Js(a,m,h,C));const O=[a,...E],P=await f.detectOverflow(t,w),q=[];let N=((r=i.flip)==null?void 0:r.overflows)||[];if(d&&q.push(P[x]),p){const v=qs(o,s,C);q.push(P[v[0]],P[v[1]])}if(N=[...N,{placement:o,overflows:q}],!q.every(v=>v<=0)){var z,Y;const v=(((z=i.flip)==null?void 0:z.index)||0)+1,R=O[v];if(R&&(!(p==="alignment"?y!==ze(R):!1)||N.every(b=>ze(b.placement)===y?b.overflows[0]>0:!0)))return{data:{index:v,overflows:N},reset:{placement:R}};let k=(Y=N.filter(D=>D.overflows[0]<=0).sort((D,b)=>D.overflows[1]-b.overflows[1])[0])==null?void 0:Y.placement;if(!k)switch(g){case"bestFit":{var M;const D=(M=N.filter(b=>{if(I){const T=ze(b.placement);return T===y||T==="y"}return!0}).map(b=>[b.placement,b.overflows.filter(T=>T>0).reduce((T,B)=>T+B,0)]).sort((b,T)=>b[1]-T[1])[0])==null?void 0:M[0];D&&(k=D);break}case"initialPlacement":k=a;break}if(o!==k)return{reset:{placement:k}}}return{}}}},Wo=new Set(["left","top"]);async function Bi(e,t){const{placement:n,platform:r,elements:o}=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),s=at(n),a=Lt(n),f=ze(n)==="y",l=Wo.has(s)?-1:1,d=i&&f?-1:1,p=it(t,e);let{mainAxis:u,crossAxis:g,alignmentAxis:h}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return a&&typeof h=="number"&&(g=a==="end"?h*-1:h),f?{x:g*d,y:u*l}:{x:u*l,y:g*d}}const Wi=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:s,middlewareData:a}=t,f=await Bi(t,e);return s===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:o+f.x,y:i+f.y,data:{...f,placement:s}}}}},$i=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o,platform:i}=t,{mainAxis:s=!0,crossAxis:a=!1,limiter:f={fn:y=>{let{x:S,y:C}=y;return{x:S,y:C}}},...l}=it(e,t),d={x:n,y:r},p=await i.detectOverflow(t,l),u=ze(o),g=gr(u);let h=d[g],m=d[u];const w=(y,S)=>yo(S+p[y==="y"?"top":"left"],S,S-p[y==="y"?"bottom":"right"]);s&&(h=w(g,h)),a&&(m=w(u,m));const x=f.fn({...t,[g]:h,[u]:m});return{...x,data:{x:x.x-n,y:x.y-r,enabled:{[g]:s,[u]:a}}}}}},zi=function(e){return e===void 0&&(e={}),{options:e,fn(t){var n,r;const{x:o,y:i,placement:s,rects:a,middlewareData:f}=t,{offset:l=0,mainAxis:d=!0,crossAxis:p=!0}=it(e,t),u={x:o,y:i},g=ze(s),h=gr(g);let m=u[h],w=u[g];const x=it(l,t),y=typeof x=="number"?{mainAxis:x,crossAxis:0}:{mainAxis:(n=x.mainAxis)!=null?n:0,crossAxis:(r=x.crossAxis)!=null?r:0};if(d){const E=h==="y"?"height":"width",I=a.reference[h]-a.floating[E]+y.mainAxis,O=a.reference[h]+a.reference[E]-y.mainAxis;m<I?m=I:m>O&&(m=O)}if(p){var S,C;const E=h==="y"?"width":"height",I=Wo.has(at(s)),O=a.reference[g]-a.floating[E]+(I&&((S=f.offset)==null?void 0:S[g])||0)+(I?0:y.crossAxis),P=a.reference[g]+a.reference[E]+(I?0:((C=f.offset)==null?void 0:C[g])||0)-(I?y.crossAxis:0);w<O?w=O:w>P&&(w=P)}return{[h]:m,[g]:w}}}},ji=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:s=()=>{},...a}=it(e,t),f=await o.detectOverflow(t,a),l=at(n),d=Lt(n),p=ze(n)==="y",{width:u,height:g}=r.floating;let h,m;l==="top"||l==="bottom"?(h=l,m=d===(await(o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(m=l,h=d==="end"?"top":"bottom");const w=g-f.top-f.bottom,x=u-f.left-f.right,y=st(g-f[h],w),S=st(u-f[m],x),C=t.middlewareData.shift,E=!C;let I=y,O=S;C!=null&&C.enabled.x&&(O=x),C!=null&&C.enabled.y&&(I=w),E&&!d&&(p?O=u-2*Ke(f.left,f.right):I=g-2*Ke(f.top,f.bottom)),await s({...t,availableWidth:O,availableHeight:I});const P=await o.getDimensions(i.floating);return u!==P.width||g!==P.height?{reset:{rects:!0}}:{}}}};function $o(e){const t=Ae(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=he(e),i=o?e.offsetWidth:n,s=o?e.offsetHeight:r,a=cn(n)!==i||cn(r)!==s;return a&&(n=i,r=s),{width:n,height:r,$:a}}function vr(e){return ue(e)?e:e.contextElement}function kt(e){const t=vr(e);if(!he(t))return Ue(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=$o(t);let s=(i?cn(n.width):n.width)/r,a=(i?cn(n.height):n.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const Hi=Ue(0);function zo(e){const t=Oe(e);return!In()||!t.visualViewport?Hi:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Vi(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===Oe(e)}function wt(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=vr(e);let s=Ue(1);t&&(r?ue(r)&&(s=kt(r)):s=kt(e));const a=Vi(i,n,r)?zo(i):Ue(0);let f=(o.left+a.x)/s.x,l=(o.top+a.y)/s.y,d=o.width/s.x,p=o.height/s.y;if(i&&r){const u=Oe(i),g=ue(r)?Oe(r):r;let h=u,m=tr(h);for(;m&&g!==h;){const w=kt(m),x=m.getBoundingClientRect(),y=Ae(m),S=x.left+(m.clientLeft+parseFloat(y.paddingLeft))*w.x,C=x.top+(m.clientTop+parseFloat(y.paddingTop))*w.y;f*=w.x,l*=w.y,d*=w.x,p*=w.y,f+=S,l+=C,h=Oe(m),m=tr(h)}}return dn({width:d,height:p,x:f,y:l})}function Dn(e,t){const n=En(e).scrollLeft;return t?t.left+n:wt(qe(e)).left+n}function jo(e,t){const n=e.getBoundingClientRect(),r=n.left+t.scrollLeft-Dn(e,n),o=n.top+t.scrollTop;return{x:r,y:o}}function Ki(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i=o==="fixed",s=qe(r),a=t?Sn(t.floating):!1;if(r===s||a&&i)return n;let f={scrollLeft:0,scrollTop:0},l=Ue(1);const d=Ue(0),p=he(r);if((p||!i)&&((lt(r)!=="body"||Cn(s))&&(f=En(r)),p)){const g=wt(r);l=kt(r),d.x=g.x+r.clientLeft,d.y=g.y+r.clientTop}const u=s&&!p&&!i?jo(s,f):Ue(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-f.scrollLeft*l.x+d.x+u.x,y:n.y*l.y-f.scrollTop*l.y+d.y+u.y}}function Ui(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function qi(e){const t=En(e),n=e.ownerDocument.body,r=Ke(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),o=Ke(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let i=-t.scrollLeft+Dn(e);const s=-t.scrollTop;return Ae(n).direction==="rtl"&&(i+=Ke(e.clientWidth,n.clientWidth)-r),{width:r,height:o,x:i,y:s}}const Yi=25;function Gi(e,t,n){n===void 0&&(n="viewport");const r=n==="layoutViewport",o=Oe(e),i=qe(e),s=o.visualViewport;let a=i.clientWidth,f=i.clientHeight,l=0,d=0;if(s){const u=!In()||t==="fixed";r?u||(l=-s.offsetLeft,d=-s.offsetTop):(a=s.width,f=s.height,u&&(l=s.offsetLeft,d=s.offsetTop))}if(Dn(i)<=0){const u=i.ownerDocument,g=u.body,h=getComputedStyle(g),m=u.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,w=Math.abs(i.clientWidth-g.clientWidth-m),x=getComputedStyle(i).scrollbarGutter==="stable both-edges"?w/2:w;x<=Yi&&(a-=x)}return{width:a,height:f,x:l,y:d}}function Xi(e,t){const n=wt(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=kt(e),s=e.clientWidth*i.x,a=e.clientHeight*i.y,f=o*i.x,l=r*i.y;return{width:s,height:a,x:f,y:l}}function zr(e,t,n){let r;if(t==="viewport"||t==="layoutViewport")r=Gi(e,n,t);else if(t==="document")r=qi(qe(e));else if(ue(t))r=Xi(t,n);else{const o=zo(e);r={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return dn(r)}function Zi(e,t){const n=t.get(e);if(n)return n;let r=rt(e,[],!1).filter(a=>ue(a)&&lt(a)!=="body"),o=null;const i=Ae(e).position==="fixed";let s=i?ot(e):e;for(;ue(s)&&!nt(s);){const a=Ae(s),f=fr(s),l=o?o.position:i?"fixed":"";!f&&(l==="fixed"||l==="absolute"&&a.position==="static")?r=r.filter(p=>p!==s):o=a,s=ot(s)}return t.set(e,r),r}function Ji(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const s=[...n==="clippingAncestors"?Sn(t)?[]:Zi(t,this._c):[].concat(n),r],a=zr(t,s[0],o);let f=a.top,l=a.right,d=a.bottom,p=a.left;for(let u=1;u<s.length;u++){const g=zr(t,s[u],o);f=Ke(g.top,f),l=st(g.right,l),d=st(g.bottom,d),p=Ke(g.left,p)}return{width:l-p,height:d-f,x:p,y:f}}function Qi(e){const{width:t,height:n}=$o(e);return{width:t,height:n}}function ea(e,t,n){const r=he(t),o=qe(t),i=n==="fixed",s=wt(e,!0,i,t);let a={scrollLeft:0,scrollTop:0};const f=Ue(0);if((r||!i)&&((lt(t)!=="body"||Cn(o))&&(a=En(t)),r)){const u=wt(t,!0,i,t);f.x=u.x+t.clientLeft,f.y=u.y+t.clientTop}!r&&o&&(f.x=Dn(o));const l=o&&!r&&!i?jo(o,a):Ue(0),d=s.left+a.scrollLeft-f.x-l.x,p=s.top+a.scrollTop-f.y-l.y;return{x:d,y:p,width:s.width,height:s.height}}function zn(e){return Ae(e).position==="static"}function jr(e,t){if(!he(e)||Ae(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return qe(e)===n&&(n=n.ownerDocument.body),n}function Ho(e,t){const n=Oe(e);if(Sn(e))return n;if(!he(e)){let o=ot(e);for(;o&&!nt(o);){if(ue(o)&&!zn(o))return o;o=ot(o)}return n}let r=jr(e,t);for(;r&&js(r)&&zn(r);)r=jr(r,t);return r&&nt(r)&&zn(r)&&!fr(r)?n:r||Ks(e)||n}const ta=async function(e){const t=this.getOffsetParent||Ho,n=this.getDimensions,r=await n(e.floating);return{reference:ea(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function na(e){return Ae(e).direction==="rtl"}const Vo={convertOffsetParentRelativeRectToViewportRelativeRect:Ki,getDocumentElement:qe,getClippingRect:Ji,getOffsetParent:Ho,getElementRects:ta,getClientRects:Ui,getDimensions:Qi,getScale:kt,isElement:ue,isRTL:na};function Ko(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ra(e,t,n){let r=null,o;const i=qe(e);function s(){var d;clearTimeout(o),(d=r)==null||d.disconnect(),r=null}function a(d,p){d===void 0&&(d=!1),p===void 0&&(p=1),s();const u=e.getBoundingClientRect(),{left:g,top:h,width:m,height:w}=u;if(d||t(),!m||!w)return;const x=Ot(h),y=Ot(i.clientWidth-(g+m)),S=Ot(i.clientHeight-(h+w)),C=Ot(g),I={rootMargin:-x+"px "+-y+"px "+-S+"px "+-C+"px",threshold:Ke(0,st(1,p))||1};let O=!0;function P(q){const N=q[0].intersectionRatio;if(!Ko(u,e.getBoundingClientRect()))return a();if(N!==p){if(!O)return a();N?a(!1,N):o=setTimeout(()=>{a(!1,1e-7)},1e3)}O=!1}try{r=new IntersectionObserver(P,{...I,root:i.ownerDocument})}catch{r=new IntersectionObserver(P,I)}r.observe(e)}const f=Oe(e),l=()=>a(n);return f.addEventListener("resize",l),a(!0),()=>{f.removeEventListener("resize",l),s()}}function oa(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:f=!1}=r,l=vr(e),d=o||i?[...l?rt(l):[],...t?rt(t):[]]:[];d.forEach(x=>{o&&x.addEventListener("scroll",n),i&&x.addEventListener("resize",n)});const p=l&&a?ra(l,n,i):null;let u=-1,g=null;s&&(g=new ResizeObserver(x=>{let[y]=x;y&&y.target===l&&g&&t&&(g.unobserve(t),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var S;(S=g)==null||S.observe(t)})),n()}),l&&!f&&g.observe(l),t&&g.observe(t));let h,m=f?wt(e):null;f&&w();function w(){const x=wt(e);m&&!Ko(m,x)&&n(),m=x,h=requestAnimationFrame(w)}return n(),()=>{var x;d.forEach(y=>{o&&y.removeEventListener("scroll",n),i&&y.removeEventListener("resize",n)}),p?.(),(x=g)==null||x.disconnect(),g=null,f&&cancelAnimationFrame(h)}}const sa=Wi,ia=$i,aa=_i,la=ji,Hr=Ni,ca=zi,ua=(e,t,n)=>{const r=new Map,o=n??{},i={...Vo,...o.platform,_c:r};return Fi(e,t,{...o,platform:i})};var da=typeof document<"u",fa=function(){},ln=da?c.useLayoutEffect:fa;function vn(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!vn(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(!(i==="_owner"&&e.$$typeof)&&!vn(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function Uo(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Vr(e,t){const n=Uo(e);return Math.round(t*n)/n}function jn(e){const t=c.useRef(e);return ln(()=>{t.current=e}),t}function ga(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:s}={},transform:a=!0,whileElementsMounted:f,open:l}=e,[d,p]=c.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[u,g]=c.useState(r);vn(u,r)||g(r);const[h,m]=c.useState(null),[w,x]=c.useState(null),y=c.useCallback(b=>{b!==I.current&&(I.current=b,m(b))},[]),S=c.useCallback(b=>{b!==O.current&&(O.current=b,x(b))},[]),C=i||h,E=s||w,I=c.useRef(null),O=c.useRef(null),P=c.useRef(d),q=f!=null,N=jn(f),z=jn(o),Y=jn(l),M=c.useCallback(()=>{if(!I.current||!O.current)return;const b={placement:t,strategy:n,middleware:u};z.current&&(b.platform=z.current),ua(I.current,O.current,b).then(T=>{const B={...T,isPositioned:Y.current!==!1};v.current&&!vn(P.current,B)&&(P.current=B,wo.flushSync(()=>{p(B)}))})},[u,t,n,z,Y]);ln(()=>{l===!1&&P.current.isPositioned&&(P.current.isPositioned=!1,p(b=>({...b,isPositioned:!1})))},[l]);const v=c.useRef(!1);ln(()=>(v.current=!0,()=>{v.current=!1}),[]),ln(()=>{if(C&&(I.current=C),E&&(O.current=E),C&&E){if(N.current)return N.current(C,E,M);M()}},[C,E,M,N,q]);const R=c.useMemo(()=>({reference:I,floating:O,setReference:y,setFloating:S}),[y,S]),k=c.useMemo(()=>({reference:C,floating:E}),[C,E]),D=c.useMemo(()=>{const b={position:n,left:0,top:0};if(!k.floating)return b;const T=Vr(k.floating,d.x),B=Vr(k.floating,d.y);return a?{...b,transform:"translate("+T+"px, "+B+"px)",...Uo(k.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:T,top:B}},[n,a,k.floating,d.x,d.y]);return c.useMemo(()=>({...d,update:M,refs:R,elements:k,floatingStyles:D}),[d,M,R,k,D])}const pa=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:o}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?Hr({element:r.current,padding:o}).fn(n):{}:r?Hr({element:r,padding:o}).fn(n):{}}}},qo=(e,t)=>{const n=sa(e);return{name:n.name,fn:n.fn,options:[e,t]}},Yo=(e,t)=>{const n=ia(e);return{name:n.name,fn:n.fn,options:[e,t]}},Go=(e,t)=>({fn:ca(e).fn,options:[e,t]}),br=(e,t)=>{const n=aa(e);return{name:n.name,fn:n.fn,options:[e,t]}},Xo=(e,t)=>{const n=la(e);return{name:n.name,fn:n.fn,options:[e,t]}},ic=(e,t)=>{const n=pa(e);return{name:n.name,fn:n.fn,options:[e,t]}};function ma(e,t){const n=e.compareDocumentPosition(t);return n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY?-1:n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS?1:0}const Zo=c.createContext({register:()=>{},unregister:()=>{},map:new Map,elementsRef:{current:[]}});function ha(e){const{children:t,elementsRef:n,labelsRef:r}=e,[o,i]=c.useState(()=>new Set),s=c.useCallback(l=>{i(d=>new Set(d).add(l))},[]),a=c.useCallback(l=>{i(d=>{const p=new Set(d);return p.delete(l),p})},[]),f=c.useMemo(()=>{const l=new Map;return Array.from(o.keys()).sort(ma).forEach((p,u)=>{l.set(p,u)}),l},[o]);return A.jsx(Zo.Provider,{value:c.useMemo(()=>({register:s,unregister:a,map:f,elementsRef:n,labelsRef:r}),[s,a,f,n,r]),children:t})}function va(e){e===void 0&&(e={});const{label:t}=e,{register:n,unregister:r,map:o,elementsRef:i,labelsRef:s}=c.useContext(Zo),[a,f]=c.useState(null),l=c.useRef(null),d=c.useCallback(p=>{if(l.current=p,a!==null&&(i.current[a]=p,s)){var u;const g=t!==void 0;s.current[a]=g?t:(u=p?.textContent)!=null?u:null}},[a,i,s,t]);return ce(()=>{const p=l.current;if(p)return n(p),()=>{r(p)}},[n,r]),ce(()=>{const p=l.current?o.get(l.current):null;p!=null&&f(p)},[o]),c.useMemo(()=>({ref:d,index:a??-1}),[a,d])}const ba="data-floating-ui-focusable",Kr="active",Ur="selected",qt="ArrowLeft",Yt="ArrowRight",Jo="ArrowUp",kn="ArrowDown",wa={...bo};let qr=!1,xa=0;const Yr=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+xa++;function ya(){const[e,t]=c.useState(()=>qr?Yr():void 0);return ce(()=>{e==null&&t(Yr())},[]),c.useEffect(()=>{qr=!0},[]),e}const Ra=wa.useId,Gt=Ra||ya,ac=c.forwardRef(function(t,n){const{context:{placement:r,elements:{floating:o},middlewareData:{arrow:i,shift:s}},width:a=14,height:f=7,tipRadius:l=0,strokeWidth:d=0,staticOffset:p,stroke:u,d:g,style:{transform:h,...m}={},...w}=t,x=Gt(),[y,S]=c.useState(!1);if(ce(()=>{if(!o)return;Ae(o).direction==="rtl"&&S(!0)},[o]),!o)return null;const[C,E]=r.split("-"),I=C==="top"||C==="bottom";let O=p;(I&&s!=null&&s.x||!I&&s!=null&&s.y)&&(O=null);const P=d*2,q=P/2,N=a/2*(l/-8+1),z=f/2*l/4,Y=!!g,M=O&&E==="end"?"bottom":"top";let v=O&&E==="end"?"right":"left";O&&y&&(v=E==="end"?"left":"right");const R=i?.x!=null?O||i.x:"",k=i?.y!=null?O||i.y:"",D=g||"M0,0"+(" H"+a)+(" L"+(a-N)+","+(f-z))+(" Q"+a/2+","+f+" "+N+","+(f-z))+" Z",b={top:Y?"rotate(180deg)":"",left:Y?"rotate(90deg)":"rotate(-90deg)",bottom:Y?"":"rotate(180deg)",right:Y?"rotate(-90deg)":"rotate(90deg)"}[C];return A.jsxs("svg",{...w,"aria-hidden":!0,ref:n,width:Y?a:a+P,height:a,viewBox:"0 0 "+a+" "+(f>a?f:a),style:{position:"absolute",pointerEvents:"none",[v]:R,[M]:k,[C]:I||Y?"100%":"calc(100% - "+P/2+"px)",transform:[b,h].filter(T=>!!T).join(" "),...m},children:[P>0&&A.jsx("path",{clipPath:"url(#"+x+")",fill:"none",stroke:u,strokeWidth:P+(g?0:1),d:D}),A.jsx("path",{stroke:P&&!g?w.fill:"none",d:D}),A.jsx("clipPath",{id:x,children:A.jsx("rect",{x:-q,y:q*(Y?-1:1),width:a+P,height:a})})]})});function Qo(){const e=new Map;return{emit(t,n){var r;(r=e.get(t))==null||r.forEach(o=>o(n))},on(t,n){e.has(t)||e.set(t,new Set),e.get(t).add(n)},off(t,n){var r;(r=e.get(t))==null||r.delete(n)}}}const es=c.createContext(null),ts=c.createContext(null),ct=()=>{var e;return((e=c.useContext(es))==null?void 0:e.id)||null},ut=()=>c.useContext(ts);function Ca(e){const t=Gt(),n=ut(),o=ct();return ce(()=>{if(!t)return;const i={id:t,parentId:o};return n?.addNode(i),()=>{n?.removeNode(i)}},[n,t,o]),t}function Sa(e){const{children:t,id:n}=e,r=ct();return A.jsx(es.Provider,{value:c.useMemo(()=>({id:n,parentId:r}),[n,r]),children:t})}function Ia(e){const{children:t}=e,n=c.useRef([]),r=c.useCallback(s=>{n.current=[...n.current,s]},[]),o=c.useCallback(s=>{n.current=n.current.filter(a=>a!==s)},[]),[i]=c.useState(()=>Qo());return A.jsx(ts.Provider,{value:c.useMemo(()=>({nodesRef:n,addNode:r,removeNode:o,events:i}),[r,o,i]),children:t})}function xt(e){return"data-floating-ui-"+e}function Ie(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const Gr=xt("safe-polygon");function Hn(e,t,n){if(n&&!Kt(n))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const r=e();return typeof r=="number"?r:r?.[t]}return e?.[t]}function Vn(e){return typeof e=="function"?e():e}function Ea(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,dataRef:o,events:i,elements:s}=e,{enabled:a=!0,delay:f=0,handleClose:l=null,mouseOnly:d=!1,restMs:p=0,move:u=!0}=t,g=ut(),h=ct(),m=Te(l),w=Te(f),x=Te(n),y=Te(p),S=c.useRef(),C=c.useRef(-1),E=c.useRef(),I=c.useRef(-1),O=c.useRef(!0),P=c.useRef(!1),q=c.useRef(()=>{}),N=c.useRef(!1),z=ye(()=>{var D;const b=(D=o.current.openEvent)==null?void 0:D.type;return b?.includes("mouse")&&b!=="mousedown"});c.useEffect(()=>{if(!a)return;function D(b){let{open:T}=b;T||(Ie(C),Ie(I),O.current=!0,N.current=!1)}return i.on("openchange",D),()=>{i.off("openchange",D)}},[a,i]),c.useEffect(()=>{if(!a||!m.current||!n)return;function D(T){z()&&r(!1,T,"hover")}const b=xe(s.floating).documentElement;return b.addEventListener("mouseleave",D),()=>{b.removeEventListener("mouseleave",D)}},[s.floating,n,r,a,m,z]);const Y=c.useCallback(function(D,b,T){b===void 0&&(b=!0),T===void 0&&(T="hover");const B=Hn(w.current,"close",S.current);B&&!E.current?(Ie(C),C.current=window.setTimeout(()=>r(!1,D,T),B)):b&&(Ie(C),r(!1,D,T))},[w,r]),M=ye(()=>{q.current(),E.current=void 0}),v=ye(()=>{if(P.current){const D=xe(s.floating).body;D.style.pointerEvents="",D.removeAttribute(Gr),P.current=!1}}),R=ye(()=>o.current.openEvent?["click","mousedown"].includes(o.current.openEvent.type):!1);c.useEffect(()=>{if(!a)return;function D(U){if(Ie(C),O.current=!1,d&&!Kt(S.current)||Vn(y.current)>0&&!Hn(w.current,"open"))return;const _=Hn(w.current,"open",S.current);_?C.current=window.setTimeout(()=>{x.current||r(!0,U,"hover")},_):n||r(!0,U,"hover")}function b(U){if(R()){v();return}q.current();const _=xe(s.floating);if(Ie(I),N.current=!1,m.current&&o.current.floatingContext){n||Ie(C),E.current=m.current({...o.current.floatingContext,tree:g,x:U.clientX,y:U.clientY,onClose(){v(),M(),R()||Y(U,!0,"safe-polygon")}});const G=E.current;_.addEventListener("mousemove",G),q.current=()=>{_.removeEventListener("mousemove",G)};return}(S.current!=="touch"||!we(s.floating,U.relatedTarget))&&Y(U)}function T(U){R()||o.current.floatingContext&&(m.current==null||m.current({...o.current.floatingContext,tree:g,x:U.clientX,y:U.clientY,onClose(){v(),M(),R()||Y(U)}})(U))}function B(){Ie(C)}function re(U){R()||Y(U,!1)}if(ue(s.domReference)){const U=s.domReference,_=s.floating;return n&&U.addEventListener("mouseleave",T),u&&U.addEventListener("mousemove",D,{once:!0}),U.addEventListener("mouseenter",D),U.addEventListener("mouseleave",b),_&&(_.addEventListener("mouseleave",T),_.addEventListener("mouseenter",B),_.addEventListener("mouseleave",re)),()=>{n&&U.removeEventListener("mouseleave",T),u&&U.removeEventListener("mousemove",D),U.removeEventListener("mouseenter",D),U.removeEventListener("mouseleave",b),_&&(_.removeEventListener("mouseleave",T),_.removeEventListener("mouseenter",B),_.removeEventListener("mouseleave",re))}}},[s,a,e,d,u,Y,M,v,r,n,x,g,w,m,o,R,y]),ce(()=>{var D;if(a&&n&&(D=m.current)!=null&&(D=D.__options)!=null&&D.blockPointerEvents&&z()){P.current=!0;const T=s.floating;if(ue(s.domReference)&&T){var b;const B=xe(s.floating).body;B.setAttribute(Gr,"");const re=s.domReference,U=g==null||(b=g.nodesRef.current.find(_=>_.id===h))==null||(b=b.context)==null?void 0:b.elements.floating;return U&&(U.style.pointerEvents=""),B.style.pointerEvents="none",re.style.pointerEvents="auto",T.style.pointerEvents="auto",()=>{B.style.pointerEvents="",re.style.pointerEvents="",T.style.pointerEvents=""}}}},[a,n,h,s,g,m,z]),ce(()=>{n||(S.current=void 0,N.current=!1,M(),v())},[n,M,v]),c.useEffect(()=>()=>{M(),Ie(C),Ie(I),v()},[a,s.domReference,M,v]);const k=c.useMemo(()=>{function D(b){S.current=b.pointerType}return{onPointerDown:D,onPointerEnter:D,onMouseMove(b){const{nativeEvent:T}=b;function B(){!O.current&&!x.current&&r(!0,T,"hover")}d&&!Kt(S.current)||n||Vn(y.current)===0||N.current&&b.movementX**2+b.movementY**2<2||(Ie(I),S.current==="touch"?B():(N.current=!0,I.current=window.setTimeout(B,Vn(y.current))))}}},[d,r,n,x,y]);return c.useMemo(()=>a?{reference:k}:{},[a,k])}let Xr=0;function pt(e,t){t===void 0&&(t={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:o=!1}=t;r&&cancelAnimationFrame(Xr);const i=()=>e?.focus({preventScroll:n});o?i():Xr=requestAnimationFrame(i)}function Kn(e,t){if(!e||!t)return!1;const n=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&Vt(n)){let r=t;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function Oa(e){return"composedPath"in e?e.composedPath()[0]:e.target}function Da(e){return e?.ownerDocument||document}const Tt={inert:new WeakMap,"aria-hidden":new WeakMap,none:new WeakMap};function Zr(e){return e==="inert"?Tt.inert:e==="aria-hidden"?Tt["aria-hidden"]:Tt.none}let tn=new WeakSet,nn={},Un=0;const ka=()=>typeof HTMLElement<"u"&&"inert"in HTMLElement.prototype;function ns(e){return e?Vt(e)?e.host:ns(e.parentNode):null}const Ta=(e,t)=>t.map(n=>{if(e.contains(n))return n;const r=ns(n);return e.contains(r)?r:null}).filter(n=>n!=null);function Aa(e,t,n,r){const o="data-floating-ui-inert",i=r?"inert":n?"aria-hidden":null,s=Ta(t,e),a=new Set,f=new Set(s),l=[];nn[o]||(nn[o]=new WeakMap);const d=nn[o];s.forEach(p),u(t),a.clear();function p(g){!g||a.has(g)||(a.add(g),g.parentNode&&p(g.parentNode))}function u(g){!g||f.has(g)||[].forEach.call(g.children,h=>{if(lt(h)!=="script")if(a.has(h))u(h);else{const m=i?h.getAttribute(i):null,w=m!==null&&m!=="false",x=Zr(i),y=(x.get(h)||0)+1,S=(d.get(h)||0)+1;x.set(h,y),d.set(h,S),l.push(h),y===1&&w&&tn.add(h),S===1&&h.setAttribute(o,""),!w&&i&&h.setAttribute(i,i==="inert"?"":"true")}})}return Un++,()=>{l.forEach(g=>{const h=Zr(i),w=(h.get(g)||0)-1,x=(d.get(g)||0)-1;h.set(g,w),d.set(g,x),w||(!tn.has(g)&&i&&g.removeAttribute(i),tn.delete(g)),x||g.removeAttribute(o)}),Un--,Un||(Tt.inert=new WeakMap,Tt["aria-hidden"]=new WeakMap,Tt.none=new WeakMap,tn=new WeakSet,nn={})}}function Jr(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=Da(e[0]).body;return Aa(e.concat(Array.from(r.querySelectorAll('[aria-live],[role="status"],output'))),r,t,n)}const wr={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0},bn=c.forwardRef(function(t,n){const[r,o]=c.useState();ce(()=>{Po()&&o("button")},[]);const i={ref:n,tabIndex:0,role:r,"aria-hidden":r?void 0:!0,[xt("focus-guard")]:"",style:wr};return A.jsx("span",{...t,...i})}),Pa={clipPath:"inset(50%)",position:"fixed",top:0,left:0},rs=c.createContext(null),Qr=xt("portal");function Ma(e){e===void 0&&(e={});const{id:t,root:n}=e,r=Gt(),o=os(),[i,s]=c.useState(null),a=c.useRef(null);return ce(()=>()=>{i?.remove(),queueMicrotask(()=>{a.current=null})},[i]),ce(()=>{if(!r||a.current)return;const f=t?document.getElementById(t):null;if(!f)return;const l=document.createElement("div");l.id=r,l.setAttribute(Qr,""),f.appendChild(l),a.current=l,s(l)},[t,r]),ce(()=>{if(n===null||!r||a.current)return;let f=n||o?.portalNode;f&&!dr(f)&&(f=f.current),f=f||document.body;let l=null;t&&(l=document.createElement("div"),l.id=t,f.appendChild(l));const d=document.createElement("div");d.id=r,d.setAttribute(Qr,""),f=l||f,f.appendChild(d),a.current=d,s(d)},[t,n,r,o]),i}function eo(e){const{children:t,id:n,root:r,preserveTabOrder:o=!0}=e,i=Ma({id:n,root:r}),[s,a]=c.useState(null),f=c.useRef(null),l=c.useRef(null),d=c.useRef(null),p=c.useRef(null),u=s?.modal,g=s?.open,h=!!s&&!s.modal&&s.open&&o&&!!(r||i);return c.useEffect(()=>{if(!i||!o||u)return;function m(w){i&&Ht(w)&&(w.type==="focusin"?Wr:Pi)(i)}return i.addEventListener("focusin",m,!0),i.addEventListener("focusout",m,!0),()=>{i.removeEventListener("focusin",m,!0),i.removeEventListener("focusout",m,!0)}},[i,o,u]),c.useEffect(()=>{i&&(g||Wr(i))},[g,i]),A.jsxs(rs.Provider,{value:c.useMemo(()=>({preserveTabOrder:o,beforeOutsideRef:f,afterOutsideRef:l,beforeInsideRef:d,afterInsideRef:p,portalNode:i,setFocusManagerState:a}),[o,i]),children:[h&&i&&A.jsx(bn,{"data-type":"outside",ref:f,onFocus:m=>{if(Ht(m,i)){var w;(w=d.current)==null||w.focus()}else{const x=s?s.domReference:null,y=Bo(x);y?.focus()}}}),h&&i&&A.jsx("span",{"aria-owns":i.id,style:Pa}),i&&wo.createPortal(t,i),h&&i&&A.jsx(bn,{"data-type":"outside",ref:l,onFocus:m=>{if(Ht(m,i)){var w;(w=p.current)==null||w.focus()}else{const x=s?s.domReference:null,y=_o(x);y?.focus(),s?.closeOnFocusOut&&s?.onOpenChange(!1,m.nativeEvent,"focus-out")}}})]})}const os=()=>c.useContext(rs);function to(e){return c.useMemo(()=>t=>{e.forEach(n=>{n&&(n.current=t)})},e)}const no=20;let et=[];function xr(){et=et.filter(e=>{var t;return(t=e.deref())==null?void 0:t.isConnected})}function La(e){xr(),e&&lt(e)!=="body"&&(et.push(new WeakRef(e)),et.length>no&&(et=et.slice(-no)))}function ro(){xr();const e=et[et.length-1];return e?.deref()}function Fa(e){const t=Ut();return ko(e,t)?e:On(e,t)[0]||e}function oo(e,t){var n;if(!t.current.includes("floating")&&!((n=e.getAttribute("role"))!=null&&n.includes("dialog")))return;const r=Ut(),i=pi(e,r).filter(a=>{const f=a.getAttribute("data-tabindex")||"";return ko(a,r)||a.hasAttribute("data-tabindex")&&!f.startsWith("-")}),s=e.getAttribute("tabindex");t.current.includes("floating")||i.length===0?s!=="0"&&e.setAttribute("tabindex","0"):(s!=="-1"||e.hasAttribute("data-tabindex")&&e.getAttribute("data-tabindex")!=="-1")&&(e.setAttribute("tabindex","-1"),e.setAttribute("data-tabindex","-1"))}const Na=c.forwardRef(function(t,n){return A.jsx("button",{...t,type:"button",ref:n,tabIndex:-1,style:wr})});function _a(e){const{context:t,children:n,disabled:r=!1,order:o=["content"],guards:i=!0,initialFocus:s=0,returnFocus:a=!0,restoreFocus:f=!1,modal:l=!0,visuallyHiddenDismiss:d=!1,closeOnFocusOut:p=!0,outsideElementsInert:u=!1,getInsideElements:g=()=>[]}=e,{open:h,onOpenChange:m,events:w,dataRef:x,elements:{domReference:y,floating:S}}=t,C=ye(()=>{var F;return(F=x.current.floatingContext)==null?void 0:F.nodeId}),E=ye(g),I=typeof s=="number"&&s<0,O=ir(y)&&I,P=ka(),q=P?i:!0,N=!q||P&&u,z=Te(o),Y=Te(s),M=Te(a),v=ut(),R=os(),k=c.useRef(null),D=c.useRef(null),b=c.useRef(!1),T=c.useRef(!1),B=c.useRef(-1),re=c.useRef(-1),U=R!=null,_=hn(S),te=ye(function(F){return F===void 0&&(F=_),F?On(F,Ut()):[]}),G=ye(F=>{const j=te(F);return z.current.map(H=>y&&H==="reference"?y:_&&H==="floating"?_:j).filter(Boolean).flat()});c.useEffect(()=>{if(r||!l)return;function F(H){if(H.key==="Tab"){we(_,We(xe(_)))&&te().length===0&&!O&&Ee(H);const Q=G(),le=Ve(H);z.current[0]==="reference"&&le===y&&(Ee(H),H.shiftKey?pt(Q[Q.length-1]):pt(Q[1])),z.current[1]==="floating"&&le===_&&H.shiftKey&&(Ee(H),pt(Q[0]))}}const j=xe(_);return j.addEventListener("keydown",F),()=>{j.removeEventListener("keydown",F)}},[r,y,_,l,z,O,te,G]),c.useEffect(()=>{if(r||!S)return;function F(j){const H=Ve(j),le=te().indexOf(H);le!==-1&&(B.current=le)}return S.addEventListener("focusin",F),()=>{S.removeEventListener("focusin",F)}},[r,S,te]),c.useEffect(()=>{if(r||!p)return;function F(){T.current=!0,setTimeout(()=>{T.current=!1})}function j(le){const J=le.relatedTarget,pe=le.currentTarget,me=Ve(le);queueMicrotask(()=>{const ve=C(),ke=!(we(y,J)||we(S,J)||we(J,S)||we(R?.portalNode,J)||J!=null&&J.hasAttribute(xt("focus-guard"))||v&&(bt(v.nodesRef.current,ve).find($=>{var Z,W;return we((Z=$.context)==null?void 0:Z.elements.floating,J)||we((W=$.context)==null?void 0:W.elements.domReference,J)})||_r(v.nodesRef.current,ve).find($=>{var Z,W,ne;return[(Z=$.context)==null?void 0:Z.elements.floating,hn((W=$.context)==null?void 0:W.elements.floating)].includes(J)||((ne=$.context)==null?void 0:ne.elements.domReference)===J})));if(pe===y&&_&&oo(_,z),f&&pe!==y&&!(me!=null&&me.isConnected)&&We(xe(_))===xe(_).body){he(_)&&_.focus();const $=B.current,Z=te(),W=Z[$]||Z[Z.length-1]||_;he(W)&&W.focus()}if(x.current.insideReactTree){x.current.insideReactTree=!1;return}(O||!l)&&J&&ke&&!T.current&&J!==ro()&&(b.current=!0,m(!1,le,"focus-out"))})}const H=!!(!v&&R);function Q(){Ie(re),x.current.insideReactTree=!0,re.current=window.setTimeout(()=>{x.current.insideReactTree=!1})}if(S&&he(y))return y.addEventListener("focusout",j),y.addEventListener("pointerdown",F),S.addEventListener("focusout",j),H&&S.addEventListener("focusout",Q,!0),()=>{y.removeEventListener("focusout",j),y.removeEventListener("pointerdown",F),S.removeEventListener("focusout",j),H&&S.removeEventListener("focusout",Q,!0)}},[r,y,S,_,l,v,R,m,p,f,te,O,C,z,x]);const oe=c.useRef(null),fe=c.useRef(null),se=to([oe,R?.beforeInsideRef]),L=to([fe,R?.afterInsideRef]);c.useEffect(()=>{var F,j;if(r||!S)return;const H=Array.from((R==null||(F=R.portalNode)==null?void 0:F.querySelectorAll("["+xt("portal")+"]"))||[]),le=(j=(v?_r(v.nodesRef.current,C()):[]).find(me=>{var ve;return ir(((ve=me.context)==null?void 0:ve.elements.domReference)||null)}))==null||(j=j.context)==null?void 0:j.elements.domReference,J=[S,le,...H,...E(),k.current,D.current,oe.current,fe.current,R?.beforeOutsideRef.current,R?.afterOutsideRef.current,z.current.includes("reference")||O?y:null].filter(me=>me!=null),pe=l||O?Jr(J,!N,N):Jr(J);return()=>{pe()}},[r,y,S,l,z,R,O,q,N,v,C,E]),ce(()=>{if(r||!he(_))return;const F=xe(_),j=We(F);queueMicrotask(()=>{const H=G(_),Q=Y.current,le=(typeof Q=="number"?H[Q]:Q.current)||_,J=we(_,j);!I&&!J&&h&&pt(le,{preventScroll:le===_})})},[r,h,_,I,G,Y]),ce(()=>{if(r||!_)return;const F=xe(_),j=We(F);La(j);function H(J){let{reason:pe,event:me,nested:ve}=J;if(["hover","safe-polygon"].includes(pe)&&me.type==="mouseleave"&&(b.current=!0),pe==="outside-press")if(ve)b.current=!1;else if(Lo(me)||Fo(me))b.current=!1;else{let ke=!1;document.createElement("div").focus({get preventScroll(){return ke=!0,!1}}),ke?b.current=!1:b.current=!0}}w.on("openchange",H);const Q=F.createElement("span");Q.setAttribute("tabindex","-1"),Q.setAttribute("aria-hidden","true"),Object.assign(Q.style,wr),U&&y&&y.insertAdjacentElement("afterend",Q);function le(){if(typeof M.current=="boolean"){const J=y||ro();return J&&J.isConnected?J:Q}return M.current.current||Q}return()=>{w.off("openchange",H);const J=We(F),pe=we(S,J)||v&&bt(v.nodesRef.current,C(),!1).some(ve=>{var ke;return we((ke=ve.context)==null?void 0:ke.elements.floating,J)}),me=le();queueMicrotask(()=>{const ve=Fa(me);M.current&&!b.current&&he(ve)&&(!(ve!==J&&J!==F.body)||pe)&&ve.focus({preventScroll:!0}),Q.remove()})}},[r,S,_,M,x,w,v,U,y,C]),c.useEffect(()=>(queueMicrotask(()=>{b.current=!1}),()=>{queueMicrotask(xr)}),[r]),ce(()=>{if(!r&&R)return R.setFocusManagerState({modal:l,closeOnFocusOut:p,open:h,onOpenChange:m,domReference:y}),()=>{R.setFocusManagerState(null)}},[r,R,l,h,m,p,y]),ce(()=>{r||_&&oo(_,z)},[r,_,z]);function V(F){return r||!d||!l?null:A.jsx(Na,{ref:F==="start"?k:D,onClick:j=>m(!1,j.nativeEvent),children:typeof d=="string"?d:"Dismiss"})}const K=!r&&q&&(l?!O:!0)&&(U||l);return A.jsxs(A.Fragment,{children:[K&&A.jsx(bn,{"data-type":"inside",ref:se,onFocus:F=>{if(l){const H=G();pt(o[0]==="reference"?H[0]:H[H.length-1])}else if(R!=null&&R.preserveTabOrder&&R.portalNode)if(b.current=!1,Ht(F,R.portalNode)){const H=_o(y);H?.focus()}else{var j;(j=R.beforeOutsideRef.current)==null||j.focus()}}}),!O&&V("start"),n,V("end"),K&&A.jsx(bn,{"data-type":"inside",ref:L,onFocus:F=>{if(l)pt(G()[0]);else if(R!=null&&R.preserveTabOrder&&R.portalNode)if(p&&(b.current=!0),Ht(F,R.portalNode)){const H=Bo(y);H?.focus()}else{var j;(j=R.afterOutsideRef.current)==null||j.focus()}}})]})}function so(e){return he(e.target)&&e.target.tagName==="BUTTON"}function Ba(e){return he(e.target)&&e.target.tagName==="A"}function io(e){return hr(e)}function yr(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,dataRef:o,elements:{domReference:i}}=e,{enabled:s=!0,event:a="click",toggle:f=!0,ignoreMouse:l=!1,keyboardHandlers:d=!0,stickIfOpen:p=!0}=t,u=c.useRef(),g=c.useRef(!1),h=c.useMemo(()=>({onPointerDown(m){u.current=m.pointerType},onMouseDown(m){const w=u.current;m.button===0&&a!=="click"&&(Kt(w,!0)&&l||(n&&f&&(!(o.current.openEvent&&p)||o.current.openEvent.type==="mousedown")?r(!1,m.nativeEvent,"click"):(m.preventDefault(),r(!0,m.nativeEvent,"click"))))},onClick(m){const w=u.current;if(a==="mousedown"&&u.current){u.current=void 0;return}Kt(w,!0)&&l||(n&&f&&(!(o.current.openEvent&&p)||o.current.openEvent.type==="click")?r(!1,m.nativeEvent,"click"):r(!0,m.nativeEvent,"click"))},onKeyDown(m){u.current=void 0,!(m.defaultPrevented||!d||so(m))&&(m.key===" "&&!io(i)&&(m.preventDefault(),g.current=!0),!Ba(m)&&m.key==="Enter"&&r(!(n&&f),m.nativeEvent,"click"))},onKeyUp(m){m.defaultPrevented||!d||so(m)||io(i)||m.key===" "&&g.current&&(g.current=!1,r(!(n&&f),m.nativeEvent,"click"))}}),[o,i,a,l,d,r,n,p,f]);return c.useMemo(()=>s?{reference:h}:{},[s,h])}const Wa={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},$a={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},ao=e=>{var t,n;return{escapeKey:typeof e=="boolean"?e:(t=e?.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(n=e?.outsidePress)!=null?n:!0}};function Rr(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,elements:o,dataRef:i}=e,{enabled:s=!0,escapeKey:a=!0,outsidePress:f=!0,outsidePressEvent:l="pointerdown",referencePress:d=!1,referencePressEvent:p="pointerdown",ancestorScroll:u=!1,bubbles:g,capture:h}=t,m=ut(),w=ye(typeof f=="function"?f:()=>!1),x=typeof f=="function"?w:f,y=c.useRef(!1),{escapeKey:S,outsidePress:C}=ao(g),{escapeKey:E,outsidePress:I}=ao(h),O=c.useRef(!1),P=ye(v=>{var R;if(!n||!s||!a||v.key!=="Escape"||O.current)return;const k=(R=i.current.floatingContext)==null?void 0:R.nodeId,D=m?bt(m.nodesRef.current,k):[];if(!S&&(v.stopPropagation(),D.length>0)){let b=!0;if(D.forEach(T=>{var B;if((B=T.context)!=null&&B.open&&!T.context.dataRef.current.__escapeKeyBubbles){b=!1;return}}),!b)return}r(!1,Ri(v)?v.nativeEvent:v,"escape-key")}),q=ye(v=>{var R;const k=()=>{var D;P(v),(D=Ve(v))==null||D.removeEventListener("keydown",k)};(R=Ve(v))==null||R.addEventListener("keydown",k)}),N=ye(v=>{var R;const k=i.current.insideReactTree;i.current.insideReactTree=!1;const D=y.current;if(y.current=!1,l==="click"&&D||k||typeof x=="function"&&!x(v))return;const b=Ve(v),T="["+xt("inert")+"]",B=xe(o.floating).querySelectorAll(T);let re=ue(b)?b:null;for(;re&&!nt(re);){const G=ot(re);if(nt(G)||!ue(G))break;re=G}if(B.length&&ue(b)&&!wi(b)&&!we(b,o.floating)&&Array.from(B).every(G=>!we(re,G)))return;if(he(b)&&M){const G=nt(b),oe=Ae(b),fe=/auto|scroll/,se=G||fe.test(oe.overflowX),L=G||fe.test(oe.overflowY),V=se&&b.clientWidth>0&&b.scrollWidth>b.clientWidth,K=L&&b.clientHeight>0&&b.scrollHeight>b.clientHeight,F=oe.direction==="rtl",j=K&&(F?v.offsetX<=b.offsetWidth-b.clientWidth:v.offsetX>b.clientWidth),H=V&&v.offsetY>b.clientHeight;if(j||H)return}const U=(R=i.current.floatingContext)==null?void 0:R.nodeId,_=m&&bt(m.nodesRef.current,U).some(G=>{var oe;return Wn(v,(oe=G.context)==null?void 0:oe.elements.floating)});if(Wn(v,o.floating)||Wn(v,o.domReference)||_)return;const te=m?bt(m.nodesRef.current,U):[];if(te.length>0){let G=!0;if(te.forEach(oe=>{var fe;if((fe=oe.context)!=null&&fe.open&&!oe.context.dataRef.current.__outsidePressBubbles){G=!1;return}}),!G)return}r(!1,v,"outside-press")}),z=ye(v=>{var R;const k=()=>{var D;N(v),(D=Ve(v))==null||D.removeEventListener(l,k)};(R=Ve(v))==null||R.addEventListener(l,k)});c.useEffect(()=>{if(!n||!s)return;i.current.__escapeKeyBubbles=S,i.current.__outsidePressBubbles=C;let v=-1;function R(B){r(!1,B,"ancestor-scroll")}function k(){window.clearTimeout(v),O.current=!0}function D(){v=window.setTimeout(()=>{O.current=!1},In()?5:0)}const b=xe(o.floating);a&&(b.addEventListener("keydown",E?q:P,E),b.addEventListener("compositionstart",k),b.addEventListener("compositionend",D)),x&&b.addEventListener(l,I?z:N,I);let T=[];return u&&(ue(o.domReference)&&(T=rt(o.domReference)),ue(o.floating)&&(T=T.concat(rt(o.floating))),!ue(o.reference)&&o.reference&&o.reference.contextElement&&(T=T.concat(rt(o.reference.contextElement)))),T=T.filter(B=>{var re;return B!==((re=b.defaultView)==null?void 0:re.visualViewport)}),T.forEach(B=>{B.addEventListener("scroll",R)}),()=>{a&&(b.removeEventListener("keydown",E?q:P,E),b.removeEventListener("compositionstart",k),b.removeEventListener("compositionend",D)),x&&b.removeEventListener(l,I?z:N,I),T.forEach(B=>{B.removeEventListener("scroll",R)}),window.clearTimeout(v)}},[i,o,a,x,l,n,r,u,s,S,C,P,E,q,N,I,z]),c.useEffect(()=>{i.current.insideReactTree=!1},[i,x,l]);const Y=c.useMemo(()=>({onKeyDown:P,...d&&{[Wa[p]]:v=>{r(!1,v.nativeEvent,"reference-press")},...p!=="click"&&{onClick(v){r(!1,v.nativeEvent,"reference-press")}}}}),[P,r,d,p]),M=c.useMemo(()=>{function v(R){R.button===0&&(y.current=!0)}return{onKeyDown:P,onMouseDown:v,onMouseUp:v,[$a[l]]:()=>{i.current.insideReactTree=!0}}},[P,l,i]);return c.useMemo(()=>s?{reference:Y,floating:M}:{},[s,Y,M])}function za(e){const{open:t=!1,onOpenChange:n,elements:r}=e,o=Gt(),i=c.useRef({}),[s]=c.useState(()=>Qo()),a=ct()!=null,[f,l]=c.useState(r.reference),d=ye((g,h,m)=>{i.current.openEvent=g?h:void 0,s.emit("openchange",{open:g,event:h,reason:m,nested:a}),n?.(g,h,m)}),p=c.useMemo(()=>({setPositionReference:l}),[]),u=c.useMemo(()=>({reference:f||r.reference||null,floating:r.floating||null,domReference:r.reference}),[f,r.reference,r.floating]);return c.useMemo(()=>({dataRef:i,open:t,onOpenChange:d,elements:u,events:s,floatingId:o,refs:p}),[t,d,u,s,o,p])}function ja(e){var t,n;let{elements:r,...o}=e===void 0?{}:e;const{nodeId:i}=o,s=za({...o,elements:{reference:(t=r?.reference)!=null?t:null,floating:(n=r?.floating)!=null?n:null}}),a=o.rootContext||s,f=a.elements,[l,d]=c.useState(null),[p,u]=c.useState(null),h=f?.domReference||l,m=c.useRef(null),w=ut();ce(()=>{h&&(m.current=h)},[h]);const x=ga({...o,elements:{...f,...p&&{reference:p}}}),y=c.useCallback(O=>{const P=ue(O)?{getBoundingClientRect:()=>O.getBoundingClientRect(),getClientRects:()=>O.getClientRects(),contextElement:O}:O;u(P),x.refs.setReference(P)},[x.refs]),S=c.useCallback(O=>{(ue(O)||O===null)&&(m.current=O,d(O)),(ue(x.refs.reference.current)||x.refs.reference.current===null||O!==null&&!ue(O))&&x.refs.setReference(O)},[x.refs]),C=c.useMemo(()=>({...x.refs,setReference:S,setPositionReference:y,domReference:m}),[x.refs,S,y]),E=c.useMemo(()=>({...x.elements,domReference:h}),[x.elements,h]),I=c.useMemo(()=>({...x,...a,refs:C,elements:E,nodeId:i}),[x,C,E,i,a]);return ce(()=>{a.dataRef.current.floatingContext=I;const O=w?.nodesRef.current.find(P=>P.id===i);O&&(O.context=I)}),c.useMemo(()=>({...x,context:I,refs:C,elements:E}),[x,C,E,I])}function qn(){return mi()&&Po()}function Ha(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,events:o,dataRef:i,elements:s}=e,{enabled:a=!0,visibleOnly:f=!0}=t,l=c.useRef(!1),d=c.useRef(-1),p=c.useRef(!0);c.useEffect(()=>{if(!a)return;const g=Oe(s.domReference);function h(){!n&&he(s.domReference)&&s.domReference===We(xe(s.domReference))&&(l.current=!0)}function m(){p.current=!0}function w(){p.current=!1}return g.addEventListener("blur",h),qn()&&(g.addEventListener("keydown",m,!0),g.addEventListener("pointerdown",w,!0)),()=>{g.removeEventListener("blur",h),qn()&&(g.removeEventListener("keydown",m,!0),g.removeEventListener("pointerdown",w,!0))}},[s.domReference,n,a]),c.useEffect(()=>{if(!a)return;function g(h){let{reason:m}=h;(m==="reference-press"||m==="escape-key")&&(l.current=!0)}return o.on("openchange",g),()=>{o.off("openchange",g)}},[o,a]),c.useEffect(()=>()=>{Ie(d)},[]);const u=c.useMemo(()=>({onMouseLeave(){l.current=!1},onFocus(g){if(l.current)return;const h=Ve(g.nativeEvent);if(f&&ue(h)){if(qn()&&!g.relatedTarget){if(!p.current&&!hr(h))return}else if(!xi(h))return}r(!0,g.nativeEvent,"focus")},onBlur(g){l.current=!1;const h=g.relatedTarget,m=g.nativeEvent,w=ue(h)&&h.hasAttribute(xt("focus-guard"))&&h.getAttribute("data-type")==="outside";d.current=window.setTimeout(()=>{var x;const y=We(s.domReference?s.domReference.ownerDocument:document);!h&&y===s.domReference||we((x=i.current.floatingContext)==null?void 0:x.refs.floating.current,y)||we(s.domReference,y)||w||r(!1,m,"focus")})}}),[i,s.domReference,r,f]);return c.useMemo(()=>a?{reference:u}:{},[a,u])}function Yn(e,t,n){const r=new Map,o=n==="item";let i=e;if(o&&e){const{[Kr]:s,[Ur]:a,...f}=e;i=f}return{...n==="floating"&&{tabIndex:-1,[ba]:""},...i,...t.map(s=>{const a=s?s[n]:null;return typeof a=="function"?e?a(e):null:a}).concat(e).reduce((s,a)=>(a&&Object.entries(a).forEach(f=>{let[l,d]=f;if(!(o&&[Kr,Ur].includes(l)))if(l.indexOf("on")===0){if(r.has(l)||r.set(l,[]),typeof d=="function"){var p;(p=r.get(l))==null||p.push(d),s[l]=function(){for(var u,g=arguments.length,h=new Array(g),m=0;m<g;m++)h[m]=arguments[m];return(u=r.get(l))==null?void 0:u.map(w=>w(...h)).find(w=>w!==void 0)}}}else s[l]=d}),s),{})}}function Cr(e){e===void 0&&(e=[]);const t=e.map(a=>a?.reference),n=e.map(a=>a?.floating),r=e.map(a=>a?.item),o=c.useCallback(a=>Yn(a,e,"reference"),t),i=c.useCallback(a=>Yn(a,e,"floating"),n),s=c.useCallback(a=>Yn(a,e,"item"),r);return c.useMemo(()=>({getReferenceProps:o,getFloatingProps:i,getItemProps:s}),[o,i,s])}const Va="Escape";function Tn(e,t,n){switch(e){case"vertical":return t;case"horizontal":return n;default:return t||n}}function rn(e,t){return Tn(t,e===Jo||e===kn,e===qt||e===Yt)}function Gn(e,t,n){return Tn(t,e===kn,n?e===qt:e===Yt)||e==="Enter"||e===" "||e===""}function lo(e,t,n){return Tn(t,n?e===qt:e===Yt,e===kn)}function co(e,t,n,r){const o=n?e===Yt:e===qt,i=e===Jo;return t==="both"||t==="horizontal"&&r&&r>1?e===Va:Tn(t,o,i)}function Ka(e,t){const{open:n,onOpenChange:r,elements:o,floatingId:i}=e,{listRef:s,activeIndex:a,onNavigate:f=()=>{},enabled:l=!0,selectedIndex:d=null,allowEscape:p=!1,loop:u=!1,nested:g=!1,rtl:h=!1,virtual:m=!1,focusItemOnOpen:w="auto",focusItemOnHover:x=!0,openOnArrowKeyDown:y=!0,disabledIndices:S=void 0,orientation:C="vertical",parentOrientation:E,cols:I=1,scrollItemIntoView:O=!0,virtualItemRef:P,itemSizes:q,dense:N=!1}=t,z=hn(o.floating),Y=Te(z),M=ct(),v=ut();ce(()=>{e.dataRef.current.orientation=C},[e,C]);const R=ye(()=>{f(b.current===-1?null:b.current)}),k=ir(o.domReference),D=c.useRef(w),b=c.useRef(d??-1),T=c.useRef(null),B=c.useRef(!0),re=c.useRef(R),U=c.useRef(!!o.floating),_=c.useRef(n),te=c.useRef(!1),G=c.useRef(!1),oe=Te(S),fe=Te(n),se=Te(O),L=Te(d),[V,K]=c.useState(),[F,j]=c.useState(),H=ye(()=>{function $(ae){if(m){var de;(de=ae.id)!=null&&de.endsWith("-fui-option")&&(ae.id=i+"-"+Math.random().toString(16).slice(2,10)),K(ae.id),v?.events.emit("virtualfocus",ae),P&&(P.current=ae)}else pt(ae,{sync:te.current,preventScroll:!0})}const Z=s.current[b.current],W=G.current;Z&&$(Z),(te.current?ae=>ae():requestAnimationFrame)(()=>{const ae=s.current[b.current]||Z;if(!ae)return;Z||$(ae);const de=se.current;de&&le&&(W||!B.current)&&(ae.scrollIntoView==null||ae.scrollIntoView(typeof de=="boolean"?{block:"nearest",inline:"nearest"}:de))})});ce(()=>{l&&(n&&o.floating?D.current&&d!=null&&(G.current=!0,b.current=d,R()):U.current&&(b.current=-1,re.current()))},[l,n,o.floating,d,R]),ce(()=>{if(l&&n&&o.floating)if(a==null){if(te.current=!1,L.current!=null)return;if(U.current&&(b.current=-1,H()),(!_.current||!U.current)&&D.current&&(T.current!=null||D.current===!0&&T.current==null)){let $=0;const Z=()=>{s.current[0]==null?($<2&&($?requestAnimationFrame:queueMicrotask)(Z),$++):(b.current=T.current==null||Gn(T.current,C,h)||g?$n(s,oe.current):Br(s,oe.current),T.current=null,R())};Z()}}else jt(s,a)||(b.current=a,H(),G.current=!1)},[l,n,o.floating,a,L,g,s,C,h,R,H,oe]),ce(()=>{var $;if(!l||o.floating||!v||m||!U.current)return;const Z=v.nodesRef.current,W=($=Z.find(de=>de.id===M))==null||($=$.context)==null?void 0:$.elements.floating,ne=We(xe(o.floating)),ae=Z.some(de=>de.context&&we(de.context.elements.floating,ne));W&&!ae&&B.current&&W.focus({preventScroll:!0})},[l,o.floating,v,M,m]),ce(()=>{if(!l||!v||!m||M)return;function $(Z){j(Z.id),P&&(P.current=Z)}return v.events.on("virtualfocus",$),()=>{v.events.off("virtualfocus",$)}},[l,v,m,M,P]),ce(()=>{re.current=R,_.current=n,U.current=!!o.floating}),ce(()=>{n||(T.current=null,D.current=w)},[n,w]);const Q=a!=null,le=c.useMemo(()=>{function $(W){if(!fe.current)return;const ne=s.current.indexOf(W);ne!==-1&&b.current!==ne&&(b.current=ne,R())}return{onFocus(W){let{currentTarget:ne}=W;te.current=!0,$(ne)},onClick:W=>{let{currentTarget:ne}=W;return ne.focus({preventScroll:!0})},onMouseMove(W){let{currentTarget:ne}=W;te.current=!0,G.current=!1,x&&$(ne)},onPointerLeave(W){let{pointerType:ne}=W;if(!(!B.current||ne==="touch")&&(te.current=!0,!!x&&(b.current=-1,R(),!m))){var ae;(ae=Y.current)==null||ae.focus({preventScroll:!0})}}}},[fe,Y,x,s,R,m]),J=c.useCallback(()=>{var $;return E??(v==null||($=v.nodesRef.current.find(Z=>Z.id===M))==null||($=$.context)==null||($=$.dataRef)==null?void 0:$.current.orientation)},[M,v,E]),pe=ye($=>{if(B.current=!1,te.current=!0,$.which===229||!fe.current&&$.currentTarget===Y.current)return;if(g&&co($.key,C,h,I)){rn($.key,J())||Ee($),r(!1,$.nativeEvent,"list-navigation"),he(o.domReference)&&(m?v?.events.emit("virtualfocus",o.domReference):o.domReference.focus());return}const Z=b.current,W=$n(s,S),ne=Br(s,S);if(k||($.key==="Home"&&(Ee($),b.current=W,R()),$.key==="End"&&(Ee($),b.current=ne,R())),I>1){const ae=q||Array.from({length:s.current.length},()=>({width:1,height:1})),de=ki(ae,I,N),Ye=de.findIndex(Ce=>Ce!=null&&!an(s,Ce,S)),yt=de.reduce((Ce,Me,Rt)=>Me!=null&&!an(s,Me,S)?Rt:Ce,-1),dt=de[Di({current:de.map(Ce=>Ce!=null?s.current[Ce]:null)},{event:$,orientation:C,loop:u,rtl:h,cols:I,disabledIndices:Ai([...(typeof S!="function"?S:null)||s.current.map((Ce,Me)=>an(s,Me,S)?Me:void 0),void 0],de),minIndex:Ye,maxIndex:yt,prevIndex:Ti(b.current>ne?W:b.current,ae,de,I,$.key===kn?"bl":$.key===(h?qt:Yt)?"tr":"tl"),stopEvent:!0})];if(dt!=null&&(b.current=dt,R()),C==="both")return}if(rn($.key,C)){if(Ee($),n&&!m&&We($.currentTarget.ownerDocument)===$.currentTarget){b.current=Gn($.key,C,h)?W:ne,R();return}Gn($.key,C,h)?u?b.current=Z>=ne?p&&Z!==s.current.length?-1:W:Re(s,{startingIndex:Z,disabledIndices:S}):b.current=Math.min(ne,Re(s,{startingIndex:Z,disabledIndices:S})):u?b.current=Z<=W?p&&Z!==-1?s.current.length:ne:Re(s,{startingIndex:Z,decrement:!0,disabledIndices:S}):b.current=Math.max(W,Re(s,{startingIndex:Z,decrement:!0,disabledIndices:S})),jt(s,b.current)&&(b.current=-1),R()}}),me=c.useMemo(()=>m&&n&&Q&&{"aria-activedescendant":F||V},[m,n,Q,F,V]),ve=c.useMemo(()=>({"aria-orientation":C==="both"?void 0:C,...k?{}:me,onKeyDown:pe,onPointerMove(){B.current=!0}}),[me,pe,C,k]),ke=c.useMemo(()=>{function $(W){w==="auto"&&Lo(W.nativeEvent)&&(D.current=!0)}function Z(W){D.current=w,w==="auto"&&Fo(W.nativeEvent)&&(D.current=!0)}return{...me,onKeyDown(W){B.current=!1;const ne=W.key.startsWith("Arrow"),ae=["Home","End"].includes(W.key),de=ne||ae,Ye=lo(W.key,C,h),yt=co(W.key,C,h,I),dt=lo(W.key,J(),h),Ce=rn(W.key,C),Me=(g?dt:Ce)||W.key==="Enter"||W.key.trim()==="";if(m&&n){const Ct=v?.nodesRef.current.find(St=>St.parentId==null),Le=v&&Ct?yi(v.nodesRef.current,Ct.id):null;if(de&&Le&&P){const St=new KeyboardEvent("keydown",{key:W.key,bubbles:!0});if(Ye||yt){var Rt,Xt;const Pn=((Rt=Le.context)==null?void 0:Rt.elements.domReference)===W.currentTarget,It=yt&&!Pn?(Xt=Le.context)==null?void 0:Xt.elements.domReference:Ye?s.current.find(Jt=>Jt?.id===V):null;It&&(Ee(W),It.dispatchEvent(St),j(void 0))}if((Ce||ae)&&Le.context&&Le.context.open&&Le.parentId&&W.currentTarget!==Le.context.elements.domReference){var Zt;Ee(W),(Zt=Le.context.elements.domReference)==null||Zt.dispatchEvent(St);return}}return pe(W)}if(!(!n&&!y&&ne)){if(Me){const Ct=rn(W.key,J());T.current=g&&Ct?null:W.key}if(g){dt&&(Ee(W),n?(b.current=$n(s,oe.current),R()):r(!0,W.nativeEvent,"list-navigation"));return}Ce&&(d!=null&&(b.current=d),Ee(W),!n&&y?r(!0,W.nativeEvent,"list-navigation"):pe(W),n&&R())}},onFocus(){n&&!m&&(b.current=-1,R())},onPointerDown:Z,onPointerEnter:Z,onMouseDown:$,onClick:$}},[V,me,I,pe,oe,w,s,g,R,r,n,y,C,J,h,d,v,m,P]);return c.useMemo(()=>l?{reference:ke,floating:ve,item:le}:{},[l,ke,ve,le])}const Ua=new Map([["select","listbox"],["combobox","listbox"],["label",!1]]);function qa(e,t){var n,r;t===void 0&&(t={});const{open:o,elements:i,floatingId:s}=e,{enabled:a=!0,role:f="dialog"}=t,l=Gt(),d=((n=i.domReference)==null?void 0:n.id)||l,p=c.useMemo(()=>{var y;return((y=hn(i.floating))==null?void 0:y.id)||s},[i.floating,s]),u=(r=Ua.get(f))!=null?r:f,h=ct()!=null,m=c.useMemo(()=>u==="tooltip"||f==="label"?{["aria-"+(f==="label"?"labelledby":"describedby")]:o?p:void 0}:{"aria-expanded":o?"true":"false","aria-haspopup":u==="alertdialog"?"dialog":u,"aria-controls":o?p:void 0,...u==="listbox"&&{role:"combobox"},...u==="menu"&&{id:d},...u==="menu"&&h&&{role:"menuitem"},...f==="select"&&{"aria-autocomplete":"none"},...f==="combobox"&&{"aria-autocomplete":"list"}},[u,p,h,o,d,f]),w=c.useMemo(()=>{const y={id:p,...u&&{role:u}};return u==="tooltip"||f==="label"?y:{...y,...u==="menu"&&{"aria-labelledby":d}}},[u,p,d,f]),x=c.useCallback(y=>{let{active:S,selected:C}=y;const E={role:"option",...S&&{id:p+"-fui-option"}};switch(f){case"select":case"combobox":return{...E,"aria-selected":C}}return{}},[p,f]);return c.useMemo(()=>a?{reference:m,floating:w,item:x}:{},[a,m,w,x])}function ss(e,t,n){return n===void 0&&(n=!0),e.filter(o=>{var i;return o.parentId===t&&(!n||((i=o.context)==null?void 0:i.open))}).flatMap(o=>[o,...ss(e,o.id,n)])}function uo(e,t){const[n,r]=e;let o=!1;const i=t.length;for(let s=0,a=i-1;s<i;a=s++){const[f,l]=t[s]||[0,0],[d,p]=t[a]||[0,0];l>=r!=p>=r&&n<=(d-f)*(r-l)/(p-l)+f&&(o=!o)}return o}function Ya(e,t){return e[0]>=t.x&&e[0]<=t.x+t.width&&e[1]>=t.y&&e[1]<=t.y+t.height}function Ga(e){e===void 0&&(e={});const{buffer:t=.5,blockPointerEvents:n=!1,requireIntent:r=!0}=e,o={current:-1};let i=!1,s=null,a=null,f=typeof performance<"u"?performance.now():0;function l(p,u){const g=performance.now(),h=g-f;if(s===null||a===null||h===0)return s=p,a=u,f=g,null;const m=p-s,w=u-a,y=Math.sqrt(m*m+w*w)/h;return s=p,a=u,f=g,y}const d=p=>{let{x:u,y:g,placement:h,elements:m,onClose:w,nodeId:x,tree:y}=p;return function(C){function E(){Ie(o),w()}if(Ie(o),!m.domReference||!m.floating||h==null||u==null||g==null)return;const{clientX:I,clientY:O}=C,P=[I,O],q=Oa(C),N=C.type==="mouseleave",z=Kn(m.floating,q),Y=Kn(m.domReference,q),M=m.domReference.getBoundingClientRect(),v=m.floating.getBoundingClientRect(),R=h.split("-")[0],k=u>v.right-v.width/2,D=g>v.bottom-v.height/2,b=Ya(P,M),T=v.width>M.width,B=v.height>M.height,re=(T?M:v).left,U=(T?M:v).right,_=(B?M:v).top,te=(B?M:v).bottom;if(z&&(i=!0,!N))return;if(Y&&(i=!1),Y&&!N){i=!0;return}if(N&&ue(C.relatedTarget)&&Kn(m.floating,C.relatedTarget)||y&&ss(y.nodesRef.current,x).length)return;if(R==="top"&&g>=M.bottom-1||R==="bottom"&&g<=M.top+1||R==="left"&&u>=M.right-1||R==="right"&&u<=M.left+1)return E();let G=[];switch(R){case"top":G=[[re,M.top+1],[re,v.bottom-1],[U,v.bottom-1],[U,M.top+1]];break;case"bottom":G=[[re,v.top+1],[re,M.bottom-1],[U,M.bottom-1],[U,v.top+1]];break;case"left":G=[[v.right-1,te],[v.right-1,_],[M.left+1,_],[M.left+1,te]];break;case"right":G=[[M.right-1,te],[M.right-1,_],[v.left+1,_],[v.left+1,te]];break}function oe(fe){let[se,L]=fe;switch(R){case"top":{const V=[T?se+t/2:k?se+t*4:se-t*4,L+t+1],K=[T?se-t/2:k?se+t*4:se-t*4,L+t+1],F=[[v.left,k||T?v.bottom-t:v.top],[v.right,k?T?v.bottom-t:v.top:v.bottom-t]];return[V,K,...F]}case"bottom":{const V=[T?se+t/2:k?se+t*4:se-t*4,L-t],K=[T?se-t/2:k?se+t*4:se-t*4,L-t],F=[[v.left,k||T?v.top+t:v.bottom],[v.right,k?T?v.top+t:v.bottom:v.top+t]];return[V,K,...F]}case"left":{const V=[se+t+1,B?L+t/2:D?L+t*4:L-t*4],K=[se+t+1,B?L-t/2:D?L+t*4:L-t*4];return[...[[D||B?v.right-t:v.left,v.top],[D?B?v.right-t:v.left:v.right-t,v.bottom]],V,K]}case"right":{const V=[se-t,B?L+t/2:D?L+t*4:L-t*4],K=[se-t,B?L-t/2:D?L+t*4:L-t*4],F=[[D||B?v.left+t:v.right,v.top],[D?B?v.left+t:v.right:v.left+t,v.bottom]];return[V,K,...F]}}}if(!uo([I,O],G)){if(i&&!b)return E();if(!N&&r){const fe=l(C.clientX,C.clientY);if(fe!==null&&fe<.1)return E()}uo([I,O],oe([u,g]))?!i&&r&&(o.current=window.setTimeout(E,40)):E()}}};return d.__options={blockPointerEvents:n},d}function wn(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}const Xn=typeof document<"u"&&window.visualViewport,Xa=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);let on=0,Zn;function Za(e={}){const{isDisabled:t}=e;tt(()=>{if(!t)return on++,on===1&&(ol()?Zn=Qa():Zn=Ja()),()=>{on--,on===0&&Zn()}},[t])}function Ja(){return wn(Dt(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),Dt(document.documentElement,"overflow","hidden"))}function Qa(){let e,t;const n=l=>{e=is(l.target,!0),!(e===document.documentElement&&e===document.body)&&e instanceof HTMLElement&&window.getComputedStyle(e).overscrollBehavior==="auto"&&(t=Dt(e,"overscrollBehavior","contain"))},r=l=>{if(!e||e===document.documentElement||e===document.body){l.preventDefault();return}e.scrollHeight===e.clientHeight&&e.scrollWidth===e.clientWidth&&l.preventDefault()},o=()=>{t&&t()},i=l=>{const d=l.target;el(d)&&(a(),d.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{d.style.transform="",Xn&&(Xn.height<window.innerHeight?requestAnimationFrame(()=>{fo(d)}):Xn.addEventListener("resize",()=>fo(d),{once:!0}))}))};let s=null;const a=()=>{if(s)return;const l=()=>{window.scrollTo(0,0)},d=window.pageXOffset,p=window.pageYOffset;s=wn(Ft(window,"scroll",l),Dt(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),Dt(document.documentElement,"overflow","hidden"),Dt(document.body,"marginTop",`-${p}px`),()=>{window.scrollTo(d,p)}),window.scrollTo(0,0)},f=wn(Ft(document,"touchstart",n,{passive:!1,capture:!0}),Ft(document,"touchmove",r,{passive:!1,capture:!0}),Ft(document,"touchend",o,{passive:!1,capture:!0}),Ft(document,"focus",i,!0));return()=>{t?.(),s?.(),f()}}function Dt(e,t,n){const r=e.style[t];return e.style[t]=n,()=>{e.style[t]=r}}function Ft(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}function fo(e){const t=document.scrollingElement||document.documentElement;let n=e;for(;n&&n!==t;){const r=is(n);if(r!==document.documentElement&&r!==document.body&&r!==n){const o=r.getBoundingClientRect().top,i=n.getBoundingClientRect().top;i>o+n.clientHeight&&(r.scrollTop+=i-o)}n=r.parentElement}}function el(e){return e instanceof HTMLInputElement&&!Xa.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}function go(e,t){if(!e)return!1;const n=window.getComputedStyle(e);let r=/(auto|scroll)/.test(n.overflow+n.overflowX+n.overflowY);return r&&t&&(r=e.scrollHeight!==e.clientHeight||e.scrollWidth!==e.clientWidth),r}function is(e,t){let n=e;for(go(n,t)&&(n=n.parentElement);n&&!go(n,t);)n=n.parentElement;return n||document.scrollingElement||document.documentElement}function Sr(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)==null?void 0:t.platform)||window.navigator.platform):!1}function An(e){let t=null;return()=>(t==null&&(t=e()),t)}const tl=An(()=>Sr(/^Mac/i)),nl=An(()=>Sr(/^iPhone/i)),rl=An(()=>Sr(/^iPad/i)||tl()&&navigator.maxTouchPoints>1),ol=An(()=>nl()||rl()),sl=c.forwardRef(function(t,n){const{open:r,top:o,left:i,position:s,width:a,height:f,focusManagerProps:l,lockScroll:d,style:p,...u}=t,g={...p,top:o,left:i,position:s},{themeNext:h}=Ts();Za({isDisabled:!d||!r});const m=h?As:Ps;return l&&r?A.jsx(eo,{children:A.jsx(m,{applyClassesTo:"scope",children:A.jsx(_a,{...l,children:A.jsx("div",{style:g,...u,ref:n})})})}):r?A.jsx(eo,{children:A.jsx(m,{applyClassesTo:"scope",children:A.jsx("div",{style:g,...u,ref:n})})}):null}),il=c.createContext({Component:sl});function Ir(){return c.useContext(il)}const al=e=>e,ll={platform:Vo,middleware:al,animationFrame:!1},cl=c.createContext(ll);function ul(){return c.useContext(cl)}const dl=[br(),Yo({limiter:Go()})];function Er(e){const{middleware:t=dl,open:n=!1,onOpenChange:r,...o}=e,i=(u,g,h)=>{d(),r?.(u,g,h)},{platform:s,middleware:a,animationFrame:f}=ul(),{refs:l,update:d,...p}=ja({...o,middleware:a(t),open:n,onOpenChange:i,whileElementsMounted:(...u)=>oa(...u,{animationFrame:f}),platform:s});return{reference:l.setReference,floating:l.setFloating,refs:l,update:d,...p}}var fl=`.saltStatusIndicator {
  --statusIndicator-warning-color: var(--salt-status-warning-foreground-decorative);
  --statusIndicator-info-color: var(--salt-status-info-foreground-decorative);
  --statusIndicator-success-color: var(--salt-status-success-foreground-decorative);
  --statusIndicator-error-color: var(--salt-status-error-foreground-decorative);
  color: var(--saltStatusIndicator-color, var(--statusIndicator-Color));
}

.saltStatusIndicator-error {
  --statusIndicator-Color: var(--statusIndicator-error-color);
}

.saltStatusIndicator-warning {
  --statusIndicator-Color: var(--statusIndicator-warning-color);
}

.saltStatusIndicator-success {
  --statusIndicator-Color: var(--statusIndicator-success-color);
}

.saltStatusIndicator-info {
  --statusIndicator-Color: var(--statusIndicator-info-color);
}
`;const po=Pe("saltStatusIndicator"),gl=c.forwardRef(function({className:t,status:n,size:r=Ls,...o},i){const s=_e();Be({testId:"salt-status-indicator",css:fl,window:s});const a=yn(),l=`${Ms(n)}Icon`,d=a[l],p=n;return d===void 0?null:A.jsx(d,{className:be(po(),po(n),t),size:r,"aria-label":p,...o,ref:i})});function pl(e,t){const n={...e};for(const r of Object.keys(t)){const o=n[r],i=t[r];typeof o=="function"&&typeof i=="function"&&r.indexOf("on")===0?n[r]=wn(o,i):typeof o=="string"&&typeof i=="string"&&r==="className"?n[r]=be(o,i):r==="style"&&typeof o=="object"&&o!==null&&typeof i=="object"&&i!==null?n[r]={...o,...i}:n[r]=i!==void 0?i:o}return n}const ml=new Set(["ArrowDown","ArrowUp","Home","End","PageUp","PageDown"]);function ar(e){return ml.has(e)}function hl(e){return ar(e.key)?e.ctrlKey||e.metaKey?!0:e.altKey&&e.key!=="ArrowUp"&&e.key!=="ArrowDown":!1}function vl(e,t,n){switch(e){case"ArrowDown":return n.getOptionAfter(t)??n.getLastOption();case"ArrowUp":return n.getOptionBefore(t)??n.getFirstOption();case"Home":return n.getFirstOption();case"End":return n.getLastOption();case"PageUp":return n.getOptionPageAbove(t);case"PageDown":return n.getOptionPageBelow(t);default:return}}function lc(e,t,n){switch(e){case"ArrowDown":return t?n.getOptionAfter(t):n.getFirstOption();case"ArrowUp":return t?n.getOptionBefore(t):n.getLastOption();case"Home":return n.getFirstOption();case"End":return n.getLastOption();case"PageUp":{if(t)return n.getOptionPageAbove(t);const r=n.getLastOption();return r?n.getOptionPageAbove(r.data):void 0}case"PageDown":{if(t)return n.getOptionPageBelow(t);const r=n.getFirstOption();return r?n.getOptionPageBelow(r.data):void 0}default:return}}function bl(e){const t=c.useRef(e);return tt(()=>{t.current=e},[e]),c.useCallback(((...n)=>{const r=t.current;return r(...n)}),[])}var as=e=>{throw TypeError(e)},Or=(e,t,n)=>t.has(e)||as("Cannot "+n),ie=(e,t,n)=>(Or(e,t,"read from private field"),n?n.call(e):t.get(e)),Xe=(e,t,n)=>t.has(e)?as("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Wt=(e,t,n,r)=>(Or(e,t,"write to private field"),t.set(e,n),n),He=(e,t,n)=>(Or(e,t,"access private method"),n),wl=(e,t,n,r)=>({set _(o){Wt(e,t,o)},get _(){return ie(e,t,r)}}),vt,mt,$e,Ze,$t,lr,Et,Fe,Je,cr;const ls=1,cs=2,us=4;function Jn(e,t){return(e&t)!==0}class ds{constructor(t=[]){Xe(this,Fe),Xe(this,vt,new Map),Xe(this,mt,new Map),Xe(this,$e,new Map),Xe(this,Ze),Xe(this,$t,!1),Xe(this,lr,0),Xe(this,Et),Wt(this,Et,new Set(t))}subscribe(t,n){let r=ie(this,vt).get(t);return r||(r=new Set,ie(this,vt).set(t,r)),r.add(n),()=>{const o=ie(this,vt).get(t);o?.delete(n),o?.size===0&&ie(this,vt).delete(t)}}register(t){const n=ie(this,mt).get(t.id),r=this.getSnapshot(t.id);n&&He(this,Fe,cr).call(this,n.option.value,t.id);const o={generation:wl(this,lr)._++,option:t};ie(this,mt).set(t.id,o);const i=ie(this,$e).get(t.value);return i===void 0?ie(this,$e).set(t.value,t.id):typeof i=="string"?ie(this,$e).set(t.value,new Set([i,t.id])):i.add(t.id),(n!==void 0||r!==this.getSnapshot(t.id))&&He(this,Fe,Je).call(this,t.id),()=>{const s=ie(this,mt).get(t.id);if(s?.generation!==o.generation)return;const a=this.getSnapshot(t.id);ie(this,mt).delete(t.id),He(this,Fe,cr).call(this,t.value,t.id),a!==0&&He(this,Fe,Je).call(this,t.id)}}getSnapshot(t,n){var r;const o=n??((r=ie(this,mt).get(t))==null?void 0:r.option);if(!o)return 0;let i=0;return t===ie(this,Ze)&&(i|=ls,ie(this,$t)&&(i|=us)),ie(this,Et).has(o.value)&&(i|=cs),i}setActiveId(t){if(t===ie(this,Ze))return;const n=ie(this,Ze);Wt(this,Ze,t),n!==void 0&&He(this,Fe,Je).call(this,n),t!==void 0&&He(this,Fe,Je).call(this,t)}setFocusVisible(t){t!==ie(this,$t)&&(Wt(this,$t,t),ie(this,Ze)!==void 0&&He(this,Fe,Je).call(this,ie(this,Ze)))}setSelected(t){const n=ie(this,Et),r=new Set(t);Wt(this,Et,r);const o=new Set([...n,...r]);for(const i of o)if(n.has(i)!==r.has(i)){const s=ie(this,$e).get(i);if(typeof s=="string")He(this,Fe,Je).call(this,s);else if(s!==void 0)for(const a of s)He(this,Fe,Je).call(this,a)}}}vt=new WeakMap;mt=new WeakMap;$e=new WeakMap;Ze=new WeakMap;$t=new WeakMap;lr=new WeakMap;Et=new WeakMap;Fe=new WeakSet;Je=function(e){const t=ie(this,vt).get(e);if(t)for(const n of[...t])n()};cr=function(e,t){const n=ie(this,$e).get(e);if(typeof n=="string"){n===t&&ie(this,$e).delete(e);return}n?.delete(t),n?.size===1?ie(this,$e).set(e,n.values().next().value):n?.size===0&&ie(this,$e).delete(e)};var fs=e=>{throw TypeError(e)},gs=(e,t,n)=>t.has(e)||fs("Cannot "+n),ee=(e,t,n)=>(gs(e,t,"read from private field"),n?n.call(e):t.get(e)),Nt=(e,t,n)=>t.has(e)?fs("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),zt=(e,t,n,r)=>(gs(e,t,"write to private field"),t.set(e,n),n),xl=(e,t,n,r)=>({set _(o){zt(e,t,o)},get _(){return ee(e,t,r)}}),De,Se,Qe,ur,ht;function yl(e,t=n=>{Promise.resolve().then(n)}){let n=!1,r=!1;return{schedule(){n||r||(n=!0,t(()=>{n=!1,r||e()}))},cancel(){r=!0,n=!1}}}class Rl{constructor(){Nt(this,De,new Map),Nt(this,Se,[]),Nt(this,Qe,new Map),Nt(this,ur,0),Nt(this,ht,!1)}register(t,n){const r={data:t,element:n,generation:xl(this,ur)._++};ee(this,De).set(t.id,r);const o=ee(this,Qe).get(t.id);return o===void 0?(ee(this,Qe).set(t.id,ee(this,Se).length),ee(this,Se).push(r)):ee(this,Se)[o]=r,()=>{const i=ee(this,De).get(t.id);if(i?.generation!==r.generation)return;ee(this,De).delete(t.id);const s=ee(this,Qe).get(t.id);s!==void 0&&ee(this,Se)[s]===r&&(ee(this,Se)[s]=void 0,ee(this,Qe).delete(t.id),zt(this,ht,!0))}}rebuild(t){const n=[],r=new Map;for(const o of t.querySelectorAll('[role="option"]')){const i=ee(this,De).get(o.id);i?.element===o&&o.isConnected&&(r.set(i.data.id,n.length),n.push(i))}for(const o of ee(this,De).keys())r.has(o)||ee(this,De).delete(o);zt(this,Se,n),zt(this,Qe,r),zt(this,ht,!1)}getAt(t){if(!ee(this,ht))return ee(this,Se)[t];let n=0;for(const r of ee(this,Se))if(r&&ee(this,De).get(r.data.id)===r){if(n===t)return r;n++}}get length(){return ee(this,ht)?ee(this,De).size:ee(this,Se).length}indexOfId(t){const n=ee(this,Qe).get(t);if(n===void 0||!ee(this,ht))return n??-1;let r=0;for(let o=0;o<n;o++){const i=ee(this,Se)[o];i&&ee(this,De).get(i.data.id)===i&&r++}return r}indexOfValue(t){let n=0;for(const r of ee(this,Se))if(r&&ee(this,De).get(r.data.id)===r){if(r.data.value===t)return n;n++}return-1}findByData(t){const n=ee(this,De).get(t.id);return n?.data===t?n:void 0}matching(t){const n=[];for(const r of ee(this,Se))r!==void 0&&ee(this,De).get(r.data.id)===r&&t(r.data)&&n.push(r);return n}snapshot(){return ee(this,Se).filter(t=>t!==void 0)}}De=new WeakMap;Se=new WeakMap;Qe=new WeakMap;ur=new WeakMap;ht=new WeakMap;function Dr(e){return String(e)}function Cl(e,t,n,r){var o;const i=new Intl.Collator("en",{usage:"search",sensitivity:"base"}),s=r?e.findIndex(u=>u.data.value===r.value):-1,a=r?s+1:0,f=new Map;for(let u=0;u<e.length;u++){const g=e[u].data.value;(typeof g!="number"||!Number.isNaN(g))&&!f.has(g)&&f.set(g,u)}const l=t.split(""),d=l.length>0&&l.every(u=>i.compare(u,l[0])===0);let p;for(let u=0;u<e.length;u++){const g=(a+u)%e.length,h=e[g].data;if(f.get(h.value)!==g)continue;const m=n(h.value);if(i.compare(m.substring(0,t.length),t)===0)return h;p===void 0&&d&&i.compare((o=m[0])==null?void 0:o.toLowerCase(),l[0])===0&&(p=h)}return p}function Sl(e){const{open:t,defaultOpen:n,onOpenChange:r,multiselect:o,defaultSelected:i,selected:s,onSelectionChange:a,disabled:f,readOnly:l,valueToString:d=Dr}=e,p=c.useRef(null);p.current===null&&(p.current=new ds(s??i??[]));const u=p.current,g=c.useRef(null),[h,m]=c.useState(null),w=je(g,m),[x,y]=c.useState(!1),[S,C]=c.useState(!1);c.useEffect(()=>{f&&x&&(y(!1),C(!1))},[f,x]);const[E,I]=c.useState(void 0),[O,P]=er({controlled:t,default:!!n,name:"ListControl",state:"open"}),q=c.useRef(void 0),N=(L,V,K)=>{f||l||(P(L),q.current=K,L!==O&&r?.(L,V))},[z,Y]=er({controlled:s,default:i??[],name:"ListControl",state:"selected"}),M=bl((L,V)=>{if(V.disabled||l||f)return;let K=[V.value];o&&(z.includes(V.value)?K=z.filter(F=>F!==V.value):K=z.concat([V.value])),Y(K),a?.(L,K),o||N(!1)}),v=L=>{Y([]),z.length!==0&&a?.(L,[])},R=c.useRef(null);R.current===null&&(R.current=new Rl);const k=R.current,D=c.useRef(void 0);tt(()=>{u.setActiveId(E?.id)},[E?.id,u]),tt(()=>{u.setFocusVisible(S)},[S,u]),tt(()=>{u.setSelected(z)},[u,z]);const b=c.useCallback((L,V)=>{var K;const F=u.register(L),j=k.register(L,V);return(K=D.current)==null||K.call(D),()=>{var H;j(),F(),(H=D.current)==null||H.call(D)}},[u,k]);c.useEffect(()=>{if(!h)return;const L=()=>{F.takeRecords(),k.rebuild(h)},V=yl(L);D.current=V.schedule;const K=j=>j.nodeType===Node.ELEMENT_NODE&&(j.matches('[role="option"]')||j.querySelector('[role="option"]')!==null),F=new MutationObserver(j=>{j.some(({addedNodes:H,removedNodes:Q})=>Array.from(H).some(K)||Array.from(Q).some(K))&&V.schedule()});return F.observe(h,{childList:!0,subtree:!0}),L(),()=>{D.current=void 0,V.cancel(),F.disconnect()}},[h,k]);const T=c.useCallback(L=>k.getAt(L),[k]),B=c.useCallback(L=>k.indexOfValue(L.value),[k]),re=c.useCallback(L=>k.matching(L),[k]),U=c.useCallback((L,V)=>Cl(k.snapshot(),L,d,V),[k,d]),_=c.useCallback(()=>T(0),[T]),te=c.useCallback(()=>T(k.length-1),[T,k]),G=c.useCallback(L=>{const V=k.indexOfId(L.id);return T(V-1)},[T,k]),oe=c.useCallback(L=>{const V=k.indexOfId(L.id);return T(V+1)},[T,k]),fe=c.useCallback(L=>{var V;const K=g.current;let F=k.findByData(L);if(!K||!F)return;const j=K.getBoundingClientRect();let H=F.element.getBoundingClientRect();const Q=j.y-K.scrollTop,le=Math.max(0,H.y-Q+H.height-j.height);for(;F&&H&&H.y-Q>le;)F=G(F.data),H=(V=F?.element)==null?void 0:V.getBoundingClientRect();return F??_()},[_,G,k]),se=c.useCallback(L=>{const V=g.current;let K=k.findByData(L);if(!V||!K)return;const F=V.getBoundingClientRect();let j=K.element.getBoundingClientRect();const H=F.y-V.scrollTop,Q=Math.min(V.scrollHeight,j.y-H-j.height+F.height);for(;K&&j&&j.y-H<Q;)K=oe(K.data),j=K?.element.getBoundingClientRect();return K??te()},[te,oe,k]);return c.useEffect(()=>{var L;if(g.current){const V=E?(L=k.findByData(E))==null?void 0:L.element:void 0;if(!V)return;V.scrollIntoView({block:"nearest",inline:"nearest"})}},[E,k]),{multiselect:!!o,openState:O,setOpen:N,openKey:q,activeState:E,setActive:I,selectedState:z,setSelectedState:Y,select:M,clear:v,focusVisibleState:S,setFocusVisibleState:C,focusedState:x,setFocusedState:y,setListRef:w,listRef:g,register:b,getOptionAtIndex:T,getIndexOfOption:B,getOptionsMatching:re,getOptionFromSearch:U,getOptionAfter:oe,getOptionBefore:G,getOptionPageAbove:fe,getOptionPageBelow:se,getFirstOption:_,getLastOption:te,valueToString:d,disabled:f,optionStateStore:u}}const Il=Mt("ListControlContext",{openState:!1,setOpen(){},register(){return()=>{}},selectedState:[],select(){},activeState:void 0,setActive(){},multiselect:!1,focusVisibleState:!1,valueToString:Dr,disabled:!1,listRef:void 0}),El=new ds,Ol={disabled:!1,listRef:void 0,multiselect:!1,optionStateStore:El,register:()=>()=>{},select:()=>{},setActive:()=>{},valueToString:e=>String(e)},ps=Mt("ListControlOptionContext",Ol);function Dl({children:e,value:t}){return A.jsx(ps.Provider,{value:t,children:e})}function kl(){return c.useContext(ps)}function Tl({children:e,value:t}){const{optionStateStore:n,...r}=t,o=c.useMemo(()=>({disabled:t.disabled,listRef:t.listRef,multiselect:t.multiselect,optionStateStore:n,register:t.register,select:t.select,setActive:t.setActive,valueToString:t.valueToString}),[n,t.disabled,t.listRef,t.multiselect,t.register,t.select,t.setActive,t.valueToString]);return A.jsx(Il.Provider,{value:r,children:A.jsx(Dl,{value:o,children:e})})}var Al=`.saltOptionList {
  background: var(--salt-container-primary-background);
  border: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) var(--salt-selectable-borderColor-selected);
  border-radius: var(--salt-palette-corner, 0);
  overflow: hidden;
  overflow-y: auto;
  position: relative;
  z-index: var(--salt-zIndex-flyover);
  box-shadow: var(--salt-overlayable-shadow-popout);
  box-sizing: border-box;
  max-height: var(--overlay-maxHeight);
  min-width: var(--overlay-minWidth);
}

.saltOptionList-container {
  display: flex;
  flex-direction: column;
  gap: var(--salt-spacing-fixed-100);
  max-height: inherit;
  min-height: inherit;
}

.saltOptionList-collapsed {
  display: none;
}
`;const Pl=Pe("saltOptionList"),Ml=c.forwardRef(function(t,n){const{children:r,className:o,...i}=t,s=_e();return Be({testId:"salt-option-list",css:Al,window:s}),A.jsx("div",{className:be(Pl("container"),o),...i,ref:n,children:r})}),mo=Pe("saltOptionList"),Ll=c.forwardRef(function(t,n){const{children:r,className:o,collapsed:i,open:s,...a}=t,{Component:f}=Ir();return A.jsx(f,{className:be(mo(),{[mo("collapsed")]:i},o),role:"listbox",open:s,...a,ref:n,children:A.jsx(Ml,{children:r})})});function Fl(e){return e?.ownerDocument||document}function Nl(e){return Fl(e).defaultView||window}function _l({ref:e,onResize:t}){c.useEffect(()=>{const n=e?.current;if(!n)return;const r=Nl(n),o=new r.ResizeObserver(i=>{requestAnimationFrame(()=>{i.length!==0&&t()})});return o.observe(n),()=>{n&&o.unobserve(n)}},[e,t])}var Bl=`/* Style applied to the root element */
.saltScrim {
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  bottom: 0;
  height: 100%;
  display: flex;
  z-index: calc(var(--salt-zIndex-drawer) - 1);
  position: absolute;
  align-items: center;
  justify-content: center;
  background: var(--saltScrim-background, var(--salt-overlayable-background));
  -webkit-tap-highlight-color: transparent;
}

.saltScrim:focus {
  outline: none;
}

/* Style applied to the root element when fixed={true} */
.saltScrim-fixed {
  position: fixed;
}
`;const ho=Pe("saltScrim"),Wl=c.forwardRef(function({className:t,children:n,fixed:r=!1,open:o=!0,...i},s){const a=_e();return Be({testId:"salt-scrim",css:Bl,window:a}),o?A.jsx("div",{className:be(ho(),{[ho("fixed")]:r},t),"data-testid":"scrim",ref:s,...i,children:n}):null});var $l=`/* Styles applied to Dialog component */
.saltDialog {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding-top: var(--salt-spacing-300);
  padding-bottom: var(--salt-spacing-300);
  background: var(--salt-container-primary-background);
  box-shadow: var(--salt-overlayable-shadow-modal);
  overflow-y: auto;
  z-index: var(--salt-zIndex-modal);
  height: min-content;
  border: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) var(--salt-separable-tertiary-borderColor);
  box-sizing: border-box;
  border-radius: var(--salt-palette-corner, 0);
}

/* Styles applied to Dialog when a status="info" */
.saltDialog-info {
  border-color: var(--salt-status-info-borderColor);
}

/* Styles applied to Dialog when a status="error" */
.saltDialog-error {
  border-color: var(--salt-status-error-borderColor);
}

/* Styles applied to Dialog when a status="warning" */
.saltDialog-warning {
  border-color: var(--salt-status-warning-borderColor);
}

/* Styles applied to Dialog when a status="success" */
.saltDialog-success {
  border-color: var(--salt-status-success-borderColor);
}

/* Styles applied when the component mounts */
.saltDialog.saltDialog-enterAnimation {
  animation: var(--salt-animation-fade-in-center);
}

/* Styles applied when the component unmounts */
.saltDialog.saltDialog-exitAnimation {
  animation: var(--salt-animation-fade-out-back);
}

/* Pending design decision on heights and widths  */
.saltDialog-small-xs {
  width: 100%;
  max-height: 48%;
}

.saltDialog-small-sm {
  width: 56%;
  max-height: 48%;
}

.saltDialog-small-md {
  width: 36%;
  max-height: 48%;
}

.saltDialog-small-lg {
  width: 24%;
  max-height: 48%;
}

.saltDialog-small-xl {
  width: 24%;
  max-height: 48%;
}

.saltDialog-medium-xs {
  width: 100%;
  max-height: 72%;
}

.saltDialog-medium-sm {
  width: 84%;
  max-height: 72%;
}

.saltDialog-medium-md {
  width: 68%;
  max-height: 72%;
}

.saltDialog-medium-lg {
  width: 48%;
  max-height: 72%;
}

.saltDialog-medium-xl {
  width: 48%;
  max-height: 72%;
}

.saltDialog-large-xs {
  width: 100%;
  max-height: 84%;
}

.saltDialog-large-sm {
  width: 96%;
  max-height: 84%;
}

.saltDialog-large-md {
  width: 84%;
  max-height: 84%;
}

.saltDialog-large-lg {
  width: 72%;
  max-height: 84%;
}

.saltDialog-large-xl {
  width: 72%;
  max-height: 84%;
}
`;const ms=Mt("DialogContext",{status:void 0,id:void 0,setId:()=>{},dialogId:void 0,setDialogId:()=>{}}),hs=()=>c.useContext(ms),zl=({condition:e,children:t})=>e?A.jsx(Wl,{fixed:!0,children:t}):A.jsxs(A.Fragment,{children:[t," "]}),_t=Pe("saltDialog"),cc=c.forwardRef(function(t,n){var r,o;const{children:i,className:s,open:a=!1,onOpenChange:f,status:l,disableDismiss:d,size:p="medium",disableScrim:u,idProp:g,initialFocus:h,id:m,"aria-labelledby":w,...x}=t,y=_e();Be({testId:"salt-dialog",css:$l,window:y});const S=xn(m),C=Fs(),[E,I]=c.useState(!1),[O,P]=c.useState(g),{context:q,floating:N,elements:z}=Er({open:E,onOpenChange:f}),{getFloatingProps:Y}=Cr([yr(q),Rr(q,{outsidePress:!d})]),{Component:M}=Ir(),v=je(N,n);c.useEffect(()=>{if(a&&!E&&I(!0),!a&&E){const k=setTimeout(()=>{I(!1)},300);return()=>clearTimeout(k)}},[a,E]);const R=c.useMemo(()=>({status:l,id:O,setId:P,dialogId:S}),[l,O,S]);return A.jsx(ms.Provider,{value:R,children:A.jsx(zl,{condition:E&&!u,children:A.jsx(M,{id:S,open:E,role:"dialog","aria-modal":"true","aria-labelledby":be(w,O)||void 0,ref:v,width:(r=z.floating)==null?void 0:r.offsetWidth,height:(o=z.floating)==null?void 0:o.offsetHeight,lockScroll:!0,focusManagerProps:{context:q,initialFocus:h,outsideElementsInert:!0},className:be(_t(),_t(p,C),{[_t("enterAnimation")]:a,[_t("exitAnimation")]:!a,[_t(l)]:l},s),onAnimationEnd:()=>{!a&&E&&I(!1)},...Y(),...x,children:i})})})});var jl=`.saltButton.saltDialogCloseButton {
  position: absolute;
  top: 0;
  right: 0;
}
`;const Hl=Pe("saltDialogCloseButton"),uc=c.forwardRef(function({className:t,...n},r){const o=_e();Be({testId:"salt-dialog-close-button",css:jl,window:o});const{CloseIcon:i}=yn();return A.jsx(Ns,{ref:r,"aria-label":"Close dialog",appearance:"transparent",className:be(Hl(),t),...n,children:A.jsx(i,{"aria-hidden":!0})})});var Vl=`.saltDialogContent {
  color: var(--salt-content-primary-foreground);
  min-height: var(--salt-text-lineHeight);
  background: var(--salt-container-primary-background);

  margin-left: var(--salt-spacing-200);
  margin-right: var(--salt-spacing-300);
  padding-left: var(--salt-spacing-100);
  /* auto is needed for support on Safari, due to webkit bugs with flex */
  flex: 1 1 auto;
  position: relative;
  display: flex;
  box-sizing: border-box;
}

.saltDialogContent-inner {
  overflow-y: auto;
  border-top: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) transparent;
  border-bottom: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) transparent;
  max-height: inherit;
  flex: 1;
  box-sizing: border-box;
}

.saltDialogContent-overflow {
  padding-right: var(--salt-spacing-100);
}

.saltDialogContent-scrollTop.saltDialogContent-inner {
  border-top-color: var(--salt-separable-tertiary-borderColor);
}

.saltDialogContent-scrollBottom.saltDialogContent-inner {
  border-bottom-color: var(--salt-separable-tertiary-borderColor);
}
`;const Bt=Pe("saltDialogContent"),dc=c.forwardRef(function(t,n){const{children:r,className:o,...i}=t,[s,a]=c.useState(!1),[f,l]=c.useState(!0),[d,p]=c.useState(!1),u=c.useRef(null),g=()=>{h?.requestAnimationFrame(()=>{const S=u.current;S&&(a(S.scrollTop>0),l(S.scrollHeight-S.scrollTop-S.clientHeight>1))})},h=_e();Be({testId:"salt-dialog-content",css:Vl,window:h});const m=c.useCallback(()=>{u.current&&p(u.current.scrollWidth>u.current.offsetWidth||u.current.scrollHeight>u.current.offsetHeight)},[]);_l({ref:u,onResize:m}),tt(()=>{m()},[m]);const{dialogId:w,id:x}=hs(),y=d?{role:"region",tabIndex:0,"aria-labelledby":x??w}:{};return A.jsx("div",{className:be(Bt(),o),...i,ref:n,children:A.jsx("div",{onScrollCapture:g,ref:u,className:be(Bt("inner"),{[Bt("overflow")]:d,[Bt("scrollTop")]:d&&s,[Bt("scrollBottom")]:d&&f}),...y,children:r})})});c.forwardRef(function({children:t,...n},r){return A.jsx(At,{as:"h1",ref:r,...n,children:t})});const Kl=c.forwardRef(function({children:t,...n},r){return A.jsx(At,{as:"h2",ref:r,...n,children:t})});c.forwardRef(function({children:t,...n},r){return A.jsx(At,{as:"h3",ref:r,...n,children:t})});c.forwardRef(function({children:t,...n},r){return A.jsx(At,{as:"h4",ref:r,...n,children:t})});var Ul=`/* Styles applied to the root element */
.saltDialogHeader {
  padding-bottom: var(--salt-spacing-300);
  padding-left: var(--salt-spacing-300);
  padding-right: var(--salt-spacing-300);
  display: flex;
  flex-direction: row;
  gap: var(--salt-spacing-100);
  box-sizing: border-box;
}
.saltDialogHeader-header {
  margin: 0;
}

.saltDialogHeader-container {
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

.saltDialogHeader-header > .saltText {
  margin: 0;
}

.saltDialogHeader-actionsContainer {
  align-self: flex-start;
}

/* Styles applied to the status indicator icon overriding its default size */
.saltDialogHeader .saltStatusIndicator.saltIcon {
  --icon-size: var(--salt-text-h2-lineHeight);
  padding-top: calc((var(--salt-size-base) - var(--salt-text-h2-lineHeight)) / 2);
}

/* Styles applied to DialogHeader when accent={true} */
.saltDialogHeader-withAccent {
  position: relative;
}

.saltDialogHeader-withAccent::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: var(--salt-spacing-300);
  width: var(--salt-size-bar);
  background: var(--salt-sentiment-accent-background);
}
`;const gt=Pe("saltDialogHeader"),fc=c.forwardRef(function(t,n){const{className:r,description:o,disableAccent:i,actions:s,header:a,preheader:f,status:l,...d}=t,{status:p,setId:u,id:g}=hs(),h=_e();Be({testId:"salt-dialog-header",css:Ul,window:h});const m=l??p,w=xn(g);return c.useEffect(()=>{w&&u?.(w)},[w,u]),A.jsxs("div",{className:be(gt(),{[gt("withAccent")]:!i&&!m,[gt(m??"")]:!!m},r),ref:n,...d,children:[m&&A.jsx(gl,{status:m}),A.jsxs("div",{className:gt("container"),children:[A.jsxs(Kl,{id:w,className:gt("header"),children:[f&&A.jsx(At,{color:"primary",children:f}),a]}),o&&A.jsx(At,{color:"secondary",className:gt("description"),children:o})]}),s&&A.jsx("div",{className:gt("actionsContainer"),children:s})]})});var ql=`.saltDropdown {
  all: unset;
  box-sizing: border-box;
  min-width: 4em;
  width: 100%;
  background: var(--dropdown-background);
  min-height: var(--salt-size-base);
  border-radius: var(--salt-palette-corner-weak, 0);
  display: inline-flex;
  align-items: center;
  padding: 0 var(--salt-spacing-100);
  color: var(--dropdown-color);
  font-family: var(--salt-text-fontFamily);
  font-size: var(--salt-text-fontSize);
  font-weight: var(--salt-text-fontWeight);
  line-height: var(--salt-text-lineHeight);
  letter-spacing: var(--salt-text-letterSpacing);
  position: relative;
  overflow: hidden;
}

.saltDropdown:hover {
  cursor: var(--salt-cursor-hover);
}

.saltDropdown-bordered.saltDropdown {
  border: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) var(--dropdown-borderColor);
}

.saltDropdown-bordered.saltDropdown:hover {
  border-style: var(--salt-borderStyle-solid);
  border-color: var(--dropdown-borderColor-hover);
}

/* Style applied if focused or active when \`bordered={true}\` */
.saltDropdown-bordered.saltDropdown:focus,
.saltDropdown-bordered.saltDropdown:focus:hover {
  border-style: var(--salt-borderStyle-solid);
  border-color: var(--dropdown-borderColor-active);
}

/* Styling when focused if \`disabled={true}\` or \`readOnly={true}\` when \`bordered={true}\` */
.saltDropdown-bordered.saltDropdown[aria-readonly="true"],
.saltDropdown-bordered.saltDropdown[aria-readonly="true"]:hover {
  border-style: var(--salt-borderStyle-solid);
  border-color: var(--salt-editable-borderColor-readonly);
}

.saltDropdown-bordered.saltDropdown-disabled,
.saltDropdown-bordered.saltDropdown-disabled:hover {
  border-style: var(--salt-borderStyle-solid);
  border-color: var(--salt-editable-borderColor-disabled);
}

.saltDropdown-activationIndicator {
  left: 0;
  bottom: 0;
  width: 100%;
  position: absolute;
  border-bottom: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) var(--dropdown-borderColor);
}

.saltDropdown:hover .saltDropdown-activationIndicator {
  border-bottom-style: var(--salt-borderStyle-solid);
  border-bottom-color: var(--dropdown-borderColor-hover);
}

.saltDropdown:focus .saltDropdown-activationIndicator,
.saltDropdown:focus:hover .saltDropdown-activationIndicator {
  border-bottom: var(--salt-size-fixed-200) var(--salt-borderStyle-solid) var(--dropdown-borderColor-active);
}

.saltDropdown[aria-readonly="true"] .saltDropdown-activationIndicator,
.saltDropdown[aria-readonly="true"]:hover .saltDropdown-activationIndicator {
  border-bottom-style: var(--salt-borderStyle-solid);
  border-bottom-color: var(--salt-editable-borderColor-readonly);
}

.saltDropdown-disabled .saltDropdown-activationIndicator,
.saltDropdown-disabled:hover .saltDropdown-activationIndicator {
  border-bottom-style: var(--salt-borderStyle-solid);
  border-bottom-color: var(--salt-editable-borderColor-disabled);
}

.saltDropdown-bordered .saltDropdown-activationIndicator,
.saltDropdown-bordered.saltDropdown[aria-readonly="true"] .saltDropdown-activationIndicator,
.saltDropdown-bordered.saltDropdown-disabled:hover .saltDropdown-activationIndicator {
  border-bottom-width: 0;
}

.saltDropdown-bordered.saltDropdown:focus .saltDropdown-activationIndicator {
  /* Activation indicator width minus the border from the input. */
  border-bottom-width: var(--salt-size-fixed-100);
}

.saltDropdown-primary {
  --dropdown-color: var(--salt-content-primary-foreground);
  --dropdown-background: var(--salt-editable-primary-background);
  --dropdown-background-disabled: var(--salt-editable-primary-background-disabled);
  --dropdown-background-readonly: var(--salt-editable-background-readonly);
  --dropdown-borderColor: var(--salt-editable-borderColor);
  --dropdown-borderColor-active: var(--salt-editable-borderColor-active);
  --dropdown-borderColor-hover: var(--salt-editable-borderColor-hover);
  --dropdown-outlineColor: var(--salt-focused-outlineColor);
}

.saltDropdown-secondary {
  --dropdown-color: var(--salt-content-primary-foreground);
  --dropdown-background: var(--salt-editable-secondary-background);
  --dropdown-background-disabled: var(--salt-editable-secondary-background-disabled);
  --dropdown-background-readonly: var(--salt-editable-background-readonly);
  --dropdown-borderColor: var(--salt-editable-borderColor);
  --dropdown-borderColor-active: var(--salt-editable-borderColor-active);
  --dropdown-borderColor-hover: var(--salt-editable-borderColor-hover);
  --dropdown-outlineColor: var(--salt-focused-outlineColor);
}

.saltDropdown-tertiary {
  --dropdown-color: var(--salt-content-primary-foreground);
  --dropdown-background: var(--salt-editable-tertiary-background);
  --dropdown-background-disabled: var(--salt-editable-tertiary-background-disabled);
  --dropdown-background-readonly: var(--salt-editable-background-readonly);
  --dropdown-borderColor: var(--salt-editable-borderColor);
  --dropdown-borderColor-active: var(--salt-editable-borderColor-active);
  --dropdown-borderColor-hover: var(--salt-editable-borderColor-hover);
  --dropdown-outlineColor: var(--salt-focused-outlineColor);
}

.saltDropdown-error {
  --dropdown-color: var(--salt-content-primary-foreground);
  --dropdown-background: var(--salt-status-error-background);
  --dropdown-background-readonly: var(--salt-status-error-background);
  --dropdown-borderColor: var(--salt-status-error-borderColor);
  --dropdown-borderColor-active: var(--salt-status-error-borderColor);
  --dropdown-borderColor-hover: var(--salt-status-error-borderColor);
  --dropdown-outlineColor: var(--salt-status-error-borderColor);
}

.saltDropdown-warning {
  --dropdown-color: var(--salt-content-primary-foreground);
  --dropdown-background: var(--salt-status-warning-background);
  --dropdown-background-readonly: var(--salt-status-warning-background);
  --dropdown-borderColor: var(--salt-status-warning-borderColor);
  --dropdown-borderColor-active: var(--salt-status-warning-borderColor);
  --dropdown-borderColor-hover: var(--salt-status-warning-borderColor);
  --dropdown-outlineColor: var(--salt-status-warning-borderColor);
}

.saltDropdown-success {
  --dropdown-color: var(--salt-content-primary-foreground);
  --dropdown-background: var(--salt-status-success-background);
  --dropdown-background-readonly: var(--salt-status-success-background);
  --dropdown-borderColor: var(--salt-status-success-borderColor);
  --dropdown-borderColor-active: var(--salt-status-success-borderColor);
  --dropdown-borderColor-hover: var(--salt-status-success-borderColor);
  --dropdown-outlineColor: var(--salt-status-success-borderColor);
}

.saltDropdown:focus,
.saltDropdown:focus:hover {
  cursor: var(--salt-cursor-hover);
  outline: var(--salt-focused-outlineWidth) var(--salt-focused-outlineStyle) var(--dropdown-outlineColor);
}

.saltDropdown.saltDropdown[aria-readonly="true"] {
  background: var(--dropdown-background-readonly);
  cursor: var(--salt-cursor-readonly);
}

.saltDropdown.saltDropdown:disabled,
.saltDropdown.saltDropdown:disabled:hover {
  background: var(--dropdown-background-disabled);
  cursor: var(--salt-cursor-disabled);
  color: var(--salt-content-primary-foreground-disabled);
}

.saltDropdown-content {
  flex: 1;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  text-wrap: nowrap;
}

.saltDropdown-placeholder {
  color: var(--salt-content-secondary-foreground);
  font-weight: var(--salt-text-fontWeight-lighter);
}

.saltDropdown-startAdornmentContainer {
  margin-right: var(--salt-spacing-100);
}

.saltDropdown .saltDropdown-toggle {
  margin-left: var(--salt-spacing-100);
}
`;const Ne=Pe("saltDropdown");function Yl({open:e}){const{CollapseIcon:t,ExpandIcon:n}=yn();return e?A.jsx(t,{className:Ne("toggle"),"aria-hidden":!0}):A.jsx(n,{className:Ne("toggle"),"aria-hidden":!0})}const gc=c.forwardRef(function(t,n){var r,o;const{className:i,props:s}=_s("saltDropdown",t),{"aria-labelledby":a,"aria-describedby":f,children:l,disabled:d,emptyReadOnlyMarker:p="—",readOnly:u,multiselect:g,onSelectionChange:h,selected:m,defaultSelected:w,defaultOpen:x,value:y,onOpenChange:S,open:C,placeholder:E,startAdornment:I,required:O,variant:P="primary",validationStatus:q,onKeyDown:N,onFocus:z,onBlur:Y,valueToString:M=Dr,bordered:v=!1,OverlayProps:R,...k}=s,D=_e();Be({testId:"salt-dropdown",css:ql,window:D});const{a11yProps:{"aria-describedby":b,"aria-labelledby":T}={},disabled:B,readOnly:re,necessity:U,validationStatus:_}=Bs(),te=!!d||B,G=!!u||re,oe=_??q,fe=U?["required","asterisk"].includes(U):O,se=Sl({open:C,defaultOpen:x,onOpenChange:S,multiselect:g,defaultSelected:w,selected:m,onSelectionChange:h,valueToString:M}),{activeState:L,setActive:V,openState:K,setOpen:F,openKey:j,getIndexOfOption:H,getOptionsMatching:Q,getOptionFromSearch:le,getFirstOption:J,getLastOption:pe,getOptionAfter:me,getOptionBefore:ve,getOptionPageAbove:ke,getOptionPageBelow:$,selectedState:Z,select:W,setFocusVisibleState:ne,focusedState:ae,setFocusedState:de,listRef:Ye,setListRef:yt}=se,dt=Z.map(X=>M(X)).join(", "),Ce=y??dt,Me=G&&Ce===""?p:Ce,Rt=(X,ge,Ge)=>{G||Ge==="focus"&&X||F(X)},{x:Xt,y:Zt,strategy:Ct,elements:Le,floating:St,reference:Pn,context:It}=Er({open:K&&!G&&c.Children.count(l)>0,onOpenChange:Rt,placement:"bottom-start",middleware:[qo(1),Xo({apply({rects:X,elements:ge,availableHeight:Ge}){ge.floating.style.setProperty("--overlay-minWidth",`${X.reference.width}px`),ge.floating.style.setProperty("--overlay-maxHeight",`max(calc((var(--salt-size-base) + var(--salt-spacing-100)) * 5), calc(${Ge}px - var(--salt-spacing-100)))`)}}),br({fallbackStrategy:"initialPlacement"})]}),{getReferenceProps:Jt,getFloatingProps:ys}=Cr([Rr(It),Ha(It),yr(It)]),Tr=c.useRef(null),Rs=je(Pn,Tr),Cs=je(Rs,n),Qt=c.useRef(""),Mn=c.useRef(void 0),Ss=X=>{Mn.current&&clearTimeout(Mn.current),Qt.current+=X.key,Mn.current=window.setTimeout(()=>{Qt.current=""},500),K||F(!0,"input");const ge=le(Qt.current,L);ge&&(V(ge),ne(!0))},Is=X=>{var ge;if(N?.(X),G||hl(X))return;if(!K){if(X.key==="ArrowDown"||X.key==="ArrowUp"||X.key==="Home"||X.key==="End"){X.preventDefault(),F(!0,void 0,X.key);return}if(ar(X.key))return}X.key.length===1&&!X.ctrlKey&&!X.metaKey&&!X.altKey&&(X.preventDefault(),X.stopPropagation(),Ss(X));const Ge=L??((ge=J())==null?void 0:ge.data);if(Ge===void 0)return;const Ln=ar(X.key);Ln&&X.preventDefault();const Fn=Ln?vl(X.key,Ge,{getFirstOption:J,getLastOption:pe,getOptionAfter:me,getOptionBefore:ve,getOptionPageAbove:ke,getOptionPageBelow:$}):void 0;switch(X.key){case"Enter":case" ":if(K&&L?.disabled||Qt.current.trim().length>0&&X.key===" "){X.preventDefault();return}if(!K||!L)return;X.preventDefault(),W(X,L);break;case"Tab":!g&&L&&W(X,L);break}Fn&&Fn.data.id!==L?.id&&(V(Fn.data),ne(!0))},Es=X=>{de(!0),z?.(X)},Os=X=>{de(!1),(!Ye.current||!Ye.current.contains(X.relatedTarget))&&Y?.(X)},Ds=()=>{ne(!1)},Ar=()=>{var X;(X=Tr.current)==null||X.focus()};c.useEffect(()=>{if(!K){V(void 0);return}const X=L?H(L):-1;let ge;X>=0||(j.current==="Home"?ge=J():j.current==="End"&&(ge=pe()),!ge&&Z.length>0&&(ge=Q(Ge=>Ge.value===Z[0]).pop()),ge||(j.current==="ArrowDown"?ge=J():j.current==="ArrowUp"&&(ge=pe())),ge||(ge=J()),V(ge?.data))},[K,l]);const Pr=xn(),ks=je(yt,St);return A.jsxs(Tl,{value:se,children:[A.jsxs("button",{className:be(Ne(),Ne(P),{[Ne("disabled")]:te,[Ne(oe??"")]:oe,[Ne("bordered")]:v},i),ref:Cs,role:"combobox",type:"button",disabled:te,"aria-readonly":G?"true":void 0,"aria-required":fe?"true":void 0,"aria-expanded":K,"aria-activedescendant":L?.id,"aria-labelledby":be(T,a)||void 0,"aria-describedby":be(b,f)||void 0,"aria-controls":K?Pr:void 0,...Jt({onKeyDown:Is,onFocus:Es,onBlur:Os,...k}),children:[I&&A.jsx("div",{className:Ne("startAdornmentContainer"),children:I}),A.jsx("span",{className:be(Ne("content"),{[Ne("placeholder")]:!Me}),children:Me||E}),!te&&oe&&A.jsx(Ws,{status:oe}),!G&&A.jsx(Yl,{open:K}),A.jsx("div",{className:Ne("activationIndicator")})]}),A.jsx(Ll,{"aria-multiselectable":g,open:(K||ae)&&!G&&c.Children.count(l)>0,...ys({onMouseOver:Ds,onFocus:Ar,onClick:Ar,...R}),left:Xt??0,top:Zt??0,position:Ct,width:(r=Le.floating)==null?void 0:r.offsetWidth,height:(o=Le.floating)==null?void 0:o.offsetHeight,ref:ks,id:Pr,collapsed:!K,children:l})]})});function Gl(e){return!e||!c.isValidElement(e)?null:Object.prototype.propertyIsEnumerable.call(e.props,"ref")?e.props.ref:e.ref}const vs=Mt("MenuContext",{openState:!1,getReferenceProps:()=>({}),getFloatingProps:()=>({}),getPanelPosition:()=>({}),getItemProps:()=>({}),activeIndex:null,elementsRef:{current:[]},focusInside:!1,setFocusInside:()=>{},isNested:!1,triggerDisabled:!1,setTriggerDisabled:()=>{}});function kr(){return c.useContext(vs)}function vo(e){const{children:t,defaultOpen:n,open:r,onOpenChange:o,placement:i,getVirtualElement:s}=e,a=ct(),f=Ca(),l=ut(),d=c.useRef([]),[p,u]=er({controlled:r,default:!!n,name:"ListControl",state:"open"}),g=c.useCallback(R=>{u(R),o?.(R)},[o]),[h,m]=c.useState(null),[w,x]=c.useState(!1),[y,S]=c.useState(!1),C=a!=null,{x:E,y:I,strategy:O,elements:P,refs:q,context:N}=Er({nodeId:f,open:p,onOpenChange:g,strategy:s?"fixed":"absolute",placement:i??(C||s?"right-start":"bottom-start"),middleware:[qo(C?{crossAxis:-1,mainAxis:2}:s?0:1),br({}),Yo({limiter:Go()}),Xo({apply({elements:R,availableHeight:k}){Object.assign(R.floating.style,{maxHeight:`${k}px`})}})]});tt(()=>{s&&q.setPositionReference(s())},[s,q]);const{getReferenceProps:z,getFloatingProps:Y,getItemProps:M}=Cr([Ea(N,{enabled:C&&!w&&!y,handleClose:Ga({blockPointerEvents:!0})}),yr(N,{event:"mousedown",toggle:!C,ignoreMouse:C}),qa(N,{role:"menu"}),Rr(N,{bubbles:!0}),Ka(N,{listRef:d,activeIndex:h,nested:C,onNavigate:m})]),v=()=>{var R,k;return{top:I??0,left:E??0,position:O,width:(R=P.floating)==null?void 0:R.offsetWidth,height:(k=P.floating)==null?void 0:k.offsetHeight}};return c.useEffect(()=>{if(!l)return;function R(){g(!1)}return l.events.on("click",R),()=>{l.events.off("click",R)}},[l,g]),A.jsx(Sa,{id:f,children:A.jsx(vs.Provider,{value:{openState:p,getReferenceProps:z,getFloatingProps:Y,refs:q,getPanelPosition:v,getItemProps:M,activeIndex:h,context:N,elementsRef:d,focusInside:w,setFocusInside:x,isNested:C,triggerDisabled:y,setTriggerDisabled:S},children:t})})}function pc(e){return ct()===null?A.jsx(Ia,{children:A.jsx(vo,{...e})}):A.jsx(vo,{...e})}var Xl=`.saltMenuItem {
  color: var(--salt-content-primary-foreground);
  background: var(--salt-selectable-background);
  font-size: var(--salt-text-fontSize);
  font-weight: var(--salt-text-fontWeight);
  font-family: var(--salt-text-fontFamily);
  line-height: var(--salt-text-lineHeight);
  letter-spacing: var(--salt-text-letterSpacing);
  min-height: calc(var(--salt-size-base) + var(--salt-spacing-100));
  padding: calc(var(--salt-spacing-100) + var(--salt-spacing-25)) var(--salt-spacing-100);
  display: flex;
  gap: var(--salt-spacing-100);
  position: relative;
  cursor: var(--salt-cursor-hover);
  box-sizing: border-box;
  flex-shrink: 0;
}

.saltMenuItem:focus-visible {
  outline: var(--salt-focused-outline);
  outline-offset: calc(var(--salt-size-fixed-100) * -2);
}

.saltMenuItem:hover {
  outline: none;
}

.saltMenuItem:hover,
.saltMenuItem:focus-visible {
  background: var(--salt-selectable-background-hover);
}

.saltMenuItem:active {
  background: var(--salt-selectable-background-selected);
  box-shadow:
    0 calc(var(--salt-size-fixed-100) * -1) 0 0 var(--salt-selectable-borderColor-selected),
    0 var(--salt-size-fixed-100) 0 0 var(--salt-selectable-borderColor-selected);
}

.saltMenuItem[aria-disabled="true"],
.saltMenuItem[aria-disabled="true"]:active {
  opacity: 0.4;
  background: var(--salt-selectable-background);
  color: var(--salt-content-primary-foreground);
  cursor: var(--salt-cursor-disabled);
  box-shadow: none;
}

.saltMenuItem-blurActive {
  z-index: var(--salt-zIndex-default);
  background: var(--salt-selectable-background-selected);
  box-shadow:
    0 calc(var(--salt-size-fixed-100) * -1) 0 0 var(--salt-selectable-borderColor-selected),
    0 var(--salt-size-fixed-100) 0 0 var(--salt-selectable-borderColor-selected);
}

/* TODO: Find a better way of doing this */
.saltMenuItem .saltIcon:not(.saltCheckboxIcon-icon) {
  min-height: var(--salt-text-lineHeight);
}

.saltMenuItem-expandIcon.saltIcon {
  margin-left: auto;
}
`;const bs=Mt("MenuPanelContext",{activeIndex:null,getItemProps:()=>({}),setFocusInside:()=>{}});function ws(){return c.useContext(bs)}const xs=Mt("MenuTriggerContext",{triggersSubmenu:!1,blurActive:!1});function Zl(){return c.useContext(xs)}const Qn=Pe("saltMenuItem"),mc=c.forwardRef(function(t,n){const{children:r,className:o,disabled:i,onClick:s,onFocus:a,onKeyDown:f,...l}=t,{triggersSubmenu:d,blurActive:p}=Zl(),{setTriggerDisabled:u}=kr(),{ExpandGroupIcon:g}=yn(),{activeIndex:h,getItemProps:m,setFocusInside:w}=ws(),x=va(),y=ut(),S=x.index===h,C=_e();Be({testId:"salt-menu-item",css:Xl,window:C});const E=je(n,x.ref);return c.useEffect(()=>{u(!!i)},[i,u]),A.jsxs("div",{className:be(Qn(),{[Qn("blurActive")]:p},o),role:"menuitem","aria-disabled":i||void 0,...m({tabIndex:i?void 0:S?0:-1,onKeyDown(I){const O=I.currentTarget;if(f?.(I),(I.key===" "||I.key==="Enter")&&!d&&!i){I.preventDefault();const{view:P,...q}=I;queueMicrotask(()=>{O.dispatchEvent(new window.MouseEvent("click",q))})}},onClick(I){i||(s?.(I),d||y?.events.emit("click"))},onFocus(I){a?.(I),w(!0)},...l}),ref:E,children:[r,d&&A.jsx(g,{className:Qn("expandIcon"),"aria-hidden":!0})]})});var Jl=`.saltMenuPanel {
  background: var(--salt-container-primary-background);
  border: var(--salt-size-fixed-100) var(--salt-borderStyle-solid) var(--salt-selectable-borderColor-selected);
  overflow: hidden;
  overflow-y: auto;
  min-width: 10em;
  position: relative;
  z-index: var(--salt-zIndex-flyover);
  box-shadow: var(--salt-overlayable-shadow-popout);
  box-sizing: border-box;
  border-radius: var(--salt-palette-corner, 0);
}

.saltMenuPanel-container {
  display: flex;
  flex-direction: column;
  gap: var(--salt-spacing-fixed-100);
  max-height: inherit;
  min-height: inherit;
}

.saltMenuPanel:focus-visible {
  outline: none;
}
`;const Ql=c.forwardRef(function(t,n){const{children:r,...o}=t,i=_e();return Be({testId:"salt-menu-panel",css:Jl,window:i}),A.jsx("div",{ref:n,...o,children:r})}),ec=Pe("saltMenuPanel"),hc=c.forwardRef(function(t,n){const{children:r,className:o,...i}=t,{Component:s}=Ir(),{getItemProps:a,openState:f,getFloatingProps:l,refs:d,getPanelPosition:p,context:u,elementsRef:g,activeIndex:h,setFocusInside:m,isNested:w}=kr(),x=je(n,d?.setFloating);return A.jsx(bs.Provider,{value:{activeIndex:h,getItemProps:a,setFocusInside:m},children:A.jsx(ha,{elementsRef:g,children:A.jsx(s,{open:f,role:"menu",...l(),...p(),className:be(ec(),o),focusManagerProps:u?{context:u,initialFocus:w?-1:0,returnFocus:!w,modal:!1}:void 0,tabIndex:-1,ref:x,...i,children:A.jsx(Ql,{children:r})})})})}),vc=c.forwardRef(function(t,n){const{children:r,...o}=t,{getReferenceProps:i,refs:s,setFocusInside:a,focusInside:f,openState:l}=kr(),{setFocusInside:d}=ws(),p=je(Gl(r),s?.setReference),u=je(p,n);return!r||!c.isValidElement(r)?A.jsx(A.Fragment,{children:r}):A.jsx(xs.Provider,{value:{triggersSubmenu:!0,blurActive:f&&l},children:c.cloneElement(r,{...pl(i({onFocus(){d(!0),a(!1)},...o}),r.props),ref:u})})});var tc=`.saltOption {
  color: var(--salt-content-primary-foreground);
  background: var(--salt-selectable-background);
  font-size: var(--salt-text-fontSize);
  font-weight: var(--salt-text-fontWeight);
  font-family: var(--salt-text-fontFamily);
  line-height: var(--salt-text-lineHeight);
  letter-spacing: var(--salt-text-letterSpacing);
  min-height: calc(var(--salt-size-base) + var(--salt-spacing-100));
  padding: calc(var(--salt-spacing-100) + var(--salt-spacing-25)) var(--salt-spacing-100);
  display: flex;
  gap: var(--salt-spacing-100);
  position: relative;
  cursor: var(--salt-cursor-hover);
  box-sizing: border-box;
  flex-shrink: 0;
}

.saltOption-active {
  background: var(--salt-selectable-background-hover);
}

.saltOption-focusVisible {
  outline: var(--salt-focused-outline);
  outline-offset: calc(var(--salt-size-fixed-100) * -2);
}

.saltOption:hover {
  background: var(--salt-selectable-background-hover);
}

.saltOption[aria-disabled="true"] {
  color: var(--salt-content-primary-foreground);
  background: var(--salt-selectable-background);
  opacity: 0.4;

  cursor: var(--salt-cursor-disabled);
}

.saltOption[aria-selected="true"] {
  z-index: var(--salt-zIndex-default);
  background: var(--salt-selectable-background-selected);
  box-shadow:
    calc(var(--salt-size-fixed-100) * -2) 0 0 0 var(--salt-selectable-background-hover),
    calc(var(--salt-size-fixed-100) * -1) 0 0 var(--salt-size-fixed-100) var(--salt-selectable-borderColor-selected),
    0 calc(var(--salt-size-fixed-100) * -1) 0 var(--salt-selectable-borderColor-selected);
}

/* Align the checkbox with the first line of text */
.saltOption-checkbox {
  margin: calc((var(--salt-text-lineHeight) - var(--salt-size-selectable)) / 2) 0;
}

/* TODO: Find a better way of doing this */
.saltOption .saltIcon:not(.saltCheckboxIcon-icon) {
  min-height: var(--salt-text-lineHeight);
}
`;const sn=Pe("saltOption"),nc=c.forwardRef(function(t,n){const{className:r,children:o,disabled:i,onClick:s,id:a,value:f,...l}=t,d=_e();Be({testId:"salt-option",css:tc,window:d});const p=c.useRef(null),u=xn(a),{setActive:g,multiselect:h,select:m,register:w,optionStateStore:x,valueToString:y,disabled:S,listRef:C}=kl(),E=i||S,I=String(u),{getSnapshot:O,optionValue:P,subscribe:q}=c.useMemo(()=>{const D={id:I,disabled:!!E,value:f};return{getSnapshot:()=>x.getSnapshot(I,D),optionValue:D,subscribe:b=>x.subscribe(I,b)}},[I,E,f,x]),N=zs.useSyncExternalStore(q,O,O),z=Jn(N,cs),Y=Jn(N,ls),M=Jn(N,us),v=D=>{var b;E||u===void 0||((b=C?.current)==null||b.focus({preventScroll:!0}),g(P),m(D,P),s?.(D))},R=()=>{g(P)};tt(()=>{if(u&&p.current)return w(P,p.current)},[P,u,w]);const k=je(p,n);return A.jsxs("div",{"aria-disabled":E?"true":void 0,"aria-selected":z,className:be(sn(),{[sn("active")]:Y,[sn("focusVisible")]:M},r),ref:k,role:"option",id:u,onClick:v,onMouseOver:R,tabIndex:-1,...l,children:[h&&A.jsx($s,{checked:z,className:sn("checkbox")}),o??y(f)]})}),bc=c.memo(nc);export{Ha as A,Ll as B,hl as C,gc as D,ar as E,lc as F,Wl as G,Kl as H,ic as I,qa as J,Go as K,Tl as L,pc as M,ac as N,bc as O,Gl as P,On as Q,Fl as R,gl as S,Ea as T,Ga as U,vc as a,hc as b,mc as c,cc as d,fc as e,uc as f,dc as g,Er as h,Cr as i,yr as j,Rr as k,Ir as l,br as m,Yo as n,qo as o,Nl as p,sa as q,aa as r,Xo as s,oa as t,bl as u,ua as v,pl as w,_l as x,Sl as y,Dr as z};
