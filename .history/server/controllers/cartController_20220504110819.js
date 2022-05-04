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
        //raw: true,
      });
      await CartBook.update({ isSold: true }, { where: { cartId: id } });
      console.log(BookArray.map((book) => book.cart_books.bookId)); //.map((book) => book["cart_books.bookId"])
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
