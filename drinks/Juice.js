const Beverages = require('./Beverages');

class Juice extends Beverages {
  constructor(name, price, volume) {
    super(name, price, volume);
  }
}

module.exports = Juice;
