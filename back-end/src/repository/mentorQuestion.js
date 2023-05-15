import Question from '../models/mentorQuestion.js'

  //Add mentor question deails
  export const createMentorQuestion = async (details) => {
    console.log(details)
    try {
      const question = new Question({
        problemId: details.problemId,
        empId: details.empId,
        empName: details.empName,
        email: details.email,
        description: details.description,
      })
  
      await question.save()
      return { msg: 'Details Add Succesfully' }
    } catch (error) {
      console.log(error)
      return { msg: 'Details Not Add' }
    }
  }

  //Get All mentor Questions
  export const getMentorQuestion = async () => {
    try {
      const a = await Question.find().sort({ createdAt: -1 })
      console.log (a)
      return a
    } catch (error) {
      return { msg: 'No Problems found' }
    }
  }
