const Eukaryota = require ('./Eukaryota.js');

module.exports = class Animal extends Eukaryota {
  constructor (name, symmetry) {
    super (name, false, false, true, true);
    this._symmetry = symmetry;
  }

  get symmetry () {
    return this._symmetry;
  }

  set symmetry (input) {
    this._symmetry = input;
  }
};