/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const { Favorite, User, Book } = require("../models/models");

class FavoriteController {
  async getUserFavorite(req, res) {
    const { userId } = req.params;
    const favorite = await User.findAll({
      where: { id: userId },
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
  async addBookToFavorite(req, res) {
    const { bookId } = req.query;
    const { userId } = req.params;
    const userFavorite = await Favorite.create({
      userId: userId,
      bookId: bookId,
    });

    return res.json(userFavorite);
  }
  async removeBookFromFavorite(req, res) {
    const { id } = req.params;
    await Favorite.destroy({ where: { id: id } });
    return res.json({ Success: true });
  }
  async addBookToCart(req, res) {
    const { favoriteId } = req.body;
    const { cartId } = req.params;
    const favoriteBook = await Favorite.findOne({
      where: { id: favoriteId },
      attributes: ["bookId"],
    });

    const cartBook = await CartBook.create({
      bookId: favoriteBook.id,
      cartId:cartId,
    });

    return res.json(cartBook);
  // }
  //   async buyBooksCart(req, res) {
  //     const { id } = req.body;
  //     await CartBook.update({ isSold: true }, { where: { id: id } });
  //     return res.json({ Success: true });
  //   }
}

module.exports = new FavoriteController();
