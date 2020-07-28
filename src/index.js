// import Character from './character.js';

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

  addAll(...args) {
    for (const arg of args) {
      this.members.add(arg);
    }
  }

  toArray() {
    return [...this.members];
  }
}
// const team1 = new Team();
// const ch1 = new Character('George Clooney');
// team1.add(ch1);
// console.log(team1);
// const ch2 = new Character('Lady Gaga');
// team1.add(ch2);
// console.log(team1);
// const team2 = new Team();
// console.log(team2);
// team2.addAll('George Clooney', 'Lady Gaga', 'Roman Kushnarev');
// console.log(team2);
// console.log(team1.toArray());
// console.log(team2.toArray());
// const ch3 = new Character('Lady Gaga');
// team1.add(ch3);
// console.log(team1);
