const { GraphQLString } = require('graphql');


const userArgs = {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
}

module.exports = userArgs