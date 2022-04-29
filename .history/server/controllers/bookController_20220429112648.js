/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const uuid = require("uuid");
const { Book, Genre } = require("../models/models");
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

      let filteredPrice = price ? ["price", "ASC"] : ["id", "ASC"];
      let filteredHighPrice = price ? ["price", "ASC"] : ["price", "DESC"];
      let filteredName = name ? ["name", name] : ["id", "ASC"];
      let filteredHighName = name ? ["name", "ASC"] : ["name", "DESC"];

      switch (price) {
        case 1:
          filteredHighPrice = ["price", "ASC"];
          break;

        case 2:
          filteredHighPrice = ["price", "DESC"];
          break;
        default:
          filteredHighPrice = ["id", "ASC"];
      }

      let filteredParams;
      if (!price && !name) {
        filteredParams = ["id", "ASC"];
      } else if (price) {
        filteredParams = ["price", filteredPrice];
      } else if (name) {
        filteredParams = ["name", filteredName];
      }
      //Get all books

      books = await Book.findAndCountAll({
        where: { genreId: genre, name: name },
        order: [filteredParams],
        offset: offset,
        limit: limit,
        subQuery: false,
      });
      // console.log("RESPONSEEEEEEEEEEEEEEE", books);
      // if (!genreId) {
      //   books = await Book.findAndCountAll({ limit, offset });
      // } else {
      //   books = await Book.findAndCountAll({
      //     where: { genreId },
      //     limit,
      //     offset,
      //   });
      // }
      //Sort by genre
      // if (!name) {
      //   books = await Book.findAndCountAll({ limit, offset });
      // }
      // //Sort by name
      // else {
      //   books = await Book.findAndCountAll({
      //     order: [["name", name]],
      //     limit,
      //     offset,
      //   });
      // }
      // if (!price) {
      //   books = await Book.findAndCountAll({ limit, offset });
      // }
      // //Sort by price
      // else {
      //   books = await Book.findAndCountAll({
      //     order: [["price", price]],
      //     limit,
      //     offset,
      //   });
      // }

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
