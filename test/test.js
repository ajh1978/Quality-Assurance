let functions = require('../app.js');
let assert = require('assert');

describe('Three functions', function() {
  describe('argument', function() {
    it('should return "number" when argument is number', function() {
      assert.equal('number', functions.argument(5));
    });
    it('should return "string" when argument is string', function() {
      assert.equal('string', functions.argument('Hello World'));
    });
    it('should return "boolean" when argument is "false"', function() {
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
    it('should return "beautiful" when the sentence is "Sea is beautiful"', function() {
      assert.equal('beautiful', functions.longestWord('Sea is beautiful'));
    });
    it('should return "Cockroach" when the sentence is "Cockroach is not"', function() {
      assert.equal('Cockroach', functions.longestWord('Cockroach is not'));
    });
    it('should return "mug" when the sentence is "I am a mug"', function() {
      assert.equal('mug', functions.longestWord('I am a mug'));
    });
  });
  describe('vowelCount', function() {
    it('should return 4 when string is "banana örk"', function() {
      assert.equal(4, functions.vowelCount('banana örk'));
    });
    it('should return 5 when string is "Aamen to thät"', function() {
      assert.equal(5, functions.vowelCount('Aamen to thät'));
    });
    it('should return 17 when string is "IIIÖÖÖÄÄÄeeyyy Buhuu"', function() {
      assert.equal(17, functions.vowelCount('IIIÖÖÖÄÄÄeeyyy Buhuu'));
    });
  });
});
