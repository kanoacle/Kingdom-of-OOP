const LivingThing = require ('./LivingThing.js');

module.exports = class Archaea extends LivingThing {
  constructor (name) {
    super (true, false, true, true, false);
    this._name = name;
  }
};