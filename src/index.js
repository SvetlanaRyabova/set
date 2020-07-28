import { Character } from './character.js';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(value) {
    if (this.members.has(value.name)) {
      throw new Error(`Игрок ${value.name} уже добавлен в команду`);
    }
    this.members.add(value.name);
  }
}
const team = new Team();
const ch1 = new Character('George Clooney');
team.add(ch1);
console.log(team);
const ch2 = new Character('Lady Gaga');
team.add(ch2);
console.log(team);
const ch3 = new Character('Lady Gaga');
team.add(ch3);
console.log(team);

// const ch3 = new Character('George Clooney');
// const ch4 = new Character('George Clooney');
// const ch5 = new Character('George Clooney');
// const ch6 = new Character('George Clooney');
// const ch7 = new Character('George Clooney');
// const ch8 = new Character('George Clooney');
// ch1.addPerson = 'Lady Gaga';
// ch1.addPerson = 'Evgeniy Onegin';
// ch1.addPerson = 'Vladimir Putin';
// ch1.addPerson = 'Innokentiy Frolov';
// ch1.addPerson = 'Roman Kushnarev';
// ch1.addPerson = 'Roman Kushnarev';

// console.log(arrayCharacter);
// const team = new Team();
// team.clear();
// console.log(team);
// console.log(team.add());
// console.log(team);
