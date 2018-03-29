// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({803:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var colors = _ref.colors,
      spacing = _ref.spacing;

  return {
    borderColor: colors.tiara,
    padding: spacing.medium
  };
};
},{}],781:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _uiThemeable = require('@instructure/ui-themeable');

var _uiThemeable2 = _interopRequireDefault(_uiThemeable);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  template: function template(theme) {
    var tmpl = function tmpl() {
      return '/*  imported from styles.css  */\n\n._3HUSG6e {\n  box-sizing: border-box;\n  padding: ' + theme.padding + ';\n  -webkit-padding-end: calc(' + theme.padding + ' * 2 + 1em);\n          padding-right: calc(' + theme.padding + ' * 2 + 1em);\n  -webkit-padding-start: ' + theme.padding + ';\n          padding-left: ' + theme.padding + ';\n  flex: 0 0 auto;\n  border-bottom: 1px solid ' + theme.borderColor + ';\n}\n\nhtml[dir="rtl"] ._3HUSG6e {\n          padding-left: calc(' + theme.padding + ' * 2 + 1em);\n          padding-right: ' + theme.padding + ';\n}\n';
    };

    return tmpl.call(theme, theme);
  },
  'root': '_3HUSG6e'
};


/**
---
parent: Modal
---
**/
var ModalHeader = (_dec = (0, _uiThemeable2.default)(_theme2.default, styles), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(ModalHeader, _Component);

  function ModalHeader() {
    _classCallCheck(this, ModalHeader);

    return _possibleConstructorReturn(this, (ModalHeader.__proto__ || Object.getPrototypeOf(ModalHeader)).apply(this, arguments));
  }

  _createClass(ModalHeader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: styles.root },
        this.props.children
      );
    }
  }]);

  ModalHeader.displayName = 'ModalHeader'
  ;
  return ModalHeader;
}(_react.Component), _class2.propTypes = {
  children: _propTypes2.default.node // eslint-disable-line react/require-default-props
}, _temp)) || _class);
exports.default = ModalHeader;
},{"react":22,"prop-types":75,"@instructure/ui-themeable":447,"./theme":803}],802:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return {};
};
},{}],780:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _uiThemeable = require('@instructure/ui-themeable');

var _uiThemeable2 = _interopRequireDefault(_uiThemeable);

var _CustomPropTypes = require('@instructure/ui-utils/lib/react/CustomPropTypes');

var _CustomPropTypes2 = _interopRequireDefault(_CustomPropTypes);

var _Container = require('../../Container');

var _Container2 = _interopRequireDefault(_Container);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  template: function template(theme) {
    var tmpl = function tmpl() {
      return '/*  imported from styles.css  */\n\n._2KUiYH2 {\n  box-sizing: border-box;\n  overflow-y: auto;\n  flex: 1 1 auto;\n}\n\n._3uLnm8A {\n  box-sizing: border-box;\n  max-width: ' + theme.contentMaxWidth + ';\n  margin: 0 auto;\n}\n';
    };

    return tmpl.call(theme, theme);
  },
  'root': '_2KUiYH2',
  'content': '_3uLnm8A'
};


/**
---
parent: Modal
---
**/
var ModalBody = (_dec = (0, _uiThemeable2.default)(_theme2.default, styles), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(ModalBody, _Component);

  function ModalBody() {
    _classCallCheck(this, ModalBody);

    return _possibleConstructorReturn(this, (ModalBody.__proto__ || Object.getPrototypeOf(ModalBody)).apply(this, arguments));
  }

  _createClass(ModalBody, [{
    key: 'render',

    /* eslint-disable react/require-default-props */
    value: function render() {
      return _react2.default.createElement(
        _Container2.default,
        {
          as: 'div',
          className: styles.root,
          padding: this.props.padding
        },
        _react2.default.createElement(
          'div',
          { className: styles.content },
          this.props.children
        )
      );
    }
    /* eslint-enable react/require-default-props */

  }]);

  ModalBody.displayName = 'ModalBody'
  ;
  return ModalBody;
}(_react.Component), _class2.propTypes = {
  children: _propTypes2.default.node,
  padding: _CustomPropTypes2.default.spacing }, _class2.defaultProps = {
  padding: 'medium'
}, _temp)) || _class);
exports.default = ModalBody;
},{"react":22,"prop-types":75,"@instructure/ui-themeable":447,"@instructure/ui-utils/lib/react/CustomPropTypes":980,"../../Container":449,"./theme":802}],800:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var colors = _ref.colors,
      borders = _ref.borders,
      spacing = _ref.spacing;

  return {
    background: colors.porcelain,
    borderColor: colors.tiara,
    borderWidth: borders.widthSmall,
    borderRadius: borders.radiusMedium,
    padding: spacing.small
  };
};
},{}],778:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _uiThemeable = require('@instructure/ui-themeable');

var _uiThemeable2 = _interopRequireDefault(_uiThemeable);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  template: function template(theme) {
    var tmpl = function tmpl() {
      return '/*  imported from styles.css  */\n\n._34cqD_t {\n  flex: 0 0 auto;\n  background: ' + theme.background + ';\n  border-top: ' + theme.borderWidth + ' solid ' + theme.borderColor + ';\n  box-sizing: border-box;\n  padding: ' + theme.padding + ';\n\n  border-bottom-right-radius: ' + theme.borderRadius + ';\n  border-bottom-left-radius: ' + theme.borderRadius + ';\n\n  display: flex;\n  justify-content: flex-end;\n}\n';
    };

    return tmpl.call(theme, theme);
  },
  'root': '_34cqD_t'
};


/**
---
parent: Modal
---
**/
var ModalFooter = (_dec = (0, _uiThemeable2.default)(_theme2.default, styles), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(ModalFooter, _Component);

  function ModalFooter() {
    _classCallCheck(this, ModalFooter);

    return _possibleConstructorReturn(this, (ModalFooter.__proto__ || Object.getPrototypeOf(ModalFooter)).apply(this, arguments));
  }

  _createClass(ModalFooter, [{
    key: 'render',

    /* eslint-enable react/require-default-props */
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: styles.root },
        this.props.children
      );
    }
    /* eslint-disable react/require-default-props */

  }]);

  ModalFooter.displayName = 'ModalFooter'
  ;
  return ModalFooter;
}(_react.Component), _class2.propTypes = {
  children: _propTypes2.default.node }, _temp)) || _class);
