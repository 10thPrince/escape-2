import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        reqired: [true, "Please Fill in the Name Field!"]
    },
    email: {
        type: String,
        required: [true, "Please Fill In the Email Field!"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please fill in the Password Field!"]
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", UserSchema);

export default User