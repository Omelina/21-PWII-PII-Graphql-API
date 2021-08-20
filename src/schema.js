import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers} from './resolvers'

const typeDefs = `
    type Query{
        byCategory(cat: ID!, user: ID!): [New!]
        byUser(user: ID!): [New!]
        byTag(tag: String, user: ID!): [New!]
        byInput(data: String!, user: ID!): [New!]
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

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})