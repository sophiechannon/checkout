const items = {
  'A' : 50,
  'B' : 30,
  'C' : 20,
  'D' : 15
}

class Shop {
  checkout(string) {
    if (string.match(/[^A-D]/) != null) return -1;
    const itemArray = string.split('');
    let total = 0 + this.deals(itemArray);

    itemArray.forEach((item) => {
      total += items[item]
    });

    return total;
  };

  deals(items) {
    let reduction = 0;
    const numberOfAs = items.filter((item) => item === "A").length;
    const numberOfBs = items.filter((item) => item === "B").length;
    if (numberOfAs >= 3) {
      reduction -= 20 * Math.floor(numberOfAs/3);
    }
    if (numberOfBs >= 2) {
      reduction -= 15 * Math.floor(numberOfBs/2);
    }
    return reduction;
  }
}



module.exports = Shop;