import { v2 as cloudinary } from "cloudinary";
require("dotenv").config();

const CLOUDINARY_SECRET = process.env.CLOUDINARY_SECRET;
const CLOUDINARY_API = process.env.CLOUDINARY_API;
const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME;

cloudinary.config({
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_API,
    api_secret: CLOUDINARY_SECRET
});

export default cloudinary;
