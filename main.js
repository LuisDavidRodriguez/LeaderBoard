"use strict";
(self["webpackChunklader_board"] = self["webpackChunklader_board"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _modules_listManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/listManager.js */ "./src/modules/listManager.js");
/* harmony import */ var _modules_form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/form.js */ "./src/modules/form.js");
/* harmony import */ var _modules_leaderApi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/leaderApi.js */ "./src/modules/leaderApi.js");
/* harmony import */ var _assets_sounds_background_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/sounds/background.mp3 */ "./src/assets/sounds/background.mp3");
/* harmony import */ var _assets_sounds_lion_roaring_sound_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/sounds/lion-roaring-sound.mp3 */ "./src/assets/sounds/lion-roaring-sound.mp3");
/* harmony import */ var _assets_sounds_submit_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/sounds/submit.mp3 */ "./src/assets/sounds/submit.mp3");







var submitButton = document.querySelector('#submitButton');
var refreshButton = document.querySelector('#refreshButton');
var listContainer = document.querySelector('#list');
var listManager = new _modules_listManager_js__WEBPACK_IMPORTED_MODULE_1__["default"](listContainer);
var audio = new Audio(_assets_sounds_background_mp3__WEBPACK_IMPORTED_MODULE_4__["default"]);
var roar = new Audio(_assets_sounds_lion_roaring_sound_mp3__WEBPACK_IMPORTED_MODULE_5__["default"]);
var birds = new Audio(_assets_sounds_submit_mp3__WEBPACK_IMPORTED_MODULE_6__["default"]);
audio.volume = 0.06;
roar.volume = 0.2;
birds.volume = 0.2;
(0,_modules_leaderApi_js__WEBPACK_IMPORTED_MODULE_3__.getScores)(listManager);
submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  birds.play();
  (0,_modules_form_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_modules_leaderApi_js__WEBPACK_IMPORTED_MODULE_3__.setScores);
});
refreshButton.addEventListener('click', function () {
  listManager.clearContainer();
  roar.play();
  (0,_modules_leaderApi_js__WEBPACK_IMPORTED_MODULE_3__.getScores)(listManager);
  setTimeout(function () {
    roar.pause();
    roar.currentTime = 0;
  }, 1800);
});
window.addEventListener('mousemove', function () {
  audio.play();
});

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var nameInput = document.querySelector('#name');
var scoreInput = document.querySelector('#score');

var validInputs = function validInputs() {
  // Check the minimal validations in the html
  if (!nameInput.validity.valid || !scoreInput.validity.valid) return false; // Check if any input is empty

  if (nameInput.value.trim() === '' || scoreInput.value.trim() === '') return false;
  var score = scoreInput.value.trim();

  if (/\D/g.test(score)) {
    return false;
  }

  return true;
};

var submit = function submit(callBack) {
  if (!validInputs()) return;
  var nameValue = nameInput.value.trim();
  var scoreValue = scoreInput.value.trim();
  nameInput.value = '';
  scoreInput.value = '';
  callBack(nameValue, scoreValue);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (submit);

/***/ }),

/***/ "./src/modules/leaderApi.js":
/*!**********************************!*\
  !*** ./src/modules/leaderApi.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewGame": () => (/* binding */ createNewGame),
/* harmony export */   "getScores": () => (/* binding */ getScores),
/* harmony export */   "setScores": () => (/* binding */ setScores)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
var GAMES_URL = "".concat(BASE_URL, "games/");

var SCORES_URL = function SCORES_URL(id) {
  return "".concat(GAMES_URL).concat(id, "/scores/");
};

var headers = {
  'Content-type': 'application/json; charset=UTF-8'
};
var GAME_ID = 't0bQKaYMl777YYTlmXPl';

