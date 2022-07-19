const express = require("express");
const router = express.Router();
const registerController = require("../Controllers/registerController");
const loginController = require("../Controllers/loginController");
const showAll = require("../Controllers/allUsersController");
const authenticate = require("../middlewares/authenticate");
const update = require("../Controllers/updateController");

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/allusers", showAll);
router.post("/update", authenticate, update);

module.exports = router;
