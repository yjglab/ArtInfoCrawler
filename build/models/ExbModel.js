"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var exbSchema = new _mongoose["default"].Schema({
  country: String,
  countryCode: String,
  title: String,
  date: String,
  thumbnailSrc: String,
  detail: String,
  link: String,
  hall: String,
  category: String
});

var ExbModel = _mongoose["default"].model("ExbModel", exbSchema);

var _default = ExbModel;
exports["default"] = _default;