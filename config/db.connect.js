const Sequelize = require("sequelize");
const DB_CONFIG = require("./db.config.js");

const sequelize = new Sequelize(
  DB_CONFIG.DB,
  DB_CONFIG.USER,
  DB_CONFIG.PASSWORD,
  {
    host: DB_CONFIG.HOST,
    dialect: DB_CONFIG.dialect,
    pool: {
      max: DB_CONFIG.pool.max,
      min: DB_CONFIG.pool.min,
      acquire: DB_CONFIG.pool.acquire,
      idle: DB_CONFIG.pool.idle,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(error => {
    console.error("Unable to connect to the database: ", error);
  });

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Eleman = require('../model/Eleman.js')(sequelize, Sequelize.DataTypes); // Eleman modelini dahil et

module.exports = db;