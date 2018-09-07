/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

;/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.2.0",d.prototype.close=function(b){function c(){f.detach().trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",c).emulateTransitionEnd(150):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.2.0",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),d[e](null==f[b]?this.options[b]:f[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b).on("keydown.bs.carousel",a.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.2.0",c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},c.prototype.keydown=function(a){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.to=function(b){var c=this,d=this.getItemIndex(this.$active=this.$element.find(".item.active"));return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=e[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:g});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,f&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(e)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:g});return a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one("bsTransitionEnd",function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger(m)),f&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(b=!b),e||d.data("bs.collapse",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};c.VERSION="3.2.0",c.DEFAULTS={toggle:!0},c.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},c.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var c=a.Event("show.bs.collapse");if(this.$element.trigger(c),!c.isDefaultPrevented()){var d=this.$parent&&this.$parent.find("> .panel > .in");if(d&&d.length){var e=d.data("bs.collapse");if(e&&e.transitioning)return;b.call(d,"hide"),e||d.data("bs.collapse",null)}var f=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[f](0),this.transitioning=1;var g=function(){this.$element.removeClass("collapsing").addClass("collapse in")[f](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return g.call(this);var h=a.camelCase(["scroll",f].join("-"));this.$element.one("bsTransitionEnd",a.proxy(g,this)).emulateTransitionEnd(350)[f](this.$element[0][h])}}},c.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},c.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var d=a.fn.collapse;a.fn.collapse=b,a.fn.collapse.Constructor=c,a.fn.collapse.noConflict=function(){return a.fn.collapse=d,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(c){var d,e=a(this),f=e.attr("data-target")||c.preventDefault()||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),g=a(f),h=g.data("bs.collapse"),i=h?"toggle":e.data(),j=e.attr("data-parent"),k=j&&a(j);h&&h.transitioning||(k&&k.find('[data-toggle="collapse"][data-parent="'+j+'"]').not(e).addClass("collapsed"),e[g.hasClass("in")?"addClass":"removeClass"]("collapsed")),b.call(g,i)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.2.0",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f+', [role="menu"], [role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.2.0",c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(c.$body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one("bsTransitionEnd",function(){c.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(300):c.$element.trigger("focus").trigger(e)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;if(this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;e?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(150):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var f=function(){c.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",f).emulateTransitionEnd(150):f()}else b&&b()},c.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.2.0",c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var c=a.contains(document.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!c)return;var d=this,e=this.tip(),f=this.getUID(this.type);this.setContent(),e.attr("id",f),this.$element.attr("aria-describedby",f),this.options.animation&&e.addClass("fade");var g="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,h=/\s?auto?\s?/i,i=h.test(g);i&&(g=g.replace(h,"")||"top"),e.detach().css({top:0,left:0,display:"block"}).addClass(g).data("bs."+this.type,this),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element);var j=this.getPosition(),k=e[0].offsetWidth,l=e[0].offsetHeight;if(i){var m=g,n=this.$element.parent(),o=this.getPosition(n);g="bottom"==g&&j.top+j.height+l-o.scroll>o.height?"top":"top"==g&&j.top-o.scroll-l<0?"bottom":"right"==g&&j.right+k>o.width?"left":"left"==g&&j.left-k<o.left?"right":g,e.removeClass(m).addClass(g)}var p=this.getCalculatedOffset(g,j,k,l);this.applyPlacement(p,g);var q=function(){d.$element.trigger("shown.bs."+d.type),d.hoverState=null};a.support.transition&&this.$tip.hasClass("fade")?e.one("bsTransitionEnd",q).emulateTransitionEnd(150):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=k.left?2*k.left-e+i:2*k.top-f+j,m=k.left?"left":"top",n=k.left?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(l,d[0][n],m)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one("bsTransitionEnd",b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName;return a.extend({},"function"==typeof c.getBoundingClientRect?c.getBoundingClientRect():null,{scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop(),width:d?a(window).width():b.outerWidth(),height:d?a(window).height():b.outerHeight()},d?{top:0,left:0}:b.offset())},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.2.0",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").empty()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.2.0",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.2.0",c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.closest("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},c.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),f.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(c){c.preventDefault(),b.call(a(this),"show")})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.2.0",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=a(document).height(),d=this.$target.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=b-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){null!=this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:b-this.$element.height()-h}))}}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},d.offsetBottom&&(d.offset.bottom=d.offsetBottom),d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
;/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.6.0
 *
 * Copyright 2017 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Chart=t()}}(function(){return function t(e,n,i){function a(r,l){if(!n[r]){if(!e[r]){var s="function"==typeof require&&require;if(!l&&s)return s(r,!0);if(o)return o(r,!0);var u=new Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}var d=n[r]={exports:{}};e[r][0].call(d.exports,function(t){var n=e[r][1][t];return a(n?n:t)},d,d.exports,t,e,n,i)}return n[r].exports}for(var o="function"==typeof require&&require,r=0;r<i.length;r++)a(i[r]);return a}({1:[function(t,e,n){},{}],2:[function(t,e,n){function i(t){if(t){var e=/^#([a-fA-F0-9]{3})$/,n=/^#([a-fA-F0-9]{6})$/,i=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,a=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,o=/(\w+)/,r=[0,0,0],l=1,s=t.match(e);if(s){s=s[1];for(var u=0;u<r.length;u++)r[u]=parseInt(s[u]+s[u],16)}else if(s=t.match(n)){s=s[1];for(var u=0;u<r.length;u++)r[u]=parseInt(s.slice(2*u,2*u+2),16)}else if(s=t.match(i)){for(var u=0;u<r.length;u++)r[u]=parseInt(s[u+1]);l=parseFloat(s[4])}else if(s=t.match(a)){for(var u=0;u<r.length;u++)r[u]=Math.round(2.55*parseFloat(s[u+1]));l=parseFloat(s[4])}else if(s=t.match(o)){if("transparent"==s[1])return[0,0,0,0];if(r=y[s[1]],!r)return}for(var u=0;u<r.length;u++)r[u]=b(r[u],0,255);return l=l||0==l?b(l,0,1):1,r[3]=l,r}}function a(t){if(t){var e=/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,n=t.match(e);if(n){var i=parseFloat(n[4]),a=b(parseInt(n[1]),0,360),o=b(parseFloat(n[2]),0,100),r=b(parseFloat(n[3]),0,100),l=b(isNaN(i)?1:i,0,1);return[a,o,r,l]}}}function o(t){if(t){var e=/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,n=t.match(e);if(n){var i=parseFloat(n[4]),a=b(parseInt(n[1]),0,360),o=b(parseFloat(n[2]),0,100),r=b(parseFloat(n[3]),0,100),l=b(isNaN(i)?1:i,0,1);return[a,o,r,l]}}}function r(t){var e=i(t);return e&&e.slice(0,3)}function l(t){var e=a(t);return e&&e.slice(0,3)}function s(t){var e=i(t);return e?e[3]:(e=a(t))?e[3]:(e=o(t))?e[3]:void 0}function u(t){return"#"+x(t[0])+x(t[1])+x(t[2])}function d(t,e){return e<1||t[3]&&t[3]<1?c(t,e):"rgb("+t[0]+", "+t[1]+", "+t[2]+")"}function c(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function h(t,e){if(e<1||t[3]&&t[3]<1)return f(t,e);var n=Math.round(t[0]/255*100),i=Math.round(t[1]/255*100),a=Math.round(t[2]/255*100);return"rgb("+n+"%, "+i+"%, "+a+"%)"}function f(t,e){var n=Math.round(t[0]/255*100),i=Math.round(t[1]/255*100),a=Math.round(t[2]/255*100);return"rgba("+n+"%, "+i+"%, "+a+"%, "+(e||t[3]||1)+")"}function g(t,e){return e<1||t[3]&&t[3]<1?p(t,e):"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"}function p(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function m(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"}function v(t){return k[t.slice(0,3)]}function b(t,e,n){return Math.min(Math.max(e,t),n)}function x(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}var y=t(6);e.exports={getRgba:i,getHsla:a,getRgb:r,getHsl:l,getHwb:o,getAlpha:s,hexString:u,rgbString:d,rgbaString:c,percentString:h,percentaString:f,hslString:g,hslaString:p,hwbString:m,keyword:v};var k={};for(var w in y)k[y[w]]=w},{6:6}],3:[function(t,e,n){var i=t(5),a=t(2),o=function(t){if(t instanceof o)return t;if(!(this instanceof o))return new o(t);this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1};var e;"string"==typeof t?(e=a.getRgba(t),e?this.setValues("rgb",e):(e=a.getHsla(t))?this.setValues("hsl",e):(e=a.getHwb(t))&&this.setValues("hwb",e)):"object"==typeof t&&(e=t,void 0!==e.r||void 0!==e.red?this.setValues("rgb",e):void 0!==e.l||void 0!==e.lightness?this.setValues("hsl",e):void 0!==e.v||void 0!==e.value?this.setValues("hsv",e):void 0!==e.w||void 0!==e.whiteness?this.setValues("hwb",e):void 0===e.c&&void 0===e.cyan||this.setValues("cmyk",e))};o.prototype={isValid:function(){return this.valid},rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t%=360,t=t<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return a.hexString(this.values.rgb)},rgbString:function(){return a.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return a.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return a.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return a.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return a.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return a.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return a.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],n=0;n<t.length;n++){var i=t[n]/255;e[n]=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),n=t.luminosity();return e>n?(e+.05)/(n+.05):(n+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb,e=(299*t[0]+587*t[1]+114*t[2])/1e3;return e<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,n=(e[0]+t)%360;return e[0]=n<0?360+n:n,this.setValues("hsl",e),this},mix:function(t,e){var n=this,i=t,a=void 0===e?.5:e,o=2*a-1,r=n.alpha()-i.alpha(),l=((o*r===-1?o:(o+r)/(1+o*r))+1)/2,s=1-l;return this.rgb(l*n.red()+s*i.red(),l*n.green()+s*i.green(),l*n.blue()+s*i.blue()).alpha(n.alpha()*a+i.alpha()*(1-a))},toJSON:function(){return this.rgb()},clone:function(){var t,e,n=new o,i=this.values,a=n.values;for(var r in i)i.hasOwnProperty(r)&&(t=i[r],e={}.toString.call(t),"[object Array]"===e?a[r]=t.slice(0):"[object Number]"===e?a[r]=t:console.error("unexpected color value:",t));return n}},o.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},o.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},o.prototype.getValues=function(t){for(var e=this.values,n={},i=0;i<t.length;i++)n[t.charAt(i)]=e[t][i];return 1!==e.alpha&&(n.a=e.alpha),n},o.prototype.setValues=function(t,e){var n,a=this.values,o=this.spaces,r=this.maxes,l=1;if(this.valid=!0,"alpha"===t)l=e;else if(e.length)a[t]=e.slice(0,t.length),l=e[t.length];else if(void 0!==e[t.charAt(0)]){for(n=0;n<t.length;n++)a[t][n]=e[t.charAt(n)];l=e.a}else if(void 0!==e[o[t][0]]){var s=o[t];for(n=0;n<t.length;n++)a[t][n]=e[s[n]];l=e.alpha}if(a.alpha=Math.max(0,Math.min(1,void 0===l?a.alpha:l)),"alpha"===t)return!1;var u;for(n=0;n<t.length;n++)u=Math.max(0,Math.min(r[t][n],a[t][n])),a[t][n]=Math.round(u);for(var d in o)d!==t&&(a[d]=i[t][d](a[t]));return!0},o.prototype.setSpace=function(t,e){var n=e[0];return void 0===n?this.getValues(t):("number"==typeof n&&(n=Array.prototype.slice.call(e)),this.setValues(t,n),this)},o.prototype.setChannel=function(t,e,n){var i=this.values[t];return void 0===n?i[e]:n===i[e]?this:(i[e]=n,this.setValues(t,i),this)},"undefined"!=typeof window&&(window.Color=o),e.exports=o},{2:2,5:5}],4:[function(t,e,n){function i(t){var e,n,i,a=t[0]/255,o=t[1]/255,r=t[2]/255,l=Math.min(a,o,r),s=Math.max(a,o,r),u=s-l;return s==l?e=0:a==s?e=(o-r)/u:o==s?e=2+(r-a)/u:r==s&&(e=4+(a-o)/u),e=Math.min(60*e,360),e<0&&(e+=360),i=(l+s)/2,n=s==l?0:i<=.5?u/(s+l):u/(2-s-l),[e,100*n,100*i]}function a(t){var e,n,i,a=t[0],o=t[1],r=t[2],l=Math.min(a,o,r),s=Math.max(a,o,r),u=s-l;return n=0==s?0:u/s*1e3/10,s==l?e=0:a==s?e=(o-r)/u:o==s?e=2+(r-a)/u:r==s&&(e=4+(a-o)/u),e=Math.min(60*e,360),e<0&&(e+=360),i=s/255*1e3/10,[e,n,i]}function o(t){var e=t[0],n=t[1],a=t[2],o=i(t)[0],r=1/255*Math.min(e,Math.min(n,a)),a=1-1/255*Math.max(e,Math.max(n,a));return[o,100*r,100*a]}function l(t){var e,n,i,a,o=t[0]/255,r=t[1]/255,l=t[2]/255;return a=Math.min(1-o,1-r,1-l),e=(1-o-a)/(1-a)||0,n=(1-r-a)/(1-a)||0,i=(1-l-a)/(1-a)||0,[100*e,100*n,100*i,100*a]}function s(t){return Z[JSON.stringify(t)]}function u(t){var e=t[0]/255,n=t[1]/255,i=t[2]/255;e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92;var a=.4124*e+.3576*n+.1805*i,o=.2126*e+.7152*n+.0722*i,r=.0193*e+.1192*n+.9505*i;return[100*a,100*o,100*r]}function d(t){var e,n,i,a=u(t),o=a[0],r=a[1],l=a[2];return o/=95.047,r/=100,l/=108.883,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,l=l>.008856?Math.pow(l,1/3):7.787*l+16/116,e=116*r-16,n=500*(o-r),i=200*(r-l),[e,n,i]}function c(t){return B(d(t))}function h(t){var e,n,i,a,o,r=t[0]/360,l=t[1]/100,s=t[2]/100;if(0==l)return o=255*s,[o,o,o];n=s<.5?s*(1+l):s+l-s*l,e=2*s-n,a=[0,0,0];for(var u=0;u<3;u++)i=r+1/3*-(u-1),i<0&&i++,i>1&&i--,o=6*i<1?e+6*(n-e)*i:2*i<1?n:3*i<2?e+(n-e)*(2/3-i)*6:e,a[u]=255*o;return a}function f(t){var e,n,i=t[0],a=t[1]/100,o=t[2]/100;return 0===o?[0,0,0]:(o*=2,a*=o<=1?o:2-o,n=(o+a)/2,e=2*a/(o+a),[i,100*e,100*n])}function p(t){return o(h(t))}function m(t){return l(h(t))}function v(t){return s(h(t))}function x(t){var e=t[0]/60,n=t[1]/100,i=t[2]/100,a=Math.floor(e)%6,o=e-Math.floor(e),r=255*i*(1-n),l=255*i*(1-n*o),s=255*i*(1-n*(1-o)),i=255*i;switch(a){case 0:return[i,s,r];case 1:return[l,i,r];case 2:return[r,i,s];case 3:return[r,l,i];case 4:return[s,r,i];case 5:return[i,r,l]}}function y(t){var e,n,i=t[0],a=t[1]/100,o=t[2]/100;return n=(2-a)*o,e=a*o,e/=n<=1?n:2-n,e=e||0,n/=2,[i,100*e,100*n]}function k(t){return o(x(t))}function w(t){return l(x(t))}function M(t){return s(x(t))}function S(t){var e,n,i,a,o=t[0]/360,l=t[1]/100,s=t[2]/100,u=l+s;switch(u>1&&(l/=u,s/=u),e=Math.floor(6*o),n=1-s,i=6*o-e,0!=(1&e)&&(i=1-i),a=l+i*(n-l),e){default:case 6:case 0:r=n,g=a,b=l;break;case 1:r=a,g=n,b=l;break;case 2:r=l,g=n,b=a;break;case 3:r=l,g=a,b=n;break;case 4:r=a,g=l,b=n;break;case 5:r=n,g=l,b=a}return[255*r,255*g,255*b]}function C(t){return i(S(t))}function D(t){return a(S(t))}function I(t){return l(S(t))}function A(t){return s(S(t))}function P(t){var e,n,i,a=t[0]/100,o=t[1]/100,r=t[2]/100,l=t[3]/100;return e=1-Math.min(1,a*(1-l)+l),n=1-Math.min(1,o*(1-l)+l),i=1-Math.min(1,r*(1-l)+l),[255*e,255*n,255*i]}function _(t){return i(P(t))}function T(t){return a(P(t))}function F(t){return o(P(t))}function R(t){return s(P(t))}function L(t){var e,n,i,a=t[0]/100,o=t[1]/100,r=t[2]/100;return e=3.2406*a+o*-1.5372+r*-.4986,n=a*-.9689+1.8758*o+.0415*r,i=.0557*a+o*-.204+1.057*r,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:e*=12.92,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i*=12.92,e=Math.min(Math.max(0,e),1),n=Math.min(Math.max(0,n),1),i=Math.min(Math.max(0,i),1),[255*e,255*n,255*i]}function V(t){var e,n,i,a=t[0],o=t[1],r=t[2];return a/=95.047,o/=100,r/=108.883,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,e=116*o-16,n=500*(a-o),i=200*(o-r),[e,n,i]}function O(t){return B(V(t))}function z(t){var e,n,i,a,o=t[0],r=t[1],l=t[2];return o<=8?(n=100*o/903.3,a=7.787*(n/100)+16/116):(n=100*Math.pow((o+16)/116,3),a=Math.pow(n/100,1/3)),e=e/95.047<=.008856?e=95.047*(r/500+a-16/116)/7.787:95.047*Math.pow(r/500+a,3),i=i/108.883<=.008859?i=108.883*(a-l/200-16/116)/7.787:108.883*Math.pow(a-l/200,3),[e,n,i]}function B(t){var e,n,i,a=t[0],o=t[1],r=t[2];return e=Math.atan2(r,o),n=360*e/2/Math.PI,n<0&&(n+=360),i=Math.sqrt(o*o+r*r),[a,i,n]}function W(t){return L(z(t))}function N(t){var e,n,i,a=t[0],o=t[1],r=t[2];return i=r/360*2*Math.PI,e=o*Math.cos(i),n=o*Math.sin(i),[a,e,n]}function E(t){return z(N(t))}function H(t){return W(N(t))}function q(t){return J[t]}function j(t){return i(q(t))}function Y(t){return a(q(t))}function U(t){return o(q(t))}function X(t){return l(q(t))}function K(t){return d(q(t))}function G(t){return u(q(t))}e.exports={rgb2hsl:i,rgb2hsv:a,rgb2hwb:o,rgb2cmyk:l,rgb2keyword:s,rgb2xyz:u,rgb2lab:d,rgb2lch:c,hsl2rgb:h,hsl2hsv:f,hsl2hwb:p,hsl2cmyk:m,hsl2keyword:v,hsv2rgb:x,hsv2hsl:y,hsv2hwb:k,hsv2cmyk:w,hsv2keyword:M,hwb2rgb:S,hwb2hsl:C,hwb2hsv:D,hwb2cmyk:I,hwb2keyword:A,cmyk2rgb:P,cmyk2hsl:_,cmyk2hsv:T,cmyk2hwb:F,cmyk2keyword:R,keyword2rgb:q,keyword2hsl:j,keyword2hsv:Y,keyword2hwb:U,keyword2cmyk:X,keyword2lab:K,keyword2xyz:G,xyz2rgb:L,xyz2lab:V,xyz2lch:O,lab2xyz:z,lab2rgb:W,lab2lch:B,lch2lab:N,lch2xyz:E,lch2rgb:H};var J={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},Z={};for(var Q in J)Z[JSON.stringify(J[Q])]=Q},{}],5:[function(t,e,n){var i=t(4),a=function(){return new u};for(var o in i){a[o+"Raw"]=function(t){return function(e){return"number"==typeof e&&(e=Array.prototype.slice.call(arguments)),i[t](e)}}(o);var r=/(\w+)2(\w+)/.exec(o),l=r[1],s=r[2];a[l]=a[l]||{},a[l][s]=a[o]=function(t){return function(e){"number"==typeof e&&(e=Array.prototype.slice.call(arguments));var n=i[t](e);if("string"==typeof n||void 0===n)return n;for(var a=0;a<n.length;a++)n[a]=Math.round(n[a]);return n}}(o)}var u=function(){this.convs={}};u.prototype.routeSpace=function(t,e){var n=e[0];return void 0===n?this.getValues(t):("number"==typeof n&&(n=Array.prototype.slice.call(e)),this.setValues(t,n))},u.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},u.prototype.getValues=function(t){var e=this.convs[t];if(!e){var n=this.space,i=this.convs[n];e=a[n][t](i),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(t){u.prototype[t]=function(e){return this.routeSpace(t,arguments)}}),e.exports=a},{4:4}],6:[function(t,e,n){e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],7:[function(t,e,n){var i=t(28)();t(26)(i),t(40)(i),t(22)(i),t(25)(i),t(30)(i),t(21)(i),t(23)(i),t(24)(i),t(29)(i),t(32)(i),t(33)(i),t(31)(i),t(27)(i),t(34)(i),t(35)(i),t(36)(i),t(37)(i),t(38)(i),t(46)(i),t(44)(i),t(45)(i),t(47)(i),t(48)(i),t(49)(i),t(15)(i),t(16)(i),t(17)(i),t(18)(i),t(19)(i),t(20)(i),t(8)(i),t(9)(i),t(10)(i),t(11)(i),t(12)(i),t(13)(i),t(14)(i);var a=[];a.push(t(41)(i),t(42)(i),t(43)(i)),i.plugins.register(a),e.exports=i,"undefined"!=typeof window&&(window.Chart=i)},{10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,30:30,31:31,32:32,33:33,34:34,35:35,36:36,37:37,38:38,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,8:8,9:9}],8:[function(t,e,n){"use strict";e.exports=function(t){t.Bar=function(e,n){return n.type="bar",new t(e,n)}}},{}],9:[function(t,e,n){"use strict";e.exports=function(t){t.Bubble=function(e,n){return n.type="bubble",new t(e,n)}}},{}],10:[function(t,e,n){"use strict";e.exports=function(t){t.Doughnut=function(e,n){return n.type="doughnut",new t(e,n)}}},{}],11:[function(t,e,n){"use strict";e.exports=function(t){t.Line=function(e,n){return n.type="line",new t(e,n)}}},{}],12:[function(t,e,n){"use strict";e.exports=function(t){t.PolarArea=function(e,n){return n.type="polarArea",new t(e,n)}}},{}],13:[function(t,e,n){"use strict";e.exports=function(t){t.Radar=function(e,n){return n.type="radar",new t(e,n)}}},{}],14:[function(t,e,n){"use strict";e.exports=function(t){var e={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-1"}],yAxes:[{type:"linear",position:"left",id:"y-axis-1"}]},tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}};t.defaults.scatter=e,t.controllers.scatter=t.controllers.line,t.Scatter=function(e,n){return n.type="scatter",new t(e,n)}}},{}],15:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bar={hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}},t.controllers.bar=t.DatasetController.extend({dataElementType:t.elements.Rectangle,initialize:function(){var e,n=this;t.DatasetController.prototype.initialize.apply(n,arguments),e=n.getMeta(),e.stack=n.getDataset().stack,e.bar=!0},update:function(t){var e,n,i=this,a=i.getMeta().data;for(i._ruler=i.getRuler(),e=0,n=a.length;e<n;++e)i.updateElement(a[e],e,t)},updateElement:function(t,n,i){var a=this,o=a.chart,r=a.getMeta(),l=a.getDataset(),s=t.custom||{},u=o.options.elements.rectangle;t._xScale=a.getScaleForId(r.xAxisID),t._yScale=a.getScaleForId(r.yAxisID),t._datasetIndex=a.index,t._index=n,t._model={datasetLabel:l.label,label:o.data.labels[n],borderSkipped:s.borderSkipped?s.borderSkipped:u.borderSkipped,backgroundColor:s.backgroundColor?s.backgroundColor:e.getValueAtIndexOrDefault(l.backgroundColor,n,u.backgroundColor),borderColor:s.borderColor?s.borderColor:e.getValueAtIndexOrDefault(l.borderColor,n,u.borderColor),borderWidth:s.borderWidth?s.borderWidth:e.getValueAtIndexOrDefault(l.borderWidth,n,u.borderWidth)},a.updateElementGeometry(t,n,i),t.pivot()},updateElementGeometry:function(t,e,n){var i=this,a=t._model,o=i.getValueScale(),r=o.getBasePixel(),l=o.isHorizontal(),s=i._ruler||i.getRuler(),u=i.calculateBarValuePixels(i.index,e),d=i.calculateBarIndexPixels(i.index,e,s);a.horizontal=l,a.base=n?r:u.base,a.x=l?n?r:u.head:d.center,a.y=l?d.center:n?r:u.head,a.height=l?d.size:void 0,a.width=l?void 0:d.size},getValueScaleId:function(){return this.getMeta().yAxisID},getIndexScaleId:function(){return this.getMeta().xAxisID},getValueScale:function(){return this.getScaleForId(this.getValueScaleId())},getIndexScale:function(){return this.getScaleForId(this.getIndexScaleId())},getStackCount:function(t){var e,n,i=this,a=i.chart,o=i.getIndexScale(),r=o.options.stacked,l=void 0===t?a.data.datasets.length:t+1,s=[];for(e=0;e<l;++e)n=a.getDatasetMeta(e),n.bar&&a.isDatasetVisible(e)&&(r===!1||r===!0&&s.indexOf(n.stack)===-1||void 0===r&&(void 0===n.stack||s.indexOf(n.stack)===-1))&&s.push(n.stack);return s.length},getStackIndex:function(t){return this.getStackCount(t)-1},getRuler:function(){var t=this,n=t.getIndexScale(),i=n.options,a=t.getStackCount(),o=n.isHorizontal()?n.width:n.height,r=o/n.ticks.length,l=r*i.categoryPercentage,s=l/a,u=s*i.barPercentage;return u=Math.min(e.getValueOrDefault(i.barThickness,u),e.getValueOrDefault(i.maxBarThickness,1/0)),{stackCount:a,tickSize:r,categorySize:l,categorySpacing:r-l,fullBarSize:s,barSize:u,barSpacing:s-u,scale:n}},calculateBarValuePixels:function(t,e){var n,i,a,o,r,l,s=this,u=s.chart,d=s.getMeta(),c=s.getValueScale(),h=u.data.datasets,f=Number(h[t].data[e]),g=c.options.stacked,p=d.stack,m=0;if(g||void 0===g&&void 0!==p)for(n=0;n<t;++n)i=u.getDatasetMeta(n),i.bar&&i.stack===p&&i.controller.getValueScaleId()===c.id&&u.isDatasetVisible(n)&&(a=Number(h[n].data[e]),(f<0&&a<0||f>=0&&a>0)&&(m+=a));return o=c.getPixelForValue(m),r=c.getPixelForValue(m+f),l=(r-o)/2,{size:l,base:o,head:r,center:r+l/2}},calculateBarIndexPixels:function(t,e,n){var i=this,a=n.scale,o=i.chart.isCombo,r=i.getStackIndex(t),l=a.getPixelForValue(null,e,t,o),s=n.barSize;return l-=o?n.tickSize/2:0,l+=n.fullBarSize*r,l+=n.categorySpacing/2,l+=n.barSpacing/2,{size:s,base:l,head:l+s,center:l+s/2}},draw:function(){var t,n=this,i=n.chart,a=n.getMeta().data,o=n.getDataset(),r=a.length,l=0;for(e.canvas.clipArea(i.ctx,i.chartArea);l<r;++l)t=o.data[l],null===t||void 0===t||isNaN(t)||a[l].draw();e.canvas.unclipArea(i.ctx)},setHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t._index,a=t.custom||{},o=t._model;o.backgroundColor=a.hoverBackgroundColor?a.hoverBackgroundColor:e.getValueAtIndexOrDefault(n.hoverBackgroundColor,i,e.getHoverColor(o.backgroundColor)),o.borderColor=a.hoverBorderColor?a.hoverBorderColor:e.getValueAtIndexOrDefault(n.hoverBorderColor,i,e.getHoverColor(o.borderColor)),o.borderWidth=a.hoverBorderWidth?a.hoverBorderWidth:e.getValueAtIndexOrDefault(n.hoverBorderWidth,i,o.borderWidth)},removeHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t._index,a=t.custom||{},o=t._model,r=this.chart.options.elements.rectangle;o.backgroundColor=a.backgroundColor?a.backgroundColor:e.getValueAtIndexOrDefault(n.backgroundColor,i,r.backgroundColor),o.borderColor=a.borderColor?a.borderColor:e.getValueAtIndexOrDefault(n.borderColor,i,r.borderColor),o.borderWidth=a.borderWidth?a.borderWidth:e.getValueAtIndexOrDefault(n.borderWidth,i,r.borderWidth)}}),t.defaults.horizontalBar={hover:{mode:"label"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(t,e){var n="";return t.length>0&&(t[0].yLabel?n=t[0].yLabel:e.labels.length>0&&t[0].index<e.labels.length&&(n=e.labels[t[0].index])),n},label:function(t,e){var n=e.datasets[t.datasetIndex].label||"";return n+": "+t.xLabel}}}},t.controllers.horizontalBar=t.controllers.bar.extend({getValueScaleId:function(){return this.getMeta().xAxisID},getIndexScaleId:function(){return this.getMeta().yAxisID}})}},{}],16:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bubble={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var n=e.datasets[t.datasetIndex].label||"",i=e.datasets[t.datasetIndex].data[t.index];return n+": ("+t.xLabel+", "+t.yLabel+", "+i.r+")"}}}},t.controllers.bubble=t.DatasetController.extend({dataElementType:t.elements.Point,update:function(t){var n=this,i=n.getMeta(),a=i.data;e.each(a,function(e,i){n.updateElement(e,i,t)})},updateElement:function(n,i,a){var o=this,r=o.getMeta(),l=o.getScaleForId(r.xAxisID),s=o.getScaleForId(r.yAxisID),u=n.custom||{},d=o.getDataset(),c=d.data[i],h=o.chart.options.elements.point,f=o.index;e.extend(n,{_xScale:l,_yScale:s,_datasetIndex:f,_index:i,_model:{x:a?l.getPixelForDecimal(.5):l.getPixelForValue("object"==typeof c?c:NaN,i,f,o.chart.isCombo),y:a?s.getBasePixel():s.getPixelForValue(c,i,f),radius:a?0:u.radius?u.radius:o.getRadius(c),hitRadius:u.hitRadius?u.hitRadius:e.getValueAtIndexOrDefault(d.hitRadius,i,h.hitRadius)}}),t.DatasetController.prototype.removeHoverStyle.call(o,n,h);var g=n._model;g.skip=u.skip?u.skip:isNaN(g.x)||isNaN(g.y),n.pivot()},getRadius:function(t){return t.r||this.chart.options.elements.point.radius},setHoverStyle:function(n){var i=this;t.DatasetController.prototype.setHoverStyle.call(i,n);var a=i.chart.data.datasets[n._datasetIndex],o=n._index,r=n.custom||{},l=n._model;
l.radius=r.hoverRadius?r.hoverRadius:e.getValueAtIndexOrDefault(a.hoverRadius,o,i.chart.options.elements.point.hoverRadius)+i.getRadius(a.data[o])},removeHoverStyle:function(e){var n=this;t.DatasetController.prototype.removeHoverStyle.call(n,e,n.chart.options.elements.point);var i=n.chart.data.datasets[e._datasetIndex].data[e._index],a=e.custom||{},o=e._model;o.radius=a.radius?a.radius:n.getRadius(i)}})}},{}],17:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=t.defaults;n.doughnut={animation:{animateRotate:!0,animateScale:!1},aspectRatio:1,hover:{mode:"single"},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var n=t.data,i=n.datasets,a=n.labels;if(i.length)for(var o=0;o<i[0].data.length;++o)e.push('<li><span style="background-color:'+i[0].backgroundColor[o]+'"></span>'),a[o]&&e.push(a[o]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var n=t.data;return n.labels.length&&n.datasets.length?n.labels.map(function(i,a){var o=t.getDatasetMeta(0),r=n.datasets[0],l=o.data[a],s=l&&l.custom||{},u=e.getValueAtIndexOrDefault,d=t.options.elements.arc,c=s.backgroundColor?s.backgroundColor:u(r.backgroundColor,a,d.backgroundColor),h=s.borderColor?s.borderColor:u(r.borderColor,a,d.borderColor),f=s.borderWidth?s.borderWidth:u(r.borderWidth,a,d.borderWidth);return{text:i,fillStyle:c,strokeStyle:h,lineWidth:f,hidden:isNaN(r.data[a])||o.data[a].hidden,index:a}}):[]}},onClick:function(t,e){var n,i,a,o=e.index,r=this.chart;for(n=0,i=(r.data.datasets||[]).length;n<i;++n)a=r.getDatasetMeta(n),a.data[o]&&(a.data[o].hidden=!a.data[o].hidden);r.update()}},cutoutPercentage:50,rotation:Math.PI*-.5,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(t,n){var i=n.labels[t.index],a=": "+n.datasets[t.datasetIndex].data[t.index];return e.isArray(i)?(i=i.slice(),i[0]+=a):i+=a,i}}}},n.pie=e.clone(n.doughnut),e.extend(n.pie,{cutoutPercentage:0}),t.controllers.doughnut=t.controllers.pie=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,getRingIndex:function(t){for(var e=0,n=0;n<t;++n)this.chart.isDatasetVisible(n)&&++e;return e},update:function(t){var n=this,i=n.chart,a=i.chartArea,o=i.options,r=o.elements.arc,l=a.right-a.left-r.borderWidth,s=a.bottom-a.top-r.borderWidth,u=Math.min(l,s),d={x:0,y:0},c=n.getMeta(),h=o.cutoutPercentage,f=o.circumference;if(f<2*Math.PI){var g=o.rotation%(2*Math.PI);g+=2*Math.PI*(g>=Math.PI?-1:g<-Math.PI?1:0);var p=g+f,m={x:Math.cos(g),y:Math.sin(g)},v={x:Math.cos(p),y:Math.sin(p)},b=g<=0&&0<=p||g<=2*Math.PI&&2*Math.PI<=p,x=g<=.5*Math.PI&&.5*Math.PI<=p||g<=2.5*Math.PI&&2.5*Math.PI<=p,y=g<=-Math.PI&&-Math.PI<=p||g<=Math.PI&&Math.PI<=p,k=g<=.5*-Math.PI&&.5*-Math.PI<=p||g<=1.5*Math.PI&&1.5*Math.PI<=p,w=h/100,M={x:y?-1:Math.min(m.x*(m.x<0?1:w),v.x*(v.x<0?1:w)),y:k?-1:Math.min(m.y*(m.y<0?1:w),v.y*(v.y<0?1:w))},S={x:b?1:Math.max(m.x*(m.x>0?1:w),v.x*(v.x>0?1:w)),y:x?1:Math.max(m.y*(m.y>0?1:w),v.y*(v.y>0?1:w))},C={width:.5*(S.x-M.x),height:.5*(S.y-M.y)};u=Math.min(l/C.width,s/C.height),d={x:(S.x+M.x)*-.5,y:(S.y+M.y)*-.5}}i.borderWidth=n.getMaxBorderWidth(c.data),i.outerRadius=Math.max((u-i.borderWidth)/2,0),i.innerRadius=Math.max(h?i.outerRadius/100*h:0,0),i.radiusLength=(i.outerRadius-i.innerRadius)/i.getVisibleDatasetCount(),i.offsetX=d.x*i.outerRadius,i.offsetY=d.y*i.outerRadius,c.total=n.calculateTotal(),n.outerRadius=i.outerRadius-i.radiusLength*n.getRingIndex(n.index),n.innerRadius=Math.max(n.outerRadius-i.radiusLength,0),e.each(c.data,function(e,i){n.updateElement(e,i,t)})},updateElement:function(t,n,i){var a=this,o=a.chart,r=o.chartArea,l=o.options,s=l.animation,u=(r.left+r.right)/2,d=(r.top+r.bottom)/2,c=l.rotation,h=l.rotation,f=a.getDataset(),g=i&&s.animateRotate?0:t.hidden?0:a.calculateCircumference(f.data[n])*(l.circumference/(2*Math.PI)),p=i&&s.animateScale?0:a.innerRadius,m=i&&s.animateScale?0:a.outerRadius,v=e.getValueAtIndexOrDefault;e.extend(t,{_datasetIndex:a.index,_index:n,_model:{x:u+o.offsetX,y:d+o.offsetY,startAngle:c,endAngle:h,circumference:g,outerRadius:m,innerRadius:p,label:v(f.label,n,o.data.labels[n])}});var b=t._model;this.removeHoverStyle(t),i&&s.animateRotate||(0===n?b.startAngle=l.rotation:b.startAngle=a.getMeta().data[n-1]._model.endAngle,b.endAngle=b.startAngle+b.circumference),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},calculateTotal:function(){var t,n=this.getDataset(),i=this.getMeta(),a=0;return e.each(i.data,function(e,i){t=n.data[i],isNaN(t)||e.hidden||(a+=Math.abs(t))}),a},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?2*Math.PI*(t/e):0},getMaxBorderWidth:function(t){for(var e,n,i=0,a=this.index,o=t.length,r=0;r<o;r++)e=t[r]._model?t[r]._model.borderWidth:0,n=t[r]._chart?t[r]._chart.config.data.datasets[a].hoverBorderWidth:0,i=e>i?e:i,i=n>i?n:i;return i}})}},{}],18:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){return n.getValueOrDefault(t.showLine,e.showLines)}var n=t.helpers;t.defaults.line={showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}},t.controllers.line=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,update:function(t){var i,a,o,r=this,l=r.getMeta(),s=l.dataset,u=l.data||[],d=r.chart.options,c=d.elements.line,h=r.getScaleForId(l.yAxisID),f=r.getDataset(),g=e(f,d);for(g&&(o=s.custom||{},void 0!==f.tension&&void 0===f.lineTension&&(f.lineTension=f.tension),s._scale=h,s._datasetIndex=r.index,s._children=u,s._model={spanGaps:f.spanGaps?f.spanGaps:d.spanGaps,tension:o.tension?o.tension:n.getValueOrDefault(f.lineTension,c.tension),backgroundColor:o.backgroundColor?o.backgroundColor:f.backgroundColor||c.backgroundColor,borderWidth:o.borderWidth?o.borderWidth:f.borderWidth||c.borderWidth,borderColor:o.borderColor?o.borderColor:f.borderColor||c.borderColor,borderCapStyle:o.borderCapStyle?o.borderCapStyle:f.borderCapStyle||c.borderCapStyle,borderDash:o.borderDash?o.borderDash:f.borderDash||c.borderDash,borderDashOffset:o.borderDashOffset?o.borderDashOffset:f.borderDashOffset||c.borderDashOffset,borderJoinStyle:o.borderJoinStyle?o.borderJoinStyle:f.borderJoinStyle||c.borderJoinStyle,fill:o.fill?o.fill:void 0!==f.fill?f.fill:c.fill,steppedLine:o.steppedLine?o.steppedLine:n.getValueOrDefault(f.steppedLine,c.stepped),cubicInterpolationMode:o.cubicInterpolationMode?o.cubicInterpolationMode:n.getValueOrDefault(f.cubicInterpolationMode,c.cubicInterpolationMode)},s.pivot()),i=0,a=u.length;i<a;++i)r.updateElement(u[i],i,t);for(g&&0!==s._model.tension&&r.updateBezierControlPoints(),i=0,a=u.length;i<a;++i)u[i].pivot()},getPointBackgroundColor:function(t,e){var i=this.chart.options.elements.point.backgroundColor,a=this.getDataset(),o=t.custom||{};return o.backgroundColor?i=o.backgroundColor:a.pointBackgroundColor?i=n.getValueAtIndexOrDefault(a.pointBackgroundColor,e,i):a.backgroundColor&&(i=a.backgroundColor),i},getPointBorderColor:function(t,e){var i=this.chart.options.elements.point.borderColor,a=this.getDataset(),o=t.custom||{};return o.borderColor?i=o.borderColor:a.pointBorderColor?i=n.getValueAtIndexOrDefault(a.pointBorderColor,e,i):a.borderColor&&(i=a.borderColor),i},getPointBorderWidth:function(t,e){var i=this.chart.options.elements.point.borderWidth,a=this.getDataset(),o=t.custom||{};return isNaN(o.borderWidth)?isNaN(a.pointBorderWidth)?isNaN(a.borderWidth)||(i=a.borderWidth):i=n.getValueAtIndexOrDefault(a.pointBorderWidth,e,i):i=o.borderWidth,i},updateElement:function(t,e,i){var a,o,r=this,l=r.getMeta(),s=t.custom||{},u=r.getDataset(),d=r.index,c=u.data[e],h=r.getScaleForId(l.yAxisID),f=r.getScaleForId(l.xAxisID),g=r.chart.options.elements.point,p=r.chart.data.labels||[],m=1===p.length||1===u.data.length||r.chart.isCombo;void 0!==u.radius&&void 0===u.pointRadius&&(u.pointRadius=u.radius),void 0!==u.hitRadius&&void 0===u.pointHitRadius&&(u.pointHitRadius=u.hitRadius),a=f.getPixelForValue("object"==typeof c?c:NaN,e,d,m),o=i?h.getBasePixel():r.calculatePointY(c,e,d),t._xScale=f,t._yScale=h,t._datasetIndex=d,t._index=e,t._model={x:a,y:o,skip:s.skip||isNaN(a)||isNaN(o),radius:s.radius||n.getValueAtIndexOrDefault(u.pointRadius,e,g.radius),pointStyle:s.pointStyle||n.getValueAtIndexOrDefault(u.pointStyle,e,g.pointStyle),backgroundColor:r.getPointBackgroundColor(t,e),borderColor:r.getPointBorderColor(t,e),borderWidth:r.getPointBorderWidth(t,e),tension:l.dataset._model?l.dataset._model.tension:0,steppedLine:!!l.dataset._model&&l.dataset._model.steppedLine,hitRadius:s.hitRadius||n.getValueAtIndexOrDefault(u.pointHitRadius,e,g.hitRadius)}},calculatePointY:function(t,e,n){var i,a,o,r=this,l=r.chart,s=r.getMeta(),u=r.getScaleForId(s.yAxisID),d=0,c=0;if(u.options.stacked){for(i=0;i<n;i++)if(a=l.data.datasets[i],o=l.getDatasetMeta(i),"line"===o.type&&o.yAxisID===u.id&&l.isDatasetVisible(i)){var h=Number(u.getRightValue(a.data[e]));h<0?c+=h||0:d+=h||0}var f=Number(u.getRightValue(t));return f<0?u.getPixelForValue(c+f):u.getPixelForValue(d+f)}return u.getPixelForValue(t)},updateBezierControlPoints:function(){function t(t,e,n){return Math.max(Math.min(t,n),e)}var e,i,a,o,r,l=this,s=l.getMeta(),u=l.chart.chartArea,d=s.data||[];if(s.dataset._model.spanGaps&&(d=d.filter(function(t){return!t._model.skip})),"monotone"===s.dataset._model.cubicInterpolationMode)n.splineCurveMonotone(d);else for(e=0,i=d.length;e<i;++e)a=d[e],o=a._model,r=n.splineCurve(n.previousItem(d,e)._model,o,n.nextItem(d,e)._model,s.dataset._model.tension),o.controlPointPreviousX=r.previous.x,o.controlPointPreviousY=r.previous.y,o.controlPointNextX=r.next.x,o.controlPointNextY=r.next.y;if(l.chart.options.elements.line.capBezierPoints)for(e=0,i=d.length;e<i;++e)o=d[e]._model,o.controlPointPreviousX=t(o.controlPointPreviousX,u.left,u.right),o.controlPointPreviousY=t(o.controlPointPreviousY,u.top,u.bottom),o.controlPointNextX=t(o.controlPointNextX,u.left,u.right),o.controlPointNextY=t(o.controlPointNextY,u.top,u.bottom)},draw:function(){var n=this,i=n.chart,a=n.getMeta(),o=a.data||[],r=i.chartArea,l=o.length,s=0;for(t.canvasHelpers.clipArea(i.ctx,r),e(n.getDataset(),i.options)&&a.dataset.draw(),t.canvasHelpers.unclipArea(i.ctx);s<l;++s)o[s].draw(r)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,a=t.custom||{},o=t._model;o.radius=a.hoverRadius||n.getValueAtIndexOrDefault(e.pointHoverRadius,i,this.chart.options.elements.point.hoverRadius),o.backgroundColor=a.hoverBackgroundColor||n.getValueAtIndexOrDefault(e.pointHoverBackgroundColor,i,n.getHoverColor(o.backgroundColor)),o.borderColor=a.hoverBorderColor||n.getValueAtIndexOrDefault(e.pointHoverBorderColor,i,n.getHoverColor(o.borderColor)),o.borderWidth=a.hoverBorderWidth||n.getValueAtIndexOrDefault(e.pointHoverBorderWidth,i,o.borderWidth)},removeHoverStyle:function(t){var e=this,i=e.chart.data.datasets[t._datasetIndex],a=t._index,o=t.custom||{},r=t._model;void 0!==i.radius&&void 0===i.pointRadius&&(i.pointRadius=i.radius),r.radius=o.radius||n.getValueAtIndexOrDefault(i.pointRadius,a,e.chart.options.elements.point.radius),r.backgroundColor=e.getPointBackgroundColor(t,a),r.borderColor=e.getPointBorderColor(t,a),r.borderWidth=e.getPointBorderWidth(t,a)}})}},{}],19:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.polarArea={scale:{type:"radialLinear",angleLines:{display:!1},gridLines:{circular:!0},pointLabels:{display:!1},ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,aspectRatio:1,legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var n=t.data,i=n.datasets,a=n.labels;if(i.length)for(var o=0;o<i[0].data.length;++o)e.push('<li><span style="background-color:'+i[0].backgroundColor[o]+'"></span>'),a[o]&&e.push(a[o]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var n=t.data;return n.labels.length&&n.datasets.length?n.labels.map(function(i,a){var o=t.getDatasetMeta(0),r=n.datasets[0],l=o.data[a],s=l.custom||{},u=e.getValueAtIndexOrDefault,d=t.options.elements.arc,c=s.backgroundColor?s.backgroundColor:u(r.backgroundColor,a,d.backgroundColor),h=s.borderColor?s.borderColor:u(r.borderColor,a,d.borderColor),f=s.borderWidth?s.borderWidth:u(r.borderWidth,a,d.borderWidth);return{text:i,fillStyle:c,strokeStyle:h,lineWidth:f,hidden:isNaN(r.data[a])||o.data[a].hidden,index:a}}):[]}},onClick:function(t,e){var n,i,a,o=e.index,r=this.chart;for(n=0,i=(r.data.datasets||[]).length;n<i;++n)a=r.getDatasetMeta(n),a.data[o].hidden=!a.data[o].hidden;r.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}},t.controllers.polarArea=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,update:function(t){var n=this,i=n.chart,a=i.chartArea,o=n.getMeta(),r=i.options,l=r.elements.arc,s=Math.min(a.right-a.left,a.bottom-a.top);i.outerRadius=Math.max((s-l.borderWidth/2)/2,0),i.innerRadius=Math.max(r.cutoutPercentage?i.outerRadius/100*r.cutoutPercentage:1,0),i.radiusLength=(i.outerRadius-i.innerRadius)/i.getVisibleDatasetCount(),n.outerRadius=i.outerRadius-i.radiusLength*n.index,n.innerRadius=n.outerRadius-i.radiusLength,o.count=n.countVisibleElements(),e.each(o.data,function(e,i){n.updateElement(e,i,t)})},updateElement:function(t,n,i){for(var a=this,o=a.chart,r=a.getDataset(),l=o.options,s=l.animation,u=o.scale,d=e.getValueAtIndexOrDefault,c=o.data.labels,h=a.calculateCircumference(r.data[n]),f=u.xCenter,g=u.yCenter,p=0,m=a.getMeta(),v=0;v<n;++v)isNaN(r.data[v])||m.data[v].hidden||++p;var b=l.startAngle,x=t.hidden?0:u.getDistanceFromCenterForValue(r.data[n]),y=b+h*p,k=y+(t.hidden?0:h),w=s.animateScale?0:u.getDistanceFromCenterForValue(r.data[n]);e.extend(t,{_datasetIndex:a.index,_index:n,_scale:u,_model:{x:f,y:g,innerRadius:0,outerRadius:i?w:x,startAngle:i&&s.animateRotate?b:y,endAngle:i&&s.animateRotate?b:k,label:d(c,n,c[n])}}),a.removeHoverStyle(t),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},countVisibleElements:function(){var t=this.getDataset(),n=this.getMeta(),i=0;return e.each(n.data,function(e,n){isNaN(t.data[n])||e.hidden||i++}),i},calculateCircumference:function(t){var e=this.getMeta().count;return e>0&&!isNaN(t)?2*Math.PI/e:0}})}},{}],20:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.radar={aspectRatio:1,scale:{type:"radialLinear"},elements:{line:{tension:0}}},t.controllers.radar=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,linkScales:e.noop,update:function(t){var n=this,i=n.getMeta(),a=i.dataset,o=i.data,r=a.custom||{},l=n.getDataset(),s=n.chart.options.elements.line,u=n.chart.scale;void 0!==l.tension&&void 0===l.lineTension&&(l.lineTension=l.tension),e.extend(i.dataset,{_datasetIndex:n.index,_scale:u,_children:o,_loop:!0,_model:{tension:r.tension?r.tension:e.getValueOrDefault(l.lineTension,s.tension),backgroundColor:r.backgroundColor?r.backgroundColor:l.backgroundColor||s.backgroundColor,borderWidth:r.borderWidth?r.borderWidth:l.borderWidth||s.borderWidth,borderColor:r.borderColor?r.borderColor:l.borderColor||s.borderColor,fill:r.fill?r.fill:void 0!==l.fill?l.fill:s.fill,borderCapStyle:r.borderCapStyle?r.borderCapStyle:l.borderCapStyle||s.borderCapStyle,borderDash:r.borderDash?r.borderDash:l.borderDash||s.borderDash,borderDashOffset:r.borderDashOffset?r.borderDashOffset:l.borderDashOffset||s.borderDashOffset,borderJoinStyle:r.borderJoinStyle?r.borderJoinStyle:l.borderJoinStyle||s.borderJoinStyle}}),i.dataset.pivot(),e.each(o,function(e,i){n.updateElement(e,i,t)},n),n.updateBezierControlPoints()},updateElement:function(t,n,i){var a=this,o=t.custom||{},r=a.getDataset(),l=a.chart.scale,s=a.chart.options.elements.point,u=l.getPointPositionForValue(n,r.data[n]);void 0!==r.radius&&void 0===r.pointRadius&&(r.pointRadius=r.radius),void 0!==r.hitRadius&&void 0===r.pointHitRadius&&(r.pointHitRadius=r.hitRadius),e.extend(t,{_datasetIndex:a.index,_index:n,_scale:l,_model:{x:i?l.xCenter:u.x,y:i?l.yCenter:u.y,tension:o.tension?o.tension:e.getValueOrDefault(r.lineTension,a.chart.options.elements.line.tension),radius:o.radius?o.radius:e.getValueAtIndexOrDefault(r.pointRadius,n,s.radius),backgroundColor:o.backgroundColor?o.backgroundColor:e.getValueAtIndexOrDefault(r.pointBackgroundColor,n,s.backgroundColor),borderColor:o.borderColor?o.borderColor:e.getValueAtIndexOrDefault(r.pointBorderColor,n,s.borderColor),borderWidth:o.borderWidth?o.borderWidth:e.getValueAtIndexOrDefault(r.pointBorderWidth,n,s.borderWidth),pointStyle:o.pointStyle?o.pointStyle:e.getValueAtIndexOrDefault(r.pointStyle,n,s.pointStyle),hitRadius:o.hitRadius?o.hitRadius:e.getValueAtIndexOrDefault(r.pointHitRadius,n,s.hitRadius)}}),t._model.skip=o.skip?o.skip:isNaN(t._model.x)||isNaN(t._model.y)},updateBezierControlPoints:function(){var t=this.chart.chartArea,n=this.getMeta();e.each(n.data,function(i,a){var o=i._model,r=e.splineCurve(e.previousItem(n.data,a,!0)._model,o,e.nextItem(n.data,a,!0)._model,o.tension);o.controlPointPreviousX=Math.max(Math.min(r.previous.x,t.right),t.left),o.controlPointPreviousY=Math.max(Math.min(r.previous.y,t.bottom),t.top),o.controlPointNextX=Math.max(Math.min(r.next.x,t.right),t.left),o.controlPointNextY=Math.max(Math.min(r.next.y,t.bottom),t.top),i.pivot()})},setHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},a=t._index,o=t._model;o.radius=i.hoverRadius?i.hoverRadius:e.getValueAtIndexOrDefault(n.pointHoverRadius,a,this.chart.options.elements.point.hoverRadius),o.backgroundColor=i.hoverBackgroundColor?i.hoverBackgroundColor:e.getValueAtIndexOrDefault(n.pointHoverBackgroundColor,a,e.getHoverColor(o.backgroundColor)),o.borderColor=i.hoverBorderColor?i.hoverBorderColor:e.getValueAtIndexOrDefault(n.pointHoverBorderColor,a,e.getHoverColor(o.borderColor)),o.borderWidth=i.hoverBorderWidth?i.hoverBorderWidth:e.getValueAtIndexOrDefault(n.pointHoverBorderWidth,a,o.borderWidth)},removeHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},a=t._index,o=t._model,r=this.chart.options.elements.point;o.radius=i.radius?i.radius:e.getValueAtIndexOrDefault(n.pointRadius,a,r.radius),o.backgroundColor=i.backgroundColor?i.backgroundColor:e.getValueAtIndexOrDefault(n.pointBackgroundColor,a,r.backgroundColor),o.borderColor=i.borderColor?i.borderColor:e.getValueAtIndexOrDefault(n.pointBorderColor,a,r.borderColor),o.borderWidth=i.borderWidth?i.borderWidth:e.getValueAtIndexOrDefault(n.pointBorderWidth,a,r.borderWidth)}})}},{}],21:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.animation={duration:1e3,easing:"easeOutQuart",onProgress:e.noop,onComplete:e.noop},t.Animation=t.Element.extend({chart:null,currentStep:0,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),t.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(t,e,n,i){var a,o,r=this.animations;for(e.chart=t,i||(t.animating=!0),a=0,o=r.length;a<o;++a)if(r[a].chart===t)return void(r[a]=e);r.push(e),1===r.length&&this.requestAnimationFrame()},cancelAnimation:function(t){var n=e.findIndex(this.animations,function(e){return e.chart===t});n!==-1&&(this.animations.splice(n,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=e.requestAnimFrame.call(window,function(){t.request=null,t.startDigest()}))},startDigest:function(){var t=this,e=Date.now(),n=0;t.dropFrames>1&&(n=Math.floor(t.dropFrames),t.dropFrames=t.dropFrames%1),t.advance(1+n);var i=Date.now();t.dropFrames+=(i-e)/t.frameDuration,t.animations.length>0&&t.requestAnimationFrame()},advance:function(t){for(var n,i,a=this.animations,o=0;o<a.length;)n=a[o],i=n.chart,n.currentStep=(n.currentStep||0)+t,n.currentStep=Math.min(n.currentStep,n.numSteps),e.callback(n.render,[i,n],i),e.callback(n.onAnimationProgress,[n],i),n.currentStep>=n.numSteps?(e.callback(n.onAnimationComplete,[n],i),i.animating=!1,a.splice(o,1)):++o}},Object.defineProperty(t.Animation.prototype,"animationObject",{get:function(){return this}}),Object.defineProperty(t.Animation.prototype,"chartInstance",{get:function(){return this.chart},set:function(t){this.chart=t}})}},{}],22:[function(t,e,n){"use strict";e.exports=function(t){var e=t.canvasHelpers={};e.drawPoint=function(e,n,i,a,o){var r,l,s,u,d,c;if("object"==typeof n&&(r=n.toString(),"[object HTMLImageElement]"===r||"[object HTMLCanvasElement]"===r))return void e.drawImage(n,a-n.width/2,o-n.height/2,n.width,n.height);if(!(isNaN(i)||i<=0)){switch(n){default:e.beginPath(),e.arc(a,o,i,0,2*Math.PI),e.closePath(),e.fill();break;case"triangle":e.beginPath(),l=3*i/Math.sqrt(3),d=l*Math.sqrt(3)/2,e.moveTo(a-l/2,o+d/3),e.lineTo(a+l/2,o+d/3),e.lineTo(a,o-2*d/3),e.closePath(),e.fill();break;case"rect":c=1/Math.SQRT2*i,e.beginPath(),e.fillRect(a-c,o-c,2*c,2*c),e.strokeRect(a-c,o-c,2*c,2*c);break;case"rectRounded":var h=i/Math.SQRT2,f=a-h,g=o-h,p=Math.SQRT2*i;t.helpers.drawRoundedRectangle(e,f,g,p,p,i/2),e.fill();break;case"rectRot":c=1/Math.SQRT2*i,e.beginPath(),e.moveTo(a-c,o),e.lineTo(a,o+c),e.lineTo(a+c,o),e.lineTo(a,o-c),e.closePath(),e.fill();break;case"cross":e.beginPath(),e.moveTo(a,o+i),e.lineTo(a,o-i),e.moveTo(a-i,o),e.lineTo(a+i,o),e.closePath();break;case"crossRot":e.beginPath(),s=Math.cos(Math.PI/4)*i,u=Math.sin(Math.PI/4)*i,e.moveTo(a-s,o-u),e.lineTo(a+s,o+u),e.moveTo(a-s,o+u),e.lineTo(a+s,o-u),e.closePath();break;case"star":e.beginPath(),e.moveTo(a,o+i),e.lineTo(a,o-i),e.moveTo(a-i,o),e.lineTo(a+i,o),s=Math.cos(Math.PI/4)*i,u=Math.sin(Math.PI/4)*i,e.moveTo(a-s,o-u),e.lineTo(a+s,o+u),e.moveTo(a-s,o+u),e.lineTo(a+s,o-u),e.closePath();break;case"line":e.beginPath(),e.moveTo(a-i,o),e.lineTo(a+i,o),e.closePath();break;case"dash":e.beginPath(),e.moveTo(a,o),e.lineTo(a+i,o),e.closePath()}e.stroke()}},e.clipArea=function(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()},e.unclipArea=function(t){t.restore()},e.lineTo=function(t,e,n,i){return n.steppedLine?("after"===n.steppedLine?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y),void t.lineTo(n.x,n.y)):n.tension?void t.bezierCurveTo(i?e.controlPointPreviousX:e.controlPointNextX,i?e.controlPointPreviousY:e.controlPointNextY,i?n.controlPointNextX:n.controlPointPreviousX,i?n.controlPointNextY:n.controlPointPreviousY,n.x,n.y):void t.lineTo(n.x,n.y)},t.helpers.canvas=e}},{}],23:[function(t,e,n){"use strict";e.exports=function(t){function e(e){e=e||{};var n=e.data=e.data||{};return n.datasets=n.datasets||[],n.labels=n.labels||[],e.options=a.configMerge(t.defaults.global,t.defaults[e.type],e.options||{}),e}function n(t){var e=t.options;e.scale?t.scale.options=e.scale:e.scales&&e.scales.xAxes.concat(e.scales.yAxes).forEach(function(e){t.scales[e.id].options=e}),t.tooltip._options=e.tooltips}function i(t){return"top"===t||"bottom"===t}var a=t.helpers,o=t.plugins,r=t.platform;t.types={},t.instances={},t.controllers={},a.extend(t.prototype,{construct:function(n,i){var o=this;i=e(i);var l=r.acquireContext(n,i),s=l&&l.canvas,u=s&&s.height,d=s&&s.width;return o.id=a.uid(),o.ctx=l,o.canvas=s,o.config=i,o.width=d,o.height=u,o.aspectRatio=u?d/u:null,o.options=i.options,o._bufferedRender=!1,o.chart=o,o.controller=o,t.instances[o.id]=o,Object.defineProperty(o,"data",{get:function(){return o.config.data},set:function(t){o.config.data=t}}),l&&s?(o.initialize(),void o.update()):void console.error("Failed to create chart: can't acquire context from the given item")},initialize:function(){var t=this;return o.notify(t,"beforeInit"),a.retinaScale(t),t.bindEvents(),t.options.responsive&&t.resize(!0),t.ensureScalesHaveIDs(),t.buildScales(),t.initToolTip(),o.notify(t,"afterInit"),t},clear:function(){return a.clear(this),this},stop:function(){return t.animationService.cancelAnimation(this),this},resize:function(t){var e=this,n=e.options,i=e.canvas,r=n.maintainAspectRatio&&e.aspectRatio||null,l=Math.floor(a.getMaximumWidth(i)),s=Math.floor(r?l/r:a.getMaximumHeight(i));if((e.width!==l||e.height!==s)&&(i.width=e.width=l,i.height=e.height=s,i.style.width=l+"px",i.style.height=s+"px",a.retinaScale(e),!t)){var u={width:l,height:s};o.notify(e,"resize",[u]),e.options.onResize&&e.options.onResize(e,u),e.stop(),e.update(e.options.responsiveAnimationDuration)}},ensureScalesHaveIDs:function(){var t=this.options,e=t.scales||{},n=t.scale;a.each(e.xAxes,function(t,e){t.id=t.id||"x-axis-"+e}),a.each(e.yAxes,function(t,e){t.id=t.id||"y-axis-"+e}),n&&(n.id=n.id||"scale")},buildScales:function(){var e=this,n=e.options,o=e.scales={},r=[];n.scales&&(r=r.concat((n.scales.xAxes||[]).map(function(t){return{options:t,dtype:"category",dposition:"bottom"}}),(n.scales.yAxes||[]).map(function(t){return{options:t,dtype:"linear",dposition:"left"}}))),n.scale&&r.push({options:n.scale,dtype:"radialLinear",isDefault:!0,dposition:"chartArea"}),a.each(r,function(n){var r=n.options,l=a.getValueOrDefault(r.type,n.dtype),s=t.scaleService.getScaleConstructor(l);if(s){i(r.position)!==i(n.dposition)&&(r.position=n.dposition);var u=new s({id:r.id,options:r,ctx:e.ctx,chart:e});o[u.id]=u,n.isDefault&&(e.scale=u)}}),t.scaleService.addScalesToLayout(this)},buildOrUpdateControllers:function(){var e=this,n=[],i=[];if(a.each(e.data.datasets,function(a,o){var r=e.getDatasetMeta(o);if(r.type||(r.type=a.type||e.config.type),n.push(r.type),r.controller)r.controller.updateIndex(o);else{var l=t.controllers[r.type];if(void 0===l)throw new Error('"'+r.type+'" is not a chart type.');r.controller=new l(e,o),i.push(r.controller)}},e),n.length>1)for(var o=1;o<n.length;o++)if(n[o]!==n[o-1]){e.isCombo=!0;break}return i},resetElements:function(){var t=this;a.each(t.data.datasets,function(e,n){t.getDatasetMeta(n).controller.reset()},t)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(t,e){var i=this;if(n(i),o.notify(i,"beforeUpdate")!==!1){i.tooltip._data=i.data;var r=i.buildOrUpdateControllers();a.each(i.data.datasets,function(t,e){i.getDatasetMeta(e).controller.buildOrUpdateElements()},i),i.updateLayout(),a.each(r,function(t){t.reset()}),i.updateDatasets(),o.notify(i,"afterUpdate"),i._bufferedRender?i._bufferedRequest={lazy:e,duration:t}:i.render(t,e)}},updateLayout:function(){var e=this;o.notify(e,"beforeLayout")!==!1&&(t.layoutService.update(this,this.width,this.height),o.notify(e,"afterScaleUpdate"),o.notify(e,"afterLayout"))},updateDatasets:function(){var t=this;if(o.notify(t,"beforeDatasetsUpdate")!==!1){for(var e=0,n=t.data.datasets.length;e<n;++e)t.updateDataset(e);o.notify(t,"afterDatasetsUpdate")}},updateDataset:function(t){var e=this,n=e.getDatasetMeta(t),i={meta:n,index:t};o.notify(e,"beforeDatasetUpdate",[i])!==!1&&(n.controller.update(),o.notify(e,"afterDatasetUpdate",[i]))},render:function(e,n){var i=this;if(o.notify(i,"beforeRender")!==!1){var r=i.options.animation,l=function(t){o.notify(i,"afterRender"),a.callback(r&&r.onComplete,[t],i)};if(r&&("undefined"!=typeof e&&0!==e||"undefined"==typeof e&&0!==r.duration)){var s=new t.Animation({numSteps:(e||r.duration)/16.66,easing:r.easing,render:function(t,e){var n=a.easingEffects[e.easing],i=e.currentStep,o=i/e.numSteps;t.draw(n(o),o,i)},onAnimationProgress:r.onProgress,onAnimationComplete:l});t.animationService.addAnimation(i,s,e,n)}else i.draw(),l(new t.Animation({numSteps:0,chart:i}));return i}},draw:function(t){var e=this;e.clear(),void 0!==t&&null!==t||(t=1),e.transition(t),o.notify(e,"beforeDraw",[t])!==!1&&(a.each(e.boxes,function(t){t.draw(e.chartArea)},e),e.scale&&e.scale.draw(),e.drawDatasets(t),e.tooltip.draw(),o.notify(e,"afterDraw",[t]))},transition:function(t){for(var e=this,n=0,i=(e.data.datasets||[]).length;n<i;++n)e.isDatasetVisible(n)&&e.getDatasetMeta(n).controller.transition(t);e.tooltip.transition(t)},drawDatasets:function(t){var e=this;if(o.notify(e,"beforeDatasetsDraw",[t])!==!1){for(var n=(e.data.datasets||[]).length-1;n>=0;--n)e.isDatasetVisible(n)&&e.drawDataset(n,t);o.notify(e,"afterDatasetsDraw",[t])}},drawDataset:function(t,e){var n=this,i=n.getDatasetMeta(t),a={meta:i,index:t,easingValue:e};o.notify(n,"beforeDatasetDraw",[a])!==!1&&(i.controller.draw(e),o.notify(n,"afterDatasetDraw",[a]))},getElementAtEvent:function(e){return t.Interaction.modes.single(this,e)},getElementsAtEvent:function(e){return t.Interaction.modes.label(this,e,{intersect:!0})},getElementsAtXAxis:function(e){return t.Interaction.modes["x-axis"](this,e,{intersect:!0})},getElementsAtEventForMode:function(e,n,i){var a=t.Interaction.modes[n];return"function"==typeof a?a(this,e,i):[]},getDatasetAtEvent:function(e){return t.Interaction.modes.dataset(this,e,{intersect:!0})},getDatasetMeta:function(t){var e=this,n=e.data.datasets[t];n._meta||(n._meta={});var i=n._meta[e.id];return i||(i=n._meta[e.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),i},getVisibleDatasetCount:function(){for(var t=0,e=0,n=this.data.datasets.length;e<n;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroy:function(){var e,n,i,l=this,s=l.canvas;for(l.stop(),n=0,i=l.data.datasets.length;n<i;++n)e=l.getDatasetMeta(n),e.controller&&(e.controller.destroy(),e.controller=null);s&&(l.unbindEvents(),a.clear(l),r.releaseContext(l.ctx),l.canvas=null,l.ctx=null),o.notify(l,"destroy"),delete t.instances[l.id]},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments)},initToolTip:function(){var e=this;e.tooltip=new t.Tooltip({_chart:e,_chartInstance:e,_data:e.data,_options:e.options.tooltips},e),e.tooltip.initialize()},bindEvents:function(){var t=this,e=t._listeners={},n=function(){t.eventHandler.apply(t,arguments)};a.each(t.options.events,function(i){r.addEventListener(t,i,n),e[i]=n}),t.options.responsive&&(n=function(){t.resize()},r.addEventListener(t,"resize",n),e.resize=n)},unbindEvents:function(){var t=this,e=t._listeners;e&&(delete t._listeners,a.each(e,function(e,n){r.removeEventListener(t,n,e)}))},updateHoverStyle:function(t,e,n){var i,a,o,r=n?"setHoverStyle":"removeHoverStyle";for(a=0,o=t.length;a<o;++a)i=t[a],i&&this.getDatasetMeta(i._datasetIndex).controller[r](i)},eventHandler:function(t){var e=this,n=e.tooltip;if(o.notify(e,"beforeEvent",[t])!==!1){e._bufferedRender=!0,e._bufferedRequest=null;var i=e.handleEvent(t);i|=n&&n.handleEvent(t),o.notify(e,"afterEvent",[t]);var a=e._bufferedRequest;return a?e.render(a.duration,a.lazy):i&&!e.animating&&(e.stop(),e.render(e.options.hover.animationDuration,!0)),e._bufferedRender=!1,e._bufferedRequest=null,e}},handleEvent:function(t){var e=this,n=e.options||{},i=n.hover,o=!1;return e.lastActive=e.lastActive||[],"mouseout"===t.type?e.active=[]:e.active=e.getElementsAtEventForMode(t,i.mode,i),i.onHover&&i.onHover.call(e,t.native,e.active),"mouseup"!==t.type&&"click"!==t.type||n.onClick&&n.onClick.call(e,t.native,e.active),e.lastActive.length&&e.updateHoverStyle(e.lastActive,i.mode,!1),e.active.length&&i.mode&&e.updateHoverStyle(e.active,i.mode,!0),o=!a.arrayEquals(e.active,e.lastActive),e.lastActive=e.active,o}}),t.Controller=t}},{}],24:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){return t._chartjs?void t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),void a.forEach(function(e){var n="onData"+e.charAt(0).toUpperCase()+e.slice(1),a=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:function(){var e=Array.prototype.slice.call(arguments),o=a.apply(this,e);return i.each(t._chartjs.listeners,function(t){"function"==typeof t[n]&&t[n].apply(t,e)}),o}})}))}function n(t,e){var n=t._chartjs;if(n){var i=n.listeners,o=i.indexOf(e);
o!==-1&&i.splice(o,1),i.length>0||(a.forEach(function(e){delete t[e]}),delete t._chartjs)}}var i=t.helpers,a=["push","pop","shift","splice","unshift"];t.DatasetController=function(t,e){this.initialize(t,e)},i.extend(t.DatasetController.prototype,{datasetElementType:null,dataElementType:null,initialize:function(t,e){var n=this;n.chart=t,n.index=e,n.linkScales(),n.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this,e=t.getMeta(),n=t.getDataset();null===e.xAxisID&&(e.xAxisID=n.xAxisID||t.chart.options.scales.xAxes[0].id),null===e.yAxisID&&(e.yAxisID=n.yAxisID||t.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},reset:function(){this.update(!0)},destroy:function(){this._data&&n(this._data,this)},createMetaDataset:function(){var t=this,e=t.datasetElementType;return e&&new e({_chart:t.chart,_datasetIndex:t.index})},createMetaData:function(t){var e=this,n=e.dataElementType;return n&&new n({_chart:e.chart,_datasetIndex:e.index,_index:t})},addElements:function(){var t,e,n=this,i=n.getMeta(),a=n.getDataset().data||[],o=i.data;for(t=0,e=a.length;t<e;++t)o[t]=o[t]||n.createMetaData(t);i.dataset=i.dataset||n.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t);this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var t=this,i=t.getDataset(),a=i.data||(i.data=[]);t._data!==a&&(t._data&&n(t._data,t),e(a,t),t._data=a),t.resyncElements()},update:i.noop,transition:function(t){for(var e=this.getMeta(),n=e.data||[],i=n.length,a=0;a<i;++a)n[a].transition(t);e.dataset&&e.dataset.transition(t)},draw:function(){var t=this.getMeta(),e=t.data||[],n=e.length,i=0;for(t.dataset&&t.dataset.draw();i<n;++i)e[i].draw()},removeHoverStyle:function(t,e){var n=this.chart.data.datasets[t._datasetIndex],a=t._index,o=t.custom||{},r=i.getValueAtIndexOrDefault,l=t._model;l.backgroundColor=o.backgroundColor?o.backgroundColor:r(n.backgroundColor,a,e.backgroundColor),l.borderColor=o.borderColor?o.borderColor:r(n.borderColor,a,e.borderColor),l.borderWidth=o.borderWidth?o.borderWidth:r(n.borderWidth,a,e.borderWidth)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],n=t._index,a=t.custom||{},o=i.getValueAtIndexOrDefault,r=i.getHoverColor,l=t._model;l.backgroundColor=a.hoverBackgroundColor?a.hoverBackgroundColor:o(e.hoverBackgroundColor,n,r(l.backgroundColor)),l.borderColor=a.hoverBorderColor?a.hoverBorderColor:o(e.hoverBorderColor,n,r(l.borderColor)),l.borderWidth=a.hoverBorderWidth?a.hoverBorderWidth:o(e.hoverBorderWidth,n,l.borderWidth)},resyncElements:function(){var t=this,e=t.getMeta(),n=t.getDataset().data,i=e.data.length,a=n.length;a<i?e.data.splice(a,i-a):a>i&&t.insertElements(i,a-i)},insertElements:function(t,e){for(var n=0;n<e;++n)this.addElementAndReset(t+n)},onDataPush:function(){this.insertElements(this.getDataset().data.length-1,arguments.length)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),t.DatasetController.extend=i.inherits}},{}],25:[function(t,e,n){"use strict";var i=t(3);e.exports=function(t){function e(t,e,n,a){var o,r,l,s,u,d,c,h,f,g=Object.keys(n);for(o=0,r=g.length;o<r;++o)if(l=g[o],d=n[l],e.hasOwnProperty(l)||(e[l]=d),s=e[l],s!==d&&"_"!==l[0]){if(t.hasOwnProperty(l)||(t[l]=s),u=t[l],c=typeof d,c===typeof u)if("string"===c){if(h=i(u),h.valid&&(f=i(d),f.valid)){e[l]=f.mix(h,a).rgbString();continue}}else if("number"===c&&isFinite(u)&&isFinite(d)){e[l]=u+(d-u)*a;continue}e[l]=d}}var n=t.helpers;t.elements={},t.Element=function(t){n.extend(this,t),this.initialize.apply(this,arguments)},n.extend(t.Element.prototype,{initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=n.clone(t._model)),t._start={},t},transition:function(t){var n=this,i=n._model,a=n._start,o=n._view;return i&&1!==t?(o||(o=n._view={}),a||(a=n._start={}),e(a,o,i,t),n):(n._view=i,n._start=null,n)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return n.isNumber(this._model.x)&&n.isNumber(this._model.y)}}),t.Element.extend=n.inherits}},{3:3}],26:[function(t,e,n){"use strict";var i=t(3);e.exports=function(t){function e(t,e,n){var i;return"string"==typeof t?(i=parseInt(t,10),t.indexOf("%")!==-1&&(i=i/100*e.parentNode[n])):i=t,i}function n(t){return void 0!==t&&null!==t&&"none"!==t}function a(t,i,a){var o=document.defaultView,r=t.parentNode,l=o.getComputedStyle(t)[i],s=o.getComputedStyle(r)[i],u=n(l),d=n(s),c=Number.POSITIVE_INFINITY;return u||d?Math.min(u?e(l,t,a):c,d?e(s,r,a):c):"none"}var o=t.helpers={};o.each=function(t,e,n,i){var a,r;if(o.isArray(t))if(r=t.length,i)for(a=r-1;a>=0;a--)e.call(n,t[a],a);else for(a=0;a<r;a++)e.call(n,t[a],a);else if("object"==typeof t){var l=Object.keys(t);for(r=l.length,a=0;a<r;a++)e.call(n,t[l[a]],l[a])}},o.clone=function(t){var e={};return o.each(t,function(t,n){o.isArray(t)?e[n]=t.slice(0):"object"==typeof t&&null!==t?e[n]=o.clone(t):e[n]=t}),e},o.extend=function(t){for(var e=function(e,n){t[n]=e},n=1,i=arguments.length;n<i;n++)o.each(arguments[n],e);return t},o.configMerge=function(e){var n=o.clone(e);return o.each(Array.prototype.slice.call(arguments,1),function(e){o.each(e,function(e,i){var a=n.hasOwnProperty(i),r=a?n[i]:{};"scales"===i?n[i]=o.scaleMerge(r,e):"scale"===i?n[i]=o.configMerge(r,t.scaleService.getScaleDefaults(e.type),e):!a||"object"!=typeof r||o.isArray(r)||null===r||"object"!=typeof e||o.isArray(e)?n[i]=e:n[i]=o.configMerge(r,e)})}),n},o.scaleMerge=function(e,n){var i=o.clone(e);return o.each(n,function(e,n){"xAxes"===n||"yAxes"===n?i.hasOwnProperty(n)?o.each(e,function(e,a){var r=o.getValueOrDefault(e.type,"xAxes"===n?"category":"linear"),l=t.scaleService.getScaleDefaults(r);a>=i[n].length||!i[n][a].type?i[n].push(o.configMerge(l,e)):e.type&&e.type!==i[n][a].type?i[n][a]=o.configMerge(i[n][a],l,e):i[n][a]=o.configMerge(i[n][a],e)}):(i[n]=[],o.each(e,function(e){var a=o.getValueOrDefault(e.type,"xAxes"===n?"category":"linear");i[n].push(o.configMerge(t.scaleService.getScaleDefaults(a),e))})):i.hasOwnProperty(n)&&"object"==typeof i[n]&&null!==i[n]&&"object"==typeof e?i[n]=o.configMerge(i[n],e):i[n]=e}),i},o.getValueAtIndexOrDefault=function(t,e,n){return void 0===t||null===t?n:o.isArray(t)?e<t.length?t[e]:n:t},o.getValueOrDefault=function(t,e){return void 0===t?e:t},o.indexOf=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var n=0,i=t.length;n<i;++n)if(t[n]===e)return n;return-1},o.where=function(t,e){if(o.isArray(t)&&Array.prototype.filter)return t.filter(e);var n=[];return o.each(t,function(t){e(t)&&n.push(t)}),n},o.findIndex=Array.prototype.findIndex?function(t,e,n){return t.findIndex(e,n)}:function(t,e,n){n=void 0===n?t:n;for(var i=0,a=t.length;i<a;++i)if(e.call(n,t[i],i,t))return i;return-1},o.findNextWhere=function(t,e,n){void 0!==n&&null!==n||(n=-1);for(var i=n+1;i<t.length;i++){var a=t[i];if(e(a))return a}},o.findPreviousWhere=function(t,e,n){void 0!==n&&null!==n||(n=t.length);for(var i=n-1;i>=0;i--){var a=t[i];if(e(a))return a}},o.inherits=function(t){var e=this,n=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},i=function(){this.constructor=n};return i.prototype=e.prototype,n.prototype=new i,n.extend=o.inherits,t&&o.extend(n.prototype,t),n.__super__=e.prototype,n},o.noop=function(){},o.uid=function(){var t=0;return function(){return t++}}(),o.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},o.almostEquals=function(t,e,n){return Math.abs(t-e)<n},o.almostWhole=function(t,e){var n=Math.round(t);return n-e<t&&n+e>t},o.max=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.max(t,e)},Number.NEGATIVE_INFINITY)},o.min=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.min(t,e)},Number.POSITIVE_INFINITY)},o.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return t=+t,0===t||isNaN(t)?t:t>0?1:-1},o.log10=Math.log10?function(t){return Math.log10(t)}:function(t){return Math.log(t)/Math.LN10},o.toRadians=function(t){return t*(Math.PI/180)},o.toDegrees=function(t){return t*(180/Math.PI)},o.getAngleFromPoint=function(t,e){var n=e.x-t.x,i=e.y-t.y,a=Math.sqrt(n*n+i*i),o=Math.atan2(i,n);return o<-.5*Math.PI&&(o+=2*Math.PI),{angle:o,distance:a}},o.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},o.aliasPixel=function(t){return t%2===0?0:.5},o.splineCurve=function(t,e,n,i){var a=t.skip?e:t,o=e,r=n.skip?e:n,l=Math.sqrt(Math.pow(o.x-a.x,2)+Math.pow(o.y-a.y,2)),s=Math.sqrt(Math.pow(r.x-o.x,2)+Math.pow(r.y-o.y,2)),u=l/(l+s),d=s/(l+s);u=isNaN(u)?0:u,d=isNaN(d)?0:d;var c=i*u,h=i*d;return{previous:{x:o.x-c*(r.x-a.x),y:o.y-c*(r.y-a.y)},next:{x:o.x+h*(r.x-a.x),y:o.y+h*(r.y-a.y)}}},o.EPSILON=Number.EPSILON||1e-14,o.splineCurveMonotone=function(t){var e,n,i,a,r=(t||[]).map(function(t){return{model:t._model,deltaK:0,mK:0}}),l=r.length;for(e=0;e<l;++e)if(i=r[e],!i.model.skip){if(n=e>0?r[e-1]:null,a=e<l-1?r[e+1]:null,a&&!a.model.skip){var s=a.model.x-i.model.x;i.deltaK=0!==s?(a.model.y-i.model.y)/s:0}!n||n.model.skip?i.mK=i.deltaK:!a||a.model.skip?i.mK=n.deltaK:this.sign(n.deltaK)!==this.sign(i.deltaK)?i.mK=0:i.mK=(n.deltaK+i.deltaK)/2}var u,d,c,h;for(e=0;e<l-1;++e)i=r[e],a=r[e+1],i.model.skip||a.model.skip||(o.almostEquals(i.deltaK,0,this.EPSILON)?i.mK=a.mK=0:(u=i.mK/i.deltaK,d=a.mK/i.deltaK,h=Math.pow(u,2)+Math.pow(d,2),h<=9||(c=3/Math.sqrt(h),i.mK=u*c*i.deltaK,a.mK=d*c*i.deltaK)));var f;for(e=0;e<l;++e)i=r[e],i.model.skip||(n=e>0?r[e-1]:null,a=e<l-1?r[e+1]:null,n&&!n.model.skip&&(f=(i.model.x-n.model.x)/3,i.model.controlPointPreviousX=i.model.x-f,i.model.controlPointPreviousY=i.model.y-f*i.mK),a&&!a.model.skip&&(f=(a.model.x-i.model.x)/3,i.model.controlPointNextX=i.model.x+f,i.model.controlPointNextY=i.model.y+f*i.mK))},o.nextItem=function(t,e,n){return n?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},o.previousItem=function(t,e,n){return n?e<=0?t[t.length-1]:t[e-1]:e<=0?t[0]:t[e-1]},o.niceNum=function(t,e){var n,i=Math.floor(o.log10(t)),a=t/Math.pow(10,i);return n=e?a<1.5?1:a<3?2:a<7?5:10:a<=1?1:a<=2?2:a<=5?5:10,n*Math.pow(10,i)};var r=o.easingEffects={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(-Math.pow(2,-10*t/1)+1)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:1===(t/=1)?1:(n||(n=.3),i<Math.abs(1)?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),-(i*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)))},easeOutElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:1===(t/=1)?1:(n||(n=.3),i<Math.abs(1)?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),i*Math.pow(2,-10*t)*Math.sin((1*t-e)*(2*Math.PI)/n)+1)},easeInOutElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:2===(t/=.5)?1:(n||(n=1*(.3*1.5)),i<Math.abs(1)?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),t<1?-.5*(i*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)):i*Math.pow(2,-10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)*.5+1)},easeInBack:function(t){var e=1.70158;return 1*(t/=1)*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return 1*((t=t/1-1)*t*((e+1)*t+e)+1)},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:function(t){return 1-r.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?1*(7.5625*t*t):t<2/2.75?1*(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return t<.5?.5*r.easeInBounce(2*t):.5*r.easeOutBounce(2*t-1)+.5}};o.requestAnimFrame=function(){return"undefined"==typeof window?function(t){t()}:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),o.getRelativePosition=function(t,e){var n,i,a=t.originalEvent||t,r=t.currentTarget||t.srcElement,l=r.getBoundingClientRect(),s=a.touches;s&&s.length>0?(n=s[0].clientX,i=s[0].clientY):(n=a.clientX,i=a.clientY);var u=parseFloat(o.getStyle(r,"padding-left")),d=parseFloat(o.getStyle(r,"padding-top")),c=parseFloat(o.getStyle(r,"padding-right")),h=parseFloat(o.getStyle(r,"padding-bottom")),f=l.right-l.left-u-c,g=l.bottom-l.top-d-h;return n=Math.round((n-l.left-u)/f*r.width/e.currentDevicePixelRatio),i=Math.round((i-l.top-d)/g*r.height/e.currentDevicePixelRatio),{x:n,y:i}},o.addEvent=function(t,e,n){t.addEventListener?t.addEventListener(e,n):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n},o.removeEvent=function(t,e,n){t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=o.noop},o.getConstraintWidth=function(t){return a(t,"max-width","clientWidth")},o.getConstraintHeight=function(t){return a(t,"max-height","clientHeight")},o.getMaximumWidth=function(t){var e=t.parentNode,n=parseInt(o.getStyle(e,"padding-left"),10),i=parseInt(o.getStyle(e,"padding-right"),10),a=e.clientWidth-n-i,r=o.getConstraintWidth(t);return isNaN(r)?a:Math.min(a,r)},o.getMaximumHeight=function(t){var e=t.parentNode,n=parseInt(o.getStyle(e,"padding-top"),10),i=parseInt(o.getStyle(e,"padding-bottom"),10),a=e.clientHeight-n-i,r=o.getConstraintHeight(t);return isNaN(r)?a:Math.min(a,r)},o.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},o.retinaScale=function(t){var e=t.currentDevicePixelRatio=window.devicePixelRatio||1;if(1!==e){var n=t.canvas,i=t.height,a=t.width;n.height=i*e,n.width=a*e,t.ctx.scale(e,e),n.style.height=i+"px",n.style.width=a+"px"}},o.clear=function(t){t.ctx.clearRect(0,0,t.width,t.height)},o.fontString=function(t,e,n){return e+" "+t+"px "+n},o.longestText=function(t,e,n,i){i=i||{};var a=i.data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(a=i.data={},r=i.garbageCollect=[],i.font=e),t.font=e;var l=0;o.each(n,function(e){void 0!==e&&null!==e&&o.isArray(e)!==!0?l=o.measureText(t,a,r,l,e):o.isArray(e)&&o.each(e,function(e){void 0===e||null===e||o.isArray(e)||(l=o.measureText(t,a,r,l,e))})});var s=r.length/2;if(s>n.length){for(var u=0;u<s;u++)delete a[r[u]];r.splice(0,s)}return l},o.measureText=function(t,e,n,i,a){var o=e[a];return o||(o=e[a]=t.measureText(a).width,n.push(a)),o>i&&(i=o),i},o.numberOfLabelLines=function(t){var e=1;return o.each(t,function(t){o.isArray(t)&&t.length>e&&(e=t.length)}),e},o.drawRoundedRectangle=function(t,e,n,i,a,o){t.beginPath(),t.moveTo(e+o,n),t.lineTo(e+i-o,n),t.quadraticCurveTo(e+i,n,e+i,n+o),t.lineTo(e+i,n+a-o),t.quadraticCurveTo(e+i,n+a,e+i-o,n+a),t.lineTo(e+o,n+a),t.quadraticCurveTo(e,n+a,e,n+a-o),t.lineTo(e,n+o),t.quadraticCurveTo(e,n,e+o,n),t.closePath()},o.color=i?function(e){return e instanceof CanvasGradient&&(e=t.defaults.global.defaultColor),i(e)}:function(t){return console.error("Color.js not found!"),t},o.isArray=Array.isArray?function(t){return Array.isArray(t)}:function(t){return"[object Array]"===Object.prototype.toString.call(t)},o.arrayEquals=function(t,e){var n,i,a,r;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(a=t[n],r=e[n],a instanceof Array&&r instanceof Array){if(!o.arrayEquals(a,r))return!1}else if(a!==r)return!1;return!0},o.callback=function(t,e,n){t&&"function"==typeof t.call&&t.apply(n,e)},o.getHoverColor=function(t){return t instanceof CanvasPattern?t:o.color(t).saturate(.5).darken(.1).rgbString()},o.callCallback=o.callback}},{3:3}],27:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){return t.native?{x:t.x,y:t.y}:r.getRelativePosition(t,e)}function n(t,e){var n,i,a,o,r,l=t.data.datasets;for(i=0,o=l.length;i<o;++i)if(t.isDatasetVisible(i))for(n=t.getDatasetMeta(i),a=0,r=n.data.length;a<r;++a){var s=n.data[a];s._view.skip||e(s)}}function i(t,e){var i=[];return n(t,function(t){t.inRange(e.x,e.y)&&i.push(t)}),i}function a(t,e,i,a){var o=Number.POSITIVE_INFINITY,l=[];return a||(a=r.distanceBetweenPoints),n(t,function(t){if(!i||t.inRange(e.x,e.y)){var n=t.getCenterPoint(),r=a(e,n);r<o?(l=[t],o=r):r===o&&l.push(t)}}),l}function o(t,n,o){var r=e(n,t),l=function(t,e){return Math.abs(t.x-e.x)},s=o.intersect?i(t,r):a(t,r,!1,l),u=[];return s.length?(t.data.datasets.forEach(function(e,n){if(t.isDatasetVisible(n)){var i=t.getDatasetMeta(n),a=i.data[s[0]._index];a&&!a._view.skip&&u.push(a)}}),u):[]}var r=t.helpers;t.Interaction={modes:{single:function(t,i){var a=e(i,t),o=[];return n(t,function(t){if(t.inRange(a.x,a.y))return o.push(t),o}),o.slice(0,1)},label:o,index:o,dataset:function(t,n,o){var r=e(n,t),l=o.intersect?i(t,r):a(t,r,!1);return l.length>0&&(l=t.getDatasetMeta(l[0]._datasetIndex).data),l},"x-axis":function(t,e){return o(t,e,!0)},point:function(t,n){var a=e(n,t);return i(t,a)},nearest:function(t,n,i){var o=e(n,t),r=a(t,o,i.intersect);return r.length>1&&r.sort(function(t,e){var n=t.getArea(),i=e.getArea(),a=n-i;return 0===a&&(a=t._datasetIndex-e._datasetIndex),a}),r.slice(0,1)},x:function(t,i,a){var o=e(i,t),r=[],l=!1;return n(t,function(t){t.inXRange(o.x)&&r.push(t),t.inRange(o.x,o.y)&&(l=!0)}),a.intersect&&!l&&(r=[]),r},y:function(t,i,a){var o=e(i,t),r=[],l=!1;return n(t,function(t){t.inYRange(o.y)&&r.push(t),t.inRange(o.x,o.y)&&(l=!0)}),a.intersect&&!l&&(r=[]),r}}}}},{}],28:[function(t,e,n){"use strict";e.exports=function(){var t=function(t,e){return this.construct(t,e),this};return t.defaults={global:{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,elements:{},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var n=0;n<t.data.datasets.length;n++)e.push('<li><span style="background-color:'+t.data.datasets[n].backgroundColor+'"></span>'),t.data.datasets[n].label&&e.push(t.data.datasets[n].label),e.push("</li>");return e.push("</ul>"),e.join("")}}},t.Chart=t,t}},{}],29:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){return i.where(t,function(t){return t.position===e})}function n(t,e){t.forEach(function(t,e){return t._tmpIndex_=e,t}),t.sort(function(t,n){var i=e?n:t,a=e?t:n;return i.weight===a.weight?i._tmpIndex_-a._tmpIndex_:i.weight-a.weight}),t.forEach(function(t){delete t._tmpIndex_})}var i=t.helpers;t.layoutService={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),e.fullWidth=e.fullWidth||!1,e.position=e.position||"top",e.weight=e.weight||0,t.boxes.push(e)},removeBox:function(t,e){var n=t.boxes?t.boxes.indexOf(e):-1;n!==-1&&t.boxes.splice(n,1)},configure:function(t,e,n){for(var i,a=["fullWidth","position","weight"],o=a.length,r=0;r<o;++r)i=a[r],n.hasOwnProperty(i)&&(e[i]=n[i])},update:function(t,a,o){function r(t){var e,n=t.isHorizontal();n?(e=t.update(t.fullWidth?k:I,D),A-=e.height):(e=t.update(C,S),I-=e.width),P.push({horizontal:n,minSize:e,box:t})}function l(t){var e=i.findNextWhere(P,function(e){return e.box===t});if(e)if(t.isHorizontal()){var n={left:Math.max(L,_),right:Math.max(V,T),top:0,bottom:0};t.update(t.fullWidth?k:I,w/2,n)}else t.update(e.minSize.width,A)}function s(t){var e=i.findNextWhere(P,function(e){return e.box===t}),n={left:0,right:0,top:O,bottom:z};e&&t.update(e.minSize.width,A,n)}function u(t){t.isHorizontal()?(t.left=t.fullWidth?h:L,t.right=t.fullWidth?a-f:L+I,t.top=q,t.bottom=q+t.height,q=t.bottom):(t.left=H,t.right=H+t.width,t.top=O,t.bottom=O+A,H=t.right)}if(t){var d=t.options.layout,c=d?d.padding:null,h=0,f=0,g=0,p=0;isNaN(c)?(h=c.left||0,f=c.right||0,g=c.top||0,p=c.bottom||0):(h=c,f=c,g=c,p=c);var m=e(t.boxes,"left"),v=e(t.boxes,"right"),b=e(t.boxes,"top"),x=e(t.boxes,"bottom"),y=e(t.boxes,"chartArea");n(m,!0),n(v,!1),n(b,!0),n(x,!1);var k=a-h-f,w=o-g-p,M=k/2,S=w/2,C=(a-M)/(m.length+v.length),D=(o-S)/(b.length+x.length),I=k,A=w,P=[];i.each(m.concat(v,b,x),r);var _=0,T=0,F=0,R=0;i.each(b.concat(x),function(t){if(t.getPadding){var e=t.getPadding();_=Math.max(_,e.left),T=Math.max(T,e.right)}}),i.each(m.concat(v),function(t){if(t.getPadding){var e=t.getPadding();F=Math.max(F,e.top),R=Math.max(R,e.bottom)}});var L=h,V=f,O=g,z=p;i.each(m.concat(v),l),i.each(m,function(t){L+=t.width}),i.each(v,function(t){V+=t.width}),i.each(b.concat(x),l),i.each(b,function(t){O+=t.height}),i.each(x,function(t){z+=t.height}),i.each(m.concat(v),s),L=h,V=f,O=g,z=p,i.each(m,function(t){L+=t.width}),i.each(v,function(t){V+=t.width}),i.each(b,function(t){O+=t.height}),i.each(x,function(t){z+=t.height});var B=Math.max(_-L,0);L+=B,V+=Math.max(T-V,0);var W=Math.max(F-O,0);O+=W,z+=Math.max(R-z,0);var N=o-O-z,E=a-L-V;E===I&&N===A||(i.each(m,function(t){t.height=N}),i.each(v,function(t){t.height=N}),i.each(b,function(t){t.fullWidth||(t.width=E)}),i.each(x,function(t){t.fullWidth||(t.width=E)}),A=N,I=E);var H=h+B,q=g+W;i.each(m.concat(b),u),H+=I,q+=A,i.each(v,u),i.each(x,u),t.chartArea={left:L,top:O,right:L+I,bottom:O+A},i.each(y,function(e){e.left=t.chartArea.left,e.top=t.chartArea.top,e.right=t.chartArea.right,e.bottom=t.chartArea.bottom,e.update(I,A)})}}}}},{}],30:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.plugins={},t.plugins={_plugins:[],_cacheId:0,register:function(t){var e=this._plugins;[].concat(t).forEach(function(t){e.indexOf(t)===-1&&e.push(t)}),this._cacheId++},unregister:function(t){var e=this._plugins;[].concat(t).forEach(function(t){var n=e.indexOf(t);n!==-1&&e.splice(n,1)}),this._cacheId++},clear:function(){this._plugins=[],this._cacheId++},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e,n){var i,a,o,r,l,s=this.descriptors(t),u=s.length;for(i=0;i<u;++i)if(a=s[i],o=a.plugin,l=o[e],"function"==typeof l&&(r=[t].concat(n||[]),r.push(a.options),l.apply(o,r)===!1))return!1;return!0},descriptors:function(n){var i=n._plugins||(n._plugins={});if(i.id===this._cacheId)return i.descriptors;var a=[],o=[],r=n&&n.config||{},l=t.defaults.global.plugins,s=r.options&&r.options.plugins||{};return this._plugins.concat(r.plugins||[]).forEach(function(t){var n=a.indexOf(t);if(n===-1){var i=t.id,r=s[i];r!==!1&&(r===!0&&(r=e.clone(l[i])),a.push(t),o.push({plugin:t,options:r||{}}))}}),i.descriptors=o,i.id=this._cacheId,o}},t.pluginService=t.plugins,t.PluginBase=t.Element.extend({})}},{}],31:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e,n){return i.isArray(e)?i.longestText(t,n,e):t.measureText(e).width}function n(e){var n=i.getValueOrDefault,a=t.defaults.global,o=n(e.fontSize,a.defaultFontSize),r=n(e.fontStyle,a.defaultFontStyle),l=n(e.fontFamily,a.defaultFontFamily);return{size:o,style:r,family:l,font:i.fontString(o,r,l)}}var i=t.helpers;t.defaults.scale={display:!0,position:"left",gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{labelString:"",display:!1},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:t.Ticks.formatters.values}},t.Scale=t.Element.extend({getPadding:function(){var t=this;return{left:t.paddingLeft||0,top:t.paddingTop||0,right:t.paddingRight||0,bottom:t.paddingBottom||0}},beforeUpdate:function(){i.callback(this.options.beforeUpdate,[this])},update:function(t,e,n){var a=this;return a.beforeUpdate(),a.maxWidth=t,a.maxHeight=e,a.margins=i.extend({left:0,right:0,top:0,bottom:0},n),a.longestTextCache=a.longestTextCache||{},a.beforeSetDimensions(),a.setDimensions(),a.afterSetDimensions(),a.beforeDataLimits(),a.determineDataLimits(),a.afterDataLimits(),a.beforeBuildTicks(),a.buildTicks(),a.afterBuildTicks(),a.beforeTickToLabelConversion(),a.convertTicksToLabels(),a.afterTickToLabelConversion(),a.beforeCalculateTickRotation(),a.calculateTickRotation(),a.afterCalculateTickRotation(),a.beforeFit(),a.fit(),a.afterFit(),a.afterUpdate(),a.minSize},afterUpdate:function(){i.callback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){i.callback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){i.callback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){i.callback(this.options.beforeDataLimits,[this])},determineDataLimits:i.noop,afterDataLimits:function(){i.callback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){i.callback(this.options.beforeBuildTicks,[this])},buildTicks:i.noop,afterBuildTicks:function(){i.callback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){i.callback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this,e=t.options.ticks;t.ticks=t.ticks.map(e.userCallback||e.callback)},afterTickToLabelConversion:function(){i.callback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){i.callback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var t=this,e=t.ctx,a=t.options.ticks,o=n(a);e.font=o.font;var r=a.minRotation||0;if(t.options.display&&t.isHorizontal())for(var l,s,u=i.longestText(e,o.font,t.ticks,t.longestTextCache),d=u,c=t.getPixelForTick(1)-t.getPixelForTick(0)-6;d>c&&r<a.maxRotation;){var h=i.toRadians(r);if(l=Math.cos(h),s=Math.sin(h),s*u>t.maxHeight){r--;break}r++,d=l*u}t.labelRotation=r},afterCalculateTickRotation:function(){i.callback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){i.callback(this.options.beforeFit,[this])},fit:function(){var t=this,a=t.minSize={width:0,height:0},o=t.options,r=o.ticks,l=o.scaleLabel,s=o.gridLines,u=o.display,d=t.isHorizontal(),c=n(r),h=1.5*n(l).size,f=o.gridLines.tickMarkLength;if(d?a.width=t.isFullWidth()?t.maxWidth-t.margins.left-t.margins.right:t.maxWidth:a.width=u&&s.drawTicks?f:0,d?a.height=u&&s.drawTicks?f:0:a.height=t.maxHeight,l.display&&u&&(d?a.height+=h:a.width+=h),r.display&&u){var g=i.longestText(t.ctx,c.font,t.ticks,t.longestTextCache),p=i.numberOfLabelLines(t.ticks),m=.5*c.size;if(d){t.longestLabelWidth=g;var v=i.toRadians(t.labelRotation),b=Math.cos(v),x=Math.sin(v),y=x*g+c.size*p+m*p;a.height=Math.min(t.maxHeight,a.height+y),t.ctx.font=c.font;var k=t.ticks[0],w=e(t.ctx,k,c.font),M=t.ticks[t.ticks.length-1],S=e(t.ctx,M,c.font);0!==t.labelRotation?(t.paddingLeft="bottom"===o.position?b*w+3:b*m+3,t.paddingRight="bottom"===o.position?b*m+3:b*S+3):(t.paddingLeft=w/2+3,t.paddingRight=S/2+3)}else r.mirror?g=0:g+=t.options.ticks.padding,a.width=Math.min(t.maxWidth,a.width+g),t.paddingTop=c.size/2,t.paddingBottom=c.size/2}t.handleMargins(),t.width=a.width,t.height=a.height},handleMargins:function(){var t=this;t.margins&&(t.paddingLeft=Math.max(t.paddingLeft-t.margins.left,0),t.paddingTop=Math.max(t.paddingTop-t.margins.top,0),t.paddingRight=Math.max(t.paddingRight-t.margins.right,0),t.paddingBottom=Math.max(t.paddingBottom-t.margins.bottom,0))},afterFit:function(){i.callback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){return null===t||"undefined"==typeof t?NaN:"number"!=typeof t||isFinite(t)?"object"==typeof t?t instanceof Date||t.isValid?t:this.getRightValue(this.isHorizontal()?t.x:t.y):t:NaN},getLabelForIndex:i.noop,getPixelForValue:i.noop,getValueForPixel:i.noop,getPixelForTick:function(t,e){var n=this;if(n.isHorizontal()){var i=n.width-(n.paddingLeft+n.paddingRight),a=i/Math.max(n.ticks.length-(n.options.gridLines.offsetGridLines?0:1),1),o=a*t+n.paddingLeft;e&&(o+=a/2);var r=n.left+Math.round(o);return r+=n.isFullWidth()?n.margins.left:0}var l=n.height-(n.paddingTop+n.paddingBottom);return n.top+t*(l/(n.ticks.length-1))},getPixelForDecimal:function(t){var e=this;if(e.isHorizontal()){var n=e.width-(e.paddingLeft+e.paddingRight),i=n*t+e.paddingLeft,a=e.left+Math.round(i);return a+=e.isFullWidth()?e.margins.left:0}return e.top+t*e.height},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var t=this,e=t.min,n=t.max;return t.beginAtZero?0:e<0&&n<0?n:e>0&&n>0?e:0},draw:function(e){var a=this,o=a.options;if(o.display){var r,l,s=a.ctx,u=t.defaults.global,d=o.ticks,c=o.gridLines,h=o.scaleLabel,f=0!==a.labelRotation,g=d.autoSkip,p=a.isHorizontal();d.maxTicksLimit&&(l=d.maxTicksLimit);var m=i.getValueOrDefault(d.fontColor,u.defaultFontColor),v=n(d),b=c.drawTicks?c.tickMarkLength:0,x=i.getValueOrDefault(h.fontColor,u.defaultFontColor),y=n(h),k=i.toRadians(a.labelRotation),w=Math.cos(k),M=a.longestLabelWidth*w;s.fillStyle=m;var S=[];if(p){if(r=!1,(M+d.autoSkipPadding)*a.ticks.length>a.width-(a.paddingLeft+a.paddingRight)&&(r=1+Math.floor((M+d.autoSkipPadding)*a.ticks.length/(a.width-(a.paddingLeft+a.paddingRight)))),l&&a.ticks.length>l)for(;!r||a.ticks.length/(r||1)>l;)r||(r=1),r+=1;g||(r=!1)}var C="right"===o.position?a.left:a.right-b,D="right"===o.position?a.left+b:a.right,I="bottom"===o.position?a.top:a.bottom-b,A="bottom"===o.position?a.top+b:a.bottom;if(i.each(a.ticks,function(t,n){if(void 0!==t&&null!==t){var l=a.ticks.length===n+1,s=r>1&&n%r>0||n%r===0&&n+r>=a.ticks.length;if((!s||l)&&void 0!==t&&null!==t){var h,g,m,v;n===("undefined"!=typeof a.zeroLineIndex?a.zeroLineIndex:0)?(h=c.zeroLineWidth,g=c.zeroLineColor,m=c.zeroLineBorderDash,v=c.zeroLineBorderDashOffset):(h=i.getValueAtIndexOrDefault(c.lineWidth,n),g=i.getValueAtIndexOrDefault(c.color,n),m=i.getValueOrDefault(c.borderDash,u.borderDash),v=i.getValueOrDefault(c.borderDashOffset,u.borderDashOffset));var x,y,w,M,P,_,T,F,R,L,V="middle",O="middle";if(p){"bottom"===o.position?(O=f?"middle":"top",V=f?"right":"center",L=a.top+b):(O=f?"middle":"bottom",V=f?"left":"center",L=a.bottom-b);var z=a.getPixelForTick(n)+i.aliasPixel(h);R=a.getPixelForTick(n,c.offsetGridLines)+d.labelOffset,x=w=P=T=z,y=I,M=A,_=e.top,F=e.bottom}else{var B,W="left"===o.position,N=d.padding;d.mirror?(V=W?"left":"right",B=N):(V=W?"right":"left",
B=b+N),R=W?a.right-B:a.left+B;var E=a.getPixelForTick(n);E+=i.aliasPixel(h),L=a.getPixelForTick(n,c.offsetGridLines),x=C,w=D,P=e.left,T=e.right,y=M=_=F=E}S.push({tx1:x,ty1:y,tx2:w,ty2:M,x1:P,y1:_,x2:T,y2:F,labelX:R,labelY:L,glWidth:h,glColor:g,glBorderDash:m,glBorderDashOffset:v,rotation:-1*k,label:t,textBaseline:O,textAlign:V})}}}),i.each(S,function(t){if(c.display&&(s.save(),s.lineWidth=t.glWidth,s.strokeStyle=t.glColor,s.setLineDash&&(s.setLineDash(t.glBorderDash),s.lineDashOffset=t.glBorderDashOffset),s.beginPath(),c.drawTicks&&(s.moveTo(t.tx1,t.ty1),s.lineTo(t.tx2,t.ty2)),c.drawOnChartArea&&(s.moveTo(t.x1,t.y1),s.lineTo(t.x2,t.y2)),s.stroke(),s.restore()),d.display){s.save(),s.translate(t.labelX,t.labelY),s.rotate(t.rotation),s.font=v.font,s.textBaseline=t.textBaseline,s.textAlign=t.textAlign;var e=t.label;if(i.isArray(e))for(var n=0,a=0;n<e.length;++n)s.fillText(""+e[n],0,a),a+=1.5*v.size;else s.fillText(e,0,0);s.restore()}}),h.display){var P,_,T=0;if(p)P=a.left+(a.right-a.left)/2,_="bottom"===o.position?a.bottom-y.size/2:a.top+y.size/2;else{var F="left"===o.position;P=F?a.left+y.size/2:a.right-y.size/2,_=a.top+(a.bottom-a.top)/2,T=F?-.5*Math.PI:.5*Math.PI}s.save(),s.translate(P,_),s.rotate(T),s.textAlign="center",s.textBaseline="middle",s.fillStyle=x,s.font=y.font,s.fillText(h.labelString,0,0),s.restore()}if(c.drawBorder){s.lineWidth=i.getValueAtIndexOrDefault(c.lineWidth,0),s.strokeStyle=i.getValueAtIndexOrDefault(c.color,0);var R=a.left,L=a.right,V=a.top,O=a.bottom,z=i.aliasPixel(s.lineWidth);p?(V=O="top"===o.position?a.bottom:a.top,V+=z,O+=z):(R=L="left"===o.position?a.right:a.left,R+=z,L+=z),s.beginPath(),s.moveTo(R,V),s.lineTo(L,O),s.stroke()}}}})}},{}],32:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.scaleService={constructors:{},defaults:{},registerScaleType:function(t,n,i){this.constructors[t]=n,this.defaults[t]=e.clone(i)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(n){return this.defaults.hasOwnProperty(n)?e.scaleMerge(t.defaults.scale,this.defaults[n]):{}},updateScaleDefaults:function(t,n){var i=this.defaults;i.hasOwnProperty(t)&&(i[t]=e.extend(i[t],n))},addScalesToLayout:function(n){e.each(n.scales,function(e){e.fullWidth=e.options.fullWidth,e.position=e.options.position,e.weight=e.options.weight,t.layoutService.addBox(n,e)})}}}},{}],33:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.Ticks={generators:{linear:function(t,n){var i,a=[];if(t.stepSize&&t.stepSize>0)i=t.stepSize;else{var o=e.niceNum(n.max-n.min,!1);i=e.niceNum(o/(t.maxTicks-1),!0)}var r=Math.floor(n.min/i)*i,l=Math.ceil(n.max/i)*i;t.min&&t.max&&t.stepSize&&e.almostWhole((t.max-t.min)/t.stepSize,i/1e3)&&(r=t.min,l=t.max);var s=(l-r)/i;s=e.almostEquals(s,Math.round(s),i/1e3)?Math.round(s):Math.ceil(s),a.push(void 0!==t.min?t.min:r);for(var u=1;u<s;++u)a.push(r+u*i);return a.push(void 0!==t.max?t.max:l),a},logarithmic:function(t,n){var i,a,o=[],r=e.getValueOrDefault,l=r(t.min,Math.pow(10,Math.floor(e.log10(n.min)))),s=Math.floor(e.log10(n.max)),u=Math.ceil(n.max/Math.pow(10,s));0===l?(i=Math.floor(e.log10(n.minNotZero)),a=Math.floor(n.minNotZero/Math.pow(10,i)),o.push(l),l=a*Math.pow(10,i)):(i=Math.floor(e.log10(l)),a=Math.floor(l/Math.pow(10,i)));do o.push(l),++a,10===a&&(a=1,++i),l=a*Math.pow(10,i);while(i<s||i===s&&a<u);var d=r(t.max,l);return o.push(d),o}},formatters:{values:function(t){return e.isArray(t)?t:""+t},linear:function(t,n,i){var a=i.length>3?i[2]-i[1]:i[1]-i[0];Math.abs(a)>1&&t!==Math.floor(t)&&(a=t-Math.floor(t));var o=e.log10(Math.abs(a)),r="";if(0!==t){var l=-1*Math.floor(o);l=Math.max(Math.min(l,20),0),r=t.toFixed(l)}else r="0";return r},logarithmic:function(t,n,i){var a=t/Math.pow(10,Math.floor(e.log10(t)));return 0===t?"0":1===a||2===a||5===a||0===n||n===i.length-1?t.toExponential():""}}}}},{}],34:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){var n=s.color(t);return n.alpha(e*n.alpha()).rgbaString()}function n(t,e){return e&&(s.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function i(t){var e=t._xScale,n=t._yScale||t._scale,i=t._index,a=t._datasetIndex;return{xLabel:e?e.getLabelForIndex(i,a):"",yLabel:n?n.getLabelForIndex(i,a):"",index:i,datasetIndex:a,x:t._model.x,y:t._model.y}}function a(e){var n=t.defaults.global,i=s.getValueOrDefault;return{xPadding:e.xPadding,yPadding:e.yPadding,xAlign:e.xAlign,yAlign:e.yAlign,bodyFontColor:e.bodyFontColor,_bodyFontFamily:i(e.bodyFontFamily,n.defaultFontFamily),_bodyFontStyle:i(e.bodyFontStyle,n.defaultFontStyle),_bodyAlign:e.bodyAlign,bodyFontSize:i(e.bodyFontSize,n.defaultFontSize),bodySpacing:e.bodySpacing,titleFontColor:e.titleFontColor,_titleFontFamily:i(e.titleFontFamily,n.defaultFontFamily),_titleFontStyle:i(e.titleFontStyle,n.defaultFontStyle),titleFontSize:i(e.titleFontSize,n.defaultFontSize),_titleAlign:e.titleAlign,titleSpacing:e.titleSpacing,titleMarginBottom:e.titleMarginBottom,footerFontColor:e.footerFontColor,_footerFontFamily:i(e.footerFontFamily,n.defaultFontFamily),_footerFontStyle:i(e.footerFontStyle,n.defaultFontStyle),footerFontSize:i(e.footerFontSize,n.defaultFontSize),_footerAlign:e.footerAlign,footerSpacing:e.footerSpacing,footerMarginTop:e.footerMarginTop,caretSize:e.caretSize,cornerRadius:e.cornerRadius,backgroundColor:e.backgroundColor,opacity:0,legendColorBackground:e.multiKeyBackground,displayColors:e.displayColors,borderColor:e.borderColor,borderWidth:e.borderWidth}}function o(t,e){var n=t._chart.ctx,i=2*e.yPadding,a=0,o=e.body,r=o.reduce(function(t,e){return t+e.before.length+e.lines.length+e.after.length},0);r+=e.beforeBody.length+e.afterBody.length;var l=e.title.length,u=e.footer.length,d=e.titleFontSize,c=e.bodyFontSize,h=e.footerFontSize;i+=l*d,i+=l?(l-1)*e.titleSpacing:0,i+=l?e.titleMarginBottom:0,i+=r*c,i+=r?(r-1)*e.bodySpacing:0,i+=u?e.footerMarginTop:0,i+=u*h,i+=u?(u-1)*e.footerSpacing:0;var f=0,g=function(t){a=Math.max(a,n.measureText(t).width+f)};return n.font=s.fontString(d,e._titleFontStyle,e._titleFontFamily),s.each(e.title,g),n.font=s.fontString(c,e._bodyFontStyle,e._bodyFontFamily),s.each(e.beforeBody.concat(e.afterBody),g),f=e.displayColors?c+2:0,s.each(o,function(t){s.each(t.before,g),s.each(t.lines,g),s.each(t.after,g)}),f=0,n.font=s.fontString(h,e._footerFontStyle,e._footerFontFamily),s.each(e.footer,g),a+=2*e.xPadding,{width:a,height:i}}function r(t,e){var n=t._model,i=t._chart,a=t._chart.chartArea,o="center",r="center";n.y<e.height?r="top":n.y>i.height-e.height&&(r="bottom");var l,s,u,d,c,h=(a.left+a.right)/2,f=(a.top+a.bottom)/2;"center"===r?(l=function(t){return t<=h},s=function(t){return t>h}):(l=function(t){return t<=e.width/2},s=function(t){return t>=i.width-e.width/2}),u=function(t){return t+e.width>i.width},d=function(t){return t-e.width<0},c=function(t){return t<=f?"top":"bottom"},l(n.x)?(o="left",u(n.x)&&(o="center",r=c(n.y))):s(n.x)&&(o="right",d(n.x)&&(o="center",r=c(n.y)));var g=t._options;return{xAlign:g.xAlign?g.xAlign:o,yAlign:g.yAlign?g.yAlign:r}}function l(t,e,n){var i=t.x,a=t.y,o=t.caretSize,r=t.caretPadding,l=t.cornerRadius,s=n.xAlign,u=n.yAlign,d=o+r,c=l+r;return"right"===s?i-=e.width:"center"===s&&(i-=e.width/2),"top"===u?a+=d:a-="bottom"===u?e.height+d:e.height/2,"center"===u?"left"===s?i+=d:"right"===s&&(i-=d):"left"===s?i-=c:"right"===s&&(i+=c),{x:i,y:a}}var s=t.helpers;t.defaults.global.tooltips={enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{beforeTitle:s.noop,title:function(t,e){var n="",i=e.labels,a=i?i.length:0;if(t.length>0){var o=t[0];o.xLabel?n=o.xLabel:a>0&&o.index<a&&(n=i[o.index])}return n},afterTitle:s.noop,beforeBody:s.noop,beforeLabel:s.noop,label:function(t,e){var n=e.datasets[t.datasetIndex].label||"";return n&&(n+=": "),n+=t.yLabel},labelColor:function(t,e){var n=e.getDatasetMeta(t.datasetIndex),i=n.data[t.index],a=i._view;return{borderColor:a.borderColor,backgroundColor:a.backgroundColor}},afterLabel:s.noop,afterBody:s.noop,beforeFooter:s.noop,footer:s.noop,afterFooter:s.noop}},t.Tooltip=t.Element.extend({initialize:function(){this._model=a(this._options)},getTitle:function(){var t=this,e=t._options,i=e.callbacks,a=i.beforeTitle.apply(t,arguments),o=i.title.apply(t,arguments),r=i.afterTitle.apply(t,arguments),l=[];return l=n(l,a),l=n(l,o),l=n(l,r)},getBeforeBody:function(){var t=this._options.callbacks.beforeBody.apply(this,arguments);return s.isArray(t)?t:void 0!==t?[t]:[]},getBody:function(t,e){var i=this,a=i._options.callbacks,o=[];return s.each(t,function(t){var r={before:[],lines:[],after:[]};n(r.before,a.beforeLabel.call(i,t,e)),n(r.lines,a.label.call(i,t,e)),n(r.after,a.afterLabel.call(i,t,e)),o.push(r)}),o},getAfterBody:function(){var t=this._options.callbacks.afterBody.apply(this,arguments);return s.isArray(t)?t:void 0!==t?[t]:[]},getFooter:function(){var t=this,e=t._options.callbacks,i=e.beforeFooter.apply(t,arguments),a=e.footer.apply(t,arguments),o=e.afterFooter.apply(t,arguments),r=[];return r=n(r,i),r=n(r,a),r=n(r,o)},update:function(e){var n,u,d=this,c=d._options,h=d._model,f=d._model=a(c),g=d._active,p=d._data,m={xAlign:h.xAlign,yAlign:h.yAlign},v={x:h.x,y:h.y},b={width:h.width,height:h.height},x={x:h.caretX,y:h.caretY};if(g.length){f.opacity=1;var y=[];x=t.Tooltip.positioners[c.position](g,d._eventPosition);var k=[];for(n=0,u=g.length;n<u;++n)k.push(i(g[n]));c.filter&&(k=k.filter(function(t){return c.filter(t,p)})),c.itemSort&&(k=k.sort(function(t,e){return c.itemSort(t,e,p)})),s.each(k,function(t){y.push(c.callbacks.labelColor.call(d,t,d._chart))}),f.title=d.getTitle(k,p),f.beforeBody=d.getBeforeBody(k,p),f.body=d.getBody(k,p),f.afterBody=d.getAfterBody(k,p),f.footer=d.getFooter(k,p),f.x=Math.round(x.x),f.y=Math.round(x.y),f.caretPadding=c.caretPadding,f.labelColors=y,f.dataPoints=k,b=o(this,f),m=r(this,b),v=l(f,b,m)}else f.opacity=0;return f.xAlign=m.xAlign,f.yAlign=m.yAlign,f.x=v.x,f.y=v.y,f.width=b.width,f.height=b.height,f.caretX=x.x,f.caretY=x.y,d._model=f,e&&c.custom&&c.custom.call(d,f),d},drawCaret:function(t,e){var n=this._chart.ctx,i=this._view,a=this.getCaretPosition(t,e,i);n.lineTo(a.x1,a.y1),n.lineTo(a.x2,a.y2),n.lineTo(a.x3,a.y3)},getCaretPosition:function(t,e,n){var i,a,o,r,l,s,u=n.caretSize,d=n.cornerRadius,c=n.xAlign,h=n.yAlign,f=t.x,g=t.y,p=e.width,m=e.height;if("center"===h)l=g+m/2,"left"===c?(i=f,a=i-u,o=i,r=l+u,s=l-u):(i=f+p,a=i+u,o=i,r=l-u,s=l+u);else if("left"===c?(a=f+d+u,i=a-u,o=a+u):"right"===c?(a=f+p-d-u,i=a-u,o=a+u):(a=f+p/2,i=a-u,o=a+u),"top"===h)r=g,l=r-u,s=r;else{r=g+m,l=r+u,s=r;var v=o;o=i,i=v}return{x1:i,x2:a,x3:o,y1:r,y2:l,y3:s}},drawTitle:function(t,n,i,a){var o=n.title;if(o.length){i.textAlign=n._titleAlign,i.textBaseline="top";var r=n.titleFontSize,l=n.titleSpacing;i.fillStyle=e(n.titleFontColor,a),i.font=s.fontString(r,n._titleFontStyle,n._titleFontFamily);var u,d;for(u=0,d=o.length;u<d;++u)i.fillText(o[u],t.x,t.y),t.y+=r+l,u+1===o.length&&(t.y+=n.titleMarginBottom-l)}},drawBody:function(t,n,i,a){var o=n.bodyFontSize,r=n.bodySpacing,l=n.body;i.textAlign=n._bodyAlign,i.textBaseline="top";var u=e(n.bodyFontColor,a);i.fillStyle=u,i.font=s.fontString(o,n._bodyFontStyle,n._bodyFontFamily);var d=0,c=function(e){i.fillText(e,t.x+d,t.y),t.y+=o+r};s.each(n.beforeBody,c);var h=n.displayColors;d=h?o+2:0,s.each(l,function(r,l){s.each(r.before,c),s.each(r.lines,function(r){h&&(i.fillStyle=e(n.legendColorBackground,a),i.fillRect(t.x,t.y,o,o),i.strokeStyle=e(n.labelColors[l].borderColor,a),i.strokeRect(t.x,t.y,o,o),i.fillStyle=e(n.labelColors[l].backgroundColor,a),i.fillRect(t.x+1,t.y+1,o-2,o-2),i.fillStyle=u),c(r)}),s.each(r.after,c)}),d=0,s.each(n.afterBody,c),t.y-=r},drawFooter:function(t,n,i,a){var o=n.footer;o.length&&(t.y+=n.footerMarginTop,i.textAlign=n._footerAlign,i.textBaseline="top",i.fillStyle=e(n.footerFontColor,a),i.font=s.fontString(n.footerFontSize,n._footerFontStyle,n._footerFontFamily),s.each(o,function(e){i.fillText(e,t.x,t.y),t.y+=n.footerFontSize+n.footerSpacing}))},drawBackground:function(t,n,i,a,o){i.fillStyle=e(n.backgroundColor,o),i.strokeStyle=e(n.borderColor,o),i.lineWidth=n.borderWidth;var r=n.xAlign,l=n.yAlign,s=t.x,u=t.y,d=a.width,c=a.height,h=n.cornerRadius;i.beginPath(),i.moveTo(s+h,u),"top"===l&&this.drawCaret(t,a),i.lineTo(s+d-h,u),i.quadraticCurveTo(s+d,u,s+d,u+h),"center"===l&&"right"===r&&this.drawCaret(t,a),i.lineTo(s+d,u+c-h),i.quadraticCurveTo(s+d,u+c,s+d-h,u+c),"bottom"===l&&this.drawCaret(t,a),i.lineTo(s+h,u+c),i.quadraticCurveTo(s,u+c,s,u+c-h),"center"===l&&"left"===r&&this.drawCaret(t,a),i.lineTo(s,u+h),i.quadraticCurveTo(s,u,s+h,u),i.closePath(),i.fill(),n.borderWidth>0&&i.stroke()},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var n={width:e.width,height:e.height},i={x:e.x,y:e.y},a=Math.abs(e.opacity<.001)?0:e.opacity,o=e.title.length||e.beforeBody.length||e.body.length||e.afterBody.length||e.footer.length;this._options.enabled&&o&&(this.drawBackground(i,e,t,n,a),i.x+=e.xPadding,i.y+=e.yPadding,this.drawTitle(i,e,t,a),this.drawBody(i,e,t,a),this.drawFooter(i,e,t,a))}},handleEvent:function(t){var e=this,n=e._options,i=!1;if(e._lastActive=e._lastActive||[],"mouseout"===t.type?e._active=[]:e._active=e._chart.getElementsAtEventForMode(t,n.mode,n),i=!s.arrayEquals(e._active,e._lastActive),!i)return!1;if(e._lastActive=e._active,n.enabled||n.custom){e._eventPosition={x:t.x,y:t.y};var a=e._model;e.update(!0),e.pivot(),i|=a.x!==e._model.x||a.y!==e._model.y}return i}}),t.Tooltip.positioners={average:function(t){if(!t.length)return!1;var e,n,i=0,a=0,o=0;for(e=0,n=t.length;e<n;++e){var r=t[e];if(r&&r.hasValue()){var l=r.tooltipPosition();i+=l.x,a+=l.y,++o}}return{x:Math.round(i/o),y:Math.round(a/o)}},nearest:function(t,e){var n,i,a,o=e.x,r=e.y,l=Number.POSITIVE_INFINITY;for(i=0,a=t.length;i<a;++i){var u=t[i];if(u&&u.hasValue()){var d=u.getCenterPoint(),c=s.distanceBetweenPoints(e,d);c<l&&(l=c,n=u)}}if(n){var h=n.tooltipPosition();o=h.x,r=h.y}return{x:o,y:r}}}}},{}],35:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=t.defaults.global;n.elements.arc={backgroundColor:n.defaultColor,borderColor:"#fff",borderWidth:2},t.elements.Arc=t.Element.extend({inLabelRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2)},inRange:function(t,n){var i=this._view;if(i){for(var a=e.getAngleFromPoint(i,{x:t,y:n}),o=a.angle,r=a.distance,l=i.startAngle,s=i.endAngle;s<l;)s+=2*Math.PI;for(;o>s;)o-=2*Math.PI;for(;o<l;)o+=2*Math.PI;var u=o>=l&&o<=s,d=r>=i.innerRadius&&r<=i.outerRadius;return u&&d}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,n=(t.innerRadius+t.outerRadius)/2;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},getArea:function(){var t=this._view;return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,n=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},draw:function(){var t=this._chart.ctx,e=this._view,n=e.startAngle,i=e.endAngle;t.beginPath(),t.arc(e.x,e.y,e.outerRadius,n,i),t.arc(e.x,e.y,e.innerRadius,i,n,!0),t.closePath(),t.strokeStyle=e.borderColor,t.lineWidth=e.borderWidth,t.fillStyle=e.backgroundColor,t.fill(),t.lineJoin="bevel",e.borderWidth&&t.stroke()}})}},{}],36:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=t.defaults.global;t.defaults.global.elements.line={tension:.4,backgroundColor:n.defaultColor,borderWidth:3,borderColor:n.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0},t.elements.Line=t.Element.extend({draw:function(){var t,i,a,o,r=this,l=r._view,s=r._chart.ctx,u=l.spanGaps,d=r._children.slice(),c=n.elements.line,h=-1;for(r._loop&&d.length&&d.push(d[0]),s.save(),s.lineCap=l.borderCapStyle||c.borderCapStyle,s.setLineDash&&s.setLineDash(l.borderDash||c.borderDash),s.lineDashOffset=l.borderDashOffset||c.borderDashOffset,s.lineJoin=l.borderJoinStyle||c.borderJoinStyle,s.lineWidth=l.borderWidth||c.borderWidth,s.strokeStyle=l.borderColor||n.defaultColor,s.beginPath(),h=-1,t=0;t<d.length;++t)i=d[t],a=e.previousItem(d,t),o=i._view,0===t?o.skip||(s.moveTo(o.x,o.y),h=t):(a=h===-1?a:d[h],o.skip||(h!==t-1&&!u||h===-1?s.moveTo(o.x,o.y):e.canvas.lineTo(s,a._view,i._view),h=t));s.stroke(),s.restore()}})}},{}],37:[function(t,e,n){"use strict";e.exports=function(t){function e(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hitRadius,2)}function n(t){var e=this._view;return!!e&&Math.pow(t-e.y,2)<Math.pow(e.radius+e.hitRadius,2)}var i=t.helpers,a=t.defaults.global,o=a.defaultColor;a.elements.point={radius:3,pointStyle:"circle",backgroundColor:o,borderWidth:1,borderColor:o,hitRadius:1,hoverRadius:4,hoverBorderWidth:1},t.elements.Point=t.Element.extend({inRange:function(t,e){var n=this._view;return!!n&&Math.pow(t-n.x,2)+Math.pow(e-n.y,2)<Math.pow(n.hitRadius+n.radius,2)},inLabelRange:e,inXRange:e,inYRange:n,getCenterPoint:function(){var t=this._view;return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(e){var n=this._view,r=this._model,l=this._chart.ctx,s=n.pointStyle,u=n.radius,d=n.x,c=n.y,h=t.helpers.color,f=1.01,g=0;n.skip||(l.strokeStyle=n.borderColor||o,l.lineWidth=i.getValueOrDefault(n.borderWidth,a.elements.point.borderWidth),l.fillStyle=n.backgroundColor||o,void 0!==e&&(r.x<e.left||e.right*f<r.x||r.y<e.top||e.bottom*f<r.y)&&(r.x<e.left?g=(d-r.x)/(e.left-r.x):e.right*f<r.x?g=(r.x-d)/(r.x-e.right):r.y<e.top?g=(c-r.y)/(e.top-r.y):e.bottom*f<r.y&&(g=(r.y-c)/(r.y-e.bottom)),g=Math.round(100*g)/100,l.strokeStyle=h(l.strokeStyle).alpha(g).rgbString(),l.fillStyle=h(l.fillStyle).alpha(g).rgbString()),t.canvasHelpers.drawPoint(l,s,u,d,c))}})}},{}],38:[function(t,e,n){"use strict";e.exports=function(t){function e(t){return void 0!==t._view.width}function n(t){var n,i,a,o,r=t._view;if(e(t)){var l=r.width/2;n=r.x-l,i=r.x+l,a=Math.min(r.y,r.base),o=Math.max(r.y,r.base)}else{var s=r.height/2;n=Math.min(r.x,r.base),i=Math.max(r.x,r.base),a=r.y-s,o=r.y+s}return{left:n,top:a,right:i,bottom:o}}var i=t.defaults.global;i.elements.rectangle={backgroundColor:i.defaultColor,borderWidth:0,borderColor:i.defaultColor,borderSkipped:"bottom"},t.elements.Rectangle=t.Element.extend({draw:function(){function t(t){return v[(x+t)%4]}var e,n,i,a,o,r,l,s=this._chart.ctx,u=this._view,d=u.borderWidth;if(u.horizontal?(e=u.base,n=u.x,i=u.y-u.height/2,a=u.y+u.height/2,o=n>e?1:-1,r=1,l=u.borderSkipped||"left"):(e=u.x-u.width/2,n=u.x+u.width/2,i=u.y,a=u.base,o=1,r=a>i?1:-1,l=u.borderSkipped||"bottom"),d){var c=Math.min(Math.abs(e-n),Math.abs(i-a));d=d>c?c:d;var h=d/2,f=e+("left"!==l?h*o:0),g=n+("right"!==l?-h*o:0),p=i+("top"!==l?h*r:0),m=a+("bottom"!==l?-h*r:0);f!==g&&(i=p,a=m),p!==m&&(e=f,n=g)}s.beginPath(),s.fillStyle=u.backgroundColor,s.strokeStyle=u.borderColor,s.lineWidth=d;var v=[[e,a],[e,i],[n,i],[n,a]],b=["bottom","left","top","right"],x=b.indexOf(l,0);x===-1&&(x=0);var y=t(0);s.moveTo(y[0],y[1]);for(var k=1;k<4;k++)y=t(k),s.lineTo(y[0],y[1]);s.fill(),d&&s.stroke()},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){var i=!1;if(this._view){var a=n(this);i=t>=a.left&&t<=a.right&&e>=a.top&&e<=a.bottom}return i},inLabelRange:function(t,i){var a=this;if(!a._view)return!1;var o=!1,r=n(a);return o=e(a)?t>=r.left&&t<=r.right:i>=r.top&&i<=r.bottom},inXRange:function(t){var e=n(this);return t>=e.left&&t<=e.right},inYRange:function(t){var e=n(this);return t>=e.top&&t<=e.bottom},getCenterPoint:function(){var t,n,i=this._view;return e(this)?(t=i.x,n=(i.y+i.base)/2):(t=(i.x+i.base)/2,n=i.y),{x:t,y:n}},getArea:function(){var t=this._view;return t.width*Math.abs(t.y-t.base)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}})}},{}],39:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){var n=s.getStyle(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?Number(i[1]):void 0}function n(t,n){var i=t.style,a=t.getAttribute("height"),o=t.getAttribute("width");if(t._chartjs={initial:{height:a,width:o,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",null===o||""===o){var r=e(t,"width");void 0!==r&&(t.width=r)}if(null===a||""===a)if(""===t.style.height)t.height=t.width/(n.options.aspectRatio||2);else{var l=e(t,"height");void 0!==r&&(t.height=l)}return t}function i(t,e,n,i,a){return{type:t,chart:e,native:a||null,x:void 0!==n?n:null,y:void 0!==i?i:null}}function a(t,e){var n=u[t.type]||t.type,a=s.getRelativePosition(t,e);return i(n,e,a.x,a.y,t)}function o(t){var e=document.createElement("iframe");return e.className="chartjs-hidden-iframe",e.style.cssText="display:block;overflow:hidden;border:0;margin:0;top:0;left:0;bottom:0;right:0;height:100%;width:100%;position:absolute;pointer-events:none;z-index:-1;",e.tabIndex=-1,s.addEvent(e,"load",function(){s.addEvent(e.contentWindow||e,"resize",t),t()}),e}function r(t,e,n){var a=t._chartjs={ticking:!1},r=function(){a.ticking||(a.ticking=!0,s.requestAnimFrame.call(window,function(){if(a.resizer)return a.ticking=!1,e(i("resize",n))}))};a.resizer=o(r),t.insertBefore(a.resizer,t.firstChild)}function l(t){if(t&&t._chartjs){var e=t._chartjs.resizer;e&&(e.parentNode.removeChild(e),t._chartjs.resizer=null),delete t._chartjs}}var s=t.helpers,u={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"};return{acquireContext:function(t,e){"string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas);var i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(n(t,e),i):null},releaseContext:function(t){var e=t.canvas;if(e._chartjs){var n=e._chartjs.initial;["height","width"].forEach(function(t){var i=n[t];void 0===i||null===i?e.removeAttribute(t):e.setAttribute(t,i)}),s.each(n.style||{},function(t,n){e.style[n]=t}),e.width=e.width,delete e._chartjs}},addEventListener:function(t,e,n){var i=t.canvas;if("resize"===e)return void r(i.parentNode,n,t);var o=n._chartjs||(n._chartjs={}),l=o.proxies||(o.proxies={}),u=l[t.id+"_"+e]=function(e){n(a(e,t))};s.addEvent(i,e,u)},removeEventListener:function(t,e,n){var i=t.canvas;if("resize"===e)return void l(i.parentNode,n);var a=n._chartjs||{},o=a.proxies||{},r=o[t.id+"_"+e];r&&s.removeEvent(i,e,r)}}}},{}],40:[function(t,e,n){"use strict";var i=t(39);e.exports=function(t){t.platform={acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}},t.helpers.extend(t.platform,i(t))}},{39:39}],41:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e,n){var i,a=t._model||{},o=a.fill;if(void 0===o&&(o=!!a.backgroundColor),o===!1||null===o)return!1;if(o===!0)return"origin";if(i=parseFloat(o,10),isFinite(i)&&Math.floor(i)===i)return"-"!==o[0]&&"+"!==o[0]||(i=e+i),!(i===e||i<0||i>=n)&&i;switch(o){case"bottom":return"start";case"top":return"end";case"zero":return"origin";case"origin":case"start":case"end":return o;default:return!1}}function n(t){var e,n=t.el._model||{},i=t.el._scale||{},a=t.fill,o=null;if(isFinite(a))return null;if("start"===a?o=void 0===n.scaleBottom?i.bottom:n.scaleBottom:"end"===a?o=void 0===n.scaleTop?i.top:n.scaleTop:void 0!==n.scaleZero?o=n.scaleZero:i.getBasePosition?o=i.getBasePosition():i.getBasePixel&&(o=i.getBasePixel()),void 0!==o&&null!==o){if(void 0!==o.x&&void 0!==o.y)return o;if("number"==typeof o&&isFinite(o))return e=i.isHorizontal(),{x:e?o:null,y:e?null:o}}return null}function i(t,e,n){var i,a=t[e],o=a.fill,r=[e];if(!n)return o;for(;o!==!1&&r.indexOf(o)===-1;){if(!isFinite(o))return o;if(i=t[o],!i)return!1;if(i.visible)return o;r.push(o),o=i.fill}return!1}function a(t){var e=t.fill,n="dataset";return e===!1?null:(isFinite(e)||(n="boundary"),d[n](t))}function o(t){return t&&!t.skip}function r(t,e,n,i,a){var o;if(i&&a){for(t.moveTo(e[0].x,e[0].y),o=1;o<i;++o)u.canvas.lineTo(t,e[o-1],e[o]);for(t.lineTo(n[a-1].x,n[a-1].y),o=a-1;o>0;--o)u.canvas.lineTo(t,n[o],n[o-1],!0)}}function l(t,e,n,i,a,l){var s,u,d,c,h,f,g,p=e.length,m=i.spanGaps,v=[],b=[],x=0,y=0;for(t.beginPath(),s=0,u=p+!!l;s<u;++s)d=s%p,c=e[d]._view,h=n(c,d,i),f=o(c),g=o(h),f&&g?(x=v.push(c),y=b.push(h)):x&&y&&(m?(f&&v.push(c),g&&b.push(h)):(r(t,v,b,x,y),x=y=0,v=[],b=[]));r(t,v,b,x,y),t.closePath(),t.fillStyle=a,t.fill()}t.defaults.global.plugins.filler={propagate:!0};var s=t.defaults,u=t.helpers,d={dataset:function(t){var e=t.fill,n=t.chart,i=n.getDatasetMeta(e),a=i&&n.isDatasetVisible(e),o=a&&i.dataset._children||[];return o.length?function(t,e){return o[e]._view||null}:null},boundary:function(t){var e=t.boundary,n=e?e.x:null,i=e?e.y:null;return function(t){return{x:null===n?t.x:n,y:null===i?t.y:i}}}};return{id:"filler",afterDatasetsUpdate:function(o,r){var l,s,u,d,c=(o.data.datasets||[]).length,h=r.propagate,f=[];for(s=0;s<c;++s)l=o.getDatasetMeta(s),u=l.dataset,d=null,u&&u._model&&u instanceof t.elements.Line&&(d={visible:o.isDatasetVisible(s),fill:e(u,s,c),chart:o,el:u}),l.$filler=d,f.push(d);for(s=0;s<c;++s)d=f[s],d&&(d.fill=i(f,s,h),d.boundary=n(d),d.mapper=a(d))},beforeDatasetDraw:function(t,e){var n=e.meta.$filler;if(n){var i=n.el,a=i._view,o=i._children||[],r=n.mapper,u=a.backgroundColor||s.global.defaultColor;r&&u&&o.length&&l(t.ctx,o,r,a,u,i._loop)}}}}},{}],42:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){return t.usePointStyle?e*Math.SQRT2:t.boxWidth}function n(e,n){var i=new t.Legend({ctx:e.ctx,options:n,chart:e});a.configure(e,i,n),a.addBox(e,i),e.legend=i}var i=t.helpers,a=t.layoutService,o=i.noop;return t.defaults.global.legend={display:!0,position:"top",fullWidth:!0,reverse:!1,weight:1e3,onClick:function(t,e){var n=e.datasetIndex,i=this.chart,a=i.getDatasetMeta(n);a.hidden=null===a.hidden?!i.data.datasets[n].hidden:null,i.update()},onHover:null,labels:{boxWidth:40,padding:10,generateLabels:function(t){var e=t.data;return i.isArray(e.datasets)?e.datasets.map(function(e,n){return{text:e.label,fillStyle:i.isArray(e.backgroundColor)?e.backgroundColor[0]:e.backgroundColor,hidden:!t.isDatasetVisible(n),lineCap:e.borderCapStyle,lineDash:e.borderDash,lineDashOffset:e.borderDashOffset,lineJoin:e.borderJoinStyle,lineWidth:e.borderWidth,strokeStyle:e.borderColor,pointStyle:e.pointStyle,datasetIndex:n}},this):[]}}},t.Legend=t.Element.extend({initialize:function(t){i.extend(this,t),this.legendHitBoxes=[],this.doughnutMode=!1},beforeUpdate:o,update:function(t,e,n){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=n,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:o,beforeSetDimensions:o,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:o,beforeBuildLabels:o,buildLabels:function(){var t=this,e=t.options.labels,n=e.generateLabels.call(t,t.chart);e.filter&&(n=n.filter(function(n){return e.filter(n,t.chart.data)})),t.options.reverse&&n.reverse(),t.legendItems=n},afterBuildLabels:o,beforeFit:o,fit:function(){var n=this,a=n.options,o=a.labels,r=a.display,l=n.ctx,s=t.defaults.global,u=i.getValueOrDefault,d=u(o.fontSize,s.defaultFontSize),c=u(o.fontStyle,s.defaultFontStyle),h=u(o.fontFamily,s.defaultFontFamily),f=i.fontString(d,c,h),g=n.legendHitBoxes=[],p=n.minSize,m=n.isHorizontal();if(m?(p.width=n.maxWidth,p.height=r?10:0):(p.width=r?10:0,p.height=n.maxHeight),r)if(l.font=f,m){var v=n.lineWidths=[0],b=n.legendItems.length?d+o.padding:0;l.textAlign="left",l.textBaseline="top",i.each(n.legendItems,function(t,i){var a=e(o,d),r=a+d/2+l.measureText(t.text).width;v[v.length-1]+r+o.padding>=n.width&&(b+=d+o.padding,v[v.length]=n.left),g[i]={left:0,top:0,width:r,height:d},v[v.length-1]+=r+o.padding}),p.height+=b}else{var x=o.padding,y=n.columnWidths=[],k=o.padding,w=0,M=0,S=d+x;i.each(n.legendItems,function(t,n){var i=e(o,d),a=i+d/2+l.measureText(t.text).width;M+S>p.height&&(k+=w+o.padding,y.push(w),w=0,M=0),w=Math.max(w,a),M+=S,g[n]={left:0,top:0,width:a,height:d}}),k+=w,y.push(w),p.width+=k}n.width=p.width,n.height=p.height},afterFit:o,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var n=this,a=n.options,o=a.labels,r=t.defaults.global,l=r.elements.line,s=n.width,u=n.lineWidths;if(a.display){var d,c=n.ctx,h=i.getValueOrDefault,f=h(o.fontColor,r.defaultFontColor),g=h(o.fontSize,r.defaultFontSize),p=h(o.fontStyle,r.defaultFontStyle),m=h(o.fontFamily,r.defaultFontFamily),v=i.fontString(g,p,m);c.textAlign="left",c.textBaseline="top",c.lineWidth=.5,c.strokeStyle=f,c.fillStyle=f,c.font=v;var b=e(o,g),x=n.legendHitBoxes,y=function(e,n,i){if(!(isNaN(b)||b<=0)){c.save(),c.fillStyle=h(i.fillStyle,r.defaultColor),c.lineCap=h(i.lineCap,l.borderCapStyle),c.lineDashOffset=h(i.lineDashOffset,l.borderDashOffset),c.lineJoin=h(i.lineJoin,l.borderJoinStyle),c.lineWidth=h(i.lineWidth,l.borderWidth),c.strokeStyle=h(i.strokeStyle,r.defaultColor);var o=0===h(i.lineWidth,l.borderWidth);if(c.setLineDash&&c.setLineDash(h(i.lineDash,l.borderDash)),a.labels&&a.labels.usePointStyle){var s=g*Math.SQRT2/2,u=s/Math.SQRT2,d=e+u,f=n+u;t.canvasHelpers.drawPoint(c,i.pointStyle,s,d,f)}else o||c.strokeRect(e,n,b,g),c.fillRect(e,n,b,g);c.restore()}},k=function(t,e,n,i){c.fillText(n.text,b+g/2+t,e),n.hidden&&(c.beginPath(),c.lineWidth=2,c.moveTo(b+g/2+t,e+g/2),c.lineTo(b+g/2+t+i,e+g/2),c.stroke())},w=n.isHorizontal();d=w?{x:n.left+(s-u[0])/2,y:n.top+o.padding,line:0}:{x:n.left+o.padding,y:n.top+o.padding,line:0};var M=g+o.padding;i.each(n.legendItems,function(t,e){var i=c.measureText(t.text).width,a=b+g/2+i,r=d.x,l=d.y;w?r+a>=s&&(l=d.y+=M,d.line++,r=d.x=n.left+(s-u[d.line])/2):l+M>n.bottom&&(r=d.x=r+n.columnWidths[d.line]+o.padding,l=d.y=n.top+o.padding,d.line++),y(r,l,t),x[e].left=r,x[e].top=l,k(r,l,t,i),w?d.x+=a+o.padding:d.y+=M})}},handleEvent:function(t){var e=this,n=e.options,i="mouseup"===t.type?"click":t.type,a=!1;if("mousemove"===i){if(!n.onHover)return}else{if("click"!==i)return;if(!n.onClick)return}var o=t.x,r=t.y;if(o>=e.left&&o<=e.right&&r>=e.top&&r<=e.bottom)for(var l=e.legendHitBoxes,s=0;s<l.length;++s){var u=l[s];if(o>=u.left&&o<=u.left+u.width&&r>=u.top&&r<=u.top+u.height){if("click"===i){n.onClick.call(e,t.native,e.legendItems[s]),a=!0;break}if("mousemove"===i){n.onHover.call(e,t.native,e.legendItems[s]),a=!0;break}}}return a}}),{id:"legend",beforeInit:function(t){var e=t.options.legend;e&&n(t,e)},beforeUpdate:function(e){var o=e.options.legend,r=e.legend;o?(o=i.configMerge(t.defaults.global.legend,o),r?(a.configure(e,r,o),r.options=o):n(e,o)):r&&(a.removeBox(e,r),delete e.legend)},afterEvent:function(t,e){var n=t.legend;n&&n.handleEvent(e)}}}},{}],43:[function(t,e,n){"use strict";e.exports=function(t){function e(e,n){var a=new t.Title({ctx:e.ctx,options:n,chart:e});i.configure(e,a,n),i.addBox(e,a),e.titleBlock=a}var n=t.helpers,i=t.layoutService,a=n.noop;return t.defaults.global.title={display:!1,position:"top",fullWidth:!0,weight:2e3,fontStyle:"bold",padding:10,text:""},t.Title=t.Element.extend({initialize:function(t){var e=this;n.extend(e,t),e.legendHitBoxes=[];
},beforeUpdate:a,update:function(t,e,n){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=n,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:a,beforeSetDimensions:a,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:a,beforeBuildLabels:a,buildLabels:a,afterBuildLabels:a,beforeFit:a,fit:function(){var e=this,i=n.getValueOrDefault,a=e.options,o=t.defaults.global,r=a.display,l=i(a.fontSize,o.defaultFontSize),s=e.minSize;e.isHorizontal()?(s.width=e.maxWidth,s.height=r?l+2*a.padding:0):(s.width=r?l+2*a.padding:0,s.height=e.maxHeight),e.width=s.width,e.height=s.height},afterFit:a,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var e=this,i=e.ctx,a=n.getValueOrDefault,o=e.options,r=t.defaults.global;if(o.display){var l,s,u,d=a(o.fontSize,r.defaultFontSize),c=a(o.fontStyle,r.defaultFontStyle),h=a(o.fontFamily,r.defaultFontFamily),f=n.fontString(d,c,h),g=0,p=e.top,m=e.left,v=e.bottom,b=e.right;i.fillStyle=a(o.fontColor,r.defaultFontColor),i.font=f,e.isHorizontal()?(l=m+(b-m)/2,s=p+(v-p)/2,u=b-m):(l="left"===o.position?m+d/2:b-d/2,s=p+(v-p)/2,u=v-p,g=Math.PI*("left"===o.position?-.5:.5)),i.save(),i.translate(l,s),i.rotate(g),i.textAlign="center",i.textBaseline="middle",i.fillText(o.text,0,0,u),i.restore()}}}),{id:"title",beforeInit:function(t){var n=t.options.title;n&&e(t,n)},beforeUpdate:function(a){var o=a.options.title,r=a.titleBlock;o?(o=n.configMerge(t.defaults.global.title,o),r?(i.configure(a,r,o),r.options=o):e(a,o)):r&&(t.layoutService.removeBox(a,r),delete a.titleBlock)}}}},{}],44:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n={position:"bottom"},i=t.Scale.extend({getLabels:function(){var t=this.chart.data;return(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels},determineDataLimits:function(){var t=this,n=t.getLabels();t.minIndex=0,t.maxIndex=n.length-1;var i;void 0!==t.options.ticks.min&&(i=e.indexOf(n,t.options.ticks.min),t.minIndex=i!==-1?i:t.minIndex),void 0!==t.options.ticks.max&&(i=e.indexOf(n,t.options.ticks.max),t.maxIndex=i!==-1?i:t.maxIndex),t.min=n[t.minIndex],t.max=n[t.maxIndex]},buildTicks:function(){var t=this,e=t.getLabels();t.ticks=0===t.minIndex&&t.maxIndex===e.length-1?e:e.slice(t.minIndex,t.maxIndex+1)},getLabelForIndex:function(t,e){var n=this,i=n.chart.data,a=n.isHorizontal();return i.yLabels&&!a?n.getRightValue(i.datasets[e].data[t]):n.ticks[t-n.minIndex]},getPixelForValue:function(t,e,n,i){var a,o=this,r=Math.max(o.maxIndex+1-o.minIndex-(o.options.gridLines.offsetGridLines?0:1),1);if(void 0!==t&&null!==t&&(a=o.isHorizontal()?t.x:t.y),void 0!==a||void 0!==t&&isNaN(e)){var l=o.getLabels();t=a||t;var s=l.indexOf(t);e=s!==-1?s:e}if(o.isHorizontal()){var u=o.width/r,d=u*(e-o.minIndex);return(o.options.gridLines.offsetGridLines&&i||o.maxIndex===o.minIndex&&i)&&(d+=u/2),o.left+Math.round(d)}var c=o.height/r,h=c*(e-o.minIndex);return o.options.gridLines.offsetGridLines&&i&&(h+=c/2),o.top+Math.round(h)},getPixelForTick:function(t,e){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null,e)},getValueForPixel:function(t){var e,n=this,i=Math.max(n.ticks.length-(n.options.gridLines.offsetGridLines?0:1),1),a=n.isHorizontal(),o=(a?n.width:n.height)/i;return t-=a?n.left:n.top,n.options.gridLines.offsetGridLines&&(t-=o/2),e=t<=0?0:Math.round(t/o)},getBasePixel:function(){return this.bottom}});t.scaleService.registerScaleType("category",i,n)}},{}],45:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n={position:"left",ticks:{callback:t.Ticks.formatters.linear}},i=t.LinearScaleBase.extend({determineDataLimits:function(){function t(t){return l?t.xAxisID===n.id:t.yAxisID===n.id}var n=this,i=n.options,a=n.chart,o=a.data,r=o.datasets,l=n.isHorizontal(),s=0,u=1;n.min=null,n.max=null;var d=i.stacked;if(void 0===d&&e.each(r,function(e,n){if(!d){var i=a.getDatasetMeta(n);a.isDatasetVisible(n)&&t(i)&&void 0!==i.stack&&(d=!0)}}),i.stacked||d){var c={};e.each(r,function(o,r){var l=a.getDatasetMeta(r),s=[l.type,void 0===i.stacked&&void 0===l.stack?r:"",l.stack].join(".");void 0===c[s]&&(c[s]={positiveValues:[],negativeValues:[]});var u=c[s].positiveValues,d=c[s].negativeValues;a.isDatasetVisible(r)&&t(l)&&e.each(o.data,function(t,e){var a=+n.getRightValue(t);isNaN(a)||l.data[e].hidden||(u[e]=u[e]||0,d[e]=d[e]||0,i.relativePoints?u[e]=100:a<0?d[e]+=a:u[e]+=a)})}),e.each(c,function(t){var i=t.positiveValues.concat(t.negativeValues),a=e.min(i),o=e.max(i);n.min=null===n.min?a:Math.min(n.min,a),n.max=null===n.max?o:Math.max(n.max,o)})}else e.each(r,function(i,o){var r=a.getDatasetMeta(o);a.isDatasetVisible(o)&&t(r)&&e.each(i.data,function(t,e){var i=+n.getRightValue(t);isNaN(i)||r.data[e].hidden||(null===n.min?n.min=i:i<n.min&&(n.min=i),null===n.max?n.max=i:i>n.max&&(n.max=i))})});n.min=isFinite(n.min)?n.min:s,n.max=isFinite(n.max)?n.max:u,this.handleTickRangeOptions()},getTickLimit:function(){var n,i=this,a=i.options.ticks;if(i.isHorizontal())n=Math.min(a.maxTicksLimit?a.maxTicksLimit:11,Math.ceil(i.width/50));else{var o=e.getValueOrDefault(a.fontSize,t.defaults.global.defaultFontSize);n=Math.min(a.maxTicksLimit?a.maxTicksLimit:11,Math.ceil(i.height/(2*o)))}return n},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){var e,n=this,i=n.start,a=+n.getRightValue(t),o=n.end-i;return n.isHorizontal()?(e=n.left+n.width/o*(a-i),Math.round(e)):(e=n.bottom-n.height/o*(a-i),Math.round(e))},getValueForPixel:function(t){var e=this,n=e.isHorizontal(),i=n?e.width:e.height,a=(n?t-e.left:e.bottom-t)/i;return e.start+(e.end-e.start)*a},getPixelForTick:function(t){return this.getPixelForValue(this.ticksAsNumbers[t])}});t.scaleService.registerScaleType("linear",i,n)}},{}],46:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=e.noop;t.LinearScaleBase=t.Scale.extend({handleTickRangeOptions:function(){var t=this,n=t.options,i=n.ticks;if(i.beginAtZero){var a=e.sign(t.min),o=e.sign(t.max);a<0&&o<0?t.max=0:a>0&&o>0&&(t.min=0)}void 0!==i.min?t.min=i.min:void 0!==i.suggestedMin&&(null===t.min?t.min=i.suggestedMin:t.min=Math.min(t.min,i.suggestedMin)),void 0!==i.max?t.max=i.max:void 0!==i.suggestedMax&&(null===t.max?t.max=i.suggestedMax:t.max=Math.max(t.max,i.suggestedMax)),t.min===t.max&&(t.max++,i.beginAtZero||t.min--)},getTickLimit:n,handleDirectionalChanges:n,buildTicks:function(){var n=this,i=n.options,a=i.ticks,o=n.getTickLimit();o=Math.max(2,o);var r={maxTicks:o,min:a.min,max:a.max,stepSize:e.getValueOrDefault(a.fixedStepSize,a.stepSize)},l=n.ticks=t.Ticks.generators.linear(r,n);n.handleDirectionalChanges(),n.max=e.max(l),n.min=e.min(l),a.reverse?(l.reverse(),n.start=n.max,n.end=n.min):(n.start=n.min,n.end=n.max)},convertTicksToLabels:function(){var e=this;e.ticksAsNumbers=e.ticks.slice(),e.zeroLineIndex=e.ticks.indexOf(0),t.Scale.prototype.convertTicksToLabels.call(e)}})}},{}],47:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n={position:"left",ticks:{callback:t.Ticks.formatters.logarithmic}},i=t.Scale.extend({determineDataLimits:function(){function t(t){return u?t.xAxisID===n.id:t.yAxisID===n.id}var n=this,i=n.options,a=i.ticks,o=n.chart,r=o.data,l=r.datasets,s=e.getValueOrDefault,u=n.isHorizontal();n.min=null,n.max=null,n.minNotZero=null;var d=i.stacked;if(void 0===d&&e.each(l,function(e,n){if(!d){var i=o.getDatasetMeta(n);o.isDatasetVisible(n)&&t(i)&&void 0!==i.stack&&(d=!0)}}),i.stacked||d){var c={};e.each(l,function(a,r){var l=o.getDatasetMeta(r),s=[l.type,void 0===i.stacked&&void 0===l.stack?r:"",l.stack].join(".");o.isDatasetVisible(r)&&t(l)&&(void 0===c[s]&&(c[s]=[]),e.each(a.data,function(t,e){var a=c[s],o=+n.getRightValue(t);isNaN(o)||l.data[e].hidden||(a[e]=a[e]||0,i.relativePoints?a[e]=100:a[e]+=o)}))}),e.each(c,function(t){var i=e.min(t),a=e.max(t);n.min=null===n.min?i:Math.min(n.min,i),n.max=null===n.max?a:Math.max(n.max,a)})}else e.each(l,function(i,a){var r=o.getDatasetMeta(a);o.isDatasetVisible(a)&&t(r)&&e.each(i.data,function(t,e){var i=+n.getRightValue(t);isNaN(i)||r.data[e].hidden||(null===n.min?n.min=i:i<n.min&&(n.min=i),null===n.max?n.max=i:i>n.max&&(n.max=i),0!==i&&(null===n.minNotZero||i<n.minNotZero)&&(n.minNotZero=i))})});n.min=s(a.min,n.min),n.max=s(a.max,n.max),n.min===n.max&&(0!==n.min&&null!==n.min?(n.min=Math.pow(10,Math.floor(e.log10(n.min))-1),n.max=Math.pow(10,Math.floor(e.log10(n.max))+1)):(n.min=1,n.max=10))},buildTicks:function(){var n=this,i=n.options,a=i.ticks,o={min:a.min,max:a.max},r=n.ticks=t.Ticks.generators.logarithmic(o,n);n.isHorizontal()||r.reverse(),n.max=e.max(r),n.min=e.min(r),a.reverse?(r.reverse(),n.start=n.max,n.end=n.min):(n.start=n.min,n.end=n.max)},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),t.Scale.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){return this.getPixelForValue(this.tickValues[t])},getPixelForValue:function(t){var n,i,a,o=this,r=o.start,l=+o.getRightValue(t),s=o.options,u=s.ticks;return o.isHorizontal()?(a=e.log10(o.end)-e.log10(r),0===l?i=o.left:(n=o.width,i=o.left+n/a*(e.log10(l)-e.log10(r)))):(n=o.height,0!==r||u.reverse?0===o.end&&u.reverse?(a=e.log10(o.start)-e.log10(o.minNotZero),i=l===o.end?o.top:l===o.minNotZero?o.top+.02*n:o.top+.02*n+.98*n/a*(e.log10(l)-e.log10(o.minNotZero))):0===l?i=u.reverse?o.top:o.bottom:(a=e.log10(o.end)-e.log10(r),n=o.height,i=o.bottom-n/a*(e.log10(l)-e.log10(r))):(a=e.log10(o.end)-e.log10(o.minNotZero),i=l===r?o.bottom:l===o.minNotZero?o.bottom-.02*n:o.bottom-.02*n-.98*n/a*(e.log10(l)-e.log10(o.minNotZero)))),i},getValueForPixel:function(t){var n,i,a=this,o=e.log10(a.end)-e.log10(a.start);return a.isHorizontal()?(i=a.width,n=a.start*Math.pow(10,(t-a.left)*o/i)):(i=a.height,n=Math.pow(10,(a.bottom-t)*o/i)/a.start),n}});t.scaleService.registerScaleType("logarithmic",i,n)}},{}],48:[function(t,e,n){"use strict";e.exports=function(t){function e(t){var e=t.options;return e.angleLines.display||e.pointLabels.display?t.chart.data.labels.length:0}function n(t){var e=t.options.pointLabels,n=f.getValueOrDefault(e.fontSize,g.defaultFontSize),i=f.getValueOrDefault(e.fontStyle,g.defaultFontStyle),a=f.getValueOrDefault(e.fontFamily,g.defaultFontFamily),o=f.fontString(n,i,a);return{size:n,style:i,family:a,font:o}}function i(t,e,n){return f.isArray(n)?{w:f.longestText(t,t.font,n),h:n.length*e+1.5*(n.length-1)*e}:{w:t.measureText(n).width,h:e}}function a(t,e,n,i,a){return t===i||t===a?{start:e-n/2,end:e+n/2}:t<i||t>a?{start:e-n-5,end:e}:{start:e,end:e+n+5}}function o(t){var o,r,l,s=n(t),u=Math.min(t.height/2,t.width/2),d={r:t.width,l:0,t:t.height,b:0},c={};t.ctx.font=s.font,t._pointLabelSizes=[];var h=e(t);for(o=0;o<h;o++){l=t.getPointPosition(o,u),r=i(t.ctx,s.size,t.pointLabels[o]||""),t._pointLabelSizes[o]=r;var g=t.getIndexAngle(o),p=f.toDegrees(g)%360,m=a(p,l.x,r.w,0,180),v=a(p,l.y,r.h,90,270);m.start<d.l&&(d.l=m.start,c.l=g),m.end>d.r&&(d.r=m.end,c.r=g),v.start<d.t&&(d.t=v.start,c.t=g),v.end>d.b&&(d.b=v.end,c.b=g)}t.setReductions(u,d,c)}function r(t){var e=Math.min(t.height/2,t.width/2);t.drawingArea=Math.round(e),t.setCenterPoint(0,0,0,0)}function l(t){return 0===t||180===t?"center":t<180?"left":"right"}function s(t,e,n,i){if(f.isArray(e))for(var a=n.y,o=1.5*i,r=0;r<e.length;++r)t.fillText(e[r],n.x,a),a+=o;else t.fillText(e,n.x,n.y)}function u(t,e,n){90===t||270===t?n.y-=e.h/2:(t>270||t<90)&&(n.y-=e.h)}function d(t){var i=t.ctx,a=f.getValueOrDefault,o=t.options,r=o.angleLines,d=o.pointLabels;i.lineWidth=r.lineWidth,i.strokeStyle=r.color;var c=t.getDistanceFromCenterForValue(o.reverse?t.min:t.max),h=n(t);i.textBaseline="top";for(var p=e(t)-1;p>=0;p--){if(r.display){var m=t.getPointPosition(p,c);i.beginPath(),i.moveTo(t.xCenter,t.yCenter),i.lineTo(m.x,m.y),i.stroke(),i.closePath()}if(d.display){var v=t.getPointPosition(p,c+5),b=a(d.fontColor,g.defaultFontColor);i.font=h.font,i.fillStyle=b;var x=t.getIndexAngle(p),y=f.toDegrees(x);i.textAlign=l(y),u(y,t._pointLabelSizes[p],v),s(i,t.pointLabels[p]||"",v,h.size)}}}function c(t,n,i,a){var o=t.ctx;if(o.strokeStyle=f.getValueAtIndexOrDefault(n.color,a-1),o.lineWidth=f.getValueAtIndexOrDefault(n.lineWidth,a-1),t.options.gridLines.circular)o.beginPath(),o.arc(t.xCenter,t.yCenter,i,0,2*Math.PI),o.closePath(),o.stroke();else{var r=e(t);if(0===r)return;o.beginPath();var l=t.getPointPosition(0,i);o.moveTo(l.x,l.y);for(var s=1;s<r;s++)l=t.getPointPosition(s,i),o.lineTo(l.x,l.y);o.closePath(),o.stroke()}}function h(t){return f.isNumber(t)?t:0}var f=t.helpers,g=t.defaults.global,p={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},gridLines:{circular:!1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:t.Ticks.formatters.linear},pointLabels:{display:!0,fontSize:10,callback:function(t){return t}}},m=t.LinearScaleBase.extend({setDimensions:function(){var t=this,e=t.options,n=e.ticks;t.width=t.maxWidth,t.height=t.maxHeight,t.xCenter=Math.round(t.width/2),t.yCenter=Math.round(t.height/2);var i=f.min([t.height,t.width]),a=f.getValueOrDefault(n.fontSize,g.defaultFontSize);t.drawingArea=e.display?i/2-(a/2+n.backdropPaddingY):i/2},determineDataLimits:function(){var t=this,e=t.chart,n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;f.each(e.data.datasets,function(a,o){if(e.isDatasetVisible(o)){var r=e.getDatasetMeta(o);f.each(a.data,function(e,a){var o=+t.getRightValue(e);isNaN(o)||r.data[a].hidden||(n=Math.min(o,n),i=Math.max(o,i))})}}),t.min=n===Number.POSITIVE_INFINITY?0:n,t.max=i===Number.NEGATIVE_INFINITY?0:i,t.handleTickRangeOptions()},getTickLimit:function(){var t=this.options.ticks,e=f.getValueOrDefault(t.fontSize,g.defaultFontSize);return Math.min(t.maxTicksLimit?t.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*e)))},convertTicksToLabels:function(){var e=this;t.LinearScaleBase.prototype.convertTicksToLabels.call(e),e.pointLabels=e.chart.data.labels.map(e.options.pointLabels.callback,e)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){this.options.pointLabels.display?o(this):r(this)},setReductions:function(t,e,n){var i=this,a=e.l/Math.sin(n.l),o=Math.max(e.r-i.width,0)/Math.sin(n.r),r=-e.t/Math.cos(n.t),l=-Math.max(e.b-i.height,0)/Math.cos(n.b);a=h(a),o=h(o),r=h(r),l=h(l),i.drawingArea=Math.min(Math.round(t-(a+o)/2),Math.round(t-(r+l)/2)),i.setCenterPoint(a,o,r,l)},setCenterPoint:function(t,e,n,i){var a=this,o=a.width-e-a.drawingArea,r=t+a.drawingArea,l=n+a.drawingArea,s=a.height-i-a.drawingArea;a.xCenter=Math.round((r+o)/2+a.left),a.yCenter=Math.round((l+s)/2+a.top)},getIndexAngle:function(t){var n=2*Math.PI/e(this),i=this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0,a=i*Math.PI*2/360;return t*n+a},getDistanceFromCenterForValue:function(t){var e=this;if(null===t)return 0;var n=e.drawingArea/(e.max-e.min);return e.options.reverse?(e.max-t)*n:(t-e.min)*n},getPointPosition:function(t,e){var n=this,i=n.getIndexAngle(t)-Math.PI/2;return{x:Math.round(Math.cos(i)*e)+n.xCenter,y:Math.round(Math.sin(i)*e)+n.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(){var t=this,e=t.min,n=t.max;return t.getPointPositionForValue(0,t.beginAtZero?0:e<0&&n<0?n:e>0&&n>0?e:0)},draw:function(){var t=this,e=t.options,n=e.gridLines,i=e.ticks,a=f.getValueOrDefault;if(e.display){var o=t.ctx,r=a(i.fontSize,g.defaultFontSize),l=a(i.fontStyle,g.defaultFontStyle),s=a(i.fontFamily,g.defaultFontFamily),u=f.fontString(r,l,s);f.each(t.ticks,function(l,s){if(s>0||e.reverse){var d=t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]),h=t.yCenter-d;if(n.display&&0!==s&&c(t,n,d,s),i.display){var f=a(i.fontColor,g.defaultFontColor);if(o.font=u,i.showLabelBackdrop){var p=o.measureText(l).width;o.fillStyle=i.backdropColor,o.fillRect(t.xCenter-p/2-i.backdropPaddingX,h-r/2-i.backdropPaddingY,p+2*i.backdropPaddingX,r+2*i.backdropPaddingY)}o.textAlign="center",o.textBaseline="middle",o.fillStyle=f,o.fillText(l,t.xCenter,h)}}}),(e.angleLines.display||e.pointLabels.display)&&d(t)}}});t.scaleService.registerScaleType("radialLinear",m,p)}},{}],49:[function(t,e,n){"use strict";var i=t(1);i="function"==typeof i?i:window.moment,e.exports=function(t){function e(t,e){var n=t.options.time;if("string"==typeof n.parser)return i(e,n.parser);if("function"==typeof n.parser)return n.parser(e);if("function"==typeof e.getMonth||"number"==typeof e)return i(e);if(e.isValid&&e.isValid())return e;var a=n.format;return"string"!=typeof a&&a.call?(console.warn("options.time.format is deprecated and replaced by options.time.parser."),a(e)):i(e,a)}function n(t,e,n,i){for(var a,o=Object.keys(l),r=o.length,s=o.indexOf(t);s<r;s++){a=o[s];var u=l[a],d=u.steps&&u.steps[u.steps.length-1]||u.maxStep;if(void 0===d||Math.ceil((n-e)/(d*u.size))<=i)break}return a}function a(t,e,n,i){var a=l[n],o=a.size,r=Math.ceil((e-t)/o),s=1,u=e-t;if(a.steps)for(var d=a.steps.length,c=0;c<d&&r>i;c++)s=a.steps[c],r=Math.ceil(u/(o*s));else for(;r>i&&i>0;)++s,r=Math.ceil(u/(o*s));return s}function o(t,e,n){var a=[];if(t.maxTicks){var o=t.stepSize;a.push(void 0!==t.min?t.min:n.min);for(var r=i(n.min);r.add(o,t.unit).valueOf()<n.max;)a.push(r.valueOf());var l=t.max||n.max;a[a.length-1]!==l&&a.push(l)}return a}var r=t.helpers,l={millisecond:{size:1,steps:[1,2,5,10,20,50,100,250,500]},second:{size:1e3,steps:[1,2,5,10,30]},minute:{size:6e4,steps:[1,2,5,10,30]},hour:{size:36e5,steps:[1,2,3,6,12]},day:{size:864e5,steps:[1,2,5]},week:{size:6048e5,maxStep:4},month:{size:2628e6,maxStep:3},quarter:{size:7884e6,maxStep:4},year:{size:3154e7,maxStep:!1}},s={position:"bottom",time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm:ss a",hour:"MMM D, hA",day:"ll",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}},ticks:{autoSkip:!1}};t.Ticks.generators.time=function(t,e){var n,a,r=t.isoWeekday;return"week"===t.unit&&r!==!1?(n=i(e.min).startOf("isoWeek").isoWeekday(r).valueOf(),a=i(e.max).startOf("isoWeek").isoWeekday(r),e.max-a>0&&a.add(1,"week"),a=a.valueOf()):(n=i(e.min).startOf(t.unit).valueOf(),a=i(e.max).startOf(t.unit),e.max-a>0&&a.add(1,t.unit),a=a.valueOf()),o(t,e,{min:n,max:a})};var u=t.Scale.extend({initialize:function(){if(!i)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");t.Scale.prototype.initialize.call(this)},determineDataLimits:function(){var t,n=this,i=n.options.time,a=Number.MAX_SAFE_INTEGER,o=Number.MIN_SAFE_INTEGER,l=n.chart.data,s={labels:[],datasets:[]};r.each(l.labels,function(r,l){var u=e(n,r);u.isValid()&&(i.round&&u.startOf(i.round),t=u.valueOf(),a=Math.min(t,a),o=Math.max(t,o),s.labels[l]=t)}),r.each(l.datasets,function(l,u){var d=[];"object"==typeof l.data[0]&&null!==l.data[0]&&n.chart.isDatasetVisible(u)?r.each(l.data,function(r,l){var s=e(n,n.getRightValue(r));s.isValid()&&(i.round&&s.startOf(i.round),t=s.valueOf(),a=Math.min(t,a),o=Math.max(t,o),d[l]=t)}):d=s.labels.slice(),s.datasets[u]=d}),n.dataMin=a,n.dataMax=o,n._parsedData=s},buildTicks:function(){var i,o,l=this,s=l.options.time,u=l.dataMin,d=l.dataMax;if(s.min){var c=e(l,s.min);s.round&&c.round(s.round),i=c.valueOf()}s.max&&(o=e(l,s.max).valueOf());var h=l.getLabelCapacity(i||u),f=s.unit||n(s.minUnit,i||u,o||d,h);l.displayFormat=s.displayFormats[f];var g=s.stepSize||a(i||u,o||d,f,h);l.ticks=t.Ticks.generators.time({maxTicks:h,min:i,max:o,stepSize:g,unit:f,isoWeekday:s.isoWeekday},{min:u,max:d}),l.max=r.max(l.ticks),l.min=r.min(l.ticks)},getLabelForIndex:function(t,n){var i=this,a=i.chart.data.labels&&t<i.chart.data.labels.length?i.chart.data.labels[t]:"",o=i.chart.data.datasets[n].data[t];return null!==o&&"object"==typeof o&&(a=i.getRightValue(o)),i.options.time.tooltipFormat&&(a=e(i,a).format(i.options.time.tooltipFormat)),a},tickFormatFunction:function(t,e,n){var i=t.format(this.displayFormat),a=this.options.ticks,o=r.getValueOrDefault(a.callback,a.userCallback);return o?o(i,e,n):i},convertTicksToLabels:function(){var t=this;t.ticksAsTimestamps=t.ticks,t.ticks=t.ticks.map(function(t){return i(t)}).map(t.tickFormatFunction,t)},getPixelForOffset:function(t){var e=this,n=e.max-e.min,i=n?(t-e.min)/n:0;if(e.isHorizontal()){var a=e.width*i;return e.left+Math.round(a)}var o=e.height*i;return e.top+Math.round(o)},getPixelForValue:function(t,n,i){var a=this,o=null;if(void 0!==n&&void 0!==i&&(o=a._parsedData.datasets[i][n]),null===o&&(t&&t.isValid||(t=e(a,a.getRightValue(t))),t&&t.isValid&&t.isValid()&&(o=t.valueOf())),null!==o)return a.getPixelForOffset(o)},getPixelForTick:function(t){return this.getPixelForOffset(this.ticksAsTimestamps[t])},getValueForPixel:function(t){var e=this,n=e.isHorizontal()?e.width:e.height,a=(t-(e.isHorizontal()?e.left:e.top))/n;return i(e.min+a*(e.max-e.min))},getLabelWidth:function(e){var n=this,i=n.options.ticks,a=n.ctx.measureText(e).width,o=Math.cos(r.toRadians(i.maxRotation)),l=Math.sin(r.toRadians(i.maxRotation)),s=r.getValueOrDefault(i.fontSize,t.defaults.global.defaultFontSize);return a*o+s*l},getLabelCapacity:function(t){var e=this;e.displayFormat=e.options.time.displayFormats.millisecond;var n=e.tickFormatFunction(i(t),0,[]),a=e.getLabelWidth(n),o=e.isHorizontal()?e.width:e.height,r=o/a;return r}});t.scaleService.registerScaleType("time",u,s)}},{1:1}]},{},[7])(7)});
;/* =========================================================
 * bootstrap-datepicker.js
 * Repo: https://github.com/eternicode/bootstrap-datepicker/
 * Demo: http://eternicode.github.io/bootstrap-datepicker/
 * Docs: http://bootstrap-datepicker.readthedocs.org/
 * Forked from http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Started by Stefan Petre; improvements by Andrew Rowls + contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

(function($, undefined){

	var $window = $(window);

	function UTCDate(){
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday(){
		var today = new Date();
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
	}
	function alias(method){
		return function(){
			return this[method].apply(this, arguments);
		};
	}

	var DateArray = (function(){
		var extras = {
			get: function(i){
				return this.slice(i)[0];
			},
			contains: function(d){
				// Array.indexOf is not cross-browser;
				// $.inArray doesn't work with Dates
				var val = d && d.valueOf();
				for (var i=0, l=this.length; i < l; i++)
					if (this[i].valueOf() === val)
						return i;
				return -1;
			},
			remove: function(i){
				this.splice(i,1);
			},
			replace: function(new_array){
				if (!new_array)
					return;
				if (!$.isArray(new_array))
					new_array = [new_array];
				this.clear();
				this.push.apply(this, new_array);
			},
			clear: function(){
				this.length = 0;
			},
			copy: function(){
				var a = new DateArray();
				a.replace(this);
				return a;
			}
		};

		return function(){
			var a = [];
			a.push.apply(a, arguments);
			$.extend(a, extras);
			return a;
		};
	})();


	// Picker object

	var Datepicker = function(element, options){
		this.dates = new DateArray();
		this.viewDate = UTCToday();
		this.focusDate = null;

		this._process_options(options);

		this.element = $(element);
		this.isInline = false;
		this.isInput = this.element.is('input');
		this.component = this.element.is('.date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
		this.hasInput = this.component && this.element.find('input').length;
		if (this.component && this.component.length === 0)
			this.component = false;

		this.picker = $(DPGlobal.template);
		this._buildEvents();
		this._attachEvents();

		if (this.isInline){
			this.picker.addClass('datepicker-inline').appendTo(this.element);
		}
		else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}

		if (this.o.rtl){
			this.picker.addClass('datepicker-rtl');
		}

		this.viewMode = this.o.startView;

		if (this.o.calendarWeeks)
			this.picker.find('tfoot th.today')
						.attr('colspan', function(i, val){
							return parseInt(val) + 1;
						});

		this._allow_update = false;

		this.setStartDate(this._o.startDate);
		this.setEndDate(this._o.endDate);
		this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);

		this.fillDow();
		this.fillMonths();

		this._allow_update = true;

		this.update();
		this.showMode();

		if (this.isInline){
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_process_options: function(opts){
			// Store raw options for reference
			this._o = $.extend({}, this._o, opts);
			// Processed options
			var o = this.o = $.extend({}, this._o);

			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			var lang = o.language;
			if (!dates[lang]){
				lang = lang.split('-')[0];
				if (!dates[lang])
					lang = defaults.language;
			}
			o.language = lang;

			switch (o.startView){
				case 2:
				case 'decade':
					o.startView = 2;
					break;
				case 1:
				case 'year':
					o.startView = 1;
					break;
				default:
					o.startView = 0;
			}

			switch (o.minViewMode){
				case 1:
				case 'months':
					o.minViewMode = 1;
					break;
				case 2:
				case 'years':
					o.minViewMode = 2;
					break;
				default:
					o.minViewMode = 0;
			}

			o.startView = Math.max(o.startView, o.minViewMode);

			// true, false, or Number > 0
			if (o.multidate !== true){
				o.multidate = Number(o.multidate) || false;
				if (o.multidate !== false)
					o.multidate = Math.max(0, o.multidate);
				else
					o.multidate = 1;
			}
			o.multidateSeparator = String(o.multidateSeparator);

			o.weekStart %= 7;
			o.weekEnd = ((o.weekStart + 6) % 7);

			var format = DPGlobal.parseFormat(o.format);
			if (o.startDate !== -Infinity){
				if (!!o.startDate){
					if (o.startDate instanceof Date)
						o.startDate = this._local_to_utc(this._zero_time(o.startDate));
					else
						o.startDate = DPGlobal.parseDate(o.startDate, format, o.language);
				}
				else {
					o.startDate = -Infinity;
				}
			}
			if (o.endDate !== Infinity){
				if (!!o.endDate){
					if (o.endDate instanceof Date)
						o.endDate = this._local_to_utc(this._zero_time(o.endDate));
					else
						o.endDate = DPGlobal.parseDate(o.endDate, format, o.language);
				}
				else {
					o.endDate = Infinity;
				}
			}

			o.daysOfWeekDisabled = o.daysOfWeekDisabled||[];
			if (!$.isArray(o.daysOfWeekDisabled))
				o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
			o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function(d){
				return parseInt(d, 10);
			});

			var plc = String(o.orientation).toLowerCase().split(/\s+/g),
				_plc = o.orientation.toLowerCase();
			plc = $.grep(plc, function(word){
				return (/^auto|left|right|top|bottom$/).test(word);
			});
			o.orientation = {x: 'auto', y: 'auto'};
			if (!_plc || _plc === 'auto')
				; // no action
			else if (plc.length === 1){
				switch (plc[0]){
					case 'top':
					case 'bottom':
						o.orientation.y = plc[0];
						break;
					case 'left':
					case 'right':
						o.orientation.x = plc[0];
						break;
				}
			}
			else {
				_plc = $.grep(plc, function(word){
					return (/^left|right$/).test(word);
				});
				o.orientation.x = _plc[0] || 'auto';

				_plc = $.grep(plc, function(word){
					return (/^top|bottom$/).test(word);
				});
				o.orientation.y = _plc[0] || 'auto';
			}
		},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function(evs){
			for (var i=0, el, ch, ev; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.on(ev, ch);
			}
		},
		_unapplyEvents: function(evs){
			for (var i=0, el, ev, ch; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.off(ev, ch);
			}
		},
		_buildEvents: function(){
			if (this.isInput){ // single input
				this._events = [
					[this.element, {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(function(e){
							if ($.inArray(e.keyCode, [27,37,39,38,40,32,13,9]) === -1)
								this.update();
						}, this),
						keydown: $.proxy(this.keydown, this)
					}]
				];
			}
			else if (this.component && this.hasInput){ // component: input + button
				this._events = [
					// For components that are not readonly, allow keyboard nav
					[this.element.find('input'), {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(function(e){
							if ($.inArray(e.keyCode, [27,37,39,38,40,32,13,9]) === -1)
								this.update();
						}, this),
						keydown: $.proxy(this.keydown, this)
					}],
					[this.component, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			else if (this.element.is('div')){  // inline datepicker
				this.isInline = true;
			}
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			this._events.push(
				// Component: listen for blur on element descendants
				[this.element, '*', {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}],
				// Input: listen for blur on element
				[this.element, {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}]
			);

			this._secondaryEvents = [
				[this.picker, {
					click: $.proxy(this.click, this)
				}],
				[$(window), {
					resize: $.proxy(this.place, this)
				}],
				[$(document), {
					'mousedown touchstart': $.proxy(function(e){
						// Clicked outside the datepicker, hide it
						if (!(
							this.element.is(e.target) ||
							this.element.find(e.target).length ||
							this.picker.is(e.target) ||
							this.picker.find(e.target).length
						)){
							this.hide();
						}
					}, this)
				}]
			];
		},
		_attachEvents: function(){
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function(){
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents: function(){
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents);
		},
		_detachSecondaryEvents: function(){
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger: function(event, altdate){
			var date = altdate || this.dates.get(-1),
				local_date = this._utc_to_local(date);

			this.element.trigger({
				type: event,
				date: local_date,
				dates: $.map(this.dates, this._utc_to_local),
				format: $.proxy(function(ix, format){
					if (arguments.length === 0){
						ix = this.dates.length - 1;
						format = this.o.format;
					}
					else if (typeof ix === 'string'){
						format = ix;
						ix = this.dates.length - 1;
					}
					format = format || this.o.format;
					var date = this.dates.get(ix);
					return DPGlobal.formatDate(date, format, this.o.language);
				}, this)
			});
		},

		show: function(){
			if (!this.isInline)
				this.picker.appendTo('body');
			this.picker.show();
			this.place();
			this._attachSecondaryEvents();
			this._trigger('show');
		},

		hide: function(){
			if (this.isInline)
				return;
			if (!this.picker.is(':visible'))
				return;
			this.focusDate = null;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.viewMode = this.o.startView;
			this.showMode();

			if (
				this.o.forceParse &&
				(
					this.isInput && this.element.val() ||
					this.hasInput && this.element.find('input').val()
				)
			)
				this.setValue();
			this._trigger('hide');
		},

		remove: function(){
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput){
				delete this.element.data().date;
			}
		},

		_utc_to_local: function(utc){
			return utc && new Date(utc.getTime() + (utc.getTimezoneOffset()*60000));
		},
		_local_to_utc: function(local){
			return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));
		},
		_zero_time: function(local){
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
		},
		_zero_utc_time: function(utc){
			return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
		},

		getDates: function(){
			return $.map(this.dates, this._utc_to_local);
		},

		getUTCDates: function(){
			return $.map(this.dates, function(d){
				return new Date(d);
			});
		},

		getDate: function(){
			return this._utc_to_local(this.getUTCDate());
		},

		getUTCDate: function(){
			return new Date(this.dates.get(-1));
		},

		setDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, args);
			this._trigger('changeDate');
			this.setValue();
		},

		setUTCDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, $.map(args, this._utc_to_local));
			this._trigger('changeDate');
			this.setValue();
		},

		setDate: alias('setDates'),
		setUTCDate: alias('setUTCDates'),

		setValue: function(){
			var formatted = this.getFormattedDate();
			if (!this.isInput){
				if (this.component){
					this.element.find('input').val(formatted).change();
				}
			}
			else {
				this.element.val(formatted).change();
			}
		},

		getFormattedDate: function(format){
			if (format === undefined)
				format = this.o.format;

			var lang = this.o.language;
			return $.map(this.dates, function(d){
				return DPGlobal.formatDate(d, format, lang);
			}).join(this.o.multidateSeparator);
		},

		setStartDate: function(startDate){
			this._process_options({startDate: startDate});
			this.update();
			this.updateNavArrows();
		},

		setEndDate: function(endDate){
			this._process_options({endDate: endDate});
			this.update();
			this.updateNavArrows();
		},

		setDaysOfWeekDisabled: function(daysOfWeekDisabled){
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
			this.update();
			this.updateNavArrows();
		},

		place: function(){
			if (this.isInline)
				return;
			var calendarWidth = this.picker.outerWidth(),
				calendarHeight = this.picker.outerHeight(),
				visualPadding = 10,
				windowWidth = $window.width(),
				windowHeight = $window.height(),
				scrollTop = $window.scrollTop();

			var zIndex = parseInt(this.element.parents().filter(function(){
					return $(this).css('z-index') !== 'auto';
				}).first().css('z-index'))+10;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var left = offset.left,
				top = offset.top;

			this.picker.removeClass(
				'datepicker-orient-top datepicker-orient-bottom '+
				'datepicker-orient-right datepicker-orient-left'
			);

			if (this.o.orientation.x !== 'auto'){
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
				if (this.o.orientation.x === 'right')
					left -= calendarWidth - width;
			}
			// auto x orientation is best-placement: if it crosses a window
			// edge, fudge it sideways
			else {
				// Default to left
				this.picker.addClass('datepicker-orient-left');
				if (offset.left < 0)
					left -= offset.left - visualPadding;
				else if (offset.left + calendarWidth > windowWidth)
					left = windowWidth - calendarWidth - visualPadding;
			}

			// auto y orientation is best-situation: top or bottom, no fudging,
			// decision based on which shows more of the calendar
			var yorient = this.o.orientation.y,
				top_overflow, bottom_overflow;
			if (yorient === 'auto'){
				top_overflow = -scrollTop + offset.top - calendarHeight;
				bottom_overflow = scrollTop + windowHeight - (offset.top + height + calendarHeight);
				if (Math.max(top_overflow, bottom_overflow) === bottom_overflow)
					yorient = 'top';
				else
					yorient = 'bottom';
			}
			this.picker.addClass('datepicker-orient-' + yorient);
			if (yorient === 'top')
				top += height;
			else
				top -= calendarHeight + parseInt(this.picker.css('padding-top'));

			this.picker.css({
				top: top,
				left: left,
				zIndex: zIndex
			});
		},

		_allow_update: true,
		update: function(){
			if (!this._allow_update)
				return;

			var oldDates = this.dates.copy(),
				dates = [],
				fromArgs = false;
			if (arguments.length){
				$.each(arguments, $.proxy(function(i, date){
					if (date instanceof Date)
						date = this._local_to_utc(date);
					dates.push(date);
				}, this));
				fromArgs = true;
			}
			else {
				dates = this.isInput
						? this.element.val()
						: this.element.data('date') || this.element.find('input').val();
				if (dates && this.o.multidate)
					dates = dates.split(this.o.multidateSeparator);
				else
					dates = [dates];
				delete this.element.data().date;
			}

			dates = $.map(dates, $.proxy(function(date){
				return DPGlobal.parseDate(date, this.o.format, this.o.language);
			}, this));
			dates = $.grep(dates, $.proxy(function(date){
				return (
					date < this.o.startDate ||
					date > this.o.endDate ||
					!date
				);
			}, this), true);
			this.dates.replace(dates);

			if (this.dates.length)
				this.viewDate = new Date(this.dates.get(-1));
			else if (this.viewDate < this.o.startDate)
				this.viewDate = new Date(this.o.startDate);
			else if (this.viewDate > this.o.endDate)
				this.viewDate = new Date(this.o.endDate);

			if (fromArgs){
				// setting date by clicking
				this.setValue();
			}
			else if (dates.length){
				// setting date by typing
				if (String(oldDates) !== String(this.dates))
					this._trigger('changeDate');
			}
			if (!this.dates.length && oldDates.length)
				this._trigger('clearDate');

			this.fill();
		},

		fillDow: function(){
			var dowCnt = this.o.weekStart,
				html = '<tr>';
			if (this.o.calendarWeeks){
				var cell = '<th class="cw">&nbsp;</th>';
				html += cell;
				this.picker.find('.datepicker-days thead tr:first-child').prepend(cell);
			}
			while (dowCnt < this.o.weekStart + 7){
				html += '<th class="dow">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},

		fillMonths: function(){
			var html = '',
			i = 0;
			while (i < 12){
				html += '<span class="month">'+dates[this.o.language].monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function(range){
			if (!range || !range.length)
				delete this.range;
			else
				this.range = $.map(range, function(d){
					return d.valueOf();
				});
			this.fill();
		},

		getClassNames: function(date){
			var cls = [],
				year = this.viewDate.getUTCFullYear(),
				month = this.viewDate.getUTCMonth(),
				today = new Date();
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){
				cls.push('old');
			}
			else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){
				cls.push('new');
			}
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
				cls.push('focused');
			// Compare internal UTC date with local today, not UTC today
			if (this.o.todayHighlight &&
				date.getUTCFullYear() === today.getFullYear() &&
				date.getUTCMonth() === today.getMonth() &&
				date.getUTCDate() === today.getDate()){
				cls.push('today');
			}
			if (this.dates.contains(date) !== -1)
				cls.push('active');
			if (date.valueOf() < this.o.startDate || date.valueOf() > this.o.endDate ||
				$.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1){
				cls.push('disabled');
			}
			if (this.range){
				if (date > this.range[0] && date < this.range[this.range.length-1]){
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) !== -1){
					cls.push('selected');
				}
			}
			return cls;
		},

		fill: function(){
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				todaytxt = dates[this.o.language].today || dates['en'].today || '',
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
				tooltip;
			this.picker.find('.datepicker-days thead th.datepicker-switch')
						.text(dates[this.o.language].months[month]+' '+year);
			this.picker.find('tfoot th.today')
						.text(todaytxt)
						.toggle(this.o.todayBtn !== false);
			this.picker.find('tfoot th.clear')
						.text(cleartxt)
						.toggle(this.o.clearBtn !== false);
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month-1, 28),
				day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
			prevMonth.setUTCDate(day);
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName;
			while (prevMonth.valueOf() < nextMonth){
				if (prevMonth.getUTCDay() === this.o.weekStart){
					html.push('<tr>');
					if (this.o.calendarWeeks){
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
							// Start of current week: based on weekstart/current date
							ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
							// Thursday of this week
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
							// First Thursday of year, year from thursday
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay())%7*864e5),
							// Calendar week: ms between thursdays, div ms per day, div 7 days
							calWeek =  (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">'+ calWeek +'</td>');

					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				if (this.o.beforeShowDay !== $.noop){
					var before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
					if (before === undefined)
						before = {};
					else if (typeof(before) === 'boolean')
						before = {enabled: before};
					else if (typeof(before) === 'string')
						before = {classes: before};
					if (before.enabled === false)
						clsName.push('disabled');
					if (before.classes)
						clsName = clsName.concat(before.classes.split(/\s+/));
					if (before.tooltip)
						tooltip = before.tooltip;
				}

				clsName = $.unique(clsName);
				html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + '>'+prevMonth.getUTCDate() + '</td>');
				if (prevMonth.getUTCDay() === this.o.weekEnd){
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));

			var months = this.picker.find('.datepicker-months')
						.find('th:eq(1)')
							.text(year)
							.end()
						.find('span').removeClass('active');

			$.each(this.dates, function(i, d){
				if (d.getUTCFullYear() === year)
					months.eq(d.getUTCMonth()).addClass('active');
			});

			if (year < startYear || year > endYear){
				months.addClass('disabled');
			}
			if (year === startYear){
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year === endYear){
				months.slice(endMonth+1).addClass('disabled');
			}

			html = '';
			year = parseInt(year/10, 10) * 10;
			var yearCont = this.picker.find('.datepicker-years')
								.find('th:eq(1)')
									.text(year + '-' + (year + 9))
									.end()
								.find('td');
			year -= 1;
			var years = $.map(this.dates, function(d){
					return d.getUTCFullYear();
				}),
				classes;
			for (var i = -1; i < 11; i++){
				classes = ['year'];
				if (i === -1)
					classes.push('old');
				else if (i === 10)
					classes.push('new');
				if ($.inArray(year, years) !== -1)
					classes.push('active');
				if (year < startYear || year > endYear)
					classes.push('disabled');
				html += '<span class="' + classes.join(' ') + '">'+year+'</span>';
				year += 1;
			}
			yearCont.html(html);
		},

		updateNavArrows: function(){
			if (!this._allow_update)
				return;

			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth();
			switch (this.viewMode){
				case 0:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
				case 1:
				case 2:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear()){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear()){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
			}
		},

		click: function(e){
			e.preventDefault();
			var target = $(e.target).closest('span, td, th'),
				year, month, day;
			if (target.length === 1){
				switch (target[0].nodeName.toLowerCase()){
					case 'th':
						switch (target[0].className){
							case 'datepicker-switch':
								this.showMode(1);
								break;
							case 'prev':
							case 'next':
								var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1);
								switch (this.viewMode){
									case 0:
										this.viewDate = this.moveMonth(this.viewDate, dir);
										this._trigger('changeMonth', this.viewDate);
										break;
									case 1:
									case 2:
										this.viewDate = this.moveYear(this.viewDate, dir);
										if (this.viewMode === 1)
											this._trigger('changeYear', this.viewDate);
										break;
								}
								this.fill();
								break;
							case 'today':
								var date = new Date();
								date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

								this.showMode(-2);
								var which = this.o.todayBtn === 'linked' ? null : 'view';
								this._setDate(date, which);
								break;
							case 'clear':
								var element;
								if (this.isInput)
									element = this.element;
								else if (this.component)
									element = this.element.find('input');
								if (element)
									element.val("").change();
								this.update();
								this._trigger('changeDate');
								if (this.o.autoclose)
									this.hide();
								break;
						}
						break;
					case 'span':
						if (!target.is('.disabled')){
							this.viewDate.setUTCDate(1);
							if (target.is('.month')){
								day = 1;
								month = target.parent().find('span').index(target);
								year = this.viewDate.getUTCFullYear();
								this.viewDate.setUTCMonth(month);
								this._trigger('changeMonth', this.viewDate);
								if (this.o.minViewMode === 1){
									this._setDate(UTCDate(year, month, day));
								}
							}
							else {
								day = 1;
								month = 0;
								year = parseInt(target.text(), 10)||0;
								this.viewDate.setUTCFullYear(year);
								this._trigger('changeYear', this.viewDate);
								if (this.o.minViewMode === 2){
									this._setDate(UTCDate(year, month, day));
								}
							}
							this.showMode(-1);
							this.fill();
						}
						break;
					case 'td':
						if (target.is('.day') && !target.is('.disabled')){
							day = parseInt(target.text(), 10)||1;
							year = this.viewDate.getUTCFullYear();
							month = this.viewDate.getUTCMonth();
							if (target.is('.old')){
								if (month === 0){
									month = 11;
									year -= 1;
								}
								else {
									month -= 1;
								}
							}
							else if (target.is('.new')){
								if (month === 11){
									month = 0;
									year += 1;
								}
								else {
									month += 1;
								}
							}
							this._setDate(UTCDate(year, month, day));
						}
						break;
				}
			}
			if (this.picker.is(':visible') && this._focused_from){
				$(this._focused_from).focus();
			}
			delete this._focused_from;
		},

		_toggle_multidate: function(date){
			var ix = this.dates.contains(date);
			if (!date){
				this.dates.clear();
			}
			else if (ix !== -1){
				this.dates.remove(ix);
			}
			else {
				this.dates.push(date);
			}
			if (typeof this.o.multidate === 'number')
				while (this.dates.length > this.o.multidate)
					this.dates.remove(0);
		},

		_setDate: function(date, which){
			if (!which || which === 'date')
				this._toggle_multidate(date && new Date(date));
			if (!which || which  === 'view')
				this.viewDate = date && new Date(date);

			this.fill();
			this.setValue();
			this._trigger('changeDate');
			var element;
			if (this.isInput){
				element = this.element;
			}
			else if (this.component){
				element = this.element.find('input');
			}
			if (element){
				element.change();
			}
			if (this.o.autoclose && (!which || which === 'date')){
				this.hide();
			}
		},

		moveMonth: function(date, dir){
			if (!date)
				return undefined;
			if (!dir)
				return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag === 1){
				test = dir === -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function(){
						return new_date.getUTCMonth() === month;
					}
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function(){
						return new_date.getUTCMonth() !== new_month;
					};
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				if (new_month < 0 || new_month > 11)
					new_month = (new_month + 12) % 12;
			}
			else {
				// For magnitudes >1, move one month at a time...
				for (var i=0; i < mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function(){
					return new_month !== new_date.getUTCMonth();
				};
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()){
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function(date, dir){
			return this.moveMonth(date, dir*12);
		},

		dateWithinRange: function(date){
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function(e){
			if (this.picker.is(':not(:visible)')){
				if (e.keyCode === 27) // allow escape to hide and re-show picker
					this.show();
				return;
			}
			var dateChanged = false,
				dir, newDate, newViewDate,
				focusDate = this.focusDate || this.viewDate;
			switch (e.keyCode){
				case 27: // escape
					if (this.focusDate){
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
					}
					else
						this.hide();
					e.preventDefault();
					break;
				case 37: // left
				case 39: // right
					if (!this.o.keyboardNavigation)
						break;
					dir = e.keyCode === 37 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveYear(focusDate, dir);
						this._trigger('changeYear', this.viewDate);
					}
					else if (e.shiftKey){
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveMonth(focusDate, dir);
						this._trigger('changeMonth', this.viewDate);
					}
					else {
						newDate = new Date(this.dates.get(-1) || UTCToday());
						newDate.setUTCDate(newDate.getUTCDate() + dir);
						newViewDate = new Date(focusDate);
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir);
					}
					if (this.dateWithinRange(newDate)){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 38: // up
				case 40: // down
					if (!this.o.keyboardNavigation)
						break;
					dir = e.keyCode === 38 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveYear(focusDate, dir);
						this._trigger('changeYear', this.viewDate);
					}
					else if (e.shiftKey){
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveMonth(focusDate, dir);
						this._trigger('changeMonth', this.viewDate);
					}
					else {
						newDate = new Date(this.dates.get(-1) || UTCToday());
						newDate.setUTCDate(newDate.getUTCDate() + dir * 7);
						newViewDate = new Date(focusDate);
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir * 7);
					}
					if (this.dateWithinRange(newDate)){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 32: // spacebar
					// Spacebar is used in manually typing dates in some formats.
					// As such, its behavior should not be hijacked.
					break;
				case 13: // enter
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
					this._toggle_multidate(focusDate);
					dateChanged = true;
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					if (this.picker.is(':visible')){
						e.preventDefault();
						if (this.o.autoclose)
							this.hide();
					}
					break;
				case 9: // tab
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide();
					break;
			}
			if (dateChanged){
				if (this.dates.length)
					this._trigger('changeDate');
				else
					this._trigger('clearDate');
				var element;
				if (this.isInput){
					element = this.element;
				}
				else if (this.component){
					element = this.element.find('input');
				}
				if (element){
					element.change();
				}
			}
		},

		showMode: function(dir){
			if (dir){
				this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + dir));
			}
			this.picker
				.find('>div')
				.hide()
				.filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName)
					.css('display', 'block');
			this.updateNavArrows();
		}
	};

	var DateRangePicker = function(element, options){
		this.element = $(element);
		this.inputs = $.map(options.inputs, function(i){
			return i.jquery ? i[0] : i;
		});
		delete options.inputs;

		$(this.inputs)
			.datepicker(options)
			.bind('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function(i){
			return $(i).data('datepicker');
		});
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function(){
			this.dates = $.map(this.pickers, function(i){
				return i.getUTCDate();
			});
			this.updateRanges();
		},
		updateRanges: function(){
			var range = $.map(this.dates, function(d){
				return d.valueOf();
			});
			$.each(this.pickers, function(i, p){
				p.setRange(range);
			});
		},
		dateUpdated: function(e){
			// `this.updating` is a workaround for preventing infinite recursion
			// between `changeDate` triggering and `setUTCDate` calling.  Until
			// there is a better mechanism.
			if (this.updating)
				return;
			this.updating = true;

			var dp = $(e.target).data('datepicker'),
				new_date = dp.getUTCDate(),
				i = $.inArray(e.target, this.inputs),
				l = this.inputs.length;
			if (i === -1)
				return;

			$.each(this.pickers, function(i, p){
				if (!p.getUTCDate())
					p.setUTCDate(new_date);
			});

			if (new_date < this.dates[i]){
				// Date being moved earlier/left
				while (i >= 0 && new_date < this.dates[i]){
					this.pickers[i--].setUTCDate(new_date);
				}
			}
			else if (new_date > this.dates[i]){
				// Date being moved later/right
				while (i < l && new_date > this.dates[i]){
					this.pickers[i++].setUTCDate(new_date);
				}
			}
			this.updateDates();

			delete this.updating;
		},
		remove: function(){
			$.map(this.pickers, function(p){ p.remove(); });
			delete this.element.data().datepicker;
		}
	};

	function opts_from_el(el, prefix){
		// Derive options from element data-attrs
		var data = $(el).data(),
			out = {}, inkey,
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
		prefix = new RegExp('^' + prefix.toLowerCase());
		function re_lower(_,a){
			return a.toLowerCase();
		}
		for (var key in data)
			if (prefix.test(key)){
				inkey = key.replace(replace, re_lower);
				out[inkey] = data[key];
			}
		return out;
	}

	function opts_from_locale(lang){
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]){
			lang = lang.split('-')[0];
			if (!dates[lang])
				return;
		}
		var d = dates[lang];
		$.each(locale_opts, function(i,k){
			if (k in d)
				out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	$.fn.datepicker = function(option){
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return;
		this.each(function(){
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data){
				var elopts = opts_from_el(this, 'date'),
					// Preliminary otions
					xopts = $.extend({}, defaults, elopts, options),
					locopts = opts_from_locale(xopts.language),
					// Options priority: js args, data-attrs, locales, defaults
					opts = $.extend({}, defaults, locopts, elopts, options);
				if ($this.is('.input-daterange') || opts.inputs){
					var ropts = {
						inputs: opts.inputs || $this.find('input').toArray()
					};
					$this.data('datepicker', (data = new DateRangePicker(this, $.extend(opts, ropts))));
				}
				else {
					$this.data('datepicker', (data = new Datepicker(this, opts)));
				}
			}
			if (typeof option === 'string' && typeof data[option] === 'function'){
				internal_return = data[option].apply(data, args);
				if (internal_return !== undefined)
					return false;
			}
		});
		if (internal_return !== undefined)
			return internal_return;
		else
			return this;
	};

	var defaults = $.fn.datepicker.defaults = {
		autoclose: false,
		beforeShowDay: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		daysOfWeekDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		multidate: false,
		multidateSeparator: ',',
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		weekStart: 0
	};
	var locale_opts = $.fn.datepicker.locale_opts = [
		'format',
		'rtl',
		'weekStart'
	];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear"
		}
	};

	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
		}],
		isLeapYear: function(year){
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
		},
		getDaysInMonth: function(year, month){
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
		},
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			// IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate: function(date, format, language){
			if (!date)
				return undefined;
			if (date instanceof Date)
				return date;
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			var part_re = /([\-+]\d+)([dmwy])/,
				parts = date.match(/([\-+]\d+)([dmwy])/g),
				part, dir, i;
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){
				date = new Date();
				for (i=0; i < parts.length; i++){
					part = part_re.exec(parts[i]);
					dir = parseInt(part[1]);
					switch (part[2]){
						case 'd':
							date.setUTCDate(date.getUTCDate() + dir);
							break;
						case 'm':
							date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
							break;
						case 'w':
							date.setUTCDate(date.getUTCDate() + dir * 7);
							break;
						case 'y':
							date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
							break;
					}
				}
				return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
			}
			parts = date && date.match(this.nonpunctuation) || [];
			date = new Date();
			var parsed = {},
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
				setters_map = {
					yyyy: function(d,v){
						return d.setUTCFullYear(v);
					},
					yy: function(d,v){
						return d.setUTCFullYear(2000+v);
					},
					m: function(d,v){
						if (isNaN(d))
							return d;
						v -= 1;
						while (v < 0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() !== v)
							d.setUTCDate(d.getUTCDate()-1);
						return d;
					},
					d: function(d,v){
						return d.setUTCDate(v);
					}
				},
				val, filtered;
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length !== fparts.length){
				fparts = $(fparts).filter(function(i,p){
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			function match_part(){
				var m = this.slice(0, parts[i].length),
					p = parts[i].slice(0, m.length);
				return m === p;
			}
			if (parts.length === fparts.length){
				var cnt;
				for (i=0, cnt = fparts.length; i < cnt; i++){
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)){
						switch (part){
							case 'MM':
								filtered = $(dates[language].months).filter(match_part);
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(match_part);
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				var _date, s;
				for (i=0; i < setters_order.length; i++){
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s])){
						_date = new Date(date);
						setters_map[s](_date, parsed[s]);
						if (!isNaN(_date))
							date = _date;
					}
				}
			}
			return date;
		},
		formatDate: function(date, format, language){
			if (!date)
				return '';
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			date = [];
			var seps = $.extend([], format.separators);
			for (var i=0, cnt = format.parts.length; i <= cnt; i++){
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
							'<tr>'+
								'<th class="prev">&laquo;</th>'+
								'<th colspan="5" class="datepicker-switch"></th>'+
								'<th class="next">&raquo;</th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot>'+
							'<tr>'+
								'<th colspan="7" class="today"></th>'+
							'</tr>'+
							'<tr>'+
								'<th colspan="7" class="clear"></th>'+
							'</tr>'+
						'</tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class=" table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;


	/* DATEPICKER NO CONFLICT
	* =================== */

	$.fn.datepicker.noConflict = function(){
		$.fn.datepicker = old;
		return this;
	};


	/* DATEPICKER DATA-API
	* ================== */

	$(document).on(
		'focus.datepicker.data-api click.datepicker.data-api',
		'[data-provide="datepicker"]',
		function(e){
			var $this = $(this);
			if ($this.data('datepicker'))
				return;
			e.preventDefault();
			// component click requires us to explicitly show it
			$this.datepicker('show');
		}
	);
	$(function(){
		$('[data-provide="datepicker-inline"]').datepicker();
	});

}(window.jQuery));

;(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge]
 * @returns {Object} dest
 */
function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
function merge(dest, src) {
    return extend(dest, src, true);
}

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        extend(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument;
    return (doc.defaultView || doc.parentWindow);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = last.deltaX - input.deltaX;
        var deltaY = last.deltaY - input.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0,
        y = 0,
        i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x > 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y > 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) - getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.allow = true; // used by Input.TouchMouse to disable mouse events
    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down, and mouse events are allowed (see the TouchMouse input)
        if (!this.pressed || !this.allow) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            store.push(ev);
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // get index of the event in the store
        // it not found, so the pointer hasn't been down (so it's probably a hover)
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    /**
     * handle touch events
     * @param {Object} ev
     */
    handler: function TEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches = toArray(ev.targetTouches),
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [];

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */
function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        // when we're in a touch event, so  block all upcoming mouse events
        // most mobile browser also emit mouseevents, right after touchstart
        if (isTouch) {
            this.mouse.allow = false;
        } else if (isMouse && !this.mouse.allow) {
            return;
        }

        // reset the allowMouse when we're done
        if (inputEvent & (INPUT_END | INPUT_CANCEL)) {
            this.mouse.allow = true;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        // not needed with native support for the touchAction property
        if (NATIVE_TOUCH_ACTION) {
            return;
        }

        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE);
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // pan-x and pan-y can be combined
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_PAN_X + ' ' + TOUCH_ACTION_PAN_Y;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.id = uniqueId();

    this.manager = null;
    this.options = merge(options || {}, this.defaults);

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        extend(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(withState) {
            self.manager.emit(self.options.event + (withState ? stateStr(state) : ''), input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(true);
        }

        emit(); // simple 'eventName' events

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(true);
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = extend({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {
        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        this._super.emit.call(this, input);
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            this.manager.emit(this.options.event + inOut, input);
        }
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 500, // minimal time of the pointer to be pressed
        threshold: 5 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.65,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.velocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.velocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.velocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.direction &&
            input.distance > this.options.threshold &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.direction);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 2, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED ) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create an manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.3';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, { enable: false }],
        [PinchRecognizer, { enable: false }, ['rotate']],
        [SwipeRecognizer,{ direction: DIRECTION_HORIZONTAL }],
        [PanRecognizer, { direction: DIRECTION_HORIZONTAL }, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, { event: 'doubletap', taps: 2 }, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    options = options || {};

    this.options = merge(options, Hammer.defaults);
    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        extend(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        var recognizers = this.recognizers;
        recognizer = this.get(recognizer);
        recognizers.splice(inArray(recognizers, recognizer), 1);

        this.touchAction.update();
        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    each(manager.options.cssProps, function(value, name) {
        element.style[prefixed(element.style, name)] = add ? value : '';
    });
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

extend(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

if (typeof define == TYPE_FUNCTION && define.amd) {
    define(function() {
        return Hammer;
    });
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');


(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'hammerjs'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'), require('hammerjs'));
    } else {
        factory(jQuery, Hammer);
    }
}(function($, Hammer) {
    function hammerify(el, options) {
        var $el = $(el);
        if(!$el.data("hammer")) {
            $el.data("hammer", new Hammer($el[0], options));
        }
    }

    $.fn.hammer = function(options) {
        return this.each(function() {
            hammerify(this, options);
        });
    };

    // extend the emit method to also trigger jQuery events
    Hammer.Manager.prototype.emit = (function(originalEmit) {
        return function(type, data) {
            originalEmit.call(this, type, data);
            $(this.element).trigger({
                type: type,
                gesture: data
            });
        };
    })(Hammer.Manager.prototype.emit);
}));

;/*!
 * Materialize v0.100.2 (http://materializecss.com)
 * Copyright 2014-2017 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Check for jQuery.
if (typeof jQuery === 'undefined') {
  // Check if require is a defined function.
  if (typeof require === 'function') {
    jQuery = $ = require('jquery');
    // Else use the dollar sign alias.
  } else {
    jQuery = $;
  }
}
; /*
  * jQuery Easing v1.4.0 - http://gsgd.co.uk/sandbox/jquery/easing/
  * Open source under the BSD License.
  * Copyright © 2008 George McGinley Smith
  * All rights reserved.
  * https://raw.github.com/gdsmith/jquery-easing/master/LICENSE
  */

(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(['jquery'], function ($) {
      return factory($);
    });
  } else if (typeof module === "object" && typeof module.exports === "object") {
    exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
})(function ($) {

  // Preserve the original jQuery "swing" easing as "jswing"
  $.easing['jswing'] = $.easing['swing'];

  var pow = Math.pow,
      sqrt = Math.sqrt,
      sin = Math.sin,
      cos = Math.cos,
      PI = Math.PI,
      c1 = 1.70158,
      c2 = c1 * 1.525,
      c3 = c1 + 1,
      c4 = 2 * PI / 3,
      c5 = 2 * PI / 4.5;

  // x is the fraction of animation progress, in the range 0..1
  function bounceOut(x) {
    var n1 = 7.5625,
        d1 = 2.75;
    if (x < 1 / d1) {
      return n1 * x * x;
    } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + .75;
    } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + .9375;
    } else {
      return n1 * (x -= 2.625 / d1) * x + .984375;
    }
  }

  $.extend($.easing, {
    def: 'easeOutQuad',
    swing: function (x) {
      return $.easing[$.easing.def](x);
    },
    easeInQuad: function (x) {
      return x * x;
    },
    easeOutQuad: function (x) {
      return 1 - (1 - x) * (1 - x);
    },
    easeInOutQuad: function (x) {
      return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
    },
    easeInCubic: function (x) {
      return x * x * x;
    },
    easeOutCubic: function (x) {
      return 1 - pow(1 - x, 3);
    },
    easeInOutCubic: function (x) {
      return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
    },
    easeInQuart: function (x) {
      return x * x * x * x;
    },
    easeOutQuart: function (x) {
      return 1 - pow(1 - x, 4);
    },
    easeInOutQuart: function (x) {
      return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
    },
    easeInQuint: function (x) {
      return x * x * x * x * x;
    },
    easeOutQuint: function (x) {
      return 1 - pow(1 - x, 5);
    },
    easeInOutQuint: function (x) {
      return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
    },
    easeInSine: function (x) {
      return 1 - cos(x * PI / 2);
    },
    easeOutSine: function (x) {
      return sin(x * PI / 2);
    },
    easeInOutSine: function (x) {
      return -(cos(PI * x) - 1) / 2;
    },
    easeInExpo: function (x) {
      return x === 0 ? 0 : pow(2, 10 * x - 10);
    },
    easeOutExpo: function (x) {
      return x === 1 ? 1 : 1 - pow(2, -10 * x);
    },
    easeInOutExpo: function (x) {
      return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2;
    },
    easeInCirc: function (x) {
      return 1 - sqrt(1 - pow(x, 2));
    },
    easeOutCirc: function (x) {
      return sqrt(1 - pow(x - 1, 2));
    },
    easeInOutCirc: function (x) {
      return x < 0.5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
    },
    easeInElastic: function (x) {
      return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
    },
    easeOutElastic: function (x) {
      return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
    },
    easeInOutElastic: function (x) {
      return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1;
    },
    easeInBack: function (x) {
      return c3 * x * x * x - c1 * x * x;
    },
    easeOutBack: function (x) {
      return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
    },
    easeInOutBack: function (x) {
      return x < 0.5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    },
    easeInBounce: function (x) {
      return 1 - bounceOut(1 - x);
    },
    easeOutBounce: bounceOut,
    easeInOutBounce: function (x) {
      return x < 0.5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2;
    }
  });
});; // Custom Easing
jQuery.extend(jQuery.easing, {
  easeInOutMaterial: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return c / 4 * ((t -= 2) * t * t + 2) + b;
  }
});; /*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
/*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */
jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (!function (e) {
  function t(e) {
    var t = e.length,
        a = r.type(e);return "function" === a || r.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === a || 0 === t || "number" == typeof t && t > 0 && t - 1 in e;
  }if (!e.jQuery) {
    var r = function (e, t) {
      return new r.fn.init(e, t);
    };r.isWindow = function (e) {
      return null != e && e == e.window;
    }, r.type = function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e;
    }, r.isArray = Array.isArray || function (e) {
      return "array" === r.type(e);
    }, r.isPlainObject = function (e) {
      var t;if (!e || "object" !== r.type(e) || e.nodeType || r.isWindow(e)) return !1;try {
        if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (a) {
        return !1;
      }for (t in e) {}return void 0 === t || o.call(e, t);
    }, r.each = function (e, r, a) {
      var n,
          o = 0,
          i = e.length,
          s = t(e);if (a) {
        if (s) for (; i > o && (n = r.apply(e[o], a), n !== !1); o++) {} else for (o in e) {
          if (n = r.apply(e[o], a), n === !1) break;
        }
      } else if (s) for (; i > o && (n = r.call(e[o], o, e[o]), n !== !1); o++) {} else for (o in e) {
        if (n = r.call(e[o], o, e[o]), n === !1) break;
      }return e;
    }, r.data = function (e, t, n) {
      if (void 0 === n) {
        var o = e[r.expando],
            i = o && a[o];if (void 0 === t) return i;if (i && t in i) return i[t];
      } else if (void 0 !== t) {
        var o = e[r.expando] || (e[r.expando] = ++r.uuid);return a[o] = a[o] || {}, a[o][t] = n, n;
      }
    }, r.removeData = function (e, t) {
      var n = e[r.expando],
          o = n && a[n];o && r.each(t, function (e, t) {
        delete o[t];
      });
    }, r.extend = function () {
      var e,
          t,
          a,
          n,
          o,
          i,
          s = arguments[0] || {},
          l = 1,
          u = arguments.length,
          c = !1;for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== r.type(s) && (s = {}), l === u && (s = this, l--); u > l; l++) {
        if (null != (o = arguments[l])) for (n in o) {
          e = s[n], a = o[n], s !== a && (c && a && (r.isPlainObject(a) || (t = r.isArray(a))) ? (t ? (t = !1, i = e && r.isArray(e) ? e : []) : i = e && r.isPlainObject(e) ? e : {}, s[n] = r.extend(c, i, a)) : void 0 !== a && (s[n] = a));
        }
      }return s;
    }, r.queue = function (e, a, n) {
      function o(e, r) {
        var a = r || [];return null != e && (t(Object(e)) ? !function (e, t) {
          for (var r = +t.length, a = 0, n = e.length; r > a;) {
            e[n++] = t[a++];
          }if (r !== r) for (; void 0 !== t[a];) {
            e[n++] = t[a++];
          }return e.length = n, e;
        }(a, "string" == typeof e ? [e] : e) : [].push.call(a, e)), a;
      }if (e) {
        a = (a || "fx") + "queue";var i = r.data(e, a);return n ? (!i || r.isArray(n) ? i = r.data(e, a, o(n)) : i.push(n), i) : i || [];
      }
    }, r.dequeue = function (e, t) {
      r.each(e.nodeType ? [e] : e, function (e, a) {
        t = t || "fx";var n = r.queue(a, t),
            o = n.shift();"inprogress" === o && (o = n.shift()), o && ("fx" === t && n.unshift("inprogress"), o.call(a, function () {
          r.dequeue(a, t);
        }));
      });
    }, r.fn = r.prototype = { init: function (e) {
        if (e.nodeType) return this[0] = e, this;throw new Error("Not a DOM node.");
      }, offset: function () {
        var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };return { top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0) };
      }, position: function () {
        function e() {
          for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) {
            e = e.offsetParent;
          }return e || document;
        }var t = this[0],
            e = e.apply(t),
            a = this.offset(),
            n = /^(?:body|html)$/i.test(e.nodeName) ? { top: 0, left: 0 } : r(e).offset();return a.top -= parseFloat(t.style.marginTop) || 0, a.left -= parseFloat(t.style.marginLeft) || 0, e.style && (n.top += parseFloat(e.style.borderTopWidth) || 0, n.left += parseFloat(e.style.borderLeftWidth) || 0), { top: a.top - n.top, left: a.left - n.left };
      } };var a = {};r.expando = "velocity" + new Date().getTime(), r.uuid = 0;for (var n = {}, o = n.hasOwnProperty, i = n.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) {
      n["[object " + s[l] + "]"] = s[l].toLowerCase();
    }r.fn.init.prototype = r.fn, e.Velocity = { Utilities: r };
  }
}(window), function (e) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e();
}(function () {
  return function (e, t, r, a) {
    function n(e) {
      for (var t = -1, r = e ? e.length : 0, a = []; ++t < r;) {
        var n = e[t];n && a.push(n);
      }return a;
    }function o(e) {
      return m.isWrapped(e) ? e = [].slice.call(e) : m.isNode(e) && (e = [e]), e;
    }function i(e) {
      var t = f.data(e, "velocity");return null === t ? a : t;
    }function s(e) {
      return function (t) {
        return Math.round(t * e) * (1 / e);
      };
    }function l(e, r, a, n) {
      function o(e, t) {
        return 1 - 3 * t + 3 * e;
      }function i(e, t) {
        return 3 * t - 6 * e;
      }function s(e) {
        return 3 * e;
      }function l(e, t, r) {
        return ((o(t, r) * e + i(t, r)) * e + s(t)) * e;
      }function u(e, t, r) {
        return 3 * o(t, r) * e * e + 2 * i(t, r) * e + s(t);
      }function c(t, r) {
        for (var n = 0; m > n; ++n) {
          var o = u(r, e, a);if (0 === o) return r;var i = l(r, e, a) - t;r -= i / o;
        }return r;
      }function p() {
        for (var t = 0; b > t; ++t) {
          w[t] = l(t * x, e, a);
        }
      }function f(t, r, n) {
        var o,
            i,
            s = 0;do {
          i = r + (n - r) / 2, o = l(i, e, a) - t, o > 0 ? n = i : r = i;
        } while (Math.abs(o) > h && ++s < v);return i;
      }function d(t) {
        for (var r = 0, n = 1, o = b - 1; n != o && w[n] <= t; ++n) {
          r += x;
        }--n;var i = (t - w[n]) / (w[n + 1] - w[n]),
            s = r + i * x,
            l = u(s, e, a);return l >= y ? c(t, s) : 0 == l ? s : f(t, r, r + x);
      }function g() {
        V = !0, (e != r || a != n) && p();
      }var m = 4,
          y = .001,
          h = 1e-7,
          v = 10,
          b = 11,
          x = 1 / (b - 1),
          S = "Float32Array" in t;if (4 !== arguments.length) return !1;for (var P = 0; 4 > P; ++P) {
        if ("number" != typeof arguments[P] || isNaN(arguments[P]) || !isFinite(arguments[P])) return !1;
      }e = Math.min(e, 1), a = Math.min(a, 1), e = Math.max(e, 0), a = Math.max(a, 0);var w = S ? new Float32Array(b) : new Array(b),
          V = !1,
          C = function (t) {
        return V || g(), e === r && a === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), r, n);
      };C.getControlPoints = function () {
        return [{ x: e, y: r }, { x: a, y: n }];
      };var T = "generateBezier(" + [e, r, a, n] + ")";return C.toString = function () {
        return T;
      }, C;
    }function u(e, t) {
      var r = e;return m.isString(e) ? b.Easings[e] || (r = !1) : r = m.isArray(e) && 1 === e.length ? s.apply(null, e) : m.isArray(e) && 2 === e.length ? x.apply(null, e.concat([t])) : m.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, r === !1 && (r = b.Easings[b.defaults.easing] ? b.defaults.easing : v), r;
    }function c(e) {
      if (e) {
        var t = new Date().getTime(),
            r = b.State.calls.length;r > 1e4 && (b.State.calls = n(b.State.calls));for (var o = 0; r > o; o++) {
          if (b.State.calls[o]) {
            var s = b.State.calls[o],
                l = s[0],
                u = s[2],
                d = s[3],
                g = !!d,
                y = null;d || (d = b.State.calls[o][3] = t - 16);for (var h = Math.min((t - d) / u.duration, 1), v = 0, x = l.length; x > v; v++) {
              var P = l[v],
                  V = P.element;if (i(V)) {
                var C = !1;if (u.display !== a && null !== u.display && "none" !== u.display) {
                  if ("flex" === u.display) {
                    var T = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];f.each(T, function (e, t) {
                      S.setPropertyValue(V, "display", t);
                    });
                  }S.setPropertyValue(V, "display", u.display);
                }u.visibility !== a && "hidden" !== u.visibility && S.setPropertyValue(V, "visibility", u.visibility);for (var k in P) {
                  if ("element" !== k) {
                    var A,
                        F = P[k],
                        j = m.isString(F.easing) ? b.Easings[F.easing] : F.easing;if (1 === h) A = F.endValue;else {
                      var E = F.endValue - F.startValue;if (A = F.startValue + E * j(h, u, E), !g && A === F.currentValue) continue;
                    }if (F.currentValue = A, "tween" === k) y = A;else {
                      if (S.Hooks.registered[k]) {
                        var H = S.Hooks.getRoot(k),
                            N = i(V).rootPropertyValueCache[H];N && (F.rootPropertyValue = N);
                      }var L = S.setPropertyValue(V, k, F.currentValue + (0 === parseFloat(A) ? "" : F.unitType), F.rootPropertyValue, F.scrollData);S.Hooks.registered[k] && (i(V).rootPropertyValueCache[H] = S.Normalizations.registered[H] ? S.Normalizations.registered[H]("extract", null, L[1]) : L[1]), "transform" === L[0] && (C = !0);
                    }
                  }
                }u.mobileHA && i(V).transformCache.translate3d === a && (i(V).transformCache.translate3d = "(0px, 0px, 0px)", C = !0), C && S.flushTransformCache(V);
              }
            }u.display !== a && "none" !== u.display && (b.State.calls[o][2].display = !1), u.visibility !== a && "hidden" !== u.visibility && (b.State.calls[o][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], h, Math.max(0, d + u.duration - t), d, y), 1 === h && p(o);
          }
        }
      }b.State.isTicking && w(c);
    }function p(e, t) {
      if (!b.State.calls[e]) return !1;for (var r = b.State.calls[e][0], n = b.State.calls[e][1], o = b.State.calls[e][2], s = b.State.calls[e][4], l = !1, u = 0, c = r.length; c > u; u++) {
        var p = r[u].element;if (t || o.loop || ("none" === o.display && S.setPropertyValue(p, "display", o.display), "hidden" === o.visibility && S.setPropertyValue(p, "visibility", o.visibility)), o.loop !== !0 && (f.queue(p)[1] === a || !/\.velocityQueueEntryFlag/i.test(f.queue(p)[1])) && i(p)) {
          i(p).isAnimating = !1, i(p).rootPropertyValueCache = {};var d = !1;f.each(S.Lists.transforms3D, function (e, t) {
            var r = /^scale/.test(t) ? 1 : 0,
                n = i(p).transformCache[t];i(p).transformCache[t] !== a && new RegExp("^\\(" + r + "[^.]").test(n) && (d = !0, delete i(p).transformCache[t]);
          }), o.mobileHA && (d = !0, delete i(p).transformCache.translate3d), d && S.flushTransformCache(p), S.Values.removeClass(p, "velocity-animating");
        }if (!t && o.complete && !o.loop && u === c - 1) try {
          o.complete.call(n, n);
        } catch (g) {
          setTimeout(function () {
            throw g;
          }, 1);
        }s && o.loop !== !0 && s(n), i(p) && o.loop === !0 && !t && (f.each(i(p).tweensContainer, function (e, t) {
          /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100);
        }), b(p, "reverse", { loop: !0, delay: o.delay })), o.queue !== !1 && f.dequeue(p, o.queue);
      }b.State.calls[e] = !1;for (var m = 0, y = b.State.calls.length; y > m; m++) {
        if (b.State.calls[m] !== !1) {
          l = !0;break;
        }
      }l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = []);
    }var f,
        d = function () {
      if (r.documentMode) return r.documentMode;for (var e = 7; e > 4; e--) {
        var t = r.createElement("div");if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e;
      }return a;
    }(),
        g = function () {
      var e = 0;return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
        var r,
            a = new Date().getTime();return r = Math.max(0, 16 - (a - e)), e = a + r, setTimeout(function () {
          t(a + r);
        }, r);
      };
    }(),
        m = { isString: function (e) {
        return "string" == typeof e;
      }, isArray: Array.isArray || function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      }, isFunction: function (e) {
        return "[object Function]" === Object.prototype.toString.call(e);
      }, isNode: function (e) {
        return e && e.nodeType;
      }, isNodeList: function (e) {
        return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== a && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0);
      }, isWrapped: function (e) {
        return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e));
      }, isSVG: function (e) {
        return t.SVGElement && e instanceof t.SVGElement;
      }, isEmptyObject: function (e) {
        for (var t in e) {
          return !1;
        }return !0;
      } },
        y = !1;if (e.fn && e.fn.jquery ? (f = e, y = !0) : f = t.Velocity.Utilities, 8 >= d && !y) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if (7 >= d) return void (jQuery.fn.velocity = jQuery.fn.animate);var h = 400,
        v = "swing",
        b = { State: { isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), isAndroid: /Android/i.test(navigator.userAgent), isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent), isChrome: t.chrome, isFirefox: /Firefox/i.test(navigator.userAgent), prefixElement: r.createElement("div"), prefixMatches: {}, scrollAnchor: null, scrollPropertyLeft: null, scrollPropertyTop: null, isTicking: !1, calls: [] }, CSS: {}, Utilities: f, Redirects: {}, Easings: {}, Promise: t.Promise, defaults: { queue: "", duration: h, easing: v, begin: a, complete: a, progress: a, display: a, visibility: a, loop: !1, delay: !1, mobileHA: !0, _cacheValues: !0 }, init: function (e) {
        f.data(e, "velocity", { isSVG: m.isSVG(e), isAnimating: !1, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {} });
      }, hook: null, mock: !1, version: { major: 1, minor: 2, patch: 2 }, debug: !1 };t.pageYOffset !== a ? (b.State.scrollAnchor = t, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");var x = function () {
      function e(e) {
        return -e.tension * e.x - e.friction * e.v;
      }function t(t, r, a) {
        var n = { x: t.x + a.dx * r, v: t.v + a.dv * r, tension: t.tension, friction: t.friction };return { dx: n.v, dv: e(n) };
      }function r(r, a) {
        var n = { dx: r.v, dv: e(r) },
            o = t(r, .5 * a, n),
            i = t(r, .5 * a, o),
            s = t(r, a, i),
            l = 1 / 6 * (n.dx + 2 * (o.dx + i.dx) + s.dx),
            u = 1 / 6 * (n.dv + 2 * (o.dv + i.dv) + s.dv);return r.x = r.x + l * a, r.v = r.v + u * a, r;
      }return function a(e, t, n) {
        var o,
            i,
            s,
            l = { x: -1, v: 0, tension: null, friction: null },
            u = [0],
            c = 0,
            p = 1e-4,
            f = .016;for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, n = n || null, l.tension = e, l.friction = t, o = null !== n, o ? (c = a(e, t), i = c / n * f) : i = f; s = r(s || l, i), u.push(1 + s.x), c += 16, Math.abs(s.x) > p && Math.abs(s.v) > p;) {}return o ? function (e) {
          return u[e * (u.length - 1) | 0];
        } : c;
      };
    }();b.Easings = { linear: function (e) {
        return e;
      }, swing: function (e) {
        return .5 - Math.cos(e * Math.PI) / 2;
      }, spring: function (e) {
        return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e);
      } }, f.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (e, t) {
      b.Easings[t[0]] = l.apply(null, t[1]);
    });var S = b.CSS = { RegEx: { isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi }, Lists: { colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"], transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"], transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"] }, Hooks: { templates: { textShadow: ["Color X Y Blur", "black 0px 0px 0px"], boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"], clip: ["Top Right Bottom Left", "0px 0px 0px 0px"], backgroundPosition: ["X Y", "0% 0%"], transformOrigin: ["X Y Z", "50% 50% 0px"], perspectiveOrigin: ["X Y", "50% 50%"] }, registered: {}, register: function () {
          for (var e = 0; e < S.Lists.colors.length; e++) {
            var t = "color" === S.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";S.Hooks.templates[S.Lists.colors[e]] = ["Red Green Blue Alpha", t];
          }var r, a, n;if (d) for (r in S.Hooks.templates) {
            a = S.Hooks.templates[r], n = a[0].split(" ");var o = a[1].match(S.RegEx.valueSplit);"Color" === n[0] && (n.push(n.shift()), o.push(o.shift()), S.Hooks.templates[r] = [n.join(" "), o.join(" ")]);
          }for (r in S.Hooks.templates) {
            a = S.Hooks.templates[r], n = a[0].split(" ");for (var e in n) {
              var i = r + n[e],
                  s = e;S.Hooks.registered[i] = [r, s];
            }
          }
        }, getRoot: function (e) {
          var t = S.Hooks.registered[e];return t ? t[0] : e;
        }, cleanRootPropertyValue: function (e, t) {
          return S.RegEx.valueUnwrap.test(t) && (t = t.match(S.RegEx.valueUnwrap)[1]), S.Values.isCSSNullValue(t) && (t = S.Hooks.templates[e][1]), t;
        }, extractValue: function (e, t) {
          var r = S.Hooks.registered[e];if (r) {
            var a = r[0],
                n = r[1];return t = S.Hooks.cleanRootPropertyValue(a, t), t.toString().match(S.RegEx.valueSplit)[n];
          }return t;
        }, injectValue: function (e, t, r) {
          var a = S.Hooks.registered[e];if (a) {
            var n,
                o,
                i = a[0],
                s = a[1];return r = S.Hooks.cleanRootPropertyValue(i, r), n = r.toString().match(S.RegEx.valueSplit), n[s] = t, o = n.join(" ");
          }return r;
        } }, Normalizations: { registered: { clip: function (e, t, r) {
            switch (e) {case "name":
                return "clip";case "extract":
                var a;return S.RegEx.wrappedValueAlreadyExtracted.test(r) ? a = r : (a = r.toString().match(S.RegEx.valueUnwrap), a = a ? a[1].replace(/,(\s+)?/g, " ") : r), a;case "inject":
                return "rect(" + r + ")";}
          }, blur: function (e, t, r) {
            switch (e) {case "name":
                return b.State.isFirefox ? "filter" : "-webkit-filter";case "extract":
                var a = parseFloat(r);if (!a && 0 !== a) {
                  var n = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a = n ? n[1] : 0;
                }return a;case "inject":
                return parseFloat(r) ? "blur(" + r + ")" : "none";}
          }, opacity: function (e, t, r) {
            if (8 >= d) switch (e) {case "name":
                return "filter";case "extract":
                var a = r.toString().match(/alpha\(opacity=(.*)\)/i);return r = a ? a[1] / 100 : 1;case "inject":
                return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")";} else switch (e) {case "name":
                return "opacity";case "extract":
                return r;case "inject":
                return r;}
          } }, register: function () {
          9 >= d || b.State.isGingerbread || (S.Lists.transformsBase = S.Lists.transformsBase.concat(S.Lists.transforms3D));for (var e = 0; e < S.Lists.transformsBase.length; e++) {
            !function () {
              var t = S.Lists.transformsBase[e];S.Normalizations.registered[t] = function (e, r, n) {
                switch (e) {case "name":
                    return "transform";case "extract":
                    return i(r) === a || i(r).transformCache[t] === a ? /^scale/i.test(t) ? 1 : 0 : i(r).transformCache[t].replace(/[()]/g, "");case "inject":
                    var o = !1;switch (t.substr(0, t.length - 1)) {case "translate":
                        o = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case "scal":case "scale":
                        b.State.isAndroid && i(r).transformCache[t] === a && 1 > n && (n = 1), o = !/(\d)$/i.test(n);break;case "skew":
                        o = !/(deg|\d)$/i.test(n);break;case "rotate":
                        o = !/(deg|\d)$/i.test(n);}return o || (i(r).transformCache[t] = "(" + n + ")"), i(r).transformCache[t];}
              };
            }();
          }for (var e = 0; e < S.Lists.colors.length; e++) {
            !function () {
              var t = S.Lists.colors[e];S.Normalizations.registered[t] = function (e, r, n) {
                switch (e) {case "name":
                    return t;case "extract":
                    var o;if (S.RegEx.wrappedValueAlreadyExtracted.test(n)) o = n;else {
                      var i,
                          s = { black: "rgb(0, 0, 0)", blue: "rgb(0, 0, 255)", gray: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", red: "rgb(255, 0, 0)", white: "rgb(255, 255, 255)" };/^[A-z]+$/i.test(n) ? i = s[n] !== a ? s[n] : s.black : S.RegEx.isHex.test(n) ? i = "rgb(" + S.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (i = s.black), o = (i || n).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                    }return 8 >= d || 3 !== o.split(" ").length || (o += " 1"), o;case "inject":
                    return 8 >= d ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (8 >= d ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";}
              };
            }();
          }
        } }, Names: { camelCase: function (e) {
          return e.replace(/-(\w)/g, function (e, t) {
            return t.toUpperCase();
          });
        }, SVGAttribute: function (e) {
          var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return (d || b.State.isAndroid && !b.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e);
        }, prefixCheck: function (e) {
          if (b.State.prefixMatches[e]) return [b.State.prefixMatches[e], !0];for (var t = ["", "Webkit", "Moz", "ms", "O"], r = 0, a = t.length; a > r; r++) {
            var n;if (n = 0 === r ? e : t[r] + e.replace(/^\w/, function (e) {
              return e.toUpperCase();
            }), m.isString(b.State.prefixElement.style[n])) return b.State.prefixMatches[e] = n, [n, !0];
          }return [e, !1];
        } }, Values: { hexToRgb: function (e) {
          var t,
              r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
              a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e = e.replace(r, function (e, t, r, a) {
            return t + t + r + r + a + a;
          }), t = a.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0];
        }, isCSSNullValue: function (e) {
          return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e);
        }, getUnitType: function (e) {
          return (/^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
          );
        }, getDisplayType: function (e) {
          var t = e && e.tagName.toString().toLowerCase();return (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
          );
        }, addClass: function (e, t) {
          e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t;
        }, removeClass: function (e, t) {
          e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ");
        } }, getPropertyValue: function (e, r, n, o) {
        function s(e, r) {
          function n() {
            u && S.setPropertyValue(e, "display", "none");
          }var l = 0;if (8 >= d) l = f.css(e, r);else {
            var u = !1;if (/^(width|height)$/.test(r) && 0 === S.getPropertyValue(e, "display") && (u = !0, S.setPropertyValue(e, "display", S.Values.getDisplayType(e))), !o) {
              if ("height" === r && "border-box" !== S.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                var c = e.offsetHeight - (parseFloat(S.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingBottom")) || 0);return n(), c;
              }if ("width" === r && "border-box" !== S.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                var p = e.offsetWidth - (parseFloat(S.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingRight")) || 0);return n(), p;
              }
            }var g;g = i(e) === a ? t.getComputedStyle(e, null) : i(e).computedStyle ? i(e).computedStyle : i(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === r && (r = "borderTopColor"), l = 9 === d && "filter" === r ? g.getPropertyValue(r) : g[r], ("" === l || null === l) && (l = e.style[r]), n();
          }if ("auto" === l && /^(top|right|bottom|left)$/i.test(r)) {
            var m = s(e, "position");("fixed" === m || "absolute" === m && /top|left/i.test(r)) && (l = f(e).position()[r] + "px");
          }return l;
        }var l;if (S.Hooks.registered[r]) {
          var u = r,
              c = S.Hooks.getRoot(u);n === a && (n = S.getPropertyValue(e, S.Names.prefixCheck(c)[0])), S.Normalizations.registered[c] && (n = S.Normalizations.registered[c]("extract", e, n)), l = S.Hooks.extractValue(u, n);
        } else if (S.Normalizations.registered[r]) {
          var p, g;p = S.Normalizations.registered[r]("name", e), "transform" !== p && (g = s(e, S.Names.prefixCheck(p)[0]), S.Values.isCSSNullValue(g) && S.Hooks.templates[r] && (g = S.Hooks.templates[r][1])), l = S.Normalizations.registered[r]("extract", e, g);
        }if (!/^[\d-]/.test(l)) if (i(e) && i(e).isSVG && S.Names.SVGAttribute(r)) {
          if (/^(height|width)$/i.test(r)) try {
            l = e.getBBox()[r];
          } catch (m) {
            l = 0;
          } else l = e.getAttribute(r);
        } else l = s(e, S.Names.prefixCheck(r)[0]);return S.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + r + ": " + l), l;
      }, setPropertyValue: function (e, r, a, n, o) {
        var s = r;if ("scroll" === r) o.container ? o.container["scroll" + o.direction] = a : "Left" === o.direction ? t.scrollTo(a, o.alternateValue) : t.scrollTo(o.alternateValue, a);else if (S.Normalizations.registered[r] && "transform" === S.Normalizations.registered[r]("name", e)) S.Normalizations.registered[r]("inject", e, a), s = "transform", a = i(e).transformCache[r];else {
          if (S.Hooks.registered[r]) {
            var l = r,
                u = S.Hooks.getRoot(r);n = n || S.getPropertyValue(e, u), a = S.Hooks.injectValue(l, a, n), r = u;
          }if (S.Normalizations.registered[r] && (a = S.Normalizations.registered[r]("inject", e, a), r = S.Normalizations.registered[r]("name", e)), s = S.Names.prefixCheck(r)[0], 8 >= d) try {
            e.style[s] = a;
          } catch (c) {
            b.debug && console.log("Browser does not support [" + a + "] for [" + s + "]");
          } else i(e) && i(e).isSVG && S.Names.SVGAttribute(r) ? e.setAttribute(r, a) : e.style[s] = a;b.debug >= 2 && console.log("Set " + r + " (" + s + "): " + a);
        }return [s, a];
      }, flushTransformCache: function (e) {
        function t(t) {
          return parseFloat(S.getPropertyValue(e, t));
        }var r = "";if ((d || b.State.isAndroid && !b.State.isChrome) && i(e).isSVG) {
          var a = { translate: [t("translateX"), t("translateY")], skewX: [t("skewX")], skewY: [t("skewY")], scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")], rotate: [t("rotateZ"), 0, 0] };f.each(i(e).transformCache, function (e) {
            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), a[e] && (r += e + "(" + a[e].join(" ") + ") ", delete a[e]);
          });
        } else {
          var n, o;f.each(i(e).transformCache, function (t) {
            return n = i(e).transformCache[t], "transformPerspective" === t ? (o = n, !0) : (9 === d && "rotateZ" === t && (t = "rotate"), void (r += t + n + " "));
          }), o && (r = "perspective" + o + " " + r);
        }S.setPropertyValue(e, "transform", r);
      } };S.Hooks.register(), S.Normalizations.register(), b.hook = function (e, t, r) {
      var n = a;return e = o(e), f.each(e, function (e, o) {
        if (i(o) === a && b.init(o), r === a) n === a && (n = b.CSS.getPropertyValue(o, t));else {
          var s = b.CSS.setPropertyValue(o, t, r);"transform" === s[0] && b.CSS.flushTransformCache(o), n = s;
        }
      }), n;
    };var P = function () {
      function e() {
        return s ? k.promise || null : l;
      }function n() {
        function e(e) {
          function p(e, t) {
            var r = a,
                n = a,
                i = a;return m.isArray(e) ? (r = e[0], !m.isArray(e[1]) && /^[\d-]/.test(e[1]) || m.isFunction(e[1]) || S.RegEx.isHex.test(e[1]) ? i = e[1] : (m.isString(e[1]) && !S.RegEx.isHex.test(e[1]) || m.isArray(e[1])) && (n = t ? e[1] : u(e[1], s.duration), e[2] !== a && (i = e[2]))) : r = e, t || (n = n || s.easing), m.isFunction(r) && (r = r.call(o, V, w)), m.isFunction(i) && (i = i.call(o, V, w)), [r || 0, n, i];
          }function d(e, t) {
            var r, a;return a = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
              return r = e, "";
            }), r || (r = S.Values.getUnitType(e)), [a, r];
          }function h() {
            var e = { myParent: o.parentNode || r.body, position: S.getPropertyValue(o, "position"), fontSize: S.getPropertyValue(o, "fontSize") },
                a = e.position === L.lastPosition && e.myParent === L.lastParent,
                n = e.fontSize === L.lastFontSize;L.lastParent = e.myParent, L.lastPosition = e.position, L.lastFontSize = e.fontSize;var s = 100,
                l = {};if (n && a) l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, l.percentToPxHeight = L.lastPercentToPxHeight;else {
              var u = i(o).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");b.init(u), e.myParent.appendChild(u), f.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                b.CSS.setPropertyValue(u, t, "hidden");
              }), b.CSS.setPropertyValue(u, "position", e.position), b.CSS.setPropertyValue(u, "fontSize", e.fontSize), b.CSS.setPropertyValue(u, "boxSizing", "content-box"), f.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                b.CSS.setPropertyValue(u, t, s + "%");
              }), b.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(S.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(S.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = L.lastEmToPx = (parseFloat(S.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u);
            }return null === L.remToPx && (L.remToPx = parseFloat(S.getPropertyValue(r.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(t.innerWidth) / 100, L.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l;
          }if (s.begin && 0 === V) try {
            s.begin.call(g, g);
          } catch (x) {
            setTimeout(function () {
              throw x;
            }, 1);
          }if ("scroll" === A) {
            var P,
                C,
                T,
                F = /^x$/i.test(s.axis) ? "Left" : "Top",
                j = parseFloat(s.offset) || 0;s.container ? m.isWrapped(s.container) || m.isNode(s.container) ? (s.container = s.container[0] || s.container, P = s.container["scroll" + F], T = P + f(o).position()[F.toLowerCase()] + j) : s.container = null : (P = b.State.scrollAnchor[b.State["scrollProperty" + F]], C = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === F ? "Top" : "Left")]], T = f(o).offset()[F.toLowerCase()] + j), l = { scroll: { rootPropertyValue: !1, startValue: P, currentValue: P, endValue: T, unitType: "", easing: s.easing, scrollData: { container: s.container, direction: F, alternateValue: C } }, element: o }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, o);
          } else if ("reverse" === A) {
            if (!i(o).tweensContainer) return void f.dequeue(o, s.queue);"none" === i(o).opts.display && (i(o).opts.display = "auto"), "hidden" === i(o).opts.visibility && (i(o).opts.visibility = "visible"), i(o).opts.loop = !1, i(o).opts.begin = null, i(o).opts.complete = null, v.easing || delete s.easing, v.duration || delete s.duration, s = f.extend({}, i(o).opts, s);var E = f.extend(!0, {}, i(o).tweensContainer);for (var H in E) {
              if ("element" !== H) {
                var N = E[H].startValue;E[H].startValue = E[H].currentValue = E[H].endValue, E[H].endValue = N, m.isEmptyObject(v) || (E[H].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + H + "): " + JSON.stringify(E[H]), o);
              }
            }l = E;
          } else if ("start" === A) {
            var E;i(o).tweensContainer && i(o).isAnimating === !0 && (E = i(o).tweensContainer), f.each(y, function (e, t) {
              if (RegExp("^" + S.Lists.colors.join("$|^") + "$").test(e)) {
                var r = p(t, !0),
                    n = r[0],
                    o = r[1],
                    i = r[2];if (S.RegEx.isHex.test(n)) {
                  for (var s = ["Red", "Green", "Blue"], l = S.Values.hexToRgb(n), u = i ? S.Values.hexToRgb(i) : a, c = 0; c < s.length; c++) {
                    var f = [l[c]];o && f.push(o), u !== a && f.push(u[c]), y[e + s[c]] = f;
                  }delete y[e];
                }
              }
            });for (var z in y) {
              var O = p(y[z]),
                  q = O[0],
                  $ = O[1],
                  M = O[2];z = S.Names.camelCase(z);var I = S.Hooks.getRoot(z),
                  B = !1;if (i(o).isSVG || "tween" === I || S.Names.prefixCheck(I)[1] !== !1 || S.Normalizations.registered[I] !== a) {
                (s.display !== a && null !== s.display && "none" !== s.display || s.visibility !== a && "hidden" !== s.visibility) && /opacity|filter/.test(z) && !M && 0 !== q && (M = 0), s._cacheValues && E && E[z] ? (M === a && (M = E[z].endValue + E[z].unitType), B = i(o).rootPropertyValueCache[I]) : S.Hooks.registered[z] ? M === a ? (B = S.getPropertyValue(o, I), M = S.getPropertyValue(o, z, B)) : B = S.Hooks.templates[I][1] : M === a && (M = S.getPropertyValue(o, z));var W,
                    G,
                    Y,
                    D = !1;if (W = d(z, M), M = W[0], Y = W[1], W = d(z, q), q = W[0].replace(/^([+-\/*])=/, function (e, t) {
                  return D = t, "";
                }), G = W[1], M = parseFloat(M) || 0, q = parseFloat(q) || 0, "%" === G && (/^(fontSize|lineHeight)$/.test(z) ? (q /= 100, G = "em") : /^scale/.test(z) ? (q /= 100, G = "") : /(Red|Green|Blue)$/i.test(z) && (q = q / 100 * 255, G = "")), /[\/*]/.test(D)) G = Y;else if (Y !== G && 0 !== M) if (0 === q) G = Y;else {
                  n = n || h();var Q = /margin|padding|left|right|width|text|word|letter/i.test(z) || /X$/.test(z) || "x" === z ? "x" : "y";switch (Y) {case "%":
                      M *= "x" === Q ? n.percentToPxWidth : n.percentToPxHeight;break;case "px":
                      break;default:
                      M *= n[Y + "ToPx"];}switch (G) {case "%":
                      M *= 1 / ("x" === Q ? n.percentToPxWidth : n.percentToPxHeight);break;case "px":
                      break;default:
                      M *= 1 / n[G + "ToPx"];}
                }switch (D) {case "+":
                    q = M + q;break;case "-":
                    q = M - q;break;case "*":
                    q = M * q;break;case "/":
                    q = M / q;}l[z] = { rootPropertyValue: B, startValue: M, currentValue: M, endValue: q, unitType: G, easing: $ }, b.debug && console.log("tweensContainer (" + z + "): " + JSON.stringify(l[z]), o);
              } else b.debug && console.log("Skipping [" + I + "] due to a lack of browser support.");
            }l.element = o;
          }l.element && (S.Values.addClass(o, "velocity-animating"), R.push(l), "" === s.queue && (i(o).tweensContainer = l, i(o).opts = s), i(o).isAnimating = !0, V === w - 1 ? (b.State.calls.push([R, g, s, null, k.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, c())) : V++);
        }var n,
            o = this,
            s = f.extend({}, b.defaults, v),
            l = {};switch (i(o) === a && b.init(o), parseFloat(s.delay) && s.queue !== !1 && f.queue(o, s.queue, function (e) {
          b.velocityQueueEntryFlag = !0, i(o).delayTimer = { setTimeout: setTimeout(e, parseFloat(s.delay)), next: e };
        }), s.duration.toString().toLowerCase()) {case "fast":
            s.duration = 200;break;case "normal":
            s.duration = h;break;case "slow":
            s.duration = 600;break;default:
            s.duration = parseFloat(s.duration) || 1;}b.mock !== !1 && (b.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = u(s.easing, s.duration), s.begin && !m.isFunction(s.begin) && (s.begin = null), s.progress && !m.isFunction(s.progress) && (s.progress = null), s.complete && !m.isFunction(s.complete) && (s.complete = null), s.display !== a && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(o))), s.visibility !== a && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(e, s.delay) : e() : f.queue(o, s.queue, function (t, r) {
          return r === !0 ? (k.promise && k.resolver(g), !0) : (b.velocityQueueEntryFlag = !0, void e(t));
        }), "" !== s.queue && "fx" !== s.queue || "inprogress" === f.queue(o)[0] || f.dequeue(o);
      }var s,
          l,
          d,
          g,
          y,
          v,
          x = arguments[0] && (arguments[0].p || f.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || m.isString(arguments[0].properties));if (m.isWrapped(this) ? (s = !1, d = 0, g = this, l = this) : (s = !0, d = 1, g = x ? arguments[0].elements || arguments[0].e : arguments[0]), g = o(g)) {
        x ? (y = arguments[0].properties || arguments[0].p, v = arguments[0].options || arguments[0].o) : (y = arguments[d], v = arguments[d + 1]);var w = g.length,
            V = 0;if (!/^(stop|finish)$/i.test(y) && !f.isPlainObject(v)) {
          var C = d + 1;v = {};for (var T = C; T < arguments.length; T++) {
            m.isArray(arguments[T]) || !/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]) ? m.isString(arguments[T]) || m.isArray(arguments[T]) ? v.easing = arguments[T] : m.isFunction(arguments[T]) && (v.complete = arguments[T]) : v.duration = arguments[T];
          }
        }var k = { promise: null, resolver: null, rejecter: null };s && b.Promise && (k.promise = new b.Promise(function (e, t) {
          k.resolver = e, k.rejecter = t;
        }));var A;switch (y) {case "scroll":
            A = "scroll";break;case "reverse":
            A = "reverse";break;case "finish":case "stop":
            f.each(g, function (e, t) {
              i(t) && i(t).delayTimer && (clearTimeout(i(t).delayTimer.setTimeout), i(t).delayTimer.next && i(t).delayTimer.next(), delete i(t).delayTimer);
            });var F = [];return f.each(b.State.calls, function (e, t) {
              t && f.each(t[1], function (r, n) {
                var o = v === a ? "" : v;return o === !0 || t[2].queue === o || v === a && t[2].queue === !1 ? void f.each(g, function (r, a) {
                  a === n && ((v === !0 || m.isString(v)) && (f.each(f.queue(a, m.isString(v) ? v : ""), function (e, t) {
                    m.isFunction(t) && t(null, !0);
                  }), f.queue(a, m.isString(v) ? v : "", [])), "stop" === y ? (i(a) && i(a).tweensContainer && o !== !1 && f.each(i(a).tweensContainer, function (e, t) {
                    t.endValue = t.currentValue;
                  }), F.push(e)) : "finish" === y && (t[2].duration = 1));
                }) : !0;
              });
            }), "stop" === y && (f.each(F, function (e, t) {
              p(t, !0);
            }), k.promise && k.resolver(g)), e();default:
            if (!f.isPlainObject(y) || m.isEmptyObject(y)) {
              if (m.isString(y) && b.Redirects[y]) {
                var j = f.extend({}, v),
                    E = j.duration,
                    H = j.delay || 0;return j.backwards === !0 && (g = f.extend(!0, [], g).reverse()), f.each(g, function (e, t) {
                  parseFloat(j.stagger) ? j.delay = H + parseFloat(j.stagger) * e : m.isFunction(j.stagger) && (j.delay = H + j.stagger.call(t, e, w)), j.drag && (j.duration = parseFloat(E) || (/^(callout|transition)/.test(y) ? 1e3 : h), j.duration = Math.max(j.duration * (j.backwards ? 1 - e / w : (e + 1) / w), .75 * j.duration, 200)), b.Redirects[y].call(t, t, j || {}, e, w, g, k.promise ? k : a);
                }), e();
              }var N = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting.";return k.promise ? k.rejecter(new Error(N)) : console.log(N), e();
            }A = "start";}var L = { lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null },
            R = [];f.each(g, function (e, t) {
          m.isNode(t) && n.call(t);
        });var z,
            j = f.extend({}, b.defaults, v);if (j.loop = parseInt(j.loop), z = 2 * j.loop - 1, j.loop) for (var O = 0; z > O; O++) {
          var q = { delay: j.delay, progress: j.progress };O === z - 1 && (q.display = j.display, q.visibility = j.visibility, q.complete = j.complete), P(g, "reverse", q);
        }return e();
      }
    };b = f.extend(P, b), b.animate = P;var w = t.requestAnimationFrame || g;return b.State.isMobile || r.hidden === a || r.addEventListener("visibilitychange", function () {
      r.hidden ? (w = function (e) {
        return setTimeout(function () {
          e(!0);
        }, 16);
      }, c()) : w = t.requestAnimationFrame || g;
    }), e.Velocity = b, e !== t && (e.fn.velocity = P, e.fn.velocity.defaults = b.defaults), f.each(["Down", "Up"], function (e, t) {
      b.Redirects["slide" + t] = function (e, r, n, o, i, s) {
        var l = f.extend({}, r),
            u = l.begin,
            c = l.complete,
            p = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },
            d = {};l.display === a && (l.display = "Down" === t ? "inline" === b.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function () {
          u && u.call(i, i);for (var r in p) {
            d[r] = e.style[r];var a = b.CSS.getPropertyValue(e, r);p[r] = "Down" === t ? [a, 0] : [0, a];
          }d.overflow = e.style.overflow, e.style.overflow = "hidden";
        }, l.complete = function () {
          for (var t in d) {
            e.style[t] = d[t];
          }c && c.call(i, i), s && s.resolver(i);
        }, b(e, p, l);
      };
    }), f.each(["In", "Out"], function (e, t) {
      b.Redirects["fade" + t] = function (e, r, n, o, i, s) {
        var l = f.extend({}, r),
            u = { opacity: "In" === t ? 1 : 0 },
            c = l.complete;l.complete = n !== o - 1 ? l.begin = null : function () {
          c && c.call(i, i), s && s.resolver(i);
        }, l.display === a && (l.display = "In" === t ? "auto" : "none"), b(this, u, l);
      };
    }), b;
  }(window.jQuery || window.Zepto || window, window, document);
}));
;!function (a, b, c, d) {
  "use strict";
  function k(a, b, c) {
    return setTimeout(q(a, c), b);
  }function l(a, b, c) {
    return Array.isArray(a) ? (m(a, c[b], c), !0) : !1;
  }function m(a, b, c) {
    var e;if (a) if (a.forEach) a.forEach(b, c);else if (a.length !== d) for (e = 0; e < a.length;) {
      b.call(c, a[e], e, a), e++;
    } else for (e in a) {
      a.hasOwnProperty(e) && b.call(c, a[e], e, a);
    }
  }function n(a, b, c) {
    for (var e = Object.keys(b), f = 0; f < e.length;) {
      (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
    }return a;
  }function o(a, b) {
    return n(a, b, !0);
  }function p(a, b, c) {
    var e,
        d = b.prototype;e = a.prototype = Object.create(d), e.constructor = a, e._super = d, c && n(e, c);
  }function q(a, b) {
    return function () {
      return a.apply(b, arguments);
    };
  }function r(a, b) {
    return typeof a == g ? a.apply(b ? b[0] || d : d, b) : a;
  }function s(a, b) {
    return a === d ? b : a;
  }function t(a, b, c) {
    m(x(b), function (b) {
      a.addEventListener(b, c, !1);
    });
  }function u(a, b, c) {
    m(x(b), function (b) {
      a.removeEventListener(b, c, !1);
    });
  }function v(a, b) {
    for (; a;) {
      if (a == b) return !0;a = a.parentNode;
    }return !1;
  }function w(a, b) {
    return a.indexOf(b) > -1;
  }function x(a) {
    return a.trim().split(/\s+/g);
  }function y(a, b, c) {
    if (a.indexOf && !c) return a.indexOf(b);for (var d = 0; d < a.length;) {
      if (c && a[d][c] == b || !c && a[d] === b) return d;d++;
    }return -1;
  }function z(a) {
    return Array.prototype.slice.call(a, 0);
  }function A(a, b, c) {
    for (var d = [], e = [], f = 0; f < a.length;) {
      var g = b ? a[f][b] : a[f];y(e, g) < 0 && d.push(a[f]), e[f] = g, f++;
    }return c && (d = b ? d.sort(function (a, c) {
      return a[b] > c[b];
    }) : d.sort()), d;
  }function B(a, b) {
    for (var c, f, g = b[0].toUpperCase() + b.slice(1), h = 0; h < e.length;) {
      if (c = e[h], f = c ? c + g : b, f in a) return f;h++;
    }return d;
  }function D() {
    return C++;
  }function E(a) {
    var b = a.ownerDocument;return b.defaultView || b.parentWindow;
  }function ab(a, b) {
    var c = this;this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
      r(a.options.enable, [a]) && c.handler(b);
    }, this.init();
  }function bb(a) {
    var b,
        c = a.options.inputClass;return b = c ? c : H ? wb : I ? Eb : G ? Gb : rb, new b(a, cb);
  }function cb(a, b, c) {
    var d = c.pointers.length,
        e = c.changedPointers.length,
        f = b & O && 0 === d - e,
        g = b & (Q | R) && 0 === d - e;c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, db(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c;
  }function db(a, b) {
    var c = a.session,
        d = b.pointers,
        e = d.length;c.firstInput || (c.firstInput = gb(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = gb(b) : 1 === e && (c.firstMultiple = !1);var f = c.firstInput,
        g = c.firstMultiple,
        h = g ? g.center : f.center,
        i = b.center = hb(d);b.timeStamp = j(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = lb(h, i), b.distance = kb(h, i), eb(c, b), b.offsetDirection = jb(b.deltaX, b.deltaY), b.scale = g ? nb(g.pointers, d) : 1, b.rotation = g ? mb(g.pointers, d) : 0, fb(c, b);var k = a.element;v(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k;
  }function eb(a, b) {
    var c = b.center,
        d = a.offsetDelta || {},
        e = a.prevDelta || {},
        f = a.prevInput || {};(b.eventType === O || f.eventType === Q) && (e = a.prevDelta = { x: f.deltaX || 0, y: f.deltaY || 0 }, d = a.offsetDelta = { x: c.x, y: c.y }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y);
  }function fb(a, b) {
    var f,
        g,
        h,
        j,
        c = a.lastInterval || b,
        e = b.timeStamp - c.timeStamp;if (b.eventType != R && (e > N || c.velocity === d)) {
      var k = c.deltaX - b.deltaX,
          l = c.deltaY - b.deltaY,
          m = ib(e, k, l);g = m.x, h = m.y, f = i(m.x) > i(m.y) ? m.x : m.y, j = jb(k, l), a.lastInterval = b;
    } else f = c.velocity, g = c.velocityX, h = c.velocityY, j = c.direction;b.velocity = f, b.velocityX = g, b.velocityY = h, b.direction = j;
  }function gb(a) {
    for (var b = [], c = 0; c < a.pointers.length;) {
      b[c] = { clientX: h(a.pointers[c].clientX), clientY: h(a.pointers[c].clientY) }, c++;
    }return { timeStamp: j(), pointers: b, center: hb(b), deltaX: a.deltaX, deltaY: a.deltaY };
  }function hb(a) {
    var b = a.length;if (1 === b) return { x: h(a[0].clientX), y: h(a[0].clientY) };for (var c = 0, d = 0, e = 0; b > e;) {
      c += a[e].clientX, d += a[e].clientY, e++;
    }return { x: h(c / b), y: h(d / b) };
  }function ib(a, b, c) {
    return { x: b / a || 0, y: c / a || 0 };
  }function jb(a, b) {
    return a === b ? S : i(a) >= i(b) ? a > 0 ? T : U : b > 0 ? V : W;
  }function kb(a, b, c) {
    c || (c = $);var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];return Math.sqrt(d * d + e * e);
  }function lb(a, b, c) {
    c || (c = $);var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];return 180 * Math.atan2(e, d) / Math.PI;
  }function mb(a, b) {
    return lb(b[1], b[0], _) - lb(a[1], a[0], _);
  }function nb(a, b) {
    return kb(b[0], b[1], _) / kb(a[0], a[1], _);
  }function rb() {
    this.evEl = pb, this.evWin = qb, this.allow = !0, this.pressed = !1, ab.apply(this, arguments);
  }function wb() {
    this.evEl = ub, this.evWin = vb, ab.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
  }function Ab() {
    this.evTarget = yb, this.evWin = zb, this.started = !1, ab.apply(this, arguments);
  }function Bb(a, b) {
    var c = z(a.touches),
        d = z(a.changedTouches);return b & (Q | R) && (c = A(c.concat(d), "identifier", !0)), [c, d];
  }function Eb() {
    this.evTarget = Db, this.targetIds = {}, ab.apply(this, arguments);
  }function Fb(a, b) {
    var c = z(a.touches),
        d = this.targetIds;if (b & (O | P) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];var e,
        f,
        g = z(a.changedTouches),
        h = [],
        i = this.target;if (f = c.filter(function (a) {
      return v(a.target, i);
    }), b === O) for (e = 0; e < f.length;) {
      d[f[e].identifier] = !0, e++;
    }for (e = 0; e < g.length;) {
      d[g[e].identifier] && h.push(g[e]), b & (Q | R) && delete d[g[e].identifier], e++;
    }return h.length ? [A(f.concat(h), "identifier", !0), h] : void 0;
  }function Gb() {
    ab.apply(this, arguments);var a = q(this.handler, this);this.touch = new Eb(this.manager, a), this.mouse = new rb(this.manager, a);
  }function Pb(a, b) {
    this.manager = a, this.set(b);
  }function Qb(a) {
    if (w(a, Mb)) return Mb;var b = w(a, Nb),
        c = w(a, Ob);return b && c ? Nb + " " + Ob : b || c ? b ? Nb : Ob : w(a, Lb) ? Lb : Kb;
  }function Yb(a) {
    this.id = D(), this.manager = null, this.options = o(a || {}, this.defaults), this.options.enable = s(this.options.enable, !0), this.state = Rb, this.simultaneous = {}, this.requireFail = [];
  }function Zb(a) {
    return a & Wb ? "cancel" : a & Ub ? "end" : a & Tb ? "move" : a & Sb ? "start" : "";
  }function $b(a) {
    return a == W ? "down" : a == V ? "up" : a == T ? "left" : a == U ? "right" : "";
  }function _b(a, b) {
    var c = b.manager;return c ? c.get(a) : a;
  }function ac() {
    Yb.apply(this, arguments);
  }function bc() {
    ac.apply(this, arguments), this.pX = null, this.pY = null;
  }function cc() {
    ac.apply(this, arguments);
  }function dc() {
    Yb.apply(this, arguments), this._timer = null, this._input = null;
  }function ec() {
    ac.apply(this, arguments);
  }function fc() {
    ac.apply(this, arguments);
  }function gc() {
    Yb.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
  }function hc(a, b) {
    return b = b || {}, b.recognizers = s(b.recognizers, hc.defaults.preset), new kc(a, b);
  }function kc(a, b) {
    b = b || {}, this.options = o(b, hc.defaults), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = a, this.input = bb(this), this.touchAction = new Pb(this, this.options.touchAction), lc(this, !0), m(b.recognizers, function (a) {
      var b = this.add(new a[0](a[1]));a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
    }, this);
  }function lc(a, b) {
    var c = a.element;m(a.options.cssProps, function (a, d) {
      c.style[B(c.style, d)] = b ? a : "";
    });
  }function mc(a, c) {
    var d = b.createEvent("Event");d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d);
  }var e = ["", "webkit", "moz", "MS", "ms", "o"],
      f = b.createElement("div"),
      g = "function",
      h = Math.round,
      i = Math.abs,
      j = Date.now,
      C = 1,
      F = /mobile|tablet|ip(ad|hone|od)|android/i,
      G = "ontouchstart" in a,
      H = B(a, "PointerEvent") !== d,
      I = G && F.test(navigator.userAgent),
      J = "touch",
      K = "pen",
      L = "mouse",
      M = "kinect",
      N = 25,
      O = 1,
      P = 2,
      Q = 4,
      R = 8,
      S = 1,
      T = 2,
      U = 4,
      V = 8,
      W = 16,
      X = T | U,
      Y = V | W,
      Z = X | Y,
      $ = ["x", "y"],
      _ = ["clientX", "clientY"];ab.prototype = { handler: function () {}, init: function () {
      this.evEl && t(this.element, this.evEl, this.domHandler), this.evTarget && t(this.target, this.evTarget, this.domHandler), this.evWin && t(E(this.element), this.evWin, this.domHandler);
    }, destroy: function () {
      this.evEl && u(this.element, this.evEl, this.domHandler), this.evTarget && u(this.target, this.evTarget, this.domHandler), this.evWin && u(E(this.element), this.evWin, this.domHandler);
    } };var ob = { mousedown: O, mousemove: P, mouseup: Q },
      pb = "mousedown",
      qb = "mousemove mouseup";p(rb, ab, { handler: function (a) {
      var b = ob[a.type];b & O && 0 === a.button && (this.pressed = !0), b & P && 1 !== a.which && (b = Q), this.pressed && this.allow && (b & Q && (this.pressed = !1), this.callback(this.manager, b, { pointers: [a], changedPointers: [a], pointerType: L, srcEvent: a }));
    } });var sb = { pointerdown: O, pointermove: P, pointerup: Q, pointercancel: R, pointerout: R },
      tb = { 2: J, 3: K, 4: L, 5: M },
      ub = "pointerdown",
      vb = "pointermove pointerup pointercancel";a.MSPointerEvent && (ub = "MSPointerDown", vb = "MSPointerMove MSPointerUp MSPointerCancel"), p(wb, ab, { handler: function (a) {
      var b = this.store,
          c = !1,
          d = a.type.toLowerCase().replace("ms", ""),
          e = sb[d],
          f = tb[a.pointerType] || a.pointerType,
          g = f == J,
          h = y(b, a.pointerId, "pointerId");e & O && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Q | R) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, { pointers: b, changedPointers: [a], pointerType: f, srcEvent: a }), c && b.splice(h, 1));
    } });var xb = { touchstart: O, touchmove: P, touchend: Q, touchcancel: R },
      yb = "touchstart",
      zb = "touchstart touchmove touchend touchcancel";p(Ab, ab, { handler: function (a) {
      var b = xb[a.type];if (b === O && (this.started = !0), this.started) {
        var c = Bb.call(this, a, b);b & (Q | R) && 0 === c[0].length - c[1].length && (this.started = !1), this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: J, srcEvent: a });
      }
    } });var Cb = { touchstart: O, touchmove: P, touchend: Q, touchcancel: R },
      Db = "touchstart touchmove touchend touchcancel";p(Eb, ab, { handler: function (a) {
      var b = Cb[a.type],
          c = Fb.call(this, a, b);c && this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: J, srcEvent: a });
    } }), p(Gb, ab, { handler: function (a, b, c) {
      var d = c.pointerType == J,
          e = c.pointerType == L;if (d) this.mouse.allow = !1;else if (e && !this.mouse.allow) return;b & (Q | R) && (this.mouse.allow = !0), this.callback(a, b, c);
    }, destroy: function () {
      this.touch.destroy(), this.mouse.destroy();
    } });var Hb = B(f.style, "touchAction"),
      Ib = Hb !== d,
      Jb = "compute",
      Kb = "auto",
      Lb = "manipulation",
      Mb = "none",
      Nb = "pan-x",
      Ob = "pan-y";Pb.prototype = { set: function (a) {
      a == Jb && (a = this.compute()), Ib && (this.manager.element.style[Hb] = a), this.actions = a.toLowerCase().trim();
    }, update: function () {
      this.set(this.manager.options.touchAction);
    }, compute: function () {
      var a = [];return m(this.manager.recognizers, function (b) {
        r(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()));
      }), Qb(a.join(" "));
    }, preventDefaults: function (a) {
      if (!Ib) {
        var b = a.srcEvent,
            c = a.offsetDirection;if (this.manager.session.prevented) return b.preventDefault(), void 0;var d = this.actions,
            e = w(d, Mb),
            f = w(d, Ob),
            g = w(d, Nb);return e || f && c & X || g && c & Y ? this.preventSrc(b) : void 0;
      }
    }, preventSrc: function (a) {
      this.manager.session.prevented = !0, a.preventDefault();
    } };var Rb = 1,
      Sb = 2,
      Tb = 4,
      Ub = 8,
      Vb = Ub,
      Wb = 16,
      Xb = 32;Yb.prototype = { defaults: {}, set: function (a) {
      return n(this.options, a), this.manager && this.manager.touchAction.update(), this;
    }, recognizeWith: function (a) {
      if (l(a, "recognizeWith", this)) return this;var b = this.simultaneous;return a = _b(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this;
    }, dropRecognizeWith: function (a) {
      return l(a, "dropRecognizeWith", this) ? this : (a = _b(a, this), delete this.simultaneous[a.id], this);
    }, requireFailure: function (a) {
      if (l(a, "requireFailure", this)) return this;var b = this.requireFail;return a = _b(a, this), -1 === y(b, a) && (b.push(a), a.requireFailure(this)), this;
    }, dropRequireFailure: function (a) {
      if (l(a, "dropRequireFailure", this)) return this;a = _b(a, this);var b = y(this.requireFail, a);return b > -1 && this.requireFail.splice(b, 1), this;
    }, hasRequireFailures: function () {
      return this.requireFail.length > 0;
    }, canRecognizeWith: function (a) {
      return !!this.simultaneous[a.id];
    }, emit: function (a) {
      function d(d) {
        b.manager.emit(b.options.event + (d ? Zb(c) : ""), a);
      }var b = this,
          c = this.state;Ub > c && d(!0), d(), c >= Ub && d(!0);
    }, tryEmit: function (a) {
      return this.canEmit() ? this.emit(a) : (this.state = Xb, void 0);
    }, canEmit: function () {
      for (var a = 0; a < this.requireFail.length;) {
        if (!(this.requireFail[a].state & (Xb | Rb))) return !1;a++;
      }return !0;
    }, recognize: function (a) {
      var b = n({}, a);return r(this.options.enable, [this, b]) ? (this.state & (Vb | Wb | Xb) && (this.state = Rb), this.state = this.process(b), this.state & (Sb | Tb | Ub | Wb) && this.tryEmit(b), void 0) : (this.reset(), this.state = Xb, void 0);
    }, process: function () {}, getTouchAction: function () {}, reset: function () {} }, p(ac, Yb, { defaults: { pointers: 1 }, attrTest: function (a) {
      var b = this.options.pointers;return 0 === b || a.pointers.length === b;
    }, process: function (a) {
      var b = this.state,
          c = a.eventType,
          d = b & (Sb | Tb),
          e = this.attrTest(a);return d && (c & R || !e) ? b | Wb : d || e ? c & Q ? b | Ub : b & Sb ? b | Tb : Sb : Xb;
    } }), p(bc, ac, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: Z }, getTouchAction: function () {
      var a = this.options.direction,
          b = [];return a & X && b.push(Ob), a & Y && b.push(Nb), b;
    }, directionTest: function (a) {
      var b = this.options,
          c = !0,
          d = a.distance,
          e = a.direction,
          f = a.deltaX,
          g = a.deltaY;return e & b.direction || (b.direction & X ? (e = 0 === f ? S : 0 > f ? T : U, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? S : 0 > g ? V : W, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction;
    }, attrTest: function (a) {
      return ac.prototype.attrTest.call(this, a) && (this.state & Sb || !(this.state & Sb) && this.directionTest(a));
    }, emit: function (a) {
      this.pX = a.deltaX, this.pY = a.deltaY;var b = $b(a.direction);b && this.manager.emit(this.options.event + b, a), this._super.emit.call(this, a);
    } }), p(cc, ac, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function () {
      return [Mb];
    }, attrTest: function (a) {
      return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & Sb);
    }, emit: function (a) {
      if (this._super.emit.call(this, a), 1 !== a.scale) {
        var b = a.scale < 1 ? "in" : "out";this.manager.emit(this.options.event + b, a);
      }
    } }), p(dc, Yb, { defaults: { event: "press", pointers: 1, time: 500, threshold: 5 }, getTouchAction: function () {
      return [Kb];
    }, process: function (a) {
      var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          e = a.deltaTime > b.time;if (this._input = a, !d || !c || a.eventType & (Q | R) && !e) this.reset();else if (a.eventType & O) this.reset(), this._timer = k(function () {
        this.state = Vb, this.tryEmit();
      }, b.time, this);else if (a.eventType & Q) return Vb;return Xb;
    }, reset: function () {
      clearTimeout(this._timer);
    }, emit: function (a) {
      this.state === Vb && (a && a.eventType & Q ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = j(), this.manager.emit(this.options.event, this._input)));
    } }), p(ec, ac, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function () {
      return [Mb];
    }, attrTest: function (a) {
      return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & Sb);
    } }), p(fc, ac, { defaults: { event: "swipe", threshold: 10, velocity: .65, direction: X | Y, pointers: 1 }, getTouchAction: function () {
      return bc.prototype.getTouchAction.call(this);
    }, attrTest: function (a) {
      var c,
          b = this.options.direction;return b & (X | Y) ? c = a.velocity : b & X ? c = a.velocityX : b & Y && (c = a.velocityY), this._super.attrTest.call(this, a) && b & a.direction && a.distance > this.options.threshold && i(c) > this.options.velocity && a.eventType & Q;
    }, emit: function (a) {
      var b = $b(a.direction);b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a);
    } }), p(gc, Yb, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 2, posThreshold: 10 }, getTouchAction: function () {
      return [Lb];
    }, process: function (a) {
      var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          e = a.deltaTime < b.time;if (this.reset(), a.eventType & O && 0 === this.count) return this.failTimeout();if (d && e && c) {
        if (a.eventType != Q) return this.failTimeout();var f = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
            g = !this.pCenter || kb(this.pCenter, a.center) < b.posThreshold;this.pTime = a.timeStamp, this.pCenter = a.center, g && f ? this.count += 1 : this.count = 1, this._input = a;var h = this.count % b.taps;if (0 === h) return this.hasRequireFailures() ? (this._timer = k(function () {
          this.state = Vb, this.tryEmit();
        }, b.interval, this), Sb) : Vb;
      }return Xb;
    }, failTimeout: function () {
      return this._timer = k(function () {
        this.state = Xb;
      }, this.options.interval, this), Xb;
    }, reset: function () {
      clearTimeout(this._timer);
    }, emit: function () {
      this.state == Vb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
    } }), hc.VERSION = "2.0.4", hc.defaults = { domEvents: !1, touchAction: Jb, enable: !0, inputTarget: null, inputClass: null, preset: [[ec, { enable: !1 }], [cc, { enable: !1 }, ["rotate"]], [fc, { direction: X }], [bc, { direction: X }, ["swipe"]], [gc], [gc, { event: "doubletap", taps: 2 }, ["tap"]], [dc]], cssProps: { userSelect: "default", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } };var ic = 1,
      jc = 2;kc.prototype = { set: function (a) {
      return n(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this;
    }, stop: function (a) {
      this.session.stopped = a ? jc : ic;
    }, recognize: function (a) {
      var b = this.session;if (!b.stopped) {
        this.touchAction.preventDefaults(a);var c,
            d = this.recognizers,
            e = b.curRecognizer;(!e || e && e.state & Vb) && (e = b.curRecognizer = null);for (var f = 0; f < d.length;) {
          c = d[f], b.stopped === jc || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (Sb | Tb | Ub) && (e = b.curRecognizer = c), f++;
        }
      }
    }, get: function (a) {
      if (a instanceof Yb) return a;for (var b = this.recognizers, c = 0; c < b.length; c++) {
        if (b[c].options.event == a) return b[c];
      }return null;
    }, add: function (a) {
      if (l(a, "add", this)) return this;var b = this.get(a.options.event);return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a;
    }, remove: function (a) {
      if (l(a, "remove", this)) return this;var b = this.recognizers;return a = this.get(a), b.splice(y(b, a), 1), this.touchAction.update(), this;
    }, on: function (a, b) {
      var c = this.handlers;return m(x(a), function (a) {
        c[a] = c[a] || [], c[a].push(b);
      }), this;
    }, off: function (a, b) {
      var c = this.handlers;return m(x(a), function (a) {
        b ? c[a].splice(y(c[a], b), 1) : delete c[a];
      }), this;
    }, emit: function (a, b) {
      this.options.domEvents && mc(a, b);var c = this.handlers[a] && this.handlers[a].slice();if (c && c.length) {
        b.type = a, b.preventDefault = function () {
          b.srcEvent.preventDefault();
        };for (var d = 0; d < c.length;) {
          c[d](b), d++;
        }
      }
    }, destroy: function () {
      this.element && lc(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
    } }, n(hc, { INPUT_START: O, INPUT_MOVE: P, INPUT_END: Q, INPUT_CANCEL: R, STATE_POSSIBLE: Rb, STATE_BEGAN: Sb, STATE_CHANGED: Tb, STATE_ENDED: Ub, STATE_RECOGNIZED: Vb, STATE_CANCELLED: Wb, STATE_FAILED: Xb, DIRECTION_NONE: S, DIRECTION_LEFT: T, DIRECTION_RIGHT: U, DIRECTION_UP: V, DIRECTION_DOWN: W, DIRECTION_HORIZONTAL: X, DIRECTION_VERTICAL: Y, DIRECTION_ALL: Z, Manager: kc, Input: ab, TouchAction: Pb, TouchInput: Eb, MouseInput: rb, PointerEventInput: wb, TouchMouseInput: Gb, SingleTouchInput: Ab, Recognizer: Yb, AttrRecognizer: ac, Tap: gc, Pan: bc, Swipe: fc, Pinch: cc, Rotate: ec, Press: dc, on: t, off: u, each: m, merge: o, extend: n, inherit: p, bindFn: q, prefixed: B }), typeof define == g && define.amd ? define(function () {
    return hc;
  }) : "undefined" != typeof module && module.exports ? module.exports = hc : a[c] = hc;
}(window, document, "Hammer");;(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'hammerjs'], factory);
  } else if (typeof exports === 'object') {
    factory(require('jquery'), require('hammerjs'));
  } else {
    factory(jQuery, Hammer);
  }
})(function ($, Hammer) {
  function hammerify(el, options) {
    var $el = $(el);
    if (!$el.data("hammer")) {
      $el.data("hammer", new Hammer($el[0], options));
    }
  }

  $.fn.hammer = function (options) {
    return this.each(function () {
      hammerify(this, options);
    });
  };

  // extend the emit method to also trigger jQuery events
  Hammer.Manager.prototype.emit = function (originalEmit) {
    return function (type, data) {
      originalEmit.call(this, type, data);
      $(this.element).trigger({
        type: type,
        gesture: data
      });
    };
  }(Hammer.Manager.prototype.emit);
});
; // Required for Meteor package, the use of window prevents export by Meteor
(function (window) {
  if (window.Package) {
    Materialize = {};
  } else {
    window.Materialize = {};
  }
})(window);

if (typeof exports !== 'undefined' && !exports.nodeType) {
  if (typeof module !== 'undefined' && !module.nodeType && module.exports) {
    exports = module.exports = Materialize;
  }
  exports.default = Materialize;
}

/*
 * raf.js
 * https://github.com/ngryman/raf.js
 *
 * original requestAnimationFrame polyfill by Erik Möller
 * inspired from paul_irish gist and post
 *
 * Copyright (c) 2013 ngryman
 * Licensed under the MIT license.
 */
(function (window) {
  var lastTime = 0,
      vendors = ['webkit', 'moz'],
      requestAnimationFrame = window.requestAnimationFrame,
      cancelAnimationFrame = window.cancelAnimationFrame,
      i = vendors.length;

  // try to un-prefix existing raf
  while (--i >= 0 && !requestAnimationFrame) {
    requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
    cancelAnimationFrame = window[vendors[i] + 'CancelRequestAnimationFrame'];
  }

  // polyfill with setTimeout fallback
  // heavily inspired from @darius gist mod: https://gist.github.com/paulirish/1579671#comment-837945
  if (!requestAnimationFrame || !cancelAnimationFrame) {
    requestAnimationFrame = function (callback) {
      var now = +Date.now(),
          nextTime = Math.max(lastTime + 16, now);
      return setTimeout(function () {
        callback(lastTime = nextTime);
      }, nextTime - now);
    };

    cancelAnimationFrame = clearTimeout;
  }

  // export to window
  window.requestAnimationFrame = requestAnimationFrame;
  window.cancelAnimationFrame = cancelAnimationFrame;
})(window);

/**
 * Generate approximated selector string for a jQuery object
 * @param {jQuery} obj  jQuery object to be parsed
 * @returns {string}
 */
Materialize.objectSelectorString = function (obj) {
  var tagStr = obj.prop('tagName') || '';
  var idStr = obj.attr('id') || '';
  var classStr = obj.attr('class') || '';
  return (tagStr + idStr + classStr).replace(/\s/g, '');
};

// Unique Random ID
Materialize.guid = function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return function () {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  };
}();

/**
 * Escapes hash from special characters
 * @param {string} hash  String returned from this.hash
 * @returns {string}
 */
Materialize.escapeHash = function (hash) {
  return hash.replace(/(:|\.|\[|\]|,|=)/g, "\\$1");
};

Materialize.elementOrParentIsFixed = function (element) {
  var $element = $(element);
  var $checkElements = $element.add($element.parents());
  var isFixed = false;
  $checkElements.each(function () {
    if ($(this).css("position") === "fixed") {
      isFixed = true;
      return false;
    }
  });
  return isFixed;
};

/**
 * Get time in ms
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @type {function}
 * @return {number}
 */
var getTime = Date.now || function () {
  return new Date().getTime();
};

/**
 * Returns a function, that, when invoked, will only be triggered at most once
 * during a given window of time. Normally, the throttled function will run
 * as much as it can, without ever going more than once per `wait` duration;
 * but if you'd like to disable the execution on the leading edge, pass
 * `{leading: false}`. To disable execution on the trailing edge, ditto.
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @param {function} func
 * @param {number} wait
 * @param {Object=} options
 * @returns {Function}
 */
Materialize.throttle = function (func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  options || (options = {});
  var later = function () {
    previous = options.leading === false ? 0 : getTime();
    timeout = null;
    result = func.apply(context, args);
    context = args = null;
  };
  return function () {
    var now = getTime();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
      context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

// Velocity has conflicts when loaded with jQuery, this will check for it
// First, check if in noConflict mode
var Vel;
if (jQuery) {
  Vel = jQuery.Velocity;
} else if ($) {
  Vel = $.Velocity;
} else {
  Vel = Velocity;
}

if (Vel) {
  Materialize.Vel = Vel;
} else {
  Materialize.Vel = Velocity;
}
;(function ($) {
  $.fn.collapsible = function (options, methodParam) {
    var defaults = {
      accordion: undefined,
      onOpen: undefined,
      onClose: undefined
    };

    var methodName = options;
    options = $.extend(defaults, options);

    return this.each(function () {

      var $this = $(this);

      var $panel_headers = $(this).find('> li > .collapsible-header');

      var collapsible_type = $this.data("collapsible");

      /****************
      Helper Functions
      ****************/

      // Accordion Open
      function accordionOpen(object) {
        $panel_headers = $this.find('> li > .collapsible-header');
        if (object.hasClass('active')) {
          object.parent().addClass('active');
        } else {
          object.parent().removeClass('active');
        }
        if (object.parent().hasClass('active')) {
          object.siblings('.collapsible-body').stop(true, false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function () {
              $(this).css('height', '');
            } });
        } else {
          object.siblings('.collapsible-body').stop(true, false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function () {
              $(this).css('height', '');
            } });
        }

        $panel_headers.not(object).removeClass('active').parent().removeClass('active');

        // Close previously open accordion elements.
        $panel_headers.not(object).parent().children('.collapsible-body').stop(true, false).each(function () {
          if ($(this).is(':visible')) {
            $(this).slideUp({
              duration: 350,
              easing: "easeOutQuart",
              queue: false,
              complete: function () {
                $(this).css('height', '');
                execCallbacks($(this).siblings('.collapsible-header'));
              }
            });
          }
        });
      }

      // Expandable Open
      function expandableOpen(object) {
        if (object.hasClass('active')) {
          object.parent().addClass('active');
        } else {
          object.parent().removeClass('active');
        }
        if (object.parent().hasClass('active')) {
          object.siblings('.collapsible-body').stop(true, false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function () {
              $(this).css('height', '');
            } });
        } else {
          object.siblings('.collapsible-body').stop(true, false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function () {
              $(this).css('height', '');
            } });
        }
      }

      // Open collapsible. object: .collapsible-header
      function collapsibleOpen(object, noToggle) {
        if (!noToggle) {
          object.toggleClass('active');
        }

        if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) {
          // Handle Accordion
          accordionOpen(object);
        } else {
          // Handle Expandables
          expandableOpen(object);
        }

        execCallbacks(object);
      }

      // Handle callbacks
      function execCallbacks(object) {
        if (object.hasClass('active')) {
          if (typeof options.onOpen === "function") {
            options.onOpen.call(this, object.parent());
          }
        } else {
          if (typeof options.onClose === "function") {
            options.onClose.call(this, object.parent());
          }
        }
      }

      /**
       * Check if object is children of panel header
       * @param  {Object}  object Jquery object
       * @return {Boolean} true if it is children
       */
      function isChildrenOfPanelHeader(object) {

        var panelHeader = getPanelHeader(object);

        return panelHeader.length > 0;
      }

      /**
       * Get panel header from a children element
       * @param  {Object} object Jquery object
       * @return {Object} panel header object
       */
      function getPanelHeader(object) {

        return object.closest('li > .collapsible-header');
      }

      // Turn off any existing event handlers
      function removeEventHandlers() {
        $this.off('click.collapse', '> li > .collapsible-header');
      }

      /*****  End Helper Functions  *****/

      // Methods
      if (methodName === 'destroy') {
        removeEventHandlers();
        return;
      } else if (methodParam >= 0 && methodParam < $panel_headers.length) {
        var $curr_header = $panel_headers.eq(methodParam);
        if ($curr_header.length && (methodName === 'open' || methodName === 'close' && $curr_header.hasClass('active'))) {
          collapsibleOpen($curr_header);
        }
        return;
      }

      removeEventHandlers();

      // Add click handler to only direct collapsible header children
      $this.on('click.collapse', '> li > .collapsible-header', function (e) {
        var element = $(e.target);

        if (isChildrenOfPanelHeader(element)) {
          element = getPanelHeader(element);
        }

        collapsibleOpen(element);
      });

      // Open first active
      if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) {
        // Handle Accordion
        collapsibleOpen($panel_headers.filter('.active').first(), true);
      } else {
        // Handle Expandables
        $panel_headers.filter('.active').each(function () {
          collapsibleOpen($(this), true);
        });
      }
    });
  };

  $(document).ready(function () {
    $('.collapsible').collapsible();
  });
})(jQuery);;(function ($) {

  // Add posibility to scroll to selected option
  // usefull for select for example
  $.fn.scrollTo = function (elem) {
    $(this).scrollTop($(this).scrollTop() - $(this).offset().top + $(elem).offset().top);
    return this;
  };

  $.fn.dropdown = function (options) {
    var defaults = {
      inDuration: 300,
      outDuration: 225,
      constrainWidth: true, // Constrains width of dropdown to the activator
      hover: false,
      gutter: 0, // Spacing from edge
      belowOrigin: false,
      alignment: 'left',
      stopPropagation: false
    };

    // Open dropdown.
    if (options === "open") {
      this.each(function () {
        $(this).trigger('open');
      });
      return false;
    }

    // Close dropdown.
    if (options === "close") {
      this.each(function () {
        $(this).trigger('close');
      });
      return false;
    }

    this.each(function () {
      var origin = $(this);
      var curr_options = $.extend({}, defaults, options);
      var isFocused = false;

      // Dropdown menu
      var activates = $("#" + origin.attr('data-activates'));

      function updateOptions() {
        if (origin.data('induration') !== undefined) curr_options.inDuration = origin.data('induration');
        if (origin.data('outduration') !== undefined) curr_options.outDuration = origin.data('outduration');
        if (origin.data('constrainwidth') !== undefined) curr_options.constrainWidth = origin.data('constrainwidth');
        if (origin.data('hover') !== undefined) curr_options.hover = origin.data('hover');
        if (origin.data('gutter') !== undefined) curr_options.gutter = origin.data('gutter');
        if (origin.data('beloworigin') !== undefined) curr_options.belowOrigin = origin.data('beloworigin');
        if (origin.data('alignment') !== undefined) curr_options.alignment = origin.data('alignment');
        if (origin.data('stoppropagation') !== undefined) curr_options.stopPropagation = origin.data('stoppropagation');
      }

      updateOptions();

      // Attach dropdown to its activator
      origin.after(activates);

      /*
        Helper function to position and resize dropdown.
        Used in hover and click handler.
      */
      function placeDropdown(eventType) {
        // Check for simultaneous focus and click events.
        if (eventType === 'focus') {
          isFocused = true;
        }

        // Check html data attributes
        updateOptions();

        // Set Dropdown state
        activates.addClass('active');
        origin.addClass('active');

        var originWidth = origin[0].getBoundingClientRect().width;

        // Constrain width
        if (curr_options.constrainWidth === true) {
          activates.css('width', originWidth);
        } else {
          activates.css('white-space', 'nowrap');
        }

        // Offscreen detection
        var windowHeight = window.innerHeight;
        var originHeight = origin.innerHeight();
        var offsetLeft = origin.offset().left;
        var offsetTop = origin.offset().top - $(window).scrollTop();
        var currAlignment = curr_options.alignment;
        var gutterSpacing = 0;
        var leftPosition = 0;

        // Below Origin
        var verticalOffset = 0;
        if (curr_options.belowOrigin === true) {
          verticalOffset = originHeight;
        }

        // Check for scrolling positioned container.
        var scrollYOffset = 0;
        var scrollXOffset = 0;
        var wrapper = origin.parent();
        if (!wrapper.is('body')) {
          if (wrapper[0].scrollHeight > wrapper[0].clientHeight) {
            scrollYOffset = wrapper[0].scrollTop;
          }
          if (wrapper[0].scrollWidth > wrapper[0].clientWidth) {
            scrollXOffset = wrapper[0].scrollLeft;
          }
        }

        if (offsetLeft + activates.innerWidth() > $(window).width()) {
          // Dropdown goes past screen on right, force right alignment
          currAlignment = 'right';
        } else if (offsetLeft - activates.innerWidth() + origin.innerWidth() < 0) {
          // Dropdown goes past screen on left, force left alignment
          currAlignment = 'left';
        }
        // Vertical bottom offscreen detection
        if (offsetTop + activates.innerHeight() > windowHeight) {
          // If going upwards still goes offscreen, just crop height of dropdown.
          if (offsetTop + originHeight - activates.innerHeight() < 0) {
            var adjustedHeight = windowHeight - offsetTop - verticalOffset;
            activates.css('max-height', adjustedHeight);
          } else {
            // Flow upwards.
            if (!verticalOffset) {
              verticalOffset += originHeight;
            }
            verticalOffset -= activates.innerHeight();
          }
        }

        // Handle edge alignment
        if (currAlignment === 'left') {
          gutterSpacing = curr_options.gutter;
          leftPosition = origin.position().left + gutterSpacing;
        } else if (currAlignment === 'right') {
          // Material icons fix
          activates.stop(true, true).css({
            opacity: 0,
            left: 0
          });

          var offsetRight = origin.position().left + originWidth - activates.width();
          gutterSpacing = -curr_options.gutter;
          leftPosition = offsetRight + gutterSpacing;
        }

        // Position dropdown
        activates.css({
          position: 'absolute',
          top: origin.position().top + verticalOffset + scrollYOffset,
          left: leftPosition + scrollXOffset
        });

        // Show dropdown
        activates.slideDown({
          queue: false,
          duration: curr_options.inDuration,
          easing: 'easeOutCubic',
          complete: function () {
            $(this).css('height', '');
          }
        }).animate({ opacity: 1 }, { queue: false, duration: curr_options.inDuration, easing: 'easeOutSine' });

        // Add click close handler to document
        setTimeout(function () {
          $(document).on('click.' + activates.attr('id'), function (e) {
            hideDropdown();
            $(document).off('click.' + activates.attr('id'));
          });
        }, 0);
      }

      function hideDropdown() {
        // Check for simultaneous focus and click events.
        isFocused = false;
        activates.fadeOut(curr_options.outDuration);
        activates.removeClass('active');
        origin.removeClass('active');
        $(document).off('click.' + activates.attr('id'));
        setTimeout(function () {
          activates.css('max-height', '');
        }, curr_options.outDuration);
      }

      // Hover
      if (curr_options.hover) {
        var open = false;
        origin.off('click.' + origin.attr('id'));
        // Hover handler to show dropdown
        origin.on('mouseenter', function (e) {
          // Mouse over
          if (open === false) {
            placeDropdown();
            open = true;
          }
        });
        origin.on('mouseleave', function (e) {
          // If hover on origin then to something other than dropdown content, then close
          var toEl = e.toElement || e.relatedTarget; // added browser compatibility for target element
          if (!$(toEl).closest('.dropdown-content').is(activates)) {
            activates.stop(true, true);
            hideDropdown();
            open = false;
          }
        });

        activates.on('mouseleave', function (e) {
          // Mouse out
          var toEl = e.toElement || e.relatedTarget;
          if (!$(toEl).closest('.dropdown-button').is(origin)) {
            activates.stop(true, true);
            hideDropdown();
            open = false;
          }
        });

        // Click
      } else {
        // Click handler to show dropdown
        origin.off('click.' + origin.attr('id'));
        origin.on('click.' + origin.attr('id'), function (e) {
          if (!isFocused) {
            if (origin[0] == e.currentTarget && !origin.hasClass('active') && $(e.target).closest('.dropdown-content').length === 0) {
              e.preventDefault(); // Prevents button click from moving window
              if (curr_options.stopPropagation) {
                e.stopPropagation();
              }
              placeDropdown('click');
            }
            // If origin is clicked and menu is open, close menu
            else if (origin.hasClass('active')) {
                hideDropdown();
                $(document).off('click.' + activates.attr('id'));
              }
          }
        });
      } // End else

      // Listen to open and close event - useful for select component
      origin.on('open', function (e, eventType) {
        placeDropdown(eventType);
      });
      origin.on('close', hideDropdown);
    });
  }; // End dropdown plugin

  $(document).ready(function () {
    $('.dropdown-button').dropdown();
  });
})(jQuery);
;(function ($, Vel) {
  'use strict';

  var _defaults = {
    opacity: 0.5,
    inDuration: 250,
    outDuration: 250,
    ready: undefined,
    complete: undefined,
    dismissible: true,
    startingTop: '4%',
    endingTop: '10%'
  };

  /**
   * @class
   *
   */

  var Modal = function () {
    /**
     * Construct Modal instance and set up overlay
     * @constructor
     * @param {jQuery} $el
     * @param {Object} options
     */
    function Modal($el, options) {
      _classCallCheck(this, Modal);

      // If exists, destroy and reinitialize
      if (!!$el[0].M_Modal) {
        $el[0].M_Modal.destroy();
      }

      /**
       * The jQuery element
       * @type {jQuery}
       */
      this.$el = $el;

      /**
       * Options for the modal
       * @member Modal#options
       * @prop {Number} [opacity=0.5] - Opacity of the modal overlay
       * @prop {Number} [inDuration=250] - Length in ms of enter transition
       * @prop {Number} [outDuration=250] - Length in ms of exit transition
       * @prop {Function} ready - Callback function called when modal is finished entering
       * @prop {Function} complete - Callback function called when modal is finished exiting
       * @prop {Boolean} [dismissible=true] - Allow modal to be dismissed by keyboard or overlay click
       * @prop {String} [startingTop='4%'] - startingTop
       * @prop {String} [endingTop='10%'] - endingTop
       */
      this.options = $.extend({}, Modal.defaults, options);

      /**
       * Describes open/close state of modal
       * @type {Boolean}
       */
      this.isOpen = false;

      this.$el[0].M_Modal = this;
      this.id = $el.attr('id');
      this.openingTrigger = undefined;
      this.$overlay = $('<div class="modal-overlay"></div>');

      Modal._increment++;
      Modal._count++;
      this.$overlay[0].style.zIndex = 1000 + Modal._increment * 2;
      this.$el[0].style.zIndex = 1000 + Modal._increment * 2 + 1;
      this.setupEventHandlers();
    }

    _createClass(Modal, [{
      key: 'getInstance',


      /**
       * Get Instance
       */
      value: function getInstance() {
        return this;
      }

      /**
       * Teardown component
       */

    }, {
      key: 'destroy',
      value: function destroy() {
        this.removeEventHandlers();
        this.$el[0].removeAttribute('style');
        if (!!this.$overlay[0].parentNode) {
          this.$overlay[0].parentNode.removeChild(this.$overlay[0]);
        }
        this.$el[0].M_Modal = undefined;
        Modal._count--;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: 'setupEventHandlers',
      value: function setupEventHandlers() {
        this.handleOverlayClickBound = this.handleOverlayClick.bind(this);
        this.handleModalCloseClickBound = this.handleModalCloseClick.bind(this);

        if (Modal._count === 1) {
          document.body.addEventListener('click', this.handleTriggerClick);
        }
        this.$overlay[0].addEventListener('click', this.handleOverlayClickBound);
        this.$el[0].addEventListener('click', this.handleModalCloseClickBound);
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: 'removeEventHandlers',
      value: function removeEventHandlers() {
        if (Modal._count === 0) {
          document.body.removeEventListener('click', this.handleTriggerClick);
        }
        this.$overlay[0].removeEventListener('click', this.handleOverlayClickBound);
        this.$el[0].removeEventListener('click', this.handleModalCloseClickBound);
      }

      /**
       * Handle Trigger Click
       * @param {Event} e
       */

    }, {
      key: 'handleTriggerClick',
      value: function handleTriggerClick(e) {
        var $trigger = $(e.target).closest('.modal-trigger');
        if (e.target && $trigger.length) {
          var modalId = $trigger[0].getAttribute('href');
          if (modalId) {
            modalId = modalId.slice(1);
          } else {
            modalId = $trigger[0].getAttribute('data-target');
          }
          var modalInstance = document.getElementById(modalId).M_Modal;
          if (modalInstance) {
            modalInstance.open($trigger);
          }
          e.preventDefault();
        }
      }

      /**
       * Handle Overlay Click
       */

    }, {
      key: 'handleOverlayClick',
      value: function handleOverlayClick() {
        if (this.options.dismissible) {
          this.close();
        }
      }

      /**
       * Handle Modal Close Click
       * @param {Event} e
       */

    }, {
      key: 'handleModalCloseClick',
      value: function handleModalCloseClick(e) {
        var $closeTrigger = $(e.target).closest('.modal-close');
        if (e.target && $closeTrigger.length) {
          this.close();
        }
      }

      /**
       * Handle Keydown
       * @param {Event} e
       */

    }, {
      key: 'handleKeydown',
      value: function handleKeydown(e) {
        // ESC key
        if (e.keyCode === 27 && this.options.dismissible) {
          this.close();
        }
      }

      /**
       * Animate in modal
       */

    }, {
      key: 'animateIn',
      value: function animateIn() {
        var _this = this;

        // Set initial styles
        $.extend(this.$el[0].style, {
          display: 'block',
          opacity: 0
        });
        $.extend(this.$overlay[0].style, {
          display: 'block',
          opacity: 0
        });

        // Animate overlay
        Vel(this.$overlay[0], { opacity: this.options.opacity }, { duration: this.options.inDuration, queue: false, ease: 'easeOutCubic' });

        // Define modal animation options
        var enterVelocityOptions = {
          duration: this.options.inDuration,
          queue: false,
          ease: 'easeOutCubic',
          // Handle modal ready callback
          complete: function () {
            if (typeof _this.options.ready === 'function') {
              _this.options.ready.call(_this, _this.$el, _this.openingTrigger);
            }
          }
        };

        // Bottom sheet animation
        if (this.$el[0].classList.contains('bottom-sheet')) {
          Vel(this.$el[0], { bottom: 0, opacity: 1 }, enterVelocityOptions);

          // Normal modal animation
        } else {
          Vel.hook(this.$el[0], 'scaleX', 0.7);
          this.$el[0].style.top = this.options.startingTop;
          Vel(this.$el[0], { top: this.options.endingTop, opacity: 1, scaleX: 1 }, enterVelocityOptions);
        }
      }

      /**
       * Animate out modal
       */

    }, {
      key: 'animateOut',
      value: function animateOut() {
        var _this2 = this;

        // Animate overlay
        Vel(this.$overlay[0], { opacity: 0 }, { duration: this.options.outDuration, queue: false, ease: 'easeOutQuart' });

        // Define modal animation options
        var exitVelocityOptions = {
          duration: this.options.outDuration,
          queue: false,
          ease: 'easeOutCubic',
          // Handle modal ready callback
          complete: function () {
            _this2.$el[0].style.display = 'none';
            // Call complete callback
            if (typeof _this2.options.complete === 'function') {
              _this2.options.complete.call(_this2, _this2.$el);
            }
            _this2.$overlay[0].parentNode.removeChild(_this2.$overlay[0]);
          }
        };

        // Bottom sheet animation
        if (this.$el[0].classList.contains('bottom-sheet')) {
          Vel(this.$el[0], { bottom: '-100%', opacity: 0 }, exitVelocityOptions);

          // Normal modal animation
        } else {
          Vel(this.$el[0], { top: this.options.startingTop, opacity: 0, scaleX: 0.7 }, exitVelocityOptions);
        }
      }

      /**
       * Open Modal
       * @param {jQuery} [$trigger]
       */

    }, {
      key: 'open',
      value: function open($trigger) {
        if (this.isOpen) {
          return;
        }

        this.isOpen = true;
        var body = document.body;
        body.style.overflow = 'hidden';
        this.$el[0].classList.add('open');
        body.appendChild(this.$overlay[0]);

        // Set opening trigger, undefined indicates modal was opened by javascript
        this.openingTrigger = !!$trigger ? $trigger : undefined;

        if (this.options.dismissible) {
          this.handleKeydownBound = this.handleKeydown.bind(this);
          document.addEventListener('keydown', this.handleKeydownBound);
        }

        this.animateIn();

        return this;
      }

      /**
       * Close Modal
       */

    }, {
      key: 'close',
      value: function close() {
        if (!this.isOpen) {
          return;
        }

        this.isOpen = false;
        this.$el[0].classList.remove('open');
        document.body.style.overflow = '';

        if (this.options.dismissible) {
          document.removeEventListener('keydown', this.handleKeydownBound);
        }

        this.animateOut();

        return this;
      }
    }], [{
      key: 'init',
      value: function init($els, options) {
        var arr = [];
        $els.each(function () {
          arr.push(new Modal($(this), options));
        });
        return arr;
      }
    }, {
      key: 'defaults',
      get: function () {
        return _defaults;
      }
    }]);

    return Modal;
  }();

  /**
   * @static
   * @memberof Modal
   */


  Modal._increment = 0;

  /**
   * @static
   * @memberof Modal
   */
  Modal._count = 0;

  Materialize.Modal = Modal;

  $.fn.modal = function (methodOrOptions) {
    // Call plugin method if valid method name is passed in
    if (Modal.prototype[methodOrOptions]) {
      // Getter methods
      if (methodOrOptions.slice(0, 3) === 'get') {
        return this.first()[0].M_Modal[methodOrOptions]();

        // Void methods
      } else {
        return this.each(function () {
          this.M_Modal[methodOrOptions]();
        });
      }

      // Initialize plugin if options or no argument is passed in
    } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
      Modal.init(this, arguments[0]);
      return this;

      // Return error if an unrecognized  method name is passed in
    } else {
      $.error('Method ' + methodOrOptions + ' does not exist on jQuery.modal');
    }
  };
})(jQuery, Materialize.Vel);
;(function ($) {

  $.fn.materialbox = function () {

    return this.each(function () {

      if ($(this).hasClass('initialized')) {
        return;
      }

      $(this).addClass('initialized');

      var overlayActive = false;
      var doneAnimating = true;
      var inDuration = 275;
      var outDuration = 200;
      var origin = $(this);
      var placeholder = $('<div></div>').addClass('material-placeholder');
      var originalWidth = 0;
      var originalHeight = 0;
      var ancestorsChanged;
      var ancestor;
      var originInlineStyles = origin.attr('style');
      origin.wrap(placeholder);

      // Start click handler
      origin.on('click', function () {
        var placeholder = origin.parent('.material-placeholder');
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var originalWidth = origin.width();
        var originalHeight = origin.height();

        // If already modal, return to original
        if (doneAnimating === false) {
          returnToOriginal();
          return false;
        } else if (overlayActive && doneAnimating === true) {
          returnToOriginal();
          return false;
        }

        // Set states
        doneAnimating = false;
        origin.addClass('active');
        overlayActive = true;

        // Set positioning for placeholder
        placeholder.css({
          width: placeholder[0].getBoundingClientRect().width,
          height: placeholder[0].getBoundingClientRect().height,
          position: 'relative',
          top: 0,
          left: 0
        });

        // Find ancestor with overflow: hidden; and remove it
        ancestorsChanged = undefined;
        ancestor = placeholder[0].parentNode;
        var count = 0;
        while (ancestor !== null && !$(ancestor).is(document)) {
          var curr = $(ancestor);
          if (curr.css('overflow') !== 'visible') {
            curr.css('overflow', 'visible');
            if (ancestorsChanged === undefined) {
              ancestorsChanged = curr;
            } else {
              ancestorsChanged = ancestorsChanged.add(curr);
            }
          }
          ancestor = ancestor.parentNode;
        }

        // Set css on origin
        origin.css({
          position: 'absolute',
          'z-index': 1000,
          'will-change': 'left, top, width, height'
        }).data('width', originalWidth).data('height', originalHeight);

        // Add overlay
        var overlay = $('<div id="materialbox-overlay"></div>').css({
          opacity: 0
        }).click(function () {
          if (doneAnimating === true) returnToOriginal();
        });

        // Put before in origin image to preserve z-index layering.
        origin.before(overlay);

        // Set dimensions if needed
        var overlayOffset = overlay[0].getBoundingClientRect();
        overlay.css({
          width: windowWidth,
          height: windowHeight,
          left: -1 * overlayOffset.left,
          top: -1 * overlayOffset.top
        });

        // Animate Overlay
        overlay.velocity({ opacity: 1 }, { duration: inDuration, queue: false, easing: 'easeOutQuad' });

        // Add and animate caption if it exists
        if (origin.data('caption') !== "") {
          var $photo_caption = $('<div class="materialbox-caption"></div>');
          $photo_caption.text(origin.data('caption'));
          $('body').append($photo_caption);
          $photo_caption.css({ "display": "inline" });
          $photo_caption.velocity({ opacity: 1 }, { duration: inDuration, queue: false, easing: 'easeOutQuad' });
        }

        // Resize Image
        var ratio = 0;
        var widthPercent = originalWidth / windowWidth;
        var heightPercent = originalHeight / windowHeight;
        var newWidth = 0;
        var newHeight = 0;

        if (widthPercent > heightPercent) {
          ratio = originalHeight / originalWidth;
          newWidth = windowWidth * 0.9;
          newHeight = windowWidth * 0.9 * ratio;
        } else {
          ratio = originalWidth / originalHeight;
          newWidth = windowHeight * 0.9 * ratio;
          newHeight = windowHeight * 0.9;
        }

        // Animate image + set z-index
        if (origin.hasClass('responsive-img')) {
          origin.velocity({ 'max-width': newWidth, 'width': originalWidth }, { duration: 0, queue: false,
            complete: function () {
              origin.css({ left: 0, top: 0 }).velocity({
                height: newHeight,
                width: newWidth,
                left: $(document).scrollLeft() + windowWidth / 2 - origin.parent('.material-placeholder').offset().left - newWidth / 2,
                top: $(document).scrollTop() + windowHeight / 2 - origin.parent('.material-placeholder').offset().top - newHeight / 2
              }, {
                duration: inDuration,
                queue: false,
                easing: 'easeOutQuad',
                complete: function () {
                  doneAnimating = true;
                }
              });
            } // End Complete
          }); // End Velocity
        } else {
          origin.css('left', 0).css('top', 0).velocity({
            height: newHeight,
            width: newWidth,
            left: $(document).scrollLeft() + windowWidth / 2 - origin.parent('.material-placeholder').offset().left - newWidth / 2,
            top: $(document).scrollTop() + windowHeight / 2 - origin.parent('.material-placeholder').offset().top - newHeight / 2
          }, {
            duration: inDuration,
            queue: false,
            easing: 'easeOutQuad',
            complete: function () {
              doneAnimating = true;
            }
          }); // End Velocity
        }

        // Handle Exit triggers
        $(window).on('scroll.materialbox', function () {
          if (overlayActive) {
            returnToOriginal();
          }
        });

        $(window).on('resize.materialbox', function () {
          if (overlayActive) {
            returnToOriginal();
          }
        });

        $(document).on('keyup.materialbox', function (e) {
          // ESC key
          if (e.keyCode === 27 && doneAnimating === true && overlayActive) {
            returnToOriginal();
          }
        });
      }); // End click handler


      // This function returns the modaled image to the original spot
      function returnToOriginal() {

        doneAnimating = false;

        var placeholder = origin.parent('.material-placeholder');
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var originalWidth = origin.data('width');
        var originalHeight = origin.data('height');

        origin.velocity("stop", true);
        $('#materialbox-overlay').velocity("stop", true);
        $('.materialbox-caption').velocity("stop", true);

        // disable exit handlers
        $(window).off('scroll.materialbox');
        $(document).off('keyup.materialbox');
        $(window).off('resize.materialbox');

        $('#materialbox-overlay').velocity({ opacity: 0 }, {
          duration: outDuration, // Delay prevents animation overlapping
          queue: false, easing: 'easeOutQuad',
          complete: function () {
            // Remove Overlay
            overlayActive = false;
            $(this).remove();
          }
        });

        // Resize Image
        origin.velocity({
          width: originalWidth,
          height: originalHeight,
          left: 0,
          top: 0
        }, {
          duration: outDuration,
          queue: false, easing: 'easeOutQuad',
          complete: function () {
            placeholder.css({
              height: '',
              width: '',
              position: '',
              top: '',
              left: ''
            });

            origin.removeAttr('style');
            origin.attr('style', originInlineStyles);

            // Remove class
            origin.removeClass('active');
            doneAnimating = true;

            // Remove overflow overrides on ancestors
            if (ancestorsChanged) {
              ancestorsChanged.css('overflow', '');
            }
          }
        });

        // Remove Caption + reset css settings on image
        $('.materialbox-caption').velocity({ opacity: 0 }, {
          duration: outDuration, // Delay prevents animation overlapping
          queue: false, easing: 'easeOutQuad',
          complete: function () {
            $(this).remove();
          }
        });
      }
    });
  };

  $(document).ready(function () {
    $('.materialboxed').materialbox();
  });
})(jQuery);
;(function ($) {

  $.fn.parallax = function () {
    var window_width = $(window).width();
    // Parallax Scripts
    return this.each(function (i) {
      var $this = $(this);
      $this.addClass('parallax');

      function updateParallax(initial) {
        var container_height;
        if (window_width < 601) {
          container_height = $this.height() > 0 ? $this.height() : $this.children("img").height();
        } else {
          container_height = $this.height() > 0 ? $this.height() : 500;
        }
        var $img = $this.children("img").first();
        var img_height = $img.height();
        var parallax_dist = img_height - container_height;
        var bottom = $this.offset().top + container_height;
        var top = $this.offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = window.innerHeight;
        var windowBottom = scrollTop + windowHeight;
        var percentScrolled = (windowBottom - top) / (container_height + windowHeight);
        var parallax = Math.round(parallax_dist * percentScrolled);

        if (initial) {
          $img.css('display', 'block');
        }
        if (bottom > scrollTop && top < scrollTop + windowHeight) {
          $img.css('transform', "translate3D(-50%," + parallax + "px, 0)");
        }
      }

      // Wait for image load
      $this.children("img").one("load", function () {
        updateParallax(true);
      }).each(function () {
        if (this.complete) $(this).trigger("load");
      });

      $(window).scroll(function () {
        window_width = $(window).width();
        updateParallax(false);
      });

      $(window).resize(function () {
        window_width = $(window).width();
        updateParallax(false);
      });
    });
  };
})(jQuery);
;(function ($) {

  var methods = {
    init: function (options) {
      var defaults = {
        onShow: null,
        swipeable: false,
        responsiveThreshold: Infinity // breakpoint for swipeable
      };
      options = $.extend(defaults, options);
      var namespace = Materialize.objectSelectorString($(this));

      return this.each(function (i) {

        var uniqueNamespace = namespace + i;

        // For each set of tabs, we want to keep track of
        // which tab is active and its associated content
        var $this = $(this),
            window_width = $(window).width();

        var $active,
            $content,
            $links = $this.find('li.tab a'),
            $tabs_width = $this.width(),
            $tabs_content = $(),
            $tabs_wrapper,
            $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length,
            $indicator,
            index = 0,
            prev_index = 0,
            clicked = false,
            clickedTimeout,
            transition = 300;

        // Finds right attribute for indicator based on active tab.
        // el: jQuery Object
        var calcRightPos = function (el) {
          return Math.ceil($tabs_width - el.position().left - el[0].getBoundingClientRect().width - $this.scrollLeft());
        };

        // Finds left attribute for indicator based on active tab.
        // el: jQuery Object
        var calcLeftPos = function (el) {
          return Math.floor(el.position().left + $this.scrollLeft());
        };

        // Animates Indicator to active tab.
        // prev_index: Number
        var animateIndicator = function (prev_index) {
          if (index - prev_index >= 0) {
            $indicator.velocity({ "right": calcRightPos($active) }, { duration: transition, queue: false, easing: 'easeOutQuad' });
            $indicator.velocity({ "left": calcLeftPos($active) }, { duration: transition, queue: false, easing: 'easeOutQuad', delay: 90 });
          } else {
            $indicator.velocity({ "left": calcLeftPos($active) }, { duration: transition, queue: false, easing: 'easeOutQuad' });
            $indicator.velocity({ "right": calcRightPos($active) }, { duration: transition, queue: false, easing: 'easeOutQuad', delay: 90 });
          }
        };

        // Change swipeable according to responsive threshold
        if (options.swipeable) {
          if (window_width > options.responsiveThreshold) {
            options.swipeable = false;
          }
        }

        // If the location.hash matches one of the links, use that as the active tab.
        $active = $($links.filter('[href="' + location.hash + '"]'));

        // If no match is found, use the first link or any with class 'active' as the initial active tab.
        if ($active.length === 0) {
          $active = $(this).find('li.tab a.active').first();
        }
        if ($active.length === 0) {
          $active = $(this).find('li.tab a').first();
        }

        $active.addClass('active');
        index = $links.index($active);
        if (index < 0) {
          index = 0;
        }

        if ($active[0] !== undefined) {
          $content = $($active[0].hash);
          $content.addClass('active');
        }

        // append indicator then set indicator width to tab width
        if (!$this.find('.indicator').length) {
          $this.append('<li class="indicator"></li>');
        }
        $indicator = $this.find('.indicator');

        // we make sure that the indicator is at the end of the tabs
        $this.append($indicator);

        if ($this.is(":visible")) {
          // $indicator.css({"right": $tabs_width - ((index + 1) * $tab_width)});
          // $indicator.css({"left": index * $tab_width});
          setTimeout(function () {
            $indicator.css({ "right": calcRightPos($active) });
            $indicator.css({ "left": calcLeftPos($active) });
          }, 0);
        }
        $(window).off('resize.tabs-' + uniqueNamespace).on('resize.tabs-' + uniqueNamespace, function () {
          $tabs_width = $this.width();
          $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length;
          if (index < 0) {
            index = 0;
          }
          if ($tab_width !== 0 && $tabs_width !== 0) {
            $indicator.css({ "right": calcRightPos($active) });
            $indicator.css({ "left": calcLeftPos($active) });
          }
        });

        // Initialize Tabs Content.
        if (options.swipeable) {
          // TODO: Duplicate calls with swipeable? handle multiple div wrapping.
          $links.each(function () {
            var $curr_content = $(Materialize.escapeHash(this.hash));
            $curr_content.addClass('carousel-item');
            $tabs_content = $tabs_content.add($curr_content);
          });
          $tabs_wrapper = $tabs_content.wrapAll('<div class="tabs-content carousel"></div>');
          $tabs_content.css('display', '');
          $('.tabs-content.carousel').carousel({
            fullWidth: true,
            noWrap: true,
            onCycleTo: function (item) {
              if (!clicked) {
                var prev_index = index;
                index = $tabs_wrapper.index(item);
                $active.removeClass('active');
                $active = $links.eq(index);
                $active.addClass('active');
                animateIndicator(prev_index);
                if (typeof options.onShow === "function") {
                  options.onShow.call($this[0], $content);
                }
              }
            }
          });
        } else {
          // Hide the remaining content
          $links.not($active).each(function () {
            $(Materialize.escapeHash(this.hash)).hide();
          });
        }

        // Bind the click event handler
        $this.off('click.tabs').on('click.tabs', 'a', function (e) {
          if ($(this).parent().hasClass('disabled')) {
            e.preventDefault();
            return;
          }

          // Act as regular link if target attribute is specified.
          if (!!$(this).attr("target")) {
            return;
          }

          clicked = true;
          $tabs_width = $this.width();
          $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length;

          // Make the old tab inactive.
          $active.removeClass('active');
          var $oldContent = $content;

          // Update the variables with the new link and content
          $active = $(this);
          $content = $(Materialize.escapeHash(this.hash));
          $links = $this.find('li.tab a');
          var activeRect = $active.position();

          // Make the tab active.
          $active.addClass('active');
          prev_index = index;
          index = $links.index($(this));
          if (index < 0) {
            index = 0;
          }
          // Change url to current tab
          // window.location.hash = $active.attr('href');

          // Swap content
          if (options.swipeable) {
            if ($tabs_content.length) {
              $tabs_content.carousel('set', index, function () {
                if (typeof options.onShow === "function") {
                  options.onShow.call($this[0], $content);
                }
              });
            }
          } else {
            if ($content !== undefined) {
              $content.show();
              $content.addClass('active');
              if (typeof options.onShow === "function") {
                options.onShow.call(this, $content);
              }
            }

            if ($oldContent !== undefined && !$oldContent.is($content)) {
              $oldContent.hide();
              $oldContent.removeClass('active');
            }
          }

          // Reset clicked state
          clickedTimeout = setTimeout(function () {
            clicked = false;
          }, transition);

          // Update indicator
          animateIndicator(prev_index);

          // Prevent the anchor's default click action
          e.preventDefault();
        });
      });
    },
    select_tab: function (id) {
      this.find('a[href="#' + id + '"]').trigger('click');
    }
  };

  $.fn.tabs = function (methodOrOptions) {
    if (methods[methodOrOptions]) {
      return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
      // Default to "init"
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + methodOrOptions + ' does not exist on jQuery.tabs');
    }
  };

  $(document).ready(function () {
    $('ul.tabs').tabs();
  });
})(jQuery);
;(function ($) {
  $.fn.tooltip = function (options) {
    var timeout = null,
        margin = 5;

    // Defaults
    var defaults = {
      delay: 350,
      tooltip: '',
      position: 'bottom',
      html: false
    };

    // Remove tooltip from the activator
    if (options === "remove") {
      this.each(function () {
        $('#' + $(this).attr('data-tooltip-id')).remove();
        $(this).removeAttr('data-tooltip-id');
        $(this).off('mouseenter.tooltip mouseleave.tooltip');
      });
      return false;
    }

    options = $.extend(defaults, options);

    return this.each(function () {
      var tooltipId = Materialize.guid();
      var origin = $(this);

      // Destroy old tooltip
      if (origin.attr('data-tooltip-id')) {
        $('#' + origin.attr('data-tooltip-id')).remove();
      }

      origin.attr('data-tooltip-id', tooltipId);

      // Get attributes.
      var allowHtml, tooltipDelay, tooltipPosition, tooltipText, tooltipEl, backdrop;
      var setAttributes = function () {
        allowHtml = origin.attr('data-html') ? origin.attr('data-html') === 'true' : options.html;
        tooltipDelay = origin.attr('data-delay');
        tooltipDelay = tooltipDelay === undefined || tooltipDelay === '' ? options.delay : tooltipDelay;
        tooltipPosition = origin.attr('data-position');
        tooltipPosition = tooltipPosition === undefined || tooltipPosition === '' ? options.position : tooltipPosition;
        tooltipText = origin.attr('data-tooltip');
        tooltipText = tooltipText === undefined || tooltipText === '' ? options.tooltip : tooltipText;
      };
      setAttributes();

      var renderTooltipEl = function () {
        var tooltip = $('<div class="material-tooltip"></div>');

        // Create Text span
        if (allowHtml) {
          tooltipText = $('<span></span>').html(tooltipText);
        } else {
          tooltipText = $('<span></span>').text(tooltipText);
        }

        // Create tooltip
        tooltip.append(tooltipText).appendTo($('body')).attr('id', tooltipId);

        // Create backdrop
        backdrop = $('<div class="backdrop"></div>');
        backdrop.appendTo(tooltip);
        return tooltip;
      };
      tooltipEl = renderTooltipEl();

      // Destroy previously binded events
      origin.off('mouseenter.tooltip mouseleave.tooltip');
      // Mouse In
      var started = false,
          timeoutRef;
      origin.on({ 'mouseenter.tooltip': function (e) {
          var showTooltip = function () {
            setAttributes();
            started = true;
            tooltipEl.velocity('stop');
            backdrop.velocity('stop');
            tooltipEl.css({ visibility: 'visible', left: '0px', top: '0px' });

            // Tooltip positioning
            var originWidth = origin.outerWidth();
            var originHeight = origin.outerHeight();
            var tooltipHeight = tooltipEl.outerHeight();
            var tooltipWidth = tooltipEl.outerWidth();
            var tooltipVerticalMovement = '0px';
            var tooltipHorizontalMovement = '0px';
            var backdropOffsetWidth = backdrop[0].offsetWidth;
            var backdropOffsetHeight = backdrop[0].offsetHeight;
            var scaleXFactor = 8;
            var scaleYFactor = 8;
            var scaleFactor = 0;
            var targetTop, targetLeft, newCoordinates;

            if (tooltipPosition === "top") {
              // Top Position
              targetTop = origin.offset().top - tooltipHeight - margin;
              targetLeft = origin.offset().left + originWidth / 2 - tooltipWidth / 2;
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
              tooltipVerticalMovement = '-10px';
              backdrop.css({
                bottom: 0,
                left: 0,
                borderRadius: '14px 14px 0 0',
                transformOrigin: '50% 100%',
                marginTop: tooltipHeight,
                marginLeft: tooltipWidth / 2 - backdropOffsetWidth / 2
              });
            }
            // Left Position
            else if (tooltipPosition === "left") {
                targetTop = origin.offset().top + originHeight / 2 - tooltipHeight / 2;
                targetLeft = origin.offset().left - tooltipWidth - margin;
                newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

                tooltipHorizontalMovement = '-10px';
                backdrop.css({
                  top: '-7px',
                  right: 0,
                  width: '14px',
                  height: '14px',
                  borderRadius: '14px 0 0 14px',
                  transformOrigin: '95% 50%',
                  marginTop: tooltipHeight / 2,
                  marginLeft: tooltipWidth
                });
              }
              // Right Position
              else if (tooltipPosition === "right") {
                  targetTop = origin.offset().top + originHeight / 2 - tooltipHeight / 2;
                  targetLeft = origin.offset().left + originWidth + margin;
                  newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

                  tooltipHorizontalMovement = '+10px';
                  backdrop.css({
                    top: '-7px',
                    left: 0,
                    width: '14px',
                    height: '14px',
                    borderRadius: '0 14px 14px 0',
                    transformOrigin: '5% 50%',
                    marginTop: tooltipHeight / 2,
                    marginLeft: '0px'
                  });
                } else {
                  // Bottom Position
                  targetTop = origin.offset().top + origin.outerHeight() + margin;
                  targetLeft = origin.offset().left + originWidth / 2 - tooltipWidth / 2;
                  newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
                  tooltipVerticalMovement = '+10px';
                  backdrop.css({
                    top: 0,
                    left: 0,
                    marginLeft: tooltipWidth / 2 - backdropOffsetWidth / 2
                  });
                }

            // Set tooptip css placement
            tooltipEl.css({
              top: newCoordinates.y,
              left: newCoordinates.x
            });

            // Calculate Scale to fill
            scaleXFactor = Math.SQRT2 * tooltipWidth / parseInt(backdropOffsetWidth);
            scaleYFactor = Math.SQRT2 * tooltipHeight / parseInt(backdropOffsetHeight);
            scaleFactor = Math.max(scaleXFactor, scaleYFactor);

            tooltipEl.velocity({ translateY: tooltipVerticalMovement, translateX: tooltipHorizontalMovement }, { duration: 350, queue: false }).velocity({ opacity: 1 }, { duration: 300, delay: 50, queue: false });
            backdrop.css({ visibility: 'visible' }).velocity({ opacity: 1 }, { duration: 55, delay: 0, queue: false }).velocity({ scaleX: scaleFactor, scaleY: scaleFactor }, { duration: 300, delay: 0, queue: false, easing: 'easeInOutQuad' });
          };

          timeoutRef = setTimeout(showTooltip, tooltipDelay); // End Interval

          // Mouse Out
        },
        'mouseleave.tooltip': function () {
          // Reset State
          started = false;
          clearTimeout(timeoutRef);

          // Animate back
          setTimeout(function () {
            if (started !== true) {
              tooltipEl.velocity({
                opacity: 0, translateY: 0, translateX: 0 }, { duration: 225, queue: false });
              backdrop.velocity({ opacity: 0, scaleX: 1, scaleY: 1 }, {
                duration: 225,
                queue: false,
                complete: function () {
                  backdrop.css({ visibility: 'hidden' });
                  tooltipEl.css({ visibility: 'hidden' });
                  started = false;
                }
              });
            }
          }, 225);
        }
      });
    });
  };

  var repositionWithinScreen = function (x, y, width, height) {
    var newX = x;
    var newY = y;

    if (newX < 0) {
      newX = 4;
    } else if (newX + width > window.innerWidth) {
      newX -= newX + width - window.innerWidth;
    }

    if (newY < 0) {
      newY = 4;
    } else if (newY + height > window.innerHeight + $(window).scrollTop) {
      newY -= newY + height - window.innerHeight;
    }

    return { x: newX, y: newY };
  };

  $(document).ready(function () {
    $('.tooltipped').tooltip();
  });
})(jQuery);
; /*!
  * Waves v0.6.4
  * http://fian.my.id/Waves
  *
  * Copyright 2014 Alfiana E. Sibuea and other contributors
  * Released under the MIT license
  * https://github.com/fians/Waves/blob/master/LICENSE
  */

;(function (window) {
  'use strict';

  var Waves = Waves || {};
  var $$ = document.querySelectorAll.bind(document);

  // Find exact position of element
  function isWindow(obj) {
    return obj !== null && obj === obj.window;
  }

  function getWindow(elem) {
    return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
  }

  function offset(elem) {
    var docElem,
        win,
        box = { top: 0, left: 0 },
        doc = elem && elem.ownerDocument;

    docElem = doc.documentElement;

    if (typeof elem.getBoundingClientRect !== typeof undefined) {
      box = elem.getBoundingClientRect();
    }
    win = getWindow(doc);
    return {
      top: box.top + win.pageYOffset - docElem.clientTop,
      left: box.left + win.pageXOffset - docElem.clientLeft
    };
  }

  function convertStyle(obj) {
    var style = '';

    for (var a in obj) {
      if (obj.hasOwnProperty(a)) {
        style += a + ':' + obj[a] + ';';
      }
    }

    return style;
  }

  var Effect = {

    // Effect delay
    duration: 750,

    show: function (e, element) {

      // Disable right click
      if (e.button === 2) {
        return false;
      }

      var el = element || this;

      // Create ripple
      var ripple = document.createElement('div');
      ripple.className = 'waves-ripple';
      el.appendChild(ripple);

      // Get click coordinate and element witdh
      var pos = offset(el);
      var relativeY = e.pageY - pos.top;
      var relativeX = e.pageX - pos.left;
      var scale = 'scale(' + el.clientWidth / 100 * 10 + ')';

      // Support for touch devices
      if ('touches' in e) {
        relativeY = e.touches[0].pageY - pos.top;
        relativeX = e.touches[0].pageX - pos.left;
      }

      // Attach data to element
      ripple.setAttribute('data-hold', Date.now());
      ripple.setAttribute('data-scale', scale);
      ripple.setAttribute('data-x', relativeX);
      ripple.setAttribute('data-y', relativeY);

      // Set ripple position
      var rippleStyle = {
        'top': relativeY + 'px',
        'left': relativeX + 'px'
      };

      ripple.className = ripple.className + ' waves-notransition';
      ripple.setAttribute('style', convertStyle(rippleStyle));
      ripple.className = ripple.className.replace('waves-notransition', '');

      // Scale the ripple
      rippleStyle['-webkit-transform'] = scale;
      rippleStyle['-moz-transform'] = scale;
      rippleStyle['-ms-transform'] = scale;
      rippleStyle['-o-transform'] = scale;
      rippleStyle.transform = scale;
      rippleStyle.opacity = '1';

      rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
      rippleStyle['-moz-transition-duration'] = Effect.duration + 'ms';
      rippleStyle['-o-transition-duration'] = Effect.duration + 'ms';
      rippleStyle['transition-duration'] = Effect.duration + 'ms';

      rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
      rippleStyle['-moz-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
      rippleStyle['-o-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
      rippleStyle['transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';

      ripple.setAttribute('style', convertStyle(rippleStyle));
    },

    hide: function (e) {
      TouchHandler.touchup(e);

      var el = this;
      var width = el.clientWidth * 1.4;

      // Get first ripple
      var ripple = null;
      var ripples = el.getElementsByClassName('waves-ripple');
      if (ripples.length > 0) {
        ripple = ripples[ripples.length - 1];
      } else {
        return false;
      }

      var relativeX = ripple.getAttribute('data-x');
      var relativeY = ripple.getAttribute('data-y');
      var scale = ripple.getAttribute('data-scale');

      // Get delay beetween mousedown and mouse leave
      var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
      var delay = 350 - diff;

      if (delay < 0) {
        delay = 0;
      }

      // Fade out ripple after delay
      setTimeout(function () {
        var style = {
          'top': relativeY + 'px',
          'left': relativeX + 'px',
          'opacity': '0',

          // Duration
          '-webkit-transition-duration': Effect.duration + 'ms',
          '-moz-transition-duration': Effect.duration + 'ms',
          '-o-transition-duration': Effect.duration + 'ms',
          'transition-duration': Effect.duration + 'ms',
          '-webkit-transform': scale,
          '-moz-transform': scale,
          '-ms-transform': scale,
          '-o-transform': scale,
          'transform': scale
        };

        ripple.setAttribute('style', convertStyle(style));

        setTimeout(function () {
          try {
            el.removeChild(ripple);
          } catch (e) {
            return false;
          }
        }, Effect.duration);
      }, delay);
    },

    // Little hack to make <input> can perform waves effect
    wrapInput: function (elements) {
      for (var a = 0; a < elements.length; a++) {
        var el = elements[a];

        if (el.tagName.toLowerCase() === 'input') {
          var parent = el.parentNode;

          // If input already have parent just pass through
          if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {
            continue;
          }

          // Put element class and style to the specified parent
          var wrapper = document.createElement('i');
          wrapper.className = el.className + ' waves-input-wrapper';

          var elementStyle = el.getAttribute('style');

          if (!elementStyle) {
            elementStyle = '';
          }

          wrapper.setAttribute('style', elementStyle);

          el.className = 'waves-button-input';
          el.removeAttribute('style');

          // Put element as child
          parent.replaceChild(wrapper, el);
          wrapper.appendChild(el);
        }
      }
    }
  };

  /**
   * Disable mousedown event for 500ms during and after touch
   */
  var TouchHandler = {
    /* uses an integer rather than bool so there's no issues with
     * needing to clear timeouts if another touch event occurred
     * within the 500ms. Cannot mouseup between touchstart and
     * touchend, nor in the 500ms after touchend. */
    touches: 0,
    allowEvent: function (e) {
      var allow = true;

      if (e.type === 'touchstart') {
        TouchHandler.touches += 1; //push
      } else if (e.type === 'touchend' || e.type === 'touchcancel') {
        setTimeout(function () {
          if (TouchHandler.touches > 0) {
            TouchHandler.touches -= 1; //pop after 500ms
          }
        }, 500);
      } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {
        allow = false;
      }

      return allow;
    },
    touchup: function (e) {
      TouchHandler.allowEvent(e);
    }
  };

  /**
   * Delegated click handler for .waves-effect element.
   * returns null when .waves-effect element not in "click tree"
   */
  function getWavesEffectElement(e) {
    if (TouchHandler.allowEvent(e) === false) {
      return null;
    }

    var element = null;
    var target = e.target || e.srcElement;

    while (target.parentNode !== null) {
      if (!(target instanceof SVGElement) && target.className.indexOf('waves-effect') !== -1) {
        element = target;
        break;
      }
      target = target.parentNode;
    }
    return element;
  }

  /**
   * Bubble the click and show effect if .waves-effect elem was found
   */
  function showEffect(e) {
    var element = getWavesEffectElement(e);

    if (element !== null) {
      Effect.show(e, element);

      if ('ontouchstart' in window) {
        element.addEventListener('touchend', Effect.hide, false);
        element.addEventListener('touchcancel', Effect.hide, false);
      }

      element.addEventListener('mouseup', Effect.hide, false);
      element.addEventListener('mouseleave', Effect.hide, false);
      element.addEventListener('dragend', Effect.hide, false);
    }
  }

  Waves.displayEffect = function (options) {
    options = options || {};

    if ('duration' in options) {
      Effect.duration = options.duration;
    }

    //Wrap input inside <i> tag
    Effect.wrapInput($$('.waves-effect'));

    if ('ontouchstart' in window) {
      document.body.addEventListener('touchstart', showEffect, false);
    }

    document.body.addEventListener('mousedown', showEffect, false);
  };

  /**
   * Attach Waves to an input element (or any element which doesn't
   * bubble mouseup/mousedown events).
   *   Intended to be used with dynamically loaded forms/inputs, or
   * where the user doesn't want a delegated click handler.
   */
  Waves.attach = function (element) {
    //FUTURE: automatically add waves classes and allow users
    // to specify them with an options param? Eg. light/classic/button
    if (element.tagName.toLowerCase() === 'input') {
      Effect.wrapInput([element]);
      element = element.parentNode;
    }

    if ('ontouchstart' in window) {
      element.addEventListener('touchstart', showEffect, false);
    }

    element.addEventListener('mousedown', showEffect, false);
  };

  window.Waves = Waves;

  document.addEventListener('DOMContentLoaded', function () {
    Waves.displayEffect();
  }, false);
})(window);
;(function ($, Vel) {
  'use strict';

  var _defaults = {
    displayLength: Infinity,
    inDuration: 300,
    outDuration: 375,
    className: undefined,
    completeCallback: undefined,
    activationPercent: 0.8
  };

  var Toast = function () {
    function Toast(message, displayLength, className, completeCallback) {
      _classCallCheck(this, Toast);

      if (!message) {
        return;
      }

      /**
       * Options for the toast
       * @member Toast#options
       */
      this.options = {
        displayLength: displayLength,
        className: className,
        completeCallback: completeCallback
      };

      this.options = $.extend({}, Toast.defaults, this.options);
      this.message = message;

      /**
       * Describes current pan state toast
       * @type {Boolean}
       */
      this.panning = false;

      /**
       * Time remaining until toast is removed
       */
      this.timeRemaining = this.options.displayLength;

      if (Toast._toasts.length === 0) {
        Toast._createContainer();
      }

      // Create new toast
      Toast._toasts.push(this);
      var toastElement = this.createToast();
      toastElement.M_Toast = this;
      this.el = toastElement;
      this._animateIn();
      this.setTimer();
    }

    _createClass(Toast, [{
      key: 'createToast',


      /**
       * Create toast and append it to toast container
       */
      value: function createToast() {
        var toast = document.createElement('div');
        toast.classList.add('toast');

        // Add custom classes onto toast
        if (this.options.className) {
          var classes = this.options.className.split(' ');
          var i = void 0,
              count = void 0;
          for (i = 0, count = classes.length; i < count; i++) {
            toast.classList.add(classes[i]);
          }
        }

        // Set content
        if (typeof HTMLElement === 'object' ? this.message instanceof HTMLElement : this.message && typeof this.message === 'object' && this.message !== null && this.message.nodeType === 1 && typeof this.message.nodeName === 'string') {
          toast.appendChild(this.message);

          // Check if it is jQuery object
        } else if (this.message instanceof jQuery) {
          $(toast).append(this.message);

          // Insert as text;
        } else {
          toast.innerHTML = this.message;
        }

        // Append toasft
        Toast._container.appendChild(toast);
        return toast;
      }

      /**
       * Animate in toast
       */

    }, {
      key: '_animateIn',
      value: function _animateIn() {
        // Animate toast in
        Vel(this.el, { top: 0, opacity: 1 }, {
          duration: 300,
          easing: 'easeOutCubic',
          queue: false
        });
      }

      /**
       * Create setInterval which automatically removes toast when timeRemaining >= 0
       * has been reached
       */

    }, {
      key: 'setTimer',
      value: function setTimer() {
        var _this3 = this;

        if (this.timeRemaining !== Infinity) {
          this.counterInterval = setInterval(function () {
            // If toast is not being dragged, decrease its time remaining
            if (!_this3.panning) {
              _this3.timeRemaining -= 20;
            }

            // Animate toast out
            if (_this3.timeRemaining <= 0) {
              _this3.remove();
            }
          }, 20);
        }
      }

      /**
       * Dismiss toast with animation
       */

    }, {
      key: 'remove',
      value: function remove() {
        var _this4 = this;

        window.clearInterval(this.counterInterval);
        var activationDistance = this.el.offsetWidth * this.options.activationPercent;

        if (this.wasSwiped) {
          this.el.style.transition = 'transform .05s, opacity .05s';
          this.el.style.transform = 'translateX(' + activationDistance + 'px)';
          this.el.style.opacity = 0;
        }

        Vel(this.el, { opacity: 0, marginTop: '-40px' }, {
          duration: this.options.outDuration,
          easing: 'easeOutExpo',
          queue: false,
          complete: function () {
            // Call the optional callback
            if (typeof _this4.options.completeCallback === 'function') {
              _this4.options.completeCallback();
            }
            // Remove toast from DOM
            _this4.el.parentNode.removeChild(_this4.el);
            Toast._toasts.splice(Toast._toasts.indexOf(_this4), 1);
            if (Toast._toasts.length === 0) {
              Toast._removeContainer();
            }
          }
        });
      }
    }], [{
      key: '_createContainer',


      /**
       * Append toast container and add event handlers
       */
      value: function _createContainer() {
        var container = document.createElement('div');
        container.setAttribute('id', 'toast-container');

        // Add event handler
        container.addEventListener('touchstart', Toast._onDragStart);
        container.addEventListener('touchmove', Toast._onDragMove);
        container.addEventListener('touchend', Toast._onDragEnd);

        container.addEventListener('mousedown', Toast._onDragStart);
        document.addEventListener('mousemove', Toast._onDragMove);
        document.addEventListener('mouseup', Toast._onDragEnd);

        document.body.appendChild(container);
        Toast._container = container;
      }

      /**
       * Remove toast container and event handlers
       */

    }, {
      key: '_removeContainer',
      value: function _removeContainer() {
        // Add event handler
        document.removeEventListener('mousemove', Toast._onDragMove);
        document.removeEventListener('mouseup', Toast._onDragEnd);

        Toast._container.parentNode.removeChild(Toast._container);
        Toast._container = null;
      }

      /**
       * Begin drag handler
       * @param {Event} e
       */

    }, {
      key: '_onDragStart',
      value: function _onDragStart(e) {
        if (e.target && $(e.target).closest('.toast').length) {
          var $toast = $(e.target).closest('.toast');
          var toast = $toast[0].M_Toast;
          toast.panning = true;
          Toast._draggedToast = toast;
          toast.el.classList.add('panning');
          toast.el.style.transition = '';
          toast.startingXPos = Toast._xPos(e);
          toast.time = Date.now();
          toast.xPos = Toast._xPos(e);
        }
      }

      /**
       * Drag move handler
       * @param {Event} e
       */

    }, {
      key: '_onDragMove',
      value: function _onDragMove(e) {
        if (!!Toast._draggedToast) {
          e.preventDefault();
          var toast = Toast._draggedToast;
          toast.deltaX = Math.abs(toast.xPos - Toast._xPos(e));
          toast.xPos = Toast._xPos(e);
          toast.velocityX = toast.deltaX / (Date.now() - toast.time);
          toast.time = Date.now();

          var totalDeltaX = toast.xPos - toast.startingXPos;
          var activationDistance = toast.el.offsetWidth * toast.options.activationPercent;
          toast.el.style.transform = 'translateX(' + totalDeltaX + 'px)';
          toast.el.style.opacity = 1 - Math.abs(totalDeltaX / activationDistance);
        }
      }

      /**
       * End drag handler
       * @param {Event} e
       */

    }, {
      key: '_onDragEnd',
      value: function _onDragEnd(e) {
        if (!!Toast._draggedToast) {
          var toast = Toast._draggedToast;
          toast.panning = false;
          toast.el.classList.remove('panning');

          var totalDeltaX = toast.xPos - toast.startingXPos;
          var activationDistance = toast.el.offsetWidth * toast.options.activationPercent;
          var shouldBeDismissed = Math.abs(totalDeltaX) > activationDistance || toast.velocityX > 1;

          // Remove toast
          if (shouldBeDismissed) {
            toast.wasSwiped = true;
            toast.remove();

            // Animate toast back to original position
          } else {
            toast.el.style.transition = 'transform .2s, opacity .2s';
            toast.el.style.transform = '';
            toast.el.style.opacity = '';
          }
          Toast._draggedToast = null;
        }
      }

      /**
       * Get x position of mouse or touch event
       * @param {Event} e
       */

    }, {
      key: '_xPos',
      value: function _xPos(e) {
        if (e.targetTouches && e.targetTouches.length >= 1) {
          return e.targetTouches[0].clientX;
        }
        // mouse event
        return e.clientX;
      }

      /**
       * Remove all toasts
       */

    }, {
      key: 'removeAll',
      value: function removeAll() {
        for (var toastIndex in Toast._toasts) {
          Toast._toasts[toastIndex].remove();
        }
      }
    }, {
      key: 'defaults',
      get: function () {
        return _defaults;
      }
    }]);

    return Toast;
  }();

  /**
   * @static
   * @memberof Toast
   * @type {Array.<Toast>}
   */


  Toast._toasts = [];

  /**
   * @static
   * @memberof Toast
   */
  Toast._container = null;

  /**
   * @static
   * @memberof Toast
   * @type {Toast}
   */
  Toast._draggedToast = null;

  Materialize.Toast = Toast;
  Materialize.toast = function (message, displayLength, className, completeCallback) {
    return new Toast(message, displayLength, className, completeCallback);
  };
})(jQuery, Materialize.Vel);
;(function ($) {

  var methods = {
    init: function (options) {
      var defaults = {
        menuWidth: 300,
        edge: 'left',
        closeOnClick: false,
        draggable: true,
        onOpen: null,
        onClose: null
      };
      options = $.extend(defaults, options);

      $(this).each(function () {
        var $this = $(this);
        var menuId = $this.attr('data-activates');
        var menu = $("#" + menuId);

        // Set to width
        if (options.menuWidth != 300) {
          menu.css('width', options.menuWidth);
        }

        // Add Touch Area
        var $dragTarget = $('.drag-target[data-sidenav="' + menuId + '"]');
        if (options.draggable) {
          // Regenerate dragTarget
          if ($dragTarget.length) {
            $dragTarget.remove();
          }

          $dragTarget = $('<div class="drag-target"></div>').attr('data-sidenav', menuId);
          $('body').append($dragTarget);
        } else {
          $dragTarget = $();
        }

        if (options.edge == 'left') {
          menu.css('transform', 'translateX(-100%)');
          $dragTarget.css({ 'left': 0 }); // Add Touch Area
        } else {
          menu.addClass('right-aligned') // Change text-alignment to right
          .css('transform', 'translateX(100%)');
          $dragTarget.css({ 'right': 0 }); // Add Touch Area
        }

        // If fixed sidenav, bring menu out
        if (menu.hasClass('fixed')) {
          if (window.innerWidth > 992) {
            menu.css('transform', 'translateX(0)');
          }
        }

        // Window resize to reset on large screens fixed
        if (menu.hasClass('fixed')) {
          $(window).resize(function () {
            if (window.innerWidth > 992) {
              // Close menu if window is resized bigger than 992 and user has fixed sidenav
              if ($('#sidenav-overlay').length !== 0 && menuOut) {
                removeMenu(true);
              } else {
                // menu.removeAttr('style');
                menu.css('transform', 'translateX(0%)');
                // menu.css('width', options.menuWidth);
              }
            } else if (menuOut === false) {
              if (options.edge === 'left') {
                menu.css('transform', 'translateX(-100%)');
              } else {
                menu.css('transform', 'translateX(100%)');
              }
            }
          });
        }

        // if closeOnClick, then add close event for all a tags in side sideNav
        if (options.closeOnClick === true) {
          menu.on("click.itemclick", "a:not(.collapsible-header)", function () {
            if (!(window.innerWidth > 992 && menu.hasClass('fixed'))) {
              removeMenu();
            }
          });
        }

        var removeMenu = function (restoreNav) {
          panning = false;
          menuOut = false;
          // Reenable scrolling
          $('body').css({
            overflow: '',
            width: ''
          });

          $('#sidenav-overlay').velocity({ opacity: 0 }, { duration: 200,
            queue: false, easing: 'easeOutQuad',
            complete: function () {
              $(this).remove();
            } });
          if (options.edge === 'left') {
            // Reset phantom div
            $dragTarget.css({ width: '', right: '', left: '0' });
            menu.velocity({ 'translateX': '-100%' }, { duration: 200,
              queue: false,
              easing: 'easeOutCubic',
              complete: function () {
                if (restoreNav === true) {
                  // Restore Fixed sidenav
                  menu.removeAttr('style');
                  menu.css('width', options.menuWidth);
                }
              }

            });
          } else {
            // Reset phantom div
            $dragTarget.css({ width: '', right: '0', left: '' });
            menu.velocity({ 'translateX': '100%' }, { duration: 200,
              queue: false,
              easing: 'easeOutCubic',
              complete: function () {
                if (restoreNav === true) {
                  // Restore Fixed sidenav
                  menu.removeAttr('style');
                  menu.css('width', options.menuWidth);
                }
              }
            });
          }

          // Callback
          if (typeof options.onClose === 'function') {
            options.onClose.call(this, menu);
          }
        };

        // Touch Event
        var panning = false;
        var menuOut = false;

        if (options.draggable) {
          $dragTarget.on('click', function () {
            if (menuOut) {
              removeMenu();
            }
          });

          $dragTarget.hammer({
            prevent_default: false
          }).on('pan', function (e) {

            if (e.gesture.pointerType == "touch") {

              var direction = e.gesture.direction;
              var x = e.gesture.center.x;
              var y = e.gesture.center.y;
              var velocityX = e.gesture.velocityX;

              // Vertical scroll bugfix
              if (x === 0 && y === 0) {
                return;
              }

              // Disable Scrolling
              var $body = $('body');
              var $overlay = $('#sidenav-overlay');
              var oldWidth = $body.innerWidth();
              $body.css('overflow', 'hidden');
              $body.width(oldWidth);

              // If overlay does not exist, create one and if it is clicked, close menu
              if ($overlay.length === 0) {
                $overlay = $('<div id="sidenav-overlay"></div>');
                $overlay.css('opacity', 0).click(function () {
                  removeMenu();
                });

                // Run 'onOpen' when sidenav is opened via touch/swipe if applicable
                if (typeof options.onOpen === 'function') {
                  options.onOpen.call(this, menu);
                }

                $('body').append($overlay);
              }

              // Keep within boundaries
              if (options.edge === 'left') {
                if (x > options.menuWidth) {
                  x = options.menuWidth;
                } else if (x < 0) {
                  x = 0;
                }
              }

              if (options.edge === 'left') {
                // Left Direction
                if (x < options.menuWidth / 2) {
                  menuOut = false;
                }
                // Right Direction
                else if (x >= options.menuWidth / 2) {
                    menuOut = true;
                  }
                menu.css('transform', 'translateX(' + (x - options.menuWidth) + 'px)');
              } else {
                // Left Direction
                if (x < window.innerWidth - options.menuWidth / 2) {
                  menuOut = true;
                }
                // Right Direction
                else if (x >= window.innerWidth - options.menuWidth / 2) {
                    menuOut = false;
                  }
                var rightPos = x - options.menuWidth / 2;
                if (rightPos < 0) {
                  rightPos = 0;
                }

                menu.css('transform', 'translateX(' + rightPos + 'px)');
              }

              // Percentage overlay
              var overlayPerc;
              if (options.edge === 'left') {
                overlayPerc = x / options.menuWidth;
                $overlay.velocity({ opacity: overlayPerc }, { duration: 10, queue: false, easing: 'easeOutQuad' });
              } else {
                overlayPerc = Math.abs((x - window.innerWidth) / options.menuWidth);
                $overlay.velocity({ opacity: overlayPerc }, { duration: 10, queue: false, easing: 'easeOutQuad' });
              }
            }
          }).on('panend', function (e) {

            if (e.gesture.pointerType == "touch") {
              var $overlay = $('#sidenav-overlay');
              var velocityX = e.gesture.velocityX;
              var x = e.gesture.center.x;
              var leftPos = x - options.menuWidth;
              var rightPos = x - options.menuWidth / 2;
              if (leftPos > 0) {
                leftPos = 0;
              }
              if (rightPos < 0) {
                rightPos = 0;
              }
              panning = false;

              if (options.edge === 'left') {
                // If velocityX <= 0.3 then the user is flinging the menu closed so ignore menuOut
                if (menuOut && velocityX <= 0.3 || velocityX < -0.5) {
                  // Return menu to open
                  if (leftPos !== 0) {
                    menu.velocity({ 'translateX': [0, leftPos] }, { duration: 300, queue: false, easing: 'easeOutQuad' });
                  }

                  $overlay.velocity({ opacity: 1 }, { duration: 50, queue: false, easing: 'easeOutQuad' });
                  $dragTarget.css({ width: '50%', right: 0, left: '' });
                  menuOut = true;
                } else if (!menuOut || velocityX > 0.3) {
                  // Enable Scrolling
                  $('body').css({
                    overflow: '',
                    width: ''
                  });
                  // Slide menu closed
                  menu.velocity({ 'translateX': [-1 * options.menuWidth - 10, leftPos] }, { duration: 200, queue: false, easing: 'easeOutQuad' });
                  $overlay.velocity({ opacity: 0 }, { duration: 200, queue: false, easing: 'easeOutQuad',
                    complete: function () {
                      // Run 'onClose' when sidenav is closed via touch/swipe if applicable
                      if (typeof options.onClose === 'function') {
                        options.onClose.call(this, menu);
                      }

                      $(this).remove();
                    } });
                  $dragTarget.css({ width: '10px', right: '', left: 0 });
                }
              } else {
                if (menuOut && velocityX >= -0.3 || velocityX > 0.5) {
                  // Return menu to open
                  if (rightPos !== 0) {
                    menu.velocity({ 'translateX': [0, rightPos] }, { duration: 300, queue: false, easing: 'easeOutQuad' });
                  }

                  $overlay.velocity({ opacity: 1 }, { duration: 50, queue: false, easing: 'easeOutQuad' });
                  $dragTarget.css({ width: '50%', right: '', left: 0 });
                  menuOut = true;
                } else if (!menuOut || velocityX < -0.3) {
                  // Enable Scrolling
                  $('body').css({
                    overflow: '',
                    width: ''
                  });

                  // Slide menu closed
                  menu.velocity({ 'translateX': [options.menuWidth + 10, rightPos] }, { duration: 200, queue: false, easing: 'easeOutQuad' });
                  $overlay.velocity({ opacity: 0 }, { duration: 200, queue: false, easing: 'easeOutQuad',
                    complete: function () {
                      // Run 'onClose' when sidenav is closed via touch/swipe if applicable
                      if (typeof options.onClose === 'function') {
                        options.onClose.call(this, menu);
                      }

                      $(this).remove();
                    } });
                  $dragTarget.css({ width: '10px', right: 0, left: '' });
                }
              }
            }
          });
        }

        $this.off('click.sidenav').on('click.sidenav', function () {
          if (menuOut === true) {
            menuOut = false;
            panning = false;
            removeMenu();
          } else {

            // Disable Scrolling
            var $body = $('body');
            var $overlay = $('<div id="sidenav-overlay"></div>');
            var oldWidth = $body.innerWidth();
            $body.css('overflow', 'hidden');
            $body.width(oldWidth);

            // Push current drag target on top of DOM tree
            $('body').append($dragTarget);

            if (options.edge === 'left') {
              $dragTarget.css({ width: '50%', right: 0, left: '' });
              menu.velocity({ 'translateX': [0, -1 * options.menuWidth] }, { duration: 300, queue: false, easing: 'easeOutQuad' });
            } else {
              $dragTarget.css({ width: '50%', right: '', left: 0 });
              menu.velocity({ 'translateX': [0, options.menuWidth] }, { duration: 300, queue: false, easing: 'easeOutQuad' });
            }

            // Overlay close on click
            $overlay.css('opacity', 0).click(function () {
              menuOut = false;
              panning = false;
              removeMenu();
              $overlay.velocity({ opacity: 0 }, { duration: 300, queue: false, easing: 'easeOutQuad',
                complete: function () {
                  $(this).remove();
                }
              });
            });

            // Append body
            $('body').append($overlay);
            $overlay.velocity({ opacity: 1 }, { duration: 300, queue: false, easing: 'easeOutQuad',
              complete: function () {
                menuOut = true;
                panning = false;
              }
            });

            // Callback
            if (typeof options.onOpen === 'function') {
              options.onOpen.call(this, menu);
            }
          }

          return false;
        });
      });
    },
    destroy: function () {
      var $overlay = $('#sidenav-overlay');
      var $dragTarget = $('.drag-target[data-sidenav="' + $(this).attr('data-activates') + '"]');
      $overlay.trigger('click');
      $dragTarget.remove();
      $(this).off('click');
      $overlay.remove();
    },
    show: function () {
      this.trigger('click');
    },
    hide: function () {
      $('#sidenav-overlay').trigger('click');
    }
  };

  $.fn.sideNav = function (methodOrOptions) {
    if (methods[methodOrOptions]) {
      return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
      // Default to "init"
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + methodOrOptions + ' does not exist on jQuery.sideNav');
    }
  }; // Plugin end
})(jQuery);
; /**
  * Extend jquery with a scrollspy plugin.
  * This watches the window scroll and fires events when elements are scrolled into viewport.
  *
  * throttle() and getTime() taken from Underscore.js
  * https://github.com/jashkenas/underscore
  *
  * @author Copyright 2013 John Smart
  * @license https://raw.github.com/thesmart/jquery-scrollspy/master/LICENSE
  * @see https://github.com/thesmart
  * @version 0.1.2
  */
(function ($) {

  var jWindow = $(window);
  var elements = [];
  var elementsInView = [];
  var isSpying = false;
  var ticks = 0;
  var unique_id = 1;
  var offset = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0

    /**
     * Find elements that are within the boundary
     * @param {number} top
     * @param {number} right
     * @param {number} bottom
     * @param {number} left
     * @return {jQuery}		A collection of elements
     */
  };function findElements(top, right, bottom, left) {
    var hits = $();
    $.each(elements, function (i, element) {
      if (element.height() > 0) {
        var elTop = element.offset().top,
            elLeft = element.offset().left,
            elRight = elLeft + element.width(),
            elBottom = elTop + element.height();

        var isIntersect = !(elLeft > right || elRight < left || elTop > bottom || elBottom < top);

        if (isIntersect) {
          hits.push(element);
        }
      }
    });

    return hits;
  }

  /**
   * Called when the user scrolls the window
   */
  function onScroll(scrollOffset) {
    // unique tick id
    ++ticks;

    // viewport rectangle
    var top = jWindow.scrollTop(),
        left = jWindow.scrollLeft(),
        right = left + jWindow.width(),
        bottom = top + jWindow.height();

    // determine which elements are in view
    var intersections = findElements(top + offset.top + scrollOffset || 200, right + offset.right, bottom + offset.bottom, left + offset.left);
    $.each(intersections, function (i, element) {

      var lastTick = element.data('scrollSpy:ticks');
      if (typeof lastTick != 'number') {
        // entered into view
        element.triggerHandler('scrollSpy:enter');
      }

      // update tick id
      element.data('scrollSpy:ticks', ticks);
    });

    // determine which elements are no longer in view
    $.each(elementsInView, function (i, element) {
      var lastTick = element.data('scrollSpy:ticks');
      if (typeof lastTick == 'number' && lastTick !== ticks) {
        // exited from view
        element.triggerHandler('scrollSpy:exit');
        element.data('scrollSpy:ticks', null);
      }
    });

    // remember elements in view for next tick
    elementsInView = intersections;
  }

  /**
   * Called when window is resized
  */
  function onWinSize() {
    jWindow.trigger('scrollSpy:winSize');
  }

  /**
   * Enables ScrollSpy using a selector
   * @param {jQuery|string} selector  The elements collection, or a selector
   * @param {Object=} options	Optional.
         throttle : number -> scrollspy throttling. Default: 100 ms
         offsetTop : number -> offset from top. Default: 0
         offsetRight : number -> offset from right. Default: 0
         offsetBottom : number -> offset from bottom. Default: 0
         offsetLeft : number -> offset from left. Default: 0
  			activeClass : string -> Class name to be added to the active link. Default: active
   * @returns {jQuery}
   */
  $.scrollSpy = function (selector, options) {
    var defaults = {
      throttle: 100,
      scrollOffset: 200, // offset - 200 allows elements near bottom of page to scroll
      activeClass: 'active',
      getActiveElement: function (id) {
        return 'a[href="#' + id + '"]';
      }
    };
    options = $.extend(defaults, options);

    var visible = [];
    selector = $(selector);
    selector.each(function (i, element) {
      elements.push($(element));
      $(element).data("scrollSpy:id", i);
      // Smooth scroll to section
      $('a[href="#' + $(element).attr('id') + '"]').click(function (e) {
        e.preventDefault();
        var offset = $(Materialize.escapeHash(this.hash)).offset().top + 1;
        $('html, body').animate({ scrollTop: offset - options.scrollOffset }, { duration: 400, queue: false, easing: 'easeOutCubic' });
      });
    });

    offset.top = options.offsetTop || 0;
    offset.right = options.offsetRight || 0;
    offset.bottom = options.offsetBottom || 0;
    offset.left = options.offsetLeft || 0;

    var throttledScroll = Materialize.throttle(function () {
      onScroll(options.scrollOffset);
    }, options.throttle || 100);
    var readyScroll = function () {
      $(document).ready(throttledScroll);
    };

    if (!isSpying) {
      jWindow.on('scroll', readyScroll);
      jWindow.on('resize', readyScroll);
      isSpying = true;
    }

    // perform a scan once, after current execution context, and after dom is ready
    setTimeout(readyScroll, 0);

    selector.on('scrollSpy:enter', function () {
      visible = $.grep(visible, function (value) {
        return value.height() != 0;
      });

      var $this = $(this);

      if (visible[0]) {
        $(options.getActiveElement(visible[0].attr('id'))).removeClass(options.activeClass);
        if ($this.data('scrollSpy:id') < visible[0].data('scrollSpy:id')) {
          visible.unshift($(this));
        } else {
          visible.push($(this));
        }
      } else {
        visible.push($(this));
      }

      $(options.getActiveElement(visible[0].attr('id'))).addClass(options.activeClass);
    });
    selector.on('scrollSpy:exit', function () {
      visible = $.grep(visible, function (value) {
        return value.height() != 0;
      });

      if (visible[0]) {
        $(options.getActiveElement(visible[0].attr('id'))).removeClass(options.activeClass);
        var $this = $(this);
        visible = $.grep(visible, function (value) {
          return value.attr('id') != $this.attr('id');
        });
        if (visible[0]) {
          // Check if empty
          $(options.getActiveElement(visible[0].attr('id'))).addClass(options.activeClass);
        }
      }
    });

    return selector;
  };

  /**
   * Listen for window resize events
   * @param {Object=} options						Optional. Set { throttle: number } to change throttling. Default: 100 ms
   * @returns {jQuery}		$(window)
   */
  $.winSizeSpy = function (options) {
    $.winSizeSpy = function () {
      return jWindow;
    }; // lock from multiple calls
    options = options || {
      throttle: 100
    };
    return jWindow.on('resize', Materialize.throttle(onWinSize, options.throttle || 100));
  };

  /**
   * Enables ScrollSpy on a collection of elements
   * e.g. $('.scrollSpy').scrollSpy()
   * @param {Object=} options	Optional.
  										throttle : number -> scrollspy throttling. Default: 100 ms
  										offsetTop : number -> offset from top. Default: 0
  										offsetRight : number -> offset from right. Default: 0
  										offsetBottom : number -> offset from bottom. Default: 0
  										offsetLeft : number -> offset from left. Default: 0
   * @returns {jQuery}
   */
  $.fn.scrollSpy = function (options) {
    return $.scrollSpy($(this), options);
  };
})(jQuery);
;(function ($) {
  $(document).ready(function () {

    // Function to update labels of text fields
    Materialize.updateTextFields = function () {
      var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';
      $(input_selector).each(function (index, element) {
        var $this = $(this);
        if ($(element).val().length > 0 || $(element).is(':focus') || element.autofocus || $this.attr('placeholder') !== undefined) {
          $this.siblings('label').addClass('active');
        } else if ($(element)[0].validity) {
          $this.siblings('label').toggleClass('active', $(element)[0].validity.badInput === true);
        } else {
          $this.siblings('label').removeClass('active');
        }
      });
    };

    // Text based inputs
    var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';

    // Add active if form auto complete
    $(document).on('change', input_selector, function () {
      if ($(this).val().length !== 0 || $(this).attr('placeholder') !== undefined) {
        $(this).siblings('label').addClass('active');
      }
      validate_field($(this));
    });

    // Add active if input element has been pre-populated on document ready
    $(document).ready(function () {
      Materialize.updateTextFields();
    });

    // HTML DOM FORM RESET handling
    $(document).on('reset', function (e) {
      var formReset = $(e.target);
      if (formReset.is('form')) {
        formReset.find(input_selector).removeClass('valid').removeClass('invalid');
        formReset.find(input_selector).each(function () {
          if ($(this).attr('value') === '') {
            $(this).siblings('label').removeClass('active');
          }
        });

        // Reset select
        formReset.find('select.initialized').each(function () {
          var reset_text = formReset.find('option[selected]').text();
          formReset.siblings('input.select-dropdown').val(reset_text);
        });
      }
    });

    // Add active when element has focus
    $(document).on('focus', input_selector, function () {
      $(this).siblings('label, .prefix').addClass('active');
    });

    $(document).on('blur', input_selector, function () {
      var $inputElement = $(this);
      var selector = ".prefix";

      if ($inputElement.val().length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') === undefined) {
        selector += ", label";
      }

      $inputElement.siblings(selector).removeClass('active');

      validate_field($inputElement);
    });

    window.validate_field = function (object) {
      var hasLength = object.attr('data-length') !== undefined;
      var lenAttr = parseInt(object.attr('data-length'));
      var len = object.val().length;

      if (object.val().length === 0 && object[0].validity.badInput === false && !object.is(':required')) {
        if (object.hasClass('validate')) {
          object.removeClass('valid');
          object.removeClass('invalid');
        }
      } else {
        if (object.hasClass('validate')) {
          // Check for character counter attributes
          if (object.is(':valid') && hasLength && len <= lenAttr || object.is(':valid') && !hasLength) {
            object.removeClass('invalid');
            object.addClass('valid');
          } else {
            object.removeClass('valid');
            object.addClass('invalid');
          }
        }
      }
    };

    // Radio and Checkbox focus class
    var radio_checkbox = 'input[type=radio], input[type=checkbox]';
    $(document).on('keyup.radio', radio_checkbox, function (e) {
      // TAB, check if tabbing to radio or checkbox.
      if (e.which === 9) {
        $(this).addClass('tabbed');
        var $this = $(this);
        $this.one('blur', function (e) {

          $(this).removeClass('tabbed');
        });
        return;
      }
    });

    // Textarea Auto Resize
    var hiddenDiv = $('.hiddendiv').first();
    if (!hiddenDiv.length) {
      hiddenDiv = $('<div class="hiddendiv common"></div>');
      $('body').append(hiddenDiv);
    }
    var text_area_selector = '.materialize-textarea';

    function textareaAutoResize($textarea) {
      // Set font properties of hiddenDiv

      var fontFamily = $textarea.css('font-family');
      var fontSize = $textarea.css('font-size');
      var lineHeight = $textarea.css('line-height');
      var padding = $textarea.css('padding');

      if (fontSize) {
        hiddenDiv.css('font-size', fontSize);
      }
      if (fontFamily) {
        hiddenDiv.css('font-family', fontFamily);
      }
      if (lineHeight) {
        hiddenDiv.css('line-height', lineHeight);
      }
      if (padding) {
        hiddenDiv.css('padding', padding);
      }

      // Set original-height, if none
      if (!$textarea.data('original-height')) {
        $textarea.data('original-height', $textarea.height());
      }

      if ($textarea.attr('wrap') === 'off') {
        hiddenDiv.css('overflow-wrap', 'normal').css('white-space', 'pre');
      }

      hiddenDiv.text($textarea.val() + '\n');
      var content = hiddenDiv.html().replace(/\n/g, '<br>');
      hiddenDiv.html(content);

      // When textarea is hidden, width goes crazy.
      // Approximate with half of window size

      if ($textarea.is(':visible')) {
        hiddenDiv.css('width', $textarea.width());
      } else {
        hiddenDiv.css('width', $(window).width() / 2);
      }

      /**
       * Resize if the new height is greater than the
       * original height of the textarea
       */
      if ($textarea.data('original-height') <= hiddenDiv.height()) {
        $textarea.css('height', hiddenDiv.height());
      } else if ($textarea.val().length < $textarea.data('previous-length')) {
        /**
         * In case the new height is less than original height, it
         * means the textarea has less text than before
         * So we set the height to the original one
         */
        $textarea.css('height', $textarea.data('original-height'));
      }
      $textarea.data('previous-length', $textarea.val().length);
    }

    $(text_area_selector).each(function () {
      var $textarea = $(this);
      /**
       * Instead of resizing textarea on document load,
       * store the original height and the original length
       */
      $textarea.data('original-height', $textarea.height());
      $textarea.data('previous-length', $textarea.val().length);
    });

    $('body').on('keyup keydown autoresize', text_area_selector, function () {
      textareaAutoResize($(this));
    });

    // File Input Path
    $(document).on('change', '.file-field input[type="file"]', function () {
      var file_field = $(this).closest('.file-field');
      var path_input = file_field.find('input.file-path');
      var files = $(this)[0].files;
      var file_names = [];
      for (var i = 0; i < files.length; i++) {
        file_names.push(files[i].name);
      }
      path_input.val(file_names.join(", "));
      path_input.trigger('change');
    });

    /****************
    *  Range Input  *
    ****************/

    var range_type = 'input[type=range]';
    var range_mousedown = false;
    var left;

    $(range_type).each(function () {
      var thumb = $('<span class="thumb"><span class="value"></span></span>');
      $(this).after(thumb);
    });

    var showRangeBubble = function (thumb) {
      var paddingLeft = parseInt(thumb.parent().css('padding-left'));
      var marginLeft = -7 + paddingLeft + 'px';
      thumb.velocity({ height: "30px", width: "30px", top: "-30px", marginLeft: marginLeft }, { duration: 300, easing: 'easeOutExpo' });
    };

    var calcRangeOffset = function (range) {
      var width = range.width() - 15;
      var max = parseFloat(range.attr('max'));
      var min = parseFloat(range.attr('min'));
      var percent = (parseFloat(range.val()) - min) / (max - min);
      return percent * width;
    };

    var range_wrapper = '.range-field';
    $(document).on('change', range_type, function (e) {
      var thumb = $(this).siblings('.thumb');
      thumb.find('.value').html($(this).val());

      if (!thumb.hasClass('active')) {
        showRangeBubble(thumb);
      }

      var offsetLeft = calcRangeOffset($(this));
      thumb.addClass('active').css('left', offsetLeft);
    });

    $(document).on('mousedown touchstart', range_type, function (e) {
      var thumb = $(this).siblings('.thumb');

      // If thumb indicator does not exist yet, create it
      if (thumb.length <= 0) {
        thumb = $('<span class="thumb"><span class="value"></span></span>');
        $(this).after(thumb);
      }

      // Set indicator value
      thumb.find('.value').html($(this).val());

      range_mousedown = true;
      $(this).addClass('active');

      if (!thumb.hasClass('active')) {
        showRangeBubble(thumb);
      }

      if (e.type !== 'input') {
        var offsetLeft = calcRangeOffset($(this));
        thumb.addClass('active').css('left', offsetLeft);
      }
    });

    $(document).on('mouseup touchend', range_wrapper, function () {
      range_mousedown = false;
      $(this).removeClass('active');
    });

    $(document).on('input mousemove touchmove', range_wrapper, function (e) {
      var thumb = $(this).children('.thumb');
      var left;
      var input = $(this).find(range_type);

      if (range_mousedown) {
        if (!thumb.hasClass('active')) {
          showRangeBubble(thumb);
        }

        var offsetLeft = calcRangeOffset(input);
        thumb.addClass('active').css('left', offsetLeft);
        thumb.find('.value').html(thumb.siblings(range_type).val());
      }
    });

    $(document).on('mouseout touchleave', range_wrapper, function () {
      if (!range_mousedown) {

        var thumb = $(this).children('.thumb');
        var paddingLeft = parseInt($(this).css('padding-left'));
        var marginLeft = 7 + paddingLeft + 'px';

        if (thumb.hasClass('active')) {
          thumb.velocity({ height: '0', width: '0', top: '10px', marginLeft: marginLeft }, { duration: 100 });
        }
        thumb.removeClass('active');
      }
    });

    /**************************
     * Auto complete plugin  *
     *************************/
    $.fn.autocomplete = function (options) {
      // Defaults
      var defaults = {
        data: {},
        limit: Infinity,
        onAutocomplete: null,
        minLength: 1
      };

      options = $.extend(defaults, options);

      return this.each(function () {
        var $input = $(this);
        var data = options.data,
            count = 0,
            activeIndex = -1,
            oldVal,
            $inputDiv = $input.closest('.input-field'); // Div to append on

        // Check if data isn't empty
        if (!$.isEmptyObject(data)) {
          var $autocomplete = $('<ul class="autocomplete-content dropdown-content"></ul>');
          var $oldAutocomplete;

          // Append autocomplete element.
          // Prevent double structure init.
          if ($inputDiv.length) {
            $oldAutocomplete = $inputDiv.children('.autocomplete-content.dropdown-content').first();
            if (!$oldAutocomplete.length) {
              $inputDiv.append($autocomplete); // Set ul in body
            }
          } else {
            $oldAutocomplete = $input.next('.autocomplete-content.dropdown-content');
            if (!$oldAutocomplete.length) {
              $input.after($autocomplete);
            }
          }
          if ($oldAutocomplete.length) {
            $autocomplete = $oldAutocomplete;
          }

          // Highlight partial match.
          var highlight = function (string, $el) {
            var img = $el.find('img');
            var matchStart = $el.text().toLowerCase().indexOf("" + string.toLowerCase() + ""),
                matchEnd = matchStart + string.length - 1,
                beforeMatch = $el.text().slice(0, matchStart),
                matchText = $el.text().slice(matchStart, matchEnd + 1),
                afterMatch = $el.text().slice(matchEnd + 1);
            $el.html("<span>" + beforeMatch + "<span class='highlight'>" + matchText + "</span>" + afterMatch + "</span>");
            if (img.length) {
              $el.prepend(img);
            }
          };

          // Reset current element position
          var resetCurrentElement = function () {
            activeIndex = -1;
            $autocomplete.find('.active').removeClass('active');
          };

          // Remove autocomplete elements
          var removeAutocomplete = function () {
            $autocomplete.empty();
            resetCurrentElement();
            oldVal = undefined;
          };

          $input.off('blur.autocomplete').on('blur.autocomplete', function () {
            removeAutocomplete();
          });

          // Perform search
          $input.off('keyup.autocomplete focus.autocomplete').on('keyup.autocomplete focus.autocomplete', function (e) {
            // Reset count.
            count = 0;
            var val = $input.val().toLowerCase();

            // Don't capture enter or arrow key usage.
            if (e.which === 13 || e.which === 38 || e.which === 40) {
              return;
            }

            // Check if the input isn't empty
            if (oldVal !== val) {
              removeAutocomplete();

              if (val.length >= options.minLength) {
                for (var key in data) {
                  if (data.hasOwnProperty(key) && key.toLowerCase().indexOf(val) !== -1) {
                    // Break if past limit
                    if (count >= options.limit) {
                      break;
                    }

                    var autocompleteOption = $('<li></li>');
                    if (!!data[key]) {
                      autocompleteOption.append('<img src="' + data[key] + '" class="right circle"><span>' + key + '</span>');
                    } else {
                      autocompleteOption.append('<span>' + key + '</span>');
                    }

                    $autocomplete.append(autocompleteOption);
                    highlight(val, autocompleteOption);
                    count++;
                  }
                }
              }
            }

            // Update oldVal
            oldVal = val;
          });

          $input.off('keydown.autocomplete').on('keydown.autocomplete', function (e) {
            // Arrow keys and enter key usage
            var keyCode = e.which,
                liElement,
                numItems = $autocomplete.children('li').length,
                $active = $autocomplete.children('.active').first();

            // select element on Enter
            if (keyCode === 13 && activeIndex >= 0) {
              liElement = $autocomplete.children('li').eq(activeIndex);
              if (liElement.length) {
                liElement.trigger('mousedown.autocomplete');
                e.preventDefault();
              }
              return;
            }

            // Capture up and down key
            if (keyCode === 38 || keyCode === 40) {
              e.preventDefault();

              if (keyCode === 38 && activeIndex > 0) {
                activeIndex--;
              }

              if (keyCode === 40 && activeIndex < numItems - 1) {
                activeIndex++;
              }

              $active.removeClass('active');
              if (activeIndex >= 0) {
                $autocomplete.children('li').eq(activeIndex).addClass('active');
              }
            }
          });

          // Set input value
          $autocomplete.off('mousedown.autocomplete touchstart.autocomplete').on('mousedown.autocomplete touchstart.autocomplete', 'li', function () {
            var text = $(this).text().trim();
            $input.val(text);
            $input.trigger('change');
            removeAutocomplete();

            // Handle onAutocomplete callback.
            if (typeof options.onAutocomplete === "function") {
              options.onAutocomplete.call(this, text);
            }
          });

          // Empty data
        } else {
          $input.off('keyup.autocomplete focus.autocomplete');
        }
      });
    };
  }); // End of $(document).ready

  /*******************
   *  Select Plugin  *
   ******************/
  $.fn.material_select = function (callback) {
    $(this).each(function () {
      var $select = $(this);

      if ($select.hasClass('browser-default')) {
        return; // Continue to next (return false breaks out of entire loop)
      }

      var multiple = $select.attr('multiple') ? true : false,
          lastID = $select.attr('data-select-id'); // Tear down structure if Select needs to be rebuilt

      if (lastID) {
        $select.parent().find('span.caret').remove();
        $select.parent().find('input').remove();

        $select.unwrap();
        $('ul#select-options-' + lastID).remove();
      }

      // If destroying the select, remove the selelct-id and reset it to it's uninitialized state.
      if (callback === 'destroy') {
        $select.removeAttr('data-select-id').removeClass('initialized');
        $(window).off('click.select');
        return;
      }

      var uniqueID = Materialize.guid();
      $select.attr('data-select-id', uniqueID);
      var wrapper = $('<div class="select-wrapper"></div>');
      wrapper.addClass($select.attr('class'));
      if ($select.is(':disabled')) wrapper.addClass('disabled');
      var options = $('<ul id="select-options-' + uniqueID + '" class="dropdown-content select-dropdown ' + (multiple ? 'multiple-select-dropdown' : '') + '"></ul>'),
          selectChildren = $select.children('option, optgroup'),
          valuesSelected = [],
          optionsHover = false;

      var label = $select.find('option:selected').html() || $select.find('option:first').html() || "";

      // Function that renders and appends the option taking into
      // account type and possible image icon.
      var appendOptionWithIcon = function (select, option, type) {
        // Add disabled attr if disabled
        var disabledClass = option.is(':disabled') ? 'disabled ' : '';
        var optgroupClass = type === 'optgroup-option' ? 'optgroup-option ' : '';
        var multipleCheckbox = multiple ? '<input type="checkbox"' + disabledClass + '/><label></label>' : '';

        // add icons
        var icon_url = option.data('icon');
        var classes = option.attr('class');
        if (!!icon_url) {
          var classString = '';
          if (!!classes) classString = ' class="' + classes + '"';

          // Check for multiple type.
          options.append($('<li class="' + disabledClass + optgroupClass + '"><img alt="" src="' + icon_url + '"' + classString + '><span>' + multipleCheckbox + option.html() + '</span></li>'));
          return true;
        }

        // Check for multiple type.
        options.append($('<li class="' + disabledClass + optgroupClass + '"><span>' + multipleCheckbox + option.html() + '</span></li>'));
      };

      /* Create dropdown structure. */
      if (selectChildren.length) {
        selectChildren.each(function () {
          if ($(this).is('option')) {
            // Direct descendant option.
            if (multiple) {
              appendOptionWithIcon($select, $(this), 'multiple');
            } else {
              appendOptionWithIcon($select, $(this));
            }
          } else if ($(this).is('optgroup')) {
            // Optgroup.
            var selectOptions = $(this).children('option');
            options.append($('<li class="optgroup"><span>' + $(this).attr('label') + '</span></li>'));

            selectOptions.each(function () {
              appendOptionWithIcon($select, $(this), 'optgroup-option');
            });
          }
        });
      }

      options.find('li:not(.optgroup)').each(function (i) {
        $(this).click(function (e) {
          // Check if option element is disabled
          if (!$(this).hasClass('disabled') && !$(this).hasClass('optgroup')) {
            var selected = true;

            if (multiple) {
              $('input[type="checkbox"]', this).prop('checked', function (i, v) {
                return !v;
              });
              selected = toggleEntryFromArray(valuesSelected, i, $select);
              $newSelect.trigger('focus');
            } else {
              options.find('li').removeClass('active');
              $(this).toggleClass('active');
              $newSelect.val($(this).text());
            }

            activateOption(options, $(this));
            $select.find('option').eq(i).prop('selected', selected);
            // Trigger onchange() event
            $select.trigger('change');
            if (typeof callback !== 'undefined') callback();
          }

          e.stopPropagation();
        });
      });

      // Wrap Elements
      $select.wrap(wrapper);
      // Add Select Display Element
      var dropdownIcon = $('<span class="caret">&#9660;</span>');

      // escape double quotes
      var sanitizedLabelHtml = label.replace(/"/g, '&quot;');

      var $newSelect = $('<input type="text" class="select-dropdown" readonly="true" ' + ($select.is(':disabled') ? 'disabled' : '') + ' data-activates="select-options-' + uniqueID + '" value="' + sanitizedLabelHtml + '"/>');
      $select.before($newSelect);
      $newSelect.before(dropdownIcon);

      $newSelect.after(options);
      // Check if section element is disabled
      if (!$select.is(':disabled')) {
        $newSelect.dropdown({ 'hover': false });
      }

      // Copy tabindex
      if ($select.attr('tabindex')) {
        $($newSelect[0]).attr('tabindex', $select.attr('tabindex'));
      }

      $select.addClass('initialized');

      $newSelect.on({
        'focus': function () {
          if ($('ul.select-dropdown').not(options[0]).is(':visible')) {
            $('input.select-dropdown').trigger('close');
            $(window).off('click.select');
          }
          if (!options.is(':visible')) {
            $(this).trigger('open', ['focus']);
            var label = $(this).val();
            if (multiple && label.indexOf(',') >= 0) {
              label = label.split(',')[0];
            }

            var selectedOption = options.find('li').filter(function () {
              return $(this).text().toLowerCase() === label.toLowerCase();
            })[0];
            activateOption(options, selectedOption, true);

            $(window).off('click.select').on('click.select', function () {
              multiple && (optionsHover || $newSelect.trigger('close'));
              $(window).off('click.select');
            });
          }
        },
        'click': function (e) {
          e.stopPropagation();
        }
      });

      $newSelect.on('blur', function () {
        if (!multiple) {
          $(this).trigger('close');
          $(window).off('click.select');
        }
        options.find('li.selected').removeClass('selected');
      });

      options.hover(function () {
        optionsHover = true;
      }, function () {
        optionsHover = false;
      });

      // Add initial multiple selections.
      if (multiple) {
        $select.find("option:selected:not(:disabled)").each(function () {
          var index = this.index;

          toggleEntryFromArray(valuesSelected, index, $select);
          options.find("li:not(.optgroup)").eq(index).find(":checkbox").prop("checked", true);
        });
      }

      /**
       * Make option as selected and scroll to selected position
       * @param {jQuery} collection  Select options jQuery element
       * @param {Element} newOption  element of the new option
       * @param {Boolean} firstActivation  If on first activation of select
       */
      var activateOption = function (collection, newOption, firstActivation) {
        if (newOption) {
          collection.find('li.selected').removeClass('selected');
          var option = $(newOption);
          option.addClass('selected');
          if (!multiple || !!firstActivation) {
            options.scrollTo(option);
          }
        }
      };

      // Allow user to search by typing
      // this array is cleared after 1 second
      var filterQuery = [],
          onKeyDown = function (e) {
        // TAB - switch to another input
        if (e.which == 9) {
          $newSelect.trigger('close');
          return;
        }

        // ARROW DOWN WHEN SELECT IS CLOSED - open select options
        if (e.which == 40 && !options.is(':visible')) {
          $newSelect.trigger('open');
          return;
        }

        // ENTER WHEN SELECT IS CLOSED - submit form
        if (e.which == 13 && !options.is(':visible')) {
          return;
        }

        e.preventDefault();

        // CASE WHEN USER TYPE LETTERS
        var letter = String.fromCharCode(e.which).toLowerCase(),
            nonLetters = [9, 13, 27, 38, 40];
        if (letter && nonLetters.indexOf(e.which) === -1) {
          filterQuery.push(letter);

          var string = filterQuery.join(''),
              newOption = options.find('li').filter(function () {
            return $(this).text().toLowerCase().indexOf(string) === 0;
          })[0];

          if (newOption) {
            activateOption(options, newOption);
          }
        }

        // ENTER - select option and close when select options are opened
        if (e.which == 13) {
          var activeOption = options.find('li.selected:not(.disabled)')[0];
          if (activeOption) {
            $(activeOption).trigger('click');
            if (!multiple) {
              $newSelect.trigger('close');
            }
          }
        }

        // ARROW DOWN - move to next not disabled option
        if (e.which == 40) {
          if (options.find('li.selected').length) {
            newOption = options.find('li.selected').next('li:not(.disabled)')[0];
          } else {
            newOption = options.find('li:not(.disabled)')[0];
          }
          activateOption(options, newOption);
        }

        // ESC - close options
        if (e.which == 27) {
          $newSelect.trigger('close');
        }

        // ARROW UP - move to previous not disabled option
        if (e.which == 38) {
          newOption = options.find('li.selected').prev('li:not(.disabled)')[0];
          if (newOption) activateOption(options, newOption);
        }

        // Automaticaly clean filter query so user can search again by starting letters
        setTimeout(function () {
          filterQuery = [];
        }, 1000);
      };

      $newSelect.on('keydown', onKeyDown);
    });

    function toggleEntryFromArray(entriesArray, entryIndex, select) {
      var index = entriesArray.indexOf(entryIndex),
          notAdded = index === -1;

      if (notAdded) {
        entriesArray.push(entryIndex);
      } else {
        entriesArray.splice(index, 1);
      }

      select.siblings('ul.dropdown-content').find('li:not(.optgroup)').eq(entryIndex).toggleClass('active');

      // use notAdded instead of true (to detect if the option is selected or not)
      select.find('option').eq(entryIndex).prop('selected', notAdded);
      setValueToInput(entriesArray, select);

      return notAdded;
    }

    function setValueToInput(entriesArray, select) {
      var value = '';

      for (var i = 0, count = entriesArray.length; i < count; i++) {
        var text = select.find('option').eq(entriesArray[i]).text();

        i === 0 ? value += text : value += ', ' + text;
      }

      if (value === '') {
        value = select.find('option:disabled').eq(0).text();
      }

      select.siblings('input.select-dropdown').val(value);
    }
  };
})(jQuery);
;(function ($) {

  var methods = {

    init: function (options) {
      var defaults = {
        indicators: true,
        height: 400,
        transition: 500,
        interval: 6000
      };
      options = $.extend(defaults, options);

      return this.each(function () {

        // For each slider, we want to keep track of
        // which slide is active and its associated content
        var $this = $(this);
        var $slider = $this.find('ul.slides').first();
        var $slides = $slider.find('> li');
        var $active_index = $slider.find('.active').index();
        var $active, $indicators, $interval;
        if ($active_index != -1) {
          $active = $slides.eq($active_index);
        }

        // Transitions the caption depending on alignment
        function captionTransition(caption, duration) {
          if (caption.hasClass("center-align")) {
            caption.velocity({ opacity: 0, translateY: -100 }, { duration: duration, queue: false });
          } else if (caption.hasClass("right-align")) {
            caption.velocity({ opacity: 0, translateX: 100 }, { duration: duration, queue: false });
          } else if (caption.hasClass("left-align")) {
            caption.velocity({ opacity: 0, translateX: -100 }, { duration: duration, queue: false });
          }
        }

        // This function will transition the slide to any index of the next slide
        function moveToSlide(index) {
          // Wrap around indices.
          if (index >= $slides.length) index = 0;else if (index < 0) index = $slides.length - 1;

          $active_index = $slider.find('.active').index();

          // Only do if index changes
          if ($active_index != index) {
            $active = $slides.eq($active_index);
            $caption = $active.find('.caption');

            $active.removeClass('active');
            $active.velocity({ opacity: 0 }, { duration: options.transition, queue: false, easing: 'easeOutQuad',
              complete: function () {
                $slides.not('.active').velocity({ opacity: 0, translateX: 0, translateY: 0 }, { duration: 0, queue: false });
              } });
            captionTransition($caption, options.transition);

            // Update indicators
            if (options.indicators) {
              $indicators.eq($active_index).removeClass('active');
            }

            $slides.eq(index).velocity({ opacity: 1 }, { duration: options.transition, queue: false, easing: 'easeOutQuad' });
            $slides.eq(index).find('.caption').velocity({ opacity: 1, translateX: 0, translateY: 0 }, { duration: options.transition, delay: options.transition, queue: false, easing: 'easeOutQuad' });
            $slides.eq(index).addClass('active');

            // Update indicators
            if (options.indicators) {
              $indicators.eq(index).addClass('active');
            }
          }
        }

        // Set height of slider
        // If fullscreen, do nothing
        if (!$this.hasClass('fullscreen')) {
          if (options.indicators) {
            // Add height if indicators are present
            $this.height(options.height + 40);
          } else {
            $this.height(options.height);
          }
          $slider.height(options.height);
        }

        // Set initial positions of captions
        $slides.find('.caption').each(function () {
          captionTransition($(this), 0);
        });

        // Move img src into background-image
        $slides.find('img').each(function () {
          var placeholderBase64 = 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
          if ($(this).attr('src') !== placeholderBase64) {
            $(this).css('background-image', 'url("' + $(this).attr('src') + '")');
            $(this).attr('src', placeholderBase64);
          }
        });

        // dynamically add indicators
        if (options.indicators) {
          $indicators = $('<ul class="indicators"></ul>');
          $slides.each(function (index) {
            var $indicator = $('<li class="indicator-item"></li>');

            // Handle clicks on indicators
            $indicator.click(function () {
              var $parent = $slider.parent();
              var curr_index = $parent.find($(this)).index();
              moveToSlide(curr_index);

              // reset interval
              clearInterval($interval);
              $interval = setInterval(function () {
                $active_index = $slider.find('.active').index();
                if ($slides.length == $active_index + 1) $active_index = 0; // loop to start
                else $active_index += 1;

                moveToSlide($active_index);
              }, options.transition + options.interval);
            });
            $indicators.append($indicator);
          });
          $this.append($indicators);
          $indicators = $this.find('ul.indicators').find('li.indicator-item');
        }

        if ($active) {
          $active.show();
        } else {
          $slides.first().addClass('active').velocity({ opacity: 1 }, { duration: options.transition, queue: false, easing: 'easeOutQuad' });

          $active_index = 0;
          $active = $slides.eq($active_index);

          // Update indicators
          if (options.indicators) {
            $indicators.eq($active_index).addClass('active');
          }
        }

        // Adjust height to current slide
        $active.find('img').each(function () {
          $active.find('.caption').velocity({ opacity: 1, translateX: 0, translateY: 0 }, { duration: options.transition, queue: false, easing: 'easeOutQuad' });
        });

        // auto scroll
        $interval = setInterval(function () {
          $active_index = $slider.find('.active').index();
          moveToSlide($active_index + 1);
        }, options.transition + options.interval);

        // HammerJS, Swipe navigation

        // Touch Event
        var panning = false;
        var swipeLeft = false;
        var swipeRight = false;

        $this.hammer({
          prevent_default: false
        }).on('pan', function (e) {
          if (e.gesture.pointerType === "touch") {

            // reset interval
            clearInterval($interval);

            var direction = e.gesture.direction;
            var x = e.gesture.deltaX;
            var velocityX = e.gesture.velocityX;
            var velocityY = e.gesture.velocityY;

            $curr_slide = $slider.find('.active');
            if (Math.abs(velocityX) > Math.abs(velocityY)) {
              $curr_slide.velocity({ translateX: x
              }, { duration: 50, queue: false, easing: 'easeOutQuad' });
            }

            // Swipe Left
            if (direction === 4 && (x > $this.innerWidth() / 2 || velocityX < -0.65)) {
              swipeRight = true;
            }
            // Swipe Right
            else if (direction === 2 && (x < -1 * $this.innerWidth() / 2 || velocityX > 0.65)) {
                swipeLeft = true;
              }

            // Make Slide Behind active slide visible
            var next_slide;
            if (swipeLeft) {
              next_slide = $curr_slide.next();
              if (next_slide.length === 0) {
                next_slide = $slides.first();
              }
              next_slide.velocity({ opacity: 1
              }, { duration: 300, queue: false, easing: 'easeOutQuad' });
            }
            if (swipeRight) {
              next_slide = $curr_slide.prev();
              if (next_slide.length === 0) {
                next_slide = $slides.last();
              }
              next_slide.velocity({ opacity: 1
              }, { duration: 300, queue: false, easing: 'easeOutQuad' });
            }
          }
        }).on('panend', function (e) {
          if (e.gesture.pointerType === "touch") {

            $curr_slide = $slider.find('.active');
            panning = false;
            curr_index = $slider.find('.active').index();

            if (!swipeRight && !swipeLeft || $slides.length <= 1) {
              // Return to original spot
              $curr_slide.velocity({ translateX: 0
              }, { duration: 300, queue: false, easing: 'easeOutQuad' });
            } else if (swipeLeft) {
              moveToSlide(curr_index + 1);
              $curr_slide.velocity({ translateX: -1 * $this.innerWidth() }, { duration: 300, queue: false, easing: 'easeOutQuad',
                complete: function () {
                  $curr_slide.velocity({ opacity: 0, translateX: 0 }, { duration: 0, queue: false });
                } });
            } else if (swipeRight) {
              moveToSlide(curr_index - 1);
              $curr_slide.velocity({ translateX: $this.innerWidth() }, { duration: 300, queue: false, easing: 'easeOutQuad',
                complete: function () {
                  $curr_slide.velocity({ opacity: 0, translateX: 0 }, { duration: 0, queue: false });
                } });
            }
            swipeLeft = false;
            swipeRight = false;

            // Restart interval
            clearInterval($interval);
            $interval = setInterval(function () {
              $active_index = $slider.find('.active').index();
              if ($slides.length == $active_index + 1) $active_index = 0; // loop to start
              else $active_index += 1;

              moveToSlide($active_index);
            }, options.transition + options.interval);
          }
        });

        $this.on('sliderPause', function () {
          clearInterval($interval);
        });

        $this.on('sliderStart', function () {
          clearInterval($interval);
          $interval = setInterval(function () {
            $active_index = $slider.find('.active').index();
            if ($slides.length == $active_index + 1) $active_index = 0; // loop to start
            else $active_index += 1;

            moveToSlide($active_index);
          }, options.transition + options.interval);
        });

        $this.on('sliderNext', function () {
          $active_index = $slider.find('.active').index();
          moveToSlide($active_index + 1);
        });

        $this.on('sliderPrev', function () {
          $active_index = $slider.find('.active').index();
          moveToSlide($active_index - 1);
        });
      });
    },
    pause: function () {
      $(this).trigger('sliderPause');
    },
    start: function () {
      $(this).trigger('sliderStart');
    },
    next: function () {
      $(this).trigger('sliderNext');
    },
    prev: function () {
      $(this).trigger('sliderPrev');
    }
  };

  $.fn.slider = function (methodOrOptions) {
    if (methods[methodOrOptions]) {
      return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
      // Default to "init"
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + methodOrOptions + ' does not exist on jQuery.tooltip');
    }
  }; // Plugin end
})(jQuery);
;(function ($) {
  $(document).ready(function () {

    $(document).on('click.card', '.card', function (e) {
      if ($(this).find('> .card-reveal').length) {
        var $card = $(e.target).closest('.card');
        if ($card.data('initialOverflow') === undefined) {
          $card.data('initialOverflow', $card.css('overflow') === undefined ? '' : $card.css('overflow'));
        }
        if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
          // Make Reveal animate down and display none
          $(this).find('.card-reveal').velocity({ translateY: 0 }, {
            duration: 225,
            queue: false,
            easing: 'easeInOutQuad',
            complete: function () {
              $(this).css({ display: 'none' });
              $card.css('overflow', $card.data('initialOverflow'));
            }
          });
        } else if ($(e.target).is($('.card .activator')) || $(e.target).is($('.card .activator i'))) {
          $card.css('overflow', 'hidden');
          $(this).find('.card-reveal').css({ display: 'block' }).velocity("stop", false).velocity({ translateY: '-100%' }, { duration: 300, queue: false, easing: 'easeInOutQuad' });
        }
      }
    });
  });
})(jQuery);
;(function ($) {
  var materialChipsDefaults = {
    data: [],
    placeholder: '',
    secondaryPlaceholder: '',
    autocompleteOptions: {}
  };

  $(document).ready(function () {
    // Handle removal of static chips.
    $(document).on('click', '.chip .close', function (e) {
      var $chips = $(this).closest('.chips');
      if ($chips.attr('data-initialized')) {
        return;
      }
      $(this).closest('.chip').remove();
    });
  });

  $.fn.material_chip = function (options) {
    var self = this;
    this.$el = $(this);
    this.$document = $(document);
    this.SELS = {
      CHIPS: '.chips',
      CHIP: '.chip',
      INPUT: 'input',
      DELETE: '.material-icons',
      SELECTED_CHIP: '.selected'
    };

    if ('data' === options) {
      return this.$el.data('chips');
    }

    var curr_options = $.extend({}, materialChipsDefaults, options);
    self.hasAutocomplete = !$.isEmptyObject(curr_options.autocompleteOptions.data);

    // Initialize
    this.init = function () {
      var i = 0;
      var chips;
      self.$el.each(function () {
        var $chips = $(this);
        var chipId = Materialize.guid();
        self.chipId = chipId;

        if (!curr_options.data || !(curr_options.data instanceof Array)) {
          curr_options.data = [];
        }
        $chips.data('chips', curr_options.data);
        $chips.attr('data-index', i);
        $chips.attr('data-initialized', true);

        if (!$chips.hasClass(self.SELS.CHIPS)) {
          $chips.addClass('chips');
        }

        self.chips($chips, chipId);
        i++;
      });
    };

    this.handleEvents = function () {
      var SELS = self.SELS;

      self.$document.off('click.chips-focus', SELS.CHIPS).on('click.chips-focus', SELS.CHIPS, function (e) {
        $(e.target).find(SELS.INPUT).focus();
      });

      self.$document.off('click.chips-select', SELS.CHIP).on('click.chips-select', SELS.CHIP, function (e) {
        var $chip = $(e.target);
        if ($chip.length) {
          var wasSelected = $chip.hasClass('selected');
          var $chips = $chip.closest(SELS.CHIPS);
          $(SELS.CHIP).removeClass('selected');

          if (!wasSelected) {
            self.selectChip($chip.index(), $chips);
          }
        }
      });

      self.$document.off('keydown.chips').on('keydown.chips', function (e) {
        if ($(e.target).is('input, textarea')) {
          return;
        }

        // delete
        var $chip = self.$document.find(SELS.CHIP + SELS.SELECTED_CHIP);
        var $chips = $chip.closest(SELS.CHIPS);
        var length = $chip.siblings(SELS.CHIP).length;
        var index;

        if (!$chip.length) {
          return;
        }

        if (e.which === 8 || e.which === 46) {
          e.preventDefault();

          index = $chip.index();
          self.deleteChip(index, $chips);

          var selectIndex = null;
          if (index + 1 < length) {
            selectIndex = index;
          } else if (index === length || index + 1 === length) {
            selectIndex = length - 1;
          }

          if (selectIndex < 0) selectIndex = null;

          if (null !== selectIndex) {
            self.selectChip(selectIndex, $chips);
          }
          if (!length) $chips.find('input').focus();

          // left
        } else if (e.which === 37) {
          index = $chip.index() - 1;
          if (index < 0) {
            return;
          }
          $(SELS.CHIP).removeClass('selected');
          self.selectChip(index, $chips);

          // right
        } else if (e.which === 39) {
          index = $chip.index() + 1;
          $(SELS.CHIP).removeClass('selected');
          if (index > length) {
            $chips.find('input').focus();
            return;
          }
          self.selectChip(index, $chips);
        }
      });

      self.$document.off('focusin.chips', SELS.CHIPS + ' ' + SELS.INPUT).on('focusin.chips', SELS.CHIPS + ' ' + SELS.INPUT, function (e) {
        var $currChips = $(e.target).closest(SELS.CHIPS);
        $currChips.addClass('focus');
        $currChips.siblings('label, .prefix').addClass('active');
        $(SELS.CHIP).removeClass('selected');
      });

      self.$document.off('focusout.chips', SELS.CHIPS + ' ' + SELS.INPUT).on('focusout.chips', SELS.CHIPS + ' ' + SELS.INPUT, function (e) {
        var $currChips = $(e.target).closest(SELS.CHIPS);
        $currChips.removeClass('focus');

        // Remove active if empty
        if ($currChips.data('chips') === undefined || !$currChips.data('chips').length) {
          $currChips.siblings('label').removeClass('active');
        }
        $currChips.siblings('.prefix').removeClass('active');
      });

      self.$document.off('keydown.chips-add', SELS.CHIPS + ' ' + SELS.INPUT).on('keydown.chips-add', SELS.CHIPS + ' ' + SELS.INPUT, function (e) {
        var $target = $(e.target);
        var $chips = $target.closest(SELS.CHIPS);
        var chipsLength = $chips.children(SELS.CHIP).length;

        // enter
        if (13 === e.which) {
          // Override enter if autocompleting.
          if (self.hasAutocomplete && $chips.find('.autocomplete-content.dropdown-content').length && $chips.find('.autocomplete-content.dropdown-content').children().length) {
            return;
          }

          e.preventDefault();
          self.addChip({ tag: $target.val() }, $chips);
          $target.val('');
          return;
        }

        // delete or left
        if ((8 === e.keyCode || 37 === e.keyCode) && '' === $target.val() && chipsLength) {
          e.preventDefault();
          self.selectChip(chipsLength - 1, $chips);
          $target.blur();
          return;
        }
      });

      // Click on delete icon in chip.
      self.$document.off('click.chips-delete', SELS.CHIPS + ' ' + SELS.DELETE).on('click.chips-delete', SELS.CHIPS + ' ' + SELS.DELETE, function (e) {
        var $target = $(e.target);
        var $chips = $target.closest(SELS.CHIPS);
        var $chip = $target.closest(SELS.CHIP);
        e.stopPropagation();
        self.deleteChip($chip.index(), $chips);
        $chips.find('input').focus();
      });
    };

    this.chips = function ($chips, chipId) {
      $chips.empty();
      $chips.data('chips').forEach(function (elem) {
        $chips.append(self.renderChip(elem));
      });
      $chips.append($('<input id="' + chipId + '" class="input" placeholder="">'));
      self.setPlaceholder($chips);

      // Set for attribute for label
      var label = $chips.next('label');
      if (label.length) {
        label.attr('for', chipId);

        if ($chips.data('chips') !== undefined && $chips.data('chips').length) {
          label.addClass('active');
        }
      }

      // Setup autocomplete if needed.
      var input = $('#' + chipId);
      if (self.hasAutocomplete) {
        curr_options.autocompleteOptions.onAutocomplete = function (val) {
          self.addChip({ tag: val }, $chips);
          input.val('');
          input.focus();
        };
        input.autocomplete(curr_options.autocompleteOptions);
      }
    };

    /**
     * Render chip jQuery element.
     * @param {Object} elem
     * @return {jQuery}
     */
    this.renderChip = function (elem) {
      if (!elem.tag) return;

      var $renderedChip = $('<div class="chip"></div>');
      $renderedChip.text(elem.tag);
      if (elem.image) {
        $renderedChip.prepend($('<img />').attr('src', elem.image));
      }
      $renderedChip.append($('<i class="material-icons close">close</i>'));
      return $renderedChip;
    };

    this.setPlaceholder = function ($chips) {
      if ($chips.data('chips') !== undefined && !$chips.data('chips').length && curr_options.placeholder) {
        $chips.find('input').prop('placeholder', curr_options.placeholder);
      } else if (($chips.data('chips') === undefined || !!$chips.data('chips').length) && curr_options.secondaryPlaceholder) {
        $chips.find('input').prop('placeholder', curr_options.secondaryPlaceholder);
      }
    };

    this.isValid = function ($chips, elem) {
      var chips = $chips.data('chips');
      var exists = false;
      for (var i = 0; i < chips.length; i++) {
        if (chips[i].tag === elem.tag) {
          exists = true;
          return;
        }
      }
      return '' !== elem.tag && !exists;
    };

    this.addChip = function (elem, $chips) {
      if (!self.isValid($chips, elem)) {
        return;
      }
      var $renderedChip = self.renderChip(elem);
      var newData = [];
      var oldData = $chips.data('chips');
      for (var i = 0; i < oldData.length; i++) {
        newData.push(oldData[i]);
      }
      newData.push(elem);

      $chips.data('chips', newData);
      $renderedChip.insertBefore($chips.find('input'));
      $chips.trigger('chip.add', elem);
      self.setPlaceholder($chips);
    };

    this.deleteChip = function (chipIndex, $chips) {
      var chip = $chips.data('chips')[chipIndex];
      $chips.find('.chip').eq(chipIndex).remove();

      var newData = [];
      var oldData = $chips.data('chips');
      for (var i = 0; i < oldData.length; i++) {
        if (i !== chipIndex) {
          newData.push(oldData[i]);
        }
      }

      $chips.data('chips', newData);
      $chips.trigger('chip.delete', chip);
      self.setPlaceholder($chips);
    };

    this.selectChip = function (chipIndex, $chips) {
      var $chip = $chips.find('.chip').eq(chipIndex);
      if ($chip && false === $chip.hasClass('selected')) {
        $chip.addClass('selected');
        $chips.trigger('chip.select', $chips.data('chips')[chipIndex]);
      }
    };

    this.getChipsElement = function (index, $chips) {
      return $chips.eq(index);
    };

    // init
    this.init();

    this.handleEvents();
  };
})(jQuery);
;(function ($) {
  $.fn.pushpin = function (options) {
    // Defaults
    var defaults = {
      top: 0,
      bottom: Infinity,
      offset: 0
    };

    // Remove pushpin event and classes
    if (options === "remove") {
      this.each(function () {
        if (id = $(this).data('pushpin-id')) {
          $(window).off('scroll.' + id);
          $(this).removeData('pushpin-id').removeClass('pin-top pinned pin-bottom').removeAttr('style');
        }
      });
      return false;
    }

    options = $.extend(defaults, options);

    $index = 0;
    return this.each(function () {
      var $uniqueId = Materialize.guid(),
          $this = $(this),
          $original_offset = $(this).offset().top;

      function removePinClasses(object) {
        object.removeClass('pin-top');
        object.removeClass('pinned');
        object.removeClass('pin-bottom');
      }

      function updateElements(objects, scrolled) {
        objects.each(function () {
          // Add position fixed (because its between top and bottom)
          if (options.top <= scrolled && options.bottom >= scrolled && !$(this).hasClass('pinned')) {
            removePinClasses($(this));
            $(this).css('top', options.offset);
            $(this).addClass('pinned');
          }

          // Add pin-top (when scrolled position is above top)
          if (scrolled < options.top && !$(this).hasClass('pin-top')) {
            removePinClasses($(this));
            $(this).css('top', 0);
            $(this).addClass('pin-top');
          }

          // Add pin-bottom (when scrolled position is below bottom)
          if (scrolled > options.bottom && !$(this).hasClass('pin-bottom')) {
            removePinClasses($(this));
            $(this).addClass('pin-bottom');
            $(this).css('top', options.bottom - $original_offset);
          }
        });
      }

      $(this).data('pushpin-id', $uniqueId);
      updateElements($this, $(window).scrollTop());
      $(window).on('scroll.' + $uniqueId, function () {
        var $scrolled = $(window).scrollTop() + options.offset;
        updateElements($this, $scrolled);
      });
    });
  };
})(jQuery);;(function ($) {
  $(document).ready(function () {

    // jQuery reverse
    $.fn.reverse = [].reverse;

    // Hover behaviour: make sure this doesn't work on .click-to-toggle FABs!
    $(document).on('mouseenter.fixedActionBtn', '.fixed-action-btn:not(.click-to-toggle):not(.toolbar)', function (e) {
      var $this = $(this);
      openFABMenu($this);
    });
    $(document).on('mouseleave.fixedActionBtn', '.fixed-action-btn:not(.click-to-toggle):not(.toolbar)', function (e) {
      var $this = $(this);
      closeFABMenu($this);
    });

    // Toggle-on-click behaviour.
    $(document).on('click.fabClickToggle', '.fixed-action-btn.click-to-toggle > a', function (e) {
      var $this = $(this);
      var $menu = $this.parent();
      if ($menu.hasClass('active')) {
        closeFABMenu($menu);
      } else {
        openFABMenu($menu);
      }
    });

    // Toolbar transition behaviour.
    $(document).on('click.fabToolbar', '.fixed-action-btn.toolbar > a', function (e) {
      var $this = $(this);
      var $menu = $this.parent();
      FABtoToolbar($menu);
    });
  });

  $.fn.extend({
    openFAB: function () {
      openFABMenu($(this));
    },
    closeFAB: function () {
      closeFABMenu($(this));
    },
    openToolbar: function () {
      FABtoToolbar($(this));
    },
    closeToolbar: function () {
      toolbarToFAB($(this));
    }
  });

  var openFABMenu = function (btn) {
    var $this = btn;
    if ($this.hasClass('active') === false) {

      // Get direction option
      var horizontal = $this.hasClass('horizontal');
      var offsetY, offsetX;

      if (horizontal === true) {
        offsetX = 40;
      } else {
        offsetY = 40;
      }

      $this.addClass('active');
      $this.find('ul .btn-floating').velocity({ scaleY: ".4", scaleX: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px' }, { duration: 0 });

      var time = 0;
      $this.find('ul .btn-floating').reverse().each(function () {
        $(this).velocity({ opacity: "1", scaleX: "1", scaleY: "1", translateY: "0", translateX: '0' }, { duration: 80, delay: time });
        time += 40;
      });
    }
  };

  var closeFABMenu = function (btn) {
    var $this = btn;
    // Get direction option
    var horizontal = $this.hasClass('horizontal');
    var offsetY, offsetX;

    if (horizontal === true) {
      offsetX = 40;
    } else {
      offsetY = 40;
    }

    $this.removeClass('active');
    var time = 0;
    $this.find('ul .btn-floating').velocity("stop", true);
    $this.find('ul .btn-floating').velocity({ opacity: "0", scaleX: ".4", scaleY: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px' }, { duration: 80 });
  };

  /**
   * Transform FAB into toolbar
   * @param  {Object}  object jQuery object
   */
  var FABtoToolbar = function (btn) {
    if (btn.attr('data-open') === "true") {
      return;
    }

    var offsetX, offsetY, scaleFactor;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var btnRect = btn[0].getBoundingClientRect();
    var anchor = btn.find('> a').first();
    var menu = btn.find('> ul').first();
    var backdrop = $('<div class="fab-backdrop"></div>');
    var fabColor = anchor.css('background-color');
    anchor.append(backdrop);

    offsetX = btnRect.left - windowWidth / 2 + btnRect.width / 2;
    offsetY = windowHeight - btnRect.bottom;
    scaleFactor = windowWidth / backdrop.width();
    btn.attr('data-origin-bottom', btnRect.bottom);
    btn.attr('data-origin-left', btnRect.left);
    btn.attr('data-origin-width', btnRect.width);

    // Set initial state
    btn.addClass('active');
    btn.attr('data-open', true);
    btn.css({
      'text-align': 'center',
      width: '100%',
      bottom: 0,
      left: 0,
      transform: 'translateX(' + offsetX + 'px)',
      transition: 'none'
    });
    anchor.css({
      transform: 'translateY(' + -offsetY + 'px)',
      transition: 'none'
    });
    backdrop.css({
      'background-color': fabColor
    });

    setTimeout(function () {
      btn.css({
        transform: '',
        transition: 'transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s'
      });
      anchor.css({
        overflow: 'visible',
        transform: '',
        transition: 'transform .2s'
      });

      setTimeout(function () {
        btn.css({
          overflow: 'hidden',
          'background-color': fabColor
        });
        backdrop.css({
          transform: 'scale(' + scaleFactor + ')',
          transition: 'transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)'
        });
        menu.find('> li > a').css({
          opacity: 1
        });

        // Scroll to close.
        $(window).on('scroll.fabToolbarClose', function () {
          toolbarToFAB(btn);
          $(window).off('scroll.fabToolbarClose');
          $(document).off('click.fabToolbarClose');
        });

        $(document).on('click.fabToolbarClose', function (e) {
          if (!$(e.target).closest(menu).length) {
            toolbarToFAB(btn);
            $(window).off('scroll.fabToolbarClose');
            $(document).off('click.fabToolbarClose');
          }
        });
      }, 100);
    }, 0);
  };

  /**
   * Transform toolbar back into FAB
   * @param  {Object}  object jQuery object
   */
  var toolbarToFAB = function (btn) {
    if (btn.attr('data-open') !== "true") {
      return;
    }

    var offsetX, offsetY, scaleFactor;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var btnWidth = btn.attr('data-origin-width');
    var btnBottom = btn.attr('data-origin-bottom');
    var btnLeft = btn.attr('data-origin-left');
    var anchor = btn.find('> .btn-floating').first();
    var menu = btn.find('> ul').first();
    var backdrop = btn.find('.fab-backdrop');
    var fabColor = anchor.css('background-color');

    offsetX = btnLeft - windowWidth / 2 + btnWidth / 2;
    offsetY = windowHeight - btnBottom;
    scaleFactor = windowWidth / backdrop.width();

    // Hide backdrop
    btn.removeClass('active');
    btn.attr('data-open', false);
    btn.css({
      'background-color': 'transparent',
      transition: 'none'
    });
    anchor.css({
      transition: 'none'
    });
    backdrop.css({
      transform: 'scale(0)',
      'background-color': fabColor
    });
    menu.find('> li > a').css({
      opacity: ''
    });

    setTimeout(function () {
      backdrop.remove();

      // Set initial state.
      btn.css({
        'text-align': '',
        width: '',
        bottom: '',
        left: '',
        overflow: '',
        'background-color': '',
        transform: 'translate3d(' + -offsetX + 'px,0,0)'
      });
      anchor.css({
        overflow: '',
        transform: 'translate3d(0,' + offsetY + 'px,0)'
      });

      setTimeout(function () {
        btn.css({
          transform: 'translate3d(0,0,0)',
          transition: 'transform .2s'
        });
        anchor.css({
          transform: 'translate3d(0,0,0)',
          transition: 'transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)'
        });
      }, 20);
    }, 200);
  };
})(jQuery);
;(function ($) {
  // Image transition function
  Materialize.fadeInImage = function (selectorOrEl) {
    var element;
    if (typeof selectorOrEl === 'string') {
      element = $(selectorOrEl);
    } else if (typeof selectorOrEl === 'object') {
      element = selectorOrEl;
    } else {
      return;
    }
    element.css({ opacity: 0 });
    $(element).velocity({ opacity: 1 }, {
      duration: 650,
      queue: false,
      easing: 'easeOutSine'
    });
    $(element).velocity({ opacity: 1 }, {
      duration: 1300,
      queue: false,
      easing: 'swing',
      step: function (now, fx) {
        fx.start = 100;
        var grayscale_setting = now / 100;
        var brightness_setting = 150 - (100 - now) / 1.75;

        if (brightness_setting < 100) {
          brightness_setting = 100;
        }
        if (now >= 0) {
          $(this).css({
            "-webkit-filter": "grayscale(" + grayscale_setting + ")" + "brightness(" + brightness_setting + "%)",
            "filter": "grayscale(" + grayscale_setting + ")" + "brightness(" + brightness_setting + "%)"
          });
        }
      }
    });
  };

  // Horizontal staggered list
  Materialize.showStaggeredList = function (selectorOrEl) {
    var element;
    if (typeof selectorOrEl === 'string') {
      element = $(selectorOrEl);
    } else if (typeof selectorOrEl === 'object') {
      element = selectorOrEl;
    } else {
      return;
    }
    var time = 0;
    element.find('li').velocity({ translateX: "-100px" }, { duration: 0 });

    element.find('li').each(function () {
      $(this).velocity({ opacity: "1", translateX: "0" }, { duration: 800, delay: time, easing: [60, 10] });
      time += 120;
    });
  };

  $(document).ready(function () {
    // Hardcoded .staggered-list scrollFire
    // var staggeredListOptions = [];
    // $('ul.staggered-list').each(function (i) {

    //   var label = 'scrollFire-' + i;
    //   $(this).addClass(label);
    //   staggeredListOptions.push(
    //     {selector: 'ul.staggered-list.' + label,
    //      offset: 200,
    //      callback: 'showStaggeredList("ul.staggered-list.' + label + '")'});
    // });
    // scrollFire(staggeredListOptions);

    // HammerJS, Swipe navigation

    // Touch Event
    var swipeLeft = false;
    var swipeRight = false;

    // Dismissible Collections
    $('.dismissable').each(function () {
      $(this).hammer({
        prevent_default: false
      }).on('pan', function (e) {
        if (e.gesture.pointerType === "touch") {
          var $this = $(this);
          var direction = e.gesture.direction;
          var x = e.gesture.deltaX;
          var velocityX = e.gesture.velocityX;

          $this.velocity({ translateX: x
          }, { duration: 50, queue: false, easing: 'easeOutQuad' });

          // Swipe Left
          if (direction === 4 && (x > $this.innerWidth() / 2 || velocityX < -0.75)) {
            swipeLeft = true;
          }

          // Swipe Right
          if (direction === 2 && (x < -1 * $this.innerWidth() / 2 || velocityX > 0.75)) {
            swipeRight = true;
          }
        }
      }).on('panend', function (e) {
        // Reset if collection is moved back into original position
        if (Math.abs(e.gesture.deltaX) < $(this).innerWidth() / 2) {
          swipeRight = false;
          swipeLeft = false;
        }

        if (e.gesture.pointerType === "touch") {
          var $this = $(this);
          if (swipeLeft || swipeRight) {
            var fullWidth;
            if (swipeLeft) {
              fullWidth = $this.innerWidth();
            } else {
              fullWidth = -1 * $this.innerWidth();
            }

            $this.velocity({ translateX: fullWidth
            }, { duration: 100, queue: false, easing: 'easeOutQuad', complete: function () {
                $this.css('border', 'none');
                $this.velocity({ height: 0, padding: 0
                }, { duration: 200, queue: false, easing: 'easeOutQuad', complete: function () {
                    $this.remove();
                  }
                });
              }
            });
          } else {
            $this.velocity({ translateX: 0
            }, { duration: 100, queue: false, easing: 'easeOutQuad' });
          }
          swipeLeft = false;
          swipeRight = false;
        }
      });
    });

    // time = 0
    // // Vertical Staggered list
    // $('ul.staggered-list.vertical li').velocity(
    //     { translateY: "100px"},
    //     { duration: 0 });

    // $('ul.staggered-list.vertical li').each(function() {
    //   $(this).velocity(
    //     { opacity: "1", translateY: "0"},
    //     { duration: 800, delay: time, easing: [60, 25] });
    //   time += 120;
    // });

    // // Fade in and Scale
    // $('.fade-in.scale').velocity(
    //     { scaleX: .4, scaleY: .4, translateX: -600},
    //     { duration: 0});
    // $('.fade-in').each(function() {
    //   $(this).velocity(
    //     { opacity: "1", scaleX: 1, scaleY: 1, translateX: 0},
    //     { duration: 800, easing: [60, 10] });
    // });
  });
})(jQuery);
;(function ($) {

  var scrollFireEventsHandled = false;

  // Input: Array of JSON objects {selector, offset, callback}
  Materialize.scrollFire = function (options) {
    var onScroll = function () {
      var windowScroll = window.pageYOffset + window.innerHeight;

      for (var i = 0; i < options.length; i++) {
        // Get options from each line
        var value = options[i];
        var selector = value.selector,
            offset = value.offset,
            callback = value.callback;

        var currentElement = document.querySelector(selector);
        if (currentElement !== null) {
          var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset;

          if (windowScroll > elementOffset + offset) {
            if (value.done !== true) {
              if (typeof callback === 'function') {
                callback.call(this, currentElement);
              } else if (typeof callback === 'string') {
                var callbackFunc = new Function(callback);
                callbackFunc(currentElement);
              }
              value.done = true;
            }
          }
        }
      }
    };

    var throttledScroll = Materialize.throttle(function () {
      onScroll();
    }, options.throttle || 100);

    if (!scrollFireEventsHandled) {
      window.addEventListener("scroll", throttledScroll);
      window.addEventListener("resize", throttledScroll);
      scrollFireEventsHandled = true;
    }

    // perform a scan once, after current execution context, and after dom is ready
    setTimeout(throttledScroll, 0);
  };
})(jQuery);
; /*!
  * pickadate.js v3.5.0, 2014/04/13
  * By Amsul, http://amsul.ca
  * Hosted on http://amsul.github.io/pickadate.js
  * Licensed under MIT
  */

(function (factory) {

  Materialize.Picker = factory(jQuery);
})(function ($) {

  var $window = $(window);
  var $document = $(document);
  var $html = $(document.documentElement);

  /**
   * The picker constructor that creates a blank picker.
   */
  function PickerConstructor(ELEMENT, NAME, COMPONENT, OPTIONS) {

    // If there’s no element, return the picker constructor.
    if (!ELEMENT) return PickerConstructor;

    var IS_DEFAULT_THEME = false,


    // The state of the picker.
    STATE = {
      id: ELEMENT.id || 'P' + Math.abs(~~(Math.random() * new Date()))
    },


    // Merge the defaults and options passed.
    SETTINGS = COMPONENT ? $.extend(true, {}, COMPONENT.defaults, OPTIONS) : OPTIONS || {},


    // Merge the default classes with the settings classes.
    CLASSES = $.extend({}, PickerConstructor.klasses(), SETTINGS.klass),


    // The element node wrapper into a jQuery object.
    $ELEMENT = $(ELEMENT),


    // Pseudo picker constructor.
    PickerInstance = function () {
      return this.start();
    },


    // The picker prototype.
    P = PickerInstance.prototype = {

      constructor: PickerInstance,

      $node: $ELEMENT,

      /**
       * Initialize everything
       */
      start: function () {

        // If it’s already started, do nothing.
        if (STATE && STATE.start) return P;

        // Update the picker states.
        STATE.methods = {};
        STATE.start = true;
        STATE.open = false;
        STATE.type = ELEMENT.type;

        // Confirm focus state, convert into text input to remove UA stylings,
        // and set as readonly to prevent keyboard popup.
        ELEMENT.autofocus = ELEMENT == getActiveElement();
        ELEMENT.readOnly = !SETTINGS.editable;
        ELEMENT.id = ELEMENT.id || STATE.id;
        if (ELEMENT.type != 'text') {
          ELEMENT.type = 'text';
        }

        // Create a new picker component with the settings.
        P.component = new COMPONENT(P, SETTINGS);

        // Create the picker root with a holder and then prepare it.
        P.$root = $(PickerConstructor._.node('div', createWrappedComponent(), CLASSES.picker, 'id="' + ELEMENT.id + '_root" tabindex="0"'));
        prepareElementRoot();

        // If there’s a format for the hidden input element, create the element.
        if (SETTINGS.formatSubmit) {
          prepareElementHidden();
        }

        // Prepare the input element.
        prepareElement();

        // Insert the root as specified in the settings.
        if (SETTINGS.container) $(SETTINGS.container).append(P.$root);else $ELEMENT.before(P.$root);

        // Bind the default component and settings events.
        P.on({
          start: P.component.onStart,
          render: P.component.onRender,
          stop: P.component.onStop,
          open: P.component.onOpen,
          close: P.component.onClose,
          set: P.component.onSet
        }).on({
          start: SETTINGS.onStart,
          render: SETTINGS.onRender,
          stop: SETTINGS.onStop,
          open: SETTINGS.onOpen,
          close: SETTINGS.onClose,
          set: SETTINGS.onSet
        });

        // Once we’re all set, check the theme in use.
        IS_DEFAULT_THEME = isUsingDefaultTheme(P.$root.children()[0]);

        // If the element has autofocus, open the picker.
        if (ELEMENT.autofocus) {
          P.open();
        }

        // Trigger queued the “start” and “render” events.
        return P.trigger('start').trigger('render');
      }, //start


      /**
       * Render a new picker
       */
      render: function (entireComponent) {

        // Insert a new component holder in the root or box.
        if (entireComponent) P.$root.html(createWrappedComponent());else P.$root.find('.' + CLASSES.box).html(P.component.nodes(STATE.open));

        // Trigger the queued “render” events.
        return P.trigger('render');
      }, //render


      /**
       * Destroy everything
       */
      stop: function () {

        // If it’s already stopped, do nothing.
        if (!STATE.start) return P;

        // Then close the picker.
        P.close();

        // Remove the hidden field.
        if (P._hidden) {
          P._hidden.parentNode.removeChild(P._hidden);
        }

        // Remove the root.
        P.$root.remove();

        // Remove the input class, remove the stored data, and unbind
        // the events (after a tick for IE - see `P.close`).
        $ELEMENT.removeClass(CLASSES.input).removeData(NAME);
        setTimeout(function () {
          $ELEMENT.off('.' + STATE.id);
        }, 0);

        // Restore the element state
        ELEMENT.type = STATE.type;
        ELEMENT.readOnly = false;

        // Trigger the queued “stop” events.
        P.trigger('stop');

        // Reset the picker states.
        STATE.methods = {};
        STATE.start = false;

        return P;
      }, //stop


      /**
       * Open up the picker
       */
      open: function (dontGiveFocus) {

        // If it’s already open, do nothing.
        if (STATE.open) return P;

        // Add the “active” class.
        $ELEMENT.addClass(CLASSES.active);
        aria(ELEMENT, 'expanded', true);

        // * A Firefox bug, when `html` has `overflow:hidden`, results in
        //   killing transitions :(. So add the “opened” state on the next tick.
        //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
        setTimeout(function () {

          // Add the “opened” class to the picker root.
          P.$root.addClass(CLASSES.opened);
          aria(P.$root[0], 'hidden', false);
        }, 0);

        // If we have to give focus, bind the element and doc events.
        if (dontGiveFocus !== false) {

          // Set it as open.
          STATE.open = true;

          // Prevent the page from scrolling.
          if (IS_DEFAULT_THEME) {
            $html.css('overflow', 'hidden').css('padding-right', '+=' + getScrollbarWidth());
          }

          // Pass focus to the root element’s jQuery object.
          // * Workaround for iOS8 to bring the picker’s root into view.
          P.$root.eq(0).focus();

          // Bind the document events.
          $document.on('click.' + STATE.id + ' focusin.' + STATE.id, function (event) {

            var target = event.target;

            // If the target of the event is not the element, close the picker picker.
            // * Don’t worry about clicks or focusins on the root because those don’t bubble up.
            //   Also, for Firefox, a click on an `option` element bubbles up directly
            //   to the doc. So make sure the target wasn't the doc.
            // * In Firefox stopPropagation() doesn’t prevent right-click events from bubbling,
            //   which causes the picker to unexpectedly close when right-clicking it. So make
            //   sure the event wasn’t a right-click.
            if (target != ELEMENT && target != document && event.which != 3) {

              // If the target was the holder that covers the screen,
              // keep the element focused to maintain tabindex.
              P.close(target === P.$root.children()[0]);
            }
          }).on('keydown.' + STATE.id, function (event) {

            var
            // Get the keycode.
            keycode = event.keyCode,


            // Translate that to a selection change.
            keycodeToMove = P.component.key[keycode],


            // Grab the target.
            target = event.target;

            // On escape, close the picker and give focus.
            if (keycode == 27) {
              P.close(true);
            }

            // Check if there is a key movement or “enter” keypress on the element.
            else if (target == P.$root[0] && (keycodeToMove || keycode == 13)) {

                // Prevent the default action to stop page movement.
                event.preventDefault();

                // Trigger the key movement action.
                if (keycodeToMove) {
                  PickerConstructor._.trigger(P.component.key.go, P, [PickerConstructor._.trigger(keycodeToMove)]);
                }

                // On “enter”, if the highlighted item isn’t disabled, set the value and close.
                else if (!P.$root.find('.' + CLASSES.highlighted).hasClass(CLASSES.disabled)) {
                    P.set('select', P.component.item.highlight);
                    if (SETTINGS.closeOnSelect) {
                      P.close(true);
                    }
                  }
              }

              // If the target is within the root and “enter” is pressed,
              // prevent the default action and trigger a click on the target instead.
              else if ($.contains(P.$root[0], target) && keycode == 13) {
                  event.preventDefault();
                  target.click();
                }
          });
        }

        // Trigger the queued “open” events.
        return P.trigger('open');
      }, //open


      /**
       * Close the picker
       */
      close: function (giveFocus) {

        // If we need to give focus, do it before changing states.
        if (giveFocus) {
          // ....ah yes! It would’ve been incomplete without a crazy workaround for IE :|
          // The focus is triggered *after* the close has completed - causing it
          // to open again. So unbind and rebind the event at the next tick.
          P.$root.off('focus.toOpen').eq(0).focus();
          setTimeout(function () {
            P.$root.on('focus.toOpen', handleFocusToOpenEvent);
          }, 0);
        }

        // Remove the “active” class.
        $ELEMENT.removeClass(CLASSES.active);
        aria(ELEMENT, 'expanded', false);

        // * A Firefox bug, when `html` has `overflow:hidden`, results in
        //   killing transitions :(. So remove the “opened” state on the next tick.
        //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
        setTimeout(function () {

          // Remove the “opened” and “focused” class from the picker root.
          P.$root.removeClass(CLASSES.opened + ' ' + CLASSES.focused);
          aria(P.$root[0], 'hidden', true);
        }, 0);

        // If it’s already closed, do nothing more.
        if (!STATE.open) return P;

        // Set it as closed.
        STATE.open = false;

        // Allow the page to scroll.
        if (IS_DEFAULT_THEME) {
          $html.css('overflow', '').css('padding-right', '-=' + getScrollbarWidth());
        }

        // Unbind the document events.
        $document.off('.' + STATE.id);

        // Trigger the queued “close” events.
        return P.trigger('close');
      }, //close


      /**
       * Clear the values
       */
      clear: function (options) {
        return P.set('clear', null, options);
      }, //clear


      /**
       * Set something
       */
      set: function (thing, value, options) {

        var thingItem,
            thingValue,
            thingIsObject = $.isPlainObject(thing),
            thingObject = thingIsObject ? thing : {};

        // Make sure we have usable options.
        options = thingIsObject && $.isPlainObject(value) ? value : options || {};

        if (thing) {

          // If the thing isn’t an object, make it one.
          if (!thingIsObject) {
            thingObject[thing] = value;
          }

          // Go through the things of items to set.
          for (thingItem in thingObject) {

            // Grab the value of the thing.
            thingValue = thingObject[thingItem];

            // First, if the item exists and there’s a value, set it.
            if (thingItem in P.component.item) {
              if (thingValue === undefined) thingValue = null;
              P.component.set(thingItem, thingValue, options);
            }

            // Then, check to update the element value and broadcast a change.
            if (thingItem == 'select' || thingItem == 'clear') {
              $ELEMENT.val(thingItem == 'clear' ? '' : P.get(thingItem, SETTINGS.format)).trigger('change');
            }
          }

          // Render a new picker.
          P.render();
        }

        // When the method isn’t muted, trigger queued “set” events and pass the `thingObject`.
        return options.muted ? P : P.trigger('set', thingObject);
      }, //set


      /**
       * Get something
       */
      get: function (thing, format) {

        // Make sure there’s something to get.
        thing = thing || 'value';

        // If a picker state exists, return that.
        if (STATE[thing] != null) {
          return STATE[thing];
        }

        // Return the submission value, if that.
        if (thing == 'valueSubmit') {
          if (P._hidden) {
            return P._hidden.value;
          }
          thing = 'value';
        }

        // Return the value, if that.
        if (thing == 'value') {
          return ELEMENT.value;
        }

        // Check if a component item exists, return that.
        if (thing in P.component.item) {
          if (typeof format == 'string') {
            var thingValue = P.component.get(thing);
            return thingValue ? PickerConstructor._.trigger(P.component.formats.toString, P.component, [format, thingValue]) : '';
          }
          return P.component.get(thing);
        }
      }, //get


      /**
       * Bind events on the things.
       */
      on: function (thing, method, internal) {

        var thingName,
            thingMethod,
            thingIsObject = $.isPlainObject(thing),
            thingObject = thingIsObject ? thing : {};

        if (thing) {

          // If the thing isn’t an object, make it one.
          if (!thingIsObject) {
            thingObject[thing] = method;
          }

          // Go through the things to bind to.
          for (thingName in thingObject) {

            // Grab the method of the thing.
            thingMethod = thingObject[thingName];

            // If it was an internal binding, prefix it.
            if (internal) {
              thingName = '_' + thingName;
            }

            // Make sure the thing methods collection exists.
            STATE.methods[thingName] = STATE.methods[thingName] || [];

            // Add the method to the relative method collection.
            STATE.methods[thingName].push(thingMethod);
          }
        }

        return P;
      }, //on


      /**
       * Unbind events on the things.
       */
      off: function () {
        var i,
            thingName,
            names = arguments;
        for (i = 0, namesCount = names.length; i < namesCount; i += 1) {
          thingName = names[i];
          if (thingName in STATE.methods) {
            delete STATE.methods[thingName];
          }
        }
        return P;
      },

      /**
       * Fire off method events.
       */
      trigger: function (name, data) {
        var _trigger = function (name) {
          var methodList = STATE.methods[name];
          if (methodList) {
            methodList.map(function (method) {
              PickerConstructor._.trigger(method, P, [data]);
            });
          }
        };
        _trigger('_' + name);
        _trigger(name);
        return P;
      } //trigger
      //PickerInstance.prototype


      /**
       * Wrap the picker holder components together.
       */
    };function createWrappedComponent() {

      // Create a picker wrapper holder
      return PickerConstructor._.node('div',

      // Create a picker wrapper node
      PickerConstructor._.node('div',

      // Create a picker frame
      PickerConstructor._.node('div',

      // Create a picker box node
      PickerConstructor._.node('div',

      // Create the components nodes.
      P.component.nodes(STATE.open),

      // The picker box class
      CLASSES.box),

      // Picker wrap class
      CLASSES.wrap),

      // Picker frame class
      CLASSES.frame),

      // Picker holder class
      CLASSES.holder); //endreturn
    } //createWrappedComponent


    /**
     * Prepare the input element with all bindings.
     */
    function prepareElement() {

      $ELEMENT.

      // Store the picker data by component name.
      data(NAME, P).

      // Add the “input” class name.
      addClass(CLASSES.input).

      // Remove the tabindex.
      attr('tabindex', -1).

      // If there’s a `data-value`, update the value of the element.
      val($ELEMENT.data('value') ? P.get('select', SETTINGS.format) : ELEMENT.value);

      // Only bind keydown events if the element isn’t editable.
      if (!SETTINGS.editable) {

        $ELEMENT.

        // On focus/click, focus onto the root to open it up.
        on('focus.' + STATE.id + ' click.' + STATE.id, function (event) {
          event.preventDefault();
          P.$root.eq(0).focus();
        }).

        // Handle keyboard event based on the picker being opened or not.
        on('keydown.' + STATE.id, handleKeydownEvent);
      }

      // Update the aria attributes.
      aria(ELEMENT, {
        haspopup: true,
        expanded: false,
        readonly: false,
        owns: ELEMENT.id + '_root'
      });
    }

    /**
     * Prepare the root picker element with all bindings.
     */
    function prepareElementRoot() {

      P.$root.on({

        // For iOS8.
        keydown: handleKeydownEvent,

        // When something within the root is focused, stop from bubbling
        // to the doc and remove the “focused” state from the root.
        focusin: function (event) {
          P.$root.removeClass(CLASSES.focused);
          event.stopPropagation();
        },

        // When something within the root holder is clicked, stop it
        // from bubbling to the doc.
        'mousedown click': function (event) {

          var target = event.target;

          // Make sure the target isn’t the root holder so it can bubble up.
          if (target != P.$root.children()[0]) {

            event.stopPropagation();

            // * For mousedown events, cancel the default action in order to
            //   prevent cases where focus is shifted onto external elements
            //   when using things like jQuery mobile or MagnificPopup (ref: #249 & #120).
            //   Also, for Firefox, don’t prevent action on the `option` element.
            if (event.type == 'mousedown' && !$(target).is('input, select, textarea, button, option')) {

              event.preventDefault();

              // Re-focus onto the root so that users can click away
              // from elements focused within the picker.
              P.$root.eq(0).focus();
            }
          }
        }
      }).

      // Add/remove the “target” class on focus and blur.
      on({
        focus: function () {
          $ELEMENT.addClass(CLASSES.target);
        },
        blur: function () {
          $ELEMENT.removeClass(CLASSES.target);
        }
      }).

      // Open the picker and adjust the root “focused” state
      on('focus.toOpen', handleFocusToOpenEvent).

      // If there’s a click on an actionable element, carry out the actions.
      on('click', '[data-pick], [data-nav], [data-clear], [data-close]', function () {

        var $target = $(this),
            targetData = $target.data(),
            targetDisabled = $target.hasClass(CLASSES.navDisabled) || $target.hasClass(CLASSES.disabled),


        // * For IE, non-focusable elements can be active elements as well
        //   (http://stackoverflow.com/a/2684561).
        activeElement = getActiveElement();
        activeElement = activeElement && (activeElement.type || activeElement.href) && activeElement;

        // If it’s disabled or nothing inside is actively focused, re-focus the element.
        if (targetDisabled || activeElement && !$.contains(P.$root[0], activeElement)) {
          P.$root.eq(0).focus();
        }

        // If something is superficially changed, update the `highlight` based on the `nav`.
        if (!targetDisabled && targetData.nav) {
          P.set('highlight', P.component.item.highlight, { nav: targetData.nav });
        }

        // If something is picked, set `select` then close with focus.
        else if (!targetDisabled && 'pick' in targetData) {
            P.set('select', targetData.pick);
            if (SETTINGS.closeOnSelect) {
              P.close(true);
            }
          }

          // If a “clear” button is pressed, empty the values and close with focus.
          else if (targetData.clear) {
              P.clear();
              if (SETTINGS.closeOnSelect) {
                P.close(true);
              }
            } else if (targetData.close) {
              P.close(true);
            }
      }); //P.$root

      aria(P.$root[0], 'hidden', true);
    }

    /**
     * Prepare the hidden input element along with all bindings.
     */
    function prepareElementHidden() {

      var name;

      if (SETTINGS.hiddenName === true) {
        name = ELEMENT.name;
        ELEMENT.name = '';
      } else {
        name = [typeof SETTINGS.hiddenPrefix == 'string' ? SETTINGS.hiddenPrefix : '', typeof SETTINGS.hiddenSuffix == 'string' ? SETTINGS.hiddenSuffix : '_submit'];
        name = name[0] + ELEMENT.name + name[1];
      }

      P._hidden = $('<input ' + 'type=hidden ' +

      // Create the name using the original input’s with a prefix and suffix.
      'name="' + name + '"' + (

      // If the element has a value, set the hidden value as well.
      $ELEMENT.data('value') || ELEMENT.value ? ' value="' + P.get('select', SETTINGS.formatSubmit) + '"' : '') + '>')[0];

      $ELEMENT.

      // If the value changes, update the hidden input with the correct format.
      on('change.' + STATE.id, function () {
        P._hidden.value = ELEMENT.value ? P.get('select', SETTINGS.formatSubmit) : '';
      });

      // Insert the hidden input as specified in the settings.
      if (SETTINGS.container) $(SETTINGS.container).append(P._hidden);else $ELEMENT.before(P._hidden);
    }

    // For iOS8.
    function handleKeydownEvent(event) {

      var keycode = event.keyCode,


      // Check if one of the delete keys was pressed.
      isKeycodeDelete = /^(8|46)$/.test(keycode);

      // For some reason IE clears the input value on “escape”.
      if (keycode == 27) {
        P.close();
        return false;
      }

      // Check if `space` or `delete` was pressed or the picker is closed with a key movement.
      if (keycode == 32 || isKeycodeDelete || !STATE.open && P.component.key[keycode]) {

        // Prevent it from moving the page and bubbling to doc.
        event.preventDefault();
        event.stopPropagation();

        // If `delete` was pressed, clear the values and close the picker.
        // Otherwise open the picker.
        if (isKeycodeDelete) {
          P.clear().close();
        } else {
          P.open();
        }
      }
    }

    // Separated for IE
    function handleFocusToOpenEvent(event) {

      // Stop the event from propagating to the doc.
      event.stopPropagation();

      // If it’s a focus event, add the “focused” class to the root.
      if (event.type == 'focus') {
        P.$root.addClass(CLASSES.focused);
      }

      // And then finally open the picker.
      P.open();
    }

    // Return a new picker instance.
    return new PickerInstance();
  } //PickerConstructor


  /**
   * The default classes and prefix to use for the HTML classes.
   */
  PickerConstructor.klasses = function (prefix) {
    prefix = prefix || 'picker';
    return {

      picker: prefix,
      opened: prefix + '--opened',
      focused: prefix + '--focused',

      input: prefix + '__input',
      active: prefix + '__input--active',
      target: prefix + '__input--target',

      holder: prefix + '__holder',

      frame: prefix + '__frame',
      wrap: prefix + '__wrap',

      box: prefix + '__box'
    };
  }; //PickerConstructor.klasses


  /**
   * Check if the default theme is being used.
   */
  function isUsingDefaultTheme(element) {

    var theme,
        prop = 'position';

    // For IE.
    if (element.currentStyle) {
      theme = element.currentStyle[prop];
    }

    // For normal browsers.
    else if (window.getComputedStyle) {
        theme = getComputedStyle(element)[prop];
      }

    return theme == 'fixed';
  }

  /**
   * Get the width of the browser’s scrollbar.
   * Taken from: https://github.com/VodkaBears/Remodal/blob/master/src/jquery.remodal.js
   */
  function getScrollbarWidth() {

    if ($html.height() <= $window.height()) {
      return 0;
    }

    var $outer = $('<div style="visibility:hidden;width:100px" />').appendTo('body');

    // Get the width without scrollbars.
    var widthWithoutScroll = $outer[0].offsetWidth;

    // Force adding scrollbars.
    $outer.css('overflow', 'scroll');

    // Add the inner div.
    var $inner = $('<div style="width:100%" />').appendTo($outer);

    // Get the width with scrollbars.
    var widthWithScroll = $inner[0].offsetWidth;

    // Remove the divs.
    $outer.remove();

    // Return the difference between the widths.
    return widthWithoutScroll - widthWithScroll;
  }

  /**
   * PickerConstructor helper methods.
   */
  PickerConstructor._ = {

    /**
     * Create a group of nodes. Expects:
     * `
        {
            min:    {Integer},
            max:    {Integer},
            i:      {Integer},
            node:   {String},
            item:   {Function}
        }
     * `
     */
    group: function (groupObject) {

      var
      // Scope for the looped object
      loopObjectScope,


      // Create the nodes list
      nodesList = '',


      // The counter starts from the `min`
      counter = PickerConstructor._.trigger(groupObject.min, groupObject);

      // Loop from the `min` to `max`, incrementing by `i`
      for (; counter <= PickerConstructor._.trigger(groupObject.max, groupObject, [counter]); counter += groupObject.i) {

        // Trigger the `item` function within scope of the object
        loopObjectScope = PickerConstructor._.trigger(groupObject.item, groupObject, [counter]);

        // Splice the subgroup and create nodes out of the sub nodes
        nodesList += PickerConstructor._.node(groupObject.node, loopObjectScope[0], // the node
        loopObjectScope[1], // the classes
        loopObjectScope[2] // the attributes
        );
      }

      // Return the list of nodes
      return nodesList;
    }, //group


    /**
     * Create a dom node string
     */
    node: function (wrapper, item, klass, attribute) {

      // If the item is false-y, just return an empty string
      if (!item) return '';

      // If the item is an array, do a join
      item = $.isArray(item) ? item.join('') : item;

      // Check for the class
      klass = klass ? ' class="' + klass + '"' : '';

      // Check for any attributes
      attribute = attribute ? ' ' + attribute : '';

      // Return the wrapped item
      return '<' + wrapper + klass + attribute + '>' + item + '</' + wrapper + '>';
    }, //node


    /**
     * Lead numbers below 10 with a zero.
     */
    lead: function (number) {
      return (number < 10 ? '0' : '') + number;
    },

    /**
     * Trigger a function otherwise return the value.
     */
    trigger: function (callback, scope, args) {
      return typeof callback == 'function' ? callback.apply(scope, args || []) : callback;
    },

    /**
     * If the second character is a digit, length is 2 otherwise 1.
     */
    digits: function (string) {
      return (/\d/.test(string[1]) ? 2 : 1
      );
    },

    /**
     * Tell if something is a date object.
     */
    isDate: function (value) {
      return {}.toString.call(value).indexOf('Date') > -1 && this.isInteger(value.getDate());
    },

    /**
     * Tell if something is an integer.
     */
    isInteger: function (value) {
      return {}.toString.call(value).indexOf('Number') > -1 && value % 1 === 0;
    },

    /**
     * Create ARIA attribute strings.
     */
    ariaAttr: ariaAttr //PickerConstructor._


    /**
     * Extend the picker with a component and defaults.
     */
  };PickerConstructor.extend = function (name, Component) {

    // Extend jQuery.
    $.fn[name] = function (options, action) {

      // Grab the component data.
      var componentData = this.data(name);

      // If the picker is requested, return the data object.
      if (options == 'picker') {
        return componentData;
      }

      // If the component data exists and `options` is a string, carry out the action.
      if (componentData && typeof options == 'string') {
        return PickerConstructor._.trigger(componentData[options], componentData, [action]);
      }

      // Otherwise go through each matched element and if the component
      // doesn’t exist, create a new picker using `this` element
      // and merging the defaults and options with a deep copy.
      return this.each(function () {
        var $this = $(this);
        if (!$this.data(name)) {
          new PickerConstructor(this, name, Component, options);
        }
      });
    };

    // Set the defaults.
    $.fn[name].defaults = Component.defaults;
  }; //PickerConstructor.extend


  function aria(element, attribute, value) {
    if ($.isPlainObject(attribute)) {
      for (var key in attribute) {
        ariaSet(element, key, attribute[key]);
      }
    } else {
      ariaSet(element, attribute, value);
    }
  }
  function ariaSet(element, attribute, value) {
    element.setAttribute((attribute == 'role' ? '' : 'aria-') + attribute, value);
  }
  function ariaAttr(attribute, data) {
    if (!$.isPlainObject(attribute)) {
      attribute = { attribute: data };
    }
    data = '';
    for (var key in attribute) {
      var attr = (key == 'role' ? '' : 'aria-') + key,
          attrVal = attribute[key];
      data += attrVal == null ? '' : attr + '="' + attribute[key] + '"';
    }
    return data;
  }

  // IE8 bug throws an error for activeElements within iframes.
  function getActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }

  // Expose the picker constructor.
  return PickerConstructor;
});
; /*!
  * Date picker for pickadate.js v3.5.0
  * http://amsul.github.io/pickadate.js/date.htm
  */

(function (factory) {
  factory(Materialize.Picker, jQuery);
})(function (Picker, $) {

  /**
   * Globals and constants
   */
  var DAYS_IN_WEEK = 7,
      WEEKS_IN_CALENDAR = 6,
      _ = Picker._;

  /**
   * The date picker constructor
   */
  function DatePicker(picker, settings) {

    var calendar = this,
        element = picker.$node[0],
        elementValue = element.value,
        elementDataValue = picker.$node.data('value'),
        valueString = elementDataValue || elementValue,
        formatString = elementDataValue ? settings.formatSubmit : settings.format,
        isRTL = function () {

      return element.currentStyle ?

      // For IE.
      element.currentStyle.direction == 'rtl' :

      // For normal browsers.
      getComputedStyle(picker.$root[0]).direction == 'rtl';
    };

    calendar.settings = settings;
    calendar.$node = picker.$node;

    // The queue of methods that will be used to build item objects.
    calendar.queue = {
      min: 'measure create',
      max: 'measure create',
      now: 'now create',
      select: 'parse create validate',
      highlight: 'parse navigate create validate',
      view: 'parse create validate viewset',
      disable: 'deactivate',
      enable: 'activate'

      // The component's item object.
    };calendar.item = {};

    calendar.item.clear = null;
    calendar.item.disable = (settings.disable || []).slice(0);
    calendar.item.enable = -function (collectionDisabled) {
      return collectionDisabled[0] === true ? collectionDisabled.shift() : -1;
    }(calendar.item.disable);

    calendar.set('min', settings.min).set('max', settings.max).set('now');

    // When there’s a value, set the `select`, which in turn
    // also sets the `highlight` and `view`.
    if (valueString) {
      calendar.set('select', valueString, { format: formatString });
    }

    // If there’s no value, default to highlighting “today”.
    else {
        calendar.set('select', null).set('highlight', calendar.item.now);
      }

    // The keycode to movement mapping.
    calendar.key = {
      40: 7, // Down
      38: -7, // Up
      39: function () {
        return isRTL() ? -1 : 1;
      }, // Right
      37: function () {
        return isRTL() ? 1 : -1;
      }, // Left
      go: function (timeChange) {
        var highlightedObject = calendar.item.highlight,
            targetDate = new Date(highlightedObject.year, highlightedObject.month, highlightedObject.date + timeChange);
        calendar.set('highlight', targetDate, { interval: timeChange });
        this.render();
      }

      // Bind some picker events.
    };picker.on('render', function () {
      picker.$root.find('.' + settings.klass.selectMonth).on('change', function () {
        var value = this.value;
        if (value) {
          picker.set('highlight', [picker.get('view').year, value, picker.get('highlight').date]);
          picker.$root.find('.' + settings.klass.selectMonth).trigger('focus');
        }
      });
      picker.$root.find('.' + settings.klass.selectYear).on('change', function () {
        var value = this.value;
        if (value) {
          picker.set('highlight', [value, picker.get('view').month, picker.get('highlight').date]);
          picker.$root.find('.' + settings.klass.selectYear).trigger('focus');
        }
      });
    }, 1).on('open', function () {
      var includeToday = '';
      if (calendar.disabled(calendar.get('now'))) {
        includeToday = ':not(.' + settings.klass.buttonToday + ')';
      }
      picker.$root.find('button' + includeToday + ', select').attr('disabled', false);
    }, 1).on('close', function () {
      picker.$root.find('button, select').attr('disabled', true);
    }, 1);
  } //DatePicker


  /**
   * Set a datepicker item object.
   */
  DatePicker.prototype.set = function (type, value, options) {

    var calendar = this,
        calendarItem = calendar.item;

    // If the value is `null` just set it immediately.
    if (value === null) {
      if (type == 'clear') type = 'select';
      calendarItem[type] = value;
      return calendar;
    }

    // Otherwise go through the queue of methods, and invoke the functions.
    // Update this as the time unit, and set the final value as this item.
    // * In the case of `enable`, keep the queue but set `disable` instead.
    //   And in the case of `flip`, keep the queue but set `enable` instead.
    calendarItem[type == 'enable' ? 'disable' : type == 'flip' ? 'enable' : type] = calendar.queue[type].split(' ').map(function (method) {
      value = calendar[method](type, value, options);
      return value;
    }).pop();

    // Check if we need to cascade through more updates.
    if (type == 'select') {
      calendar.set('highlight', calendarItem.select, options);
    } else if (type == 'highlight') {
      calendar.set('view', calendarItem.highlight, options);
    } else if (type.match(/^(flip|min|max|disable|enable)$/)) {
      if (calendarItem.select && calendar.disabled(calendarItem.select)) {
        calendar.set('select', calendarItem.select, options);
      }
      if (calendarItem.highlight && calendar.disabled(calendarItem.highlight)) {
        calendar.set('highlight', calendarItem.highlight, options);
      }
    }

    return calendar;
  }; //DatePicker.prototype.set


  /**
   * Get a datepicker item object.
   */
  DatePicker.prototype.get = function (type) {
    return this.item[type];
  }; //DatePicker.prototype.get


  /**
   * Create a picker date object.
   */
  DatePicker.prototype.create = function (type, value, options) {

    var isInfiniteValue,
        calendar = this;

    // If there’s no value, use the type as the value.
    value = value === undefined ? type : value;

    // If it’s infinity, update the value.
    if (value == -Infinity || value == Infinity) {
      isInfiniteValue = value;
    }

    // If it’s an object, use the native date object.
    else if ($.isPlainObject(value) && _.isInteger(value.pick)) {
        value = value.obj;
      }

      // If it’s an array, convert it into a date and make sure
      // that it’s a valid date – otherwise default to today.
      else if ($.isArray(value)) {
          value = new Date(value[0], value[1], value[2]);
          value = _.isDate(value) ? value : calendar.create().obj;
        }

        // If it’s a number or date object, make a normalized date.
        else if (_.isInteger(value) || _.isDate(value)) {
            value = calendar.normalize(new Date(value), options);
          }

          // If it’s a literal true or any other case, set it to now.
          else /*if ( value === true )*/{
              value = calendar.now(type, value, options);
            }

    // Return the compiled object.
    return {
      year: isInfiniteValue || value.getFullYear(),
      month: isInfiniteValue || value.getMonth(),
      date: isInfiniteValue || value.getDate(),
      day: isInfiniteValue || value.getDay(),
      obj: isInfiniteValue || value,
      pick: isInfiniteValue || value.getTime()
    };
  }; //DatePicker.prototype.create


  /**
   * Create a range limit object using an array, date object,
   * literal “true”, or integer relative to another time.
   */
  DatePicker.prototype.createRange = function (from, to) {

    var calendar = this,
        createDate = function (date) {
      if (date === true || $.isArray(date) || _.isDate(date)) {
        return calendar.create(date);
      }
      return date;
    };

    // Create objects if possible.
    if (!_.isInteger(from)) {
      from = createDate(from);
    }
    if (!_.isInteger(to)) {
      to = createDate(to);
    }

    // Create relative dates.
    if (_.isInteger(from) && $.isPlainObject(to)) {
      from = [to.year, to.month, to.date + from];
    } else if (_.isInteger(to) && $.isPlainObject(from)) {
      to = [from.year, from.month, from.date + to];
    }

    return {
      from: createDate(from),
      to: createDate(to)
    };
  }; //DatePicker.prototype.createRange


  /**
   * Check if a date unit falls within a date range object.
   */
  DatePicker.prototype.withinRange = function (range, dateUnit) {
    range = this.createRange(range.from, range.to);
    return dateUnit.pick >= range.from.pick && dateUnit.pick <= range.to.pick;
  };

  /**
   * Check if two date range objects overlap.
   */
  DatePicker.prototype.overlapRanges = function (one, two) {

    var calendar = this;

    // Convert the ranges into comparable dates.
    one = calendar.createRange(one.from, one.to);
    two = calendar.createRange(two.from, two.to);

    return calendar.withinRange(one, two.from) || calendar.withinRange(one, two.to) || calendar.withinRange(two, one.from) || calendar.withinRange(two, one.to);
  };

  /**
   * Get the date today.
   */
  DatePicker.prototype.now = function (type, value, options) {
    value = new Date();
    if (options && options.rel) {
      value.setDate(value.getDate() + options.rel);
    }
    return this.normalize(value, options);
  };

  /**
   * Navigate to next/prev month.
   */
  DatePicker.prototype.navigate = function (type, value, options) {

    var targetDateObject,
        targetYear,
        targetMonth,
        targetDate,
        isTargetArray = $.isArray(value),
        isTargetObject = $.isPlainObject(value),
        viewsetObject = this.item.view; /*,
                                        safety = 100*/

    if (isTargetArray || isTargetObject) {

      if (isTargetObject) {
        targetYear = value.year;
        targetMonth = value.month;
        targetDate = value.date;
      } else {
        targetYear = +value[0];
        targetMonth = +value[1];
        targetDate = +value[2];
      }

      // If we’re navigating months but the view is in a different
      // month, navigate to the view’s year and month.
      if (options && options.nav && viewsetObject && viewsetObject.month !== targetMonth) {
        targetYear = viewsetObject.year;
        targetMonth = viewsetObject.month;
      }

      // Figure out the expected target year and month.
      targetDateObject = new Date(targetYear, targetMonth + (options && options.nav ? options.nav : 0), 1);
      targetYear = targetDateObject.getFullYear();
      targetMonth = targetDateObject.getMonth();

      // If the month we’re going to doesn’t have enough days,
      // keep decreasing the date until we reach the month’s last date.
      while ( /*safety &&*/new Date(targetYear, targetMonth, targetDate).getMonth() !== targetMonth) {
        targetDate -= 1;
        /*safety -= 1
        if ( !safety ) {
            throw 'Fell into an infinite loop while navigating to ' + new Date( targetYear, targetMonth, targetDate ) + '.'
        }*/
      }

      value = [targetYear, targetMonth, targetDate];
    }

    return value;
  }; //DatePicker.prototype.navigate


  /**
   * Normalize a date by setting the hours to midnight.
   */
  DatePicker.prototype.normalize = function (value /*, options*/) {
    value.setHours(0, 0, 0, 0);
    return value;
  };

  /**
   * Measure the range of dates.
   */
  DatePicker.prototype.measure = function (type, value /*, options*/) {

    var calendar = this;

    // If it’s anything false-y, remove the limits.
    if (!value) {
      value = type == 'min' ? -Infinity : Infinity;
    }

    // If it’s a string, parse it.
    else if (typeof value == 'string') {
        value = calendar.parse(type, value);
      }

      // If it's an integer, get a date relative to today.
      else if (_.isInteger(value)) {
          value = calendar.now(type, value, { rel: value });
        }

    return value;
  }; ///DatePicker.prototype.measure


  /**
   * Create a viewset object based on navigation.
   */
  DatePicker.prototype.viewset = function (type, dateObject /*, options*/) {
    return this.create([dateObject.year, dateObject.month, 1]);
  };

  /**
   * Validate a date as enabled and shift if needed.
   */
  DatePicker.prototype.validate = function (type, dateObject, options) {

    var calendar = this,


    // Keep a reference to the original date.
    originalDateObject = dateObject,


    // Make sure we have an interval.
    interval = options && options.interval ? options.interval : 1,


    // Check if the calendar enabled dates are inverted.
    isFlippedBase = calendar.item.enable === -1,


    // Check if we have any enabled dates after/before now.
    hasEnabledBeforeTarget,
        hasEnabledAfterTarget,


    // The min & max limits.
    minLimitObject = calendar.item.min,
        maxLimitObject = calendar.item.max,


    // Check if we’ve reached the limit during shifting.
    reachedMin,
        reachedMax,


    // Check if the calendar is inverted and at least one weekday is enabled.
    hasEnabledWeekdays = isFlippedBase && calendar.item.disable.filter(function (value) {

      // If there’s a date, check where it is relative to the target.
      if ($.isArray(value)) {
        var dateTime = calendar.create(value).pick;
        if (dateTime < dateObject.pick) hasEnabledBeforeTarget = true;else if (dateTime > dateObject.pick) hasEnabledAfterTarget = true;
      }

      // Return only integers for enabled weekdays.
      return _.isInteger(value);
    }).length; /*,
               safety = 100*/

    // Cases to validate for:
    // [1] Not inverted and date disabled.
    // [2] Inverted and some dates enabled.
    // [3] Not inverted and out of range.
    //
    // Cases to **not** validate for:
    // • Navigating months.
    // • Not inverted and date enabled.
    // • Inverted and all dates disabled.
    // • ..and anything else.
    if (!options || !options.nav) if (
    /* 1 */!isFlippedBase && calendar.disabled(dateObject) ||
    /* 2 */isFlippedBase && calendar.disabled(dateObject) && (hasEnabledWeekdays || hasEnabledBeforeTarget || hasEnabledAfterTarget) ||
    /* 3 */!isFlippedBase && (dateObject.pick <= minLimitObject.pick || dateObject.pick >= maxLimitObject.pick)) {

      // When inverted, flip the direction if there aren’t any enabled weekdays
      // and there are no enabled dates in the direction of the interval.
      if (isFlippedBase && !hasEnabledWeekdays && (!hasEnabledAfterTarget && interval > 0 || !hasEnabledBeforeTarget && interval < 0)) {
        interval *= -1;
      }

      // Keep looping until we reach an enabled date.
      while ( /*safety &&*/calendar.disabled(dateObject)) {

        /*safety -= 1
        if ( !safety ) {
            throw 'Fell into an infinite loop while validating ' + dateObject.obj + '.'
        }*/

        // If we’ve looped into the next/prev month with a large interval, return to the original date and flatten the interval.
        if (Math.abs(interval) > 1 && (dateObject.month < originalDateObject.month || dateObject.month > originalDateObject.month)) {
          dateObject = originalDateObject;
          interval = interval > 0 ? 1 : -1;
        }

        // If we’ve reached the min/max limit, reverse the direction, flatten the interval and set it to the limit.
        if (dateObject.pick <= minLimitObject.pick) {
          reachedMin = true;
          interval = 1;
          dateObject = calendar.create([minLimitObject.year, minLimitObject.month, minLimitObject.date + (dateObject.pick === minLimitObject.pick ? 0 : -1)]);
        } else if (dateObject.pick >= maxLimitObject.pick) {
          reachedMax = true;
          interval = -1;
          dateObject = calendar.create([maxLimitObject.year, maxLimitObject.month, maxLimitObject.date + (dateObject.pick === maxLimitObject.pick ? 0 : 1)]);
        }

        // If we’ve reached both limits, just break out of the loop.
        if (reachedMin && reachedMax) {
          break;
        }

        // Finally, create the shifted date using the interval and keep looping.
        dateObject = calendar.create([dateObject.year, dateObject.month, dateObject.date + interval]);
      }
    } //endif


    // Return the date object settled on.
    return dateObject;
  }; //DatePicker.prototype.validate


  /**
   * Check if a date is disabled.
   */
  DatePicker.prototype.disabled = function (dateToVerify) {

    var calendar = this,


    // Filter through the disabled dates to check if this is one.
    isDisabledMatch = calendar.item.disable.filter(function (dateToDisable) {

      // If the date is a number, match the weekday with 0index and `firstDay` check.
      if (_.isInteger(dateToDisable)) {
        return dateToVerify.day === (calendar.settings.firstDay ? dateToDisable : dateToDisable - 1) % 7;
      }

      // If it’s an array or a native JS date, create and match the exact date.
      if ($.isArray(dateToDisable) || _.isDate(dateToDisable)) {
        return dateToVerify.pick === calendar.create(dateToDisable).pick;
      }

      // If it’s an object, match a date within the “from” and “to” range.
      if ($.isPlainObject(dateToDisable)) {
        return calendar.withinRange(dateToDisable, dateToVerify);
      }
    });

    // If this date matches a disabled date, confirm it’s not inverted.
    isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function (dateToDisable) {
      return $.isArray(dateToDisable) && dateToDisable[3] == 'inverted' || $.isPlainObject(dateToDisable) && dateToDisable.inverted;
    }).length;

    // Check the calendar “enabled” flag and respectively flip the
    // disabled state. Then also check if it’s beyond the min/max limits.
    return calendar.item.enable === -1 ? !isDisabledMatch : isDisabledMatch || dateToVerify.pick < calendar.item.min.pick || dateToVerify.pick > calendar.item.max.pick;
  }; //DatePicker.prototype.disabled


  /**
   * Parse a string into a usable type.
   */
  DatePicker.prototype.parse = function (type, value, options) {

    var calendar = this,
        parsingObject = {};

    // If it’s already parsed, we’re good.
    if (!value || typeof value != 'string') {
      return value;
    }

    // We need a `.format` to parse the value with.
    if (!(options && options.format)) {
      options = options || {};
      options.format = calendar.settings.format;
    }

    // Convert the format into an array and then map through it.
    calendar.formats.toArray(options.format).map(function (label) {

      var
      // Grab the formatting label.
      formattingLabel = calendar.formats[label],


      // The format length is from the formatting label function or the
      // label length without the escaping exclamation (!) mark.
      formatLength = formattingLabel ? _.trigger(formattingLabel, calendar, [value, parsingObject]) : label.replace(/^!/, '').length;

      // If there's a format label, split the value up to the format length.
      // Then add it to the parsing object with appropriate label.
      if (formattingLabel) {
        parsingObject[label] = value.substr(0, formatLength);
      }

      // Update the value as the substring from format length to end.
      value = value.substr(formatLength);
    });

    // Compensate for month 0index.
    return [parsingObject.yyyy || parsingObject.yy, +(parsingObject.mm || parsingObject.m) - 1, parsingObject.dd || parsingObject.d];
  }; //DatePicker.prototype.parse


  /**
   * Various formats to display the object in.
   */
  DatePicker.prototype.formats = function () {

    // Return the length of the first word in a collection.
    function getWordLengthFromCollection(string, collection, dateObject) {

      // Grab the first word from the string.
      var word = string.match(/\w+/)[0];

      // If there's no month index, add it to the date object
      if (!dateObject.mm && !dateObject.m) {
        dateObject.m = collection.indexOf(word) + 1;
      }

      // Return the length of the word.
      return word.length;
    }

    // Get the length of the first word in a string.
    function getFirstWordLength(string) {
      return string.match(/\w+/)[0].length;
    }

    return {

      d: function (string, dateObject) {

        // If there's string, then get the digits length.
        // Otherwise return the selected date.
        return string ? _.digits(string) : dateObject.date;
      },
      dd: function (string, dateObject) {

        // If there's a string, then the length is always 2.
        // Otherwise return the selected date with a leading zero.
        return string ? 2 : _.lead(dateObject.date);
      },
      ddd: function (string, dateObject) {

        // If there's a string, then get the length of the first word.
        // Otherwise return the short selected weekday.
        return string ? getFirstWordLength(string) : this.settings.weekdaysShort[dateObject.day];
      },
      dddd: function (string, dateObject) {

        // If there's a string, then get the length of the first word.
        // Otherwise return the full selected weekday.
        return string ? getFirstWordLength(string) : this.settings.weekdaysFull[dateObject.day];
      },
      m: function (string, dateObject) {

        // If there's a string, then get the length of the digits
        // Otherwise return the selected month with 0index compensation.
        return string ? _.digits(string) : dateObject.month + 1;
      },
      mm: function (string, dateObject) {

        // If there's a string, then the length is always 2.
        // Otherwise return the selected month with 0index and leading zero.
        return string ? 2 : _.lead(dateObject.month + 1);
      },
      mmm: function (string, dateObject) {

        var collection = this.settings.monthsShort;

        // If there's a string, get length of the relevant month from the short
        // months collection. Otherwise return the selected month from that collection.
        return string ? getWordLengthFromCollection(string, collection, dateObject) : collection[dateObject.month];
      },
      mmmm: function (string, dateObject) {

        var collection = this.settings.monthsFull;

        // If there's a string, get length of the relevant month from the full
        // months collection. Otherwise return the selected month from that collection.
        return string ? getWordLengthFromCollection(string, collection, dateObject) : collection[dateObject.month];
      },
      yy: function (string, dateObject) {

        // If there's a string, then the length is always 2.
        // Otherwise return the selected year by slicing out the first 2 digits.
        return string ? 2 : ('' + dateObject.year).slice(2);
      },
      yyyy: function (string, dateObject) {

        // If there's a string, then the length is always 4.
        // Otherwise return the selected year.
        return string ? 4 : dateObject.year;
      },

      // Create an array by splitting the formatting string passed.
      toArray: function (formatString) {
        return formatString.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
      },

      // Format an object into a string using the formatting options.
      toString: function (formatString, itemObject) {
        var calendar = this;
        return calendar.formats.toArray(formatString).map(function (label) {
          return _.trigger(calendar.formats[label], calendar, [0, itemObject]) || label.replace(/^!/, '');
        }).join('');
      }
    };
  }(); //DatePicker.prototype.formats


  /**
   * Check if two date units are the exact.
   */
  DatePicker.prototype.isDateExact = function (one, two) {

    var calendar = this;

    // When we’re working with weekdays, do a direct comparison.
    if (_.isInteger(one) && _.isInteger(two) || typeof one == 'boolean' && typeof two == 'boolean') {
      return one === two;
    }

    // When we’re working with date representations, compare the “pick” value.
    if ((_.isDate(one) || $.isArray(one)) && (_.isDate(two) || $.isArray(two))) {
      return calendar.create(one).pick === calendar.create(two).pick;
    }

    // When we’re working with range objects, compare the “from” and “to”.
    if ($.isPlainObject(one) && $.isPlainObject(two)) {
      return calendar.isDateExact(one.from, two.from) && calendar.isDateExact(one.to, two.to);
    }

    return false;
  };

  /**
   * Check if two date units overlap.
   */
  DatePicker.prototype.isDateOverlap = function (one, two) {

    var calendar = this,
        firstDay = calendar.settings.firstDay ? 1 : 0;

    // When we’re working with a weekday index, compare the days.
    if (_.isInteger(one) && (_.isDate(two) || $.isArray(two))) {
      one = one % 7 + firstDay;
      return one === calendar.create(two).day + 1;
    }
    if (_.isInteger(two) && (_.isDate(one) || $.isArray(one))) {
      two = two % 7 + firstDay;
      return two === calendar.create(one).day + 1;
    }

    // When we’re working with range objects, check if the ranges overlap.
    if ($.isPlainObject(one) && $.isPlainObject(two)) {
      return calendar.overlapRanges(one, two);
    }

    return false;
  };

  /**
   * Flip the “enabled” state.
   */
  DatePicker.prototype.flipEnable = function (val) {
    var itemObject = this.item;
    itemObject.enable = val || (itemObject.enable == -1 ? 1 : -1);
  };

  /**
   * Mark a collection of dates as “disabled”.
   */
  DatePicker.prototype.deactivate = function (type, datesToDisable) {

    var calendar = this,
        disabledItems = calendar.item.disable.slice(0);

    // If we’re flipping, that’s all we need to do.
    if (datesToDisable == 'flip') {
      calendar.flipEnable();
    } else if (datesToDisable === false) {
      calendar.flipEnable(1);
      disabledItems = [];
    } else if (datesToDisable === true) {
      calendar.flipEnable(-1);
      disabledItems = [];
    }

    // Otherwise go through the dates to disable.
    else {

        datesToDisable.map(function (unitToDisable) {

          var matchFound;

          // When we have disabled items, check for matches.
          // If something is matched, immediately break out.
          for (var index = 0; index < disabledItems.length; index += 1) {
            if (calendar.isDateExact(unitToDisable, disabledItems[index])) {
              matchFound = true;
              break;
            }
          }

          // If nothing was found, add the validated unit to the collection.
          if (!matchFound) {
            if (_.isInteger(unitToDisable) || _.isDate(unitToDisable) || $.isArray(unitToDisable) || $.isPlainObject(unitToDisable) && unitToDisable.from && unitToDisable.to) {
              disabledItems.push(unitToDisable);
            }
          }
        });
      }

    // Return the updated collection.
    return disabledItems;
  }; //DatePicker.prototype.deactivate


  /**
   * Mark a collection of dates as “enabled”.
   */
  DatePicker.prototype.activate = function (type, datesToEnable) {

    var calendar = this,
        disabledItems = calendar.item.disable,
        disabledItemsCount = disabledItems.length;

    // If we’re flipping, that’s all we need to do.
    if (datesToEnable == 'flip') {
      calendar.flipEnable();
    } else if (datesToEnable === true) {
      calendar.flipEnable(1);
      disabledItems = [];
    } else if (datesToEnable === false) {
      calendar.flipEnable(-1);
      disabledItems = [];
    }

    // Otherwise go through the disabled dates.
    else {

        datesToEnable.map(function (unitToEnable) {

          var matchFound, disabledUnit, index, isExactRange;

          // Go through the disabled items and try to find a match.
          for (index = 0; index < disabledItemsCount; index += 1) {

            disabledUnit = disabledItems[index];

            // When an exact match is found, remove it from the collection.
            if (calendar.isDateExact(disabledUnit, unitToEnable)) {
              matchFound = disabledItems[index] = null;
              isExactRange = true;
              break;
            }

            // When an overlapped match is found, add the “inverted” state to it.
            else if (calendar.isDateOverlap(disabledUnit, unitToEnable)) {
                if ($.isPlainObject(unitToEnable)) {
                  unitToEnable.inverted = true;
                  matchFound = unitToEnable;
                } else if ($.isArray(unitToEnable)) {
                  matchFound = unitToEnable;
                  if (!matchFound[3]) matchFound.push('inverted');
                } else if (_.isDate(unitToEnable)) {
                  matchFound = [unitToEnable.getFullYear(), unitToEnable.getMonth(), unitToEnable.getDate(), 'inverted'];
                }
                break;
              }
          }

          // If a match was found, remove a previous duplicate entry.
          if (matchFound) for (index = 0; index < disabledItemsCount; index += 1) {
            if (calendar.isDateExact(disabledItems[index], unitToEnable)) {
              disabledItems[index] = null;
              break;
            }
          }

          // In the event that we’re dealing with an exact range of dates,
          // make sure there are no “inverted” dates because of it.
          if (isExactRange) for (index = 0; index < disabledItemsCount; index += 1) {
            if (calendar.isDateOverlap(disabledItems[index], unitToEnable)) {
              disabledItems[index] = null;
              break;
            }
          }

          // If something is still matched, add it into the collection.
          if (matchFound) {
            disabledItems.push(matchFound);
          }
        });
      }

    // Return the updated collection.
    return disabledItems.filter(function (val) {
      return val != null;
    });
  }; //DatePicker.prototype.activate


  /**
   * Create a string for the nodes in the picker.
   */
  DatePicker.prototype.nodes = function (isOpen) {

    var calendar = this,
        settings = calendar.settings,
        calendarItem = calendar.item,
        nowObject = calendarItem.now,
        selectedObject = calendarItem.select,
        highlightedObject = calendarItem.highlight,
        viewsetObject = calendarItem.view,
        disabledCollection = calendarItem.disable,
        minLimitObject = calendarItem.min,
        maxLimitObject = calendarItem.max,


    // Create the calendar table head using a copy of weekday labels collection.
    // * We do a copy so we don't mutate the original array.
    tableHead = function (collection, fullCollection) {

      // If the first day should be Monday, move Sunday to the end.
      if (settings.firstDay) {
        collection.push(collection.shift());
        fullCollection.push(fullCollection.shift());
      }

      // Create and return the table head group.
      return _.node('thead', _.node('tr', _.group({
        min: 0,
        max: DAYS_IN_WEEK - 1,
        i: 1,
        node: 'th',
        item: function (counter) {
          return [collection[counter], settings.klass.weekdays, 'scope=col title="' + fullCollection[counter] + '"'];
        }
      }))); //endreturn

      // Materialize modified
    }((settings.showWeekdaysFull ? settings.weekdaysFull : settings.weekdaysLetter).slice(0), settings.weekdaysFull.slice(0)),
        //tableHead


    // Create the nav for next/prev month.
    createMonthNav = function (next) {

      // Otherwise, return the created month tag.
      return _.node('div', ' ', settings.klass['nav' + (next ? 'Next' : 'Prev')] + (

      // If the focused month is outside the range, disabled the button.
      next && viewsetObject.year >= maxLimitObject.year && viewsetObject.month >= maxLimitObject.month || !next && viewsetObject.year <= minLimitObject.year && viewsetObject.month <= minLimitObject.month ? ' ' + settings.klass.navDisabled : ''), 'data-nav=' + (next || -1) + ' ' + _.ariaAttr({
        role: 'button',
        controls: calendar.$node[0].id + '_table'
      }) + ' ' + 'title="' + (next ? settings.labelMonthNext : settings.labelMonthPrev) + '"'); //endreturn
    },
        //createMonthNav


    // Create the month label.
    //Materialize modified
    createMonthLabel = function (override) {

      var monthsCollection = settings.showMonthsShort ? settings.monthsShort : settings.monthsFull;

      // Materialize modified
      if (override == "short_months") {
        monthsCollection = settings.monthsShort;
      }

      // If there are months to select, add a dropdown menu.
      if (settings.selectMonths && override == undefined) {

        return _.node('select', _.group({
          min: 0,
          max: 11,
          i: 1,
          node: 'option',
          item: function (loopedMonth) {

            return [

            // The looped month and no classes.
            monthsCollection[loopedMonth], 0,

            // Set the value and selected index.
            'value=' + loopedMonth + (viewsetObject.month == loopedMonth ? ' selected' : '') + (viewsetObject.year == minLimitObject.year && loopedMonth < minLimitObject.month || viewsetObject.year == maxLimitObject.year && loopedMonth > maxLimitObject.month ? ' disabled' : '')];
          }
        }), settings.klass.selectMonth + ' browser-default', (isOpen ? '' : 'disabled') + ' ' + _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' + 'title="' + settings.labelMonthSelect + '"');
      }

      // Materialize modified
      if (override == "short_months") if (selectedObject != null) return monthsCollection[selectedObject.month];else return monthsCollection[viewsetObject.month];

      // If there's a need for a month selector
      return _.node('div', monthsCollection[viewsetObject.month], settings.klass.month);
    },
        //createMonthLabel


    // Create the year label.
    // Materialize modified
    createYearLabel = function (override) {

      var focusedYear = viewsetObject.year,


      // If years selector is set to a literal "true", set it to 5. Otherwise
      // divide in half to get half before and half after focused year.
      numberYears = settings.selectYears === true ? 5 : ~~(settings.selectYears / 2);

      // If there are years to select, add a dropdown menu.
      if (numberYears) {

        var minYear = minLimitObject.year,
            maxYear = maxLimitObject.year,
            lowestYear = focusedYear - numberYears,
            highestYear = focusedYear + numberYears;

        // If the min year is greater than the lowest year, increase the highest year
        // by the difference and set the lowest year to the min year.
        if (minYear > lowestYear) {
          highestYear += minYear - lowestYear;
          lowestYear = minYear;
        }

        // If the max year is less than the highest year, decrease the lowest year
        // by the lower of the two: available and needed years. Then set the
        // highest year to the max year.
        if (maxYear < highestYear) {

          var availableYears = lowestYear - minYear,
              neededYears = highestYear - maxYear;

          lowestYear -= availableYears > neededYears ? neededYears : availableYears;
          highestYear = maxYear;
        }

        if (settings.selectYears && override == undefined) {
          return _.node('select', _.group({
            min: lowestYear,
            max: highestYear,
            i: 1,
            node: 'option',
            item: function (loopedYear) {
              return [

              // The looped year and no classes.
              loopedYear, 0,

              // Set the value and selected index.
              'value=' + loopedYear + (focusedYear == loopedYear ? ' selected' : '')];
            }
          }), settings.klass.selectYear + ' browser-default', (isOpen ? '' : 'disabled') + ' ' + _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' + 'title="' + settings.labelYearSelect + '"');
        }
      }

      // Materialize modified
      if (override === 'raw' && selectedObject != null) {
        return _.node('div', selectedObject.year);
      }

      // Otherwise just return the year focused
      return _.node('div', focusedYear, settings.klass.year);
    }; //createYearLabel


    // Materialize modified
    createDayLabel = function () {
      if (selectedObject != null) return selectedObject.date;else return nowObject.date;
    };
    createWeekdayLabel = function () {
      var display_day;

      if (selectedObject != null) display_day = selectedObject.day;else display_day = nowObject.day;
      var weekday = settings.weekdaysShort[display_day];
      return weekday;
    };

    // Create and return the entire calendar.

    return _.node(
    // Date presentation View
    'div', _.node(
    // Div for Year
    'div', createYearLabel("raw"), settings.klass.year_display) + _.node('span', createWeekdayLabel() + ', ', "picker__weekday-display") + _.node(
    // Div for short Month
    'span', createMonthLabel("short_months") + ' ', settings.klass.month_display) + _.node(
    // Div for Day
    'span', createDayLabel(), settings.klass.day_display), settings.klass.date_display) +
    // Calendar container
    _.node('div', _.node('div', _.node('div', (settings.selectYears ? createMonthLabel() + createYearLabel() : createMonthLabel() + createYearLabel()) + createMonthNav() + createMonthNav(1), settings.klass.header) + _.node('table', tableHead + _.node('tbody', _.group({
      min: 0,
      max: WEEKS_IN_CALENDAR - 1,
      i: 1,
      node: 'tr',
      item: function (rowCounter) {

        // If Monday is the first day and the month starts on Sunday, shift the date back a week.
        var shiftDateBy = settings.firstDay && calendar.create([viewsetObject.year, viewsetObject.month, 1]).day === 0 ? -7 : 0;

        return [_.group({
          min: DAYS_IN_WEEK * rowCounter - viewsetObject.day + shiftDateBy + 1, // Add 1 for weekday 0index
          max: function () {
            return this.min + DAYS_IN_WEEK - 1;
          },
          i: 1,
          node: 'td',
          item: function (targetDate) {

            // Convert the time date from a relative date to a target date.
            targetDate = calendar.create([viewsetObject.year, viewsetObject.month, targetDate + (settings.firstDay ? 1 : 0)]);

            var isSelected = selectedObject && selectedObject.pick == targetDate.pick,
                isHighlighted = highlightedObject && highlightedObject.pick == targetDate.pick,
                isDisabled = disabledCollection && calendar.disabled(targetDate) || targetDate.pick < minLimitObject.pick || targetDate.pick > maxLimitObject.pick,
                formattedDate = _.trigger(calendar.formats.toString, calendar, [settings.format, targetDate]);

            return [_.node('div', targetDate.date, function (klasses) {

              // Add the `infocus` or `outfocus` classes based on month in view.
              klasses.push(viewsetObject.month == targetDate.month ? settings.klass.infocus : settings.klass.outfocus);

              // Add the `today` class if needed.
              if (nowObject.pick == targetDate.pick) {
                klasses.push(settings.klass.now);
              }

              // Add the `selected` class if something's selected and the time matches.
              if (isSelected) {
                klasses.push(settings.klass.selected);
              }

              // Add the `highlighted` class if something's highlighted and the time matches.
              if (isHighlighted) {
                klasses.push(settings.klass.highlighted);
              }

              // Add the `disabled` class if something's disabled and the object matches.
              if (isDisabled) {
                klasses.push(settings.klass.disabled);
              }

              return klasses.join(' ');
            }([settings.klass.day]), 'data-pick=' + targetDate.pick + ' ' + _.ariaAttr({
              role: 'gridcell',
              label: formattedDate,
              selected: isSelected && calendar.$node.val() === formattedDate ? true : null,
              activedescendant: isHighlighted ? true : null,
              disabled: isDisabled ? true : null
            }) + ' ' + (isDisabled ? '' : 'tabindex="0"')), '', _.ariaAttr({ role: 'presentation' })]; //endreturn
          }
        })]; //endreturn
      }
    })), settings.klass.table, 'id="' + calendar.$node[0].id + '_table' + '" ' + _.ariaAttr({
      role: 'grid',
      controls: calendar.$node[0].id,
      readonly: true
    })), settings.klass.calendar_container) // end calendar

    +

    // * For Firefox forms to submit, make sure to set the buttons’ `type` attributes as “button”.
    _.node('div', _.node('button', settings.today, "btn-flat picker__today waves-effect", 'type=button data-pick=' + nowObject.pick + (isOpen && !calendar.disabled(nowObject) ? '' : ' disabled') + ' ' + _.ariaAttr({ controls: calendar.$node[0].id })) + _.node('button', settings.clear, "btn-flat picker__clear waves-effect", 'type=button data-clear=1' + (isOpen ? '' : ' disabled') + ' ' + _.ariaAttr({ controls: calendar.$node[0].id })) + _.node('button', settings.close, "btn-flat picker__close waves-effect", 'type=button data-close=true ' + (isOpen ? '' : ' disabled') + ' ' + _.ariaAttr({ controls: calendar.$node[0].id })), settings.klass.footer), 'picker__container__wrapper'); //endreturn
  }; //DatePicker.prototype.nodes


  /**
   * The date picker defaults.
   */
  DatePicker.defaults = function (prefix) {

    return {

      // The title label to use for the month nav buttons
      labelMonthNext: 'Next month',
      labelMonthPrev: 'Previous month',

      // The title label to use for the dropdown selectors
      labelMonthSelect: 'Select a month',
      labelYearSelect: 'Select a year',

      // Months and weekdays
      monthsFull: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      weekdaysFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

      // Materialize modified
      weekdaysLetter: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

      // Today and clear
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',

      // Picker close behavior (Prevent a change in behaviour for backwards compatibility)
      closeOnSelect: false,

      // The format to show on the `input` element
      format: 'd mmmm, yyyy',

      // Classes
      klass: {

        table: prefix + 'table',

        header: prefix + 'header',

        // Materialize Added klasses
        date_display: prefix + 'date-display',
        day_display: prefix + 'day-display',
        month_display: prefix + 'month-display',
        year_display: prefix + 'year-display',
        calendar_container: prefix + 'calendar-container',
        // end


        navPrev: prefix + 'nav--prev',
        navNext: prefix + 'nav--next',
        navDisabled: prefix + 'nav--disabled',

        month: prefix + 'month',
        year: prefix + 'year',

        selectMonth: prefix + 'select--month',
        selectYear: prefix + 'select--year',

        weekdays: prefix + 'weekday',

        day: prefix + 'day',
        disabled: prefix + 'day--disabled',
        selected: prefix + 'day--selected',
        highlighted: prefix + 'day--highlighted',
        now: prefix + 'day--today',
        infocus: prefix + 'day--infocus',
        outfocus: prefix + 'day--outfocus',

        footer: prefix + 'footer',

        buttonClear: prefix + 'button--clear',
        buttonToday: prefix + 'button--today',
        buttonClose: prefix + 'button--close'
      }
    };
  }(Picker.klasses().picker + '__');

  /**
   * Extend the picker to add the date picker.
   */
  Picker.extend('pickadate', DatePicker);
});
; /*!
  * ClockPicker v0.0.7 (http://weareoutman.github.io/clockpicker/)
  * Copyright 2014 Wang Shenwei.
  * Licensed under MIT (https://github.com/weareoutman/clockpicker/blob/gh-pages/LICENSE)
  *
  * Further modified
  * Copyright 2015 Ching Yaw Hao.
  */

(function ($) {
  var $win = $(window),
      $doc = $(document);

  // Can I use inline svg ?
  var svgNS = 'http://www.w3.org/2000/svg',
      svgSupported = 'SVGAngle' in window && function () {
    var supported,
        el = document.createElement('div');
    el.innerHTML = '<svg/>';
    supported = (el.firstChild && el.firstChild.namespaceURI) == svgNS;
    el.innerHTML = '';
    return supported;
  }();

  // Can I use transition ?
  var transitionSupported = function () {
    var style = document.createElement('div').style;
    return 'transition' in style || 'WebkitTransition' in style || 'MozTransition' in style || 'msTransition' in style || 'OTransition' in style;
  }();

  // Listen touch events in touch screen device, instead of mouse events in desktop.
  var touchSupported = 'ontouchstart' in window,
      mousedownEvent = 'mousedown' + (touchSupported ? ' touchstart' : ''),
      mousemoveEvent = 'mousemove.clockpicker' + (touchSupported ? ' touchmove.clockpicker' : ''),
      mouseupEvent = 'mouseup.clockpicker' + (touchSupported ? ' touchend.clockpicker' : '');

  // Vibrate the device if supported
  var vibrate = navigator.vibrate ? 'vibrate' : navigator.webkitVibrate ? 'webkitVibrate' : null;

  function createSvgElement(name) {
    return document.createElementNS(svgNS, name);
  }

  function leadingZero(num) {
    return (num < 10 ? '0' : '') + num;
  }

  // Get a unique id
  var idCounter = 0;
  function uniqueId(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  }

  // Clock size
  var dialRadius = 135,
      outerRadius = 105,

  // innerRadius = 80 on 12 hour clock
  innerRadius = 70,
      tickRadius = 20,
      diameter = dialRadius * 2,
      duration = transitionSupported ? 350 : 1;

  // Popover template
  var tpl = ['<div class="clockpicker picker">', '<div class="picker__holder">', '<div class="picker__frame">', '<div class="picker__wrap">', '<div class="picker__box">', '<div class="picker__date-display">', '<div class="clockpicker-display">', '<div class="clockpicker-display-column">', '<span class="clockpicker-span-hours text-primary"></span>', ':', '<span class="clockpicker-span-minutes"></span>', '</div>', '<div class="clockpicker-display-column clockpicker-display-am-pm">', '<div class="clockpicker-span-am-pm"></div>', '</div>', '</div>', '</div>', '<div class="picker__container__wrapper">', '<div class="picker__calendar-container">', '<div class="clockpicker-plate">', '<div class="clockpicker-canvas"></div>', '<div class="clockpicker-dial clockpicker-hours"></div>', '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>', '</div>', '<div class="clockpicker-am-pm-block">', '</div>', '</div>', '<div class="picker__footer">', '</div>', '</div>', '</div>', '</div>', '</div>', '</div>', '</div>'].join('');

  // ClockPicker
  function ClockPicker(element, options) {
    var popover = $(tpl),
        plate = popover.find('.clockpicker-plate'),
        holder = popover.find('.picker__holder'),
        hoursView = popover.find('.clockpicker-hours'),
        minutesView = popover.find('.clockpicker-minutes'),
        amPmBlock = popover.find('.clockpicker-am-pm-block'),
        isInput = element.prop('tagName') === 'INPUT',
        input = isInput ? element : element.find('input'),
        label = $("label[for=" + input.attr("id") + "]"),
        self = this;

    this.id = uniqueId('cp');
    this.element = element;
    this.holder = holder;
    this.options = options;
    this.isAppended = false;
    this.isShown = false;
    this.currentView = 'hours';
    this.isInput = isInput;
    this.input = input;
    this.label = label;
    this.popover = popover;
    this.plate = plate;
    this.hoursView = hoursView;
    this.minutesView = minutesView;
    this.amPmBlock = amPmBlock;
    this.spanHours = popover.find('.clockpicker-span-hours');
    this.spanMinutes = popover.find('.clockpicker-span-minutes');
    this.spanAmPm = popover.find('.clockpicker-span-am-pm');
    this.footer = popover.find('.picker__footer');
    this.amOrPm = "PM";

    // Setup for for 12 hour clock if option is selected
    if (options.twelvehour) {
      if (!options.ampmclickable) {
        this.spanAmPm.empty();
        $('<div id="click-am">AM</div>').appendTo(this.spanAmPm);
        $('<div id="click-pm">PM</div>').appendTo(this.spanAmPm);
      } else {
        this.spanAmPm.empty();
        $('<div id="click-am">AM</div>').on("click", function () {
          self.spanAmPm.children('#click-am').addClass("text-primary");
          self.spanAmPm.children('#click-pm').removeClass("text-primary");
          self.amOrPm = "AM";
        }).appendTo(this.spanAmPm);
        $('<div id="click-pm">PM</div>').on("click", function () {
          self.spanAmPm.children('#click-pm').addClass("text-primary");
          self.spanAmPm.children('#click-am').removeClass("text-primary");
          self.amOrPm = 'PM';
        }).appendTo(this.spanAmPm);
      }
    }

    // Add buttons to footer
    $('<button type="button" class="btn-flat picker__clear" tabindex="' + (options.twelvehour ? '3' : '1') + '">' + options.cleartext + '</button>').click($.proxy(this.clear, this)).appendTo(this.footer);
    $('<button type="button" class="btn-flat picker__close" tabindex="' + (options.twelvehour ? '3' : '1') + '">' + options.canceltext + '</button>').click($.proxy(this.hide, this)).appendTo(this.footer);
    $('<button type="button" class="btn-flat picker__close" tabindex="' + (options.twelvehour ? '3' : '1') + '">' + options.donetext + '</button>').click($.proxy(this.done, this)).appendTo(this.footer);

    this.spanHours.click($.proxy(this.toggleView, this, 'hours'));
    this.spanMinutes.click($.proxy(this.toggleView, this, 'minutes'));

    // Show or toggle
    input.on('focus.clockpicker click.clockpicker', $.proxy(this.show, this));

    // Build ticks
    var tickTpl = $('<div class="clockpicker-tick"></div>'),
        i,
        tick,
        radian,
        radius;

    // Hours view
    if (options.twelvehour) {
      for (i = 1; i < 13; i += 1) {
        tick = tickTpl.clone();
        radian = i / 6 * Math.PI;
        radius = outerRadius;
        tick.css({
          left: dialRadius + Math.sin(radian) * radius - tickRadius,
          top: dialRadius - Math.cos(radian) * radius - tickRadius
        });
        tick.html(i === 0 ? '00' : i);
        hoursView.append(tick);
        tick.on(mousedownEvent, mousedown);
      }
    } else {
      for (i = 0; i < 24; i += 1) {
        tick = tickTpl.clone();
        radian = i / 6 * Math.PI;
        var inner = i > 0 && i < 13;
        radius = inner ? innerRadius : outerRadius;
        tick.css({
          left: dialRadius + Math.sin(radian) * radius - tickRadius,
          top: dialRadius - Math.cos(radian) * radius - tickRadius
        });
        tick.html(i === 0 ? '00' : i);
        hoursView.append(tick);
        tick.on(mousedownEvent, mousedown);
      }
    }

    // Minutes view
    for (i = 0; i < 60; i += 5) {
      tick = tickTpl.clone();
      radian = i / 30 * Math.PI;
      tick.css({
        left: dialRadius + Math.sin(radian) * outerRadius - tickRadius,
        top: dialRadius - Math.cos(radian) * outerRadius - tickRadius
      });
      tick.html(leadingZero(i));
      minutesView.append(tick);
      tick.on(mousedownEvent, mousedown);
    }

    // Clicking on minutes view space
    plate.on(mousedownEvent, function (e) {
      if ($(e.target).closest('.clockpicker-tick').length === 0) {
        mousedown(e, true);
      }
    });

    // Mousedown or touchstart
    function mousedown(e, space) {
      var offset = plate.offset(),
          isTouch = /^touch/.test(e.type),
          x0 = offset.left + dialRadius,
          y0 = offset.top + dialRadius,
          dx = (isTouch ? e.originalEvent.touches[0] : e).pageX - x0,
          dy = (isTouch ? e.originalEvent.touches[0] : e).pageY - y0,
          z = Math.sqrt(dx * dx + dy * dy),
          moved = false;

      // When clicking on minutes view space, check the mouse position
      if (space && (z < outerRadius - tickRadius || z > outerRadius + tickRadius)) {
        return;
      }
      e.preventDefault();

      // Set cursor style of body after 200ms
      var movingTimer = setTimeout(function () {
        self.popover.addClass('clockpicker-moving');
      }, 200);

      // Clock
      self.setHand(dx, dy, !space, true);

      // Mousemove on document
      $doc.off(mousemoveEvent).on(mousemoveEvent, function (e) {
        e.preventDefault();
        var isTouch = /^touch/.test(e.type),
            x = (isTouch ? e.originalEvent.touches[0] : e).pageX - x0,
            y = (isTouch ? e.originalEvent.touches[0] : e).pageY - y0;
        if (!moved && x === dx && y === dy) {
          // Clicking in chrome on windows will trigger a mousemove event
          return;
        }
        moved = true;
        self.setHand(x, y, false, true);
      });

      // Mouseup on document
      $doc.off(mouseupEvent).on(mouseupEvent, function (e) {
        $doc.off(mouseupEvent);
        e.preventDefault();
        var isTouch = /^touch/.test(e.type),
            x = (isTouch ? e.originalEvent.changedTouches[0] : e).pageX - x0,
            y = (isTouch ? e.originalEvent.changedTouches[0] : e).pageY - y0;
        if ((space || moved) && x === dx && y === dy) {
          self.setHand(x, y);
        }

        if (self.currentView === 'hours') {
          self.toggleView('minutes', duration / 2);
        } else if (options.autoclose) {
          self.minutesView.addClass('clockpicker-dial-out');
          setTimeout(function () {
            self.done();
          }, duration / 2);
        }
        plate.prepend(canvas);

        // Reset cursor style of body
        clearTimeout(movingTimer);
        self.popover.removeClass('clockpicker-moving');

        // Unbind mousemove event
        $doc.off(mousemoveEvent);
      });
    }

    if (svgSupported) {
      // Draw clock hands and others
      var canvas = popover.find('.clockpicker-canvas'),
          svg = createSvgElement('svg');
      svg.setAttribute('class', 'clockpicker-svg');
      svg.setAttribute('width', diameter);
      svg.setAttribute('height', diameter);
      var g = createSvgElement('g');
      g.setAttribute('transform', 'translate(' + dialRadius + ',' + dialRadius + ')');
      var bearing = createSvgElement('circle');
      bearing.setAttribute('class', 'clockpicker-canvas-bearing');
      bearing.setAttribute('cx', 0);
      bearing.setAttribute('cy', 0);
      bearing.setAttribute('r', 4);
      var hand = createSvgElement('line');
      hand.setAttribute('x1', 0);
      hand.setAttribute('y1', 0);
      var bg = createSvgElement('circle');
      bg.setAttribute('class', 'clockpicker-canvas-bg');
      bg.setAttribute('r', tickRadius);
      g.appendChild(hand);
      g.appendChild(bg);
      g.appendChild(bearing);
      svg.appendChild(g);
      canvas.append(svg);

      this.hand = hand;
      this.bg = bg;
      this.bearing = bearing;
      this.g = g;
      this.canvas = canvas;
    }

    raiseCallback(this.options.init);
  }

  function raiseCallback(callbackFunction) {
    if (callbackFunction && typeof callbackFunction === "function") callbackFunction();
  }

  // Default options
  ClockPicker.DEFAULTS = {
    'default': '', // default time, 'now' or '13:14' e.g.
    fromnow: 0, // set default time to * milliseconds from now (using with default = 'now')
    donetext: 'Ok', // done button text
    cleartext: 'Clear',
    canceltext: 'Cancel',
    autoclose: false, // auto close when minute is selected
    ampmclickable: true, // set am/pm button on itself
    darktheme: false, // set to dark theme
    twelvehour: true, // change to 12 hour AM/PM clock from 24 hour
    vibrate: true // vibrate the device when dragging clock hand
  };

  // Show or hide popover
  ClockPicker.prototype.toggle = function () {
    this[this.isShown ? 'hide' : 'show']();
  };

  // Set popover position
  ClockPicker.prototype.locate = function () {
    var element = this.element,
        popover = this.popover,
        offset = element.offset(),
        width = element.outerWidth(),
        height = element.outerHeight(),
        align = this.options.align,
        self = this;

    popover.show();
  };

  // Show popover
  ClockPicker.prototype.show = function (e) {
    // Not show again
    if (this.isShown) {
      return;
    }
    raiseCallback(this.options.beforeShow);
    $(':input').each(function () {
      $(this).attr('tabindex', -1);
    });
    var self = this;
    // Initialize
    this.input.blur();
    this.popover.addClass('picker--opened');
    this.input.addClass('picker__input picker__input--active');
    $(document.body).css('overflow', 'hidden');
    // Get the time
    var value = ((this.input.prop('value') || this.options['default'] || '') + '').split(':');
    if (this.options.twelvehour && !(typeof value[1] === 'undefined')) {
      if (value[1].indexOf("AM") > 0) {
        this.amOrPm = 'AM';
      } else {
        this.amOrPm = 'PM';
      }
      value[1] = value[1].replace("AM", "").replace("PM", "");
    }
    if (value[0] === 'now') {
      var now = new Date(+new Date() + this.options.fromnow);
      value = [now.getHours(), now.getMinutes()];
      if (this.options.twelvehour) {
        this.amOrPm = value[0] >= 12 && value[0] < 24 ? 'PM' : 'AM';
      }
    }
    this.hours = +value[0] || 0;
    this.minutes = +value[1] || 0;
    this.spanHours.html(this.hours);
    this.spanMinutes.html(leadingZero(this.minutes));
    if (!this.isAppended) {

      // Append popover to input by default
      var containerEl = document.querySelector(this.options.container);
      if (this.options.container && containerEl) {
        containerEl.appendChild(this.popover[0]);
      } else {
        this.popover.insertAfter(this.input);
      }

      if (this.options.twelvehour) {
        if (this.amOrPm === 'PM') {
          this.spanAmPm.children('#click-pm').addClass("text-primary");
          this.spanAmPm.children('#click-am').removeClass("text-primary");
        } else {
          this.spanAmPm.children('#click-am').addClass("text-primary");
          this.spanAmPm.children('#click-pm').removeClass("text-primary");
        }
      }
      // Reset position when resize
      $win.on('resize.clockpicker' + this.id, function () {
        if (self.isShown) {
          self.locate();
        }
      });
      this.isAppended = true;
    }
    // Toggle to hours view
    this.toggleView('hours');
    // Set position
    this.locate();
    this.isShown = true;
    // Hide when clicking or tabbing on any element except the clock and input
    $doc.on('click.clockpicker.' + this.id + ' focusin.clockpicker.' + this.id, function (e) {
      var target = $(e.target);
      if (target.closest(self.popover.find('.picker__wrap')).length === 0 && target.closest(self.input).length === 0) {
        self.hide();
      }
    });
    // Hide when ESC is pressed
    $doc.on('keyup.clockpicker.' + this.id, function (e) {
      if (e.keyCode === 27) {
        self.hide();
      }
    });
    raiseCallback(this.options.afterShow);
  };
  // Hide popover
  ClockPicker.prototype.hide = function () {
    raiseCallback(this.options.beforeHide);
    this.input.removeClass('picker__input picker__input--active');
    this.popover.removeClass('picker--opened');
    $(document.body).css('overflow', 'visible');
    this.isShown = false;
    $(':input').each(function (index) {
      $(this).attr('tabindex', index + 1);
    });
    // Unbinding events on document
    $doc.off('click.clockpicker.' + this.id + ' focusin.clockpicker.' + this.id);
    $doc.off('keyup.clockpicker.' + this.id);
    this.popover.hide();
    raiseCallback(this.options.afterHide);
  };
  // Toggle to hours or minutes view
  ClockPicker.prototype.toggleView = function (view, delay) {
    var raiseAfterHourSelect = false;
    if (view === 'minutes' && $(this.hoursView).css("visibility") === "visible") {
      raiseCallback(this.options.beforeHourSelect);
      raiseAfterHourSelect = true;
    }
    var isHours = view === 'hours',
        nextView = isHours ? this.hoursView : this.minutesView,
        hideView = isHours ? this.minutesView : this.hoursView;
    this.currentView = view;

    this.spanHours.toggleClass('text-primary', isHours);
    this.spanMinutes.toggleClass('text-primary', !isHours);

    // Let's make transitions
    hideView.addClass('clockpicker-dial-out');
    nextView.css('visibility', 'visible').removeClass('clockpicker-dial-out');

    // Reset clock hand
    this.resetClock(delay);

    // After transitions ended
    clearTimeout(this.toggleViewTimer);
    this.toggleViewTimer = setTimeout(function () {
      hideView.css('visibility', 'hidden');
    }, duration);

    if (raiseAfterHourSelect) {
      raiseCallback(this.options.afterHourSelect);
    }
  };

  // Reset clock hand
  ClockPicker.prototype.resetClock = function (delay) {
    var view = this.currentView,
        value = this[view],
        isHours = view === 'hours',
        unit = Math.PI / (isHours ? 6 : 30),
        radian = value * unit,
        radius = isHours && value > 0 && value < 13 ? innerRadius : outerRadius,
        x = Math.sin(radian) * radius,
        y = -Math.cos(radian) * radius,
        self = this;

    if (svgSupported && delay) {
      self.canvas.addClass('clockpicker-canvas-out');
      setTimeout(function () {
        self.canvas.removeClass('clockpicker-canvas-out');
        self.setHand(x, y);
      }, delay);
    } else this.setHand(x, y);
  };

  // Set clock hand to (x, y)
  ClockPicker.prototype.setHand = function (x, y, roundBy5, dragging) {
    var radian = Math.atan2(x, -y),
        isHours = this.currentView === 'hours',
        unit = Math.PI / (isHours || roundBy5 ? 6 : 30),
        z = Math.sqrt(x * x + y * y),
        options = this.options,
        inner = isHours && z < (outerRadius + innerRadius) / 2,
        radius = inner ? innerRadius : outerRadius,
        value;

    if (options.twelvehour) {
      radius = outerRadius;
    }

    // Radian should in range [0, 2PI]
    if (radian < 0) {
      radian = Math.PI * 2 + radian;
    }

    // Get the round value
    value = Math.round(radian / unit);

    // Get the round radian
    radian = value * unit;

    // Correct the hours or minutes
    if (options.twelvehour) {
      if (isHours) {
        if (value === 0) value = 12;
      } else {
        if (roundBy5) value *= 5;
        if (value === 60) value = 0;
      }
    } else {
      if (isHours) {
        if (value === 12) value = 0;
        value = inner ? value === 0 ? 12 : value : value === 0 ? 0 : value + 12;
      } else {
        if (roundBy5) value *= 5;
        if (value === 60) value = 0;
      }
    }

    // Once hours or minutes changed, vibrate the device
    if (this[this.currentView] !== value) {
      if (vibrate && this.options.vibrate) {
        // Do not vibrate too frequently
        if (!this.vibrateTimer) {
          navigator[vibrate](10);
          this.vibrateTimer = setTimeout($.proxy(function () {
            this.vibrateTimer = null;
          }, this), 100);
        }
      }
    }

    this[this.currentView] = value;
    if (isHours) {
      this['spanHours'].html(value);
    } else {
      this['spanMinutes'].html(leadingZero(value));
    }

    // If svg is not supported, just add an active class to the tick
    if (!svgSupported) {
      this[isHours ? 'hoursView' : 'minutesView'].find('.clockpicker-tick').each(function () {
        var tick = $(this);
        tick.toggleClass('active', value === +tick.html());
      });
      return;
    }

    // Set clock hand and others' position
    var cx1 = Math.sin(radian) * (radius - tickRadius),
        cy1 = -Math.cos(radian) * (radius - tickRadius),
        cx2 = Math.sin(radian) * radius,
        cy2 = -Math.cos(radian) * radius;
    this.hand.setAttribute('x2', cx1);
    this.hand.setAttribute('y2', cy1);
    this.bg.setAttribute('cx', cx2);
    this.bg.setAttribute('cy', cy2);
  };

  // Hours and minutes are selected
  ClockPicker.prototype.done = function () {
    raiseCallback(this.options.beforeDone);
    this.hide();
    this.label.addClass('active');

    var last = this.input.prop('value'),
        value = leadingZero(this.hours) + ':' + leadingZero(this.minutes);
    if (this.options.twelvehour) {
      value = value + this.amOrPm;
    }

    this.input.prop('value', value);
    if (value !== last) {
      this.input.triggerHandler('change');
      if (!this.isInput) {
        this.element.trigger('change');
      }
    }

    if (this.options.autoclose) this.input.trigger('blur');

    raiseCallback(this.options.afterDone);
  };

  // Clear input field
  ClockPicker.prototype.clear = function () {
    this.hide();
    this.label.removeClass('active');

    var last = this.input.prop('value'),
        value = '';

    this.input.prop('value', value);
    if (value !== last) {
      this.input.triggerHandler('change');
      if (!this.isInput) {
        this.element.trigger('change');
      }
    }

    if (this.options.autoclose) {
      this.input.trigger('blur');
    }
  };

  // Remove clockpicker from input
  ClockPicker.prototype.remove = function () {
    this.element.removeData('clockpicker');
    this.input.off('focus.clockpicker click.clockpicker');
    if (this.isShown) {
      this.hide();
    }
    if (this.isAppended) {
      $win.off('resize.clockpicker' + this.id);
      this.popover.remove();
    }
  };

  // Extends $.fn.clockpicker
  $.fn.pickatime = function (option) {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.each(function () {
      var $this = $(this),
          data = $this.data('clockpicker');
      if (!data) {
        var options = $.extend({}, ClockPicker.DEFAULTS, $this.data(), typeof option == 'object' && option);
        $this.data('clockpicker', new ClockPicker($this, options));
      } else {
        // Manual operatsions. show, hide, remove, e.g.
        if (typeof data[option] === 'function') {
          data[option].apply(data, args);
        }
      }
    });
  };
})(jQuery);
;(function ($) {

  $.fn.characterCounter = function () {
    return this.each(function () {
      var $input = $(this);
      var $counterElement = $input.parent().find('span[class="character-counter"]');

      // character counter has already been added appended to the parent container
      if ($counterElement.length) {
        return;
      }

      var itHasLengthAttribute = $input.attr('data-length') !== undefined;

      if (itHasLengthAttribute) {
        $input.on('input', updateCounter);
        $input.on('focus', updateCounter);
        $input.on('blur', removeCounterElement);

        addCounterElement($input);
      }
    });
  };

  function updateCounter() {
    var maxLength = +$(this).attr('data-length'),
        actualLength = +$(this).val().length,
        isValidLength = actualLength <= maxLength;

    $(this).parent().find('span[class="character-counter"]').html(actualLength + '/' + maxLength);

    addInputStyle(isValidLength, $(this));
  }

  function addCounterElement($input) {
    var $counterElement = $input.parent().find('span[class="character-counter"]');

    if ($counterElement.length) {
      return;
    }

    $counterElement = $('<span/>').addClass('character-counter').css('float', 'right').css('font-size', '12px').css('height', 1);

    $input.parent().append($counterElement);
  }

  function removeCounterElement() {
    $(this).parent().find('span[class="character-counter"]').html('');
  }

  function addInputStyle(isValidLength, $input) {
    var inputHasInvalidClass = $input.hasClass('invalid');
    if (isValidLength && inputHasInvalidClass) {
      $input.removeClass('invalid');
    } else if (!isValidLength && !inputHasInvalidClass) {
      $input.removeClass('valid');
      $input.addClass('invalid');
    }
  }

  $(document).ready(function () {
    $('input, textarea').characterCounter();
  });
})(jQuery);
;(function ($) {

  var methods = {

    init: function (options) {
      var defaults = {
        duration: 200, // ms
        dist: -100, // zoom scale TODO: make this more intuitive as an option
        shift: 0, // spacing for center image
        padding: 0, // Padding between non center items
        fullWidth: false, // Change to full width styles
        indicators: false, // Toggle indicators
        noWrap: false, // Don't wrap around and cycle through items.
        onCycleTo: null // Callback for when a new slide is cycled to.
      };
      options = $.extend(defaults, options);
      var namespace = Materialize.objectSelectorString($(this));

      return this.each(function (i) {

        var images, item_width, item_height, offset, center, pressed, dim, count, reference, referenceY, amplitude, target, velocity, scrolling, xform, frame, timestamp, ticker, dragged, vertical_dragged;
        var $indicators = $('<ul class="indicators"></ul>');
        var scrollingTimeout = null;
        var oneTimeCallback = null;

        // Initialize
        var view = $(this);
        var hasMultipleSlides = view.find('.carousel-item').length > 1;
        var showIndicators = (view.attr('data-indicators') || options.indicators) && hasMultipleSlides;
        var noWrap = view.attr('data-no-wrap') || options.noWrap || !hasMultipleSlides;
        var uniqueNamespace = view.attr('data-namespace') || namespace + i;
        view.attr('data-namespace', uniqueNamespace);

        // Options
        var setCarouselHeight = function (imageOnly) {
          var firstSlide = view.find('.carousel-item.active').length ? view.find('.carousel-item.active').first() : view.find('.carousel-item').first();
          var firstImage = firstSlide.find('img').first();
          if (firstImage.length) {
            if (firstImage[0].complete) {
              // If image won't trigger the load event
              var imageHeight = firstImage.height();
              if (imageHeight > 0) {
                view.css('height', firstImage.height());
              } else {
                // If image still has no height, use the natural dimensions to calculate
                var naturalWidth = firstImage[0].naturalWidth;
                var naturalHeight = firstImage[0].naturalHeight;
                var adjustedHeight = view.width() / naturalWidth * naturalHeight;
                view.css('height', adjustedHeight);
              }
            } else {
              // Get height when image is loaded normally
              firstImage.on('load', function () {
                view.css('height', $(this).height());
              });
            }
          } else if (!imageOnly) {
            var slideHeight = firstSlide.height();
            view.css('height', slideHeight);
          }
        };

        if (options.fullWidth) {
          options.dist = 0;
          setCarouselHeight();

          // Offset fixed items when indicators.
          if (showIndicators) {
            view.find('.carousel-fixed-item').addClass('with-indicators');
          }
        }

        // Don't double initialize.
        if (view.hasClass('initialized')) {
          // Recalculate variables
          $(window).trigger('resize');

          // Redraw carousel.
          view.trigger('carouselNext', [0.000001]);
          return true;
        }

        view.addClass('initialized');
        pressed = false;
        offset = target = 0;
        images = [];
        item_width = view.find('.carousel-item').first().innerWidth();
        item_height = view.find('.carousel-item').first().innerHeight();
        dim = item_width * 2 + options.padding;

        view.find('.carousel-item').each(function (i) {
          images.push($(this)[0]);
          if (showIndicators) {
            var $indicator = $('<li class="indicator-item"></li>');

            // Add active to first by default.
            if (i === 0) {
              $indicator.addClass('active');
            }

            // Handle clicks on indicators.
            $indicator.click(function (e) {
              e.stopPropagation();

              var index = $(this).index();
              cycleTo(index);
            });
            $indicators.append($indicator);
          }
        });

        if (showIndicators) {
          view.append($indicators);
        }
        count = images.length;

        function setupEvents() {
          if (typeof window.ontouchstart !== 'undefined') {
            view.on('touchstart.carousel', tap);
            view.on('touchmove.carousel', drag);
            view.on('touchend.carousel', release);
          }
          view.on('mousedown.carousel', tap);
          view.on('mousemove.carousel', drag);
          view.on('mouseup.carousel', release);
          view.on('mouseleave.carousel', release);
          view.on('click.carousel', click);
        }

        function xpos(e) {
          // touch event
          if (e.targetTouches && e.targetTouches.length >= 1) {
            return e.targetTouches[0].clientX;
          }

          // mouse event
          return e.clientX;
        }

        function ypos(e) {
          // touch event
          if (e.targetTouches && e.targetTouches.length >= 1) {
            return e.targetTouches[0].clientY;
          }

          // mouse event
          return e.clientY;
        }

        function wrap(x) {
          return x >= count ? x % count : x < 0 ? wrap(count + x % count) : x;
        }

        function scroll(x) {
          // Track scrolling state
          scrolling = true;
          if (!view.hasClass('scrolling')) {
            view.addClass('scrolling');
          }
          if (scrollingTimeout != null) {
            window.clearTimeout(scrollingTimeout);
          }
          scrollingTimeout = window.setTimeout(function () {
            scrolling = false;
            view.removeClass('scrolling');
          }, options.duration);

          // Start actual scroll
          var i, half, delta, dir, tween, el, alignment, xTranslation;
          var lastCenter = center;

          offset = typeof x === 'number' ? x : offset;
          center = Math.floor((offset + dim / 2) / dim);
          delta = offset - center * dim;
          dir = delta < 0 ? 1 : -1;
          tween = -dir * delta * 2 / dim;
          half = count >> 1;

          if (!options.fullWidth) {
            alignment = 'translateX(' + (view[0].clientWidth - item_width) / 2 + 'px) ';
            alignment += 'translateY(' + (view[0].clientHeight - item_height) / 2 + 'px)';
          } else {
            alignment = 'translateX(0)';
          }

          // Set indicator active
          if (showIndicators) {
            var diff = center % count;
            var activeIndicator = $indicators.find('.indicator-item.active');
            if (activeIndicator.index() !== diff) {
              activeIndicator.removeClass('active');
              $indicators.find('.indicator-item').eq(diff).addClass('active');
            }
          }

          // center
          // Don't show wrapped items.
          if (!noWrap || center >= 0 && center < count) {
            el = images[wrap(center)];

            // Add active class to center item.
            if (!$(el).hasClass('active')) {
              view.find('.carousel-item').removeClass('active');
              $(el).addClass('active');
            }
            el.style[xform] = alignment + ' translateX(' + -delta / 2 + 'px)' + ' translateX(' + dir * options.shift * tween * i + 'px)' + ' translateZ(' + options.dist * tween + 'px)';
            el.style.zIndex = 0;
            if (options.fullWidth) {
              tweenedOpacity = 1;
            } else {
              tweenedOpacity = 1 - 0.2 * tween;
            }
            el.style.opacity = tweenedOpacity;
            el.style.display = 'block';
          }

          for (i = 1; i <= half; ++i) {
            // right side
            if (options.fullWidth) {
              zTranslation = options.dist;
              tweenedOpacity = i === half && delta < 0 ? 1 - tween : 1;
            } else {
              zTranslation = options.dist * (i * 2 + tween * dir);
              tweenedOpacity = 1 - 0.2 * (i * 2 + tween * dir);
            }
            // Don't show wrapped items.
            if (!noWrap || center + i < count) {
              el = images[wrap(center + i)];
              el.style[xform] = alignment + ' translateX(' + (options.shift + (dim * i - delta) / 2) + 'px)' + ' translateZ(' + zTranslation + 'px)';
              el.style.zIndex = -i;
              el.style.opacity = tweenedOpacity;
              el.style.display = 'block';
            }

            // left side
            if (options.fullWidth) {
              zTranslation = options.dist;
              tweenedOpacity = i === half && delta > 0 ? 1 - tween : 1;
            } else {
              zTranslation = options.dist * (i * 2 - tween * dir);
              tweenedOpacity = 1 - 0.2 * (i * 2 - tween * dir);
            }
            // Don't show wrapped items.
            if (!noWrap || center - i >= 0) {
              el = images[wrap(center - i)];
              el.style[xform] = alignment + ' translateX(' + (-options.shift + (-dim * i - delta) / 2) + 'px)' + ' translateZ(' + zTranslation + 'px)';
              el.style.zIndex = -i;
              el.style.opacity = tweenedOpacity;
              el.style.display = 'block';
            }
          }

          // center
          // Don't show wrapped items.
          if (!noWrap || center >= 0 && center < count) {
            el = images[wrap(center)];
            el.style[xform] = alignment + ' translateX(' + -delta / 2 + 'px)' + ' translateX(' + dir * options.shift * tween + 'px)' + ' translateZ(' + options.dist * tween + 'px)';
            el.style.zIndex = 0;
            if (options.fullWidth) {
              tweenedOpacity = 1;
            } else {
              tweenedOpacity = 1 - 0.2 * tween;
            }
            el.style.opacity = tweenedOpacity;
            el.style.display = 'block';
          }

          // onCycleTo callback
          if (lastCenter !== center && typeof options.onCycleTo === "function") {
            var $curr_item = view.find('.carousel-item').eq(wrap(center));
            options.onCycleTo.call(this, $curr_item, dragged);
          }

          // One time callback
          if (typeof oneTimeCallback === "function") {
            oneTimeCallback.call(this, $curr_item, dragged);
            oneTimeCallback = null;
          }
        }

        function track() {
          var now, elapsed, delta, v;

          now = Date.now();
          elapsed = now - timestamp;
          timestamp = now;
          delta = offset - frame;
          frame = offset;

          v = 1000 * delta / (1 + elapsed);
          velocity = 0.8 * v + 0.2 * velocity;
        }

        function autoScroll() {
          var elapsed, delta;

          if (amplitude) {
            elapsed = Date.now() - timestamp;
            delta = amplitude * Math.exp(-elapsed / options.duration);
            if (delta > 2 || delta < -2) {
              scroll(target - delta);
              requestAnimationFrame(autoScroll);
            } else {
              scroll(target);
            }
          }
        }

        function click(e) {
          // Disable clicks if carousel was dragged.
          if (dragged) {
            e.preventDefault();
            e.stopPropagation();
            return false;
          } else if (!options.fullWidth) {
            var clickedIndex = $(e.target).closest('.carousel-item').index();
            var diff = wrap(center) - clickedIndex;

            // Disable clicks if carousel was shifted by click
            if (diff !== 0) {
              e.preventDefault();
              e.stopPropagation();
            }
            cycleTo(clickedIndex);
          }
        }

        function cycleTo(n) {
          var diff = center % count - n;

          // Account for wraparound.
          if (!noWrap) {
            if (diff < 0) {
              if (Math.abs(diff + count) < Math.abs(diff)) {
                diff += count;
              }
            } else if (diff > 0) {
              if (Math.abs(diff - count) < diff) {
                diff -= count;
              }
            }
          }

          // Call prev or next accordingly.
          if (diff < 0) {
            view.trigger('carouselNext', [Math.abs(diff)]);
          } else if (diff > 0) {
            view.trigger('carouselPrev', [diff]);
          }
        }

        function tap(e) {
          // Fixes firefox draggable image bug
          if (e.type === 'mousedown' && $(e.target).is('img')) {
            e.preventDefault();
          }
          pressed = true;
          dragged = false;
          vertical_dragged = false;
          reference = xpos(e);
          referenceY = ypos(e);

          velocity = amplitude = 0;
          frame = offset;
          timestamp = Date.now();
          clearInterval(ticker);
          ticker = setInterval(track, 100);
        }

        function drag(e) {
          var x, delta, deltaY;
          if (pressed) {
            x = xpos(e);
            y = ypos(e);
            delta = reference - x;
            deltaY = Math.abs(referenceY - y);
            if (deltaY < 30 && !vertical_dragged) {
              // If vertical scrolling don't allow dragging.
              if (delta > 2 || delta < -2) {
                dragged = true;
                reference = x;
                scroll(offset + delta);
              }
            } else if (dragged) {
              // If dragging don't allow vertical scroll.
              e.preventDefault();
              e.stopPropagation();
              return false;
            } else {
              // Vertical scrolling.
              vertical_dragged = true;
            }
          }

          if (dragged) {
            // If dragging don't allow vertical scroll.
            e.preventDefault();
            e.stopPropagation();
            return false;
          }
        }

        function release(e) {
          if (pressed) {
            pressed = false;
          } else {
            return;
          }

          clearInterval(ticker);
          target = offset;
          if (velocity > 10 || velocity < -10) {
            amplitude = 0.9 * velocity;
            target = offset + amplitude;
          }
          target = Math.round(target / dim) * dim;

          // No wrap of items.
          if (noWrap) {
            if (target >= dim * (count - 1)) {
              target = dim * (count - 1);
            } else if (target < 0) {
              target = 0;
            }
          }
          amplitude = target - offset;
          timestamp = Date.now();
          requestAnimationFrame(autoScroll);

          if (dragged) {
            e.preventDefault();
            e.stopPropagation();
          }
          return false;
        }

        xform = 'transform';
        ['webkit', 'Moz', 'O', 'ms'].every(function (prefix) {
          var e = prefix + 'Transform';
          if (typeof document.body.style[e] !== 'undefined') {
            xform = e;
            return false;
          }
          return true;
        });

        var throttledResize = Materialize.throttle(function () {
          if (options.fullWidth) {
            item_width = view.find('.carousel-item').first().innerWidth();
            var imageHeight = view.find('.carousel-item.active').height();
            dim = item_width * 2 + options.padding;
            offset = center * 2 * item_width;
            target = offset;
            setCarouselHeight(true);
          } else {
            scroll();
          }
        }, 200);
        $(window).off('resize.carousel-' + uniqueNamespace).on('resize.carousel-' + uniqueNamespace, throttledResize);

        setupEvents();
        scroll(offset);

        $(this).on('carouselNext', function (e, n, callback) {
          if (n === undefined) {
            n = 1;
          }
          if (typeof callback === "function") {
            oneTimeCallback = callback;
          }

          target = dim * Math.round(offset / dim) + dim * n;
          if (offset !== target) {
            amplitude = target - offset;
            timestamp = Date.now();
            requestAnimationFrame(autoScroll);
          }
        });

        $(this).on('carouselPrev', function (e, n, callback) {
          if (n === undefined) {
            n = 1;
          }
          if (typeof callback === "function") {
            oneTimeCallback = callback;
          }

          target = dim * Math.round(offset / dim) - dim * n;
          if (offset !== target) {
            amplitude = target - offset;
            timestamp = Date.now();
            requestAnimationFrame(autoScroll);
          }
        });

        $(this).on('carouselSet', function (e, n, callback) {
          if (n === undefined) {
            n = 0;
          }
          if (typeof callback === "function") {
            oneTimeCallback = callback;
          }

          cycleTo(n);
        });
      });
    },
    next: function (n, callback) {
      $(this).trigger('carouselNext', [n, callback]);
    },
    prev: function (n, callback) {
      $(this).trigger('carouselPrev', [n, callback]);
    },
    set: function (n, callback) {
      $(this).trigger('carouselSet', [n, callback]);
    },
    destroy: function () {
      var uniqueNamespace = $(this).attr('data-namespace');
      $(this).removeAttr('data-namespace');
      $(this).removeClass('initialized');
      $(this).find('.indicators').remove();

      // Remove event handlers
      $(this).off('carouselNext carouselPrev carouselSet');
      $(window).off('resize.carousel-' + uniqueNamespace);
      if (typeof window.ontouchstart !== 'undefined') {
        $(this).off('touchstart.carousel touchmove.carousel touchend.carousel');
      }
      $(this).off('mousedown.carousel mousemove.carousel mouseup.carousel mouseleave.carousel click.carousel');
    }
  };

  $.fn.carousel = function (methodOrOptions) {
    if (methods[methodOrOptions]) {
      return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
      // Default to "init"
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + methodOrOptions + ' does not exist on jQuery.carousel');
    }
  }; // Plugin end
})(jQuery);
;(function ($) {

  var methods = {
    init: function (options) {
      return this.each(function () {
        var origin = $('#' + $(this).attr('data-activates'));
        var screen = $('body');

        // Creating tap target
        var tapTargetEl = $(this);
        var tapTargetWrapper = tapTargetEl.parent('.tap-target-wrapper');
        var tapTargetWave = tapTargetWrapper.find('.tap-target-wave');
        var tapTargetOriginEl = tapTargetWrapper.find('.tap-target-origin');
        var tapTargetContentEl = tapTargetEl.find('.tap-target-content');

        // Creating wrapper
        if (!tapTargetWrapper.length) {
          tapTargetWrapper = tapTargetEl.wrap($('<div class="tap-target-wrapper"></div>')).parent();
        }

        // Creating content
        if (!tapTargetContentEl.length) {
          tapTargetContentEl = $('<div class="tap-target-content"></div>');
          tapTargetEl.append(tapTargetContentEl);
        }

        // Creating foreground wave
        if (!tapTargetWave.length) {
          tapTargetWave = $('<div class="tap-target-wave"></div>');

          // Creating origin
          if (!tapTargetOriginEl.length) {
            tapTargetOriginEl = origin.clone(true, true);
            tapTargetOriginEl.addClass('tap-target-origin');
            tapTargetOriginEl.removeAttr('id');
            tapTargetOriginEl.removeAttr('style');
            tapTargetWave.append(tapTargetOriginEl);
          }

          tapTargetWrapper.append(tapTargetWave);
        }

        // Open
        var openTapTarget = function () {
          if (tapTargetWrapper.is('.open')) {
            return;
          }

          // Adding open class
          tapTargetWrapper.addClass('open');

          setTimeout(function () {
            tapTargetOriginEl.off('click.tapTarget').on('click.tapTarget', function (e) {
              closeTapTarget();
              tapTargetOriginEl.off('click.tapTarget');
            });

            $(document).off('click.tapTarget').on('click.tapTarget', function (e) {
              closeTapTarget();
              $(document).off('click.tapTarget');
            });

            var throttledCalc = Materialize.throttle(function () {
              calculateTapTarget();
            }, 200);
            $(window).off('resize.tapTarget').on('resize.tapTarget', throttledCalc);
          }, 0);
        };

        // Close
        var closeTapTarget = function () {
          if (!tapTargetWrapper.is('.open')) {
            return;
          }

          tapTargetWrapper.removeClass('open');
          tapTargetOriginEl.off('click.tapTarget');
          $(document).off('click.tapTarget');
          $(window).off('resize.tapTarget');
        };

        // Pre calculate
        var calculateTapTarget = function () {
          // Element or parent is fixed position?
          var isFixed = origin.css('position') === 'fixed';
          if (!isFixed) {
            var parents = origin.parents();
            for (var i = 0; i < parents.length; i++) {
              isFixed = $(parents[i]).css('position') == 'fixed';
              if (isFixed) {
                break;
              }
            }
          }

          // Calculating origin
          var originWidth = origin.outerWidth();
          var originHeight = origin.outerHeight();
          var originTop = isFixed ? origin.offset().top - $(document).scrollTop() : origin.offset().top;
          var originLeft = isFixed ? origin.offset().left - $(document).scrollLeft() : origin.offset().left;

          // Calculating screen
          var windowWidth = $(window).width();
          var windowHeight = $(window).height();
          var centerX = windowWidth / 2;
          var centerY = windowHeight / 2;
          var isLeft = originLeft <= centerX;
          var isRight = originLeft > centerX;
          var isTop = originTop <= centerY;
          var isBottom = originTop > centerY;
          var isCenterX = originLeft >= windowWidth * 0.25 && originLeft <= windowWidth * 0.75;
          var isCenterY = originTop >= windowHeight * 0.25 && originTop <= windowHeight * 0.75;

          // Calculating tap target
          var tapTargetWidth = tapTargetEl.outerWidth();
          var tapTargetHeight = tapTargetEl.outerHeight();
          var tapTargetTop = originTop + originHeight / 2 - tapTargetHeight / 2;
          var tapTargetLeft = originLeft + originWidth / 2 - tapTargetWidth / 2;
          var tapTargetPosition = isFixed ? 'fixed' : 'absolute';

          // Calculating content
          var tapTargetTextWidth = isCenterX ? tapTargetWidth : tapTargetWidth / 2 + originWidth;
          var tapTargetTextHeight = tapTargetHeight / 2;
          var tapTargetTextTop = isTop ? tapTargetHeight / 2 : 0;
          var tapTargetTextBottom = 0;
          var tapTargetTextLeft = isLeft && !isCenterX ? tapTargetWidth / 2 - originWidth : 0;
          var tapTargetTextRight = 0;
          var tapTargetTextPadding = originWidth;
          var tapTargetTextAlign = isBottom ? 'bottom' : 'top';

          // Calculating wave
          var tapTargetWaveWidth = originWidth > originHeight ? originWidth * 2 : originWidth * 2;
          var tapTargetWaveHeight = tapTargetWaveWidth;
          var tapTargetWaveTop = tapTargetHeight / 2 - tapTargetWaveHeight / 2;
          var tapTargetWaveLeft = tapTargetWidth / 2 - tapTargetWaveWidth / 2;

          // Setting tap target
          var tapTargetWrapperCssObj = {};
          tapTargetWrapperCssObj.top = isTop ? tapTargetTop : '';
          tapTargetWrapperCssObj.right = isRight ? windowWidth - tapTargetLeft - tapTargetWidth : '';
          tapTargetWrapperCssObj.bottom = isBottom ? windowHeight - tapTargetTop - tapTargetHeight : '';
          tapTargetWrapperCssObj.left = isLeft ? tapTargetLeft : '';
          tapTargetWrapperCssObj.position = tapTargetPosition;
          tapTargetWrapper.css(tapTargetWrapperCssObj);

          // Setting content
          tapTargetContentEl.css({
            width: tapTargetTextWidth,
            height: tapTargetTextHeight,
            top: tapTargetTextTop,
            right: tapTargetTextRight,
            bottom: tapTargetTextBottom,
            left: tapTargetTextLeft,
            padding: tapTargetTextPadding,
            verticalAlign: tapTargetTextAlign
          });

          // Setting wave
          tapTargetWave.css({
            top: tapTargetWaveTop,
            left: tapTargetWaveLeft,
            width: tapTargetWaveWidth,
            height: tapTargetWaveHeight
          });
        };

        if (options == 'open') {
          calculateTapTarget();
          openTapTarget();
        }

        if (options == 'close') closeTapTarget();
      });
    },
    open: function () {},
    close: function () {}
  };

  $.fn.tapTarget = function (methodOrOptions) {
    if (methods[methodOrOptions] || typeof methodOrOptions === 'object') return methods.init.apply(this, arguments);

    $.error('Method ' + methodOrOptions + ' does not exist on jQuery.tap-target');
  };
})(jQuery);

;
//# sourceMappingURL=scripts.js.map