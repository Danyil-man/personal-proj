/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const ApiError = require("../error/ApiError");

class UserController {
  //async signUp(req, res) {}
  //async logIn(req, res) {}
  async checkAuth(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest("no id"));
    }
    res.json(id);
  }
}

module.exports = new UserController();
