import express, { Application } from "express";
import cors from "cors";
import { corsOptions } from "./config/cors";
import { routes } from "./routes";
import { healthRouter } from "./routes/health";

const app = express();

app.use("/health", healthRouter);

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", routes);

export { app };
