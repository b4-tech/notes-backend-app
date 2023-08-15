import pool from './instances/pgInstance'

import * as dotenv from 'dotenv';
dotenv.config();

pool.query(`CREATE DATABASE "${process.env.DB_DATABASE}"`, (error) => {
  if (error) {
    console.error('Error creating database:', error);
  }
  console.log('Database created');
});

pool.end();
