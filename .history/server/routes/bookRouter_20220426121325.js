/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const Router = require("express");
const router = Router();
const bookController = require("../controllers/bookController");
const checkRole = require("../middleware/checkRoleMiddleWare");

router.post("/", checkRole("ADMIN"), bookController.create);
router.get("/", bookController.getAll);
router.get("/:id", bookController.getOne);

module.exports = router;
