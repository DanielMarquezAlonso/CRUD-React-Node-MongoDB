const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        address: {
            postal: {
                type: String,
                required: true,
            },
            province: {
                type: String,
                required: true,
            },
            locality: {
                type: String,
            },
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const ModelUser = mongoose.model('users', userSchema)
module.exports = ModelUser