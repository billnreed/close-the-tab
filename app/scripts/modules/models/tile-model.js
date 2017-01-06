class TileModel {
  constructor(value) {
    this._value = value;
    this._selected = false;
    this._used = false;
  }

  getValue() {
    return this._value;
  }

  toggleSelected() {
    this._selected = !this._selected;
  }

  isSelected() {
    return this._selected;
  }

  markNotSelected() {
    this._selected = false;
  }

  markUsed() {
    this._used = true;
  }
}

export default TileModel;
