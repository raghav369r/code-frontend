import { gql } from "@apollo/client";

export const LoginUser = gql`
  query LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
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
