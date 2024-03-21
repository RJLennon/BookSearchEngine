import { gql } from '@apollo/client';

export const QUERY_ME = gql` {
    singleUser {
        _id
        username
        email
        savedBooks {
          bookId
          authors
          image
          description
          title
          link
        }
      }
    }
`;