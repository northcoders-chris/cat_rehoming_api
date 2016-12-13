const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api_controller');

/*****************************
  Route: /cats
******************************/

router.get('/cats', function (req, res, next) {
  apiController.getCats(function (err, cats) {
    if (err) {
      return res.sendStatus(500);
    }
    res.status(200).json(cats);
  });
});

router.post('/cats', function (req, res, next) {
  apiController.createCat(req.body, function (err, cat) {
    if (err) {
      return res.sendStatus(500);
    }
    if (!cat) {
      return res.sendStatus(422);
    }
    res.status(200).json(cat);
  });
});

/*****************************
  Route: /cats/:cat_id
******************************/

router.get('/cats/:cat_id', function (req, res, next) {
  apiController.getCatById(req.params.cat_id, function (err, cat) {
    if (err) {
      // Database did not respond
      return res.sendStatus(500);
    }
    // ID does not exist
    if (!cat) {
      res.sendStatus(404);
    }
    // Cat found
    res.status(200).json(cat);
  });
});

router.put('/cats/:cat_id', function (req, res, next) {

});

router.delete('/cats/:cat_id', function (req, res, next) {

});

module.exports = router;