var createNewGame = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var bodyCreate, result, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            bodyCreate = JSON.stringify({
              name: 'luisda'
            });
            _context.next = 3;
            return fetch(GAMES_URL, {
              method: 'POST',
              bodyCreate: bodyCreate,
              headers: headers
            });

          case 3:
            result = _context.sent;
            _context.next = 6;
            return result.json();

          case 6:
            data = _context.sent;
            console.log(result);
            console.log(data);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createNewGame() {
    return _ref.apply(this, arguments);
  };
}();

var getScores = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(listManager) {
    var result, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return fetch(SCORES_URL(GAME_ID), {
              method: 'GET'
            });

          case 3:
            result = _context2.sent;
            _context2.next = 6;
            return result.json();

          case 6:
            data = _context2.sent;
            console.log(result);
            console.log(data.result);
            console.log(result.status); // 201 ok etc

            listManager.refresh(data.result);
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 13]]);
  }));

  return function getScores(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var setScores = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(user, score) {
    var body, result, data;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            body = JSON.stringify({
              user: user,
              score: score
            });
            _context3.next = 3;
            return fetch(SCORES_URL(GAME_ID), {
              method: 'POST',
              body: body,
              headers: headers
            });

          case 3:
            result = _context3.sent;
            _context3.next = 6;
            return result.json();

          case 6:
            data = _context3.sent;
            console.log(result.status); // 201 ok etc

            console.log(result);
            console.log(data);

            if (result.status === 201) {
              console.log('success');
            }

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function setScores(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();



/***/ }),

/***/ "./src/modules/listManager.js":
/*!************************************!*\
  !*** ./src/modules/listManager.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ListManager)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _parentContainer = /*#__PURE__*/new WeakMap();

var _createDOMelement = /*#__PURE__*/new WeakSet();

var ListManager = /*#__PURE__*/function () {
  function ListManager(container) {
    _classCallCheck(this, ListManager);

    _classPrivateMethodInitSpec(this, _createDOMelement);

    _classPrivateFieldInitSpec(this, _parentContainer, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _parentContainer, container);
  }

  _createClass(ListManager, [{
    key: "refresh",
    value: function refresh(data) {
      var _this = this;

      this.clearContainer();
      data.forEach(function (player) {
        _this.addPlayer(player);
      });
    }
  }, {
    key: "addPlayer",
    value: function addPlayer(_ref) {
      var user = _ref.user,
          score = _ref.score;
      var object = {
        user: user,
        score: score
      };

      var element = _classPrivateMethodGet(this, _createDOMelement, _createDOMelement2).call(this, object);

      _classPrivateFieldGet(this, _parentContainer).append(element);
    }
  }, {
    key: "clearContainer",
    value: function clearContainer() {
      _classPrivateFieldGet(this, _parentContainer).textContent = '';
    } // eslint-disable-next-line class-methods-use-this

  }]);

  return ListManager;
}();

function _createDOMelement2(object) {
  var li = document.createElement('li');
  var pUser = document.createElement('p');
  var pScore = document.createElement('p');
  pUser.textContent = object.user;
  pScore.textContent = object.score;
  li.append(pUser, pScore);
  return li;
}



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/eduardo-quesada-background.jpg */ "./src/assets/eduardo-quesada-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nul {\n  padding-inline-start: 0;\n  list-style: none;\n  margin-block-start: 0;\n  margin-block-end: 0;\n}\n\na {\n  text-decoration: none;\n  word-wrap: break-word;\n}\n\n::before {\n  box-sizing: border-box;\n}\n\n::after {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 14px;\n}\n@media screen and (min-width: 768px) {\n  html {\n    font-size: 16px;\n  }\n}\n\n.button {\n  color: white;\n  font-family: Helvetica, sans-serif;\n  font-weight: bold;\n  font-size: 1.5em;\n  text-align: center;\n  background-color: #ffa12b;\n  position: relative;\n  padding: 3% 5%;\n  -webkit-box-shadow: inset 0 1px 0 #fffbf7, 0 10px 0 #915100;\n  -moz-box-shadow: inset 0 1px 0 #fffbf7, 0 10px 0 #915100;\n  box-shadow: inset 0 1px 0 #fffbf7, 0 10px 0 #915100;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  border-radius: 5px;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  text-shadow: 0 1px 0 #000;\n  filter: dropshadow(color=#000000, offx=0px, offy=1px);\n}\n.button:hover {\n  cursor: pointer;\n}\n.button:active {\n  top: 10px;\n  background-color: #ffa12b;\n  -webkit-box-shadow: inset 0 1px 0 #fffbf7, inset 0 -3px 0 #915100;\n  -moz-box-shadow: inset 0 1px 0 #fffbf7, inset 0 -3px 0 #915100;\n  box-shadow: inset 0 1px 0 #fffbf7, inset 0 -3px 0 #915100;\n}\n\n.form__button {\n  width: fit-content;\n  align-self: flex-end;\n  padding: 1% 3%;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-size: cover;\n  height: 100vh;\n}\n\nmain {\n  text-align: center;\n}\n\n.title {\n  margin-bottom: 3%;\n  text-shadow: 3px 3px 5px rgb(255, 253, 253), -3px -3px 5px rgb(255, 253, 253);\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n@media screen and (min-width: 768px) {\n  .container {\n    flex-direction: row;\n  }\n}\n\n.table-container {\n  min-width: 225px;\n  max-width: 500px;\n  width: 90%;\n  margin: 0 auto;\n  background-color: rgba(171, 217, 95, 0.7);\n  border-radius: 5px;\n}\n@media screen and (min-width: 768px) {\n  .table-container {\n    width: 50%;\n  }\n}\n.table-container .button-container {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin: 5px;\n}\n.table-container .list {\n  min-height: 500px;\n  padding: 2%;\n  max-height: 50vh;\n  overflow-y: auto;\n  margin: 10px 0;\n}\n.table-container .list > :nth-child(odd) {\n  background-color: rgba(106, 140, 48, 0.8);\n}\n.table-container .list li {\n  display: flex;\n  min-height: 40px;\n  align-items: center;\n}\n.table-container .list li > p {\n  width: 50%;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  height: min-content;\n  padding: 20px;\n  margin: 3% auto;\n  max-width: 400px;\n  background-color: rgba(171, 217, 95, 0.7);\n  border-radius: 5px;\n}\n@media screen and (min-width: 768px) {\n  form {\n    width: 50%;\n  }\n}\nform input {\n  margin: 10px 0;\n  border: none;\n  padding: 3px;\n  border-radius: 5px;\n  box-shadow: -1px -1px 5px 1px #6a8c30, 3px 4px 2px 2px #6a8c30;\n}", "",{"version":3,"sources":["webpack://./src/styles/2_base/_config.scss","webpack://./src/styles/main.scss","webpack://./src/styles/1_abstracts/_mixin.scss","webpack://./src/styles/5_components/_buttons.scss","webpack://./src/styles/1_abstracts/_variables.scss"],"names":[],"mappings":"AAEA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;ACDF;;ADKA;EACE,uBAAA;EACA,gBAAA;EACA,qBAAA;EACA,mBAAA;ACFF;;ADKA;EACE,qBAAA;EACA,qBAAA;ACFF;;ADKA;EACE,sBAAA;ACFF;;ADKA;EACE,sBAAA;ACFF;;ADKA;EACE,eAAA;ACFF;AC3BE;EF4BF;IAII,eAAA;ECDF;AACF;;AEFA;EACE,YAAA;EACA,kCAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;EACA,yBClCU;EDmCV,kBAAA;EACA,cAAA;EAjCA,2DAFS;EAGT,wDAHS;EAIT,mDAJS;EAgBT,0BAD4B;EAE5B,uBAF4B;EAG5B,kBAH4B;EAO5B,6CAAA;EACA,yBAAA;EACA,qDAAA;AFyBF;AERE;EACE,eAAA;AFUJ;AEPE;EACE,SAAA;EACA,yBChDQ;EDWV,iEAFS;EAGT,8DAHS;EAIT,yDAJS;AFmDX;;AENA;EACE,kBAAA;EACA,oBAAA;EACA,cAAA;AFSF;;AA/DA;EACE,iCAAA;EACA,6DAAA;EACA,sBAAA;EACA,aAAA;AAkEF;;AA/DA;EACE,kBAAA;AAkEF;;AA/DA;EACE,iBAAA;EACA,6EAAA;AAkEF;;AA/DA;EACE,aAAA;EACA,uBAAA;EACA,sBAAA;AAkEF;AC1FE;EDqBF;IAMI,mBAAA;EAmEF;AACF;;AAhEA;EACE,gBAAA;EACA,gBAAA;EACA,UAAA;EACA,cAAA;EACA,yCAAA;EACA,kBAAA;AAmEF;ACxGE;ED+BF;IASI,UAAA;EAoEF;AACF;AAlEE;EACE,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,WAAA;AAoEJ;AAjEE;EACE,iBAAA;EACA,WAAA;EACA,gBAAA;EACA,gBAAA;EACA,cAAA;AAmEJ;AAjEI;EACE,yCAAA;AAmEN;AAhEI;EACE,aAAA;EACA,gBAAA;EACA,mBAAA;AAkEN;AAhEM;EACE,UAAA;AAkER;;AA5DA;EACE,aAAA;EACA,sBAAA;EACA,UAAA;EACA,mBAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EACA,yCAAA;EACA,kBAAA;AA+DF;ACjJE;EDyEF;IAYI,UAAA;EAgEF;AACF;AA9DE;EACE,cAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,8DAAA;AAgEJ","sourcesContent":["@use '../1_abstracts/mixin.scss';\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n//yeah I get ride of that hideous padding once and for all for all my ul!!\r\nul {\r\n  padding-inline-start: 0;\r\n  list-style: none;\r\n  margin-block-start: 0;\r\n  margin-block-end: 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  word-wrap: break-word;\r\n}\r\n\r\n::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\n::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n\r\n  @include mixin.desktop {\r\n    font-size: 16px;\r\n  }\r\n}\r\n","@use '1_abstracts/variables.scss' as v;\r\n@use '1_abstracts/mixin';\r\n\r\n@import '2_base/config';\r\n@import '5_components/buttons.scss';\r\n\r\nbody {\r\n  font-family: 'Roboto', sans-serif;\r\n  background: url('../assets/eduardo-quesada-background.jpg') no-repeat;\r\n  background-size: cover;\r\n  height: 100vh;\r\n}\r\n\r\nmain {\r\n  text-align: center;\r\n}\r\n\r\n.title {\r\n  margin-bottom: 3%;\r\n  text-shadow: 3px 3px 5px rgb(255, 253, 253), -3px -3px 5px rgb(255, 253, 253);\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n\r\n  @include mixin.desktop {\r\n    flex-direction: row;\r\n  }\r\n}\r\n\r\n.table-container {\r\n  min-width: 225px;\r\n  max-width: 500px;\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  background-color: transparentize($color: v.$colorPrimary, $amount: 0.3);\r\n  border-radius: 5px;\r\n\r\n  @include mixin.desktop {\r\n    width: 50%;\r\n  }\r\n\r\n  .button-container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    margin: 5px;\r\n  }\r\n\r\n  .list {\r\n    min-height: 500px;\r\n    padding: 2%;\r\n    max-height: 50vh;\r\n    overflow-y: auto;\r\n    margin: 10px 0;\r\n\r\n    > :nth-child(odd) {\r\n      background-color: transparentize(v.$colorDark, 0.2);\r\n    }\r\n\r\n    li {\r\n      display: flex;\r\n      min-height: 40px;\r\n      align-items: center;\r\n\r\n      > p {\r\n        width: 50%;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 90%;\r\n  height: min-content;\r\n  padding: 20px;\r\n  margin: 3% auto;\r\n  max-width: 400px;\r\n  background-color: transparentize($color: v.$colorPrimary, $amount: 0.3);\r\n  border-radius: 5px;\r\n\r\n  @include mixin.desktop {\r\n    width: 50%;\r\n  }\r\n\r\n  input {\r\n    margin: 10px 0;\r\n    border: none;\r\n    padding: 3px;\r\n    border-radius: 5px;\r\n    box-shadow: -1px -1px 5px 1px v.$colorDark, 3px 4px 2px 2px v.$colorDark;\r\n  }\r\n}\r\n","@mixin desktop {\r\n  @media screen and (min-width: 768px) {\r\n    @content;\r\n  }\r\n}\r\n","@use '../1_abstracts/variables.scss' as v;\r\n// https://dev.to/webdeasy/top-20-css-buttons-animations-f41\r\n\r\n@mixin boxShadow {\r\n  $shadow: inset 0 1px 0 lighten(v.$colorBack, 40%), 0 10px 0 darken(v.$colorBack, 30%);\r\n\r\n  -webkit-box-shadow: $shadow;\r\n  -moz-box-shadow: $shadow;\r\n  box-shadow: $shadow;\r\n}\r\n\r\n@mixin boxShadowActive {\r\n  $shadow: inset 0 1px 0 lighten(v.$colorBack, 40%), inset 0 -3px 0 darken(v.$colorBack, 30%);\r\n\r\n  -webkit-box-shadow: $shadow;\r\n  -moz-box-shadow: $shadow;\r\n  box-shadow: $shadow;\r\n}\r\n\r\n@mixin borderRadius ($radius: 5px) {\r\n  -webkit-border-radius: $radius;\r\n  -moz-border-radius: $radius;\r\n  border-radius: $radius;\r\n}\r\n\r\n@mixin textShadow {\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n  text-shadow: 0 1px 0 #000;\r\n  filter: dropshadow(color=#000000, offx=0px, offy=1px);\r\n}\r\n\r\n.button {\r\n  color: white;\r\n  font-family: Helvetica, sans-serif;\r\n  font-weight: bold;\r\n  font-size: 1.5em;\r\n  text-align: center;\r\n  background-color: v.$colorBack;\r\n  position: relative;\r\n  padding: 3% 5%;\r\n\r\n  @include boxShadow();\r\n  @include borderRadius();\r\n  @include textShadow();\r\n\r\n  &:hover {\r\n    cursor: pointer;\r\n  }\r\n\r\n  &:active {\r\n    top: 10px;\r\n    background-color: v.$colorBack;\r\n\r\n    @include boxShadowActive();\r\n  }\r\n}\r\n\r\n.form__button {\r\n  width: fit-content;\r\n  align-self: flex-end;\r\n  padding: 1% 3%;\r\n}\r\n","$colorPrimary: #abd95f;\r\n$colorDark: #6a8c30;\r\n$colorComplementary: #ad00db;\r\n$colorBack: #ffa12b;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/sounds/background.mp3":
/*!******************************************!*\
  !*** ./src/assets/sounds/background.mp3 ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "background.mp3");

/***/ }),

/***/ "./src/assets/sounds/lion-roaring-sound.mp3":
/*!**************************************************!*\
  !*** ./src/assets/sounds/lion-roaring-sound.mp3 ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "lion-roaring-sound.mp3");

/***/ }),

/***/ "./src/assets/sounds/submit.mp3":
/*!**************************************!*\
  !*** ./src/assets/sounds/submit.mp3 ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "submit.mp3");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/eduardo-quesada-background.jpg":
/*!***************************************************!*\
  !*** ./src/assets/eduardo-quesada-background.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eduardo-quesada-background.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=main.js.map