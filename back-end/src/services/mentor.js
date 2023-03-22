import { createMentorAccount, updateMentorAccount, deleteMentorAccount, getMentorAccount, getMentors } from '../repository/mentor.js'

//Add mentor deails
export const addMentor = async ({ mentName, role, mentId, phone, email, description, workHistory, education, language, expertiseArea, fbLink, linkedinLink }) => {

  const details = { mentName, role, mentId, phone, email, description, workHistory, education, language, expertiseArea, fbLink, linkedinLink }

  const b = await createMentorAccount(details)
  return b.msg
}

//Get one Mentor Details
export const getMentorById = async (id) => {
  return await getMentorAccount(id)
}

//Get All Mentors Detail
export const getAllMentors = async () => {
  return await getMentors()
}

//Update mentor Details
export const updatMentorById = async (id, ob) => {
  console.log(ob)
  const y = await updateMentorAccount(id, ob)
  return y
}

//Delete mentor
export const deleteMentorById = async (id) => {
  return await deleteMentorAccount(id)
}