import Mentor from '../models/mentor.js'
import mongoose from 'mongoose'

//Add mentor deails
export const createMentorAccount = async (details) => {
  console.log(details)
  try {
    const mentor = new Mentor({
      mentName: details.mentName,
      role: details.role,
      mentId: details.mentId,
      phone: details.phone,
      email: details.email,
      description: details.description,
      workHistory: details.workHistory,
      education: details.education,
      language: details.language,
      expertiseArea: details.expertiseArea,
      fbLink: details.fbLink,
      linkedinLink: details.linkedinLink,
      mentImg: details.mentImg,
      mentState: details.mentState,
    })

    await mentor.save()
    return { msg: 'Details Add Succesfully' }
  } catch (error) {
    console.log(error)
    return { msg: 'Details Not Add' }
  }
}

export const getMentorAccount = async (id) => {
  return await Mentor.findById(id)
}

//Get All mentor Details
export const getMentors = async () => {
  try {
    const a = await Mentor.find().sort({ createdAt: -1 })
    console.log (a)
    return a
  } catch (error) {
    return { msg: 'No Mentors found' }
  }
}

//Update mentor Details
export const updateMentorAccount = async (id, ob) => {
  try {
    await Mentor.findByIdAndUpdate(id, ob)
    return { msg: 'update successfull' }
  } catch (error) {
    return { msg: 'update Error' }
  }
}

//Delete mentor Details
export const deleteMentorAccount = async (id) => {
  try {
    await Mentor.findByIdAndDelete(id)
    return { msg: 'deletion successfull' }
  } catch (error) {
    return { msg: 'deletion not successfull' }
  }
}