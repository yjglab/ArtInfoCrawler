import express from "express";

import { hallDetail, intro } from "../controllers/globalController.js";

const globalRouter = express.Router();

globalRouter.get("/", intro);
// globalRouter.get("/hall/:id", hallDetail);

export default globalRouter;
