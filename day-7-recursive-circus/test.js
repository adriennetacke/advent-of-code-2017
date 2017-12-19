const assert = require('assert');
const memory = require('./recursive');

describe('Day Seven - Recursive Circus', () => {
  it('should find name of bottom program', () => {
      const list =
      `pbga (66)
       xhth (57)
       ebii (61)
       havc (66)
       ktlj (57)
       fwft (72) -> ktlj, cntj, xhth
       qoyq (66)
       padx (45) -> pbga, havc, qoyq
       tknk (41) -> ugml, padx, fwft
       jptl (61)
       ugml (68) -> gyxo, ebii, jptl
       gyxo (61)
       cntj (57)`;

      assert.equal(recursive(list), 'tknk');
  });
});
