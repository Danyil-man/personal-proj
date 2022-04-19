/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const express = require("express");
const app = express();
const mysql = require("mysql");
//const sequelize = require("./db");
import db from "./db";
const cors = require("cors");

app.use(cors());
app.use(express.json());

const start = async () => {
  try {
    await db.authenticate();
    await db.sync();
    app.listen(PORT, () => {
      console.log(`SERVER STARTED on port ${PORT}`);
    });
    app.listen(PORT, () => {
      console.log(`SERVER STARTED on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};
start();

// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "",
//   database: "personalproject",
// });

// //registration

// app.post("/create", (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const password = req.body.password;

//   db.query(
//     "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
//     [name, email, password],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send("SUCCESS");
//       }
//     }
//   );
// });

// //getUsers

// app.get("/users", (req, res) => {
//   db.query("SELECT * FROM users", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });