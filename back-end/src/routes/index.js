import express from 'express';

import innovation_router from './innovation.js';
import userAccount_router from './userAccount.js';

const router = express.Router();

router.use('/innovation', innovation_router);
router.use('/userAccount', userAccount_router);

export default router;
