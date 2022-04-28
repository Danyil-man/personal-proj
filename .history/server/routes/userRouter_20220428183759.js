/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const Router = require("express");
const router = Router();
const userController = require("../controllers/userControllers");
const authMiddleWare = require("../middleware/authMiddleWare");

router.post("/signup", userController.signUp);
router.post("/login", userController.logIn);
router.get("/auth", authMiddleWare, userController.checkAuth);
router.get("/user", userController.getUser);

module.exports = router;
