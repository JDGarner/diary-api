const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const dbConnection = {
  user: process.env.POSTGRES_USER,
  host: 'localhost',
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
};

const pool = new Pool(dbConnection);

module.exports = { pool };
