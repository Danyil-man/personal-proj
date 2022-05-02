/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const { where } = require("sequelize/types");
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
  // async buyBooksCart(req, res) {
  //   const { id } = req.params;
  //   await Cart.update({ isSold: true }, { where: { id: id } });
  //   return res.json({ Success: true });
  // }
}

module.exports = new CartController();
