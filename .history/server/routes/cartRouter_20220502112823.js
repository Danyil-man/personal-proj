/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const Router = require("express");
const router = Router();
const cartController = require("../controllers/cartController");

router.get("/:userId", cartController.getuserCart);
router.post("/:userId", cartController.addBookToCart);
router.delete("/:id", cartController.removeBookFromCart);
router.post("/order/:id", cartController.buyBooksCart);

module.exports = router;
