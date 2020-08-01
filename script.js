class Element {
  constructor(sy, name, aN, mM, eN) {
    this.symbol = sy;
    this.fullName = name;
    this.atomicNumber = aN;
    this.molarMass = mM;
    this.electroNegativity = eN;
  }

  getMolarMass() {
    return `${this.molarMass} g/mol`;
  }
}


// const hydrogen = new Element("H", "Hydrogen", 1, 1.008, 2.2);
// console.log(hydrogen.symbol);
// console.log(hydrogen.fullName);
// console.log(hydrogen.atomicNumber);
// console.log(hydrogen.getMolarMass());
// console.log(hydrogen.electroNegativity);

