import express from 'express';

import {
  insertInnovation,
  getInnovation,
  getAllInnovation,
  modifyInnovation,
  removeInnovation,
} from '../controllers/innovation.js';

const innovation_router = express.Router();

innovation_router.post('/insertInnovation', insertInnovation);
innovation_router.get('/getInnovation/:id', getInnovation);
innovation_router.get('/getAllInnovation', getAllInnovation);
innovation_router.put('/modifyInnovation/:id', modifyInnovation);
innovation_router.delete('/removeInnovation/:id', removeInnovation);

export default innovation_router;
