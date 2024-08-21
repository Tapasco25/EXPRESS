const express = require("express");
const { FacturasGet, FacturasPost, FacturasPut, FacturasDelete } = require("../controllers/factura_ventasController"); 

const router = express.Router();

router.get("/", FacturasGet); 
router.post("/", FacturasPost);
router.put("/", FacturasPut); 
router.delete("/", FacturasDelete);

module.exports = router;
