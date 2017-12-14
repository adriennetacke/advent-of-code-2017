const assert = require('assert');
const passphrase = require('./passphrase');
const passphraseTwo = require('./passphrase-two');

describe ('Day Four - Passphrases Without Duplicates', () => {
  it('should validate passphrase list one', () => {
    const passphraseList =
    `aa bb cc dd ee
     aa bb cc dd aa
     aa bb cc dd aaa`;

    assert.equal(passphrase(passphraseList), 2);
  })
});

describe ('Day Four - Passphrases Without Anagrams', () => {
  it('should validate passphrase list two', () => {
    const passphraseList =
    `abcde fghij
     abcde xyz ecdab
     a ab abc abd abf abj
     iiii oiii ooii oooi oooo
     oiii ioii iioi iiio`;

    assert.equal(passphraseTwo(passphraseList), 3);
  });
});
