var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('test if the output of 5! is equal to 120', () => {
      // Setup
      const expected = 120;
      // Exercise
      const fact = 5;
      const result = Calculate.factorial(fact);
      //Verify
      assert.equal(result, expected);
    });

    it('test if the output of 6! is equal to 720', () => {
      // Setup
      const expected = 720;
      // Exercise
      const fact = 6;
      const result = Calculate.factorial(fact);
      //Verify
      assert.equal(result, expected);
    });

    it('returns 1 if fact = 0', () => {
      // Setup
      const expected = 1;
      const fact = 0;
      // Exercise
      const result = Calculate.factorial(fact);
      // Verify
      assert.equal(expected, result);
    });
  });
});