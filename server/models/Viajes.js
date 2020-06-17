const Sequelize = require('sequelize');

const db = require('../configs/database');

const Viaje = db.define('viaje',{
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    descripcion:{
        type: Sequelize.STRING
    },
    imagen: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    }
});
module.exports = Viaje;