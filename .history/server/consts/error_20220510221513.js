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
}

module.exports = ErrorStatus;
