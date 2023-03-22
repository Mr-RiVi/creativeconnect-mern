import asyncHandler from '../middleware/async.js'
import makeResponse from '../middleware/response.js'
import { addMentor, updatMentorById, deleteMentorById, getMentorById, getAllMentors } from '../services/mentor.js'

//Add mentor deails
export const mentorRegister = asyncHandler(async (req, res) => {
  const a = await addMentor(req.body)
  // res.send(a)
  return makeResponse({
    res,
    status: 201,
    data: a,
    message: 'New mentor details Added',
  })
})

//Get one Mentor Details
export const getMentor = asyncHandler(async (req, res) => {
  
  const a = await getMentorById(req.params.mentor_id)
  // res.json(a)
  // console.log ("==========")
  return makeResponse({
    res,
    status: 202,
    data: a,
    message: 'Get Mentor Details',
    
  })
  
})

//Get All Mentors Detail
export const getMentors = asyncHandler(async (req, res) => {
  const a = await getAllMentors()
  res.json(a)
})

//Update mentor Details
export const updateMentor = asyncHandler(async (req, res) => {
  const a = await updatMentorById(req.params.mentor_id, req.body)
  // res.send(a)
  return makeResponse({
    res,
    status: 203,
    data: a,
    message: 'Mentor Details Updated',
  })
})

// Delete mentor Details
export const deleteMentor = asyncHandler(async (req, res) => {
  const a = await deleteMentorById(req.params.mentor_id)
  // res.send(a)
  return makeResponse({
    res,
    status: 204,
    data: a,
    message: 'Delete Employee Details',
  })
})