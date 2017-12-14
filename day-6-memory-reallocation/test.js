const assert = require('assert');
const memory = require('./memory-reallocation');

describe('Day Six - Memory Reallocation', () => {
  it('should calculate proper reallocation', () => {
      const memoryBanks =
      `4	10	4	1	8	4	9	14	5	1	14	15	0	15	3	5`;

      assert.equal(memory(memoryBanks), 5);
  });
});
