/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const sequelize = require("../db");

const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
