const { GraphQLObjectType, GraphQLString } = require('graphql');


const CompanySchemaGraphQl =  new GraphQLObjectType({
    name: "Company",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
    })
})

module.exports = CompanySchemaGraphQl