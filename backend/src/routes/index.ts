import { Router } from "express";
import { mainRouter } from "./main";

const router = Router();

router.use("/", mainRouter);

export { router as routes };
