/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const Router = require("express");
const router = Router();
const cartController = require("../controllers/cartController");

router.get("/:userId", cartController.getuserCart);
router.post("/:bookId", cartController.addBookToCart);
router.delete("/:bookId", cartController.removeBookFromCart);

module.exports = router;
