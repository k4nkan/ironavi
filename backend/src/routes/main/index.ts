// routes/main/index.ts
import { Router } from "express";
import { handleMainRequest } from "./controller";

const router = Router();

router.post("/", handleMainRequest);

export { router as mainRouter };
