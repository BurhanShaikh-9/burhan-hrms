import { Request, Response, NextFunction } from 'express';
import modelUser from '../models/user';
const bcrypt = require('bcrypt');
const { generateAccessToken, generateRefreshToken } = require('../middleware/jwtCookie');  // Adjust the path accordingly
require('dotenv').config();  

const signIn = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    let passwordMatch = false;

    try {
        const existingUser = await modelUser.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: "Incorrect Email" });
        }

        if (existingUser && existingUser.userType === 1) {
            passwordMatch = await bcrypt.compare(password, existingUser.password);
        }
        if (passwordMatch) {
            const user = existingUser;
            const accessToken = generateAccessToken(user);
            const refreshToken = generateRefreshToken(user);
            const { password, ...newUser } = user.toObject();

            // Setting the access token in the cookies for client-side access
            res.cookie("accessToken", accessToken, {
                httpOnly: true,
                sameSite: "none",
                secure: true, // Set to true if using HTTPS in production
            });

            // Sending both tokens in the response body
            return res.status(200).json({
                message: "Sign In Successful",
                user: newUser,
                accessToken: accessToken,
                refreshToken: refreshToken,  // Send the refresh token in response body
            });
        } else {
            return res.status(401).json({ message: "Incorrect Password" });
        }
    } catch (error) {
        console.log(error, 'error');
        res.status(500).json({
            message: "An error occurred while Signing.",
            error,
        });
    }
};

module.exports = {
    signIn
};