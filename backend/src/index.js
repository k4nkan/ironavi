import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { handleMainRoute } from "./api.js";

// 環境変数の読み込み
dotenv.config();

const app = express();
const PORT = 3000;
const corsOrigin = process.env.CORS_ORIGIN;

// CORS設定
app.use(
  cors({
    origin: corsOrigin,
    credentials: true,
  })
);

// JSONパース
app.use(express.json());

// POSTルート（配列で送られるinputとnumberを処理）
app.post("/", handleMainRoute);

// サーバー起動
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
  console.log(`🌏 CORS allowed origin is ${corsOrigin}`);
});
