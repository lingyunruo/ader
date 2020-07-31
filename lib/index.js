(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory(require("React"));
	else
		root["index"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/frame/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/frame/index.js":
/*!****************************!*\
  !*** ./src/frame/index.js ***!
  \****************************/
/*! exports provided: render, Model, createStore, connect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return finalRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return finalStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return finalConnect; });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/frame/render/index.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/frame/model/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["Model"]; });



var data = {};

var setData = function setData(key, value) {
  data[key] = value;
};

var getData = function getData(key) {
  return data[key];
};

var finalStart = Object(_model__WEBPACK_IMPORTED_MODULE_1__["createStore"])({
  setData: setData,
  getData: getData
});
var finalRender = Object(_render__WEBPACK_IMPORTED_MODULE_0__["render"])({
  setData: setData,
  getData: getData
});
var finalConnect = Object(_model__WEBPACK_IMPORTED_MODULE_1__["connect"])({
  setData: setData,
  getData: getData
});


/***/ }),

/***/ "./src/frame/model/BaseModel.js":
/*!**************************************!*\
  !*** ./src/frame/model/BaseModel.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseModel; });
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Event */ "./src/frame/model/Event.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var BaseModel =
/*#__PURE__*/
function (_EventClass) {
  _inherits(BaseModel, _EventClass);

  function BaseModel(model) {
    var _this;

    _classCallCheck(this, BaseModel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseModel).call(this)); // this.model = model;
    // 存储上一次已改变的值

    _this.changed = {};
    return _this;
  }

  _createClass(BaseModel, [{
    key: "set",
    value: function set(args1, args2) {
      var _this2 = this;

      if (args2 === undefined) {
        if (Object.prototype.toString.call(args1) === '[object Object]') {
          Object.keys(args1).forEach(function (key) {
            _this2.changed[key] = _this2.data[key];
            _this2.data[key] = args1[key];

            _this2.trigger("change:".concat(key), args1[key]);
          });
          this.trigger('change', args1);
        } else {
          throw new Error('如果只穿一个参数，必须传入一个对象');
        }
      } else {
        this.changed[args1] = this.data[args1];
        this.data[args1] = args2;
        this.trigger("change:".concat(args1), _defineProperty({}, args1, args2));
        this.trigger('change', _defineProperty({}, args1, args2));
      }
    }
  }, {
    key: "get",
    value: function get(key) {
      if (key) {
        return this.data[key];
      } else {
        return this.data;
      }
    }
  }, {
    key: "has",
    value: function has(attribute) {
      var data = this.data;

      if (data[attribute] === undefined || data[attribute] === null) {
        return false;
      }

      return true;
    } // 深拷贝

  }, {
    key: "deepClone",
    value: function deepClone(data) {
      var _this3 = this;

      var copyData = {};

      if (data === undefined) {
        data = this.data;
      }

      Object.keys(data).forEach(function (key) {
        if (_typeof(data[key]) === 'object') {
          copyData[key] = _this3.deepClone(data[key]);
        } else {
          copyData[key] = data[key];
        }
      });
      return copyData;
    } // 获取上一次修改前的值

  }, {
    key: "previous",
    value: function previous(attribute) {
      var data = Object.assign({}, this.data, this.changed);

      if (attribute) {
        return data[attribute];
      }

      return data;
    }
  }]);

  return BaseModel;
}(_Event__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/frame/model/Event.js":
/*!**********************************!*\
  !*** ./src/frame/model/Event.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Event; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Event = function Event() {
  var _this = this;

  _classCallCheck(this, Event);

  this.on = function (eventName, callback) {
    if (!_this.funcs[eventName]) {
      _this.funcs[eventName] = [];
    }

    _this.funcs[eventName].push(callback);
  };

  this.off = function (eventName, callback) {
    var funcs = _this.funcs[eventName];

    if (Array.isArray(funcs)) {
      var callbackIndex = funcs.findIndex(callback);

      if (callbackIndex > -1) {
        funcs.splice(callbackIndex, 1);
        _this.funcs[eventName] = funcs;
      } else {
        _this.funcs[eventName] = [];
      }
    }
  };

  this.trigger = function (eventName) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var funcs = _this.funcs[eventName];

    if (Array.isArray(funcs)) {
      funcs.forEach(function (callback) {
        typeof callback === 'function' && callback.apply(void 0, args);
      });
    }
  };

  this.funcs = {};
};



/***/ }),

