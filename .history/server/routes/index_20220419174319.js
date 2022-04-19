/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const Router = require("express");
const router = Router();

const bookRouter = require("./book");
const genreRouter = require("./genre");
const userRouter = require("./user");

router.use("/user", userRouter);
router.use("/book", bookRouter);
router.use("/genre", genreRouter);

module.exports = router;
