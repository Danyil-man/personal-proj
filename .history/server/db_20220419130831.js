/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const Sequelize = require("sequelize");

module.exports = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);
