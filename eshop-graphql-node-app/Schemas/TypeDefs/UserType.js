const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLFloat, GraphQLBoolean } = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        isAdmin: { type: GraphQLBoolean }
    }),
});
module.exports = UserType;