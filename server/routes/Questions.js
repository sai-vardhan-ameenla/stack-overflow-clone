import express from 'express'
import auth from '../middlewares/auth.js'


import { AskQuestion, deleteQuestion, getAllquestions, voteQuestion } from '../controllers/Question.js'
const router = express.Router()
router.post('/Ask',auth,AskQuestion)
router.get('/get',getAllquestions)
router.delete('/delete/:id',auth,deleteQuestion)
router.patch('/vote/:id',auth,voteQuestion)

export default router