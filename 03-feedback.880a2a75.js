function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var i,r,o,a,u,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,o=r;return i=r=void 0,c=t,a=e.apply(o,n)}function j(e){return c=e,u=setTimeout(w,t),l?b(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=o}function w(){var e=v();if(h(e))return T(e);u=setTimeout(w,function(e){var n=t-(e-f);return s?m(n,o-(e-c)):n}(e))}function T(e){return u=void 0,p&&i?b(e):(i=r=void 0,a)}function x(){var e=v(),n=h(e);if(i=arguments,r=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(w,t),b(f)}return void 0===u&&(u=setTimeout(w,t)),a}return t=g(t)||0,y(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(g(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),x.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=f=r=u=void 0},x.flush=function(){return void 0===u?a:T(v())},x}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),j=b.querySelector("input[name=email]"),h=b.querySelector("textarea[name=message]");b.addEventListener("input",e(t)((()=>{const e={email:j.value,message:h.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),b.addEventListener("submit",(e=>{e.preventDefault();const t=j.value.trim(),n=h.value.trim();if(!t||!n)return;const i={email:t,message:n};console.log(i),localStorage.removeItem("feedback-form-state"),b.reset()}));
//# sourceMappingURL=03-feedback.880a2a75.js.map
