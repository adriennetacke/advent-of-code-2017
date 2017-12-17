const assert = require('assert');
const memory = require('./memory-reallocation');

describe('Day Six - Memory Reallocation', () => {
  it('should calculate proper reallocation', () => {
      const memoryBanks =
      `0 2 7 0`;

      assert.equal(memory(memoryBanks), 5);
  });
});
