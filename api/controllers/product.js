const Product = require('../models/Product');
const asyncHandler = require('../middleware/async');
//@desc     Get all products
//@route    GET /products
//@access   Public 
exports.getProducts = asyncHandler(async (req, res, next) => {

    const products = await Product.find();
        res.status(200).json({
            success: true,
            data: products
        });
        if(!products){
            return next(new errorResponse(`Products not found`, 404));
        }
    res.status(200).json(res.advancedResults);
    }
    
);

//@desc     Get a single product
//@route    GET /product/:id
//@access   Public 
exports.getProduct = asyncHandler(async (req, res, next) =>{
   
    const product = await Product.findById(req.params.id);
    res.status(200).json({
        success: true,
        data: product
    });
    if(!product){
        return next(new errorResponse(`Product not found with the id of ${req.params.id}`, 404));
    }
});
//@desc     Create new product
//@route    POST /product
//@access   Public 
exports.createProduct = asyncHandler(async (req, res, next) =>{
    const product = await Product.create(req.body);
    res.status(201).json({
            success: true,
            data: product
        });   
});

//@desc     Update a product    
//@route    PATCH /product/:id
//@access   Public 
exports.updateProduct = asyncHandler(async (req, res, next) => {
        let product = await Product.findById(req.params.id);
        if(!product){
            return next(new errorResponse(`Product not found with the id of ${req.params.id}`, 404));
        }
        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            success: true,
            data: product
        });
});

//@desc     Delete a product
//@route    DELETE /product/:id
//@access   Public
exports.deleteProduct = asyncHandler(async (req, res, next) => {
        const product = await Product.findById(req.params.id);
        if(!product){
            return next(new errorResponse(`Product not found with the id of ${req.params.id}`, 404));
        }
        product.remove();
        res.status(200).json({
            success: true,
            data: {}
        });
});





