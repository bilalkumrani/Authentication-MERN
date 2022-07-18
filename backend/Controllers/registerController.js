const User = require("../models/User");
const bcrypt = require("bcrypt");
const registerController = async (req, res) => {
  if (!req.body) {
    return res.json({ error: true, message: "data is missing" });
  } else {
    const { name, email, password: originalPass } = req.body;
    const password = await bcrypt.hash(originalPass, 10);
    User.create({ name, email, password }, (err, user) => {
      if (err) {
        console.log("**error while creating document");
        return res.json({
          error: true,
          message: "error while creating document",
        });
      } else {
        console.log("document is crated");
        return res.json({
          user,
        });
      }
    });
  }
};

module.exports = registerController;
