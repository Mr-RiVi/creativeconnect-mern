import asyncHandler from '../middleware/async.js';
import makeResponse from '../middleware/response.js';
import {
  addMeeting,
  deleteMeetingsById,
  getAllMeetings,
  getMeetingID,
  updatemeetingById,
} from '../services/meeting.js';

//adding meeting details
export const meetingRegister = asyncHandler(async (req, res) => {
  const a = await addMeeting(req.body);
  //res.send(a)
  return makeResponse({
    res,
    status: 201,
    data: a,
    message: 'A new meeting has been created',
  });
});

//get one meeting details
export const getMeeting = asyncHandler(async (req, res) => {
  const a = await getMeetingID(req.params.Meeting_Id, req.body);
  return makeResponse({
    res,
    status: 202,
    data: a,
    message: 'Get meeting details',
  });
});

//Get all mmeting details
export const getMeetings = asyncHandler(async (req, res) => {
  const a = await getAllMeetings();
  res.json(a);
});

//Updating meeting details
export const updatemeeting = asyncHandler(async (req, res) => {
  const a = await updatemeetingById(req.params.Meeting_Id, req.body);
  return makeResponse({
    res,
    status: 203,
    data: a,
    message: 'Meeting details updated',
  });
});

//Deleting meeting details
export const deleteMeetings = asyncHandler(async (req, res) => {
  const a = await deleteMeetingsById(req.params.Meeting_Id);
  return makeResponse({
    res,
    status: 204,
    data: a,
    message: 'Delete Meeting Details',
  });
});
