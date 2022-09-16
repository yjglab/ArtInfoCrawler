"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _globalRouter = _interopRequireDefault(require("./routers/globalRouter.js"));

var _mainRouter = _interopRequireDefault(require("./routers/mainRouter.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var logger = (0, _morgan["default"])("dev");
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json()); // string to JS object

app.use(_express["default"].text());
app.use(logger);
app.use("/static", _express["default"]["static"]("assets")); // access 부여

app.use("/", _globalRouter["default"]);
app.use("/main", _mainRouter["default"]);
app.get("*", function (req, res) {
  res.status(404).render("404", {
    pageTitle: "404 Not Found"
  });
});
var _default = app;
exports["default"] = _default;