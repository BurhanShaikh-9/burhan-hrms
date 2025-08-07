import express from "express";
const router = express.Router();
const { authenticateToken } = require("../middleware/jwtCookie");
const {addUser, getAllUsers, getSingleUser} = require('../controller/user');

router.post("/user",  addUser);
router.get("/user",authenticateToken,  getAllUsers);
router.get("/user/:userId", authenticateToken, getSingleUser);

module.exports = router;