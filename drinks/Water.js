const Beverages = require('./Beverages');

class Water extends Beverages {
  constructor(name, price, volume) {
    super(name, price, volume);
  }
}

module.exports = Water;
