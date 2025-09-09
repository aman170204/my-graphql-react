const express =require('express');
const router =express.Router();

const{
    getAllProducts,
    getProductByID,
    createProduct
} =require('../controllers/product.controller');

router
    .route('/')
    .get(getAllProducts)
    .post(createProduct);

router
    .route('/:id')
    .get(getProductByID);

module.exports=router;
