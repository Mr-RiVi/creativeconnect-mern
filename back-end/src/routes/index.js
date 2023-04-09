import express from 'express';

import innovation_router from './innovation.js';
import entIdearouter from './innovationIdea.js'

const router = express.Router();

router.use('/innovation', innovation_router);
router.use('/idea', entIdearouter)

export default router;
