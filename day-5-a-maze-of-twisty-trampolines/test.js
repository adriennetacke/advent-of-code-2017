const assert = require('assert');
const twistyTrampoline = require('./twisty-trampoline');
const twistyTrampolineTwo = require('./twisty-trampoline-two');

describe ('Day Five - Get Out of Maze One', () => {
  it('should calculate required steps', () => {
    const offsets =
    `0
     3
     0
     1
     -3`;

    assert.equal(twistyTrampoline(offsets), 5);
  });
});

describe ('Day Five - Get Out of Maze Two', () => {
  it('should calculate required steps', () => {
    const offsets =
    `0
     3
     0
     1
     -3`;

    assert.equal(twistyTrampolineTwo(offsets), 10);
  });
});
