const {Sequelize} = require("../config/database")
const {DataTypes} = require("sequelize")

const usuarios = sequelize.define(
    "usuarios",
    {
        id_usuario: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    },
    {
        nombre_completo: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique:false,
            defaultValue:"valor por defecto"
        }
    },
    {
        correo_electronico: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique:true
        }
    },
    {
        telefono: {
            type: DataTypes.STRING(20),
            allowNull: true
        }
    },
    {
        direccion: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    },
    {
        estado_cuenta: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    },
    {
        fecha_inicio: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        }
    },
    {
        tableName: "usuarios",
        timestamps: false
    }
);

module.export(usuarios)