function Nf(r,t){return function(){return r.apply(t,arguments)}}const{toString:em}=Object.prototype,{getPrototypeOf:Fc}=Object,{iterator:lo,toStringTag:Ff}=Symbol,co=(r=>t=>{const e=em.call(t);return r[e]||(r[e]=e.slice(8,-1).toLowerCase())})(Object.create(null)),Vn=r=>(r=r.toLowerCase(),t=>co(t)===r),ho=r=>t=>typeof t===r,{isArray:ss}=Array,Yr=ho("undefined");function Gs(r){return r!==null&&!Yr(r)&&r.constructor!==null&&!Yr(r.constructor)&&an(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const Of=Vn("ArrayBuffer");function nm(r){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(r):t=r&&r.buffer&&Of(r.buffer),t}const im=ho("string"),an=ho("function"),Bf=ho("number"),Ws=r=>r!==null&&typeof r=="object",rm=r=>r===!0||r===!1,La=r=>{if(co(r)!=="object")return!1;const t=Fc(r);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Ff in r)&&!(lo in r)},sm=r=>{if(!Ws(r)||Gs(r))return!1;try{return Object.keys(r).length===0&&Object.getPrototypeOf(r)===Object.prototype}catch{return!1}},am=Vn("Date"),om=Vn("File"),lm=Vn("Blob"),cm=Vn("FileList"),hm=r=>Ws(r)&&an(r.pipe),um=r=>{let t;return r&&(typeof FormData=="function"&&r instanceof FormData||an(r.append)&&((t=co(r))==="formdata"||t==="object"&&an(r.toString)&&r.toString()==="[object FormData]"))},fm=Vn("URLSearchParams"),[dm,pm,mm,_m]=["ReadableStream","Request","Response","Headers"].map(Vn),gm=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Xs(r,t,{allOwnKeys:e=!1}={}){if(r===null||typeof r>"u")return;let n,i;if(typeof r!="object"&&(r=[r]),ss(r))for(n=0,i=r.length;n<i;n++)t.call(null,r[n],n,r);else{if(Gs(r))return;const s=e?Object.getOwnPropertyNames(r):Object.keys(r),a=s.length;let o;for(n=0;n<a;n++)o=s[n],t.call(null,r[o],o,r)}}function zf(r,t){if(Gs(r))return null;t=t.toLowerCase();const e=Object.keys(r);let n=e.length,i;for(;n-- >0;)if(i=e[n],t===i.toLowerCase())return i;return null}const er=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,kf=r=>!Yr(r)&&r!==er;function gl(){const{caseless:r,skipUndefined:t}=kf(this)&&this||{},e={},n=(i,s)=>{if(s==="__proto__"||s==="constructor"||s==="prototype")return;const a=r&&zf(e,s)||s;La(e[a])&&La(i)?e[a]=gl(e[a],i):La(i)?e[a]=gl({},i):ss(i)?e[a]=i.slice():(!t||!Yr(i))&&(e[a]=i)};for(let i=0,s=arguments.length;i<s;i++)arguments[i]&&Xs(arguments[i],n);return e}const xm=(r,t,e,{allOwnKeys:n}={})=>(Xs(t,(i,s)=>{e&&an(i)?Object.defineProperty(r,s,{value:Nf(i,e),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(r,s,{value:i,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:n}),r),vm=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),Mm=(r,t,e,n)=>{r.prototype=Object.create(t.prototype,n),Object.defineProperty(r.prototype,"constructor",{value:r,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(r,"super",{value:t.prototype}),e&&Object.assign(r.prototype,e)},Sm=(r,t,e,n)=>{let i,s,a;const o={};if(t=t||{},r==null)return t;do{for(i=Object.getOwnPropertyNames(r),s=i.length;s-- >0;)a=i[s],(!n||n(a,r,t))&&!o[a]&&(t[a]=r[a],o[a]=!0);r=e!==!1&&Fc(r)}while(r&&(!e||e(r,t))&&r!==Object.prototype);return t},ym=(r,t,e)=>{r=String(r),(e===void 0||e>r.length)&&(e=r.length),e-=t.length;const n=r.indexOf(t,e);return n!==-1&&n===e},Em=r=>{if(!r)return null;if(ss(r))return r;let t=r.length;if(!Bf(t))return null;const e=new Array(t);for(;t-- >0;)e[t]=r[t];return e},bm=(r=>t=>r&&t instanceof r)(typeof Uint8Array<"u"&&Fc(Uint8Array)),Tm=(r,t)=>{const n=(r&&r[lo]).call(r);let i;for(;(i=n.next())&&!i.done;){const s=i.value;t.call(r,s[0],s[1])}},wm=(r,t)=>{let e;const n=[];for(;(e=r.exec(t))!==null;)n.push(e);return n},Am=Vn("HTMLFormElement"),Rm=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,n,i){return n.toUpperCase()+i}),Bh=(({hasOwnProperty:r})=>(t,e)=>r.call(t,e))(Object.prototype),Cm=Vn("RegExp"),Vf=(r,t)=>{const e=Object.getOwnPropertyDescriptors(r),n={};Xs(e,(i,s)=>{let a;(a=t(i,s,r))!==!1&&(n[s]=a||i)}),Object.defineProperties(r,n)},Pm=r=>{Vf(r,(t,e)=>{if(an(r)&&["arguments","caller","callee"].indexOf(e)!==-1)return!1;const n=r[e];if(an(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+e+"'")})}})},Dm=(r,t)=>{const e={},n=i=>{i.forEach(s=>{e[s]=!0})};return ss(r)?n(r):n(String(r).split(t)),e},Lm=()=>{},Im=(r,t)=>r!=null&&Number.isFinite(r=+r)?r:t;function Um(r){return!!(r&&an(r.append)&&r[Ff]==="FormData"&&r[lo])}const Nm=r=>{const t=new Array(10),e=(n,i)=>{if(Ws(n)){if(t.indexOf(n)>=0)return;if(Gs(n))return n;if(!("toJSON"in n)){t[i]=n;const s=ss(n)?[]:{};return Xs(n,(a,o)=>{const c=e(a,i+1);!Yr(c)&&(s[o]=c)}),t[i]=void 0,s}}return n};return e(r,0)},Fm=Vn("AsyncFunction"),Om=r=>r&&(Ws(r)||an(r))&&an(r.then)&&an(r.catch),Hf=((r,t)=>r?setImmediate:t?((e,n)=>(er.addEventListener("message",({source:i,data:s})=>{i===er&&s===e&&n.length&&n.shift()()},!1),i=>{n.push(i),er.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate=="function",an(er.postMessage)),Bm=typeof queueMicrotask<"u"?queueMicrotask.bind(er):typeof process<"u"&&process.nextTick||Hf,zm=r=>r!=null&&an(r[lo]),H={isArray:ss,isArrayBuffer:Of,isBuffer:Gs,isFormData:um,isArrayBufferView:nm,isString:im,isNumber:Bf,isBoolean:rm,isObject:Ws,isPlainObject:La,isEmptyObject:sm,isReadableStream:dm,isRequest:pm,isResponse:mm,isHeaders:_m,isUndefined:Yr,isDate:am,isFile:om,isBlob:lm,isRegExp:Cm,isFunction:an,isStream:hm,isURLSearchParams:fm,isTypedArray:bm,isFileList:cm,forEach:Xs,merge:gl,extend:xm,trim:gm,stripBOM:vm,inherits:Mm,toFlatObject:Sm,kindOf:co,kindOfTest:Vn,endsWith:ym,toArray:Em,forEachEntry:Tm,matchAll:wm,isHTMLForm:Am,hasOwnProperty:Bh,hasOwnProp:Bh,reduceDescriptors:Vf,freezeMethods:Pm,toObjectSet:Dm,toCamelCase:Rm,noop:Lm,toFiniteNumber:Im,findKey:zf,global:er,isContextDefined:kf,isSpecCompliantForm:Um,toJSONObject:Nm,isAsyncFn:Fm,isThenable:Om,setImmediate:Hf,asap:Bm,isIterable:zm};let Pt=class Gf extends Error{static from(t,e,n,i,s,a){const o=new Gf(t.message,e||t.code,n,i,s);return o.cause=t,o.name=t.name,a&&Object.assign(o,a),o}constructor(t,e,n,i,s){super(t),this.name="AxiosError",this.isAxiosError=!0,e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),s&&(this.response=s,this.status=s.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:H.toJSONObject(this.config),code:this.code,status:this.status}}};Pt.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Pt.ERR_BAD_OPTION="ERR_BAD_OPTION";Pt.ECONNABORTED="ECONNABORTED";Pt.ETIMEDOUT="ETIMEDOUT";Pt.ERR_NETWORK="ERR_NETWORK";Pt.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Pt.ERR_DEPRECATED="ERR_DEPRECATED";Pt.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Pt.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Pt.ERR_CANCELED="ERR_CANCELED";Pt.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Pt.ERR_INVALID_URL="ERR_INVALID_URL";const km=null;function xl(r){return H.isPlainObject(r)||H.isArray(r)}function Wf(r){return H.endsWith(r,"[]")?r.slice(0,-2):r}function zh(r,t,e){return r?r.concat(t).map(function(i,s){return i=Wf(i),!e&&s?"["+i+"]":i}).join(e?".":""):t}function Vm(r){return H.isArray(r)&&!r.some(xl)}const Hm=H.toFlatObject(H,{},null,function(t){return/^is[A-Z]/.test(t)});function uo(r,t,e){if(!H.isObject(r))throw new TypeError("target must be an object");t=t||new FormData,e=H.toFlatObject(e,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,m){return!H.isUndefined(m[_])});const n=e.metaTokens,i=e.visitor||h,s=e.dots,a=e.indexes,c=(e.Blob||typeof Blob<"u"&&Blob)&&H.isSpecCompliantForm(t);if(!H.isFunction(i))throw new TypeError("visitor must be a function");function l(g){if(g===null)return"";if(H.isDate(g))return g.toISOString();if(H.isBoolean(g))return g.toString();if(!c&&H.isBlob(g))throw new Pt("Blob is not supported. Use a Buffer instead.");return H.isArrayBuffer(g)||H.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function h(g,_,m){let d=g;if(g&&!m&&typeof g=="object"){if(H.endsWith(_,"{}"))_=n?_:_.slice(0,-2),g=JSON.stringify(g);else if(H.isArray(g)&&Vm(g)||(H.isFileList(g)||H.endsWith(_,"[]"))&&(d=H.toArray(g)))return _=Wf(_),d.forEach(function(M,y){!(H.isUndefined(M)||M===null)&&t.append(a===!0?zh([_],y,s):a===null?_:_+"[]",l(M))}),!1}return xl(g)?!0:(t.append(zh(m,_,s),l(g)),!1)}const u=[],f=Object.assign(Hm,{defaultVisitor:h,convertValue:l,isVisitable:xl});function p(g,_){if(!H.isUndefined(g)){if(u.indexOf(g)!==-1)throw Error("Circular reference detected in "+_.join("."));u.push(g),H.forEach(g,function(d,x){(!(H.isUndefined(d)||d===null)&&i.call(t,d,H.isString(x)?x.trim():x,_,f))===!0&&p(d,_?_.concat(x):[x])}),u.pop()}}if(!H.isObject(r))throw new TypeError("data must be an object");return p(r),t}function kh(r){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function Oc(r,t){this._pairs=[],r&&uo(r,this,t)}const Xf=Oc.prototype;Xf.append=function(t,e){this._pairs.push([t,e])};Xf.toString=function(t){const e=t?function(n){return t.call(this,n,kh)}:kh;return this._pairs.map(function(i){return e(i[0])+"="+e(i[1])},"").join("&")};function Gm(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function qf(r,t,e){if(!t)return r;const n=e&&e.encode||Gm,i=H.isFunction(e)?{serialize:e}:e,s=i&&i.serialize;let a;if(s?a=s(t,i):a=H.isURLSearchParams(t)?t.toString():new Oc(t,i).toString(n),a){const o=r.indexOf("#");o!==-1&&(r=r.slice(0,o)),r+=(r.indexOf("?")===-1?"?":"&")+a}return r}class Vh{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){H.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Bc={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Wm=typeof URLSearchParams<"u"?URLSearchParams:Oc,Xm=typeof FormData<"u"?FormData:null,qm=typeof Blob<"u"?Blob:null,Ym={isBrowser:!0,classes:{URLSearchParams:Wm,FormData:Xm,Blob:qm},protocols:["http","https","file","blob","url","data"]},zc=typeof window<"u"&&typeof document<"u",vl=typeof navigator=="object"&&navigator||void 0,jm=zc&&(!vl||["ReactNative","NativeScript","NS"].indexOf(vl.product)<0),$m=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Km=zc&&window.location.href||"http://localhost",Zm=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:zc,hasStandardBrowserEnv:jm,hasStandardBrowserWebWorkerEnv:$m,navigator:vl,origin:Km},Symbol.toStringTag,{value:"Module"})),Ge={...Zm,...Ym};function Jm(r,t){return uo(r,new Ge.classes.URLSearchParams,{visitor:function(e,n,i,s){return Ge.isNode&&H.isBuffer(e)?(this.append(n,e.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...t})}function Qm(r){return H.matchAll(/\w+|\[(\w*)]/g,r).map(t=>t[0]==="[]"?"":t[1]||t[0])}function t_(r){const t={},e=Object.keys(r);let n;const i=e.length;let s;for(n=0;n<i;n++)s=e[n],t[s]=r[s];return t}function Yf(r){function t(e,n,i,s){let a=e[s++];if(a==="__proto__")return!0;const o=Number.isFinite(+a),c=s>=e.length;return a=!a&&H.isArray(i)?i.length:a,c?(H.hasOwnProp(i,a)?i[a]=[i[a],n]:i[a]=n,!o):((!i[a]||!H.isObject(i[a]))&&(i[a]=[]),t(e,n,i[a],s)&&H.isArray(i[a])&&(i[a]=t_(i[a])),!o)}if(H.isFormData(r)&&H.isFunction(r.entries)){const e={};return H.forEachEntry(r,(n,i)=>{t(Qm(n),i,e,0)}),e}return null}function e_(r,t,e){if(H.isString(r))try{return(t||JSON.parse)(r),H.trim(r)}catch(n){if(n.name!=="SyntaxError")throw n}return(e||JSON.stringify)(r)}const qs={transitional:Bc,adapter:["xhr","http","fetch"],transformRequest:[function(t,e){const n=e.getContentType()||"",i=n.indexOf("application/json")>-1,s=H.isObject(t);if(s&&H.isHTMLForm(t)&&(t=new FormData(t)),H.isFormData(t))return i?JSON.stringify(Yf(t)):t;if(H.isArrayBuffer(t)||H.isBuffer(t)||H.isStream(t)||H.isFile(t)||H.isBlob(t)||H.isReadableStream(t))return t;if(H.isArrayBufferView(t))return t.buffer;if(H.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let o;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Jm(t,this.formSerializer).toString();if((o=H.isFileList(t))||n.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return uo(o?{"files[]":t}:t,c&&new c,this.formSerializer)}}return s||i?(e.setContentType("application/json",!1),e_(t)):t}],transformResponse:[function(t){const e=this.transitional||qs.transitional,n=e&&e.forcedJSONParsing,i=this.responseType==="json";if(H.isResponse(t)||H.isReadableStream(t))return t;if(t&&H.isString(t)&&(n&&!this.responseType||i)){const a=!(e&&e.silentJSONParsing)&&i;try{return JSON.parse(t,this.parseReviver)}catch(o){if(a)throw o.name==="SyntaxError"?Pt.from(o,Pt.ERR_BAD_RESPONSE,this,null,this.response):o}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ge.classes.FormData,Blob:Ge.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};H.forEach(["delete","get","head","post","put","patch"],r=>{qs.headers[r]={}});const n_=H.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),i_=r=>{const t={};let e,n,i;return r&&r.split(`
`).forEach(function(a){i=a.indexOf(":"),e=a.substring(0,i).trim().toLowerCase(),n=a.substring(i+1).trim(),!(!e||t[e]&&n_[e])&&(e==="set-cookie"?t[e]?t[e].push(n):t[e]=[n]:t[e]=t[e]?t[e]+", "+n:n)}),t},Hh=Symbol("internals");function hs(r){return r&&String(r).trim().toLowerCase()}function Ia(r){return r===!1||r==null?r:H.isArray(r)?r.map(Ia):String(r)}function r_(r){const t=Object.create(null),e=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=e.exec(r);)t[n[1]]=n[2];return t}const s_=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function wo(r,t,e,n,i){if(H.isFunction(n))return n.call(this,t,e);if(i&&(t=e),!!H.isString(t)){if(H.isString(n))return t.indexOf(n)!==-1;if(H.isRegExp(n))return n.test(t)}}function a_(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,n)=>e.toUpperCase()+n)}function o_(r,t){const e=H.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(r,n+e,{value:function(i,s,a){return this[n].call(this,t,i,s,a)},configurable:!0})})}let on=class{constructor(t){t&&this.set(t)}set(t,e,n){const i=this;function s(o,c,l){const h=hs(c);if(!h)throw new Error("header name must be a non-empty string");const u=H.findKey(i,h);(!u||i[u]===void 0||l===!0||l===void 0&&i[u]!==!1)&&(i[u||c]=Ia(o))}const a=(o,c)=>H.forEach(o,(l,h)=>s(l,h,c));if(H.isPlainObject(t)||t instanceof this.constructor)a(t,e);else if(H.isString(t)&&(t=t.trim())&&!s_(t))a(i_(t),e);else if(H.isObject(t)&&H.isIterable(t)){let o={},c,l;for(const h of t){if(!H.isArray(h))throw TypeError("Object iterator must return a key-value pair");o[l=h[0]]=(c=o[l])?H.isArray(c)?[...c,h[1]]:[c,h[1]]:h[1]}a(o,e)}else t!=null&&s(e,t,n);return this}get(t,e){if(t=hs(t),t){const n=H.findKey(this,t);if(n){const i=this[n];if(!e)return i;if(e===!0)return r_(i);if(H.isFunction(e))return e.call(this,i,n);if(H.isRegExp(e))return e.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=hs(t),t){const n=H.findKey(this,t);return!!(n&&this[n]!==void 0&&(!e||wo(this,this[n],n,e)))}return!1}delete(t,e){const n=this;let i=!1;function s(a){if(a=hs(a),a){const o=H.findKey(n,a);o&&(!e||wo(n,n[o],o,e))&&(delete n[o],i=!0)}}return H.isArray(t)?t.forEach(s):s(t),i}clear(t){const e=Object.keys(this);let n=e.length,i=!1;for(;n--;){const s=e[n];(!t||wo(this,this[s],s,t,!0))&&(delete this[s],i=!0)}return i}normalize(t){const e=this,n={};return H.forEach(this,(i,s)=>{const a=H.findKey(n,s);if(a){e[a]=Ia(i),delete e[s];return}const o=t?a_(s):String(s).trim();o!==s&&delete e[s],e[o]=Ia(i),n[o]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return H.forEach(this,(n,i)=>{n!=null&&n!==!1&&(e[i]=t&&H.isArray(n)?n.join(", "):n)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach(i=>n.set(i)),n}static accessor(t){const n=(this[Hh]=this[Hh]={accessors:{}}).accessors,i=this.prototype;function s(a){const o=hs(a);n[o]||(o_(i,a),n[o]=!0)}return H.isArray(t)?t.forEach(s):s(t),this}};on.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);H.reduceDescriptors(on.prototype,({value:r},t)=>{let e=t[0].toUpperCase()+t.slice(1);return{get:()=>r,set(n){this[e]=n}}});H.freezeMethods(on);function Ao(r,t){const e=this||qs,n=t||e,i=on.from(n.headers);let s=n.data;return H.forEach(r,function(o){s=o.call(e,s,i.normalize(),t?t.status:void 0)}),i.normalize(),s}function jf(r){return!!(r&&r.__CANCEL__)}let Ys=class extends Pt{constructor(t,e,n){super(t??"canceled",Pt.ERR_CANCELED,e,n),this.name="CanceledError",this.__CANCEL__=!0}};function $f(r,t,e){const n=e.config.validateStatus;!e.status||!n||n(e.status)?r(e):t(new Pt("Request failed with status code "+e.status,[Pt.ERR_BAD_REQUEST,Pt.ERR_BAD_RESPONSE][Math.floor(e.status/100)-4],e.config,e.request,e))}function l_(r){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return t&&t[1]||""}function c_(r,t){r=r||10;const e=new Array(r),n=new Array(r);let i=0,s=0,a;return t=t!==void 0?t:1e3,function(c){const l=Date.now(),h=n[s];a||(a=l),e[i]=c,n[i]=l;let u=s,f=0;for(;u!==i;)f+=e[u++],u=u%r;if(i=(i+1)%r,i===s&&(s=(s+1)%r),l-a<t)return;const p=h&&l-h;return p?Math.round(f*1e3/p):void 0}}function h_(r,t){let e=0,n=1e3/t,i,s;const a=(l,h=Date.now())=>{e=h,i=null,s&&(clearTimeout(s),s=null),r(...l)};return[(...l)=>{const h=Date.now(),u=h-e;u>=n?a(l,h):(i=l,s||(s=setTimeout(()=>{s=null,a(i)},n-u)))},()=>i&&a(i)]}const Ya=(r,t,e=3)=>{let n=0;const i=c_(50,250);return h_(s=>{const a=s.loaded,o=s.lengthComputable?s.total:void 0,c=a-n,l=i(c),h=a<=o;n=a;const u={loaded:a,total:o,progress:o?a/o:void 0,bytes:c,rate:l||void 0,estimated:l&&o&&h?(o-a)/l:void 0,event:s,lengthComputable:o!=null,[t?"download":"upload"]:!0};r(u)},e)},Gh=(r,t)=>{const e=r!=null;return[n=>t[0]({lengthComputable:e,total:r,loaded:n}),t[1]]},Wh=r=>(...t)=>H.asap(()=>r(...t)),u_=Ge.hasStandardBrowserEnv?((r,t)=>e=>(e=new URL(e,Ge.origin),r.protocol===e.protocol&&r.host===e.host&&(t||r.port===e.port)))(new URL(Ge.origin),Ge.navigator&&/(msie|trident)/i.test(Ge.navigator.userAgent)):()=>!0,f_=Ge.hasStandardBrowserEnv?{write(r,t,e,n,i,s,a){if(typeof document>"u")return;const o=[`${r}=${encodeURIComponent(t)}`];H.isNumber(e)&&o.push(`expires=${new Date(e).toUTCString()}`),H.isString(n)&&o.push(`path=${n}`),H.isString(i)&&o.push(`domain=${i}`),s===!0&&o.push("secure"),H.isString(a)&&o.push(`SameSite=${a}`),document.cookie=o.join("; ")},read(r){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+r+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(r){this.write(r,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function d_(r){return typeof r!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function p_(r,t){return t?r.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):r}function Kf(r,t,e){let n=!d_(t);return r&&(n||e==!1)?p_(r,t):t}const Xh=r=>r instanceof on?{...r}:r;function ur(r,t){t=t||{};const e={};function n(l,h,u,f){return H.isPlainObject(l)&&H.isPlainObject(h)?H.merge.call({caseless:f},l,h):H.isPlainObject(h)?H.merge({},h):H.isArray(h)?h.slice():h}function i(l,h,u,f){if(H.isUndefined(h)){if(!H.isUndefined(l))return n(void 0,l,u,f)}else return n(l,h,u,f)}function s(l,h){if(!H.isUndefined(h))return n(void 0,h)}function a(l,h){if(H.isUndefined(h)){if(!H.isUndefined(l))return n(void 0,l)}else return n(void 0,h)}function o(l,h,u){if(u in t)return n(l,h);if(u in r)return n(void 0,l)}const c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:o,headers:(l,h,u)=>i(Xh(l),Xh(h),u,!0)};return H.forEach(Object.keys({...r,...t}),function(h){if(h==="__proto__"||h==="constructor"||h==="prototype")return;const u=H.hasOwnProp(c,h)?c[h]:i,f=u(r[h],t[h],h);H.isUndefined(f)&&u!==o||(e[h]=f)}),e}const Zf=r=>{const t=ur({},r);let{data:e,withXSRFToken:n,xsrfHeaderName:i,xsrfCookieName:s,headers:a,auth:o}=t;if(t.headers=a=on.from(a),t.url=qf(Kf(t.baseURL,t.url,t.allowAbsoluteUrls),r.params,r.paramsSerializer),o&&a.set("Authorization","Basic "+btoa((o.username||"")+":"+(o.password?unescape(encodeURIComponent(o.password)):""))),H.isFormData(e)){if(Ge.hasStandardBrowserEnv||Ge.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(H.isFunction(e.getHeaders)){const c=e.getHeaders(),l=["content-type","content-length"];Object.entries(c).forEach(([h,u])=>{l.includes(h.toLowerCase())&&a.set(h,u)})}}if(Ge.hasStandardBrowserEnv&&(n&&H.isFunction(n)&&(n=n(t)),n||n!==!1&&u_(t.url))){const c=i&&s&&f_.read(s);c&&a.set(i,c)}return t},m_=typeof XMLHttpRequest<"u",__=m_&&function(r){return new Promise(function(e,n){const i=Zf(r);let s=i.data;const a=on.from(i.headers).normalize();let{responseType:o,onUploadProgress:c,onDownloadProgress:l}=i,h,u,f,p,g;function _(){p&&p(),g&&g(),i.cancelToken&&i.cancelToken.unsubscribe(h),i.signal&&i.signal.removeEventListener("abort",h)}let m=new XMLHttpRequest;m.open(i.method.toUpperCase(),i.url,!0),m.timeout=i.timeout;function d(){if(!m)return;const M=on.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),E={data:!o||o==="text"||o==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:M,config:r,request:m};$f(function(A){e(A),_()},function(A){n(A),_()},E),m=null}"onloadend"in m?m.onloadend=d:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(d)},m.onabort=function(){m&&(n(new Pt("Request aborted",Pt.ECONNABORTED,r,m)),m=null)},m.onerror=function(y){const E=y&&y.message?y.message:"Network Error",b=new Pt(E,Pt.ERR_NETWORK,r,m);b.event=y||null,n(b),m=null},m.ontimeout=function(){let y=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const E=i.transitional||Bc;i.timeoutErrorMessage&&(y=i.timeoutErrorMessage),n(new Pt(y,E.clarifyTimeoutError?Pt.ETIMEDOUT:Pt.ECONNABORTED,r,m)),m=null},s===void 0&&a.setContentType(null),"setRequestHeader"in m&&H.forEach(a.toJSON(),function(y,E){m.setRequestHeader(E,y)}),H.isUndefined(i.withCredentials)||(m.withCredentials=!!i.withCredentials),o&&o!=="json"&&(m.responseType=i.responseType),l&&([f,g]=Ya(l,!0),m.addEventListener("progress",f)),c&&m.upload&&([u,p]=Ya(c),m.upload.addEventListener("progress",u),m.upload.addEventListener("loadend",p)),(i.cancelToken||i.signal)&&(h=M=>{m&&(n(!M||M.type?new Ys(null,r,m):M),m.abort(),m=null)},i.cancelToken&&i.cancelToken.subscribe(h),i.signal&&(i.signal.aborted?h():i.signal.addEventListener("abort",h)));const x=l_(i.url);if(x&&Ge.protocols.indexOf(x)===-1){n(new Pt("Unsupported protocol "+x+":",Pt.ERR_BAD_REQUEST,r));return}m.send(s||null)})},g_=(r,t)=>{const{length:e}=r=r?r.filter(Boolean):[];if(t||e){let n=new AbortController,i;const s=function(l){if(!i){i=!0,o();const h=l instanceof Error?l:this.reason;n.abort(h instanceof Pt?h:new Ys(h instanceof Error?h.message:h))}};let a=t&&setTimeout(()=>{a=null,s(new Pt(`timeout of ${t}ms exceeded`,Pt.ETIMEDOUT))},t);const o=()=>{r&&(a&&clearTimeout(a),a=null,r.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),r=null)};r.forEach(l=>l.addEventListener("abort",s));const{signal:c}=n;return c.unsubscribe=()=>H.asap(o),c}},x_=function*(r,t){let e=r.byteLength;if(e<t){yield r;return}let n=0,i;for(;n<e;)i=n+t,yield r.slice(n,i),n=i},v_=async function*(r,t){for await(const e of M_(r))yield*x_(e,t)},M_=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const t=r.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},qh=(r,t,e,n)=>{const i=v_(r,t);let s=0,a,o=c=>{a||(a=!0,n&&n(c))};return new ReadableStream({async pull(c){try{const{done:l,value:h}=await i.next();if(l){o(),c.close();return}let u=h.byteLength;if(e){let f=s+=u;e(f)}c.enqueue(new Uint8Array(h))}catch(l){throw o(l),l}},cancel(c){return o(c),i.return()}},{highWaterMark:2})},Yh=64*1024,{isFunction:ta}=H,S_=(({Request:r,Response:t})=>({Request:r,Response:t}))(H.global),{ReadableStream:jh,TextEncoder:$h}=H.global,Kh=(r,...t)=>{try{return!!r(...t)}catch{return!1}},y_=r=>{r=H.merge.call({skipUndefined:!0},S_,r);const{fetch:t,Request:e,Response:n}=r,i=t?ta(t):typeof fetch=="function",s=ta(e),a=ta(n);if(!i)return!1;const o=i&&ta(jh),c=i&&(typeof $h=="function"?(g=>_=>g.encode(_))(new $h):async g=>new Uint8Array(await new e(g).arrayBuffer())),l=s&&o&&Kh(()=>{let g=!1;const _=new e(Ge.origin,{body:new jh,method:"POST",get duplex(){return g=!0,"half"}}).headers.has("Content-Type");return g&&!_}),h=a&&o&&Kh(()=>H.isReadableStream(new n("").body)),u={stream:h&&(g=>g.body)};i&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!u[g]&&(u[g]=(_,m)=>{let d=_&&_[g];if(d)return d.call(_);throw new Pt(`Response type '${g}' is not supported`,Pt.ERR_NOT_SUPPORT,m)})});const f=async g=>{if(g==null)return 0;if(H.isBlob(g))return g.size;if(H.isSpecCompliantForm(g))return(await new e(Ge.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(H.isArrayBufferView(g)||H.isArrayBuffer(g))return g.byteLength;if(H.isURLSearchParams(g)&&(g=g+""),H.isString(g))return(await c(g)).byteLength},p=async(g,_)=>{const m=H.toFiniteNumber(g.getContentLength());return m??f(_)};return async g=>{let{url:_,method:m,data:d,signal:x,cancelToken:M,timeout:y,onDownloadProgress:E,onUploadProgress:b,responseType:A,headers:C,withCredentials:v="same-origin",fetchOptions:T}=Zf(g),P=t||fetch;A=A?(A+"").toLowerCase():"text";let O=g_([x,M&&M.toAbortSignal()],y),F=null;const X=O&&O.unsubscribe&&(()=>{O.unsubscribe()});let W;try{if(b&&l&&m!=="get"&&m!=="head"&&(W=await p(C,d))!==0){let it=new e(_,{method:"POST",body:d,duplex:"half"}),bt;if(H.isFormData(d)&&(bt=it.headers.get("content-type"))&&C.setContentType(bt),it.body){const[Lt,kt]=Gh(W,Ya(Wh(b)));d=qh(it.body,Yh,Lt,kt)}}H.isString(v)||(v=v?"include":"omit");const k=s&&"credentials"in e.prototype,B={...T,signal:O,method:m.toUpperCase(),headers:C.normalize().toJSON(),body:d,duplex:"half",credentials:k?v:void 0};F=s&&new e(_,B);let Y=await(s?P(F,T):P(_,B));const st=h&&(A==="stream"||A==="response");if(h&&(E||st&&X)){const it={};["status","statusText","headers"].forEach(Gt=>{it[Gt]=Y[Gt]});const bt=H.toFiniteNumber(Y.headers.get("content-length")),[Lt,kt]=E&&Gh(bt,Ya(Wh(E),!0))||[];Y=new n(qh(Y.body,Yh,Lt,()=>{kt&&kt(),X&&X()}),it)}A=A||"text";let nt=await u[H.findKey(u,A)||"text"](Y,g);return!st&&X&&X(),await new Promise((it,bt)=>{$f(it,bt,{data:nt,headers:on.from(Y.headers),status:Y.status,statusText:Y.statusText,config:g,request:F})})}catch(k){throw X&&X(),k&&k.name==="TypeError"&&/Load failed|fetch/i.test(k.message)?Object.assign(new Pt("Network Error",Pt.ERR_NETWORK,g,F,k&&k.response),{cause:k.cause||k}):Pt.from(k,k&&k.code,g,F,k&&k.response)}}},E_=new Map,Jf=r=>{let t=r&&r.env||{};const{fetch:e,Request:n,Response:i}=t,s=[n,i,e];let a=s.length,o=a,c,l,h=E_;for(;o--;)c=s[o],l=h.get(c),l===void 0&&h.set(c,l=o?new Map:y_(t)),h=l;return l};Jf();const kc={http:km,xhr:__,fetch:{get:Jf}};H.forEach(kc,(r,t)=>{if(r){try{Object.defineProperty(r,"name",{value:t})}catch{}Object.defineProperty(r,"adapterName",{value:t})}});const Zh=r=>`- ${r}`,b_=r=>H.isFunction(r)||r===null||r===!1;function T_(r,t){r=H.isArray(r)?r:[r];const{length:e}=r;let n,i;const s={};for(let a=0;a<e;a++){n=r[a];let o;if(i=n,!b_(n)&&(i=kc[(o=String(n)).toLowerCase()],i===void 0))throw new Pt(`Unknown adapter '${o}'`);if(i&&(H.isFunction(i)||(i=i.get(t))))break;s[o||"#"+a]=i}if(!i){const a=Object.entries(s).map(([c,l])=>`adapter ${c} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?a.length>1?`since :
`+a.map(Zh).join(`
`):" "+Zh(a[0]):"as no adapter specified";throw new Pt("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i}const Qf={getAdapter:T_,adapters:kc};function Ro(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Ys(null,r)}function Jh(r){return Ro(r),r.headers=on.from(r.headers),r.data=Ao.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),Qf.getAdapter(r.adapter||qs.adapter,r)(r).then(function(n){return Ro(r),n.data=Ao.call(r,r.transformResponse,n),n.headers=on.from(n.headers),n},function(n){return jf(n)||(Ro(r),n&&n.response&&(n.response.data=Ao.call(r,r.transformResponse,n.response),n.response.headers=on.from(n.response.headers))),Promise.reject(n)})}const td="1.13.5",fo={};["object","boolean","number","function","string","symbol"].forEach((r,t)=>{fo[r]=function(n){return typeof n===r||"a"+(t<1?"n ":" ")+r}});const Qh={};fo.transitional=function(t,e,n){function i(s,a){return"[Axios v"+td+"] Transitional option '"+s+"'"+a+(n?". "+n:"")}return(s,a,o)=>{if(t===!1)throw new Pt(i(a," has been removed"+(e?" in "+e:"")),Pt.ERR_DEPRECATED);return e&&!Qh[a]&&(Qh[a]=!0,console.warn(i(a," has been deprecated since v"+e+" and will be removed in the near future"))),t?t(s,a,o):!0}};fo.spelling=function(t){return(e,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function w_(r,t,e){if(typeof r!="object")throw new Pt("options must be an object",Pt.ERR_BAD_OPTION_VALUE);const n=Object.keys(r);let i=n.length;for(;i-- >0;){const s=n[i],a=t[s];if(a){const o=r[s],c=o===void 0||a(o,s,r);if(c!==!0)throw new Pt("option "+s+" must be "+c,Pt.ERR_BAD_OPTION_VALUE);continue}if(e!==!0)throw new Pt("Unknown option "+s,Pt.ERR_BAD_OPTION)}}const Ua={assertOptions:w_,validators:fo},Rn=Ua.validators;let sr=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Vh,response:new Vh}}async request(t,e){try{return await this._request(t,e)}catch(n){if(n instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{n.stack?s&&!String(n.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+s):n.stack=s}catch{}}throw n}}_request(t,e){typeof t=="string"?(e=e||{},e.url=t):e=t||{},e=ur(this.defaults,e);const{transitional:n,paramsSerializer:i,headers:s}=e;n!==void 0&&Ua.assertOptions(n,{silentJSONParsing:Rn.transitional(Rn.boolean),forcedJSONParsing:Rn.transitional(Rn.boolean),clarifyTimeoutError:Rn.transitional(Rn.boolean),legacyInterceptorReqResOrdering:Rn.transitional(Rn.boolean)},!1),i!=null&&(H.isFunction(i)?e.paramsSerializer={serialize:i}:Ua.assertOptions(i,{encode:Rn.function,serialize:Rn.function},!0)),e.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?e.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:e.allowAbsoluteUrls=!0),Ua.assertOptions(e,{baseUrl:Rn.spelling("baseURL"),withXsrfToken:Rn.spelling("withXSRFToken")},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase();let a=s&&H.merge(s.common,s[e.method]);s&&H.forEach(["delete","get","head","post","put","patch","common"],g=>{delete s[g]}),e.headers=on.concat(a,s);const o=[];let c=!0;this.interceptors.request.forEach(function(_){if(typeof _.runWhen=="function"&&_.runWhen(e)===!1)return;c=c&&_.synchronous;const m=e.transitional||Bc;m&&m.legacyInterceptorReqResOrdering?o.unshift(_.fulfilled,_.rejected):o.push(_.fulfilled,_.rejected)});const l=[];this.interceptors.response.forEach(function(_){l.push(_.fulfilled,_.rejected)});let h,u=0,f;if(!c){const g=[Jh.bind(this),void 0];for(g.unshift(...o),g.push(...l),f=g.length,h=Promise.resolve(e);u<f;)h=h.then(g[u++],g[u++]);return h}f=o.length;let p=e;for(;u<f;){const g=o[u++],_=o[u++];try{p=g(p)}catch(m){_.call(this,m);break}}try{h=Jh.call(this,p)}catch(g){return Promise.reject(g)}for(u=0,f=l.length;u<f;)h=h.then(l[u++],l[u++]);return h}getUri(t){t=ur(this.defaults,t);const e=Kf(t.baseURL,t.url,t.allowAbsoluteUrls);return qf(e,t.params,t.paramsSerializer)}};H.forEach(["delete","get","head","options"],function(t){sr.prototype[t]=function(e,n){return this.request(ur(n||{},{method:t,url:e,data:(n||{}).data}))}});H.forEach(["post","put","patch"],function(t){function e(n){return function(s,a,o){return this.request(ur(o||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}sr.prototype[t]=e(),sr.prototype[t+"Form"]=e(!0)});let A_=class ed{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let e;this.promise=new Promise(function(s){e=s});const n=this;this.promise.then(i=>{if(!n._listeners)return;let s=n._listeners.length;for(;s-- >0;)n._listeners[s](i);n._listeners=null}),this.promise.then=i=>{let s;const a=new Promise(o=>{n.subscribe(o),s=o}).then(i);return a.cancel=function(){n.unsubscribe(s)},a},t(function(s,a,o){n.reason||(n.reason=new Ys(s,a,o),e(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);e!==-1&&this._listeners.splice(e,1)}toAbortSignal(){const t=new AbortController,e=n=>{t.abort(n)};return this.subscribe(e),t.signal.unsubscribe=()=>this.unsubscribe(e),t.signal}static source(){let t;return{token:new ed(function(i){t=i}),cancel:t}}};function R_(r){return function(e){return r.apply(null,e)}}function C_(r){return H.isObject(r)&&r.isAxiosError===!0}const Ml={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Ml).forEach(([r,t])=>{Ml[t]=r});function nd(r){const t=new sr(r),e=Nf(sr.prototype.request,t);return H.extend(e,sr.prototype,t,{allOwnKeys:!0}),H.extend(e,t,null,{allOwnKeys:!0}),e.create=function(i){return nd(ur(r,i))},e}const be=nd(qs);be.Axios=sr;be.CanceledError=Ys;be.CancelToken=A_;be.isCancel=jf;be.VERSION=td;be.toFormData=uo;be.AxiosError=Pt;be.Cancel=be.CanceledError;be.all=function(t){return Promise.all(t)};be.spread=R_;be.isAxiosError=C_;be.mergeConfig=ur;be.AxiosHeaders=on;be.formToJSON=r=>Yf(H.isHTMLForm(r)?new FormData(r):r);be.getAdapter=Qf.getAdapter;be.HttpStatusCode=Ml;be.default=be;const{Axios:GE,AxiosError:WE,CanceledError:XE,isCancel:qE,CancelToken:YE,VERSION:jE,all:$E,Cancel:KE,isAxiosError:ZE,spread:JE,toFormData:QE,AxiosHeaders:tb,HttpStatusCode:eb,formToJSON:nb,getAdapter:ib,mergeConfig:rb}=be;window.axios=be;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";const Vc="182",Vr={ROTATE:0,DOLLY:1,PAN:2},Or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},P_=0,tu=1,D_=2,Na=1,id=2,ys=3,_i=0,Qe=1,fi=2,pi=0,Hr=1,Sl=2,eu=3,nu=4,L_=5,Qi=100,I_=101,U_=102,N_=103,F_=104,O_=200,B_=201,z_=202,k_=203,yl=204,El=205,V_=206,H_=207,G_=208,W_=209,X_=210,q_=211,Y_=212,j_=213,$_=214,bl=0,Tl=1,wl=2,jr=3,Al=4,Rl=5,Cl=6,Pl=7,po=0,K_=1,Z_=2,Zn=0,rd=1,sd=2,ad=3,Hc=4,od=5,ld=6,cd=7,hd=300,fr=301,$r=302,Dl=303,Ll=304,mo=306,ja=1e3,di=1001,Il=1002,Be=1003,J_=1004,ea=1005,Xe=1006,Co=1007,nr=1008,xn=1009,ud=1010,fd=1011,Ds=1012,Gc=1013,Qn=1014,Bn=1015,gi=1016,Wc=1017,Xc=1018,Ls=1020,dd=35902,pd=35899,md=1021,_d=1022,zn=1023,xi=1026,ir=1027,qc=1028,Yc=1029,Kr=1030,jc=1031,$c=1033,Fa=33776,Oa=33777,Ba=33778,za=33779,Ul=35840,Nl=35841,Fl=35842,Ol=35843,Bl=36196,zl=37492,kl=37496,Vl=37488,Hl=37489,Gl=37490,Wl=37491,Xl=37808,ql=37809,Yl=37810,jl=37811,$l=37812,Kl=37813,Zl=37814,Jl=37815,Ql=37816,tc=37817,ec=37818,nc=37819,ic=37820,rc=37821,sc=36492,ac=36494,oc=36495,lc=36283,cc=36284,hc=36285,uc=36286,Q_=3200,_o=0,tg=1,Ci="",Fe="srgb",Zr="srgb-linear",$a="linear",te="srgb",xr=7680,iu=519,eg=512,ng=513,ig=514,Kc=515,rg=516,sg=517,Zc=518,ag=519,ru=35044,su="300 es",$n=2e3,Ka=2001;function gd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Is(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function og(){const r=Is("canvas");return r.style.display="block",r}const au={};function ou(...r){const t="THREE."+r.shift();console.log(t,...r)}function Ct(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Yt(...r){const t="THREE."+r.shift();console.error(t,...r)}function Us(...r){const t=r.join(" ");t in au||(au[t]=!0,Ct(...r))}function lg(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}class pr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ka=Math.PI/180,fc=180/Math.PI;function js(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[r&255]+ke[r>>8&255]+ke[r>>16&255]+ke[r>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Ht(r,t,e){return Math.max(t,Math.min(e,r))}function cg(r,t){return(r%t+t)%t}function Po(r,t,e){return(1-e)*r+e*t}function us(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function nn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const hg={DEG2RAD:ka};class At{constructor(t=0,e=0){At.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o<=0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==p||h!==g){let m=c*f+l*p+h*g+u*_;m<0&&(f=-f,p=-p,g=-g,_=-_,m=-m);let d=1-o;if(m<.9995){const x=Math.acos(m),M=Math.sin(x);d=Math.sin(d*x)/M,o=Math.sin(o*x)/M,c=c*d+f*o,l=l*d+p*o,h=h*d+g*o,u=u*d+_*o}else{c=c*d+f*o,l=l*d+p*o,h=h*d+g*o,u=u*d+_*o;const x=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=x,l*=x,h*=x,u*=x}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+h*u+c*p-l*f,t[e+1]=c*g+h*f+l*u-o*p,t[e+2]=l*g+h*p+o*f-c*u,t[e+3]=h*g-o*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),f=c(n/2),p=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(s-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Do.copy(this).projectOnVector(t),this.sub(Do)}reflect(t){return this.sub(Do.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new I,lu=new dr;class Ft{constructor(t,e,n,i,s,a,o,c,l){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l)}set(t,e,n,i,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=i[0],m=i[3],d=i[6],x=i[1],M=i[4],y=i[7],E=i[2],b=i[5],A=i[8];return s[0]=a*_+o*x+c*E,s[3]=a*m+o*M+c*b,s[6]=a*d+o*y+c*A,s[1]=l*_+h*x+u*E,s[4]=l*m+h*M+u*b,s[7]=l*d+h*y+u*A,s[2]=f*_+p*x+g*E,s[5]=f*m+p*M+g*b,s[8]=f*d+p*y+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*s,p=l*s-a*c,g=e*u+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(h*e-i*c)*_,t[5]=(i*s-o*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Lo.makeScale(t,e)),this}rotate(t){return this.premultiply(Lo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Lo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Lo=new Ft,cu=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hu=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ug(){const r={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===te&&(i.r=mi(i.r),i.g=mi(i.g),i.b=mi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(i.r=Gr(i.r),i.g=Gr(i.g),i.b=Gr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ci?$a:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Zr]:{primaries:t,whitePoint:n,transfer:$a,toXYZ:cu,fromXYZ:hu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:n,transfer:te,toXYZ:cu,fromXYZ:hu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),r}const Wt=ug();function mi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Gr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let vr;class fg{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{vr===void 0&&(vr=Is("canvas")),vr.width=t.width,vr.height=t.height;const i=vr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=vr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Is("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=mi(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mi(e[n]/255)*255):e[n]=mi(e[n]);return{data:e,width:t.width,height:t.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dg=0;class Jc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=js(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Io(i[a].image)):s.push(Io(i[a]))}else s=Io(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Io(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}let pg=0;const Uo=new I;class qe extends pr{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,n=di,i=di,s=Xe,a=nr,o=zn,c=xn,l=qe.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=js(),this.name="",this.source=new Jc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uo).x}get height(){return this.source.getSize(Uo).y}get depth(){return this.source.getSize(Uo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ct(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Ct(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ja:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case Il:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ja:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case Il:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=hd;qe.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,i=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,y=(p+1)/2,E=(d+1)/2,b=(h+f)/4,A=(u+_)/4,C=(g+m)/4;return M>y&&M>E?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=b/n,s=A/n):y>E?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=b/i,s=C/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=A/s,i=C/s),this.set(n,i,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(f-h)/x,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this.w=Ht(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this.w=Ht(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mg extends pr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const i={width:t,height:e,depth:n.depth},s=new qe(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Jc(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends mg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class xd extends qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _g extends qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ki{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Un):Un.fromBufferAttribute(s,a),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),na.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),na.copy(n.boundingBox)),na.applyMatrix4(t.matrixWorld),this.union(na)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),ia.subVectors(this.max,fs),Mr.subVectors(t.a,fs),Sr.subVectors(t.b,fs),yr.subVectors(t.c,fs),Si.subVectors(Sr,Mr),yi.subVectors(yr,Sr),Wi.subVectors(Mr,yr);let e=[0,-Si.z,Si.y,0,-yi.z,yi.y,0,-Wi.z,Wi.y,Si.z,0,-Si.x,yi.z,0,-yi.x,Wi.z,0,-Wi.x,-Si.y,Si.x,0,-yi.y,yi.x,0,-Wi.y,Wi.x,0];return!No(e,Mr,Sr,yr,ia)||(e=[1,0,0,0,1,0,0,0,1],!No(e,Mr,Sr,yr,ia))?!1:(ra.crossVectors(Si,yi),e=[ra.x,ra.y,ra.z],No(e,Mr,Sr,yr,ia))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ii=[new I,new I,new I,new I,new I,new I,new I,new I],Un=new I,na=new ki,Mr=new I,Sr=new I,yr=new I,Si=new I,yi=new I,Wi=new I,fs=new I,ia=new I,ra=new I,Xi=new I;function No(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Xi.fromArray(r,s);const o=i.x*Math.abs(Xi.x)+i.y*Math.abs(Xi.y)+i.z*Math.abs(Xi.z),c=t.dot(Xi),l=e.dot(Xi),h=n.dot(Xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const gg=new ki,ds=new I,Fo=new I;class mr{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gg.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ds.subVectors(t,this.center);const e=ds.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ds,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ds.copy(t.center).add(Fo)),this.expandByPoint(ds.copy(t.center).sub(Fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ri=new I,Oo=new I,sa=new I,Ei=new I,Bo=new I,aa=new I,zo=new I;class $s{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Oo.copy(t).add(e).multiplyScalar(.5),sa.copy(e).sub(t).normalize(),Ei.copy(this.origin).sub(Oo);const s=t.distanceTo(e)*.5,a=-this.direction.dot(sa),o=Ei.dot(this.direction),c=-Ei.dot(sa),l=Ei.lengthSq(),h=Math.abs(1-a*a);let u,f,p,g;if(h>0)if(u=a*c-o,f=a*o-c,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+f*(f+2*c)+l);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Oo).addScaledVector(sa,f),p}intersectSphere(t,e){ri.subVectors(t.center,this.origin);const n=ri.dot(this.direction),i=ri.dot(ri)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,n,i,s){Bo.subVectors(e,t),aa.subVectors(n,t),zo.crossVectors(Bo,aa);let a=this.direction.dot(zo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ei.subVectors(this.origin,t);const c=o*this.direction.dot(aa.crossVectors(Ei,aa));if(c<0)return null;const l=o*this.direction.dot(Bo.cross(Ei));if(l<0||c+l>a)return null;const h=-o*Ei.dot(zo);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,i,s,a,o,c,l,h,u,f,p,g,_,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l,h,u,f,p,g,_,m)}set(t,e,n,i,s,a,o,c,l,h,u,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Er.setFromMatrixColumn(t,0).length(),s=1/Er.setFromMatrixColumn(t,1).length(),a=1/Er.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=a*h,p=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=f-_*l,e[9]=-o*c,e[2]=_-f*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,p=c*u,g=l*h,_=l*u;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,p=c*u,g=l*h,_=l*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,p=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=g*l-p,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xg,t,vg)}lookAt(t,e,n){const i=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),bi.crossVectors(n,mn),bi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),bi.crossVectors(n,mn)),bi.normalize(),oa.crossVectors(mn,bi),i[0]=bi.x,i[4]=oa.x,i[8]=mn.x,i[1]=bi.y,i[5]=oa.y,i[9]=mn.y,i[2]=bi.z,i[6]=oa.z,i[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],x=n[3],M=n[7],y=n[11],E=n[15],b=i[0],A=i[4],C=i[8],v=i[12],T=i[1],P=i[5],O=i[9],F=i[13],X=i[2],W=i[6],k=i[10],B=i[14],Y=i[3],st=i[7],nt=i[11],it=i[15];return s[0]=a*b+o*T+c*X+l*Y,s[4]=a*A+o*P+c*W+l*st,s[8]=a*C+o*O+c*k+l*nt,s[12]=a*v+o*F+c*B+l*it,s[1]=h*b+u*T+f*X+p*Y,s[5]=h*A+u*P+f*W+p*st,s[9]=h*C+u*O+f*k+p*nt,s[13]=h*v+u*F+f*B+p*it,s[2]=g*b+_*T+m*X+d*Y,s[6]=g*A+_*P+m*W+d*st,s[10]=g*C+_*O+m*k+d*nt,s[14]=g*v+_*F+m*B+d*it,s[3]=x*b+M*T+y*X+E*Y,s[7]=x*A+M*P+y*W+E*st,s[11]=x*C+M*O+y*k+E*nt,s[15]=x*v+M*F+y*B+E*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15],x=c*p-l*f,M=o*p-l*u,y=o*f-c*u,E=a*p-l*h,b=a*f-c*h,A=a*u-o*h;return e*(_*x-m*M+d*y)-n*(g*x-m*E+d*b)+i*(g*M-_*E+d*A)-s*(g*y-_*b+m*A)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],x=u*m*l-_*f*l+_*c*p-o*m*p-u*c*d+o*f*d,M=g*f*l-h*m*l-g*c*p+a*m*p+h*c*d-a*f*d,y=h*_*l-g*u*l+g*o*p-a*_*p-h*o*d+a*u*d,E=g*u*c-h*_*c-g*o*f+a*_*f+h*o*m-a*u*m,b=e*x+n*M+i*y+s*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=x*A,t[1]=(_*f*s-u*m*s-_*i*p+n*m*p+u*i*d-n*f*d)*A,t[2]=(o*m*s-_*c*s+_*i*l-n*m*l-o*i*d+n*c*d)*A,t[3]=(u*c*s-o*f*s-u*i*l+n*f*l+o*i*p-n*c*p)*A,t[4]=M*A,t[5]=(h*m*s-g*f*s+g*i*p-e*m*p-h*i*d+e*f*d)*A,t[6]=(g*c*s-a*m*s-g*i*l+e*m*l+a*i*d-e*c*d)*A,t[7]=(a*f*s-h*c*s+h*i*l-e*f*l-a*i*p+e*c*p)*A,t[8]=y*A,t[9]=(g*u*s-h*_*s-g*n*p+e*_*p+h*n*d-e*u*d)*A,t[10]=(a*_*s-g*o*s+g*n*l-e*_*l-a*n*d+e*o*d)*A,t[11]=(h*o*s-a*u*s-h*n*l+e*u*l+a*n*p-e*o*p)*A,t[12]=E*A,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*m+e*u*m)*A,t[14]=(g*o*i-a*_*i-g*n*c+e*_*c+a*n*m-e*o*m)*A,t[15]=(a*u*i-h*o*i+h*n*c-e*u*c-a*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,u=o+o,f=s*l,p=s*h,g=s*u,_=a*h,m=a*u,d=o*u,x=c*l,M=c*h,y=c*u,E=n.x,b=n.y,A=n.z;return i[0]=(1-(_+d))*E,i[1]=(p+y)*E,i[2]=(g-M)*E,i[3]=0,i[4]=(p-y)*b,i[5]=(1-(f+d))*b,i[6]=(m+x)*b,i[7]=0,i[8]=(g+M)*A,i[9]=(m-x)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;if(t.x=i[12],t.y=i[13],t.z=i[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let s=Er.set(i[0],i[1],i[2]).length();const a=Er.set(i[4],i[5],i[6]).length(),o=Er.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),Nn.copy(this);const l=1/s,h=1/a,u=1/o;return Nn.elements[0]*=l,Nn.elements[1]*=l,Nn.elements[2]*=l,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,e.setFromRotationMatrix(Nn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=$n,c=!1){const l=this.elements,h=2*s/(e-t),u=2*s/(n-i),f=(e+t)/(e-t),p=(n+i)/(n-i);let g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===$n)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ka)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=$n,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),p=-(n+i)/(n-i);let g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===$n)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Ka)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Er=new I,Nn=new ie,xg=new I(0,0,0),vg=new I(1,1,1),bi=new I,oa=new I,mn=new I,uu=new ie,fu=new dr;class bn{constructor(t=0,e=0,n=0,i=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return uu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fu.setFromEuler(this),this.setFromQuaternion(fu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class Qc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Mg=0;const du=new I,br=new dr,si=new ie,la=new I,ps=new I,Sg=new I,yg=new dr,pu=new I(1,0,0),mu=new I(0,1,0),_u=new I(0,0,1),gu={type:"added"},Eg={type:"removed"},Tr={type:"childadded",child:null},ko={type:"childremoved",child:null};class De extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new I,e=new bn,n=new dr,i=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new Ft}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return br.setFromAxisAngle(t,e),this.quaternion.multiply(br),this}rotateOnWorldAxis(t,e){return br.setFromAxisAngle(t,e),this.quaternion.premultiply(br),this}rotateX(t){return this.rotateOnAxis(pu,t)}rotateY(t){return this.rotateOnAxis(mu,t)}rotateZ(t){return this.rotateOnAxis(_u,t)}translateOnAxis(t,e){return du.copy(t).applyQuaternion(this.quaternion),this.position.add(du.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pu,t)}translateY(t){return this.translateOnAxis(mu,t)}translateZ(t){return this.translateOnAxis(_u,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?la.copy(t):la.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(ps,la,this.up):si.lookAt(la,ps,this.up),this.quaternion.setFromRotationMatrix(si),i&&(si.extractRotation(i.matrixWorld),br.setFromRotationMatrix(si),this.quaternion.premultiply(br.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gu),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Eg),ko.child=t,this.dispatchEvent(ko),ko.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gu),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,Sg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,yg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}De.DEFAULT_UP=new I(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new I,ai=new I,Vo=new I,oi=new I,wr=new I,Ar=new I,xu=new I,Ho=new I,Go=new I,Wo=new I,Xo=new Me,qo=new Me,Yo=new Me;class On{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Fn.subVectors(t,e),i.cross(Fn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Fn.subVectors(i,e),ai.subVectors(n,e),Vo.subVectors(t,e);const a=Fn.dot(Fn),o=Fn.dot(ai),c=Fn.dot(Vo),l=ai.dot(ai),h=ai.dot(Vo),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,p=(l*c-o*h)*f,g=(a*h-o*c)*f;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,i,s,a,o,c){return this.getBarycoord(t,e,n,i,oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,oi.x),c.addScaledVector(a,oi.y),c.addScaledVector(o,oi.z),c)}static getInterpolatedAttribute(t,e,n,i,s,a){return Xo.setScalar(0),qo.setScalar(0),Yo.setScalar(0),Xo.fromBufferAttribute(t,e),qo.fromBufferAttribute(t,n),Yo.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Xo,s.x),a.addScaledVector(qo,s.y),a.addScaledVector(Yo,s.z),a}static isFrontFacing(t,e,n,i){return Fn.subVectors(n,e),ai.subVectors(t,e),Fn.cross(ai).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Fn.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return On.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return On.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return On.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return On.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return On.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;wr.subVectors(i,n),Ar.subVectors(s,n),Ho.subVectors(t,n);const c=wr.dot(Ho),l=Ar.dot(Ho);if(c<=0&&l<=0)return e.copy(n);Go.subVectors(t,i);const h=wr.dot(Go),u=Ar.dot(Go);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(wr,a);Wo.subVectors(t,s);const p=wr.dot(Wo),g=Ar.dot(Wo);if(g>=0&&p<=g)return e.copy(s);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Ar,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return xu.subVectors(s,i),o=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(xu,o);const d=1/(m+_+f);return a=_*d,o=f*d,e.copy(n).addScaledVector(wr,a).addScaledVector(Ar,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},ca={h:0,s:0,l:0};function jo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Wt.workingColorSpace){if(t=cg(t,1),e=Ht(e,0,1),n=Ht(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=jo(a,s,t+1/3),this.g=jo(a,s,t),this.b=jo(a,s,t-1/3)}return Wt.colorSpaceToWorking(this,i),this}setStyle(t,e=Fe){function n(s){s!==void 0&&parseFloat(s)<1&&Ct("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ct("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=vd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return Wt.workingToColorSpace(Ve.copy(this),t),Math.round(Ht(Ve.r*255,0,255))*65536+Math.round(Ht(Ve.g*255,0,255))*256+Math.round(Ht(Ve.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.workingToColorSpace(Ve.copy(this),e);const n=Ve.r,i=Ve.g,s=Ve.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.workingToColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Fe){Wt.workingToColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,i=Ve.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(ca);const n=Po(Ti.h,ca.h,e),i=Po(Ti.s,ca.s,e),s=Po(Ti.l,ca.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new It;It.NAMES=vd;let bg=0;class kn extends pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=js(),this.name="",this.type="Material",this.blending=Hr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yl,this.blendDst=El,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ct(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Ct(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yl&&(n.blendSrc=this.blendSrc),this.blendDst!==El&&(n.blendDst=this.blendDst),this.blendEquation!==Qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==iu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Md extends kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new I,ha=new At;let Tg=0;class yn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ru,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ha.fromBufferAttribute(this,e),ha.applyMatrix3(t),this.setXY(e,ha.x,ha.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=us(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=us(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=us(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=us(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),i=nn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),i=nn(i,this.array),s=nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ru&&(t.usage=this.usage),t}}class Sd extends yn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yd extends yn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends yn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let wg=0;const Cn=new ie,$o=new De,Rr=new I,_n=new ki,ms=new ki,Ne=new I;class je extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gd(t)?yd:Sd)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ft().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return $o.lookAt(t),$o.updateMatrix(),this.applyMatrix4($o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(_n.min,ms.min),_n.expandByPoint(Ne),Ne.addVectors(_n.max,ms.max),_n.expandByPoint(Ne)):(_n.expandByPoint(ms.min),_n.expandByPoint(ms.max))}_n.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Ne.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ne));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ne.fromBufferAttribute(o,l),c&&(Rr.fromBufferAttribute(t,l),Ne.add(Rr)),i=Math.max(i,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new I,c[C]=new I;const l=new I,h=new I,u=new I,f=new At,p=new At,g=new At,_=new I,m=new I;function d(C,v,T){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,T),f.fromBufferAttribute(s,C),p.fromBufferAttribute(s,v),g.fromBufferAttribute(s,T),h.sub(l),u.sub(l),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[C].add(_),o[v].add(_),o[T].add(_),c[C].add(m),c[v].add(m),c[T].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let C=0,v=x.length;C<v;++C){const T=x[C],P=T.start,O=T.count;for(let F=P,X=P+O;F<X;F+=3)d(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const M=new I,y=new I,E=new I,b=new I;function A(C){E.fromBufferAttribute(i,C),b.copy(E);const v=o[C];M.copy(v),M.sub(E.multiplyScalar(E.dot(v))).normalize(),y.crossVectors(b,v);const P=y.dot(c[C])<0?-1:1;a.setXYZW(C,M.x,M.y,M.z,P)}for(let C=0,v=x.length;C<v;++C){const T=x[C],P=T.start,O=T.count;for(let F=P,X=P+O;F<X;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new I,s=new I,a=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new yn(f,h,u)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new je,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vu=new ie,qi=new $s,ua=new mr,Mu=new I,fa=new I,da=new I,pa=new I,Ko=new I,ma=new I,Su=new I,_a=new I;class Ee extends De{constructor(t=new je,e=new Md){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){ma.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(Ko.fromBufferAttribute(u,t),a?ma.addScaledVector(Ko,h):ma.addScaledVector(Ko.sub(e),h))}e.add(ma)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(s),qi.copy(t.ray).recast(t.near),!(ua.containsPoint(qi.origin)===!1&&(qi.intersectSphere(ua,Mu)===null||qi.origin.distanceToSquared(Mu)>(t.far-t.near)**2))&&(vu.copy(s).invert(),qi.copy(t.ray).applyMatrix4(vu),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,E=M;y<E;y+=3){const b=o.getX(y),A=o.getX(y+1),C=o.getX(y+2);i=ga(this,d,t,n,l,h,u,b,A,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const x=o.getX(m),M=o.getX(m+1),y=o.getX(m+2);i=ga(this,a,t,n,l,h,u,x,M,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,E=M;y<E;y+=3){const b=y,A=y+1,C=y+2;i=ga(this,d,t,n,l,h,u,b,A,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const x=m,M=m+1,y=m+2;i=ga(this,a,t,n,l,h,u,x,M,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Ag(r,t,e,n,i,s,a,o){let c;if(t.side===Qe?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,t.side===_i,o),c===null)return null;_a.copy(o),_a.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(_a);return l<e.near||l>e.far?null:{distance:l,point:_a.clone(),object:r}}function ga(r,t,e,n,i,s,a,o,c,l){r.getVertexPosition(o,fa),r.getVertexPosition(c,da),r.getVertexPosition(l,pa);const h=Ag(r,t,e,n,fa,da,pa,Su);if(h){const u=new I;On.getBarycoord(Su,fa,da,pa,u),i&&(h.uv=On.getInterpolatedAttribute(i,o,c,l,u,new At)),s&&(h.uv1=On.getInterpolatedAttribute(s,o,c,l,u,new At)),a&&(h.normal=On.getInterpolatedAttribute(a,o,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new I,materialIndex:0};On.getNormal(fa,da,pa,f.normal),h.face=f,h.barycoord=u}return h}class as extends je{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function g(_,m,d,x,M,y,E,b,A,C,v){const T=y/A,P=E/C,O=y/2,F=E/2,X=b/2,W=A+1,k=C+1;let B=0,Y=0;const st=new I;for(let nt=0;nt<k;nt++){const it=nt*P-F;for(let bt=0;bt<W;bt++){const Lt=bt*T-O;st[_]=Lt*x,st[m]=it*M,st[d]=X,l.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[d]=b>0?1:-1,h.push(st.x,st.y,st.z),u.push(bt/A),u.push(1-nt/C),B+=1}}for(let nt=0;nt<C;nt++)for(let it=0;it<A;it++){const bt=f+it+W*nt,Lt=f+it+W*(nt+1),kt=f+(it+1)+W*(nt+1),Gt=f+(it+1)+W*nt;c.push(bt,Lt,Gt),c.push(Lt,kt,Gt),Y+=6}o.addGroup(p,Y,v),p+=Y,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new as(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Jr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ke(r){const t={};for(let e=0;e<r.length;e++){const n=Jr(r[e]);for(const i in n)t[i]=n[i]}return t}function Rg(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Ed(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const Cg={clone:Jr,merge:Ke};var Pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pg,this.fragmentShader=Dg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Jr(t.uniforms),this.uniformsGroups=Rg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bd extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new I,yu=new At,Eu=new At;class sn extends bd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ka*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fc*2*Math.atan(Math.tan(ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wi.x,wi.y).multiplyScalar(-t/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-t/wi.z)}getViewSize(t,e){return this.getViewBounds(t,yu,Eu),e.subVectors(Eu,yu)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ka*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Cr=-90,Pr=1;class Lg extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new sn(Cr,Pr,t,e);i.layers=this.layers,this.add(i);const s=new sn(Cr,Pr,t,e);s.layers=this.layers,this.add(s);const a=new sn(Cr,Pr,t,e);a.layers=this.layers,this.add(a);const o=new sn(Cr,Pr,t,e);o.layers=this.layers,this.add(o);const c=new sn(Cr,Pr,t,e);c.layers=this.layers,this.add(c);const l=new sn(Cr,Pr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===$n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Td extends qe{constructor(t=[],e=fr,n,i,s,a,o,c,l,h){super(t,e,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wd extends Jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Td(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new as(5,5,5),s=new ti({name:"CubemapFromEquirect",uniforms:Jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:pi});s.uniforms.tEquirect.value=e;const a=new Ee(i,s),o=e.minFilter;return e.minFilter===nr&&(e.minFilter=Xe),new Lg(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}class Es extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ig={type:"move"};class Zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ig)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Es;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class th{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new It(t),this.density=e}clone(){return new th(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class eh extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ad extends qe{constructor(t=null,e=1,n=1,i,s,a,o,c,l=Be,h=Be,u,f){super(null,a,o,c,l,h,i,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bu extends yn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Dr=new ie,Tu=new ie,xa=[],wu=new ki,Ug=new ie,_s=new Ee,gs=new mr;class Ng extends Ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new bu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ug)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ki),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Dr),wu.copy(t.boundingBox).applyMatrix4(Dr),this.boundingBox.union(wu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new mr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Dr),gs.copy(t.boundingSphere).applyMatrix4(Dr),this.boundingSphere.union(gs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(_s.geometry=this.geometry,_s.material=this.material,_s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gs.copy(this.boundingSphere),gs.applyMatrix4(n),t.ray.intersectsSphere(gs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Dr),Tu.multiplyMatrices(n,Dr),_s.matrixWorld=Tu,_s.raycast(t,xa);for(let a=0,o=xa.length;a<o;a++){const c=xa[a];c.instanceId=s,c.object=this,e.push(c)}xa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new bu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ad(new Float32Array(i*this.count),i,this.count,qc,Bn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Jo=new I,Fg=new I,Og=new Ft;class Ri{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Jo.subVectors(n,e).cross(Fg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Jo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Og.getNormalMatrix(t),i=this.coplanarPoint(Jo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new mr,Bg=new At(.5,.5),va=new I;class nh{constructor(t=new Ri,e=new Ri,n=new Ri,i=new Ri,s=new Ri,a=new Ri){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$n,n=!1){const i=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],f=s[6],p=s[7],g=s[8],_=s[9],m=s[10],d=s[11],x=s[12],M=s[13],y=s[14],E=s[15];if(i[0].setComponents(l-a,p-h,d-g,E-x).normalize(),i[1].setComponents(l+a,p+h,d+g,E+x).normalize(),i[2].setComponents(l+o,p+u,d+_,E+M).normalize(),i[3].setComponents(l-o,p-u,d-_,E-M).normalize(),n)i[4].setComponents(c,f,m,y).normalize(),i[5].setComponents(l-c,p-f,d-m,E-y).normalize();else if(i[4].setComponents(l-c,p-f,d-m,E-y).normalize(),e===$n)i[5].setComponents(l+c,p+f,d+m,E+y).normalize();else if(e===Ka)i[5].setComponents(c,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(t){Yi.center.set(0,0,0);const e=Bg.distanceTo(t.center);return Yi.radius=.7071067811865476+e,Yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(va.x=i.normal.x>0?t.max.x:t.min.x,va.y=i.normal.y>0?t.max.y:t.min.y,va.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(va)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Va extends kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Za=new I,Ja=new I,Au=new ie,xs=new $s,Ma=new mr,Qo=new I,Ru=new I;class zg extends De{constructor(t=new je,e=new Va){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Za.fromBufferAttribute(e,i-1),Ja.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Za.distanceTo(Ja);t.setAttribute("lineDistance",new fe(n,1))}else Ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(i),Ma.radius+=s,t.ray.intersectsSphere(Ma)===!1)return;Au.copy(i).invert(),xs.copy(t.ray).applyMatrix4(Au);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const d=h.getX(_),x=h.getX(_+1),M=Sa(this,t,xs,c,d,x,_);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),d=Sa(this,t,xs,c,_,m,g-1);d&&e.push(d)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const d=Sa(this,t,xs,c,_,_+1,_);d&&e.push(d)}if(this.isLineLoop){const _=Sa(this,t,xs,c,g-1,p,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Sa(r,t,e,n,i,s,a){const o=r.geometry.attributes.position;if(Za.fromBufferAttribute(o,i),Ja.fromBufferAttribute(o,s),e.distanceSqToSegment(Za,Ja,Qo,Ru)>n)return;Qo.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Qo);if(!(l<t.near||l>t.far))return{distance:l,point:Ru.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Cu=new I,Pu=new I;class Du extends zg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Cu.fromBufferAttribute(e,i),Pu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Cu.distanceTo(Pu);t.setAttribute("lineDistance",new fe(n,1))}else Ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Br extends kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Lu=new ie,dc=new $s,ya=new mr,Ea=new I;class Ha extends De{constructor(t=new je,e=new Br){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(i),ya.radius+=s,t.ray.intersectsSphere(ya)===!1)return;Lu.copy(i).invert(),dc.copy(t.ray).applyMatrix4(Lu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=f,_=p;g<_;g++){const m=l.getX(g);Ea.fromBufferAttribute(u,m),Iu(Ea,m,c,i,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,_=p;g<_;g++)Ea.fromBufferAttribute(u,g),Iu(Ea,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Iu(r,t,e,n,i,s,a){const o=dc.distanceSqToPoint(r);if(o<e){const c=new I;dc.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ns extends qe{constructor(t,e,n=Qn,i,s,a,o=Be,c=Be,l,h=xi,u=1){if(h!==xi&&h!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Jc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class kg extends Ns{constructor(t,e=Qn,n=fr,i,s,a=Be,o=Be,c,l=xi){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,s,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Rd extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ks extends je{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],a=[];o(i),l(n),h(),this.setAttribute("position",new fe(s,3)),this.setAttribute("normal",new fe(s.slice(),3)),this.setAttribute("uv",new fe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const M=new I,y=new I,E=new I;for(let b=0;b<e.length;b+=3)p(e[b+0],M),p(e[b+1],y),p(e[b+2],E),c(M,y,E,x)}function c(x,M,y,E){const b=E+1,A=[];for(let C=0;C<=b;C++){A[C]=[];const v=x.clone().lerp(y,C/b),T=M.clone().lerp(y,C/b),P=b-C;for(let O=0;O<=P;O++)O===0&&C===b?A[C][O]=v:A[C][O]=v.clone().lerp(T,O/P)}for(let C=0;C<b;C++)for(let v=0;v<2*(b-C)-1;v++){const T=Math.floor(v/2);v%2===0?(f(A[C][T+1]),f(A[C+1][T]),f(A[C][T])):(f(A[C][T+1]),f(A[C+1][T+1]),f(A[C+1][T]))}}function l(x){const M=new I;for(let y=0;y<s.length;y+=3)M.x=s[y+0],M.y=s[y+1],M.z=s[y+2],M.normalize().multiplyScalar(x),s[y+0]=M.x,s[y+1]=M.y,s[y+2]=M.z}function h(){const x=new I;for(let M=0;M<s.length;M+=3){x.x=s[M+0],x.y=s[M+1],x.z=s[M+2];const y=m(x)/2/Math.PI+.5,E=d(x)/Math.PI+.5;a.push(y,1-E)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){const M=a[x+0],y=a[x+2],E=a[x+4],b=Math.max(M,y,E),A=Math.min(M,y,E);b>.9&&A<.1&&(M<.2&&(a[x+0]+=1),y<.2&&(a[x+2]+=1),E<.2&&(a[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function p(x,M){const y=x*3;M.x=t[y+0],M.y=t[y+1],M.z=t[y+2]}function g(){const x=new I,M=new I,y=new I,E=new I,b=new At,A=new At,C=new At;for(let v=0,T=0;v<s.length;v+=9,T+=6){x.set(s[v+0],s[v+1],s[v+2]),M.set(s[v+3],s[v+4],s[v+5]),y.set(s[v+6],s[v+7],s[v+8]),b.set(a[T+0],a[T+1]),A.set(a[T+2],a[T+3]),C.set(a[T+4],a[T+5]),E.copy(x).add(M).add(y).divideScalar(3);const P=m(E);_(b,T+0,x,P),_(A,T+2,M,P),_(C,T+4,y,P)}}function _(x,M,y,E){E<0&&x.x===1&&(a[M]=x.x-1),y.x===0&&y.z===0&&(a[M]=E/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.vertices,t.indices,t.radius,t.detail)}}class ih extends Ks{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ih(t.radius,t.detail)}}class rh extends Ks{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new rh(t.radius,t.detail)}}class go extends je{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,f=e/c,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const x=d*f-a;for(let M=0;M<l;M++){const y=M*u-s;g.push(y,-x,0),_.push(0,0,1),m.push(M/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let x=0;x<o;x++){const M=x+l*d,y=x+l*(d+1),E=x+1+l*(d+1),b=x+1+l*d;p.push(M,y,b),p.push(y,E,b)}this.setIndex(p),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new go(t.width,t.height,t.widthSegments,t.heightSegments)}}class sh extends je{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new I,f=new I,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const x=[],M=d/n;let y=0;d===0&&a===0?y=.5/e:d===n&&c===Math.PI&&(y=-.5/e);for(let E=0;E<=e;E++){const b=E/e;u.x=-t*Math.cos(i+b*s)*Math.sin(a+M*o),u.y=t*Math.cos(a+M*o),u.z=t*Math.sin(i+b*s)*Math.sin(a+M*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(b+y,1-M),x.push(l++)}h.push(x)}for(let d=0;d<n;d++)for(let x=0;x<e;x++){const M=h[d][x+1],y=h[d][x],E=h[d+1][x],b=h[d+1][x+1];(d!==0||a>0)&&p.push(M,y,b),(d!==n-1||c<Math.PI)&&p.push(y,E,b)}this.setIndex(p),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ah extends Ks{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ah(t.radius,t.detail)}}class oh extends je{constructor(t=1,e=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],c=[],l=[],h=[],u=new I,f=new I,p=new I,g=new I,_=new I,m=new I,d=new I;for(let M=0;M<=n;++M){const y=M/n*s*Math.PI*2;x(y,s,a,t,p),x(y+.01,s,a,t,g),m.subVectors(g,p),d.addVectors(g,p),_.crossVectors(m,d),d.crossVectors(_,m),_.normalize(),d.normalize();for(let E=0;E<=i;++E){const b=E/i*Math.PI*2,A=-e*Math.cos(b),C=e*Math.sin(b);u.x=p.x+(A*d.x+C*_.x),u.y=p.y+(A*d.y+C*_.y),u.z=p.z+(A*d.z+C*_.z),c.push(u.x,u.y,u.z),f.subVectors(u,p).normalize(),l.push(f.x,f.y,f.z),h.push(M/n),h.push(E/i)}}for(let M=1;M<=n;M++)for(let y=1;y<=i;y++){const E=(i+1)*(M-1)+(y-1),b=(i+1)*M+(y-1),A=(i+1)*M+y,C=(i+1)*(M-1)+y;o.push(E,b,C),o.push(b,A,C)}this.setIndex(o),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(h,2));function x(M,y,E,b,A){const C=Math.cos(M),v=Math.sin(M),T=E/y*M,P=Math.cos(T);A.x=b*(2+P)*.5*C,A.y=b*(2+P)*v*.5,A.z=b*Math.sin(T)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oh(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Vg extends ti{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pc extends kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_o,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cd extends kn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new It(16777215),this.specular=new It(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_o,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Hg extends kn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_o,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gg extends kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Q_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wg extends kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const As={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Xg{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Pd=new Xg;class os{constructor(t){this.manager=t!==void 0?t:Pd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}os.DEFAULT_MATERIAL_NAME="__DEFAULT";const li={};class qg extends Error{constructor(t,e){super(t),this.response=e}}class Dd extends os{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=As.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(li[t]!==void 0){li[t].push({onLoad:e,onProgress:n,onError:i});return}li[t]=[],li[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ct("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=li[t],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let _=0;const m=new ReadableStream({start(d){x();function x(){u.read().then(({done:M,value:y})=>{if(M)d.close();else{_+=y.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let b=0,A=h.length;b<A;b++){const C=h[b];C.onProgress&&C.onProgress(E)}d.enqueue(y),x()}},M=>{d.error(M)})}}});return new Response(m)}else throw new qg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{As.add(`file:${t}`,l);const h=li[t];delete li[t];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=li[t];if(h===void 0)throw this.manager.itemError(t),l;delete li[t];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onError&&p.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Lr=new WeakMap;class Yg extends os{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=As.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let u=Lr.get(a);u===void 0&&(u=[],Lr.set(a,u)),u.push({onLoad:e,onError:i})}return a}const o=Is("img");function c(){h(),e&&e(this);const u=Lr.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onLoad&&p.onLoad(this)}Lr.delete(this),s.manager.itemEnd(t)}function l(u){h(),i&&i(u),As.remove(`image:${t}`);const f=Lr.get(this)||[];for(let p=0;p<f.length;p++){const g=f[p];g.onError&&g.onError(u)}Lr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),As.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class jg extends os{constructor(t){super(t)}load(t,e,n,i){const s=new qe,a=new Yg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class lh extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const tl=new ie,Uu=new I,Nu=new I;class Ld{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nh,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Uu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uu),Nu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nu),e.updateMatrixWorld(),tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class $g extends Ld{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0}}class ch extends lh{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new $g}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class hh extends bd{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Kg extends Ld{constructor(){super(new hh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Id extends lh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Kg}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Ud extends lh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zg{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Jg extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Fu=new ie;class Nd{constructor(t,e,n=0,i=1/0){this.ray=new $s(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Qc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Yt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Fu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fu),this}intersectObject(t,e=!0,n=[]){return mc(t,this,n,e),n.sort(Ou),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)mc(t[i],this,n,e);return n.sort(Ou),n}}function Ou(r,t){return r.distance-t.distance}function mc(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)mc(s[a],t,e,!0)}}class Bu{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ht(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ht(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Qg extends pr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Ct("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function zu(r,t,e,n){const i=t0(n);switch(e){case md:return r*t;case qc:return r*t/i.components*i.byteLength;case Yc:return r*t/i.components*i.byteLength;case Kr:return r*t*2/i.components*i.byteLength;case jc:return r*t*2/i.components*i.byteLength;case _d:return r*t*3/i.components*i.byteLength;case zn:return r*t*4/i.components*i.byteLength;case $c:return r*t*4/i.components*i.byteLength;case Fa:case Oa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ba:case za:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Nl:case Ol:return Math.max(r,16)*Math.max(t,8)/4;case Ul:case Fl:return Math.max(r,8)*Math.max(t,8)/2;case Bl:case zl:case Vl:case Hl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case kl:case Gl:case Wl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case jl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case $l:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ql:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case tc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ec:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case nc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case ic:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case rc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case sc:case ac:case oc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case lc:case cc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case hc:case uc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function t0(r){switch(r){case xn:case ud:return{byteLength:1,components:1};case Ds:case fd:case gi:return{byteLength:2,components:1};case Wc:case Xc:return{byteLength:2,components:4};case Qn:case Gc:case Bn:return{byteLength:4,components:1};case dd:case pd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vc}}));typeof window<"u"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vc);function Fd(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function e0(r){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=r.createBuffer();r.bindBuffer(c,f),r.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=r.SHORT;else if(l instanceof Uint32Array)p=r.UNSIGNED_INT;else if(l instanceof Int32Array)p=r.INT;else if(l instanceof Int8Array)p=r.BYTE;else if(l instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,o),u.length===0)r.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(r.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var n0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,r0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,s0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,o0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,c0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,u0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,m0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,T0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,w0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,A0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L0="gl_FragColor = linearToOutputTexel( gl_FragColor );",I0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,O0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,W0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,j0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Z0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ex=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ix=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ax=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ox=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ux=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,px=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_x=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ax=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Px=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ox=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Bx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$x=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ev=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,av=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ov=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_v=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ev=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Iv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:n0,alphahash_pars_fragment:i0,alphamap_fragment:r0,alphamap_pars_fragment:s0,alphatest_fragment:a0,alphatest_pars_fragment:o0,aomap_fragment:l0,aomap_pars_fragment:c0,batching_pars_vertex:h0,batching_vertex:u0,begin_vertex:f0,beginnormal_vertex:d0,bsdfs:p0,iridescence_fragment:m0,bumpmap_pars_fragment:_0,clipping_planes_fragment:g0,clipping_planes_pars_fragment:x0,clipping_planes_pars_vertex:v0,clipping_planes_vertex:M0,color_fragment:S0,color_pars_fragment:y0,color_pars_vertex:E0,color_vertex:b0,common:T0,cube_uv_reflection_fragment:w0,defaultnormal_vertex:A0,displacementmap_pars_vertex:R0,displacementmap_vertex:C0,emissivemap_fragment:P0,emissivemap_pars_fragment:D0,colorspace_fragment:L0,colorspace_pars_fragment:I0,envmap_fragment:U0,envmap_common_pars_fragment:N0,envmap_pars_fragment:F0,envmap_pars_vertex:O0,envmap_physical_pars_fragment:j0,envmap_vertex:B0,fog_vertex:z0,fog_pars_vertex:k0,fog_fragment:V0,fog_pars_fragment:H0,gradientmap_pars_fragment:G0,lightmap_pars_fragment:W0,lights_lambert_fragment:X0,lights_lambert_pars_fragment:q0,lights_pars_begin:Y0,lights_toon_fragment:$0,lights_toon_pars_fragment:K0,lights_phong_fragment:Z0,lights_phong_pars_fragment:J0,lights_physical_fragment:Q0,lights_physical_pars_fragment:tx,lights_fragment_begin:ex,lights_fragment_maps:nx,lights_fragment_end:ix,logdepthbuf_fragment:rx,logdepthbuf_pars_fragment:sx,logdepthbuf_pars_vertex:ax,logdepthbuf_vertex:ox,map_fragment:lx,map_pars_fragment:cx,map_particle_fragment:hx,map_particle_pars_fragment:ux,metalnessmap_fragment:fx,metalnessmap_pars_fragment:dx,morphinstance_vertex:px,morphcolor_vertex:mx,morphnormal_vertex:_x,morphtarget_pars_vertex:gx,morphtarget_vertex:xx,normal_fragment_begin:vx,normal_fragment_maps:Mx,normal_pars_fragment:Sx,normal_pars_vertex:yx,normal_vertex:Ex,normalmap_pars_fragment:bx,clearcoat_normal_fragment_begin:Tx,clearcoat_normal_fragment_maps:wx,clearcoat_pars_fragment:Ax,iridescence_pars_fragment:Rx,opaque_fragment:Cx,packing:Px,premultiplied_alpha_fragment:Dx,project_vertex:Lx,dithering_fragment:Ix,dithering_pars_fragment:Ux,roughnessmap_fragment:Nx,roughnessmap_pars_fragment:Fx,shadowmap_pars_fragment:Ox,shadowmap_pars_vertex:Bx,shadowmap_vertex:zx,shadowmask_pars_fragment:kx,skinbase_vertex:Vx,skinning_pars_vertex:Hx,skinning_vertex:Gx,skinnormal_vertex:Wx,specularmap_fragment:Xx,specularmap_pars_fragment:qx,tonemapping_fragment:Yx,tonemapping_pars_fragment:jx,transmission_fragment:$x,transmission_pars_fragment:Kx,uv_pars_fragment:Zx,uv_pars_vertex:Jx,uv_vertex:Qx,worldpos_vertex:tv,background_vert:ev,background_frag:nv,backgroundCube_vert:iv,backgroundCube_frag:rv,cube_vert:sv,cube_frag:av,depth_vert:ov,depth_frag:lv,distance_vert:cv,distance_frag:hv,equirect_vert:uv,equirect_frag:fv,linedashed_vert:dv,linedashed_frag:pv,meshbasic_vert:mv,meshbasic_frag:_v,meshlambert_vert:gv,meshlambert_frag:xv,meshmatcap_vert:vv,meshmatcap_frag:Mv,meshnormal_vert:Sv,meshnormal_frag:yv,meshphong_vert:Ev,meshphong_frag:bv,meshphysical_vert:Tv,meshphysical_frag:wv,meshtoon_vert:Av,meshtoon_frag:Rv,points_vert:Cv,points_frag:Pv,shadow_vert:Dv,shadow_frag:Lv,sprite_vert:Iv,sprite_frag:Uv},ht={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Yn={basic:{uniforms:Ke([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Ke([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new It(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Ke([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Ke([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Ke([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new It(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Ke([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Ke([ht.points,ht.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Ke([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Ke([ht.common,ht.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Ke([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Ke([ht.sprite,ht.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distance:{uniforms:Ke([ht.common,ht.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distance_vert,fragmentShader:Ot.distance_frag},shadow:{uniforms:Ke([ht.lights,ht.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Yn.physical={uniforms:Ke([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const ba={r:0,b:0,g:0},ji=new bn,Nv=new ie;function Fv(r,t,e,n,i,s,a){const o=new It(0);let c=s===!0?0:1,l,h,u=null,f=0,p=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function _(M){let y=!1;const E=g(M);E===null?d(o,c):E&&E.isColor&&(d(E,1),y=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(M,y){const E=g(y);E&&(E.isCubeTexture||E.mapping===mo)?(h===void 0&&(h=new Ee(new as(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:Jr(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ji.copy(y.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Nv.makeRotationFromEuler(ji)),h.material.toneMapped=Wt.getTransfer(E.colorSpace)!==te,(u!==E||f!==E.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,p=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Ee(new go(2,2),new ti({name:"BackgroundMaterial",uniforms:Jr(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Wt.getTransfer(E.colorSpace)!==te,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||p!==r.toneMapping)&&(l.material.needsUpdate=!0,u=E,f=E.version,p=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function d(M,y){M.getRGB(ba,Ed(r)),n.buffers.color.setClear(ba.r,ba.g,ba.b,y,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,y=1){o.set(M),c=y,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,d(o,c)},render:_,addToRenderList:m,dispose:x}}function Ov(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(T,P,O,F,X){let W=!1;const k=u(F,O,P);s!==k&&(s=k,l(s.object)),W=p(T,F,O,X),W&&g(T,F,O,X),X!==null&&t.update(X,r.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,y(T,P,O,F),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return r.createVertexArray()}function l(T){return r.bindVertexArray(T)}function h(T){return r.deleteVertexArray(T)}function u(T,P,O){const F=O.wireframe===!0;let X=n[T.id];X===void 0&&(X={},n[T.id]=X);let W=X[P.id];W===void 0&&(W={},X[P.id]=W);let k=W[F];return k===void 0&&(k=f(c()),W[F]=k),k}function f(T){const P=[],O=[],F=[];for(let X=0;X<e;X++)P[X]=0,O[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:F,object:T,attributes:{},index:null}}function p(T,P,O,F){const X=s.attributes,W=P.attributes;let k=0;const B=O.getAttributes();for(const Y in B)if(B[Y].location>=0){const nt=X[Y];let it=W[Y];if(it===void 0&&(Y==="instanceMatrix"&&T.instanceMatrix&&(it=T.instanceMatrix),Y==="instanceColor"&&T.instanceColor&&(it=T.instanceColor)),nt===void 0||nt.attribute!==it||it&&nt.data!==it.data)return!0;k++}return s.attributesNum!==k||s.index!==F}function g(T,P,O,F){const X={},W=P.attributes;let k=0;const B=O.getAttributes();for(const Y in B)if(B[Y].location>=0){let nt=W[Y];nt===void 0&&(Y==="instanceMatrix"&&T.instanceMatrix&&(nt=T.instanceMatrix),Y==="instanceColor"&&T.instanceColor&&(nt=T.instanceColor));const it={};it.attribute=nt,nt&&nt.data&&(it.data=nt.data),X[Y]=it,k++}s.attributes=X,s.attributesNum=k,s.index=F}function _(){const T=s.newAttributes;for(let P=0,O=T.length;P<O;P++)T[P]=0}function m(T){d(T,0)}function d(T,P){const O=s.newAttributes,F=s.enabledAttributes,X=s.attributeDivisors;O[T]=1,F[T]===0&&(r.enableVertexAttribArray(T),F[T]=1),X[T]!==P&&(r.vertexAttribDivisor(T,P),X[T]=P)}function x(){const T=s.newAttributes,P=s.enabledAttributes;for(let O=0,F=P.length;O<F;O++)P[O]!==T[O]&&(r.disableVertexAttribArray(O),P[O]=0)}function M(T,P,O,F,X,W,k){k===!0?r.vertexAttribIPointer(T,P,O,X,W):r.vertexAttribPointer(T,P,O,F,X,W)}function y(T,P,O,F){_();const X=F.attributes,W=O.getAttributes(),k=P.defaultAttributeValues;for(const B in W){const Y=W[B];if(Y.location>=0){let st=X[B];if(st===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(st=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(st=T.instanceColor)),st!==void 0){const nt=st.normalized,it=st.itemSize,bt=t.get(st);if(bt===void 0)continue;const Lt=bt.buffer,kt=bt.type,Gt=bt.bytesPerElement,$=kt===r.INT||kt===r.UNSIGNED_INT||st.gpuType===Gc;if(st.isInterleavedBufferAttribute){const J=st.data,mt=J.stride,Nt=st.offset;if(J.isInstancedInterleavedBuffer){for(let xt=0;xt<Y.locationSize;xt++)d(Y.location+xt,J.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let xt=0;xt<Y.locationSize;xt++)m(Y.location+xt);r.bindBuffer(r.ARRAY_BUFFER,Lt);for(let xt=0;xt<Y.locationSize;xt++)M(Y.location+xt,it/Y.locationSize,kt,nt,mt*Gt,(Nt+it/Y.locationSize*xt)*Gt,$)}else{if(st.isInstancedBufferAttribute){for(let J=0;J<Y.locationSize;J++)d(Y.location+J,st.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let J=0;J<Y.locationSize;J++)m(Y.location+J);r.bindBuffer(r.ARRAY_BUFFER,Lt);for(let J=0;J<Y.locationSize;J++)M(Y.location+J,it/Y.locationSize,kt,nt,it*Gt,it/Y.locationSize*J*Gt,$)}}else if(k!==void 0){const nt=k[B];if(nt!==void 0)switch(nt.length){case 2:r.vertexAttrib2fv(Y.location,nt);break;case 3:r.vertexAttrib3fv(Y.location,nt);break;case 4:r.vertexAttrib4fv(Y.location,nt);break;default:r.vertexAttrib1fv(Y.location,nt)}}}}x()}function E(){C();for(const T in n){const P=n[T];for(const O in P){const F=P[O];for(const X in F)h(F[X].object),delete F[X];delete P[O]}delete n[T]}}function b(T){if(n[T.id]===void 0)return;const P=n[T.id];for(const O in P){const F=P[O];for(const X in F)h(F[X].object),delete F[X];delete P[O]}delete n[T.id]}function A(T){for(const P in n){const O=n[P];if(O[T.id]===void 0)continue;const F=O[T.id];for(const X in F)h(F[X].object),delete F[X];delete O[T.id]}}function C(){v(),a=!0,s!==i&&(s=i,l(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:v,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function Bv(r,t,e){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function zv(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==zn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==xn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Bn&&!C)}function c(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Ct("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:y,maxSamples:E,samples:b}}function kv(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Ri,o=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{const x=s?0:n,M=x*4;let y=d.clippingState||null;c.value=y,y=h(g,f,M,p);for(let E=0;E!==M;++E)y[E]=e[E];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=p+_*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,y=p;M!==_;++M,y+=4)a.copy(u[M]).applyMatrix4(x,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Vv(r){let t=new WeakMap;function e(a,o){return o===Dl?a.mapping=fr:o===Ll&&(a.mapping=$r),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Dl||o===Ll)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new wd(c.height);return l.fromEquirectangularTexture(r,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Pi=4,ku=[.125,.215,.35,.446,.526,.582],tr=20,Hv=256,vs=new hh,Vu=new It;let el=null,nl=0,il=0,rl=!1;const Gv=new I;class _c{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){const{size:a=256,position:o=Gv}=s;el=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(el,nl,il),this._renderer.xr.enabled=rl,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fr||t.mapping===$r?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),el=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:gi,format:zn,colorSpace:Zr,depthBuffer:!1},i=Hu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hu(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Wv(s)),this._blurMaterial=qv(s,t,e),this._ggxMaterial=Xv(s,t,e)}return i}_compileMaterial(t){const e=new Ee(new je,t);this._renderer.compile(e,vs)}_sceneToCubeUV(t,e,n,i,s){const c=new sn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Vu),u.toneMapping=Zn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ee(new as,new Md({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let d=!1;const x=t.background;x?x.isColor&&(m.color.copy(x),t.background=null,d=!0):(m.color.copy(Vu),d=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[M],s.y,s.z)):y===1?(c.up.set(0,0,l[M]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[M],s.z)):(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[M]));const E=this._cubeSize;Ir(i,y*E,M>2?E:0,E,E),u.setRenderTarget(i),d&&u.render(_,c),u.render(t,c)}u.toneMapping=p,u.autoClear=f,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===fr||t.mapping===$r;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;Ir(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,vs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=0+l*1.25,p=u*f,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Pi?n-g+Pi:0),d=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=g-e,Ir(s,m,d,3*_,2*_),i.setRenderTarget(s),i.render(o,vs),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,Ir(t,m,d,3*_,2*_),i.setRenderTarget(t),i.render(o,vs)}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Yt("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=l;const f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*tr-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):tr;m>tr&&Ct(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${tr}`);const d=[];let x=0;for(let A=0;A<tr;++A){const C=A/_,v=Math.exp(-C*C/2);d.push(v),A===0?x+=v:A<m&&(x+=2*v)}for(let A=0;A<d.length;A++)d[A]=d[A]/x;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const y=this._sizeLods[i],E=3*y*(i>M-Pi?i-M+Pi:0),b=4*(this._cubeSize-y);Ir(e,E,b,3*y,2*y),c.setRenderTarget(e),c.render(u,vs)}}function Wv(r){const t=[],e=[],n=[];let i=r;const s=r-Pi+1+ku.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-Pi?c=ku[a-r+Pi-1]:a===0&&(c=0),e.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,x=new Float32Array(_*g*p),M=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let b=0;b<p;b++){const A=b%3*2/3-1,C=b>2?0:-1,v=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];x.set(v,_*g*b),M.set(f,m*g*b);const T=[b,b,b,b,b,b];y.set(T,d*g*b)}const E=new je;E.setAttribute("position",new yn(x,_)),E.setAttribute("uv",new yn(M,m)),E.setAttribute("faceIndex",new yn(y,d)),n.push(new Ee(E,null)),i>Pi&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Hu(r,t,e){const n=new Jn(r,t,e);return n.texture.mapping=mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Xv(r,t,e){return new ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Hv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function qv(r,t,e){const n=new Float32Array(tr),i=new I(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Gu(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Wu(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function xo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yv(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Dl||c===Ll,h=c===fr||c===$r;if(l||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new _c(r)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new _c(r)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function jv(r){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Us("WebGLRenderer: "+n+" extension not supported."),i}}}function $v(r,t,e,n){const i={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const p in f)t.update(f[p],r.ARRAY_BUFFER)}function l(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let M=0,y=x.length;M<y;M+=3){const E=x[M+0],b=x[M+1],A=x[M+2];f.push(E,b,b,A,A,E)}}else if(g!==void 0){const x=g.array;_=g.version;for(let M=0,y=x.length/3-1;M<y;M+=3){const E=M+0,b=M+1,A=M+2;f.push(E,b,b,A,A,E)}}else return;const m=new(gd(f)?yd:Sd)(f,1);m.version=_;const d=s.get(u);d&&t.remove(d),s.set(u,m)}function h(u){const f=s.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Kv(r,t,e){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,p){r.drawElements(n,p,s,f*a),e.update(p,n,1)}function l(f,p,g){g!==0&&(r.drawElementsInstanced(n,p,s,f*a,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,_,0,g);let d=0;for(let x=0;x<g;x++)d+=p[x]*_[x];e.update(d,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Zv(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:Yt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Jv(r,t,e){const n=new WeakMap,i=new Me;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};var p=T;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let E=o.attributes.position.count*y,b=1;E>t.maxTextureSize&&(b=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const A=new Float32Array(E*b*4*u),C=new xd(A,E,b,u);C.type=Bn,C.needsUpdate=!0;const v=y*4;for(let P=0;P<u;P++){const O=d[P],F=x[P],X=M[P],W=E*b*4*P;for(let k=0;k<O.count;k++){const B=k*v;g===!0&&(i.fromBufferAttribute(O,k),A[W+B+0]=i.x,A[W+B+1]=i.y,A[W+B+2]=i.z,A[W+B+3]=0),_===!0&&(i.fromBufferAttribute(F,k),A[W+B+4]=i.x,A[W+B+5]=i.y,A[W+B+6]=i.z,A[W+B+7]=0),m===!0&&(i.fromBufferAttribute(X,k),A[W+B+8]=i.x,A[W+B+9]=i.y,A[W+B+10]=i.z,A[W+B+11]=X.itemSize===4?i.w:1)}}f={count:u,texture:C,size:new At(E,b)},n.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Qv(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}const tM={[rd]:"LINEAR_TONE_MAPPING",[sd]:"REINHARD_TONE_MAPPING",[ad]:"CINEON_TONE_MAPPING",[Hc]:"ACES_FILMIC_TONE_MAPPING",[ld]:"AGX_TONE_MAPPING",[cd]:"NEUTRAL_TONE_MAPPING",[od]:"CUSTOM_TONE_MAPPING"};function eM(r,t,e,n,i){const s=new Jn(t,e,{type:r,depthBuffer:n,stencilBuffer:i}),a=new Jn(t,e,{type:gi,depthBuffer:!1,stencilBuffer:!1}),o=new je;o.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new fe([0,2,0,0,2,0],2));const c=new Vg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Ee(o,c),h=new hh(-1,1,1,-1,0,1);let u=null,f=null,p=!1,g,_=null,m=[],d=!1;this.setSize=function(x,M){s.setSize(x,M),a.setSize(x,M);for(let y=0;y<m.length;y++){const E=m[y];E.setSize&&E.setSize(x,M)}},this.setEffects=function(x){m=x,d=m.length>0&&m[0].isRenderPass===!0;const M=s.width,y=s.height;for(let E=0;E<m.length;E++){const b=m[E];b.setSize&&b.setSize(M,y)}},this.begin=function(x,M){if(p||x.toneMapping===Zn&&m.length===0)return!1;if(_=M,M!==null){const y=M.width,E=M.height;(s.width!==y||s.height!==E)&&this.setSize(y,E)}return d===!1&&x.setRenderTarget(s),g=x.toneMapping,x.toneMapping=Zn,!0},this.hasRenderPass=function(){return d},this.end=function(x,M){x.toneMapping=g,p=!0;let y=s,E=a;for(let b=0;b<m.length;b++){const A=m[b];if(A.enabled!==!1&&(A.render(x,E,y,M),A.needsSwap!==!1)){const C=y;y=E,E=C}}if(u!==x.outputColorSpace||f!==x.toneMapping){u=x.outputColorSpace,f=x.toneMapping,c.defines={},Wt.getTransfer(u)===te&&(c.defines.SRGB_TRANSFER="");const b=tM[f];b&&(c.defines[b]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(_),x.render(l,h),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Od=new qe,gc=new Ns(1,1),Bd=new xd,zd=new _g,kd=new Td,Xu=[],qu=[],Yu=new Float32Array(16),ju=new Float32Array(9),$u=new Float32Array(4);function ls(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Xu[i];if(s===void 0&&(s=new Float32Array(i),Xu[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Le(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ie(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function vo(r,t){let e=qu[t];e===void 0&&(e=new Int32Array(t),qu[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function nM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function iM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;r.uniform2fv(this.addr,t),Ie(e,t)}}function rM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;r.uniform3fv(this.addr,t),Ie(e,t)}}function sM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;r.uniform4fv(this.addr,t),Ie(e,t)}}function aM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;$u.set(n),r.uniformMatrix2fv(this.addr,!1,$u),Ie(e,n)}}function oM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;ju.set(n),r.uniformMatrix3fv(this.addr,!1,ju),Ie(e,n)}}function lM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;Yu.set(n),r.uniformMatrix4fv(this.addr,!1,Yu),Ie(e,n)}}function cM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function hM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;r.uniform2iv(this.addr,t),Ie(e,t)}}function uM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;r.uniform3iv(this.addr,t),Ie(e,t)}}function fM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;r.uniform4iv(this.addr,t),Ie(e,t)}}function dM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function pM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;r.uniform2uiv(this.addr,t),Ie(e,t)}}function mM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;r.uniform3uiv(this.addr,t),Ie(e,t)}}function _M(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;r.uniform4uiv(this.addr,t),Ie(e,t)}}function gM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(gc.compareFunction=e.isReversedDepthBuffer()?Zc:Kc,s=gc):s=Od,e.setTexture2D(t||s,i)}function xM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||zd,i)}function vM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||kd,i)}function MM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Bd,i)}function SM(r){switch(r){case 5126:return nM;case 35664:return iM;case 35665:return rM;case 35666:return sM;case 35674:return aM;case 35675:return oM;case 35676:return lM;case 5124:case 35670:return cM;case 35667:case 35671:return hM;case 35668:case 35672:return uM;case 35669:case 35673:return fM;case 5125:return dM;case 36294:return pM;case 36295:return mM;case 36296:return _M;case 35678:case 36198:case 36298:case 36306:case 35682:return gM;case 35679:case 36299:case 36307:return xM;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return MM}}function yM(r,t){r.uniform1fv(this.addr,t)}function EM(r,t){const e=ls(t,this.size,2);r.uniform2fv(this.addr,e)}function bM(r,t){const e=ls(t,this.size,3);r.uniform3fv(this.addr,e)}function TM(r,t){const e=ls(t,this.size,4);r.uniform4fv(this.addr,e)}function wM(r,t){const e=ls(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function AM(r,t){const e=ls(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function RM(r,t){const e=ls(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function CM(r,t){r.uniform1iv(this.addr,t)}function PM(r,t){r.uniform2iv(this.addr,t)}function DM(r,t){r.uniform3iv(this.addr,t)}function LM(r,t){r.uniform4iv(this.addr,t)}function IM(r,t){r.uniform1uiv(this.addr,t)}function UM(r,t){r.uniform2uiv(this.addr,t)}function NM(r,t){r.uniform3uiv(this.addr,t)}function FM(r,t){r.uniform4uiv(this.addr,t)}function OM(r,t,e){const n=this.cache,i=t.length,s=vo(e,i);Le(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=gc:a=Od;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function BM(r,t,e){const n=this.cache,i=t.length,s=vo(e,i);Le(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||zd,s[a])}function zM(r,t,e){const n=this.cache,i=t.length,s=vo(e,i);Le(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||kd,s[a])}function kM(r,t,e){const n=this.cache,i=t.length,s=vo(e,i);Le(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Bd,s[a])}function VM(r){switch(r){case 5126:return yM;case 35664:return EM;case 35665:return bM;case 35666:return TM;case 35674:return wM;case 35675:return AM;case 35676:return RM;case 5124:case 35670:return CM;case 35667:case 35671:return PM;case 35668:case 35672:return DM;case 35669:case 35673:return LM;case 5125:return IM;case 36294:return UM;case 36295:return NM;case 36296:return FM;case 35678:case 36198:case 36298:case 36306:case 35682:return OM;case 35679:case 36299:case 36307:return BM;case 35680:case 36300:case 36308:case 36293:return zM;case 36289:case 36303:case 36311:case 36292:return kM}}class HM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=SM(e.type)}}class GM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=VM(e.type)}}class WM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const sl=/(\w+)(\])?(\[|\.)?/g;function Ku(r,t){r.seq.push(t),r.map[t.id]=t}function XM(r,t,e){const n=r.name,i=n.length;for(sl.lastIndex=0;;){const s=sl.exec(n),a=sl.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Ku(e,l===void 0?new HM(o,r,t):new GM(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new WM(o),Ku(e,u)),e=u}}}class Ga{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);XM(o,c,this)}const i=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Zu(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const qM=37297;let YM=0;function jM(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ju=new Ft;function $M(r){Wt._getMatrix(Ju,Wt.workingColorSpace,r);const t=`mat3( ${Ju.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(r)){case $a:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Qu(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+jM(r.getShaderSource(t),o)}else return s}function KM(r,t){const e=$M(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const ZM={[rd]:"Linear",[sd]:"Reinhard",[ad]:"Cineon",[Hc]:"ACESFilmic",[ld]:"AgX",[cd]:"Neutral",[od]:"Custom"};function JM(r,t){const e=ZM[t];return e===void 0?(Ct("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ta=new I;function QM(){Wt.getLuminanceCoefficients(Ta);const r=Ta.x.toFixed(4),t=Ta.y.toFixed(4),e=Ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function eS(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function nS(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function bs(r){return r!==""}function tf(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ef(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const iS=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(r){return r.replace(iS,sS)}const rS=new Map;function sS(r,t){let e=Ot[t];if(e===void 0){const n=rS.get(t);if(n!==void 0)e=Ot[n],Ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return xc(e)}const aS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nf(r){return r.replace(aS,oS)}function oS(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function rf(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const lS={[Na]:"SHADOWMAP_TYPE_PCF",[ys]:"SHADOWMAP_TYPE_VSM"};function cS(r){return lS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const hS={[fr]:"ENVMAP_TYPE_CUBE",[$r]:"ENVMAP_TYPE_CUBE",[mo]:"ENVMAP_TYPE_CUBE_UV"};function uS(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":hS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const fS={[$r]:"ENVMAP_MODE_REFRACTION"};function dS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":fS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pS={[po]:"ENVMAP_BLENDING_MULTIPLY",[K_]:"ENVMAP_BLENDING_MIX",[Z_]:"ENVMAP_BLENDING_ADD"};function mS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":pS[r.combine]||"ENVMAP_BLENDING_NONE"}function _S(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function gS(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=cS(e),l=uS(e),h=dS(e),u=mS(e),f=_S(e),p=tS(e),g=eS(s),_=i.createProgram();let m,d,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bs).join(`
`),d.length>0&&(d+=`
`)):(m=[rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),d=[rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Zn?JM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,KM("linearToOutputTexel",e.outputColorSpace),QM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bs).join(`
`)),a=xc(a),a=tf(a,e),a=ef(a,e),o=xc(o),o=tf(o,e),o=ef(o,e),a=nf(a),o=nf(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===su?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=x+m+a,y=x+d+o,E=Zu(i,i.VERTEX_SHADER,M),b=Zu(i,i.FRAGMENT_SHADER,y);i.attachShader(_,E),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(P){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(_)||"",F=i.getShaderInfoLog(E)||"",X=i.getShaderInfoLog(b)||"",W=O.trim(),k=F.trim(),B=X.trim();let Y=!0,st=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,b);else{const nt=Qu(i,E,"vertex"),it=Qu(i,b,"fragment");Yt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+nt+`
`+it)}else W!==""?Ct("WebGLProgram: Program Info Log:",W):(k===""||B==="")&&(st=!1);st&&(P.diagnostics={runnable:Y,programLog:W,vertexShader:{log:k,prefix:m},fragmentShader:{log:B,prefix:d}})}i.deleteShader(E),i.deleteShader(b),C=new Ga(i,_),v=nS(i,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(_,qM)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=YM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=b,this}let xS=0;class vS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new MS(t),e.set(t,n)),n}}class MS{constructor(t){this.id=xS++,this.code=t,this.usedTimes=0}}function SS(r,t,e,n,i,s,a){const o=new Qc,c=new vS,l=new Set,h=[],u=new Map,f=i.logarithmicDepthBuffer;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,T,P,O,F){const X=O.fog,W=F.geometry,k=v.isMeshStandardMaterial?O.environment:null,B=(v.isMeshStandardMaterial?e:t).get(v.envMap||k),Y=B&&B.mapping===mo?B.image.height:null,st=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&Ct("WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const nt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,it=nt!==void 0?nt.length:0;let bt=0;W.morphAttributes.position!==void 0&&(bt=1),W.morphAttributes.normal!==void 0&&(bt=2),W.morphAttributes.color!==void 0&&(bt=3);let Lt,kt,Gt,$;if(st){const Jt=Yn[st];Lt=Jt.vertexShader,kt=Jt.fragmentShader}else Lt=v.vertexShader,kt=v.fragmentShader,c.update(v),Gt=c.getVertexShaderID(v),$=c.getFragmentShaderID(v);const J=r.getRenderTarget(),mt=r.state.buffers.depth.getReversed(),Nt=F.isInstancedMesh===!0,xt=F.isBatchedMesh===!0,jt=!!v.map,Ue=!!v.matcap,qt=!!B,Zt=!!v.aoMap,re=!!v.lightMap,Bt=!!v.bumpMap,Te=!!v.normalMap,D=!!v.displacementMap,we=!!v.emissiveMap,Kt=!!v.metalnessMap,ce=!!v.roughnessMap,Mt=v.anisotropy>0,R=v.clearcoat>0,S=v.dispersion>0,U=v.iridescence>0,j=v.sheen>0,Z=v.transmission>0,q=Mt&&!!v.anisotropyMap,yt=R&&!!v.clearcoatMap,at=R&&!!v.clearcoatNormalMap,vt=R&&!!v.clearcoatRoughnessMap,Dt=U&&!!v.iridescenceMap,tt=U&&!!v.iridescenceThicknessMap,lt=j&&!!v.sheenColorMap,gt=j&&!!v.sheenRoughnessMap,St=!!v.specularMap,ot=!!v.specularColorMap,zt=!!v.specularIntensityMap,L=Z&&!!v.transmissionMap,ft=Z&&!!v.thicknessMap,et=!!v.gradientMap,dt=!!v.alphaMap,Q=v.alphaTest>0,K=!!v.alphaHash,rt=!!v.extensions;let Ut=Zn;v.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ut=r.toneMapping);const he={shaderID:st,shaderType:v.type,shaderName:v.name,vertexShader:Lt,fragmentShader:kt,defines:v.defines,customVertexShaderID:Gt,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:xt,batchingColor:xt&&F._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&F.instanceColor!==null,instancingMorph:Nt&&F.morphTexture!==null,outputColorSpace:J===null?r.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Zr,alphaToCoverage:!!v.alphaToCoverage,map:jt,matcap:Ue,envMap:qt,envMapMode:qt&&B.mapping,envMapCubeUVHeight:Y,aoMap:Zt,lightMap:re,bumpMap:Bt,normalMap:Te,displacementMap:D,emissiveMap:we,normalMapObjectSpace:Te&&v.normalMapType===tg,normalMapTangentSpace:Te&&v.normalMapType===_o,metalnessMap:Kt,roughnessMap:ce,anisotropy:Mt,anisotropyMap:q,clearcoat:R,clearcoatMap:yt,clearcoatNormalMap:at,clearcoatRoughnessMap:vt,dispersion:S,iridescence:U,iridescenceMap:Dt,iridescenceThicknessMap:tt,sheen:j,sheenColorMap:lt,sheenRoughnessMap:gt,specularMap:St,specularColorMap:ot,specularIntensityMap:zt,transmission:Z,transmissionMap:L,thicknessMap:ft,gradientMap:et,opaque:v.transparent===!1&&v.blending===Hr&&v.alphaToCoverage===!1,alphaMap:dt,alphaTest:Q,alphaHash:K,combine:v.combine,mapUv:jt&&_(v.map.channel),aoMapUv:Zt&&_(v.aoMap.channel),lightMapUv:re&&_(v.lightMap.channel),bumpMapUv:Bt&&_(v.bumpMap.channel),normalMapUv:Te&&_(v.normalMap.channel),displacementMapUv:D&&_(v.displacementMap.channel),emissiveMapUv:we&&_(v.emissiveMap.channel),metalnessMapUv:Kt&&_(v.metalnessMap.channel),roughnessMapUv:ce&&_(v.roughnessMap.channel),anisotropyMapUv:q&&_(v.anisotropyMap.channel),clearcoatMapUv:yt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:at&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:gt&&_(v.sheenRoughnessMap.channel),specularMapUv:St&&_(v.specularMap.channel),specularColorMapUv:ot&&_(v.specularColorMap.channel),specularIntensityMapUv:zt&&_(v.specularIntensityMap.channel),transmissionMapUv:L&&_(v.transmissionMap.channel),thicknessMapUv:ft&&_(v.thicknessMap.channel),alphaMapUv:dt&&_(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Te||Mt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(jt||dt),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:mt,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:bt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ut,decodeVideoTexture:jt&&v.map.isVideoTexture===!0&&Wt.getTransfer(v.map.colorSpace)===te,decodeVideoTextureEmissive:we&&v.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(v.emissiveMap.colorSpace)===te,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===fi,flipSided:v.side===Qe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:rt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&v.extensions.multiDraw===!0||xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return he.vertexUv1s=l.has(1),he.vertexUv2s=l.has(2),he.vertexUv3s=l.has(3),l.clear(),he}function d(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)T.push(P),T.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(x(T,v),M(T,v),T.push(r.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function x(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),v.push(o.mask)}function y(v){const T=g[v.type];let P;if(T){const O=Yn[T];P=Cg.clone(O.uniforms)}else P=v.uniforms;return P}function E(v,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new gS(r,T,v,s),h.push(P),u.set(T,P)),P}function b(v){if(--v.usedTimes===0){const T=h.indexOf(v);h[T]=h[h.length-1],h.pop(),u.delete(v.cacheKey),v.destroy()}}function A(v){c.remove(v)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:E,releaseProgram:b,releaseShaderCache:A,programs:h,dispose:C}}function yS(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function ES(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function sf(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function af(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,p,g,_,m){let d=r[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function o(u,f,p,g,_,m){const d=a(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function c(u,f,p,g,_,m){const d=a(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||ES),n.length>1&&n.sort(f||sf),i.length>1&&i.sort(f||sf)}function h(){for(let u=t,f=r.length;u<f;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function bS(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new af,r.set(n,[a])):i>=s.length?(a=new af,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function TS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new It};break;case"SpotLight":e={position:new I,direction:new I,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new I,halfWidth:new I,halfHeight:new I};break}return r[t.id]=e,e}}}function wS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let AS=0;function RS(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function CS(r){const t=new TS,e=wS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const i=new I,s=new ie,a=new ie;function o(l){let h=0,u=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,x=0,M=0,y=0,E=0,b=0,A=0;l.sort(RS);for(let v=0,T=l.length;v<T;v++){const P=l[v],O=P.color,F=P.intensity,X=P.distance;let W=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Kr?W=P.shadow.map.texture:W=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=O.r*F,u+=O.g*F,f+=O.b*F;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],F);A++}else if(P.isDirectionalLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,Y=e.get(P);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=P.shadow.matrix,x++}n.directional[p]=k,p++}else if(P.isSpotLight){const k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(O).multiplyScalar(F),k.distance=X,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[_]=k;const B=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,B.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[_]=B.matrix,P.castShadow){const Y=e.get(P);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=W,y++}_++}else if(P.isRectAreaLight){const k=t.get(P);k.color.copy(O).multiplyScalar(F),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=k,m++}else if(P.isPointLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const B=P.shadow,Y=e.get(P);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,Y.shadowCameraNear=B.camera.near,Y.shadowCameraFar=B.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=k,g++}else if(P.isHemisphereLight){const k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(F),k.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[d]=k,d++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==x||C.numPointShadows!==M||C.numSpotShadows!==y||C.numSpotMaps!==E||C.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+E-b,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=x,C.numPointShadows=M,C.numSpotShadows=y,C.numSpotMaps=E,C.numLightProbes=A,n.version=AS++)}function c(l,h){let u=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let d=0,x=l.length;d<x;d++){const M=l[d];if(M.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(M.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function of(r){const t=new CS(r),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function PS(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new of(r),t.set(i,[o])):s>=a.length?(o=new of(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const DS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,IS=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],US=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],lf=new ie,Ms=new I,al=new I;function NS(r,t,e){let n=new nh;const i=new At,s=new At,a=new Me,o=new Gg,c=new Wg,l={},h=e.maxTextureSize,u={[_i]:Qe,[Qe]:_i,[fi]:fi},f=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:DS,fragmentShader:LS}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new je;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ee(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Na;let d=this.type;this.render=function(b,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;b.type===id&&(Ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),b.type=Na);const v=r.getRenderTarget(),T=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),O=r.state;O.setBlending(pi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=d!==this.type;F&&A.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(W=>W.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,W=b.length;X<W;X++){const k=b[X],B=k.shadow;if(B===void 0){Ct("WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const Y=B.getFrameExtents();if(i.multiply(Y),s.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Y.x),i.x=s.x*Y.x,B.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Y.y),i.y=s.y*Y.y,B.mapSize.y=s.y)),B.map===null||F===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===ys){if(k.isPointLight){Ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Jn(i.x,i.y,{format:Kr,type:gi,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),B.map.texture.name=k.name+".shadowMap",B.map.depthTexture=new Ns(i.x,i.y,Bn),B.map.depthTexture.name=k.name+".shadowMapDepth",B.map.depthTexture.format=xi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Be,B.map.depthTexture.magFilter=Be}else{k.isPointLight?(B.map=new wd(i.x),B.map.depthTexture=new kg(i.x,Qn)):(B.map=new Jn(i.x,i.y),B.map.depthTexture=new Ns(i.x,i.y,Qn)),B.map.depthTexture.name=k.name+".shadowMap",B.map.depthTexture.format=xi;const nt=r.state.buffers.depth.getReversed();this.type===Na?(B.map.depthTexture.compareFunction=nt?Zc:Kc,B.map.depthTexture.minFilter=Xe,B.map.depthTexture.magFilter=Xe):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Be,B.map.depthTexture.magFilter=Be)}B.camera.updateProjectionMatrix()}const st=B.map.isWebGLCubeRenderTarget?6:1;for(let nt=0;nt<st;nt++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,nt),r.clear();else{nt===0&&(r.setRenderTarget(B.map),r.clear());const it=B.getViewport(nt);a.set(s.x*it.x,s.y*it.y,s.x*it.z,s.y*it.w),O.viewport(a)}if(k.isPointLight){const it=B.camera,bt=B.matrix,Lt=k.distance||it.far;Lt!==it.far&&(it.far=Lt,it.updateProjectionMatrix()),Ms.setFromMatrixPosition(k.matrixWorld),it.position.copy(Ms),al.copy(it.position),al.add(IS[nt]),it.up.copy(US[nt]),it.lookAt(al),it.updateMatrixWorld(),bt.makeTranslation(-Ms.x,-Ms.y,-Ms.z),lf.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),B._frustum.setFromProjectionMatrix(lf,it.coordinateSystem,it.reversedDepth)}else B.updateMatrices(k);n=B.getFrustum(),y(A,C,B.camera,k,this.type)}B.isPointLightShadow!==!0&&this.type===ys&&x(B,C),B.needsUpdate=!1}d=this.type,m.needsUpdate=!1,r.setRenderTarget(v,T,P)};function x(b,A){const C=t.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Jn(i.x,i.y,{format:Kr,type:gi})),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(A,null,C,f,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(A,null,C,p,_,null)}function M(b,A,C,v){let T=null;const P=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)T=P;else if(T=C.isPointLight===!0?c:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const O=T.uuid,F=A.uuid;let X=l[O];X===void 0&&(X={},l[O]=X);let W=X[F];W===void 0&&(W=T.clone(),X[F]=W,A.addEventListener("dispose",E)),T=W}if(T.visible=A.visible,T.wireframe=A.wireframe,v===ys?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:u[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,C.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const O=r.properties.get(T);O.light=C}return T}function y(b,A,C,v,T){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===ys)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const F=t.update(b),X=b.material;if(Array.isArray(X)){const W=F.groups;for(let k=0,B=W.length;k<B;k++){const Y=W[k],st=X[Y.materialIndex];if(st&&st.visible){const nt=M(b,st,v,T);b.onBeforeShadow(r,b,A,C,F,nt,Y),r.renderBufferDirect(C,null,F,nt,b,Y),b.onAfterShadow(r,b,A,C,F,nt,Y)}}}else if(X.visible){const W=M(b,X,v,T);b.onBeforeShadow(r,b,A,C,F,W,null),r.renderBufferDirect(C,null,F,W,b,null),b.onAfterShadow(r,b,A,C,F,W,null)}}const O=b.children;for(let F=0,X=O.length;F<X;F++)y(O[F],A,C,v,T)}function E(b){b.target.removeEventListener("dispose",E);for(const C in l){const v=l[C],T=b.target.uuid;T in v&&(v[T].dispose(),delete v[T])}}}const FS={[bl]:Tl,[wl]:Cl,[Al]:Pl,[jr]:Rl,[Tl]:bl,[Cl]:wl,[Pl]:Al,[Rl]:jr};function OS(r,t){function e(){let L=!1;const ft=new Me;let et=null;const dt=new Me(0,0,0,0);return{setMask:function(Q){et!==Q&&!L&&(r.colorMask(Q,Q,Q,Q),et=Q)},setLocked:function(Q){L=Q},setClear:function(Q,K,rt,Ut,he){he===!0&&(Q*=Ut,K*=Ut,rt*=Ut),ft.set(Q,K,rt,Ut),dt.equals(ft)===!1&&(r.clearColor(Q,K,rt,Ut),dt.copy(ft))},reset:function(){L=!1,et=null,dt.set(-1,0,0,0)}}}function n(){let L=!1,ft=!1,et=null,dt=null,Q=null;return{setReversed:function(K){if(ft!==K){const rt=t.get("EXT_clip_control");K?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT),ft=K;const Ut=Q;Q=null,this.setClear(Ut)}},getReversed:function(){return ft},setTest:function(K){K?J(r.DEPTH_TEST):mt(r.DEPTH_TEST)},setMask:function(K){et!==K&&!L&&(r.depthMask(K),et=K)},setFunc:function(K){if(ft&&(K=FS[K]),dt!==K){switch(K){case bl:r.depthFunc(r.NEVER);break;case Tl:r.depthFunc(r.ALWAYS);break;case wl:r.depthFunc(r.LESS);break;case jr:r.depthFunc(r.LEQUAL);break;case Al:r.depthFunc(r.EQUAL);break;case Rl:r.depthFunc(r.GEQUAL);break;case Cl:r.depthFunc(r.GREATER);break;case Pl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}dt=K}},setLocked:function(K){L=K},setClear:function(K){Q!==K&&(ft&&(K=1-K),r.clearDepth(K),Q=K)},reset:function(){L=!1,et=null,dt=null,Q=null,ft=!1}}}function i(){let L=!1,ft=null,et=null,dt=null,Q=null,K=null,rt=null,Ut=null,he=null;return{setTest:function(Jt){L||(Jt?J(r.STENCIL_TEST):mt(r.STENCIL_TEST))},setMask:function(Jt){ft!==Jt&&!L&&(r.stencilMask(Jt),ft=Jt)},setFunc:function(Jt,Hn,ni){(et!==Jt||dt!==Hn||Q!==ni)&&(r.stencilFunc(Jt,Hn,ni),et=Jt,dt=Hn,Q=ni)},setOp:function(Jt,Hn,ni){(K!==Jt||rt!==Hn||Ut!==ni)&&(r.stencilOp(Jt,Hn,ni),K=Jt,rt=Hn,Ut=ni)},setLocked:function(Jt){L=Jt},setClear:function(Jt){he!==Jt&&(r.clearStencil(Jt),he=Jt)},reset:function(){L=!1,ft=null,et=null,dt=null,Q=null,K=null,rt=null,Ut=null,he=null}}}const s=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,x=null,M=null,y=null,E=null,b=null,A=new It(0,0,0),C=0,v=!1,T=null,P=null,O=null,F=null,X=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,B=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=B>=1):Y.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=B>=2);let st=null,nt={};const it=r.getParameter(r.SCISSOR_BOX),bt=r.getParameter(r.VIEWPORT),Lt=new Me().fromArray(it),kt=new Me().fromArray(bt);function Gt(L,ft,et,dt){const Q=new Uint8Array(4),K=r.createTexture();r.bindTexture(L,K),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let rt=0;rt<et;rt++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ft,0,r.RGBA,1,1,dt,0,r.RGBA,r.UNSIGNED_BYTE,Q):r.texImage2D(ft+rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Q);return K}const $={};$[r.TEXTURE_2D]=Gt(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=Gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=Gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=Gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(r.DEPTH_TEST),a.setFunc(jr),Bt(!1),Te(tu),J(r.CULL_FACE),Zt(pi);function J(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function mt(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function Nt(L,ft){return u[L]!==ft?(r.bindFramebuffer(L,ft),u[L]=ft,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ft),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ft),!0):!1}function xt(L,ft){let et=p,dt=!1;if(L){et=f.get(ft),et===void 0&&(et=[],f.set(ft,et));const Q=L.textures;if(et.length!==Q.length||et[0]!==r.COLOR_ATTACHMENT0){for(let K=0,rt=Q.length;K<rt;K++)et[K]=r.COLOR_ATTACHMENT0+K;et.length=Q.length,dt=!0}}else et[0]!==r.BACK&&(et[0]=r.BACK,dt=!0);dt&&r.drawBuffers(et)}function jt(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const Ue={[Qi]:r.FUNC_ADD,[I_]:r.FUNC_SUBTRACT,[U_]:r.FUNC_REVERSE_SUBTRACT};Ue[N_]=r.MIN,Ue[F_]=r.MAX;const qt={[O_]:r.ZERO,[B_]:r.ONE,[z_]:r.SRC_COLOR,[yl]:r.SRC_ALPHA,[X_]:r.SRC_ALPHA_SATURATE,[G_]:r.DST_COLOR,[V_]:r.DST_ALPHA,[k_]:r.ONE_MINUS_SRC_COLOR,[El]:r.ONE_MINUS_SRC_ALPHA,[W_]:r.ONE_MINUS_DST_COLOR,[H_]:r.ONE_MINUS_DST_ALPHA,[q_]:r.CONSTANT_COLOR,[Y_]:r.ONE_MINUS_CONSTANT_COLOR,[j_]:r.CONSTANT_ALPHA,[$_]:r.ONE_MINUS_CONSTANT_ALPHA};function Zt(L,ft,et,dt,Q,K,rt,Ut,he,Jt){if(L===pi){_===!0&&(mt(r.BLEND),_=!1);return}if(_===!1&&(J(r.BLEND),_=!0),L!==L_){if(L!==m||Jt!==v){if((d!==Qi||y!==Qi)&&(r.blendEquation(r.FUNC_ADD),d=Qi,y=Qi),Jt)switch(L){case Hr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sl:r.blendFunc(r.ONE,r.ONE);break;case eu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Yt("WebGLState: Invalid blending: ",L);break}else switch(L){case Hr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case eu:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nu:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",L);break}x=null,M=null,E=null,b=null,A.set(0,0,0),C=0,m=L,v=Jt}return}Q=Q||ft,K=K||et,rt=rt||dt,(ft!==d||Q!==y)&&(r.blendEquationSeparate(Ue[ft],Ue[Q]),d=ft,y=Q),(et!==x||dt!==M||K!==E||rt!==b)&&(r.blendFuncSeparate(qt[et],qt[dt],qt[K],qt[rt]),x=et,M=dt,E=K,b=rt),(Ut.equals(A)===!1||he!==C)&&(r.blendColor(Ut.r,Ut.g,Ut.b,he),A.copy(Ut),C=he),m=L,v=!1}function re(L,ft){L.side===fi?mt(r.CULL_FACE):J(r.CULL_FACE);let et=L.side===Qe;ft&&(et=!et),Bt(et),L.blending===Hr&&L.transparent===!1?Zt(pi):Zt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const dt=L.stencilWrite;o.setTest(dt),dt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),we(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?J(r.SAMPLE_ALPHA_TO_COVERAGE):mt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(L){T!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),T=L)}function Te(L){L!==P_?(J(r.CULL_FACE),L!==P&&(L===tu?r.cullFace(r.BACK):L===D_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):mt(r.CULL_FACE),P=L}function D(L){L!==O&&(k&&r.lineWidth(L),O=L)}function we(L,ft,et){L?(J(r.POLYGON_OFFSET_FILL),(F!==ft||X!==et)&&(r.polygonOffset(ft,et),F=ft,X=et)):mt(r.POLYGON_OFFSET_FILL)}function Kt(L){L?J(r.SCISSOR_TEST):mt(r.SCISSOR_TEST)}function ce(L){L===void 0&&(L=r.TEXTURE0+W-1),st!==L&&(r.activeTexture(L),st=L)}function Mt(L,ft,et){et===void 0&&(st===null?et=r.TEXTURE0+W-1:et=st);let dt=nt[et];dt===void 0&&(dt={type:void 0,texture:void 0},nt[et]=dt),(dt.type!==L||dt.texture!==ft)&&(st!==et&&(r.activeTexture(et),st=et),r.bindTexture(L,ft||$[L]),dt.type=L,dt.texture=ft)}function R(){const L=nt[st];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(L){Yt("WebGLState:",L)}}function U(){try{r.compressedTexImage3D(...arguments)}catch(L){Yt("WebGLState:",L)}}function j(){try{r.texSubImage2D(...arguments)}catch(L){Yt("WebGLState:",L)}}function Z(){try{r.texSubImage3D(...arguments)}catch(L){Yt("WebGLState:",L)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(L){Yt("WebGLState:",L)}}function yt(){try{r.compressedTexSubImage3D(...arguments)}catch(L){Yt("WebGLState:",L)}}function at(){try{r.texStorage2D(...arguments)}catch(L){Yt("WebGLState:",L)}}function vt(){try{r.texStorage3D(...arguments)}catch(L){Yt("WebGLState:",L)}}function Dt(){try{r.texImage2D(...arguments)}catch(L){Yt("WebGLState:",L)}}function tt(){try{r.texImage3D(...arguments)}catch(L){Yt("WebGLState:",L)}}function lt(L){Lt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Lt.copy(L))}function gt(L){kt.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),kt.copy(L))}function St(L,ft){let et=l.get(ft);et===void 0&&(et=new WeakMap,l.set(ft,et));let dt=et.get(L);dt===void 0&&(dt=r.getUniformBlockIndex(ft,L.name),et.set(L,dt))}function ot(L,ft){const dt=l.get(ft).get(L);c.get(ft)!==dt&&(r.uniformBlockBinding(ft,dt,L.__bindingPointIndex),c.set(ft,dt))}function zt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},st=null,nt={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,x=null,M=null,y=null,E=null,b=null,A=new It(0,0,0),C=0,v=!1,T=null,P=null,O=null,F=null,X=null,Lt.set(0,0,r.canvas.width,r.canvas.height),kt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:mt,bindFramebuffer:Nt,drawBuffers:xt,useProgram:jt,setBlending:Zt,setMaterial:re,setFlipSided:Bt,setCullFace:Te,setLineWidth:D,setPolygonOffset:we,setScissorTest:Kt,activeTexture:ce,bindTexture:Mt,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:U,texImage2D:Dt,texImage3D:tt,updateUBOMapping:St,uniformBlockBinding:ot,texStorage2D:at,texStorage3D:vt,texSubImage2D:j,texSubImage3D:Z,compressedTexSubImage2D:q,compressedTexSubImage3D:yt,scissor:lt,viewport:gt,reset:zt}}function BS(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new At,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return p?new OffscreenCanvas(R,S):Is("canvas")}function _(R,S,U){let j=1;const Z=Mt(R);if((Z.width>U||Z.height>U)&&(j=U/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor(j*Z.width),yt=Math.floor(j*Z.height);u===void 0&&(u=g(q,yt));const at=S?g(q,yt):u;return at.width=q,at.height=yt,at.getContext("2d").drawImage(R,0,0,q,yt),Ct("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+yt+")."),at}else return"data"in R&&Ct("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){r.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(R,S,U,j,Z=!1){if(R!==null){if(r[R]!==void 0)return r[R];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=S;if(S===r.RED&&(U===r.FLOAT&&(q=r.R32F),U===r.HALF_FLOAT&&(q=r.R16F),U===r.UNSIGNED_BYTE&&(q=r.R8)),S===r.RED_INTEGER&&(U===r.UNSIGNED_BYTE&&(q=r.R8UI),U===r.UNSIGNED_SHORT&&(q=r.R16UI),U===r.UNSIGNED_INT&&(q=r.R32UI),U===r.BYTE&&(q=r.R8I),U===r.SHORT&&(q=r.R16I),U===r.INT&&(q=r.R32I)),S===r.RG&&(U===r.FLOAT&&(q=r.RG32F),U===r.HALF_FLOAT&&(q=r.RG16F),U===r.UNSIGNED_BYTE&&(q=r.RG8)),S===r.RG_INTEGER&&(U===r.UNSIGNED_BYTE&&(q=r.RG8UI),U===r.UNSIGNED_SHORT&&(q=r.RG16UI),U===r.UNSIGNED_INT&&(q=r.RG32UI),U===r.BYTE&&(q=r.RG8I),U===r.SHORT&&(q=r.RG16I),U===r.INT&&(q=r.RG32I)),S===r.RGB_INTEGER&&(U===r.UNSIGNED_BYTE&&(q=r.RGB8UI),U===r.UNSIGNED_SHORT&&(q=r.RGB16UI),U===r.UNSIGNED_INT&&(q=r.RGB32UI),U===r.BYTE&&(q=r.RGB8I),U===r.SHORT&&(q=r.RGB16I),U===r.INT&&(q=r.RGB32I)),S===r.RGBA_INTEGER&&(U===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),U===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),U===r.UNSIGNED_INT&&(q=r.RGBA32UI),U===r.BYTE&&(q=r.RGBA8I),U===r.SHORT&&(q=r.RGBA16I),U===r.INT&&(q=r.RGBA32I)),S===r.RGB&&(U===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),U===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),S===r.RGBA){const yt=Z?$a:Wt.getTransfer(j);U===r.FLOAT&&(q=r.RGBA32F),U===r.HALF_FLOAT&&(q=r.RGBA16F),U===r.UNSIGNED_BYTE&&(q=yt===te?r.SRGB8_ALPHA8:r.RGBA8),U===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),U===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function y(R,S){let U;return R?S===null||S===Qn||S===Ls?U=r.DEPTH24_STENCIL8:S===Bn?U=r.DEPTH32F_STENCIL8:S===Ds&&(U=r.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Qn||S===Ls?U=r.DEPTH_COMPONENT24:S===Bn?U=r.DEPTH_COMPONENT32F:S===Ds&&(U=r.DEPTH_COMPONENT16),U}function E(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Be&&R.minFilter!==Xe?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function b(R){const S=R.target;S.removeEventListener("dispose",b),C(S),S.isVideoTexture&&h.delete(S)}function A(R){const S=R.target;S.removeEventListener("dispose",A),T(S)}function C(R){const S=n.get(R);if(S.__webglInit===void 0)return;const U=R.source,j=f.get(U);if(j){const Z=j[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&v(R),Object.keys(j).length===0&&f.delete(U)}n.remove(R)}function v(R){const S=n.get(R);r.deleteTexture(S.__webglTexture);const U=R.source,j=f.get(U);delete j[S.__cacheKey],a.memory.textures--}function T(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let Z=0;Z<S.__webglFramebuffer[j].length;Z++)r.deleteFramebuffer(S.__webglFramebuffer[j][Z]);else r.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)r.deleteFramebuffer(S.__webglFramebuffer[j]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const U=R.textures;for(let j=0,Z=U.length;j<Z;j++){const q=n.get(U[j]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(U[j])}n.remove(R)}let P=0;function O(){P=0}function F(){const R=P;return R>=i.maxTextures&&Ct("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function X(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function W(R,S){const U=n.get(R);if(R.isVideoTexture&&Kt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){const j=R.image;if(j===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{$(U,R,S);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,U.__webglTexture,r.TEXTURE0+S)}function k(R,S){const U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){$(U,R,S);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,U.__webglTexture,r.TEXTURE0+S)}function B(R,S){const U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){$(U,R,S);return}e.bindTexture(r.TEXTURE_3D,U.__webglTexture,r.TEXTURE0+S)}function Y(R,S){const U=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){J(U,R,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+S)}const st={[ja]:r.REPEAT,[di]:r.CLAMP_TO_EDGE,[Il]:r.MIRRORED_REPEAT},nt={[Be]:r.NEAREST,[J_]:r.NEAREST_MIPMAP_NEAREST,[ea]:r.NEAREST_MIPMAP_LINEAR,[Xe]:r.LINEAR,[Co]:r.LINEAR_MIPMAP_NEAREST,[nr]:r.LINEAR_MIPMAP_LINEAR},it={[eg]:r.NEVER,[ag]:r.ALWAYS,[ng]:r.LESS,[Kc]:r.LEQUAL,[ig]:r.EQUAL,[Zc]:r.GEQUAL,[rg]:r.GREATER,[sg]:r.NOTEQUAL};function bt(R,S){if(S.type===Bn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Xe||S.magFilter===Co||S.magFilter===ea||S.magFilter===nr||S.minFilter===Xe||S.minFilter===Co||S.minFilter===ea||S.minFilter===nr)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,st[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,st[S.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,st[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,nt[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,nt[S.minFilter]),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,it[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Be||S.minFilter!==ea&&S.minFilter!==nr||S.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Lt(R,S){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",b));const j=S.source;let Z=f.get(j);Z===void 0&&(Z={},f.set(j,Z));const q=X(S);if(q!==R.__cacheKey){Z[q]===void 0&&(Z[q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Z[q].usedTimes++;const yt=Z[R.__cacheKey];yt!==void 0&&(Z[R.__cacheKey].usedTimes--,yt.usedTimes===0&&v(S)),R.__cacheKey=q,R.__webglTexture=Z[q].texture}return U}function kt(R,S,U){return Math.floor(Math.floor(R/U)/S)}function Gt(R,S,U,j){const q=R.updateRanges;if(q.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,U,j,S.data);else{q.sort((tt,lt)=>tt.start-lt.start);let yt=0;for(let tt=1;tt<q.length;tt++){const lt=q[yt],gt=q[tt],St=lt.start+lt.count,ot=kt(gt.start,S.width,4),zt=kt(lt.start,S.width,4);gt.start<=St+1&&ot===zt&&kt(gt.start+gt.count-1,S.width,4)===ot?lt.count=Math.max(lt.count,gt.start+gt.count-lt.start):(++yt,q[yt]=gt)}q.length=yt+1;const at=r.getParameter(r.UNPACK_ROW_LENGTH),vt=r.getParameter(r.UNPACK_SKIP_PIXELS),Dt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let tt=0,lt=q.length;tt<lt;tt++){const gt=q[tt],St=Math.floor(gt.start/4),ot=Math.ceil(gt.count/4),zt=St%S.width,L=Math.floor(St/S.width),ft=ot,et=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,zt),r.pixelStorei(r.UNPACK_SKIP_ROWS,L),e.texSubImage2D(r.TEXTURE_2D,0,zt,L,ft,et,U,j,S.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,at),r.pixelStorei(r.UNPACK_SKIP_PIXELS,vt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Dt)}}function $(R,S,U){let j=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=r.TEXTURE_3D);const Z=Lt(R,S),q=S.source;e.bindTexture(j,R.__webglTexture,r.TEXTURE0+U);const yt=n.get(q);if(q.version!==yt.__version||Z===!0){e.activeTexture(r.TEXTURE0+U);const at=Wt.getPrimaries(Wt.workingColorSpace),vt=S.colorSpace===Ci?null:Wt.getPrimaries(S.colorSpace),Dt=S.colorSpace===Ci||at===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let tt=_(S.image,!1,i.maxTextureSize);tt=ce(S,tt);const lt=s.convert(S.format,S.colorSpace),gt=s.convert(S.type);let St=M(S.internalFormat,lt,gt,S.colorSpace,S.isVideoTexture);bt(j,S);let ot;const zt=S.mipmaps,L=S.isVideoTexture!==!0,ft=yt.__version===void 0||Z===!0,et=q.dataReady,dt=E(S,tt);if(S.isDepthTexture)St=y(S.format===ir,S.type),ft&&(L?e.texStorage2D(r.TEXTURE_2D,1,St,tt.width,tt.height):e.texImage2D(r.TEXTURE_2D,0,St,tt.width,tt.height,0,lt,gt,null));else if(S.isDataTexture)if(zt.length>0){L&&ft&&e.texStorage2D(r.TEXTURE_2D,dt,St,zt[0].width,zt[0].height);for(let Q=0,K=zt.length;Q<K;Q++)ot=zt[Q],L?et&&e.texSubImage2D(r.TEXTURE_2D,Q,0,0,ot.width,ot.height,lt,gt,ot.data):e.texImage2D(r.TEXTURE_2D,Q,St,ot.width,ot.height,0,lt,gt,ot.data);S.generateMipmaps=!1}else L?(ft&&e.texStorage2D(r.TEXTURE_2D,dt,St,tt.width,tt.height),et&&Gt(S,tt,lt,gt)):e.texImage2D(r.TEXTURE_2D,0,St,tt.width,tt.height,0,lt,gt,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){L&&ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,St,zt[0].width,zt[0].height,tt.depth);for(let Q=0,K=zt.length;Q<K;Q++)if(ot=zt[Q],S.format!==zn)if(lt!==null)if(L){if(et)if(S.layerUpdates.size>0){const rt=zu(ot.width,ot.height,S.format,S.type);for(const Ut of S.layerUpdates){const he=ot.data.subarray(Ut*rt/ot.data.BYTES_PER_ELEMENT,(Ut+1)*rt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,Ut,ot.width,ot.height,1,lt,he)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,ot.width,ot.height,tt.depth,lt,ot.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Q,St,ot.width,ot.height,tt.depth,0,ot.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?et&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,ot.width,ot.height,tt.depth,lt,gt,ot.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Q,St,ot.width,ot.height,tt.depth,0,lt,gt,ot.data)}else{L&&ft&&e.texStorage2D(r.TEXTURE_2D,dt,St,zt[0].width,zt[0].height);for(let Q=0,K=zt.length;Q<K;Q++)ot=zt[Q],S.format!==zn?lt!==null?L?et&&e.compressedTexSubImage2D(r.TEXTURE_2D,Q,0,0,ot.width,ot.height,lt,ot.data):e.compressedTexImage2D(r.TEXTURE_2D,Q,St,ot.width,ot.height,0,ot.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?et&&e.texSubImage2D(r.TEXTURE_2D,Q,0,0,ot.width,ot.height,lt,gt,ot.data):e.texImage2D(r.TEXTURE_2D,Q,St,ot.width,ot.height,0,lt,gt,ot.data)}else if(S.isDataArrayTexture)if(L){if(ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,St,tt.width,tt.height,tt.depth),et)if(S.layerUpdates.size>0){const Q=zu(tt.width,tt.height,S.format,S.type);for(const K of S.layerUpdates){const rt=tt.data.subarray(K*Q/tt.data.BYTES_PER_ELEMENT,(K+1)*Q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,lt,gt,rt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,lt,gt,tt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,St,tt.width,tt.height,tt.depth,0,lt,gt,tt.data);else if(S.isData3DTexture)L?(ft&&e.texStorage3D(r.TEXTURE_3D,dt,St,tt.width,tt.height,tt.depth),et&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,lt,gt,tt.data)):e.texImage3D(r.TEXTURE_3D,0,St,tt.width,tt.height,tt.depth,0,lt,gt,tt.data);else if(S.isFramebufferTexture){if(ft)if(L)e.texStorage2D(r.TEXTURE_2D,dt,St,tt.width,tt.height);else{let Q=tt.width,K=tt.height;for(let rt=0;rt<dt;rt++)e.texImage2D(r.TEXTURE_2D,rt,St,Q,K,0,lt,gt,null),Q>>=1,K>>=1}}else if(zt.length>0){if(L&&ft){const Q=Mt(zt[0]);e.texStorage2D(r.TEXTURE_2D,dt,St,Q.width,Q.height)}for(let Q=0,K=zt.length;Q<K;Q++)ot=zt[Q],L?et&&e.texSubImage2D(r.TEXTURE_2D,Q,0,0,lt,gt,ot):e.texImage2D(r.TEXTURE_2D,Q,St,lt,gt,ot);S.generateMipmaps=!1}else if(L){if(ft){const Q=Mt(tt);e.texStorage2D(r.TEXTURE_2D,dt,St,Q.width,Q.height)}et&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt,gt,tt)}else e.texImage2D(r.TEXTURE_2D,0,St,lt,gt,tt);m(S)&&d(j),yt.__version=q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function J(R,S,U){if(S.image.length!==6)return;const j=Lt(R,S),Z=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+U);const q=n.get(Z);if(Z.version!==q.__version||j===!0){e.activeTexture(r.TEXTURE0+U);const yt=Wt.getPrimaries(Wt.workingColorSpace),at=S.colorSpace===Ci?null:Wt.getPrimaries(S.colorSpace),vt=S.colorSpace===Ci||yt===at?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Dt=S.isCompressedTexture||S.image[0].isCompressedTexture,tt=S.image[0]&&S.image[0].isDataTexture,lt=[];for(let K=0;K<6;K++)!Dt&&!tt?lt[K]=_(S.image[K],!0,i.maxCubemapSize):lt[K]=tt?S.image[K].image:S.image[K],lt[K]=ce(S,lt[K]);const gt=lt[0],St=s.convert(S.format,S.colorSpace),ot=s.convert(S.type),zt=M(S.internalFormat,St,ot,S.colorSpace),L=S.isVideoTexture!==!0,ft=q.__version===void 0||j===!0,et=Z.dataReady;let dt=E(S,gt);bt(r.TEXTURE_CUBE_MAP,S);let Q;if(Dt){L&&ft&&e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,zt,gt.width,gt.height);for(let K=0;K<6;K++){Q=lt[K].mipmaps;for(let rt=0;rt<Q.length;rt++){const Ut=Q[rt];S.format!==zn?St!==null?L?et&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,rt,0,0,Ut.width,Ut.height,St,Ut.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,rt,zt,Ut.width,Ut.height,0,Ut.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,rt,0,0,Ut.width,Ut.height,St,ot,Ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,rt,zt,Ut.width,Ut.height,0,St,ot,Ut.data)}}}else{if(Q=S.mipmaps,L&&ft){Q.length>0&&dt++;const K=Mt(lt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,zt,K.width,K.height)}for(let K=0;K<6;K++)if(tt){L?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,lt[K].width,lt[K].height,St,ot,lt[K].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,zt,lt[K].width,lt[K].height,0,St,ot,lt[K].data);for(let rt=0;rt<Q.length;rt++){const he=Q[rt].image[K].image;L?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,rt+1,0,0,he.width,he.height,St,ot,he.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,rt+1,zt,he.width,he.height,0,St,ot,he.data)}}else{L?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,St,ot,lt[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,zt,St,ot,lt[K]);for(let rt=0;rt<Q.length;rt++){const Ut=Q[rt];L?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,rt+1,0,0,St,ot,Ut.image[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,rt+1,zt,St,ot,Ut.image[K])}}}m(S)&&d(r.TEXTURE_CUBE_MAP),q.__version=Z.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function mt(R,S,U,j,Z,q){const yt=s.convert(U.format,U.colorSpace),at=s.convert(U.type),vt=M(U.internalFormat,yt,at,U.colorSpace),Dt=n.get(S),tt=n.get(U);if(tt.__renderTarget=S,!Dt.__hasExternalTextures){const lt=Math.max(1,S.width>>q),gt=Math.max(1,S.height>>q);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?e.texImage3D(Z,q,vt,lt,gt,S.depth,0,yt,at,null):e.texImage2D(Z,q,vt,lt,gt,0,yt,at,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),we(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,Z,tt.__webglTexture,0,D(S)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,Z,tt.__webglTexture,q),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Nt(R,S,U){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer){const j=S.depthTexture,Z=j&&j.isDepthTexture?j.type:null,q=y(S.stencilBuffer,Z),yt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;we(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,D(S),q,S.width,S.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,D(S),q,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,q,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,R)}else{const j=S.textures;for(let Z=0;Z<j.length;Z++){const q=j[Z],yt=s.convert(q.format,q.colorSpace),at=s.convert(q.type),vt=M(q.internalFormat,yt,at,q.colorSpace);we(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,D(S),vt,S.width,S.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,D(S),vt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,vt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xt(R,S,U){const j=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(S.depthTexture);if(Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,S.depthTexture.addEventListener("dispose",b)),Z.__webglTexture===void 0){Z.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),bt(r.TEXTURE_CUBE_MAP,S.depthTexture);const Dt=s.convert(S.depthTexture.format),tt=s.convert(S.depthTexture.type);let lt;S.depthTexture.format===xi?lt=r.DEPTH_COMPONENT24:S.depthTexture.format===ir&&(lt=r.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,lt,S.width,S.height,0,Dt,tt,null)}}else W(S.depthTexture,0);const q=Z.__webglTexture,yt=D(S),at=j?r.TEXTURE_CUBE_MAP_POSITIVE_X+U:r.TEXTURE_2D,vt=S.depthTexture.format===ir?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===xi)we(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,vt,at,q,0,yt):r.framebufferTexture2D(r.FRAMEBUFFER,vt,at,q,0);else if(S.depthTexture.format===ir)we(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,vt,at,q,0,yt):r.framebufferTexture2D(r.FRAMEBUFFER,vt,at,q,0);else throw new Error("Unknown depthTexture format")}function jt(R){const S=n.get(R),U=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=j}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(U)for(let j=0;j<6;j++)xt(S.__webglFramebuffer[j],R,j);else{const j=R.texture.mipmaps;j&&j.length>0?xt(S.__webglFramebuffer[0],R,0):xt(S.__webglFramebuffer,R,0)}else if(U){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=r.createRenderbuffer(),Nt(S.__webglDepthbuffer[j],R,!1);else{const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,q)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Nt(S.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,q)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(R,S,U){const j=n.get(R);S!==void 0&&mt(j.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),U!==void 0&&jt(R)}function qt(R){const S=R.texture,U=n.get(R),j=n.get(S);R.addEventListener("dispose",A);const Z=R.textures,q=R.isWebGLCubeRenderTarget===!0,yt=Z.length>1;if(yt||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=S.version,a.memory.textures++),q){U.__webglFramebuffer=[];for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[at]=[];for(let vt=0;vt<S.mipmaps.length;vt++)U.__webglFramebuffer[at][vt]=r.createFramebuffer()}else U.__webglFramebuffer[at]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let at=0;at<S.mipmaps.length;at++)U.__webglFramebuffer[at]=r.createFramebuffer()}else U.__webglFramebuffer=r.createFramebuffer();if(yt)for(let at=0,vt=Z.length;at<vt;at++){const Dt=n.get(Z[at]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&we(R)===!1){U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let at=0;at<Z.length;at++){const vt=Z[at];U.__webglColorRenderbuffer[at]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,U.__webglColorRenderbuffer[at]);const Dt=s.convert(vt.format,vt.colorSpace),tt=s.convert(vt.type),lt=M(vt.internalFormat,Dt,tt,vt.colorSpace,R.isXRRenderTarget===!0),gt=D(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,gt,lt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,U.__webglColorRenderbuffer[at])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),Nt(U.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),bt(r.TEXTURE_CUBE_MAP,S);for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)mt(U.__webglFramebuffer[at][vt],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,vt);else mt(U.__webglFramebuffer[at],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(S)&&d(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let at=0,vt=Z.length;at<vt;at++){const Dt=Z[at],tt=n.get(Dt);let lt=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(lt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(lt,tt.__webglTexture),bt(lt,Dt),mt(U.__webglFramebuffer,R,Dt,r.COLOR_ATTACHMENT0+at,lt,0),m(Dt)&&d(lt)}e.unbindTexture()}else{let at=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(at=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(at,j.__webglTexture),bt(at,S),S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)mt(U.__webglFramebuffer[vt],R,S,r.COLOR_ATTACHMENT0,at,vt);else mt(U.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,at,0);m(S)&&d(at),e.unbindTexture()}R.depthBuffer&&jt(R)}function Zt(R){const S=R.textures;for(let U=0,j=S.length;U<j;U++){const Z=S[U];if(m(Z)){const q=x(R),yt=n.get(Z).__webglTexture;e.bindTexture(q,yt),d(q),e.unbindTexture()}}}const re=[],Bt=[];function Te(R){if(R.samples>0){if(we(R)===!1){const S=R.textures,U=R.width,j=R.height;let Z=r.COLOR_BUFFER_BIT;const q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,yt=n.get(R),at=S.length>1;if(at)for(let Dt=0;Dt<S.length;Dt++)e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);const vt=R.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Dt=0;Dt<S.length;Dt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),at){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,yt.__webglColorRenderbuffer[Dt]);const tt=n.get(S[Dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,tt,0)}r.blitFramebuffer(0,0,U,j,0,0,U,j,Z,r.NEAREST),c===!0&&(re.length=0,Bt.length=0,re.push(r.COLOR_ATTACHMENT0+Dt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(re.push(q),Bt.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Bt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),at)for(let Dt=0;Dt<S.length;Dt++){e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,yt.__webglColorRenderbuffer[Dt]);const tt=n.get(S[Dt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.TEXTURE_2D,tt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const S=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function D(R){return Math.min(i.maxSamples,R.samples)}function we(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Kt(R){const S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function ce(R,S){const U=R.colorSpace,j=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==Zr&&U!==Ci&&(Wt.getTransfer(U)===te?(j!==zn||Z!==xn)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",U)),S}function Mt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=W,this.setTexture2DArray=k,this.setTexture3D=B,this.setTextureCube=Y,this.rebindTextures=Ue,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=we,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function zS(r,t){function e(n,i=Ci){let s;const a=Wt.getTransfer(i);if(n===xn)return r.UNSIGNED_BYTE;if(n===Wc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Xc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===dd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===pd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===ud)return r.BYTE;if(n===fd)return r.SHORT;if(n===Ds)return r.UNSIGNED_SHORT;if(n===Gc)return r.INT;if(n===Qn)return r.UNSIGNED_INT;if(n===Bn)return r.FLOAT;if(n===gi)return r.HALF_FLOAT;if(n===md)return r.ALPHA;if(n===_d)return r.RGB;if(n===zn)return r.RGBA;if(n===xi)return r.DEPTH_COMPONENT;if(n===ir)return r.DEPTH_STENCIL;if(n===qc)return r.RED;if(n===Yc)return r.RED_INTEGER;if(n===Kr)return r.RG;if(n===jc)return r.RG_INTEGER;if(n===$c)return r.RGBA_INTEGER;if(n===Fa||n===Oa||n===Ba||n===za)if(a===te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Fa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Fa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===za)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ul||n===Nl||n===Fl||n===Ol)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ul)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ol)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bl||n===zl||n===kl||n===Vl||n===Hl||n===Gl||n===Wl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Bl||n===zl)return a===te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===kl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Vl)return s.COMPRESSED_R11_EAC;if(n===Hl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Gl)return s.COMPRESSED_RG11_EAC;if(n===Wl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xl||n===ql||n===Yl||n===jl||n===$l||n===Kl||n===Zl||n===Jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===rc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Xl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ql)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$l)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ql)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ec)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ic)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sc||n===ac||n===oc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===sc)return a===te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ac)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lc||n===cc||n===hc||n===uc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===lc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===cc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const kS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Rd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ti({vertexShader:kS,fragmentShader:VS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ee(new go(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GS extends pr{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new HS,d={},x=e.getContextAttributes();let M=null,y=null;const E=[],b=[],A=new At;let C=null;const v=new sn;v.viewport=new Me;const T=new sn;T.viewport=new Me;const P=[v,T],O=new Jg;let F=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=E[$];return J===void 0&&(J=new Zo,E[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=E[$];return J===void 0&&(J=new Zo,E[$]=J),J.getGripSpace()},this.getHand=function($){let J=E[$];return J===void 0&&(J=new Zo,E[$]=J),J.getHandSpace()};function W($){const J=b.indexOf($.inputSource);if(J===-1)return;const mt=E[J];mt!==void 0&&(mt.update($.inputSource,$.frame,l||a),mt.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",B);for(let $=0;$<E.length;$++){const J=b[$];J!==null&&(b[$]=null,E[$].disconnect(J))}F=null,X=null,m.reset();for(const $ in d)delete d[$];t.setRenderTarget(M),p=null,f=null,u=null,i=null,y=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(M=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",k),i.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Nt=null,xt=null;x.depth&&(xt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=x.stencil?ir:xi,Nt=x.stencil?Ls:Qn);const jt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(jt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Jn(f.textureWidth,f.textureHeight,{format:zn,type:xn,depthTexture:new Ns(f.textureWidth,f.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const mt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,mt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Jn(p.framebufferWidth,p.framebufferHeight,{format:zn,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Gt.setContext(i),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B($){for(let J=0;J<$.removed.length;J++){const mt=$.removed[J],Nt=b.indexOf(mt);Nt>=0&&(b[Nt]=null,E[Nt].disconnect(mt))}for(let J=0;J<$.added.length;J++){const mt=$.added[J];let Nt=b.indexOf(mt);if(Nt===-1){for(let jt=0;jt<E.length;jt++)if(jt>=b.length){b.push(mt),Nt=jt;break}else if(b[jt]===null){b[jt]=mt,Nt=jt;break}if(Nt===-1)break}const xt=E[Nt];xt&&xt.connect(mt)}}const Y=new I,st=new I;function nt($,J,mt){Y.setFromMatrixPosition(J.matrixWorld),st.setFromMatrixPosition(mt.matrixWorld);const Nt=Y.distanceTo(st),xt=J.projectionMatrix.elements,jt=mt.projectionMatrix.elements,Ue=xt[14]/(xt[10]-1),qt=xt[14]/(xt[10]+1),Zt=(xt[9]+1)/xt[5],re=(xt[9]-1)/xt[5],Bt=(xt[8]-1)/xt[0],Te=(jt[8]+1)/jt[0],D=Ue*Bt,we=Ue*Te,Kt=Nt/(-Bt+Te),ce=Kt*-Bt;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ce),$.translateZ(Kt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),xt[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Mt=Ue+Kt,R=qt+Kt,S=D-ce,U=we+(Nt-ce),j=Zt*qt/R*Mt,Z=re*qt/R*Mt;$.projectionMatrix.makePerspective(S,U,j,Z,Mt,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function it($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let J=$.near,mt=$.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),O.near=T.near=v.near=J,O.far=T.far=v.far=mt,(F!==O.near||X!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),F=O.near,X=O.far),O.layers.mask=$.layers.mask|6,v.layers.mask=O.layers.mask&3,T.layers.mask=O.layers.mask&5;const Nt=$.parent,xt=O.cameras;it(O,Nt);for(let jt=0;jt<xt.length;jt++)it(xt[jt],Nt);xt.length===2?nt(O,v,T):O.projectionMatrix.copy(v.projectionMatrix),bt($,O,Nt)};function bt($,J,mt){mt===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(mt.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=fc*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function($){return d[$]};let Lt=null;function kt($,J){if(h=J.getViewerPose(l||a),g=J,h!==null){const mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Nt=!1;mt.length!==O.cameras.length&&(O.cameras.length=0,Nt=!0);for(let qt=0;qt<mt.length;qt++){const Zt=mt[qt];let re=null;if(p!==null)re=p.getViewport(Zt);else{const Te=u.getViewSubImage(f,Zt);re=Te.viewport,qt===0&&(t.setRenderTargetTextures(y,Te.colorTexture,Te.depthStencilTexture),t.setRenderTarget(y))}let Bt=P[qt];Bt===void 0&&(Bt=new sn,Bt.layers.enable(qt),Bt.viewport=new Me,P[qt]=Bt),Bt.matrix.fromArray(Zt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(Zt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(re.x,re.y,re.width,re.height),qt===0&&(O.matrix.copy(Bt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Nt===!0&&O.cameras.push(Bt)}const xt=i.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const qt=u.getDepthInformation(mt[0]);qt&&qt.isValid&&qt.texture&&m.init(qt,i.renderState)}if(xt&&xt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let qt=0;qt<mt.length;qt++){const Zt=mt[qt].camera;if(Zt){let re=d[Zt];re||(re=new Rd,d[Zt]=re);const Bt=u.getCameraImage(Zt);re.sourceTexture=Bt}}}}for(let mt=0;mt<E.length;mt++){const Nt=b[mt],xt=E[mt];Nt!==null&&xt!==void 0&&xt.update(Nt,J,l||a)}Lt&&Lt($,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Gt=new Fd;Gt.setAnimationLoop(kt),this.setAnimationLoop=function($){Lt=$},this.dispose=function(){}}}const $i=new bn,WS=new ie;function XS(r,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Ed(r)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,x,M,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,x,M):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Qe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Qe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=t.get(d),M=x.envMap,y=x.envMapRotation;M&&(m.envMap.value=M,$i.copy(y),$i.x*=-1,$i.y*=-1,$i.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(WS.makeRotationFromEuler($i)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,x,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=M*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Qe&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const x=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function qS(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const y=M.program;n.uniformBlockBinding(x,y)}function l(x,M){let y=i[x.id];y===void 0&&(g(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",m));const E=M.program;n.updateUBOMapping(x,E);const b=t.render.frame;s[x.id]!==b&&(f(x),s[x.id]=b)}function h(x){const M=u();x.__bindingPointIndex=M;const y=r.createBuffer(),E=x.__size,b=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,E,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,y),y}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const M=i[x.id],y=x.uniforms,E=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let b=0,A=y.length;b<A;b++){const C=Array.isArray(y[b])?y[b]:[y[b]];for(let v=0,T=C.length;v<T;v++){const P=C[v];if(p(P,b,v,E)===!0){const O=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let W=0;W<F.length;W++){const k=F[W],B=_(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,O+X,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,X),X+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(x,M,y,E){const b=x.value,A=M+"_"+y;if(E[A]===void 0)return typeof b=="number"||typeof b=="boolean"?E[A]=b:E[A]=b.clone(),!0;{const C=E[A];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return E[A]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function g(x){const M=x.uniforms;let y=0;const E=16;for(let A=0,C=M.length;A<C;A++){const v=Array.isArray(M[A])?M[A]:[M[A]];for(let T=0,P=v.length;T<P;T++){const O=v[T],F=Array.isArray(O.value)?O.value:[O.value];for(let X=0,W=F.length;X<W;X++){const k=F[X],B=_(k),Y=y%E,st=Y%B.boundary,nt=Y+st;y+=st,nt!==0&&E-nt<B.storage&&(y+=E-nt),O.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=B.storage}}}const b=y%E;return b>0&&(y+=E-b),x.__size=y,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ct("WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const y=a.indexOf(M.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function d(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:c,update:l,dispose:d}}const YS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gn=null;function jS(){return Gn===null&&(Gn=new Ad(YS,16,16,Kr,gi),Gn.name="DFG_LUT",Gn.minFilter=Xe,Gn.magFilter=Xe,Gn.wrapS=di,Gn.wrapT=di,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}class Vd{constructor(t={}){const{canvas:e=og(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:p=xn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=p,m=new Set([$c,jc,Yc]),d=new Set([xn,Qn,Ds,Ls,Wc,Xc]),x=new Uint32Array(4),M=new Int32Array(4);let y=null,E=null;const b=[],A=[];let C=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let T=!1;this._outputColorSpace=Fe;let P=0,O=0,F=null,X=-1,W=null;const k=new Me,B=new Me;let Y=null;const st=new It(0);let nt=0,it=e.width,bt=e.height,Lt=1,kt=null,Gt=null;const $=new Me(0,0,it,bt),J=new Me(0,0,it,bt);let mt=!1;const Nt=new nh;let xt=!1,jt=!1;const Ue=new ie,qt=new I,Zt=new Me,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function Te(){return F===null?Lt:1}let D=n;function we(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vc}`),e.addEventListener("webglcontextlost",Ut,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",Jt,!1),D===null){const N="webgl2";if(D=we(N,w),D===null)throw we(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Yt("WebGLRenderer: "+w.message),w}let Kt,ce,Mt,R,S,U,j,Z,q,yt,at,vt,Dt,tt,lt,gt,St,ot,zt,L,ft,et,dt,Q;function K(){Kt=new jv(D),Kt.init(),et=new zS(D,Kt),ce=new zv(D,Kt,t,et),Mt=new OS(D,Kt),ce.reversedDepthBuffer&&f&&Mt.buffers.depth.setReversed(!0),R=new Zv(D),S=new yS,U=new BS(D,Kt,Mt,S,ce,et,R),j=new Vv(v),Z=new Yv(v),q=new e0(D),dt=new Ov(D,q),yt=new $v(D,q,R,dt),at=new Qv(D,yt,q,R),zt=new Jv(D,ce,U),gt=new kv(S),vt=new SS(v,j,Z,Kt,ce,dt,gt),Dt=new XS(v,S),tt=new bS,lt=new PS(Kt),ot=new Fv(v,j,Z,Mt,at,g,c),St=new NS(v,at,ce),Q=new qS(D,R,ce,Mt),L=new Bv(D,Kt,R),ft=new Kv(D,Kt,R),R.programs=vt.programs,v.capabilities=ce,v.extensions=Kt,v.properties=S,v.renderLists=tt,v.shadowMap=St,v.state=Mt,v.info=R}K(),_!==xn&&(C=new eM(_,e.width,e.height,i,s));const rt=new GS(v,D);this.xr=rt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=Kt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Kt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Lt},this.setPixelRatio=function(w){w!==void 0&&(Lt=w,this.setSize(it,bt,!1))},this.getSize=function(w){return w.set(it,bt)},this.setSize=function(w,N,G=!0){if(rt.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}it=w,bt=N,e.width=Math.floor(w*Lt),e.height=Math.floor(N*Lt),G===!0&&(e.style.width=w+"px",e.style.height=N+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(it*Lt,bt*Lt).floor()},this.setDrawingBufferSize=function(w,N,G){it=w,bt=N,Lt=G,e.width=Math.floor(w*G),e.height=Math.floor(N*G),this.setViewport(0,0,w,N)},this.setEffects=function(w){if(_===xn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let N=0;N<w.length;N++)if(w[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(k)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,N,G,V){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,N,G,V),Mt.viewport(k.copy($).multiplyScalar(Lt).round())},this.getScissor=function(w){return w.copy(J)},this.setScissor=function(w,N,G,V){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,N,G,V),Mt.scissor(B.copy(J).multiplyScalar(Lt).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(w){Mt.setScissorTest(mt=w)},this.setOpaqueSort=function(w){kt=w},this.setTransparentSort=function(w){Gt=w},this.getClearColor=function(w){return w.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(w=!0,N=!0,G=!0){let V=0;if(w){let z=!1;if(F!==null){const ct=F.texture.format;z=m.has(ct)}if(z){const ct=F.texture.type,pt=d.has(ct),ut=ot.getClearColor(),_t=ot.getClearAlpha(),Et=ut.r,Rt=ut.g,Tt=ut.b;pt?(x[0]=Et,x[1]=Rt,x[2]=Tt,x[3]=_t,D.clearBufferuiv(D.COLOR,0,x)):(M[0]=Et,M[1]=Rt,M[2]=Tt,M[3]=_t,D.clearBufferiv(D.COLOR,0,M))}else V|=D.COLOR_BUFFER_BIT}N&&(V|=D.DEPTH_BUFFER_BIT),G&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",Jt,!1),ot.dispose(),tt.dispose(),lt.dispose(),S.dispose(),j.dispose(),Z.dispose(),at.dispose(),dt.dispose(),Q.dispose(),vt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Dh),rt.removeEventListener("sessionend",Lh),Hi.stop()};function Ut(w){w.preventDefault(),ou("WebGLRenderer: Context Lost."),T=!0}function he(){ou("WebGLRenderer: Context Restored."),T=!1;const w=R.autoReset,N=St.enabled,G=St.autoUpdate,V=St.needsUpdate,z=St.type;K(),R.autoReset=w,St.enabled=N,St.autoUpdate=G,St.needsUpdate=V,St.type=z}function Jt(w){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Hn(w){const N=w.target;N.removeEventListener("dispose",Hn),ni(N)}function ni(w){Yp(w),S.remove(w)}function Yp(w){const N=S.get(w).programs;N!==void 0&&(N.forEach(function(G){vt.releaseProgram(G)}),w.isShaderMaterial&&vt.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,G,V,z,ct){N===null&&(N=re);const pt=z.isMesh&&z.matrixWorld.determinant()<0,ut=$p(w,N,G,V,z);Mt.setMaterial(V,pt);let _t=G.index,Et=1;if(V.wireframe===!0){if(_t=yt.getWireframeAttribute(G),_t===void 0)return;Et=2}const Rt=G.drawRange,Tt=G.attributes.position;let Vt=Rt.start*Et,ee=(Rt.start+Rt.count)*Et;ct!==null&&(Vt=Math.max(Vt,ct.start*Et),ee=Math.min(ee,(ct.start+ct.count)*Et)),_t!==null?(Vt=Math.max(Vt,0),ee=Math.min(ee,_t.count)):Tt!=null&&(Vt=Math.max(Vt,0),ee=Math.min(ee,Tt.count));const xe=ee-Vt;if(xe<0||xe===1/0)return;dt.setup(z,V,ut,G,_t);let ve,se=L;if(_t!==null&&(ve=q.get(_t),se=ft,se.setIndex(ve)),z.isMesh)V.wireframe===!0?(Mt.setLineWidth(V.wireframeLinewidth*Te()),se.setMode(D.LINES)):se.setMode(D.TRIANGLES);else if(z.isLine){let wt=V.linewidth;wt===void 0&&(wt=1),Mt.setLineWidth(wt*Te()),z.isLineSegments?se.setMode(D.LINES):z.isLineLoop?se.setMode(D.LINE_LOOP):se.setMode(D.LINE_STRIP)}else z.isPoints?se.setMode(D.POINTS):z.isSprite&&se.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Us("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),se.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))se.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const wt=z._multiDrawStarts,Qt=z._multiDrawCounts,$t=z._multiDrawCount,dn=_t?q.get(_t).bytesPerElement:1,gr=S.get(V).currentProgram.getUniforms();for(let pn=0;pn<$t;pn++)gr.setValue(D,"_gl_DrawID",pn),se.render(wt[pn]/dn,Qt[pn])}else if(z.isInstancedMesh)se.renderInstances(Vt,xe,z.count);else if(G.isInstancedBufferGeometry){const wt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Qt=Math.min(G.instanceCount,wt);se.renderInstances(Vt,xe,Qt)}else se.render(Vt,xe)};function Ph(w,N,G){w.transparent===!0&&w.side===fi&&w.forceSinglePass===!1?(w.side=Qe,w.needsUpdate=!0,Qs(w,N,G),w.side=_i,w.needsUpdate=!0,Qs(w,N,G),w.side=fi):Qs(w,N,G)}this.compile=function(w,N,G=null){G===null&&(G=w),E=lt.get(G),E.init(N),A.push(E),G.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),w!==G&&w.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights();const V=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ct=z.material;if(ct)if(Array.isArray(ct))for(let pt=0;pt<ct.length;pt++){const ut=ct[pt];Ph(ut,G,z),V.add(ut)}else Ph(ct,G,z),V.add(ct)}),E=A.pop(),V},this.compileAsync=function(w,N,G=null){const V=this.compile(w,N,G);return new Promise(z=>{function ct(){if(V.forEach(function(pt){S.get(pt).currentProgram.isReady()&&V.delete(pt)}),V.size===0){z(w);return}setTimeout(ct,10)}Kt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Eo=null;function jp(w){Eo&&Eo(w)}function Dh(){Hi.stop()}function Lh(){Hi.start()}const Hi=new Fd;Hi.setAnimationLoop(jp),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(w){Eo=w,rt.setAnimationLoop(w),w===null?Hi.stop():Hi.start()},rt.addEventListener("sessionstart",Dh),rt.addEventListener("sessionend",Lh),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const G=rt.enabled===!0&&rt.isPresenting===!0,V=C!==null&&(F===null||G)&&C.begin(v,F);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(N),N=rt.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,N,F),E=lt.get(w,A.length),E.init(N),A.push(E),Ue.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Nt.setFromProjectionMatrix(Ue,$n,N.reversedDepth),jt=this.localClippingEnabled,xt=gt.init(this.clippingPlanes,jt),y=tt.get(w,b.length),y.init(),b.push(y),rt.enabled===!0&&rt.isPresenting===!0){const pt=v.xr.getDepthSensingMesh();pt!==null&&bo(pt,N,-1/0,v.sortObjects)}bo(w,N,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(kt,Gt),Bt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Bt&&ot.addToRenderList(y,w),this.info.render.frame++,xt===!0&&gt.beginShadows();const z=E.state.shadowsArray;if(St.render(z,w,N),xt===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&C.hasRenderPass())===!1){const pt=y.opaque,ut=y.transmissive;if(E.setupLights(),N.isArrayCamera){const _t=N.cameras;if(ut.length>0)for(let Et=0,Rt=_t.length;Et<Rt;Et++){const Tt=_t[Et];Uh(pt,ut,w,Tt)}Bt&&ot.render(w);for(let Et=0,Rt=_t.length;Et<Rt;Et++){const Tt=_t[Et];Ih(y,w,Tt,Tt.viewport)}}else ut.length>0&&Uh(pt,ut,w,N),Bt&&ot.render(w),Ih(y,w,N)}F!==null&&O===0&&(U.updateMultisampleRenderTarget(F),U.updateRenderTargetMipmap(F)),V&&C.end(v),w.isScene===!0&&w.onAfterRender(v,w,N),dt.resetDefaultState(),X=-1,W=null,A.pop(),A.length>0?(E=A[A.length-1],xt===!0&&gt.setGlobalState(v.clippingPlanes,E.state.camera)):E=null,b.pop(),b.length>0?y=b[b.length-1]:y=null};function bo(w,N,G,V){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Nt.intersectsSprite(w)){V&&Zt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ue);const pt=at.update(w),ut=w.material;ut.visible&&y.push(w,pt,ut,G,Zt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Nt.intersectsObject(w))){const pt=at.update(w),ut=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Zt.copy(w.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Zt.copy(pt.boundingSphere.center)),Zt.applyMatrix4(w.matrixWorld).applyMatrix4(Ue)),Array.isArray(ut)){const _t=pt.groups;for(let Et=0,Rt=_t.length;Et<Rt;Et++){const Tt=_t[Et],Vt=ut[Tt.materialIndex];Vt&&Vt.visible&&y.push(w,pt,Vt,G,Zt.z,Tt)}}else ut.visible&&y.push(w,pt,ut,G,Zt.z,null)}}const ct=w.children;for(let pt=0,ut=ct.length;pt<ut;pt++)bo(ct[pt],N,G,V)}function Ih(w,N,G,V){const{opaque:z,transmissive:ct,transparent:pt}=w;E.setupLightsView(G),xt===!0&&gt.setGlobalState(v.clippingPlanes,G),V&&Mt.viewport(k.copy(V)),z.length>0&&Js(z,N,G),ct.length>0&&Js(ct,N,G),pt.length>0&&Js(pt,N,G),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Uh(w,N,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){const Vt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new Jn(1,1,{generateMipmaps:!0,type:Vt?gi:xn,minFilter:nr,samples:ce.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace})}const ct=E.state.transmissionRenderTarget[V.id],pt=V.viewport||k;ct.setSize(pt.z*v.transmissionResolutionScale,pt.w*v.transmissionResolutionScale);const ut=v.getRenderTarget(),_t=v.getActiveCubeFace(),Et=v.getActiveMipmapLevel();v.setRenderTarget(ct),v.getClearColor(st),nt=v.getClearAlpha(),nt<1&&v.setClearColor(16777215,.5),v.clear(),Bt&&ot.render(G);const Rt=v.toneMapping;v.toneMapping=Zn;const Tt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),xt===!0&&gt.setGlobalState(v.clippingPlanes,V),Js(w,G,V),U.updateMultisampleRenderTarget(ct),U.updateRenderTargetMipmap(ct),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let ee=0,xe=N.length;ee<xe;ee++){const ve=N[ee],{object:se,geometry:wt,material:Qt,group:$t}=ve;if(Qt.side===fi&&se.layers.test(V.layers)){const dn=Qt.side;Qt.side=Qe,Qt.needsUpdate=!0,Nh(se,G,V,wt,Qt,$t),Qt.side=dn,Qt.needsUpdate=!0,Vt=!0}}Vt===!0&&(U.updateMultisampleRenderTarget(ct),U.updateRenderTargetMipmap(ct))}v.setRenderTarget(ut,_t,Et),v.setClearColor(st,nt),Tt!==void 0&&(V.viewport=Tt),v.toneMapping=Rt}function Js(w,N,G){const V=N.isScene===!0?N.overrideMaterial:null;for(let z=0,ct=w.length;z<ct;z++){const pt=w[z],{object:ut,geometry:_t,group:Et}=pt;let Rt=pt.material;Rt.allowOverride===!0&&V!==null&&(Rt=V),ut.layers.test(G.layers)&&Nh(ut,N,G,_t,Rt,Et)}}function Nh(w,N,G,V,z,ct){w.onBeforeRender(v,N,G,V,z,ct),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(v,N,G,V,w,ct),z.transparent===!0&&z.side===fi&&z.forceSinglePass===!1?(z.side=Qe,z.needsUpdate=!0,v.renderBufferDirect(G,N,V,z,w,ct),z.side=_i,z.needsUpdate=!0,v.renderBufferDirect(G,N,V,z,w,ct),z.side=fi):v.renderBufferDirect(G,N,V,z,w,ct),w.onAfterRender(v,N,G,V,z,ct)}function Qs(w,N,G){N.isScene!==!0&&(N=re);const V=S.get(w),z=E.state.lights,ct=E.state.shadowsArray,pt=z.state.version,ut=vt.getParameters(w,z.state,ct,N,G),_t=vt.getProgramCacheKey(ut);let Et=V.programs;V.environment=w.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(w.isMeshStandardMaterial?Z:j).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Et===void 0&&(w.addEventListener("dispose",Hn),Et=new Map,V.programs=Et);let Rt=Et.get(_t);if(Rt!==void 0){if(V.currentProgram===Rt&&V.lightsStateVersion===pt)return Oh(w,ut),Rt}else ut.uniforms=vt.getUniforms(w),w.onBeforeCompile(ut,v),Rt=vt.acquireProgram(ut,_t),Et.set(_t,Rt),V.uniforms=ut.uniforms;const Tt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Tt.clippingPlanes=gt.uniform),Oh(w,ut),V.needsLights=Zp(w),V.lightsStateVersion=pt,V.needsLights&&(Tt.ambientLightColor.value=z.state.ambient,Tt.lightProbe.value=z.state.probe,Tt.directionalLights.value=z.state.directional,Tt.directionalLightShadows.value=z.state.directionalShadow,Tt.spotLights.value=z.state.spot,Tt.spotLightShadows.value=z.state.spotShadow,Tt.rectAreaLights.value=z.state.rectArea,Tt.ltc_1.value=z.state.rectAreaLTC1,Tt.ltc_2.value=z.state.rectAreaLTC2,Tt.pointLights.value=z.state.point,Tt.pointLightShadows.value=z.state.pointShadow,Tt.hemisphereLights.value=z.state.hemi,Tt.directionalShadowMap.value=z.state.directionalShadowMap,Tt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Tt.spotShadowMap.value=z.state.spotShadowMap,Tt.spotLightMatrix.value=z.state.spotLightMatrix,Tt.spotLightMap.value=z.state.spotLightMap,Tt.pointShadowMap.value=z.state.pointShadowMap,Tt.pointShadowMatrix.value=z.state.pointShadowMatrix),V.currentProgram=Rt,V.uniformsList=null,Rt}function Fh(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=Ga.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Oh(w,N){const G=S.get(w);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function $p(w,N,G,V,z){N.isScene!==!0&&(N=re),U.resetTextureUnits();const ct=N.fog,pt=V.isMeshStandardMaterial?N.environment:null,ut=F===null?v.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Zr,_t=(V.isMeshStandardMaterial?Z:j).get(V.envMap||pt),Et=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Rt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Tt=!!G.morphAttributes.position,Vt=!!G.morphAttributes.normal,ee=!!G.morphAttributes.color;let xe=Zn;V.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(xe=v.toneMapping);const ve=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,se=ve!==void 0?ve.length:0,wt=S.get(V),Qt=E.state.lights;if(xt===!0&&(jt===!0||w!==W)){const $e=w===W&&V.id===X;gt.setState(V,w,$e)}let $t=!1;V.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Qt.state.version||wt.outputColorSpace!==ut||z.isBatchedMesh&&wt.batching===!1||!z.isBatchedMesh&&wt.batching===!0||z.isBatchedMesh&&wt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&wt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&wt.instancing===!1||!z.isInstancedMesh&&wt.instancing===!0||z.isSkinnedMesh&&wt.skinning===!1||!z.isSkinnedMesh&&wt.skinning===!0||z.isInstancedMesh&&wt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&wt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&wt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&wt.instancingMorph===!1&&z.morphTexture!==null||wt.envMap!==_t||V.fog===!0&&wt.fog!==ct||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==gt.numPlanes||wt.numIntersection!==gt.numIntersection)||wt.vertexAlphas!==Et||wt.vertexTangents!==Rt||wt.morphTargets!==Tt||wt.morphNormals!==Vt||wt.morphColors!==ee||wt.toneMapping!==xe||wt.morphTargetsCount!==se)&&($t=!0):($t=!0,wt.__version=V.version);let dn=wt.currentProgram;$t===!0&&(dn=Qs(V,N,z));let gr=!1,pn=!1,cs=!1;const ue=dn.getUniforms(),tn=wt.uniforms;if(Mt.useProgram(dn.program)&&(gr=!0,pn=!0,cs=!0),V.id!==X&&(X=V.id,pn=!0),gr||W!==w){Mt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ue.setValue(D,"projectionMatrix",w.projectionMatrix),ue.setValue(D,"viewMatrix",w.matrixWorldInverse);const en=ue.map.cameraPosition;en!==void 0&&en.setValue(D,qt.setFromMatrixPosition(w.matrixWorld)),ce.logarithmicDepthBuffer&&ue.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ue.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),W!==w&&(W=w,pn=!0,cs=!0)}if(wt.needsLights&&(Qt.state.directionalShadowMap.length>0&&ue.setValue(D,"directionalShadowMap",Qt.state.directionalShadowMap,U),Qt.state.spotShadowMap.length>0&&ue.setValue(D,"spotShadowMap",Qt.state.spotShadowMap,U),Qt.state.pointShadowMap.length>0&&ue.setValue(D,"pointShadowMap",Qt.state.pointShadowMap,U)),z.isSkinnedMesh){ue.setOptional(D,z,"bindMatrix"),ue.setOptional(D,z,"bindMatrixInverse");const $e=z.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),ue.setValue(D,"boneTexture",$e.boneTexture,U))}z.isBatchedMesh&&(ue.setOptional(D,z,"batchingTexture"),ue.setValue(D,"batchingTexture",z._matricesTexture,U),ue.setOptional(D,z,"batchingIdTexture"),ue.setValue(D,"batchingIdTexture",z._indirectTexture,U),ue.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&ue.setValue(D,"batchingColorTexture",z._colorsTexture,U));const An=G.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&zt.update(z,G,dn),(pn||wt.receiveShadow!==z.receiveShadow)&&(wt.receiveShadow=z.receiveShadow,ue.setValue(D,"receiveShadow",z.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(tn.envMap.value=_t,tn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(tn.envMapIntensity.value=N.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=jS()),pn&&(ue.setValue(D,"toneMappingExposure",v.toneMappingExposure),wt.needsLights&&Kp(tn,cs),ct&&V.fog===!0&&Dt.refreshFogUniforms(tn,ct),Dt.refreshMaterialUniforms(tn,V,Lt,bt,E.state.transmissionRenderTarget[w.id]),Ga.upload(D,Fh(wt),tn,U)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ga.upload(D,Fh(wt),tn,U),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ue.setValue(D,"center",z.center),ue.setValue(D,"modelViewMatrix",z.modelViewMatrix),ue.setValue(D,"normalMatrix",z.normalMatrix),ue.setValue(D,"modelMatrix",z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const $e=V.uniformsGroups;for(let en=0,To=$e.length;en<To;en++){const Gi=$e[en];Q.update(Gi,dn),Q.bind(Gi,dn)}}return dn}function Kp(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Zp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,N,G){const V=S.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),S.get(w.texture).__webglTexture=N,S.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,N){const G=S.get(w);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0};const Jp=D.createFramebuffer();this.setRenderTarget=function(w,N=0,G=0){F=w,P=N,O=G;let V=null,z=!1,ct=!1;if(w){const ut=S.get(w);if(ut.__useDefaultFramebuffer!==void 0){Mt.bindFramebuffer(D.FRAMEBUFFER,ut.__webglFramebuffer),k.copy(w.viewport),B.copy(w.scissor),Y=w.scissorTest,Mt.viewport(k),Mt.scissor(B),Mt.setScissorTest(Y),X=-1;return}else if(ut.__webglFramebuffer===void 0)U.setupRenderTarget(w);else if(ut.__hasExternalTextures)U.rebindTextures(w,S.get(w.texture).__webglTexture,S.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Rt=w.depthTexture;if(ut.__boundDepthTexture!==Rt){if(Rt!==null&&S.has(Rt)&&(w.width!==Rt.image.width||w.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(w)}}const _t=w.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(ct=!0);const Et=S.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Et[N])?V=Et[N][G]:V=Et[N],z=!0):w.samples>0&&U.useMultisampledRTT(w)===!1?V=S.get(w).__webglMultisampledFramebuffer:Array.isArray(Et)?V=Et[G]:V=Et,k.copy(w.viewport),B.copy(w.scissor),Y=w.scissorTest}else k.copy($).multiplyScalar(Lt).floor(),B.copy(J).multiplyScalar(Lt).floor(),Y=mt;if(G!==0&&(V=Jp),Mt.bindFramebuffer(D.FRAMEBUFFER,V)&&Mt.drawBuffers(w,V),Mt.viewport(k),Mt.scissor(B),Mt.setScissorTest(Y),z){const ut=S.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,ut.__webglTexture,G)}else if(ct){const ut=N;for(let _t=0;_t<w.textures.length;_t++){const Et=S.get(w.textures[_t]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+_t,Et.__webglTexture,G,ut)}}else if(w!==null&&G!==0){const ut=S.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ut.__webglTexture,G)}X=-1},this.readRenderTargetPixels=function(w,N,G,V,z,ct,pt,ut=0){if(!(w&&w.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=S.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pt!==void 0&&(_t=_t[pt]),_t){Mt.bindFramebuffer(D.FRAMEBUFFER,_t);try{const Et=w.textures[ut],Rt=Et.format,Tt=Et.type;if(!ce.textureFormatReadable(Rt)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(Tt)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-V&&G>=0&&G<=w.height-z&&(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ut),D.readPixels(N,G,V,z,et.convert(Rt),et.convert(Tt),ct))}finally{const Et=F!==null?S.get(F).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(w,N,G,V,z,ct,pt,ut=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=S.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pt!==void 0&&(_t=_t[pt]),_t)if(N>=0&&N<=w.width-V&&G>=0&&G<=w.height-z){Mt.bindFramebuffer(D.FRAMEBUFFER,_t);const Et=w.textures[ut],Rt=Et.format,Tt=Et.type;if(!ce.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Vt),D.bufferData(D.PIXEL_PACK_BUFFER,ct.byteLength,D.STREAM_READ),w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ut),D.readPixels(N,G,V,z,et.convert(Rt),et.convert(Tt),0);const ee=F!==null?S.get(F).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,ee);const xe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await lg(D,xe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Vt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ct),D.deleteBuffer(Vt),D.deleteSync(xe),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,N=null,G=0){const V=Math.pow(2,-G),z=Math.floor(w.image.width*V),ct=Math.floor(w.image.height*V),pt=N!==null?N.x:0,ut=N!==null?N.y:0;U.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,pt,ut,z,ct),Mt.unbindTexture()};const Qp=D.createFramebuffer(),tm=D.createFramebuffer();this.copyTextureToTexture=function(w,N,G=null,V=null,z=0,ct=null){ct===null&&(z!==0?(Us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=z,z=0):ct=0);let pt,ut,_t,Et,Rt,Tt,Vt,ee,xe;const ve=w.isCompressedTexture?w.mipmaps[ct]:w.image;if(G!==null)pt=G.max.x-G.min.x,ut=G.max.y-G.min.y,_t=G.isBox3?G.max.z-G.min.z:1,Et=G.min.x,Rt=G.min.y,Tt=G.isBox3?G.min.z:0;else{const An=Math.pow(2,-z);pt=Math.floor(ve.width*An),ut=Math.floor(ve.height*An),w.isDataArrayTexture?_t=ve.depth:w.isData3DTexture?_t=Math.floor(ve.depth*An):_t=1,Et=0,Rt=0,Tt=0}V!==null?(Vt=V.x,ee=V.y,xe=V.z):(Vt=0,ee=0,xe=0);const se=et.convert(N.format),wt=et.convert(N.type);let Qt;N.isData3DTexture?(U.setTexture3D(N,0),Qt=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(U.setTexture2DArray(N,0),Qt=D.TEXTURE_2D_ARRAY):(U.setTexture2D(N,0),Qt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const $t=D.getParameter(D.UNPACK_ROW_LENGTH),dn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),gr=D.getParameter(D.UNPACK_SKIP_PIXELS),pn=D.getParameter(D.UNPACK_SKIP_ROWS),cs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ve.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ve.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Et),D.pixelStorei(D.UNPACK_SKIP_ROWS,Rt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Tt);const ue=w.isDataArrayTexture||w.isData3DTexture,tn=N.isDataArrayTexture||N.isData3DTexture;if(w.isDepthTexture){const An=S.get(w),$e=S.get(N),en=S.get(An.__renderTarget),To=S.get($e.__renderTarget);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,en.__webglFramebuffer),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,To.__webglFramebuffer);for(let Gi=0;Gi<_t;Gi++)ue&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,S.get(w).__webglTexture,z,Tt+Gi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,S.get(N).__webglTexture,ct,xe+Gi)),D.blitFramebuffer(Et,Rt,pt,ut,Vt,ee,pt,ut,D.DEPTH_BUFFER_BIT,D.NEAREST);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||w.isRenderTargetTexture||S.has(w)){const An=S.get(w),$e=S.get(N);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,Qp),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,tm);for(let en=0;en<_t;en++)ue?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,An.__webglTexture,z,Tt+en):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,An.__webglTexture,z),tn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$e.__webglTexture,ct,xe+en):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,$e.__webglTexture,ct),z!==0?D.blitFramebuffer(Et,Rt,pt,ut,Vt,ee,pt,ut,D.COLOR_BUFFER_BIT,D.NEAREST):tn?D.copyTexSubImage3D(Qt,ct,Vt,ee,xe+en,Et,Rt,pt,ut):D.copyTexSubImage2D(Qt,ct,Vt,ee,Et,Rt,pt,ut);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else tn?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Qt,ct,Vt,ee,xe,pt,ut,_t,se,wt,ve.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Qt,ct,Vt,ee,xe,pt,ut,_t,se,ve.data):D.texSubImage3D(Qt,ct,Vt,ee,xe,pt,ut,_t,se,wt,ve):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ct,Vt,ee,pt,ut,se,wt,ve.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ct,Vt,ee,ve.width,ve.height,se,ve.data):D.texSubImage2D(D.TEXTURE_2D,ct,Vt,ee,pt,ut,se,wt,ve);D.pixelStorei(D.UNPACK_ROW_LENGTH,$t),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,dn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,gr),D.pixelStorei(D.UNPACK_SKIP_ROWS,pn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,cs),ct===0&&N.generateMipmaps&&D.generateMipmap(Qt),Mt.unbindTexture()},this.initRenderTarget=function(w){S.get(w).__webglFramebuffer===void 0&&U.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?U.setTextureCube(w,0):w.isData3DTexture?U.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?U.setTexture2DArray(w,0):U.setTexture2D(w,0),Mt.unbindTexture()},this.resetState=function(){P=0,O=0,F=null,Mt.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}const $S=/^[og]\s*(.+)?/,KS=/^mtllib /,ZS=/^usemtl /,JS=/^usemap /,cf=/\s+/,hf=new I,ol=new I,uf=new I,ff=new I,Pn=new I,wa=new It;function QS(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const i=this.vertices,s=this.object.geometry.vertices;s.push(i[t+0],i[t+1],i[t+2]),s.push(i[e+0],i[e+1],i[e+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const i=this.normals,s=this.object.geometry.normals;s.push(i[t+0],i[t+1],i[t+2]),s.push(i[e+0],i[e+1],i[e+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(t,e,n){const i=this.vertices,s=this.object.geometry.normals;hf.fromArray(i,t),ol.fromArray(i,e),uf.fromArray(i,n),Pn.subVectors(uf,ol),ff.subVectors(hf,ol),Pn.cross(ff),Pn.normalize(),s.push(Pn.x,Pn.y,Pn.z),s.push(Pn.x,Pn.y,Pn.z),s.push(Pn.x,Pn.y,Pn.z)},addColor:function(t,e,n){const i=this.colors,s=this.object.geometry.colors;i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(t,e,n){const i=this.uvs,s=this.object.geometry.uvs;s.push(i[t+0],i[t+1]),s.push(i[e+0],i[e+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,i,s,a,o,c,l){const h=this.vertices.length;let u=this.parseVertexIndex(t,h),f=this.parseVertexIndex(e,h),p=this.parseVertexIndex(n,h);if(this.addVertex(u,f,p),this.addColor(u,f,p),o!==void 0&&o!==""){const g=this.normals.length;u=this.parseNormalIndex(o,g),f=this.parseNormalIndex(c,g),p=this.parseNormalIndex(l,g),this.addNormal(u,f,p)}else this.addFaceNormal(u,f,p);if(i!==void 0&&i!==""){const g=this.uvs.length;u=this.parseUVIndex(i,g),f=this.parseUVIndex(s,g),p=this.parseUVIndex(a,g),this.addUV(u,f,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,i=t.length;n<i;n++){const s=this.parseVertexIndex(t[n],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let s=0,a=t.length;s<a;s++)this.addVertexLine(this.parseVertexIndex(t[s],n));for(let s=0,a=e.length;s<a;s++)this.addUVLine(this.parseUVIndex(e[s],i))}};return r.startObject("",!1),r}class ty extends os{constructor(t){super(t),this.materials=null}load(t,e,n,i){const s=this,a=new Dd(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(s.parse(o))}catch(c){i?i(c):console.error(c),s.manager.itemError(t)}},n,i)}setMaterials(t){return this.materials=t,this}parse(t){const e=new QS;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let i=[];for(let o=0,c=n.length;o<c;o++){const l=n[o].trimStart();if(l.length===0)continue;const h=l.charAt(0);if(h!=="#")if(h==="v"){const u=l.split(cf);switch(u[0]){case"v":e.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(wa.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),Fe),e.colors.push(wa.r,wa.g,wa.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":e.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){const f=l.slice(1).trim().split(cf),p=[];for(let _=0,m=f.length;_<m;_++){const d=f[_];if(d.length>0){const x=d.split("/");p.push(x)}}const g=p[0];for(let _=1,m=p.length-1;_<m;_++){const d=p[_],x=p[_+1];e.addFace(g[0],d[0],x[0],g[1],d[1],x[1],g[2],d[2],x[2])}}else if(h==="l"){const u=l.substring(1).trim().split(" ");let f=[];const p=[];if(l.indexOf("/")===-1)f=u;else for(let g=0,_=u.length;g<_;g++){const m=u[g].split("/");m[0]!==""&&f.push(m[0]),m[1]!==""&&p.push(m[1])}e.addLineGeometry(f,p)}else if(h==="p"){const f=l.slice(1).trim().split(" ");e.addPointGeometry(f)}else if((i=$S.exec(l))!==null){const u=(" "+i[0].slice(1).trim()).slice(1);e.startObject(u)}else if(ZS.test(l))e.object.startMaterial(l.substring(7).trim(),e.materialLibraries);else if(KS.test(l))e.materialLibraries.push(l.substring(7).trim());else if(JS.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(i=l.split(" "),i.length>1){const f=i[1].trim().toLowerCase();e.object.smooth=f!=="0"&&f!=="off"}else e.object.smooth=!0;const u=e.object.currentMaterial();u&&(u.smooth=e.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}e.finalize();const s=new Es;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let o=0,c=e.objects.length;o<c;o++){const l=e.objects[o],h=l.geometry,u=l.materials,f=h.type==="Line",p=h.type==="Points";let g=!1;if(h.vertices.length===0)continue;const _=new je;_.setAttribute("position",new fe(h.vertices,3)),h.normals.length>0&&_.setAttribute("normal",new fe(h.normals,3)),h.colors.length>0&&(g=!0,_.setAttribute("color",new fe(h.colors,3))),h.hasUVIndices===!0&&_.setAttribute("uv",new fe(h.uvs,2));const m=[];for(let x=0,M=u.length;x<M;x++){const y=u[x],E=y.name+"_"+y.smooth+"_"+g;let b=e.materials[E];if(this.materials!==null){if(b=this.materials.create(y.name),f&&b&&!(b instanceof Va)){const A=new Va;kn.prototype.copy.call(A,b),A.color.copy(b.color),b=A}else if(p&&b&&!(b instanceof Br)){const A=new Br({size:10,sizeAttenuation:!1});kn.prototype.copy.call(A,b),A.color.copy(b.color),A.map=b.map,b=A}}b===void 0&&(f?b=new Va:p?b=new Br({size:1,sizeAttenuation:!1}):b=new Cd,b.name=y.name,b.flatShading=!y.smooth,b.vertexColors=g,e.materials[E]=b),m.push(b)}let d;if(m.length>1){for(let x=0,M=u.length;x<M;x++){const y=u[x];_.addGroup(y.groupStart,y.groupCount,x)}f?d=new Du(_,m):p?d=new Ha(_,m):d=new Ee(_,m)}else f?d=new Du(_,m[0]):p?d=new Ha(_,m[0]):d=new Ee(_,m[0]);d.name=l.name,s.add(d)}else if(e.vertices.length>0){const o=new Br({size:1,sizeAttenuation:!1}),c=new je;c.setAttribute("position",new fe(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(c.setAttribute("color",new fe(e.colors,3)),o.vertexColors=!0);const l=new Ha(c,o);s.add(l)}return s}}class ey extends os{constructor(t){super(t)}load(t,e,n,i){const s=this,a=this.path===""?Zg.extractUrlBase(t):this.path,o=new Dd(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(c){try{e(s.parse(c,a))}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}setMaterialOptions(t){return this.materialOptions=t,this}parse(t,e){const n=t.split(`
`);let i={};const s=/\s+/,a={};for(let c=0;c<n.length;c++){let l=n[c];if(l=l.trim(),l.length===0||l.charAt(0)==="#")continue;const h=l.indexOf(" ");let u=h>=0?l.substring(0,h):l;u=u.toLowerCase();let f=h>=0?l.substring(h+1):"";if(f=f.trim(),u==="newmtl")i={name:f},a[f]=i;else if(u==="ka"||u==="kd"||u==="ks"||u==="ke"){const p=f.split(s,3);i[u]=[parseFloat(p[0]),parseFloat(p[1]),parseFloat(p[2])]}else i[u]=f}const o=new ny(this.resourcePath||e,this.materialOptions);return o.setCrossOrigin(this.crossOrigin),o.setManager(this.manager),o.setMaterials(a),o}}class ny{constructor(t="",e={}){this.baseUrl=t,this.options=e,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:_i,this.wrap=this.options.wrap!==void 0?this.options.wrap:ja}setCrossOrigin(t){return this.crossOrigin=t,this}setManager(t){this.manager=t}setMaterials(t){this.materialsInfo=this.convert(t),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(t){if(!this.options)return t;const e={};for(const n in t){const i=t[n],s={};e[n]=s;for(const a in i){let o=!0,c=i[a];const l=a.toLowerCase();switch(l){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(c=[c[0]/255,c[1]/255,c[2]/255]),this.options&&this.options.ignoreZeroRGBs&&c[0]===0&&c[1]===0&&c[2]===0&&(o=!1);break}o&&(s[l]=c)}}return e}preload(){for(const t in this.materialsInfo)this.create(t)}getIndex(t){return this.nameLookup[t]}getAsArray(){let t=0;for(const e in this.materialsInfo)this.materialsArray[t]=this.create(e),this.nameLookup[e]=t,t++;return this.materialsArray}create(t){return this.materials[t]===void 0&&this.createMaterial_(t),this.materials[t]}createMaterial_(t){const e=this,n=this.materialsInfo[t],i={name:t,side:this.side};function s(o,c){return typeof c!="string"||c===""?"":/^https?:\/\//i.test(c)?c:o+c}function a(o,c){if(i[o])return;const l=e.getTextureParams(c,i),h=e.loadTexture(s(e.baseUrl,l.url));h.repeat.copy(l.scale),h.offset.copy(l.offset),h.wrapS=e.wrap,h.wrapT=e.wrap,(o==="map"||o==="emissiveMap")&&(h.colorSpace=Fe),i[o]=h}for(const o in n){const c=n[o];let l;if(c!=="")switch(o.toLowerCase()){case"kd":i.color=Wt.colorSpaceToWorking(new It().fromArray(c),Fe);break;case"ks":i.specular=Wt.colorSpaceToWorking(new It().fromArray(c),Fe);break;case"ke":i.emissive=Wt.colorSpaceToWorking(new It().fromArray(c),Fe);break;case"map_kd":a("map",c);break;case"map_ks":a("specularMap",c);break;case"map_ke":a("emissiveMap",c);break;case"norm":a("normalMap",c);break;case"map_bump":case"bump":a("bumpMap",c);break;case"disp":a("displacementMap",c);break;case"map_d":a("alphaMap",c),i.transparent=!0;break;case"ns":i.shininess=parseFloat(c);break;case"d":l=parseFloat(c),l<1&&(i.opacity=l,i.transparent=!0);break;case"tr":l=parseFloat(c),this.options&&this.options.invertTrProperty&&(l=1-l),l>0&&(i.opacity=1-l,i.transparent=!0);break}}return this.materials[t]=new Cd(i),this.materials[t]}getTextureParams(t,e){const n={scale:new At(1,1),offset:new At(0,0)},i=t.split(/\s+/);let s;return s=i.indexOf("-bm"),s>=0&&(e.bumpScale=parseFloat(i[s+1]),i.splice(s,2)),s=i.indexOf("-mm"),s>=0&&(e.displacementBias=parseFloat(i[s+1]),e.displacementScale=parseFloat(i[s+2]),i.splice(s,3)),s=i.indexOf("-s"),s>=0&&(n.scale.set(parseFloat(i[s+1]),parseFloat(i[s+2])),i.splice(s,4)),s=i.indexOf("-o"),s>=0&&(n.offset.set(parseFloat(i[s+1]),parseFloat(i[s+2])),i.splice(s,4)),n.url=i.join(" ").trim(),n}loadTexture(t,e,n,i,s){const a=this.manager!==void 0?this.manager:Pd;let o=a.getHandler(t);o===null&&(o=new jg(a)),o.setCrossOrigin&&o.setCrossOrigin(this.crossOrigin);const c=o.load(t,n,i,s);return e!==void 0&&(c.mapping=e),c}}class iy extends eh{constructor(){super(),this.name="RoomEnvironment";const t=new as;t.deleteAttribute("uv");const e=new pc({side:Qe}),n=new pc,i=new ch(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new Ee(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new Ng(t,n,6),o=new De;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new Ee(t,Ur(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new Ee(t,Ur(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new Ee(t,Ur(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new Ee(t,Ur(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const f=new Ee(t,Ur(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const p=new Ee(t,Ur(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ur(r){return new Hg({color:0,emissive:16777215,emissiveIntensity:r})}function hi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Hd(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var En={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Qr={duration:.5,overwrite:!1,delay:0},uh,ze,pe,Ln=1e8,le=1/Ln,vc=Math.PI*2,ry=vc/4,sy=0,Gd=Math.sqrt,ay=Math.cos,oy=Math.sin,Oe=function(t){return typeof t=="string"},Se=function(t){return typeof t=="function"},vi=function(t){return typeof t=="number"},fh=function(t){return typeof t>"u"},ei=function(t){return typeof t=="object"},ln=function(t){return t!==!1},dh=function(){return typeof window<"u"},Aa=function(t){return Se(t)||Oe(t)},Wd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ye=Array.isArray,ly=/random\([^)]+\)/g,cy=/,\s*/g,df=/(?:-?\.?\d|\.)+/gi,Xd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,zr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ll=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,qd=/[+-]=-?[.\d]+/,hy=/[^,'"\[\]\s]+/gi,uy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,_e,qn,Mc,ph,Tn={},Qa={},Yd,jd=function(t){return(Qa=ts(t,Tn))&&fn},mh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Fs=function(t,e){return!e&&console.warn(t)},$d=function(t,e){return t&&(Tn[t]=e)&&Qa&&(Qa[t]=e)||Tn},Os=function(){return 0},fy={suppressEvents:!0,isStart:!0,kill:!1},Wa={suppressEvents:!0,kill:!1},dy={suppressEvents:!0},_h={},Ui=[],Sc={},Kd,gn={},cl={},pf=30,Xa=[],gh="",xh=function(t){var e=t[0],n,i;if(ei(e)||Se(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Xa.length;i--&&!Xa[i].targetTest(e););n=Xa[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Mp(t[i],n)))||t.splice(i,1);return t},ar=function(t){return t._gsap||xh(In(t))[0]._gsap},Zd=function(t,e,n){return(n=t[e])&&Se(n)?t[e]():fh(n)&&t.getAttribute&&t.getAttribute(e)||n},cn=function(t,e){return(t=t.split(",")).forEach(e)||t},ye=function(t){return Math.round(t*1e5)/1e5||0},me=function(t){return Math.round(t*1e7)/1e7||0},Wr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},py=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},to=function(){var t=Ui.length,e=Ui.slice(0),n,i;for(Sc={},Ui.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},vh=function(t){return!!(t._initted||t._startAt||t.add)},Jd=function(t,e,n,i){Ui.length&&!ze&&to(),t.render(e,n,!!(ze&&e<0&&vh(t))),Ui.length&&!ze&&to()},Qd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(hy).length<2?e:Oe(t)?t.trim():t},tp=function(t){return t},wn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},my=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ts=function(t,e){for(var n in e)t[n]=e[n];return t},mf=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ei(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},eo=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Rs=function(t){var e=t.parent||_e,n=t.keyframes?my(Ye(t.keyframes)):wn;if(ln(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},_y=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},ep=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Mo=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Oi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},or=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},gy=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},yc=function(t,e,n,i){return t._startAt&&(ze?t._startAt.revert(Wa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},xy=function r(t){return!t||t._ts&&r(t.parent)},_f=function(t){return t._repeat?es(t._tTime,t=t.duration()+t._rDelay)*t:0},es=function(t,e){var n=Math.floor(t=me(t/e));return t&&n===t?n-1:n},no=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},So=function(t){return t._end=me(t._start+(t._tDur/Math.abs(t._ts||t._rts||le)||0))},yo=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=me(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),So(t),n._dirty||or(n,t)),t},np=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=no(t.rawTime(),e),(!e._dur||Zs(0,e.totalDuration(),n)-e._tTime>le)&&e.render(n,!0)),or(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-le}},jn=function(t,e,n,i){return e.parent&&Oi(e),e._start=me((vi(n)?n:n||t!==_e?Dn(t,n,e):t._time)+e._delay),e._end=me(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),ep(t,e,"_first","_last",t._sort?"_start":0),Ec(e)||(t._recent=e),i||np(t,e),t._ts<0&&yo(t,t._tTime),t},ip=function(t,e){return(Tn.ScrollTrigger||mh("scrollTrigger",e))&&Tn.ScrollTrigger.create(e,t)},rp=function(t,e,n,i,s){if(Sh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!ze&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Kd!==vn.frame)return Ui.push(t),t._lazy=[s,i],1},vy=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Ec=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},My=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&vy(t)&&!(!t._initted&&Ec(t))||(t._ts<0||t._dp._ts<0)&&!Ec(t))?0:1,o=t._rDelay,c=0,l,h,u;if(o&&t._repeat&&(c=Zs(0,t._tDur,e),h=es(c,o),t._yoyo&&h&1&&(a=1-a),h!==es(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||ze||i||t._zTime===le||!e&&t._zTime){if(!t._initted&&rp(t,e,i,n,c))return;for(u=t._zTime,t._zTime=e||(n?le:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=c,l=t._pt;l;)l.r(a,l.d),l=l._next;e<0&&yc(t,e,n,!0),t._onUpdate&&!n&&Mn(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&Mn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Oi(t,1),!n&&!ze&&(Mn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Sy=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ns=function(t,e,n,i){var s=t._repeat,a=me(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:me(a*(s+1)+t._rDelay*s):a,o>0&&!i&&yo(t,t._tTime=t._tDur*o),t.parent&&So(t),n||or(t.parent,t),t},gf=function(t){return t instanceof Je?or(t):ns(t,t._dur)},yy={_start:0,endTime:Os,totalDuration:Os},Dn=function r(t,e,n){var i=t.labels,s=t._recent||yy,a=t.duration()>=Ln?s.endTime(!1):t._dur,o,c,l;return Oe(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",o=e.indexOf("="),c==="<"||c===">"?(o>=0&&(e=e.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(c=parseFloat(e.charAt(o-1)+e.substr(o+1)),l&&n&&(c=c/100*(Ye(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+c:a+c)):e==null?a:+e},Cs=function(t,e,n){var i=vi(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,c;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=ln(c.vars.inherit)&&c.parent;a.immediateRender=ln(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Ce(e[0],a,e[s+1])},Vi=function(t,e){return t||t===0?e(t):e},Zs=function(t,e,n){return n<t?t:n>e?e:n},We=function(t,e){return!Oe(t)||!(e=uy.exec(t))?"":e[1]},Ey=function(t,e,n){return Vi(n,function(i){return Zs(t,e,i)})},bc=[].slice,sp=function(t,e){return t&&ei(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ei(t[0]))&&!t.nodeType&&t!==qn},by=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Oe(i)&&!e||sp(i,1)?(s=n).push.apply(s,In(i)):n.push(i)})||n},In=function(t,e,n){return pe&&!e&&pe.selector?pe.selector(t):Oe(t)&&!n&&(Mc||!is())?bc.call((e||ph).querySelectorAll(t),0):Ye(t)?by(t,n):sp(t)?bc.call(t,0):t?[t]:[]},Tc=function(t){return t=In(t)[0]||Fs("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return In(e,n.querySelectorAll?n:n===t?Fs("Invalid scope")||ph.createElement("div"):t)}},ap=function(t){return t.sort(function(){return .5-Math.random()})},op=function(t){if(Se(t))return t;var e=ei(t)?t:{each:t},n=lr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,l=e.axis,h=i,u=i;return Oe(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(h=i[0],u=i[1]),function(f,p,g){var _=(g||e).length,m=a[_],d,x,M,y,E,b,A,C,v;if(!m){if(v=e.grid==="auto"?0:(e.grid||[1,Ln])[1],!v){for(A=-Ln;A<(A=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(m=a[_]=[],d=c?Math.min(v,_)*h-.5:i%v,x=v===Ln?0:c?_*u/v-.5:i/v|0,A=0,C=Ln,b=0;b<_;b++)M=b%v-d,y=x-(b/v|0),m[b]=E=l?Math.abs(l==="y"?y:M):Gd(M*M+y*y),E>A&&(A=E),E<C&&(C=E);i==="random"&&ap(m),m.max=A-C,m.min=C,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(v>_?_-1:l?l==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=We(e.amount||e.each)||0,n=n&&_<0?gp(n):n}return _=(m[f]-m.min)/m.max||0,me(m.b+(n?n(_):_)*m.v)+m.u}},wc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=me(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(vi(n)?0:We(n))}},lp=function(t,e){var n=Ye(t),i,s;return!n&&ei(t)&&(i=n=t.radius||Ln,t.values?(t=In(t.values),(s=!vi(t[0]))&&(i*=i)):t=wc(t.increment)),Vi(e,n?Se(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=Ln,h=0,u=t.length,f,p;u--;)s?(f=t[u].x-o,p=t[u].y-c,f=f*f+p*p):f=Math.abs(t[u]-o),f<l&&(l=f,h=u);return h=!i||l<=i?t[h]:a,s||h===a||vi(a)?h:h+We(a)}:wc(t))},cp=function(t,e,n,i){return Vi(Ye(t)?!e:n===!0?!!(n=0):!i,function(){return Ye(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Ty=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},wy=function(t,e){return function(n){return t(parseFloat(n))+(e||We(n))}},Ay=function(t,e,n){return up(t,e,0,1,n)},hp=function(t,e,n){return Vi(n,function(i){return t[~~e(i)]})},Ry=function r(t,e,n){var i=e-t;return Ye(t)?hp(t,r(0,t.length),e):Vi(n,function(s){return(i+(s-t)%i)%i+t})},Cy=function r(t,e,n){var i=e-t,s=i*2;return Ye(t)?hp(t,r(0,t.length-1),e):Vi(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},Bs=function(t){return t.replace(ly,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(cy);return cp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},up=function(t,e,n,i,s){var a=e-t,o=i-n;return Vi(s,function(c){return n+((c-t)/a*o||0)})},Py=function r(t,e,n,i){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var a=Oe(t),o={},c,l,h,u,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Ye(t)&&!Ye(e)){for(h=[],u=t.length,f=u-2,l=1;l<u;l++)h.push(r(t[l-1],t[l]));u--,s=function(g){g*=u;var _=Math.min(f,~~g);return h[_](g-_)},n=e}else i||(t=ts(Ye(t)?[]:{},t));if(!h){for(c in e)Mh.call(o,t,c,"get",e[c]);s=function(g){return bh(g,o)||(a?t.p:t)}}}return Vi(n,s)},xf=function(t,e,n){var i=t.labels,s=Ln,a,o,c;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},Mn=function(t,e,n){var i=t.vars,s=i[e],a=pe,o=t._ctx,c,l,h;if(s)return c=i[e+"Params"],l=i.callbackScope||t,n&&Ui.length&&to(),o&&(pe=o),h=c?s.apply(l,c):s.call(l),pe=a,h},Ts=function(t){return Oi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ze),t.progress()<1&&Mn(t,"onInterrupt"),t},kr,fp=[],dp=function(t){if(t)if(t=!t.name&&t.default||t,dh()||t.headless){var e=t.name,n=Se(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Os,render:bh,add:Mh,kill:qy,modifier:Xy,rawVars:0},a={targetTest:0,get:0,getSetter:Eh,aliases:{},register:0};if(is(),t!==i){if(gn[e])return;wn(i,wn(eo(t,s),a)),ts(i.prototype,ts(s,eo(t,a))),gn[i.prop=e]=i,t.targetTest&&(Xa.push(i),_h[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}$d(e,i),t.register&&t.register(fn,i,hn)}else fp.push(t)},ae=255,ws={aqua:[0,ae,ae],lime:[0,ae,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ae],navy:[0,0,128],white:[ae,ae,ae],olive:[128,128,0],yellow:[ae,ae,0],orange:[ae,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ae,0,0],pink:[ae,192,203],cyan:[0,ae,ae],transparent:[ae,ae,ae,0]},hl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ae+.5|0},pp=function(t,e,n){var i=t?vi(t)?[t>>16,t>>8&ae,t&ae]:0:ws.black,s,a,o,c,l,h,u,f,p,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ws[t])i=ws[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ae,i&ae,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ae,t&ae]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(df),!e)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(l+1):h+l-h*l,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=hl(c+1/3,s,a),i[1]=hl(c,s,a),i[2]=hl(c-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Xd),n&&i.length<4&&(i[3]=1),i}else i=t.match(df)||ws.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/ae,a=i[1]/ae,o=i[2]/ae,u=Math.max(s,a,o),f=Math.min(s,a,o),h=(u+f)/2,u===f?c=l=0:(p=u-f,l=h>.5?p/(2-u-f):p/(u+f),c=u===s?(a-o)/p+(a<o?6:0):u===a?(o-s)/p+2:(s-a)/p+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},mp=function(t){var e=[],n=[],i=-1;return t.split(Ni).forEach(function(s){var a=s.match(zr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},vf=function(t,e,n){var i="",s=(t+i).match(Ni),a=e?"hsla(":"rgba(",o=0,c,l,h,u;if(!s)return t;if(s=s.map(function(f){return(f=pp(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=mp(t),c=n.c,c.join(i)!==h.c.join(i)))for(l=t.replace(Ni,"1").split(zr),u=l.length-1;o<u;o++)i+=l[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!l)for(l=t.split(Ni),u=l.length-1;o<u;o++)i+=l[o]+s[o];return i+l[u]},Ni=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ws)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),Dy=/hsl[a]?\(/,_p=function(t){var e=t.join(" "),n;if(Ni.lastIndex=0,Ni.test(e))return n=Dy.test(e),t[1]=vf(t[1],n),t[0]=vf(t[0],n,mp(t[1])),!0},zs,vn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],c,l,h,u,f,p,g=function _(m){var d=r()-i,x=m===!0,M,y,E,b;if((d>t||d<0)&&(n+=d-e),i+=d,E=i-n,M=E-a,(M>0||x)&&(b=++u.frame,f=E-u.time*1e3,u.time=E=E/1e3,a+=M+(M>=s?4:s-M),y=1),x||(c=l(_)),y)for(p=0;p<o.length;p++)o[p](E,f,b,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Yd&&(!Mc&&dh()&&(qn=Mc=window,ph=qn.document||{},Tn.gsap=fn,(qn.gsapVersions||(qn.gsapVersions=[])).push(fn.version),jd(Qa||qn.GreenSockGlobals||!qn.gsap&&qn||{}),fp.forEach(dp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&u.sleep(),l=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},zs=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),zs=0,l=Os},lagSmoothing:function(m,d){t=m||1/0,e=Math.min(d||33,t)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,d,x){var M=d?function(y,E,b,A){m(y,E,b,A),u.remove(M)}:m;return u.remove(m),o[x?"unshift":"push"](M),is(),M},remove:function(m,d){~(d=o.indexOf(m))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},u})(),is=function(){return!zs&&vn.wake()},Xt={},Ly=/^[\d.\-M][\d.\-,\s]/,Iy=/["']/g,Uy=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,c,l;s<a;s++)c=n[s],o=s!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),e[i]=isNaN(l)?l.replace(Iy,"").trim():+l,i=c.substr(o+1).trim();return e},Ny=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Fy=function(t){var e=(t+"").split("("),n=Xt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Uy(e[1])]:Ny(t).split(",").map(Qd)):Xt._CE&&Ly.test(t)?Xt._CE("",t):n},gp=function(t){return function(e){return 1-t(1-e)}},xp=function r(t,e){for(var n=t._first,i;n;)n instanceof Je?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},lr=function(t,e){return t&&(Se(t)?t:Xt[t]||Fy(t))||e},_r=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return cn(t,function(o){Xt[o]=Tn[o]=s,Xt[a=o.toLowerCase()]=n;for(var c in s)Xt[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Xt[o+"."+c]=s[c]}),s},vp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ul=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/vc*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*oy((h-a)*s)+1},c=t==="out"?o:t==="in"?function(l){return 1-o(1-l)}:vp(o);return s=vc/s,c.config=function(l,h){return r(t,l,h)},c},fl=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:vp(n);return i.config=function(s){return r(t,s)},i};cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;_r(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Xt.Linear.easeNone=Xt.none=Xt.Linear.easeIn;_r("Elastic",ul("in"),ul("out"),ul());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};_r("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);_r("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});_r("Circ",function(r){return-(Gd(1-r*r)-1)});_r("Sine",function(r){return r===1?1:-ay(r*ry)+1});_r("Back",fl("in"),fl("out"),fl());Xt.SteppedEase=Xt.steps=Tn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-le;return function(o){return((i*Zs(0,a,o)|0)+s)*n}}};Qr.ease=Xt["quad.out"];cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return gh+=r+","+r+"Params,"});var Mp=function(t,e){this.id=sy++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Zd,this.set=e?e.getSetter:Eh},ks=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ns(this,+e.duration,1,1),this.data=e.data,pe&&(this._ctx=pe,pe.data.push(this)),zs||vn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ns(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(is(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(yo(this,n),!s._dp||s.parent||np(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&jn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===le||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Jd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+_f(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+_f(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?es(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-le?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?no(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-le?0:this._rts,this.totalTime(Zs(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),So(this),gy(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(is(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==le&&(this._tTime-=le)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=me(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&jn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ln(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?no(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=dy);var i=ze;return ze=n,vh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ze=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,gf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,gf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Dn(this,n),ln(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ln(i)),this._dur||(this._zTime=-le),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-le:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-le,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-le)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Se(n)?n:tp,c=function(){var h=i.then;i.then=null,s&&s(),Se(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},t.kill=function(){Ts(this)},r})();wn(ks.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-le,_prom:0,_ps:!1,_rts:1});var Je=(function(r){Hd(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ln(n.sortChildren),_e&&jn(n.parent||_e,hi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&ip(hi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Cs(0,arguments,this),this},e.from=function(i,s,a){return Cs(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Cs(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Rs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ce(i,s,Dn(this,a),1),this},e.call=function(i,s,a){return jn(this,Ce.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,c,l,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=h,a.parent=this,new Ce(i,a,Dn(this,c)),this},e.staggerFrom=function(i,s,a,o,c,l,h){return a.runBackwards=1,Rs(a).immediateRender=ln(a.immediateRender),this.staggerTo(i,s,a,o,c,l,h)},e.staggerFromTo=function(i,s,a,o,c,l,h,u){return o.startAt=a,Rs(o).immediateRender=ln(o.immediateRender),this.staggerTo(i,s,o,c,l,h,u)},e.render=function(i,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:me(i),u=this._zTime<0!=i<0&&(this._initted||!l),f,p,g,_,m,d,x,M,y,E,b,A;if(this!==_e&&h>c&&i>=0&&(h=c),h!==this._tTime||a||u){if(o!==this._time&&l&&(h+=this._time-o,i+=this._time-o),f=h,y=this._start,M=this._ts,d=!M,u&&(l||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(f=me(h%m),h===c?(_=this._repeat,f=l):(E=me(h/m),_=~~E,_&&_===E&&(f=l,_--),f>l&&(f=l)),E=es(this._tTime,m),!o&&this._tTime&&E!==_&&this._tTime-E*m-this._dur<=0&&(E=_),b&&_&1&&(f=l-f,A=1),_!==E&&!this._lock){var C=b&&E&1,v=C===(b&&_&1);if(_<E&&(C=!C),o=C?0:h%l?l:h,this._lock=1,this.render(o||(A?0:me(_*m)),s,!l)._lock=0,this._tTime=h,!s&&this.parent&&Mn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,E=_),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,v&&(this._lock=2,o=C?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;xp(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Sy(this,me(o),me(f)),x&&(h-=f-(f=x._start))),this._tTime=h,this._time=f,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&l&&!s&&!E&&(Mn(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&x!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,a),f!==this._time||!this._ts&&!d){x=0,g&&(h+=this._zTime=-le);break}}p=g}else{p=this._last;for(var T=i<0?i:f;p;){if(g=p._prev,(p._act||T<=p._end)&&p._ts&&x!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(T-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(T-p._start)*p._ts,s,a||ze&&vh(p)),f!==this._time||!this._ts&&!d){x=0,g&&(h+=this._zTime=T?-le:le);break}}p=g}}if(x&&!s&&(this.pause(),x.render(f>=o?0:-le)._zTime=f>=o?1:-1,this._ts))return this._start=y,So(this),this.render(i,s,a);this._onUpdate&&!s&&Mn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Oi(this,1),!s&&!(i<0&&!o)&&(h||o||!c)&&(Mn(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(vi(s)||(s=Dn(this,s,i)),!(i instanceof ks)){if(Ye(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Oe(i))return this.addLabel(i,s);if(Se(i))i=Ce.delayedCall(0,i);else return this}return this!==i?jn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ln);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Ce?s&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Oe(i)?this.removeLabel(i):Se(i)?this.killTweensOf(i):(i.parent===this&&Mo(this,i),i===this._recent&&(this._recent=this._last),or(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=me(vn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Dn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Ce.delayedCall(0,s||Os,a);return o.data="isPause",this._hasPause=1,jn(this,o,Dn(this,i))},e.removePause=function(i){var s=this._first;for(i=Dn(this,i);s;)s._start===i&&s.data==="isPause"&&Oi(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)Di!==o[c]&&o[c].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=In(i),c=this._first,l=vi(s),h;c;)c instanceof Ce?py(c._targets,o)&&(l?(!Di||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(h=c.getTweensOf(o,s)).length&&a.push.apply(a,h),c=c._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=Dn(a,i),c=s,l=c.startAt,h=c.onStart,u=c.onStartParams,f=c.immediateRender,p,g=Ce.to(a,wn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||le,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==m&&ns(g,m,0,1).render(g._time,!0,!0),p=1}h&&h.apply(g,u||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,wn({startAt:{time:Dn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),xf(this,Dn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),xf(this,Dn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+le)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,c=this.labels,l;for(i=me(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(l in c)c[l]>=a&&(c[l]+=i);return or(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),or(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,c=Ln,l,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,jn(a,o,h-o._delay,1)._lock=0):c=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=me(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;ns(a,a===_e&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(_e._ts&&(Jd(_e,no(i,_e)),Kd=vn.frame),vn.frame>=pf){pf+=En.autoSleep||120;var s=_e._first;if((!s||!s._ts)&&En.autoSleep&&vn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||vn.sleep()}}},t})(ks);wn(Je.prototype,{_lock:0,_hasPause:0,_forcing:0});var Oy=function(t,e,n,i,s,a,o){var c=new hn(this._pt,t,e,0,1,wp,null,s),l=0,h=0,u,f,p,g,_,m,d,x;for(c.b=n,c.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=Bs(i)),a&&(x=[n,i],a(x,t,e),n=x[0],i=x[1]),f=n.match(ll)||[];u=ll.exec(i);)g=u[0],_=i.substring(l,u.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==f[h++]&&(m=parseFloat(f[h-1])||0,c._pt={_next:c._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?Wr(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},l=ll.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(qd.test(i)||d)&&(c.e=0),this._pt=c,c},Mh=function(t,e,n,i,s,a,o,c,l,h){Se(i)&&(i=i(s||0,t,a));var u=t[e],f=n!=="get"?n:Se(u)?l?t[e.indexOf("set")||!Se(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():u,p=Se(u)?l?Hy:bp:yh,g;if(Oe(i)&&(~i.indexOf("random(")&&(i=Bs(i)),i.charAt(1)==="="&&(g=Wr(f,i)+(We(f)||0),(g||g===0)&&(i=g))),!h||f!==i||Ac)return!isNaN(f*i)&&i!==""?(g=new hn(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?Wy:Tp,0,p),l&&(g.fp=l),o&&g.modifier(o,this,t),this._pt=g):(!u&&!(e in t)&&mh(e,i),Oy.call(this,t,e,f,i,p,c||En.stringFilter,l))},By=function(t,e,n,i,s){if(Se(t)&&(t=Ps(t,s,e,n,i)),!ei(t)||t.style&&t.nodeType||Ye(t)||Wd(t))return Oe(t)?Ps(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Ps(t[o],s,e,n,i);return a},Sp=function(t,e,n,i,s,a){var o,c,l,h;if(gn[t]&&(o=new gn[t]).init(s,o.rawVars?e[t]:By(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=c=new hn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==kr))for(l=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)l[o._props[h]]=c;return o},Di,Ac,Sh=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,p=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,d=t.parent,x=d&&d.data==="nested"?d.vars.targets:m,M=t._overwrite==="auto"&&!uh,y=t.timeline,E,b,A,C,v,T,P,O,F,X,W,k,B;if(y&&(!f||!s)&&(s="none"),t._ease=lr(s,Qr.ease),t._yEase=u?gp(lr(u===!0?s:u,Qr.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if(O=m[0]?ar(m[0]).harness:0,k=O&&i[O.prop],E=eo(i,_h),_&&(_._zTime<0&&_.progress(1),e<0&&h&&o&&!p?_.render(-1,!0):_.revert(h&&g?Wa:fy),_._lazy=0),a){if(Oi(t._startAt=Ce.set(m,wn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&ln(c),startAt:null,delay:0,onUpdate:l&&function(){return Mn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ze||!o&&!p)&&t._startAt.revert(Wa),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(o=!1),A=wn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&ln(c),immediateRender:o,stagger:0,parent:d},E),k&&(A[O.prop]=k),Oi(t._startAt=Ce.set(m,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ze?t._startAt.revert(Wa):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,le,le);else if(!e)return}for(t._pt=t._ptCache=0,c=g&&ln(c)||c&&!g,b=0;b<m.length;b++){if(v=m[b],P=v._gsap||xh(m)[b]._gsap,t._ptLookup[b]=X={},Sc[P.id]&&Ui.length&&to(),W=x===m?b:x.indexOf(v),O&&(F=new O).init(v,k||E,t,W,x)!==!1&&(t._pt=C=new hn(t._pt,v,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(Y){X[Y]=C}),F.priority&&(T=1)),!O||k)for(A in E)gn[A]&&(F=Sp(A,E,t,W,v,x))?F.priority&&(T=1):X[A]=C=Mh.call(t,v,A,"get",E[A],W,x,0,i.stringFilter);t._op&&t._op[b]&&t.kill(v,t._op[b]),M&&t._pt&&(Di=t,_e.killTweensOf(v,X,t.globalTime(e)),B=!t.parent,Di=0),t._pt&&c&&(Sc[P.id]=1)}T&&Ap(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!B,f&&e<=0&&y.render(Ln,!0,!0)},zy=function(t,e,n,i,s,a,o,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,p;if(!l)for(l=t._ptCache[e]=[],f=t._ptLookup,p=t._targets.length;p--;){if(h=f[p][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Ac=1,t.vars[e]="+=0",Sh(t,o),Ac=0,c?Fs(e+" not eligible for reset"):1;l.push(h)}for(p=l.length;p--;)u=l[p],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=ye(n)+We(u.e)),u.b&&(u.b=h.s+We(u.b))},ky=function(t,e){var n=t[0]?ar(t[0]).harness:0,i=n&&n.aliases,s,a,o,c;if(!i)return e;s=ts({},e);for(a in i)if(a in s)for(c=i[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},Vy=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Ye(e))o=n[t]||(n[t]=[]),e.forEach(function(c,l){return o.push({t:l/(e.length-1)*100,v:c,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Ps=function(t,e,n,i,s){return Se(t)?t.call(e,n,i,s):Oe(t)&&~t.indexOf("random(")?Bs(t):t},yp=gh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ep={};cn(yp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ep[r]=1});var Ce=(function(r){Hd(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Rs(i))||this;var c=o.vars,l=c.duration,h=c.delay,u=c.immediateRender,f=c.stagger,p=c.overwrite,g=c.keyframes,_=c.defaults,m=c.scrollTrigger,d=c.yoyoEase,x=i.parent||_e,M=(Ye(n)||Wd(n)?vi(n[0]):"length"in i)?[n]:In(n),y,E,b,A,C,v,T,P;if(o._targets=M.length?xh(M):Fs("GSAP target "+n+" not found. https://gsap.com",!En.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||f||Aa(l)||Aa(h)){if(i=o.vars,y=o.timeline=new Je({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:M}),y.kill(),y.parent=y._dp=hi(o),y._start=0,f||Aa(l)||Aa(h)){if(A=M.length,T=f&&op(f),ei(f))for(C in f)~yp.indexOf(C)&&(P||(P={}),P[C]=f[C]);for(E=0;E<A;E++)b=eo(i,Ep),b.stagger=0,d&&(b.yoyoEase=d),P&&ts(b,P),v=M[E],b.duration=+Ps(l,hi(o),E,v,M),b.delay=(+Ps(h,hi(o),E,v,M)||0)-o._delay,!f&&A===1&&b.delay&&(o._delay=h=b.delay,o._start+=h,b.delay=0),y.to(v,b,T?T(E,v,M):0),y._ease=Xt.none;y.duration()?l=h=0:o.timeline=0}else if(g){Rs(wn(y.vars.defaults,{ease:"none"})),y._ease=lr(g.ease||i.ease||"none");var O=0,F,X,W;if(Ye(g))g.forEach(function(k){return y.to(M,k,">")}),y.duration();else{b={};for(C in g)C==="ease"||C==="easeEach"||Vy(C,g[C],b,g.easeEach);for(C in b)for(F=b[C].sort(function(k,B){return k.t-B.t}),O=0,E=0;E<F.length;E++)X=F[E],W={ease:X.e,duration:(X.t-(E?F[E-1].t:0))/100*l},W[C]=X.v,y.to(M,W,O),O+=W.duration;y.duration()<l&&y.to({},{duration:l-y.duration()})}}l||o.duration(l=y.duration())}else o.timeline=0;return p===!0&&!uh&&(Di=hi(o),_e.killTweensOf(M),Di=0),jn(x,hi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!l&&!g&&o._start===me(x._time)&&ln(u)&&xy(hi(o))&&x.data!=="nested")&&(o._tTime=-le,o.render(Math.max(0,-h)||0)),m&&ip(hi(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,c=this._tDur,l=this._dur,h=i<0,u=i>c-le&&!h?c:i<le?0:i,f,p,g,_,m,d,x,M,y;if(!l)My(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,M=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(f=me(u%_),u===c?(g=this._repeat,f=l):(m=me(u/_),g=~~m,g&&g===m?(f=l,g--):f>l&&(f=l)),d=this._yoyo&&g&1,d&&(y=this._yEase,f=l-f),m=es(this._tTime,_),f===o&&!a&&this._initted&&g===m)return this._tTime=u,this;g!==m&&(M&&this._yEase&&xp(M,d),this.vars.repeatRefresh&&!d&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(me(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(rp(this,h?i:f,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(l!==this._dur)return this.render(i,s,a)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(f/l),this._from&&(this.ratio=x=1-x),!o&&u&&!s&&!m&&(Mn(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(x,p.d),p=p._next;M&&M.render(i<0?i:M._dur*M._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&yc(this,i,s,a),Mn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Mn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&yc(this,i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Oi(this,1),!s&&!(h&&!o)&&(u||o||d)&&(Mn(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,c){zs||vn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Sh(this,l),h=this._ease(l/this._dur),zy(this,i,s,a,o,h,l,c)?this.resetTo(i,s,a,o,1):(yo(this,0),this.parent||ep(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ts(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ze),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Di&&Di.vars.overwrite!==!0)._first||Ts(this),this.parent&&a!==this.timeline.totalDuration()&&ns(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?In(i):o,l=this._ptLookup,h=this._pt,u,f,p,g,_,m,d;if((!s||s==="all")&&_y(o,c))return s==="all"&&(this._pt=0),Ts(this);for(u=this._op=this._op||[],s!=="all"&&(Oe(s)&&(_={},cn(s,function(x){return _[x]=1}),s=_),s=ky(o,s)),d=o.length;d--;)if(~c.indexOf(o[d])){f=l[d],s==="all"?(u[d]=s,g=f,p={}):(p=u[d]=u[d]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Mo(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&h&&Ts(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Cs(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Cs(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return _e.killTweensOf(i,s,a)},t})(ks);wn(Ce.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});cn("staggerTo,staggerFrom,staggerFromTo",function(r){Ce[r]=function(){var t=new Je,e=bc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var yh=function(t,e,n){return t[e]=n},bp=function(t,e,n){return t[e](n)},Hy=function(t,e,n,i){return t[e](i.fp,n)},Gy=function(t,e,n){return t.setAttribute(e,n)},Eh=function(t,e){return Se(t[e])?bp:fh(t[e])&&t.setAttribute?Gy:yh},Tp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Wy=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},wp=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},bh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Xy=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},qy=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Mo(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Yy=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Ap=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},hn=(function(){function r(e,n,i,s,a,o,c,l,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Tp,this.d=c||this,this.set=l||yh,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Yy,this.m=n,this.mt=s,this.tween=i},r})();cn(gh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return _h[r]=1});Tn.TweenMax=Tn.TweenLite=Ce;Tn.TimelineLite=Tn.TimelineMax=Je;_e=new Je({sortChildren:!1,defaults:Qr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});En.stringFilter=_p;var cr=[],qa={},jy=[],Mf=0,$y=0,dl=function(t){return(qa[t]||jy).map(function(e){return e()})},Rc=function(){var t=Date.now(),e=[];t-Mf>2&&(dl("matchMediaInit"),cr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,c,l;for(o in i)a=qn.matchMedia(i[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,l=1);l&&(n.revert(),c&&e.push(n))}),dl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Mf=t,dl("matchMedia"))},Rp=(function(){function r(e,n){this.selector=n&&Tc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=$y++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Se(n)&&(s=i,i=n,n=Se);var a=this,o=function(){var l=pe,h=a.selector,u;return l&&l!==a&&l.data.push(a),s&&(a.selector=Tc(s)),pe=a,u=i.apply(a,arguments),Se(u)&&a._r.push(u),pe=l,a.selector=h,a.isReverted=!1,u};return a.last=o,n===Se?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},t.ignore=function(n){var i=pe;pe=null,n(this),pe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ce&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof Je?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Ce)&&l.revert&&l.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=cr.length;a--;)cr[a].id===this.id&&cr.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),Ky=(function(){function r(e){this.contexts=[],this.scope=e,pe&&pe.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){ei(n)||(n={matches:n});var a=new Rp(0,s||this.scope),o=a.conditions={},c,l,h;pe&&!a.selector&&(a.selector=pe.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?h=1:(c=qn.matchMedia(n[l]),c&&(cr.indexOf(a)<0&&cr.push(a),(o[l]=c.matches)&&(h=1),c.addListener?c.addListener(Rc):c.addEventListener("change",Rc)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),io={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return dp(i)})},timeline:function(t){return new Je(t)},getTweensOf:function(t,e){return _e.getTweensOf(t,e)},getProperty:function(t,e,n,i){Oe(t)&&(t=In(t)[0]);var s=ar(t||{}).get,a=n?tp:Qd;return n==="native"&&(n=""),t&&(e?a((gn[e]&&gn[e].get||s)(t,e,n,i)):function(o,c,l){return a((gn[o]&&gn[o].get||s)(t,o,c,l))})},quickSetter:function(t,e,n){if(t=In(t),t.length>1){var i=t.map(function(h){return fn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var a=gn[e],o=ar(t),c=o.harness&&(o.harness.aliases||{})[e]||e,l=a?function(h){var u=new a;kr._pt=0,u.init(t,n?h+n:h,kr,0,[t]),u.render(1,u),kr._pt&&bh(1,kr)}:o.set(t,c);return a?l:function(h){return l(t,c,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=fn.to(t,wn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,l,h){return s.resetTo(e,c,l,h)};return a.tween=s,a},isTweening:function(t){return _e.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=lr(t.ease,Qr.ease)),mf(Qr,t||{})},config:function(t){return mf(En,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!gn[o]&&!Tn[o]&&Fs(e+" effect requires "+o+" plugin.")}),cl[e]=function(o,c,l){return n(In(o),wn(c||{},s),l)},a&&(Je.prototype[e]=function(o,c,l){return this.add(cl[e](o,ei(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Xt[t]=lr(e)},parseEase:function(t,e){return arguments.length?lr(t,e):Xt},getById:function(t){return _e.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Je(t),i,s;for(n.smoothChildTiming=ln(t.smoothChildTiming),_e.remove(n),n._dp=0,n._time=n._tTime=_e._time,i=_e._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ce&&i.vars.onComplete===i._targets[0]))&&jn(n,i,i._start-i._delay),i=s;return jn(_e,n,0),n},context:function(t,e){return t?new Rp(t,e):pe},matchMedia:function(t){return new Ky(t)},matchMediaRefresh:function(){return cr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Rc()},addEventListener:function(t,e){var n=qa[t]||(qa[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=qa[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Ry,wrapYoyo:Cy,distribute:op,random:cp,snap:lp,normalize:Ay,getUnit:We,clamp:Ey,splitColor:pp,toArray:In,selector:Tc,mapRange:up,pipe:Ty,unitize:wy,interpolate:Py,shuffle:ap},install:jd,effects:cl,ticker:vn,updateRoot:Je.updateRoot,plugins:gn,globalTimeline:_e,core:{PropTween:hn,globals:$d,Tween:Ce,Timeline:Je,Animation:ks,getCache:ar,_removeLinkedListItem:Mo,reverting:function(){return ze},context:function(t){return t&&pe&&(pe.data.push(t),t._ctx=pe),pe},suppressOverwrites:function(t){return uh=t}}};cn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return io[r]=Ce[r]});vn.add(Je.updateRoot);kr=io.to({},{duration:0});var Zy=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Jy=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Zy(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},pl=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var c,l;if(Oe(s)&&(c={},cn(s,function(h){return c[h]=1}),s=c),e){c={};for(l in s)c[l]=e(s[l]);s=c}Jy(o,s)}}}},fn=io.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,c;this.tween=n;for(a in e)c=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(c||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)ze?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},pl("roundProps",wc),pl("modifiers"),pl("snap",lp))||io;Ce.version=Je.version=fn.version="3.14.2";Yd=1;dh()&&is();Xt.Power0;Xt.Power1;Xt.Power2;Xt.Power3;Xt.Power4;Xt.Linear;Xt.Quad;Xt.Cubic;Xt.Quart;Xt.Quint;Xt.Strong;Xt.Elastic;Xt.Back;Xt.SteppedEase;Xt.Bounce;Xt.Sine;Xt.Expo;Xt.Circ;var Sf,Li,Xr,Th,rr,yf,wh,Qy=function(){return typeof window<"u"},Mi={},Ji=180/Math.PI,qr=Math.PI/180,Nr=Math.atan2,Ef=1e8,Ah=/([A-Z])/g,tE=/(left|right|width|margin|padding|x)/i,eE=/[\s,\(]\S/,Kn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Cc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},nE=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},iE=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},rE=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},sE=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Cp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Pp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},aE=function(t,e,n){return t.style[e]=n},oE=function(t,e,n){return t.style.setProperty(e,n)},lE=function(t,e,n){return t._gsap[e]=n},cE=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},hE=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},uE=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},ge="transform",un=ge+"Origin",fE=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Mi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Kn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=ui(i,o)}):this.tfm[t]=a.x?a[t]:ui(i,t),t===un&&(this.tfm.zOrigin=a.zOrigin);else return Kn.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(ge)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(un,e,"")),t=ge}(s||e)&&this.props.push(t,e,s[t])},Dp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},dE=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Ah,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=wh(),(!s||!s.isStart)&&!n[ge]&&(Dp(n),i.zOrigin&&n[un]&&(n[un]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Lp=function(t,e){var n={target:t,props:[],revert:dE,save:fE};return t._gsap||fn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Ip,Pc=function(t,e){var n=Li.createElementNS?Li.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Li.createElement(t);return n&&n.style?n:Li.createElement(t)},Sn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ah,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,rs(e)||e,1)||""},bf="O,Moz,ms,Ms,Webkit".split(","),rs=function(t,e,n){var i=e||rr,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(bf[a]+t in s););return a<0?null:(a===3?"ms":a>=0?bf[a]:"")+t},Dc=function(){Qy()&&window.document&&(Sf=window,Li=Sf.document,Xr=Li.documentElement,rr=Pc("div")||{style:{}},Pc("div"),ge=rs(ge),un=ge+"Origin",rr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ip=!!rs("perspective"),wh=fn.core.reverting,Th=1)},Tf=function(t){var e=t.ownerSVGElement,n=Pc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Xr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Xr.removeChild(n),s},wf=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Up=function(t){var e,n;try{e=t.getBBox()}catch{e=Tf(t),n=1}return e&&(e.width||e.height)||n||(e=Tf(t)),e&&!e.width&&!e.x&&!e.y?{x:+wf(t,["x","cx","x1"])||0,y:+wf(t,["y","cy","y1"])||0,width:0,height:0}:e},Np=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Up(t))},Bi=function(t,e){if(e){var n=t.style,i;e in Mi&&e!==un&&(e=ge),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Ah,"-$1").toLowerCase())):n.removeAttribute(e)}},Ii=function(t,e,n,i,s,a){var o=new hn(t._pt,e,n,0,1,a?Pp:Cp);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Af={deg:1,rad:1,turn:1},pE={grid:1,flex:1},zi=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=rr.style,c=tE.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,f=i==="px",p=i==="%",g,_,m,d;if(i===a||!s||Af[i]||Af[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),d=t.getCTM&&Np(t),(p||a==="%")&&(Mi[e]||~e.indexOf("adius")))return g=d?t.getBBox()[c?"width":"height"]:t[h],ye(p?s/g*u:s/100*g);if(o[c?"width":"height"]=u+(f?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,d&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Li||!_.appendChild)&&(_=Li.body),m=_._gsap,m&&p&&m.width&&c&&m.time===vn.time&&!m.uncache)return ye(s/m.width*u);if(p&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=u+i,g=t[h],x?t.style[e]=x:Bi(t,e)}else(p||a==="%")&&!pE[Sn(_,"display")]&&(o.position=Sn(t,"position")),_===t&&(o.position="static"),_.appendChild(rr),g=rr[h],_.removeChild(rr),o.position="absolute";return c&&p&&(m=ar(_),m.time=vn.time,m.width=_[h]),ye(f?g*s/u:g&&s?u/g*s:0)},ui=function(t,e,n,i){var s;return Th||Dc(),e in Kn&&e!=="transform"&&(e=Kn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Mi[e]&&e!=="transform"?(s=Hs(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:so(Sn(t,un))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ro[e]&&ro[e](t,e,n)||Sn(t,e)||Zd(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?zi(t,e,s,n)+n:s},mE=function(t,e,n,i){if(!n||n==="none"){var s=rs(e,t,1),a=s&&Sn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=Sn(t,"borderTopColor"))}var o=new hn(this._pt,t.style,e,0,1,wp),c=0,l=0,h,u,f,p,g,_,m,d,x,M,y,E;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Sn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=Sn(t,e)||i,_?t.style[e]=_:Bi(t,e)),h=[n,i],_p(h),n=h[0],i=h[1],f=n.match(zr)||[],E=i.match(zr)||[],E.length){for(;u=zr.exec(i);)m=u[0],x=i.substring(c,u.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),m!==(_=f[l++]||"")&&(p=parseFloat(_)||0,y=_.substr((p+"").length),m.charAt(1)==="="&&(m=Wr(p,m)+y),d=parseFloat(m),M=m.substr((d+"").length),c=zr.lastIndex-M.length,M||(M=M||En.units[e]||y,c===i.length&&(i+=M,o.e+=M)),y!==M&&(p=zi(t,e,_,M)||0),o._pt={_next:o._pt,p:x||l===1?x:",",s:p,c:d-p,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=e==="display"&&i==="none"?Pp:Cp;return qd.test(i)&&(o.e=0),this._pt=o,o},Rf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_E=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Rf[n]||n,e[1]=Rf[i]||i,e.join(" ")},gE=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],Mi[o]&&(c=1,o=o==="transformOrigin"?un:ge),Bi(n,o);c&&(Bi(n,ge),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Hs(n,1),a.uncache=1,Dp(i)))}},ro={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new hn(t._pt,e,n,0,0,gE);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Vs=[1,0,0,1,0,0],Fp={},Op=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Cf=function(t){var e=Sn(t,ge);return Op(e)?Vs:e.substr(7).match(Xd).map(ye)},Rh=function(t,e){var n=t._gsap||ar(t),i=t.style,s=Cf(t),a,o,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Vs:s):(s===Vs&&!t.offsetParent&&t!==Xr&&!n.svg&&(c=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(l=1,o=t.nextElementSibling,Xr.appendChild(t)),s=Cf(t),c?i.display=c:Bi(t,"display"),l&&(o?a.insertBefore(t,o):a?a.appendChild(t):Xr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Lc=function(t,e,n,i,s,a){var o=t._gsap,c=s||Rh(t,!0),l=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,p=c[0],g=c[1],_=c[2],m=c[3],d=c[4],x=c[5],M=e.split(" "),y=parseFloat(M[0])||0,E=parseFloat(M[1])||0,b,A,C,v;n?c!==Vs&&(A=p*m-g*_)&&(C=y*(m/A)+E*(-_/A)+(_*x-m*d)/A,v=y*(-g/A)+E*(p/A)-(p*x-g*d)/A,y=C,E=v):(b=Up(t),y=b.x+(~M[0].indexOf("%")?y/100*b.width:y),E=b.y+(~(M[1]||M[0]).indexOf("%")?E/100*b.height:E)),i||i!==!1&&o.smooth?(d=y-l,x=E-h,o.xOffset=u+(d*p+x*_)-d,o.yOffset=f+(d*g+x*m)-x):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=E,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[un]="0px 0px",a&&(Ii(a,o,"xOrigin",l,y),Ii(a,o,"yOrigin",h,E),Ii(a,o,"xOffset",u,o.xOffset),Ii(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",y+" "+E)},Hs=function(t,e){var n=t._gsap||new Mp(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",c=getComputedStyle(t),l=Sn(t,un)||"0",h,u,f,p,g,_,m,d,x,M,y,E,b,A,C,v,T,P,O,F,X,W,k,B,Y,st,nt,it,bt,Lt,kt,Gt;return h=u=f=_=m=d=x=M=y=0,p=g=1,n.svg=!!(t.getCTM&&Np(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[ge]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[ge]!=="none"?c[ge]:"")),i.scale=i.rotate=i.translate="none"),A=Rh(t,n.svg),n.svg&&(n.uncache?(Y=t.getBBox(),l=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",B=""):B=!e&&t.getAttribute("data-svg-origin"),Lc(t,B||l,!!B||n.originIsAbsolute,n.smooth!==!1,A)),E=n.xOrigin||0,b=n.yOrigin||0,A!==Vs&&(P=A[0],O=A[1],F=A[2],X=A[3],h=W=A[4],u=k=A[5],A.length===6?(p=Math.sqrt(P*P+O*O),g=Math.sqrt(X*X+F*F),_=P||O?Nr(O,P)*Ji:0,x=F||X?Nr(F,X)*Ji+_:0,x&&(g*=Math.abs(Math.cos(x*qr))),n.svg&&(h-=E-(E*P+b*F),u-=b-(E*O+b*X))):(Gt=A[6],Lt=A[7],nt=A[8],it=A[9],bt=A[10],kt=A[11],h=A[12],u=A[13],f=A[14],C=Nr(Gt,bt),m=C*Ji,C&&(v=Math.cos(-C),T=Math.sin(-C),B=W*v+nt*T,Y=k*v+it*T,st=Gt*v+bt*T,nt=W*-T+nt*v,it=k*-T+it*v,bt=Gt*-T+bt*v,kt=Lt*-T+kt*v,W=B,k=Y,Gt=st),C=Nr(-F,bt),d=C*Ji,C&&(v=Math.cos(-C),T=Math.sin(-C),B=P*v-nt*T,Y=O*v-it*T,st=F*v-bt*T,kt=X*T+kt*v,P=B,O=Y,F=st),C=Nr(O,P),_=C*Ji,C&&(v=Math.cos(C),T=Math.sin(C),B=P*v+O*T,Y=W*v+k*T,O=O*v-P*T,k=k*v-W*T,P=B,W=Y),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=ye(Math.sqrt(P*P+O*O+F*F)),g=ye(Math.sqrt(k*k+Gt*Gt)),C=Nr(W,k),x=Math.abs(C)>2e-4?C*Ji:0,y=kt?1/(kt<0?-kt:kt):0),n.svg&&(B=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Op(Sn(t,ge)),B&&t.setAttribute("transform",B))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(p*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=ye(p),n.scaleY=ye(g),n.rotation=ye(_)+o,n.rotationX=ye(m)+o,n.rotationY=ye(d)+o,n.skewX=x+o,n.skewY=M+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!e&&n.zOrigin||0)&&(i[un]=so(l)),n.xOffset=n.yOffset=0,n.force3D=En.force3D,n.renderTransform=n.svg?vE:Ip?Bp:xE,n.uncache=0,n},so=function(t){return(t=t.split(" "))[0]+" "+t[1]},ml=function(t,e,n){var i=We(e);return ye(parseFloat(e)+parseFloat(zi(t,"x",n+"px",i)))+i},xE=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Bp(t,e)},Ki="0deg",Ss="0px",Zi=") ",Bp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,d=n.force3D,x=n.target,M=n.zOrigin,y="",E=d==="auto"&&t&&t!==1||d===!0;if(M&&(u!==Ki||h!==Ki)){var b=parseFloat(h)*qr,A=Math.sin(b),C=Math.cos(b),v;b=parseFloat(u)*qr,v=Math.cos(b),a=ml(x,a,A*v*-M),o=ml(x,o,-Math.sin(b)*-M),c=ml(x,c,C*v*-M+M)}m!==Ss&&(y+="perspective("+m+Zi),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(E||a!==Ss||o!==Ss||c!==Ss)&&(y+=c!==Ss||E?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+Zi),l!==Ki&&(y+="rotate("+l+Zi),h!==Ki&&(y+="rotateY("+h+Zi),u!==Ki&&(y+="rotateX("+u+Zi),(f!==Ki||p!==Ki)&&(y+="skew("+f+", "+p+Zi),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Zi),x.style[ge]=y||"translate(0, 0)"},vE=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,p=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,d=n.yOffset,x=n.forceCSS,M=parseFloat(a),y=parseFloat(o),E,b,A,C,v;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=qr,l*=qr,E=Math.cos(c)*u,b=Math.sin(c)*u,A=Math.sin(c-l)*-f,C=Math.cos(c-l)*f,l&&(h*=qr,v=Math.tan(l-h),v=Math.sqrt(1+v*v),A*=v,C*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),E*=v,b*=v)),E=ye(E),b=ye(b),A=ye(A),C=ye(C)):(E=u,C=f,b=A=0),(M&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(M=zi(p,"x",a,"px"),y=zi(p,"y",o,"px")),(g||_||m||d)&&(M=ye(M+g-(g*E+_*A)+m),y=ye(y+_-(g*b+_*C)+d)),(i||s)&&(v=p.getBBox(),M=ye(M+i/100*v.width),y=ye(y+s/100*v.height)),v="matrix("+E+","+b+","+A+","+C+","+M+","+y+")",p.setAttribute("transform",v),x&&(p.style[ge]=v)},ME=function(t,e,n,i,s){var a=360,o=Oe(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?Ji:1),l=c-i,h=i+l+"deg",u,f;return o&&(u=s.split("_")[1],u==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),u==="cw"&&l<0?l=(l+a*Ef)%a-~~(l/a)*a:u==="ccw"&&l>0&&(l=(l-a*Ef)%a-~~(l/a)*a)),t._pt=f=new hn(t._pt,e,n,i,l,nE),f.e=h,f.u="deg",t._props.push(n),f},Pf=function(t,e){for(var n in e)t[n]=e[n];return t},SE=function(t,e,n){var i=Pf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,h,u,f,p,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[ge]=e,o=Hs(n,1),Bi(n,ge),n.setAttribute("transform",l)):(l=getComputedStyle(n)[ge],a[ge]=e,o=Hs(n,1),a[ge]=l);for(c in Mi)l=i[c],h=o[c],l!==h&&s.indexOf(c)<0&&(p=We(l),g=We(h),u=p!==g?zi(n,c,l,g):parseFloat(l),f=parseFloat(h),t._pt=new hn(t._pt,o,c,u,f-u,Cc),t._pt.u=g||0,t._props.push(c));Pf(o,i)};cn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});ro[t>1?"border"+r:r]=function(o,c,l,h,u){var f,p;if(arguments.length<4)return f=a.map(function(g){return ui(o,g,l)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(h+"").split(" "),p={},a.forEach(function(g,_){return p[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(c,p,u)}});var zp={name:"css",register:Dc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,c=n.vars.startAt,l,h,u,f,p,g,_,m,d,x,M,y,E,b,A,C,v;Th||Dc(),this.styles=this.styles||Lp(t),C=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(gn[_]&&Sp(_,e,n,i,t,s)))){if(p=typeof h,g=ro[_],p==="function"&&(h=h.call(n,i,t,s),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=Bs(h)),g)g(this,t,_,h,n)&&(A=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",Ni.lastIndex=0,Ni.test(l)||(m=We(l),d=We(h),d?m!==d&&(l=zi(t,_,l,d)+d):m&&(h+=m)),this.add(o,"setProperty",l,h,i,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(p!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,i,t,s):c[_],Oe(l)&&~l.indexOf("random(")&&(l=Bs(l)),We(l+"")||l==="auto"||(l+=En.units[_]||We(ui(t,_))||""),(l+"").charAt(1)==="="&&(l=ui(t,_))):l=ui(t,_),f=parseFloat(l),x=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),u=parseFloat(h),_ in Kn&&(_==="autoAlpha"&&(f===1&&ui(t,"visibility")==="hidden"&&u&&(f=0),C.push("visibility",0,o.visibility),Ii(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Kn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in Mi,M){if(this.styles.save(_),v=h,p==="string"&&h.substring(0,6)==="var(--"){if(h=Sn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var T=t.style.perspective;t.style.perspective=h,h=Sn(t,"perspective"),T?t.style.perspective=T:Bi(t,"perspective")}u=parseFloat(h)}if(y||(E=t._gsap,E.renderTransform&&!e.parseTransform||Hs(t,e.parseTransform),b=e.smoothOrigin!==!1&&E.smooth,y=this._pt=new hn(this._pt,o,ge,0,1,E.renderTransform,E,0,-1),y.dep=1),_==="scale")this._pt=new hn(this._pt,E,"scaleY",E.scaleY,(x?Wr(E.scaleY,x+u):u)-E.scaleY||0,Cc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(un,0,o[un]),h=_E(h),E.svg?Lc(t,h,0,b,0,this):(d=parseFloat(h.split(" ")[2])||0,d!==E.zOrigin&&Ii(this,E,"zOrigin",E.zOrigin,d),Ii(this,o,_,so(l),so(h)));continue}else if(_==="svgOrigin"){Lc(t,h,1,b,0,this);continue}else if(_ in Fp){ME(this,E,_,f,x?Wr(f,x+h):h);continue}else if(_==="smoothOrigin"){Ii(this,E,"smooth",E.smooth,h);continue}else if(_==="force3D"){E[_]=h;continue}else if(_==="transform"){SE(this,h,t);continue}}else _ in o||(_=rs(_)||_);if(M||(u||u===0)&&(f||f===0)&&!eE.test(h)&&_ in o)m=(l+"").substr((f+"").length),u||(u=0),d=We(h)||(_ in En.units?En.units[_]:m),m!==d&&(f=zi(t,_,l,d)),this._pt=new hn(this._pt,M?E:o,_,f,(x?Wr(f,x+u):u)-f,!M&&(d==="px"||_==="zIndex")&&e.autoRound!==!1?sE:Cc),this._pt.u=d||0,M&&v!==h?(this._pt.b=l,this._pt.e=v,this._pt.r=rE):m!==d&&d!=="%"&&(this._pt.b=l,this._pt.r=iE);else if(_ in o)mE.call(this,t,_,l,x?x+h:h);else if(_ in t)this.add(t,_,l||t[_],x?x+h:h,i,s);else if(_!=="parseTransform"){mh(_,h);continue}M||(_ in o?C.push(_,0,o[_]):typeof t[_]=="function"?C.push(_,2,t[_]()):C.push(_,1,l||t[_])),a.push(_)}}A&&Ap(this)},render:function(t,e){if(e.tween._time||!wh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ui,aliases:Kn,getSetter:function(t,e,n){var i=Kn[e];return i&&i.indexOf(",")<0&&(e=i),e in Mi&&e!==un&&(t._gsap.x||ui(t,"x"))?n&&yf===n?e==="scale"?cE:lE:(yf=n||{})&&(e==="scale"?hE:uE):t.style&&!fh(t.style[e])?aE:~e.indexOf("-")?oE:Eh(t,e)},core:{_removeProperty:Bi,_getMatrix:Rh}};fn.utils.checkPrefix=rs;fn.core.getStyleSaver=Lp;(function(r,t,e,n){var i=cn(r+","+t+","+e,function(s){Mi[s]=1});cn(t,function(s){En.units[s]="deg",Fp[s]=1}),Kn[i[13]]=r+","+t,cn(n,function(s){var a=s.split(":");Kn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){En.units[r]="px"});fn.registerPlugin(zp);var hr=fn.registerPlugin(zp)||fn;hr.core.Tween;let Re,Ai,Wn,Ra,de;const Ca=new Nd,Pa=new At,Xn={position:new I(0,-1.3,0),rotation:new bn(0,Math.PI/2,0)};function yE(){const r=document.getElementById("canvas-container"),t=document.getElementById("robot-tooltip");if(!r)return;Ra&&cancelAnimationFrame(Ra),Re&&(Re.dispose(),Re.domElement.parentNode&&Re.domElement.parentNode.removeChild(Re.domElement)),Ai=new eh,Wn=new sn(45,window.innerWidth/window.innerHeight,.1,1e3),Wn.position.z=50,Re=new Vd({alpha:!0,antialias:!0,powerPreference:"high-performance"}),Re.setSize(window.innerWidth,window.innerHeight),Re.setPixelRatio(Math.min(window.devicePixelRatio,2)),Re.shadowMap.enabled=!0,Re.shadowMap.type=id,Re.toneMapping=Hc,Re.toneMappingExposure=1.8,Re.outputColorSpace=Fe,r.appendChild(Re.domElement);const e=new _c(Re);Ai.environment=e.fromScene(new iy,.04).texture,Ai.environmentIntensity=2;const n=new Ud(16777215,1.5);Ai.add(n);const i=new Id(16777215,4);i.position.set(5,10,7),i.castShadow=!0,Ai.add(i);const s=new ch(16777215,50);s.position.set(-5,5,5),Ai.add(s),new ey().load("/untitled.mtl",d=>{d.preload();const x=new ty;x.setMaterials(d),x.load("/untitled.obj",M=>{de=M,de.traverse(b=>{b.isMesh&&(b.castShadow=!0,b.receiveShadow=!0,b.material&&(b.material.envMapIntensity=1.5))}),de.scale.set(1.6,1.6,1.6);const E=new ki().setFromObject(de).getCenter(new I);de.position.sub(E),de.position.set(0,0,8),de.rotation.set(0,0,0),Xn.position.copy(de.position),Xn.rotation.copy(de.rotation),Ai.add(de)})});const o=d=>{if(Ca.setFromCamera(Pa,Wn),de&&Ca.intersectObjects(de.children,!0).length>0){const M=document.querySelector('[wire\\:click="toggleChat"]');M&&(M.click(),hr.to(de.position,{y:de.position.y+.4,duration:.1,yoyo:!0,repeat:1}))}};window.addEventListener("click",o);const c=[{id:"home",pos:{x:0,y:0,z:8},rot:{x:0,y:0,z:0}},{id:"works-swiper",pos:{x:30,y:1,z:-1},rot:{x:0,y:-7.3,z:0},text:"Here are some highlighted projects."},{id:"websites-grid",pos:{x:-30,y:2,z:4},rot:{x:0,y:.8,z:0},text:"Explore these website designs."},{id:"servicesHeader",pos:{x:30,y:2.5,z:4},rot:{x:0,y:-.9,z:-.2},text:"We offer specialized solutions."},{id:"servicesScroll",pos:{x:30,y:2.5,z:4},rot:{x:0,y:-.9,z:-.2},text:"We offer specialized solutions."},{id:"features",pos:{x:0,y:0,z:-8},rot:{x:0,y:0,z:0}},{id:"about",pos:{x:-35,y:0,z:-1},rot:{x:0,y:.7,z:0},text:"A little story about the journey."},{id:"pricing",pos:{x:0,y:0,z:20},rot:{x:0,y:0,z:0}},{id:"testimonials",pos:{x:30,y:1,z:0},rot:{x:0,y:-.8,z:0}},{id:"contact",pos:{x:-15,y:-4,z:30},rot:{x:0,y:7.3,z:0}},{id:"footer",pos:{x:35,y:-4,z:0},rot:{x:0,y:-.8,z:0},text:"Thanks for visiting!"}],l=document.getElementById("robot-bubble"),h=document.getElementById("robot-text"),u=()=>{if(!de||!Wn)return;const d=new I;de.getWorldPosition(d);const x=d.clone();x.y+=2.2,d.y+=1.8,d.project(Wn),x.project(Wn);const M=(d.x*.5+.5)*window.innerWidth,y=(-(d.y*.5)+.5)*window.innerHeight,E=(x.x*.5+.5)*window.innerWidth,b=(-(x.y*.5)+.5)*window.innerHeight;l&&(l.style.transform=`translate3d(${M}px, ${y}px, 0) scale(1)`,l.style.opacity=d.z>1?0:1),t&&(t.style.left=`${E}px`,t.style.top=`${b}px`)},f=new IntersectionObserver(d=>{d.forEach(x=>{if(x.isIntersecting&&de){const M=c.find(y=>y.id===x.target.id);M&&(hr.to(Xn.position,{...M.pos,duration:2,ease:"power2.inOut"}),hr.to(Xn.rotation,{...M.rot,duration:2,ease:"power2.inOut"}),l&&h&&M.text?h.innerText!==M.text&&(l.style.opacity="0",setTimeout(()=>{h.innerText=M.text,l.style.opacity="1"},300)):l&&(l.style.opacity="0"))}})},{threshold:.2});c.forEach(d=>{const x=document.getElementById(d.id);x&&f.observe(x)});let p=0,g=0;window.addEventListener("mousemove",d=>{p=(d.clientX-window.innerWidth/2)*.008,g=(d.clientY-window.innerHeight/2)*.008,Pa.x=d.clientX/window.innerWidth*2-1,Pa.y=-(d.clientY/window.innerHeight)*2+1});function _(){if(Ra=requestAnimationFrame(_),de){Ca.setFromCamera(Pa,Wn),Ca.intersectObjects(de.children,!0).length>0?(document.body.style.cursor="pointer",t?.classList.add("robot-tooltip-visible"),t?.classList.remove("robot-tooltip-hidden")):(document.body.style.cursor="default",t?.classList.add("robot-tooltip-hidden"),t?.classList.remove("robot-tooltip-visible"));const x=Date.now()*.001,M=Math.sin(x*1.5)*.15;de.position.x=Xn.position.x+Math.sin(x*.8)*.1,de.position.y=Xn.position.y+M,de.position.z=Xn.position.z+Math.cos(x*.5)*.1,de.rotation.x=Xn.rotation.x+Math.sin(x*1.2)*.05+g*.1,de.rotation.y=Xn.rotation.y+Math.cos(x*.9)*.05+p*.1,de.rotation.z=Xn.rotation.z+Math.sin(x*.7)*.02}Re.render(Ai,Wn),u()}_();const m=()=>{Wn.aspect=window.innerWidth/window.innerHeight,Wn.updateProjectionMatrix(),Re.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",m),window.cleanup3D=()=>{cancelAnimationFrame(Ra),window.removeEventListener("resize",m),window.removeEventListener("click",o),f.disconnect(),Re?.domElement.parentNode&&Re.domElement.parentNode.removeChild(Re.domElement)}}const Df={type:"change"},Ch={type:"start"},kp={type:"end"},Da=new $s,Lf=new Ri,EE=Math.cos(70*hg.DEG2RAD),Pe=new I,rn=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_l=1e-6;class bE extends Qg{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vr.ROTATE,MIDDLE:Vr.DOLLY,RIGHT:Vr.PAN},this.touches={ONE:Or.ROTATE,TWO:Or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new dr,this._lastTargetPosition=new I,this._quat=new dr().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bu,this._sphericalDelta=new Bu,this._scale=1,this._panOffset=new I,this._rotateStart=new At,this._rotateEnd=new At,this._rotateDelta=new At,this._panStart=new At,this._panEnd=new At,this._panDelta=new At,this._dollyStart=new At,this._dollyEnd=new At,this._dollyDelta=new At,this._dollyDirection=new I,this._mouse=new At,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wE.bind(this),this._onPointerDown=TE.bind(this),this._onPointerUp=AE.bind(this),this._onContextMenu=UE.bind(this),this._onMouseWheel=PE.bind(this),this._onKeyDown=DE.bind(this),this._onTouchStart=LE.bind(this),this._onTouchMove=IE.bind(this),this._onMouseDown=RE.bind(this),this._onMouseMove=CE.bind(this),this._interceptControlDown=NE.bind(this),this._interceptControlUp=FE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Df),this.update(),this.state=ne.NONE}update(t=null){const e=this.object.position;Pe.copy(e).sub(this.target),Pe.applyQuaternion(this._quat),this._spherical.setFromVector3(Pe),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=rn:n>Math.PI&&(n-=rn),i<-Math.PI?i+=rn:i>Math.PI&&(i-=rn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Pe.setFromSpherical(this._spherical),Pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Pe.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Da.origin.copy(this.object.position),Da.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Da.direction))<EE?this.object.lookAt(this.target):(Lf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Da.intersectPlane(Lf,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>_l||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_l||this._lastTargetPosition.distanceToSquared(this.target)>_l?(this.dispatchEvent(Df),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?rn/60*this.autoRotateSpeed*t:rn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Pe.setFromMatrixColumn(e,0),Pe.multiplyScalar(-t),this._panOffset.add(Pe)}_panUp(t,e){this.screenSpacePanning===!0?Pe.setFromMatrixColumn(e,1):(Pe.setFromMatrixColumn(e,0),Pe.crossVectors(this.object.up,Pe)),Pe.multiplyScalar(t),this._panOffset.add(Pe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Pe.copy(i).sub(this.target);let s=Pe.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new At,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function TE(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function wE(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function AE(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kp),this.state=ne.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function RE(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Vr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ne.DOLLY;break;case Vr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ne.ROTATE}break;case Vr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(Ch)}function CE(r){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function PE(r){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(r.preventDefault(),this.dispatchEvent(Ch),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(kp))}function DE(r){this.enabled!==!1&&this._handleKeyDown(r)}function LE(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Or.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ne.TOUCH_ROTATE;break;case Or.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case Or.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ne.TOUCH_DOLLY_PAN;break;case Or.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(Ch)}function IE(r){switch(this._trackPointer(r),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ne.NONE}}function UE(r){this.enabled!==!1&&r.preventDefault()}function NE(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function FE(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}let ci,Fi,Ze,Fr,Ic,ao,oo=[],Uc,Nc;function OE(){const r=document.getElementById("showcase-canvas");if(!r)return;Ze&&(Ze.dispose(),r.innerHTML=""),ci=new eh,ci.background=new It(0),ci.fog=new th(0,.001),Fi=new sn(60,window.innerWidth/window.innerHeight,.1,1e3),Fi.position.set(0,0,50),Ze=new Vd({antialias:!0,alpha:!0}),Ze.setPixelRatio(window.devicePixelRatio),Ze.setSize(window.innerWidth,window.innerHeight),Ze.shadowMap.enabled=!0,r.appendChild(Ze.domElement),Fr=new bE(Fi,Ze.domElement),Fr.enableDamping=!0,Fr.dampingFactor=.05,Fr.autoRotate=!0,Fr.autoRotateSpeed=.5;const t=new Ud(16777215,.5);ci.add(t);const e=new ch(16755200,2,100);e.position.set(10,10,10),ci.add(e);const n=new Id(35071,1);n.position.set(-20,20,20),ci.add(n);const i=new sh(.5,16,16),s=3e3,a=new Float32Array(s*3),o=new Float32Array(s*3),c=new It(16737792),l=new It(43775);for(let p=0;p<s;p++){const g=p*3;a[g]=(Math.random()-.5)*200,a[g+1]=(Math.random()-.5)*200,a[g+2]=(Math.random()-.5)*200;const _=c.clone().lerp(l,Math.random());o[g]=_.r,o[g+1]=_.g,o[g+2]=_.b}i.setAttribute("position",new yn(a,3)),i.setAttribute("color",new yn(o,3));const h=new Br({size:.2,vertexColors:!0,transparent:!0,opacity:.8,blending:Sl});Uc=new Ha(i,h),ci.add(Uc);const u=[new ih(1,0),new rh(1,0),new ah(1,0),new oh(.6,.2,100,16)],f=[{name:"Three.js",color:16777215},{name:"WebGL",color:43775},{name:"GLSL",color:16711935},{name:"React Three Fiber",color:6413051},{name:"Blender",color:15236365},{name:"Physics",color:4521796}];oo=[],f.forEach((p,g)=>{const _=u[g%u.length],m=new pc({color:p.color,roughness:.2,metalness:.8,emissive:p.color,emissiveIntensity:.2}),d=new Ee(_,m),x=Math.acos(-1+2*g/f.length),M=Math.sqrt(f.length*Math.PI)*x;d.position.setFromSphericalCoords(15,x,M),d.userData={name:p.name,originalScale:1,originalColor:p.color},ci.add(d),oo.push(d)}),Ic=new Nd,ao=new At,window.addEventListener("mousemove",Vp),window.addEventListener("click",Hp),window.addEventListener("resize",Gp),Wp()}function Vp(r){ao.x=r.clientX/window.innerWidth*2-1,ao.y=-(r.clientY/window.innerHeight)*2+1}let He=null;function Hp(r){if(He){const t=He.userData.name;console.log("Clicked:",t),hr.to(He.rotation,{y:He.rotation.y+Math.PI*2,duration:1,ease:"back.out(2)"})}}function Gp(){Fi.aspect=window.innerWidth/window.innerHeight,Fi.updateProjectionMatrix(),Ze.setSize(window.innerWidth,window.innerHeight)}function Wp(){Nc=requestAnimationFrame(Wp),Fr.update();const r=Date.now()*.001;Uc.rotation.y=r*.05,oo.forEach((e,n)=>{e.rotation.x+=.01,e.rotation.y+=.01,e.position.y+=Math.sin(r+n)*.02}),Ic.setFromCamera(ao,Fi);const t=Ic.intersectObjects(oo);t.length>0?He!==t[0].object&&(He&&If(He),He=t[0].object,document.body.style.cursor="pointer",hr.to(He.scale,{x:2,y:2,z:2,duration:.4,ease:"elastic.out(1, 0.3)"}),He.material.emissiveIntensity=1,BE(He)):He&&(If(He),He=null,document.body.style.cursor="default",zE()),Ze.render(ci,Fi)}function If(r){hr.to(r.scale,{x:1,y:1,z:1,duration:.3}),r.material.emissiveIntensity=.2}let oe;function BE(r){oe||(oe=document.createElement("div"),oe.style.position="absolute",oe.style.color="white",oe.style.background="rgba(0,0,0,0.8)",oe.style.padding="8px 12px",oe.style.borderRadius="8px",oe.style.pointerEvents="none",oe.style.fontWeight="bold",oe.style.textTransform="uppercase",oe.style.letterSpacing="1px",oe.style.border="1px solid rgba(255,255,255,0.2)",oe.style.zIndex="1000",document.body.appendChild(oe)),oe.innerText=r.userData.name,oe.style.opacity="1",Xp()}function zE(){oe&&(oe.style.opacity="0")}function Xp(){if(He&&oe){const r=new I;He.getWorldPosition(r),r.project(Fi);const t=(r.x*.5+.5)*window.innerWidth,e=(-(r.y*.5)+.5)*window.innerHeight;oe.style.left=`${t}px`,oe.style.top=`${e-40}px`,oe.style.transform="translate(-50%, -100%)",requestAnimationFrame(Xp)}}function Uf(){Nc&&cancelAnimationFrame(Nc),window.removeEventListener("mousemove",Vp),window.removeEventListener("click",Hp),window.removeEventListener("resize",Gp),Ze&&(Ze.dispose(),Ze.domElement.parentNode&&Ze.domElement.parentNode.removeChild(Ze.domElement)),oe&&oe.parentNode&&(oe.parentNode.removeChild(oe),oe=null)}document.addEventListener("DOMContentLoaded",()=>{qp()});document.addEventListener("livewire:navigated",()=>{qp()});function qp(){const r=document.getElementById("showcase-canvas"),t=document.getElementById("canvas-container");r?(window.cleanup3D&&window.cleanup3D(),OE()):t?(Uf(),t.querySelector("canvas")||yE()):(window.cleanup3D&&window.cleanup3D(),Uf())}
