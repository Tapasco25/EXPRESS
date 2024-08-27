const express = require("express");
const {
  CarritoGet,
  CarritoPost,
  CarritoPut,
  CarritoDelete,
  CarritoGetByUsuario,
} = require("../controllers/carrito_comprasController");

const router = express.Router();

router.get("/", CarritoGet);
router.post("/", CarritoPost);
router.put("/id_carrito/:id_carrito", CarritoPut);
router.get("/id_usuario/:id_usuario", CarritoGetByUsuario);
router.delete("/:id_carrito", CarritoDelete);

module.exports = router;
