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
  async getAll(req, res, next) {
    try {
      let { genreId, limit, page, price } = req.query;
      //parseInt for correct syntax inMySQL
      page = parseInt(page) || 1;
      limit = parseInt(limit) || 30;
      let offset = page * limit - limit;
      let books;
      //Get all books
      if (!genreId) {
        books = await Book.findAndCountAll({ limit, offset });
      }
      //Sort by genre
      else {
        books = await Book.findAndCountAll({
          where: { genreId },
          limit,
          offset,
        });
      }
      return res.json(books);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getOne(req, res) {
    const { id } = req.params;
    const book = await Book.findOne({ where: { id } });
    return res.json(book);
  }
}

module.exports = new BookController();