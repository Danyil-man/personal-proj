/* eslint-disable quotes */
class ErrorStatus extends Error {
  incorrectEmailOrPassword() {
    return "Incorrect email or password";
  }
  alreadyExist() {
    return "User with this email already exist";
  }
}

module.exports = ErrorStatus;
