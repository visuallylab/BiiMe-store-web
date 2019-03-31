webpackHotUpdate("static/development/pages/store-list.js",{

/***/ "./pages/store-list.tsx":
/*!******************************!*\
  !*** ./pages/store-list.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StoreList; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/Card */ "./layouts/Card.tsx");
/* harmony import */ var _fakeData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fakeData */ "./fakeData.ts");
var _jsxFileName = "/Users/tse/Code/VisuallyLab/BiiMe-store-web/pages/store-list.tsx";




function StoreList() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, _fakeData__WEBPACK_IMPORTED_MODULE_3__["discounts"].map(function (data, idx) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: "".concat(idx, ": ").concat(data.storeName),
      className: "jsx-4209360323" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "jsx-4209360323" + " " + "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, data.storeName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: data.qrcode,
      className: "jsx-4209360323" + " " + "qrcode",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "4209360323",
      css: ".container.jsx-4209360323{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#7f7f7f7d;border-bottom:solid 0.5px;margin:16px 0;padding:32px 16px;border-radius:10px;background-color:white;}.container.jsx-4209360323:last-child{border-bottom:none;}.title.jsx-4209360323{color:rgba(0,0,0,0.85);font-weight:500;font-size:16px;margin-bottom:0.3em;}.qrcode.jsx-4209360323{width:150px;height:150px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvcGFnZXMvc3RvcmUtbGlzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3NCLEFBRzRCLEFBYU0sQUFJTyxBQU9kLFlBQ0MsT0FYZixJQUlrQixFQVFsQixjQVBpQixlQUNLLG9CQW5CRSxBQW9CeEIsOEVBbkJxQiw2RkFDSCxnQkFDVSwwQkFFWixjQUNJLGtCQUNDLG1CQUNJLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvdHNlL0NvZGUvVmlzdWFsbHlMYWIvQmlpTWUtc3RvcmUtd2ViL3BhZ2VzL3N0b3JlLWxpc3QudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmRMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9DYXJkJztcblxuaW1wb3J0IHsgZGlzY291bnRzIH0gZnJvbSAnLi4vZmFrZURhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdG9yZUxpc3QoKSB7XG4gIHJldHVybiAoXG4gICAgPENhcmRMYXlvdXQ+XG4gICAgICB7ZGlzY291bnRzLm1hcCgoZGF0YSwgaWR4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtgJHtpZHh9OiAke2RhdGEuc3RvcmVOYW1lfWB9IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPntkYXRhLnN0b3JlTmFtZX08L2gzPlxuICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLnFyY29kZX0gY2xhc3NOYW1lPVwicXJjb2RlXCIgLz5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6ICM3ZjdmN2Y3ZDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHg7XG5cbiAgICAgICAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDMycHggMTZweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb250YWluZXI6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuM2VtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucXJjb2RlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L0NhcmRMYXlvdXQ+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/pages/store-list.tsx */",
      __self: this
    }));
  }));
}
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/store-list")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=store-list.js.5767d668bd5a2cf646ad.hot-update.js.map