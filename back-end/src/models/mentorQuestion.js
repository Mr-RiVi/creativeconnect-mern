import mongoose from 'mongoose'

const questionchema = mongoose.Schema(
  {
    problemId: {
        type: String,
        required: true,
      },
    empId: {
      type: String,
      required: true,
    },
    empName: {
      type: String,
    },
    email: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
    
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const Question = mongoose.model('question', questionchema)
export default Question
