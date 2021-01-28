function stacking(){function e(){}if(e.hasClass=function(e,t){return e.classList?e.classList.contains(t):!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))},e.addClass=function(t,n){var i=n.split(" ");t.classList?t.classList.add(i[0]):e.hasClass(t,i[0])||(t.className+=" "+i[0]),i.length>1&&e.addClass(t,i.slice(1).join(" "))},e.removeClass=function(t,n){var i=n.split(" ");if(t.classList)t.classList.remove(i[0]);else if(e.hasClass(t,i[0])){var s=new RegExp("(\\s|^)"+i[0]+"(\\s|$)");t.className=t.className.replace(s," ")}i.length>1&&e.removeClass(t,i.slice(1).join(" "))},e.toggleClass=function(t,n,i){i?e.addClass(t,n):e.removeClass(t,n)},e.setAttributes=function(e,t){for(var n in t)e.setAttribute(n,t[n])},e.getChildrenByClassName=function(t,n){t.children;for(var i=[],s=0;s<t.children.length;s++)e.hasClass(t.children[s],n)&&i.push(t.children[s]);return i},e.is=function(e,t){if(t.nodeType)return e===t;for(var n="string"==typeof t?document.querySelectorAll(t):t,i=n.length;i--;)if(n[i]===e)return!0;return!1},e.setHeight=function(e,t,n,i,s){var o=t-e,r=null,a=function(t){r||(r=t);var l=t-r,c=parseInt(l/i*o+e);n.style.height=c+"px",l<i?window.requestAnimationFrame(a):s()};n.style.height=e+"px",window.requestAnimationFrame(a)},e.scrollTo=function(e,t,n,i){var s=i||window,o=s.scrollTop||document.documentElement.scrollTop,r=null;i||(o=window.scrollY||document.documentElement.scrollTop);var a=function(i){r||(r=i);var l=i-r;l>t&&(l=t);var c=Math.easeInOutQuad(l,o,e-o,t);s.scrollTo(0,c),l<t?window.requestAnimationFrame(a):n&&n()};window.requestAnimationFrame(a)},e.moveFocus=function(e){e||(e=document.getElementsByTagName("body")[0]),e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus())},e.getIndexInArray=function(e,t){return Array.prototype.indexOf.call(e,t)},e.cssSupports=function(e,t){return"CSS"in window?CSS.supports(e,t):e.replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()}))in document.body.style},e.extend=function(){var e={},t=!1,n=0,i=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var s=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=extend(!0,e[i],n[i]):e[i]=n[i])};n<i;n++){var o=arguments[n];s(o)}return e},e.osHasReducedMotion=function(){if(!window.matchMedia)return!1;var e=window.matchMedia("(prefers-reduced-motion: reduce)");return!!e&&e.matches},Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(t))return null;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}),"function"!=typeof window.CustomEvent){function t(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}t.prototype=window.Event.prototype,window.CustomEvent=t}Math.easeInOutQuad=function(e,t,n,i){return(e/=i/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},function(){var e=document.getElementsByClassName("js-tab-focus");function t(){e.length>0&&(i(!1),window.addEventListener("keydown",n)),window.removeEventListener("mousedown",t)}function n(e){9===e.keyCode&&(i(!0),window.removeEventListener("keydown",n),window.addEventListener("mousedown",t))}function i(t){for(var n=t?"":"none",i=0;i<e.length;i++)e[i].style.setProperty("outline",n)}window.addEventListener("mousedown",t)}(),function(){var n=function(e){this.element=e,this.items=this.element.getElementsByClassName("js-stack-cards__item"),this.scrollingFn=!1,this.scrolling=!1,function(e){o(e),new IntersectionObserver(i.bind(e),{threshold:[0,1]}).observe(e.element)}(this),function(e){e.element.addEventListener("resize-stack-cards",(function(){o(e),r.bind(e)}))}(this)};function i(e){if(e[0].isIntersecting){if(this.scrollingFn)return;(t=this).scrollingFn=s.bind(t),window.addEventListener("scroll",t.scrollingFn)}else{if(!this.scrollingFn)return;window.removeEventListener("scroll",this.scrollingFn),this.scrollingFn=!1}var t}function s(){this.scrolling||(this.scrolling=!0,window.requestAnimationFrame(r.bind(this)))}function o(e){e.marginY="20px",function(e){var t=document.createElement("div");t.setAttribute("style","opacity:0; visbility: hidden;position: absolute; height:"+e.marginY),e.element.appendChild(t),e.marginY=parseInt(getComputedStyle(t).getPropertyValue("height")),e.element.removeChild(t)}(e),e.elementHeight=e.element.offsetHeight;var t=getComputedStyle(e.items[0]);e.cardTop=Math.floor(parseFloat(t.getPropertyValue("top"))),e.cardHeight=Math.floor(parseFloat(t.getPropertyValue("height"))),e.windowHeight=window.innerHeight,isNaN(e.marginY)?e.element.style.paddingBottom="0px":e.element.style.paddingBottom=e.marginY*(e.items.length-1)+"px";for(var n=0;n<e.items.length;n++)isNaN(e.marginY)?e.items[n].style.transform="none;":e.items[n].style.transform="translateY("+e.marginY*n+"px)"}function r(){if(isNaN(this.marginY))this.scrolling=!1;else{var e=this.element.getBoundingClientRect().top;if(this.cardTop-e+this.element.windowHeight-this.elementHeight-this.cardHeight+this.marginY+this.marginY*this.items.length>0)this.scrolling=!1;else{for(var t=0;t<this.items.length;t++){var n=this.cardTop-e-t*(this.cardHeight+this.marginY);if(n>0){var i=t==this.items.length-1?1:(this.cardHeight-.05*n)/this.cardHeight;this.items[t].style.transform="translateY("+this.marginY*t+"px) scale("+i+")"}else this.items[t].style.transform="translateY("+this.marginY*t+"px)"}this.scrolling=!1}}}var a=document.getElementsByClassName("js-stack-cards"),l="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype,c=e.osHasReducedMotion();if(a.length>0&&l&&!c){for(var d=[],u=0;u<a.length;u++)!function(e){d.push(new n(a[e]))}(u);var m=!1,h=new t("resize-stack-cards");function g(){for(var e=0;e<d.length;e++)!function(e){d[e].element.dispatchEvent(h)}(e)}window.addEventListener("resize",(function(){clearTimeout(m),m=setTimeout(g,500)}))}}()}stacking();