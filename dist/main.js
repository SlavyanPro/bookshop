/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/index.html":(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r='<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r\n    <title>Bookshop</title>\r\n</head>\r\n<body>\r\n    <div class="header-wrapper">\r\n        <header class="header container">\r\n            <span class="header__logo">Bookshop</span>\r\n            <nav class="header__menu">\r\n                <a href="#" class="menu__link menu__link_selected">Books</a>\r\n                <a href="#" class="menu__link">Audiobooks</a>\r\n                <a href="#" class="menu__link">Stationery & gifts</a>\r\n                <a href="#" class="menu__link">Blog</a>\r\n            </nav>\r\n            <nav class="header__control">\r\n                <a href="#" class="control__item user-btn"></a>\r\n                <a href="#" class="control__item search-btn"></a>\r\n                <a href="#" class="control__item cart-btn">\r\n                    <span class="cart-btn__count cart-btn__count_empty" id="cart-count"></span>\r\n                </a>\r\n            </nav>\r\n        </header>\r\n    </div>\r\n    <div class="banner container">\r\n        <div class="slider">\r\n            <div class="slider__images"></div>\r\n            <div class="slider__dots"></div>\r\n        </div>\r\n        <div class="banner__promo">\r\n            <a href="banner__link banner__link_blue">Change pld book on new</a>\r\n            <a href="banner__link banner__link_pink">Top 100 books 2022</a>\r\n        </div>\r\n    </div>\r\n    <div class="content container">\r\n        <aside class="sidebar">\r\n            <nav class="categories">\r\n                <ul>\r\n                    <li><a href="" class="categories__item categories__item_selected" data-category="Architecture">Architecture</a></li>\r\n                    <li><a href="#" class="categories__item" data-category="Art">Art & Fashion</a></li>\r\n                    <li><a href="#" class="categories__item" data-category="Biography & Autoboigraphy">Boigraphy</a></li>\r\n                    <li><a href="#" class="categories__item" data-category="Business">Business</a></li>\r\n                    <li><a href="#" class="categories__item" data-category="Hobbies">Crafts & Hobbies</a></li>\r\n                    <li><a href="#" class="categories__item" data-category="Drama">Drama</a></li>\r\n                    <li><a href="#" class="categories__item" data-category="Fiction">Fiction</a></li>\r\n                    <li><a href="#" class="categories__item" data-category="Cooking">Food & Drink</a></li>\r\n                    <li><a href="#" class="categories__item" data-category="Health & Fitness">Health & Wellbeing</a></li>\r\n                    <li><a href="#" class="categories__item" data-category="History">History & Politics</a></li>\r\n                    <li><a href="#" class="categories__item" data-category="Humor">Humor</a></li>\r\n                    <li><a href="#" class="categories__item" data-category="Poetry">Poetry</a></li>\r\n                    <li><a href="#" class="categories__item" data-category="Psychology">Psychology</a></li>\r\n                    <li><a href="#" class="categories__item" data-category="Science">Science</a></li>\r\n                    <li><a href="#" class="categories__item" data-category="Technology">Technology</a></li>\r\n                    <li><a href="#" class="categories__item" data-category="Travel">Travel & Maps</a></li>\r\n                </ul>\r\n            </nav>\r\n        </aside>\r\n        <main class="main">\r\n            <div id="product-list" class="products-list"></div>\r\n            <button id="btn-load" class="btn btn_load">Load more</button>\r\n        </main>\r\n    </div>\r\n</body>\r\n</html>'},"./src/sass/style.scss":(e,t,a)=>{a.r(t)},"./src/js/cart.js":(e,t,a)=>{a.r(t),a.d(t,{getSelectedBookInfo:()=>c,setCartIcon:()=>n});var r=a("./src/js/localStorage.js");const s=document.getElementById("cart-count"),n=e=>{localStorage.length&&(s.classList.remove("cart-btn__count_empty"),s.textContent=e)},o=(e,t)=>{e.innerHTML="In the cart",e.classList.add("btn_in-cart"),s.classList.remove("cart-btn__count_empty"),s.textContent=t},i=e=>{if(localStorage.length)for(let t=0;t<localStorage.length;t++)localStorage.key(t)===e.dataset.bookid&&(e.innerHTML="In the cart",e.classList.add("btn_in-cart"))},c=e=>{for(let t of e)i(t),t.addEventListener("click",(e=>{const t=e.target.parentElement.parentElement,a={id:"",thumbnail:"",author:"",title:"",description:"",price:""};for(let e in a){let r=t.querySelector(`[data-book-info = "${e}"]`);r&&"id"===e?a[e]=r.dataset.bookid:r&&"thumbnail"===e?a[e]=r.getAttribute("src"):r&&(a[e]=r.textContent)}var n,i;e.target.classList.contains("btn_in-cart")?((0,r.removeLocalStorage)(t,"id"),n=e.target,i=localStorage.length,n.innerHTML="Buy now",n.classList.remove("btn_in-cart"),0===i&&s.classList.add("cart-btn__count_empty"),s.textContent=i):((0,r.setLocalStorage)(a),o(e.target,localStorage.length))}))}},"./src/js/localStorage.js":(e,t,a)=>{a.r(t),a.d(t,{removeLocalStorage:()=>s,setLocalStorage:()=>r});const r=e=>{localStorage.getItem(`${e.id}`)||localStorage.setItem(`${e.id}`,JSON.stringify(e))},s=(e,t)=>{let a=e.querySelector(`[data-book-info = "${t}"]`).dataset.bookid;localStorage.removeItem(a)};localStorage.clear()},"./src/js/main.js":(e,t,a)=>{a.r(t);var r=a("./src/js/renderProdList.js"),s=a("./src/js/cart.js");const n=document.getElementById("btn-load"),o=document.querySelectorAll(".categories__item"),i="https://www.googleapis.com/books/v1/volumes",c={category:"Architecture",startIndex:0,maxResults:6,langRestrict:"en"},l=e=>{let t=document.querySelector(".categories__item_selected").dataset.category;return c.category=t,!0===e&&(c.startIndex=0),c},d=(e,t,a,r)=>{let s=`${e}?q="subject:${c.category}"&AAIzaSyBl1iZvgZjHb7VaVl8UCSIZSzAMEG5cJVc&printType=books&startIndex=${c.startIndex}&maxResults=${c.maxResults}&langRestrict=${c.langRestrict}`;fetch(s).then((e=>e.json())).then((e=>{a(e,r)})).catch((e=>console.log(e.message)))};o.forEach((e=>e.addEventListener("click",(t=>{t.preventDefault(),(e=>{let t=e;document.querySelector(".categories__item_selected").classList.remove("categories__item_selected"),t.classList.add("categories__item_selected")})(e),l(!0),d(i,0,r.renderBooksList,!0)})))),n.addEventListener("click",(()=>{l().startIndex+=6,d(i,0,r.renderBooksList,!1)})),(0,s.setCartIcon)(localStorage.length),d(i,0,r.renderBooksList,!1)},"./src/js/renderProdList.js":(e,t,a)=>{a.r(t),a.d(t,{renderBooksList:()=>i});var r=a("./src/assets/no_photo.png"),s=a("./src/assets/icons/star-filled.svg"),n=a("./src/assets/icons/star.svg"),o=a("./src/js/cart.js");const i=(e,t)=>{let a=document.getElementById("product-list"),i=null;t&&(a.innerHTML=""),e.items.forEach((e=>{let t=null,o=e.id,i="",c="",l="",d="",g="",u="";if(t=e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.thumbnail:r,e.volumeInfo.authors){let t=e.volumeInfo.authors,a="";t.forEach(((e,t,r)=>{t===r.length-1?a+=`${e}`:a+=`${e}, `})),i=`<p class="product__author" data-book-info="author">${a}</p>`}if(e.volumeInfo.title&&(c=`<h1 class="product__title" data-book-info="title">${e.volumeInfo.title}</h1>`),e.volumeInfo.averageRating){let t=e.volumeInfo.ratingsCount;l=`<div class="product__rating">\n        <div class="rating__stars">\n        <img src=${s} alt="Icon" class="star">\n        <img src=${s} alt="Icon" class="star">\n        <img src=${s}  alt="Icon" class="star">\n        <img src=${n}  alt="Icon" class="star">\n        <img src=${n}  alt="Icon" class="star">\n        </div>\n        <span class="review-nums">${t} review</span>\n        </div>`}if(e.volumeInfo.description&&e.volumeInfo.description.length>90?d=`<p class="product__description" data-book-info="description">${e.volumeInfo.description.slice(0,91)+"..."}</p>`:e.volumeInfo.description&&(d=`<p class="product__description" data-book-info="description">${e.volumeInfo.description}</p>`),e.saleInfo.listPrice){let t=e.saleInfo.listPrice.amount;const a=98;g=`<div class="product__price">\n        <span class="price__currency">$</span><span class="price__value" data-book-info="price">${Math.floor(100*t/a)/100}</span>\n        </div>`}u=`<div class="products-list__item product">\n    <img src="${t}" alt="Book cover" class="product__img" data-book-info="thumbnail">\n    <div class="product__card">\n    ${i}\n    ${c}\n    ${l}\n    ${d}\n    ${g}\n    <button class="btn buy-button" data-book-info="id" data-bookid="${o}">Buy now</button>\n    </div>\n    </div>`,a.insertAdjacentHTML("beforeend",u)})),i=document.getElementsByClassName("buy-button"),(0,o.getSelectedBookInfo)(i)}},"./src/js/slider.js":(e,t,a)=>{a.r(t);let r=[{url:a("./src/assets/slider/banner.jpg")},{url:a("./src/assets/slider/banner-2.jpg")},{url:a("./src/assets/slider/banner-3.jpg")}];let s={titles:!1,dots:!0,autoplay:!0,autoplayInterval:5e3};document.addEventListener("DOMContentLoaded",(function(){!function(e){if(!r||!r.length)return;e=e||{titles:!0,dots:!0,autoplay:!1};let t=document.querySelector(".slider__images"),a=document.querySelector(".slider__dots");function s(s){t.querySelector(".active").classList.remove("active"),t.querySelector(".n"+s).classList.add("active"),e.dots&&(a.querySelector(".active").classList.remove("active"),a.querySelector(".n"+s).classList.add("active")),e.titles&&function(e){r[e].title&&(t.querySelector(".slider__images-title").innerText=r[e].title)}(s)}r.forEach(((e,a)=>{let s=`<div class="image n${a} ${0===a?"active":""}" style="background-image:url(${r[a].url})" data-index="${a}"></div>`;t.innerHTML+=s})),e.dots&&(r.forEach(((e,t)=>{let r=`<div class="slider__dots-item n${t} ${0===t?"active":""}" data-index="${t}"></div>`;a.innerHTML+=r})),a.querySelectorAll(".slider__dots-item").forEach((e=>{e.addEventListener("click",(e=>{s(e.target.dataset.index)}))}))),e.titles&&function(){let e=`<div class="slider__images-title">${r[0].title}</div>`;t.innerHTML+=e}(),e.autoplay&&setInterval((()=>{let e=+t.querySelector(".active").dataset.index;s(e===r.length-1?0:e+1)}),e.autoplayInterval)}(s)}))},"./src/assets/icons/star-filled.svg":(e,t,a)=>{e.exports=a.p+"e376cccbc8f00d095ff1.svg"},"./src/assets/icons/star.svg":(e,t,a)=>{e.exports=a.p+"b7733d7fef79909394bf.svg"},"./src/assets/no_photo.png":(e,t,a)=>{e.exports=a.p+"bb351cb89344cf5316c4.png"},"./src/assets/slider/banner-2.jpg":(e,t,a)=>{e.exports=a.p+"9172ba7f572b52525ef5.jpg"},"./src/assets/slider/banner-3.jpg":(e,t,a)=>{e.exports=a.p+"6ce7bfb9b6e688c62f60.jpg"},"./src/assets/slider/banner.jpg":(e,t,a)=>{e.exports=a.p+"28eee7a0de75ce88712c.jpg"}},t={};function a(r){var s=t[r];if(void 0!==s)return s.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,a),n.exports}a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var s=r.length-1;s>-1&&!e;)e=r[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})();var r={};a.r(r),a("./src/js/main.js"),a("./src/js/slider.js"),a("./src/sass/style.scss"),a("./src/index.html")})();
//# sourceMappingURL=main.js.map