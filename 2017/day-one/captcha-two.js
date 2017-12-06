const captchaTwo = (input) => {
  const breakdown = input.split('').map(x => parseInt(x, 10));
  const middle = breakdown.length / 2;

  return breakdown.reduce((accumulator, currentValue, currentIndex) => {
    if ((currentIndex < middle) && (currentValue === breakdown[currentIndex + middle])) {
      return accumulator + currentValue;
    } else if ((currentIndex >= middle) && (currentValue === breakdown[currentIndex - middle])) {
      return accumulator + currentValue;
    }

    return accumulator;
  }, 0);
};

module.exports = captchaTwo;
