/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const Router = require("express");
const router = Router();

const bookRouter = require("./book");
const genreRouter = require("./genre");
const userRouter = require("./user");

router.use("/user", userRouter);
router.use("/cart");
router.use("/cartbook");
router.use("/book", bookRouter);
router.use("/genre", genreRouter);
router.use("/rating");

module.exports = router;
