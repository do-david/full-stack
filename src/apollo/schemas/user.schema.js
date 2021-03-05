import {gql} from "apollo-server-express";

module.exports = gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String!
    password: String!
    isAdmin: Boolean
    age: Float
  }
  #type Token {
  #    auth: Boolean
  #    token: String
  #}
  extend type Query {
    users: [User]
    #login(email:String!): Token
    #logout():Token
    getCurrentUser(id:ID!): User
  }
  extend type Mutation {
    register(firstName:String,lastName:String,email:String!,password:String!,age:Float,isAdmin:Boolean): User 
    deleteUser(id:ID!): User 
  }
`;