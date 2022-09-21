const express = require('express')

const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemaUsuario = new eschema({
    nombre:String,
    email:String,
    telefono:String,
    idUsuario:String
})
const ModeloUsuario = mongoose.model('usuarios', eschemaUsuario)
module.exports = router

router.get('/ejemplo',(req,res)=>{
    res.end('saludo carga desde ruta ejemplo')
})
router.post("/agregarUsuario", (req,res)=>{
    const nuevoUsuario = new ModeloUsuario({
        nombre:req.body.nombre,
        email:req.body.email,
        telefono:req.body.telefono,
        idUsuario:req.body.idUsuario
    })
    nuevoUsuario.save(function(err){
        if(!err){
            res.send('usuario agregado correctamente')
        }else{
            res.send(err)
        }
    })
})