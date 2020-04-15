module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Signup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Signup */ "./src/components/Signup.js");
var _jsxFileName = "/Users/zachchang/programing/solace/pages/signup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(_src_components_Signup__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 12
    }
  });
});

/***/ }),

/***/ "./src/components/Signup.js":
/*!**********************************!*\
  !*** ./src/components/Signup.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style */ "./src/style/index.js");
/* harmony import */ var _handler_signupHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handler/signupHandler */ "./src/handler/signupHandler.js");
var _jsxFileName = "/Users/zachchang/programing/solace/src/components/Signup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (Object(_handler_signupHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(props => {
  const {
    handleSubmit,
    handleInputChange,
    errors,
    isShowError
  } = props;
  return __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["SignupWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, isShowError && errors.username && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 56
    }
  }, errors.username), __jsx("input", {
    type: "text",
    name: "username",
    onChange: handleInputChange,
    className: "form-control",
    placeholder: "Username",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, isShowError && errors.email && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 53
    }
  }, errors.email), __jsx("input", {
    type: "text",
    name: "email",
    onChange: handleInputChange,
    placeholder: "Email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, isShowError && errors.password && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 56
    }
  }, errors.password), __jsx("input", {
    type: "password",
    name: "password",
    onChange: handleInputChange,
    className: "form-control",
    placeholder: "Password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, isShowError && errors.confirmPassword && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 63
    }
  }, errors.confirmPassword), __jsx("input", {
    type: "password",
    name: "confirmPassword",
    onChange: handleInputChange,
    placeholder: "Confirm Password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  })), __jsx("button", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, "Confirm")));
}));

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/handler/signupHandler.js":
/*!**************************************!*\
  !*** ./src/handler/signupHandler.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_apiUtility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/apiUtility */ "./src/utils/apiUtility.js");
/* harmony import */ var _utils_customHooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/customHooks */ "./src/utils/customHooks.js");
var _jsxFileName = "/Users/zachchang/programing/solace/src/handler/signupHandler.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = (Component => props => {
  const signup = formData => {
    _utils_apiUtility__WEBPACK_IMPORTED_MODULE_1__["default"].register(formData).then(res => console.log(res)).catch(err => console.log(err));
  };

  const {
    inputs,
    handleInputChange,
    handleSubmit,
    errors,
    isShowError
  } = Object(_utils_customHooks__WEBPACK_IMPORTED_MODULE_2__["useSignupForm"])(signup);
  props = _objectSpread({}, props, {
    inputs,
    handleInputChange,
    handleSubmit,
    errors,
    isShowError
  });
  return __jsx(Component, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }));
});

/***/ }),

/***/ "./src/style/IndexWrapper.js":
/*!***********************************!*\
  !*** ./src/style/IndexWrapper.js ***!
  \***********************************/
/*! exports provided: IndexWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexWrapper", function() { return IndexWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const IndexWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    background: #C6FFDD;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #f7797d, #FBD786, #C6FFDD); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    min-height: 100vh;
`;

/***/ }),

/***/ "./src/style/SignupWrapper.js":
/*!************************************!*\
  !*** ./src/style/SignupWrapper.js ***!
  \************************************/
/*! exports provided: SignupWrapper, SignupItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupWrapper", function() { return SignupWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupItem", function() { return SignupItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SignupWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    width: 100%;
    text-align: center;
    position: absolute;
    top: calc(50% - 60px);
    height: 120px;
`;
const SignupItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    input {
        border-color: ${props => props.error ? 'red' : 'gray'}   
    }
`;

/***/ }),

/***/ "./src/style/index.js":
/*!****************************!*\
  !*** ./src/style/index.js ***!
  \****************************/
/*! exports provided: IndexWrapper, SignupWrapper, SignupItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IndexWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexWrapper */ "./src/style/IndexWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexWrapper", function() { return _IndexWrapper__WEBPACK_IMPORTED_MODULE_0__["IndexWrapper"]; });

/* harmony import */ var _SignupWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignupWrapper */ "./src/style/SignupWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignupWrapper", function() { return _SignupWrapper__WEBPACK_IMPORTED_MODULE_1__["SignupWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignupItem", function() { return _SignupWrapper__WEBPACK_IMPORTED_MODULE_1__["SignupItem"]; });




/***/ }),

/***/ "./src/utils/apiUtility.js":
/*!*********************************!*\
  !*** ./src/utils/apiUtility.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);

const token = 'mockToken';
/* harmony default export */ __webpack_exports__["default"] = ({
  register(payload) {
    return new Promise((resolve, reject) => {
      fetch(`${_config__WEBPACK_IMPORTED_MODULE_0___default.a.apiRecord.domain}/register`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify({
          payload
        })
      }).then(res => {
        res.status === 200 ? resolve(res.json()) : reject(res);
      }).catch(err => reject(err));
    });
  }

});

/***/ }),

/***/ "./src/utils/customHooks.js":
/*!**********************************!*\
  !*** ./src/utils/customHooks.js ***!
  \**********************************/
/*! exports provided: useSignupForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSignupForm", function() { return useSignupForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const useSignupForm = callback => {
  const formFields = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const initErrors = () => {
    let errors = _objectSpread({}, formFields);

    for (const key in formFields) {
      errors[key] = `${key} can not be empty`;
    }

    return errors;
  };

  const {
    0: inputs,
    1: setInputs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(formFields);
  const {
    0: errors,
    1: setErrors
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initErrors());
  const {
    0: isShowError,
    1: showError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const validateField = (fieldName, value, fieldValidationErrors) => {
    if (value === '') {
      fieldValidationErrors[fieldName] = `${fieldName} can not be empty`;
    } else {
      switch (fieldName) {
        case 'username':
          const isTooShort = value.length < 3;
          const isTooLong = value.length > 10;
          fieldValidationErrors.username = isTooShort ? 'Nono too short!' : isTooLong ? 'Nono too long!' : '';
          break;

        case 'email':
          const isEmailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.email = isEmailValid ? '' : 'This email type is invalid';
          break;

        case 'password':
          const isPasswordValid = value.length > 6;
          fieldValidationErrors.password = isPasswordValid ? '' : 'Your password length must be longer than 6';
          break;

        case 'confirmPassword':
          const isCPasswordValid = value === inputs.password;
          fieldValidationErrors.confirmPassword = isCPasswordValid ? '' : 'Both password need to be the same';
          break;

        default:
          break;
      }
    }

    setErrors(fieldValidationErrors);
  };

  const isFormValid = () => {
    const errorsArray = Object.values(errors);

    for (let i = 0; i < errorsArray.length; i++) {
      if (errorsArray[i]) return false;
    }

    return true;
  };

  const handleSubmit = event => {
    if (event) event.preventDefault();
    showError(true);
    if (isFormValid()) callback(inputs);
  };

  const handleInputChange = event => {
    event.persist();
    const name = event.target.name;
    const value = event.target.value;

    let fieldValidationErrors = _objectSpread({}, errors);

    setInputs(inputs => _objectSpread({}, inputs, {
      [name]: value
    }));
    validateField(name, value, fieldValidationErrors);
  };

  return {
    inputs,
    handleSubmit,
    handleInputChange,
    errors,
    isShowError
  };
};

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/signup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zachchang/programing/solace/pages/signup.js */"./pages/signup.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=signup.js.map