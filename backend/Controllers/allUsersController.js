const User = require("../models/User");

const showAll = async (req, res) => {
  const users = await User.find();
  if (!users) {
    return res.json({ message: "no user found!" });
  } else {
    return res.json({ users });
  }
};
module.exports = showAll;
