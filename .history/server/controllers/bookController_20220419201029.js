class BookController {
  async create(req, res) {
    const { name, author, description, price, genreId } = req.body;
    const { img } = req.files;
  }
  async getAll(req, res) {
    return 0;
  }
  async getOne(req, res) {
    return 0;
  }
}

module.exports = new BookController();
