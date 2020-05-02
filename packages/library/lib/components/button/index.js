"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Button = function Button(_ref) {
  var type = _ref.type,
      disabled = _ref.disabled,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    color: type,
    disabled: disabled
  }, children);
};

var _default = Button;
exports["default"] = _default;