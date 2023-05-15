import asyncHandler from '../middleware/async.js'
import makeResponse from '../middleware/response.js'
import { addMentorQuestion, getAllMentorQuestions } from '../services/mentorQuestion.js'

//Add mentor question deails
export const mentorQuestionCreate = asyncHandler(async (req, res) => {
    const a = await addMentorQuestion(req.body)
    // res.send(a)
    return makeResponse({
      res,
      status: 201,
      data: a,
      message: 'New question create',
    })
  })

  //Get All Mentors Questions
  export const mentorQuestionsGetAll = asyncHandler(async (req, res) => {
    const a = await getAllMentorQuestions()
    res.json(a)
  })