!function(){var e={660:function(e){e.exports='<svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 11.718L1.3 5.26951L0.25 6.45739L7 14.0938L18.25 1.36648L17.2 0.09375L7 11.718Z" fill="#68B738"></path></svg>'},991:function(e){e.exports='<svg width="41" height="77" viewBox="0 0 41 77" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.3284 0.491638L34.0097 49.7546L18.2403 54.7679L0.962509 6.64827L20.3284 0.491638ZM33.5129 75.5003C30.8386 76.3505 28.2478 76.1461 25.7406 74.887C23.2491 73.5975 21.5862 71.6004 20.7517 68.8957C19.8931 66.2748 20.1122 63.7301 21.409 61.2617C22.7288 58.786 24.7259 57.123 27.4003 56.2728C29.9363 55.4665 32.4694 55.6893 34.9997 56.9411C37.553 58.1855 39.259 60.1182 40.1176 62.7391C40.6662 64.5447 40.7139 66.3318 40.2608 68.1004C39.8235 69.8387 39.0178 71.3768 37.8439 72.7146C36.6626 74.0294 35.219 74.9579 33.5129 75.5003Z" fill="#FF8282"></path></svg>'},576:function(){"use strict";const e=document.querySelectorAll(".blackout");for(let t of e)t.addEventListener("click",(()=>{t.parentElement.classList.remove("modal-window-visible"),document.querySelector("body").classList.remove("scroll-prohibited")}))}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";const e=window.matchMedia("(max-width: 1025px)"),t=window.matchMedia("(max-width: 540px)"),n=document.querySelector(".header"),i=document.querySelector(".header .main-menu"),r=document.querySelectorAll(".header .main-menu__item"),a=document.querySelector(".burger-menu"),d=document.querySelector(".burger-menu__close-btn"),s=document.querySelector(".header__burger-btn"),g=window.location.pathname,c=document.querySelector(".modal-window");function m(){for(let e of r){const t=e.href.replace(/^.*?:\/\/.*?(?=\/|$)/,"");g===t&&(e.classList.contains("main-menu__item_white")?(e.classList.remove("main-menu__item_active-green-border"),e.classList.add("main-menu__item_active-white-border")):(e.classList.remove("main-menu__item_active-white-border"),e.classList.add("main-menu__item_active-green-border")))}}function l(){return"/"===g}function u(){return e.matches}!function(){if(!e.matches)for(let e of r)"/"===g&&e.classList.add("main-menu__item_white")}(),m(),t.matches&&a.insertAdjacentElement("afterbegin",i),s.addEventListener("click",(()=>{a.classList.add("burger-menu_visible")})),d.addEventListener("click",(()=>{a.classList.remove("burger-menu_visible")}));let p=0,_=0;function w(){n.classList.add("header_transparent")}l()&&_<100&&!u()&&(w(),m()),window.addEventListener("scroll",(()=>{if(_=window.pageYOffset||document.body.scrollTop,!u()&&l())if(_>280){for(let e of r)e.classList.remove("main-menu__item_white");n.classList.remove("header_transparent"),m()}else{for(let e of r)e.classList.add("main-menu__item_white");w(),m()}_>p&&_>100?n.classList.add("header_hidden"):n.classList.remove("header_hidden"),p=_}));let y={lat:59.9393,lng:30.315},h=new google.maps.Size(113,106),x=new google.maps.Size(113,106),f=16;const v=document.getElementById("map"),L={lat:59.93881322009013,lng:30.32305812754065};function S(){e.matches&&(y=L,f=15),t.matches&&(h=new google.maps.Size(57,53),x=new google.maps.Size(57,53),f=16);const o={url:"assets/images/map-marker.png",size:h,scaledSize:x},n=new google.maps.Map(v,{zoom:f,center:y});new google.maps.Marker({position:L,map:n,icon:o})}window.initMap=S,S();const b=document.querySelector(".map"),q=b.querySelector(".map__invite");function E(e){return e.cloneNode(!0)}function C(e,t){t.appendChild(e)}!l()&&u()&&(b.classList.add("map_grey"),q.classList.add("map__invite_grey")),o(576);var O=JSON.parse('[{"symbol":"success","event":"add order to cart","icon":"done.pug","title":"Товар добавлен в мифическую корзину","text":"Корзина не предусмотрена макетом и чтобы у страницы было какое-то логическое завершение верстальщик добавил это модальное окно."},{"symbol":"success","event":"application sent","icon":"done.pug","title":"Заявка отправлена","text":"Заявка на подбор программы питания вашего питомца отправлена"},{"symbol":"error","event":"application not sent","icon":"warning.svg","title":"Заявка не отправлена","text":"Заявка не отправлена. Заполните все обязательные поля"}]'),P=o(660),T=o.n(P);o(991);const k=document.querySelector("body");function R(e,t){e.querySelector(t).addEventListener("click",(e=>{e.preventDefault(),function(e,t){const o=c.querySelector(".modal-window__icon"),n=c.querySelector(".modal-window__title"),i=c.querySelector(".modal-window__text");for(let t=0;t<O.length;t++)O[t].symbol===e&&"add order to cart"===O[t].event&&(n.innerText=O[t].title,i.innerText=O[t].text,o.innerHTML=T(),n.classList.contains("modal-window__title_error")&&n.classList.remove("modal-window__title_error"))}("success"),c.classList.add("modal-window-visible"),k.classList.add("scroll-prohibited")}))}function M(e,t,o,n){e.querySelector(".good-card__title").innerText=o[t].name,e.querySelector(".good-card__image img").src="assets/images/goods/"+o[t].image,e.querySelector(".good-card__image source").srcset="assets/images/goods/"+o[t]["image-x2"]+" 2x, assets/images/goods/"+o[t].image,e.querySelector(".good-card__image img").alt=o[t].name;let i=e.querySelector(".good-card__properties"),r=Object.keys(o[t].properties);for(let a=0;a<r.length;a++){let d="";switch(r[a]){case"масса":d=" г.";break;case"цена":d=" ₽";break;default:d=""}let s=n.cloneNode(!0);s.querySelector(".good-card__property-name").innerText=r[a],s.querySelector(".good-card__property-value").innerText=o[t].properties[r[a]]+d,R(e,".good-card__add-to-order-button"),C(s,i)}let a="for-animation-"+t;e.querySelector(".good-card").classList.add(a)}function B(e,t){let o=".for-animation-"+t;document.querySelector(o).classList.add("good-card_animation")}function z(e,t){let o;return o=1===e?"":e<5?"а":"ов"," "+t+o}function I(e,t,o,n){t.length===n&&e.classList.add("show-more-goods_hidden")}!function(e,t,o){let n=document.querySelector(".modal-window");e.addEventListener("click",(()=>{n.classList.remove("modal-window-visible"),document.querySelector("body").classList.remove("scroll-prohibited")}))}(c.querySelector(".modal-window__close-btn"));var N=JSON.parse('[{"name":"Cat Energy PRO 500 г","properties":{"масса":500,"вкус":"Курица","цена":700},"image":"good-1.png","image-x2":"good-1-x2.png","id":1},{"name":"Cat Energy PRO 1000 г","properties":{"масса":1000,"вкус":"Курица","цена":1000},"image":"good-2.png","image-x2":"good-2-x2.png","id":2},{"name":"Cat Energy PRO 500 г","properties":{"масса":500,"вкус":"Рыба","цена":700},"image":"good-3.png","image-x2":"good-3-x2.png","id":3},{"name":"Cat Energy PRO 1000 г","properties":{"масса":1000,"вкус":"Рыба","цена":1000},"image":"good-4.png","image-x2":"good-4-x2.png","id":4},{"name":"Cat Energy slim 500 г","properties":{"масса":500,"вкус":"Гречка","цена":400},"image":"good-5.png","image-x2":"good-5-x2.png","id":5},{"name":"Cat Energy slim 1000 г","properties":{"масса":1000,"вкус":"Гречка","цена":700},"image":"good-6.png","image-x2":"good-6-x2.png","id":6},{"name":"Cat Energy slim 500 г","properties":{"масса":500,"вкус":"Рис","цена":500},"image":"good-7.png","image-x2":"good-7-x2.png","id":7},{"name":"Cat Energy PRO 500 г","properties":{"масса":500,"вкус":"Курица","цена":700},"image":"good-1.png","image-x2":"good-1-x2.png","id":1},{"name":"Cat Energy PRO 1000 г","properties":{"масса":1000,"вкус":"Курица","цена":1000},"image":"good-2.png","image-x2":"good-2-x2.png","id":2},{"name":"Cat Energy PRO 500 г","properties":{"масса":500,"вкус":"Курица","цена":700},"image":"good-1.png","image-x2":"good-1-x2.png","id":1},{"name":"Cat Energy PRO 1000 г","properties":{"масса":1000,"вкус":"Курица","цена":1000},"image":"good-2.png","image-x2":"good-2-x2.png","id":2},{"name":"Cat Energy PRO 500 г","properties":{"масса":500,"вкус":"Рыба","цена":700},"image":"good-3.png","image-x2":"good-3-x2.png","id":3},{"name":"Cat Energy PRO 1000 г","properties":{"масса":1000,"вкус":"Рыба","цена":1000},"image":"good-4.png","image-x2":"good-4-x2.png","id":4},{"name":"Cat Energy slim 500 г","properties":{"масса":500,"вкус":"Гречка","цена":400},"image":"good-5.png","image-x2":"good-5-x2.png","id":5},{"name":"Cat Energy slim 1000 г","properties":{"масса":1000,"вкус":"Гречка","цена":700},"image":"good-6.png","image-x2":"good-6-x2.png","id":6},{"name":"Cat Energy slim 500 г","properties":{"масса":500,"вкус":"Рис","цена":500},"image":"good-7.png","image-x2":"good-7-x2.png","id":7},{"name":"Cat Energy PRO 500 г","properties":{"масса":500,"вкус":"Курица","цена":700},"image":"good-1.png","image-x2":"good-1-x2.png","id":1},{"name":"Cat Energy PRO 1000 г","properties":{"масса":1000,"вкус":"Курица","цена":1000},"image":"good-2.png","image-x2":"good-2-x2.png","id":2}]');const j=document.getElementById("good-card-template").content,A=j.getElementById("good-card-property-template").content,J=document.getElementById("goods"),Z=document.getElementById("show-more-goods-template"),D=document.querySelector(".show-more-goods__show-more-button");let F=0,H=0,Y=7;function $(){let e=F,t=F+Y;N.length<Y+F&&(t=N.length);for(let o=e;o<t;o++){let e=E(j);M(e,o,N,A),C(e,J),++F,setTimeout((()=>{B(0,o)}),H),H+=100}(function(e,t,o,n){let i=t.length-o;i>0&&(e.querySelector(".show-more-goods__number-of-goods").innerText=i,e.querySelector(".show-more-goods__last-word").innerText=function(e,t){return z(e>20?e%10:e,t)}(i,n))})(Z,N,F,"товар"),H=0}N.length<Y&&(Y=N.length),$(),Y=8,I(Z,N,0,F),D.addEventListener("click",(e=>{e.preventDefault(),$(),I(Z,N,0,F)}));var G=JSON.parse('[{"name":"Сахарозаменитель","amount":1,"units":"упаковка","weight":100,"weight-units":"г","price":200},{"name":"Питьевая вода","amount":5,"units":"литр","price":50},{"name":"молоко","amount":1,"units":"литр","price":100},{"name":"витамины","amount":1,"units":"упаковка","weight":30,"weight-units":"г","price":300}]');const K=document.querySelector(".additional-goods__goods-container"),Q=document.getElementById("additional-good-card-template").content;!function(){for(let e=0;e<G.length;e++){let t=G[e],o=E(Q);o.querySelector(".additional-good-card__name").innerText=t.name,o.querySelector(".additional-good-card__amount").innerText=t.amount+" "+t.units,t.weight&&(o.querySelector(".additional-good-card__weight").innerText=" ("+t.weight+" "+t["weight-units"]+")"),o.querySelector(".additional-good-card__price").innerText=t.price+" ₽",R(o,".additional-good-card__button-add-to-order"),C(o,K)}}()}()}();