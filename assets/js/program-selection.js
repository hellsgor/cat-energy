!function(){var e={660:function(e){e.exports='<svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 11.718L1.3 5.26951L0.25 6.45739L7 14.0938L18.25 1.36648L17.2 0.09375L7 11.718Z" fill="#68B738"></path></svg>'},991:function(e){e.exports='<svg width="41" height="77" viewBox="0 0 41 77" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.3284 0.491638L34.0097 49.7546L18.2403 54.7679L0.962509 6.64827L20.3284 0.491638ZM33.5129 75.5003C30.8386 76.3505 28.2478 76.1461 25.7406 74.887C23.2491 73.5975 21.5862 71.6004 20.7517 68.8957C19.8931 66.2748 20.1122 63.7301 21.409 61.2617C22.7288 58.786 24.7259 57.123 27.4003 56.2728C29.9363 55.4665 32.4694 55.6893 34.9997 56.9411C37.553 58.1855 39.259 60.1182 40.1176 62.7391C40.6662 64.5447 40.7139 66.3318 40.2608 68.1004C39.8235 69.8387 39.0178 71.3768 37.8439 72.7146C36.6626 74.0294 35.219 74.9579 33.5129 75.5003Z" fill="#FF8282"></path></svg>'},439:function(){"use strict";document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".radio-group").forEach((e=>{e.querySelectorAll("input").forEach((t=>{t.addEventListener("change",(()=>{return n=e,void(t.checked&&!n.classList.contains("radio_valid")&&n.classList.add("radio_valid"));var n}))}))}))}))},576:function(){"use strict";const e=document.querySelectorAll(".blackout");for(let t of e)t.addEventListener("click",(()=>{t.parentElement.classList.remove("modal-window-visible"),document.querySelector("body").classList.remove("scroll-prohibited")}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";const e=window.matchMedia("(max-width: 1025px)"),t=window.matchMedia("(max-width: 540px)"),o=document.querySelector(".header"),r=document.querySelector(".header .main-menu"),i=document.querySelectorAll(".header .main-menu__item"),a=document.querySelector(".burger-menu"),s=document.querySelector(".burger-menu__close-btn"),l=document.querySelector(".header__burger-btn"),c=window.location.pathname,d=document.querySelector(".modal-window");function u(){let e="/";return"hellsgor.github.io"===window.location.hostname&&(e="/cat-energy/"),c===e||"index.html"===c}function m(){for(let e of i){const t=e.href.replace(/^.*?:\/\/.*?(?=\/|$)/,"");c===t&&(e.classList.contains("main-menu__item_white")?(e.classList.remove("main-menu__item_active-green-border"),e.classList.add("main-menu__item_active-white-border")):(e.classList.remove("main-menu__item_active-white-border"),e.classList.add("main-menu__item_active-green-border")))}}function f(){return e.matches}!function(){if(!e.matches)for(let e of i)u()&&e.classList.add("main-menu__item_white")}(),m(),t.matches&&a.insertAdjacentElement("afterbegin",r),l.addEventListener("click",(()=>{a.classList.add("burger-menu_visible")})),s.addEventListener("click",(()=>{a.classList.remove("burger-menu_visible")}));let p=0,v=0;function _(){o.classList.add("header_transparent")}u()&&v<100&&!f()&&(_(),m()),window.addEventListener("scroll",(()=>{if(v=window.pageYOffset||document.body.scrollTop,!f()&&u())if(v>280){for(let e of i)e.classList.remove("main-menu__item_white");o.classList.remove("header_transparent"),m()}else{for(let e of i)e.classList.add("main-menu__item_white");_(),m()}v>p&&v>100?o.classList.add("header_hidden"):o.classList.remove("header_hidden"),p=v}));let g={lat:59.9393,lng:30.315},h=new google.maps.Size(113,106),w=new google.maps.Size(113,106),L=16;const y=document.getElementById("map"),b={lat:59.93881322009013,lng:30.32305812754065};function S(){e.matches&&(g=b,L=15),t.matches&&(h=new google.maps.Size(57,53),w=new google.maps.Size(57,53),L=16);const n={url:"assets/images/map-marker.png",size:h,scaledSize:w},o=new google.maps.Map(y,{zoom:L,center:g});new google.maps.Marker({position:b,map:o,icon:n})}window.initMap=S,S();const E=document.querySelector(".map"),q=E.querySelector(".map__invite");function x(e){return e.value.replace(/\D/g,"")}!u()&&f()&&(E.classList.add("map_grey"),q.classList.add("map__invite_grey")),document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll("input[type=number]").forEach((e=>{e.addEventListener("input",(()=>{e.value=x(e)}));const t=e.parentNode.querySelector(".input__number-button_up"),n=e.parentNode.querySelector(".input__number-button_down");t.addEventListener("click",(()=>{var t;(t=e).value?t.value=Number(t.value)+1:t.value=1})),n.addEventListener("click",(()=>{var t;(t=e).value<=.5?t.value="":t.value=Number(t.value)-1}))}))})),document.addEventListener("DOMContentLoaded",(function(){let e=document.querySelectorAll("input[data-tel-input]"),t=function(e){let t=e.target,n=x(t),o=e.clipboardData||window.clipboardData;if(o){let e=o.getData("Text");/\D/g.test(e)&&(t.value=n)}},n=function(e){let t=e.target,n=x(t),o=t.selectionStart,r="";if(!n)return t.value="";if(t.value.length===o){if(["7","8","9"].indexOf(n[0])>-1){"9"===n[0]&&(n="7"+n);let e="8"===n[0]?"8":"+7";r=t.value=e+" ",n.length>1&&(r+="("+n.substring(1,4)),n.length>=5&&(r+=") "+n.substring(4,7)),n.length>=8&&(r+="-"+n.substring(7,9)),n.length>=10&&(r+="-"+n.substring(9,11))}else r="+"+n.substring(0,16);t.value=r}else e.data&&/\D/g.test(e.data)&&(t.value=n)},o=function(e){let t=e.target.value.replace(/\D/g,"");8===e.keyCode&&1===t.length&&(e.target.value="")};for(let r of e)r.addEventListener("keydown",o),r.addEventListener("input",n,!1),r.addEventListener("paste",t,!1)})),n(439),n(576);var k=JSON.parse('[{"symbol":"success","event":"add order to cart","icon":"done.pug","title":"Товар добавлен в мифическую корзину","text":"Корзина не предусмотрена макетом и чтобы у страницы было какое-то логическое завершение верстальщик добавил это модальное окно."},{"symbol":"success","event":"application sent","icon":"done.pug","title":"Заявка отправлена","text":"Заявка на подбор программы питания вашего питомца отправлена"},{"symbol":"error","event":"application not sent","icon":"warning.svg","title":"Заявка не отправлена","text":"Заявка не отправлена. Заполните все обязательные поля"}]'),C=n(660),M=n.n(C),A=n(991),D=n.n(A);const N=document.querySelector("body");function z(e,t){const n=d.querySelector(".modal-window__icon"),o=d.querySelector(".modal-window__title"),r=d.querySelector(".modal-window__text");for(let i=0;i<k.length;i++)k[i].symbol===e&&k[i].event===t&&(o.innerText=k[i].title,r.innerText=k[i].text,"success"===e?(n.innerHTML=M(),o.classList.contains("modal-window__title_error")&&o.classList.remove("modal-window__title_error")):(n.innerHTML=D(),o.classList.add("modal-window__title_error")))}function O(){d.classList.add("modal-window-visible"),N.classList.add("scroll-prohibited")}!function(e,t,n){let o=document.querySelector(".modal-window");e.addEventListener("click",(()=>{o.classList.remove("modal-window-visible"),document.querySelector("body").classList.remove("scroll-prohibited")}))}(d.querySelector(".modal-window__close-btn"));let T=[];const B=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/,Z=/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;function j(e,t){return e.value.length<t?(e.classList.add("input__item_error"),1):(e.classList.contains("input__item_error")&&e.classList.remove("input__item_error"),0)}async function F(e){const t=e.querySelectorAll("input","textarea"),n=function(e,t){const n=e.querySelectorAll("textarea");if(n.length>0){let e=Array.from(t);return n.forEach((t=>{e.push(t)})),e}}(e,t),o=function(e){let t=[];return e.forEach((e=>{e.required&&t.push(e)})),t}(n);if(function(e){e.forEach((e=>{e.classList.contains("input__item_error")?e.classList.remove("input__item_error"):e.parentNode.classList.contains("radio_error")&&e.parentNode.classList.remove("radio_error")}))}(o),!(function(e){let t=0;return e.forEach((e=>{if("text"===e.type){let n=j(e,3);t+=n}else if("number"===e.type){let n=j(e,1);t+=n}else if(e.parentNode.classList.contains("radio-group")){if(!T.includes(e.parentNode)){T.push(e.parentNode);let n=function(e){let t=e.querySelectorAll("input[type=radio]"),n=!1;return t.forEach((e=>{e.checked&&(n=!0)})),!1===n?(e.classList.add("radio_error"),1):0}(e.parentNode);t+=n}}else if("email"===e.type||"tel"===e.type){let n=function(e){return B.test(e.value)||Z.test(e.value)?0:(e.classList.add("input__item_error"),1)}(e);t+=n}})),t}(o)>0)){new FormData(e);const{status:t}=await async function(e,t){try{let e=await fetch("/assets/json/server-answer.json",{method:"GET"});if(e.ok)return e;console.log("Ошибка HTTP: "+e.status)}catch(e){console.log(e)}}();return(t>=200||t<=299)&&function(e){e.forEach((e=>{switch(e.type){case"radio":!function(e,t){t.checked=!1,(e.classList.contains("radio_valid")||e.classList.contains("radio_error"))&&e.classList.remove("radio_valid")}(e.parentNode,e);break;case"checkbox":!function(e){e.checked=!1}(e);break;default:!function(e){e.value="","#ffffff"!==e.style.backgroundColor&&(e.style.backgroundColor="#ffffff")}(e)}}))}(n),t}z("error","application not sent"),O()}document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("program-selection-button"),t=document.getElementById("program-selection-form");e.addEventListener("click",(e=>{e.preventDefault(),F(t).then((e=>{let t,n;return e>=200||e<=299?(t="success",n="application sent"):(t="error",n="application not sent"),[t,n]})).then((e=>{z(e[0],e[1]),O()}))}))}))}()}();