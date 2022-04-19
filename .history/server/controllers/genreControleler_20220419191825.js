/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const ApiError = require("../error/ApiError");
const { Genre } = require("../models/models");

class GenreController {
  async create(req, res) {
    const { name } = req.body;
    const genre = await Genre.create({ name });
    return res.json();
  }
  async getALl(req, res) {
    return 0;
  }
}

module.exports = new GenreController();
