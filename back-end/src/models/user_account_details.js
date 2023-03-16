import mongoose from 'mongoose'

const user_accountSchema = mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            unique: true,

        },
        emailAdress: {
            type: String,
            required: true,
            unique: true,

        },
        contactNumber: {
            type: Number,
            required: true,
            unique: true,

        },
        country: {
            type: String,
            required: true,
            unique: true,

        },
        password: {
            type: String,
            required: true,
            unique: true,

        },
        role: {
            type: String,
            required: true,

        }
    },
    {
        versionKey: false,
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    }
)