import { gql } from '@apollo/client';

export const User = gql`
  {
    user {
      _id
      username
      email
      savedBooks {
        title
        bookId
        authors
        description
        image
        link
      }
    }
  }
`;