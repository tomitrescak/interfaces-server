import * as GraphQLJSON from 'graphql-type-json';
import * as express from 'express';
import * as path from 'path';

import { Options } from 'graphql-yoga';
import { GraphQLServer } from 'graphql-yoga';

import { Query } from './helpers/queries';
import { Mutation } from './helpers/mutations';
import { db, Database } from './helpers/client';

declare global {
  namespace App {
    type Context = {
      db: Database;
    };
  }
}

export function createServer() {
  return new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
      Query: Query as any,
      Mutation: Mutation as any,
      JSON: GraphQLJSON
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, db })
  });
}

const server = createServer();

server.start(
  {
    endpoint: '/graphql',
    playground: '/graphiql',
    port: process.env.PORT || 4000
  },
  // {
  //   cors: {
  //     credentials: true,
  //     origin: [process.env.FRONTEND_URL, 'http://localhost:3000'] as any
  //   }
  // },
  (options: Options) => {
    console.log(`Server running on http://localhost:${options.port}`);
  }
);

const root = path.join(__dirname, '../build');

server.express.use(express.static(root));
server.express.get('/*', function(req, res) {
  res.sendFile(path.join(root, 'index.html'));
});
