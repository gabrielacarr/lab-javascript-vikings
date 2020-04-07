// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    //attack method, cant call as a function, only as mammethod
    return this.strength;
  }

  receiveDamage(damage) {
    // passing para damage to method
    this.health -= damage;
  }
}
// Viking
class Viking extends soldier {
  // extends-
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receivedDamaged(damage) {
    this.health -= damage;
    if (this.health > 0)
      return `${this.name} as received ${damage} points of damage`;
    if (this.health < 0) return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends soldier {
  receivedDamaged(damage) {
    this.health -= damage;
    if (this.health > 0) return `This saxon received ${damage}`;
    if (this.health < 0) return `This saxon has died in combat`;
  }
}
// War
class War {
  constructor() {
    this.VikingArmy = [];
    this.saxonArmy;
  }
  addViking(Viking) {
    this.VikingArmy.push(Viking);
  }
  addViking(Saxon) {
    this.SaxonArmy.push(Saxon);
  }

  vikingAttack() {
    let i = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[i];
    let randomViking = this.vikinArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    let damage = randomViking.strength;
    let message = randomSaxon.receiveDamage(damage);

    if (randomSaxon.health <= 0) this.saxonArmy.splice(i, 1);

    return message;
  }
  saxonAttack() {
    let i = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[i];
    let randomSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    let damage = randomSaxon.strength;
    let message = randomViking.receiveDamage(damage);

    if (randomViking.health <= 0) this.vikingArmy.splice(i, 1);

    return message;
  }
  showStatus() {
    if (this.vikingArmy.length === 0)
      return `Saxon have fought for their lives`;

    if (this.saxonArmy.length === 0)
      return `vikings have won the war the century!`;
  }
}
