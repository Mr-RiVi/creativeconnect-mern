import mongoose from 'mongoose'

const ideaSchema =new mongoose.Schema(
    {
        ideaName: {
            type: String,
            required: true,
          },
    },
    {
        versionKey: false,
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    }
)

const Idea = mongoose.model('idea', ideaSchema)
export default Idea