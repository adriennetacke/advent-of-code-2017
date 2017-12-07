const checksum = (input) => {
  const rows = input.split('\n').map(x => x.trim());
  let checksum = 0;

  for (let i = 0; i < rows.length; i++) {
    let temprow = rows[i].split(/[\s\t]+/).map(x => parseInt(x, 10));
    checksum += Math.max(...temprow) - Math.min(...temprow);
  }
  return checksum;
}

module.exports = checksum;
