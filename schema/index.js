const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLID,
    GraphQLList
} = require('graphql');

const { UserModel } = require("../models")


const UserSchemaGraphQl = require("./types/User/User")
const CompanySchemaGraphQl = require("./types/Company/Company");



const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => (
        {
            user: {
                type: new GraphQLList(UserSchemaGraphQl),
                args: { id: { type: GraphQLID } },
                resolve(parentValue, args) {
                    return UserModel.find()
                },
            },
            company: {
                type: CompanySchemaGraphQl,
                args: { id: { type: GraphQLID } },
                resolve(parentValue, args){
                    
                }
            }
        }
    )
});

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {}
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});