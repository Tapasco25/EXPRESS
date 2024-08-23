const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const Usuarios = sequelize.define(
  "usuarios",
  {
    uid_usuario: {
      type: DataTypes.STRING(255),
      primaryKey: true,
      allowNull: true,
    },
    nombre_completo: {
      type: DataTypes.STRING(255),
    },
    correo_electronico: {
      type: DataTypes.STRING(255),
      unique: true,
    },
    telefono: {
      type: DataTypes.STRING(20),
    },
    direccion: {
      type: DataTypes.STRING(255),
    },
    estado_cuenta: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "usuarios",
    schema: "mi_proyecto",
    timestamps: false,
  }
);

module.exports = Usuarios;
