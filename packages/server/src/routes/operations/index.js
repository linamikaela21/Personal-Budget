const express = require('express')
const router = express.Router()
const { getOperations, newOperation, deleteOperation, updateOperation, getOperationById } = require('../../controllers/operations')

router.get('/', getOperations)
router.post('/', newOperation)
router.delete('/:id', deleteOperation)
router.post('/:id', updateOperation)

module.exports = router