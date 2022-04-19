/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const express = require("express");
const app = express();
const mysql = require("mysql");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorMiddleware");

app.use(cors());
app.use(express.json());
app.use("/api", router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`SERVER STARTED on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};
start();
