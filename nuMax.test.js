let max =  require('./utils')


test('Camino 1: Cuando x es mayor ante y,z ', () => {
    expect(max(4, 2,1)).toBe(4);
});

test('Camino 2: Cuando z es mayor ante y,x ', () => {
    expect(max(4, 2,5)).toBe(5);
});

test('Camino 3: Cuando z es mayor ante y,x ', () => {
    expect(max(2, 3,5)).toBe(5);
});

test('Camino 4: Cuando y es mayor ante z,x ', () => {
    expect(max(2, 5,3)).toBe(5);
});