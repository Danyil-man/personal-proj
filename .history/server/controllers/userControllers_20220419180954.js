class UserController {
  async signUp(req, res) {}
  async logIn(req, res) {}
  async checkAuth(req, res) {
    const { id } = req.query;
    res.json(id);
  }
}

module.exports = new UserController();
