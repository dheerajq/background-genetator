class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  makeWebSite() {
    return "dheeraj can make website using reactjs";
  }
}
class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  canMakeColor() {
    return "ogre can make color house";
  }
}
const Dheeraj = new Character("dheeraj", "fist");
console.log(Dheeraj.makeWebSite());
const prashant = new Ogre("prashant oger", "gamming", "red");
console.log(prashant.canMakeColor());
console.log(prashant.name);
