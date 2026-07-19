function c(s){let t=document.createRange().createContextualFragment(s).firstElementChild;if(!t||t.nodeName.toLowerCase()!=="svg")throw new Error("[siteping] Invalid SVG string");for(let r of [...t.attributes])r.name.startsWith("on")&&t.removeAttribute(r.name);for(let r of t.querySelectorAll("*"))for(let i of [...r.attributes])i.name.startsWith("on")&&r.removeAttribute(i.name);return t}function o(s,e){let n=document.createElement(s);if(e)for(let[t,r]of Object.entries(e))t==="class"?n.className=r:t==="style"?n.style.cssText=r:n.setAttribute(t,r);return n}function a(s,e){s.textContent=e;}function L(s){let e=Array.from(s.childNodes).map(n=>n.cloneNode(true));return s.disabled=true,s.replaceChildren(o("div",{class:"sp-spinner sp-spinner--sm"})),()=>{s.replaceChildren(...e),s.disabled=false;}}function He(s,e="en"){let n=Date.now()-new Date(s).getTime(),t=Math.floor(n/1e3);if(t<60)return new Intl.RelativeTimeFormat(e,{numeric:"auto"}).format(0,"second");let r=new Intl.RelativeTimeFormat(e,{numeric:"always",style:"narrow"}),i=Math.floor(t/60);if(i<60)return r.format(-i,"minute");let l=Math.floor(i/60);if(l<24)return r.format(-l,"hour");let d=Math.floor(l/24);return d<7?r.format(-d,"day"):new Date(s).toLocaleDateString(e)}var De='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><circle cx="12" cy="10" r="1" fill="currentColor" stroke="none"/><circle cx="8" cy="10" r="1" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1" fill="currentColor" stroke="none"/></svg>';var Ie='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',je='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',_e='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>',$e='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',ze='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',Ke='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="8" y="6" width="8" height="14" rx="4"/><path d="M19 9h2"/><path d="M3 9h2"/><path d="M19 13h2"/><path d="M3 13h2"/><path d="M19 17h2"/><path d="M3 17h2"/><path d="M10 2h4"/></svg>',Ue='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>',Ve='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',Ye='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/></svg>',Ge='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>',qe='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>',We='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>';var Xe='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>';var O="#0066ff",ee=/^#[0-9a-fA-F]{6}$/,P=/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/,te=/^#[0-9a-fA-F]{8}$/;function se(s){if(ee.test(s))return s;let e=P.test(s)?s.match(P):null;return e?`#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`:te.test(s)?s.slice(0,7):(console.warn(`[siteping] Invalid accentColor "${s}" \u2014 only hex colors (#RGB, #RRGGBB, #RRGGBBAA) are supported. Using default.`),O)}function ne(s,e){let n=Math.max(0,Math.round(parseInt(s.slice(1,3),16)*(1-e))),t=Math.max(0,Math.round(parseInt(s.slice(3,5),16)*(1-e))),r=Math.max(0,Math.round(parseInt(s.slice(5,7),16)*(1-e)));return `#${n.toString(16).padStart(2,"0")}${t.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}`}function re(){return typeof window>"u"?false:window.matchMedia("(prefers-color-scheme: dark)").matches}function oe(s){return s==="dark"||s==="auto"&&re()?"dark":"light"}function Je(s=O,e){let n=se(s),t=ne(n,.15);return oe(e)==="dark"?{accent:n,accentLight:n+"22",accentDark:t,accentGlow:n+"44",accentGradient:`linear-gradient(135deg, ${n}, ${t})`,bg:"#0f172a",bgHover:"#1e293b",text:"#f1f5f9",textSecondary:"#94a3b8",textTertiary:"#64748b",border:"#334155",shadow:"rgba(0, 0, 0, 0.3)",glassBg:"rgba(15, 23, 42, 0.78)",glassBgHeavy:"rgba(15, 23, 42, 0.88)",glassBorder:"rgba(51, 65, 85, 0.5)",glassBorderSubtle:"rgba(51, 65, 85, 0.3)",typeQuestion:"#60a5fa",typeChange:"#fbbf24",typeBug:"#f87171",typeOther:"#94a3b8",typeQuestionBg:"rgba(59, 130, 246, 0.15)",typeChangeBg:"rgba(245, 158, 11, 0.15)",typeBugBg:"rgba(239, 68, 68, 0.15)",typeOtherBg:"rgba(100, 116, 139, 0.15)",statusOpen:"#4ade80",statusOpenBg:"rgba(74, 222, 128, 0.15)",statusResolved:"#94a3b8",statusResolvedBg:"rgba(148, 163, 184, 0.15)"}:{accent:n,accentLight:n+"14",accentDark:t,accentGlow:n+"33",accentGradient:`linear-gradient(135deg, ${n}, ${t})`,bg:"#ffffff",bgHover:"#f8f9fb",text:"#0f172a",textSecondary:"#475569",textTertiary:"#64748b",border:"#e2e8f0",shadow:"rgba(0, 0, 0, 0.06)",glassBg:"rgba(255, 255, 255, 0.72)",glassBgHeavy:"rgba(255, 255, 255, 0.85)",glassBorder:"rgba(255, 255, 255, 0.35)",glassBorderSubtle:"rgba(255, 255, 255, 0.18)",typeQuestion:"#3b82f6",typeChange:"#b45309",typeBug:"#ef4444",typeOther:"#64748b",typeQuestionBg:"#eff6ff",typeChangeBg:"#fffbeb",typeBugBg:"#fef2f2",typeOtherBg:"#f8fafc",statusOpen:"#16a34a",statusOpenBg:"#f0fdf4",statusResolved:"#64748b",statusResolvedBg:"#f1f5f9"}}function M(s,e){switch(s){case "question":return e.typeQuestion;case "change":return e.typeChange;case "bug":return e.typeBug;default:return e.typeOther}}function H(s,e){switch(s){case "question":return e.typeQuestionBg;case "change":return e.typeChangeBg;case "bug":return e.typeBugBg;default:return e.typeOtherBg}}function Ze(s){return `
    --sp-accent: ${s.accent};
    --sp-accent-light: ${s.accentLight};
    --sp-accent-dark: ${s.accentDark};
    --sp-accent-glow: ${s.accentGlow};
    --sp-accent-gradient: ${s.accentGradient};
    --sp-bg: ${s.bg};
    --sp-bg-hover: ${s.bgHover};
    --sp-text: ${s.text};
    --sp-text-secondary: ${s.textSecondary};
    --sp-text-tertiary: ${s.textTertiary};
    --sp-border: ${s.border};
    --sp-shadow: ${s.shadow};
    --sp-glass-bg: ${s.glassBg};
    --sp-glass-bg-heavy: ${s.glassBgHeavy};
    --sp-glass-border: ${s.glassBorder};
    --sp-glass-border-subtle: ${s.glassBorderSubtle};
    --sp-type-question: ${s.typeQuestion};
    --sp-type-change: ${s.typeChange};
    --sp-type-bug: ${s.typeBug};
    --sp-type-other: ${s.typeOther};
    --sp-type-question-bg: ${s.typeQuestionBg};
    --sp-type-change-bg: ${s.typeChangeBg};
    --sp-type-bug-bg: ${s.typeBugBg};
    --sp-type-other-bg: ${s.typeOtherBg};
    --sp-radius: 12px;
    --sp-radius-lg: 16px;
    --sp-radius-xl: 20px;
    --sp-radius-full: 9999px;
    --sp-blur: 20px;
    --sp-blur-heavy: 32px;
    --sp-shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.04);
    --sp-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.04);
    --sp-shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04);
    --sp-shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.04);
    --sp-shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.06);
    --sp-font: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  `}function ie(s){return typeof s=="object"&&s!==null}function tt(s,e){return ie(s)&&e in s}var N=["en","fr","de","es","it","pt","ru"];function nt(s){return {cssSelector:s.anchor.cssSelector,xpath:s.anchor.xpath,textSnippet:s.anchor.textSnippet,elementTag:s.anchor.elementTag,elementId:s.anchor.elementId,textPrefix:s.anchor.textPrefix,textSuffix:s.anchor.textSuffix,fingerprint:s.anchor.fingerprint,neighborText:s.anchor.neighborText,anchorKey:s.anchor.anchorKey??null,xPct:s.rect.xPct,yPct:s.rect.yPct,wPct:s.rect.wPct,hPct:s.rect.hPct,scrollX:s.scrollX,scrollY:s.scrollY,viewportW:s.viewportW,viewportH:s.viewportH,devicePixelRatio:s.devicePixelRatio}}var D={"panel.title":"Feedbacks","panel.ariaLabel":"Siteping feedback panel","panel.feedbackList":"Feedback list","panel.loading":"Loading feedbacks","panel.close":"Close panel","panel.deleteAll":"Delete all","panel.deleteAllConfirmTitle":"Delete all","panel.deleteAllConfirmMessage":"Delete all feedbacks for this project? This action cannot be undone.","panel.search":"Search...","panel.searchAria":"Search feedbacks","panel.filterAll":"All","panel.loadError":"Failed to load","panel.retry":"Retry","panel.empty":"No feedback yet","panel.showMore":"Show more","panel.showLess":"Show less","panel.resolve":"Resolve","panel.reopen":"Reopen","panel.delete":"Delete","panel.cancel":"Cancel","panel.confirmDelete":"Delete","panel.loadMore":"Load more ({remaining} remaining)","panel.statusAll":"All","panel.statusOpen":"Open","panel.statusResolved":"Resolved","type.label":"Type","type.question":"Question","type.change":"Change","type.bug":"Bug","type.other":"Other","status.label":"Status","scope.label":"Scope","scope.thisPage":"This page","scope.thisType":"This type","scope.all":"All pages","fab.aria":"Siteping \u2014 Feedback menu","fab.messages":"Show sidebar","fab.annotate":"Create new annotation","fab.annotations":"Show or hide markers","annotator.instruction":"Draw a rectangle on the area to comment","annotator.cancel":"Cancel","popup.ariaLabel":"Feedback form","popup.placeholder":"Describe your feedback...","popup.textareaAria":"Feedback message","popup.submitHintMac":"\u2318+Enter to send","popup.submitHintOther":"Ctrl+Enter to send","popup.cancel":"Cancel","popup.submit":"Send","identity.title":"Identify yourself","identity.nameLabel":"Name","identity.namePlaceholder":"Your name","identity.emailLabel":"Email","identity.emailPlaceholder":"your@email.com","identity.cancel":"Cancel","identity.submit":"Continue","marker.approximate":"Approximate position (confidence: {confidence}%)","marker.aria":"Feedback #{number}: {type} \u2014 {message}","marker.count":"{count} feedback markers displayed","fab.badge":"{count} unresolved feedbacks","feedback.sent.confirmation":"Feedback sent successfully","feedback.error.message":"Failed to send feedback","feedback.deleted.confirmation":"Feedback deleted","badge.count":"{count} unresolved feedbacks","bulk.selectAll":"Select all","bulk.selected":"{count} selected","bulk.resolve":"Resolve","bulk.delete":"Delete","bulk.deselect":"Deselect","sort.newest":"Newest first","sort.oldest":"Oldest first","sort.byType":"By type","sort.openFirst":"Open first","sort.label":"Sort","group.byPage":"By page","group.feedbacks":"{count} feedbacks","stats.open":"Open","stats.resolved":"Resolved","stats.bugs":"Bugs","stats.progress":"{percent}% resolved","detail.back":"Back","detail.title":"Feedback #{number}","detail.status":"Status","detail.message":"Message","detail.screenshot":"Screenshot","detail.screenshotAlt":"Screenshot of the annotated area","detail.metadata":"Details","detail.annotation":"Annotation","detail.page":"Page","detail.author":"Author","detail.date":"Created","detail.viewport":"Viewport","detail.browser":"Browser","detail.resolvedAt":"Resolved at","detail.goToAnnotation":"Go to annotation","detail.element":"Element","detail.selector":"Selector","detail.position":"Position","detail.resolve":"Resolve","detail.reopen":"Reopen","detail.delete":"Delete","detail.diagnostics":"Diagnostics","detail.diagnostics.console":"Console","detail.diagnostics.network":"Failed network","detail.diagnostics.expand":"Show diagnostics","detail.diagnostics.collapse":"Hide diagnostics","detail.diagnostics.noEntries":"No entries","shortcuts.title":"Keyboard shortcuts","shortcuts.navigate":"Navigate feedbacks","shortcuts.resolve":"Resolve / Reopen","shortcuts.delete":"Delete","shortcuts.search":"Focus search","shortcuts.select":"Toggle selection","shortcuts.help":"Show shortcuts","shortcuts.close":"Close","shortcuts.hint":"Keyboard shortcuts","export.label":"Export","export.csv":"Export CSV","export.json":"Export JSON"};var S={en:D},ae=new Set(N.filter(s=>s!=="en"));function I(s){return ae.has(s)}function j(s){return (s.split("-")[0]??s).toLowerCase()}async function lt(s){let e=j(s),n=S[e];if(n)return n;if(!I(e))return null;let t;switch(e){case "de":t=await import('./de-CO2K72R2.js');break;case "es":t=await import('./es-2QYDBGOD.js');break;case "fr":t=await import('./fr-7YJBFS2W.js');break;case "it":t=await import('./it-44RM76KH.js');break;case "pt":t=await import('./pt-DRKIF4UZ.js');break;case "ru":t=await import('./ru-EAKBDL3X.js');break;default:return null}let r=t[e];return r?(S[e]=r,r):null}function pt(s){let e=j(s);return e!=="en"&&!S[e]&&!I(e)&&console.warn(`[siteping] Unknown locale "${s}", falling back to "en"`),n=>(S[e]??S.en)?.[n]??S.en?.[n]??n}function dt(s,e){switch(s){case "question":return e("type.question");case "change":return e("type.change");case "bug":return e("type.bug");case "other":return e("type.other");default:return s}}var le='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',pe='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>',de='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3H6a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h2"/><path d="M16 3h2a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2"/></svg>',ht=`
  /* ============================
     Export Button & Menu
     ============================ */

  .sp-export-btn {
    padding: 5px 12px;
    border-radius: var(--sp-radius-full);
    border: 1px solid var(--sp-border);
    background: transparent;
    color: var(--sp-text-tertiary);
    font-family: var(--sp-font);
    font-size: 11px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
    transition: all 0.2s ease;
    position: relative;
  }

  .sp-export-btn svg {
    width: 13px;
    height: 13px;
  }

  .sp-export-btn:hover {
    border-color: var(--sp-accent);
    color: var(--sp-accent);
    background: var(--sp-accent-light);
  }

  .sp-export-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  .sp-export-menu {
    position: absolute;
    top: calc(100% + 6px);
    right: 0;
    min-width: 180px;
    padding: 4px;
    border-radius: var(--sp-radius);
    background: var(--sp-glass-bg-heavy);
    backdrop-filter: blur(var(--sp-blur));
    -webkit-backdrop-filter: blur(var(--sp-blur));
    border: 1px solid var(--sp-glass-border);
    box-shadow: var(--sp-shadow-lg);
    z-index: 10;
    opacity: 0;
    transform: translateY(-4px) scale(0.97);
    transition: opacity 0.15s ease, transform 0.15s ease;
    pointer-events: none;
  }

  .sp-export-menu--open {
    opacity: 1;
    transform: translateY(0) scale(1);
    pointer-events: auto;
  }

  .sp-export-option {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: var(--sp-text-secondary);
    font-family: var(--sp-font);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
    text-align: left;
  }

  .sp-export-option:hover,
  .sp-export-option:focus-visible {
    background: var(--sp-accent-light);
    color: var(--sp-accent);
  }

  .sp-export-option-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .sp-export-option-icon svg {
    width: 16px;
    height: 16px;
  }

  .sp-export-option-label {
    flex: 1;
  }

  @media (forced-colors: active) {
    .sp-export-btn,
    .sp-export-option,
    .sp-export-menu {
      border: 2px solid ButtonText !important;
      background: Canvas !important;
      color: ButtonText !important;
    }

    .sp-export-btn:focus-visible,
    .sp-export-option:focus-visible {
      outline: 3px solid Highlight !important;
    }
  }
