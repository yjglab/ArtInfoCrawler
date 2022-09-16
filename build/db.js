"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].connect("mongodb://127.0.0.1:27017/worldexb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = _mongoose["default"].connection;

var handleOpen = function handleOpen() {
  return console.log("🟢 DATABASE 연결");
};

var handleError = function handleError(err) {
  return console.log("🔺 BASE 에러", err);
};

db.on("error", handleError);
db.once("open", handleOpen);