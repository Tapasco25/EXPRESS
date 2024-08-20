const express = require("express");
const { FacturasGet, FacturasPost } = require("../controllers/factura_ventasController"); 

const router = express.Router();

router.get("/", FacturasGet); 
router.post("/", FacturasPost);

module.exports = router;
