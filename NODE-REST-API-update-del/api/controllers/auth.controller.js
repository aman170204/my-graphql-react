const User =require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');

//post: register a user
//encrypt the password
exports.register = async (req,res) => {
    const{username,password,email} =req.body;
    //verify if the email and passwrod and not empty
    if(!username || !password || !email){
        return res.status(400).json({
            error:true,
            message:"username,password and email are required"
        })
    }

    //verify no user exists with same email
    const user = await User.findOne({email});
    if(user){
        return res.status(400).json({
            error:true,
            message:'User already exists'
        })
    }

    //encrypt the password
    const salt = await bcrypt.genSalt(Number(10))
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser = new User({
        ...req.body,
        password:hashedPassword
    })

    await newUser.save()

    res.status(201).json({
        error:false,
        message:'User registered successfully'
    })
}

exports.login = async (req, res) => {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    try {
        // Find user by email
        const user = await User.findOne({ email });

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Compare passwords
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        //create a token
        const payload ={email,username: user.password}
        const token =jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'1h'})

        // Create a JWT token
        // const token = jwt.sign(
        //     { id: user._id, email: user.email }, // payload
        //     process.env.JWT_SECRET,              // secret key
        //     { expiresIn: '1h' }                  // token expiration
        // );

        // Respond with token and user info (without password)
        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                email: user.email,
                name: user.name // include other user fields as needed
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


//Post: Login a user

//find user by email
//verify user exists
//compare the password
//create a token
//send the token in the response
