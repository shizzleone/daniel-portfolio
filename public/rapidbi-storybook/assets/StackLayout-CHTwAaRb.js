import{r as S,l as F,m as $,n as j,j as C,g as W}from"./iframe--_k5KNLb.js";import{r as e,m as z}from"./Switch-XczNmwRq.js";function v(t){return t===void 0||typeof t=="string"?t:`calc(var(--salt-spacing-100) * ${t})`}var E=`/* Default variables applied to the root element */
.saltFlexLayout {
  --flexLayout-layout-display: flex;
  --flexLayout-direction: row;
  --flexLayout-wrap: nowrap;
  --flexLayout-justify: flex-start;
  --flexLayout-align: stretch;
  --flexLayout-separator: var(--salt-size-fixed-100);
}

/* Style applied to the root element */
.saltFlexLayout {
  gap: var(--flexLayout-gap);
  margin: var(--flexLayout-margin);
  padding: var(--flexLayout-padding);
  display: var(--flexLayout-layout-display);
  flex-direction: var(--flexLayout-direction);
  flex-wrap: var(--flexLayout-wrap);
  justify-content: var(--flexLayout-justify);
  align-items: var(--flexLayout-align);
  box-sizing: border-box;
}

.saltFlexLayout-separator {
  gap: calc(var(--flexLayout-gap) * 2);
}

.saltFlexLayout-separator > * {
  position: relative;
}
.saltFlexLayout-separator > *:not(:last-child)::after {
  position: absolute;
  display: block;
  content: "";
  background-color: var(--salt-separable-secondary-borderColor);
}

/* Row separator */

.saltFlexLayout-separator-row > *:not(:last-child)::after {
  height: 100%;
}

.saltFlexLayout-separator-row > *:not(:last-child)::after {
  width: var(--flexLayout-separator);
  top: 0;
}
.saltFlexLayout-separator-row-start > *:not(:last-child)::after {
  right: 0;
}
.saltFlexLayout-separator-row-center > *:not(:last-child)::after {
  right: calc(var(--flexLayout-gap) * -1);
}
.saltFlexLayout-separator-row-end > *:not(:last-child)::after {
  right: calc(var(--flexLayout-gap) * -2);
}

/* Column separator */
.saltFlexLayout-separator-column > *:not(:last-child)::after {
  width: 100%;
}

.saltFlexLayout-separator-column > *:not(:last-child)::after {
  height: var(--flexLayout-separator);
  left: 0;
  width: 100%;
}
.saltFlexLayout-separator-column-start > *:not(:last-child)::after {
  bottom: 0;
}
.saltFlexLayout-separator-column-center > *:not(:last-child)::after {
  bottom: calc(var(--flexLayout-gap) * -1);
}
.saltFlexLayout-separator-column-end > *:not(:last-child)::after {
  bottom: calc(var(--flexLayout-gap) * -2);
}
`;const p=z("saltFlexLayout");function b(t){return t==="start"||t==="end"?`flex-${t}`:t}const G=S.forwardRef(function({as:y,align:d,children:L,className:r,direction:x="row",gap:s=3,margin:g=0,padding:h=0,justify:w,separators:l,style:c,wrap:a=!1,...o},i){const m=F();$({testId:"salt-flex-layout",css:E,window:m});const B=y||"div",u=l===!0?"center":l,{matchedBreakpoints:n}=j(),R=e(s,n),D=e(g,n),N=e(h,n),k=e(x,n),A=e(a,n),I={...c,"--flexLayout-align":b(d),"--flexLayout-direction":k,"--flexLayout-gap":v(R),"--flexLayout-margin":v(D),"--flexLayout-padding":v(N),"--flexLayout-justify":b(w),"--flexLayout-wrap":A?"wrap":"nowrap"};return C.jsx(B,{className:W(p(),{[p("separator")]:u&&!a,[p(`separator-${k??"row"}-${u??"center"}`)]:u&&!a,[p(`separator-${k??"row"}`)]:u&&!a},r),ref:i,style:I,...o,children:L})});var P=`/* Default variables applied to the root element */
.saltStackLayout {
  --stackLayout-separator-weight: var(--salt-size-fixed-100, 1);
}

.saltStackLayout-separator > * {
  position: relative;
}
.saltStackLayout-separator > *:not(:last-child)::after {
  position: absolute;
  display: block;
  content: "";
  background-color: var(--salt-separable-secondary-borderColor);
}

/*
 * Seperator offset based on seperator alignment
 * var(--stackLayout-separator-weight) is used to take into account the thickness of the seperator,so even at higher weights it will be at the start/center/end
*/
.saltStackLayout-separator-start {
  --stackLayout-seperator-offset: calc(var(--stackLayout-separator-weight) * -1);
}
.saltStackLayout-separator-center {
  --stackLayout-seperator-offset: calc((var(--stackLayout-gap) * -0.5) + (var(--stackLayout-separator-weight) * -0.5));
}
.saltStackLayout-separator-end {
  --stackLayout-seperator-offset: calc(var(--stackLayout-gap) * -1);
}

/* When alignment is 'row' and we have seperators (last child doesn't need a seperator) */
.saltStackLayout-row.saltStackLayout-separator > *:not(:last-child)::after {
  height: 100%;
  width: var(--stackLayout-separator-weight);
  right: var(--stackLayout-seperator-offset);
  top: 0;
}

/* When alignment is 'column' and we have seperators (last child doesn't need a seperator) */
.saltStackLayout-column.saltStackLayout-separator > *:not(:last-child)::after {
  width: 100%;
  height: var(--stackLayout-separator-weight);
  bottom: var(--stackLayout-seperator-offset);
  left: 0;
}
`;const f=z("saltStackLayout");function _(t){return t===void 0||typeof t=="string"?t:`calc(var(--salt-spacing-100) * ${t})`}const q=S.forwardRef(function({as:y,children:d,className:L,direction:r="column",gap:x=3,separators:s,style:g,...h},w){const l=F();$({testId:"salt-stack-layout",css:P,window:l});const{matchedBreakpoints:c}=j(),a=e(x,c),o=s===!0?"center":s,i=e(r,c),m={...g,"--stackLayout-gap":_(a)};return C.jsx(G,{as:y,className:W(f(),{[f(i??"")]:i,[f("separator")]:!!o,[o?f(`separator-${o}`):""]:o},L),ref:w,direction:r,style:m,wrap:!1,gap:a,...h,children:d})});export{G as F,q as S,v as p};
