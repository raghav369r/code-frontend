import { gql } from "@apollo/client";

export const registerUser = gql`
  mutation RegisterUser($newUser: userInput) {
    user: registerUser(newUser: $newUser) {
      token
      user {
        id
        firstName
        lastName
        userName
        email
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
export const editProfile = gql`
  mutation EditProfile($input: minput) {
    user: editProfile(input: $input) {
      id
      firstName
      lastName
      userName
      email
      createdAt
      profileLink
      linkedinLink
      githubLink
      instagramLink
      portfolioLink
    }
  }
`;
