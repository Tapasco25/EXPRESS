const FacturaVenta = require("../models/factura_ventas");


const FacturasGet = async (req, res) => {
    try {
        const facturas = await FacturaVenta.findAll(); 
        res.json(facturas); 
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};


const FacturasPost = async (req, res) => {
    const {
        estado_factura,
        fecha_pedido,
        id_usuario,
        precio_total
    } = req.body; 

    try {
        const MewFacture = await FacturaVenta.create({
            estado_factura,
            fecha_pedido,
            id_usuario,
            precio_total
        }); 
        res.status(200).json(MewFacture); 
    } catch (error) {
        res.status(400).json({ message: error.message }); 
    }
};

module.exports = { FacturasGet, FacturasPost }
