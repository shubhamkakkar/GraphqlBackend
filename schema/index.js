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
                type: CompanySchemaGraphQl,
                args: { id: { type: GraphQLID } },
                resolve: (parentValue, { id }) => CompanyModel.findById(id)
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
                ...userArgs,
                companyId: { type: GraphQLID }
            },
            resolve: (parentValue, args) => {
                const newUser = new UserModel(args)
                newUser.save().then(res => res).catch(er => console.log("er adduser", { er }))
                return newUser;
            }
        },
        addComapny: {
            type: CompanySchemaGraphQl,
            args: {
                name: { type: GraphQLString },
                service: { type: GraphQLString },
            },
            resolve: (parentValue, args) => {
                console.log({ args })
                const newCompany = new CompanyModel(args)
                newCompany.save().then(res => res).catch(er => console.log("er addCompany", { er }))
                return newCompany
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});