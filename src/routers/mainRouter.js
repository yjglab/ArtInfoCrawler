import express from "express";

import { main, museum, gallery, detail } from "../controllers/mainController";

const mainRouter = express.Router();

mainRouter.get("/", main);
mainRouter.get("/:id", detail);
mainRouter.get("/museum", museum);
mainRouter.get("/gallery", gallery);

export default mainRouter;
