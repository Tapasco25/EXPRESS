const {Sequelize} = require("sequelize")

const sequelize = new Sequelize("PROYECTO_FINAL", "nicol", "Javier250282",{
    host:"localhost",
    dialect:"postgres",
    logging:false,
});
const ConexionDB = () =>{
    sequelize
    .sync()
    .then(()=>console.log("Conectado ala base de datos"))
    .catch((err)=> console.log("Error al conectar con la base de datos"))
}

module.export(ConexionDB, sequelize)