import * as Gql from '../generated/graphql';
import { ViewConfig, clean, SearchConfig, TableConfig } from './helpers';
import { config } from '../config';

function findRecords<T>(
  ctx: App.Context,
  searchString: string,
  config: ViewConfig,
  limit = 50
): Promise<any> {
  let sql = '';
  let parts = [];

  if (config.fields.length > 1) {
    parts = searchString.split(' ').map(s => s.trim());

    parts[0] = '%' + parts[0] + '%';
    sql = `SELECT * FROM consignment WHERE CAST(${config.fields[0]} AS CHAR) LIKE ?`;
    for (let i = 1; i < parts.length; i++) {
      sql += ` AND ${config.fields[i]} = ?`;
    }
    sql += ` ORDER BY ${config.fields[0]} LIMIT ${limit}`;
  } else {
    parts = searchString.split(' ').map(s => `%${s.trim()}%`);
    sql = `SELECT * FROM ${config.table} WHERE ${config.fields[0]} LIKE ?`;
    for (let i = 1; i < parts.length; i++) {
      sql += ` AND ${config.fields[0]} LIKE ?`;
    }
    sql += ` ORDER BY ${config.fields[0]} LIMIT ${limit}`;
  }
  return ctx.db.query<T>(sql, parts);
}

function findRecord<T>(ctx: App.Context, tableName: string, idName: string, id: any) {
  return ctx.db.findOne<T>(`SELECT * FROM ${tableName} WHERE ${idName} = ?`, id);
}

function createTitles(conf: SearchConfig, result: any, table: TableConfig, addHeader = true) {
  // simple title
  if (conf.title) {
    return result.map((r: any) => ({
      key: r[table.idName],
      title: interpolate(conf.title, r),
      value: r[table.idName]
    }));
  }
  // table view
  if (conf.titles) {
    const fields: Gql.SearchOption[] = result.map((r: any) => ({
      key: r[table.idName].toString(),
      value: r[table.idName].toString(),
      titles: conf.titles.map(t => (t.type === 'date' ? new Date(r[t.field]) : clean(r[t.field])))
    }));

    if (addHeader) {
      // now add header as the first row
      fields.unshift({
        key: '-1',
        value: undefined as any,
        titles: conf.titles.map(t => t.header)
      });
    }

    return fields;
  }
}

let reg = /\{(\S+)\}/;
function interpolate(title: string, obj: any) {
  let match = title.match(reg);
  while (match) {
    title = title.replace(match[0], clean(obj[match[1]]));
    match = title.match(reg);
  }
  return title;
}

export const Query: Gql.QueryResolvers.Resolvers<App.Context> = {
  async enumerator(_, { name }, ctx) {
    if (config.enumerators.indexOf(name) === -1) {
      throw new Error('Enumerator not allowed!');
    }

    const result = await ctx.db.query('SELECT * FROM ' + name);
    return result.map((r: any) => ({ text: `${r.name}`, value: r.ID.toString() }));
  },
  find(_, { searchString, name, limit }, ctx) {
    let conf = config.views.find(f => f.name === name);
    if (!conf) {
      throw new Error('Find config not allowed!: ' + name);
    }
    return findRecords(ctx, searchString, conf, limit);
  },
  async findOne(_, { id, table }, ctx): Promise<Gql.Data> {
    let conf = config.tables.find(f => f.tableName === table);
    let data = await findRecord(
      ctx,
      table,
      conf.idName,
      conf.idType === 'int' ? parseInt(id, 10) : id
    );
    return {
      id,
      table: conf.tableName,
      key: conf.idName,
      data
    };
  },
  async search(_, { searchString, name, id }, ctx): Promise<Gql.SearchOption[]> {
    const conf = config.search.find(f => f.name === name);
    if (!conf) {
      throw new Error('Search config not allowed!');
    }

    const view = config.views.find(v => v.name === conf.view);
    const table = config.tables.find(t => t.tableName === view.table);

    // we can be searching only for id column
    if (id) {
      const record = await Query.findOne(_, { id, table: table.tableName }, ctx, null);
      return createTitles(conf, [record.data], table, false);
    }

    const result = await Query.find(_, { searchString, name: conf.view, limit: 10 }, ctx, null);
    return createTitles(conf, result, table);
  }
};
