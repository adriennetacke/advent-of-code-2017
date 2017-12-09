const assert = require('assert');
const spiralMemory = require('./spiral-memory');

describe('Day Three - Spiral Memory One', () => {
  it('should calculate 0 when square is 1', () => {
    assert.equal(spiralMemory(1), 0);
  });
  it('should calculate 3 when square is 12', () => {
    assert.equal(spiralMemory(12), 3);
  });
  it('should calculate 2 when square is 23', () => {
    assert.equal(spiralMemory(23), 2);
  });
  it('should calculate 31 when square is 1024', () => {
    assert.equal(spiralMemory(1024), 31);
  });
});
