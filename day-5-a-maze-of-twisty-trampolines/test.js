const assert = require('assert');
const twistyTrampoline = require('./twisty-trampoline');

describe ('Day Five - Get Out of Maze One', () => {
  it('should calculate required steps', () => {
    const offsets =
    `0
     3
     0
     1
     -3`;

    assert.equal(twistyTrampoline(offsets), 5);
  })
});
