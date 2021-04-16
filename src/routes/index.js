import userRouter from "./users.route";
import orderRouter from "./orders.route";
import productRouter from "./products.route";
import express from "express";
const router = express.Router();

router.use(userRouter);
router.use(orderRouter);
router.use(productRouter);

module.exports = router;