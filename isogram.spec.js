var Isogram = require('./isogram'),
  NotImplementedException = require('./exceptions/NotImplementedException.js'),
  InvalidParameterException = require('./exceptions/InvalidParameterException.js');

const UNPRINTABLE_CHARS = '\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f';

describe('Isogram Test Suite', function () {
  it('duplicates', function () {
    var word = new Isogram('duplicates');

    expect(word.isIsogram()).toEqual(true);
  });

  it('eleven', function () {
    var word = new Isogram('eleven');

    expect(word.isIsogram()).toEqual(false);
  });

  it('subdermatoglyphic', function () {
    var word = new Isogram('subdermatoglyphic');

    expect(word.isIsogram()).toEqual(true);
  });

  it('Alphabet', function () {
    var word = new Isogram('Alphabet');

    expect(word.isIsogram()).toEqual(false);
  });

  it('thumbscrew-japingly', function () {
    var word = new Isogram('thumbscrew-japingly');

    expect(word.isIsogram()).toEqual(true);
  });

  it('Hjelmqvist-Gryb-Zock-Pfund-Wax', function () {
    var word = new Isogram('Hjelmqvist-Gryb-Zock-Pfund-Wax');

    expect(word.isIsogram()).toEqual(true);
  });

  it('Heizölrückstoßabdämpfung', function () {
    var word = new Isogram('Heizölrückstoßabdämpfung');

    expect(word.isIsogram()).toEqual(true);
  });

  it('the quick brown fox', function () {
    var word = new Isogram('the quick brown fox');

    expect(word.isIsogram()).toEqual(false);
  });

  it('Emily Jung Schwartzkopf', function () {
    var word = new Isogram('Emily Jung Schwartzkopf');

    expect(word.isIsogram()).toEqual(true);
  });

  it('éléphant', function () {
    var word = new Isogram('éléphant');

    expect(word.isIsogram()).toEqual(false);
  });
});

describe('Isogram constructor', function() {
  it('throws InvalidParameterException when given invalid input', function() {
    expect(function() {
      var word = new Isogram({});
    }).toThrow(
      new InvalidParameterException('This constructor takes a string!'));
  });
});

describe('sanitize()', function() {
  it('Removes control characters from input strings', function() {
    var word = new Isogram(UNPRINTABLE_CHARS + 'Foo Bar');
    var actual = word.sanitize();
    var expected = 'foo bar';
    expect(actual).toEqual(expected);
  });

  it('Remove control characters from input strings containing unicode chars', function() {
    var word = new Isogram(UNPRINTABLE_CHARS + '¡Hola! ¿Qué tal? Привет! Iñtërnâtiônàlizætiøn☃');
    var actual = word.sanitize();
    var expected = '¡hola! ¿qué tal? привет! iñtërnâtiônàlizætiøn☃';
    expect(actual).toEqual(expected);
  });
});
