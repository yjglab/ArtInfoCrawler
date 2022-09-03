import express from "express";

import { exbDetail, main } from "../controllers/mainController";

const mainRouter = express.Router();

mainRouter.get("/", main);

mainRouter.get("/detail/:id", exbDetail);

export default mainRouter;
