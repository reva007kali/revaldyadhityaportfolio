function Vf(r,e){return function(){return r.apply(e,arguments)}}const{toString:jd}=Object.prototype,{getPrototypeOf:tc}=Object,{iterator:Ua,toStringTag:kf}=Symbol,Ia=(r=>e=>{const t=jd.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Ln=r=>(r=r.toLowerCase(),e=>Ia(e)===r),Na=r=>e=>typeof e===r,{isArray:Br}=Array,Ar=Na("undefined");function Ms(r){return r!==null&&!Ar(r)&&r.constructor!==null&&!Ar(r.constructor)&&jt(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const Gf=Ln("ArrayBuffer");function $d(r){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&Gf(r.buffer),e}const Kd=Na("string"),jt=Na("function"),Hf=Na("number"),ys=r=>r!==null&&typeof r=="object",Zd=r=>r===!0||r===!1,oa=r=>{if(Ia(r)!=="object")return!1;const e=tc(r);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(kf in r)&&!(Ua in r)},Jd=r=>{if(!ys(r)||Ms(r))return!1;try{return Object.keys(r).length===0&&Object.getPrototypeOf(r)===Object.prototype}catch{return!1}},Qd=Ln("Date"),ep=Ln("File"),tp=Ln("Blob"),np=Ln("FileList"),ip=r=>ys(r)&&jt(r.pipe),rp=r=>{let e;return r&&(typeof FormData=="function"&&r instanceof FormData||jt(r.append)&&((e=Ia(r))==="formdata"||e==="object"&&jt(r.toString)&&r.toString()==="[object FormData]"))},sp=Ln("URLSearchParams"),[ap,op,lp,cp]=["ReadableStream","Request","Response","Headers"].map(Ln),up=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Es(r,e,{allOwnKeys:t=!1}={}){if(r===null||typeof r>"u")return;let n,i;if(typeof r!="object"&&(r=[r]),Br(r))for(n=0,i=r.length;n<i;n++)e.call(null,r[n],n,r);else{if(Ms(r))return;const s=t?Object.getOwnPropertyNames(r):Object.keys(r),a=s.length;let o;for(n=0;n<a;n++)o=s[n],e.call(null,r[o],o,r)}}function Wf(r,e){if(Ms(r))return null;e=e.toLowerCase();const t=Object.keys(r);let n=t.length,i;for(;n-- >0;)if(i=t[n],e===i.toLowerCase())return i;return null}const Wi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Xf=r=>!Ar(r)&&r!==Wi;function ko(){const{caseless:r,skipUndefined:e}=Xf(this)&&this||{},t={},n=(i,s)=>{if(s==="__proto__"||s==="constructor"||s==="prototype")return;const a=r&&Wf(t,s)||s;oa(t[a])&&oa(i)?t[a]=ko(t[a],i):oa(i)?t[a]=ko({},i):Br(i)?t[a]=i.slice():(!e||!Ar(i))&&(t[a]=i)};for(let i=0,s=arguments.length;i<s;i++)arguments[i]&&Es(arguments[i],n);return t}const fp=(r,e,t,{allOwnKeys:n}={})=>(Es(e,(i,s)=>{t&&jt(i)?Object.defineProperty(r,s,{value:Vf(i,t),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(r,s,{value:i,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:n}),r),hp=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),dp=(r,e,t,n)=>{r.prototype=Object.create(e.prototype,n),Object.defineProperty(r.prototype,"constructor",{value:r,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(r,"super",{value:e.prototype}),t&&Object.assign(r.prototype,t)},pp=(r,e,t,n)=>{let i,s,a;const o={};if(e=e||{},r==null)return e;do{for(i=Object.getOwnPropertyNames(r),s=i.length;s-- >0;)a=i[s],(!n||n(a,r,e))&&!o[a]&&(e[a]=r[a],o[a]=!0);r=t!==!1&&tc(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e},mp=(r,e,t)=>{r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;const n=r.indexOf(e,t);return n!==-1&&n===t},_p=r=>{if(!r)return null;if(Br(r))return r;let e=r.length;if(!Hf(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=r[e];return t},gp=(r=>e=>r&&e instanceof r)(typeof Uint8Array<"u"&&tc(Uint8Array)),xp=(r,e)=>{const n=(r&&r[Ua]).call(r);let i;for(;(i=n.next())&&!i.done;){const s=i.value;e.call(r,s[0],s[1])}},vp=(r,e)=>{let t;const n=[];for(;(t=r.exec(e))!==null;)n.push(t);return n},Sp=Ln("HTMLFormElement"),Mp=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,n,i){return n.toUpperCase()+i}),$c=(({hasOwnProperty:r})=>(e,t)=>r.call(e,t))(Object.prototype),yp=Ln("RegExp"),qf=(r,e)=>{const t=Object.getOwnPropertyDescriptors(r),n={};Es(t,(i,s)=>{let a;(a=e(i,s,r))!==!1&&(n[s]=a||i)}),Object.defineProperties(r,n)},Ep=r=>{qf(r,(e,t)=>{if(jt(r)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const n=r[t];if(jt(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},bp=(r,e)=>{const t={},n=i=>{i.forEach(s=>{t[s]=!0})};return Br(r)?n(r):n(String(r).split(e)),t},Tp=()=>{},Ap=(r,e)=>r!=null&&Number.isFinite(r=+r)?r:e;function wp(r){return!!(r&&jt(r.append)&&r[kf]==="FormData"&&r[Ua])}const Rp=r=>{const e=new Array(10),t=(n,i)=>{if(ys(n)){if(e.indexOf(n)>=0)return;if(Ms(n))return n;if(!("toJSON"in n)){e[i]=n;const s=Br(n)?[]:{};return Es(n,(a,o)=>{const c=t(a,i+1);!Ar(c)&&(s[o]=c)}),e[i]=void 0,s}}return n};return t(r,0)},Cp=Ln("AsyncFunction"),Pp=r=>r&&(ys(r)||jt(r))&&jt(r.then)&&jt(r.catch),Yf=((r,e)=>r?setImmediate:e?((t,n)=>(Wi.addEventListener("message",({source:i,data:s})=>{i===Wi&&s===t&&n.length&&n.shift()()},!1),i=>{n.push(i),Wi.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",jt(Wi.postMessage)),Dp=typeof queueMicrotask<"u"?queueMicrotask.bind(Wi):typeof process<"u"&&process.nextTick||Yf,Lp=r=>r!=null&&jt(r[Ua]),G={isArray:Br,isArrayBuffer:Gf,isBuffer:Ms,isFormData:rp,isArrayBufferView:$d,isString:Kd,isNumber:Hf,isBoolean:Zd,isObject:ys,isPlainObject:oa,isEmptyObject:Jd,isReadableStream:ap,isRequest:op,isResponse:lp,isHeaders:cp,isUndefined:Ar,isDate:Qd,isFile:ep,isBlob:tp,isRegExp:yp,isFunction:jt,isStream:ip,isURLSearchParams:sp,isTypedArray:gp,isFileList:np,forEach:Es,merge:ko,extend:fp,trim:up,stripBOM:hp,inherits:dp,toFlatObject:pp,kindOf:Ia,kindOfTest:Ln,endsWith:mp,toArray:_p,forEachEntry:xp,matchAll:vp,isHTMLForm:Sp,hasOwnProperty:$c,hasOwnProp:$c,reduceDescriptors:qf,freezeMethods:Ep,toObjectSet:bp,toCamelCase:Mp,noop:Tp,toFiniteNumber:Ap,findKey:Wf,global:Wi,isContextDefined:Xf,isSpecCompliantForm:wp,toJSONObject:Rp,isAsyncFn:Cp,isThenable:Pp,setImmediate:Yf,asap:Dp,isIterable:Lp};let Re=class jf extends Error{static from(e,t,n,i,s,a){const o=new jf(e.message,t||e.code,n,i,s);return o.cause=e,o.name=e.name,a&&Object.assign(o,a),o}constructor(e,t,n,i,s){super(e),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),s&&(this.response=s,this.status=s.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:G.toJSONObject(this.config),code:this.code,status:this.status}}};Re.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Re.ERR_BAD_OPTION="ERR_BAD_OPTION";Re.ECONNABORTED="ECONNABORTED";Re.ETIMEDOUT="ETIMEDOUT";Re.ERR_NETWORK="ERR_NETWORK";Re.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Re.ERR_DEPRECATED="ERR_DEPRECATED";Re.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Re.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Re.ERR_CANCELED="ERR_CANCELED";Re.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Re.ERR_INVALID_URL="ERR_INVALID_URL";const Up=null;function Go(r){return G.isPlainObject(r)||G.isArray(r)}function $f(r){return G.endsWith(r,"[]")?r.slice(0,-2):r}function Kc(r,e,t){return r?r.concat(e).map(function(i,s){return i=$f(i),!t&&s?"["+i+"]":i}).join(t?".":""):e}function Ip(r){return G.isArray(r)&&!r.some(Go)}const Np=G.toFlatObject(G,{},null,function(e){return/^is[A-Z]/.test(e)});function Fa(r,e,t){if(!G.isObject(r))throw new TypeError("target must be an object");e=e||new FormData,t=G.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,d){return!G.isUndefined(d[_])});const n=t.metaTokens,i=t.visitor||u,s=t.dots,a=t.indexes,c=(t.Blob||typeof Blob<"u"&&Blob)&&G.isSpecCompliantForm(e);if(!G.isFunction(i))throw new TypeError("visitor must be a function");function l(g){if(g===null)return"";if(G.isDate(g))return g.toISOString();if(G.isBoolean(g))return g.toString();if(!c&&G.isBlob(g))throw new Re("Blob is not supported. Use a Buffer instead.");return G.isArrayBuffer(g)||G.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,_,d){let p=g;if(g&&!d&&typeof g=="object"){if(G.endsWith(_,"{}"))_=n?_:_.slice(0,-2),g=JSON.stringify(g);else if(G.isArray(g)&&Ip(g)||(G.isFileList(g)||G.endsWith(_,"[]"))&&(p=G.toArray(g)))return _=$f(_),p.forEach(function(y,M){!(G.isUndefined(y)||y===null)&&e.append(a===!0?Kc([_],M,s):a===null?_:_+"[]",l(y))}),!1}return Go(g)?!0:(e.append(Kc(d,_,s),l(g)),!1)}const f=[],h=Object.assign(Np,{defaultVisitor:u,convertValue:l,isVisitable:Go});function m(g,_){if(!G.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+_.join("."));f.push(g),G.forEach(g,function(p,S){(!(G.isUndefined(p)||p===null)&&i.call(e,p,G.isString(S)?S.trim():S,_,h))===!0&&m(p,_?_.concat(S):[S])}),f.pop()}}if(!G.isObject(r))throw new TypeError("data must be an object");return m(r),e}function Zc(r){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g,function(n){return e[n]})}function nc(r,e){this._pairs=[],r&&Fa(r,this,e)}const Kf=nc.prototype;Kf.append=function(e,t){this._pairs.push([e,t])};Kf.toString=function(e){const t=e?function(n){return e.call(this,n,Zc)}:Zc;return this._pairs.map(function(i){return t(i[0])+"="+t(i[1])},"").join("&")};function Fp(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Zf(r,e,t){if(!e)return r;const n=t&&t.encode||Fp,i=G.isFunction(t)?{serialize:t}:t,s=i&&i.serialize;let a;if(s?a=s(e,i):a=G.isURLSearchParams(e)?e.toString():new nc(e,i).toString(n),a){const o=r.indexOf("#");o!==-1&&(r=r.slice(0,o)),r+=(r.indexOf("?")===-1?"?":"&")+a}return r}class Jc{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){G.forEach(this.handlers,function(n){n!==null&&e(n)})}}const ic={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Op=typeof URLSearchParams<"u"?URLSearchParams:nc,Bp=typeof FormData<"u"?FormData:null,zp=typeof Blob<"u"?Blob:null,Vp={isBrowser:!0,classes:{URLSearchParams:Op,FormData:Bp,Blob:zp},protocols:["http","https","file","blob","url","data"]},rc=typeof window<"u"&&typeof document<"u",Ho=typeof navigator=="object"&&navigator||void 0,kp=rc&&(!Ho||["ReactNative","NativeScript","NS"].indexOf(Ho.product)<0),Gp=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Hp=rc&&window.location.href||"http://localhost",Wp=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:rc,hasStandardBrowserEnv:kp,hasStandardBrowserWebWorkerEnv:Gp,navigator:Ho,origin:Hp},Symbol.toStringTag,{value:"Module"})),Ot={...Wp,...Vp};function Xp(r,e){return Fa(r,new Ot.classes.URLSearchParams,{visitor:function(t,n,i,s){return Ot.isNode&&G.isBuffer(t)?(this.append(n,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}function qp(r){return G.matchAll(/\w+|\[(\w*)]/g,r).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Yp(r){const e={},t=Object.keys(r);let n;const i=t.length;let s;for(n=0;n<i;n++)s=t[n],e[s]=r[s];return e}function Jf(r){function e(t,n,i,s){let a=t[s++];if(a==="__proto__")return!0;const o=Number.isFinite(+a),c=s>=t.length;return a=!a&&G.isArray(i)?i.length:a,c?(G.hasOwnProp(i,a)?i[a]=[i[a],n]:i[a]=n,!o):((!i[a]||!G.isObject(i[a]))&&(i[a]=[]),e(t,n,i[a],s)&&G.isArray(i[a])&&(i[a]=Yp(i[a])),!o)}if(G.isFormData(r)&&G.isFunction(r.entries)){const t={};return G.forEachEntry(r,(n,i)=>{e(qp(n),i,t,0)}),t}return null}function jp(r,e,t){if(G.isString(r))try{return(e||JSON.parse)(r),G.trim(r)}catch(n){if(n.name!=="SyntaxError")throw n}return(t||JSON.stringify)(r)}const bs={transitional:ic,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,s=G.isObject(e);if(s&&G.isHTMLForm(e)&&(e=new FormData(e)),G.isFormData(e))return i?JSON.stringify(Jf(e)):e;if(G.isArrayBuffer(e)||G.isBuffer(e)||G.isStream(e)||G.isFile(e)||G.isBlob(e)||G.isReadableStream(e))return e;if(G.isArrayBufferView(e))return e.buffer;if(G.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Xp(e,this.formSerializer).toString();if((o=G.isFileList(e))||n.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Fa(o?{"files[]":e}:e,c&&new c,this.formSerializer)}}return s||i?(t.setContentType("application/json",!1),jp(e)):e}],transformResponse:[function(e){const t=this.transitional||bs.transitional,n=t&&t.forcedJSONParsing,i=this.responseType==="json";if(G.isResponse(e)||G.isReadableStream(e))return e;if(e&&G.isString(e)&&(n&&!this.responseType||i)){const a=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e,this.parseReviver)}catch(o){if(a)throw o.name==="SyntaxError"?Re.from(o,Re.ERR_BAD_RESPONSE,this,null,this.response):o}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ot.classes.FormData,Blob:Ot.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};G.forEach(["delete","get","head","post","put","patch"],r=>{bs.headers[r]={}});const $p=G.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Kp=r=>{const e={};let t,n,i;return r&&r.split(`
`).forEach(function(a){i=a.indexOf(":"),t=a.substring(0,i).trim().toLowerCase(),n=a.substring(i+1).trim(),!(!t||e[t]&&$p[t])&&(t==="set-cookie"?e[t]?e[t].push(n):e[t]=[n]:e[t]=e[t]?e[t]+", "+n:n)}),e},Qc=Symbol("internals");function Hr(r){return r&&String(r).trim().toLowerCase()}function la(r){return r===!1||r==null?r:G.isArray(r)?r.map(la):String(r)}function Zp(r){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=t.exec(r);)e[n[1]]=n[2];return e}const Jp=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function ja(r,e,t,n,i){if(G.isFunction(n))return n.call(this,e,t);if(i&&(e=t),!!G.isString(e)){if(G.isString(n))return e.indexOf(n)!==-1;if(G.isRegExp(n))return n.test(e)}}function Qp(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function em(r,e){const t=G.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(r,n+t,{value:function(i,s,a){return this[n].call(this,e,i,s,a)},configurable:!0})})}let $t=class{constructor(e){e&&this.set(e)}set(e,t,n){const i=this;function s(o,c,l){const u=Hr(c);if(!u)throw new Error("header name must be a non-empty string");const f=G.findKey(i,u);(!f||i[f]===void 0||l===!0||l===void 0&&i[f]!==!1)&&(i[f||c]=la(o))}const a=(o,c)=>G.forEach(o,(l,u)=>s(l,u,c));if(G.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(G.isString(e)&&(e=e.trim())&&!Jp(e))a(Kp(e),t);else if(G.isObject(e)&&G.isIterable(e)){let o={},c,l;for(const u of e){if(!G.isArray(u))throw TypeError("Object iterator must return a key-value pair");o[l=u[0]]=(c=o[l])?G.isArray(c)?[...c,u[1]]:[c,u[1]]:u[1]}a(o,t)}else e!=null&&s(t,e,n);return this}get(e,t){if(e=Hr(e),e){const n=G.findKey(this,e);if(n){const i=this[n];if(!t)return i;if(t===!0)return Zp(i);if(G.isFunction(t))return t.call(this,i,n);if(G.isRegExp(t))return t.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Hr(e),e){const n=G.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||ja(this,this[n],n,t)))}return!1}delete(e,t){const n=this;let i=!1;function s(a){if(a=Hr(a),a){const o=G.findKey(n,a);o&&(!t||ja(n,n[o],o,t))&&(delete n[o],i=!0)}}return G.isArray(e)?e.forEach(s):s(e),i}clear(e){const t=Object.keys(this);let n=t.length,i=!1;for(;n--;){const s=t[n];(!e||ja(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const t=this,n={};return G.forEach(this,(i,s)=>{const a=G.findKey(n,s);if(a){t[a]=la(i),delete t[s];return}const o=e?Qp(s):String(s).trim();o!==s&&delete t[s],t[o]=la(i),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return G.forEach(this,(n,i)=>{n!=null&&n!==!1&&(t[i]=e&&G.isArray(n)?n.join(", "):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach(i=>n.set(i)),n}static accessor(e){const n=(this[Qc]=this[Qc]={accessors:{}}).accessors,i=this.prototype;function s(a){const o=Hr(a);n[o]||(em(i,a),n[o]=!0)}return G.isArray(e)?e.forEach(s):s(e),this}};$t.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);G.reduceDescriptors($t.prototype,({value:r},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>r,set(n){this[t]=n}}});G.freezeMethods($t);function $a(r,e){const t=this||bs,n=e||t,i=$t.from(n.headers);let s=n.data;return G.forEach(r,function(o){s=o.call(t,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function Qf(r){return!!(r&&r.__CANCEL__)}let Ts=class extends Re{constructor(e,t,n){super(e??"canceled",Re.ERR_CANCELED,t,n),this.name="CanceledError",this.__CANCEL__=!0}};function eh(r,e,t){const n=t.config.validateStatus;!t.status||!n||n(t.status)?r(t):e(new Re("Request failed with status code "+t.status,[Re.ERR_BAD_REQUEST,Re.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function tm(r){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return e&&e[1]||""}function nm(r,e){r=r||10;const t=new Array(r),n=new Array(r);let i=0,s=0,a;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=n[s];a||(a=l),t[i]=c,n[i]=l;let f=s,h=0;for(;f!==i;)h+=t[f++],f=f%r;if(i=(i+1)%r,i===s&&(s=(s+1)%r),l-a<e)return;const m=u&&l-u;return m?Math.round(h*1e3/m):void 0}}function im(r,e){let t=0,n=1e3/e,i,s;const a=(l,u=Date.now())=>{t=u,i=null,s&&(clearTimeout(s),s=null),r(...l)};return[(...l)=>{const u=Date.now(),f=u-t;f>=n?a(l,u):(i=l,s||(s=setTimeout(()=>{s=null,a(i)},n-f)))},()=>i&&a(i)]}const Sa=(r,e,t=3)=>{let n=0;const i=nm(50,250);return im(s=>{const a=s.loaded,o=s.lengthComputable?s.total:void 0,c=a-n,l=i(c),u=a<=o;n=a;const f={loaded:a,total:o,progress:o?a/o:void 0,bytes:c,rate:l||void 0,estimated:l&&o&&u?(o-a)/l:void 0,event:s,lengthComputable:o!=null,[e?"download":"upload"]:!0};r(f)},t)},eu=(r,e)=>{const t=r!=null;return[n=>e[0]({lengthComputable:t,total:r,loaded:n}),e[1]]},tu=r=>(...e)=>G.asap(()=>r(...e)),rm=Ot.hasStandardBrowserEnv?((r,e)=>t=>(t=new URL(t,Ot.origin),r.protocol===t.protocol&&r.host===t.host&&(e||r.port===t.port)))(new URL(Ot.origin),Ot.navigator&&/(msie|trident)/i.test(Ot.navigator.userAgent)):()=>!0,sm=Ot.hasStandardBrowserEnv?{write(r,e,t,n,i,s,a){if(typeof document>"u")return;const o=[`${r}=${encodeURIComponent(e)}`];G.isNumber(t)&&o.push(`expires=${new Date(t).toUTCString()}`),G.isString(n)&&o.push(`path=${n}`),G.isString(i)&&o.push(`domain=${i}`),s===!0&&o.push("secure"),G.isString(a)&&o.push(`SameSite=${a}`),document.cookie=o.join("; ")},read(r){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+r+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(r){this.write(r,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function am(r){return typeof r!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function om(r,e){return e?r.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):r}function th(r,e,t){let n=!am(e);return r&&(n||t==!1)?om(r,e):e}const nu=r=>r instanceof $t?{...r}:r;function Qi(r,e){e=e||{};const t={};function n(l,u,f,h){return G.isPlainObject(l)&&G.isPlainObject(u)?G.merge.call({caseless:h},l,u):G.isPlainObject(u)?G.merge({},u):G.isArray(u)?u.slice():u}function i(l,u,f,h){if(G.isUndefined(u)){if(!G.isUndefined(l))return n(void 0,l,f,h)}else return n(l,u,f,h)}function s(l,u){if(!G.isUndefined(u))return n(void 0,u)}function a(l,u){if(G.isUndefined(u)){if(!G.isUndefined(l))return n(void 0,l)}else return n(void 0,u)}function o(l,u,f){if(f in e)return n(l,u);if(f in r)return n(void 0,l)}const c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:o,headers:(l,u,f)=>i(nu(l),nu(u),f,!0)};return G.forEach(Object.keys({...r,...e}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const f=G.hasOwnProp(c,u)?c[u]:i,h=f(r[u],e[u],u);G.isUndefined(h)&&f!==o||(t[u]=h)}),t}const nh=r=>{const e=Qi({},r);let{data:t,withXSRFToken:n,xsrfHeaderName:i,xsrfCookieName:s,headers:a,auth:o}=e;if(e.headers=a=$t.from(a),e.url=Zf(th(e.baseURL,e.url,e.allowAbsoluteUrls),r.params,r.paramsSerializer),o&&a.set("Authorization","Basic "+btoa((o.username||"")+":"+(o.password?unescape(encodeURIComponent(o.password)):""))),G.isFormData(t)){if(Ot.hasStandardBrowserEnv||Ot.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(G.isFunction(t.getHeaders)){const c=t.getHeaders(),l=["content-type","content-length"];Object.entries(c).forEach(([u,f])=>{l.includes(u.toLowerCase())&&a.set(u,f)})}}if(Ot.hasStandardBrowserEnv&&(n&&G.isFunction(n)&&(n=n(e)),n||n!==!1&&rm(e.url))){const c=i&&s&&sm.read(s);c&&a.set(i,c)}return e},lm=typeof XMLHttpRequest<"u",cm=lm&&function(r){return new Promise(function(t,n){const i=nh(r);let s=i.data;const a=$t.from(i.headers).normalize();let{responseType:o,onUploadProgress:c,onDownloadProgress:l}=i,u,f,h,m,g;function _(){m&&m(),g&&g(),i.cancelToken&&i.cancelToken.unsubscribe(u),i.signal&&i.signal.removeEventListener("abort",u)}let d=new XMLHttpRequest;d.open(i.method.toUpperCase(),i.url,!0),d.timeout=i.timeout;function p(){if(!d)return;const y=$t.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),E={data:!o||o==="text"||o==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:y,config:r,request:d};eh(function(w){t(w),_()},function(w){n(w),_()},E),d=null}"onloadend"in d?d.onloadend=p:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(p)},d.onabort=function(){d&&(n(new Re("Request aborted",Re.ECONNABORTED,r,d)),d=null)},d.onerror=function(M){const E=M&&M.message?M.message:"Network Error",A=new Re(E,Re.ERR_NETWORK,r,d);A.event=M||null,n(A),d=null},d.ontimeout=function(){let M=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const E=i.transitional||ic;i.timeoutErrorMessage&&(M=i.timeoutErrorMessage),n(new Re(M,E.clarifyTimeoutError?Re.ETIMEDOUT:Re.ECONNABORTED,r,d)),d=null},s===void 0&&a.setContentType(null),"setRequestHeader"in d&&G.forEach(a.toJSON(),function(M,E){d.setRequestHeader(E,M)}),G.isUndefined(i.withCredentials)||(d.withCredentials=!!i.withCredentials),o&&o!=="json"&&(d.responseType=i.responseType),l&&([h,g]=Sa(l,!0),d.addEventListener("progress",h)),c&&d.upload&&([f,m]=Sa(c),d.upload.addEventListener("progress",f),d.upload.addEventListener("loadend",m)),(i.cancelToken||i.signal)&&(u=y=>{d&&(n(!y||y.type?new Ts(null,r,d):y),d.abort(),d=null)},i.cancelToken&&i.cancelToken.subscribe(u),i.signal&&(i.signal.aborted?u():i.signal.addEventListener("abort",u)));const S=tm(i.url);if(S&&Ot.protocols.indexOf(S)===-1){n(new Re("Unsupported protocol "+S+":",Re.ERR_BAD_REQUEST,r));return}d.send(s||null)})},um=(r,e)=>{const{length:t}=r=r?r.filter(Boolean):[];if(e||t){let n=new AbortController,i;const s=function(l){if(!i){i=!0,o();const u=l instanceof Error?l:this.reason;n.abort(u instanceof Re?u:new Ts(u instanceof Error?u.message:u))}};let a=e&&setTimeout(()=>{a=null,s(new Re(`timeout of ${e}ms exceeded`,Re.ETIMEDOUT))},e);const o=()=>{r&&(a&&clearTimeout(a),a=null,r.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),r=null)};r.forEach(l=>l.addEventListener("abort",s));const{signal:c}=n;return c.unsubscribe=()=>G.asap(o),c}},fm=function*(r,e){let t=r.byteLength;if(t<e){yield r;return}let n=0,i;for(;n<t;)i=n+e,yield r.slice(n,i),n=i},hm=async function*(r,e){for await(const t of dm(r))yield*fm(t,e)},dm=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const e=r.getReader();try{for(;;){const{done:t,value:n}=await e.read();if(t)break;yield n}}finally{await e.cancel()}},iu=(r,e,t,n)=>{const i=hm(r,e);let s=0,a,o=c=>{a||(a=!0,n&&n(c))};return new ReadableStream({async pull(c){try{const{done:l,value:u}=await i.next();if(l){o(),c.close();return}let f=u.byteLength;if(t){let h=s+=f;t(h)}c.enqueue(new Uint8Array(u))}catch(l){throw o(l),l}},cancel(c){return o(c),i.return()}},{highWaterMark:2})},ru=64*1024,{isFunction:Us}=G,pm=(({Request:r,Response:e})=>({Request:r,Response:e}))(G.global),{ReadableStream:su,TextEncoder:au}=G.global,ou=(r,...e)=>{try{return!!r(...e)}catch{return!1}},mm=r=>{r=G.merge.call({skipUndefined:!0},pm,r);const{fetch:e,Request:t,Response:n}=r,i=e?Us(e):typeof fetch=="function",s=Us(t),a=Us(n);if(!i)return!1;const o=i&&Us(su),c=i&&(typeof au=="function"?(g=>_=>g.encode(_))(new au):async g=>new Uint8Array(await new t(g).arrayBuffer())),l=s&&o&&ou(()=>{let g=!1;const _=new t(Ot.origin,{body:new su,method:"POST",get duplex(){return g=!0,"half"}}).headers.has("Content-Type");return g&&!_}),u=a&&o&&ou(()=>G.isReadableStream(new n("").body)),f={stream:u&&(g=>g.body)};i&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!f[g]&&(f[g]=(_,d)=>{let p=_&&_[g];if(p)return p.call(_);throw new Re(`Response type '${g}' is not supported`,Re.ERR_NOT_SUPPORT,d)})});const h=async g=>{if(g==null)return 0;if(G.isBlob(g))return g.size;if(G.isSpecCompliantForm(g))return(await new t(Ot.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(G.isArrayBufferView(g)||G.isArrayBuffer(g))return g.byteLength;if(G.isURLSearchParams(g)&&(g=g+""),G.isString(g))return(await c(g)).byteLength},m=async(g,_)=>{const d=G.toFiniteNumber(g.getContentLength());return d??h(_)};return async g=>{let{url:_,method:d,data:p,signal:S,cancelToken:y,timeout:M,onDownloadProgress:E,onUploadProgress:A,responseType:w,headers:C,withCredentials:x="same-origin",fetchOptions:T}=nh(g),P=e||fetch;w=w?(w+"").toLowerCase():"text";let F=um([S,y&&y.toAbortSignal()],M),N=null;const X=F&&F.unsubscribe&&(()=>{F.unsubscribe()});let W;try{if(A&&l&&d!=="get"&&d!=="head"&&(W=await m(C,p))!==0){let ie=new t(_,{method:"POST",body:p,duplex:"half"}),be;if(G.isFormData(p)&&(be=ie.headers.get("content-type"))&&C.setContentType(be),ie.body){const[De,Be]=eu(W,Sa(tu(A)));p=iu(ie.body,ru,De,Be)}}G.isString(x)||(x=x?"include":"omit");const V=s&&"credentials"in t.prototype,O={...T,signal:F,method:d.toUpperCase(),headers:C.normalize().toJSON(),body:p,duplex:"half",credentials:V?x:void 0};N=s&&new t(_,O);let Y=await(s?P(N,T):P(_,O));const se=u&&(w==="stream"||w==="response");if(u&&(E||se&&X)){const ie={};["status","statusText","headers"].forEach(ke=>{ie[ke]=Y[ke]});const be=G.toFiniteNumber(Y.headers.get("content-length")),[De,Be]=E&&eu(be,Sa(tu(E),!0))||[];Y=new n(iu(Y.body,ru,De,()=>{Be&&Be(),X&&X()}),ie)}w=w||"text";let ne=await f[G.findKey(f,w)||"text"](Y,g);return!se&&X&&X(),await new Promise((ie,be)=>{eh(ie,be,{data:ne,headers:$t.from(Y.headers),status:Y.status,statusText:Y.statusText,config:g,request:N})})}catch(V){throw X&&X(),V&&V.name==="TypeError"&&/Load failed|fetch/i.test(V.message)?Object.assign(new Re("Network Error",Re.ERR_NETWORK,g,N,V&&V.response),{cause:V.cause||V}):Re.from(V,V&&V.code,g,N,V&&V.response)}}},_m=new Map,ih=r=>{let e=r&&r.env||{};const{fetch:t,Request:n,Response:i}=e,s=[n,i,t];let a=s.length,o=a,c,l,u=_m;for(;o--;)c=s[o],l=u.get(c),l===void 0&&u.set(c,l=o?new Map:mm(e)),u=l;return l};ih();const sc={http:Up,xhr:cm,fetch:{get:ih}};G.forEach(sc,(r,e)=>{if(r){try{Object.defineProperty(r,"name",{value:e})}catch{}Object.defineProperty(r,"adapterName",{value:e})}});const lu=r=>`- ${r}`,gm=r=>G.isFunction(r)||r===null||r===!1;function xm(r,e){r=G.isArray(r)?r:[r];const{length:t}=r;let n,i;const s={};for(let a=0;a<t;a++){n=r[a];let o;if(i=n,!gm(n)&&(i=sc[(o=String(n)).toLowerCase()],i===void 0))throw new Re(`Unknown adapter '${o}'`);if(i&&(G.isFunction(i)||(i=i.get(e))))break;s[o||"#"+a]=i}if(!i){const a=Object.entries(s).map(([c,l])=>`adapter ${c} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=t?a.length>1?`since :
`+a.map(lu).join(`
`):" "+lu(a[0]):"as no adapter specified";throw new Re("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i}const rh={getAdapter:xm,adapters:sc};function Ka(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Ts(null,r)}function cu(r){return Ka(r),r.headers=$t.from(r.headers),r.data=$a.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),rh.getAdapter(r.adapter||bs.adapter,r)(r).then(function(n){return Ka(r),n.data=$a.call(r,r.transformResponse,n),n.headers=$t.from(n.headers),n},function(n){return Qf(n)||(Ka(r),n&&n.response&&(n.response.data=$a.call(r,r.transformResponse,n.response),n.response.headers=$t.from(n.response.headers))),Promise.reject(n)})}const sh="1.13.5",Oa={};["object","boolean","number","function","string","symbol"].forEach((r,e)=>{Oa[r]=function(n){return typeof n===r||"a"+(e<1?"n ":" ")+r}});const uu={};Oa.transitional=function(e,t,n){function i(s,a){return"[Axios v"+sh+"] Transitional option '"+s+"'"+a+(n?". "+n:"")}return(s,a,o)=>{if(e===!1)throw new Re(i(a," has been removed"+(t?" in "+t:"")),Re.ERR_DEPRECATED);return t&&!uu[a]&&(uu[a]=!0,console.warn(i(a," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,a,o):!0}};Oa.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function vm(r,e,t){if(typeof r!="object")throw new Re("options must be an object",Re.ERR_BAD_OPTION_VALUE);const n=Object.keys(r);let i=n.length;for(;i-- >0;){const s=n[i],a=e[s];if(a){const o=r[s],c=o===void 0||a(o,s,r);if(c!==!0)throw new Re("option "+s+" must be "+c,Re.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Re("Unknown option "+s,Re.ERR_BAD_OPTION)}}const ca={assertOptions:vm,validators:Oa},xn=ca.validators;let ji=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Jc,response:new Jc}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{n.stack?s&&!String(n.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+s):n.stack=s}catch{}}throw n}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Qi(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:s}=t;n!==void 0&&ca.assertOptions(n,{silentJSONParsing:xn.transitional(xn.boolean),forcedJSONParsing:xn.transitional(xn.boolean),clarifyTimeoutError:xn.transitional(xn.boolean),legacyInterceptorReqResOrdering:xn.transitional(xn.boolean)},!1),i!=null&&(G.isFunction(i)?t.paramsSerializer={serialize:i}:ca.assertOptions(i,{encode:xn.function,serialize:xn.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),ca.assertOptions(t,{baseUrl:xn.spelling("baseURL"),withXsrfToken:xn.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let a=s&&G.merge(s.common,s[t.method]);s&&G.forEach(["delete","get","head","post","put","patch","common"],g=>{delete s[g]}),t.headers=$t.concat(a,s);const o=[];let c=!0;this.interceptors.request.forEach(function(_){if(typeof _.runWhen=="function"&&_.runWhen(t)===!1)return;c=c&&_.synchronous;const d=t.transitional||ic;d&&d.legacyInterceptorReqResOrdering?o.unshift(_.fulfilled,_.rejected):o.push(_.fulfilled,_.rejected)});const l=[];this.interceptors.response.forEach(function(_){l.push(_.fulfilled,_.rejected)});let u,f=0,h;if(!c){const g=[cu.bind(this),void 0];for(g.unshift(...o),g.push(...l),h=g.length,u=Promise.resolve(t);f<h;)u=u.then(g[f++],g[f++]);return u}h=o.length;let m=t;for(;f<h;){const g=o[f++],_=o[f++];try{m=g(m)}catch(d){_.call(this,d);break}}try{u=cu.call(this,m)}catch(g){return Promise.reject(g)}for(f=0,h=l.length;f<h;)u=u.then(l[f++],l[f++]);return u}getUri(e){e=Qi(this.defaults,e);const t=th(e.baseURL,e.url,e.allowAbsoluteUrls);return Zf(t,e.params,e.paramsSerializer)}};G.forEach(["delete","get","head","options"],function(e){ji.prototype[e]=function(t,n){return this.request(Qi(n||{},{method:e,url:t,data:(n||{}).data}))}});G.forEach(["post","put","patch"],function(e){function t(n){return function(s,a,o){return this.request(Qi(o||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}ji.prototype[e]=t(),ji.prototype[e+"Form"]=t(!0)});let Sm=class ah{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const n=this;this.promise.then(i=>{if(!n._listeners)return;let s=n._listeners.length;for(;s-- >0;)n._listeners[s](i);n._listeners=null}),this.promise.then=i=>{let s;const a=new Promise(o=>{n.subscribe(o),s=o}).then(i);return a.cancel=function(){n.unsubscribe(s)},a},e(function(s,a,o){n.reason||(n.reason=new Ts(s,a,o),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=n=>{e.abort(n)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new ah(function(i){e=i}),cancel:e}}};function Mm(r){return function(t){return r.apply(null,t)}}function ym(r){return G.isObject(r)&&r.isAxiosError===!0}const Wo={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Wo).forEach(([r,e])=>{Wo[e]=r});function oh(r){const e=new ji(r),t=Vf(ji.prototype.request,e);return G.extend(t,ji.prototype,e,{allOwnKeys:!0}),G.extend(t,e,null,{allOwnKeys:!0}),t.create=function(i){return oh(Qi(r,i))},t}const vt=oh(bs);vt.Axios=ji;vt.CanceledError=Ts;vt.CancelToken=Sm;vt.isCancel=Qf;vt.VERSION=sh;vt.toFormData=Fa;vt.AxiosError=Re;vt.Cancel=vt.CanceledError;vt.all=function(e){return Promise.all(e)};vt.spread=Mm;vt.isAxiosError=ym;vt.mergeConfig=Qi;vt.AxiosHeaders=$t;vt.formToJSON=r=>Jf(G.isHTMLForm(r)?new FormData(r):r);vt.getAdapter=rh.getAdapter;vt.HttpStatusCode=Wo;vt.default=vt;const{Axios:py,AxiosError:my,CanceledError:_y,isCancel:gy,CancelToken:xy,VERSION:vy,all:Sy,Cancel:My,isAxiosError:yy,spread:Ey,toFormData:by,AxiosHeaders:Ty,HttpStatusCode:Ay,formToJSON:wy,getAdapter:Ry,mergeConfig:Cy}=vt;window.axios=vt;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";const ac="182",Em=0,fu=1,bm=2,ua=1,lh=2,ts=3,Ti=0,Kt=1,ri=2,ai=0,Mr=1,hu=2,du=3,pu=4,Tm=5,Gi=100,Am=101,wm=102,Rm=103,Cm=104,Pm=200,Dm=201,Lm=202,Um=203,Xo=204,qo=205,Im=206,Nm=207,Fm=208,Om=209,Bm=210,zm=211,Vm=212,km=213,Gm=214,Yo=0,jo=1,$o=2,wr=3,Ko=4,Zo=5,Jo=6,Qo=7,oc=0,Hm=1,Wm=2,Gn=0,ch=1,uh=2,fh=3,lc=4,hh=5,dh=6,ph=7,mh=300,er=301,Rr=302,el=303,tl=304,Ba=306,nl=1e3,si=1001,il=1002,Ut=1003,Xm=1004,Is=1005,zt=1006,Za=1007,Xi=1008,cn=1009,_h=1010,gh=1011,us=1012,cc=1013,Xn=1014,zn=1015,li=1016,uc=1017,fc=1018,fs=1020,xh=35902,vh=35899,Sh=1021,Mh=1022,Pn=1023,ci=1026,qi=1027,yh=1028,hc=1029,Cr=1030,dc=1031,pc=1033,fa=33776,ha=33777,da=33778,pa=33779,rl=35840,sl=35841,al=35842,ol=35843,ll=36196,cl=37492,ul=37496,fl=37488,hl=37489,dl=37490,pl=37491,ml=37808,_l=37809,gl=37810,xl=37811,vl=37812,Sl=37813,Ml=37814,yl=37815,El=37816,bl=37817,Tl=37818,Al=37819,wl=37820,Rl=37821,Cl=36492,Pl=36494,Dl=36495,Ll=36283,Ul=36284,Il=36285,Nl=36286,qm=3200,mc=0,Ym=1,xi="",on="srgb",Pr="srgb-linear",Ma="linear",et="srgb",ir=7680,mu=519,jm=512,$m=513,Km=514,_c=515,Zm=516,Jm=517,gc=518,Qm=519,_u=35044,gu="300 es",Vn=2e3,ya=2001;function Eh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ea(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function e_(){const r=Ea("canvas");return r.style.display="block",r}const xu={};function vu(...r){const e="THREE."+r.shift();console.log(e,...r)}function Pe(...r){const e="THREE."+r.shift();console.warn(e,...r)}function je(...r){const e="THREE."+r.shift();console.error(e,...r)}function hs(...r){const e=r.join(" ");e in xu||(xu[e]=!0,Pe(...r))}function t_(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class zr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ja=Math.PI/180,Fl=180/Math.PI;function As(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[r&255]+Nt[r>>8&255]+Nt[r>>16&255]+Nt[r>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Ge(r,e,t){return Math.max(e,Math.min(t,r))}function n_(r,e){return(r%e+e)%e}function Qa(r,e,t){return(1-t)*r+t*e}function Wr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Yt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ws{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3],h=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(f!==_||c!==h||l!==m||u!==g){let d=c*h+l*m+u*g+f*_;d<0&&(h=-h,m=-m,g=-g,_=-_,d=-d);let p=1-o;if(d<.9995){const S=Math.acos(d),y=Math.sin(S);p=Math.sin(p*S)/y,o=Math.sin(o*S)/y,c=c*p+h*o,l=l*p+m*o,u=u*p+g*o,f=f*p+_*o}else{c=c*p+h*o,l=l*p+m*o,u=u*p+g*o,f=f*p+_*o;const S=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=S,l*=S,u*=S,f*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=s[a],h=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*f+c*m-l*h,e[t+1]=c*g+u*h+l*f-o*m,e[t+2]=l*g+u*m+o*h-c*f,e[t+3]=u*g-o*f-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),f=o(s/2),h=c(n/2),m=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=h*u*f+l*m*g,this._y=l*m*f-h*u*g,this._z=l*u*g+h*m*f,this._w=l*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+l*m*g,this._y=l*m*f-h*u*g,this._z=l*u*g-h*m*f,this._w=l*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-l*m*g,this._y=l*m*f+h*u*g,this._z=l*u*g+h*m*f,this._w=l*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-l*m*g,this._y=l*m*f+h*u*g,this._z=l*u*g-h*m*f,this._w=l*u*f+h*m*g;break;case"YZX":this._x=h*u*f+l*m*g,this._y=l*m*f+h*u*g,this._z=l*u*g-h*m*f,this._w=l*u*f-h*m*g;break;case"XZY":this._x=h*u*f-l*m*g,this._y=l*m*f-h*u*g,this._z=l*u*g+h*m*f,this._w=l*u*f+h*m*g;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-i)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(u-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-i)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-s*c,this._y=i*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Su.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Su.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-s*i),f=2*(s*n-a*t);return this.x=t+c*l+a*f-o*u,this.y=n+c*u+o*l-s*f,this.z=i+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return eo.copy(this).projectOnVector(e),this.sub(eo)}reflect(e){return this.sub(eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eo=new z,Su=new ws;class Ie{constructor(e,t,n,i,s,a,o,c,l){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],m=n[5],g=n[8],_=i[0],d=i[3],p=i[6],S=i[1],y=i[4],M=i[7],E=i[2],A=i[5],w=i[8];return s[0]=a*_+o*S+c*E,s[3]=a*d+o*y+c*A,s[6]=a*p+o*M+c*w,s[1]=l*_+u*S+f*E,s[4]=l*d+u*y+f*A,s[7]=l*p+u*M+f*w,s[2]=h*_+m*S+g*E,s[5]=h*d+m*y+g*A,s[8]=h*p+m*M+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,h=o*c-u*s,m=l*s-a*c,g=t*f+n*h+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*l-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(u*t-i*c)*_,e[5]=(i*s-o*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(to.makeScale(e,t)),this}rotate(e){return this.premultiply(to.makeRotation(-e)),this}translate(e,t){return this.premultiply(to.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const to=new Ie,Mu=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yu=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function i_(){const r={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===et&&(i.r=oi(i.r),i.g=oi(i.g),i.b=oi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(i.r=yr(i.r),i.g=yr(i.g),i.b=yr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xi?Ma:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Pr]:{primaries:e,whitePoint:n,transfer:Ma,toXYZ:Mu,fromXYZ:yu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:n,transfer:et,toXYZ:Mu,fromXYZ:yu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),r}const Xe=i_();function oi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function yr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let rr;class r_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{rr===void 0&&(rr=Ea("canvas")),rr.width=e.width,rr.height=e.height;const i=rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=rr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ea("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=oi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let s_=0;class xc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=As(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(no(i[a].image)):s.push(no(i[a]))}else s=no(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function no(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?r_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let a_=0;const io=new z;class Wt extends zr{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=si,i=si,s=zt,a=Xi,o=Pn,c=cn,l=Wt.DEFAULT_ANISOTROPY,u=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=As(),this.name="",this.source=new xc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(io).x}get height(){return this.source.getSize(io).y}get depth(){return this.source.getSize(io).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nl:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case il:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nl:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case il:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=mh;Wt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,i=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],m=c[5],g=c[9],_=c[2],d=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+d)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,M=(m+1)/2,E=(p+1)/2,A=(u+h)/4,w=(f+_)/4,C=(g+d)/4;return y>M&&y>E?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=A/n,s=w/n):M>E?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=A/i,s=C/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=w/s,i=C/s),this.set(n,i,s,t),this}let S=Math.sqrt((d-g)*(d-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(d-g)/S,this.y=(f-_)/S,this.z=(h-u)/S,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class o_ extends zr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Wt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new xc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends o_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bh extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class l_ extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(s,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ns.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(e.matrixWorld),this.union(Ns)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),Fs.subVectors(this.max,Xr),sr.subVectors(e.a,Xr),ar.subVectors(e.b,Xr),or.subVectors(e.c,Xr),hi.subVectors(ar,sr),di.subVectors(or,ar),Li.subVectors(sr,or);let t=[0,-hi.z,hi.y,0,-di.z,di.y,0,-Li.z,Li.y,hi.z,0,-hi.x,di.z,0,-di.x,Li.z,0,-Li.x,-hi.y,hi.x,0,-di.y,di.x,0,-Li.y,Li.x,0];return!ro(t,sr,ar,or,Fs)||(t=[1,0,0,0,1,0,0,0,1],!ro(t,sr,ar,or,Fs))?!1:(Os.crossVectors(hi,di),t=[Os.x,Os.y,Os.z],ro(t,sr,ar,or,Fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Kn=[new z,new z,new z,new z,new z,new z,new z,new z],An=new z,Ns=new Vr,sr=new z,ar=new z,or=new z,hi=new z,di=new z,Li=new z,Xr=new z,Fs=new z,Os=new z,Ui=new z;function ro(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ui.fromArray(r,s);const o=i.x*Math.abs(Ui.x)+i.y*Math.abs(Ui.y)+i.z*Math.abs(Ui.z),c=e.dot(Ui),l=t.dot(Ui),u=n.dot(Ui);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const c_=new Vr,qr=new z,so=new z;class Rs{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):c_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qr.subVectors(e,this.center);const t=qr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(qr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(so.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qr.copy(e.center).add(so)),this.expandByPoint(qr.copy(e.center).sub(so))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Zn=new z,ao=new z,Bs=new z,pi=new z,oo=new z,zs=new z,lo=new z;class vc{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ao.copy(e).add(t).multiplyScalar(.5),Bs.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(ao);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Bs),o=pi.dot(this.direction),c=-pi.dot(Bs),l=pi.lengthSq(),u=Math.abs(1-a*a);let f,h,m,g;if(u>0)if(f=a*c-o,h=a*o-c,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,m=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ao).addScaledVector(Bs,h),m}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const n=Zn.dot(this.direction),i=Zn.dot(Zn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,n,i,s){oo.subVectors(t,e),zs.subVectors(n,e),lo.crossVectors(oo,zs);let a=this.direction.dot(lo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pi.subVectors(this.origin,e);const c=o*this.direction.dot(zs.crossVectors(pi,zs));if(c<0)return null;const l=o*this.direction.dot(oo.cross(pi));if(l<0||c+l>a)return null;const u=-o*pi.dot(lo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,n,i,s,a,o,c,l,u,f,h,m,g,_,d){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,u,f,h,m,g,_,d)}set(e,t,n,i,s,a,o,c,l,u,f,h,m,g,_,d){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=m,p[7]=g,p[11]=_,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/lr.setFromMatrixColumn(e,0).length(),s=1/lr.setFromMatrixColumn(e,1).length(),a=1/lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,g=o*u,_=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=m+g*l,t[5]=h-_*l,t[9]=-o*c,t[2]=_-h*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,m=c*f,g=l*u,_=l*f;t[0]=h+_*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=_+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,m=c*f,g=l*u,_=l*f;t[0]=h-_*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,m=a*f,g=o*u,_=o*f;t[0]=c*u,t[4]=g*l-m,t[8]=h*l+_,t[1]=c*f,t[5]=_*l+h,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-h*f,t[8]=g*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+_,t[5]=a*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(u_,e,f_)}lookAt(e,t,n){const i=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),mi.crossVectors(n,sn),mi.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),mi.crossVectors(n,sn)),mi.normalize(),Vs.crossVectors(sn,mi),i[0]=mi.x,i[4]=Vs.x,i[8]=sn.x,i[1]=mi.y,i[5]=Vs.y,i[9]=sn.y,i[2]=mi.z,i[6]=Vs.z,i[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],m=n[13],g=n[2],_=n[6],d=n[10],p=n[14],S=n[3],y=n[7],M=n[11],E=n[15],A=i[0],w=i[4],C=i[8],x=i[12],T=i[1],P=i[5],F=i[9],N=i[13],X=i[2],W=i[6],V=i[10],O=i[14],Y=i[3],se=i[7],ne=i[11],ie=i[15];return s[0]=a*A+o*T+c*X+l*Y,s[4]=a*w+o*P+c*W+l*se,s[8]=a*C+o*F+c*V+l*ne,s[12]=a*x+o*N+c*O+l*ie,s[1]=u*A+f*T+h*X+m*Y,s[5]=u*w+f*P+h*W+m*se,s[9]=u*C+f*F+h*V+m*ne,s[13]=u*x+f*N+h*O+m*ie,s[2]=g*A+_*T+d*X+p*Y,s[6]=g*w+_*P+d*W+p*se,s[10]=g*C+_*F+d*V+p*ne,s[14]=g*x+_*N+d*O+p*ie,s[3]=S*A+y*T+M*X+E*Y,s[7]=S*w+y*P+M*W+E*se,s[11]=S*C+y*F+M*V+E*ne,s[15]=S*x+y*N+M*O+E*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],_=e[7],d=e[11],p=e[15],S=c*m-l*h,y=o*m-l*f,M=o*h-c*f,E=a*m-l*u,A=a*h-c*u,w=a*f-o*u;return t*(_*S-d*y+p*M)-n*(g*S-d*E+p*A)+i*(g*y-_*E+p*w)-s*(g*M-_*A+d*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],_=e[13],d=e[14],p=e[15],S=f*d*l-_*h*l+_*c*m-o*d*m-f*c*p+o*h*p,y=g*h*l-u*d*l-g*c*m+a*d*m+u*c*p-a*h*p,M=u*_*l-g*f*l+g*o*m-a*_*m-u*o*p+a*f*p,E=g*f*c-u*_*c-g*o*h+a*_*h+u*o*d-a*f*d,A=t*S+n*y+i*M+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=S*w,e[1]=(_*h*s-f*d*s-_*i*m+n*d*m+f*i*p-n*h*p)*w,e[2]=(o*d*s-_*c*s+_*i*l-n*d*l-o*i*p+n*c*p)*w,e[3]=(f*c*s-o*h*s-f*i*l+n*h*l+o*i*m-n*c*m)*w,e[4]=y*w,e[5]=(u*d*s-g*h*s+g*i*m-t*d*m-u*i*p+t*h*p)*w,e[6]=(g*c*s-a*d*s-g*i*l+t*d*l+a*i*p-t*c*p)*w,e[7]=(a*h*s-u*c*s+u*i*l-t*h*l-a*i*m+t*c*m)*w,e[8]=M*w,e[9]=(g*f*s-u*_*s-g*n*m+t*_*m+u*n*p-t*f*p)*w,e[10]=(a*_*s-g*o*s+g*n*l-t*_*l-a*n*p+t*o*p)*w,e[11]=(u*o*s-a*f*s-u*n*l+t*f*l+a*n*m-t*o*m)*w,e[12]=E*w,e[13]=(u*_*i-g*f*i+g*n*h-t*_*h-u*n*d+t*f*d)*w,e[14]=(g*o*i-a*_*i-g*n*c+t*_*c+a*n*d-t*o*d)*w,e[15]=(a*f*i-u*o*i+u*n*c-t*f*c-a*n*h+t*o*h)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,h=s*l,m=s*u,g=s*f,_=a*u,d=a*f,p=o*f,S=c*l,y=c*u,M=c*f,E=n.x,A=n.y,w=n.z;return i[0]=(1-(_+p))*E,i[1]=(m+M)*E,i[2]=(g-y)*E,i[3]=0,i[4]=(m-M)*A,i[5]=(1-(h+p))*A,i[6]=(d+S)*A,i[7]=0,i[8]=(g+y)*w,i[9]=(d-S)*w,i[10]=(1-(h+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=lr.set(i[0],i[1],i[2]).length();const a=lr.set(i[4],i[5],i[6]).length(),o=lr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),wn.copy(this);const l=1/s,u=1/a,f=1/o;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=f,wn.elements[9]*=f,wn.elements[10]*=f,t.setFromRotationMatrix(wn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Vn,c=!1){const l=this.elements,u=2*s/(t-e),f=2*s/(n-i),h=(t+e)/(t-e),m=(n+i)/(n-i);let g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===Vn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ya)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Vn,c=!1){const l=this.elements,u=2/(t-e),f=2/(n-i),h=-(t+e)/(t-e),m=-(n+i)/(n-i);let g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===Vn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===ya)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const lr=new z,wn=new ut,u_=new z(0,0,0),f_=new z(1,1,1),mi=new z,Vs=new z,sn=new z,Eu=new ut,bu=new ws;class Tn{constructor(e=0,t=0,n=0,i=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],f=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bu.setFromEuler(this),this.setFromQuaternion(bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class Th{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let h_=0;const Tu=new z,cr=new ws,Jn=new ut,ks=new z,Yr=new z,d_=new z,p_=new ws,Au=new z(1,0,0),wu=new z(0,1,0),Ru=new z(0,0,1),Cu={type:"added"},m_={type:"removed"},ur={type:"childadded",child:null},co={type:"childremoved",child:null};class Pt extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new z,t=new Tn,n=new ws,i=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ie}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(Au,e)}rotateY(e){return this.rotateOnAxis(wu,e)}rotateZ(e){return this.rotateOnAxis(Ru,e)}translateOnAxis(e,t){return Tu.copy(e).applyQuaternion(this.quaternion),this.position.add(Tu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Au,e)}translateY(e){return this.translateOnAxis(wu,e)}translateZ(e){return this.translateOnAxis(Ru,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ks.copy(e):ks.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Yr,ks,this.up):Jn.lookAt(ks,Yr,this.up),this.quaternion.setFromRotationMatrix(Jn),i&&(Jn.extractRotation(i.matrixWorld),cr.setFromRotationMatrix(Jn),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cu),ur.child=e,this.dispatchEvent(ur),ur.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(m_),co.child=e,this.dispatchEvent(co),co.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cu),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,e,d_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,p_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Pt.DEFAULT_UP=new z(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new z,Qn=new z,uo=new z,ei=new z,fr=new z,hr=new z,Pu=new z,fo=new z,ho=new z,po=new z,mo=new _t,_o=new _t,go=new _t;class Cn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Rn.subVectors(e,t),i.cross(Rn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Rn.subVectors(i,t),Qn.subVectors(n,t),uo.subVectors(e,t);const a=Rn.dot(Rn),o=Rn.dot(Qn),c=Rn.dot(uo),l=Qn.dot(Qn),u=Qn.dot(uo),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(l*c-o*u)*h,g=(a*u-o*c)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ei.x),c.addScaledVector(a,ei.y),c.addScaledVector(o,ei.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return mo.setScalar(0),_o.setScalar(0),go.setScalar(0),mo.fromBufferAttribute(e,t),_o.fromBufferAttribute(e,n),go.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(mo,s.x),a.addScaledVector(_o,s.y),a.addScaledVector(go,s.z),a}static isFrontFacing(e,t,n,i){return Rn.subVectors(n,t),Qn.subVectors(e,t),Rn.cross(Qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Rn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Cn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;fr.subVectors(i,n),hr.subVectors(s,n),fo.subVectors(e,n);const c=fr.dot(fo),l=hr.dot(fo);if(c<=0&&l<=0)return t.copy(n);ho.subVectors(e,i);const u=fr.dot(ho),f=hr.dot(ho);if(u>=0&&f<=u)return t.copy(i);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(fr,a);po.subVectors(e,s);const m=fr.dot(po),g=hr.dot(po);if(g>=0&&m<=g)return t.copy(s);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(hr,o);const d=u*g-m*f;if(d<=0&&f-u>=0&&m-g>=0)return Pu.subVectors(s,i),o=(f-u)/(f-u+(m-g)),t.copy(i).addScaledVector(Pu,o);const p=1/(d+_+h);return a=_*p,o=h*p,t.copy(n).addScaledVector(fr,a).addScaledVector(hr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function xo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=n_(e,1),t=Ge(t,0,1),n=Ge(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=xo(a,s,e+1/3),this.g=xo(a,s,e),this.b=xo(a,s,e-1/3)}return Xe.colorSpaceToWorking(this,i),this}setStyle(e,t=on){function n(s){s!==void 0&&parseFloat(s)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const n=Ah[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return Xe.workingToColorSpace(Ft.copy(this),e),Math.round(Ge(Ft.r*255,0,255))*65536+Math.round(Ge(Ft.g*255,0,255))*256+Math.round(Ge(Ft.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Ft.copy(this),t);const n=Ft.r,i=Ft.g,s=Ft.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=on){Xe.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,i=Ft.b;return e!==on?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(Gs);const n=Qa(_i.h,Gs.h,t),i=Qa(_i.s,Gs.s,t),s=Qa(_i.l,Gs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ve;Ve.NAMES=Ah;let __=0;class qn extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=As(),this.name="",this.type="Material",this.blending=Mr,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xo,this.blendDst=qo,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xo&&(n.blendSrc=this.blendSrc),this.blendDst!==qo&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wh extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new z,Hs=new $e;let g_=0;class Wn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:g_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_u,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hs.fromBufferAttribute(this,t),Hs.applyMatrix3(e),this.setXY(t,Hs.x,Hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),i=Yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),i=Yt(i,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_u&&(e.usage=this.usage),e}}class Rh extends Wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ch extends Wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lt extends Wn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let x_=0;const vn=new ut,vo=new Pt,dr=new z,an=new Vr,jr=new Vr,Rt=new z;class pn extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eh(e)?Ch:Rh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ie().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return vo.lookAt(e),vo.updateMatrix(),this.applyMatrix4(vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Lt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];jr.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(an.min,jr.min),an.expandByPoint(Rt),Rt.addVectors(an.max,jr.max),an.expandByPoint(Rt)):(an.expandByPoint(jr.min),an.expandByPoint(jr.max))}an.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Rt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Rt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Rt.fromBufferAttribute(o,l),c&&(dr.fromBufferAttribute(e,l),Rt.add(dr)),i=Math.max(i,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new z,c[C]=new z;const l=new z,u=new z,f=new z,h=new $e,m=new $e,g=new $e,_=new z,d=new z;function p(C,x,T){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,x),f.fromBufferAttribute(n,T),h.fromBufferAttribute(s,C),m.fromBufferAttribute(s,x),g.fromBufferAttribute(s,T),u.sub(l),f.sub(l),m.sub(h),g.sub(h);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(P),d.copy(f).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(P),o[C].add(_),o[x].add(_),o[T].add(_),c[C].add(d),c[x].add(d),c[T].add(d))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,x=S.length;C<x;++C){const T=S[C],P=T.start,F=T.count;for(let N=P,X=P+F;N<X;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const y=new z,M=new z,E=new z,A=new z;function w(C){E.fromBufferAttribute(i,C),A.copy(E);const x=o[C];y.copy(x),y.sub(E.multiplyScalar(E.dot(x))).normalize(),M.crossVectors(A,x);const P=M.dot(c[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,P)}for(let C=0,x=S.length;C<x;++C){const T=S[C],P=T.start,F=T.count;for(let N=P,X=P+F;N<X;N+=3)w(e.getX(N+0)),w(e.getX(N+1)),w(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new z,s=new z,a=new z,o=new z,c=new z,l=new z,u=new z,f=new z;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),_=e.getX(h+1),d=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,d),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,d),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let m=0,g=0;for(let _=0,d=c.length;_<d;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*u;for(let p=0;p<u;p++)h[g++]=l[m++]}return new Wn(h,u,f)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],m=e(h,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Du=new ut,Ii=new vc,Ws=new Rs,Lu=new z,Xs=new z,qs=new z,Ys=new z,So=new z,js=new z,Uu=new z,$s=new z;class Dn extends Pt{constructor(e=new pn,t=new wh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){js.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(So.fromBufferAttribute(f,e),a?js.addScaledVector(So,u):js.addScaledVector(So.sub(t),u))}t.add(js)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(s),Ii.copy(e.ray).recast(e.near),!(Ws.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Ws,Lu)===null||Ii.origin.distanceToSquared(Lu)>(e.far-e.near)**2))&&(Du.copy(s).invert(),Ii.copy(e.ray).applyMatrix4(Du),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const d=h[g],p=a[d.materialIndex],S=Math.max(d.start,m.start),y=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let M=S,E=y;M<E;M+=3){const A=o.getX(M),w=o.getX(M+1),C=o.getX(M+2);i=Ks(this,p,e,n,l,u,f,A,w,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=d.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const S=o.getX(d),y=o.getX(d+1),M=o.getX(d+2);i=Ks(this,a,e,n,l,u,f,S,y,M),i&&(i.faceIndex=Math.floor(d/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const d=h[g],p=a[d.materialIndex],S=Math.max(d.start,m.start),y=Math.min(c.count,Math.min(d.start+d.count,m.start+m.count));for(let M=S,E=y;M<E;M+=3){const A=M,w=M+1,C=M+2;i=Ks(this,p,e,n,l,u,f,A,w,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=d.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const S=d,y=d+1,M=d+2;i=Ks(this,a,e,n,l,u,f,S,y,M),i&&(i.faceIndex=Math.floor(d/3),t.push(i))}}}}function v_(r,e,t,n,i,s,a,o){let c;if(e.side===Kt?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===Ti,o),c===null)return null;$s.copy(o),$s.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo($s);return l<t.near||l>t.far?null:{distance:l,point:$s.clone(),object:r}}function Ks(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,Xs),r.getVertexPosition(c,qs),r.getVertexPosition(l,Ys);const u=v_(r,e,t,n,Xs,qs,Ys,Uu);if(u){const f=new z;Cn.getBarycoord(Uu,Xs,qs,Ys,f),i&&(u.uv=Cn.getInterpolatedAttribute(i,o,c,l,f,new $e)),s&&(u.uv1=Cn.getInterpolatedAttribute(s,o,c,l,f,new $e)),a&&(u.normal=Cn.getInterpolatedAttribute(a,o,c,l,f,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new z,materialIndex:0};Cn.getNormal(Xs,qs,Ys,h.normal),u.face=h,u.barycoord=f}return u}class Cs extends pn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(f,2));function g(_,d,p,S,y,M,E,A,w,C,x){const T=M/w,P=E/C,F=M/2,N=E/2,X=A/2,W=w+1,V=C+1;let O=0,Y=0;const se=new z;for(let ne=0;ne<V;ne++){const ie=ne*P-N;for(let be=0;be<W;be++){const De=be*T-F;se[_]=De*S,se[d]=ie*y,se[p]=X,l.push(se.x,se.y,se.z),se[_]=0,se[d]=0,se[p]=A>0?1:-1,u.push(se.x,se.y,se.z),f.push(be/w),f.push(1-ne/C),O+=1}}for(let ne=0;ne<C;ne++)for(let ie=0;ie<w;ie++){const be=h+ie+W*ne,De=h+ie+W*(ne+1),Be=h+(ie+1)+W*(ne+1),ke=h+(ie+1)+W*ne;c.push(be,De,ke),c.push(De,Be,ke),Y+=6}o.addGroup(m,Y,x),m+=Y,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Dr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Gt(r){const e={};for(let t=0;t<r.length;t++){const n=Dr(r[t]);for(const i in n)e[i]=n[i]}return e}function S_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ph(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const M_={clone:Dr,merge:Gt};var y_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=y_,this.fragmentShader=E_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=S_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Dh extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new z,Iu=new $e,Nu=new $e;class yn extends Dh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fl*2*Math.atan(Math.tan(Ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,Iu,Nu),t.subVectors(Nu,Iu)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ja*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pr=-90,mr=1;class b_ extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new yn(pr,mr,e,t);i.layers=this.layers,this.add(i);const s=new yn(pr,mr,e,t);s.layers=this.layers,this.add(s);const a=new yn(pr,mr,e,t);a.layers=this.layers,this.add(a);const o=new yn(pr,mr,e,t);o.layers=this.layers,this.add(o);const c=new yn(pr,mr,e,t);c.layers=this.layers,this.add(c);const l=new yn(pr,mr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ya)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Lh extends Wt{constructor(e=[],t=er,n,i,s,a,o,c,l,u){super(e,t,n,i,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uh extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Lh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Cs(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:ai});s.uniforms.tEquirect.value=t;const a=new Dn(i,s),o=t.minFilter;return t.minFilter===Xi&&(t.minFilter=zt),new b_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class ns extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T_={type:"move"};class Mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const d=t.getJointPose(_,n),p=this._getHandJoint(l,_);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(T_)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ns;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class A_ extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class w_ extends Wt{constructor(e=null,t=1,n=1,i,s,a,o,c,l=Ut,u=Ut,f,h){super(null,a,o,c,l,u,i,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yo=new z,R_=new z,C_=new Ie;class Vi{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=yo.subVectors(n,t).cross(R_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(yo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||C_.getNormalMatrix(e),i=this.coplanarPoint(yo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Rs,P_=new $e(.5,.5),Zs=new z;class Sc{constructor(e=new Vi,t=new Vi,n=new Vi,i=new Vi,s=new Vi,a=new Vi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],h=s[6],m=s[7],g=s[8],_=s[9],d=s[10],p=s[11],S=s[12],y=s[13],M=s[14],E=s[15];if(i[0].setComponents(l-a,m-u,p-g,E-S).normalize(),i[1].setComponents(l+a,m+u,p+g,E+S).normalize(),i[2].setComponents(l+o,m+f,p+_,E+y).normalize(),i[3].setComponents(l-o,m-f,p-_,E-y).normalize(),n)i[4].setComponents(c,h,d,M).normalize(),i[5].setComponents(l-c,m-h,p-d,E-M).normalize();else if(i[4].setComponents(l-c,m-h,p-d,E-M).normalize(),t===Vn)i[5].setComponents(l+c,m+h,p+d,E+M).normalize();else if(t===ya)i[5].setComponents(c,h,d,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){Ni.center.set(0,0,0);const t=P_.distanceTo(e.center);return Ni.radius=.7071067811865476+t,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Zs.x=i.normal.x>0?e.max.x:e.min.x,Zs.y=i.normal.y>0?e.max.y:e.min.y,Zs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ma extends qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ba=new z,Ta=new z,Fu=new ut,$r=new vc,Js=new Rs,Eo=new z,Ou=new z;class D_ extends Pt{constructor(e=new pn,t=new ma){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ba.fromBufferAttribute(t,i-1),Ta.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ba.distanceTo(Ta);e.setAttribute("lineDistance",new Lt(n,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(i),Js.radius+=s,e.ray.intersectsSphere(Js)===!1)return;Fu.copy(i).invert(),$r.copy(e.ray).applyMatrix4(Fu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=m,d=g-1;_<d;_+=l){const p=u.getX(_),S=u.getX(_+1),y=Qs(this,e,$r,c,p,S,_);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),d=u.getX(m),p=Qs(this,e,$r,c,_,d,g-1);p&&t.push(p)}}else{const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=m,d=g-1;_<d;_+=l){const p=Qs(this,e,$r,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Qs(this,e,$r,c,g-1,m,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Qs(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(ba.fromBufferAttribute(o,i),Ta.fromBufferAttribute(o,s),t.distanceSqToSegment(ba,Ta,Eo,Ou)>n)return;Eo.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Eo);if(!(l<e.near||l>e.far))return{distance:l,point:Ou.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Bu=new z,zu=new z;class Vu extends D_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Bu.fromBufferAttribute(t,i),zu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Bu.distanceTo(zu);e.setAttribute("lineDistance",new Lt(n,1))}else Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class is extends qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ku=new ut,Ol=new vc,ea=new Rs,ta=new z;class bo extends Pt{constructor(e=new pn,t=new is){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(i),ea.radius+=s,e.ray.intersectsSphere(ea)===!1)return;ku.copy(i).invert(),Ol.copy(e.ray).applyMatrix4(ku);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const h=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=h,_=m;g<_;g++){const d=l.getX(g);ta.fromBufferAttribute(f,d),Gu(ta,d,c,i,e,t,this)}}else{const h=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=h,_=m;g<_;g++)ta.fromBufferAttribute(f,g),Gu(ta,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Gu(r,e,t,n,i,s,a){const o=Ol.distanceSqToPoint(r);if(o<t){const c=new z;Ol.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ds extends Wt{constructor(e,t,n=Xn,i,s,a,o=Ut,c=Ut,l,u=ci,f=1){if(u!==ci&&u!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,i,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class L_ extends ds{constructor(e,t=Xn,n=er,i,s,a=Ut,o=Ut,c,l=ci){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ih extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class za extends pn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,f=e/o,h=t/c,m=[],g=[],_=[],d=[];for(let p=0;p<u;p++){const S=p*h-a;for(let y=0;y<l;y++){const M=y*f-s;g.push(M,-S,0),_.push(0,0,1),d.push(y/o),d.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){const y=S+l*p,M=S+l*(p+1),E=S+1+l*(p+1),A=S+1+l*p;m.push(y,M,A),m.push(M,E,A)}this.setIndex(m),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.width,e.height,e.widthSegments,e.heightSegments)}}class U_ extends Yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kr extends qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class I_ extends qn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ve(16777215),this.specular=new Ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class N_ extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class F_ extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hu={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class O_{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const m=l[f],g=l[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const B_=new O_;class Mc{constructor(e){this.manager=e!==void 0?e:B_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Mc.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti={};class z_ extends Error{constructor(e,t){super(e),this.response=t}}class V_ extends Mc{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Hu.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ti[e]!==void 0){ti[e].push({onLoad:t,onProgress:n,onError:i});return}ti[e]=[],ti[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Pe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ti[e],f=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=h?parseInt(h):0,g=m!==0;let _=0;const d=new ReadableStream({start(p){S();function S(){f.read().then(({done:y,value:M})=>{if(y)p.close();else{_+=M.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let A=0,w=u.length;A<w;A++){const C=u[A];C.onProgress&&C.onProgress(E)}p.enqueue(M),S()}},y=>{p.error(y)})}}});return new Response(d)}else throw new z_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(h);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{Hu.add(`file:${e}`,l);const u=ti[e];delete ti[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onLoad&&m.onLoad(l)}}).catch(l=>{const u=ti[e];if(u===void 0)throw this.manager.itemError(e),l;delete ti[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Nh extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const To=new ut,Wu=new z,Xu=new z;class k_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sc,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wu),Xu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xu),t.updateMatrixWorld(),To.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(To)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class yc extends Dh{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class G_ extends k_{constructor(){super(new yc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qu extends Nh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new G_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class H_ extends Nh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class W_ extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Yu(r,e,t,n){const i=X_(n);switch(t){case Sh:return r*e;case yh:return r*e/i.components*i.byteLength;case hc:return r*e/i.components*i.byteLength;case Cr:return r*e*2/i.components*i.byteLength;case dc:return r*e*2/i.components*i.byteLength;case Mh:return r*e*3/i.components*i.byteLength;case Pn:return r*e*4/i.components*i.byteLength;case pc:return r*e*4/i.components*i.byteLength;case fa:case ha:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case da:case pa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sl:case ol:return Math.max(r,16)*Math.max(e,8)/4;case rl:case al:return Math.max(r,8)*Math.max(e,8)/2;case ll:case cl:case fl:case hl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ul:case dl:case pl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _l:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case gl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case xl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case vl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case yl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case El:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Al:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case wl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Cl:case Pl:case Dl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ll:case Ul:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Il:case Nl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function X_(r){switch(r){case cn:case _h:return{byteLength:1,components:1};case us:case gh:case li:return{byteLength:2,components:1};case uc:case fc:return{byteLength:2,components:4};case Xn:case cc:case zn:return{byteLength:4,components:1};case xh:case vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ac}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ac);function Fh(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function q_(r){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,h=r.createBuffer();r.bindBuffer(c,h),r.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=r.SHORT;else if(l instanceof Uint32Array)m=r.UNSIGNED_INT;else if(l instanceof Int32Array)m=r.INT;else if(l instanceof Int8Array)m=r.BYTE;else if(l instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const u=c.array,f=c.updateRanges;if(r.bindBuffer(l,o),f.length===0)r.bufferSubData(l,0,u);else{f.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<f.length;m++){const g=f[h],_=f[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let m=0,g=f.length;m<g;m++){const _=f[m];r.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var Y_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j_=`#ifdef USE_ALPHAHASH
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
#endif`,$_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,J_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q_=`#ifdef USE_AOMAP
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
#endif`,eg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tg=`#ifdef USE_BATCHING
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
#endif`,ng=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ig=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ag=`#ifdef USE_IRIDESCENCE
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
#endif`,og=`#ifdef USE_BUMPMAP
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
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_g=`#define PI 3.141592653589793
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
} // validated`,gg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xg=`vec3 transformedNormal = objectNormal;
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
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eg="gl_FragColor = linearToOutputTexel( gl_FragColor );",bg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Pg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ug=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ig=`#ifdef USE_GRADIENTMAP
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
}`,Ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bg=`uniform bool receiveShadow;
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
#endif`,zg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wg=`PhysicalMaterial material;
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
#endif`,Xg=`uniform sampler2D dfgLUT;
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
}`,qg=`
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
#endif`,Yg=`#if defined( RE_IndirectDiffuse )
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
#endif`,jg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$g=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,n0=`#if defined( USE_POINTS_UV )
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
#endif`,i0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`#ifdef USE_MORPHTARGETS
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
#endif`,c0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m0=`#ifdef USE_NORMALMAP
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
#endif`,_0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D0=`float getShadowMask() {
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
}`,L0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U0=`#ifdef USE_SKINNING
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
#endif`,I0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N0=`#ifdef USE_SKINNING
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
#endif`,F0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V0=`#ifdef USE_TRANSMISSION
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
#endif`,k0=`#ifdef USE_TRANSMISSION
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const q0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y0=`uniform sampler2D t2D;
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`#include <common>
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
}`,Q0=`#if DEPTH_PACKING == 3200
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
}`,ex=`#define DISTANCE
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
}`,tx=`#define DISTANCE
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ix=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`uniform float scale;
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
}`,sx=`uniform vec3 diffuse;
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
}`,ax=`#include <common>
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
}`,ox=`uniform vec3 diffuse;
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
}`,lx=`#define LAMBERT
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
}`,cx=`#define LAMBERT
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
}`,ux=`#define MATCAP
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
}`,fx=`#define MATCAP
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
}`,hx=`#define NORMAL
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
}`,dx=`#define NORMAL
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
}`,px=`#define PHONG
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
}`,mx=`#define PHONG
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
}`,_x=`#define STANDARD
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
}`,gx=`#define STANDARD
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
}`,xx=`#define TOON
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
}`,vx=`#define TOON
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
}`,Sx=`uniform float size;
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
}`,Mx=`uniform vec3 diffuse;
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
}`,yx=`#include <common>
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
}`,Ex=`uniform vec3 color;
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
}`,bx=`uniform float rotation;
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
}`,Tx=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:Y_,alphahash_pars_fragment:j_,alphamap_fragment:$_,alphamap_pars_fragment:K_,alphatest_fragment:Z_,alphatest_pars_fragment:J_,aomap_fragment:Q_,aomap_pars_fragment:eg,batching_pars_vertex:tg,batching_vertex:ng,begin_vertex:ig,beginnormal_vertex:rg,bsdfs:sg,iridescence_fragment:ag,bumpmap_pars_fragment:og,clipping_planes_fragment:lg,clipping_planes_pars_fragment:cg,clipping_planes_pars_vertex:ug,clipping_planes_vertex:fg,color_fragment:hg,color_pars_fragment:dg,color_pars_vertex:pg,color_vertex:mg,common:_g,cube_uv_reflection_fragment:gg,defaultnormal_vertex:xg,displacementmap_pars_vertex:vg,displacementmap_vertex:Sg,emissivemap_fragment:Mg,emissivemap_pars_fragment:yg,colorspace_fragment:Eg,colorspace_pars_fragment:bg,envmap_fragment:Tg,envmap_common_pars_fragment:Ag,envmap_pars_fragment:wg,envmap_pars_vertex:Rg,envmap_physical_pars_fragment:zg,envmap_vertex:Cg,fog_vertex:Pg,fog_pars_vertex:Dg,fog_fragment:Lg,fog_pars_fragment:Ug,gradientmap_pars_fragment:Ig,lightmap_pars_fragment:Ng,lights_lambert_fragment:Fg,lights_lambert_pars_fragment:Og,lights_pars_begin:Bg,lights_toon_fragment:Vg,lights_toon_pars_fragment:kg,lights_phong_fragment:Gg,lights_phong_pars_fragment:Hg,lights_physical_fragment:Wg,lights_physical_pars_fragment:Xg,lights_fragment_begin:qg,lights_fragment_maps:Yg,lights_fragment_end:jg,logdepthbuf_fragment:$g,logdepthbuf_pars_fragment:Kg,logdepthbuf_pars_vertex:Zg,logdepthbuf_vertex:Jg,map_fragment:Qg,map_pars_fragment:e0,map_particle_fragment:t0,map_particle_pars_fragment:n0,metalnessmap_fragment:i0,metalnessmap_pars_fragment:r0,morphinstance_vertex:s0,morphcolor_vertex:a0,morphnormal_vertex:o0,morphtarget_pars_vertex:l0,morphtarget_vertex:c0,normal_fragment_begin:u0,normal_fragment_maps:f0,normal_pars_fragment:h0,normal_pars_vertex:d0,normal_vertex:p0,normalmap_pars_fragment:m0,clearcoat_normal_fragment_begin:_0,clearcoat_normal_fragment_maps:g0,clearcoat_pars_fragment:x0,iridescence_pars_fragment:v0,opaque_fragment:S0,packing:M0,premultiplied_alpha_fragment:y0,project_vertex:E0,dithering_fragment:b0,dithering_pars_fragment:T0,roughnessmap_fragment:A0,roughnessmap_pars_fragment:w0,shadowmap_pars_fragment:R0,shadowmap_pars_vertex:C0,shadowmap_vertex:P0,shadowmask_pars_fragment:D0,skinbase_vertex:L0,skinning_pars_vertex:U0,skinning_vertex:I0,skinnormal_vertex:N0,specularmap_fragment:F0,specularmap_pars_fragment:O0,tonemapping_fragment:B0,tonemapping_pars_fragment:z0,transmission_fragment:V0,transmission_pars_fragment:k0,uv_pars_fragment:G0,uv_pars_vertex:H0,uv_vertex:W0,worldpos_vertex:X0,background_vert:q0,background_frag:Y0,backgroundCube_vert:j0,backgroundCube_frag:$0,cube_vert:K0,cube_frag:Z0,depth_vert:J0,depth_frag:Q0,distance_vert:ex,distance_frag:tx,equirect_vert:nx,equirect_frag:ix,linedashed_vert:rx,linedashed_frag:sx,meshbasic_vert:ax,meshbasic_frag:ox,meshlambert_vert:lx,meshlambert_frag:cx,meshmatcap_vert:ux,meshmatcap_frag:fx,meshnormal_vert:hx,meshnormal_frag:dx,meshphong_vert:px,meshphong_frag:mx,meshphysical_vert:_x,meshphysical_frag:gx,meshtoon_vert:xx,meshtoon_frag:vx,points_vert:Sx,points_frag:Mx,shadow_vert:yx,shadow_frag:Ex,sprite_vert:bx,sprite_frag:Tx},ue={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},On={basic:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Gt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Gt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Gt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Gt([ue.points,ue.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Gt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Gt([ue.common,ue.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Gt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Gt([ue.sprite,ue.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distance:{uniforms:Gt([ue.common,ue.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distance_vert,fragmentShader:Ne.distance_frag},shadow:{uniforms:Gt([ue.lights,ue.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};On.physical={uniforms:Gt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const na={r:0,b:0,g:0},Fi=new Tn,Ax=new ut;function wx(r,e,t,n,i,s,a){const o=new Ve(0);let c=s===!0?0:1,l,u,f=null,h=0,m=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?t:e).get(M)),M}function _(y){let M=!1;const E=g(y);E===null?p(o,c):E&&E.isColor&&(p(E,1),M=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function d(y,M){const E=g(M);E&&(E.isCubeTexture||E.mapping===Ba)?(u===void 0&&(u=new Dn(new Cs(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Dr(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Fi.copy(M.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(Fi)),u.material.toneMapped=Xe.getTransfer(E.colorSpace)!==et,(f!==E||h!==E.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,m=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Dn(new za(2,2),new Yn({name:"BackgroundMaterial",uniforms:Dr(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(E.colorSpace)!==et,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,f=E,h=E.version,m=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,M){y.getRGB(na,Ph(r)),n.buffers.color.setClear(na.r,na.g,na.b,M,a)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),c=M,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:_,addToRenderList:d,dispose:S}}function Rx(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(T,P,F,N,X){let W=!1;const V=f(N,F,P);s!==V&&(s=V,l(s.object)),W=m(T,N,F,X),W&&g(T,N,F,X),X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,M(T,P,F,N),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return r.createVertexArray()}function l(T){return r.bindVertexArray(T)}function u(T){return r.deleteVertexArray(T)}function f(T,P,F){const N=F.wireframe===!0;let X=n[T.id];X===void 0&&(X={},n[T.id]=X);let W=X[P.id];W===void 0&&(W={},X[P.id]=W);let V=W[N];return V===void 0&&(V=h(c()),W[N]=V),V}function h(T){const P=[],F=[],N=[];for(let X=0;X<t;X++)P[X]=0,F[X]=0,N[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:N,object:T,attributes:{},index:null}}function m(T,P,F,N){const X=s.attributes,W=P.attributes;let V=0;const O=F.getAttributes();for(const Y in O)if(O[Y].location>=0){const ne=X[Y];let ie=W[Y];if(ie===void 0&&(Y==="instanceMatrix"&&T.instanceMatrix&&(ie=T.instanceMatrix),Y==="instanceColor"&&T.instanceColor&&(ie=T.instanceColor)),ne===void 0||ne.attribute!==ie||ie&&ne.data!==ie.data)return!0;V++}return s.attributesNum!==V||s.index!==N}function g(T,P,F,N){const X={},W=P.attributes;let V=0;const O=F.getAttributes();for(const Y in O)if(O[Y].location>=0){let ne=W[Y];ne===void 0&&(Y==="instanceMatrix"&&T.instanceMatrix&&(ne=T.instanceMatrix),Y==="instanceColor"&&T.instanceColor&&(ne=T.instanceColor));const ie={};ie.attribute=ne,ne&&ne.data&&(ie.data=ne.data),X[Y]=ie,V++}s.attributes=X,s.attributesNum=V,s.index=N}function _(){const T=s.newAttributes;for(let P=0,F=T.length;P<F;P++)T[P]=0}function d(T){p(T,0)}function p(T,P){const F=s.newAttributes,N=s.enabledAttributes,X=s.attributeDivisors;F[T]=1,N[T]===0&&(r.enableVertexAttribArray(T),N[T]=1),X[T]!==P&&(r.vertexAttribDivisor(T,P),X[T]=P)}function S(){const T=s.newAttributes,P=s.enabledAttributes;for(let F=0,N=P.length;F<N;F++)P[F]!==T[F]&&(r.disableVertexAttribArray(F),P[F]=0)}function y(T,P,F,N,X,W,V){V===!0?r.vertexAttribIPointer(T,P,F,X,W):r.vertexAttribPointer(T,P,F,N,X,W)}function M(T,P,F,N){_();const X=N.attributes,W=F.getAttributes(),V=P.defaultAttributeValues;for(const O in W){const Y=W[O];if(Y.location>=0){let se=X[O];if(se===void 0&&(O==="instanceMatrix"&&T.instanceMatrix&&(se=T.instanceMatrix),O==="instanceColor"&&T.instanceColor&&(se=T.instanceColor)),se!==void 0){const ne=se.normalized,ie=se.itemSize,be=e.get(se);if(be===void 0)continue;const De=be.buffer,Be=be.type,ke=be.bytesPerElement,$=Be===r.INT||Be===r.UNSIGNED_INT||se.gpuType===cc;if(se.isInterleavedBufferAttribute){const J=se.data,me=J.stride,Ue=se.offset;if(J.isInstancedInterleavedBuffer){for(let xe=0;xe<Y.locationSize;xe++)p(Y.location+xe,J.meshPerAttribute);T.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let xe=0;xe<Y.locationSize;xe++)d(Y.location+xe);r.bindBuffer(r.ARRAY_BUFFER,De);for(let xe=0;xe<Y.locationSize;xe++)y(Y.location+xe,ie/Y.locationSize,Be,ne,me*ke,(Ue+ie/Y.locationSize*xe)*ke,$)}else{if(se.isInstancedBufferAttribute){for(let J=0;J<Y.locationSize;J++)p(Y.location+J,se.meshPerAttribute);T.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let J=0;J<Y.locationSize;J++)d(Y.location+J);r.bindBuffer(r.ARRAY_BUFFER,De);for(let J=0;J<Y.locationSize;J++)y(Y.location+J,ie/Y.locationSize,Be,ne,ie*ke,ie/Y.locationSize*J*ke,$)}}else if(V!==void 0){const ne=V[O];if(ne!==void 0)switch(ne.length){case 2:r.vertexAttrib2fv(Y.location,ne);break;case 3:r.vertexAttrib3fv(Y.location,ne);break;case 4:r.vertexAttrib4fv(Y.location,ne);break;default:r.vertexAttrib1fv(Y.location,ne)}}}}S()}function E(){C();for(const T in n){const P=n[T];for(const F in P){const N=P[F];for(const X in N)u(N[X].object),delete N[X];delete P[F]}delete n[T]}}function A(T){if(n[T.id]===void 0)return;const P=n[T.id];for(const F in P){const N=P[F];for(const X in N)u(N[X].object),delete N[X];delete P[F]}delete n[T.id]}function w(T){for(const P in n){const F=n[P];if(F[T.id]===void 0)continue;const N=F[T.id];for(const X in N)u(N[X].object),delete N[X];delete F[T.id]}}function C(){x(),a=!0,s!==i&&(s=i,l(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:x,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:d,disableUnusedAttributes:S}}function Cx(r,e,t){let n;function i(l){n=l}function s(l,u){r.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,f){f!==0&&(r.drawArraysInstanced(n,l,u,f),t.update(u,n,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let m=0;for(let g=0;g<f;g++)m+=u[g];t.update(m,n,1)}function c(l,u,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],u[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Px(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==Pn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==cn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==zn&&!C)}function c(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Pe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),d=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=r.getParameter(r.MAX_SAMPLES),A=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:M,maxSamples:E,samples:A}}function Dx(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Vi,o=new Ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||n!==0||i;return i=h,n=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const g=f.clippingPlanes,_=f.clipIntersection,d=f.clipShadows,p=r.get(f);if(!i||g===null||g.length===0||s&&!d)s?u(null):l();else{const S=s?0:n,y=S*4;let M=p.clippingState||null;c.value=M,M=u(g,h,y,m);for(let E=0;E!==y;++E)M[E]=t[E];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,m,g){const _=f!==null?f.length:0;let d=null;if(_!==0){if(d=c.value,g!==!0||d===null){const p=m+_*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(d===null||d.length<p)&&(d=new Float32Array(p));for(let y=0,M=m;y!==_;++y,M+=4)a.copy(f[y]).applyMatrix4(S,o),a.normal.toArray(d,M),d[M+3]=a.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,d}}function Lx(r){let e=new WeakMap;function t(a,o){return o===el?a.mapping=er:o===tl&&(a.mapping=Rr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===el||o===tl)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Uh(c.height);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const vi=4,ju=[.125,.215,.35,.446,.526,.582],Hi=20,Ux=256,Zr=new yc,$u=new Ve;let Ao=null,wo=0,Ro=0,Co=!1;const Ix=new z;class Ku{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Ix}=s;Ao=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ao,wo,Ro),this._renderer.xr.enabled=Co,e.scissorTest=!1,_r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ao=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:li,format:Pn,colorSpace:Pr,depthBuffer:!1},i=Zu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zu(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Nx(s)),this._blurMaterial=Ox(s,e,t),this._ggxMaterial=Fx(s,e,t)}return i}_compileMaterial(e){const t=new Dn(new pn,e);this._renderer.compile(t,Zr)}_sceneToCubeUV(e,t,n,i,s){const c=new yn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,m=f.toneMapping;f.getClearColor($u),f.toneMapping=Gn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dn(new Cs,new wh({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,d=_.material;let p=!1;const S=e.background;S?S.isColor&&(d.color.copy(S),e.background=null,p=!0):(d.color.copy($u),p=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[y],s.y,s.z)):M===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[y]));const E=this._cubeSize;_r(i,M*E,y>2?E:0,E,E),f.setRenderTarget(i),p&&f.render(_,c),f.render(e,c)}f.toneMapping=m,f.autoClear=h,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===er||e.mapping===Rr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ju());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;_r(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Zr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=0+l*1.25,m=f*h,{_lodMax:g}=this,_=this._sizeLods[n],d=3*_*(n>g-vi?n-g+vi:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=g-t,_r(s,d,p,3*_,2*_),i.setRenderTarget(s),i.render(o,Zr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,_r(e,d,p,3*_,2*_),i.setRenderTarget(e),i.render(o,Zr)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[i];f.material=l;const h=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Hi-1),_=s/g,d=isFinite(s)?1+Math.floor(u*_):Hi;d>Hi&&Pe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Hi}`);const p=[];let S=0;for(let w=0;w<Hi;++w){const C=w/_,x=Math.exp(-C*C/2);p.push(x),w===0?S+=x:w<d&&(S+=2*x)}for(let w=0;w<p.length;w++)p[w]=p[w]/S;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-n;const M=this._sizeLods[i],E=3*M*(i>y-vi?i-y+vi:0),A=4*(this._cubeSize-M);_r(t,E,A,3*M,2*M),c.setRenderTarget(t),c.render(f,Zr)}}function Nx(r){const e=[],t=[],n=[];let i=r;const s=r-vi+1+ju.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>r-vi?c=ju[a-r+vi-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,_=3,d=2,p=1,S=new Float32Array(_*g*m),y=new Float32Array(d*g*m),M=new Float32Array(p*g*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,C=A>2?0:-1,x=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];S.set(x,_*g*A),y.set(h,d*g*A);const T=[A,A,A,A,A,A];M.set(T,p*g*A)}const E=new pn;E.setAttribute("position",new Wn(S,_)),E.setAttribute("uv",new Wn(y,d)),E.setAttribute("faceIndex",new Wn(M,p)),n.push(new Dn(E,null)),i>vi&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Zu(r,e,t){const n=new Hn(r,e,t);return n.texture.mapping=Ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _r(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Fx(r,e,t){return new Yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ux,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Va(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Ox(r,e,t){const n=new Float32Array(Hi),i=new z(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Va(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Ju(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Va(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Qu(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Va(){return`

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
	`}function Bx(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===el||c===tl,u=c===er||c===Rr;if(l||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Ku(r)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return l&&m&&m.height>0||u&&m&&i(m)?(t===null&&(t=new Ku(r)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function zx(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&hs("WebGLRenderer: "+n+" extension not supported."),i}}}function Vx(r,e,t,n){const i={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const m in h)e.update(h[m],r.ARRAY_BUFFER)}function l(f){const h=[],m=f.index,g=f.attributes.position;let _=0;if(m!==null){const S=m.array;_=m.version;for(let y=0,M=S.length;y<M;y+=3){const E=S[y+0],A=S[y+1],w=S[y+2];h.push(E,A,A,w,w,E)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,M=S.length/3-1;y<M;y+=3){const E=y+0,A=y+1,w=y+2;h.push(E,A,A,w,w,E)}}else return;const d=new(Eh(h)?Ch:Rh)(h,1);d.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function kx(r,e,t){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,m){r.drawElements(n,m,s,h*a),t.update(m,n,1)}function l(h,m,g){g!==0&&(r.drawElementsInstanced(n,m,s,h*a,g),t.update(m,n,g))}function u(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,h,0,g);let d=0;for(let p=0;p<g;p++)d+=m[p];t.update(d,n,1)}function f(h,m,g,_){if(g===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<h.length;p++)l(h[p]/a,m[p],_[p]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,s,h,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=m[S]*_[S];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Gx(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Hx(r,e,t){const n=new WeakMap,i=new _t;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};var m=T;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),d===!0&&(M=3);let E=o.attributes.position.count*M,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*A*4*f),C=new bh(w,E,A,f);C.type=zn,C.needsUpdate=!0;const x=M*4;for(let P=0;P<f;P++){const F=p[P],N=S[P],X=y[P],W=E*A*4*P;for(let V=0;V<F.count;V++){const O=V*x;g===!0&&(i.fromBufferAttribute(F,V),w[W+O+0]=i.x,w[W+O+1]=i.y,w[W+O+2]=i.z,w[W+O+3]=0),_===!0&&(i.fromBufferAttribute(N,V),w[W+O+4]=i.x,w[W+O+5]=i.y,w[W+O+6]=i.z,w[W+O+7]=0),d===!0&&(i.fromBufferAttribute(X,V),w[W+O+8]=i.x,w[W+O+9]=i.y,w[W+O+10]=i.z,w[W+O+11]=X.itemSize===4?i.w:1)}}h={count:f,texture:C,size:new $e(E,A)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let d=0;d<l.length;d++)g+=l[d];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function Wx(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);if(i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;i.get(h)!==l&&(h.update(),i.set(h,l))}return f}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Xx={[ch]:"LINEAR_TONE_MAPPING",[uh]:"REINHARD_TONE_MAPPING",[fh]:"CINEON_TONE_MAPPING",[lc]:"ACES_FILMIC_TONE_MAPPING",[dh]:"AGX_TONE_MAPPING",[ph]:"NEUTRAL_TONE_MAPPING",[hh]:"CUSTOM_TONE_MAPPING"};function qx(r,e,t,n,i){const s=new Hn(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),a=new Hn(e,t,{type:li,depthBuffer:!1,stencilBuffer:!1}),o=new pn;o.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Lt([0,2,0,0,2,0],2));const c=new U_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new Dn(o,c),u=new yc(-1,1,1,-1,0,1);let f=null,h=null,m=!1,g,_=null,d=[],p=!1;this.setSize=function(S,y){s.setSize(S,y),a.setSize(S,y);for(let M=0;M<d.length;M++){const E=d[M];E.setSize&&E.setSize(S,y)}},this.setEffects=function(S){d=S,p=d.length>0&&d[0].isRenderPass===!0;const y=s.width,M=s.height;for(let E=0;E<d.length;E++){const A=d[E];A.setSize&&A.setSize(y,M)}},this.begin=function(S,y){if(m||S.toneMapping===Gn&&d.length===0)return!1;if(_=y,y!==null){const M=y.width,E=y.height;(s.width!==M||s.height!==E)&&this.setSize(M,E)}return p===!1&&S.setRenderTarget(s),g=S.toneMapping,S.toneMapping=Gn,!0},this.hasRenderPass=function(){return p},this.end=function(S,y){S.toneMapping=g,m=!0;let M=s,E=a;for(let A=0;A<d.length;A++){const w=d[A];if(w.enabled!==!1&&(w.render(S,E,M,y),w.needsSwap!==!1)){const C=M;M=E,E=C}}if(f!==S.outputColorSpace||h!==S.toneMapping){f=S.outputColorSpace,h=S.toneMapping,c.defines={},Xe.getTransfer(f)===et&&(c.defines.SRGB_TRANSFER="");const A=Xx[h];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,S.setRenderTarget(_),S.render(l,u),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Oh=new Wt,Bl=new ds(1,1),Bh=new bh,zh=new l_,Vh=new Lh,ef=[],tf=[],nf=new Float32Array(16),rf=new Float32Array(9),sf=new Float32Array(4);function kr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ef[i];if(s===void 0&&(s=new Float32Array(i),ef[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Tt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function At(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ka(r,e){let t=tf[e];t===void 0&&(t=new Int32Array(e),tf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Yx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function jx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2fv(this.addr,e),At(t,e)}}function $x(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;r.uniform3fv(this.addr,e),At(t,e)}}function Kx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4fv(this.addr,e),At(t,e)}}function Zx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;sf.set(n),r.uniformMatrix2fv(this.addr,!1,sf),At(t,n)}}function Jx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;rf.set(n),r.uniformMatrix3fv(this.addr,!1,rf),At(t,n)}}function Qx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;nf.set(n),r.uniformMatrix4fv(this.addr,!1,nf),At(t,n)}}function ev(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function tv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2iv(this.addr,e),At(t,e)}}function nv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;r.uniform3iv(this.addr,e),At(t,e)}}function iv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4iv(this.addr,e),At(t,e)}}function rv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function sv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2uiv(this.addr,e),At(t,e)}}function av(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;r.uniform3uiv(this.addr,e),At(t,e)}}function ov(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4uiv(this.addr,e),At(t,e)}}function lv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Bl.compareFunction=t.isReversedDepthBuffer()?gc:_c,s=Bl):s=Oh,t.setTexture2D(e||s,i)}function cv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||zh,i)}function uv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Vh,i)}function fv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Bh,i)}function hv(r){switch(r){case 5126:return Yx;case 35664:return jx;case 35665:return $x;case 35666:return Kx;case 35674:return Zx;case 35675:return Jx;case 35676:return Qx;case 5124:case 35670:return ev;case 35667:case 35671:return tv;case 35668:case 35672:return nv;case 35669:case 35673:return iv;case 5125:return rv;case 36294:return sv;case 36295:return av;case 36296:return ov;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return cv;case 35680:case 36300:case 36308:case 36293:return uv;case 36289:case 36303:case 36311:case 36292:return fv}}function dv(r,e){r.uniform1fv(this.addr,e)}function pv(r,e){const t=kr(e,this.size,2);r.uniform2fv(this.addr,t)}function mv(r,e){const t=kr(e,this.size,3);r.uniform3fv(this.addr,t)}function _v(r,e){const t=kr(e,this.size,4);r.uniform4fv(this.addr,t)}function gv(r,e){const t=kr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function xv(r,e){const t=kr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function vv(r,e){const t=kr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Sv(r,e){r.uniform1iv(this.addr,e)}function Mv(r,e){r.uniform2iv(this.addr,e)}function yv(r,e){r.uniform3iv(this.addr,e)}function Ev(r,e){r.uniform4iv(this.addr,e)}function bv(r,e){r.uniform1uiv(this.addr,e)}function Tv(r,e){r.uniform2uiv(this.addr,e)}function Av(r,e){r.uniform3uiv(this.addr,e)}function wv(r,e){r.uniform4uiv(this.addr,e)}function Rv(r,e,t){const n=this.cache,i=e.length,s=ka(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Bl:a=Oh;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function Cv(r,e,t){const n=this.cache,i=e.length,s=ka(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||zh,s[a])}function Pv(r,e,t){const n=this.cache,i=e.length,s=ka(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Vh,s[a])}function Dv(r,e,t){const n=this.cache,i=e.length,s=ka(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Bh,s[a])}function Lv(r){switch(r){case 5126:return dv;case 35664:return pv;case 35665:return mv;case 35666:return _v;case 35674:return gv;case 35675:return xv;case 35676:return vv;case 5124:case 35670:return Sv;case 35667:case 35671:return Mv;case 35668:case 35672:return yv;case 35669:case 35673:return Ev;case 5125:return bv;case 36294:return Tv;case 36295:return Av;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Rv;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Pv;case 36289:case 36303:case 36311:case 36292:return Dv}}class Uv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hv(t.type)}}class Iv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lv(t.type)}}class Nv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Po=/(\w+)(\])?(\[|\.)?/g;function af(r,e){r.seq.push(e),r.map[e.id]=e}function Fv(r,e,t){const n=r.name,i=n.length;for(Po.lastIndex=0;;){const s=Po.exec(n),a=Po.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){af(t,l===void 0?new Uv(o,r,e):new Iv(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new Nv(o),af(t,f)),t=f}}}class _a{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Fv(o,c,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function of(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Ov=37297;let Bv=0;function zv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const lf=new Ie;function Vv(r){Xe._getMatrix(lf,Xe.workingColorSpace,r);const e=`mat3( ${lf.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(r)){case Ma:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function cf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+zv(r.getShaderSource(e),o)}else return s}function kv(r,e){const t=Vv(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Gv={[ch]:"Linear",[uh]:"Reinhard",[fh]:"Cineon",[lc]:"ACESFilmic",[dh]:"AgX",[ph]:"Neutral",[hh]:"Custom"};function Hv(r,e){const t=Gv[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ia=new z;function Wv(){Xe.getLuminanceCoefficients(ia);const r=ia.x.toFixed(4),e=ia.y.toFixed(4),t=ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function qv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yv(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function rs(r){return r!==""}function uf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ff(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(r){return r.replace(jv,Kv)}const $v=new Map;function Kv(r,e){let t=Ne[e];if(t===void 0){const n=$v.get(e);if(n!==void 0)t=Ne[n],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zl(t)}const Zv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hf(r){return r.replace(Zv,Jv)}function Jv(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function df(r){let e=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Qv={[ua]:"SHADOWMAP_TYPE_PCF",[ts]:"SHADOWMAP_TYPE_VSM"};function eS(r){return Qv[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tS={[er]:"ENVMAP_TYPE_CUBE",[Rr]:"ENVMAP_TYPE_CUBE",[Ba]:"ENVMAP_TYPE_CUBE_UV"};function nS(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":tS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const iS={[Rr]:"ENVMAP_MODE_REFRACTION"};function rS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":iS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sS={[oc]:"ENVMAP_BLENDING_MULTIPLY",[Hm]:"ENVMAP_BLENDING_MIX",[Wm]:"ENVMAP_BLENDING_ADD"};function aS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":sS[r.combine]||"ENVMAP_BLENDING_NONE"}function oS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function lS(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=eS(t),l=nS(t),u=rS(t),f=aS(t),h=oS(t),m=Xv(t),g=qv(s),_=i.createProgram();let d,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rs).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rs).join(`
`),p.length>0&&(p+=`
`)):(d=[df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),p=[df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Gn?Hv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,kv("linearToOutputTexel",t.outputColorSpace),Wv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rs).join(`
`)),a=zl(a),a=uf(a,t),a=ff(a,t),o=zl(o),o=uf(o,t),o=ff(o,t),a=hf(a),o=hf(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",t.glslVersion===gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+d+a,M=S+p+o,E=of(i,i.VERTEX_SHADER,y),A=of(i,i.FRAGMENT_SHADER,M);i.attachShader(_,E),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(P){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(_)||"",N=i.getShaderInfoLog(E)||"",X=i.getShaderInfoLog(A)||"",W=F.trim(),V=N.trim(),O=X.trim();let Y=!0,se=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,A);else{const ne=cf(i,E,"vertex"),ie=cf(i,A,"fragment");je("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+ne+`
`+ie)}else W!==""?Pe("WebGLProgram: Program Info Log:",W):(V===""||O==="")&&(se=!1);se&&(P.diagnostics={runnable:Y,programLog:W,vertexShader:{log:V,prefix:d},fragmentShader:{log:O,prefix:p}})}i.deleteShader(E),i.deleteShader(A),C=new _a(i,_),x=Yv(i,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(_,Ov)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}let cS=0;class uS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new fS(e),t.set(e,n)),n}}class fS{constructor(e){this.id=cS++,this.code=e,this.usedTimes=0}}function hS(r,e,t,n,i,s,a){const o=new Th,c=new uS,l=new Set,u=[],f=new Map,h=i.logarithmicDepthBuffer;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function d(x,T,P,F,N){const X=F.fog,W=N.geometry,V=x.isMeshStandardMaterial?F.environment:null,O=(x.isMeshStandardMaterial?t:e).get(x.envMap||V),Y=O&&O.mapping===Ba?O.image.height:null,se=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&Pe("WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const ne=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ie=ne!==void 0?ne.length:0;let be=0;W.morphAttributes.position!==void 0&&(be=1),W.morphAttributes.normal!==void 0&&(be=2),W.morphAttributes.color!==void 0&&(be=3);let De,Be,ke,$;if(se){const Je=On[se];De=Je.vertexShader,Be=Je.fragmentShader}else De=x.vertexShader,Be=x.fragmentShader,c.update(x),ke=c.getVertexShaderID(x),$=c.getFragmentShaderID(x);const J=r.getRenderTarget(),me=r.state.buffers.depth.getReversed(),Ue=N.isInstancedMesh===!0,xe=N.isBatchedMesh===!0,qe=!!x.map,wt=!!x.matcap,We=!!O,Ze=!!x.aoMap,nt=!!x.lightMap,Fe=!!x.bumpMap,St=!!x.normalMap,D=!!x.displacementMap,Mt=!!x.emissiveMap,Ke=!!x.metalnessMap,at=!!x.roughnessMap,Se=x.anisotropy>0,R=x.clearcoat>0,v=x.dispersion>0,U=x.iridescence>0,j=x.sheen>0,Z=x.transmission>0,q=Se&&!!x.anisotropyMap,ye=R&&!!x.clearcoatMap,ae=R&&!!x.clearcoatNormalMap,ve=R&&!!x.clearcoatRoughnessMap,Ce=U&&!!x.iridescenceMap,ee=U&&!!x.iridescenceThicknessMap,le=j&&!!x.sheenColorMap,ge=j&&!!x.sheenRoughnessMap,Me=!!x.specularMap,oe=!!x.specularColorMap,Oe=!!x.specularIntensityMap,L=Z&&!!x.transmissionMap,he=Z&&!!x.thicknessMap,te=!!x.gradientMap,de=!!x.alphaMap,Q=x.alphaTest>0,K=!!x.alphaHash,re=!!x.extensions;let Le=Gn;x.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Le=r.toneMapping);const ot={shaderID:se,shaderType:x.type,shaderName:x.name,vertexShader:De,fragmentShader:Be,defines:x.defines,customVertexShaderID:ke,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:xe,batchingColor:xe&&N._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&N.instanceColor!==null,instancingMorph:Ue&&N.morphTexture!==null,outputColorSpace:J===null?r.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Pr,alphaToCoverage:!!x.alphaToCoverage,map:qe,matcap:wt,envMap:We,envMapMode:We&&O.mapping,envMapCubeUVHeight:Y,aoMap:Ze,lightMap:nt,bumpMap:Fe,normalMap:St,displacementMap:D,emissiveMap:Mt,normalMapObjectSpace:St&&x.normalMapType===Ym,normalMapTangentSpace:St&&x.normalMapType===mc,metalnessMap:Ke,roughnessMap:at,anisotropy:Se,anisotropyMap:q,clearcoat:R,clearcoatMap:ye,clearcoatNormalMap:ae,clearcoatRoughnessMap:ve,dispersion:v,iridescence:U,iridescenceMap:Ce,iridescenceThicknessMap:ee,sheen:j,sheenColorMap:le,sheenRoughnessMap:ge,specularMap:Me,specularColorMap:oe,specularIntensityMap:Oe,transmission:Z,transmissionMap:L,thicknessMap:he,gradientMap:te,opaque:x.transparent===!1&&x.blending===Mr&&x.alphaToCoverage===!1,alphaMap:de,alphaTest:Q,alphaHash:K,combine:x.combine,mapUv:qe&&_(x.map.channel),aoMapUv:Ze&&_(x.aoMap.channel),lightMapUv:nt&&_(x.lightMap.channel),bumpMapUv:Fe&&_(x.bumpMap.channel),normalMapUv:St&&_(x.normalMap.channel),displacementMapUv:D&&_(x.displacementMap.channel),emissiveMapUv:Mt&&_(x.emissiveMap.channel),metalnessMapUv:Ke&&_(x.metalnessMap.channel),roughnessMapUv:at&&_(x.roughnessMap.channel),anisotropyMapUv:q&&_(x.anisotropyMap.channel),clearcoatMapUv:ye&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:le&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ge&&_(x.sheenRoughnessMap.channel),specularMapUv:Me&&_(x.specularMap.channel),specularColorMapUv:oe&&_(x.specularColorMap.channel),specularIntensityMapUv:Oe&&_(x.specularIntensityMap.channel),transmissionMapUv:L&&_(x.transmissionMap.channel),thicknessMapUv:he&&_(x.thicknessMap.channel),alphaMapUv:de&&_(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(St||Se),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(qe||de),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:me,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:be,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Le,decodeVideoTexture:qe&&x.map.isVideoTexture===!0&&Xe.getTransfer(x.map.colorSpace)===et,decodeVideoTextureEmissive:Mt&&x.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(x.emissiveMap.colorSpace)===et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ri,flipSided:x.side===Kt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:re&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&x.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function p(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(S(T,x),y(T,x),T.push(r.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function S(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function y(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),x.push(o.mask)}function M(x){const T=g[x.type];let P;if(T){const F=On[T];P=M_.clone(F.uniforms)}else P=x.uniforms;return P}function E(x,T){let P=f.get(T);return P!==void 0?++P.usedTimes:(P=new lS(r,T,x,s),u.push(P),f.set(T,P)),P}function A(x){if(--x.usedTimes===0){const T=u.indexOf(x);u[T]=u[u.length-1],u.pop(),f.delete(x.cacheKey),x.destroy()}}function w(x){c.remove(x)}function C(){c.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:M,acquireProgram:E,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:C}}function dS(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function pS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function pf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function mf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f,h,m,g,_,d){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:d},r[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=m,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=d),e++,p}function o(f,h,m,g,_,d){const p=a(f,h,m,g,_,d);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):t.push(p)}function c(f,h,m,g,_,d){const p=a(f,h,m,g,_,d);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):t.unshift(p)}function l(f,h){t.length>1&&t.sort(f||pS),n.length>1&&n.sort(h||pf),i.length>1&&i.sort(h||pf)}function u(){for(let f=e,h=r.length;f<h;f++){const m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:u,sort:l}}function mS(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new mf,r.set(n,[a])):i>=s.length?(a=new mf,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function _S(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ve};break;case"SpotLight":t={position:new z,direction:new z,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new z,halfWidth:new z,halfHeight:new z};break}return r[e.id]=t,t}}}function gS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let xS=0;function vS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function SS(r){const e=new _S,t=gS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);const i=new z,s=new ut,a=new ut;function o(l){let u=0,f=0,h=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let m=0,g=0,_=0,d=0,p=0,S=0,y=0,M=0,E=0,A=0,w=0;l.sort(vS);for(let x=0,T=l.length;x<T;x++){const P=l[x],F=P.color,N=P.intensity,X=P.distance;let W=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Cr?W=P.shadow.map.texture:W=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=F.r*N,f+=F.g*N,h+=F.b*N;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],N);w++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,Y=t.get(P);Y.shadowIntensity=O.intensity,Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize=O.mapSize,n.directionalShadow[m]=Y,n.directionalShadowMap[m]=W,n.directionalShadowMatrix[m]=P.shadow.matrix,S++}n.directional[m]=V,m++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(F).multiplyScalar(N),V.distance=X,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[_]=V;const O=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,O.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=O.matrix,P.castShadow){const Y=t.get(P);Y.shadowIntensity=O.intensity,Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize=O.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=W,M++}_++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(F).multiplyScalar(N),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[d]=V,d++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const O=P.shadow,Y=t.get(P);Y.shadowIntensity=O.intensity,Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize=O.mapSize,Y.shadowCameraNear=O.camera.near,Y.shadowCameraFar=O.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=V,g++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(N),V.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[p]=V,p++}}d>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==m||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==d||C.hemiLength!==p||C.numDirectionalShadows!==S||C.numPointShadows!==y||C.numSpotShadows!==M||C.numSpotMaps!==E||C.numLightProbes!==w)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=d,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,C.directionalLength=m,C.pointLength=g,C.spotLength=_,C.rectAreaLength=d,C.hemiLength=p,C.numDirectionalShadows=S,C.numPointShadows=y,C.numSpotShadows=M,C.numSpotMaps=E,C.numLightProbes=w,n.version=xS++)}function c(l,u){let f=0,h=0,m=0,g=0,_=0;const d=u.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const y=l[p];if(y.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(d),f++}else if(y.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(d),m++}else if(y.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),a.identity(),s.copy(y.matrixWorld),s.premultiply(d),a.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),h++}else if(y.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(d),_++}}}return{setup:o,setupView:c,state:n}}function _f(r){const e=new SS(r),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function MS(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new _f(r),e.set(i,[o])):s>=a.length?(o=new _f(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const yS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ES=`uniform sampler2D shadow_pass;
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
}`,bS=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],TS=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],gf=new ut,Jr=new z,Do=new z;function AS(r,e,t){let n=new Sc;const i=new $e,s=new $e,a=new _t,o=new N_,c=new F_,l={},u=t.maxTextureSize,f={[Ti]:Kt,[Kt]:Ti,[ri]:ri},h=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:yS,fragmentShader:ES}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new pn;g.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Dn(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ua;let p=this.type;this.render=function(A,w,C){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;A.type===lh&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=ua);const x=r.getRenderTarget(),T=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),F=r.state;F.setBlending(ai),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const N=p!==this.type;N&&w.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(W=>W.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,W=A.length;X<W;X++){const V=A[X],O=V.shadow;if(O===void 0){Pe("WebGLShadowMap:",V,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const Y=O.getFrameExtents();if(i.multiply(Y),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Y.x),i.x=s.x*Y.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Y.y),i.y=s.y*Y.y,O.mapSize.y=s.y)),O.map===null||N===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===ts){if(V.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Hn(i.x,i.y,{format:Cr,type:li,minFilter:zt,magFilter:zt,generateMipmaps:!1}),O.map.texture.name=V.name+".shadowMap",O.map.depthTexture=new ds(i.x,i.y,zn),O.map.depthTexture.name=V.name+".shadowMapDepth",O.map.depthTexture.format=ci,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ut,O.map.depthTexture.magFilter=Ut}else{V.isPointLight?(O.map=new Uh(i.x),O.map.depthTexture=new L_(i.x,Xn)):(O.map=new Hn(i.x,i.y),O.map.depthTexture=new ds(i.x,i.y,Xn)),O.map.depthTexture.name=V.name+".shadowMap",O.map.depthTexture.format=ci;const ne=r.state.buffers.depth.getReversed();this.type===ua?(O.map.depthTexture.compareFunction=ne?gc:_c,O.map.depthTexture.minFilter=zt,O.map.depthTexture.magFilter=zt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ut,O.map.depthTexture.magFilter=Ut)}O.camera.updateProjectionMatrix()}const se=O.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<se;ne++){if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,ne),r.clear();else{ne===0&&(r.setRenderTarget(O.map),r.clear());const ie=O.getViewport(ne);a.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),F.viewport(a)}if(V.isPointLight){const ie=O.camera,be=O.matrix,De=V.distance||ie.far;De!==ie.far&&(ie.far=De,ie.updateProjectionMatrix()),Jr.setFromMatrixPosition(V.matrixWorld),ie.position.copy(Jr),Do.copy(ie.position),Do.add(bS[ne]),ie.up.copy(TS[ne]),ie.lookAt(Do),ie.updateMatrixWorld(),be.makeTranslation(-Jr.x,-Jr.y,-Jr.z),gf.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),O._frustum.setFromProjectionMatrix(gf,ie.coordinateSystem,ie.reversedDepth)}else O.updateMatrices(V);n=O.getFrustum(),M(w,C,O.camera,V,this.type)}O.isPointLightShadow!==!0&&this.type===ts&&S(O,C),O.needsUpdate=!1}p=this.type,d.needsUpdate=!1,r.setRenderTarget(x,T,P)};function S(A,w){const C=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Hn(i.x,i.y,{format:Cr,type:li})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(w,null,C,h,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(w,null,C,m,_,null)}function y(A,w,C,x){let T=null;const P=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)T=P;else if(T=C.isPointLight===!0?c:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const F=T.uuid,N=w.uuid;let X=l[F];X===void 0&&(X={},l[F]=X);let W=X[N];W===void 0&&(W=T.clone(),X[N]=W,w.addEventListener("dispose",E)),T=W}if(T.visible=w.visible,T.wireframe=w.wireframe,x===ts?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:f[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,C.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const F=r.properties.get(T);F.light=C}return T}function M(A,w,C,x,T){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===ts)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const N=e.update(A),X=A.material;if(Array.isArray(X)){const W=N.groups;for(let V=0,O=W.length;V<O;V++){const Y=W[V],se=X[Y.materialIndex];if(se&&se.visible){const ne=y(A,se,x,T);A.onBeforeShadow(r,A,w,C,N,ne,Y),r.renderBufferDirect(C,null,N,ne,A,Y),A.onAfterShadow(r,A,w,C,N,ne,Y)}}}else if(X.visible){const W=y(A,X,x,T);A.onBeforeShadow(r,A,w,C,N,W,null),r.renderBufferDirect(C,null,N,W,A,null),A.onAfterShadow(r,A,w,C,N,W,null)}}const F=A.children;for(let N=0,X=F.length;N<X;N++)M(F[N],w,C,x,T)}function E(A){A.target.removeEventListener("dispose",E);for(const C in l){const x=l[C],T=A.target.uuid;T in x&&(x[T].dispose(),delete x[T])}}}const wS={[Yo]:jo,[$o]:Jo,[Ko]:Qo,[wr]:Zo,[jo]:Yo,[Jo]:$o,[Qo]:Ko,[Zo]:wr};function RS(r,e){function t(){let L=!1;const he=new _t;let te=null;const de=new _t(0,0,0,0);return{setMask:function(Q){te!==Q&&!L&&(r.colorMask(Q,Q,Q,Q),te=Q)},setLocked:function(Q){L=Q},setClear:function(Q,K,re,Le,ot){ot===!0&&(Q*=Le,K*=Le,re*=Le),he.set(Q,K,re,Le),de.equals(he)===!1&&(r.clearColor(Q,K,re,Le),de.copy(he))},reset:function(){L=!1,te=null,de.set(-1,0,0,0)}}}function n(){let L=!1,he=!1,te=null,de=null,Q=null;return{setReversed:function(K){if(he!==K){const re=e.get("EXT_clip_control");K?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT),he=K;const Le=Q;Q=null,this.setClear(Le)}},getReversed:function(){return he},setTest:function(K){K?J(r.DEPTH_TEST):me(r.DEPTH_TEST)},setMask:function(K){te!==K&&!L&&(r.depthMask(K),te=K)},setFunc:function(K){if(he&&(K=wS[K]),de!==K){switch(K){case Yo:r.depthFunc(r.NEVER);break;case jo:r.depthFunc(r.ALWAYS);break;case $o:r.depthFunc(r.LESS);break;case wr:r.depthFunc(r.LEQUAL);break;case Ko:r.depthFunc(r.EQUAL);break;case Zo:r.depthFunc(r.GEQUAL);break;case Jo:r.depthFunc(r.GREATER);break;case Qo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=K}},setLocked:function(K){L=K},setClear:function(K){Q!==K&&(he&&(K=1-K),r.clearDepth(K),Q=K)},reset:function(){L=!1,te=null,de=null,Q=null,he=!1}}}function i(){let L=!1,he=null,te=null,de=null,Q=null,K=null,re=null,Le=null,ot=null;return{setTest:function(Je){L||(Je?J(r.STENCIL_TEST):me(r.STENCIL_TEST))},setMask:function(Je){he!==Je&&!L&&(r.stencilMask(Je),he=Je)},setFunc:function(Je,Un,$n){(te!==Je||de!==Un||Q!==$n)&&(r.stencilFunc(Je,Un,$n),te=Je,de=Un,Q=$n)},setOp:function(Je,Un,$n){(K!==Je||re!==Un||Le!==$n)&&(r.stencilOp(Je,Un,$n),K=Je,re=Un,Le=$n)},setLocked:function(Je){L=Je},setClear:function(Je){ot!==Je&&(r.clearStencil(Je),ot=Je)},reset:function(){L=!1,he=null,te=null,de=null,Q=null,K=null,re=null,Le=null,ot=null}}}const s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,m=[],g=null,_=!1,d=null,p=null,S=null,y=null,M=null,E=null,A=null,w=new Ve(0,0,0),C=0,x=!1,T=null,P=null,F=null,N=null,X=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,O=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=O>=1):Y.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=O>=2);let se=null,ne={};const ie=r.getParameter(r.SCISSOR_BOX),be=r.getParameter(r.VIEWPORT),De=new _t().fromArray(ie),Be=new _t().fromArray(be);function ke(L,he,te,de){const Q=new Uint8Array(4),K=r.createTexture();r.bindTexture(L,K),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let re=0;re<te;re++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,Q):r.texImage2D(he+re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Q);return K}const $={};$[r.TEXTURE_2D]=ke(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=ke(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=ke(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=ke(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(r.DEPTH_TEST),a.setFunc(wr),Fe(!1),St(fu),J(r.CULL_FACE),Ze(ai);function J(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function me(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function Ue(L,he){return f[L]!==he?(r.bindFramebuffer(L,he),f[L]=he,L===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=he),L===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=he),!0):!1}function xe(L,he){let te=m,de=!1;if(L){te=h.get(he),te===void 0&&(te=[],h.set(he,te));const Q=L.textures;if(te.length!==Q.length||te[0]!==r.COLOR_ATTACHMENT0){for(let K=0,re=Q.length;K<re;K++)te[K]=r.COLOR_ATTACHMENT0+K;te.length=Q.length,de=!0}}else te[0]!==r.BACK&&(te[0]=r.BACK,de=!0);de&&r.drawBuffers(te)}function qe(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const wt={[Gi]:r.FUNC_ADD,[Am]:r.FUNC_SUBTRACT,[wm]:r.FUNC_REVERSE_SUBTRACT};wt[Rm]=r.MIN,wt[Cm]=r.MAX;const We={[Pm]:r.ZERO,[Dm]:r.ONE,[Lm]:r.SRC_COLOR,[Xo]:r.SRC_ALPHA,[Bm]:r.SRC_ALPHA_SATURATE,[Fm]:r.DST_COLOR,[Im]:r.DST_ALPHA,[Um]:r.ONE_MINUS_SRC_COLOR,[qo]:r.ONE_MINUS_SRC_ALPHA,[Om]:r.ONE_MINUS_DST_COLOR,[Nm]:r.ONE_MINUS_DST_ALPHA,[zm]:r.CONSTANT_COLOR,[Vm]:r.ONE_MINUS_CONSTANT_COLOR,[km]:r.CONSTANT_ALPHA,[Gm]:r.ONE_MINUS_CONSTANT_ALPHA};function Ze(L,he,te,de,Q,K,re,Le,ot,Je){if(L===ai){_===!0&&(me(r.BLEND),_=!1);return}if(_===!1&&(J(r.BLEND),_=!0),L!==Tm){if(L!==d||Je!==x){if((p!==Gi||M!==Gi)&&(r.blendEquation(r.FUNC_ADD),p=Gi,M=Gi),Je)switch(L){case Mr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hu:r.blendFunc(r.ONE,r.ONE);break;case du:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case pu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:je("WebGLState: Invalid blending: ",L);break}else switch(L){case Mr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hu:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case du:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pu:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",L);break}S=null,y=null,E=null,A=null,w.set(0,0,0),C=0,d=L,x=Je}return}Q=Q||he,K=K||te,re=re||de,(he!==p||Q!==M)&&(r.blendEquationSeparate(wt[he],wt[Q]),p=he,M=Q),(te!==S||de!==y||K!==E||re!==A)&&(r.blendFuncSeparate(We[te],We[de],We[K],We[re]),S=te,y=de,E=K,A=re),(Le.equals(w)===!1||ot!==C)&&(r.blendColor(Le.r,Le.g,Le.b,ot),w.copy(Le),C=ot),d=L,x=!1}function nt(L,he){L.side===ri?me(r.CULL_FACE):J(r.CULL_FACE);let te=L.side===Kt;he&&(te=!te),Fe(te),L.blending===Mr&&L.transparent===!1?Ze(ai):Ze(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const de=L.stencilWrite;o.setTest(de),de&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Mt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?J(r.SAMPLE_ALPHA_TO_COVERAGE):me(r.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(L){T!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),T=L)}function St(L){L!==Em?(J(r.CULL_FACE),L!==P&&(L===fu?r.cullFace(r.BACK):L===bm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):me(r.CULL_FACE),P=L}function D(L){L!==F&&(V&&r.lineWidth(L),F=L)}function Mt(L,he,te){L?(J(r.POLYGON_OFFSET_FILL),(N!==he||X!==te)&&(r.polygonOffset(he,te),N=he,X=te)):me(r.POLYGON_OFFSET_FILL)}function Ke(L){L?J(r.SCISSOR_TEST):me(r.SCISSOR_TEST)}function at(L){L===void 0&&(L=r.TEXTURE0+W-1),se!==L&&(r.activeTexture(L),se=L)}function Se(L,he,te){te===void 0&&(se===null?te=r.TEXTURE0+W-1:te=se);let de=ne[te];de===void 0&&(de={type:void 0,texture:void 0},ne[te]=de),(de.type!==L||de.texture!==he)&&(se!==te&&(r.activeTexture(te),se=te),r.bindTexture(L,he||$[L]),de.type=L,de.texture=he)}function R(){const L=ne[se];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{r.compressedTexImage2D(...arguments)}catch(L){je("WebGLState:",L)}}function U(){try{r.compressedTexImage3D(...arguments)}catch(L){je("WebGLState:",L)}}function j(){try{r.texSubImage2D(...arguments)}catch(L){je("WebGLState:",L)}}function Z(){try{r.texSubImage3D(...arguments)}catch(L){je("WebGLState:",L)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(L){je("WebGLState:",L)}}function ye(){try{r.compressedTexSubImage3D(...arguments)}catch(L){je("WebGLState:",L)}}function ae(){try{r.texStorage2D(...arguments)}catch(L){je("WebGLState:",L)}}function ve(){try{r.texStorage3D(...arguments)}catch(L){je("WebGLState:",L)}}function Ce(){try{r.texImage2D(...arguments)}catch(L){je("WebGLState:",L)}}function ee(){try{r.texImage3D(...arguments)}catch(L){je("WebGLState:",L)}}function le(L){De.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),De.copy(L))}function ge(L){Be.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Be.copy(L))}function Me(L,he){let te=l.get(he);te===void 0&&(te=new WeakMap,l.set(he,te));let de=te.get(L);de===void 0&&(de=r.getUniformBlockIndex(he,L.name),te.set(L,de))}function oe(L,he){const de=l.get(he).get(L);c.get(he)!==de&&(r.uniformBlockBinding(he,de,L.__bindingPointIndex),c.set(he,de))}function Oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},se=null,ne={},f={},h=new WeakMap,m=[],g=null,_=!1,d=null,p=null,S=null,y=null,M=null,E=null,A=null,w=new Ve(0,0,0),C=0,x=!1,T=null,P=null,F=null,N=null,X=null,De.set(0,0,r.canvas.width,r.canvas.height),Be.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:me,bindFramebuffer:Ue,drawBuffers:xe,useProgram:qe,setBlending:Ze,setMaterial:nt,setFlipSided:Fe,setCullFace:St,setLineWidth:D,setPolygonOffset:Mt,setScissorTest:Ke,activeTexture:at,bindTexture:Se,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:U,texImage2D:Ce,texImage3D:ee,updateUBOMapping:Me,uniformBlockBinding:oe,texStorage2D:ae,texStorage3D:ve,texSubImage2D:j,texSubImage3D:Z,compressedTexSubImage2D:q,compressedTexSubImage3D:ye,scissor:le,viewport:ge,reset:Oe}}function CS(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $e,u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,v){return m?new OffscreenCanvas(R,v):Ea("canvas")}function _(R,v,U){let j=1;const Z=Se(R);if((Z.width>U||Z.height>U)&&(j=U/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor(j*Z.width),ye=Math.floor(j*Z.height);f===void 0&&(f=g(q,ye));const ae=v?g(q,ye):f;return ae.width=q,ae.height=ye,ae.getContext("2d").drawImage(R,0,0,q,ye),Pe("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+ye+")."),ae}else return"data"in R&&Pe("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function d(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(R,v,U,j,Z=!1){if(R!==null){if(r[R]!==void 0)return r[R];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=v;if(v===r.RED&&(U===r.FLOAT&&(q=r.R32F),U===r.HALF_FLOAT&&(q=r.R16F),U===r.UNSIGNED_BYTE&&(q=r.R8)),v===r.RED_INTEGER&&(U===r.UNSIGNED_BYTE&&(q=r.R8UI),U===r.UNSIGNED_SHORT&&(q=r.R16UI),U===r.UNSIGNED_INT&&(q=r.R32UI),U===r.BYTE&&(q=r.R8I),U===r.SHORT&&(q=r.R16I),U===r.INT&&(q=r.R32I)),v===r.RG&&(U===r.FLOAT&&(q=r.RG32F),U===r.HALF_FLOAT&&(q=r.RG16F),U===r.UNSIGNED_BYTE&&(q=r.RG8)),v===r.RG_INTEGER&&(U===r.UNSIGNED_BYTE&&(q=r.RG8UI),U===r.UNSIGNED_SHORT&&(q=r.RG16UI),U===r.UNSIGNED_INT&&(q=r.RG32UI),U===r.BYTE&&(q=r.RG8I),U===r.SHORT&&(q=r.RG16I),U===r.INT&&(q=r.RG32I)),v===r.RGB_INTEGER&&(U===r.UNSIGNED_BYTE&&(q=r.RGB8UI),U===r.UNSIGNED_SHORT&&(q=r.RGB16UI),U===r.UNSIGNED_INT&&(q=r.RGB32UI),U===r.BYTE&&(q=r.RGB8I),U===r.SHORT&&(q=r.RGB16I),U===r.INT&&(q=r.RGB32I)),v===r.RGBA_INTEGER&&(U===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),U===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),U===r.UNSIGNED_INT&&(q=r.RGBA32UI),U===r.BYTE&&(q=r.RGBA8I),U===r.SHORT&&(q=r.RGBA16I),U===r.INT&&(q=r.RGBA32I)),v===r.RGB&&(U===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),U===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),v===r.RGBA){const ye=Z?Ma:Xe.getTransfer(j);U===r.FLOAT&&(q=r.RGBA32F),U===r.HALF_FLOAT&&(q=r.RGBA16F),U===r.UNSIGNED_BYTE&&(q=ye===et?r.SRGB8_ALPHA8:r.RGBA8),U===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),U===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function M(R,v){let U;return R?v===null||v===Xn||v===fs?U=r.DEPTH24_STENCIL8:v===zn?U=r.DEPTH32F_STENCIL8:v===us&&(U=r.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Xn||v===fs?U=r.DEPTH_COMPONENT24:v===zn?U=r.DEPTH_COMPONENT32F:v===us&&(U=r.DEPTH_COMPONENT16),U}function E(R,v){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ut&&R.minFilter!==zt?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function A(R){const v=R.target;v.removeEventListener("dispose",A),C(v),v.isVideoTexture&&u.delete(v)}function w(R){const v=R.target;v.removeEventListener("dispose",w),T(v)}function C(R){const v=n.get(R);if(v.__webglInit===void 0)return;const U=R.source,j=h.get(U);if(j){const Z=j[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&x(R),Object.keys(j).length===0&&h.delete(U)}n.remove(R)}function x(R){const v=n.get(R);r.deleteTexture(v.__webglTexture);const U=R.source,j=h.get(U);delete j[v.__cacheKey],a.memory.textures--}function T(R){const v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let Z=0;Z<v.__webglFramebuffer[j].length;Z++)r.deleteFramebuffer(v.__webglFramebuffer[j][Z]);else r.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)r.deleteFramebuffer(v.__webglFramebuffer[j]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const U=R.textures;for(let j=0,Z=U.length;j<Z;j++){const q=n.get(U[j]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(U[j])}n.remove(R)}let P=0;function F(){P=0}function N(){const R=P;return R>=i.maxTextures&&Pe("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function X(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function W(R,v){const U=n.get(R);if(R.isVideoTexture&&Ke(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){const j=R.image;if(j===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{$(U,R,v);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,U.__webglTexture,r.TEXTURE0+v)}function V(R,v){const U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){$(U,R,v);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,U.__webglTexture,r.TEXTURE0+v)}function O(R,v){const U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){$(U,R,v);return}t.bindTexture(r.TEXTURE_3D,U.__webglTexture,r.TEXTURE0+v)}function Y(R,v){const U=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){J(U,R,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+v)}const se={[nl]:r.REPEAT,[si]:r.CLAMP_TO_EDGE,[il]:r.MIRRORED_REPEAT},ne={[Ut]:r.NEAREST,[Xm]:r.NEAREST_MIPMAP_NEAREST,[Is]:r.NEAREST_MIPMAP_LINEAR,[zt]:r.LINEAR,[Za]:r.LINEAR_MIPMAP_NEAREST,[Xi]:r.LINEAR_MIPMAP_LINEAR},ie={[jm]:r.NEVER,[Qm]:r.ALWAYS,[$m]:r.LESS,[_c]:r.LEQUAL,[Km]:r.EQUAL,[gc]:r.GEQUAL,[Zm]:r.GREATER,[Jm]:r.NOTEQUAL};function be(R,v){if(v.type===zn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===zt||v.magFilter===Za||v.magFilter===Is||v.magFilter===Xi||v.minFilter===zt||v.minFilter===Za||v.minFilter===Is||v.minFilter===Xi)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,se[v.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,se[v.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,se[v.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ne[v.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ne[v.minFilter]),v.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ie[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ut||v.minFilter!==Is&&v.minFilter!==Xi||v.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function De(R,v){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",A));const j=v.source;let Z=h.get(j);Z===void 0&&(Z={},h.set(j,Z));const q=X(v);if(q!==R.__cacheKey){Z[q]===void 0&&(Z[q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Z[q].usedTimes++;const ye=Z[R.__cacheKey];ye!==void 0&&(Z[R.__cacheKey].usedTimes--,ye.usedTimes===0&&x(v)),R.__cacheKey=q,R.__webglTexture=Z[q].texture}return U}function Be(R,v,U){return Math.floor(Math.floor(R/U)/v)}function ke(R,v,U,j){const q=R.updateRanges;if(q.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,U,j,v.data);else{q.sort((ee,le)=>ee.start-le.start);let ye=0;for(let ee=1;ee<q.length;ee++){const le=q[ye],ge=q[ee],Me=le.start+le.count,oe=Be(ge.start,v.width,4),Oe=Be(le.start,v.width,4);ge.start<=Me+1&&oe===Oe&&Be(ge.start+ge.count-1,v.width,4)===oe?le.count=Math.max(le.count,ge.start+ge.count-le.start):(++ye,q[ye]=ge)}q.length=ye+1;const ae=r.getParameter(r.UNPACK_ROW_LENGTH),ve=r.getParameter(r.UNPACK_SKIP_PIXELS),Ce=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let ee=0,le=q.length;ee<le;ee++){const ge=q[ee],Me=Math.floor(ge.start/4),oe=Math.ceil(ge.count/4),Oe=Me%v.width,L=Math.floor(Me/v.width),he=oe,te=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Oe),r.pixelStorei(r.UNPACK_SKIP_ROWS,L),t.texSubImage2D(r.TEXTURE_2D,0,Oe,L,he,te,U,j,v.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ae),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ve),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ce)}}function $(R,v,U){let j=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=r.TEXTURE_3D);const Z=De(R,v),q=v.source;t.bindTexture(j,R.__webglTexture,r.TEXTURE0+U);const ye=n.get(q);if(q.version!==ye.__version||Z===!0){t.activeTexture(r.TEXTURE0+U);const ae=Xe.getPrimaries(Xe.workingColorSpace),ve=v.colorSpace===xi?null:Xe.getPrimaries(v.colorSpace),Ce=v.colorSpace===xi||ae===ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ee=_(v.image,!1,i.maxTextureSize);ee=at(v,ee);const le=s.convert(v.format,v.colorSpace),ge=s.convert(v.type);let Me=y(v.internalFormat,le,ge,v.colorSpace,v.isVideoTexture);be(j,v);let oe;const Oe=v.mipmaps,L=v.isVideoTexture!==!0,he=ye.__version===void 0||Z===!0,te=q.dataReady,de=E(v,ee);if(v.isDepthTexture)Me=M(v.format===qi,v.type),he&&(L?t.texStorage2D(r.TEXTURE_2D,1,Me,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,Me,ee.width,ee.height,0,le,ge,null));else if(v.isDataTexture)if(Oe.length>0){L&&he&&t.texStorage2D(r.TEXTURE_2D,de,Me,Oe[0].width,Oe[0].height);for(let Q=0,K=Oe.length;Q<K;Q++)oe=Oe[Q],L?te&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,oe.width,oe.height,le,ge,oe.data):t.texImage2D(r.TEXTURE_2D,Q,Me,oe.width,oe.height,0,le,ge,oe.data);v.generateMipmaps=!1}else L?(he&&t.texStorage2D(r.TEXTURE_2D,de,Me,ee.width,ee.height),te&&ke(v,ee,le,ge)):t.texImage2D(r.TEXTURE_2D,0,Me,ee.width,ee.height,0,le,ge,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,Me,Oe[0].width,Oe[0].height,ee.depth);for(let Q=0,K=Oe.length;Q<K;Q++)if(oe=Oe[Q],v.format!==Pn)if(le!==null)if(L){if(te)if(v.layerUpdates.size>0){const re=Yu(oe.width,oe.height,v.format,v.type);for(const Le of v.layerUpdates){const ot=oe.data.subarray(Le*re/oe.data.BYTES_PER_ELEMENT,(Le+1)*re/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,Le,oe.width,oe.height,1,le,ot)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,oe.width,oe.height,ee.depth,le,oe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Q,Me,oe.width,oe.height,ee.depth,0,oe.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?te&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,oe.width,oe.height,ee.depth,le,ge,oe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Q,Me,oe.width,oe.height,ee.depth,0,le,ge,oe.data)}else{L&&he&&t.texStorage2D(r.TEXTURE_2D,de,Me,Oe[0].width,Oe[0].height);for(let Q=0,K=Oe.length;Q<K;Q++)oe=Oe[Q],v.format!==Pn?le!==null?L?te&&t.compressedTexSubImage2D(r.TEXTURE_2D,Q,0,0,oe.width,oe.height,le,oe.data):t.compressedTexImage2D(r.TEXTURE_2D,Q,Me,oe.width,oe.height,0,oe.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?te&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,oe.width,oe.height,le,ge,oe.data):t.texImage2D(r.TEXTURE_2D,Q,Me,oe.width,oe.height,0,le,ge,oe.data)}else if(v.isDataArrayTexture)if(L){if(he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,Me,ee.width,ee.height,ee.depth),te)if(v.layerUpdates.size>0){const Q=Yu(ee.width,ee.height,v.format,v.type);for(const K of v.layerUpdates){const re=ee.data.subarray(K*Q/ee.data.BYTES_PER_ELEMENT,(K+1)*Q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,ee.width,ee.height,1,le,ge,re)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,le,ge,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Me,ee.width,ee.height,ee.depth,0,le,ge,ee.data);else if(v.isData3DTexture)L?(he&&t.texStorage3D(r.TEXTURE_3D,de,Me,ee.width,ee.height,ee.depth),te&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,le,ge,ee.data)):t.texImage3D(r.TEXTURE_3D,0,Me,ee.width,ee.height,ee.depth,0,le,ge,ee.data);else if(v.isFramebufferTexture){if(he)if(L)t.texStorage2D(r.TEXTURE_2D,de,Me,ee.width,ee.height);else{let Q=ee.width,K=ee.height;for(let re=0;re<de;re++)t.texImage2D(r.TEXTURE_2D,re,Me,Q,K,0,le,ge,null),Q>>=1,K>>=1}}else if(Oe.length>0){if(L&&he){const Q=Se(Oe[0]);t.texStorage2D(r.TEXTURE_2D,de,Me,Q.width,Q.height)}for(let Q=0,K=Oe.length;Q<K;Q++)oe=Oe[Q],L?te&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,le,ge,oe):t.texImage2D(r.TEXTURE_2D,Q,Me,le,ge,oe);v.generateMipmaps=!1}else if(L){if(he){const Q=Se(ee);t.texStorage2D(r.TEXTURE_2D,de,Me,Q.width,Q.height)}te&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,le,ge,ee)}else t.texImage2D(r.TEXTURE_2D,0,Me,le,ge,ee);d(v)&&p(j),ye.__version=q.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function J(R,v,U){if(v.image.length!==6)return;const j=De(R,v),Z=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+U);const q=n.get(Z);if(Z.version!==q.__version||j===!0){t.activeTexture(r.TEXTURE0+U);const ye=Xe.getPrimaries(Xe.workingColorSpace),ae=v.colorSpace===xi?null:Xe.getPrimaries(v.colorSpace),ve=v.colorSpace===xi||ye===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ce=v.isCompressedTexture||v.image[0].isCompressedTexture,ee=v.image[0]&&v.image[0].isDataTexture,le=[];for(let K=0;K<6;K++)!Ce&&!ee?le[K]=_(v.image[K],!0,i.maxCubemapSize):le[K]=ee?v.image[K].image:v.image[K],le[K]=at(v,le[K]);const ge=le[0],Me=s.convert(v.format,v.colorSpace),oe=s.convert(v.type),Oe=y(v.internalFormat,Me,oe,v.colorSpace),L=v.isVideoTexture!==!0,he=q.__version===void 0||j===!0,te=Z.dataReady;let de=E(v,ge);be(r.TEXTURE_CUBE_MAP,v);let Q;if(Ce){L&&he&&t.texStorage2D(r.TEXTURE_CUBE_MAP,de,Oe,ge.width,ge.height);for(let K=0;K<6;K++){Q=le[K].mipmaps;for(let re=0;re<Q.length;re++){const Le=Q[re];v.format!==Pn?Me!==null?L?te&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,0,0,Le.width,Le.height,Me,Le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,Oe,Le.width,Le.height,0,Le.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,0,0,Le.width,Le.height,Me,oe,Le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,Oe,Le.width,Le.height,0,Me,oe,Le.data)}}}else{if(Q=v.mipmaps,L&&he){Q.length>0&&de++;const K=Se(le[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,de,Oe,K.width,K.height)}for(let K=0;K<6;K++)if(ee){L?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,le[K].width,le[K].height,Me,oe,le[K].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Oe,le[K].width,le[K].height,0,Me,oe,le[K].data);for(let re=0;re<Q.length;re++){const ot=Q[re].image[K].image;L?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,0,0,ot.width,ot.height,Me,oe,ot.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,Oe,ot.width,ot.height,0,Me,oe,ot.data)}}else{L?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Me,oe,le[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Oe,Me,oe,le[K]);for(let re=0;re<Q.length;re++){const Le=Q[re];L?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,0,0,Me,oe,Le.image[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,Oe,Me,oe,Le.image[K])}}}d(v)&&p(r.TEXTURE_CUBE_MAP),q.__version=Z.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function me(R,v,U,j,Z,q){const ye=s.convert(U.format,U.colorSpace),ae=s.convert(U.type),ve=y(U.internalFormat,ye,ae,U.colorSpace),Ce=n.get(v),ee=n.get(U);if(ee.__renderTarget=v,!Ce.__hasExternalTextures){const le=Math.max(1,v.width>>q),ge=Math.max(1,v.height>>q);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,q,ve,le,ge,v.depth,0,ye,ae,null):t.texImage2D(Z,q,ve,le,ge,0,ye,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Mt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,Z,ee.__webglTexture,0,D(v)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,Z,ee.__webglTexture,q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(R,v,U){if(r.bindRenderbuffer(r.RENDERBUFFER,R),v.depthBuffer){const j=v.depthTexture,Z=j&&j.isDepthTexture?j.type:null,q=M(v.stencilBuffer,Z),ye=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Mt(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,D(v),q,v.width,v.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,D(v),q,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,q,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,R)}else{const j=v.textures;for(let Z=0;Z<j.length;Z++){const q=j[Z],ye=s.convert(q.format,q.colorSpace),ae=s.convert(q.type),ve=y(q.internalFormat,ye,ae,q.colorSpace);Mt(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,D(v),ve,v.width,v.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,D(v),ve,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ve,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xe(R,v,U){const j=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),be(r.TEXTURE_CUBE_MAP,v.depthTexture);const Ce=s.convert(v.depthTexture.format),ee=s.convert(v.depthTexture.type);let le;v.depthTexture.format===ci?le=r.DEPTH_COMPONENT24:v.depthTexture.format===qi&&(le=r.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,v.width,v.height,0,Ce,ee,null)}}else W(v.depthTexture,0);const q=Z.__webglTexture,ye=D(v),ae=j?r.TEXTURE_CUBE_MAP_POSITIVE_X+U:r.TEXTURE_2D,ve=v.depthTexture.format===qi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===ci)Mt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ve,ae,q,0,ye):r.framebufferTexture2D(r.FRAMEBUFFER,ve,ae,q,0);else if(v.depthTexture.format===qi)Mt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ve,ae,q,0,ye):r.framebufferTexture2D(r.FRAMEBUFFER,ve,ae,q,0);else throw new Error("Unknown depthTexture format")}function qe(R){const v=n.get(R),U=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=j}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(U)for(let j=0;j<6;j++)xe(v.__webglFramebuffer[j],R,j);else{const j=R.texture.mipmaps;j&&j.length>0?xe(v.__webglFramebuffer[0],R,0):xe(v.__webglFramebuffer,R,0)}else if(U){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=r.createRenderbuffer(),Ue(v.__webglDepthbuffer[j],R,!1);else{const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,q)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),Ue(v.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,q)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function wt(R,v,U){const j=n.get(R);v!==void 0&&me(j.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),U!==void 0&&qe(R)}function We(R){const v=R.texture,U=n.get(R),j=n.get(v);R.addEventListener("dispose",w);const Z=R.textures,q=R.isWebGLCubeRenderTarget===!0,ye=Z.length>1;if(ye||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=v.version,a.memory.textures++),q){U.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[ae]=[];for(let ve=0;ve<v.mipmaps.length;ve++)U.__webglFramebuffer[ae][ve]=r.createFramebuffer()}else U.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)U.__webglFramebuffer[ae]=r.createFramebuffer()}else U.__webglFramebuffer=r.createFramebuffer();if(ye)for(let ae=0,ve=Z.length;ae<ve;ae++){const Ce=n.get(Z[ae]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&Mt(R)===!1){U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ae=0;ae<Z.length;ae++){const ve=Z[ae];U.__webglColorRenderbuffer[ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,U.__webglColorRenderbuffer[ae]);const Ce=s.convert(ve.format,ve.colorSpace),ee=s.convert(ve.type),le=y(ve.internalFormat,Ce,ee,ve.colorSpace,R.isXRRenderTarget===!0),ge=D(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,le,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,U.__webglColorRenderbuffer[ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),Ue(U.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),be(r.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)me(U.__webglFramebuffer[ae][ve],R,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve);else me(U.__webglFramebuffer[ae],R,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);d(v)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ae=0,ve=Z.length;ae<ve;ae++){const Ce=Z[ae],ee=n.get(Ce);let le=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,ee.__webglTexture),be(le,Ce),me(U.__webglFramebuffer,R,Ce,r.COLOR_ATTACHMENT0+ae,le,0),d(Ce)&&p(le)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,j.__webglTexture),be(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)me(U.__webglFramebuffer[ve],R,v,r.COLOR_ATTACHMENT0,ae,ve);else me(U.__webglFramebuffer,R,v,r.COLOR_ATTACHMENT0,ae,0);d(v)&&p(ae),t.unbindTexture()}R.depthBuffer&&qe(R)}function Ze(R){const v=R.textures;for(let U=0,j=v.length;U<j;U++){const Z=v[U];if(d(Z)){const q=S(R),ye=n.get(Z).__webglTexture;t.bindTexture(q,ye),p(q),t.unbindTexture()}}}const nt=[],Fe=[];function St(R){if(R.samples>0){if(Mt(R)===!1){const v=R.textures,U=R.width,j=R.height;let Z=r.COLOR_BUFFER_BIT;const q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=n.get(R),ae=v.length>1;if(ae)for(let Ce=0;Ce<v.length;Ce++)t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const ve=R.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ce=0;Ce<v.length;Ce++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[Ce]);const ee=n.get(v[Ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ee,0)}r.blitFramebuffer(0,0,U,j,0,0,U,j,Z,r.NEAREST),c===!0&&(nt.length=0,Fe.length=0,nt.push(r.COLOR_ATTACHMENT0+Ce),R.depthBuffer&&R.resolveDepthBuffer===!1&&(nt.push(q),Fe.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Fe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ae)for(let Ce=0;Ce<v.length;Ce++){t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,ye.__webglColorRenderbuffer[Ce]);const ee=n.get(v[Ce]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const v=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function D(R){return Math.min(i.maxSamples,R.samples)}function Mt(R){const v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ke(R){const v=a.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function at(R,v){const U=R.colorSpace,j=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==Pr&&U!==xi&&(Xe.getTransfer(U)===et?(j!==Pn||Z!==cn)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",U)),v}function Se(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=O,this.setTextureCube=Y,this.rebindTextures=wt,this.setupRenderTarget=We,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function PS(r,e){function t(n,i=xi){let s;const a=Xe.getTransfer(i);if(n===cn)return r.UNSIGNED_BYTE;if(n===uc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===fc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===xh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===vh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===_h)return r.BYTE;if(n===gh)return r.SHORT;if(n===us)return r.UNSIGNED_SHORT;if(n===cc)return r.INT;if(n===Xn)return r.UNSIGNED_INT;if(n===zn)return r.FLOAT;if(n===li)return r.HALF_FLOAT;if(n===Sh)return r.ALPHA;if(n===Mh)return r.RGB;if(n===Pn)return r.RGBA;if(n===ci)return r.DEPTH_COMPONENT;if(n===qi)return r.DEPTH_STENCIL;if(n===yh)return r.RED;if(n===hc)return r.RED_INTEGER;if(n===Cr)return r.RG;if(n===dc)return r.RG_INTEGER;if(n===pc)return r.RGBA_INTEGER;if(n===fa||n===ha||n===da||n===pa)if(a===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===fa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===fa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===da)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rl||n===sl||n===al||n===ol)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===rl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===al)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ol)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ll||n===cl||n===ul||n===fl||n===hl||n===dl||n===pl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ll||n===cl)return a===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ul)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===fl)return s.COMPRESSED_R11_EAC;if(n===hl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===dl)return s.COMPRESSED_RG11_EAC;if(n===pl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ml||n===_l||n===gl||n===xl||n===vl||n===Sl||n===Ml||n===yl||n===El||n===bl||n===Tl||n===Al||n===wl||n===Rl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ml)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_l)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gl)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xl)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vl)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sl)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ml)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yl)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===El)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bl)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tl)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Al)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wl)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rl)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cl||n===Pl||n===Dl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Cl)return a===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ll||n===Ul||n===Il||n===Nl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ll)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ul)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Il)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const DS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LS=`
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

}`;class US{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ih(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Yn({vertexShader:DS,fragmentShader:LS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dn(new za(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IS extends zr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,m=null,g=null;const _=typeof XRWebGLBinding<"u",d=new US,p={},S=t.getContextAttributes();let y=null,M=null;const E=[],A=[],w=new $e;let C=null;const x=new yn;x.viewport=new _t;const T=new yn;T.viewport=new _t;const P=[x,T],F=new W_;let N=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=E[$];return J===void 0&&(J=new Mo,E[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=E[$];return J===void 0&&(J=new Mo,E[$]=J),J.getGripSpace()},this.getHand=function($){let J=E[$];return J===void 0&&(J=new Mo,E[$]=J),J.getHandSpace()};function W($){const J=A.indexOf($.inputSource);if(J===-1)return;const me=E[J];me!==void 0&&(me.update($.inputSource,$.frame,l||a),me.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",O);for(let $=0;$<E.length;$++){const J=A[$];J!==null&&(A[$]=null,E[$].disconnect(J))}N=null,X=null,d.reset();for(const $ in p)delete p[$];e.setRenderTarget(y),m=null,h=null,f=null,i=null,M=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",V),i.addEventListener("inputsourceschange",O),S.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ue=null,xe=null;S.depth&&(xe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=S.stencil?qi:ci,Ue=S.stencil?fs:Xn);const qe={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(qe),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Hn(h.textureWidth,h.textureHeight,{format:Pn,type:cn,depthTexture:new ds(h.textureWidth,h.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const me={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,me),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Hn(m.framebufferWidth,m.framebufferHeight,{format:Pn,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ke.setContext(i),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function O($){for(let J=0;J<$.removed.length;J++){const me=$.removed[J],Ue=A.indexOf(me);Ue>=0&&(A[Ue]=null,E[Ue].disconnect(me))}for(let J=0;J<$.added.length;J++){const me=$.added[J];let Ue=A.indexOf(me);if(Ue===-1){for(let qe=0;qe<E.length;qe++)if(qe>=A.length){A.push(me),Ue=qe;break}else if(A[qe]===null){A[qe]=me,Ue=qe;break}if(Ue===-1)break}const xe=E[Ue];xe&&xe.connect(me)}}const Y=new z,se=new z;function ne($,J,me){Y.setFromMatrixPosition(J.matrixWorld),se.setFromMatrixPosition(me.matrixWorld);const Ue=Y.distanceTo(se),xe=J.projectionMatrix.elements,qe=me.projectionMatrix.elements,wt=xe[14]/(xe[10]-1),We=xe[14]/(xe[10]+1),Ze=(xe[9]+1)/xe[5],nt=(xe[9]-1)/xe[5],Fe=(xe[8]-1)/xe[0],St=(qe[8]+1)/qe[0],D=wt*Fe,Mt=wt*St,Ke=Ue/(-Fe+St),at=Ke*-Fe;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(at),$.translateZ(Ke),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),xe[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Se=wt+Ke,R=We+Ke,v=D-at,U=Mt+(Ue-at),j=Ze*We/R*Se,Z=nt*We/R*Se;$.projectionMatrix.makePerspective(v,U,j,Z,Se,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ie($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let J=$.near,me=$.far;d.texture!==null&&(d.depthNear>0&&(J=d.depthNear),d.depthFar>0&&(me=d.depthFar)),F.near=T.near=x.near=J,F.far=T.far=x.far=me,(N!==F.near||X!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),N=F.near,X=F.far),F.layers.mask=$.layers.mask|6,x.layers.mask=F.layers.mask&3,T.layers.mask=F.layers.mask&5;const Ue=$.parent,xe=F.cameras;ie(F,Ue);for(let qe=0;qe<xe.length;qe++)ie(xe[qe],Ue);xe.length===2?ne(F,x,T):F.projectionMatrix.copy(x.projectionMatrix),be($,F,Ue)};function be($,J,me){me===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(me.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Fl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(F)},this.getCameraTexture=function($){return p[$]};let De=null;function Be($,J){if(u=J.getViewerPose(l||a),g=J,u!==null){const me=u.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Ue=!1;me.length!==F.cameras.length&&(F.cameras.length=0,Ue=!0);for(let We=0;We<me.length;We++){const Ze=me[We];let nt=null;if(m!==null)nt=m.getViewport(Ze);else{const St=f.getViewSubImage(h,Ze);nt=St.viewport,We===0&&(e.setRenderTargetTextures(M,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(M))}let Fe=P[We];Fe===void 0&&(Fe=new yn,Fe.layers.enable(We),Fe.viewport=new _t,P[We]=Fe),Fe.matrix.fromArray(Ze.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ze.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(nt.x,nt.y,nt.width,nt.height),We===0&&(F.matrix.copy(Fe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ue===!0&&F.cameras.push(Fe)}const xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const We=f.getDepthInformation(me[0]);We&&We.isValid&&We.texture&&d.init(We,i.renderState)}if(xe&&xe.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let We=0;We<me.length;We++){const Ze=me[We].camera;if(Ze){let nt=p[Ze];nt||(nt=new Ih,p[Ze]=nt);const Fe=f.getCameraImage(Ze);nt.sourceTexture=Fe}}}}for(let me=0;me<E.length;me++){const Ue=A[me],xe=E[me];Ue!==null&&xe!==void 0&&xe.update(Ue,J,l||a)}De&&De($,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const ke=new Fh;ke.setAnimationLoop(Be),this.setAnimationLoop=function($){De=$},this.dispose=function(){}}}const Oi=new Tn,NS=new ut;function FS(r,e){function t(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function n(d,p){p.color.getRGB(d.fogColor.value,Ph(r)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function i(d,p,S,y,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(d,p):p.isMeshToonMaterial?(s(d,p),f(d,p)):p.isMeshPhongMaterial?(s(d,p),u(d,p)):p.isMeshStandardMaterial?(s(d,p),h(d,p),p.isMeshPhysicalMaterial&&m(d,p,M)):p.isMeshMatcapMaterial?(s(d,p),g(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),_(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?c(d,p,S,y):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,t(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Kt&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,t(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Kt&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,t(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,t(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const S=e.get(p),y=S.envMap,M=S.envMapRotation;y&&(d.envMap.value=y,Oi.copy(M),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),d.envMapRotation.value.setFromMatrix4(NS.makeRotationFromEuler(Oi)),d.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function c(d,p,S,y){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*S,d.scale.value=y*.5,p.map&&(d.map.value=p.map,t(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function f(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,S){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=S.texture,d.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){const S=e.get(p).light;d.referencePosition.value.setFromMatrixPosition(S.matrixWorld),d.nearDistance.value=S.shadow.camera.near,d.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function OS(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,y){const M=y.program;n.uniformBlockBinding(S,M)}function l(S,y){let M=i[S.id];M===void 0&&(g(S),M=u(S),i[S.id]=M,S.addEventListener("dispose",d));const E=y.program;n.updateUBOMapping(S,E);const A=e.render.frame;s[S.id]!==A&&(h(S),s[S.id]=A)}function u(S){const y=f();S.__bindingPointIndex=y;const M=r.createBuffer(),E=S.__size,A=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,E,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,M),M}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const y=i[S.id],M=S.uniforms,E=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let A=0,w=M.length;A<w;A++){const C=Array.isArray(M[A])?M[A]:[M[A]];for(let x=0,T=C.length;x<T;x++){const P=C[x];if(m(P,A,x,E)===!0){const F=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let W=0;W<N.length;W++){const V=N[W],O=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,F+X,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,X),X+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(S,y,M,E){const A=S.value,w=y+"_"+M;if(E[w]===void 0)return typeof A=="number"||typeof A=="boolean"?E[w]=A:E[w]=A.clone(),!0;{const C=E[w];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return E[w]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(S){const y=S.uniforms;let M=0;const E=16;for(let w=0,C=y.length;w<C;w++){const x=Array.isArray(y[w])?y[w]:[y[w]];for(let T=0,P=x.length;T<P;T++){const F=x[T],N=Array.isArray(F.value)?F.value:[F.value];for(let X=0,W=N.length;X<W;X++){const V=N[X],O=_(V),Y=M%E,se=Y%O.boundary,ne=Y+se;M+=se,ne!==0&&E-ne<O.storage&&(M+=E-ne),F.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=O.storage}}}const A=M%E;return A>0&&(M+=E-A),S.__size=M,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pe("WebGLRenderer: Unsupported uniform value type.",S),y}function d(S){const y=S.target;y.removeEventListener("dispose",d);const M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:c,update:l,dispose:p}}const BS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let In=null;function zS(){return In===null&&(In=new w_(BS,16,16,Cr,li),In.name="DFG_LUT",In.minFilter=zt,In.magFilter=zt,In.wrapS=si,In.wrapT=si,In.generateMipmaps=!1,In.needsUpdate=!0),In}class VS{constructor(e={}){const{canvas:t=e_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:m=cn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=m,d=new Set([pc,dc,hc]),p=new Set([cn,Xn,us,fs,uc,fc]),S=new Uint32Array(4),y=new Int32Array(4);let M=null,E=null;const A=[],w=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let T=!1;this._outputColorSpace=on;let P=0,F=0,N=null,X=-1,W=null;const V=new _t,O=new _t;let Y=null;const se=new Ve(0);let ne=0,ie=t.width,be=t.height,De=1,Be=null,ke=null;const $=new _t(0,0,ie,be),J=new _t(0,0,ie,be);let me=!1;const Ue=new Sc;let xe=!1,qe=!1;const wt=new ut,We=new z,Ze=new _t,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function St(){return N===null?De:1}let D=n;function Mt(b,I){return t.getContext(b,I)}try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ac}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",Je,!1),D===null){const I="webgl2";if(D=Mt(I,b),D===null)throw Mt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw je("WebGLRenderer: "+b.message),b}let Ke,at,Se,R,v,U,j,Z,q,ye,ae,ve,Ce,ee,le,ge,Me,oe,Oe,L,he,te,de,Q;function K(){Ke=new zx(D),Ke.init(),te=new PS(D,Ke),at=new Px(D,Ke,e,te),Se=new RS(D,Ke),at.reversedDepthBuffer&&h&&Se.buffers.depth.setReversed(!0),R=new Gx(D),v=new dS,U=new CS(D,Ke,Se,v,at,te,R),j=new Lx(x),Z=new Bx(x),q=new q_(D),de=new Rx(D,q),ye=new Vx(D,q,R,de),ae=new Wx(D,ye,q,R),Oe=new Hx(D,at,U),ge=new Dx(v),ve=new hS(x,j,Z,Ke,at,de,ge),Ce=new FS(x,v),ee=new mS,le=new MS(Ke),oe=new wx(x,j,Z,Se,ae,g,c),Me=new AS(x,ae,at),Q=new OS(D,R,at,Se),L=new Cx(D,Ke,R),he=new kx(D,Ke,R),R.programs=ve.programs,x.capabilities=at,x.extensions=Ke,x.properties=v,x.renderLists=ee,x.shadowMap=Me,x.state=Se,x.info=R}K(),_!==cn&&(C=new qx(_,t.width,t.height,i,s));const re=new IS(x,D);this.xr=re,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=Ke.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ke.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(b){b!==void 0&&(De=b,this.setSize(ie,be,!1))},this.getSize=function(b){return b.set(ie,be)},this.setSize=function(b,I,H=!0){if(re.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=b,be=I,t.width=Math.floor(b*De),t.height=Math.floor(I*De),H===!0&&(t.style.width=b+"px",t.style.height=I+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(ie*De,be*De).floor()},this.setDrawingBufferSize=function(b,I,H){ie=b,be=I,De=H,t.width=Math.floor(b*H),t.height=Math.floor(I*H),this.setViewport(0,0,b,I)},this.setEffects=function(b){if(_===cn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let I=0;I<b.length;I++)if(b[I].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(V)},this.getViewport=function(b){return b.copy($)},this.setViewport=function(b,I,H,k){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,I,H,k),Se.viewport(V.copy($).multiplyScalar(De).round())},this.getScissor=function(b){return b.copy(J)},this.setScissor=function(b,I,H,k){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,I,H,k),Se.scissor(O.copy(J).multiplyScalar(De).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(b){Se.setScissorTest(me=b)},this.setOpaqueSort=function(b){Be=b},this.setTransparentSort=function(b){ke=b},this.getClearColor=function(b){return b.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(b=!0,I=!0,H=!0){let k=0;if(b){let B=!1;if(N!==null){const ce=N.texture.format;B=d.has(ce)}if(B){const ce=N.texture.type,pe=p.has(ce),fe=oe.getClearColor(),_e=oe.getClearAlpha(),Ee=fe.r,we=fe.g,Te=fe.b;pe?(S[0]=Ee,S[1]=we,S[2]=Te,S[3]=_e,D.clearBufferuiv(D.COLOR,0,S)):(y[0]=Ee,y[1]=we,y[2]=Te,y[3]=_e,D.clearBufferiv(D.COLOR,0,y))}else k|=D.COLOR_BUFFER_BIT}I&&(k|=D.DEPTH_BUFFER_BIT),H&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Je,!1),oe.dispose(),ee.dispose(),le.dispose(),v.dispose(),j.dispose(),Z.dispose(),ae.dispose(),de.dispose(),Q.dispose(),ve.dispose(),re.dispose(),re.removeEventListener("sessionstart",Gc),re.removeEventListener("sessionend",Hc),Pi.stop()};function Le(b){b.preventDefault(),vu("WebGLRenderer: Context Lost."),T=!0}function ot(){vu("WebGLRenderer: Context Restored."),T=!1;const b=R.autoReset,I=Me.enabled,H=Me.autoUpdate,k=Me.needsUpdate,B=Me.type;K(),R.autoReset=b,Me.enabled=I,Me.autoUpdate=H,Me.needsUpdate=k,Me.type=B}function Je(b){je("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Un(b){const I=b.target;I.removeEventListener("dispose",Un),$n(I)}function $n(b){Vd(b),v.remove(b)}function Vd(b){const I=v.get(b).programs;I!==void 0&&(I.forEach(function(H){ve.releaseProgram(H)}),b.isShaderMaterial&&ve.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,H,k,B,ce){I===null&&(I=nt);const pe=B.isMesh&&B.matrixWorld.determinant()<0,fe=Gd(b,I,H,k,B);Se.setMaterial(k,pe);let _e=H.index,Ee=1;if(k.wireframe===!0){if(_e=ye.getWireframeAttribute(H),_e===void 0)return;Ee=2}const we=H.drawRange,Te=H.attributes.position;let ze=we.start*Ee,tt=(we.start+we.count)*Ee;ce!==null&&(ze=Math.max(ze,ce.start*Ee),tt=Math.min(tt,(ce.start+ce.count)*Ee)),_e!==null?(ze=Math.max(ze,0),tt=Math.min(tt,_e.count)):Te!=null&&(ze=Math.max(ze,0),tt=Math.min(tt,Te.count));const pt=tt-ze;if(pt<0||pt===1/0)return;de.setup(B,k,fe,H,_e);let mt,it=L;if(_e!==null&&(mt=q.get(_e),it=he,it.setIndex(mt)),B.isMesh)k.wireframe===!0?(Se.setLineWidth(k.wireframeLinewidth*St()),it.setMode(D.LINES)):it.setMode(D.TRIANGLES);else if(B.isLine){let Ae=k.linewidth;Ae===void 0&&(Ae=1),Se.setLineWidth(Ae*St()),B.isLineSegments?it.setMode(D.LINES):B.isLineLoop?it.setMode(D.LINE_LOOP):it.setMode(D.LINE_STRIP)}else B.isPoints?it.setMode(D.POINTS):B.isSprite&&it.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)hs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))it.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ae=B._multiDrawStarts,Qe=B._multiDrawCounts,Ye=B._multiDrawCount,nn=_e?q.get(_e).bytesPerElement:1,nr=v.get(k).currentProgram.getUniforms();for(let rn=0;rn<Ye;rn++)nr.setValue(D,"_gl_DrawID",rn),it.render(Ae[rn]/nn,Qe[rn])}else if(B.isInstancedMesh)it.renderInstances(ze,pt,B.count);else if(H.isInstancedBufferGeometry){const Ae=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Qe=Math.min(H.instanceCount,Ae);it.renderInstances(ze,pt,Qe)}else it.render(ze,pt)};function kc(b,I,H){b.transparent===!0&&b.side===ri&&b.forceSinglePass===!1?(b.side=Kt,b.needsUpdate=!0,Ls(b,I,H),b.side=Ti,b.needsUpdate=!0,Ls(b,I,H),b.side=ri):Ls(b,I,H)}this.compile=function(b,I,H=null){H===null&&(H=b),E=le.get(H),E.init(I),w.push(E),H.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),b!==H&&b.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),E.setupLights();const k=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ce=B.material;if(ce)if(Array.isArray(ce))for(let pe=0;pe<ce.length;pe++){const fe=ce[pe];kc(fe,H,B),k.add(fe)}else kc(ce,H,B),k.add(ce)}),E=w.pop(),k},this.compileAsync=function(b,I,H=null){const k=this.compile(b,I,H);return new Promise(B=>{function ce(){if(k.forEach(function(pe){v.get(pe).currentProgram.isReady()&&k.delete(pe)}),k.size===0){B(b);return}setTimeout(ce,10)}Ke.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Xa=null;function kd(b){Xa&&Xa(b)}function Gc(){Pi.stop()}function Hc(){Pi.start()}const Pi=new Fh;Pi.setAnimationLoop(kd),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(b){Xa=b,re.setAnimationLoop(b),b===null?Pi.stop():Pi.start()},re.addEventListener("sessionstart",Gc),re.addEventListener("sessionend",Hc),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const H=re.enabled===!0&&re.isPresenting===!0,k=C!==null&&(N===null||H)&&C.begin(x,N);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(I),I=re.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,I,N),E=le.get(b,w.length),E.init(I),w.push(E),wt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ue.setFromProjectionMatrix(wt,Vn,I.reversedDepth),qe=this.localClippingEnabled,xe=ge.init(this.clippingPlanes,qe),M=ee.get(b,A.length),M.init(),A.push(M),re.enabled===!0&&re.isPresenting===!0){const pe=x.xr.getDepthSensingMesh();pe!==null&&qa(pe,I,-1/0,x.sortObjects)}qa(b,I,0,x.sortObjects),M.finish(),x.sortObjects===!0&&M.sort(Be,ke),Fe=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Fe&&oe.addToRenderList(M,b),this.info.render.frame++,xe===!0&&ge.beginShadows();const B=E.state.shadowsArray;if(Me.render(B,b,I),xe===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&C.hasRenderPass())===!1){const pe=M.opaque,fe=M.transmissive;if(E.setupLights(),I.isArrayCamera){const _e=I.cameras;if(fe.length>0)for(let Ee=0,we=_e.length;Ee<we;Ee++){const Te=_e[Ee];Xc(pe,fe,b,Te)}Fe&&oe.render(b);for(let Ee=0,we=_e.length;Ee<we;Ee++){const Te=_e[Ee];Wc(M,b,Te,Te.viewport)}}else fe.length>0&&Xc(pe,fe,b,I),Fe&&oe.render(b),Wc(M,b,I)}N!==null&&F===0&&(U.updateMultisampleRenderTarget(N),U.updateRenderTargetMipmap(N)),k&&C.end(x),b.isScene===!0&&b.onAfterRender(x,b,I),de.resetDefaultState(),X=-1,W=null,w.pop(),w.length>0?(E=w[w.length-1],xe===!0&&ge.setGlobalState(x.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?M=A[A.length-1]:M=null};function qa(b,I,H,k){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ue.intersectsSprite(b)){k&&Ze.setFromMatrixPosition(b.matrixWorld).applyMatrix4(wt);const pe=ae.update(b),fe=b.material;fe.visible&&M.push(b,pe,fe,H,Ze.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ue.intersectsObject(b))){const pe=ae.update(b),fe=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ze.copy(b.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ze.copy(pe.boundingSphere.center)),Ze.applyMatrix4(b.matrixWorld).applyMatrix4(wt)),Array.isArray(fe)){const _e=pe.groups;for(let Ee=0,we=_e.length;Ee<we;Ee++){const Te=_e[Ee],ze=fe[Te.materialIndex];ze&&ze.visible&&M.push(b,pe,ze,H,Ze.z,Te)}}else fe.visible&&M.push(b,pe,fe,H,Ze.z,null)}}const ce=b.children;for(let pe=0,fe=ce.length;pe<fe;pe++)qa(ce[pe],I,H,k)}function Wc(b,I,H,k){const{opaque:B,transmissive:ce,transparent:pe}=b;E.setupLightsView(H),xe===!0&&ge.setGlobalState(x.clippingPlanes,H),k&&Se.viewport(V.copy(k)),B.length>0&&Ds(B,I,H),ce.length>0&&Ds(ce,I,H),pe.length>0&&Ds(pe,I,H),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Xc(b,I,H,k){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){const ze=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new Hn(1,1,{generateMipmaps:!0,type:ze?li:cn,minFilter:Xi,samples:at.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const ce=E.state.transmissionRenderTarget[k.id],pe=k.viewport||V;ce.setSize(pe.z*x.transmissionResolutionScale,pe.w*x.transmissionResolutionScale);const fe=x.getRenderTarget(),_e=x.getActiveCubeFace(),Ee=x.getActiveMipmapLevel();x.setRenderTarget(ce),x.getClearColor(se),ne=x.getClearAlpha(),ne<1&&x.setClearColor(16777215,.5),x.clear(),Fe&&oe.render(H);const we=x.toneMapping;x.toneMapping=Gn;const Te=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),xe===!0&&ge.setGlobalState(x.clippingPlanes,k),Ds(b,H,k),U.updateMultisampleRenderTarget(ce),U.updateRenderTargetMipmap(ce),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let tt=0,pt=I.length;tt<pt;tt++){const mt=I[tt],{object:it,geometry:Ae,material:Qe,group:Ye}=mt;if(Qe.side===ri&&it.layers.test(k.layers)){const nn=Qe.side;Qe.side=Kt,Qe.needsUpdate=!0,qc(it,H,k,Ae,Qe,Ye),Qe.side=nn,Qe.needsUpdate=!0,ze=!0}}ze===!0&&(U.updateMultisampleRenderTarget(ce),U.updateRenderTargetMipmap(ce))}x.setRenderTarget(fe,_e,Ee),x.setClearColor(se,ne),Te!==void 0&&(k.viewport=Te),x.toneMapping=we}function Ds(b,I,H){const k=I.isScene===!0?I.overrideMaterial:null;for(let B=0,ce=b.length;B<ce;B++){const pe=b[B],{object:fe,geometry:_e,group:Ee}=pe;let we=pe.material;we.allowOverride===!0&&k!==null&&(we=k),fe.layers.test(H.layers)&&qc(fe,I,H,_e,we,Ee)}}function qc(b,I,H,k,B,ce){b.onBeforeRender(x,I,H,k,B,ce),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(x,I,H,k,b,ce),B.transparent===!0&&B.side===ri&&B.forceSinglePass===!1?(B.side=Kt,B.needsUpdate=!0,x.renderBufferDirect(H,I,k,B,b,ce),B.side=Ti,B.needsUpdate=!0,x.renderBufferDirect(H,I,k,B,b,ce),B.side=ri):x.renderBufferDirect(H,I,k,B,b,ce),b.onAfterRender(x,I,H,k,B,ce)}function Ls(b,I,H){I.isScene!==!0&&(I=nt);const k=v.get(b),B=E.state.lights,ce=E.state.shadowsArray,pe=B.state.version,fe=ve.getParameters(b,B.state,ce,I,H),_e=ve.getProgramCacheKey(fe);let Ee=k.programs;k.environment=b.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(b.isMeshStandardMaterial?Z:j).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,Ee===void 0&&(b.addEventListener("dispose",Un),Ee=new Map,k.programs=Ee);let we=Ee.get(_e);if(we!==void 0){if(k.currentProgram===we&&k.lightsStateVersion===pe)return jc(b,fe),we}else fe.uniforms=ve.getUniforms(b),b.onBeforeCompile(fe,x),we=ve.acquireProgram(fe,_e),Ee.set(_e,we),k.uniforms=fe.uniforms;const Te=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Te.clippingPlanes=ge.uniform),jc(b,fe),k.needsLights=Wd(b),k.lightsStateVersion=pe,k.needsLights&&(Te.ambientLightColor.value=B.state.ambient,Te.lightProbe.value=B.state.probe,Te.directionalLights.value=B.state.directional,Te.directionalLightShadows.value=B.state.directionalShadow,Te.spotLights.value=B.state.spot,Te.spotLightShadows.value=B.state.spotShadow,Te.rectAreaLights.value=B.state.rectArea,Te.ltc_1.value=B.state.rectAreaLTC1,Te.ltc_2.value=B.state.rectAreaLTC2,Te.pointLights.value=B.state.point,Te.pointLightShadows.value=B.state.pointShadow,Te.hemisphereLights.value=B.state.hemi,Te.directionalShadowMap.value=B.state.directionalShadowMap,Te.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Te.spotShadowMap.value=B.state.spotShadowMap,Te.spotLightMatrix.value=B.state.spotLightMatrix,Te.spotLightMap.value=B.state.spotLightMap,Te.pointShadowMap.value=B.state.pointShadowMap,Te.pointShadowMatrix.value=B.state.pointShadowMatrix),k.currentProgram=we,k.uniformsList=null,we}function Yc(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=_a.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function jc(b,I){const H=v.get(b);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function Gd(b,I,H,k,B){I.isScene!==!0&&(I=nt),U.resetTextureUnits();const ce=I.fog,pe=k.isMeshStandardMaterial?I.environment:null,fe=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Pr,_e=(k.isMeshStandardMaterial?Z:j).get(k.envMap||pe),Ee=k.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,we=!!H.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Te=!!H.morphAttributes.position,ze=!!H.morphAttributes.normal,tt=!!H.morphAttributes.color;let pt=Gn;k.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(pt=x.toneMapping);const mt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,it=mt!==void 0?mt.length:0,Ae=v.get(k),Qe=E.state.lights;if(xe===!0&&(qe===!0||b!==W)){const kt=b===W&&k.id===X;ge.setState(k,b,kt)}let Ye=!1;k.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Qe.state.version||Ae.outputColorSpace!==fe||B.isBatchedMesh&&Ae.batching===!1||!B.isBatchedMesh&&Ae.batching===!0||B.isBatchedMesh&&Ae.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ae.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ae.instancing===!1||!B.isInstancedMesh&&Ae.instancing===!0||B.isSkinnedMesh&&Ae.skinning===!1||!B.isSkinnedMesh&&Ae.skinning===!0||B.isInstancedMesh&&Ae.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ae.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ae.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ae.instancingMorph===!1&&B.morphTexture!==null||Ae.envMap!==_e||k.fog===!0&&Ae.fog!==ce||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ge.numPlanes||Ae.numIntersection!==ge.numIntersection)||Ae.vertexAlphas!==Ee||Ae.vertexTangents!==we||Ae.morphTargets!==Te||Ae.morphNormals!==ze||Ae.morphColors!==tt||Ae.toneMapping!==pt||Ae.morphTargetsCount!==it)&&(Ye=!0):(Ye=!0,Ae.__version=k.version);let nn=Ae.currentProgram;Ye===!0&&(nn=Ls(k,I,B));let nr=!1,rn=!1,Gr=!1;const lt=nn.getUniforms(),Xt=Ae.uniforms;if(Se.useProgram(nn.program)&&(nr=!0,rn=!0,Gr=!0),k.id!==X&&(X=k.id,rn=!0),nr||W!==b){Se.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),lt.setValue(D,"projectionMatrix",b.projectionMatrix),lt.setValue(D,"viewMatrix",b.matrixWorldInverse);const qt=lt.map.cameraPosition;qt!==void 0&&qt.setValue(D,We.setFromMatrixPosition(b.matrixWorld)),at.logarithmicDepthBuffer&&lt.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&lt.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),W!==b&&(W=b,rn=!0,Gr=!0)}if(Ae.needsLights&&(Qe.state.directionalShadowMap.length>0&&lt.setValue(D,"directionalShadowMap",Qe.state.directionalShadowMap,U),Qe.state.spotShadowMap.length>0&&lt.setValue(D,"spotShadowMap",Qe.state.spotShadowMap,U),Qe.state.pointShadowMap.length>0&&lt.setValue(D,"pointShadowMap",Qe.state.pointShadowMap,U)),B.isSkinnedMesh){lt.setOptional(D,B,"bindMatrix"),lt.setOptional(D,B,"bindMatrixInverse");const kt=B.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),lt.setValue(D,"boneTexture",kt.boneTexture,U))}B.isBatchedMesh&&(lt.setOptional(D,B,"batchingTexture"),lt.setValue(D,"batchingTexture",B._matricesTexture,U),lt.setOptional(D,B,"batchingIdTexture"),lt.setValue(D,"batchingIdTexture",B._indirectTexture,U),lt.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&lt.setValue(D,"batchingColorTexture",B._colorsTexture,U));const gn=H.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&Oe.update(B,H,nn),(rn||Ae.receiveShadow!==B.receiveShadow)&&(Ae.receiveShadow=B.receiveShadow,lt.setValue(D,"receiveShadow",B.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Xt.envMap.value=_e,Xt.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(Xt.envMapIntensity.value=I.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=zS()),rn&&(lt.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ae.needsLights&&Hd(Xt,Gr),ce&&k.fog===!0&&Ce.refreshFogUniforms(Xt,ce),Ce.refreshMaterialUniforms(Xt,k,De,be,E.state.transmissionRenderTarget[b.id]),_a.upload(D,Yc(Ae),Xt,U)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(_a.upload(D,Yc(Ae),Xt,U),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&lt.setValue(D,"center",B.center),lt.setValue(D,"modelViewMatrix",B.modelViewMatrix),lt.setValue(D,"normalMatrix",B.normalMatrix),lt.setValue(D,"modelMatrix",B.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const kt=k.uniformsGroups;for(let qt=0,Ya=kt.length;qt<Ya;qt++){const Di=kt[qt];Q.update(Di,nn),Q.bind(Di,nn)}}return nn}function Hd(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function Wd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(b,I,H){const k=v.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),v.get(b.texture).__webglTexture=I,v.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:H,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,I){const H=v.get(b);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0};const Xd=D.createFramebuffer();this.setRenderTarget=function(b,I=0,H=0){N=b,P=I,F=H;let k=null,B=!1,ce=!1;if(b){const fe=v.get(b);if(fe.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(D.FRAMEBUFFER,fe.__webglFramebuffer),V.copy(b.viewport),O.copy(b.scissor),Y=b.scissorTest,Se.viewport(V),Se.scissor(O),Se.setScissorTest(Y),X=-1;return}else if(fe.__webglFramebuffer===void 0)U.setupRenderTarget(b);else if(fe.__hasExternalTextures)U.rebindTextures(b,v.get(b.texture).__webglTexture,v.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const we=b.depthTexture;if(fe.__boundDepthTexture!==we){if(we!==null&&v.has(we)&&(b.width!==we.image.width||b.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(b)}}const _e=b.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(ce=!0);const Ee=v.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ee[I])?k=Ee[I][H]:k=Ee[I],B=!0):b.samples>0&&U.useMultisampledRTT(b)===!1?k=v.get(b).__webglMultisampledFramebuffer:Array.isArray(Ee)?k=Ee[H]:k=Ee,V.copy(b.viewport),O.copy(b.scissor),Y=b.scissorTest}else V.copy($).multiplyScalar(De).floor(),O.copy(J).multiplyScalar(De).floor(),Y=me;if(H!==0&&(k=Xd),Se.bindFramebuffer(D.FRAMEBUFFER,k)&&Se.drawBuffers(b,k),Se.viewport(V),Se.scissor(O),Se.setScissorTest(Y),B){const fe=v.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,fe.__webglTexture,H)}else if(ce){const fe=I;for(let _e=0;_e<b.textures.length;_e++){const Ee=v.get(b.textures[_e]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+_e,Ee.__webglTexture,H,fe)}}else if(b!==null&&H!==0){const fe=v.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,fe.__webglTexture,H)}X=-1},this.readRenderTargetPixels=function(b,I,H,k,B,ce,pe,fe=0){if(!(b&&b.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=v.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e){Se.bindFramebuffer(D.FRAMEBUFFER,_e);try{const Ee=b.textures[fe],we=Ee.format,Te=Ee.type;if(!at.textureFormatReadable(we)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Te)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-k&&H>=0&&H<=b.height-B&&(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+fe),D.readPixels(I,H,k,B,te.convert(we),te.convert(Te),ce))}finally{const Ee=N!==null?v.get(N).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(b,I,H,k,B,ce,pe,fe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=v.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e)if(I>=0&&I<=b.width-k&&H>=0&&H<=b.height-B){Se.bindFramebuffer(D.FRAMEBUFFER,_e);const Ee=b.textures[fe],we=Ee.format,Te=Ee.type;if(!at.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ze),D.bufferData(D.PIXEL_PACK_BUFFER,ce.byteLength,D.STREAM_READ),b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+fe),D.readPixels(I,H,k,B,te.convert(we),te.convert(Te),0);const tt=N!==null?v.get(N).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,tt);const pt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await t_(D,pt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ze),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ce),D.deleteBuffer(ze),D.deleteSync(pt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,I=null,H=0){const k=Math.pow(2,-H),B=Math.floor(b.image.width*k),ce=Math.floor(b.image.height*k),pe=I!==null?I.x:0,fe=I!==null?I.y:0;U.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,pe,fe,B,ce),Se.unbindTexture()};const qd=D.createFramebuffer(),Yd=D.createFramebuffer();this.copyTextureToTexture=function(b,I,H=null,k=null,B=0,ce=null){ce===null&&(B!==0?(hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=B,B=0):ce=0);let pe,fe,_e,Ee,we,Te,ze,tt,pt;const mt=b.isCompressedTexture?b.mipmaps[ce]:b.image;if(H!==null)pe=H.max.x-H.min.x,fe=H.max.y-H.min.y,_e=H.isBox3?H.max.z-H.min.z:1,Ee=H.min.x,we=H.min.y,Te=H.isBox3?H.min.z:0;else{const gn=Math.pow(2,-B);pe=Math.floor(mt.width*gn),fe=Math.floor(mt.height*gn),b.isDataArrayTexture?_e=mt.depth:b.isData3DTexture?_e=Math.floor(mt.depth*gn):_e=1,Ee=0,we=0,Te=0}k!==null?(ze=k.x,tt=k.y,pt=k.z):(ze=0,tt=0,pt=0);const it=te.convert(I.format),Ae=te.convert(I.type);let Qe;I.isData3DTexture?(U.setTexture3D(I,0),Qe=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(U.setTexture2DArray(I,0),Qe=D.TEXTURE_2D_ARRAY):(U.setTexture2D(I,0),Qe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const Ye=D.getParameter(D.UNPACK_ROW_LENGTH),nn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),nr=D.getParameter(D.UNPACK_SKIP_PIXELS),rn=D.getParameter(D.UNPACK_SKIP_ROWS),Gr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,mt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ee),D.pixelStorei(D.UNPACK_SKIP_ROWS,we),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Te);const lt=b.isDataArrayTexture||b.isData3DTexture,Xt=I.isDataArrayTexture||I.isData3DTexture;if(b.isDepthTexture){const gn=v.get(b),kt=v.get(I),qt=v.get(gn.__renderTarget),Ya=v.get(kt.__renderTarget);Se.bindFramebuffer(D.READ_FRAMEBUFFER,qt.__webglFramebuffer),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ya.__webglFramebuffer);for(let Di=0;Di<_e;Di++)lt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,v.get(b).__webglTexture,B,Te+Di),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,v.get(I).__webglTexture,ce,pt+Di)),D.blitFramebuffer(Ee,we,pe,fe,ze,tt,pe,fe,D.DEPTH_BUFFER_BIT,D.NEAREST);Se.bindFramebuffer(D.READ_FRAMEBUFFER,null),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||b.isRenderTargetTexture||v.has(b)){const gn=v.get(b),kt=v.get(I);Se.bindFramebuffer(D.READ_FRAMEBUFFER,qd),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,Yd);for(let qt=0;qt<_e;qt++)lt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,gn.__webglTexture,B,Te+qt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,gn.__webglTexture,B),Xt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,kt.__webglTexture,ce,pt+qt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,kt.__webglTexture,ce),B!==0?D.blitFramebuffer(Ee,we,pe,fe,ze,tt,pe,fe,D.COLOR_BUFFER_BIT,D.NEAREST):Xt?D.copyTexSubImage3D(Qe,ce,ze,tt,pt+qt,Ee,we,pe,fe):D.copyTexSubImage2D(Qe,ce,ze,tt,Ee,we,pe,fe);Se.bindFramebuffer(D.READ_FRAMEBUFFER,null),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Xt?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Qe,ce,ze,tt,pt,pe,fe,_e,it,Ae,mt.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(Qe,ce,ze,tt,pt,pe,fe,_e,it,mt.data):D.texSubImage3D(Qe,ce,ze,tt,pt,pe,fe,_e,it,Ae,mt):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ce,ze,tt,pe,fe,it,Ae,mt.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ce,ze,tt,mt.width,mt.height,it,mt.data):D.texSubImage2D(D.TEXTURE_2D,ce,ze,tt,pe,fe,it,Ae,mt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ye),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,nr),D.pixelStorei(D.UNPACK_SKIP_ROWS,rn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Gr),ce===0&&I.generateMipmaps&&D.generateMipmap(Qe),Se.unbindTexture()},this.initRenderTarget=function(b){v.get(b).__webglFramebuffer===void 0&&U.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?U.setTextureCube(b,0):b.isData3DTexture?U.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?U.setTexture2DArray(b,0):U.setTexture2D(b,0),Se.unbindTexture()},this.resetState=function(){P=0,F=0,N=null,Se.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}const kS=/^[og]\s*(.+)?/,GS=/^mtllib /,HS=/^usemtl /,WS=/^usemap /,xf=/\s+/,vf=new z,Lo=new z,Sf=new z,Mf=new z,Sn=new z,ra=new Ve;function XS(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,s=this.object.geometry.vertices;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,s=this.object.geometry.normals;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,s=this.object.geometry.normals;vf.fromArray(i,e),Lo.fromArray(i,t),Sf.fromArray(i,n),Sn.subVectors(Sf,Lo),Mf.subVectors(vf,Lo),Sn.cross(Mf),Sn.normalize(),s.push(Sn.x,Sn.y,Sn.z),s.push(Sn.x,Sn.y,Sn.z),s.push(Sn.x,Sn.y,Sn.z)},addColor:function(e,t,n){const i=this.colors,s=this.object.geometry.colors;i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,s=this.object.geometry.uvs;s.push(i[e+0],i[e+1]),s.push(i[t+0],i[t+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,s,a,o,c,l){const u=this.vertices.length;let f=this.parseVertexIndex(e,u),h=this.parseVertexIndex(t,u),m=this.parseVertexIndex(n,u);if(this.addVertex(f,h,m),this.addColor(f,h,m),o!==void 0&&o!==""){const g=this.normals.length;f=this.parseNormalIndex(o,g),h=this.parseNormalIndex(c,g),m=this.parseNormalIndex(l,g),this.addNormal(f,h,m)}else this.addFaceNormal(f,h,m);if(i!==void 0&&i!==""){const g=this.uvs.length;f=this.parseUVIndex(i,g),h=this.parseUVIndex(s,g),m=this.parseUVIndex(a,g),this.addUV(f,h,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const s=this.parseVertexIndex(e[n],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let s=0,a=e.length;s<a;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,a=t.length;s<a;s++)this.addUVLine(this.parseUVIndex(t[s],i))}};return r.startObject("",!1),r}class qS extends Mc{constructor(e){super(e),this.materials=null}load(e,t,n,i){const s=this,a=new V_(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new XS;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let o=0,c=n.length;o<c;o++){const l=n[o].trimStart();if(l.length===0)continue;const u=l.charAt(0);if(u!=="#")if(u==="v"){const f=l.split(xf);switch(f[0]){case"v":t.vertices.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),f.length>=7?(ra.setRGB(parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6]),on),t.colors.push(ra.r,ra.g,ra.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3]));break;case"vt":t.uvs.push(parseFloat(f[1]),parseFloat(f[2]));break}}else if(u==="f"){const h=l.slice(1).trim().split(xf),m=[];for(let _=0,d=h.length;_<d;_++){const p=h[_];if(p.length>0){const S=p.split("/");m.push(S)}}const g=m[0];for(let _=1,d=m.length-1;_<d;_++){const p=m[_],S=m[_+1];t.addFace(g[0],p[0],S[0],g[1],p[1],S[1],g[2],p[2],S[2])}}else if(u==="l"){const f=l.substring(1).trim().split(" ");let h=[];const m=[];if(l.indexOf("/")===-1)h=f;else for(let g=0,_=f.length;g<_;g++){const d=f[g].split("/");d[0]!==""&&h.push(d[0]),d[1]!==""&&m.push(d[1])}t.addLineGeometry(h,m)}else if(u==="p"){const h=l.slice(1).trim().split(" ");t.addPointGeometry(h)}else if((i=kS.exec(l))!==null){const f=(" "+i[0].slice(1).trim()).slice(1);t.startObject(f)}else if(HS.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(GS.test(l))t.materialLibraries.push(l.substring(7).trim());else if(WS.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(i=l.split(" "),i.length>1){const h=i[1].trim().toLowerCase();t.object.smooth=h!=="0"&&h!=="off"}else t.object.smooth=!0;const f=t.object.currentMaterial();f&&(f.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const s=new ns;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,c=t.objects.length;o<c;o++){const l=t.objects[o],u=l.geometry,f=l.materials,h=u.type==="Line",m=u.type==="Points";let g=!1;if(u.vertices.length===0)continue;const _=new pn;_.setAttribute("position",new Lt(u.vertices,3)),u.normals.length>0&&_.setAttribute("normal",new Lt(u.normals,3)),u.colors.length>0&&(g=!0,_.setAttribute("color",new Lt(u.colors,3))),u.hasUVIndices===!0&&_.setAttribute("uv",new Lt(u.uvs,2));const d=[];for(let S=0,y=f.length;S<y;S++){const M=f[S],E=M.name+"_"+M.smooth+"_"+g;let A=t.materials[E];if(this.materials!==null){if(A=this.materials.create(M.name),h&&A&&!(A instanceof ma)){const w=new ma;qn.prototype.copy.call(w,A),w.color.copy(A.color),A=w}else if(m&&A&&!(A instanceof is)){const w=new is({size:10,sizeAttenuation:!1});qn.prototype.copy.call(w,A),w.color.copy(A.color),w.map=A.map,A=w}}A===void 0&&(h?A=new ma:m?A=new is({size:1,sizeAttenuation:!1}):A=new I_,A.name=M.name,A.flatShading=!M.smooth,A.vertexColors=g,t.materials[E]=A),d.push(A)}let p;if(d.length>1){for(let S=0,y=f.length;S<y;S++){const M=f[S];_.addGroup(M.groupStart,M.groupCount,S)}h?p=new Vu(_,d):m?p=new bo(_,d):p=new Dn(_,d)}else h?p=new Vu(_,d[0]):m?p=new bo(_,d[0]):p=new Dn(_,d[0]);p.name=l.name,s.add(p)}else if(t.vertices.length>0){const o=new is({size:1,sizeAttenuation:!1}),c=new pn;c.setAttribute("position",new Lt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new Lt(t.colors,3)),o.vertexColors=!0);const l=new bo(c,o);s.add(l)}return s}}function ni(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function kh(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var dn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Lr={duration:.5,overwrite:!1,delay:0},Ec,It,ct,En=1e8,st=1/En,Vl=Math.PI*2,YS=Vl/4,jS=0,Gh=Math.sqrt,$S=Math.cos,KS=Math.sin,Dt=function(e){return typeof e=="string"},gt=function(e){return typeof e=="function"},ui=function(e){return typeof e=="number"},bc=function(e){return typeof e>"u"},jn=function(e){return typeof e=="object"},Zt=function(e){return e!==!1},Tc=function(){return typeof window<"u"},sa=function(e){return gt(e)||Dt(e)},Hh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vt=Array.isArray,ZS=/random\([^)]+\)/g,JS=/,\s*/g,yf=/(?:-?\.?\d|\.)+/gi,Wh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,vr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Uo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Xh=/[+-]=-?[.\d]+/,QS=/[^,'"\[\]\s]+/gi,eM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ht,Fn,kl,Ac,mn={},Aa={},qh,Yh=function(e){return(Aa=Ur(e,mn))&&tn},wc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ps=function(e,t){return!t&&console.warn(e)},jh=function(e,t){return e&&(mn[e]=t)&&Aa&&(Aa[e]=t)||mn},ms=function(){return 0},tM={suppressEvents:!0,isStart:!0,kill:!1},ga={suppressEvents:!0,kill:!1},nM={suppressEvents:!0},Rc={},Ei=[],Gl={},$h,ln={},Io={},Ef=30,xa=[],Cc="",Pc=function(e){var t=e[0],n,i;if(jn(t)||gt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=xa.length;i--&&!xa[i].targetTest(t););n=xa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new vd(e[i],n)))||e.splice(i,1);return e},$i=function(e){return e._gsap||Pc(bn(e))[0]._gsap},Kh=function(e,t,n){return(n=e[t])&&gt(n)?e[t]():bc(n)&&e.getAttribute&&e.getAttribute(t)||n},Jt=function(e,t){return(e=e.split(",")).forEach(t)||e},xt=function(e){return Math.round(e*1e5)/1e5||0},ft=function(e){return Math.round(e*1e7)/1e7||0},Er=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},iM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},wa=function(){var e=Ei.length,t=Ei.slice(0),n,i;for(Gl={},Ei.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Dc=function(e){return!!(e._initted||e._startAt||e.add)},Zh=function(e,t,n,i){Ei.length&&!It&&wa(),e.render(t,n,!!(It&&t<0&&Dc(e))),Ei.length&&!It&&wa()},Jh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(QS).length<2?t:Dt(e)?e.trim():e},Qh=function(e){return e},_n=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},rM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ur=function(e,t){for(var n in t)e[n]=t[n];return e},bf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=jn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ra=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},os=function(e){var t=e.parent||ht,n=e.keyframes?rM(Vt(e.keyframes)):_n;if(Zt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},sM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},ed=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Ga=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ai=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ki=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},aM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Hl=function(e,t,n,i){return e._startAt&&(It?e._startAt.revert(ga):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},oM=function r(e){return!e||e._ts&&r(e.parent)},Tf=function(e){return e._repeat?Ir(e._tTime,e=e.duration()+e._rDelay)*e:0},Ir=function(e,t){var n=Math.floor(e=ft(e/t));return e&&n===e?n-1:n},Ca=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ha=function(e){return e._end=ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||st)||0))},Wa=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ft(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ha(e),n._dirty||Ki(n,e)),e},td=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ca(e.rawTime(),t),(!t._dur||Ps(0,t.totalDuration(),n)-t._tTime>st)&&t.render(n,!0)),Ki(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-st}},Bn=function(e,t,n,i){return t.parent&&Ai(t),t._start=ft((ui(n)?n:n||e!==ht?Mn(e,n,t):e._time)+t._delay),t._end=ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ed(e,t,"_first","_last",e._sort?"_start":0),Wl(t)||(e._recent=t),i||td(e,t),e._ts<0&&Wa(e,e._tTime),e},nd=function(e,t){return(mn.ScrollTrigger||wc("scrollTrigger",t))&&mn.ScrollTrigger.create(t,e)},id=function(e,t,n,i,s){if(Uc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!It&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&$h!==un.frame)return Ei.push(e),e._lazy=[s,i],1},lM=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Wl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},cM=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&lM(e)&&!(!e._initted&&Wl(e))||(e._ts<0||e._dp._ts<0)&&!Wl(e))?0:1,o=e._rDelay,c=0,l,u,f;if(o&&e._repeat&&(c=Ps(0,e._tDur,t),u=Ir(c,o),e._yoyo&&u&1&&(a=1-a),u!==Ir(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||It||i||e._zTime===st||!t&&e._zTime){if(!e._initted&&id(e,t,i,n,c))return;for(f=e._zTime,e._zTime=t||(n?st:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&Hl(e,t,n,!0),e._onUpdate&&!n&&fn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&fn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ai(e,1),!n&&!It&&(fn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},uM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Nr=function(e,t,n,i){var s=e._repeat,a=ft(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:ft(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Wa(e,e._tTime=e._tDur*o),e.parent&&Ha(e),n||Ki(e.parent,e),e},Af=function(e){return e instanceof Ht?Ki(e):Nr(e,e._dur)},fM={_start:0,endTime:ms,totalDuration:ms},Mn=function r(e,t,n){var i=e.labels,s=e._recent||fM,a=e.duration()>=En?s.endTime(!1):e._dur,o,c,l;return Dt(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(Vt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+c:a+c)):t==null?a:+t},ls=function(e,t,n){var i=ui(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,c;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=Zt(c.vars.inherit)&&c.parent;a.immediateRender=Zt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Et(t[0],a,t[s+1])},Ci=function(e,t){return e||e===0?t(e):t},Ps=function(e,t,n){return n<e?e:n>t?t:n},Bt=function(e,t){return!Dt(e)||!(t=eM.exec(e))?"":t[1]},hM=function(e,t,n){return Ci(n,function(i){return Ps(e,t,i)})},Xl=[].slice,rd=function(e,t){return e&&jn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&jn(e[0]))&&!e.nodeType&&e!==Fn},dM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Dt(i)&&!t||rd(i,1)?(s=n).push.apply(s,bn(i)):n.push(i)})||n},bn=function(e,t,n){return ct&&!t&&ct.selector?ct.selector(e):Dt(e)&&!n&&(kl||!Fr())?Xl.call((t||Ac).querySelectorAll(e),0):Vt(e)?dM(e,n):rd(e)?Xl.call(e,0):e?[e]:[]},ql=function(e){return e=bn(e)[0]||ps("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return bn(t,n.querySelectorAll?n:n===e?ps("Invalid scope")||Ac.createElement("div"):e)}},sd=function(e){return e.sort(function(){return .5-Math.random()})},ad=function(e){if(gt(e))return e;var t=jn(e)?e:{each:e},n=Zi(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,l=t.axis,u=i,f=i;return Dt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(u=i[0],f=i[1]),function(h,m,g){var _=(g||t).length,d=a[_],p,S,y,M,E,A,w,C,x;if(!d){if(x=t.grid==="auto"?0:(t.grid||[1,En])[1],!x){for(w=-En;w<(w=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(d=a[_]=[],p=c?Math.min(x,_)*u-.5:i%x,S=x===En?0:c?_*f/x-.5:i/x|0,w=0,C=En,A=0;A<_;A++)y=A%x-p,M=S-(A/x|0),d[A]=E=l?Math.abs(l==="y"?M:y):Gh(y*y+M*M),E>w&&(w=E),E<C&&(C=E);i==="random"&&sd(d),d.max=w-C,d.min=C,d.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:l?l==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),d.b=_<0?s-_:s,d.u=Bt(t.amount||t.each)||0,n=n&&_<0?_d(n):n}return _=(d[h]-d.min)/d.max||0,ft(d.b+(n?n(_):_)*d.v)+d.u}},Yl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=ft(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ui(n)?0:Bt(n))}},od=function(e,t){var n=Vt(e),i,s;return!n&&jn(e)&&(i=n=e.radius||En,e.values?(e=bn(e.values),(s=!ui(e[0]))&&(i*=i)):e=Yl(e.increment)),Ci(t,n?gt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=En,u=0,f=e.length,h,m;f--;)s?(h=e[f].x-o,m=e[f].y-c,h=h*h+m*m):h=Math.abs(e[f]-o),h<l&&(l=h,u=f);return u=!i||l<=i?e[u]:a,s||u===a||ui(a)?u:u+Bt(a)}:Yl(e))},ld=function(e,t,n,i){return Ci(Vt(e)?!t:n===!0?!!(n=0):!i,function(){return Vt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},pM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},mM=function(e,t){return function(n){return e(parseFloat(n))+(t||Bt(n))}},_M=function(e,t,n){return ud(e,t,0,1,n)},cd=function(e,t,n){return Ci(n,function(i){return e[~~t(i)]})},gM=function r(e,t,n){var i=t-e;return Vt(e)?cd(e,r(0,e.length),t):Ci(n,function(s){return(i+(s-e)%i)%i+e})},xM=function r(e,t,n){var i=t-e,s=i*2;return Vt(e)?cd(e,r(0,e.length-1),t):Ci(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},_s=function(e){return e.replace(ZS,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(JS);return ld(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},ud=function(e,t,n,i,s){var a=t-e,o=i-n;return Ci(s,function(c){return n+((c-e)/a*o||0)})},vM=function r(e,t,n,i){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var a=Dt(e),o={},c,l,u,f,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Vt(e)&&!Vt(t)){for(u=[],f=e.length,h=f-2,l=1;l<f;l++)u.push(r(e[l-1],e[l]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else i||(e=Ur(Vt(e)?[]:{},e));if(!u){for(c in t)Lc.call(o,e,c,"get",t[c]);s=function(g){return Fc(g,o)||(a?e.p:e)}}}return Ci(n,s)},wf=function(e,t,n){var i=e.labels,s=En,a,o,c;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},fn=function(e,t,n){var i=e.vars,s=i[t],a=ct,o=e._ctx,c,l,u;if(s)return c=i[t+"Params"],l=i.callbackScope||e,n&&Ei.length&&wa(),o&&(ct=o),u=c?s.apply(l,c):s.call(l),ct=a,u},ss=function(e){return Ai(e),e.scrollTrigger&&e.scrollTrigger.kill(!!It),e.progress()<1&&fn(e,"onInterrupt"),e},Sr,fd=[],hd=function(e){if(e)if(e=!e.name&&e.default||e,Tc()||e.headless){var t=e.name,n=gt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ms,render:Fc,add:Lc,kill:NM,modifier:IM,rawVars:0},a={targetTest:0,get:0,getSetter:Nc,aliases:{},register:0};if(Fr(),e!==i){if(ln[t])return;_n(i,_n(Ra(e,s),a)),Ur(i.prototype,Ur(s,Ra(e,a))),ln[i.prop=t]=i,e.targetTest&&(xa.push(i),Rc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}jh(t,i),e.register&&e.register(tn,i,Qt)}else fd.push(e)},rt=255,as={aqua:[0,rt,rt],lime:[0,rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,rt],navy:[0,0,128],white:[rt,rt,rt],olive:[128,128,0],yellow:[rt,rt,0],orange:[rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[rt,0,0],pink:[rt,192,203],cyan:[0,rt,rt],transparent:[rt,rt,rt,0]},No=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*rt+.5|0},dd=function(e,t,n){var i=e?ui(e)?[e>>16,e>>8&rt,e&rt]:0:as.black,s,a,o,c,l,u,f,h,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),as[e])i=as[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&rt,i&rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&rt,e&rt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(yf),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(l+1):u+l-u*l,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=No(c+1/3,s,a),i[1]=No(c,s,a),i[2]=No(c-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Wh),n&&i.length<4&&(i[3]=1),i}else i=e.match(yf)||as.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/rt,a=i[1]/rt,o=i[2]/rt,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?c=l=0:(m=f-h,l=u>.5?m/(2-f-h):m/(f+h),c=f===s?(a-o)/m+(a<o?6:0):f===a?(o-s)/m+2:(s-a)/m+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},pd=function(e){var t=[],n=[],i=-1;return e.split(bi).forEach(function(s){var a=s.match(vr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Rf=function(e,t,n){var i="",s=(e+i).match(bi),a=t?"hsla(":"rgba(",o=0,c,l,u,f;if(!s)return e;if(s=s.map(function(h){return(h=dd(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=pd(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(bi,"1").split(vr),f=l.length-1;o<f;o++)i+=l[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!l)for(l=e.split(bi),f=l.length-1;o<f;o++)i+=l[o]+s[o];return i+l[f]},bi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in as)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),SM=/hsl[a]?\(/,md=function(e){var t=e.join(" "),n;if(bi.lastIndex=0,bi.test(t))return n=SM.test(t),e[1]=Rf(e[1],n),e[0]=Rf(e[0],n,pd(e[1])),!0},gs,un=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],c,l,u,f,h,m,g=function _(d){var p=r()-i,S=d===!0,y,M,E,A;if((p>e||p<0)&&(n+=p-t),i+=p,E=i-n,y=E-a,(y>0||S)&&(A=++f.frame,h=E-f.time*1e3,f.time=E=E/1e3,a+=y+(y>=s?4:s-y),M=1),S||(c=l(_)),M)for(m=0;m<o.length;m++)o[m](E,h,A,d)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(d){return h/(1e3/(d||60))},wake:function(){qh&&(!kl&&Tc()&&(Fn=kl=window,Ac=Fn.document||{},mn.gsap=tn,(Fn.gsapVersions||(Fn.gsapVersions=[])).push(tn.version),Yh(Aa||Fn.GreenSockGlobals||!Fn.gsap&&Fn||{}),fd.forEach(hd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&f.sleep(),l=u||function(d){return setTimeout(d,a-f.time*1e3+1|0)},gs=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),gs=0,l=ms},lagSmoothing:function(d,p){e=d||1/0,t=Math.min(p||33,e)},fps:function(d){s=1e3/(d||240),a=f.time*1e3+s},add:function(d,p,S){var y=p?function(M,E,A,w){d(M,E,A,w),f.remove(y)}:d;return f.remove(d),o[S?"unshift":"push"](y),Fr(),y},remove:function(d,p){~(p=o.indexOf(d))&&o.splice(p,1)&&m>=p&&m--},_listeners:o},f})(),Fr=function(){return!gs&&un.wake()},He={},MM=/^[\d.\-M][\d.\-,\s]/,yM=/["']/g,EM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,c,l;s<a;s++)c=n[s],o=s!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[i]=isNaN(l)?l.replace(yM,"").trim():+l,i=c.substr(o+1).trim();return t},bM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},TM=function(e){var t=(e+"").split("("),n=He[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[EM(t[1])]:bM(e).split(",").map(Jh)):He._CE&&MM.test(e)?He._CE("",e):n},_d=function(e){return function(t){return 1-e(1-t)}},gd=function r(e,t){for(var n=e._first,i;n;)n instanceof Ht?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Zi=function(e,t){return e&&(gt(e)?e:He[e]||TM(e))||t},tr=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Jt(e,function(o){He[o]=mn[o]=s,He[a=o.toLowerCase()]=n;for(var c in s)He[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=He[o+"."+c]=s[c]}),s},xd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Fo=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Vl*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*KS((u-a)*s)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:xd(o);return s=Vl/s,c.config=function(l,u){return r(e,l,u)},c},Oo=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:xd(n);return i.config=function(s){return r(e,s)},i};Jt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;tr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});He.Linear.easeNone=He.none=He.Linear.easeIn;tr("Elastic",Fo("in"),Fo("out"),Fo());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};tr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);tr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});tr("Circ",function(r){return-(Gh(1-r*r)-1)});tr("Sine",function(r){return r===1?1:-$S(r*YS)+1});tr("Back",Oo("in"),Oo("out"),Oo());He.SteppedEase=He.steps=mn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-st;return function(o){return((i*Ps(0,a,o)|0)+s)*n}}};Lr.ease=He["quad.out"];Jt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Cc+=r+","+r+"Params,"});var vd=function(e,t){this.id=jS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Kh,this.set=t?t.getSetter:Nc},xs=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Nr(this,+t.duration,1,1),this.data=t.data,ct&&(this._ctx=ct,ct.data.push(this)),gs||un.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Nr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Fr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Wa(this,n),!s._dp||s.parent||td(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Bn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===st||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Zh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Tf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Tf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ir(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-st?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ca(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-st?0:this._rts,this.totalTime(Ps(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Ha(this),aM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Fr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==st&&(this._tTime-=st)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=ft(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Bn(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Zt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ca(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=nM);var i=It;return It=n,Dc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),It=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Af(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Af(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Mn(this,n),Zt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Zt(i)),this._dur||(this._zTime=-st),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-st:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-st,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-st)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=gt(n)?n:Qh,c=function(){var u=i.then;i.then=null,s&&s(),gt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},e.kill=function(){ss(this)},r})();_n(xs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-st,_prom:0,_ps:!1,_rts:1});var Ht=(function(r){kh(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Zt(n.sortChildren),ht&&Bn(n.parent||ht,ni(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&nd(ni(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return ls(0,arguments,this),this},t.from=function(i,s,a){return ls(1,arguments,this),this},t.fromTo=function(i,s,a,o){return ls(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,os(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Et(i,s,Mn(this,a),1),this},t.call=function(i,s,a){return Bn(this,Et.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,c,l,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new Et(i,a,Mn(this,c)),this},t.staggerFrom=function(i,s,a,o,c,l,u){return a.runBackwards=1,os(a).immediateRender=Zt(a.immediateRender),this.staggerTo(i,s,a,o,c,l,u)},t.staggerFromTo=function(i,s,a,o,c,l,u,f){return o.startAt=a,os(o).immediateRender=Zt(o.immediateRender),this.staggerTo(i,s,o,c,l,u,f)},t.render=function(i,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:ft(i),f=this._zTime<0!=i<0&&(this._initted||!l),h,m,g,_,d,p,S,y,M,E,A,w;if(this!==ht&&u>c&&i>=0&&(u=c),u!==this._tTime||a||f){if(o!==this._time&&l&&(u+=this._time-o,i+=this._time-o),h=u,M=this._start,y=this._ts,p=!y,f&&(l||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,d=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(d*100+i,s,a);if(h=ft(u%d),u===c?(_=this._repeat,h=l):(E=ft(u/d),_=~~E,_&&_===E&&(h=l,_--),h>l&&(h=l)),E=Ir(this._tTime,d),!o&&this._tTime&&E!==_&&this._tTime-E*d-this._dur<=0&&(E=_),A&&_&1&&(h=l-h,w=1),_!==E&&!this._lock){var C=A&&E&1,x=C===(A&&_&1);if(_<E&&(C=!C),o=C?0:u%l?l:u,this._lock=1,this.render(o||(w?0:ft(_*d)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&fn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,E=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,x&&(this._lock=2,o=C?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;gd(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=uM(this,ft(o),ft(h)),S&&(u-=h-(h=S._start))),this._tTime=u,this._time=h,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&l&&!s&&!E&&(fn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||h>=m._start)&&m._ts&&S!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,s,a),h!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=-st);break}}m=g}else{m=this._last;for(var T=i<0?i:h;m;){if(g=m._prev,(m._act||T<=m._end)&&m._ts&&S!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(T-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(T-m._start)*m._ts,s,a||It&&Dc(m)),h!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=T?-st:st);break}}m=g}}if(S&&!s&&(this.pause(),S.render(h>=o?0:-st)._zTime=h>=o?1:-1,this._ts))return this._start=M,Ha(this),this.render(i,s,a);this._onUpdate&&!s&&fn(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Ai(this,1),!s&&!(i<0&&!o)&&(u||o||!c)&&(fn(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(ui(s)||(s=Mn(this,s,i)),!(i instanceof xs)){if(Vt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Dt(i))return this.addLabel(i,s);if(gt(i))i=Et.delayedCall(0,i);else return this}return this!==i?Bn(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-En);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Et?s&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Dt(i)?this.removeLabel(i):gt(i)?this.killTweensOf(i):(i.parent===this&&Ga(this,i),i===this._recent&&(this._recent=this._last),Ki(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ft(un.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Mn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Et.delayedCall(0,s||ms,a);return o.data="isPause",this._hasPause=1,Bn(this,o,Mn(this,i))},t.removePause=function(i){var s=this._first;for(i=Mn(this,i);s;)s._start===i&&s.data==="isPause"&&Ai(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)Si!==o[c]&&o[c].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=bn(i),c=this._first,l=ui(s),u;c;)c instanceof Et?iM(c._targets,o)&&(l?(!Si||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(u=c.getTweensOf(o,s)).length&&a.push.apply(a,u),c=c._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Mn(a,i),c=s,l=c.startAt,u=c.onStart,f=c.onStartParams,h=c.immediateRender,m,g=Et.to(a,_n({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||st,onStart:function(){if(a.pause(),!m){var d=s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==d&&Nr(g,d,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,_n({startAt:{time:Mn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),wf(this,Mn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),wf(this,Mn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+st)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,c=this.labels,l;for(i=ft(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(l in c)c[l]>=a&&(c[l]+=i);return Ki(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ki(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,c=En,l,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,Bn(a,o,u-o._delay,1)._lock=0):c=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=ft(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;Nr(a,a===ht&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(ht._ts&&(Zh(ht,Ca(i,ht)),$h=un.frame),un.frame>=Ef){Ef+=dn.autoSleep||120;var s=ht._first;if((!s||!s._ts)&&dn.autoSleep&&un._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||un.sleep()}}},e})(xs);_n(Ht.prototype,{_lock:0,_hasPause:0,_forcing:0});var AM=function(e,t,n,i,s,a,o){var c=new Qt(this._pt,e,t,0,1,Td,null,s),l=0,u=0,f,h,m,g,_,d,p,S;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=_s(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),h=n.match(Uo)||[];f=Uo.exec(i);)g=f[0],_=i.substring(l,f.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),g!==h[u++]&&(d=parseFloat(h[u-1])||0,c._pt={_next:c._pt,p:_||u===1?_:",",s:d,c:g.charAt(1)==="="?Er(d,g)-d:parseFloat(g)-d,m:m&&m<4?Math.round:0},l=Uo.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(Xh.test(i)||p)&&(c.e=0),this._pt=c,c},Lc=function(e,t,n,i,s,a,o,c,l,u){gt(i)&&(i=i(s||0,e,a));var f=e[t],h=n!=="get"?n:gt(f)?l?e[t.indexOf("set")||!gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():f,m=gt(f)?l?DM:Ed:Ic,g;if(Dt(i)&&(~i.indexOf("random(")&&(i=_s(i)),i.charAt(1)==="="&&(g=Er(h,i)+(Bt(h)||0),(g||g===0)&&(i=g))),!u||h!==i||jl)return!isNaN(h*i)&&i!==""?(g=new Qt(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?UM:bd,0,m),l&&(g.fp=l),o&&g.modifier(o,this,e),this._pt=g):(!f&&!(t in e)&&wc(t,i),AM.call(this,e,t,h,i,m,c||dn.stringFilter,l))},wM=function(e,t,n,i,s){if(gt(e)&&(e=cs(e,s,t,n,i)),!jn(e)||e.style&&e.nodeType||Vt(e)||Hh(e))return Dt(e)?cs(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=cs(e[o],s,t,n,i);return a},Sd=function(e,t,n,i,s,a){var o,c,l,u;if(ln[e]&&(o=new ln[e]).init(s,o.rawVars?t[e]:wM(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=c=new Qt(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Sr))for(l=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)l[o._props[u]]=c;return o},Si,jl,Uc=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,m=i.autoRevert,g=e._dur,_=e._startAt,d=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:d,y=e._overwrite==="auto"&&!Ec,M=e.timeline,E,A,w,C,x,T,P,F,N,X,W,V,O;if(M&&(!h||!s)&&(s="none"),e._ease=Zi(s,Lr.ease),e._yEase=f?_d(Zi(f===!0?s:f,Lr.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!M&&!!i.runBackwards,!M||h&&!i.stagger){if(F=d[0]?$i(d[0]).harness:0,V=F&&i[F.prop],E=Ra(i,Rc),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!m?_.render(-1,!0):_.revert(u&&g?ga:tM),_._lazy=0),a){if(Ai(e._startAt=Et.set(d,_n({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Zt(c),startAt:null,delay:0,onUpdate:l&&function(){return fn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(It||!o&&!m)&&e._startAt.revert(ga),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),w=_n({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Zt(c),immediateRender:o,stagger:0,parent:p},E),V&&(w[F.prop]=V),Ai(e._startAt=Et.set(d,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(It?e._startAt.revert(ga):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,st,st);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&Zt(c)||c&&!g,A=0;A<d.length;A++){if(x=d[A],P=x._gsap||Pc(d)[A]._gsap,e._ptLookup[A]=X={},Gl[P.id]&&Ei.length&&wa(),W=S===d?A:S.indexOf(x),F&&(N=new F).init(x,V||E,e,W,S)!==!1&&(e._pt=C=new Qt(e._pt,x,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(Y){X[Y]=C}),N.priority&&(T=1)),!F||V)for(w in E)ln[w]&&(N=Sd(w,E,e,W,x,S))?N.priority&&(T=1):X[w]=C=Lc.call(e,x,w,"get",E[w],W,S,0,i.stringFilter);e._op&&e._op[A]&&e.kill(x,e._op[A]),y&&e._pt&&(Si=e,ht.killTweensOf(x,X,e.globalTime(t)),O=!e.parent,Si=0),e._pt&&c&&(Gl[P.id]=1)}T&&Ad(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!O,h&&t<=0&&M.render(En,!0,!0)},RM=function(e,t,n,i,s,a,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,m;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,m=e._targets.length;m--;){if(u=h[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return jl=1,e.vars[t]="+=0",Uc(e,o),jl=0,c?ps(t+" not eligible for reset"):1;l.push(u)}for(m=l.length;m--;)f=l[m],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=xt(n)+Bt(f.e)),f.b&&(f.b=u.s+Bt(f.b))},CM=function(e,t){var n=e[0]?$i(e[0]).harness:0,i=n&&n.aliases,s,a,o,c;if(!i)return t;s=Ur({},t);for(a in i)if(a in s)for(c=i[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},PM=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Vt(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},cs=function(e,t,n,i,s){return gt(e)?e.call(t,n,i,s):Dt(e)&&~e.indexOf("random(")?_s(e):e},Md=Cc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",yd={};Jt(Md+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return yd[r]=1});var Et=(function(r){kh(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:os(i))||this;var c=o.vars,l=c.duration,u=c.delay,f=c.immediateRender,h=c.stagger,m=c.overwrite,g=c.keyframes,_=c.defaults,d=c.scrollTrigger,p=c.yoyoEase,S=i.parent||ht,y=(Vt(n)||Hh(n)?ui(n[0]):"length"in i)?[n]:bn(n),M,E,A,w,C,x,T,P;if(o._targets=y.length?Pc(y):ps("GSAP target "+n+" not found. https://gsap.com",!dn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,g||h||sa(l)||sa(u)){if(i=o.vars,M=o.timeline=new Ht({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:y}),M.kill(),M.parent=M._dp=ni(o),M._start=0,h||sa(l)||sa(u)){if(w=y.length,T=h&&ad(h),jn(h))for(C in h)~Md.indexOf(C)&&(P||(P={}),P[C]=h[C]);for(E=0;E<w;E++)A=Ra(i,yd),A.stagger=0,p&&(A.yoyoEase=p),P&&Ur(A,P),x=y[E],A.duration=+cs(l,ni(o),E,x,y),A.delay=(+cs(u,ni(o),E,x,y)||0)-o._delay,!h&&w===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),M.to(x,A,T?T(E,x,y):0),M._ease=He.none;M.duration()?l=u=0:o.timeline=0}else if(g){os(_n(M.vars.defaults,{ease:"none"})),M._ease=Zi(g.ease||i.ease||"none");var F=0,N,X,W;if(Vt(g))g.forEach(function(V){return M.to(y,V,">")}),M.duration();else{A={};for(C in g)C==="ease"||C==="easeEach"||PM(C,g[C],A,g.easeEach);for(C in A)for(N=A[C].sort(function(V,O){return V.t-O.t}),F=0,E=0;E<N.length;E++)X=N[E],W={ease:X.e,duration:(X.t-(E?N[E-1].t:0))/100*l},W[C]=X.v,M.to(y,W,F),F+=W.duration;M.duration()<l&&M.to({},{duration:l-M.duration()})}}l||o.duration(l=M.duration())}else o.timeline=0;return m===!0&&!Ec&&(Si=ni(o),ht.killTweensOf(y),Si=0),Bn(S,ni(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!l&&!g&&o._start===ft(S._time)&&Zt(f)&&oM(ni(o))&&S.data!=="nested")&&(o._tTime=-st,o.render(Math.max(0,-u)||0)),d&&nd(ni(o),d),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,c=this._tDur,l=this._dur,u=i<0,f=i>c-st&&!u?c:i<st?0:i,h,m,g,_,d,p,S,y,M;if(!l)cM(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,y=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(h=ft(f%_),f===c?(g=this._repeat,h=l):(d=ft(f/_),g=~~d,g&&g===d?(h=l,g--):h>l&&(h=l)),p=this._yoyo&&g&1,p&&(M=this._yEase,h=l-h),d=Ir(this._tTime,_),h===o&&!a&&this._initted&&g===d)return this._tTime=f,this;g!==d&&(y&&this._yEase&&gd(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(ft(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(id(this,u?i:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==d))return this;if(l!==this._dur)return this.render(i,s,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(M||this._ease)(h/l),this._from&&(this.ratio=S=1-S),!o&&f&&!s&&!d&&(fn(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(S,m.d),m=m._next;y&&y.render(i<0?i:y._dur*y._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Hl(this,i,s,a),fn(this,"onUpdate")),this._repeat&&g!==d&&this.vars.onRepeat&&!s&&this.parent&&fn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Hl(this,i,!0,!0),(i||!l)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ai(this,1),!s&&!(u&&!o)&&(f||o||p)&&(fn(this,f===c?"onComplete":"onReverseComplete",!0),this._prom&&!(f<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,c){gs||un.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Uc(this,l),u=this._ease(l/this._dur),RM(this,i,s,a,o,u,l,c)?this.resetTo(i,s,a,o,1):(Wa(this,0),this.parent||ed(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ss(this):this.scrollTrigger&&this.scrollTrigger.kill(!!It),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Si&&Si.vars.overwrite!==!0)._first||ss(this),this.parent&&a!==this.timeline.totalDuration()&&Nr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?bn(i):o,l=this._ptLookup,u=this._pt,f,h,m,g,_,d,p;if((!s||s==="all")&&sM(o,c))return s==="all"&&(this._pt=0),ss(this);for(f=this._op=this._op||[],s!=="all"&&(Dt(s)&&(_={},Jt(s,function(S){return _[S]=1}),s=_),s=CM(o,s)),p=o.length;p--;)if(~c.indexOf(o[p])){h=l[p],s==="all"?(f[p]=s,g=h,m={}):(m=f[p]=f[p]||{},g=s);for(_ in g)d=h&&h[_],d&&((!("kill"in d.d)||d.d.kill(_)===!0)&&Ga(this,d,"_pt"),delete h[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&u&&ss(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ls(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return ls(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return ht.killTweensOf(i,s,a)},e})(xs);_n(Et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Jt("staggerTo,staggerFrom,staggerFromTo",function(r){Et[r]=function(){var e=new Ht,t=Xl.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Ic=function(e,t,n){return e[t]=n},Ed=function(e,t,n){return e[t](n)},DM=function(e,t,n,i){return e[t](i.fp,n)},LM=function(e,t,n){return e.setAttribute(t,n)},Nc=function(e,t){return gt(e[t])?Ed:bc(e[t])&&e.setAttribute?LM:Ic},bd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},UM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Td=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Fc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},IM=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},NM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ga(this,t,"_pt"):t.dep||(n=1),t=i;return!n},FM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Ad=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Qt=(function(){function r(t,n,i,s,a,o,c,l,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||bd,this.d=c||this,this.set=l||Ic,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=FM,this.m=n,this.mt=s,this.tween=i},r})();Jt(Cc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Rc[r]=1});mn.TweenMax=mn.TweenLite=Et;mn.TimelineLite=mn.TimelineMax=Ht;ht=new Ht({sortChildren:!1,defaults:Lr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});dn.stringFilter=md;var Ji=[],va={},OM=[],Cf=0,BM=0,Bo=function(e){return(va[e]||OM).map(function(t){return t()})},$l=function(){var e=Date.now(),t=[];e-Cf>2&&(Bo("matchMediaInit"),Ji.forEach(function(n){var i=n.queries,s=n.conditions,a,o,c,l;for(o in i)a=Fn.matchMedia(i[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,l=1);l&&(n.revert(),c&&t.push(n))}),Bo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Cf=e,Bo("matchMedia"))},wd=(function(){function r(t,n){this.selector=n&&ql(n),this.data=[],this._r=[],this.isReverted=!1,this.id=BM++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){gt(n)&&(s=i,i=n,n=gt);var a=this,o=function(){var l=ct,u=a.selector,f;return l&&l!==a&&l.data.push(a),s&&(a.selector=ql(s)),ct=a,f=i.apply(a,arguments),gt(f)&&a._r.push(f),ct=l,a.selector=u,a.isReverted=!1,f};return a.last=o,n===gt?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},e.ignore=function(n){var i=ct;ct=null,n(this),ct=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Et&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof Ht?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Et)&&l.revert&&l.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Ji.length;a--;)Ji[a].id===this.id&&Ji.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),zM=(function(){function r(t){this.contexts=[],this.scope=t,ct&&ct.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){jn(n)||(n={matches:n});var a=new wd(0,s||this.scope),o=a.conditions={},c,l,u;ct&&!a.selector&&(a.selector=ct.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?u=1:(c=Fn.matchMedia(n[l]),c&&(Ji.indexOf(a)<0&&Ji.push(a),(o[l]=c.matches)&&(u=1),c.addListener?c.addListener($l):c.addEventListener("change",$l)));return u&&i(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Pa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return hd(i)})},timeline:function(e){return new Ht(e)},getTweensOf:function(e,t){return ht.getTweensOf(e,t)},getProperty:function(e,t,n,i){Dt(e)&&(e=bn(e)[0]);var s=$i(e||{}).get,a=n?Qh:Jh;return n==="native"&&(n=""),e&&(t?a((ln[t]&&ln[t].get||s)(e,t,n,i)):function(o,c,l){return a((ln[o]&&ln[o].get||s)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=bn(e),e.length>1){var i=e.map(function(u){return tn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var a=ln[t],o=$i(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(u){var f=new a;Sr._pt=0,f.init(e,n?u+n:u,Sr,0,[e]),f.render(1,f),Sr._pt&&Fc(1,Sr)}:o.set(e,c);return a?l:function(u){return l(e,c,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=tn.to(e,_n((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,l,u){return s.resetTo(t,c,l,u)};return a.tween=s,a},isTweening:function(e){return ht.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Zi(e.ease,Lr.ease)),bf(Lr,e||{})},config:function(e){return bf(dn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!ln[o]&&!mn[o]&&ps(t+" effect requires "+o+" plugin.")}),Io[t]=function(o,c,l){return n(bn(o),_n(c||{},s),l)},a&&(Ht.prototype[t]=function(o,c,l){return this.add(Io[t](o,jn(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){He[e]=Zi(t)},parseEase:function(e,t){return arguments.length?Zi(e,t):He},getById:function(e){return ht.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ht(e),i,s;for(n.smoothChildTiming=Zt(e.smoothChildTiming),ht.remove(n),n._dp=0,n._time=n._tTime=ht._time,i=ht._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Et&&i.vars.onComplete===i._targets[0]))&&Bn(n,i,i._start-i._delay),i=s;return Bn(ht,n,0),n},context:function(e,t){return e?new wd(e,t):ct},matchMedia:function(e){return new zM(e)},matchMediaRefresh:function(){return Ji.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||$l()},addEventListener:function(e,t){var n=va[e]||(va[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=va[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:gM,wrapYoyo:xM,distribute:ad,random:ld,snap:od,normalize:_M,getUnit:Bt,clamp:hM,splitColor:dd,toArray:bn,selector:ql,mapRange:ud,pipe:pM,unitize:mM,interpolate:vM,shuffle:sd},install:Yh,effects:Io,ticker:un,updateRoot:Ht.updateRoot,plugins:ln,globalTimeline:ht,core:{PropTween:Qt,globals:jh,Tween:Et,Timeline:Ht,Animation:xs,getCache:$i,_removeLinkedListItem:Ga,reverting:function(){return It},context:function(e){return e&&ct&&(ct.data.push(e),e._ctx=ct),ct},suppressOverwrites:function(e){return Ec=e}}};Jt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Pa[r]=Et[r]});un.add(Ht.updateRoot);Sr=Pa.to({},{duration:0});var VM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},kM=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=VM(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},zo=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var c,l;if(Dt(s)&&(c={},Jt(s,function(u){return c[u]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}kM(o,s)}}}},tn=Pa.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)It?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},zo("roundProps",Yl),zo("modifiers"),zo("snap",od))||Pa;Et.version=Ht.version=tn.version="3.14.2";qh=1;Tc()&&Fr();He.Power0;He.Power1;He.Power2;He.Power3;He.Power4;He.Linear;He.Quad;He.Cubic;He.Quart;He.Quint;He.Strong;He.Elastic;He.Back;He.SteppedEase;He.Bounce;He.Sine;He.Expo;He.Circ;var Pf,Mi,br,Oc,Yi,Df,Bc,GM=function(){return typeof window<"u"},fi={},ki=180/Math.PI,Tr=Math.PI/180,gr=Math.atan2,Lf=1e8,zc=/([A-Z])/g,HM=/(left|right|width|margin|padding|x)/i,WM=/[\s,\(]\S/,kn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Kl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},XM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},YM=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},jM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Rd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Cd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},$M=function(e,t,n){return e.style[t]=n},KM=function(e,t,n){return e.style.setProperty(t,n)},ZM=function(e,t,n){return e._gsap[t]=n},JM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},QM=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},ey=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},dt="transform",en=dt+"Origin",ty=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in fi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=kn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ii(i,o)}):this.tfm[e]=a.x?a[e]:ii(i,e),e===en&&(this.tfm.zOrigin=a.zOrigin);else return kn.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(dt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(en,t,"")),e=dt}(s||t)&&this.props.push(e,t,s[e])},Pd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ny=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(zc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Bc(),(!s||!s.isStart)&&!n[dt]&&(Pd(n),i.zOrigin&&n[en]&&(n[en]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Dd=function(e,t){var n={target:e,props:[],revert:ny,save:ty};return e._gsap||tn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Ld,Zl=function(e,t){var n=Mi.createElementNS?Mi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Mi.createElement(e);return n&&n.style?n:Mi.createElement(e)},hn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(zc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Or(t)||t,1)||""},Uf="O,Moz,ms,Ms,Webkit".split(","),Or=function(e,t,n){var i=t||Yi,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Uf[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Uf[a]:"")+e},Jl=function(){GM()&&window.document&&(Pf=window,Mi=Pf.document,br=Mi.documentElement,Yi=Zl("div")||{style:{}},Zl("div"),dt=Or(dt),en=dt+"Origin",Yi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ld=!!Or("perspective"),Bc=tn.core.reverting,Oc=1)},If=function(e){var t=e.ownerSVGElement,n=Zl("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),br.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),br.removeChild(n),s},Nf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Ud=function(e){var t,n;try{t=e.getBBox()}catch{t=If(e),n=1}return t&&(t.width||t.height)||n||(t=If(e)),t&&!t.width&&!t.x&&!t.y?{x:+Nf(e,["x","cx","x1"])||0,y:+Nf(e,["y","cy","y1"])||0,width:0,height:0}:t},Id=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ud(e))},wi=function(e,t){if(t){var n=e.style,i;t in fi&&t!==en&&(t=dt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(zc,"-$1").toLowerCase())):n.removeAttribute(t)}},yi=function(e,t,n,i,s,a){var o=new Qt(e._pt,t,n,0,1,a?Cd:Rd);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Ff={deg:1,rad:1,turn:1},iy={grid:1,flex:1},Ri=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Yi.style,c=HM.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),f=100,h=i==="px",m=i==="%",g,_,d,p;if(i===a||!s||Ff[i]||Ff[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),p=e.getCTM&&Id(e),(m||a==="%")&&(fi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[c?"width":"height"]:e[u],xt(m?s/g*f:s/100*g);if(o[c?"width":"height"]=f+(h?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Mi||!_.appendChild)&&(_=Mi.body),d=_._gsap,d&&m&&d.width&&c&&d.time===un.time&&!d.uncache)return xt(s/d.width*f);if(m&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=f+i,g=e[u],S?e.style[t]=S:wi(e,t)}else(m||a==="%")&&!iy[hn(_,"display")]&&(o.position=hn(e,"position")),_===e&&(o.position="static"),_.appendChild(Yi),g=Yi[u],_.removeChild(Yi),o.position="absolute";return c&&m&&(d=$i(_),d.time=un.time,d.width=_[u]),xt(h?g*s/f:g&&s?f/g*s:0)},ii=function(e,t,n,i){var s;return Oc||Jl(),t in kn&&t!=="transform"&&(t=kn[t],~t.indexOf(",")&&(t=t.split(",")[0])),fi[t]&&t!=="transform"?(s=Ss(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:La(hn(e,en))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Da[t]&&Da[t](e,t,n)||hn(e,t)||Kh(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ri(e,t,s,n)+n:s},ry=function(e,t,n,i){if(!n||n==="none"){var s=Or(t,e,1),a=s&&hn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=hn(e,"borderTopColor"))}var o=new Qt(this._pt,e.style,t,0,1,Td),c=0,l=0,u,f,h,m,g,_,d,p,S,y,M,E;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=hn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=hn(e,t)||i,_?e.style[t]=_:wi(e,t)),u=[n,i],md(u),n=u[0],i=u[1],h=n.match(vr)||[],E=i.match(vr)||[],E.length){for(;f=vr.exec(i);)d=f[0],S=i.substring(c,f.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),d!==(_=h[l++]||"")&&(m=parseFloat(_)||0,M=_.substr((m+"").length),d.charAt(1)==="="&&(d=Er(m,d)+M),p=parseFloat(d),y=d.substr((p+"").length),c=vr.lastIndex-y.length,y||(y=y||dn.units[t]||M,c===i.length&&(i+=y,o.e+=y)),M!==y&&(m=Ri(e,t,_,y)||0),o._pt={_next:o._pt,p:S||l===1?S:",",s:m,c:p-m,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=t==="display"&&i==="none"?Cd:Rd;return Xh.test(i)&&(o.e=0),this._pt=o,o},Of={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},sy=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Of[n]||n,t[1]=Of[i]||i,t.join(" ")},ay=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],fi[o]&&(c=1,o=o==="transformOrigin"?en:dt),wi(n,o);c&&(wi(n,dt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ss(n,1),a.uncache=1,Pd(i)))}},Da={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Qt(e._pt,t,n,0,0,ay);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},vs=[1,0,0,1,0,0],Nd={},Fd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Bf=function(e){var t=hn(e,dt);return Fd(t)?vs:t.substr(7).match(Wh).map(xt)},Vc=function(e,t){var n=e._gsap||$i(e),i=e.style,s=Bf(e),a,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?vs:s):(s===vs&&!e.offsetParent&&e!==br&&!n.svg&&(c=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,br.appendChild(e)),s=Bf(e),c?i.display=c:wi(e,"display"),l&&(o?a.insertBefore(e,o):a?a.appendChild(e):br.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ql=function(e,t,n,i,s,a){var o=e._gsap,c=s||Vc(e,!0),l=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,m=c[0],g=c[1],_=c[2],d=c[3],p=c[4],S=c[5],y=t.split(" "),M=parseFloat(y[0])||0,E=parseFloat(y[1])||0,A,w,C,x;n?c!==vs&&(w=m*d-g*_)&&(C=M*(d/w)+E*(-_/w)+(_*S-d*p)/w,x=M*(-g/w)+E*(m/w)-(m*S-g*p)/w,M=C,E=x):(A=Ud(e),M=A.x+(~y[0].indexOf("%")?M/100*A.width:M),E=A.y+(~(y[1]||y[0]).indexOf("%")?E/100*A.height:E)),i||i!==!1&&o.smooth?(p=M-l,S=E-u,o.xOffset=f+(p*m+S*_)-p,o.yOffset=h+(p*g+S*d)-S):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=E,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[en]="0px 0px",a&&(yi(a,o,"xOrigin",l,M),yi(a,o,"yOrigin",u,E),yi(a,o,"xOffset",f,o.xOffset),yi(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+E)},Ss=function(e,t){var n=e._gsap||new vd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",c=getComputedStyle(e),l=hn(e,en)||"0",u,f,h,m,g,_,d,p,S,y,M,E,A,w,C,x,T,P,F,N,X,W,V,O,Y,se,ne,ie,be,De,Be,ke;return u=f=h=_=d=p=S=y=M=0,m=g=1,n.svg=!!(e.getCTM&&Id(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[dt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[dt]!=="none"?c[dt]:"")),i.scale=i.rotate=i.translate="none"),w=Vc(e,n.svg),n.svg&&(n.uncache?(Y=e.getBBox(),l=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),Ql(e,O||l,!!O||n.originIsAbsolute,n.smooth!==!1,w)),E=n.xOrigin||0,A=n.yOrigin||0,w!==vs&&(P=w[0],F=w[1],N=w[2],X=w[3],u=W=w[4],f=V=w[5],w.length===6?(m=Math.sqrt(P*P+F*F),g=Math.sqrt(X*X+N*N),_=P||F?gr(F,P)*ki:0,S=N||X?gr(N,X)*ki+_:0,S&&(g*=Math.abs(Math.cos(S*Tr))),n.svg&&(u-=E-(E*P+A*N),f-=A-(E*F+A*X))):(ke=w[6],De=w[7],ne=w[8],ie=w[9],be=w[10],Be=w[11],u=w[12],f=w[13],h=w[14],C=gr(ke,be),d=C*ki,C&&(x=Math.cos(-C),T=Math.sin(-C),O=W*x+ne*T,Y=V*x+ie*T,se=ke*x+be*T,ne=W*-T+ne*x,ie=V*-T+ie*x,be=ke*-T+be*x,Be=De*-T+Be*x,W=O,V=Y,ke=se),C=gr(-N,be),p=C*ki,C&&(x=Math.cos(-C),T=Math.sin(-C),O=P*x-ne*T,Y=F*x-ie*T,se=N*x-be*T,Be=X*T+Be*x,P=O,F=Y,N=se),C=gr(F,P),_=C*ki,C&&(x=Math.cos(C),T=Math.sin(C),O=P*x+F*T,Y=W*x+V*T,F=F*x-P*T,V=V*x-W*T,P=O,W=Y),d&&Math.abs(d)+Math.abs(_)>359.9&&(d=_=0,p=180-p),m=xt(Math.sqrt(P*P+F*F+N*N)),g=xt(Math.sqrt(V*V+ke*ke)),C=gr(W,V),S=Math.abs(C)>2e-4?C*ki:0,M=Be?1/(Be<0?-Be:Be):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Fd(hn(e,dt)),O&&e.setAttribute("transform",O))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(m*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=xt(m),n.scaleY=xt(g),n.rotation=xt(_)+o,n.rotationX=xt(d)+o,n.rotationY=xt(p)+o,n.skewX=S+o,n.skewY=y+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[en]=La(l)),n.xOffset=n.yOffset=0,n.force3D=dn.force3D,n.renderTransform=n.svg?ly:Ld?Od:oy,n.uncache=0,n},La=function(e){return(e=e.split(" "))[0]+" "+e[1]},Vo=function(e,t,n){var i=Bt(t);return xt(parseFloat(t)+parseFloat(Ri(e,"x",n+"px",i)))+i},oy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Od(e,t)},Bi="0deg",Qr="0px",zi=") ",Od=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,m=n.skewY,g=n.scaleX,_=n.scaleY,d=n.transformPerspective,p=n.force3D,S=n.target,y=n.zOrigin,M="",E=p==="auto"&&e&&e!==1||p===!0;if(y&&(f!==Bi||u!==Bi)){var A=parseFloat(u)*Tr,w=Math.sin(A),C=Math.cos(A),x;A=parseFloat(f)*Tr,x=Math.cos(A),a=Vo(S,a,w*x*-y),o=Vo(S,o,-Math.sin(A)*-y),c=Vo(S,c,C*x*-y+y)}d!==Qr&&(M+="perspective("+d+zi),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(E||a!==Qr||o!==Qr||c!==Qr)&&(M+=c!==Qr||E?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+zi),l!==Bi&&(M+="rotate("+l+zi),u!==Bi&&(M+="rotateY("+u+zi),f!==Bi&&(M+="rotateX("+f+zi),(h!==Bi||m!==Bi)&&(M+="skew("+h+", "+m+zi),(g!==1||_!==1)&&(M+="scale("+g+", "+_+zi),S.style[dt]=M||"translate(0, 0)"},ly=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,m=n.target,g=n.xOrigin,_=n.yOrigin,d=n.xOffset,p=n.yOffset,S=n.forceCSS,y=parseFloat(a),M=parseFloat(o),E,A,w,C,x;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=Tr,l*=Tr,E=Math.cos(c)*f,A=Math.sin(c)*f,w=Math.sin(c-l)*-h,C=Math.cos(c-l)*h,l&&(u*=Tr,x=Math.tan(l-u),x=Math.sqrt(1+x*x),w*=x,C*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),E*=x,A*=x)),E=xt(E),A=xt(A),w=xt(w),C=xt(C)):(E=f,C=h,A=w=0),(y&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(y=Ri(m,"x",a,"px"),M=Ri(m,"y",o,"px")),(g||_||d||p)&&(y=xt(y+g-(g*E+_*w)+d),M=xt(M+_-(g*A+_*C)+p)),(i||s)&&(x=m.getBBox(),y=xt(y+i/100*x.width),M=xt(M+s/100*x.height)),x="matrix("+E+","+A+","+w+","+C+","+y+","+M+")",m.setAttribute("transform",x),S&&(m.style[dt]=x)},cy=function(e,t,n,i,s){var a=360,o=Dt(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?ki:1),l=c-i,u=i+l+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),f==="cw"&&l<0?l=(l+a*Lf)%a-~~(l/a)*a:f==="ccw"&&l>0&&(l=(l-a*Lf)%a-~~(l/a)*a)),e._pt=h=new Qt(e._pt,t,n,i,l,XM),h.e=u,h.u="deg",e._props.push(n),h},zf=function(e,t){for(var n in t)e[n]=t[n];return e},uy=function(e,t,n){var i=zf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,u,f,h,m,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[dt]=t,o=Ss(n,1),wi(n,dt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[dt],a[dt]=t,o=Ss(n,1),a[dt]=l);for(c in fi)l=i[c],u=o[c],l!==u&&s.indexOf(c)<0&&(m=Bt(l),g=Bt(u),f=m!==g?Ri(n,c,l,g):parseFloat(l),h=parseFloat(u),e._pt=new Qt(e._pt,o,c,f,h-f,Kl),e._pt.u=g||0,e._props.push(c));zf(o,i)};Jt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Da[e>1?"border"+r:r]=function(o,c,l,u,f){var h,m;if(arguments.length<4)return h=a.map(function(g){return ii(o,g,l)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(u+"").split(" "),m={},a.forEach(function(g,_){return m[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(c,m,f)}});var Bd={name:"css",register:Jl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,c=n.vars.startAt,l,u,f,h,m,g,_,d,p,S,y,M,E,A,w,C,x;Oc||Jl(),this.styles=this.styles||Dd(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ln[_]&&Sd(_,t,n,i,e,s)))){if(m=typeof u,g=Da[_],m==="function"&&(u=u.call(n,i,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=_s(u)),g)g(this,e,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",bi.lastIndex=0,bi.test(l)||(d=Bt(l),p=Bt(u),p?d!==p&&(l=Ri(e,_,l,p)+p):d&&(u+=d)),this.add(o,"setProperty",l,u,i,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(m!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,i,e,s):c[_],Dt(l)&&~l.indexOf("random(")&&(l=_s(l)),Bt(l+"")||l==="auto"||(l+=dn.units[_]||Bt(ii(e,_))||""),(l+"").charAt(1)==="="&&(l=ii(e,_))):l=ii(e,_),h=parseFloat(l),S=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),f=parseFloat(u),_ in kn&&(_==="autoAlpha"&&(h===1&&ii(e,"visibility")==="hidden"&&f&&(h=0),C.push("visibility",0,o.visibility),yi(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=kn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in fi,y){if(this.styles.save(_),x=u,m==="string"&&u.substring(0,6)==="var(--"){if(u=hn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var T=e.style.perspective;e.style.perspective=u,u=hn(e,"perspective"),T?e.style.perspective=T:wi(e,"perspective")}f=parseFloat(u)}if(M||(E=e._gsap,E.renderTransform&&!t.parseTransform||Ss(e,t.parseTransform),A=t.smoothOrigin!==!1&&E.smooth,M=this._pt=new Qt(this._pt,o,dt,0,1,E.renderTransform,E,0,-1),M.dep=1),_==="scale")this._pt=new Qt(this._pt,E,"scaleY",E.scaleY,(S?Er(E.scaleY,S+f):f)-E.scaleY||0,Kl),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(en,0,o[en]),u=sy(u),E.svg?Ql(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==E.zOrigin&&yi(this,E,"zOrigin",E.zOrigin,p),yi(this,o,_,La(l),La(u)));continue}else if(_==="svgOrigin"){Ql(e,u,1,A,0,this);continue}else if(_ in Nd){cy(this,E,_,h,S?Er(h,S+u):u);continue}else if(_==="smoothOrigin"){yi(this,E,"smooth",E.smooth,u);continue}else if(_==="force3D"){E[_]=u;continue}else if(_==="transform"){uy(this,u,e);continue}}else _ in o||(_=Or(_)||_);if(y||(f||f===0)&&(h||h===0)&&!WM.test(u)&&_ in o)d=(l+"").substr((h+"").length),f||(f=0),p=Bt(u)||(_ in dn.units?dn.units[_]:d),d!==p&&(h=Ri(e,_,l,p)),this._pt=new Qt(this._pt,y?E:o,_,h,(S?Er(h,S+f):f)-h,!y&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?jM:Kl),this._pt.u=p||0,y&&x!==u?(this._pt.b=l,this._pt.e=x,this._pt.r=YM):d!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=qM);else if(_ in o)ry.call(this,e,_,l,S?S+u:u);else if(_ in e)this.add(e,_,l||e[_],S?S+u:u,i,s);else if(_!=="parseTransform"){wc(_,u);continue}y||(_ in o?C.push(_,0,o[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,l||e[_])),a.push(_)}}w&&Ad(this)},render:function(e,t){if(t.tween._time||!Bc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ii,aliases:kn,getSetter:function(e,t,n){var i=kn[t];return i&&i.indexOf(",")<0&&(t=i),t in fi&&t!==en&&(e._gsap.x||ii(e,"x"))?n&&Df===n?t==="scale"?JM:ZM:(Df=n||{})&&(t==="scale"?QM:ey):e.style&&!bc(e.style[t])?$M:~t.indexOf("-")?KM:Nc(e,t)},core:{_removeProperty:wi,_getMatrix:Vc}};tn.utils.checkPrefix=Or;tn.core.getStyleSaver=Dd;(function(r,e,t,n){var i=Jt(r+","+e+","+t,function(s){fi[s]=1});Jt(e,function(s){dn.units[s]="deg",Nd[s]=1}),kn[i[13]]=r+","+e,Jt(n,function(s){var a=s.split(":");kn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Jt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){dn.units[r]="px"});tn.registerPlugin(Bd);var ec=tn.registerPlugin(Bd)||tn;ec.core.Tween;let bt,xr,es,aa,Ct;const Nn={position:new z(0,-1.3,0),rotation:new Tn(0,Math.PI/2,0)};function zd(){const r=document.getElementById("canvas-container");if(!r)return;aa&&cancelAnimationFrame(aa),bt&&(bt.dispose(),bt.domElement.parentNode&&bt.domElement.parentNode.removeChild(bt.domElement)),xr=new A_,es=new yn(45,window.innerWidth/window.innerHeight,.1,1e3),es.position.z=9,bt=new VS({alpha:!0,antialias:!0}),bt.setSize(window.innerWidth,window.innerHeight),bt.setPixelRatio(Math.min(window.devicePixelRatio,2)),bt.shadowMap.enabled=!0,bt.shadowMap.type=lh,bt.toneMapping=lc,bt.toneMappingExposure=1,r.appendChild(bt.domElement);const e=new H_(16777215,.5);xr.add(e);const t=new qu(16777215,2);t.position.set(5,10,7),t.castShadow=!0,xr.add(t);const n=new qu(35071,1);n.position.set(-5,0,5),xr.add(n);const i={body:new Kr({color:16777215,roughness:.2,metalness:.8}),wing:new Kr({color:16737792,roughness:.2,metalness:.8,emissive:16724736,emissiveIntensity:.2}),weapon:new Kr({color:3355443,roughness:.4,metalness:.9}),piston:new Kr({color:11184810,roughness:.1,metalness:1}),default:new Kr({color:15658734,roughness:.2,metalness:.8})};new qS().load("/DROID.obj",g=>{Ct=g,Ct.traverse(p=>{if(p.isMesh){const S=p.name.toUpperCase();if(S.includes("FLOOR")||S.includes("ENV")){p.visible=!1;return}S.includes("WING")?p.material=i.wing:S.includes("BODY")?p.material=i.body:S.includes("WEAPON")||S.includes("GUN")?p.material=i.weapon:S.includes("PISTON")?p.material=i.piston:p.material=i.default,p.castShadow=!0,p.receiveShadow=!0}}),Ct.scale.set(.5,.5,.5);const d=new Vr().setFromObject(Ct).getCenter(new z);Ct.position.sub(d),Ct.position.set(0,-1.3,0),Ct.rotation.set(0,Math.PI/2,0),Nn.position.copy(Ct.position),Nn.rotation.copy(Ct.rotation),xr.add(Ct)},g=>{},g=>{console.error("An error happened loading the DROID model:",g)});const a=[{id:"home",pos:{x:0,y:-1.3,z:0},rot:{x:0,y:1.57,z:0}},{id:"hero-scroll",pos:{x:0,y:-2.5,z:1},rot:{x:.5,y:1.57,z:0}},{id:"works",pos:{x:-3.5,y:.8,z:0},rot:{x:0,y:2,z:0}},{id:"works-swiper",pos:{x:3.5,y:0,z:-1},rot:{x:0,y:1,z:0}},{id:"websites",pos:{x:0,y:0,z:-2},rot:{x:.2,y:1,z:0}},{id:"websites-grid",pos:{x:0,y:-1,z:-3},rot:{x:.5,y:1.57,z:0}},{id:"services",pos:{x:3.5,y:.8,z:0},rot:{x:0,y:1,z:0}},{id:"features",pos:{x:-3.5,y:-.5,z:0},rot:{x:0,y:2,z:0}},{id:"about",pos:{x:4,y:0,z:-1},rot:{x:0,y:.5,z:0}},{id:"about-grid",pos:{x:-3,y:0,z:0},rot:{x:0,y:2.5,z:0}},{id:"pricing",pos:{x:-3.5,y:1,z:0},rot:{x:0,y:2.5,z:0}},{id:"pricing-grid",pos:{x:3.5,y:0,z:0},rot:{x:0,y:1,z:0}},{id:"testimonials",pos:{x:3.5,y:-.5,z:0},rot:{x:0,y:1,z:0}},{id:"testimonials-swiper",pos:{x:-3.5,y:0,z:0},rot:{x:0,y:2,z:0}},{id:"contact",pos:{x:0,y:-.5,z:1.5},rot:{x:0,y:1.57,z:0}}],o=new IntersectionObserver(g=>{g.forEach(_=>{if(_.isIntersecting&&Ct){const d=a.find(p=>p.id===_.target.id);d&&(ec.to(Nn.position,{...d.pos,duration:2,ease:"power2.inOut"}),ec.to(Nn.rotation,{...d.rot,duration:2,ease:"power2.inOut"}))}})},{threshold:.2});a.forEach(g=>{const _=document.getElementById(g.id);_&&o.observe(_)});let c=0,l=0;const u=window.innerWidth/2,f=window.innerHeight/2;document.addEventListener("mousemove",g=>{c=(g.clientX-u)*.008,l=(g.clientY-f)*.008});function h(){if(aa=requestAnimationFrame(h),Ct){const g=Date.now()*.001,_=Math.sin(g*1.5)*.15,d=Math.sin(g*.8)*.1,p=Math.cos(g*.5)*.1,S=Math.sin(g*1.2)*.05,y=Math.cos(g*.9)*.05,M=Math.sin(g*.7)*.02;Ct.position.x=Nn.position.x+d,Ct.position.y=Nn.position.y+_,Ct.position.z=Nn.position.z+p,Ct.rotation.x=Nn.rotation.x+S+l*.2,Ct.rotation.y=Nn.rotation.y+y+c*.2,Ct.rotation.z=Nn.rotation.z+M}bt.render(xr,es)}h();const m=()=>{es.aspect=window.innerWidth/window.innerHeight,es.updateProjectionMatrix(),bt.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",m),window.cleanup3D=()=>{cancelAnimationFrame(aa),window.removeEventListener("resize",m),o.disconnect(),bt&&bt.domElement.parentNode&&bt.domElement.parentNode.removeChild(bt.domElement)}}document.addEventListener("DOMContentLoaded",()=>{zd()});document.addEventListener("livewire:navigated",()=>{const r=document.getElementById("canvas-container");r?r.querySelector("canvas")||zd():window.cleanup3D&&window.cleanup3D()});
