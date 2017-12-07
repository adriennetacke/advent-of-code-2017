const assert = require('assert');
const checksum = require('./checksum-one');

describe('Day Two - Part One', () => {
  it('should properly calculate checksum', () => {
    const data =
    `5 1 9 5
     7 5 3
     2 4 6 8`

    assert.equal(checksum(data), 18);
  });
});
