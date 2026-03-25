import mongoose from "mongoose";

const revokedTokenSchema = new mongoose.Schema({
    token: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60*60*24
    }
})

const RevokedToken = mongoose.model('RevokedToken', revokedTokenSchema);

export default RevokedToken