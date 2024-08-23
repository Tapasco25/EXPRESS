const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const Venta = sequelize.define(
  "venta",
  {
    id_venta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
    },
    id_factura: {
      type: DataTypes.INTEGER,
      references: {
        model: "factura_ventas",
        key: "id_factura",
      },
    },
    fecha_venta: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "ventas",
    schema: "mi_proyecto",
    timestamps: false,
  }
);

module.exports = Venta;
