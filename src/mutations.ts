import * as Gql from './generated/graphql';

import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import { config } from './config';
import { APP_SECRET } from './helpers/helpers';

async function update(ctx: App.Context, table: string, source: any) {
  let conf = config.tables.find(t => t.tableName === table);

  // insert
  if (!source[conf.idName]) {
    if (!conf.access.insert) {
      throw new Error('Not authorised!');
    }
    await ctx.db.query(`INSERT INTO ${conf.tableName} SET ?`, source);
  }
  // update
  else {
    let id = source[conf.idName];
    delete source[conf.idName];
    await ctx.db.query(`UPDATE ${conf.tableName} SET ? WHERE ID = ?`, [source, id]);
  }
  return source;
}

export async function findUserByEmail(email: string, context: App.Context, withPassword = false) {
  return context.db.findOne<Gql.User>(
    `SELECT id, user, email, roles ${
      withPassword ? ', password' : ''
    } FROM __users WHERE email = ?`,
    [email],
    result => ({ ...result, roles: result.roles.split(',') })
  );
}

export const Mutation: Gql.MutationResolvers.Resolvers<App.Context> = {
  async save(_, { data, table }, ctx) {
    return update(ctx, table, data);
  },
  async saveConfig(_, { config, users }, ctx) {
    await ctx.db.query(`UPDATE __config SET config = ? WHERE ID = 1`, [config]);
    await ctx.db.query(`INSERT INTO __config SET config = ?`, [config]);

    for (let user of users) {
      await ctx.db.query(`UPDATE __users SET roles = ? WHERE ID = ?`, [
        user.roles.join(','),
        user.id
      ]);
    }

    return true;
  },
  async signup(_, args, context) {
    const password = await bcrypt.hash(args.password, 10);
    const result = await context.db.query(
      `INSERT INTO __users SET user = ?, email = ?, password = ?, roles = ?`,
      [args.name, args.email, password, 'user']
    );
    const id = (result as any).insertId;
    const user = await findUserByEmail(args.email, context);

    const token = jwt.sign({ userId: id, email: args.email }, APP_SECRET);

    return {
      token,
      user
    };
  },

  async login(_, args, context) {
    console.log(args);

    const user = await findUserByEmail(args.email, context, true);
    if (!user) {
      throw new Error('No such user found');
    }

    const valid = await bcrypt.compare(args.password, user.password);
    if (!valid) {
      throw new Error('Invalid password');
    }

    return {
      token: jwt.sign({ userId: user.id, email: args.email }, APP_SECRET),
      user
    };
  }
};
