const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLString
} = require('graphql');


const { UserModel, CompanyModel } = require("../models")
const { UserSchemaGraphQl, CompanySchemaGraphQl } = require("./types")
const userArgs = require("./args/userArgs")

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => (
        {
            user: {
                type: UserSchemaGraphQl,
                args: { id: { type: GraphQLID } },
                resolve: (parentValue, { id }) => UserModel.findById(id)
            },
            company: {
                type: new GraphQLList(CompanySchemaGraphQl),
                args: { id: { type: GraphQLID } },
                resolve: (parentValue, args) => CompanyModel.find()
            }
        }
    )
});

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserSchemaGraphQl,
            args: {
                ...userArgs
            },
            resolve: (parentValue, args) => {
                const newUser = new UserModel(args)
                newUser.save().then(res => console.log(res)).catch(er => console.log(er))
                return newUser
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});