import {gql} from "apollo-server-express";
import productSchema from "./product.schema";
import userSchema from "./user.schema";
import orderSchema from "./order.schema";

const linkSchema = gql`
    type Query {
        _:Boolean
    }
    type Mutation {
        _: Boolean
    }
`;

module.exports = [linkSchema, productSchema, userSchema, orderSchema]