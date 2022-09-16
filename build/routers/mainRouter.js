"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _mainController = require("../controllers/mainController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mainRouter = _express["default"].Router();

mainRouter.get("/", _mainController.main);
mainRouter.get("/detail/:id", _mainController.exbDetail);
var _default = mainRouter;
exports["default"] = _default;