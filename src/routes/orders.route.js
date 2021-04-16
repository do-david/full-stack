import express from "express";
import orders from "../controllers/orders.controller";
const router = express.Router();

router.post('/orders', orders.createOrder);
router.get('/orders', orders.getOrders);

module.exports = router;