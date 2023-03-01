"use strict";

require("dotenv/config");

require("./db");

require("./models/ExbModel");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.PORT || 8080;

_index["default"].listen(PORT, function () {
  console.log("\uD83D\uDD35 PORT".concat(PORT, " \uC5F0\uACB0"));
});