import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
}

// Generate Access Token
const generateAccessToken = (user: { _id: string }) => {
    return jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
};

// Generate Refresh Token
const generateRefreshToken = (user: { _id: string }) => {
    return jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });
};

// Authenticate JWT
export interface AuthenticatedRequest extends Request {
    user?: string | JwtPayload;
}

export const authenticateToken = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1]; // Bearer <token>

    if (!token) {
        return res.status(401).json({ message: 'Access token missing' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};

// Refresh Token
const refreshAccessToken = (req: Request, res: Response) => {
    const refreshToken = req.cookies.refresh_token;
    if (!refreshToken) return res.status(401).json({ message: "Refresh token is required" });

    try {
        const verified = jwt.verify(refreshToken, JWT_SECRET);
        if (typeof verified === "string" || !("id" in verified)) {
            return res.status(403).json({ message: "Invalid or expired refresh token" });
        }
        const newAccessToken = generateAccessToken({ _id: (verified as JwtPayload).id });
        res.json({ accessToken: newAccessToken });
    } catch (error) {
        res.status(403).json({ message: "Invalid or expired refresh token" });
    }
};

module.exports = { generateAccessToken, generateRefreshToken, authenticateToken, refreshAccessToken };