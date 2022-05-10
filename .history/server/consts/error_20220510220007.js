/* eslint-disable quotes */
class ErrorStatus extends Error {
  incorrectEmailOrPassword() {
    return "Incorrect email or password";
  }
}

module.exports = ErrorStatus;
