const { Router } = require('express');
const Tree = require('../models/Tree');


module.exports = Router()


  .post('/', async (req, res, next) => { 
    try { 
      const newHuman = await Tree.insert(req.body);
      res.send(newHuman);
    } catch (err) { 
      err.status = 404;
      console.log(err);
    }
  })

  .get('/', async (req, res, next) => { 
    const getTree = await Tree.find();
    res.send(getTree);

  });
