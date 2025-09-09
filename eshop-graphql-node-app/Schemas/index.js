const graphql = require('graphql');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLBoolean,
    GraphQLFloat } = graphql;

const isAuth = require('../middleware/auth')
// Import bcrypt
const bcrypt = require('bcrypt');

// Import data models
const Product = require('../models/Product');
const User = require('../models/user')
const Order = require('../models/order')

// Import user-defained data type for GraphQL
const ProductType = require('./TypeDefs/ProductType');
const UserType = require('./TypeDefs/UserType');
const OrderType = require('./TypeDefs/OrderType');

// Define the Root Query, which is the entry point for all quering data
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        // Product Queries
        getAllProduct: {
            type: new GraphQLList(ProductType), // Define the type of data to be returned (a list of Products)
            args: { id: { type: GraphQLString } }, // Specify any input arguments that can be used in the query (in this case an id)
            async resolve(parent, args) {
                // the resolve function specifies how to fetch and return the requested data
                // in this case it fetch and return a list of all products

                //un comment this if you use authentication also add this in line 33  async resolve(parent, args,req)
                // if(!req.isAuth){
                //     throw new Error('Unauthenticated!');
                // }

                const products = await Product.find();
                return products;
            }
        },

        getProduct: {
            type: ProductType, // Define the type of data to be returned (a single Product)
            args: { id: { type: GraphQLString } }, // Specify any input arguments that can be used in the query (in this case an id)
            async resolve(parent, args) {
                // the resolve function specifies how to fetch and return the requested data
                // in this case it fetch and return a single product based on the provided id
                const product = await Product.findById(args.id);
                return product;
            }
        },
        getAllOrder: {
            type: new GraphQLList(OrderType), // Define the type of data to be returned (a list of Products)
            args: { id: { type: GraphQLString } }, // Specify any input arguments that can be used in the query (in this case an id)
            async resolve(parent, args) {
                // the resolve function specifies how to fetch and return the requested data
                // in this case it fetch and return a list of all products
                // if(!req.isAuth){
                //     throw new Error('Unauthorized!')
                // }
                const orders = await Order.find();
                return orders;
            }
        },
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        // Product Mutations
        createProduct: {
            type: ProductType, // Define the type of data to be returned (a single Product)
            args: {

                title: { type: GraphQLString },
                description: { type: GraphQLString },
                price: { type: GraphQLFloat },
                rating: { type: GraphQLFloat },
                stock: { type: GraphQLFloat },
                category: { type: GraphQLString },
                thumbnail: { type: GraphQLString },
                image: { type: GraphQLString }
            },
            async resolve(parent, args, req) {
                // the resolve function specifies how to create and return the new product
                const newProduct = new Product({
                    title: args.title,
                    description: args.description,
                    price: args.price,
                    rating: args.rating,
                    stock: args.stock,
                    category: args.category,
                    thumbnail: args.thumbnail,
                    image: args.image
                });
                await newProduct.save();
                return newProduct;
            }
        },
        updateProduct: {
            type: ProductType, // Define the type of data to be returned (a single Product)
            args: {
                id: { type: GraphQLString },
                title: { type: GraphQLString },
                description: { type: GraphQLString },
                price: { type: GraphQLFloat },
                rating: { type: GraphQLFloat },
                stock: { type: GraphQLFloat },
                category: { type: GraphQLString },
                thumbnail: { type: GraphQLString },
                image: { type: GraphQLString }
            },
            async resolve(parent, args, req) {
                const updatedProduct = await Product.findByIdAndUpdate(args.id, {
                    title: args.title,
                    description: args.description,
                    price: args.price,
                    rating: args.rating,
                    stock: args.stock,
                    category: args.category,
                    thumbnail: args.thumbnail,
                    image: args.image
                });
                return updatedProduct;
            }
        },
        deleteProduct: {
            type: ProductType, // Define the type of data to be returned (a single Product)
            args: {
                id: { type: GraphQLString }
            },
            async resolve(parent, args) {
                const deletedProduct = await Product.findByIdAndDelete(args.id);
                return args;
            }
        },
        // users mutation
        register:{
            type: GraphQLString,
            args:{
                username: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString },
                isAdmin: { type: GraphQLBoolean }
            },
            async resolve(parent, args){
                const newUser = new User({
                    username: args.username,
                    email: args.email,
                    password: args.password,
                    isAdmin: args.isAdmin
                });
                // find user already exists with the email
                const user = await User.findOne({ email: newUser.email });
                if(user){
                    throw new Error('User already registered.');
                }

                // hash the password before saving the user
                const salt = await bcrypt.genSalt(10);
                newUser.password = await bcrypt.hash(newUser.password, salt);

                // save the user
                await newUser.save();
                const token = newUser.generateAuthToken();

                const data = {
                    token: token,
                    id: newUser._id,
                    isAdmin: newUser.isAdmin
                };

                return JSON.stringify(data);
            }
        },
        login:{
            type: GraphQLString,
            args:{
                email:{type:GraphQLString},
                password:{type:GraphQLString}
            },
            async resolve(parent,args){
            //find user by email
            const user = await User.findOne({email:args.email});
            if(!user){
                throw new Error('Invalid email or password.');
            }
            //validate the password
            const validPassword = await bcrypt.compare(
                args.password,
                user.password
            );
            if(!validPassword) {
                throw new Error('Invalid email or password');
            }

            const token =user.generateAuthToken();
            const data ={
                token :token,
                id:user._id,
                isAdmin:user.isAdmin
            };
            return JSON.stringify(data);
        }
        

        }
    }
})


// Export the GraphQL schema that include RootQuery
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})













/*****
 * 
 * query GetAllProduct {
    getAllProduct {
        id
        title
        description
        price
        category
        thumbnail
        image
    }
}

 * 
 * 
 * mutation  {
    createProduct (
        title: "title 2",
        category: "category 2",
        description: "description 2",
        image: "image 1",
        thumbnail: "thumbnail 1",
        rating: 4.5,
        price: 1000,
        stock: 100
    ){
        id
        title
        description
        price
    }
}

 * 
 * 
 */