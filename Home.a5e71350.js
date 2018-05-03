// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
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
})({612:[function(require,module,exports) {
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
},{}],551:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp; /*
                                   * The MIT License (MIT)
                                   *
                                   * Copyright (c) 2015 - present Instructure, Inc.
                                   *
                                   * Permission is hereby granted, free of charge, to any person obtaining a copy
                                   * of this software and associated documentation files (the "Software"), to deal
                                   * in the Software without restriction, including without limitation the rights
                                   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                   * copies of the Software, and to permit persons to whom the Software is
                                   * furnished to do so, subject to the following conditions:
                                   *
                                   * The above copyright notice and this permission notice shall be included in all
                                   * copies or substantial portions of the Software.
                                   *
                                   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                   * SOFTWARE.
                                   */

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
      return '/*  imported from styles.css  */\n\n._3HUSG6e {\n  box-sizing: border-box;\n  padding: ' + theme.padding + ';\n  padding-right: calc(' + theme.padding + ' * 2 + 1em);\n  padding-left: ' + theme.padding + ';\n  flex: 0 0 auto;\n  border-bottom: 0.0625rem solid ' + theme.borderColor + ';\n}\n\nhtml[dir="rtl"] ._3HUSG6e {\n  padding-left: calc(' + theme.padding + ' * 2 + 1em);\n  padding-right: ' + theme.padding + ';\n}\n';
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
  children: _propTypes2.default.node
}, _temp)) || _class);
exports.default = ModalHeader;
},{"react":8,"prop-types":223,"@instructure/ui-themeable":298,"./theme":612}],613:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return {};
};
},{}],550:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp; /*
                                   * The MIT License (MIT)
                                   *
                                   * Copyright (c) 2015 - present Instructure, Inc.
                                   *
                                   * Permission is hereby granted, free of charge, to any person obtaining a copy
                                   * of this software and associated documentation files (the "Software"), to deal
                                   * in the Software without restriction, including without limitation the rights
                                   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                   * copies of the Software, and to permit persons to whom the Software is
                                   * furnished to do so, subject to the following conditions:
                                   *
                                   * The above copyright notice and this permission notice shall be included in all
                                   * copies or substantial portions of the Software.
                                   *
                                   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                   * SOFTWARE.
                                   */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Container = require('@instructure/ui-container/lib/components/Container');

var _Container2 = _interopRequireDefault(_Container);

var _uiThemeable = require('@instructure/ui-themeable');

var _uiThemeable2 = _interopRequireDefault(_uiThemeable);

var _ThemeablePropTypes = require('@instructure/ui-themeable/lib/utils/ThemeablePropTypes');

var _ThemeablePropTypes2 = _interopRequireDefault(_ThemeablePropTypes);

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
  }]);

  ModalBody.displayName = 'ModalBody'
  ;
  return ModalBody;
}(_react.Component), _class2.propTypes = {
  children: _propTypes2.default.node,
  padding: _ThemeablePropTypes2.default.spacing
}, _class2.defaultProps = {
  padding: 'medium'
}, _temp)) || _class);
exports.default = ModalBody;
},{"react":8,"prop-types":223,"@instructure/ui-container/lib/components/Container":355,"@instructure/ui-themeable":298,"@instructure/ui-themeable/lib/utils/ThemeablePropTypes":311,"./theme":613}],614:[function(require,module,exports) {
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
},{}],552:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp; /*
                                   * The MIT License (MIT)
                                   *
                                   * Copyright (c) 2015 - present Instructure, Inc.
                                   *
                                   * Permission is hereby granted, free of charge, to any person obtaining a copy
                                   * of this software and associated documentation files (the "Software"), to deal
                                   * in the Software without restriction, including without limitation the rights
                                   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                   * copies of the Software, and to permit persons to whom the Software is
                                   * furnished to do so, subject to the following conditions:
                                   *
                                   * The above copyright notice and this permission notice shall be included in all
                                   * copies or substantial portions of the Software.
                                   *
                                   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                   * SOFTWARE.
                                   */

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
      return '/*  imported from styles.css  */\n\n._34cqD_t {\n  flex: 0 0 auto;\n  background: ' + theme.background + ';\n  border-top: ' + theme.borderWidth + ' solid ' + theme.borderColor + ';\n  box-sizing: border-box;\n  padding: ' + theme.padding + ';\n  border-bottom-right-radius: ' + theme.borderRadius + ';\n  border-bottom-left-radius: ' + theme.borderRadius + ';\n  display: flex;\n  justify-content: flex-end;\n}\n';
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
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: styles.root },
        this.props.children
      );
    }
  }]);

  ModalFooter.displayName = 'ModalFooter'
  ;
  return ModalFooter;
}(_react.Component), _class2.propTypes = {
  children: _propTypes2.default.node
}, _temp)) || _class);
exports.default = ModalFooter;
},{"react":8,"prop-types":223,"@instructure/ui-themeable":298,"./theme":614}],643:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * The MIT License (MIT)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Copyright (c) 2015 - present Instructure, Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * in the Software without restriction, including without limitation the rights
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * The above copyright notice and this permission notice shall be included in all
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

