const express = require("express");
const {
  UsuariosGet,
  UsuariosPost,
} = require("../controllers/usuariosController");

const router = express.Router();

router.get("/", UsuariosGet);
router.post("/", UsuariosPost);

module.exports = router;
