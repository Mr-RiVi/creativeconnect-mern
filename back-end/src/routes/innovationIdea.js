import express from 'express'
import { addNewIdea, updateIdea, deleteIdea, getIdeas, getIdea } from '../controllers/innovationIdea.js'

  const router = express.Router()

  router.post('/addIdea', addNewIdea)
  router.put('/:id', updateIdea)
  router.delete('/:id', deleteIdea)
  router.get('/viewIdeas', getIdeas)
  router.get('/viewIdea/:id', getIdea)
 

  export default router