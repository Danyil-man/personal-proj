/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const ApiError = require("../error/ApiError");
const { Genre } = require("../models/models");

class CartController {
  async getuserCart(req, res) {
    const { name } = req.body;
    const genre = await Genre.create({ name });
    return res.json(genre);
  }
  async getALl(req, res) {
    const genres = await Genre.findAll();
    return res.json(genres);
  }
}

module.exports = new CartController();
