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
      //throw error
      return req.status(401).json({ message: "Not authorized" });
    }
    const decode = jwt.verify(token, process.env.KEY);
    req.user = decode;
    next();
  } catch (e) {
    res.status(401).json({ message: "Not authorized" });
  }
};
