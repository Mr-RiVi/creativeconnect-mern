import mongoose from 'mongoose';

const meetingSchema = mongoose.Schema(
  {
    meetingId: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    discription: {
      type: String,
      required: true,
      unique: false,
    },
    date: {
      type: String,
      required: true,
      nique: false,
    },
    time: {
      type: Number,
      required: false,
      nique: false,
    },
  },
  {
    versionkey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);
const MeetingTable = mongoose.model('meeting', meetingSchema);
export default MeetingTable;
