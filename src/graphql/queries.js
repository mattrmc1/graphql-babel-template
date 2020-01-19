import { GraphQLObjectType, graphql } from 'graphql';

import resolvers from '../resolvers';
import getData from '../queries/exampleGetAll';
import getDataById from '../queries/exampleGetById';

export const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    ...getData(resolvers),
    ...getDataById(resolvers)
  })
});

export const queryRoutes = (router, schema) => {
  let fields = query.getFields();
  
  Object.keys(fields).forEach(key => {
    let item = fields[key];

    router.get(item.endpoint, async (req, res) => {
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