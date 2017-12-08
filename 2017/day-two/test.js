const assert = require('assert');
const checksum = require('./checksum-one');
const checksumDos = require('./checksum-two');

describe('Day Two - Part One', () => {
  it('should properly calculate checksum', () => {
    const data =
    `5 1 9 5
     7 5 3
     2 4 6 8`

    assert.equal(checksum(data), 18);
  });
});

describe('Day Two - Part Two', () => {
  it('should properly calculate second checksum', () => {
    const data =
    `5 9 2 8
     9 4 7 3
     3 8 6 5`;

     assert.equal(checksumDos(data), 9);
  });
});
