const express = require("express");
const router = express.Router();
const registerController = require("../Controllers/registerController");
const loginController = require("../Controllers/loginController");
const showAll = require("../Controllers/allUsersController");

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/allusers", showAll);

module.exports = router;
