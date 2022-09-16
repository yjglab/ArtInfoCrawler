"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var exbHallSchema = new _mongoose["default"].Schema({
  data: [],
  country: String,
  hallName: String,
  category: String,
  infoLength: Number
});

var ExbHallModel = _mongoose["default"].model("ExbHallModel", exbHallSchema);

var _default = ExbHallModel;
exports["default"] = _default;