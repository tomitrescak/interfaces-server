import * as mysql from 'mysql';

let createUsers = `create table if not exists __users(
  id int primary key auto_increment,
  user varchar(255) not null,
  email varchar(255) not null,
  password varchar(255) not null,
  roles varchar(255) not null
)`;

let createConfig = `create table if not exists __config(
  server longtext not null,
  client longtext not null
)`;

const identity = (a: any) => a;

export class Database {
  connection: mysql.Connection;

  constructor(config: mysql.ConnectionConfig) {
    this.connection = mysql.createConnection(config);

    console.log('Created connection to: ' + JSON.stringify(config, null, 2));

    this.query(createUsers);
    this.query(createConfig);
  }
  query<T>(sql: string, args?: any): Promise<T[]> {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        // console.error(err);
        if (err) return reject(err);

        resolve(rows);
      });
    });
  }

  async findOne<T>(sql: string, args?: any, adjust: (result: any) => T = identity): Promise<T> {
    let result = await this.query<T>(sql, args);
    if (result && result.length) {
      return adjust(result[0]);
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
  password: process.env.MYSQL_PASSWORD || 'prisma',
  database: 'confiscations'
};

export const db = new Database(options);
