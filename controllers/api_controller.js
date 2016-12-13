const Cat = require('../models/cats');

const getCats = function (cb) {
  Cat.find(function (err, cats) {
    if (err) {
      console.log(err);
      cb(err);
    }
    cb(null, cats);
  });
};

const getCatById = function (id, cb) {
  Cat.findById(id,
    function (err, cat) {
      if (err) {
        console.log(err);
        cb(err);
      }
      cb(null, cat);
    });
};

const createCat = function (catDetails, cb) {
  if (!validateNewCat(catDetails)) {
    return cb(null, false);
  }
  Cat.create(catDetails, function (err, newCat) {
    if (err) {
      return cb(err);
    }
    cb(null, newCat);
  });
};

const validateNewCat = function (details) {
  const requiredProps = ['name', 'ready_for_home', 'age', 'personality'];
  return requiredProps.every(function (prop) {
    return details[prop] !== undefined;
  });
};

module.exports = {
  getCats,
  getCatById,
  createCat
};
