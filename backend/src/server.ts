import "./config/env";
import { app } from "./app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
  console.log(`🌍 Allowed origins: ${process.env.CORS_ORIGIN ?? "not set"}`);
});
