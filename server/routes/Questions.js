import express from 'express'


import { AskQuestion, deleteQuestion, getAllquestions } from '../controllers/Question.js'
const router = express.Router()
router.post('/Ask',AskQuestion)
router.get('/get',getAllquestions)
router.delete('/delete/:id',deleteQuestion)

export default router