const Usuario  = require("../models/usuarios")

const UsuariosGet = async (req, res) => {
    try {
        const users = await Usuario.findAll()
        res.json(users)
    }
    catch (error){
        res.status(500).json({error: error.message})
    }
} 

const UsuariosPost = async (req, res) => {
    const{
    id_usuario,
    nombre_completo,
    correo_electronico,
    telefono,
    direccion,
    estado_cuenta,
    } = req.body

    try{
    const NewUsuario = await Usuario.create({
    id_usuario,
    nombre_completo,
    correo_electronico,
    telefono,
    direccion,
    estado_cuenta, 
 })
 res.status(200).json(NewUsuario)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}

module.exports = {UsuariosGet, UsuariosPost}