exports.default = ModalFooter;
},{"react":22,"prop-types":75,"@instructure/ui-themeable":447,"./theme":800}],898:[function(require,module,exports) {
(function(root) {
  var isOn = false;
  var scrollbarSize;
  var scrollTop;

  function getScrollbarSize() {
    if (typeof scrollbarSize !== 'undefined') return scrollbarSize;

    var doc = document.documentElement;
    var dummyScroller = document.createElement('div');
    dummyScroller.setAttribute('style', 'width:99px;height:99px;' + 'position:absolute;top:-9999px;overflow:scroll;');
    doc.appendChild(dummyScroller);
    scrollbarSize = dummyScroller.offsetWidth - dummyScroller.clientWidth;
    doc.removeChild(dummyScroller);
    return scrollbarSize;
  }

  function hasScrollbar() {
    return document.documentElement.scrollHeight > window.innerHeight;
  }

  function on(options) {
    if (typeof document === 'undefined') return;
    var doc = document.documentElement;
    scrollTop = window.pageYOffset;
    if (hasScrollbar()) {
      doc.style.width = 'calc(100% - '+ getScrollbarSize() +'px)';
    } else {
      doc.style.width = '100%';
    }
    doc.style.position = 'fixed';
    doc.style.top = -scrollTop + 'px';
    doc.style.overflow = 'hidden';
    isOn = true;
  }

  function off() {
    if (typeof document === 'undefined') return;
    var doc = document.documentElement;
    doc.style.width = '';
    doc.style.position = '';
    doc.style.top = '';
    doc.style.overflow = '';
    window.scroll(0, scrollTop);
    isOn = false;
  }

  function toggle() {
    if (isOn) {
      off();
      return;
    }
    on();
  }

  var noScroll = {
    on: on,
    off: off,
    toggle: toggle,
  };

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = noScroll;
  } else {
    root.noScroll = noScroll;
  }
})(this);

},{}],825:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generator;
function generator(_ref) {
  var colors = _ref.colors,
      borders = _ref.borders,
      stacking = _ref.stacking;

  return {
    zIndex: stacking.topmost,
    background: 'rgba(255, 255, 255, 0.75)',
    borderColor: 'transparent',
    focusBorderColor: colors.brand,
    borderRadius: borders.radiusMedium,
    borderWidth: borders.widthSmall
  };
}

generator.canvas = function (variables) {
  return {
    focusBorderColor: variables['ic-brand-primary']
  };
};
},{}],820:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _noScroll = require('no-scroll');

var _noScroll2 = _interopRequireDefault(_noScroll);

var _uiThemeable = require('@instructure/ui-themeable');

var _uiThemeable2 = _interopRequireDefault(_uiThemeable);

var _createChainedFunction = require('@instructure/ui-utils/lib/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _ensureSingleChild = require('@instructure/ui-utils/lib/react/ensureSingleChild');

var _ensureSingleChild2 = _interopRequireDefault(_ensureSingleChild);

var _contains = require('@instructure/ui-utils/lib/dom/contains');

var _contains2 = _interopRequireDefault(_contains);

var _passthroughProps = require('@instructure/ui-utils/lib/react/passthroughProps');

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  template: function template(theme) {
    var tmpl = function tmpl() {
      return '/*  imported from styles.css  */\n\n._1fwijBj {\n  box-sizing: border-box;\n  background: ' + theme.background + ';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n\n  display: flex;\n  justify-content: center;\n\n  outline: none;\n  border: ' + theme.borderWidth + ' solid ' + theme.borderColor + ';\n  border-radius: ' + theme.borderRadius + ';\n\n  z-index: ' + theme.zIndex + ';\n}\n\n  ._1fwijBj:focus {\n    border-color: ' + theme.focusBorderColor + ';\n  }\n\n._35wEe1Q {\n  position: fixed;\n}\n\n.YlfH74y {\n  align-items: flex-start;\n}\n\n.KNI-Mem {\n  align-items: center;\n}\n\n.KIHI1rO {\n  align-items: flex-end;\n}\n';
    };

    return tmpl.call(theme, theme);
  },
  'root': '_1fwijBj',
  'fullScreen': '_35wEe1Q',
  'top': 'YlfH74y',
  'center': 'KNI-Mem',
  'bottom': 'KIHI1rO'
};


/**
---
category: components/utilities
---
**/
var Mask = (_dec = (0, _uiThemeable2.default)(_theme2.default, styles), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Mask, _Component);

  function Mask() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Mask);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Mask.__proto__ || Object.getPrototypeOf(Mask)).call.apply(_ref, [this].concat(args))), _this), _this.dismiss = function (event) {
      if (typeof _this.props.onDismiss === 'function') {
        event.preventDefault();
        _this.props.onDismiss(event);
      }
    }, _this.handleKeyUp = function (event) {
      if (event.keyCode === _keycode2.default.codes.esc && !event.defaultPrevented) {
        _this.dismiss(event);
      }
    }, _this.handleClick = function (event) {
      if (!(0, _contains2.default)(_this._content, event.target)) {
        _this.dismiss(event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Mask, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.fullScreen) {
        _noScroll2.default.on();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.fullScreen) {
        _noScroll2.default.off();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this,
          _classnames;

      var content = (0, _ensureSingleChild2.default)(this.props.children, {
        ref: function ref(el) {
          _this2._content = el;
        }
      });

      var classes = (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, styles.root, true), _defineProperty(_classnames, styles[this.props.placement], true), _defineProperty(_classnames, styles.fullScreen, this.props.fullScreen), _classnames));

      var props = (0, _passthroughProps.omitProps)(this.props, Mask.propTypes);

      if (typeof this.props.onDismiss === 'function' || typeof this.props.onClick === 'function' || typeof this.props.onKeyUp === 'function') {
        props = Object.assign({}, props, {
          onClick: (0, _createChainedFunction2.default)(this.handleClick, this.props.onClick),
          onKeyUp: (0, _createChainedFunction2.default)(this.handleKeyUp, this.props.onKeyUp),
          tabIndex: -1
        });
      }

      return _react2.default.createElement(
        'span',
        Object.assign({}, props, { className: classes }),
        content
      );
    }
  }]);

  Mask.displayName = 'Mask'
  ;
  return Mask;
}(_react.Component), _class2.propTypes = {
  onDismiss: _propTypes2.default.func,
  placement: _propTypes2.default.oneOf(['top', 'center', 'bottom']),
  fullScreen: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  onClick: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func
}, _class2.defaultProps = {
  children: undefined,
  onClick: undefined,
  onKeyUp: undefined,
  onDismiss: undefined,
  placement: 'center',
  fullScreen: false
}, _temp2)) || _class);
exports.default = Mask;
},{"react":22,"prop-types":75,"keycode":890,"classnames":814,"no-scroll":898,"@instructure/ui-themeable":447,"@instructure/ui-utils/lib/createChainedFunction":983,"@instructure/ui-utils/lib/react/ensureSingleChild":1001,"@instructure/ui-utils/lib/dom/contains":1002,"@instructure/ui-utils/lib/react/passthroughProps":982,"./theme":825}],804:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var colors = _ref.colors,
      borders = _ref.borders,
      breakpoints = _ref.breakpoints,
      shadows = _ref.shadows,
      stacking = _ref.stacking;

  return {
    background: colors.white,
    borderColor: colors.tiara,
    borderRadius: borders.radiusMedium,

    autoMinWidth: breakpoints.xSmall,
    smallMaxWidth: breakpoints.small,
    mediumMaxWidth: breakpoints.medium,
    largeMaxWidth: breakpoints.large,

    boxShadow: shadows.depth3,

    zIndex: stacking.topmost
  };
};
},{}],782:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _bowser = require('bowser');