exports.default = ms;

var _parseUnit3 = require('./parseUnit');

var _parseUnit4 = _interopRequireDefault(_parseUnit3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ---
 * category: utilities
 * ---
 * Converts a unit value time combination (s, ms) to a number representing ms
 *
 * @module ms
 *
 * Example inputs:
 *  - '100s'
 *  - '20ms'
 *
 * @param {String} val
 * @returns {Number} Returns numerical representation of milliseconds
*/
function ms(val) {
  if (!val || typeof val === 'number') {
    return val;
  }

  var _parseUnit = (0, _parseUnit4.default)(val),
      _parseUnit2 = _slicedToArray(_parseUnit, 2),
      num = _parseUnit2[0],
      unit = _parseUnit2[1];

  if (unit === 'ms') {
    return num;
  } else if (unit === 's') {
    return num * 1000;
  } else {
    return num;
  }
}
},{"./parseUnit":525}],701:[function(require,module,exports) {
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
/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
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
},{"./findDOMNode":433}],635:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps; /*
                                      * The MIT License (MIT)
                                      *
                                      * Copyright (c) 2015 - present Instructure, Inc.
                                      *
                                      * Permission is hereby granted, free of charge, to any person obtaining a copy
                                      * of this software and associated documentation files (the "Software"), to deal
                                      * in the Software without restriction, including without limitation the rights
                                      * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                      * copies of the Software, and to permit persons to whom the Software is
                                      * furnished to do so, subject to the following conditions:
                                      *
                                      * The above copyright notice and this permission notice shall be included in all
                                      * copies or substantial portions of the Software.
                                      *
                                      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                      * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                      * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                      * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                      * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                      * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                      * SOFTWARE.
                                      */

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

  className: _propTypes2.default.string
}, _class.defaultProps = {
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
},{"react":8,"prop-types":223,"@instructure/ui-utils/lib/dom/getClassList":701,"@instructure/ui-utils/lib/react/ensureSingleChild":526}],636:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var transitions = _ref.transitions;

  return {
    duration: transitions.duration
  };
};
},{}],571:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp; /*
                                   * The MIT License (MIT)
                                   *
                                   * Copyright (c) 2015 - present Instructure, Inc.
                                   *
                                   * Permission is hereby granted, free of charge, to any person obtaining a copy
                                   * of this software and associated documentation files (the "Software"), to deal
                                   * in the Software without restriction, including without limitation the rights
                                   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                   * copies of the Software, and to permit persons to whom the Software is
                                   * furnished to do so, subject to the following conditions:
                                   *
                                   * The above copyright notice and this permission notice shall be included in all
                                   * copies or substantial portions of the Software.
                                   *
                                   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                   * SOFTWARE.
                                   */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _uiThemeable = require('@instructure/ui-themeable');

