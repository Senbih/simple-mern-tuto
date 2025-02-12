const express = require('express');
const Product = require('../models/product.model');
const router = express.Router();
const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/product.controller');

router.post('/', createProduct); // POST /products
router.get('/:id', getProduct); // GET /products/:id
router.put('/:id', updateProduct); // PUT /products/:id
router.delete('/:id', deleteProduct); // DELETE /products/:id
router.get('/', getProducts); // GET /products

module.exports = router;