/***/ "./src/frame/model/connect.js":
/*!************************************!*\
  !*** ./src/frame/model/connect.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setData = _ref.setData,
      getData = _ref.getData;
  return function () {
    var modelNames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return function (HomePage) {
      return (
        /*#__PURE__*/
        function (_React$Component) {
          _inherits(_class, _React$Component);

          function _class(props) {
            var _this;

            _classCallCheck(this, _class);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
            _this.state = {};
            var allModelInstance = getData('modelInstanceList');
            var models = [];

            if (modelNames.length === 0) {
              models = Object.values(allModelInstance);
            } else {
              modelNames.forEach(function (name) {
                models.push(allModelInstance[name]);
              });
            }

            models.forEach(function (model) {
              _this.state[model.name] = model.data;
              model.on('change', function (obj) {
                _this.setState(_defineProperty({}, model.name, model.data));
              });
            });
            return _this;
          }

          _createClass(_class, [{
            key: "render",
            value: function render() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HomePage, _extends({}, this.props, this.state));
            }
          }]);

          return _class;
        }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)
      );
    };
  };
});

/***/ }),

/***/ "./src/frame/model/createStore.js":
/*!****************************************!*\
  !*** ./src/frame/model/createStore.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel */ "./src/frame/model/BaseModel.js");
/* harmony import */ var _utils_getProtoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getProtoList */ "./src/frame/utils/getProtoList.js");


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setData = _ref.setData,
      getData = _ref.getData;
  return function () {
    var modelList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 ? arguments[1] : undefined;
    var originModelInstance = getData('modelInstanceList') || {}; // 存储model类的列表

    setData('ModelClassList', modelList);
    var modelInstance = originModelInstance; // 实例化所有model类

    modelList.forEach(function (Model, index) {
      var proto = Object(_utils_getProtoList__WEBPACK_IMPORTED_MODULE_1__["default"])(Model).prototypes;
      var model = new Model();

      if (!(model instanceof _BaseModel__WEBPACK_IMPORTED_MODULE_0__["default"])) {
        var base = new _BaseModel__WEBPACK_IMPORTED_MODULE_0__["default"](model);
        Object.setPrototypeOf(proto, base); // proto.__proto__ = base
      }

      if (!model.name) {
        throw new Error('Every Model Need A Name Attribute');
      } else if (!model.data) {
        throw new Error('Every Model Need A Data Attribute');
      }

      modelInstance[model.name] = model;
    }); // 存储model实例

    setData('modelInstanceList', modelInstance);
    return modelInstance;
  };
});

/***/ }),

/***/ "./src/frame/model/index.js":
/*!**********************************!*\
  !*** ./src/frame/model/index.js ***!
  \**********************************/
/*! exports provided: Model, createStore, connect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel */ "./src/frame/model/BaseModel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return _BaseModel__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createStore */ "./src/frame/model/createStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return _createStore__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connect */ "./src/frame/model/connect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return _connect__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/frame/render/extend.js":
/*!************************************!*\
  !*** ./src/frame/render/extend.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getProtoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getProtoList */ "./src/frame/utils/getProtoList.js");

/* harmony default export */ __webpack_exports__["default"] = (function (Action) {
  // 拿到action里配置的父类
  var Parents = Action["extends"]; // 将父类的所有prototype存储起来

  var prototypes = []; // 存储主类的prototype

  var mainActionProto = Object(_utils_getProtoList__WEBPACK_IMPORTED_MODULE_0__["default"])(Action); // 存储父类实例上的方法

  var instanceProp = {}; // 遍历父类，取出父类的proto，并且拿到父类实例方法

  Parents.forEach(function (Parent, index) {
    prototypes.push(Object(_utils_getProtoList__WEBPACK_IMPORTED_MODULE_0__["default"])(Parent));
    var parent = new Parent();
    Reflect.ownKeys(parent).forEach(function (key) {
      instanceProp[key] = parent[key];
    });
  }); // 最后一个将父类实例方法当成prototype挂上去

  prototypes.push({
    result: instanceProp,
    prototypes: instanceProp
  }); // 主类在数组最后，最终所有的父类方法放到主类prototype上

  prototypes.push(mainActionProto);
  var len = prototypes.length; // 设置prototype链

  prototypes.forEach(function (obj, index) {
    if (index < len - 1) {
      Object.setPrototypeOf(prototypes[index + 1].prototypes, obj.result); // prototypes[index + 1].prototypes.__proto__ = obj.result;
    } else {// console.log(obj.result);
      }
  });
});

