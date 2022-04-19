/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const Router = require("express");
const router = Router();

router.post("/signup");
router.post("/login");
router.get("/auth", (req, res) => {
  res.json({ message: "AUTH WORK" });
});

module.exports = router;
