import pool from './instances/pgInstance'

import * as dotenv from 'dotenv';
dotenv.config();

pool.query(`DROP DATABASE IF EXISTS "${process.env.DB_DATABASE}"`, (error) => {
  if (error) {
    console.error('Error dropping database:', error);
  }
  console.log('Database dropped');
});

pool.end();
