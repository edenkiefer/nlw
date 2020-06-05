import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'elerp',
    database: 'nlw'
  }
});

export default connection;