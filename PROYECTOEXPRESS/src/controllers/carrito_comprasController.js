const CarritoCompra = require("../models/carrito_compras"); 

const CarritoGet = async (req, res) => {
    try {
        const carritos = await CarritoCompra.findAll(); 
        res.json(carritos); 
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};


const CarritoPost = async (req, res) => {
    const {
        estado_carrito,
        id_usuario
    } = req.body; 

    try {
        const nuevoCarrito = await CarritoCompra.create({
            estado_carrito,
            id_usuario
        }); 
        res.status(200).json(nuevoCarrito); 
    } catch (error) {
        res.status(400).json({ message: error.message }); 
    }
};

module.exports = { CarritoGet, CarritoPost }
