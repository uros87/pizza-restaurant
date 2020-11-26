class Food {
  constructor(name) {
    this.name = name;
    this.price = Math.floor(Math.random() * (600 - 300 + 1) + 300);
  }
}

module.exports = Food;
