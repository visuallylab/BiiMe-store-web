webpackHotUpdate('static/development/pages/card/taipei-card.js', {
  /***/ './components/Section.tsx':
    /*!********************************!*\
  !*** ./components/Section.tsx ***!
  \********************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! styled-jsx/style */ './node_modules/styled-jsx/style.js',
      );
      /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_1__,
      );

      var Section = function Section(_ref) {
        var children = _ref.children,
          _ref$title = _ref.title,
          title = _ref$title === void 0 ? '' : _ref$title,
          _ref$textAlign = _ref.textAlign,
          textAlign = _ref$textAlign === void 0 ? 'left' : _ref$textAlign,
          _ref$fullscreen = _ref.fullscreen,
          fullscreen = _ref$fullscreen === void 0 ? false : _ref$fullscreen,
          _ref$alignItems = _ref.alignItems,
          alignItems = _ref$alignItems === void 0 ? 'center' : _ref$alignItems;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'section',
          {
            className:
              styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([
                ['4122649434', [alignItems, textAlign]],
              ]) +
              ' ' +
              'py align w-100 '.concat(fullscreen ? 'h-100' : ''),
          },
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'h1',
            {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic(
                [['4122649434', [alignItems, textAlign]]],
              ),
            },
            title,
          ),
          children,
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
            {
              id: '4122649434',
              dynamic: [alignItems, textAlign],
            },
            '.h-100.__jsx-style-dynamic-selector{min-height:100vh;box-sizing:border-box;}.w-100.__jsx-style-dynamic-selector{width:100%;}.py.__jsx-style-dynamic-selector{padding-top:1vh;padding-bottom:1vh;}.align.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:'
              .concat(alignItems, ';-webkit-box-align:')
              .concat(alignItems, ';-ms-flex-align:')
              .concat(alignItems, ';align-items:')
              .concat(alignItems, ';text-align:')
              .concat(
                textAlign,
                ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9TZWN0aW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnVCLEFBRzBCLEFBSU4sQUFHSyxBQUlILFdBTmYsS0FHcUIsQ0FQRyxrQkFReEIsSUFQQSxtQ0FVeUIsbUdBQ2tCLHFMQUNELHdDQUMxQyIsImZpbGUiOiIvVXNlcnMvdHNlL0NvZGUvVmlzdWFsbHlMYWIvQmlpTWUtc3RvcmUtd2ViL2NvbXBvbmVudHMvU2VjdGlvbi50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdGV4dEFsaWduPzogJ2NlbnRlcicgfCAnbGVmdCcgfCAncmlnaHQnO1xuICBhbGlnbkl0ZW1zPzogJ2NlbnRlcicgfCAnZmxleC1zdGFydCcgfCAnZmxleC1lbmQnO1xuICBmdWxsc2NyZWVuPzogYm9vbGVhbjtcbiAgZmlyc3Q/OiBib29sZWFuO1xuICB0aXRsZT86IHN0cmluZztcbiAgZGVzYz86IHN0cmluZ1tdO1xufVxuXG5jb25zdCBTZWN0aW9uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJUHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIHRpdGxlID0gJycsXG4gIHRleHRBbGlnbiA9ICdsZWZ0JyxcbiAgZnVsbHNjcmVlbiA9IGZhbHNlLFxuICBhbGlnbkl0ZW1zID0gJ2NlbnRlcicsXG59KSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT17YHB5IGFsaWduIHctMTAwICR7ZnVsbHNjcmVlbiA/ICdoLTEwMCcgOiAnJ31gfT5cbiAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g9e3RydWV9PntgXG4gICAgICAuaC0xMDAge1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIC53LTEwMCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLnB5IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDF2aDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDF2aDtcbiAgICAgIH1cbiAgICAgIC5hbGlnbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogJHthbGlnbkl0ZW1zfTtcbiAgICAgICAgdGV4dC1hbGlnbjogJHt0ZXh0QWxpZ259O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9zZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiJdfQ== */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/components/Section.tsx */',
              ),
          ),
        );
      };

      /* harmony default export */ __webpack_exports__['default'] = Section;

      /***/
    },
});
//# sourceMappingURL=taipei-card.js.60ed212ee2c61bd00435.hot-update.js.map
