const memoryTwo = (input) => {
  let memoryBank = input
    .split(/[\s\t]+/)
    .map((x) => parseInt(x, 10));

  let loops = 0;
  let isDuplicatedFormation = false;
  let formations = [];

  formations.push(memoryBank.slice().toString());

  while (!isDuplicatedFormation) {
    const findHighestValue = (number) => {
      return number >= Math.max(...memoryBank);
    }

    let highestPosition = memoryBank.findIndex(findHighestValue);
    let counter = memoryBank[highestPosition];

    memoryBank[highestPosition] = 0;

    let position = highestPosition === memoryBank.length - 1 ? 0 : highestPosition + 1;

    while (counter > 0) {
      memoryBank[position] += 1;

      position = position === memoryBank.length -1 ? 0 : position + 1;

      counter--;
    }

    const redistribution = memoryBank.slice().toString();

    if (formations.includes(redistribution)) {
      isDuplicatedFormation = true;

      let firstInstance = formations.indexOf(redistribution);
      let secondInstance = formations.length;

      loops = secondInstance - firstInstance;
    } else {
      formations.push(redistribution);
    }
  }
  return loops;
}

module.exports = memoryTwo;
