import express from 'express'
import { mentorRegister, updateMentor, deleteMentor, getMentor, getMentors } from '../controllers/mentor.js'

const router = express.Router()

router.post('/addMentor', mentorRegister) //postman link
router.get('/viewAllMentors',getMentors)
router.get('/viewMentor/:mentor_id',getMentor)
router.put('/updateMentor/:mentor_id',updateMentor)
router.delete('/deleteMentor/:mentor_id', deleteMentor)

export default router