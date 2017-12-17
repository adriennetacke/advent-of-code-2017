const memory = (input) => {
  let memoryBank = input
    .split(/[\s\t]+/)
    .map((x) => parseInt(x, 10));

  let redistributions = 0;
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
    } else {
      formations.push(redistribution);
    }

    redistributions++;
  }
  return redistributions;
}

module.exports = memory;
