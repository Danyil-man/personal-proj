/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const uuid = require("uuid");

class BookController {
  async create(req, res) {
    const { name, author, description, price, genreId } = req.body;
    const { img } = req.files;
    let fileName = uuid.v4() + ".jpg";
  }
  async getAll(req, res) {
    return 0;
  }
  async getOne(req, res) {
    return 0;
  }
}

module.exports = new BookController();
