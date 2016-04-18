/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CarList = function (_React$Component) {
	  _inherits(CarList, _React$Component);

	  function CarList(props) {
	    _classCallCheck(this, CarList);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CarList).call(this, props));

	    _this.carlist = [];
	    return _this;
	  }

	  _createClass(CarList, [{
	    key: "getCarStatus",
	    value: function getCarStatus(status) {
	      var str = "";
	      switch (status) {
	        case "未使用":
	          str = "symbol unuse";
	          break;
	        case "使用中":
	          str = "symbol use";
	          break;
	        case "维修中":
	          str = "symbol fixed";
	          break;
	        default:
	          str = "symbol other";
	          break;
	      }
	      return str;
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      console.log("===render");
	      // console.log(this.carlist);
	      var items = this.carlist.map(function (car, index) {
	        return React.createElement("tr", { className: "car" }, React.createElement("th", null, index + 1), React.createElement("td", null, React.createElement("img", { src: car.logo })), React.createElement("td", null, car.carname), React.createElement("td", null, car.carnum), React.createElement("td", null, car.carid), React.createElement("td", null, car.careng), React.createElement("td", null, React.createElement("i", { className: _this2.getCarStatus(car.status) })));
	      });
	      return React.createElement("div", null, items);
	      // var cars = this.carlist.carlist;
	    }
	  }, {
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      console.log("=will mount=");
	      // console.log(this.props.source)
	      var that = this;

	      $.ajax({
	        url: this.props.source,
	        type: "get",
	        async: false,
	        success: function success(data) {
	          console.log("==1111");
	          that.carlist = data.carlist;
	        }
	      });
	    }
	  }, {
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      console.log("=mounted=");
	      // console.log(carlist)
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      console.log("=will unmount=");
	    }
	  }, {
	    key: "getCarListData",
	    value: function getCarListData() {
	      console.log("=getdata=");
	    }
	  }]);

	  return CarList;
	}(React.Component);

	;
	// console.log(data)
	ReactDOM.render(React.createElement(CarList, { source: "/carlist" }), document.getElementById("carListId"));

/***/ }
/******/ ]);