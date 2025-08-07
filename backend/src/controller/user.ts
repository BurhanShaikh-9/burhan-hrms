
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import modelUser from '../models/user';

const addUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;


    try {
        const existingUser = await modelUser.findOne({ email });
        
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        if (!password) {
            return res.status(400).json({ message: "Password is required" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new modelUser({
            username,
            email,
            password: hashedPassword,
            userType: 1,
        });

        await newUser.save();
        res.status(201).json({
            message: "User registered successfully.",
        });

    } catch (error) {
        console.log(error, 'error');
        res.status(500).json({
            message: "An error occurred while registering the user.",
            error,
        });
    }
};

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const { page: pageStr, limit: limitStr } = req.query as { page?: string; limit?: string }
        
        const page = parseInt(pageStr || '1'); // Default page is 1
        const limit = parseInt(limitStr || '10'); // Default limit is 10
        
        const skip = (page - 1) * limit;
        
        const users = await modelUser.find().select('-password').skip(skip).limit(limit);
        const totalUsers = await modelUser.countDocuments();
        
        res.status(200).json({
            page,
            limit,
            totalPages: Math.ceil(totalUsers / limit),
            totalUsers,
            users
        });
    } catch (error) {
        console.error(error, 'error');
        res.status(500).json({
            message: "An error occurred while fetching users.",
            error,
        });
    }
};

const getSingleUser = async (req: Request, res: Response) => {
    const userId = req.params.userId;

    try {
        const user = await modelUser.findById(userId).select('-password');

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error, 'error');
        res.status(500).json({
            message: "An error occurred while fetching the user.",
            error,
        });
    }
};

export {
    addUser,
    getAllUsers,
    getSingleUser
};