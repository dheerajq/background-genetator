class onePiece {
  constructor(haki, deviFruit, weapon) {
    this.haki = haki;
    this.deviFruit = deviFruit;
    this.weapon = weapon;
  }
  attack() {
    return "the strongest haki is " + this.haki;
  }
  power() {
    return "the strongest power in one piece is " + this.deviFruit;
  }
  weapon() {
    return "the strongest weapon" + this.weapon;
  }
}
const luffy = new onePiece("luffy", "devilFruits", "stone");
console.log(luffy.power());
console.log(luffy.attack());
console.log(luffy.weapon());
