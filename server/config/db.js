require('dotenv').config();

module.exports = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
  pool: {
    min: parseInt(process.env.DB_POOL_MIN, 10),
    max: parseInt(process.env.DB_POOL_MAX, 10),
    acquire: parseInt(process.env.DB_POOL_ACQUIRE, 10),
    idle: parseInt(process.env.DB_POOL_IDLE, 10),
  },
};
