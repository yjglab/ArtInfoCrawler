import express from "express";

import { show, data, exbDetail, main } from "../controllers/mainController";

const mainRouter = express.Router();

mainRouter.get("/", main);
mainRouter.get("/show", show);
mainRouter.get("/detail/:id", exbDetail);
mainRouter.get("/data", data);

export default mainRouter;
