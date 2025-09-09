const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type : String,
        required:[true,'firstname is required']
    },
    lastName: {
        type : String,
    },
     username: {
        type : String,
        required:[true,'username is required']
    },
    email: {
        type : String,
        required:[true,'email is required'],
    },
    mobile: {
        type : String,
        unique: true
    },
    password: {
        type : String,
        required:[true,'password is required'],
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('User',userSchema);