/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ApiError = require("../error/ApiError");
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
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, password: hashPassword, role });
    const cart = await Cart.create({ userId: user.id });
    const token = jwt.sign({ id: user.id, email, role }, process.env.KEY, {
      expiresIn: "24h",
    });
    return res.json({ token });
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
