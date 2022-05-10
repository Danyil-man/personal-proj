/* eslint-disable quotes */
class ErrorStatus extends Error {
  static incorrectEmailOrPassword() {
    return "Incorrect email or password";
  }
  static alreadyExist() {
    return "User with this email already exist";
  }
}

module.exports = ErrorStatus;
