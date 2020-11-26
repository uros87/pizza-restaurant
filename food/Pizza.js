const Food = require('./Food');

class Pizza extends Food {
  constructor(name) {
    super(name);
  }
}

module.exports = Pizza;
