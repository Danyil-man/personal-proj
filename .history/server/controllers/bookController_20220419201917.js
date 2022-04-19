/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const uuid = require("uuid");
const { Book } = require("../models/models");
const path = require("path");
class BookController {
  async create(req, res) {
    const { name, author, description, price, genreId } = req.body;
    const { image } = req.files;
    let fileName = uuid.v4() + ".jpg";
    image.mv(path.resolve(__dirname, "..", "static", fileName));
    const book = await Book.create({
      name,
      author,
      description,
      price,
      genreId,
      image: fileName,
    });
  }
  async getAll(req, res) {
    return 0;
  }
  async getOne(req, res) {
    return 0;
  }
}

module.exports = new BookController();
