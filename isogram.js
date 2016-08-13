var NotImplementedException = require('./exceptions/NotImplementedException.js'),
  InvalidParameterException = require('./exceptions/InvalidParameterException.js');

var Isogram = function(sentence) {
  throw new NotImplementedException();
};

Isogram.prototype.isIsogram() {
  throw new NotImplementedException();
};

Isogram.prototype.sanitize() {
  throw new NotImplementedException();
};

module.exports = Isogram;
