const express = require('express');
const path = require('path');
const routes = require('./routes');
const configs = require('./configs');
const bodyParser = require('body-parser');

const app = express();
//Habilitar pug
app.set('view engine','pug');
//Agregar las vistas
app.set('views',path.join(__dirname,'./views'));
//Agregar la carpeta estatica public
app.use(express.static('public'));
//Variables para el sitio web
const config = configs[app.get('env')];
app.locals.titulo = config.nombreSitio;
//mostrar el año actual
app.use((req,res,next) => {
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;
    return next();
});
//se ejecuta el body parser
app.use(bodyParser.urlencoded({extended:true}));
//cargar las rutas
app.use('/', routes());

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () => console.log('server is running'));