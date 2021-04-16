import {gql} from "apollo-server-express";

module.exports = gql`
    enum Status {
        PENDING,
        DELIVERED,
        FINISHED
    }
    type Order {
        id: ID!
        totalAmount: Float
        user: User
        products: [Product],
        status: Status
    }
    input OrderInput {
        totalAmount: Float,
        user: ID!,
        products: [ID!]
    }
    extend type Query {
        getOrders: [Order]
        order(id:ID!): Order
    }
    extend type Mutation {
        #makeOrder(totalAmount: Float, user: ID!, products: [ID!]): Order
        makeOrder(input:OrderInput): Order
    }
`