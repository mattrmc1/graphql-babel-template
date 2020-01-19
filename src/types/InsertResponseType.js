import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean
} from 'graphql';

export default new GraphQLObjectType({
  name: 'InsertResponseType',
  fields: () => ({
    success: { type: GraphQLBoolean },
    message: { type: GraphQLString }
  })
});