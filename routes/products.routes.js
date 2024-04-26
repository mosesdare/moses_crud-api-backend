import express from "express"
import { Product } from "../models/products.model.js"
const router = express.Router();

import { getProducts, addProduct, updateProduct, deleteProduct } from "../controller/products.controller.js"

//Get all the products and get product
router.get('/:id?', getProducts);

// Add a product
router.post('/', addProduct);

// Update a product
router.put('/:id', updateProduct)

// Delete a product
router.delete('/:id', deleteProduct);


export default router;