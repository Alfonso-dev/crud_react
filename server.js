const express = require('express')
const app = express()

//importar conexion mongoDB
const archivoBD = require('./conexion')

//importar archivo de ruta y modelo usuario
const rutaUsuario = require('./rutas/usuario')

//importar body parser
const bodyParser = require('body-parser')

app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario',rutaUsuario)

app.get('/', (req,res)=>{
    res.end('Bienvenidos al servidor backend node')
})

//configurar server basic
app.listen(5000, function(){
    console.log('El servidor esta corriendo correctamente')
})