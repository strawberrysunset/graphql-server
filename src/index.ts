import dotenv from 'dotenv'
dotenv.config();

import express from 'express'
import {graphqlHTTP} from 'express-graphql'
import {RootSchema} from './RootSchema'

const server = express()

server.use('/graphql',
  graphqlHTTP({
    schema: RootSchema,
    graphiql: true,
  }),
);

server.listen(process.env.PORT, () => {
    console.log(`Example app listening at ${process.env.PORT}`)
})