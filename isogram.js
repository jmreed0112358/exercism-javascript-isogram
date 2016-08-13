var xregexp = require('xregexp'),
  NotImplementedException = require('./exceptions/NotImplementedException.js'),
  InvalidParameterException = require('./exceptions/InvalidParameterException.js');

var Isogram = function(sentence) {
  if (typeof sentence !== 'string') {
    throw new InvalidParameterException('This constructor takes a string!');
  }
  this.sentence = sentence;
};

Isogram.prototype.isIsogram = function() {
  throw new NotImplementedException();
};

Isogram.prototype.sanitize = function() {
  var i = 0,
    result = '',
    regex;
  xregexp.install('astral');
  regex = xregexp('^\\pC+$');

  for (i = 0 ; i < this.sentence.length ; i++ ) {
    if (!regex.test(this.sentence[i])) {
      result = result + this.sentence[i];
    }
  }

  return result;
};

module.exports = Isogram;
