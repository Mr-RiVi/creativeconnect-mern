import mongoose from 'mongoose'

const mentorSchema = mongoose.Schema(
  {
    mentName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    mentId: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
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
    workHistory: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    expertiseArea: {
      type: String,
      required: true,
    },
    fbLink: {
      type: String,
      required: true,
    },
    linkedinLink: {
      type: String,
      required: true,
    },
    mentImg: {
      type: String,
    },
    mentState: {
      type: String,
    },

  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const Mentor = mongoose.model('mentor', mentorSchema)
export default Mentor