var _bowser2 = _interopRequireDefault(_bowser);

var _uiThemeable = require('@instructure/ui-themeable');

var _uiThemeable2 = _interopRequireDefault(_uiThemeable);

var _passthroughProps = require('@instructure/ui-utils/lib/react/passthroughProps');

var _Mask = require('../../Mask');

var _Mask2 = _interopRequireDefault(_Mask);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  template: function template(theme) {
    var tmpl = function tmpl() {
      return '/*  imported from styles.css  */\n\n._2jZzLHW {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  box-sizing: border-box;\n  background: ' + theme.background + ';\n  box-shadow: ' + theme.boxShadow + ';\n  border: 1px solid ' + theme.borderColor + ';\n  border-radius: ' + theme.borderRadius + ';\n  z-index: ' + theme.zIndex + ';\n}\n\n  ._2jZzLHW._20ow8Oz {\n    display: block;\n    overflow: auto;\n  }\n\n._22Dq6g6,\n._30XFsGm,\n._3z9JqbI,\n.k49EVPr {\n  max-width: 95vw;\n  max-height: 95vh;\n}\n\n._22Dq6g6._20ow8Oz, ._30XFsGm._20ow8Oz, ._3z9JqbI._20ow8Oz, .k49EVPr._20ow8Oz {\n    max-height: none;\n  }\n\n._22Dq6g6 {\n  flex: 0 1 auto;\n  min-width: ' + theme.autoMinWidth + ';\n}\n\n._30XFsGm {\n  flex: 0 1 ' + theme.smallMaxWidth + ';\n}\n\n._3z9JqbI {\n  flex: 0 1 ' + theme.mediumMaxWidth + ';\n}\n\n.k49EVPr {\n  flex: 0 1 ' + theme.largeMaxWidth + ';\n}\n\n._3HDtkoD {\n  flex: 1;\n  width: 100%;\n  height: 100%;\n  box-shadow: none;\n  border: none;\n}\n';
    };

    return tmpl.call(theme, theme);
  },
  'content': '_2jZzLHW',
  'ie11': '_20ow8Oz',
  'auto': '_22Dq6g6',
  'small': '_30XFsGm',
  'medium': '_3z9JqbI',
  'large': 'k49EVPr',
  'fullscreen': '_3HDtkoD'
};


/**
---
parent: Modal
---
**/
var ModalContent = (_dec = (0, _uiThemeable2.default)(_theme2.default, styles), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(ModalContent, _Component);

  function ModalContent() {
    _classCallCheck(this, ModalContent);

    return _possibleConstructorReturn(this, (ModalContent.__proto__ || Object.getPrototypeOf(ModalContent)).apply(this, arguments));
  }

  _createClass(ModalContent, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          size = _props.size,
          children = _props.children,
          shouldCloseOnOverlayClick = _props.shouldCloseOnOverlayClick,
          onDismiss = _props.onDismiss,
          props = _objectWithoutProperties(_props, ['size', 'children', 'shouldCloseOnOverlayClick', 'onDismiss']);

      var ie11 = _bowser2.default.msie && _bowser2.default.version > 10;

      return _react2.default.createElement(
        _Mask2.default,
        {
          onDismiss: shouldCloseOnOverlayClick ? onDismiss : undefined,
          placement: ie11 ? 'top' : 'center',
          fullScreen: true
        },
        _react2.default.createElement(
          'span',
          Object.assign({}, (0, _passthroughProps.omitProps)(this.props, ModalContent.propTypes), {
            className: (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, styles.content, true), _defineProperty(_classnames, styles[size], true), _defineProperty(_classnames, this.props.className, this.props.className), _defineProperty(_classnames, styles.ie11, ie11), _classnames)),
            ref: this.props.contentRef
          }),
          this.props.children
        )
      );
    }
  }]);

  ModalContent.displayName = 'ModalContent'
  ;
  return ModalContent;
}(_react.Component), _class2.propTypes = {
  children: _propTypes2.default.node, // eslint-disable-line react/require-default-props
  size: _propTypes2.default.oneOf(['auto', 'small', 'medium', 'large', 'fullscreen']),
  contentRef: _propTypes2.default.func,
  className: _propTypes2.default.string,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  onDismiss: _propTypes2.default.func
}, _class2.defaultProps = {
  contentRef: function contentRef(el) {},
  size: 'auto',
  children: undefined,
  className: undefined,
  shouldCloseOnOverlayClick: true,
  onDismiss: function onDismiss(event) {}
}, _temp)) || _class);
exports.default = ModalContent;
},{"react":22,"prop-types":75,"classnames":814,"bowser":824,"@instructure/ui-themeable":447,"@instructure/ui-utils/lib/react/passthroughProps":982,"../../Mask":820,"./theme":804}],1060:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClassList;

var _findDOMNode = require('./findDOMNode');

