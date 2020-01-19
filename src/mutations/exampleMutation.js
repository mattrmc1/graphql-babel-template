import InsertResponseType from '../types/InsertResponseType';
import { ExampleInputType } from '../types/ExampleInputType';

const gql = `
  mutation insertData( $input: ExampleInputType) {
    insertData( input: $input ) {
      success
      message
    }
  }
`;

export const insertData = ({ insertData }) => ({
  insertData: {
    type: InsertResponseType,
    method: 'post',
    endpoint: '/insert',
    args: {
      input: { type: ExampleInputType }
    },
    handleParams: req => ({
      query: gql,
      variables: { input: req.body }
    }),
    resolve: (root, params) => insertData(params, root)
  }
});