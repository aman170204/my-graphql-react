const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const dbConnect = require('./config/db')
const authMiddleware = require('./middleware/auth')
const cors =require('cors');


//import route
// const getAllProducts = require('./api/controllers/product.controller');
// app.get('/',getAllProducts.getAllBooks);
const productRoute =require('./api/routes/product.route');
const authRoute= require('./api/routes/auth.route')

// Load env vars
dotenv.config({path:'./config/config.env'})

//Connect to database
dbConnect();

//initializing express app
const app = express();




//middleware
app.use(express.json());
app.use(cors());
app.use('/api/v1/auth',authRoute);

app.use(authMiddleware);

app.use('/api/v1/products',productRoute);


//setup server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.
        yellow.bold)
})