var _findDOMNode2 = _interopRequireDefault(_findDOMNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var classListShimmed = false;

/**
 * ---
 * category: utilities/DOM
 * ---
 *
 * Produces a classList object containing functions
 * for both adding and removing classes from an element.
 * Also provides a contains function to query if the
 * element contains a specified class name.
 *
 * @param {ReactComponent|DomNode} element - component or DOM node
 * @return {Object} object containing classList functions 'contains', 'add', and 'remove'
 */
function getClassList(element) {
  var node = (0, _findDOMNode2.default)(element);

  return {
    contains: function contains(className) {
      return node && hasClass(node, className);
    },
    add: function add(className) {
      shimClassListForIE();

      if (node && node.classList) {
        node.classList.add(className);
      } else if (node && !hasClass(node)) {
        node.className = node.className + ' ' + className;
      }
    },
    remove: function remove(className) {
      shimClassListForIE();

      if (node && node.classList) {
        node.classList.remove(className);
      } else if (node) {
        node.className = node.className // eslint-disable-line no-param-reassign
        .replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
      }
    }
  };
}

function hasClass(node, className) {
  shimClassListForIE();
  if (node.classList) {
    return !!className && node.classList.contains(className);
  } else {
    return (' ' + node.className + ' ').indexOf(' ' + className + ' ') !== -1;
  }
}

function shimClassListForIE() {
  // IE 11 doesn't support classList on SVG elements
  /* istanbul ignore if */
  if (!classListShimmed && !('classList' in document.createElementNS('http://www.w3.org/2000/svg', 'g'))) {
    var descr = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'classList');
    Object.defineProperty(SVGElement.prototype, 'classList', descr);
    classListShimmed = true;
  }
}
},{"./findDOMNode":992}],796:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassList = require('@instructure/ui-utils/lib/dom/getClassList');

var _getClassList2 = _interopRequireDefault(_getClassList);

var _ensureSingleChild = require('@instructure/ui-utils/lib/react/ensureSingleChild');

var _ensureSingleChild2 = _interopRequireDefault(_ensureSingleChild);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UNMOUNTED = exports.UNMOUNTED = 0;
var EXITED = exports.EXITED = 1;
var ENTERING = exports.ENTERING = 2;
var ENTERED = exports.ENTERED = 3;
var EXITING = exports.EXITING = 4;

/**
  Note: this is forked from https://github.com/react-bootstrap/react-overlays/blob/master/src/Transition.js
  so that it works with css modules. The internals are pretty different now, but it has roughly the same api.
**/
var Transition = (_temp = _class = function (_React$Component) {
  _inherits(Transition, _React$Component);

  /* eslint-disable react/require-default-props */
  function Transition(props, context) {
    _classCallCheck(this, Transition);

    var _this = _possibleConstructorReturn(this, (Transition.__proto__ || Object.getPrototypeOf(Transition)).call(this, props, context));

    _initialiseProps.call(_this);

    _this._transitionClassName = null;

    _this._timeouts = [];

    _this.state = {
      transitioning: false
    };
    return _this;
  }
  /* eslint-enable react/require-default-props */

  _createClass(Transition, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.in) {
        if (this.props.transitionOnMount) {
          this.transitionTo(EXITED, function () {
            _this2.performEnter();
          });
        } else {
          this.performEnter();
        }
      } else {
        this.transitionTo(EXITED);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.in !== this.props.in && (nextProps.in && this.props.transitionEnter || !nextProps.in && this.props.transitionExit)) {
        this.setState({ transitioning: true });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;

      if (this.props.transitionClassName !== prevProps.transitionClassName) {
        this.clearTransition(prevProps.transitionClassName);
        this.transitionTo(prevProps.in ? ENTERED : EXITED);
      }

      if (this.props.in !== prevProps.in) {
        if (this.props.in) {
          this.transitionTo(EXITED, function () {
            _this3.performEnter();
          });
        } else {
          this.performExit();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._unmounted = true;

      this._timeouts.forEach(function (timeout) {
        clearTimeout(timeout);
      });

      this._timeouts = null;
    }
  }, {
    key: 'performExit',
    value: function performExit() {
      var _this4 = this;

      if (this._unmounted) return;

      var props = this.props;


      props.onExit();

      if (props.transitionExit) {
        props.onExiting();
        this.transitionTo(EXITING, function () {
          _this4.transitionTo(EXITED, function () {
            if (_this4._unmounted) return;

            _this4.setState({
              transitioning: false
            }, function () {
              props.onExited();
            });
          });
        }, this.props.exitDelay);
      } else {
        this.transitionTo(EXITED, function () {
          props.onExited();
        });
      }
    }
  }, {
    key: 'transitionTo',
    value: function transitionTo(transitionState, transitionCallback) {
      var transitionDuration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (this._unmounted) return;

      var classList = (0, _getClassList2.default)(this);
      var transitionClassName = this.getTransitionClassName(transitionState);
      var prevTransitionClassName = this._transitionClassName;
      var baseTransitionClassName = this.props.transitionClassName;

      this._transitionClassName = transitionClassName;

      if (!classList || this._timeouts === null) {
        return;
      }

      if (this.transitionEnabled(transitionState)) {
        classList.add(baseTransitionClassName);
      } else {
        classList.remove(baseTransitionClassName);
      }

      if (prevTransitionClassName) {
        classList.remove(prevTransitionClassName);
      }

      if (transitionClassName) {
        classList.add(transitionClassName);
      }

      this._timeouts.push(setTimeout(function () {
        if (typeof transitionCallback === 'function') {
          transitionCallback();
        }
      }, transitionDuration));
    }
  }, {
    key: 'clearTransition',
    value: function clearTransition(transitionClassName) {
      if (this._unmounted) return;

      (0, _getClassList2.default)(this).remove(transitionClassName);
    }
  }, {
    key: 'transitionEnabled',
    value: function transitionEnabled(toState) {
      var props = this.props;


      switch (toState) {
        case EXITED:
        case EXITING:
          return props.transitionExit;
        case ENTERED:
        case ENTERING:
          return props.transitionEnter;
        default:
          return false;
      }
    }
  }, {
    key: 'getTransitionClassName',
    value: function getTransitionClassName(transitionState) {
      var props = this.props;


      switch (transitionState) {
        case EXITED:
          return props.exitedClassName;
        case ENTERING:
          return props.enteringClassName;
        case ENTERED:
          return props.enteredClassName;
        case EXITING:
          return props.exitingClassName;
        default:
          return null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var child = (0, _ensureSingleChild2.default)(this.props.children);

      if (!this.props.in && this.props.unmountOnExit && !this.state.transitioning) {
        return null;
      } else {
        return child;
      }
    }
  }]);

  Transition.displayName = 'Transition'
  ;
  return Transition;
}(_react2.default.Component), _class.propTypes = {
  /**
   * Show the component? Triggers the enter or exit animation.
   */
  in: _propTypes2.default.bool,

  /**
   * Unmount the component (remove it from the DOM) when it is not shown.
   */
  unmountOnExit: _propTypes2.default.bool,

  /**
   * Run the enter animation when the component mounts, if it is initially
   * shown
   */
  transitionOnMount: _propTypes2.default.bool,
  /**
   * Run the enter animation
   */
  transitionEnter: _propTypes2.default.bool,
  /**
   * Run the exit animation
   */
  transitionExit: _propTypes2.default.bool,

  /**
   * A Timeout for the animation, in milliseconds, to ensure that a node doesn't
   * transition indefinately if the browser transitionEnd events are
   * canceled or interrupted.
   *
   * By default this is set to a high number (5 seconds) as a failsafe. You should consider
   * setting this to the duration of your animation (or a bit above it).
   */
  enterDelay: _propTypes2.default.number,

  /**
   * A Timeout for the animation, in milliseconds, to ensure that a node doesn't
   * transition indefinately if the browser transitionEnd events are
   * canceled or interrupted.
   *
   * By default this is set to a high number (5 seconds) as a failsafe. You should consider
   * setting this to the duration of your animation (or a bit above it).
   */
  exitDelay: _propTypes2.default.number,

  /**
   * the base CSS class for the transition (transitions go here)
   */
  transitionClassName: _propTypes2.default.string,

  /**
   * CSS class or classes applied when the component is exited
   */
  exitedClassName: _propTypes2.default.string,
  /**
   * CSS class or classes applied while the component is exiting
   */
  exitingClassName: _propTypes2.default.string,
  /**
   * CSS class or classes applied when the component is entered
   */
  enteredClassName: _propTypes2.default.string,
  /**
   * CSS class or classes applied while the component is entering
   */
  enteringClassName: _propTypes2.default.string,

  /**
   * Callback fired before the "entering" classes are applied
   */
  onEnter: _propTypes2.default.func,
  /**
   * Callback fired after the "entering" classes are applied
   */
  onEntering: _propTypes2.default.func,
  /**
   * Callback fired after the "enter" classes are applied
   */
  onEntered: _propTypes2.default.func,
  /**
   * Callback fired before the "exiting" classes are applied
   */
  onExit: _propTypes2.default.func,
  /**
   * Callback fired after the "exiting" classes are applied
   */
  onExiting: _propTypes2.default.func,
  /**
   * Callback fired after the "exited" classes are applied
   */
  onExited: _propTypes2.default.func,

  children: _propTypes2.default.node,

  className: _propTypes2.default.string }, _class.defaultProps = {
  in: false,
  component: 'div',
  unmountOnExit: false,
  transitionOnMount: false,
  transitionEnter: true,
  transitionExit: true,

  enterDelay: 5000,
  exitDelay: 5000,

  onEnter: function onEnter() {},
  onEntering: function onEntering() {},
  onEntered: function onEntered() {},

  onExit: function onExit() {},
  onExiting: function onExiting() {},
  onExited: function onExited() {}
}, _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.performEnter = function () {
    if (_this5._unmounted) return;

    var props = _this5.props;


    props.onEnter();

    if (props.transitionEnter) {
      props.onEntering();

      _this5.transitionTo(ENTERING, function () {
        _this5.transitionTo(ENTERED, function () {
          if (_this5._unmounted) return;

          _this5.setState({
            transitioning: false
          }, function () {
            props.onEntered();
          });
        });
      }, _this5.props.enterDelay);
    } else {
      _this5.transitionTo(ENTERED, function () {
        props.onEntered();
      });
    }
  };
}, _temp);
exports.default = Transition;
},{"react":22,"prop-types":75,"@instructure/ui-utils/lib/dom/getClassList":1060,"@instructure/ui-utils/lib/react/ensureSingleChild":1001}],774:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _uiThemeable = require('@instructure/ui-themeable');

