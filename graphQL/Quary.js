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
    output: runCode(input: $input) {
      stdout
      error
      stderr
      testCasesResult
      testcaseOutput
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
export const GetAllProblems = gql`
  query GetAllProblems {
    problems: getAllProblems {
      id
      title
      description
      difficulty
      topics
      createdAt
      createdBy
    }
  }
`;

export const GetProblem = gql`
  query GetProblem($getProblemId: ID!) {
    problem: getProblem(id: $getProblemId) {
      id
      title
      description
      difficulty
      startCode
      topics
      solutionCode
      createdAt
      createdBy
      constraints
      expectedComplexity
      examples {
        id
        input
        output
        explanation
        problemId
      }
    }
  }
`;

export const isnameAvailable = gql`
  query IsContestNameAvailable($contestName: String!) {
    isContestNameAvailable(contestName: $contestName) {
      ok
      error
    }
  }
`;
export const GetAllSubmissions = gql`
  query GetAllSubmissions($userId: ID!) {
    submissions: getAllSubmissions(userId: $userId) {
      id
      userId
      problemId
      isAccepted
      isInContest
      errorDetails
      submittedAt
      code
      language
      inputCase
      output
      expectedOutput
      testCasesResult
      problem {
        title
      }
    }
  }
`;
export const GetUpcomingContests = gql`
  query GetUpcomingContests {
    upComing: getUpcomingContests {
      id
      name
      url
      startTime
      endTime
      owner
      mediators
      organisation
    }
  }
`;

export const GetContestProblems = gql`
  query GetContestProblems($contestId: ID!) {
    contest: getContestProblems(contestId: $contestId) {
      id
      name
      url
      startTime
      endTime
      owner
      mediators
      organisation
      contestQuestions {
        id
        contestId
        problem {
          id
          title
          description
          difficulty
          startCode
          solutionCode
          constraints
          examples {
            id
            input
            output
            explanation
            problemId
          }
        }
        problemId
      }
    }
  }
`;
