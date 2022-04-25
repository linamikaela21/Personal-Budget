const express = require('express')
const router = express.Router()
const { getOperations, newOperation } = require('../../controllers/operations')
const { Budget } = require('../../models/Budget')

router.get('/budget', getOperations)
router.post('/budget', newOperation)

module.exports = router