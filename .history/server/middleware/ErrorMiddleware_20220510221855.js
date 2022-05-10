/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const ApiError = require("../error/ApiError");
const ErrorStatus = require("../consts/error");

module.exports = function (err, req, res, next) {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: ErrorStatus.unExpectedError() });
};
