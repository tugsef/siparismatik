const express = require("express");
const router = express.Router();
const elemanController = require("../controllers/elemanController");


// Route to get all Eleman (Users)
router.get("/", elemanController.findAll);

router.post("/login", elemanController.login);


module.exports = router;