`,_=["id","type","status","message","url","authorName","authorEmail","createdAt","resolvedAt","viewport"];function ce(s){let e=/^[=+\-@\t\r]/.test(s)?`'${s}`:s;return e.includes('"')||e.includes(",")||e.includes(`
`)||e.includes("\r")?`"${e.replace(/"/g,'""')}"`:e}function ue(s){let e=_.join(","),n=s.map(t=>_.map(r=>{let i=t[r];return ce(i==null?"":String(i))}).join(","));return [e,...n].join(`
`)}function he(s){return JSON.stringify(s,null,2)}function $(s,e,n){let t=new Blob([s],{type:n}),r=URL.createObjectURL(t),i=document.createElement("a");i.href=r,i.download=e,i.style.display="none",document.body.appendChild(i),i.click(),requestAnimationFrame(()=>{URL.revokeObjectURL(r),i.remove();});}var z=class{constructor(e,n,t){this.getFeedbacks=n;this.element=o("div",{style:"position: relative; display: inline-flex;"});let r=document.createElement("button");r.className="sp-export-btn",r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded","false"),r.appendChild(c(le));let i=document.createElement("span");a(i,t("export.label")),r.appendChild(i),r.addEventListener("click",p=>{p.stopPropagation(),this.toggle();}),this.menu=o("div",{class:"sp-export-menu"}),this.menu.setAttribute("role","menu");let l=this.createOption(pe,t("export.csv"),()=>{this.exportAs("csv");}),d=this.createOption(de,t("export.json"),()=>{this.exportAs("json");});this.menu.appendChild(l),this.menu.appendChild(d),this.element.appendChild(r),this.element.appendChild(this.menu),this.onDocumentClick=p=>{this.isOpen&&!this.element.contains(p.target)&&this.close();},document.addEventListener("click",this.onDocumentClick,true);}getFeedbacks;element;menu;isOpen=false;onDocumentClick;createOption(e,n,t){let r=document.createElement("button");r.className="sp-export-option",r.setAttribute("role","menuitem");let i=o("span",{class:"sp-export-option-icon"});i.appendChild(c(e));let l=o("span",{class:"sp-export-option-label"});return a(l,n),r.appendChild(i),r.appendChild(l),r.addEventListener("click",d=>{d.stopPropagation(),t(),this.close();}),r}toggle(){this.isOpen?this.close():this.open();}open(){this.isOpen=true,this.menu.classList.add("sp-export-menu--open"),this.element.querySelector(".sp-export-btn")?.setAttribute("aria-expanded","true");}close(){this.isOpen=false,this.menu.classList.remove("sp-export-menu--open"),this.element.querySelector(".sp-export-btn")?.setAttribute("aria-expanded","false");}exportAs(e){let n=this.getFeedbacks();if(n.length===0)return;let t=n[0]?.projectName??"feedbacks",r=new Date().toISOString().slice(0,10),i=t.replace(/[^a-zA-Z0-9_-]/g,"_");if(e==="csv"){let l=ue(n);$(l,`feedbacks-${i}-${r}.csv`,"text/csv;charset=utf-8");}else {let l=he(n);$(l,`feedbacks-${i}-${r}.json`,"application/json;charset=utf-8");}}destroy(){document.removeEventListener("click",this.onDocumentClick,true),this.element.remove();}};var T='<svg viewBox="0 0 18 18" fill="none" aria-hidden="true"><rect x="1" y="1" width="16" height="16" rx="4" stroke="currentColor" stroke-width="2"/></svg>',K='<svg viewBox="0 0 18 18" fill="none" aria-hidden="true"><rect x="1" y="1" width="16" height="16" rx="4" fill="url(#sp-cb-grad)" stroke="none"/><polyline points="5 9 8 12 13 6" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="sp-cb-grad" x1="0" y1="0" x2="18" y2="18" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="var(--sp-accent)"/><stop offset="100%" stop-color="var(--sp-accent-dark)"/></linearGradient></defs></svg>',vt=`
  /* ============================
     Bulk Checkbox
     ============================ */

  .sp-bulk-checkbox {
    position: relative;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    cursor: pointer;
    border-radius: 4px;
    color: var(--sp-border);
    opacity: 0;
    transition: opacity 0.15s ease, color 0.15s ease, transform 0.15s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .sp-bulk-checkbox svg {
    width: 16px;
    height: 16px;
    display: block;
  }

  .sp-bulk-checkbox:hover {
    color: var(--sp-accent);
    transform: scale(1.1);
  }

  .sp-bulk-checkbox--checked {
    color: var(--sp-accent);
    opacity: 1 !important;
    filter: drop-shadow(0 0 4px var(--sp-accent-glow));
  }

  /* Show checkboxes when hovering a card */
  .sp-card:hover .sp-bulk-checkbox {
    opacity: 1;
  }

  /* When any card has selection, show ALL checkboxes */
  .sp-list--has-selection .sp-bulk-checkbox {
    opacity: 1;
  }

  /* ============================
     Card Selected State
     ============================ */

  .sp-card--selected {
    border-left: 3px solid var(--sp-accent) !important;
    background: var(--sp-accent-light) !important;
  }

  .sp-card--selected:hover {
    background: var(--sp-accent-light) !important;
  }

  /* ============================
     Select All Bar
     ============================ */

  .sp-bulk-select-all {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    margin-bottom: 4px;
    border-radius: var(--sp-radius);
    background: transparent;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.2s ease, background 0.2s ease;
    user-select: none;
    font-family: var(--sp-font);
    font-size: 12px;
    font-weight: 500;
    color: var(--sp-text-secondary);
  }

  .sp-bulk-select-all:hover {
    background: var(--sp-bg-hover);
  }

  /* Show select-all on list hover or when selections exist */
  .sp-list:hover .sp-bulk-select-all,
  .sp-list--has-selection .sp-bulk-select-all {
    opacity: 1;
  }

  .sp-bulk-select-all .sp-bulk-checkbox {
    opacity: 1;
  }

  /* ============================
     Floating Action Bar
     ============================ */

  @keyframes sp-bulk-bar-in {
    from {
      transform: translateY(100%) scale(0.95);
      opacity: 0;
    }
    to {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }

  @keyframes sp-bulk-bar-out {
    from {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
    to {
      transform: translateY(100%) scale(0.95);
      opacity: 0;
    }
  }

  .sp-bulk-bar {
    position: absolute;
    bottom: 16px;
    left: 16px;
    right: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 12px 16px;
    border-radius: 16px;
    background: var(--sp-glass-bg-heavy);
    backdrop-filter: blur(var(--sp-blur-heavy));
    -webkit-backdrop-filter: blur(var(--sp-blur-heavy));
    border: 1px solid var(--sp-glass-border);
    box-shadow: var(--sp-shadow-xl);
    z-index: 10;
    pointer-events: none;
    opacity: 0;
    transform: translateY(100%) scale(0.95);
    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
                opacity 0.25s ease;
    font-family: var(--sp-font);
  }

  .sp-bulk-bar--visible {
    pointer-events: auto;
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .sp-bulk-bar-count {
    font-size: 13px;
    font-weight: 600;
    color: var(--sp-text);
    white-space: nowrap;
    letter-spacing: -0.01em;
  }

  .sp-bulk-bar-actions {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .sp-bulk-btn-resolve,
  .sp-bulk-btn-delete {
    padding: 7px 14px;
    border-radius: var(--sp-radius-full);
    border: 1.5px solid transparent;
    background: transparent;
    font-family: var(--sp-font);
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: all 0.2s ease;
    white-space: nowrap;
  }

  .sp-bulk-btn-resolve {
    color: #22c55e;
    border-color: #22c55e;
  }

  .sp-bulk-btn-resolve:hover {
    background: rgba(34, 197, 94, 0.1);
    box-shadow: 0 0 12px rgba(34, 197, 94, 0.15);
  }

  .sp-bulk-btn-resolve:active {
    transform: scale(0.96);
    transition-duration: 0.1s;
  }

  .sp-bulk-btn-delete {
    color: #ef4444;
    border-color: #ef4444;
  }

  .sp-bulk-btn-delete:hover {
    background: rgba(239, 68, 68, 0.1);
    box-shadow: 0 0 12px rgba(239, 68, 68, 0.15);
  }

  .sp-bulk-btn-delete:active {
    transform: scale(0.96);
    transition-duration: 0.1s;
  }

  .sp-bulk-btn-resolve:disabled,
  .sp-bulk-btn-delete:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  .sp-bulk-btn-deselect {
    width: 28px;
    height: 28px;
    border-radius: var(--sp-radius-full);
    border: 1px solid var(--sp-border);
    background: transparent;
    color: var(--sp-text-tertiary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    flex-shrink: 0;
    padding: 0;
  }

  .sp-bulk-btn-deselect:hover {
    background: var(--sp-bg-hover);
    color: var(--sp-text);
    border-color: var(--sp-text-tertiary);
  }

  .sp-bulk-btn-deselect:active {
    transform: scale(0.92);
    transition-duration: 0.1s;
  }

  .sp-bulk-btn-deselect svg {
    width: 12px;
    height: 12px;
  }

  /* Spinner inside bulk bar buttons */
  .sp-bulk-btn-resolve .sp-spinner,
  .sp-bulk-btn-delete .sp-spinner {
    width: 14px;
    height: 14px;
  }

  /* ============================
     Forced Colors / High Contrast
     ============================ */

  @media (forced-colors: active) {
    .sp-bulk-checkbox,
    .sp-bulk-btn-resolve,
    .sp-bulk-btn-delete,
    .sp-bulk-btn-deselect,
    .sp-bulk-bar {
      border: 2px solid ButtonText !important;
      background: Canvas !important;
      color: ButtonText !important;
    }

    .sp-bulk-checkbox--checked {
      background: Highlight !important;
      color: HighlightText !important;
    }

    .sp-card--selected {
      border-left: 4px solid Highlight !important;
    }
  }

  /* ============================
     Reduced Motion
     ============================ */

  @media (prefers-reduced-motion: reduce) {
    .sp-bulk-bar {
      transition-duration: 0.01ms !important;
    }

    .sp-bulk-checkbox {
      transition-duration: 0.01ms !important;
    }
  }
`,U=class{constructor(e,n,t){this.callbacks=n;this.t=t,this.barElement=o("div",{class:"sp-bulk-bar"}),this.barElement.setAttribute("role","toolbar"),this.barElement.setAttribute("aria-label","Bulk actions"),this.countLabel=o("span",{class:"sp-bulk-bar-count"}),a(this.countLabel,this.t("bulk.selected").replace("{count}","0"));let r=o("div",{class:"sp-bulk-bar-actions"});this.resolveBtn=document.createElement("button"),this.resolveBtn.className="sp-bulk-btn-resolve",this.resolveBtn.type="button",this.resolveBtn.addEventListener("click",()=>this.handleResolve()),this.deleteBtn=document.createElement("button"),this.deleteBtn.className="sp-bulk-btn-delete",this.deleteBtn.type="button",this.deleteBtn.addEventListener("click",()=>this.handleDelete());let i=document.createElement("button");i.className="sp-bulk-btn-deselect",i.type="button",i.setAttribute("aria-label",this.t("bulk.deselect")),i.appendChild(c('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>')),i.addEventListener("click",()=>this.deselectAll()),r.appendChild(this.resolveBtn),r.appendChild(this.deleteBtn),r.appendChild(i),this.barElement.appendChild(this.countLabel),this.barElement.appendChild(r),this.updateButtonLabels();}callbacks;barElement;selected=new Set;checkboxMap=new Map;countLabel;resolveBtn;deleteBtn;selectAllCheckbox=null;listContainer=null;isProcessing=false;t;createCheckbox(e){let n=o("div",{class:"sp-bulk-checkbox"});return n.setAttribute("role","checkbox"),n.setAttribute("aria-checked","false"),n.setAttribute("tabindex","0"),n.setAttribute("aria-label",`Select feedback ${e}`),n.appendChild(c(T)),n.addEventListener("click",t=>{t.stopPropagation(),this.toggle(e);}),n.addEventListener("keydown",t=>{(t.key===" "||t.key==="Enter")&&(t.preventDefault(),t.stopPropagation(),this.toggle(e));}),this.checkboxMap.set(e,n),n}createSelectAllBar(e,n){let t=o("div",{class:"sp-bulk-select-all"}),r=o("div",{class:"sp-bulk-checkbox"});r.appendChild(c(T)),this.selectAllCheckbox=r;let i=o("span");return a(i,n),t.appendChild(r),t.appendChild(i),t.addEventListener("click",()=>{this.selected.size===e.length&&e.length>0?this.deselectAll():this.selectAll(e);}),t}setListContainer(e){this.listContainer=e;}toggle(e){this.isProcessing||(this.selected.has(e)?this.selected.delete(e):this.selected.add(e),this.updateCheckbox(e),this.updateBar(),this.updateSelectAllCheckbox(),this.updateListSelectionClass(),this.updateCardSelectedState(e));}selectAll(e){if(!this.isProcessing){for(let n of e)this.selected.add(n),this.updateCheckbox(n),this.updateCardSelectedState(n);this.updateBar(),this.updateSelectAllCheckbox(),this.updateListSelectionClass();}}deselectAll(){let e=[...this.selected];this.selected.clear();for(let n of e)this.updateCheckbox(n),this.updateCardSelectedState(n);this.updateBar(),this.updateSelectAllCheckbox(),this.updateListSelectionClass();}get selectedIds(){return [...this.selected]}get count(){return this.selected.size}get hasSelection(){return this.selected.size>0}reset(){this.selected.clear(),this.checkboxMap.clear(),this.selectAllCheckbox=null,this.isProcessing=false,this.updateBar(),this.updateListSelectionClass();}destroy(){this.selected.clear(),this.checkboxMap.clear(),this.selectAllCheckbox=null,this.listContainer=null,this.barElement.remove();}updateBar(){let e=this.selected.size,n=e>0;this.barElement.classList.toggle("sp-bulk-bar--visible",n),a(this.countLabel,this.t("bulk.selected").replace("{count}",String(e))),this.updateButtonLabels();}updateButtonLabels(){let e=this.selected.size,n=this.t("bulk.resolve"),t=this.t("bulk.delete");this.resolveBtn.replaceChildren();let r=document.createElement("span");a(r,e>0?`${n} ${e}`:n),this.resolveBtn.appendChild(r),this.deleteBtn.replaceChildren();let i=document.createElement("span");a(i,e>0?`${t} ${e}`:t),this.deleteBtn.appendChild(i);}updateCheckbox(e){let n=this.checkboxMap.get(e);if(!n)return;let t=this.selected.has(e);n.classList.toggle("sp-bulk-checkbox--checked",t),n.setAttribute("aria-checked",String(t)),n.replaceChildren(),n.appendChild(c(t?K:T));}updateSelectAllCheckbox(){if(!this.selectAllCheckbox)return;let e=this.selected.size>0&&this.selected.size===this.checkboxMap.size;this.selectAllCheckbox.classList.toggle("sp-bulk-checkbox--checked",e),this.selectAllCheckbox.setAttribute("aria-checked",String(e)),this.selectAllCheckbox.replaceChildren(),this.selectAllCheckbox.appendChild(c(e?K:T));}updateListSelectionClass(){this.listContainer&&this.listContainer.classList.toggle("sp-list--has-selection",this.selected.size>0);}updateCardSelectedState(e){if(!this.listContainer)return;let n=CSS.escape(e),t=this.listContainer.querySelector(`[data-feedback-id="${n}"]`);t&&t.classList.toggle("sp-card--selected",this.selected.has(e));}async handleResolve(){if(this.isProcessing||this.selected.size===0)return;this.isProcessing=true;let e=[...this.selected],n=L(this.resolveBtn);this.deleteBtn.disabled=true;try{await this.callbacks.onResolve(e),this.reset();}catch{n(),this.deleteBtn.disabled=false;}finally{this.isProcessing=false;}}async handleDelete(){if(this.isProcessing||this.selected.size===0)return;this.isProcessing=true;let e=[...this.selected],n=L(this.deleteBtn);this.resolveBtn.disabled=true;try{await this.callbacks.onDelete(e),this.reset();}catch{n(),this.resolveBtn.disabled=false;}finally{this.isProcessing=false;}}};var ge='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',R='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',be='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',ve='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',xe='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',fe='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',F='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>',V='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>',Y='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>',me='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',ye='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>',ke='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>',we='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',yt=`
  /* ============================
     Detail View \u2014 Panel-in-Panel
     ============================ */

  .sp-detail {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    background: var(--sp-glass-bg);
    backdrop-filter: blur(var(--sp-blur-heavy));
    -webkit-backdrop-filter: blur(var(--sp-blur-heavy));
    z-index: 20;
    transform: translateX(100%);
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform;
    overflow: hidden;
  }

  .sp-detail--visible {
    transform: translateX(0);
  }

  /* Fallback for browsers that cannot deliver a readable "frosted glass":
     drop the translucent background to a solid one so the underlying list
     does not bleed through. Two disjoint cohorts:

       1. No backdrop-filter at all (Firefox <=102, legacy Edge / IE,
          older Chromium on Linux).
       2. Safari / iOS Safari where backdrop-filter is detectable only
          via the -webkit- prefix. Empirically this still includes recent
          Safari (observed on macOS Safari 18.6 in 2026, where
          CSS.supports('backdrop-filter', 'blur(...)') returns false even
          though the unprefixed property has shipped). On these builds the
          long-standing nested-backdrop + transform compositing bug
          silently no-ops the blur on .sp-detail (which is transformed and
          lives inside another backdrop-filter ancestor, .sp-panel), so
          the translucent default is unreadable. Detection is a pure
          feature query: prefixed supported AND unprefixed not. No
          user-agent sniffing.

     Browsers where the glass effect renders correctly (most Chromium,
     modern Firefox, any engine that advertises both property names via
     CSS.supports) are unaffected. */
  @supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
    .sp-detail {
      background: var(--sp-bg);
    }
  }

  @supports (-webkit-backdrop-filter: blur(1px)) and (not (backdrop-filter: blur(1px))) {
    .sp-detail {
      background: var(--sp-bg);
    }
  }

  /* ---- Header ---- */

  .sp-detail-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 20px;
    border-bottom: 1px solid var(--sp-border);
    background: var(--sp-glass-bg-heavy);
    backdrop-filter: blur(var(--sp-blur));
    -webkit-backdrop-filter: blur(var(--sp-blur));
    flex-shrink: 0;
    min-height: 64px;
  }

  .sp-detail-back {
    width: 40px;
    height: 40px;
    border-radius: var(--sp-radius);
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--sp-text-tertiary);
    transition: all 0.2s ease;
    flex-shrink: 0;
    padding: 0;
  }

  .sp-detail-back:hover {
    background: var(--sp-bg-hover);
    color: var(--sp-text);
  }

  .sp-detail-back:active {
    transform: scale(0.92);
    transition-duration: 0.1s;
  }

  .sp-detail-back svg {
    width: 18px;
    height: 18px;
  }

  .sp-detail-title {
    font-size: 16px;
    font-weight: 700;
    color: var(--sp-text);
    letter-spacing: -0.02em;
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .sp-detail-header .sp-badge {
    flex-shrink: 0;
  }

  /* ---- Content ---- */

  .sp-detail-content {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0;
  }

  .sp-detail-content::-webkit-scrollbar {
    width: 6px;
  }

  .sp-detail-content::-webkit-scrollbar-track {
    background: transparent;
  }

  .sp-detail-content::-webkit-scrollbar-thumb {
    background: var(--sp-border);
    border-radius: var(--sp-radius-full);
  }

  .sp-detail-content::-webkit-scrollbar-thumb:hover {
    background: var(--sp-text-tertiary);
  }

  /* ---- Section ---- */

  .sp-detail-section {
    padding: 20px 24px;
    border-bottom: 1px solid var(--sp-border);
    opacity: 0;
    transform: translateY(8px);
    animation: sp-detail-section-in 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  @keyframes sp-detail-section-in {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .sp-detail-section:last-child {
    border-bottom: none;
  }

  .sp-detail-section-title {
    font-size: 11px;
    font-weight: 600;
    color: var(--sp-text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .sp-detail-section-title svg {
    width: 14px;
    height: 14px;
    opacity: 0.6;
  }

  /* ---- Status + Actions Section ---- */

  .sp-detail-status {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
  }

  .sp-detail-status-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 14px;
    border-radius: var(--sp-radius-full);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  .sp-detail-status-pill--open {
    background: rgba(34, 197, 94, 0.1);
    color: #22c55e;
    border: 1px solid rgba(34, 197, 94, 0.2);
  }

  .sp-detail-status-pill--resolved {
    background: rgba(156, 163, 175, 0.1);
    color: #9ca3af;
    border: 1px solid rgba(156, 163, 175, 0.2);
  }

  .sp-detail-status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .sp-detail-actions {
    display: flex;
    gap: 8px;
  }

  .sp-detail-actions button {
    flex: 1;
    height: 40px;
    padding: 0 16px;
    border-radius: var(--sp-radius);
    font-family: var(--sp-font);
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition: all 0.2s ease;
  }

  .sp-detail-actions button svg {
    width: 15px;
    height: 15px;
  }

  .sp-detail-btn-resolve {
    border: 1.5px solid #22c55e;
    background: rgba(34, 197, 94, 0.06);
    color: #22c55e;
  }

  .sp-detail-btn-resolve:hover {
    background: rgba(34, 197, 94, 0.14);
    box-shadow: 0 0 16px rgba(34, 197, 94, 0.12);
    transform: translateY(-1px);
  }

  .sp-detail-btn-resolve:active {
    transform: translateY(0) scale(0.98);
    transition-duration: 0.1s;
  }

  .sp-detail-btn-reopen {
    border: 1.5px solid var(--sp-accent);
    background: var(--sp-accent-light);
    color: var(--sp-accent);
  }

  .sp-detail-btn-reopen:hover {
    background: rgba(var(--sp-accent), 0.14);
    box-shadow: 0 0 16px var(--sp-accent-glow);
    transform: translateY(-1px);
  }

  .sp-detail-btn-reopen:active {
    transform: translateY(0) scale(0.98);
    transition-duration: 0.1s;
  }

  .sp-detail-btn-delete {
    border: 1.5px solid #ef4444;
    background: rgba(239, 68, 68, 0.06);
    color: #ef4444;
  }

  .sp-detail-btn-delete:hover {
    background: rgba(239, 68, 68, 0.14);
    box-shadow: 0 0 16px rgba(239, 68, 68, 0.12);
    transform: translateY(-1px);
  }

  .sp-detail-btn-delete:active {
    transform: translateY(0) scale(0.98);
    transition-duration: 0.1s;
  }

  .sp-detail-actions button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
    transform: none;
    box-shadow: none;
  }

  /* ---- Message Section ---- */

  .sp-detail-message {
    font-size: 14px;
    line-height: 1.65;
    color: var(--sp-text);
    padding: 14px 16px;
    border-left: 3px solid var(--sp-accent);
    border-radius: 0 var(--sp-radius) var(--sp-radius) 0;
    background: var(--sp-glass-bg-heavy);
    white-space: pre-wrap;
    word-break: break-word;
  }

  /* ---- Screenshot Section ---- */

  .sp-detail-screenshot {
    display: block;
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: contain;
    border-radius: var(--sp-radius);
    border: 1px solid var(--sp-glass-border);
    background: var(--sp-glass-bg-heavy);
  }

  /* ---- Metadata Section ---- */

  .sp-detail-meta {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .sp-detail-meta-row {
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }

  .sp-detail-meta-row svg {
    width: 14px;
    height: 14px;
    color: var(--sp-text-tertiary);
    flex-shrink: 0;
    margin-top: 1px;
  }

  .sp-detail-meta-content {
    flex: 1;
    min-width: 0;
  }

  .sp-detail-meta-label {
    font-size: 10px;
    font-weight: 600;
    color: var(--sp-text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    line-height: 1;
    margin-bottom: 4px;
  }

  .sp-detail-meta-value {
    font-size: 13px;
    line-height: 1.4;
    color: var(--sp-text);
    word-break: break-all;
  }

  .sp-detail-meta-value--mono {
    font-family: "SF Mono", "Cascadia Code", "Fira Code", "Consolas", monospace;
    font-size: 12px;
    background: var(--sp-glass-bg-heavy);
    padding: 2px 6px;
    border-radius: 4px;
    border: 1px solid var(--sp-glass-border-subtle);
  }

  .sp-detail-meta-value--secondary {
    color: var(--sp-text-secondary);
    font-size: 12px;
  }

  /* ---- Annotation Section ---- */

  .sp-detail-annotation {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .sp-detail-annotation-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 14px;
    border-radius: var(--sp-radius);
    background: var(--sp-glass-bg-heavy);
    border: 1px solid var(--sp-glass-border-subtle);
  }

  .sp-detail-annotation-row {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  .sp-detail-annotation-row svg {
    width: 13px;
    height: 13px;
    color: var(--sp-text-tertiary);
    flex-shrink: 0;
    margin-top: 2px;
  }

  .sp-detail-annotation-label {
    font-size: 10px;
    font-weight: 600;
    color: var(--sp-text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    line-height: 1;
    margin-bottom: 3px;
  }

  .sp-detail-annotation-value {
    font-size: 12px;
    line-height: 1.4;
    color: var(--sp-text);
    word-break: break-all;
  }

  .sp-detail-annotation-value--mono {
    font-family: "SF Mono", "Cascadia Code", "Fira Code", "Consolas", monospace;
    font-size: 11px;
    background: var(--sp-bg-hover);
    padding: 2px 6px;
    border-radius: 4px;
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .sp-detail-btn-goto {
    width: 100%;
    height: 44px;
    padding: 0 20px;
    border-radius: var(--sp-radius);
    border: none;
    background: var(--sp-accent-gradient);
    color: #fff;
    font-family: var(--sp-font);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.25s ease;
    box-shadow: 0 2px 12px var(--sp-accent-glow);
  }

  .sp-detail-btn-goto svg {
    width: 16px;
    height: 16px;
  }

  .sp-detail-btn-goto:hover {
    box-shadow: 0 4px 20px var(--sp-accent-glow);
    transform: translateY(-2px);
  }

  .sp-detail-btn-goto:active {
    transform: translateY(0) scale(0.98);
    transition-duration: 0.1s;
  }

  /* ---- Forced Colors / High Contrast ---- */

  @media (forced-colors: active) {
    .sp-detail {
      border: 2px solid ButtonText !important;
      background: Canvas !important;
    }

    .sp-detail-back,
    .sp-detail-btn-goto,
    .sp-detail-btn-resolve,
    .sp-detail-btn-reopen,
    .sp-detail-btn-delete {
      border: 2px solid ButtonText !important;
      background: Canvas !important;
      color: ButtonText !important;
    }

    .sp-detail-back:focus-visible,
    .sp-detail-btn-goto:focus-visible,
    .sp-detail-btn-resolve:focus-visible,
    .sp-detail-btn-reopen:focus-visible,
    .sp-detail-btn-delete:focus-visible {
      outline: 3px solid Highlight !important;
    }

    .sp-detail-status-pill {
      border: 2px solid ButtonText !important;
      background: Canvas !important;
      color: ButtonText !important;
    }

    .sp-detail-message {
      border-left: 3px solid ButtonText !important;
    }
  }

  /* ---- Diagnostics Section ---- */

  .sp-detail-diag {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .sp-detail-diag-toggle {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 10px 12px;
    border-radius: var(--sp-radius);
    border: 1px solid var(--sp-glass-border-subtle);
    background: var(--sp-glass-bg-heavy);
    color: var(--sp-text);
    font-family: var(--sp-font);
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s ease;
  }

  .sp-detail-diag-toggle:hover {
    background: var(--sp-bg-hover);
  }

  .sp-detail-diag-toggle svg {
    width: 12px;
    height: 12px;
    transition: transform 0.2s ease;
  }

  .sp-detail-diag-toggle[aria-expanded="true"] svg {
    transform: rotate(90deg);
  }

  .sp-detail-diag-counts {
    display: inline-flex;
    gap: 6px;
    font-weight: 500;
    color: var(--sp-text-tertiary);
  }

  .sp-detail-diag-count {
    padding: 1px 7px;
    border-radius: var(--sp-radius-full);
    background: var(--sp-bg-hover);
    font-variant-numeric: tabular-nums;
  }

  .sp-detail-diag-count--errors {
    background: rgba(239, 68, 68, 0.14);
    color: #ef4444;
  }

  .sp-detail-diag-body {
    display: none;
    flex-direction: column;
    gap: 14px;
  }

  .sp-detail-diag-body--open {
    display: flex;
  }

  .sp-detail-diag-group-title {
    font-size: 10px;
    font-weight: 700;
    color: var(--sp-text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 6px;
  }

  .sp-detail-diag-list {
    list-style: none;
    padding: 0;
    margin: 0;
    border-radius: var(--sp-radius);
    border: 1px solid var(--sp-glass-border-subtle);
    background: var(--sp-glass-bg-heavy);
    max-height: 240px;
    overflow-y: auto;
  }

  .sp-detail-diag-list li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 8px 10px;
    border-bottom: 1px solid var(--sp-glass-border-subtle);
    font-family: "SF Mono", "Cascadia Code", "Fira Code", "Consolas", monospace;
    font-size: 11px;
    line-height: 1.45;
    color: var(--sp-text);
  }

  .sp-detail-diag-list li:last-child {
    border-bottom: none;
  }

  .sp-detail-diag-level {
    flex-shrink: 0;
    font-weight: 700;
    width: 44px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-size: 10px;
  }

  .sp-detail-diag-level--log {
    color: var(--sp-text-tertiary);
  }
  .sp-detail-diag-level--info {
    color: #3b82f6;
  }
  .sp-detail-diag-level--warn {
    color: #f59e0b;
  }
  .sp-detail-diag-level--error {
    color: #ef4444;
  }

  .sp-detail-diag-message {
    flex: 1;
    min-width: 0;
    word-break: break-word;
    white-space: pre-wrap;
  }

  .sp-detail-diag-net {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 8px;
    align-items: center;
  }

  .sp-detail-diag-net-status {
    flex-shrink: 0;
    font-weight: 700;
    color: #ef4444;
    min-width: 32px;
    text-align: right;
    font-variant-numeric: tabular-nums;
  }

  .sp-detail-diag-net-method {
    flex-shrink: 0;
    font-weight: 600;
    color: var(--sp-text-tertiary);
    min-width: 44px;
  }

  .sp-detail-diag-net-url {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--sp-text);
  }

  .sp-detail-diag-empty {
    padding: 12px;
    font-style: italic;
    font-size: 11px;
    color: var(--sp-text-tertiary);
    text-align: center;
  }

  /* ---- Reduced Motion ---- */

  @media (prefers-reduced-motion: reduce) {
    .sp-detail {
      transition-duration: 0.01ms !important;
    }

    .sp-detail-section {
      animation-duration: 0.01ms !important;
    }
  }
`;function Ce(s){if(/Edg\//i.test(s)){let e=s.match(/Edg\/([\d.]+)/);return e?`Edge ${e[1]}`:"Edge"}if(/OPR\//i.test(s)||/Opera/i.test(s)){let e=s.match(/OPR\/([\d.]+)/);return e?`Opera ${e[1]}`:"Opera"}if(/Firefox\//i.test(s)){let e=s.match(/Firefox\/([\d.]+)/);return e?`Firefox ${e[1]}`:"Firefox"}if(/Chrome\//i.test(s)&&!/Chromium/i.test(s)){let e=s.match(/Chrome\/([\d.]+)/);return e?`Chrome ${e[1]}`:"Chrome"}if(/Safari\//i.test(s)&&!/Chrome/i.test(s)){let e=s.match(/Version\/([\d.]+)/);return e?`Safari ${e[1]}`:"Safari"}return "Unknown"}function G(s,e){try{return new Date(s).toLocaleString(e,{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return s}}function Se(s){try{return new URL(s).pathname}catch{return s}}function Ee(s){return !!(/^data:image\/(jpeg|png|webp);/i.test(s)||/^https:\/\//i.test(s))}function B(s,e){return s.length<=e?s:s.slice(0,e-1)+"\u2026"}function Te(s){if(!s)return  false;let e=Array.isArray(s.console)?s.console.length:0,n=Array.isArray(s.network)?s.network.length:0;return e>0||n>0}function Be(s){return !Number.isFinite(s)||s<0?"\u2014":s<1e3?`${Math.round(s)} ms`:`${(s/1e3).toFixed(1)} s`}var q=class{constructor(e,n,t,r){this.colors=e;this.callbacks=n;this.t=t,this.locale=r,this.element=o("div",{class:"sp-detail"}),this.element.setAttribute("role","dialog"),this.element.setAttribute("aria-label","Feedback detail"),this.element.setAttribute("aria-hidden","true");let i=o("div",{class:"sp-detail-header"}),l=document.createElement("button");l.type="button",l.className="sp-detail-back",l.setAttribute("aria-label",this.t("detail.back")),l.appendChild(c(ge)),l.addEventListener("click",()=>{this.hide(),this.callbacks.onBack();}),this.element.appendChild(i),i.appendChild(l),this.content=o("div",{class:"sp-detail-content"}),this.element.appendChild(this.content);}colors;callbacks;element;_isVisible=false;currentFeedback=null;content;t;locale;resolveBtn=null;deleteBtn=null;isProcessing=false;show(e,n){this.currentFeedback=e,this.isProcessing=false;let t=this.element.querySelector(".sp-detail-header");if(!t)return;let r=t.querySelector(".sp-detail-back");if(!r)return;t.replaceChildren(r);let i=o("span",{class:"sp-detail-title"});a(i,this.t("detail.title").replace("{number}",String(n))),t.appendChild(i);let l=o("span",{class:"sp-badge"});l.style.background=H(e.type,this.colors),l.style.color=M(e.type,this.colors),a(l,e.type),t.appendChild(l),this.content.replaceChildren();let d=0,p=this.buildSection(d++);this.buildStatusActions(p,e),this.content.appendChild(p);let h=this.buildSection(d++),u=o("div",{class:"sp-detail-section-title"});a(u,this.t("detail.message")),h.appendChild(u);let v=o("div",{class:"sp-detail-message"});if(v.style.borderLeftColor=M(e.type,this.colors),a(v,e.message),h.appendChild(v),this.content.appendChild(h),e.screenshotUrl&&Ee(e.screenshotUrl)){let g=this.buildSection(d++),x=o("div",{class:"sp-detail-section-title"});a(x,this.t("detail.screenshot")),g.appendChild(x);let b=document.createElement("img");b.className="sp-detail-screenshot",b.src=e.screenshotUrl,b.alt=this.t("detail.screenshotAlt"),b.loading="lazy",b.referrerPolicy="no-referrer",g.appendChild(b),this.content.appendChild(g);}let m=this.buildSection(d++),f=o("div",{class:"sp-detail-section-title"});if(a(f,this.t("detail.metadata")),m.appendChild(f),this.buildMetadata(m,e),this.content.appendChild(m),e.annotations.length>0){let g=this.buildSection(d++),x=o("div",{class:"sp-detail-section-title"});x.appendChild(c(R));let b=o("span");a(b,this.t("detail.annotation")),x.appendChild(b),g.appendChild(x),this.buildAnnotation(g,e),this.content.appendChild(g);}if(Te(e.diagnostics)){let g=this.buildSection(d++),x=o("div",{class:"sp-detail-section-title"});x.appendChild(c(we));let b=o("span");a(b,this.t("detail.diagnostics")),x.appendChild(b),g.appendChild(x),this.buildDiagnostics(g,e),this.content.appendChild(g);}this._isVisible=true,this.element.setAttribute("aria-hidden","false"),this.element.offsetHeight,this.element.classList.add("sp-detail--visible"),requestAnimationFrame(()=>{r.focus();});}hide(){this._isVisible&&(this._isVisible=false,this.element.classList.remove("sp-detail--visible"),this.element.setAttribute("aria-hidden","true"),this.currentFeedback=null,this.resolveBtn=null,this.deleteBtn=null);}get isVisible(){return this._isVisible}destroy(){this.hide(),this.element.remove();}buildSection(e){let n=o("div",{class:"sp-detail-section"});return n.style.animationDelay=`${e*40}ms`,n}buildStatusActions(e,n){let t=n.status==="resolved",r=o("div",{class:"sp-detail-section-title"});a(r,this.t("detail.status")),e.appendChild(r);let i=o("div",{class:"sp-detail-status"}),l=o("span",{class:`sp-detail-status-pill ${t?"sp-detail-status-pill--resolved":"sp-detail-status-pill--open"}`}),d=o("span",{class:"sp-detail-status-dot"});d.style.background=t?"#9ca3af":"#22c55e",l.appendChild(d);let p=o("span");a(p,t?this.t("detail.reopen"):this.t("detail.resolve")),a(p,t?"Resolved":"Open"),l.appendChild(p),i.appendChild(l),e.appendChild(i);let h=o("div",{class:"sp-detail-actions"});if(this.resolveBtn=document.createElement("button"),this.resolveBtn.type="button",t){this.resolveBtn.className="sp-detail-btn-reopen",this.resolveBtn.appendChild(c(V));let v=document.createElement("span");a(v,this.t("detail.reopen")),this.resolveBtn.appendChild(v);}else {this.resolveBtn.className="sp-detail-btn-resolve",this.resolveBtn.appendChild(c(F));let v=document.createElement("span");a(v,this.t("detail.resolve")),this.resolveBtn.appendChild(v);}this.resolveBtn.addEventListener("click",()=>this.handleResolve()),this.deleteBtn=document.createElement("button"),this.deleteBtn.type="button",this.deleteBtn.className="sp-detail-btn-delete",this.deleteBtn.appendChild(c(Y));let u=document.createElement("span");a(u,this.t("detail.delete")),this.deleteBtn.appendChild(u),this.deleteBtn.addEventListener("click",()=>this.handleDelete()),h.appendChild(this.resolveBtn),h.appendChild(this.deleteBtn),e.appendChild(h);}buildMetadata(e,n){let t=o("div",{class:"sp-detail-meta"});if(this.addMetaRow(t,be,this.t("detail.page"),()=>{let r=o("div",{class:"sp-detail-meta-value"}),i=Se(n.url);return a(r,B(i,60)),r.title=n.url,r}),this.addMetaRow(t,ve,this.t("detail.author"),()=>{let r=o("div",{class:"sp-detail-meta-value"}),i=n.authorName||"Anonymous",l=n.authorEmail;return a(r,l?`${i} (${l})`:i),r}),this.addMetaRow(t,xe,this.t("detail.date"),()=>{let r=o("div",{class:"sp-detail-meta-value"});return a(r,G(n.createdAt,this.locale.startsWith("fr")?"fr":"en")),r}),this.addMetaRow(t,fe,this.t("detail.viewport"),()=>{let r=o("div",{class:"sp-detail-meta-value sp-detail-meta-value--mono"});return a(r,n.viewport||"Unknown"),r}),this.addMetaRow(t,'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',this.t("detail.browser"),()=>{let r=o("div",{class:"sp-detail-meta-value"});return a(r,Ce(n.userAgent)),r}),n.resolvedAt){let r=n.resolvedAt;this.addMetaRow(t,F,this.t("detail.resolvedAt"),()=>{let i=o("div",{class:"sp-detail-meta-value sp-detail-meta-value--secondary"});return a(i,G(r,this.locale.startsWith("fr")?"fr":"en")),i});}e.appendChild(t);}addMetaRow(e,n,t,r){let i=o("div",{class:"sp-detail-meta-row"});i.appendChild(c(n));let l=o("div",{class:"sp-detail-meta-content"}),d=o("div",{class:"sp-detail-meta-label"});a(d,t),l.appendChild(d),l.appendChild(r()),i.appendChild(l),e.appendChild(i);}buildAnnotation(e,n){let t=n.annotations[0];if(!t)return;let r=o("div",{class:"sp-detail-annotation"}),i=o("div",{class:"sp-detail-annotation-info"});this.addAnnotationRow(i,me,this.t("detail.element"),()=>{let p=o("span",{class:"sp-detail-annotation-value sp-detail-annotation-value--mono"}),h=t.elementId?`<${t.elementTag}#${t.elementId}>`:`<${t.elementTag}>`;return a(p,h),p}),this.addAnnotationRow(i,ye,this.t("detail.selector"),()=>{let p=o("span",{class:"sp-detail-annotation-value sp-detail-annotation-value--mono"});return a(p,B(t.cssSelector,60)),p.title=t.cssSelector,p}),this.addAnnotationRow(i,R,this.t("detail.position"),()=>{let p=o("span",{class:"sp-detail-annotation-value"});return a(p,`${t.xPct.toFixed(1)}%, ${t.yPct.toFixed(1)}%`+(t.wPct>0||t.hPct>0?` (${t.wPct.toFixed(1)}% \xD7 ${t.hPct.toFixed(1)}%)`:"")),p}),r.appendChild(i);let l=document.createElement("button");l.type="button",l.className="sp-detail-btn-goto",l.appendChild(c(R));let d=document.createElement("span");a(d,this.t("detail.goToAnnotation")),l.appendChild(d),l.addEventListener("click",()=>{this.currentFeedback&&this.callbacks.onGoToAnnotation(this.currentFeedback);}),r.appendChild(l),e.appendChild(r);}buildDiagnostics(e,n){let t=n.diagnostics;if(!t)return;let r=Array.isArray(t.console)?t.console:[],i=Array.isArray(t.network)?t.network:[],l=r.filter(x=>x.level==="error").length,d=o("div",{class:"sp-detail-diag"}),p=document.createElement("button");p.type="button",p.className="sp-detail-diag-toggle",p.setAttribute("aria-expanded","false"),p.setAttribute("aria-label",this.t("detail.diagnostics.expand"));let h=document.createElement("span"),u=document.createElement("span");u.style.display="inline-flex",u.style.alignItems="center",u.style.gap="8px",u.appendChild(c(ke)),a(h,this.t("detail.diagnostics")),u.appendChild(h),p.appendChild(u);let v=o("span",{class:"sp-detail-diag-counts"}),m=o("span",{class:`sp-detail-diag-count${l>0?" sp-detail-diag-count--errors":""}`});a(m,`${r.length} console`);let f=o("span",{class:`sp-detail-diag-count${i.length>0?" sp-detail-diag-count--errors":""}`});a(f,`${i.length} net`),v.appendChild(m),v.appendChild(f),p.appendChild(v);let g=o("div",{class:"sp-detail-diag-body"});if(r.length>0){let x=document.createElement("div"),b=o("div",{class:"sp-detail-diag-group-title"});a(b,this.t("detail.diagnostics.console")),x.appendChild(b);let w=document.createElement("ul");w.className="sp-detail-diag-list";for(let y of r){let k=document.createElement("li"),E=o("span",{class:`sp-detail-diag-level sp-detail-diag-level--${y.level}`});a(E,y.level);let C=o("span",{class:"sp-detail-diag-message"});a(C,B(y.message,240)),C.title=y.message,k.appendChild(E),k.appendChild(C),w.appendChild(k);}x.appendChild(w),g.appendChild(x);}if(i.length>0){let x=document.createElement("div"),b=o("div",{class:"sp-detail-diag-group-title"});a(b,this.t("detail.diagnostics.network")),x.appendChild(b);let w=document.createElement("ul");w.className="sp-detail-diag-list";for(let y of i){let k=document.createElement("li");k.classList.add("sp-detail-diag-net");let E=o("span",{class:"sp-detail-diag-net-status"});a(E,y.status===0?"ERR":String(y.status));let C=o("span",{class:"sp-detail-diag-net-method"});a(C,y.method);let A=o("span",{class:"sp-detail-diag-net-url"});a(A,B(y.url,120)),A.title=`${y.url} \u2014 ${Be(y.durationMs)}`,k.appendChild(E),k.appendChild(C),k.appendChild(A),w.appendChild(k);}x.appendChild(w),g.appendChild(x);}p.addEventListener("click",()=>{let b=!(p.getAttribute("aria-expanded")==="true");p.setAttribute("aria-expanded",String(b)),p.setAttribute("aria-label",b?this.t("detail.diagnostics.collapse"):this.t("detail.diagnostics.expand")),g.classList.toggle("sp-detail-diag-body--open",b);}),d.appendChild(p),d.appendChild(g),e.appendChild(d);}addAnnotationRow(e,n,t,r){let i=o("div",{class:"sp-detail-annotation-row"});i.appendChild(c(n));let l=o("div",{class:"sp-detail-meta-content"}),d=o("div",{class:"sp-detail-annotation-label"});a(d,t),l.appendChild(d),l.appendChild(r()),i.appendChild(l),e.appendChild(i);}async handleResolve(){if(!(this.isProcessing||!this.currentFeedback)){this.isProcessing=true,this.resolveBtn&&this.setButtonLoading(this.resolveBtn),this.deleteBtn&&(this.deleteBtn.disabled=true);try{await this.callbacks.onResolve(this.currentFeedback);}catch{this.isProcessing=false,this.resolveBtn&&this.restoreResolveBtn(this.currentFeedback),this.deleteBtn&&(this.deleteBtn.disabled=false);}}}async handleDelete(){if(!(this.isProcessing||!this.currentFeedback)){this.isProcessing=true,this.deleteBtn&&this.setButtonLoading(this.deleteBtn),this.resolveBtn&&(this.resolveBtn.disabled=true);try{await this.callbacks.onDelete(this.currentFeedback);}catch{this.isProcessing=false,this.deleteBtn&&this.restoreDeleteBtn(),this.resolveBtn&&(this.resolveBtn.disabled=false);}}}setButtonLoading(e){e.disabled=true,e.replaceChildren(o("div",{class:"sp-spinner sp-spinner--sm"}));}restoreResolveBtn(e){if(!this.resolveBtn)return;this.resolveBtn.disabled=false,this.resolveBtn.replaceChildren();let n=e.status==="resolved";this.resolveBtn.appendChild(c(n?V:F));let t=document.createElement("span");a(t,n?this.t("detail.reopen"):this.t("detail.resolve")),this.resolveBtn.appendChild(t);}restoreDeleteBtn(){if(!this.deleteBtn)return;this.deleteBtn.disabled=false,this.deleteBtn.replaceChildren(),this.deleteBtn.appendChild(c(Y));let e=document.createElement("span");a(e,this.t("detail.delete")),this.deleteBtn.appendChild(e);}};var Ae='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5h10"/><path d="M11 9h7"/><path d="M11 13h4"/><path d="M3 17l3 3 3-3"/><path d="M6 18V4"/></svg>',Q='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',Le='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>',W={question:0,change:1,bug:2,other:3};function Ct(s,e){let n=[...s];switch(e){case "newest":n.sort((t,r)=>new Date(r.createdAt).getTime()-new Date(t.createdAt).getTime());break;case "oldest":n.sort((t,r)=>new Date(t.createdAt).getTime()-new Date(r.createdAt).getTime());break;case "by-type":n.sort((t,r)=>{let i=W[t.type]??99,l=W[r.type]??99;return i!==l?i-l:new Date(r.createdAt).getTime()-new Date(t.createdAt).getTime()});break;case "open-first":n.sort((t,r)=>{let i=t.status==="open"?0:1,l=r.status==="open"?0:1;return i!==l?i-l:new Date(r.createdAt).getTime()-new Date(t.createdAt).getTime()});break}return n}function Me(s){try{return new URL(s).pathname}catch{return s}}function Re(s,e){if(s.length<=e)return s;let n="\u2026",t=Math.floor((e-1)/2);return s.slice(0,t)+n+s.slice(-t)}function St(s){let e=new Map;for(let t of s){let r=Me(t.url),i=e.get(r);i?i.push(t):e.set(r,[t]);}return new Map([...e.entries()].sort((t,r)=>r[1].length-t[1].length))}function Et(s,e,n){let t=o("div",{class:"sp-group-header"});t.setAttribute("role","button"),t.setAttribute("tabindex","0"),t.setAttribute("aria-expanded","true"),t.style.borderBottomColor=n.border;let r=o("span",{class:"sp-group-header-chevron"});r.appendChild(c(Le)),t.appendChild(r);let i=o("span",{class:"sp-group-header-icon"});i.appendChild(c(Q)),t.appendChild(i);let l=o("span",{class:"sp-group-header-path"}),d=Re(s,40);a(l,d),s.length>40&&(l.title=s),t.appendChild(l);let p=o("span",{class:"sp-group-header-count"});p.style.background=n.accentLight,p.style.color=n.accent,a(p,String(e)),t.appendChild(p);let h=()=>{let u=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",String(!u)),t.classList.toggle("sp-group-header--collapsed",u);let v=t.nextElementSibling;v?.classList.contains("sp-group-content")&&v.classList.toggle("sp-group-content--collapsed",u);};return t.addEventListener("click",h),t.addEventListener("keydown",u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),h());}),t}var X=class{element;_sortMode="newest";_groupByPage=false;menuEl=null;sortBtn;groupToggle;t;colors;onChange;outsideClickHandler=null;constructor(e,n,t){this.colors=e,this.onChange=n,this.t=t,this.element=o("div",{class:"sp-sort-controls"}),this.sortBtn=document.createElement("button"),this.sortBtn.className="sp-sort-btn",this.sortBtn.setAttribute("aria-haspopup","listbox"),this.sortBtn.setAttribute("aria-expanded","false"),this.sortBtn.setAttribute("aria-label",this.t("sort.label"));let r=c(Ae);this.sortBtn.appendChild(r);let i=o("span",{class:"sp-sort-btn-label"});a(i,this.t("sort.newest")),this.sortBtn.appendChild(i),this.sortBtn.addEventListener("click",p=>{p.stopPropagation(),this.toggleMenu();}),this.groupToggle=document.createElement("button"),this.groupToggle.className="sp-group-toggle",this.groupToggle.setAttribute("aria-pressed","false");let l=c(Q);this.groupToggle.appendChild(l);let d=o("span",{class:"sp-group-toggle-label"});a(d,this.t("group.byPage")),this.groupToggle.appendChild(d),this.groupToggle.addEventListener("click",()=>{this._groupByPage=!this._groupByPage,this.groupToggle.classList.toggle("sp-group-toggle--active",this._groupByPage),this.groupToggle.setAttribute("aria-pressed",String(this._groupByPage)),this.onChange();}),this.element.appendChild(this.sortBtn),this.element.appendChild(this.groupToggle);}get sortMode(){return this._sortMode}get groupByPage(){return this._groupByPage}toggleMenu(){if(this.menuEl){this.closeMenu();return}this.openMenu();}openMenu(){this.menuEl=o("div",{class:"sp-sort-menu"}),this.menuEl.setAttribute("role","listbox"),this.menuEl.setAttribute("aria-label",this.t("sort.label")),this.sortBtn.setAttribute("aria-expanded","true");let e=[{mode:"newest",label:this.t("sort.newest")},{mode:"oldest",label:this.t("sort.oldest")},{mode:"by-type",label:this.t("sort.byType")},{mode:"open-first",label:this.t("sort.openFirst")}];for(let n of e){let t=document.createElement("button");t.className=`sp-sort-option${n.mode===this._sortMode?" sp-sort-option--active":""}`,t.setAttribute("role","option"),t.setAttribute("aria-selected",String(n.mode===this._sortMode)),n.mode===this._sortMode&&(t.style.background=this.colors.accentLight,t.style.color=this.colors.accent),a(t,n.label),t.addEventListener("click",r=>{r.stopPropagation(),this._sortMode=n.mode,this.updateSortLabel(),this.closeMenu(),this.onChange();}),this.menuEl.appendChild(t);}this.element.appendChild(this.menuEl),requestAnimationFrame(()=>{this.outsideClickHandler=n=>{this.menuEl&&!this.element.contains(n.target)&&this.closeMenu();},document.addEventListener("click",this.outsideClickHandler,true);}),this.menuEl.addEventListener("keydown",n=>{n.key==="Escape"&&(this.closeMenu(),this.sortBtn.focus());});}closeMenu(){this.menuEl&&(this.menuEl.remove(),this.menuEl=null),this.sortBtn.setAttribute("aria-expanded","false"),this.outsideClickHandler&&(document.removeEventListener("click",this.outsideClickHandler,true),this.outsideClickHandler=null);}updateSortLabel(){let e={newest:this.t("sort.newest"),oldest:this.t("sort.oldest"),"by-type":this.t("sort.byType"),"open-first":this.t("sort.openFirst")},n=this.sortBtn.querySelector(".sp-sort-btn-label");n&&a(n,e[this._sortMode]);}destroy(){this.closeMenu();}},Tt=`
  /* ============================
     Sort Controls Container
     ============================ */

  .sp-sort-controls {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 4px;
    padding-top: 8px;
    border-top: 1px solid var(--sp-border);
  }

  /* ============================
     Sort Dropdown Button
     ============================ */

  .sp-sort-btn {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 12px;
    border-radius: var(--sp-radius-full);
    border: 1px solid var(--sp-border);
    background: var(--sp-glass-bg-heavy);
    color: var(--sp-text-secondary);
    font-family: var(--sp-font);
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease;
    position: relative;
  }

  .sp-sort-btn svg {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }

  .sp-sort-btn:hover {
    border-color: var(--sp-accent);
    color: var(--sp-accent);
    background: var(--sp-accent-light);
  }

  .sp-sort-btn[aria-expanded="true"] {
    border-color: var(--sp-accent);
    color: var(--sp-accent);
    background: var(--sp-accent-light);
  }

  /* ============================
     Sort Floating Menu
     ============================ */

  .sp-sort-menu {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    min-width: 170px;
    padding: 4px;
    border-radius: var(--sp-radius);
    background: var(--sp-glass-bg-heavy);
    backdrop-filter: blur(var(--sp-blur-heavy));
    -webkit-backdrop-filter: blur(var(--sp-blur-heavy));
    border: 1px solid var(--sp-glass-border);
    box-shadow: var(--sp-shadow-md);
    z-index: 10;
    animation: sp-sort-menu-in 0.15s ease-out both;
  }

  @keyframes sp-sort-menu-in {
    from {
      opacity: 0;
      transform: translateY(-4px) scale(0.97);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  /* ============================
     Sort Menu Option
     ============================ */

  .sp-sort-option {
    display: block;
    width: 100%;
    padding: 8px 12px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: var(--sp-text-secondary);
    font-family: var(--sp-font);
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    text-align: left;
    transition: all 0.15s ease;
  }

  .sp-sort-option:hover {
    background: var(--sp-bg-hover);
    color: var(--sp-text);
  }

  .sp-sort-option--active {
    font-weight: 600;
  }

  .sp-sort-option--active:hover {
    background: var(--sp-accent-light);
    color: var(--sp-accent);
  }

  /* ============================
     Group by Page Toggle
     ============================ */

  .sp-group-toggle {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 12px;
    border-radius: var(--sp-radius-full);
    border: 1px solid var(--sp-border);
    background: var(--sp-glass-bg-heavy);
    color: var(--sp-text-secondary);
    font-family: var(--sp-font);
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease;
  }

  .sp-group-toggle svg {
    width: 13px;
    height: 13px;
    flex-shrink: 0;
  }

  .sp-group-toggle:hover {
    border-color: var(--sp-accent);
    color: var(--sp-accent);
    background: var(--sp-accent-light);
  }

  .sp-group-toggle--active {
    background: var(--sp-accent-gradient);
    border-color: transparent;
    color: #fff;
    box-shadow: 0 2px 8px var(--sp-accent-glow);
  }

  .sp-group-toggle--active:hover {
    background: var(--sp-accent-gradient);
    border-color: transparent;
    color: #fff;
  }

  /* ============================
     Page Group Header
     ============================ */

  .sp-group-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: var(--sp-accent-light);
    border-bottom: 1px solid var(--sp-border);
    cursor: pointer;
    user-select: none;
    position: sticky;
    top: 0;
    z-index: 2;
    transition: background 0.2s ease;
  }

  .sp-group-header:hover {
    background: var(--sp-bg-hover);
  }

  .sp-group-header:focus-visible {
    outline: 2px solid var(--sp-accent);
    outline-offset: -2px;
  }

  .sp-group-header-chevron {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    transition: transform 0.2s ease;
    transform: rotate(90deg);
  }

  .sp-group-header-chevron svg {
    width: 12px;
    height: 12px;
    color: var(--sp-text-tertiary);
  }

  .sp-group-header--collapsed .sp-group-header-chevron {
    transform: rotate(0deg);
  }

  .sp-group-header-icon {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .sp-group-header-icon svg {
    width: 14px;
    height: 14px;
    color: var(--sp-text-tertiary);
  }

  .sp-group-header-path {
    font-size: 12px;
    font-weight: 600;
    color: var(--sp-text-secondary);
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .sp-group-header-count {
    font-size: 11px;
    font-weight: 700;
    padding: 1px 8px;
    border-radius: var(--sp-radius-full);
    flex-shrink: 0;
    font-variant-numeric: tabular-nums;
  }

  /* ============================
     Page Group Content
     ============================ */

  .sp-group-content {
    overflow: hidden;
    transition: max-height 0.25s ease, opacity 0.2s ease;
    max-height: 5000px;
    opacity: 1;
  }

  .sp-group-content--collapsed {
    max-height: 0;
    opacity: 0;
    pointer-events: none;
  }

  /* ============================
     Forced Colors / High Contrast
     ============================ */

  @media (forced-colors: active) {
    .sp-sort-btn,
    .sp-group-toggle,
    .sp-sort-option,
    .sp-group-header {
      border: 2px solid ButtonText !important;
      background: Canvas !important;
      color: ButtonText !important;
    }

    .sp-sort-btn:focus-visible,
    .sp-group-toggle:focus-visible,
    .sp-sort-option:focus-visible,
    .sp-group-header:focus-visible {
      outline: 3px solid Highlight !important;
    }

    .sp-sort-menu {
      border: 2px solid ButtonText !important;
      background: Canvas !important;
    }
  }

  /* ============================
     Reduced Motion
     ============================ */

  @media (prefers-reduced-motion: reduce) {
    .sp-sort-menu {
      animation: none;
    }
    .sp-group-header-chevron {
      transition: none;
    }
    .sp-group-content {
      transition: none;
    }
  }
`;var Lt=`
  .sp-stats-bar {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px 24px;
    border-bottom: 1px solid var(--sp-border);
    user-select: none;
  }

  .sp-stats-bar[hidden] {
    display: none;
  }

  .sp-stats-row {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .sp-stats-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .sp-stats-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .sp-stats-value {
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    color: var(--sp-text);
    font-variant-numeric: tabular-nums;
    font-feature-settings: "tnum";
    transition: opacity 0.3s ease;
  }

  .sp-stats-label {
    font-size: 11px;
    line-height: 1;
    color: var(--sp-text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .sp-stats-progress {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .sp-stats-progress-track {
    flex: 1;
    height: 4px;
    border-radius: 2px;
    background: var(--sp-border);
    overflow: hidden;
  }

  .sp-stats-progress-fill {
    height: 100%;
    border-radius: 2px;
    background: linear-gradient(90deg, var(--sp-accent), #22c55e);
    width: 0%;
    transition: width 0.5s ease;
  }

  .sp-stats-progress-label {
    font-size: 10px;
    line-height: 1;
    color: var(--sp-text-tertiary);
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
    font-feature-settings: "tnum";
    min-width: 64px;
    text-align: right;
  }
`,J=class{constructor(e,n){this.colors=e;this.t=n,this.element=o("div",{class:"sp-stats-bar"}),this.element.setAttribute("aria-label","Feedback statistics"),this.element.hidden=true;let t=o("div",{class:"sp-stats-row"}),r=o("div",{class:"sp-stats-item"}),i=o("span",{class:"sp-stats-dot"});i.style.background="#22c55e",this.valueOpen=o("span",{class:"sp-stats-value"}),a(this.valueOpen,"0");let l=o("span",{class:"sp-stats-label"});a(l,this.t("stats.open")),r.appendChild(i),r.appendChild(this.valueOpen),r.appendChild(l);let d=o("div",{class:"sp-stats-item"}),p=o("span",{class:"sp-stats-dot"});p.style.background="#9ca3af",this.valueResolved=o("span",{class:"sp-stats-value"}),a(this.valueResolved,"0");let h=o("span",{class:"sp-stats-label"});a(h,this.t("stats.resolved")),d.appendChild(p),d.appendChild(this.valueResolved),d.appendChild(h);let u=o("div",{class:"sp-stats-item"}),v=o("span",{class:"sp-stats-dot"});v.style.background=this.colors.typeBug,this.valueBugs=o("span",{class:"sp-stats-value"}),a(this.valueBugs,"0");let m=o("span",{class:"sp-stats-label"});a(m,this.t("stats.bugs")),u.appendChild(v),u.appendChild(this.valueBugs),u.appendChild(m),t.appendChild(r),t.appendChild(d),t.appendChild(u);let f=o("div",{class:"sp-stats-progress"}),g=o("div",{class:"sp-stats-progress-track"});this.progressFill=o("div",{class:"sp-stats-progress-fill"}),g.appendChild(this.progressFill),this.progressLabel=o("span",{class:"sp-stats-progress-label"}),a(this.progressLabel,""),f.appendChild(g),f.appendChild(this.progressLabel),this.element.appendChild(t),this.element.appendChild(f);}colors;element;valueOpen;valueResolved;valueBugs;progressFill;progressLabel;t;update(e,n){if(n===0){this.element.hidden=true;return}this.element.hidden=false;let t=0,r=0,i=0;for(let h of e)h.status==="open"&&t++,h.status==="resolved"&&r++,h.type==="bug"&&i++;a(this.valueOpen,String(t)),a(this.valueResolved,String(r)),a(this.valueBugs,String(i));let l=e.length,d=l>0?Math.round(r/l*100):0;requestAnimationFrame(()=>{this.progressFill.style.width=`${d}%`;});let p=this.t("stats.progress").replace("{percent}",String(d));a(this.progressLabel,p);}};var Fe='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/><path d="M18 8h.01"/><path d="M6 12h.01"/><path d="M18 12h.01"/><path d="M8 16h8"/></svg>';function Ft(s){let e=s.querySelectorAll(".sp-card");for(let n=0;n<e.length;n++)if(e[n]?.classList.contains("sp-card--focused"))return n;return  -1}function Pt(s,e){let n=s.querySelectorAll(".sp-card");if(n.length===0)return;for(let i of n)i.classList.remove("sp-card--focused");let t=Math.max(0,Math.min(e,n.length-1)),r=n[t];r&&(r.classList.add("sp-card--focused"),r.scrollIntoView({block:"nearest",behavior:"smooth"}),r.focus({preventScroll:true}));}var Pe=[{keys:["J","K"],label:"shortcuts.navigate"},{keys:["R"],label:"shortcuts.resolve"},{keys:["D"],label:"shortcuts.delete"},{keys:["F","/"],label:"shortcuts.search"},{keys:["X"],label:"shortcuts.select"},{keys:["?"],label:"shortcuts.help"},{keys:["Esc"],label:"shortcuts.close"}],Ot=`
  /* ---- Help overlay backdrop ---- */

  .sp-shortcuts-overlay {
    position: fixed;
    inset: 0;
    background: var(--sp-backdrop, rgba(15, 23, 42, 0.2));
    backdrop-filter: blur(var(--sp-blur));
    -webkit-backdrop-filter: blur(var(--sp-blur));
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
  }

  .sp-shortcuts-overlay--visible {
    opacity: 1;
    pointer-events: auto;
  }

  /* ---- Glassmorphism card ---- */

  .sp-shortcuts-card {
    width: 380px;
    max-width: calc(100vw - 32px);
    padding: 24px 28px 20px;
    border-radius: 20px;
    background: var(--sp-glass-bg-heavy);
    backdrop-filter: blur(var(--sp-blur-heavy));
    -webkit-backdrop-filter: blur(var(--sp-blur-heavy));
    border: 1px solid var(--sp-glass-border);
    box-shadow: var(--sp-shadow-xl);
    font-family: var(--sp-font);
    position: relative;
    transform: scale(0.92) translateY(8px);
    transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sp-shortcuts-overlay--visible .sp-shortcuts-card {
    transform: scale(1) translateY(0);
  }

  /* ---- Title row ---- */

  .sp-shortcuts-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: 700;
    color: var(--sp-text);
    margin-bottom: 18px;
  }

  .sp-shortcuts-title svg {
    width: 18px;
    height: 18px;
    color: var(--sp-text-secondary);
    flex-shrink: 0;
  }

  /* ---- Close button ---- */

  .sp-shortcuts-close {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 28px;
    height: 28px;
    border-radius: 8px;
    border: none;
    background: transparent;
    color: var(--sp-text-tertiary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .sp-shortcuts-close:hover {
    background: var(--sp-bg-hover);
    color: var(--sp-text);
  }

  .sp-shortcuts-close svg {
    width: 14px;
    height: 14px;
  }

  /* ---- Two-column grid ---- */

  .sp-shortcuts-grid {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .sp-shortcuts-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .sp-shortcuts-keys {
    display: flex;
    align-items: center;
    gap: 4px;
    min-width: 80px;
    justify-content: flex-end;
  }

  .sp-shortcuts-separator {
    font-size: 11px;
    color: var(--sp-text-tertiary);
    user-select: none;
  }

  /* ---- Key badge (<kbd> styling) ---- */

  .sp-kbd {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 28px;
    height: 26px;
    padding: 0 7px;
    border-radius: 6px;
    background: var(--sp-bg-hover);
    border: 1px solid var(--sp-border);
    box-shadow:
      inset 0 -1px 0 rgba(0, 0, 0, 0.08),
      0 1px 2px rgba(0, 0, 0, 0.04);
    font-family: ui-monospace, "SF Mono", "Cascadia Code", "Segoe UI Mono", Menlo, monospace;
    font-size: 12px;
    font-weight: 600;
    color: var(--sp-text);
    text-align: center;
    line-height: 1;
    user-select: none;
  }

  /* ---- Description text ---- */

  .sp-shortcuts-desc {
    font-size: 13px;
    color: var(--sp-text-secondary);
    line-height: 1.3;
  }

  /* ---- Hint button (bottom-right of panel) ---- */

  .sp-shortcuts-hint {
    width: 24px;
    height: 24px;
    border-radius: var(--sp-radius-full);
    border: 1px solid var(--sp-border);
    background: var(--sp-bg-hover);
    color: var(--sp-text-tertiary);
    font-family: ui-monospace, "SF Mono", "Cascadia Code", "Segoe UI Mono", Menlo, monospace;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
    position: absolute;
    bottom: 12px;
    right: 12px;
  }

  .sp-shortcuts-hint:hover {
    background: var(--sp-accent-light);
    color: var(--sp-accent);
    border-color: var(--sp-accent);
  }

  .sp-shortcuts-hint::after {
    content: attr(aria-label);
    position: absolute;
    bottom: calc(100% + 6px);
    right: 0;
    padding: 4px 8px;
    border-radius: 6px;
    background: var(--sp-glass-bg-heavy);
    border: 1px solid var(--sp-glass-border);
    box-shadow: var(--sp-shadow-sm);
    font-family: var(--sp-font);
    font-size: 11px;
    font-weight: 500;
    color: var(--sp-text-secondary);
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transform: translateY(4px);
    transition: opacity 0.15s ease, transform 0.15s ease;
  }

  .sp-shortcuts-hint:hover::after {
    opacity: 1;
    transform: translateY(0);
  }

  /* ---- Card focus highlight (navigation) ---- */

  .sp-card--focused {
    outline: 2px solid var(--sp-accent);
    outline-offset: -2px;
    border-radius: inherit;
  }

  /* ---- Reduced motion ---- */

  @media (prefers-reduced-motion: reduce) {
    .sp-shortcuts-overlay,
    .sp-shortcuts-card,
    .sp-shortcuts-close,
    .sp-shortcuts-hint,
    .sp-shortcuts-hint::after {
      transition-duration: 0.01ms !important;
    }
  }
`,Oe='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',Z=class{constructor(e,n,t){this.t=t;this.keyMap=new Map([["j",()=>n.onNavigate("down")],["k",()=>n.onNavigate("up")],["r",()=>n.onResolve()],["d",()=>n.onDelete()],["f",()=>n.onFocusSearch()],["/",()=>n.onFocusSearch()],["x",()=>n.onToggleSelect()],["?",()=>this.toggleHelp()]]),this.helpOverlay=this.buildOverlay(),this.hintButton=this.buildHintButton(),this.boundHandler=r=>this.handleKeydown(r);}t;helpOverlay;hintButton;keyMap;boundHandler;shadowRoot=null;enabled=false;helpVisible=false;destroyed=false;enable(e){if(this.destroyed||this.enabled)return;e&&(this.shadowRoot=e),(this.shadowRoot??document).addEventListener("keydown",this.boundHandler),this.enabled=true;}disable(){if(!this.enabled)return;(this.shadowRoot??document).removeEventListener("keydown",this.boundHandler),this.enabled=false,this.helpVisible&&this.hideHelp();}toggleHelp(){this.helpVisible?this.hideHelp():this.showHelp();}destroy(){this.destroyed||(this.disable(),this.helpOverlay.remove(),this.hintButton.remove(),this.destroyed=true);}handleKeydown(e){if(e.key==="Escape"){this.helpVisible&&(e.preventDefault(),e.stopPropagation(),this.hideHelp());return}if(this.helpVisible)return;let n=e.composedPath()[0];if(n){let r=n.tagName?.toLowerCase();if(r==="input"||r==="textarea"||r==="select"||n.isContentEditable)return}if(e.ctrlKey||e.altKey||e.metaKey)return;let t=this.keyMap.get(e.key);t&&(e.preventDefault(),e.stopPropagation(),t());}showHelp(){this.helpVisible=true,this.helpOverlay.classList.add("sp-shortcuts-overlay--visible"),this.helpOverlay.querySelector(".sp-shortcuts-close")?.focus();}hideHelp(){this.helpVisible=false,this.helpOverlay.classList.remove("sp-shortcuts-overlay--visible");}buildOverlay(){let e=o("div",{class:"sp-shortcuts-overlay"});e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label",this.t("shortcuts.title")),e.addEventListener("click",d=>{d.target===e&&this.hideHelp();});let n=o("div",{class:"sp-shortcuts-card"}),t=o("div",{class:"sp-shortcuts-title"});t.appendChild(c(Fe));let r=o("span");a(r,this.t("shortcuts.title")),t.appendChild(r),n.appendChild(t);let i=document.createElement("button");i.className="sp-shortcuts-close",i.setAttribute("aria-label",this.t("shortcuts.close")),i.appendChild(c(Oe)),i.addEventListener("click",()=>this.hideHelp()),n.appendChild(i);let l=o("div",{class:"sp-shortcuts-grid"});for(let d of Pe){let p=o("div",{class:"sp-shortcuts-row"}),h=o("div",{class:"sp-shortcuts-keys"});d.keys.forEach((v,m)=>{if(m>0){let g=o("span",{class:"sp-shortcuts-separator"});a(g,"/"),h.appendChild(g);}let f=o("span",{class:"sp-kbd"});a(f,v),h.appendChild(f);});let u=o("span",{class:"sp-shortcuts-desc"});a(u,this.t(d.label)),p.appendChild(h),p.appendChild(u),l.appendChild(p);}return n.appendChild(l),e.appendChild(n),e}buildHintButton(){let e=document.createElement("button");return e.className="sp-shortcuts-hint",e.setAttribute("aria-label",this.t("shortcuts.hint")),a(e,"?"),e.addEventListener("click",n=>{n.stopPropagation(),this.toggleHelp();}),e}};export{pt as A,dt as B,ht as C,z as D,vt as E,U as F,yt as G,q as H,Ct as I,St as J,Et as K,X as L,Tt as M,Lt as N,J as O,Ft as P,Pt as Q,Ot as R,Z as S,c as a,o as b,a as c,L as d,He as e,De as f,Ie as g,je as h,_e as i,$e as j,ze as k,Ke as l,Ue as m,Ve as n,Ye as o,Ge as p,qe as q,We as r,Xe as s,Je as t,M as u,H as v,Ze as w,tt as x,nt as y,lt as z};//# sourceMappingURL=chunk-VBVIH4HZ.js.map
//# sourceMappingURL=chunk-VBVIH4HZ.js.map