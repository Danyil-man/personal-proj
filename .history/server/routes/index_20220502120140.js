/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const Router = require("express");
const router = Router();

const bookRouter = require("./bookRouter");
const genreRouter = require("./genreRouter");
const userRouter = require("./userRouter");
const cartRouter = require("./cartRouter");
const favoriteRouter = require("./favoriteRouter");

router.use("/user", userRouter);
router.use("/book", bookRouter);
router.use("/genre", genreRouter);
router.use("/cart", cartRouter);
router.use("/favorite", favoriteRouter);

module.exports = router;
