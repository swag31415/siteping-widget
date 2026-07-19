import {z as z$1,A,t,y,N,M,E,C,R,G as G$1,w,b,u,v,B,c,e,s,a,f,g,j as j$1,k,l,m,x}from'./chunk-VBVIH4HZ.js';import {useRef,useState,useEffect}from'react';var Kt=new Set(["role","name","aria-label","rel","href"]);function qt(t,e){let n=Kt.has(t);n||=t.startsWith("data-")&&K(t);let i=K(e)&&e.length<100;return i||=e.startsWith("#")&&K(e.slice(1)),n&&i}function Ut(t){return K(t)}function Wt(t){return K(t)}function Yt(t){return  true}function dt(t,e){if(t.nodeType!==Node.ELEMENT_NODE)throw new Error("Can't generate CSS selector for non-element node type.");if(t.tagName.toLowerCase()==="html")return "html";let n={root:document.body,idName:Ut,className:Wt,tagName:Yt,attr:qt,timeoutMs:1e3,seedMinLength:3,optimizedMinLength:2,maxNumberOfPathChecks:1/0},i=new Date,o={...n,...e},r=Qt(o.root,n),s,a=0;for(let p of Gt(t,o,r)){if(new Date().getTime()-i.getTime()>o.timeoutMs||a>=o.maxNumberOfPathChecks){let u=Jt(t,r);if(!u)throw new Error(`Timeout: Can't find a unique selector after ${o.timeoutMs}ms`);return q(u)}if(a++,Me(p,r)){s=p;break}}if(!s)throw new Error("Selector was not found.");let l=[...ft(s,t,o,r,i)];return l.sort(Le),l.length>0?q(l[0]):q(s)}function*Gt(t,e,n){let i=[],o=[],r=t,s=0;for(;r&&r!==n;){let a=Vt(r,e);for(let l of a)l.level=s;if(i.push(a),r=r.parentElement,s++,o.push(...ht(i)),s>=e.seedMinLength){o.sort(Le);for(let l of o)yield l;o=[];}}o.sort(Le);for(let a of o)yield a;}function K(t){if(/^[a-z\-]{3,}$/i.test(t)){let e=t.split(/-|[A-Z]/);for(let n of e)if(n.length<=2||/[^aeiou]{4,}/i.test(n))return  false;return  true}return  false}function Vt(t,e){let n=[],i=t.getAttribute("id");i&&e.idName(i)&&n.push({name:"#"+CSS.escape(i),penalty:0});for(let s=0;s<t.classList.length;s++){let a=t.classList[s];e.className(a)&&n.push({name:"."+CSS.escape(a),penalty:1});}for(let s=0;s<t.attributes.length;s++){let a=t.attributes[s];e.attr(a.name,a.value)&&n.push({name:`[${CSS.escape(a.name)}="${CSS.escape(a.value)}"]`,penalty:2});}let o=t.tagName.toLowerCase();if(e.tagName(o)){n.push({name:o,penalty:5});let s=Re(t,o);s!==void 0&&n.push({name:ut(o,s),penalty:10});}let r=Re(t);return r!==void 0&&n.push({name:Zt(o,r),penalty:50}),n}function q(t){let e=t[0],n=e.name;for(let i=1;i<t.length;i++){let o=t[i].level||0;e.level===o-1?n=`${t[i].name} > ${n}`:n=`${t[i].name} ${n}`,e=t[i];}return n}function ct(t){return t.map(e=>e.penalty).reduce((e,n)=>e+n,0)}function Le(t,e){return ct(t)-ct(e)}function Re(t,e){let n=t.parentNode;if(!n)return;let i=n.firstChild;if(!i)return;let o=0;for(;i&&(i.nodeType===Node.ELEMENT_NODE&&(e===void 0||i.tagName.toLowerCase()===e)&&o++,i!==t);)i=i.nextSibling;return o}function Jt(t,e){let n=0,i=t,o=[];for(;i&&i!==e;){let r=i.tagName.toLowerCase(),s=Re(i,r);if(s===void 0)return;o.push({name:ut(r,s),penalty:NaN,level:n}),i=i.parentElement,n++;}if(Me(o,e))return o}function Zt(t,e){return t==="html"?"html":`${t}:nth-child(${e})`}function ut(t,e){return t==="html"?"html":`${t}:nth-of-type(${e})`}function*ht(t,e=[]){if(t.length>0)for(let n of t[0])yield*ht(t.slice(1,t.length),e.concat(n));else yield e;}function Qt(t,e){return t.nodeType===Node.DOCUMENT_NODE?t:t===e.root?t.ownerDocument:t}function Me(t,e){let n=q(t);switch(e.querySelectorAll(n).length){case 0:throw new Error(`Can't select any node with this selector: ${n}`);case 1:return  true;default:return  false}}function*ft(t,e,n,i,o){if(t.length>2&&t.length>n.optimizedMinLength)for(let r=1;r<t.length-1;r++){if(new Date().getTime()-o.getTime()>n.timeoutMs)return;let a=[...t];a.splice(r,1),Me(a,i)&&i.querySelector(q(a))===e&&(yield a,yield*ft(a,e,n,i,o));}}var en=["role","aria-label","type","name","href","src","data-testid","data-id"];function tn(t){let e=5381;for(let n=0;n<t.length;n++)e=(e<<5)+e+t.charCodeAt(n)|0;return (e>>>0).toString(36)}function Pe(t){let e=t.children.length,n=0,i=t.parentElement;if(i)for(let s of i.children){if(s===t)break;s.tagName===t.tagName&&n++;}let o=[];for(let s of en){let a=t.getAttribute(s);a&&o.push(`${s}=${a}`);}let r=o.length>0?tn(o.join(",")):"0";return `${e}:${n}:${r}`}function mt(t,e){let n=e.split(":");if(n.length!==3)return 0;let[i,o,r]=n,s=Number(i),a=Number(o);if(Number.isNaN(s)||Number.isNaN(a))return 0;let l=Pe(t),[p,d,u]=l.split(":"),c=0,m=Math.abs(Number(p)-s);m===0?c+=.2:m<=2?c+=.1:m<=5&&(c+=.03);let x=Math.abs(Number(d)-a);return x===0?c+=.4:x===1?c+=.2:x<=3&&(c+=.08),u===r&&(c+=.4),c}function j(t,e){let n=e==="before"?"previousElementSibling":"nextElementSibling",i=t[n],o=3;for(;i&&o>0;){let r=i.textContent?.trim();if(r)return e==="before"?r.slice(-32):r.slice(0,32);i=i[n],o--;}return ""}function re(t){let e=t.previousElementSibling?.textContent?.trim().slice(0,40)??"",n=t.nextElementSibling?.textContent?.trim().slice(0,40)??"";return [e,n].filter(Boolean).join(" | ")}function bt(t){if(t.id){let i=t.id.includes("'")?`concat('${t.id.replace(/'/g,`',"'",'`)}')`:`'${t.id}'`;return `//${t.localName}[@id=${i}]`}let e=[],n=t;for(;n&&n!==document.body&&e.length<6;){let i=n.localName,o=n.parentElement;if(n.id){let s=n.id.includes("'")?`concat('${n.id.replace(/'/g,`',"'",'`)}')`:`'${n.id}'`;return e.unshift(`/${i}[@id=${s}]`),"/"+e.join("")}let r=1;if(o)for(let s of o.children){if(s===n)break;s.localName===i&&r++;}e.unshift(`/${i}[${r}]`),n=o;}return "/html/body"+e.join("")}var U="data-feedback-anchor";function Fe(t){let e=dt(t,{className:u=>!/^(css|sc|emotion|styled)-/.test(u)&&!/^[a-z]{1,3}[A-Za-z0-9]{4,8}$/.test(u),attr:u=>["data-testid","data-id","role","aria-label"].includes(u),idName:u=>!u.startsWith("radix-")&&!/^:r[0-9]+:$/.test(u),seedMinLength:3,optimizedMinLength:2}),n=bt(t),o=(t.textContent?.trim()??"").slice(0,120),r=j(t,"before"),s=j(t,"after"),a=Pe(t),l=re(t),d=t.closest(`[${U}]`)?.getAttribute(U)??null;return {cssSelector:e,xpath:n,textSnippet:o,textPrefix:r,textSuffix:s,fingerprint:a,neighborText:l,elementTag:t.tagName,elementId:t.id||void 0,anchorKey:d}}function gt(t,e){let n=t.getBoundingClientRect();return n.left<=e.x&&n.top<=e.y&&n.right>=e.x+e.width&&n.bottom>=e.y+e.height}function yt(t,e=document.documentElement){let n=t.x+t.width/2,i=t.y+t.height/2,o=document.elementFromPoint(n,i);if(!o||o===e)return document.body;let r=o;for(;r&&r!==document.body;){if(r.hasAttribute(U)&&gt(r,t))return r;r=r.parentElement;}for(r=o;r&&r!==document.body;){if(gt(r,t))return r;r=r.parentElement;}return document.body}function vt(t,e){return e.width<=0||e.height<=0?{xPct:0,yPct:0,wPct:1,hPct:1}:{xPct:(t.x-e.x)/e.width,yPct:(t.y-e.y)/e.height,wPct:t.width/e.width,hPct:t.height/e.height}}var nn={question:"type.question",change:"type.change",bug:"type.bug",other:"type.other"};function sn(){let t=navigator.userAgentData;return t?t.platform==="macOS":navigator.platform?.includes("Mac")??/Macintosh|Mac OS X/i.test(navigator.userAgent)}var ae=class{constructor(e,n){this.colors=e;this.t=n;this.root=b("div",{style:`
        position:fixed;
        z-index:${2147483647};
        width:300px;
        padding:16px;
        border-radius:16px;
        background:${this.colors.glassBg};
        backdrop-filter:blur(24px);
        -webkit-backdrop-filter:blur(24px);
        border:1px solid ${this.colors.glassBorder};
        box-shadow:0 8px 32px ${this.colors.shadow}, 0 2px 8px ${this.colors.shadow};
        font-family:"Inter",system-ui,-apple-system,sans-serif;
        opacity:0;
        transform:translateY(8px) scale(0.98);
        transition:opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1),transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        display:none;
        -webkit-font-smoothing:antialiased;
      `}),this.root.setAttribute("role","dialog"),this.root.setAttribute("aria-modal","true"),this.root.setAttribute("data-siteping-ignore","true");let i=[{type:"question",icon:j$1},{type:"change",icon:k},{type:"bug",icon:l},{type:"other",icon:m}];this.typeRow=b("div",{style:"display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:12px;"});for(let r of i){let s=document.createElement("button");s.style.cssText=`
        height:44px;
        border-radius:9999px;border:1px solid ${this.colors.border};
        background:${this.colors.glassBg};cursor:pointer;
        display:flex;align-items:center;justify-content:center;gap:5px;
        font-family:"Inter",system-ui,-apple-system,sans-serif;
        font-size:13px;font-weight:500;color:${this.colors.textTertiary};
        transition:all 0.2s ease;
        padding:0 12px;
      `;let a$1=a(r.icon);a$1.setAttribute("style","width:13px;height:13px;flex-shrink:0;"),s.appendChild(a$1),s.appendChild(document.createElement("span")),s.dataset.type=r.type,s.setAttribute("aria-pressed","false"),s.addEventListener("click",()=>{this.submittingState||this.selectType(r.type,this.typeRow);}),s.addEventListener("mouseenter",()=>{if(!this.submittingState&&s.dataset.type!==this.selectedType){let l=v(s.dataset.type??"",this.colors);s.style.background=l,s.style.borderColor=u(s.dataset.type??"",this.colors)+"40";}}),s.addEventListener("mouseleave",()=>{this.submittingState||s.dataset.type!==this.selectedType&&(s.style.background=this.colors.glassBg,s.style.borderColor=this.colors.border);}),this.typeRow.appendChild(s);}this.textarea=document.createElement("textarea"),this.textarea.style.cssText=`
      width:100%;min-height:72px;max-height:152px;
      padding:10px 12px;border-radius:12px;
      border:1px solid ${this.colors.border};
      background:${this.colors.glassBgHeavy};
      color:${this.colors.text};font-family:"Inter",system-ui,-apple-system,sans-serif;
      font-size:13px;line-height:1.5;resize:vertical;
      outline:none;transition:all 0.2s ease;
      box-sizing:border-box;
    `,this.textarea.maxLength=5e3,this.hint=b("div",{style:`
        font-size:11px;color:${this.colors.textTertiary};
        text-align:right;margin-top:4px;
        font-family:"Inter",system-ui,-apple-system,sans-serif;
        letter-spacing:0.01em;
      `}),this.textarea.addEventListener("focus",()=>{this.submittingState||(this.textarea.style.borderColor=this.colors.accent,this.textarea.style.boxShadow=`0 0 0 3px ${this.colors.accent}14`,this.textarea.style.background=this.colors.bg);}),this.textarea.addEventListener("blur",()=>{this.submittingState||(this.textarea.style.borderColor=this.colors.border,this.textarea.style.boxShadow="none",this.textarea.style.background=this.colors.glassBgHeavy);}),this.textarea.addEventListener("input",()=>{this.updateSubmitState();}),this.textarea.addEventListener("keydown",r=>{this.submittingState||(r.key==="Enter"&&(r.ctrlKey||r.metaKey)&&(r.preventDefault(),this.submit()),r.key==="Escape"&&this.cancel());});let o=b("div",{style:"display:flex;justify-content:flex-end;gap:8px;margin-top:12px;"});this.cancelBtn=document.createElement("button"),this.cancelBtn.style.cssText=`
      height:34px;padding:0 16px;border-radius:9999px;
      border:1px solid ${this.colors.border};
      background:${this.colors.glassBg};
      color:${this.colors.textTertiary};font-family:"Inter",system-ui,-apple-system,sans-serif;
      font-size:13px;font-weight:500;cursor:pointer;
      transition:all 0.2s ease;
    `,this.cancelBtn.addEventListener("click",()=>this.cancel()),this.cancelBtn.addEventListener("mouseenter",()=>{this.submittingState||(this.cancelBtn.style.borderColor=this.colors.accent,this.cancelBtn.style.color=this.colors.accent);}),this.cancelBtn.addEventListener("mouseleave",()=>{this.submittingState||(this.cancelBtn.style.borderColor=this.colors.border,this.cancelBtn.style.color=this.colors.textTertiary);}),this.submitBtn=document.createElement("button"),this.submitBtn.style.cssText=`
      height:34px;padding:0 18px;border-radius:9999px;
      border:none;background:${this.colors.accentGradient};
      color:#fff;font-family:"Inter",system-ui,-apple-system,sans-serif;
      font-size:13px;font-weight:600;cursor:pointer;
      opacity:0.35;pointer-events:none;
      transition:all 0.2s ease;
      box-shadow:0 2px 8px ${this.colors.accentGlow};
      display:inline-flex;align-items:center;justify-content:center;min-width:64px;
    `,this.submitLabel=document.createElement("span"),this.submitBtn.appendChild(this.submitLabel),this.submitBtn.addEventListener("click",()=>this.submit()),o.appendChild(this.cancelBtn),o.appendChild(this.submitBtn),this.root.appendChild(this.typeRow),this.root.appendChild(this.textarea),this.root.appendChild(this.hint),this.root.appendChild(o),document.body.appendChild(this.root),this.applyLabels();}colors;t;root;selectedType=null;textarea;submitBtn;cancelBtn;typeRow;submitLabel;hint;resolve=null;previouslyFocused=null;onKeydownTrap=null;onSubmit=null;submittingState=false;spinnerAnimation=null;refreshLabels(){this.applyLabels();}applyLabels(){this.root.setAttribute("aria-label",this.t("popup.ariaLabel"));let e=this.root.querySelectorAll("button[data-type]");for(let n of e){let i=n.dataset.type;if(!i)continue;let o=nn[i];if(!o)continue;let r=n.querySelector("span");r&&c(r,this.t(o));}this.textarea.placeholder=this.t("popup.placeholder"),this.textarea.setAttribute("aria-label",this.t("popup.textareaAria")),c(this.hint,sn()?this.t("popup.submitHintMac"):this.t("popup.submitHintOther")),c(this.cancelBtn,this.t("popup.cancel")),c(this.submitLabel,this.t("popup.submit"));}show(e,n){return new Promise(i=>{this.resolve=i,this.onSubmit=n??null,this.selectedType=null,this.textarea.value="",this.submittingState=false,this.updateSubmitState(),this.resetTypeButtons(),this.previouslyFocused=document.activeElement;let o=220,r=300,s=e.bottom+8,a=e.left;if(s+o>window.innerHeight){let p=e.top-o-8;p>=8?s=p:s=window.innerHeight-o-8;}a+r>window.innerWidth&&(a=e.right-r),a=Math.max(8,a),s=Math.max(8,s),this.root.style.top=`${s}px`,this.root.style.left=`${a}px`,this.root.style.display="block",this.onKeydownTrap=p=>{if(p.key==="Tab"){let d=Array.from(this.root.querySelectorAll('button:not([disabled]), textarea:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'));if(d.length===0)return;let u=d[0],c=d[d.length-1];if(!u||!c)return;p.shiftKey?(document.activeElement===u||!this.root.contains(document.activeElement))&&(p.preventDefault(),c.focus()):(document.activeElement===c||!this.root.contains(document.activeElement))&&(p.preventDefault(),u.focus());}},this.root.addEventListener("keydown",this.onKeydownTrap);let l=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;this.root.style.transition=l?"none":"",requestAnimationFrame(()=>{this.root.style.opacity="1",this.root.style.transform="translateY(0) scale(1)",this.textarea.focus();});})}selectType(e,n){this.selectedType=e;let i=n.querySelectorAll("button");for(let o of i){let r=o.dataset.type===e,s=u(o.dataset.type??"",this.colors),a=v(o.dataset.type??"",this.colors);o.style.background=r?a:this.colors.glassBg,o.style.borderColor=r?s+"60":this.colors.border,o.style.color=r?s:this.colors.textTertiary,o.style.fontWeight=r?"600":"500",o.setAttribute("aria-pressed",String(r));}this.updateSubmitState();}resetTypeButtons(){let e=this.root.querySelectorAll("button[data-type]");for(let n of e)n.setAttribute("aria-pressed","false"),n.disabled=false,n.style.background=this.colors.glassBg,n.style.borderColor=this.colors.border,n.style.color=this.colors.textTertiary,n.style.fontWeight="500",n.style.cursor="pointer";}updateSubmitState(){if(this.submittingState)return;let e=this.selectedType!==null&&this.textarea.value.trim().length>0;this.submitBtn.disabled=!e,this.submitBtn.style.opacity=e?"1":"0.35",this.submitBtn.style.pointerEvents=e?"auto":"none";}submit(){if(this.submittingState||!this.selectedType||!this.textarea.value.trim())return;let e={type:this.selectedType,message:this.textarea.value.trim()};if(!this.onSubmit){this.resolve?.(e),this.resolve=null,this.hideElement();return}this.enterSubmittingState();let n=this.onSubmit;n(e).then(()=>{this.resolve?.(e),this.resolve=null,this.hideElement();}).catch(()=>{this.exitSubmittingState();});}cancel(){this.submittingState||(this.resolve?.(null),this.resolve=null,this.hideElement());}enterSubmittingState(){this.submittingState=true,this.submitLabel.style.display="none",this.submitBtn.disabled=true,this.submitBtn.style.cursor="wait",this.submitBtn.style.opacity="0.85",this.submitBtn.setAttribute("aria-busy","true"),this.submitBtn.appendChild(this.buildSpinner()),this.cancelBtn.disabled=true,this.cancelBtn.style.opacity="0.5",this.cancelBtn.style.cursor="not-allowed",this.cancelBtn.style.pointerEvents="none",this.textarea.disabled=true,this.textarea.style.opacity="0.6";let e=this.typeRow.querySelectorAll("button");for(let n of e)n.disabled=true,n.style.cursor="not-allowed",n.style.opacity="0.6";}exitSubmittingState(){this.submittingState=false,this.spinnerAnimation?.cancel(),this.spinnerAnimation=null,this.submitBtn.querySelector('[data-role="sp-popup-spinner"]')?.remove(),this.submitLabel.style.display="",this.submitBtn.removeAttribute("aria-busy"),this.submitBtn.style.cursor="pointer",this.cancelBtn.disabled=false,this.cancelBtn.style.opacity="1",this.cancelBtn.style.cursor="pointer",this.cancelBtn.style.pointerEvents="auto",this.textarea.disabled=false,this.textarea.style.opacity="1";let n=this.typeRow.querySelectorAll("button");for(let i of n)i.disabled=false,i.style.cursor="pointer",i.style.opacity="1";this.updateSubmitState();}buildSpinner(){let e=document.createElement("div");return e.dataset.role="sp-popup-spinner",e.style.cssText=`
      width:14px;height:14px;
      border:2px solid rgba(255,255,255,0.35);
      border-top-color:#fff;
      border-radius:50%;
      box-sizing:border-box;
    `,!(typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)&&typeof e.animate=="function"&&(this.spinnerAnimation=e.animate([{transform:"rotate(0deg)"},{transform:"rotate(360deg)"}],{duration:600,iterations:1/0,easing:"linear"})),e}hideElement(){this.onKeydownTrap&&(this.root.removeEventListener("keydown",this.onKeydownTrap),this.onKeydownTrap=null),this.submittingState&&this.exitSubmittingState(),this.onSubmit=null,this.root.style.opacity="0",this.root.style.transform="translateY(8px) scale(0.98)",this.previouslyFocused?.focus(),this.previouslyFocused=null,setTimeout(()=>{this.root.style.display="none";},250);}destroy(){this.submittingState&&this.exitSubmittingState(),this.resolve?.(null),this.resolve=null,this.onSubmit=null,this.onKeydownTrap&&(this.root.removeEventListener("keydown",this.onKeydownTrap),this.onKeydownTrap=null),this.root.remove();}};var W,xt=false;async function on(){if(W!==void 0)return W;try{let t=await import('html2canvas');return W=t.default??t,W}catch(t){return W=null,xt||(xt=true,console.warn("[siteping] html2canvas import failed unexpectedly. Capture is disabled for this session \u2014 feedbacks are still submitted, just without screenshots. Underlying error:",t)),null}}async function wt(t,e){let n=await on();if(!n)return null;let i=.85,o=1200;try{let r=await n(document.body,{x:window.scrollX+t.x,y:window.scrollY+t.y,width:t.width,height:t.height,scale:window.devicePixelRatio,useCORS:!0,allowTaint:!0,logging:!1,ignoreElements:u=>u.tagName==="SITEPING-WIDGET"||u.closest?.("siteping-widget")!==null||u.getAttribute?.("data-siteping-ignore")==="true"});if(r.width<=o)return r.toDataURL("image/jpeg",i);let s=o/r.width,a=o,l=Math.round(r.height*s),p=document.createElement("canvas");p.width=a,p.height=l;let d=p.getContext("2d");return d?(d.drawImage(r,0,0,a,l),p.toDataURL("image/jpeg",i)):null}catch(r){return console.warn("[siteping] Screenshot capture failed:",r),null}}var le=class{constructor(e,n,i,o=false){this.colors=e;this.bus=n;this.t=i;this.enableScreenshot=o;this.popup=new ae(e,i),this.bus.on("annotation:start",()=>this.activate());}colors;bus;t;enableScreenshot;overlay=null;drawingRect=null;startX=0;startY=0;isDrawing=false;isActive=false;popup;savedOverflow="";preActiveFocusElement=null;rafId=null;pendingMoveEvent=null;rejectPendingSubmission=null;refreshLabels(){this.popup.refreshLabels();}get submissionInFlight(){return this.rejectPendingSubmission!==null}async maybeCapture(e){return this.enableScreenshot?wt(e):null}activate(){this.isActive||(this.isActive=true,this.preActiveFocusElement=document.activeElement,this.savedOverflow=document.body.style.overflow,document.body.style.overflow="hidden",this.overlay=b("div",{style:`
        position:fixed;inset:0;
        z-index:${2147483646};
        background:rgba(15, 23, 42, 0.04);
        cursor:crosshair;
      `}),this.overlay.setAttribute("role","application"),this.overlay.setAttribute("aria-label",this.t("annotator.instruction")),this.overlay.setAttribute("data-siteping-ignore","true"),this.overlay.addEventListener("mousedown",this.onMouseDown),this.overlay.addEventListener("mousemove",this.onMouseMove),this.overlay.addEventListener("mouseup",this.onMouseUp),this.overlay.addEventListener("touchstart",this.onTouchStart,{passive:false}),this.overlay.addEventListener("touchmove",this.onTouchMove,{passive:false}),this.overlay.addEventListener("touchend",this.onTouchEnd),this.overlay.addEventListener("keydown",this.onOverlayKeyDown),this.overlay.setAttribute("tabindex","0"),document.addEventListener("keydown",this.onKeyDown),document.body.appendChild(this.overlay),this.overlay.focus({preventScroll:true}));}deactivate(){if(!this.isActive)return;this.isActive=false,this.isDrawing=false;let e=this.preActiveFocusElement;this.preActiveFocusElement=null,this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.pendingMoveEvent=null,document.body.style.overflow=this.savedOverflow,document.removeEventListener("keydown",this.onKeyDown),this.overlay?.remove(),this.drawingRect?.remove(),this.overlay=null,this.drawingRect=null,e instanceof HTMLElement&&e.isConnected&&e.focus({preventScroll:true}),this.bus.emit("annotation:end");}onKeyDown=e=>{e.key==="Escape"&&this.deactivate();};onOverlayKeyDown=async e=>{if(e.key!=="Enter"||(e.preventDefault(),this.submissionInFlight))return;let n=this.preActiveFocusElement;if(!n||!(n instanceof HTMLElement))return;let i=n.getBoundingClientRect();if(i.width<=0||i.height<=0)return;let o=new DOMRect(i.x,i.y,i.width,i.height),s={anchor:Fe(n),rect:{xPct:0,yPct:0,wPct:1,hPct:1},scrollX:window.scrollX,scrollY:window.scrollY,viewportW:window.innerWidth,viewportH:window.innerHeight,devicePixelRatio:window.devicePixelRatio},a={};await this.popup.show(o,p=>this.runSubmission(s,p,o,a))&&this.deactivate();};onMouseDown=e=>{this.startDrawing(e.clientX,e.clientY);};onTouchStart=e=>{e.preventDefault();let n=e.touches[0];n&&this.startDrawing(n.clientX,n.clientY);};startDrawing(e,n){this.submissionInFlight||(this.isDrawing=true,this.startX=e,this.startY=n,this.drawingRect?.remove(),this.drawingRect=b("div",{style:`
        position:fixed;
        border:2px solid ${this.colors.accent};
        background:${this.colors.accent}12;
        pointer-events:none;
        border-radius:8px;
        box-shadow:0 0 16px ${this.colors.accentGlow};
        transition:box-shadow 0.15s ease;
      `}),this.drawingRect.setAttribute("data-siteping-ignore","true"),this.overlay?.appendChild(this.drawingRect));}onMouseMove=e=>{this.scheduleRectUpdate(e);};onTouchMove=e=>{e.preventDefault(),e.touches[0]&&this.scheduleRectUpdate(e.touches[0]);};scheduleRectUpdate(e){!this.isDrawing||!this.drawingRect||(this.pendingMoveEvent=e,this.rafId===null&&(this.rafId=requestAnimationFrame(()=>{this.rafId=null;let n=this.pendingMoveEvent;if(!n||!this.drawingRect)return;let i=Math.min(n.clientX,this.startX),o=Math.min(n.clientY,this.startY),r=Math.abs(n.clientX-this.startX),s=Math.abs(n.clientY-this.startY);this.drawingRect.style.left=`${i}px`,this.drawingRect.style.top=`${o}px`,this.drawingRect.style.width=`${r}px`,this.drawingRect.style.height=`${s}px`;})));}onTouchEnd=async e=>{let n=e.changedTouches[0];n&&await this.finishDrawing(n.clientX,n.clientY);};onMouseUp=async e=>{await this.finishDrawing(e.clientX,e.clientY);};finishDrawing=async(e,n)=>{if(!this.isDrawing||!this.drawingRect)return;this.isDrawing=false;let i=Math.min(e,this.startX),o=Math.min(n,this.startY),r=Math.abs(e-this.startX),s=Math.abs(n-this.startY);if(r<10||s<10){this.drawingRect.remove(),this.drawingRect=null;return}let a=new DOMRect(i,o,r,s),l=this.buildAnnotation(a),p={},d=await this.popup.show(a,u=>this.runSubmission(l,u,a,p));this.drawingRect?.remove(),this.drawingRect=null,d&&this.deactivate();};async runSubmission(e,n,i,o){o.value===void 0&&(o.value=await this.maybeCapture(i));let r=o.value;await new Promise((s,a)=>{let l=()=>{p(),d(),u(),this.rejectPendingSubmission=null;},p=this.bus.on("feedback:sent",()=>{l(),s();}),d=this.bus.on("feedback:error",c=>{l(),a(c);}),u=this.bus.on("submission:cancelled",()=>{l(),a(new Error("Feedback submission cancelled"));});this.rejectPendingSubmission=c=>{l(),a(c);},this.bus.emit("annotation:complete",{annotation:e,type:n.type,message:n.message,screenshotDataUrl:r});});}buildAnnotation(e){this.overlay&&(this.overlay.style.pointerEvents="none");let n=yt(e);this.overlay&&(this.overlay.style.pointerEvents="auto");let i=Fe(n),o=n.getBoundingClientRect(),r=vt(e,o);return {anchor:i,rect:r,scrollX:window.scrollX,scrollY:window.scrollY,viewportW:window.innerWidth,viewportH:window.innerHeight,devicePixelRatio:window.devicePixelRatio}}destroy(){this.deactivate(),this.rejectPendingSubmission?.(new Error("Annotator destroyed during submission")),this.popup.destroy();}};var H=class extends Error{code;retryable;constructor(e,n,i){super(e),this.code=n,this.retryable=i,this.name="SitepingError";}},Y=class extends H{constructor(e){super(e,"NETWORK",true),this.name="SitepingNetworkError";}},pe=class extends H{constructor(e){super(e,"VALIDATION",false),this.name="SitepingValidationError";}},ce=class extends H{constructor(e){super(e,"AUTH",false),this.name="SitepingAuthError";}};async function G(t,e){let n=await t.text().catch(()=>"Unknown error"),i=n?`${t.status} ${n}`:`${t.status}`,o=`${e}: ${i}`;return t.status===401||t.status===403?new ce(o):t.status>=400&&t.status<500?new pe(o):new H(o,"SERVER",false)}function V(t,e){if(t instanceof Y)return t;let n=t instanceof Error?t.message:String(t);return new Y(`${e}: ${n}`)}var rn=3,an=1e4,de="siteping_retry_queue",ln=20;async function J(t,e,n=rn){for(let i=0;i<=n;i++){let o=new AbortController,r=setTimeout(()=>o.abort(),an);try{let l=await fetch(t,{...e,signal:o.signal});if(clearTimeout(r),l.ok||l.status>=400&&l.status<500||i===n)return l}catch(l){if(clearTimeout(r),i===n)throw l}let s=1e3*2**i,a=Math.random()*1e3-500;await new Promise(l=>setTimeout(l,s+a));}throw new Error("Max retries exceeded")}var pn="siteping_retry_queue";async function St(t){return typeof navigator<"u"&&navigator.locks?navigator.locks.request(pn,()=>t()):t()}function Tt(){let t=localStorage.getItem(de);if(!t)return [];let e=JSON.parse(t);return Array.isArray(e)?e:[]}function cn(t,e){St(()=>{try{let n=Tt();n.length>=ln&&n.shift(),n.push({endpoint:t,payload:e}),localStorage.setItem(de,JSON.stringify(n));}catch{}});}function Et(t){return t.trim()}function kt(t){return t.trim().toLowerCase()}async function Ct(t,e){await St(async()=>{try{let n=Tt();if(n.length===0)return;let i=[],o=[],r=0;for(let l of n){if(l.endpoint!==t){o.push(l);continue}!e||Et(l.payload.authorName)===Et(e.name)&&kt(l.payload.authorEmail)===kt(e.email)?i.push(l):r+=1;}if(i.length===0&&r===0)return;r>0;let s=[];for(let l of i)try{(await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l.payload)})).ok||s.push(l);}catch{s.push(l);}let a=o.concat(s);a.length>0?localStorage.setItem(de,JSON.stringify(a)):localStorage.removeItem(de);}catch{}});}async function Ie(t){return await t.json()}var ue=class{constructor(e,n){this.endpoint=e;this.projectName=n;}endpoint;projectName;async sendFeedback(e){try{let n;try{n=await J(this.endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});}catch(i){throw V(i,"Failed to send feedback")}if(!n.ok)throw await G(n,"Failed to send feedback");return Ie(n)}catch(n){throw cn(this.endpoint,e),n}}async getFeedbacks(e,n){let i=new URLSearchParams({projectName:e});n?.page&&i.set("page",String(n.page)),n?.limit&&i.set("limit",String(n.limit)),n?.type&&i.set("type",n.type),n?.status&&i.set("status",n.status),n?.search&&i.set("search",n.search),n?.url&&i.set("url",n.url),n?.urlPattern&&i.set("urlPattern",n.urlPattern);let o;try{o=await J(`${this.endpoint}?${i.toString()}`,{method:"GET",cache:"no-store"});}catch(r){throw V(r,"Failed to fetch feedbacks")}if(!o.ok)throw await G(o,"Failed to fetch feedbacks");return Ie(o)}async resolveFeedback(e,n){let i;try{i=await J(this.endpoint,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,projectName:this.projectName,status:n?"resolved":"open"})});}catch(o){throw V(o,"Failed to update feedback")}if(!i.ok)throw await G(i,"Failed to update feedback");return Ie(i)}async deleteFeedback(e){let n;try{n=await J(this.endpoint,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,projectName:this.projectName})});}catch(i){throw V(i,"Failed to delete feedback")}if(!n.ok)throw await G(n,"Failed to delete feedback")}async deleteAllFeedbacks(e){let n;try{n=await J(this.endpoint,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({projectName:e,deleteAll:!0})});}catch(i){throw V(i,"Failed to delete all feedbacks")}if(!n.ok)throw await G(n,"Failed to delete all feedbacks")}};var dn=["log","info","warn","error"];function un(t){if(t===null)return "null";if(t===void 0)return "undefined";if(typeof t=="string")return t;if(typeof t=="number"||typeof t=="boolean"||typeof t=="bigint")return String(t);if(t instanceof Error)return `${t.name}: ${t.message}${t.stack?`
${t.stack}`:""}`;try{let e=new WeakSet;return JSON.stringify(t,(n,i)=>{if(typeof i=="function")return "[Function]";if(typeof i=="symbol")return i.toString();if(typeof i=="object"&&i!==null){if(e.has(i))return "[Circular]";e.add(i);}return i})}catch{try{return String(t)}catch{return "[Unserializable]"}}}function hn(t){let e="";for(let n=0;n<t.length&&(n>0&&(e+=" "),e+=un(t[n]),!(e.length>=500));n++);return e.length>500&&(e=`${e.slice(0,499)}\u2026`),e}var he=class{maxEntries;entries=[];originals=new Map;disposed=false;constructor(e=50){if(this.maxEntries=Math.min(Math.max(Math.floor(e),0),1e3),!(typeof console>"u"))for(let n of dn){let i=console[n];if(typeof i!="function")continue;this.originals.set(n,i);let o=this,r=function(...s){try{o.push(n,s);}catch{}i.apply(this??console,s);};try{Object.defineProperty(r,"name",{value:n});}catch{}console[n]=r;}}push(e,n){this.maxEntries!==0&&(this.entries.length>=this.maxEntries&&this.entries.shift(),this.entries.push({level:e,timestamp:new Date().toISOString(),message:hn(n)}));}getEntries(){return this.entries.slice()}dispose(){if(!this.disposed&&(this.disposed=true,!(typeof console>"u"))){for(let[e,n]of this.originals)try{console[e]=n;}catch{}this.originals.clear();}}};function At(t){return t.length<=2e3?t:`${t.slice(0,1999)}\u2026`}function Lt(t){if(typeof t=="string")return t;if(t instanceof URL)return t.href;if(typeof t=="object"&&t!==null&&"url"in t){let e=t.url;if(typeof e=="string")return e}try{return String(t)}catch{return "(unknown)"}}var fe=class{maxEntries;entries=[];originalFetch=null;originalXhrOpen=null;originalXhrSend=null;disposed=false;constructor(e=20){this.maxEntries=Math.min(Math.max(Math.floor(e),0),500),this.installFetch(),this.installXhr();}push(e){this.maxEntries!==0&&(this.entries.length>=this.maxEntries&&this.entries.shift(),this.entries.push(e));}installFetch(){if(typeof globalThis.fetch!="function")return;let e=globalThis.fetch;this.originalFetch=e;let n=async(i,o)=>{let r=new Date,s=typeof performance<"u"?performance.now():Date.now(),a=At(Lt(i)),l=(o?.method??(i instanceof Request?i.method:"GET")).toUpperCase();try{let p=await e(i,o);if(!p.ok){let d=typeof performance<"u"?performance.now():Date.now();this.push({url:a,method:l,status:p.status,durationMs:Math.round(d-s),timestamp:r.toISOString()});}return p}catch(p){let d=typeof performance<"u"?performance.now():Date.now();throw this.push({url:a,method:l,status:0,durationMs:Math.round(d-s),timestamp:r.toISOString()}),p}};globalThis.fetch=n;}installXhr(){if(typeof XMLHttpRequest>"u")return;let e=XMLHttpRequest.prototype,n=e.open,i=e.send;this.originalXhrOpen=n,this.originalXhrSend=i;let o=this,r=new WeakMap;e.open=function(s,a,...l){try{r.set(this,{method:s.toUpperCase(),url:At(Lt(a)),startedAt:new Date,t0:typeof performance<"u"?performance.now():Date.now()});}catch{}return n.call(this,s,a,...l)},e.send=function(s){let a=r.get(this);if(a){let l=()=>{try{let p=typeof performance<"u"?performance.now():Date.now(),d=this.status;(d===0||d>=400)&&o.push({url:a.url,method:a.method,status:d,durationMs:Math.round(p-a.t0),timestamp:a.startedAt.toISOString()});}catch{}};try{this.addEventListener("loadend",l,{once:!0});}catch{try{this.addEventListener("loadend",l);}catch{}}}return i.call(this,s??null)};}getEntries(){return this.entries.slice()}dispose(){if(!this.disposed){if(this.disposed=true,this.originalFetch&&typeof globalThis.fetch=="function")try{globalThis.fetch=this.originalFetch;}catch{}if(typeof XMLHttpRequest<"u")try{this.originalXhrOpen&&(XMLHttpRequest.prototype.open=this.originalXhrOpen),this.originalXhrSend&&(XMLHttpRequest.prototype.send=this.originalXhrSend);}catch{}}}};var Z=class{listeners=new Map;on(e,n){let i=this.listeners.get(e);return i||(i=new Set,this.listeners.set(e,i)),i.add(n),()=>{i?.delete(n);}}off(e,n){this.listeners.get(e)?.delete(n);}emit(e,...n){let i=this.listeners.get(e);if(i)for(let o of i)try{o(...n);}catch(r){console.error(`[siteping] Error in event listener for "${String(e)}":`,r);}}removeAll(){this.listeners.clear();}};var fn=54,mn={annotate:"fab.annotate"},me=class{constructor(e,n,i,o){this.bus=i;this.t=o;let r=n.position??"bottom-right",s$1=r==="bottom-right";this.items=[{id:"annotate",icon:s}],this.fab=document.createElement("button"),this.fab.className=`sp-fab sp-fab--${r} sp-anim-fab-in`,this.fab.style.position="fixed",this.fab.appendChild(a(f)),this.fab.setAttribute("aria-expanded","false"),this.fab.addEventListener("click",()=>this.toggle()),this.radialContainer=document.createElement("div"),this.radialContainer.className=`sp-radial sp-radial--${r}`,this.radialContainer.setAttribute("role","menu");for(let p=0;p<this.items.length;p++){let d=this.items[p];if(!d)continue;let u=document.createElement("button");u.className="sp-radial-item",u.style.setProperty("--sp-i",String(p)),u.appendChild(a(d.icon)),u.setAttribute("role","menuitem"),u.dataset.itemId=d.id,u.addEventListener("click",m=>{m.stopPropagation(),this.handleItemClick(d.id);});let c=document.createElement("span");c.className="sp-radial-label",c.style.cssText=s$1?"position:absolute; right:54px; top:50%; transform:translateY(-50%); white-space:nowrap;":"position:absolute; left:54px; top:50%; transform:translateY(-50%); white-space:nowrap;",u.appendChild(c),this.radialContainer.appendChild(u);}this.root=document.createElement("div"),this.root.appendChild(this.radialContainer),this.root.appendChild(this.fab),e.appendChild(this.root),this.applyLabels();let a$1=e.host;this.onDocumentClick=p=>{this.isOpen&&!p.composedPath().includes(a$1)&&this.close();},document.addEventListener("click",this.onDocumentClick);let l=p=>{p.key==="Escape"&&this.isOpen&&(p.stopPropagation(),this.close());};this.fab.addEventListener("keydown",l),this.radialContainer.addEventListener("keydown",l),this.radialContainer.addEventListener("keydown",p=>{let d=Array.from(this.radialContainer.querySelectorAll(".sp-radial-item"));if(d.length===0||!this.isOpen)return;let u=e.activeElement??document.activeElement,c=d.indexOf(u);switch(p.key){case "ArrowUp":{p.preventDefault();let m=c<=0?d.length-1:c-1;d[m]?.focus();break}case "ArrowDown":{p.preventDefault();let m=c>=d.length-1?0:c+1;d[m]?.focus();break}case "Home":{p.preventDefault(),d[0]?.focus();break}case "End":{p.preventDefault(),d[d.length-1]?.focus();break}}});}bus;t;root;fab;radialContainer;badgeEl=null;isOpen=false;items;onDocumentClick;refreshLabels(){this.applyLabels();}applyLabels(){this.fab.setAttribute("aria-label",this.t("fab.aria"));let e=this.radialContainer.querySelectorAll(".sp-radial-item");for(let n of e){let i=n.dataset.itemId;if(!i)continue;let o=mn[i];if(!o)continue;let r=this.t(o);n.setAttribute("aria-label",r);let s=n.querySelector(".sp-radial-label");s&&c(s,r);}}updateBadge(e){if(e<=0){this.badgeEl?.remove(),this.badgeEl=null;return}this.badgeEl||(this.badgeEl=document.createElement("span"),this.badgeEl.className="sp-fab-badge",this.badgeEl.setAttribute("role","status"),this.badgeEl.setAttribute("aria-live","polite"),this.fab.appendChild(this.badgeEl));let n=e>99?"99+":String(e);c(this.badgeEl,n),this.badgeEl.setAttribute("aria-label",this.t("fab.badge").replace("{count}",String(e)));}toggle(){this.isOpen?this.close():this.open();}open(){this.isOpen=true,this.setFabIcon(g),this.fab.setAttribute("aria-expanded","true"),this.radialContainer.querySelectorAll(".sp-radial-item").forEach((n,i)=>{let o=-(16+fn*(i+1));n.style.transform=`translate(0px, ${o}px) scale(1)`,n.classList.add("sp-radial-item--open");}),requestAnimationFrame(()=>{this.radialContainer.querySelector(".sp-radial-item")?.focus();});}close(){this.isOpen=false,this.setFabIcon(f),this.fab.setAttribute("aria-expanded","false"),this.radialContainer.querySelectorAll(".sp-radial-item").forEach(n=>{n.style.transform="translate(0, 0) scale(0.8)",n.classList.remove("sp-radial-item--open");}),this.fab.focus();}setFabIcon(e){let n=this.badgeEl;this.fab.replaceChildren(a(e)),n&&this.fab.appendChild(n);}handleItemClick(e){if(this.close(),e==="annotate"){let n=this.bus.on("annotation:end",()=>{n(),this.fab.focus();});this.bus.emit("annotation:start");}}destroy(){document.removeEventListener("click",this.onDocumentClick),this.root.remove();}};var Rt="siteping_identity";function bn(t){if(!x(t,"name")||!x(t,"email"))return  false;let e=t.name,n=t.email;return typeof e=="string"&&typeof n=="string"&&e.length>0&&n.length>0}function Ne(){try{let t=localStorage.getItem(Rt);if(!t)return null;let e=JSON.parse(t);return bn(e)?e:null}catch{return null}}function Mt(t){try{localStorage.setItem(Rt,JSON.stringify(t));}catch{}}function gn(t,e){if(t===e)return 0;if(t.length===0)return e.length;if(e.length===0)return t.length;if(t.length>e.length){let s=t;t=e,e=s;}let n=t.length,i=e.length,o=new Array(n+1);for(let s=0;s<=n;s++)o[s]=s;let r=new Array(n+1);for(let s=1;s<=i;s++){r[0]=s;for(let l=1;l<=n;l++){let p=o[l-1]??0;r[l]=t[l-1]===e[s-1]?p:1+Math.min(p,o[l]??0,r[l-1]??0);}let a=o;o=r,r=a;}return o[n]??0}function z(t,e){if(t===e)return 1;let n=Math.max(t.length,e.length);return n===0?1:1-gn(t,e)/n}function De(t,e,n=.6){if(!e||!t)return 0;if(t.includes(e))return 1;let i=e.length;if(i>t.length){let a=z(t,e);return a>=n?a:0}let o=0,r=t.length>500?t.slice(0,500):t,s=r.length-i;for(let a=0;a<=s;a++){let l=r.slice(a,a+i),p=z(l,e);if(p>o&&(o=p),o>=.95)break}return o>=n?o:0}var yn=300,vn=.3;function be(t,e){if(!e.textSnippet)return  true;let n=(t.textContent?.trim()??"").slice(0,500);return De(n,e.textSnippet,.5)>vn}function xn(t){if(t.anchorKey){let e=t.anchorKey.replace(/\\/g,"\\\\").replace(/"/g,'\\"');try{let n=document.querySelector(`[${U}="${e}"]`);if(n&&be(n,t))return {element:n,confidence:1,strategy:"anchorKey"}}catch{}}if(t.elementId){let e=document.getElementById(t.elementId);if(e&&e.tagName===t.elementTag&&be(e,t))return {element:e,confidence:1,strategy:"id"}}try{let e=document.querySelector(t.cssSelector);if(e&&e.tagName===t.elementTag&&be(e,t))return {element:e,confidence:.95,strategy:"css"}}catch{}try{let n=document.evaluate(t.xpath,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;if(n instanceof Element&&n.tagName===t.elementTag&&be(n,t))return {element:n,confidence:.9,strategy:"xpath"}}catch{}return wn(t)}function wn(t){let e=t.elementTag.toLowerCase(),n=document.querySelectorAll(e);if(n.length===0)return null;let i=null,o=0,r=Math.min(n.length,yn);for(let s=0;s<r;s++){let a=n[s];if(!a)continue;let l=En(a,t);if(l>o&&(o=l,i=a,o>=.85))break}return !i||o<.4?null:{element:i,confidence:Math.min(o,.85),strategy:"scan"}}function En(t,e){let n=0,i=0,o=(t.textContent?.trim()??"").slice(0,500);if(e.textSnippet&&(i+=40,n+=De(o,e.textSnippet,.5)*40),e.fingerprint&&(i+=20,n+=mt(t,e.fingerprint)*20),e.textPrefix||e.textSuffix){i+=20;let r=0,s=0;if(e.textPrefix){let a=j(t,"before");r+=a?z(a,e.textPrefix):0,s++;}if(e.textSuffix){let a=j(t,"after");r+=a?z(a,e.textSuffix):0,s++;}s>0&&(n+=r/s*20);}if(e.neighborText){i+=20;let r=re(t);n+=r?z(r,e.neighborText)*20:0;}return i>0?n/i:0}function ge(t,e){let n=xn(t);if(!n)return null;let i=n.element.getBoundingClientRect(),o=new DOMRect(i.x+e.xPct*i.width,i.y+e.yPct*i.height,e.wPct*i.width,e.hPct*i.height);return {element:n.element,rect:o,confidence:n.confidence,strategy:n.strategy}}function He(t){return {cssSelector:t.cssSelector,xpath:t.xpath,textSnippet:t.textSnippet,elementTag:t.elementTag,elementId:t.elementId??void 0,textPrefix:t.textPrefix,textSuffix:t.textSuffix,fingerprint:t.fingerprint,neighborText:t.neighborText,anchorKey:t.anchorKey??null}}function ye(t){return {xPct:t.xPct,yPct:t.yPct,wPct:t.wPct,hPct:t.hPct}}var Pt=13;function Ft(t){return {top:t.top+window.scrollY-Pt,left:t.right+window.scrollX-Pt}}function Q(t,e){let n=t.entries[e],i=t.elementIndices[e];if(!(!n||i===void 0))return n.elements[i]}var It=300,Nt=200,kn=.7,Sn=28,Dt=32,ve=class{constructor(e,n,i,o,r=null){this.colors=e;this.tooltip=n;this.bus=i;this.t=o;this.liveRegion=r;this.container=b("div",{style:`position:absolute;top:0;left:0;pointer-events:none;z-index:${2147483646};`}),this.container.id="siteping-markers",document.body.appendChild(this.container),this.bus.on("annotations:toggle",s=>{this.container.style.display=s?"block":"none";}),this.resizeHandler=()=>this.scheduleReposition(),window.addEventListener("resize",this.resizeHandler,{passive:true}),this.scrollHandler=()=>this.scheduleReposition(),window.addEventListener("scroll",this.scrollHandler,{passive:true,capture:true}),this.mutationObserver=new MutationObserver(s=>{let a=false;for(let l of s)if(!(this.container.contains(l.target)||this.tooltip.contains(l.target))){a=true;break}a&&this.scheduleReposition();}),this.mutationObserver.observe(document.body,{childList:true,subtree:true,attributes:false,characterData:false}),this.onDocumentClickForClusters=s=>{this.container.contains(s.target)||this.collapseAllClusters();},document.addEventListener("click",this.onDocumentClickForClusters);}colors;tooltip;bus;t;liveRegion;container;entries=[];highlightElements=[];pinnedFeedback=null;onDocumentClick=null;repositionTimer=null;mutationObserver=null;scrollHandler=null;resizeHandler=null;anchorCache=new Map;clusters=[];onDocumentClickForClusters=null;lastOpenCount=-1;get count(){return this.entries.length}get openCount(){let e=0;for(let n of this.entries)n.feedback.status==="open"&&e++;return e}scheduleReposition(){this.repositionTimer||("requestIdleCallback"in window?this.repositionTimer=window.requestIdleCallback(()=>{this.repositionTimer=null,this.repositionAll();},{timeout:Nt+100}):this.repositionTimer=+setTimeout(()=>{this.repositionTimer=null,this.repositionAll();},Nt));}repositionAll(){let e=new Set;for(let n of this.entries)for(let i=0;i<n.feedback.annotations.length;i++){let o=n.elements[i];if(!o)continue;let r=n.feedback.annotations[i];if(!r)continue;let s=`${n.feedback.id}:${i}`;e.add(s);let l=this.anchorCache.get(s)?.deref(),p;if(l?.isConnected){let u=l.getBoundingClientRect(),c=ye(r);p={element:l,rect:new DOMRect(u.left+c.xPct*u.width,u.top+c.yPct*u.height,c.wPct*u.width,c.hPct*u.height),confidence:1,strategy:"css"};}else p=ge(He(r),ye(r)),p?.element&&this.anchorCache.set(s,new WeakRef(p.element));if(!p){o.style.display="none";continue}let d=Ft(p.rect);n.baseTop=d.top,n.baseLeft=d.left,o.style.display="flex",this.applyConfidenceStyle(o,p.confidence,n.feedback);}for(let n of this.anchorCache.keys())e.has(n)||this.anchorCache.delete(n);this.applyClusterPositions(),this.pinnedFeedback&&this.showHighlight(this.pinnedFeedback);}applyClusterPositions(){for(let e of this.clusters)e.expanded?this.applyFanPositions(e):this.applyStackPositions(e);}emitMarkersChanged(){let e=this.openCount;e!==this.lastOpenCount&&(this.lastOpenCount=e,this.bus.emit("markers:changed",e));}render(e){this.clear(),e.forEach((n,i)=>{let o=this.buildEntry(n,i+1);this.entries.push(o);}),this.buildClusters(),this.liveRegion&&this.entries.length>0&&(this.liveRegion.textContent=this.t("marker.count").replace("{count}",String(this.entries.length))),this.emitMarkersChanged();}addFeedback(e,n){let i=this.buildEntry(e,n);for(let o of i.elements)o.style.animation="sp-marker-in 0.35s cubic-bezier(0.34,1.56,0.64,1) both";this.entries.push(i),this.buildClusters(),this.emitMarkersChanged();}buildEntry(e,n){let i={feedback:e,elements:[],baseTop:0,baseLeft:0};for(let o of e.annotations){let r=ge(He(o),ye(o));if(!r)continue;let s=Ft(r.rect);i.baseTop=s.top,i.baseLeft=s.left;let a=this.createMarker(n,e,s);this.applyConfidenceStyle(a,r.confidence,e),this.container.appendChild(a),i.elements.push(a);}return i}buildClusters(){for(let i of this.container.querySelectorAll(".sp-cluster-badge"))i.remove();let e=[];for(let i of this.entries)for(let o=0;o<i.elements.length;o++)e.push({entry:i,elIdx:o});let n=new Set;this.clusters=[];for(let i=0;i<e.length;i++){if(n.has(i))continue;let o=e[i];if(!o)continue;let r={entries:[o.entry],elementIndices:[o.elIdx],expanded:false};n.add(i);for(let s=i+1;s<e.length;s++){if(n.has(s))continue;let a=o.entry,l=e[s];if(!l)continue;let p=l.entry;Math.sqrt((a.baseLeft-p.baseLeft)**2+(a.baseTop-p.baseTop)**2)<Sn&&(r.entries.push(p),r.elementIndices.push(l.elIdx),n.add(s));}this.clusters.push(r);}for(let i of this.clusters)i.entries.length<=1||(this.applyStackPositions(i),this.addClusterBadge(i));}applyStackPositions(e){let n=e.entries[0];if(!n)return;let{baseTop:i,baseLeft:o}=n,r=e.entries.length<=1;for(let s=0;s<e.entries.length;s++){let a=Q(e,s);a&&(a.style.top=`${i+(r?0:s*3)}px`,a.style.left=`${o+(r?0:s*3)}px`,a.style.zIndex=String(s+1));}}applyFanPositions(e){let n=e.entries[0];if(!n)return;let{baseTop:i,baseLeft:o}=n,r=e.entries.length,s=(r-1)*Dt,a=o-s/2;for(let l=0;l<r;l++){let p=Q(e,l);p&&(p.style.top=`${i}px`,p.style.left=`${a+l*Dt}px`,p.style.zIndex=String(10+l));}}addClusterBadge(e){let n=Q(e,e.entries.length-1);if(!n)return;let i=b("div",{class:"sp-cluster-badge",style:`
        position:absolute;top:-6px;right:-6px;
        min-width:16px;height:16px;padding:0 4px;
        border-radius:9999px;
        background:${this.colors.accent};color:#fff;
        font-size:10px;font-weight:700;
        display:flex;align-items:center;justify-content:center;
        border:1.5px solid #fff;
        pointer-events:none;
        font-family:"Inter",system-ui,-apple-system,sans-serif;
        line-height:1;
      `});c(i,String(e.entries.length)),n.appendChild(i);}setBadgesVisible(e,n){for(let i=0;i<e.entries.length;i++){let o=Q(e,i)?.querySelector(".sp-cluster-badge");o&&(o.style.display=n?"flex":"none");}}findCluster(e){for(let n of this.clusters)if(!(n.entries.length<=1)){for(let i=0;i<n.entries.length;i++)if(Q(n,i)===e)return n}return null}handleClusterClick(e,n){let i=this.findCluster(e);return i?i.expanded?false:(n.stopPropagation(),this.collapseAllClusters(),i.expanded=true,this.applyFanPositions(i),this.setBadgesVisible(i,false),true):false}collapseCluster(e){e.expanded&&(e.expanded=false,this.applyStackPositions(e),this.setBadgesVisible(e,true));}collapseAllClusters(){for(let e of this.clusters)this.collapseCluster(e);}applyConfidenceStyle(e,n,i){let o=i.status==="resolved";n<kn&&!o?(e.style.borderStyle="dashed",e.style.opacity="0.7",e.title=this.t("marker.approximate").replace("{confidence}",String(Math.round(n*100)))):(e.style.borderStyle="solid",e.style.opacity="1",e.title="");}createMarker(e,n,i){let o=u(n.type,this.colors),r=n.status==="resolved",s=b("div",{style:`
        position:absolute;
        top:${i.top}px;
        left:${i.left}px;
        width:26px;height:26px;
        border-radius:50%;
        background:${r?"rgba(241,245,249,0.9)":"rgba(255,255,255,0.92)"};
        border:2px solid ${r?"#cbd5e1":o};
        display:flex;align-items:center;justify-content:center;
        font-family:"Inter",system-ui,-apple-system,sans-serif;
        font-size:11px;font-weight:700;
        color:${r?"#94a3b8":o};
        cursor:pointer;pointer-events:auto;
        box-shadow:${r?"0 2px 8px rgba(0,0,0,0.06)":`0 2px 12px ${o}25, 0 2px 6px rgba(0,0,0,0.06)`};
        transition:top 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), left 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.15s ease, box-shadow 0.15s ease;
        user-select:none;
        -webkit-font-smoothing:antialiased;
      `});s.dataset.feedbackId=n.id,s.setAttribute("tabindex","0"),s.setAttribute("role","button");let a=n.message.length>60?`${n.message.slice(0,60)}...`:n.message,l=this.t("marker.aria").replace("{number}",String(e)).replace("{type}",B(n.type,this.t)).replace("{message}",a);s.setAttribute("aria-label",l),s.setAttribute("aria-describedby",this.tooltip.tooltipId),c(s,r?"\u2713":String(e)),s.addEventListener("mouseenter",()=>{s.style.transform="scale(1.2)",s.style.boxShadow=r?"0 4px 16px rgba(0,0,0,0.1)":`0 4px 20px ${o}35, 0 4px 12px rgba(0,0,0,0.08)`,this.tooltip.show(n,s.getBoundingClientRect()),this.pinnedFeedback||this.showHighlight(n);}),s.addEventListener("mouseleave",()=>{s.style.transform="scale(1)",s.style.boxShadow=r?"0 2px 8px rgba(0,0,0,0.06)":`0 2px 12px ${o}25, 0 2px 6px rgba(0,0,0,0.06)`,this.tooltip.scheduleHide(),this.pinnedFeedback||this.clearHighlight();}),s.addEventListener("focus",()=>{this.tooltip.show(n,s.getBoundingClientRect()),this.pinnedFeedback||this.showHighlight(n);}),s.addEventListener("blur",()=>{this.tooltip.scheduleHide(),this.pinnedFeedback||this.clearHighlight();});let p=d=>{d instanceof MouseEvent&&this.handleClusterClick(s,d)||(this.pinHighlight(n),this.bus.emit("panel:toggle",true),s.dispatchEvent(new CustomEvent("sp-marker-click",{detail:{feedbackId:n.id},bubbles:true})));};return s.addEventListener("click",d=>p(d)),s.addEventListener("keydown",d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),p(d));}),s}focusFeedback(e){let n=this.entries.find(o=>o.feedback.id===e);if(!n)return  false;let i=n.elements[0];return i&&i.scrollIntoView({behavior:"smooth",block:"center"}),this.pinHighlight(n.feedback),this.highlight(e),true}highlight(e){for(let n of this.entries)if(n.feedback.id===e)for(let i of n.elements)i.style.animation="sp-pulse-ring 0.7s ease-out",i.addEventListener("animationend",()=>{i.style.animation="";},{once:true});}showHighlight(e){this.removeHighlightElements();for(let n of e.annotations){let i=ge(He(n),ye(n));if(!i)continue;let o=u(e.type,this.colors),r=i.rect,s=b("div",{style:`
          position:absolute;
          top:${r.top+window.scrollY}px;
          left:${r.left+window.scrollX}px;
          width:${r.width}px;height:${r.height}px;
          border:2px solid ${o};
          background:${o}0c;
          border-radius:8px;
          pointer-events:none;z-index:-1;
          opacity:0;
          box-shadow:0 0 16px ${o}20;
          transition:opacity ${It}ms ease;
        `});this.container.appendChild(s),this.highlightElements.push(s),s.offsetHeight,s.style.opacity="1";}}pinHighlight(e){this.unpinHighlight(),this.showHighlight(e),this.pinnedFeedback=e,this.onDocumentClick=n=>{this.container.contains(n.target)||this.unpinHighlight();},document.addEventListener("click",this.onDocumentClick,{capture:true});}unpinHighlight(){this.onDocumentClick&&(document.removeEventListener("click",this.onDocumentClick,{capture:true}),this.onDocumentClick=null),this.pinnedFeedback=null,this.clearHighlight();}clearHighlight(){for(let e of this.highlightElements)e.style.opacity="0",setTimeout(()=>e.remove(),It);this.highlightElements=[];}removeHighlightElements(){for(let e of this.highlightElements)e.remove();this.highlightElements=[];}clear(){this.unpinHighlight(),this.container.replaceChildren(),this.entries=[],this.clusters=[],this.anchorCache.clear();}destroy(){this.unpinHighlight(),this.repositionTimer&&("cancelIdleCallback"in window&&window.cancelIdleCallback(this.repositionTimer),clearTimeout(this.repositionTimer)),this.resizeHandler&&window.removeEventListener("resize",this.resizeHandler),this.scrollHandler&&window.removeEventListener("scroll",this.scrollHandler,{capture:true}),this.onDocumentClickForClusters&&document.removeEventListener("click",this.onDocumentClickForClusters),this.mutationObserver?.disconnect(),this.container.remove();}};var xe=class{constructor(e,n){this.store=e;this.projectName=n;}store;projectName;async sendFeedback(e){let n=await this.store.createFeedback({projectName:e.projectName,type:e.type,message:e.message,status:"open",url:e.url,urlPattern:e.urlPattern??null,viewport:e.viewport,userAgent:e.userAgent,authorName:e.authorName,authorEmail:e.authorEmail,clientId:e.clientId,annotations:e.annotations.map(y),screenshotDataUrl:e.screenshotDataUrl??null});return _e(n)}async getFeedbacks(e,n){let{feedbacks:i,total:o}=await this.store.getFeedbacks({projectName:e,page:n?.page,limit:n?.limit,type:n?.type,status:n?.status,search:n?.search,url:n?.url,urlPattern:n?.urlPattern});return {feedbacks:i.map(_e),total:o}}async resolveFeedback(e,n){let i=await this.store.updateFeedback(e,{status:n?"resolved":"open",resolvedAt:n?new Date:null});return _e(i)}async deleteFeedback(e){await this.store.deleteFeedback(e);}async deleteAllFeedbacks(e){await this.store.deleteAllFeedbacks(e);}};function _e(t){return {id:t.id,projectName:t.projectName,type:t.type,message:t.message,status:t.status,url:t.url,urlPattern:t.urlPattern??null,viewport:t.viewport,userAgent:t.userAgent,authorName:t.authorName,authorEmail:t.authorEmail,resolvedAt:t.resolvedAt?.toISOString()??null,createdAt:t.createdAt.toISOString(),updatedAt:t.updatedAt.toISOString(),annotations:t.annotations.map(Tn),screenshotUrl:t.screenshotUrl??null,diagnostics:t.diagnostics??null}}function Tn(t){return {id:t.id,feedbackId:t.feedbackId,cssSelector:t.cssSelector,xpath:t.xpath,textSnippet:t.textSnippet,elementTag:t.elementTag,elementId:t.elementId,textPrefix:t.textPrefix,textSuffix:t.textSuffix,fingerprint:t.fingerprint,neighborText:t.neighborText,anchorKey:t.anchorKey??null,xPct:t.xPct,yPct:t.yPct,wPct:t.wPct,hPct:t.hPct,scrollX:t.scrollX,scrollY:t.scrollY,viewportW:t.viewportW,viewportH:t.viewportH,devicePixelRatio:t.devicePixelRatio,createdAt:t.createdAt.toISOString()}}var Cn="linear(0, 0.006, 0.025, 0.06, 0.11, 0.17, 0.25, 0.34, 0.45, 0.56, 0.67, 0.78, 0.88, 0.95, 1.01, 1.04, 1.05, 1.04, 1.02, 1, 0.99, 1)",$e="cubic-bezier(0.16, 1, 0.3, 1)",Oe="cubic-bezier(0.34, 1.56, 0.64, 1)",An="cubic-bezier(0.25, 1, 0.5, 1)",Ht=`
  /* ---- Keyframes ---- */

  @keyframes sp-fab-in {
    from {
      transform: scale(0) rotate(-180deg);
      opacity: 0;
    }
    to {
      transform: scale(1) rotate(0deg);
      opacity: 1;
    }
  }

  @keyframes sp-fab-glow {
    0%, 100% { box-shadow: 0 4px 20px var(--sp-accent-glow), 0 2px 8px rgba(0, 0, 0, 0.08); }
    50% { box-shadow: 0 4px 28px var(--sp-accent-glow), 0 2px 12px rgba(0, 0, 0, 0.1); }
  }

  @keyframes sp-marker-in {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    60% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes sp-pulse-ring {
    0% {
      box-shadow: 0 0 0 0 var(--sp-accent-glow);
    }
    70% {
      box-shadow: 0 0 0 8px transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  @keyframes sp-flash-bg {
    0% { background-color: var(--sp-accent-light); }
    100% { background-color: transparent; }
  }

  @keyframes sp-slide-up {
    from {
      transform: translateY(8px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes sp-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes sp-shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  /* ---- Animation classes ---- */

  .sp-anim-fab-in {
    animation: sp-fab-in 0.5s ${Cn} both;
  }

  .sp-anim-marker-in {
    animation: sp-marker-in 0.35s ${Oe} both;
  }

  .sp-anim-pulse {
    animation: sp-pulse-ring 0.7s ease-out;
  }

  .sp-anim-flash {
    animation: sp-flash-bg 0.5s ${An};
  }

  .sp-anim-slide-up {
    animation: sp-slide-up 0.3s ${$e} both;
  }

  .sp-anim-fade-in {
    animation: sp-fade-in 0.2s ease-out both;
  }

  /* ---- Transition utilities ---- */

  .sp-panel {
    transform: translateX(110%);
    transition: transform 0.4s ${$e};
  }

  .sp-panel.sp-panel--open {
    transform: translateX(0);
  }

  .sp-radial-item {
    opacity: 0;
    pointer-events: none;
    transform: translate(0, 0) scale(0.8);
    transition:
      transform 0.35s ${Oe},
      opacity 0.2s ease,
      background 0.2s ease,
      border-color 0.2s ease,
      box-shadow 0.2s ease;
  }

  .sp-radial-item.sp-radial-item--open {
    opacity: 1;
    pointer-events: auto;
  }

  /* Stagger delay via CSS custom property --sp-i */
  .sp-radial-item {
    transition-delay: calc(var(--sp-i, 0) * 50ms);
  }

  /* ---- Card stagger animation ---- */

  @keyframes sp-card-in {
    from {
      transform: translateY(12px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .sp-card {
    animation: sp-card-in 0.35s ${$e} both;
    animation-delay: calc(var(--sp-card-i, 0) * 40ms);
  }

  /* ---- Loading spinner ---- */

  @keyframes sp-spin {
    to { transform: rotate(360deg); }
  }

  .sp-spinner {
    width: 20px;
    height: 20px;
    border: 2px solid var(--sp-border);
    border-top-color: var(--sp-accent);
    border-radius: 50%;
    animation: sp-spin 0.6s linear infinite;
  }

  /* ---- Badge bounce ---- */

  @keyframes sp-badge-in {
    0% { transform: scale(0); }
    60% { transform: scale(1.3); }
    100% { transform: scale(1); }
  }

  .sp-fab-badge {
    animation: sp-badge-in 0.4s ${Oe} both;
  }

  /* ---- Reduced motion ---- */

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

`;function Be(t){return `
    :host {
      all: initial;
      position: fixed;
      z-index: ${2147483647};
      font-family: var(--sp-font);
      font-size: 14px;
      line-height: 1.5;
      color: var(--sp-text);
      /* Match native sub-controls (autofill, scrollbars, etc.) to the resolved theme */
      color-scheme: ${t.bg==="#ffffff"?"light":"dark"};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      ${w(t)}

      /* Identity modal \u2014 theme-aware backdrop + panel */
      --sp-identity-bg: ${t.glassBgHeavy};
      --sp-identity-overlay: ${t.bg==="#ffffff"?"rgba(15, 23, 42, 0.2)":"rgba(0, 0, 0, 0.4)"};
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    /* ============================
       Focus visible (accessibility)
       ============================ */

    :focus-visible {
      outline: 2px solid var(--sp-accent);
      outline-offset: 2px;
      /* Double-ring against any background colour: the bg-coloured halo
         separates the accent ring from busy host-page surfaces. */
      box-shadow: 0 0 0 4px var(--sp-bg);
    }

    /* ============================
       FAB (Floating Action Button)
       ============================ */

    .sp-fab {
      position: fixed;
      width: 52px;
      height: 52px;
      border-radius: var(--sp-radius-full);
      background: var(--sp-accent-gradient);
      color: #fff;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow:
        0 4px 20px var(--sp-accent-glow),
        0 2px 8px rgba(0, 0, 0, 0.08);
      transition:
        transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
        box-shadow 0.3s ease;
      outline: none;
    }

    .sp-fab:focus-visible {
      outline: 2px solid #fff;
      outline-offset: 3px;
    }

    .sp-fab:hover {
      transform: translateY(-2px) scale(1.05);
      box-shadow:
        0 8px 28px var(--sp-accent-glow),
        0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .sp-fab:active {
      transform: translateY(0) scale(0.95);
      transition-duration: 0.1s;
    }

    .sp-fab--bottom-right {
      bottom: 24px;
      right: 24px;
    }

    .sp-fab--bottom-left {
      bottom: 24px;
      left: 24px;
    }

    .sp-fab svg {
      width: 22px;
      height: 22px;
      fill: currentColor;
      transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    /* ---- FAB Badge ---- */

    .sp-fab-badge {
      position: absolute;
      top: -4px;
      right: -4px;
      min-width: 20px;
      height: 20px;
      padding: 0 6px;
      border-radius: var(--sp-radius-full);
      background: #ef4444;
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #fff;
      pointer-events: none;
      font-family: var(--sp-font);
      line-height: 1;
    }

    /* ============================
       Radial Menu
       ============================ */

    .sp-radial {
      position: fixed;
      pointer-events: none;
      width: 52px;
      height: 52px;
    }

    .sp-radial--bottom-right {
      bottom: 24px;
      right: 24px;
    }

    .sp-radial--bottom-left {
      bottom: 24px;
      left: 24px;
    }

    .sp-radial-item {
      position: absolute;
      left: 4px;
      bottom: 4px;
      width: 44px;
      height: 44px;
      border-radius: var(--sp-radius-full);
      background: var(--sp-glass-bg-heavy);
      backdrop-filter: blur(var(--sp-blur));
      -webkit-backdrop-filter: blur(var(--sp-blur));
      color: var(--sp-text);
      border: 1px solid var(--sp-glass-border);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--sp-shadow-md);
      font-size: 12px;
      font-weight: 600;
    }

    .sp-radial-item:hover,
    .sp-radial-item:focus-visible {
      background: rgba(255, 255, 255, 0.95);
      border-color: var(--sp-accent);
      color: var(--sp-accent);
      box-shadow:
        var(--sp-shadow-md),
        0 0 0 3px var(--sp-accent-light);
      outline: none;
    }

    .sp-radial-item svg {
      width: 18px;
      height: 18px;
      flex-shrink: 0;
      stroke: currentColor;
      fill: none;
    }

    .sp-radial-label {
      white-space: nowrap;
      font-size: 12px;
      font-weight: 500;
      color: var(--sp-text);
      pointer-events: none;
      opacity: 0;
      padding: 4px 12px;
      border-radius: var(--sp-radius);
      background: var(--sp-glass-bg-heavy);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid var(--sp-glass-border);
      box-shadow: var(--sp-shadow-sm);
      transform: translateX(4px);
      transition: opacity 0.2s ease, transform 0.2s ease;
    }

    .sp-radial-item:hover .sp-radial-label,
    .sp-radial-item:focus-visible .sp-radial-label {
      opacity: 1;
      transform: translateX(0);
    }

    /* ============================
       Panel (Side drawer)
       ============================ */

    .sp-panel {
      position: fixed;
      top: 0;
      right: 0;
      width: 400px;
      max-width: 100vw;
      height: 100vh;
      height: 100dvh;
      background: var(--sp-glass-bg);
      backdrop-filter: blur(var(--sp-blur-heavy));
      -webkit-backdrop-filter: blur(var(--sp-blur-heavy));
      border-left: 1px solid var(--sp-glass-border);
      box-shadow: var(--sp-shadow-xl);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    @media (max-width: 480px) {
      .sp-panel {
        width: 100vw;
        border-left: none;
      }
    }

    .sp-panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 24px;
      border-bottom: 1px solid var(--sp-border);
      background: var(--sp-glass-bg-heavy);
      backdrop-filter: blur(var(--sp-blur));
      -webkit-backdrop-filter: blur(var(--sp-blur));
      position: relative;
      z-index: 2;
    }

    .sp-panel-title {
      font-size: 17px;
      font-weight: 700;
      color: var(--sp-text);
      letter-spacing: -0.02em;
    }

    .sp-panel-close {
      width: 44px;
      height: 44px;
      border-radius: var(--sp-radius);
      border: none;
      background: transparent;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sp-text-tertiary);
      transition: all 0.2s ease;
    }

    .sp-panel-close:hover {
      background: var(--sp-bg-hover);
      color: var(--sp-text);
    }

    .sp-panel-close svg {
      width: 16px;
      height: 16px;
    }

    /* ============================
       Filters & Search
       ============================ */

    .sp-filters {
      padding: 16px 24px;
      border-bottom: 1px solid var(--sp-border);
      background: var(--sp-glass-bg-heavy);
      backdrop-filter: blur(var(--sp-blur));
      -webkit-backdrop-filter: blur(var(--sp-blur));
      position: sticky;
      top: 0;
      z-index: 1;
    }

    .sp-search-wrap {
      position: relative;
      margin-bottom: 12px;
    }

    .sp-search {
      width: 100%;
      height: 40px;
      padding: 0 12px 0 38px;
      border-radius: var(--sp-radius);
      border: 1px solid var(--sp-border);
      background: var(--sp-glass-bg-heavy);
      color: var(--sp-text);
      font-family: var(--sp-font);
      font-size: 13px;
      outline: none;
      transition: all 0.2s ease;
    }

    .sp-search::placeholder {
      color: var(--sp-text-tertiary);
    }

    .sp-search:focus {
      border-color: var(--sp-accent);
      box-shadow: 0 0 0 3px var(--sp-accent-light);
      background: var(--sp-bg);
    }

    .sp-search-icon {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--sp-text-tertiary);
      width: 16px;
      height: 16px;
      transition: color 0.2s ease;
    }

    .sp-search:focus ~ .sp-search-icon,
    .sp-search-wrap:focus-within .sp-search-icon {
      color: var(--sp-accent);
    }

    /* ============================
       Filter bar (type dropdown + status segmented)
       ============================ */

    .sp-filter-bar {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
      flex-wrap: wrap;
    }

    /* ============================
       Type filter dropdown
       ============================ */

    .sp-filter-dropdown {
      position: relative;
      flex: 1 1 auto;
      min-width: 0;
    }

    .sp-filter-dropdown-btn {
      --sp-chip-color: var(--sp-text-secondary);
      --sp-chip-bg: var(--sp-glass-bg-heavy);

      display: inline-flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      height: 32px;
      padding: 0 8px 0 10px;
      border-radius: var(--sp-radius-full);
      border: 1px solid var(--sp-border);
      background: var(--sp-glass-bg-heavy);
      color: var(--sp-text);
      font-family: var(--sp-font);
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      white-space: nowrap;
      transition: background 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
    }

    .sp-filter-dropdown-btn:hover {
      border-color: var(--sp-chip-color);
      background: var(--sp-chip-bg);
    }

    .sp-filter-dropdown-btn[aria-expanded="true"] {
      border-color: var(--sp-chip-color);
      background: var(--sp-chip-bg);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--sp-chip-color) 14%, transparent);
    }

    .sp-filter-dropdown-btn--filtered {
      border-color: var(--sp-chip-color);
      background: var(--sp-chip-bg);
    }

    .sp-filter-dropdown-btn__icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      flex-shrink: 0;
      color: var(--sp-chip-color);
    }

    .sp-filter-dropdown-btn__icon svg {
      width: 14px;
      height: 14px;
    }

    .sp-filter-dropdown-btn__label {
      display: inline-flex;
      align-items: baseline;
      gap: 6px;
      flex: 1;
      min-width: 0;
      overflow: hidden;
    }

    .sp-filter-dropdown-btn__prefix {
      color: var(--sp-text-tertiary);
      font-weight: 500;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    .sp-filter-dropdown-btn__value {
      color: var(--sp-chip-color);
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .sp-filter-dropdown-btn__chevron {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 14px;
      height: 14px;
      flex-shrink: 0;
      color: var(--sp-text-tertiary);
      transition: transform 0.18s ease, color 0.18s ease;
    }

    .sp-filter-dropdown-btn__chevron svg {
      width: 12px;
      height: 12px;
    }

    .sp-filter-dropdown-btn[aria-expanded="true"] .sp-filter-dropdown-btn__chevron {
      transform: rotate(180deg);
      color: var(--sp-chip-color);
    }

    .sp-filter-dropdown-menu {
      position: absolute;
      top: calc(100% + 6px);
      left: 0;
      right: 0;
      min-width: 180px;
      padding: 4px;
      border-radius: var(--sp-radius);
      background: var(--sp-glass-bg-heavy);
      backdrop-filter: blur(var(--sp-blur-heavy));
      -webkit-backdrop-filter: blur(var(--sp-blur-heavy));
      border: 1px solid var(--sp-glass-border);
      box-shadow: var(--sp-shadow-md);
      z-index: 10;
      animation: sp-filter-menu-in 0.15s ease-out both;
    }

    @keyframes sp-filter-menu-in {
      from { opacity: 0; transform: translateY(-4px) scale(0.98); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    .sp-filter-dropdown-option {
      --sp-chip-color: var(--sp-text-secondary);
      --sp-chip-bg: transparent;

      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 10px;
      border: none;
      border-radius: 8px;
      background: transparent;
      color: var(--sp-text);
      font-family: var(--sp-font);
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      text-align: left;
      transition: background 0.12s ease, color 0.12s ease;
    }

    .sp-filter-dropdown-option__icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      flex-shrink: 0;
      border-radius: 6px;
      background: var(--sp-chip-bg);
      color: var(--sp-chip-color);
    }

    .sp-filter-dropdown-option__icon svg {
      width: 13px;
      height: 13px;
    }

    .sp-filter-dropdown-option__label {
      flex: 1;
      min-width: 0;
    }

    .sp-filter-dropdown-option__check {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 14px;
      height: 14px;
      flex-shrink: 0;
      color: var(--sp-chip-color);
    }

    .sp-filter-dropdown-option__check svg {
      width: 13px;
      height: 13px;
    }

    .sp-filter-dropdown-option:hover {
      background: var(--sp-bg-hover);
    }

    .sp-filter-dropdown-option--active {
      color: var(--sp-chip-color);
      font-weight: 600;
    }

    .sp-filter-dropdown-option--active:hover {
      background: var(--sp-chip-bg);
    }

    /* ============================
       Status segmented control
       ============================ */

    .sp-segmented {
      display: inline-flex;
      align-items: stretch;
      padding: 2px;
      border-radius: var(--sp-radius-full);
      border: 1px solid var(--sp-border);
      background: var(--sp-glass-bg-heavy);
      flex-shrink: 0;
    }

    .sp-segmented__btn {
      --sp-chip-color: var(--sp-text-tertiary);
      --sp-chip-bg: transparent;

      display: inline-flex;
      align-items: center;
      gap: 5px;
      height: 26px;
      padding: 0 10px;
      border: none;
      border-radius: var(--sp-radius-full);
      background: transparent;
      color: var(--sp-text-secondary);
      font-family: var(--sp-font);
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      white-space: nowrap;
      transition: background 0.18s ease, color 0.18s ease, box-shadow 0.18s ease;
    }

    .sp-segmented__icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 13px;
      height: 13px;
      flex-shrink: 0;
      color: var(--sp-chip-color);
      transition: color 0.18s ease, transform 0.18s ease;
    }

    .sp-segmented__icon svg {
      width: 13px;
      height: 13px;
    }

    .sp-segmented__btn:hover {
      color: var(--sp-chip-color);
    }

    .sp-segmented__btn:hover .sp-segmented__icon {
      color: var(--sp-chip-color);
    }

    .sp-segmented__btn--active {
      background: var(--sp-chip-bg);
      color: var(--sp-chip-color);
      font-weight: 600;
      box-shadow:
        inset 0 0 0 1px color-mix(in srgb, var(--sp-chip-color) 35%, transparent),
        0 1px 2px rgba(0, 0, 0, 0.04);
    }

    .sp-segmented__btn--active .sp-segmented__icon {
      color: var(--sp-chip-color);
    }

    .sp-segmented__btn--open.sp-segmented__btn--active .sp-segmented__icon {
      animation: sp-segmented-pulse 2.4s ease-in-out infinite;
    }

    @keyframes sp-segmented-pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(0.85); }
    }

    @media (prefers-reduced-motion: reduce) {
      .sp-filter-dropdown-btn,
      .sp-filter-dropdown-btn__chevron,
      .sp-filter-dropdown-option,
      .sp-segmented__btn,
      .sp-segmented__icon {
        transition: none;
      }
      .sp-filter-dropdown-menu {
        animation: none;
      }
      .sp-segmented__btn--open.sp-segmented__btn--active .sp-segmented__icon {
        animation: none;
      }
    }

    /* ============================
       Feedback Cards
       ============================ */

    .sp-list {
      flex: 1;
      overflow-y: auto;
      padding: 8px 12px;
    }

    .sp-list::-webkit-scrollbar {
      width: 6px;
    }

    .sp-list::-webkit-scrollbar-track {
      background: transparent;
    }

    .sp-list::-webkit-scrollbar-thumb {
      background: var(--sp-border);
      border-radius: var(--sp-radius-full);
    }

    .sp-list::-webkit-scrollbar-thumb:hover {
      background: var(--sp-text-tertiary);
    }

    .sp-card {
      display: flex;
      padding: 14px 16px;
      margin-bottom: 6px;
      cursor: pointer;
      border-radius: var(--sp-radius);
      background: var(--sp-glass-bg-heavy);
      border: 1px solid var(--sp-glass-border);
      box-shadow: var(--sp-shadow-xs);
      transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .sp-card:hover {
      background: var(--sp-bg);
      border-color: var(--sp-border);
      box-shadow: var(--sp-shadow-md);
      transform: translateY(-2px);
    }

    .sp-card:active {
      transform: translateY(0) scale(0.99);
      transition-duration: 0.1s;
    }

    .sp-card-bar {
      width: 3px;
      border-radius: var(--sp-radius-full);
      margin-right: 14px;
      flex-shrink: 0;
    }

    .sp-card-body {
      flex: 1;
      min-width: 0;
    }

    .sp-card-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 6px;
    }

    .sp-card-number {
      font-size: 12px;
      font-weight: 700;
      color: var(--sp-text-tertiary);
      font-variant-numeric: tabular-nums;
    }

    .sp-badge {
      padding: 2px 10px;
      border-radius: var(--sp-radius-full);
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.02em;
    }

    .sp-card-date {
      font-size: 11px;
      color: var(--sp-text-tertiary);
      margin-left: auto;
    }

    .sp-card-message {
      font-size: 13px;
      line-height: 1.5;
      color: var(--sp-text);
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .sp-card-message--expanded {
      -webkit-line-clamp: unset;
    }

    .sp-card-expand {
      font-size: 12px;
      font-weight: 500;
      color: var(--sp-accent);
      cursor: pointer;
      background: none;
      border: none;
      padding: 4px 0;
      font-family: var(--sp-font);
      transition: opacity 0.15s ease;
    }

    .sp-card-expand:hover {
      opacity: 0.8;
    }

    .sp-card-footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 6px;
      margin-top: 10px;
    }

    .sp-btn-resolve,
    .sp-btn-delete {
      padding: 8px 14px;
      border-radius: var(--sp-radius-full);
      border: 1px solid var(--sp-border);
      background: transparent;
      color: var(--sp-text-secondary);
      font-family: var(--sp-font);
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
      transition: all 0.2s ease;
    }

    .sp-btn-resolve svg,
    .sp-btn-delete svg {
      width: 14px;
      height: 14px;
    }

    .sp-btn-resolve:hover {
      border-color: #22c55e;
      color: #22c55e;
      background: rgba(34, 197, 94, 0.06);
    }

    .sp-btn-delete:hover {
      border-color: #ef4444;
      color: #ef4444;
      background: rgba(239, 68, 68, 0.06);
    }

    .sp-btn-resolve:disabled,
    .sp-btn-delete:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    }

    .sp-spinner--sm {
      width: 14px;
      height: 14px;
    }

    /* ---- Delete All (header) ---- */

    .sp-panel-header-right {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .sp-btn-delete-all {
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
    }

    .sp-btn-delete-all svg {
      width: 13px;
      height: 13px;
    }

    .sp-btn-delete-all:hover {
      border-color: #ef4444;
      color: #ef4444;
      background: rgba(239, 68, 68, 0.06);
    }

    .sp-btn-delete-all:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    }

    /* ---- Confirm Dialog ---- */

    .sp-confirm-backdrop {
      position: fixed;
      inset: 0;
      background: var(--sp-backdrop, rgba(15, 23, 42, 0.2));
      backdrop-filter: blur(var(--sp-blur));
      -webkit-backdrop-filter: blur(var(--sp-blur));
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: ${2147483647};
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    .sp-confirm-dialog {
      width: 340px;
      padding: 28px;
      border-radius: 20px;
      background: var(--sp-glass-bg-heavy);
      backdrop-filter: blur(var(--sp-blur-heavy));
      -webkit-backdrop-filter: blur(var(--sp-blur-heavy));
      border: 1px solid var(--sp-glass-border);
      box-shadow: var(--sp-shadow-xl);
      font-family: var(--sp-font);
      transform: translateY(8px) scale(0.97);
      transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .sp-confirm-title {
      font-size: 17px;
      font-weight: 700;
      color: var(--sp-text);
      letter-spacing: -0.02em;
      margin-bottom: 8px;
    }

    .sp-confirm-message {
      font-size: 14px;
      color: var(--sp-text-secondary);
      line-height: 1.5;
      margin-bottom: 20px;
    }

    .sp-confirm-actions {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
    }

    .sp-btn-danger {
      height: 40px;
      padding: 0 22px;
      border-radius: var(--sp-radius);
      border: none;
      background: #ef4444;
      color: #fff;
      font-family: var(--sp-font);
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 2px 8px rgba(239, 68, 68, 0.25);
    }

    .sp-btn-danger:hover {
      background: #dc2626;
      box-shadow: 0 4px 16px rgba(239, 68, 68, 0.3);
      transform: translateY(-1px);
    }

    .sp-btn-danger:active {
      transform: translateY(0) scale(0.98);
      transition-duration: 0.1s;
    }

    .sp-card--resolved {
      opacity: 0.5;
    }

    .sp-card--resolved .sp-card-message {
      text-decoration: line-through;
      text-decoration-color: var(--sp-text-tertiary);
    }

    /* ============================
       Loading State
       ============================ */

    .sp-loading {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 48px 24px;
    }

    /* ============================
       Identity Form
       ============================ */

    .sp-identity-title {
      font-size: 17px;
      font-weight: 700;
      color: var(--sp-text);
      letter-spacing: -0.02em;
    }

    .sp-input {
      width: 100%;
      height: 42px;
      padding: 0 14px;
      border-radius: var(--sp-radius);
      border: 1px solid var(--sp-border);
      background: var(--sp-glass-bg-heavy);
      color: var(--sp-text);
      font-family: var(--sp-font);
      font-size: 14px;
      outline: none;
      transition: all 0.2s ease;
    }

    .sp-input::placeholder {
      color: var(--sp-text-tertiary);
    }

    .sp-input:focus {
      border-color: var(--sp-accent);
      box-shadow: 0 0 0 3px var(--sp-accent-light);
      background: var(--sp-bg);
    }

    .sp-input-label {
      font-size: 13px;
      font-weight: 500;
      color: var(--sp-text-secondary);
      margin-bottom: 6px;
      display: block;
    }

    /* ============================
       Buttons
       ============================ */

    .sp-btn-primary {
      height: 40px;
      padding: 0 22px;
      border-radius: var(--sp-radius);
      border: none;
      background: var(--sp-accent-gradient);
      color: #fff;
      font-family: var(--sp-font);
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 2px 8px var(--sp-accent-glow);
    }

    .sp-btn-primary:hover {
      box-shadow: 0 4px 16px var(--sp-accent-glow);
      transform: translateY(-1px);
    }

    .sp-btn-primary:active {
      transform: translateY(0) scale(0.98);
      transition-duration: 0.1s;
    }

    .sp-btn-primary:disabled {
      opacity: 0.4;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }

    .sp-btn-ghost {
      height: 40px;
      padding: 0 22px;
      border-radius: var(--sp-radius);
      border: 1px solid var(--sp-border);
      background: var(--sp-glass-bg-heavy);
      color: var(--sp-text-secondary);
      font-family: var(--sp-font);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .sp-btn-ghost:hover {
      border-color: var(--sp-accent);
      color: var(--sp-accent);
      background: var(--sp-accent-light);
    }

    /* ============================
       Empty State
       ============================ */

    .sp-empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 56px 24px;
      color: var(--sp-text-tertiary);
      text-align: center;
      gap: 8px;
      animation: sp-fade-in 0.3s ease-out both;
    }

    .sp-empty-text {
      font-size: 14px;
      font-weight: 500;
    }

    /* ============================
       Load More
       ============================ */

    .sp-load-more-wrap {
      display: flex;
      justify-content: center;
      padding: 12px 0 4px;
    }

    .sp-btn-load-more {
      width: 100%;
    }

    /* ============================
       Forced Colors / High Contrast
       ============================ */

    @media (forced-colors: active) {
      .sp-fab,
      .sp-radial-item,
      .sp-filter-dropdown-btn,
      .sp-segmented,
      .sp-segmented__btn,
      .sp-card,
      .sp-panel-close,
      .sp-search,
      .sp-btn-resolve,
      .sp-btn-delete,
      .sp-btn-delete-all,
      .sp-btn-primary,
      .sp-btn-ghost,
      .sp-btn-danger,
      .sp-card-expand,
      .sp-input,
      .sp-confirm-dialog {
        border: 2px solid ButtonText !important;
        background: Canvas !important;
        color: ButtonText !important;
      }

      .sp-segmented__btn--active {
        background: Highlight !important;
        color: HighlightText !important;
      }

      .sp-filter-dropdown-menu {
        border: 2px solid ButtonText !important;
        background: Canvas !important;
      }

      .sp-filter-dropdown-option--active {
        background: Highlight !important;
        color: HighlightText !important;
      }

      .sp-fab:focus-visible,
      .sp-radial-item:focus-visible,
      .sp-filter-dropdown-btn:focus-visible,
      .sp-segmented__btn:focus-visible,
      .sp-filter-dropdown-option:focus-visible,
      .sp-panel-close:focus-visible,
      .sp-btn-resolve:focus-visible,
      .sp-btn-delete:focus-visible,
      .sp-btn-delete-all:focus-visible,
      .sp-btn-primary:focus-visible,
      .sp-btn-ghost:focus-visible,
      .sp-btn-danger:focus-visible,
      .sp-card-expand:focus-visible,
      .sp-input:focus-visible,
      .sp-search:focus-visible {
        outline: 3px solid Highlight !important;
      }

      .sp-panel {
        border: 2px solid ButtonText !important;
      }

      .sp-fab-badge {
        border: 2px solid ButtonText !important;
        background: Canvas !important;
        color: ButtonText !important;
      }

      .sp-card-bar {
        background: ButtonText !important;
      }
    }

    ${Ht}
    ${N}
    ${M}
    ${E}
    ${C}
    ${R}
    ${G$1}
  `}var Ln=120,Rn=80,we=class{constructor(e,n="en"){this.colors=e;this.locale=n;this.root=b("div",{style:`
        position: fixed;
        z-index: ${2147483647};
        max-width: 280px;
        padding: 12px 14px;
        border-radius: 14px;
        background: ${this.colors.glassBgHeavy};
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        border: 1px solid ${this.colors.glassBorder};
        box-shadow: 0 8px 32px ${this.colors.shadow}, 0 2px 8px ${this.colors.shadow};
        font-family: "Inter", system-ui, -apple-system, sans-serif;
        pointer-events: auto;
        opacity: 0;
        transform: translateY(6px) scale(0.97);
        transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        visibility: hidden;
        -webkit-font-smoothing: antialiased;
      `}),this.root.setAttribute("role","tooltip"),this.root.id=this.tooltipId,this.arrow=b("div",{style:`
        position: absolute;
        width: 12px;
        height: 12px;
        background: ${this.colors.glassBgHeavy};
        border: 1px solid ${this.colors.glassBorder};
        transform: rotate(45deg);
        pointer-events: none;
      `}),this.root.appendChild(this.arrow),this.root.addEventListener("mouseenter",()=>this.cancelHide()),this.root.addEventListener("mouseleave",()=>this.scheduleHide()),document.body.appendChild(this.root);}colors;locale;root;arrow;showTimer=null;hideTimer=null;currentFeedbackId=null;tooltipId="sp-tooltip";show(e,n){this.currentFeedbackId!==e.id&&(this.cancelHide(),this.cancelShow(),this.showTimer=setTimeout(()=>{this.currentFeedbackId=e.id,this.render(e),this.position(n);let i=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;this.root.style.transition=i?"none":"",this.root.style.visibility="visible",this.root.style.opacity="1",this.root.style.transform="translateY(0) scale(1)";},Ln));}scheduleHide(){this.cancelHide(),this.hideTimer=setTimeout(()=>this.hide(),Rn);}hide(){this.cancelShow(),this.currentFeedbackId=null,this.root.style.opacity="0",this.root.style.transform="translateY(6px) scale(0.97)",setTimeout(()=>{this.currentFeedbackId||(this.root.style.visibility="hidden");},200);}cancelShow(){this.showTimer&&(clearTimeout(this.showTimer),this.showTimer=null);}cancelHide(){this.hideTimer&&(clearTimeout(this.hideTimer),this.hideTimer=null);}render(e$1){let n=Array.from(this.root.children);for(let u of n)u!==this.arrow&&u.remove();let i=u(e$1.type,this.colors),o=v(e$1.type,this.colors),r=A(this.locale),s=B(e$1.type,r),a=b("div",{style:"display:flex;align-items:center;gap:8px;margin-bottom:8px;"}),l=b("span",{style:`
        padding:3px 10px;border-radius:9999px;
        font-size:11px;font-weight:600;
        color:${i};background:${o};
        letter-spacing:0.02em;
      `});c(l,s);let p=b("span",{style:`font-size:11px;color:${this.colors.textSecondary};margin-left:auto;`});c(p,e(e$1.createdAt,this.locale)),a.appendChild(l),a.appendChild(p);let d=b("div",{style:`font-size:13px;line-height:1.55;color:${this.colors.text};display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;`});c(d,e$1.message),this.root.insertBefore(a,this.arrow),this.root.insertBefore(d,this.arrow);}position(e){let n=this.root.getBoundingClientRect(),i=10,o=e.top-n.height-i,r=e.left+e.width/2-n.width/2,s=true;o<8&&(o=e.bottom+i,s=false),r=Math.max(8,Math.min(r,window.innerWidth-n.width-8)),this.root.style.top=`${o}px`,this.root.style.left=`${r}px`;let a=Math.max(16,Math.min(e.left+e.width/2-r-6,n.width-22));s?this.arrow.style.cssText=`
        position:absolute;
        width:12px;height:12px;
        background:${this.colors.glassBgHeavy};
        border-right:1px solid ${this.colors.glassBorder};
        border-bottom:1px solid ${this.colors.glassBorder};
        transform:rotate(45deg);
        pointer-events:none;
        bottom:-6px;
        left:${a}px;
      `:this.arrow.style.cssText=`
        position:absolute;
        width:12px;height:12px;
        background:${this.colors.glassBgHeavy};
        border-left:1px solid ${this.colors.glassBorder};
        border-top:1px solid ${this.colors.glassBorder};
        transform:rotate(45deg);
        pointer-events:none;
        top:-6px;
        left:${a}px;
      `;}contains(e){return this.root.contains(e)}destroy(){this.cancelShow(),this.cancelHide(),this.root.remove();}};var ee=null;function Mn(t){return t===void 0||t===false?{console:false,network:false,maxConsoleEntries:50,maxNetworkEntries:20}:t===true?{console:true,network:true,maxConsoleEntries:50,maxNetworkEntries:20}:{console:t.console!==false,network:t.network!==false,maxConsoleEntries:typeof t.maxConsoleEntries=="number"?t.maxConsoleEntries:50,maxNetworkEntries:typeof t.maxNetworkEntries=="number"?t.maxNetworkEntries:20}}function Ee(){let t=()=>{};return {destroy:t,open:t,close:t,refresh:t,focusFeedback:()=>false,on:()=>t,off:t}}function Pn(t){return t===void 0||t===false?{enabled:false,param:"siteping"}:t===true?{enabled:true,param:"siteping"}:{enabled:true,param:t.param??"siteping"}}function _t(t$1){let e=t$1.debug?(...h)=>console.debug("[siteping]",...h):()=>{};if(ee)return e("initSiteping() called more than once \u2014 returning existing instance"),ee;if(!t$1.forceShow)try{if(typeof process<"u")return t$1.onSkip?.("production"),Ee()}catch{}let n=typeof t$1.minViewportWidth=="number"&&Number.isFinite(t$1.minViewportWidth)?t$1.minViewportWidth:768;if(!t$1.forceShow&&window.innerWidth<n){let h="mobile";return t$1.onSkip?.(h),Ee()}if(!t$1.store&&(!t$1.endpoint||typeof t$1.endpoint!="string"))return console.error("[siteping] Missing 'endpoint' or 'store' in config. Provide an endpoint like '/api/siteping' or a SitepingStore instance."),Ee();if(!t$1.projectName||typeof t$1.projectName!="string")return console.error("[siteping] Missing or invalid 'projectName' in config. Expected a non-empty string."),Ee();let i=t$1.locale??"en",o=i==="en"?Promise.resolve():z$1(i).catch(()=>{}),r=A(i),s=t$1.scopeAnnotationsByUrl??true,a=()=>{try{let h=t$1.getPageScope?.();if(h)return h}catch(h){e("getPageScope() threw, falling back to pathname:",h);}return {url:window.location.pathname,urlPattern:null}};e("Initializing widget",{projectName:t$1.projectName,theme:t$1.theme??"light",locale:i,scopeAnnotationsByUrl:s});let l=Mn(t$1.captureDiagnostics),p=l.console?new he(l.maxConsoleEntries):null,d=l.network?new fe(l.maxNetworkEntries):null,u=t(t$1.accentColor,t$1.theme),c=new Z,m=new Z,x=(()=>{if(t$1.store)return new xe(t$1.store,t$1.projectName);let h=t$1.endpoint;if(typeof h!="string"||h.length===0)throw new Error("[siteping] internal invariant: endpoint must be a non-empty string in HTTP mode");return new ue(h,t$1.projectName)})();t$1.onOpen&&c.on("open",t$1.onOpen),t$1.onClose&&c.on("close",t$1.onClose),t$1.onFeedbackSent&&c.on("feedback:sent",t$1.onFeedbackSent),t$1.onError&&c.on("feedback:error",t$1.onError),t$1.onAnnotationStart&&c.on("annotation:start",t$1.onAnnotationStart),t$1.onAnnotationEnd&&c.on("annotation:end",t$1.onAnnotationEnd),c.on("feedback:sent",h=>m.emit("feedback:sent",h)),c.on("feedback:deleted",h=>m.emit("feedback:deleted",h)),c.on("open",()=>m.emit("panel:open")),c.on("close",()=>m.emit("panel:close")),c.on("open",()=>e("Panel opened")),c.on("close",()=>e("Panel closed")),c.on("feedback:sent",h=>e("Feedback sent",h.id)),c.on("feedback:error",h=>e("Feedback failed",h.message)),c.on("annotation:start",()=>e("Annotation started")),c.on("annotation:end",()=>e("Annotation ended"));let L=document.createElement("siteping-widget");L.style.cssText=`position:fixed;z-index:${2147483647};`;let F=false;try{typeof process<"u"&&process.env?.["NODE_ENV"]==="test"&&(F=!0);}catch{}let _=F?"open":"closed",A$1=L.attachShadow({mode:_});if("adoptedStyleSheets"in ShadowRoot.prototype){let h=new CSSStyleSheet;h.replaceSync(Be(u)),A$1.adoptedStyleSheets=[h];}else {let h=document.createElement("style");h.textContent=Be(u),A$1.appendChild(h);}document.body.appendChild(L);let S=document.createElement("div");S.setAttribute("role","status"),S.setAttribute("aria-live","polite"),S.setAttribute("aria-atomic","true"),S.style.cssText="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;",document.body.appendChild(S);let T=new we(u,i),g=new ve(u,T,c,r,S),R=new me(A$1,t$1,c,r);c.on("markers:changed",h=>R.updateBadge(h));let v=null,I=null,k=false,te=0;async function Xe(){return k?null:v||(I||(I=import('./panel-YENBIYKV.js').then(h=>k?null:(v=new h.Panel(A$1,u,c,x,t$1.projectName,g,r,i,{getScope:a,scopeAnnotationsByUrl:s}),v))),I)}if(typeof window<"u"){let h=()=>{k||Xe();},f=window.requestIdleCallback;typeof f=="function"?f(h):setTimeout(h,200);}let $=false,Ot=c.on("panel:toggle",h=>{v||(h?($=true,Xe().then(f=>{f&&$&&f.open(),$=false;}).catch(f=>e("Failed to lazy-load panel:",f))):$=false);}),Ke=new le(u,c,r,t$1.enableScreenshot??false);i!=="en"&&o.then(()=>{k||(R.refreshLabels(),Ke.refreshLabels());});let ke=false,Bt=c.on("annotation:complete",async h=>{if(ke){c.emit("submission:cancelled");return}ke=true;try{let{annotation:f,type:y,message:M,screenshotDataUrl:O}=h,C=t$1.identity??Ne();if(!C){if(C=await Fn(A$1,r),!C){c.emit("submission:cancelled");return}Mt(C);}let ne=(()=>{try{return crypto.randomUUID()}catch{return `${Date.now()}-${Math.random().toString(36).slice(2)}`}})(),E=a(),ie=null;(p||d)&&(ie={console:p?.getEntries()??[],network:d?.getEntries()??[]});let Xt={projectName:t$1.projectName,type:y,message:M,url:E.url,urlPattern:E.urlPattern,viewport:`${window.innerWidth}x${window.innerHeight}`,userAgent:navigator.userAgent,authorName:C.name,authorEmail:C.email,annotations:[f],clientId:ne,screenshotDataUrl:O??null,diagnostics:ie};try{let N=await x.sendFeedback(Xt);c.emit("feedback:sent",N),(!s||N.url===E.url)&&g.addFeedback(N,g.count+1),S.textContent=r("feedback.sent.confirmation"),v&&await v.refresh();}catch(N){c.emit("feedback:error",N instanceof Error?N:new Error(String(N))),S.textContent=r("feedback.error.message");}}finally{ke=false;}}),Se=a(),jt=s?{limit:20,url:Se.url}:{limit:20},Te=Pn(t$1.deepLink),zt=++te;Promise.all([x.getFeedbacks(t$1.projectName,jt),o]).then(([{feedbacks:h}])=>{if(k||te!==zt)return;let f=s?h.filter(y=>y.url===Se.url):h;if(g.render(f),Te.enabled)try{let y=new URLSearchParams(window.location.search).get(Te.param);if(y){let M=g.focusFeedback(y);e(`deepLink ?${Te.param}=${y} ${M?"focused":"did not match a visible feedback"}`);}}catch(y){e("deepLink parsing failed:",y);}}).catch(h=>{e("Failed to load initial markers:",h);}),t$1.endpoint&&Ct(t$1.endpoint,t$1.identity??Ne()).then(()=>e("Retry queue flushed")).catch(()=>{});let qe=()=>{let h=++te;if(v?.isCurrentlyOpen)return v.refresh();let f=a(),y=s?{limit:20,url:f.url}:{limit:20};return x.getFeedbacks(t$1.projectName,y).then(({feedbacks:M})=>{if(k||h!==te||v?.isCurrentlyOpen)return;let O=s?M.filter(C=>C.url===f.url):M;g.render(O);})},Ue=null;if(t$1.watchNavigation!==false&&typeof window<"u"&&typeof history<"u"){let h=E=>`${E.url}
${E.urlPattern??""}`,f=h(Se),y=()=>{if(k)return;let E=h(a());if(E===f)return;let ie=f;f=E,e("SPA navigation detected \u2014 refreshing feedbacks for new scope"),qe().catch(()=>{f===E&&(f=ie);});},M=history.pushState,O=history.replaceState,C=function(...E){M.apply(this,E),y();},ne=function(...E){O.apply(this,E),y();};history.pushState=C,history.replaceState=ne,window.addEventListener("popstate",y),window.addEventListener("hashchange",y),Ue=()=>{window.removeEventListener("popstate",y),window.removeEventListener("hashchange",y),history.pushState===C&&(history.pushState=M),history.replaceState===ne&&(history.replaceState=O);};}return ee={destroy:()=>{e("Destroying widget"),k=true,$=false,Ue?.(),Bt(),Ot(),R.destroy(),v?.destroy(),Ke.destroy(),g.destroy(),T.destroy(),p?.dispose(),d?.dispose(),c.removeAll(),m.removeAll(),S.remove(),L.remove(),ee=null;},open:()=>{c.emit("panel:toggle",true);},close:()=>{v?v.close():$=false;},focusFeedback:h=>g.focusFeedback(h),refresh:()=>{qe().catch(()=>{});},on:(h,f)=>m.on(h,f),off:(h,f)=>{m.off(h,f);}},ee}function Fn(t,e){return new Promise(n=>{let i=t.activeElement??document.activeElement,o=t.host;o.parentNode&&o.parentNode.appendChild(o);let r=document.createElement("div");r.style.cssText=`
      position:fixed;inset:0;
      background:var(--sp-identity-overlay);
      backdrop-filter:blur(8px);
      -webkit-backdrop-filter:blur(8px);
      display:flex;align-items:center;justify-content:center;
      z-index:${2147483647};
      opacity:0;transition:opacity 0.25s ease;
    `;let s=document.createElement("div");s.style.cssText=`
      width:340px;padding:28px;border-radius:var(--sp-radius-xl);
      background:var(--sp-identity-bg);
      backdrop-filter:blur(var(--sp-blur-heavy));
      -webkit-backdrop-filter:blur(var(--sp-blur-heavy));
      border:1px solid var(--sp-glass-border);
      box-shadow:0 16px 48px var(--sp-shadow), 0 8px 16px var(--sp-shadow);
      font-family:var(--sp-font, "Inter",system-ui,-apple-system,sans-serif);
      color:var(--sp-text);
      transform:translateY(12px) scale(0.97);
      transition:transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      -webkit-font-smoothing:antialiased;
    `;let a=`sp-identity-title-${Date.now()}`;s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-labelledby",a);let l=document.createElement("div");l.className="sp-identity-title",l.id=a,l.textContent=e("identity.title"),l.style.marginBottom="20px";let p=`sp-identity-name-${Date.now()}`,d=`sp-identity-email-${Date.now()}`,u=document.createElement("label");u.className="sp-input-label",u.textContent=e("identity.nameLabel"),u.setAttribute("for",p);let c=document.createElement("input");c.className="sp-input",c.id=p,c.type="text",c.placeholder=e("identity.namePlaceholder"),c.style.marginBottom="14px";let m=document.createElement("label");m.className="sp-input-label",m.textContent=e("identity.emailLabel"),m.setAttribute("for",d);let x=document.createElement("input");x.className="sp-input",x.id=d,x.type="email",x.placeholder=e("identity.emailPlaceholder");let L=document.createElement("div");L.style.cssText="display:flex;gap:8px;justify-content:flex-end;margin-top:20px;";let F=T=>{r.removeEventListener("keydown",S),r.style.opacity="0",s.style.transform="translateY(12px) scale(0.97)",setTimeout(()=>{r.remove(),i?.focus(),n(T);},250);},_=document.createElement("button");_.className="sp-btn-ghost",_.textContent=e("identity.cancel"),_.addEventListener("click",()=>F(null));let A=document.createElement("button");A.className="sp-btn-primary",A.textContent=e("identity.submit"),A.addEventListener("click",()=>{let T=c.value.trim(),g=x.value.trim();if(!T||!g)return;if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)){x.style.borderColor="var(--sp-type-bug, #ef4444)";return}F({name:T,email:g});});let ze='input, button, [tabindex]:not([tabindex="-1"])',S=T=>{let g=T;if(g.key==="Escape"){F(null);return}if(g.key==="Tab"){let R=Array.from(s.querySelectorAll(ze));if(R.length===0)return;let v=R[0],I=R[R.length-1];if(!v||!I)return;let k=t.activeElement;g.shiftKey?(k===v||!s.contains(k))&&(g.preventDefault(),I.focus()):(k===I||!s.contains(k))&&(g.preventDefault(),v.focus());}};r.addEventListener("keydown",S),r.addEventListener("click",T=>{T.target===r&&F(null);}),L.appendChild(_),L.appendChild(A),s.appendChild(l),s.appendChild(u),s.appendChild(c),s.appendChild(m),s.appendChild(x),s.appendChild(L),r.appendChild(s),t.appendChild(r),requestAnimationFrame(()=>{r.style.opacity="1",s.style.transform="translateY(0) scale(1)",c.focus();});})}function $t(t){return _t(t)}function ss(t){let e=useRef(t);e.current=t;let[n,i]=useState(null);return useEffect(()=>{let o=true,r=$t(e.current);if(!o){r.destroy();return}let s=r.on("feedback:sent",p=>{e.current.onFeedbackSent?.(p);}),a=r.on("panel:open",()=>{e.current.onOpen?.();}),l=r.on("panel:close",()=>{e.current.onClose?.();});return i(r),()=>{o=false,s(),a(),l(),r.destroy(),i(null);}},[]),n}export{ss as useSiteping};//# sourceMappingURL=react.js.map
//# sourceMappingURL=react.js.map