import express from 'express';
import userAccount_router from './user_account.js';
import innovation_router from './innovation.js';

const router = express.Router();

router.use('/innovation', innovation_router);
router.use('/userAccount', userAccount_router);

export default router;
