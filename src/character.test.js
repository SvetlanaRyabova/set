import Character from './character.js';

test('instance of class Character', () => {
  expect(new Character('George Clooney')).toBeInstanceOf(Character);
});
