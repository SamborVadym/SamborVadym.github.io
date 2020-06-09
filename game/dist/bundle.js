/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_game_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/game.scss */ \"./src/scss/game.scss\");\n/* harmony import */ var _scss_game_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_game_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/game.js */ \"./src/js/game.js\");\n/* harmony import */ var _js_game_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_game_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function myGame() {\n    let blockGame = document.querySelector('#game');\n\n    let blockStartGame = document.createElement('div');\n    blockStartGame.className = 'content-start';\n    blockGame.appendChild(blockStartGame);\n\n    let inputTime = document.createElement('input');\n    inputTime.className = 'content-start-input';\n    inputTime.id = 'input-time';\n    inputTime.type = 'number';\n    blockStartGame.appendChild(inputTime);\n\n    let buttonStart = document.createElement('button');\n    buttonStart.className = 'content-start-btn';\n    buttonStart.type = 'button';\n    buttonStart.disabled = true;\n    buttonStart.innerHTML = 'start game';\n    blockStartGame.appendChild(buttonStart);\n\n    let helperText = document.createElement('p');\n    helperText.className = 'helper-text';\n    helperText.style.textAlign = 'center';\n    helperText.innerHTML = 'The entered value can not be less than 0, or pinch 0';\n    blockStartGame.appendChild(helperText);\n\n\n    let players = document.createElement('div');\n    players.className = 'players';\n    blockGame.appendChild(players);\n\n    let player = document.createElement('p');\n    player.innerHTML = 'Player';\n    players.appendChild(player);\n\n    let playerClicked = document.createElement('span');\n    playerClicked.innerHTML = '0';\n    player.appendChild(playerClicked);\n\n    let computer = document.createElement('p');\n    computer.innerHTML = `Computer`;\n    players.appendChild(computer);\n\n    let computerClicked = document.createElement('span');\n    computerClicked.innerHTML = '0';\n    computer.appendChild(computerClicked);\n\n    (function validInput() {\n\n        let pattern = {\n            helperText: function () {\n                if (inputTime.value > 0) {\n                    return true;\n                }\n            }\n        };\n\n        inputTime.addEventListener('keyup', function () {\n            patternTest(pattern.helperText());\n\n            if (helperText) {\n                helperText.classList.add('valid');\n            } else {\n                helperText.classList.add('invalid');\n            }\n            return true;\n        });\n\n        function patternTest(pattern) {\n            if (pattern) {\n                inputTime.classList.add('valid');\n                inputTime.classList.remove('invalid');\n                helperText.classList.add('valid');\n                helperText.classList.remove('invalid');\n                buttonStart.disabled = false;\n            } else {\n                inputTime.classList.add('invalid');\n                inputTime.classList.remove('valid');\n                helperText.classList.add('invalid');\n                helperText.classList.remove('valid');\n                buttonStart.disabled = true;\n            }\n            return false\n        }\n\n    })();\n\n\n    function createTable() {\n        let i;\n        let j;\n        let rowsValue = 10;\n        let columnsValue = 10;\n\n        let table = document.createElement('table');\n        table.className = 'content-table';\n\n        for (i = 1; i <= rowsValue; i++) {\n            let tr = table.insertRow();\n            tr.className = 'content-table-tr';\n            for (j = 1; j <= columnsValue; j++) {\n                let td = tr.insertCell();\n                td.className = 'content-table-td block-game';\n                td.i = i;\n                td.j = j;\n                // td.setAttribute('number-block', `${td.i}-${td.j}`);\n            }\n        }\n        blockGame.appendChild(table);\n    }\n\n    createTable();\n\n    buttonStart.addEventListener('click', function () {\n        inputTime.disabled = true;\n        buttonStart.disabled = true;\n        let lights = document.getElementsByClassName(\"block-game\");\n        let previousRandomLight = null;\n        let timeGame = document.getElementById('input-time').value;\n        let timer;\n\n        function repeatOften() {\n            if (previousRandomLight) previousRandomLight.id = ('loose');\n            let random = Math.floor(Math.random() * (lights.length - 1));\n            let randomLight = lights[random];\n            randomLight.id = ('active');\n            randomLight.classList.remove('block-game');\n            randomLight.classList.add('clicked-false');\n            previousRandomLight = randomLight;\n\n            let falseClicked = document.getElementsByClassName('clicked-false').length - 1;\n            computerClicked.innerHTML = falseClicked;\n\n            timer = setTimeout(repeatOften, `${timeGame}`);\n            let trueClicked = document.getElementsByClassName('clicked-true').length;\n\n            if (falseClicked === 10) {\n                clearTimeout(timer);\n                showResultError();\n            }\n            if (trueClicked === 10) {\n                clearTimeout(timer);\n                showResultSuccess();\n            }\n\n            document.getElementById('active').addEventListener('click', function (evt) {\n                let target = evt.target;\n                if (target.id === 'active') {\n                    document.getElementById('active').id = ('');\n                    randomLight.style.backgroundColor = 'green';\n                    randomLight.style.borderColor = 'green';\n                    randomLight.classList.remove('clicked-false');\n                    randomLight.classList.add('clicked-true');\n                    playerClicked.innerText = parseInt(playerClicked.innerText, 10) + 1;\n                }\n            }, false);\n\n        }\n\n        repeatOften();\n\n        function showResultSuccess() {\n            resultsGame();\n            let popup = document.createElement('div');\n            popup.className = 'popup';\n            blockGame.appendChild(popup);\n\n            let popupContent = document.createElement('div');\n            popupContent.className = 'popup-content';\n            popup.appendChild(popupContent);\n\n            let popupContentText = document.createElement('p');\n            popupContentText.className = 'popup-content-text';\n            popupContentText.innerText = `You have won with the score\n        ${parseInt(playerClicked.innerText)}/${document.getElementsByClassName('clicked-false').length - 1}`;\n            popupContent.appendChild(popupContentText);\n\n            let popupBtn = document.createElement('button');\n            popupBtn.className = 'popup-btn';\n            popupBtn.id = 'btn';\n            popupBtn.innerHTML = 'Play again';\n            popupBtn.setAttribute('onClick', \"refreshPage()\");\n            popupContent.appendChild(popupBtn);\n            document.getElementById('btn').addEventListener('click', function refreshPage() {\n                window.location.reload();\n            })\n        }\n\n        function showResultError() {\n            resultsGame();\n            let popup = document.createElement('div');\n            popup.className = 'popup';\n            blockGame.appendChild(popup);\n\n            let popupContent = document.createElement('div');\n            popupContent.className = 'popup-content';\n            popup.appendChild(popupContent);\n\n            let popupContentText = document.createElement('p');\n            popupContentText.className = 'popup-content-text';\n            popupContentText.innerText = `You lost with the score\n        ${parseInt(playerClicked.innerText)}/${document.getElementsByClassName('clicked-false').length - 1}`;\n            popupContent.appendChild(popupContentText);\n\n            let popupBtn = document.createElement('button');\n            popupBtn.className = 'popup-btn';\n            popupBtn.id = 'btn';\n            popupBtn.innerHTML = 'Play again';\n            popupContent.appendChild(popupBtn);\n            document.getElementById('btn').addEventListener('click', function refreshPage() {\n                window.location.reload();\n            })\n        }\n\n\n    }, false);\n\n    function resultsGame() {\n      let btnResults = document.createElement('btn');\n      btnResults.innerHTML = 'result';\n      btnResults.className = 'results';\n      document.body.insertBefore(btnResults, document.body.firstChild);\n    }\n})();\n\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/scss/game.scss":
/*!****************************!*\
  !*** ./src/scss/game.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/game.scss?");

/***/ })

/******/ });