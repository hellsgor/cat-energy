!function(){var e={38:function(){const e=document.querySelector(".was-became"),t=e.querySelector("input"),n=e.querySelectorAll(".range__button"),i=e.querySelector(".was-became__was"),a=e.querySelector(".was-became__became"),s=e.querySelector(".toggle"),o=e.querySelector(".toggle__line");t.max=a.clientWidth,t.value=Math.round(a.clientWidth/2),t.addEventListener("input",(e=>{let{target:t}=e;i.style.width=t.value+"px"}));for(let e of n)e.addEventListener("click",(()=>{e.classList.contains("range__button_left")?r():e.classList.contains("range__button_right")&&l()}));function r(){t.value=t.min,i.style.width=t.min+"px",o.classList.remove("toggle__line_right"),o.classList.add("toggle__line_left")}function l(){t.value=t.max,i.style.width=t.max+"px",o.classList.remove("toggle__line_left"),o.classList.add("toggle__line_right")}s.addEventListener("click",(()=>{o.classList.contains("toggle__line_right")?r():o.classList.contains("toggle__line_left")?l():(t.value=t.min,i.style.width=t.min+"px",o.classList.add("toggle__line_left"))}))}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}!function(){"use strict";const e=window.matchMedia("(max-width: 1025px)"),t=window.matchMedia("(max-width: 540px)"),i=document.querySelector(".header"),a=document.querySelector(".header .main-menu"),s=document.querySelectorAll(".header .main-menu__item"),o=document.querySelector(".burger-menu"),r=document.querySelector(".burger-menu__close-btn"),l=document.querySelector(".header__burger-btn"),c=window.location.pathname;function m(){for(let e of s){const t=e.href.replace(/^.*?:\/\/.*?(?=\/|$)/,"");c===t&&(e.classList.contains("main-menu__item_white")?(e.classList.remove("main-menu__item_active-green-border"),e.classList.add("main-menu__item_active-white-border")):(e.classList.remove("main-menu__item_active-white-border"),e.classList.add("main-menu__item_active-green-border")))}}function d(){return"/"===c||"/index.html"===c}function u(){return e.matches}console.log("currentUrl",window.location.pathname),document.querySelector(".modal-window"),function(){if(!e.matches)for(let e of s)"/"===c&&e.classList.add("main-menu__item_white")}(),m(),t.matches&&o.insertAdjacentElement("afterbegin",a),l.addEventListener("click",(()=>{o.classList.add("burger-menu_visible")})),r.addEventListener("click",(()=>{o.classList.remove("burger-menu_visible")}));let _=0,g=0;function h(){i.classList.add("header_transparent")}d()&&g<100&&!u()&&(h(),m()),window.addEventListener("scroll",(()=>{if(g=window.pageYOffset||document.body.scrollTop,!u()&&d())if(g>280){for(let e of s)e.classList.remove("main-menu__item_white");i.classList.remove("header_transparent"),m()}else{for(let e of s)e.classList.add("main-menu__item_white");h(),m()}g>_&&g>100?i.classList.add("header_hidden"):i.classList.remove("header_hidden"),_=g}));let p={lat:59.9393,lng:30.315},w=new google.maps.Size(113,106),f=new google.maps.Size(113,106),v=16;const L=document.getElementById("map"),y={lat:59.93881322009013,lng:30.32305812754065};function b(){e.matches&&(p=y,v=15),t.matches&&(w=new google.maps.Size(57,53),f=new google.maps.Size(57,53),v=16);const n={url:"assets/images/map-marker.png",size:w,scaledSize:f},i=new google.maps.Map(L,{zoom:v,center:p});new google.maps.Marker({position:y,map:i,icon:n})}window.initMap=b,b();const S=document.querySelector(".map"),q=S.querySelector(".map__invite");!d()&&u()&&(S.classList.add("map_grey"),q.classList.add("map__invite_grey")),n(38);const x=document.querySelector(".live-example__background-for-was-became"),E=document.querySelector(".live-example__was-became");e.matches&&x.appendChild(E)}()}();