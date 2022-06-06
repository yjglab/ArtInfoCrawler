import express from "express";

import {
  main,
  museum,
  gallery,
  hallDetail,
  exbDetail,
} from "../controllers/mainController";

const mainRouter = express.Router();

mainRouter.get("/", main);
mainRouter.get("/:id", hallDetail);
mainRouter.get("/detail/:id", exbDetail);
mainRouter.get("/museum", museum);
mainRouter.get("/gallery", gallery);

export default mainRouter;
