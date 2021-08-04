import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers} from './resolvers'

const typeDefs = `
    type Query{
        hello: String!
        News: [New!]
        Categories: [Categories]
    }

    scalar Date
    type New{
        _id: ID!,
        status: Boolean,
        title: String!,
        description: String!,
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