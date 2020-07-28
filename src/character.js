export const arrayCharacter = [];
export class Character {
  constructor(name) {
    this.name = name;
    this.group();
  }

  group() {
    arrayCharacter.push(this.name);
    return arrayCharacter;
  }

  set addPerson(value) {
    this.name = value;
    this.group();
  }
}
// const ch1 = new Character('George', 'Clooney');
// console.log(arrayCharacter);
// ch1.addPerson = ['Lady', 'Gaga'];
// console.log(arrayCharacter);
// ch1.addPerson = ['Evgeniy', 'Onegin'];
// console.log(arrayCharacter);
// ch1.addPerson = ['Vladimir', 'Putin'];
// console.log(arrayCharacter);
// ch1.addPerson = ['Innokentiy', 'Frolov'];
// console.log(arrayCharacter);
// ch1.addPerson = ['Roman', 'Kushnarev'];
// console.log(arrayCharacter);
