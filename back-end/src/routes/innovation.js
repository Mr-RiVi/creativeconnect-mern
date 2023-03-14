import express from 'express';

import { insertInnovation } from '../controllers/innovation.js';

const innovation_router = express.Router();

innovation_router.post('/insertInnovation', insertInnovation);

export default innovation_router;
