const twistyTrampolineTwo = (input) => {
  const maze = input
    .split('\n')
    .map(x => parseInt(x.trim()));

  let stepsToExit = 0;
  let currentPosition = 0;

  while (currentPosition < maze.length) {
    const currentValue = maze[currentPosition];

    if (currentValue >= 3) {
      maze[currentPosition] -= 1
    } else {
      maze[currentPosition] += 1;
    }

    currentPosition += currentValue
    stepsToExit++;
  }

  return stepsToExit;
}

module.exports = twistyTrampolineTwo;
