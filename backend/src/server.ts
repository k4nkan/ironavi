import { app } from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PROT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server is runnning at http://localhost:${PORT}`);
  console.log(`🌍 Allowed origins: ${process.env.CORS_ORIGIN ?? "not set"}`);
});