var _uiThemeable2 = _interopRequireDefault(_uiThemeable);

var _BaseTransition = require('./BaseTransition');

var _BaseTransition2 = _interopRequireDefault(_BaseTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  template: function template(theme) {
    var tmpl = function tmpl() {
      return '/*  imported from styles.css  */\n\n._1-1d3yZ {\n  /* trigger hardware acceleration for smoother animation */\n  transform: translate3d(0, 0, 0);\n}\n\n/* Animation type: fade */\n\n._1IHSq_f {\n  transition: opacity 300ms, transform 300ms ease-out;\n}\n\n._2kCpSSh,\n.a-zPWi- {\n  opacity: 0.01;\n}\n\n.tOJX2IO,\n._1rROD17 {\n  opacity: 1;\n}\n\n/* Animation type: scale */\n\n._3HOWsgp {\n  transition:\n    opacity 300ms,\n    transform 300ms cubic-bezier(0.175, 0.885, 0.320, 1.275);\n}\n\n._3Jge7Ga,\n._2LN7qdw {\n  transform: scale(0.01) translate3d(0, 0, 0);\n  opacity: 0.01;\n}\n\n._1SJZbsM,\n._1uPVe2I {\n  transform: scale(1) translate3d(0, 0, 0);\n  opacity: 1;\n}\n\n/* Animation type: slide */\n\n/*\n  Note: the transitions for slide are:\n  from EXITED to ENTERING and from ENTERED to EXITING.\n\n  ENTERED and EXITED will be set directly when enter or exit transitions are disabled and they reset the \'stage\'\n  for the next transition.\n\n  The base transition class enables/disables transitions from one state to another, so transitions should be\n  set there.\n*/\n\n._1VTSTxL,\n.pQaqUQx,\n.cOmSmIQ,\n._1XMg-9I {\n  transition: opacity 300ms, transform 300ms;\n}\n\n._3O7Eui2,\n._1Xe2ZQh,\n.yQGc2tF,\n._1jAG_ri,\n._1QrfKhU,\n._3FqEZck,\n._3l2vVtB,\n._2fh4svf {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n\n._1k5s7s1,\n._2_wMRZP,\n._3UwRVZS,\n._3I-1oXs,\n._3u0FhZN,\n._1MjJcAy,\n._2yg-gPj,\n._378W8OY {\n  opacity: 0.01;\n}\n\n._1k5s7s1 {\n  transform: translate3d(-50%, 0, 0);\n}\n\n._3u0FhZN {\n  transform: translate3d(50%, 0, 0);\n}\n\n._2_wMRZP {\n  transform: translate3d(50%, 0, 0);\n}\n\n._1MjJcAy {\n  transform: translate3d(-50%, 0, 0);\n}\n\n._3UwRVZS {\n  transform: translate3d(0, -50%, 0);\n}\n\n._2yg-gPj {\n  transform: translate3d(0, 50%, 0);\n}\n\n._3I-1oXs {\n  transform: translate3d(0, 50%, 0);\n}\n\n._378W8OY {\n  transform: translate3d(0, -50%, 0);\n}\n\n';
    };

    return tmpl.call(theme, theme);
  },
  'root': '_1-1d3yZ',
  'fade': '_1IHSq_f',
  'fade--exiting': '_2kCpSSh',
  'fade--exited': 'a-zPWi-',
  'fade--entering': 'tOJX2IO',
  'fade--entered': '_1rROD17',
  'scale': '_3HOWsgp',
  'scale--exited': '_3Jge7Ga',
  'scale--exiting': '_2LN7qdw',
  'scale--entered': '_1SJZbsM',
  'scale--entering': '_1uPVe2I',
  'slide-left': '_1VTSTxL',
  'slide-right': 'pQaqUQx',
  'slide-up': 'cOmSmIQ',
  'slide-down': '_1XMg-9I',
  'slide-left--entering': '_3O7Eui2',
  'slide-left--entered': '_1Xe2ZQh',
  'slide-right--entering': 'yQGc2tF',
  'slide-right--entered': '_1jAG_ri',
  'slide-up--entering': '_1QrfKhU',
  'slide-up--entered': '_3FqEZck',
  'slide-down--entering': '_3l2vVtB',
  'slide-down--entered': '_2fh4svf',
  'slide-left--exiting': '_1k5s7s1',
  'slide-right--exiting': '_2_wMRZP',
  'slide-up--exiting': '_3UwRVZS',
  'slide-down--exiting': '_3I-1oXs',
  'slide-left--exited': '_3u0FhZN',
  'slide-right--exited': '_1MjJcAy',
  'slide-up--exited': '_2yg-gPj',
  'slide-down--exited': '_378W8OY'
};

