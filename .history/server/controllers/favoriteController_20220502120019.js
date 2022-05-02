/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const { Favorite, User, Book } = require("../models/models");

class FavoriteController {
  async getUserFavorite(req, res) {
    const { userId } = req.params;
    const favorite = await User.findOne({
      where: { userId: userId },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: Favorite,
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
    return res.json(favorite);
  }
  //   async addBookToFavorite(req, res) {
  //     const { bookId } = req.query;
  //     const { userId } = req.params;
  //     const cartUser = await Cart.findOne({
  //       where: { userId: userId },
  //       attributes: ["id"],
  //     });

  //     const cartBook = await CartBook.create({
  //       bookId: bookId,
  //       cartId: cartUser.id,
  //     });

  //     return res.json(cartBook);
  //   }
  //   async removeBookFromFavorite(req, res) {
  //     const { id } = req.params;
  //     await CartBook.destroy({ where: { id: id } });
  //     return res.json({ Success: true });
  //   }
  //   async addBookToCart(req, res) {
  //     const { bookId } = req.query;
  //     const { userId } = req.params;
  //     const cartUser = await Cart.findOne({
  //       where: { userId: userId },
  //       attributes: ["id"],
  //     });

  //     const cartBook = await CartBook.create({
  //       bookId: bookId,
  //       cartId: cartUser.id,
  //     });

  //     return res.json(cartBook);
  //   }
  //   async buyBooksCart(req, res) {
  //     const { id } = req.body;
  //     await CartBook.update({ isSold: true }, { where: { id: id } });
  //     return res.json({ Success: true });
  //   }
}

module.exports = new FavoriteController();
