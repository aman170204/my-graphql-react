const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLFloat } = graphql;

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat },
        rating: { type: GraphQLFloat },
        stock: { type: GraphQLFloat },
        category: { type: GraphQLID },
        thumbnail: { type: GraphQLString },
        image: { type: GraphQLString }
    })
});

module.exports = ProductType;