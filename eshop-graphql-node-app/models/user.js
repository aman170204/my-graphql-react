const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minlength:5,
        maxlength:50
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:5,
        maxlength:255
    },
    password:{
        type:String,
        required:true,
        unique:true,
        minlength:5,
        maxlength:1024
    },
    isAdmin:{
        type:Boolean,
        defalut:false,
    }
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign(
        {_id: this._id,isAdmin:this.isAdmin},
        'jwtPrivateKey' //this must be stored in env variable in real world application
    )
    return token;
}

const User = mongoose.model('User',userSchema);
module.exports=User