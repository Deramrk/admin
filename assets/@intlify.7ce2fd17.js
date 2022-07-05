/*!
  * @intlify/shared v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const le=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Ye=e=>le?Symbol(e):e,ce=(e,t,n)=>oe({l:e,k:t,s:n}),oe=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),O=e=>typeof e=="number"&&isFinite(e),ie=e=>j(e)==="[object Date]",G=e=>j(e)==="[object RegExp]",v=e=>d(e)&&Object.keys(e).length===0;function ue(e,t){typeof console!="undefined"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const N=Object.assign;let K;const fe=()=>K||(K=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function Y(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const me=Object.prototype.hasOwnProperty;function Be(e,t){return me.call(e,t)}const D=Array.isArray,k=e=>typeof e=="function",f=e=>typeof e=="string",T=e=>typeof e=="boolean",L=e=>e!==null&&typeof e=="object",te=Object.prototype.toString,j=e=>te.call(e),d=e=>j(e)==="[object Object]",ge=e=>e==null?"":D(e)||d(e)&&e.toString===te?JSON.stringify(e,null,2):String(e);/*!
  * @intlify/message-resolver v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const de=Object.prototype.hasOwnProperty;function _e(e,t){return de.call(e,t)}const R=e=>e!==null&&typeof e=="object",M=[];M[0]={w:[0],i:[3,0],["["]:[4],o:[7]};M[1]={w:[1],["."]:[2],["["]:[4],o:[7]};M[2]={w:[2],i:[3,0],[0]:[3,0]};M[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};M[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};M[5]={["'"]:[4,0],o:8,l:[5,0]};M[6]={['"']:[4,0],o:8,l:[6,0]};const be=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function pe(e){return be.test(e)}function ye(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t===n&&(t===34||t===39)?e.slice(1,-1):e}function he(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function we(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:pe(t)?ye(t):"*"+t}function Fe(e){const t=[];let n=-1,a=0,s=0,r,c,l,i,u,m,b;const g=[];g[0]=()=>{c===void 0?c=l:c+=l},g[1]=()=>{c!==void 0&&(t.push(c),c=void 0)},g[2]=()=>{g[0](),s++},g[3]=()=>{if(s>0)s--,a=4,g[0]();else{if(s=0,c===void 0||(c=we(c),c===!1))return!1;g[1]()}};function y(){const h=e[n+1];if(a===5&&h==="'"||a===6&&h==='"')return n++,l="\\"+h,g[0](),!0}for(;a!==null;)if(n++,r=e[n],!(r==="\\"&&y())){if(i=he(r),b=M[a],u=b[i]||b.l||8,u===8||(a=u[0],u[1]!==void 0&&(m=g[u[1]],m&&(l=r,m()===!1))))return;if(a===7)return t}}const B=new Map;function ne(e,t){if(!R(e))return null;let n=B.get(t);if(n||(n=Fe(t),n&&B.set(t,n)),!n)return null;const a=n.length;let s=e,r=0;for(;r<a;){const c=s[n[r]];if(c===void 0)return null;s=c,r++}return s}function q(e){if(!R(e))return e;for(const t in e)if(!!_e(e,t))if(!t.includes("."))R(e[t])&&q(e[t]);else{const n=t.split("."),a=n.length-1;let s=e;for(let r=0;r<a;r++)n[r]in s||(s[n[r]]={}),s=s[n[r]];s[n[a]]=e[t],delete e[t],R(s[n[a]])&&q(s[n[a]])}return e}/*!
  * @intlify/runtime v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Oe=e=>e,Te=e=>"",Se="text",ke=e=>e.length===0?"":e.join(""),Ce=ge;function Q(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function We(e){const t=O(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(O(e.named.count)||O(e.named.n))?O(e.named.count)?e.named.count:O(e.named.n)?e.named.n:t:t}function De(e,t){t.count||(t.count=e),t.n||(t.n=e)}function Me(e={}){const t=e.locale,n=We(e),a=L(e.pluralRules)&&f(t)&&k(e.pluralRules[t])?e.pluralRules[t]:Q,s=L(e.pluralRules)&&f(t)&&k(e.pluralRules[t])?Q:void 0,r=o=>o[a(n,o.length,s)],c=e.list||[],l=o=>c[o],i=e.named||{};O(e.pluralIndex)&&De(n,i);const u=o=>i[o];function m(o){const _=k(e.messages)?e.messages(o):L(e.messages)?e.messages[o]:!1;return _||(e.parent?e.parent.message(o):Te)}const b=o=>e.modifiers?e.modifiers[o]:Oe,g=d(e.processor)&&k(e.processor.normalize)?e.processor.normalize:ke,y=d(e.processor)&&k(e.processor.interpolate)?e.processor.interpolate:Ce,h=d(e.processor)&&f(e.processor.type)?e.processor.type:Se,w={list:l,named:u,plural:r,linked:(o,_)=>{const C=m(o)(w);return f(_)?b(_)(C):C},message:m,type:h,interpolate:y,normalize:g};return w}/*!
  * @intlify/message-compiler v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */function Le(e,t,n={}){const{domain:a,messages:s,args:r}=n,c=e,l=new SyntaxError(String(c));return l.code=e,t&&(l.location=t),l.domain=a,l}/*!
  * @intlify/devtools-if v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const ae={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};/*!
  * @intlify/core-base v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */let I=null;function qe(e){I=e}function Ee(e,t,n){I&&I.emit(ae.I18nInit,{timestamp:Date.now(),i18n:e,version:t,meta:n})}const Ie=Ne(ae.FunctionTranslate);function Ne(e){return t=>I&&I.emit(e,t)}const Ae="9.1.10",U=-1,Qe="";function Pe(){return{upper:e=>f(e)?e.toUpperCase():e,lower:e=>f(e)?e.toLowerCase():e,capitalize:e=>f(e)?`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`:e}}let Re,se=null;const Ze=e=>{se=e},xe=()=>se;let Z=0;function Xe(e={}){const t=f(e.version)?e.version:Ae,n=f(e.locale)?e.locale:"en-US",a=D(e.fallbackLocale)||d(e.fallbackLocale)||f(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:n,s=d(e.messages)?e.messages:{[n]:{}},r=d(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},c=d(e.numberFormats)?e.numberFormats:{[n]:{}},l=N({},e.modifiers||{},Pe()),i=e.pluralRules||{},u=k(e.missing)?e.missing:null,m=T(e.missingWarn)||G(e.missingWarn)?e.missingWarn:!0,b=T(e.fallbackWarn)||G(e.fallbackWarn)?e.fallbackWarn:!0,g=!!e.fallbackFormat,y=!!e.unresolving,h=k(e.postTranslation)?e.postTranslation:null,w=d(e.processor)?e.processor:null,o=T(e.warnHtmlMessage)?e.warnHtmlMessage:!0,_=!!e.escapeParameter,C=k(e.messageCompiler)?e.messageCompiler:Re,F=k(e.onWarn)?e.onWarn:ue,p=e,S=L(p.__datetimeFormatters)?p.__datetimeFormatters:new Map,$=L(p.__numberFormatters)?p.__numberFormatters:new Map,A=L(p.__meta)?p.__meta:{};Z++;const P={version:t,cid:Z,locale:n,fallbackLocale:a,messages:s,datetimeFormats:r,numberFormats:c,modifiers:l,pluralRules:i,missing:u,missingWarn:m,fallbackWarn:b,fallbackFormat:g,unresolving:y,postTranslation:h,processor:w,warnHtmlMessage:o,escapeParameter:_,messageCompiler:C,onWarn:F,__datetimeFormatters:S,__numberFormatters:$,__meta:A};return __INTLIFY_PROD_DEVTOOLS__&&Ee(P,t,A),P}function V(e,t,n,a,s){const{missing:r,onWarn:c}=e;if(r!==null){const l=r(e,n,t,s);return f(l)?l:t}else return t}function x(e,t,n){const a=e;a.__localeChainCache||(a.__localeChainCache=new Map);let s=a.__localeChainCache.get(n);if(!s){s=[];let r=[n];for(;D(r);)r=X(s,r,t);const c=D(t)?t:d(t)?t.default?t.default:null:t;r=f(c)?[c]:c,D(r)&&X(s,r,!1),a.__localeChainCache.set(n,s)}return s}function X(e,t,n){let a=!0;for(let s=0;s<t.length&&T(a);s++){const r=t[s];f(r)&&(a=$e(e,t[s],n))}return a}function $e(e,t,n){let a;const s=t.split("-");do{const r=s.join("-");a=ve(e,r,n),s.splice(-1,1)}while(s.length&&a===!0);return a}function ve(e,t,n){let a=!1;if(!e.includes(t)&&(a=!0,t)){a=t[t.length-1]!=="!";const s=t.replace(/!/g,"");e.push(s),(D(n)||d(n))&&n[s]&&(a=n[s])}return a}function et(e,t,n){const a=e;a.__localeChainCache=new Map,x(e,n,t)}function E(e){return Le(e,null,void 0)}const ee=()=>"",W=e=>k(e);function tt(e,...t){const{fallbackFormat:n,postTranslation:a,unresolving:s,fallbackLocale:r,messages:c}=e,[l,i]=He(...t),u=T(i.missingWarn)?i.missingWarn:e.missingWarn,m=T(i.fallbackWarn)?i.fallbackWarn:e.fallbackWarn,b=T(i.escapeParameter)?i.escapeParameter:e.escapeParameter,g=!!i.resolvedMessage,y=f(i.default)||T(i.default)?T(i.default)?l:i.default:n?l:"",h=n||y!=="",w=f(i.locale)?i.locale:e.locale;b&&je(i);let[o,_,C]=g?[l,w,c[w]||{}]:Ue(e,l,w,r,m,u),F=l;if(!g&&!(f(o)||W(o))&&h&&(o=y,F=o),!g&&(!(f(o)||W(o))||!f(_)))return s?U:l;let p=!1;const S=()=>{p=!0},$=W(o)?o:re(e,l,_,o,F,S);if(p)return o;const A=Je(e,_,C,i),P=Me(A),H=Ve(e,$,P),z=a?a(H):H;if(__INTLIFY_PROD_DEVTOOLS__){const J={timestamp:Date.now(),key:f(l)?l:W(o)?o.key:"",locale:_||(W(o)?o.locale:""),format:f(o)?o:W(o)?o.source:"",message:z};J.meta=N({},e.__meta,xe()||{}),Ie(J)}return z}function je(e){D(e.list)?e.list=e.list.map(t=>f(t)?Y(t):t):L(e.named)&&Object.keys(e.named).forEach(t=>{f(e.named[t])&&(e.named[t]=Y(e.named[t]))})}function Ue(e,t,n,a,s,r){const{messages:c,onWarn:l}=e,i=x(e,a,n);let u={},m,b=null;const g="translate";for(let y=0;y<i.length&&(m=i[y],u=c[m]||{},(b=ne(u,t))===null&&(b=u[t]),!(f(b)||k(b)));y++){const h=V(e,t,m,r,g);h!==t&&(b=h)}return[b,m,u]}function re(e,t,n,a,s,r){const{messageCompiler:c,warnHtmlMessage:l}=e;if(W(a)){const u=a;return u.locale=u.locale||n,u.key=u.key||t,u}const i=c(a,ze(e,n,s,a,l,r));return i.locale=n,i.key=t,i.source=a,i}function Ve(e,t,n){return t(n)}function He(...e){const[t,n,a]=e,s={};if(!f(t)&&!O(t)&&!W(t))throw E(14);const r=O(t)?String(t):(W(t),t);return O(n)?s.plural=n:f(n)?s.default=n:d(n)&&!v(n)?s.named=n:D(n)&&(s.list=n),O(a)?s.plural=a:f(a)?s.default=a:d(a)&&N(s,a),[r,s]}function ze(e,t,n,a,s,r){return{warnHtmlMessage:s,onError:c=>{throw r&&r(c),c},onCacheKey:c=>ce(t,n,c)}}function Je(e,t,n,a){const{modifiers:s,pluralRules:r}=e,l={locale:t,modifiers:s,pluralRules:r,messages:i=>{const u=ne(n,i);if(f(u)){let m=!1;const g=re(e,i,t,u,i,()=>{m=!0});return m?ee:g}else return W(u)?u:ee}};return e.processor&&(l.processor=e.processor),a.list&&(l.list=a.list),a.named&&(l.named=a.named),O(a.plural)&&(l.pluralIndex=a.plural),l}function nt(e,...t){const{datetimeFormats:n,unresolving:a,fallbackLocale:s,onWarn:r}=e,{__datetimeFormatters:c}=e,[l,i,u,m]=Ge(...t),b=T(u.missingWarn)?u.missingWarn:e.missingWarn;T(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn;const g=!!u.part,y=f(u.locale)?u.locale:e.locale,h=x(e,s,y);if(!f(l)||l==="")return new Intl.DateTimeFormat(y).format(i);let w={},o,_=null;const C="datetime format";for(let S=0;S<h.length&&(o=h[S],w=n[o]||{},_=w[l],!d(_));S++)V(e,l,o,b,C);if(!d(_)||!f(o))return a?U:l;let F=`${o}__${l}`;v(m)||(F=`${F}__${JSON.stringify(m)}`);let p=c.get(F);return p||(p=new Intl.DateTimeFormat(o,N({},_,m)),c.set(F,p)),g?p.formatToParts(i):p.format(i)}function Ge(...e){const[t,n,a,s]=e;let r={},c={},l;if(f(t)){if(!/\d{4}-\d{2}-\d{2}(T.*)?/.test(t))throw E(16);l=new Date(t);try{l.toISOString()}catch{throw E(16)}}else if(ie(t)){if(isNaN(t.getTime()))throw E(15);l=t}else if(O(t))l=t;else throw E(14);return f(n)?r.key=n:d(n)&&(r=n),f(a)?r.locale=a:d(a)&&(c=a),d(s)&&(c=s),[r.key||"",l,r,c]}function at(e,t,n){const a=e;for(const s in n){const r=`${t}__${s}`;!a.__datetimeFormatters.has(r)||a.__datetimeFormatters.delete(r)}}function st(e,...t){const{numberFormats:n,unresolving:a,fallbackLocale:s,onWarn:r}=e,{__numberFormatters:c}=e,[l,i,u,m]=Ke(...t),b=T(u.missingWarn)?u.missingWarn:e.missingWarn;T(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn;const g=!!u.part,y=f(u.locale)?u.locale:e.locale,h=x(e,s,y);if(!f(l)||l==="")return new Intl.NumberFormat(y).format(i);let w={},o,_=null;const C="number format";for(let S=0;S<h.length&&(o=h[S],w=n[o]||{},_=w[l],!d(_));S++)V(e,l,o,b,C);if(!d(_)||!f(o))return a?U:l;let F=`${o}__${l}`;v(m)||(F=`${F}__${JSON.stringify(m)}`);let p=c.get(F);return p||(p=new Intl.NumberFormat(o,N({},_,m)),c.set(F,p)),g?p.formatToParts(i):p.format(i)}function Ke(...e){const[t,n,a,s]=e;let r={},c={};if(!O(t))throw E(14);const l=t;return f(n)?r.key=n:d(n)&&(r=n),f(a)?r.locale=a:d(a)&&(c=a),d(s)&&(c=s),[r.key||"",l,r,c]}function rt(e,t,n){const a=e;for(const s in n){const r=`${t}__${s}`;!a.__numberFormatters.has(r)||a.__numberFormatters.delete(r)}}typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(fe().__INTLIFY_PROD_DEVTOOLS__=!1);export{Ke as A,st as B,x as C,Qe as M,U as N,N as a,f as b,L as c,D as d,Le as e,v as f,fe as g,d as h,O as i,Be as j,q as k,T as l,Ye as m,G as n,k as o,Xe as p,at as q,ne as r,qe as s,rt as t,et as u,Ze as v,He as w,tt as x,Ge as y,nt as z};