var _uiThemeable2 = _interopRequireDefault(_uiThemeable);

var _ms = require('@instructure/ui-utils/lib/ms');

var _ms2 = _interopRequireDefault(_ms);

var _BaseTransition = require('./BaseTransition');

var _BaseTransition2 = _interopRequireDefault(_BaseTransition);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  template: function template(theme) {
    var tmpl = function tmpl() {
      return '/*  imported from styles.css  */\n\n._1-1d3yZ {\n  /* trigger hardware acceleration for smoother animation */\n  transform: translate3d(0, 0, 0);\n}\n\n/* Animation type: fade */\n\n._1IHSq_f {\n  transition: opacity ' + theme.duration + ', transform ' + theme.duration + ' ease-out;\n}\n\n._2kCpSSh,\n.a-zPWi- {\n  opacity: 0.01;\n}\n\n.tOJX2IO,\n._1rROD17 {\n  opacity: 1;\n}\n\n/* Animation type: scale */\n\n._3HOWsgp {\n  transition:\n    opacity ' + theme.duration + ',\n    transform ' + theme.duration + ' cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n._3Jge7Ga,\n._2LN7qdw {\n  transform: scale(0.01) translate3d(0, 0, 0);\n  opacity: 0.01;\n}\n\n._1SJZbsM,\n._1uPVe2I {\n  transform: scale(1) translate3d(0, 0, 0);\n  opacity: 1;\n}\n\n/* Animation type: slide */\n\n/*\n  Note: the transitions for slide are:\n  from EXITED to ENTERING and from ENTERED to EXITING.\n\n  ENTERED and EXITED will be set directly when enter or exit transitions are disabled and they reset the \'stage\'\n  for the next transition.\n\n  The base transition class enables/disables transitions from one state to another, so transitions should be\n  set there.\n*/\n\n._1VTSTxL,\n.pQaqUQx,\n.cOmSmIQ,\n._1XMg-9I {\n  transition: opacity ' + theme.duration + ', transform ' + theme.duration + ';\n}\n\n._3O7Eui2,\n._1Xe2ZQh,\n.yQGc2tF,\n._1jAG_ri,\n._1QrfKhU,\n._3FqEZck,\n._3l2vVtB,\n._2fh4svf {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n\n._1k5s7s1,\n._2_wMRZP,\n._3UwRVZS,\n._3I-1oXs,\n._3u0FhZN,\n._1MjJcAy,\n._2yg-gPj,\n._378W8OY {\n  opacity: 0.01;\n}\n\n._1k5s7s1 {\n  transform: translate3d(-50%, 0, 0);\n}\n\n._3u0FhZN {\n  transform: translate3d(50%, 0, 0);\n}\n\n._2_wMRZP {\n  transform: translate3d(50%, 0, 0);\n}\n\n._1MjJcAy {\n  transform: translate3d(-50%, 0, 0);\n}\n\n._3UwRVZS {\n  transform: translate3d(0, -50%, 0);\n}\n\n._2yg-gPj {\n  transform: translate3d(0, 50%, 0);\n}\n\n._3I-1oXs {\n  transform: translate3d(0, 50%, 0);\n}\n\n._378W8OY {\n  transform: translate3d(0, -50%, 0);\n}\n';
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
var Transition = (_dec = (0, _uiThemeable2.default)(_theme2.default, styles), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Transition, _Component);

  function Transition() {
    _classCallCheck(this, Transition);

    return _possibleConstructorReturn(this, (Transition.__proto__ || Object.getPrototypeOf(Transition)).apply(this, arguments));
  }

  _createClass(Transition, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['type', 'children']);

      var duration = (0, _ms2.default)(this.theme.duration);

      return type ? _react2.default.createElement(
        _BaseTransition2.default,
        Object.assign({}, props, {
          enterDelay: duration,
          exitDelay: duration,
          transitionClassName: styles[type],
          exitedClassName: styles[type + '--exited'],
          exitingClassName: styles[type + '--exiting'],
          enteredClassName: styles[type + '--entered'],
          enteringClassName: styles[type + '--entering']
        }),
        children
      ) : children;
    }
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
  onExited: _propTypes2.default.func
}, _class2.defaultProps = {
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
}, _temp)) || _class);
exports.default = Transition;
},{"react":8,"prop-types":223,"@instructure/ui-themeable":298,"@instructure/ui-utils/lib/ms":643,"./BaseTransition":635,"./theme":636}],625:[function(require,module,exports) {
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

},{}],611:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generator;
/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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
},{}],541:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _class2, _temp; /*
                                          * The MIT License (MIT)
                                          *
                                          * Copyright (c) 2015 - present Instructure, Inc.
                                          *
                                          * Permission is hereby granted, free of charge, to any person obtaining a copy
                                          * of this software and associated documentation files (the "Software"), to deal
                                          * in the Software without restriction, including without limitation the rights
                                          * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                          * copies of the Software, and to permit persons to whom the Software is
                                          * furnished to do so, subject to the following conditions:
                                          *
                                          * The above copyright notice and this permission notice shall be included in all
                                          * copies or substantial portions of the Software.
                                          *
                                          * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                          * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                          * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                          * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                          * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                          * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                          * SOFTWARE.
                                          */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _noScroll = require('no-scroll');

