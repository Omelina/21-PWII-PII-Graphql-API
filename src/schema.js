import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from './resolvers';
import { gql } from 'apollo-server';

export const typeDefs = gql`
    type Query{
        byCategory(cat: String!, user: String!): [New!]
        byUser(user: String!): [New!]
        byTag(tag: String, user: String!): [New!]
        byInput(data: String!, user: String!): [New!]
        News(cat: ID!, user: ID!): [New!]
        catByName(data: String!): [Categories!]
        Categories: [Categories]
    }

    scalar Date
    type New{
        _id: ID!,
        status: Boolean,
        title: String!,
        description: String!,
        category: String,
        permanlink: String!,
        date: Date!,
        resource_id: ID,
        user_id: ID,
        category_id: ID,
    }
    type Categories{
        _id: ID!
        name: String!
    }
`;

// export default makeExecutableSchema({
//     typeDefs: typeDefs
// })