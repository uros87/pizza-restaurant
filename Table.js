const Receipt = require('./Receipt');

class Table {
  constructor(num) {
    this.num = num;
    this.unpayedOrders = [];
    this.payedOrders = [];
  }
  addOrder(order) {
    if (this.unpayedOrders.length !== 0) {
      console.log(
        'Nije moguće izdati novu porudžbinu jer prethodna nije plaćena'
      );
      return;
    }
    this.unpayedOrders.push(order);
    console.log(order);
  }

  payOrder() {
    let total = 0;

    total = this.unpayedOrders[0].reduce((acc, el) => {
      return acc + parseInt(el.price, 10);
    }, 0);

    let receipt = new Receipt(this.num, total);

    this.payedOrders.push(this.unpayedOrders[0]);
    this.unpayedOrders.pop();
    console.log(receipt);
  }
}

module.exports = Table;