/***/ }),

/***/ "./src/frame/render/index.js":
/*!***********************************!*\
  !*** ./src/frame/render/index.js ***!
  \***********************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/frame/render/render.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _render__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/frame/render/render.js":
/*!************************************!*\
  !*** ./src/frame/render/render.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extend */ "./src/frame/render/extend.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var getData = _ref.getData,
      setData = _ref.setData;
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function (CustomComponent) {
      // 存储action实例，最终会挂在每个action上
      var action = {}; // 存储action里的生命周期函数

      var lifeCycle = {
        'didMount': [],
        'didUpdate': [],
        'willUnMount': [],
        'shouldUpdate': [],
        'didAllInstance': []
      };
      return (
        /*#__PURE__*/
        function (_React$Component) {
          _inherits(_class, _React$Component);

          function _class(props) {
            var _this;

            _classCallCheck(this, _class);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props)); // model实例

            var modelInstance = getData('modelInstanceList'); // setData('modelInstanceList', {});
            // 如果配置了actions

            if (options.actions) {
              Object.keys(options.actions).forEach(function (actionKey) {
                // 取得action类
                var Action = options.actions[actionKey]; // 检查每个action是否有配置静态的extends属性，如果有，执行extend函数

                if (Array.isArray(Action["extends"])) {
                  Object(_extend__WEBPACK_IMPORTED_MODULE_1__["default"])(Action);
                } // 实例化action


                var actionInstance = new Action(_assertThisInitialized(_this)); // 检查action实例里是否定义了生命周期

                Object.keys(lifeCycle).forEach(function (key) {
                  if (typeof actionInstance[key] === 'function') {
                    lifeCycle[key].push(actionInstance[key].bind(actionInstance));
                  }
                }); // 实例化action

                action[actionKey] = actionInstance; // 给action挂载model方法

                actionInstance.models = modelInstance; // 给action setState的能力

                actionInstance.setState = _this.setState.bind(_assertThisInitialized(_this)); // 实例拿到actions

                actionInstance.actions = action; // 拿到组件实例

                actionInstance.$instance = _assertThisInitialized(_this); // 实例化完成的勾子

                if (typeof actionInstance['didInstance'] === 'function') {
                  actionInstance['didInstance'].call(actionInstance);
                }
              }); // 执行生命周期函数

              lifeCycle['didAllInstance'].forEach(function (fn) {
                typeof fn === 'function' && fn();
              });
            } // 设置state


            if (options.state) {
              _this.state = _objectSpread({}, options.state);
            }

            return _this;
          }

          _createClass(_class, [{
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate() {
              var flag = true;
              lifeCycle['shouldUpdate'].forEach(function (fn) {
                if (typeof fn === 'function') {
                  if (fn() === false) {
                    flag = false;
                  }
                }
              });
              return flag;
            }
          }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
              lifeCycle['willUnMount'].forEach(function (fn) {
                typeof fn === 'function' && fn();
              });
            }
          }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
              lifeCycle['didUpdate'].forEach(function (fn) {
                typeof fn === 'function' && fn();
              });
            }
          }, {
            key: "componentDidMount",
            value: function componentDidMount() {
              lifeCycle['didMount'].forEach(function (fn) {
                typeof fn === 'function' && fn();
              });
            }
          }, {
            key: "render",
            value: function render() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomComponent, {
                action: action,
                state: this.state,
                props: this.props
              });
            }
          }]);

          return _class;
        }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)
      );
    };
  };
});

/***/ }),

/***/ "./src/frame/utils/getProtoList.js":
/*!*****************************************!*\
  !*** ./src/frame/utils/getProtoList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getProtoList; });
// 获取prototype链
// 获取当前类的所有prototype链
function getProtoList(Func) {
  var prototypes = {};
  var result = prototypes;
  var __proto = [Func.prototype];

  while (__proto.length > 0) {
    var proto = __proto.shift(); // prototypes.__proto__ = proto;


    Object.setPrototypeOf(prototypes, proto); // 首先检测proto的__proto__属性是不是Object

    var cProto = Object.getPrototypeOf(proto);

    if (cProto) {
      // if(proto.__proto__) {
      // __proto.push(proto.__proto__);
      __proto.push(cProto);

      var prototypesProto = Object.getPrototypeOf(prototypes); // prototypes = prototypes.__proto__;

      prototypes = prototypesProto;
    }
  }

  return {
    result: result,
    prototypes: prototypes
  };
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map