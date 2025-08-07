import mongoose, { Mongoose } from 'mongoose';
require("dotenv").config();
const mongoURI = process.env.MONGODB_URI;
if (!mongoURI) {
    throw new Error("MONGODB_URI is not defined in environment variables");
}

export const dbConnection = async () => {
    try {
        await mongoose.connect(mongoURI).then((con: Mongoose) => {
            console.log("DB is connected", con.connection.host);
        })
    }
    catch (error) {
        console.log('DB is not connected', error);
    }
}