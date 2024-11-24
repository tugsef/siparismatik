const express = require("express");
const router = express.Router();
const siparisController = require("../controllers/siparisController");

router.get("/", siparisController.getOrdersByFirmaID);

module.exports = router;
