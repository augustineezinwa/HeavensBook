import dotenv from 'dotenv';

dotenv.config();

const config = {
  development: {
    username: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_DB,
    password: process.env.DATABASE_PWD,
    dialect: process.env.DATABASE_DIALECT,
  },
  test: {
    username: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_DB_TEST,
    password: process.env.DATABASE_PWD,
    dialect: process.env.DATABASE_DIALECT,
  }
};

export default config;
