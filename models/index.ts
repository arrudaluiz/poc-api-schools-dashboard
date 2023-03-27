'use strict';
import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
import { env as _env } from 'process';

import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';

const config = require('../config/config');

dotenv.config({ path: '.env' });
const node_env = _env.NODE_ENV || 'development';

const db: any = {};
const models: any = {};

let sequelize: Sequelize;
if (config[node_env]) {
  sequelize = new Sequelize(config[node_env]);
} else {
  sequelize = new Sequelize(
    _env.DATABASE || 'schools',
    _env.DATABASE_USER || 'root',
    _env.DATABASE_PASSWORD,
    {
      dialect: 'mysql',
      host: _env.DATABASE_HOST,
      port: Number(_env.DATABASE_PORT) || 3306,
      pool: {
        max: 15,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      logging: false
    }
  );
}

readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== _basename(__filename) &&
      file.slice(-3) === '.ts'
    );
  })
  .forEach((file) => {
    const model = require(join(__dirname, file));
    models[Object.keys(model)[0]] = model;
  });

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.sequelize.models = models;

export default db;
