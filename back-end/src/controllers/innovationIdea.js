import asyncHandler from '../middleware/async.js'
import makeResponse from '../middleware/response.js'
import { addIdea, updateIdeaById, deleteIdeaById, getAllIdeas, getIdeaById } from '../services/innovationIdea.js'

//add
export const addNewIdea = asyncHandler(async (req, res) => {
  const a = await addIdea(req.body)
  res.send(a)
  //return makeResponse({ a, status:200, data: delivery, message : "New Idea Added" })
})

export const updateIdea = asyncHandler(async (req, res) => {
  const ans = await updateIdeaById(req.params.id, req.body)
  res.send(ans)
})

export const deleteIdea = asyncHandler(async (req, res) => {
  const ans = await deleteIdeaById(req.params.id)
  res.send(ans)
})

export const getIdeas = asyncHandler(async (req, res) => {
  const a = await getAllIdeas(req.query)
  res.json(a)
})

export const getIdea = asyncHandler(async (req, res) => {
  const ans = await getIdeaById(req.params.id)
  res.status(200).json(ans)
})

