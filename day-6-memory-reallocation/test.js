const assert = require('assert');
const memory = require('./memory-reallocation');
const memoryTwo = require('./memory-reallocation-two');

describe('Day Six - Memory Reallocation', () => {
  it('should calculate proper reallocation', () => {
      const memoryBanks =
      `0 2 7 0`;

      assert.equal(memory(memoryBanks), 5);
  });
});

describe('Day Six - Memory Reallocation ', () => {
  it('should calculate proper reallocation', () => {
      const memoryBanks =
      `0 2 7 0`;

      assert.equal(memoryTwo(memoryBanks), 4);
  });
});
