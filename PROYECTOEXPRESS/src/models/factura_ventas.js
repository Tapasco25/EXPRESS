const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const FacturaVenta = sequelize.define(
  "factura_venta",
  {
    id_factura: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },
    estado_factura: {
      type: DataTypes.INTEGER,
    },
    fecha_pedido: {
      type: DataTypes.DATE,
    },
    id_usuario: {
      type: DataTypes.STRING(255),
      references: {
        model: "usuarios",
        key: "uid_usuario",
      },
    },
    id_producto: {
      type: DataTypes.JSONB,
    },
    precio_total: {
      type: DataTypes.DECIMAL(10, 2),
    },
  },
  {
    tableName: "factura_ventas",
    schema: "mi_proyecto",
    timestamps: false,
  }
);

module.exports = FacturaVenta;
