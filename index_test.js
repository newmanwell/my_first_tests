const assert = require('assert')
const Rooster = require('../index.js');

describe('Rooster', () => {
  describe('.announceDown', () => {
    it('returns a rooster call', () => {
      // Setup
      const expected = 'cock-a-doodledoo';
      // Exercise
      const result = Rooster.announceDawn();
      // Verify
      assert.equal(expected, result);

    });
    describe('.timeAtDawn', () => {
      it('returns its argument as a string', () => {
        // Setup
        const expected = '5';
        // Exercise
        const result = Rooster.timeAtDawn(5);
        // Verify
        assert.equal(expected, result);
      });
    });
  });
});