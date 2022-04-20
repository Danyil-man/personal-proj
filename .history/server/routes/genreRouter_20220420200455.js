/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const Router = require("express");
const router = Router();
const genreController = require("../controllers/genreControleler");
const checkRole = require("../middleware/checkRoleMiddleWare");

router.post("/", checkRole("ADMIN"), genreController.create);
router.get("/", genreController.getALl);

module.exports = router;
