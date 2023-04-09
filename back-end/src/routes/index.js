import express from 'express';
import userAccount_router from './userAccount.js';
import innovation_router from './innovation.js';
import meeting_router from './meeting.js';

const router = express.Router();

router.use('/innovation', innovation_router);
router.use('/userAccount', userAccount_router);
router.use('/meeting', meeting_router);

export default router;
