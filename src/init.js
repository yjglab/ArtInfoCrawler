import "dotenv/config";
import "./db";
import "./models/ExbModel";

import app from "./index";
console.log(process.env.DB_URL);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🔵 PORT${PORT} 연결`);
});
