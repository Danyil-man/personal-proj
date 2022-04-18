/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const app = express();
const mysql = require("mysql");

app.listen(3002, () => {
  console.log("SERVER");
});
