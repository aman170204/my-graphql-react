const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList} = require('graphql');
// const _ = require('lodash');
const { movieType, directorType } = require('./type');
let {movies, directors} = require('./data');

// define the query
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        hello:{
            type: GraphQLString,

            resolve: function(){
                return 'Hello World';
            }
        },

        movie: {
            type: movieType,
            args:{
                id: {type: GraphQLInt}
            },
            resolve: function (source, args){
                // return _.find(movies, {id: args.id});
                return movies.find(movie => movie.id == args.id);
            }
        },

        director: {
            type: directorType,
            args:{
                id: {type: GraphQLInt}
            },
            resolve: function (source, args){
                return _.find(directors, {id: args.id});
                // return directors.find(director => director.id == args.id);
            }
        }
    }
});

exports.queryType = queryType;