import mongoose from 'mongoose'

const user_accountSchema = mongoose.Schema(
    {
        fullName: {

        },
        emailAdress: {

        },
        contactNumber: {

        },
        country: {

        },
        password: {

        },
        role: {

        }
    },
    {
        versionKey: false,
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    }
)