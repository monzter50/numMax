let NumMax = require("./NumClass");

test("Camino 1: Cuando x es mayor ante y,z ", () => {
  let numMax = new NumMax(4, 2, 1);
  numMax.calculate();
  expect(numMax.getMax()).toBe(4);
});

test("Camino 2: Cuando z es mayor ante y,x ", () => {
  let numMax = new NumMax(4, 2, 5);
  numMax.calculate();
  expect(numMax.getMax()).toBe(5);
});

test("Camino 3: Cuando z es mayor ante y,x ", () => {
  let numMax = new NumMax(2, 3, 5);
  numMax.calculate();
  expect(numMax.getMax()).toBe(5);
});

test("Camino 4: Cuando y es mayor ante z,x ", () => {
  let numMax = new NumMax(2, 5, 3);
  numMax.calculate();
  expect(numMax.getMax()).toBe(5);
});
