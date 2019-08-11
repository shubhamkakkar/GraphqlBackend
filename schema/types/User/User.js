const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');

const userArgs = require("../../args/userArgs")

const customUserArgs = {
  id: { type: GraphQLID },
  ...userArgs,
  date: { type: GraphQLString },

}

const UserSchemaGraphQl = new GraphQLObjectType({
  name: 'User',
  fields: () => customUserArgs
});

module.exports = UserSchemaGraphQl    
