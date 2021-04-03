import {gql} from "apollo-server-express";

module.exports = gql`
  interface MutationResponse {
  code: String!
  success: Boolean!
  message: String!
  },
  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String!
    password: String!
    isAdmin: Boolean
    age: Float
  },
  type UpdateUserMutationResponse implements MutationResponse {
  code: String!
  success: Boolean!
  message: String!
  user: User
  },
  input UserInput {
    firstName:String
    lastName:String
    email:String!
    password:String!
    age:Float
    isAdmin:Boolean
  },
  type SignIn {
    auth: Boolean
    token: String
  }
  extend type Query {
    users: [User]
    login(email:String!,password:String!): SignIn
    logout: SignIn
    getCurrentUser(id:ID!): User
  }
  extend type Mutation {
    register(user: UserInput): User
    updateUser(id: ID!, user: UserInput): UpdateUserMutationResponse
    deleteUser(id:ID!): UpdateUserMutationResponse
  }
`;