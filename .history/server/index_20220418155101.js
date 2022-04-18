/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "personalproject",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("SUCCESS");
      }
    }
  );
});

app.listen(3002, () => {
  console.log("SERVER");
});
