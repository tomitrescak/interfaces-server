import { clean, Config } from 'helpers/helpers';

export const config: Config = {
  enumerators: ['confiscation_decision', 'confiscation_reason', 'unit'],
  tables: [
    {
      tableName: 'confiscation',
      idName: 'ID',
      idType: 'int',
      access: {
        insert: true,
        update: true,
        delete: true
      }
    },
    {
      tableName: 'super_book',
      idName: 'super_book_code',
      access: {
        insert: true,
        update: false,
        delete: false
      }
    },
    {
      tableName: 'edition',
      idName: 'book_code',
      access: {
        insert: true,
        update: false,
        delete: false
      }
    },
    {
      tableName: 'consignment',
      idName: 'ID',
      idType: 'int',
      access: {
        insert: true,
        update: false,
        delete: false
      }
    },
    {
      tableName: 'person',
      idName: 'person_code',
      access: {
        insert: true,
        update: true,
        delete: false
      }
    }
  ],
  views: [
    {
      name: 'confiscation',
      table: 'confiscation',
      fields: ['title']
    },
    {
      name: 'super_book',
      table: 'super_book',
      fields: ['super_book_title']
    },
    {
      name: 'edition',
      table: 'edition',
      fields: ['full_book_title']
    },
    {
      name: 'person',
      table: 'person',
      fields: ['person_name']
    },
    {
      name: 'consignment',
      table: 'consignment',
      fields: ['confiscation_register_ms', 'confiscation_register_folio']
    }
  ],
  search: [
    {
      name: 'edition',
      view: 'edition',
      title: `{full_book_title} [{edition_type}, {stated_publication_years}, {actual_publication_places}, {book_code}, {super_book_code}]`
    },
    {
      name: 'person',
      view: 'person',
      title: `{person_name} [{designation}, {person_code}]`
    },
    {
      name: 'consignment',
      view: 'consignment',
      titles: [
        {
          header: 'Conf.',
          field: 'confiscation_register_ms'
        },
        {
          header: 'F.',
          field: 'confiscation_register_folio'
        },
        {
          header: 'Cust.',
          field: 'customs_register_ms'
        },
        {
          header: 'F.',
          field: 'customs_register_folio'
        },
        {
          header: 'Ms. F',
          field: 'ms_21935_folio'
        },
        {
          header: 'Sh.#',
          field: 'shipping_number'
        },
        {
          header: 'Marq',
          field: 'marque'
        },
        {
          header: 'Insp.Date',
          field: 'inspection_date',
          type: 'date'
        },
        {
          header: 'Addresee',
          field: 'addressee_name'
        },
        {
          header: 'Origin',
          field: 'origin_text'
        }
      ]
    }
  ]
};
