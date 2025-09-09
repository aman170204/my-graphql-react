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
// put edit the product
// PUT: Update a product by ID
exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id.trim(),
            req.body,
            { new: true, runValidators: true } // return the updated doc and validate
        );

        if (!product) {
            return res.status(404).json({
                error: true,
                message: 'Product not found',
            });
        }

        res.status(200).json({
            error: false,
            message: 'Product updated successfully',
            data: product,
        });
    } catch (err) {
        res.status(500).json({
            error: true,
            message: err.message,
        });
    }
};


// DELETE: Delete a product by ID
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id.trim());

        if (!product) {
            return res.status(404).json({
                error: true,
                message: 'Product not found',
            });
        }

        res.status(200).json({
            error: false,
            message: 'Product deleted successfully',
            data: product,
        });
    } catch (err) {
        res.status(500).json({
            error: true,
            message: err.message,
        });
    }
};


