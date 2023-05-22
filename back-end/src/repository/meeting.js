// import MeetingTable from '../models/meeting.js';
import MeetingTable from '../models/meeting.js';
// adding meeting details
export const createMeeting = async (details) => {
  try {
    const meetingTable = new MeetingTable({
      meetingId: details.meetingId,
      password: details.password,
      discription: details.discription,
      date: details.date,
      time: details.time,
    });
    await meetingTable.save();
    return { msg: 'Details Add Succesfully' };
  } catch (error) {
    console.log(error);
    return { msg: 'Details has not been submmited' };
  }
};

//Get one Meeting details
export const getmeeting = async (id) => {
  return await MeetingTable.findById(id);
};

//get all meeting details
export const getmeetings = async () => {
  try {
    const a = await MeetingTable.find().sort({ createdAt: -1 });
    return a;
  } catch (error) {
    return { msg: 'No Meetings found' + error.message };
  }
};

//Update Meeting Details
export const updateMeeting = async (id, ob) => {
  try {
    await MeetingTable.findByIdAndUpdate(id, ob);
    return { msg: 'update successfull' };
  } catch (error) {
    return { msg: 'update Error' };
  }
};

// Delete Meeting details
export const deleteMeetings = async (id) => {
  try {
    await MeetingTable.findByIdAndDelete(id);
    return { msg: 'deletion successfull' };
  } catch (error) {
    return { msg: 'deletion not successfull' };
  }
};
