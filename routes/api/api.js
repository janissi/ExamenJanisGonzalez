var express = require('express');
var router = express.Router();

var recetaRoutes = require('./recetas');

router.use('/recetas', recetaRoutes);

module.exports = router;