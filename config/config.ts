const dotenv = require('dotenv');
const _env = require('process');

dotenv.config({ path: '.env' });

module.exports = {
  development: {
    username: _env.DATABASE_USER,
    password: _env.DATABASE_PASSWORD,
    database: `${_env.DATABASE}_development`,
    host: _env.DATABASE_HOST,
    port: Number(_env.DATABASE_PORT),
    dialect: 'mysql',
    logging: false
  },
  test: {
    username: _env.DATABASE_USER,
    password: _env.DATABASE_PASSWORD,
    database: `${_env.DATABASE}_test`,
    host: _env.DATABASE_HOST,
    port: Number(_env.DATABASE_PORT),
    dialect: 'mysql',
    logging: false
  },
  production: {
    username: _env.DATABASE_USER,
    password: _env.DATABASE_PASSWORD,
    database: _env.DATABASE,
    host: _env.DATABASE_HOST,
    port: Number(_env.DATABASE_PORT),
    dialect: 'mysql',
    logging: false
  }
};
