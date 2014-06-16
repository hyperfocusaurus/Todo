
// i18next, v1.7.3
// Copyright (c)2014 Jan Mühlemann (jamuhl).
// Distributed under MIT license
// http://i18next.com
!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd&&define('lib/i18n',[],b)}(this,function(){function a(a,b){if(!b||"function"==typeof b)return a;for(var c in b)a[c]=b[c];return a}function b(a,b,c){var d,e=0,f=a.length,g=void 0===f||"[object Array]"!==Object.prototype.toString.apply(a)||"function"==typeof a;if(c)if(g){for(d in a)if(b.apply(a[d],c)===!1)break}else for(;f>e&&b.apply(a[e++],c)!==!1;);else if(g){for(d in a)if(b.call(a[d],d,a[d])===!1)break}else for(;f>e&&b.call(a[e],e,a[e++])!==!1;);return a}function c(a){return"string"==typeof a?a.replace(/[&<>"'\/]/g,function(a){return H[a]}):a}function d(a){var b=function(a){if(window.XMLHttpRequest)return a(null,new XMLHttpRequest);if(window.ActiveXObject)try{return a(null,new ActiveXObject("Msxml2.XMLHTTP"))}catch(b){return a(null,new ActiveXObject("Microsoft.XMLHTTP"))}return a(new Error)},c=function(a){if("string"==typeof a)return a;var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b.join("&")},d=function(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(192|d>>6),b+=String.fromCharCode(128|63&d)):(b+=String.fromCharCode(224|d>>12),b+=String.fromCharCode(128|63&d>>6),b+=String.fromCharCode(128|63&d))}return b},e=function(a){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a=d(a);var c,e,f,g,h,i,j,k="",l=0;do c=a.charCodeAt(l++),e=a.charCodeAt(l++),f=a.charCodeAt(l++),g=c>>2,h=(3&c)<<4|e>>4,i=(15&e)<<2|f>>6,j=63&f,isNaN(e)?i=j=64:isNaN(f)&&(j=64),k+=b.charAt(g)+b.charAt(h)+b.charAt(i)+b.charAt(j),c=e=f="",g=h=i=j="";while(l<a.length);return k},f=function(){for(var a=arguments[0],b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d])}return a},g=function(a,d,e,h){"function"==typeof e&&(h=e,e={}),e.cache=e.cache||!1,e.data=e.data||{},e.headers=e.headers||{},e.jsonp=e.jsonp||!1,e.async=void 0===e.async?!0:e.async;var i,j=f({accept:"*/*","content-type":"application/x-www-form-urlencoded;charset=UTF-8"},g.headers,e.headers);if(i="application/json"===j["content-type"]?JSON.stringify(e.data):c(e.data),"GET"===a){var k=[];if(i&&(k.push(i),i=null),e.cache||k.push("_="+(new Date).getTime()),e.jsonp&&(k.push("callback="+e.jsonp),k.push("jsonp="+e.jsonp)),k=k.join("&"),k.length>1&&(d+=d.indexOf("?")>-1?"&"+k:"?"+k),e.jsonp){var l=document.getElementsByTagName("head")[0],m=document.createElement("script");return m.type="text/javascript",m.src=d,l.appendChild(m),void 0}}b(function(b,c){if(b)return h(b);c.open(a,d,e.async);for(var f in j)j.hasOwnProperty(f)&&c.setRequestHeader(f,j[f]);c.onreadystatechange=function(){if(4===c.readyState){var a=c.responseText||"";if(!h)return;h(c.status,{text:function(){return a},json:function(){return JSON.parse(a)}})}},c.send(i)})},h={authBasic:function(a,b){g.headers.Authorization="Basic "+e(a+":"+b)},connect:function(a,b,c){return g("CONNECT",a,b,c)},del:function(a,b,c){return g("DELETE",a,b,c)},get:function(a,b,c){return g("GET",a,b,c)},head:function(a,b,c){return g("HEAD",a,b,c)},headers:function(a){g.headers=a||{}},isAllowed:function(a,b,c){this.options(a,function(a,d){c(-1!==d.text().indexOf(b))})},options:function(a,b,c){return g("OPTIONS",a,b,c)},patch:function(a,b,c){return g("PATCH",a,b,c)},post:function(a,b,c){return g("POST",a,b,c)},put:function(a,b,c){return g("PUT",a,b,c)},trace:function(a,b,c){return g("TRACE",a,b,c)}},i=a.type?a.type.toLowerCase():"get";h[i](a.url,a,function(b,c){200===b?a.success(c.json(),b,null):a.error(c.text(),b,null)})}function e(a,b){"function"==typeof a&&(b=a,a={}),a=a||{},K.extend(G,a),delete G.fixLng,"string"==typeof G.ns&&(G.ns={namespaces:[G.ns],defaultNs:G.ns}),"string"==typeof G.fallbackNS&&(G.fallbackNS=[G.fallbackNS]),("string"==typeof G.fallbackLng||"boolean"==typeof G.fallbackLng)&&(G.fallbackLng=[G.fallbackLng]),G.interpolationPrefixEscaped=K.regexEscape(G.interpolationPrefix),G.interpolationSuffixEscaped=K.regexEscape(G.interpolationSuffix),G.lng||(G.lng=K.detectLanguage()),G.lng?G.useCookie&&K.cookie.create(G.cookieName,G.lng,G.cookieExpirationTime,G.cookieDomain):(G.lng=G.fallbackLng[0],G.useCookie&&K.cookie.remove(G.cookieName)),E=K.toLanguages(G.lng),z=E[0],K.log("currentLng set to: "+z);var c=t;a.fixLng&&(c=function(a,b){return b=b||{},b.lng=b.lng||c.lng,t(a,b)},c.lng=z),M.setCurrentLng(z),A&&G.setJqueryExt&&n();var d;if(A&&A.Deferred&&(d=A.Deferred()),!G.resStore){var e=K.toLanguages(G.lng);"string"==typeof G.preload&&(G.preload=[G.preload]);for(var f=0,g=G.preload.length;g>f;f++)for(var h=K.toLanguages(G.preload[f]),i=0,j=h.length;j>i;i++)e.indexOf(h[i])<0&&e.push(h[i]);return B.sync.load(e,G,function(a,e){C=e,F=!0,b&&b(c),d&&d.resolve(c)}),d?d.promise():void 0}return C=G.resStore,F=!0,b&&b(c),d&&d.resolve(c),d?d.promise():void 0}function f(a,b){"string"==typeof a&&(a=[a]);for(var c=0,d=a.length;d>c;c++)G.preload.indexOf(a[c])<0&&G.preload.push(a[c]);return e(b)}function g(a,b,c){"string"!=typeof b?(c=b,b=G.ns.defaultNs):G.ns.namespaces.indexOf(b)<0&&G.ns.namespaces.push(b),C[a]=C[a]||{},C[a][b]=C[a][b]||{},K.extend(C[a][b],c)}function h(a,b){"string"!=typeof b&&(b=G.ns.defaultNs),C[a]=C[a]||{},C[a][b]={}}function i(a){G.ns.defaultNs=a}function j(a,b){k([a],b)}function k(a,b){var c={dynamicLoad:G.dynamicLoad,resGetPath:G.resGetPath,getAsync:G.getAsync,customLoad:G.customLoad,ns:{namespaces:a,defaultNs:""}},d=K.toLanguages(G.lng);"string"==typeof G.preload&&(G.preload=[G.preload]);for(var e=0,f=G.preload.length;f>e;e++)for(var g=K.toLanguages(G.preload[e]),h=0,i=g.length;i>h;h++)d.indexOf(g[h])<0&&d.push(g[h]);for(var j=[],k=0,l=d.length;l>k;k++){var m=!1,n=C[d[k]];if(n)for(var o=0,p=a.length;p>o;o++)n[a[o]]||(m=!0);else m=!0;m&&j.push(d[k])}j.length?B.sync._fetch(j,c,function(c,d){var e=a.length*j.length;K.each(a,function(a,c){G.ns.namespaces.indexOf(c)<0&&G.ns.namespaces.push(c),K.each(j,function(a,f){C[f]=C[f]||{},C[f][c]=d[f][c],e--,0===e&&b&&(G.useLocalStorage&&B.sync._storeLocal(C),b())})})}):b&&b()}function l(a,b,c){return"function"==typeof b?(c=b,b={}):b||(b={}),b.lng=a,e(b,c)}function m(){return z}function n(){function a(a,b,c){if(0!==b.length){var d="text";if(0===b.indexOf("[")){var e=b.split("]");b=e[1],d=e[0].substr(1,e[0].length-1)}b.indexOf(";")===b.length-1&&(b=b.substr(0,b.length-2));var f;if("html"===d)f=G.defaultValueFromContent?A.extend({defaultValue:a.html()},c):c,a.html(A.t(b,f));else if("text"===d)f=G.defaultValueFromContent?A.extend({defaultValue:a.text()},c):c,a.text(A.t(b,f));else if("prepend"===d)f=G.defaultValueFromContent?A.extend({defaultValue:a.html()},c):c,a.prepend(A.t(b,f));else if("append"===d)f=G.defaultValueFromContent?A.extend({defaultValue:a.html()},c):c,a.append(A.t(b,f));else if(0===d.indexOf("data-")){var g=d.substr("data-".length);f=G.defaultValueFromContent?A.extend({defaultValue:a.data(g)},c):c;var h=A.t(b,f);a.data(g,h),a.attr(d,h)}else f=G.defaultValueFromContent?A.extend({defaultValue:a.attr(d)},c):c,a.attr(d,A.t(b,f))}}function b(b,c){var d=b.attr(G.selectorAttr);if(d||"undefined"==typeof d||d===!1||(d=b.text()||b.val()),d){var e=b,f=b.data("i18n-target");if(f&&(e=b.find(f)||b),c||G.useDataAttrOptions!==!0||(c=b.data("i18n-options")),c=c||{},d.indexOf(";")>=0){var g=d.split(";");A.each(g,function(b,d){""!==d&&a(e,d,c)})}else a(e,d,c);G.useDataAttrOptions===!0&&b.data("i18n-options",c)}}A.t=A.t||t,A.fn.i18n=function(a){return this.each(function(){b(A(this),a);var c=A(this).find("["+G.selectorAttr+"]");c.each(function(){b(A(this),a)})})}}function o(a,b,c,d){if(!a)return a;if(d=d||b,a.indexOf(d.interpolationPrefix||G.interpolationPrefix)<0)return a;var e=d.interpolationPrefix?K.regexEscape(d.interpolationPrefix):G.interpolationPrefixEscaped,f=d.interpolationSuffix?K.regexEscape(d.interpolationSuffix):G.interpolationSuffixEscaped,g="HTML"+f;return K.each(b,function(b,h){var i=c?c+G.keyseparator+b:b;"object"==typeof h&&null!==h?a=o(a,h,i,d):d.escapeInterpolation||G.escapeInterpolation?(a=a.replace(new RegExp([e,i,g].join(""),"g"),h),a=a.replace(new RegExp([e,i,f].join(""),"g"),K.escape(h))):a=a.replace(new RegExp([e,i,f].join(""),"g"),h)}),a}function p(a,b){var c=",",d="{",e="}",f=K.extend({},b);for(delete f.postProcess;-1!=a.indexOf(G.reusePrefix)&&(D++,!(D>G.maxRecursion));){var g=a.lastIndexOf(G.reusePrefix),h=a.indexOf(G.reuseSuffix,g)+G.reuseSuffix.length,i=a.substring(g,h),j=i.replace(G.reusePrefix,"").replace(G.reuseSuffix,"");if(-1!=j.indexOf(c)){var k=j.indexOf(c);if(-1!=j.indexOf(d,k)&&-1!=j.indexOf(e,k)){var l=j.indexOf(d,k),m=j.indexOf(e,l)+e.length;try{f=K.extend(f,JSON.parse(j.substring(l,m))),j=j.substring(0,k)}catch(n){}}}var o=w(j,f);a=a.replace(i,o)}return a}function q(a){return a.context&&("string"==typeof a.context||"number"==typeof a.context)}function r(a){return void 0!==a.count&&"string"!=typeof a.count&&1!==a.count}function s(a,b){b=b||{};var c=u(a,b),d=x(a,b);return void 0!==d||d===c}function t(a,b){return b=b||{},F?(D=0,w.apply(null,arguments)):(K.log("i18next not finished initialization. you might have called t function before loading resources finished."),b.defaultValue||"")}function u(a,b){return void 0!==b.defaultValue?b.defaultValue:a}function v(){for(var a=[],b=1;b<arguments.length;b++)a.push(arguments[b]);return{postProcess:"sprintf",sprintf:a}}function w(a,b){if(b&&"object"!=typeof b?"sprintf"===G.shortcutFunction?b=v.apply(null,arguments):"defaultValue"===G.shortcutFunction&&(b={defaultValue:b}):b=b||{},void 0===a||null===a)return"";"string"==typeof a&&(a=[a]);var c=a[0];if(a.length>1)for(var d=0;d<a.length&&(c=a[d],!s(c,b));d++);var e,f=u(c,b),g=x(c,b),h=b.lng?K.toLanguages(b.lng):E,i=b.ns||G.ns.defaultNs;c.indexOf(G.nsseparator)>-1&&(e=c.split(G.nsseparator),i=e[0],c=e[1]),void 0===g&&G.sendMissing&&(b.lng?L.postMissing(h[0],i,c,f,h):L.postMissing(G.lng,i,c,f,h));var j=b.postProcess||G.postProcess;void 0!==g&&j&&N[j]&&(g=N[j](g,c,b));var k=f;if(f.indexOf(G.nsseparator)>-1&&(e=f.split(G.nsseparator),k=e[1]),k===c&&G.parseMissingKey&&(f=G.parseMissingKey(f)),void 0===g&&(f=o(f,b),f=p(f,b),j&&N[j])){var l=u(c,b);g=N[j](l,c,b)}return void 0!==g?g:f}function x(a,b){b=b||{};var c,d,e=u(a,b),f=E;if(!C)return e;if("cimode"===f[0].toLowerCase())return e;if(b.lng&&(f=K.toLanguages(b.lng),!C[f[0]])){var g=G.getAsync;G.getAsync=!1,B.sync.load(f,G,function(a,b){K.extend(C,b),G.getAsync=g})}var h=b.ns||G.ns.defaultNs;if(a.indexOf(G.nsseparator)>-1){var i=a.split(G.nsseparator);h=i[0],a=i[1]}if(q(b)){c=K.extend({},b),delete c.context,c.defaultValue=G.contextNotFound;var j=h+G.nsseparator+a+"_"+b.context;if(d=t(j,c),d!=G.contextNotFound)return o(d,{context:b.context})}if(r(b)){c=K.extend({},b),delete c.count,c.defaultValue=G.pluralNotFound;var k=h+G.nsseparator+a+G.pluralSuffix,l=M.get(f[0],b.count);if(l>=0?k=k+"_"+l:1===l&&(k=h+G.nsseparator+a),d=t(k,c),d!=G.pluralNotFound)return o(d,{count:b.count,interpolationPrefix:b.interpolationPrefix,interpolationSuffix:b.interpolationSuffix})}for(var m,n=a.split(G.keyseparator),s=0,v=f.length;v>s&&void 0===m;s++){for(var y=f[s],z=0,A=C[y]&&C[y][h];n[z];)A=A&&A[n[z]],z++;if(void 0!==A){var D=Object.prototype.toString.apply(A);if("string"==typeof A)A=o(A,b),A=p(A,b);else if("[object Array]"!==D||G.returnObjectTrees||b.returnObjectTrees){if(null===A&&G.fallbackOnNull===!0)A=void 0;else if(null!==A)if(G.returnObjectTrees||b.returnObjectTrees){if("[object Number]"!==D&&"[object Function]"!==D&&"[object RegExp]"!==D){var F="[object Array]"===D?[]:{};K.each(A,function(c){F[c]=w(h+G.nsseparator+a+G.keyseparator+c,b)}),A=F}}else G.objectTreeKeyHandler&&"function"==typeof G.objectTreeKeyHandler?A=G.objectTreeKeyHandler(a,A,y,h,b):(A="key '"+h+":"+a+" ("+y+")' "+"returned an object instead of string.",K.log(A))}else A=A.join("\n"),A=o(A,b),A=p(A,b);"string"==typeof A&&""===A.trim()&&G.fallbackOnEmpty===!0&&(A=void 0),m=A}}if(void 0===m&&!b.isFallbackLookup&&(G.fallbackToDefaultNS===!0||G.fallbackNS&&G.fallbackNS.length>0))if(b.isFallbackLookup=!0,G.fallbackNS.length){for(var H=0,I=G.fallbackNS.length;I>H;H++)if(m=x(G.fallbackNS[H]+G.nsseparator+a,b)){var J=m.indexOf(G.nsseparator)>-1?m.split(G.nsseparator)[1]:m,L=e.indexOf(G.nsseparator)>-1?e.split(G.nsseparator)[1]:e;if(J!==L)break}}else m=x(a,b);return m}function y(){var a,b=[];if("undefined"!=typeof window&&(!function(){for(var a=window.location.search.substring(1),c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("=");if(e>0){var f=c[d].substring(0,e),g=c[d].substring(e+1);b[f]=g}}}(),b[G.detectLngQS]&&(a=b[G.detectLngQS])),!a&&"undefined"!=typeof document&&G.useCookie){var c=K.cookie.read(G.cookieName);c&&(a=c)}return a||"undefined"==typeof navigator||(a=navigator.language?navigator.language:navigator.userLanguage),a}Array.prototype.indexOf||(Array.prototype.indexOf=function(a){if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=0;if(arguments.length>0&&(d=Number(arguments[1]),d!=d?d=0:0!=d&&1/0!=d&&d!=-1/0&&(d=(d>0||-1)*Math.floor(Math.abs(d)))),d>=c)return-1;for(var e=d>=0?d:Math.max(c-Math.abs(d),0);c>e;e++)if(e in b&&b[e]===a)return e;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(a){if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=c;arguments.length>1&&(d=Number(arguments[1]),d!=d?d=0:0!=d&&d!=1/0&&d!=-(1/0)&&(d=(d>0||-1)*Math.floor(Math.abs(d))));for(var e=d>=0?Math.min(d,c-1):c-Math.abs(d);e>=0;e--)if(e in b&&b[e]===a)return e;return-1}),"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});var z,A=void 0,B={},C={},D=0,E=[],F=!1,G={lng:void 0,load:"all",preload:[],lowerCaseLng:!1,returnObjectTrees:!1,fallbackLng:["dev"],fallbackNS:[],detectLngQS:"setLng",ns:"translation",fallbackOnNull:!0,fallbackOnEmpty:!1,fallbackToDefaultNS:!1,nsseparator:":",keyseparator:".",selectorAttr:"data-i18n",debug:!1,resGetPath:"locales/__lng__/__ns__.json",resPostPath:"locales/add/__lng__/__ns__",getAsync:!0,postAsync:!0,resStore:void 0,useLocalStorage:!1,localStorageExpirationTime:6048e5,dynamicLoad:!1,sendMissing:!1,sendMissingTo:"fallback",sendType:"POST",interpolationPrefix:"__",interpolationSuffix:"__",reusePrefix:"$t(",reuseSuffix:")",pluralSuffix:"_plural",pluralNotFound:["plural_not_found",Math.random()].join(""),contextNotFound:["context_not_found",Math.random()].join(""),escapeInterpolation:!1,setJqueryExt:!0,defaultValueFromContent:!0,useDataAttrOptions:!1,cookieExpirationTime:void 0,useCookie:!0,cookieName:"i18next",cookieDomain:void 0,objectTreeKeyHandler:void 0,postProcess:void 0,parseMissingKey:void 0,shortcutFunction:"sprintf"},H={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},I={create:function(a,b,c,d){var e;if(c){var f=new Date;f.setTime(f.getTime()+1e3*60*c),e="; expires="+f.toGMTString()}else e="";d=d?"domain="+d+";":"",document.cookie=a+"="+b+e+";"+d+"path=/"},read:function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(b))return e.substring(b.length,e.length)}return null},remove:function(a){this.create(a,"",-1)}},J={create:function(){},read:function(){return null},remove:function(){}},K={extend:A?A.extend:a,each:A?A.each:b,ajax:A?A.ajax:"undefined"!=typeof document?d:function(){},cookie:"undefined"!=typeof document?I:J,detectLanguage:y,escape:c,log:function(a){G.debug&&"undefined"!=typeof console&&console.log(a)},toLanguages:function(a){var b=[];if("string"==typeof a&&a.indexOf("-")>-1){var c=a.split("-");a=G.lowerCaseLng?c[0].toLowerCase()+"-"+c[1].toLowerCase():c[0].toLowerCase()+"-"+c[1].toUpperCase(),"unspecific"!==G.load&&b.push(a),"current"!==G.load&&b.push(c[0])}else b.push(a);for(var d=0;d<G.fallbackLng.length;d++)-1===b.indexOf(G.fallbackLng[d])&&G.fallbackLng[d]&&b.push(G.fallbackLng[d]);return b},regexEscape:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}};K.applyReplacement=o;var L={load:function(a,b,c){b.useLocalStorage?L._loadLocal(a,b,function(d,e){for(var f=[],g=0,h=a.length;h>g;g++)e[a[g]]||f.push(a[g]);f.length>0?L._fetch(f,b,function(a,b){K.extend(e,b),L._storeLocal(b),c(null,e)}):c(null,e)}):L._fetch(a,b,function(a,b){c(null,b)})},_loadLocal:function(a,b,c){var d={},e=(new Date).getTime();if(window.localStorage){var f=a.length;K.each(a,function(a,g){var h=window.localStorage.getItem("res_"+g);h&&(h=JSON.parse(h),h.i18nStamp&&h.i18nStamp+b.localStorageExpirationTime>e&&(d[g]=h)),f--,0===f&&c(null,d)})}},_storeLocal:function(a){if(window.localStorage)for(var b in a)a[b].i18nStamp=(new Date).getTime(),window.localStorage.setItem("res_"+b,JSON.stringify(a[b]))},_fetch:function(a,b,c){var d=b.ns,e={};if(b.dynamicLoad){var f=function(a,b){c(null,b)};if("function"==typeof b.customLoad)b.customLoad(a,d.namespaces,b,f);else{var g=o(b.resGetPath,{lng:a.join("+"),ns:d.namespaces.join("+")});K.ajax({url:g,success:function(a){K.log("loaded: "+g),f(null,a)},error:function(a,b,c){K.log("failed loading: "+g),f("failed loading resource.json error: "+c)},dataType:"json",async:b.getAsync})}}else{var h,i=d.namespaces.length*a.length;K.each(d.namespaces,function(d,f){K.each(a,function(a,d){var g=function(a,b){a&&(h=h||[],h.push(a)),e[d]=e[d]||{},e[d][f]=b,i--,0===i&&c(h,e)};"function"==typeof b.customLoad?b.customLoad(d,f,b,g):L._fetchOne(d,f,b,g)})})}},_fetchOne:function(a,b,c,d){var e=o(c.resGetPath,{lng:a,ns:b});K.ajax({url:e,success:function(a){K.log("loaded: "+e),d(null,a)},error:function(a,b,c){if(b&&200==b||a&&a.status&&200==a.status)K.log("There is a typo in: "+e);else if(b&&404==b||a&&a.status&&404==a.status)K.log("Does not exist: "+e);else{var f=b?b:a&&a.status?a.status:null;K.log(f+" when loading "+e)}d(c,{})},dataType:"json",async:c.getAsync})},postMissing:function(a,b,c,d,e){var f={};f[c]=d;var g=[];if("fallback"===G.sendMissingTo&&G.fallbackLng[0]!==!1)for(var h=0;h<G.fallbackLng.length;h++)g.push({lng:G.fallbackLng[h],url:o(G.resPostPath,{lng:G.fallbackLng[h],ns:b})});else if("current"===G.sendMissingTo||"fallback"===G.sendMissingTo&&G.fallbackLng[0]===!1)g.push({lng:a,url:o(G.resPostPath,{lng:a,ns:b})});else if("all"===G.sendMissingTo)for(var h=0,i=e.length;i>h;h++)g.push({lng:e[h],url:o(G.resPostPath,{lng:e[h],ns:b})});for(var j=0,k=g.length;k>j;j++){var l=g[j];K.ajax({url:l.url,type:G.sendType,data:f,success:function(){K.log("posted missing key '"+c+"' to: "+l.url);for(var a=c.split("."),e=0,f=C[l.lng][b];a[e];)f=f[a[e]]=e===a.length-1?d:f[a[e]]||{},e++},error:function(){K.log("failed posting missing key '"+c+"' to: "+l.url)},dataType:"json",async:G.postAsync})}}},M={rules:{ach:{name:"Acholi",numbers:[1,2],plurals:function(a){return Number(a>1)}},af:{name:"Afrikaans",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ak:{name:"Akan",numbers:[1,2],plurals:function(a){return Number(a>1)}},am:{name:"Amharic",numbers:[1,2],plurals:function(a){return Number(a>1)}},an:{name:"Aragonese",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ar:{name:"Arabic",numbers:[0,1,2,3,11,100],plurals:function(a){return Number(0===a?0:1==a?1:2==a?2:a%100>=3&&10>=a%100?3:a%100>=11?4:5)}},arn:{name:"Mapudungun",numbers:[1,2],plurals:function(a){return Number(a>1)}},ast:{name:"Asturian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ay:{name:"Aymará",numbers:[1],plurals:function(){return 0}},az:{name:"Azerbaijani",numbers:[1,2],plurals:function(a){return Number(1!=a)}},be:{name:"Belarusian",numbers:[1,2,5],plurals:function(a){return Number(1==a%10&&11!=a%100?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},bg:{name:"Bulgarian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},bn:{name:"Bengali",numbers:[1,2],plurals:function(a){return Number(1!=a)}},bo:{name:"Tibetan",numbers:[1],plurals:function(){return 0}},br:{name:"Breton",numbers:[1,2],plurals:function(a){return Number(a>1)}},bs:{name:"Bosnian",numbers:[1,2,5],plurals:function(a){return Number(1==a%10&&11!=a%100?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},ca:{name:"Catalan",numbers:[1,2],plurals:function(a){return Number(1!=a)}},cgg:{name:"Chiga",numbers:[1],plurals:function(){return 0}},cs:{name:"Czech",numbers:[1,2,5],plurals:function(a){return Number(1==a?0:a>=2&&4>=a?1:2)}},csb:{name:"Kashubian",numbers:[1,2,5],plurals:function(a){return Number(1==a?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},cy:{name:"Welsh",numbers:[1,2,3,8],plurals:function(a){return Number(1==a?0:2==a?1:8!=a&&11!=a?2:3)}},da:{name:"Danish",numbers:[1,2],plurals:function(a){return Number(1!=a)}},de:{name:"German",numbers:[1,2],plurals:function(a){return Number(1!=a)}},dz:{name:"Dzongkha",numbers:[1],plurals:function(){return 0}},el:{name:"Greek",numbers:[1,2],plurals:function(a){return Number(1!=a)}},en:{name:"English",numbers:[1,2],plurals:function(a){return Number(1!=a)}},eo:{name:"Esperanto",numbers:[1,2],plurals:function(a){return Number(1!=a)}},es:{name:"Spanish",numbers:[1,2],plurals:function(a){return Number(1!=a)}},es_ar:{name:"Argentinean Spanish",numbers:[1,2],plurals:function(a){return Number(1!=a)}},et:{name:"Estonian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},eu:{name:"Basque",numbers:[1,2],plurals:function(a){return Number(1!=a)}},fa:{name:"Persian",numbers:[1],plurals:function(){return 0}},fi:{name:"Finnish",numbers:[1,2],plurals:function(a){return Number(1!=a)}},fil:{name:"Filipino",numbers:[1,2],plurals:function(a){return Number(a>1)}},fo:{name:"Faroese",numbers:[1,2],plurals:function(a){return Number(1!=a)}},fr:{name:"French",numbers:[1,2],plurals:function(a){return Number(a>1)}},fur:{name:"Friulian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},fy:{name:"Frisian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ga:{name:"Irish",numbers:[1,2,3,7,11],plurals:function(a){return Number(1==a?0:2==a?1:7>a?2:11>a?3:4)}},gd:{name:"Scottish Gaelic",numbers:[1,2,3,20],plurals:function(a){return Number(1==a||11==a?0:2==a||12==a?1:a>2&&20>a?2:3)}},gl:{name:"Galician",numbers:[1,2],plurals:function(a){return Number(1!=a)}},gu:{name:"Gujarati",numbers:[1,2],plurals:function(a){return Number(1!=a)}},gun:{name:"Gun",numbers:[1,2],plurals:function(a){return Number(a>1)}},ha:{name:"Hausa",numbers:[1,2],plurals:function(a){return Number(1!=a)}},he:{name:"Hebrew",numbers:[1,2],plurals:function(a){return Number(1!=a)}},hi:{name:"Hindi",numbers:[1,2],plurals:function(a){return Number(1!=a)}},hr:{name:"Croatian",numbers:[1,2,5],plurals:function(a){return Number(1==a%10&&11!=a%100?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},hu:{name:"Hungarian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},hy:{name:"Armenian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ia:{name:"Interlingua",numbers:[1,2],plurals:function(a){return Number(1!=a)}},id:{name:"Indonesian",numbers:[1],plurals:function(){return 0}},is:{name:"Icelandic",numbers:[1,2],plurals:function(a){return Number(1!=a%10||11==a%100)}},it:{name:"Italian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ja:{name:"Japanese",numbers:[1],plurals:function(){return 0}},jbo:{name:"Lojban",numbers:[1],plurals:function(){return 0}},jv:{name:"Javanese",numbers:[0,1],plurals:function(a){return Number(0!==a)}},ka:{name:"Georgian",numbers:[1],plurals:function(){return 0}},kk:{name:"Kazakh",numbers:[1],plurals:function(){return 0}},km:{name:"Khmer",numbers:[1],plurals:function(){return 0}},kn:{name:"Kannada",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ko:{name:"Korean",numbers:[1],plurals:function(){return 0}},ku:{name:"Kurdish",numbers:[1,2],plurals:function(a){return Number(1!=a)}},kw:{name:"Cornish",numbers:[1,2,3,4],plurals:function(a){return Number(1==a?0:2==a?1:3==a?2:3)}},ky:{name:"Kyrgyz",numbers:[1],plurals:function(){return 0}},lb:{name:"Letzeburgesch",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ln:{name:"Lingala",numbers:[1,2],plurals:function(a){return Number(a>1)}},lo:{name:"Lao",numbers:[1],plurals:function(){return 0}},lt:{name:"Lithuanian",numbers:[1,2,10],plurals:function(a){return Number(1==a%10&&11!=a%100?0:a%10>=2&&(10>a%100||a%100>=20)?1:2)}},lv:{name:"Latvian",numbers:[1,2,0],plurals:function(a){return Number(1==a%10&&11!=a%100?0:0!==a?1:2)}},mai:{name:"Maithili",numbers:[1,2],plurals:function(a){return Number(1!=a)}},mfe:{name:"Mauritian Creole",numbers:[1,2],plurals:function(a){return Number(a>1)}},mg:{name:"Malagasy",numbers:[1,2],plurals:function(a){return Number(a>1)}},mi:{name:"Maori",numbers:[1,2],plurals:function(a){return Number(a>1)}},mk:{name:"Macedonian",numbers:[1,2],plurals:function(a){return Number(1==a||1==a%10?0:1)}},ml:{name:"Malayalam",numbers:[1,2],plurals:function(a){return Number(1!=a)}},mn:{name:"Mongolian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},mnk:{name:"Mandinka",numbers:[0,1,2],plurals:function(a){return Number(1==a?1:2)}},mr:{name:"Marathi",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ms:{name:"Malay",numbers:[1],plurals:function(){return 0}},mt:{name:"Maltese",numbers:[1,2,11,20],plurals:function(a){return Number(1==a?0:0===a||a%100>1&&11>a%100?1:a%100>10&&20>a%100?2:3)}},nah:{name:"Nahuatl",numbers:[1,2],plurals:function(a){return Number(1!=a)}},nap:{name:"Neapolitan",numbers:[1,2],plurals:function(a){return Number(1!=a)}},nb:{name:"Norwegian Bokmal",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ne:{name:"Nepali",numbers:[1,2],plurals:function(a){return Number(1!=a)}},nl:{name:"Dutch",numbers:[1,2],plurals:function(a){return Number(1!=a)}},nn:{name:"Norwegian Nynorsk",numbers:[1,2],plurals:function(a){return Number(1!=a)}},no:{name:"Norwegian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},nso:{name:"Northern Sotho",numbers:[1,2],plurals:function(a){return Number(1!=a)}},oc:{name:"Occitan",numbers:[1,2],plurals:function(a){return Number(a>1)}},or:{name:"Oriya",numbers:[2,1],plurals:function(a){return Number(1!=a)}},pa:{name:"Punjabi",numbers:[1,2],plurals:function(a){return Number(1!=a)}},pap:{name:"Papiamento",numbers:[1,2],plurals:function(a){return Number(1!=a)}},pl:{name:"Polish",numbers:[1,2,5],plurals:function(a){return Number(1==a?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},pms:{name:"Piemontese",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ps:{name:"Pashto",numbers:[1,2],plurals:function(a){return Number(1!=a)}},pt:{name:"Portuguese",numbers:[1,2],plurals:function(a){return Number(1!=a)}},pt_br:{name:"Brazilian Portuguese",numbers:[1,2],plurals:function(a){return Number(1!=a)}},rm:{name:"Romansh",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ro:{name:"Romanian",numbers:[1,2,20],plurals:function(a){return Number(1==a?0:0===a||a%100>0&&20>a%100?1:2)}},ru:{name:"Russian",numbers:[1,2,5],plurals:function(a){return Number(1==a%10&&11!=a%100?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},sah:{name:"Yakut",numbers:[1],plurals:function(){return 0}},sco:{name:"Scots",numbers:[1,2],plurals:function(a){return Number(1!=a)}},se:{name:"Northern Sami",numbers:[1,2],plurals:function(a){return Number(1!=a)}},si:{name:"Sinhala",numbers:[1,2],plurals:function(a){return Number(1!=a)}},sk:{name:"Slovak",numbers:[1,2,5],plurals:function(a){return Number(1==a?0:a>=2&&4>=a?1:2)}},sl:{name:"Slovenian",numbers:[5,1,2,3],plurals:function(a){return Number(1==a%100?1:2==a%100?2:3==a%100||4==a%100?3:0)}},so:{name:"Somali",numbers:[1,2],plurals:function(a){return Number(1!=a)}},son:{name:"Songhay",numbers:[1,2],plurals:function(a){return Number(1!=a)}},sq:{name:"Albanian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},sr:{name:"Serbian",numbers:[1,2,5],plurals:function(a){return Number(1==a%10&&11!=a%100?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},su:{name:"Sundanese",numbers:[1],plurals:function(){return 0}},sv:{name:"Swedish",numbers:[1,2],plurals:function(a){return Number(1!=a)}},sw:{name:"Swahili",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ta:{name:"Tamil",numbers:[1,2],plurals:function(a){return Number(1!=a)}},te:{name:"Telugu",numbers:[1,2],plurals:function(a){return Number(1!=a)}},tg:{name:"Tajik",numbers:[1,2],plurals:function(a){return Number(a>1)}},th:{name:"Thai",numbers:[1],plurals:function(){return 0}},ti:{name:"Tigrinya",numbers:[1,2],plurals:function(a){return Number(a>1)}},tk:{name:"Turkmen",numbers:[1,2],plurals:function(a){return Number(1!=a)}},tr:{name:"Turkish",numbers:[1,2],plurals:function(a){return Number(a>1)}},tt:{name:"Tatar",numbers:[1],plurals:function(){return 0}},ug:{name:"Uyghur",numbers:[1],plurals:function(){return 0}},uk:{name:"Ukrainian",numbers:[1,2,5],plurals:function(a){return Number(1==a%10&&11!=a%100?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},ur:{name:"Urdu",numbers:[1,2],plurals:function(a){return Number(1!=a)}},uz:{name:"Uzbek",numbers:[1,2],plurals:function(a){return Number(a>1)}},vi:{name:"Vietnamese",numbers:[1],plurals:function(){return 0}},wa:{name:"Walloon",numbers:[1,2],plurals:function(a){return Number(a>1)}},wo:{name:"Wolof",numbers:[1],plurals:function(){return 0}},yo:{name:"Yoruba",numbers:[1,2],plurals:function(a){return Number(1!=a)}},zh:{name:"Chinese",numbers:[1],plurals:function(){return 0}}},addRule:function(a,b){M.rules[a]=b},setCurrentLng:function(a){if(!M.currentRule||M.currentRule.lng!==a){var b=a.split("-");M.currentRule={lng:a,rule:M.rules[b[0]]}}},get:function(a,b){function c(b,c){var d;if(d=M.currentRule&&M.currentRule.lng===a?M.currentRule.rule:M.rules[b]){var e=d.plurals(c),f=d.numbers[e];return 2===d.numbers.length&&1===d.numbers[0]&&(2===f?f=-1:1===f&&(f=1)),f}return 1===c?"1":"-1"}var d=a.split("-");return c(d[0],b)}},N={},O=function(a,b){N[a]=b},P=function(){function a(a){return Object.prototype.toString.call(a).slice(8,-1).toLowerCase()}function b(a,b){for(var c=[];b>0;c[--b]=a);return c.join("")}var c=function(){return c.cache.hasOwnProperty(arguments[0])||(c.cache[arguments[0]]=c.parse(arguments[0])),c.format.call(null,c.cache[arguments[0]],arguments)};return c.format=function(c,d){var e,f,g,h,i,j,k,l=1,m=c.length,n="",o=[];for(f=0;m>f;f++)if(n=a(c[f]),"string"===n)o.push(c[f]);else if("array"===n){if(h=c[f],h[2])for(e=d[l],g=0;g<h[2].length;g++){if(!e.hasOwnProperty(h[2][g]))throw P('[sprintf] property "%s" does not exist',h[2][g]);e=e[h[2][g]]}else e=h[1]?d[h[1]]:d[l++];if(/[^s]/.test(h[8])&&"number"!=a(e))throw P("[sprintf] expecting number but found %s",a(e));switch(h[8]){case"b":e=e.toString(2);break;case"c":e=String.fromCharCode(e);break;case"d":e=parseInt(e,10);break;case"e":e=h[7]?e.toExponential(h[7]):e.toExponential();break;case"f":e=h[7]?parseFloat(e).toFixed(h[7]):parseFloat(e);break;case"o":e=e.toString(8);break;case"s":e=(e=String(e))&&h[7]?e.substring(0,h[7]):e;break;case"u":e=Math.abs(e);break;case"x":e=e.toString(16);break;case"X":e=e.toString(16).toUpperCase()}e=/[def]/.test(h[8])&&h[3]&&e>=0?"+"+e:e,j=h[4]?"0"==h[4]?"0":h[4].charAt(1):" ",k=h[6]-String(e).length,i=h[6]?b(j,k):"",o.push(h[5]?e+i:i+e)}return o.join("")},c.cache={},c.parse=function(a){for(var b=a,c=[],d=[],e=0;b;){if(null!==(c=/^[^\x25]+/.exec(b)))d.push(c[0]);else if(null!==(c=/^\x25{2}/.exec(b)))d.push("%");else{if(null===(c=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(b)))throw"[sprintf] huh?";if(c[2]){e|=1;var f=[],g=c[2],h=[];if(null===(h=/^([a-z_][a-z_\d]*)/i.exec(g)))throw"[sprintf] huh?";for(f.push(h[1]);""!==(g=g.substring(h[0].length));)if(null!==(h=/^\.([a-z_][a-z_\d]*)/i.exec(g)))f.push(h[1]);else{if(null===(h=/^\[(\d+)\]/.exec(g)))throw"[sprintf] huh?";f.push(h[1])}c[2]=f}else e|=2;if(3===e)throw"[sprintf] mixing positional and named placeholders is not (yet) supported";d.push(c)}b=b.substring(c[0].length)}return d},c}(),Q=function(a,b){return b.unshift(a),P.apply(null,b)};return O("sprintf",function(a,b,c){return c.sprintf?"[object Array]"===Object.prototype.toString.apply(c.sprintf)?Q(a,c.sprintf):"object"==typeof c.sprintf?P(a,c.sprintf):a:a}),B.init=e,B.setLng=l,B.preload=f,B.addResourceBundle=g,B.removeResourceBundle=h,B.loadNamespace=j,B.loadNamespaces=k,B.setDefaultNamespace=i,B.t=t,B.translate=t,B.exists=s,B.detectLanguage=K.detectLanguage,B.pluralExtensions=M,B.sync=L,B.functions=K,B.lng=m,B.addPostProcessor=O,B.options=G,B
});
define('models/TitleModel',[
    'lib/i18n'
], function (
    i18n
) {
    var TitleModel = Backbone.Model.extend({
        defaults: {
            title: i18n.t('title.default')
        }
    });
    return TitleModel;
});

define('views/TitleView',[
    'lib/i18n'
], function (
    i18n
) {
    var TitleView = Backbone.View.extend({
        events: {
            'click': 'nextView'
        },
        initialize: function () {
            this.render();
        },
        render: function () {
            var tmpl = $('.templates template.title').html();
            this.$el.html(_.template(tmpl, {
                title: this.model.get('title')
            }));
        },
        nextView: function () {
            Backbone.history.navigate('sprint', {trigger: true});
        }
    });
    return TitleView;
});

define('activities/HomeActivity',[
    'models/TitleModel',
    'views/TitleView',
    'lib/i18n'
], function (
    TitleModel,
    TitleView,
    i18n
) {
    var HomeActivity = Backbone.Activity.extend({
        titleView: null,
        onStart: function (routeParams) {
            this.titleView = new TitleView({
                model: new TitleModel({
                    title: i18n.t('title.home')
                })
            });
            $("#app").append(this.titleView.el);
        },
        onStop: function () {
            this.titleView.remove();
        }
    });
    return HomeActivity;
});

define('models/SprintModel',[
    'lib/i18n'
], function (
    i18n
) {
    var SprintModel = Backbone.Model.extend({
        defaults: {
            sprint: "unknown",
            startTime: 0 // when the sprint is due to begin
        },
        localStorage: new Backbone.LocalStorage('sprint'),
        initialize: function () {
            this.save();
        }
    });
    return SprintModel;
});

define('collections/SprintCollection',[
    'models/SprintModel'
], function (
    SprintModel
) {
    var SprintCollection = Backbone.Collection.extend({
        model: SprintModel,
        localStorage: new Backbone.LocalStorage('sprint')
    });
    return SprintCollection;
});

define('models/TaskModel',[
], function (
) {
    var TaskModel = Backbone.Model.extend({
        defaults: {
            tags: [],
            name: ""
        }
    });
    return TaskModel;
});

define('views/TaskView',[
    'lib/i18n'
], function (
    i18n
) {
    var TaskView = Backbone.View.extend({
        tagName: 'li',
        events: {
            'change .task-name-input': 'inputChanged',
            'click .taskDone': 'toggleDone'
        },
        initialize: function () {
            this.render();
        },
        render: function () {
            this.$el.addClass("task");
            this.$el.html(_.template($('.templates .task').html(), {
                name: this.model.get('name')
            }));
        },
        inputChanged: function () {
            this.model.set('name', this.$el.find('.task-name-input').val());
            this.model.save();
        },
        toggleDone: function () {
            var $taskDone = this.$el.find('.taskDone');
            $taskDone.toggleClass('selected');
            $taskDone.html(
                $taskDone.html() == " " ?
                "&#10004;" :
                " "
            );
        }
    });
    return TaskView;
});

define('views/SprintView',[
    'models/TaskModel',
    'views/TaskView',
    'lib/i18n'
], function (
    TaskModel,
    TaskView,
    i18n
) {
    var SprintView = Backbone.View.extend({
        tagName: 'li',
        events: {
            'click h2': 'toggleSprint',
            'click .addTask': 'doAddTask'
        },
        initialize: function () {
            this.taskViews = [];
            this.collection.localStorage = new Backbone.LocalStorage('sprint.' + this.model.get('sprint'));
            this.collection.fetch();
            this.model.fetch();
            this.render();
        },
        render: function () {
            this.$el.addClass('sprint');
            // by default, don't show this sprint
            this.$el.html(_.template($('.templates .sprint').html(), {
                sprintTitle: i18n.t('sprintNames.' + this.model.get('sprint')),
                startDate: new Date(this.model.get('startTime')).toLocaleDateString(),
                addTask: i18n.t('task.add')
            }));
            if(this.model.get('startTime') === null) {
                this.$el.find('.start-date').hide();
            }
            this.$el.find('.tasks').hide();
            this.collection.each(function (task) {
                var newTaskView = new TaskView({
                    model: task
                });
                this.taskViews.push(newTaskView);
                this.$el.find('.tasklist').append(newTaskView.el);
            }, this);
        },
        doAddTask: function () {
            var taskModel = new TaskModel({
                name: i18n.t('task.new')
            }), newTaskView;
            this.collection.add(taskModel);
            newTaskView = new TaskView({
                model: taskModel
            });
            this.taskViews.push(newTaskView);
            this.$el.find('.tasklist').append(newTaskView.el);
        },
        toggleSprint: function () {
            this.$el.toggleClass('expanded');
            this.$el.find('.tasks').toggle();
        }
    });
    return SprintView;
});

define('collections/TaskCollection',[
    'models/TaskModel'
], function (
    TaskModel
) {
    var TaskCollection = Backbone.Collection.extend({
        model: TaskModel,
        localStorage: new Backbone.LocalStorage('task-collection')
    });
    return TaskCollection;
});

define('views/SprintListView',[
    'views/SprintView',
    'models/SprintModel',
    'collections/TaskCollection',
    'lib/i18n'
], function (
    SprintView,
    SprintModel,
    TaskCollection,
    i18n
) {
    var SprintListView = Backbone.View.extend({
        tagName: 'ul',
        sprintViews: null,
        events: {
            'click .addTask': 'onAddTaskClick'
        },
        initialize: function () {
            this.sprintViews = {};
            this.collection.fetch();
            this.render();
        },
        render: function () {
            var tmpl = $('.templates .sprintlist').html();
            this.$el.html(_.template(tmpl, {
                addTask: i18n.t('task.add')
            }));
            this.$el.addClass("sprintlist");
            var createSprintView = _.bind(function (sprint, startTime) {
                var sprintModel, sprintView, taskCollection;
                sprintModel =
                    (this.collection.findWhere({sprint: sprint})) ||
                    new SprintModel({
                        sprint: sprint,
                        startTime: startTime
                    });
                taskCollection = new TaskCollection();
                taskCollection.fetch();
                if(taskCollection.length > 0) {
                    sprintView = new SprintView({
                        model: sprintModel,
                        collection: taskCollection
                    });
                    this.$el.append(sprintView.el);
                    this.sprintViews[sprint] = sprintView;
                }
            }, this);
            _.each([
                'today',
                'tomorrow',
                'currentWeek'
            ], function (sprint) {
                var startTime;
                switch(sprint) {
                    case 'today':
                        startTime = Date.today().getTime();
                        break;
                    case 'tomorrow':
                        startTime = Date.parse("tomorrow").getTime();
                        break;
                    case 'currentWeek':
                        startTime = Number.POSITIVE_INFINITY;
                        break;
                }
                createSprintView(sprint, startTime);
            }, this);
        },
        onAddTaskClick: function () {
            Backbone.history.navigate('/task/new', {trigger: true});
        }
    });
    return SprintListView;
});

define('activities/SprintListActivity',[
    'collections/SprintCollection',
    'models/TitleModel',
    'views/TitleView',
    'views/SprintListView',
    'lib/i18n'
], function (
    SprintCollection,
    TitleModel,
    TitleView,
    SprintListView,
    i18n
) {
    var SprintListActivity = Backbone.Activity.extend({
        sprintListView: null,
        titleView: null,
        onStart: function (routeParams) {
            this.titleView = new TitleView({
                model: new TitleModel({
                    title: i18n.t('title.sprintlist')
                })
            });
            this.sprintListView = new SprintListView({
                collection: new SprintCollection()
            });
            $("#app").append(this.titleView.el);
            $("#app").append(this.sprintListView.el);
        },
        onStop: function () {
            this.titleView.remove();
            this.sprintListView.remove();
        }
    });
    return SprintListActivity;
});

define('activities/SprintActivity',[
], function () {
    var SprintActivity = Backbone.Activity.extend({
        onStart: function (routeParams) {
            $("#container").append(_.template($(".templates .home")));
            console.log('foo');
        }
    });
    return SprintActivity;
});

define('activities/TaskActivity',[
], function () {
    var TaskActivity = Backbone.Activity.extend({
        onStart: function (routeParams) {

        }
    });
    return TaskActivity;
});

define('i18n/loader',[
], function (
) {
    function getLanguage(language) {
        var ajaxPromise = new Promise(function (resolve, reject) {
            var langUrl = "/js/i18n/" + language + ".json";
            $.get(langUrl, function (languageResponse) {
                var result = [];
                result[0] = language;
                result[1] = languageResponse;
                resolve(result);
            }).fail(function (jqXHR, textStatus, errorThrown) {
                reject('ajax error retrieving file ' + langUrl + ': ' + textStatus + ' server said: ' + errorThrown);
            });
        });
        return ajaxPromise;
    }
    return getLanguage;
});

requirejs.config({
    baseUrl: '/js/',
    paths: {
    },
    shim: {
        'lib/i18n': ['/js/lib/jquery-1.11.1.js']
    }
});

require([
    'activities/HomeActivity',
    'activities/SprintListActivity',
    'activities/SprintActivity',
    'activities/TaskActivity',
    'lib/i18n',
    'i18n/loader'
], function (
    HomeActivity,
    SprintListActivity,
    SprintActivity,
    TaskActivity,
    i18n,
    languageLoader
) {
    var ApplicationRouter, router;
    i18n.init({
        debug: true,
        detectLngQS: 'lang',
        fallbackLng: 'en',
        resGetPath: 'js/i18n/__lng__.json'
    }, function () {
        ApplicationRouter = Backbone.ActivityRouter.extend({
            activities: {
                "home": HomeActivity,
                "sprintlist": SprintListActivity,
                "sprint": SprintActivity,
                "task": TaskActivity
            },
            routes: {
                "": "home",
                "home": "home",
                "sprint": "sprintlist",
                "task(/new)": "task"
            }
        });
        router = new ApplicationRouter();
        Backbone.history.start({pushState: true});
    });
});

define("todo.js", function(){});