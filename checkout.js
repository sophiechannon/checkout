class Shop {

  checkout(string) {
    if (string.match(/[^A-D]/) != null) return -1;
    string = string.split('').sort().join('');
    let total = 0 + this.deals(string);

    string.split('').forEach((item) => {
      if (item === 'A') {
        total += 50;
      } else if (item === 'B') {
        total += 30;
      } else if (item === 'C') {
        total += 20;
      } else if (item === 'D') {
        total += 15;
      } else {
        total =- 0
      }
    });
    return total;
  };

  deals(string) {
    let reduction = 0;
    let numberOfAs = string.split('').filter((item) => item === "A").length;
    let numberOfBs = string.split('').filter((item) => item === "B").length;
    if (string.includes("AAA")) {
      reduction -= 20 * Math.floor(numberOfAs/3);
    }
    if (string.includes("BB")) {
      reduction -= 15 * Math.floor(numberOfBs/2);
    }
    return reduction;
  }
}



module.exports = Shop;