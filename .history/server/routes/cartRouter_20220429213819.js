/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const Router = require("express");
const router = Router();
const cartController = require("../controllers/cartController");

router.get("/", cartController);
router.post("/add", cartController);
router.delete("/:id", cartController);

module.exports = router;
