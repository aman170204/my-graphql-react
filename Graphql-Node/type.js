const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} = require('graphql');

let {movies} = require('./data');

// Define Movie Type
movieType = new GraphQLObjectType({
    name: 'Movie',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        year: {type: GraphQLInt},
        directorId: {type: GraphQLID}
    }
});

// define Director Type
directorType = new GraphQLObjectType({
    name: 'Director',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        movies: {
            type: new GraphQLList(movieType),
            resolve(source, args){
                return movies.filter(movie => movie.directorId === source.id);
            }
        }
    }
});

exports.movieType = movieType;
exports.directorType = directorType;