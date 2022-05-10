/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ApiError = require("../error/ApiError");
const ErrorStatus = require("../consts/error");
const { User, Cart } = require("../models/models");

const generateJWT = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.KEY, { expiresIn: "3h" });
};
class UserController {
  async signUp(req, res, next) {
    try {
      const { email, password, role } = req.body;
      if (!email || !password) {
        return next(ApiError.badRequest(ErrorStatus.incorrectEmailOrPassword));
      }
      const existUser = await User.findOne({ where: { email } });
      if (existUser) {
        return next(ApiError.badRequest(ErrorStatus.alreadyExist()));
      }
      const hashPassword = await bcrypt.hash(password, 5);
      const user = await User.create({ email, role, password: hashPassword });
      await Cart.create({ userId: user.id });
      const token = generateJWT(user.id, user.email, user.role);
      return res.json({ token });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async logIn(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.badRequest("User not found"));
    }
    let checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword) {
      return next(ApiError.badRequest("User not found"));
    }
    const token = generateJWT(user.id, user.email, user.role);
    return res.json({ token });
  }
  async checkAuth(req, res) {
    const token = generateJWT(req.user.id, req.user.email, req.user.role);
    return res.json({ token });
  }
}

module.exports = new UserController();
