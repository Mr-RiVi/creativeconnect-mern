import mongoose from 'mongoose'

const mentorSchema = mongoose.Schema(
  {
    problemId: {
        type: String,
        required: true,
        unique: true,
      },
    empId: {
      type: String,
      required: true,
      unique: true,
    },
    empName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },


  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const Mentor = mongoose.model('mentor', mentorSchema)
export default Mentor
