import express, { Request, Response } from 'express';
import { getCrash } from './controller';

const router = express.Router();

router.get("/newRound", getCrash);

export default router;