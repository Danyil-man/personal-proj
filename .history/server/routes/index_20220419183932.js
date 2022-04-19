/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const Router = require("express");
const router = Router();

const bookRouter = require("./bookRouter");
const genreRouter = require("./genreRouter");
const userRouter = require("./userRouter");

router.use("/user", userRouter);
router.use("/book", bookRouter);
router.use("/genre", genreRouter);

module.exports = router;