var _noScroll2 = _interopRequireDefault(_noScroll);

var _uiThemeable = require('@instructure/ui-themeable');

var _uiThemeable2 = _interopRequireDefault(_uiThemeable);

var _ensureSingleChild = require('@instructure/ui-utils/lib/react/ensureSingleChild');

var _ensureSingleChild2 = _interopRequireDefault(_ensureSingleChild);

var _deprecated = require('@instructure/ui-utils/lib/react/deprecated');

var _deprecated2 = _interopRequireDefault(_deprecated);

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
      return '/*  imported from styles.css  */\n\n._1fwijBj {\n  box-sizing: border-box;\n  background: ' + theme.background + ';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  display: flex;\n  justify-content: center;\n  outline: none;\n  border: ' + theme.borderWidth + ' solid ' + theme.borderColor + ';\n  border-radius: ' + theme.borderRadius + ';\n\n  z-index: ' + theme.zIndex + ';\n}\n\n  ._1fwijBj:focus {\n    border-color: ' + theme.focusBorderColor + ';\n  }\n\n._3FAivnT {\n  position: fixed;\n}\n\n.YlfH74y {\n  align-items: flex-start;\n}\n\n.KNI-Mem {\n  align-items: center;\n}\n\n.KIHI1rO {\n  align-items: flex-end;\n}\n';
    };

    return tmpl.call(theme, theme);
  },
  'root': '_1fwijBj',
  'fullscreen': '_3FAivnT',
  'top': 'YlfH74y',
  'center': 'KNI-Mem',
  'bottom': 'KIHI1rO'
};


