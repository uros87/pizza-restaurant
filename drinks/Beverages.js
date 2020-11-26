class Beverages {
  constructor(name, volume) {
    this.name = name;
    this.volume = volume;
    this.price = Math.floor(Math.random() * (500 - 150 + 1) + 150);
  }
}

module.exports = Beverages;
