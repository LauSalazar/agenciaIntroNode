const express = require('express');
const router = express.Router();
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajeController = require('../controllers/viajesController');
const testimoniosController = require('../controllers/testimoniosController');

const Testimonio = require('../models/Testimonios');

module.exports = function(){
    router.get('/',homeController.consultas);
    router.get('/nosotros',nosotrosController.infoNosotros);
    router.get('/viajes',viajeController.consultaViajes);
    router.get('/viajes/:id',viajeController.mostrarViaje);
    router.get('/testimoniales',testimoniosController.mostrarTestimonios);
    router.post('/testimoniales', testimoniosController.agregarTestimonio);
    return router;
}