/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const Router = require("express");
const router = Router();

router.use("/user");
router.use("/cart");
router.use("/cartbook");
router.use("/book");
router.use("/genre");
router.use("/rating");

module.exports = router;
