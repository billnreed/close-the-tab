class DieView {
  constructor(selector) {
    this._el = document.createElement('div');
    this._el.classList.add('die');
    this._parentEl = document.querySelector('.dice');
    this._parentEl.appendChild(this._el);
  }

  setValue(value) {
    this._el.textContent = value;
  }

  clear() {
    this.setValue('');
  }

  destroy() {
    this._parentEl.removeChild(this._el);
  }
}

export default DieView;
