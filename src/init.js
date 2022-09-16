import "./db";
import "dotenv/config";

import app from "./index";
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🔵 PORT${PORT} 연결`);
});
