import * as mysql from 'mysql';

export class Database {
  connection: mysql.Connection;

  constructor(config: mysql.ConnectionConfig) {
    this.connection = mysql.createConnection(config);
  }
  query<T>(sql: string, args?: any): Promise<T[]> {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  }
  close() {
    return new Promise((resolve, reject) => {
      this.connection.end(err => {
        if (err) return reject(err);
        resolve();
      });
    });
  }
}

const options = {
  user: 'root',
  host: 'localhost',
  port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT, 10) : 3306,
  password: 'prisma',
  database: 'consignments'
};

export const db = new Database(options);
