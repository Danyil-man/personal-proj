/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const { User, Cart } = require("../models/models");

class UserController {
  async signUp(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("Inncorrect email or password"));
    }
    const existUser = await User.findOne({ where: { email } });
    if (existUser) {
      return next(ApiError.badRequest("User with this email already exist"));
    }
  }
  async logIn(req, res) {
    return 0;
  }
  async checkAuth(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest("no id"));
    }
    res.json(id);
  }
}

module.exports = new UserController();
