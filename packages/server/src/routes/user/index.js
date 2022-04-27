const express = require('express')
const { signup, signin } = require('../../controllers/user')
const { validateSignUpRequest, validateSignInRequest, isRequestValidated } = require('../../validators')
const router = express.Router()

router.post('/signup', validateSignUpRequest, isRequestValidated, signup)

router.post('/signin', validateSignInRequest, isRequestValidated, signin)

module.exports = router