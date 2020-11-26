class Receipt {
  constructor(tableNum, total) {
    this.tableNum = tableNum;
    this.date = new Date();
    this.total = total;
  }
}

module.exports = Receipt;
