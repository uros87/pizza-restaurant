const Beverages = require('./Beverages');

class Soda extends Beverages {
  constructor(name, price, volume) {
    super(name, price, volume);
  }
}

module.exports = Soda;