/**
---
category: components/utilities
---
**/

var Transition = (_dec = (0, _uiThemeable2.default)(null, styles), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Transition, _Component);

  function Transition() {
    _classCallCheck(this, Transition);

    return _possibleConstructorReturn(this, (Transition.__proto__ || Object.getPrototypeOf(Transition)).apply(this, arguments));
  }

  _createClass(Transition, [{
    key: 'render',
    // needs to match the times in the CSS

    /* eslint-enable react/require-default-props */

    value: function render() {
      var _props = this.props,
          type = _props.type,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['type', 'children']);

      return type ? _react2.default.createElement(
        _BaseTransition2.default,
        Object.assign({}, props, {
          enterDelay: Transition.duration,
          exitDelay: Transition.duration,
          transitionClassName: styles[type],
          exitedClassName: styles[type + '--exited'],
          exitingClassName: styles[type + '--exiting'],
          enteredClassName: styles[type + '--entered'],
          enteringClassName: styles[type + '--entering']
        }),
        children
      ) : children;
    }
    /* eslint-disable react/require-default-props */

  }]);

  Transition.displayName = 'Transition'
  ;
  return Transition;
}(_react.Component), _class2.propTypes = {
  type: _propTypes2.default.oneOf(['fade', 'scale', 'slide-down', 'slide-up', 'slide-left', 'slide-right']),
  /**
   * A single element to animate in and out
   */
  children: _propTypes2.default.element,
  /**
   * Show the component; triggers the enter or exit animation
   */
  in: _propTypes2.default.bool,
  /**
   * Unmount the component (remove it from the DOM) when it is not shown
   */
  unmountOnExit: _propTypes2.default.bool,
  /**
   * Run the enter animation when the component mounts, if it is initially
   * shown
   */
  transitionOnMount: _propTypes2.default.bool,
  /**
   * Run the enter animation
   */
  transitionEnter: _propTypes2.default.bool,
  /**
   * Run the exit animation
   */
  transitionExit: _propTypes2.default.bool,
  /**
   * Callback fired before the "entering" classes are applied
   */
  onEnter: _propTypes2.default.func,
  /**
   * Callback fired after the "entering" classes are applied
   */
  onEntering: _propTypes2.default.func,
  /**
   * Callback fired after the "enter" classes are applied
   */
  onEntered: _propTypes2.default.func,
  /**
   * Callback fired before the "exiting" classes are applied
   */
  onExit: _propTypes2.default.func,
  /**
   * Callback fired after the "exiting" classes are applied
   */
  onExiting: _propTypes2.default.func,
  /**
   * Callback fired after the "exited" classes are applied
   */
  onExited: _propTypes2.default.func }, _class2.defaultProps = {
  type: 'fade',
  in: false,
  unmountOnExit: false,
  transitionOnMount: false,
  transitionEnter: true,
  transitionExit: true,

  onEnter: function onEnter() {},
  onEntering: function onEntering() {},
  onEntered: function onEntered() {},
  onExit: function onExit() {},
  onExiting: function onExiting() {},
  onExited: function onExited() {}
}, _class2.duration = 300, _temp)) || _class);
exports.default = Transition;
},{"react":22,"prop-types":75,"@instructure/ui-themeable":447,"./BaseTransition":796}],741:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalFooter = exports.ModalBody = exports.ModalHeader = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _ModalHeader = require('./ModalHeader');

Object.defineProperty(exports, 'ModalHeader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ModalHeader).default;
  }
});

var _ModalBody = require('./ModalBody');

Object.defineProperty(exports, 'ModalBody', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ModalBody).default;
  }
});

var _ModalFooter = require('./ModalFooter');

Object.defineProperty(exports, 'ModalFooter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ModalFooter).default;
  }
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CustomPropTypes = require('@instructure/ui-utils/lib/react/CustomPropTypes');

var _CustomPropTypes2 = _interopRequireDefault(_CustomPropTypes);

var _passthroughProps = require('@instructure/ui-utils/lib/react/passthroughProps');

