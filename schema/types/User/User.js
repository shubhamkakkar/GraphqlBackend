const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');

const UserSchemaGraphQl = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    date: { type: GraphQLString },
  })
});

module.exports = UserSchemaGraphQl  
