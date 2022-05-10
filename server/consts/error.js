/* eslint-disable quotes */
class ErrorStatus extends Error {
  static incorrectEmailOrPassword() {
    return "Incorrect email or password";
  }
  static alreadyExist() {
    return "User with this email already exist";
  }
  static userNotFound() {
    return "User not found";
  }
  static notAuth() {
    return "Not authorized";
  }
  static accessDenied() {
    return "Access denied";
  }
  static unExpectedError() {
    return "Unexpected error";
  }
}

module.exports = ErrorStatus;
