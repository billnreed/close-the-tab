class DieView {
  constructor(selector) {
    this._el = document.querySelector(selector);
  }

  setValue(value) {
    this._el.textContent = value;
  }
}

export default DieView;
