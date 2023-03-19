import mongoose from 'mongoose'

const ideaSchema =new mongoose.Schema(
    {
        entName: {
            type: String,
            required: true,
          },
        entEmail: {
            type: String,
            require: true,
            unique: true,
        },
        entContact: {
            type: Number,
            require: true,
            unique: false,
        },
        entLang: {
            type: String,
            require: true,
            unique: false,
        },
        entBusinessField: {
            type: String,
            require: true,
            unique: false,
        },
        entComName: {
            type: String,
            require: true,
            unique: false,
        },
        entComAddr: {
            type: String,
            require: true,
            unique: false,
        },
        entComContact: {
            type: String,
            require: true,
            unique: false,
        },
        entComWeb: {
            type: String,
            require: true,
            unique: false,
        },
        entComCountry: {
            type: String,
            require: true,
            unique: false,
        },
        entComDes: {
            type: String,
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