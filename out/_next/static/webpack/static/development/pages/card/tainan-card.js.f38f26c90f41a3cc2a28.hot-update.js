webpackHotUpdate('static/development/pages/card/tainan-card.js', {
  /***/ './pages/card/tainan-card.tsx':
    /*!************************************!*\
  !*** ./pages/card/tainan-card.tsx ***!
  \************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @babel/runtime-corejs2/regenerator */ './node_modules/@babel/runtime-corejs2/regenerator/index.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/objectSpread */ './node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ './node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js',
      );
      /* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! antd/lib/tabs/style */ './node_modules/antd/lib/tabs/style/index.js',
      );
      /* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! antd/lib/tabs */ './node_modules/antd/lib/tabs/index.js',
      );
      /* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_tabs__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_5__,
      );
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! axios */ './node_modules/axios/index.js',
      );
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        axios__WEBPACK_IMPORTED_MODULE_6__,
      );
      /* harmony import */ var _layouts_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ../../layouts/Card */ './layouts/Card.tsx',
      );
      /* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ../../components/Section */ './components/Section.tsx',
      );
      /* harmony import */ var _components_ClaimCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! ../../components/ClaimCard */ './components/ClaimCard.tsx',
      );
      /* harmony import */ var _components_Discounts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ../../components/Discounts */ './components/Discounts.tsx',
      );
      /* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! ../../components/Profile */ './components/Profile.tsx',
      );
      /* harmony import */ var _fakeData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
        /*! ../../fakeData */ './fakeData.ts',
      );

      function TaiPeiCard(_ref) {
        var user = _ref.user;
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          _layouts_Card__WEBPACK_IMPORTED_MODULE_7__['default'],
          {
            style: {
              background: 'rgba(249, 121, 81, 0.42)',
            },
          },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            _components_Section__WEBPACK_IMPORTED_MODULE_8__['default'],
            {
              fullscreen: true,
              first: true,
              alignItems: 'flex-start',
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              antd_lib_tabs__WEBPACK_IMPORTED_MODULE_4___default.a,
              {
                defaultActiveKey: '1',
                size: 'large',
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                antd_lib_tabs__WEBPACK_IMPORTED_MODULE_4___default.a.TabPane,
                {
                  tab: 'Card',
                  key: '1',
                },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _components_ClaimCard__WEBPACK_IMPORTED_MODULE_9__['default'],
                  {
                    card: _fakeData__WEBPACK_IMPORTED_MODULE_12__['tainanCard'],
                  },
                ),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _components_Discounts__WEBPACK_IMPORTED_MODULE_10__[
                    'default'
                  ],
                  {
                    discounts:
                      _fakeData__WEBPACK_IMPORTED_MODULE_12__['discounts'],
                  },
                ),
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                antd_lib_tabs__WEBPACK_IMPORTED_MODULE_4___default.a.TabPane,
                {
                  tab: 'Profile',
                  key: '2',
                },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _components_Profile__WEBPACK_IMPORTED_MODULE_11__['default'],
                  {
                    user: user,
                  },
                ),
              ),
            ),
          ),
        );
      }

      TaiPeiCard.getInitialProps =
        /*#__PURE__*/
        (function() {
          var _ref3 = Object(
            _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[
              'default'
            ],
          )(
            /*#__PURE__*/
            _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
              function _callee(_ref2) {
                var query, user, res;
                return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                  function _callee$(_context) {
                    while (1) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          query = _ref2.query;
                          user = Object(
                            _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[
                              'default'
                            ],
                          )(
                            {},
                            _fakeData__WEBPACK_IMPORTED_MODULE_12__['fakeUser'],
                          );

                          if (!query.did) {
                            _context.next = 13;
                            break;
                          }

                          _context.prev = 3;
                          _context.next = 6;
                          return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(
                            'API'.concat(query.did),
                          );

                        case 6:
                          res = _context.sent;
                          user = res.data;
                          _context.next = 13;
                          break;

                        case 10:
                          _context.prev = 10;
                          _context.t0 = _context['catch'](3);
                          console.error(_context.t0);

                        case 13:
                          return _context.abrupt('return', {
                            user: user,
                          });

                        case 14:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  },
                  _callee,
                  this,
                  [[3, 10]],
                );
              },
            ),
          );

          return function(_x) {
            return _ref3.apply(this, arguments);
          };
        })();

      /* harmony default export */ __webpack_exports__['default'] = TaiPeiCard;

      /***/
    },
});
//# sourceMappingURL=tainan-card.js.f38f26c90f41a3cc2a28.hot-update.js.map