import { gql } from "@apollo/client";

export const registerUser = gql`
  mutation RegisterUser($newUser: userInput) {
    user:registerUser(newUser: $newUser) {
      token
      user {
        id
        firstName
        lastName
        userName
        email
        password
        createdAt
        profileLink
        linkedinLink
        githubLink
        instagramLink
        portfolioLink
      }
    }
  }
`;
