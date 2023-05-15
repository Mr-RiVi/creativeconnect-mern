import express from 'express';
import userAccount_router from './userAccount.js';
import innovation_router from './innovation.js';
import meeting_router from './meeting.js';
import mentor_router from './mentor.js';
import entIdearouter from './innoProduct.js';
import mentorQuestion_roter from './mentorQuestion.js';

const router = express.Router();

router.use('/innovation', innovation_router);
router.use('/userAccount', userAccount_router);
router.use('/meeting', meeting_router);
router.use('/mentor', mentor_router);
router.use('/idea', entIdearouter);
router.use('/question', mentorQuestion_roter);

export default router;
