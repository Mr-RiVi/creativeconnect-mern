import express from 'express';

import innovation_router from './innovation.js';

const router = express.Router();

router.use('/innovation', innovation_router);

export default router;
