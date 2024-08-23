const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const CarritoCompra = sequelize.define(
  "carrito_compra",
  {
    id_carrito: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_producto: {
      type: DataTypes.JSONB,
    },
    id_usuario: {
      type: DataTypes.STRING(255),
      references: {
        model: "usuarios",
        key: "uid_usuario",
      },
    },
  },
  {
    tableName: "carrito_compras",
    schema: "mi_proyecto",
    timestamps: false,
  }
);

module.exports = CarritoCompra;
