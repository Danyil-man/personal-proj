/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const Router = require("express");
const router = Router();
const favoriteController = require("../controllers/favoriteController");

router.get("/:userId", favoriteController.getUserFavorite);
router.post("/:userId", favoriteController.addBookToFavorite);
// router.delete("/:id", favoriteController.removeBookFromCart);
// router.post("/order/:id", favoriteController.buyBooksCart);
// router.get("/order/:userId", favoriteController.getOrders);

module.exports = router;
