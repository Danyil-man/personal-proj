/* eslint-disable quotes */
class ErrorStatus extends Error {
  static badRequest(message) {
    return "Incorrect email or password";
  }
}

module.exports = ErrorStatus;
