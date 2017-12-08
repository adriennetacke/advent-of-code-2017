const captcha = (input) => {
  let breakdown = input.split("").map(Number);
  let total = 0;

  for (let i = 0; i <= breakdown.length; i++) {
    let first = parseInt(breakdown[i], 10);
    let second = parseInt(breakdown[i + 1], 10);

    if (first == second) {
      total += first;
    }

    if (i == breakdown.length - 1) {

      let first = parseInt(breakdown[0], 10);
      let last = parseInt(breakdown[i], 10);

      if (first == last) {
        total += last;
      }
    }

  }

  return total;
}

module.exports = captcha;
