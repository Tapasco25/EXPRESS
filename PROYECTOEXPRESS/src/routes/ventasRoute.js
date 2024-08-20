const express = require("express");
const { VentasGet, VentasPost } = require("../controllers/ventasController"); 

const router = express.Router();

router.get("/", VentasGet); 
router.post("/", VentasPost); 

module.exports = router;

