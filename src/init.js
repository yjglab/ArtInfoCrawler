import "./db";
import "./models/ExbHall";
import app from "./index";
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`🔵 Listen : ${PORT}`);
});
