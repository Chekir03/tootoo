/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("/*\r\n// récupérer un élément\r\nconst btnStart= document.querySelector(\"#timerStart\"); \r\n\r\nconst sayHeloo=()=>{\r\n    // Modifier l'apparence d'un élément\r\n    \r\n    btnStart.classList.add(\"d-none\");\r\n    console.log(\"Hello\");\r\n    console.log(\"je click\");\r\n};\r\nsayHeloo();\r\n//  Ajouter un élément\r\nbtnStart.addEventListener(\"click\",sayHeloo); */\n\n/*\r\nconst start=()=> {\r\n    btnStart.classList.replace(\"d-blolck\",\"d-none\");\r\n    btnStart.classList.replace(\"d-none\",\"d-block\");\r\n}\r\n\r\nconst pause=()=>{\r\n    btnStart.classList.replace(\"d-blolck\",\"d-none\");\r\n    btnStart.classList.replace(\"d-none\",\"d-block\");\r\n\r\n}\r\nconst resume=()=>{\r\n    btnStart.classList.replace(\"d-blolck\",\"d-none\");\r\n    btnStart.classList.replace(\"d-none\",\"d-block\");\r\n\r\n}\r\nbtnStart.addEventListener(\"click\",start);\r\nbtnStart.addEventListener(\"click\",pause);\r\nbtnStart.addEventListener(\"click\",resume);*/\n\n//# sourceURL=webpack://html-training/./src/app.js?");

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://html-training/./src/app.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/app.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;