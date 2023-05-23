import express from 'express';
import {
  deleteMeetings,
  getMeeting,
  getMeetings,
  meetingRegister,
  updatemeeting,
} from '../controllers/meeting.js';

const meeting_router = express.Router();

meeting_router.post('/addMeeting', meetingRegister);
meeting_router.get('/viewAllMeetings', getMeetings);
meeting_router.get('/viewMeeting/:Meeting_Id', getMeeting);
meeting_router.put('/updateMeeting/:Meeting_Id', updatemeeting);
meeting_router.delete('/deleteMeeting/:Meeting_Id', deleteMeetings);

export default meeting_router;
