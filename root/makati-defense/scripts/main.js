'use strict';function v(f,k,g,l){f.f.fa(f.I,k,g,l,void 0)}function y(f,k,g,l){f.f.i?v(f,k,g,l):f.f.qb()._OnMessageFromDOM({type:"event",component:f.I,handler:k,dispatchOpts:l||null,data:g,responseId:null})}function G(f,k,g){f.f.b(f.I,k,g)}function M(f,k){for(const [g,l]of k)G(f,g,l)}window.R=class{constructor(f,k){this.f=f;this.I=k}Aa(){}};
window.fb=class{constructor(f,k){this.Ra=f;this.Yb=k;this.A=-1;this.Y=-Infinity;this.cc=()=>{this.A=-1;this.Y=Date.now();this.J=!0;this.Ra();this.J=!1};this.Sa=this.J=!1}};"use strict";function N(f,k){const g=k.elementId,l=f.Ca(g,k);f.h.set(g,l);k.isVisible||(l.style.display="none");k=f.ia(l);k.addEventListener("focus",()=>{O(f,"elem-focused",g)});k.addEventListener("blur",()=>{O(f,"elem-blurred",g)});f.V&&document.body.appendChild(l)}
function P(f,k){G(f,"get-element",g=>{const l=f.h.get(g.elementId);return k(l,g)})}function O(f,k,g){var l;l||(l={});l.elementId=g;v(f,k,l)}
window.Za=class extends self.R{constructor(f,k){super(f,k);this.h=new Map;this.V=!0;M(this,[["create",g=>N(this,g)],["destroy",g=>{{g=g.elementId;const l=this.h.get(g);this.V&&l.parentElement.removeChild(l);this.h.delete(g)}}],["set-visible",g=>{this.V&&(this.h.get(g.elementId).style.display=g.isVisible?"":"none")}],["update-position",g=>{if(this.V){var l=this.h.get(g.elementId);l.style.left=g.left+"px";l.style.top=g.top+"px";l.style.width=g.width+"px";l.style.height=g.height+"px";g=g.fontSize;null!==
g&&(l.style.fontSize=g+"em")}}],["update-state",g=>{{const l=this.h.get(g.elementId);this.ga(l,g)}}],["focus",g=>{{const l=this.ia(this.h.get(g.elementId));g.focus?l.focus():l.blur()}}],["set-css-style",g=>{this.h.get(g.elementId).style[g.prop]=g.val}],["set-attribute",g=>{this.h.get(g.elementId).setAttribute(g.name,g.val)}],["remove-attribute",g=>{this.h.get(g.elementId).removeAttribute(g.name)}]]);P(this,g=>g)}Ca(){throw Error("required override");}ga(){throw Error("required override");}ia(f){return f}};
"use strict";
{const f=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);let k=0;function g(h){const a=document.createElement("script");a.async=!1;a.type="module";return h.ic?new Promise(d=>{const e="c3_resolve_"+k;++k;self[e]=d;a.textContent=h.lc+`\n\nself["${e}"]();`;document.head.appendChild(a)}):new Promise((d,e)=>{a.onload=d;a.onerror=e;a.src=h;document.head.appendChild(a)})}let l=!1,p=!1;function z(){if(!l){try{new Worker("blob://",{get type(){p=!0}})}catch(h){}l=!0}return p}const K=
/safari\//i.test(navigator.userAgent)&&!/chrome\/|chromium\/|edg\//i.test(navigator.userAgent);let w=new Audio;const A={"audio/webm; codecs=opus":!!w.canPlayType("audio/webm; codecs=opus")&&!K,"audio/ogg; codecs=opus":!!w.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!w.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!w.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!w.canPlayType("audio/mp4"),"audio/mpeg":!!w.canPlayType("audio/mpeg")};w=null;async function L(h){h=
await H(h);return(new TextDecoder("utf-8")).decode(h)}function H(h){return new Promise((a,d)=>{const e=new FileReader;e.onload=m=>a(m.target.result);e.onerror=m=>d(m);e.readAsArrayBuffer(h)})}const x=[];let B=0;window.RealFile=window.File;const C=[],t=new Map,E=new Map;let F=0;const I=[];self.runOnStartup=function(h){if("function"!==typeof h)throw Error("runOnStartup called without a function");I.push(h)};const b=new Set(["cordova","playable-ad","instant-games"]);let c=!1;window.D=class h{constructor(a){this.i=
a.nc;this.L=null;this.c="";this.aa=a.kc;this.O={};this.ta=this.Wa=null;this.W=[];this.K=this.g=this.wa=null;this.u=-1;this.bc=()=>this.Kb();this.Va=[];this.a=a.Xa;this.X="file"===location.protocol.substr(0,4);!this.i||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&z()||(this.i=!1);if("playable-ad"===this.a||"instant-games"===this.a)this.i=!1;if("cordova"===this.a&&this.i)if(/android/i.test(navigator.userAgent)){const d=/Chrome\/(\d+)/i.exec(navigator.userAgent);d&&90<=parseInt(d[1],
10)||(this.i=!1)}else this.i=!1;this.Z=this.j=null;"html5"!==this.a&&"playable-ad"!==this.a||!this.X||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");this.b("runtime","cordova-fetch-local-file",d=>this.xb(d));this.b("runtime","create-job-worker",()=>this.yb());"cordova"===this.a?document.addEventListener("deviceready",()=>this.Ga(a)):this.Ga(a)}bb(){return f&&"cordova"===this.a}ea(){const a=
navigator.userAgent;return f&&b.has(this.a)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}async Ga(a){"macos-wkwebview"===this.a&&this.Vb();if("playable-ad"===this.a){this.j=self.c3_base64files;this.Z={};await this.lb();for(let e=0,m=a.B.length;e<m;++e){var d=a.B[e].toLowerCase();this.Z.hasOwnProperty(d)?a.B[e]={ic:!0,lc:this.Z[d]}:this.j.hasOwnProperty(d)&&(a.B[e]=URL.createObjectURL(this.j[d]))}}a.dc?this.c=a.dc:(d=location.origin,this.c=("null"===d?"file:///":d)+location.pathname,
d=this.c.lastIndexOf("/"),-1!==d&&(this.c=this.c.substr(0,d+1)));a.pc&&(this.O=a.pc);d=new MessageChannel;this.L=d.port1;this.L.onmessage=e=>this._OnMessageFromRuntime(e.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(e=>this.Hb(e));this.K=new self.cb(this);await Q(this.K);"object"===typeof window.StatusBar&&window.StatusBar.hide();"object"===typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode();this.i?await this.sb(a,d.port2):await this.rb(a,d.port2)}ja(a){a=
this.O.hasOwnProperty(a)?this.O[a]:a.endsWith("/workermain.js")&&this.O.hasOwnProperty("workermain.js")?this.O["workermain.js"]:"playable-ad"===this.a&&this.j.hasOwnProperty(a.toLowerCase())?this.j[a.toLowerCase()]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async da(a,d,e){if(a.startsWith("blob:"))return new Worker(a,e);if("cordova"===this.a&&this.X)return a=await this.ca(e.hc?a:this.aa+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),e);a=new URL(a,d);
if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),e)}return new Worker(a,e)}m(){return Math.max(window.innerWidth,1)}l(){return Math.max(window.innerHeight,1)}Ea(a){var d=this.K;return{baseUrl:this.c,windowInnerWidth:this.m(),windowInnerHeight:this.l(),devicePixelRatio:window.devicePixelRatio,isFullscreen:h.C(),projectData:a.uc,previewImageBlobs:window.cr_previewImageBlobs||this.j,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,
previewProjectFileSWUrls:window.cr_previewProjectFiles,swClientId:window.sc||"",exportType:a.Xa,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.tc,jobScheduler:{inputPort:d.ra,outputPort:d.va,maxNumWorkers:d.$b},supportedAudioFormats:A,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.aa+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.aa+"opus.wasm.wasm",isFileProtocol:this.X,isiOSCordova:this.bb(),isiOSWebView:this.ea(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async sb(a,
d){var e=this.ja(a.oc);this.Wa=await this.da(e,this.c,{type:"module",name:"Runtime",hc:!0});this.g=document.createElement("canvas");this.g.style.display="none";e=this.g.transferControlToOffscreen();document.body.appendChild(this.g);window.c3canvas=this.g;let m=a.za||[],r=a.B;m=await Promise.all(m.map(n=>this.s(n)));r=await Promise.all(r.map(n=>this.s(n)));if("cordova"===this.a)for(let n=0,q=a.ba.length;n<q;++n){const u=a.ba[n],J=u[0];if(J===a.ya||"scriptsInEvents.js"===J||J.endsWith("/scriptsInEvents.js"))u[1]=
await this.s(J)}this.Wa.postMessage(Object.assign(this.Ea(a),{type:"init-runtime",isInWorker:!0,messagePort:d,canvas:e,workerDependencyScripts:m,engineScripts:r,projectScripts:a.ba,mainProjectScript:a.ya,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[d,e,...S(this.K)]);this.W=C.map(n=>new n(this));this.Da();self.c3_callFunction=(n,q)=>this.wa.tb(n,q);"preview"===this.a&&(self.goToLastErrorScript=()=>this.fa("runtime","go-to-last-error-script"))}async rb(a,d){this.g=document.createElement("canvas");
this.g.style.display="none";document.body.appendChild(this.g);window.c3canvas=this.g;this.W=C.map(n=>new n(this));this.Da();var e=a.B.map(n=>"string"===typeof n?(new URL(n,this.c)).toString():n);Array.isArray(a.za)&&e.unshift(...a.za);e=await Promise.all(e.map(n=>this.s(n)));await Promise.all(e.map(n=>g(n)));e=self.C3_ProjectScriptsStatus;const m=a.ya,r=a.ba;for(let [n,q]of r)if(q||(q=n),n===m)try{q=await this.s(q),await g(q),"preview"!==this.a||e[n]||this.Ma(n,"main script did not run to completion")}catch(u){this.Ma(n,
u)}else if("scriptsInEvents.js"===n||n.endsWith("/scriptsInEvents.js"))q=await this.s(q),await g(q);"preview"===this.a&&"object"!==typeof self.qc.rc?(this.U(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Ea(a),{isInWorker:!1,messagePort:d,canvas:this.g,runOnStartupFunctions:I}),this.Ia(),this.ta=
self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.ta,a))}Ma(a,d){this.U();console.error(`[Preview] Failed to load project main script (${a}): `,d);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Ia(){this.U()}U(){const a=window.ec;a&&(a.parentElement.removeChild(a),window.ec=null)}async yb(){const a=await T(this.K);return{outputPort:a,transferables:[a]}}qb(){if(this.i)throw Error("not available in worker mode");
return this.ta}fa(a,d,e,m,r){this.L.postMessage({type:"event",component:a,handler:d,dispatchOpts:m||null,data:e,responseId:null},r)}eb(a,d){const e=F++,m=new Promise((r,n)=>{E.set(e,{resolve:r,reject:n})});this.L.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:d,responseId:e},void 0);return m}["_OnMessageFromRuntime"](a){const d=a.type;if("event"===d)return this.Db(a);if("result"===d)this.Nb(a);else if("runtime-ready"===d)this.Ob();else if("alert-error"===
d)this.U(),alert(a.message);else if("creating-runtime"===d)this.Ia();else throw Error(`unknown message '${d}'`);}Db(a){const d=a.component,e=a.handler,m=a.data,r=a.responseId;if(a=t.get(d))if(a=a.get(e)){var n=null;try{n=a(m)}catch(q){console.error(`Exception in '${d}' handler '${e}':`,q);null!==r&&this.T(r,!1,""+q);return}if(null===r)return n;n&&n.then?n.then(q=>this.T(r,!0,q)).catch(q=>{console.error(`Rejection from '${d}' handler '${e}':`,q);this.T(r,!1,""+q)}):this.T(r,!0,n)}else console.warn(`[DOM] No handler '${e}' for component '${d}'`);
else console.warn(`[DOM] No event handlers for component '${d}'`)}T(a,d,e){let m;e&&e.transferables&&(m=e.transferables);this.L.postMessage({type:"result",responseId:a,isOk:d,result:e},m)}Nb(a){const d=a.responseId,e=a.isOk;a=a.result;const m=E.get(d);e?m.resolve(a):m.reject(a);E.delete(d)}b(a,d,e){let m=t.get(a);m||(m=new Map,t.set(a,m));if(m.has(d))throw Error(`[DOM] Component '${a}' already has handler '${d}'`);m.set(d,e)}static P(a){if(C.includes(a))throw Error("DOM handler already added");C.push(a)}Da(){for(const a of this.W)if("runtime"===
a.I){this.wa=a;return}throw Error("cannot find runtime DOM handler");}Hb(a){this.fa("debugger","message",a)}Ob(){for(const a of this.W)a.Aa()}static C(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||c)}static Oa(a){c=!!a}Na(){-1===this.u&&this.Va.length&&(this.u=requestAnimationFrame(this.bc))}jb(){-1!==this.u&&(cancelAnimationFrame(this.u),this.u=-1)}Kb(){this.u=-1;for(const a of this.Va)a();this.Na()}pa(){this.wa.pa()}$a(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||
"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}ab(a){return!this.$a(a)}async s(a){return"cordova"===this.a&&(a.startsWith("file:")||this.X&&this.ab(a))?(a.startsWith(this.c)&&(a=a.substr(this.c.length)),a=await this.ca(a),URL.createObjectURL(new Blob([a],{type:"application/javascript"}))):a}async xb(a){const d=a.filename;switch(a.as){case "text":return await this.Ya(d);case "buffer":return await this.ca(d);default:throw Error("unsupported type");}}Ba(a){const d=window.cordova.file.applicationDirectory+
"www/"+a.toLowerCase();return new Promise((e,m)=>{window.resolveLocalFileSystemURL(d,r=>{r.file(e,m)},m)})}async Ya(a){a=await this.Ba(a);return await L(a)}ha(){if(x.length&&!(8<=B)){B++;var a=x.shift();this.mb(a.filename,a.mc,a.fc)}}ca(a){return new Promise((d,e)=>{x.push({filename:a,mc:m=>{B--;this.ha();d(m)},fc:m=>{B--;this.ha();e(m)}});this.ha()})}async mb(a,d,e){try{const m=await this.Ba(a),r=await H(m);d(r)}catch(m){e(m)}}Vb(){var a={type:"ready"};if("windows-webview2"===this.a)window.chrome.webview.postMessage(JSON.stringify(a));
else if("macos-wkwebview"===this.a)window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));else throw Error("cannot send wrapper message");}async lb(){const a=[];for(const [d,e]of Object.entries(this.j))a.push(this.kb(d,e));await Promise.all(a)}async kb(a,d){if("object"===typeof d)this.j[a]=new Blob([d.str],{type:d.type}),this.Z[a]=d.str;else{let e=await this.pb(d);e||(e=this.nb(d));this.j[a]=e}}async pb(a){try{return await (await fetch(a)).blob()}catch(d){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
d),null}}nb(a){a=this.Tb(a);return this.ib(a.data,a.jc)}Tb(a){var d=a.indexOf(",");if(0>d)throw new URIError("expected comma in data: uri");var e=a.substring(d+1);d=a.substring(5,d).split(";");a=d[0]||"";const m=d[2];e="base64"===d[1]||"base64"===m?atob(e):decodeURIComponent(e);return{jc:a,data:e}}ib(a,d){var e=a.length;let m=e>>2,r=new Uint8Array(e),n=new Uint32Array(r.buffer,0,m),q,u;for(u=q=0;q<m;++q)n[q]=a.charCodeAt(u++)|a.charCodeAt(u++)<<8|a.charCodeAt(u++)<<16|a.charCodeAt(u++)<<24;for(e&=
3;e--;)r[u]=a.charCodeAt(u),++u;return new Blob([r],{type:d})}}}"use strict";
{const f=self.D;function k(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const g=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),l={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},p={dispatchUserScriptEvent:!0},z={dispatchRuntimeEvent:!0};function K(b){return new Promise((c,h)=>{const a=document.createElement("link");a.onload=()=>c(a);a.onerror=d=>h(d);a.rel=
"stylesheet";a.href=b;document.head.appendChild(a)})}function w(b){return new Promise((c,h)=>{const a=new Image;a.onload=()=>c(a);a.onerror=d=>h(d);a.src=b})}async function A(b){b=URL.createObjectURL(b);try{return await w(b)}finally{URL.revokeObjectURL(b)}}function L(b){return new Promise((c,h)=>{let a=new FileReader;a.onload=d=>c(d.target.result);a.onerror=d=>h(d);a.readAsText(b)})}async function H(b,c,h){if(!/firefox/i.test(navigator.userAgent))return await A(b);var a=await L(b);a=(new DOMParser).parseFromString(a,
"image/svg+xml");const d=a.documentElement;if(d.hasAttribute("width")&&d.hasAttribute("height")){const e=d.getAttribute("width"),m=d.getAttribute("height");if(!e.includes("%")&&!m.includes("%"))return await A(b)}d.setAttribute("width",c+"px");d.setAttribute("height",h+"px");a=(new XMLSerializer).serializeToString(a);b=new Blob([a],{type:"image/svg+xml"});return await A(b)}function x(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const B=new Set(["input",
"textarea","datalist","select"]),C=new Set(["canvas","body","html"]);function t(b){C.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function E(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}self.C3_GetSvgImageSize=async function(b){b=await A(b);if(0<b.width&&0<b.height)return[b.width,b.height];{b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const c=b.getBoundingClientRect();document.body.removeChild(b);return[c.width,
c.height]}};self.C3_RasterSvgImageBlob=async function(b,c,h,a,d){b=await H(b,c,h);const e=document.createElement("canvas");e.width=a;e.height=d;e.getContext("2d").drawImage(b,0,0,c,h);return e};let F=!1;document.addEventListener("pause",()=>F=!0);document.addEventListener("resume",()=>F=!1);function I(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}f.P(class extends self.R{constructor(b){super(b,"runtime");this.Ta=!0;this.v=-1;this.xa="any";this.Pa=this.Qa=!1;this.sa=
this.N=this.o=null;b.b("canvas","update-size",a=>this.Qb(a));b.b("runtime","invoke-download",a=>this.Gb(a));b.b("runtime","raster-svg-image",a=>this.Lb(a));b.b("runtime","get-svg-image-size",a=>this.Eb(a));b.b("runtime","set-target-orientation",a=>this.Pb(a));b.b("runtime","register-sw",()=>this.Mb());b.b("runtime","post-to-debugger",a=>this.Ka(a));b.b("runtime","go-to-script",a=>this.Ka(a));b.b("runtime","before-start-ticking",()=>this.wb());b.b("runtime","debug-highlight",a=>this.zb(a));b.b("runtime",
"enable-device-orientation",()=>this.hb());b.b("runtime","enable-device-motion",()=>this.gb());b.b("runtime","add-stylesheet",a=>this.ub(a));b.b("runtime","alert",a=>this.vb(a));b.b("runtime","hide-cordova-splash",()=>this.Fb());const c=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",a=>{const d=a.target;c.has(d.tagName.toLowerCase())||x(d)||a.preventDefault()});const h=b.g;window.addEventListener("selectstart",t);window.addEventListener("gesturehold",t);h.addEventListener("selectstart",
t);h.addEventListener("gesturehold",t);window.addEventListener("touchstart",t,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",t,{passive:!1}),h.addEventListener("pointerdown",t)):h.addEventListener("touchstart",t);this.M=0;window.addEventListener("mousedown",a=>{1===a.button&&a.preventDefault()});window.addEventListener("mousewheel",E,{passive:!1});window.addEventListener("wheel",E,{passive:!1});window.addEventListener("resize",()=>this.Rb());window.addEventListener("fullscreenchange",
()=>this.F());window.addEventListener("webkitfullscreenchange",()=>this.F());window.addEventListener("mozfullscreenchange",()=>this.F());window.addEventListener("fullscreenerror",a=>this.la(a));window.addEventListener("webkitfullscreenerror",a=>this.la(a));window.addEventListener("mozfullscreenerror",a=>this.la(a));b.ea()&&window.addEventListener("focusout",()=>{{const e=document.activeElement;if(e){var a=e.tagName.toLowerCase();var d=new Set("email number password search tel text url".split(" "));
a="textarea"===a?!0:"input"===a?d.has(e.type.toLowerCase()||"text"):x(e)}else a=!1}a||(document.scrollingElement.scrollTop=0)});self.C3WrapperOnMessage=a=>this.Sb(a);this.ua=new Set;this.ac=new WeakSet;this.Zb=!1}wb(){"cordova"===this.f.a?(document.addEventListener("pause",()=>this.oa(!0)),document.addEventListener("resume",()=>this.oa(!1))):document.addEventListener("visibilitychange",()=>this.oa(document.hidden));return{isSuspended:!(!document.hidden&&!F)}}Aa(){window.addEventListener("focus",()=>
this.H("window-focus"));window.addEventListener("blur",()=>{this.H("window-blur",{parentHasFocus:I()});this.M=0});window.addEventListener("focusin",c=>{c=c.target;(B.has(c.tagName.toLowerCase())||x(c))&&this.H("keyboard-blur")});window.addEventListener("keydown",c=>this.Ja("keydown",c));window.addEventListener("keyup",c=>this.Ja("keyup",c));window.addEventListener("dblclick",c=>this.ma("dblclick",c,l));window.addEventListener("wheel",c=>this.Ib(c));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",
c=>{this.ka(c);this.G("pointerdown",c)}),this.f.i&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.N=new self.fb(()=>this.ob(),5),this.N.Sa=!0,window.addEventListener("pointerrawupdate",c=>this.Jb(c))):window.addEventListener("pointermove",c=>this.G("pointermove",c)),window.addEventListener("pointerup",c=>this.G("pointerup",c)),window.addEventListener("pointercancel",c=>this.G("pointercancel",c))):(window.addEventListener("mousedown",c=>{this.ka(c);this.na("pointerdown",c)}),
window.addEventListener("mousemove",c=>this.na("pointermove",c)),window.addEventListener("mouseup",c=>this.na("pointerup",c)),window.addEventListener("touchstart",c=>{this.ka(c);this.S("pointerdown",c)}),window.addEventListener("touchmove",c=>this.S("pointermove",c)),window.addEventListener("touchend",c=>this.S("pointerup",c)),window.addEventListener("touchcancel",c=>this.S("pointercancel",c)));const b=()=>this.pa();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);
window.addEventListener("click",b,!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0)}H(b,c){v(this,b,c||null,z)}m(){return this.f.m()}l(){return this.f.l()}Rb(){const b=this.m(),c=this.l();this.H("window-resize",{innerWidth:b,innerHeight:c,devicePixelRatio:window.devicePixelRatio,isFullscreen:f.C()});this.f.ea()&&(-1!==this.v&&clearTimeout(this.v),this.La(b,c,0))}Ub(b,c,h){-1!==this.v&&clearTimeout(this.v);this.v=setTimeout(()=>this.La(b,c,h),48)}La(b,c,h){const a=
this.m(),d=this.l();this.v=-1;a!=b||d!=c?this.H("window-resize",{innerWidth:a,innerHeight:d,devicePixelRatio:window.devicePixelRatio,isFullscreen:f.C()}):10>h&&this.Ub(a,d,h+1)}Pb(b){this.xa=b.targetOrientation}Wb(){const b=this.xa;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(c=>console.warn("[Construct 3] Failed to lock orientation: ",c));else try{let c=!1;screen.lockOrientation?c=screen.lockOrientation(b):screen.webkitLockOrientation?c=screen.webkitLockOrientation(b):
screen.mozLockOrientation?c=screen.mozLockOrientation(b):screen.msLockOrientation&&(c=screen.msLockOrientation(b));c||console.warn("[Construct 3] Failed to lock orientation")}catch(c){console.warn("[Construct 3] Failed to lock orientation: ",c)}}F(){const b=f.C();b&&"any"!==this.xa&&this.Wb();v(this,"fullscreenchange",{isFullscreen:b,innerWidth:this.m(),innerHeight:this.l()})}la(b){console.warn("[Construct 3] Fullscreen request failed: ",b);v(this,"fullscreenerror",{isFullscreen:f.C(),innerWidth:this.m(),
innerHeight:this.l()})}oa(b){b?this.f.jb():this.f.Na();v(this,"visibilitychange",{hidden:b})}Ja(b,c){"Backspace"===c.key&&t(c);const h=g.get(c.code)||c.code;y(this,b,{code:h,key:c.key,which:c.which,repeat:c.repeat,altKey:c.altKey,ctrlKey:c.ctrlKey,metaKey:c.metaKey,shiftKey:c.shiftKey,timeStamp:c.timeStamp},l)}Ib(b){v(this,"wheel",{clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,deltaX:b.deltaX,deltaY:b.deltaY,deltaZ:b.deltaZ,deltaMode:b.deltaMode,timeStamp:b.timeStamp},l)}ma(b,c,
h){k(c)||y(this,b,{button:c.button,buttons:c.buttons,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,timeStamp:c.timeStamp},h)}na(b,c){if(!k(c)){var h=this.M;"pointerdown"===b&&0!==h?b="pointermove":"pointerup"===b&&0!==c.buttons&&(b="pointermove");y(this,b,{pointerId:1,pointerType:"mouse",button:c.button,buttons:c.buttons,lastButtons:h,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:c.timeStamp},
l);this.M=c.buttons;this.ma(c.type,c,p)}}G(b,c){if(this.N&&"pointermove"!==b){var h=this.N;h.J||(-1!==h.A&&(self.clearTimeout(h.A),h.A=-1),h.Y=Date.now())}h=0;"mouse"===c.pointerType&&(h=this.M);y(this,b,{pointerId:c.pointerId,pointerType:c.pointerType,button:c.button,buttons:c.buttons,lastButtons:h,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,width:c.width||0,height:c.height||0,pressure:c.pressure||0,tangentialPressure:c.tangentialPressure||0,tiltX:c.tiltX||0,tiltY:c.tiltY||0,
twist:c.twist||0,timeStamp:c.timeStamp},l);"mouse"===c.pointerType&&(h="mousemove","pointerdown"===b?h="mousedown":"pointerup"===b&&(h="mouseup"),this.ma(h,c,p),this.M=c.buttons)}Jb(b){this.sa=b;b=this.N;if(-1===b.A){var c=Date.now(),h=c-b.Y,a=b.Yb;h>=a&&b.Sa?(b.Y=c,b.J=!0,b.Ra(),b.J=!1):b.A=self.setTimeout(b.cc,Math.max(a-h,4))}}ob(){this.G("pointermove",this.sa);this.sa=null}S(b,c){for(let h=0,a=c.changedTouches.length;h<a;++h){const d=c.changedTouches[h];y(this,b,{pointerId:d.identifier,pointerType:"touch",
button:0,buttons:0,lastButtons:0,clientX:d.clientX,clientY:d.clientY,pageX:d.pageX,pageY:d.pageY,width:2*(d.radiusX||d.webkitRadiusX||0),height:2*(d.radiusY||d.webkitRadiusY||0),pressure:d.force||d.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:d.rotationAngle||0,timeStamp:c.timeStamp},l)}}ka(b){window!==window.top&&window.focus();this.Ha(b.target)&&document.activeElement&&!this.Ha(document.activeElement)&&document.activeElement.blur()}Ha(b){return!b||b===document||b===window||b===document.body||
"canvas"===b.tagName.toLowerCase()}hb(){this.Qa||(this.Qa=!0,window.addEventListener("deviceorientation",b=>this.Bb(b)),window.addEventListener("deviceorientationabsolute",b=>this.Cb(b)))}gb(){this.Pa||(this.Pa=!0,window.addEventListener("devicemotion",b=>this.Ab(b)))}Bb(b){v(this,"deviceorientation",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp,webkitCompassHeading:b.webkitCompassHeading,webkitCompassAccuracy:b.webkitCompassAccuracy},l)}Cb(b){v(this,
"deviceorientationabsolute",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},l)}Ab(b){let c=null;var h=b.acceleration;h&&(c={x:h.x||0,y:h.y||0,z:h.z||0});h=null;var a=b.accelerationIncludingGravity;a&&(h={x:a.x||0,y:a.y||0,z:a.z||0});a=null;const d=b.rotationRate;d&&(a={alpha:d.alpha||0,beta:d.beta||0,gamma:d.gamma||0});v(this,"devicemotion",{acceleration:c,accelerationIncludingGravity:h,rotationRate:a,interval:b.interval,timeStamp:b.timeStamp},l)}Qb(b){const c=
this.f.g;c.style.width=b.styleWidth+"px";c.style.height=b.styleHeight+"px";c.style.marginLeft=b.marginLeft+"px";c.style.marginTop=b.marginTop+"px";this.Ta&&(c.style.display="",this.Ta=!1)}Gb(b){const c=b.url;b=b.filename;const h=document.createElement("a"),a=document.body;h.textContent=b;h.href=c;h.download=b;a.appendChild(h);h.click();a.removeChild(h)}async Lb(b){var c=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);c=c?await createImageBitmap(b,
c):await createImageBitmap(b);return{imageBitmap:c,transferables:[c]}}async Eb(b){return await self.C3_GetSvgImageSize(b.blob)}async ub(b){await K(b.url)}pa(){var b=[...this.ua];this.ua.clear();if(!this.Zb)for(const c of b)(b=c.play())&&b.catch(()=>{this.ac.has(c)||this.ua.add(c)})}Fb(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}zb(b){if(b.show){this.o||(this.o=document.createElement("div"),this.o.id="inspectOutline",document.body.appendChild(this.o));var c=
this.o;c.style.display="";c.style.left=b.left-1+"px";c.style.top=b.top-1+"px";c.style.width=b.width+2+"px";c.style.height=b.height+2+"px";c.textContent=b.name}else this.o&&(this.o.style.display="none")}Mb(){window.C3_RegisterSW&&window.C3_RegisterSW()}Ka(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}tb(b,c){return this.f.eb(this.I,{name:b,params:c})}vb(b){alert(b.message)}Sb(b){"entered-fullscreen"===b?(f.Oa(!0),this.F()):"exited-fullscreen"===b?(f.Oa(!1),this.F()):
console.warn("Unknown wrapper message: ",b)}})}"use strict";async function Q(f){if(f.Xb)throw Error("already initialised");f.Xb=!0;var k=f.$.ja("dispatchworker.js");f.qa=await f.$.da(k,f.c,{name:"DispatchWorker"});k=new MessageChannel;f.ra=k.port1;f.qa.postMessage({type:"_init","in-port":k.port2},[k.port2]);f.va=await T(f)}function S(f){return[f.ra,f.va]}
async function T(f){const k=f.Ua.length;var g=f.$.ja("jobworker.js");g=await f.$.da(g,f.c,{name:"JobWorker"+k});const l=new MessageChannel,p=new MessageChannel;f.qa.postMessage({type:"_addJobWorker",port:l.port1},[l.port1]);g.postMessage({type:"init",number:k,"dispatch-port":l.port2,"output-port":p.port2},[l.port2,p.port2]);f.Ua.push(g);return p.port1}
self.cb=class{constructor(f){this.$=f;this.c=f.c;this.c="preview"===f.a?this.c+"workers/":this.c+f.aa;this.$b=Math.min(navigator.hardwareConcurrency||2,16);this.qa=null;this.Ua=[];this.va=this.ra=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.D({nc:!0,oc:"workermain.js",B:["scripts/c3runtime.js"],ba:[],ya:"",kc:"scripts/",za:[],Xa:"html5"}));"use strict";
{function f(k){k.stopPropagation()}self.D.P(class extends self.Za{constructor(k){super(k,"button")}Ca(k,g){const l=document.createElement("input");var p=l;g.isCheckbox?(l.type="checkbox",p=document.createElement("label"),p.appendChild(l),p.appendChild(document.createTextNode("")),p.style.fontFamily="sans-serif",p.style.userSelect="none",p.style.webkitUserSelect="none",p.style.display="inline-block",p.style.color="black"):l.type="button";p.style.position="absolute";p.addEventListener("touchstart",
f);p.addEventListener("touchmove",f);p.addEventListener("touchend",f);p.addEventListener("mousedown",f);p.addEventListener("mouseup",f);p.addEventListener("keydown",f);p.addEventListener("keyup",f);l.addEventListener("click",()=>{var z={isChecked:l.checked};z.elementId=k;y(this,"click",z)});g.id&&(l.id=g.id);this.ga(p,g);return p}Fa(k){return"input"===k.tagName.toLowerCase()?k:k.firstChild}ia(k){return this.Fa(k)}ga(k,g){const l=this.Fa(k);l.checked=g.isChecked;l.disabled=!g.isEnabled;k.title=g.title;
k===l?l.value=g.text:k.lastChild.textContent=g.text}})}"use strict";self.D.P(class extends self.R{constructor(f){super(f,"mouse");G(this,"cursor",k=>{document.documentElement.style.cursor=k})}});"use strict";async function U(f,k){k=k.type;let g=!0;0===k?g=await V():1===k&&(g=await W());v(f,"permission-result",{type:k,result:g})}
async function V(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(f){return console.warn("[Touch] Failed to request orientation permission: ",f),!1}}
async function W(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(f){return console.warn("[Touch] Failed to request motion permission: ",f),!1}}self.D.P(class extends self.R{constructor(f){super(f,"touch");G(this,"request-permission",k=>U(this,k))}});
