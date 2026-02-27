const express = require('express');
const router = express.Router();

//colocar rutas aqui
router.get('/', (req, res) => {
  const titulo = 'Inicio';
  const mensaje = 'NIGGANIGGANIGGA';
  res.render('inicio',{titulo,mensaje});
});

module.exports = router;