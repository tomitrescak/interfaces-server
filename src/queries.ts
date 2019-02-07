import * as Gql from './generated/graphql';
import * as Db from './generated/db';

function clean(value: any) {
  if (!value || value === '?' || value === 'null' || value === 'undefined') {
    return '';
  }
  return value;
}

function findRecords<T>(
  ctx: App.Context,
  searchString: string,
  tableName: string,
  columnName: string,
  limit = 50
) {
  const parts = searchString.split(' ').map(s => `%${s.trim()}%`);
  let sql = `SELECT * FROM ${tableName} WHERE ${columnName} LIKE ?`;
  for (let i = 1; i < parts.length; i++) {
    sql += ` AND ${columnName} LIKE ?`;
  }
  sql += ` ORDER BY ${columnName} LIMIT ${limit}`;
  console.log(sql);
  return ctx.db.query<T>(sql, parts);
}

function findRecord<T>(ctx: App.Context, tableName: string, id: number) {
  return ctx.db.findOne<T>(`SELECT * FROM ${tableName} WHERE id = ?`, id);
}

export const Query: Gql.QueryResolvers.Resolvers<App.Context> = {
  async list(_, { name }, ctx) {
    let table = '';
    switch (name) {
      case 'ConfiscationDecision':
        table = 'confiscation_decision';
        break;
      case 'ConfiscationReason':
        table = 'confiscation_reason';
        break;
      case 'Unit':
        table = 'unit';
        break;
      default:
        throw new Error('Not authorised!');
    }
    const result = await ctx.db.query<Db.confiscation_reason>('SELECT * FROM ' + table);
    return result.map(r => ({ text: `${r.name}`, value: r.ID.toString() }));
  },
  confiscations(_, { searchString, limit }, ctx) {
    return findRecords(ctx, searchString, 'confiscation', 'title', limit);
  },
  confiscation(_, { id }, ctx) {
    return findRecord(ctx, 'edition', id);
  },
  books(_, { searchString, limit }, ctx) {
    return findRecords(ctx, searchString, 'super_book', 'super_book_title', limit);
  },
  book(_, { id }, ctx) {
    return findRecord(ctx, 'super_book', id);
  },
  editions(_, { searchString, limit }, ctx) {
    return findRecords(ctx, searchString, 'edition', 'full_book_title', limit);
  },
  edition(_, { id }, ctx) {
    return findRecord(ctx, 'edition', id);
  },
  async searchEdition(_, { searchString }, ctx) {
    const result = await Query.editions(_, { searchString, limit: 10 }, ctx, null);
    return result.map(r => ({
      key: r.book_code,
      title: `${r.full_book_title} [${clean(r.edition_type)}, ${clean(
        r.stated_publication_years
      )}, ${clean(r.actual_publication_places)}, ${r.book_code}, ${r.super_book_code}]`,
      value: r.book_code
    }));
  },
  persons(_, { searchString, limit }, ctx) {
    return findRecords(ctx, searchString, 'person', 'person_name', limit);
  },
  person(_, { id }, ctx) {
    return findRecord(ctx, 'person', id);
  },
  async searchPerson(_, { searchString }, ctx) {
    const result = await Query.persons(_, { searchString, limit: 10 }, ctx, null);
    return result.map(r => ({
      key: r.person_code,
      title: `${r.person_name} [${clean(r.designation)}, ${clean(r.person_code)}]`,
      value: r.person_code
    }));
  },
  async searchPlace(_, { searchString }, ctx) {
    return [];
  },
  consignments(_, { searchString, limit = 50 }, ctx) {
    const parts = searchString.split(' ').map(s => s.trim());

    parts[0] = '%' + parts[0] + '%';
    let sql = 'SELECT * FROM consignment WHERE CAST(confiscation_register_ms AS CHAR) LIKE ?';
    if (parts.length > 1) {
      sql += ' AND confiscation_register_folio = ?';
    }
    sql += ` LIMIT ${limit}`;
    console.log(sql);
    return ctx.db.query<Gql.Consignment>(sql, parts);
  },
  consignment(_, { id }, ctx) {
    return findRecord(ctx, 'person', id);
  },
  async searchConsignments(_, { searchString }, ctx) {
    const result = await Query.consignments(_, { searchString, limit: 10 }, ctx, null);
    const fields: Gql.SearchOption[] = result.map(r => ({
      key: r.ID.toString(),
      value: r.ID.toString(),
      titles: [
        clean(r.confiscation_register_ms),
        clean(r.confiscation_register_folio),
        clean(r.customs_register_ms),
        clean(r.customs_register_folio),
        clean(r.ms_21935_folio),
        clean(r.shipping_number),
        clean(r.marque),
        clean(new Date(r.inspection_date).toLocaleDateString()),
        clean(r.addressee_name),
        clean(r.origin_text)
      ]
    }));

    // add header
    fields.unshift({
      key: '-1',
      value: undefined as any,
      titles: [
        'Conf.',
        'F.',
        'Cust.',
        'F.',
        'Ms. F',
        'Sh.#',
        'Marq',
        'Insp.Date',
        'Addresee Name',
        'Origin'
      ],
      title: ''
    });

    return fields;
  }
};
