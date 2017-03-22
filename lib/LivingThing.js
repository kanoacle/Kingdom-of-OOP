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
    return this._name;
  }

  set name (input) {
    if (typeof (input) === 'string') {
      this._name = input;
    } else {
      throw new TypeError ('LivingThing.name must be a string');
    }
  }

  get uniCellular () {
    return this._uniCellular;
  }

  set uniCellular (input) {
    this._uniCellular = input;
  }

  get multiCellular () {
    return !this._uniCellular;
  }

  set multiCellular (input) {
    this._uniCellular = !input;
  }

  get eukaryote () {
    return this._trueNucleus;
  }

  set eukaryote (input) {
    this._trueNucleus = input;
  }

  get prokaryote () {
    return !this._trueNucleus;
  }

  set prokaryote (input) {
    this._trueNucleus = !input;
  }

  get anaerobic () {
    return this._anaerobic;
  }

  set anaerobic (input) {
    this._anaerobic = input;
  }

  get aerobic () {
    return !this._anaerobic;
  }

  set aerobic (input) {
    this._anaerobic = !input;
  }

  get asexual () {
    return this._asexual;
  }

  set asexual (input) {
    this._asexual = input;
  }

  get sexual () {
    return !this._asexual;
  }

  set sexual (input) {
    this._asexual = !input;
  }

  get mobile () {
    return this._mobile;
  }

  set mobile (input) {
    this._mobile = input;
  }

  get immobile () {
    return !this._mobile;
  }

  set immobile (input) {
    this._mobile = !input;
  }
};