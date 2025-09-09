const mongoose = require('mongoose');

const orderSchema= new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    createdDate:{
        type:String,
        default:Date.now
    }
})

const Order = mongoose.model('Order',orderSchema);
module.exports= Order;