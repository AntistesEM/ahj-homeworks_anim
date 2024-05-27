/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 742:
/***/ (() => {

const textEl = document.querySelector(".text");
const buttonEl = document.querySelector(".btn-сollapse");
buttonEl.addEventListener("click", () => {
  textEl.classList.toggle("open");
});

/***/ }),

/***/ 914:
/***/ (() => {

class Like {
  constructor(container) {
    this.container = container;
    this.variants = ["like-animation-1", "like-animation-2", "like-animation-3", "like-animation-4"];
    this.init();
  }
  init() {
    const likeButton = document.createElement("button");
    likeButton.classList.add("like-button");
    likeButton.textContent = "Like";
    const likeIcon = document.createElement("img");
    likeIcon.src = "./img/heart.png";
    likeIcon.classList.add("like-icon");
    likeButton.appendChild(likeIcon);
    this.container.appendChild(likeButton);
    const buttonLike = document.querySelector(".like-button");
    buttonLike.addEventListener("click", () => {
      this.animation(buttonLike);
    });
  }
  animation(buttonLike) {
    const likeIcon = this.container.querySelector(".like-icon");
    const likeElement = likeIcon.cloneNode(true);
    likeElement.classList.add("like-animation");
    likeElement.style.animationName = this.getRandomElement(this.variants);
    buttonLike.appendChild(likeElement);
    likeElement.addEventListener("animationend", () => {
      likeElement.remove();
    });
  }
  getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}
new Like(document.querySelector("body"));

/***/ }),

/***/ 425:
/***/ (() => {

class Widget {
  constructor(container) {
    this.container = container;
    this.init();
  }
  init() {
    const widgetWrap = document.createElement("div");
    widgetWrap.classList.add("widget-wrap");
    const btnWidgetOpen = document.createElement("button");
    btnWidgetOpen.classList.add("btn-widget-open");
    btnWidgetOpen.setAttribute("type", "button");
    widgetWrap.appendChild(btnWidgetOpen);
    this.container.appendChild(widgetWrap);
    this.createWidget();
    this.addEventListeners();
  }
  createWidget() {
    const widgetWrap = this.container.querySelector(".widget-wrap");
    const widget = document.createElement("div");
    widget.classList.add("widget");
    const widgetTitle = document.createElement("div");
    widgetTitle.classList.add("widget-title");
    const h2 = document.createElement("h2");
    h2.textContent = "Напишите нам";
    widgetTitle.appendChild(h2);
    const widgetContent = document.createElement("textarea");
    widgetContent.classList.add("widget-content");
    const widgetButton = document.createElement("div");
    widgetButton.classList.add("widget-button");
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.setAttribute("type", "submit");
    btn.textContent = "Отправить";
    widgetButton.appendChild(btn);
    const btnWidgetClose = document.createElement("span");
    btnWidgetClose.classList.add("span-close");
    widget.appendChild(btnWidgetClose);
    widget.appendChild(widgetTitle);
    widget.appendChild(widgetContent);
    widget.appendChild(widgetButton);
    widgetWrap.insertBefore(widget, widgetWrap.firstChild);
  }
  addEventListeners() {
    const btnWidgetOpen = this.container.querySelector(".btn-widget-open");
    const widget = this.container.querySelector(".widget");
    btnWidgetOpen.addEventListener("click", () => {
      widget.classList.add("open-widget");
      btnWidgetOpen.classList.add("btn-widget-open-hidden");
    });
    const btnWidgetClose = this.container.querySelector(".span-close");
    btnWidgetClose.addEventListener("click", () => {
      widget.classList.remove("open-widget");
      widget.classList.add("close-widget");
      widget.addEventListener("animationend", () => {
        widget.classList.remove("close-widget");
      });
      btnWidgetOpen.classList.remove("btn-widget-open-hidden");
    });
  }
}
new Widget(document.querySelector("body"));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/js/Collapse.js
var Collapse = __webpack_require__(742);
// EXTERNAL MODULE: ./src/js/widget.js
var widget = __webpack_require__(425);
// EXTERNAL MODULE: ./src/js/Like.js
var Like = __webpack_require__(914);
;// CONCATENATED MODULE: ./src/js/app.js



;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
})();

/******/ })()
;