//const express = require("express");
//const userRouter = require('./users.route');
import userRouter from "./users.route";
import express from "express";
const router = express.Router();

router.use(userRouter);

module.exports = router;