/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return req.status(401).json({ message: "Not authorized" });
    }
  } catch (e) {
    res.status(401).json({ message: "Not authorized" });
  }
};
