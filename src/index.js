import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';
import { connect } from './database';
const cors = require('cors')


const app = express();
connect();

app.get('/', (req,res) =>{
    res.json({
        message: 'Hello World'
    })
})

app.use(cors());
app.use(cors({
	domains: '*',
	methods: "*"
}));


  
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
}))

app.head('/graphql', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Request-Method', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Content-Length');
    res.end();
  });

  
app.listen(4000, () => console.log('Server on port 4000'));