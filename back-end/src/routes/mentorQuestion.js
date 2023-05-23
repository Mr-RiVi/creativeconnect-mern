import express from 'express'
import { mentorQuestionCreate, mentorQuestionsGetAll } from '../controllers/mentorQuestion.js'

const router = express.Router()

// router.get('/viewAllMentors',getMentors)
router.post('/addQuestion',mentorQuestionCreate)
router.get('/getAllQuestion',mentorQuestionsGetAll)

export default router
