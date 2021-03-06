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

    router.post('/',(req,res,next)=>{
        var recetaNueva = Object.assign(
          {},
          recetaStr,
          {id:uuid()},
          req.body  
        );
        recetaColl.push(recetaNueva);
        res.status(200).json(recetaNueva);
    });
    //metodo posts

    
router.put('/:id',(req,res,netx)=>{

    var id = req.params.id;
    var recetaOrig = {};
    var recetaModif = {};
    recetaColl = recetaColl.map((e,i)=>{
        if(e.id===id){
            recetaOrig = Object.assign({},e);
            return recetaModif = Object.assign({},e,req.body);
        }//map
        return e;
    });
    res.status(200).json({Original: recetaOrig, Modificado: recetaModif} );
});
//metodo put

router.delete('/:id',(req,res,next)=>{
    var id = req.params.id;
    var recetaEleminar = {};
    recetaColl = recetaColl.filter((e,i)=>{
        if(e.id===id){
            recetaEleminar = Object.assign({},e);
            return false;
        }
        return true;
    });

    res.status(200).json({Eliminada: recetaEleminar, Coleccion: recetaColl});
});
//delete


    module.exports = router;

