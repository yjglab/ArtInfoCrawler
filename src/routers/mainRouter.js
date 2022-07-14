import express from "express";

import {
  main,
  data,
  hallDetail,
  exbDetail,
} from "../controllers/mainController";

const mainRouter = express.Router();

mainRouter.get("/", main);
mainRouter.get("/hall/:id", hallDetail);
mainRouter.get("/detail/:id", exbDetail);
mainRouter.get("/data", data);

export default mainRouter;
