const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLFloat, GraphQLBoolean } = graphql;

const OrderType = new GraphQLObjectType({
    name: 'Order',
    fields: () => ({
        userId: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        createdDate: { type: GraphQLString },
    }),
});
module.exports = OrderType;
