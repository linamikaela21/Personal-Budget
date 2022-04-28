const express = require("express");
const { signup, signin, signout } = require("../../controllers/user");
//const { validateSignUpRequest, validateSignInRequest, isRequestValidated } = require('../../validators')
const router = express.Router();

//router.post('/signup', validateSignUpRequest, isRequestValidated, signup)
router.post("/signup", signup);

//router.post('/signin', validateSignInRequest, isRequestValidated, signin)
router.post("/signin", signin);

router.post("/logout", signout);

module.exports = router;
