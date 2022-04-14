import express from "express";
import globalRouter from "./routers/globalRouter.js";
const app = express();
const PORT = 8080;

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use("/", globalRouter);

app.listen(PORT, () => {
  console.log(`Listen : ${PORT}`);
});
