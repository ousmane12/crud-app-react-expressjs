const express = require('express');
const { getProducts, getProduct, updateProduct, createProduct, deleteProduct } = require('../controllers/product')

const router = express.Router();

router.route('/')
.get(getProducts)
.post(createProduct);

router.route('/:id')
.get(getProduct)
.patch(updateProduct)
.delete(deleteProduct);

module.exports = router;