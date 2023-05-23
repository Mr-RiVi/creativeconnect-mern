import mongoose from 'mongoose';

const mailSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: false,
    },
    text: {
      type: String,
      required: true,
      unique: false,
    },
    description: {
      type: String,
      required: true,
      unique: false,
    },
    date: {
      type: String,
      required: true,
      unique: false,
    },
    time: {
      type: Number,
      required: false,
      unique: false,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

const Mail = mongoose.model('Mail', mailSchema);

export default Mail;
