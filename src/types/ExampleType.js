import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} from 'graphql';

export default new GraphQLObjectType({
  name: 'ExampleType',
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    author: { type: GraphQLString }
  })
});