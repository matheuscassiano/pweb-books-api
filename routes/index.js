var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send({ 
    message: "Rota padrão da API" 
  });
});

module.exports = router;
