const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

const objbd = mongoose.connection

objbd.on('connected',()=>{console.log('conexion exitosa')})
objbd.on('error', ()=>{console.log('Error en la conexion')})

module.exports = mongoose