const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const dbConnect = require('./config/db')

// Load env vars
dotenv.config({path:'./config/config.env'})

//Connect to database
dbConnect();

//initializing express app
const app = express();



//import route
// const getAllProducts = require('./api/controllers/product.controller');
// app.get('/',getAllProducts.getAllBooks);
const productRoute =require('./api/routes/product.route');

//middleware
app.use(express.json());
app.use('/api/products',productRoute)
//setup server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.
        yellow.bold)
})

