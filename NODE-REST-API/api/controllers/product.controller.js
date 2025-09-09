const Product = require('../models/product.model')

//Get all Products
exports.getAllProducts =async (req,res) => {
    try{
        const products =await Product.find();
        res.status(200).json({
            error:false,
            message:'Products fetched Successfully',
            data: products
        })

    }catch(err){
        res.status(500).json({
            error:false,
            message:err.message
        })
    }
}

//Get Single product by id
exports.getProductByID = async(req,res) =>{
    const product =await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            error:true,
            message:'Product not found'
        })
    }
    res.status(200).json({
        error:false,
        message: 'Product created successfully',
        data: product
    })
}

//Post : create a new Product
exports.createProduct = async (req,res) => {
    try{
        const product = await Product.create(req.body);
        res.status(201).json({
            error:false,
            message:'Product created successfully',
            data: product
        })
    }catch(err){
        res.status(500).json({
            error:true,
            message:err.message
        })
    }
}




