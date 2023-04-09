import {
  createMeeting,
  deleteMeetings,
  getmeeting,
  getmeetings,
  updateMeeting,
} from '../repository/meeting.js';

// Creating meeting details
export const addMeeting = async ({
  meetingId,
  password,
  discription,
  date,
  time,
}) => {
  const details = {
    meetingId,
    password,
    discription,
    date,
    time,
  };

  const b = await createMeeting(details);
  return b.msg;
};

//get one meeting
export const getMeetingID = async (id) => {
  return await getmeeting(id);
};

//get all the meetings
export const getAllMeetings = async () => {
  return await getmeetings();
};

//Updating meeting details
export const updatemeetingById = async (id, ob) => {
  console.log(ob);
  const y = await updateMeeting(id, ob);
  return y;
};

//delete meeting details
export const deleteMeetingsById = async (id) => {
  return await deleteMeetings(id);
};
