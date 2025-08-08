import { Request } from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary";

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "user-profiles", // Cloudinary folder
        allowed_formats: ["jpg", "png", "jpeg", "webp"],
    } as any,
});


const fileFilter = (
    _req: Express.Request,
    file: Express.Multer.File,
    cb: multer.FileFilterCallback
) => {
    if (!file.mimetype.startsWith("image")) {
        return cb(new Error("Only image files are allowed") as any, false);
    }
    cb(null, true);
};

const upload = multer({ storage, fileFilter });

export default upload;