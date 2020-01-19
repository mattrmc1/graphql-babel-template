import { GraphQLInt } from 'graphql';
import ExampleType from '../types/ExampleType';

const gql = `
  query getDataById( $id: Int! ) {
    getDataById( id: $id ){
      title
      author
    }
  }
`;

export default ({ getDataById }) => ({
  getDataById: {
    type: ExampleType,
    method: 'get',
    endpoint: '/data/:id',
    args: {
      id: { type: GraphQLInt }
    },
    handleParams: req => ({
      query: gql,
      variables: {
        id: parseInt(req.params.id)
      }
    }),
    resolve: (root, params) => getDataById(params, root)
  }
});