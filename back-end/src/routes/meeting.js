import express from 'express';
import { meetingRegister } from '../controllers/meeting';

const meeting_router = express.Router();

meeting_router.post('/addMeeting', meetingRegister);
meeting_router.get('/');
