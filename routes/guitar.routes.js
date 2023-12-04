const express = require("express");
const router = express.Router();

const guitarController = require("../controllers/guitar.controller");

// Get all guitars
router.get("/guitars", guitarController.findAll);

// Get a guitar by id
router.get("/guitars/:id", guitarController.findById);

// Add a new guitar
router.post("/guitars", guitarController.add);

// Update a guitar by id
router.put("/guitars/:id", guitarController.update);

// Delete a guitar by id
router.delete("/guitars/:id", guitarController.delete);

module.exports = router;
