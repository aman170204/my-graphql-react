const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const { GraphQLSchema } = require('graphql');

const {queryType} = require('./query');

const app = express();

// define the schema
const schema = new GraphQLSchema({ query: queryType })

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));    


const PORT = 5001
app.listen(PORT, () => {
    `Graphql Server running at http://localhost:${PORT}/graphql`
})