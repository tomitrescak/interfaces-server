import { Options } from 'graphql-yoga';
import { GraphQLServer } from 'graphql-yoga';

import { Query } from './queries';
import { Mutation } from './mutations';
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
      Mutation: Mutation as any
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, db })
  });
}

const server = createServer();

server.start(
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