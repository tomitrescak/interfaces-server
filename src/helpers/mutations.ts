import * as Gql from '../generated/graphql';
import { config } from '../config';

async function update(ctx: App.Context, table: string, source: any) {
  let conf = config.tables.find(t => t.tableName === table);

  let result;
  // insert
  if (!source[conf.idName]) {
    if (!conf.access.insert) {
      throw new Error('Not authorised!');
    }
    result = await ctx.db.query(`INSERT INTO ${conf.tableName} SET ?`, source);
  }
  // update
  else {
    let id = source[conf.idName];
    delete source[conf.idName];
    await ctx.db.query(`UPDATE ${conf.tableName} SET ? WHERE ID = ?`, [source, id]);
  }
  return source;
}

export const Mutation: Gql.MutationResolvers.Resolvers<App.Context> = {
  async save(_, { data, table }, ctx) {
    return update(ctx, table, data);
  }
  // async saveConfiscation(_, { data }, ctx) {
  //   return update(ctx, 'confiscation', data);
  // },
  // async saveEdition(_, { data }, ctx) {
  //   return update(ctx, 'edition', data);
  // },
  // async saveBook(_, { data }, ctx) {
  //   return update(ctx, 'super_book', data);
  // },
  // async savePerson(_, { data }, ctx) {
  //   return update(ctx, 'person', data);
  // },
  // async saveLocation(_, { data }, ctx) {
  //   return update(ctx, 'consignment', data);
  // }
};
