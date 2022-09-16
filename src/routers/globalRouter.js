import express from "express";

import { intro, test } from "../controllers/globalController.js";

const globalRouter = express.Router();

globalRouter.get("/", intro);
globalRouter.get("/test", test);
// globalRouter.get("/hall/:id", hallDetail);

export default globalRouter;