/**
---
category: components/utilities
---
**/
var Mask = (_dec = (0, _deprecated2.default)('5.0.0', {
  fullScreen: 'fullscreen'
}), _dec2 = (0, _uiThemeable2.default)(_theme2.default, styles), _dec(_class = _dec2(_class = (_temp = _class2 = function (_Component) {
  _inherits(Mask, _Component);

  function Mask() {
    _classCallCheck(this, Mask);

    return _possibleConstructorReturn(this, (Mask.__proto__ || Object.getPrototypeOf(Mask)).apply(this, arguments));
  }

  _createClass(Mask, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.fullscreen || this.props.fullScreen) {
        // eslint-disable-line react/prop-types
        _noScroll2.default.on();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.fullscreen || this.props.fullScreen) {
        // eslint-disable-line react/prop-types
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

      var classes = (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, styles.root, true), _defineProperty(_classnames, styles[this.props.placement], true), _defineProperty(_classnames, styles.fullscreen, this.props.fullscreen || this.props.fullScreen), _classnames));

      var props = (0, _passthroughProps.omitProps)(this.props, Mask.propTypes);

      if (typeof this.props.onClick === 'function') {
        props = Object.assign({}, props, {
          onClick: this.props.onClick,
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
  fullscreen: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  onClick: _propTypes2.default.func
}, _class2.defaultProps = {
  placement: 'center',
  fullscreen: false
}, _temp)) || _class) || _class);
exports.default = Mask;
},{"react":8,"prop-types":223,"classnames":323,"no-scroll":625,"@instructure/ui-themeable":298,"@instructure/ui-utils/lib/react/ensureSingleChild":526,"@instructure/ui-utils/lib/react/deprecated":411,"@instructure/ui-utils/lib/react/passthroughProps":413,"./theme":611}],431:[function(require,module,exports) {
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
},{}],352:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalFooter = exports.ModalBody = exports.ModalHeader = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _class, _class2, _temp; /*
                                                 * The MIT License (MIT)
                                                 *
                                                 * Copyright (c) 2015 - present Instructure, Inc.
                                                 *
                                                 * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                 * of this software and associated documentation files (the "Software"), to deal
                                                 * in the Software without restriction, including without limitation the rights
                                                 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                 * copies of the Software, and to permit persons to whom the Software is
                                                 * furnished to do so, subject to the following conditions:
                                                 *
                                                 * The above copyright notice and this permission notice shall be included in all
                                                 * copies or substantial portions of the Software.
                                                 *
                                                 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                                 * SOFTWARE.
                                                 */

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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _Dialog = require('@instructure/ui-a11y/lib/components/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _CloseButton = require('@instructure/ui-buttons/lib/components/CloseButton');

var _CloseButton2 = _interopRequireDefault(_CloseButton);

var _CustomPropTypes = require('@instructure/ui-utils/lib/react/CustomPropTypes');

var _CustomPropTypes2 = _interopRequireDefault(_CustomPropTypes);

var _passthroughProps = require('@instructure/ui-utils/lib/react/passthroughProps');

var _createChainedFunction = require('@instructure/ui-utils/lib/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _deprecated = require('@instructure/ui-utils/lib/react/deprecated');

var _deprecated2 = _interopRequireDefault(_deprecated);

var _Transition = require('@instructure/ui-motion/lib/components/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

var _Portal = require('@instructure/ui-portal/lib/components/Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _uiThemeable = require('@instructure/ui-themeable');

var _uiThemeable2 = _interopRequireDefault(_uiThemeable);

var _Browser = require('@instructure/ui-utils/lib/Browser');

var _Browser2 = _interopRequireDefault(_Browser);

var _Mask = require('../Mask');

var _Mask2 = _interopRequireDefault(_Mask);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

var _ModalBody2 = _interopRequireDefault(_ModalBody);

var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  template: function template(theme) {
    var tmpl = function tmpl() {
      return '/*  imported from styles.css  */\n\n._3qdrn-i {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  box-sizing: border-box;\n  background: ' + theme.background + ';\n  box-shadow: ' + theme.boxShadow + ';\n  border: 0.0625rem solid ' + theme.borderColor + ';\n  border-radius: ' + theme.borderRadius + ';\n  z-index: ' + theme.zIndex + ';\n}\n\n  ._3qdrn-i._3B-nQFA {\n    display: block;\n    overflow: auto;\n  }\n\n._1AmzsfS,\n._3-Aa5yS,\n._287b-H6,\n._327Qp41 {\n  max-width: 95vw;\n  max-height: 95vh;\n}\n\n._1AmzsfS._3B-nQFA, ._3-Aa5yS._3B-nQFA, ._287b-H6._3B-nQFA, ._327Qp41._3B-nQFA {\n    max-height: none;\n  }\n\n._1AmzsfS {\n  flex: 0 1 auto;\n  min-width: ' + theme.autoMinWidth + ';\n}\n\n._3-Aa5yS {\n  flex: 0 1 ' + theme.smallMaxWidth + ';\n}\n\n._287b-H6 {\n  flex: 0 1 ' + theme.mediumMaxWidth + ';\n}\n\n._327Qp41 {\n  flex: 0 1 ' + theme.largeMaxWidth + ';\n}\n\n.Y3VOYml {\n  box-sizing: border-box;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n._2K4GvNd {\n  flex: 1;\n  width: 100%;\n  height: 100%;\n  box-shadow: none;\n  border: none;\n}\n';
    };

    return tmpl.call(theme, theme);
  },
  'content': '_3qdrn-i',
  'ie11': '_3B-nQFA',
  'auto': '_1AmzsfS',
  'small': '_3-Aa5yS',
  'medium': '_287b-H6',
  'large': '_327Qp41',
  'layout': 'Y3VOYml',
  'fullscreen': '_2K4GvNd'
};


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
}), _dec2 = (0, _deprecated2.default)('5.0.0', {
  closeButtonLabel: true,
  closeButtonRef: true,
  applicationElement: true,
  shouldCloseOnOverlayClick: 'shouldCloseOnDocumentClick'
}), _dec3 = (0, _uiThemeable2.default)(_theme2.default, styles), _dec(_class = _dec2(_class = _dec3(_class = (_temp = _class2 = function (_Component) {
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
    key: 'renderCloseButton',
    value: function renderCloseButton() {
      var _this2 = this;

      return this.props.closeButtonLabel ? _react2.default.createElement(
        _CloseButton2.default,
        {
          buttonRef: function buttonRef(el) {
            _this2._closeButton = el;
            if (typeof _this2.props.closeButtonRef === 'function') {
              _this2.props.closeButtonRef(el);
            }
          },
          placement: 'end',
          offset: 'medium',
          onClick: this.props.onDismiss
        },
        this.props.closeButtonLabel
      ) : null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames,
          _this3 = this;

      var _props = this.props,
          shouldCloseOnDocumentClick = _props.shouldCloseOnDocumentClick,
          shouldCloseOnOverlayClick = _props.shouldCloseOnOverlayClick,
          children = _props.children,
          contentRef = _props.contentRef,
          onDismiss = _props.onDismiss,
          size = _props.size,
          props = _objectWithoutProperties(_props, ['shouldCloseOnDocumentClick', 'shouldCloseOnOverlayClick', 'children', 'contentRef', 'onDismiss', 'size']);

      var ie11 = _Browser2.default.msie && _Browser2.default.version > 10;

      var dialog = _react2.default.createElement(
        _Dialog2.default,
        Object.assign({}, (0, _passthroughProps.omitProps)(props, Modal.propTypes), (0, _passthroughProps.pickProps)(this.props, _Dialog2.default.propTypes), {
          label: this.props.label,
          defaultFocusElement: this.defaultFocusElement,
          shouldCloseOnDocumentClick: shouldCloseOnOverlayClick === undefined ? shouldCloseOnDocumentClick : shouldCloseOnOverlayClick,
          shouldCloseOnEscape: true,
          shouldContainFocus: true,
          open: this.state.open,
          className: (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, styles.content, true), _defineProperty(_classnames, styles[size], true), _defineProperty(_classnames, styles.ie11, ie11), _classnames)),
          ref: function ref(el) {
            _this3._content = el;
            if (typeof contentRef === 'function') {
              contentRef(el);
            }
          }
        }),
        this.renderCloseButton(),
        children
      );

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
          size === 'fullscreen' ? _react2.default.createElement(
            'span',
            { className: styles.layout },
            dialog
          ) : _react2.default.createElement(
            _Mask2.default,
            {
              placement: ie11 ? 'top' : 'center',
              fullscreen: true
            },
            dialog
          )
        )
      );
    }
  }, {
    key: 'defaultFocusElement',
    get: function get() {
      var _this4 = this;

      return this.props.defaultFocusElement || function () {
        return _this4._closeButton;
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
  closeButtonLabel: _propTypes2.default.string,

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
   * Whether focus should be returned to the trigger when the `<Modal/>` is closed
   */
  shouldReturnFocus: _propTypes2.default.bool,

  /**
   * Whether the `<Modal/>` should request close when the document is clicked
   */
  shouldCloseOnDocumentClick: _propTypes2.default.bool,

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

  /**
   * An element, function returning an element, or array of elements that will not be hidden from
   * the screen reader when the `<Modal />` is open
   */
  liveRegion: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.element, _propTypes2.default.func]),

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
  liveRegion: null,
  contentRef: function contentRef(el) {},
  shouldCloseOnDocumentClick: true,
  shouldReturnFocus: true,
  defaultFocusElement: null,
  children: null
}, _temp)) || _class) || _class) || _class);
exports.default = Modal;
},{"./ModalHeader":551,"./ModalBody":550,"./ModalFooter":552,"react":8,"prop-types":223,"classnames":323,"@instructure/ui-a11y/lib/components/Dialog":564,"@instructure/ui-buttons/lib/components/CloseButton":354,"@instructure/ui-utils/lib/react/CustomPropTypes":410,"@instructure/ui-utils/lib/react/passthroughProps":413,"@instructure/ui-utils/lib/createChainedFunction":436,"@instructure/ui-utils/lib/react/deprecated":411,"@instructure/ui-motion/lib/components/Transition":571,"@instructure/ui-portal/lib/components/Portal":570,"@instructure/ui-themeable":298,"@instructure/ui-utils/lib/Browser":328,"../Mask":541,"./theme":431}],287:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generator;
function generator() {
  return {};
}
},{}],253:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Heading = require("@instructure/ui-elements/lib/components/Heading");

