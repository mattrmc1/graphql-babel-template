import ExampleType from '../types/ExampleType';
import { GraphQLList } from 'graphql';

const gql = `
  query getData {
    getData {
      id
      title
      author
    }
  }
`;

export default ({ getData }) => ({
  getData: {
    type: GraphQLList(ExampleType),
    method: 'get',
    endpoint: '/data',
    handleParams: req => ({
      query: gql,
      variables: {}
    }),
    resolve: (root, params) => getData(params, root)
  }
});