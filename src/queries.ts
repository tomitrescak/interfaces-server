import { QueryResolvers } from './generated/graphql';

function clean(value: string) {
  if (!value || value === '?' || value === 'null' || value === 'undefined') {
    return '';
  }
  return value;
}

export const Query: QueryResolvers.Resolvers<App.Context> = {
  async units(_, _args, ctx) {
    const result = await ctx.db.query<any>('SELECT * FROM unit');
    return result.map(r => ({ title: `${r.name} - ${r.definition}`, value: r.ID }));
  },
  async edition(_, { searchString }, ctx) {
    const parts = searchString.split(' ').map(s => `%${s.trim()}%`);
    let sql = 'SELECT * FROM edition WHERE full_book_title LIKE ?';
    for (let i = 1; i < parts.length; i++) {
      sql += ` AND full_book_title LIKE ?`;
    }
    sql += ' LIMIT 10';
    console.log(sql);
    const result = await ctx.db.query<any>(sql, parts);
    return result.map((r, i) => ({
      key: r.book_code,
      title: `${r.full_book_title} [${clean(r.edition_type)}, ${clean(
        r.stated_publication_years
      )}, ${clean(r.actual_publication_places)}, ${r.book_code}, ${r.super_book_code}]`,
      value: r.book_code
    }));
  },
  async consignments(_, { searchString }, ctx) {
    const parts = searchString.split(' ').map(s => s.trim());

    parts[0] = '%' + parts[0] + '%';
    let sql = 'SELECT * FROM consignment WHERE CAST(confiscation_register_ms AS CHAR) LIKE ?';
    if (parts.length > 1) {
      sql += ' AND confiscation_register_folio = ?';
    }
    sql += ' LIMIT 30';

    const result = await ctx.db.query<any>(sql, parts);
    return result.map((r, i) => ({
      key: r.ID,
      value: r.ID,
      description: `${r.confiscation_register_ms}|${r.confiscation_register_folio}|${
        r.customs_register_ms
      }|${r.customs_register_folio}|${r.ms_21935_folio}|${r.shipping_number}|${r.marque}|${new Date(
        r.inspection_date
      ).toLocaleDateString()}|${r.addressee_name}|${r.origin_text}`,
      title: `${r.confiscation_register_ms} ${r.confiscation_register_folio} - ${
        r.customs_register_ms
      } ${r.customs_register_folio} - ${r.ms_21935_folio} - ${r.shipping_number} - ${
        r.marque
      } - ${new Date(r.inspection_date).toLocaleDateString()} - "${r.addressee_name}" - "${
        r.origin_text
      }"`
    }));
  }
};
