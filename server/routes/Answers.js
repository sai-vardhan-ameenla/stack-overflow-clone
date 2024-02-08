
import express from "express";
import auth from "../middlewares/auth.js";

import { deleteAnswer, postAnswers } from "../controllers/Answers.js";
const router =express.Router()
router.patch('/post/:id',auth,postAnswers)
router.patch('/delete/:id',auth,deleteAnswer)
export default router 