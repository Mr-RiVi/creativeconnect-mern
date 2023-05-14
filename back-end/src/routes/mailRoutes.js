import express from 'express';
import { sendMailToClients } from '../controllers/mailController.js';

const mail_router = express.Router();

mail_router.post('/send-mail', sendMailToClients);

export default mail_router;
