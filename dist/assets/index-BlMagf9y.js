(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function KP(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var s_={exports:{}},Kc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zw;function QP(){if(zw)return Kc;zw=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,a,o){var u=null;if(o!==void 0&&(u=""+o),a.key!==void 0&&(u=""+a.key),"key"in a){o={};for(var d in a)d!=="key"&&(o[d]=a[d])}else o=a;return a=o.ref,{$$typeof:n,type:r,key:u,ref:a!==void 0?a:null,props:o}}return Kc.Fragment=e,Kc.jsx=t,Kc.jsxs=t,Kc}var jw;function YP(){return jw||(jw=1,s_.exports=QP()),s_.exports}var j=YP(),a_={exports:{}},Qc={},o_={exports:{}},l_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qw;function WP(){return qw||(qw=1,function(n){function e(ee,he){var Ee=ee.length;ee.push(he);e:for(;0<Ee;){var Ne=Ee-1>>>1,k=ee[Ne];if(0<a(k,he))ee[Ne]=he,ee[Ee]=k,Ee=Ne;else break e}}function t(ee){return ee.length===0?null:ee[0]}function r(ee){if(ee.length===0)return null;var he=ee[0],Ee=ee.pop();if(Ee!==he){ee[0]=Ee;e:for(var Ne=0,k=ee.length,se=k>>>1;Ne<se;){var de=2*(Ne+1)-1,ce=ee[de],be=de+1,De=ee[be];if(0>a(ce,Ee))be<k&&0>a(De,ce)?(ee[Ne]=De,ee[be]=Ee,Ne=be):(ee[Ne]=ce,ee[de]=Ee,Ne=de);else if(be<k&&0>a(De,Ee))ee[Ne]=De,ee[be]=Ee,Ne=be;else break e}}return he}function a(ee,he){var Ee=ee.sortIndex-he.sortIndex;return Ee!==0?Ee:ee.id-he.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],m=[],y=1,v=null,b=3,A=!1,x=!1,U=!1,M=!1,H=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;function le(ee){for(var he=t(m);he!==null;){if(he.callback===null)r(m);else if(he.startTime<=ee)r(m),he.sortIndex=he.expirationTime,e(f,he);else break;he=t(m)}}function re(ee){if(U=!1,le(ee),!x)if(t(f)!==null)x=!0,J||(J=!0,L());else{var he=t(m);he!==null&&rt(re,he.startTime-ee)}}var J=!1,R=-1,S=5,C=-1;function O(){return M?!0:!(n.unstable_now()-C<S)}function N(){if(M=!1,J){var ee=n.unstable_now();C=ee;var he=!0;try{e:{x=!1,U&&(U=!1,Z(R),R=-1),A=!0;var Ee=b;try{t:{for(le(ee),v=t(f);v!==null&&!(v.expirationTime>ee&&O());){var Ne=v.callback;if(typeof Ne=="function"){v.callback=null,b=v.priorityLevel;var k=Ne(v.expirationTime<=ee);if(ee=n.unstable_now(),typeof k=="function"){v.callback=k,le(ee),he=!0;break t}v===t(f)&&r(f),le(ee)}else r(f);v=t(f)}if(v!==null)he=!0;else{var se=t(m);se!==null&&rt(re,se.startTime-ee),he=!1}}break e}finally{v=null,b=Ee,A=!1}he=void 0}}finally{he?L():J=!1}}}var L;if(typeof $=="function")L=function(){$(N)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,ft=P.port2;P.port1.onmessage=N,L=function(){ft.postMessage(null)}}else L=function(){H(N,0)};function rt(ee,he){R=H(function(){ee(n.unstable_now())},he)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ee){ee.callback=null},n.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<ee?Math.floor(1e3/ee):5},n.unstable_getCurrentPriorityLevel=function(){return b},n.unstable_next=function(ee){switch(b){case 1:case 2:case 3:var he=3;break;default:he=b}var Ee=b;b=he;try{return ee()}finally{b=Ee}},n.unstable_requestPaint=function(){M=!0},n.unstable_runWithPriority=function(ee,he){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var Ee=b;b=ee;try{return he()}finally{b=Ee}},n.unstable_scheduleCallback=function(ee,he,Ee){var Ne=n.unstable_now();switch(typeof Ee=="object"&&Ee!==null?(Ee=Ee.delay,Ee=typeof Ee=="number"&&0<Ee?Ne+Ee:Ne):Ee=Ne,ee){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=Ee+k,ee={id:y++,callback:he,priorityLevel:ee,startTime:Ee,expirationTime:k,sortIndex:-1},Ee>Ne?(ee.sortIndex=Ee,e(m,ee),t(f)===null&&ee===t(m)&&(U?(Z(R),R=-1):U=!0,rt(re,Ee-Ne))):(ee.sortIndex=k,e(f,ee),x||A||(x=!0,J||(J=!0,L()))),ee},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(ee){var he=b;return function(){var Ee=b;b=he;try{return ee.apply(this,arguments)}finally{b=Ee}}}}(l_)),l_}var Hw;function XP(){return Hw||(Hw=1,o_.exports=WP()),o_.exports}var u_={exports:{}},ke={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gw;function ZP(){if(Gw)return ke;Gw=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function b(k){return k===null||typeof k!="object"?null:(k=v&&k[v]||k["@@iterator"],typeof k=="function"?k:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,U={};function M(k,se,de){this.props=k,this.context=se,this.refs=U,this.updater=de||A}M.prototype.isReactComponent={},M.prototype.setState=function(k,se){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,se,"setState")},M.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function H(){}H.prototype=M.prototype;function Z(k,se,de){this.props=k,this.context=se,this.refs=U,this.updater=de||A}var $=Z.prototype=new H;$.constructor=Z,x($,M.prototype),$.isPureReactComponent=!0;var le=Array.isArray,re={H:null,A:null,T:null,S:null,V:null},J=Object.prototype.hasOwnProperty;function R(k,se,de,ce,be,De){return de=De.ref,{$$typeof:n,type:k,key:se,ref:de!==void 0?de:null,props:De}}function S(k,se){return R(k.type,se,void 0,void 0,void 0,k.props)}function C(k){return typeof k=="object"&&k!==null&&k.$$typeof===n}function O(k){var se={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(de){return se[de]})}var N=/\/+/g;function L(k,se){return typeof k=="object"&&k!==null&&k.key!=null?O(""+k.key):se.toString(36)}function P(){}function ft(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(P,P):(k.status="pending",k.then(function(se){k.status==="pending"&&(k.status="fulfilled",k.value=se)},function(se){k.status==="pending"&&(k.status="rejected",k.reason=se)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function rt(k,se,de,ce,be){var De=typeof k;(De==="undefined"||De==="boolean")&&(k=null);var Ie=!1;if(k===null)Ie=!0;else switch(De){case"bigint":case"string":case"number":Ie=!0;break;case"object":switch(k.$$typeof){case n:case e:Ie=!0;break;case y:return Ie=k._init,rt(Ie(k._payload),se,de,ce,be)}}if(Ie)return be=be(k),Ie=ce===""?"."+L(k,0):ce,le(be)?(de="",Ie!=null&&(de=Ie.replace(N,"$&/")+"/"),rt(be,se,de,"",function(Jt){return Jt})):be!=null&&(C(be)&&(be=S(be,de+(be.key==null||k&&k.key===be.key?"":(""+be.key).replace(N,"$&/")+"/")+Ie)),se.push(be)),1;Ie=0;var Tt=ce===""?".":ce+":";if(le(k))for(var $e=0;$e<k.length;$e++)ce=k[$e],De=Tt+L(ce,$e),Ie+=rt(ce,se,de,De,be);else if($e=b(k),typeof $e=="function")for(k=$e.call(k),$e=0;!(ce=k.next()).done;)ce=ce.value,De=Tt+L(ce,$e++),Ie+=rt(ce,se,de,De,be);else if(De==="object"){if(typeof k.then=="function")return rt(ft(k),se,de,ce,be);throw se=String(k),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.")}return Ie}function ee(k,se,de){if(k==null)return k;var ce=[],be=0;return rt(k,ce,"","",function(De){return se.call(de,De,be++)}),ce}function he(k){if(k._status===-1){var se=k._result;se=se(),se.then(function(de){(k._status===0||k._status===-1)&&(k._status=1,k._result=de)},function(de){(k._status===0||k._status===-1)&&(k._status=2,k._result=de)}),k._status===-1&&(k._status=0,k._result=se)}if(k._status===1)return k._result.default;throw k._result}var Ee=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var se=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(se))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)};function Ne(){}return ke.Children={map:ee,forEach:function(k,se,de){ee(k,function(){se.apply(this,arguments)},de)},count:function(k){var se=0;return ee(k,function(){se++}),se},toArray:function(k){return ee(k,function(se){return se})||[]},only:function(k){if(!C(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},ke.Component=M,ke.Fragment=t,ke.Profiler=a,ke.PureComponent=Z,ke.StrictMode=r,ke.Suspense=f,ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=re,ke.__COMPILER_RUNTIME={__proto__:null,c:function(k){return re.H.useMemoCache(k)}},ke.cache=function(k){return function(){return k.apply(null,arguments)}},ke.cloneElement=function(k,se,de){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var ce=x({},k.props),be=k.key,De=void 0;if(se!=null)for(Ie in se.ref!==void 0&&(De=void 0),se.key!==void 0&&(be=""+se.key),se)!J.call(se,Ie)||Ie==="key"||Ie==="__self"||Ie==="__source"||Ie==="ref"&&se.ref===void 0||(ce[Ie]=se[Ie]);var Ie=arguments.length-2;if(Ie===1)ce.children=de;else if(1<Ie){for(var Tt=Array(Ie),$e=0;$e<Ie;$e++)Tt[$e]=arguments[$e+2];ce.children=Tt}return R(k.type,be,void 0,void 0,De,ce)},ke.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:o,_context:k},k},ke.createElement=function(k,se,de){var ce,be={},De=null;if(se!=null)for(ce in se.key!==void 0&&(De=""+se.key),se)J.call(se,ce)&&ce!=="key"&&ce!=="__self"&&ce!=="__source"&&(be[ce]=se[ce]);var Ie=arguments.length-2;if(Ie===1)be.children=de;else if(1<Ie){for(var Tt=Array(Ie),$e=0;$e<Ie;$e++)Tt[$e]=arguments[$e+2];be.children=Tt}if(k&&k.defaultProps)for(ce in Ie=k.defaultProps,Ie)be[ce]===void 0&&(be[ce]=Ie[ce]);return R(k,De,void 0,void 0,null,be)},ke.createRef=function(){return{current:null}},ke.forwardRef=function(k){return{$$typeof:d,render:k}},ke.isValidElement=C,ke.lazy=function(k){return{$$typeof:y,_payload:{_status:-1,_result:k},_init:he}},ke.memo=function(k,se){return{$$typeof:m,type:k,compare:se===void 0?null:se}},ke.startTransition=function(k){var se=re.T,de={};re.T=de;try{var ce=k(),be=re.S;be!==null&&be(de,ce),typeof ce=="object"&&ce!==null&&typeof ce.then=="function"&&ce.then(Ne,Ee)}catch(De){Ee(De)}finally{re.T=se}},ke.unstable_useCacheRefresh=function(){return re.H.useCacheRefresh()},ke.use=function(k){return re.H.use(k)},ke.useActionState=function(k,se,de){return re.H.useActionState(k,se,de)},ke.useCallback=function(k,se){return re.H.useCallback(k,se)},ke.useContext=function(k){return re.H.useContext(k)},ke.useDebugValue=function(){},ke.useDeferredValue=function(k,se){return re.H.useDeferredValue(k,se)},ke.useEffect=function(k,se,de){var ce=re.H;if(typeof de=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ce.useEffect(k,se)},ke.useId=function(){return re.H.useId()},ke.useImperativeHandle=function(k,se,de){return re.H.useImperativeHandle(k,se,de)},ke.useInsertionEffect=function(k,se){return re.H.useInsertionEffect(k,se)},ke.useLayoutEffect=function(k,se){return re.H.useLayoutEffect(k,se)},ke.useMemo=function(k,se){return re.H.useMemo(k,se)},ke.useOptimistic=function(k,se){return re.H.useOptimistic(k,se)},ke.useReducer=function(k,se,de){return re.H.useReducer(k,se,de)},ke.useRef=function(k){return re.H.useRef(k)},ke.useState=function(k){return re.H.useState(k)},ke.useSyncExternalStore=function(k,se,de){return re.H.useSyncExternalStore(k,se,de)},ke.useTransition=function(){return re.H.useTransition()},ke.version="19.1.0",ke}var $w;function kv(){return $w||($w=1,u_.exports=ZP()),u_.exports}var c_={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kw;function JP(){if(Kw)return bn;Kw=1;var n=kv();function e(f){var m="https://react.dev/errors/"+f;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+f+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var r={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function o(f,m,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:v==null?null:""+v,children:f,containerInfo:m,implementation:y}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(f,m){if(f==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,bn.createPortal=function(f,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return o(f,m,null,y)},bn.flushSync=function(f){var m=u.T,y=r.p;try{if(u.T=null,r.p=2,f)return f()}finally{u.T=m,r.p=y,r.d.f()}},bn.preconnect=function(f,m){typeof f=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(f,m))},bn.prefetchDNS=function(f){typeof f=="string"&&r.d.D(f)},bn.preinit=function(f,m){if(typeof f=="string"&&m&&typeof m.as=="string"){var y=m.as,v=d(y,m.crossOrigin),b=typeof m.integrity=="string"?m.integrity:void 0,A=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?r.d.S(f,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:b,fetchPriority:A}):y==="script"&&r.d.X(f,{crossOrigin:v,integrity:b,fetchPriority:A,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},bn.preinitModule=function(f,m){if(typeof f=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=d(m.as,m.crossOrigin);r.d.M(f,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(f)},bn.preload=function(f,m){if(typeof f=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,v=d(y,m.crossOrigin);r.d.L(f,y,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},bn.preloadModule=function(f,m){if(typeof f=="string")if(m){var y=d(m.as,m.crossOrigin);r.d.m(f,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(f)},bn.requestFormReset=function(f){r.d.r(f)},bn.unstable_batchedUpdates=function(f,m){return f(m)},bn.useFormState=function(f,m,y){return u.H.useFormState(f,m,y)},bn.useFormStatus=function(){return u.H.useHostTransitionStatus()},bn.version="19.1.0",bn}var Qw;function eN(){if(Qw)return c_.exports;Qw=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),c_.exports=JP(),c_.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yw;function tN(){if(Yw)return Qc;Yw=1;var n=XP(),e=kv(),t=eN();function r(i){var s="https://react.dev/errors/"+i;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function o(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function u(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function d(i){if(o(i)!==i)throw Error(r(188))}function f(i){var s=i.alternate;if(!s){if(s=o(i),s===null)throw Error(r(188));return s!==i?null:i}for(var l=i,c=s;;){var p=l.return;if(p===null)break;var g=p.alternate;if(g===null){if(c=p.return,c!==null){l=c;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===l)return d(p),i;if(g===c)return d(p),s;g=g.sibling}throw Error(r(188))}if(l.return!==c.return)l=p,c=g;else{for(var T=!1,w=p.child;w;){if(w===l){T=!0,l=p,c=g;break}if(w===c){T=!0,c=p,l=g;break}w=w.sibling}if(!T){for(w=g.child;w;){if(w===l){T=!0,l=g,c=p;break}if(w===c){T=!0,c=g,l=p;break}w=w.sibling}if(!T)throw Error(r(189))}}if(l.alternate!==c)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?i:s}function m(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i;for(i=i.child;i!==null;){if(s=m(i),s!==null)return s;i=i.sibling}return null}var y=Object.assign,v=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),Z=Symbol.for("react.consumer"),$=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function L(i){return i===null||typeof i!="object"?null:(i=N&&i[N]||i["@@iterator"],typeof i=="function"?i:null)}var P=Symbol.for("react.client.reference");function ft(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===P?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case x:return"Fragment";case M:return"Profiler";case U:return"StrictMode";case re:return"Suspense";case J:return"SuspenseList";case C:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case A:return"Portal";case $:return(i.displayName||"Context")+".Provider";case Z:return(i._context.displayName||"Context")+".Consumer";case le:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case R:return s=i.displayName||null,s!==null?s:ft(i.type)||"Memo";case S:s=i._payload,i=i._init;try{return ft(i(s))}catch{}}return null}var rt=Array.isArray,ee=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ee={pending:!1,data:null,method:null,action:null},Ne=[],k=-1;function se(i){return{current:i}}function de(i){0>k||(i.current=Ne[k],Ne[k]=null,k--)}function ce(i,s){k++,Ne[k]=i.current,i.current=s}var be=se(null),De=se(null),Ie=se(null),Tt=se(null);function $e(i,s){switch(ce(Ie,s),ce(De,i),ce(be,null),s.nodeType){case 9:case 11:i=(i=s.documentElement)&&(i=i.namespaceURI)?mw(i):0;break;default:if(i=s.tagName,s=s.namespaceURI)s=mw(s),i=gw(s,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}de(be),ce(be,i)}function Jt(){de(be),de(De),de(Ie)}function sr(i){i.memoizedState!==null&&ce(Tt,i);var s=be.current,l=gw(s,i.type);s!==l&&(ce(De,i),ce(be,l))}function Mn(i){De.current===i&&(de(be),de(De)),Tt.current===i&&(de(Tt),jc._currentValue=Ee)}var vn=Object.prototype.hasOwnProperty,pa=n.unstable_scheduleCallback,ma=n.unstable_cancelCallback,Bu=n.unstable_shouldYield,Cd=n.unstable_requestPaint,ar=n.unstable_now,sg=n.unstable_getCurrentPriorityLevel,Fu=n.unstable_ImmediatePriority,Mo=n.unstable_UserBlockingPriority,ga=n.unstable_NormalPriority,ag=n.unstable_LowPriority,Lo=n.unstable_IdlePriority,zu=n.log,xd=n.unstable_setDisableYieldValue,Rt=null,Ze=null;function Gn(i){if(typeof zu=="function"&&xd(i),Ze&&typeof Ze.setStrictMode=="function")try{Ze.setStrictMode(Rt,i)}catch{}}var En=Math.clz32?Math.clz32:ya,Dd=Math.log,og=Math.LN2;function ya(i){return i>>>=0,i===0?32:31-(Dd(i)/og|0)|0}var _a=256,va=4194304;function wr(i){var s=i&42;if(s!==0)return s;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function Uo(i,s,l){var c=i.pendingLanes;if(c===0)return 0;var p=0,g=i.suspendedLanes,T=i.pingedLanes;i=i.warmLanes;var w=c&134217727;return w!==0?(c=w&~g,c!==0?p=wr(c):(T&=w,T!==0?p=wr(T):l||(l=w&~i,l!==0&&(p=wr(l))))):(w=c&~g,w!==0?p=wr(w):T!==0?p=wr(T):l||(l=c&~i,l!==0&&(p=wr(l)))),p===0?0:s!==0&&s!==p&&(s&g)===0&&(g=p&-p,l=s&-s,g>=l||g===32&&(l&4194048)!==0)?s:p}function Ea(i,s){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&s)===0}function ju(i,s){switch(i){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qu(){var i=_a;return _a<<=1,(_a&4194048)===0&&(_a=256),i}function Hu(){var i=va;return va<<=1,(va&62914560)===0&&(va=4194304),i}function yi(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function _i(i,s){i.pendingLanes|=s,s!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Gu(i,s,l,c,p,g){var T=i.pendingLanes;i.pendingLanes=l,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=l,i.entangledLanes&=l,i.errorRecoveryDisabledLanes&=l,i.shellSuspendCounter=0;var w=i.entanglements,D=i.expirationTimes,G=i.hiddenUpdates;for(l=T&~l;0<l;){var te=31-En(l),ie=1<<te;w[te]=0,D[te]=-1;var K=G[te];if(K!==null)for(G[te]=null,te=0;te<K.length;te++){var Q=K[te];Q!==null&&(Q.lane&=-536870913)}l&=~ie}c!==0&&Or(i,c,0),g!==0&&p===0&&i.tag!==0&&(i.suspendedLanes|=g&~(T&~s))}function Or(i,s,l){i.pendingLanes|=s,i.suspendedLanes&=~s;var c=31-En(s);i.entangledLanes|=s,i.entanglements[c]=i.entanglements[c]|1073741824|l&4194090}function $u(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var c=31-En(l),p=1<<c;p&s|i[c]&s&&(i[c]|=s),l&=~p}}function ss(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function Bo(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function as(){var i=he.p;return i!==0?i:(i=window.event,i===void 0?32:Vw(i.type))}function Pd(i,s){var l=he.p;try{return he.p=i,s()}finally{he.p=l}}var pt=Math.random().toString(36).slice(2),$t="__reactFiber$"+pt,Bt="__reactProps$"+pt,or="__reactContainer$"+pt,Ku="__reactEvents$"+pt,lg="__reactListeners$"+pt,os="__reactHandles$"+pt,Nd="__reactResources$"+pt,Ta="__reactMarker$"+pt;function ls(i){delete i[$t],delete i[Bt],delete i[Ku],delete i[lg],delete i[os]}function vi(i){var s=i[$t];if(s)return s;for(var l=i.parentNode;l;){if(s=l[or]||l[$t]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=Ew(i);i!==null;){if(l=i[$t])return l;i=Ew(i)}return s}i=l,l=i.parentNode}return null}function Vr(i){if(i=i[$t]||i[or]){var s=i.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return i}return null}function Mr(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i.stateNode;throw Error(r(33))}function Rn(i){var s=i[Nd];return s||(s=i[Nd]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function kt(i){i[Ta]=!0}var Qu=new Set,Fo={};function Ir(i,s){Ei(i,s),Ei(i+"Capture",s)}function Ei(i,s){for(Fo[i]=s,i=0;i<s.length;i++)Qu.add(s[i])}var kd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Od={},ba={};function Vd(i){return vn.call(ba,i)?!0:vn.call(Od,i)?!1:kd.test(i)?ba[i]=!0:(Od[i]=!0,!1)}function us(i,s,l){if(Vd(s))if(l===null)i.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":i.removeAttribute(s);return;case"boolean":var c=s.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){i.removeAttribute(s);return}}i.setAttribute(s,""+l)}}function Lr(i,s,l){if(l===null)i.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(s);return}i.setAttribute(s,""+l)}}function cn(i,s,l,c){if(c===null)i.removeAttribute(l);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(l);return}i.setAttributeNS(s,l,""+c)}}var wa,Md;function Ti(i){if(wa===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);wa=s&&s[1]||"",Md=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wa+i+Md}var zo=!1;function jo(i,s){if(!i||zo)return"";zo=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(s){var ie=function(){throw Error()};if(Object.defineProperty(ie.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ie,[])}catch(Q){var K=Q}Reflect.construct(i,[],ie)}else{try{ie.call()}catch(Q){K=Q}i.call(ie.prototype)}}else{try{throw Error()}catch(Q){K=Q}(ie=i())&&typeof ie.catch=="function"&&ie.catch(function(){})}}catch(Q){if(Q&&K&&typeof Q.stack=="string")return[Q.stack,K.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),T=g[0],w=g[1];if(T&&w){var D=T.split(`
`),G=w.split(`
`);for(p=c=0;c<D.length&&!D[c].includes("DetermineComponentFrameRoot");)c++;for(;p<G.length&&!G[p].includes("DetermineComponentFrameRoot");)p++;if(c===D.length||p===G.length)for(c=D.length-1,p=G.length-1;1<=c&&0<=p&&D[c]!==G[p];)p--;for(;1<=c&&0<=p;c--,p--)if(D[c]!==G[p]){if(c!==1||p!==1)do if(c--,p--,0>p||D[c]!==G[p]){var te=`
`+D[c].replace(" at new "," at ");return i.displayName&&te.includes("<anonymous>")&&(te=te.replace("<anonymous>",i.displayName)),te}while(1<=c&&0<=p);break}}}finally{zo=!1,Error.prepareStackTrace=l}return(l=i?i.displayName||i.name:"")?Ti(l):""}function Yu(i){switch(i.tag){case 26:case 27:case 5:return Ti(i.type);case 16:return Ti("Lazy");case 13:return Ti("Suspense");case 19:return Ti("SuspenseList");case 0:case 15:return jo(i.type,!1);case 11:return jo(i.type.render,!1);case 1:return jo(i.type,!0);case 31:return Ti("Activity");default:return""}}function qo(i){try{var s="";do s+=Yu(i),i=i.return;while(i);return s}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Cn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Wu(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ug(i){var s=Wu(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),c=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,g=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Ho(i){i._valueTracker||(i._valueTracker=ug(i))}function Xu(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),c="";return i&&(c=Wu(i)?i.checked?"true":"false":i.value),i=c,i!==l?(s.setValue(i),!0):!1}function Ia(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var cg=/[\n"\\]/g;function Ft(i){return i.replace(cg,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function $n(i,s,l,c,p,g,T,w){i.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?i.type=T:i.removeAttribute("type"),s!=null?T==="number"?(s===0&&i.value===""||i.value!=s)&&(i.value=""+Cn(s)):i.value!==""+Cn(s)&&(i.value=""+Cn(s)):T!=="submit"&&T!=="reset"||i.removeAttribute("value"),s!=null?cs(i,T,Cn(s)):l!=null?cs(i,T,Cn(l)):c!=null&&i.removeAttribute("value"),p==null&&g!=null&&(i.defaultChecked=!!g),p!=null&&(i.checked=p&&typeof p!="function"&&typeof p!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?i.name=""+Cn(w):i.removeAttribute("name")}function Aa(i,s,l,c,p,g,T,w){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(i.type=g),s!=null||l!=null){if(!(g!=="submit"&&g!=="reset"||s!=null))return;l=l!=null?""+Cn(l):"",s=s!=null?""+Cn(s):l,w||s===i.value||(i.value=s),i.defaultValue=s}c=c??p,c=typeof c!="function"&&typeof c!="symbol"&&!!c,i.checked=w?i.checked:!!c,i.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(i.name=T)}function cs(i,s,l){s==="number"&&Ia(i.ownerDocument)===i||i.defaultValue===""+l||(i.defaultValue=""+l)}function bi(i,s,l,c){if(i=i.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=s.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&c&&(i[l].defaultSelected=!0)}else{for(l=""+Cn(l),s=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,c&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function it(i,s,l){if(s!=null&&(s=""+Cn(s),s!==i.value&&(i.value=s),l==null)){i.defaultValue!==s&&(i.defaultValue=s);return}i.defaultValue=l!=null?""+Cn(l):""}function Sa(i,s,l,c){if(s==null){if(c!=null){if(l!=null)throw Error(r(92));if(rt(c)){if(1<c.length)throw Error(r(93));c=c[0]}l=c}l==null&&(l=""),s=l}l=Cn(s),i.defaultValue=l,c=i.textContent,c===l&&c!==""&&c!==null&&(i.value=c)}function lr(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Ra=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ld(i,s,l){var c=s.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?c?i.setProperty(s,""):s==="float"?i.cssFloat="":i[s]="":c?i.setProperty(s,l):typeof l!="number"||l===0||Ra.has(s)?s==="float"?i.cssFloat=l:i[s]=(""+l).trim():i[s]=l+"px"}function Zu(i,s,l){if(s!=null&&typeof s!="object")throw Error(r(62));if(i=i.style,l!=null){for(var c in l)!l.hasOwnProperty(c)||s!=null&&s.hasOwnProperty(c)||(c.indexOf("--")===0?i.setProperty(c,""):c==="float"?i.cssFloat="":i[c]="");for(var p in s)c=s[p],s.hasOwnProperty(p)&&l[p]!==c&&Ld(i,p,c)}else for(var g in s)s.hasOwnProperty(g)&&Ld(i,g,s[g])}function Ju(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(i){return dg.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var wi=null;function ur(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ii=null,Ai=null;function ec(i){var s=Vr(i);if(s&&(i=s.stateNode)){var l=i[Bt]||null;e:switch(i=s.stateNode,s.type){case"input":if($n(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Ft(""+s)+'"][type="radio"]'),s=0;s<l.length;s++){var c=l[s];if(c!==i&&c.form===i.form){var p=c[Bt]||null;if(!p)throw Error(r(90));$n(c,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(s=0;s<l.length;s++)c=l[s],c.form===i.form&&Xu(c)}break e;case"textarea":it(i,l.value,l.defaultValue);break e;case"select":s=l.value,s!=null&&bi(i,!!l.multiple,s,!1)}}}var Ur=!1;function Ud(i,s,l){if(Ur)return i(s,l);Ur=!0;try{var c=i(s);return c}finally{if(Ur=!1,(Ii!==null||Ai!==null)&&(Nf(),Ii&&(s=Ii,i=Ai,Ai=Ii=null,ec(s),i)))for(s=0;s<i.length;s++)ec(i[s])}}function Ca(i,s){var l=i.stateNode;if(l===null)return null;var c=l[Bt]||null;if(c===null)return null;l=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(r(231,s,typeof l));return l}var Ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cr=!1;if(Ar)try{var xa={};Object.defineProperty(xa,"passive",{get:function(){cr=!0}}),window.addEventListener("test",xa,xa),window.removeEventListener("test",xa,xa)}catch{cr=!1}var Br=null,hs=null,Si=null;function tc(){if(Si)return Si;var i,s=hs,l=s.length,c,p="value"in Br?Br.value:Br.textContent,g=p.length;for(i=0;i<l&&s[i]===p[i];i++);var T=l-i;for(c=1;c<=T&&s[l-c]===p[g-c];c++);return Si=p.slice(i,1<c?1-c:void 0)}function Fr(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function zr(){return!0}function nc(){return!1}function en(i){function s(l,c,p,g,T){this._reactName=l,this._targetInst=p,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var w in i)i.hasOwnProperty(w)&&(l=i[w],this[w]=l?l(g):g[w]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?zr:nc,this.isPropagationStopped=nc,this}return y(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),s}var We={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$o=en(We),Da=y({},We,{view:0,detail:0}),Bd=en(Da),Ko,Qo,jr,Pa=y({},Da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oa,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==jr&&(jr&&i.type==="mousemove"?(Ko=i.screenX-jr.screenX,Qo=i.screenY-jr.screenY):Qo=Ko=0,jr=i),Ko)},movementY:function(i){return"movementY"in i?i.movementY:Qo}}),hr=en(Pa),Fd=y({},Pa,{dataTransfer:0}),fg=en(Fd),Na=y({},Da,{relatedTarget:0}),Yo=en(Na),rc=y({},We,{animationName:0,elapsedTime:0,pseudoElement:0}),Wo=en(rc),zd=y({},We,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Xo=en(zd),pg=y({},We,{data:0}),ic=en(pg),ka={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sc(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=qd[i])?!!s[i]:!1}function Oa(){return sc}var Hd=y({},Da,{key:function(i){if(i.key){var s=ka[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Fr(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?jd[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oa,charCode:function(i){return i.type==="keypress"?Fr(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Fr(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Zo=en(Hd),Gd=y({},Pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ac=en(Gd),Ri=y({},Da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oa}),$d=en(Ri),Kd=y({},We,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qd=en(Kd),Yd=y({},Pa,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Jo=en(Yd),xn=y({},We,{newState:0,oldState:0}),Wd=en(xn),Xd=[9,13,27,32],qr=Ar&&"CompositionEvent"in window,h=null;Ar&&"documentMode"in document&&(h=document.documentMode);var _=Ar&&"TextEvent"in window&&!h,E=Ar&&(!qr||h&&8<h&&11>=h),I=" ",F=!1;function X(i,s){switch(i){case"keyup":return Xd.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fe(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var je=!1;function Kt(i,s){switch(i){case"compositionend":return fe(s);case"keypress":return s.which!==32?null:(F=!0,I);case"textInput":return i=s.data,i===I&&F?null:i;default:return null}}function qe(i,s){if(je)return i==="compositionend"||!qr&&X(i,s)?(i=tc(),Si=hs=Br=null,je=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return E&&s.locale!=="ko"?null:s.data;default:return null}}var tn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qt(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!tn[i.type]:s==="textarea"}function Ci(i,s,l,c){Ii?Ai?Ai.push(c):Ai=[c]:Ii=c,s=Uf(s,"onChange"),0<s.length&&(l=new $o("onChange","change",null,l,c),i.push({event:l,listeners:s}))}var hn=null,Hr=null;function oc(i){cw(i,0)}function Zd(i){var s=Mr(i);if(Xu(s))return i}function PT(i,s){if(i==="change")return s}var NT=!1;if(Ar){var mg;if(Ar){var gg="oninput"in document;if(!gg){var kT=document.createElement("div");kT.setAttribute("oninput","return;"),gg=typeof kT.oninput=="function"}mg=gg}else mg=!1;NT=mg&&(!document.documentMode||9<document.documentMode)}function OT(){hn&&(hn.detachEvent("onpropertychange",VT),Hr=hn=null)}function VT(i){if(i.propertyName==="value"&&Zd(Hr)){var s=[];Ci(s,Hr,i,ur(i)),Ud(oc,s)}}function wD(i,s,l){i==="focusin"?(OT(),hn=s,Hr=l,hn.attachEvent("onpropertychange",VT)):i==="focusout"&&OT()}function ID(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Zd(Hr)}function AD(i,s){if(i==="click")return Zd(s)}function SD(i,s){if(i==="input"||i==="change")return Zd(s)}function RD(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Kn=typeof Object.is=="function"?Object.is:RD;function lc(i,s){if(Kn(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),c=Object.keys(s);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var p=l[c];if(!vn.call(s,p)||!Kn(i[p],s[p]))return!1}return!0}function MT(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function LT(i,s){var l=MT(i);i=0;for(var c;l;){if(l.nodeType===3){if(c=i+l.textContent.length,i<=s&&c>=s)return{node:l,offset:s-i};i=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=MT(l)}}function UT(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?UT(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function BT(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var s=Ia(i.document);s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=Ia(i.document)}return s}function yg(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}var CD=Ar&&"documentMode"in document&&11>=document.documentMode,el=null,_g=null,uc=null,vg=!1;function FT(i,s,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;vg||el==null||el!==Ia(c)||(c=el,"selectionStart"in c&&yg(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),uc&&lc(uc,c)||(uc=c,c=Uf(_g,"onSelect"),0<c.length&&(s=new $o("onSelect","select",null,s,l),i.push({event:s,listeners:c}),s.target=el)))}function Va(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var tl={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionrun:Va("Transition","TransitionRun"),transitionstart:Va("Transition","TransitionStart"),transitioncancel:Va("Transition","TransitionCancel"),transitionend:Va("Transition","TransitionEnd")},Eg={},zT={};Ar&&(zT=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function Ma(i){if(Eg[i])return Eg[i];if(!tl[i])return i;var s=tl[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in zT)return Eg[i]=s[l];return i}var jT=Ma("animationend"),qT=Ma("animationiteration"),HT=Ma("animationstart"),xD=Ma("transitionrun"),DD=Ma("transitionstart"),PD=Ma("transitioncancel"),GT=Ma("transitionend"),$T=new Map,Tg="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tg.push("scrollEnd");function Sr(i,s){$T.set(i,s),Ir(s,[i])}var KT=new WeakMap;function dr(i,s){if(typeof i=="object"&&i!==null){var l=KT.get(i);return l!==void 0?l:(s={value:i,source:s,stack:qo(s)},KT.set(i,s),s)}return{value:i,source:s,stack:qo(s)}}var fr=[],nl=0,bg=0;function Jd(){for(var i=nl,s=bg=nl=0;s<i;){var l=fr[s];fr[s++]=null;var c=fr[s];fr[s++]=null;var p=fr[s];fr[s++]=null;var g=fr[s];if(fr[s++]=null,c!==null&&p!==null){var T=c.pending;T===null?p.next=p:(p.next=T.next,T.next=p),c.pending=p}g!==0&&QT(l,p,g)}}function ef(i,s,l,c){fr[nl++]=i,fr[nl++]=s,fr[nl++]=l,fr[nl++]=c,bg|=c,i.lanes|=c,i=i.alternate,i!==null&&(i.lanes|=c)}function wg(i,s,l,c){return ef(i,s,l,c),tf(i)}function rl(i,s){return ef(i,null,null,s),tf(i)}function QT(i,s,l){i.lanes|=l;var c=i.alternate;c!==null&&(c.lanes|=l);for(var p=!1,g=i.return;g!==null;)g.childLanes|=l,c=g.alternate,c!==null&&(c.childLanes|=l),g.tag===22&&(i=g.stateNode,i===null||i._visibility&1||(p=!0)),i=g,g=g.return;return i.tag===3?(g=i.stateNode,p&&s!==null&&(p=31-En(l),i=g.hiddenUpdates,c=i[p],c===null?i[p]=[s]:c.push(s),s.lane=l|536870912),g):null}function tf(i){if(50<Oc)throw Oc=0,xy=null,Error(r(185));for(var s=i.return;s!==null;)i=s,s=i.return;return i.tag===3?i.stateNode:null}var il={};function ND(i,s,l,c){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(i,s,l,c){return new ND(i,s,l,c)}function Ig(i){return i=i.prototype,!(!i||!i.isReactComponent)}function xi(i,s){var l=i.alternate;return l===null?(l=Qn(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&65011712,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l.refCleanup=i.refCleanup,l}function YT(i,s){i.flags&=65011714;var l=i.alternate;return l===null?(i.childLanes=0,i.lanes=s,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,s=l.dependencies,i.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),i}function nf(i,s,l,c,p,g){var T=0;if(c=i,typeof i=="function")Ig(i)&&(T=1);else if(typeof i=="string")T=OP(i,l,be.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case C:return i=Qn(31,l,s,p),i.elementType=C,i.lanes=g,i;case x:return La(l.children,p,g,s);case U:T=8,p|=24;break;case M:return i=Qn(12,l,s,p|2),i.elementType=M,i.lanes=g,i;case re:return i=Qn(13,l,s,p),i.elementType=re,i.lanes=g,i;case J:return i=Qn(19,l,s,p),i.elementType=J,i.lanes=g,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case H:case $:T=10;break e;case Z:T=9;break e;case le:T=11;break e;case R:T=14;break e;case S:T=16,c=null;break e}T=29,l=Error(r(130,i===null?"null":typeof i,"")),c=null}return s=Qn(T,l,s,p),s.elementType=i,s.type=c,s.lanes=g,s}function La(i,s,l,c){return i=Qn(7,i,c,s),i.lanes=l,i}function Ag(i,s,l){return i=Qn(6,i,null,s),i.lanes=l,i}function Sg(i,s,l){return s=Qn(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}var sl=[],al=0,rf=null,sf=0,pr=[],mr=0,Ua=null,Di=1,Pi="";function Ba(i,s){sl[al++]=sf,sl[al++]=rf,rf=i,sf=s}function WT(i,s,l){pr[mr++]=Di,pr[mr++]=Pi,pr[mr++]=Ua,Ua=i;var c=Di;i=Pi;var p=32-En(c)-1;c&=~(1<<p),l+=1;var g=32-En(s)+p;if(30<g){var T=p-p%5;g=(c&(1<<T)-1).toString(32),c>>=T,p-=T,Di=1<<32-En(s)+p|l<<p|c,Pi=g+i}else Di=1<<g|l<<p|c,Pi=i}function Rg(i){i.return!==null&&(Ba(i,1),WT(i,1,0))}function Cg(i){for(;i===rf;)rf=sl[--al],sl[al]=null,sf=sl[--al],sl[al]=null;for(;i===Ua;)Ua=pr[--mr],pr[mr]=null,Pi=pr[--mr],pr[mr]=null,Di=pr[--mr],pr[mr]=null}var Dn=null,Ct=null,Ye=!1,Fa=null,Gr=!1,xg=Error(r(519));function za(i){var s=Error(r(418,""));throw dc(dr(s,i)),xg}function XT(i){var s=i.stateNode,l=i.type,c=i.memoizedProps;switch(s[$t]=i,s[Bt]=c,l){case"dialog":Ue("cancel",s),Ue("close",s);break;case"iframe":case"object":case"embed":Ue("load",s);break;case"video":case"audio":for(l=0;l<Mc.length;l++)Ue(Mc[l],s);break;case"source":Ue("error",s);break;case"img":case"image":case"link":Ue("error",s),Ue("load",s);break;case"details":Ue("toggle",s);break;case"input":Ue("invalid",s),Aa(s,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Ho(s);break;case"select":Ue("invalid",s);break;case"textarea":Ue("invalid",s),Sa(s,c.value,c.defaultValue,c.children),Ho(s)}l=c.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||s.textContent===""+l||c.suppressHydrationWarning===!0||pw(s.textContent,l)?(c.popover!=null&&(Ue("beforetoggle",s),Ue("toggle",s)),c.onScroll!=null&&Ue("scroll",s),c.onScrollEnd!=null&&Ue("scrollend",s),c.onClick!=null&&(s.onclick=Bf),s=!0):s=!1,s||za(i)}function ZT(i){for(Dn=i.return;Dn;)switch(Dn.tag){case 5:case 13:Gr=!1;return;case 27:case 3:Gr=!0;return;default:Dn=Dn.return}}function cc(i){if(i!==Dn)return!1;if(!Ye)return ZT(i),Ye=!0,!1;var s=i.tag,l;if((l=s!==3&&s!==27)&&((l=s===5)&&(l=i.type,l=!(l!=="form"&&l!=="button")||Gy(i.type,i.memoizedProps)),l=!l),l&&Ct&&za(i),ZT(i),s===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8)if(l=i.data,l==="/$"){if(s===0){Ct=Cr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++;i=i.nextSibling}Ct=null}}else s===27?(s=Ct,Rs(i.type)?(i=Yy,Yy=null,Ct=i):Ct=s):Ct=Dn?Cr(i.stateNode.nextSibling):null;return!0}function hc(){Ct=Dn=null,Ye=!1}function JT(){var i=Fa;return i!==null&&(Bn===null?Bn=i:Bn.push.apply(Bn,i),Fa=null),i}function dc(i){Fa===null?Fa=[i]:Fa.push(i)}var Dg=se(null),ja=null,Ni=null;function ds(i,s,l){ce(Dg,s._currentValue),s._currentValue=l}function ki(i){i._currentValue=Dg.current,de(Dg)}function Pg(i,s,l){for(;i!==null;){var c=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),i===l)break;i=i.return}}function Ng(i,s,l,c){var p=i.child;for(p!==null&&(p.return=i);p!==null;){var g=p.dependencies;if(g!==null){var T=p.child;g=g.firstContext;e:for(;g!==null;){var w=g;g=p;for(var D=0;D<s.length;D++)if(w.context===s[D]){g.lanes|=l,w=g.alternate,w!==null&&(w.lanes|=l),Pg(g.return,l,i),c||(T=null);break e}g=w.next}}else if(p.tag===18){if(T=p.return,T===null)throw Error(r(341));T.lanes|=l,g=T.alternate,g!==null&&(g.lanes|=l),Pg(T,l,i),T=null}else T=p.child;if(T!==null)T.return=p;else for(T=p;T!==null;){if(T===i){T=null;break}if(p=T.sibling,p!==null){p.return=T.return,T=p;break}T=T.return}p=T}}function fc(i,s,l,c){i=null;for(var p=s,g=!1;p!==null;){if(!g){if((p.flags&524288)!==0)g=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var T=p.alternate;if(T===null)throw Error(r(387));if(T=T.memoizedProps,T!==null){var w=p.type;Kn(p.pendingProps.value,T.value)||(i!==null?i.push(w):i=[w])}}else if(p===Tt.current){if(T=p.alternate,T===null)throw Error(r(387));T.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(i!==null?i.push(jc):i=[jc])}p=p.return}i!==null&&Ng(s,i,l,c),s.flags|=262144}function af(i){for(i=i.firstContext;i!==null;){if(!Kn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function qa(i){ja=i,Ni=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function Tn(i){return e0(ja,i)}function of(i,s){return ja===null&&qa(i),e0(i,s)}function e0(i,s){var l=s._currentValue;if(s={context:s,memoizedValue:l,next:null},Ni===null){if(i===null)throw Error(r(308));Ni=s,i.dependencies={lanes:0,firstContext:s},i.flags|=524288}else Ni=Ni.next=s;return l}var kD=typeof AbortController<"u"?AbortController:function(){var i=[],s=this.signal={aborted:!1,addEventListener:function(l,c){i.push(c)}};this.abort=function(){s.aborted=!0,i.forEach(function(l){return l()})}},OD=n.unstable_scheduleCallback,VD=n.unstable_NormalPriority,Yt={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kg(){return{controller:new kD,data:new Map,refCount:0}}function pc(i){i.refCount--,i.refCount===0&&OD(VD,function(){i.controller.abort()})}var mc=null,Og=0,ol=0,ll=null;function MD(i,s){if(mc===null){var l=mc=[];Og=0,ol=My(),ll={status:"pending",value:void 0,then:function(c){l.push(c)}}}return Og++,s.then(t0,t0),s}function t0(){if(--Og===0&&mc!==null){ll!==null&&(ll.status="fulfilled");var i=mc;mc=null,ol=0,ll=null;for(var s=0;s<i.length;s++)(0,i[s])()}}function LD(i,s){var l=[],c={status:"pending",value:null,reason:null,then:function(p){l.push(p)}};return i.then(function(){c.status="fulfilled",c.value=s;for(var p=0;p<l.length;p++)(0,l[p])(s)},function(p){for(c.status="rejected",c.reason=p,p=0;p<l.length;p++)(0,l[p])(void 0)}),c}var n0=ee.S;ee.S=function(i,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&MD(i,s),n0!==null&&n0(i,s)};var Ha=se(null);function Vg(){var i=Ha.current;return i!==null?i:ut.pooledCache}function lf(i,s){s===null?ce(Ha,Ha.current):ce(Ha,s.pool)}function r0(){var i=Vg();return i===null?null:{parent:Yt._currentValue,pool:i}}var gc=Error(r(460)),i0=Error(r(474)),uf=Error(r(542)),Mg={then:function(){}};function s0(i){return i=i.status,i==="fulfilled"||i==="rejected"}function cf(){}function a0(i,s,l){switch(l=i[l],l===void 0?i.push(s):l!==s&&(s.then(cf,cf),s=l),s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,l0(i),i;default:if(typeof s.status=="string")s.then(cf,cf);else{if(i=ut,i!==null&&100<i.shellSuspendCounter)throw Error(r(482));i=s,i.status="pending",i.then(function(c){if(s.status==="pending"){var p=s;p.status="fulfilled",p.value=c}},function(c){if(s.status==="pending"){var p=s;p.status="rejected",p.reason=c}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,l0(i),i}throw yc=s,gc}}var yc=null;function o0(){if(yc===null)throw Error(r(459));var i=yc;return yc=null,i}function l0(i){if(i===gc||i===uf)throw Error(r(483))}var fs=!1;function Lg(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ug(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function ps(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function ms(i,s,l){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(Je&2)!==0){var p=c.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),c.pending=s,s=tf(i),QT(i,null,l),s}return ef(i,c,s,l),tf(i)}function _c(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194048)!==0)){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,$u(i,l)}}function Bg(i,s){var l=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var p=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var T={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};g===null?p=g=T:g=g.next=T,l=l.next}while(l!==null);g===null?p=g=s:g=g.next=s}else p=g=s;l={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}var Fg=!1;function vc(){if(Fg){var i=ll;if(i!==null)throw i}}function Ec(i,s,l,c){Fg=!1;var p=i.updateQueue;fs=!1;var g=p.firstBaseUpdate,T=p.lastBaseUpdate,w=p.shared.pending;if(w!==null){p.shared.pending=null;var D=w,G=D.next;D.next=null,T===null?g=G:T.next=G,T=D;var te=i.alternate;te!==null&&(te=te.updateQueue,w=te.lastBaseUpdate,w!==T&&(w===null?te.firstBaseUpdate=G:w.next=G,te.lastBaseUpdate=D))}if(g!==null){var ie=p.baseState;T=0,te=G=D=null,w=g;do{var K=w.lane&-536870913,Q=K!==w.lane;if(Q?(He&K)===K:(c&K)===K){K!==0&&K===ol&&(Fg=!0),te!==null&&(te=te.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var xe=i,Se=w;K=s;var ot=l;switch(Se.tag){case 1:if(xe=Se.payload,typeof xe=="function"){ie=xe.call(ot,ie,K);break e}ie=xe;break e;case 3:xe.flags=xe.flags&-65537|128;case 0:if(xe=Se.payload,K=typeof xe=="function"?xe.call(ot,ie,K):xe,K==null)break e;ie=y({},ie,K);break e;case 2:fs=!0}}K=w.callback,K!==null&&(i.flags|=64,Q&&(i.flags|=8192),Q=p.callbacks,Q===null?p.callbacks=[K]:Q.push(K))}else Q={lane:K,tag:w.tag,payload:w.payload,callback:w.callback,next:null},te===null?(G=te=Q,D=ie):te=te.next=Q,T|=K;if(w=w.next,w===null){if(w=p.shared.pending,w===null)break;Q=w,w=Q.next,Q.next=null,p.lastBaseUpdate=Q,p.shared.pending=null}}while(!0);te===null&&(D=ie),p.baseState=D,p.firstBaseUpdate=G,p.lastBaseUpdate=te,g===null&&(p.shared.lanes=0),ws|=T,i.lanes=T,i.memoizedState=ie}}function u0(i,s){if(typeof i!="function")throw Error(r(191,i));i.call(s)}function c0(i,s){var l=i.callbacks;if(l!==null)for(i.callbacks=null,i=0;i<l.length;i++)u0(l[i],s)}var ul=se(null),hf=se(0);function h0(i,s){i=Fi,ce(hf,i),ce(ul,s),Fi=i|s.baseLanes}function zg(){ce(hf,Fi),ce(ul,ul.current)}function jg(){Fi=hf.current,de(ul),de(hf)}var gs=0,Ve=null,st=null,zt=null,df=!1,cl=!1,Ga=!1,ff=0,Tc=0,hl=null,UD=0;function Ot(){throw Error(r(321))}function qg(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Kn(i[l],s[l]))return!1;return!0}function Hg(i,s,l,c,p,g){return gs=g,Ve=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,ee.H=i===null||i.memoizedState===null?Q0:Y0,Ga=!1,g=l(c,p),Ga=!1,cl&&(g=f0(s,l,c,p)),d0(i),g}function d0(i){ee.H=vf;var s=st!==null&&st.next!==null;if(gs=0,zt=st=Ve=null,df=!1,Tc=0,hl=null,s)throw Error(r(300));i===null||nn||(i=i.dependencies,i!==null&&af(i)&&(nn=!0))}function f0(i,s,l,c){Ve=i;var p=0;do{if(cl&&(hl=null),Tc=0,cl=!1,25<=p)throw Error(r(301));if(p+=1,zt=st=null,i.updateQueue!=null){var g=i.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}ee.H=GD,g=s(l,c)}while(cl);return g}function BD(){var i=ee.H,s=i.useState()[0];return s=typeof s.then=="function"?bc(s):s,i=i.useState()[0],(st!==null?st.memoizedState:null)!==i&&(Ve.flags|=1024),s}function Gg(){var i=ff!==0;return ff=0,i}function $g(i,s,l){s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~l}function Kg(i){if(df){for(i=i.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}df=!1}gs=0,zt=st=Ve=null,cl=!1,Tc=ff=0,hl=null}function Ln(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?Ve.memoizedState=zt=i:zt=zt.next=i,zt}function jt(){if(st===null){var i=Ve.alternate;i=i!==null?i.memoizedState:null}else i=st.next;var s=zt===null?Ve.memoizedState:zt.next;if(s!==null)zt=s,st=i;else{if(i===null)throw Ve.alternate===null?Error(r(467)):Error(r(310));st=i,i={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},zt===null?Ve.memoizedState=zt=i:zt=zt.next=i}return zt}function Qg(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bc(i){var s=Tc;return Tc+=1,hl===null&&(hl=[]),i=a0(hl,i,s),s=Ve,(zt===null?s.memoizedState:zt.next)===null&&(s=s.alternate,ee.H=s===null||s.memoizedState===null?Q0:Y0),i}function pf(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return bc(i);if(i.$$typeof===$)return Tn(i)}throw Error(r(438,String(i)))}function Yg(i){var s=null,l=Ve.updateQueue;if(l!==null&&(s=l.memoCache),s==null){var c=Ve.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(s={data:c.data.map(function(p){return p.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),l===null&&(l=Qg(),Ve.updateQueue=l),l.memoCache=s,l=s.data[s.index],l===void 0)for(l=s.data[s.index]=Array(i),c=0;c<i;c++)l[c]=O;return s.index++,l}function Oi(i,s){return typeof s=="function"?s(i):s}function mf(i){var s=jt();return Wg(s,st,i)}function Wg(i,s,l){var c=i.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=l;var p=i.baseQueue,g=c.pending;if(g!==null){if(p!==null){var T=p.next;p.next=g.next,g.next=T}s.baseQueue=p=g,c.pending=null}if(g=i.baseState,p===null)i.memoizedState=g;else{s=p.next;var w=T=null,D=null,G=s,te=!1;do{var ie=G.lane&-536870913;if(ie!==G.lane?(He&ie)===ie:(gs&ie)===ie){var K=G.revertLane;if(K===0)D!==null&&(D=D.next={lane:0,revertLane:0,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),ie===ol&&(te=!0);else if((gs&K)===K){G=G.next,K===ol&&(te=!0);continue}else ie={lane:0,revertLane:G.revertLane,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},D===null?(w=D=ie,T=g):D=D.next=ie,Ve.lanes|=K,ws|=K;ie=G.action,Ga&&l(g,ie),g=G.hasEagerState?G.eagerState:l(g,ie)}else K={lane:ie,revertLane:G.revertLane,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},D===null?(w=D=K,T=g):D=D.next=K,Ve.lanes|=ie,ws|=ie;G=G.next}while(G!==null&&G!==s);if(D===null?T=g:D.next=w,!Kn(g,i.memoizedState)&&(nn=!0,te&&(l=ll,l!==null)))throw l;i.memoizedState=g,i.baseState=T,i.baseQueue=D,c.lastRenderedState=g}return p===null&&(c.lanes=0),[i.memoizedState,c.dispatch]}function Xg(i){var s=jt(),l=s.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=i;var c=l.dispatch,p=l.pending,g=s.memoizedState;if(p!==null){l.pending=null;var T=p=p.next;do g=i(g,T.action),T=T.next;while(T!==p);Kn(g,s.memoizedState)||(nn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,c]}function p0(i,s,l){var c=Ve,p=jt(),g=Ye;if(g){if(l===void 0)throw Error(r(407));l=l()}else l=s();var T=!Kn((st||p).memoizedState,l);T&&(p.memoizedState=l,nn=!0),p=p.queue;var w=y0.bind(null,c,p,i);if(wc(2048,8,w,[i]),p.getSnapshot!==s||T||zt!==null&&zt.memoizedState.tag&1){if(c.flags|=2048,dl(9,gf(),g0.bind(null,c,p,l,s),null),ut===null)throw Error(r(349));g||(gs&124)!==0||m0(c,s,l)}return l}function m0(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=Ve.updateQueue,s===null?(s=Qg(),Ve.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function g0(i,s,l,c){s.value=l,s.getSnapshot=c,_0(s)&&v0(i)}function y0(i,s,l){return l(function(){_0(s)&&v0(i)})}function _0(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Kn(i,l)}catch{return!0}}function v0(i){var s=rl(i,2);s!==null&&Jn(s,i,2)}function Zg(i){var s=Ln();if(typeof i=="function"){var l=i;if(i=l(),Ga){Gn(!0);try{l()}finally{Gn(!1)}}}return s.memoizedState=s.baseState=i,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:i},s}function E0(i,s,l,c){return i.baseState=l,Wg(i,st,typeof c=="function"?c:Oi)}function FD(i,s,l,c,p){if(_f(i))throw Error(r(485));if(i=s.action,i!==null){var g={payload:p,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){g.listeners.push(T)}};ee.T!==null?l(!0):g.isTransition=!1,c(g),l=s.pending,l===null?(g.next=s.pending=g,T0(s,g)):(g.next=l.next,s.pending=l.next=g)}}function T0(i,s){var l=s.action,c=s.payload,p=i.state;if(s.isTransition){var g=ee.T,T={};ee.T=T;try{var w=l(p,c),D=ee.S;D!==null&&D(T,w),b0(i,s,w)}catch(G){Jg(i,s,G)}finally{ee.T=g}}else try{g=l(p,c),b0(i,s,g)}catch(G){Jg(i,s,G)}}function b0(i,s,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(c){w0(i,s,c)},function(c){return Jg(i,s,c)}):w0(i,s,l)}function w0(i,s,l){s.status="fulfilled",s.value=l,I0(s),i.state=l,s=i.pending,s!==null&&(l=s.next,l===s?i.pending=null:(l=l.next,s.next=l,T0(i,l)))}function Jg(i,s,l){var c=i.pending;if(i.pending=null,c!==null){c=c.next;do s.status="rejected",s.reason=l,I0(s),s=s.next;while(s!==c)}i.action=null}function I0(i){i=i.listeners;for(var s=0;s<i.length;s++)(0,i[s])()}function A0(i,s){return s}function S0(i,s){if(Ye){var l=ut.formState;if(l!==null){e:{var c=Ve;if(Ye){if(Ct){t:{for(var p=Ct,g=Gr;p.nodeType!==8;){if(!g){p=null;break t}if(p=Cr(p.nextSibling),p===null){p=null;break t}}g=p.data,p=g==="F!"||g==="F"?p:null}if(p){Ct=Cr(p.nextSibling),c=p.data==="F!";break e}}za(c)}c=!1}c&&(s=l[0])}}return l=Ln(),l.memoizedState=l.baseState=s,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:A0,lastRenderedState:s},l.queue=c,l=G0.bind(null,Ve,c),c.dispatch=l,c=Zg(!1),g=iy.bind(null,Ve,!1,c.queue),c=Ln(),p={state:s,dispatch:null,action:i,pending:null},c.queue=p,l=FD.bind(null,Ve,p,g,l),p.dispatch=l,c.memoizedState=i,[s,l,!1]}function R0(i){var s=jt();return C0(s,st,i)}function C0(i,s,l){if(s=Wg(i,s,A0)[0],i=mf(Oi)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var c=bc(s)}catch(T){throw T===gc?uf:T}else c=s;s=jt();var p=s.queue,g=p.dispatch;return l!==s.memoizedState&&(Ve.flags|=2048,dl(9,gf(),zD.bind(null,p,l),null)),[c,g,i]}function zD(i,s){i.action=s}function x0(i){var s=jt(),l=st;if(l!==null)return C0(s,l,i);jt(),s=s.memoizedState,l=jt();var c=l.queue.dispatch;return l.memoizedState=i,[s,c,!1]}function dl(i,s,l,c){return i={tag:i,create:l,deps:c,inst:s,next:null},s=Ve.updateQueue,s===null&&(s=Qg(),Ve.updateQueue=s),l=s.lastEffect,l===null?s.lastEffect=i.next=i:(c=l.next,l.next=i,i.next=c,s.lastEffect=i),i}function gf(){return{destroy:void 0,resource:void 0}}function D0(){return jt().memoizedState}function yf(i,s,l,c){var p=Ln();c=c===void 0?null:c,Ve.flags|=i,p.memoizedState=dl(1|s,gf(),l,c)}function wc(i,s,l,c){var p=jt();c=c===void 0?null:c;var g=p.memoizedState.inst;st!==null&&c!==null&&qg(c,st.memoizedState.deps)?p.memoizedState=dl(s,g,l,c):(Ve.flags|=i,p.memoizedState=dl(1|s,g,l,c))}function P0(i,s){yf(8390656,8,i,s)}function N0(i,s){wc(2048,8,i,s)}function k0(i,s){return wc(4,2,i,s)}function O0(i,s){return wc(4,4,i,s)}function V0(i,s){if(typeof s=="function"){i=i();var l=s(i);return function(){typeof l=="function"?l():s(null)}}if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function M0(i,s,l){l=l!=null?l.concat([i]):null,wc(4,4,V0.bind(null,s,i),l)}function ey(){}function L0(i,s){var l=jt();s=s===void 0?null:s;var c=l.memoizedState;return s!==null&&qg(s,c[1])?c[0]:(l.memoizedState=[i,s],i)}function U0(i,s){var l=jt();s=s===void 0?null:s;var c=l.memoizedState;if(s!==null&&qg(s,c[1]))return c[0];if(c=i(),Ga){Gn(!0);try{i()}finally{Gn(!1)}}return l.memoizedState=[c,s],c}function ty(i,s,l){return l===void 0||(gs&1073741824)!==0?i.memoizedState=s:(i.memoizedState=l,i=zb(),Ve.lanes|=i,ws|=i,l)}function B0(i,s,l,c){return Kn(l,s)?l:ul.current!==null?(i=ty(i,l,c),Kn(i,s)||(nn=!0),i):(gs&42)===0?(nn=!0,i.memoizedState=l):(i=zb(),Ve.lanes|=i,ws|=i,s)}function F0(i,s,l,c,p){var g=he.p;he.p=g!==0&&8>g?g:8;var T=ee.T,w={};ee.T=w,iy(i,!1,s,l);try{var D=p(),G=ee.S;if(G!==null&&G(w,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var te=LD(D,c);Ic(i,s,te,Zn(i))}else Ic(i,s,c,Zn(i))}catch(ie){Ic(i,s,{then:function(){},status:"rejected",reason:ie},Zn())}finally{he.p=g,ee.T=T}}function jD(){}function ny(i,s,l,c){if(i.tag!==5)throw Error(r(476));var p=z0(i).queue;F0(i,p,s,Ee,l===null?jD:function(){return j0(i),l(c)})}function z0(i){var s=i.memoizedState;if(s!==null)return s;s={memoizedState:Ee,baseState:Ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:Ee},next:null};var l={};return s.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:l},next:null},i.memoizedState=s,i=i.alternate,i!==null&&(i.memoizedState=s),s}function j0(i){var s=z0(i).next.queue;Ic(i,s,{},Zn())}function ry(){return Tn(jc)}function q0(){return jt().memoizedState}function H0(){return jt().memoizedState}function qD(i){for(var s=i.return;s!==null;){switch(s.tag){case 24:case 3:var l=Zn();i=ps(l);var c=ms(s,i,l);c!==null&&(Jn(c,s,l),_c(c,s,l)),s={cache:kg()},i.payload=s;return}s=s.return}}function HD(i,s,l){var c=Zn();l={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},_f(i)?$0(s,l):(l=wg(i,s,l,c),l!==null&&(Jn(l,i,c),K0(l,s,c)))}function G0(i,s,l){var c=Zn();Ic(i,s,l,c)}function Ic(i,s,l,c){var p={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(_f(i))$0(s,p);else{var g=i.alternate;if(i.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var T=s.lastRenderedState,w=g(T,l);if(p.hasEagerState=!0,p.eagerState=w,Kn(w,T))return ef(i,s,p,0),ut===null&&Jd(),!1}catch{}finally{}if(l=wg(i,s,p,c),l!==null)return Jn(l,i,c),K0(l,s,c),!0}return!1}function iy(i,s,l,c){if(c={lane:2,revertLane:My(),action:c,hasEagerState:!1,eagerState:null,next:null},_f(i)){if(s)throw Error(r(479))}else s=wg(i,l,c,2),s!==null&&Jn(s,i,2)}function _f(i){var s=i.alternate;return i===Ve||s!==null&&s===Ve}function $0(i,s){cl=df=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function K0(i,s,l){if((l&4194048)!==0){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,$u(i,l)}}var vf={readContext:Tn,use:pf,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useLayoutEffect:Ot,useInsertionEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useSyncExternalStore:Ot,useId:Ot,useHostTransitionStatus:Ot,useFormState:Ot,useActionState:Ot,useOptimistic:Ot,useMemoCache:Ot,useCacheRefresh:Ot},Q0={readContext:Tn,use:pf,useCallback:function(i,s){return Ln().memoizedState=[i,s===void 0?null:s],i},useContext:Tn,useEffect:P0,useImperativeHandle:function(i,s,l){l=l!=null?l.concat([i]):null,yf(4194308,4,V0.bind(null,s,i),l)},useLayoutEffect:function(i,s){return yf(4194308,4,i,s)},useInsertionEffect:function(i,s){yf(4,2,i,s)},useMemo:function(i,s){var l=Ln();s=s===void 0?null:s;var c=i();if(Ga){Gn(!0);try{i()}finally{Gn(!1)}}return l.memoizedState=[c,s],c},useReducer:function(i,s,l){var c=Ln();if(l!==void 0){var p=l(s);if(Ga){Gn(!0);try{l(s)}finally{Gn(!1)}}}else p=s;return c.memoizedState=c.baseState=p,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:p},c.queue=i,i=i.dispatch=HD.bind(null,Ve,i),[c.memoizedState,i]},useRef:function(i){var s=Ln();return i={current:i},s.memoizedState=i},useState:function(i){i=Zg(i);var s=i.queue,l=G0.bind(null,Ve,s);return s.dispatch=l,[i.memoizedState,l]},useDebugValue:ey,useDeferredValue:function(i,s){var l=Ln();return ty(l,i,s)},useTransition:function(){var i=Zg(!1);return i=F0.bind(null,Ve,i.queue,!0,!1),Ln().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,s,l){var c=Ve,p=Ln();if(Ye){if(l===void 0)throw Error(r(407));l=l()}else{if(l=s(),ut===null)throw Error(r(349));(He&124)!==0||m0(c,s,l)}p.memoizedState=l;var g={value:l,getSnapshot:s};return p.queue=g,P0(y0.bind(null,c,g,i),[i]),c.flags|=2048,dl(9,gf(),g0.bind(null,c,g,l,s),null),l},useId:function(){var i=Ln(),s=ut.identifierPrefix;if(Ye){var l=Pi,c=Di;l=(c&~(1<<32-En(c)-1)).toString(32)+l,s="«"+s+"R"+l,l=ff++,0<l&&(s+="H"+l.toString(32)),s+="»"}else l=UD++,s="«"+s+"r"+l.toString(32)+"»";return i.memoizedState=s},useHostTransitionStatus:ry,useFormState:S0,useActionState:S0,useOptimistic:function(i){var s=Ln();s.memoizedState=s.baseState=i;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=l,s=iy.bind(null,Ve,!0,l),l.dispatch=s,[i,s]},useMemoCache:Yg,useCacheRefresh:function(){return Ln().memoizedState=qD.bind(null,Ve)}},Y0={readContext:Tn,use:pf,useCallback:L0,useContext:Tn,useEffect:N0,useImperativeHandle:M0,useInsertionEffect:k0,useLayoutEffect:O0,useMemo:U0,useReducer:mf,useRef:D0,useState:function(){return mf(Oi)},useDebugValue:ey,useDeferredValue:function(i,s){var l=jt();return B0(l,st.memoizedState,i,s)},useTransition:function(){var i=mf(Oi)[0],s=jt().memoizedState;return[typeof i=="boolean"?i:bc(i),s]},useSyncExternalStore:p0,useId:q0,useHostTransitionStatus:ry,useFormState:R0,useActionState:R0,useOptimistic:function(i,s){var l=jt();return E0(l,st,i,s)},useMemoCache:Yg,useCacheRefresh:H0},GD={readContext:Tn,use:pf,useCallback:L0,useContext:Tn,useEffect:N0,useImperativeHandle:M0,useInsertionEffect:k0,useLayoutEffect:O0,useMemo:U0,useReducer:Xg,useRef:D0,useState:function(){return Xg(Oi)},useDebugValue:ey,useDeferredValue:function(i,s){var l=jt();return st===null?ty(l,i,s):B0(l,st.memoizedState,i,s)},useTransition:function(){var i=Xg(Oi)[0],s=jt().memoizedState;return[typeof i=="boolean"?i:bc(i),s]},useSyncExternalStore:p0,useId:q0,useHostTransitionStatus:ry,useFormState:x0,useActionState:x0,useOptimistic:function(i,s){var l=jt();return st!==null?E0(l,st,i,s):(l.baseState=i,[i,l.queue.dispatch])},useMemoCache:Yg,useCacheRefresh:H0},fl=null,Ac=0;function Ef(i){var s=Ac;return Ac+=1,fl===null&&(fl=[]),a0(fl,i,s)}function Sc(i,s){s=s.props.ref,i.ref=s!==void 0?s:null}function Tf(i,s){throw s.$$typeof===v?Error(r(525)):(i=Object.prototype.toString.call(s),Error(r(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i)))}function W0(i){var s=i._init;return s(i._payload)}function X0(i){function s(B,V){if(i){var q=B.deletions;q===null?(B.deletions=[V],B.flags|=16):q.push(V)}}function l(B,V){if(!i)return null;for(;V!==null;)s(B,V),V=V.sibling;return null}function c(B){for(var V=new Map;B!==null;)B.key!==null?V.set(B.key,B):V.set(B.index,B),B=B.sibling;return V}function p(B,V){return B=xi(B,V),B.index=0,B.sibling=null,B}function g(B,V,q){return B.index=q,i?(q=B.alternate,q!==null?(q=q.index,q<V?(B.flags|=67108866,V):q):(B.flags|=67108866,V)):(B.flags|=1048576,V)}function T(B){return i&&B.alternate===null&&(B.flags|=67108866),B}function w(B,V,q,ne){return V===null||V.tag!==6?(V=Ag(q,B.mode,ne),V.return=B,V):(V=p(V,q),V.return=B,V)}function D(B,V,q,ne){var _e=q.type;return _e===x?te(B,V,q.props.children,ne,q.key):V!==null&&(V.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===S&&W0(_e)===V.type)?(V=p(V,q.props),Sc(V,q),V.return=B,V):(V=nf(q.type,q.key,q.props,null,B.mode,ne),Sc(V,q),V.return=B,V)}function G(B,V,q,ne){return V===null||V.tag!==4||V.stateNode.containerInfo!==q.containerInfo||V.stateNode.implementation!==q.implementation?(V=Sg(q,B.mode,ne),V.return=B,V):(V=p(V,q.children||[]),V.return=B,V)}function te(B,V,q,ne,_e){return V===null||V.tag!==7?(V=La(q,B.mode,ne,_e),V.return=B,V):(V=p(V,q),V.return=B,V)}function ie(B,V,q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Ag(""+V,B.mode,q),V.return=B,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case b:return q=nf(V.type,V.key,V.props,null,B.mode,q),Sc(q,V),q.return=B,q;case A:return V=Sg(V,B.mode,q),V.return=B,V;case S:var ne=V._init;return V=ne(V._payload),ie(B,V,q)}if(rt(V)||L(V))return V=La(V,B.mode,q,null),V.return=B,V;if(typeof V.then=="function")return ie(B,Ef(V),q);if(V.$$typeof===$)return ie(B,of(B,V),q);Tf(B,V)}return null}function K(B,V,q,ne){var _e=V!==null?V.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return _e!==null?null:w(B,V,""+q,ne);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case b:return q.key===_e?D(B,V,q,ne):null;case A:return q.key===_e?G(B,V,q,ne):null;case S:return _e=q._init,q=_e(q._payload),K(B,V,q,ne)}if(rt(q)||L(q))return _e!==null?null:te(B,V,q,ne,null);if(typeof q.then=="function")return K(B,V,Ef(q),ne);if(q.$$typeof===$)return K(B,V,of(B,q),ne);Tf(B,q)}return null}function Q(B,V,q,ne,_e){if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return B=B.get(q)||null,w(V,B,""+ne,_e);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case b:return B=B.get(ne.key===null?q:ne.key)||null,D(V,B,ne,_e);case A:return B=B.get(ne.key===null?q:ne.key)||null,G(V,B,ne,_e);case S:var Me=ne._init;return ne=Me(ne._payload),Q(B,V,q,ne,_e)}if(rt(ne)||L(ne))return B=B.get(q)||null,te(V,B,ne,_e,null);if(typeof ne.then=="function")return Q(B,V,q,Ef(ne),_e);if(ne.$$typeof===$)return Q(B,V,q,of(V,ne),_e);Tf(V,ne)}return null}function xe(B,V,q,ne){for(var _e=null,Me=null,we=V,Re=V=0,sn=null;we!==null&&Re<q.length;Re++){we.index>Re?(sn=we,we=null):sn=we.sibling;var Ke=K(B,we,q[Re],ne);if(Ke===null){we===null&&(we=sn);break}i&&we&&Ke.alternate===null&&s(B,we),V=g(Ke,V,Re),Me===null?_e=Ke:Me.sibling=Ke,Me=Ke,we=sn}if(Re===q.length)return l(B,we),Ye&&Ba(B,Re),_e;if(we===null){for(;Re<q.length;Re++)we=ie(B,q[Re],ne),we!==null&&(V=g(we,V,Re),Me===null?_e=we:Me.sibling=we,Me=we);return Ye&&Ba(B,Re),_e}for(we=c(we);Re<q.length;Re++)sn=Q(we,B,Re,q[Re],ne),sn!==null&&(i&&sn.alternate!==null&&we.delete(sn.key===null?Re:sn.key),V=g(sn,V,Re),Me===null?_e=sn:Me.sibling=sn,Me=sn);return i&&we.forEach(function(Ns){return s(B,Ns)}),Ye&&Ba(B,Re),_e}function Se(B,V,q,ne){if(q==null)throw Error(r(151));for(var _e=null,Me=null,we=V,Re=V=0,sn=null,Ke=q.next();we!==null&&!Ke.done;Re++,Ke=q.next()){we.index>Re?(sn=we,we=null):sn=we.sibling;var Ns=K(B,we,Ke.value,ne);if(Ns===null){we===null&&(we=sn);break}i&&we&&Ns.alternate===null&&s(B,we),V=g(Ns,V,Re),Me===null?_e=Ns:Me.sibling=Ns,Me=Ns,we=sn}if(Ke.done)return l(B,we),Ye&&Ba(B,Re),_e;if(we===null){for(;!Ke.done;Re++,Ke=q.next())Ke=ie(B,Ke.value,ne),Ke!==null&&(V=g(Ke,V,Re),Me===null?_e=Ke:Me.sibling=Ke,Me=Ke);return Ye&&Ba(B,Re),_e}for(we=c(we);!Ke.done;Re++,Ke=q.next())Ke=Q(we,B,Re,Ke.value,ne),Ke!==null&&(i&&Ke.alternate!==null&&we.delete(Ke.key===null?Re:Ke.key),V=g(Ke,V,Re),Me===null?_e=Ke:Me.sibling=Ke,Me=Ke);return i&&we.forEach(function($P){return s(B,$P)}),Ye&&Ba(B,Re),_e}function ot(B,V,q,ne){if(typeof q=="object"&&q!==null&&q.type===x&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case b:e:{for(var _e=q.key;V!==null;){if(V.key===_e){if(_e=q.type,_e===x){if(V.tag===7){l(B,V.sibling),ne=p(V,q.props.children),ne.return=B,B=ne;break e}}else if(V.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===S&&W0(_e)===V.type){l(B,V.sibling),ne=p(V,q.props),Sc(ne,q),ne.return=B,B=ne;break e}l(B,V);break}else s(B,V);V=V.sibling}q.type===x?(ne=La(q.props.children,B.mode,ne,q.key),ne.return=B,B=ne):(ne=nf(q.type,q.key,q.props,null,B.mode,ne),Sc(ne,q),ne.return=B,B=ne)}return T(B);case A:e:{for(_e=q.key;V!==null;){if(V.key===_e)if(V.tag===4&&V.stateNode.containerInfo===q.containerInfo&&V.stateNode.implementation===q.implementation){l(B,V.sibling),ne=p(V,q.children||[]),ne.return=B,B=ne;break e}else{l(B,V);break}else s(B,V);V=V.sibling}ne=Sg(q,B.mode,ne),ne.return=B,B=ne}return T(B);case S:return _e=q._init,q=_e(q._payload),ot(B,V,q,ne)}if(rt(q))return xe(B,V,q,ne);if(L(q)){if(_e=L(q),typeof _e!="function")throw Error(r(150));return q=_e.call(q),Se(B,V,q,ne)}if(typeof q.then=="function")return ot(B,V,Ef(q),ne);if(q.$$typeof===$)return ot(B,V,of(B,q),ne);Tf(B,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,V!==null&&V.tag===6?(l(B,V.sibling),ne=p(V,q),ne.return=B,B=ne):(l(B,V),ne=Ag(q,B.mode,ne),ne.return=B,B=ne),T(B)):l(B,V)}return function(B,V,q,ne){try{Ac=0;var _e=ot(B,V,q,ne);return fl=null,_e}catch(we){if(we===gc||we===uf)throw we;var Me=Qn(29,we,null,B.mode);return Me.lanes=ne,Me.return=B,Me}finally{}}}var pl=X0(!0),Z0=X0(!1),gr=se(null),$r=null;function ys(i){var s=i.alternate;ce(Wt,Wt.current&1),ce(gr,i),$r===null&&(s===null||ul.current!==null||s.memoizedState!==null)&&($r=i)}function J0(i){if(i.tag===22){if(ce(Wt,Wt.current),ce(gr,i),$r===null){var s=i.alternate;s!==null&&s.memoizedState!==null&&($r=i)}}else _s()}function _s(){ce(Wt,Wt.current),ce(gr,gr.current)}function Vi(i){de(gr),$r===i&&($r=null),de(Wt)}var Wt=se(0);function bf(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||Qy(l)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function sy(i,s,l,c){s=i.memoizedState,l=l(c,s),l=l==null?s:y({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var ay={enqueueSetState:function(i,s,l){i=i._reactInternals;var c=Zn(),p=ps(c);p.payload=s,l!=null&&(p.callback=l),s=ms(i,p,c),s!==null&&(Jn(s,i,c),_c(s,i,c))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var c=Zn(),p=ps(c);p.tag=1,p.payload=s,l!=null&&(p.callback=l),s=ms(i,p,c),s!==null&&(Jn(s,i,c),_c(s,i,c))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Zn(),c=ps(l);c.tag=2,s!=null&&(c.callback=s),s=ms(i,c,l),s!==null&&(Jn(s,i,l),_c(s,i,l))}};function eb(i,s,l,c,p,g,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,g,T):s.prototype&&s.prototype.isPureReactComponent?!lc(l,c)||!lc(p,g):!0}function tb(i,s,l,c){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,c),s.state!==i&&ay.enqueueReplaceState(s,s.state,null)}function $a(i,s){var l=s;if("ref"in s){l={};for(var c in s)c!=="ref"&&(l[c]=s[c])}if(i=i.defaultProps){l===s&&(l=y({},l));for(var p in i)l[p]===void 0&&(l[p]=i[p])}return l}var wf=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function nb(i){wf(i)}function rb(i){console.error(i)}function ib(i){wf(i)}function If(i,s){try{var l=i.onUncaughtError;l(s.value,{componentStack:s.stack})}catch(c){setTimeout(function(){throw c})}}function sb(i,s,l){try{var c=i.onCaughtError;c(l.value,{componentStack:l.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function oy(i,s,l){return l=ps(l),l.tag=3,l.payload={element:null},l.callback=function(){If(i,s)},l}function ab(i){return i=ps(i),i.tag=3,i}function ob(i,s,l,c){var p=l.type.getDerivedStateFromError;if(typeof p=="function"){var g=c.value;i.payload=function(){return p(g)},i.callback=function(){sb(s,l,c)}}var T=l.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(i.callback=function(){sb(s,l,c),typeof p!="function"&&(Is===null?Is=new Set([this]):Is.add(this));var w=c.stack;this.componentDidCatch(c.value,{componentStack:w!==null?w:""})})}function $D(i,s,l,c,p){if(l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(s=l.alternate,s!==null&&fc(s,l,p,!0),l=gr.current,l!==null){switch(l.tag){case 13:return $r===null?Py():l.alternate===null&&xt===0&&(xt=3),l.flags&=-257,l.flags|=65536,l.lanes=p,c===Mg?l.flags|=16384:(s=l.updateQueue,s===null?l.updateQueue=new Set([c]):s.add(c),ky(i,c,p)),!1;case 22:return l.flags|=65536,c===Mg?l.flags|=16384:(s=l.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([c])},l.updateQueue=s):(l=s.retryQueue,l===null?s.retryQueue=new Set([c]):l.add(c)),ky(i,c,p)),!1}throw Error(r(435,l.tag))}return ky(i,c,p),Py(),!1}if(Ye)return s=gr.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=p,c!==xg&&(i=Error(r(422),{cause:c}),dc(dr(i,l)))):(c!==xg&&(s=Error(r(423),{cause:c}),dc(dr(s,l))),i=i.current.alternate,i.flags|=65536,p&=-p,i.lanes|=p,c=dr(c,l),p=oy(i.stateNode,c,p),Bg(i,p),xt!==4&&(xt=2)),!1;var g=Error(r(520),{cause:c});if(g=dr(g,l),kc===null?kc=[g]:kc.push(g),xt!==4&&(xt=2),s===null)return!0;c=dr(c,l),l=s;do{switch(l.tag){case 3:return l.flags|=65536,i=p&-p,l.lanes|=i,i=oy(l.stateNode,c,i),Bg(l,i),!1;case 1:if(s=l.type,g=l.stateNode,(l.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Is===null||!Is.has(g))))return l.flags|=65536,p&=-p,l.lanes|=p,p=ab(p),ob(p,i,l,c),Bg(l,p),!1}l=l.return}while(l!==null);return!1}var lb=Error(r(461)),nn=!1;function dn(i,s,l,c){s.child=i===null?Z0(s,null,l,c):pl(s,i.child,l,c)}function ub(i,s,l,c,p){l=l.render;var g=s.ref;if("ref"in c){var T={};for(var w in c)w!=="ref"&&(T[w]=c[w])}else T=c;return qa(s),c=Hg(i,s,l,T,g,p),w=Gg(),i!==null&&!nn?($g(i,s,p),Mi(i,s,p)):(Ye&&w&&Rg(s),s.flags|=1,dn(i,s,c,p),s.child)}function cb(i,s,l,c,p){if(i===null){var g=l.type;return typeof g=="function"&&!Ig(g)&&g.defaultProps===void 0&&l.compare===null?(s.tag=15,s.type=g,hb(i,s,g,c,p)):(i=nf(l.type,null,c,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(g=i.child,!my(i,p)){var T=g.memoizedProps;if(l=l.compare,l=l!==null?l:lc,l(T,c)&&i.ref===s.ref)return Mi(i,s,p)}return s.flags|=1,i=xi(g,c),i.ref=s.ref,i.return=s,s.child=i}function hb(i,s,l,c,p){if(i!==null){var g=i.memoizedProps;if(lc(g,c)&&i.ref===s.ref)if(nn=!1,s.pendingProps=c=g,my(i,p))(i.flags&131072)!==0&&(nn=!0);else return s.lanes=i.lanes,Mi(i,s,p)}return ly(i,s,l,c,p)}function db(i,s,l){var c=s.pendingProps,p=c.children,g=i!==null?i.memoizedState:null;if(c.mode==="hidden"){if((s.flags&128)!==0){if(c=g!==null?g.baseLanes|l:l,i!==null){for(p=s.child=i.child,g=0;p!==null;)g=g|p.lanes|p.childLanes,p=p.sibling;s.childLanes=g&~c}else s.childLanes=0,s.child=null;return fb(i,s,c,l)}if((l&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},i!==null&&lf(s,g!==null?g.cachePool:null),g!==null?h0(s,g):zg(),J0(s);else return s.lanes=s.childLanes=536870912,fb(i,s,g!==null?g.baseLanes|l:l,l)}else g!==null?(lf(s,g.cachePool),h0(s,g),_s(),s.memoizedState=null):(i!==null&&lf(s,null),zg(),_s());return dn(i,s,p,l),s.child}function fb(i,s,l,c){var p=Vg();return p=p===null?null:{parent:Yt._currentValue,pool:p},s.memoizedState={baseLanes:l,cachePool:p},i!==null&&lf(s,null),zg(),J0(s),i!==null&&fc(i,s,c,!0),null}function Af(i,s){var l=s.ref;if(l===null)i!==null&&i.ref!==null&&(s.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(i===null||i.ref!==l)&&(s.flags|=4194816)}}function ly(i,s,l,c,p){return qa(s),l=Hg(i,s,l,c,void 0,p),c=Gg(),i!==null&&!nn?($g(i,s,p),Mi(i,s,p)):(Ye&&c&&Rg(s),s.flags|=1,dn(i,s,l,p),s.child)}function pb(i,s,l,c,p,g){return qa(s),s.updateQueue=null,l=f0(s,c,l,p),d0(i),c=Gg(),i!==null&&!nn?($g(i,s,g),Mi(i,s,g)):(Ye&&c&&Rg(s),s.flags|=1,dn(i,s,l,g),s.child)}function mb(i,s,l,c,p){if(qa(s),s.stateNode===null){var g=il,T=l.contextType;typeof T=="object"&&T!==null&&(g=Tn(T)),g=new l(c,g),s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=ay,s.stateNode=g,g._reactInternals=s,g=s.stateNode,g.props=c,g.state=s.memoizedState,g.refs={},Lg(s),T=l.contextType,g.context=typeof T=="object"&&T!==null?Tn(T):il,g.state=s.memoizedState,T=l.getDerivedStateFromProps,typeof T=="function"&&(sy(s,l,T,c),g.state=s.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(T=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),T!==g.state&&ay.enqueueReplaceState(g,g.state,null),Ec(s,c,g,p),vc(),g.state=s.memoizedState),typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!0}else if(i===null){g=s.stateNode;var w=s.memoizedProps,D=$a(l,w);g.props=D;var G=g.context,te=l.contextType;T=il,typeof te=="object"&&te!==null&&(T=Tn(te));var ie=l.getDerivedStateFromProps;te=typeof ie=="function"||typeof g.getSnapshotBeforeUpdate=="function",w=s.pendingProps!==w,te||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w||G!==T)&&tb(s,g,c,T),fs=!1;var K=s.memoizedState;g.state=K,Ec(s,c,g,p),vc(),G=s.memoizedState,w||K!==G||fs?(typeof ie=="function"&&(sy(s,l,ie,c),G=s.memoizedState),(D=fs||eb(s,l,D,c,K,G,T))?(te||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(s.flags|=4194308)):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=G),g.props=c,g.state=G,g.context=T,c=D):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{g=s.stateNode,Ug(i,s),T=s.memoizedProps,te=$a(l,T),g.props=te,ie=s.pendingProps,K=g.context,G=l.contextType,D=il,typeof G=="object"&&G!==null&&(D=Tn(G)),w=l.getDerivedStateFromProps,(G=typeof w=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T!==ie||K!==D)&&tb(s,g,c,D),fs=!1,K=s.memoizedState,g.state=K,Ec(s,c,g,p),vc();var Q=s.memoizedState;T!==ie||K!==Q||fs||i!==null&&i.dependencies!==null&&af(i.dependencies)?(typeof w=="function"&&(sy(s,l,w,c),Q=s.memoizedState),(te=fs||eb(s,l,te,c,K,Q,D)||i!==null&&i.dependencies!==null&&af(i.dependencies))?(G||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,Q,D),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,Q,D)),typeof g.componentDidUpdate=="function"&&(s.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof g.componentDidUpdate!="function"||T===i.memoizedProps&&K===i.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&K===i.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=Q),g.props=c,g.state=Q,g.context=D,c=te):(typeof g.componentDidUpdate!="function"||T===i.memoizedProps&&K===i.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&K===i.memoizedState||(s.flags|=1024),c=!1)}return g=c,Af(i,s),c=(s.flags&128)!==0,g||c?(g=s.stateNode,l=c&&typeof l.getDerivedStateFromError!="function"?null:g.render(),s.flags|=1,i!==null&&c?(s.child=pl(s,i.child,null,p),s.child=pl(s,null,l,p)):dn(i,s,l,p),s.memoizedState=g.state,i=s.child):i=Mi(i,s,p),i}function gb(i,s,l,c){return hc(),s.flags|=256,dn(i,s,l,c),s.child}var uy={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cy(i){return{baseLanes:i,cachePool:r0()}}function hy(i,s,l){return i=i!==null?i.childLanes&~l:0,s&&(i|=yr),i}function yb(i,s,l){var c=s.pendingProps,p=!1,g=(s.flags&128)!==0,T;if((T=g)||(T=i!==null&&i.memoizedState===null?!1:(Wt.current&2)!==0),T&&(p=!0,s.flags&=-129),T=(s.flags&32)!==0,s.flags&=-33,i===null){if(Ye){if(p?ys(s):_s(),Ye){var w=Ct,D;if(D=w){e:{for(D=w,w=Gr;D.nodeType!==8;){if(!w){w=null;break e}if(D=Cr(D.nextSibling),D===null){w=null;break e}}w=D}w!==null?(s.memoizedState={dehydrated:w,treeContext:Ua!==null?{id:Di,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},D=Qn(18,null,null,0),D.stateNode=w,D.return=s,s.child=D,Dn=s,Ct=null,D=!0):D=!1}D||za(s)}if(w=s.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Qy(w)?s.lanes=32:s.lanes=536870912,null;Vi(s)}return w=c.children,c=c.fallback,p?(_s(),p=s.mode,w=Sf({mode:"hidden",children:w},p),c=La(c,p,l,null),w.return=s,c.return=s,w.sibling=c,s.child=w,p=s.child,p.memoizedState=cy(l),p.childLanes=hy(i,T,l),s.memoizedState=uy,c):(ys(s),dy(s,w))}if(D=i.memoizedState,D!==null&&(w=D.dehydrated,w!==null)){if(g)s.flags&256?(ys(s),s.flags&=-257,s=fy(i,s,l)):s.memoizedState!==null?(_s(),s.child=i.child,s.flags|=128,s=null):(_s(),p=c.fallback,w=s.mode,c=Sf({mode:"visible",children:c.children},w),p=La(p,w,l,null),p.flags|=2,c.return=s,p.return=s,c.sibling=p,s.child=c,pl(s,i.child,null,l),c=s.child,c.memoizedState=cy(l),c.childLanes=hy(i,T,l),s.memoizedState=uy,s=p);else if(ys(s),Qy(w)){if(T=w.nextSibling&&w.nextSibling.dataset,T)var G=T.dgst;T=G,c=Error(r(419)),c.stack="",c.digest=T,dc({value:c,source:null,stack:null}),s=fy(i,s,l)}else if(nn||fc(i,s,l,!1),T=(l&i.childLanes)!==0,nn||T){if(T=ut,T!==null&&(c=l&-l,c=(c&42)!==0?1:ss(c),c=(c&(T.suspendedLanes|l))!==0?0:c,c!==0&&c!==D.retryLane))throw D.retryLane=c,rl(i,c),Jn(T,i,c),lb;w.data==="$?"||Py(),s=fy(i,s,l)}else w.data==="$?"?(s.flags|=192,s.child=i.child,s=null):(i=D.treeContext,Ct=Cr(w.nextSibling),Dn=s,Ye=!0,Fa=null,Gr=!1,i!==null&&(pr[mr++]=Di,pr[mr++]=Pi,pr[mr++]=Ua,Di=i.id,Pi=i.overflow,Ua=s),s=dy(s,c.children),s.flags|=4096);return s}return p?(_s(),p=c.fallback,w=s.mode,D=i.child,G=D.sibling,c=xi(D,{mode:"hidden",children:c.children}),c.subtreeFlags=D.subtreeFlags&65011712,G!==null?p=xi(G,p):(p=La(p,w,l,null),p.flags|=2),p.return=s,c.return=s,c.sibling=p,s.child=c,c=p,p=s.child,w=i.child.memoizedState,w===null?w=cy(l):(D=w.cachePool,D!==null?(G=Yt._currentValue,D=D.parent!==G?{parent:G,pool:G}:D):D=r0(),w={baseLanes:w.baseLanes|l,cachePool:D}),p.memoizedState=w,p.childLanes=hy(i,T,l),s.memoizedState=uy,c):(ys(s),l=i.child,i=l.sibling,l=xi(l,{mode:"visible",children:c.children}),l.return=s,l.sibling=null,i!==null&&(T=s.deletions,T===null?(s.deletions=[i],s.flags|=16):T.push(i)),s.child=l,s.memoizedState=null,l)}function dy(i,s){return s=Sf({mode:"visible",children:s},i.mode),s.return=i,i.child=s}function Sf(i,s){return i=Qn(22,i,null,s),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function fy(i,s,l){return pl(s,i.child,null,l),i=dy(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function _b(i,s,l){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s),Pg(i.return,s,l)}function py(i,s,l,c,p){var g=i.memoizedState;g===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:p}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=l,g.tailMode=p)}function vb(i,s,l){var c=s.pendingProps,p=c.revealOrder,g=c.tail;if(dn(i,s,c.children,l),c=Wt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&_b(i,l,s);else if(i.tag===19)_b(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}switch(ce(Wt,c),p){case"forwards":for(l=s.child,p=null;l!==null;)i=l.alternate,i!==null&&bf(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),py(s,!1,p,l,g);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&bf(i)===null){s.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}py(s,!0,l,null,g);break;case"together":py(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Mi(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),ws|=s.lanes,(l&s.childLanes)===0)if(i!==null){if(fc(i,s,l,!1),(l&s.childLanes)===0)return null}else return null;if(i!==null&&s.child!==i.child)throw Error(r(153));if(s.child!==null){for(i=s.child,l=xi(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=xi(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function my(i,s){return(i.lanes&s)!==0?!0:(i=i.dependencies,!!(i!==null&&af(i)))}function KD(i,s,l){switch(s.tag){case 3:$e(s,s.stateNode.containerInfo),ds(s,Yt,i.memoizedState.cache),hc();break;case 27:case 5:sr(s);break;case 4:$e(s,s.stateNode.containerInfo);break;case 10:ds(s,s.type,s.memoizedProps.value);break;case 13:var c=s.memoizedState;if(c!==null)return c.dehydrated!==null?(ys(s),s.flags|=128,null):(l&s.child.childLanes)!==0?yb(i,s,l):(ys(s),i=Mi(i,s,l),i!==null?i.sibling:null);ys(s);break;case 19:var p=(i.flags&128)!==0;if(c=(l&s.childLanes)!==0,c||(fc(i,s,l,!1),c=(l&s.childLanes)!==0),p){if(c)return vb(i,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),ce(Wt,Wt.current),c)break;return null;case 22:case 23:return s.lanes=0,db(i,s,l);case 24:ds(s,Yt,i.memoizedState.cache)}return Mi(i,s,l)}function Eb(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps)nn=!0;else{if(!my(i,l)&&(s.flags&128)===0)return nn=!1,KD(i,s,l);nn=(i.flags&131072)!==0}else nn=!1,Ye&&(s.flags&1048576)!==0&&WT(s,sf,s.index);switch(s.lanes=0,s.tag){case 16:e:{i=s.pendingProps;var c=s.elementType,p=c._init;if(c=p(c._payload),s.type=c,typeof c=="function")Ig(c)?(i=$a(c,i),s.tag=1,s=mb(null,s,c,i,l)):(s.tag=0,s=ly(null,s,c,i,l));else{if(c!=null){if(p=c.$$typeof,p===le){s.tag=11,s=ub(null,s,c,i,l);break e}else if(p===R){s.tag=14,s=cb(null,s,c,i,l);break e}}throw s=ft(c)||c,Error(r(306,s,""))}}return s;case 0:return ly(i,s,s.type,s.pendingProps,l);case 1:return c=s.type,p=$a(c,s.pendingProps),mb(i,s,c,p,l);case 3:e:{if($e(s,s.stateNode.containerInfo),i===null)throw Error(r(387));c=s.pendingProps;var g=s.memoizedState;p=g.element,Ug(i,s),Ec(s,c,null,l);var T=s.memoizedState;if(c=T.cache,ds(s,Yt,c),c!==g.cache&&Ng(s,[Yt],l,!0),vc(),c=T.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:T.cache},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){s=gb(i,s,c,l);break e}else if(c!==p){p=dr(Error(r(424)),s),dc(p),s=gb(i,s,c,l);break e}else{switch(i=s.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(Ct=Cr(i.firstChild),Dn=s,Ye=!0,Fa=null,Gr=!0,l=Z0(s,null,c,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(hc(),c===p){s=Mi(i,s,l);break e}dn(i,s,c,l)}s=s.child}return s;case 26:return Af(i,s),i===null?(l=Iw(s.type,null,s.pendingProps,null))?s.memoizedState=l:Ye||(l=s.type,i=s.pendingProps,c=Ff(Ie.current).createElement(l),c[$t]=s,c[Bt]=i,pn(c,l,i),kt(c),s.stateNode=c):s.memoizedState=Iw(s.type,i.memoizedProps,s.pendingProps,i.memoizedState),null;case 27:return sr(s),i===null&&Ye&&(c=s.stateNode=Tw(s.type,s.pendingProps,Ie.current),Dn=s,Gr=!0,p=Ct,Rs(s.type)?(Yy=p,Ct=Cr(c.firstChild)):Ct=p),dn(i,s,s.pendingProps.children,l),Af(i,s),i===null&&(s.flags|=4194304),s.child;case 5:return i===null&&Ye&&((p=c=Ct)&&(c=TP(c,s.type,s.pendingProps,Gr),c!==null?(s.stateNode=c,Dn=s,Ct=Cr(c.firstChild),Gr=!1,p=!0):p=!1),p||za(s)),sr(s),p=s.type,g=s.pendingProps,T=i!==null?i.memoizedProps:null,c=g.children,Gy(p,g)?c=null:T!==null&&Gy(p,T)&&(s.flags|=32),s.memoizedState!==null&&(p=Hg(i,s,BD,null,null,l),jc._currentValue=p),Af(i,s),dn(i,s,c,l),s.child;case 6:return i===null&&Ye&&((i=l=Ct)&&(l=bP(l,s.pendingProps,Gr),l!==null?(s.stateNode=l,Dn=s,Ct=null,i=!0):i=!1),i||za(s)),null;case 13:return yb(i,s,l);case 4:return $e(s,s.stateNode.containerInfo),c=s.pendingProps,i===null?s.child=pl(s,null,c,l):dn(i,s,c,l),s.child;case 11:return ub(i,s,s.type,s.pendingProps,l);case 7:return dn(i,s,s.pendingProps,l),s.child;case 8:return dn(i,s,s.pendingProps.children,l),s.child;case 12:return dn(i,s,s.pendingProps.children,l),s.child;case 10:return c=s.pendingProps,ds(s,s.type,c.value),dn(i,s,c.children,l),s.child;case 9:return p=s.type._context,c=s.pendingProps.children,qa(s),p=Tn(p),c=c(p),s.flags|=1,dn(i,s,c,l),s.child;case 14:return cb(i,s,s.type,s.pendingProps,l);case 15:return hb(i,s,s.type,s.pendingProps,l);case 19:return vb(i,s,l);case 31:return c=s.pendingProps,l=s.mode,c={mode:c.mode,children:c.children},i===null?(l=Sf(c,l),l.ref=s.ref,s.child=l,l.return=s,s=l):(l=xi(i.child,c),l.ref=s.ref,s.child=l,l.return=s,s=l),s;case 22:return db(i,s,l);case 24:return qa(s),c=Tn(Yt),i===null?(p=Vg(),p===null&&(p=ut,g=kg(),p.pooledCache=g,g.refCount++,g!==null&&(p.pooledCacheLanes|=l),p=g),s.memoizedState={parent:c,cache:p},Lg(s),ds(s,Yt,p)):((i.lanes&l)!==0&&(Ug(i,s),Ec(s,null,null,l),vc()),p=i.memoizedState,g=s.memoizedState,p.parent!==c?(p={parent:c,cache:c},s.memoizedState=p,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=p),ds(s,Yt,c)):(c=g.cache,ds(s,Yt,c),c!==p.cache&&Ng(s,[Yt],l,!0))),dn(i,s,s.pendingProps.children,l),s.child;case 29:throw s.pendingProps}throw Error(r(156,s.tag))}function Li(i){i.flags|=4}function Tb(i,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!xw(s)){if(s=gr.current,s!==null&&((He&4194048)===He?$r!==null:(He&62914560)!==He&&(He&536870912)===0||s!==$r))throw yc=Mg,i0;i.flags|=8192}}function Rf(i,s){s!==null&&(i.flags|=4),i.flags&16384&&(s=i.tag!==22?Hu():536870912,i.lanes|=s,_l|=s)}function Rc(i,s){if(!Ye)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function bt(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,c=0;if(s)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags&65011712,c|=p.flags&65011712,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=c,i.childLanes=l,s}function QD(i,s,l){var c=s.pendingProps;switch(Cg(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(s),null;case 1:return bt(s),null;case 3:return l=s.stateNode,c=null,i!==null&&(c=i.memoizedState.cache),s.memoizedState.cache!==c&&(s.flags|=2048),ki(Yt),Jt(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(i===null||i.child===null)&&(cc(s)?Li(s):i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,JT())),bt(s),null;case 26:return l=s.memoizedState,i===null?(Li(s),l!==null?(bt(s),Tb(s,l)):(bt(s),s.flags&=-16777217)):l?l!==i.memoizedState?(Li(s),bt(s),Tb(s,l)):(bt(s),s.flags&=-16777217):(i.memoizedProps!==c&&Li(s),bt(s),s.flags&=-16777217),null;case 27:Mn(s),l=Ie.current;var p=s.type;if(i!==null&&s.stateNode!=null)i.memoizedProps!==c&&Li(s);else{if(!c){if(s.stateNode===null)throw Error(r(166));return bt(s),null}i=be.current,cc(s)?XT(s):(i=Tw(p,c,l),s.stateNode=i,Li(s))}return bt(s),null;case 5:if(Mn(s),l=s.type,i!==null&&s.stateNode!=null)i.memoizedProps!==c&&Li(s);else{if(!c){if(s.stateNode===null)throw Error(r(166));return bt(s),null}if(i=be.current,cc(s))XT(s);else{switch(p=Ff(Ie.current),i){case 1:i=p.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=p.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=p.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof c.is=="string"?p.createElement("select",{is:c.is}):p.createElement("select"),c.multiple?i.multiple=!0:c.size&&(i.size=c.size);break;default:i=typeof c.is=="string"?p.createElement(l,{is:c.is}):p.createElement(l)}}i[$t]=s,i[Bt]=c;e:for(p=s.child;p!==null;){if(p.tag===5||p.tag===6)i.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===s)break e;for(;p.sibling===null;){if(p.return===null||p.return===s)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}s.stateNode=i;e:switch(pn(i,l,c),l){case"button":case"input":case"select":case"textarea":i=!!c.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Li(s)}}return bt(s),s.flags&=-16777217,null;case 6:if(i&&s.stateNode!=null)i.memoizedProps!==c&&Li(s);else{if(typeof c!="string"&&s.stateNode===null)throw Error(r(166));if(i=Ie.current,cc(s)){if(i=s.stateNode,l=s.memoizedProps,c=null,p=Dn,p!==null)switch(p.tag){case 27:case 5:c=p.memoizedProps}i[$t]=s,i=!!(i.nodeValue===l||c!==null&&c.suppressHydrationWarning===!0||pw(i.nodeValue,l)),i||za(s)}else i=Ff(i).createTextNode(c),i[$t]=s,s.stateNode=i}return bt(s),null;case 13:if(c=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(p=cc(s),c!==null&&c.dehydrated!==null){if(i===null){if(!p)throw Error(r(318));if(p=s.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(r(317));p[$t]=s}else hc(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;bt(s),p=!1}else p=JT(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=p),p=!0;if(!p)return s.flags&256?(Vi(s),s):(Vi(s),null)}if(Vi(s),(s.flags&128)!==0)return s.lanes=l,s;if(l=c!==null,i=i!==null&&i.memoizedState!==null,l){c=s.child,p=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(p=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==p&&(c.flags|=2048)}return l!==i&&l&&(s.child.flags|=8192),Rf(s,s.updateQueue),bt(s),null;case 4:return Jt(),i===null&&Fy(s.stateNode.containerInfo),bt(s),null;case 10:return ki(s.type),bt(s),null;case 19:if(de(Wt),p=s.memoizedState,p===null)return bt(s),null;if(c=(s.flags&128)!==0,g=p.rendering,g===null)if(c)Rc(p,!1);else{if(xt!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(g=bf(i),g!==null){for(s.flags|=128,Rc(p,!1),i=g.updateQueue,s.updateQueue=i,Rf(s,i),s.subtreeFlags=0,i=l,l=s.child;l!==null;)YT(l,i),l=l.sibling;return ce(Wt,Wt.current&1|2),s.child}i=i.sibling}p.tail!==null&&ar()>Df&&(s.flags|=128,c=!0,Rc(p,!1),s.lanes=4194304)}else{if(!c)if(i=bf(g),i!==null){if(s.flags|=128,c=!0,i=i.updateQueue,s.updateQueue=i,Rf(s,i),Rc(p,!0),p.tail===null&&p.tailMode==="hidden"&&!g.alternate&&!Ye)return bt(s),null}else 2*ar()-p.renderingStartTime>Df&&l!==536870912&&(s.flags|=128,c=!0,Rc(p,!1),s.lanes=4194304);p.isBackwards?(g.sibling=s.child,s.child=g):(i=p.last,i!==null?i.sibling=g:s.child=g,p.last=g)}return p.tail!==null?(s=p.tail,p.rendering=s,p.tail=s.sibling,p.renderingStartTime=ar(),s.sibling=null,i=Wt.current,ce(Wt,c?i&1|2:i&1),s):(bt(s),null);case 22:case 23:return Vi(s),jg(),c=s.memoizedState!==null,i!==null?i.memoizedState!==null!==c&&(s.flags|=8192):c&&(s.flags|=8192),c?(l&536870912)!==0&&(s.flags&128)===0&&(bt(s),s.subtreeFlags&6&&(s.flags|=8192)):bt(s),l=s.updateQueue,l!==null&&Rf(s,l.retryQueue),l=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==l&&(s.flags|=2048),i!==null&&de(Ha),null;case 24:return l=null,i!==null&&(l=i.memoizedState.cache),s.memoizedState.cache!==l&&(s.flags|=2048),ki(Yt),bt(s),null;case 25:return null;case 30:return null}throw Error(r(156,s.tag))}function YD(i,s){switch(Cg(s),s.tag){case 1:return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return ki(Yt),Jt(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 26:case 27:case 5:return Mn(s),null;case 13:if(Vi(s),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(r(340));hc()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return de(Wt),null;case 4:return Jt(),null;case 10:return ki(s.type),null;case 22:case 23:return Vi(s),jg(),i!==null&&de(Ha),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 24:return ki(Yt),null;case 25:return null;default:return null}}function bb(i,s){switch(Cg(s),s.tag){case 3:ki(Yt),Jt();break;case 26:case 27:case 5:Mn(s);break;case 4:Jt();break;case 13:Vi(s);break;case 19:de(Wt);break;case 10:ki(s.type);break;case 22:case 23:Vi(s),jg(),i!==null&&de(Ha);break;case 24:ki(Yt)}}function Cc(i,s){try{var l=s.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var p=c.next;l=p;do{if((l.tag&i)===i){c=void 0;var g=l.create,T=l.inst;c=g(),T.destroy=c}l=l.next}while(l!==p)}}catch(w){lt(s,s.return,w)}}function vs(i,s,l){try{var c=s.updateQueue,p=c!==null?c.lastEffect:null;if(p!==null){var g=p.next;c=g;do{if((c.tag&i)===i){var T=c.inst,w=T.destroy;if(w!==void 0){T.destroy=void 0,p=s;var D=l,G=w;try{G()}catch(te){lt(p,D,te)}}}c=c.next}while(c!==g)}}catch(te){lt(s,s.return,te)}}function wb(i){var s=i.updateQueue;if(s!==null){var l=i.stateNode;try{c0(s,l)}catch(c){lt(i,i.return,c)}}}function Ib(i,s,l){l.props=$a(i.type,i.memoizedProps),l.state=i.memoizedState;try{l.componentWillUnmount()}catch(c){lt(i,s,c)}}function xc(i,s){try{var l=i.ref;if(l!==null){switch(i.tag){case 26:case 27:case 5:var c=i.stateNode;break;case 30:c=i.stateNode;break;default:c=i.stateNode}typeof l=="function"?i.refCleanup=l(c):l.current=c}}catch(p){lt(i,s,p)}}function Kr(i,s){var l=i.ref,c=i.refCleanup;if(l!==null)if(typeof c=="function")try{c()}catch(p){lt(i,s,p)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(p){lt(i,s,p)}else l.current=null}function Ab(i){var s=i.type,l=i.memoizedProps,c=i.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":l.autoFocus&&c.focus();break e;case"img":l.src?c.src=l.src:l.srcSet&&(c.srcset=l.srcSet)}}catch(p){lt(i,i.return,p)}}function gy(i,s,l){try{var c=i.stateNode;gP(c,i.type,l,s),c[Bt]=s}catch(p){lt(i,i.return,p)}}function Sb(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&Rs(i.type)||i.tag===4}function yy(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Sb(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&Rs(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function _y(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(i,s):(s=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,s.appendChild(i),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Bf));else if(c!==4&&(c===27&&Rs(i.type)&&(l=i.stateNode,s=null),i=i.child,i!==null))for(_y(i,s,l),i=i.sibling;i!==null;)_y(i,s,l),i=i.sibling}function Cf(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(c!==4&&(c===27&&Rs(i.type)&&(l=i.stateNode),i=i.child,i!==null))for(Cf(i,s,l),i=i.sibling;i!==null;)Cf(i,s,l),i=i.sibling}function Rb(i){var s=i.stateNode,l=i.memoizedProps;try{for(var c=i.type,p=s.attributes;p.length;)s.removeAttributeNode(p[0]);pn(s,c,l),s[$t]=i,s[Bt]=l}catch(g){lt(i,i.return,g)}}var Ui=!1,Vt=!1,vy=!1,Cb=typeof WeakSet=="function"?WeakSet:Set,rn=null;function WD(i,s){if(i=i.containerInfo,qy=$f,i=BT(i),yg(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var p=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var T=0,w=-1,D=-1,G=0,te=0,ie=i,K=null;t:for(;;){for(var Q;ie!==l||p!==0&&ie.nodeType!==3||(w=T+p),ie!==g||c!==0&&ie.nodeType!==3||(D=T+c),ie.nodeType===3&&(T+=ie.nodeValue.length),(Q=ie.firstChild)!==null;)K=ie,ie=Q;for(;;){if(ie===i)break t;if(K===l&&++G===p&&(w=T),K===g&&++te===c&&(D=T),(Q=ie.nextSibling)!==null)break;ie=K,K=ie.parentNode}ie=Q}l=w===-1||D===-1?null:{start:w,end:D}}else l=null}l=l||{start:0,end:0}}else l=null;for(Hy={focusedElem:i,selectionRange:l},$f=!1,rn=s;rn!==null;)if(s=rn,i=s.child,(s.subtreeFlags&1024)!==0&&i!==null)i.return=s,rn=i;else for(;rn!==null;){switch(s=rn,g=s.alternate,i=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&g!==null){i=void 0,l=s,p=g.memoizedProps,g=g.memoizedState,c=l.stateNode;try{var xe=$a(l.type,p,l.elementType===l.type);i=c.getSnapshotBeforeUpdate(xe,g),c.__reactInternalSnapshotBeforeUpdate=i}catch(Se){lt(l,l.return,Se)}}break;case 3:if((i&1024)!==0){if(i=s.stateNode.containerInfo,l=i.nodeType,l===9)Ky(i);else if(l===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Ky(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(r(163))}if(i=s.sibling,i!==null){i.return=s.return,rn=i;break}rn=s.return}}function xb(i,s,l){var c=l.flags;switch(l.tag){case 0:case 11:case 15:Es(i,l),c&4&&Cc(5,l);break;case 1:if(Es(i,l),c&4)if(i=l.stateNode,s===null)try{i.componentDidMount()}catch(T){lt(l,l.return,T)}else{var p=$a(l.type,s.memoizedProps);s=s.memoizedState;try{i.componentDidUpdate(p,s,i.__reactInternalSnapshotBeforeUpdate)}catch(T){lt(l,l.return,T)}}c&64&&wb(l),c&512&&xc(l,l.return);break;case 3:if(Es(i,l),c&64&&(i=l.updateQueue,i!==null)){if(s=null,l.child!==null)switch(l.child.tag){case 27:case 5:s=l.child.stateNode;break;case 1:s=l.child.stateNode}try{c0(i,s)}catch(T){lt(l,l.return,T)}}break;case 27:s===null&&c&4&&Rb(l);case 26:case 5:Es(i,l),s===null&&c&4&&Ab(l),c&512&&xc(l,l.return);break;case 12:Es(i,l);break;case 13:Es(i,l),c&4&&Nb(i,l),c&64&&(i=l.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(l=sP.bind(null,l),wP(i,l))));break;case 22:if(c=l.memoizedState!==null||Ui,!c){s=s!==null&&s.memoizedState!==null||Vt,p=Ui;var g=Vt;Ui=c,(Vt=s)&&!g?Ts(i,l,(l.subtreeFlags&8772)!==0):Es(i,l),Ui=p,Vt=g}break;case 30:break;default:Es(i,l)}}function Db(i){var s=i.alternate;s!==null&&(i.alternate=null,Db(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&ls(s)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var mt=null,Un=!1;function Bi(i,s,l){for(l=l.child;l!==null;)Pb(i,s,l),l=l.sibling}function Pb(i,s,l){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(Rt,l)}catch{}switch(l.tag){case 26:Vt||Kr(l,s),Bi(i,s,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Vt||Kr(l,s);var c=mt,p=Un;Rs(l.type)&&(mt=l.stateNode,Un=!1),Bi(i,s,l),Uc(l.stateNode),mt=c,Un=p;break;case 5:Vt||Kr(l,s);case 6:if(c=mt,p=Un,mt=null,Bi(i,s,l),mt=c,Un=p,mt!==null)if(Un)try{(mt.nodeType===9?mt.body:mt.nodeName==="HTML"?mt.ownerDocument.body:mt).removeChild(l.stateNode)}catch(g){lt(l,s,g)}else try{mt.removeChild(l.stateNode)}catch(g){lt(l,s,g)}break;case 18:mt!==null&&(Un?(i=mt,vw(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,l.stateNode),$c(i)):vw(mt,l.stateNode));break;case 4:c=mt,p=Un,mt=l.stateNode.containerInfo,Un=!0,Bi(i,s,l),mt=c,Un=p;break;case 0:case 11:case 14:case 15:Vt||vs(2,l,s),Vt||vs(4,l,s),Bi(i,s,l);break;case 1:Vt||(Kr(l,s),c=l.stateNode,typeof c.componentWillUnmount=="function"&&Ib(l,s,c)),Bi(i,s,l);break;case 21:Bi(i,s,l);break;case 22:Vt=(c=Vt)||l.memoizedState!==null,Bi(i,s,l),Vt=c;break;default:Bi(i,s,l)}}function Nb(i,s){if(s.memoizedState===null&&(i=s.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{$c(i)}catch(l){lt(s,s.return,l)}}function XD(i){switch(i.tag){case 13:case 19:var s=i.stateNode;return s===null&&(s=i.stateNode=new Cb),s;case 22:return i=i.stateNode,s=i._retryCache,s===null&&(s=i._retryCache=new Cb),s;default:throw Error(r(435,i.tag))}}function Ey(i,s){var l=XD(i);s.forEach(function(c){var p=aP.bind(null,i,c);l.has(c)||(l.add(c),c.then(p,p))})}function Yn(i,s){var l=s.deletions;if(l!==null)for(var c=0;c<l.length;c++){var p=l[c],g=i,T=s,w=T;e:for(;w!==null;){switch(w.tag){case 27:if(Rs(w.type)){mt=w.stateNode,Un=!1;break e}break;case 5:mt=w.stateNode,Un=!1;break e;case 3:case 4:mt=w.stateNode.containerInfo,Un=!0;break e}w=w.return}if(mt===null)throw Error(r(160));Pb(g,T,p),mt=null,Un=!1,g=p.alternate,g!==null&&(g.return=null),p.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)kb(s,i),s=s.sibling}var Rr=null;function kb(i,s){var l=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Yn(s,i),Wn(i),c&4&&(vs(3,i,i.return),Cc(3,i),vs(5,i,i.return));break;case 1:Yn(s,i),Wn(i),c&512&&(Vt||l===null||Kr(l,l.return)),c&64&&Ui&&(i=i.updateQueue,i!==null&&(c=i.callbacks,c!==null&&(l=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=l===null?c:l.concat(c))));break;case 26:var p=Rr;if(Yn(s,i),Wn(i),c&512&&(Vt||l===null||Kr(l,l.return)),c&4){var g=l!==null?l.memoizedState:null;if(c=i.memoizedState,l===null)if(c===null)if(i.stateNode===null){e:{c=i.type,l=i.memoizedProps,p=p.ownerDocument||p;t:switch(c){case"title":g=p.getElementsByTagName("title")[0],(!g||g[Ta]||g[$t]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=p.createElement(c),p.head.insertBefore(g,p.querySelector("head > title"))),pn(g,c,l),g[$t]=i,kt(g),c=g;break e;case"link":var T=Rw("link","href",p).get(c+(l.href||""));if(T){for(var w=0;w<T.length;w++)if(g=T[w],g.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&g.getAttribute("rel")===(l.rel==null?null:l.rel)&&g.getAttribute("title")===(l.title==null?null:l.title)&&g.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){T.splice(w,1);break t}}g=p.createElement(c),pn(g,c,l),p.head.appendChild(g);break;case"meta":if(T=Rw("meta","content",p).get(c+(l.content||""))){for(w=0;w<T.length;w++)if(g=T[w],g.getAttribute("content")===(l.content==null?null:""+l.content)&&g.getAttribute("name")===(l.name==null?null:l.name)&&g.getAttribute("property")===(l.property==null?null:l.property)&&g.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&g.getAttribute("charset")===(l.charSet==null?null:l.charSet)){T.splice(w,1);break t}}g=p.createElement(c),pn(g,c,l),p.head.appendChild(g);break;default:throw Error(r(468,c))}g[$t]=i,kt(g),c=g}i.stateNode=c}else Cw(p,i.type,i.stateNode);else i.stateNode=Sw(p,c,i.memoizedProps);else g!==c?(g===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):g.count--,c===null?Cw(p,i.type,i.stateNode):Sw(p,c,i.memoizedProps)):c===null&&i.stateNode!==null&&gy(i,i.memoizedProps,l.memoizedProps)}break;case 27:Yn(s,i),Wn(i),c&512&&(Vt||l===null||Kr(l,l.return)),l!==null&&c&4&&gy(i,i.memoizedProps,l.memoizedProps);break;case 5:if(Yn(s,i),Wn(i),c&512&&(Vt||l===null||Kr(l,l.return)),i.flags&32){p=i.stateNode;try{lr(p,"")}catch(Q){lt(i,i.return,Q)}}c&4&&i.stateNode!=null&&(p=i.memoizedProps,gy(i,p,l!==null?l.memoizedProps:p)),c&1024&&(vy=!0);break;case 6:if(Yn(s,i),Wn(i),c&4){if(i.stateNode===null)throw Error(r(162));c=i.memoizedProps,l=i.stateNode;try{l.nodeValue=c}catch(Q){lt(i,i.return,Q)}}break;case 3:if(qf=null,p=Rr,Rr=zf(s.containerInfo),Yn(s,i),Rr=p,Wn(i),c&4&&l!==null&&l.memoizedState.isDehydrated)try{$c(s.containerInfo)}catch(Q){lt(i,i.return,Q)}vy&&(vy=!1,Ob(i));break;case 4:c=Rr,Rr=zf(i.stateNode.containerInfo),Yn(s,i),Wn(i),Rr=c;break;case 12:Yn(s,i),Wn(i);break;case 13:Yn(s,i),Wn(i),i.child.flags&8192&&i.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Sy=ar()),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,Ey(i,c)));break;case 22:p=i.memoizedState!==null;var D=l!==null&&l.memoizedState!==null,G=Ui,te=Vt;if(Ui=G||p,Vt=te||D,Yn(s,i),Vt=te,Ui=G,Wn(i),c&8192)e:for(s=i.stateNode,s._visibility=p?s._visibility&-2:s._visibility|1,p&&(l===null||D||Ui||Vt||Ka(i)),l=null,s=i;;){if(s.tag===5||s.tag===26){if(l===null){D=l=s;try{if(g=D.stateNode,p)T=g.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{w=D.stateNode;var ie=D.memoizedProps.style,K=ie!=null&&ie.hasOwnProperty("display")?ie.display:null;w.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(Q){lt(D,D.return,Q)}}}else if(s.tag===6){if(l===null){D=s;try{D.stateNode.nodeValue=p?"":D.memoizedProps}catch(Q){lt(D,D.return,Q)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===i)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break e;for(;s.sibling===null;){if(s.return===null||s.return===i)break e;l===s&&(l=null),s=s.return}l===s&&(l=null),s.sibling.return=s.return,s=s.sibling}c&4&&(c=i.updateQueue,c!==null&&(l=c.retryQueue,l!==null&&(c.retryQueue=null,Ey(i,l))));break;case 19:Yn(s,i),Wn(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,Ey(i,c)));break;case 30:break;case 21:break;default:Yn(s,i),Wn(i)}}function Wn(i){var s=i.flags;if(s&2){try{for(var l,c=i.return;c!==null;){if(Sb(c)){l=c;break}c=c.return}if(l==null)throw Error(r(160));switch(l.tag){case 27:var p=l.stateNode,g=yy(i);Cf(i,g,p);break;case 5:var T=l.stateNode;l.flags&32&&(lr(T,""),l.flags&=-33);var w=yy(i);Cf(i,w,T);break;case 3:case 4:var D=l.stateNode.containerInfo,G=yy(i);_y(i,G,D);break;default:throw Error(r(161))}}catch(te){lt(i,i.return,te)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function Ob(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var s=i;Ob(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),i=i.sibling}}function Es(i,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)xb(i,s.alternate,s),s=s.sibling}function Ka(i){for(i=i.child;i!==null;){var s=i;switch(s.tag){case 0:case 11:case 14:case 15:vs(4,s,s.return),Ka(s);break;case 1:Kr(s,s.return);var l=s.stateNode;typeof l.componentWillUnmount=="function"&&Ib(s,s.return,l),Ka(s);break;case 27:Uc(s.stateNode);case 26:case 5:Kr(s,s.return),Ka(s);break;case 22:s.memoizedState===null&&Ka(s);break;case 30:Ka(s);break;default:Ka(s)}i=i.sibling}}function Ts(i,s,l){for(l=l&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var c=s.alternate,p=i,g=s,T=g.flags;switch(g.tag){case 0:case 11:case 15:Ts(p,g,l),Cc(4,g);break;case 1:if(Ts(p,g,l),c=g,p=c.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(G){lt(c,c.return,G)}if(c=g,p=c.updateQueue,p!==null){var w=c.stateNode;try{var D=p.shared.hiddenCallbacks;if(D!==null)for(p.shared.hiddenCallbacks=null,p=0;p<D.length;p++)u0(D[p],w)}catch(G){lt(c,c.return,G)}}l&&T&64&&wb(g),xc(g,g.return);break;case 27:Rb(g);case 26:case 5:Ts(p,g,l),l&&c===null&&T&4&&Ab(g),xc(g,g.return);break;case 12:Ts(p,g,l);break;case 13:Ts(p,g,l),l&&T&4&&Nb(p,g);break;case 22:g.memoizedState===null&&Ts(p,g,l),xc(g,g.return);break;case 30:break;default:Ts(p,g,l)}s=s.sibling}}function Ty(i,s){var l=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),i=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(i=s.memoizedState.cachePool.pool),i!==l&&(i!=null&&i.refCount++,l!=null&&pc(l))}function by(i,s){i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&pc(i))}function Qr(i,s,l,c){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Vb(i,s,l,c),s=s.sibling}function Vb(i,s,l,c){var p=s.flags;switch(s.tag){case 0:case 11:case 15:Qr(i,s,l,c),p&2048&&Cc(9,s);break;case 1:Qr(i,s,l,c);break;case 3:Qr(i,s,l,c),p&2048&&(i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&pc(i)));break;case 12:if(p&2048){Qr(i,s,l,c),i=s.stateNode;try{var g=s.memoizedProps,T=g.id,w=g.onPostCommit;typeof w=="function"&&w(T,s.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(D){lt(s,s.return,D)}}else Qr(i,s,l,c);break;case 13:Qr(i,s,l,c);break;case 23:break;case 22:g=s.stateNode,T=s.alternate,s.memoizedState!==null?g._visibility&2?Qr(i,s,l,c):Dc(i,s):g._visibility&2?Qr(i,s,l,c):(g._visibility|=2,ml(i,s,l,c,(s.subtreeFlags&10256)!==0)),p&2048&&Ty(T,s);break;case 24:Qr(i,s,l,c),p&2048&&by(s.alternate,s);break;default:Qr(i,s,l,c)}}function ml(i,s,l,c,p){for(p=p&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var g=i,T=s,w=l,D=c,G=T.flags;switch(T.tag){case 0:case 11:case 15:ml(g,T,w,D,p),Cc(8,T);break;case 23:break;case 22:var te=T.stateNode;T.memoizedState!==null?te._visibility&2?ml(g,T,w,D,p):Dc(g,T):(te._visibility|=2,ml(g,T,w,D,p)),p&&G&2048&&Ty(T.alternate,T);break;case 24:ml(g,T,w,D,p),p&&G&2048&&by(T.alternate,T);break;default:ml(g,T,w,D,p)}s=s.sibling}}function Dc(i,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var l=i,c=s,p=c.flags;switch(c.tag){case 22:Dc(l,c),p&2048&&Ty(c.alternate,c);break;case 24:Dc(l,c),p&2048&&by(c.alternate,c);break;default:Dc(l,c)}s=s.sibling}}var Pc=8192;function gl(i){if(i.subtreeFlags&Pc)for(i=i.child;i!==null;)Mb(i),i=i.sibling}function Mb(i){switch(i.tag){case 26:gl(i),i.flags&Pc&&i.memoizedState!==null&&MP(Rr,i.memoizedState,i.memoizedProps);break;case 5:gl(i);break;case 3:case 4:var s=Rr;Rr=zf(i.stateNode.containerInfo),gl(i),Rr=s;break;case 22:i.memoizedState===null&&(s=i.alternate,s!==null&&s.memoizedState!==null?(s=Pc,Pc=16777216,gl(i),Pc=s):gl(i));break;default:gl(i)}}function Lb(i){var s=i.alternate;if(s!==null&&(i=s.child,i!==null)){s.child=null;do s=i.sibling,i.sibling=null,i=s;while(i!==null)}}function Nc(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];rn=c,Bb(c,i)}Lb(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Ub(i),i=i.sibling}function Ub(i){switch(i.tag){case 0:case 11:case 15:Nc(i),i.flags&2048&&vs(9,i,i.return);break;case 3:Nc(i);break;case 12:Nc(i);break;case 22:var s=i.stateNode;i.memoizedState!==null&&s._visibility&2&&(i.return===null||i.return.tag!==13)?(s._visibility&=-3,xf(i)):Nc(i);break;default:Nc(i)}}function xf(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];rn=c,Bb(c,i)}Lb(i)}for(i=i.child;i!==null;){switch(s=i,s.tag){case 0:case 11:case 15:vs(8,s,s.return),xf(s);break;case 22:l=s.stateNode,l._visibility&2&&(l._visibility&=-3,xf(s));break;default:xf(s)}i=i.sibling}}function Bb(i,s){for(;rn!==null;){var l=rn;switch(l.tag){case 0:case 11:case 15:vs(8,l,s);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var c=l.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:pc(l.memoizedState.cache)}if(c=l.child,c!==null)c.return=l,rn=c;else e:for(l=i;rn!==null;){c=rn;var p=c.sibling,g=c.return;if(Db(c),c===l){rn=null;break e}if(p!==null){p.return=g,rn=p;break e}rn=g}}}var ZD={getCacheForType:function(i){var s=Tn(Yt),l=s.data.get(i);return l===void 0&&(l=i(),s.data.set(i,l)),l}},JD=typeof WeakMap=="function"?WeakMap:Map,Je=0,ut=null,Le=null,He=0,et=0,Xn=null,bs=!1,yl=!1,wy=!1,Fi=0,xt=0,ws=0,Qa=0,Iy=0,yr=0,_l=0,kc=null,Bn=null,Ay=!1,Sy=0,Df=1/0,Pf=null,Is=null,fn=0,As=null,vl=null,El=0,Ry=0,Cy=null,Fb=null,Oc=0,xy=null;function Zn(){if((Je&2)!==0&&He!==0)return He&-He;if(ee.T!==null){var i=ol;return i!==0?i:My()}return as()}function zb(){yr===0&&(yr=(He&536870912)===0||Ye?qu():536870912);var i=gr.current;return i!==null&&(i.flags|=32),yr}function Jn(i,s,l){(i===ut&&(et===2||et===9)||i.cancelPendingCommit!==null)&&(Tl(i,0),Ss(i,He,yr,!1)),_i(i,l),((Je&2)===0||i!==ut)&&(i===ut&&((Je&2)===0&&(Qa|=l),xt===4&&Ss(i,He,yr,!1)),Yr(i))}function jb(i,s,l){if((Je&6)!==0)throw Error(r(327));var c=!l&&(s&124)===0&&(s&i.expiredLanes)===0||Ea(i,s),p=c?nP(i,s):Ny(i,s,!0),g=c;do{if(p===0){yl&&!c&&Ss(i,s,0,!1);break}else{if(l=i.current.alternate,g&&!eP(l)){p=Ny(i,s,!1),g=!1;continue}if(p===2){if(g=s,i.errorRecoveryDisabledLanes&g)var T=0;else T=i.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){s=T;e:{var w=i;p=kc;var D=w.current.memoizedState.isDehydrated;if(D&&(Tl(w,T).flags|=256),T=Ny(w,T,!1),T!==2){if(wy&&!D){w.errorRecoveryDisabledLanes|=g,Qa|=g,p=4;break e}g=Bn,Bn=p,g!==null&&(Bn===null?Bn=g:Bn.push.apply(Bn,g))}p=T}if(g=!1,p!==2)continue}}if(p===1){Tl(i,0),Ss(i,s,0,!0);break}e:{switch(c=i,g=p,g){case 0:case 1:throw Error(r(345));case 4:if((s&4194048)!==s)break;case 6:Ss(c,s,yr,!bs);break e;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((s&62914560)===s&&(p=Sy+300-ar(),10<p)){if(Ss(c,s,yr,!bs),Uo(c,0,!0)!==0)break e;c.timeoutHandle=yw(qb.bind(null,c,l,Bn,Pf,Ay,s,yr,Qa,_l,bs,g,2,-0,0),p);break e}qb(c,l,Bn,Pf,Ay,s,yr,Qa,_l,bs,g,0,-0,0)}}break}while(!0);Yr(i)}function qb(i,s,l,c,p,g,T,w,D,G,te,ie,K,Q){if(i.timeoutHandle=-1,ie=s.subtreeFlags,(ie&8192||(ie&16785408)===16785408)&&(zc={stylesheets:null,count:0,unsuspend:VP},Mb(s),ie=LP(),ie!==null)){i.cancelPendingCommit=ie(Wb.bind(null,i,s,g,l,c,p,T,w,D,te,1,K,Q)),Ss(i,g,T,!G);return}Wb(i,s,g,l,c,p,T,w,D)}function eP(i){for(var s=i;;){var l=s.tag;if((l===0||l===11||l===15)&&s.flags&16384&&(l=s.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var c=0;c<l.length;c++){var p=l[c],g=p.getSnapshot;p=p.value;try{if(!Kn(g(),p))return!1}catch{return!1}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ss(i,s,l,c){s&=~Iy,s&=~Qa,i.suspendedLanes|=s,i.pingedLanes&=~s,c&&(i.warmLanes|=s),c=i.expirationTimes;for(var p=s;0<p;){var g=31-En(p),T=1<<g;c[g]=-1,p&=~T}l!==0&&Or(i,l,s)}function Nf(){return(Je&6)===0?(Vc(0),!1):!0}function Dy(){if(Le!==null){if(et===0)var i=Le.return;else i=Le,Ni=ja=null,Kg(i),fl=null,Ac=0,i=Le;for(;i!==null;)bb(i.alternate,i),i=i.return;Le=null}}function Tl(i,s){var l=i.timeoutHandle;l!==-1&&(i.timeoutHandle=-1,_P(l)),l=i.cancelPendingCommit,l!==null&&(i.cancelPendingCommit=null,l()),Dy(),ut=i,Le=l=xi(i.current,null),He=s,et=0,Xn=null,bs=!1,yl=Ea(i,s),wy=!1,_l=yr=Iy=Qa=ws=xt=0,Bn=kc=null,Ay=!1,(s&8)!==0&&(s|=s&32);var c=i.entangledLanes;if(c!==0)for(i=i.entanglements,c&=s;0<c;){var p=31-En(c),g=1<<p;s|=i[p],c&=~g}return Fi=s,Jd(),l}function Hb(i,s){Ve=null,ee.H=vf,s===gc||s===uf?(s=o0(),et=3):s===i0?(s=o0(),et=4):et=s===lb?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Xn=s,Le===null&&(xt=1,If(i,dr(s,i.current)))}function Gb(){var i=ee.H;return ee.H=vf,i===null?vf:i}function $b(){var i=ee.A;return ee.A=ZD,i}function Py(){xt=4,bs||(He&4194048)!==He&&gr.current!==null||(yl=!0),(ws&134217727)===0&&(Qa&134217727)===0||ut===null||Ss(ut,He,yr,!1)}function Ny(i,s,l){var c=Je;Je|=2;var p=Gb(),g=$b();(ut!==i||He!==s)&&(Pf=null,Tl(i,s)),s=!1;var T=xt;e:do try{if(et!==0&&Le!==null){var w=Le,D=Xn;switch(et){case 8:Dy(),T=6;break e;case 3:case 2:case 9:case 6:gr.current===null&&(s=!0);var G=et;if(et=0,Xn=null,bl(i,w,D,G),l&&yl){T=0;break e}break;default:G=et,et=0,Xn=null,bl(i,w,D,G)}}tP(),T=xt;break}catch(te){Hb(i,te)}while(!0);return s&&i.shellSuspendCounter++,Ni=ja=null,Je=c,ee.H=p,ee.A=g,Le===null&&(ut=null,He=0,Jd()),T}function tP(){for(;Le!==null;)Kb(Le)}function nP(i,s){var l=Je;Je|=2;var c=Gb(),p=$b();ut!==i||He!==s?(Pf=null,Df=ar()+500,Tl(i,s)):yl=Ea(i,s);e:do try{if(et!==0&&Le!==null){s=Le;var g=Xn;t:switch(et){case 1:et=0,Xn=null,bl(i,s,g,1);break;case 2:case 9:if(s0(g)){et=0,Xn=null,Qb(s);break}s=function(){et!==2&&et!==9||ut!==i||(et=7),Yr(i)},g.then(s,s);break e;case 3:et=7;break e;case 4:et=5;break e;case 7:s0(g)?(et=0,Xn=null,Qb(s)):(et=0,Xn=null,bl(i,s,g,7));break;case 5:var T=null;switch(Le.tag){case 26:T=Le.memoizedState;case 5:case 27:var w=Le;if(!T||xw(T)){et=0,Xn=null;var D=w.sibling;if(D!==null)Le=D;else{var G=w.return;G!==null?(Le=G,kf(G)):Le=null}break t}}et=0,Xn=null,bl(i,s,g,5);break;case 6:et=0,Xn=null,bl(i,s,g,6);break;case 8:Dy(),xt=6;break e;default:throw Error(r(462))}}rP();break}catch(te){Hb(i,te)}while(!0);return Ni=ja=null,ee.H=c,ee.A=p,Je=l,Le!==null?0:(ut=null,He=0,Jd(),xt)}function rP(){for(;Le!==null&&!Bu();)Kb(Le)}function Kb(i){var s=Eb(i.alternate,i,Fi);i.memoizedProps=i.pendingProps,s===null?kf(i):Le=s}function Qb(i){var s=i,l=s.alternate;switch(s.tag){case 15:case 0:s=pb(l,s,s.pendingProps,s.type,void 0,He);break;case 11:s=pb(l,s,s.pendingProps,s.type.render,s.ref,He);break;case 5:Kg(s);default:bb(l,s),s=Le=YT(s,Fi),s=Eb(l,s,Fi)}i.memoizedProps=i.pendingProps,s===null?kf(i):Le=s}function bl(i,s,l,c){Ni=ja=null,Kg(s),fl=null,Ac=0;var p=s.return;try{if($D(i,p,s,l,He)){xt=1,If(i,dr(l,i.current)),Le=null;return}}catch(g){if(p!==null)throw Le=p,g;xt=1,If(i,dr(l,i.current)),Le=null;return}s.flags&32768?(Ye||c===1?i=!0:yl||(He&536870912)!==0?i=!1:(bs=i=!0,(c===2||c===9||c===3||c===6)&&(c=gr.current,c!==null&&c.tag===13&&(c.flags|=16384))),Yb(s,i)):kf(s)}function kf(i){var s=i;do{if((s.flags&32768)!==0){Yb(s,bs);return}i=s.return;var l=QD(s.alternate,s,Fi);if(l!==null){Le=l;return}if(s=s.sibling,s!==null){Le=s;return}Le=s=i}while(s!==null);xt===0&&(xt=5)}function Yb(i,s){do{var l=YD(i.alternate,i);if(l!==null){l.flags&=32767,Le=l;return}if(l=i.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!s&&(i=i.sibling,i!==null)){Le=i;return}Le=i=l}while(i!==null);xt=6,Le=null}function Wb(i,s,l,c,p,g,T,w,D){i.cancelPendingCommit=null;do Of();while(fn!==0);if((Je&6)!==0)throw Error(r(327));if(s!==null){if(s===i.current)throw Error(r(177));if(g=s.lanes|s.childLanes,g|=bg,Gu(i,l,g,T,w,D),i===ut&&(Le=ut=null,He=0),vl=s,As=i,El=l,Ry=g,Cy=p,Fb=c,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,oP(ga,function(){return tw(),null})):(i.callbackNode=null,i.callbackPriority=0),c=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||c){c=ee.T,ee.T=null,p=he.p,he.p=2,T=Je,Je|=4;try{WD(i,s,l)}finally{Je=T,he.p=p,ee.T=c}}fn=1,Xb(),Zb(),Jb()}}function Xb(){if(fn===1){fn=0;var i=As,s=vl,l=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||l){l=ee.T,ee.T=null;var c=he.p;he.p=2;var p=Je;Je|=4;try{kb(s,i);var g=Hy,T=BT(i.containerInfo),w=g.focusedElem,D=g.selectionRange;if(T!==w&&w&&w.ownerDocument&&UT(w.ownerDocument.documentElement,w)){if(D!==null&&yg(w)){var G=D.start,te=D.end;if(te===void 0&&(te=G),"selectionStart"in w)w.selectionStart=G,w.selectionEnd=Math.min(te,w.value.length);else{var ie=w.ownerDocument||document,K=ie&&ie.defaultView||window;if(K.getSelection){var Q=K.getSelection(),xe=w.textContent.length,Se=Math.min(D.start,xe),ot=D.end===void 0?Se:Math.min(D.end,xe);!Q.extend&&Se>ot&&(T=ot,ot=Se,Se=T);var B=LT(w,Se),V=LT(w,ot);if(B&&V&&(Q.rangeCount!==1||Q.anchorNode!==B.node||Q.anchorOffset!==B.offset||Q.focusNode!==V.node||Q.focusOffset!==V.offset)){var q=ie.createRange();q.setStart(B.node,B.offset),Q.removeAllRanges(),Se>ot?(Q.addRange(q),Q.extend(V.node,V.offset)):(q.setEnd(V.node,V.offset),Q.addRange(q))}}}}for(ie=[],Q=w;Q=Q.parentNode;)Q.nodeType===1&&ie.push({element:Q,left:Q.scrollLeft,top:Q.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<ie.length;w++){var ne=ie[w];ne.element.scrollLeft=ne.left,ne.element.scrollTop=ne.top}}$f=!!qy,Hy=qy=null}finally{Je=p,he.p=c,ee.T=l}}i.current=s,fn=2}}function Zb(){if(fn===2){fn=0;var i=As,s=vl,l=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||l){l=ee.T,ee.T=null;var c=he.p;he.p=2;var p=Je;Je|=4;try{xb(i,s.alternate,s)}finally{Je=p,he.p=c,ee.T=l}}fn=3}}function Jb(){if(fn===4||fn===3){fn=0,Cd();var i=As,s=vl,l=El,c=Fb;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?fn=5:(fn=0,vl=As=null,ew(i,i.pendingLanes));var p=i.pendingLanes;if(p===0&&(Is=null),Bo(l),s=s.stateNode,Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(Rt,s,void 0,(s.current.flags&128)===128)}catch{}if(c!==null){s=ee.T,p=he.p,he.p=2,ee.T=null;try{for(var g=i.onRecoverableError,T=0;T<c.length;T++){var w=c[T];g(w.value,{componentStack:w.stack})}}finally{ee.T=s,he.p=p}}(El&3)!==0&&Of(),Yr(i),p=i.pendingLanes,(l&4194090)!==0&&(p&42)!==0?i===xy?Oc++:(Oc=0,xy=i):Oc=0,Vc(0)}}function ew(i,s){(i.pooledCacheLanes&=s)===0&&(s=i.pooledCache,s!=null&&(i.pooledCache=null,pc(s)))}function Of(i){return Xb(),Zb(),Jb(),tw()}function tw(){if(fn!==5)return!1;var i=As,s=Ry;Ry=0;var l=Bo(El),c=ee.T,p=he.p;try{he.p=32>l?32:l,ee.T=null,l=Cy,Cy=null;var g=As,T=El;if(fn=0,vl=As=null,El=0,(Je&6)!==0)throw Error(r(331));var w=Je;if(Je|=4,Ub(g.current),Vb(g,g.current,T,l),Je=w,Vc(0,!1),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(Rt,g)}catch{}return!0}finally{he.p=p,ee.T=c,ew(i,s)}}function nw(i,s,l){s=dr(l,s),s=oy(i.stateNode,s,2),i=ms(i,s,2),i!==null&&(_i(i,2),Yr(i))}function lt(i,s,l){if(i.tag===3)nw(i,i,l);else for(;s!==null;){if(s.tag===3){nw(s,i,l);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Is===null||!Is.has(c))){i=dr(l,i),l=ab(2),c=ms(s,l,2),c!==null&&(ob(l,c,s,i),_i(c,2),Yr(c));break}}s=s.return}}function ky(i,s,l){var c=i.pingCache;if(c===null){c=i.pingCache=new JD;var p=new Set;c.set(s,p)}else p=c.get(s),p===void 0&&(p=new Set,c.set(s,p));p.has(l)||(wy=!0,p.add(l),i=iP.bind(null,i,s,l),s.then(i,i))}function iP(i,s,l){var c=i.pingCache;c!==null&&c.delete(s),i.pingedLanes|=i.suspendedLanes&l,i.warmLanes&=~l,ut===i&&(He&l)===l&&(xt===4||xt===3&&(He&62914560)===He&&300>ar()-Sy?(Je&2)===0&&Tl(i,0):Iy|=l,_l===He&&(_l=0)),Yr(i)}function rw(i,s){s===0&&(s=Hu()),i=rl(i,s),i!==null&&(_i(i,s),Yr(i))}function sP(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),rw(i,l)}function aP(i,s){var l=0;switch(i.tag){case 13:var c=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:c=i.stateNode;break;case 22:c=i.stateNode._retryCache;break;default:throw Error(r(314))}c!==null&&c.delete(s),rw(i,l)}function oP(i,s){return pa(i,s)}var Vf=null,wl=null,Oy=!1,Mf=!1,Vy=!1,Ya=0;function Yr(i){i!==wl&&i.next===null&&(wl===null?Vf=wl=i:wl=wl.next=i),Mf=!0,Oy||(Oy=!0,uP())}function Vc(i,s){if(!Vy&&Mf){Vy=!0;do for(var l=!1,c=Vf;c!==null;){if(i!==0){var p=c.pendingLanes;if(p===0)var g=0;else{var T=c.suspendedLanes,w=c.pingedLanes;g=(1<<31-En(42|i)+1)-1,g&=p&~(T&~w),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(l=!0,ow(c,g))}else g=He,g=Uo(c,c===ut?g:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(g&3)===0||Ea(c,g)||(l=!0,ow(c,g));c=c.next}while(l);Vy=!1}}function lP(){iw()}function iw(){Mf=Oy=!1;var i=0;Ya!==0&&(yP()&&(i=Ya),Ya=0);for(var s=ar(),l=null,c=Vf;c!==null;){var p=c.next,g=sw(c,s);g===0?(c.next=null,l===null?Vf=p:l.next=p,p===null&&(wl=l)):(l=c,(i!==0||(g&3)!==0)&&(Mf=!0)),c=p}Vc(i)}function sw(i,s){for(var l=i.suspendedLanes,c=i.pingedLanes,p=i.expirationTimes,g=i.pendingLanes&-62914561;0<g;){var T=31-En(g),w=1<<T,D=p[T];D===-1?((w&l)===0||(w&c)!==0)&&(p[T]=ju(w,s)):D<=s&&(i.expiredLanes|=w),g&=~w}if(s=ut,l=He,l=Uo(i,i===s?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c=i.callbackNode,l===0||i===s&&(et===2||et===9)||i.cancelPendingCommit!==null)return c!==null&&c!==null&&ma(c),i.callbackNode=null,i.callbackPriority=0;if((l&3)===0||Ea(i,l)){if(s=l&-l,s===i.callbackPriority)return s;switch(c!==null&&ma(c),Bo(l)){case 2:case 8:l=Mo;break;case 32:l=ga;break;case 268435456:l=Lo;break;default:l=ga}return c=aw.bind(null,i),l=pa(l,c),i.callbackPriority=s,i.callbackNode=l,s}return c!==null&&c!==null&&ma(c),i.callbackPriority=2,i.callbackNode=null,2}function aw(i,s){if(fn!==0&&fn!==5)return i.callbackNode=null,i.callbackPriority=0,null;var l=i.callbackNode;if(Of()&&i.callbackNode!==l)return null;var c=He;return c=Uo(i,i===ut?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c===0?null:(jb(i,c,s),sw(i,ar()),i.callbackNode!=null&&i.callbackNode===l?aw.bind(null,i):null)}function ow(i,s){if(Of())return null;jb(i,s,!0)}function uP(){vP(function(){(Je&6)!==0?pa(Fu,lP):iw()})}function My(){return Ya===0&&(Ya=qu()),Ya}function lw(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:Go(""+i)}function uw(i,s){var l=s.ownerDocument.createElement("input");return l.name=s.name,l.value=s.value,i.id&&l.setAttribute("form",i.id),s.parentNode.insertBefore(l,s),i=new FormData(i),l.parentNode.removeChild(l),i}function cP(i,s,l,c,p){if(s==="submit"&&l&&l.stateNode===p){var g=lw((p[Bt]||null).action),T=c.submitter;T&&(s=(s=T[Bt]||null)?lw(s.formAction):T.getAttribute("formAction"),s!==null&&(g=s,T=null));var w=new $o("action","action",null,c,p);i.push({event:w,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Ya!==0){var D=T?uw(p,T):new FormData(p);ny(l,{pending:!0,data:D,method:p.method,action:g},null,D)}}else typeof g=="function"&&(w.preventDefault(),D=T?uw(p,T):new FormData(p),ny(l,{pending:!0,data:D,method:p.method,action:g},g,D))},currentTarget:p}]})}}for(var Ly=0;Ly<Tg.length;Ly++){var Uy=Tg[Ly],hP=Uy.toLowerCase(),dP=Uy[0].toUpperCase()+Uy.slice(1);Sr(hP,"on"+dP)}Sr(jT,"onAnimationEnd"),Sr(qT,"onAnimationIteration"),Sr(HT,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(xD,"onTransitionRun"),Sr(DD,"onTransitionStart"),Sr(PD,"onTransitionCancel"),Sr(GT,"onTransitionEnd"),Ei("onMouseEnter",["mouseout","mouseover"]),Ei("onMouseLeave",["mouseout","mouseover"]),Ei("onPointerEnter",["pointerout","pointerover"]),Ei("onPointerLeave",["pointerout","pointerover"]),Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fP=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mc));function cw(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var c=i[l],p=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var T=c.length-1;0<=T;T--){var w=c[T],D=w.instance,G=w.currentTarget;if(w=w.listener,D!==g&&p.isPropagationStopped())break e;g=w,p.currentTarget=G;try{g(p)}catch(te){wf(te)}p.currentTarget=null,g=D}else for(T=0;T<c.length;T++){if(w=c[T],D=w.instance,G=w.currentTarget,w=w.listener,D!==g&&p.isPropagationStopped())break e;g=w,p.currentTarget=G;try{g(p)}catch(te){wf(te)}p.currentTarget=null,g=D}}}}function Ue(i,s){var l=s[Ku];l===void 0&&(l=s[Ku]=new Set);var c=i+"__bubble";l.has(c)||(hw(s,i,2,!1),l.add(c))}function By(i,s,l){var c=0;s&&(c|=4),hw(l,i,c,s)}var Lf="_reactListening"+Math.random().toString(36).slice(2);function Fy(i){if(!i[Lf]){i[Lf]=!0,Qu.forEach(function(l){l!=="selectionchange"&&(fP.has(l)||By(l,!1,i),By(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Lf]||(s[Lf]=!0,By("selectionchange",!1,s))}}function hw(i,s,l,c){switch(Vw(s)){case 2:var p=FP;break;case 8:p=zP;break;default:p=e_}l=p.bind(null,s,l,i),p=void 0,!cr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),c?p!==void 0?i.addEventListener(s,l,{capture:!0,passive:p}):i.addEventListener(s,l,!0):p!==void 0?i.addEventListener(s,l,{passive:p}):i.addEventListener(s,l,!1)}function zy(i,s,l,c,p){var g=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var w=c.stateNode.containerInfo;if(w===p)break;if(T===4)for(T=c.return;T!==null;){var D=T.tag;if((D===3||D===4)&&T.stateNode.containerInfo===p)return;T=T.return}for(;w!==null;){if(T=vi(w),T===null)return;if(D=T.tag,D===5||D===6||D===26||D===27){c=g=T;continue e}w=w.parentNode}}c=c.return}Ud(function(){var G=g,te=ur(l),ie=[];e:{var K=$T.get(i);if(K!==void 0){var Q=$o,xe=i;switch(i){case"keypress":if(Fr(l)===0)break e;case"keydown":case"keyup":Q=Zo;break;case"focusin":xe="focus",Q=Yo;break;case"focusout":xe="blur",Q=Yo;break;case"beforeblur":case"afterblur":Q=Yo;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=hr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=$d;break;case jT:case qT:case HT:Q=Wo;break;case GT:Q=Qd;break;case"scroll":case"scrollend":Q=Bd;break;case"wheel":Q=Jo;break;case"copy":case"cut":case"paste":Q=Xo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=ac;break;case"toggle":case"beforetoggle":Q=Wd}var Se=(s&4)!==0,ot=!Se&&(i==="scroll"||i==="scrollend"),B=Se?K!==null?K+"Capture":null:K;Se=[];for(var V=G,q;V!==null;){var ne=V;if(q=ne.stateNode,ne=ne.tag,ne!==5&&ne!==26&&ne!==27||q===null||B===null||(ne=Ca(V,B),ne!=null&&Se.push(Lc(V,ne,q))),ot)break;V=V.return}0<Se.length&&(K=new Q(K,xe,null,l,te),ie.push({event:K,listeners:Se}))}}if((s&7)===0){e:{if(K=i==="mouseover"||i==="pointerover",Q=i==="mouseout"||i==="pointerout",K&&l!==wi&&(xe=l.relatedTarget||l.fromElement)&&(vi(xe)||xe[or]))break e;if((Q||K)&&(K=te.window===te?te:(K=te.ownerDocument)?K.defaultView||K.parentWindow:window,Q?(xe=l.relatedTarget||l.toElement,Q=G,xe=xe?vi(xe):null,xe!==null&&(ot=o(xe),Se=xe.tag,xe!==ot||Se!==5&&Se!==27&&Se!==6)&&(xe=null)):(Q=null,xe=G),Q!==xe)){if(Se=hr,ne="onMouseLeave",B="onMouseEnter",V="mouse",(i==="pointerout"||i==="pointerover")&&(Se=ac,ne="onPointerLeave",B="onPointerEnter",V="pointer"),ot=Q==null?K:Mr(Q),q=xe==null?K:Mr(xe),K=new Se(ne,V+"leave",Q,l,te),K.target=ot,K.relatedTarget=q,ne=null,vi(te)===G&&(Se=new Se(B,V+"enter",xe,l,te),Se.target=q,Se.relatedTarget=ot,ne=Se),ot=ne,Q&&xe)t:{for(Se=Q,B=xe,V=0,q=Se;q;q=Il(q))V++;for(q=0,ne=B;ne;ne=Il(ne))q++;for(;0<V-q;)Se=Il(Se),V--;for(;0<q-V;)B=Il(B),q--;for(;V--;){if(Se===B||B!==null&&Se===B.alternate)break t;Se=Il(Se),B=Il(B)}Se=null}else Se=null;Q!==null&&dw(ie,K,Q,Se,!1),xe!==null&&ot!==null&&dw(ie,ot,xe,Se,!0)}}e:{if(K=G?Mr(G):window,Q=K.nodeName&&K.nodeName.toLowerCase(),Q==="select"||Q==="input"&&K.type==="file")var _e=PT;else if(Qt(K))if(NT)_e=SD;else{_e=ID;var Me=wD}else Q=K.nodeName,!Q||Q.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?G&&Ju(G.elementType)&&(_e=PT):_e=AD;if(_e&&(_e=_e(i,G))){Ci(ie,_e,l,te);break e}Me&&Me(i,K,G),i==="focusout"&&G&&K.type==="number"&&G.memoizedProps.value!=null&&cs(K,"number",K.value)}switch(Me=G?Mr(G):window,i){case"focusin":(Qt(Me)||Me.contentEditable==="true")&&(el=Me,_g=G,uc=null);break;case"focusout":uc=_g=el=null;break;case"mousedown":vg=!0;break;case"contextmenu":case"mouseup":case"dragend":vg=!1,FT(ie,l,te);break;case"selectionchange":if(CD)break;case"keydown":case"keyup":FT(ie,l,te)}var we;if(qr)e:{switch(i){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else je?X(i,l)&&(Re="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Re="onCompositionStart");Re&&(E&&l.locale!=="ko"&&(je||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&je&&(we=tc()):(Br=te,hs="value"in Br?Br.value:Br.textContent,je=!0)),Me=Uf(G,Re),0<Me.length&&(Re=new ic(Re,i,null,l,te),ie.push({event:Re,listeners:Me}),we?Re.data=we:(we=fe(l),we!==null&&(Re.data=we)))),(we=_?Kt(i,l):qe(i,l))&&(Re=Uf(G,"onBeforeInput"),0<Re.length&&(Me=new ic("onBeforeInput","beforeinput",null,l,te),ie.push({event:Me,listeners:Re}),Me.data=we)),cP(ie,i,G,l,te)}cw(ie,s)})}function Lc(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Uf(i,s){for(var l=s+"Capture",c=[];i!==null;){var p=i,g=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||g===null||(p=Ca(i,l),p!=null&&c.unshift(Lc(i,p,g)),p=Ca(i,s),p!=null&&c.push(Lc(i,p,g))),i.tag===3)return c;i=i.return}return[]}function Il(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function dw(i,s,l,c,p){for(var g=s._reactName,T=[];l!==null&&l!==c;){var w=l,D=w.alternate,G=w.stateNode;if(w=w.tag,D!==null&&D===c)break;w!==5&&w!==26&&w!==27||G===null||(D=G,p?(G=Ca(l,g),G!=null&&T.unshift(Lc(l,G,D))):p||(G=Ca(l,g),G!=null&&T.push(Lc(l,G,D)))),l=l.return}T.length!==0&&i.push({event:s,listeners:T})}var pP=/\r\n?/g,mP=/\u0000|\uFFFD/g;function fw(i){return(typeof i=="string"?i:""+i).replace(pP,`
`).replace(mP,"")}function pw(i,s){return s=fw(s),fw(i)===s}function Bf(){}function at(i,s,l,c,p,g){switch(l){case"children":typeof c=="string"?s==="body"||s==="textarea"&&c===""||lr(i,c):(typeof c=="number"||typeof c=="bigint")&&s!=="body"&&lr(i,""+c);break;case"className":Lr(i,"class",c);break;case"tabIndex":Lr(i,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Lr(i,l,c);break;case"style":Zu(i,c,g);break;case"data":if(s!=="object"){Lr(i,"data",c);break}case"src":case"href":if(c===""&&(s!=="a"||l!=="href")){i.removeAttribute(l);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(l);break}c=Go(""+c),i.setAttribute(l,c);break;case"action":case"formAction":if(typeof c=="function"){i.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(l==="formAction"?(s!=="input"&&at(i,s,"name",p.name,p,null),at(i,s,"formEncType",p.formEncType,p,null),at(i,s,"formMethod",p.formMethod,p,null),at(i,s,"formTarget",p.formTarget,p,null)):(at(i,s,"encType",p.encType,p,null),at(i,s,"method",p.method,p,null),at(i,s,"target",p.target,p,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(l);break}c=Go(""+c),i.setAttribute(l,c);break;case"onClick":c!=null&&(i.onclick=Bf);break;case"onScroll":c!=null&&Ue("scroll",i);break;case"onScrollEnd":c!=null&&Ue("scrollend",i);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(l=c.__html,l!=null){if(p.children!=null)throw Error(r(60));i.innerHTML=l}}break;case"multiple":i.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":i.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){i.removeAttribute("xlink:href");break}l=Go(""+c),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,""+c):i.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,""):i.removeAttribute(l);break;case"capture":case"download":c===!0?i.setAttribute(l,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,c):i.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?i.setAttribute(l,c):i.removeAttribute(l);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?i.removeAttribute(l):i.setAttribute(l,c);break;case"popover":Ue("beforetoggle",i),Ue("toggle",i),us(i,"popover",c);break;case"xlinkActuate":cn(i,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":cn(i,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":cn(i,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":cn(i,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":cn(i,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":cn(i,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":cn(i,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":cn(i,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":cn(i,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":us(i,"is",c);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=hg.get(l)||l,us(i,l,c))}}function jy(i,s,l,c,p,g){switch(l){case"style":Zu(i,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(l=c.__html,l!=null){if(p.children!=null)throw Error(r(60));i.innerHTML=l}}break;case"children":typeof c=="string"?lr(i,c):(typeof c=="number"||typeof c=="bigint")&&lr(i,""+c);break;case"onScroll":c!=null&&Ue("scroll",i);break;case"onScrollEnd":c!=null&&Ue("scrollend",i);break;case"onClick":c!=null&&(i.onclick=Bf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fo.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(p=l.endsWith("Capture"),s=l.slice(2,p?l.length-7:void 0),g=i[Bt]||null,g=g!=null?g[l]:null,typeof g=="function"&&i.removeEventListener(s,g,p),typeof c=="function")){typeof g!="function"&&g!==null&&(l in i?i[l]=null:i.hasAttribute(l)&&i.removeAttribute(l)),i.addEventListener(s,c,p);break e}l in i?i[l]=c:c===!0?i.setAttribute(l,""):us(i,l,c)}}}function pn(i,s,l){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",i),Ue("load",i);var c=!1,p=!1,g;for(g in l)if(l.hasOwnProperty(g)){var T=l[g];if(T!=null)switch(g){case"src":c=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:at(i,s,g,T,l,null)}}p&&at(i,s,"srcSet",l.srcSet,l,null),c&&at(i,s,"src",l.src,l,null);return;case"input":Ue("invalid",i);var w=g=T=p=null,D=null,G=null;for(c in l)if(l.hasOwnProperty(c)){var te=l[c];if(te!=null)switch(c){case"name":p=te;break;case"type":T=te;break;case"checked":D=te;break;case"defaultChecked":G=te;break;case"value":g=te;break;case"defaultValue":w=te;break;case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(r(137,s));break;default:at(i,s,c,te,l,null)}}Aa(i,g,w,D,G,T,p,!1),Ho(i);return;case"select":Ue("invalid",i),c=T=g=null;for(p in l)if(l.hasOwnProperty(p)&&(w=l[p],w!=null))switch(p){case"value":g=w;break;case"defaultValue":T=w;break;case"multiple":c=w;default:at(i,s,p,w,l,null)}s=g,l=T,i.multiple=!!c,s!=null?bi(i,!!c,s,!1):l!=null&&bi(i,!!c,l,!0);return;case"textarea":Ue("invalid",i),g=p=c=null;for(T in l)if(l.hasOwnProperty(T)&&(w=l[T],w!=null))switch(T){case"value":c=w;break;case"defaultValue":p=w;break;case"children":g=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:at(i,s,T,w,l,null)}Sa(i,c,p,g),Ho(i);return;case"option":for(D in l)if(l.hasOwnProperty(D)&&(c=l[D],c!=null))switch(D){case"selected":i.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:at(i,s,D,c,l,null)}return;case"dialog":Ue("beforetoggle",i),Ue("toggle",i),Ue("cancel",i),Ue("close",i);break;case"iframe":case"object":Ue("load",i);break;case"video":case"audio":for(c=0;c<Mc.length;c++)Ue(Mc[c],i);break;case"image":Ue("error",i),Ue("load",i);break;case"details":Ue("toggle",i);break;case"embed":case"source":case"link":Ue("error",i),Ue("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(G in l)if(l.hasOwnProperty(G)&&(c=l[G],c!=null))switch(G){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:at(i,s,G,c,l,null)}return;default:if(Ju(s)){for(te in l)l.hasOwnProperty(te)&&(c=l[te],c!==void 0&&jy(i,s,te,c,l,void 0));return}}for(w in l)l.hasOwnProperty(w)&&(c=l[w],c!=null&&at(i,s,w,c,l,null))}function gP(i,s,l,c){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,g=null,T=null,w=null,D=null,G=null,te=null;for(Q in l){var ie=l[Q];if(l.hasOwnProperty(Q)&&ie!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":D=ie;default:c.hasOwnProperty(Q)||at(i,s,Q,null,c,ie)}}for(var K in c){var Q=c[K];if(ie=l[K],c.hasOwnProperty(K)&&(Q!=null||ie!=null))switch(K){case"type":g=Q;break;case"name":p=Q;break;case"checked":G=Q;break;case"defaultChecked":te=Q;break;case"value":T=Q;break;case"defaultValue":w=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(r(137,s));break;default:Q!==ie&&at(i,s,K,Q,c,ie)}}$n(i,T,w,D,G,te,g,p);return;case"select":Q=T=w=K=null;for(g in l)if(D=l[g],l.hasOwnProperty(g)&&D!=null)switch(g){case"value":break;case"multiple":Q=D;default:c.hasOwnProperty(g)||at(i,s,g,null,c,D)}for(p in c)if(g=c[p],D=l[p],c.hasOwnProperty(p)&&(g!=null||D!=null))switch(p){case"value":K=g;break;case"defaultValue":w=g;break;case"multiple":T=g;default:g!==D&&at(i,s,p,g,c,D)}s=w,l=T,c=Q,K!=null?bi(i,!!l,K,!1):!!c!=!!l&&(s!=null?bi(i,!!l,s,!0):bi(i,!!l,l?[]:"",!1));return;case"textarea":Q=K=null;for(w in l)if(p=l[w],l.hasOwnProperty(w)&&p!=null&&!c.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:at(i,s,w,null,c,p)}for(T in c)if(p=c[T],g=l[T],c.hasOwnProperty(T)&&(p!=null||g!=null))switch(T){case"value":K=p;break;case"defaultValue":Q=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(r(91));break;default:p!==g&&at(i,s,T,p,c,g)}it(i,K,Q);return;case"option":for(var xe in l)if(K=l[xe],l.hasOwnProperty(xe)&&K!=null&&!c.hasOwnProperty(xe))switch(xe){case"selected":i.selected=!1;break;default:at(i,s,xe,null,c,K)}for(D in c)if(K=c[D],Q=l[D],c.hasOwnProperty(D)&&K!==Q&&(K!=null||Q!=null))switch(D){case"selected":i.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:at(i,s,D,K,c,Q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Se in l)K=l[Se],l.hasOwnProperty(Se)&&K!=null&&!c.hasOwnProperty(Se)&&at(i,s,Se,null,c,K);for(G in c)if(K=c[G],Q=l[G],c.hasOwnProperty(G)&&K!==Q&&(K!=null||Q!=null))switch(G){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(r(137,s));break;default:at(i,s,G,K,c,Q)}return;default:if(Ju(s)){for(var ot in l)K=l[ot],l.hasOwnProperty(ot)&&K!==void 0&&!c.hasOwnProperty(ot)&&jy(i,s,ot,void 0,c,K);for(te in c)K=c[te],Q=l[te],!c.hasOwnProperty(te)||K===Q||K===void 0&&Q===void 0||jy(i,s,te,K,c,Q);return}}for(var B in l)K=l[B],l.hasOwnProperty(B)&&K!=null&&!c.hasOwnProperty(B)&&at(i,s,B,null,c,K);for(ie in c)K=c[ie],Q=l[ie],!c.hasOwnProperty(ie)||K===Q||K==null&&Q==null||at(i,s,ie,K,c,Q)}var qy=null,Hy=null;function Ff(i){return i.nodeType===9?i:i.ownerDocument}function mw(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gw(i,s){if(i===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&s==="foreignObject"?0:i}function Gy(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var $y=null;function yP(){var i=window.event;return i&&i.type==="popstate"?i===$y?!1:($y=i,!0):($y=null,!1)}var yw=typeof setTimeout=="function"?setTimeout:void 0,_P=typeof clearTimeout=="function"?clearTimeout:void 0,_w=typeof Promise=="function"?Promise:void 0,vP=typeof queueMicrotask=="function"?queueMicrotask:typeof _w<"u"?function(i){return _w.resolve(null).then(i).catch(EP)}:yw;function EP(i){setTimeout(function(){throw i})}function Rs(i){return i==="head"}function vw(i,s){var l=s,c=0,p=0;do{var g=l.nextSibling;if(i.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(0<c&&8>c){l=c;var T=i.ownerDocument;if(l&1&&Uc(T.documentElement),l&2&&Uc(T.body),l&4)for(l=T.head,Uc(l),T=l.firstChild;T;){var w=T.nextSibling,D=T.nodeName;T[Ta]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&T.rel.toLowerCase()==="stylesheet"||l.removeChild(T),T=w}}if(p===0){i.removeChild(g),$c(s);return}p--}else l==="$"||l==="$?"||l==="$!"?p++:c=l.charCodeAt(0)-48;else c=0;l=g}while(l);$c(s)}function Ky(i){var s=i.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var l=s;switch(s=s.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Ky(l),ls(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}i.removeChild(l)}}function TP(i,s,l,c){for(;i.nodeType===1;){var p=l;if(i.nodeName.toLowerCase()!==s.toLowerCase()){if(!c&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(c){if(!i[Ta])switch(s){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(g=i.getAttribute("rel"),g==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(g!==p.rel||i.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||i.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||i.getAttribute("title")!==(p.title==null?null:p.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(g=i.getAttribute("src"),(g!==(p.src==null?null:p.src)||i.getAttribute("type")!==(p.type==null?null:p.type)||i.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&g&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(s==="input"&&i.type==="hidden"){var g=p.name==null?null:""+p.name;if(p.type==="hidden"&&i.getAttribute("name")===g)return i}else return i;if(i=Cr(i.nextSibling),i===null)break}return null}function bP(i,s,l){if(s==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!l||(i=Cr(i.nextSibling),i===null))return null;return i}function Qy(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function wP(i,s){var l=i.ownerDocument;if(i.data!=="$?"||l.readyState==="complete")s();else{var c=function(){s(),l.removeEventListener("DOMContentLoaded",c)};l.addEventListener("DOMContentLoaded",c),i._reactRetry=c}}function Cr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return i}var Yy=null;function Ew(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}function Tw(i,s,l){switch(s=Ff(l),i){case"html":if(i=s.documentElement,!i)throw Error(r(452));return i;case"head":if(i=s.head,!i)throw Error(r(453));return i;case"body":if(i=s.body,!i)throw Error(r(454));return i;default:throw Error(r(451))}}function Uc(i){for(var s=i.attributes;s.length;)i.removeAttributeNode(s[0]);ls(i)}var _r=new Map,bw=new Set;function zf(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var zi=he.d;he.d={f:IP,r:AP,D:SP,C:RP,L:CP,m:xP,X:PP,S:DP,M:NP};function IP(){var i=zi.f(),s=Nf();return i||s}function AP(i){var s=Vr(i);s!==null&&s.tag===5&&s.type==="form"?j0(s):zi.r(i)}var Al=typeof document>"u"?null:document;function ww(i,s,l){var c=Al;if(c&&typeof s=="string"&&s){var p=Ft(s);p='link[rel="'+i+'"][href="'+p+'"]',typeof l=="string"&&(p+='[crossorigin="'+l+'"]'),bw.has(p)||(bw.add(p),i={rel:i,crossOrigin:l,href:s},c.querySelector(p)===null&&(s=c.createElement("link"),pn(s,"link",i),kt(s),c.head.appendChild(s)))}}function SP(i){zi.D(i),ww("dns-prefetch",i,null)}function RP(i,s){zi.C(i,s),ww("preconnect",i,s)}function CP(i,s,l){zi.L(i,s,l);var c=Al;if(c&&i&&s){var p='link[rel="preload"][as="'+Ft(s)+'"]';s==="image"&&l&&l.imageSrcSet?(p+='[imagesrcset="'+Ft(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(p+='[imagesizes="'+Ft(l.imageSizes)+'"]')):p+='[href="'+Ft(i)+'"]';var g=p;switch(s){case"style":g=Sl(i);break;case"script":g=Rl(i)}_r.has(g)||(i=y({rel:"preload",href:s==="image"&&l&&l.imageSrcSet?void 0:i,as:s},l),_r.set(g,i),c.querySelector(p)!==null||s==="style"&&c.querySelector(Bc(g))||s==="script"&&c.querySelector(Fc(g))||(s=c.createElement("link"),pn(s,"link",i),kt(s),c.head.appendChild(s)))}}function xP(i,s){zi.m(i,s);var l=Al;if(l&&i){var c=s&&typeof s.as=="string"?s.as:"script",p='link[rel="modulepreload"][as="'+Ft(c)+'"][href="'+Ft(i)+'"]',g=p;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Rl(i)}if(!_r.has(g)&&(i=y({rel:"modulepreload",href:i},s),_r.set(g,i),l.querySelector(p)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Fc(g)))return}c=l.createElement("link"),pn(c,"link",i),kt(c),l.head.appendChild(c)}}}function DP(i,s,l){zi.S(i,s,l);var c=Al;if(c&&i){var p=Rn(c).hoistableStyles,g=Sl(i);s=s||"default";var T=p.get(g);if(!T){var w={loading:0,preload:null};if(T=c.querySelector(Bc(g)))w.loading=5;else{i=y({rel:"stylesheet",href:i,"data-precedence":s},l),(l=_r.get(g))&&Wy(i,l);var D=T=c.createElement("link");kt(D),pn(D,"link",i),D._p=new Promise(function(G,te){D.onload=G,D.onerror=te}),D.addEventListener("load",function(){w.loading|=1}),D.addEventListener("error",function(){w.loading|=2}),w.loading|=4,jf(T,s,c)}T={type:"stylesheet",instance:T,count:1,state:w},p.set(g,T)}}}function PP(i,s){zi.X(i,s);var l=Al;if(l&&i){var c=Rn(l).hoistableScripts,p=Rl(i),g=c.get(p);g||(g=l.querySelector(Fc(p)),g||(i=y({src:i,async:!0},s),(s=_r.get(p))&&Xy(i,s),g=l.createElement("script"),kt(g),pn(g,"link",i),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(p,g))}}function NP(i,s){zi.M(i,s);var l=Al;if(l&&i){var c=Rn(l).hoistableScripts,p=Rl(i),g=c.get(p);g||(g=l.querySelector(Fc(p)),g||(i=y({src:i,async:!0,type:"module"},s),(s=_r.get(p))&&Xy(i,s),g=l.createElement("script"),kt(g),pn(g,"link",i),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(p,g))}}function Iw(i,s,l,c){var p=(p=Ie.current)?zf(p):null;if(!p)throw Error(r(446));switch(i){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(s=Sl(l.href),l=Rn(p).hoistableStyles,c=l.get(s),c||(c={type:"style",instance:null,count:0,state:null},l.set(s,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){i=Sl(l.href);var g=Rn(p).hoistableStyles,T=g.get(i);if(T||(p=p.ownerDocument||p,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(i,T),(g=p.querySelector(Bc(i)))&&!g._p&&(T.instance=g,T.state.loading=5),_r.has(i)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},_r.set(i,l),g||kP(p,i,l,T.state))),s&&c===null)throw Error(r(528,""));return T}if(s&&c!==null)throw Error(r(529,""));return null;case"script":return s=l.async,l=l.src,typeof l=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=Rl(l),l=Rn(p).hoistableScripts,c=l.get(s),c||(c={type:"script",instance:null,count:0,state:null},l.set(s,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,i))}}function Sl(i){return'href="'+Ft(i)+'"'}function Bc(i){return'link[rel="stylesheet"]['+i+"]"}function Aw(i){return y({},i,{"data-precedence":i.precedence,precedence:null})}function kP(i,s,l,c){i.querySelector('link[rel="preload"][as="style"]['+s+"]")?c.loading=1:(s=i.createElement("link"),c.preload=s,s.addEventListener("load",function(){return c.loading|=1}),s.addEventListener("error",function(){return c.loading|=2}),pn(s,"link",l),kt(s),i.head.appendChild(s))}function Rl(i){return'[src="'+Ft(i)+'"]'}function Fc(i){return"script[async]"+i}function Sw(i,s,l){if(s.count++,s.instance===null)switch(s.type){case"style":var c=i.querySelector('style[data-href~="'+Ft(l.href)+'"]');if(c)return s.instance=c,kt(c),c;var p=y({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return c=(i.ownerDocument||i).createElement("style"),kt(c),pn(c,"style",p),jf(c,l.precedence,i),s.instance=c;case"stylesheet":p=Sl(l.href);var g=i.querySelector(Bc(p));if(g)return s.state.loading|=4,s.instance=g,kt(g),g;c=Aw(l),(p=_r.get(p))&&Wy(c,p),g=(i.ownerDocument||i).createElement("link"),kt(g);var T=g;return T._p=new Promise(function(w,D){T.onload=w,T.onerror=D}),pn(g,"link",c),s.state.loading|=4,jf(g,l.precedence,i),s.instance=g;case"script":return g=Rl(l.src),(p=i.querySelector(Fc(g)))?(s.instance=p,kt(p),p):(c=l,(p=_r.get(g))&&(c=y({},l),Xy(c,p)),i=i.ownerDocument||i,p=i.createElement("script"),kt(p),pn(p,"link",c),i.head.appendChild(p),s.instance=p);case"void":return null;default:throw Error(r(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(c=s.instance,s.state.loading|=4,jf(c,l.precedence,i));return s.instance}function jf(i,s,l){for(var c=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=c.length?c[c.length-1]:null,g=p,T=0;T<c.length;T++){var w=c[T];if(w.dataset.precedence===s)g=w;else if(g!==p)break}g?g.parentNode.insertBefore(i,g.nextSibling):(s=l.nodeType===9?l.head:l,s.insertBefore(i,s.firstChild))}function Wy(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.title==null&&(i.title=s.title)}function Xy(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.integrity==null&&(i.integrity=s.integrity)}var qf=null;function Rw(i,s,l){if(qf===null){var c=new Map,p=qf=new Map;p.set(l,c)}else p=qf,c=p.get(l),c||(c=new Map,p.set(l,c));if(c.has(i))return c;for(c.set(i,null),l=l.getElementsByTagName(i),p=0;p<l.length;p++){var g=l[p];if(!(g[Ta]||g[$t]||i==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var T=g.getAttribute(s)||"";T=i+T;var w=c.get(T);w?w.push(g):c.set(T,[g])}}return c}function Cw(i,s,l){i=i.ownerDocument||i,i.head.insertBefore(l,s==="title"?i.querySelector("head > title"):null)}function OP(i,s,l){if(l===1||s.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return i=s.disabled,typeof s.precedence=="string"&&i==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function xw(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var zc=null;function VP(){}function MP(i,s,l){if(zc===null)throw Error(r(475));var c=zc;if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var p=Sl(l.href),g=i.querySelector(Bc(p));if(g){i=g._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(c.count++,c=Hf.bind(c),i.then(c,c)),s.state.loading|=4,s.instance=g,kt(g);return}g=i.ownerDocument||i,l=Aw(l),(p=_r.get(p))&&Wy(l,p),g=g.createElement("link"),kt(g);var T=g;T._p=new Promise(function(w,D){T.onload=w,T.onerror=D}),pn(g,"link",l),s.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(c.count++,s=Hf.bind(c),i.addEventListener("load",s),i.addEventListener("error",s))}}function LP(){if(zc===null)throw Error(r(475));var i=zc;return i.stylesheets&&i.count===0&&Zy(i,i.stylesheets),0<i.count?function(s){var l=setTimeout(function(){if(i.stylesheets&&Zy(i,i.stylesheets),i.unsuspend){var c=i.unsuspend;i.unsuspend=null,c()}},6e4);return i.unsuspend=s,function(){i.unsuspend=null,clearTimeout(l)}}:null}function Hf(){if(this.count--,this.count===0){if(this.stylesheets)Zy(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var Gf=null;function Zy(i,s){i.stylesheets=null,i.unsuspend!==null&&(i.count++,Gf=new Map,s.forEach(UP,i),Gf=null,Hf.call(i))}function UP(i,s){if(!(s.state.loading&4)){var l=Gf.get(i);if(l)var c=l.get(null);else{l=new Map,Gf.set(i,l);for(var p=i.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<p.length;g++){var T=p[g];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(l.set(T.dataset.precedence,T),c=T)}c&&l.set(null,c)}p=s.instance,T=p.getAttribute("data-precedence"),g=l.get(T)||c,g===c&&l.set(null,p),l.set(T,p),this.count++,c=Hf.bind(this),p.addEventListener("load",c),p.addEventListener("error",c),g?g.parentNode.insertBefore(p,g.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(p,i.firstChild)),s.state.loading|=4}}var jc={$$typeof:$,Provider:null,Consumer:null,_currentValue:Ee,_currentValue2:Ee,_threadCount:0};function BP(i,s,l,c,p,g,T,w){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yi(0),this.hiddenUpdates=yi(null),this.identifierPrefix=c,this.onUncaughtError=p,this.onCaughtError=g,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Dw(i,s,l,c,p,g,T,w,D,G,te,ie){return i=new BP(i,s,l,T,w,D,G,ie),s=1,g===!0&&(s|=24),g=Qn(3,null,null,s),i.current=g,g.stateNode=i,s=kg(),s.refCount++,i.pooledCache=s,s.refCount++,g.memoizedState={element:c,isDehydrated:l,cache:s},Lg(g),i}function Pw(i){return i?(i=il,i):il}function Nw(i,s,l,c,p,g){p=Pw(p),c.context===null?c.context=p:c.pendingContext=p,c=ps(s),c.payload={element:l},g=g===void 0?null:g,g!==null&&(c.callback=g),l=ms(i,c,s),l!==null&&(Jn(l,i,s),_c(l,i,s))}function kw(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function Jy(i,s){kw(i,s),(i=i.alternate)&&kw(i,s)}function Ow(i){if(i.tag===13){var s=rl(i,67108864);s!==null&&Jn(s,i,67108864),Jy(i,67108864)}}var $f=!0;function FP(i,s,l,c){var p=ee.T;ee.T=null;var g=he.p;try{he.p=2,e_(i,s,l,c)}finally{he.p=g,ee.T=p}}function zP(i,s,l,c){var p=ee.T;ee.T=null;var g=he.p;try{he.p=8,e_(i,s,l,c)}finally{he.p=g,ee.T=p}}function e_(i,s,l,c){if($f){var p=t_(c);if(p===null)zy(i,s,c,Kf,l),Mw(i,c);else if(qP(p,i,s,l,c))c.stopPropagation();else if(Mw(i,c),s&4&&-1<jP.indexOf(i)){for(;p!==null;){var g=Vr(p);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var T=wr(g.pendingLanes);if(T!==0){var w=g;for(w.pendingLanes|=2,w.entangledLanes|=2;T;){var D=1<<31-En(T);w.entanglements[1]|=D,T&=~D}Yr(g),(Je&6)===0&&(Df=ar()+500,Vc(0))}}break;case 13:w=rl(g,2),w!==null&&Jn(w,g,2),Nf(),Jy(g,2)}if(g=t_(c),g===null&&zy(i,s,c,Kf,l),g===p)break;p=g}p!==null&&c.stopPropagation()}else zy(i,s,c,null,l)}}function t_(i){return i=ur(i),n_(i)}var Kf=null;function n_(i){if(Kf=null,i=vi(i),i!==null){var s=o(i);if(s===null)i=null;else{var l=s.tag;if(l===13){if(i=u(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return Kf=i,null}function Vw(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sg()){case Fu:return 2;case Mo:return 8;case ga:case ag:return 32;case Lo:return 268435456;default:return 32}default:return 32}}var r_=!1,Cs=null,xs=null,Ds=null,qc=new Map,Hc=new Map,Ps=[],jP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mw(i,s){switch(i){case"focusin":case"focusout":Cs=null;break;case"dragenter":case"dragleave":xs=null;break;case"mouseover":case"mouseout":Ds=null;break;case"pointerover":case"pointerout":qc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hc.delete(s.pointerId)}}function Gc(i,s,l,c,p,g){return i===null||i.nativeEvent!==g?(i={blockedOn:s,domEventName:l,eventSystemFlags:c,nativeEvent:g,targetContainers:[p]},s!==null&&(s=Vr(s),s!==null&&Ow(s)),i):(i.eventSystemFlags|=c,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function qP(i,s,l,c,p){switch(s){case"focusin":return Cs=Gc(Cs,i,s,l,c,p),!0;case"dragenter":return xs=Gc(xs,i,s,l,c,p),!0;case"mouseover":return Ds=Gc(Ds,i,s,l,c,p),!0;case"pointerover":var g=p.pointerId;return qc.set(g,Gc(qc.get(g)||null,i,s,l,c,p)),!0;case"gotpointercapture":return g=p.pointerId,Hc.set(g,Gc(Hc.get(g)||null,i,s,l,c,p)),!0}return!1}function Lw(i){var s=vi(i.target);if(s!==null){var l=o(s);if(l!==null){if(s=l.tag,s===13){if(s=u(l),s!==null){i.blockedOn=s,Pd(i.priority,function(){if(l.tag===13){var c=Zn();c=ss(c);var p=rl(l,c);p!==null&&Jn(p,l,c),Jy(l,c)}});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Qf(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=t_(i.nativeEvent);if(l===null){l=i.nativeEvent;var c=new l.constructor(l.type,l);wi=c,l.target.dispatchEvent(c),wi=null}else return s=Vr(l),s!==null&&Ow(s),i.blockedOn=l,!1;s.shift()}return!0}function Uw(i,s,l){Qf(i)&&l.delete(s)}function HP(){r_=!1,Cs!==null&&Qf(Cs)&&(Cs=null),xs!==null&&Qf(xs)&&(xs=null),Ds!==null&&Qf(Ds)&&(Ds=null),qc.forEach(Uw),Hc.forEach(Uw)}function Yf(i,s){i.blockedOn===s&&(i.blockedOn=null,r_||(r_=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,HP)))}var Wf=null;function Bw(i){Wf!==i&&(Wf=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Wf===i&&(Wf=null);for(var s=0;s<i.length;s+=3){var l=i[s],c=i[s+1],p=i[s+2];if(typeof c!="function"){if(n_(c||l)===null)continue;break}var g=Vr(l);g!==null&&(i.splice(s,3),s-=3,ny(g,{pending:!0,data:p,method:l.method,action:c},c,p))}}))}function $c(i){function s(D){return Yf(D,i)}Cs!==null&&Yf(Cs,i),xs!==null&&Yf(xs,i),Ds!==null&&Yf(Ds,i),qc.forEach(s),Hc.forEach(s);for(var l=0;l<Ps.length;l++){var c=Ps[l];c.blockedOn===i&&(c.blockedOn=null)}for(;0<Ps.length&&(l=Ps[0],l.blockedOn===null);)Lw(l),l.blockedOn===null&&Ps.shift();if(l=(i.ownerDocument||i).$$reactFormReplay,l!=null)for(c=0;c<l.length;c+=3){var p=l[c],g=l[c+1],T=p[Bt]||null;if(typeof g=="function")T||Bw(l);else if(T){var w=null;if(g&&g.hasAttribute("formAction")){if(p=g,T=g[Bt]||null)w=T.formAction;else if(n_(p)!==null)continue}else w=T.action;typeof w=="function"?l[c+1]=w:(l.splice(c,3),c-=3),Bw(l)}}}function i_(i){this._internalRoot=i}Xf.prototype.render=i_.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(r(409));var l=s.current,c=Zn();Nw(l,c,i,s,null,null)},Xf.prototype.unmount=i_.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;Nw(i.current,2,null,i,null,null),Nf(),s[or]=null}};function Xf(i){this._internalRoot=i}Xf.prototype.unstable_scheduleHydration=function(i){if(i){var s=as();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Ps.length&&s!==0&&s<Ps[l].priority;l++);Ps.splice(l,0,i),l===0&&Lw(i)}};var Fw=e.version;if(Fw!=="19.1.0")throw Error(r(527,Fw,"19.1.0"));he.findDOMNode=function(i){var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(r(188)):(i=Object.keys(i).join(","),Error(r(268,i)));return i=f(s),i=i!==null?m(i):null,i=i===null?null:i.stateNode,i};var GP={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:ee,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zf.isDisabled&&Zf.supportsFiber)try{Rt=Zf.inject(GP),Ze=Zf}catch{}}return Qc.createRoot=function(i,s){if(!a(i))throw Error(r(299));var l=!1,c="",p=nb,g=rb,T=ib,w=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(g=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(w=s.unstable_transitionCallbacks)),s=Dw(i,1,!1,null,null,l,c,p,g,T,w,null),i[or]=s.current,Fy(i),new i_(s)},Qc.hydrateRoot=function(i,s,l){if(!a(i))throw Error(r(299));var c=!1,p="",g=nb,T=rb,w=ib,D=null,G=null;return l!=null&&(l.unstable_strictMode===!0&&(c=!0),l.identifierPrefix!==void 0&&(p=l.identifierPrefix),l.onUncaughtError!==void 0&&(g=l.onUncaughtError),l.onCaughtError!==void 0&&(T=l.onCaughtError),l.onRecoverableError!==void 0&&(w=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(D=l.unstable_transitionCallbacks),l.formState!==void 0&&(G=l.formState)),s=Dw(i,1,!0,s,l??null,c,p,g,T,w,D,G),s.context=Pw(null),l=s.current,c=Zn(),c=ss(c),p=ps(c),p.callback=null,ms(l,p,c),l=c,s.current.lanes=l,_i(s,l),Yr(s),i[or]=s.current,Fy(i),new Xf(s)},Qc.version="19.1.0",Qc}var Ww;function nN(){if(Ww)return a_.exports;Ww=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),a_.exports=tN(),a_.exports}var rN=nN(),Y=kv();const xh=KP(Y);var Yc={},Xw;function iN(){if(Xw)return Yc;Xw=1,Object.defineProperty(Yc,"__esModule",{value:!0}),Yc.parse=u,Yc.serialize=m;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,o=(()=>{const b=function(){};return b.prototype=Object.create(null),b})();function u(b,A){const x=new o,U=b.length;if(U<2)return x;const M=(A==null?void 0:A.decode)||y;let H=0;do{const Z=b.indexOf("=",H);if(Z===-1)break;const $=b.indexOf(";",H),le=$===-1?U:$;if(Z>le){H=b.lastIndexOf(";",Z-1)+1;continue}const re=d(b,H,Z),J=f(b,Z,re),R=b.slice(re,J);if(x[R]===void 0){let S=d(b,Z+1,le),C=f(b,le,S);const O=M(b.slice(S,C));x[R]=O}H=le+1}while(H<U);return x}function d(b,A,x){do{const U=b.charCodeAt(A);if(U!==32&&U!==9)return A}while(++A<x);return x}function f(b,A,x){for(;A>x;){const U=b.charCodeAt(--A);if(U!==32&&U!==9)return A+1}return x}function m(b,A,x){const U=(x==null?void 0:x.encode)||encodeURIComponent;if(!n.test(b))throw new TypeError(`argument name is invalid: ${b}`);const M=U(A);if(!e.test(M))throw new TypeError(`argument val is invalid: ${A}`);let H=b+"="+M;if(!x)return H;if(x.maxAge!==void 0){if(!Number.isInteger(x.maxAge))throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);H+="; Max-Age="+x.maxAge}if(x.domain){if(!t.test(x.domain))throw new TypeError(`option domain is invalid: ${x.domain}`);H+="; Domain="+x.domain}if(x.path){if(!r.test(x.path))throw new TypeError(`option path is invalid: ${x.path}`);H+="; Path="+x.path}if(x.expires){if(!v(x.expires)||!Number.isFinite(x.expires.valueOf()))throw new TypeError(`option expires is invalid: ${x.expires}`);H+="; Expires="+x.expires.toUTCString()}if(x.httpOnly&&(H+="; HttpOnly"),x.secure&&(H+="; Secure"),x.partitioned&&(H+="; Partitioned"),x.priority)switch(typeof x.priority=="string"?x.priority.toLowerCase():void 0){case"low":H+="; Priority=Low";break;case"medium":H+="; Priority=Medium";break;case"high":H+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${x.priority}`)}if(x.sameSite)switch(typeof x.sameSite=="string"?x.sameSite.toLowerCase():x.sameSite){case!0:case"strict":H+="; SameSite=Strict";break;case"lax":H+="; SameSite=Lax";break;case"none":H+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${x.sameSite}`)}return H}function y(b){if(b.indexOf("%")===-1)return b;try{return decodeURIComponent(b)}catch{return b}}function v(b){return a.call(b)==="[object Date]"}return Yc}iN();/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Zw="popstate";function sN(n={}){function e(r,a){let{pathname:o,search:u,hash:d}=r.location;return L_("",{pathname:o,search:u,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(r,a){return typeof a=="string"?a:Dh(a)}return oN(e,t,null,n)}function wt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function ui(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function aN(){return Math.random().toString(36).substring(2,10)}function Jw(n,e){return{usr:n.state,key:n.key,idx:e}}function L_(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?wu(e):e,state:t,key:e&&e.key||r||aN()}}function Dh({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function wu(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function oN(n,e,t,r={}){let{window:a=document.defaultView,v5Compat:o=!1}=r,u=a.history,d="POP",f=null,m=y();m==null&&(m=0,u.replaceState({...u.state,idx:m},""));function y(){return(u.state||{idx:null}).idx}function v(){d="POP";let M=y(),H=M==null?null:M-m;m=M,f&&f({action:d,location:U.location,delta:H})}function b(M,H){d="PUSH";let Z=L_(U.location,M,H);m=y()+1;let $=Jw(Z,m),le=U.createHref(Z);try{u.pushState($,"",le)}catch(re){if(re instanceof DOMException&&re.name==="DataCloneError")throw re;a.location.assign(le)}o&&f&&f({action:d,location:U.location,delta:1})}function A(M,H){d="REPLACE";let Z=L_(U.location,M,H);m=y();let $=Jw(Z,m),le=U.createHref(Z);u.replaceState($,"",le),o&&f&&f({action:d,location:U.location,delta:0})}function x(M){let H=a.location.origin!=="null"?a.location.origin:a.location.href,Z=typeof M=="string"?M:Dh(M);return Z=Z.replace(/ $/,"%20"),wt(H,`No window.location.(origin|href) available to create URL for href: ${Z}`),new URL(Z,H)}let U={get action(){return d},get location(){return n(a,u)},listen(M){if(f)throw new Error("A history only accepts one active listener");return a.addEventListener(Zw,v),f=M,()=>{a.removeEventListener(Zw,v),f=null}},createHref(M){return e(a,M)},createURL:x,encodeLocation(M){let H=x(M);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:b,replace:A,go(M){return u.go(M)}};return U}function RS(n,e,t="/"){return lN(n,e,t,!1)}function lN(n,e,t,r){let a=typeof e=="string"?wu(e):e,o=Ki(a.pathname||"/",t);if(o==null)return null;let u=CS(n);uN(u);let d=null;for(let f=0;d==null&&f<u.length;++f){let m=EN(o);d=_N(u[f],m,r)}return d}function CS(n,e=[],t=[],r=""){let a=(o,u,d)=>{let f={relativePath:d===void 0?o.path||"":d,caseSensitive:o.caseSensitive===!0,childrenIndex:u,route:o};f.relativePath.startsWith("/")&&(wt(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length));let m=Gi([r,f.relativePath]),y=t.concat(f);o.children&&o.children.length>0&&(wt(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),CS(o.children,e,y,m)),!(o.path==null&&!o.index)&&e.push({path:m,score:gN(m,o.index),routesMeta:y})};return n.forEach((o,u)=>{var d;if(o.path===""||!((d=o.path)!=null&&d.includes("?")))a(o,u);else for(let f of xS(o.path))a(o,u,f)}),e}function xS(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return a?[o,""]:[o];let u=xS(r.join("/")),d=[];return d.push(...u.map(f=>f===""?o:[o,f].join("/"))),a&&d.push(...u),d.map(f=>n.startsWith("/")&&f===""?"/":f)}function uN(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:yN(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var cN=/^:[\w-]+$/,hN=3,dN=2,fN=1,pN=10,mN=-2,eI=n=>n==="*";function gN(n,e){let t=n.split("/"),r=t.length;return t.some(eI)&&(r+=mN),e&&(r+=dN),t.filter(a=>!eI(a)).reduce((a,o)=>a+(cN.test(o)?hN:o===""?fN:pN),r)}function yN(n,e){return n.length===e.length&&n.slice(0,-1).every((r,a)=>r===e[a])?n[n.length-1]-e[e.length-1]:0}function _N(n,e,t=!1){let{routesMeta:r}=n,a={},o="/",u=[];for(let d=0;d<r.length;++d){let f=r[d],m=d===r.length-1,y=o==="/"?e:e.slice(o.length)||"/",v=Np({path:f.relativePath,caseSensitive:f.caseSensitive,end:m},y),b=f.route;if(!v&&m&&t&&!r[r.length-1].route.index&&(v=Np({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},y)),!v)return null;Object.assign(a,v.params),u.push({params:a,pathname:Gi([o,v.pathname]),pathnameBase:IN(Gi([o,v.pathnameBase])),route:b}),v.pathnameBase!=="/"&&(o=Gi([o,v.pathnameBase]))}return u}function Np(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=vN(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let o=a[0],u=o.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:r.reduce((m,{paramName:y,isOptional:v},b)=>{if(y==="*"){let x=d[b]||"";u=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const A=d[b];return v&&!A?m[y]=void 0:m[y]=(A||"").replace(/%2F/g,"/"),m},{}),pathname:o,pathnameBase:u,pattern:n}}function vN(n,e=!1,t=!0){ui(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,f)=>(r.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function EN(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ui(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Ki(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function TN(n,e="/"){let{pathname:t,search:r="",hash:a=""}=typeof n=="string"?wu(n):n;return{pathname:t?t.startsWith("/")?t:bN(t,e):e,search:AN(r),hash:SN(a)}}function bN(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function h_(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function wN(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function DS(n){let e=wN(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function PS(n,e,t,r=!1){let a;typeof n=="string"?a=wu(n):(a={...n},wt(!a.pathname||!a.pathname.includes("?"),h_("?","pathname","search",a)),wt(!a.pathname||!a.pathname.includes("#"),h_("#","pathname","hash",a)),wt(!a.search||!a.search.includes("#"),h_("#","search","hash",a)));let o=n===""||a.pathname==="",u=o?"/":a.pathname,d;if(u==null)d=t;else{let v=e.length-1;if(!r&&u.startsWith("..")){let b=u.split("/");for(;b[0]==="..";)b.shift(),v-=1;a.pathname=b.join("/")}d=v>=0?e[v]:"/"}let f=TN(a,d),m=u&&u!=="/"&&u.endsWith("/"),y=(o||u===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(m||y)&&(f.pathname+="/"),f}var Gi=n=>n.join("/").replace(/\/\/+/g,"/"),IN=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),AN=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,SN=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function RN(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var NS=["POST","PUT","PATCH","DELETE"];new Set(NS);var CN=["GET",...NS];new Set(CN);var Iu=Y.createContext(null);Iu.displayName="DataRouter";var dm=Y.createContext(null);dm.displayName="DataRouterState";var kS=Y.createContext({isTransitioning:!1});kS.displayName="ViewTransition";var xN=Y.createContext(new Map);xN.displayName="Fetchers";var DN=Y.createContext(null);DN.displayName="Await";var mi=Y.createContext(null);mi.displayName="Navigation";var nd=Y.createContext(null);nd.displayName="Location";var gi=Y.createContext({outlet:null,matches:[],isDataRoute:!1});gi.displayName="Route";var Ov=Y.createContext(null);Ov.displayName="RouteError";function PN(n,{relative:e}={}){wt(rd(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=Y.useContext(mi),{hash:a,pathname:o,search:u}=sd(n,{relative:e}),d=o;return t!=="/"&&(d=o==="/"?t:Gi([t,o])),r.createHref({pathname:d,search:u,hash:a})}function rd(){return Y.useContext(nd)!=null}function xo(){return wt(rd(),"useLocation() may be used only in the context of a <Router> component."),Y.useContext(nd).location}var OS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function VS(n){Y.useContext(mi).static||Y.useLayoutEffect(n)}function id(){let{isDataRoute:n}=Y.useContext(gi);return n?GN():NN()}function NN(){wt(rd(),"useNavigate() may be used only in the context of a <Router> component.");let n=Y.useContext(Iu),{basename:e,navigator:t}=Y.useContext(mi),{matches:r}=Y.useContext(gi),{pathname:a}=xo(),o=JSON.stringify(DS(r)),u=Y.useRef(!1);return VS(()=>{u.current=!0}),Y.useCallback((f,m={})=>{if(ui(u.current,OS),!u.current)return;if(typeof f=="number"){t.go(f);return}let y=PS(f,JSON.parse(o),a,m.relative==="path");n==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:Gi([e,y.pathname])),(m.replace?t.replace:t.push)(y,m.state,m)},[e,t,o,a,n])}Y.createContext(null);function kN(){let{matches:n}=Y.useContext(gi),e=n[n.length-1];return e?e.params:{}}function sd(n,{relative:e}={}){let{matches:t}=Y.useContext(gi),{pathname:r}=xo(),a=JSON.stringify(DS(t));return Y.useMemo(()=>PS(n,JSON.parse(a),r,e==="path"),[n,a,r,e])}function ON(n,e){return MS(n,e)}function MS(n,e,t,r){var Z;wt(rd(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:o}=Y.useContext(mi),{matches:u}=Y.useContext(gi),d=u[u.length-1],f=d?d.params:{},m=d?d.pathname:"/",y=d?d.pathnameBase:"/",v=d&&d.route;{let $=v&&v.path||"";LS(m,!v||$.endsWith("*")||$.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$==="/"?"*":`${$}/*`}">.`)}let b=xo(),A;if(e){let $=typeof e=="string"?wu(e):e;wt(y==="/"||((Z=$.pathname)==null?void 0:Z.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${$.pathname}" was given in the \`location\` prop.`),A=$}else A=b;let x=A.pathname||"/",U=x;if(y!=="/"){let $=y.replace(/^\//,"").split("/");U="/"+x.replace(/^\//,"").split("/").slice($.length).join("/")}let M=!o&&t&&t.matches&&t.matches.length>0?t.matches:RS(n,{pathname:U});ui(v||M!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),ui(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=BN(M&&M.map($=>Object.assign({},$,{params:Object.assign({},f,$.params),pathname:Gi([y,a.encodeLocation?a.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?y:Gi([y,a.encodeLocation?a.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),u,t,r);return e&&H?Y.createElement(nd.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},H):H}function VN(){let n=HN(),e=RN(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",n),u=Y.createElement(Y.Fragment,null,Y.createElement("p",null,"💿 Hey developer 👋"),Y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Y.createElement("code",{style:o},"ErrorBoundary")," or"," ",Y.createElement("code",{style:o},"errorElement")," prop on your route.")),Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},e),t?Y.createElement("pre",{style:a},t):null,u)}var MN=Y.createElement(VN,null),LN=class extends Y.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?Y.createElement(gi.Provider,{value:this.props.routeContext},Y.createElement(Ov.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function UN({routeContext:n,match:e,children:t}){let r=Y.useContext(Iu);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),Y.createElement(gi.Provider,{value:n},t)}function BN(n,e=[],t=null,r=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,o=t==null?void 0:t.errors;if(o!=null){let f=a.findIndex(m=>m.route.id&&(o==null?void 0:o[m.route.id])!==void 0);wt(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,f+1))}let u=!1,d=-1;if(t)for(let f=0;f<a.length;f++){let m=a[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=f),m.route.id){let{loaderData:y,errors:v}=t,b=m.route.loader&&!y.hasOwnProperty(m.route.id)&&(!v||v[m.route.id]===void 0);if(m.route.lazy||b){u=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((f,m,y)=>{let v,b=!1,A=null,x=null;t&&(v=o&&m.route.id?o[m.route.id]:void 0,A=m.route.errorElement||MN,u&&(d<0&&y===0?(LS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,x=null):d===y&&(b=!0,x=m.route.hydrateFallbackElement||null)));let U=e.concat(a.slice(0,y+1)),M=()=>{let H;return v?H=A:b?H=x:m.route.Component?H=Y.createElement(m.route.Component,null):m.route.element?H=m.route.element:H=f,Y.createElement(UN,{match:m,routeContext:{outlet:f,matches:U,isDataRoute:t!=null},children:H})};return t&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?Y.createElement(LN,{location:t.location,revalidation:t.revalidation,component:A,error:v,children:M(),routeContext:{outlet:null,matches:U,isDataRoute:!0}}):M()},null)}function Vv(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function FN(n){let e=Y.useContext(Iu);return wt(e,Vv(n)),e}function zN(n){let e=Y.useContext(dm);return wt(e,Vv(n)),e}function jN(n){let e=Y.useContext(gi);return wt(e,Vv(n)),e}function Mv(n){let e=jN(n),t=e.matches[e.matches.length-1];return wt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function qN(){return Mv("useRouteId")}function HN(){var r;let n=Y.useContext(Ov),e=zN("useRouteError"),t=Mv("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function GN(){let{router:n}=FN("useNavigate"),e=Mv("useNavigate"),t=Y.useRef(!1);return VS(()=>{t.current=!0}),Y.useCallback(async(a,o={})=>{ui(t.current,OS),t.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:e,...o}))},[n,e])}var tI={};function LS(n,e,t){!e&&!tI[n]&&(tI[n]=!0,ui(!1,t))}Y.memo($N);function $N({routes:n,future:e,state:t}){return MS(n,void 0,t,e)}function cp(n){wt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function KN({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:a,static:o=!1}){wt(!rd(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=n.replace(/^\/*/,"/"),d=Y.useMemo(()=>({basename:u,navigator:a,static:o,future:{}}),[u,a,o]);typeof t=="string"&&(t=wu(t));let{pathname:f="/",search:m="",hash:y="",state:v=null,key:b="default"}=t,A=Y.useMemo(()=>{let x=Ki(f,u);return x==null?null:{location:{pathname:x,search:m,hash:y,state:v,key:b},navigationType:r}},[u,f,m,y,v,b,r]);return ui(A!=null,`<Router basename="${u}"> is not able to match the URL "${f}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:Y.createElement(mi.Provider,{value:d},Y.createElement(nd.Provider,{children:e,value:A}))}function QN({children:n,location:e}){return ON(U_(n),e)}function U_(n,e=[]){let t=[];return Y.Children.forEach(n,(r,a)=>{if(!Y.isValidElement(r))return;let o=[...e,a];if(r.type===Y.Fragment){t.push.apply(t,U_(r.props.children,o));return}wt(r.type===cp,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),wt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=U_(r.props.children,o)),t.push(u)}),t}var hp="get",dp="application/x-www-form-urlencoded";function fm(n){return n!=null&&typeof n.tagName=="string"}function YN(n){return fm(n)&&n.tagName.toLowerCase()==="button"}function WN(n){return fm(n)&&n.tagName.toLowerCase()==="form"}function XN(n){return fm(n)&&n.tagName.toLowerCase()==="input"}function ZN(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function JN(n,e){return n.button===0&&(!e||e==="_self")&&!ZN(n)}var Jf=null;function ek(){if(Jf===null)try{new FormData(document.createElement("form"),0),Jf=!1}catch{Jf=!0}return Jf}var tk=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function d_(n){return n!=null&&!tk.has(n)?(ui(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${dp}"`),null):n}function nk(n,e){let t,r,a,o,u;if(WN(n)){let d=n.getAttribute("action");r=d?Ki(d,e):null,t=n.getAttribute("method")||hp,a=d_(n.getAttribute("enctype"))||dp,o=new FormData(n)}else if(YN(n)||XN(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=n.getAttribute("formaction")||d.getAttribute("action");if(r=f?Ki(f,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||hp,a=d_(n.getAttribute("formenctype"))||d_(d.getAttribute("enctype"))||dp,o=new FormData(d,n),!ek()){let{name:m,type:y,value:v}=n;if(y==="image"){let b=m?`${m}.`:"";o.append(`${b}x`,"0"),o.append(`${b}y`,"0")}else m&&o.append(m,v)}}else{if(fm(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=hp,r=null,a=dp,u=n}return o&&a==="text/plain"&&(u=o,o=void 0),{action:r,method:t.toLowerCase(),encType:a,formData:o,body:u}}function Lv(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function rk(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ik(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function sk(n,e,t){let r=await Promise.all(n.map(async a=>{let o=e.routes[a.route.id];if(o){let u=await rk(o,t);return u.links?u.links():[]}return[]}));return uk(r.flat(1).filter(ik).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function nI(n,e,t,r,a,o){let u=(f,m)=>t[m]?f.route.id!==t[m].route.id:!0,d=(f,m)=>{var y;return t[m].pathname!==f.pathname||((y=t[m].route.path)==null?void 0:y.endsWith("*"))&&t[m].params["*"]!==f.params["*"]};return o==="assets"?e.filter((f,m)=>u(f,m)||d(f,m)):o==="data"?e.filter((f,m)=>{var v;let y=r.routes[f.route.id];if(!y||!y.hasLoader)return!1;if(u(f,m)||d(f,m))return!0;if(f.route.shouldRevalidate){let b=f.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(n,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function ak(n,e,{includeHydrateFallback:t}={}){return ok(n.map(r=>{let a=e.routes[r.route.id];if(!a)return[];let o=[a.module];return a.clientActionModule&&(o=o.concat(a.clientActionModule)),a.clientLoaderModule&&(o=o.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(o=o.concat(a.hydrateFallbackModule)),a.imports&&(o=o.concat(a.imports)),o}).flat(1))}function ok(n){return[...new Set(n)]}function lk(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function uk(n,e){let t=new Set;return new Set(e),n.reduce((r,a)=>{let o=JSON.stringify(lk(a));return t.has(o)||(t.add(o),r.push({key:o,link:a})),r},[])}function ck(n,e){let t=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t.pathname==="/"?t.pathname="_root.data":e&&Ki(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function US(){let n=Y.useContext(Iu);return Lv(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function hk(){let n=Y.useContext(dm);return Lv(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Uv=Y.createContext(void 0);Uv.displayName="FrameworkContext";function BS(){let n=Y.useContext(Uv);return Lv(n,"You must render this element inside a <HydratedRouter> element"),n}function dk(n,e){let t=Y.useContext(Uv),[r,a]=Y.useState(!1),[o,u]=Y.useState(!1),{onFocus:d,onBlur:f,onMouseEnter:m,onMouseLeave:y,onTouchStart:v}=e,b=Y.useRef(null);Y.useEffect(()=>{if(n==="render"&&u(!0),n==="viewport"){let U=H=>{H.forEach(Z=>{u(Z.isIntersecting)})},M=new IntersectionObserver(U,{threshold:.5});return b.current&&M.observe(b.current),()=>{M.disconnect()}}},[n]),Y.useEffect(()=>{if(r){let U=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(U)}}},[r]);let A=()=>{a(!0)},x=()=>{a(!1),u(!1)};return t?n!=="intent"?[o,b,{}]:[o,b,{onFocus:Wc(d,A),onBlur:Wc(f,x),onMouseEnter:Wc(m,A),onMouseLeave:Wc(y,x),onTouchStart:Wc(v,A)}]:[!1,b,{}]}function Wc(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function fk({page:n,...e}){let{router:t}=US(),r=Y.useMemo(()=>RS(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?Y.createElement(mk,{page:n,matches:r,...e}):null}function pk(n){let{manifest:e,routeModules:t}=BS(),[r,a]=Y.useState([]);return Y.useEffect(()=>{let o=!1;return sk(n,e,t).then(u=>{o||a(u)}),()=>{o=!0}},[n,e,t]),r}function mk({page:n,matches:e,...t}){let r=xo(),{manifest:a,routeModules:o}=BS(),{basename:u}=US(),{loaderData:d,matches:f}=hk(),m=Y.useMemo(()=>nI(n,e,f,a,r,"data"),[n,e,f,a,r]),y=Y.useMemo(()=>nI(n,e,f,a,r,"assets"),[n,e,f,a,r]),v=Y.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let x=new Set,U=!1;if(e.forEach(H=>{var $;let Z=a.routes[H.route.id];!Z||!Z.hasLoader||(!m.some(le=>le.route.id===H.route.id)&&H.route.id in d&&(($=o[H.route.id])!=null&&$.shouldRevalidate)||Z.hasClientLoader?U=!0:x.add(H.route.id))}),x.size===0)return[];let M=ck(n,u);return U&&x.size>0&&M.searchParams.set("_routes",e.filter(H=>x.has(H.route.id)).map(H=>H.route.id).join(",")),[M.pathname+M.search]},[u,d,r,a,m,e,n,o]),b=Y.useMemo(()=>ak(y,a),[y,a]),A=pk(y);return Y.createElement(Y.Fragment,null,v.map(x=>Y.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...t})),b.map(x=>Y.createElement("link",{key:x,rel:"modulepreload",href:x,...t})),A.map(({key:x,link:U})=>Y.createElement("link",{key:x,...U})))}function gk(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var FS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{FS&&(window.__reactRouterVersion="7.5.0")}catch{}function yk({basename:n,children:e,window:t}){let r=Y.useRef();r.current==null&&(r.current=sN({window:t,v5Compat:!0}));let a=r.current,[o,u]=Y.useState({action:a.action,location:a.location}),d=Y.useCallback(f=>{Y.startTransition(()=>u(f))},[u]);return Y.useLayoutEffect(()=>a.listen(d),[a,d]),Y.createElement(KN,{basename:n,children:e,location:o.location,navigationType:o.action,navigator:a})}var zS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jS=Y.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:a,reloadDocument:o,replace:u,state:d,target:f,to:m,preventScrollReset:y,viewTransition:v,...b},A){let{basename:x}=Y.useContext(mi),U=typeof m=="string"&&zS.test(m),M,H=!1;if(typeof m=="string"&&U&&(M=m,FS))try{let C=new URL(window.location.href),O=m.startsWith("//")?new URL(C.protocol+m):new URL(m),N=Ki(O.pathname,x);O.origin===C.origin&&N!=null?m=N+O.search+O.hash:H=!0}catch{ui(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Z=PN(m,{relative:a}),[$,le,re]=dk(r,b),J=Tk(m,{replace:u,state:d,target:f,preventScrollReset:y,relative:a,viewTransition:v});function R(C){e&&e(C),C.defaultPrevented||J(C)}let S=Y.createElement("a",{...b,...re,href:M||Z,onClick:H||o?e:R,ref:gk(A,le),target:f,"data-discover":!U&&t==="render"?"true":void 0});return $&&!U?Y.createElement(Y.Fragment,null,S,Y.createElement(fk,{page:Z})):S});jS.displayName="Link";var _k=Y.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:a=!1,style:o,to:u,viewTransition:d,children:f,...m},y){let v=sd(u,{relative:m.relative}),b=xo(),A=Y.useContext(dm),{navigator:x,basename:U}=Y.useContext(mi),M=A!=null&&Sk(v)&&d===!0,H=x.encodeLocation?x.encodeLocation(v).pathname:v.pathname,Z=b.pathname,$=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;t||(Z=Z.toLowerCase(),$=$?$.toLowerCase():null,H=H.toLowerCase()),$&&U&&($=Ki($,U)||$);const le=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let re=Z===H||!a&&Z.startsWith(H)&&Z.charAt(le)==="/",J=$!=null&&($===H||!a&&$.startsWith(H)&&$.charAt(H.length)==="/"),R={isActive:re,isPending:J,isTransitioning:M},S=re?e:void 0,C;typeof r=="function"?C=r(R):C=[r,re?"active":null,J?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let O=typeof o=="function"?o(R):o;return Y.createElement(jS,{...m,"aria-current":S,className:C,ref:y,style:O,to:u,viewTransition:d},typeof f=="function"?f(R):f)});_k.displayName="NavLink";var vk=Y.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:a,state:o,method:u=hp,action:d,onSubmit:f,relative:m,preventScrollReset:y,viewTransition:v,...b},A)=>{let x=Ik(),U=Ak(d,{relative:m}),M=u.toLowerCase()==="get"?"get":"post",H=typeof d=="string"&&zS.test(d),Z=$=>{if(f&&f($),$.defaultPrevented)return;$.preventDefault();let le=$.nativeEvent.submitter,re=(le==null?void 0:le.getAttribute("formmethod"))||u;x(le||$.currentTarget,{fetcherKey:e,method:re,navigate:t,replace:a,state:o,relative:m,preventScrollReset:y,viewTransition:v})};return Y.createElement("form",{ref:A,method:M,action:U,onSubmit:r?f:Z,...b,"data-discover":!H&&n==="render"?"true":void 0})});vk.displayName="Form";function Ek(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qS(n){let e=Y.useContext(Iu);return wt(e,Ek(n)),e}function Tk(n,{target:e,replace:t,state:r,preventScrollReset:a,relative:o,viewTransition:u}={}){let d=id(),f=xo(),m=sd(n,{relative:o});return Y.useCallback(y=>{if(JN(y,e)){y.preventDefault();let v=t!==void 0?t:Dh(f)===Dh(m);d(n,{replace:v,state:r,preventScrollReset:a,relative:o,viewTransition:u})}},[f,d,m,t,r,e,n,a,o,u])}var bk=0,wk=()=>`__${String(++bk)}__`;function Ik(){let{router:n}=qS("useSubmit"),{basename:e}=Y.useContext(mi),t=qN();return Y.useCallback(async(r,a={})=>{let{action:o,method:u,encType:d,formData:f,body:m}=nk(r,e);if(a.navigate===!1){let y=a.fetcherKey||wk();await n.fetch(y,t,a.action||o,{preventScrollReset:a.preventScrollReset,formData:f,body:m,formMethod:a.method||u,formEncType:a.encType||d,flushSync:a.flushSync})}else await n.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:f,body:m,formMethod:a.method||u,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,e,t])}function Ak(n,{relative:e}={}){let{basename:t}=Y.useContext(mi),r=Y.useContext(gi);wt(r,"useFormAction must be used inside a RouteContext");let[a]=r.matches.slice(-1),o={...sd(n||".",{relative:e})},u=xo();if(n==null){o.search=u.search;let d=new URLSearchParams(o.search),f=d.getAll("index");if(f.some(y=>y==="")){d.delete("index"),f.filter(v=>v).forEach(v=>d.append("index",v));let y=d.toString();o.search=y?`?${y}`:""}}return(!n||n===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:Gi([t,o.pathname])),Dh(o)}function Sk(n,e={}){let t=Y.useContext(kS);wt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=qS("useViewTransitionState"),a=sd(n,{relative:e.relative});if(!t.isTransitioning)return!1;let o=Ki(t.currentLocation.pathname,r)||t.currentLocation.pathname,u=Ki(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Np(a.pathname,u)!=null||Np(a.pathname,o)!=null}new TextEncoder;var zn=function(){return zn=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},zn.apply(this,arguments)};function kp(n,e,t){if(t||arguments.length===2)for(var r=0,a=e.length,o;r<a;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return n.concat(o||Array.prototype.slice.call(e))}var ht="-ms-",gh="-moz-",Xe="-webkit-",HS="comm",pm="rule",Bv="decl",Rk="@import",GS="@keyframes",Ck="@layer",$S=Math.abs,Fv=String.fromCharCode,B_=Object.assign;function xk(n,e){return on(n,0)^45?(((e<<2^on(n,0))<<2^on(n,1))<<2^on(n,2))<<2^on(n,3):0}function KS(n){return n.trim()}function ji(n,e){return(n=e.exec(n))?n[0]:n}function Oe(n,e,t){return n.replace(e,t)}function fp(n,e,t){return n.indexOf(e,t)}function on(n,e){return n.charCodeAt(e)|0}function Yl(n,e,t){return n.slice(e,t)}function Xr(n){return n.length}function QS(n){return n.length}function lh(n,e){return e.push(n),n}function Dk(n,e){return n.map(e).join("")}function rI(n,e){return n.filter(function(t){return!ji(t,e)})}var mm=1,Wl=1,YS=0,Tr=0,Gt=0,Au="";function gm(n,e,t,r,a,o,u,d){return{value:n,root:e,parent:t,type:r,props:a,children:o,line:mm,column:Wl,length:u,return:"",siblings:d}}function Us(n,e){return B_(gm("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function Cl(n){for(;n.root;)n=Us(n.root,{children:[n]});lh(n,n.siblings)}function Pk(){return Gt}function Nk(){return Gt=Tr>0?on(Au,--Tr):0,Wl--,Gt===10&&(Wl=1,mm--),Gt}function Pr(){return Gt=Tr<YS?on(Au,Tr++):0,Wl++,Gt===10&&(Wl=1,mm++),Gt}function ho(){return on(Au,Tr)}function pp(){return Tr}function ym(n,e){return Yl(Au,n,e)}function F_(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function kk(n){return mm=Wl=1,YS=Xr(Au=n),Tr=0,[]}function Ok(n){return Au="",n}function f_(n){return KS(ym(Tr-1,z_(n===91?n+2:n===40?n+1:n)))}function Vk(n){for(;(Gt=ho())&&Gt<33;)Pr();return F_(n)>2||F_(Gt)>3?"":" "}function Mk(n,e){for(;--e&&Pr()&&!(Gt<48||Gt>102||Gt>57&&Gt<65||Gt>70&&Gt<97););return ym(n,pp()+(e<6&&ho()==32&&Pr()==32))}function z_(n){for(;Pr();)switch(Gt){case n:return Tr;case 34:case 39:n!==34&&n!==39&&z_(Gt);break;case 40:n===41&&z_(n);break;case 92:Pr();break}return Tr}function Lk(n,e){for(;Pr()&&n+Gt!==57;)if(n+Gt===84&&ho()===47)break;return"/*"+ym(e,Tr-1)+"*"+Fv(n===47?n:Pr())}function Uk(n){for(;!F_(ho());)Pr();return ym(n,Tr)}function Bk(n){return Ok(mp("",null,null,null,[""],n=kk(n),0,[0],n))}function mp(n,e,t,r,a,o,u,d,f){for(var m=0,y=0,v=u,b=0,A=0,x=0,U=1,M=1,H=1,Z=0,$="",le=a,re=o,J=r,R=$;M;)switch(x=Z,Z=Pr()){case 40:if(x!=108&&on(R,v-1)==58){fp(R+=Oe(f_(Z),"&","&\f"),"&\f",$S(m?d[m-1]:0))!=-1&&(H=-1);break}case 34:case 39:case 91:R+=f_(Z);break;case 9:case 10:case 13:case 32:R+=Vk(x);break;case 92:R+=Mk(pp()-1,7);continue;case 47:switch(ho()){case 42:case 47:lh(Fk(Lk(Pr(),pp()),e,t,f),f);break;default:R+="/"}break;case 123*U:d[m++]=Xr(R)*H;case 125*U:case 59:case 0:switch(Z){case 0:case 125:M=0;case 59+y:H==-1&&(R=Oe(R,/\f/g,"")),A>0&&Xr(R)-v&&lh(A>32?sI(R+";",r,t,v-1,f):sI(Oe(R," ","")+";",r,t,v-2,f),f);break;case 59:R+=";";default:if(lh(J=iI(R,e,t,m,y,a,d,$,le=[],re=[],v,o),o),Z===123)if(y===0)mp(R,e,J,J,le,o,v,d,re);else switch(b===99&&on(R,3)===110?100:b){case 100:case 108:case 109:case 115:mp(n,J,J,r&&lh(iI(n,J,J,0,0,a,d,$,a,le=[],v,re),re),a,re,v,d,r?le:re);break;default:mp(R,J,J,J,[""],re,0,d,re)}}m=y=A=0,U=H=1,$=R="",v=u;break;case 58:v=1+Xr(R),A=x;default:if(U<1){if(Z==123)--U;else if(Z==125&&U++==0&&Nk()==125)continue}switch(R+=Fv(Z),Z*U){case 38:H=y>0?1:(R+="\f",-1);break;case 44:d[m++]=(Xr(R)-1)*H,H=1;break;case 64:ho()===45&&(R+=f_(Pr())),b=ho(),y=v=Xr($=R+=Uk(pp())),Z++;break;case 45:x===45&&Xr(R)==2&&(U=0)}}return o}function iI(n,e,t,r,a,o,u,d,f,m,y,v){for(var b=a-1,A=a===0?o:[""],x=QS(A),U=0,M=0,H=0;U<r;++U)for(var Z=0,$=Yl(n,b+1,b=$S(M=u[U])),le=n;Z<x;++Z)(le=KS(M>0?A[Z]+" "+$:Oe($,/&\f/g,A[Z])))&&(f[H++]=le);return gm(n,e,t,a===0?pm:d,f,m,y,v)}function Fk(n,e,t,r){return gm(n,e,t,HS,Fv(Pk()),Yl(n,2,-2),0,r)}function sI(n,e,t,r,a){return gm(n,e,t,Bv,Yl(n,0,r),Yl(n,r+1,-1),r,a)}function WS(n,e,t){switch(xk(n,e)){case 5103:return Xe+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Xe+n+n;case 4789:return gh+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Xe+n+gh+n+ht+n+n;case 5936:switch(on(n,e+11)){case 114:return Xe+n+ht+Oe(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Xe+n+ht+Oe(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Xe+n+ht+Oe(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Xe+n+ht+n+n;case 6165:return Xe+n+ht+"flex-"+n+n;case 5187:return Xe+n+Oe(n,/(\w+).+(:[^]+)/,Xe+"box-$1$2"+ht+"flex-$1$2")+n;case 5443:return Xe+n+ht+"flex-item-"+Oe(n,/flex-|-self/g,"")+(ji(n,/flex-|baseline/)?"":ht+"grid-row-"+Oe(n,/flex-|-self/g,""))+n;case 4675:return Xe+n+ht+"flex-line-pack"+Oe(n,/align-content|flex-|-self/g,"")+n;case 5548:return Xe+n+ht+Oe(n,"shrink","negative")+n;case 5292:return Xe+n+ht+Oe(n,"basis","preferred-size")+n;case 6060:return Xe+"box-"+Oe(n,"-grow","")+Xe+n+ht+Oe(n,"grow","positive")+n;case 4554:return Xe+Oe(n,/([^-])(transform)/g,"$1"+Xe+"$2")+n;case 6187:return Oe(Oe(Oe(n,/(zoom-|grab)/,Xe+"$1"),/(image-set)/,Xe+"$1"),n,"")+n;case 5495:case 3959:return Oe(n,/(image-set\([^]*)/,Xe+"$1$`$1");case 4968:return Oe(Oe(n,/(.+:)(flex-)?(.*)/,Xe+"box-pack:$3"+ht+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Xe+n+n;case 4200:if(!ji(n,/flex-|baseline/))return ht+"grid-column-align"+Yl(n,e)+n;break;case 2592:case 3360:return ht+Oe(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(r,a){return e=a,ji(r.props,/grid-\w+-end/)})?~fp(n+(t=t[e].value),"span",0)?n:ht+Oe(n,"-start","")+n+ht+"grid-row-span:"+(~fp(t,"span",0)?ji(t,/\d+/):+ji(t,/\d+/)-+ji(n,/\d+/))+";":ht+Oe(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(r){return ji(r.props,/grid-\w+-start/)})?n:ht+Oe(Oe(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Oe(n,/(.+)-inline(.+)/,Xe+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xr(n)-1-e>6)switch(on(n,e+1)){case 109:if(on(n,e+4)!==45)break;case 102:return Oe(n,/(.+:)(.+)-([^]+)/,"$1"+Xe+"$2-$3$1"+gh+(on(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~fp(n,"stretch",0)?WS(Oe(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return Oe(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,a,o,u,d,f,m){return ht+a+":"+o+m+(u?ht+a+"-span:"+(d?f:+f-+o)+m:"")+n});case 4949:if(on(n,e+6)===121)return Oe(n,":",":"+Xe)+n;break;case 6444:switch(on(n,on(n,14)===45?18:11)){case 120:return Oe(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Xe+(on(n,14)===45?"inline-":"")+"box$3$1"+Xe+"$2$3$1"+ht+"$2box$3")+n;case 100:return Oe(n,":",":"+ht)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Oe(n,"scroll-","scroll-snap-")+n}return n}function Op(n,e){for(var t="",r=0;r<n.length;r++)t+=e(n[r],r,n,e)||"";return t}function zk(n,e,t,r){switch(n.type){case Ck:if(n.children.length)break;case Rk:case Bv:return n.return=n.return||n.value;case HS:return"";case GS:return n.return=n.value+"{"+Op(n.children,r)+"}";case pm:if(!Xr(n.value=n.props.join(",")))return""}return Xr(t=Op(n.children,r))?n.return=n.value+"{"+t+"}":""}function jk(n){var e=QS(n);return function(t,r,a,o){for(var u="",d=0;d<e;d++)u+=n[d](t,r,a,o)||"";return u}}function qk(n){return function(e){e.root||(e=e.return)&&n(e)}}function Hk(n,e,t,r){if(n.length>-1&&!n.return)switch(n.type){case Bv:n.return=WS(n.value,n.length,t);return;case GS:return Op([Us(n,{value:Oe(n.value,"@","@"+Xe)})],r);case pm:if(n.length)return Dk(t=n.props,function(a){switch(ji(a,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Cl(Us(n,{props:[Oe(a,/:(read-\w+)/,":"+gh+"$1")]})),Cl(Us(n,{props:[a]})),B_(n,{props:rI(t,r)});break;case"::placeholder":Cl(Us(n,{props:[Oe(a,/:(plac\w+)/,":"+Xe+"input-$1")]})),Cl(Us(n,{props:[Oe(a,/:(plac\w+)/,":"+gh+"$1")]})),Cl(Us(n,{props:[Oe(a,/:(plac\w+)/,ht+"input-$1")]})),Cl(Us(n,{props:[a]})),B_(n,{props:rI(t,r)});break}return""})}}var Gk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},er={},Xl=typeof process<"u"&&er!==void 0&&(er.REACT_APP_SC_ATTR||er.SC_ATTR)||"data-styled",XS="active",ZS="data-styled-version",_m="6.1.16",zv=`/*!sc*/
`,Vp=typeof window<"u"&&"HTMLElement"in window,$k=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&er!==void 0&&er.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&er.REACT_APP_SC_DISABLE_SPEEDY!==""?er.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&er.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&er!==void 0&&er.SC_DISABLE_SPEEDY!==void 0&&er.SC_DISABLE_SPEEDY!==""&&er.SC_DISABLE_SPEEDY!=="false"&&er.SC_DISABLE_SPEEDY),vm=Object.freeze([]),Zl=Object.freeze({});function Kk(n,e,t){return t===void 0&&(t=Zl),n.theme!==t.theme&&n.theme||e||t.theme}var JS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Qk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Yk=/(^-|-$)/g;function aI(n){return n.replace(Qk,"-").replace(Yk,"")}var Wk=/(a)(d)/gi,ep=52,oI=function(n){return String.fromCharCode(n+(n>25?39:97))};function j_(n){var e,t="";for(e=Math.abs(n);e>ep;e=e/ep|0)t=oI(e%ep)+t;return(oI(e%ep)+t).replace(Wk,"$1-$2")}var p_,eR=5381,zl=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},tR=function(n){return zl(eR,n)};function Xk(n){return j_(tR(n)>>>0)}function Zk(n){return n.displayName||n.name||"Component"}function m_(n){return typeof n=="string"&&!0}var nR=typeof Symbol=="function"&&Symbol.for,rR=nR?Symbol.for("react.memo"):60115,Jk=nR?Symbol.for("react.forward_ref"):60112,eO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},tO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},iR={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},nO=((p_={})[Jk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},p_[rR]=iR,p_);function lI(n){return("type"in(e=n)&&e.type.$$typeof)===rR?iR:"$$typeof"in n?nO[n.$$typeof]:eO;var e}var rO=Object.defineProperty,iO=Object.getOwnPropertyNames,uI=Object.getOwnPropertySymbols,sO=Object.getOwnPropertyDescriptor,aO=Object.getPrototypeOf,cI=Object.prototype;function sR(n,e,t){if(typeof e!="string"){if(cI){var r=aO(e);r&&r!==cI&&sR(n,r,t)}var a=iO(e);uI&&(a=a.concat(uI(e)));for(var o=lI(n),u=lI(e),d=0;d<a.length;++d){var f=a[d];if(!(f in tO||t&&t[f]||u&&f in u||o&&f in o)){var m=sO(e,f);try{rO(n,f,m)}catch{}}}}return n}function Jl(n){return typeof n=="function"}function jv(n){return typeof n=="object"&&"styledComponentId"in n}function ao(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function hI(n,e){if(n.length===0)return"";for(var t=n[0],r=1;r<n.length;r++)t+=n[r];return t}function Ph(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function q_(n,e,t){if(t===void 0&&(t=!1),!t&&!Ph(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)n[r]=q_(n[r],e[r]);else if(Ph(e))for(var r in e)n[r]=q_(n[r],e[r]);return n}function qv(n,e){Object.defineProperty(n,"toString",{value:e})}function ad(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var oO=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,a=r.length,o=a;e>=o;)if((o<<=1)<0)throw ad(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var u=a;u<o;u++)this.groupSizes[u]=0}for(var d=this.indexOfGroup(e+1),f=(u=0,t.length);u<f;u++)this.tag.insertRule(d,t[u])&&(this.groupSizes[e]++,d++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),a=r+t;this.groupSizes[e]=0;for(var o=r;o<a;o++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],a=this.indexOfGroup(e),o=a+r,u=a;u<o;u++)t+="".concat(this.tag.getRule(u)).concat(zv);return t},n}(),gp=new Map,Mp=new Map,yp=1,tp=function(n){if(gp.has(n))return gp.get(n);for(;Mp.has(yp);)yp++;var e=yp++;return gp.set(n,e),Mp.set(e,n),e},lO=function(n,e){yp=e+1,gp.set(n,e),Mp.set(e,n)},uO="style[".concat(Xl,"][").concat(ZS,'="').concat(_m,'"]'),cO=new RegExp("^".concat(Xl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),hO=function(n,e,t){for(var r,a=t.split(","),o=0,u=a.length;o<u;o++)(r=a[o])&&n.registerName(e,r)},dO=function(n,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(zv),a=[],o=0,u=r.length;o<u;o++){var d=r[o].trim();if(d){var f=d.match(cO);if(f){var m=0|parseInt(f[1],10),y=f[2];m!==0&&(lO(y,m),hO(n,y,f[3]),n.getTag().insertRules(m,a)),a.length=0}else a.push(d)}}},dI=function(n){for(var e=document.querySelectorAll(uO),t=0,r=e.length;t<r;t++){var a=e[t];a&&a.getAttribute(Xl)!==XS&&(dO(n,a),a.parentNode&&a.parentNode.removeChild(a))}};function fO(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var aR=function(n){var e=document.head,t=n||e,r=document.createElement("style"),a=function(d){var f=Array.from(d.querySelectorAll("style[".concat(Xl,"]")));return f[f.length-1]}(t),o=a!==void 0?a.nextSibling:null;r.setAttribute(Xl,XS),r.setAttribute(ZS,_m);var u=fO();return u&&r.setAttribute("nonce",u),t.insertBefore(r,o),r},pO=function(){function n(e){this.element=aR(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,a=0,o=r.length;a<o;a++){var u=r[a];if(u.ownerNode===t)return u}throw ad(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),mO=function(){function n(e){this.element=aR(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),gO=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),fI=Vp,yO={isServer:!Vp,useCSSOMInjection:!$k},oR=function(){function n(e,t,r){e===void 0&&(e=Zl),t===void 0&&(t={});var a=this;this.options=zn(zn({},yO),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Vp&&fI&&(fI=!1,dI(this)),qv(this,function(){return function(o){for(var u=o.getTag(),d=u.length,f="",m=function(v){var b=function(H){return Mp.get(H)}(v);if(b===void 0)return"continue";var A=o.names.get(b),x=u.getGroup(v);if(A===void 0||!A.size||x.length===0)return"continue";var U="".concat(Xl,".g").concat(v,'[id="').concat(b,'"]'),M="";A!==void 0&&A.forEach(function(H){H.length>0&&(M+="".concat(H,","))}),f+="".concat(x).concat(U,'{content:"').concat(M,'"}').concat(zv)},y=0;y<d;y++)m(y);return f}(a)})}return n.registerId=function(e){return tp(e)},n.prototype.rehydrate=function(){!this.server&&Vp&&dI(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(zn(zn({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,a=t.target;return t.isServer?new gO(a):r?new pO(a):new mO(a)}(this.options),new oO(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(tp(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},n.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(tp(e),r)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(tp(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),_O=/&/g,vO=/^\s*\/\/.*$/gm;function lR(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=lR(t.children,e)),t})}function EO(n){var e,t,r,a=Zl,o=a.options,u=o===void 0?Zl:o,d=a.plugins,f=d===void 0?vm:d,m=function(b,A,x){return x.startsWith(t)&&x.endsWith(t)&&x.replaceAll(t,"").length>0?".".concat(e):b},y=f.slice();y.push(function(b){b.type===pm&&b.value.includes("&")&&(b.props[0]=b.props[0].replace(_O,t).replace(r,m))}),u.prefix&&y.push(Hk),y.push(zk);var v=function(b,A,x,U){A===void 0&&(A=""),x===void 0&&(x=""),U===void 0&&(U="&"),e=U,t=A,r=new RegExp("\\".concat(t,"\\b"),"g");var M=b.replace(vO,""),H=Bk(x||A?"".concat(x," ").concat(A," { ").concat(M," }"):M);u.namespace&&(H=lR(H,u.namespace));var Z=[];return Op(H,jk(y.concat(qk(function($){return Z.push($)})))),Z};return v.hash=f.length?f.reduce(function(b,A){return A.name||ad(15),zl(b,A.name)},eR).toString():"",v}var TO=new oR,H_=EO(),uR=xh.createContext({shouldForwardProp:void 0,styleSheet:TO,stylis:H_});uR.Consumer;xh.createContext(void 0);function pI(){return Y.useContext(uR)}var bO=function(){function n(e,t){var r=this;this.inject=function(a,o){o===void 0&&(o=H_);var u=r.name+o.hash;a.hasNameForId(r.id,u)||a.insertRules(r.id,u,o(r.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,qv(this,function(){throw ad(12,String(r.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=H_),this.name+e.hash},n}(),wO=function(n){return n>="A"&&n<="Z"};function mI(n){for(var e="",t=0;t<n.length;t++){var r=n[t];if(t===1&&r==="-"&&n[0]==="-")return n;wO(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var cR=function(n){return n==null||n===!1||n===""},hR=function(n){var e,t,r=[];for(var a in n){var o=n[a];n.hasOwnProperty(a)&&!cR(o)&&(Array.isArray(o)&&o.isCss||Jl(o)?r.push("".concat(mI(a),":"),o,";"):Ph(o)?r.push.apply(r,kp(kp(["".concat(a," {")],hR(o),!1),["}"],!1)):r.push("".concat(mI(a),": ").concat((e=a,(t=o)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Gk||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function fo(n,e,t,r){if(cR(n))return[];if(jv(n))return[".".concat(n.styledComponentId)];if(Jl(n)){if(!Jl(o=n)||o.prototype&&o.prototype.isReactComponent||!e)return[n];var a=n(e);return fo(a,e,t,r)}var o;return n instanceof bO?t?(n.inject(t,r),[n.getName(r)]):[n]:Ph(n)?hR(n):Array.isArray(n)?Array.prototype.concat.apply(vm,n.map(function(u){return fo(u,e,t,r)})):[n.toString()]}function IO(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(Jl(t)&&!jv(t))return!1}return!0}var AO=tR(_m),SO=function(){function n(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&IO(e),this.componentId=t,this.baseHash=zl(AO,t),this.baseStyle=r,oR.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,r){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))a=ao(a,this.staticRulesId);else{var o=hI(fo(this.rules,e,t,r)),u=j_(zl(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,u)){var d=r(o,".".concat(u),void 0,this.componentId);t.insertRules(this.componentId,u,d)}a=ao(a,u),this.staticRulesId=u}else{for(var f=zl(this.baseHash,r.hash),m="",y=0;y<this.rules.length;y++){var v=this.rules[y];if(typeof v=="string")m+=v;else if(v){var b=hI(fo(v,e,t,r));f=zl(f,b+y),m+=b}}if(m){var A=j_(f>>>0);t.hasNameForId(this.componentId,A)||t.insertRules(this.componentId,A,r(m,".".concat(A),void 0,this.componentId)),a=ao(a,A)}}return a},n}(),dR=xh.createContext(void 0);dR.Consumer;var g_={};function RO(n,e,t){var r=jv(n),a=n,o=!m_(n),u=e.attrs,d=u===void 0?vm:u,f=e.componentId,m=f===void 0?function(le,re){var J=typeof le!="string"?"sc":aI(le);g_[J]=(g_[J]||0)+1;var R="".concat(J,"-").concat(Xk(_m+J+g_[J]));return re?"".concat(re,"-").concat(R):R}(e.displayName,e.parentComponentId):f,y=e.displayName,v=y===void 0?function(le){return m_(le)?"styled.".concat(le):"Styled(".concat(Zk(le),")")}(n):y,b=e.displayName&&e.componentId?"".concat(aI(e.displayName),"-").concat(e.componentId):e.componentId||m,A=r&&a.attrs?a.attrs.concat(d).filter(Boolean):d,x=e.shouldForwardProp;if(r&&a.shouldForwardProp){var U=a.shouldForwardProp;if(e.shouldForwardProp){var M=e.shouldForwardProp;x=function(le,re){return U(le,re)&&M(le,re)}}else x=U}var H=new SO(t,b,r?a.componentStyle:void 0);function Z(le,re){return function(J,R,S){var C=J.attrs,O=J.componentStyle,N=J.defaultProps,L=J.foldedComponentIds,P=J.styledComponentId,ft=J.target,rt=xh.useContext(dR),ee=pI(),he=J.shouldForwardProp||ee.shouldForwardProp,Ee=Kk(R,rt,N)||Zl,Ne=function(De,Ie,Tt){for(var $e,Jt=zn(zn({},Ie),{className:void 0,theme:Tt}),sr=0;sr<De.length;sr+=1){var Mn=Jl($e=De[sr])?$e(Jt):$e;for(var vn in Mn)Jt[vn]=vn==="className"?ao(Jt[vn],Mn[vn]):vn==="style"?zn(zn({},Jt[vn]),Mn[vn]):Mn[vn]}return Ie.className&&(Jt.className=ao(Jt.className,Ie.className)),Jt}(C,R,Ee),k=Ne.as||ft,se={};for(var de in Ne)Ne[de]===void 0||de[0]==="$"||de==="as"||de==="theme"&&Ne.theme===Ee||(de==="forwardedAs"?se.as=Ne.forwardedAs:he&&!he(de,k)||(se[de]=Ne[de]));var ce=function(De,Ie){var Tt=pI(),$e=De.generateAndInjectStyles(Ie,Tt.styleSheet,Tt.stylis);return $e}(O,Ne),be=ao(L,P);return ce&&(be+=" "+ce),Ne.className&&(be+=" "+Ne.className),se[m_(k)&&!JS.has(k)?"class":"className"]=be,S&&(se.ref=S),Y.createElement(k,se)}($,le,re)}Z.displayName=v;var $=xh.forwardRef(Z);return $.attrs=A,$.componentStyle=H,$.displayName=v,$.shouldForwardProp=x,$.foldedComponentIds=r?ao(a.foldedComponentIds,a.styledComponentId):"",$.styledComponentId=b,$.target=r?a.target:n,Object.defineProperty($,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(le){this._foldedDefaultProps=r?function(re){for(var J=[],R=1;R<arguments.length;R++)J[R-1]=arguments[R];for(var S=0,C=J;S<C.length;S++)q_(re,C[S],!0);return re}({},a.defaultProps,le):le}}),qv($,function(){return".".concat($.styledComponentId)}),o&&sR($,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),$}function gI(n,e){for(var t=[n[0]],r=0,a=e.length;r<a;r+=1)t.push(e[r],n[r+1]);return t}var yI=function(n){return Object.assign(n,{isCss:!0})};function CO(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Jl(n)||Ph(n))return yI(fo(gI(vm,kp([n],e,!0))));var r=n;return e.length===0&&r.length===1&&typeof r[0]=="string"?fo(r):yI(fo(gI(r,e)))}function G_(n,e,t){if(t===void 0&&(t=Zl),!e)throw ad(1,e);var r=function(a){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];return n(e,t,CO.apply(void 0,kp([a],o,!1)))};return r.attrs=function(a){return G_(n,e,zn(zn({},t),{attrs:Array.prototype.concat(t.attrs,a).filter(Boolean)}))},r.withConfig=function(a){return G_(n,e,zn(zn({},t),a))},r}var fR=function(n){return G_(RO,n)},ge=fR;JS.forEach(function(n){ge[n]=fR(n)});const xO=()=>{};var _I={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let a=n.charCodeAt(r);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},DO=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const a=n[t++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const o=n[t++];e[r++]=String.fromCharCode((a&31)<<6|o&63)}else if(a>239&&a<365){const o=n[t++],u=n[t++],d=n[t++],f=((a&7)<<18|(o&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const o=n[t++],u=n[t++];e[r++]=String.fromCharCode((a&15)<<12|(o&63)<<6|u&63)}}return e.join("")},mR={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<n.length;a+=3){const o=n[a],u=a+1<n.length,d=u?n[a+1]:0,f=a+2<n.length,m=f?n[a+2]:0,y=o>>2,v=(o&3)<<4|d>>4;let b=(d&15)<<2|m>>6,A=m&63;f||(A=64,u||(b=64)),r.push(t[y],t[v],t[b],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(pR(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):DO(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<n.length;){const o=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const m=a<n.length?t[n.charAt(a)]:64;++a;const v=a<n.length?t[n.charAt(a)]:64;if(++a,o==null||d==null||m==null||v==null)throw new PO;const b=o<<2|d>>4;if(r.push(b),m!==64){const A=d<<4&240|m>>2;if(r.push(A),v!==64){const x=m<<6&192|v;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class PO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const NO=function(n){const e=pR(n);return mR.encodeByteArray(e,!0)},Lp=function(n){return NO(n).replace(/\./g,"")},Hv=function(n){try{return mR.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Up(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!kO(t)||(n[t]=Up(n[t],e[t]));return n}function kO(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO=()=>gR().__FIREBASE_DEFAULTS__,VO=()=>{if(typeof process>"u"||typeof _I>"u")return;const n=_I.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},MO=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Hv(n[1]);return e&&JSON.parse(e)},Gv=()=>{try{return xO()||OO()||VO()||MO()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},yR=()=>{var n;return(n=Gv())===null||n===void 0?void 0:n.config},LO=n=>{var e;return(e=Gv())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BO(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",a=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:a,exp:a+3600,auth_time:a,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Lp(JSON.stringify(t)),Lp(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function $v(){var n;const e=(n=Gv())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zO(){return typeof window<"u"||_R()}function _R(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function jO(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Kv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ER(){const n=At();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function TR(){return!$v()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Nh(){try{return typeof indexedDB=="object"}catch{return!1}}function qO(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var o;e(((o=a.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO="FirebaseError";class kn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=HO,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Do.prototype.create)}}class Do{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},a=`${this.service}/${e}`,o=this.errors[e],u=o?GO(o,r):"Error",d=`${this.serviceName}: ${u} (${a}).`;return new kn(a,d,r)}}function GO(n,e){return n.replace($O,(t,r)=>{const a=e[r];return a!=null?String(a):`<${r}?>`})}const $O=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function KO(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Qs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const a of t){if(!r.includes(a))return!1;const o=n[a],u=e[a];if(EI(o)&&EI(u)){if(!Qs(o,u))return!1}else if(o!==u)return!1}for(const a of r)if(!t.includes(a))return!1;return!0}function EI(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[a,o]=r.split("=");e[decodeURIComponent(a)]=decodeURIComponent(o)}}),e}function uh(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function bR(n,e){const t=new QO(n,e);return t.subscribe.bind(t)}class QO{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let a;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");YO(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:r},a.next===void 0&&(a.next=y_),a.error===void 0&&(a.error=y_),a.complete===void 0&&(a.complete=y_);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YO(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function y_(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n){return n&&n._delegate?n._delegate:n}class ci{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new UO;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZO(e))try{this.getOrInitializeService({instanceIdentifier:Xa})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:a});r.resolve(o)}catch{}}}}clearInstance(e=Xa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xa){return this.instances.has(e)}getOptions(e=Xa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(o);r===d&&u.resolve(a)}return a}onInit(e,t){var r;const a=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(a))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&e(u,a),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const a of r)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:XO(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xa){return this.component?this.component.multipleInstances?e:Xa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XO(n){return n===Xa?void 0:n}function ZO(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new WO(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv=[];var Be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Be||(Be={}));const IR={debug:Be.DEBUG,verbose:Be.VERBOSE,info:Be.INFO,warn:Be.WARN,error:Be.ERROR,silent:Be.SILENT},JO=Be.INFO,eV={[Be.DEBUG]:"log",[Be.VERBOSE]:"log",[Be.INFO]:"info",[Be.WARN]:"warn",[Be.ERROR]:"error"},tV=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),a=eV[e];if(a)console[a](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Em{constructor(e){this.name=e,this._logLevel=JO,this._logHandler=tV,this._userLogHandler=null,Qv.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?IR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Be.DEBUG,...e),this._logHandler(this,Be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Be.VERBOSE,...e),this._logHandler(this,Be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Be.INFO,...e),this._logHandler(this,Be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Be.WARN,...e),this._logHandler(this,Be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Be.ERROR,...e),this._logHandler(this,Be.ERROR,...e)}}function nV(n){Qv.forEach(e=>{e.setLogLevel(n)})}function rV(n,e){for(const t of Qv){let r=null;e&&e.level&&(r=IR[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(a,o,...u)=>{const d=u.map(f=>{if(f==null)return null;if(typeof f=="string")return f;if(typeof f=="number"||typeof f=="boolean")return f.toString();if(f instanceof Error)return f.message;try{return JSON.stringify(f)}catch{return null}}).filter(f=>f).join(" ");o>=(r??a.logLevel)&&n({level:Be[o].toLowerCase(),message:d,args:u,type:a.name})}}}const iV=(n,e)=>e.some(t=>n instanceof t);let TI,bI;function sV(){return TI||(TI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aV(){return bI||(bI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const AR=new WeakMap,$_=new WeakMap,SR=new WeakMap,__=new WeakMap,Yv=new WeakMap;function oV(n){const e=new Promise((t,r)=>{const a=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{t(qs(n.result)),a()},u=()=>{r(n.error),a()};n.addEventListener("success",o),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&AR.set(t,n)}).catch(()=>{}),Yv.set(e,n),e}function lV(n){if($_.has(n))return;const e=new Promise((t,r)=>{const a=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{t(),a()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});$_.set(n,e)}let K_={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return $_.get(n);if(e==="objectStoreNames")return n.objectStoreNames||SR.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return qs(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function uV(n){K_=n(K_)}function cV(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(v_(this),e,...t);return SR.set(r,e.sort?e.sort():[e]),qs(r)}:aV().includes(n)?function(...e){return n.apply(v_(this),e),qs(AR.get(this))}:function(...e){return qs(n.apply(v_(this),e))}}function hV(n){return typeof n=="function"?cV(n):(n instanceof IDBTransaction&&lV(n),iV(n,sV())?new Proxy(n,K_):n)}function qs(n){if(n instanceof IDBRequest)return oV(n);if(__.has(n))return __.get(n);const e=hV(n);return e!==n&&(__.set(n,e),Yv.set(e,n)),e}const v_=n=>Yv.get(n);function dV(n,e,{blocked:t,upgrade:r,blocking:a,terminated:o}={}){const u=indexedDB.open(n,e),d=qs(u);return r&&u.addEventListener("upgradeneeded",f=>{r(qs(u.result),f.oldVersion,f.newVersion,qs(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{o&&f.addEventListener("close",()=>o()),a&&f.addEventListener("versionchange",m=>a(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const fV=["get","getKey","getAll","getAllKeys","count"],pV=["put","add","delete","clear"],E_=new Map;function wI(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(E_.get(e))return E_.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,a=pV.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(a||fV.includes(t)))return;const o=async function(u,...d){const f=this.transaction(u,a?"readwrite":"readonly");let m=f.store;return r&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),a&&f.done]))[0]};return E_.set(e,o),o}uV(n=>({...n,get:(e,t,r)=>wI(e,t)||n.get(e,t,r),has:(e,t)=>!!wI(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mV{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(gV(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function gV(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bp="@firebase/app",Q_="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=new Em("@firebase/app"),yV="@firebase/app-compat",_V="@firebase/analytics-compat",vV="@firebase/analytics",EV="@firebase/app-check-compat",TV="@firebase/app-check",bV="@firebase/auth",wV="@firebase/auth-compat",IV="@firebase/database",AV="@firebase/data-connect",SV="@firebase/database-compat",RV="@firebase/functions",CV="@firebase/functions-compat",xV="@firebase/installations",DV="@firebase/installations-compat",PV="@firebase/messaging",NV="@firebase/messaging-compat",kV="@firebase/performance",OV="@firebase/performance-compat",VV="@firebase/remote-config",MV="@firebase/remote-config-compat",LV="@firebase/storage",UV="@firebase/storage-compat",BV="@firebase/firestore",FV="@firebase/vertexai",zV="@firebase/firestore-compat",jV="firebase",qV="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys="[DEFAULT]",HV={[Bp]:"fire-core",[yV]:"fire-core-compat",[vV]:"fire-analytics",[_V]:"fire-analytics-compat",[TV]:"fire-app-check",[EV]:"fire-app-check-compat",[bV]:"fire-auth",[wV]:"fire-auth-compat",[IV]:"fire-rtdb",[AV]:"fire-data-connect",[SV]:"fire-rtdb-compat",[RV]:"fire-fn",[CV]:"fire-fn-compat",[xV]:"fire-iid",[DV]:"fire-iid-compat",[PV]:"fire-fcm",[NV]:"fire-fcm-compat",[kV]:"fire-perf",[OV]:"fire-perf-compat",[VV]:"fire-rc",[MV]:"fire-rc-compat",[LV]:"fire-gcs",[UV]:"fire-gcs-compat",[BV]:"fire-fst",[zV]:"fire-fst-compat",[FV]:"fire-vertex","fire-js":"fire-js",[jV]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new Map,eu=new Map,tu=new Map;function kh(n,e){try{n.container.addComponent(e)}catch(t){Qi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function RR(n,e){n.container.addOrOverwriteComponent(e)}function Xs(n){const e=n.name;if(tu.has(e))return Qi.debug(`There were multiple attempts to register component ${e}.`),!1;tu.set(e,n);for(const t of Ws.values())kh(t,n);for(const t of eu.values())kh(t,n);return!0}function CR(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function GV(n,e,t=Ys){CR(n,e).clearInstance(t)}function xR(n){return n.options!==void 0}function yt(n){return n==null?!1:n.settings!==void 0}function $V(){tu.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KV={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Er=new Do("app","Firebase",KV);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DR=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ci("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Er.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(n,e){const t=Hv(n.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const a=JSON.parse(t).exp*1e3,o=new Date().getTime();a-o<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class QV extends DR{constructor(e,t,r,a){const o=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,u={name:r,automaticDataCollectionEnabled:o};if(e.apiKey!==void 0)super(e,u,a);else{const d=e;super(d.options,u,a)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:o},t),this._serverConfig.authIdToken&&II(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&II(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Nr(Bp,Q_,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Xv(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Er.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=qV;function Wv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ys,automaticDataCollectionEnabled:!1},e),a=r.name;if(typeof a!="string"||!a)throw Er.create("bad-app-name",{appName:String(a)});if(t||(t=yR()),!t)throw Er.create("no-options");const o=Ws.get(a);if(o){if(Qs(t,o.options)&&Qs(r,o.config))return o;throw Er.create("duplicate-app",{appName:a})}const u=new wR(a);for(const f of tu.values())u.addComponent(f);const d=new DR(t,r,u);return Ws.set(a,d),d}function YV(n,e){if(zO()&&!_R())throw Er.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;xR(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const a=m=>[...m].reduce((y,v)=>Math.imul(31,y)+v.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Er.create("finalization-registry-not-supported",{});const o=""+a(JSON.stringify(r)),u=eu.get(o);if(u)return u.incRefCount(e.releaseOnDeref),u;const d=new wR(o);for(const m of tu.values())d.addComponent(m);const f=new QV(t,e,o,d);return eu.set(o,f),f}function WV(n=Ys){const e=Ws.get(n);if(!e&&n===Ys&&yR())return Wv();if(!e)throw Er.create("no-app",{appName:n});return e}function XV(){return Array.from(Ws.values())}async function Xv(n){let e=!1;const t=n.name;Ws.has(t)?(e=!0,Ws.delete(t)):eu.has(t)&&n.decRefCount()<=0&&(eu.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function Nr(n,e,t){var r;let a=(r=HV[n])!==null&&r!==void 0?r:n;t&&(a+=`-${t}`);const o=a.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const d=[`Unable to register library "${a}" with version "${e}":`];o&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qi.warn(d.join(" "));return}Xs(new ci(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}function PR(n,e){if(n!==null&&typeof n!="function")throw Er.create("invalid-log-argument");rV(n,e)}function NR(n){nV(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZV="firebase-heartbeat-database",JV=1,Oh="firebase-heartbeat-store";let T_=null;function kR(){return T_||(T_=dV(ZV,JV,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Oh)}catch(t){console.warn(t)}}}}).catch(n=>{throw Er.create("idb-open",{originalErrorMessage:n.message})})),T_}async function eM(n){try{const t=(await kR()).transaction(Oh),r=await t.objectStore(Oh).get(OR(n));return await t.done,r}catch(e){if(e instanceof kn)Qi.warn(e.message);else{const t=Er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qi.warn(t.message)}}}async function AI(n,e){try{const r=(await kR()).transaction(Oh,"readwrite");await r.objectStore(Oh).put(e,OR(n)),await r.done}catch(t){if(t instanceof kn)Qi.warn(t.message);else{const r=Er.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Qi.warn(r.message)}}}function OR(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tM=1024,nM=30;class rM{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new sM(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=SI();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:a}),this._heartbeatsCache.heartbeats.length>nM){const u=aM(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Qi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=SI(),{heartbeatsToSend:r,unsentEntries:a}=iM(this._heartbeatsCache.heartbeats),o=Lp(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Qi.warn(t),""}}}function SI(){return new Date().toISOString().substring(0,10)}function iM(n,e=tM){const t=[];let r=n.slice();for(const a of n){const o=t.find(u=>u.agent===a.agent);if(o){if(o.dates.push(a.date),RI(t)>e){o.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),RI(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class sM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nh()?qO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await eM(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return AI(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return AI(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function RI(n){return Lp(JSON.stringify({version:2,heartbeats:n})).length}function aM(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oM(n){Xs(new ci("platform-logger",e=>new mV(e),"PRIVATE")),Xs(new ci("heartbeat",e=>new rM(e),"PRIVATE")),Nr(Bp,Q_,n),Nr(Bp,Q_,"esm2017"),Nr("fire-js","")}oM("");const lM=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:kn,SDK_VERSION:oa,_DEFAULT_ENTRY_NAME:Ys,_addComponent:kh,_addOrOverwriteComponent:RR,_apps:Ws,_clearComponents:$V,_components:tu,_getProvider:CR,_isFirebaseApp:xR,_isFirebaseServerApp:yt,_registerComponent:Xs,_removeServiceInstance:GV,_serverApps:eu,deleteApp:Xv,getApp:WV,getApps:XV,initializeApp:Wv,initializeServerApp:YV,onLog:PR,registerVersion:Nr,setLogLevel:NR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uM{constructor(e,t){this._delegate=e,this.firebase=t,kh(e,new ci("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Xv(this._delegate)))}_getService(e,t=Ys){var r;this._delegate.checkDestroyed();const a=this._delegate.container.getProvider(e);return!a.isInitialized()&&((r=a.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&a.initialize(),a.getImmediate({identifier:t})}_removeServiceInstance(e,t=Ys){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){kh(this._delegate,e)}_addOrOverwriteComponent(e){RR(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},CI=new Do("app-compat","Firebase",cM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(n){const e={},t={__esModule:!0,initializeApp:o,app:a,registerVersion:Nr,setLogLevel:NR,onLog:PR,apps:null,SDK_VERSION:oa,INTERNAL:{registerComponent:d,removeApp:r,useAsService:f,modularAPIs:lM}};t.default=t,Object.defineProperty(t,"apps",{get:u});function r(m){delete e[m]}function a(m){if(m=m||Ys,!vI(e,m))throw CI.create("no-app",{appName:m});return e[m]}a.App=n;function o(m,y={}){const v=Wv(m,y);if(vI(e,v.name))return e[v.name];const b=new n(v,t);return e[v.name]=b,b}function u(){return Object.keys(e).map(m=>e[m])}function d(m){const y=m.name,v=y.replace("-compat","");if(Xs(m)&&m.type==="PUBLIC"){const b=(A=a())=>{if(typeof A[v]!="function")throw CI.create("invalid-app-argument",{appName:y});return A[v]()};m.serviceProps!==void 0&&Up(b,m.serviceProps),t[v]=b,n.prototype[v]=function(...A){return this._getService.bind(this,y).apply(this,m.multipleInstances?A:[])}}return m.type==="PUBLIC"?t[v]:null}function f(m,y){return y==="serverAuth"?null:y}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(){const n=hM(uM);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:VR,extendNamespace:e,createSubscribe:bR,ErrorFactory:Do,deepExtend:Up});function e(t){Up(n,t)}return n}const dM=VR();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=new Em("@firebase/app-compat"),fM="@firebase/app-compat",pM="0.2.53";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mM(n){Nr(fM,pM,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const n=gR();if(n.firebase!==void 0){xI.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&xI.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Ru=dM;mM();var gM="firebase",yM="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ru.registerVersion(gM,yM,"app-compat");function Zv(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t}const Xc={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},xl={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _M(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function MR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vM=_M,EM=MR,LR=new Do("auth","Firebase",MR());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=new Em("@firebase/auth");function TM(n,...e){Fp.logLevel<=Be.WARN&&Fp.warn(`Auth (${oa}): ${n}`,...e)}function _p(n,...e){Fp.logLevel<=Be.ERROR&&Fp.error(`Auth (${oa}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(n,...e){throw eE(n,...e)}function Xt(n,...e){return eE(n,...e)}function Jv(n,e,t){const r=Object.assign(Object.assign({},EM()),{[e]:t});return new Do("auth","Firebase",r).create(e,{appName:n.name})}function un(n){return Jv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cu(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&_n(n,"argument-error"),Jv(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function eE(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return LR.create(n,...e)}function ue(n,e,...t){if(!n)throw eE(e,...t)}function ii(n){const e="INTERNAL ASSERTION FAILED: "+n;throw _p(e),new Error(e)}function kr(n,e){n||ii(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function tE(){return DI()==="http:"||DI()==="https:"}function DI(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tE()||vR()||"connection"in navigator)?navigator.onLine:!0}function wM(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,t){this.shortDelay=e,this.longDelay=t,kr(t>e,"Short delay should be less than long delay!"),this.isMobile=FO()||Kv()}get(){return bM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(n,e){kr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ii("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ii("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ii("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AM=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],SM=new od(3e4,6e4);function Pt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Nt(n,e,t,r,a={}){return BR(n,a,async()=>{let o={},u={};r&&(e==="GET"?u=r:o={body:JSON.stringify(r)});const d=Su(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:f},o);return jO()||(m.referrerPolicy="no-referrer"),UR.fetch()(await FR(n,n.config.apiHost,t,d),m)})}async function BR(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},IM),e);try{const a=new CM(n),o=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const u=await o.json();if("needConfirmation"in u)throw ch(n,"account-exists-with-different-credential",u);if(o.ok&&!("errorMessage"in u))return u;{const d=o.ok?u.errorMessage:u.error.message,[f,m]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw ch(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw ch(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw ch(n,"user-disabled",u);const y=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Jv(n,y,m);_n(n,y)}}catch(a){if(a instanceof kn)throw a;_n(n,"network-request-failed",{message:String(a)})}}async function Ji(n,e,t,r,a={}){const o=await Nt(n,e,t,r,a);return"mfaPendingCredential"in o&&_n(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function FR(n,e,t,r){const a=`${e}${t}?${r}`,o=n,u=o.config.emulator?nE(n.config,a):`${n.config.apiScheme}://${a}`;return AM.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(u).toString():u}function RM(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class CM{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),SM.get())})}}function ch(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const a=Xt(n,e,r);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(n){return n!==void 0&&n.getResponse!==void 0}function NI(n){return n!==void 0&&n.enterprise!==void 0}class zR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return RM(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xM(n){return(await Nt(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function jR(n,e){return Nt(n,"GET","/v2/recaptchaConfig",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DM(n,e){return Nt(n,"POST","/v1/accounts:delete",e)}async function PM(n,e){return Nt(n,"POST","/v1/accounts:update",e)}async function zp(n,e){return Nt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NM(n,e=!1){const t=Ae(n),r=await t.getIdToken(e),a=Tm(r);ue(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const o=typeof a.firebase=="object"?a.firebase:void 0,u=o==null?void 0:o.sign_in_provider;return{claims:a,token:r,authTime:yh(b_(a.auth_time)),issuedAtTime:yh(b_(a.iat)),expirationTime:yh(b_(a.exp)),signInProvider:u||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function b_(n){return Number(n)*1e3}function Tm(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return _p("JWT malformed, contained fewer than 3 sections"),null;try{const a=Hv(t);return a?JSON.parse(a):(_p("Failed to decode base64 JWT payload"),null)}catch(a){return _p("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function kI(n){const e=Tm(n);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof kn&&kM(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function kM({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=yh(this.lastLoginAt),this.creationTime=yh(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mh(n){var e;const t=n.auth,r=await n.getIdToken(),a=await Yi(n,zp(t,{idToken:r}));ue(a==null?void 0:a.users.length,t,"internal-error");const o=a.users[0];n._notifyReloadListener(o);const u=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?qR(o.providerUserInfo):[],d=MM(n.providerData,u),f=n.isAnonymous,m=!(n.email&&o.passwordHash)&&!(d!=null&&d.length),y=f?m:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:d,metadata:new Y_(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,v)}async function VM(n){const e=Ae(n);await Mh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MM(n,e){return[...n.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function qR(n){return n.map(e=>{var{providerId:t}=e,r=Zv(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LM(n,e){const t=await BR(n,{},async()=>{const r=Su({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:o}=n.config,u=await FR(n,a,"/v1/token",`key=${o}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",UR.fetch()(u,{method:"POST",headers:d,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function UM(n,e){return Nt(n,"POST","/v2/accounts:revokeToken",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const t=kI(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:a,expiresIn:o}=await LM(e,t);this.updateTokensAndExpiration(r,a,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:a,expirationTime:o}=t,u=new ql;return r&&(ue(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),a&&(ue(typeof a=="string","internal-error",{appName:e}),u.accessToken=a),o&&(ue(typeof o=="number","internal-error",{appName:e}),u.expirationTime=o),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ql,this.toJSON())}_performRefresh(){return ii("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(n,e){ue(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Dr{constructor(e){var{uid:t,auth:r,stsTokenManager:a}=e,o=Zv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new OM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Y_(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Yi(this,this.stsTokenManager.getToken(this.auth,e));return ue(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return NM(this,e)}reload(){return VM(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Dr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Mh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yt(this.auth.app))return Promise.reject(un(this.auth));const e=await this.getIdToken();return await Yi(this,DM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,a,o,u,d,f,m,y;const v=(r=t.displayName)!==null&&r!==void 0?r:void 0,b=(a=t.email)!==null&&a!==void 0?a:void 0,A=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,x=(u=t.photoURL)!==null&&u!==void 0?u:void 0,U=(d=t.tenantId)!==null&&d!==void 0?d:void 0,M=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,H=(m=t.createdAt)!==null&&m!==void 0?m:void 0,Z=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:$,emailVerified:le,isAnonymous:re,providerData:J,stsTokenManager:R}=t;ue($&&R,e,"internal-error");const S=ql.fromJSON(this.name,R);ue(typeof $=="string",e,"internal-error"),ks(v,e.name),ks(b,e.name),ue(typeof le=="boolean",e,"internal-error"),ue(typeof re=="boolean",e,"internal-error"),ks(A,e.name),ks(x,e.name),ks(U,e.name),ks(M,e.name),ks(H,e.name),ks(Z,e.name);const C=new Dr({uid:$,auth:e,email:b,emailVerified:le,displayName:v,isAnonymous:re,photoURL:x,phoneNumber:A,tenantId:U,stsTokenManager:S,createdAt:H,lastLoginAt:Z});return J&&Array.isArray(J)&&(C.providerData=J.map(O=>Object.assign({},O))),M&&(C._redirectEventId=M),C}static async _fromIdTokenResponse(e,t,r=!1){const a=new ql;a.updateFromServerResponse(t);const o=new Dr({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await Mh(o),o}static async _fromGetAccountInfoResponse(e,t,r){const a=t.users[0];ue(a.localId!==void 0,"internal-error");const o=a.providerUserInfo!==void 0?qR(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!(o!=null&&o.length),d=new ql;d.updateFromIdToken(r);const f=new Dr({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new Y_(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(o!=null&&o.length)};return Object.assign(f,m),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=new Map;function rr(n){kr(n instanceof Function,"Expected a class definition");let e=OI.get(n);return e?(kr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,OI.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}HR.type="NONE";const nu=HR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(n,e,t){return`firebase:${n}:${e}:${t}`}class Hl{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:a,name:o}=this.auth;this.fullUserKey=po(this.userKey,a.apiKey,o),this.fullPersistenceKey=po("persistence",a.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await zp(this.auth,{idToken:e}).catch(()=>{});return t?Dr._fromGetAccountInfoResponse(this.auth,t,e):null}return Dr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Hl(rr(nu),e,r);const a=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let o=a[0]||rr(nu);const u=po(r,e.config.apiKey,e.name);let d=null;for(const m of t)try{const y=await m._get(u);if(y){let v;if(typeof y=="string"){const b=await zp(e,{idToken:y}).catch(()=>{});if(!b)break;v=await Dr._fromGetAccountInfoResponse(e,b,y)}else v=Dr._fromJSON(e,y);m!==o&&(d=v),o=m;break}}catch{}const f=a.filter(m=>m._shouldAllowMigration);return!o._shouldAllowMigration||!f.length?new Hl(o,e,r):(o=f[0],d&&await o._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==o)try{await m._remove(u)}catch{}})),new Hl(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(QR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(GR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(YR(e))return"Blackberry";if(WR(e))return"Webos";if($R(e))return"Safari";if((e.includes("chrome/")||KR(e))&&!e.includes("edge/"))return"Chrome";if(ld(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function GR(n=At()){return/firefox\//i.test(n)}function $R(n=At()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function KR(n=At()){return/crios\//i.test(n)}function QR(n=At()){return/iemobile/i.test(n)}function ld(n=At()){return/android/i.test(n)}function YR(n=At()){return/blackberry/i.test(n)}function WR(n=At()){return/webos/i.test(n)}function ud(n=At()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function BM(n=At()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function FM(n=At()){var e;return ud(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zM(){return ER()&&document.documentMode===10}function XR(n=At()){return ud(n)||ld(n)||WR(n)||YR(n)||/windows phone/i.test(n)||QR(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(n,e=[]){let t;switch(n){case"Browser":t=VI(At());break;case"Worker":t=`${VI(At())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${oa}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((u,d)=>{try{const f=e(o);u(f)}catch(f){d(f)}});r.onAbort=t,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qM(n,e={}){return Nt(n,"GET","/v2/passwordPolicy",Pt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HM=6;class GM{constructor(e){var t,r,a,o;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:HM,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,a,o,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(a=f.containsLowercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(o=f.containsUppercaseLetter)!==null&&o!==void 0?o:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,a,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $M{constructor(e,t,r,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new MI(this),this.idTokenSubscription=new MI(this),this.beforeStateQueue=new jM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=LR,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=rr(t)),this._initializationPromise=this.queue(async()=>{var r,a,o;if(!this._deleted&&(this.persistenceManager=await Hl.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await zp(this,{idToken:e}),r=await Dr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(yt(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(a=f.user,o=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(a)}catch(u){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Mh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yt(this.app))return Promise.reject(un(this));const t=e?Ae(e):null;return t&&ue(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yt(this.app)?Promise.reject(un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yt(this.app)?Promise.reject(un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qM(this),t=new GM(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Do("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await UM(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&rr(e)||this._popupRedirectResolver;ue(t,this,"argument-error"),this.redirectPersistenceManager=await Hl.create(this,[rr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,a){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(d,this,"internal-error"),d.then(()=>{u||o(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,a);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ZR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&TM(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function St(n){return Ae(n)}class MI{constructor(e){this.auth=e,this.observer=null,this.addObserver=bR(t=>this.observer=t)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KM(n){cd=n}function rE(n){return cd.loadJS(n)}function QM(){return cd.recaptchaV2Script}function YM(){return cd.recaptchaEnterpriseScript}function WM(){return cd.gapiScript}function JR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM=500,ZM=6e4,np=1e12;class JM{constructor(e){this.auth=e,this.counter=np,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new n2(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||np;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||np;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||np;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class e2{constructor(){this.enterprise=new t2}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class t2{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class n2{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;ue(a,"argument-error",{appName:t}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=r2(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},ZM)},XM))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function r2(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const i2="recaptcha-enterprise",_h="NO_RECAPTCHA";class e1{constructor(e){this.type=i2,this.auth=St(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(u,d)=>{jR(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new zR(f);return o.tenantId==null?o._agentRecaptchaConfig=m:o._tenantRecaptchaConfigs[o.tenantId]=m,u(m.siteKey)}}).catch(f=>{d(f)})})}function a(o,u,d){const f=window.grecaptcha;NI(f)?f.enterprise.ready(()=>{f.enterprise.execute(o,{action:e}).then(m=>{u(m)}).catch(()=>{u(_h)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new e2().execute("siteKey",{action:"verify"}):new Promise((o,u)=>{r(this.auth).then(d=>{if(!t&&NI(window.grecaptcha))a(d,o,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=YM();f.length!==0&&(f+=d),rE(f).then(()=>{a(d,o,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function Zc(n,e,t,r=!1,a=!1){const o=new e1(n);let u;if(a)u=_h;else try{u=await o.verify(t)}catch{u=await o.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Hs(n,e,t,r,a){var o,u;if(a==="EMAIL_PASSWORD_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await Zc(n,e,t,t==="getOobCode");return r(n,d)}else return r(n,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Zc(n,e,t,t==="getOobCode");return r(n,f)}else return Promise.reject(d)});else if(a==="PHONE_PROVIDER")if(!((u=n._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("PHONE_PROVIDER")){const d=await Zc(n,e,t);return r(n,d).catch(async f=>{var m;if(((m=n._getRecaptchaConfig())===null||m===void 0?void 0:m.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(f.code==="auth/missing-recaptcha-token"||f.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const y=await Zc(n,e,t,!1,!0);return r(n,y)}return Promise.reject(f)})}else{const d=await Zc(n,e,t,!1,!0);return r(n,d)}else return Promise.reject(a+" provider is not supported.")}async function s2(n){const e=St(n),t=await jR(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new zR(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new e1(e).verify()}function a2(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(rr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function o2(n,e,t){const r=St(n);ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const a=!!(t!=null&&t.disableWarnings),o=t1(e),{host:u,port:d}=l2(e),f=d===null?"":`:${d}`,m={url:`${o}//${u}${f}/`},y=Object.freeze({host:u,port:d,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!r._canInitEmulator){ue(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ue(Qs(m,r.config.emulator)&&Qs(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,a||u2()}function t1(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function l2(n){const e=t1(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const o=a[1];return{host:o,port:LI(r.substr(o.length+1))}}else{const[o,u]=r.split(":");return{host:o,port:LI(u)}}}function LI(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function u2(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ii("not implemented")}_getIdTokenResponse(e){return ii("not implemented")}_linkToIdToken(e,t){return ii("not implemented")}_getReauthenticationResolver(e){return ii("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n1(n,e){return Nt(n,"POST","/v1/accounts:resetPassword",Pt(n,e))}async function c2(n,e){return Nt(n,"POST","/v1/accounts:update",e)}async function h2(n,e){return Nt(n,"POST","/v1/accounts:signUp",e)}async function d2(n,e){return Nt(n,"POST","/v1/accounts:update",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f2(n,e){return Ji(n,"POST","/v1/accounts:signInWithPassword",Pt(n,e))}async function bm(n,e){return Nt(n,"POST","/v1/accounts:sendOobCode",Pt(n,e))}async function p2(n,e){return bm(n,e)}async function m2(n,e){return bm(n,e)}async function g2(n,e){return bm(n,e)}async function y2(n,e){return bm(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _2(n,e){return Ji(n,"POST","/v1/accounts:signInWithEmailLink",Pt(n,e))}async function v2(n,e){return Ji(n,"POST","/v1/accounts:signInWithEmailLink",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh extends xu{constructor(e,t,r,a=null){super("password",r),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Lh(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Lh(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hs(e,t,"signInWithPassword",f2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return _2(e,{email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hs(e,r,"signUpPassword",h2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return v2(e,{idToken:t,email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $i(n,e){return Ji(n,"POST","/v1/accounts:signInWithIdp",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2="http://localhost";class hi extends xu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_n("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=t,o=Zv(t,["providerId","signInMethod"]);if(!r||!a)return null;const u=new hi(r,a);return u.idToken=o.idToken||void 0,u.accessToken=o.accessToken||void 0,u.secret=o.secret,u.nonce=o.nonce,u.pendingToken=o.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return $i(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,$i(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$i(e,t)}buildRequest(){const e={requestUri:E2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Su(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UI(n,e){return Nt(n,"POST","/v1/accounts:sendVerificationCode",Pt(n,e))}async function T2(n,e){return Ji(n,"POST","/v1/accounts:signInWithPhoneNumber",Pt(n,e))}async function b2(n,e){const t=await Ji(n,"POST","/v1/accounts:signInWithPhoneNumber",Pt(n,e));if(t.temporaryProof)throw ch(n,"account-exists-with-different-credential",t);return t}const w2={USER_NOT_FOUND:"user-not-found"};async function I2(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Ji(n,"POST","/v1/accounts:signInWithPhoneNumber",Pt(n,t),w2)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends xu{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new mo({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new mo({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return T2(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return b2(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return I2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:a}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:a,temporaryProof:o}=e;return!r&&!t&&!a&&!o?null:new mo({verificationId:t,verificationCode:r,phoneNumber:a,temporaryProof:o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A2(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function S2(n){const e=jl(uh(n)).link,t=e?jl(uh(e)).deep_link_id:null,r=jl(uh(n)).deep_link_id;return(r?jl(uh(r)).link:null)||r||t||e||n}class wm{constructor(e){var t,r,a,o,u,d;const f=jl(uh(e)),m=(t=f.apiKey)!==null&&t!==void 0?t:null,y=(r=f.oobCode)!==null&&r!==void 0?r:null,v=A2((a=f.mode)!==null&&a!==void 0?a:null);ue(m&&y&&v,"argument-error"),this.apiKey=m,this.operation=v,this.code=y,this.continueUrl=(o=f.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(u=f.languageCode)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=S2(e);try{return new wm(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(){this.providerId=la.PROVIDER_ID}static credential(e,t){return Lh._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=wm.parseLink(t);return ue(r,"argument-error"),Lh._fromEmailAndCode(e,r.code,r.tenantId)}}la.PROVIDER_ID="password";la.EMAIL_PASSWORD_SIGN_IN_METHOD="password";la.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du extends es{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Gl extends Du{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return ue("providerId"in t&&"signInMethod"in t,"argument-error"),hi._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return ue(e.idToken||e.accessToken,"argument-error"),hi._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Gl.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Gl.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:a,pendingToken:o,nonce:u,providerId:d}=e;if(!r&&!a&&!t&&!o||!d)return null;try{return new Gl(d)._credential({idToken:t,accessToken:r,nonce:u,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends Du{constructor(){super("facebook.com")}static credential(e){return hi._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jr.credential(e.oauthAccessToken)}catch{return null}}}Jr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Du{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hi._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ei.credential(t,r)}catch{return null}}}ei.GOOGLE_SIGN_IN_METHOD="google.com";ei.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Du{constructor(){super("github.com")}static credential(e){return hi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ti.credential(e.oauthAccessToken)}catch{return null}}}ti.GITHUB_SIGN_IN_METHOD="github.com";ti.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R2="http://localhost";class ru extends xu{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return $i(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,$i(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$i(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a,pendingToken:o}=t;return!r||!a||!o||r!==a?null:new ru(r,o)}static _create(e,t){return new ru(e,t)}buildRequest(){return{requestUri:R2,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2="saml.";class jp extends es{constructor(e){ue(e.startsWith(C2),"argument-error"),super(e)}static credentialFromResult(e){return jp.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return jp.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=ru.fromJSON(e);return ue(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return ru._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Du{constructor(){super("twitter.com")}static credential(e,t){return hi._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ni.credential(t,r)}catch{return null}}}ni.TWITTER_SIGN_IN_METHOD="twitter.com";ni.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r1(n,e){return Ji(n,"POST","/v1/accounts:signUp",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,a=!1){const o=await Dr._fromIdTokenResponse(e,r,a),u=BI(r);return new br({user:o,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const a=BI(r);return new br({user:e,providerId:a,_tokenResponse:r,operationType:t})}}function BI(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x2(n){var e;if(yt(n.app))return Promise.reject(un(n));const t=St(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new br({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await r1(t,{returnSecureToken:!0}),a=await br._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp extends kn{constructor(e,t,r,a){var o;super(t.code,t.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,qp.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,a){return new qp(e,t,r,a)}}function i1(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?qp._fromErrorAndOperation(n,o,e,r):o})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D2(n,e){const t=Ae(n);await Im(!0,t,e);const{providerUserInfo:r}=await PM(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),a=s1(r||[]);return t.providerData=t.providerData.filter(o=>a.has(o.providerId)),a.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function iE(n,e,t=!1){const r=await Yi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return br._forOperation(n,"link",r)}async function Im(n,e,t){await Mh(e);const r=s1(e.providerData),a=n===!1?"provider-already-linked":"no-such-provider";ue(r.has(t)===n,e.auth,a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(n,e,t=!1){const{auth:r}=n;if(yt(r.app))return Promise.reject(un(r));const a="reauthenticate";try{const o=await Yi(n,i1(r,a,e,n),t);ue(o.idToken,r,"internal-error");const u=Tm(o.idToken);ue(u,r,"internal-error");const{sub:d}=u;return ue(n.uid===d,r,"user-mismatch"),br._forOperation(n,a,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&_n(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(n,e,t=!1){if(yt(n.app))return Promise.reject(un(n));const r="signIn",a=await i1(n,r,e),o=await br._fromIdTokenResponse(n,r,a);return t||await n._updateCurrentUser(o.user),o}async function Am(n,e){return o1(St(n),e)}async function l1(n,e){const t=Ae(n);return await Im(!1,t,e.providerId),iE(t,e)}async function u1(n,e){return a1(Ae(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P2(n,e){return Ji(n,"POST","/v1/accounts:signInWithCustomToken",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N2(n,e){if(yt(n.app))return Promise.reject(un(n));const t=St(n),r=await P2(t,{token:e,returnSecureToken:!0}),a=await br._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?sE._fromServerResponse(e,t):"totpInfo"in t?aE._fromServerResponse(e,t):_n(e,"internal-error")}}class sE extends hd{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new sE(t)}}class aE extends hd{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new aE(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(n,e,t){var r;ue(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),ue(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),ue(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(ue(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(ue(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oE(n){const e=St(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function k2(n,e,t){const r=St(n),a={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Sm(r,a,t),await Hs(r,a,"getOobCode",m2,"EMAIL_PASSWORD_PROVIDER")}async function O2(n,e,t){await n1(Ae(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&oE(n),r})}async function V2(n,e){await d2(Ae(n),{oobCode:e})}async function c1(n,e){const t=Ae(n),r=await n1(t,{oobCode:e}),a=r.requestType;switch(ue(a,t,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":ue(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":ue(r.mfaInfo,t,"internal-error");default:ue(r.email,t,"internal-error")}let o=null;return r.mfaInfo&&(o=hd._fromServerResponse(St(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:a}}async function M2(n,e){const{data:t}=await c1(Ae(n),e);return t.email}async function L2(n,e,t){if(yt(n.app))return Promise.reject(un(n));const r=St(n),u=await Hs(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",r1,"EMAIL_PASSWORD_PROVIDER").catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&oE(n),f}),d=await br._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(d.user),d}function U2(n,e,t){return yt(n.app)?Promise.reject(un(n)):Am(Ae(n),la.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&oE(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B2(n,e,t){const r=St(n),a={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(u,d){ue(d.handleCodeInApp,r,"argument-error"),d&&Sm(r,u,d)}o(a,t),await Hs(r,a,"getOobCode",g2,"EMAIL_PASSWORD_PROVIDER")}function F2(n,e){const t=wm.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function z2(n,e,t){if(yt(n.app))return Promise.reject(un(n));const r=Ae(n),a=la.credentialWithLink(e,t||Vh());return ue(a._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Am(r,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j2(n,e){return Nt(n,"POST","/v1/accounts:createAuthUri",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q2(n,e){const t=tE()?Vh():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:a}=await j2(Ae(n),r);return a||[]}async function H2(n,e){const t=Ae(n),a={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Sm(t.auth,a,e);const{email:o}=await p2(t.auth,a);o!==n.email&&await n.reload()}async function G2(n,e,t){const r=Ae(n),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Sm(r.auth,o,t);const{email:u}=await y2(r.auth,o);u!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $2(n,e){return Nt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K2(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Ae(n),o={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await Yi(r,$2(r.auth,o));r.displayName=u.displayName||null,r.photoURL=u.photoUrl||null;const d=r.providerData.find(({providerId:f})=>f==="password");d&&(d.displayName=r.displayName,d.photoURL=r.photoURL),await r._updateTokensIfNecessary(u)}function Q2(n,e){const t=Ae(n);return yt(t.auth.app)?Promise.reject(un(t.auth)):h1(t,e,null)}function Y2(n,e){return h1(Ae(n),null,e)}async function h1(n,e,t){const{auth:r}=n,o={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(o.email=e),t&&(o.password=t);const u=await Yi(n,c2(r,o));await n._updateTokensIfNecessary(u,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W2(n){var e,t;if(!n)return null;const{providerId:r}=n,a=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},o=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const u=(t=(e=Tm(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(u){const d=u!=="anonymous"&&u!=="custom"?u:null;return new $l(o,d)}}if(!r)return null;switch(r){case"facebook.com":return new X2(o,a);case"github.com":return new Z2(o,a);case"google.com":return new J2(o,a);case"twitter.com":return new eL(o,a,n.screenName||null);case"custom":case"anonymous":return new $l(o,null);default:return new $l(o,r,a)}}class $l{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class d1 extends $l{constructor(e,t,r,a){super(e,t,r),this.username=a}}class X2 extends $l{constructor(e,t){super(e,"facebook.com",t)}}class Z2 extends d1{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class J2 extends $l{constructor(e,t){super(e,"google.com",t)}}class eL extends d1{constructor(e,t,r){super(e,"twitter.com",t,r)}}function tL(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:W2(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new oo("enroll",e,t)}static _fromMfaPendingCredential(e){return new oo("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return oo._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return oo._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=St(e),a=t.customData._serverResponse,o=(a.mfaInfo||[]).map(d=>hd._fromServerResponse(r,d));ue(a.mfaPendingCredential,r,"internal-error");const u=oo._fromMfaPendingCredential(a.mfaPendingCredential);return new lE(u,o,async d=>{const f=await d._process(r,u);delete a.mfaInfo,delete a.mfaPendingCredential;const m=Object.assign(Object.assign({},a),{idToken:f.idToken,refreshToken:f.refreshToken});switch(t.operationType){case"signIn":const y=await br._fromIdTokenResponse(r,t.operationType,m);return await r._updateCurrentUser(y.user),y;case"reauthenticate":return ue(t.user,r,"internal-error"),br._forOperation(t.user,t.operationType,m);default:_n(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function nL(n,e){var t;const r=Ae(n),a=e;return ue(e.customData.operationType,r,"argument-error"),ue((t=a.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),lE._fromError(r,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(n,e){return Nt(n,"POST","/v2/accounts/mfaEnrollment:start",Pt(n,e))}function rL(n,e){return Nt(n,"POST","/v2/accounts/mfaEnrollment:finalize",Pt(n,e))}function iL(n,e){return Nt(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Pt(n,e))}class uE{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>hd._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new uE(e)}async getSession(){return oo._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,a=await this.getSession(),o=await Yi(this.user,r._process(this.user.auth,a,t));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const a=await Yi(this.user,iL(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==t),await this.user._updateTokensIfNecessary(a),await this.user.reload()}catch(a){throw a}}}const w_=new WeakMap;function sL(n){const e=Ae(n);return w_.has(e)||w_.set(e,uE._fromUser(e)),w_.get(e)}const Hp="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Hp,"1"),this.storage.removeItem(Hp),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL=1e3,oL=10;class p1 extends f1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=XR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),a=this.localCache[t];r!==a&&e(t,a,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},o=this.storage.getItem(r);zM()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,oL):a()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},aL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}p1.type="LOCAL";const cE=p1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1 extends f1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}m1.type="SESSION";const yo=m1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lL(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const r=new Rm(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:a,data:o}=t.data,u=this.handlersMap[a];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const d=Array.from(u).map(async m=>m(t.origin,o)),f=await lL(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rm.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let o,u;return new Promise((d,f)=>{const m=dd("",20);a.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:a,onMessage(v){const b=v;if(b.data.eventId===m)switch(b.data.status){case"ack":clearTimeout(y),o=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),d(b.data.response);break;default:clearTimeout(y),clearTimeout(o),f(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return window}function cL(n){Ht().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(){return typeof Ht().WorkerGlobalScope<"u"&&typeof Ht().importScripts=="function"}async function hL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dL(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function fL(){return hE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1="firebaseLocalStorageDb",pL=1,Gp="firebaseLocalStorage",y1="fbase_key";class fd{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Cm(n,e){return n.transaction([Gp],e?"readwrite":"readonly").objectStore(Gp)}function mL(){const n=indexedDB.deleteDatabase(g1);return new fd(n).toPromise()}function W_(){const n=indexedDB.open(g1,pL);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Gp,{keyPath:y1})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Gp)?e(r):(r.close(),await mL(),e(await W_()))})})}async function zI(n,e,t){const r=Cm(n,!0).put({[y1]:e,value:t});return new fd(r).toPromise()}async function gL(n,e){const t=Cm(n,!1).get(e),r=await new fd(t).toPromise();return r===void 0?null:r.value}function jI(n,e){const t=Cm(n,!0).delete(e);return new fd(t).toPromise()}const yL=800,_L=3;class _1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await W_(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>_L)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rm._getInstance(fL()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await hL(),!this.activeServiceWorker)return;this.sender=new uL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await W_();return await zI(e,Hp,"1"),await jI(e,Hp),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>zI(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>gL(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>jI(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const o=Cm(a,!1).getAll();return new fd(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:a,value:o}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(o)&&(this.notifyListeners(a,o),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_1.type="LOCAL";const Uh=_1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(n,e){return Nt(n,"POST","/v2/accounts/mfaSignIn:start",Pt(n,e))}function vL(n,e){return Nt(n,"POST","/v2/accounts/mfaSignIn:finalize",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=JR("rcb"),EL=new od(3e4,6e4);class TL{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ht().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return ue(bL(t),e,"argument-error"),this.shouldResolveImmediately(t)&&PI(Ht().grecaptcha)?Promise.resolve(Ht().grecaptcha):new Promise((r,a)=>{const o=Ht().setTimeout(()=>{a(Xt(e,"network-request-failed"))},EL.get());Ht()[I_]=()=>{Ht().clearTimeout(o),delete Ht()[I_];const d=Ht().grecaptcha;if(!d||!PI(d)){a(Xt(e,"internal-error"));return}const f=d.render;d.render=(m,y)=>{const v=f(m,y);return this.counter++,v},this.hostLanguage=t,r(d)};const u=`${QM()}?${Su({onload:I_,render:"explicit",hl:t})}`;rE(u).catch(()=>{clearTimeout(o),a(Xt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Ht().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function bL(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class wL{async load(e){return new JM(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="recaptcha",IL={theme:"light",type:"image"};let AL=class{constructor(e,t,r=Object.assign({},IL)){this.parameters=r,this.type=vh,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=St(e),this.isInvisible=this.parameters.size==="invisible",ue(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof t=="string"?document.getElementById(t):t;ue(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new wL:new TL,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(a=>{const o=u=>{u&&(this.tokenChangeListeners.delete(o),a(u))};this.tokenChangeListeners.add(o),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){ue(!this.parameters.sitekey,this.auth,"argument-error"),ue(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),ue(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=Ht()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){ue(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){ue(tE()&&!hE(),this.auth,"internal-error"),await SL(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await xM(this.auth);ue(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return ue(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function SL(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=mo._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function RL(n,e,t){if(yt(n.app))return Promise.reject(un(n));const r=St(n),a=await xm(r,e,Ae(t));return new dE(a,o=>Am(r,o))}async function CL(n,e,t){const r=Ae(n);await Im(!1,r,"phone");const a=await xm(r.auth,e,Ae(t));return new dE(a,o=>l1(r,o))}async function xL(n,e,t){const r=Ae(n);if(yt(r.auth.app))return Promise.reject(un(r.auth));const a=await xm(r.auth,e,Ae(t));return new dE(a,o=>u1(r,o))}async function xm(n,e,t){var r;if(!n._getRecaptchaConfig())try{await s2(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let a;if(typeof e=="string"?a={phoneNumber:e}:a=e,"session"in a){const o=a.session;if("phoneNumber"in a){ue(o.type==="enroll",n,"internal-error");const u={idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Hs(n,u,"mfaSmsEnrollment",async(y,v)=>{if(v.phoneEnrollmentInfo.captchaResponse===_h){ue((t==null?void 0:t.type)===vh,y,"argument-error");const b=await A_(y,v,t);return FI(y,b)}return FI(y,v)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).phoneSessionInfo.sessionInfo}else{ue(o.type==="signin",n,"internal-error");const u=((r=a.multiFactorHint)===null||r===void 0?void 0:r.uid)||a.multiFactorUid;ue(u,n,"missing-multi-factor-info");const d={mfaPendingCredential:o.credential,mfaEnrollmentId:u,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Hs(n,d,"mfaSmsSignIn",async(v,b)=>{if(b.phoneSignInInfo.captchaResponse===_h){ue((t==null?void 0:t.type)===vh,v,"argument-error");const A=await A_(v,b,t);return qI(v,A)}return qI(v,b)},"PHONE_PROVIDER").catch(v=>Promise.reject(v))).phoneResponseInfo.sessionInfo}}else{const o={phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Hs(n,o,"sendVerificationCode",async(m,y)=>{if(y.captchaResponse===_h){ue((t==null?void 0:t.type)===vh,m,"argument-error");const v=await A_(m,y,t);return UI(m,v)}return UI(m,y)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).sessionInfo}}finally{t==null||t._reset()}}async function DL(n,e){const t=Ae(n);if(yt(t.auth.app))return Promise.reject(un(t.auth));await iE(t,e)}async function A_(n,e,t){ue(t.type===vh,n,"argument-error");const r=await t.verify();ue(typeof r=="string",n,"argument-error");const a=Object.assign({},e);if("phoneEnrollmentInfo"in a){const o=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.captchaResponse,d=a.phoneEnrollmentInfo.clientType,f=a.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:o,recaptchaToken:r,captchaResponse:u,clientType:d,recaptchaVersion:f}}),a}else if("phoneSignInInfo"in a){const o=a.phoneSignInInfo.captchaResponse,u=a.phoneSignInInfo.clientType,d=a.phoneSignInInfo.recaptchaVersion;return Object.assign(a,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:o,clientType:u,recaptchaVersion:d}}),a}else return Object.assign(a,{recaptchaToken:r}),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _o=class vp{constructor(e){this.providerId=vp.PROVIDER_ID,this.auth=St(e)}verifyPhoneNumber(e,t){return xm(this.auth,e,Ae(t))}static credential(e,t){return mo._fromVerification(e,t)}static credentialFromResult(e){const t=e;return vp.credentialFromTaggedObject(t)}static credentialFromError(e){return vp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?mo._fromTokenResponse(t,r):null}};_o.PROVIDER_ID="phone";_o.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(n,e){return e?rr(e):(ue(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE extends xu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $i(e,this._buildIdpRequest())}_linkToIdToken(e,t){return $i(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return $i(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function PL(n){return o1(n.auth,new fE(n),n.bypassAuthState)}function NL(n){const{auth:e,user:t}=n;return ue(t,e,"internal-error"),a1(t,new fE(n),n.bypassAuthState)}async function kL(n){const{auth:e,user:t}=n;return ue(t,e,"internal-error"),iE(t,new fE(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e,t,r,a,o=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:a,tenantId:o,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PL;case"linkViaPopup":case"linkViaRedirect":return kL;case"reauthViaPopup":case"reauthViaRedirect":return NL;default:_n(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OL=new od(2e3,1e4);async function VL(n,e,t){if(yt(n.app))return Promise.reject(Xt(n,"operation-not-supported-in-this-environment"));const r=St(n);Cu(n,e,es);const a=Po(r,t);return new qi(r,"signInViaPopup",e,a).executeNotNull()}async function ML(n,e,t){const r=Ae(n);if(yt(r.auth.app))return Promise.reject(Xt(r.auth,"operation-not-supported-in-this-environment"));Cu(r.auth,e,es);const a=Po(r.auth,t);return new qi(r.auth,"reauthViaPopup",e,a,r).executeNotNull()}async function LL(n,e,t){const r=Ae(n);Cu(r.auth,e,es);const a=Po(r.auth,t);return new qi(r.auth,"linkViaPopup",e,a,r).executeNotNull()}class qi extends v1{constructor(e,t,r,a,o){super(e,t,a,o),this.provider=r,this.authWindow=null,this.pollId=null,qi.currentPopupAction&&qi.currentPopupAction.cancel(),qi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=dd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OL.get())};e()}}qi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UL="pendingRedirect",Eh=new Map;class BL extends v1{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Eh.get(this.auth._key());if(!e){try{const r=await FL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Eh.set(this.auth._key(),e)}return this.bypassAuthState||Eh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FL(n,e){const t=T1(e),r=E1(n);if(!await r._isAvailable())return!1;const a=await r._get(t)==="true";return await r._remove(t),a}async function pE(n,e){return E1(n)._set(T1(e),"true")}function zL(){Eh.clear()}function mE(n,e){Eh.set(n._key(),e)}function E1(n){return rr(n._redirectPersistence)}function T1(n){return po(UL,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jL(n,e,t){return qL(n,e,t)}async function qL(n,e,t){if(yt(n.app))return Promise.reject(un(n));const r=St(n);Cu(n,e,es),await r._initializationPromise;const a=Po(r,t);return await pE(a,r),a._openRedirect(r,e,"signInViaRedirect")}function HL(n,e,t){return GL(n,e,t)}async function GL(n,e,t){const r=Ae(n);if(Cu(r.auth,e,es),yt(r.auth.app))return Promise.reject(un(r.auth));await r.auth._initializationPromise;const a=Po(r.auth,t);await pE(a,r.auth);const o=await b1(r);return a._openRedirect(r.auth,e,"reauthViaRedirect",o)}function $L(n,e,t){return KL(n,e,t)}async function KL(n,e,t){const r=Ae(n);Cu(r.auth,e,es),await r.auth._initializationPromise;const a=Po(r.auth,t);await Im(!1,r,e.providerId),await pE(a,r.auth);const o=await b1(r);return a._openRedirect(r.auth,e,"linkViaRedirect",o)}async function QL(n,e){return await St(n)._initializationPromise,Dm(n,e,!1)}async function Dm(n,e,t=!1){if(yt(n.app))return Promise.reject(un(n));const r=St(n),a=Po(r,e),u=await new BL(r,a,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}async function b1(n){const e=dd(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YL=10*60*1e3;class w1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WL(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!I1(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Xt(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YL&&this.cachedEventUids.clear(),this.cachedEventUids.has(HI(e))}saveEventToCache(e){this.cachedEventUids.add(HI(e)),this.lastProcessedEventTime=Date.now()}}function HI(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function I1({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WL(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return I1(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A1(n,e={}){return Nt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZL=/^https?/;async function JL(n){if(n.config.emulator)return;const{authorizedDomains:e}=await A1(n);for(const t of e)try{if(eU(t))return}catch{}_n(n,"unauthorized-domain")}function eU(n){const e=Vh(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!ZL.test(t))return!1;if(XL.test(n))return r===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tU=new od(3e4,6e4);function GI(){const n=Ht().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function nU(n){return new Promise((e,t)=>{var r,a,o;function u(){GI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{GI(),t(Xt(n,"network-request-failed"))},timeout:tU.get()})}if(!((a=(r=Ht().gapi)===null||r===void 0?void 0:r.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((o=Ht().gapi)===null||o===void 0)&&o.load)u();else{const d=JR("iframefcb");return Ht()[d]=()=>{gapi.load?u():t(Xt(n,"network-request-failed"))},rE(`${WM()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw Ep=null,e})}let Ep=null;function rU(n){return Ep=Ep||nU(n),Ep}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iU=new od(5e3,15e3),sU="__/auth/iframe",aU="emulator/auth/iframe",oU={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lU=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uU(n){const e=n.config;ue(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?nE(e,aU):`https://${n.config.authDomain}/${sU}`,r={apiKey:e.apiKey,appName:n.name,v:oa},a=lU.get(n.config.apiHost);a&&(r.eid=a);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Su(r).slice(1)}`}async function cU(n){const e=await rU(n),t=Ht().gapi;return ue(t,n,"internal-error"),e.open({where:document.body,url:uU(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oU,dontclear:!0},r=>new Promise(async(a,o)=>{await r.restyle({setHideOnLeave:!1});const u=Xt(n,"network-request-failed"),d=Ht().setTimeout(()=>{o(u)},iU.get());function f(){Ht().clearTimeout(d),a(r)}r.ping(f).then(f,()=>{o(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hU={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dU=500,fU=600,pU="_blank",mU="http://localhost";class $I{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gU(n,e,t,r=dU,a=fU){const o=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},hU),{width:r.toString(),height:a.toString(),top:o,left:u}),m=At().toLowerCase();t&&(d=KR(m)?pU:t),GR(m)&&(e=e||mU,f.scrollbars="yes");const y=Object.entries(f).reduce((b,[A,x])=>`${b}${A}=${x},`,"");if(FM(m)&&d!=="_self")return yU(e||"",d),new $I(null);const v=window.open(e||"",d,y);ue(v,n,"popup-blocked");try{v.focus()}catch{}return new $I(v)}function yU(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _U="__/auth/handler",vU="emulator/auth/handler",EU=encodeURIComponent("fac");async function X_(n,e,t,r,a,o){ue(n.config.authDomain,n,"auth-domain-config-required"),ue(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:oa,eventId:a};if(e instanceof es){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",KO(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,v]of Object.entries(o||{}))u[y]=v}if(e instanceof Du){const y=e.getScopes().filter(v=>v!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const f=await n._getAppCheckToken(),m=f?`#${EU}=${encodeURIComponent(f)}`:"";return`${TU(n)}?${Su(d).slice(1)}${m}`}function TU({config:n}){return n.emulator?nE(n,vU):`https://${n.authDomain}/${_U}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="webStorageSupport";class bU{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yo,this._completeRedirectFn=Dm,this._overrideRedirectResult=mE}async _openPopup(e,t,r,a){var o;kr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const u=await X_(e,t,r,Vh(),a);return gU(e,u,dd())}async _openRedirect(e,t,r,a){await this._originValidation(e);const o=await X_(e,t,r,Vh(),a);return cL(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:o}=this.eventManagers[t];return a?Promise.resolve(a):(kr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await cU(e),r=new w1(e);return t.register("authEvent",a=>(ue(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:r.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(S_,{type:S_},a=>{var o;const u=(o=a==null?void 0:a[0])===null||o===void 0?void 0:o[S_];u!==void 0&&t(!!u),_n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=JL(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return XR()||$R()||ud()}}const wU=bU;class IU{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return ii("unexpected MultiFactorSessionType")}}}class gE extends IU{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new gE(e)}_finalizeEnroll(e,t,r){return rL(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return vL(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class S1{constructor(){}static assertion(e){return gE._fromCredential(e)}}S1.FACTOR_ID="phone";var KI="@firebase/auth",QI="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AU{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SU(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function RU(n){Xs(new ci("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;ue(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ZR(n)},m=new $M(r,a,o,f);return a2(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Xs(new ci("auth-internal",e=>{const t=St(e.getProvider("auth").getImmediate());return(r=>new AU(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nr(KI,QI,SU(n)),Nr(KI,QI,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CU=5*60;LO("authIdTokenMaxAge");function xU(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}KM({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=a=>{const o=Xt("internal-error");o.customData=a,t(o)},r.type="text/javascript",r.charset="UTF-8",xU().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});RU("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DU=2e3;async function PU(n,e,t){var r;const{BuildInfo:a}=vo();kr(e.sessionId,"AuthEvent did not contain a session ID");const o=await MU(e.sessionId),u={};return ud()?u.ibi=a.packageName:ld()?u.apn=a.packageName:_n(n,"operation-not-supported-in-this-environment"),a.displayName&&(u.appDisplayName=a.displayName),u.sessionId=o,X_(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,u)}async function NU(n){const{BuildInfo:e}=vo(),t={};ud()?t.iosBundleId=e.packageName:ld()?t.androidPackageName=e.packageName:_n(n,"operation-not-supported-in-this-environment"),await A1(n,t)}function kU(n){const{cordova:e}=vo();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let a=null;r?e.plugins.browsertab.openUrl(n):a=e.InAppBrowser.open(n,BM()?"_blank":"_system","location=yes"),t(a)})})}async function OU(n,e,t){const{cordova:r}=vo();let a=()=>{};try{await new Promise((o,u)=>{let d=null;function f(){var v;o();const b=(v=r.plugins.browsertab)===null||v===void 0?void 0:v.close;typeof b=="function"&&b(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function m(){d||(d=window.setTimeout(()=>{u(Xt(n,"redirect-cancelled-by-user"))},DU))}function y(){(document==null?void 0:document.visibilityState)==="visible"&&m()}e.addPassiveListener(f),document.addEventListener("resume",m,!1),ld()&&document.addEventListener("visibilitychange",y,!1),a=()=>{e.removePassiveListener(f),document.removeEventListener("resume",m,!1),document.removeEventListener("visibilitychange",y,!1),d&&window.clearTimeout(d)}})}finally{a()}}function VU(n){var e,t,r,a,o,u,d,f,m,y;const v=vo();ue(typeof((e=v==null?void 0:v.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),ue(typeof((t=v==null?void 0:v.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),ue(typeof((o=(a=(r=v==null?void 0:v.cordova)===null||r===void 0?void 0:r.plugins)===null||a===void 0?void 0:a.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ue(typeof((f=(d=(u=v==null?void 0:v.cordova)===null||u===void 0?void 0:u.plugins)===null||d===void 0?void 0:d.browsertab)===null||f===void 0?void 0:f.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ue(typeof((y=(m=v==null?void 0:v.cordova)===null||m===void 0?void 0:m.InAppBrowser)===null||y===void 0?void 0:y.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function MU(n){const e=LU(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function LU(n){if(kr(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UU=20;class BU extends w1{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function FU(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:qU(),postBody:null,tenantId:n.tenantId,error:Xt(n,"no-auth-event")}}function zU(n,e){return Z_()._set(J_(n),e)}async function YI(n){const e=await Z_()._get(J_(n));return e&&await Z_()._remove(J_(n)),e}function jU(n,e){var t,r;const a=GU(e);if(a.includes("/__/auth/callback")){const o=Tp(a),u=o.firebaseError?HU(decodeURIComponent(o.firebaseError)):null,d=(r=(t=u==null?void 0:u.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],f=d?Xt(d):null;return f?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:f,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:a,postBody:null}}return null}function qU(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<UU;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function Z_(){return rr(cE)}function J_(n){return po("authEvent",n.config.apiKey,n.name)}function HU(n){try{return JSON.parse(n)}catch{return null}}function GU(n){const e=Tp(n),t=e.link?decodeURIComponent(e.link):void 0,r=Tp(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Tp(a).link||a||r||t||n}function Tp(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return jl(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $U=500;class KU{constructor(){this._redirectPersistence=yo,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Dm,this._overrideRedirectResult=mE}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new BU(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){_n(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,a){VU(e);const o=await this._initialize(e);await o.initialized(),o.resetRedirect(),zL(),await this._originValidation(e);const u=FU(e,r,a);await zU(e,u);const d=await PU(e,u,t),f=await kU(d);return OU(e,o,f)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=NU(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:a,BuildInfo:o}=vo(),u=setTimeout(async()=>{await YI(e),t.onEvent(WI())},$U),d=async y=>{clearTimeout(u);const v=await YI(e);let b=null;v&&(y!=null&&y.url)&&(b=jU(v,y.url)),t.onEvent(b||WI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,d);const f=a,m=`${o.packageName.toLowerCase()}://`;vo().handleOpenURL=async y=>{if(y.toLowerCase().startsWith(m)&&d({url:y}),typeof f=="function")try{f(y)}catch(v){console.error(v)}}}}const QU=KU;function WI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Xt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YU(n,e){St(n)._logFramework(e)}var WU="@firebase/auth-compat",XU="0.5.20";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZU=1e3;function Th(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function JU(){return Th()==="http:"||Th()==="https:"}function R1(n=At()){return!!((Th()==="file:"||Th()==="ionic:"||Th()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function e4(){return Kv()||$v()}function t4(){return ER()&&(document==null?void 0:document.documentMode)===11}function n4(n=At()){return/Edge\/\d+/.test(n)}function r4(n=At()){return t4()||n4(n)}function C1(){try{const n=self.localStorage,e=dd();if(n)return n.setItem(e,"1"),n.removeItem(e),r4()?Nh():!0}catch{return yE()&&Nh()}return!1}function yE(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function R_(){return(JU()||vR()||R1())&&!e4()&&C1()&&!yE()}function x1(){return R1()&&typeof document<"u"}async function i4(){return x1()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},ZU);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function s4(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr={LOCAL:"local",NONE:"none",SESSION:"session"},Jc=ue,D1="persistence";function a4(n,e){if(Jc(Object.values(nr).includes(e),n,"invalid-persistence-type"),Kv()){Jc(e!==nr.SESSION,n,"unsupported-persistence-type");return}if($v()){Jc(e===nr.NONE,n,"unsupported-persistence-type");return}if(yE()){Jc(e===nr.NONE||e===nr.LOCAL&&Nh(),n,"unsupported-persistence-type");return}Jc(e===nr.NONE||C1(),n,"unsupported-persistence-type")}async function ev(n){await n._initializationPromise;const e=P1(),t=po(D1,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistenceType())}function o4(n,e){const t=P1();if(!t)return[];const r=po(D1,n,e);switch(t.getItem(r)){case nr.NONE:return[nu];case nr.LOCAL:return[Uh,yo];case nr.SESSION:return[yo];default:return[]}}function P1(){var n;try{return((n=s4())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l4=ue;class Fs{constructor(){this.browserResolver=rr(wU),this.cordovaResolver=rr(QU),this.underlyingResolver=null,this._redirectPersistence=yo,this._completeRedirectFn=Dm,this._overrideRedirectResult=mE}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,a)}async _openRedirect(e,t,r,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,a)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return x1()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return l4(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await i4();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(n){return n.unwrap()}function u4(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c4(n){return k1(n)}function h4(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const a=e;a.resolver=new d4(n,nL(n,e))}else if(r){const a=k1(e),o=e;a&&(o.credential=a,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function k1(n){const{_tokenResponse:e}=n instanceof kn?n.customData:n;if(!e)return null;if(!(n instanceof kn)&&"temporaryProof"in e&&"phoneNumber"in e)return _o.credentialFromResult(n);const t=e.providerId;if(!t||t===Xc.PASSWORD)return null;let r;switch(t){case Xc.GOOGLE:r=ei;break;case Xc.FACEBOOK:r=Jr;break;case Xc.GITHUB:r=ti;break;case Xc.TWITTER:r=ni;break;default:const{oauthIdToken:a,oauthAccessToken:o,oauthTokenSecret:u,pendingToken:d,nonce:f}=e;return!o&&!u&&!a&&!d?null:d?t.startsWith("saml.")?ru._create(t,d):hi._fromParams({providerId:t,signInMethod:t,pendingToken:d,idToken:a,accessToken:o}):new Gl(t).credential({idToken:a,accessToken:o,rawNonce:f})}return n instanceof kn?r.credentialFromError(n):r.credentialFromResult(n)}function Fn(n,e){return e.catch(t=>{throw t instanceof kn&&h4(n,t),t}).then(t=>{const r=t.operationType,a=t.user;return{operationType:r,credential:c4(t),additionalUserInfo:tL(t),user:Pm.getOrCreate(a)}})}async function tv(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Fn(n,t.confirm(r))}}class d4{constructor(e,t){this.resolver=t,this.auth=u4(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Fn(N1(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pm=class hh{constructor(e){this._delegate=e,this.multiFactor=sL(e)}static getOrCreate(e){return hh.USER_MAP.has(e)||hh.USER_MAP.set(e,new hh(e)),hh.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Fn(this.auth,l1(this._delegate,e))}async linkWithPhoneNumber(e,t){return tv(this.auth,CL(this._delegate,e,t))}async linkWithPopup(e){return Fn(this.auth,LL(this._delegate,e,Fs))}async linkWithRedirect(e){return await ev(St(this.auth)),$L(this._delegate,e,Fs)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Fn(this.auth,u1(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return tv(this.auth,xL(this._delegate,e,t))}reauthenticateWithPopup(e){return Fn(this.auth,ML(this._delegate,e,Fs))}async reauthenticateWithRedirect(e){return await ev(St(this.auth)),HL(this._delegate,e,Fs)}sendEmailVerification(e){return H2(this._delegate,e)}async unlink(e){return await D2(this._delegate,e),this}updateEmail(e){return Q2(this._delegate,e)}updatePassword(e){return Y2(this._delegate,e)}updatePhoneNumber(e){return DL(this._delegate,e)}updateProfile(e){return K2(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return G2(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Pm.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=ue;class nv{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;eh(r,"invalid-api-key",{appName:e.name}),eh(r,"invalid-api-key",{appName:e.name});const a=typeof window<"u"?Fs:void 0;this._delegate=t.initialize({options:{persistence:f4(r,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(vM),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Pm.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){o2(this._delegate,e,t)}applyActionCode(e){return V2(this._delegate,e)}checkActionCode(e){return c1(this._delegate,e)}confirmPasswordReset(e,t){return O2(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Fn(this._delegate,L2(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return q2(this._delegate,e)}isSignInWithEmailLink(e){return F2(this._delegate,e)}async getRedirectResult(){eh(R_(),this._delegate,"operation-not-supported-in-this-environment");const e=await QL(this._delegate,Fs);return e?Fn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){YU(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:a,error:o,complete:u}=XI(e,t,r);return this._delegate.onAuthStateChanged(a,o,u)}onIdTokenChanged(e,t,r){const{next:a,error:o,complete:u}=XI(e,t,r);return this._delegate.onIdTokenChanged(a,o,u)}sendSignInLinkToEmail(e,t){return B2(this._delegate,e,t)}sendPasswordResetEmail(e,t){return k2(this._delegate,e,t||void 0)}async setPersistence(e){a4(this._delegate,e);let t;switch(e){case nr.SESSION:t=yo;break;case nr.LOCAL:t=await rr(Uh)._isAvailable()?Uh:cE;break;case nr.NONE:t=nu;break;default:return _n("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Fn(this._delegate,x2(this._delegate))}signInWithCredential(e){return Fn(this._delegate,Am(this._delegate,e))}signInWithCustomToken(e){return Fn(this._delegate,N2(this._delegate,e))}signInWithEmailAndPassword(e,t){return Fn(this._delegate,U2(this._delegate,e,t))}signInWithEmailLink(e,t){return Fn(this._delegate,z2(this._delegate,e,t))}signInWithPhoneNumber(e,t){return tv(this._delegate,RL(this._delegate,e,t))}async signInWithPopup(e){return eh(R_(),this._delegate,"operation-not-supported-in-this-environment"),Fn(this._delegate,VL(this._delegate,e,Fs))}async signInWithRedirect(e){return eh(R_(),this._delegate,"operation-not-supported-in-this-environment"),await ev(this._delegate),jL(this._delegate,e,Fs)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return M2(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}nv.Persistence=nr;function XI(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const a=r;return{next:u=>a(u&&Pm.getOrCreate(u)),error:e,complete:t}}function f4(n,e){const t=o4(n,e);if(typeof self<"u"&&!t.includes(Uh)&&t.push(Uh),typeof window<"u")for(const r of[cE,yo])t.includes(r)||t.push(r);return t.includes(nu)||t.push(nu),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{static credential(e,t){return _o.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new _o(N1(Ru.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}_E.PHONE_SIGN_IN_METHOD=_o.PHONE_SIGN_IN_METHOD;_E.PROVIDER_ID=_o.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p4=ue;class m4{constructor(e,t,r=Ru.app()){var a;p4((a=r.options)===null||a===void 0?void 0:a.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new AL(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g4="auth-compat";function y4(n){n.INTERNAL.registerComponent(new ci(g4,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new nv(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:xl.EMAIL_SIGNIN,PASSWORD_RESET:xl.PASSWORD_RESET,RECOVER_EMAIL:xl.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:xl.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:xl.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:xl.VERIFY_EMAIL}},EmailAuthProvider:la,FacebookAuthProvider:Jr,GithubAuthProvider:ti,GoogleAuthProvider:ei,OAuthProvider:Gl,SAMLAuthProvider:jp,PhoneAuthProvider:_E,PhoneMultiFactorGenerator:S1,RecaptchaVerifier:m4,TwitterAuthProvider:ni,Auth:nv,AuthCredential:xu,Error:kn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(WU,XU)}y4(Ru);var ZI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gs,O1;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,S){function C(){}C.prototype=S.prototype,R.D=S.prototype,R.prototype=new C,R.prototype.constructor=R,R.C=function(O,N,L){for(var P=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)P[ft-2]=arguments[ft];return S.prototype[N].apply(O,P)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(R,S,C){C||(C=0);var O=Array(16);if(typeof S=="string")for(var N=0;16>N;++N)O[N]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(N=0;16>N;++N)O[N]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=R.g[0],C=R.g[1],N=R.g[2];var L=R.g[3],P=S+(L^C&(N^L))+O[0]+3614090360&4294967295;S=C+(P<<7&4294967295|P>>>25),P=L+(N^S&(C^N))+O[1]+3905402710&4294967295,L=S+(P<<12&4294967295|P>>>20),P=N+(C^L&(S^C))+O[2]+606105819&4294967295,N=L+(P<<17&4294967295|P>>>15),P=C+(S^N&(L^S))+O[3]+3250441966&4294967295,C=N+(P<<22&4294967295|P>>>10),P=S+(L^C&(N^L))+O[4]+4118548399&4294967295,S=C+(P<<7&4294967295|P>>>25),P=L+(N^S&(C^N))+O[5]+1200080426&4294967295,L=S+(P<<12&4294967295|P>>>20),P=N+(C^L&(S^C))+O[6]+2821735955&4294967295,N=L+(P<<17&4294967295|P>>>15),P=C+(S^N&(L^S))+O[7]+4249261313&4294967295,C=N+(P<<22&4294967295|P>>>10),P=S+(L^C&(N^L))+O[8]+1770035416&4294967295,S=C+(P<<7&4294967295|P>>>25),P=L+(N^S&(C^N))+O[9]+2336552879&4294967295,L=S+(P<<12&4294967295|P>>>20),P=N+(C^L&(S^C))+O[10]+4294925233&4294967295,N=L+(P<<17&4294967295|P>>>15),P=C+(S^N&(L^S))+O[11]+2304563134&4294967295,C=N+(P<<22&4294967295|P>>>10),P=S+(L^C&(N^L))+O[12]+1804603682&4294967295,S=C+(P<<7&4294967295|P>>>25),P=L+(N^S&(C^N))+O[13]+4254626195&4294967295,L=S+(P<<12&4294967295|P>>>20),P=N+(C^L&(S^C))+O[14]+2792965006&4294967295,N=L+(P<<17&4294967295|P>>>15),P=C+(S^N&(L^S))+O[15]+1236535329&4294967295,C=N+(P<<22&4294967295|P>>>10),P=S+(N^L&(C^N))+O[1]+4129170786&4294967295,S=C+(P<<5&4294967295|P>>>27),P=L+(C^N&(S^C))+O[6]+3225465664&4294967295,L=S+(P<<9&4294967295|P>>>23),P=N+(S^C&(L^S))+O[11]+643717713&4294967295,N=L+(P<<14&4294967295|P>>>18),P=C+(L^S&(N^L))+O[0]+3921069994&4294967295,C=N+(P<<20&4294967295|P>>>12),P=S+(N^L&(C^N))+O[5]+3593408605&4294967295,S=C+(P<<5&4294967295|P>>>27),P=L+(C^N&(S^C))+O[10]+38016083&4294967295,L=S+(P<<9&4294967295|P>>>23),P=N+(S^C&(L^S))+O[15]+3634488961&4294967295,N=L+(P<<14&4294967295|P>>>18),P=C+(L^S&(N^L))+O[4]+3889429448&4294967295,C=N+(P<<20&4294967295|P>>>12),P=S+(N^L&(C^N))+O[9]+568446438&4294967295,S=C+(P<<5&4294967295|P>>>27),P=L+(C^N&(S^C))+O[14]+3275163606&4294967295,L=S+(P<<9&4294967295|P>>>23),P=N+(S^C&(L^S))+O[3]+4107603335&4294967295,N=L+(P<<14&4294967295|P>>>18),P=C+(L^S&(N^L))+O[8]+1163531501&4294967295,C=N+(P<<20&4294967295|P>>>12),P=S+(N^L&(C^N))+O[13]+2850285829&4294967295,S=C+(P<<5&4294967295|P>>>27),P=L+(C^N&(S^C))+O[2]+4243563512&4294967295,L=S+(P<<9&4294967295|P>>>23),P=N+(S^C&(L^S))+O[7]+1735328473&4294967295,N=L+(P<<14&4294967295|P>>>18),P=C+(L^S&(N^L))+O[12]+2368359562&4294967295,C=N+(P<<20&4294967295|P>>>12),P=S+(C^N^L)+O[5]+4294588738&4294967295,S=C+(P<<4&4294967295|P>>>28),P=L+(S^C^N)+O[8]+2272392833&4294967295,L=S+(P<<11&4294967295|P>>>21),P=N+(L^S^C)+O[11]+1839030562&4294967295,N=L+(P<<16&4294967295|P>>>16),P=C+(N^L^S)+O[14]+4259657740&4294967295,C=N+(P<<23&4294967295|P>>>9),P=S+(C^N^L)+O[1]+2763975236&4294967295,S=C+(P<<4&4294967295|P>>>28),P=L+(S^C^N)+O[4]+1272893353&4294967295,L=S+(P<<11&4294967295|P>>>21),P=N+(L^S^C)+O[7]+4139469664&4294967295,N=L+(P<<16&4294967295|P>>>16),P=C+(N^L^S)+O[10]+3200236656&4294967295,C=N+(P<<23&4294967295|P>>>9),P=S+(C^N^L)+O[13]+681279174&4294967295,S=C+(P<<4&4294967295|P>>>28),P=L+(S^C^N)+O[0]+3936430074&4294967295,L=S+(P<<11&4294967295|P>>>21),P=N+(L^S^C)+O[3]+3572445317&4294967295,N=L+(P<<16&4294967295|P>>>16),P=C+(N^L^S)+O[6]+76029189&4294967295,C=N+(P<<23&4294967295|P>>>9),P=S+(C^N^L)+O[9]+3654602809&4294967295,S=C+(P<<4&4294967295|P>>>28),P=L+(S^C^N)+O[12]+3873151461&4294967295,L=S+(P<<11&4294967295|P>>>21),P=N+(L^S^C)+O[15]+530742520&4294967295,N=L+(P<<16&4294967295|P>>>16),P=C+(N^L^S)+O[2]+3299628645&4294967295,C=N+(P<<23&4294967295|P>>>9),P=S+(N^(C|~L))+O[0]+4096336452&4294967295,S=C+(P<<6&4294967295|P>>>26),P=L+(C^(S|~N))+O[7]+1126891415&4294967295,L=S+(P<<10&4294967295|P>>>22),P=N+(S^(L|~C))+O[14]+2878612391&4294967295,N=L+(P<<15&4294967295|P>>>17),P=C+(L^(N|~S))+O[5]+4237533241&4294967295,C=N+(P<<21&4294967295|P>>>11),P=S+(N^(C|~L))+O[12]+1700485571&4294967295,S=C+(P<<6&4294967295|P>>>26),P=L+(C^(S|~N))+O[3]+2399980690&4294967295,L=S+(P<<10&4294967295|P>>>22),P=N+(S^(L|~C))+O[10]+4293915773&4294967295,N=L+(P<<15&4294967295|P>>>17),P=C+(L^(N|~S))+O[1]+2240044497&4294967295,C=N+(P<<21&4294967295|P>>>11),P=S+(N^(C|~L))+O[8]+1873313359&4294967295,S=C+(P<<6&4294967295|P>>>26),P=L+(C^(S|~N))+O[15]+4264355552&4294967295,L=S+(P<<10&4294967295|P>>>22),P=N+(S^(L|~C))+O[6]+2734768916&4294967295,N=L+(P<<15&4294967295|P>>>17),P=C+(L^(N|~S))+O[13]+1309151649&4294967295,C=N+(P<<21&4294967295|P>>>11),P=S+(N^(C|~L))+O[4]+4149444226&4294967295,S=C+(P<<6&4294967295|P>>>26),P=L+(C^(S|~N))+O[11]+3174756917&4294967295,L=S+(P<<10&4294967295|P>>>22),P=N+(S^(L|~C))+O[2]+718787259&4294967295,N=L+(P<<15&4294967295|P>>>17),P=C+(L^(N|~S))+O[9]+3951481745&4294967295,R.g[0]=R.g[0]+S&4294967295,R.g[1]=R.g[1]+(N+(P<<21&4294967295|P>>>11))&4294967295,R.g[2]=R.g[2]+N&4294967295,R.g[3]=R.g[3]+L&4294967295}r.prototype.u=function(R,S){S===void 0&&(S=R.length);for(var C=S-this.blockSize,O=this.B,N=this.h,L=0;L<S;){if(N==0)for(;L<=C;)a(this,R,L),L+=this.blockSize;if(typeof R=="string"){for(;L<S;)if(O[N++]=R.charCodeAt(L++),N==this.blockSize){a(this,O),N=0;break}}else for(;L<S;)if(O[N++]=R[L++],N==this.blockSize){a(this,O),N=0;break}}this.h=N,this.o+=S},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var S=1;S<R.length-8;++S)R[S]=0;var C=8*this.o;for(S=R.length-8;S<R.length;++S)R[S]=C&255,C/=256;for(this.u(R),R=Array(16),S=C=0;4>S;++S)for(var O=0;32>O;O+=8)R[C++]=this.g[S]>>>O&255;return R};function o(R,S){var C=d;return Object.prototype.hasOwnProperty.call(C,R)?C[R]:C[R]=S(R)}function u(R,S){this.h=S;for(var C=[],O=!0,N=R.length-1;0<=N;N--){var L=R[N]|0;O&&L==S||(C[N]=L,O=!1)}this.g=C}var d={};function f(R){return-128<=R&&128>R?o(R,function(S){return new u([S|0],0>S?-1:0)}):new u([R|0],0>R?-1:0)}function m(R){if(isNaN(R)||!isFinite(R))return v;if(0>R)return M(m(-R));for(var S=[],C=1,O=0;R>=C;O++)S[O]=R/C|0,C*=4294967296;return new u(S,0)}function y(R,S){if(R.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(R.charAt(0)=="-")return M(y(R.substring(1),S));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=m(Math.pow(S,8)),O=v,N=0;N<R.length;N+=8){var L=Math.min(8,R.length-N),P=parseInt(R.substring(N,N+L),S);8>L?(L=m(Math.pow(S,L)),O=O.j(L).add(m(P))):(O=O.j(C),O=O.add(m(P)))}return O}var v=f(0),b=f(1),A=f(16777216);n=u.prototype,n.m=function(){if(U(this))return-M(this).m();for(var R=0,S=1,C=0;C<this.g.length;C++){var O=this.i(C);R+=(0<=O?O:4294967296+O)*S,S*=4294967296}return R},n.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(x(this))return"0";if(U(this))return"-"+M(this).toString(R);for(var S=m(Math.pow(R,6)),C=this,O="";;){var N=le(C,S).g;C=H(C,N.j(S));var L=((0<C.g.length?C.g[0]:C.h)>>>0).toString(R);if(C=N,x(C))return L+O;for(;6>L.length;)L="0"+L;O=L+O}},n.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function x(R){if(R.h!=0)return!1;for(var S=0;S<R.g.length;S++)if(R.g[S]!=0)return!1;return!0}function U(R){return R.h==-1}n.l=function(R){return R=H(this,R),U(R)?-1:x(R)?0:1};function M(R){for(var S=R.g.length,C=[],O=0;O<S;O++)C[O]=~R.g[O];return new u(C,~R.h).add(b)}n.abs=function(){return U(this)?M(this):this},n.add=function(R){for(var S=Math.max(this.g.length,R.g.length),C=[],O=0,N=0;N<=S;N++){var L=O+(this.i(N)&65535)+(R.i(N)&65535),P=(L>>>16)+(this.i(N)>>>16)+(R.i(N)>>>16);O=P>>>16,L&=65535,P&=65535,C[N]=P<<16|L}return new u(C,C[C.length-1]&-2147483648?-1:0)};function H(R,S){return R.add(M(S))}n.j=function(R){if(x(this)||x(R))return v;if(U(this))return U(R)?M(this).j(M(R)):M(M(this).j(R));if(U(R))return M(this.j(M(R)));if(0>this.l(A)&&0>R.l(A))return m(this.m()*R.m());for(var S=this.g.length+R.g.length,C=[],O=0;O<2*S;O++)C[O]=0;for(O=0;O<this.g.length;O++)for(var N=0;N<R.g.length;N++){var L=this.i(O)>>>16,P=this.i(O)&65535,ft=R.i(N)>>>16,rt=R.i(N)&65535;C[2*O+2*N]+=P*rt,Z(C,2*O+2*N),C[2*O+2*N+1]+=L*rt,Z(C,2*O+2*N+1),C[2*O+2*N+1]+=P*ft,Z(C,2*O+2*N+1),C[2*O+2*N+2]+=L*ft,Z(C,2*O+2*N+2)}for(O=0;O<S;O++)C[O]=C[2*O+1]<<16|C[2*O];for(O=S;O<2*S;O++)C[O]=0;return new u(C,0)};function Z(R,S){for(;(R[S]&65535)!=R[S];)R[S+1]+=R[S]>>>16,R[S]&=65535,S++}function $(R,S){this.g=R,this.h=S}function le(R,S){if(x(S))throw Error("division by zero");if(x(R))return new $(v,v);if(U(R))return S=le(M(R),S),new $(M(S.g),M(S.h));if(U(S))return S=le(R,M(S)),new $(M(S.g),S.h);if(30<R.g.length){if(U(R)||U(S))throw Error("slowDivide_ only works with positive integers.");for(var C=b,O=S;0>=O.l(R);)C=re(C),O=re(O);var N=J(C,1),L=J(O,1);for(O=J(O,2),C=J(C,2);!x(O);){var P=L.add(O);0>=P.l(R)&&(N=N.add(C),L=P),O=J(O,1),C=J(C,1)}return S=H(R,N.j(S)),new $(N,S)}for(N=v;0<=R.l(S);){for(C=Math.max(1,Math.floor(R.m()/S.m())),O=Math.ceil(Math.log(C)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),L=m(C),P=L.j(S);U(P)||0<P.l(R);)C-=O,L=m(C),P=L.j(S);x(L)&&(L=b),N=N.add(L),R=H(R,P)}return new $(N,R)}n.A=function(R){return le(this,R).h},n.and=function(R){for(var S=Math.max(this.g.length,R.g.length),C=[],O=0;O<S;O++)C[O]=this.i(O)&R.i(O);return new u(C,this.h&R.h)},n.or=function(R){for(var S=Math.max(this.g.length,R.g.length),C=[],O=0;O<S;O++)C[O]=this.i(O)|R.i(O);return new u(C,this.h|R.h)},n.xor=function(R){for(var S=Math.max(this.g.length,R.g.length),C=[],O=0;O<S;O++)C[O]=this.i(O)^R.i(O);return new u(C,this.h^R.h)};function re(R){for(var S=R.g.length+1,C=[],O=0;O<S;O++)C[O]=R.i(O)<<1|R.i(O-1)>>>31;return new u(C,R.h)}function J(R,S){var C=S>>5;S%=32;for(var O=R.g.length-C,N=[],L=0;L<O;L++)N[L]=0<S?R.i(L+C)>>>S|R.i(L+C+1)<<32-S:R.i(L+C);return new u(N,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,O1=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=y,Gs=u}).apply(typeof ZI<"u"?ZI:typeof self<"u"?self:typeof window<"u"?window:{});var rp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var V1,dh,M1,bp,rv,L1,U1,B1;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,E){return h==Array.prototype||h==Object.prototype||(h[_]=E.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof rp=="object"&&rp];for(var _=0;_<h.length;++_){var E=h[_];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var r=t(this);function a(h,_){if(_)e:{var E=r;h=h.split(".");for(var I=0;I<h.length-1;I++){var F=h[I];if(!(F in E))break e;E=E[F]}h=h[h.length-1],I=E[h],_=_(I),_!=I&&_!=null&&e(E,h,{configurable:!0,writable:!0,value:_})}}function o(h,_){h instanceof String&&(h+="");var E=0,I=!1,F={next:function(){if(!I&&E<h.length){var X=E++;return{value:_(X,h[X]),done:!1}}return I=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}a("Array.prototype.values",function(h){return h||function(){return o(this,function(_,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function m(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,E){return h.call.apply(h.bind,arguments)}function v(h,_,E){if(!h)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,I),h.apply(_,F)}}return function(){return h.apply(_,arguments)}}function b(h,_,E){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:v,b.apply(null,arguments)}function A(h,_){var E=Array.prototype.slice.call(arguments,1);return function(){var I=E.slice();return I.push.apply(I,arguments),h.apply(this,I)}}function x(h,_){function E(){}E.prototype=_.prototype,h.aa=_.prototype,h.prototype=new E,h.prototype.constructor=h,h.Qb=function(I,F,X){for(var fe=Array(arguments.length-2),je=2;je<arguments.length;je++)fe[je-2]=arguments[je];return _.prototype[F].apply(I,fe)}}function U(h){const _=h.length;if(0<_){const E=Array(_);for(let I=0;I<_;I++)E[I]=h[I];return E}return[]}function M(h,_){for(let E=1;E<arguments.length;E++){const I=arguments[E];if(f(I)){const F=h.length||0,X=I.length||0;h.length=F+X;for(let fe=0;fe<X;fe++)h[F+fe]=I[fe]}else h.push(I)}}class H{constructor(_,E){this.i=_,this.j=E,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function Z(h){return/^[\s\xa0]*$/.test(h)}function $(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function le(h){return le[" "](h),h}le[" "]=function(){};var re=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function J(h,_,E){for(const I in h)_.call(E,h[I],I,h)}function R(h,_){for(const E in h)_.call(void 0,h[E],E,h)}function S(h){const _={};for(const E in h)_[E]=h[E];return _}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(h,_){let E,I;for(let F=1;F<arguments.length;F++){I=arguments[F];for(E in I)h[E]=I[E];for(let X=0;X<C.length;X++)E=C[X],Object.prototype.hasOwnProperty.call(I,E)&&(h[E]=I[E])}}function N(h){var _=1;h=h.split(":");const E=[];for(;0<_&&h.length;)E.push(h.shift()),_--;return h.length&&E.push(h.join(":")),E}function L(h){d.setTimeout(()=>{throw h},0)}function P(){var h=Ne;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class ft{constructor(){this.h=this.g=null}add(_,E){const I=rt.get();I.set(_,E),this.h?this.h.next=I:this.g=I,this.h=I}}var rt=new H(()=>new ee,h=>h.reset());class ee{constructor(){this.next=this.g=this.h=null}set(_,E){this.h=_,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let he,Ee=!1,Ne=new ft,k=()=>{const h=d.Promise.resolve(void 0);he=()=>{h.then(se)}};var se=()=>{for(var h;h=P();){try{h.h.call(h.g)}catch(E){L(E)}var _=rt;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}Ee=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var be=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const E=()=>{};d.addEventListener("test",E,_),d.removeEventListener("test",E,_)}catch{}return h}();function De(h,_){if(ce.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var E=this.type=h.type,I=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(re){e:{try{le(_.nodeName);var F=!0;break e}catch{}F=!1}F||(_=null)}}else E=="mouseover"?_=h.fromElement:E=="mouseout"&&(_=h.toElement);this.relatedTarget=_,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Ie[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&De.aa.h.call(this)}}x(De,ce);var Ie={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Tt="closure_listenable_"+(1e6*Math.random()|0),$e=0;function Jt(h,_,E,I,F){this.listener=h,this.proxy=null,this.src=_,this.type=E,this.capture=!!I,this.ha=F,this.key=++$e,this.da=this.fa=!1}function sr(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Mn(h){this.src=h,this.g={},this.h=0}Mn.prototype.add=function(h,_,E,I,F){var X=h.toString();h=this.g[X],h||(h=this.g[X]=[],this.h++);var fe=pa(h,_,I,F);return-1<fe?(_=h[fe],E||(_.fa=!1)):(_=new Jt(_,this.src,X,!!I,F),_.fa=E,h.push(_)),_};function vn(h,_){var E=_.type;if(E in h.g){var I=h.g[E],F=Array.prototype.indexOf.call(I,_,void 0),X;(X=0<=F)&&Array.prototype.splice.call(I,F,1),X&&(sr(_),h.g[E].length==0&&(delete h.g[E],h.h--))}}function pa(h,_,E,I){for(var F=0;F<h.length;++F){var X=h[F];if(!X.da&&X.listener==_&&X.capture==!!E&&X.ha==I)return F}return-1}var ma="closure_lm_"+(1e6*Math.random()|0),Bu={};function Cd(h,_,E,I,F){if(Array.isArray(_)){for(var X=0;X<_.length;X++)Cd(h,_[X],E,I,F);return null}return E=xd(E),h&&h[Tt]?h.K(_,E,m(I)?!!I.capture:!1,F):ar(h,_,E,!1,I,F)}function ar(h,_,E,I,F,X){if(!_)throw Error("Invalid event type");var fe=m(F)?!!F.capture:!!F,je=Lo(h);if(je||(h[ma]=je=new Mn(h)),E=je.add(_,E,I,fe,X),E.proxy)return E;if(I=sg(),E.proxy=I,I.src=h,I.listener=E,h.addEventListener)be||(F=fe),F===void 0&&(F=!1),h.addEventListener(_.toString(),I,F);else if(h.attachEvent)h.attachEvent(ga(_.toString()),I);else if(h.addListener&&h.removeListener)h.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return E}function sg(){function h(E){return _.call(h.src,h.listener,E)}const _=ag;return h}function Fu(h,_,E,I,F){if(Array.isArray(_))for(var X=0;X<_.length;X++)Fu(h,_[X],E,I,F);else I=m(I)?!!I.capture:!!I,E=xd(E),h&&h[Tt]?(h=h.i,_=String(_).toString(),_ in h.g&&(X=h.g[_],E=pa(X,E,I,F),-1<E&&(sr(X[E]),Array.prototype.splice.call(X,E,1),X.length==0&&(delete h.g[_],h.h--)))):h&&(h=Lo(h))&&(_=h.g[_.toString()],h=-1,_&&(h=pa(_,E,I,F)),(E=-1<h?_[h]:null)&&Mo(E))}function Mo(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Tt])vn(_.i,h);else{var E=h.type,I=h.proxy;_.removeEventListener?_.removeEventListener(E,I,h.capture):_.detachEvent?_.detachEvent(ga(E),I):_.addListener&&_.removeListener&&_.removeListener(I),(E=Lo(_))?(vn(E,h),E.h==0&&(E.src=null,_[ma]=null)):sr(h)}}}function ga(h){return h in Bu?Bu[h]:Bu[h]="on"+h}function ag(h,_){if(h.da)h=!0;else{_=new De(_,this);var E=h.listener,I=h.ha||h.src;h.fa&&Mo(h),h=E.call(I,_)}return h}function Lo(h){return h=h[ma],h instanceof Mn?h:null}var zu="__closure_events_fn_"+(1e9*Math.random()>>>0);function xd(h){return typeof h=="function"?h:(h[zu]||(h[zu]=function(_){return h.handleEvent(_)}),h[zu])}function Rt(){de.call(this),this.i=new Mn(this),this.M=this,this.F=null}x(Rt,de),Rt.prototype[Tt]=!0,Rt.prototype.removeEventListener=function(h,_,E,I){Fu(this,h,_,E,I)};function Ze(h,_){var E,I=h.F;if(I)for(E=[];I;I=I.F)E.push(I);if(h=h.M,I=_.type||_,typeof _=="string")_=new ce(_,h);else if(_ instanceof ce)_.target=_.target||h;else{var F=_;_=new ce(I,h),O(_,F)}if(F=!0,E)for(var X=E.length-1;0<=X;X--){var fe=_.g=E[X];F=Gn(fe,I,!0,_)&&F}if(fe=_.g=h,F=Gn(fe,I,!0,_)&&F,F=Gn(fe,I,!1,_)&&F,E)for(X=0;X<E.length;X++)fe=_.g=E[X],F=Gn(fe,I,!1,_)&&F}Rt.prototype.N=function(){if(Rt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var E=h.g[_],I=0;I<E.length;I++)sr(E[I]);delete h.g[_],h.h--}}this.F=null},Rt.prototype.K=function(h,_,E,I){return this.i.add(String(h),_,!1,E,I)},Rt.prototype.L=function(h,_,E,I){return this.i.add(String(h),_,!0,E,I)};function Gn(h,_,E,I){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var F=!0,X=0;X<_.length;++X){var fe=_[X];if(fe&&!fe.da&&fe.capture==E){var je=fe.listener,Kt=fe.ha||fe.src;fe.fa&&vn(h.i,fe),F=je.call(Kt,I)!==!1&&F}}return F&&!I.defaultPrevented}function En(h,_,E){if(typeof h=="function")E&&(h=b(h,E));else if(h&&typeof h.handleEvent=="function")h=b(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function Dd(h){h.g=En(()=>{h.g=null,h.i&&(h.i=!1,Dd(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class og extends de{constructor(_,E){super(),this.m=_,this.l=E,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Dd(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ya(h){de.call(this),this.h=h,this.g={}}x(ya,de);var _a=[];function va(h){J(h.g,function(_,E){this.g.hasOwnProperty(E)&&Mo(_)},h),h.g={}}ya.prototype.N=function(){ya.aa.N.call(this),va(this)},ya.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wr=d.JSON.stringify,Uo=d.JSON.parse,Ea=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function ju(){}ju.prototype.h=null;function qu(h){return h.h||(h.h=h.i())}function Hu(){}var yi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _i(){ce.call(this,"d")}x(_i,ce);function Gu(){ce.call(this,"c")}x(Gu,ce);var Or={},$u=null;function ss(){return $u=$u||new Rt}Or.La="serverreachability";function Bo(h){ce.call(this,Or.La,h)}x(Bo,ce);function as(h){const _=ss();Ze(_,new Bo(_))}Or.STAT_EVENT="statevent";function Pd(h,_){ce.call(this,Or.STAT_EVENT,h),this.stat=_}x(Pd,ce);function pt(h){const _=ss();Ze(_,new Pd(_,h))}Or.Ma="timingevent";function $t(h,_){ce.call(this,Or.Ma,h),this.size=_}x($t,ce);function Bt(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function or(){this.g=!0}or.prototype.xa=function(){this.g=!1};function Ku(h,_,E,I,F,X){h.info(function(){if(h.g)if(X)for(var fe="",je=X.split("&"),Kt=0;Kt<je.length;Kt++){var qe=je[Kt].split("=");if(1<qe.length){var tn=qe[0];qe=qe[1];var Qt=tn.split("_");fe=2<=Qt.length&&Qt[1]=="type"?fe+(tn+"="+qe+"&"):fe+(tn+"=redacted&")}}else fe=null;else fe=X;return"XMLHTTP REQ ("+I+") [attempt "+F+"]: "+_+`
`+E+`
`+fe})}function lg(h,_,E,I,F,X,fe){h.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+F+"]: "+_+`
`+E+`
`+X+" "+fe})}function os(h,_,E,I){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+Ta(h,E)+(I?" "+I:"")})}function Nd(h,_){h.info(function(){return"TIMEOUT: "+_})}or.prototype.info=function(){};function Ta(h,_){if(!h.g)return _;if(!_)return null;try{var E=JSON.parse(_);if(E){for(h=0;h<E.length;h++)if(Array.isArray(E[h])){var I=E[h];if(!(2>I.length)){var F=I[1];if(Array.isArray(F)&&!(1>F.length)){var X=F[0];if(X!="noop"&&X!="stop"&&X!="close")for(var fe=1;fe<F.length;fe++)F[fe]=""}}}}return wr(E)}catch{return _}}var ls={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vr;function Mr(){}x(Mr,ju),Mr.prototype.g=function(){return new XMLHttpRequest},Mr.prototype.i=function(){return{}},Vr=new Mr;function Rn(h,_,E,I){this.j=h,this.i=_,this.l=E,this.R=I||1,this.U=new ya(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new kt}function kt(){this.i=null,this.g="",this.h=!1}var Qu={},Fo={};function Ir(h,_,E){h.L=1,h.v=Sa($n(_)),h.m=E,h.P=!0,Ei(h,null)}function Ei(h,_){h.F=Date.now(),ba(h),h.A=$n(h.v);var E=h.A,I=h.R;Array.isArray(I)||(I=[String(I)]),ec(E.i,"t",I),h.C=0,E=h.j.J,h.h=new kt,h.g=Qd(h.j,E?_:null,!h.m),0<h.O&&(h.M=new og(b(h.Y,h,h.g),h.O)),_=h.U,E=h.g,I=h.ca;var F="readystatechange";Array.isArray(F)||(F&&(_a[0]=F.toString()),F=_a);for(var X=0;X<F.length;X++){var fe=Cd(E,F[X],I||_.handleEvent,!1,_.h||_);if(!fe)break;_.g[fe.key]=fe}_=h.H?S(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),as(),Ku(h.i,h.u,h.A,h.l,h.R,h.m)}Rn.prototype.ca=function(h){h=h.target;const _=this.M;_&&hr(h)==3?_.j():this.Y(h)},Rn.prototype.Y=function(h){try{if(h==this.g)e:{const Qt=hr(this.g);var _=this.g.Ba();const Ci=this.g.Z();if(!(3>Qt)&&(Qt!=3||this.g&&(this.h.h||this.g.oa()||Fd(this.g)))){this.J||Qt!=4||_==7||(_==8||0>=Ci?as(3):as(2)),us(this);var E=this.g.Z();this.X=E;t:if(kd(this)){var I=Fd(this.g);h="";var F=I.length,X=hr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cn(this),Lr(this);var fe="";break t}this.h.i=new d.TextDecoder}for(_=0;_<F;_++)this.h.h=!0,h+=this.h.i.decode(I[_],{stream:!(X&&_==F-1)});I.length=0,this.h.g+=h,this.C=0,fe=this.h.g}else fe=this.g.oa();if(this.o=E==200,lg(this.i,this.u,this.A,this.l,this.R,Qt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var je,Kt=this.g;if((je=Kt.g?Kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Z(je)){var qe=je;break t}}qe=null}if(E=qe)os(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wa(this,E);else{this.o=!1,this.s=3,pt(12),cn(this),Lr(this);break e}}if(this.P){E=!0;let hn;for(;!this.J&&this.C<fe.length;)if(hn=Od(this,fe),hn==Fo){Qt==4&&(this.s=4,pt(14),E=!1),os(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==Qu){this.s=4,pt(15),os(this.i,this.l,fe,"[Invalid Chunk]"),E=!1;break}else os(this.i,this.l,hn,null),wa(this,hn);if(kd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qt!=4||fe.length!=0||this.h.h||(this.s=1,pt(16),E=!1),this.o=this.o&&E,!E)os(this.i,this.l,fe,"[Invalid Chunked Response]"),cn(this),Lr(this);else if(0<fe.length&&!this.W){this.W=!0;var tn=this.j;tn.g==this&&tn.ba&&!tn.M&&(tn.j.info("Great, no buffering proxy detected. Bytes received: "+fe.length),Oa(tn),tn.M=!0,pt(11))}}else os(this.i,this.l,fe,null),wa(this,fe);Qt==4&&cn(this),this.o&&!this.J&&(Qt==4?Gd(this.j,this):(this.o=!1,ba(this)))}else fg(this.g),E==400&&0<fe.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),cn(this),Lr(this)}}}catch{}finally{}};function kd(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Od(h,_){var E=h.C,I=_.indexOf(`
`,E);return I==-1?Fo:(E=Number(_.substring(E,I)),isNaN(E)?Qu:(I+=1,I+E>_.length?Fo:(_=_.slice(I,I+E),h.C=I+E,_)))}Rn.prototype.cancel=function(){this.J=!0,cn(this)};function ba(h){h.S=Date.now()+h.I,Vd(h,h.I)}function Vd(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Bt(b(h.ba,h),_)}function us(h){h.B&&(d.clearTimeout(h.B),h.B=null)}Rn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Nd(this.i,this.A),this.L!=2&&(as(),pt(17)),cn(this),this.s=2,Lr(this)):Vd(this,this.S-h)};function Lr(h){h.j.G==0||h.J||Gd(h.j,h)}function cn(h){us(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,va(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function wa(h,_){try{var E=h.j;if(E.G!=0&&(E.g==h||Yu(E.h,h))){if(!h.K&&Yu(E.h,h)&&E.G==3){try{var I=E.Da.g.parse(_)}catch{I=null}if(Array.isArray(I)&&I.length==3){var F=I;if(F[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<h.F)Zo(E),Wo(E);else break e;sc(E),pt(18)}}else E.za=F[1],0<E.za-E.T&&37500>F[2]&&E.F&&E.v==0&&!E.C&&(E.C=Bt(b(E.Za,E),6e3));if(1>=jo(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Ri(E,11)}else if((h.K||E.g==h)&&Zo(E),!Z(_))for(F=E.Da.g.parse(_),_=0;_<F.length;_++){let qe=F[_];if(E.T=qe[0],qe=qe[1],E.G==2)if(qe[0]=="c"){E.K=qe[1],E.ia=qe[2];const tn=qe[3];tn!=null&&(E.la=tn,E.j.info("VER="+E.la));const Qt=qe[4];Qt!=null&&(E.Aa=Qt,E.j.info("SVER="+E.Aa));const Ci=qe[5];Ci!=null&&typeof Ci=="number"&&0<Ci&&(I=1.5*Ci,E.L=I,E.j.info("backChannelRequestTimeoutMs_="+I)),I=E;const hn=h.g;if(hn){const Hr=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hr){var X=I.h;X.g||Hr.indexOf("spdy")==-1&&Hr.indexOf("quic")==-1&&Hr.indexOf("h2")==-1||(X.j=X.l,X.g=new Set,X.h&&(qo(X,X.h),X.h=null))}if(I.D){const oc=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;oc&&(I.ya=oc,it(I.I,I.D,oc))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-h.F,E.j.info("Handshake RTT: "+E.R+"ms")),I=E;var fe=h;if(I.qa=Kd(I,I.J?I.ia:null,I.W),fe.K){Cn(I.h,fe);var je=fe,Kt=I.L;Kt&&(je.I=Kt),je.B&&(us(je),ba(je)),I.g=fe}else qd(I);0<E.i.length&&Xo(E)}else qe[0]!="stop"&&qe[0]!="close"||Ri(E,7);else E.G==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?Ri(E,7):rc(E):qe[0]!="noop"&&E.l&&E.l.ta(qe),E.v=0)}}as(4)}catch{}}var Md=class{constructor(h,_){this.g=h,this.map=_}};function Ti(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function zo(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function jo(h){return h.h?1:h.g?h.g.size:0}function Yu(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function qo(h,_){h.g?h.g.add(_):h.h=_}function Cn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}Ti.prototype.cancel=function(){if(this.i=Wu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Wu(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const E of h.g.values())_=_.concat(E.D);return _}return U(h.i)}function ug(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(f(h)){for(var _=[],E=h.length,I=0;I<E;I++)_.push(h[I]);return _}_=[],E=0;for(I in h)_[E++]=h[I];return _}function Ho(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(f(h)||typeof h=="string"){var _=[];h=h.length;for(var E=0;E<h;E++)_.push(E);return _}_=[],E=0;for(const I in h)_[E++]=I;return _}}}function Xu(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(f(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var E=Ho(h),I=ug(h),F=I.length,X=0;X<F;X++)_.call(void 0,I[X],E&&E[X],h)}var Ia=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cg(h,_){if(h){h=h.split("&");for(var E=0;E<h.length;E++){var I=h[E].indexOf("="),F=null;if(0<=I){var X=h[E].substring(0,I);F=h[E].substring(I+1)}else X=h[E];_(X,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Ft(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Ft){this.h=h.h,Aa(this,h.j),this.o=h.o,this.g=h.g,cs(this,h.s),this.l=h.l;var _=h.i,E=new wi;E.i=_.i,_.g&&(E.g=new Map(_.g),E.h=_.h),bi(this,E),this.m=h.m}else h&&(_=String(h).match(Ia))?(this.h=!1,Aa(this,_[1]||"",!0),this.o=lr(_[2]||""),this.g=lr(_[3]||"",!0),cs(this,_[4]),this.l=lr(_[5]||"",!0),bi(this,_[6]||"",!0),this.m=lr(_[7]||"")):(this.h=!1,this.i=new wi(null,this.h))}Ft.prototype.toString=function(){var h=[],_=this.j;_&&h.push(Ra(_,Zu,!0),":");var E=this.g;return(E||_=="file")&&(h.push("//"),(_=this.o)&&h.push(Ra(_,Zu,!0),"@"),h.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&h.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&h.push("/"),h.push(Ra(E,E.charAt(0)=="/"?hg:Ju,!0))),(E=this.i.toString())&&h.push("?",E),(E=this.m)&&h.push("#",Ra(E,Go)),h.join("")};function $n(h){return new Ft(h)}function Aa(h,_,E){h.j=E?lr(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function cs(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function bi(h,_,E){_ instanceof wi?(h.i=_,Ud(h.i,h.h)):(E||(_=Ra(_,dg)),h.i=new wi(_,h.h))}function it(h,_,E){h.i.set(_,E)}function Sa(h){return it(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function lr(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Ra(h,_,E){return typeof h=="string"?(h=encodeURI(h).replace(_,Ld),E&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Ld(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Zu=/[#\/\?@]/g,Ju=/[#\?:]/g,hg=/[#\?]/g,dg=/[#\?@]/g,Go=/#/g;function wi(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function ur(h){h.g||(h.g=new Map,h.h=0,h.i&&cg(h.i,function(_,E){h.add(decodeURIComponent(_.replace(/\+/g," ")),E)}))}n=wi.prototype,n.add=function(h,_){ur(this),this.i=null,h=Ur(this,h);var E=this.g.get(h);return E||this.g.set(h,E=[]),E.push(_),this.h+=1,this};function Ii(h,_){ur(h),_=Ur(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function Ai(h,_){return ur(h),_=Ur(h,_),h.g.has(_)}n.forEach=function(h,_){ur(this),this.g.forEach(function(E,I){E.forEach(function(F){h.call(_,F,I,this)},this)},this)},n.na=function(){ur(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),E=[];for(let I=0;I<_.length;I++){const F=h[I];for(let X=0;X<F.length;X++)E.push(_[I])}return E},n.V=function(h){ur(this);let _=[];if(typeof h=="string")Ai(this,h)&&(_=_.concat(this.g.get(Ur(this,h))));else{h=Array.from(this.g.values());for(let E=0;E<h.length;E++)_=_.concat(h[E])}return _},n.set=function(h,_){return ur(this),this.i=null,h=Ur(this,h),Ai(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function ec(h,_,E){Ii(h,_),0<E.length&&(h.i=null,h.g.set(Ur(h,_),U(E)),h.h+=E.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var E=0;E<_.length;E++){var I=_[E];const X=encodeURIComponent(String(I)),fe=this.V(I);for(I=0;I<fe.length;I++){var F=X;fe[I]!==""&&(F+="="+encodeURIComponent(String(fe[I]))),h.push(F)}}return this.i=h.join("&")};function Ur(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Ud(h,_){_&&!h.j&&(ur(h),h.i=null,h.g.forEach(function(E,I){var F=I.toLowerCase();I!=F&&(Ii(this,I),ec(this,F,E))},h)),h.j=_}function Ca(h,_){const E=new or;if(d.Image){const I=new Image;I.onload=A(cr,E,"TestLoadImage: loaded",!0,_,I),I.onerror=A(cr,E,"TestLoadImage: error",!1,_,I),I.onabort=A(cr,E,"TestLoadImage: abort",!1,_,I),I.ontimeout=A(cr,E,"TestLoadImage: timeout",!1,_,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=h}else _(!1)}function Ar(h,_){const E=new or,I=new AbortController,F=setTimeout(()=>{I.abort(),cr(E,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:I.signal}).then(X=>{clearTimeout(F),X.ok?cr(E,"TestPingServer: ok",!0,_):cr(E,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(F),cr(E,"TestPingServer: error",!1,_)})}function cr(h,_,E,I,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),I(E)}catch{}}function xa(){this.g=new Ea}function Br(h,_,E){const I=E||"";try{Xu(h,function(F,X){let fe=F;m(F)&&(fe=wr(F)),_.push(I+X+"="+encodeURIComponent(fe))})}catch(F){throw _.push(I+"type="+encodeURIComponent("_badmap")),F}}function hs(h){this.l=h.Ub||null,this.j=h.eb||!1}x(hs,ju),hs.prototype.g=function(){return new Si(this.l,this.j)},hs.prototype.i=function(h){return function(){return h}}({});function Si(h,_){Rt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Si,Rt),n=Si.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,zr(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fr(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,zr(this)),this.g&&(this.readyState=3,zr(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tc(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function tc(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Fr(this):zr(this),this.readyState==3&&tc(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Fr(this))},n.Qa=function(h){this.g&&(this.response=h,Fr(this))},n.ga=function(){this.g&&Fr(this)};function Fr(h){h.readyState=4,h.l=null,h.j=null,h.v=null,zr(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var E=_.next();!E.done;)E=E.value,h.push(E[0]+": "+E[1]),E=_.next();return h.join(`\r
`)};function zr(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function nc(h){let _="";return J(h,function(E,I){_+=I,_+=":",_+=E,_+=`\r
`}),_}function en(h,_,E){e:{for(I in E){var I=!1;break e}I=!0}I||(E=nc(E),typeof h=="string"?E!=null&&encodeURIComponent(String(E)):it(h,_,E))}function We(h){Rt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(We,Rt);var $o=/^https?$/i,Da=["POST","PUT"];n=We.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,E,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vr.g(),this.v=this.o?qu(this.o):qu(Vr),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(X){Bd(this,X);return}if(h=E||"",E=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var F in I)E.set(F,I[F]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const X of I.keys())E.set(X,I.get(X));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(E.keys()).find(X=>X.toLowerCase()=="content-type"),F=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Da,_,void 0))||I||F||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[X,fe]of E)this.g.setRequestHeader(X,fe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Pa(this),this.u=!0,this.g.send(h),this.u=!1}catch(X){Bd(this,X)}};function Bd(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,Ko(h),jr(h)}function Ko(h){h.A||(h.A=!0,Ze(h,"complete"),Ze(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Ze(this,"complete"),Ze(this,"abort"),jr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jr(this,!0)),We.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Qo(this):this.bb())},n.bb=function(){Qo(this)};function Qo(h){if(h.h&&typeof u<"u"&&(!h.v[1]||hr(h)!=4||h.Z()!=2)){if(h.u&&hr(h)==4)En(h.Ea,0,h);else if(Ze(h,"readystatechange"),hr(h)==4){h.h=!1;try{const fe=h.Z();e:switch(fe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var E;if(!(E=_)){var I;if(I=fe===0){var F=String(h.D).match(Ia)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),I=!$o.test(F?F.toLowerCase():"")}E=I}if(E)Ze(h,"complete"),Ze(h,"success");else{h.m=6;try{var X=2<hr(h)?h.g.statusText:""}catch{X=""}h.l=X+" ["+h.Z()+"]",Ko(h)}}finally{jr(h)}}}}function jr(h,_){if(h.g){Pa(h);const E=h.g,I=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Ze(h,"ready");try{E.onreadystatechange=I}catch{}}}function Pa(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function hr(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<hr(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Uo(_)}};function Fd(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function fg(h){const _={};h=(h.g&&2<=hr(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<h.length;I++){if(Z(h[I]))continue;var E=N(h[I]);const F=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const X=_[F]||[];_[F]=X,X.push(E)}R(_,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Na(h,_,E){return E&&E.internalChannelParams&&E.internalChannelParams[h]||_}function Yo(h){this.Aa=0,this.i=[],this.j=new or,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Na("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Na("baseRetryDelayMs",5e3,h),this.cb=Na("retryDelaySeedMs",1e4,h),this.Wa=Na("forwardChannelMaxRetries",2,h),this.wa=Na("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Ti(h&&h.concurrentRequestLimit),this.Da=new xa,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Yo.prototype,n.la=8,n.G=1,n.connect=function(h,_,E,I){pt(0),this.W=h,this.H=_||{},E&&I!==void 0&&(this.H.OSID=E,this.H.OAID=I),this.F=this.X,this.I=Kd(this,null,this.W),Xo(this)};function rc(h){if(zd(h),h.G==3){var _=h.U++,E=$n(h.I);if(it(E,"SID",h.K),it(E,"RID",_),it(E,"TYPE","terminate"),ka(h,E),_=new Rn(h,h.j,_),_.L=2,_.v=Sa($n(E)),E=!1,d.navigator&&d.navigator.sendBeacon)try{E=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!E&&d.Image&&(new Image().src=_.v,E=!0),E||(_.g=Qd(_.j,null),_.g.ea(_.v)),_.F=Date.now(),ba(_)}$d(h)}function Wo(h){h.g&&(Oa(h),h.g.cancel(),h.g=null)}function zd(h){Wo(h),h.u&&(d.clearTimeout(h.u),h.u=null),Zo(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function Xo(h){if(!zo(h.h)&&!h.s){h.s=!0;var _=h.Ga;he||k(),Ee||(he(),Ee=!0),Ne.add(_,h),h.B=0}}function pg(h,_){return jo(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Bt(b(h.Ga,h,_),ac(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const F=new Rn(this,this.j,h);let X=this.o;if(this.S&&(X?(X=S(X),O(X,this.S)):X=this.S),this.m!==null||this.O||(F.H=X,X=null),this.P)e:{for(var _=0,E=0;E<this.i.length;E++){t:{var I=this.i[E];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(_+=I,4096<_){_=E;break e}if(_===4096||E===this.i.length-1){_=E+1;break e}}_=1e3}else _=1e3;_=jd(this,F,_),E=$n(this.I),it(E,"RID",h),it(E,"CVER",22),this.D&&it(E,"X-HTTP-Session-Id",this.D),ka(this,E),X&&(this.O?_="headers="+encodeURIComponent(String(nc(X)))+"&"+_:this.m&&en(E,this.m,X)),qo(this.h,F),this.Ua&&it(E,"TYPE","init"),this.P?(it(E,"$req",_),it(E,"SID","null"),F.T=!0,Ir(F,E,null)):Ir(F,E,_),this.G=2}}else this.G==3&&(h?ic(this,h):this.i.length==0||zo(this.h)||ic(this))};function ic(h,_){var E;_?E=_.l:E=h.U++;const I=$n(h.I);it(I,"SID",h.K),it(I,"RID",E),it(I,"AID",h.T),ka(h,I),h.m&&h.o&&en(I,h.m,h.o),E=new Rn(h,h.j,E,h.B+1),h.m===null&&(E.H=h.o),_&&(h.i=_.D.concat(h.i)),_=jd(h,E,1e3),E.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),qo(h.h,E),Ir(E,I,_)}function ka(h,_){h.H&&J(h.H,function(E,I){it(_,I,E)}),h.l&&Xu({},function(E,I){it(_,I,E)})}function jd(h,_,E){E=Math.min(h.i.length,E);var I=h.l?b(h.l.Na,h.l,h):null;e:{var F=h.i;let X=-1;for(;;){const fe=["count="+E];X==-1?0<E?(X=F[0].g,fe.push("ofs="+X)):X=0:fe.push("ofs="+X);let je=!0;for(let Kt=0;Kt<E;Kt++){let qe=F[Kt].g;const tn=F[Kt].map;if(qe-=X,0>qe)X=Math.max(0,F[Kt].g-100),je=!1;else try{Br(tn,fe,"req"+qe+"_")}catch{I&&I(tn)}}if(je){I=fe.join("&");break e}}}return h=h.i.splice(0,E),_.D=h,I}function qd(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;he||k(),Ee||(he(),Ee=!0),Ne.add(_,h),h.v=0}}function sc(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Bt(b(h.Fa,h),ac(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,Hd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Bt(b(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),Wo(this),Hd(this))};function Oa(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Hd(h){h.g=new Rn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=$n(h.qa);it(_,"RID","rpc"),it(_,"SID",h.K),it(_,"AID",h.T),it(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&it(_,"TO",h.ja),it(_,"TYPE","xmlhttp"),ka(h,_),h.m&&h.o&&en(_,h.m,h.o),h.L&&(h.g.I=h.L);var E=h.g;h=h.ia,E.L=1,E.v=Sa($n(_)),E.m=null,E.P=!0,Ei(E,h)}n.Za=function(){this.C!=null&&(this.C=null,Wo(this),sc(this),pt(19))};function Zo(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Gd(h,_){var E=null;if(h.g==_){Zo(h),Oa(h),h.g=null;var I=2}else if(Yu(h.h,_))E=_.D,Cn(h.h,_),I=1;else return;if(h.G!=0){if(_.o)if(I==1){E=_.m?_.m.length:0,_=Date.now()-_.F;var F=h.B;I=ss(),Ze(I,new $t(I,E)),Xo(h)}else qd(h);else if(F=_.s,F==3||F==0&&0<_.X||!(I==1&&pg(h,_)||I==2&&sc(h)))switch(E&&0<E.length&&(_=h.h,_.i=_.i.concat(E)),F){case 1:Ri(h,5);break;case 4:Ri(h,10);break;case 3:Ri(h,6);break;default:Ri(h,2)}}}function ac(h,_){let E=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(E*=2),E*_}function Ri(h,_){if(h.j.info("Error code "+_),_==2){var E=b(h.fb,h),I=h.Xa;const F=!I;I=new Ft(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Aa(I,"https"),Sa(I),F?Ca(I.toString(),E):Ar(I.toString(),E)}else pt(2);h.G=0,h.l&&h.l.sa(_),$d(h),zd(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function $d(h){if(h.G=0,h.ka=[],h.l){const _=Wu(h.h);(_.length!=0||h.i.length!=0)&&(M(h.ka,_),M(h.ka,h.i),h.h.i.length=0,U(h.i),h.i.length=0),h.l.ra()}}function Kd(h,_,E){var I=E instanceof Ft?$n(E):new Ft(E);if(I.g!="")_&&(I.g=_+"."+I.g),cs(I,I.s);else{var F=d.location;I=F.protocol,_=_?_+"."+F.hostname:F.hostname,F=+F.port;var X=new Ft(null);I&&Aa(X,I),_&&(X.g=_),F&&cs(X,F),E&&(X.l=E),I=X}return E=h.D,_=h.ya,E&&_&&it(I,E,_),it(I,"VER",h.la),ka(h,I),I}function Qd(h,_,E){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new We(new hs({eb:E})):new We(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yd(){}n=Yd.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Jo(){}Jo.prototype.g=function(h,_){return new xn(h,_)};function xn(h,_){Rt.call(this),this.g=new Yo(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!Z(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!Z(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new qr(this)}x(xn,Rt),xn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xn.prototype.close=function(){rc(this.g)},xn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var E={};E.__data__=h,h=E}else this.u&&(E={},E.__data__=wr(h),h=E);_.i.push(new Md(_.Ya++,h)),_.G==3&&Xo(_)},xn.prototype.N=function(){this.g.l=null,delete this.j,rc(this.g),delete this.g,xn.aa.N.call(this)};function Wd(h){_i.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const E in _){h=E;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}x(Wd,_i);function Xd(){Gu.call(this),this.status=1}x(Xd,Gu);function qr(h){this.g=h}x(qr,Yd),qr.prototype.ua=function(){Ze(this.g,"a")},qr.prototype.ta=function(h){Ze(this.g,new Wd(h))},qr.prototype.sa=function(h){Ze(this.g,new Xd)},qr.prototype.ra=function(){Ze(this.g,"b")},Jo.prototype.createWebChannel=Jo.prototype.g,xn.prototype.send=xn.prototype.o,xn.prototype.open=xn.prototype.m,xn.prototype.close=xn.prototype.close,B1=function(){return new Jo},U1=function(){return ss()},L1=Or,rv={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ls.NO_ERROR=0,ls.TIMEOUT=8,ls.HTTP_ERROR=6,bp=ls,vi.COMPLETE="complete",M1=vi,Hu.EventType=yi,yi.OPEN="a",yi.CLOSE="b",yi.ERROR="c",yi.MESSAGE="d",Rt.prototype.listen=Rt.prototype.K,dh=Hu,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,V1=We}).apply(typeof rp<"u"?rp:typeof self<"u"?self:typeof window<"u"?window:{});const JI="@firebase/firestore",eA="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ln.UNAUTHENTICATED=new ln(null),ln.GOOGLE_CREDENTIALS=new ln("google-credentials-uid"),ln.FIRST_PARTY=new ln("first-party-uid"),ln.MOCK_USER=new ln("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pu="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new Em("@firebase/firestore");function Ml(){return Zs.logLevel}function _4(n){Zs.setLogLevel(n)}function oe(n,...e){if(Zs.logLevel<=Be.DEBUG){const t=e.map(vE);Zs.debug(`Firestore (${Pu}): ${n}`,...t)}}function Mt(n,...e){if(Zs.logLevel<=Be.ERROR){const t=e.map(vE);Zs.error(`Firestore (${Pu}): ${n}`,...t)}}function di(n,...e){if(Zs.logLevel<=Be.WARN){const t=e.map(vE);Zs.warn(`Firestore (${Pu}): ${n}`,...t)}}function vE(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(n="Unexpected state"){const e=`FIRESTORE (${Pu}) INTERNAL ASSERTION FAILED: `+n;throw Mt(e),new Error(e)}function ve(n,e){n||ye()}function v4(n,e){n||ye()}function me(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends kn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class E4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ln.UNAUTHENTICATED))}shutdown(){}}class T4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class b4{constructor(e){this.t=e,this.currentUser=ln.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ve(this.o===void 0);let r=this.i;const a=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let o=new yn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new yn,e.enqueueRetryable(()=>a(this.currentUser))};const u=()=>{const f=o;e.enqueueRetryable(async()=>{await f.promise,await a(this.currentUser)})},d=f=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>d(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new yn)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new F1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new ln(e)}}class w4{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ln.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class I4{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new w4(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ln.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class A4{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,yt(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){ve(this.o===void 0);const r=o=>{o.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,oe("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const a=o=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>a(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?a(o):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new tA(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ve(typeof t.token=="string"),this.R=t.token,new tA(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S4(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const a=S4(40);for(let o=0;o<a.length;++o)r.length<20&&a[o]<t&&(r+=e.charAt(a[o]%62))}return r}}function Ce(n,e){return n<e?-1:n>e?1:0}function iv(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),a=e.codePointAt(t);if(r!==a){if(r<128&&a<128)return Ce(r,a);{const o=EE(),u=R4(o.encode(nA(n,t)),o.encode(nA(e,t)));return u!==0?u:Ce(r,a)}}t+=r>65535?2:1}return Ce(n.length,e.length)}function nA(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function R4(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ce(n[t],e[t]);return Ce(n.length,e.length)}function iu(n,e,t){return n.length===e.length&&n.every((r,a)=>t(r,e[a]))}function j1(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=-62135596800,iA=1e6;class Et{static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*iA);return new Et(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ae(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ae(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<rA)throw new ae(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/iA}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-rA;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new Et(0,0))}static max(){return new Te(new Et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA="__name__";class Wr{constructor(e,t,r){t===void 0?t=0:t>e.length&&ye(),r===void 0?r=e.length-t:r>e.length-t&&ye(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Wr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Wr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let a=0;a<r;a++){const o=Wr.compareSegments(e.get(a),t.get(a));if(o!==0)return o}return Ce(e.length,t.length)}static compareSegments(e,t){const r=Wr.isNumericId(e),a=Wr.isNumericId(t);return r&&!a?-1:!r&&a?1:r&&a?Wr.extractNumericId(e).compare(Wr.extractNumericId(t)):iv(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Gs.fromString(e.substring(4,e.length-2))}}class Fe extends Wr{construct(e,t,r){return new Fe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ae(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(a=>a.length>0))}return new Fe(t)}static emptyPath(){return new Fe([])}}const C4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Wr{construct(e,t,r){return new _t(e,t,r)}static isValidIdentifier(e){return C4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===sA}static keyField(){return new _t([sA])}static fromServerFormat(e){const t=[];let r="",a=0;const o=()=>{if(r.length===0)throw new ae(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new ae(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[a+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new ae(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,a+=2}else d==="`"?(u=!u,a++):d!=="."||u?(r+=d,a++):(o(),a++)}if(o(),u)throw new ae(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(t)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(Fe.fromString(e))}static fromName(e){return new pe(Fe.fromString(e).popFirst(5))}static empty(){return new pe(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Fe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new Fe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=-1;class $p{constructor(e,t,r,a){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=a}}function sv(n){return n.fields.find(e=>e.kind===2)}function Za(n){return n.fields.filter(e=>e.kind!==2)}$p.UNKNOWN_ID=-1;class wp{constructor(e,t){this.fieldPath=e,this.kind=t}}class Bh{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Bh(0,ir.min())}}function q1(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,a=Te.fromTimestamp(r===1e9?new Et(t+1,0):new Et(t,r));return new ir(a,pe.empty(),e)}function H1(n){return new ir(n.readTime,n.key,su)}class ir{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ir(Te.min(),pe.empty(),su)}static max(){return new ir(Te.max(),pe.empty(),su)}}function TE(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(n.documentKey,e.documentKey),t!==0?t:Ce(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ua(n){if(n.code!==W.FAILED_PRECONDITION||n.message!==G1)throw n;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ye(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new z((r,a)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,a)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof z?t:z.resolve(t)}catch(t){return z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):z.reject(t)}static resolve(e){return new z((t,r)=>{t(e)})}static reject(e){return new z((t,r)=>{r(e)})}static waitFor(e){return new z((t,r)=>{let a=0,o=0,u=!1;e.forEach(d=>{++a,d.next(()=>{++o,u&&o===a&&t()},f=>r(f))}),u=!0,o===a&&t()})}static or(e){let t=z.resolve(!1);for(const r of e)t=t.next(a=>a?z.resolve(a):r());return t}static forEach(e,t){const r=[];return e.forEach((a,o)=>{r.push(t.call(this,a,o))}),this.waitFor(r)}static mapArray(e,t){return new z((r,a)=>{const o=e.length,u=new Array(o);let d=0;for(let f=0;f<o;f++){const m=f;t(e[m]).next(y=>{u[m]=y,++d,d===o&&r(u)},y=>a(y))}})}static doWhile(e,t){return new z((r,a)=>{const o=()=>{e()===!0?t().next(()=>{o()},a):r()};o()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="SimpleDb";class Nm{static open(e,t,r,a){try{return new Nm(t,e.transaction(a,r))}catch(o){throw new bh(t,o)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new yn,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new bh(e,t.error)):this.m.resolve()},this.transaction.onerror=r=>{const a=bE(r.target.error);this.m.reject(new bh(e,a))}}get p(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(oe(tr,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}S(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new D4(t)}}class oi{static delete(e){return oe(tr,"Removing database:",e),eo(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Nh())return!1;if(oi.v())return!0;const e=At(),t=oi.C(e),r=0<t&&t<10,a=K1(e),o=0<a&&a<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||o)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,t){return e.store(t)}static C(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.O=r,oi.C(At())===12.2&&Mt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async N(e){return this.db||(oe(tr,"Opening database:",this.name),this.db=await new Promise((t,r)=>{const a=indexedDB.open(this.name,this.version);a.onsuccess=o=>{const u=o.target.result;t(u)},a.onblocked=()=>{r(new bh(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=o=>{const u=o.target.error;u.name==="VersionError"?r(new ae(W.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):u.name==="InvalidStateError"?r(new ae(W.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+u)):r(new bh(e,u))},a.onupgradeneeded=o=>{oe(tr,'Database "'+this.name+'" requires upgrade from version:',o.oldVersion);const u=o.target.result;this.O.B(u,a.transaction,o.oldVersion,this.version).next(()=>{oe(tr,"Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=t=>this.L(t)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,a){const o=t==="readonly";let u=0;for(;;){++u;try{this.db=await this.N(e);const d=Nm.open(this.db,e,o?"readonly":"readwrite",r),f=a(d).next(m=>(d.S(),m)).catch(m=>(d.abort(m),z.reject(m))).toPromise();return f.catch(()=>{}),await d.p,f}catch(d){const f=d,m=f.name!=="FirebaseError"&&u<3;if(oe(tr,"Transaction failed with error:",f.message,"Retrying:",m),this.close(),!m)return Promise.reject(f)}}}close(){this.db&&this.db.close(),this.db=void 0}}function K1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class x4{constructor(e){this.q=e,this.$=!1,this.U=null}get isDone(){return this.$}get K(){return this.U}set cursor(e){this.q=e}done(){this.$=!0}W(e){this.U=e}delete(){return eo(this.q.delete())}}class bh extends ae{constructor(e,t){super(W.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ca(n){return n.name==="IndexedDbTransactionError"}class D4{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(oe(tr,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(oe(tr,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),eo(r)}add(e){return oe(tr,"ADD",this.store.name,e,e),eo(this.store.add(e))}get(e){return eo(this.store.get(e)).next(t=>(t===void 0&&(t=null),oe(tr,"GET",this.store.name,e,t),t))}delete(e){return oe(tr,"DELETE",this.store.name,e),eo(this.store.delete(e))}count(){return oe(tr,"COUNT",this.store.name),eo(this.store.count())}G(e,t){const r=this.options(e,t),a=r.index?this.store.index(r.index):this.store;if(typeof a.getAll=="function"){const o=a.getAll(r.range);return new z((u,d)=>{o.onerror=f=>{d(f.target.error)},o.onsuccess=f=>{u(f.target.result)}})}{const o=this.cursor(r),u=[];return this.j(o,(d,f)=>{u.push(f)}).next(()=>u)}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new z((a,o)=>{r.onerror=u=>{o(u.target.error)},r.onsuccess=u=>{a(u.target.result)}})}J(e,t){oe(tr,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const a=this.cursor(r);return this.j(a,(o,u,d)=>d.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const a=this.cursor(r);return this.j(a,t)}X(e){const t=this.cursor({});return new z((r,a)=>{t.onerror=o=>{const u=bE(o.target.error);a(u)},t.onsuccess=o=>{const u=o.target.result;u?e(u.primaryKey,u.value).next(d=>{d?u.continue():r()}):r()}})}j(e,t){const r=[];return new z((a,o)=>{e.onerror=u=>{o(u.target.error)},e.onsuccess=u=>{const d=u.target.result;if(!d)return void a();const f=new x4(d),m=t(d.primaryKey,d.value,f);if(m instanceof z){const y=m.catch(v=>(f.done(),z.reject(v)));r.push(y)}f.isDone?a():f.K===null?d.continue():d.continue(f.K)}}).next(()=>z.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function eo(n){return new z((e,t)=>{n.onsuccess=r=>{const a=r.target.result;e(a)},n.onerror=r=>{const a=bE(r.target.error);t(a)}})}let aA=!1;function bE(n){const e=oi.C(At());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new ae("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return aA||(aA=!0,setTimeout(()=>{throw r},0)),r}}return n}const wh="IndexBackfiller";class P4{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){oe(wh,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.ee.ne();oe(wh,`Documents written: ${t}`)}catch(t){ca(t)?oe(wh,"Ignoring IndexedDB error during index backfill: ",t):await ua(t)}await this.te(6e4)})}}class N4{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){const r=new Set;let a=t,o=!0;return z.doWhile(()=>o===!0&&a>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(u=>{if(u!==null&&!r.has(u))return oe(wh,`Processing collection: ${u}`),this.ie(e,u,a).next(d=>{a-=d,r.add(u)});o=!1})).next(()=>t-a)}ie(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(a=>this.localStore.localDocuments.getNextDocuments(e,t,a,r).next(o=>{const u=o.changes;return this.localStore.indexManager.updateIndexEntries(e,u).next(()=>this.se(a,o)).next(d=>(oe(wh,`Updating offset: ${d}`),this.localStore.indexManager.updateCollectionGroup(e,t,d))).next(()=>u.size)}))}se(e,t){let r=e;return t.changes.forEach((a,o)=>{const u=H1(o);TE(u,r)>0&&(r=u)}),new ir(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}jn.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=-1;function pd(n){return n==null}function Fh(n){return n===0&&1/n==-1/0}function Q1(n){return typeof n=="number"&&Number.isInteger(n)&&!Fh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp="";function An(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=oA(e)),e=k4(n.get(t),e);return oA(e)}function k4(n,e){let t=e;const r=n.length;for(let a=0;a<r;a++){const o=n.charAt(a);switch(o){case"\0":t+="";break;case Kp:t+="";break;default:t+=o}}return t}function oA(n){return n+Kp+""}function si(n){const e=n.length;if(ve(e>=2),e===2)return ve(n.charAt(0)===Kp&&n.charAt(1)===""),Fe.emptyPath();const t=e-2,r=[];let a="";for(let o=0;o<e;){const u=n.indexOf(Kp,o);switch((u<0||u>t)&&ye(),n.charAt(u+1)){case"":const d=n.substring(o,u);let f;a.length===0?f=d:(a+=d,f=a,a=""),r.push(f);break;case"":a+=n.substring(o,u),a+="\0";break;case"":a+=n.substring(o,u+1);break;default:ye()}o=u+2}return new Fe(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja="remoteDocuments",md="owner",Dl="owner",zh="mutationQueues",O4="userId",xr="mutations",lA="batchId",lo="userMutationsIndex",uA=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(n,e){return[n,An(e)]}function Y1(n,e,t){return[n,An(e),t]}const V4={},au="documentMutations",Qp="remoteDocumentsV14",M4=["prefixPath","collectionGroup","readTime","documentId"],Ap="documentKeyIndex",L4=["prefixPath","collectionGroup","documentId"],W1="collectionGroupIndex",U4=["collectionGroup","readTime","prefixPath","documentId"],jh="remoteDocumentGlobal",av="remoteDocumentGlobalKey",ou="targets",X1="queryTargetsIndex",B4=["canonicalId","targetId"],lu="targetDocuments",F4=["targetId","path"],wE="documentTargetsIndex",z4=["path","targetId"],Yp="targetGlobalKey",go="targetGlobal",qh="collectionParents",j4=["collectionId","parent"],uu="clientMetadata",q4="clientId",km="bundles",H4="bundleId",Om="namedQueries",G4="name",IE="indexConfiguration",$4="indexId",ov="collectionGroupIndex",K4="collectionGroup",Wp="indexState",Q4=["indexId","uid"],Z1="sequenceNumberIndex",Y4=["uid","sequenceNumber"],Xp="indexEntries",W4=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],J1="documentKeyIndex",X4=["indexId","uid","orderedDocumentKey"],Vm="documentOverlays",Z4=["userId","collectionPath","documentId"],lv="collectionPathOverlayIndex",J4=["userId","collectionPath","largestBatchId"],eC="collectionGroupOverlayIndex",eB=["userId","collectionGroup","largestBatchId"],AE="globals",tB="name",tC=[zh,xr,au,Ja,ou,md,go,lu,uu,jh,qh,km,Om],nB=[...tC,Vm],nC=[zh,xr,au,Qp,ou,md,go,lu,uu,jh,qh,km,Om,Vm],rC=nC,SE=[...rC,IE,Wp,Xp],rB=SE,iB=[...SE,AE];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv extends $1{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function Zt(n,e){const t=me(n);return oi.M(t.ue,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ha(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function iC(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t){this.comparator=e,this.root=t||mn.EMPTY}insert(e,t){return new ct(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,mn.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const a=this.comparator(e,r.key);if(a===0)return t+r.left.size;a<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ip(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ip(this.root,e,this.comparator,!1)}getReverseIterator(){return new ip(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ip(this.root,e,this.comparator,!0)}}class ip{constructor(e,t,r,a){this.isReverse=a,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&a&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mn{constructor(e,t,r,a,o){this.key=e,this.value=t,this.color=r??mn.RED,this.left=a??mn.EMPTY,this.right=o??mn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,a,o){return new mn(e??this.key,t??this.value,r??this.color,a??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let a=this;const o=r(e,a.key);return a=o<0?a.copy(null,null,null,a.left.insert(e,t,r),null):o===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,r)),a.fixUp()}removeMin(){if(this.left.isEmpty())return mn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return mn.EMPTY;r=a.right.min(),a=a.copy(r.key,r.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ye();const e=this.left.check();if(e!==this.right.check())throw ye();return e+(this.isRed()?0:1)}}mn.EMPTY=null,mn.RED=!0,mn.BLACK=!1;mn.EMPTY=new class{constructor(){this.size=0}get key(){throw ye()}get value(){throw ye()}get color(){throw ye()}get left(){throw ye()}get right(){throw ye()}copy(e,t,r,a,o){return this}insert(e,t,r){return new mn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const a=r.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new hA(this.data.getIterator())}getIteratorFrom(e){return new hA(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,o=r.getNext().key;if(this.comparator(a,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new nt(this.comparator);return t.data=e,t}}class hA{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Pl(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new qn([])}unionWith(e){let t=new nt(_t.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new qn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return iu(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sB(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new sC("Invalid base64 string: "+o):o}}(e);return new Dt(t)}static fromUint8Array(e){const t=function(a){let o="";for(let u=0;u<a.length;++u)o+=String.fromCharCode(a[u]);return o}(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let a=0;a<t.length;a++)r[a]=t.charCodeAt(a);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const aB=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wi(n){if(ve(!!n),typeof n=="string"){let e=0;const t=aB.exec(n);if(ve(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:gt(n.seconds),nanos:gt(n.nanos)}}function gt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xi(n){return typeof n=="string"?Dt.fromBase64String(n):Dt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC="server_timestamp",oC="__type__",lC="__previous_value__",uC="__local_write_time__";function Mm(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[oC])===null||t===void 0?void 0:t.stringValue)===aC}function Lm(n){const e=n.mapValue.fields[lC];return Mm(e)?Lm(e):e}function Hh(n){const e=Wi(n.mapValue.fields[uC].timestampValue);return new Et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oB{constructor(e,t,r,a,o,u,d,f,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=a,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=m}}const cv="(default)";class Js{constructor(e,t){this.projectId=e,this.database=t||cv}static empty(){return new Js("","")}get isDefaultDatabase(){return this.database===cv}isEqual(e){return e instanceof Js&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="__type__",cC="__max__",zs={mapValue:{fields:{__type__:{stringValue:cC}}}},CE="__vector__",cu="value",Sp={nullValue:"NULL_VALUE"};function ea(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Mm(n)?4:hC(n)?9007199254740991:Um(n)?10:11:ye()}function fi(n,e){if(n===e)return!0;const t=ea(n);if(t!==ea(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Hh(n).isEqual(Hh(e));case 3:return function(a,o){if(typeof a.timestampValue=="string"&&typeof o.timestampValue=="string"&&a.timestampValue.length===o.timestampValue.length)return a.timestampValue===o.timestampValue;const u=Wi(a.timestampValue),d=Wi(o.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,o){return Xi(a.bytesValue).isEqual(Xi(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,o){return gt(a.geoPointValue.latitude)===gt(o.geoPointValue.latitude)&&gt(a.geoPointValue.longitude)===gt(o.geoPointValue.longitude)}(n,e);case 2:return function(a,o){if("integerValue"in a&&"integerValue"in o)return gt(a.integerValue)===gt(o.integerValue);if("doubleValue"in a&&"doubleValue"in o){const u=gt(a.doubleValue),d=gt(o.doubleValue);return u===d?Fh(u)===Fh(d):isNaN(u)&&isNaN(d)}return!1}(n,e);case 9:return iu(n.arrayValue.values||[],e.arrayValue.values||[],fi);case 10:case 11:return function(a,o){const u=a.mapValue.fields||{},d=o.mapValue.fields||{};if(cA(u)!==cA(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!fi(u[f],d[f])))return!1;return!0}(n,e);default:return ye()}}function Gh(n,e){return(n.values||[]).find(t=>fi(t,e))!==void 0}function ta(n,e){if(n===e)return 0;const t=ea(n),r=ea(e);if(t!==r)return Ce(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(n.booleanValue,e.booleanValue);case 2:return function(o,u){const d=gt(o.integerValue||o.doubleValue),f=gt(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1}(n,e);case 3:return dA(n.timestampValue,e.timestampValue);case 4:return dA(Hh(n),Hh(e));case 5:return iv(n.stringValue,e.stringValue);case 6:return function(o,u){const d=Xi(o),f=Xi(u);return d.compareTo(f)}(n.bytesValue,e.bytesValue);case 7:return function(o,u){const d=o.split("/"),f=u.split("/");for(let m=0;m<d.length&&m<f.length;m++){const y=Ce(d[m],f[m]);if(y!==0)return y}return Ce(d.length,f.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,u){const d=Ce(gt(o.latitude),gt(u.latitude));return d!==0?d:Ce(gt(o.longitude),gt(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return fA(n.arrayValue,e.arrayValue);case 10:return function(o,u){var d,f,m,y;const v=o.fields||{},b=u.fields||{},A=(d=v[cu])===null||d===void 0?void 0:d.arrayValue,x=(f=b[cu])===null||f===void 0?void 0:f.arrayValue,U=Ce(((m=A==null?void 0:A.values)===null||m===void 0?void 0:m.length)||0,((y=x==null?void 0:x.values)===null||y===void 0?void 0:y.length)||0);return U!==0?U:fA(A,x)}(n.mapValue,e.mapValue);case 11:return function(o,u){if(o===zs.mapValue&&u===zs.mapValue)return 0;if(o===zs.mapValue)return 1;if(u===zs.mapValue)return-1;const d=o.fields||{},f=Object.keys(d),m=u.fields||{},y=Object.keys(m);f.sort(),y.sort();for(let v=0;v<f.length&&v<y.length;++v){const b=iv(f[v],y[v]);if(b!==0)return b;const A=ta(d[f[v]],m[y[v]]);if(A!==0)return A}return Ce(f.length,y.length)}(n.mapValue,e.mapValue);default:throw ye()}}function dA(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ce(n,e);const t=Wi(n),r=Wi(e),a=Ce(t.seconds,r.seconds);return a!==0?a:Ce(t.nanos,r.nanos)}function fA(n,e){const t=n.values||[],r=e.values||[];for(let a=0;a<t.length&&a<r.length;++a){const o=ta(t[a],r[a]);if(o)return o}return Ce(t.length,r.length)}function hu(n){return hv(n)}function hv(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Wi(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Xi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return pe.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",a=!0;for(const o of t.values||[])a?a=!1:r+=",",r+=hv(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let a="{",o=!0;for(const u of r)o?o=!1:a+=",",a+=`${u}:${hv(t.fields[u])}`;return a+"}"}(n.mapValue):ye()}function Rp(n){switch(ea(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Lm(n);return e?16+Rp(e):16;case 5:return 2*n.stringValue.length;case 6:return Xi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((a,o)=>a+Rp(o),0)}(n.arrayValue);case 10:case 11:return function(r){let a=0;return ha(r.fields,(o,u)=>{a+=o.length+Rp(u)}),a}(n.mapValue);default:throw ye()}}function Eo(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function dv(n){return!!n&&"integerValue"in n}function $h(n){return!!n&&"arrayValue"in n}function pA(n){return!!n&&"nullValue"in n}function mA(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Cp(n){return!!n&&"mapValue"in n}function Um(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[RE])===null||t===void 0?void 0:t.stringValue)===CE}function Ih(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ha(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ih(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ih(n.arrayValue.values[t]);return e}return Object.assign({},n)}function hC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===cC}const dC={mapValue:{fields:{[RE]:{stringValue:CE},[cu]:{arrayValue:{}}}}};function lB(n){return"nullValue"in n?Sp:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Eo(Js.empty(),pe.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Um(n)?dC:{mapValue:{}}:ye()}function uB(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Eo(Js.empty(),pe.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?dC:"mapValue"in n?Um(n)?{mapValue:{}}:zs:ye()}function gA(n,e){const t=ta(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function yA(n,e){const t=ta(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.value=e}static empty(){return new gn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Cp(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ih(t)}setAll(e){let t=_t.emptyPath(),r={},a=[];e.forEach((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,r,a),r={},a=[],t=d.popLast()}u?r[d.lastSegment()]=Ih(u):a.push(d.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,a)}delete(e){const t=this.field(e.popLast());Cp(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let a=t.mapValue.fields[e.get(r)];Cp(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,r){ha(t,(a,o)=>e[a]=o);for(const a of r)delete e[a]}clone(){return new gn(Ih(this.value))}}function fC(n){const e=[];return ha(n.fields,(t,r)=>{const a=new _t([t]);if(Cp(r)){const o=fC(r.mapValue).fields;if(o.length===0)e.push(a);else for(const u of o)e.push(a.child(u))}else e.push(a)}),new qn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t,r,a,o,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=a,this.createTime=o,this.data=u,this.documentState=d}static newInvalidDocument(e){return new dt(e,0,Te.min(),Te.min(),Te.min(),gn.empty(),0)}static newFoundDocument(e,t,r,a){return new dt(e,1,t,Te.min(),r,a,0)}static newNoDocument(e,t){return new dt(e,2,t,Te.min(),Te.min(),gn.empty(),0)}static newUnknownDocument(e,t){return new dt(e,3,t,Te.min(),Te.min(),gn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t){this.position=e,this.inclusive=t}}function _A(n,e,t){let r=0;for(let a=0;a<n.position.length;a++){const o=e[a],u=n.position[a];if(o.field.isKeyField()?r=pe.comparator(pe.fromName(u.referenceValue),t.key):r=ta(u,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function vA(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!fi(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,t="asc"){this.field=e,this.dir=t}}function cB(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{}class ze extends pC{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new hB(e,t,r):t==="array-contains"?new pB(e,r):t==="in"?new EC(e,r):t==="not-in"?new mB(e,r):t==="array-contains-any"?new gB(e,r):new ze(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new dB(e,r):new fB(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ta(t,this.value)):t!==null&&ea(this.value)===ea(t)&&this.matchesComparison(ta(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tt extends pC{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new tt(e,t)}matches(e){return du(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function du(n){return n.op==="and"}function fv(n){return n.op==="or"}function xE(n){return mC(n)&&du(n)}function mC(n){for(const e of n.filters)if(e instanceof tt)return!1;return!0}function pv(n){if(n instanceof ze)return n.field.canonicalString()+n.op.toString()+hu(n.value);if(xE(n))return n.filters.map(e=>pv(e)).join(",");{const e=n.filters.map(t=>pv(t)).join(",");return`${n.op}(${e})`}}function gC(n,e){return n instanceof ze?function(r,a){return a instanceof ze&&r.op===a.op&&r.field.isEqual(a.field)&&fi(r.value,a.value)}(n,e):n instanceof tt?function(r,a){return a instanceof tt&&r.op===a.op&&r.filters.length===a.filters.length?r.filters.reduce((o,u,d)=>o&&gC(u,a.filters[d]),!0):!1}(n,e):void ye()}function yC(n,e){const t=n.filters.concat(e);return tt.create(t,n.op)}function _C(n){return n instanceof ze?function(t){return`${t.field.canonicalString()} ${t.op} ${hu(t.value)}`}(n):n instanceof tt?function(t){return t.op.toString()+" {"+t.getFilters().map(_C).join(" ,")+"}"}(n):"Filter"}class hB extends ze{constructor(e,t,r){super(e,t,r),this.key=pe.fromName(r.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class dB extends ze{constructor(e,t){super(e,"in",t),this.keys=vC("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class fB extends ze{constructor(e,t){super(e,"not-in",t),this.keys=vC("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function vC(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>pe.fromName(r.referenceValue))}class pB extends ze{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return $h(t)&&Gh(t.arrayValue,this.value)}}class EC extends ze{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Gh(this.value.arrayValue,t)}}class mB extends ze{constructor(e,t){super(e,"not-in",t)}matches(e){if(Gh(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Gh(this.value.arrayValue,t)}}class gB extends ze{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!$h(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Gh(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yB{constructor(e,t=null,r=[],a=[],o=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=a,this.limit=o,this.startAt=u,this.endAt=d,this.le=null}}function mv(n,e=null,t=[],r=[],a=null,o=null,u=null){return new yB(n,e,t,r,a,o,u)}function To(n){const e=me(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>pv(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),pd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>hu(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>hu(r)).join(",")),e.le=t}return e.le}function gd(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!cB(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!gC(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!vA(n.startAt,e.startAt)&&vA(n.endAt,e.endAt)}function Zp(n){return pe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Jp(n,e){return n.filters.filter(t=>t instanceof ze&&t.field.isEqual(e))}function EA(n,e,t){let r=Sp,a=!0;for(const o of Jp(n,e)){let u=Sp,d=!0;switch(o.op){case"<":case"<=":u=lB(o.value);break;case"==":case"in":case">=":u=o.value;break;case">":u=o.value,d=!1;break;case"!=":case"not-in":u=Sp}gA({value:r,inclusive:a},{value:u,inclusive:d})<0&&(r=u,a=d)}if(t!==null){for(let o=0;o<n.orderBy.length;++o)if(n.orderBy[o].field.isEqual(e)){const u=t.position[o];gA({value:r,inclusive:a},{value:u,inclusive:t.inclusive})<0&&(r=u,a=t.inclusive);break}}return{value:r,inclusive:a}}function TA(n,e,t){let r=zs,a=!0;for(const o of Jp(n,e)){let u=zs,d=!0;switch(o.op){case">=":case">":u=uB(o.value),d=!1;break;case"==":case"in":case"<=":u=o.value;break;case"<":u=o.value,d=!1;break;case"!=":case"not-in":u=zs}yA({value:r,inclusive:a},{value:u,inclusive:d})>0&&(r=u,a=d)}if(t!==null){for(let o=0;o<n.orderBy.length;++o)if(n.orderBy[o].field.isEqual(e)){const u=t.position[o];yA({value:r,inclusive:a},{value:u,inclusive:t.inclusive})>0&&(r=u,a=t.inclusive);break}}return{value:r,inclusive:a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t=null,r=[],a=[],o=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=a,this.limit=o,this.limitType=u,this.startAt=d,this.endAt=f,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function TC(n,e,t,r,a,o,u,d){return new ts(n,e,t,r,a,o,u,d)}function Nu(n){return new ts(n)}function bA(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function DE(n){return n.collectionGroup!==null}function Kl(n){const e=me(n);if(e.he===null){e.he=[];const t=new Set;for(const o of e.explicitOrderBy)e.he.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new nt(_t.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(m=>{m.isInequality()&&(d=d.add(m.field))})}),d})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.he.push(new Kh(o,r))}),t.has(_t.keyField().canonicalString())||e.he.push(new Kh(_t.keyField(),r))}return e.he}function On(n){const e=me(n);return e.Pe||(e.Pe=_B(e,Kl(n))),e.Pe}function _B(n,e){if(n.limitType==="F")return mv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const o=a.dir==="desc"?"asc":"desc";return new Kh(a.field,o)});const t=n.endAt?new na(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new na(n.startAt.position,n.startAt.inclusive):null;return mv(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function gv(n,e){const t=n.filters.concat([e]);return new ts(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function em(n,e,t){return new ts(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function yd(n,e){return gd(On(n),On(e))&&n.limitType===e.limitType}function bC(n){return`${To(On(n))}|lt:${n.limitType}`}function Ll(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(a=>_C(a)).join(", ")}]`),pd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(a=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(a)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(a=>hu(a)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(a=>hu(a)).join(",")),`Target(${r})`}(On(n))}; limitType=${n.limitType})`}function _d(n,e){return e.isFoundDocument()&&function(r,a){const o=a.key.path;return r.collectionGroup!==null?a.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):pe.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,a){for(const o of Kl(r))if(!o.field.isKeyField()&&a.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,a){for(const o of r.filters)if(!o.matches(a))return!1;return!0}(n,e)&&function(r,a){return!(r.startAt&&!function(u,d,f){const m=_A(u,d,f);return u.inclusive?m<=0:m<0}(r.startAt,Kl(r),a)||r.endAt&&!function(u,d,f){const m=_A(u,d,f);return u.inclusive?m>=0:m>0}(r.endAt,Kl(r),a))}(n,e)}function wC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function IC(n){return(e,t)=>{let r=!1;for(const a of Kl(n)){const o=vB(a,e,t);if(o!==0)return o;r=r||a.field.isKeyField()}return 0}}function vB(n,e,t){const r=n.field.isKeyField()?pe.comparator(e.key,t.key):function(o,u,d){const f=u.data.field(o),m=d.data.field(o);return f!==null&&m!==null?ta(f,m):ye()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ye()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[a,o]of r)if(this.equalsFn(a,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),a=this.inner[r];if(a===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],e))return void(a[o]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let a=0;a<r.length;a++)if(this.equalsFn(r[a][0],e))return r.length===1?delete this.inner[t]:r.splice(a,1),this.innerSize--,!0;return!1}forEach(e){ha(this.inner,(t,r)=>{for(const[a,o]of r)e(a,o)})}isEmpty(){return iC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EB=new ct(pe.comparator);function Hn(){return EB}const AC=new ct(pe.comparator);function fh(...n){let e=AC;for(const t of n)e=e.insert(t.key,t);return e}function SC(n){let e=AC;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ai(){return Ah()}function RC(){return Ah()}function Ah(){return new ns(n=>n.toString(),(n,e)=>n.isEqual(e))}const TB=new ct(pe.comparator),bB=new nt(pe.comparator);function Pe(...n){let e=bB;for(const t of n)e=e.add(t);return e}const wB=new nt(Ce);function PE(){return wB}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fh(e)?"-0":e}}function CC(n){return{integerValue:""+n}}function xC(n,e){return Q1(e)?CC(e):NE(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(){this._=void 0}}function IB(n,e,t){return n instanceof fu?function(a,o){const u={fields:{[oC]:{stringValue:aC},[uC]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return o&&Mm(o)&&(o=Lm(o)),o&&(u.fields[lC]=o),{mapValue:u}}(t,e):n instanceof bo?PC(n,e):n instanceof wo?NC(n,e):function(a,o){const u=DC(a,o),d=wA(u)+wA(a.Ie);return dv(u)&&dv(a.Ie)?CC(d):NE(a.serializer,d)}(n,e)}function AB(n,e,t){return n instanceof bo?PC(n,e):n instanceof wo?NC(n,e):t}function DC(n,e){return n instanceof pu?function(r){return dv(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class fu extends Bm{}class bo extends Bm{constructor(e){super(),this.elements=e}}function PC(n,e){const t=kC(e);for(const r of n.elements)t.some(a=>fi(a,r))||t.push(r);return{arrayValue:{values:t}}}class wo extends Bm{constructor(e){super(),this.elements=e}}function NC(n,e){let t=kC(e);for(const r of n.elements)t=t.filter(a=>!fi(a,r));return{arrayValue:{values:t}}}class pu extends Bm{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function wA(n){return gt(n.integerValue||n.doubleValue)}function kC(n){return $h(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,t){this.field=e,this.transform=t}}function SB(n,e){return n.field.isEqual(e.field)&&function(r,a){return r instanceof bo&&a instanceof bo||r instanceof wo&&a instanceof wo?iu(r.elements,a.elements,fi):r instanceof pu&&a instanceof pu?fi(r.Ie,a.Ie):r instanceof fu&&a instanceof fu}(n.transform,e.transform)}class RB{constructor(e,t){this.version=e,this.transformResults=t}}class vt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new vt}static exists(e){return new vt(void 0,e)}static updateTime(e){return new vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xp(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Fm{}function OC(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ou(n.key,vt.none()):new ku(n.key,n.data,vt.none());{const t=n.data,r=gn.empty();let a=new nt(_t.comparator);for(let o of e.fields)if(!a.has(o)){let u=t.field(o);u===null&&o.length>1&&(o=o.popLast(),u=t.field(o)),u===null?r.delete(o):r.set(o,u),a=a.add(o)}return new rs(n.key,r,new qn(a.toArray()),vt.none())}}function CB(n,e,t){n instanceof ku?function(a,o,u){const d=a.value.clone(),f=AA(a.fieldTransforms,o,u.transformResults);d.setAll(f),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,e,t):n instanceof rs?function(a,o,u){if(!xp(a.precondition,o))return void o.convertToUnknownDocument(u.version);const d=AA(a.fieldTransforms,o,u.transformResults),f=o.data;f.setAll(VC(a)),f.setAll(d),o.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(n,e,t):function(a,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function Sh(n,e,t,r){return n instanceof ku?function(o,u,d,f){if(!xp(o.precondition,u))return d;const m=o.value.clone(),y=SA(o.fieldTransforms,f,u);return m.setAll(y),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null}(n,e,t,r):n instanceof rs?function(o,u,d,f){if(!xp(o.precondition,u))return d;const m=SA(o.fieldTransforms,f,u),y=u.data;return y.setAll(VC(o)),y.setAll(m),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),d===null?null:d.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,e,t,r):function(o,u,d){return xp(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d}(n,e,t)}function xB(n,e){let t=null;for(const r of n.fieldTransforms){const a=e.data.field(r.field),o=DC(r.transform,a||null);o!=null&&(t===null&&(t=gn.empty()),t.set(r.field,o))}return t||null}function IA(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,a){return r===void 0&&a===void 0||!(!r||!a)&&iu(r,a,(o,u)=>SB(o,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ku extends Fm{constructor(e,t,r,a=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class rs extends Fm{constructor(e,t,r,a,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=a,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function VC(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function AA(n,e,t){const r=new Map;ve(n.length===t.length);for(let a=0;a<t.length;a++){const o=n[a],u=o.transform,d=e.data.field(o.field);r.set(o.field,AB(u,d,t[a]))}return r}function SA(n,e,t){const r=new Map;for(const a of n){const o=a.transform,u=t.data.field(a.field);r.set(a.field,IB(o,u,e))}return r}class Ou extends Fm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kE extends Fm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,t,r,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=a}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const o=this.mutations[a];o.key.isEqual(e.key)&&CB(o,e,r[a])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Sh(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Sh(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=RC();return this.mutations.forEach(a=>{const o=e.get(a.key),u=o.overlayedDocument;let d=this.applyToLocalView(u,o.mutatedFields);d=t.has(a.key)?null:d;const f=OC(u,d);f!==null&&r.set(a.key,f),u.isValidDocument()||u.convertToNoDocument(Te.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&iu(this.mutations,e.mutations,(t,r)=>IA(t,r))&&iu(this.baseMutations,e.baseMutations,(t,r)=>IA(t,r))}}class VE{constructor(e,t,r,a){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=a}static from(e,t,r){ve(e.mutations.length===r.length);let a=function(){return TB}();const o=e.mutations;for(let u=0;u<o.length;u++)a=a.insert(o[u].key,r[u].version);return new VE(e,t,r,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DB{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qt,Ge;function MC(n){switch(n){case W.OK:return ye();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return ye()}}function LC(n){if(n===void 0)return Mt("GRPC error has no .code"),W.UNKNOWN;switch(n){case qt.OK:return W.OK;case qt.CANCELLED:return W.CANCELLED;case qt.UNKNOWN:return W.UNKNOWN;case qt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case qt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case qt.INTERNAL:return W.INTERNAL;case qt.UNAVAILABLE:return W.UNAVAILABLE;case qt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case qt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case qt.NOT_FOUND:return W.NOT_FOUND;case qt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case qt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case qt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case qt.ABORTED:return W.ABORTED;case qt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case qt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case qt.DATA_LOSS:return W.DATA_LOSS;default:return ye()}}(Ge=qt||(qt={}))[Ge.OK=0]="OK",Ge[Ge.CANCELLED=1]="CANCELLED",Ge[Ge.UNKNOWN=2]="UNKNOWN",Ge[Ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ge[Ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ge[Ge.NOT_FOUND=5]="NOT_FOUND",Ge[Ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ge[Ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ge[Ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ge[Ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ge[Ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ge[Ge.ABORTED=10]="ABORTED",Ge[Ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ge[Ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ge[Ge.INTERNAL=13]="INTERNAL",Ge[Ge.UNAVAILABLE=14]="UNAVAILABLE",Ge[Ge.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PB=new Gs([4294967295,4294967295],0);function RA(n){const e=EE().encode(n),t=new O1;return t.update(e),new Uint8Array(t.digest())}function CA(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),a=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Gs([t,r],0),new Gs([a,o],0)]}class LE{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ph(`Invalid padding: ${t}`);if(r<0)throw new ph(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ph(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ph(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Gs.fromNumber(this.Ee)}Ae(e,t,r){let a=e.add(t.multiply(Gs.fromNumber(r)));return a.compare(PB)===1&&(a=new Gs([a.getBits(0),a.getBits(1)],0)),a.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=RA(e),[r,a]=CA(t);for(let o=0;o<this.hashCount;o++){const u=this.Ae(r,a,o);if(!this.Re(u))return!1}return!0}static create(e,t,r){const a=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),u=new LE(o,a,t);return r.forEach(d=>u.insert(d)),u}insert(e){if(this.Ee===0)return;const t=RA(e),[r,a]=CA(t);for(let o=0;o<this.hashCount;o++){const u=this.Ae(r,a,o);this.Ve(u)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ph extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,t,r,a,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=a,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const a=new Map;return a.set(e,Td.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ed(Te.min(),a,new ct(Ce),Hn(),Pe())}}class Td{constructor(e,t,r,a,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=a,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Td(r,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,t,r,a){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=a}}class UC{constructor(e,t){this.targetId=e,this.ge=t}}class BC{constructor(e,t,r=Dt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=a}}class xA{constructor(){this.pe=0,this.ye=DA(),this.we=Dt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Pe(),t=Pe(),r=Pe();return this.ye.forEach((a,o)=>{switch(o){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:r=r.add(a);break;default:ye()}}),new Td(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=DA()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,ve(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class NB{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Hn(),this.$e=sp(),this.Ue=sp(),this.Ke=new ct(Ce)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:ye()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,a)=>{this.Je(a)&&t(a)})}Ze(e){const t=e.targetId,r=e.ge.count,a=this.Xe(t);if(a){const o=a.target;if(Zp(o))if(r===0){const u=new pe(o.path);this.ze(t,u,dt.newNoDocument(u,Te.min()))}else ve(r===1);else{const u=this.et(t);if(u!==r){const d=this.tt(e),f=d?this.nt(d,e,u):1;if(f!==0){this.Ye(t);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,m)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:a=0},hashCount:o=0}=t;let u,d;try{u=Xi(r).toUint8Array()}catch(f){if(f instanceof sC)return di("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new LE(u,a,o)}catch(f){return di(f instanceof ph?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.Ee===0?null:d}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let a=0;return r.forEach(o=>{const u=this.ke.it(),d=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;e.mightContain(d)||(this.ze(t,o,null),a++)}),a}ot(e){const t=new Map;this.qe.forEach((o,u)=>{const d=this.Xe(u);if(d){if(o.current&&Zp(d.target)){const f=new pe(d.target.path);this._t(f).has(u)||this.ut(u,f)||this.ze(u,f,dt.newNoDocument(f,e))}o.ve&&(t.set(u,o.Fe()),o.Me())}});let r=Pe();this.Ue.forEach((o,u)=>{let d=!0;u.forEachWhile(f=>{const m=this.Xe(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(r=r.add(o))}),this.Qe.forEach((o,u)=>u.setReadTime(e));const a=new Ed(e,t,this.Ke,this.Qe,r);return this.Qe=Hn(),this.$e=sp(),this.Ue=sp(),this.Ke=new ct(Ce),a}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const a=this.He(e);this.ut(e,t)?a.xe(t,1):a.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new xA,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new nt(Ce),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new nt(Ce),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new xA),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function sp(){return new ct(pe.comparator)}function DA(){return new ct(pe.comparator)}const kB={asc:"ASCENDING",desc:"DESCENDING"},OB={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},VB={and:"AND",or:"OR"};class MB{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function yv(n,e){return n.useProto3Json||pd(e)?e:{value:e}}function mu(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function FC(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function LB(n,e){return mu(n,e.toTimestamp())}function Lt(n){return ve(!!n),Te.fromTimestamp(function(t){const r=Wi(t);return new Et(r.seconds,r.nanos)}(n))}function UE(n,e){return _v(n,e).canonicalString()}function _v(n,e){const t=function(a){return new Fe(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function zC(n){const e=Fe.fromString(n);return ve(XC(e)),e}function Qh(n,e){return UE(n.databaseId,e.path)}function li(n,e){const t=zC(e);if(t.get(1)!==n.databaseId.projectId)throw new ae(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ae(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new pe(HC(t))}function jC(n,e){return UE(n.databaseId,e)}function qC(n){const e=zC(n);return e.length===4?Fe.emptyPath():HC(e)}function vv(n){return new Fe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function HC(n){return ve(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function PA(n,e,t){return{name:Qh(n,e),fields:t.value.mapValue.fields}}function GC(n,e,t){const r=li(n,e.name),a=Lt(e.updateTime),o=e.createTime?Lt(e.createTime):Te.min(),u=new gn({mapValue:{fields:e.fields}}),d=dt.newFoundDocument(r,a,o,u);return t&&d.setHasCommittedMutations(),t?d.setHasCommittedMutations():d}function UB(n,e){return"found"in e?function(r,a){ve(!!a.found),a.found.name,a.found.updateTime;const o=li(r,a.found.name),u=Lt(a.found.updateTime),d=a.found.createTime?Lt(a.found.createTime):Te.min(),f=new gn({mapValue:{fields:a.found.fields}});return dt.newFoundDocument(o,u,d,f)}(n,e):"missing"in e?function(r,a){ve(!!a.missing),ve(!!a.readTime);const o=li(r,a.missing),u=Lt(a.readTime);return dt.newNoDocument(o,u)}(n,e):ye()}function BB(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:ye()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],o=function(m,y){return m.useProto3Json?(ve(y===void 0||typeof y=="string"),Dt.fromBase64String(y||"")):(ve(y===void 0||y instanceof Buffer||y instanceof Uint8Array),Dt.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&function(m){const y=m.code===void 0?W.UNKNOWN:LC(m.code);return new ae(y,m.message||"")}(u);t=new BC(r,a,o,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const a=li(n,r.document.name),o=Lt(r.document.updateTime),u=r.document.createTime?Lt(r.document.createTime):Te.min(),d=new gn({mapValue:{fields:r.document.fields}}),f=dt.newFoundDocument(a,o,u,d),m=r.targetIds||[],y=r.removedTargetIds||[];t=new Dp(m,y,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const a=li(n,r.document),o=r.readTime?Lt(r.readTime):Te.min(),u=dt.newNoDocument(a,o),d=r.removedTargetIds||[];t=new Dp([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const a=li(n,r.document),o=r.removedTargetIds||[];t=new Dp([],o,a,null)}else{if(!("filter"in e))return ye();{e.filter;const r=e.filter;r.targetId;const{count:a=0,unchangedNames:o}=r,u=new DB(a,o),d=r.targetId;t=new UC(d,u)}}return t}function Yh(n,e){let t;if(e instanceof ku)t={update:PA(n,e.key,e.value)};else if(e instanceof Ou)t={delete:Qh(n,e.key)};else if(e instanceof rs)t={update:PA(n,e.key,e.data),updateMask:GB(e.fieldMask)};else{if(!(e instanceof kE))return ye();t={verify:Qh(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,u){const d=u.transform;if(d instanceof fu)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof bo)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof wo)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof pu)return{fieldPath:u.field.canonicalString(),increment:d.Ie};throw ye()}(0,r))),e.precondition.isNone||(t.currentDocument=function(a,o){return o.updateTime!==void 0?{updateTime:LB(a,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:ye()}(n,e.precondition)),t}function Ev(n,e){const t=e.currentDocument?function(o){return o.updateTime!==void 0?vt.updateTime(Lt(o.updateTime)):o.exists!==void 0?vt.exists(o.exists):vt.none()}(e.currentDocument):vt.none(),r=e.updateTransforms?e.updateTransforms.map(a=>function(u,d){let f=null;if("setToServerValue"in d)ve(d.setToServerValue==="REQUEST_TIME"),f=new fu;else if("appendMissingElements"in d){const y=d.appendMissingElements.values||[];f=new bo(y)}else if("removeAllFromArray"in d){const y=d.removeAllFromArray.values||[];f=new wo(y)}else"increment"in d?f=new pu(u,d.increment):ye();const m=_t.fromServerFormat(d.fieldPath);return new vd(m,f)}(n,a)):[];if(e.update){e.update.name;const a=li(n,e.update.name),o=new gn({mapValue:{fields:e.update.fields}});if(e.updateMask){const u=function(f){const m=f.fieldPaths||[];return new qn(m.map(y=>_t.fromServerFormat(y)))}(e.updateMask);return new rs(a,o,u,t,r)}return new ku(a,o,t,r)}if(e.delete){const a=li(n,e.delete);return new Ou(a,t)}if(e.verify){const a=li(n,e.verify);return new kE(a,t)}return ye()}function FB(n,e){return n&&n.length>0?(ve(e!==void 0),n.map(t=>function(a,o){let u=a.updateTime?Lt(a.updateTime):Lt(o);return u.isEqual(Te.min())&&(u=Lt(o)),new RB(u,a.transformResults||[])}(t,e))):[]}function $C(n,e){return{documents:[jC(n,e.path)]}}function KC(n,e){const t={structuredQuery:{}},r=e.path;let a;e.collectionGroup!==null?(a=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=jC(n,a);const o=function(m){if(m.length!==0)return WC(tt.create(m,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const u=function(m){if(m.length!==0)return m.map(y=>function(b){return{field:Ul(b.field),direction:jB(b.dir)}}(y))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=yv(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{ht:t,parent:a}}function QC(n){let e=qC(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let a=null;if(r>0){ve(r===1);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let o=[];t.where&&(o=function(v){const b=YC(v);return b instanceof tt&&xE(b)?b.getFilters():[b]}(t.where));let u=[];t.orderBy&&(u=function(v){return v.map(b=>function(x){return new Kh(Bl(x.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(b))}(t.orderBy));let d=null;t.limit&&(d=function(v){let b;return b=typeof v=="object"?v.value:v,pd(b)?null:b}(t.limit));let f=null;t.startAt&&(f=function(v){const b=!!v.before,A=v.values||[];return new na(A,b)}(t.startAt));let m=null;return t.endAt&&(m=function(v){const b=!v.before,A=v.values||[];return new na(A,b)}(t.endAt)),TC(e,a,u,o,d,"F",f,m)}function zB(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function YC(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Bl(t.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const a=Bl(t.unaryFilter.field);return ze.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Bl(t.unaryFilter.field);return ze.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Bl(t.unaryFilter.field);return ze.create(u,"!=",{nullValue:"NULL_VALUE"});default:return ye()}}(n):n.fieldFilter!==void 0?function(t){return ze.create(Bl(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ye()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return tt.create(t.compositeFilter.filters.map(r=>YC(r)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return ye()}}(t.compositeFilter.op))}(n):ye()}function jB(n){return kB[n]}function qB(n){return OB[n]}function HB(n){return VB[n]}function Ul(n){return{fieldPath:n.canonicalString()}}function Bl(n){return _t.fromServerFormat(n.fieldPath)}function WC(n){return n instanceof ze?function(t){if(t.op==="=="){if(mA(t.value))return{unaryFilter:{field:Ul(t.field),op:"IS_NAN"}};if(pA(t.value))return{unaryFilter:{field:Ul(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(mA(t.value))return{unaryFilter:{field:Ul(t.field),op:"IS_NOT_NAN"}};if(pA(t.value))return{unaryFilter:{field:Ul(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ul(t.field),op:qB(t.op),value:t.value}}}(n):n instanceof tt?function(t){const r=t.getFilters().map(a=>WC(a));return r.length===1?r[0]:{compositeFilter:{op:HB(t.op),filters:r}}}(n):ye()}function GB(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function XC(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t,r,a,o=Te.min(),u=Te.min(),d=Dt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=a,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new Hi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Hi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e){this.Tt=e}}function $B(n,e){let t;if(e.document)t=GC(n.Tt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=pe.fromSegments(e.noDocument.path),a=Ao(e.noDocument.readTime);t=dt.newNoDocument(r,a),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return ye();{const r=pe.fromSegments(e.unknownDocument.path),a=Ao(e.unknownDocument.version);t=dt.newUnknownDocument(r,a)}}return e.readTime&&t.setReadTime(function(a){const o=new Et(a[0],a[1]);return Te.fromTimestamp(o)}(e.readTime)),t}function NA(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:tm(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(o,u){return{name:Qh(o,u.key),fields:u.data.value.mapValue.fields,updateTime:mu(o,u.version.toTimestamp()),createTime:mu(o,u.createTime.toTimestamp())}}(n.Tt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Io(e.version)};else{if(!e.isUnknownDocument())return ye();r.unknownDocument={path:t.path.toArray(),version:Io(e.version)}}return r}function tm(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Io(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ao(n){const e=new Et(n.seconds,n.nanoseconds);return Te.fromTimestamp(e)}function to(n,e){const t=(e.baseMutations||[]).map(o=>Ev(n.Tt,o));for(let o=0;o<e.mutations.length-1;++o){const u=e.mutations[o];if(o+1<e.mutations.length&&e.mutations[o+1].transform!==void 0){const d=e.mutations[o+1];u.updateTransforms=d.transform.fieldTransforms,e.mutations.splice(o+1,1),++o}}const r=e.mutations.map(o=>Ev(n.Tt,o)),a=Et.fromMillis(e.localWriteTimeMs);return new OE(e.batchId,a,t,r)}function mh(n){const e=Ao(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Ao(n.lastLimboFreeSnapshotVersion):Te.min();let r;return r=function(o){return o.documents!==void 0}(n.query)?function(o){return ve(o.documents.length===1),On(Nu(qC(o.documents[0])))}(n.query):function(o){return On(QC(o))}(n.query),new Hi(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Dt.fromBase64String(n.resumeToken))}function JC(n,e){const t=Io(e.snapshotVersion),r=Io(e.lastLimboFreeSnapshotVersion);let a;a=Zp(e.target)?$C(n.Tt,e.target):KC(n.Tt,e.target).ht;const o=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:To(e.target),readTime:t,resumeToken:o,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:a}}function BE(n){const e=QC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?em(e,e.limit,"L"):e}function C_(n,e){return new ME(e.largestBatchId,Ev(n.Tt,e.overlayMutation))}function kA(n,e){const t=e.path.lastSegment();return[n,An(e.path.popLast()),t]}function OA(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Io(r.readTime),documentKey:An(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KB{getBundleMetadata(e,t){return VA(e).get(t).next(r=>{if(r)return function(o){return{id:o.bundleId,createTime:Ao(o.createTime),version:o.version}}(r)})}saveBundleMetadata(e,t){return VA(e).put(function(a){return{bundleId:a.id,createTime:Io(Lt(a.createTime)),version:a.version}}(t))}getNamedQuery(e,t){return MA(e).get(t).next(r=>{if(r)return function(o){return{name:o.name,query:BE(o.bundledQuery),readTime:Ao(o.readTime)}}(r)})}saveNamedQuery(e,t){return MA(e).put(function(a){return{name:a.name,readTime:Io(Lt(a.readTime)),bundledQuery:a.bundledQuery}}(t))}}function VA(n){return Zt(n,km)}function MA(n){return Zt(n,Om)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,t){this.serializer=e,this.userId=t}static It(e,t){const r=t.uid||"";return new zm(e,r)}getOverlay(e,t){return th(e).get(kA(this.userId,t)).next(r=>r?C_(this.serializer,r):null)}getOverlays(e,t){const r=ai();return z.forEach(t,a=>this.getOverlay(e,a).next(o=>{o!==null&&r.set(a,o)})).next(()=>r)}saveOverlays(e,t,r){const a=[];return r.forEach((o,u)=>{const d=new ME(t,u);a.push(this.Et(e,d))}),z.waitFor(a)}removeOverlaysForBatchId(e,t,r){const a=new Set;t.forEach(u=>a.add(An(u.getCollectionPath())));const o=[];return a.forEach(u=>{const d=IDBKeyRange.bound([this.userId,u,r],[this.userId,u,r+1],!1,!0);o.push(th(e).J(lv,d))}),z.waitFor(o)}getOverlaysForCollection(e,t,r){const a=ai(),o=An(t),u=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,Number.POSITIVE_INFINITY],!0);return th(e).G(lv,u).next(d=>{for(const f of d){const m=C_(this.serializer,f);a.set(m.getKey(),m)}return a})}getOverlaysForCollectionGroup(e,t,r,a){const o=ai();let u;const d=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return th(e).Z({index:eC,range:d},(f,m,y)=>{const v=C_(this.serializer,m);o.size()<a||v.largestBatchId===u?(o.set(v.getKey(),v),u=v.largestBatchId):y.done()}).next(()=>o)}Et(e,t){return th(e).put(function(a,o,u){const[d,f,m]=kA(o,u.mutation.key);return{userId:o,collectionPath:f,documentId:m,collectionGroup:u.mutation.key.getCollectionGroup(),largestBatchId:u.largestBatchId,overlayMutation:Yh(a.Tt,u.mutation)}}(this.serializer,this.userId,t))}}function th(n){return Zt(n,Vm)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QB{dt(e){return Zt(e,AE)}getSessionToken(e){return this.dt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Dt.fromUint8Array(r):Dt.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){}At(e,t){this.Rt(e,t),t.Vt()}Rt(e,t){if("nullValue"in e)this.ft(t,5);else if("booleanValue"in e)this.ft(t,10),t.gt(e.booleanValue?1:0);else if("integerValue"in e)this.ft(t,15),t.gt(gt(e.integerValue));else if("doubleValue"in e){const r=gt(e.doubleValue);isNaN(r)?this.ft(t,13):(this.ft(t,15),Fh(r)?t.gt(0):t.gt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.ft(t,20),typeof r=="string"&&(r=Wi(r)),t.yt(`${r.seconds||""}`),t.gt(r.nanos||0)}else if("stringValue"in e)this.wt(e.stringValue,t),this.St(t);else if("bytesValue"in e)this.ft(t,30),t.bt(Xi(e.bytesValue)),this.St(t);else if("referenceValue"in e)this.Dt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ft(t,45),t.gt(r.latitude||0),t.gt(r.longitude||0)}else"mapValue"in e?hC(e)?this.ft(t,Number.MAX_SAFE_INTEGER):Um(e)?this.vt(e.mapValue,t):(this.Ct(e.mapValue,t),this.St(t)):"arrayValue"in e?(this.Ft(e.arrayValue,t),this.St(t)):ye()}wt(e,t){this.ft(t,25),this.Mt(e,t)}Mt(e,t){t.yt(e)}Ct(e,t){const r=e.fields||{};this.ft(t,55);for(const a of Object.keys(r))this.wt(a,t),this.Rt(r[a],t)}vt(e,t){var r,a;const o=e.fields||{};this.ft(t,53);const u=cu,d=((a=(r=o[u].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.length)||0;this.ft(t,15),t.gt(gt(d)),this.wt(u,t),this.Rt(o[u],t)}Ft(e,t){const r=e.values||[];this.ft(t,50);for(const a of r)this.Rt(a,t)}Dt(e,t){this.ft(t,37),pe.fromName(e).path.forEach(r=>{this.ft(t,60),this.Mt(r,t)})}ft(e,t){e.gt(t)}St(e){e.gt(2)}}no.xt=new no;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=255;function YB(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function LA(n){const e=64-function(r){let a=0;for(let o=0;o<8;++o){const u=YB(255&r[o]);if(a+=u,u!==8)break}return a}(n);return Math.ceil(e/8)}class WB{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ot(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Nt(r.value),r=t.next();this.Bt()}Lt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.kt(r.value),r=t.next();this.qt()}Qt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Nt(r);else if(r<2048)this.Nt(960|r>>>6),this.Nt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Nt(480|r>>>12),this.Nt(128|63&r>>>6),this.Nt(128|63&r);else{const a=t.codePointAt(0);this.Nt(240|a>>>18),this.Nt(128|63&a>>>12),this.Nt(128|63&a>>>6),this.Nt(128|63&a)}}this.Bt()}$t(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.kt(r);else if(r<2048)this.kt(960|r>>>6),this.kt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.kt(480|r>>>12),this.kt(128|63&r>>>6),this.kt(128|63&r);else{const a=t.codePointAt(0);this.kt(240|a>>>18),this.kt(128|63&a>>>12),this.kt(128|63&a>>>6),this.kt(128|63&a)}}this.qt()}Ut(e){const t=this.Kt(e),r=LA(t);this.Wt(1+r),this.buffer[this.position++]=255&r;for(let a=t.length-r;a<t.length;++a)this.buffer[this.position++]=255&t[a]}Gt(e){const t=this.Kt(e),r=LA(t);this.Wt(1+r),this.buffer[this.position++]=~(255&r);for(let a=t.length-r;a<t.length;++a)this.buffer[this.position++]=~(255&t[a])}zt(){this.jt(Nl),this.jt(255)}Ht(){this.Jt(Nl),this.Jt(255)}reset(){this.position=0}seed(e){this.Wt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Yt(){return this.buffer.slice(0,this.position)}Kt(e){const t=function(o){const u=new DataView(new ArrayBuffer(8));return u.setFloat64(0,o,!1),new Uint8Array(u.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let a=1;a<t.length;++a)t[a]^=r?255:0;return t}Nt(e){const t=255&e;t===0?(this.jt(0),this.jt(255)):t===Nl?(this.jt(Nl),this.jt(0)):this.jt(t)}kt(e){const t=255&e;t===0?(this.Jt(0),this.Jt(255)):t===Nl?(this.Jt(Nl),this.Jt(0)):this.Jt(e)}Bt(){this.jt(0),this.jt(1)}qt(){this.Jt(0),this.Jt(1)}jt(e){this.Wt(1),this.buffer[this.position++]=e}Jt(e){this.Wt(1),this.buffer[this.position++]=~e}Wt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const a=new Uint8Array(r);a.set(this.buffer),this.buffer=a}}class XB{constructor(e){this.Zt=e}bt(e){this.Zt.Ot(e)}yt(e){this.Zt.Qt(e)}gt(e){this.Zt.Ut(e)}Vt(){this.Zt.zt()}}class ZB{constructor(e){this.Zt=e}bt(e){this.Zt.Lt(e)}yt(e){this.Zt.$t(e)}gt(e){this.Zt.Gt(e)}Vt(){this.Zt.Ht()}}class nh{constructor(){this.Zt=new WB,this.Xt=new XB(this.Zt),this.en=new ZB(this.Zt)}seed(e){this.Zt.seed(e)}tn(e){return e===0?this.Xt:this.en}Yt(){return this.Zt.Yt()}reset(){this.Zt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t,r,a){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=a}nn(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ro(this.indexId,this.documentKey,this.arrayValue,r)}}function Os(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=UA(n.arrayValue,e.arrayValue),t!==0?t:(t=UA(n.directionalValue,e.directionalValue),t!==0?t:pe.comparator(n.documentKey,e.documentKey)))}function UA(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e){this.rn=new nt((t,r)=>_t.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.sn=e.orderBy,this._n=[];for(const t of e.filters){const r=t;r.isInequality()?this.rn=this.rn.add(r):this._n.push(r)}}get an(){return this.rn.size>1}un(e){if(ve(e.collectionGroup===this.collectionId),this.an)return!1;const t=sv(e);if(t!==void 0&&!this.cn(t))return!1;const r=Za(e);let a=new Set,o=0,u=0;for(;o<r.length&&this.cn(r[o]);++o)a=a.add(r[o].fieldPath.canonicalString());if(o===r.length)return!0;if(this.rn.size>0){const d=this.rn.getIterator().getNext();if(!a.has(d.field.canonicalString())){const f=r[o];if(!this.ln(d,f)||!this.hn(this.sn[u++],f))return!1}++o}for(;o<r.length;++o){const d=r[o];if(u>=this.sn.length||!this.hn(this.sn[u++],d))return!1}return!0}Pn(){if(this.an)return null;let e=new nt(_t.comparator);const t=[];for(const r of this._n)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new wp(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new wp(r.field,0))}for(const r of this.sn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new wp(r.field,r.dir==="asc"?0:1)));return new $p($p.UNKNOWN_ID,this.collectionId,t,Bh.empty())}cn(e){for(const t of this._n)if(this.ln(t,e))return!0;return!1}ln(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}hn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(n){var e,t;if(ve(n instanceof ze||n instanceof tt),n instanceof ze){if(n instanceof EC){const a=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(o=>ze.create(n.field,"==",o)))||[];return tt.create(a,"or")}return n}const r=n.filters.map(a=>ex(a));return tt.create(r,n.op)}function JB(n){if(n.getFilters().length===0)return[];const e=wv(ex(n));return ve(tx(e)),Tv(e)||bv(e)?[e]:e.getFilters()}function Tv(n){return n instanceof ze}function bv(n){return n instanceof tt&&xE(n)}function tx(n){return Tv(n)||bv(n)||function(t){if(t instanceof tt&&fv(t)){for(const r of t.getFilters())if(!Tv(r)&&!bv(r))return!1;return!0}return!1}(n)}function wv(n){if(ve(n instanceof ze||n instanceof tt),n instanceof ze)return n;if(n.filters.length===1)return wv(n.filters[0]);const e=n.filters.map(r=>wv(r));let t=tt.create(e,n.op);return t=nm(t),tx(t)?t:(ve(t instanceof tt),ve(du(t)),ve(t.filters.length>1),t.filters.reduce((r,a)=>FE(r,a)))}function FE(n,e){let t;return ve(n instanceof ze||n instanceof tt),ve(e instanceof ze||e instanceof tt),t=n instanceof ze?e instanceof ze?function(a,o){return tt.create([a,o],"and")}(n,e):FA(n,e):e instanceof ze?FA(e,n):function(a,o){if(ve(a.filters.length>0&&o.filters.length>0),du(a)&&du(o))return yC(a,o.getFilters());const u=fv(a)?a:o,d=fv(a)?o:a,f=u.filters.map(m=>FE(m,d));return tt.create(f,"or")}(n,e),nm(t)}function FA(n,e){if(du(e))return yC(e,n.getFilters());{const t=e.filters.map(r=>FE(n,r));return tt.create(t,"or")}}function nm(n){if(ve(n instanceof ze||n instanceof tt),n instanceof ze)return n;const e=n.getFilters();if(e.length===1)return nm(e[0]);if(mC(n))return n;const t=e.map(a=>nm(a)),r=[];return t.forEach(a=>{a instanceof ze?r.push(a):a instanceof tt&&(a.op===n.op?r.push(...a.filters):r.push(a))}),r.length===1?r[0]:tt.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(){this.Tn=new zE}addToCollectionParentIndex(e,t){return this.Tn.add(t),z.resolve()}getCollectionParents(e,t){return z.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return z.resolve()}deleteFieldIndex(e,t){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,t){return z.resolve()}getDocumentsMatchingTarget(e,t){return z.resolve(null)}getIndexType(e,t){return z.resolve(0)}getFieldIndexes(e,t){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,t){return z.resolve(ir.min())}getMinOffsetFromCollectionGroup(e,t){return z.resolve(ir.min())}updateCollectionGroup(e,t,r){return z.resolve()}updateIndexEntries(e,t){return z.resolve()}}class zE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t]||new nt(Fe.comparator),o=!a.has(r);return this.index[t]=a.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t];return a&&a.has(r)}getEntries(e){return(this.index[e]||new nt(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA="IndexedDbIndexManager",ap=new Uint8Array(0);class t6{constructor(e,t){this.databaseId=t,this.In=new zE,this.En=new ns(r=>To(r),(r,a)=>gd(r,a)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.In.has(t)){const r=t.lastSegment(),a=t.popLast();e.addOnCommittedListener(()=>{this.In.add(t)});const o={collectionId:r,parent:An(a)};return jA(e).put(o)}return z.resolve()}getCollectionParents(e,t){const r=[],a=IDBKeyRange.bound([t,""],[j1(t),""],!1,!0);return jA(e).G(a).next(o=>{for(const u of o){if(u.collectionId!==t)break;r.push(si(u.parent))}return r})}addFieldIndex(e,t){const r=rh(e),a=function(d){return{indexId:d.indexId,collectionGroup:d.collectionGroup,fields:d.fields.map(f=>[f.fieldPath.canonicalString(),f.kind])}}(t);delete a.indexId;const o=r.add(a);if(t.indexState){const u=Ol(e);return o.next(d=>{u.put(OA(d,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return o.next()}deleteFieldIndex(e,t){const r=rh(e),a=Ol(e),o=kl(e);return r.delete(t.indexId).next(()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>o.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=rh(e),r=kl(e),a=Ol(e);return t.J().next(()=>r.J()).next(()=>a.J())}createTargetIndexes(e,t){return z.forEach(this.dn(t),r=>this.getIndexType(e,r).next(a=>{if(a===0||a===1){const o=new BA(r).Pn();if(o!=null)return this.addFieldIndex(e,o)}}))}getDocumentsMatchingTarget(e,t){const r=kl(e);let a=!0;const o=new Map;return z.forEach(this.dn(t),u=>this.An(e,u).next(d=>{a&&(a=!!d),o.set(u,d)})).next(()=>{if(a){let u=Pe();const d=[];return z.forEach(o,(f,m)=>{oe(zA,`Using index ${function($){return`id=${$.indexId}|cg=${$.collectionGroup}|f=${$.fields.map(le=>`${le.fieldPath}:${le.kind}`).join(",")}`}(f)} to execute ${To(t)}`);const y=function($,le){const re=sv(le);if(re===void 0)return null;for(const J of Jp($,re.fieldPath))switch(J.op){case"array-contains-any":return J.value.arrayValue.values||[];case"array-contains":return[J.value]}return null}(m,f),v=function($,le){const re=new Map;for(const J of Za(le))for(const R of Jp($,J.fieldPath))switch(R.op){case"==":case"in":re.set(J.fieldPath.canonicalString(),R.value);break;case"not-in":case"!=":return re.set(J.fieldPath.canonicalString(),R.value),Array.from(re.values())}return null}(m,f),b=function($,le){const re=[];let J=!0;for(const R of Za(le)){const S=R.kind===0?EA($,R.fieldPath,$.startAt):TA($,R.fieldPath,$.startAt);re.push(S.value),J&&(J=S.inclusive)}return new na(re,J)}(m,f),A=function($,le){const re=[];let J=!0;for(const R of Za(le)){const S=R.kind===0?TA($,R.fieldPath,$.endAt):EA($,R.fieldPath,$.endAt);re.push(S.value),J&&(J=S.inclusive)}return new na(re,J)}(m,f),x=this.Rn(f,m,b),U=this.Rn(f,m,A),M=this.Vn(f,m,v),H=this.mn(f.indexId,y,x,b.inclusive,U,A.inclusive,M);return z.forEach(H,Z=>r.H(Z,t.limit).next($=>{$.forEach(le=>{const re=pe.fromSegments(le.documentKey);u.has(re)||(u=u.add(re),d.push(re))})}))}).next(()=>d)}return z.resolve(null)})}dn(e){let t=this.En.get(e);return t||(e.filters.length===0?t=[e]:t=JB(tt.create(e.filters,"and")).map(r=>mv(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.En.set(e,t),t)}mn(e,t,r,a,o,u,d){const f=(t!=null?t.length:1)*Math.max(r.length,o.length),m=f/(t!=null?t.length:1),y=[];for(let v=0;v<f;++v){const b=t?this.fn(t[v/m]):ap,A=this.gn(e,b,r[v%m],a),x=this.pn(e,b,o[v%m],u),U=d.map(M=>this.gn(e,b,M,!0));y.push(...this.createRange(A,x,U))}return y}gn(e,t,r,a){const o=new ro(e,pe.empty(),t,r);return a?o:o.nn()}pn(e,t,r,a){const o=new ro(e,pe.empty(),t,r);return a?o.nn():o}An(e,t){const r=new BA(t),a=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,a).next(o=>{let u=null;for(const d of o)r.un(d)&&(!u||d.fields.length>u.fields.length)&&(u=d);return u})}getIndexType(e,t){let r=2;const a=this.dn(t);return z.forEach(a,o=>this.An(e,o).next(u=>{u?r!==0&&u.fields.length<function(f){let m=new nt(_t.comparator),y=!1;for(const v of f.filters)for(const b of v.getFlattenedFilters())b.field.isKeyField()||(b.op==="array-contains"||b.op==="array-contains-any"?y=!0:m=m.add(b.field));for(const v of f.orderBy)v.field.isKeyField()||(m=m.add(v.field));return m.size+(y?1:0)}(o)&&(r=1):r=0})).next(()=>function(u){return u.limit!==null}(t)&&a.length>1&&r===2?1:r)}yn(e,t){const r=new nh;for(const a of Za(e)){const o=t.data.field(a.fieldPath);if(o==null)return null;const u=r.tn(a.kind);no.xt.At(o,u)}return r.Yt()}fn(e){const t=new nh;return no.xt.At(e,t.tn(0)),t.Yt()}wn(e,t){const r=new nh;return no.xt.At(Eo(this.databaseId,t),r.tn(function(o){const u=Za(o);return u.length===0?0:u[u.length-1].kind}(e))),r.Yt()}Vn(e,t,r){if(r===null)return[];let a=[];a.push(new nh);let o=0;for(const u of Za(e)){const d=r[o++];for(const f of a)if(this.Sn(t,u.fieldPath)&&$h(d))a=this.bn(a,u,d);else{const m=f.tn(u.kind);no.xt.At(d,m)}}return this.Dn(a)}Rn(e,t,r){return this.Vn(e,t,r.position)}Dn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Yt();return t}bn(e,t,r){const a=[...e],o=[];for(const u of r.arrayValue.values||[])for(const d of a){const f=new nh;f.seed(d.Yt()),no.xt.At(u,f.tn(t.kind)),o.push(f)}return o}Sn(e,t){return!!e.filters.find(r=>r instanceof ze&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=rh(e),a=Ol(e);return(t?r.G(ov,IDBKeyRange.bound(t,t)):r.G()).next(o=>{const u=[];return z.forEach(o,d=>a.get([d.indexId,this.uid]).next(f=>{u.push(function(y,v){const b=v?new Bh(v.sequenceNumber,new ir(Ao(v.readTime),new pe(si(v.documentKey)),v.largestBatchId)):Bh.empty(),A=y.fields.map(([x,U])=>new wp(_t.fromServerFormat(x),U));return new $p(y.indexId,y.collectionGroup,A,b)}(d,f))})).next(()=>u)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,a)=>{const o=r.indexState.sequenceNumber-a.indexState.sequenceNumber;return o!==0?o:Ce(r.collectionGroup,a.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const a=rh(e),o=Ol(e);return this.vn(e).next(u=>a.G(ov,IDBKeyRange.bound(t,t)).next(d=>z.forEach(d,f=>o.put(OA(f.indexId,this.uid,u,r)))))}updateIndexEntries(e,t){const r=new Map;return z.forEach(t,(a,o)=>{const u=r.get(a.collectionGroup);return(u?z.resolve(u):this.getFieldIndexes(e,a.collectionGroup)).next(d=>(r.set(a.collectionGroup,d),z.forEach(d,f=>this.Cn(e,a,f).next(m=>{const y=this.Fn(o,f);return m.isEqual(y)?z.resolve():this.Mn(e,o,f,m,y)}))))})}xn(e,t,r,a){return kl(e).put({indexId:a.indexId,uid:this.uid,arrayValue:a.arrayValue,directionalValue:a.directionalValue,orderedDocumentKey:this.wn(r,t.key),documentKey:t.key.path.toArray()})}On(e,t,r,a){return kl(e).delete([a.indexId,this.uid,a.arrayValue,a.directionalValue,this.wn(r,t.key),t.key.path.toArray()])}Cn(e,t,r){const a=kl(e);let o=new nt(Os);return a.Z({index:J1,range:IDBKeyRange.only([r.indexId,this.uid,this.wn(r,t)])},(u,d)=>{o=o.add(new ro(r.indexId,t,d.arrayValue,d.directionalValue))}).next(()=>o)}Fn(e,t){let r=new nt(Os);const a=this.yn(t,e);if(a==null)return r;const o=sv(t);if(o!=null){const u=e.data.field(o.fieldPath);if($h(u))for(const d of u.arrayValue.values||[])r=r.add(new ro(t.indexId,e.key,this.fn(d),a))}else r=r.add(new ro(t.indexId,e.key,ap,a));return r}Mn(e,t,r,a,o){oe(zA,"Updating index entries for document '%s'",t.key);const u=[];return function(f,m,y,v,b){const A=f.getIterator(),x=m.getIterator();let U=Pl(A),M=Pl(x);for(;U||M;){let H=!1,Z=!1;if(U&&M){const $=y(U,M);$<0?Z=!0:$>0&&(H=!0)}else U!=null?Z=!0:H=!0;H?(v(M),M=Pl(x)):Z?(b(U),U=Pl(A)):(U=Pl(A),M=Pl(x))}}(a,o,Os,d=>{u.push(this.xn(e,t,r,d))},d=>{u.push(this.On(e,t,r,d))}),z.waitFor(u)}vn(e){let t=1;return Ol(e).Z({index:Z1,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,a,o)=>{o.done(),t=a.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((u,d)=>Os(u,d)).filter((u,d,f)=>!d||Os(u,f[d-1])!==0);const a=[];a.push(e);for(const u of r){const d=Os(u,e),f=Os(u,t);if(d===0)a[0]=e.nn();else if(d>0&&f<0)a.push(u),a.push(u.nn());else if(f>0)break}a.push(t);const o=[];for(let u=0;u<a.length;u+=2){if(this.Nn(a[u],a[u+1]))return[];const d=[a[u].indexId,this.uid,a[u].arrayValue,a[u].directionalValue,ap,[]],f=[a[u+1].indexId,this.uid,a[u+1].arrayValue,a[u+1].directionalValue,ap,[]];o.push(IDBKeyRange.bound(d,f))}return o}Nn(e,t){return Os(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(qA)}getMinOffset(e,t){return z.mapArray(this.dn(t),r=>this.An(e,r).next(a=>a||ye())).next(qA)}}function jA(n){return Zt(n,qh)}function kl(n){return Zt(n,Xp)}function rh(n){return Zt(n,IE)}function Ol(n){return Zt(n,Wp)}function qA(n){ve(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const a=n[r].indexState.offset;TE(a,e)<0&&(e=a),t<a.largestBatchId&&(t=a.largestBatchId)}return new ir(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},nx=41943040;class In{static withCacheSize(e){return new In(e,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rx(n,e,t){const r=n.store(xr),a=n.store(au),o=[],u=IDBKeyRange.only(t.batchId);let d=0;const f=r.Z({range:u},(y,v,b)=>(d++,b.delete()));o.push(f.next(()=>{ve(d===1)}));const m=[];for(const y of t.mutations){const v=Y1(e,y.key.path,t.batchId);o.push(a.delete(v)),m.push(y.key)}return z.waitFor(o).next(()=>m)}function rm(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw ye();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In.DEFAULT_COLLECTION_PERCENTILE=10,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,In.DEFAULT=new In(nx,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),In.DISABLED=new In(-1,0,0);class jm{constructor(e,t,r,a){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=a,this.Bn={}}static It(e,t,r,a){ve(e.uid!=="");const o=e.isAuthenticated()?e.uid:"";return new jm(o,t,r,a)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Vs(e).Z({index:lo,range:r},(a,o,u)=>{t=!1,u.done()}).next(()=>t)}addMutationBatch(e,t,r,a){const o=Fl(e),u=Vs(e);return u.add({}).next(d=>{ve(typeof d=="number");const f=new OE(d,t,r,a),m=function(A,x,U){const M=U.baseMutations.map(Z=>Yh(A.Tt,Z)),H=U.mutations.map(Z=>Yh(A.Tt,Z));return{userId:x,batchId:U.batchId,localWriteTimeMs:U.localWriteTime.toMillis(),baseMutations:M,mutations:H}}(this.serializer,this.userId,f),y=[];let v=new nt((b,A)=>Ce(b.canonicalString(),A.canonicalString()));for(const b of a){const A=Y1(this.userId,b.key.path,d);v=v.add(b.key.path.popLast()),y.push(u.put(m)),y.push(o.put(A,V4))}return v.forEach(b=>{y.push(this.indexManager.addToCollectionParentIndex(e,b))}),e.addOnCommittedListener(()=>{this.Bn[d]=f.keys()}),z.waitFor(y).next(()=>f)})}lookupMutationBatch(e,t){return Vs(e).get(t).next(r=>r?(ve(r.userId===this.userId),to(this.serializer,r)):null)}Ln(e,t){return this.Bn[t]?z.resolve(this.Bn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const a=r.keys();return this.Bn[t]=a,a}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=IDBKeyRange.lowerBound([this.userId,r]);let o=null;return Vs(e).Z({index:lo,range:a},(u,d,f)=>{d.userId===this.userId&&(ve(d.batchId>=r),o=to(this.serializer,d)),f.done()}).next(()=>o)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=$s;return Vs(e).Z({index:lo,range:t,reverse:!0},(a,o,u)=>{r=o.batchId,u.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,$s],[this.userId,Number.POSITIVE_INFINITY]);return Vs(e).G(lo,t).next(r=>r.map(a=>to(this.serializer,a)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Ip(this.userId,t.path),a=IDBKeyRange.lowerBound(r),o=[];return Fl(e).Z({range:a},(u,d,f)=>{const[m,y,v]=u,b=si(y);if(m===this.userId&&t.path.isEqual(b))return Vs(e).get(v).next(A=>{if(!A)throw ye();ve(A.userId===this.userId),o.push(to(this.serializer,A))});f.done()}).next(()=>o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new nt(Ce);const a=[];return t.forEach(o=>{const u=Ip(this.userId,o.path),d=IDBKeyRange.lowerBound(u),f=Fl(e).Z({range:d},(m,y,v)=>{const[b,A,x]=m,U=si(A);b===this.userId&&o.path.isEqual(U)?r=r.add(x):v.done()});a.push(f)}),z.waitFor(a).next(()=>this.kn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1,o=Ip(this.userId,r),u=IDBKeyRange.lowerBound(o);let d=new nt(Ce);return Fl(e).Z({range:u},(f,m,y)=>{const[v,b,A]=f,x=si(b);v===this.userId&&r.isPrefixOf(x)?x.length===a&&(d=d.add(A)):y.done()}).next(()=>this.kn(e,d))}kn(e,t){const r=[],a=[];return t.forEach(o=>{a.push(Vs(e).get(o).next(u=>{if(u===null)throw ye();ve(u.userId===this.userId),r.push(to(this.serializer,u))}))}),z.waitFor(a).next(()=>r)}removeMutationBatch(e,t){return rx(e.ue,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.qn(t.batchId)}),z.forEach(r,a=>this.referenceDelegate.markPotentiallyOrphaned(e,a))))}qn(e){delete this.Bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return z.resolve();const r=IDBKeyRange.lowerBound(function(u){return[u]}(this.userId)),a=[];return Fl(e).Z({range:r},(o,u,d)=>{if(o[0]===this.userId){const f=si(o[1]);a.push(f)}else d.done()}).next(()=>{ve(a.length===0)})})}containsKey(e,t){return ix(e,this.userId,t)}Qn(e){return sx(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:$s,lastStreamToken:""})}}function ix(n,e,t){const r=Ip(e,t.path),a=r[1],o=IDBKeyRange.lowerBound(r);let u=!1;return Fl(n).Z({range:o,Y:!0},(d,f,m)=>{const[y,v,b]=d;y===e&&v===a&&(u=!0),m.done()}).next(()=>u)}function Vs(n){return Zt(n,xr)}function Fl(n){return Zt(n,au)}function sx(n){return Zt(n,zh)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new So(0)}static Kn(){return new So(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Wn(e).next(t=>{const r=new So(t.highestTargetId);return t.highestTargetId=r.next(),this.Gn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Wn(e).next(t=>Te.fromTimestamp(new Et(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Wn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Wn(e).next(a=>(a.highestListenSequenceNumber=t,r&&(a.lastRemoteSnapshotVersion=r.toTimestamp()),t>a.highestListenSequenceNumber&&(a.highestListenSequenceNumber=t),this.Gn(e,a)))}addTargetData(e,t){return this.zn(e,t).next(()=>this.Wn(e).next(r=>(r.targetCount+=1,this.jn(t,r),this.Gn(e,r))))}updateTargetData(e,t){return this.zn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Vl(e).delete(t.targetId)).next(()=>this.Wn(e)).next(r=>(ve(r.targetCount>0),r.targetCount-=1,this.Gn(e,r)))}removeTargets(e,t,r){let a=0;const o=[];return Vl(e).Z((u,d)=>{const f=mh(d);f.sequenceNumber<=t&&r.get(f.targetId)===null&&(a++,o.push(this.removeTargetData(e,f)))}).next(()=>z.waitFor(o)).next(()=>a)}forEachTarget(e,t){return Vl(e).Z((r,a)=>{const o=mh(a);t(o)})}Wn(e){return GA(e).get(Yp).next(t=>(ve(t!==null),t))}Gn(e,t){return GA(e).put(Yp,t)}zn(e,t){return Vl(e).put(JC(this.serializer,t))}jn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Wn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=To(t),a=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let o=null;return Vl(e).Z({range:a,index:X1},(u,d,f)=>{const m=mh(d);gd(t,m.target)&&(o=m,f.done())}).next(()=>o)}addMatchingKeys(e,t,r){const a=[],o=Bs(e);return t.forEach(u=>{const d=An(u.path);a.push(o.put({targetId:r,path:d})),a.push(this.referenceDelegate.addReference(e,r,u))}),z.waitFor(a)}removeMatchingKeys(e,t,r){const a=Bs(e);return z.forEach(t,o=>{const u=An(o.path);return z.waitFor([a.delete([r,u]),this.referenceDelegate.removeReference(e,r,o)])})}removeMatchingKeysForTargetId(e,t){const r=Bs(e),a=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(a)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),a=Bs(e);let o=Pe();return a.Z({range:r,Y:!0},(u,d,f)=>{const m=si(u[1]),y=new pe(m);o=o.add(y)}).next(()=>o)}containsKey(e,t){const r=An(t.path),a=IDBKeyRange.bound([r],[j1(r)],!1,!0);let o=0;return Bs(e).Z({index:wE,Y:!0,range:a},([u,d],f,m)=>{u!==0&&(o++,m.done())}).next(()=>o>0)}lt(e,t){return Vl(e).get(t).next(r=>r?mh(r):null)}}function Vl(n){return Zt(n,ou)}function GA(n){return Zt(n,go)}function Bs(n){return Zt(n,lu)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A="LruGarbageCollector",r6=1048576;function KA([n,e],[t,r]){const a=Ce(n,t);return a===0?Ce(e,r):a}class i6{constructor(e){this.Hn=e,this.buffer=new nt(KA),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();KA(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ax{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){oe($A,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ca(t)?oe($A,"Ignoring IndexedDB error during garbage collection: ",t):await ua(t)}await this.er(3e5)})}}class s6{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return z.resolve(jn.ae);const r=new i6(t);return this.tr.forEachTarget(e,a=>r.Zn(a.sequenceNumber)).next(()=>this.tr.rr(e,a=>r.Zn(a))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(HA)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),HA):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,a,o,u,d,f,m;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),a=this.params.maximumSequenceNumbersToCollect):a=v,u=Date.now(),this.nthSequenceNumber(e,a))).next(v=>(r=v,d=Date.now(),this.removeTargets(e,r,t))).next(v=>(o=v,f=Date.now(),this.removeOrphanedDocuments(e,r))).next(v=>(m=Date.now(),Ml()<=Be.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${a} in `+(d-u)+`ms
	Removed ${o} targets in `+(f-d)+`ms
	Removed ${v} documents in `+(m-f)+`ms
Total Duration: ${m-y}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:o,documentsRemoved:v})))}}function ox(n,e){return new s6(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a6{constructor(e,t){this.db=e,this.garbageCollector=ox(this,t)}nr(e){const t=this.sr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}rr(e,t){return this._r(e,(r,a)=>t(a))}addReference(e,t,r){return op(e,r)}removeReference(e,t,r){return op(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return op(e,t)}ar(e,t){return function(a,o){let u=!1;return sx(a).X(d=>ix(a,d,o).next(f=>(f&&(u=!0),z.resolve(!f)))).next(()=>u)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),a=[];let o=0;return this._r(e,(u,d)=>{if(d<=t){const f=this.ar(e,u).next(m=>{if(!m)return o++,r.getEntry(e,u).next(()=>(r.removeEntry(u,Te.min()),Bs(e).delete(function(v){return[0,An(v.path)]}(u))))});a.push(f)}}).next(()=>z.waitFor(a)).next(()=>r.apply(e)).next(()=>o)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return op(e,t)}_r(e,t){const r=Bs(e);let a,o=jn.ae;return r.Z({index:wE},([u,d],{path:f,sequenceNumber:m})=>{u===0?(o!==jn.ae&&t(new pe(si(a)),o),o=m,a=f):o=jn.ae}).next(()=>{o!==jn.ae&&t(new pe(si(a)),o)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function op(n,e){return Bs(n).put(function(r,a){return{targetId:0,path:An(r.path),sequenceNumber:a}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(){this.changes=new ns(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?z.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o6{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Wa(e).put(r)}removeEntry(e,t,r){return Wa(e).delete(function(o,u){const d=o.path.toArray();return[d.slice(0,d.length-2),d[d.length-2],tm(u),d[d.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.ur(e,r)))}getEntry(e,t){let r=dt.newInvalidDocument(t);return Wa(e).Z({index:Ap,range:IDBKeyRange.only(ih(t))},(a,o)=>{r=this.cr(t,o)}).next(()=>r)}lr(e,t){let r={size:0,document:dt.newInvalidDocument(t)};return Wa(e).Z({index:Ap,range:IDBKeyRange.only(ih(t))},(a,o)=>{r={document:this.cr(t,o),size:rm(o)}}).next(()=>r)}getEntries(e,t){let r=Hn();return this.hr(e,t,(a,o)=>{const u=this.cr(a,o);r=r.insert(a,u)}).next(()=>r)}Pr(e,t){let r=Hn(),a=new ct(pe.comparator);return this.hr(e,t,(o,u)=>{const d=this.cr(o,u);r=r.insert(o,d),a=a.insert(o,rm(u))}).next(()=>({documents:r,Tr:a}))}hr(e,t,r){if(t.isEmpty())return z.resolve();let a=new nt(WA);t.forEach(f=>a=a.add(f));const o=IDBKeyRange.bound(ih(a.first()),ih(a.last())),u=a.getIterator();let d=u.getNext();return Wa(e).Z({index:Ap,range:o},(f,m,y)=>{const v=pe.fromSegments([...m.prefixPath,m.collectionGroup,m.documentId]);for(;d&&WA(d,v)<0;)r(d,null),d=u.getNext();d&&d.isEqual(v)&&(r(d,m),d=u.hasNext()?u.getNext():null),d?y.W(ih(d)):y.done()}).next(()=>{for(;d;)r(d,null),d=u.hasNext()?u.getNext():null})}getDocumentsMatchingQuery(e,t,r,a,o){const u=t.path,d=[u.popLast().toArray(),u.lastSegment(),tm(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],f=[u.popLast().toArray(),u.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Wa(e).G(IDBKeyRange.bound(d,f,!0)).next(m=>{o==null||o.incrementDocumentReadCount(m.length);let y=Hn();for(const v of m){const b=this.cr(pe.fromSegments(v.prefixPath.concat(v.collectionGroup,v.documentId)),v);b.isFoundDocument()&&(_d(t,b)||a.has(b.key))&&(y=y.insert(b.key,b))}return y})}getAllFromCollectionGroup(e,t,r,a){let o=Hn();const u=YA(t,r),d=YA(t,ir.max());return Wa(e).Z({index:W1,range:IDBKeyRange.bound(u,d,!0)},(f,m,y)=>{const v=this.cr(pe.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);o=o.insert(v.key,v),o.size===a&&y.done()}).next(()=>o)}newChangeBuffer(e){return new l6(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return QA(e).get(av).next(t=>(ve(!!t),t))}ur(e,t){return QA(e).put(av,t)}cr(e,t){if(t){const r=$B(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Te.min())))return r}return dt.newInvalidDocument(e)}}function ux(n){return new o6(n)}class l6 extends lx{constructor(e,t){super(),this.Ir=e,this.trackRemovals=t,this.Er=new ns(r=>r.toString(),(r,a)=>r.isEqual(a))}applyChanges(e){const t=[];let r=0,a=new nt((o,u)=>Ce(o.canonicalString(),u.canonicalString()));return this.changes.forEach((o,u)=>{const d=this.Er.get(o);if(t.push(this.Ir.removeEntry(e,o,d.readTime)),u.isValidDocument()){const f=NA(this.Ir.serializer,u);a=a.add(o.path.popLast());const m=rm(f);r+=m-d.size,t.push(this.Ir.addEntry(e,o,f))}else if(r-=d.size,this.trackRemovals){const f=NA(this.Ir.serializer,u.convertToNoDocument(Te.min()));t.push(this.Ir.addEntry(e,o,f))}}),a.forEach(o=>{t.push(this.Ir.indexManager.addToCollectionParentIndex(e,o))}),t.push(this.Ir.updateMetadata(e,r)),z.waitFor(t)}getFromCache(e,t){return this.Ir.lr(e,t).next(r=>(this.Er.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Ir.Pr(e,t).next(({documents:r,Tr:a})=>(a.forEach((o,u)=>{this.Er.set(o,{size:u,readTime:r.get(o).readTime})}),r))}}function QA(n){return Zt(n,jh)}function Wa(n){return Zt(n,Qp)}function ih(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function YA(n,e){const t=e.documentKey.path.toArray();return[n,tm(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function WA(n,e){const t=n.path.toArray(),r=e.path.toArray();let a=0;for(let o=0;o<t.length-2&&o<r.length-2;++o)if(a=Ce(t[o],r[o]),a)return a;return a=Ce(t.length,r.length),a||(a=Ce(t[t.length-2],r[r.length-2]),a||Ce(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u6{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e,t,r,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=a}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(r=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(r!==null&&Sh(r.mutation,a,qn.empty(),Et.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Pe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Pe()){const a=ai();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,r).next(o=>{let u=fh();return o.forEach((d,f)=>{u=u.insert(d,f.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const r=ai();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Pe()))}populateOverlays(e,t,r){const a=[];return r.forEach(o=>{t.has(o)||a.push(o)}),this.documentOverlayCache.getOverlays(e,a).next(o=>{o.forEach((u,d)=>{t.set(u,d)})})}computeViews(e,t,r,a){let o=Hn();const u=Ah(),d=function(){return Ah()}();return t.forEach((f,m)=>{const y=r.get(m.key);a.has(m.key)&&(y===void 0||y.mutation instanceof rs)?o=o.insert(m.key,m):y!==void 0?(u.set(m.key,y.mutation.getFieldMask()),Sh(y.mutation,m,y.mutation.getFieldMask(),Et.now())):u.set(m.key,qn.empty())}),this.recalculateAndSaveOverlays(e,o).next(f=>(f.forEach((m,y)=>u.set(m,y)),t.forEach((m,y)=>{var v;return d.set(m,new u6(y,(v=u.get(m))!==null&&v!==void 0?v:null))}),d))}recalculateAndSaveOverlays(e,t){const r=Ah();let a=new ct((u,d)=>u-d),o=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const d of u)d.keys().forEach(f=>{const m=t.get(f);if(m===null)return;let y=r.get(f)||qn.empty();y=d.applyToLocalView(m,y),r.set(f,y);const v=(a.get(d.batchId)||Pe()).add(f);a=a.insert(d.batchId,v)})}).next(()=>{const u=[],d=a.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),m=f.key,y=f.value,v=RC();y.forEach(b=>{if(!o.has(b)){const A=OC(t.get(b),r.get(b));A!==null&&v.set(b,A),o=o.add(b)}}),u.push(this.documentOverlayCache.saveOverlays(e,m,v))}return z.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,a){return function(u){return pe.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):DE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,a):this.getDocumentsMatchingCollectionQuery(e,t,r,a)}getNextDocuments(e,t,r,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,a).next(o=>{const u=a-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,a-o.size):z.resolve(ai());let d=su,f=o;return u.next(m=>z.forEach(m,(y,v)=>(d<v.largestBatchId&&(d=v.largestBatchId),o.get(y)?z.resolve():this.remoteDocumentCache.getEntry(e,y).next(b=>{f=f.insert(y,b)}))).next(()=>this.populateOverlays(e,m,o)).next(()=>this.computeViews(e,f,m,Pe())).next(y=>({batchId:d,changes:SC(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next(r=>{let a=fh();return r.isFoundDocument()&&(a=a.insert(r.key,r)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,r,a){const o=t.collectionGroup;let u=fh();return this.indexManager.getCollectionParents(e,o).next(d=>z.forEach(d,f=>{const m=function(v,b){return new ts(b,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,f.child(o));return this.getDocumentsMatchingCollectionQuery(e,m,r,a).next(y=>{y.forEach((v,b)=>{u=u.insert(v,b)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,r,a){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,a))).next(u=>{o.forEach((f,m)=>{const y=m.getKey();u.get(y)===null&&(u=u.insert(y,dt.newInvalidDocument(y)))});let d=fh();return u.forEach((f,m)=>{const y=o.get(f);y!==void 0&&Sh(y.mutation,m,qn.empty(),Et.now()),_d(t,m)&&(d=d.insert(f,m))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c6{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return z.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Lt(a.createTime)}}(t)),z.resolve()}getNamedQuery(e,t){return z.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(a){return{name:a.name,query:BE(a.bundledQuery),readTime:Lt(a.readTime)}}(t)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h6{constructor(){this.overlays=new ct(pe.comparator),this.Rr=new Map}getOverlay(e,t){return z.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ai();return z.forEach(t,a=>this.getOverlay(e,a).next(o=>{o!==null&&r.set(a,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((a,o)=>{this.Et(e,t,o)}),z.resolve()}removeOverlaysForBatchId(e,t,r){const a=this.Rr.get(r);return a!==void 0&&(a.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),z.resolve()}getOverlaysForCollection(e,t,r){const a=ai(),o=t.length+1,u=new pe(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,m=f.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===o&&f.largestBatchId>r&&a.set(f.getKey(),f)}return z.resolve(a)}getOverlaysForCollectionGroup(e,t,r,a){let o=new ct((m,y)=>m-y);const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let y=o.get(m.largestBatchId);y===null&&(y=ai(),o=o.insert(m.largestBatchId,y)),y.set(m.getKey(),m)}}const d=ai(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((m,y)=>d.set(m,y)),!(d.size()>=a)););return z.resolve(d)}Et(e,t,r){const a=this.overlays.get(r.key);if(a!==null){const u=this.Rr.get(a.largestBatchId).delete(r.key);this.Rr.set(a.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new ME(t,r));let o=this.Rr.get(t);o===void 0&&(o=Pe(),this.Rr.set(t,o)),this.Rr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d6{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(){this.Vr=new nt(an.mr),this.gr=new nt(an.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new an(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new an(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new pe(new Fe([])),r=new an(t,e),a=new an(t,e+1),o=[];return this.gr.forEachInRange([r,a],u=>{this.wr(u),o.push(u.key)}),o}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new pe(new Fe([])),r=new an(t,e),a=new an(t,e+1);let o=Pe();return this.gr.forEachInRange([r,a],u=>{o=o.add(u.key)}),o}containsKey(e){const t=new an(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class an{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return pe.comparator(e.key,t.key)||Ce(e.Cr,t.Cr)}static pr(e,t){return Ce(e.Cr,t.Cr)||pe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f6{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new nt(an.mr)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,a){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new OE(o,t,r,a);this.mutationQueue.push(u);for(const d of a)this.Mr=this.Mr.add(new an(d.key,o)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return z.resolve(u)}lookupMutationBatch(e,t){return z.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=this.Nr(r),o=a<0?0:a;return z.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?$s:this.Fr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new an(t,0),a=new an(t,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,a],u=>{const d=this.Or(u.Cr);o.push(d)}),z.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new nt(Ce);return t.forEach(a=>{const o=new an(a,0),u=new an(a,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,u],d=>{r=r.add(d.Cr)})}),z.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1;let o=r;pe.isDocumentKey(o)||(o=o.child(""));const u=new an(new pe(o),0);let d=new nt(Ce);return this.Mr.forEachWhile(f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===a&&(d=d.add(f.Cr)),!0)},u),z.resolve(this.Br(d))}Br(e){const t=[];return e.forEach(r=>{const a=this.Or(r);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){ve(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return z.forEach(t.mutations,a=>{const o=new an(a.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new an(t,0),a=this.Mr.firstAfterOrEqual(r);return z.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p6{constructor(e){this.kr=e,this.docs=function(){return new ct(pe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,a=this.docs.get(r),o=a?a.size:0,u=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return z.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(t))}getEntries(e,t){let r=Hn();return t.forEach(a=>{const o=this.docs.get(a);r=r.insert(a,o?o.document.mutableCopy():dt.newInvalidDocument(a))}),z.resolve(r)}getDocumentsMatchingQuery(e,t,r,a){let o=Hn();const u=t.path,d=new pe(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:m,value:{document:y}}=f.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||TE(H1(y),r)<=0||(a.has(y.key)||_d(t,y))&&(o=o.insert(y.key,y.mutableCopy()))}return z.resolve(o)}getAllFromCollectionGroup(e,t,r,a){ye()}qr(e,t){return z.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new m6(this)}getSize(e){return z.resolve(this.size)}}class m6 extends lx{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,a)=>{a.isValidDocument()?t.push(this.Ir.addEntry(e,a)):this.Ir.removeEntry(r)}),z.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g6{constructor(e){this.persistence=e,this.Qr=new ns(t=>To(t),gd),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.$r=0,this.Ur=new jE,this.targetCount=0,this.Kr=So.Un()}forEachTarget(e,t){return this.Qr.forEach((r,a)=>t(a)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),z.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new So(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,z.resolve()}updateTargetData(e,t){return this.zn(t),z.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,t,r){let a=0;const o=[];return this.Qr.forEach((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.Qr.delete(u),o.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),z.waitFor(o).next(()=>a)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return z.resolve(r)}addMatchingKeys(e,t,r){return this.Ur.yr(t,r),z.resolve()}removeMatchingKeys(e,t,r){this.Ur.Sr(t,r);const a=this.persistence.referenceDelegate,o=[];return a&&t.forEach(u=>{o.push(a.markPotentiallyOrphaned(e,u))}),z.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),z.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ur.vr(t);return z.resolve(r)}containsKey(e,t){return z.resolve(this.Ur.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new jn(0),this.zr=!1,this.zr=!0,this.jr=new d6,this.referenceDelegate=e(this),this.Hr=new g6(this),this.indexManager=new e6,this.remoteDocumentCache=function(a){return new p6(a)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new ZC(t),this.Yr=new c6(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new h6,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new f6(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){oe("MemoryPersistence","Starting transaction:",e);const a=new y6(this.Gr.next());return this.referenceDelegate.Zr(),r(a).next(o=>this.referenceDelegate.Xr(a).next(()=>o)).toPromise().then(o=>(a.raiseOnCommittedEvent(),o))}ei(e,t){return z.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class y6 extends $1{constructor(e){super(),this.currentSequenceNumber=e}}class qm{constructor(e){this.persistence=e,this.ti=new jE,this.ni=null}static ri(e){return new qm(e)}get ii(){if(this.ni)return this.ni;throw ye()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),z.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),z.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(a=>this.ii.add(a.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.ii,r=>{const a=pe.fromPath(r);return this.si(e,a).next(o=>{o||t.removeEntry(a,Te.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return z.or([()=>z.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class im{constructor(e,t){this.persistence=e,this.oi=new ns(r=>An(r.path),(r,a)=>r.isEqual(a)),this.garbageCollector=ox(this,t)}static ri(e,t){return new im(e,t)}Zr(){}Xr(e){return z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return z.forEach(this.oi,(r,a)=>this.ar(e,r,a).next(o=>o?z.resolve():t(a)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const a=this.persistence.getRemoteDocumentCache(),o=a.newChangeBuffer();return a.qr(e,u=>this.ar(e,u,t).next(d=>{d||(r++,o.removeEntry(u,Te.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),z.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),z.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),z.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Rp(e.data.value)),t}ar(e,t,r){return z.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.oi.get(t);return z.resolve(a!==void 0&&a>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _6{constructor(e){this.serializer=e}B(e,t,r,a){const o=new Nm("createOrUpgrade",t);r<1&&a>=1&&(function(f){f.createObjectStore(md)}(e),function(f){f.createObjectStore(zh,{keyPath:O4}),f.createObjectStore(xr,{keyPath:lA,autoIncrement:!0}).createIndex(lo,uA,{unique:!0}),f.createObjectStore(au)}(e),XA(e),function(f){f.createObjectStore(Ja)}(e));let u=z.resolve();return r<3&&a>=3&&(r!==0&&(function(f){f.deleteObjectStore(lu),f.deleteObjectStore(ou),f.deleteObjectStore(go)}(e),XA(e)),u=u.next(()=>function(f){const m=f.store(go),y={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Te.min().toTimestamp(),targetCount:0};return m.put(Yp,y)}(o))),r<4&&a>=4&&(r!==0&&(u=u.next(()=>function(f,m){return m.store(xr).G().next(v=>{f.deleteObjectStore(xr),f.createObjectStore(xr,{keyPath:lA,autoIncrement:!0}).createIndex(lo,uA,{unique:!0});const b=m.store(xr),A=v.map(x=>b.put(x));return z.waitFor(A)})}(e,o))),u=u.next(()=>{(function(f){f.createObjectStore(uu,{keyPath:q4})})(e)})),r<5&&a>=5&&(u=u.next(()=>this._i(o))),r<6&&a>=6&&(u=u.next(()=>(function(f){f.createObjectStore(jh)}(e),this.ai(o)))),r<7&&a>=7&&(u=u.next(()=>this.ui(o))),r<8&&a>=8&&(u=u.next(()=>this.ci(e,o))),r<9&&a>=9&&(u=u.next(()=>{(function(f){f.objectStoreNames.contains("remoteDocumentChanges")&&f.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&a>=10&&(u=u.next(()=>this.li(o))),r<11&&a>=11&&(u=u.next(()=>{(function(f){f.createObjectStore(km,{keyPath:H4})})(e),function(f){f.createObjectStore(Om,{keyPath:G4})}(e)})),r<12&&a>=12&&(u=u.next(()=>{(function(f){const m=f.createObjectStore(Vm,{keyPath:Z4});m.createIndex(lv,J4,{unique:!1}),m.createIndex(eC,eB,{unique:!1})})(e)})),r<13&&a>=13&&(u=u.next(()=>function(f){const m=f.createObjectStore(Qp,{keyPath:M4});m.createIndex(Ap,L4),m.createIndex(W1,U4)}(e)).next(()=>this.hi(e,o)).next(()=>e.deleteObjectStore(Ja))),r<14&&a>=14&&(u=u.next(()=>this.Pi(e,o))),r<15&&a>=15&&(u=u.next(()=>function(f){f.createObjectStore(IE,{keyPath:$4,autoIncrement:!0}).createIndex(ov,K4,{unique:!1}),f.createObjectStore(Wp,{keyPath:Q4}).createIndex(Z1,Y4,{unique:!1}),f.createObjectStore(Xp,{keyPath:W4}).createIndex(J1,X4,{unique:!1})}(e))),r<16&&a>=16&&(u=u.next(()=>{t.objectStore(Wp).clear()}).next(()=>{t.objectStore(Xp).clear()})),r<17&&a>=17&&(u=u.next(()=>{(function(f){f.createObjectStore(AE,{keyPath:tB})})(e)})),u}ai(e){let t=0;return e.store(Ja).Z((r,a)=>{t+=rm(a)}).next(()=>{const r={byteSize:t};return e.store(jh).put(av,r)})}_i(e){const t=e.store(zh),r=e.store(xr);return t.G().next(a=>z.forEach(a,o=>{const u=IDBKeyRange.bound([o.userId,$s],[o.userId,o.lastAcknowledgedBatchId]);return r.G(lo,u).next(d=>z.forEach(d,f=>{ve(f.userId===o.userId);const m=to(this.serializer,f);return rx(e,o.userId,m).next(()=>{})}))}))}ui(e){const t=e.store(lu),r=e.store(Ja);return e.store(go).get(Yp).next(a=>{const o=[];return r.Z((u,d)=>{const f=new Fe(u),m=function(v){return[0,An(v)]}(f);o.push(t.get(m).next(y=>y?z.resolve():(v=>t.put({targetId:0,path:An(v),sequenceNumber:a.highestListenSequenceNumber}))(f)))}).next(()=>z.waitFor(o))})}ci(e,t){e.createObjectStore(qh,{keyPath:j4});const r=t.store(qh),a=new zE,o=u=>{if(a.add(u)){const d=u.lastSegment(),f=u.popLast();return r.put({collectionId:d,parent:An(f)})}};return t.store(Ja).Z({Y:!0},(u,d)=>{const f=new Fe(u);return o(f.popLast())}).next(()=>t.store(au).Z({Y:!0},([u,d,f],m)=>{const y=si(d);return o(y.popLast())}))}li(e){const t=e.store(ou);return t.Z((r,a)=>{const o=mh(a),u=JC(this.serializer,o);return t.put(u)})}hi(e,t){const r=t.store(Ja),a=[];return r.Z((o,u)=>{const d=t.store(Qp),f=function(v){return v.document?new pe(Fe.fromString(v.document.name).popFirst(5)):v.noDocument?pe.fromSegments(v.noDocument.path):v.unknownDocument?pe.fromSegments(v.unknownDocument.path):ye()}(u).path.toArray(),m={prefixPath:f.slice(0,f.length-2),collectionGroup:f[f.length-2],documentId:f[f.length-1],readTime:u.readTime||[0,0],unknownDocument:u.unknownDocument,noDocument:u.noDocument,document:u.document,hasCommittedMutations:!!u.hasCommittedMutations};a.push(d.put(m))}).next(()=>z.waitFor(a))}Pi(e,t){const r=t.store(xr),a=ux(this.serializer),o=new qE(qm.ri,this.serializer.Tt);return r.G().next(u=>{const d=new Map;return u.forEach(f=>{var m;let y=(m=d.get(f.userId))!==null&&m!==void 0?m:Pe();to(this.serializer,f).keys().forEach(v=>y=y.add(v)),d.set(f.userId,y)}),z.forEach(d,(f,m)=>{const y=new ln(m),v=zm.It(this.serializer,y),b=o.getIndexManager(y),A=jm.It(y,this.serializer,b,o.referenceDelegate);return new cx(a,A,v,b).recalculateAndSaveOverlaysForDocumentKeys(new uv(t,jn.ae),f).next()})})}}function XA(n){n.createObjectStore(lu,{keyPath:F4}).createIndex(wE,z4,{unique:!0}),n.createObjectStore(ou,{keyPath:"targetId"}).createIndex(X1,B4,{unique:!0}),n.createObjectStore(go)}const Ms="IndexedDbPersistence",x_=18e5,D_=5e3,P_="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",hx="main";class HE{constructor(e,t,r,a,o,u,d,f,m,y,v=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ti=o,this.window=u,this.document=d,this.Ii=m,this.Ei=y,this.di=v,this.Gr=null,this.zr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ai=null,this.inForeground=!1,this.Ri=null,this.Vi=null,this.mi=Number.NEGATIVE_INFINITY,this.fi=b=>Promise.resolve(),!HE.D())throw new ae(W.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new a6(this,a),this.gi=t+hx,this.serializer=new ZC(f),this.pi=new oi(this.gi,this.di,new _6(this.serializer)),this.jr=new QB,this.Hr=new n6(this.referenceDelegate,this.serializer),this.remoteDocumentCache=ux(this.serializer),this.Yr=new KB,this.window&&this.window.localStorage?this.yi=this.window.localStorage:(this.yi=null,y===!1&&Mt(Ms,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new ae(W.FAILED_PRECONDITION,P_);return this.Si(),this.bi(),this.Di(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Hr.getHighestSequenceNumber(e))}).then(e=>{this.Gr=new jn(e,this.Ii)}).then(()=>{this.zr=!0}).catch(e=>(this.pi&&this.pi.close(),Promise.reject(e)))}Ci(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.pi.k(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ti.enqueueAndForget(async()=>{this.started&&await this.wi()}))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>lp(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Fi(e).next(t=>{t||(this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Mi(e)).next(t=>this.isPrimary&&!t?this.xi(e).next(()=>!1):!!t&&this.Oi(e).next(()=>!0))).catch(e=>{if(ca(e))return oe(Ms,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return oe(Ms,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ti.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Fi(e){return sh(e).get(Dl).next(t=>z.resolve(this.Ni(t)))}Bi(e){return lp(e).delete(this.clientId)}async Li(){if(this.isPrimary&&!this.ki(this.mi,x_)){this.mi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Zt(t,uu);return r.G().next(a=>{const o=this.qi(a,x_),u=a.filter(d=>o.indexOf(d)===-1);return z.forEach(u,d=>r.delete(d.clientId)).next(()=>u)})}).catch(()=>[]);if(this.yi)for(const t of e)this.yi.removeItem(this.Qi(t.clientId))}}Di(){this.Vi=this.Ti.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.wi().then(()=>this.Li()).then(()=>this.Di()))}Ni(e){return!!e&&e.ownerId===this.clientId}Mi(e){return this.Ei?z.resolve(!0):sh(e).get(Dl).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,D_)&&!this.$i(t.ownerId)){if(this.Ni(t)&&this.networkEnabled)return!0;if(!this.Ni(t)){if(!t.allowTabSynchronization)throw new ae(W.FAILED_PRECONDITION,P_);return!1}}return!(!this.networkEnabled||!this.inForeground)||lp(e).G().next(r=>this.qi(r,D_).find(a=>{if(this.clientId!==a.clientId){const o=!this.networkEnabled&&a.networkEnabled,u=!this.inForeground&&a.inForeground,d=this.networkEnabled===a.networkEnabled;if(o||u&&d)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&oe(Ms,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.zr=!1,this.Ui(),this.Vi&&(this.Vi.cancel(),this.Vi=null),this.Ki(),this.Wi(),await this.pi.runTransaction("shutdown","readwrite",[md,uu],e=>{const t=new uv(e,jn.ae);return this.xi(t).next(()=>this.Bi(t))}),this.pi.close(),this.Gi()}qi(e,t){return e.filter(r=>this.ki(r.updateTimeMs,t)&&!this.$i(r.clientId))}zi(){return this.runTransaction("getActiveClients","readonly",e=>lp(e).G().next(t=>this.qi(t,x_).map(r=>r.clientId)))}get started(){return this.zr}getGlobalsCache(){return this.jr}getMutationQueue(e,t){return jm.It(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new t6(e,this.serializer.Tt.databaseId)}getDocumentOverlayCache(e){return zm.It(this.serializer,e)}getBundleCache(){return this.Yr}runTransaction(e,t,r){oe(Ms,"Starting transaction:",e);const a=t==="readonly"?"readonly":"readwrite",o=function(f){return f===17?iB:f===16?rB:f===15?SE:f===14?rC:f===13?nC:f===12?nB:f===11?tC:void ye()}(this.di);let u;return this.pi.runTransaction(e,a,o,d=>(u=new uv(d,this.Gr?this.Gr.next():jn.ae),t==="readwrite-primary"?this.Fi(u).next(f=>!!f||this.Mi(u)).next(f=>{if(!f)throw Mt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)),new ae(W.FAILED_PRECONDITION,G1);return r(u)}).next(f=>this.Oi(u).next(()=>f)):this.ji(u).next(()=>r(u)))).then(d=>(u.raiseOnCommittedEvent(),d))}ji(e){return sh(e).get(Dl).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,D_)&&!this.$i(t.ownerId)&&!this.Ni(t)&&!(this.Ei||this.allowTabSynchronization&&t.allowTabSynchronization))throw new ae(W.FAILED_PRECONDITION,P_)})}Oi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return sh(e).put(Dl,t)}static D(){return oi.D()}xi(e){const t=sh(e);return t.get(Dl).next(r=>this.Ni(r)?(oe(Ms,"Releasing primary lease."),t.delete(Dl)):z.resolve())}ki(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Mt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Si(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ri=()=>{this.Ti.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.wi()))},this.document.addEventListener("visibilitychange",this.Ri),this.inForeground=this.document.visibilityState==="visible")}Ki(){this.Ri&&(this.document.removeEventListener("visibilitychange",this.Ri),this.Ri=null)}bi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ai=()=>{this.Ui();const t=/(?:Version|Mobile)\/1[456]/;TR()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ti.enterRestrictedMode(!0),this.Ti.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ai))}Wi(){this.Ai&&(this.window.removeEventListener("pagehide",this.Ai),this.Ai=null)}$i(e){var t;try{const r=((t=this.yi)===null||t===void 0?void 0:t.getItem(this.Qi(e)))!==null;return oe(Ms,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Mt(Ms,"Failed to get zombied client id.",r),!1}}Ui(){if(this.yi)try{this.yi.setItem(this.Qi(this.clientId),String(Date.now()))}catch(e){Mt("Failed to set zombie client id.",e)}}Gi(){if(this.yi)try{this.yi.removeItem(this.Qi(this.clientId))}catch{}}Qi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function sh(n){return Zt(n,md)}function lp(n){return Zt(n,uu)}function GE(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,t,r,a){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=a}static Yi(e,t){let r=Pe(),a=Pe();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:a=a.add(o.doc.key)}return new $E(e,t.fromCache,r,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v6{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return TR()?8:K1(At())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,a){const o={result:null};return this.rs(e,t).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.ss(e,t,a,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new v6;return this._s(e,t,u).next(d=>{if(o.result=d,this.Xi)return this.us(e,t,u,d.size)})}).next(()=>o.result)}us(e,t,r,a){return r.documentReadCount<this.es?(Ml()<=Be.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",Ll(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),z.resolve()):(Ml()<=Be.DEBUG&&oe("QueryEngine","Query:",Ll(t),"scans",r.documentReadCount,"local documents and returns",a,"documents as results."),r.documentReadCount>this.ts*a?(Ml()<=Be.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",Ll(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,On(t))):z.resolve())}rs(e,t){if(bA(t))return z.resolve(null);let r=On(t);return this.indexManager.getIndexType(e,r).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=em(t,null,"F"),r=On(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const u=Pe(...o);return this.ns.getDocuments(e,u).next(d=>this.indexManager.getMinOffset(e,r).next(f=>{const m=this.cs(t,d);return this.ls(t,m,u,f.readTime)?this.rs(e,em(t,null,"F")):this.hs(e,m,t,f)}))})))}ss(e,t,r,a){return bA(t)||a.isEqual(Te.min())?z.resolve(null):this.ns.getDocuments(e,r).next(o=>{const u=this.cs(t,o);return this.ls(t,u,r,a)?z.resolve(null):(Ml()<=Be.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Ll(t)),this.hs(e,u,t,q1(a,su)).next(d=>d))})}cs(e,t){let r=new nt(IC(e));return t.forEach((a,o)=>{_d(e,o)&&(r=r.add(o))}),r}ls(e,t,r,a){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(a)>0)}_s(e,t,r){return Ml()<=Be.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",Ll(t)),this.ns.getDocumentsMatchingQuery(e,t,ir.min(),r)}hs(e,t,r,a){return this.ns.getDocumentsMatchingQuery(e,r,a).next(o=>(t.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE="LocalStore",E6=3e8;class T6{constructor(e,t,r,a){this.persistence=e,this.Ps=t,this.serializer=a,this.Ts=new ct(Ce),this.Is=new ns(o=>To(o),gd),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cx(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function fx(n,e,t,r){return new T6(n,e,t,r)}async function px(n,e){const t=me(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let a;return t.mutationQueue.getAllMutationBatches(r).next(o=>(a=o,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],d=[];let f=Pe();for(const m of a){u.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}for(const m of o){d.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}return t.localDocuments.getDocuments(r,f).next(m=>({Rs:m,removedBatchIds:u,addedBatchIds:d}))})})}function b6(n,e){const t=me(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const a=e.batch.keys(),o=t.ds.newChangeBuffer({trackRemovals:!0});return function(d,f,m,y){const v=m.batch,b=v.keys();let A=z.resolve();return b.forEach(x=>{A=A.next(()=>y.getEntry(f,x)).next(U=>{const M=m.docVersions.get(x);ve(M!==null),U.version.compareTo(M)<0&&(v.applyToRemoteDocument(U,m),U.isValidDocument()&&(U.setReadTime(m.commitVersion),y.addEntry(U)))})}),A.next(()=>d.mutationQueue.removeMutationBatch(f,v))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(d){let f=Pe();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(f=f.add(d.batch.mutations[m].key));return f}(e))).next(()=>t.localDocuments.getDocuments(r,a))})}function mx(n){const e=me(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function w6(n,e){const t=me(n),r=e.snapshotVersion;let a=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=t.ds.newChangeBuffer({trackRemovals:!0});a=t.Ts;const d=[];e.targetChanges.forEach((y,v)=>{const b=a.get(v);if(!b)return;d.push(t.Hr.removeMatchingKeys(o,y.removedDocuments,v).next(()=>t.Hr.addMatchingKeys(o,y.addedDocuments,v)));let A=b.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(v)!==null?A=A.withResumeToken(Dt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):y.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(y.resumeToken,r)),a=a.insert(v,A),function(U,M,H){return U.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=E6?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(b,A,y)&&d.push(t.Hr.updateTargetData(o,A))});let f=Hn(),m=Pe();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(o,y))}),d.push(gx(o,u,e.documentUpdates).next(y=>{f=y.Vs,m=y.fs})),!r.isEqual(Te.min())){const y=t.Hr.getLastRemoteSnapshotVersion(o).next(v=>t.Hr.setTargetsMetadata(o,o.currentSequenceNumber,r));d.push(y)}return z.waitFor(d).next(()=>u.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,f,m)).next(()=>f)}).then(o=>(t.Ts=a,o))}function gx(n,e,t){let r=Pe(),a=Pe();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let u=Hn();return t.forEach((d,f)=>{const m=o.get(d);f.isFoundDocument()!==m.isFoundDocument()&&(a=a.add(d)),f.isNoDocument()&&f.version.isEqual(Te.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):oe(KE,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",f.version)}),{Vs:u,fs:a}})}function I6(n,e){const t=me(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=$s),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gu(n,e){const t=me(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let a;return t.Hr.getTargetData(r,e).next(o=>o?(a=o,z.resolve(a)):t.Hr.allocateTargetId(r).next(u=>(a=new Hi(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,a).next(()=>a))))}).then(r=>{const a=t.Ts.get(r.targetId);return(a===null||r.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function yu(n,e,t){const r=me(n),a=r.Ts.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,a))}catch(u){if(!ca(u))throw u;oe(KE,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Ts=r.Ts.remove(e),r.Is.delete(a.target)}function sm(n,e,t){const r=me(n);let a=Te.min(),o=Pe();return r.persistence.runTransaction("Execute query","readwrite",u=>function(f,m,y){const v=me(f),b=v.Is.get(y);return b!==void 0?z.resolve(v.Ts.get(b)):v.Hr.getTargetData(m,y)}(r,u,On(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(u,d.targetId).next(f=>{o=f})}).next(()=>r.Ps.getDocumentsMatchingQuery(u,e,t?a:Te.min(),t?o:Pe())).next(d=>(vx(r,wC(e),d),{documents:d,gs:o})))}function yx(n,e){const t=me(n),r=me(t.Hr),a=t.Ts.get(e);return a?Promise.resolve(a.target):t.persistence.runTransaction("Get target data","readonly",o=>r.lt(o,e).next(u=>u?u.target:null))}function _x(n,e){const t=me(n),r=t.Es.get(e)||Te.min();return t.persistence.runTransaction("Get new document changes","readonly",a=>t.ds.getAllFromCollectionGroup(a,e,q1(r,su),Number.MAX_SAFE_INTEGER)).then(a=>(vx(t,e,a),a))}function vx(n,e,t){let r=n.Es.get(e)||Te.min();t.forEach((a,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Es.set(e,r)}async function A6(n,e,t,r){const a=me(n);let o=Pe(),u=Hn();for(const m of t){const y=e.ps(m.metadata.name);m.document&&(o=o.add(y));const v=e.ys(m);v.setReadTime(e.ws(m.metadata.readTime)),u=u.insert(y,v)}const d=a.ds.newChangeBuffer({trackRemovals:!0}),f=await gu(a,function(y){return On(Nu(Fe.fromString(`__bundle__/docs/${y}`)))}(r));return a.persistence.runTransaction("Apply bundle documents","readwrite",m=>gx(m,d,u).next(y=>(d.apply(m),y)).next(y=>a.Hr.removeMatchingKeysForTargetId(m,f.targetId).next(()=>a.Hr.addMatchingKeys(m,o,f.targetId)).next(()=>a.localDocuments.getLocalViewOfDocuments(m,y.Vs,y.fs)).next(()=>y.Vs)))}async function S6(n,e,t=Pe()){const r=await gu(n,On(BE(e.bundledQuery))),a=me(n);return a.persistence.runTransaction("Save named query","readwrite",o=>{const u=Lt(e.readTime);if(r.snapshotVersion.compareTo(u)>=0)return a.Yr.saveNamedQuery(o,e);const d=r.withResumeToken(Dt.EMPTY_BYTE_STRING,u);return a.Ts=a.Ts.insert(d.targetId,d),a.Hr.updateTargetData(o,d).next(()=>a.Hr.removeMatchingKeysForTargetId(o,r.targetId)).next(()=>a.Hr.addMatchingKeys(o,t,r.targetId)).next(()=>a.Yr.saveNamedQuery(o,e))})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex="firestore_clients";function ZA(n,e){return`${Ex}_${n}_${e}`}const Tx="firestore_mutations";function JA(n,e,t){let r=`${Tx}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const bx="firestore_targets";function N_(n,e){return`${bx}_${n}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="SharedClientState";class am{constructor(e,t,r,a){this.user=e,this.batchId=t,this.state=r,this.error=a}static Ss(e,t,r){const a=JSON.parse(r);let o,u=typeof a=="object"&&["pending","acknowledged","rejected"].indexOf(a.state)!==-1&&(a.error===void 0||typeof a.error=="object");return u&&a.error&&(u=typeof a.error.message=="string"&&typeof a.error.code=="string",u&&(o=new ae(a.error.code,a.error.message))),u?new am(e,t,a.state,o):(Mt(Zr,`Failed to parse mutation state for ID '${t}': ${r}`),null)}bs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Rh{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ss(e,t){const r=JSON.parse(t);let a,o=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(a=new ae(r.error.code,r.error.message))),o?new Rh(e,r.state,a):(Mt(Zr,`Failed to parse target state for ID '${e}': ${t}`),null)}bs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class om{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ss(e,t){const r=JSON.parse(t);let a=typeof r=="object"&&r.activeTargetIds instanceof Array,o=PE();for(let u=0;a&&u<r.activeTargetIds.length;++u)a=Q1(r.activeTargetIds[u]),o=o.add(r.activeTargetIds[u]);return a?new om(e,o):(Mt(Zr,`Failed to parse client data for instance '${e}': ${t}`),null)}}class QE{constructor(e,t){this.clientId=e,this.onlineState=t}static Ss(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new QE(t.clientId,t.onlineState):(Mt(Zr,`Failed to parse online state: ${e}`),null)}}class Iv{constructor(){this.activeTargetIds=PE()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class k_{constructor(e,t,r,a,o){this.window=e,this.Ti=t,this.persistenceKey=r,this.Cs=a,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Fs=this.Ms.bind(this),this.xs=new ct(Ce),this.started=!1,this.Os=[];const u=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=o,this.Ns=ZA(this.persistenceKey,this.Cs),this.Bs=function(f){return`firestore_sequence_number_${f}`}(this.persistenceKey),this.xs=this.xs.insert(this.Cs,new Iv),this.Ls=new RegExp(`^${Ex}_${u}_([^_]*)$`),this.ks=new RegExp(`^${Tx}_${u}_(\\d+)(?:_(.*))?$`),this.qs=new RegExp(`^${bx}_${u}_(\\d+)$`),this.Qs=function(f){return`firestore_online_state_${f}`}(this.persistenceKey),this.$s=function(f){return`firestore_bundle_loaded_v2_${f}`}(this.persistenceKey),this.window.addEventListener("storage",this.Fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.zi();for(const r of e){if(r===this.Cs)continue;const a=this.getItem(ZA(this.persistenceKey,r));if(a){const o=om.Ss(r,a);o&&(this.xs=this.xs.insert(o.clientId,o))}}this.Us();const t=this.storage.getItem(this.Qs);if(t){const r=this.Ks(t);r&&this.Ws(r)}for(const r of this.Os)this.Ms(r);this.Os=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Bs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Gs(this.xs)}isActiveQueryTarget(e){let t=!1;return this.xs.forEach((r,a)=>{a.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.zs(e,"pending")}updateMutationState(e,t,r){this.zs(e,t,r),this.js(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const a=this.storage.getItem(N_(this.persistenceKey,e));if(a){const o=Rh.Ss(e,a);o&&(r=o.state)}}return t&&this.Hs.Ds(e),this.Us(),r}removeLocalQueryTarget(e){this.Hs.vs(e),this.Us()}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(N_(this.persistenceKey,e))}updateQueryState(e,t,r){this.Js(e,t,r)}handleUserChange(e,t,r){t.forEach(a=>{this.js(a)}),this.currentUser=e,r.forEach(a=>{this.addPendingMutation(a)})}setOnlineState(e){this.Ys(e)}notifyBundleLoaded(e){this.Zs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Fs),this.removeItem(this.Ns),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return oe(Zr,"READ",e,t),t}setItem(e,t){oe(Zr,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){oe(Zr,"REMOVE",e),this.storage.removeItem(e)}Ms(e){const t=e;if(t.storageArea===this.storage){if(oe(Zr,"EVENT",t.key,t.newValue),t.key===this.Ns)return void Mt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ti.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ls.test(t.key)){if(t.newValue==null){const r=this.Xs(t.key);return this.eo(r,null)}{const r=this.no(t.key,t.newValue);if(r)return this.eo(r.clientId,r)}}else if(this.ks.test(t.key)){if(t.newValue!==null){const r=this.ro(t.key,t.newValue);if(r)return this.io(r)}}else if(this.qs.test(t.key)){if(t.newValue!==null){const r=this.so(t.key,t.newValue);if(r)return this.oo(r)}}else if(t.key===this.Qs){if(t.newValue!==null){const r=this.Ks(t.newValue);if(r)return this.Ws(r)}}else if(t.key===this.Bs){const r=function(o){let u=jn.ae;if(o!=null)try{const d=JSON.parse(o);ve(typeof d=="number"),u=d}catch(d){Mt(Zr,"Failed to read sequence number from WebStorage",d)}return u}(t.newValue);r!==jn.ae&&this.sequenceNumberHandler(r)}else if(t.key===this.$s){const r=this._o(t.newValue);await Promise.all(r.map(a=>this.syncEngine.ao(a)))}}}else this.Os.push(t)})}}get Hs(){return this.xs.get(this.Cs)}Us(){this.setItem(this.Ns,this.Hs.bs())}zs(e,t,r){const a=new am(this.currentUser,e,t,r),o=JA(this.persistenceKey,this.currentUser,e);this.setItem(o,a.bs())}js(e){const t=JA(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Ys(e){const t={clientId:this.Cs,onlineState:e};this.storage.setItem(this.Qs,JSON.stringify(t))}Js(e,t,r){const a=N_(this.persistenceKey,e),o=new Rh(e,t,r);this.setItem(a,o.bs())}Zs(e){const t=JSON.stringify(Array.from(e));this.setItem(this.$s,t)}Xs(e){const t=this.Ls.exec(e);return t?t[1]:null}no(e,t){const r=this.Xs(e);return om.Ss(r,t)}ro(e,t){const r=this.ks.exec(e),a=Number(r[1]),o=r[2]!==void 0?r[2]:null;return am.Ss(new ln(o),a,t)}so(e,t){const r=this.qs.exec(e),a=Number(r[1]);return Rh.Ss(a,t)}Ks(e){return QE.Ss(e)}_o(e){return JSON.parse(e)}async io(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.uo(e.batchId,e.state,e.error);oe(Zr,`Ignoring mutation for non-active user ${e.user.uid}`)}oo(e){return this.syncEngine.co(e.targetId,e.state,e.error)}eo(e,t){const r=t?this.xs.insert(e,t):this.xs.remove(e),a=this.Gs(this.xs),o=this.Gs(r),u=[],d=[];return o.forEach(f=>{a.has(f)||u.push(f)}),a.forEach(f=>{o.has(f)||d.push(f)}),this.syncEngine.lo(u,d).then(()=>{this.xs=r})}Ws(e){this.xs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Gs(e){let t=PE();return e.forEach((r,a)=>{t=t.unionWith(a.activeTargetIds)}),t}}class wx{constructor(){this.ho=new Iv,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Iv,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R6{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS="ConnectivityMonitor";class tS{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){oe(eS,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){oe(eS,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let up=null;function Av(){return up===null?up=function(){return 268435456+Math.round(2147483648*Math.random())}():up++,"0x"+up.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="RestConnection",C6={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class x6{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${a}`,this.wo=this.databaseId.database===cv?`project_id=${r}`:`project_id=${r}&database_id=${a}`}So(e,t,r,a,o){const u=Av(),d=this.bo(e,t.toUriEncodedString());oe(O_,`Sending RPC '${e}' ${u}:`,d,r);const f={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(f,a,o),this.vo(e,d,f,r).then(m=>(oe(O_,`Received RPC '${e}' ${u}: `,m),m),m=>{throw di(O_,`RPC '${e}' ${u} failed with error: `,m,"url: ",d,"request:",r),m})}Co(e,t,r,a,o,u){return this.So(e,t,r,a,o)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Pu}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,o)=>e[o]=a),r&&r.headers.forEach((a,o)=>e[o]=a)}bo(e,t){const r=C6[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D6{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="WebChannelConnection";class P6 extends x6{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,a){const o=Av();return new Promise((u,d)=>{const f=new V1;f.setWithCredentials(!0),f.listenOnce(M1.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case bp.NO_ERROR:const y=f.getResponseJson();oe(wn,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(y)),u(y);break;case bp.TIMEOUT:oe(wn,`RPC '${e}' ${o} timed out`),d(new ae(W.DEADLINE_EXCEEDED,"Request time out"));break;case bp.HTTP_ERROR:const v=f.getStatus();if(oe(wn,`RPC '${e}' ${o} failed with status:`,v,"response text:",f.getResponseText()),v>0){let b=f.getResponseJson();Array.isArray(b)&&(b=b[0]);const A=b==null?void 0:b.error;if(A&&A.status&&A.message){const x=function(M){const H=M.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(H)>=0?H:W.UNKNOWN}(A.status);d(new ae(x,A.message))}else d(new ae(W.UNKNOWN,"Server responded with status "+f.getStatus()))}else d(new ae(W.UNAVAILABLE,"Connection failed."));break;default:ye()}}finally{oe(wn,`RPC '${e}' ${o} completed.`)}});const m=JSON.stringify(a);oe(wn,`RPC '${e}' ${o} sending request:`,a),f.send(t,"POST",m,r,15)})}Wo(e,t,r){const a=Av(),o=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=B1(),d=U1(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Do(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const y=o.join("");oe(wn,`Creating RPC '${e}' stream ${a}: ${y}`,f);const v=u.createWebChannel(y,f);let b=!1,A=!1;const x=new D6({Fo:M=>{A?oe(wn,`Not sending because RPC '${e}' stream ${a} is closed:`,M):(b||(oe(wn,`Opening RPC '${e}' stream ${a} transport.`),v.open(),b=!0),oe(wn,`RPC '${e}' stream ${a} sending:`,M),v.send(M))},Mo:()=>v.close()}),U=(M,H,Z)=>{M.listen(H,$=>{try{Z($)}catch(le){setTimeout(()=>{throw le},0)}})};return U(v,dh.EventType.OPEN,()=>{A||(oe(wn,`RPC '${e}' stream ${a} transport opened.`),x.Qo())}),U(v,dh.EventType.CLOSE,()=>{A||(A=!0,oe(wn,`RPC '${e}' stream ${a} transport closed`),x.Uo())}),U(v,dh.EventType.ERROR,M=>{A||(A=!0,di(wn,`RPC '${e}' stream ${a} transport errored:`,M),x.Uo(new ae(W.UNAVAILABLE,"The operation could not be completed")))}),U(v,dh.EventType.MESSAGE,M=>{var H;if(!A){const Z=M.data[0];ve(!!Z);const $=Z,le=($==null?void 0:$.error)||((H=$[0])===null||H===void 0?void 0:H.error);if(le){oe(wn,`RPC '${e}' stream ${a} received error:`,le);const re=le.status;let J=function(C){const O=qt[C];if(O!==void 0)return LC(O)}(re),R=le.message;J===void 0&&(J=W.INTERNAL,R="Unknown error status: "+re+" with message "+le.message),A=!0,x.Uo(new ae(J,R)),v.close()}else oe(wn,`RPC '${e}' stream ${a} received:`,Z),x.Ko(Z)}}),U(d,L1.STAT_EVENT,M=>{M.stat===rv.PROXY?oe(wn,`RPC '${e}' stream ${a} detected buffering proxy`):M.stat===rv.NOPROXY&&oe(wn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{x.$o()},0),x}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ix(){return typeof window<"u"?window:null}function Pp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(n){return new MB(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,t,r=1e3,a=1.5,o=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=a,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),a=Math.max(0,t-r);a>0&&oe("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,a,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="PersistentStream";class Ax{constructor(e,t,r,a,o,u,d,f){this.Ti=e,this.n_=r,this.r_=a,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new YE(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Mt(t.toString()),Mt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,a])=>{this.i_===t&&this.V_(r,a)},r=>{e(()=>{const a=new ae(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(a)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(a=>{r(()=>this.m_(a))}),this.stream.onMessage(a=>{r(()=>++this.__==1?this.g_(a):this.onNext(a))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return oe(nS,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(oe(nS,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class N6 extends Ax{constructor(e,t,r,a,o,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,a,u),this.serializer=o}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=BB(this.serializer,e),r=function(o){if(!("targetChange"in o))return Te.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?Te.min():u.readTime?Lt(u.readTime):Te.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=vv(this.serializer),t.addTarget=function(o,u){let d;const f=u.target;if(d=Zp(f)?{documents:$C(o,f)}:{query:KC(o,f).ht},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=FC(o,u.resumeToken);const m=yv(o,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(Te.min())>0){d.readTime=mu(o,u.snapshotVersion.toTimestamp());const m=yv(o,u.expectedCount);m!==null&&(d.expectedCount=m)}return d}(this.serializer,e);const r=zB(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=vv(this.serializer),t.removeTarget=e,this.I_(t)}}class k6 extends Ax{constructor(e,t,r,a,o,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,a,u),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return ve(!!e.streamToken),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=FB(e.writeResults,e.commitTime),r=Lt(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=vv(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Yh(this.serializer,r))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O6{}class V6 extends O6{constructor(e,t,r,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=a,this.F_=!1}M_(){if(this.F_)throw new ae(W.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.So(e,_v(t,r),a,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ae(W.UNKNOWN,o.toString())})}Co(e,t,r,a,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,d])=>this.connection.Co(e,_v(t,r),a,u,d,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ae(W.UNKNOWN,u.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class M6{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Mt(t),this.N_=!1):oe("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro="RemoteStore";class L6{constructor(e,t,r,a,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(u=>{r.enqueueAndForget(async()=>{da(this)&&(oe(Ro,"Restarting streams for network reachability change."),await async function(f){const m=me(f);m.W_.add(4),await Vu(m),m.j_.set("Unknown"),m.W_.delete(4),await wd(m)}(this))})}),this.j_=new M6(r,a)}}async function wd(n){if(da(n))for(const e of n.G_)await e(!0)}async function Vu(n){for(const e of n.G_)await e(!1)}function Hm(n,e){const t=me(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),ZE(t)?XE(t):Lu(t).c_()&&WE(t,e))}function _u(n,e){const t=me(n),r=Lu(t);t.K_.delete(e),r.c_()&&Sx(t,e),t.K_.size===0&&(r.c_()?r.P_():da(t)&&t.j_.set("Unknown"))}function WE(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Lu(n).y_(e)}function Sx(n,e){n.H_.Ne(e),Lu(n).w_(e)}function XE(n){n.H_=new NB({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),Lu(n).start(),n.j_.B_()}function ZE(n){return da(n)&&!Lu(n).u_()&&n.K_.size>0}function da(n){return me(n).W_.size===0}function Rx(n){n.H_=void 0}async function U6(n){n.j_.set("Online")}async function B6(n){n.K_.forEach((e,t)=>{WE(n,e)})}async function F6(n,e){Rx(n),ZE(n)?(n.j_.q_(e),XE(n)):n.j_.set("Unknown")}async function z6(n,e,t){if(n.j_.set("Online"),e instanceof BC&&e.state===2&&e.cause)try{await async function(a,o){const u=o.cause;for(const d of o.targetIds)a.K_.has(d)&&(await a.remoteSyncer.rejectListen(d,u),a.K_.delete(d),a.H_.removeTarget(d))}(n,e)}catch(r){oe(Ro,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await lm(n,r)}else if(e instanceof Dp?n.H_.We(e):e instanceof UC?n.H_.Ze(e):n.H_.je(e),!t.isEqual(Te.min()))try{const r=await mx(n.localStore);t.compareTo(r)>=0&&await function(o,u){const d=o.H_.ot(u);return d.targetChanges.forEach((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const y=o.K_.get(m);y&&o.K_.set(m,y.withResumeToken(f.resumeToken,u))}}),d.targetMismatches.forEach((f,m)=>{const y=o.K_.get(f);if(!y)return;o.K_.set(f,y.withResumeToken(Dt.EMPTY_BYTE_STRING,y.snapshotVersion)),Sx(o,f);const v=new Hi(y.target,f,m,y.sequenceNumber);WE(o,v)}),o.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(r){oe(Ro,"Failed to raise snapshot:",r),await lm(n,r)}}async function lm(n,e,t){if(!ca(e))throw e;n.W_.add(1),await Vu(n),n.j_.set("Offline"),t||(t=()=>mx(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{oe(Ro,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await wd(n)})}function Cx(n,e){return e().catch(t=>lm(n,t,e))}async function Mu(n){const e=me(n),t=ra(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:$s;for(;j6(e);)try{const a=await I6(e.localStore,r);if(a===null){e.U_.length===0&&t.P_();break}r=a.batchId,q6(e,a)}catch(a){await lm(e,a)}xx(e)&&Dx(e)}function j6(n){return da(n)&&n.U_.length<10}function q6(n,e){n.U_.push(e);const t=ra(n);t.c_()&&t.S_&&t.b_(e.mutations)}function xx(n){return da(n)&&!ra(n).u_()&&n.U_.length>0}function Dx(n){ra(n).start()}async function H6(n){ra(n).C_()}async function G6(n){const e=ra(n);for(const t of n.U_)e.b_(t.mutations)}async function $6(n,e,t){const r=n.U_.shift(),a=VE.from(r,e,t);await Cx(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await Mu(n)}async function K6(n,e){e&&ra(n).S_&&await async function(r,a){if(function(u){return MC(u)&&u!==W.ABORTED}(a.code)){const o=r.U_.shift();ra(r).h_(),await Cx(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,a)),await Mu(r)}}(n,e),xx(n)&&Dx(n)}async function rS(n,e){const t=me(n);t.asyncQueue.verifyOperationInProgress(),oe(Ro,"RemoteStore received new credentials");const r=da(t);t.W_.add(3),await Vu(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await wd(t)}async function Sv(n,e){const t=me(n);e?(t.W_.delete(2),await wd(t)):e||(t.W_.add(2),await Vu(t),t.j_.set("Unknown"))}function Lu(n){return n.J_||(n.J_=function(t,r,a){const o=me(t);return o.M_(),new N6(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(n.datastore,n.asyncQueue,{xo:U6.bind(null,n),No:B6.bind(null,n),Lo:F6.bind(null,n),p_:z6.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),ZE(n)?XE(n):n.j_.set("Unknown")):(await n.J_.stop(),Rx(n))})),n.J_}function ra(n){return n.Y_||(n.Y_=function(t,r,a){const o=me(t);return o.M_(),new k6(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:H6.bind(null,n),Lo:K6.bind(null,n),D_:G6.bind(null,n),v_:$6.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await Mu(n)):(await n.Y_.stop(),n.U_.length>0&&(oe(Ro,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,t,r,a,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=a,this.removalCallback=o,this.deferred=new yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,a,o){const u=Date.now()+r,d=new JE(e,t,u,a,o);return d.start(r),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uu(n,e){if(Mt("AsyncQueue",`${e}: ${n}`),ca(n))return new ae(W.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{static emptySet(e){return new Ql(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||pe.comparator(t.key,r.key):(t,r)=>pe.comparator(t.key,r.key),this.keyedMap=fh(),this.sortedSet=new ct(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ql)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,o=r.getNext().key;if(!a.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ql;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(){this.Z_=new ct(pe.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):ye():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class vu{constructor(e,t,r,a,o,u,d,f,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=a,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,a,o){const u=[];return t.forEach(d=>{u.push({type:0,doc:d})}),new vu(e,t,Ql.emptySet(t),u,r,a,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==r[a].type||!t[a].doc.isEqual(r[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q6{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class Y6{constructor(){this.queries=sS(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const a=me(t),o=a.queries;a.queries=sS(),o.forEach((u,d)=>{for(const f of d.ta)f.onError(r)})})(this,new ae(W.ABORTED,"Firestore shutting down"))}}function sS(){return new ns(n=>bC(n),yd)}async function eT(n,e){const t=me(n);let r=3;const a=e.query;let o=t.queries.get(a);o?!o.na()&&e.ra()&&(r=2):(o=new Q6,r=e.ra()?0:1);try{switch(r){case 0:o.ea=await t.onListen(a,!0);break;case 1:o.ea=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(u){const d=Uu(u,`Initialization of query '${Ll(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,o),o.ta.push(e),e.sa(t.onlineState),o.ea&&e.oa(o.ea)&&nT(t)}async function tT(n,e){const t=me(n),r=e.query;let a=3;const o=t.queries.get(r);if(o){const u=o.ta.indexOf(e);u>=0&&(o.ta.splice(u,1),o.ta.length===0?a=e.ra()?0:1:!o.na()&&e.ra()&&(a=2))}switch(a){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function W6(n,e){const t=me(n);let r=!1;for(const a of e){const o=a.query,u=t.queries.get(o);if(u){for(const d of u.ta)d.oa(a)&&(r=!0);u.ea=a}}r&&nT(t)}function X6(n,e,t){const r=me(n),a=r.queries.get(e);if(a)for(const o of a.ta)o.onError(t);r.queries.delete(e)}function nT(n){n.ia.forEach(e=>{e.next()})}var Rv,aS;(aS=Rv||(Rv={}))._a="default",aS.Cache="cache";class rT{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const a of e.docChanges)a.type!==3&&r.push(a);e=new vu(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=vu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Rv.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z6{constructor(e,t){this.Ia=e,this.byteLength=t}Ea(){return"metadata"in this.Ia}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e){this.serializer=e}ps(e){return li(this.serializer,e)}ys(e){return e.metadata.exists?GC(this.serializer,e.document,!1):dt.newNoDocument(this.ps(e.metadata.name),this.ws(e.metadata.readTime))}ws(e){return Lt(e)}}class J6{constructor(e,t,r){this.da=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Px(e)}Aa(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ia.namedQuery)this.queries.push(e.Ia.namedQuery);else if(e.Ia.documentMetadata){this.documents.push({metadata:e.Ia.documentMetadata}),e.Ia.documentMetadata.exists||++t;const r=Fe.fromString(e.Ia.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Ia.document&&(this.documents[this.documents.length-1].document=e.Ia.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ra(e){const t=new Map,r=new oS(this.serializer);for(const a of e)if(a.metadata.queries){const o=r.ps(a.metadata.name);for(const u of a.metadata.queries){const d=(t.get(u)||Pe()).add(o);t.set(u,d)}}return t}async complete(){const e=await A6(this.localStore,new oS(this.serializer),this.documents,this.da.id),t=this.Ra(this.documents);for(const r of this.queries)await S6(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Va:this.collectionGroups,ma:e}}}function Px(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e){this.key=e}}class kx{constructor(e){this.key=e}}class Ox{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Pe(),this.mutatedKeys=Pe(),this.ya=IC(e),this.wa=new Ql(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new iS,a=t?t.wa:this.wa;let o=t?t.mutatedKeys:this.mutatedKeys,u=a,d=!1;const f=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,m=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((y,v)=>{const b=a.get(y),A=_d(this.query,v)?v:null,x=!!b&&this.mutatedKeys.has(b.key),U=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let M=!1;b&&A?b.data.isEqual(A.data)?x!==U&&(r.track({type:3,doc:A}),M=!0):this.va(b,A)||(r.track({type:2,doc:A}),M=!0,(f&&this.ya(A,f)>0||m&&this.ya(A,m)<0)&&(d=!0)):!b&&A?(r.track({type:0,doc:A}),M=!0):b&&!A&&(r.track({type:1,doc:b}),M=!0,(f||m)&&(d=!0)),M&&(A?(u=u.add(A),o=U?o.add(y):o.delete(y)):(u=u.delete(y),o=o.delete(y)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),o=o.delete(y.key),r.track({type:1,doc:y})}return{wa:u,Da:r,ls:d,mutatedKeys:o}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,a){const o=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const u=e.Da.X_();u.sort((y,v)=>function(A,x){const U=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye()}};return U(A)-U(x)}(y.type,v.type)||this.ya(y.doc,v.doc)),this.Ca(r),a=a!=null&&a;const d=t&&!a?this.Fa():[],f=this.pa.size===0&&this.current&&!a?1:0,m=f!==this.ga;return this.ga=f,u.length!==0||m?{snapshot:new vu(this.query,e.wa,o,u,e.mutatedKeys,f===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:d}:{Ma:d}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new iS,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Pe(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new kx(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new Nx(r))}),t}Oa(e){this.fa=e.gs,this.pa=Pe();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return vu.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const fa="SyncEngine";class e9{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class t9{constructor(e){this.key=e,this.Ba=!1}}class n9{constructor(e,t,r,a,o,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=a,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.La={},this.ka=new ns(d=>bC(d),yd),this.qa=new Map,this.Qa=new Set,this.$a=new ct(pe.comparator),this.Ua=new Map,this.Ka=new jE,this.Wa={},this.Ga=new Map,this.za=So.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function r9(n,e,t=!0){const r=Gm(n);let a;const o=r.ka.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),a=o.view.Na()):a=await Vx(r,e,t,!0),a}async function i9(n,e){const t=Gm(n);await Vx(t,e,!0,!1)}async function Vx(n,e,t,r){const a=await gu(n.localStore,On(e)),o=a.targetId,u=n.sharedClientState.addLocalQueryTarget(o,t);let d;return r&&(d=await iT(n,e,o,u==="current",a.resumeToken)),n.isPrimaryClient&&t&&Hm(n.remoteStore,a),d}async function iT(n,e,t,r,a){n.Ha=(v,b,A)=>async function(U,M,H,Z){let $=M.view.ba(H);$.ls&&($=await sm(U.localStore,M.query,!1).then(({documents:R})=>M.view.ba(R,$)));const le=Z&&Z.targetChanges.get(M.targetId),re=Z&&Z.targetMismatches.get(M.targetId)!=null,J=M.view.applyChanges($,U.isPrimaryClient,le,re);return Cv(U,M.targetId,J.Ma),J.snapshot}(n,v,b,A);const o=await sm(n.localStore,e,!0),u=new Ox(e,o.gs),d=u.ba(o.documents),f=Td.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",a),m=u.applyChanges(d,n.isPrimaryClient,f);Cv(n,t,m.Ma);const y=new e9(e,t,u);return n.ka.set(e,y),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),m.snapshot}async function s9(n,e,t){const r=me(n),a=r.ka.get(e),o=r.qa.get(a.targetId);if(o.length>1)return r.qa.set(a.targetId,o.filter(u=>!yd(u,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(a.targetId),r.sharedClientState.isActiveQueryTarget(a.targetId)||await yu(r.localStore,a.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(a.targetId),t&&_u(r.remoteStore,a.targetId),Eu(r,a.targetId)}).catch(ua)):(Eu(r,a.targetId),await yu(r.localStore,a.targetId,!0))}async function a9(n,e){const t=me(n),r=t.ka.get(e),a=t.qa.get(r.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),_u(t.remoteStore,r.targetId))}async function o9(n,e,t){const r=lT(n);try{const a=await function(u,d){const f=me(u),m=Et.now(),y=d.reduce((A,x)=>A.add(x.key),Pe());let v,b;return f.persistence.runTransaction("Locally write mutations","readwrite",A=>{let x=Hn(),U=Pe();return f.ds.getEntries(A,y).next(M=>{x=M,x.forEach((H,Z)=>{Z.isValidDocument()||(U=U.add(H))})}).next(()=>f.localDocuments.getOverlayedDocuments(A,x)).next(M=>{v=M;const H=[];for(const Z of d){const $=xB(Z,v.get(Z.key).overlayedDocument);$!=null&&H.push(new rs(Z.key,$,fC($.value.mapValue),vt.exists(!0)))}return f.mutationQueue.addMutationBatch(A,m,H,d)}).next(M=>{b=M;const H=M.applyToLocalDocumentSet(v,U);return f.documentOverlayCache.saveOverlays(A,M.batchId,H)})}).then(()=>({batchId:b.batchId,changes:SC(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(a.batchId),function(u,d,f){let m=u.Wa[u.currentUser.toKey()];m||(m=new ct(Ce)),m=m.insert(d,f),u.Wa[u.currentUser.toKey()]=m}(r,a.batchId,t),await is(r,a.changes),await Mu(r.remoteStore)}catch(a){const o=Uu(a,"Failed to persist write");t.reject(o)}}async function Mx(n,e){const t=me(n);try{const r=await w6(t.localStore,e);e.targetChanges.forEach((a,o)=>{const u=t.Ua.get(o);u&&(ve(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?u.Ba=!0:a.modifiedDocuments.size>0?ve(u.Ba):a.removedDocuments.size>0&&(ve(u.Ba),u.Ba=!1))}),await is(t,r,e)}catch(r){await ua(r)}}function lS(n,e,t){const r=me(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const a=[];r.ka.forEach((o,u)=>{const d=u.view.sa(e);d.snapshot&&a.push(d.snapshot)}),function(u,d){const f=me(u);f.onlineState=d;let m=!1;f.queries.forEach((y,v)=>{for(const b of v.ta)b.sa(d)&&(m=!0)}),m&&nT(f)}(r.eventManager,e),a.length&&r.La.p_(a),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function l9(n,e,t){const r=me(n);r.sharedClientState.updateQueryState(e,"rejected",t);const a=r.Ua.get(e),o=a&&a.key;if(o){let u=new ct(pe.comparator);u=u.insert(o,dt.newNoDocument(o,Te.min()));const d=Pe().add(o),f=new Ed(Te.min(),new Map,new ct(Ce),u,d);await Mx(r,f),r.$a=r.$a.remove(o),r.Ua.delete(e),oT(r)}else await yu(r.localStore,e,!1).then(()=>Eu(r,e,t)).catch(ua)}async function u9(n,e){const t=me(n),r=e.batch.batchId;try{const a=await b6(t.localStore,e);aT(t,r,null),sT(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await is(t,a)}catch(a){await ua(a)}}async function c9(n,e,t){const r=me(n);try{const a=await function(u,d){const f=me(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let y;return f.mutationQueue.lookupMutationBatch(m,d).next(v=>(ve(v!==null),y=v.keys(),f.mutationQueue.removeMutationBatch(m,v))).next(()=>f.mutationQueue.performConsistencyCheck(m)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(m,y,d)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,y)).next(()=>f.localDocuments.getDocuments(m,y))})}(r.localStore,e);aT(r,e,t),sT(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await is(r,a)}catch(a){await ua(a)}}async function h9(n,e){const t=me(n);da(t.remoteStore)||oe(fa,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(u){const d=me(u);return d.persistence.runTransaction("Get highest unacknowledged batch id","readonly",f=>d.mutationQueue.getHighestUnacknowledgedBatchId(f))}(t.localStore);if(r===$s)return void e.resolve();const a=t.Ga.get(r)||[];a.push(e),t.Ga.set(r,a)}catch(r){const a=Uu(r,"Initialization of waitForPendingWrites() operation failed");e.reject(a)}}function sT(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function aT(n,e,t){const r=me(n);let a=r.Wa[r.currentUser.toKey()];if(a){const o=a.get(e);o&&(t?o.reject(t):o.resolve(),a=a.remove(e)),r.Wa[r.currentUser.toKey()]=a}}function Eu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(r=>{n.Ka.containsKey(r)||Lx(n,r)})}function Lx(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(_u(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),oT(n))}function Cv(n,e,t){for(const r of t)r instanceof Nx?(n.Ka.addReference(r.key,e),d9(n,r)):r instanceof kx?(oe(fa,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,e),n.Ka.containsKey(r.key)||Lx(n,r.key)):ye()}function d9(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(oe(fa,"New document in limbo: "+t),n.Qa.add(r),oT(n))}function oT(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new pe(Fe.fromString(e)),r=n.za.next();n.Ua.set(r,new t9(t)),n.$a=n.$a.insert(t,r),Hm(n.remoteStore,new Hi(On(Nu(t.path)),r,"TargetPurposeLimboResolution",jn.ae))}}async function is(n,e,t){const r=me(n),a=[],o=[],u=[];r.ka.isEmpty()||(r.ka.forEach((d,f)=>{u.push(r.Ha(f,e,t).then(m=>{var y;if((m||t)&&r.isPrimaryClient){const v=m?!m.fromCache:(y=t==null?void 0:t.targetChanges.get(f.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(f.targetId,v?"current":"not-current")}if(m){a.push(m);const v=$E.Yi(f.targetId,m);o.push(v)}}))}),await Promise.all(u),r.La.p_(a),await async function(f,m){const y=me(f);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>z.forEach(m,b=>z.forEach(b.Hi,A=>y.persistence.referenceDelegate.addReference(v,b.targetId,A)).next(()=>z.forEach(b.Ji,A=>y.persistence.referenceDelegate.removeReference(v,b.targetId,A)))))}catch(v){if(!ca(v))throw v;oe(KE,"Failed to update sequence numbers: "+v)}for(const v of m){const b=v.targetId;if(!v.fromCache){const A=y.Ts.get(b),x=A.snapshotVersion,U=A.withLastLimboFreeSnapshotVersion(x);y.Ts=y.Ts.insert(b,U)}}}(r.localStore,o))}async function f9(n,e){const t=me(n);if(!t.currentUser.isEqual(e)){oe(fa,"User change. New user:",e.toKey());const r=await px(t.localStore,e);t.currentUser=e,function(o,u){o.Ga.forEach(d=>{d.forEach(f=>{f.reject(new ae(W.CANCELLED,u))})}),o.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await is(t,r.Rs)}}function p9(n,e){const t=me(n),r=t.Ua.get(e);if(r&&r.Ba)return Pe().add(r.key);{let a=Pe();const o=t.qa.get(e);if(!o)return a;for(const u of o){const d=t.ka.get(u);a=a.unionWith(d.view.Sa)}return a}}async function m9(n,e){const t=me(n),r=await sm(t.localStore,e.query,!0),a=e.view.Oa(r);return t.isPrimaryClient&&Cv(t,e.targetId,a.Ma),a}async function g9(n,e){const t=me(n);return _x(t.localStore,e).then(r=>is(t,r))}async function y9(n,e,t,r){const a=me(n),o=await function(d,f){const m=me(d),y=me(m.mutationQueue);return m.persistence.runTransaction("Lookup mutation documents","readonly",v=>y.Ln(v,f).next(b=>b?m.localDocuments.getDocuments(v,b):z.resolve(null)))}(a.localStore,e);o!==null?(t==="pending"?await Mu(a.remoteStore):t==="acknowledged"||t==="rejected"?(aT(a,e,r||null),sT(a,e),function(d,f){me(me(d).mutationQueue).qn(f)}(a.localStore,e)):ye(),await is(a,o)):oe(fa,"Cannot apply mutation batch with id: "+e)}async function _9(n,e){const t=me(n);if(Gm(t),lT(t),e===!0&&t.ja!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),a=await uS(t,r.toArray());t.ja=!0,await Sv(t.remoteStore,!0);for(const o of a)Hm(t.remoteStore,o)}else if(e===!1&&t.ja!==!1){const r=[];let a=Promise.resolve();t.qa.forEach((o,u)=>{t.sharedClientState.isLocalQueryTarget(u)?r.push(u):a=a.then(()=>(Eu(t,u),yu(t.localStore,u,!0))),_u(t.remoteStore,u)}),await a,await uS(t,r),function(u){const d=me(u);d.Ua.forEach((f,m)=>{_u(d.remoteStore,m)}),d.Ka.Dr(),d.Ua=new Map,d.$a=new ct(pe.comparator)}(t),t.ja=!1,await Sv(t.remoteStore,!1)}}async function uS(n,e,t){const r=me(n),a=[],o=[];for(const u of e){let d;const f=r.qa.get(u);if(f&&f.length!==0){d=await gu(r.localStore,On(f[0]));for(const m of f){const y=r.ka.get(m),v=await m9(r,y);v.snapshot&&o.push(v.snapshot)}}else{const m=await yx(r.localStore,u);d=await gu(r.localStore,m),await iT(r,Ux(m),u,!1,d.resumeToken)}a.push(d)}return r.La.p_(o),a}function Ux(n){return TC(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function v9(n){return function(t){return me(me(t).persistence).zi()}(me(n).localStore)}async function E9(n,e,t,r){const a=me(n);if(a.ja)return void oe(fa,"Ignoring unexpected query state notification.");const o=a.qa.get(e);if(o&&o.length>0)switch(t){case"current":case"not-current":{const u=await _x(a.localStore,wC(o[0])),d=Ed.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Dt.EMPTY_BYTE_STRING);await is(a,u,d);break}case"rejected":await yu(a.localStore,e,!0),Eu(a,e,r);break;default:ye()}}async function T9(n,e,t){const r=Gm(n);if(r.ja){for(const a of e){if(r.qa.has(a)&&r.sharedClientState.isActiveQueryTarget(a)){oe(fa,"Adding an already active target "+a);continue}const o=await yx(r.localStore,a),u=await gu(r.localStore,o);await iT(r,Ux(o),u.targetId,!1,u.resumeToken),Hm(r.remoteStore,u)}for(const a of t)r.qa.has(a)&&await yu(r.localStore,a,!1).then(()=>{_u(r.remoteStore,a),Eu(r,a)}).catch(ua)}}function Gm(n){const e=me(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=p9.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=l9.bind(null,e),e.La.p_=W6.bind(null,e.eventManager),e.La.Ja=X6.bind(null,e.eventManager),e}function lT(n){const e=me(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=u9.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=c9.bind(null,e),e}function b9(n,e,t){const r=me(n);(async function(o,u,d){try{const f=await u.getMetadata();if(await function(A,x){const U=me(A),M=Lt(x.createTime);return U.persistence.runTransaction("hasNewerBundle","readonly",H=>U.Yr.getBundleMetadata(H,x.id)).then(H=>!!H&&H.createTime.compareTo(M)>=0)}(o.localStore,f))return await u.close(),d._completeWith(function(A){return{taskState:"Success",documentsLoaded:A.totalDocuments,bytesLoaded:A.totalBytes,totalDocuments:A.totalDocuments,totalBytes:A.totalBytes}}(f)),Promise.resolve(new Set);d._updateProgress(Px(f));const m=new J6(f,o.localStore,u.serializer);let y=await u.Ya();for(;y;){const b=await m.Aa(y);b&&d._updateProgress(b),y=await u.Ya()}const v=await m.complete();return await is(o,v.ma,void 0),await function(A,x){const U=me(A);return U.persistence.runTransaction("Save bundle","readwrite",M=>U.Yr.saveBundleMetadata(M,x))}(o.localStore,f),d._completeWith(v.progress),Promise.resolve(v.Va)}catch(f){return di(fa,`Loading bundle failed with ${f}`),d._failWith(f),Promise.resolve(new Set)}})(r,e,t).then(a=>{r.sharedClientState.notifyBundleLoaded(a)})}class Wh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bd(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return fx(this.persistence,new dx,e.initialUser,this.serializer)}Xa(e){return new qE(qm.ri,this.serializer)}Za(e){return new wx}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wh.provider={build:()=>new Wh};class w9 extends Wh{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){ve(this.persistence.referenceDelegate instanceof im);const r=this.persistence.referenceDelegate.garbageCollector;return new ax(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new qE(r=>im.ri(r,t),this.serializer)}}class Bx extends Wh{constructor(e,t,r){super(),this.ru=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ru.initialize(this,e),await lT(this.ru.syncEngine),await Mu(this.ru.remoteStore),await this.persistence.Ci(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}eu(e){return fx(this.persistence,new dx,e.initialUser,this.serializer)}tu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new ax(r,e.asyncQueue,t)}nu(e,t){const r=new N4(t,this.persistence);return new P4(e.asyncQueue,r)}Xa(e){const t=GE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new HE(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Ix(),Pp(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Za(e){return new wx}}class I9 extends Bx{constructor(e,t){super(e,t,!1),this.ru=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.ru.syncEngine;this.sharedClientState instanceof k_&&(this.sharedClientState.syncEngine={uo:y9.bind(null,t),co:E9.bind(null,t),lo:T9.bind(null,t),zi:v9.bind(null,t),ao:g9.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ci(async r=>{await _9(this.ru.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Za(e){const t=Ix();if(!k_.D(t))throw new ae(W.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=GE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new k_(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Xh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lS(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=f9.bind(null,this.syncEngine),await Sv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Y6}()}createDatastore(e){const t=bd(e.databaseInfo.databaseId),r=function(o){return new P6(o)}(e.databaseInfo);return function(o,u,d,f){return new V6(o,u,d,f)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,a,o,u,d){return new L6(r,a,o,u,d)}(this.localStore,this.datastore,e.asyncQueue,t=>lS(this.syncEngine,t,0),function(){return tS.D()?new tS:new R6}())}createSyncEngine(e,t){return function(a,o,u,d,f,m,y){const v=new n9(a,o,u,d,f,m);return y&&(v.ja=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const o=me(a);oe(Ro,"RemoteStore shutting down."),o.W_.add(5),await Vu(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Xh.provider={build:()=>new Xh};function cS(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Mt("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A9{constructor(e,t){this.ou=e,this.serializer=t,this.metadata=new yn,this.buffer=new Uint8Array,this._u=function(){return new TextDecoder("utf-8")}(),this.au().then(r=>{r&&r.Ea()?this.metadata.resolve(r.Ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Ia)}`))},r=>this.metadata.reject(r))}close(){return this.ou.cancel()}async getMetadata(){return this.metadata.promise}async Ya(){return await this.getMetadata(),this.au()}async au(){const e=await this.uu();if(e===null)return null;const t=this._u.decode(e),r=Number(t);isNaN(r)&&this.cu(`length string (${t}) is not valid number`);const a=await this.lu(r);return new Z6(JSON.parse(a),e.length+r)}hu(){return this.buffer.findIndex(e=>e===123)}async uu(){for(;this.hu()<0&&!await this.Pu(););if(this.buffer.length===0)return null;const e=this.hu();e<0&&this.cu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async lu(e){for(;this.buffer.length<e;)await this.Pu()&&this.cu("Reached the end of bundle when more is expected.");const t=this._u.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}cu(e){throw this.ou.cancel(),new Error(`Invalid bundle format: ${e}`)}async Pu(){const e=await this.ou.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S9{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new ae(W.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(a,o){const u=me(a),d={documents:o.map(v=>Qh(u.serializer,v))},f=await u.Co("BatchGetDocuments",u.serializer.databaseId,Fe.emptyPath(),d,o.length),m=new Map;f.forEach(v=>{const b=UB(u.serializer,v);m.set(b.key.toString(),b)});const y=[];return o.forEach(v=>{const b=m.get(v.toString());ve(!!b),y.push(b)}),y}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ou(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const a=pe.fromPath(r);this.mutations.push(new kE(a,this.precondition(a)))}),await async function(r,a){const o=me(r),u={writes:a.map(d=>Yh(o.serializer,d))};await o.So("Commit",o.serializer.databaseId,Fe.emptyPath(),u)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw ye();t=Te.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new ae(W.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Te.min())?vt.exists(!1):vt.updateTime(t):vt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Te.min()))throw new ae(W.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return vt.updateTime(t)}return vt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R9{constructor(e,t,r,a,o){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=a,this.deferred=o,this.Tu=r.maxAttempts,this.a_=new YE(this.asyncQueue,"transaction_retry")}Iu(){this.Tu-=1,this.Eu()}Eu(){this.a_.Xo(async()=>{const e=new S9(this.datastore),t=this.du(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(a=>{this.Au(a)}))}).catch(r=>{this.Au(r)})})}du(e){try{const t=this.updateFunction(e);return!pd(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Au(e){this.Tu>0&&this.Ru(e)?(this.Tu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Eu(),Promise.resolve()))):this.deferred.reject(e)}Ru(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!MC(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="FirestoreClient";class C9{constructor(e,t,r,a,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=a,this.user=ln.UNAUTHENTICATED,this.clientId=z1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async u=>{oe(ia,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(oe(ia,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Uu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function V_(n,e){n.asyncQueue.verifyOperationInProgress(),oe(ia,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async a=>{r.isEqual(a)||(await px(e.localStore,a),r=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function hS(n,e){n.asyncQueue.verifyOperationInProgress();const t=await uT(n);oe(ia,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>rS(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,a)=>rS(e.remoteStore,a)),n._onlineComponents=e}async function uT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){oe(ia,"Using user provided OfflineComponentProvider");try{await V_(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===W.FAILED_PRECONDITION||a.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;di("Error using user provided cache. Falling back to memory cache: "+t),await V_(n,new Wh)}}else oe(ia,"Using default OfflineComponentProvider"),await V_(n,new w9(void 0));return n._offlineComponents}async function Km(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(oe(ia,"Using user provided OnlineComponentProvider"),await hS(n,n._uninitializedComponentsProvider._online)):(oe(ia,"Using default OnlineComponentProvider"),await hS(n,new Xh))),n._onlineComponents}function Fx(n){return uT(n).then(e=>e.persistence)}function cT(n){return uT(n).then(e=>e.localStore)}function zx(n){return Km(n).then(e=>e.remoteStore)}function hT(n){return Km(n).then(e=>e.syncEngine)}function x9(n){return Km(n).then(e=>e.datastore)}async function Tu(n){const e=await Km(n),t=e.eventManager;return t.onListen=r9.bind(null,e.syncEngine),t.onUnlisten=s9.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=i9.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=a9.bind(null,e.syncEngine),t}function D9(n){return n.asyncQueue.enqueue(async()=>{const e=await Fx(n),t=await zx(n);return e.setNetworkEnabled(!0),function(a){const o=me(a);return o.W_.delete(0),wd(o)}(t)})}function P9(n){return n.asyncQueue.enqueue(async()=>{const e=await Fx(n),t=await zx(n);return e.setNetworkEnabled(!1),async function(a){const o=me(a);o.W_.add(0),await Vu(o),o.j_.set("Offline")}(t)})}function N9(n,e){const t=new yn;return n.asyncQueue.enqueueAndForget(async()=>async function(a,o,u){try{const d=await function(m,y){const v=me(m);return v.persistence.runTransaction("read document","readonly",b=>v.localDocuments.getDocument(b,y))}(a,o);d.isFoundDocument()?u.resolve(d):d.isNoDocument()?u.resolve(null):u.reject(new ae(W.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(d){const f=Uu(d,`Failed to get document '${o} from cache`);u.reject(f)}}(await cT(n),e,t)),t.promise}function jx(n,e,t={}){const r=new yn;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,d,f,m){const y=new $m({next:b=>{y.su(),u.enqueueAndForget(()=>tT(o,v));const A=b.docs.has(d);!A&&b.fromCache?m.reject(new ae(W.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&b.fromCache&&f&&f.source==="server"?m.reject(new ae(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(b)},error:b=>m.reject(b)}),v=new rT(Nu(d.path),y,{includeMetadataChanges:!0,Ta:!0});return eT(o,v)}(await Tu(n),n.asyncQueue,e,t,r)),r.promise}function k9(n,e){const t=new yn;return n.asyncQueue.enqueueAndForget(async()=>async function(a,o,u){try{const d=await sm(a,o,!0),f=new Ox(o,d.gs),m=f.ba(d.documents),y=f.applyChanges(m,!1);u.resolve(y.snapshot)}catch(d){const f=Uu(d,`Failed to execute query '${o} against cache`);u.reject(f)}}(await cT(n),e,t)),t.promise}function qx(n,e,t={}){const r=new yn;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,d,f,m){const y=new $m({next:b=>{y.su(),u.enqueueAndForget(()=>tT(o,v)),b.fromCache&&f.source==="server"?m.reject(new ae(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(b)},error:b=>m.reject(b)}),v=new rT(d,y,{includeMetadataChanges:!0,Ta:!0});return eT(o,v)}(await Tu(n),n.asyncQueue,e,t,r)),r.promise}function O9(n,e){const t=new $m(e);return n.asyncQueue.enqueueAndForget(async()=>function(a,o){me(a).ia.add(o),o.next()}(await Tu(n),t)),()=>{t.su(),n.asyncQueue.enqueueAndForget(async()=>function(a,o){me(a).ia.delete(o)}(await Tu(n),t))}}function V9(n,e,t,r){const a=function(u,d){let f;return f=typeof u=="string"?EE().encode(u):u,function(y,v){return new A9(y,v)}(function(y,v){if(y instanceof Uint8Array)return cS(y,v);if(y instanceof ArrayBuffer)return cS(new Uint8Array(y),v);if(y instanceof ReadableStream)return y.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(f),d)}(t,bd(e));n.asyncQueue.enqueueAndForget(async()=>{b9(await hT(n),a,r)})}function M9(n,e){return n.asyncQueue.enqueue(async()=>function(r,a){const o=me(r);return o.persistence.runTransaction("Get named query","readonly",u=>o.Yr.getNamedQuery(u,a))}(await cT(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(n,e,t){if(!t)throw new ae(W.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Gx(n,e,t,r){if(e===!0&&r===!0)throw new ae(W.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function fS(n){if(!pe.isDocumentKey(n))throw new ae(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function pS(n){if(pe.isDocumentKey(n))throw new ae(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Qm(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ye()}function Qe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ae(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qm(n);throw new ae(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function $x(n,e){if(e<=0)throw new ae(W.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx="firestore.googleapis.com",mS=!0;class gS{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ae(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Kx,this.ssl=mS}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:mS;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=nx;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<r6)throw new ae(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Gx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hx((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,a){return r.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Id{constructor(e,t,r,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new E4;switch(r.type){case"firstParty":return new I4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ae(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=dS.get(t);r&&(oe("ComponentProvider","Removing Datastore"),dS.delete(t),r.terminate())}(this),Promise.resolve()}}function L9(n,e,t,r={}){var a;const o=(n=Qe(n,Id))._getSettings(),u=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),d=`${e}:${t}`;o.host!==Kx&&o.host!==d&&di("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},o),{host:d,ssl:!1,emulatorOptions:r});if(!Qs(f,u)&&(n._setSettings(f),r.mockUserToken)){let m,y;if(typeof r.mockUserToken=="string")m=r.mockUserToken,y=ln.MOCK_USER;else{m=BO(r.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new ae(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new ln(v)}n._authCredentials=new T4(new F1(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vn=class Qx{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Qx(this.firestore,e,this._query)}},It=class Yx{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ks(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Yx(this.firestore,e,this._key)}},Ks=class Wx extends Vn{constructor(e,t,r){super(e,t,Nu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new pe(e))}withConverter(e){return new Wx(this.firestore,e,this._path)}};function Xx(n,e,...t){if(n=Ae(n),dT("collection","path",e),n instanceof Id){const r=Fe.fromString(e,...t);return pS(r),new Ks(n,null,r)}{if(!(n instanceof It||n instanceof Ks))throw new ae(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Fe.fromString(e,...t));return pS(r),new Ks(n.firestore,null,r)}}function U9(n,e){if(n=Qe(n,Id),dT("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new ae(W.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Vn(n,null,function(r){return new ts(Fe.emptyPath(),r)}(e))}function um(n,e,...t){if(n=Ae(n),arguments.length===1&&(e=z1.newId()),dT("doc","path",e),n instanceof Id){const r=Fe.fromString(e,...t);return fS(r),new It(n,null,new pe(r))}{if(!(n instanceof It||n instanceof Ks))throw new ae(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Fe.fromString(e,...t));return fS(r),new It(n.firestore,n instanceof Ks?n.converter:null,new pe(r))}}function Zx(n,e){return n=Ae(n),e=Ae(e),(n instanceof It||n instanceof Ks)&&(e instanceof It||e instanceof Ks)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Jx(n,e){return n=Ae(n),e=Ae(e),n instanceof Vn&&e instanceof Vn&&n.firestore===e.firestore&&yd(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS="AsyncQueue";class _S{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new YE(this,"async_queue_retry"),this.Su=()=>{const r=Pp();r&&oe(yS,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=Pp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Pp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new yn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ca(e))throw e;oe(yS,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const a=function(u){let d=u.message||"";return u.stack&&(d=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),d}(r);throw Mt("INTERNAL UNHANDLED ERROR: ",a),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const a=JE.createAndSchedule(this,e,t,r,o=>this.Fu(o));return this.fu.push(a),a}Du(){this.gu&&ye()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function xv(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const a=t;for(const o of r)if(o in a&&typeof a[o]=="function")return!0;return!1}(n,["next","error","complete"])}class B9{constructor(){this._progressObserver={},this._taskCompletionResolver=new yn,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F9=-1;let Ut=class extends Id{constructor(e,t,r,a){super(e,t,r,a),this.type="firestore",this._queue=new _S,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _S(e),this._firestoreClient=void 0,await e}}};function Sn(n){if(n._terminated)throw new ae(W.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||eD(n),n._firestoreClient}function eD(n){var e,t,r;const a=n._freezeSettings(),o=function(d,f,m,y){return new oB(d,f,m,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,Hx(y.experimentalLongPollingOptions),y.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=a.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new C9(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}}(n._componentsProvider))}function z9(n,e){di("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return tD(n,Xh.provider,{build:r=>new Bx(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function j9(n){di("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();tD(n,Xh.provider,{build:t=>new I9(t,e.cacheSizeBytes)})}function tD(n,e,t){if((n=Qe(n,Ut))._firestoreClient||n._terminated)throw new ae(W.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new ae(W.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},eD(n)}function q9(n){if(n._initialized&&!n._terminated)throw new ae(W.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new yn;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!oi.D())return Promise.resolve();const a=r+hx;await oi.delete(a)}(GE(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function H9(n){return function(t){const r=new yn;return t.asyncQueue.enqueueAndForget(async()=>h9(await hT(t),r)),r.promise}(Sn(n=Qe(n,Ut)))}function G9(n){return D9(Sn(n=Qe(n,Ut)))}function $9(n){return P9(Sn(n=Qe(n,Ut)))}function K9(n,e){const t=Sn(n=Qe(n,Ut)),r=new B9;return V9(t,n._databaseId,e,r),r}function Q9(n,e){return M9(Sn(n=Qe(n,Ut)),e).then(t=>t?new Vn(n,null,t.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pi(Dt.fromBase64String(e))}catch(t){throw new ae(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new pi(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ae(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ae(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ae(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,a){if(r.length!==a.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==a[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y9=/^__.*__$/;class W9{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new rs(e,this.data,this.fieldMask,t,this.fieldTransforms):new ku(e,this.data,t,this.fieldTransforms)}}class nD{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new rs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function rD(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye()}}class Wm{constructor(e,t,r,a,o,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=a,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Wm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:r,Qu:!1});return a.$u(e),a}Uu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:r,Qu:!1});return a.Bu(),a}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return cm(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(rD(this.Lu)&&Y9.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class X9{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||bd(e)}ju(e,t,r,a=!1){return new Wm({Lu:e,methodName:t,zu:r,path:_t.emptyPath(),Qu:!1,Gu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ko(n){const e=n._freezeSettings(),t=bd(n._databaseId);return new X9(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Xm(n,e,t,r,a,o={}){const u=n.ju(o.merge||o.mergeFields?2:0,e,t,a);ET("Data must be an object, but it was:",u,r);const d=aD(r,u);let f,m;if(o.merge)f=new qn(u.fieldMask),m=u.fieldTransforms;else if(o.mergeFields){const y=[];for(const v of o.mergeFields){const b=Dv(e,v,t);if(!u.contains(b))throw new ae(W.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);lD(y,b)||y.push(b)}f=new qn(y),m=u.fieldTransforms.filter(v=>f.covers(v.field))}else f=null,m=u.fieldTransforms;return new W9(new gn(d),f,m)}class Ad extends No{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ad}}function iD(n,e,t){return new Wm({Lu:3,zu:e.settings.zu,methodName:n._methodName,Qu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class pT extends No{_toFieldTransform(e){return new vd(e.path,new fu)}isEqual(e){return e instanceof pT}}class mT extends No{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=iD(this,e,!0),r=this.Hu.map(o=>Oo(o,t)),a=new bo(r);return new vd(e.path,a)}isEqual(e){return e instanceof mT&&Qs(this.Hu,e.Hu)}}class gT extends No{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=iD(this,e,!0),r=this.Hu.map(o=>Oo(o,t)),a=new wo(r);return new vd(e.path,a)}isEqual(e){return e instanceof gT&&Qs(this.Hu,e.Hu)}}class yT extends No{constructor(e,t){super(e),this.Ju=t}_toFieldTransform(e){const t=new pu(e.serializer,xC(e.serializer,this.Ju));return new vd(e.path,t)}isEqual(e){return e instanceof yT&&this.Ju===e.Ju}}function _T(n,e,t,r){const a=n.ju(1,e,t);ET("Data must be an object, but it was:",a,r);const o=[],u=gn.empty();ha(r,(f,m)=>{const y=TT(e,f,t);m=Ae(m);const v=a.Uu(y);if(m instanceof Ad)o.push(y);else{const b=Oo(m,v);b!=null&&(o.push(y),u.set(y,b))}});const d=new qn(o);return new nD(u,d,a.fieldTransforms)}function vT(n,e,t,r,a,o){const u=n.ju(1,e,t),d=[Dv(e,r,t)],f=[a];if(o.length%2!=0)throw new ae(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<o.length;b+=2)d.push(Dv(e,o[b])),f.push(o[b+1]);const m=[],y=gn.empty();for(let b=d.length-1;b>=0;--b)if(!lD(m,d[b])){const A=d[b];let x=f[b];x=Ae(x);const U=u.Uu(A);if(x instanceof Ad)m.push(A);else{const M=Oo(x,U);M!=null&&(m.push(A),y.set(A,M))}}const v=new qn(m);return new nD(y,v,u.fieldTransforms)}function sD(n,e,t,r=!1){return Oo(t,n.ju(r?4:3,e))}function Oo(n,e){if(oD(n=Ae(n)))return ET("Unsupported field value:",e,n),aD(n,e);if(n instanceof No)return function(r,a){if(!rD(a.Lu))throw a.Wu(`${r._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(a);o&&a.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,a){const o=[];let u=0;for(const d of r){let f=Oo(d,a.Ku(u));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),u++}return{arrayValue:{values:o}}}(n,e)}return function(r,a){if((r=Ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xC(a.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Et.fromDate(r);return{timestampValue:mu(a.serializer,o)}}if(r instanceof Et){const o=new Et(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:mu(a.serializer,o)}}if(r instanceof Ym)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pi)return{bytesValue:FC(a.serializer,r._byteString)};if(r instanceof It){const o=a.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw a.Wu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:UE(r.firestore._databaseId||a.databaseId,r._key.path)}}if(r instanceof fT)return function(u,d){return{mapValue:{fields:{[RE]:{stringValue:CE},[cu]:{arrayValue:{values:u.toArray().map(m=>{if(typeof m!="number")throw d.Wu("VectorValues must only contain numeric values.");return NE(d.serializer,m)})}}}}}}(r,a);throw a.Wu(`Unsupported field value: ${Qm(r)}`)}(n,e)}function aD(n,e){const t={};return iC(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ha(n,(r,a)=>{const o=Oo(a,e.qu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function oD(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Et||n instanceof Ym||n instanceof pi||n instanceof It||n instanceof No||n instanceof fT)}function ET(n,e,t){if(!oD(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const r=Qm(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function Dv(n,e,t){if((e=Ae(e))instanceof sa)return e._internalPath;if(typeof e=="string")return TT(n,e);throw cm("Field path arguments must be of type string or ",n,!1,void 0,t)}const Z9=new RegExp("[~\\*/\\[\\]]");function TT(n,e,t){if(e.search(Z9)>=0)throw cm(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new sa(...e.split("."))._internalPath}catch{throw cm(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function cm(n,e,t,r,a){const o=r&&!r.isEmpty(),u=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(o||u)&&(f+=" (found",o&&(f+=` in field ${r}`),u&&(f+=` in document ${a}`),f+=")"),new ae(W.INVALID_ARGUMENT,d+n+f)}function lD(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,t,r,a,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=a,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new J9(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Zm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class J9 extends Zh{data(){return super.data()}}function Zm(n,e){return typeof e=="string"?TT(n,e):e instanceof sa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ae(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bT{}class Sd extends bT{}function Ls(n,e,...t){let r=[];e instanceof bT&&r.push(e),r=r.concat(t),function(o){const u=o.filter(f=>f instanceof wT).length,d=o.filter(f=>f instanceof Jm).length;if(u>1||u>0&&d>0)throw new ae(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const a of r)n=a._apply(n);return n}class Jm extends Sd{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Jm(e,t,r)}_apply(e){const t=this._parse(e);return hD(e._query,t),new Vn(e.firestore,e.converter,gv(e._query,t))}_parse(e){const t=ko(e.firestore);return function(o,u,d,f,m,y,v){let b;if(m.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new ae(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){ES(v,y);const x=[];for(const U of v)x.push(vS(f,o,U));b={arrayValue:{values:x}}}else b=vS(f,o,v)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||ES(v,y),b=sD(d,u,v,y==="in"||y==="not-in");return ze.create(m,y,b)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function e3(n,e,t){const r=e,a=Zm("where",n);return Jm._create(a,r,t)}class wT extends bT{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new wT(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:tt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(a,o){let u=a;const d=o.getFlattenedFilters();for(const f of d)hD(u,f),u=gv(u,f)}(e._query,t),new Vn(e.firestore,e.converter,gv(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class IT extends Sd{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new IT(e,t)}_apply(e){const t=function(a,o,u){if(a.startAt!==null)throw new ae(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new ae(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Kh(o,u)}(e._query,this._field,this._direction);return new Vn(e.firestore,e.converter,function(a,o){const u=a.explicitOrderBy.concat([o]);return new ts(a.path,a.collectionGroup,u,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(e._query,t))}}function t3(n,e="asc"){const t=e,r=Zm("orderBy",n);return IT._create(r,t)}class eg extends Sd{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new eg(e,t,r)}_apply(e){return new Vn(e.firestore,e.converter,em(e._query,this._limit,this._limitType))}}function n3(n){return $x("limit",n),eg._create("limit",n,"F")}function r3(n){return $x("limitToLast",n),eg._create("limitToLast",n,"L")}class tg extends Sd{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new tg(e,t,r)}_apply(e){const t=cD(e,this.type,this._docOrFields,this._inclusive);return new Vn(e.firestore,e.converter,function(a,o){return new ts(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,o,a.endAt)}(e._query,t))}}function i3(...n){return tg._create("startAt",n,!0)}function s3(...n){return tg._create("startAfter",n,!1)}class ng extends Sd{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new ng(e,t,r)}_apply(e){const t=cD(e,this.type,this._docOrFields,this._inclusive);return new Vn(e.firestore,e.converter,function(a,o){return new ts(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,o)}(e._query,t))}}function a3(...n){return ng._create("endBefore",n,!1)}function o3(...n){return ng._create("endAt",n,!0)}function cD(n,e,t,r){if(t[0]=Ae(t[0]),t[0]instanceof Zh)return function(o,u,d,f,m){if(!f)throw new ae(W.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${d}().`);const y=[];for(const v of Kl(o))if(v.field.isKeyField())y.push(Eo(u,f.key));else{const b=f.data.field(v.field);if(Mm(b))throw new ae(W.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+v.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(b===null){const A=v.field.canonicalString();throw new ae(W.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${A}' (used as the orderBy) does not exist.`)}y.push(b)}return new na(y,m)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const a=ko(n.firestore);return function(u,d,f,m,y,v){const b=u.explicitOrderBy;if(y.length>b.length)throw new ae(W.INVALID_ARGUMENT,`Too many arguments provided to ${m}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const A=[];for(let x=0;x<y.length;x++){const U=y[x];if(b[x].field.isKeyField()){if(typeof U!="string")throw new ae(W.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${m}(), but got a ${typeof U}`);if(!DE(u)&&U.indexOf("/")!==-1)throw new ae(W.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${m}() must be a plain document ID, but '${U}' contains a slash.`);const M=u.path.child(Fe.fromString(U));if(!pe.isDocumentKey(M))throw new ae(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${m}() must result in a valid document path, but '${M}' is not because it contains an odd number of segments.`);const H=new pe(M);A.push(Eo(d,H))}else{const M=sD(f,m,U);A.push(M)}}return new na(A,v)}(n._query,n.firestore._databaseId,a,e,t,r)}}function vS(n,e,t){if(typeof(t=Ae(t))=="string"){if(t==="")throw new ae(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!DE(e)&&t.indexOf("/")!==-1)throw new ae(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Fe.fromString(t));if(!pe.isDocumentKey(r))throw new ae(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Eo(n,new pe(r))}if(t instanceof It)return Eo(n,t._key);throw new ae(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qm(t)}.`)}function ES(n,e){if(!Array.isArray(n)||n.length===0)throw new ae(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function hD(n,e){const t=function(a,o){for(const u of a)for(const d of u.getFlattenedFilters())if(o.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ae(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ae(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class AT{convertValue(e,t="none"){switch(ea(e)){case 0:return null;case 1:return e.booleanValue;case 2:return gt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ye()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ha(e,(a,o)=>{r[a]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,a;const o=(a=(r=(t=e.fields)===null||t===void 0?void 0:t[cu].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.map(u=>gt(u.doubleValue));return new fT(o)}convertGeoPoint(e){return new Ym(gt(e.latitude),gt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Lm(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Hh(e));default:return null}}convertTimestamp(e){const t=Wi(e);return new Et(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Fe.fromString(e);ve(XC(r));const a=new Js(r.get(1),r.get(3)),o=new pe(r.popFirst(5));return a.isEqual(t)||Mt(`Document ${o} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class l3 extends AT{constructor(e){super(),this.firestore=e}convertBytes(e){return new pi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Zi=class extends Zh{constructor(e,t,r,a,o,u){super(e,t,r,a,u),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ch(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Zm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},Ch=class extends Zi{data(e={}){return super.data(e)}},aa=class{constructor(e,t,r,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new uo(a.hasPendingWrites,a.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ch(this._firestore,this._userDataWriter,r.key,r,new uo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ae(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,o){if(a._snapshot.oldDocs.isEmpty()){let u=0;return a._snapshot.docChanges.map(d=>{const f=new Ch(a._firestore,a._userDataWriter,d.doc.key,d.doc,new uo(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}})}{let u=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>o||d.type!==3).map(d=>{const f=new Ch(a._firestore,a._userDataWriter,d.doc.key,d.doc,new uo(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let m=-1,y=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),y=u.indexOf(d.doc.key)),{type:u3(d.type),doc:f,oldIndex:m,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function u3(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye()}}function dD(n,e){return n instanceof Zi&&e instanceof Zi?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof aa&&e instanceof aa&&n._firestore===e._firestore&&Jx(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c3(n){n=Qe(n,It);const e=Qe(n.firestore,Ut);return jx(Sn(e),n._key).then(t=>ST(e,n,t))}class Vo extends AT{constructor(e){super(),this.firestore=e}convertBytes(e){return new pi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,t)}}function h3(n){n=Qe(n,It);const e=Qe(n.firestore,Ut),t=Sn(e),r=new Vo(e);return N9(t,n._key).then(a=>new Zi(e,r,n._key,a,new uo(a!==null&&a.hasLocalMutations,!0),n.converter))}function d3(n){n=Qe(n,It);const e=Qe(n.firestore,Ut);return jx(Sn(e),n._key,{source:"server"}).then(t=>ST(e,n,t))}function f3(n){n=Qe(n,Vn);const e=Qe(n.firestore,Ut),t=Sn(e),r=new Vo(e);return uD(n._query),qx(t,n._query).then(a=>new aa(e,r,n,a))}function p3(n){n=Qe(n,Vn);const e=Qe(n.firestore,Ut),t=Sn(e),r=new Vo(e);return k9(t,n._query).then(a=>new aa(e,r,n,a))}function m3(n){n=Qe(n,Vn);const e=Qe(n.firestore,Ut),t=Sn(e),r=new Vo(e);return qx(t,n._query,{source:"server"}).then(a=>new aa(e,r,n,a))}function TS(n,e,t){n=Qe(n,It);const r=Qe(n.firestore,Ut),a=rg(n.converter,e,t);return Rd(r,[Xm(ko(r),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,vt.none())])}function bS(n,e,t,...r){n=Qe(n,It);const a=Qe(n.firestore,Ut),o=ko(a);let u;return u=typeof(e=Ae(e))=="string"||e instanceof sa?vT(o,"updateDoc",n._key,e,t,r):_T(o,"updateDoc",n._key,e),Rd(a,[u.toMutation(n._key,vt.exists(!0))])}function g3(n){return Rd(Qe(n.firestore,Ut),[new Ou(n._key,vt.none())])}function y3(n,e){const t=Qe(n.firestore,Ut),r=um(n),a=rg(n.converter,e);return Rd(t,[Xm(ko(n.firestore),"addDoc",r._key,a,n.converter!==null,{}).toMutation(r._key,vt.exists(!1))]).then(()=>r)}function fD(n,...e){var t,r,a;n=Ae(n);let o={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||xv(e[u])||(o=e[u],u++);const d={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(xv(e[u])){const v=e[u];e[u]=(t=v.next)===null||t===void 0?void 0:t.bind(v),e[u+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),e[u+2]=(a=v.complete)===null||a===void 0?void 0:a.bind(v)}let f,m,y;if(n instanceof It)m=Qe(n.firestore,Ut),y=Nu(n._key.path),f={next:v=>{e[u]&&e[u](ST(m,n,v))},error:e[u+1],complete:e[u+2]};else{const v=Qe(n,Vn);m=Qe(v.firestore,Ut),y=v._query;const b=new Vo(m);f={next:A=>{e[u]&&e[u](new aa(m,b,v,A))},error:e[u+1],complete:e[u+2]},uD(n._query)}return function(b,A,x,U){const M=new $m(U),H=new rT(A,M,x);return b.asyncQueue.enqueueAndForget(async()=>eT(await Tu(b),H)),()=>{M.su(),b.asyncQueue.enqueueAndForget(async()=>tT(await Tu(b),H))}}(Sn(m),y,d,f)}function _3(n,e){return O9(Sn(n=Qe(n,Ut)),xv(e)?e:{next:e})}function Rd(n,e){return function(r,a){const o=new yn;return r.asyncQueue.enqueueAndForget(async()=>o9(await hT(r),a,o)),o.promise}(Sn(n),e)}function ST(n,e,t){const r=t.docs.get(e._key),a=new Vo(n);return new Zi(n,a,e._key,r,new uo(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v3={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E3=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ko(e)}set(e,t,r){this._verifyNotCommitted();const a=js(e,this._firestore),o=rg(a.converter,t,r),u=Xm(this._dataReader,"WriteBatch.set",a._key,o,a.converter!==null,r);return this._mutations.push(u.toMutation(a._key,vt.none())),this}update(e,t,r,...a){this._verifyNotCommitted();const o=js(e,this._firestore);let u;return u=typeof(t=Ae(t))=="string"||t instanceof sa?vT(this._dataReader,"WriteBatch.update",o._key,t,r,a):_T(this._dataReader,"WriteBatch.update",o._key,t),this._mutations.push(u.toMutation(o._key,vt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=js(e,this._firestore);return this._mutations=this._mutations.concat(new Ou(t._key,vt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ae(W.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function js(n,e){if((n=Ae(n)).firestore!==e)throw new ae(W.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T3{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=ko(e)}get(e){const t=js(e,this._firestore),r=new l3(this._firestore);return this._transaction.lookup([t._key]).then(a=>{if(!a||a.length!==1)return ye();const o=a[0];if(o.isFoundDocument())return new Zh(this._firestore,r,o.key,o,t.converter);if(o.isNoDocument())return new Zh(this._firestore,r,t._key,null,t.converter);throw ye()})}set(e,t,r){const a=js(e,this._firestore),o=rg(a.converter,t,r),u=Xm(this._dataReader,"Transaction.set",a._key,o,a.converter!==null,r);return this._transaction.set(a._key,u),this}update(e,t,r,...a){const o=js(e,this._firestore);let u;return u=typeof(t=Ae(t))=="string"||t instanceof sa?vT(this._dataReader,"Transaction.update",o._key,t,r,a):_T(this._dataReader,"Transaction.update",o._key,t),this._transaction.update(o._key,u),this}delete(e){const t=js(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let b3=class extends T3{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=js(e,this._firestore),r=new Vo(this._firestore);return super.get(e).then(a=>new Zi(this._firestore,r,t._key,a._document,new uo(!1,!1),t.converter))}};function w3(n,e,t){n=Qe(n,Ut);const r=Object.assign(Object.assign({},v3),t);return function(o){if(o.maxAttempts<1)throw new ae(W.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(o,u,d){const f=new yn;return o.asyncQueue.enqueueAndForget(async()=>{const m=await x9(o);new R9(o.asyncQueue,m,d,u,f).Iu()}),f.promise}(Sn(n),a=>e(new b3(n,a)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I3(){return new Ad("deleteField")}function A3(){return new pT("serverTimestamp")}function S3(...n){return new mT("arrayUnion",n)}function R3(...n){return new gT("arrayRemove",n)}function C3(n){return new yT("increment",n)}(function(e,t=!0){(function(a){Pu=a})(oa),Xs(new ci("firestore",(r,{instanceIdentifier:a,options:o})=>{const u=r.getProvider("app").getImmediate(),d=new Ut(new b4(r.getProvider("auth-internal")),new A4(u,r.getProvider("app-check-internal")),function(m,y){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new ae(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Js(m.options.projectId,y)}(u,a),u);return o=Object.assign({useFetchStreams:t},o),d._setSettings(o),d},"PUBLIC").setMultipleInstances(!0)),Nr(JI,eA,e),Nr(JI,eA,"esm2017")})();const x3="@firebase/firestore-compat",D3="0.3.45";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new ae("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(){if(typeof Uint8Array>"u")throw new ae("unimplemented","Uint8Arrays are not available in this environment.")}function IS(){if(!sB())throw new ae("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Jh{constructor(e){this._delegate=e}static fromBase64String(e){return IS(),new Jh(pi.fromBase64String(e))}static fromUint8Array(e){return wS(),new Jh(pi.fromUint8Array(e))}toBase64(){return IS(),this._delegate.toBase64()}toUint8Array(){return wS(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(n){return P3(n,["next","error","complete"])}function P3(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N3{enableIndexedDbPersistence(e,t){return z9(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return j9(e._delegate)}clearIndexedDbPersistence(e){return q9(e._delegate)}}class pD{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Js||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&di("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){L9(this._delegate,e,t,r)}enableNetwork(){return G9(this._delegate)}disableNetwork(){return $9(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Gx("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return H9(this._delegate)}onSnapshotsInSync(e){return _3(this._delegate,e)}get app(){if(!this._appCompat)throw new ae("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new bu(this,Xx(this._delegate,e))}catch(t){throw Nn(t,"collection()","Firestore.collection()")}}doc(e){try{return new vr(this,um(this._delegate,e))}catch(t){throw Nn(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Pn(this,U9(this._delegate,e))}catch(t){throw Nn(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return w3(this._delegate,t=>e(new mD(this,t)))}batch(){return Sn(this._delegate),new gD(new E3(this._delegate,e=>Rd(this._delegate,e)))}loadBundle(e){return K9(this._delegate,e)}namedQuery(e){return Q9(this._delegate,e).then(t=>t?new Pn(this,t):null)}}class ig extends AT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jh(new pi(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return vr.forKey(t,this.firestore,null)}}function k3(n){_4(n)}class mD{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new ig(e)}get(e){const t=co(e);return this._delegate.get(t).then(r=>new ed(this._firestore,new Zi(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const a=co(e);return r?(RT("Transaction.set",r),this._delegate.set(a,t,r)):this._delegate.set(a,t),this}update(e,t,r,...a){const o=co(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,r,...a),this}delete(e){const t=co(e);return this._delegate.delete(t),this}}class gD{constructor(e){this._delegate=e}set(e,t,r){const a=co(e);return r?(RT("WriteBatch.set",r),this._delegate.set(a,t,r)):this._delegate.set(a,t),this}update(e,t,r,...a){const o=co(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,r,...a),this}delete(e){const t=co(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Co{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Ch(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new td(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Co.INSTANCES;let a=r.get(e);a||(a=new WeakMap,r.set(e,a));let o=a.get(t);return o||(o=new Co(e,new ig(e),t),a.set(t,o)),o}}Co.INSTANCES=new WeakMap;class vr{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ig(e)}static forPath(e,t,r){if(e.length%2!==0)throw new ae("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new vr(t,new It(t._delegate,r,new pe(e)))}static forKey(e,t,r){return new vr(t,new It(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new bu(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new bu(this.firestore,Xx(this._delegate,e))}catch(t){throw Nn(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Ae(e),e instanceof It?Zx(this._delegate,e):!1}set(e,t){t=RT("DocumentReference.set",t);try{return t?TS(this._delegate,e,t):TS(this._delegate,e)}catch(r){throw Nn(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?bS(this._delegate,e):bS(this._delegate,e,t,...r)}catch(a){throw Nn(a,"updateDoc()","DocumentReference.update()")}}delete(){return g3(this._delegate)}onSnapshot(...e){const t=yD(e),r=_D(e,a=>new ed(this.firestore,new Zi(this.firestore._delegate,this._userDataWriter,a._key,a._document,a.metadata,this._delegate.converter)));return fD(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=h3(this._delegate):(e==null?void 0:e.source)==="server"?t=d3(this._delegate):t=c3(this._delegate),t.then(r=>new ed(this.firestore,new Zi(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new vr(this.firestore,e?this._delegate.withConverter(Co.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Nn(n,e,t){return n.message=n.message.replace(e,t),n}function yD(n){for(const e of n)if(typeof e=="object"&&!Pv(e))return e;return{}}function _D(n,e){var t,r;let a;return Pv(n[0])?a=n[0]:Pv(n[1])?a=n[1]:typeof n[0]=="function"?a={next:n[0],error:n[1],complete:n[2]}:a={next:n[1],error:n[2],complete:n[3]},{next:o=>{a.next&&a.next(e(o))},error:(t=a.error)===null||t===void 0?void 0:t.bind(a),complete:(r=a.complete)===null||r===void 0?void 0:r.bind(a)}}class ed{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new vr(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return dD(this._delegate,e._delegate)}}class td extends ed{data(e){const t=this._delegate.data(e);return this._delegate._converter||v4(t!==void 0),t}}class Pn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ig(e)}where(e,t,r){try{return new Pn(this.firestore,Ls(this._delegate,e3(e,t,r)))}catch(a){throw Nn(a,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Pn(this.firestore,Ls(this._delegate,t3(e,t)))}catch(r){throw Nn(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Pn(this.firestore,Ls(this._delegate,n3(e)))}catch(t){throw Nn(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Pn(this.firestore,Ls(this._delegate,r3(e)))}catch(t){throw Nn(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Pn(this.firestore,Ls(this._delegate,i3(...e)))}catch(t){throw Nn(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Pn(this.firestore,Ls(this._delegate,s3(...e)))}catch(t){throw Nn(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Pn(this.firestore,Ls(this._delegate,a3(...e)))}catch(t){throw Nn(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Pn(this.firestore,Ls(this._delegate,o3(...e)))}catch(t){throw Nn(t,"endAt()","Query.endAt()")}}isEqual(e){return Jx(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=p3(this._delegate):(e==null?void 0:e.source)==="server"?t=m3(this._delegate):t=f3(this._delegate),t.then(r=>new Nv(this.firestore,new aa(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=yD(e),r=_D(e,a=>new Nv(this.firestore,new aa(this.firestore._delegate,this._userDataWriter,this._delegate,a._snapshot)));return fD(this._delegate,t,r)}withConverter(e){return new Pn(this.firestore,e?this._delegate.withConverter(Co.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class O3{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new td(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Nv{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Pn(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new td(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new O3(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new td(this._firestore,r))})}isEqual(e){return dD(this._delegate,e._delegate)}}class bu extends Pn{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new vr(this.firestore,e):null}doc(e){try{return e===void 0?new vr(this.firestore,um(this._delegate)):new vr(this.firestore,um(this._delegate,e))}catch(t){throw Nn(t,"doc()","CollectionReference.doc()")}}add(e){return y3(this._delegate,e).then(t=>new vr(this.firestore,t))}isEqual(e){return Zx(this._delegate,e._delegate)}withConverter(e){return new bu(this.firestore,e?this._delegate.withConverter(Co.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function co(n){return Qe(n,It)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(...e){this._delegate=new sa(...e)}static documentId(){return new CT(_t.keyField().canonicalString())}isEqual(e){return e=Ae(e),e instanceof sa?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{static serverTimestamp(){const e=A3();return e._methodName="FieldValue.serverTimestamp",new io(e)}static delete(){const e=I3();return e._methodName="FieldValue.delete",new io(e)}static arrayUnion(...e){const t=S3(...e);return t._methodName="FieldValue.arrayUnion",new io(t)}static arrayRemove(...e){const t=R3(...e);return t._methodName="FieldValue.arrayRemove",new io(t)}static increment(e){const t=C3(e);return t._methodName="FieldValue.increment",new io(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V3={Firestore:pD,GeoPoint:Ym,Timestamp:Et,Blob:Jh,Transaction:mD,WriteBatch:gD,DocumentReference:vr,DocumentSnapshot:ed,Query:Pn,QueryDocumentSnapshot:td,QuerySnapshot:Nv,CollectionReference:bu,FieldPath:CT,FieldValue:io,setLogLevel:k3,CACHE_SIZE_UNLIMITED:F9};function M3(n,e){n.INTERNAL.registerComponent(new ci("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),a=t.getProvider("firestore").getImmediate();return e(r,a)},"PUBLIC").setServiceProps(Object.assign({},V3)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L3(n){M3(n,(e,t)=>new pD(e,t,new N3)),n.registerVersion(x3,D3)}L3(Ru);const U3={apiKey:"AIzaSyD309GKYlpuMkT-qYOYkEwwoqAo_noJtCY",authDomain:"webapp-middleterm.firebaseapp.com",projectId:"webapp-middleterm",storageBucket:"webapp-middleterm.firebasestorage.app",messagingSenderId:"535875191392",appId:"1:535875191392:web:b228066cc72977d53fb905"},B3=Ru.initializeApp(U3),ri=B3.firestore(),F3=ge.div`
  display:inline-block;
  width:fit-content;
  padding:4px 8px;
  border-radius:4px;
  background-color: #D1FC36;
`;function xT(n){return j.jsx(F3,{className:"btn2",children:n.tag})}const z3=ge.div`
  width: auto;
  height: 240px;
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  border-radius: 16px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  padding: 8px;

  &:hover {
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.1);
  }
`,j3=ge.div`
  height: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 16px;
  background-image: url(${n=>n.imgsrc});
  background-size: cover;
  background-position: center;
`,q3=ge.div`
  display:flex;
  flex-direction:column;
  gap:4px;
  justify-content: center;
  width: 70%;
  height: 100%;
  align-content: center;
  margin-left: 16px;
  padding-right: 32px;

`,H3=ge.div`
  margin: 8px 0px;
`,vD=ge.div`
display: -webkit-box;
-webkit-line-clamp: 1; 
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
`,G3=ge(vD)`
-webkit-line-clamp: 2; 
height:52px;
`;function $3(n){const{imgsrc:e,caption:t,title:r,body:a,itemClicked:o}=n;return j.jsxs(z3,{onClick:o,children:[j.jsx(j3,{imgsrc:e}),j.jsxs(q3,{children:[j.jsx(xT,{tag:n.tag}),j.jsxs(H3,{children:[j.jsx("p",{className:"caption1 opacity50",children:t}),j.jsx(vD,{children:j.jsx("h2",{children:r})})]}),j.jsx(G3,{children:j.jsx("p",{className:"body1 opacity50",children:a})})]})]})}const K3=ge.div`
  display: inline-flex;
  width: fit-content;
  height : 50px;
  border-radius:  8px;
  background-color: ${n=>n.btnbackground};
  color: ${n=>n.btncolor};
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border : 1px solid ${n=>n.btnborder};
  box-sizing: border-box;
  gap : 4px;
  transition: all 0.2s ease-in-out;
  pointer-events: ${n=>n.clickable};
  cursor: pointer;

  &:hover{
    background-color :${n=>n.hoverback};
    color: ${n=>n.hovercolor};
    border : 1px solid ${n=>n.hoverborder};
  }

  &:active{
    background-color :${n=>n.activeback};
    color: ${n=>n.activecolor};
    border : 1px solid ${n=>n.activeborder};
    transition: none;
  }
`;function so(n){const e=n.btntext||"업로드",t=n.state||"default",r=n.imgsrc||"none";let a,o,u,d,f,m,y,v,b,A;if(t==="default")f="#D1FC36",m="#1A1A1B",y="#D1FC36",o="#1A1A1B",u="#FFFFFF",d="#1A1A1B",v="#9FC31D",b="#1A1A1B",A="#9FC31D",a="auto";else if(t==="edge")f="none",m="#1A1A1B",y="#1A1A1B",o="none",u=n.btncolor||"#1A1A1B",d=n.btnborder||"rgba(26, 26, 27, 0.2)",v="#ECEEF0",b="#1A1A1B",a="auto";else if(t==="disabled")f="#ECEEF0",m="#CFD3DA",y="#ECEEF0",o="#ECEEF0",u=n.btncolor||"#CFD3DA",d=n.btnborder||"#ECEEF0",v="#ECEEF0",b="#CFD3DA",A="#ECEEF0",a="none";else if(t==="none")f="#F9C8C2",m=u||"#1A1A1B",y="#E5230A",o="transparent",u=u||"#1A1A1B",d="#E5230A",v="#F29185",b=u||"#F29185",A="#E5230A",a="auto";else return console.log("rectbtn state 잘못입력함"),null;return j.jsxs(K3,{btnbackground:o,btncolor:u,btnborder:d,hoverback:f,hoverborder:y,hovercolor:m,activeback:v,activeborder:A,activecolor:b,clickable:a,onClick:n.onClick,state:t,children:[e,r!=="none"&&j.jsx("img",{src:r,alt:"icon"})]})}const ah=ge.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 61.8px;
  align-items: center;
  border-top: ${n=>n.border};
  padding: 0px 0px;
  margin-bottom: 36px;
`,oh=ge.div`
  display: flex;
  gap: 8px;
`,AS=ge.div`
  display: flex;
  gap: 4px;
`,M_=ge.img`
    cursor: pointer;
    width:12px;
    transition:0.2s ease-in-out;
    margin-right:8px;

    &:hover{
      filter:brightness(500%);
    }
`;function hm(n){const e=n.children||"Default",t=n.total||"(default)",r=n.btntext||"Default",a=n.imgsrc||"./card.svg",o=n.state||"default",u=n.itemClicked,d=n.viewClicked,f=n.backClicked,m=n.statebtn||"default";return o==="dbtn"?j.jsxs(ah,{border:"1px solid #D1D1D1;",children:[j.jsxs(AS,{children:[j.jsx("p",{className:"title2",children:e}),j.jsx("p",{className:"caption1 opacity50",children:t})]}),j.jsxs(oh,{children:[j.jsx(so,{state:"edge",onClick:d,imgsrc:a,btntext:" "}),j.jsx(so,{state:"default",onClick:u,btntext:r})]})]}):o==="back"?j.jsxs(ah,{children:[j.jsxs(AS,{children:[j.jsx(M_,{src:"/arrow.svg",alt:"back arrow",onClick:f}),j.jsx("p",{className:"title2",children:e})]}),j.jsx(so,{state:m,btntext:r,onClick:u})]}):o==="none"?j.jsxs(ah,{children:[j.jsxs(oh,{children:[j.jsx(M_,{src:"/arrow.svg",alt:"back arrow",onClick:f}),j.jsx("p",{className:"title2",children:e})]}),j.jsx(so,{state:"none",btntext:" ",imgsrc:a,onClick:n.deleteClicked})]}):o==="sm"?j.jsx(ah,{style:{marginBottom:"0px"},children:j.jsxs(oh,{onClick:f,style:{cursor:"pointer"},children:[j.jsx(M_,{src:"/arrow.svg",style:{width:"8px",marginRight:"0px"},alt:"back arrow"}),j.jsx("p",{className:"btn2",children:e})]})}):j.jsxs(ah,{children:[j.jsx(oh,{children:j.jsx("p",{className:"title2",children:e})}),j.jsx(oh,{children:j.jsx(so,{btntext:r,onClick:u})})]})}const Q3=ge.div`
  width:100%;
  box-sizing:border-box;
  border-bottom: 1px solid #1a1a1b1a;
`,Y3=ge.div`
  display: flex;
  justify-content: space-between;
  height: auto;
  max-width:1320px;
  min-width:1188px;
  padding: 16px 54px;
  box-sizing:border-box;
  margin: 0 auto;


  img{
    cursor: pointer;

  }
`,W3=ge.form`
  background-color: #f2f2f2;
  width: 280px;
  height: 44px;
  border-radius: 800px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 8px;
  display: ${n=>n.disabled?"none":"flex"};
`,X3=ge.input`
  flex: 1;
  border: none;
  background: transparent;
  padding: 8px 12px;


  &:focus {
    outline: none;
    border-bottom: none;  
    color: #1A1A1B;
  }

  &::placeholder {
    color: #8D8D8D;
  }

`,Z3=ge.button`
  background: transparent;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }

  img {
    width: 24px;  
    height: 24px;
  }
`;function DT({value:n,onChange:e,onSubmit:t,disabled:r}){const a=id();return j.jsx(Q3,{children:j.jsxs(Y3,{children:[j.jsx("img",{src:"/logo.svg",alt:"logo",style:{height:"44px"},onClick:()=>a("/")}),j.jsxs(W3,{disabled:r,onSubmit:t,className:"caption1",children:[j.jsx(X3,{className:"caption1",type:"text",placeholder:"검색어 입력",value:n,onChange:e}),j.jsx(Z3,{type:"submit",children:j.jsx("img",{src:"/Search.svg",alt:"검색 아이콘"})})]})]})})}const J3=ge.div`
  display: inline-flex;
  width: ${n=>n.size};
  height : auto;
  border-radius:  80px;
  background-color: ${n=>n.btnbackground};
  color: ${n=>n.btncolor};
  align-items: center;
  justify-content: left;
  font-size: ${n=>n.fontSize};
  padding: ${n=>n.padding};
  font-weight: 600;
  line-height: 24px;
  transition: all 0.3s ease-in-out;
  border : 1px solid ${n=>n.btnborder};
  box-sizing: border-box;
  cursor: pointer;

  
  &:hover{
    background-color :${n=>n.hoverback};
    color: ${n=>n.hovercolor};
    border : 1px solid ${n=>n.hoverborder};
    }
    
`;function ED(n){const e=n.btntext||"업로드",t=n.state||"default",r=n.size==="sm"?"fit-content":"100%",a=n.fontSize==="sm"?"14px":"16px",o=n.padding==="sm"?"0px 12px":"4px 12px;";let u,d,f,m,y,v;if(t==="default")m="#FFFFFF",y="#1A1A1B",v="#1A1A1B",u="#FFFFFF",d=r==="fit-content"?"#BBBBBB":"#1A1A1B",f=r==="fit-content"?"#BBBBBB":"#FFFFFF";else if(t==="edge")m="#1A1A1B",y="#FFFFFF",v="#1A1A1B",u="#FFFFFF",d="#BBBBBB",f="#ffffff";else if(t==="selected")m="#1A1A1B",y="#FFFFFF",v="#1A1A1B",u="#1A1A1B",d=n.btncolor||"#FFFFFF",f=n.btnborder||"#1A1A1B";else return console.log("roundbtn state 잘못입력함"),null;return j.jsx(J3,{btnbackground:u,btncolor:d,btnborder:f,hoverback:m,hoverborder:v,hovercolor:y,size:r,fontSize:a,onClick:n.onClick,padding:o,children:e})}const eF=ge.div`
  width:100%;
  box-sizing:border-box;
  background-color: #1A1A1B;
  border-bottom: 1px solid #1a1a1b1a;
  padding-bottom: 48px;
`,tF=ge.div`
  display: flex;
  color:white;
  justify-content: space-between;
  height: auto;
  max-width:1320px;
  min-width:1188px;
  padding: 16px 54px;
  box-sizing:border-box;
  margin: 0 auto;

  img{
    cursor: pointer;
  }
`,nF=ge.div`
  display:flex;
  flex-direction:column;
  gap:4px;
`,SS=ge.div`
  display:flex;
  flex-direction:column;
  background-color: #1A1A1B;
  border-bottom: 1px solid #1a1a1b1a;
  height:100%;
  margin-top:32px;
  margin-bottom:48px;
  gap:16px;

  `,rF=ge.p`
  font-size:24px;
  line-height: 28px;
`,iF=ge.div`
  border-top: 1px solid #484849;
  color: #484849;
  max-width:1212px;
  min-width:1188px;
  margin: 0 auto;
  padding: 4px 54px;
  box-sizing: border-box;
`,sF=ge.div`
  color: #484849;
  max-width:1320px;
  min-width:1188px;
  margin: 0 auto;
  padding: 0px 54px;
  box-sizing: border-box;
`;function TD(n){return j.jsxs(eF,{children:[j.jsxs(tF,{children:[j.jsxs(SS,{children:[j.jsx(rF,{className:"title1",children:"BAM.TORI"}),j.jsxs(nF,{children:[j.jsxs("p",{className:"body1 opacity70",children:["Bamtori는 저희 집 강아지 이름입니다. ",j.jsx("br",{}),"요즘 둘이 많이들 싸워요."]}),j.jsx("p",{className:"caption2",style:{color:"#C7FD05"},children:"밤이랑 토리 두 마리에요."})]})]}),j.jsx(SS,{children:j.jsx("img",{src:"/WebApp-middle./logo2.svg",style:{lineHeight:"72px"},onClick:n.onClick})})]}),j.jsx(iF,{}),j.jsx(sF,{children:"2025, Designed by Bamtori"})]})}const aF=ge.div`
    width: auto;
    height: 100%;
    box-sizing: border-box;
    flex-shrink: 0;
    display:flex;
    flex-direction:column;
    border-radius: 16px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    padding: 8px;

    &:hover {
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.1);  // 어두운 배경 추가 (0.2는 투명도, 조절 가능)
  }
  
    `,oF=ge.div`
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 16px;
    background-image: url(${n=>n.imgsrc});
    background-size: cover;
    background-position: center;

    `,lF=ge.div`
    display:flex;
    flex-direction:column;
    height: 160px;
    gap:4px;
    margin-top:16px;
    padding: 0px 4px;
    `,uF=ge.div`
    display:flex;
    flex-direction:column;
    gap:4px;
    margin: 8px 0px;
    `,bD=ge.div`
    display: -webkit-box;
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    `,cF=ge(bD)`
    -webkit-line-clamp: 2; 
    height:52px;
    `;function hF(n){const e=n.imgsrc||"./defaultimg.svg";n.tag;const t=n.caption||"기본 캡션",r=n.title||"기본 타이틀",a=n.body||"기본 바디 텍스트",o=n.itemClicked;return j.jsxs(aF,{onClick:o,children:[j.jsx(oF,{imgsrc:e}),j.jsxs(lF,{children:[j.jsx(xT,{tag:n.tag}),j.jsxs(uF,{children:[j.jsx("p",{className:"caption1 opacity50",children:t}),j.jsx(bD,{children:j.jsx("h2",{children:r})})]}),j.jsx(cF,{children:j.jsx("p",{className:"body1 opacity50",children:a})})]})]})}const dF=ge.div`
  width: 1080px; //이것도 너비
  margin: 0 auto;
  margin-bottom:128px;
  padding: 0px 54px;

`,fF=ge.div`
  display: grid;
  width: 100%; //이거 너비
  grid-template-columns: ${n=>n.columns};
  column-gap: 32px;
  row-gap: 16px;
  height: auto;
  margin: 0 auto;

`,pF=ge.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 320px;
  padding-bottom: 16px;
`,mF=ge.div`
  display:flex;
  justify-content:center;
  gap: 12px;
`,gF=ge.div`
  display:flex;
  align-items:center;
  justify-content:center;
  color: #1a1a1b;
  flex-direction: columns;
  height: 400px;

  & > img{
    display:block;
  }
`;function yF(n){const e=id(),[t,r]=Y.useState(1),[a,o]=Y.useState([]),[u,d]=Y.useState([]),[f,m]=Y.useState([]),[y,v]=Y.useState("전체"),[b,A]=Y.useState("card.svg"),[x,U]=Y.useState(null),[M,H]=Y.useState("card"),[Z,$]=Y.useState(!1),le=N=>{r(N),$(!0),setTimeout(()=>$(!1),500)},re=()=>{const N=M==="card"?"list":"card";H(N),A(N==="card"?"card.svg":"list.svg")};Y.useEffect(()=>{let N=[];ri.collection("post").get().then(L=>{L.forEach(rt=>{N.push(rt.data())}),o(N),m(N);let P=[];ri.collection("categori").get().then(rt=>{rt.forEach(he=>{P.push(he.data())}),d(P);const ee=N.sort((he,Ee)=>Ee.id-he.id);o(ee)}),window.scrollTo({top:0,behavior:"auto"}),$(!0);const ft=setTimeout(()=>$(!1),500);return()=>clearTimeout(ft)})},[]),Y.useEffect(()=>{const N=u.find(L=>L.id===t);if(N)if(v(N.name),t===1)m(a),U("("+a.length+")");else{const L=a.filter(P=>P.tag===N.name);m(L),U("("+L.length+")")}},[t,a,u]);const[J,R]=Y.useState(""),S=N=>{R(N.target.value)},C=N=>{N.preventDefault();const L=J.trim().toLowerCase();if(L===""){m(a);return}const P=a.filter(ft=>ft.title.toLowerCase().includes(L)||ft.body.toLowerCase().includes(L));P.length===0?alert("검색 결과가 없습니다."):(m(P),v(J),U("("+P.length+")"),r(null),$(!0),setTimeout(()=>$(!1),500))};let O=j.jsx(gF,{children:j.jsx("p",{className:"btn2 opacity30",children:"게시물이 없어요."})});return j.jsxs("div",{className:"all",children:[j.jsx(DT,{value:J,onChange:S,onSubmit:C}),j.jsxs(dF,{children:[j.jsxs(pF,{children:[j.jsx("div",{className:`title1 ${Z?"title-animate":""}`,children:y}),j.jsx(mF,{children:u.map(N=>j.jsx(ED,{btntext:N.name,state:t===N.id?"selected":"default",size:"sm",onClick:()=>le(N.id)},N.id))})]}),j.jsx(hm,{state:"dbtn",btntext:"새 게시물 작성",total:x,imgsrc:b,itemClicked:()=>e("/write"),viewClicked:()=>re(),children:y}),j.jsx(fF,{className:`title1 ${Z?"title-animate":""}`,columns:M==="card"?"repeat(2, 1fr)":"repeat(1, 1fr)",children:f.map(N=>M==="card"?j.jsx(hF,{imgsrc:N.imgsrc||"/WebApp-middle./defaultimg.svg",tag:N.tag,caption:N.caption,title:N.title,body:N.body,itemClicked:()=>e(`/post/${N.id}`)},N.id):j.jsx($3,{imgsrc:N.imgsrc||"/WebApp-middle./defaultimg.svg",tag:N.tag,caption:N.caption,title:N.title,body:N.body,itemClicked:()=>e(`/post/${N.id}`)},N.id))}),f.length===0&&O]}),j.jsx(TD,{onClick:()=>window.scrollTo({top:0,behavior:"smooth"})})]})}const _F=ge.div`
  position: relative;
  width: 100px;
  height: 40px;
  border-bottom: ${n=>n.border||"1px solid #D1D1D1"} ;
  padding-right: 16px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    right: 8px;
    top: 50%;
    transform:  ${n=>n.active?"translateY(-50%) rotate(-90deg)":"translateY(-50%) rotate(90deg)"};
    width: 8px;
    height: 8px;
    background: url('./arrow.svg') center no-repeat;
    background-size: cover;
    transition: 0.2s ease-in-out;
  }

`,vF=ge.button`
  display: flex;
  align-items: center;
  width: inherit;
  height: inherit;
  border: none;
  outline: none;
  padding:0px 8px;
  box-sizing:border-box;
  background: transparent;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`,EF=ge.ul`
  position: absolute;
  top: 50px;
  width: 100%;
  background: #ffffff;
  color: #8D8D8D;
  list-style: none;
  padding: 0;
  border-radius: 8px;
  overflow: hidden;
  max-height: ${n=>n.active?"500px":"0"};
  transition: 0.1s ease-in-out;
  box-shadow: 0px 4px 16px rgba(155, 157, 155, 0.25);
  border-radius: 16px;
`,TF=ge.li`
  padding: 8px 16px;
  transition: 0.1s;

  &:hover {
    /* background: #EAEAEA;
    color: #1A1A1B; */
    background:#D1FC36;
    color: #1A1A1B;

  }
`;function bF(n){const[e,t]=Y.useState(!1),[r,a]=Y.useState("1px solid #D1D1D1"),[o,u]=Y.useState([]);Y.useEffect(()=>{ri.collection("categori").get().then(m=>{const y=[];m.forEach(v=>{const b=v.data();b.name&&y.push(b.name)}),u(y)})},[]);const d=m=>{n.setLabel(m),t(!e)},f=()=>{t(!e),a(e?"1px solid #D1D1D1":"1px solid #1A1A1B")};return j.jsxs(_F,{border:r,active:e,children:[j.jsx(vF,{className:"btn2 opacity50",onClick:()=>f(),children:n.label}),j.jsx(EF,{className:"caption1",active:e,children:o.slice(1).map((m,y)=>j.jsx(TF,{className:"caption1",onClick:()=>d(m),children:m},y+1))})]})}const wF=ge.div`
  display: grid;
  width: 1080px; //이것도 너비
  margin: 0 auto;
  margin-bottom:128px;
  grid-template-columns: repeat(1, 1fr);
  padding: 0px 54px;
  row-gap: 0px;
  height: auto;
`,IF=ge.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 16px;
  margin-top: 32px;

`,AF=ge.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,SF=ge.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,RF=ge.input`
  width: auto;  
  height: auto;
  padding: 12px;
  border: none;
  border-bottom: 1px solid #D1D1D1;
  margin-bottom: 8px; 
  font-size: 28px;
  font-weight: 600;
`,CF=ge.textarea`
  width: auto; 
  height: 360px; 
  padding: 12px;
  border: none;
  transition: all 0.3s ease-in-out;
  margin-bottom: 8px;
  resize: none;  /* 사용자가 크기를 수동으로 조정하지 못하게 설정 */
  font-size: 16px;

`,xF=ge.input`
    width:300px;
    opacity: 0;
    height:300px;
    background-color:red;
    position:absolute;
    border-radius: 16px;
    cursor: pointer;
`,DF=ge.div`
  width:280px;
  height:210px;
  border: 1px solid rgba(0,0,0,0.3);
  border-radius: 16px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  transition: 0.2s ease-in-out;
  cursor: pointer;


  &:hover{
    background-color:  ${n=>n.hasImage?"rgba(240,17,17,0.2)":"rgba(26,26,27,0.3)"}
  }
  &:active{
    background-color: rgba(26,26,27,0.5);
    transition: 0s ease-in-out;

  }
`,PF=ge.div`
width:280px;
height:210px;
  background-image: url(${n=>n.image});
  position:absolute;
  z-index:-10;
  background-position: center, center;
  background-size:cover;
  border-radius:16px;
`,NF=ge.img`
  width:50px;
  opacity:  ${n=>n.hasImage?"1":"0.3"};
  transition: transform 0.3s ease;
  transform:  ${n=>n.hasImage?"rotate(45deg)":"rotate(0deg)"};

`;function kF(n){const e=id(),[t,r]=Y.useState(""),[a,o]=Y.useState(""),[u,d]=Y.useState(""),[f,m]=Y.useState(""),[y,v]=Y.useState(""),[b,A]=Y.useState(""),[x,U]=Y.useState("일상");Y.useEffect(()=>{window.scrollTo({top:0,behavior:"auto"})},[]);const M=function(){let re=new Date().getTime().toString();const J=new Date,R=`${J.getFullYear()}/${String(J.getMonth()+1).padStart(2,"0")}/${String(J.getDate()).padStart(2,"0")}`;ri.collection("post").doc(re).set({id:re,imgsrc:t,tag:x,caption:R,title:f,body:y}).then(()=>{alert("글이 작성되었습니다."),e("/")})},H=function(){(f.trim().length>0||y.trim().length>0||b)&&alert("입력한 내용들이 제거됩니다."),e("/")},Z=()=>f.trim().length>0&&y.trim().length>0,$=re=>{let J=re.target.files[0];const R=new FileReader;R.readAsDataURL(J),R.onload=S=>{A(S.target.result),r(S.target.result)}},le=re=>{b&&re.preventDefault(),A(""),r("")};return j.jsxs("div",{className:"all",children:[j.jsx(DT,{disabled:!0}),j.jsx(wF,{children:j.jsxs(IF,{children:[j.jsx(hm,{state:"back",statebtn:Z()?"default":"disabled",btntext:"업로드",backClicked:()=>{H()},itemClicked:()=>{M()},children:"업로드 하기"}),j.jsxs(AF,{children:[j.jsx(bF,{label:x,setLabel:U}),j.jsxs(SF,{children:[j.jsx(RF,{value:f,onChange:re=>m(re.target.value),className:"h1",placeholder:"제목을 입력해주세요."}),j.jsx(CF,{value:y,onChange:re=>v(re.target.value),className:"body1",placeholder:"내용을 입력해주세요."})]}),j.jsxs(DF,{hasImage:!!b,children:[j.jsx(NF,{src:"./plus.svg",hasImage:!!b}),j.jsx(xF,{type:"file",accept:"image/*",onClick:le,onChange:re=>$(re)}),j.jsx(PF,{image:b})]})]})]})})]})}const OF=ge.div`
      display: inline-flex;
      width: fit-content;
      height : 32px;
      border-radius:  80px;
      background-color: ${n=>n.btnbackground};
      color: ${n=>n.btncolor};
      align-items: center;
      justify-content: center;
      font-size: 16px;
      padding: 12px 12px;
      font-weight: 600;
      line-height: 24px;
      border : 1px solid ${n=>n.btnborder};
      box-sizing: border-box;
      gap : 4px;
      transition: all 0.2s ease-in-out;
      pointer-events: ${n=>n.clickable};
      cursor: pointer;


      &:hover{
        background-color :${n=>n.hoverback};
        color: ${n=>n.hovercolor};
        border : 1px solid ${n=>n.hoverborder};
        }
      &:active{
        background-color :${n=>n.activeback};
        color: ${n=>n.activecolor};
        border : 1px solid ${n=>n.activeborder};
        transition: none;

        }
        
    `;function VF(n){const e=n.btntext||"업로드",t=n.state||"default",r=n.imgsrc||"none";let a,o,u,d,f,m,y,v,b,A;if(t==="default")f="#D1FC36",m="#1A1A1B",y="#D1FC36",o="#1A1A1B",u="#FFFFFF",d="#1A1A1B",v="#9FC31D",b="#1A1A1B",A="#9FC31D",a="auto";else if(t==="edge")f="none",m="#1A1A1B",y="#1A1A1B",o="none",u=n.btncolor||"#1A1A1B",d=n.btnborder||"rgba(26, 26, 27, 0.2)",v="#ECEEF0",b="#1A1A1B",a="auto";else if(t==="disabled")f="#ECEEF0",m="#CFD3DA",y="#ECEEF0",o="#ECEEF0",u=n.btncolor||"#CFD3DA",d=n.btnborder||"#ECEEF0",v="#ECEEF0",b="#CFD3DA",A="#ECEEF0",a="none";else return console.log("rectbtn state 잘못입력함"),null;return j.jsxs(OF,{btnbackground:o,btncolor:u,btnborder:d,hoverback:f,hoverborder:y,hovercolor:m,activeback:v,activeborder:A,activecolor:b,clickable:a,onClick:n.onClick,children:[e,r!=="none"&&j.jsx("img",{src:r})]})}const MF=ge.div`
    width: 100%;
    height: auto;
    flex-shrink: 0;
    display:flex;
    flex-direction:row;
    border-radius: 16px;
    transition: all 0.3s ease-in-out;
    gap: 12px;
    margin-bottom: 32px;
 `,LF=ge.div`
    flex: 1; 
    height: 52px;
    box-sizing: border-box;
    background-color: none;
    flex-shrink: 0;
    display:flex;
    flex-direction:column;
    transition: all 0.3s ease-in-out;
 `,UF=ge.div`
     flex: 1; 
     height: auto;
     box-sizing: border-box;
     background-color: none;
     flex-shrink: 0;
     display:flex;
     flex-direction:column;
     transition: all 0.3s ease-in-out;
     gap: 4px;

  `,BF=ge.div`
       flex: 1; 
       height: auto;
       justify-content: right;
       box-sizing: border-box;
       flex-shrink: 0;
       display:flex;
       margin-top:4px;
       flex-direction:row;
       transition: all 0.3s ease-in-out;
       align-items:center;
    `,FF=ge.div`
       flex: 1; 
       height: auto;
       justify-content: space-between;
       box-sizing: border-box;
       background-color: none;
       flex-shrink: 0;
       display:flex;
       flex-direction:row;
       transition: all 0.3s ease-in-out;
    `,zF=ge.div`
      width: 48px;
      height: 48px;
      box-sizing: border-box;
      background-image:url('/profile.png');
      background-position: center;
      background-size:cover;
      flex-shrink: 0;
      display:flex;
      flex-direction:column;
      border-radius: 100px;
      transition: all 0.3s ease-in-out;
      
   `;function jF({postId:n,onSubmit:e}){const[t,r]=Y.useState("");function a(d){r(d.target.value)}function o(){if(!t.trim())return alert("댓글을 입력하세요");const d=Date.now(),f=new Date(d),m=`${f.getFullYear()}.${String(f.getMonth()+1).padStart(2,"0")}.${String(f.getDate()).padStart(2,"0")}`,y={postid:n,id:`${n}_${d}`,date:m,comment:t,name:"이영재",like:!1};ri.collection("comment").doc(n).collection("comments").doc(y.id).set(y).then(()=>{alert("댓글이 등록되었어요"),r(""),e()}).catch(v=>{console.error("댓글 등록 실패:",v)})}const u=()=>t.trim().length>0;return j.jsxs(MF,{children:[j.jsx(zF,{}),j.jsxs(UF,{children:[j.jsx(LF,{children:j.jsx("input",{className:"body2",type:"text",value:t,onChange:a,placeholder:"댓글을 작성해주세요."})}),j.jsx(FF,{children:j.jsx(BF,{children:j.jsx(VF,{state:u()?"default":"disabled",onClick:o,btntext:"입력"})})})]})]})}const qF=ge.div`
    width: 100%;
    height: auto;
    flex-shrink: 0;
    display:flex;
    flex-direction:row;
    border-radius: 16px;
    transition: all 0.3s ease-in-out;
    gap: 12px;
 `,HF=ge.div`
    flex: 1; 
    box-sizing: border-box;
    background-color: none;
    flex-shrink: 0;
    display:flex;
    gap: 8px;
    align-items: end;
 `,GF=ge.div`
    display:flex;
    flex-direction : column;
    gap: 4px;
    width:100%;
  `,$F=ge.div`
     width:100%;
     height:inherit;
     flex: 1; 
     height: auto;
     box-sizing: border-box;
     background-color: none;
     flex-shrink: 0;
     display:flex;
     justify-content: space-between;
     transition: all 0.3s ease-in-out;
  `,KF=ge.div`
      width: 48px;
      height: 48px;
      box-sizing: border-box;
      background-position: center;
      background-size:cover;
      background-image: ${n=>n.profile};
      flex-shrink: 0;
      display:flex;
      flex-direction:column;
      border-radius: 16px;
      transition: all 0.3s ease-in-out;
   `,QF=ge.div`
    width:65.13px;
    text-align:center;
  `;function YF(n){const e=n.profile||"url('/profile.png')";return j.jsxs(qF,{children:[j.jsx(KF,{profile:e}),j.jsxs($F,{children:[j.jsxs(GF,{children:[j.jsxs(HF,{children:[j.jsx("h3",{children:n.name}),j.jsx("p",{className:"caption2 opacity30",children:n.date})]}),j.jsx("p",{className:"body2 opacity50",children:n.comment})]}),j.jsx(QF,{children:j.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",style:{cursor:"pointer"},width:"20",height:"20",viewBox:"0 0 30 26",children:j.jsx("path",{opacity:"0.5",d:"M14.6069 3.49524L15 3.99556L15.3931 3.49524C16.8196 1.67994 19.0955 0.5 21.6667 0.5C23.8727 0.5 25.8294 1.15302 27.2276 2.39232C28.6173 3.62413 29.5 5.47406 29.5 7.96773C29.5 10.1398 28.6156 12.3237 27.2394 14.4013C25.8651 16.476 24.0235 18.4097 22.1666 20.0709C20.3117 21.7304 18.4545 23.1065 17.0599 24.0682C16.3631 24.5488 15.7829 24.9251 15.3777 25.1807C15.2263 25.2763 15.0994 25.3549 15 25.4159C14.9006 25.3549 14.7737 25.2763 14.6223 25.1807C14.2171 24.9251 13.6369 24.5488 12.9401 24.0682C11.5455 23.1065 9.68829 21.7304 7.83337 20.0709C5.97648 18.4097 4.13489 16.476 2.7606 14.4013C1.3844 12.3237 0.5 10.1398 0.5 7.96773C0.5 5.47406 1.38272 3.62413 2.77242 2.39232C4.17058 1.15302 6.12726 0.5 8.3333 0.5C10.9045 0.5 13.1804 1.67994 14.6069 3.49524Z",stroke:n.stroke||"#FF9090",fill:n.fill||"#FF9090",onClick:n.onClick})})})]})]})}const WF=ge.div`
    width: 1080px; //이것도 너비
    margin: 32px auto;
    margin-bottom:128px;
  `,XF=ge.div`
    position: sticky;
    top: 128px;         
    display: flex;
    flex-direction: column;
    width: 32%;
    gap: 4px;
    box-sizing: border-box;
    padding: 8px;
    align-self: flex-start;
    border-top: 1px solid #BBBBBB;
  `,ZF=ge.div`
    display:flex;
    flex-direction:column;
    gap:24px;
    margin-top:16px;
  `,JF=ge.div`
    margin-bottom : 64px;
  `,ez=ge.div`
    display:flex;
    border-top: 1px solid #8D8D8D;
    padding: 4px 0px;
    width:100%;  
    margin-bottom : 32px; 
    gap:16px;
  `,tz=ge.div`
    display:flex;
    flex-direction:row;
    gap: 8px;
    height:32px;
    align-items:center;
  `,nz=ge.p`
    margin-bottom: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `,rz=ge.div`
    margin:16px 0px;
  `,iz=ge.div`
    position: fixed;         // 화면 전체 덮기
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3); // 흐릿한 검정 배경
    z-index: 999;      
  `,sz=ge.div`
     position: fixed;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     width: 400px;
     background-color: white;
     border-radius: 12px;
     box-shadow: 0px 4px 20px rgba(0,0,0,0.3);
     z-index: 1000;
     padding: 8px;
  `,az=ge.div`
   display:flex;
   width:100%;
   padding:12px;
`,oz=ge.div`
    display:flex;
    width:100%;
    padding:12px;

  `,lz=ge.div`
      display:flex;
      justify-content: end;
      gap:8px;
      width:100%;
      align-items:center;
      margin-top:32px;
  `;function uz(n){const e=Y.useRef(null),t=Y.useRef(null),r=Y.useRef(null),a=J=>{J.current&&J.current.scrollIntoView({behavior:"smooth",block:"start"})},o=J=>{J=="1"?a(e):J=="2"?a(t):J=="3"&&a(r)},u=id(),d=kN().id,[f,m]=Y.useState([]),[y,v]=Y.useState({id:0,imgsrc:"",tag:"",caption:"",title:"",body:""}),b=function(){u("/")};Y.useEffect(()=>{ri.collection("post").doc(d).get().then(J=>{v(J.data())}),window.scrollTo({top:0,behavior:"auto"})},[]);const A=()=>{let J=[];ri.collection("comment").doc(d).collection("comments").orderBy("date","desc").get().then(R=>{R.forEach(S=>{J.push(S.data())}),m(J)})};Y.useEffect(()=>{ri.collection("post").doc(d).get().then(J=>{v(J.data())}),A()},[d]);const x=[{id:"1",title:"타이틀",selected:!0},{id:"2",title:"본문",selected:!1},{id:"3",title:"댓글",selected:!1}],U=(J,R)=>{ri.collection("comment").doc(d).collection("comments").doc(J).update({like:!R}).then(()=>{A()})},M=()=>{le(!0)},H=()=>{le(!1)},Z=()=>{ri.collection("post").doc(d).delete().then(()=>{u("/")})},[$,le]=Y.useState(!1),re=()=>{le(!1)};return j.jsxs("div",{children:[j.jsx("div",{ref:e,children:j.jsx(DT,{disabled:!0})}),$&&j.jsx(iz,{onClick:re,children:j.jsxs(sz,{children:[j.jsx(az,{children:j.jsx("h2",{children:"게시물 삭제"})}),j.jsx(oz,{children:j.jsx("p",{className:"body1",children:"게시물을 삭제할까요?"})}),j.jsxs(lz,{children:[j.jsx(so,{state:"edge",btntext:"취소",onClick:H}),j.jsx(so,{state:"default",btntext:"삭제하기",onClick:Z})]})]})}),j.jsxs("div",{className:"flex",children:[j.jsxs(WF,{children:[j.jsx(hm,{state:"none",imgsrc:"/delete.svg",deleteClicked:()=>{M()},backClicked:()=>{b()},children:"게시물"}),j.jsxs(JF,{children:[j.jsx(xT,{tag:y.tag}),j.jsxs(rz,{children:[j.jsx("p",{className:"btn2 opacity50",children:y.caption}),j.jsx("h1",{children:y.title})]}),j.jsx("img",{src:y.imgsrc,style:{width:"100%",borderRadius:"1.5em",marginBottom:"16px"},alt:y.title}),j.jsx("p",{className:"body1 opacity70",ref:t,style:{whiteSpace:"pre-line"},children:y.body})]}),j.jsx("div",{ref:r,children:j.jsx(ez,{children:j.jsxs(tz,{children:[j.jsx("img",{src:"/comment.svg",style:{width:"24px"}}),j.jsxs("p",{className:"btn2",children:["댓글",f.length,"개"]})]})})})," ",j.jsx(jF,{postId:d,onSubmit:A}),j.jsx(ZF,{children:f.map(J=>j.jsx(YF,{name:J.name,date:J.date,comment:J.comment,like:J.like,onClick:()=>{U(J.id,J.like)},stroke:J.like?"#FF9090":"#1A1A1B",fill:J.like?"#FF9090":"#ffffff"},J.id))})]}),j.jsxs(XF,{children:[j.jsx(nz,{className:"btn2 opacity70",children:y.title}),x.map(J=>j.jsx(ED,{state:"edge",fontSize:"sm",padding:"sm",btntext:J.title,onClick:()=>o(J.id)},J.id)),j.jsx(hm,{state:"sm",backClicked:()=>{b()},children:" 목록으로"})]})]}),j.jsx(TD,{onClick:()=>u("/")})]})}rN.createRoot(document.getElementById("root")).render(j.jsx(yk,{children:j.jsxs(QN,{children:[j.jsx(cp,{index:!0,element:j.jsx(yF,{})}),j.jsx(cp,{path:"write",element:j.jsx(kF,{})}),j.jsx(cp,{path:"post/:id",element:j.jsx(uz,{})})]})}));
