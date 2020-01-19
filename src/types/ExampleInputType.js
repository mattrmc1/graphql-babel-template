import { GraphQLInputObjectType, GraphQLString } from "graphql";

export const ExampleInputType = new GraphQLInputObjectType({
  name: 'ExampleInputType',
  fields: () => ({
    title: { type: GraphQLString },
    author: { type: GraphQLString }
  })
})