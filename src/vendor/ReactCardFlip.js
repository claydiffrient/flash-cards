'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactCardFlip = function (_React$Component) {
	_inherits(ReactCardFlip, _React$Component);

	function ReactCardFlip(props) {
		_classCallCheck(this, ReactCardFlip);

		var _this = _possibleConstructorReturn(this, (ReactCardFlip.__proto__ || Object.getPrototypeOf(ReactCardFlip)).call(this, props));

		_this.state = {
			isFlipped: _this.props.isFlipped,
			rotation: 0
		};
		return _this;
	}

	_createClass(ReactCardFlip, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.isFlipped !== this.props.isFlipped) {
				this.setState({ isFlipped: nextProps.isFlipped });
				this.setState({ rotation: this.state.rotation + 180 });
			}
		}
	}, {
		key: 'getComponent',
		value: function getComponent(key) {
			return this.props.children.filter(function (component) {
				return component.key === key;
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var styles = {
				container: {
					perspective: '1000px',
					transformStyle: 'preserve-3d'
				},
				flipper: {
					position: 'relative',
					transform: 'rotateY(' + (this.props.infinite ? this.state.rotation : 0) + 'deg)',
					transformStyle: 'preserve-3d',
					transition: this.props.flipSpeedBackToFront + 's'
				},
				flipperFlip: {
					position: 'relative',
					transform: 'rotateY(' + (this.props.infinite ? this.state.rotation : 180) + 'deg)',
					transformStyle: 'preserve-3d',
					transition: this.props.flipSpeedFrontToBack + 's'
				},
				front: _extends({
					WebkitBackfaceVisibility: 'hidden',
					backfaceVisibility: 'hidden',
					left: '0',
					position: 'absolute',
					top: '0',
					transform: 'rotateY(0deg)',
					transformStyle: 'preserve-3d',
					width: '100%',
					zIndex: '2'
				}, this.props.cardStyles.front),
				back: _extends({
					WebkitBackfaceVisibility: 'hidden',
					backfaceVisibility: 'hidden',
					left: '0',
					position: 'absolute',
					transform: 'rotateY(180deg)',
					transformStyle: 'preserve-3d',
					top: '0',
					width: '100%'
				}, this.props.cardStyles.back)
			};

			return _react2.default.createElement(
				'div',
				{ className: 'react-card-flip', style: styles.container },
				_react2.default.createElement(
					'div',
					{
						className: 'react-card-flipper',
						style: this.state.isFlipped ? styles.flipperFlip : styles.flipper
					},
					_react2.default.createElement(
						'div',
						{ className: 'react-card-front', style: styles.front },
						this.getComponent('front')
					),
					_react2.default.createElement(
						'div',
						{ className: 'react-card-back', style: styles.back },
						this.getComponent('back')
					)
				)
			);
		}
	}]);

	return ReactCardFlip;
}(_react2.default.Component);

ReactCardFlip.propTypes = {
	cardStyles: _propTypes2.default.shape({
		front: _propTypes2.default.object,
		back: _propTypes2.default.object
	}),
	children: function children(props, propName, componentName) {
		if (_react2.default.Children.count(props[propName]) !== 2) {
			return new Error(componentName + ' requires two children.');
		}
	},
	flipSpeedBackToFront: _propTypes2.default.number,
	flipSpeedFrontToBack: _propTypes2.default.number,
	infinite: _propTypes2.default.bool,
	isFlipped: _propTypes2.default.bool
};

ReactCardFlip.defaultProps = {
	cardStyles: {
		front: {},
		back: {}
	},
	flipSpeedBackToFront: 0.6,
	flipSpeedFrontToBack: 0.6,
	infinite: false,
	isFlipped: false
};

exports.default = ReactCardFlip;