/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const Router = require("express");
const router = Router();
const userController = require("../controllers/userControllers");

router.post("/signup", userController.signUp);
router.post("/login", userController.login);
router.get("/auth", userController.checkAuth);

module.exports = router;
