module.exports = class LivingThing {
  constructor (name, uniCellular, trueNucleus, anaerobic, asexual, mobile) {
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name () {
    return `Name: ${this._name}`;
  }

  set name (input) {
    if (typeof (input) === 'string') {
      this._name
    }
  }
};