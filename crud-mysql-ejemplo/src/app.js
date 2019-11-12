const path = require('path');
const express = require('express');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//Importar rutas
const indiceRutas = require('./rutas/index');
//configuraciones 
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('view', path.join__dirname,'vistas'));

//Middleware
app.use(myConnection(mysql, {
	host: 'localhost'(,
	user: 'root',
	password: 
}))
//app.use()

//usamor rutas
app.use('/',indiceRutas);
app.listen(3000,()=>{
	console.log('Escuchando en el puerto 3000')
})