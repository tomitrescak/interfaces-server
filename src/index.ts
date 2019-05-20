import * as GraphQLJSON from 'graphql-type-json';
import * as express from 'express';
import * as path from 'path';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as fs from 'fs';

import { Options } from 'graphql-yoga';
import { GraphQLServer } from 'graphql-yoga';

import { Query } from './queries';
import { Mutation } from './mutations';
import { db, Database } from './helpers/client';

declare global {
  namespace App {
    type Context = {
      db: Database;
      request: any;
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
let website: any;

server.express.use(bodyParser.json());
server.express.use(compression());
server.express.use(express.static(root));
server.express.post('/api/website', function(req, res) {
  console.log(req.body.action);
  if (req.body.action === 'save') {
    website = JSON.parse(req.body.project);
    if (!fs.existsSync('./definition')) {
      fs.mkdirSync('./definition');
    }
    if (fs.existsSync('./definition/website.json')) {
      fs.renameSync(
        './definition/website.json',
        `./definition/website.${new Date().toISOString().replace(/:/g, '-')}.json`
      );
    }
    fs.writeFileSync('./definition/website.json', req.body.project, { encoding: 'utf-8' });
    res.json({});
    return;
  }
  if (req.body.action === 'load') {
    if (!website) {
      if (fs.existsSync('./definition/website.json')) {
        website = JSON.parse(fs.readFileSync('./definition/website.json', { encoding: 'utf-8' }));
      } else {
        website = {};
      }
    }
    res.json(website);
    return;
  }
  throw new Error('Not happening ..');
  // res.sendFile(path.join(root, 'index.html'));
});
server.express.get('/*', function(_req, res) {
  res.sendFile(path.join(root, 'index.html'));
});
