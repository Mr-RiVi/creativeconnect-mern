import express from 'express';
import userAccount_router from './userAccount.js';
import innovation_router from './innovation.js';
import meeting_router from './meeting.js';
import mentor_router from './mentor.js';
// import entIdearouter from './innovationIdea.js';
import mail_router from './mailRoutes.js';
import entIdearouter from './innoProduct.js';


const router = express.Router();

router.use('/innovation', innovation_router);
router.use('/userAccount', userAccount_router);
router.use('/meeting', meeting_router);
router.use('/mentor', mentor_router);
router.use('/idea', entIdearouter);
router.use('/mail', mail_router);

export default router;
