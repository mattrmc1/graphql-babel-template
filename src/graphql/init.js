import schema from './schema';
import expressGraphQL from 'express-graphql';
import { graphql } from 'graphql';

export default app => {
    app.use('/graphql', expressGraphQL({
      schema: schema,
      graphiql: true
    }))

    app.post('/gql', (req, res) => {
      graphql(schema, req.body.query, null, null, req.body.variables )
        .then(data => res.json(data))
        .catch(err => res.json(err))
    })
}