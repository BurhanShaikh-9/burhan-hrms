import { Request } from "express";
import multer from "multer";

// const storage = multer.diskStorage({});
const storage = multer.diskStorage({
    // destination: (req, file, cb) => {
    //     cb(null, 'uploads/');
    // },
    // filename: (req, file, cb) => {
    //     console.log(file, 'fileeee');
    //     cb(null, Date.now() + '-' + file.originalname);
    // }
});


const fileFilter = (
    _req: Express.Request,
    file: Express.Multer.File,
    cb: multer.FileFilterCallback
) => {
    if (!file.mimetype.startsWith("image")) {
        return cb(<any>new Error("Only image files are allowed"), false);
    } else {
        cb(null, true);
    }
};

const upload = multer({ storage: storage, fileFilter });

module.exports = upload;