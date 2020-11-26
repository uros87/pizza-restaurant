class SideDish {
  constructor(name) {
    this.name = name;
    this.price = Math.floor(Math.random() * (100 - 20 + 1) + 20);
  }
}

module.exports = SideDish;
