var Database = require("../models/node_fake_db")

var express = require('express');
var router = express.Router();
const database = new Database()

router.get('', function (req, res, next) {
  res.send({ 
    response: database.findAll(), 
    message: "Itens listados com sucesso" 
  });
});

router.get('/:id', function (req, res, next) {
  const response = database.findById(req.params.id);

  if (response) {
    res.send({ 
      response: response, 
      message: "Item encontrado com sucesso" 
    });
  } else {
    res.status(404)
    res.send({ 
      message: "Item não encontrado" 
    });
  }
});

router.post('', function (req, res, next) {
  database.save(req.body)
  res.send({ 
    response: req.body,
    message: "Item inserido com sucesso"
  })
});

router.put('/:id', function (req, res, next) {
  const exists = database.existsBy(req.params.id)
  if (exists != -1) {
    database.update(req.params.id, req.body)
    res.send({ 
      response: req.body,
      message: "Item editado com sucesso" 
    })
  } else {
    res.status(404)
    res.send({ 
      message: "Item não encontrado" 
    });
  }
});

router.delete('/:id', function (req, res, next) {
  const exists = database.existsBy(req.params.id)
  if (exists != -1) {
    database.del(req.params.id)
    res.send({ 
      message: "Item deletado com sucesso" 
    })
  } else {
    res.status(404)
    res.send({ 
      message: "Item não encontrado" 
    });
  }
});

module.exports = router;
