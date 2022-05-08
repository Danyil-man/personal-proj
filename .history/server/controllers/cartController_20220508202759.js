/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const { Cart, CartBook, Book } = require("../models/models");
const { Sequelize } = require("sequelize");

class CartController {
  async getuserCart(req, res) {
    const { userId } = req.params;
    const cart = await Cart.findAll({
      where: { userId: userId },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: CartBook,
          attributes: { exclude: ["createdAt", "updatedAt"] },
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
    try {
      const { id } = req.body;
      const BookArray = await Cart.findAll({
        where: { id: id },
        include: [
          {
            model: CartBook,
            attributes: ["bookId"],
            where: { isSold: false },
          },
        ],
        raw: true,
      });
      const booksId = BookArray.map((book) => book["cart_books.bookId"]);
      await CartBook.update({ isSold: true }, { where: { cartId: id } });
      await Book.update(
        { count: Sequelize.literal("count - 1") },
        { where: { id: booksId } }
      );
      return res.json({ Success: true });
    } catch (e) {
      console.log(e);
    }
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
