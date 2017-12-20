const recursive = (input) => {
  let bottomProgram;
  let parsed = input
    .split('\n')
    .map((row) => row.trim())
    .filter((trimmedRow) => trimmedRow.includes("->"));

  const supportingProgramRegex = /([a-zA-z]*)?/;
  const supportedProgramsRegex = /([->]+[a-zA-z,\s]*)/;

  for (let i = 0; i < parsed.length; i++) {
    const supportingProgram = supportingProgramRegex.exec(parsed[i])[0];

    let counter = 0;
    let notSupportedCounter = 0;

    while (counter < parsed.length) {
      const supportedPrograms = supportedProgramsRegex.exec(parsed[counter])[0];

      if (!supportedPrograms.includes(supportingProgram)) {
        notSupportedCounter++;
      }

      if (notSupportedCounter === parsed.length) {
        bottomProgram = supportingProgram;
      }

      counter++;
    }
  }

  return bottomProgram;
}

module.exports = recursive;
