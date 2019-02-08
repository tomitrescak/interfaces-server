export interface TableConfig {
  /**
   * Table name as it appears in the database
   */
  tableName: string;
  /**
   * Name of the id column as it appears in the database
   */
  idName: string;
  access: {
    insert: boolean;
    update: boolean;
    delete: boolean;
  };
  /**
   * Type of the ID [string or int]
   */
  idType?: 'string' | 'int';
}

export interface ViewConfig {
  name: string;
  table: string;
  fields?: string[];
}

export interface SearchConfig {
  name: string;
  view: string;
  title?: string;
  titles?: Array<{
    header: string;
    field: string;
    type?: 'string' | 'int' | 'date';
  }>;
}

export interface Config {
  enumerators: string[];
  tables: TableConfig[];
  views: ViewConfig[];
  search: SearchConfig[];
}

export function clean(value: any) {
  if (!value || value === '?' || value === 'null' || value === 'undefined') {
    return '';
  }
  return value;
}
