import express from "express";

import {
  main,
  data,
  exbDetail,
  mainFilter,
} from "../controllers/mainController";

const mainRouter = express.Router();

mainRouter.get("/", main);
mainRouter.get("/filter", mainFilter);
mainRouter.get("/detail/:id", exbDetail);
mainRouter.get("/data", data);

export default mainRouter;
