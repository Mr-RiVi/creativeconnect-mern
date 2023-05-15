import mongoose from 'mongoose'

const questionchema = mongoose.Schema(
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
    email: {
      type: String,
      require: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const Question = mongoose.model('question', questionchema)
export default Question
