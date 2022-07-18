const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
  if (!req.body) {
    return res.json({ error: true, message: "data is missing" });
  } else {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: true, message: "incorrect email or password" });
    } else {
      if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ _id: user._id }, "jkjsdhfj", {
          expiresIn: 3 * 24 * 60 * 60,
        });
        return res.json({ token, message: "logged in successfully" });
      } else {
        return res.json({
          error: true,
          message: "incorrect email or password",
        });
      }
    }
  }
};

module.exports = loginController;
