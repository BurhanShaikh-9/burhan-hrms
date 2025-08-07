import express from "express";
const router = express.Router();
const {signIn} = require('../controller/signin');

router.post("/signIn", signIn);

module.exports = router;