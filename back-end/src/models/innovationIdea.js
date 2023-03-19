import mongoose from 'mongoose'

const ideaSchema =new mongoose.Schema(
    {
        ideaName: {
            type: String,
            required: true,
          },
        ideaDescription: {
            type: String,
            require: true,
            unique: false,
        },
        ideaIndustry: {
            type: String,
            require: true,
            unique: false,
        },
        ideaBudget: {
            type: Number,
            require: true,
            unique: false,
        },
    },
    {
        versionKey: false,
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    }
)

const Idea = mongoose.model('idea', ideaSchema)
export default Idea