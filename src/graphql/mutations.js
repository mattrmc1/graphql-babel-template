import { GraphQLObjectType, graphql } from 'graphql';

import resolvers from '../resolvers';
import { insertData } from '../mutations/exampleMutation';

export const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...insertData(resolvers)
  })
});

export const mutationRoutes = (router, schema) => {
  let fields = mutation.getFields();
  
  Object.keys(fields).forEach(key => {
    let item = fields[key];

    router.post(item.endpoint, async (req, res) => {
      // Needs tests - bet I could break this
      let input = item.handleParams(req);

      return graphql(schema, input.query, { req }, null, input.variables)
        .then(data => res.json({
          ...data.data,
          errors: data.errors
        }));
    })
  });
};