webpackHotUpdate('static/development/pages/card/taipei-card.js', {
  /***/ './components/Discounts.tsx':
    /*!**********************************!*\
  !*** ./components/Discounts.tsx ***!
  \**********************************/
    /*! exports provided: Discount, default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'Discount',
        function() {
          return Discount;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return Discounts;
        },
      );
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

      function Discount(_ref) {
        var data = _ref.data;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'div',
          {
            className: 'jsx-716241999' + ' ' + 'container',
          },
          data.discountText,
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
            {
              id: '716241999',
            },
            '.container.jsx-716241999{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:8px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9EaXNjb3VudHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNrQixBQUd3QiwwRUFDQSxhQUVoQixBQUFDIiwiZmlsZSI6Ii9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9EaXNjb3VudHMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsidHlwZSBURGlzY291bnQgPSB7XG4gIGNvdmVyOiBzdHJpbmc7XG4gIHN0b3JlTmFtZTogc3RyaW5nO1xuICBkaXNjb3VudFRleHQ6IHN0cmluZztcbn07XG5cbnR5cGUgVFByb3BzID0ge1xuICBkaXNjb3VudHM6IFREaXNjb3VudFtdO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIERpc2NvdW50KHsgZGF0YSB9OiB7IGRhdGE6IFREaXNjb3VudCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIHtkYXRhLmRpc2NvdW50VGV4dH1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgIHBhZGRpbmc6IFxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpc2NvdW50cyh7IGRpc2NvdW50cyB9OiBUUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAge2Rpc2NvdW50cy5tYXAoKGRpc2NvdW50LCBpZHgpID0+IChcbiAgICAgICAgPERpc2NvdW50IGtleT17YCR7aWR4fTogJHtkaXNjb3VudC5zdG9yZU5hbWV9YH0gZGF0YT17ZGlzY291bnR9IC8+XG4gICAgICApKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/components/Discounts.tsx */',
          ),
        );
      }
      function Discounts(_ref2) {
        var discounts = _ref2.discounts;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'div',
          {
            className: 'jsx-1825507181' + ' ' + 'container',
          },
          discounts.map(function(discount, idx) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              Discount,
              {
                key: ''.concat(idx, ': ').concat(discount.storeName),
                data: discount,
              },
            );
          }),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
            {
              id: '1825507181',
            },
            '.container.jsx-1825507181{margin:16px 0;padding:16px;border-radius:10px;background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9EaXNjb3VudHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCa0IsQUFHeUIsY0FDRCxhQUNNLG1CQUNJLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvdHNlL0NvZGUvVmlzdWFsbHlMYWIvQmlpTWUtc3RvcmUtd2ViL2NvbXBvbmVudHMvRGlzY291bnRzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbInR5cGUgVERpc2NvdW50ID0ge1xuICBjb3Zlcjogc3RyaW5nO1xuICBzdG9yZU5hbWU6IHN0cmluZztcbiAgZGlzY291bnRUZXh0OiBzdHJpbmc7XG59O1xuXG50eXBlIFRQcm9wcyA9IHtcbiAgZGlzY291bnRzOiBURGlzY291bnRbXTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBEaXNjb3VudCh7IGRhdGEgfTogeyBkYXRhOiBURGlzY291bnQgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICB7ZGF0YS5kaXNjb3VudFRleHR9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgICBwYWRkaW5nOiBcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXNjb3VudHMoeyBkaXNjb3VudHMgfTogVFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIHtkaXNjb3VudHMubWFwKChkaXNjb3VudCwgaWR4KSA9PiAoXG4gICAgICAgIDxEaXNjb3VudCBrZXk9e2Ake2lkeH06ICR7ZGlzY291bnQuc3RvcmVOYW1lfWB9IGRhdGE9e2Rpc2NvdW50fSAvPlxuICAgICAgKSl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/components/Discounts.tsx */',
          ),
        );
      }

      /***/
    },
});
//# sourceMappingURL=taipei-card.js.d7e0456892aca2e59a38.hot-update.js.map