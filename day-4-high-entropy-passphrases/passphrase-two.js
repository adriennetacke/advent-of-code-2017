const passphraseTwo = (input) => {
  return input
    .split('\n')
    .map((passphrase) => passphrase
      .trim()
      .split(/[\s\t]+/)
      .map((word) => word
        .split('')
        .sort()
        .join('')
      )
    )
    .map((passphrase) => {
      for (let i = 0; i < passphrase.length; i++) {
        if (passphrase.filter(f => f == passphrase[i]).length > 1) {
          return false
        }
      }
      return true;
    })
    .filter(valid => valid === true)
    .length;
}

module.exports = passphraseTwo;
