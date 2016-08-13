var xregexp = require('xregexp'),
  NotImplementedException = require('./exceptions/NotImplementedException.js'),
  InvalidParameterException = require('./exceptions/InvalidParameterException.js');

var Isogram = function(sentence) {
  if (typeof sentence !== 'string') {
    throw new InvalidParameterException('This constructor takes a string!');
  }
  this.sentence = sentence;
  this.sentence = this.sanitize();
};

Isogram.prototype.isIsogram = function() {
  var i = 0, 
    data = {},
    regex;

  xregexp.install('astral');
  regex = xregexp('^\\pL+$');

  for (i = 0 ; i < this.sentence.length ; i++ ) {
    var letter = this.sentence[i];

    if (regex.test(letter)) {
      if (data[letter] !== undefined) {
        return false;
      } else {
        data[letter] = true;
      }
    }
  }

  return true;
};

Isogram.prototype.sanitize = function() {
  var i = 0,
    result = '',
    regex;
  xregexp.install('astral');
  regex = xregexp('^\\pC+$');

  this.sentence = this.sentence.toLowerCase();
  for (i = 0 ; i < this.sentence.length ; i++ ) {
    if (!regex.test(this.sentence[i])) {
      result = result + this.sentence[i];
    }
  }

  return result;
};

module.exports = Isogram;
