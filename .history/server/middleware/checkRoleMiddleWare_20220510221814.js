/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const jwt = require("jsonwebtoken");
const ErrorStatus = require("../consts/error");

module.exports = function (role) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }
    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return req.status(401).json({ message: ErrorStatus.notAuth() });
      }
      const decode = jwt.verify(token, process.env.KEY);
      if (decode.role !== role) {
        return res.status(403).json({ message: ErrorStatus.accessDenied() });
      }
      req.user = decode;
      next();
    } catch (e) {
      res.status(401).json({ message: ErrorStatus.notAuth() });
    }
  };
};
