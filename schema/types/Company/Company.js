const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const UserSchemaGraphQl = require("../User/User")
const { UserModel } = require("../../../models")

const CompanySchemaGraphQl = new GraphQLObjectType({
    name: "Company",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString  },
        users: {
            type: new GraphQLList(UserSchemaGraphQl),
            resolve: ({ users }) => users.map(id => UserModel.findById(id))
        }
    })
})

module.exports = CompanySchemaGraphQl