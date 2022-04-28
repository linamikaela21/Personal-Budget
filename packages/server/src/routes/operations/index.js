const express = require("express");
const router = express.Router();
const {
  getOperations,
  newOperation,
  deleteOperation,
  updateOperation,
  getOperationById,
} = require("../../controllers/operations");

router.post("/", getOperations);
router.get("/:id", getOperationById);
router.post("/new", newOperation);
router.delete("/:id", deleteOperation);
router.post("/:id", updateOperation);

module.exports = router;
