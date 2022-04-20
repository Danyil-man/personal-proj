/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const uuid = require("uuid");
const { Book } = require("../models/models");
const path = require("path");
const ApiError = require("../error/ApiError");
class BookController {
  async create(req, res, next) {
    try {
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
      return res.json(book);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    let { genreId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 10;
    let itemSet = page * limit - limit;
    let books;
    //Get all books
    if (!genreId) {
      books = await Book.findAll();
    }
    //Sort by genre
    else {
      books = await Book.findAll({ where: { genreId } });
    }
    return res.json(books);
  }
  async getOne(req, res) {
    return 0;
  }
}

module.exports = new BookController();
