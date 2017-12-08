const assert = require('assert');
const passphrase = require('./passphrase');

describe ('Day Four - Passphrases', () => {
  it('should validate aa bb cc dd ee', () => {
    const passphraseList =
    `aa bb cc dd ee
     aa bb cc dd aa
     aa bb cc dd aaa`;

    assert.equal(passphrase(passphraseList), 2);
  })
})
