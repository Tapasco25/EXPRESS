const { Sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const gestionSesiones = sequelize.define(
    "gestion_sesiones",
    {
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        nombre_usuario: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        correo_electronico: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    },
    {
        tableName: "gestion_sesiones",
        timestamps: false
    }
);

module.export(gestionSesiones)
