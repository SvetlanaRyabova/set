import { arrayCharacter, Character } from './character.js';

export default class Team {
  constructor() {
    this.members = new Set();  
  }

  add() {
    arrayCharacter.forEach((arr) => {
      this.members.add(arr);
    });
    console.log(this.members);
    arrayCharacter.forEach((arr) => {
      if (this.members.has(arr)) {
        throw new Error(`${arr} уже добавлен в команду`);
      }
    });
    return this.members;
  }
}

const ch1 = new Character('George Clooney');
ch1.addPerson = 'Lady Gaga';
ch1.addPerson = 'Evgeniy Onegin';
ch1.addPerson = 'Vladimir Putin';
ch1.addPerson = 'Innokentiy Frolov';
ch1.addPerson = 'Roman Kushnarev';
ch1.addPerson = 'Roman Kushnarev';

console.log(arrayCharacter);

const team = new Team();
console.log(team);
console.log(team.add());