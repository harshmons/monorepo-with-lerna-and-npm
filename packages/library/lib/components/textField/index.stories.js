"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disabledTextField = exports.basicTextField = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "TextField"
};
exports["default"] = _default;

var basicTextField = function basicTextField() {
  return /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "InputField"
  });
};

exports.basicTextField = basicTextField;

var disabledTextField = function disabledTextField() {
  return /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "disabled",
    disabled: true
  });
};

exports.disabledTextField = disabledTextField;