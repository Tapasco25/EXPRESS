const { Sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const productosVendidos = sequelize.define(
    "productos_vendidos",
    {
        id_factura: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'factura_ventas',
                key: 'id_factura'
            }
        },
        id_producto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        precio_unidad: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        cantidad_vendida: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: "productos_vendidos",
        timestamps: false
    }
);

module.export(productosVendidos)
