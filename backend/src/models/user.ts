import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        // profilePicture: {
        //     type: String, 
        // },
        username: {
            type: String,
        },
        email: {
            type: String,
        },
        // phone: {
        //     type: String,
        // },
        // address: {
        //     type: String,
        // },
        // designation: {
        //     type: String,
        // },
        // department: {
        //     type: String,
        // },
        password: {
            type: String,
        },
        userType: {
            type: Number
        },
        // birthdate: {
        //     type: Date,
        // }
    }
);

const User = mongoose.model("users", userSchema);
export default User;