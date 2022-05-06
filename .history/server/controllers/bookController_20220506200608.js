/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const uuid = require("uuid");
const { Book, Genre } = require("../models/models");
const path = require("path");
const ApiError = require("../error/ApiError");
class BookController {
  async create(req, res, next) {
    try {
      const { name, author, description, price, genreId, count } = req.body;
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
        count,
      });
      return res.json(book);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res, next) {
    try {
      let { genreId, limit, page, name, price } = req.query;
      //parseInt for correct syntax inMySQL
      page = parseInt(page) || 1;
      limit = parseInt(limit) || 30;
      let offset = page * limit - limit;
      let books;

      const genres = await Genre.findAll({
        raw: true,
        attributes: ["id"],
      });
      const genresMappedId = genres.map((id) => id.id);
      const genre = genreId ? genreId : genresMappedId;

      let filteredParams;
      if (!price && !name) {
        filteredParams = ["id", "ASC"];
      } else if (price === "ASC" || price === "DESC") {
        filteredParams = ["price", price];
      } else if (name === "ASC" || name === "DESC") {
        filteredParams = ["name", name];
      } else {
        filteredParams = ["id", "ASC"];
      }
      //Get all books

      books = await Book.findAndCountAll({
        where: { genreId: genre },
        order: [filteredParams],
        offset: offset,
        limit: limit,
        subQuery: false,
      });

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
