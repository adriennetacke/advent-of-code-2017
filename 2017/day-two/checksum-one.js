const checksum = (input) => {
  const rows = input
    .split('\n')
    .map(x => x.trim()
      .split(/[\s\t]+/)
      .map(y => parseInt(y, 10)));
  let checksum = 0;

  for (let i = 0; i < rows.length; i++) {
    checksum += Math.max(...rows[i]) - Math.min(...rows[i]);
  }
  return checksum;
}

module.exports = checksum;
