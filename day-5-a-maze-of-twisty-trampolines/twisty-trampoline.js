const twistyTrampoline = (input) => {
  const maze = input
    .split('\n')
    .map(x => parseInt(x.trim()));

  let stepsToExit = 0;
  let currentPosition = 0;

  while (currentPosition < maze.length) {
    const currentValue = maze[currentPosition];

    maze[currentPosition] += 1;
    currentPosition += currentValue
    stepsToExit++;
  }

  return stepsToExit;
}

module.exports = twistyTrampoline;
