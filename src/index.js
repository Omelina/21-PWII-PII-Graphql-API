import { ApolloServer, gql } from 'apollo-server';
import express from 'express';
import morgan from 'morgan';
import { connect } from './database';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';

import { typeDefs } from './schema'
import { resolvers } from './resolvers'
// import schema from './schema';
// const cors = require('cors')

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const app = express();
connect();

app.use(morgan('dev'));

app.use(cors());
app.use(cors({
    domains: '*',
    methods: "*"
}));

app.get('/', (req,res) =>{
    res.json({
        message: 'Hello World'
    })
})

import bodyParser from 'body-parser';
app.use(bodyParser.json());

server.listen().then(({ url }) =>{
    console.log(`Server on port ${url}`)
})



// app.use('/graphql', graphqlHTTP({
//     graphiql: true,
//     schema: schema,
// }))

// app.head('/graphql', (req, res) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:4000');
//     res.header('Access-Control-Request-Method', 'GET, POST');
//     res.header('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Content-Length');
//     res.end();
// });


// app.listen(4000, () => console.log('Server on port 4000'));