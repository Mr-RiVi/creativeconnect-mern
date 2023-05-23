import express from 'express';

import {
  insertInnovation,
  getInnovation,
  getAllInnovation,
  searchInnovationHandler,
  modifyInnovation,
  removeInnovation,
  InnovationValuationHandler,
} from '../controllers/innovation.js';

const innovation_router = express.Router();

innovation_router.post('/insertInnovation', insertInnovation);
innovation_router.get('/getInnovation/:id', getInnovation);
innovation_router.get('/getAllInnovation', getAllInnovation);
innovation_router.get('/get-estiamted-value/:id', InnovationValuationHandler);
innovation_router.get('/search', searchInnovationHandler);
innovation_router.put('/modifyInnovation/:id', modifyInnovation);
innovation_router.delete('/removeInnovation/:id', removeInnovation);

export default innovation_router;
