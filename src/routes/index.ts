import { Router } from "express";
import authRouter from "./auth.routes";
import testRouter from "./test.routes";

const router = Router();

router.use("/test", testRouter);
router.use("/auth", authRouter);

export default router;
