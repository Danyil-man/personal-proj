/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const ApiError = require("../error/ApiError");
const { Genre, Cart, CartBook, Book } = require("../models/models");

class CartController {
  async getuserCart(req, res) {
    const { userId } = req.params;
    const cart = await Cart.findAll({
      where: { userId: userId },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: CartBook,
          where: { isSold: false },
          include: [
            {
              model: Book,
              attributes: {
                exclude: ["description", "createdAt", "updatedAt"],
              },
            },
          ],
        },
      ],
    });
    return res.json(cart);
  }
  async addBookToCart(req, res) {
    const { bookId } = req.query;
    const { userId } = req.params;
    const cartUser = await Cart.findOne({
      where: { userId: userId },
      attributes: ["id"],
    });

    const cartBook = await CartBook.create({
      bookId: bookId,
      cartId: cartUser.id,
    });

    return res.json(cartBook);
  }
  async removeBookFromCart(req, res) {
    const { id } = req.params;
    await CartBook.destroy({ where: { id: id } });
    return res.json({ Success: true });
  }
  async buyBooksCart(req, res) {
    const { id } = req.body;
    await CartBook.update({ isSold: true }, { where: { cartId: id } });
    const BookArray = await Cart.findAll({
      where: { id: id },
      include: [
        {
          model: CartBook,
          attributes: ["id"],
        },
      ],
      raw: true,
    });
    console.log(BookArray);
    return res.json({ Success: true });
  }
  async getOrders(req, res) {
    const { userId } = req.params;
    const cart = await Cart.findAll({
      where: { userId: userId },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: CartBook,
          where: { isSold: true },
          include: [
            {
              model: Book,
              attributes: {
                exclude: ["description", "createdAt", "updatedAt"],
              },
            },
          ],
        },
      ],
    });
    return res.json(cart);
  }
}

module.exports = new CartController();
