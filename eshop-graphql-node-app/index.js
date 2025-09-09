const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const { graphqlHTTP } = require('express-graphql');

// importing the schema
const schema = require('./Schemas');
const isAuth = require('./middleware/auth');

// creating a connect with mongodb
mongoose.connect('mongodb+srv://aman170204_db_user:ulDx4T7IrRwZP2pt@cluster0.6byxkgv.mongodb.net/testdb1?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('Connected to MongoDB...'); })
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Initialize an express application
const app = express();
app.use(isAuth)
// ✅ Use CORS (Allow all origins by default)
app.use(cors());

// setup the /graphql endpoint with express-graphql middleware
app.use("/graphql", graphqlHTTP({
    schema, // the GraphQL schema
    graphiql: true // enable the GraphiQL interface for testing queries
}));

// start the server and listen on port 5000
const PORT = 5002;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
});