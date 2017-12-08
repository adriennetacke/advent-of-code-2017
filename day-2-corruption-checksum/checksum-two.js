const checksumDos = (input) => {
  const rows = input
    .split('\n')
    .map(x => x.trim()
      .split(/[\s\t]+/)
      .map(y => parseInt(y, 10))
      .sort((c, d) => { return d - c; }));
    let finalChecksum = 0;


    rows.forEach((item, i) => {
      let counter = 0;

      while (counter < item.length) {
        let firstItem = item[counter];
        let filteredItem = item.filter(dividend => dividend != firstItem);

        filteredItem.forEach((number) => {
          if (firstItem % number === 0) {
            finalChecksum += (firstItem / number);
          }
        })
        counter++;
      }
    });
    return finalChecksum;
}

module.exports = checksumDos;
