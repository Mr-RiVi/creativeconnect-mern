import { createMentorQuestion, getMentorQuestion } from '../repository/mentorQuestion.js'

//Add mentor Question deails
export const addMentorQuestion = async ({ problemId, empId, empName, email, description }) => {

    const details = { problemId, empId, empName, email, description }
  
    const b = await createMentorQuestion(details)
    return b.msg
  }

  //Get All Mentors Questions
  export const getAllMentorQuestions = async () => {
    return await getMentorQuestion()
  }