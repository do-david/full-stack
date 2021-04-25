const userRouter = require('./users.route');
const orderRouter = require('./orders.route');
const productRouter = require('./products.route');
import express from "express";
const router = express.Router();

router.use(userRouter);
router.use(orderRouter);
router.use(productRouter);

module.exports = router;