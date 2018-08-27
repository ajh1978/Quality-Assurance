let functions = require('../app.js');
let assert = require('assert');

  describe('argument', function() {
    it('should return "number" when argument is number', function() {
      assert.equal('number', functions.argument(22));
    });
    it('should return "string" when argument is string', function() {
      assert.equal('string', functions.argument('Hello World'));
    });
    it('should return "boolean" when argument is boolean', function() {
      assert.equal('boolean', functions.argument(false));
    });
    it('should return "need an argument" when no argument', function() {
      assert.equal('need an argument', functions.argument());
    });
    it('should return "null" when argument is null', function() {
      assert.equal('null', functions.argument(null));
    });
  });

  describe('longestWord', function() {
    it('should return "beautiful" when given following sentence', function() {
      assert.equal('beautiful', functions.longestWord('Sea is beautiful'));
    });
    it('should return longest number if given numbers in text as parameters', function() {
      assert.equal('999922', functions.longestWord('999922 3333 44 5'));
    });
    it('should return "argument is not a string" when the sentence is not a string', function() {
      assert.equal('argument is not a string', functions.longestWord(5));
    });
  });

  describe('vowelCount', function() {
    it('should return 12 when given following string', function() {
      assert.equal(12, functions.vowelCount('banana örk in Alabama ÖÄå'));
    });
    it('should return "argument is not a string" when the sentence is not a string', function() {
      assert.equal('argument is not a string', functions.vowelCount(5));
    });
  });
