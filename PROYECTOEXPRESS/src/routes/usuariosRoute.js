const express = require("express");
const {
  UsuariosGet,
  UsuarioGet,
  UsuariosPost,
  UsuariosPut,
  UsuariosDelete,
} = require("../controllers/usuariosController");

const router = express.Router();

router.get("/", UsuariosGet);
router.get("/:uid_usuario", UsuarioGet);
router.post("/", UsuariosPost);
router.put("/:uid_usuario", UsuariosPut);
router.delete("/:uid_usuario", UsuariosDelete);

module.exports = router;
