/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const Router = require("express");
const router = Router();
const bookController = require("../controllers/bookController");

router.post("/", bookController.create);
router.get("/", bookController.getAll);
router.get("/:id", bookController.getOne);

module.exports = router;
