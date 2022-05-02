/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const ApiError = require("../error/ApiError");
const { Genre, Cart, CartBook, Book } = require("../models/models");

class CartController {
  async getuserCart(req, res) {
    const { userId } = req.params;
    const cart = await Cart.findAll({
      where: { userId: userId },
      include: [{ model: CartBook, include: [{ model: Book }] }],
    });
    return res.json(cart);
  }
  async addBookToCart(req, res) {
    const { bookId } = req.query;
    const { userId } = req.params;
    const cartUser = Cart.findOne({
      where: { userId: userId },
      attributes: ["id"],
    });
    const cartBook = await CartBook.create({
      bookId: bookId,
      cartId: cartUser.id,
      isSold: false,
    });

    return res.json(cartBook);
  }
  async removeBookFromCart(req, res) {
    const genres = await Genre.findAll();
    return res.json(genres);
  }
  async buyBooksCart(req, res) {
    const genres = await Genre.findAll();
    return res.json(genres);
  }
}

module.exports = new CartController();
