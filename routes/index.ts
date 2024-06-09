import { Router } from "express";
import crash from "./crash";

const router = Router();

router.use('/crash', crash);

export default router;
