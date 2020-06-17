const Testimonio = require('../models/Testimonios');
exports.mostrarTestimonios = async (req, res) => {
    const testimonios = await Testimonio.findAll();
    res.render('testimoniales', {
        pagina: "Testimoniales",
        testimonios
    });
};

exports.agregarTestimonio = async (req, res) => {
    let {nombre, correo, mensaje} = req.body;
    let errores = [];
    if(!nombre) {
        errores.push({mensaje: 'Agrega tu nombre'});
    }
    if(!correo) {
        errores.push({mensaje: 'Agrega tu correo'});
    }
    if(!mensaje) {
        errores.push({mensaje: 'Agrega tu mensaje'});
    }

    if(errores.length > 0 ){
        const testimonios = await Testimonio.findAll();
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje,
            pagina: 'Testimonios',
            testimonios
        })
    } else {
        Testimonio.create({
            nombre,
            correo,
            mensaje
        }).then(testimonio => res.redirect('/testimoniales'))
        .catch(err => console.log(err));
    }
};