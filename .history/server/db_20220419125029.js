/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const { Sequelize } = require("sequelize");

module.exports = new Sequelize("personalproject", "root", "", {
  dialect: "mysql",
  host: "localhost",
  port: 5432,
});
