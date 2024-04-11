const express = require('express');
const Product = require('../models/products.model');
const router = express.Router();

const {getProduct, getProducts, addProduct,updateProduct, deleteProduct} = require('../routes/products.routes');

//Get all the products
router.get('/', getProducts);

// Get a specific product
router.get('/:id', getProduct);

// Add a product
router.post('/', addProduct);

// Update a product
router.put('/:id', updateProduct)

// Delete a product
router.delete('/:id', deleteProduct);


module.exports = router;