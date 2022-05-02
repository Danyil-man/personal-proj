/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const Router = require("express");
const router = Router();
const cartController = require("../controllers/cartController");

router.get("/:userId", cartController.getuserCart);
router.post("/:userId", cartController.addBookToCart);
router.delete("/:bookId", cartController.removeBookFromCart);
router.post("/order/:userId", cartController.buyBooksCart);

module.exports = router;
