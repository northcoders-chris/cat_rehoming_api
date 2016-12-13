function validateNewCat (catDetails) {
  const requiredProps = ['name', 'ready_for_home', 'age', 'personality'];
  return requiredProps.every(function (prop) {
    return catDetails[prop] !== undefined;
  });
}

function validateCatProps (catProps) {
  for (var prop in catProps) {
    if (prop === 'name' && typeof catProps[prop] !== 'string') {
      return false;
    }
    if (prop === 'ready_for_home' && typeof catProps[prop] !== 'boolean') {
      return false;
    }
    if (prop === 'age' && typeof catProps[prop] !== 'number') {
      return false;
    }
    if (prop === 'personality' && !Array.isArray(catProps[prop])) {
      return false;
    }
    if (prop === 'personality' && Array.isArray(catProps[prop])) {
      const result = catProps[prop].every(function (trait) {
        console.log('foo', trait);
        return typeof trait === 'string';
      });
      if (!result) {
        return false;
      }
    }
  }
  return true;
}

module.exports = {
  validateNewCat,
  validateCatProps
};
