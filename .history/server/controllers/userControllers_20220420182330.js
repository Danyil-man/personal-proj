/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const { User, Cart } = require("../models/models");

class UserController {
  async signUp(req, res) {
    return 0;
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
