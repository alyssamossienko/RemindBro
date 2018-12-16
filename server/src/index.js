const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')
const { prisma } = require('./../database/generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const AuthPayload = require('./resolvers/AuthPayload')

const resolvers = {
  Query,
  Mutation,
  AuthPayload,
}

// while (true)... function to constantly check for scheduled reminders
//server is just a prisma database server. index.js is executed as a whole
const server = new GraphQLServer({
  typeDefs: 'src/schema/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'http://localhost:4466',
      secret: 'secretlol',
      debug: true,
    }),
  }),
})
server.start(() => console.log('Server is running on http://localhost:4000'))
