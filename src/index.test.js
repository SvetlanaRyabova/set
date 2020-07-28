import Team from './index.js';
import Character from './character.js';

test('instance of class Team', () => {
  expect(new Team('George Clooney')).toBeInstanceOf(Team);
});

test('throws Error', () => {
  const team = new Team();
  const ch1 = new Character('Ronaldo');
  team.add(ch1);
  const ch2 = new Character('Ronaldo');
  expect(() => {
    team.add(ch2);
  }).toThrow();
});

test('add', () => {
  const team = new Team();
  const ch1 = new Character('Ronaldo');
  team.add(ch1);
  const ch2 = new Character('Messi');
  team.add(ch2);
  const array = [...team.members];
  expect(array).toEqual(
    expect.arrayContaining(['Ronaldo', 'Messi']),
  );
});

test('addAll', () => {
  const team = new Team();
  team.addAll('Ronaldo', 'Messi');
  const array = [...team.members];
  expect(array).toEqual(expect.arrayContaining(['Ronaldo', 'Messi']));
});

test('to Array', () => {
  const team = new Team();
  team.addAll('Ronaldo', 'Messi');
  const array = team.toArray();
  expect(array).toEqual(expect.arrayContaining(['Ronaldo', 'Messi']));
});
