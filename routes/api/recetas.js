var express = require('express');
var router = express.Router();

var uuid = require('uuid/v4');

var recetaColl = [];

var recetaStr = {
    id: 0,
    receta: '',
    precio: '',
    tipo:'',
    observacion:'',
    estado:''
}


router.get('/',(req,res,next)=>{
    //obtiene la coleccion de las recetas
        res.status(200).json(recetaColl);
    });
    //metodo get
    
    
    router.get('/:id',(req,res,next)=>{
        if (!req.params.id) return next();
        var id = req.params.id;
        var recet = recetaColl.filter((e,i)=>{
            return (e.id===id);
        });//filtro
        if (recet.length > 0){
            res.status(200).json(recet[0]);
        }
        else{
            res.status(404).json({});
        }
    });
    // OBTENER UNO POR ID

    module.exports = router;

