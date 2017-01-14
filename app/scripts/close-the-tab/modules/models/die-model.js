class DieModel {
  constructor() {
    this._value = 0;
  }

  setValue(value) {
    this._value = value;
  }

  getValue() {
    return this._value;
  }

  clear() {
    this._value = 0;
  }
}

export default DieModel;