var _Heading2 = _interopRequireDefault(_Heading);

var _Text = require("@instructure/ui-elements/lib/components/Text");

var _Text2 = _interopRequireDefault(_Text);

var _Container = require("@instructure/ui-container/lib/components/Container");

var _Container2 = _interopRequireDefault(_Container);

var _List = require("@instructure/ui-elements/lib/components/List");

var _List2 = _interopRequireDefault(_List);

var _Button = require("@instructure/ui-buttons/lib/components/Button");

var _Button2 = _interopRequireDefault(_Button);

var _CloseButton = require("@instructure/ui-buttons/lib/components/CloseButton");

var _CloseButton2 = _interopRequireDefault(_CloseButton);

var _Modal = require("@instructure/ui-overlays/lib/components/Modal");

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
                "[DONE] Track correct vs. incorrect answers by user input"
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
            open: this.state.deckPickerModalOpen,
            onDismiss: this.closeDeckPickerModal,
            size: "medium"
          },
          _react2.default.createElement(
            _Modal.ModalHeader,
            null,
            _react2.default.createElement(
              _CloseButton2.default,
              {
                placement: "end",
                offset: "medium",
                variant: "icon",
                onClick: this.closeDeckPickerModal
              },
              "Close"
            ),
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
},{"react":8,"@instructure/ui-elements/lib/components/Heading":346,"@instructure/ui-elements/lib/components/Text":349,"@instructure/ui-container/lib/components/Container":355,"@instructure/ui-elements/lib/components/List":348,"@instructure/ui-buttons/lib/components/Button":353,"@instructure/ui-buttons/lib/components/CloseButton":354,"@instructure/ui-overlays/lib/components/Modal":352,"../DeckPicker":256,"@instructure/ui-themeable":298,"./theme.js":287}],931:[function(require,module,exports) {

var OVERLAY_ID = '__parcel__error__overlay__';

var global = (1, eval)('this');
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '53520' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
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

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
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
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[931,253])
//# sourceMappingURL=/Home.a5e71350.map