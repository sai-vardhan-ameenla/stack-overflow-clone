
import express from "express";

import { postAnswers } from "../controllers/Answers.js";
const router =express.Router()
router.patch('/post/:id',postAnswers)
export default router