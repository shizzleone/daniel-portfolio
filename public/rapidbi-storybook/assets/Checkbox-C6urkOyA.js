import{r as p,l as S,m as I,j as l,g as o,o as Q,f as U}from"./iframe--_k5KNLb.js";import{m as R,u as Z,b as ee,c as ne,d as te}from"./Switch-XczNmwRq.js";var ae=`/* Style applied to the root element */
.saltBadge {
  display: inline-flex;
  position: relative;
  flex-shrink: 0;
  vertical-align: middle;
  --badge-size: var(--salt-text-notation-lineHeight);
}

.saltBadge-badge {
  /* Should this vary according to touch size */
  padding-left: var(--salt-spacing-50);
  padding-right: var(--salt-spacing-50);
  height: var(--badge-size);
  min-width: var(--badge-size);
  border-radius: var(--salt-palette-corner-strongest, 9999px);

  white-space: nowrap;
  z-index: var(--salt-zIndex-default);
  box-sizing: border-box;

  align-items: center;
  justify-content: center;
  display: inline-flex;
  margin: auto;

  font-size: var(--salt-text-notation-fontSize);
  font-weight: var(--salt-text-notation-fontWeight);
  font-family: var(--salt-text-fontFamily);
  line-height: var(--salt-text-notation-lineHeight);
  letter-spacing: var(--salt-text-letterSpacing);
  background: var(--salt-sentiment-accent-background);
  color: var(--salt-content-bold-foreground);

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.saltBadge-topRight {
  position: absolute;
  right: var(--salt-spacing-100);
  transform: translateX(100%) translateY(calc(-1 * (var(--badge-size) / 2)));
}

.saltBadge-dotBadge {
  height: var(--salt-size-adornment);
  min-width: var(--salt-size-adornment);
  padding: 0;
  --badge-size: var(--salt-size-adornment);
}

.saltBadge-dotBadge.saltBadge-topRight {
  right: calc((var(--salt-size-adornment) / 2));
}
`;const g=R("saltBadge"),de=p.forwardRef(function({value:n,max:i=999,className:d,children:c,...u},t){const h=S();I({testId:"salt-badge",css:ae,window:h});const v=typeof n=="number"&&n>i?`${i}+`:n,f=typeof n>"u";return l.jsxs("span",{className:o(g(),d),ref:t,...u,children:[c,l.jsx("span",{className:o(g("badge"),{[g("topRight")]:c,[g("dotBadge")]:f}),children:v})]})});var oe=`/* Styles applied to root component */
.saltCheckbox {
  display: inline-flex;
  width: fit-content;
  gap: var(--salt-spacing-100);
  position: relative;
  cursor: var(--salt-cursor-hover);

  font-size: var(--salt-text-fontSize);
  line-height: var(--salt-text-lineHeight);
  font-family: var(--salt-text-fontFamily);
  font-weight: var(--salt-text-fontWeight);
  letter-spacing: var(--salt-text-letterSpacing);
}

/* Styles applied to root component if \`disabled={true}\` */
.saltCheckbox-disabled {
  color: var(--salt-content-primary-foreground);

  cursor: var(--salt-cursor-disabled);
  opacity: 0.4;
}

/* Styles applied to root component if \`readOnly={true}\` */
.saltCheckbox-readOnly {
  color: var(--salt-content-primary-foreground);
  cursor: var(--salt-cursor-readonly);
}

.saltCheckbox-input,
.saltCheckboxIcon {
  margin: calc((var(--salt-text-lineHeight) - var(--salt-size-selectable)) / 2) 0;
  box-sizing: border-box;
}

/* Styles applied to the icon component if focused */
.saltCheckbox-input:focus-visible + .saltCheckboxIcon {
  outline-offset: var(--salt-spacing-fixed-100);
  outline: var(--saltCheckbox-outline, var(--salt-focused-outline));
  border-color: var(--salt-selectable-borderColor-hover);
  color: var(--salt-selectable-foreground-hover);
  clip-path: unset;
}

.saltCheckbox-input:focus-visible + .saltCheckboxIcon-checked {
  border-color: var(--salt-selectable-borderColor-selected);
  color: var(--salt-selectable-foreground-selected);
}

.saltCheckbox-error .saltCheckbox-input:focus-visible + .saltCheckboxIcon {
  outline-color: var(--salt-status-error-foreground-decorative);
  border-color: var(--salt-status-error-borderColor);
  color: var(--salt-status-error-foreground-decorative);
}

.saltCheckbox-warning .saltCheckbox-input:focus-visible + .saltCheckboxIcon {
  outline-color: var(--salt-status-warning-foreground-decorative);
  border-color: var(--salt-status-warning-borderColor);
  color: var(--salt-status-warning-foreground-decorative);
}

/* Styles applied to input element */
.saltCheckbox-input {
  cursor: inherit;
  opacity: 0;
  padding: 0;
  position: absolute;
  z-index: var(--salt-zIndex-default);
}
`;const se=Q("CheckboxGroupContext",void 0);function re(){return p.useContext(se)}const a=R("saltCheckbox"),ce=p.forwardRef(function({checked:n,className:i,defaultChecked:d,disabled:c,error:u,indeterminate:t,inputProps:h={},inputRef:v,label:f,name:F,onBlur:O,onChange:k,onFocus:N,value:x,validationStatus:G,readOnly:P,...W},E){const H=S();I({testId:"salt-checkbox",css:oe,window:H});const e=re(),V=F??e?.name,{"aria-describedby":_,"aria-labelledby":$,className:D,onChange:z,...L}=h,A=n??(e?.checkedValues&&x?e.checkedValues.includes(x):n),[w,T]=Z({controlled:A,default:!!d,name:"Checkbox",state:"checked"}),{a11yProps:b,disabled:X,readOnly:Y,validationStatus:q}=ee(),m=e?.disabled||X||c,s=e?.readOnly||Y||P,y=m?void 0:e?.validationStatus??q??G,C=p.useRef(null),J=ne(v,C),K=r=>{var B;if(r.nativeEvent.defaultPrevented||s)return;const M=r.target.checked;T(M),k?.(r),z?.(r),(B=e?.onChange)==null||B.call(e,r)};return U(()=>{C.current!=null&&(C.current.indeterminate=t??!1)},[t]),l.jsxs("label",{className:o(a(),{[a("disabled")]:m,[a("readOnly")]:s,[a("error")]:u,[a(y??"")]:y},i),ref:E,...W,children:[l.jsx("input",{"aria-readonly":s||void 0,"aria-describedby":o(e===void 0?b?.["aria-describedby"]:void 0,_)||void 0,"aria-labelledby":o(e===void 0?b?.["aria-labelledby"]:void 0,$)||void 0,name:V,value:x,checked:w,className:o(a("input"),D),"data-indeterminate":t,defaultChecked:d,disabled:m,readOnly:s,onBlur:O,onChange:K,onFocus:N,type:"checkbox",ref:J,...L}),l.jsx(te,{checked:w,readOnly:s,indeterminate:t,validationStatus:y,error:u}),f]})});export{de as B,ce as C,se as a};
