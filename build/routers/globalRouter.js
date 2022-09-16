"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _globalController = require("../controllers/globalController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var globalRouter = _express["default"].Router();

globalRouter.get("/", _globalController.intro);
globalRouter.get("/test", _globalController.test); // globalRouter.get("/hall/:id", hallDetail);

var _default = globalRouter;
exports["default"] = _default;