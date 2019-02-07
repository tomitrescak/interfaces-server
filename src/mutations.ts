import * as Gql from './generated/graphql';

async function update(ctx: App.Context, table: string, data: any) {
  console.log(data);
  console.log(table);

  const source = data;
  let result;
  if (!source.ID) {
    result = await ctx.db.query(`INSERT INTO ${table} SET ?`, data);
  } else {
    let id = data.ID;
    delete data.ID;
    await ctx.db.query(`UPDATE ${table} SET ? WHERE ID = ?`, [data, id]);
  }
  console.log(result);
  return source;
}

export const Mutation: Gql.MutationResolvers.Resolvers<App.Context> = {
  async saveConsignment(_, { data }, ctx) {
    return update(ctx, 'consignment', data);
  },
  async saveConfiscation(_, { data }, ctx) {
    return update(ctx, 'confiscation', data);
  },
  async saveEdition(_, { data }, ctx) {
    return update(ctx, 'edition', data);
  },
  async saveBook(_, { data }, ctx) {
    return update(ctx, 'super_book', data);
  },
  async savePerson(_, { data }, ctx) {
    return update(ctx, 'person', data);
  },
  async saveLocation(_, { data }, ctx) {
    return update(ctx, 'consignment', data);
  }
};
