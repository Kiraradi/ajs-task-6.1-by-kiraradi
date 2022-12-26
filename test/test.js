import sortByKeys from '../src/sortByKeys';

test('sorting test', () => {
  const objTest = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };

  const answer = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 }, 
    { key: 'attack', value: 80 }, 
    { key: 'defence', value: 40 }, 
    { key: 'health', value: 10 }, 
  ];

  const result = sortByKeys(objTest, ['name', 'level']);

  expect(result).toEqual(answer);
});

test('error', () => {
  const objTest = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };

  const answer = [
    { key: 'name', value: 'мечник' }, 
    { key: 'level', value: 2 }, 
    { key: 'attack', value: 80 }, 
    { key: 'defence', value: 40 }, 
    { key: 'health', value: 10 }, 
  ];
  expect(() => {
    sortByKeys(objTest, ['nrrame', 'level']);
  }).toThrow();
});
