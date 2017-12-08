const passphrase = (input) => {
  let passphraseRows = input
    .split('\n')
    .map((x) => x
      .trim()
      .split(/[\s\t]+/)
    )
    .map((passphrase) => {
      for (let i = 0; i < passphrase.length; i++) {
        let filteredPassphrase = passphrase.filter(p => p == passphrase[i]);
         if (filteredPassphrase.length > 1) {
            return false;
         }
      }
      return true;
    })
    .filter(good => good === true)
    .length;

    return passphraseRows;
}

module.exports = passphrase;
