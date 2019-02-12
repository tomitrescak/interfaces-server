import * as mysql from 'mysql';

export class Database {
  connection: mysql.Connection;

  constructor(config: mysql.ConnectionConfig) {
    this.connection = mysql.createConnection(config);

    console.log('Created connection to: ' + JSON.stringify(config, null, 2));
  }
  query<T>(sql: string, args?: any): Promise<T[]> {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        console.error(err);
        if (err) return reject(err);

        resolve(rows);
      });
    });
  }

  async findOne<T>(sql: string, args?: any): Promise<T> {
    let result = await this.query<T>(sql, args);
    if (result && result.length) {
      return result[0];
    }
    return null;
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
  //  password: '',
  database: 'confiscations'
};

export const db = new Database(options);
