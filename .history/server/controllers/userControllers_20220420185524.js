/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ApiError = require("../error/ApiError");
const { User, Cart } = require("../models/models");

const generateJWT = (id, email, role) => {
  return jwt.sign({ id, email, role });
};
class UserController {
  async signUp(req, res, next) {
    try {
      const { email, password, role } = req.body;
      if (!email || !password) {
        return next(ApiError.badRequest("Inncorrect email or password"));
      }
      const existUser = await User.findOne({ where: { email } });
      if (existUser) {
        return next(ApiError.badRequest("User with this email already exist"));
      }
      const hashPassword = await bcrypt.hash(password, 5);
      const user = await User.create({ email, role, password: hashPassword });
      const cart = await Cart.create({ userId: user.id });
      const token = generateJWT(user.id, user.email, user.role);
      return res.json({ token });
    } catch (e) {
      next(ApiError.badRequest(e.message));
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
