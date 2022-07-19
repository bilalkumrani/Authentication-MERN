const User = require("../models/User");
const update = (req, res) => {
  if (!req.body) {
    return res.json({ error: true, message: "data not found!" });
  } else {
    const { name, email, _id } = req.body.user;
    User.findByIdAndUpdate(_id, { name, email }, { new: true }, (err, user) => {
      if (err) {
        return res.json({ error: true, message: "doc is not updated" });
      } else {
        return res.json({ user, message: "doc is updated" });
      }
    });
  }
};

module.exports = update;
