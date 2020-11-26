// Creating Tables

const Table = require('./Table');
const firstTable = new Table(1);
const secondTable = new Table(2);
const thirdTable = new Table(3);
const fourthTable = new Table(4);

// Creating 4 Pizzas, 5 Pastas, 3 Beverages, 5 Sidedishes
const Pizza = require('./food/Pizza');
const Pasta = require('./food/Pasta');

const Soda = require('./drinks/Soda');
const Juice = require('./drinks/Juice');
const SideDish = require('./food/SideDish');

const pizza_carbonara = new Pizza('Carbonara');
const pizza_capricciosa = new Pizza('Capricciosa');
const pizza_italiana = new Pizza('Italiana');
const pizza_siciliana = new Pizza('Siciliana');

const pasta_carbonara = new Pasta('Carbonara');
const pasta_capricciosa = new Pasta('Capricciosa');
const pasta_margarita = new Pasta('Margarita');
const pasta_italiana = new Pasta('Italiana');
const pasta_vesuvio = new Pasta('Vesuvio');

const coca_cola = new Soda('Coca-Cola', 0.5);
const juice = new Juice('Orange Juice', 0.25);
const pepsi = new Soda('Pepsi', 0.3);

const ketchup = new SideDish('Ketchup');
const origano = new SideDish('Origano');
const extraCheese = new SideDish('Extra Cheese');
const barbecue = new SideDish('Barbecue');
const pepperoni = new SideDish('Pepperoni');

firstTable.addOrder([
  pizza_capricciosa,
  ketchup,
  origano,
  pasta_italiana,
  extraCheese,
  coca_cola,
  coca_cola,
]);

// firstTable.addOrder([
//   pizza_capricciosa,
//   ketchup,
//   origano,
//   pasta_italiana,
//   extraCheese,
//   coca_cola,
//   coca_cola,
// ]);

firstTable.payOrder();

// console.log(firstTable);
secondTable.addOrder([pizza_siciliana, coca_cola]);
secondTable.addOrder([pizza_capricciosa]);
secondTable.payOrder();
