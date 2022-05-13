import express from "express";
import globalRouter from "./routers/globalRouter.js";
const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use("/", globalRouter);

export default app;