var _createChainedFunction = require('@instructure/ui-utils/lib/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _deprecated = require('@instructure/ui-utils/lib/react/deprecated');

var _deprecated2 = _interopRequireDefault(_deprecated);

var _ModalContent = require('./ModalContent');

var _ModalContent2 = _interopRequireDefault(_ModalContent);

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

var _ModalBody2 = _interopRequireDefault(_ModalBody);

var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

var _Portal = require('../Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _Dialog = require('../Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Transition = require('../Transition');

var _Transition2 = _interopRequireDefault(_Transition);

var _CloseButton = require('../CloseButton');

var _CloseButton2 = _interopRequireDefault(_CloseButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
---
category: components/dialogs
---
**/

var Modal = (_dec = (0, _deprecated2.default)('3.0.0', {
  onRequestClose: 'onDismiss',
  isOpen: 'open',
  onReady: 'onOpen',
  onAfterOpen: 'onOpen',
  getDefaultFocusElement: 'defaultFocusElement',
  closeButtonVariant: true,
  padding: true
}), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this._timeouts = [];

    _this.handlePortalOpen = function () {
      _this._timeouts.push(setTimeout(function () {
        if (_this._isMounted) {
          _this.setState({
            open: true
          });
        }
      }));
    };

    _this.handleTransitionExited = function () {
      _this.setState({
        open: false,
        transitioning: false
      });
    };

    _this.state = {
      open: props.open,
      transitioning: false
    };
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._isMounted = true;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.open && !nextProps.open) {
        // closing
        this.setState({
          transitioning: this.props.transition !== null
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._isMounted = false;
      this._timeouts.forEach(function (timeout) {
        return clearTimeout(timeout);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          _contentRef = _props.contentRef,
          props = _objectWithoutProperties(_props, ['children', 'contentRef']);

      return _react2.default.createElement(
        _Portal2.default,
        Object.assign({}, (0, _passthroughProps.pickProps)(this.props, _Portal2.default.propTypes), {
          open: this.props.open || this.state.transitioning,
          onOpen: (0, _createChainedFunction2.default)(this.handlePortalOpen, this.props.onOpen)
        }),
        _react2.default.createElement(
          _Transition2.default,
          Object.assign({}, (0, _passthroughProps.pickProps)(this.props, _Transition2.default.propTypes), {
            'in': this.props.open,
            transitionOnMount: true,
            unmountOnExit: true,
            type: this.props.transition,
            onExited: (0, _createChainedFunction2.default)(this.handleTransitionExited, this.props.onExited)
          }),
          _react2.default.createElement(
            _Dialog2.default,
            Object.assign({}, (0, _passthroughProps.pickProps)(this.props, _Dialog2.default.propTypes), {
              defaultFocusElement: this.defaultFocusElement,
              contentElement: function contentElement() {
                return _this2._content;
              },
              shouldCloseOnDocumentClick: false,
              shouldCloseOnEscape: true,
              shouldContainFocus: true,
              open: this.state.open,
              role: 'region'
            }),
            _react2.default.createElement(
              _ModalContent2.default,
              Object.assign({}, (0, _passthroughProps.omitProps)(props, Modal.propTypes), (0, _passthroughProps.pickProps)(props, _ModalContent2.default.propTypes), {
                contentRef: function contentRef(el) {
                  _this2._content = el;
                  if (typeof _contentRef === 'function') {
                    _contentRef(el);
                  }
                }
              }),
              _react2.default.createElement(
                _CloseButton2.default,
                {
                  buttonRef: function buttonRef(el) {
                    _this2._closeButton = el;
                    _this2.props.closeButtonRef(el);
                  },
                  placement: 'end',
                  offset: 'medium',
                  onClick: this.props.onDismiss
                },
                this.props.closeButtonLabel
              ),
              children
            )
          )
        )
      );
    }
  }, {
    key: 'defaultFocusElement',
    get: function get() {
      var _this3 = this;

      return this.props.defaultFocusElement || function () {
        return _this3._closeButton;
      };
    }
  }]);

  Modal.displayName = 'Modal'
  ;
  return Modal;
}(_react.Component), _class2.propTypes = {
  /**
   * An accessible label for the `<Modal />` content
   */
  label: _propTypes2.default.string.isRequired,

  /**
   * An accessible label for the close button. The close button won't display without this label.
   */
  closeButtonLabel: _propTypes2.default.string.isRequired,

  /**
   * The children to be rendered within the `<Modal />`
   */
  children: _CustomPropTypes2.default.Children.enforceOrder([_ModalHeader2.default, _ModalBody2.default, _ModalFooter2.default], [_ModalHeader2.default, _ModalBody2.default], [_ModalBody2.default, _ModalFooter2.default], [_ModalBody2.default]),

  /*
   * The size of the `<Modal />` content
   */
  size: _propTypes2.default.oneOf(['auto', 'small', 'medium', 'large', 'fullscreen']),

  /**
   * Whether or not the `<Modal />` is open
   */
  open: _propTypes2.default.bool,

  /**
   * An element or a function returning an element to focus by default
   */
  defaultFocusElement: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
  /**
   * An element or a function returning an element to apply `aria-hidden` to
   */
  applicationElement: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.element, _propTypes2.default.func]),

  /**
   * Whether focus should be returned to the trigger when the `<Modal/>` is closed
   */
  shouldReturnFocus: _propTypes2.default.bool,

  /**
   * Whether the `<Modal/>` should request close when the overlay is clicked
   */
  shouldCloseOnOverlayClick: _propTypes2.default.bool,

  /**
   * Callback fired when `<Modal />` content has been mounted in the DOM
   */
  onOpen: _propTypes2.default.func,

  /**
   * Callback fired when `<Modal />` has been unmounted from the DOM
   */
  onClose: _propTypes2.default.func,

  /**
   * Callback fired when the `<Modal />` is requesting to be closed
   */
  onDismiss: _propTypes2.default.func,

  /**
   *
   * A function that returns a reference to the content element
   */
  contentRef: _propTypes2.default.func,

  /**
   *
   * A function that returns a reference to the close button element
   */
  closeButtonRef: _propTypes2.default.func,

  /**
   * An element or a function returning an element to use as the mount node
   * for the `<Modal />` (defaults to `document.body`)
   */
  mountNode: _propTypes2.default.oneOfType([_CustomPropTypes2.default.element, _propTypes2.default.func]),
  /**
   * Insert the element at the 'top' of the mountNode or at the 'bottom'
   */
  insertAt: _propTypes2.default.oneOf(['bottom', 'top']),

  transition: _Transition2.default.propTypes.type,

  /**
   * Callback fired before the <Modal /> transitions in
   */
  onEnter: _propTypes2.default.func,
  /**
   * Callback fired as the <Modal /> begins to transition in
   */
  onEntering: _propTypes2.default.func,
  /**
   * Callback fired after the <Modal /> finishes transitioning in
   */
  onEntered: _propTypes2.default.func,
  /**
   * Callback fired right before the <Modal /> transitions out
   */
  onExit: _propTypes2.default.func,
  /**
   * Callback fired as the <Modal /> begins to transition out
   */
  onExiting: _propTypes2.default.func,
  /**
   * Callback fired after the <Modal /> finishes transitioning out
   */
  onExited: _propTypes2.default.func
}, _class2.defaultProps = {
  open: false,
  size: 'auto',
  transition: 'fade',
  onOpen: function onOpen(event) {},
  onClose: function onClose(event) {},
  onDismiss: function onDismiss(event) {},
  onEnter: function onEnter() {},
  onEntering: function onEntering() {},
  onEntered: function onEntered() {},
  onExit: function onExit() {},
  onExiting: function onExiting() {},
  onExited: function onExited() {},
  mountNode: null,
  insertAt: 'bottom',
  contentRef: function contentRef(el) {},
  closeButtonRef: function closeButtonRef(el) {},
  shouldCloseOnOverlayClick: true,
  shouldReturnFocus: true,
  applicationElement: null,
  defaultFocusElement: null,
  children: null
}, _temp)) || _class);
exports.default = Modal;
},{"./ModalHeader":781,"./ModalBody":780,"./ModalFooter":778,"react":22,"prop-types":75,"@instructure/ui-utils/lib/react/CustomPropTypes":980,"@instructure/ui-utils/lib/react/passthroughProps":982,"@instructure/ui-utils/lib/createChainedFunction":983,"@instructure/ui-utils/lib/react/deprecated":993,"./ModalContent":782,"../Portal":773,"../Dialog":772,"../Transition":774,"../CloseButton":771}],13:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generator;
function generator() {
  return {};
}
},{}],9:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Heading = require("@instructure/ui-core/lib/components/Heading");

