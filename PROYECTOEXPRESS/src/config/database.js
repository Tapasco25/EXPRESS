const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("proyecto_final", "nicol", "Javier250282", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

const ConexionDB = () => {
  sequelize
    .sync()
    .then(() => console.log("Conectado a la base de datos"))
    .catch((err) => console.log("Error al conectar con la base de datos", err));
};

module.exports = { sequelize, ConexionDB };
