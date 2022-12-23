const express = require("express");
const router = express.Router();
const userController = require("../Controllers/user.controller")

router.post("/register", userController.registerUser())
router.post("/login", userController.signinUser())

//siteDetails
router.post("/sitedetails", userController.uploadSiteData())
router.get("/allsitedata", userController.getSiteData())


module.exports = router
