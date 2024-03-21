import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation createUser($username: String!, $email: String! $password: String!) {
    createUser(username: $username, email: $email password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput!) {
    saveBook(bookData: $bookData) {
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

export const REMOVE_BOOK = gql`
  mutation deleteBook($bookID: ID!) {
    deleteBook(bookID: $bookID) {
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