var _Heading2 = _interopRequireDefault(_Heading);

var _Text = require("@instructure/ui-core/lib/components/Text");

var _Text2 = _interopRequireDefault(_Text);

var _Container = require("@instructure/ui-core/lib/components/Container");

var _Container2 = _interopRequireDefault(_Container);

var _List = require("@instructure/ui-core/lib/components/List");

var _List2 = _interopRequireDefault(_List);

var _Button = require("@instructure/ui-core/lib/components/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Modal = require("@instructure/ui-core/lib/components/Modal");

var _Modal2 = _interopRequireDefault(_Modal);

var _DeckPicker = require("../DeckPicker");

var _DeckPicker2 = _interopRequireDefault(_DeckPicker);

var _uiThemeable = require("@instructure/ui-themeable");

var _uiThemeable2 = _interopRequireDefault(_uiThemeable);

var _theme = require("./theme.js");

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  template: function template(theme) {
    var tmpl = function tmpl() {
      return "/*  imported from styles.css  */\n\n.Home__root__2fUWydo {\n  padding: 20px;\n  background-color: rgba(0, 0, 0, 0.8);\n  height: auto;\n  position: fixed;\n  left: 5vw;\n  right: 5vw;\n  top: 5vh;\n  bottom: 5vh;\n  display: inline;\n}\n\n.Home__content__2zTluZN {\n  border: 1px dotted red;\n  text-align: left;\n}\n";
    };

    return tmpl.call(theme, theme);
  },
  'root': 'Home__root__2fUWydo',
  'content': 'Home__content__2zTluZN'
};

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      deckPickerModalOpen: false
    }, _this.openDeckPickerModal = function () {
      return _this.setState({ deckPickerModalOpen: true });
    }, _this.closeDeckPickerModal = function () {
      return _this.setState({ deckPickerModalOpen: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: styles.root },
        _react2.default.createElement(
          _Heading2.default,
          { level: "h1", color: "primary-inverse" },
          "Flash Cards"
        ),
        _react2.default.createElement(
          _Container2.default,
          { as: "div", textAlign: "start" },
          _react2.default.createElement(
            _Heading2.default,
            { color: "primary-inverse", level: "h1", margin: "0 0 x-small" },
            "What is This?"
          ),
          _react2.default.createElement(
            _Text2.default,
            { as: "p", color: "primary-inverse" },
            "Flash Cards is a web app being developed to help with learning things. ",
            "It's",
            " being developed by Clay Diffrient as a project for the EDPS 6560 Mulitimedia Learning class in the pursuit of a M.Ed in Instructional Design and Educational Technology."
          ),
          _react2.default.createElement(
            _Heading2.default,
            { color: "primary-inverse", margin: "0 0 x-small" },
            "What Will It Do?"
          ),
          _react2.default.createElement(
            _Text2.default,
            { as: "p", color: "primary-inverse" },
            "I have somewhat grand aspirations for what it will do eventually, but for now I hope to do the following things:"
          ),
          _react2.default.createElement(
            _List2.default,
            null,
            _react2.default.createElement(
              _List.ListItem,
              null,
              _react2.default.createElement(
                _Text2.default,
                { color: "primary-inverse" },
                "[DONE] Show a flash card and flip to the other side via user interaction."
              )
            ),
            _react2.default.createElement(
              _List.ListItem,
              null,
              _react2.default.createElement(
                _Text2.default,
                { color: "primary-inverse" },
                "[DONE] Show a flash card and flip to the other side after a given time."
              )
            ),
            _react2.default.createElement(
              _List.ListItem,
              null,
              _react2.default.createElement(
                _Text2.default,
                { color: "primary-inverse" },
                "Track correct vs. incorrect answers by user input"
              )
            ),
            _react2.default.createElement(
              _List.ListItem,
              null,
              _react2.default.createElement(
                _Text2.default,
                { color: "primary-inverse" },
                "Summarize stats at the end of a session"
              )
            ),
            _react2.default.createElement(
              _List.ListItem,
              null,
              _react2.default.createElement(
                _Text2.default,
                { color: "primary-inverse" },
                "[DONE] Allow import/export of flash cards in a file format (likely JSON)"
              )
            )
          )
        ),
        _react2.default.createElement(
          _Container2.default,
          { as: "div", textAlign: "center", margin: "medium 0 0 0" },
          _react2.default.createElement(
            _Button2.default,
            { onClick: this.openDeckPickerModal },
            "Start"
          )
        ),
        _react2.default.createElement(
          _Modal2.default,
          {
            label: "Deck Selector",
            closeButtonLabel: "Close",
            open: this.state.deckPickerModalOpen,
            applicationElement: function applicationElement() {
              return document.getElementById("main");
            },
            onDismiss: this.closeDeckPickerModal,
            size: "medium"
          },
          _react2.default.createElement(
            _Modal.ModalHeader,
            null,
            _react2.default.createElement(
              _Heading2.default,
              null,
              "Choose a Deck of Cards"
            )
          ),
          _react2.default.createElement(
            _Modal.ModalBody,
            null,
            _react2.default.createElement(_DeckPicker2.default, null)
          )
        )
      );
    }
  }]);

  Home.displayName = "Home"
  ;
  return Home;
}(_react.Component);

exports.default = (0, _uiThemeable2.default)(_theme2.default, styles)(Home);
},{"react":22,"@instructure/ui-core/lib/components/Heading":737,"@instructure/ui-core/lib/components/Text":738,"@instructure/ui-core/lib/components/Container":449,"@instructure/ui-core/lib/components/List":740,"@instructure/ui-core/lib/components/Button":739,"@instructure/ui-core/lib/components/Modal":741,"../DeckPicker":10,"@instructure/ui-themeable":447,"./theme.js":13}],1129:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '52123' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[1129,9])
//# sourceMappingURL=/dist/188610489f3a069b9cdcdecca5e71350.map