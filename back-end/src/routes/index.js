import express from 'express';

import innovation_router from './innovation.js';
import mentor_router from './mentor.js'

const router = express.Router();

router.use('/innovation', innovation_router);
router.use('/mentor', mentor_router)

export default router;
