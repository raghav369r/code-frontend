import { gql } from "@apollo/client";

export const LoginUser = gql`
  query LoginUser($email: String!, $password: String!) {
    user: loginUser(email: $email, password: $password) {
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
export const RunCode = gql`
  query RunCode($input: codeInput) {
    runCode(input: $input) {
      stdout
      error
      stderr
      testCasesResult
    }
  }
`;

export const GetAllSubmitions = gql`
  query GetAllSubmissions($userId: ID!) {
    getAllSubmissions(userId: $userId) {
      id
      userId
      problemId
      isAccepted
      isInContest
      errorDetails
      submittedAt
      code
      language
    }
  }
`;

export const GetUser = gql`
  query GetUser {
    user: getUser {
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
`;
