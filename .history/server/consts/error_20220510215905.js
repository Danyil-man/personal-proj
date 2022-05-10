/* eslint-disable quotes */
class ErrorStatus extends Error {
  static incorrectEmailOrPassword() {
    return "Incorrect email or password";
  }
}

module.exports = ErrorStatus;
