const User = require("../models/User");
const jwt = require("jsonwebtoken");
const authenticate = async (req, res, next) => {
  if (!req.body) {
    return res.json({ error: true, message: "data not found!" });
  } else {
    const { token } = req.body;
    if (!token) {
      return res.json({ message: "Login failed" });
    } else {
      const { _id } = jwt.verify(token, "123");
      const user = await User.findById({ _id });
      if (!user) {
        return res.json({ error: true, message: "login failed" });
      } else {
        req.user = user;
        next();
      }
    }
  }
};
module.exports = authenticate;
