import { Sequelize } from 'sequelize-typescript';

import * as dotenv from 'dotenv';
import { Note } from '../../notes/schemas/note.schema';

dotenv.config();


const sequelizeInstance = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  models: [Note],
});

export default sequelizeInstance;
