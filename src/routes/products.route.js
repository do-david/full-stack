import express from "express";
import product from "../controllers/products.controller";
const router = express.Router();

router.get('/products', product.getAllProducts);
router.get('/product/:id', product.getProduct);

module.exports = router;