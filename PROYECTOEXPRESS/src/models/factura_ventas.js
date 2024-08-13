const { Sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const facturaVentas = sequelize.define(
    "factura_ventas",
    {
        id_factura: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_cliente: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'usuarios',  
                key: 'id_usuario'   
            }
        },
        fecha_emision: {
            type: DataTypes.DATE,
            allowNull: false
        },
        total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    },
    {
        tableName: "factura_ventas",
        timestamps: false
    }
);

module.export(facturaVentas)
